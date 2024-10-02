html{
    background-color:rgb(25, 23, 26);
}
img{
    padding:0px;
    margin-top:200px;
    margin-left:600px;
    padding:0px;
    border-radius :50%;
    box-shadow:0px 0px 400px rgb(20, 20, 20);
}
/* Fade-in animation */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* Apply the animation to the image */
img {
    width: 300px;
    animation: fadeIn 2s ease-in-out; /* 2 seconds fade-in effect */
}
