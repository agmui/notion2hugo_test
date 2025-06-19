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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYE5UBK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtW%2FRUNgF%2BH1iMu4zMjDwzcqMtlcqRKtWImD%2FjUEO%2BmAiEA2Unjrpi7AJLkMAuayRF9xw7zPTBej0Sr54bvxhntPf0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUtsqWdCsA3u%2FCdMCrcA5u0IYQQ9NoQs1vcaoIpdRVPHGQ1syaJDQFx9P71pJKrKRk4j8TFGwbgbjsTZa2auVwmQb2JaKBfHunMiqNolKuDW%2Bzj4kXFFowBrnlAE%2FMIM343fR3qaM6p8%2F2Cq7dYUcCei7VJqdw51Be1B%2BjyGSJVWK4%2BTnOpNt%2BOkg%2BUF6WO4dZbGvEvmzRyjJl58OdsiE0vnc5aCkkXBWFQXNz2XzaSfTDg%2FRaxhY519IZbCZlTPHKEwzloQHCRr8bB5pHn6i4XoX8NOiSAvdb4Jc0OL9uCrawjHdXR%2FbOFV1%2B2sgUa1PTQhSRF8hHYEGD0Ol4scC%2BqyR3BcCAAhNvXKhIfRvm0HDYXDsm1MzceTXger6tmm6UNAJhNvBuY%2F%2FRJc%2FwSrBZjpoMaHeJn2YXxhJerVNUSOyPIg84Y53bgOvJbyFFhjSSDERCYIgNvGo12JPDJkvXEf2PG39w%2FlTsRZdpY%2BkUqJzx6Rji2RVJFm40eS97HiUZGZVSfDLBndeGpWu7KaPjvhZ9sG%2FpFSy1tgDxD0yrj2oEdFdHl3k6DYNatep3Y2Gp38zshYnsRiEbXTN3l33XbFcqpUUto3kTNDlylt8p5wUAfGhgV6kxO2T%2BFuGdccaXSIdLx0pqGG1HCMN7d0MIGOqUBB9%2BSzaNwswmBsrGRf6lvkHs6ucHC8GLCf%2FZ85m3xjdSGYV2duuC2suGJhOcJ1taI95OwEUUK%2BZzl0DwKJCKbT8BnHamV9VJDNrqNKyjluMh3E%2FB4776Je3S1J0VVhVdt%2BZ%2Bd42Q8%2FWhuOVKUq9ifLXDttVGBfWWPAK5pPh7gojl%2Fu3Jl7zMuuYivwNLTxqoVwfLn%2BfmCVPGarMabuQFJOxk6cMlI&X-Amz-Signature=c26d05192819a2eb7888eb75d558cd1ea618d0a4b2cd5c1c3aa7c68c37d2cf70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYE5UBK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtW%2FRUNgF%2BH1iMu4zMjDwzcqMtlcqRKtWImD%2FjUEO%2BmAiEA2Unjrpi7AJLkMAuayRF9xw7zPTBej0Sr54bvxhntPf0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUtsqWdCsA3u%2FCdMCrcA5u0IYQQ9NoQs1vcaoIpdRVPHGQ1syaJDQFx9P71pJKrKRk4j8TFGwbgbjsTZa2auVwmQb2JaKBfHunMiqNolKuDW%2Bzj4kXFFowBrnlAE%2FMIM343fR3qaM6p8%2F2Cq7dYUcCei7VJqdw51Be1B%2BjyGSJVWK4%2BTnOpNt%2BOkg%2BUF6WO4dZbGvEvmzRyjJl58OdsiE0vnc5aCkkXBWFQXNz2XzaSfTDg%2FRaxhY519IZbCZlTPHKEwzloQHCRr8bB5pHn6i4XoX8NOiSAvdb4Jc0OL9uCrawjHdXR%2FbOFV1%2B2sgUa1PTQhSRF8hHYEGD0Ol4scC%2BqyR3BcCAAhNvXKhIfRvm0HDYXDsm1MzceTXger6tmm6UNAJhNvBuY%2F%2FRJc%2FwSrBZjpoMaHeJn2YXxhJerVNUSOyPIg84Y53bgOvJbyFFhjSSDERCYIgNvGo12JPDJkvXEf2PG39w%2FlTsRZdpY%2BkUqJzx6Rji2RVJFm40eS97HiUZGZVSfDLBndeGpWu7KaPjvhZ9sG%2FpFSy1tgDxD0yrj2oEdFdHl3k6DYNatep3Y2Gp38zshYnsRiEbXTN3l33XbFcqpUUto3kTNDlylt8p5wUAfGhgV6kxO2T%2BFuGdccaXSIdLx0pqGG1HCMN7d0MIGOqUBB9%2BSzaNwswmBsrGRf6lvkHs6ucHC8GLCf%2FZ85m3xjdSGYV2duuC2suGJhOcJ1taI95OwEUUK%2BZzl0DwKJCKbT8BnHamV9VJDNrqNKyjluMh3E%2FB4776Je3S1J0VVhVdt%2BZ%2Bd42Q8%2FWhuOVKUq9ifLXDttVGBfWWPAK5pPh7gojl%2Fu3Jl7zMuuYivwNLTxqoVwfLn%2BfmCVPGarMabuQFJOxk6cMlI&X-Amz-Signature=3db51bdfee0361f3416a56f21e141967e1797baed8739e442545085ce7a1885f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYE5UBK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtW%2FRUNgF%2BH1iMu4zMjDwzcqMtlcqRKtWImD%2FjUEO%2BmAiEA2Unjrpi7AJLkMAuayRF9xw7zPTBej0Sr54bvxhntPf0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUtsqWdCsA3u%2FCdMCrcA5u0IYQQ9NoQs1vcaoIpdRVPHGQ1syaJDQFx9P71pJKrKRk4j8TFGwbgbjsTZa2auVwmQb2JaKBfHunMiqNolKuDW%2Bzj4kXFFowBrnlAE%2FMIM343fR3qaM6p8%2F2Cq7dYUcCei7VJqdw51Be1B%2BjyGSJVWK4%2BTnOpNt%2BOkg%2BUF6WO4dZbGvEvmzRyjJl58OdsiE0vnc5aCkkXBWFQXNz2XzaSfTDg%2FRaxhY519IZbCZlTPHKEwzloQHCRr8bB5pHn6i4XoX8NOiSAvdb4Jc0OL9uCrawjHdXR%2FbOFV1%2B2sgUa1PTQhSRF8hHYEGD0Ol4scC%2BqyR3BcCAAhNvXKhIfRvm0HDYXDsm1MzceTXger6tmm6UNAJhNvBuY%2F%2FRJc%2FwSrBZjpoMaHeJn2YXxhJerVNUSOyPIg84Y53bgOvJbyFFhjSSDERCYIgNvGo12JPDJkvXEf2PG39w%2FlTsRZdpY%2BkUqJzx6Rji2RVJFm40eS97HiUZGZVSfDLBndeGpWu7KaPjvhZ9sG%2FpFSy1tgDxD0yrj2oEdFdHl3k6DYNatep3Y2Gp38zshYnsRiEbXTN3l33XbFcqpUUto3kTNDlylt8p5wUAfGhgV6kxO2T%2BFuGdccaXSIdLx0pqGG1HCMN7d0MIGOqUBB9%2BSzaNwswmBsrGRf6lvkHs6ucHC8GLCf%2FZ85m3xjdSGYV2duuC2suGJhOcJ1taI95OwEUUK%2BZzl0DwKJCKbT8BnHamV9VJDNrqNKyjluMh3E%2FB4776Je3S1J0VVhVdt%2BZ%2Bd42Q8%2FWhuOVKUq9ifLXDttVGBfWWPAK5pPh7gojl%2Fu3Jl7zMuuYivwNLTxqoVwfLn%2BfmCVPGarMabuQFJOxk6cMlI&X-Amz-Signature=e106b93b299a5ae3a5205128e712abd6d37df9612c49c9178cee760aa6a2ed8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2T3PPF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpPnTjqNLZXOCAvRmwSnhhoLO1lL%2FrT7hUV1DNiXKZvAiAmA3jBadEpXludpJV%2Bbyvl9eQ5T%2FuqRdA%2Bjp8uTCmjOyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5OqNldeHPWMmKaAvKtwD3vb%2F0w3NScIUGZ23zllLD4w6OJhC%2BCpAYhihWERe%2FYudk68UHvgt4J9xhhD5sph4GCMaWRNqjQIEcTZc4u%2BN4flDSbOn3ST0cM1mGpsT6QvcFkliuIqphKZYgbtOO%2Fa9Ug4YLCqoxgfA0nGZUtCNqA6lG48QtH4RXROR3kc93vLyKYDbm3rmVQZzjfuEpfdOMSnJ%2FMdrYGNUdCV2r6C56O%2BS9cY25uA9EuPP3nMS%2BiPGqHX1qawm4gF0nDkOVWBhFHIYBge6JGqbK%2FCIxUf4e7N01R378vpAY94lpBn0dJXeahwgdnB%2Baqz%2FR08QpsVbdhlJ%2FF7oyshqCPEabZIa9ABK0PUAnsBCyng0%2FbVJxNGxFiLTQXfjWWOO56xva1cFcyvWprmv%2Fly9S2QdnWS%2F4d54Rdz93Wne5%2BY3bakhY9IOQpBftbE9PbXcKfTgciSZSaWnPvdlL5u6YMoNz8EszJTJjjmwCWoGYfh%2FIjfYyrkbeokUVhc7dxGjMXhL1AsNfQ89jVXsK%2BQDAFwfKTCplQSb0%2BrLrxvjTWWh14QWTCppS8ZddHj3enZvjEuYhLJ7qil5OoHrdhhvQVLRY6eRuV2zNMkhm3tJeFlUQT6yTROG45HLuLE6vackTgAw193QwgY6pgFYIYdFU8LTxUCMoe5zKwJwTTvNzJH3w2mzD3%2FHtq%2FL1w3mJaLQQ2LDxceLymxQIY9%2FxhtWoU5EsVJCOX5AM4FgfLLGNArfY6yFv5qp9nG8KGrRbTjJr066gSMELUUVQUyy6F5T%2Fr9V6VdC9OYaqpi2%2FyGt60uXcD30G7L3%2FiBljvjVOhMdJHeeQdQpz46GozKiAREyEpmRP504EbDQIBpkOXe3grql&X-Amz-Signature=80b38dbf42a21a7204166b2179dcf95da8267290d594400dce7c744fa4f35684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAZ4WKK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyyXdn9eWil%2B7SdDvQZBxGZLZ1YhuGCUcieUurUCChMAIgWGCKBVjpyphHeHiB%2BL5bs4nnXCTBlSUFCfN8amJYQQ4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORPuTedcTPtYBuZCCrcA21TRsydJoVCBo4YKLoEKiMCplI3snge1og9VzxUOCbALbPGgf3lthwjpVUJXKZ78r0mSH9WRV2aF08ntJtvK8HvBwTOsG%2BlRKvhoq1vOnhMMpnYsJGnPlOsi%2FKFt8z%2Bk1z2e%2BgD2cPRtPIEikXVBqh68djJ1X8UsXJh6jv4CbKpg75%2FU4omqfDWcWCiI7O44xv8Be%2FKaR30fPiRON4pGjI5t36QoSRfxWd4Rekr3XOTkSsMd1tHa4JwzAuZ0KCC0%2B7SWLKHZI6MPbJbNEBtFJ9fRouGqnNvY50dVml0enrAv7STRLCFInM5ytn8tSjQasLLw0iZdaunF1aJXI3mpoUxY7Xs1ypvOUn5XApzRIISgJ9%2BXJiEAUOLPoUaSuQl1tBXs%2BUOhCBWwZASY3zVWTm7loTnKZhBVjI84Xdjbnrjt8tcpK7Y00GxsNOZu9CXrymh78u0UHTQAElPSH3dnmbwlH0kaJvvc%2F5BlR92gl7%2BMFajZv9H8U%2BVguCI6QEzU6neyqS8XTofH7VjAOgNM56StGlYgzWevUwy7Lht34gjFfD3vWiMj43s5pbH%2B5roBBf8QaAmoWsLsdFbHGthGbkjudtkma%2Fa8Jx2coSNirKTvTnQqGiy9xmFnHILMPne0MIGOqUBqnaSXtIWOcNlc7frfcrgyeoGGNvcLHSOwGSZ7%2FSJBXi91hq1LKPuSPy9Hy%2B%2FA%2Bh4Prxgvh0MTHlHP9%2F2ynYeRcWVTvcGTAZ%2BGVG8UVbPhqncyu6ArxYrdG1Ohr38CfHL0lc9u0j0tISTUx4QVV9O%2BRuvva8nzYtps9qW6yNCyXEi4qvqXD0LhlCSUaPiD86F%2BpxYnOSosxUQY3veiI7t%2FsqgLxrb&X-Amz-Signature=9e3ddaecb449792d2ebf882c278f922fe675d004898ace84de8b0413853351d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYE5UBK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtW%2FRUNgF%2BH1iMu4zMjDwzcqMtlcqRKtWImD%2FjUEO%2BmAiEA2Unjrpi7AJLkMAuayRF9xw7zPTBej0Sr54bvxhntPf0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUtsqWdCsA3u%2FCdMCrcA5u0IYQQ9NoQs1vcaoIpdRVPHGQ1syaJDQFx9P71pJKrKRk4j8TFGwbgbjsTZa2auVwmQb2JaKBfHunMiqNolKuDW%2Bzj4kXFFowBrnlAE%2FMIM343fR3qaM6p8%2F2Cq7dYUcCei7VJqdw51Be1B%2BjyGSJVWK4%2BTnOpNt%2BOkg%2BUF6WO4dZbGvEvmzRyjJl58OdsiE0vnc5aCkkXBWFQXNz2XzaSfTDg%2FRaxhY519IZbCZlTPHKEwzloQHCRr8bB5pHn6i4XoX8NOiSAvdb4Jc0OL9uCrawjHdXR%2FbOFV1%2B2sgUa1PTQhSRF8hHYEGD0Ol4scC%2BqyR3BcCAAhNvXKhIfRvm0HDYXDsm1MzceTXger6tmm6UNAJhNvBuY%2F%2FRJc%2FwSrBZjpoMaHeJn2YXxhJerVNUSOyPIg84Y53bgOvJbyFFhjSSDERCYIgNvGo12JPDJkvXEf2PG39w%2FlTsRZdpY%2BkUqJzx6Rji2RVJFm40eS97HiUZGZVSfDLBndeGpWu7KaPjvhZ9sG%2FpFSy1tgDxD0yrj2oEdFdHl3k6DYNatep3Y2Gp38zshYnsRiEbXTN3l33XbFcqpUUto3kTNDlylt8p5wUAfGhgV6kxO2T%2BFuGdccaXSIdLx0pqGG1HCMN7d0MIGOqUBB9%2BSzaNwswmBsrGRf6lvkHs6ucHC8GLCf%2FZ85m3xjdSGYV2duuC2suGJhOcJ1taI95OwEUUK%2BZzl0DwKJCKbT8BnHamV9VJDNrqNKyjluMh3E%2FB4776Je3S1J0VVhVdt%2BZ%2Bd42Q8%2FWhuOVKUq9ifLXDttVGBfWWPAK5pPh7gojl%2Fu3Jl7zMuuYivwNLTxqoVwfLn%2BfmCVPGarMabuQFJOxk6cMlI&X-Amz-Signature=33046885cad600e7bdc58a18aeff736f459dca369b322ea0f2819dae15180647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
