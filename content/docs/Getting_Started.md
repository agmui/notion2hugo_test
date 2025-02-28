---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTR37NF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICxW1PAqsPBMyTRU7ckbsCbiFuZwrRInmJe1lLyDvVcYAiEAz3zru6Qxl7yFakcpPHtm7hFDaylug3j5nEDsSL6IJ%2F4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDddykVxx4d4ungpPSrcAwg2Uo7NtFNQXJb4FQrTVnMadf558u3mLCghuHC8sxo7rqH93Cn6ep5wH43yejJUvFdxuKfnPpVYn0YfJUEACcPUrOKRtLMe5nm6%2FV0kb8T4PfnubEl%2BMJ6362Pr02aNsat5a4IWUVmjWTOg%2BHjhQGC%2BOyxMGhMSNwN2EKr1vXZYs4MRsea3KeNeXTVuEK4Padl5fapxdM7jKClscgXE4kYD9lePBoOsjAIVqSGVceKocWoePhEzRxqqXjKbNcyHHwyDUigzGvahAA8yODhQx2%2BXg16EKQ2AUZn1NwVl4XnJoWscimWOiIHHjvCaRtA20u5vwD2xazG9QRonc83XoH9lBS2n%2BOVOuyT4Ji7FT%2FlMuxwU7UQ5ppMrhjD8KbjnV5DVwkYiiAMq9K2jtjVkPOrITxLl9zoUZaUU93zDBQINvVxPCcRHu4J4eCQ3qGi3zUAxvfNWo2W0vgq%2FwlbwroIDvOu90dqQhV2GNATGUxKEMC%2FGINWY1qXKWiM2UgIYFvP8WL1H%2BZ1jvL%2BZsrQb4T2WqYeZpLY0xMwSd1rhdge%2BU5YSNdmh259Hc4ClGAiHlTbc06Qj1nZBg5wpIMax%2FegfLodj%2FNKmsjTACPqPSxDMpsGmPoUUpPcwY0btMJCThr4GOqUBs4vV3x%2B8t2kOtpZC0aAbfWR9kTSVDjY82%2FyE7a8%2B1oYaXaAwlJJ4Jlexl43i6XLK7oSIzXUFe7%2F7sw7ZDNMzuNCYTHduLTEcBCfI%2FGIGLx%2F2p8qBRG36xh75Ybe3JCRLPE81SmzB%2Fdu9pAyHxTX87jYQcwMnILz9IwneUe4iynRbjM9DS8XG%2BbIGU7SOd4biYVyM2FBsrjRj3p%2BT6jcG7ahQVTMc&X-Amz-Signature=5cf0e283b26df886d125cec19535b41633783d6193aacec74f7a416b1ccd1a91&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTR37NF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICxW1PAqsPBMyTRU7ckbsCbiFuZwrRInmJe1lLyDvVcYAiEAz3zru6Qxl7yFakcpPHtm7hFDaylug3j5nEDsSL6IJ%2F4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDddykVxx4d4ungpPSrcAwg2Uo7NtFNQXJb4FQrTVnMadf558u3mLCghuHC8sxo7rqH93Cn6ep5wH43yejJUvFdxuKfnPpVYn0YfJUEACcPUrOKRtLMe5nm6%2FV0kb8T4PfnubEl%2BMJ6362Pr02aNsat5a4IWUVmjWTOg%2BHjhQGC%2BOyxMGhMSNwN2EKr1vXZYs4MRsea3KeNeXTVuEK4Padl5fapxdM7jKClscgXE4kYD9lePBoOsjAIVqSGVceKocWoePhEzRxqqXjKbNcyHHwyDUigzGvahAA8yODhQx2%2BXg16EKQ2AUZn1NwVl4XnJoWscimWOiIHHjvCaRtA20u5vwD2xazG9QRonc83XoH9lBS2n%2BOVOuyT4Ji7FT%2FlMuxwU7UQ5ppMrhjD8KbjnV5DVwkYiiAMq9K2jtjVkPOrITxLl9zoUZaUU93zDBQINvVxPCcRHu4J4eCQ3qGi3zUAxvfNWo2W0vgq%2FwlbwroIDvOu90dqQhV2GNATGUxKEMC%2FGINWY1qXKWiM2UgIYFvP8WL1H%2BZ1jvL%2BZsrQb4T2WqYeZpLY0xMwSd1rhdge%2BU5YSNdmh259Hc4ClGAiHlTbc06Qj1nZBg5wpIMax%2FegfLodj%2FNKmsjTACPqPSxDMpsGmPoUUpPcwY0btMJCThr4GOqUBs4vV3x%2B8t2kOtpZC0aAbfWR9kTSVDjY82%2FyE7a8%2B1oYaXaAwlJJ4Jlexl43i6XLK7oSIzXUFe7%2F7sw7ZDNMzuNCYTHduLTEcBCfI%2FGIGLx%2F2p8qBRG36xh75Ybe3JCRLPE81SmzB%2Fdu9pAyHxTX87jYQcwMnILz9IwneUe4iynRbjM9DS8XG%2BbIGU7SOd4biYVyM2FBsrjRj3p%2BT6jcG7ahQVTMc&X-Amz-Signature=ba61cd28b8f960f24c10b4c59d9491c151ae365eba89f1a1d9e52af3f7a1c460&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OFG72E%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICKivScexf3junnhSwe17CqV2Db10g9euAh0wd0aodOgAiEAiabn%2BcmJzn1U%2BdQczswjs%2F6XqIHQmA%2Bvm3HFDxBc6OQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRuYqeT6XxA7GxMJircA7%2BvsM5VqsD2Ux28NuRllaD58PGxMy3B1VbKAnR7DjAP46s7WjuYpDslfI51zDnXoVqE7ZoeJHAqzPquvDlhkmsZlJPDdk6Nm7ONwfKMHQyZ%2BvZqQ6ZGJpcVhNGLmTinnZxT2yryGEbDKitGlK6K2PS9aAtRkvp1avRq0NkgdZ6FXVBIt4cE1zravNWnZTt9zsJL8BNFnnpMV7BF1klKPSvrgCQK0ovRpEs3t0KYXZ8igQwNwpJYqjV9OlPcbM%2FSopJkV3NLiXLWvLxrhZ0m6SB%2BXHMSqIHrhvUYUTYJu7B58wMNtvVICyYa2wybx2JGwH2YMjTcRYIgQY3b%2BXtJz1%2BTzq3g1%2FZldFGMcTEHe1sA0hyphjtGR6c%2BUQ7yA3nUMq%2Bcv2Xfz%2FkQbjmW%2FfZQ0ubHaiJaPU4wJ%2Bq5AogRkvL7s57gObg26PTo4qmexNd0KKTiXzazfmW2ibH7DsoIffQSJzYJ7UVfmWgqOpCr51j4Nd5qhSSCgTTZUuMUDiQCkpwDHuqzZ4SNHBb3%2Fev9Kk1IuOqaiSoz0vcAnmmeURADxHKFw7z3nQGpPq30txa5wduOpDxmQT3jVYWaL52eEEfiAyUjPcEnidfvPXVPSmj8HtvCh8utlUlzbIRJMI6Thr4GOqUBpXVAmLf4%2BiQHkPPEYw580D4DRB%2Bhfkk4rcVfoJQSnOH9LN9FeB16MxgfSRnY8u2eWp5SKvfVCJamiUlsO7syB1SWddLc05GUKk3tSJtWXpZbYj46dg47Z%2Be2zUHHHTpVvojc0l3tVmvRLMxLwyUkjyT5zg9C4rwXpDvULW3UdeOxEhz%2BIhjJ9vryAQW3UTUxrHeCpvTlio1DPsDFXlQDG2brWtuH&X-Amz-Signature=712374f46bb6d397ac47af5152c04b2f45b7bb384504d717ff0dc649895dca59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AR6YNTJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIF5MYukh%2Fjd09EwCJeLleghKV6%2FnVNPv%2FDlLfbwyzmvLAiEApMIRZqdasnqOmj%2BYALyrcnlnuTSOxM9SFCfkXMnKy9wqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BWC2T1cPCY6o2ZFSrcA%2Bz4nZTXN8R9fMeUQqw1cU1gwf02%2FK0%2FgyXMS57TWzl1IGcEFX0LGT%2BlzGz%2F7APAmzvSBVySdT%2Fj9vT9I2qVNDEiDRwt6xXs356YrFHmNiDz7rAcWWZZQ50sL9WV%2F5KROOdEjhlNjsP8Vh3u%2B9ZSTFTuepEcbAt74YGCXCCHj0HE4vtjMYS%2FqKR%2Bpn8T9ea0szbe6Pen5EtxFD4ZN8eusqAYcu84OoBBJ1ZLtUsTzPMwSTEwr5KDA6dGeJ3%2FSpwGvek48Qd0BfwRRbA7cfQ%2FPsRWZ7y2UH%2FBC6SDaGdMeWhEZt67Hgxhg9U1T3QIbkwR92S6EiBk99cnBtauAk2gjmSnJejJQPv%2F%2BkpI1ESmRFLfDlL4rsP4KcVwsGBuHCIH%2BOE5Um2sWltxoniSnYIeL9Bfx1J0UPzYVu76ZfhTT1RnkeT5HAfzc5DfUzKAR1GZKkhOLHiamMJ2VUxioJDbegie5gKhJvs2st%2BZOQLQEVp706HPHxSGe88LHLlChaXEmfSRM4UNlVO6H45LQZjKRluACB7yeazVTtQyohsYJoOaDx7kUzYg6rTQkvw4xGGqCGdr%2Be3BryJA1TFxhTUQ3tt6MPLWmd%2FadS%2F8OmYr%2FYnq0q%2BAUgsy5H2t1l%2FDMJSThr4GOqUB0a6Zi4hoqzktMZds%2FsCAgSe0Y4w33alprLcvihUtTTGT8WRRQzt%2Faf1rnTV248wP%2BOEB0W8qs4TFikK3Mkx8v%2Fkkv2LYHb6SowW7KWxqnOWNpAVC1T1oY9C6ELxIhM0WKhm6ShdcA3wemxDoOozCK7LKFJGP4vE1HzCIcXZKuXEDTCa8E6EI%2FEzkbjZl%2Bdt464QQ%2BGhYuspwbcHShGRaIEBlpHvY&X-Amz-Signature=04d5faf95802759d76aff11d6313f0dff96342d3892dde3b1aa1b90842ca1bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTR37NF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICxW1PAqsPBMyTRU7ckbsCbiFuZwrRInmJe1lLyDvVcYAiEAz3zru6Qxl7yFakcpPHtm7hFDaylug3j5nEDsSL6IJ%2F4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDddykVxx4d4ungpPSrcAwg2Uo7NtFNQXJb4FQrTVnMadf558u3mLCghuHC8sxo7rqH93Cn6ep5wH43yejJUvFdxuKfnPpVYn0YfJUEACcPUrOKRtLMe5nm6%2FV0kb8T4PfnubEl%2BMJ6362Pr02aNsat5a4IWUVmjWTOg%2BHjhQGC%2BOyxMGhMSNwN2EKr1vXZYs4MRsea3KeNeXTVuEK4Padl5fapxdM7jKClscgXE4kYD9lePBoOsjAIVqSGVceKocWoePhEzRxqqXjKbNcyHHwyDUigzGvahAA8yODhQx2%2BXg16EKQ2AUZn1NwVl4XnJoWscimWOiIHHjvCaRtA20u5vwD2xazG9QRonc83XoH9lBS2n%2BOVOuyT4Ji7FT%2FlMuxwU7UQ5ppMrhjD8KbjnV5DVwkYiiAMq9K2jtjVkPOrITxLl9zoUZaUU93zDBQINvVxPCcRHu4J4eCQ3qGi3zUAxvfNWo2W0vgq%2FwlbwroIDvOu90dqQhV2GNATGUxKEMC%2FGINWY1qXKWiM2UgIYFvP8WL1H%2BZ1jvL%2BZsrQb4T2WqYeZpLY0xMwSd1rhdge%2BU5YSNdmh259Hc4ClGAiHlTbc06Qj1nZBg5wpIMax%2FegfLodj%2FNKmsjTACPqPSxDMpsGmPoUUpPcwY0btMJCThr4GOqUBs4vV3x%2B8t2kOtpZC0aAbfWR9kTSVDjY82%2FyE7a8%2B1oYaXaAwlJJ4Jlexl43i6XLK7oSIzXUFe7%2F7sw7ZDNMzuNCYTHduLTEcBCfI%2FGIGLx%2F2p8qBRG36xh75Ybe3JCRLPE81SmzB%2Fdu9pAyHxTX87jYQcwMnILz9IwneUe4iynRbjM9DS8XG%2BbIGU7SOd4biYVyM2FBsrjRj3p%2BT6jcG7ahQVTMc&X-Amz-Signature=2fe371eb7d3e05911b68e44947f85c0479ce97b2fee4f6c201d94b4b536d0235&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
