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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZQWXD7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCtEup7fBnf9TSIbSxPB7kedoSSRwUdkerCiLc4WvO64QIgWjiLhNzM93nSl%2BWUAu7XFgwsX0cpPDxmiCuGLEgEaHoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInq1fLcHyfl1d0XHSrcA0mohUVt3mi5KZWzeCyt1mq3m2s0vOAgdyrG7OU%2BiiU3wuCvkmDioTRmP9KkjAj%2Fb%2F6qnyKVvkZuF6ewqh5kDr52FfSm0tc3G9iFIlCyH7ci%2B7YAmVAjWy9zFqH%2FDnm%2BJPC97UjDo7d10L40TCDWlqah8AMyKaNlOJ2msNUvMoWeRFgpFWHiYcU4iXHGN5piXlrxxSrPAFdOJRhym3gUzQ57XxgYQ%2BaeYNt%2FYI3I4DfxEr43kcomheGHyg4YBSWP%2FUiPZSULXjolDd%2BeQkbJSlvy5SGv59nClmvh5i7vsnWya9ljggLkAOEhmkDM0pjLE6U2Po2HK5fQpwLTpWpMcjS1odSHGdz049aQvUFMquNdz4qC1lxtfDV3EtzelKJX9l6UsaFYx2ssHJ0V0DymmLHNjhdwf%2BVxhafeYE94r6aZAbaUpGeI7V%2BakB9tE1krPMRQVqhXfFJeJGKshL0kirMMAq1FWupJ92ChcDkKTDU0G%2BYfgzdZQAFkFqJlLM%2B95H6u492SajI7DgOW%2BkgSb9yufgsYYq8kTObiovi0sINcyI7HF1%2F%2F9fZLZvNPaWwgxLnUaudrOL0ZlbNkZUlrt%2BYFI82QK%2Bl8dqUazt23JBRuUVH%2Bn3Mog5LuUu13MJbutsEGOqUBP1Oux6R%2Bus6hYTKq8qRWVkdwqHBodrjP1Re5GRygx6fM6HL1QIK3Vcx%2BC3WcvpDclZUmybWBFT9nX6zoV23wMK2hawQE57LE1rexIB6%2FNFJLsgtRkKXzqj1Z6KUxKGnEkJZIT5LnDbnsyN5MOMwhfy%2Fdsxqe1FeJTwfGu%2BSCaoL6PZHMS8csE6a5XD5kZGiQHJSj4a3IU%2BclVDoTkHhkZ23Udoe%2B&X-Amz-Signature=a672983c247fd16b8a6332f8da4611d52cd3cfcde1465404f4e1d9dcaa640b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZQWXD7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCtEup7fBnf9TSIbSxPB7kedoSSRwUdkerCiLc4WvO64QIgWjiLhNzM93nSl%2BWUAu7XFgwsX0cpPDxmiCuGLEgEaHoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInq1fLcHyfl1d0XHSrcA0mohUVt3mi5KZWzeCyt1mq3m2s0vOAgdyrG7OU%2BiiU3wuCvkmDioTRmP9KkjAj%2Fb%2F6qnyKVvkZuF6ewqh5kDr52FfSm0tc3G9iFIlCyH7ci%2B7YAmVAjWy9zFqH%2FDnm%2BJPC97UjDo7d10L40TCDWlqah8AMyKaNlOJ2msNUvMoWeRFgpFWHiYcU4iXHGN5piXlrxxSrPAFdOJRhym3gUzQ57XxgYQ%2BaeYNt%2FYI3I4DfxEr43kcomheGHyg4YBSWP%2FUiPZSULXjolDd%2BeQkbJSlvy5SGv59nClmvh5i7vsnWya9ljggLkAOEhmkDM0pjLE6U2Po2HK5fQpwLTpWpMcjS1odSHGdz049aQvUFMquNdz4qC1lxtfDV3EtzelKJX9l6UsaFYx2ssHJ0V0DymmLHNjhdwf%2BVxhafeYE94r6aZAbaUpGeI7V%2BakB9tE1krPMRQVqhXfFJeJGKshL0kirMMAq1FWupJ92ChcDkKTDU0G%2BYfgzdZQAFkFqJlLM%2B95H6u492SajI7DgOW%2BkgSb9yufgsYYq8kTObiovi0sINcyI7HF1%2F%2F9fZLZvNPaWwgxLnUaudrOL0ZlbNkZUlrt%2BYFI82QK%2Bl8dqUazt23JBRuUVH%2Bn3Mog5LuUu13MJbutsEGOqUBP1Oux6R%2Bus6hYTKq8qRWVkdwqHBodrjP1Re5GRygx6fM6HL1QIK3Vcx%2BC3WcvpDclZUmybWBFT9nX6zoV23wMK2hawQE57LE1rexIB6%2FNFJLsgtRkKXzqj1Z6KUxKGnEkJZIT5LnDbnsyN5MOMwhfy%2Fdsxqe1FeJTwfGu%2BSCaoL6PZHMS8csE6a5XD5kZGiQHJSj4a3IU%2BclVDoTkHhkZ23Udoe%2B&X-Amz-Signature=7baa4feb9d8273844e8b12d5e67a1a061ffebf72f310bad460abf382dfbe9b26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZQWXD7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCtEup7fBnf9TSIbSxPB7kedoSSRwUdkerCiLc4WvO64QIgWjiLhNzM93nSl%2BWUAu7XFgwsX0cpPDxmiCuGLEgEaHoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInq1fLcHyfl1d0XHSrcA0mohUVt3mi5KZWzeCyt1mq3m2s0vOAgdyrG7OU%2BiiU3wuCvkmDioTRmP9KkjAj%2Fb%2F6qnyKVvkZuF6ewqh5kDr52FfSm0tc3G9iFIlCyH7ci%2B7YAmVAjWy9zFqH%2FDnm%2BJPC97UjDo7d10L40TCDWlqah8AMyKaNlOJ2msNUvMoWeRFgpFWHiYcU4iXHGN5piXlrxxSrPAFdOJRhym3gUzQ57XxgYQ%2BaeYNt%2FYI3I4DfxEr43kcomheGHyg4YBSWP%2FUiPZSULXjolDd%2BeQkbJSlvy5SGv59nClmvh5i7vsnWya9ljggLkAOEhmkDM0pjLE6U2Po2HK5fQpwLTpWpMcjS1odSHGdz049aQvUFMquNdz4qC1lxtfDV3EtzelKJX9l6UsaFYx2ssHJ0V0DymmLHNjhdwf%2BVxhafeYE94r6aZAbaUpGeI7V%2BakB9tE1krPMRQVqhXfFJeJGKshL0kirMMAq1FWupJ92ChcDkKTDU0G%2BYfgzdZQAFkFqJlLM%2B95H6u492SajI7DgOW%2BkgSb9yufgsYYq8kTObiovi0sINcyI7HF1%2F%2F9fZLZvNPaWwgxLnUaudrOL0ZlbNkZUlrt%2BYFI82QK%2Bl8dqUazt23JBRuUVH%2Bn3Mog5LuUu13MJbutsEGOqUBP1Oux6R%2Bus6hYTKq8qRWVkdwqHBodrjP1Re5GRygx6fM6HL1QIK3Vcx%2BC3WcvpDclZUmybWBFT9nX6zoV23wMK2hawQE57LE1rexIB6%2FNFJLsgtRkKXzqj1Z6KUxKGnEkJZIT5LnDbnsyN5MOMwhfy%2Fdsxqe1FeJTwfGu%2BSCaoL6PZHMS8csE6a5XD5kZGiQHJSj4a3IU%2BclVDoTkHhkZ23Udoe%2B&X-Amz-Signature=90c7ee0797dc329b51a4fb77bc54e087eaf9754282874c283223032375c33a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJMIOP7D%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCTZRt7M8XrUwT5RdGO1dBZUQFCNPe51pbhalCV2Q%2BLZgIhAMSpcDgEsN4qXPrlfkp4Do5RRMhrmGYnwntQeppWXEOYKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Cojkgz6JT2RoTokq3AMtE8%2BBjcrqDCZWljfIEwnMyUTRKpp75JN2LbPNXJiLcFQprwcaJZgYdK%2B2kMZvp4apjQp3xHk4ljjSLfuDqOx5Vf52TgATgeZznXUA%2FkLm0JkObZMLXlJxB%2B9qF0sxDlHksGWaHxWvdF185Gbdv0GfEfragO60POhfQyI1YUifA0XM6G7i4CCxe0%2By4YTafjcQVOLyQgoS5S0dJysYnK73U%2Fu9hN93fb5B9tK2gYzQNsBdQmasEVQsn4xfGdFuydjrCF4A1eI%2FNN%2BRC6WEE0ubNa2%2FlRJQU3r2svgm%2BHVNmg1JIQyTloscKRJoJnjwLIQVHH6WEzIHQ63CggSk7wVkPJR5J6sL392%2FBnP%2BAJukfJaFfbboOdBlvpedN6U6YyvRgvS%2FNaUt%2FhTQMI%2FSa0oQgPNJO1bt73RaRtG9MR4BmmxVGv2LVA4j5jOeAR28GRMiyAQ2exU0AWb78%2BeM2T4xePZA6XCL8sKynyaDilC8nMmkanG7ih%2FJgciErzrLXVGZg8i1DjKu0FiRP%2F%2ByeL6tVPtUw7tm1vRVJ2PPYhvhrNwm157trLpy1B6DgjBkOmKtAN8kPzd82YhAdVBavrQTZA%2BLfaiYGa5Ayv3wwIvb1GE0%2FIr7DPv6H76PBjCs77bBBjqkAZvD9WlXpkVMK6i1%2FwtXW6Q4CiyO1FnFEIy27wPsZswAHpf1xjohm%2B%2Bk%2FSsMU%2F%2BRAEOHEEJUg252PGBo3ubAftHaptvv5VD1agZhpLOHDJIWB1wmDY%2BwuWKfxDZs9OzFtciK%2Fb3tccBhXl6wove8MYgOA2KR1DvpwH3IiWsJqZaoPm3rHSLG5ZpbjGN50fQqS2Hj6JQWxEQwZSjWPSvv82fI7Pxy&X-Amz-Signature=5e86b4a8cef6870cf9122db5bddc85dcb8ebb4c5d2c3a53d9c013f5da15cdf6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5HVDOY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCYkZW5VcgcvXsKgdIT7kZZ%2BW9xuOJaFNxwoQi%2B3FxPnAIhAMWX3JfN4GqkEA3hP3vZAo0cb%2BHR%2B2IVghzmgOjox9%2FlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6%2BZNVWHecVn4ojRAq3AMXM9M7wtgDXuE4kEQ6Xvq%2F38OTfbJeS3poC5Xn9BXrw9IQL2T2Bz6BRC4lUBS9mBr02j4AbTBjv1RIdqFXamuwM47EL2sULo6DygLn1BE4%2Fb2u1tEiUcEgPBPyg8uhg1qw5ykRlgnGlgJQcAZOoZ8ShT9ycO%2B6otXQHikw0vbBe0vRU%2BzwO3LUuSOaT4uLLkT2hiW0FxloopsF7fYeCgIjIu0lanqVyELcZtRXX2hjUjLOwt2TgunJexWEXEVJb%2BppkzO8tOjXcvzjLOzpWrcvoaDGFE3oShrlCSek7r3Npp20VENkuIcQtYtnDPqGE4Uq%2FEAX9dF1Lq208aEKxWZZReuLFrI%2Fi6ZKkBeAN%2FSDwNhNLRrDTRP7hBt0ZUX4DIhAaiYTDVDOGwIRsexweZ%2FDTfdAiCJcDjR1gqneZt5sPCqwZSug4fqRqiFheiw0l9inGftKFgKUXMJtC2Zlh4g2kkbDluTXkUjVPGyggU1m0n%2FDcRWFFZmb67xW48BE5VTfoDWUI4TfSTAan6Xti%2BJnqR3vdJzxIyf01Ga%2B5Hc7Li%2FDv11JDKsliQUrgRJJp8tYo0G7LCunjO0BxyCvoNYGO1BRcFiBydyDSmRrrr9CS8h2ozrbVvnXE2X%2FhTDB7rbBBjqkAdimxs6zROBnx15leC%2BMIXS92IELa1XLy8qMstdgDSSVtVmbw210WigEqCWHsNzDJujI%2F7tavxBFySO27Zv3HeS9q3BWG22IJ2Gyql0nZvwQ2SLr9XlhriSVn5Omt5gCTR%2Bm89%2BiLq7XmYIKNTtXN6iCTDjrk%2BXNEBE89HGItkiBA4y4Rt1rcsBf%2FsuZ0gmYgwlZivhJpeFpUfvQkhCF%2F4QoUcsi&X-Amz-Signature=454676d0f01771888ab66b6b2a8a4c5b5dff62a79021b2a138036bab07219534&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZQWXD7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCtEup7fBnf9TSIbSxPB7kedoSSRwUdkerCiLc4WvO64QIgWjiLhNzM93nSl%2BWUAu7XFgwsX0cpPDxmiCuGLEgEaHoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInq1fLcHyfl1d0XHSrcA0mohUVt3mi5KZWzeCyt1mq3m2s0vOAgdyrG7OU%2BiiU3wuCvkmDioTRmP9KkjAj%2Fb%2F6qnyKVvkZuF6ewqh5kDr52FfSm0tc3G9iFIlCyH7ci%2B7YAmVAjWy9zFqH%2FDnm%2BJPC97UjDo7d10L40TCDWlqah8AMyKaNlOJ2msNUvMoWeRFgpFWHiYcU4iXHGN5piXlrxxSrPAFdOJRhym3gUzQ57XxgYQ%2BaeYNt%2FYI3I4DfxEr43kcomheGHyg4YBSWP%2FUiPZSULXjolDd%2BeQkbJSlvy5SGv59nClmvh5i7vsnWya9ljggLkAOEhmkDM0pjLE6U2Po2HK5fQpwLTpWpMcjS1odSHGdz049aQvUFMquNdz4qC1lxtfDV3EtzelKJX9l6UsaFYx2ssHJ0V0DymmLHNjhdwf%2BVxhafeYE94r6aZAbaUpGeI7V%2BakB9tE1krPMRQVqhXfFJeJGKshL0kirMMAq1FWupJ92ChcDkKTDU0G%2BYfgzdZQAFkFqJlLM%2B95H6u492SajI7DgOW%2BkgSb9yufgsYYq8kTObiovi0sINcyI7HF1%2F%2F9fZLZvNPaWwgxLnUaudrOL0ZlbNkZUlrt%2BYFI82QK%2Bl8dqUazt23JBRuUVH%2Bn3Mog5LuUu13MJbutsEGOqUBP1Oux6R%2Bus6hYTKq8qRWVkdwqHBodrjP1Re5GRygx6fM6HL1QIK3Vcx%2BC3WcvpDclZUmybWBFT9nX6zoV23wMK2hawQE57LE1rexIB6%2FNFJLsgtRkKXzqj1Z6KUxKGnEkJZIT5LnDbnsyN5MOMwhfy%2Fdsxqe1FeJTwfGu%2BSCaoL6PZHMS8csE6a5XD5kZGiQHJSj4a3IU%2BclVDoTkHhkZ23Udoe%2B&X-Amz-Signature=160afb5da3a77ace463a9ed2652bf461c256a969434ffdbd0b046c5f24bcabf5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
