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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNLALZR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD%2B7ANTQruuE4dJLPb9OJbSalWZ75Aq7kb3A34U2vrZ3wIgISKwh2Vr6db%2FKbjSB1BGloH5YuIsrraK%2BF3mlMU74w8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHhRGZ8PO38y4guOqCrcA9fZHWn7JhN6ZTfRYXA4twn8oo05LffCataJXhQi1bJOm5i3sAmq2%2FXutVaRpA3YRgGbvJaVTcKHuFlAXnCrDMIuG0KoSpasjOjvhqR5CBeTlYdhWgn7%2FoySuoIPrsDWHOGbAJ1%2BQA0xaoJ83sz3IfyfKTTcT0b1HPe26my9O50n03P07PBaEal7zKMuE2vDb1n4ewl2RUznyinoNxQQ6i8S%2FrusVkkMDNBLOk86PainToeUXdKaOE8SQQU9vivilk%2F%2BoQzwE13%2Bn9%2BH4J0IyOoEGibJn%2F%2FD7YI10V9qTHcRztR1SpimyafOkQvt%2FzdksXn38%2FeYoOADMlPqBAvLdTqCX21JWmFn1k%2FauEjaUNBEqXj8Pp0OxKlCAj7O8FAcQZJh5vLUAv9P73WmyQQkSv1Vwin%2FkIjhBIdf3CZp2Scc8nHRmt2B2vvGITFK4N0Uh1ZytPgipZQlCqzaMIEXxjxYeZ%2BXyynGTKOR84Pxnadhgxcdinozl9ApL5M090gqxeXkdw1nER6yFVta0zZ0h%2BHhNHqcV9UL1asf4u3hcyulO0IpMxAU2R1xhTzALlalH%2BGoXitrLB5O%2BsPFqWnp1S2DM4OD3az9V3seHkruHEEZ%2FbETqDciClacW2pjMK2c9cIGOqUBYcPtHiUk4QfN1ZoVJoCkqM2bK64nNzzyyYpnLCstsWeEyiNq9nhNfihYqZHoQsrzuK6DR9FVYAbZJw2t%2FjvQW5AmYHYnhQrUl%2FurFYVcmvNrd%2BQJBSdTqBNsIv0t7hjkWD6aEVhGt9BB0Kqt78sgQJaGoPZwQx7To5mAecuAk%2BqHK9YiwM4uOs4qVPLsptYo2JGuZGXeAcnXQBjdy81lG5oR0wES&X-Amz-Signature=e036e5ba9f8f5811dc2a8ebceeb9fe945732a66a16bc718723c890954ac7ad95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNLALZR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD%2B7ANTQruuE4dJLPb9OJbSalWZ75Aq7kb3A34U2vrZ3wIgISKwh2Vr6db%2FKbjSB1BGloH5YuIsrraK%2BF3mlMU74w8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHhRGZ8PO38y4guOqCrcA9fZHWn7JhN6ZTfRYXA4twn8oo05LffCataJXhQi1bJOm5i3sAmq2%2FXutVaRpA3YRgGbvJaVTcKHuFlAXnCrDMIuG0KoSpasjOjvhqR5CBeTlYdhWgn7%2FoySuoIPrsDWHOGbAJ1%2BQA0xaoJ83sz3IfyfKTTcT0b1HPe26my9O50n03P07PBaEal7zKMuE2vDb1n4ewl2RUznyinoNxQQ6i8S%2FrusVkkMDNBLOk86PainToeUXdKaOE8SQQU9vivilk%2F%2BoQzwE13%2Bn9%2BH4J0IyOoEGibJn%2F%2FD7YI10V9qTHcRztR1SpimyafOkQvt%2FzdksXn38%2FeYoOADMlPqBAvLdTqCX21JWmFn1k%2FauEjaUNBEqXj8Pp0OxKlCAj7O8FAcQZJh5vLUAv9P73WmyQQkSv1Vwin%2FkIjhBIdf3CZp2Scc8nHRmt2B2vvGITFK4N0Uh1ZytPgipZQlCqzaMIEXxjxYeZ%2BXyynGTKOR84Pxnadhgxcdinozl9ApL5M090gqxeXkdw1nER6yFVta0zZ0h%2BHhNHqcV9UL1asf4u3hcyulO0IpMxAU2R1xhTzALlalH%2BGoXitrLB5O%2BsPFqWnp1S2DM4OD3az9V3seHkruHEEZ%2FbETqDciClacW2pjMK2c9cIGOqUBYcPtHiUk4QfN1ZoVJoCkqM2bK64nNzzyyYpnLCstsWeEyiNq9nhNfihYqZHoQsrzuK6DR9FVYAbZJw2t%2FjvQW5AmYHYnhQrUl%2FurFYVcmvNrd%2BQJBSdTqBNsIv0t7hjkWD6aEVhGt9BB0Kqt78sgQJaGoPZwQx7To5mAecuAk%2BqHK9YiwM4uOs4qVPLsptYo2JGuZGXeAcnXQBjdy81lG5oR0wES&X-Amz-Signature=0efc1be5bf19f60b552c7cdee43f7e98cac82737d32b833e5984601ee404080b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNLALZR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD%2B7ANTQruuE4dJLPb9OJbSalWZ75Aq7kb3A34U2vrZ3wIgISKwh2Vr6db%2FKbjSB1BGloH5YuIsrraK%2BF3mlMU74w8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHhRGZ8PO38y4guOqCrcA9fZHWn7JhN6ZTfRYXA4twn8oo05LffCataJXhQi1bJOm5i3sAmq2%2FXutVaRpA3YRgGbvJaVTcKHuFlAXnCrDMIuG0KoSpasjOjvhqR5CBeTlYdhWgn7%2FoySuoIPrsDWHOGbAJ1%2BQA0xaoJ83sz3IfyfKTTcT0b1HPe26my9O50n03P07PBaEal7zKMuE2vDb1n4ewl2RUznyinoNxQQ6i8S%2FrusVkkMDNBLOk86PainToeUXdKaOE8SQQU9vivilk%2F%2BoQzwE13%2Bn9%2BH4J0IyOoEGibJn%2F%2FD7YI10V9qTHcRztR1SpimyafOkQvt%2FzdksXn38%2FeYoOADMlPqBAvLdTqCX21JWmFn1k%2FauEjaUNBEqXj8Pp0OxKlCAj7O8FAcQZJh5vLUAv9P73WmyQQkSv1Vwin%2FkIjhBIdf3CZp2Scc8nHRmt2B2vvGITFK4N0Uh1ZytPgipZQlCqzaMIEXxjxYeZ%2BXyynGTKOR84Pxnadhgxcdinozl9ApL5M090gqxeXkdw1nER6yFVta0zZ0h%2BHhNHqcV9UL1asf4u3hcyulO0IpMxAU2R1xhTzALlalH%2BGoXitrLB5O%2BsPFqWnp1S2DM4OD3az9V3seHkruHEEZ%2FbETqDciClacW2pjMK2c9cIGOqUBYcPtHiUk4QfN1ZoVJoCkqM2bK64nNzzyyYpnLCstsWeEyiNq9nhNfihYqZHoQsrzuK6DR9FVYAbZJw2t%2FjvQW5AmYHYnhQrUl%2FurFYVcmvNrd%2BQJBSdTqBNsIv0t7hjkWD6aEVhGt9BB0Kqt78sgQJaGoPZwQx7To5mAecuAk%2BqHK9YiwM4uOs4qVPLsptYo2JGuZGXeAcnXQBjdy81lG5oR0wES&X-Amz-Signature=60bfb4ddc7c3f470e742150d1c4cd7a4d79d96e068f4ccb5fcf62c8b7b54c4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M74Z5MW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEBKga4dF7KtHzWC8IQfUbLEEp71sGn1zLYDBHZBmF67AiA2bBTBPRYMvQIneR9F4e1FmZ7s76Y3u7o2KCWwpXNlRir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMezXaxt1yNlEenJ91KtwDD%2Fhu7iRWRwIlpjHzOo4jpax76GOpyc%2FAMVl%2BHGrtHXi0rX8%2BNq%2F7zKmLyZHMyVliKcZMJS4ugZHpqXFlr63zF08H8GGMGhtZejPm%2B7Y9ScUjfj%2FoqBb8Hmo7Qy1wdp07i5iKoGvRs%2BNvcR2K%2BVppGyeYjNDU8ouf1JVFnGwMq0FbrFpE1emNoBjsj0fbtIDEH69%2Fb6pAvBOSPhcPcSC1lBK7cmG781r0cc0bNHZwG6hPD8QQOJfs3R9EwSdfCqZ7vwGwTdbMMu3oAns8zLe4UDN4BZSG0Q3iK0kOu%2BL68P6y2ei0EJPN98MQ%2F0rcXpHBj72k0oRprWWdNVTMqxuioiVPjkPVccRZP6yQWd1vFHtzO576Nnz1GUTj2bxeyXjCgxZxrf3NTm3JY1OwLg%2B6gmFO%2B82wUeCF4TEcANkouJ%2FAIqWBlL%2FxnzIbq3GhIVsBuZbA7SruyyBpuJP48MNNGUzVzvh6bT3FW%2Bx15t%2F601uEljb9lBvmpk23NNVcf9%2FdeB04rvRTmcvVngT5xIDbgZH%2BVGMv2nSn7jsbMgzcnU0reYK60Sn%2Fimi2HO1EUq8ERpllbkEUG38OaWVL2moUR9tXxpQf%2Bbh2D4UkzQ8AEl%2BLQceWptskIj5P4okwi5z1wgY6pgGDlzXF3xGMSGyiJDCWXO4tI5CAGAKg41zh%2F7bo0PWI2J73t4Pb0ohe%2FUJcM2JJKDsXqdmufz58ckGOIDE%2FSmC%2BqTLNEx1wwzXSBXpMu2F03a7e4tEf6%2BV1VXOyNkoHocdryLtwzEcEHrod%2BxTq%2BHS%2F6OfGA9cz2RqJulZdyxCgGlrkR9h%2FJ9%2BleEWcEl%2FbUBQBsDjRk0exx629TxO%2BPacGosRR9AQu&X-Amz-Signature=611c207846cbaf92fafbbe0a9dceb08ef85894c53e3545e1efeefdcc54f92a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCFGVIM3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEGg%2BEh36z7GIzOx%2Bt8bjgNCxyTIsPvIbycZ9fvQXBiXAiEAkCik2HNI1RMTvFw8jaaFIj01stUEfGYblc47TMn43Fsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO95nsqNn86irux73yrcA4l5gtgHgXq9XLBsa%2BY4iPNxNVrr%2Bc4EtMEUQD82TNQP0XyPn7%2B%2F%2BKtrWlwzqrDA%2BPHbFhZA4DDPpemw0fVKz5BQJnmQogT9YuX8Bg2dev3wfJuQcdVJmy3BtN41RA%2F5tT1FFjNQ2kIeWz9h8JkVTyc51Fx8JPOJKqXIFjZD4bH7eTGHk6vPGHbLZ0mtZfH0KVjdPO5Pc2V7fRF7zg%2FlTlzyuwjr4vYILpCPIHlo51wOkpVg5ZXoAk3mBYWBD2fmy%2Fmd15NKXhZDJy0EDNWuETMnqZdUdkL18%2FJyysWU%2FaQ%2B3Ycq9loKArSrCHOT0%2BCatyn%2F7O9I3dwNKtjEIeborwUvxWLVIUxPKEpMEJsuJSXdM3iFPn5EVVCanCsl5NpUq2zqITxn61bUxEUeuuw%2BtEiAvhDJLcZzV4cvJSJ5sQZ04GvqZM1MhtnC7YDNMITJ3vehgDOPbiGDpdCOA5Appc8orociAb83RpK1kyZCD1b%2FJizekjKSmI14Dv1FbnV0Qdp2MPF%2BufvShaG9CsuJgUn0wnto7dwLW8lsLCJiH28mRIkULIG8lIn%2B0vn6U46d%2Bpqq9X7XA1upEsCyVhw7J%2FkO8LD2CNPwbPwgFpvIIexMUL%2BUpS3pn0GqjmdXMKCd9cIGOqUBCQcPCb0P7DRFdMjA5o0ty6JZcUbxjb%2BDsia4c%2FpxIDWvUBxdSTvACqRUOsrQm%2BI2nRELX6bbadoWC1XCAV3xGCCbUtTu03q8u19Z%2BH4Uhy9FSFz3AZiP7FZ4EDLa5J9Lzl0QeiHkofNfMmfCilybFvJLGC8ej3qYrRsTuK%2BJ8g9u0nPV9hE3m%2BUYHv4hchYHWSvnPoUbfRQcx3IcpsbF64Cq%2FnCo&X-Amz-Signature=cdb79980aca9b6fddc22fcb70d84a3c85219d390bc078baa95b32cb216818c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNLALZR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD%2B7ANTQruuE4dJLPb9OJbSalWZ75Aq7kb3A34U2vrZ3wIgISKwh2Vr6db%2FKbjSB1BGloH5YuIsrraK%2BF3mlMU74w8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHhRGZ8PO38y4guOqCrcA9fZHWn7JhN6ZTfRYXA4twn8oo05LffCataJXhQi1bJOm5i3sAmq2%2FXutVaRpA3YRgGbvJaVTcKHuFlAXnCrDMIuG0KoSpasjOjvhqR5CBeTlYdhWgn7%2FoySuoIPrsDWHOGbAJ1%2BQA0xaoJ83sz3IfyfKTTcT0b1HPe26my9O50n03P07PBaEal7zKMuE2vDb1n4ewl2RUznyinoNxQQ6i8S%2FrusVkkMDNBLOk86PainToeUXdKaOE8SQQU9vivilk%2F%2BoQzwE13%2Bn9%2BH4J0IyOoEGibJn%2F%2FD7YI10V9qTHcRztR1SpimyafOkQvt%2FzdksXn38%2FeYoOADMlPqBAvLdTqCX21JWmFn1k%2FauEjaUNBEqXj8Pp0OxKlCAj7O8FAcQZJh5vLUAv9P73WmyQQkSv1Vwin%2FkIjhBIdf3CZp2Scc8nHRmt2B2vvGITFK4N0Uh1ZytPgipZQlCqzaMIEXxjxYeZ%2BXyynGTKOR84Pxnadhgxcdinozl9ApL5M090gqxeXkdw1nER6yFVta0zZ0h%2BHhNHqcV9UL1asf4u3hcyulO0IpMxAU2R1xhTzALlalH%2BGoXitrLB5O%2BsPFqWnp1S2DM4OD3az9V3seHkruHEEZ%2FbETqDciClacW2pjMK2c9cIGOqUBYcPtHiUk4QfN1ZoVJoCkqM2bK64nNzzyyYpnLCstsWeEyiNq9nhNfihYqZHoQsrzuK6DR9FVYAbZJw2t%2FjvQW5AmYHYnhQrUl%2FurFYVcmvNrd%2BQJBSdTqBNsIv0t7hjkWD6aEVhGt9BB0Kqt78sgQJaGoPZwQx7To5mAecuAk%2BqHK9YiwM4uOs4qVPLsptYo2JGuZGXeAcnXQBjdy81lG5oR0wES&X-Amz-Signature=193275405c758d7d4e90fc0585823658839409a2b41bcee09a698e6f8d8a6790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
