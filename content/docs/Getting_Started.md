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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2D7N4T%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG6pV5Ph3XbT4gSjqBR4jIVGsk6%2BZtfDH912WRlphU8NAiAD4BP6%2FIiHG2z2hrwVGS3%2B33EguIUypj48tbb6T8INliqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7yOaMDlfnnkEMY2KtwDRAULrKra7leV2oURQoA9lVf6JR%2B8IBXgerZPFrpb9bLEm6pIQA8rkDrfRmLuSk0bY32WYvkuCbZxXQ3NhGry5g6awv5ygcsigZleGTaDIJ0CvntozHw389tqYXYj8856JEp3AswEaR50V1%2FnfZyUfTmv0XarbXzjpiP32JB0%2BVC2z%2BhRVK0fsB0R6UrlXiJTBVNoXXzpdVbVmDasbzGO0YTjZcP9knJJxZrzf9a09X6VKho7Ish%2FzpvAfXO%2FnN6t99zTT1StEoxf%2FUU6g8iXYrc%2ByzZNJ40sAXCMsRqoXJBtlMq14J3k7Ezl1NR89MjRvNOJj8Hd428JoDGRLGkeaqVgU4QLhkBKXrejOGhVZ4maLmc0TCt7L%2Biz%2FjtWSK18h%2BI3XEnbnAj0JEnEilAmEKE1gz9YjSoYROdrXCalu%2Fxm7vn2wiExid1i6n%2B3DtJq7gDTKu%2Ft52Zm4eLVq20buXVPgx5ak3tzwE1V%2FQIWHKCzPY3CAasH8bkvdsTe3waVzPa1E5l6eK0kQNlYoJnMmqScvDqDn9%2FNXzERSLuLXMZigdtYiPvbjyOFvXuAW%2FEpqAKvGA2xCkJ5E19inwODk4wqqR61ND%2F3%2Fd%2F1%2FPjKBtL0aCDi7ubSG%2Fdk%2B2Yw%2B4GRwAY6pgGsyNAvOYKaafsi%2B7yb9nIBxZb5S2AVFcxNM8Te79bt1uDf4IvLBIfs3AzKZW7I6lTSmA3aANccH430UW0GyItK1SSW9LHHUVxIZnRwSwMAzr4jWFxS5Vwj1WbwAGNqQBFRgg8NpA%2BXifJybPmP18n9MWZOwHLfBKVRXncDTu5%2FI%2FIJs4G03RoyYullpKX0ibsjVlB2fvZdn5P0tmLDnDFgq7gca78J&X-Amz-Signature=5a6a2b05efa3b9ed999cdc33c08c994dc0edd83d4b5e0ba8777046eddccae973&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2D7N4T%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG6pV5Ph3XbT4gSjqBR4jIVGsk6%2BZtfDH912WRlphU8NAiAD4BP6%2FIiHG2z2hrwVGS3%2B33EguIUypj48tbb6T8INliqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7yOaMDlfnnkEMY2KtwDRAULrKra7leV2oURQoA9lVf6JR%2B8IBXgerZPFrpb9bLEm6pIQA8rkDrfRmLuSk0bY32WYvkuCbZxXQ3NhGry5g6awv5ygcsigZleGTaDIJ0CvntozHw389tqYXYj8856JEp3AswEaR50V1%2FnfZyUfTmv0XarbXzjpiP32JB0%2BVC2z%2BhRVK0fsB0R6UrlXiJTBVNoXXzpdVbVmDasbzGO0YTjZcP9knJJxZrzf9a09X6VKho7Ish%2FzpvAfXO%2FnN6t99zTT1StEoxf%2FUU6g8iXYrc%2ByzZNJ40sAXCMsRqoXJBtlMq14J3k7Ezl1NR89MjRvNOJj8Hd428JoDGRLGkeaqVgU4QLhkBKXrejOGhVZ4maLmc0TCt7L%2Biz%2FjtWSK18h%2BI3XEnbnAj0JEnEilAmEKE1gz9YjSoYROdrXCalu%2Fxm7vn2wiExid1i6n%2B3DtJq7gDTKu%2Ft52Zm4eLVq20buXVPgx5ak3tzwE1V%2FQIWHKCzPY3CAasH8bkvdsTe3waVzPa1E5l6eK0kQNlYoJnMmqScvDqDn9%2FNXzERSLuLXMZigdtYiPvbjyOFvXuAW%2FEpqAKvGA2xCkJ5E19inwODk4wqqR61ND%2F3%2Fd%2F1%2FPjKBtL0aCDi7ubSG%2Fdk%2B2Yw%2B4GRwAY6pgGsyNAvOYKaafsi%2B7yb9nIBxZb5S2AVFcxNM8Te79bt1uDf4IvLBIfs3AzKZW7I6lTSmA3aANccH430UW0GyItK1SSW9LHHUVxIZnRwSwMAzr4jWFxS5Vwj1WbwAGNqQBFRgg8NpA%2BXifJybPmP18n9MWZOwHLfBKVRXncDTu5%2FI%2FIJs4G03RoyYullpKX0ibsjVlB2fvZdn5P0tmLDnDFgq7gca78J&X-Amz-Signature=b694b9172a0a948ad28a6de9a020c3cebaa747a85df66a8b1745f3296f33b7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTLFKSSZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD3Esyj9j8DVSDD2MsyPAdktntRWlaPzsUeyd1CC0CiCQIgGHEU65bZ16itQtS%2BBP3QW7bpnQkV5X5yclAAD2gzOAUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwBbApwki4eoJMP8CrcA2UCTzVaOcHeZgcFEq9i5QJOy8oRLSmlQaPGra1K0h734Vc9HU1NCCH6%2Bpv6Yj0JZeAsQtvqMpKx2HvDdD0CAaW5Tq8WHAVfDugWsA2Dh5T81qUpVJlblsCQBjbxg%2Ff0vfb6loqk3W7yoYOPbs39ZILH7COYwAn2%2FHAciGYj7M9T3d5pznT3spLOUjLPKwU%2BMdUrlSUS33ed2afeJiy2gyqFYGuBnRPf1cWH6My%2BFfJQi79SdTJ77dQVu0ywpiu%2BO0wmnHzGVVcpvLOZ2QgcDqS6jGiH5tXcRhAjqRnACs4hh604%2BV8uLFoF94ae%2F8QovCvS1oDzjCyQA4wp2c%2ByvNpUdg%2FGiML3KtEQihvi13h6Ousl%2FvsZc8REAT0bvCaHBDJt5JBtJbnAW0jzKCX8nDoajavDUTrLs0Nlm9WprKer7OOkTxAWaQUCiJwuXiY7Tp%2Baoe1g2FcgjBNuWJDvbzqJ%2BkXyvWL0rI817dAkSznG9%2FH5b%2BmtSpeL0DLYAx2iEnPn7pQMZNw07KzgjoRUGjIvLYzaKmN1D%2BA552SF84vrzmiuMJSNAM6G%2FR6IeoLa359L7khMzS%2BAU%2F%2BUBoO0Ybe8z9gqD8bsV4xQFj7kdLrnGb6KUHjUBHM%2F4QeVMIGCkcAGOqUBWZpJp4iIdEEUej0bqeZhUvbLGEfm%2FHMPIBvYcLsfPxHHx3bspQS5kkewKR5xO6XWg45JsabrtY3rlno3FzxzVua1PsQ3NrQ0BYb6rpLtuO0Wo2y2Zws4A59BJnxnxzKbYvLBosYZS9mYN4CPywKtbaB%2FeocmFBBeXxg%2BLXBLkmo3W7YmrHKy5LJnwd9PpBP8yogZpNeskjEv%2FgmYk183H5hzprJ9&X-Amz-Signature=2862bb6714690cf69259db9751ad19c1728ce206f58fe6d0c825a01b5b598afc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3D3TYJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDaPalzw7It6%2F%2BsTIqZuOD42rMyqMdH61l9mGWYcrPz3gIgEi9FzlyB5y%2FymYtUeQ8eaEKTretSQr0WUtqN3bhQIwEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM7l9Z15mXSrKFU2yrcA2W70ffcPSOoWAzP3jexdq5OTLehxzhYozVLCv84VmVjsh407ecC1nWPRf7r4YoXwwEH9x39FCDcB2pMQFQTIxggcaGQ3eMqBxshwDsHZmuLW29EMlqGHnINt1W2H3ool2zi0j1OIJUGXIERm3ALBZ4AyCDwqOXPvBp7goPkvaP4vjQDdOtcN%2Bq7x%2FQW5tMXZqadQvVLmEVjXQS%2BmVdD%2BOIjBbH0%2F1i6%2BeQLcDAeUQc9XoQx%2FxMUGskBq7GsvrLaUSYC9t77%2FxH6PeIWqZKeAEyAIyEP%2BiaKym%2F3xyZKgfdGMDPCsQHUI5WOJceDeeq8ND2Tds8y8wHK2C2OBwA%2BQBV8Nuz4VMLEEjeOqjBEI%2F25RGldIYi9UyPcWakQzhXCPqGMZzpWDUG5v3p6wPZaVNo2Msm7TSgQNvc5Ny0vPShSKlIEc3xoDrB55j2uciJZ4xocKKdRe3teJ8CHy8DhCIK7llFB8wP9TjTek1zqhFQEdFRGmLZ%2F6I8BFn3dB395582W5E8qGZt4EbI0OerC4CzCYpS3WBqMwVqL3rbp%2B3r1OXL41hQkhjXh3tnjOTT9JrxnwjSO1534Xe8ULnBmuherGTy6gkZ8ullz2Y%2Fak%2BAD3kIE4Icr%2FOu04zY%2BMNWBkcAGOqUBsTo6kxeGWdia%2BKYgnHVpikgnJmuhBjBKsm%2Fl217OdDCXXb%2BCDW1y0q0q8%2FvFCfWaZXn%2FKEWLgEBmudeuYhztMYFQOFv%2FgltnRB51ZH2ac%2BICm2%2BLO1FHxyf1B%2FVLNbT%2BQrTQWmzXZLBQfPaeVrkbLG%2BV%2BcQsLf39Iuip6XTCK2F%2BNRw0MMeCOs17AsOwZ5f1ql7EZucIQmgxP0f1ZeHJzg0Lbbo%2B&X-Amz-Signature=8c9cb69f158f3402925c6bf405578772c0674d46c012cf4de28721302a5dab84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2D7N4T%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG6pV5Ph3XbT4gSjqBR4jIVGsk6%2BZtfDH912WRlphU8NAiAD4BP6%2FIiHG2z2hrwVGS3%2B33EguIUypj48tbb6T8INliqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7yOaMDlfnnkEMY2KtwDRAULrKra7leV2oURQoA9lVf6JR%2B8IBXgerZPFrpb9bLEm6pIQA8rkDrfRmLuSk0bY32WYvkuCbZxXQ3NhGry5g6awv5ygcsigZleGTaDIJ0CvntozHw389tqYXYj8856JEp3AswEaR50V1%2FnfZyUfTmv0XarbXzjpiP32JB0%2BVC2z%2BhRVK0fsB0R6UrlXiJTBVNoXXzpdVbVmDasbzGO0YTjZcP9knJJxZrzf9a09X6VKho7Ish%2FzpvAfXO%2FnN6t99zTT1StEoxf%2FUU6g8iXYrc%2ByzZNJ40sAXCMsRqoXJBtlMq14J3k7Ezl1NR89MjRvNOJj8Hd428JoDGRLGkeaqVgU4QLhkBKXrejOGhVZ4maLmc0TCt7L%2Biz%2FjtWSK18h%2BI3XEnbnAj0JEnEilAmEKE1gz9YjSoYROdrXCalu%2Fxm7vn2wiExid1i6n%2B3DtJq7gDTKu%2Ft52Zm4eLVq20buXVPgx5ak3tzwE1V%2FQIWHKCzPY3CAasH8bkvdsTe3waVzPa1E5l6eK0kQNlYoJnMmqScvDqDn9%2FNXzERSLuLXMZigdtYiPvbjyOFvXuAW%2FEpqAKvGA2xCkJ5E19inwODk4wqqR61ND%2F3%2Fd%2F1%2FPjKBtL0aCDi7ubSG%2Fdk%2B2Yw%2B4GRwAY6pgGsyNAvOYKaafsi%2B7yb9nIBxZb5S2AVFcxNM8Te79bt1uDf4IvLBIfs3AzKZW7I6lTSmA3aANccH430UW0GyItK1SSW9LHHUVxIZnRwSwMAzr4jWFxS5Vwj1WbwAGNqQBFRgg8NpA%2BXifJybPmP18n9MWZOwHLfBKVRXncDTu5%2FI%2FIJs4G03RoyYullpKX0ibsjVlB2fvZdn5P0tmLDnDFgq7gca78J&X-Amz-Signature=0f19e298e93f44e2ac6b62b64fff661412e81e2d76e4057b607e260040e20b51&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
