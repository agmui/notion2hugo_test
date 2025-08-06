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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6OC2YV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVucTsvAFSNIiduwKdeVQBkgJwXSQcG9EXZKQ7dwmPuQIhAI3jYb1Sno%2FH42l6R08Er30xLA2Uymn9k4cSFlUp7wE3Kv8DCHAQABoMNjM3NDIzMTgzODA1Igyrm%2FZ2vL0DOeRoTXMq3AMXpESEdbV%2Fr0jMMwrryZWBdIxmXwWvWhhXkKZvsI1cJT2Z%2Fbw7Zn%2BISujziQUfqyHxGy2c1f2wGobilmCp9NcGw6lcV9oApy2W%2F25swRcYiY3yyfqPV0kTPugI8%2BUUFjDJIHN8ShfsUzLAhksxj854yA7dYoahfWUE1jWrteihp2H4VNpupM9g45cGL2vIBoSnr6aVPwPAs70A5p9Bvc8W5r4GOJUAWVpUKQxn4YzokkwBAxUIIctI79cFT34jyabNrrCn6g434htm15gqKVzCkv8vHF%2BXtN3Dbp8ADFJkaHCTygzze7iUpEGaH4Y80CzBjKuMBeoc%2Fn%2BBAJDMMUGj3Xg7WU1WKvI2idxPfq2fV7PrUxbwY5pWXxOY%2FHS1krEpf8sGugrtwQ01UkROXIYDvqTocFK82lestQBMQqMkte2tzQvL0cqJ1LqxgZPndoJ8SGbHo4S1MQfJPOKhK9sWQQFZMCvirbeEWTap2uCH7kvaFDMcCfoabNh4532B%2FZM7gew%2FRu47adZ9At428vqU4jcRKpV0KydyeA6wmq4guQAkjL9b1AKy6fsxLlHuROzxl9mc%2BqWeX3PpaCedhoiZNt5K%2FETmQpwd9je68uMtnRWNbHkiTgCHzvCtBjDM78vEBjqkAYlYuPyNcqJ0a60akyTXokMOYQTUShQIZCgGBpo8aTmsit%2FoNkWW70sON%2Be5Vm45RSQgFanSRcoIGckEB16TcBghIapLlp4%2BovMbOQ54nItY5CvaE8NPM115U6bvPWGJiwfnhsxBTpm533ok%2BBWyQsGTImRPquR%2FTcaHgaXWzpmLAwgQZIAI3WlFJp4nYX0RtCBEg0oq3TvLN%2FUuClI9YX%2FcOdfT&X-Amz-Signature=b59953d820701cb0931038a7b31e0c5d4db03fcba99cd177aec61f30680b85b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6OC2YV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVucTsvAFSNIiduwKdeVQBkgJwXSQcG9EXZKQ7dwmPuQIhAI3jYb1Sno%2FH42l6R08Er30xLA2Uymn9k4cSFlUp7wE3Kv8DCHAQABoMNjM3NDIzMTgzODA1Igyrm%2FZ2vL0DOeRoTXMq3AMXpESEdbV%2Fr0jMMwrryZWBdIxmXwWvWhhXkKZvsI1cJT2Z%2Fbw7Zn%2BISujziQUfqyHxGy2c1f2wGobilmCp9NcGw6lcV9oApy2W%2F25swRcYiY3yyfqPV0kTPugI8%2BUUFjDJIHN8ShfsUzLAhksxj854yA7dYoahfWUE1jWrteihp2H4VNpupM9g45cGL2vIBoSnr6aVPwPAs70A5p9Bvc8W5r4GOJUAWVpUKQxn4YzokkwBAxUIIctI79cFT34jyabNrrCn6g434htm15gqKVzCkv8vHF%2BXtN3Dbp8ADFJkaHCTygzze7iUpEGaH4Y80CzBjKuMBeoc%2Fn%2BBAJDMMUGj3Xg7WU1WKvI2idxPfq2fV7PrUxbwY5pWXxOY%2FHS1krEpf8sGugrtwQ01UkROXIYDvqTocFK82lestQBMQqMkte2tzQvL0cqJ1LqxgZPndoJ8SGbHo4S1MQfJPOKhK9sWQQFZMCvirbeEWTap2uCH7kvaFDMcCfoabNh4532B%2FZM7gew%2FRu47adZ9At428vqU4jcRKpV0KydyeA6wmq4guQAkjL9b1AKy6fsxLlHuROzxl9mc%2BqWeX3PpaCedhoiZNt5K%2FETmQpwd9je68uMtnRWNbHkiTgCHzvCtBjDM78vEBjqkAYlYuPyNcqJ0a60akyTXokMOYQTUShQIZCgGBpo8aTmsit%2FoNkWW70sON%2Be5Vm45RSQgFanSRcoIGckEB16TcBghIapLlp4%2BovMbOQ54nItY5CvaE8NPM115U6bvPWGJiwfnhsxBTpm533ok%2BBWyQsGTImRPquR%2FTcaHgaXWzpmLAwgQZIAI3WlFJp4nYX0RtCBEg0oq3TvLN%2FUuClI9YX%2FcOdfT&X-Amz-Signature=a4c1f59c24515563bc5d7b545eaa0ab797dbf4d4d7222956e8c65c735886d042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6OC2YV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVucTsvAFSNIiduwKdeVQBkgJwXSQcG9EXZKQ7dwmPuQIhAI3jYb1Sno%2FH42l6R08Er30xLA2Uymn9k4cSFlUp7wE3Kv8DCHAQABoMNjM3NDIzMTgzODA1Igyrm%2FZ2vL0DOeRoTXMq3AMXpESEdbV%2Fr0jMMwrryZWBdIxmXwWvWhhXkKZvsI1cJT2Z%2Fbw7Zn%2BISujziQUfqyHxGy2c1f2wGobilmCp9NcGw6lcV9oApy2W%2F25swRcYiY3yyfqPV0kTPugI8%2BUUFjDJIHN8ShfsUzLAhksxj854yA7dYoahfWUE1jWrteihp2H4VNpupM9g45cGL2vIBoSnr6aVPwPAs70A5p9Bvc8W5r4GOJUAWVpUKQxn4YzokkwBAxUIIctI79cFT34jyabNrrCn6g434htm15gqKVzCkv8vHF%2BXtN3Dbp8ADFJkaHCTygzze7iUpEGaH4Y80CzBjKuMBeoc%2Fn%2BBAJDMMUGj3Xg7WU1WKvI2idxPfq2fV7PrUxbwY5pWXxOY%2FHS1krEpf8sGugrtwQ01UkROXIYDvqTocFK82lestQBMQqMkte2tzQvL0cqJ1LqxgZPndoJ8SGbHo4S1MQfJPOKhK9sWQQFZMCvirbeEWTap2uCH7kvaFDMcCfoabNh4532B%2FZM7gew%2FRu47adZ9At428vqU4jcRKpV0KydyeA6wmq4guQAkjL9b1AKy6fsxLlHuROzxl9mc%2BqWeX3PpaCedhoiZNt5K%2FETmQpwd9je68uMtnRWNbHkiTgCHzvCtBjDM78vEBjqkAYlYuPyNcqJ0a60akyTXokMOYQTUShQIZCgGBpo8aTmsit%2FoNkWW70sON%2Be5Vm45RSQgFanSRcoIGckEB16TcBghIapLlp4%2BovMbOQ54nItY5CvaE8NPM115U6bvPWGJiwfnhsxBTpm533ok%2BBWyQsGTImRPquR%2FTcaHgaXWzpmLAwgQZIAI3WlFJp4nYX0RtCBEg0oq3TvLN%2FUuClI9YX%2FcOdfT&X-Amz-Signature=c6168c8a59db16ab450b69e3d829f0cb5021e1230f4511fe1018f4506e317303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPA7GK6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCz%2FSbLtAy5ylEM1vsXS1IisQTlRUKTPUpXM8KRdNKqsAIhAPdPDLgC0JjJwiMfGSfv2d0FpIXAw5w4q3Das5kG6tE2Kv8DCHAQABoMNjM3NDIzMTgzODA1Igyxx29PFaGlw7Rzc4Eq3ANI75rKTHnUsWSLRJ2wifUTiGSlXsBY2ywJsZZpZteHMuSgXuFtnUNg9o4b3Y%2FT8%2BkRPTCY1N6WcVjw6OeE282Q9DY3LV%2BXgUfS7NE4O%2ByAWRXjXPEYMcgcJq4Aj8c%2BM3iz4x46E%2B7iQVZ7UjGieuMKF5nvMqluallYX%2BTU%2FW%2BPXr5pxhQvMim%2F0%2FPd6lqCgcVipAE45mGP%2BFwzVzaHELlcbDub405gsIScyJM306mTgJ%2BdHrA3M1t7xO4LsV8tItK8L8Kd%2Bak6Y5Ivf7v%2BER7lqBy7NkF4FaSYJWL8IzufNNIPExWVcDsek1X7mdAPxPe0%2FOPkb8GsPbs4mc%2BByWryts5zRMuGLRLQ6hGIuMK1EFgYyZBi5zUd2wl9SP1zrHYXypYUaaQhKQfJueUphoNCEZmWQDYZMKqe5ZtMf%2Frt82qPfIJoC2w69fJELWaEL2tsjEXuNX8%2BuCJafanBvDZjeCOCbveakAL0jrBGcYAb55DbsohNFGztVulzF1zc0bCisE%2BZjKUToK5dndjsOqYpfno19ZvUQ8oX1BeGeWAtwmaU1o%2Fr8K0uQV69yhZosm5h4MJAsbwVHbkQETyxm6JkvTwOjzu6JolH2XA8%2F4pAhOfPAq6BFxJ28uvsFTDJ78vEBjqkAdRbKyYV60EjSADkQlBsxNGqcwTwo%2F5HPIpWOk9PSr0JPdtlNVNo3kDbLQeyYXLZhxYl8v%2FLiIUxa%2BSSa7vhvunVsWpBM%2BPqaZ7A0r9F0SR%2Fh1%2FTnkB0WsaWOj1PZ3DtdBNOZy1KKqkLabxCPMFne9%2BYEqZXFQsdClfdeE0PMSALJTU8CeM05le%2Bmcq5XuDxyJUrHo5qXb9Z5MkQoB5dxcYm9I99&X-Amz-Signature=c2f498fc2158481e4587c6b51357c32f1bdb69a479ece5b024733fe7f0536058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAL4KLEW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAinHu0k6%2FELh%2Bp3zVA%2BP8oQyhAB9kprw6e6ldwfvIGcAiEAiOaHeTqMAQlMltlYQ2td6M8leyUeGpTVL1GDWpdo4RAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKk2fX1nQd%2BHm%2B8RfSrcAyjYsGmflhyUwS46%2FsySsKchTeQx8e0MMhSyY2mh1I%2B%2F2cMRN%2FUFYjWQMCczA%2B1gRDUGh45utaJogvP2UPxARIbKbGq8S8QxveB29X4dFb%2F%2FfJAlXngxzWcjTXWaCPKvhpKQIj9n%2FNQbGha7rVo55TxwLNV%2B4QepLu6U74eJoWa4c%2Bdwd7QgzBE8AP3TEYT9NvkdAqlryUHz9g%2F6aQdXwdrm7H5s1YVmaliZbbkwLzJrT%2FnufSQbofz2Pm%2BP6lE9StqulApD%2B2HKhpucDsv%2BAlwYwOMtpZ97BO1SXDXxkbe5%2B0cTUKV%2FH9KSKBaUaGKB4emVF7jcTLQymkefCaSFzTpIW3HtAUQUEcP0%2Bg%2BECuImOKeS5OBsgC3Vel1F6ySUKgPBa0PLywI%2Fvj2MD%2FPz6N%2B6HFsfhvBpfbs71esLLbLb%2F%2FQjO0D6owd6a2N5TGh%2FfUxB55KQAx4qn6ZiQEPHhflDRIYiwjLktec8FiuP1Fm5zBsoCfh7s7GScljUXnTF7YO9SIRm5FIHjkB0D%2F9xVA3l4idgo1wejUXZAJ1FXubFkCX6Sup0Qk8hp0Da2xk62r2G37f6czSn2Ml3O0A9PbawcmVTUyxcu27m%2Fn3kAv4FYAitsR8JuKUULC%2BcMNDvy8QGOqUB5Hb4nzQ2NSI5H7tUv2qsMyUTP5JO28U39cxpy4F%2Br7Ig32L%2BQVN4j41vxXjq%2BI2iH6Ex4d7H877IO80Gq3tEZJi4B%2F%2Fa3Gmo3%2FMgegszhryQrTzfQLjAD5D7fnCF9xuxEimgB1tJu2okCYkTulRXBGzMCdTc7sItkaRVxKV0Gmp9LIrmbRIddkfketQh7Qws6s2VVoS21MHCBjZsgeQFtvoZmbxs&X-Amz-Signature=ff712d447afcbb72570ffbec7116844966607cc55efe420d87e82d19f1c36510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6OC2YV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVucTsvAFSNIiduwKdeVQBkgJwXSQcG9EXZKQ7dwmPuQIhAI3jYb1Sno%2FH42l6R08Er30xLA2Uymn9k4cSFlUp7wE3Kv8DCHAQABoMNjM3NDIzMTgzODA1Igyrm%2FZ2vL0DOeRoTXMq3AMXpESEdbV%2Fr0jMMwrryZWBdIxmXwWvWhhXkKZvsI1cJT2Z%2Fbw7Zn%2BISujziQUfqyHxGy2c1f2wGobilmCp9NcGw6lcV9oApy2W%2F25swRcYiY3yyfqPV0kTPugI8%2BUUFjDJIHN8ShfsUzLAhksxj854yA7dYoahfWUE1jWrteihp2H4VNpupM9g45cGL2vIBoSnr6aVPwPAs70A5p9Bvc8W5r4GOJUAWVpUKQxn4YzokkwBAxUIIctI79cFT34jyabNrrCn6g434htm15gqKVzCkv8vHF%2BXtN3Dbp8ADFJkaHCTygzze7iUpEGaH4Y80CzBjKuMBeoc%2Fn%2BBAJDMMUGj3Xg7WU1WKvI2idxPfq2fV7PrUxbwY5pWXxOY%2FHS1krEpf8sGugrtwQ01UkROXIYDvqTocFK82lestQBMQqMkte2tzQvL0cqJ1LqxgZPndoJ8SGbHo4S1MQfJPOKhK9sWQQFZMCvirbeEWTap2uCH7kvaFDMcCfoabNh4532B%2FZM7gew%2FRu47adZ9At428vqU4jcRKpV0KydyeA6wmq4guQAkjL9b1AKy6fsxLlHuROzxl9mc%2BqWeX3PpaCedhoiZNt5K%2FETmQpwd9je68uMtnRWNbHkiTgCHzvCtBjDM78vEBjqkAYlYuPyNcqJ0a60akyTXokMOYQTUShQIZCgGBpo8aTmsit%2FoNkWW70sON%2Be5Vm45RSQgFanSRcoIGckEB16TcBghIapLlp4%2BovMbOQ54nItY5CvaE8NPM115U6bvPWGJiwfnhsxBTpm533ok%2BBWyQsGTImRPquR%2FTcaHgaXWzpmLAwgQZIAI3WlFJp4nYX0RtCBEg0oq3TvLN%2FUuClI9YX%2FcOdfT&X-Amz-Signature=250329857d4445a29daf449e887e2b01ff74a1a6a9c445d1049f41cb7f7ab915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
