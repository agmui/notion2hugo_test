---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEF277D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDzsQ0l0YIxHNSQQL6%2FF50zct2I6AOp5sXChZ7pr%2BMDSAIgeD0fdXGU0e3S2Z9OSwTIuYhk4dWUlPS389vTsRoxrgAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLh6N33ki2E09zslCrcAyCx3Zcr022IimKDlX7g235Jq5aCHQemJ%2BeSIbUsRSSuHZED5WhMgKbLt44yXhTbj%2B9zemlWamZFPhFRA7ph5ulIpZEsS%2BabJZkez6Ni7OJH6z1U7feduYp9TDZWzKgzfc3Q4ZcyWj%2FwuppYBb2rN9Jc4HAI0E8EZDgHj%2BzolPoRtbjaqI5d%2FM86eoAyGyIWzvmCH6HPV9eJm8faKdj2LveiUX%2FL92JXORxNf9knQfMDt7qwhOpUKc878mrZdnklqN8RXl4ZoTwuhYTQ7kx7mJcMvhO8TpUi8EJeH3EgW5O9s3OxGyg%2FAWGFweaBlhUM5lO9eujRTrgBf36ZNjXEE3laMyhDoOB6NN5nirTKddY9Fw3nsagfywKuAH8jmZPtDj0LSvIpIARCtUqsnTecc4Ag%2BsqjzPyLxIX2Xpx1VDjIyzWPzvFGF3sXFPOUHSjH3fLjZmcyBb0uAun%2BRvg2Q5cbyajGLqR6lLhFTkqs6qvGcKKjHa5MwTZ7k%2B%2ByZbF4YMXFzzvhPyXN4KLd%2FqNjia1u44zP3L91kVY4uXTT5FSUgn%2FvTNTbh2nhjVQ4pkEAoQaEAmzauztUT0BNiFAEDp%2FZfn0kw6T8KvGPh8dcwZNrBke4YMdu%2F933I%2BaPMMHFzcEGOqUBaLfMICPAC55N%2BMvSR6c23u68SS9%2Fe4RD7Kkv9oNYnsbtilaC9X8gWFF%2B00ErUhaPrFHVCYWyPwNrC2icJE4ccM7iG0V7%2BCJxokQwTYP8aBoqAKoVsgirZuFSFy8cPppoBd7TBu1XaBOlNh1MXB6XRZIR107O%2FbMUGjM04ik6iJzJdyXFWUMclI2FT%2BRzi63sMt7aC7YnQq5%2BxEovs%2BJ%2FfXsc9lSj&X-Amz-Signature=1df3b10d5fd0f50db4d49c962a240109eb62c3d6e52ea9120d1276a4bd1a5534&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEF277D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDzsQ0l0YIxHNSQQL6%2FF50zct2I6AOp5sXChZ7pr%2BMDSAIgeD0fdXGU0e3S2Z9OSwTIuYhk4dWUlPS389vTsRoxrgAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLh6N33ki2E09zslCrcAyCx3Zcr022IimKDlX7g235Jq5aCHQemJ%2BeSIbUsRSSuHZED5WhMgKbLt44yXhTbj%2B9zemlWamZFPhFRA7ph5ulIpZEsS%2BabJZkez6Ni7OJH6z1U7feduYp9TDZWzKgzfc3Q4ZcyWj%2FwuppYBb2rN9Jc4HAI0E8EZDgHj%2BzolPoRtbjaqI5d%2FM86eoAyGyIWzvmCH6HPV9eJm8faKdj2LveiUX%2FL92JXORxNf9knQfMDt7qwhOpUKc878mrZdnklqN8RXl4ZoTwuhYTQ7kx7mJcMvhO8TpUi8EJeH3EgW5O9s3OxGyg%2FAWGFweaBlhUM5lO9eujRTrgBf36ZNjXEE3laMyhDoOB6NN5nirTKddY9Fw3nsagfywKuAH8jmZPtDj0LSvIpIARCtUqsnTecc4Ag%2BsqjzPyLxIX2Xpx1VDjIyzWPzvFGF3sXFPOUHSjH3fLjZmcyBb0uAun%2BRvg2Q5cbyajGLqR6lLhFTkqs6qvGcKKjHa5MwTZ7k%2B%2ByZbF4YMXFzzvhPyXN4KLd%2FqNjia1u44zP3L91kVY4uXTT5FSUgn%2FvTNTbh2nhjVQ4pkEAoQaEAmzauztUT0BNiFAEDp%2FZfn0kw6T8KvGPh8dcwZNrBke4YMdu%2F933I%2BaPMMHFzcEGOqUBaLfMICPAC55N%2BMvSR6c23u68SS9%2Fe4RD7Kkv9oNYnsbtilaC9X8gWFF%2B00ErUhaPrFHVCYWyPwNrC2icJE4ccM7iG0V7%2BCJxokQwTYP8aBoqAKoVsgirZuFSFy8cPppoBd7TBu1XaBOlNh1MXB6XRZIR107O%2FbMUGjM04ik6iJzJdyXFWUMclI2FT%2BRzi63sMt7aC7YnQq5%2BxEovs%2BJ%2FfXsc9lSj&X-Amz-Signature=07a8c3bcc2a181755771a1c5b57dd3623a3532426c8bf9b9243b3e006671b19d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEF277D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDzsQ0l0YIxHNSQQL6%2FF50zct2I6AOp5sXChZ7pr%2BMDSAIgeD0fdXGU0e3S2Z9OSwTIuYhk4dWUlPS389vTsRoxrgAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLh6N33ki2E09zslCrcAyCx3Zcr022IimKDlX7g235Jq5aCHQemJ%2BeSIbUsRSSuHZED5WhMgKbLt44yXhTbj%2B9zemlWamZFPhFRA7ph5ulIpZEsS%2BabJZkez6Ni7OJH6z1U7feduYp9TDZWzKgzfc3Q4ZcyWj%2FwuppYBb2rN9Jc4HAI0E8EZDgHj%2BzolPoRtbjaqI5d%2FM86eoAyGyIWzvmCH6HPV9eJm8faKdj2LveiUX%2FL92JXORxNf9knQfMDt7qwhOpUKc878mrZdnklqN8RXl4ZoTwuhYTQ7kx7mJcMvhO8TpUi8EJeH3EgW5O9s3OxGyg%2FAWGFweaBlhUM5lO9eujRTrgBf36ZNjXEE3laMyhDoOB6NN5nirTKddY9Fw3nsagfywKuAH8jmZPtDj0LSvIpIARCtUqsnTecc4Ag%2BsqjzPyLxIX2Xpx1VDjIyzWPzvFGF3sXFPOUHSjH3fLjZmcyBb0uAun%2BRvg2Q5cbyajGLqR6lLhFTkqs6qvGcKKjHa5MwTZ7k%2B%2ByZbF4YMXFzzvhPyXN4KLd%2FqNjia1u44zP3L91kVY4uXTT5FSUgn%2FvTNTbh2nhjVQ4pkEAoQaEAmzauztUT0BNiFAEDp%2FZfn0kw6T8KvGPh8dcwZNrBke4YMdu%2F933I%2BaPMMHFzcEGOqUBaLfMICPAC55N%2BMvSR6c23u68SS9%2Fe4RD7Kkv9oNYnsbtilaC9X8gWFF%2B00ErUhaPrFHVCYWyPwNrC2icJE4ccM7iG0V7%2BCJxokQwTYP8aBoqAKoVsgirZuFSFy8cPppoBd7TBu1XaBOlNh1MXB6XRZIR107O%2FbMUGjM04ik6iJzJdyXFWUMclI2FT%2BRzi63sMt7aC7YnQq5%2BxEovs%2BJ%2FfXsc9lSj&X-Amz-Signature=b4b483df27df2260f68249e89ad58657d7189ad362dc911efb6f5cff6f476444&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBPNPZN%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHJ7JBZnmr0%2B1nh2LjZWz0SArJ7IrtXgUEzxNvMdmkOJAiEAp2xowMJN7t%2F%2BCI%2BpgIAjuv8xHeonGlxX7RAHIPCVyegq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBvlOiCwtS3RDlAhEyrcA8krstWbypY2lGQZQe9hNetU%2F3%2B%2FFFsrmEMY3%2BQuG1aW7UqADPGde5TCB3laNmBsx3zTy4HNHg%2FTTI5Ag6oPuNaB5AG7Xeu%2FHa3l%2BR1pg9TONKzNiho3g%2BKbV2nJ5RoB9ADVuPTVvx3kkbniG7VwXb9qQMLHdJRWKJBd8X71ldvQGJoRg3vv4EpJUTU5k9do%2FnOe4crXx5ni5Zrg9Rs1xsEHc9I2rxtPupB0yH1YCl%2FB6iVWYodarUWhl5bTyRIAEvKOPqf6EY15FQ6YpWMy2nK4ppY7oQzjN0TzaMQe0hP3RczCDgDBRsak8QaeBYrYlMK8F7Mxe3CcvH7hEOOme%2F7MilzYknoIxhHyfxCUe0vlarUGxY08WLYkoSDGmsh6yjRaa%2B4mG52BdvqcaGass%2BYGMBxtJtPJZNh7LRfkSYgFxxAb%2FgKVI1%2Bq76MNC%2F84Gj%2Fi0ZZUqMPrYgIKIdvVQ8r5%2Bz6TJRcU%2FdQElFTYXh1xKJFUDLpRiMMfUNAjOlHkSH2l3%2FBe7RJdSNJ7XOygLU2S5eXqdyq7duCeQtmZDfqT16IeaZC3N3Ru3hiZYYwr7YYgZ9Owev7D9foAT79Q8Zg3u0pidUbUqj7cFJULT1w2%2BAbDJfIBp6O1jeNGMO%2FFzcEGOqUBNxIKDcfPfqxw55SmoSb7ST8GPz%2F7dAPDtV4n6tvsi0mO6Q%2BZq%2BxpEM%2FTQylbFWzBIRx43f5eEdOrIyDJ00GQJD7q%2BYg3vJ%2FqUTRm%2BvFwKXVlfnE9%2FB0cQeHt2GufSw1zpUr103gi3V9UaVDfOwpMLZ%2Fc03LpZN3T0aOCfdKKLf5h48ckFHPkyagHqjv76EnxHpB0GoXbDmpvDelVyNm1HreWXscD&X-Amz-Signature=3aa2439fc1d917cee0e3262f058c8c90670ae3adf16f99bde9d652c4ea086107&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AVEQJRK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDLqZUBcSba%2BLuL2ED7t5qOMj8cMH1IP1E15si%2BM%2FbkeAiB8hCpGU1XXmALqPFryr0yQtLm2LAPhdll5FXOS2BDUBir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM3pnK7hqwQS6N3vo0KtwDme8KL%2Ba5qYP0VE6iNzlwb%2BxBJ8rLmtlyjmgX49zNEX6w1RdtxFLNjBvsUr6lFe7qQXvZGJSC%2BGiIKCzIb%2FZeQMqX%2FxXxy2VlFITJE161f44qgOtP3tZaz9CJDp39SP%2BS4VSHh7V2sO6uM63BIeuM%2F7o0DQx%2BDsXh7iSZgvjUY32ICTn0WazXwdAZZIRFJuP0%2FWoCmKZuqQAD%2BKShQgE3TgFSADJAEsq4SiLsmJEnn6IEcMqhTwt%2FLwciDT1NyLdMGnBTco5SXe2entUhLQ5gzcGpviBcfc1Hag97vz%2BvZ1f2P3vIHsgyqj0D18lBINQh3c2vqVWJEDmUJ4JrNZaR5%2FgSNqAb9p4iiNVNBS0rTsubfOjrJkbb4Er0Rf4JKXDg0LIBlfZRLHx37Kt49N%2BVJnmczk95Kt7Oahj3lipWMNUp8OCJ5SFjbggEFko%2Bb6wMBQklBEZcm%2FiqOrk058S4MxmCetP6sqeGfNw8MVpqlw2a1TZUM2vvliAVRxv5jL6QCQv0WgTumvhGQ3qmdwHjHxt0cN1U7nTXLJVbXGbLMnwD0LqeKuJz58lMhP9YIz6ZK%2F3JRucWEC6wC5jafa4N6Wgurf5Ds%2B%2Bu1D3ftY2EWsAS5WjpaoIiZJRA%2FtEwucXNwQY6pgFPWkK%2F9WQUtW%2BgYAMMm8bkjzLW6ky4OgX0IZMX7wV5%2Fe79CGVtn5ThpnhQh0RYNaa3uRRB23c%2BRJAs2KX0%2FJO8pcfTlyu2dgnYn5UnF7l8u3%2F64RsY7MwOkQiaySwbv1ptelJ47HrsKca3wLGVtKLDVBP8GuTCwW56hbywWXfMV0zCSZCAQh8A10A8RyXnwsZwGoQDxEYTIxVF%2BprNhQ9Ruosmn0xD&X-Amz-Signature=90c80d83be749a703bdb40a2a97d4bb56adbeba16b8cdad745514466c3f84ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEF277D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDzsQ0l0YIxHNSQQL6%2FF50zct2I6AOp5sXChZ7pr%2BMDSAIgeD0fdXGU0e3S2Z9OSwTIuYhk4dWUlPS389vTsRoxrgAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLh6N33ki2E09zslCrcAyCx3Zcr022IimKDlX7g235Jq5aCHQemJ%2BeSIbUsRSSuHZED5WhMgKbLt44yXhTbj%2B9zemlWamZFPhFRA7ph5ulIpZEsS%2BabJZkez6Ni7OJH6z1U7feduYp9TDZWzKgzfc3Q4ZcyWj%2FwuppYBb2rN9Jc4HAI0E8EZDgHj%2BzolPoRtbjaqI5d%2FM86eoAyGyIWzvmCH6HPV9eJm8faKdj2LveiUX%2FL92JXORxNf9knQfMDt7qwhOpUKc878mrZdnklqN8RXl4ZoTwuhYTQ7kx7mJcMvhO8TpUi8EJeH3EgW5O9s3OxGyg%2FAWGFweaBlhUM5lO9eujRTrgBf36ZNjXEE3laMyhDoOB6NN5nirTKddY9Fw3nsagfywKuAH8jmZPtDj0LSvIpIARCtUqsnTecc4Ag%2BsqjzPyLxIX2Xpx1VDjIyzWPzvFGF3sXFPOUHSjH3fLjZmcyBb0uAun%2BRvg2Q5cbyajGLqR6lLhFTkqs6qvGcKKjHa5MwTZ7k%2B%2ByZbF4YMXFzzvhPyXN4KLd%2FqNjia1u44zP3L91kVY4uXTT5FSUgn%2FvTNTbh2nhjVQ4pkEAoQaEAmzauztUT0BNiFAEDp%2FZfn0kw6T8KvGPh8dcwZNrBke4YMdu%2F933I%2BaPMMHFzcEGOqUBaLfMICPAC55N%2BMvSR6c23u68SS9%2Fe4RD7Kkv9oNYnsbtilaC9X8gWFF%2B00ErUhaPrFHVCYWyPwNrC2icJE4ccM7iG0V7%2BCJxokQwTYP8aBoqAKoVsgirZuFSFy8cPppoBd7TBu1XaBOlNh1MXB6XRZIR107O%2FbMUGjM04ik6iJzJdyXFWUMclI2FT%2BRzi63sMt7aC7YnQq5%2BxEovs%2BJ%2FfXsc9lSj&X-Amz-Signature=aa317b1c994801a7edbd0be5f193ff255be06947402c625fae86d26f2b3a3bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
