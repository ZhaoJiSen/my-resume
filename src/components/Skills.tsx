interface SkillProps {
  name: string;
}

export function Skill(props: SkillProps) {
    return (
        <span 
            class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
        >
            {props.name}
        </span>
    )
}
