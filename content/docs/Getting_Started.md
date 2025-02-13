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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJC2TFKE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzIZJWqupc2mWDHY0wz%2F39KhJopzhDNyJRVy%2Fqfo%2F9UQIgY63z6xf7f6eADtK37Qkm4nS0VbfjD3oIyll6pxSPZssqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3jdqKmwgPiYycnAircA04bPf3ZPAm6sJZU8BPb17xPM1ap%2Bf7oNHP09SIzV0ee1I3UaYOvzMhV%2BBDdqexClRRySb%2F%2FfwkS8j%2BH3tW0%2Fza5sDT7CJzfbbykArloqR2BA8BuZ6ais3YDbjIREgGfwm0t4rniI3v2EUkKeQ%2BzIa%2BqkqN1P97wwPF%2B1o8mBLDYxTZwOxzhtY4bKnHGtstRzsNmKtCa7k3jaeWH26qYpYs2yP0G8GM1%2BB5UhgsiJAl5MdJDRpxrPfFXbTy7frQgQEwU4GvPZ8ksBb4%2B3eFTUqVNj9vTAJi8CNiRxqq0tAWTTPZ6G4gGqd2An%2Fce2YEtTkqQ6YoNiDE6sWjKn%2FL1YeXevmxVbSmHN75u0YFimyRhryaRF3F%2Bl5Ya1Nj1DXKhJW3xC%2F4KhIfoWrgizI5VWTjK71PcKRuP77yFSd2zb0vD7GS1pE67mhi5bpFLQUYA2r%2FWKGaBAsWgkCXCWyzvJoyAkebwjrMrAwjPZxF1u9JOzvG8iEtftwdeQqG4DrX7eZIdVoClusb2sS84p8d8BgrEPeand8knFtuIR7Qj%2BIoeqLlXDJTbJARQ0ImHS%2BT96OS928A6CxV80tVxDWIFUq8lhfdJtJGkEzB%2BgfaRQOioY6xb9jYZJHGZNV8rMN6Ytb0GOqUBAJ9MJrOdl84QOvOppVUBWPdceoPvEeeEYuXUfJKtZxsoRDG7kM0TPhNDGLPa9JFiMEJcJnH4KsIN3VQ5%2BcW%2FpCUbPzqv1dQfLN%2FO1JYmQqUBQ%2FK%2B0yBQFutJFW28sGVIbGhIGzkFXWjg1ZNyACFcW3uSplPbzolEOLPdDJ%2FIQjh%2FwFo90vTVGCxNSYZsVJ1kq%2FZDJwbTGlu5fo2a5R%2BmN82eq5fN&X-Amz-Signature=3cc20a8aa52d6a13e0799ccdb889ca6cf6e9e279967dbdfb2a20b2f84aeefb0f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJC2TFKE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzIZJWqupc2mWDHY0wz%2F39KhJopzhDNyJRVy%2Fqfo%2F9UQIgY63z6xf7f6eADtK37Qkm4nS0VbfjD3oIyll6pxSPZssqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3jdqKmwgPiYycnAircA04bPf3ZPAm6sJZU8BPb17xPM1ap%2Bf7oNHP09SIzV0ee1I3UaYOvzMhV%2BBDdqexClRRySb%2F%2FfwkS8j%2BH3tW0%2Fza5sDT7CJzfbbykArloqR2BA8BuZ6ais3YDbjIREgGfwm0t4rniI3v2EUkKeQ%2BzIa%2BqkqN1P97wwPF%2B1o8mBLDYxTZwOxzhtY4bKnHGtstRzsNmKtCa7k3jaeWH26qYpYs2yP0G8GM1%2BB5UhgsiJAl5MdJDRpxrPfFXbTy7frQgQEwU4GvPZ8ksBb4%2B3eFTUqVNj9vTAJi8CNiRxqq0tAWTTPZ6G4gGqd2An%2Fce2YEtTkqQ6YoNiDE6sWjKn%2FL1YeXevmxVbSmHN75u0YFimyRhryaRF3F%2Bl5Ya1Nj1DXKhJW3xC%2F4KhIfoWrgizI5VWTjK71PcKRuP77yFSd2zb0vD7GS1pE67mhi5bpFLQUYA2r%2FWKGaBAsWgkCXCWyzvJoyAkebwjrMrAwjPZxF1u9JOzvG8iEtftwdeQqG4DrX7eZIdVoClusb2sS84p8d8BgrEPeand8knFtuIR7Qj%2BIoeqLlXDJTbJARQ0ImHS%2BT96OS928A6CxV80tVxDWIFUq8lhfdJtJGkEzB%2BgfaRQOioY6xb9jYZJHGZNV8rMN6Ytb0GOqUBAJ9MJrOdl84QOvOppVUBWPdceoPvEeeEYuXUfJKtZxsoRDG7kM0TPhNDGLPa9JFiMEJcJnH4KsIN3VQ5%2BcW%2FpCUbPzqv1dQfLN%2FO1JYmQqUBQ%2FK%2B0yBQFutJFW28sGVIbGhIGzkFXWjg1ZNyACFcW3uSplPbzolEOLPdDJ%2FIQjh%2FwFo90vTVGCxNSYZsVJ1kq%2FZDJwbTGlu5fo2a5R%2BmN82eq5fN&X-Amz-Signature=74091752eff259bfc3cf0d8bc6998cc09d67cd0903128ce02eb95f315319ae5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YASQZVPS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh1Bs1WRW69e9B3Wnd3YZdmh0rb%2BtRxgvT1pfZ18ggNAiEAkoFmzANb25UJgh9qCRAkeyouhX8%2FSipiMvqWlUzRZx8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb6nNn3O42wjz8JwCrcA42B3RDhWXbu%2BhE3COL%2FXf3Dg%2BYSf1WAum0y6A2AIgu2S1PkP5DUdn3niRtdR1kvAAvTHJt6s7KMN5Wwrupt%2FCkW2W%2FcJT%2BdyGpxoPegsMGEjMeQDR9oXWEloHe7FPTHjRY%2FXu%2B%2BL7zkJoiPHJmcj9Owdoju9JUUXR4Vb%2BW8nPuGNCZuFmJE5FVJVvbjELjfNj00qOqWWTt6YiOEbfwl3RcQzcSqZZeknGXo%2B6yuV61AeLG8RW7UCj6E%2BxsvkCzoxD5Fqa9j4vl2zUXSJxv%2FHv0xg8Zo2gzzfzY1IfKN1hfnWon2k6Bhc9tL0beiY1S0%2Bj71tctBhxekRU8LJ3YG0sBcZfD%2BUwk5jTspGUArYRgmCctyEYQ5JFjYEqeloM3LakJQVrShQ70bWgzZdJ8UmrBB8TjEoG8FDOI8FO2D5BZuhf68whGlVht8ALFRGm2Ew9CFfIJr8yPQnhnW%2Ba41K7o1WDGDwHAck54JmLondTONcRhSTCVrwngXBuLNAUt8CzZxH9AiDH%2F%2BZvbLCKvdxBqRQ9sv6lzEDqQDrw4zGa6TrXrrTJrI5LmK6jm33qVXXjSQOf4IsEoVHPfECmp%2BNRMvIhmbkMBr6UMMLsWzbk6aof%2FV2N0VaP%2B3QKAUMJyYtb0GOqUBiopI3G%2FhxZhYh9a9LuUJAN%2BFz4Q9KVB9HuCN7Tj6Ginhj3uHcODd7Mt2d0qz6mys8IVhbBMdwWAfiQ1lST4L%2B%2BnteshUft9hDPxEQsi19Ij7Pq%2Bl1sgnDN%2B6phVKaD5GpQOATDcY5Rpc0xjROalxJWfFmxLOAUaftKstWyQi3MbGFkSM1M05b3UfCmn2zfdOtneOtlDv0CTfjuDca6qFyVGt3eTO&X-Amz-Signature=a743e4e95df5801c1a8052fcd4868f95d21807545f73a7a32ee40209d4ea9e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFBARV3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyu3LBVqarAAG9omR%2BRYdM2lEDwA%2FAGS2JcOWhroszyAIgYaOAxe1o0c81nmx4WgI1dtGjqtmg7Pc9oQeFVAi%2F0MwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLizISXOlXkcDu0opircAxmyoVZpQ5e92ZZ1Dir0OHwPS4MOau%2ByVvnOs9dM0Dcc6gi5l%2FoS8H1eUHgYF6yW1WAMzRApUAiRv1icVgOO0dcGDiMKAmL8RFcIN6CzflafcwwB7ykeMcUKxomX1hvLTXAWNOL%2FKy%2BV5XaXfmWrDuJN6tHjLWgQNW5ouFY086fadSZwSTr%2FowSperprly9djdwybWCCdGbOBV3mARzxzguLApLN%2BSXmuTxYpODrpWJ4I7hp5VQ7riWWJGTsKCdR0Dni4%2BHCQcEwJ06oI9nO%2F3e8NZEo5DDzeX4Vmzc9GjjnPwLSLxnYvZC0DgKGAKQ8KAoIo6UnurMpt1Hea2vRhjv0A6fCj3N%2BleXM2o9XmHwbm1slhl5xfB8DMON%2BesvwCqOCp%2FYdDGgeN9%2B1HylPTYrTAc7vvo%2F1IAkc1vNH38837wLxNrNgKpaLDnpOGAstNSUvnrUnhOqgQAjwV6UAel0JCqeuf2G2WGCMA1EyIZK0Kd%2BVI9kFSzolrqBnorDX4kzWGpc%2FZzaPywHV7XGPsY052fprZ1%2BzFLjPWVzTLh2zhVlkvp4X6Nha4RVl1sVx0wg7qH8v1da5PmkkkaRo1TDk56QYndFd1Gpekqa2KmLzZk9jHbMUWOZNk%2B4SMLmYtb0GOqUBLDBy6AtXuhnemKzf2NVzsBTJOebbMdaGeYKSD8uh4gQcxh9mz0JutAhCLuIJY%2FlnRQwluij5eo92EuwwREt%2Fh0630JgNn5QNgyXYxbZuq7VDlxH97U0WFLQ%2F%2FumYvSa%2F4FHipw0Yzo08n%2BdC67i34v1HBiqNgRHBCqWQB5p4OAtgHzkjTAOG4df482TMafliyUMeatiQQkHBAbZtL99FZwD32O3L&X-Amz-Signature=e6c51ec1578f14f79148d37a862ba4619971764f2e12178dfa195c64b67a66bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJC2TFKE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzIZJWqupc2mWDHY0wz%2F39KhJopzhDNyJRVy%2Fqfo%2F9UQIgY63z6xf7f6eADtK37Qkm4nS0VbfjD3oIyll6pxSPZssqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3jdqKmwgPiYycnAircA04bPf3ZPAm6sJZU8BPb17xPM1ap%2Bf7oNHP09SIzV0ee1I3UaYOvzMhV%2BBDdqexClRRySb%2F%2FfwkS8j%2BH3tW0%2Fza5sDT7CJzfbbykArloqR2BA8BuZ6ais3YDbjIREgGfwm0t4rniI3v2EUkKeQ%2BzIa%2BqkqN1P97wwPF%2B1o8mBLDYxTZwOxzhtY4bKnHGtstRzsNmKtCa7k3jaeWH26qYpYs2yP0G8GM1%2BB5UhgsiJAl5MdJDRpxrPfFXbTy7frQgQEwU4GvPZ8ksBb4%2B3eFTUqVNj9vTAJi8CNiRxqq0tAWTTPZ6G4gGqd2An%2Fce2YEtTkqQ6YoNiDE6sWjKn%2FL1YeXevmxVbSmHN75u0YFimyRhryaRF3F%2Bl5Ya1Nj1DXKhJW3xC%2F4KhIfoWrgizI5VWTjK71PcKRuP77yFSd2zb0vD7GS1pE67mhi5bpFLQUYA2r%2FWKGaBAsWgkCXCWyzvJoyAkebwjrMrAwjPZxF1u9JOzvG8iEtftwdeQqG4DrX7eZIdVoClusb2sS84p8d8BgrEPeand8knFtuIR7Qj%2BIoeqLlXDJTbJARQ0ImHS%2BT96OS928A6CxV80tVxDWIFUq8lhfdJtJGkEzB%2BgfaRQOioY6xb9jYZJHGZNV8rMN6Ytb0GOqUBAJ9MJrOdl84QOvOppVUBWPdceoPvEeeEYuXUfJKtZxsoRDG7kM0TPhNDGLPa9JFiMEJcJnH4KsIN3VQ5%2BcW%2FpCUbPzqv1dQfLN%2FO1JYmQqUBQ%2FK%2B0yBQFutJFW28sGVIbGhIGzkFXWjg1ZNyACFcW3uSplPbzolEOLPdDJ%2FIQjh%2FwFo90vTVGCxNSYZsVJ1kq%2FZDJwbTGlu5fo2a5R%2BmN82eq5fN&X-Amz-Signature=35b5e62ff2a1e60d0adc869fb4c1a54dc5723d41bffa6b239e51053a6ab22202&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
