import styled from "styled-components";

const PostContainer_ = styled.section`

  margin: 0 auto 2rem auto;
  max-width: var(--container-width);

  & a{
    color: #DC2A2A;

    & > h2{

      margin: 0;
      color: #DC2A2A;
    }

    &:hover, & h2:hover{

      color: #AA0000;
    }
  }

  .info{

    font-size: 0.9rem;
    color: #555;
    margin: 0.25rem 0;
  }
`;

const ShareContainer_ = styled.div`

  margin-top: 1rem;

  & > a{

    margin-right: 8px;
  }
`;
export {PostContainer_, ShareContainer_}
