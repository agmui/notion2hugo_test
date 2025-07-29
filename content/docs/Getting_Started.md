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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSQIFPX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Ez7Vzde4fUt0gSVrGAsjdpAuUBhbqp%2FvN4XT7f13NAIgUM%2BQhi6z6%2B6vhzZuSLhZS0Q5LCPV0S8ixG90JVpivXYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAw4Hp3OpmrfVZT1ircA47pl14k%2FyULesC7l8yDOu07tkOBgNPtwhmsRSSe4PDN%2BuxXwKg0zTdUCT29HBoDVnvdX1rukTT4y7ez7Iujiux5FIghOmTHkWfYDuz8%2BXCXjkUzDcAnTkOAeKxuJ%2FG1%2FhmwgGnp83FCjvZFGOPAGD19QEM7tbstEErLiGcPvd1QtfV6LjIbYiOORe%2F%2FlQilDrkKN9jfBMpdWIgium%2FVtAo1qOBxMcNBRiRJ8hNtZSUYk6SvJysIHPW2ww0XLnuis%2F%2FfkrkLBSXoxKB7Qd7ByM7mocALBL9eZOClgq7XsAYCMM9n%2FltS0O6X0SIK2wAohwkKIzeoLw3EuecnBbSzeJUQL4MiUIR6Ql8iZKcKcm%2BCtNFK1%2BWfmJZ990FjoC02ajID%2FFUmF%2BcbpIqnUWS2PNCFNlomWsPaquEfD8zSFrCIhJpYq7vW%2FTR2Rhqq5e8UnGcTKKbT8EFvM67qE3iAK6OlCIUfp8LKPjQln6wfZ63M5i%2BBZWaetjEAfoVJUb16viBdWOW5KtQ%2BD4IF6%2BZI7KE50vE8Ov7zjUhNr923T7Umv1iA2JEIU4cv6u4BlOZtxIXzTSm4NFQUTR16rRWXQ5M6rwodkpQrGkRsaTCyD59cjuJvrFMteeQs6D92ML%2BtpMQGOqUBJx%2FQcbWjAS0hoUMw%2BdpiyV2PpYRUNE8FGhIG9xYjQeYvYOuYQcd9q1YH4Bx1p8vy%2FkaB5fAKAak%2BShxce9CsUmUd1UzsDEfNFBViiLWxK6xww2zZCG5i%2BKTsBAcSwpe04jHcf%2BMCJnrnebi9V%2BxmZ%2BvHLETgtmhZjwC4gnA%2BRXxHzYRYd2FJO55fSdr9Q31q0etGq5JRZybTHXV5Txu%2Fb8I9ppKP&X-Amz-Signature=7d0708f5218f381a1fbd124eb635c2f85fd85ba0c19d4e5ba392726643b99b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSQIFPX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Ez7Vzde4fUt0gSVrGAsjdpAuUBhbqp%2FvN4XT7f13NAIgUM%2BQhi6z6%2B6vhzZuSLhZS0Q5LCPV0S8ixG90JVpivXYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAw4Hp3OpmrfVZT1ircA47pl14k%2FyULesC7l8yDOu07tkOBgNPtwhmsRSSe4PDN%2BuxXwKg0zTdUCT29HBoDVnvdX1rukTT4y7ez7Iujiux5FIghOmTHkWfYDuz8%2BXCXjkUzDcAnTkOAeKxuJ%2FG1%2FhmwgGnp83FCjvZFGOPAGD19QEM7tbstEErLiGcPvd1QtfV6LjIbYiOORe%2F%2FlQilDrkKN9jfBMpdWIgium%2FVtAo1qOBxMcNBRiRJ8hNtZSUYk6SvJysIHPW2ww0XLnuis%2F%2FfkrkLBSXoxKB7Qd7ByM7mocALBL9eZOClgq7XsAYCMM9n%2FltS0O6X0SIK2wAohwkKIzeoLw3EuecnBbSzeJUQL4MiUIR6Ql8iZKcKcm%2BCtNFK1%2BWfmJZ990FjoC02ajID%2FFUmF%2BcbpIqnUWS2PNCFNlomWsPaquEfD8zSFrCIhJpYq7vW%2FTR2Rhqq5e8UnGcTKKbT8EFvM67qE3iAK6OlCIUfp8LKPjQln6wfZ63M5i%2BBZWaetjEAfoVJUb16viBdWOW5KtQ%2BD4IF6%2BZI7KE50vE8Ov7zjUhNr923T7Umv1iA2JEIU4cv6u4BlOZtxIXzTSm4NFQUTR16rRWXQ5M6rwodkpQrGkRsaTCyD59cjuJvrFMteeQs6D92ML%2BtpMQGOqUBJx%2FQcbWjAS0hoUMw%2BdpiyV2PpYRUNE8FGhIG9xYjQeYvYOuYQcd9q1YH4Bx1p8vy%2FkaB5fAKAak%2BShxce9CsUmUd1UzsDEfNFBViiLWxK6xww2zZCG5i%2BKTsBAcSwpe04jHcf%2BMCJnrnebi9V%2BxmZ%2BvHLETgtmhZjwC4gnA%2BRXxHzYRYd2FJO55fSdr9Q31q0etGq5JRZybTHXV5Txu%2Fb8I9ppKP&X-Amz-Signature=b8d3d25d646e3d84c3c6f2ecba806270cf14768dc653b227c18b5e56486a1891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSQIFPX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Ez7Vzde4fUt0gSVrGAsjdpAuUBhbqp%2FvN4XT7f13NAIgUM%2BQhi6z6%2B6vhzZuSLhZS0Q5LCPV0S8ixG90JVpivXYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAw4Hp3OpmrfVZT1ircA47pl14k%2FyULesC7l8yDOu07tkOBgNPtwhmsRSSe4PDN%2BuxXwKg0zTdUCT29HBoDVnvdX1rukTT4y7ez7Iujiux5FIghOmTHkWfYDuz8%2BXCXjkUzDcAnTkOAeKxuJ%2FG1%2FhmwgGnp83FCjvZFGOPAGD19QEM7tbstEErLiGcPvd1QtfV6LjIbYiOORe%2F%2FlQilDrkKN9jfBMpdWIgium%2FVtAo1qOBxMcNBRiRJ8hNtZSUYk6SvJysIHPW2ww0XLnuis%2F%2FfkrkLBSXoxKB7Qd7ByM7mocALBL9eZOClgq7XsAYCMM9n%2FltS0O6X0SIK2wAohwkKIzeoLw3EuecnBbSzeJUQL4MiUIR6Ql8iZKcKcm%2BCtNFK1%2BWfmJZ990FjoC02ajID%2FFUmF%2BcbpIqnUWS2PNCFNlomWsPaquEfD8zSFrCIhJpYq7vW%2FTR2Rhqq5e8UnGcTKKbT8EFvM67qE3iAK6OlCIUfp8LKPjQln6wfZ63M5i%2BBZWaetjEAfoVJUb16viBdWOW5KtQ%2BD4IF6%2BZI7KE50vE8Ov7zjUhNr923T7Umv1iA2JEIU4cv6u4BlOZtxIXzTSm4NFQUTR16rRWXQ5M6rwodkpQrGkRsaTCyD59cjuJvrFMteeQs6D92ML%2BtpMQGOqUBJx%2FQcbWjAS0hoUMw%2BdpiyV2PpYRUNE8FGhIG9xYjQeYvYOuYQcd9q1YH4Bx1p8vy%2FkaB5fAKAak%2BShxce9CsUmUd1UzsDEfNFBViiLWxK6xww2zZCG5i%2BKTsBAcSwpe04jHcf%2BMCJnrnebi9V%2BxmZ%2BvHLETgtmhZjwC4gnA%2BRXxHzYRYd2FJO55fSdr9Q31q0etGq5JRZybTHXV5Txu%2Fb8I9ppKP&X-Amz-Signature=5d94945083a4ce00fbcc9c25bbd786fe46c7e80dcda9fc0bd2b19dab842f40b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4APCASJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhwMnkWPremwF2mg0dVeH9dmAYqATjWPNH1t8u7eWIQIhANdurh2t0x%2FzLLiNsXuG7XZAbnzgQUxWE5DchXaUG9NmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ9V118%2B4DznJeMg0q3AOjvAYKT6pCIeuIpeuNpJGF96AIFMgQMbmD4AtYpCZrDzH2nAIH0TnKb7cSbz3szx9MraJHXYEVHiNheKbuQVU%2FE6etyCvBVyUQSwNzFMqsW3gmNsoX%2FuNspm8lPCdcY4zIt%2Br0C6PGTkJ6PYAlq0pOwC4qd%2BnbAELq8xqimcbeLYuk4QBI3D6XqcT6ZaW4I4IOmjISmDoJaLNY66EhxdjS%2FgQpFbkKv6QMlZx%2FAOG9coY1ORaUeC4v%2BWrbhunpK3Hl3RiSjTavdZNsVkAhaVSU%2Fe6X%2FNnsgVJNDHVcWZ1iIPYmxfmRl8iwP%2BYH7Za6GVmBUaCnyoWyCJExzg27M1SfP4%2BVglV2wWAShStNwfMruttvvcP9lcloEeMTpPOCfcGmWn1riJ%2Bf%2BL8JH%2FKJ4b0VPEHF8r9BmupJcULzBzWEXZfvhhW9y%2FuXzVQ2qGwy571XKwVVz%2Bl437xv%2FquWq0PC1qwYua%2FzZSvBhcteiI92IiJoWVBnn%2BT%2FQ1qHbjoo%2BKGSC94jmEDQP8vNgGLm8cP%2FmfkRnDTNWXiSKH4cTVzd3G710XGmmIeDzQBbBgPiY4xwAmzlMxV7NSwAX4Vb%2FnhZWrG%2BCJU47Wy35tkIBGkPHYptxgVLk23HB0YLsTDTraTEBjqkAQtCAtx0fBpX1vR1urRPxrbg3yAPckuHEolj%2FxpYqLANbglEu3b46hCi3iNZ2mwJS4w60spYLDGiclihJhuDbYfvjA0uTaQDs4H71FRbMKD8QUsGkB%2Fz6AjKuxQV8JqLMqthSprtAKO0qiHcL9KJwhPYfF67H0K89Lz582VbHwkAFSvuCFMz4mExkoINmsbPdVQLA3QxScwhBflIiocSqvNrvOJ2&X-Amz-Signature=df80b8dfaa5fffce53287febed88a3d8daae130790734786c3c78cec00300bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HVQHSAN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSqidzzH%2Bscrmyjx83sIKiDHCY7yXjYTG%2FYOfZwmosDwIhAJd5nNLKKycHIZqaaoVGfDjKwQhU3p%2FKaq1pdhWXeYzXKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9pknzRuXqBxFBG%2FEq3AMfE%2FNdygU6uRuXwMJInC1nif1EDtElEz4712vGXRw4t8P%2BJdXWavUPYYVlgFUyOJqhlPmjlpBHb6C4q7juc%2BUmnl3z5Ln0YibJesk%2Bov8UNtYEXA6JRovEofs6rlS0LE0Y8mIpXHd9oSrfKj%2Bc4B3iZspjRT7FJEd8VtQUUT9Az%2Fx1sej%2FiEv4ILiFL7shL%2B7%2FOD%2FlK6mAx%2Fkuo2xMIx4TG6V3zEpIV3Xeo8Gl89tBBONrTrNIOZQ4qOprs94kgEr%2FJCe0ivXQkdb91GN8wfU6rL5FDvyLbDWpC%2FFNiFQHCuuNCC%2BBM%2F6TcM6Pz2yTIxrbP8Xqa%2Ba8ZNEtUePC%2ByaZbKr7ODxVVpSDFShuuqVGPa4fm1HVpZEx0QAOCKCNJiRnU7GPiV4iuXTiAlQ%2FtIjZmi6lu2BFaFNW7ku3jlw6Pjn7iN%2BIq8htyCXA4vO0JIrZtobiRh9KOBdQk1%2FjNdCVqRPGxGH7N5UE8GlIF5YbqsX9Wl%2FLvp9LmiuMn2vgp2S23n1f6ELzD4dg20qEmiLMrLe8oqakuzAzn0fqUyCl1I3Ll7YWngKXztMzMMahpGzeqaA2VrG7kZdThyfOM8T%2BM8iNDVBsdxoujVJ7J0Ic9vrOrZZFkiYPHnF3ZzDeraTEBjqkAcYbEa8%2BTA7VUktSUNt%2BUDwg9kQVz%2FJ8psSzTftd6ukE4OKXwVGOLBthRX5E5Kt%2FL6kHxwa%2Fux2815uth%2BB41ZATsdfhnydfi9yFKJ7RNF6Mfgh%2FTsL8BjlyKoNhi%2BQQuRjA%2FXDb2CVxBnoNyb%2FC6cWE5k6ll8rWyl6vmLR7zFQQKRXFB1nacTajD5Uglq7DD1aQg3FIuKnazFrONrx8JhjwcIDp&X-Amz-Signature=4ca9f91a477decfaa292d3afe51b1324d71aef9862f96831e4ce9daf05732cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSQIFPX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Ez7Vzde4fUt0gSVrGAsjdpAuUBhbqp%2FvN4XT7f13NAIgUM%2BQhi6z6%2B6vhzZuSLhZS0Q5LCPV0S8ixG90JVpivXYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAw4Hp3OpmrfVZT1ircA47pl14k%2FyULesC7l8yDOu07tkOBgNPtwhmsRSSe4PDN%2BuxXwKg0zTdUCT29HBoDVnvdX1rukTT4y7ez7Iujiux5FIghOmTHkWfYDuz8%2BXCXjkUzDcAnTkOAeKxuJ%2FG1%2FhmwgGnp83FCjvZFGOPAGD19QEM7tbstEErLiGcPvd1QtfV6LjIbYiOORe%2F%2FlQilDrkKN9jfBMpdWIgium%2FVtAo1qOBxMcNBRiRJ8hNtZSUYk6SvJysIHPW2ww0XLnuis%2F%2FfkrkLBSXoxKB7Qd7ByM7mocALBL9eZOClgq7XsAYCMM9n%2FltS0O6X0SIK2wAohwkKIzeoLw3EuecnBbSzeJUQL4MiUIR6Ql8iZKcKcm%2BCtNFK1%2BWfmJZ990FjoC02ajID%2FFUmF%2BcbpIqnUWS2PNCFNlomWsPaquEfD8zSFrCIhJpYq7vW%2FTR2Rhqq5e8UnGcTKKbT8EFvM67qE3iAK6OlCIUfp8LKPjQln6wfZ63M5i%2BBZWaetjEAfoVJUb16viBdWOW5KtQ%2BD4IF6%2BZI7KE50vE8Ov7zjUhNr923T7Umv1iA2JEIU4cv6u4BlOZtxIXzTSm4NFQUTR16rRWXQ5M6rwodkpQrGkRsaTCyD59cjuJvrFMteeQs6D92ML%2BtpMQGOqUBJx%2FQcbWjAS0hoUMw%2BdpiyV2PpYRUNE8FGhIG9xYjQeYvYOuYQcd9q1YH4Bx1p8vy%2FkaB5fAKAak%2BShxce9CsUmUd1UzsDEfNFBViiLWxK6xww2zZCG5i%2BKTsBAcSwpe04jHcf%2BMCJnrnebi9V%2BxmZ%2BvHLETgtmhZjwC4gnA%2BRXxHzYRYd2FJO55fSdr9Q31q0etGq5JRZybTHXV5Txu%2Fb8I9ppKP&X-Amz-Signature=ebb3b785766f0ac5ce2da4f42a3549c8e586d72f4f6064e0071c9e2b989ed700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
