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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B6Y3XYL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNmbLzyQqkst9Q9gIKUVufJqPGWobfVoTY%2FIUdRv1WcgIhAL5tnqinC7nwIsGECvlUwelYfwqzJ0kALJZM3hEvuyGCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZjqHOMgXmhUiYAHoq3ANB6J0g4CVBNKnsyCH5uNEtjnyIDPwzdq%2Fx9Q2S2TWg7lnpgwrvs81IcUdbAkx%2BjCWzkZByS6%2FuXFIT9yYD2xS3smhNA2lQBXywSWaTtIunDh0vDOyylfkqzmHw5WCb3DdLEMZhiQ4Vty2KYIlEyZIipC4e3i4zUhj8YVfo8hBoLU3eH%2B%2BEQkQODGnqKvXdfut%2BR81j1HhSNO%2BQRHrRRG5k6Q%2BIeNoyF9l9K%2Fc3KnqKCpSD0oDnShITVCEcnNlmLCaaavyFD%2BJLrBXF2TrXjpqTtdQHzLEn92zwP0TkAShqMj7nftFo%2B44QobHvQlkbGYhLAxeYWY%2Fq5Uc14tRw2t54xI9RpKlgjzGgbicXV5T%2Ff3LUuKyhSoEgZ7w%2Bw22gWuTNLNhReecOgpJ92EhmPKBudsCLzNFGqa14QxXqbs491kyHiPdbRHSKQ8P0qLOVQxy1rkRAFPP9sLT8oCY08EGEymgrYMSFNQb%2F1pjY4D4uoNLx1vYqswgImg36ooqSEnLs%2F7RF3WFgAutfgPU3xiFqnYEc0RnjDMbw%2FMLVxNohUQlIXiOVWK5dVqBCCyNVqRtPIww1FTz%2F%2BeQXxLyad1pfb0esDajw260%2BfkcZbPkuThIb%2FJuCDFmWW3SkhDCnpOy8BjqkAT8Sn1aKpOJlA6SE9T3Jsm9SbkwjY2EWmrTuLc75W%2FpkEAOHlqR6cgdeYON8LUlcaIelihsjZcXYN%2FgfLV4%2Fm3PcETWkbc76xMVprFedk5yWT7jevBizXarPF4DmGsqLg1LBJt%2BColXAlyWkflcNuZYMsWhLP9nVr49pEqo8yYcpnedJkAOkkLFEXhk1wPo3jmZauFofznjogyrMmqP1DH4SL6Hx&X-Amz-Signature=2afb7782385f1666057f7fca90c63979f2ebc8e2f9901c1bbd341d1bb57cc624&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B6Y3XYL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNmbLzyQqkst9Q9gIKUVufJqPGWobfVoTY%2FIUdRv1WcgIhAL5tnqinC7nwIsGECvlUwelYfwqzJ0kALJZM3hEvuyGCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZjqHOMgXmhUiYAHoq3ANB6J0g4CVBNKnsyCH5uNEtjnyIDPwzdq%2Fx9Q2S2TWg7lnpgwrvs81IcUdbAkx%2BjCWzkZByS6%2FuXFIT9yYD2xS3smhNA2lQBXywSWaTtIunDh0vDOyylfkqzmHw5WCb3DdLEMZhiQ4Vty2KYIlEyZIipC4e3i4zUhj8YVfo8hBoLU3eH%2B%2BEQkQODGnqKvXdfut%2BR81j1HhSNO%2BQRHrRRG5k6Q%2BIeNoyF9l9K%2Fc3KnqKCpSD0oDnShITVCEcnNlmLCaaavyFD%2BJLrBXF2TrXjpqTtdQHzLEn92zwP0TkAShqMj7nftFo%2B44QobHvQlkbGYhLAxeYWY%2Fq5Uc14tRw2t54xI9RpKlgjzGgbicXV5T%2Ff3LUuKyhSoEgZ7w%2Bw22gWuTNLNhReecOgpJ92EhmPKBudsCLzNFGqa14QxXqbs491kyHiPdbRHSKQ8P0qLOVQxy1rkRAFPP9sLT8oCY08EGEymgrYMSFNQb%2F1pjY4D4uoNLx1vYqswgImg36ooqSEnLs%2F7RF3WFgAutfgPU3xiFqnYEc0RnjDMbw%2FMLVxNohUQlIXiOVWK5dVqBCCyNVqRtPIww1FTz%2F%2BeQXxLyad1pfb0esDajw260%2BfkcZbPkuThIb%2FJuCDFmWW3SkhDCnpOy8BjqkAT8Sn1aKpOJlA6SE9T3Jsm9SbkwjY2EWmrTuLc75W%2FpkEAOHlqR6cgdeYON8LUlcaIelihsjZcXYN%2FgfLV4%2Fm3PcETWkbc76xMVprFedk5yWT7jevBizXarPF4DmGsqLg1LBJt%2BColXAlyWkflcNuZYMsWhLP9nVr49pEqo8yYcpnedJkAOkkLFEXhk1wPo3jmZauFofznjogyrMmqP1DH4SL6Hx&X-Amz-Signature=c0e52516e64cfe97f0185ba53ae1b27afca1972e2cface9eab595ce77bd80d23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXCCV4J%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACPWXZvR2yJrdlURCS2%2BKWqD2eu1OZ5F%2BoTtySjohnLAiEA%2F%2BLboTivkL57LGZkinNx5ctYsgwKOAtKTdRRRmGVvmEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA92dLRb3GnAMAYVPCrcA2wfKFvMGFDHNYO%2F1RORfDh%2Fx9%2Bq%2BNZEk8tophJ2%2F1Fd79Aba5xzE2qRTsHCGSKIM4c%2Bkr%2FFUJexi7%2Fvoe2YNp1G%2B4Maxv434y8IvqhH1WpNTJYcimZFjdV47cegi4%2F7lcgSoJ7nwxI3Wu53s2Qd536EPf3JDjgT5JAHdSOMt%2FNgwF%2BJ5uwJVncSXojfsu8umEjmv3awlP2Gs13Arn6OhBEOz9LzAjYuS3KmXN%2BbnKbbXKJGlrEksBbnx6zQwx4Zb4APEvX3boCz9LWOOx5z3fW9vJddC0510Q%2FYglTO2Q6tCfL0TMqyST4WjRl2CCVdjkiDu3ND%2FUfkxD7sRXFCXmWwoH4P4Qm2V6XDYQp0Zv4ICsb4WgvwusBcpl8EJCyq2T8CoWjLoXIRYK8AIdBt%2BYu37OjQrldhu5Iyd6%2FECJVkNCVuMCD5o0q7EgSTkbrjZq86lS8sB%2F92kZiWP%2BbJXZzjJTxIt%2FPw9lL8Zt7iIQyFrrtqNYh%2Foj%2F8q6ILM860nozyQlh0YHIXiE%2BfVYuZuxJPaLIsiBVVzCTvrrF90RIFoR8whSQkHEz1BVRf2niIulVrrhUvCv4JdwsjqNLCNaglnlkvi%2FOscE%2FrJYa0ztysCgK8vDUO5JwLpLXVMNWj7LwGOqUB2nbJWWs2GZnQv9pAH40mjsgrAiWIA%2BXb0H%2BjjUlquThuFZp%2FRRA3xe58l%2FOes%2BDrthqF559%2BiqoFPP1eoGCAajUj8g%2Fq4a3T5c7CtCx7vXuBgBiiGsECle1SRjGOvbAFkjrfWhxoU88qQciBnEwK3Ie6B9vxeYygolmKhbsmXQjQkb3vvwDvGErb1Br85v5e5lC6w0x9z%2F8Xm20z1aB3%2FonEnM5y&X-Amz-Signature=23d295b3ff1143914acc9eeb790d2207c05d2a44ab51bdd2e8eb8f6b5d79c5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4BK3H3%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVKQo3jQwlLBqDyoIE0gNiyGESsuzsHky4JPUeXHnkQIgU5J4b9lQqL67V13DB2ekgHTGWZl79OXWSP%2BvaqlxYuMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjziy3zST8kfHnIICrcA91GyvH%2BtRXKJ1642onQVAgOREq7sZDIlLnHTbDp5Uk4YCrqHMSN4SNgJ0kxePxNKCSwarOqSbXEmZX14TLEg%2Bqht%2FTYQ7qDZi%2Bu11EzrqrPSFQJexP2mNEmqZqc65rCsivmffJ58VM2vNlFOa0N7MF29487xh%2FH1x6vj3amR9AVErEcZgMb66WA60b9dcJuknC3bK43TK5bv5K%2FUX3IowlBtv%2F8KsboXDOxISKLC6cEhzUsHbXUWVtgToei02HGXXCO3%2Fl6U6fPwzGnXqHFywEmMAGX%2FG59RsyQXcw9tNn5hx6nqeMxUC2DWOcS3Q7R56GCtG3qzo8g%2FAPkvEVuTaKsTH01NEu4u36EfNMJUpaRLWZz0BtpmGxmqDkcSOAEEqin29522SHeESipSwYv7g50dd%2BRIp2R8eR8tgnzAawwVMnRmrx3YD%2FXr6gqxWQoaNBg%2BQem3k6BYSRl81lt0nmHBkt74BN0gyKfO68PtVzuBnz%2F2QexanxOG19uApLny6Gr6HSzxao%2FY4%2BxBu%2F9xSIf7UiPQgDI7SNmoYfagAbVzEZpmpOd1lp8xHaHN3GROzC993ElvYvDzSt5DrReqEgDeZFwhC%2F3WMMHoWW%2FGC5BzGYeeavA%2FCHpkB37MM2j7LwGOqUBXX3tO2mqvcufNn3G4cLQwqLOu6ABiS0fQ0KvHu9f1viWwqh4CMBCBZJDL9tBvmg%2FwEXvd81ypsHm%2B7oghyxQ3lRQkrFsczufLt5PMH8YF89zXA7R82HRmPceuMwJiXkwGmlFW83wzIGO6Nn8VIUeOjErTyrqu7DGmgZpnrhjG%2BJVm%2FBOwlN5g8xZkXhoDRYaAHaxOGzY2TrXpN%2B1bGeR6MBVWGc7&X-Amz-Signature=6d9afbb7a85efcc03dbd74148b9785c387558e3ab9d056d8bc66d7dd9460e537&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B6Y3XYL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNmbLzyQqkst9Q9gIKUVufJqPGWobfVoTY%2FIUdRv1WcgIhAL5tnqinC7nwIsGECvlUwelYfwqzJ0kALJZM3hEvuyGCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZjqHOMgXmhUiYAHoq3ANB6J0g4CVBNKnsyCH5uNEtjnyIDPwzdq%2Fx9Q2S2TWg7lnpgwrvs81IcUdbAkx%2BjCWzkZByS6%2FuXFIT9yYD2xS3smhNA2lQBXywSWaTtIunDh0vDOyylfkqzmHw5WCb3DdLEMZhiQ4Vty2KYIlEyZIipC4e3i4zUhj8YVfo8hBoLU3eH%2B%2BEQkQODGnqKvXdfut%2BR81j1HhSNO%2BQRHrRRG5k6Q%2BIeNoyF9l9K%2Fc3KnqKCpSD0oDnShITVCEcnNlmLCaaavyFD%2BJLrBXF2TrXjpqTtdQHzLEn92zwP0TkAShqMj7nftFo%2B44QobHvQlkbGYhLAxeYWY%2Fq5Uc14tRw2t54xI9RpKlgjzGgbicXV5T%2Ff3LUuKyhSoEgZ7w%2Bw22gWuTNLNhReecOgpJ92EhmPKBudsCLzNFGqa14QxXqbs491kyHiPdbRHSKQ8P0qLOVQxy1rkRAFPP9sLT8oCY08EGEymgrYMSFNQb%2F1pjY4D4uoNLx1vYqswgImg36ooqSEnLs%2F7RF3WFgAutfgPU3xiFqnYEc0RnjDMbw%2FMLVxNohUQlIXiOVWK5dVqBCCyNVqRtPIww1FTz%2F%2BeQXxLyad1pfb0esDajw260%2BfkcZbPkuThIb%2FJuCDFmWW3SkhDCnpOy8BjqkAT8Sn1aKpOJlA6SE9T3Jsm9SbkwjY2EWmrTuLc75W%2FpkEAOHlqR6cgdeYON8LUlcaIelihsjZcXYN%2FgfLV4%2Fm3PcETWkbc76xMVprFedk5yWT7jevBizXarPF4DmGsqLg1LBJt%2BColXAlyWkflcNuZYMsWhLP9nVr49pEqo8yYcpnedJkAOkkLFEXhk1wPo3jmZauFofznjogyrMmqP1DH4SL6Hx&X-Amz-Signature=5d3137b7fd3d9a8fe202c186dd464e3e0cf09d7d0a4351e0d59935a79793ce1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
