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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTXUQNW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD8TFFK%2B6k9zzE917L16unxJgYDcd3%2FjiqDFRmO6YUh7AIgaM0IN8ySshTOFLBTS02KH5BGNRwvKi%2BG3nk0HB%2FGNJkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMkubl%2FHUSU0TAyafSrcA0EWrtXuyMVpMa4Vy9%2BgLtRB3abLGFO0mbPNzg9WKwSBO%2BVvTDSqZz7OXiEPrL8JRizGWtuLeo2rb5RxdnOOrXi6KqcD7WryS3oqDR8plOHxSpyIt%2FdrmXJhBMjux6UMPj605yx%2FB6zNTxsmR2fvEQNsDqOAr%2BKT99sZ536yr%2B63wpvRtWicN5mIb1srwqI9ycOWusnrtUOWegnXEq%2F7JarZjrymzxO%2BRZJLWrQ9nNB7DlJ1gXbzulU4UFqF1q50f810kfpxHk55cYjSl2zTZ1EaAB04nkLRg%2B%2Bz5VkM2Wr7h30EX64TxkbH0JJgfOXesSCxPXbRt0maiVh91iyU7Q2Zj7l2McE7eCfCUjBhJiw2Kqc%2FGGFzkbT0lIP%2BDTmNqpA6Dbe84fUmDpW5C%2B0nep9ExzjGXBy%2Fp1LciPGc5Vq%2BEvqGdD4PkgoGojGsCPZ9Y%2Brlp4U1e2v3n5ggZFs94ShArQuxI9KCfJLhibh7mmkfuregCQ6JV%2FVbh34vx8K6asjh1tKRu5W2sefoIQosMt%2FO1Pvv%2BOxhtsVOkqTYN4sygLGCK7SkTfDpnPNaifFOFvqqoWNgixEVIazo0S8cVKtsYvfAFjPKjhf7LkmDgsir%2Bi0HoZ1UCBt0GNfPMOuI%2F8EGOqUBRXsCrIOqSFC%2BORjljji9LQcINdxkO0Y2xn%2B0uMddrzi2HOz0ft4FECBrrQEdJKTwpI8T5EHSP60D3jLqWdHIoCByAuFpfNwNdGMV5Y4v0u3z070MKsj1Oui1Zq1fEjINX3RYf2A5F1WC07i5TXLuqwXi%2BPFP7pU2YbDGxk6JeJSaK5XjwKN5rC8kVkAV3%2F9IPhhUxsfvEM4qczIkITic2tq8MF6I&X-Amz-Signature=491fa676146fce0437e56ca72d66ad47d1b1e5e02807a9ff72bc3d214d055b57&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTXUQNW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD8TFFK%2B6k9zzE917L16unxJgYDcd3%2FjiqDFRmO6YUh7AIgaM0IN8ySshTOFLBTS02KH5BGNRwvKi%2BG3nk0HB%2FGNJkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMkubl%2FHUSU0TAyafSrcA0EWrtXuyMVpMa4Vy9%2BgLtRB3abLGFO0mbPNzg9WKwSBO%2BVvTDSqZz7OXiEPrL8JRizGWtuLeo2rb5RxdnOOrXi6KqcD7WryS3oqDR8plOHxSpyIt%2FdrmXJhBMjux6UMPj605yx%2FB6zNTxsmR2fvEQNsDqOAr%2BKT99sZ536yr%2B63wpvRtWicN5mIb1srwqI9ycOWusnrtUOWegnXEq%2F7JarZjrymzxO%2BRZJLWrQ9nNB7DlJ1gXbzulU4UFqF1q50f810kfpxHk55cYjSl2zTZ1EaAB04nkLRg%2B%2Bz5VkM2Wr7h30EX64TxkbH0JJgfOXesSCxPXbRt0maiVh91iyU7Q2Zj7l2McE7eCfCUjBhJiw2Kqc%2FGGFzkbT0lIP%2BDTmNqpA6Dbe84fUmDpW5C%2B0nep9ExzjGXBy%2Fp1LciPGc5Vq%2BEvqGdD4PkgoGojGsCPZ9Y%2Brlp4U1e2v3n5ggZFs94ShArQuxI9KCfJLhibh7mmkfuregCQ6JV%2FVbh34vx8K6asjh1tKRu5W2sefoIQosMt%2FO1Pvv%2BOxhtsVOkqTYN4sygLGCK7SkTfDpnPNaifFOFvqqoWNgixEVIazo0S8cVKtsYvfAFjPKjhf7LkmDgsir%2Bi0HoZ1UCBt0GNfPMOuI%2F8EGOqUBRXsCrIOqSFC%2BORjljji9LQcINdxkO0Y2xn%2B0uMddrzi2HOz0ft4FECBrrQEdJKTwpI8T5EHSP60D3jLqWdHIoCByAuFpfNwNdGMV5Y4v0u3z070MKsj1Oui1Zq1fEjINX3RYf2A5F1WC07i5TXLuqwXi%2BPFP7pU2YbDGxk6JeJSaK5XjwKN5rC8kVkAV3%2F9IPhhUxsfvEM4qczIkITic2tq8MF6I&X-Amz-Signature=139bd41f01a0d1aba5217810ab1e5c7aba7dcb556c4279a68d76b56902d42b29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTXUQNW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD8TFFK%2B6k9zzE917L16unxJgYDcd3%2FjiqDFRmO6YUh7AIgaM0IN8ySshTOFLBTS02KH5BGNRwvKi%2BG3nk0HB%2FGNJkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMkubl%2FHUSU0TAyafSrcA0EWrtXuyMVpMa4Vy9%2BgLtRB3abLGFO0mbPNzg9WKwSBO%2BVvTDSqZz7OXiEPrL8JRizGWtuLeo2rb5RxdnOOrXi6KqcD7WryS3oqDR8plOHxSpyIt%2FdrmXJhBMjux6UMPj605yx%2FB6zNTxsmR2fvEQNsDqOAr%2BKT99sZ536yr%2B63wpvRtWicN5mIb1srwqI9ycOWusnrtUOWegnXEq%2F7JarZjrymzxO%2BRZJLWrQ9nNB7DlJ1gXbzulU4UFqF1q50f810kfpxHk55cYjSl2zTZ1EaAB04nkLRg%2B%2Bz5VkM2Wr7h30EX64TxkbH0JJgfOXesSCxPXbRt0maiVh91iyU7Q2Zj7l2McE7eCfCUjBhJiw2Kqc%2FGGFzkbT0lIP%2BDTmNqpA6Dbe84fUmDpW5C%2B0nep9ExzjGXBy%2Fp1LciPGc5Vq%2BEvqGdD4PkgoGojGsCPZ9Y%2Brlp4U1e2v3n5ggZFs94ShArQuxI9KCfJLhibh7mmkfuregCQ6JV%2FVbh34vx8K6asjh1tKRu5W2sefoIQosMt%2FO1Pvv%2BOxhtsVOkqTYN4sygLGCK7SkTfDpnPNaifFOFvqqoWNgixEVIazo0S8cVKtsYvfAFjPKjhf7LkmDgsir%2Bi0HoZ1UCBt0GNfPMOuI%2F8EGOqUBRXsCrIOqSFC%2BORjljji9LQcINdxkO0Y2xn%2B0uMddrzi2HOz0ft4FECBrrQEdJKTwpI8T5EHSP60D3jLqWdHIoCByAuFpfNwNdGMV5Y4v0u3z070MKsj1Oui1Zq1fEjINX3RYf2A5F1WC07i5TXLuqwXi%2BPFP7pU2YbDGxk6JeJSaK5XjwKN5rC8kVkAV3%2F9IPhhUxsfvEM4qczIkITic2tq8MF6I&X-Amz-Signature=9ad2ae6d6301931450f805f7e2beec2da137aa2e356b5a1742bd861fff7cb600&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V7TA6XN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFlGKumD2kpzuKvXQ2D6a0VAZfF2jKaQAPB3Abvx1CiSAiEA9sS0HzfxC0jiBX4sHEsetfhenGHVqTOwTo8KdnRkC2Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGoom8qAaJ13lZshtyrcA6UeVJvYIEPdgmmke6KUVXBQ9234nOIGCzynIaPM4MFTPK%2BWSacgh3UYulfssmd%2B4BCzCb1IOgUT5i1P8Tu84RNxrFAFWIUuum8PagDS%2Bl%2FAEYUmIloCtr%2FgWl5ijkKLzbh3uJcHolLQsv6Cn4S3Le8Ogqg2qRa4PInk6OJ00Lkjf27efBf5PGFU7M%2FVQhG6HEc%2FEnvCQFQRnQSmmy9%2BJN1yvkiwXMPpwzT7Y7Zaw2w1F%2FKdWJsZKfJCMc468sSETReC4l%2FoWMsdxFIuHYrcc4yiGYcZrul94kS3Qiu9h301tz%2BwZznq3jmGwpFbH6HwzZxgvnqBKmT%2FJamuB%2BW1vqocO%2Fl7t6uICh%2FuCdv%2Fd64vr2ztkuolWqleCZ4ZMhVx8klysBFUcjZN4cZ%2FjO0P7077iicHdfpyro%2F%2Boynhseur6NfYTPlbtK65wuww3aKeFvY2DEajiuqW4gv%2BCypH67j3eyejF1%2BcMoXQ38vJ64A1KC6I%2F2vfOx9A42sOuwZ3SvmbWXMZ3WB7%2BTvdkng6%2BEYOQLdeC7lMT7JXLIuHI2bnxm3X2YxQhs9sgryimX2Vut%2BQgjCMNzrchCrfLf6Si2tEUMgSBAL0Sgf1Y0X%2BvanAOn9Q1gRbft%2FvWENuMPSi%2F8EGOqUB3NFLfJvxMCZnyHRnC%2BMcTY49j%2F%2BjLEBHQ1eubqt4Mj7kK9%2BoN1nacqZGPbVmPwDTUBsxM2aB5BRmjmcc93uTCm%2BQ44Jsnk2l4HR%2Fdo4K5J9915vcNq%2B3DjDAH8UOkKAzhgkQF6mYkEmY0n7%2FFUGQmKxx3q8gii8P9r9dYFpc2Phd3H02FSjtBqUcHQvneX1%2FgfjK%2F2NKL2r3goFknnAzsUd5uLsS&X-Amz-Signature=5857acba3dca8dcc93dd593d9e996ed6cc2d34686544471cba40a1f15be72395&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5RJMHA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIF0JGbDmshh%2F%2FgCtjpVZ7p3yxRXX9brOLC3DlKugFQ21AiAyXUWxWS3yGa73xlQ3Lhud1ntsY1UGnqULWQn2hDSVHCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMdPoc2tJtB2q8w5IyKtwDhDcl%2BZwu10C%2Fr0li1dUsGWau7MwytsHdQmcNnfPeJfVL47ouZhxgDh4aL%2BcwA32PZq2F20cAOEdGLWyo8l9g%2BjgeKArldhgmdUiyLloaUcn3W0pgdMGFnf16OaSEclNPvrGQHPkRdOvNYZnNojIdlAFkf3tr8zDVKD4uLwONmyx3%2FiCbC8%2Fy0AZ6rfhmJ3X03FZSJqbNDZ30yIJULekgWFVB4KlWv00orbiDneoaNZKLxKp4Q%2B01Z0hW3AEQ%2BJSr%2F8MJPbVjPPTrAxB%2BMpC1rvuHMxXV9cO7Cpq1gH4GlSAhF3eJb2V2lsDitlwPEA5ecVbhn7n4Lb0nS5Tg6Bn0q4CiJmWUB1lEPxKOHYOZ6KiUvrO5SAL0U%2FK7l4Tgixv04XFIop2D7WWufvaBFjRIAmO5e1ZwdXPn7AxoTYnuUjiNheHPtxx6XK4AcDshNpPjTBEUKc7trNzYVGJkeb92bka2%2BDT1f3iFdGjku%2BWZooGHyyXnKdG1QZzT84nQLB3XL%2FRHdF995URc8jcf6InbmNg8i%2BA7n6%2Fzc%2FazmWuiTx5kA3A4%2Fs3yKjEObmsE4lYpyUZUbhhHSSwjEjMiC%2BrGE5OMRpkQW8%2FZCo%2F1Mq310SfPVqJTcQ6Yk%2B%2BSSG0wn7b%2FwQY6pgHgnrJ4RqJkfjyaVIquq7FBa84CC0pmNu5ErGut0cc%2B4darz7avi1Z5%2BFXAUdZllKwpatC1DwQzGt5MWpz4rjjGO2Cjf80Nq1hSkl7aK5xWaOJKznXVpFAKIlLGdm1gb5%2BZaD9e0ckU75iJ9ClHBkHmjlNoZEY6nMXgMzJ2jy2MCZPx%2BPInLgpl789D%2FGMvpzCVaRHJmsnjo%2FvgSt52U6GHG3uw8pJC&X-Amz-Signature=9936adfd7f2da70d0cbf29d4c5d496b3b3936ab62ce4b539eb6eec10ece83df7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTXUQNW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD8TFFK%2B6k9zzE917L16unxJgYDcd3%2FjiqDFRmO6YUh7AIgaM0IN8ySshTOFLBTS02KH5BGNRwvKi%2BG3nk0HB%2FGNJkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMkubl%2FHUSU0TAyafSrcA0EWrtXuyMVpMa4Vy9%2BgLtRB3abLGFO0mbPNzg9WKwSBO%2BVvTDSqZz7OXiEPrL8JRizGWtuLeo2rb5RxdnOOrXi6KqcD7WryS3oqDR8plOHxSpyIt%2FdrmXJhBMjux6UMPj605yx%2FB6zNTxsmR2fvEQNsDqOAr%2BKT99sZ536yr%2B63wpvRtWicN5mIb1srwqI9ycOWusnrtUOWegnXEq%2F7JarZjrymzxO%2BRZJLWrQ9nNB7DlJ1gXbzulU4UFqF1q50f810kfpxHk55cYjSl2zTZ1EaAB04nkLRg%2B%2Bz5VkM2Wr7h30EX64TxkbH0JJgfOXesSCxPXbRt0maiVh91iyU7Q2Zj7l2McE7eCfCUjBhJiw2Kqc%2FGGFzkbT0lIP%2BDTmNqpA6Dbe84fUmDpW5C%2B0nep9ExzjGXBy%2Fp1LciPGc5Vq%2BEvqGdD4PkgoGojGsCPZ9Y%2Brlp4U1e2v3n5ggZFs94ShArQuxI9KCfJLhibh7mmkfuregCQ6JV%2FVbh34vx8K6asjh1tKRu5W2sefoIQosMt%2FO1Pvv%2BOxhtsVOkqTYN4sygLGCK7SkTfDpnPNaifFOFvqqoWNgixEVIazo0S8cVKtsYvfAFjPKjhf7LkmDgsir%2Bi0HoZ1UCBt0GNfPMOuI%2F8EGOqUBRXsCrIOqSFC%2BORjljji9LQcINdxkO0Y2xn%2B0uMddrzi2HOz0ft4FECBrrQEdJKTwpI8T5EHSP60D3jLqWdHIoCByAuFpfNwNdGMV5Y4v0u3z070MKsj1Oui1Zq1fEjINX3RYf2A5F1WC07i5TXLuqwXi%2BPFP7pU2YbDGxk6JeJSaK5XjwKN5rC8kVkAV3%2F9IPhhUxsfvEM4qczIkITic2tq8MF6I&X-Amz-Signature=c55c3b33a4621bc115e5aafb1070c2772486c1296b0a45f25d68bb93fb5c1114&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
