import { useState, ChangeEvent, FormEvent } from 'react';
import Layout from '../../components/MyLayout';
import axios  from 'axios';
import styled from 'styled-components'

const Heading = styled.h1`
  width: 250px;
  margin: 30px auto 40px;
`
const NewPostForm = styled.form`
  width: 250px;
  margin: 30px auto 50px;
  text-align: center;

  input {
    width: 100%;
     padding: 5px;
     border: 1px solid black;
     border-radius: 2px;

    &:focus {
     background-color: #e6e6e6;
    }
  }

  textarea {
    width: 100%;
    padding: 5px;
    margin: 20px auto 0;
    border: 1px solid black;
    border-radius: 2px;
  }
  .error {
    text-align: left;
    color: red;
  }
`

const SubmitButton = styled.button`
  width: 80px;
  padding: 5px;
  text-align: center;
  margin: 20px auto 0;
  background-color: #00cc66;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`
const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(false);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setError(false);
    setBody(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (title.trim() !== '' &&  body.trim() !== '') {
      await axios
        .post('https://simple-blog-api.crew.red/posts', { title, body });
      setTitle('');
      setBody('');
    } else {
      setError(true);
    }
  }  
    return(
      <Layout>
        <Heading>Create new post</Heading>
          <NewPostForm onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              name="title"
              placeholder="Enter the title"
              onChange={handleTitleChange}
            />
            {(error && title.trim() === '') && <div className="error">The title is empty</div>}
            <textarea
              rows={5}
              value={body} 
              name="body"
              placeholder="Enter the post" 
              onChange={handleBodyChange} 
            />
            {(error && body.trim() === '') && <div className="error">The post field is empty</div>}
            <SubmitButton type="submit">Create</SubmitButton>
          </NewPostForm>
      </Layout>
    );
  };

export default NewPost;