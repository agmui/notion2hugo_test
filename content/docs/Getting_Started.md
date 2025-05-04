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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZBF6HG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIC1aEBZTcp8%2BEsBbNDwxlMN%2FSpTzwvE5%2F52gqoKyT6a7AiEA1rZAXl6221mWSjERlxu6HIwrEJQGZKX6lpB1Zm7jTsYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAYq32tOqgPtwn5HbSrcAxJ4Bb3kO264hFQ6RZq8u6pIvFaR9JHL%2BkVntoIA3n2prqDA0m2l9AsB0ti9aL9bdeFUiFWq9wbubpaJU3C%2BX0DKlVWGz98dtZ3Mdt6Ge45WcxMfJf08ig3Zm%2BZUaCdbi0638P6P6ORkf8H%2F2HLW2rfnZu2Jwm5xvp3esE1xIXmkoxzGg%2FBzQ0q39pC2WIESgFvpFQdzp4vo1dZFIlq4bCdAIibJML%2FOv7UYhOgj1cCftmVMxzCJrs3YuiRjPUg3z%2B%2BGmLZFyOdaNOIVyAhPS1c%2FJHVP93SS9qUIuYX7W1fFBL2YwVMB4LT0PO9u3G6%2F29F0EWhZ6EgxdFIih842r5emf22H4TyGhPr393XLqgI%2B50FDCIpFoHgUXZxhgjxO22XueBusxO7gKge5jnGiO6RR5qXNwoEUDZpEHVK0W729N4w1UJ843torHe8jNlAjCVH%2FW3aYymKMrh0TWw%2FeWorSLJmSpy%2BkAPa4d0yUUPr7d53EVZGBEORg3dZDlKLUMCynE%2BbTxXWxLU%2FlDHHhHP7UfS5m0CcSAEhYWDy8HeOJvuhSMmTISeI2WZ04WQq41vQIcYCxmvvVbJJQwG%2FsohA5iYmCgg%2Feh11I%2B3KruR3uAF0mCAaJ7UO7Mhr2MLS73sAGOqUBIf5Mn148GUwXvtan4n%2BlANFscRf0tZcWNqWKrBXZWyd4ca1Y0seGuOFBsgl%2BdGqwUxOgmIfbFexle9bo64fDkpts%2B26n%2FkZJ2iyXaIv7T36aXW6JK%2FsL9dGax0HTV0P63uhKPWe%2BVEzU9vJI7ESSgej9Z7CxEVYCsqlWJJgQ44aYwKRnazPurGGX2aWd4zDbRwROma8bikJrM1DP%2BddWrx9CR1qr&X-Amz-Signature=52a695037e11fb257e7a7b4d8d52253882e49cc424d928183a0e8a4a861bcd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZBF6HG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIC1aEBZTcp8%2BEsBbNDwxlMN%2FSpTzwvE5%2F52gqoKyT6a7AiEA1rZAXl6221mWSjERlxu6HIwrEJQGZKX6lpB1Zm7jTsYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAYq32tOqgPtwn5HbSrcAxJ4Bb3kO264hFQ6RZq8u6pIvFaR9JHL%2BkVntoIA3n2prqDA0m2l9AsB0ti9aL9bdeFUiFWq9wbubpaJU3C%2BX0DKlVWGz98dtZ3Mdt6Ge45WcxMfJf08ig3Zm%2BZUaCdbi0638P6P6ORkf8H%2F2HLW2rfnZu2Jwm5xvp3esE1xIXmkoxzGg%2FBzQ0q39pC2WIESgFvpFQdzp4vo1dZFIlq4bCdAIibJML%2FOv7UYhOgj1cCftmVMxzCJrs3YuiRjPUg3z%2B%2BGmLZFyOdaNOIVyAhPS1c%2FJHVP93SS9qUIuYX7W1fFBL2YwVMB4LT0PO9u3G6%2F29F0EWhZ6EgxdFIih842r5emf22H4TyGhPr393XLqgI%2B50FDCIpFoHgUXZxhgjxO22XueBusxO7gKge5jnGiO6RR5qXNwoEUDZpEHVK0W729N4w1UJ843torHe8jNlAjCVH%2FW3aYymKMrh0TWw%2FeWorSLJmSpy%2BkAPa4d0yUUPr7d53EVZGBEORg3dZDlKLUMCynE%2BbTxXWxLU%2FlDHHhHP7UfS5m0CcSAEhYWDy8HeOJvuhSMmTISeI2WZ04WQq41vQIcYCxmvvVbJJQwG%2FsohA5iYmCgg%2Feh11I%2B3KruR3uAF0mCAaJ7UO7Mhr2MLS73sAGOqUBIf5Mn148GUwXvtan4n%2BlANFscRf0tZcWNqWKrBXZWyd4ca1Y0seGuOFBsgl%2BdGqwUxOgmIfbFexle9bo64fDkpts%2B26n%2FkZJ2iyXaIv7T36aXW6JK%2FsL9dGax0HTV0P63uhKPWe%2BVEzU9vJI7ESSgej9Z7CxEVYCsqlWJJgQ44aYwKRnazPurGGX2aWd4zDbRwROma8bikJrM1DP%2BddWrx9CR1qr&X-Amz-Signature=dbfb015c83ec45130885aad054dbffe0abdfd89a8d8e3f6842c882cb51e2b88e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZBF6HG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIC1aEBZTcp8%2BEsBbNDwxlMN%2FSpTzwvE5%2F52gqoKyT6a7AiEA1rZAXl6221mWSjERlxu6HIwrEJQGZKX6lpB1Zm7jTsYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAYq32tOqgPtwn5HbSrcAxJ4Bb3kO264hFQ6RZq8u6pIvFaR9JHL%2BkVntoIA3n2prqDA0m2l9AsB0ti9aL9bdeFUiFWq9wbubpaJU3C%2BX0DKlVWGz98dtZ3Mdt6Ge45WcxMfJf08ig3Zm%2BZUaCdbi0638P6P6ORkf8H%2F2HLW2rfnZu2Jwm5xvp3esE1xIXmkoxzGg%2FBzQ0q39pC2WIESgFvpFQdzp4vo1dZFIlq4bCdAIibJML%2FOv7UYhOgj1cCftmVMxzCJrs3YuiRjPUg3z%2B%2BGmLZFyOdaNOIVyAhPS1c%2FJHVP93SS9qUIuYX7W1fFBL2YwVMB4LT0PO9u3G6%2F29F0EWhZ6EgxdFIih842r5emf22H4TyGhPr393XLqgI%2B50FDCIpFoHgUXZxhgjxO22XueBusxO7gKge5jnGiO6RR5qXNwoEUDZpEHVK0W729N4w1UJ843torHe8jNlAjCVH%2FW3aYymKMrh0TWw%2FeWorSLJmSpy%2BkAPa4d0yUUPr7d53EVZGBEORg3dZDlKLUMCynE%2BbTxXWxLU%2FlDHHhHP7UfS5m0CcSAEhYWDy8HeOJvuhSMmTISeI2WZ04WQq41vQIcYCxmvvVbJJQwG%2FsohA5iYmCgg%2Feh11I%2B3KruR3uAF0mCAaJ7UO7Mhr2MLS73sAGOqUBIf5Mn148GUwXvtan4n%2BlANFscRf0tZcWNqWKrBXZWyd4ca1Y0seGuOFBsgl%2BdGqwUxOgmIfbFexle9bo64fDkpts%2B26n%2FkZJ2iyXaIv7T36aXW6JK%2FsL9dGax0HTV0P63uhKPWe%2BVEzU9vJI7ESSgej9Z7CxEVYCsqlWJJgQ44aYwKRnazPurGGX2aWd4zDbRwROma8bikJrM1DP%2BddWrx9CR1qr&X-Amz-Signature=890a686f3c66e6dd75196b559a27c5f7807395ebc64184eac5da8d4288622b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YORO5DMV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD3qRqJ8ymp7ANWIeAjMATFbj%2FTIAyrCnRSvLlex%2FM5rQIgFLm1LPrLTBx5G8vlTwlt8y0f3k3eFIu9d3IPzxDEbLAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBATknY2cY9k6AE%2BLCrcAzBZayItnMZ3Jp3RSoUMGF3diRvEpkwtT3PtkspyH3BQaniKe9grff13qzxBvFQTNaor5BQVKVskb7PrY%2Fr0Pj%2BuBodgJ4bt%2BW6WS%2Fck7mGbPx85qNOlhVqvrKuotdtLtc8TU%2FviZE1cFOVUzLRAdhV3JI5Qnpd6kvIG3DlUDmEHFady4e5vXwyrCzEqNesZtT%2BKE41cG3Xbw26ocDiOUlc3mxBIhCm46nl2Wno%2FL922dwxwqV1t8RMHQPCFwxh8uQVizI%2FC9Gfsg9E%2Bdv%2BAP2FXhbzihQdl6CqpOe1Qu%2Fm4oCBunSkto2v7ZTqtq%2FuLCWykq6hyGMAycG0oBQPEeag4P%2BFd9ca3Wq%2F4ptoQmLb%2BwqXkFxk3KUAG97JPQsHZmgWY5Pq3WP2%2Bh0NSMIQ7G%2FMjMEzmHLB%2BSJVAnOIM9Qu6UFlRRhSadfKUVTFja24sLIxtdJCqjkWRKmfQCWt0PA6dWvOiY0yBmIMuVUpvbS6JrmHip3IttqsdbvOTpKR2XNlD5dzRrwo1ry8zBJxEdEfX6FflzdI051vHGTQJfnI9osuMuToszZnvRywnxsf2QcZ%2Brw7RG0sM7a%2FxJwq22IigseROkVAsHBkbyEoxakTYxMcYz%2Fed%2F%2Fl7Vk0IMJi73sAGOqUBOI7Ke5lYlOvAQT33cyfGvpn7%2Fm4QeO1aepCYWliFZf2rK0ewpC2p7x8riACerDJbrn5loCvlNiClGtzDOz3IBWePBJdcLWyqLX%2BzF4EmE%2FKdldahzL9%2FSao0%2BYlKEiBMgsJFL0QKSBe4w%2Bex%2BbS9ywfeBK8v983O1x45Uk38a%2FDY02tAN52s%2FSehbkq0Fm4wzvCKujxl4lXXP%2BEzBls09O8G0IwQ&X-Amz-Signature=8f3aa65782825ee95b317dd7dd907effece2683ea4e6dfafa17639d12adc2b22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHKJWPD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCaQzU563mi4vPcSPWZ8JGnylMZo%2FoCks835y14eFXI0gIgdQqQeQIlwfPvK9NN10wyft8XLjV9Yb5RA6YpfHzdkcUq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOAxmbec0FNyQxhk%2BCrcA3SFHgvr6PFyxhJRuUzsFehwZA5cJZDvLUsAULvXd72KTGK55n3bTpN%2BmSXe3hEZcjebMbGs279GTIS5PIhgz3BWfq4Ya18QvdMthN7jS6rFhRLy%2FmrTXQn4vj9O3wgK2yGTZ2jQKxpR%2BKLq3tL%2B9FhFBUr8zioGoDDF0xBTaR3YxJCqofMlrPKA8uzr4FQoWZI9ME%2FTtpsaHAIPZ%2Fhm8JjzcZRUDpwlKhFl%2Bc%2B0LoNK8OV%2FqNxTH17ZUSrVEiDMgXkezEH%2B3Fg75XDepd5SlWFl5iMY7Nb8OgI6nT2x3oWzYnyryken77hxwtWr3ZUN7jRmy7593QZ6%2FzjpwPtUWDTxuPsai0%2FseeoaJE652PLur6ZyhWqNLlsAQHKnMc7xV%2B3eKP37o8V9S9gfIT56WsYlB%2BuVGzMU7gB3ZJMdpHYzxOTK4RK4AwLofcApciLEob2MMpbl88gMhaAj2MDncnlnXYpzGDPyfGzVqBM2T%2BiR565EjTkWZ9hMbuvWrpGFsjOBAV7Vi44YT%2FiA%2FjD1g4RPprsFjXzzOwLiQwJRKrejWsqUm68m1NMQHvhq8Qi3hqbqaB3Xb1B7SyE60UgDEbUgCulDSIxBjTczBNnM9fmG0j%2BztVAFIT2HxYtEMOm63sAGOqUB9Sa2ekwcfskrye9e7FUfGU48%2BLaQdVvSItxMo%2FF0cKuWiocTtQnqwocEQYyY0BWdlxDtlsv9jj88cAZctKaVbrqATjWlZyIG2zQVS5Ou8BQomIEeL7HR0zWE%2B8MgfuLuQBlQki%2BZse%2BAW5zJGopZepzpXqHomuwoofYkyKRZ%2BUqiETw54E%2BRt1uN0w41Tl9VGbq4%2FdsY0vhvPs5JTe714hsdBIZ8&X-Amz-Signature=6e4b659abac10f5ddfb3aacca1d4a500741d955492e51bcd7334d91c065a9d37&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZBF6HG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIC1aEBZTcp8%2BEsBbNDwxlMN%2FSpTzwvE5%2F52gqoKyT6a7AiEA1rZAXl6221mWSjERlxu6HIwrEJQGZKX6lpB1Zm7jTsYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAYq32tOqgPtwn5HbSrcAxJ4Bb3kO264hFQ6RZq8u6pIvFaR9JHL%2BkVntoIA3n2prqDA0m2l9AsB0ti9aL9bdeFUiFWq9wbubpaJU3C%2BX0DKlVWGz98dtZ3Mdt6Ge45WcxMfJf08ig3Zm%2BZUaCdbi0638P6P6ORkf8H%2F2HLW2rfnZu2Jwm5xvp3esE1xIXmkoxzGg%2FBzQ0q39pC2WIESgFvpFQdzp4vo1dZFIlq4bCdAIibJML%2FOv7UYhOgj1cCftmVMxzCJrs3YuiRjPUg3z%2B%2BGmLZFyOdaNOIVyAhPS1c%2FJHVP93SS9qUIuYX7W1fFBL2YwVMB4LT0PO9u3G6%2F29F0EWhZ6EgxdFIih842r5emf22H4TyGhPr393XLqgI%2B50FDCIpFoHgUXZxhgjxO22XueBusxO7gKge5jnGiO6RR5qXNwoEUDZpEHVK0W729N4w1UJ843torHe8jNlAjCVH%2FW3aYymKMrh0TWw%2FeWorSLJmSpy%2BkAPa4d0yUUPr7d53EVZGBEORg3dZDlKLUMCynE%2BbTxXWxLU%2FlDHHhHP7UfS5m0CcSAEhYWDy8HeOJvuhSMmTISeI2WZ04WQq41vQIcYCxmvvVbJJQwG%2FsohA5iYmCgg%2Feh11I%2B3KruR3uAF0mCAaJ7UO7Mhr2MLS73sAGOqUBIf5Mn148GUwXvtan4n%2BlANFscRf0tZcWNqWKrBXZWyd4ca1Y0seGuOFBsgl%2BdGqwUxOgmIfbFexle9bo64fDkpts%2B26n%2FkZJ2iyXaIv7T36aXW6JK%2FsL9dGax0HTV0P63uhKPWe%2BVEzU9vJI7ESSgej9Z7CxEVYCsqlWJJgQ44aYwKRnazPurGGX2aWd4zDbRwROma8bikJrM1DP%2BddWrx9CR1qr&X-Amz-Signature=fecce224c3ccf98160318057f47385d1344391fa30a0eacfe7b821aa7ebfb4be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
