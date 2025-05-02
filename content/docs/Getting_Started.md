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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3I5RK7Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDmvuxQCIh7bJ9g8zqR9%2FVtsEZZJ%2F0QrLIyBfz6hYPSNAIhAM%2B3JCkIJG1GO6nhUtU5ApSpsdY5zscaF16fjn4F8eeyKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygD80OfG%2BHnhuPFdcq3APu6wuZ%2B%2F6Cwy8l0RlHZD6EN%2FPEDqjmlUAhbOsgh0nRVB5bvId7zxRfQEz0nwvcTQCqo88IU6KzWAmOGSY7Ne31A%2Bn1z8cLxZeO8T2mSAY5EeV8lBA1ltzYdp20npjaahAsCxSbHKQt%2BB4v2dc2ZymWY1VaMnE8gkLNncppoqBPhufJYdV1b4QTEIihjrd4BLZvM%2BXfSol9l2XMKq5OK9GrMlAG89fkLSIlOdzOH2l%2BwKC2PKEuoCrqtDHApBe89JktcvY1hxcS%2FrySlXfsJLR2XrFcavuTlW2eicNHMSDryMhB%2B%2F%2Bi3H%2B3OjTxIGy8lC0Dkre67SYhgGWK%2B80170jg4mUr%2BKEya1UdCRlkjy99H2VOL3nBmcxplvRYXDRHlsCj3qAZZ631Nq6D%2B99GIATg9qI4Mb4iOaA7gxSjs1g6pQd%2FPqWIu9MtH%2B1xaRSRM1RaXV7Heijk9CQPRry9dqmOqgxMAMFgue6tDwh2E7JM6gROgxDFCCjOf62QjEmp51xFtG7Pgtq9ES77RS4Jx%2BqgeBsIZ2UbAFZdqLskjqWKlurmIYif8P8%2F5OGvpKtw%2BffxFYBN2wHhPvpNqSzHbk2jR5HOAguit%2BEXn0HLjRPn2eEFCpEEykAgWfj%2F5DDujdPABjqkARyJaDAMBCj2fn36f8pcPXjQyiuN4zPc%2FcV7ri%2F97rmZe35VhBsI1kZZA3l0ycNUjf5iLpzedm0gDnBwQ%2BFn%2B%2FCi7fJvpZ%2FKTl8xmutxdsY2%2FFresrI69lFsOWHTaJ%2BLGVznsJxJDiCoVobJdfwSe20ICumBgy3J2FUjcNV2MSRKc4Cqg62EsfqwGO1RzcAhE5sRf9LYHTCFABwhCzkfuVnGe%2FeU&X-Amz-Signature=cc1c84b349be4465584dcc2beca2e6676c8577bf064d0baf10a05d10975a1b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3I5RK7Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDmvuxQCIh7bJ9g8zqR9%2FVtsEZZJ%2F0QrLIyBfz6hYPSNAIhAM%2B3JCkIJG1GO6nhUtU5ApSpsdY5zscaF16fjn4F8eeyKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygD80OfG%2BHnhuPFdcq3APu6wuZ%2B%2F6Cwy8l0RlHZD6EN%2FPEDqjmlUAhbOsgh0nRVB5bvId7zxRfQEz0nwvcTQCqo88IU6KzWAmOGSY7Ne31A%2Bn1z8cLxZeO8T2mSAY5EeV8lBA1ltzYdp20npjaahAsCxSbHKQt%2BB4v2dc2ZymWY1VaMnE8gkLNncppoqBPhufJYdV1b4QTEIihjrd4BLZvM%2BXfSol9l2XMKq5OK9GrMlAG89fkLSIlOdzOH2l%2BwKC2PKEuoCrqtDHApBe89JktcvY1hxcS%2FrySlXfsJLR2XrFcavuTlW2eicNHMSDryMhB%2B%2F%2Bi3H%2B3OjTxIGy8lC0Dkre67SYhgGWK%2B80170jg4mUr%2BKEya1UdCRlkjy99H2VOL3nBmcxplvRYXDRHlsCj3qAZZ631Nq6D%2B99GIATg9qI4Mb4iOaA7gxSjs1g6pQd%2FPqWIu9MtH%2B1xaRSRM1RaXV7Heijk9CQPRry9dqmOqgxMAMFgue6tDwh2E7JM6gROgxDFCCjOf62QjEmp51xFtG7Pgtq9ES77RS4Jx%2BqgeBsIZ2UbAFZdqLskjqWKlurmIYif8P8%2F5OGvpKtw%2BffxFYBN2wHhPvpNqSzHbk2jR5HOAguit%2BEXn0HLjRPn2eEFCpEEykAgWfj%2F5DDujdPABjqkARyJaDAMBCj2fn36f8pcPXjQyiuN4zPc%2FcV7ri%2F97rmZe35VhBsI1kZZA3l0ycNUjf5iLpzedm0gDnBwQ%2BFn%2B%2FCi7fJvpZ%2FKTl8xmutxdsY2%2FFresrI69lFsOWHTaJ%2BLGVznsJxJDiCoVobJdfwSe20ICumBgy3J2FUjcNV2MSRKc4Cqg62EsfqwGO1RzcAhE5sRf9LYHTCFABwhCzkfuVnGe%2FeU&X-Amz-Signature=c1f9e3e7837a2429102ccbd3cabd4ddc638f705a5f05100ffbf570c41cead7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3I5RK7Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDmvuxQCIh7bJ9g8zqR9%2FVtsEZZJ%2F0QrLIyBfz6hYPSNAIhAM%2B3JCkIJG1GO6nhUtU5ApSpsdY5zscaF16fjn4F8eeyKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygD80OfG%2BHnhuPFdcq3APu6wuZ%2B%2F6Cwy8l0RlHZD6EN%2FPEDqjmlUAhbOsgh0nRVB5bvId7zxRfQEz0nwvcTQCqo88IU6KzWAmOGSY7Ne31A%2Bn1z8cLxZeO8T2mSAY5EeV8lBA1ltzYdp20npjaahAsCxSbHKQt%2BB4v2dc2ZymWY1VaMnE8gkLNncppoqBPhufJYdV1b4QTEIihjrd4BLZvM%2BXfSol9l2XMKq5OK9GrMlAG89fkLSIlOdzOH2l%2BwKC2PKEuoCrqtDHApBe89JktcvY1hxcS%2FrySlXfsJLR2XrFcavuTlW2eicNHMSDryMhB%2B%2F%2Bi3H%2B3OjTxIGy8lC0Dkre67SYhgGWK%2B80170jg4mUr%2BKEya1UdCRlkjy99H2VOL3nBmcxplvRYXDRHlsCj3qAZZ631Nq6D%2B99GIATg9qI4Mb4iOaA7gxSjs1g6pQd%2FPqWIu9MtH%2B1xaRSRM1RaXV7Heijk9CQPRry9dqmOqgxMAMFgue6tDwh2E7JM6gROgxDFCCjOf62QjEmp51xFtG7Pgtq9ES77RS4Jx%2BqgeBsIZ2UbAFZdqLskjqWKlurmIYif8P8%2F5OGvpKtw%2BffxFYBN2wHhPvpNqSzHbk2jR5HOAguit%2BEXn0HLjRPn2eEFCpEEykAgWfj%2F5DDujdPABjqkARyJaDAMBCj2fn36f8pcPXjQyiuN4zPc%2FcV7ri%2F97rmZe35VhBsI1kZZA3l0ycNUjf5iLpzedm0gDnBwQ%2BFn%2B%2FCi7fJvpZ%2FKTl8xmutxdsY2%2FFresrI69lFsOWHTaJ%2BLGVznsJxJDiCoVobJdfwSe20ICumBgy3J2FUjcNV2MSRKc4Cqg62EsfqwGO1RzcAhE5sRf9LYHTCFABwhCzkfuVnGe%2FeU&X-Amz-Signature=b2d02f4ca4e7eb1f34682e48158ded50e4f3e1c42f70f8106e98b9c6165e2749&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHABLJJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC7aks0b5%2BrplythTVorh4TYwXIlEQaCPt89Kdx6AjeewIhANuV%2FSCgVoXHhazRyJS3cFRd4G7uFLA8J%2BNX0NWlCb2iKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr9mHFnwrEh7ZFVj4q3AMQUWocrZThqmH49qoD51hhK5q1aJbd8unJKLC6EnhC3CFrP6Eajd5xa531wchs1srN3XBUVHvL4%2Ffm1so9b2VUSUXy9MIqTEcQvbLI8CFvlxkLmL%2FyLVBnSyhy1nJ1KBi0yRy0FC9bdQBzVnAdFMfNEWytn%2FCSboRKfjAVYErXUZC6z8VhyTRRSmhqt6ayE246GNBBKVXYYeRTvbie92OHXc33CDQwFxLywf31hmyRuxyV%2F%2FqximJ9FLiigHC8bt19aqUdTGm7VLj8KYvjn4RbaTMOhIajvPe1yx8R7IBFaYx783xa1cc%2BckLi5v4OyU4WaJqQTkVhjRGNkQ73QbWqTn75aWZI5%2B6V%2Bdk5e2pRHkgmHBsa4w6mEpUxReeaZZj%2BXsGINSxs%2FYr86%2FB%2FDuSGfsU7If%2FAkjrU3%2F4vWtZsUJB5qVx9hkGrc5Uit3i5gJ37Or%2BF2cCl24fPZasG5q23UhL7iS8%2FoQMEOEAns0BomD0nNCfTxf2GQnif7TVVY0hDCa6cYtzxIyaO5vM0TzjTUaHc9E04p2D6yszjrC1f7VgXuSNt3SxEPAMCB2N5HTS32k9yOuTGRIdvZxDxy%2F3uRLqy1hIxWwvtrpvazxowaRMyGzDA9rXQY5lQ9jDVjtPABjqkAQ5HV2uBwEBW2zxL2szkJXNFtNA4T2KTdOuyD%2FiDpb0dPkf2%2FOuO0ksktDL65Xrpj2r7CD%2FC1dQGdza3NY1Hd%2FpGTnBoHG77vqtLHLz%2BPrS2TX4xRnBX369Q%2BgjRqwzuHUV3neCoax26appAD2TRMdbe4HPBb25tRirSzcWFakEUXtQlnh%2FSIzlZrgXMP%2BbTmNGS00ZVhvhLDCBR826I2F%2BC42hR&X-Amz-Signature=575e2f47ad4967dcb036fe966925fcc33974c624be517205bf836855d41d606a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBM43B2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIAmbY%2BWt0G7RTJEGYz8MQ7ll9PsM4odeKrKxQ5UHJI4YAiBzRrUtvFrmtFK2WL9RHvIn8NYFPFXygqD3%2BbCF5koBqyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeh6r6vKta8mPn86OKtwDrnDA95zWdO%2BDPYGQfBQAplzSk%2F5tKdOw95FYZHIOmJAARsDRJsrqkf0hGBtvnRyllzftrRKE1Qmy%2F60kp0fqDq9ooZVqoS%2B2gG1FkPgbDmkF2fCyoX3UdLqPtmCvEIMtFn9YV1eWoKRJ4c4bz61%2BUXzNOc7X0N1UDbocSQaUywWe8aInznCq6RWmPuTGtf5QH2ABYkTNHGdHD24SGUuOX0MIsjRD3Gi%2BnwasSJ3%2FBt1KRBgJiSNTwIg6sLn78mnnQnZ9MwvLzxETHtj4fCWAk9%2FKnSFX96Gl3wSRk9BMgN0M8YOIt1sN8Ot%2F6YkeF4FWbmBimuzDz68RHF8ilncR%2BJGWaqLDEhqPt5zYEtiLQA2CUp463enV8DRwdEOmi6H0XANRTCqmU8nFH9GilkXv8vNeqn0iKASHaq6S6jQ%2F%2BzSQbhj0ZFqWqqgMDzSVitRQyLLIxK7xztLWMmUFQKpQUqsZWipGYgqNDlHwWmlESE7wu8EHLjNWZU5pLaroRwTVNhj1Px9Th%2B%2BL0nDpIKM%2F1wIRUz%2FK%2F46F6nhBEXrRA7j2GMFlcgIPHg3yMsQVBqW9%2B%2FaFbX93o5c%2BpS3vVW%2BqobFI%2FoOoOIi7SFCRie7PKggny%2FQG6%2F5iOkLZdzkwlI7TwAY6pgGsdch4gCRcv7kWFg3viJo9LoDN%2FOncZ8Na%2F5DB5yIFJjggiDztjxsNgS9lYfojdTgIALEyjAEJN7FGFwVX9OX0GpOOse2dselXo2tb8yUZiUx9a2xjnapMxS4aTBTX2uThirlf%2B7GLhXAkh6a11RVut7nnxORwUj6UMy2QB%2BGlkg9itfM8FiP3N74wdd5Yqy6537z4t93ze7usX49a0EJhcnv7DiJU&X-Amz-Signature=a4dade42a5f68e9706197f424565dabbae8389ca78583f10cb59a5b90dc1153d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3I5RK7Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDmvuxQCIh7bJ9g8zqR9%2FVtsEZZJ%2F0QrLIyBfz6hYPSNAIhAM%2B3JCkIJG1GO6nhUtU5ApSpsdY5zscaF16fjn4F8eeyKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygD80OfG%2BHnhuPFdcq3APu6wuZ%2B%2F6Cwy8l0RlHZD6EN%2FPEDqjmlUAhbOsgh0nRVB5bvId7zxRfQEz0nwvcTQCqo88IU6KzWAmOGSY7Ne31A%2Bn1z8cLxZeO8T2mSAY5EeV8lBA1ltzYdp20npjaahAsCxSbHKQt%2BB4v2dc2ZymWY1VaMnE8gkLNncppoqBPhufJYdV1b4QTEIihjrd4BLZvM%2BXfSol9l2XMKq5OK9GrMlAG89fkLSIlOdzOH2l%2BwKC2PKEuoCrqtDHApBe89JktcvY1hxcS%2FrySlXfsJLR2XrFcavuTlW2eicNHMSDryMhB%2B%2F%2Bi3H%2B3OjTxIGy8lC0Dkre67SYhgGWK%2B80170jg4mUr%2BKEya1UdCRlkjy99H2VOL3nBmcxplvRYXDRHlsCj3qAZZ631Nq6D%2B99GIATg9qI4Mb4iOaA7gxSjs1g6pQd%2FPqWIu9MtH%2B1xaRSRM1RaXV7Heijk9CQPRry9dqmOqgxMAMFgue6tDwh2E7JM6gROgxDFCCjOf62QjEmp51xFtG7Pgtq9ES77RS4Jx%2BqgeBsIZ2UbAFZdqLskjqWKlurmIYif8P8%2F5OGvpKtw%2BffxFYBN2wHhPvpNqSzHbk2jR5HOAguit%2BEXn0HLjRPn2eEFCpEEykAgWfj%2F5DDujdPABjqkARyJaDAMBCj2fn36f8pcPXjQyiuN4zPc%2FcV7ri%2F97rmZe35VhBsI1kZZA3l0ycNUjf5iLpzedm0gDnBwQ%2BFn%2B%2FCi7fJvpZ%2FKTl8xmutxdsY2%2FFresrI69lFsOWHTaJ%2BLGVznsJxJDiCoVobJdfwSe20ICumBgy3J2FUjcNV2MSRKc4Cqg62EsfqwGO1RzcAhE5sRf9LYHTCFABwhCzkfuVnGe%2FeU&X-Amz-Signature=693c7b72ff87e22812315e4ac8b292ae8f9a25c61f7141fb022f9d14523cb580&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
