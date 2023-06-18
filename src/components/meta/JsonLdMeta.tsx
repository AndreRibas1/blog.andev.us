import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import config from "../../lib/config";
import { formatISO } from "date-fns";
import Head from "next/head";

type Props = {
  url: string;
  title: string;
  keywords?: string[];
  date: Date;
  author?: string;
  image?: string;
  description?: string;
};
export default function JsonLdMeta({
  url,
  title,
  keywords,
  date,
  author,
  image,
  description,
}: Props) {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<BlogPosting>({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: config.base_url + url,
          headline: title,
          keywords: keywords ? undefined : keywords.join(","),
          datePublished: formatISO(date),
          author: author,
          image: image,
          description: description,
        })}
      />
      
<!-- Start Open Web Analytics Tracker -->
<script type="text/javascript">
//<![CDATA[
var owa_baseUrl = 'http://analytics.arnext.net/';
var owa_cmds = owa_cmds || [];
owa_cmds.push(['setSiteId', '4e7c329d73bc24d09bd687aaefddfbc0']);
owa_cmds.push(['trackPageView']);
owa_cmds.push(['trackClicks']);

(function() {
    var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
    owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
    _owa.src = owa_baseUrl + 'modules/base/dist/owa.tracker.js';
    var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
}());
//]]>
</script>
<!-- End Open Web Analytics Code -->

        
    </Head>
  );
}
