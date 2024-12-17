import FormRegister from "@/app/components/pages/FromRegister";

export default function RegisterPage() {
    return (
        <div>
            <FormRegister
                logoSrc="/images/Yhoiki.png"
                bgImageSrc="/images/bg-login.png"
                logoAlt="Yhoiki Logo"
                logoText="Yhoiki"
                buttonText="Register"
                buttonUrl="/register"
                loginUrl="/login"
            />
        </div>
    );
}
