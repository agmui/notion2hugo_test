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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOX3S6FB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCZQtTvQ40MqEgjXKJDDUIS7NGFgvgun8ObZMz2fZuB9gIgGoAfAVSEtqr2ECuGBZhqlX7tW0xprG4Lk5v0VZW0aHIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAQ%2BuDK0BsQu0QItyrcAwgmvhblO5CI1KXCJ20v1rlj83qOSZTGerGatW4D5Xs%2B7T%2B40oyx1D%2B4xifNW%2FiVkc3y4W%2Bn6pm1ydZ6UUh6KVIf61kPcA60w1flWdNz6l73wpp1DG7%2FzWoK3wvu3hwCjzEHj%2BsIjg0BnFJGvzt8nkaWuV%2Br4CY%2FmJJaXc8yez4imn5Rav22y%2FHFzfPZ776Sy0xdZlYm%2BkWgCxHajXhQnaAGBUt8ssPJjvl31x1Lj5n3%2FbucwZH%2FMEzrQwb8WbxFhh9MtYLads9w%2FLWRwypSgtVIa2vchy%2BDe%2Fyd6dTRCUrWx%2Fqi%2Bp1Hn%2B6pYqVE5n94zk4uf501%2F%2FEmqLT6wiq3Bbo9plef4eQOOkUDJLicwHUE%2FwwyzQ%2BixSdRurBoJ3utrTcXIN9%2FPQvOuq70jmwo7FP3JxAPGDvvRZ8ITkmjknKg6DNz8uLHuVxxcIma8324BLH%2Fn%2B21bSR6%2BUP6q2QRo6l16%2Bz6r8Kx5uTCD6j9KdKiaxh2N9eFCSXqS1uJ0d8FumC49l6tLGykW16A9NEyjQrknFP%2FHTCpBS4QPba%2FNc82NRGILVyUMC8NCdJXr81khlbxzTZ4gRZ%2B0Cerl6lgW%2FOseYQdKO%2BK5K%2BMIqxbDIrw%2BMhF1azygow1q1AbMPPfnsAGOqUBCs%2BEj4QV7fp3n8lMBhVOF45Ca7gnYXSJHkRKrSHMeQoAUAh6Xh2pbD%2FGCePRnXfzxU%2Fx6VzXbtIeb7ErehesHaUDKJLLtUFYlyIoksO%2BI9lXG%2F4AKfuXMn%2BTGb5urr%2BOkIgmD1U24o1HgQiI7aGDk6KnAiOrDV8G9Um6J5nXaS0DBIA58KtRQJhpKUVOfkyfICY5yZgS8CTVoRNhA2gufuB67ajZ&X-Amz-Signature=2f08ad531c52d53afe7b04ce003b74b60f181a7ba7c3bbe5296b72e2bc202ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOX3S6FB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCZQtTvQ40MqEgjXKJDDUIS7NGFgvgun8ObZMz2fZuB9gIgGoAfAVSEtqr2ECuGBZhqlX7tW0xprG4Lk5v0VZW0aHIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAQ%2BuDK0BsQu0QItyrcAwgmvhblO5CI1KXCJ20v1rlj83qOSZTGerGatW4D5Xs%2B7T%2B40oyx1D%2B4xifNW%2FiVkc3y4W%2Bn6pm1ydZ6UUh6KVIf61kPcA60w1flWdNz6l73wpp1DG7%2FzWoK3wvu3hwCjzEHj%2BsIjg0BnFJGvzt8nkaWuV%2Br4CY%2FmJJaXc8yez4imn5Rav22y%2FHFzfPZ776Sy0xdZlYm%2BkWgCxHajXhQnaAGBUt8ssPJjvl31x1Lj5n3%2FbucwZH%2FMEzrQwb8WbxFhh9MtYLads9w%2FLWRwypSgtVIa2vchy%2BDe%2Fyd6dTRCUrWx%2Fqi%2Bp1Hn%2B6pYqVE5n94zk4uf501%2F%2FEmqLT6wiq3Bbo9plef4eQOOkUDJLicwHUE%2FwwyzQ%2BixSdRurBoJ3utrTcXIN9%2FPQvOuq70jmwo7FP3JxAPGDvvRZ8ITkmjknKg6DNz8uLHuVxxcIma8324BLH%2Fn%2B21bSR6%2BUP6q2QRo6l16%2Bz6r8Kx5uTCD6j9KdKiaxh2N9eFCSXqS1uJ0d8FumC49l6tLGykW16A9NEyjQrknFP%2FHTCpBS4QPba%2FNc82NRGILVyUMC8NCdJXr81khlbxzTZ4gRZ%2B0Cerl6lgW%2FOseYQdKO%2BK5K%2BMIqxbDIrw%2BMhF1azygow1q1AbMPPfnsAGOqUBCs%2BEj4QV7fp3n8lMBhVOF45Ca7gnYXSJHkRKrSHMeQoAUAh6Xh2pbD%2FGCePRnXfzxU%2Fx6VzXbtIeb7ErehesHaUDKJLLtUFYlyIoksO%2BI9lXG%2F4AKfuXMn%2BTGb5urr%2BOkIgmD1U24o1HgQiI7aGDk6KnAiOrDV8G9Um6J5nXaS0DBIA58KtRQJhpKUVOfkyfICY5yZgS8CTVoRNhA2gufuB67ajZ&X-Amz-Signature=d4bb64b2394cc6995f70b0aeb592f5884387d1ef023ea56a357770349a789411&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THK2JOT5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQChcKh%2FwJ13E4xQc52YVXCr6wPCStSM%2FzP4AfOYJ3HMXAIgVEy1J36V4CvUo9B9i3nPTTWc065GGnJrwi82YN65t80qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJ7GJrQr1cudi9t2SrcAym8yjDnBQRSYl0%2BrHD2KRNx4zplwvoUzGz7fcATdWoI2nCA24nHPEENwk5upO%2BGaErkMa%2FUVBPkJdntxHyhNEXJQzRDHevjTz3U0qXx4Wpom1WIdMXK8xgSrOrwdarYExVlF6qjdGnc6RYcgtQapF2RVs%2B8LCKVk%2F9poalrDldPvXFLAu%2Bkc%2FG7HOEVnyswa2e1i8zWzLQR4IvNoE3Dr1mKkvH4X%2Ba3E%2Bs97xWjNqkHQ24RM5NrRazMHQt2B9jgzMDNtkOBSkpdPdiPpAAIiY5LQ5gbPk0MSWl7JWeSnizgmlB1hw3QkodEsvHYbY5oDuISsSjg2SnvXQlaK1b%2BHWWv2rdXv6qomSR3MeRwV5mGWPqI0buk6G2yoEa8b078IOitTe5gOhr4JYIh547KdCpBiy1BxvDNCrOmGQnapFh6N%2BnsqpKQ%2BGhI4xPfOdNEQ7iCWzZ78ie0jDhzp1EdL8fnbvafc%2F8hiMgWFj5Lq6dlgfAhgidIh%2BmIc6yuNIbYtfszRfmzg7ppZU0zu7En8CQopCeJpQjLt6et4lYkmL%2FpEaQkHwL8S0Wa5uePQclugaBUMT6AhYrZbAuS8mfrtoIGNlz3sdnKmOpH5ANxlkU6THKGAZcPTRsODshKMNffnsAGOqUBpqedQv0Y0bUY2tbAR9v5IO%2F1vzUT9VJtapaTaJKzexKRgo2ECLtynitWdOp92nSWcYnDiTpKsICabEBp6vSHJCHnrU8tgbjMr9uN9T5fU0rhrqlNJ2RfY%2Bt%2BhIMiU860T5rBYoqnVQ4WyEmy1dWA573CfaF8uRBFDLLxQK%2F8RnSq6k4b%2F1sZBGhSsDghg3%2FjDoNDm1KiqKTsu2GwyhuRx%2FtxHQo8&X-Amz-Signature=bf37b340dbbf25e6c9d6e4b2684de701dfad85b7226f741446038c5f6c9aadb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36WTLEC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHvK%2FApanMCW5MJBVTUeKYdr1aTKey5BZzfg4uQFcEg0AiEApNpI8XVDd3MOYRSmEwe%2FuoopTn%2BjJDUd%2FZwbu38gUQYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPIURtYTUbhbbxyeyrcA2UcMQVgbwHz5vDfWHQ%2BczZGEt%2BbgwgPuTUAuy%2BNhZxrEhtSqgUFz7CAPRCKqZ%2ByQaW6gKJLrI%2Fw84uR5cReKzbaFXAmBkK%2Fz1Enf%2BsrQ1joAV%2FWLAxAUSw01hxftAm6OxO7XQXp%2BofqhA06FvsTcvyBItLw8FkLsDDil%2BrNhX02xo76oQjxtm2tq5NywZEbRgSf1IPGOE7W7ElYbmzhop7ir5OR3eCtKEhOT%2BRPv9%2Fqw%2FB%2FpesQmv142eFTMz480h1pX3uv%2Frcy3PeeJt%2FSPoKyFeaAYqND9eBRqk6sRwQK2a2IrF1oB2P2H5PPJmj7WKJvnXILWzbz8bW6xSN17CzilmfdtcjLP0uVkCw8fUot1ZRvBdD6VFBqxXUtqvbrwKbbC7TM38arxuNC5ngZTBBxqnrmMIe5sL5I57yw2gJd4Ik947VSFNeVu6bmX0ArpNhtEdJEcvlXf5QCSgDTnK2AEPwZP2%2BgkCcyRBDJy1fFgNkqUCPoUT%2FY2y7ZbGXSfu7uz9zOu%2FXHhmuBe92rgxinfHgOMbO2VpPKqC44gvop%2F7kJsLykEi4TZ3M9%2Fl5M5QL0xbDcHzkIss4VoH7yJMbKVsyxLcEXtY8HJDOm0b22GdN2EAvKsaGpOAuTMKPgnsAGOqUBy%2BbUuQRdlQqR%2FWHDncocMnVEbDKo4NGfY0xupn1LVgxylgJeoNxx7v3vQO5djkSpLmxIaWudF6JOyhWVZlEJxqRL%2FGo5qK3omxN5pi0bRNTSUNKcCNJZko%2B8NfjfKWsn%2Bn9qiZ9rc4jzeX3zoXZxG9tO%2BfZ2r%2BapYCveeXeYmVohWXiy4UgLqC8eTHwowep7BwJQETWzsPHcfOoy%2BOmFEIpXQZ4A&X-Amz-Signature=d35be8f42171f532e9592d4ede482c38373641a7daba1dafbc6d1b2044707733&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOX3S6FB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCZQtTvQ40MqEgjXKJDDUIS7NGFgvgun8ObZMz2fZuB9gIgGoAfAVSEtqr2ECuGBZhqlX7tW0xprG4Lk5v0VZW0aHIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAQ%2BuDK0BsQu0QItyrcAwgmvhblO5CI1KXCJ20v1rlj83qOSZTGerGatW4D5Xs%2B7T%2B40oyx1D%2B4xifNW%2FiVkc3y4W%2Bn6pm1ydZ6UUh6KVIf61kPcA60w1flWdNz6l73wpp1DG7%2FzWoK3wvu3hwCjzEHj%2BsIjg0BnFJGvzt8nkaWuV%2Br4CY%2FmJJaXc8yez4imn5Rav22y%2FHFzfPZ776Sy0xdZlYm%2BkWgCxHajXhQnaAGBUt8ssPJjvl31x1Lj5n3%2FbucwZH%2FMEzrQwb8WbxFhh9MtYLads9w%2FLWRwypSgtVIa2vchy%2BDe%2Fyd6dTRCUrWx%2Fqi%2Bp1Hn%2B6pYqVE5n94zk4uf501%2F%2FEmqLT6wiq3Bbo9plef4eQOOkUDJLicwHUE%2FwwyzQ%2BixSdRurBoJ3utrTcXIN9%2FPQvOuq70jmwo7FP3JxAPGDvvRZ8ITkmjknKg6DNz8uLHuVxxcIma8324BLH%2Fn%2B21bSR6%2BUP6q2QRo6l16%2Bz6r8Kx5uTCD6j9KdKiaxh2N9eFCSXqS1uJ0d8FumC49l6tLGykW16A9NEyjQrknFP%2FHTCpBS4QPba%2FNc82NRGILVyUMC8NCdJXr81khlbxzTZ4gRZ%2B0Cerl6lgW%2FOseYQdKO%2BK5K%2BMIqxbDIrw%2BMhF1azygow1q1AbMPPfnsAGOqUBCs%2BEj4QV7fp3n8lMBhVOF45Ca7gnYXSJHkRKrSHMeQoAUAh6Xh2pbD%2FGCePRnXfzxU%2Fx6VzXbtIeb7ErehesHaUDKJLLtUFYlyIoksO%2BI9lXG%2F4AKfuXMn%2BTGb5urr%2BOkIgmD1U24o1HgQiI7aGDk6KnAiOrDV8G9Um6J5nXaS0DBIA58KtRQJhpKUVOfkyfICY5yZgS8CTVoRNhA2gufuB67ajZ&X-Amz-Signature=3a2369f03286415cb199c395f36e6c98ebecd04cd3a532b87bb9a3e7b5a1b366&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
