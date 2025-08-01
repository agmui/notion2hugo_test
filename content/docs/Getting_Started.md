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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VO7TMN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr3zeGv8nCKCuNlUNzMangLjzUt54Hi7OCDtZiIMqz5AiAJ%2BAIYM2e%2Bn0VF6dSGYnGuB8wCKLTxgT5h1WTWAV%2BityqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN1cWrvZQAzReXA0YKtwDs%2BtBVLrJXFC%2BqhyzHc5I0FSLngBRFV%2F6S4pS4Hga3F7RGGyszGQeD1Sj3ZPHjhm9RN1n23t7SsDbjv2JJCqMjs5mI7EOZzoO5hUniwY9MUB5OEEq7SQJwYp9orGvTffZ7JSL5YrQuL37Rppjyep6ZI9AKbmo0qdwV%2FK5kH0ydLYjw7Q9clJNmEHS3x5i%2FBv1NoSe8C2iqJrFkydfJuF%2BrjKYxmfxTJdZybJHSPW8rJD0kt0HLo2IUOEV88O3KSm2lpU6syHfnIeBJte%2FmnBi9jPKNPcPsRGBs6BKUBDroJSlG8o%2B2cwCBTCKDX9zVOhDOSwpM2hQ7IuqdqL43L0sPiQw74UTj%2F2y1mvoB0V2Xe%2FlRZ4VBX3yk%2Bc2dVDbgzKUPvX43Vw4uGBU3SXeOyumjvFjFhKHkHkxvJjg4ZMc8rrC1LngeVGbeRHJoDm0MMpcwIZp5HgZXdnXLhqo%2FEc7UfgzgyGrJGZdDb6vkJqmDGQ4JPQJMAMmtBwAdHEzWtHbQcK5Pg5O%2BOvUI2zcTf3oNHM67YaIp7iw%2FXX5E83FfWSP%2BpXzreCY48vXdRd2sTBVKzz3GIf%2Bz%2FkZHuqU6b%2Bg4GWzS%2FBCkLYFvFOeBxqfOcl4yKJY032B7A%2BSMosw4ca0xAY6pgFpYFW%2FZdw1LLcg4bJaL2agUpqFTe5oxmU8PRahLzajTTgL6FU1fEbwvoOGe%2BdoVZ6owmpxPzFPcPATNWD93bhJU5VGJ6jmKtdPx2PWtpw%2BHMs8xhJL4kouDTT7dSYraJ2qEpviBvyUEbD2NTshzio3TmyJ%2Bu9QxVHGlTV%2FCCqaEY2n36udV4%2FO%2BnEE8O0fHa%2FcJnUMZ%2FOpw5fdFuFpMWe%2F1HfINryY&X-Amz-Signature=7f0dbaf049197837762a567f9a6db6a500c539e57eb7d27eea445848c9380358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VO7TMN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr3zeGv8nCKCuNlUNzMangLjzUt54Hi7OCDtZiIMqz5AiAJ%2BAIYM2e%2Bn0VF6dSGYnGuB8wCKLTxgT5h1WTWAV%2BityqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN1cWrvZQAzReXA0YKtwDs%2BtBVLrJXFC%2BqhyzHc5I0FSLngBRFV%2F6S4pS4Hga3F7RGGyszGQeD1Sj3ZPHjhm9RN1n23t7SsDbjv2JJCqMjs5mI7EOZzoO5hUniwY9MUB5OEEq7SQJwYp9orGvTffZ7JSL5YrQuL37Rppjyep6ZI9AKbmo0qdwV%2FK5kH0ydLYjw7Q9clJNmEHS3x5i%2FBv1NoSe8C2iqJrFkydfJuF%2BrjKYxmfxTJdZybJHSPW8rJD0kt0HLo2IUOEV88O3KSm2lpU6syHfnIeBJte%2FmnBi9jPKNPcPsRGBs6BKUBDroJSlG8o%2B2cwCBTCKDX9zVOhDOSwpM2hQ7IuqdqL43L0sPiQw74UTj%2F2y1mvoB0V2Xe%2FlRZ4VBX3yk%2Bc2dVDbgzKUPvX43Vw4uGBU3SXeOyumjvFjFhKHkHkxvJjg4ZMc8rrC1LngeVGbeRHJoDm0MMpcwIZp5HgZXdnXLhqo%2FEc7UfgzgyGrJGZdDb6vkJqmDGQ4JPQJMAMmtBwAdHEzWtHbQcK5Pg5O%2BOvUI2zcTf3oNHM67YaIp7iw%2FXX5E83FfWSP%2BpXzreCY48vXdRd2sTBVKzz3GIf%2Bz%2FkZHuqU6b%2Bg4GWzS%2FBCkLYFvFOeBxqfOcl4yKJY032B7A%2BSMosw4ca0xAY6pgFpYFW%2FZdw1LLcg4bJaL2agUpqFTe5oxmU8PRahLzajTTgL6FU1fEbwvoOGe%2BdoVZ6owmpxPzFPcPATNWD93bhJU5VGJ6jmKtdPx2PWtpw%2BHMs8xhJL4kouDTT7dSYraJ2qEpviBvyUEbD2NTshzio3TmyJ%2Bu9QxVHGlTV%2FCCqaEY2n36udV4%2FO%2BnEE8O0fHa%2FcJnUMZ%2FOpw5fdFuFpMWe%2F1HfINryY&X-Amz-Signature=c2a5cf7f45752f3762c2ebf2e6b009b9e3bce9c765a7f95b1a679c680494a9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VO7TMN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr3zeGv8nCKCuNlUNzMangLjzUt54Hi7OCDtZiIMqz5AiAJ%2BAIYM2e%2Bn0VF6dSGYnGuB8wCKLTxgT5h1WTWAV%2BityqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN1cWrvZQAzReXA0YKtwDs%2BtBVLrJXFC%2BqhyzHc5I0FSLngBRFV%2F6S4pS4Hga3F7RGGyszGQeD1Sj3ZPHjhm9RN1n23t7SsDbjv2JJCqMjs5mI7EOZzoO5hUniwY9MUB5OEEq7SQJwYp9orGvTffZ7JSL5YrQuL37Rppjyep6ZI9AKbmo0qdwV%2FK5kH0ydLYjw7Q9clJNmEHS3x5i%2FBv1NoSe8C2iqJrFkydfJuF%2BrjKYxmfxTJdZybJHSPW8rJD0kt0HLo2IUOEV88O3KSm2lpU6syHfnIeBJte%2FmnBi9jPKNPcPsRGBs6BKUBDroJSlG8o%2B2cwCBTCKDX9zVOhDOSwpM2hQ7IuqdqL43L0sPiQw74UTj%2F2y1mvoB0V2Xe%2FlRZ4VBX3yk%2Bc2dVDbgzKUPvX43Vw4uGBU3SXeOyumjvFjFhKHkHkxvJjg4ZMc8rrC1LngeVGbeRHJoDm0MMpcwIZp5HgZXdnXLhqo%2FEc7UfgzgyGrJGZdDb6vkJqmDGQ4JPQJMAMmtBwAdHEzWtHbQcK5Pg5O%2BOvUI2zcTf3oNHM67YaIp7iw%2FXX5E83FfWSP%2BpXzreCY48vXdRd2sTBVKzz3GIf%2Bz%2FkZHuqU6b%2Bg4GWzS%2FBCkLYFvFOeBxqfOcl4yKJY032B7A%2BSMosw4ca0xAY6pgFpYFW%2FZdw1LLcg4bJaL2agUpqFTe5oxmU8PRahLzajTTgL6FU1fEbwvoOGe%2BdoVZ6owmpxPzFPcPATNWD93bhJU5VGJ6jmKtdPx2PWtpw%2BHMs8xhJL4kouDTT7dSYraJ2qEpviBvyUEbD2NTshzio3TmyJ%2Bu9QxVHGlTV%2FCCqaEY2n36udV4%2FO%2BnEE8O0fHa%2FcJnUMZ%2FOpw5fdFuFpMWe%2F1HfINryY&X-Amz-Signature=c97bbeacc1f429b5ea78eaede819c77573ae5b57c62d115cb85d1724de4b4c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIZGN6U4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV4JLNJdq%2B%2B6KGQGqFnqwyw8Sgv%2F3HL3Jkd1hpvbxsvAIgbZWwpdDsdcl7D0KtnW9T9ZjB58iS6xaRdA3V1Hypj%2BgqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjE68zpUiTszDSitCrcAwx%2BlvpL3KP6Kal09MxWW6KJjCNH6SgvoNpbHtZ4AZ4HLAvpL%2B%2BWeHrLdtnbqqgUvUYMFRwD%2BAzLh7hICXiDaWiEHMZ%2BN1HGctS8l2LUKB8LwfZLmzdh3vg0nUPwLtdzDMsmcHl1bKrFIIbaTMpR8nbTyfPVB7tMCugRtGJUHOLpltQyfV16dHp1nrYw1GsNgDtenR%2BlfxmOYbG%2Ft8R4jcVa%2FPkheJPBvNrSjXRn5l%2BbxO4YeP2OXlWgGr5MQ2853dIayfvv2Olvg%2BKtG%2BWWavVvuRUtYdGh6H21jmExdI5ziL7qwpfv1Q1q9E2wjSsEVc8ROKysiyJmGnX39Px1x2UMqimEA4ApFK7XnLO%2B6ThWomU7iZx6%2FAJipEsLansHocKFoX0hSnp4T3aeHAIEjvlPHzQ4tcXwQtz5vDByUTF0LPNNvP3Sj4rxUZW9eAbD5QmbIpkda3Sn3AQF8mZygT9%2B%2BR3hb5d1%2F5LlGk0JCGI0eQ3Er4D2h9qtoMJyzdd5HGaj%2FIl4VaW7I3sKXiesdTKZGKprxNlExOFXb2UoTt7b2eUu5CcQie9aXtt8ai%2Fc1ihG3pQPL7Fj%2Fks62eJf2SPP7dkBtoGdL3HjwecX8Xk5mvWLF6SxZYwU1%2BN3MPDGtMQGOqUBBUgsyrZdv8ylEyyZqUS%2BvxNSUpHvksRsS51k%2BWLoUPgrW9beGmd0CsJM4XCMREqJz9RAVa9PkifTvbH%2BbIsKn5Cxcuv0YfuairdEJ6Hk17lCoOjZ3SLMrj1wkaxjnpDMHrcuA%2BSE0ZHODpmMQg4YDOrSO6GDOWucPX6lMLFJacpL80Jk6xX%2FXa0Waw6b9t9lcJPYMcMBlJx6SLyyIahvjrZ9krV%2F&X-Amz-Signature=5fe6d9e74a80eac3b04e61e3f690179a72027500c7db18e703a4501fa2d220c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSLBQG5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYVVujxEYfs1TFr3rVSJlws7RGkPHewv9%2BR%2F3DMdHz9AiA%2B1gXx9FWcY43lmYrMQtJuRzcXwYh7cKWPxOkZoZo0GyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcOyKknmHkSUTJawKtwDVSJ%2BTO3i9yEDqC2l5k%2Bx%2FGaqoTv6%2B8OuTRljp%2BfA%2BLpVnYVN%2FGLlQbi4ZLkbWAVPe92tnje68Iuiiq%2BYds6674t1Q4UALmU4Sl92zsozNJemx1p2U8Zl93j0PEb2EPg1XDCatr06B7yZpt5uAhh%2FiOmM%2FtwsZJ2eLLvmUV8PFX6LphNfam9I3rbM4G0aB21%2B7cXa8e3E8IkXgTeA83gcM9fx2obpMMHwxtkQsCy1nLESAYzrlPDNA8%2BCTNt9d1za3eCzFgktUioV3XDIv%2FuJm0BcRMtUrdRc6kJZjYDF6JKejGzkybiyYhpMgF91v7D%2FynDBzs7A9O0YBxO9ai0st9cRSOV7Y7Z3Cu6sE6n3msyv6TqL8KMGYHaEbkI1qSEVFrVLTe1qODzN1ymk1DPScEPbX83YlA%2FFGFK2YKWIgth%2BSmsefG9VS4chR5KGR9WQan889VHc3SS3UpfIk8tj80EmFPwhayo%2BydfvWjOvhavA8Pu%2BmrWFvQy%2F5d75CPKMqj7mCqc5W3l6napng9DL5%2BCbCx1%2FxuZ7kqNgHaF%2BM0I%2FyVlJqtm6e96eySqVNAO%2B8TEabk33DYvzazyM2OsDQl3MDqnI1nlVeKZo1bDb6OgUtLGpCUVZECeaaTcw%2BMa0xAY6pgFYHOXK%2BZ7oBYl2zYuwJWZiV1IqJVQEtNbaRVzdhIS03qy5cXrTKaffeyfsC%2Fd6kROK%2F4tgH4ZS9JcwekntonGa08vlVuZ3gQz63KC9imI98hrL5Gfx3H9U0T59Lw6F1cokd1jQwRti4%2BK%2Fw2esNTl9LFLFWxS1TKZOHyy98BY%2F0aEcsCU1BqkCBSZxOrM%2FARbW7MvB9KQ3ppXLnqS38GoTDxyc%2FV1O&X-Amz-Signature=5839fec8199b0e5ad6c20179273d71a282c3760914a9d1216aef7de54de3651c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VO7TMN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr3zeGv8nCKCuNlUNzMangLjzUt54Hi7OCDtZiIMqz5AiAJ%2BAIYM2e%2Bn0VF6dSGYnGuB8wCKLTxgT5h1WTWAV%2BityqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN1cWrvZQAzReXA0YKtwDs%2BtBVLrJXFC%2BqhyzHc5I0FSLngBRFV%2F6S4pS4Hga3F7RGGyszGQeD1Sj3ZPHjhm9RN1n23t7SsDbjv2JJCqMjs5mI7EOZzoO5hUniwY9MUB5OEEq7SQJwYp9orGvTffZ7JSL5YrQuL37Rppjyep6ZI9AKbmo0qdwV%2FK5kH0ydLYjw7Q9clJNmEHS3x5i%2FBv1NoSe8C2iqJrFkydfJuF%2BrjKYxmfxTJdZybJHSPW8rJD0kt0HLo2IUOEV88O3KSm2lpU6syHfnIeBJte%2FmnBi9jPKNPcPsRGBs6BKUBDroJSlG8o%2B2cwCBTCKDX9zVOhDOSwpM2hQ7IuqdqL43L0sPiQw74UTj%2F2y1mvoB0V2Xe%2FlRZ4VBX3yk%2Bc2dVDbgzKUPvX43Vw4uGBU3SXeOyumjvFjFhKHkHkxvJjg4ZMc8rrC1LngeVGbeRHJoDm0MMpcwIZp5HgZXdnXLhqo%2FEc7UfgzgyGrJGZdDb6vkJqmDGQ4JPQJMAMmtBwAdHEzWtHbQcK5Pg5O%2BOvUI2zcTf3oNHM67YaIp7iw%2FXX5E83FfWSP%2BpXzreCY48vXdRd2sTBVKzz3GIf%2Bz%2FkZHuqU6b%2Bg4GWzS%2FBCkLYFvFOeBxqfOcl4yKJY032B7A%2BSMosw4ca0xAY6pgFpYFW%2FZdw1LLcg4bJaL2agUpqFTe5oxmU8PRahLzajTTgL6FU1fEbwvoOGe%2BdoVZ6owmpxPzFPcPATNWD93bhJU5VGJ6jmKtdPx2PWtpw%2BHMs8xhJL4kouDTT7dSYraJ2qEpviBvyUEbD2NTshzio3TmyJ%2Bu9QxVHGlTV%2FCCqaEY2n36udV4%2FO%2BnEE8O0fHa%2FcJnUMZ%2FOpw5fdFuFpMWe%2F1HfINryY&X-Amz-Signature=414ff53755d6c1df82e0b9d9aeabf92000a884da8e55172e1d8dad9d91b8f425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
