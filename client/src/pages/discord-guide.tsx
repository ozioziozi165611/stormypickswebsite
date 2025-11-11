import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function DiscordGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black/90">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4" data-testid="heading-discord-guide">
              How to get access to a Discord server
            </h1>
            <p className="text-white/60 text-lg">
              Access a Discord server after purchasing a membership through Whop
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <img
              src="https://downloads.intercomcdn.com/i/o/llm7ll78/1338834540/dfb514d4862619b53fc18581e1e5/How+to+connect+discord+to+your+account.gif?expires=1762860600&signature=adbf8cb64d916221caff1ceba2e98f6720556dcb80ccb3c8b2e3072b5abd1a7b&req=dSMkHsF9mYRbWfMW1HO4zaEqbchBvs8PDlCGj%2BoYTKVnebwI5FmgJrTeTyFs%0AxMueYe6%2F8OM0jQsQds%3D%0A"
              alt="How to connect Discord to your account"
              className="w-full rounded-md"
              data-testid="img-discord-guide"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 text-lg mb-6">
              In order to join a Discord server through Whop, you must first attach an existing Discord account to your Whop account. If you previously added your Discord account to Whop, refer directly to <strong>Joining a Discord Server</strong>.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4" data-testid="heading-linking-account">
              Linking Your Existing Discord Account to Whop
            </h2>
            
            <ol className="space-y-4 text-white/80 text-lg list-decimal list-inside">
              <li>Sign into your account on Whop.</li>
              <li>
                Visit{" "}
                <a 
                  href="https://whop.com/@me/settings/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                  data-testid="link-whop-settings"
                >
                  https://whop.com/@me/settings/
                </a>{" "}
                to view and edit your account settings.
              </li>
              <li>Click on the <strong>Connected Accounts</strong> tab.</li>
              <li>Under <strong>Add New Account</strong> select <strong>Discord</strong>. You will be redirected to Discord in a new tab within your browser.</li>
              <li>On the Discord site, log into your Discord account.</li>
              <li>Once you are logged in, a form titled <strong>Whop Bot</strong> should appear. Scroll down on this form and click <strong>Authorize</strong> at the bottom. You will now be redirected back to Whop.</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4" data-testid="heading-joining-server">
              Joining a Discord Server
            </h2>
            
            <ol className="space-y-4 text-white/80 text-lg list-decimal list-inside">
              <li>Visit the Whop page with the Discord you intend to access.</li>
              <li>Click on the <strong>Discord app</strong> in the Whop.</li>
              <li>Select your Discord account and click <strong>Claim Access</strong>.</li>
              <li>You will be redirected to the Discord site and should now have access to the Discord community.</li>
            </ol>
          </div>

          <div className="pt-6 border-t border-white/10">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-back-home-bottom">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
