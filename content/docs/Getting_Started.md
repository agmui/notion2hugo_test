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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHS4HQG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVvED%2FuVO%2BjXJLF%2BNvZXqTCdc4zc%2BhMutOblAMqnlNRAiBJQfrfIwo%2F35T7lfoGPP2Url558UJMJKr6nARVF%2BZNzCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJU1H%2B%2BjrWTCgnixKtwDDddXHeo7VJEMgyBDSU0oYmABGx8UL7JeZA%2FKFV6HIpRKn9YDVfHdPIz72BAoC2zGLu3DVODMZGuLmTy65kYMlp9qx6ALM1HkCMWYq6c07O15rmT4k1oIE6qzA96NGnkB%2BFcwKFz4jl2KU993BeWvJmWqxksz641aQ0BIEBMoLo1dMIGsoIt2SOJY8jPw4qelFyemA2VOMVSraHN%2FbSGBAGvtbcvui7ukhSeKOWudkY81WNJt72zwVcEeMpo2SwrlfufP8b2pDqNeUnDdYxDk0VdanLRG0JGKxcU9LIhLrEojoNlWNh1rAVdI7j2O3KCScb12fQ9q4xUXMZcXvHWzMsxJ6pOpi9hPAnasmsbCCFMUu2TURcdqnHACxNQ75kPIUuiQ2qRn9dwBIaHMqj3QpstxABau6CA6s%2FwMgrZpaqqpe234LucYxTq1Qiq%2FokPIc4xwqQjry5URtR45k%2BmwZnXsyKwgmQZeTAkhuCJph9Sa1hDqMOWhklMNOHyniq1ueHDx5bWJ4AioOxvKn3%2F7WOGaNQLm8L1x0leK9fTvXQVqEBFtcsQ4Wb4sa%2FYFkUELMntOr%2FDLMhPJI4Ap5EdUA0x2csukszxYHtmSvxXQP2XJwOXb8F3m4uE6zPEwmf2swQY6pgGoLGUvA6LZA1GeidIwX9bykOouNAVDAVgyqbE7Vm7vN0zGSjOj0%2BiOKiD5KF1Y2XOec4RT46oWFYpJbYX%2BORgRe4kzRLc4zkCKeacDndiCWLfVlcGuoXYWwo1Lj56STo3QoqdZDJFio94MgK1pAHHqab%2BiVsl2HmoPfCdd%2F8St0TP1AewoflKw8J0QwUqla3yIFRx%2BFdI%2FmaY31y0iiz1MesVcoDFn&X-Amz-Signature=ff4d0bae5aea770f3a573f609c50afbe8c0782638eeee859a52504c87c5f158f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHS4HQG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVvED%2FuVO%2BjXJLF%2BNvZXqTCdc4zc%2BhMutOblAMqnlNRAiBJQfrfIwo%2F35T7lfoGPP2Url558UJMJKr6nARVF%2BZNzCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJU1H%2B%2BjrWTCgnixKtwDDddXHeo7VJEMgyBDSU0oYmABGx8UL7JeZA%2FKFV6HIpRKn9YDVfHdPIz72BAoC2zGLu3DVODMZGuLmTy65kYMlp9qx6ALM1HkCMWYq6c07O15rmT4k1oIE6qzA96NGnkB%2BFcwKFz4jl2KU993BeWvJmWqxksz641aQ0BIEBMoLo1dMIGsoIt2SOJY8jPw4qelFyemA2VOMVSraHN%2FbSGBAGvtbcvui7ukhSeKOWudkY81WNJt72zwVcEeMpo2SwrlfufP8b2pDqNeUnDdYxDk0VdanLRG0JGKxcU9LIhLrEojoNlWNh1rAVdI7j2O3KCScb12fQ9q4xUXMZcXvHWzMsxJ6pOpi9hPAnasmsbCCFMUu2TURcdqnHACxNQ75kPIUuiQ2qRn9dwBIaHMqj3QpstxABau6CA6s%2FwMgrZpaqqpe234LucYxTq1Qiq%2FokPIc4xwqQjry5URtR45k%2BmwZnXsyKwgmQZeTAkhuCJph9Sa1hDqMOWhklMNOHyniq1ueHDx5bWJ4AioOxvKn3%2F7WOGaNQLm8L1x0leK9fTvXQVqEBFtcsQ4Wb4sa%2FYFkUELMntOr%2FDLMhPJI4Ap5EdUA0x2csukszxYHtmSvxXQP2XJwOXb8F3m4uE6zPEwmf2swQY6pgGoLGUvA6LZA1GeidIwX9bykOouNAVDAVgyqbE7Vm7vN0zGSjOj0%2BiOKiD5KF1Y2XOec4RT46oWFYpJbYX%2BORgRe4kzRLc4zkCKeacDndiCWLfVlcGuoXYWwo1Lj56STo3QoqdZDJFio94MgK1pAHHqab%2BiVsl2HmoPfCdd%2F8St0TP1AewoflKw8J0QwUqla3yIFRx%2BFdI%2FmaY31y0iiz1MesVcoDFn&X-Amz-Signature=0140e6600ed946349e4a6cce233be445fcdc9dccdc4677ba53147a0b3e8c8fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHS4HQG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVvED%2FuVO%2BjXJLF%2BNvZXqTCdc4zc%2BhMutOblAMqnlNRAiBJQfrfIwo%2F35T7lfoGPP2Url558UJMJKr6nARVF%2BZNzCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJU1H%2B%2BjrWTCgnixKtwDDddXHeo7VJEMgyBDSU0oYmABGx8UL7JeZA%2FKFV6HIpRKn9YDVfHdPIz72BAoC2zGLu3DVODMZGuLmTy65kYMlp9qx6ALM1HkCMWYq6c07O15rmT4k1oIE6qzA96NGnkB%2BFcwKFz4jl2KU993BeWvJmWqxksz641aQ0BIEBMoLo1dMIGsoIt2SOJY8jPw4qelFyemA2VOMVSraHN%2FbSGBAGvtbcvui7ukhSeKOWudkY81WNJt72zwVcEeMpo2SwrlfufP8b2pDqNeUnDdYxDk0VdanLRG0JGKxcU9LIhLrEojoNlWNh1rAVdI7j2O3KCScb12fQ9q4xUXMZcXvHWzMsxJ6pOpi9hPAnasmsbCCFMUu2TURcdqnHACxNQ75kPIUuiQ2qRn9dwBIaHMqj3QpstxABau6CA6s%2FwMgrZpaqqpe234LucYxTq1Qiq%2FokPIc4xwqQjry5URtR45k%2BmwZnXsyKwgmQZeTAkhuCJph9Sa1hDqMOWhklMNOHyniq1ueHDx5bWJ4AioOxvKn3%2F7WOGaNQLm8L1x0leK9fTvXQVqEBFtcsQ4Wb4sa%2FYFkUELMntOr%2FDLMhPJI4Ap5EdUA0x2csukszxYHtmSvxXQP2XJwOXb8F3m4uE6zPEwmf2swQY6pgGoLGUvA6LZA1GeidIwX9bykOouNAVDAVgyqbE7Vm7vN0zGSjOj0%2BiOKiD5KF1Y2XOec4RT46oWFYpJbYX%2BORgRe4kzRLc4zkCKeacDndiCWLfVlcGuoXYWwo1Lj56STo3QoqdZDJFio94MgK1pAHHqab%2BiVsl2HmoPfCdd%2F8St0TP1AewoflKw8J0QwUqla3yIFRx%2BFdI%2FmaY31y0iiz1MesVcoDFn&X-Amz-Signature=75028abc6dae4ecfafa68bb58ea03c6021a4b369c1c9a3e2ba18253f92df2667&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CSZK2ZE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETKHFpPy5XlhPkW2Q5xwedjZugEoy%2F%2FOjq5YukQ4aVcAiEAkdoLFBbARQ4HwwHDUl9GzcALxz%2FtOhSVNhbSfLGI6NQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7PzZVTkuTLmH6EVCrcA4uLI86OPjDIv5aZ92fGZX9RBJSry36gqyARzS8SruAny9hv%2FYXe81PYqdAB8n1VDdlXU7q6HLxIGWIDcIX8H2Sa6Hm2EFTjIHzwwwqX0s0%2FjqmiARZ2d7Oemy5M77DtALm%2F4TR3tyWjNbOg3zEYXe3zpbcwKptTL8hjquqhtl%2F8QIdd3GTsgDz2MlBD0FJncjvjjtrm8HDOVqEBqWlmd9Db6Pp16RsvMqIgTmixikFruljmVAWxoNi17GE9QjYt6l2cHNmqWXxZNtsleKOEF20%2FFJ7VRMK6POZ3HmBipBfbwDvtMTPhpIY0RjW%2FmDsKCL0Jw77hYnFoRzRc5i3nXbDhVjioal8M6R8KDYAF%2FhqE%2FX9HRnCqBea%2FY5aVIzOzYhE%2F8Gtwi9SEDFlatvJwxdQfxRsbcXcJ5%2FtYFJQzInJ9OrBQf209yRzybNjuRMAc6hxEA8h9VoUfJqkpP7J0KuHeJqymvaqpBxfP1YEB2ygF9CIizXfxdQMhE9HhY5e70djVQ9kEB0b%2B%2B3AFLi5x%2B0ZgucMWWimrxPVEKcdjv%2FkYx7pUGva8cFOQDh%2Be0aPSiTWqz3d4h4VK%2F48dUvWteHGB4LP705TK%2FvXl734g3FlgRbQ6j2XKHeiFaU7yMJH9rMEGOqUBnRuorqD3VoeRX%2FNLEN61LBQDKWLFBKPyxsXczz%2FZVJG9SIh%2BbQkJd5HWV5LVc0mDq1aSavmihCnlAdz26V3pJMSuw%2BbilNCkpoqN3IrltjO80N%2FyB%2F5Hw35KGmbko7JkxP4%2FmRiQt1luDg%2Fxu1tIndVrxvw0H2l%2BIbgoWAt1ksPQjKisJjMNOYwOBhWEbDcbzDwvdmi0RA72fIZguEFvy1jXagOg&X-Amz-Signature=e10bf876bb71661298e1700cb74aa5bec37521e65f23c1f4866f1beb57af4b79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBD27K3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3pZ97XIRiMhN75f2CE%2BR%2BKt8uJ3gqnrVQxj6pyLqC5AiEA0N%2BkzAOcD4Pxgx%2FvKffii2fKEzuTavjbTxn64ebJo4sqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn9Tw7AdNU%2BZuK79yrcA1hfrrNQntyP9XNIeR47M1k9ai9eoWmuDn%2BggAn4vilS%2Fgb7nfOFTylJ8XX0kkiFVkhjHhkgHnljCdpMAv9SNjYopQXhUgGoo2JsdLJyVLeMDw25eaeMWcfV9QQVgs2299sA%2FYuj4TqcseESb72AkuvTpp9vXEAsmZLTXGLf7QnePfRoT3v%2FSGtuCVCMX3kl%2FuvsU8DmuCIzAkwrkT5gEkMk%2FJArjNol4zdd0nYTj688onLeQg1WRjcyOutHcY1NI3WIc9CfbzksD8JKQ%2BvJnX0Fsbfq7mq%2F5ReMnuLpHqK4yqc8tVZiJigv2IXOwaTk%2BTxqRKx8wK67UrdIWcHiipSNuvoghJ7FD3mNts6PBGEr4KQVK%2BOlzUjxoM2cZ1rrUFEFq%2FzstlpY5J8XTA5ppZn1wvts86tPUjK7q3Wo5ZBHJBIWfAlGqMvXfNoSavEUMNz8ALUWmka1iYISEAcmoKYHuKZxvGvFtriSeWsa%2BLi8xIxhHycshOH8%2BHCEaRry20CRLNA82ntkLh%2F3FllfIxqXFv4kAcFkPtHybdbuRCMb%2FL6gQSXyfbYQXUCsKLn4iUyhndJIQyRalkBdhK8SvThes1hQgkbkxsA%2FN7TVFmibp3CkZiJgAJ%2FEbWcPMID%2BrMEGOqUBlxwo7QZp4DJkZK3ZJeICHUhCULjqrcqNrE9HXFNCYO3zanpc6AZjM6HFrt93deJSkg2yUXHS%2FWJBV8js900qHl0pZXdMD1kZ388PvQC86Nwan5d3oopr9yKvawgcZ9ffdPQOTjNFCvq3lMW8NSxdM07a10xGNrCO%2B9qa0CqUzq2K8m5iVLU4ue%2B2HzjC1E5Y5aEtugw8C4lA%2BxLcKFN6sPrtKssQ&X-Amz-Signature=a360beca7cedad44f3fcc9e0a48673dd05dda255c4e30c685182f898829b3098&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHS4HQG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVvED%2FuVO%2BjXJLF%2BNvZXqTCdc4zc%2BhMutOblAMqnlNRAiBJQfrfIwo%2F35T7lfoGPP2Url558UJMJKr6nARVF%2BZNzCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJU1H%2B%2BjrWTCgnixKtwDDddXHeo7VJEMgyBDSU0oYmABGx8UL7JeZA%2FKFV6HIpRKn9YDVfHdPIz72BAoC2zGLu3DVODMZGuLmTy65kYMlp9qx6ALM1HkCMWYq6c07O15rmT4k1oIE6qzA96NGnkB%2BFcwKFz4jl2KU993BeWvJmWqxksz641aQ0BIEBMoLo1dMIGsoIt2SOJY8jPw4qelFyemA2VOMVSraHN%2FbSGBAGvtbcvui7ukhSeKOWudkY81WNJt72zwVcEeMpo2SwrlfufP8b2pDqNeUnDdYxDk0VdanLRG0JGKxcU9LIhLrEojoNlWNh1rAVdI7j2O3KCScb12fQ9q4xUXMZcXvHWzMsxJ6pOpi9hPAnasmsbCCFMUu2TURcdqnHACxNQ75kPIUuiQ2qRn9dwBIaHMqj3QpstxABau6CA6s%2FwMgrZpaqqpe234LucYxTq1Qiq%2FokPIc4xwqQjry5URtR45k%2BmwZnXsyKwgmQZeTAkhuCJph9Sa1hDqMOWhklMNOHyniq1ueHDx5bWJ4AioOxvKn3%2F7WOGaNQLm8L1x0leK9fTvXQVqEBFtcsQ4Wb4sa%2FYFkUELMntOr%2FDLMhPJI4Ap5EdUA0x2csukszxYHtmSvxXQP2XJwOXb8F3m4uE6zPEwmf2swQY6pgGoLGUvA6LZA1GeidIwX9bykOouNAVDAVgyqbE7Vm7vN0zGSjOj0%2BiOKiD5KF1Y2XOec4RT46oWFYpJbYX%2BORgRe4kzRLc4zkCKeacDndiCWLfVlcGuoXYWwo1Lj56STo3QoqdZDJFio94MgK1pAHHqab%2BiVsl2HmoPfCdd%2F8St0TP1AewoflKw8J0QwUqla3yIFRx%2BFdI%2FmaY31y0iiz1MesVcoDFn&X-Amz-Signature=2a442ebbcf7b4f7be98a8487cf0f271736348823eddcbd10516f16e41666f41a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
