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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3GE3WPW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCFFJ5yjnsy2Qz5vwwKwmpzGE7w6zcgm00inm2rWep2RAIgEKG4VhMQEnV0iYf30C%2FiKkdn%2FGcZX5oyCdvqxVnC8vYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDClizAL50orbPTXWPyrcA1bNoL%2BRNp2mqnlKtUa9MRBeg8gNFL3BklRXRPQ%2BPEHRcwuXWEhQhaKhnmFsMchGJ6iplIMO7wKY%2B0rLUHDvuiQHgOVrNM3idCeiXgnpA1K4sZ1yWqd1akikj2KEmlGQlyRu05nYXZ1CVVbizTHkksVbbFtJFC2rnJHU%2BVjLm9T6VtC738aN9W%2FNZmESgeEAGbmDSrx2s%2F0yENNtfIrznA%2B7qpk8i5GBN9VskgU%2BkaR2Dcwr2go%2BuobYGCXN1KK0INXNZoUq0ewYLh1VZ5y2RWpUVflynF6n9QbovZvXsbynqN3lUf0pI%2Fyh6AzxaM%2BcFNQRO5VbyH8BozjdeWjbzTiD47VvVf5Q0KXpqgiy1iv%2FedoYX9dwlAwZKhlgguUnaevShnS1bCc27CwUXXv4N7HYNfV7wuQGhyW9H027esUQ8XvYEN8HfVcescy202No3SyeFJsLFYE8YDVyJry%2FSYTKqHHy3HpoypOSa9G5rWNTMZc%2BaHk54TX681RVWWvIhUSzTozQQGgYcR1b4aziLVSpR8sGSv3coyWVt736%2BhP4M5MAGzmBq1sKtr0tNHRIs0GDnjSXTVFvfuROAaXpQ5mEX53fx2LTHjLBGutVpARzuvPgxE4GirUhsRiqMPqdr74GOqUB0TExiH0lXw9Jt47fG5FNmqPqAtszdY3mKjDbwaWSkpficUK455QKVLcx7thN%2BRYRoJn3GkGAtlrZ2pi2xwBf9Q2AZLzKnkxSyO4NxOD1FRx0wyo4NZbW%2BfgA6%2BSLyQWmMztpf4TJiVM%2Fx7Jft5jpDBDpMvwyCsx27Dm1bl97%2Bo5AW0ZCiQcAnIWAd1AfMXqa07ly6gj6sQbX1CS1GP2rOx%2Bi%2FXs9&X-Amz-Signature=49b6ecd6cfc529f0601cb830400153cb5d00207fcff4be3811722b1f27e59d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3GE3WPW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCFFJ5yjnsy2Qz5vwwKwmpzGE7w6zcgm00inm2rWep2RAIgEKG4VhMQEnV0iYf30C%2FiKkdn%2FGcZX5oyCdvqxVnC8vYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDClizAL50orbPTXWPyrcA1bNoL%2BRNp2mqnlKtUa9MRBeg8gNFL3BklRXRPQ%2BPEHRcwuXWEhQhaKhnmFsMchGJ6iplIMO7wKY%2B0rLUHDvuiQHgOVrNM3idCeiXgnpA1K4sZ1yWqd1akikj2KEmlGQlyRu05nYXZ1CVVbizTHkksVbbFtJFC2rnJHU%2BVjLm9T6VtC738aN9W%2FNZmESgeEAGbmDSrx2s%2F0yENNtfIrznA%2B7qpk8i5GBN9VskgU%2BkaR2Dcwr2go%2BuobYGCXN1KK0INXNZoUq0ewYLh1VZ5y2RWpUVflynF6n9QbovZvXsbynqN3lUf0pI%2Fyh6AzxaM%2BcFNQRO5VbyH8BozjdeWjbzTiD47VvVf5Q0KXpqgiy1iv%2FedoYX9dwlAwZKhlgguUnaevShnS1bCc27CwUXXv4N7HYNfV7wuQGhyW9H027esUQ8XvYEN8HfVcescy202No3SyeFJsLFYE8YDVyJry%2FSYTKqHHy3HpoypOSa9G5rWNTMZc%2BaHk54TX681RVWWvIhUSzTozQQGgYcR1b4aziLVSpR8sGSv3coyWVt736%2BhP4M5MAGzmBq1sKtr0tNHRIs0GDnjSXTVFvfuROAaXpQ5mEX53fx2LTHjLBGutVpARzuvPgxE4GirUhsRiqMPqdr74GOqUB0TExiH0lXw9Jt47fG5FNmqPqAtszdY3mKjDbwaWSkpficUK455QKVLcx7thN%2BRYRoJn3GkGAtlrZ2pi2xwBf9Q2AZLzKnkxSyO4NxOD1FRx0wyo4NZbW%2BfgA6%2BSLyQWmMztpf4TJiVM%2Fx7Jft5jpDBDpMvwyCsx27Dm1bl97%2Bo5AW0ZCiQcAnIWAd1AfMXqa07ly6gj6sQbX1CS1GP2rOx%2Bi%2FXs9&X-Amz-Signature=c843649c5160db5de264fb626695b5ba0337a7e0ded5b910086981f9573ca353&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NV5QPKB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHX0VsUNki2nEpNvRJrgBdHyCYhbRZfnq1fpD5%2B5lrbBAiEAtRdIer3OParedp1D2ak%2Bt%2Fpd%2B8GTMkKZeS59PTaEw3Qq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLzWcpJmir%2BMnz2PUyrcA60Z9sHCke2jvAC1Jpusf6BR2NtgeVaUyOvl2mJAmRcAcl0c%2FH6yfjeNWnE6dq2A1VdhOW%2F5CPc1ZPYjlMah0J3k8sZKpHgZf8G5%2Fn5ijeLpVYD3QZ%2BechwdeuuCt03QiXlSf2ymtujk3XNGpa9VDwZVNCvC60vZL9CADTRKyIhs%2BcMdz8aJ0olXHL8ySa%2FH59Q%2FbAdvY7GSfZra8JEytiDOztD%2Ff8hibao3tLWqs9z5eCugdMIhasmUBp3wGnWrVZzxHHEEIqiFWl2lqT9o3NxsU0nHiyVMGyewIO%2Ba%2BLvblo9tszr5fASxXSupkxaP5twrBNzNcdEVyLTfqcIqKGLuenf6uaKTh8BlAF8tp7bHm9DG9RD1WJG%2B3QIty%2BF2ORJgXzJ0ys3ZbETsjEyA9meONhvvlUY%2F6G5OWM18intGFV3BCN7S1Mh0KBDnCP04DOXi%2FuEx3Rj9OTNaiE6p2CeP5J5mlZ3YGOozFYkr7dg%2FbseSjva5lRqP3bK4ltQ2ZQhkxKZV9meZZfGmpQ1mvZqLbG8ZtyjvwLaBOqsYf99LmkRjVr3k3bIKiEsCY4jTgT8GJ7sOX9wgE%2F5T%2BtbHZL3aIAxwTv94b7Y75DJGYsR%2FXh6ZqYLmDT9aMnPYMM%2Bdr74GOqUBA3k%2BgaN3JaWRD5tXO6lAM5afseCIJ7DyYt5itojM8DA1n9ZaEiJRU%2F%2B2VTejt5iRLF%2Fi23qGliSZIaEUsvou%2Fr%2BDbaL86ockvLnrlFzeFMK63ld5MaF98eg9ewli35c054r6N8n9yq53ofzGqRf1U%2FuBv9F%2Fg1tPEWoZPb%2BLf%2Bzb9nomCllMJ64kp%2Ba5YOa7TEZbY%2BPlm12eRmjzKY%2FBJpXTt2Zq&X-Amz-Signature=efc154ca5d2146f7d10742a8e4da675f98f4d7164ff0949a3c47e8cc6758ffd1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKFDEXJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD6VW8orjjgZ8ilwnPBHgkIKwLpEtJcmCYyVQibe540oQIhALGOfvXAvedeOhae1IhDg7VOiT%2FIyh%2FID6TTF4Rw%2Bs3cKv8DCFYQABoMNjM3NDIzMTgzODA1Igw6yCdDBtWP9qhcUAAq3ANIfNGQAlnxS2KG3OxVOQ7k7yswxjbBAKM066eMQphchPo7GDEYolLsOGZbbA8Pg%2BcjZ6j2V1HF9Nj33lcnMGKglfuHG4e8Nl1BPzRk3H4Evh%2FSa8MkL7wkLBlIKq%2F4QBQy6BDXA0%2F1FRuDbjVMCirihIA2O94YOZ5wKYAltbsK1%2Fe%2BjxNLSCXWo47%2BoUbNl2b2haHWh1bc295IS7aHJwDbNNTC5HTX3YqpIe2A6ez%2BBiD%2BXl40tuYJVI%2FCRiun5bAmOEp0Wfzw%2F0WW2SBIF8%2Bx1o89PboZStpPFDf2m7uH2BFT0fWMgKsHezTuelQGqneyXTZrGYqC%2BZa45VeyEmn%2BZPqgSXCXu3JqWCK%2F2aicjiasSy7AY45Bq6mHhP0KryBOorzBbvxir4ETGe2md9BdFS7OWenbcAl4Fb%2B3VHECc5xNRI2ORFm4U%2FU8Nx6la5atWBeTXWn4ppWEk1pFKbnpOlCam%2BPDXWqP0oc%2Bsryn9xBVf%2BrIrnHd5BOkJxXbU2ALqlfWsXpatipqM4PcyrUxq1uLy6LeWvIzmwIzzuOsO8eQnNjHPSuV%2FggDsfzH78ttnN%2BAaCVt5%2FY6Z2Q3Gf1Sq2hwBSgVc8OEfHGYlEJDJgkptJ3GUUYnwX4PgjCknq%2B%2BBjqkAVwSxO5%2Bw3timsWG%2FY0znvRVSrqHtBsEHLm2biWtO23cHZAfg2e5NqcN7JS7cgAUq35Mm1xQF%2BvG8akEccXOdvB9UXQQAiAqT9IpuEQ2K1ESZ8BMz7K9f7w5pO1bg7i%2FC1mWebHp949%2Fwn6g4kP4pyX31l39ifGcqHBGQdn6dGHABrkm0B4FsFj3qLvUHXUBEsj8W%2FyFKyHNK%2FxLucjnTx9NOage&X-Amz-Signature=16813d696f838e3e42482cea2936e34153500cea2b8b12e1639b8b90028adc33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3GE3WPW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCFFJ5yjnsy2Qz5vwwKwmpzGE7w6zcgm00inm2rWep2RAIgEKG4VhMQEnV0iYf30C%2FiKkdn%2FGcZX5oyCdvqxVnC8vYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDClizAL50orbPTXWPyrcA1bNoL%2BRNp2mqnlKtUa9MRBeg8gNFL3BklRXRPQ%2BPEHRcwuXWEhQhaKhnmFsMchGJ6iplIMO7wKY%2B0rLUHDvuiQHgOVrNM3idCeiXgnpA1K4sZ1yWqd1akikj2KEmlGQlyRu05nYXZ1CVVbizTHkksVbbFtJFC2rnJHU%2BVjLm9T6VtC738aN9W%2FNZmESgeEAGbmDSrx2s%2F0yENNtfIrznA%2B7qpk8i5GBN9VskgU%2BkaR2Dcwr2go%2BuobYGCXN1KK0INXNZoUq0ewYLh1VZ5y2RWpUVflynF6n9QbovZvXsbynqN3lUf0pI%2Fyh6AzxaM%2BcFNQRO5VbyH8BozjdeWjbzTiD47VvVf5Q0KXpqgiy1iv%2FedoYX9dwlAwZKhlgguUnaevShnS1bCc27CwUXXv4N7HYNfV7wuQGhyW9H027esUQ8XvYEN8HfVcescy202No3SyeFJsLFYE8YDVyJry%2FSYTKqHHy3HpoypOSa9G5rWNTMZc%2BaHk54TX681RVWWvIhUSzTozQQGgYcR1b4aziLVSpR8sGSv3coyWVt736%2BhP4M5MAGzmBq1sKtr0tNHRIs0GDnjSXTVFvfuROAaXpQ5mEX53fx2LTHjLBGutVpARzuvPgxE4GirUhsRiqMPqdr74GOqUB0TExiH0lXw9Jt47fG5FNmqPqAtszdY3mKjDbwaWSkpficUK455QKVLcx7thN%2BRYRoJn3GkGAtlrZ2pi2xwBf9Q2AZLzKnkxSyO4NxOD1FRx0wyo4NZbW%2BfgA6%2BSLyQWmMztpf4TJiVM%2Fx7Jft5jpDBDpMvwyCsx27Dm1bl97%2Bo5AW0ZCiQcAnIWAd1AfMXqa07ly6gj6sQbX1CS1GP2rOx%2Bi%2FXs9&X-Amz-Signature=acb91f07ad864a1d41b7e57a079a891c94a226588c75a7e6764da7e6863c0de8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
