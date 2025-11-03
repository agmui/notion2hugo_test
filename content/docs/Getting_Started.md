---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH76E63N%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2plXT8yYRVBrsMp1G8NBZgD0tKm5XGRkDup8baG40%2BAiEA5ayZ1rjeTUDQsihJ4cFRIxwX75fUC0qvglBh7GH4tlgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKd8MCCQZgk2ywWcBircA0QFASrZgD9qYGfRtQVfp9%2BebAyALh4AF05Sp7ibr%2Bwze2hODxodejQMTDv%2BsYe0F6bCqLH2CNVKEg7ajJye6dyzKWRokdO%2F4L2mLNTjqetVwDl4ffS4TcfU0tH16%2B11HDVCgebSy8MD8V%2B23BTIvrHVAcdwAAsC30R7lgMPnJ%2BfsAtkxuVsMYp8fFbWwaIuHXZoUG7urZ8IT5%2BqwdKutjynNJKxn0Tx%2B9YOu3zY3L5qJgftWjMP%2F0m26NPOjndvZuAFSFXaWbMWVwlgl8eN095fxHVcl9yxLQM2ExXSG2gMlL%2B7sLFq%2FexmdVQ26ojt8abC7LUI66AKM%2FWoZhxHWCH9PXphHVu2qVQxQ2TkhqbY03SVFM2WOHeunStQqtpNUFAktoDnie1mwTNHl9IQdYzVd1iXZAIJCxZgYIwEQ5EnwYPRIUSmnBh%2BTIZAJHwce79XhPhtLyTTerDgdwGAsRJVI4tvNiF7DXtC5qSnU%2BsjsQeKnZ7JThUPDLpa6vVWpma6b3xdLkDwUTK8npKU1iKjRHXZxqh4rXdIaiV1i8LNgjWeL4XWksjkSavIh%2FBa8%2FmkHNMiANYw98iJT1LscuP%2FPkUaz0D9%2BA2tw7zydfR5X2lnWx%2FnnqvA%2BsrFMNaJoMgGOqUBCEPPNPi%2B3ULNaX42ZfT%2BgDpy7YmFLvuMp%2BTk8qjf9eY9HTSzcRwH0bnqWfhImc6T%2FGvMY2%2FmcIW6kq6P1fxbdRajQzhbXG0X%2B8fyK5jMqGXOev3UIKtLcD2x%2BvRiN4a5gP8JxI0XTzpGApCNpCunnOhaP6%2FVn3d%2BIxJjPEN8mF0RbbXL9qQ2zlfBjq60%2F2DDBu%2F0hq23L7HAS%2BXKX%2BHSoDc4e4Qd&X-Amz-Signature=e6a48af5e6423e045e74a2974795e7a87eecf53d0e9d2e4e1cec192492284104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH76E63N%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2plXT8yYRVBrsMp1G8NBZgD0tKm5XGRkDup8baG40%2BAiEA5ayZ1rjeTUDQsihJ4cFRIxwX75fUC0qvglBh7GH4tlgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKd8MCCQZgk2ywWcBircA0QFASrZgD9qYGfRtQVfp9%2BebAyALh4AF05Sp7ibr%2Bwze2hODxodejQMTDv%2BsYe0F6bCqLH2CNVKEg7ajJye6dyzKWRokdO%2F4L2mLNTjqetVwDl4ffS4TcfU0tH16%2B11HDVCgebSy8MD8V%2B23BTIvrHVAcdwAAsC30R7lgMPnJ%2BfsAtkxuVsMYp8fFbWwaIuHXZoUG7urZ8IT5%2BqwdKutjynNJKxn0Tx%2B9YOu3zY3L5qJgftWjMP%2F0m26NPOjndvZuAFSFXaWbMWVwlgl8eN095fxHVcl9yxLQM2ExXSG2gMlL%2B7sLFq%2FexmdVQ26ojt8abC7LUI66AKM%2FWoZhxHWCH9PXphHVu2qVQxQ2TkhqbY03SVFM2WOHeunStQqtpNUFAktoDnie1mwTNHl9IQdYzVd1iXZAIJCxZgYIwEQ5EnwYPRIUSmnBh%2BTIZAJHwce79XhPhtLyTTerDgdwGAsRJVI4tvNiF7DXtC5qSnU%2BsjsQeKnZ7JThUPDLpa6vVWpma6b3xdLkDwUTK8npKU1iKjRHXZxqh4rXdIaiV1i8LNgjWeL4XWksjkSavIh%2FBa8%2FmkHNMiANYw98iJT1LscuP%2FPkUaz0D9%2BA2tw7zydfR5X2lnWx%2FnnqvA%2BsrFMNaJoMgGOqUBCEPPNPi%2B3ULNaX42ZfT%2BgDpy7YmFLvuMp%2BTk8qjf9eY9HTSzcRwH0bnqWfhImc6T%2FGvMY2%2FmcIW6kq6P1fxbdRajQzhbXG0X%2B8fyK5jMqGXOev3UIKtLcD2x%2BvRiN4a5gP8JxI0XTzpGApCNpCunnOhaP6%2FVn3d%2BIxJjPEN8mF0RbbXL9qQ2zlfBjq60%2F2DDBu%2F0hq23L7HAS%2BXKX%2BHSoDc4e4Qd&X-Amz-Signature=c5d3febe1d2ba905e482804c355c578e42fa0ac2e7a8b52112e1ebb4deedf546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH76E63N%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2plXT8yYRVBrsMp1G8NBZgD0tKm5XGRkDup8baG40%2BAiEA5ayZ1rjeTUDQsihJ4cFRIxwX75fUC0qvglBh7GH4tlgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKd8MCCQZgk2ywWcBircA0QFASrZgD9qYGfRtQVfp9%2BebAyALh4AF05Sp7ibr%2Bwze2hODxodejQMTDv%2BsYe0F6bCqLH2CNVKEg7ajJye6dyzKWRokdO%2F4L2mLNTjqetVwDl4ffS4TcfU0tH16%2B11HDVCgebSy8MD8V%2B23BTIvrHVAcdwAAsC30R7lgMPnJ%2BfsAtkxuVsMYp8fFbWwaIuHXZoUG7urZ8IT5%2BqwdKutjynNJKxn0Tx%2B9YOu3zY3L5qJgftWjMP%2F0m26NPOjndvZuAFSFXaWbMWVwlgl8eN095fxHVcl9yxLQM2ExXSG2gMlL%2B7sLFq%2FexmdVQ26ojt8abC7LUI66AKM%2FWoZhxHWCH9PXphHVu2qVQxQ2TkhqbY03SVFM2WOHeunStQqtpNUFAktoDnie1mwTNHl9IQdYzVd1iXZAIJCxZgYIwEQ5EnwYPRIUSmnBh%2BTIZAJHwce79XhPhtLyTTerDgdwGAsRJVI4tvNiF7DXtC5qSnU%2BsjsQeKnZ7JThUPDLpa6vVWpma6b3xdLkDwUTK8npKU1iKjRHXZxqh4rXdIaiV1i8LNgjWeL4XWksjkSavIh%2FBa8%2FmkHNMiANYw98iJT1LscuP%2FPkUaz0D9%2BA2tw7zydfR5X2lnWx%2FnnqvA%2BsrFMNaJoMgGOqUBCEPPNPi%2B3ULNaX42ZfT%2BgDpy7YmFLvuMp%2BTk8qjf9eY9HTSzcRwH0bnqWfhImc6T%2FGvMY2%2FmcIW6kq6P1fxbdRajQzhbXG0X%2B8fyK5jMqGXOev3UIKtLcD2x%2BvRiN4a5gP8JxI0XTzpGApCNpCunnOhaP6%2FVn3d%2BIxJjPEN8mF0RbbXL9qQ2zlfBjq60%2F2DDBu%2F0hq23L7HAS%2BXKX%2BHSoDc4e4Qd&X-Amz-Signature=979144d1d39ba0d03d6340d9484f29e9df3719b5d9011ef61014622356e6037a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYLDXON%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU7onBe8mfC1UY3A6noirAbXYYsgIREz00R%2F1Fpwj1KQIhALKkYllKrEICFrehDI%2FDFFo6A2ZZJG2LtejjIy3GY7oCKv8DCFMQABoMNjM3NDIzMTgzODA1IgwUkbKtfWmqnbRxdKkq3ANgIjLxcL7EkS8D2cjTSR%2BoSnWzpXKNBE878YaEhsM1wBgIZrsFS9UbDIF4GgtfXUvboO1ARXBkoMuX1JVs4QL4hgVSjy%2BCnGpmhS%2FvA%2FbzAxuJwsyrEwXQp8Ubrx8ahVIqXhWJPCYvvKOZKpsnlS%2B1gygr7NPTdLp%2BEQld32ZnojKIH5iTvI3zgWifNQM09FFeswUethCR9vI%2FLxhrU8skadqDzjXype0q0IB72ZSnrdgk9Ll1qyFu36ZG1uB0RWl9SHrj9HbY67HiPgQ5CLF%2FDkk3Ou9wWTxuOjOsQWfHezZ64%2BdDKZDGRNwEXKUi3vLKSuU3pj9%2FhGf6LbiiQd%2FHYH6sRgrkY2L5tguR6gB488X7WM%2Bj%2Bixa%2BqdUixOwKP7jXKqZ4CIF9LcsP7z6pVohZYE3wZ1TLjLW0KEdQnsdeJ5CX46RC7B%2F%2Far1NhKKCwdtvhLkTWsYzKxMA%2FQ69hq4fMMyWHsx01JstkexVowcDcREP%2Bcm3t5dT%2BXWjdMYlkcnI5JR%2B%2BYzPD3b12yR7Qcni71%2F8cA2PVvOklcoIgnysAkr%2BO3MFlElRolrx%2BWIOBdv2mjDeIMdzdbbg2%2F83GnfrQgexR7ccDmEll91611INRJCASpf2Brk5UdP8zCAiqDIBjqkAXKLMzIBZaxsMySGMzXU%2BmmjE%2Bm%2BBIl81qjJ%2BX3AWw%2FtKPBhjpFq6NrE9piEJo0pL2XgvTLBqteGf7pLe%2FIUt9IqRPx9k%2B6i7LwnIfyUk8L12Pz6rpvbD99urGE81qPpJHKgGDh9DhlkqNyoRZFRl15zgnLHmHQbowbwA%2FGz9p3LWgdyMZT3e0RolCQv9hxOznao0sa2pR0P1Z%2FYqaROI2uOOCGV&X-Amz-Signature=67c7f3dda4bbd15fc8d860937bd08ff5bb1796263a992534287cfebb5a8c4d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P4CIPU%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7JRzxb0bkFinvaCxxc5jpEOT0hcINpjstqzI83jbvsgIgK3W2%2FreTEXll5R7bRwfpns3hnaBORYDwXquAo71Dg08q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBt40dPRd8FnpVtIvCrcA64D%2FuMflLu1g5y7ci3i5BjrmU4u9bVVJqpfUlAUgv8THcKVrDEimEm4QeZAH3V1fEPCxUb0o2J2fMaimRXW9KN4dWBcS7oiHhcU%2BemYkDEW%2BaTBqNmE%2Bh98tHZzojwwGtD6u2bYSSoznXYDMdb7O8LtBp%2FhVQ3%2BDWbpQZrXZMHAeOrySUQ%2Fp9e5QHo%2FSeHjZIPlIVtgZkZICg5J8pWGJwYmRsHc5G3VfVQ9WN8osyY8Q%2B1JI6C%2F0RykWy1Fol%2FvEqxRKtphdQ1n3ksFfQPZR1ZUlnU5hkb5Qc4TTX%2BjaFysmdsVTyxR9G6xwngovtgmsABWEPqoe00D%2FC4HSqkYwcDlnvAhfJjxfK73roDRdcvyAdnuB2MiqWXHHMCws62WtW%2Bvff6y9kevq%2FtIvnO6Z2gFaD9aDcpXYx6K3KHDJxP8ue34PTd49rmKEG%2FEKRCE66OVPC8q1NZPCfdVYxrENx7O3a4rKDuWQa%2FAUkB3ZqUVa93gBbG5VKApRsK51Y5pyL5LWFVMJFwWQt%2BU8yLogzV2746Re9K6WEv83L%2F%2FHFjj6VZ1abXJZLAIDZI5j4NG9dszLc%2FwcAW7p8WjrY360v6ya2kKEyI5IXuOcx6HOAEcYz14xaTw910krX2RMNeIoMgGOqUBY1JIJOe6oERiWjVcP%2FpvgtlAzUknu1jWw03qnxeared0nCOJhrQTpbt2Pza3%2FWCSBvJvA1EiszMmvNs3tE4IQkRbQ8qPTFXzk30OPsnqd9NbpSobje13BBE7v0TMZnpLRTCIy%2F4zTfA9W1f2%2FINCs1k5ZiDNz5AYpDklU5zTZN3wxCIWeDP2ANj8xNZMnb1UgTygYaa2kjAmtUpUULKp%2FzUeFN9W&X-Amz-Signature=af11414242d41c299954d55305623d38283070f6a0d9cba7555a99362c06b833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH76E63N%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2plXT8yYRVBrsMp1G8NBZgD0tKm5XGRkDup8baG40%2BAiEA5ayZ1rjeTUDQsihJ4cFRIxwX75fUC0qvglBh7GH4tlgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKd8MCCQZgk2ywWcBircA0QFASrZgD9qYGfRtQVfp9%2BebAyALh4AF05Sp7ibr%2Bwze2hODxodejQMTDv%2BsYe0F6bCqLH2CNVKEg7ajJye6dyzKWRokdO%2F4L2mLNTjqetVwDl4ffS4TcfU0tH16%2B11HDVCgebSy8MD8V%2B23BTIvrHVAcdwAAsC30R7lgMPnJ%2BfsAtkxuVsMYp8fFbWwaIuHXZoUG7urZ8IT5%2BqwdKutjynNJKxn0Tx%2B9YOu3zY3L5qJgftWjMP%2F0m26NPOjndvZuAFSFXaWbMWVwlgl8eN095fxHVcl9yxLQM2ExXSG2gMlL%2B7sLFq%2FexmdVQ26ojt8abC7LUI66AKM%2FWoZhxHWCH9PXphHVu2qVQxQ2TkhqbY03SVFM2WOHeunStQqtpNUFAktoDnie1mwTNHl9IQdYzVd1iXZAIJCxZgYIwEQ5EnwYPRIUSmnBh%2BTIZAJHwce79XhPhtLyTTerDgdwGAsRJVI4tvNiF7DXtC5qSnU%2BsjsQeKnZ7JThUPDLpa6vVWpma6b3xdLkDwUTK8npKU1iKjRHXZxqh4rXdIaiV1i8LNgjWeL4XWksjkSavIh%2FBa8%2FmkHNMiANYw98iJT1LscuP%2FPkUaz0D9%2BA2tw7zydfR5X2lnWx%2FnnqvA%2BsrFMNaJoMgGOqUBCEPPNPi%2B3ULNaX42ZfT%2BgDpy7YmFLvuMp%2BTk8qjf9eY9HTSzcRwH0bnqWfhImc6T%2FGvMY2%2FmcIW6kq6P1fxbdRajQzhbXG0X%2B8fyK5jMqGXOev3UIKtLcD2x%2BvRiN4a5gP8JxI0XTzpGApCNpCunnOhaP6%2FVn3d%2BIxJjPEN8mF0RbbXL9qQ2zlfBjq60%2F2DDBu%2F0hq23L7HAS%2BXKX%2BHSoDc4e4Qd&X-Amz-Signature=31d9e30d67f7e7e2aa17242d99b19da7352417000d2847abf54680652048e664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
