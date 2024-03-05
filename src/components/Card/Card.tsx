import {
    StyledCard,
    StyledCardAction,
    StyledCardButton,
    StyledCardDescription,
    StyledCardImage,
    StyledCardTitle
} from "./Card.styled";
import {myTheme} from "../../styles/Theme.styled";
import image from '../../assets/images/image.png';
import exp from "constants";

export function Card() {
    return (
        <StyledCard>
            <CardImage/>
            <CardTitle title={"Headline"}/>
            <CardDescription description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>
            <CardAction/>
        </StyledCard>
    )
}

export function CardImage() {
    return (
        <StyledCardImage src={image} alt="Desert"/>
    )
}

type CardTitlePropsType = {
    title: string
}

export function CardTitle(props: CardTitlePropsType) {
    return (
        <StyledCardTitle>{props.title}</StyledCardTitle>
    )
}

type CardDescriptionPropsType = {
    description: string
}

export function CardDescription(props: CardDescriptionPropsType) {
    return (
        <StyledCardDescription>
            {props.description}
        </StyledCardDescription>
    )
}

// export function CardAction() {
//     return (
//         <StyledCardAction>
//             <StyledCardButton color={myTheme.colors.primary} btnType={"primary"}>See more</StyledCardButton>
//             <StyledCardButton color={myTheme.colors.primary} btnType={"outlined"}>Save</StyledCardButton>
//         </StyledCardAction>
//     )
// }

export function CardAction() {
    return (
        <StyledCardAction>
            <CardButton title={"see more"} btntype={"primary"} color={myTheme.colors.primary}/>
            <CardButton title={"save"} btntype={"outlined"} color={myTheme.colors.primary}/>
        </StyledCardAction>
    )
}

type CardButtonPropsType = {
    title: string,
    color: string,
    btntype: "primary" | "outlined"
}

export function CardButton(props: CardButtonPropsType) {
    return (
        <StyledCardButton color={props.color} btntype={props.btntype}>{props.title}</StyledCardButton>
    )
}