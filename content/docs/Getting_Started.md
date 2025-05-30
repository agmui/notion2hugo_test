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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7GOMID%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHQal%2Fc6nB9SdMRLDFuR4RSf43aqM4znNLZ7YefmUGWwIhALyLzWZ7V0iKQyeYIAT7B0xOb%2B8BREzpnhddKZ54MneyKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNDfvDh4n%2BtJyVZWMq3AO8rq926I8QNm%2Fea3mqxieX7G2zHmYLloG448BJpTPuz1wvOnpehoPWUhC0kLWFsBJYZ0YChAdC3U8%2BOs0aD8FWKqHs%2BRKk3rkiZJ1td11bZ2tg1Rqody%2FuzHKDRkJ4cQ1MNJvIMrf3BjnlLEpsCIO45PuYTWbR5Rrx%2BAyYvj63QkRH5wZo8dgIcw%2FuP6t1QSGK3pEXqAyyP%2FfA2VvKGsjRbLy2tOHp1FieiuEoU9TpGoWirljLjnpEEOTK65XGU0exOx6UiZB8RKKk9zCsBBPnAkCIPFWRoXVD258AP5CHyyJH%2FI1uTYgmSPq9dR%2Bg6PK39pODDgP9p%2FD6opjpq4Lc6nNbmm9a3z9sTNBgKedkcNBrE%2BpejQ9iHZkyZzNfPt1Q3B9gUKWOw9qszp0qHuoX7rnsXNRc7uOlzQwwZItFLsU%2BB5449RG5u%2BxKeF1w9HMAE5lkyklCo2nx%2Bgp4JtpVJ4BmByj9Y3ttiSRxKKW4GWQFeY%2BNmqPR9uPLBwyQrOEdZtVSBilBT4ZU9R%2FSUtGQBu2SHl7aY8ubYZDMkGCc0qxBf3uNqC8JUTa98v61u2bxnUsaO%2FwKzX9FfIDxdW%2B9748gE5oiAc4CCzSVZzUVB%2Bm9DqsLnWsJcoEEBzDJ%2FefBBjqkAdKa31Jlmx88uu1of%2Bh%2BWlP77JQbXJNoN9swHWw0U9jrRo4TL%2BDmaTi2vtWL7od2zkVKF9UXwrsQorjioVKevp11DO1XfPCdIwHFz72bdYoZd9ItGnl0sW%2F57uEfBLhE965EXV0T2rigJAm2dtti1uSyypOHwwxEDcrN4dSifFay3phFR9g%2F9U24W9VfZzxkd2dtrVtMjQO8yyaaq5XnzWfVJVeM&X-Amz-Signature=e33f2cc39e9aecfe632f0cc50bd09b5b638516309852843b3cccd3f8cefcc63c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7GOMID%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHQal%2Fc6nB9SdMRLDFuR4RSf43aqM4znNLZ7YefmUGWwIhALyLzWZ7V0iKQyeYIAT7B0xOb%2B8BREzpnhddKZ54MneyKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNDfvDh4n%2BtJyVZWMq3AO8rq926I8QNm%2Fea3mqxieX7G2zHmYLloG448BJpTPuz1wvOnpehoPWUhC0kLWFsBJYZ0YChAdC3U8%2BOs0aD8FWKqHs%2BRKk3rkiZJ1td11bZ2tg1Rqody%2FuzHKDRkJ4cQ1MNJvIMrf3BjnlLEpsCIO45PuYTWbR5Rrx%2BAyYvj63QkRH5wZo8dgIcw%2FuP6t1QSGK3pEXqAyyP%2FfA2VvKGsjRbLy2tOHp1FieiuEoU9TpGoWirljLjnpEEOTK65XGU0exOx6UiZB8RKKk9zCsBBPnAkCIPFWRoXVD258AP5CHyyJH%2FI1uTYgmSPq9dR%2Bg6PK39pODDgP9p%2FD6opjpq4Lc6nNbmm9a3z9sTNBgKedkcNBrE%2BpejQ9iHZkyZzNfPt1Q3B9gUKWOw9qszp0qHuoX7rnsXNRc7uOlzQwwZItFLsU%2BB5449RG5u%2BxKeF1w9HMAE5lkyklCo2nx%2Bgp4JtpVJ4BmByj9Y3ttiSRxKKW4GWQFeY%2BNmqPR9uPLBwyQrOEdZtVSBilBT4ZU9R%2FSUtGQBu2SHl7aY8ubYZDMkGCc0qxBf3uNqC8JUTa98v61u2bxnUsaO%2FwKzX9FfIDxdW%2B9748gE5oiAc4CCzSVZzUVB%2Bm9DqsLnWsJcoEEBzDJ%2FefBBjqkAdKa31Jlmx88uu1of%2Bh%2BWlP77JQbXJNoN9swHWw0U9jrRo4TL%2BDmaTi2vtWL7od2zkVKF9UXwrsQorjioVKevp11DO1XfPCdIwHFz72bdYoZd9ItGnl0sW%2F57uEfBLhE965EXV0T2rigJAm2dtti1uSyypOHwwxEDcrN4dSifFay3phFR9g%2F9U24W9VfZzxkd2dtrVtMjQO8yyaaq5XnzWfVJVeM&X-Amz-Signature=a678c4164c091c7514f36592f5ca0fcfb87a66679f40ec5ba79154cb52e847be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7GOMID%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHQal%2Fc6nB9SdMRLDFuR4RSf43aqM4znNLZ7YefmUGWwIhALyLzWZ7V0iKQyeYIAT7B0xOb%2B8BREzpnhddKZ54MneyKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNDfvDh4n%2BtJyVZWMq3AO8rq926I8QNm%2Fea3mqxieX7G2zHmYLloG448BJpTPuz1wvOnpehoPWUhC0kLWFsBJYZ0YChAdC3U8%2BOs0aD8FWKqHs%2BRKk3rkiZJ1td11bZ2tg1Rqody%2FuzHKDRkJ4cQ1MNJvIMrf3BjnlLEpsCIO45PuYTWbR5Rrx%2BAyYvj63QkRH5wZo8dgIcw%2FuP6t1QSGK3pEXqAyyP%2FfA2VvKGsjRbLy2tOHp1FieiuEoU9TpGoWirljLjnpEEOTK65XGU0exOx6UiZB8RKKk9zCsBBPnAkCIPFWRoXVD258AP5CHyyJH%2FI1uTYgmSPq9dR%2Bg6PK39pODDgP9p%2FD6opjpq4Lc6nNbmm9a3z9sTNBgKedkcNBrE%2BpejQ9iHZkyZzNfPt1Q3B9gUKWOw9qszp0qHuoX7rnsXNRc7uOlzQwwZItFLsU%2BB5449RG5u%2BxKeF1w9HMAE5lkyklCo2nx%2Bgp4JtpVJ4BmByj9Y3ttiSRxKKW4GWQFeY%2BNmqPR9uPLBwyQrOEdZtVSBilBT4ZU9R%2FSUtGQBu2SHl7aY8ubYZDMkGCc0qxBf3uNqC8JUTa98v61u2bxnUsaO%2FwKzX9FfIDxdW%2B9748gE5oiAc4CCzSVZzUVB%2Bm9DqsLnWsJcoEEBzDJ%2FefBBjqkAdKa31Jlmx88uu1of%2Bh%2BWlP77JQbXJNoN9swHWw0U9jrRo4TL%2BDmaTi2vtWL7od2zkVKF9UXwrsQorjioVKevp11DO1XfPCdIwHFz72bdYoZd9ItGnl0sW%2F57uEfBLhE965EXV0T2rigJAm2dtti1uSyypOHwwxEDcrN4dSifFay3phFR9g%2F9U24W9VfZzxkd2dtrVtMjQO8yyaaq5XnzWfVJVeM&X-Amz-Signature=10e855a879a711c1f7e4f71a32a1e9c181cfee687f00e44619527ec5d19d27e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6TMLGPO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8CGMFbg9UfC8CzDbZ3KjBPA53DXlscUSVmr1M%2BqKgFAiEA7%2Bj3Lbya9nzHLeeZYgqW9wzwIaOs4h4ieVjO8D%2B7Wk8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzYZa8sHHYaJHv1iCrcAzJafyfNaaPRCAeMrcxEHLtVExaLogeUu%2Bn1O3VQF95HIq3BXeobCEQUNjan4rTfkiBrt1J1u9HPcZ4lo8fMrFk0z5OvGAnIpglghDu2logL%2FWKNiDbYBtgkhzihRuR62icrLO2BEJO49WhD1LMbqaepB2MEtn8v46xpSU8yWR74tyFukKpIgzYOjpfu9RD1NVaMNZOlsF1QnnjzsuZJjBGq8dNBgLtXZo11xDcMiqrrZTosGRZ6%2Fab2fDkqjYaJyGRBLDz69NI%2F3oV6dGYbPOpCwTpn6s8XZcD1Ezk%2BiOcwsEZ5Tz4DpGz3psf4HA4USmOJRIGHLO%2FWPGsUb0TDr0CNm3FHAry1O%2ByyH%2Bbeg9nV%2BCYxxocdweDjE9XICPoXVO0Dib8T5QIVWy8OZIisiq8V3vOZ%2BhT1a4AP3kF%2B66jHk23Tp62rUfTGgrFqercxxKuH0XTpxnWA%2FxqJsscAeEmdCy3ngsHJ4CpoaF5FjmDG670GIWRVfA%2FxbsJZ%2BZhse0%2Blde3g7lUiFWLtctbCzdbgdqDh1wJybyfYr5vvQAwJZGesAEy2qQMEsFUXeNUrPLRbov%2FWlKokP2SYqcOZHooYWrsESLyuZzDsax2KHBWuaQyIUcfsjsZqx%2FU9MJX958EGOqUBraQsz91VKJkWQp%2FsnDpTa3wIGaZiNWagjs15jZamnDXc5GMG5xXG2GA9EaPjL8n2G7GJbr%2BAN4tDK4FvOrFnB83An56Nec43hwSWjpL%2FVXmO7jw3BXUe15odNkclsH7HM9ehNGyWdnKw1ippk4W46CHS7D6JTxsvPsktm%2B%2BxAJ2mEIUK1bQ7O2x0Idrx7Hix%2F1Yu4cQvrSQeL2VmLj5r8Macx4SF&X-Amz-Signature=3a2aad79a52c1d95a7861a300cd76dde908cb47a341cb78b25b419c8deac25a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GTK2XJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4c4VlbCFZoiXA57cX8HtQsjChWlqeJZ6fqzod%2FVr5SAiEA3q8N3dHfVDVIAVlyBcxM9s6smg%2BsFtt4pv2hUPbHFQoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOWs55FUhOkIjFFFCrcAxmlzouLdaH9mty%2BNMUTng5X9HRjtDM1Sk2CC8Xsmg8y1A7MMZWKU31XXKwqfsbWvgofaUZPz5gWcllWNxXd4fGbWxPRrSe4jXMzYMYE9xu46h05FkNYPvfYWbylNFdq4n7xvM2b5fGWlUY66svlKhroP46FxMURrWq3K0d4XNGE6wtMjLEbAZl1YkfOy3yKeZFTdV1oROBtMzra0QqIabrkEIS%2F2FuhYOXlZuyM8u%2FH6rojRsGWYrQPdmfNdJtiXXvqhfCLFW66TNrmopHxf95qKdM9EbbCTeSFEgl3XGwnENEpLYNXm5GqeL4wooJLrVdANj2NTspKi4lJ%2Blh%2FqBCHDgisrxf6rx%2BNFDh9GkHBCDivVO4MxcjMlFKaMhtIse3JTEBCgJtVNft5AhA%2FJIYrwqasXP2S%2F2ktdflzcNWqdKW6GCYI16lzc110JOyjtbE3IMr9RAgL43%2F3EHnOIVUzsPwOoq4ROAB0Za4Q11quYioHAFejZMnbnrs2ez1mLATqkbXs%2BIldZpgyDaGQKcBLNPTBPyg00XSLKwkuVd1R7ouyB0neOh4rWsxOeumW8eOz%2FpgQB5aDPKkrM%2FgNejoNTmKyJtfxuM%2FIwJNfCgQmXGdawvjwArRQGYb4MIT958EGOqUBB%2FW%2BsygW4krlJDhHJzwTsDMZH8Y0hXTyQw%2FOX3GFfk2QH%2F8ov7%2FEDPbUSczl%2Ba9LW7NArIHLgvRKXeY3Qevs78KPG4VaswPYiINYj4PPw1uyS79qMRTYivrCYMLAgvQrrBNRpOhi0vuLzKnUrnAgoOBDHlGIg6crzkbo3aGn8bU%2BDgYppcXAU03Tm%2Bd%2B44t1KRFJP8FXKYPeTlAKQJIGN9VlCwaC&X-Amz-Signature=1c3dd7c48924508a0328f7f40da432ce74ca94c977937526f3ad7cf268f779c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7GOMID%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHQal%2Fc6nB9SdMRLDFuR4RSf43aqM4znNLZ7YefmUGWwIhALyLzWZ7V0iKQyeYIAT7B0xOb%2B8BREzpnhddKZ54MneyKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNDfvDh4n%2BtJyVZWMq3AO8rq926I8QNm%2Fea3mqxieX7G2zHmYLloG448BJpTPuz1wvOnpehoPWUhC0kLWFsBJYZ0YChAdC3U8%2BOs0aD8FWKqHs%2BRKk3rkiZJ1td11bZ2tg1Rqody%2FuzHKDRkJ4cQ1MNJvIMrf3BjnlLEpsCIO45PuYTWbR5Rrx%2BAyYvj63QkRH5wZo8dgIcw%2FuP6t1QSGK3pEXqAyyP%2FfA2VvKGsjRbLy2tOHp1FieiuEoU9TpGoWirljLjnpEEOTK65XGU0exOx6UiZB8RKKk9zCsBBPnAkCIPFWRoXVD258AP5CHyyJH%2FI1uTYgmSPq9dR%2Bg6PK39pODDgP9p%2FD6opjpq4Lc6nNbmm9a3z9sTNBgKedkcNBrE%2BpejQ9iHZkyZzNfPt1Q3B9gUKWOw9qszp0qHuoX7rnsXNRc7uOlzQwwZItFLsU%2BB5449RG5u%2BxKeF1w9HMAE5lkyklCo2nx%2Bgp4JtpVJ4BmByj9Y3ttiSRxKKW4GWQFeY%2BNmqPR9uPLBwyQrOEdZtVSBilBT4ZU9R%2FSUtGQBu2SHl7aY8ubYZDMkGCc0qxBf3uNqC8JUTa98v61u2bxnUsaO%2FwKzX9FfIDxdW%2B9748gE5oiAc4CCzSVZzUVB%2Bm9DqsLnWsJcoEEBzDJ%2FefBBjqkAdKa31Jlmx88uu1of%2Bh%2BWlP77JQbXJNoN9swHWw0U9jrRo4TL%2BDmaTi2vtWL7od2zkVKF9UXwrsQorjioVKevp11DO1XfPCdIwHFz72bdYoZd9ItGnl0sW%2F57uEfBLhE965EXV0T2rigJAm2dtti1uSyypOHwwxEDcrN4dSifFay3phFR9g%2F9U24W9VfZzxkd2dtrVtMjQO8yyaaq5XnzWfVJVeM&X-Amz-Signature=4a22a1b330fcb682271182819e7475825dd96cad8901a35450d1c1cc2f7caccc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
