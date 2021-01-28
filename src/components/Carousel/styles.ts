import styled from 'styled-components';

export const CarouselContainer = styled.aside`
  .carousel .control-dots .dot {
    background: #fffaf3;
    box-shadow: none;
    width: 12px;
    height: 12px;
    border: 2px solid #fffaf3;
  }

  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:hover {
    background: #ff4100;
  }

  @media (max-width: 768px) {
    margin: 10px;

    .carousel img {
      border-radius: 5px;
    }
  }
`;
