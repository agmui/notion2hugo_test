---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWRY522%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUwYawLvB6%2FkohYFysWV1dnPG00boS0wxPlEmvmx01NAiEAwLT3R31%2FI3bKE1ncvGwdQWaud5Mks37CQVs8CC0h3YEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd%2FTateflR8hcb3nyrcA7xQP%2BXy8buao9xISmwRo3DQX8x4ixDz4ZwsG1jTJuiep1QIsO0cni%2BOyQQz94YVAutziJxxWsmT4xnp22urrC2Y6inVd029p0339tc3FoskOggHzF%2FxzdDmamazGOTVGAseRuhigaU4t0SVn2x4uyIeTxqenFtXGSxjaFX3PBJLQq%2FiyPBvGW3HZnpqdSXhuaD45LU1qf90mRKCnjR4hrhuztufBVEtbFXdvYgZA1WG%2BN8lUfF0sCk6uS0Y6zwfD3pEXGwW09V1GK2JqjxZUyqLFhorSxpculGWKiM1eyHc0jGGyA3Cq2D3FvuA6ydxWwJPXS4%2FID%2FdTP9%2BNVunHRpMahdxYpd1ptD%2BFkWILlPvItrX80EK71rpdlkLbensbaE0gR5CSJMtVoXk3yMfAzgxZfC%2Bf05rlC%2Bt3iwgUa%2FuY6XjG63XmRJKB3%2F5UqjvnqVeWxyXBseGnYWHMUwAGj8506tzuLoG8Y%2BVLcy6fvZW5zu%2FUXfABvbL9KpCa5gw4b25G80B0bZVThMphBwDvh8EKKhgNqL13qe8BPrqUkPCBadixQXX103EaXZgxIEe%2BCGDCUPZksTGXXUo3Y7suLresXSkOjdWJsidjgxS8tFgZM7ZwSRnPbBFd5vVMMevzM4GOqUB68f0yKP%2BwMXGzDyZxNx9lkpZ5NgqRZHzwesSvVh3Hrv0pF3Yd2x4JHtPiWkQpe9EwUcmN%2BuffFW%2Fr4t5aXRZcD1Yh8ok3RfuN%2F9wefnII%2Fo76RctzzROHf4%2FyfIHKH9B1HDQJjMdprTzBqj2xAUhiVyEsGiO1mIMRCWml0lT6%2Fs9ARxondWZPaAR6f1MPHcEp65nAbMVLb1A6fs64%2F9vJ%2B5WzFWE&X-Amz-Signature=937f348e1f7e344de3e0e9474d1883565b1c1c81e734b56178544776e33dca26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWRY522%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUwYawLvB6%2FkohYFysWV1dnPG00boS0wxPlEmvmx01NAiEAwLT3R31%2FI3bKE1ncvGwdQWaud5Mks37CQVs8CC0h3YEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd%2FTateflR8hcb3nyrcA7xQP%2BXy8buao9xISmwRo3DQX8x4ixDz4ZwsG1jTJuiep1QIsO0cni%2BOyQQz94YVAutziJxxWsmT4xnp22urrC2Y6inVd029p0339tc3FoskOggHzF%2FxzdDmamazGOTVGAseRuhigaU4t0SVn2x4uyIeTxqenFtXGSxjaFX3PBJLQq%2FiyPBvGW3HZnpqdSXhuaD45LU1qf90mRKCnjR4hrhuztufBVEtbFXdvYgZA1WG%2BN8lUfF0sCk6uS0Y6zwfD3pEXGwW09V1GK2JqjxZUyqLFhorSxpculGWKiM1eyHc0jGGyA3Cq2D3FvuA6ydxWwJPXS4%2FID%2FdTP9%2BNVunHRpMahdxYpd1ptD%2BFkWILlPvItrX80EK71rpdlkLbensbaE0gR5CSJMtVoXk3yMfAzgxZfC%2Bf05rlC%2Bt3iwgUa%2FuY6XjG63XmRJKB3%2F5UqjvnqVeWxyXBseGnYWHMUwAGj8506tzuLoG8Y%2BVLcy6fvZW5zu%2FUXfABvbL9KpCa5gw4b25G80B0bZVThMphBwDvh8EKKhgNqL13qe8BPrqUkPCBadixQXX103EaXZgxIEe%2BCGDCUPZksTGXXUo3Y7suLresXSkOjdWJsidjgxS8tFgZM7ZwSRnPbBFd5vVMMevzM4GOqUB68f0yKP%2BwMXGzDyZxNx9lkpZ5NgqRZHzwesSvVh3Hrv0pF3Yd2x4JHtPiWkQpe9EwUcmN%2BuffFW%2Fr4t5aXRZcD1Yh8ok3RfuN%2F9wefnII%2Fo76RctzzROHf4%2FyfIHKH9B1HDQJjMdprTzBqj2xAUhiVyEsGiO1mIMRCWml0lT6%2Fs9ARxondWZPaAR6f1MPHcEp65nAbMVLb1A6fs64%2F9vJ%2B5WzFWE&X-Amz-Signature=2aadc784eacce217e84093b10fc309826729dd8f39ac452d0fb76d04530a81f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWRY522%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUwYawLvB6%2FkohYFysWV1dnPG00boS0wxPlEmvmx01NAiEAwLT3R31%2FI3bKE1ncvGwdQWaud5Mks37CQVs8CC0h3YEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd%2FTateflR8hcb3nyrcA7xQP%2BXy8buao9xISmwRo3DQX8x4ixDz4ZwsG1jTJuiep1QIsO0cni%2BOyQQz94YVAutziJxxWsmT4xnp22urrC2Y6inVd029p0339tc3FoskOggHzF%2FxzdDmamazGOTVGAseRuhigaU4t0SVn2x4uyIeTxqenFtXGSxjaFX3PBJLQq%2FiyPBvGW3HZnpqdSXhuaD45LU1qf90mRKCnjR4hrhuztufBVEtbFXdvYgZA1WG%2BN8lUfF0sCk6uS0Y6zwfD3pEXGwW09V1GK2JqjxZUyqLFhorSxpculGWKiM1eyHc0jGGyA3Cq2D3FvuA6ydxWwJPXS4%2FID%2FdTP9%2BNVunHRpMahdxYpd1ptD%2BFkWILlPvItrX80EK71rpdlkLbensbaE0gR5CSJMtVoXk3yMfAzgxZfC%2Bf05rlC%2Bt3iwgUa%2FuY6XjG63XmRJKB3%2F5UqjvnqVeWxyXBseGnYWHMUwAGj8506tzuLoG8Y%2BVLcy6fvZW5zu%2FUXfABvbL9KpCa5gw4b25G80B0bZVThMphBwDvh8EKKhgNqL13qe8BPrqUkPCBadixQXX103EaXZgxIEe%2BCGDCUPZksTGXXUo3Y7suLresXSkOjdWJsidjgxS8tFgZM7ZwSRnPbBFd5vVMMevzM4GOqUB68f0yKP%2BwMXGzDyZxNx9lkpZ5NgqRZHzwesSvVh3Hrv0pF3Yd2x4JHtPiWkQpe9EwUcmN%2BuffFW%2Fr4t5aXRZcD1Yh8ok3RfuN%2F9wefnII%2Fo76RctzzROHf4%2FyfIHKH9B1HDQJjMdprTzBqj2xAUhiVyEsGiO1mIMRCWml0lT6%2Fs9ARxondWZPaAR6f1MPHcEp65nAbMVLb1A6fs64%2F9vJ%2B5WzFWE&X-Amz-Signature=7ed39f468f684f2046c29bcc7e937c28da02aeb709ea5050ae5cce303305849b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ4MQWT%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6cfqlh4M4XAlbiJZoF50Xz8xg%2Fh%2BGM1UOjVRNMUHcMQIhAOJuiGMxXUon5NyOOjZNfLfLj%2BYz3INIz%2BvZkkEhqpAhKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr%2FjD5pLqC1BzvXQAq3AOhVJZbFNym%2FG%2BAA60G5ij1kdb0OLugwn6SGorXI1VTFnIB5UHlnFnS7ca3LF83%2B3XiONUTN8azZscArOWideq27HmzCeEUatjQOKsZQwxppdOI760E6dUSfHredVtt0gJkW9BGF7W%2Bha0w4JzhO6N5ntFc7LMsTiobV0X2n8xC%2BnfaU3eqqnL7uGiMYUPVECPzuKGuErOx97u2rmHc2rNAOmzbjDI0z74kB%2BiJzMwSu1MVAG7w%2FQgzxWGXrm9O2xL4IqppWIRcTfannlPej6%2B2LpNeAckm7xK9zv5UqRO7rQZ30dpX8Zf6Powdpd5LCnZRXKlrmfkhdUHQw9Xi5Eht%2FmPVV3%2Fj%2B0KZ8Es6eF7zJ3rQcUZgRH4a6f%2BirjY2nLU0W6eXvVPQ0mHmj0MHYNiZOkfn40hGoUv76cTleyDi3z3d9UQWy5nyd%2FXYflLDtzr7oI630tyhpTNWgDApK25Xb%2FczS3GlzOIc4KRA0newgZAmQcwsZYJtHQwsCQYTQfCoVVS8kwQ8nYezJVSEYgs09DecKcVtcvM8Vx%2BmRX9YwCv8TokRYAYTZFChJonLNayc3qLiU0fbCRFsnOEneTvoeqhba2IU20cCSgJmMqBMttY2jADux%2BDe8h7QAzDBsMzOBjqkAVBc9lti9XeiGt09UolC9FEgaKsZ%2BtveV9et6J%2FFjs5AxJtCJw%2BcsIY6YJ9Xxs2wfTNuZGrtP8cynGeCdwtTUtSCDH96%2BESl9b4wgWuFdGDkyjuaWQpXTHXJty2jAUMmD5MaWL%2B3ivrKfZRe%2Bh6l5xS5HaifnMxS8BXKHaSkCBDNIIxXUeiijgbgbyJ%2BUqlT2Szdx3MLNkr7LZ7HlGum8TTuDyf9&X-Amz-Signature=0462567a3870fabd4b4a834d05648528a5819698ce06d076dc0784e34a2b39a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2D2I6WC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi47qrFnOQiH7IpIgYt2nJoiNuoDZIcfkd8n%2BX7Y4aCAiAftG7plHOstXMEp%2FOv8R6jnh94ka9dPwVrAiutxQ2dOyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd73eLTX%2FmvneJk9NKtwDWBKjZ0qvVcWePV9gm0dckaldgE1EFeQFRZ0%2F5ndfKKOerwrowms3aPDkvOV5TaBKfKJAui0QPLxFTugSF6fbX7JtzjgYT2ddGuFcavmEQnSlSNFbGL8uDfwY5srL%2B0bkYt86uKmyx6G79jrnsAdbvMqYsVYJU5dYZgjBSXB2X9CT%2BJzGeD68sDZfFMV1X%2F0MtbV2vR5b2qovdo7M3IfQgU4TnKloMo4Jmm8yxWU7s3ia8WF5KiZwXidv9ESHyPThzBLaK0k%2BYF0u0u%2FWtsh9NsmPt9v4yy%2Ffzo9YYE%2FkquLRSU%2BNJ5cBwiiqtkBWh5swPmCngHiTBBmgitvmA%2Fm6oog6%2BTRsSelp%2BD30dctBt%2BuHP3fNlLRdeyPEJyf0TEyUSLDcMRk75RhChmiacpqxlPJFRh9UDDiDLUdFJhAfWeGy8hyOeoIlmUOuCGMbGUpUKesuT3fpufjzsHADD2v7DzExyOlEM95isVNsDxYWCr2alItOpo01V0jIARwH9aeW71KRwxhOlzU2Lw3sYa4mFTMiTGulQfBEA8BcASbrS0di4gxsvBS6zSFjkYBKRPYyxrFogt2yfGNwjHVhNl4jslmeOyG3aJxgR%2Bk58sV1NZPDa6LAtAGtZ6RHa8Mw87HMzgY6pgErp8kyTmrwBDt2ZQcNNK8Rg2rOPOSCGgftrsgXGopi1W34s6fmRQZD6NYgKBk12hN5e3O9knRdsXf6GtHQisGt6lw5NR%2Fd%2BivV6qafPu2Bxc%2BrG3Fzs1DYWgbt1OTXdRZ5j29aQP%2FFsEVLd96NkUcJY9V5bpgRo0Le7HPJgwGMefJxV%2F0MUmR%2BUYJ5A35LYALJP2ZM8Es8KXwadlVwzFQEAraxHoUq&X-Amz-Signature=0ffe79cca827c9b0ce5e5360f753539db836242ac76b0b86bfaad5e20af3ae63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWRY522%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUwYawLvB6%2FkohYFysWV1dnPG00boS0wxPlEmvmx01NAiEAwLT3R31%2FI3bKE1ncvGwdQWaud5Mks37CQVs8CC0h3YEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd%2FTateflR8hcb3nyrcA7xQP%2BXy8buao9xISmwRo3DQX8x4ixDz4ZwsG1jTJuiep1QIsO0cni%2BOyQQz94YVAutziJxxWsmT4xnp22urrC2Y6inVd029p0339tc3FoskOggHzF%2FxzdDmamazGOTVGAseRuhigaU4t0SVn2x4uyIeTxqenFtXGSxjaFX3PBJLQq%2FiyPBvGW3HZnpqdSXhuaD45LU1qf90mRKCnjR4hrhuztufBVEtbFXdvYgZA1WG%2BN8lUfF0sCk6uS0Y6zwfD3pEXGwW09V1GK2JqjxZUyqLFhorSxpculGWKiM1eyHc0jGGyA3Cq2D3FvuA6ydxWwJPXS4%2FID%2FdTP9%2BNVunHRpMahdxYpd1ptD%2BFkWILlPvItrX80EK71rpdlkLbensbaE0gR5CSJMtVoXk3yMfAzgxZfC%2Bf05rlC%2Bt3iwgUa%2FuY6XjG63XmRJKB3%2F5UqjvnqVeWxyXBseGnYWHMUwAGj8506tzuLoG8Y%2BVLcy6fvZW5zu%2FUXfABvbL9KpCa5gw4b25G80B0bZVThMphBwDvh8EKKhgNqL13qe8BPrqUkPCBadixQXX103EaXZgxIEe%2BCGDCUPZksTGXXUo3Y7suLresXSkOjdWJsidjgxS8tFgZM7ZwSRnPbBFd5vVMMevzM4GOqUB68f0yKP%2BwMXGzDyZxNx9lkpZ5NgqRZHzwesSvVh3Hrv0pF3Yd2x4JHtPiWkQpe9EwUcmN%2BuffFW%2Fr4t5aXRZcD1Yh8ok3RfuN%2F9wefnII%2Fo76RctzzROHf4%2FyfIHKH9B1HDQJjMdprTzBqj2xAUhiVyEsGiO1mIMRCWml0lT6%2Fs9ARxondWZPaAR6f1MPHcEp65nAbMVLb1A6fs64%2F9vJ%2B5WzFWE&X-Amz-Signature=e96747f03669e1126021018ac57eb6545d9c074455f2f6e902b1e2a64dc0a2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
