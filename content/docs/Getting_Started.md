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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HHGKSI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCID3ha6nDLOX4RrlXJjDA889R%2FRJfb%2FGoaNE3kUGhHRUmAiEA80NenYjZKd9JJJqogntRdD2IJq%2BJO%2BGnTYFF23e8pnUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2I%2FYPdu4DxlyC5ircA0txt%2BiULepGguHVPO1bl5M28KKbFo4G2n92lnRGpDp3Cox%2Bo4ROzRNCXeEBPswTVyg6FgkfdtiGBu2aAruaHzUly5w8SqT%2BmcG%2FqqVtlQfFTxDgtRhKW983La8kTwpQmNbfQth29MokiZOIXeby0HNTMySWcfYzo7%2F0qpQLVCP%2BqzusVkQE%2ByFFeWuq8SrmTyVv6U7ca1xcgpVikznt0XiID8%2BxQvcm7KvTOyuSTqf655KqR%2BwiedFKe9Fy0%2B3j4ZBTtbWaPR%2Fxjd3WXUBhdScEH6A%2FSuril5Vnd5hFRVo4cIUUAf7bwZJQXUr8dKPlSSCUmJ%2FM8qO3FwkSZ34d5EGx6KPZHYH%2FcqhcgucAhNOVazLiWG7Eaz%2Bc9rnIaNcuIbzJr%2F9SkLr3LFjpcAmclq%2BNYMIsP2UXq03giPyAUSgFzvID28peBN%2FFy28H2BBNQQJAtFs53QH8LmXwzXqwfnRGQRHmo9Y36mfxWX64RnGlC%2FzwNAqzFELmOJWI7CZ70mDfmV%2FXw2YrEjY8GhMm7DfFPXAA6Kb6SZJAWweU%2F7Ou05PINuRtUNIO6Zmo89yDiIy%2Frkp38rX5OvmcGaXXplo0xk%2BQGJjJ7HTndE21Un7wD9NnnV8QY%2BZJqOTCMPWq2cAGOqUBa7kJjIpbmK75YzTlLkN46iAAFGNrLgjTdr%2BbFQ3O4PE8n9cowM2IMaGaEsbp1c7q2mQyDXRGB9r4qYiqefysqjoYNhwjcZqMfTamFcsv3knhcvgucPXO%2Bfict0sZa3cZvzuz2IwFXuAt9%2FEx5jNoO9d66hxnFUJ2H7%2B9GVgUs2SQAcUp0c%2BmyqBjm2sbfbfOFw2CYLJ9nVVaZ01aOs2TpTEdOhBS&X-Amz-Signature=b42ff1e0b3cf0983197710311c88ac7b7a04bf6b5a869b0ad582072aaad798b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HHGKSI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCID3ha6nDLOX4RrlXJjDA889R%2FRJfb%2FGoaNE3kUGhHRUmAiEA80NenYjZKd9JJJqogntRdD2IJq%2BJO%2BGnTYFF23e8pnUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2I%2FYPdu4DxlyC5ircA0txt%2BiULepGguHVPO1bl5M28KKbFo4G2n92lnRGpDp3Cox%2Bo4ROzRNCXeEBPswTVyg6FgkfdtiGBu2aAruaHzUly5w8SqT%2BmcG%2FqqVtlQfFTxDgtRhKW983La8kTwpQmNbfQth29MokiZOIXeby0HNTMySWcfYzo7%2F0qpQLVCP%2BqzusVkQE%2ByFFeWuq8SrmTyVv6U7ca1xcgpVikznt0XiID8%2BxQvcm7KvTOyuSTqf655KqR%2BwiedFKe9Fy0%2B3j4ZBTtbWaPR%2Fxjd3WXUBhdScEH6A%2FSuril5Vnd5hFRVo4cIUUAf7bwZJQXUr8dKPlSSCUmJ%2FM8qO3FwkSZ34d5EGx6KPZHYH%2FcqhcgucAhNOVazLiWG7Eaz%2Bc9rnIaNcuIbzJr%2F9SkLr3LFjpcAmclq%2BNYMIsP2UXq03giPyAUSgFzvID28peBN%2FFy28H2BBNQQJAtFs53QH8LmXwzXqwfnRGQRHmo9Y36mfxWX64RnGlC%2FzwNAqzFELmOJWI7CZ70mDfmV%2FXw2YrEjY8GhMm7DfFPXAA6Kb6SZJAWweU%2F7Ou05PINuRtUNIO6Zmo89yDiIy%2Frkp38rX5OvmcGaXXplo0xk%2BQGJjJ7HTndE21Un7wD9NnnV8QY%2BZJqOTCMPWq2cAGOqUBa7kJjIpbmK75YzTlLkN46iAAFGNrLgjTdr%2BbFQ3O4PE8n9cowM2IMaGaEsbp1c7q2mQyDXRGB9r4qYiqefysqjoYNhwjcZqMfTamFcsv3knhcvgucPXO%2Bfict0sZa3cZvzuz2IwFXuAt9%2FEx5jNoO9d66hxnFUJ2H7%2B9GVgUs2SQAcUp0c%2BmyqBjm2sbfbfOFw2CYLJ9nVVaZ01aOs2TpTEdOhBS&X-Amz-Signature=205a467292fa0b0b1e803eb49b57320bb9d7c73fca994ddec4d242624d74aa5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HHGKSI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCID3ha6nDLOX4RrlXJjDA889R%2FRJfb%2FGoaNE3kUGhHRUmAiEA80NenYjZKd9JJJqogntRdD2IJq%2BJO%2BGnTYFF23e8pnUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2I%2FYPdu4DxlyC5ircA0txt%2BiULepGguHVPO1bl5M28KKbFo4G2n92lnRGpDp3Cox%2Bo4ROzRNCXeEBPswTVyg6FgkfdtiGBu2aAruaHzUly5w8SqT%2BmcG%2FqqVtlQfFTxDgtRhKW983La8kTwpQmNbfQth29MokiZOIXeby0HNTMySWcfYzo7%2F0qpQLVCP%2BqzusVkQE%2ByFFeWuq8SrmTyVv6U7ca1xcgpVikznt0XiID8%2BxQvcm7KvTOyuSTqf655KqR%2BwiedFKe9Fy0%2B3j4ZBTtbWaPR%2Fxjd3WXUBhdScEH6A%2FSuril5Vnd5hFRVo4cIUUAf7bwZJQXUr8dKPlSSCUmJ%2FM8qO3FwkSZ34d5EGx6KPZHYH%2FcqhcgucAhNOVazLiWG7Eaz%2Bc9rnIaNcuIbzJr%2F9SkLr3LFjpcAmclq%2BNYMIsP2UXq03giPyAUSgFzvID28peBN%2FFy28H2BBNQQJAtFs53QH8LmXwzXqwfnRGQRHmo9Y36mfxWX64RnGlC%2FzwNAqzFELmOJWI7CZ70mDfmV%2FXw2YrEjY8GhMm7DfFPXAA6Kb6SZJAWweU%2F7Ou05PINuRtUNIO6Zmo89yDiIy%2Frkp38rX5OvmcGaXXplo0xk%2BQGJjJ7HTndE21Un7wD9NnnV8QY%2BZJqOTCMPWq2cAGOqUBa7kJjIpbmK75YzTlLkN46iAAFGNrLgjTdr%2BbFQ3O4PE8n9cowM2IMaGaEsbp1c7q2mQyDXRGB9r4qYiqefysqjoYNhwjcZqMfTamFcsv3knhcvgucPXO%2Bfict0sZa3cZvzuz2IwFXuAt9%2FEx5jNoO9d66hxnFUJ2H7%2B9GVgUs2SQAcUp0c%2BmyqBjm2sbfbfOFw2CYLJ9nVVaZ01aOs2TpTEdOhBS&X-Amz-Signature=08035a9cd09f92fe928df0c64e32b900e386815925f169f17bf774a1e4129410&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOTQDAI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBOzjoxOF7m%2Bc6lFJQaABmq3D%2BPNgNFIs64DQBai2jRKAiBkujeiPhZQR5be3NGE%2F3%2B%2FYo3YcZORMd%2FRYqwMcXctdiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlx2Inb2pkKQtN8Z%2FKtwDK6V0i6cFM3ifj5ZsGsVqAHDl5XqYO5KbseJxAgviqwv3jcQ%2B5hZryFEH3fgC0DMDt4Yy3O2FBMyhAldVfQriqEiw621tWuJEyS4ROrvqM5oJrg4bko%2BIlB4YRGTBUQS7YFbzeM26qbOUTZ4EwnqpHkD9gle5S8vgfQIdrtam%2FLFhXMGLeiIOxGx9vj9xlWCgfvN2CgqFpLFv1TH5eg07Ak1JOA2SEjVHw5ZMb7KC8sq6srHuHudjFni9bALkciOky5b9aygR%2BQ%2FLmAP7oNGxA5uYRmLIIF4NywJ7SwWcsD0nbMMjDtVyO9NP3pUXnyC0FzI09rh9FoMk1toNLnDWngc0Jk6u5yvwRn4hvXdX6z%2BxBNXq%2FpouVCeQihDjvOxDQgQaFsebIvhXfooDX5qitMkV3xnA59tBFq2yBK7BHWZDSrbAwWpbInJerU9HoC5Uf1ztfA2PtpbEF17137vHi54sDXi32JTKD5iYPD3gbCyEbNqkauUdKQi7%2BQUIh4JWFYsLMHlNFpESittz6P8ZCdpkdGBPMB7AB%2B1nL6OU0IiKa40udTyZDUz3TZGqDYH40A8FnU%2BRriZ0GmCrkhhT1AQmZ7Y%2B%2FGRVC5%2By3tjCChg0Jf%2FTqPZKi7IDCYgwvqrZwAY6pgGjoektKXLAa9lc%2BKy6MHt%2FqC7W9FyBfan7z2bW84RChM%2BzFDrnvnmeUf0RDfhdmrlTAvgprvdCL%2FcSNL2SEFwjqGGovA6o9HOwykdIr2J03LY3VJSsbTPdd9YCXnnsMiiks%2FJdepiyd8jGtO4eQPueiP6OHm%2BrufrW9Qe%2F1oRtMTs9ibmehxhJ250f%2BnIZyCOUuwEjdscBncJt2mFnZhfc9VwNTesB&X-Amz-Signature=03bb368f8687de2c5866ed5505dce64d042125e3c082d4ab05a19d0c54a01e45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWM67BJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAxRkurUQoggIRfORJhit49UDWz9GpEwqZ51oSRPpUleAiEAxQI58kV0g9hbjcfPebZXF44Kf7js%2F9r%2Fveg0twUGPhoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI8TELNHSFCjcBZpSrcA%2BONXSaItQNziLpaMZVRKTDS19V%2FGiQ94c4yVYmdjn7CfXmI734HCNZyNeiMCeksYoSCEukgJrXBObruBj4hcJUjKhAjCUGydAn1EaToiqr18MOjKciJQ%2B6%2FKCkaod%2BE0fGmRKTRjX3OihOuaeHl9XWhs8%2FMCa8IwvHaeJUce2NOKmAtJKu2u%2FuDdr0NtgwEfTmRMK5x9b4STpTTyrKHyAXYE%2B9G42mvXBNsPvpul7BHjLrvWejnMlVVKReMjoVGmUV%2BnkUR3AS6q4EMpRVkC6l5lCflG1c02tN5tiDW4%2FE0vsOz8HUs3z1thpRtemWhS%2BDxK763mh4pzgHJ77%2BZYGXF8iP3vW8Cqj3pz69qotZK6RaBe%2BNTrO6UCF5OrRFVEFmVhxtqGH3fFmNdDYf9b%2FTxMIC%2BDOX8TnLSBYsYN0LhNNr1lGVuX5Agp0ZkkY7lQ435pp7GT9jdv8FuYhb1%2B3jN8vidEqTC5Bi8MwonnN6XAr2vIapH88wAQgDpatvzEeODbsp1vM2BMBmQSp0j1Bjgf8KKRdoWpjuRfmPXjWvCX5dqUEwbysWqNCa3VpknId3n6VgRoJ6pTeIMdJ0BTqdHgHL05y3jNVrTBll2Rrke8Rdq5Do26IqHg70HMNiq2cAGOqUBIAwlATVHs6jD5HoZvFYARqbQpWuIiRGl4qAthzVqU%2BMPcCETsWVLhW2kzHFaB8KFB0GQl233OuZr%2Fk3TYQQlU7FBmBgLh1iy3%2FWk1qwGSRQVUHfoX0fZyxql9yStIW5Nm3d%2FwL9FnANnOcak1jSkt0u0jY4z71sZ6Zc6I1k2qlJ%2BivwK4YcxqHzj5Jz8CVaSbsl1OWRxje%2Fh6%2Bu72i2QmFxaMPxQ&X-Amz-Signature=543a530563f7acfdfb01b04ae2e93c26172d5017b9b1e3ad4be81f92d9b64e31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HHGKSI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCID3ha6nDLOX4RrlXJjDA889R%2FRJfb%2FGoaNE3kUGhHRUmAiEA80NenYjZKd9JJJqogntRdD2IJq%2BJO%2BGnTYFF23e8pnUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2I%2FYPdu4DxlyC5ircA0txt%2BiULepGguHVPO1bl5M28KKbFo4G2n92lnRGpDp3Cox%2Bo4ROzRNCXeEBPswTVyg6FgkfdtiGBu2aAruaHzUly5w8SqT%2BmcG%2FqqVtlQfFTxDgtRhKW983La8kTwpQmNbfQth29MokiZOIXeby0HNTMySWcfYzo7%2F0qpQLVCP%2BqzusVkQE%2ByFFeWuq8SrmTyVv6U7ca1xcgpVikznt0XiID8%2BxQvcm7KvTOyuSTqf655KqR%2BwiedFKe9Fy0%2B3j4ZBTtbWaPR%2Fxjd3WXUBhdScEH6A%2FSuril5Vnd5hFRVo4cIUUAf7bwZJQXUr8dKPlSSCUmJ%2FM8qO3FwkSZ34d5EGx6KPZHYH%2FcqhcgucAhNOVazLiWG7Eaz%2Bc9rnIaNcuIbzJr%2F9SkLr3LFjpcAmclq%2BNYMIsP2UXq03giPyAUSgFzvID28peBN%2FFy28H2BBNQQJAtFs53QH8LmXwzXqwfnRGQRHmo9Y36mfxWX64RnGlC%2FzwNAqzFELmOJWI7CZ70mDfmV%2FXw2YrEjY8GhMm7DfFPXAA6Kb6SZJAWweU%2F7Ou05PINuRtUNIO6Zmo89yDiIy%2Frkp38rX5OvmcGaXXplo0xk%2BQGJjJ7HTndE21Un7wD9NnnV8QY%2BZJqOTCMPWq2cAGOqUBa7kJjIpbmK75YzTlLkN46iAAFGNrLgjTdr%2BbFQ3O4PE8n9cowM2IMaGaEsbp1c7q2mQyDXRGB9r4qYiqefysqjoYNhwjcZqMfTamFcsv3knhcvgucPXO%2Bfict0sZa3cZvzuz2IwFXuAt9%2FEx5jNoO9d66hxnFUJ2H7%2B9GVgUs2SQAcUp0c%2BmyqBjm2sbfbfOFw2CYLJ9nVVaZ01aOs2TpTEdOhBS&X-Amz-Signature=c554488c2e4d6dd6574c582087259137c368465ed41391004de15d1e7309a34d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
