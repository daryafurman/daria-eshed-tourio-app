import styled from "styled-components";
import { FormContainer, Input, Label } from "./Form";
import { StyledButton } from "./StyledButton.js";

export default function Comments({ submitComment, locationName, comments }) {
  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid black;
    border-radius: 0.8rem;
    padding: 0.5rem;
    text-align: center;
    p {
      border-bottom: solid 1px black;
      padding: 20px;
    }
  `;

  async function handleSubmitComment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const { comment } = data;
    if (comment === "") {
      alert("Please write a comment.");
      return;
    }
    submitComment(data);
  }

  return (
    <Article>
      <FormContainer onSubmit={handleSubmitComment}>
        <Label htmlFor="name">Your Name</Label>
        <Input type="text" name="name" placeholder="name" />
        <Label htmlFor="comment">Your Comment</Label>
        <Input type="text" name="comment" placeholder="comment here..." />
        <StyledButton type="submit">Send</StyledButton>
      </FormContainer>
      {comments && (
        <>
          <h1> {comments.length} fans commented on this place:</h1>
          {comments.map(({ name, comment, _id }) => {
            return (
              <div key={_id}>
                <p>
                  <small>
                    <strong>{name}</strong> commented on {locationName}
                  </small>
                </p>
                <span>{comment}</span>
              </div>
            );
          })}
        </>
      )}
    </Article>
  );
}
