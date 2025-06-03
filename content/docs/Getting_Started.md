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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZD4GBZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBgzdYPXjYKnfUz6qMApgqHLC9rFOHFI8fRZS4ROJmusAiBUEYxSfa0pbgvIA5fR0gxOiYEFSuElw%2BsaqJd8N337uir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMkDRUolJoSUYXnRW3KtwDhlcY9P8tJhDedTkMms5kLPX3XO0lqICiRnwu6lBzD6vjnocdyRLRdTSI5p7VF7Urzg4QKHQ0Y1jD3b2mHxn%2FD1iSISDclJgObuz7wVBWrLL7vd7a1%2FtM26BJmXqPOkM7t6JuSSZWtsCjxuN%2FEnklNQyEoXGbEZnlQXMtQ1QousM%2Fv4Z9S3Lo6y8aQU%2F5z38uwGafeZ6M0pidMnpOnC15PDCANwzIYzZ1HdgzxGNmtMX4X%2FvnYbxkUub%2F2dUEGFtU6PokV6qLyLaM1RClyi%2Fik6tcgwTW0qQ%2BopN9lFcdKswWNce60I2eJpsTj%2FKzMDzlc0Xon75jrTzlaaHkx1FVrT3n09jS5duyQZqFTMQQhg8GE22qlUF73D%2BcrfypKasyVfjBjroOSN6vzEIXVoXNSvy9ERMTasL0JAZ6u5nTaXM9k31UocwO5cCLeCO3GkoM8EOc8qBgTs7nQcgJEwhMKzVXkiNdbY2fMBsYEGHKrokiXTN7azJQgtuzlLj%2FKHFZluwF5uEtG6s1vnDcz84b1zUVRCQN4hNEB%2BMBb3Uh1UccvgtCMNyKwaqkZ1xxPTZlT4Iq%2FCTauwslv9wBc3%2F6Y3gVrTBFDaClNUHXiLb8C8tO9VbeSnB53oqHC7gwktL8wQY6pgGafvHQMdWC3QnM6ja%2FUob5g4eRmZlL6bFZNgW5LktIeLx917aegoToYsMkGkXJ09HDHYkfDamU8pPS7PE4d%2FygW%2BtaSAH5dHhiHotznCum5hk3NXStl7LnrzxLtZeIeY8AJsu8HlYKHt9jBFGnI5oEDKJnmDKBclmvIsGZpGp7DGLaC1%2BYYYz%2F6QmoLQtdphdNYCO49%2BzyUO0dQC4jcTPFJStW5cbn&X-Amz-Signature=4b1e9394e808ae502946025d6df0bfa44f79b13b30ccf3d73a6fa5a6d3c3f4f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZD4GBZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBgzdYPXjYKnfUz6qMApgqHLC9rFOHFI8fRZS4ROJmusAiBUEYxSfa0pbgvIA5fR0gxOiYEFSuElw%2BsaqJd8N337uir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMkDRUolJoSUYXnRW3KtwDhlcY9P8tJhDedTkMms5kLPX3XO0lqICiRnwu6lBzD6vjnocdyRLRdTSI5p7VF7Urzg4QKHQ0Y1jD3b2mHxn%2FD1iSISDclJgObuz7wVBWrLL7vd7a1%2FtM26BJmXqPOkM7t6JuSSZWtsCjxuN%2FEnklNQyEoXGbEZnlQXMtQ1QousM%2Fv4Z9S3Lo6y8aQU%2F5z38uwGafeZ6M0pidMnpOnC15PDCANwzIYzZ1HdgzxGNmtMX4X%2FvnYbxkUub%2F2dUEGFtU6PokV6qLyLaM1RClyi%2Fik6tcgwTW0qQ%2BopN9lFcdKswWNce60I2eJpsTj%2FKzMDzlc0Xon75jrTzlaaHkx1FVrT3n09jS5duyQZqFTMQQhg8GE22qlUF73D%2BcrfypKasyVfjBjroOSN6vzEIXVoXNSvy9ERMTasL0JAZ6u5nTaXM9k31UocwO5cCLeCO3GkoM8EOc8qBgTs7nQcgJEwhMKzVXkiNdbY2fMBsYEGHKrokiXTN7azJQgtuzlLj%2FKHFZluwF5uEtG6s1vnDcz84b1zUVRCQN4hNEB%2BMBb3Uh1UccvgtCMNyKwaqkZ1xxPTZlT4Iq%2FCTauwslv9wBc3%2F6Y3gVrTBFDaClNUHXiLb8C8tO9VbeSnB53oqHC7gwktL8wQY6pgGafvHQMdWC3QnM6ja%2FUob5g4eRmZlL6bFZNgW5LktIeLx917aegoToYsMkGkXJ09HDHYkfDamU8pPS7PE4d%2FygW%2BtaSAH5dHhiHotznCum5hk3NXStl7LnrzxLtZeIeY8AJsu8HlYKHt9jBFGnI5oEDKJnmDKBclmvIsGZpGp7DGLaC1%2BYYYz%2F6QmoLQtdphdNYCO49%2BzyUO0dQC4jcTPFJStW5cbn&X-Amz-Signature=82a8a2dbe064c53b84d93be2801b815a2097167c507115a587d846d6a5e2580a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZD4GBZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBgzdYPXjYKnfUz6qMApgqHLC9rFOHFI8fRZS4ROJmusAiBUEYxSfa0pbgvIA5fR0gxOiYEFSuElw%2BsaqJd8N337uir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMkDRUolJoSUYXnRW3KtwDhlcY9P8tJhDedTkMms5kLPX3XO0lqICiRnwu6lBzD6vjnocdyRLRdTSI5p7VF7Urzg4QKHQ0Y1jD3b2mHxn%2FD1iSISDclJgObuz7wVBWrLL7vd7a1%2FtM26BJmXqPOkM7t6JuSSZWtsCjxuN%2FEnklNQyEoXGbEZnlQXMtQ1QousM%2Fv4Z9S3Lo6y8aQU%2F5z38uwGafeZ6M0pidMnpOnC15PDCANwzIYzZ1HdgzxGNmtMX4X%2FvnYbxkUub%2F2dUEGFtU6PokV6qLyLaM1RClyi%2Fik6tcgwTW0qQ%2BopN9lFcdKswWNce60I2eJpsTj%2FKzMDzlc0Xon75jrTzlaaHkx1FVrT3n09jS5duyQZqFTMQQhg8GE22qlUF73D%2BcrfypKasyVfjBjroOSN6vzEIXVoXNSvy9ERMTasL0JAZ6u5nTaXM9k31UocwO5cCLeCO3GkoM8EOc8qBgTs7nQcgJEwhMKzVXkiNdbY2fMBsYEGHKrokiXTN7azJQgtuzlLj%2FKHFZluwF5uEtG6s1vnDcz84b1zUVRCQN4hNEB%2BMBb3Uh1UccvgtCMNyKwaqkZ1xxPTZlT4Iq%2FCTauwslv9wBc3%2F6Y3gVrTBFDaClNUHXiLb8C8tO9VbeSnB53oqHC7gwktL8wQY6pgGafvHQMdWC3QnM6ja%2FUob5g4eRmZlL6bFZNgW5LktIeLx917aegoToYsMkGkXJ09HDHYkfDamU8pPS7PE4d%2FygW%2BtaSAH5dHhiHotznCum5hk3NXStl7LnrzxLtZeIeY8AJsu8HlYKHt9jBFGnI5oEDKJnmDKBclmvIsGZpGp7DGLaC1%2BYYYz%2F6QmoLQtdphdNYCO49%2BzyUO0dQC4jcTPFJStW5cbn&X-Amz-Signature=961281b47483253bf61ca533a4902b03cda12ba12101dfe9dc55051e094feaa7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNIFAI5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEJSm5dcKXcjfq5s1FXMmPyuosQYxGiEyewoxz8YDHBJAiEAuYfZo1LY5yECtIsXqGPKqd2OGhBK0i76414MCc85hQ4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEDWAuZxoTi4VyBctSrcA%2F78EwI30OiPDuExTgXKUQjh1ZDJfAHU5qsoE7YxFGTUXtZtY7d%2FB%2BrJdzQeuishHOyt9oX2Sn3G6vNpVLQRutbiqn8nrI2wtpE3jv7XoHhuvksf5FY4Fv7OZG4ZU2c9KPXBfRMF3NCoFhEx%2F5rYJN0VS1CkjIN6hLT475iMSmF%2BBxXshNVkefvq6sLs4BG2oArN5N%2FrKoaluuNqRKw6P01rmrOCihBFyE4EeeeS%2BSCyR2a%2FE9YksNUfoo8DXUX%2FBixi8PjG2ji9OqL%2FiuzkFJwYzVYhYjgrsroovo41u1Bx6lSDMiZy8E9st%2BT0Hzpzd4%2BBSE1ye21teORftqJwx1WkHtJuYHB3mH9ouFCShnjFw0900yXMP7Q2UKWqt0xdzZXxuL4iQRROH3yMK6W7eCVqew2ImAnW5Mot4Vd%2BN81oN4kUoe0KXjl%2FFu3pozHK2Q%2FSkEnTTMHtAockAGo0LheWo27cO2n37bHus7e3OfnBWpWckb%2FSAQ0WkDzMFXbzdtnBSCbqw3kfA9oCsbhhFRPTBtAgRHoB4DLM%2FLtya83Q7PZ6UlaB37%2FheWyVTMjSKxIeUfGA1Adw7sgCTQHJIFsyuHlw%2BZgOp4FGqr0OWlzMtCNyYEEnNWvXsoHYMPTS%2FMEGOqUBe3FhTK4fZYQN4UYXchTTXKZVI3X1JLfTQbrjRNhh4FPePoMZ9zkthXhOAEyWugu7VP5c15XU3h1aL9aYvMNqCMP%2BAXomFEROKyUqBNox3gUuJmC%2FHI16EpwFSif%2B948Jujxh9m4T7CpHNv36tPxy0pVBXp%2BgfN1yBtnf6kU0IdhL5vPSYpN20lntjidtqAAgrH1s75uBdwj1UR%2Brq%2Bex3Qbr2uwe&X-Amz-Signature=c48294eee5beb77ee7473cb8242cc97993e8a57d5526f03b1e4eb91073101154&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCA3B3C3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAE17EW7bJ8jXBqb3iScAWeBIkP54nqGWJwEZL8JaJtwAiEA6GxljJKjhiCG72SK%2BJ81QWl8edpj1toqj%2FBo3GgXA1wq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDK2dc0QWzA4rf1%2FUVyrcAxbTMKyty0fwUhyQ8zo15Ab5Gmb7UbDNhBcKJjSMm2Ant3rWc2p2C5%2F06se6gZfvU8bbaQ6w3QPn%2F3IaLSHIMKemxLIERbiSv9Ct3GoayDJlj6NUdpZkBau3ZB2AnOD6K14kPp8FYpPBvSpkJxa6yY%2FVxkehEUGW0vfzfT5ptIDU%2FmxTxXh%2Btb4XpRw%2FvIW%2BXrFXXgxlXLTNmCyAT3rRgMAclTLU5dlFjRA%2FNuLRR%2B2w0sYQwi%2FO8wgkLwqZhjEKvIOOHJVNtFq1mxCSu%2FUi8KMzZXULyTSvAL1KLBGSGA3A9%2BIxg5efeLL1ZRSbr5i6cbR3AfRUUjm%2F9RVS%2FeBn2%2BdXRrKYwdIKzHCBbWqjjy1HbBYQe43nbdhKTIReAyVcNuRjiTmw%2BEAmFmOWvSh0trckLoiPS4ZhmIapU1MYA9mKkwu7Qq1tgotP3E8lHgdlqsR0ji2bWD%2Fhw9qyZ%2Fq7Boe5snf7BNdP47hQVAQ4RklbalvFB4kttNDJniKq9DeQAleydcYEEqxSs8f3xa2Z5j7G568EA47XyLOEy%2BRvQS7vd2T%2BCMmchMmk%2FsLA7J66pxRGmEveS6fSMilKJECF9U28v%2FVKlPWTPL9FuESQCBjOBugUMMpsLIVSNHIrMLTS%2FMEGOqUBweecRxzv2X%2BodzVJfjDb7ix3G5CKEw%2Fubgk4i%2BSmI5UOihXAOiBWC1ugzl%2Fez5dWAc9oV4wmoLRT1x5hqjMW0E8MgduPZ9iewl2yfyehz6802aQnTUiSePO65I2geGs8bT9qr9VK63ZUZqP8%2BU2AZP%2B1fEsO%2BruKh5my%2BgnQqkNhYjTlFRaEMq7YA5c8vBa%2BjXFFtYughWmc0vKbW6eT4YMMSBXc&X-Amz-Signature=037a40c3529200874840bfd0700d0cd3db6744f367f30a27912fb0664179d3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZD4GBZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBgzdYPXjYKnfUz6qMApgqHLC9rFOHFI8fRZS4ROJmusAiBUEYxSfa0pbgvIA5fR0gxOiYEFSuElw%2BsaqJd8N337uir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMkDRUolJoSUYXnRW3KtwDhlcY9P8tJhDedTkMms5kLPX3XO0lqICiRnwu6lBzD6vjnocdyRLRdTSI5p7VF7Urzg4QKHQ0Y1jD3b2mHxn%2FD1iSISDclJgObuz7wVBWrLL7vd7a1%2FtM26BJmXqPOkM7t6JuSSZWtsCjxuN%2FEnklNQyEoXGbEZnlQXMtQ1QousM%2Fv4Z9S3Lo6y8aQU%2F5z38uwGafeZ6M0pidMnpOnC15PDCANwzIYzZ1HdgzxGNmtMX4X%2FvnYbxkUub%2F2dUEGFtU6PokV6qLyLaM1RClyi%2Fik6tcgwTW0qQ%2BopN9lFcdKswWNce60I2eJpsTj%2FKzMDzlc0Xon75jrTzlaaHkx1FVrT3n09jS5duyQZqFTMQQhg8GE22qlUF73D%2BcrfypKasyVfjBjroOSN6vzEIXVoXNSvy9ERMTasL0JAZ6u5nTaXM9k31UocwO5cCLeCO3GkoM8EOc8qBgTs7nQcgJEwhMKzVXkiNdbY2fMBsYEGHKrokiXTN7azJQgtuzlLj%2FKHFZluwF5uEtG6s1vnDcz84b1zUVRCQN4hNEB%2BMBb3Uh1UccvgtCMNyKwaqkZ1xxPTZlT4Iq%2FCTauwslv9wBc3%2F6Y3gVrTBFDaClNUHXiLb8C8tO9VbeSnB53oqHC7gwktL8wQY6pgGafvHQMdWC3QnM6ja%2FUob5g4eRmZlL6bFZNgW5LktIeLx917aegoToYsMkGkXJ09HDHYkfDamU8pPS7PE4d%2FygW%2BtaSAH5dHhiHotznCum5hk3NXStl7LnrzxLtZeIeY8AJsu8HlYKHt9jBFGnI5oEDKJnmDKBclmvIsGZpGp7DGLaC1%2BYYYz%2F6QmoLQtdphdNYCO49%2BzyUO0dQC4jcTPFJStW5cbn&X-Amz-Signature=07a3364d3932c2c08a0b59ad3c9288695172e727ac75859f3d4bfdc8305506f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
