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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKMGTNBO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKbK%2BTZ1We3%2BmdS2bA53b5GHiIiQwqi8AAQXzolrPPIQIhAM0oFgOjYYVeWs%2BZQuvQpkKIo9mdSNlLU%2FRr9QkQWep6Kv8DCHsQABoMNjM3NDIzMTgzODA1IgysXvnGiXAzgaXt40Qq3AMCa6xKqu%2FRtywBhMF60EClv%2FYOyDaCoK1n6mtr52X9jbxKRcRhOT59DMmAOQwCZvitNi6z5VKtijS%2F7cB5vaCnlPB%2FKPC3jzIGTawVrKTVIFQMImtub8bMLZtanfovvl0iVXRvivgPaZTOLuNwV8M7t%2BhoEDlKw%2FQS0zhwtKRLO%2B3nGVOCDCplrwwoUsCNk6x3kwSjPsRwBRmokeiWRSrx0JEpCb%2FW%2FrPzB3fl3kkSKKvhu9m55q09PGObvK64iu8hX4aT655PnUmGqXzH8Bmevurs6vClEJ40WVmOy%2FpzIFQMrSQAUXuZLdpMPHiFTNnDOq%2FPOugm8OmGv%2Bq3%2F3HwKUAoesdoq5ZS7P4QRkuUfkrgr0Qbpv0JMbe1F1P7qt9zzGjUQiQObYYLOEmVngHQTj4%2FbeAj9uCNssmSuuF0soeQV7qgnYutZVBCBFsjyQ5NY%2BJ8KIyYW3OvsQpGcY%2BRgnZEMWRFgVayYei9WcI7g5RFBUluaxvwm1I6Zhv4Y9SwkwZCIBsTu%2FK3hi6dcLbl1zvwwcGAgn3EKIitV3om1zVvYI3VoSR36APRDpNb%2Fs18dTlX0BGlz35mSU%2BZv06QeuifEL35%2F%2F93pdnRdr%2F8aqqAM558PbUYAx8kaTDfwKjBBjqkAeUQttgSHdGLcQbSKC4Tzd7Zb62M97Af3AwXFLvndZLZMBoT0RQdF%2Bzqs%2FoiE20uD%2FO9c%2BzEIwS%2FkbpH6NF16MousaDq4gHiKDAWRzXQqT3b2MLGWGv7lOVKyqw%2FMt4LzwBt4nbrkHC6XU6t%2F6iPZJJHLbPNJKrNDCkSyRiztObw%2BuUzXd3XPkgZRCHqYbxLwZhMRyS6TTYUGIoVKVhV6WOprNO0&X-Amz-Signature=5c7492940143c4a95fd32cb3158128026a09610195b6242e5bbd54b47ba622de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKMGTNBO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKbK%2BTZ1We3%2BmdS2bA53b5GHiIiQwqi8AAQXzolrPPIQIhAM0oFgOjYYVeWs%2BZQuvQpkKIo9mdSNlLU%2FRr9QkQWep6Kv8DCHsQABoMNjM3NDIzMTgzODA1IgysXvnGiXAzgaXt40Qq3AMCa6xKqu%2FRtywBhMF60EClv%2FYOyDaCoK1n6mtr52X9jbxKRcRhOT59DMmAOQwCZvitNi6z5VKtijS%2F7cB5vaCnlPB%2FKPC3jzIGTawVrKTVIFQMImtub8bMLZtanfovvl0iVXRvivgPaZTOLuNwV8M7t%2BhoEDlKw%2FQS0zhwtKRLO%2B3nGVOCDCplrwwoUsCNk6x3kwSjPsRwBRmokeiWRSrx0JEpCb%2FW%2FrPzB3fl3kkSKKvhu9m55q09PGObvK64iu8hX4aT655PnUmGqXzH8Bmevurs6vClEJ40WVmOy%2FpzIFQMrSQAUXuZLdpMPHiFTNnDOq%2FPOugm8OmGv%2Bq3%2F3HwKUAoesdoq5ZS7P4QRkuUfkrgr0Qbpv0JMbe1F1P7qt9zzGjUQiQObYYLOEmVngHQTj4%2FbeAj9uCNssmSuuF0soeQV7qgnYutZVBCBFsjyQ5NY%2BJ8KIyYW3OvsQpGcY%2BRgnZEMWRFgVayYei9WcI7g5RFBUluaxvwm1I6Zhv4Y9SwkwZCIBsTu%2FK3hi6dcLbl1zvwwcGAgn3EKIitV3om1zVvYI3VoSR36APRDpNb%2Fs18dTlX0BGlz35mSU%2BZv06QeuifEL35%2F%2F93pdnRdr%2F8aqqAM558PbUYAx8kaTDfwKjBBjqkAeUQttgSHdGLcQbSKC4Tzd7Zb62M97Af3AwXFLvndZLZMBoT0RQdF%2Bzqs%2FoiE20uD%2FO9c%2BzEIwS%2FkbpH6NF16MousaDq4gHiKDAWRzXQqT3b2MLGWGv7lOVKyqw%2FMt4LzwBt4nbrkHC6XU6t%2F6iPZJJHLbPNJKrNDCkSyRiztObw%2BuUzXd3XPkgZRCHqYbxLwZhMRyS6TTYUGIoVKVhV6WOprNO0&X-Amz-Signature=5d04455c8fa3880185d1fbc371bb08bc7940f80df703834c149538ed82ab15bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKMGTNBO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKbK%2BTZ1We3%2BmdS2bA53b5GHiIiQwqi8AAQXzolrPPIQIhAM0oFgOjYYVeWs%2BZQuvQpkKIo9mdSNlLU%2FRr9QkQWep6Kv8DCHsQABoMNjM3NDIzMTgzODA1IgysXvnGiXAzgaXt40Qq3AMCa6xKqu%2FRtywBhMF60EClv%2FYOyDaCoK1n6mtr52X9jbxKRcRhOT59DMmAOQwCZvitNi6z5VKtijS%2F7cB5vaCnlPB%2FKPC3jzIGTawVrKTVIFQMImtub8bMLZtanfovvl0iVXRvivgPaZTOLuNwV8M7t%2BhoEDlKw%2FQS0zhwtKRLO%2B3nGVOCDCplrwwoUsCNk6x3kwSjPsRwBRmokeiWRSrx0JEpCb%2FW%2FrPzB3fl3kkSKKvhu9m55q09PGObvK64iu8hX4aT655PnUmGqXzH8Bmevurs6vClEJ40WVmOy%2FpzIFQMrSQAUXuZLdpMPHiFTNnDOq%2FPOugm8OmGv%2Bq3%2F3HwKUAoesdoq5ZS7P4QRkuUfkrgr0Qbpv0JMbe1F1P7qt9zzGjUQiQObYYLOEmVngHQTj4%2FbeAj9uCNssmSuuF0soeQV7qgnYutZVBCBFsjyQ5NY%2BJ8KIyYW3OvsQpGcY%2BRgnZEMWRFgVayYei9WcI7g5RFBUluaxvwm1I6Zhv4Y9SwkwZCIBsTu%2FK3hi6dcLbl1zvwwcGAgn3EKIitV3om1zVvYI3VoSR36APRDpNb%2Fs18dTlX0BGlz35mSU%2BZv06QeuifEL35%2F%2F93pdnRdr%2F8aqqAM558PbUYAx8kaTDfwKjBBjqkAeUQttgSHdGLcQbSKC4Tzd7Zb62M97Af3AwXFLvndZLZMBoT0RQdF%2Bzqs%2FoiE20uD%2FO9c%2BzEIwS%2FkbpH6NF16MousaDq4gHiKDAWRzXQqT3b2MLGWGv7lOVKyqw%2FMt4LzwBt4nbrkHC6XU6t%2F6iPZJJHLbPNJKrNDCkSyRiztObw%2BuUzXd3XPkgZRCHqYbxLwZhMRyS6TTYUGIoVKVhV6WOprNO0&X-Amz-Signature=f8cd6ba754a5f4f40376f1829a3498bbce1af578d4332b2a352a05edbb184f51&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XW6QI7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfOc24UNb25DTR0oDOV0n4A7BNUd7l%2FOd%2F4F%2BRqyW8tAiEAsg4I%2FCXNpFP4DoPVNlr1OOGxdlBxW9PozNDo5y6%2Bl%2F0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLpILmnQg8HxHvzN4SrcA7BgqC2MrMLSTDgAaOgFZgJ9IeelNRKZD3tikBQKa4bZGhH45uOxu4U4I7GvY8PZah3%2B0eXgdq25z6flwvR0zZbqjQtvtr%2F0f48HsuwfIDpEOP8obiXNRsnJQOgC07gzKWSPBYoRvqwjF0V29LXrPEQR8VtLlh40JC20N%2FfOz0xUs46I2jUBVgWpOyNO75hW3bHJ2g9OaZrXpMI%2FHYnndZ5EA%2Bjbss1pnxtMSP31W2JKTDbhpicRlos74prws8X7ZsxkXSOeGLA7vZ9OA2wQSOvEC1SyLlAIZ50QFqoPrdPQyshJFDs9GUHktUoum%2FUfYgD48d6Jy8jKRizln2EL7SGnElZmkGddXnJr2NeFqklQYW037oYLUfROyaRNGqLJ0GkVGq6NyVRFCYEIfxqs88vbfaPinAHMQcq1dl25wG9DjlJba9TKT0PhyWfw7bZJyaasb%2FQSKGc9lAjkyII6iR4x%2BtUHJBEcMOB8tGIK1zaaAiwjFAhwqUJwEaaHQQc9MwZfK790B%2Ffil0v1FcYQNzVXDJciOIyRyqPq8rZUUgVDWVvg2E5o%2F1oBRH9CmsYmTQ0p9%2FZ38z7rD8BgKWt%2FIkyEjLRJmzWvE4bWte8rHJ1l461pADcMTxOT24SLMMfBqMEGOqUB7WALKX5J3%2BBjd20%2BwKDLsEDnxKYEUqclhsAlZt2Wi4jCjopXWsqEJIBQ5mw8id8J3twqXkJHn4WsYbfd%2Bi19DVE7E7IjldxzdRksQ5Bnivill4ylwxXV8QdKDGg40PmuWigDUQIuxc6X4BPgbg1RGMOl1Hjy1jN09IfVPkAFl%2BjJLvv0vfgvn%2FGUQVCNIPXQQaJeqzOzdvkBITngA5AAJQPNXyq2&X-Amz-Signature=f088f394942decd9e1b99fbb81158bbfa6ea3b0da572471c4c10aa6c61f70a33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRU7U5V%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoiI%2BvBUXU9H%2BAbXaaqx9LF6XnauiXUIWXuWHMD%2BzNiwIhAKrMXueG3SylE3Kmie4mG5Q1jkDjgy7wN1SGV9JLwSbLKv8DCHsQABoMNjM3NDIzMTgzODA1IgwaONCbfPZuA6wiSq0q3AN6qaOSwqrDSoqytFYm%2BpvyISj891hISy6k0gz5VX1tEXdhn93eU7ZTsyHzQAlKWzTKBydlnPosEZgOsCWSXE5JH0pro1C8YRKoa%2FvoRl0krLcIbm%2BvGhLwIfkXsHDM8B5S6VvYdtWjsN%2BQelIbwx7zA%2FIHZHyREwWB5CDszvFuDkeXC4jf1qg7aUXQ3UbZ50xDsbRebAWkfBfBBxWy5x7Iz3j9yu6D3bmiWQxxqsVLHeH3mXFlQyTashyVhPzzkvJfHEoawStSSv83X0%2FHfJ56XGnuqgt33GbYkWFtolMU3SzbCMpO0k0S%2FcuZ%2Fj%2FHfxa0i95NOkyHB4yherrqvYAb%2BA9NVf7YEwAny6wCJ1sYQdcK0lfflnmDEd0G5wPvlnSEr3t769XiqDQhSM%2FgbhjUjHfSZcQncTQ3WIUbyQB3I2lpwi1U29AyrdJN3FD1N%2BO%2F1xCf8Hh6vn3ofWcRuAg8yyec5OEutHTlHUj0NsxUh20M5QzBru%2FrcmPpVR9Royl9iQDMMCLxH6B8%2Faq3QYdqeU12I%2BSwU1rd6twf5rYrXvNnRNKlRGAPEjagIAG2LHNAJePVowhLUMlOdv2AkiyJrNNqhS4QEmhUzlECGLfShnaIcjtYKC3rYCD9HTDTwajBBjqkAc1MUKoq6OGSKsmuGRq%2FqR4P8Aw5MvaB8EPOdTBIzYnXD8nstCVcGJ2hDvoS6dU%2FZF3rk3Q1gUWApGDl45K6JA6As3Qj%2BmL%2FKSS7al7BgaXSbvjvaCTfxa2NDRRJoN38oKFfRACbn3YYguS4MVIg33HdVifsDxmBjZxtSDu1FZUGJ4a0IX1r67rvjnxtMisisNYnWddOTRnFkUvgRQf63H9dJDQG&X-Amz-Signature=b532ff6213a8366e5c71b09940a2993bd9cb25feed73b1e424a186a79c5c167e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKMGTNBO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKbK%2BTZ1We3%2BmdS2bA53b5GHiIiQwqi8AAQXzolrPPIQIhAM0oFgOjYYVeWs%2BZQuvQpkKIo9mdSNlLU%2FRr9QkQWep6Kv8DCHsQABoMNjM3NDIzMTgzODA1IgysXvnGiXAzgaXt40Qq3AMCa6xKqu%2FRtywBhMF60EClv%2FYOyDaCoK1n6mtr52X9jbxKRcRhOT59DMmAOQwCZvitNi6z5VKtijS%2F7cB5vaCnlPB%2FKPC3jzIGTawVrKTVIFQMImtub8bMLZtanfovvl0iVXRvivgPaZTOLuNwV8M7t%2BhoEDlKw%2FQS0zhwtKRLO%2B3nGVOCDCplrwwoUsCNk6x3kwSjPsRwBRmokeiWRSrx0JEpCb%2FW%2FrPzB3fl3kkSKKvhu9m55q09PGObvK64iu8hX4aT655PnUmGqXzH8Bmevurs6vClEJ40WVmOy%2FpzIFQMrSQAUXuZLdpMPHiFTNnDOq%2FPOugm8OmGv%2Bq3%2F3HwKUAoesdoq5ZS7P4QRkuUfkrgr0Qbpv0JMbe1F1P7qt9zzGjUQiQObYYLOEmVngHQTj4%2FbeAj9uCNssmSuuF0soeQV7qgnYutZVBCBFsjyQ5NY%2BJ8KIyYW3OvsQpGcY%2BRgnZEMWRFgVayYei9WcI7g5RFBUluaxvwm1I6Zhv4Y9SwkwZCIBsTu%2FK3hi6dcLbl1zvwwcGAgn3EKIitV3om1zVvYI3VoSR36APRDpNb%2Fs18dTlX0BGlz35mSU%2BZv06QeuifEL35%2F%2F93pdnRdr%2F8aqqAM558PbUYAx8kaTDfwKjBBjqkAeUQttgSHdGLcQbSKC4Tzd7Zb62M97Af3AwXFLvndZLZMBoT0RQdF%2Bzqs%2FoiE20uD%2FO9c%2BzEIwS%2FkbpH6NF16MousaDq4gHiKDAWRzXQqT3b2MLGWGv7lOVKyqw%2FMt4LzwBt4nbrkHC6XU6t%2F6iPZJJHLbPNJKrNDCkSyRiztObw%2BuUzXd3XPkgZRCHqYbxLwZhMRyS6TTYUGIoVKVhV6WOprNO0&X-Amz-Signature=c84015867280a265aa200067577b9e28560783100aadd04c130d5dd6d6cc3e69&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
