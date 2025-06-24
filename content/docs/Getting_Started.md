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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD24FP6Y%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICiRA%2BPk0e23T%2FMI%2FxmrevyDjyKjF%2FpG1y0v%2BvwA%2BofHAiBMWghDf6dV%2FhuAifJDM6pi7X0FODCM%2FGd5fmHQQuPYfyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMX9riSuLwF6bx0R2nKtwDejrYUJSup0TeesMqfX0apyrRErvyMP9L%2FjncXuloObroTKTYHEab3v4m1r1y%2B1hg4j9oir5ta1e633ZU6%2B2rmH7oK4Uv7pCinuxUy3nKA66FA5c4yrNyFo4KG%2BH4aujznTk3LXudNvfOEh5lx9d6YlCkBXvv1Re2YkY3R2ODIGpMQQyoazBmSglRP3%2F9XLspo7b8IT8Xayu1daasOKcnXd%2BTF9pbTxOixG4D2Bx3Hnr78Phl%2BwGkWcwEqYGVFMldL6%2BgOePU6VjYfvDPrzxfjJWVM0Ehnl40VZC%2B5sCqaHewCX9ISP2%2BA0AKOwBqTOql0vn5uU%2F7hBwjcyz9qDPZxXZ4aFeWren%2F9FjA0dhdtf4SHvMZz8xCGHdIkcjbQDhjAfe1QC%2BJOyuxcKO9Pg%2F23X%2Ffbd4RpwXUylP2rb%2FEXGTcDVapnfw5eVHe6rSC4QZZlo8owyTXVrM5CzluSbhlXfzSTmt%2Bdz6ZDlUziYKQpMeRlMDNCt9rPhPTkGyAVB9h0DwWS3kSCz%2B%2FX4AnMSM0PMC6375IlIyWLNlxouwIiCBIn5imasPMYY9Pg4cFf2QddWP%2FJw4yXZWrx7Un04YVB3jS12FgwBNJRi36Sk1Se52IiyZfllXH0OhkCAwwsLjswgY6pgFuX1cxQ5JgfAV%2FJSfSWKCQi6ejAGTEA%2FEP%2BYE9lmJIfL2ZfNEimx7DiOjNUopHfB4yHLCNKkquKas8eNi%2F9RKRBta7ZyplXXwLpiylPnYrcsSU8%2Bd%2BTC8gODy9s3JVNQWkn9LVw7gtVhMdg%2F6h95QvkkYXYpbz4ywdCOM6jDjNciodqXRMlJbyynoyqpUWgLJ6dQjdiuFf57YBe6fqy4tLo22CciSi&X-Amz-Signature=f20ba9ef449491818db69b090a89b6d366bd13cd7c0f4c4eba272d577f64e3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD24FP6Y%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICiRA%2BPk0e23T%2FMI%2FxmrevyDjyKjF%2FpG1y0v%2BvwA%2BofHAiBMWghDf6dV%2FhuAifJDM6pi7X0FODCM%2FGd5fmHQQuPYfyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMX9riSuLwF6bx0R2nKtwDejrYUJSup0TeesMqfX0apyrRErvyMP9L%2FjncXuloObroTKTYHEab3v4m1r1y%2B1hg4j9oir5ta1e633ZU6%2B2rmH7oK4Uv7pCinuxUy3nKA66FA5c4yrNyFo4KG%2BH4aujznTk3LXudNvfOEh5lx9d6YlCkBXvv1Re2YkY3R2ODIGpMQQyoazBmSglRP3%2F9XLspo7b8IT8Xayu1daasOKcnXd%2BTF9pbTxOixG4D2Bx3Hnr78Phl%2BwGkWcwEqYGVFMldL6%2BgOePU6VjYfvDPrzxfjJWVM0Ehnl40VZC%2B5sCqaHewCX9ISP2%2BA0AKOwBqTOql0vn5uU%2F7hBwjcyz9qDPZxXZ4aFeWren%2F9FjA0dhdtf4SHvMZz8xCGHdIkcjbQDhjAfe1QC%2BJOyuxcKO9Pg%2F23X%2Ffbd4RpwXUylP2rb%2FEXGTcDVapnfw5eVHe6rSC4QZZlo8owyTXVrM5CzluSbhlXfzSTmt%2Bdz6ZDlUziYKQpMeRlMDNCt9rPhPTkGyAVB9h0DwWS3kSCz%2B%2FX4AnMSM0PMC6375IlIyWLNlxouwIiCBIn5imasPMYY9Pg4cFf2QddWP%2FJw4yXZWrx7Un04YVB3jS12FgwBNJRi36Sk1Se52IiyZfllXH0OhkCAwwsLjswgY6pgFuX1cxQ5JgfAV%2FJSfSWKCQi6ejAGTEA%2FEP%2BYE9lmJIfL2ZfNEimx7DiOjNUopHfB4yHLCNKkquKas8eNi%2F9RKRBta7ZyplXXwLpiylPnYrcsSU8%2Bd%2BTC8gODy9s3JVNQWkn9LVw7gtVhMdg%2F6h95QvkkYXYpbz4ywdCOM6jDjNciodqXRMlJbyynoyqpUWgLJ6dQjdiuFf57YBe6fqy4tLo22CciSi&X-Amz-Signature=1ef1a944a4438aa46b61afe2eed7efd6b67e8945b0ae0d5d5da8d13b239ce4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD24FP6Y%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICiRA%2BPk0e23T%2FMI%2FxmrevyDjyKjF%2FpG1y0v%2BvwA%2BofHAiBMWghDf6dV%2FhuAifJDM6pi7X0FODCM%2FGd5fmHQQuPYfyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMX9riSuLwF6bx0R2nKtwDejrYUJSup0TeesMqfX0apyrRErvyMP9L%2FjncXuloObroTKTYHEab3v4m1r1y%2B1hg4j9oir5ta1e633ZU6%2B2rmH7oK4Uv7pCinuxUy3nKA66FA5c4yrNyFo4KG%2BH4aujznTk3LXudNvfOEh5lx9d6YlCkBXvv1Re2YkY3R2ODIGpMQQyoazBmSglRP3%2F9XLspo7b8IT8Xayu1daasOKcnXd%2BTF9pbTxOixG4D2Bx3Hnr78Phl%2BwGkWcwEqYGVFMldL6%2BgOePU6VjYfvDPrzxfjJWVM0Ehnl40VZC%2B5sCqaHewCX9ISP2%2BA0AKOwBqTOql0vn5uU%2F7hBwjcyz9qDPZxXZ4aFeWren%2F9FjA0dhdtf4SHvMZz8xCGHdIkcjbQDhjAfe1QC%2BJOyuxcKO9Pg%2F23X%2Ffbd4RpwXUylP2rb%2FEXGTcDVapnfw5eVHe6rSC4QZZlo8owyTXVrM5CzluSbhlXfzSTmt%2Bdz6ZDlUziYKQpMeRlMDNCt9rPhPTkGyAVB9h0DwWS3kSCz%2B%2FX4AnMSM0PMC6375IlIyWLNlxouwIiCBIn5imasPMYY9Pg4cFf2QddWP%2FJw4yXZWrx7Un04YVB3jS12FgwBNJRi36Sk1Se52IiyZfllXH0OhkCAwwsLjswgY6pgFuX1cxQ5JgfAV%2FJSfSWKCQi6ejAGTEA%2FEP%2BYE9lmJIfL2ZfNEimx7DiOjNUopHfB4yHLCNKkquKas8eNi%2F9RKRBta7ZyplXXwLpiylPnYrcsSU8%2Bd%2BTC8gODy9s3JVNQWkn9LVw7gtVhMdg%2F6h95QvkkYXYpbz4ywdCOM6jDjNciodqXRMlJbyynoyqpUWgLJ6dQjdiuFf57YBe6fqy4tLo22CciSi&X-Amz-Signature=1261c0919d0ea5ebffa2cb291a6c55cb4d3f48a3bb2108e162f6b27ee4dd9ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SI5YSC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDtL5M19F7V0LY7Ta1TcwADog56CtW74cjO0TKNACNUVAiEA0NU4A7cNfuMUWJ7hD90nI%2FhV8pEJ41P5KzCwgGQC2jsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB9ML3zlDZ%2BDF1JemyrcA0sLpEZdyul9tw8UrA2Tu3sRoO87UMQkosNCAAKCWT%2FbyDu3zw8Rr13wjygggFvYl3gFmy%2Bw5uTVpUudib9P%2BCTyZAs6lU%2FNxyj5Z7XzjAWZ6Z7LFEDHzGyzP3WIGckdHdnj%2Bl19vgkStOlV5lzW26Zmk913ZpMDlBswIgHmT3aia7gqS%2FkfmptSZCI8EZ%2B%2F16b0CaWgXmbusf5g%2BAVK86x8yH5ol0gpmPRF5ro%2B6nUcMHPc%2F7XvCTNCHRNX%2B%2BmZHf5ReXilTswXsu28DH9u4wcp0kpLyeEvf0DRsEDZHAhqvQJ0CPtWSgjSbOSUJEX9Iq2JIO3psS7Ou8ZKD3luQoZU1Kit7mrqx0yizip6ZEEIJalK%2FtptiJAyxbU5Xpx2dE4tUf3RSPThiKZmzACNOB3Y%2Bz2bBxHMYCmM6Vub2SemyFpCt4b%2FAttfWoWLKjtaqFlKj0Vxd2%2F4h35v5%2BdvOAMXQrS0Dsy8c574uSOOHzGFSdpFUx7%2BlsaRJ6XhHH8Cceunwv%2FmdDbJmN0eUOixEGUHi4%2Fj4YlUnPuduFe9f18TCo5auLaZxv2NMxkweB8ytyCYpe5LuzYioH8s%2Fn78%2FBvbn1QWCC3%2BG%2F91L4wlbW%2B5vKmqAgdxA6vl%2BJT5MLK47MIGOqUBlNISfBAu03CuQ1o%2Be6MIQdpoOnhIAibRHK%2F8QohiEIJCFQ4wpPS52pujI5kzhKI911tTxgLbQQN7eEQQ0My7juve8XvZWfttn%2B8SKi2dsWVYRbHcotwZYGd6f8jWtFoXg4l3bx1CuVe6xmV%2FLc6cGpMGXPCs74oJXIwnEsxoxf9VpKAUnp%2BBiPfsWEt%2BnzdUWWI2FSgrQCBYlp3ivWSEzqizFzY8&X-Amz-Signature=49c2475f1fab9fa7ed9d994e7f13f24e3eb8061db20995362bdcd8175855eebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG74QWS2%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICz2qBRnOl5Flc7AgBF0OljwT%2FZ9BPAkxM73GJS0Ph5AAiAhlvaFFjb2GU5Azmqqh3l6UC6qiAbdcSRfDN1qqHXZ7ir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMF024kpJCW5m%2FrmelKtwD0kK%2F0xe8uVDBoZ%2FCyzr2IUvfN%2FdMH3A%2BMx%2BxzacnD%2B2vVp%2BwG3AH2qX5MMZm9hNuZ3tJkV2puX5oIqDlVKg7ZUde5T1lxKJnbGMPSYihM0hKl8q9uA%2F35VZizxd2IT4eG0bYYbMjKU4t3pdaO6Mk2fvOdtu4oNByL%2BVpic1YosjDseTs71gaeVyw5ZLNVwqLS6XbtAtXH9huPSRLZsRpa%2FQ%2B7r7RWo8ybpfUvYB8r4nb1EQr51ErToeTsLBEUsJAI4iNJRbEcl3koYxdjyeyQRD7owgd2WTkynlp0i%2FJl0CyAogPXv%2FIOnOhbOtvu6skkbzgZJo6ngDqJDgtfUMDLiqsbf0SSYVtKd1yASebl0owYzmQ7iDzIeN3PS1qRoJt5TOKlUn2%2FiwQs7wplEPNvWsuddXVXSOVqzdZbFdcGehPVal524tx2TVcCy1LqhKv%2FDA%2BZ7F1OiATpSNL7S%2BDOFaBQj7SU6VWOoo6NtluzFfEFM1m6PmEPHLVBldC13YCcZO%2FI8uhfJoZKgx0cJYhVM%2FZoeHoQ43bU6ox2tr65nbJcJU%2BNqtcdkvHv%2FRHm9iPms1KtjX8mslWd190TUhhH5if1ld8GrT9v3iSEKnyregvpjnABe3BPfJQnkUwgbnswgY6pgGXB4GAQ5Krqtd5wKMytRiJxiyABa%2B3Z%2B8G92oP6Ax8XakuPL5nF0tkUIrVC%2BIf7WfFL1sFzLceRDaDlWbzExDGFAaYUABkME033hzcJXNsriwvcbI6DwOTchFmzXm1QNe2hUANVwjQ2Mt6Poq8lzjHX1DIvCfWhPnt1FycOH7gv0lH5chmSSMn1OUoSR8K6IA%2Bx7jw7RNsO0H6HB%2BPcsT0QFTIFWM8&X-Amz-Signature=e07a5ba3086e40c416209a8d7b39764c6b4ff546b29aa3b647627a317cc2eb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD24FP6Y%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICiRA%2BPk0e23T%2FMI%2FxmrevyDjyKjF%2FpG1y0v%2BvwA%2BofHAiBMWghDf6dV%2FhuAifJDM6pi7X0FODCM%2FGd5fmHQQuPYfyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMX9riSuLwF6bx0R2nKtwDejrYUJSup0TeesMqfX0apyrRErvyMP9L%2FjncXuloObroTKTYHEab3v4m1r1y%2B1hg4j9oir5ta1e633ZU6%2B2rmH7oK4Uv7pCinuxUy3nKA66FA5c4yrNyFo4KG%2BH4aujznTk3LXudNvfOEh5lx9d6YlCkBXvv1Re2YkY3R2ODIGpMQQyoazBmSglRP3%2F9XLspo7b8IT8Xayu1daasOKcnXd%2BTF9pbTxOixG4D2Bx3Hnr78Phl%2BwGkWcwEqYGVFMldL6%2BgOePU6VjYfvDPrzxfjJWVM0Ehnl40VZC%2B5sCqaHewCX9ISP2%2BA0AKOwBqTOql0vn5uU%2F7hBwjcyz9qDPZxXZ4aFeWren%2F9FjA0dhdtf4SHvMZz8xCGHdIkcjbQDhjAfe1QC%2BJOyuxcKO9Pg%2F23X%2Ffbd4RpwXUylP2rb%2FEXGTcDVapnfw5eVHe6rSC4QZZlo8owyTXVrM5CzluSbhlXfzSTmt%2Bdz6ZDlUziYKQpMeRlMDNCt9rPhPTkGyAVB9h0DwWS3kSCz%2B%2FX4AnMSM0PMC6375IlIyWLNlxouwIiCBIn5imasPMYY9Pg4cFf2QddWP%2FJw4yXZWrx7Un04YVB3jS12FgwBNJRi36Sk1Se52IiyZfllXH0OhkCAwwsLjswgY6pgFuX1cxQ5JgfAV%2FJSfSWKCQi6ejAGTEA%2FEP%2BYE9lmJIfL2ZfNEimx7DiOjNUopHfB4yHLCNKkquKas8eNi%2F9RKRBta7ZyplXXwLpiylPnYrcsSU8%2Bd%2BTC8gODy9s3JVNQWkn9LVw7gtVhMdg%2F6h95QvkkYXYpbz4ywdCOM6jDjNciodqXRMlJbyynoyqpUWgLJ6dQjdiuFf57YBe6fqy4tLo22CciSi&X-Amz-Signature=d834e565b098d6fb100b13f2d56b9edcb7f15cd23e0b59da51a751ca2e74f414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
