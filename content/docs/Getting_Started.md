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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHS2NKI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFgdco9xLbnnhq2z1eQy3yllHEvm1pG7OgyZwvuvQUg7AiEA2UN7hjEEZuuyRQKOTJISM1e%2F9lu8d00T3syx5Z%2BVtBcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClTB7d34VzNrrYExCrcAx0b%2FvAvwhLNup61dOclvTZt2%2FlvbNBTyl9%2BCD1C0Nx5JNkyQMopb94C4u1JlV3hZY2l5mSTrbIBAfOhPX4opusZOSIAhkKUVaXFsfNft0FzC3kj5uwcehmfaIrBoQr7x%2Fr%2F253YvO1SMwAr5IyrhrA3NBvlc4xtN9BaFda4zGbUei2V661evs3fIU%2FEOOHsfAr%2BtVNgx6Nm8qTQ8kZvyXQE%2B0ZqIK8eKXXtyno0apFL4DhwcVrjCIWoiiDudiprdLLe4firr1b7aEunzPJ4Gn4PT1nHEJOaFn9NNmCpfR14wwWs23ZiBspmu0M9rassrSab7KBDzuAMf%2FBEmGzi3pKRoZBcaPO1mP2zMXFdM3RQK13Z%2BKblHhlOpjAairJuCc6JNxMJZaAwYPdJHGLv1M9C%2BRU1FwPpufebnVVJJYw%2BaUlFVzQoOwbVNHP%2F6gEnVHGmR6KxVvrmkTlJlbb6BSlAm3t9CXotaXtLORf2ViOIIxoTirVD6g4fFl%2FPUlZ2VBV9MCA2mJ%2BbiW10eD6YlvDMUcQXYjxqUXj9cxZpMlpF9r9La8dSof%2BBFUD4mBTEDinzhomI3e%2Bgj0C18GWcOJPDWabJocQZsc1AcYu2bdtOIvq79i7a%2Bm2wwMu7MLmy0r0GOqUBqFwJM%2BH1A2ITepyGYyICf4sW1WzXQI3ad%2FVfWpRE0jnFAh6qhWp5IiDaDXLzkGpYrE9hTEdMiJTMxcHnjr1GY0SAu5SEFfd3zg7zFxkUmMD%2BqitTsILimGJfCdvXUCBv0uUatmH%2BKswSuJ69Gfxj6aTZ7z5OvwHxKDLv6kOrAEvDhzFpliuRHCaQA66EMeABha%2FVavPLL7cQZq7mOJJYIN8bHfMw&X-Amz-Signature=0c19e1f285cb1db577b48c2a05eaf7f7e4d5c7f0d8eeda32454fab279f989085&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHS2NKI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFgdco9xLbnnhq2z1eQy3yllHEvm1pG7OgyZwvuvQUg7AiEA2UN7hjEEZuuyRQKOTJISM1e%2F9lu8d00T3syx5Z%2BVtBcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClTB7d34VzNrrYExCrcAx0b%2FvAvwhLNup61dOclvTZt2%2FlvbNBTyl9%2BCD1C0Nx5JNkyQMopb94C4u1JlV3hZY2l5mSTrbIBAfOhPX4opusZOSIAhkKUVaXFsfNft0FzC3kj5uwcehmfaIrBoQr7x%2Fr%2F253YvO1SMwAr5IyrhrA3NBvlc4xtN9BaFda4zGbUei2V661evs3fIU%2FEOOHsfAr%2BtVNgx6Nm8qTQ8kZvyXQE%2B0ZqIK8eKXXtyno0apFL4DhwcVrjCIWoiiDudiprdLLe4firr1b7aEunzPJ4Gn4PT1nHEJOaFn9NNmCpfR14wwWs23ZiBspmu0M9rassrSab7KBDzuAMf%2FBEmGzi3pKRoZBcaPO1mP2zMXFdM3RQK13Z%2BKblHhlOpjAairJuCc6JNxMJZaAwYPdJHGLv1M9C%2BRU1FwPpufebnVVJJYw%2BaUlFVzQoOwbVNHP%2F6gEnVHGmR6KxVvrmkTlJlbb6BSlAm3t9CXotaXtLORf2ViOIIxoTirVD6g4fFl%2FPUlZ2VBV9MCA2mJ%2BbiW10eD6YlvDMUcQXYjxqUXj9cxZpMlpF9r9La8dSof%2BBFUD4mBTEDinzhomI3e%2Bgj0C18GWcOJPDWabJocQZsc1AcYu2bdtOIvq79i7a%2Bm2wwMu7MLmy0r0GOqUBqFwJM%2BH1A2ITepyGYyICf4sW1WzXQI3ad%2FVfWpRE0jnFAh6qhWp5IiDaDXLzkGpYrE9hTEdMiJTMxcHnjr1GY0SAu5SEFfd3zg7zFxkUmMD%2BqitTsILimGJfCdvXUCBv0uUatmH%2BKswSuJ69Gfxj6aTZ7z5OvwHxKDLv6kOrAEvDhzFpliuRHCaQA66EMeABha%2FVavPLL7cQZq7mOJJYIN8bHfMw&X-Amz-Signature=fd9f3441311ae2c50aeecc469c96ca70f98cc9fd8af671e6f703e250e5f5b873&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6YJF63Z%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCCvtSQ91eG0XmtDuknQZU606vRh3r8njfXTxC%2FT8%2FaJwIhAN%2FF0QzOJ9TP0kfY3V1a%2F8%2Br7ZiHy4mOHrvrtdLcDcp%2FKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlMPt%2B3OVv%2FTWZzIkq3ANYu2BgYG6duv4Dv%2BEPZzJl%2FR3E8XUYl6IdDo%2F8MTFs9mUOCm5LVK%2B8qSKeK8r3YCpM4G1G3XpOKaHuVACpo0FnlliyPZeI6E1kvkHSyPvHmi3AsUswxTE%2FLVIpqnsfvImIu0W71thQuD%2FFC15Tm9nhV1hxqxgp4cXZ4j4Q8%2F86aRq9zyG7i%2Fu7hPhjZtRTKmeoFxiN2hZAi4CBOVtENBESoc7hFDaEgZ1h1UGOySF%2Begzl4%2Fon087mDVIujy7vb1VWvFKjU6f56aU509c%2B%2FKq2XbILkiceYswxOCCIMh1DR3qkcbmZX%2FWCMzEoTZieDdxbq612jjBcdUuYGlR0cKqxaSzKY2hgPqkQ2g%2FCDp2OL6R9fZys2MKeiDlGb%2Fc8Gd4NLYhs%2BKqYCZQTZQxZCh7cd%2BwgGEv9GpMLSH%2BBquxhvv7i32S%2FL6GZb9F5wB%2FqvnAaEHo8wLx06vaD4zGV7DmTKrGquHOq%2BqXmws%2F2lyhk9l62KPD%2FGk%2FxKEuOf1ueuSftJ9PBwgoup9KCjHy8HBSkXOW%2BGf5GkPbA1lQAOEKZ9VpgVR1eYJKddQae2UXbvKnqI%2FSISke%2FCt6rLEXzyzipHrXSPI6hk7AO1tqYp3OwBHdKY%2BPI2M0F%2Boz7fTDtsdK9BjqkAaG7vvrqIxvMQnap9Fw7GtJx7z77C%2BbrZUtbFvqsWpOq0sj2RDTYHy5L4VsXf2vi3UNxhYu6GLNYGzanMcnN%2B1Gu4wk38T58wZ7OkuZlN6TtsQ2gDiYOJ4x2MqJgpHMYpAcOgDt7%2BmboYqAFI9U7%2BInsSaCa60FMNzTh%2BYrNkMhzruvCCXV1KlyKumlwGpZomLIoUI65WWcfFAnY3XGdUTiKj3sI&X-Amz-Signature=b8d57ba52ad5bef5644b3b5066a749e193d4fcb0c209bbaef069fe7e0bf4d38d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDM2FLL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEQk71ba0lQEgzeElyO9GmnKob3HE28iMVyU4ULcvhoxAiBJVWPARtunCSs2l8n8baeXqaWW9lKKhWiIEDIj0O4gVCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTssYZ4G0kpmah1d2KtwDTFj%2FwRTuw3lsEZKlVW3VcCk4rwANHgQ3Y59pasOS1GQmK9hzxeguVXIJ74aFhRPzOaPd3quORM4C5tcTSLRQWtkh0cWQbbzroRWvYLzz5yeqOmXn7rirMDGLCopWPUNl%2FmRNrXuWUQML%2Bt%2Bz1NGhROPW9lAOGLbfI5MLGetA4YdmrbFWGKqunU%2FFOtit7OIXiPUS59O2sE7TjXCFwZcdcsqOJihij9XTulDKYH7dn%2BQuO7ND7D8fTz7rdlOQTD2GOlNxW6irU5a7QvJqbwx0nQp4NYbgJN0380lEu5vkWX1DVXdbjNCoehBlWq%2Bbkcir5m6kP4KbJJubOqKZz1CTV1JiC2HVMdKy2A0zjtKaFrwF7UY7Egm7cVn%2BmQsUlPy76sDnPQEB4vdu2t5t7LLXyBXF3fLeXQms2brfmDugGubT2iFS%2FtViDZh4bduqgg%2BVwbRtHaqCRksGQGouNiPoujX2MYea5cnXxv6Zt5qGYAWS2RxB1ALoB2ODsv0hRx9sZB2ci9rmtiUUQ8bqYuGLYzfB%2Fe5HkQaKMVl7mkcJdn9jD3FWGb4Voa9yS5j6lWFyruK5qdnmCYMBrZUaLtsD4qx0x0PUqipP9reDS7DThrO2MHRWtnwgc94%2B6gIw5rLSvQY6pgE%2B%2BE15uT4U24PLlNhh5THEP2b9UE8U6lB%2B3bIw%2BbSk1eo3fQ3I7M4l84wHxD6ZAUQ7bpaMKPRN9PZCx5ErBI2DPK6N3ia4dY926rFHP8XJ4YE%2FELprxnRSqUAFFIjxOmnATHDkMMYuDHgSk2Zpmnv65F15o7Cds0mjO63WriD2vu9gNun8%2BRMjEG6xXaMWXdcgwj4kRJCCAqfNznpIX6QtNWjevaxn&X-Amz-Signature=d58dab41434767b75989621844fd1074ae7c24d498e4bbf9496b7b668333fea1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHS2NKI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFgdco9xLbnnhq2z1eQy3yllHEvm1pG7OgyZwvuvQUg7AiEA2UN7hjEEZuuyRQKOTJISM1e%2F9lu8d00T3syx5Z%2BVtBcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClTB7d34VzNrrYExCrcAx0b%2FvAvwhLNup61dOclvTZt2%2FlvbNBTyl9%2BCD1C0Nx5JNkyQMopb94C4u1JlV3hZY2l5mSTrbIBAfOhPX4opusZOSIAhkKUVaXFsfNft0FzC3kj5uwcehmfaIrBoQr7x%2Fr%2F253YvO1SMwAr5IyrhrA3NBvlc4xtN9BaFda4zGbUei2V661evs3fIU%2FEOOHsfAr%2BtVNgx6Nm8qTQ8kZvyXQE%2B0ZqIK8eKXXtyno0apFL4DhwcVrjCIWoiiDudiprdLLe4firr1b7aEunzPJ4Gn4PT1nHEJOaFn9NNmCpfR14wwWs23ZiBspmu0M9rassrSab7KBDzuAMf%2FBEmGzi3pKRoZBcaPO1mP2zMXFdM3RQK13Z%2BKblHhlOpjAairJuCc6JNxMJZaAwYPdJHGLv1M9C%2BRU1FwPpufebnVVJJYw%2BaUlFVzQoOwbVNHP%2F6gEnVHGmR6KxVvrmkTlJlbb6BSlAm3t9CXotaXtLORf2ViOIIxoTirVD6g4fFl%2FPUlZ2VBV9MCA2mJ%2BbiW10eD6YlvDMUcQXYjxqUXj9cxZpMlpF9r9La8dSof%2BBFUD4mBTEDinzhomI3e%2Bgj0C18GWcOJPDWabJocQZsc1AcYu2bdtOIvq79i7a%2Bm2wwMu7MLmy0r0GOqUBqFwJM%2BH1A2ITepyGYyICf4sW1WzXQI3ad%2FVfWpRE0jnFAh6qhWp5IiDaDXLzkGpYrE9hTEdMiJTMxcHnjr1GY0SAu5SEFfd3zg7zFxkUmMD%2BqitTsILimGJfCdvXUCBv0uUatmH%2BKswSuJ69Gfxj6aTZ7z5OvwHxKDLv6kOrAEvDhzFpliuRHCaQA66EMeABha%2FVavPLL7cQZq7mOJJYIN8bHfMw&X-Amz-Signature=04cf020fa908ebcf5e2aa2e95679b6ad000fbfac9e4593c4c9d321c0aaa8b98d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
