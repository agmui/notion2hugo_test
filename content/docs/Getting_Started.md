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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVMDEFH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDJNboEPgNiovm0qPHWDe6sMwcunyOCgFRN5RqVUwdZJQIgPE4HQXP7EbB37kRWJDlcoVdBIXMf%2BuZeDEXXQz5lVY4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQCz%2FaS18lpVuE%2B6ircA0a0j6sZz%2F9EeBUcKpd6cquufJe6EuME50TGMg0W%2FYtjzaP%2BgC%2BuvK8TrXdvhHLlUrYPloP%2F3utCuDOOIH5frSaa25%2BZsbhdTG%2B14Dgbbc4tuwtwm2MjF6wSYd7BZJh5y00sMIDnteXekjGdwT4opQr8H8rjq1wchJHocQAhPt53d85qdm2GIN0h7UB%2B1%2F7c5Z1Q6RSx0Bxgjz%2Flgw9ljisZXsCwRQkyZLL%2BbZ8zMK4jBHVmgoNr3oFcFK9gBsXcgDr376cclVLEonpoypT%2Bfa4i1iAwe13RMG3ZlCcHciNJ%2BVtS2QTrrfxGXwIOWDumixX4odmgnO7SGGAP6yrxUZ7MGSHuP23PLzbsg5aX2wrPizb8G0zZjVdnYPaSyXiShPnqYRrF%2FKrbwF3pLxrj%2FP3iw%2FJiU8XfGL41Lv0aq0lTE2U6AeozBlsLduqs7NTp1pcvKoD%2BvmhvSorVhqtS1AaygMI3BwusN9JS7Rmv%2Bk3lt8KOCgQX1cBxddGklS6AW4zdReysQYYLZ2KpnwG3bROWLDu%2BcDsPd5BDr5AXC2X2YmzC06i5Gaa86eADV1DVBzT0Vx0UI%2BdjTWkbTko%2FW9tj14fFljNRzLrSTzyPbtaE69a5a6WaOhfKrlPFMKmvt78GOqUBQNvybtnQv66xftH0F7KnnKzDUKXVcALcMzjgrRalwZtaz9agobtqOZnsTUl%2BMrjJB3WUL3pnXmGg%2FRJjSoVHLuVJb7d5KYYrVy8t5KZSzYokXLZ8DDgiypLiiBsQk4pTyhgw1yIepn5vzrZV4eY50oPbVBpbv%2FAH6EsCA7L5lqBjQ1PKkchoJQV8QcuXeFDi8MIesm6RjWRh9SYflgOdz1TZTA%2F0&X-Amz-Signature=799172a05a551d7f52aa57a2fef44bc993aab0863d7069d38bbff75a63a385fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVMDEFH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDJNboEPgNiovm0qPHWDe6sMwcunyOCgFRN5RqVUwdZJQIgPE4HQXP7EbB37kRWJDlcoVdBIXMf%2BuZeDEXXQz5lVY4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQCz%2FaS18lpVuE%2B6ircA0a0j6sZz%2F9EeBUcKpd6cquufJe6EuME50TGMg0W%2FYtjzaP%2BgC%2BuvK8TrXdvhHLlUrYPloP%2F3utCuDOOIH5frSaa25%2BZsbhdTG%2B14Dgbbc4tuwtwm2MjF6wSYd7BZJh5y00sMIDnteXekjGdwT4opQr8H8rjq1wchJHocQAhPt53d85qdm2GIN0h7UB%2B1%2F7c5Z1Q6RSx0Bxgjz%2Flgw9ljisZXsCwRQkyZLL%2BbZ8zMK4jBHVmgoNr3oFcFK9gBsXcgDr376cclVLEonpoypT%2Bfa4i1iAwe13RMG3ZlCcHciNJ%2BVtS2QTrrfxGXwIOWDumixX4odmgnO7SGGAP6yrxUZ7MGSHuP23PLzbsg5aX2wrPizb8G0zZjVdnYPaSyXiShPnqYRrF%2FKrbwF3pLxrj%2FP3iw%2FJiU8XfGL41Lv0aq0lTE2U6AeozBlsLduqs7NTp1pcvKoD%2BvmhvSorVhqtS1AaygMI3BwusN9JS7Rmv%2Bk3lt8KOCgQX1cBxddGklS6AW4zdReysQYYLZ2KpnwG3bROWLDu%2BcDsPd5BDr5AXC2X2YmzC06i5Gaa86eADV1DVBzT0Vx0UI%2BdjTWkbTko%2FW9tj14fFljNRzLrSTzyPbtaE69a5a6WaOhfKrlPFMKmvt78GOqUBQNvybtnQv66xftH0F7KnnKzDUKXVcALcMzjgrRalwZtaz9agobtqOZnsTUl%2BMrjJB3WUL3pnXmGg%2FRJjSoVHLuVJb7d5KYYrVy8t5KZSzYokXLZ8DDgiypLiiBsQk4pTyhgw1yIepn5vzrZV4eY50oPbVBpbv%2FAH6EsCA7L5lqBjQ1PKkchoJQV8QcuXeFDi8MIesm6RjWRh9SYflgOdz1TZTA%2F0&X-Amz-Signature=91ebe0dd660f0c0a1f0fc3abe5cff7dd9460f25b6af66ded944e1f7812f9b885&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGU2VHY5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAusOMBXYr6YBYgogLBZxV2yhUhvx5q9rGOYxRosBmorAiAnE4R33BkNc3NkYV8mJcDpadu2cinzqRBjyhurK6N9KiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjpYJDAmU2Swhd0xVKtwDopwEL9relsT8z6tDmzhveZFO0y4DwIL7nkwafLyWl%2FU0AyspWH2M4NBQjKghyokNoU%2FqMaj%2FgEC%2B4TIL6d4rX94HXI4ZKRP%2B0mgMzTvmVSun3omExSS7W4dynprLP2DtoGBkZMYvFlsUL0OI6gE1Hu1PacTNWE3wx2x7aq8G7wmh5%2ForLy3gwSd2UgQHXyK8LM97M7g%2FY6Eo6XFr7yjZA4vHsgfi7i8RTN6l2%2FkjB54QajodqM4hyNkgi4gLgTZIVzHPYOgzmzFi0h8VDy45PvG5Ow%2BI1uP4rGSLzLpoKzE74Zwvq7J627zWRT69%2BMWYKIFgXNl7ocXFhyFJCDUMvBYmxYtmZFFeN1w1UsJopHboLeHUpW%2BAPuqUwAxIp1zj2S%2F0MouEI92TUuEzMKeUSOikqaMbpF9yvbb6vFeF0qn1kgtDl7f4J%2FjK6DUahIQjbxpK7SDAXQI0gwvu38O6IfNsrw73l80QjEOqkSoejxeTwXvvFAL4%2FjpgMFa6hnhq76%2B7VR2Ozovl%2Bja8RVU%2BcZm1kkg7M6jx1nv03pcAybYKNV%2BLaH3E7mnHWdOACeCREUvVaAyZg27A0FXhsZ%2BsXSkDa%2FkTEX6Ot2F2xBRrH%2BFVdxVg5gQmP9JcMBEwg6%2B3vwY6pgG3AXqZsmqoxtXounH80wK4vVW6JdPIneBl36cPpxz8Pp94RySqh0xEmxJGzQJPHHT3%2BWPKpj0B2OtgZ7vvq10rbGWu1TeAiuflSWeEvpiNsr4%2FotGz9Yu4ES4DFEajf24bJjTWzAtRP545aXzglzNrF3HiU2nXXRP4eJN5Ze%2FKtXq1m7FKz5ZrepTL7xwmAJArY8%2B1cAh4XXJezSUKwGD83r%2FhP0qx&X-Amz-Signature=2c530f5f2d9ad0e89d00531539e1361da3c8ca2d4b25e2bdeed88924e81b5822&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WMEDH3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIByggW%2FEPQtQPIpxXyy2SIhClvj9d5okAPyq04lh3%2Fv9AiA1jyMM%2BBMeAb%2BwyY7QgzqYEjy3rfUNCh3tkGvoYC%2Bd0yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfX1iXToC68EjwshEKtwDCcyUtr2kh44jdjrEbMPiCJePXfmLnXppURzuRWvIq4CKGDhMqIp9Ms4XXEyNPcY%2BB4u6MbnJgRzn%2FAhJ1Wzit1l296lZV39LN6Vq9BwAVfCB1Aky6WQq2BrH01MexzxYqPnHySRc%2BWYqUYxpaeHjcdcejgEj28dXXzxCTYc7eQjzu81S5tgWKqu2IJwaK98kHivP4t4873Yf65VR66MlB4FI053SGtT%2FSpDAe6hN9nSeoCNGXYYA7IRRIjmU%2BhlV%2F%2FdYgjceU2uNtnN%2BU%2F2uqsWFdHgASJU5flLUXaGyIzkT0ygcymmhDBX7Ut6n64UXYi5OLx0hjBsTxf9xoLv%2BYI%2BKAoMHlvivy8u%2BnJvgNTWLpsbUwcfKbyfz4%2BFAj6%2FwbmfkOqDxt5FY1XI0TrCah61XLYRLuaaLtJT0qWamOSFrlk3Z%2BoUcU43mxaTP9TCjNg77Ws81wWxF8BHCw7j%2Bcc9bukZWa4vM%2BfblwJWPeBtz42ULBXY3CTZtB%2Fo2gOYsYlj9IOhmaPk7cwkMVAEBSp%2Fli5GdvPBNiQxgj5208nRT0%2FKn4eOtlBxW1969jUdeYb3E2%2FGKbUkxtBtRR4gBVbCJQzQayQCiWFhPODMnRwbiNY6UvRWUELvV3qswyq63vwY6pgEIEAT69d0u%2Bz3p14urIVcl7IrKk1b17ePi8xrjJ7G57VndaAQGY6dPXcQ6aBD%2BKVO4%2B6FV%2FO0494lCFgxpxjp3Vi9QK5FoTdUeeiC7v58lEA68HiDPzgJUpD%2BSWDLV%2FzzdPIo4ajH7DYGmBPfgUY6fmL8J6h0HKilBX0UWeVPjlVSgCeCpmBLBFWUMSCq6SDxPofwE8CYrXaKa4DPjdZKWBNKwBTKj&X-Amz-Signature=17a8abedc087f629c772f37fdbec9cb800af562bd67d44f68029e5fa15b1a1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVMDEFH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDJNboEPgNiovm0qPHWDe6sMwcunyOCgFRN5RqVUwdZJQIgPE4HQXP7EbB37kRWJDlcoVdBIXMf%2BuZeDEXXQz5lVY4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQCz%2FaS18lpVuE%2B6ircA0a0j6sZz%2F9EeBUcKpd6cquufJe6EuME50TGMg0W%2FYtjzaP%2BgC%2BuvK8TrXdvhHLlUrYPloP%2F3utCuDOOIH5frSaa25%2BZsbhdTG%2B14Dgbbc4tuwtwm2MjF6wSYd7BZJh5y00sMIDnteXekjGdwT4opQr8H8rjq1wchJHocQAhPt53d85qdm2GIN0h7UB%2B1%2F7c5Z1Q6RSx0Bxgjz%2Flgw9ljisZXsCwRQkyZLL%2BbZ8zMK4jBHVmgoNr3oFcFK9gBsXcgDr376cclVLEonpoypT%2Bfa4i1iAwe13RMG3ZlCcHciNJ%2BVtS2QTrrfxGXwIOWDumixX4odmgnO7SGGAP6yrxUZ7MGSHuP23PLzbsg5aX2wrPizb8G0zZjVdnYPaSyXiShPnqYRrF%2FKrbwF3pLxrj%2FP3iw%2FJiU8XfGL41Lv0aq0lTE2U6AeozBlsLduqs7NTp1pcvKoD%2BvmhvSorVhqtS1AaygMI3BwusN9JS7Rmv%2Bk3lt8KOCgQX1cBxddGklS6AW4zdReysQYYLZ2KpnwG3bROWLDu%2BcDsPd5BDr5AXC2X2YmzC06i5Gaa86eADV1DVBzT0Vx0UI%2BdjTWkbTko%2FW9tj14fFljNRzLrSTzyPbtaE69a5a6WaOhfKrlPFMKmvt78GOqUBQNvybtnQv66xftH0F7KnnKzDUKXVcALcMzjgrRalwZtaz9agobtqOZnsTUl%2BMrjJB3WUL3pnXmGg%2FRJjSoVHLuVJb7d5KYYrVy8t5KZSzYokXLZ8DDgiypLiiBsQk4pTyhgw1yIepn5vzrZV4eY50oPbVBpbv%2FAH6EsCA7L5lqBjQ1PKkchoJQV8QcuXeFDi8MIesm6RjWRh9SYflgOdz1TZTA%2F0&X-Amz-Signature=cf7c3acb8eba5ab4d4018ec0bc07133d926c01958a47f98dbf6d5185ab25c8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
