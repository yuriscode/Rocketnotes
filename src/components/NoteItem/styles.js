import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${ theme.COLORS.GRAY_300 }` : 'none'};

    margin-bottom: .8rem;
    border-radius: 1rem;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;

        svg {
            color: ${({ theme, isNew }) => isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
        }
    }

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }
    }   

`