import styled from "styled-components";

export const HomeWrapper=styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:10rem;
h1 {
    font-size:2rem;
    font-weight:bold;
    margin-bottom:3rem;
    text-transform:uppercase;
    letter-spacing:0.2rem;
}
img {
    width:300px;
    border-radius:5px;
}
p {
    max-width:300px;
    margin:0 5rem;
    line-height:1.5rem;
    letter-spacing:0.2rem;
}
@media screen and (max-width:900px) {
    flex-direction:column;
    margin-top:3rem;
    img {
        max-width:500px;

    }
    h1 {
        margin-top:2rem;
    }
}`;