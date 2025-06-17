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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMXZVCT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvT8NNZRIQp2%2FITd9WZ3lGT5i4%2FRxUcwj%2Bq605%2F2fYrAIhANGnlbJ0AHqo%2FGQ6QjLEsF0CyWO8Lw2ZOmrNM3aKCfZKKv8DCG0QABoMNjM3NDIzMTgzODA1IgwouqYZ%2BL4hN72ETRUq3APEmnI2mqU1tIrJlE0%2Be2PUDC5bmsgi8bFpziJtYwrcJM9a2IapDdAe1TSeSXuDz1op6U1NsF6hxA26LnivaO43jKPBzF8SwzhV%2BD6riWMqPPioIZzTTzBABeZpOVm5a7k6%2F7KAl%2Fb1X4qgbFzVJYL%2BgKaymOty%2BWJEL2YFB6xsGywqgNNiUZdVMMQg53s4qK3DCvOhrdxzdcl%2FXL85o2lGcTINF0iLXg%2B3x%2FDLlpllfg7gRRa5ChfMfKKtOYXSytsd%2BwooucjFcY099IY8wurq6r3x2XJvD9Ai%2F7zMTK5WA2XYMZjauF7szitEV%2B0cZwEt5xH0uH0s%2F0XHBLVpEX51wKseP7zqjE%2BWHYnBGD3YJVv4VUnqH9VvDHKFoH7HiqfA88IBqs7KgSUHlQ%2B9VjOGsx6LfPkn624hfLR5BDF%2BWnYjLg6E%2FFyje4zmBVL%2BJrOCyL0%2F1ZB9MQIJ%2Bl7CWaVgXGXIQ3KiYAKNXam%2F0ISS2kHOEyXARV0YpALRt9dMtnkmfJpKWwTebd%2F5eRQ0%2BX14CPov%2Fb3QesJFj%2Bz2QfO2Sps8JMkTw0WqdAqkUYHwO6rbY3tnN4EtUgds5MWt5BVgeE0BRLP8xp4xcurj2OnsAUbYazNPB81jlXr3nTCewcPCBjqkARjJxhscrqZnolO6rsaQSeSJkkLAr4oJK5qaL6EM1tlxGR1vY75zEUtZN0BWmbBtPpWv3a41z%2BYy%2BM%2FArhzKtaC85it2zZQMjYBfWNjork%2F9khJ1ToUtcDqMc59G6riA3bjmVTV0YQUKeEeuRqkM79zn31pHMz2g7y1JflTt%2BMr42QWDZzSNoUp9JSdeJuYkuOmBkgC64nrrAWLeumyglaanZS7D&X-Amz-Signature=ac19bc1ae77864f79797a32be364bc8984260648ceb50a61a6872349c785cef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMXZVCT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvT8NNZRIQp2%2FITd9WZ3lGT5i4%2FRxUcwj%2Bq605%2F2fYrAIhANGnlbJ0AHqo%2FGQ6QjLEsF0CyWO8Lw2ZOmrNM3aKCfZKKv8DCG0QABoMNjM3NDIzMTgzODA1IgwouqYZ%2BL4hN72ETRUq3APEmnI2mqU1tIrJlE0%2Be2PUDC5bmsgi8bFpziJtYwrcJM9a2IapDdAe1TSeSXuDz1op6U1NsF6hxA26LnivaO43jKPBzF8SwzhV%2BD6riWMqPPioIZzTTzBABeZpOVm5a7k6%2F7KAl%2Fb1X4qgbFzVJYL%2BgKaymOty%2BWJEL2YFB6xsGywqgNNiUZdVMMQg53s4qK3DCvOhrdxzdcl%2FXL85o2lGcTINF0iLXg%2B3x%2FDLlpllfg7gRRa5ChfMfKKtOYXSytsd%2BwooucjFcY099IY8wurq6r3x2XJvD9Ai%2F7zMTK5WA2XYMZjauF7szitEV%2B0cZwEt5xH0uH0s%2F0XHBLVpEX51wKseP7zqjE%2BWHYnBGD3YJVv4VUnqH9VvDHKFoH7HiqfA88IBqs7KgSUHlQ%2B9VjOGsx6LfPkn624hfLR5BDF%2BWnYjLg6E%2FFyje4zmBVL%2BJrOCyL0%2F1ZB9MQIJ%2Bl7CWaVgXGXIQ3KiYAKNXam%2F0ISS2kHOEyXARV0YpALRt9dMtnkmfJpKWwTebd%2F5eRQ0%2BX14CPov%2Fb3QesJFj%2Bz2QfO2Sps8JMkTw0WqdAqkUYHwO6rbY3tnN4EtUgds5MWt5BVgeE0BRLP8xp4xcurj2OnsAUbYazNPB81jlXr3nTCewcPCBjqkARjJxhscrqZnolO6rsaQSeSJkkLAr4oJK5qaL6EM1tlxGR1vY75zEUtZN0BWmbBtPpWv3a41z%2BYy%2BM%2FArhzKtaC85it2zZQMjYBfWNjork%2F9khJ1ToUtcDqMc59G6riA3bjmVTV0YQUKeEeuRqkM79zn31pHMz2g7y1JflTt%2BMr42QWDZzSNoUp9JSdeJuYkuOmBkgC64nrrAWLeumyglaanZS7D&X-Amz-Signature=6509b98d95f87c0066b0411b1621392ffc6b1c74d2b0634cc5bc59d65c9b7beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMXZVCT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvT8NNZRIQp2%2FITd9WZ3lGT5i4%2FRxUcwj%2Bq605%2F2fYrAIhANGnlbJ0AHqo%2FGQ6QjLEsF0CyWO8Lw2ZOmrNM3aKCfZKKv8DCG0QABoMNjM3NDIzMTgzODA1IgwouqYZ%2BL4hN72ETRUq3APEmnI2mqU1tIrJlE0%2Be2PUDC5bmsgi8bFpziJtYwrcJM9a2IapDdAe1TSeSXuDz1op6U1NsF6hxA26LnivaO43jKPBzF8SwzhV%2BD6riWMqPPioIZzTTzBABeZpOVm5a7k6%2F7KAl%2Fb1X4qgbFzVJYL%2BgKaymOty%2BWJEL2YFB6xsGywqgNNiUZdVMMQg53s4qK3DCvOhrdxzdcl%2FXL85o2lGcTINF0iLXg%2B3x%2FDLlpllfg7gRRa5ChfMfKKtOYXSytsd%2BwooucjFcY099IY8wurq6r3x2XJvD9Ai%2F7zMTK5WA2XYMZjauF7szitEV%2B0cZwEt5xH0uH0s%2F0XHBLVpEX51wKseP7zqjE%2BWHYnBGD3YJVv4VUnqH9VvDHKFoH7HiqfA88IBqs7KgSUHlQ%2B9VjOGsx6LfPkn624hfLR5BDF%2BWnYjLg6E%2FFyje4zmBVL%2BJrOCyL0%2F1ZB9MQIJ%2Bl7CWaVgXGXIQ3KiYAKNXam%2F0ISS2kHOEyXARV0YpALRt9dMtnkmfJpKWwTebd%2F5eRQ0%2BX14CPov%2Fb3QesJFj%2Bz2QfO2Sps8JMkTw0WqdAqkUYHwO6rbY3tnN4EtUgds5MWt5BVgeE0BRLP8xp4xcurj2OnsAUbYazNPB81jlXr3nTCewcPCBjqkARjJxhscrqZnolO6rsaQSeSJkkLAr4oJK5qaL6EM1tlxGR1vY75zEUtZN0BWmbBtPpWv3a41z%2BYy%2BM%2FArhzKtaC85it2zZQMjYBfWNjork%2F9khJ1ToUtcDqMc59G6riA3bjmVTV0YQUKeEeuRqkM79zn31pHMz2g7y1JflTt%2BMr42QWDZzSNoUp9JSdeJuYkuOmBkgC64nrrAWLeumyglaanZS7D&X-Amz-Signature=32f96b92757240e40e99f05ccbbc1c7ac5c494a91b503c5207b80b1d5ce10b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624J6PNR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BxW9dlFqFzkiTaaTMCBCFF8xo9BEnzz8BXxVYUIKqCAiAZJaWR65trWufvCMdcDoTP3xfKMmmvKdfYqTVMsnxgqCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMIsOdRA%2BlFh0WSW4nKtwDVYVQTGXJDdTov2mbFuQKFr%2BOU1riB%2FSt%2BOEMnLqvOmEEBBLW6EN1kdGDjdKy2iPNT4yjWlYUSWhN8WRDov5ZseAvqjOka8%2BmYu918QBO%2Flz6stAEIoqufcXvpbs409N1V0wUH2gXjMW%2B8PdirwSzTMwMmYapeVcvO2XMt0ukFsOzUDwERDdyzbKTasT9YupQIxgccvKsEQLN0uWT24l9NkyGR3egqLMj25OSR7cn%2BoeV1nTUgOD3IOtM4J9RrjwEf9PTt3AI%2Fomxs2uuXmtt%2B%2Fr9FccZgZDgnd1y06sClwwwHDD%2FhiYDQztOoQRDN%2BFlE8fYcZcbT8R3XzY9g0ScqFC%2Bk4a%2FNJCHl%2BWT1io4qSGAdFNrZ2DF4N9e7A8%2FTEXDE9JGc6QpK9I94MumdGCqqoeRBQDQ1ikq0fkky0bdpv0lqqsLFPdt%2F6puq8OVub%2FyBmWdXVDIJ4Wq7CPL0a5ZLp%2B2uCvlWY4AD7GOssXqTtSPQT%2Bk3%2B0Ga77xeZ5v5zQNgFVt9E5WQnqnPewjxgFdbxEFZMbcuuw4SYEfmG%2F%2BX90nVPNAlZPzFBHqWqOMtGyV1KDQItTQPtMIoE0xOoiGSRAIA2l9q2LZJk%2FGKEhIdPuTEMKJOCmxkgYd6MAwucHDwgY6pgE%2F6TjLb9fS7b94BlJACezuyn0zaLvP1ASTTdyId0CGN5X88nHmvgdR%2F1d3bxpMybrAJmVY5Qd9A%2BcheIlbf5fB4KcYIKGR3V6J0SqwQCQSO9Z4ejXnYGbDEnPp11LN6dGmLdLa9i1qtcg1GR7RWFlSVd9EN9B6GnsYteOVM8cQ5YzCT01Sf4hMpb7kY289J%2FXTTwDb8HfE8pAJD6GnIXqb9%2BuzrtXl&X-Amz-Signature=3df1e0bc1c040a6716aa06bfbdccd767345c6195abf1889e86b3ebbbe3c707d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SUOUZQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr%2BwPGrTsA9A5PjKTw58%2B6lPWrFmPOkRfLMJEVX7m3hQIgTKrt%2F0ykne0pkbKDhYirRP3%2BiQbNz6qJlhnfesrxWUkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGx2nRj%2BQLtZK2XuXCrcA%2F2LyKhYNE95BaUPLMyw2ozihK%2BBPbElhaQOYNEnp6VFwc0lvoQxwdj5pTd1GYlUJSBrAiAqKHExr1TfISfH5fPznMTXTw6NTEP8OjdKX3UxBFWIEDlmhZn19f5wP5FA1GZbDZjmAtZYCDDXlELjiu6KoFzac9m1pkxybfuRbtXMZXjuo%2BWGdLKqmzGmgTwgWbdoMO%2Bb9uRd4Xhg2SLbusEyyBSGalI22CcmAPaY3liIhxkpB%2BNNETpBPl%2FTtz5IQ24Y%2BzeUOy1eyvFcnVf28GqS3BogLNeqLhmAVPaITUFm9E0zcnIqQ%2BUtTTfF3tbhZTnXCiKzqQ%2BhE23ssL21zthW1FRv8pC4OdGlSH%2FDQ5dalEaYnskqeBnb077%2BhEA0FOEfVt8CCqlry5mGv%2F3W8%2FSHlRvqxh4w%2FDZuXpLJH2PFQqtn%2BGl2qO0h3sukaLvomp1owmD6KChC54E%2Bi9x5klTHU%2BIh6Fv7bga%2FsJGjScGKRPO8PGL6fn5hwDLSD2A6z%2FBk8hZqOp5VuU3rSqFwfguBmFPdVQdlltXpjp%2BYGp992QiG1P40lyW42FD87GkGXVu4LX42Uh%2FPgNh40SZt1tUm7UCQoff3y%2B74ABsyZJb2ni0TeKmeYm0NzhdSMJTBw8IGOqUBEa%2BC6I4AzhTp%2BdkgKooL6WdmzvuiKfDE6jqwTvyQmMI51CJSXOIeeL%2BL4ul1QYUWB3ddryuiR6g0YGg9LNrqhILb3a5cqecDQ5LKf5Uy0WxzqBFM9Tg2dxGRqjUTkgQRT9gCC9v1eH7VtOdSPE5b%2BTvuMk3eOZpahvavBgqLTANRH9KrGAgGsE6X4HGDoydqIMhMCK8TobISfsSqTaCa0A4VgOwW&X-Amz-Signature=06175d5f04d6c70cf8071a85af5d81581132edb5f71489802f2e7d049b3a9941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMXZVCT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvT8NNZRIQp2%2FITd9WZ3lGT5i4%2FRxUcwj%2Bq605%2F2fYrAIhANGnlbJ0AHqo%2FGQ6QjLEsF0CyWO8Lw2ZOmrNM3aKCfZKKv8DCG0QABoMNjM3NDIzMTgzODA1IgwouqYZ%2BL4hN72ETRUq3APEmnI2mqU1tIrJlE0%2Be2PUDC5bmsgi8bFpziJtYwrcJM9a2IapDdAe1TSeSXuDz1op6U1NsF6hxA26LnivaO43jKPBzF8SwzhV%2BD6riWMqPPioIZzTTzBABeZpOVm5a7k6%2F7KAl%2Fb1X4qgbFzVJYL%2BgKaymOty%2BWJEL2YFB6xsGywqgNNiUZdVMMQg53s4qK3DCvOhrdxzdcl%2FXL85o2lGcTINF0iLXg%2B3x%2FDLlpllfg7gRRa5ChfMfKKtOYXSytsd%2BwooucjFcY099IY8wurq6r3x2XJvD9Ai%2F7zMTK5WA2XYMZjauF7szitEV%2B0cZwEt5xH0uH0s%2F0XHBLVpEX51wKseP7zqjE%2BWHYnBGD3YJVv4VUnqH9VvDHKFoH7HiqfA88IBqs7KgSUHlQ%2B9VjOGsx6LfPkn624hfLR5BDF%2BWnYjLg6E%2FFyje4zmBVL%2BJrOCyL0%2F1ZB9MQIJ%2Bl7CWaVgXGXIQ3KiYAKNXam%2F0ISS2kHOEyXARV0YpALRt9dMtnkmfJpKWwTebd%2F5eRQ0%2BX14CPov%2Fb3QesJFj%2Bz2QfO2Sps8JMkTw0WqdAqkUYHwO6rbY3tnN4EtUgds5MWt5BVgeE0BRLP8xp4xcurj2OnsAUbYazNPB81jlXr3nTCewcPCBjqkARjJxhscrqZnolO6rsaQSeSJkkLAr4oJK5qaL6EM1tlxGR1vY75zEUtZN0BWmbBtPpWv3a41z%2BYy%2BM%2FArhzKtaC85it2zZQMjYBfWNjork%2F9khJ1ToUtcDqMc59G6riA3bjmVTV0YQUKeEeuRqkM79zn31pHMz2g7y1JflTt%2BMr42QWDZzSNoUp9JSdeJuYkuOmBkgC64nrrAWLeumyglaanZS7D&X-Amz-Signature=3541628ceb10cc4f8abd0a6c07aebb028e111f9b537acb6305f02ed1d5a9561b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
