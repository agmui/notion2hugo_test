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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWW3VSCH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyz3rN0lF5LgAkDcK119bN5RGH83uvGnRt%2BmfMf0Ue%2FAIgMIyKuYXhHxGjLruC0%2BANowtCZpsKLO%2BnfiLY4AM0z0QqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOKnKzJblqdxVvKdyrcA4EY%2FnDeV3wkFcA69uKVxGYQvjw5qudECMeZb2zPWSyVDVRy8XourDfT%2FbZv3RMDG86AjlAL82KQMM5tJD8hYq86yzwlXtl8ZMePG0WA4%2FhFKSL%2FZCPcRhvAUJuCDIk9N0P8ykgvoq3cQnn%2FqHTV4J1OrRVJP%2BkOTvGqPJ%2B%2B3dZ8Aaei9hGYoNqJYB3R5WR08SfzjBekDbhRO5GH3L70w5s5N30BVUSX%2F1DpsWl6binksNJRdTRd%2FlwCZhqmRJNbMLh%2BYgku0lnYMAisHlLGrVy7tMS7xtu6x%2FcsOoYtpVML4wu%2B0MsWhiK1gKji2%2BE9NdiedWqut%2BDSBe3Uma%2BdVJAY1EO0oxkImwLdTKL7yJCkNofUbl7Yxk4Z9OkNasYOU%2BuUfau0Mb9%2BtbWVNyC%2FK0Kzd%2B9j%2Fox5ISC3bB9zGJ9l38osnXnk3ewuojYKEYt8Vl92xzPAZ4MTzL%2FZ9Gzy1puFhE8%2BnVEXLcobeJ0PxZpIr6ffzHk9jALwzBRqFWRe766IYk7d4jY0VOO0nNoP4LdvAVycxHaZUlydtIJv3hgxaHVAam6%2BJUPqgXT20xVaev8leRTcJFzVOei3QEx3O4rWKkmGtDCWhY1oeX%2BdkVaVLXyxk6pZLi5BLJTTMN29y8AGOqUBuPF6h5vExImsPaXQYqSkKkvpze90KLcspkCv%2Fuzz0RdE9767ItyjHfSLDuDQkfiAHYtAfOVh%2BmBUyjKCx%2BxehdAyTKOYZ6xX2wuAngttiq1viH19FLuDIV44tiJdgo2kFsofXE2Dyg1pyqsy92XNcZLeNnNu8qPJ49QpQLhdxLnAj24EP5AAl27lv5UoEEFAjCqNGQ1WprJcCk8dngFsRclN0sq9&X-Amz-Signature=16fcfd2a66e66856e628c5c770fbe96b8ac5fa194f682fb4b5c7e4c921fb8806&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWW3VSCH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyz3rN0lF5LgAkDcK119bN5RGH83uvGnRt%2BmfMf0Ue%2FAIgMIyKuYXhHxGjLruC0%2BANowtCZpsKLO%2BnfiLY4AM0z0QqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOKnKzJblqdxVvKdyrcA4EY%2FnDeV3wkFcA69uKVxGYQvjw5qudECMeZb2zPWSyVDVRy8XourDfT%2FbZv3RMDG86AjlAL82KQMM5tJD8hYq86yzwlXtl8ZMePG0WA4%2FhFKSL%2FZCPcRhvAUJuCDIk9N0P8ykgvoq3cQnn%2FqHTV4J1OrRVJP%2BkOTvGqPJ%2B%2B3dZ8Aaei9hGYoNqJYB3R5WR08SfzjBekDbhRO5GH3L70w5s5N30BVUSX%2F1DpsWl6binksNJRdTRd%2FlwCZhqmRJNbMLh%2BYgku0lnYMAisHlLGrVy7tMS7xtu6x%2FcsOoYtpVML4wu%2B0MsWhiK1gKji2%2BE9NdiedWqut%2BDSBe3Uma%2BdVJAY1EO0oxkImwLdTKL7yJCkNofUbl7Yxk4Z9OkNasYOU%2BuUfau0Mb9%2BtbWVNyC%2FK0Kzd%2B9j%2Fox5ISC3bB9zGJ9l38osnXnk3ewuojYKEYt8Vl92xzPAZ4MTzL%2FZ9Gzy1puFhE8%2BnVEXLcobeJ0PxZpIr6ffzHk9jALwzBRqFWRe766IYk7d4jY0VOO0nNoP4LdvAVycxHaZUlydtIJv3hgxaHVAam6%2BJUPqgXT20xVaev8leRTcJFzVOei3QEx3O4rWKkmGtDCWhY1oeX%2BdkVaVLXyxk6pZLi5BLJTTMN29y8AGOqUBuPF6h5vExImsPaXQYqSkKkvpze90KLcspkCv%2Fuzz0RdE9767ItyjHfSLDuDQkfiAHYtAfOVh%2BmBUyjKCx%2BxehdAyTKOYZ6xX2wuAngttiq1viH19FLuDIV44tiJdgo2kFsofXE2Dyg1pyqsy92XNcZLeNnNu8qPJ49QpQLhdxLnAj24EP5AAl27lv5UoEEFAjCqNGQ1WprJcCk8dngFsRclN0sq9&X-Amz-Signature=a534b8cc733c7bc5c4bb060fe4859e55b0750e00e8d847d82c0470d96d8c3541&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWW3VSCH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyz3rN0lF5LgAkDcK119bN5RGH83uvGnRt%2BmfMf0Ue%2FAIgMIyKuYXhHxGjLruC0%2BANowtCZpsKLO%2BnfiLY4AM0z0QqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOKnKzJblqdxVvKdyrcA4EY%2FnDeV3wkFcA69uKVxGYQvjw5qudECMeZb2zPWSyVDVRy8XourDfT%2FbZv3RMDG86AjlAL82KQMM5tJD8hYq86yzwlXtl8ZMePG0WA4%2FhFKSL%2FZCPcRhvAUJuCDIk9N0P8ykgvoq3cQnn%2FqHTV4J1OrRVJP%2BkOTvGqPJ%2B%2B3dZ8Aaei9hGYoNqJYB3R5WR08SfzjBekDbhRO5GH3L70w5s5N30BVUSX%2F1DpsWl6binksNJRdTRd%2FlwCZhqmRJNbMLh%2BYgku0lnYMAisHlLGrVy7tMS7xtu6x%2FcsOoYtpVML4wu%2B0MsWhiK1gKji2%2BE9NdiedWqut%2BDSBe3Uma%2BdVJAY1EO0oxkImwLdTKL7yJCkNofUbl7Yxk4Z9OkNasYOU%2BuUfau0Mb9%2BtbWVNyC%2FK0Kzd%2B9j%2Fox5ISC3bB9zGJ9l38osnXnk3ewuojYKEYt8Vl92xzPAZ4MTzL%2FZ9Gzy1puFhE8%2BnVEXLcobeJ0PxZpIr6ffzHk9jALwzBRqFWRe766IYk7d4jY0VOO0nNoP4LdvAVycxHaZUlydtIJv3hgxaHVAam6%2BJUPqgXT20xVaev8leRTcJFzVOei3QEx3O4rWKkmGtDCWhY1oeX%2BdkVaVLXyxk6pZLi5BLJTTMN29y8AGOqUBuPF6h5vExImsPaXQYqSkKkvpze90KLcspkCv%2Fuzz0RdE9767ItyjHfSLDuDQkfiAHYtAfOVh%2BmBUyjKCx%2BxehdAyTKOYZ6xX2wuAngttiq1viH19FLuDIV44tiJdgo2kFsofXE2Dyg1pyqsy92XNcZLeNnNu8qPJ49QpQLhdxLnAj24EP5AAl27lv5UoEEFAjCqNGQ1WprJcCk8dngFsRclN0sq9&X-Amz-Signature=27607ed56366bbbd46f1a9ba65b9f28094f7047d224a6fcc423ef28f3bbbf513&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ATTOBCZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCJQzyiZrDQaJoPPfKx3hS%2FKaSylv289uyztC6tglnoGgIhAOeL1r0DztgM2ZOHW6P7EBhYAm8OB58ORgT1Dv2iF7gnKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJMznQrm%2FRHxx00rsq3APKULhqizVTG3GE6svYfxBiW4Zgz8Vf9R2tSg%2B1q68ECmka8NmYirFYeHFqp1vhYZAYtWZvV7XsCS%2FwAeKUqrQmxf3Q3DPQ27zD9rqC8hhYaqe4qYmm9Ga822xviuiDG0%2Bi46OpfsZX0S%2BqaffLNFVVd3Mq%2BtLDozbwNbEJL70zVYTl%2BJNcc8V9gFSecPXUxt7acxwZB4kWGU9pG3Q%2BF2ErKJAQqg2VtRK3uqWVGgk65xtNlrEmX5Xp%2FDmA57ExVzm5g1BrSNYqVjUGAxgn4nOyphLSKqRBQg%2Fi7659bEYPQoCvf%2BdfuM4U6HzBruJ9vvnUQ3T64xqMWE2uOn6yTGLczSDxsHJYDpRC0fAYPtD6GT1TWpO9S61ytk6bT9Ld4nhOil%2B%2BUQYwXt301ZynXyN4r%2F97IjNjZmtnlyXL1lSgUM2J1DuKrwHWuGoBI2CXf2GVCG8AXdJT5wwPUf4R%2BvE2PeHM2ndgUR7KlpgvCSermmsYY5Q3r7pt3TH4k9GqGyJ6RL885yQsl1DJHlacMNlsLfGlkKjVBQxZpZ3aGeia9deNxEkG90Kqlt1l3ChLonGoia8nivZOvdOeShommaIiwAkK%2FETKZcNZXAlXXnOwWfM8cahwaeyK5%2Fdl9jCWvsvABjqkAfEqsx%2BcpncmE3EOaJi0eE0r5zQ%2BowD1CjVfWV58OTA2%2Fm0%2Ff1ydTOR1v%2FTG9sjTLVbDUWG4K%2F%2BQQ8TAYsYTwb0FQL4rFZov%2F5MrM6IQEvPT7qhhEwq%2FbfAWL6ofAmpzUAmOPMskiTHDr05Esy5lGG1QX811rxh2aXQCSwRevQ4CRaFKtAxaCpvecq0VOPNRMuW5rwf4DG8t0gl5bY6c%2BvSi1pBe&X-Amz-Signature=f7386407e946127d5cb32b31e95b86b370a1fafabf10ea260f6c196f7fa50aef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWW72FXT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC41LTNY2zDS%2FbigHi7ruFtnBdG0ioUKz1AdMMqAX6sjgIhANc2fs5ttpOEeBy7s94G5cpikj%2BqOJbTOVB%2Bref1ynKqKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYuJS0xaq%2BtwcKGhUq3AMscuUcbI0HVuST50OAl8e1S8ohBXSVR5t0fO9%2BaDHkXSQvdghK6hIS5DHieYsugUT9Htguu5POH3HNGKbIjax7IWFPLZxM4ptBLFb4bzPuuoN28za5cg8Iz2EPn1l3ghJefW9lBDaijbtxCi%2FDvPLonITtHWJUCM96DOo5Yf4pPqTepxmirg8CLbjuy42CMHClqJNSdBomDm8fkwVCOmhfr1xnFfRjdL3OpoFW%2F6sVpOGPNRwG5nMTJLu868fJYiJBBJlk4wI82MUi3pz29PX%2B0Azk7x7fXcU4YKMrb85nlnGKvT%2BXwH6PZgxSWYyB73IeT4xTjvFTC5veq6YTAswkdcrn1nwxCf8%2BLGDU9muaRVnRWD3zdnMoNzrVrmGc8YFjDXvaaCPODtovns1bHT01lxwuhh15lnof0M2kqCNVWYghQQUtjx23fcAneCGROWvFvgmBD13qtjdmTPerCdTzHzd%2F9%2FmHexXFTfc0%2BZq6LZ8tUrHo5%2FZR5cLW29Db7uzNFCG6Lmxc9vTCOjLiKlDT6MpoQL1Z4hYc4sNmGx11mmh%2BY1f5hNDI2nIRmD2hLCuu1x%2FlTX8PjAorEGfvs6cCDlmUT5Xqa6RHaaS0y4DpsKZoiTvVJviERDacRDDwvcvABjqkAWn5i2EXa2QIk50TtUZibAalMTuXODFL7ptMJa96iOF1hogfbccA8sXw371osbUTx2uSRFpovYV3gSsOSF0bJrlJemsdlV87vPx7CSJggJJDTgPqsSz0KRsonKiy8ShYemibej3IjlitspLQ0y5YvnsvtjUpTmiEp6Q91Sez2zTkBrl1PHfFYG%2Brjl70QuO0nsdV11VJg8grxfi9A9GvoOUyg4GT&X-Amz-Signature=ec8e6133650f0193bd262876e7a85f0ff4aa5370bb9c477add5ca8302a3cf7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWW3VSCH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyz3rN0lF5LgAkDcK119bN5RGH83uvGnRt%2BmfMf0Ue%2FAIgMIyKuYXhHxGjLruC0%2BANowtCZpsKLO%2BnfiLY4AM0z0QqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOKnKzJblqdxVvKdyrcA4EY%2FnDeV3wkFcA69uKVxGYQvjw5qudECMeZb2zPWSyVDVRy8XourDfT%2FbZv3RMDG86AjlAL82KQMM5tJD8hYq86yzwlXtl8ZMePG0WA4%2FhFKSL%2FZCPcRhvAUJuCDIk9N0P8ykgvoq3cQnn%2FqHTV4J1OrRVJP%2BkOTvGqPJ%2B%2B3dZ8Aaei9hGYoNqJYB3R5WR08SfzjBekDbhRO5GH3L70w5s5N30BVUSX%2F1DpsWl6binksNJRdTRd%2FlwCZhqmRJNbMLh%2BYgku0lnYMAisHlLGrVy7tMS7xtu6x%2FcsOoYtpVML4wu%2B0MsWhiK1gKji2%2BE9NdiedWqut%2BDSBe3Uma%2BdVJAY1EO0oxkImwLdTKL7yJCkNofUbl7Yxk4Z9OkNasYOU%2BuUfau0Mb9%2BtbWVNyC%2FK0Kzd%2B9j%2Fox5ISC3bB9zGJ9l38osnXnk3ewuojYKEYt8Vl92xzPAZ4MTzL%2FZ9Gzy1puFhE8%2BnVEXLcobeJ0PxZpIr6ffzHk9jALwzBRqFWRe766IYk7d4jY0VOO0nNoP4LdvAVycxHaZUlydtIJv3hgxaHVAam6%2BJUPqgXT20xVaev8leRTcJFzVOei3QEx3O4rWKkmGtDCWhY1oeX%2BdkVaVLXyxk6pZLi5BLJTTMN29y8AGOqUBuPF6h5vExImsPaXQYqSkKkvpze90KLcspkCv%2Fuzz0RdE9767ItyjHfSLDuDQkfiAHYtAfOVh%2BmBUyjKCx%2BxehdAyTKOYZ6xX2wuAngttiq1viH19FLuDIV44tiJdgo2kFsofXE2Dyg1pyqsy92XNcZLeNnNu8qPJ49QpQLhdxLnAj24EP5AAl27lv5UoEEFAjCqNGQ1WprJcCk8dngFsRclN0sq9&X-Amz-Signature=9457ccac7f2fced6345bb06e0eb6baf5ca59531e470e8bf67f004fffdb27cee2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
