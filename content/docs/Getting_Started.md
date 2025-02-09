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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B66PHBG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgmDQRzIxqhJJATuddmVN5oZCdNWpYsC3wsEmRzOGf1AiA%2BphQ%2FoAp026wRr5JI%2F9ly9KG7phqmoY5aRebCUTWuJCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOywHrHFfjNiPNpSZKtwD1pXkDhbBsoLbRuomCN3bC2DHGwY7uxoDaJKy5XIB505jZln1SxGaGjDGLZqLemj8s5kK9PZ7R3tgzC2ky%2BNvx9FThoJCc1OD9U8I%2FO3Xl7TNvOaAvXs4kGSdQQ1lOU5yNdhD3cQiRFFBeBmN57%2FAde6pWOqFj4lO2qTsk85e8ymQMzr0uFdclnVO6FuA6tR5GNgXPObhL%2FMBqz4pVPq0sxU7KU0ObXRx0ab0Ykq0epizL5wI5lIMEOlwMTAoUAX7B9P1kMcKvZN0n3ZwBcWnUyysIAcURKBm2OMd3LcjMZpb3zMkccaqs3%2BsGKdsMaIxjudSWozrj5VGCJsraxT3HjXxsN%2BzD4LLtv2wOv77DkC4%2FF93MVOUv2nsJuTjTQPGmxiwsiqWVX1oPrlCC1hCUg5WV0I631mqzFsJZo2tfQzRrrYzDQBt5Iaw%2BWR3hhHmzEYlqIvqnGnUGCNJUOc5HXg%2BJip%2BZQLFCPewRv0Mfv%2BbLVh%2Bj%2BkYtd9agdLtwGmS%2FBkB%2BEj4fds%2Fl7inLlSyne172bxdz6JjK4cwuNVFNuFnF%2Ftx%2FnGKAG0uachcEMDvvEMzHRaoqZBzTft9HND60KzPCTkODqzm7%2BgwIsPYoyKMAkdIIDibM7UKS5Qwg4%2BkvQY6pgEJsPiAcm7U8TtcKJfIcRNUJFfNU%2FBRkDTxvcRHTcM%2FmlLWgbNmls0uax%2FGqm%2FTxIBnTRBkqux1baINmM0IJFutoUsNYzdaIl3ep4E84uUA%2BSgYA796aMRN0yOLMn%2FUrk6hHGANDiPKXMg4IEGGHTE7NFTYt8lARhM39QAEQv0MyDcNpS%2B3rb7NECINkzB5tYWpUjHQ3fhVjP3knY90GU47gvCMy2SG&X-Amz-Signature=564712d8022484b4bd271d534ead6181efd9c6aa012215804a4c63ab63cea120&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B66PHBG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgmDQRzIxqhJJATuddmVN5oZCdNWpYsC3wsEmRzOGf1AiA%2BphQ%2FoAp026wRr5JI%2F9ly9KG7phqmoY5aRebCUTWuJCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOywHrHFfjNiPNpSZKtwD1pXkDhbBsoLbRuomCN3bC2DHGwY7uxoDaJKy5XIB505jZln1SxGaGjDGLZqLemj8s5kK9PZ7R3tgzC2ky%2BNvx9FThoJCc1OD9U8I%2FO3Xl7TNvOaAvXs4kGSdQQ1lOU5yNdhD3cQiRFFBeBmN57%2FAde6pWOqFj4lO2qTsk85e8ymQMzr0uFdclnVO6FuA6tR5GNgXPObhL%2FMBqz4pVPq0sxU7KU0ObXRx0ab0Ykq0epizL5wI5lIMEOlwMTAoUAX7B9P1kMcKvZN0n3ZwBcWnUyysIAcURKBm2OMd3LcjMZpb3zMkccaqs3%2BsGKdsMaIxjudSWozrj5VGCJsraxT3HjXxsN%2BzD4LLtv2wOv77DkC4%2FF93MVOUv2nsJuTjTQPGmxiwsiqWVX1oPrlCC1hCUg5WV0I631mqzFsJZo2tfQzRrrYzDQBt5Iaw%2BWR3hhHmzEYlqIvqnGnUGCNJUOc5HXg%2BJip%2BZQLFCPewRv0Mfv%2BbLVh%2Bj%2BkYtd9agdLtwGmS%2FBkB%2BEj4fds%2Fl7inLlSyne172bxdz6JjK4cwuNVFNuFnF%2Ftx%2FnGKAG0uachcEMDvvEMzHRaoqZBzTft9HND60KzPCTkODqzm7%2BgwIsPYoyKMAkdIIDibM7UKS5Qwg4%2BkvQY6pgEJsPiAcm7U8TtcKJfIcRNUJFfNU%2FBRkDTxvcRHTcM%2FmlLWgbNmls0uax%2FGqm%2FTxIBnTRBkqux1baINmM0IJFutoUsNYzdaIl3ep4E84uUA%2BSgYA796aMRN0yOLMn%2FUrk6hHGANDiPKXMg4IEGGHTE7NFTYt8lARhM39QAEQv0MyDcNpS%2B3rb7NECINkzB5tYWpUjHQ3fhVjP3knY90GU47gvCMy2SG&X-Amz-Signature=cf1fa14f8843e9859295548386abb2014a769ee251b51efebf60bf52c1e8489b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNLOVPA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFwGxasFKw7F960tUrR8py7w%2BHaDzKdjb9Wf3I%2Bom6QIhAO1yFgsr1rtAhgjkXxWm59wMz5etAIq%2F3MRM3riLXfc2KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBtVbylP%2BqNqnNpbcq3ANdOEECGNQBppMrtShnNotYud3xZ2ekMKiPSt20y24I8VaboDF7ufZmmunQ2v3VyBK2TJTdFGx6vy6KGvKjfqxYHuCNgZXhSwR9UbbYXF63OrFjOpNCzP28eLVBdbkkZxxLZ7Zj5jtYMiw33HXLjSukaf62xG%2B4obRzxQEZL%2F01EgrLM04AgPLwePTzaooEzL4BDos%2F0P3oh4kA5clzcMYz4p8zWV79vEj659eB0lALr7N88tE0pWbgyK3qSPwXsbQWOPn9e5aw%2BrDmMjv3ecN74K3Uffs7nf0IIYrEt%2BG9r6d%2BBJXpHOjMCinVBnjPzhyTDUxcDhgSwOQ9pIpVgD4keOeCMH6KhqSVCVf6f3M%2FF2TUYvvfTWOnkSraXy0eFbLrmPrbPurtKNNZXEvfTDUbSAJD0N2oDUYZFMiu5F87nt%2Bu7IcvUpxl1WmHlTkI6vhTsVQJZ2FStrekXC%2Bh%2BnWuqKa2zcAh4qGfgz8sLxbL3iB6GPNSxIVgisPI3b6MH1DK6497CHXPVL%2FXxMtKIU6VV2U7NTW8poU7buTF7iNHru4Go78lm0UdBU1Zz1vRG6TuS8FlwhL9YJ0H%2BgsILX3AiOQG%2FNfeyMs43KfZJsKqojyg1Sah7OZTpSOWEjD3j6S9BjqkAQ3jvY9eAy8tAGOpabp0hgE74yO0Y%2FeVgRD3r586Av2rYpAZX8JjhVxam5WfsUN%2F%2FXUxR2DJeaZa37EDVPzW81LsR%2F3rj%2FJHHcK0wf7yuGeCYiDfgALmKgB5lKMe2tgRmQTfHg%2BQHf1HlaZpJdp6rkjZ1Nmy9pHAQCj%2B4D9wjuVgyq5xR4G8Qc%2FI3I34Nnq%2FujOAZwUu%2B8nJDtP2qgONNKpUCQJg&X-Amz-Signature=fa8350b2255eb7ff78999a6c253462234a11c906d67981ef0468a78dca6e14ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NP4ICXH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTIjF%2FOqeS%2Fqs5oKvsa9Eb36L9%2BGZLLY2iR76j7Wnv8wIgFyJkYBCIEEL9%2BE9kCk3iap9YD%2FiEqVqD6qzVLmScMOgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0prwOUOMEeqI3ylircA2zVkokDxbgX9bRq4%2FMi71C%2B2sHnVJ%2BwACl1g4WMBHW7dVVTg1xpsfzBKo7C9hBb%2Frd5n0IhZudfNlyn1es88PYfsbElXESPqURoSI7p%2BZnHUk1%2BsISmCI5%2FY7CoTMmlis93h6uCUoNdLxXjMXzj9iGbnT5JEbMocHWTaXmMWhlNa6%2F6Xt6KDr4r59XQlB07ma2CCHMX9pZ3cyEbuUC0zgA7yYO2pnGvVEDz2hH8nn8Va0wJjif7lJGBH74jFgHkwb%2FwnCwxWBsH8fGdMjtW1jii43GdPq1KknhDljZlyjlEs0OxBWziuYKIjPeHFPH6g6yzZ02dXwRqMXbrqly6rh9zuzsxi03%2BH9E7zCI6SQD5AYCT0HeZlETGRQ5M54076cHztb%2BY9Ur5MqOzYsdLqv6Cu7R%2BhU5Oce6%2FkHI3%2FO0fAoi1ONMkTpDKQKlwAAykOi5LOLsbv5qSHchbOR0BcTCnAdC%2FvEecVJ%2BlD9L3zZ5KHVrNOCRDa%2BLuD5dFEcVhVcNgUfRWR9gYZnKb64q4RV2ymqjWL9%2Frn7z5RKnw8024LmdJ%2FfLrgJGVrXKExfx6yo6roPXnJkNRxuj3OZAppRmXwdZnxq6OGfQNms0aKS1EDJ3OahY7oT2qWfOcMOmPpL0GOqUBdjadPxwaMpJrhjNURG0yMp4VTUGAN0U%2BIev5LgtWgoOPYT7i0l1fxaLSYe0uX2QhmEKq5H1hg3SjUfr8t0RpZZEqO7zLsbuT7gdHrqVHvPoEMJTmFkAL6l%2Fsb0a0QzG%2FRT60dFtLR1nfLNkclVKAcUwLeagr3u9ETf7Nh0mjKw1YYt6eVWDDrfshcnynjjsAnjPl%2BPnDU0ZuiTzSXKojQQ8onix5&X-Amz-Signature=303b0989422e4e8d020e6bbc8adbb92109fd0b974f98bca775276b972ff31ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B66PHBG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgmDQRzIxqhJJATuddmVN5oZCdNWpYsC3wsEmRzOGf1AiA%2BphQ%2FoAp026wRr5JI%2F9ly9KG7phqmoY5aRebCUTWuJCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOywHrHFfjNiPNpSZKtwD1pXkDhbBsoLbRuomCN3bC2DHGwY7uxoDaJKy5XIB505jZln1SxGaGjDGLZqLemj8s5kK9PZ7R3tgzC2ky%2BNvx9FThoJCc1OD9U8I%2FO3Xl7TNvOaAvXs4kGSdQQ1lOU5yNdhD3cQiRFFBeBmN57%2FAde6pWOqFj4lO2qTsk85e8ymQMzr0uFdclnVO6FuA6tR5GNgXPObhL%2FMBqz4pVPq0sxU7KU0ObXRx0ab0Ykq0epizL5wI5lIMEOlwMTAoUAX7B9P1kMcKvZN0n3ZwBcWnUyysIAcURKBm2OMd3LcjMZpb3zMkccaqs3%2BsGKdsMaIxjudSWozrj5VGCJsraxT3HjXxsN%2BzD4LLtv2wOv77DkC4%2FF93MVOUv2nsJuTjTQPGmxiwsiqWVX1oPrlCC1hCUg5WV0I631mqzFsJZo2tfQzRrrYzDQBt5Iaw%2BWR3hhHmzEYlqIvqnGnUGCNJUOc5HXg%2BJip%2BZQLFCPewRv0Mfv%2BbLVh%2Bj%2BkYtd9agdLtwGmS%2FBkB%2BEj4fds%2Fl7inLlSyne172bxdz6JjK4cwuNVFNuFnF%2Ftx%2FnGKAG0uachcEMDvvEMzHRaoqZBzTft9HND60KzPCTkODqzm7%2BgwIsPYoyKMAkdIIDibM7UKS5Qwg4%2BkvQY6pgEJsPiAcm7U8TtcKJfIcRNUJFfNU%2FBRkDTxvcRHTcM%2FmlLWgbNmls0uax%2FGqm%2FTxIBnTRBkqux1baINmM0IJFutoUsNYzdaIl3ep4E84uUA%2BSgYA796aMRN0yOLMn%2FUrk6hHGANDiPKXMg4IEGGHTE7NFTYt8lARhM39QAEQv0MyDcNpS%2B3rb7NECINkzB5tYWpUjHQ3fhVjP3knY90GU47gvCMy2SG&X-Amz-Signature=294d72e3e70e897005f6ccd5592a48b6107bcd1e5824bc680f4c6bd37ce9f9b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
