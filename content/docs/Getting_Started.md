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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNOOWOR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCsAQk3RODpwDhREYPUHgwdiPidGi8yVJWOyz3J7vI0cQIhAIc%2FWmYM1aeP%2B9juSWBEh2tFZJjJ%2BAU8g2z25Ake9POHKv8DCBcQABoMNjM3NDIzMTgzODA1Igx%2Fedrcxc9F4z9tVB4q3AN%2BEbEJrwe9mNZLnXkyQIg8pNBEWQBHRZ9G7yMcdjp6EBvdzLm0f5VC15yNMX2s8YZl8sBPB4TByL2Hr8xRccnESqoKDiJord2EPPk%2FVoSZMxdw9Tr2BLtdVe%2BmP9lUaHf3BjyE%2BvAgggq1%2FuqPwGtna8v1A3JwwrmasvWMQJMmNOUViIUbtvQkve5e%2FChZUBqpo0J4nqb5THvG9JBEQQ2J9%2BsjNi7ydpWOsXeWACGJMbMv7Kn6JxPrSsii6MPldtKoAUFNer5%2F6lGZYkwl%2Bt3%2BHCijN2SuDrIBZw4cVgEO%2Fc2Obql5a%2BNH6zBSFLzxr1qrOsIWBj7wx6bzZO5ULJr9fxnQClt9LU09qDMLjeW7qa84taWOSJglYrIyeu4VoIbFpYFUbEZ%2FXsNXvDhClKRaXyjcROIgk0Z0xyLoWtbrKEAjpsylNdViLAtI%2Bytb3lH3Es0VVGfSxqJHMuNaw%2FNPFBJNMVtp%2F46qiogKx%2FoZjGefYSdjzKlsEK1oPmobR%2FXZH3MPmcvQ6%2FFnJjMGcVTnT2ZgiUQEztvHzNyWT0k7d8Ans%2F16mRznQJZ7yYFPRnSs44lxdZkYXZgD2j3vJB3wUHLh%2BRHDl6nJgeDumnAk4cNchkD%2FdWMyW54XeTDdupLBBjqkAbFaw4UbJCXz8lzp6670zmTbhhrL6Y5c3VgMVBLieTUR7fmoABbpiVUKq8loDf73ihfLbEKQfhrsCAs4zV0LEXN91CGpx%2BjDuXDnxRS8GTygW%2BNAfWzbdJ26YKLbqrzmDpQe4P7zRdkGdxjTi0fXEWtL2mQmI%2FlqYW4xPPzavSM0ZjrMhVwG8jZEvqVzsA7aCBWr5kKVjN5JzIfQy18iIzQPi2HB&X-Amz-Signature=03c5d3500234fcf9c6103d1059d202945c46bf542c841cf87102bc018543c90a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNOOWOR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCsAQk3RODpwDhREYPUHgwdiPidGi8yVJWOyz3J7vI0cQIhAIc%2FWmYM1aeP%2B9juSWBEh2tFZJjJ%2BAU8g2z25Ake9POHKv8DCBcQABoMNjM3NDIzMTgzODA1Igx%2Fedrcxc9F4z9tVB4q3AN%2BEbEJrwe9mNZLnXkyQIg8pNBEWQBHRZ9G7yMcdjp6EBvdzLm0f5VC15yNMX2s8YZl8sBPB4TByL2Hr8xRccnESqoKDiJord2EPPk%2FVoSZMxdw9Tr2BLtdVe%2BmP9lUaHf3BjyE%2BvAgggq1%2FuqPwGtna8v1A3JwwrmasvWMQJMmNOUViIUbtvQkve5e%2FChZUBqpo0J4nqb5THvG9JBEQQ2J9%2BsjNi7ydpWOsXeWACGJMbMv7Kn6JxPrSsii6MPldtKoAUFNer5%2F6lGZYkwl%2Bt3%2BHCijN2SuDrIBZw4cVgEO%2Fc2Obql5a%2BNH6zBSFLzxr1qrOsIWBj7wx6bzZO5ULJr9fxnQClt9LU09qDMLjeW7qa84taWOSJglYrIyeu4VoIbFpYFUbEZ%2FXsNXvDhClKRaXyjcROIgk0Z0xyLoWtbrKEAjpsylNdViLAtI%2Bytb3lH3Es0VVGfSxqJHMuNaw%2FNPFBJNMVtp%2F46qiogKx%2FoZjGefYSdjzKlsEK1oPmobR%2FXZH3MPmcvQ6%2FFnJjMGcVTnT2ZgiUQEztvHzNyWT0k7d8Ans%2F16mRznQJZ7yYFPRnSs44lxdZkYXZgD2j3vJB3wUHLh%2BRHDl6nJgeDumnAk4cNchkD%2FdWMyW54XeTDdupLBBjqkAbFaw4UbJCXz8lzp6670zmTbhhrL6Y5c3VgMVBLieTUR7fmoABbpiVUKq8loDf73ihfLbEKQfhrsCAs4zV0LEXN91CGpx%2BjDuXDnxRS8GTygW%2BNAfWzbdJ26YKLbqrzmDpQe4P7zRdkGdxjTi0fXEWtL2mQmI%2FlqYW4xPPzavSM0ZjrMhVwG8jZEvqVzsA7aCBWr5kKVjN5JzIfQy18iIzQPi2HB&X-Amz-Signature=faab4a739723ca747a6619315c73bef138b74071e70b3bfe4c2a4b732aeee00d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNOOWOR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCsAQk3RODpwDhREYPUHgwdiPidGi8yVJWOyz3J7vI0cQIhAIc%2FWmYM1aeP%2B9juSWBEh2tFZJjJ%2BAU8g2z25Ake9POHKv8DCBcQABoMNjM3NDIzMTgzODA1Igx%2Fedrcxc9F4z9tVB4q3AN%2BEbEJrwe9mNZLnXkyQIg8pNBEWQBHRZ9G7yMcdjp6EBvdzLm0f5VC15yNMX2s8YZl8sBPB4TByL2Hr8xRccnESqoKDiJord2EPPk%2FVoSZMxdw9Tr2BLtdVe%2BmP9lUaHf3BjyE%2BvAgggq1%2FuqPwGtna8v1A3JwwrmasvWMQJMmNOUViIUbtvQkve5e%2FChZUBqpo0J4nqb5THvG9JBEQQ2J9%2BsjNi7ydpWOsXeWACGJMbMv7Kn6JxPrSsii6MPldtKoAUFNer5%2F6lGZYkwl%2Bt3%2BHCijN2SuDrIBZw4cVgEO%2Fc2Obql5a%2BNH6zBSFLzxr1qrOsIWBj7wx6bzZO5ULJr9fxnQClt9LU09qDMLjeW7qa84taWOSJglYrIyeu4VoIbFpYFUbEZ%2FXsNXvDhClKRaXyjcROIgk0Z0xyLoWtbrKEAjpsylNdViLAtI%2Bytb3lH3Es0VVGfSxqJHMuNaw%2FNPFBJNMVtp%2F46qiogKx%2FoZjGefYSdjzKlsEK1oPmobR%2FXZH3MPmcvQ6%2FFnJjMGcVTnT2ZgiUQEztvHzNyWT0k7d8Ans%2F16mRznQJZ7yYFPRnSs44lxdZkYXZgD2j3vJB3wUHLh%2BRHDl6nJgeDumnAk4cNchkD%2FdWMyW54XeTDdupLBBjqkAbFaw4UbJCXz8lzp6670zmTbhhrL6Y5c3VgMVBLieTUR7fmoABbpiVUKq8loDf73ihfLbEKQfhrsCAs4zV0LEXN91CGpx%2BjDuXDnxRS8GTygW%2BNAfWzbdJ26YKLbqrzmDpQe4P7zRdkGdxjTi0fXEWtL2mQmI%2FlqYW4xPPzavSM0ZjrMhVwG8jZEvqVzsA7aCBWr5kKVjN5JzIfQy18iIzQPi2HB&X-Amz-Signature=89a378ec527225458daa3c1a6e1a7d2856f4774d9375a20bce606ae0f91e615a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZFUOGR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCxB%2FzlnBauADN2Q4XmvhrApYG5suQJi9xk6OePZZ1tcQIhAM43f8gSc1sqg3A0lq%2FO5CRA4pq%2FJA7X36yc8I6c59%2B%2BKv8DCBcQABoMNjM3NDIzMTgzODA1IgxlgV3mtthynxGBz18q3AO%2Bs913iFXEK0bzPFa4swcfYHMNiHXkzOLuBQUXcwZ3PjEXLM5BTnHOIL1a4LLxJ%2BQD%2FPqPBKIuevRqa6wuiPy1L6Xhb68CTcGzU4cIjrzfvFdcJcNMnyUjwJdjmvyk0KMYGjIHGnnrmNOygz3l69PmB5661u4DgFf1mMC5daCZI1Xc3cIlpBl06HT7kO358R6l2wxuqolSPyn3NBnNoSKkf44R4KFXdEzoT7tLHO35FAukXZ2wX54aniNIbXjFPMz4c0Av%2Bt1d%2BRtk72nf9JlYqsjQJ%2BJCja43VG9097DSeF0UGZvt4bB1Lo1bu4RDZO7c1B9Q8LWx1ooyJBh1NxyUH1Mi%2FlmFlwNQIaLiG%2F%2B6lQa%2FCMkb%2FNWnlS7%2BUVZ06ZDDPjgW96LjOgspJi%2Bj5Ql2JwqlgESZ5m4QLXt1grrm4GAGfSMywOCl7QEr4ASdLdWD8ZnQktk5dh9eA%2Big6mfloHt0890Cn7dAovTszq%2BIA6%2FPya25uaI9q1xS9QUVeKJ%2B0byUpw0OcH8QwXNPz6fzJ5F8lxPxodZDdAxWi9TsBQR5aQOkgJgtRD7%2BG0eZy%2FRxhtiP4eApX4tm5m%2FfkhHqiJ6YCs9ZUPmt2%2Bwu04GTOsnH8fwOyGDiUCXU3jD9upLBBjqkAVnSBm84zX93M09qfC5vN1y6OKW3xTbFog00uvuPwY%2FhHgoitaja6gOAkyfZbYKvgBQnoZ0IYG0NnPXFYSox4GHZPgIeszv0Q8h457EOOtTLrdN66AwBx8juZDLV5S7u4T8fD8rreq%2FLObrm%2Bz4CBjCpEYnAESAVRdEv27WxH2tGEGSGIlt9ncsjKj%2FuEN9RB1Rvf%2FWSD7CjvNev2ny36s%2BF42W5&X-Amz-Signature=099b35df4533c8e94fb3e93043a9578b15eb58f1d98a604903c649d297245db6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BKKCRTG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCUnKt8pIPj43wV2VgEIhrY%2BEX7DXdUx1iyw2C5tc%2FwDAIgTQZ1Zq4gk6fg%2BmvpGyRdmI6h7zAO9APZ5lviirndY70q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOhSZYrtiZPO9yVblyrcA6Wqv8MPqciwFWO5tsfArfMtIF8%2FsizLiw6oClk5fs7zQixAbgac7MN%2BvHTFmKjwuo9JfcbgDelgP%2FmhinnEe4xROmpuWPgPPJ%2BXfVR%2BzGgEbRHsjcTdBwQn2gM1IWP3Wv2d4cmnQBBth3STwP%2FSkaPiVWFiNOuMLRj0hMw4gwc1tymw1IC28BiZj8mybQbQhCHCmLToI%2B9HQO4wzlGzztA9Unck8fsM3L9PdkP1CkHARfQc2%2FCE0bGHZXKHZF0%2B6dWRwRJSAthmtYhqC49q1ho2dJYVe%2BPj2H6Zpv%2BGWVvKu9mzATfpYCtQvyuR0wDdqpN%2BXzWzpW6VhqzYmh92OjniwdIERmqlGhDUgarjBM%2B%2Bh1OXgCQL8xz9fOVLVOR9UoLw2E17Gn34qCyZ4urVqi40h9OxrM7tCHRssVJN28nN43WMRfOC5VfWEG3nUqB9mQdhCiCu0c6ImgKAWUehfnmrRrx4VjntiMxY1kZodY%2BCzgR0uACVzC9Q0PhP0FBk9rfWflRSlOf6EYgT0MOx3UTpWCp37cMPQbN%2BJluZHmMvMWGF03fsHrfyw26RLmwApV6L59%2BGvCwFfiSD%2B20LFL7f3lPh4WH%2B7ick%2BaaIWXJKl9GPVflP2%2FCPz%2B4mMKq7ksEGOqUB5otP61ac4lD2Qjsn%2BGh4c4x%2F%2BlYK6lsnFiuBBDPRWr5OiwMP9POdxqlP7RUjkM7v03T2YGLGb79rnFNWx5bRiSKrHg6H6CCFvtRReCejUCIbXe92L7TOBJi%2BJc0UIYTeBylsLLIAyKbIxSK%2BPEJnotR0voYFozaME6kL6wAWVslGZdq1UFXJ42esGZBOOXZmU%2FZWaFtELHlYsypqFa89LNcIFRZ3&X-Amz-Signature=9323721125b98b25c63cb5efb7792f466657fea6691b4d2e604724fa02742f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNOOWOR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCsAQk3RODpwDhREYPUHgwdiPidGi8yVJWOyz3J7vI0cQIhAIc%2FWmYM1aeP%2B9juSWBEh2tFZJjJ%2BAU8g2z25Ake9POHKv8DCBcQABoMNjM3NDIzMTgzODA1Igx%2Fedrcxc9F4z9tVB4q3AN%2BEbEJrwe9mNZLnXkyQIg8pNBEWQBHRZ9G7yMcdjp6EBvdzLm0f5VC15yNMX2s8YZl8sBPB4TByL2Hr8xRccnESqoKDiJord2EPPk%2FVoSZMxdw9Tr2BLtdVe%2BmP9lUaHf3BjyE%2BvAgggq1%2FuqPwGtna8v1A3JwwrmasvWMQJMmNOUViIUbtvQkve5e%2FChZUBqpo0J4nqb5THvG9JBEQQ2J9%2BsjNi7ydpWOsXeWACGJMbMv7Kn6JxPrSsii6MPldtKoAUFNer5%2F6lGZYkwl%2Bt3%2BHCijN2SuDrIBZw4cVgEO%2Fc2Obql5a%2BNH6zBSFLzxr1qrOsIWBj7wx6bzZO5ULJr9fxnQClt9LU09qDMLjeW7qa84taWOSJglYrIyeu4VoIbFpYFUbEZ%2FXsNXvDhClKRaXyjcROIgk0Z0xyLoWtbrKEAjpsylNdViLAtI%2Bytb3lH3Es0VVGfSxqJHMuNaw%2FNPFBJNMVtp%2F46qiogKx%2FoZjGefYSdjzKlsEK1oPmobR%2FXZH3MPmcvQ6%2FFnJjMGcVTnT2ZgiUQEztvHzNyWT0k7d8Ans%2F16mRznQJZ7yYFPRnSs44lxdZkYXZgD2j3vJB3wUHLh%2BRHDl6nJgeDumnAk4cNchkD%2FdWMyW54XeTDdupLBBjqkAbFaw4UbJCXz8lzp6670zmTbhhrL6Y5c3VgMVBLieTUR7fmoABbpiVUKq8loDf73ihfLbEKQfhrsCAs4zV0LEXN91CGpx%2BjDuXDnxRS8GTygW%2BNAfWzbdJ26YKLbqrzmDpQe4P7zRdkGdxjTi0fXEWtL2mQmI%2FlqYW4xPPzavSM0ZjrMhVwG8jZEvqVzsA7aCBWr5kKVjN5JzIfQy18iIzQPi2HB&X-Amz-Signature=37fe492361c0c19269e70daeefb7983baf54b0bf46c9f51c3e6391dd00f9c828&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
