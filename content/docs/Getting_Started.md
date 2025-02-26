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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDV6GLQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCpQ3h5WwBpKqyCmQY3Ew3yc7UaQ6lcma4EXYQlS4CKpgIhAMW20V1ToHKL07uaFHmTegBoUVnAHchRYBJg9ThT7GtCKv8DCFEQABoMNjM3NDIzMTgzODA1IgyiHVcdETlJqA%2FxYr8q3AM6R7IYJUeyR7t%2BRmCdEwvoA6Aea%2FCPLFAy%2Fn%2FptI93fKWMn55hyqmGSJJXVW8o%2Bdq45So%2F2TYGfn8nJXsz31b0tGd87eVJ246HcfDd2l43HJQC2WfXDGFGftX9pe4GmF%2FyI3yi8tFtqk0nyH%2FQJqc8FK4PWPTeN3IjpFw16qOFOSoOTU00vLcm9MgvltIb%2FmXgmlcN1WzBnhYkqGKhWqcC1w%2BNuON65JdwIt29702a%2FGTz59%2BGdWQrAQDWM5AWeQenKy0GwlvEiCCh1M4zY2JY7pi9YkwvOullfsv43gd5VtNCQhFvE4DVlwVgBik8mrSUQNWvIr%2FastI3LH2XYGW2FUzwjG0vajNA%2FKsF%2FDIsJ528y3uAnaxkSW4bujoeGxdCXxzo4jj9bBy4v9H6kwK4OAVNC5AVeZwWP8N06zN9nFYt0vJ18E0%2F8RY8JIXoeS4Nn3gO30ikjJvpLKyF9QhFB06cx60DNBLk9ENMe4kko8YdPc5X%2BNWOpKMY2I9aDsAnSKGZbWWvi8oJ9aurh3rxSqKH3rL93QrXL%2F7nlGfKBrBkdSuLTxioWFoMn7NJv4%2FVmN75UD0%2FC%2BMJkNAJhIlCPj%2BVMQxx2R2uBRTW9cbfUSAmYwzGgdcByG6nMzC0vfm9BjqkAalvdig1%2BtEkDybD6FApfIM4FeviKTTnDiJM14mDcV%2FnRKCQiW7FkR16Weo%2BvXQkQvRIbzy8tQjlUwNN3B7%2F4X%2FsUSEUMBIJUwRIqrlHajM%2F80iJh4cYN4LH5ZLZvZEcJ6o5pVKEXToAzsqeJymuT9ZiQxDYzWei8hxZ1KpRbv36J3dgM3S2MxFaX2MP1WsRPmjllBYniZlcUsqwKq56TBSaZEXl&X-Amz-Signature=e9620833d6d81b296630374641074fed1859fd73be80a170b21d567d85e6d368&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDV6GLQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCpQ3h5WwBpKqyCmQY3Ew3yc7UaQ6lcma4EXYQlS4CKpgIhAMW20V1ToHKL07uaFHmTegBoUVnAHchRYBJg9ThT7GtCKv8DCFEQABoMNjM3NDIzMTgzODA1IgyiHVcdETlJqA%2FxYr8q3AM6R7IYJUeyR7t%2BRmCdEwvoA6Aea%2FCPLFAy%2Fn%2FptI93fKWMn55hyqmGSJJXVW8o%2Bdq45So%2F2TYGfn8nJXsz31b0tGd87eVJ246HcfDd2l43HJQC2WfXDGFGftX9pe4GmF%2FyI3yi8tFtqk0nyH%2FQJqc8FK4PWPTeN3IjpFw16qOFOSoOTU00vLcm9MgvltIb%2FmXgmlcN1WzBnhYkqGKhWqcC1w%2BNuON65JdwIt29702a%2FGTz59%2BGdWQrAQDWM5AWeQenKy0GwlvEiCCh1M4zY2JY7pi9YkwvOullfsv43gd5VtNCQhFvE4DVlwVgBik8mrSUQNWvIr%2FastI3LH2XYGW2FUzwjG0vajNA%2FKsF%2FDIsJ528y3uAnaxkSW4bujoeGxdCXxzo4jj9bBy4v9H6kwK4OAVNC5AVeZwWP8N06zN9nFYt0vJ18E0%2F8RY8JIXoeS4Nn3gO30ikjJvpLKyF9QhFB06cx60DNBLk9ENMe4kko8YdPc5X%2BNWOpKMY2I9aDsAnSKGZbWWvi8oJ9aurh3rxSqKH3rL93QrXL%2F7nlGfKBrBkdSuLTxioWFoMn7NJv4%2FVmN75UD0%2FC%2BMJkNAJhIlCPj%2BVMQxx2R2uBRTW9cbfUSAmYwzGgdcByG6nMzC0vfm9BjqkAalvdig1%2BtEkDybD6FApfIM4FeviKTTnDiJM14mDcV%2FnRKCQiW7FkR16Weo%2BvXQkQvRIbzy8tQjlUwNN3B7%2F4X%2FsUSEUMBIJUwRIqrlHajM%2F80iJh4cYN4LH5ZLZvZEcJ6o5pVKEXToAzsqeJymuT9ZiQxDYzWei8hxZ1KpRbv36J3dgM3S2MxFaX2MP1WsRPmjllBYniZlcUsqwKq56TBSaZEXl&X-Amz-Signature=14a6ee49a0a6c5cfee967f19538c15a776d31e9c6196407437d2e2b14d7e9917&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2N2GKE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQClbnCH8IHzu1GCSNUYjWpuK8qq4bje4oPjkzuVHUCvYwIhAJxIx0A87d4GuocTwZh1nN0BqYeGwYjYirM%2FYNQfAujrKv8DCFEQABoMNjM3NDIzMTgzODA1Igwwyb2ELB0RQL1bJJEq3APZj8qVT1NSioo%2FFlhhujJ9LOcfzNxhzMFmRurma%2BtjOdZWt5usaBXrQPoc9r%2BODg4F%2BRhnxW3WFYtxbLqzjxSuRFKwL%2FQEnAaBHk9lY4FtUzwvtmGJzzSTlrtZm4D1t%2F2pIJHmO%2BX%2BWiEZHV%2FQEM2knP1FXvyCYaU%2F%2Bum7uFCUOh8%2FMprzWUcH70LdqfjWfZil70oySK%2FBUhllrCjf8L4GWA7eedSXvRRWOnsY8VU0ssw0nP%2BjmIPdYY5CQF81Cv7FYqx8VdzDUKMJe7jDwBR3x8Q%2BrGnbb5DiL2IimhUCP2EPTWJk71un%2Bmh%2BryhzuEpO8rNI7F%2FLol9LXsBOGwYK6p4NQRbAgWS%2BR%2FBX4YWM1fqHuVCAgtkLd2B5ycUPq1EDO3lvlSUYWiEySSsg1uWNEd7Qi7lBbF8J1Ik2Xl2231uXbadNqVMNr%2BdyKk4qViWtY3d6epFg6X4qbOKl4iwp5%2BP29GhxoJ4RGhNbTWfGGhu%2FGZCzqdj7cYY%2F63VMzlseXmbs8mRcrPZrkF4DzFcUWwEpFh6yBlaWfgkq5%2FiiUbDef7nqmFE66pRyXpKy71kgSy4n%2FdKCNyJrJpdRqRUyg48035vy62jmJcVQy9njS8qCa0jcfSA2vc%2BtBjDGvfm9BjqkAR2zRyOmMxxXfi%2Bz8F57%2F42mdGRqZ9b72zq0P8iZUsvTgySHJPaMyE%2FBqOGfAUiM%2B930NK7ay6fe9xaQKhPBJir%2Bm5qD%2Fkmzsq8xpAbApyphA3gePzrnHOwVLUbm9cMcy6DGjnio0L8P9cA1dVX5kZU1nfI1s4X3XuD9ycMlc6Ehngjr%2BSRXOd0pNqMSUJu%2F1vgEkXhl3qK3p%2FpobHdfJ0y4sAXu&X-Amz-Signature=eba99bd05460b0769cbc89e082c41f87c0f47dfe2f9b41ac19b66190d4af4b31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2LOS3Z%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDjpjF%2FuZL9pUDmtcUHnojci6tRspV%2FvERPBBgYDFPaPAiBIo2XzaG1naT66QlXHl3fK%2FbVwWlrg6RR%2BZNZjcX0J5Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMmeMCbgF8AKOpNxmIKtwDRSI%2BkhkeDhAF5kYOGtCAcAuGHelWEX4Si7Q8dg2P33jWmbbvH7KdjFlw30Z6HuhH3rcSDCkxyo3vrRpazspysGTvz9FUtIYHQQeiKthShlLkGmmmbWrKTkqzOYHi1JyJ3%2Fg2kU0mc91e80OuM7N0qEmMRIH3SflOttkJ84oscoZL62pULp9KyL5FdSjz4cFjIuwGlgUN1XSlx00UPWAY9ULYHfTboiffI9HssBGkiyF0XUGxYKxBHw0UoFZyMAws6xuwzLxJl%2Bqv%2FZw%2F38HYVBaTkEC2peetw278MSMxKYETa8pGtCt5q7RQrFKdw5uhjoofjhF8m%2BoVE5TLi%2FX0jYqfh9rldnE1Tukaa8izjOB7AFYoqyjExeX7jqmffUacbBJlb%2Bai5sz8%2BofCmgD1Dl93Kea%2F5vTodlwX3NbP7LldAx%2B%2Fy%2BoaWKq7G2irXftt7PhZpqwL%2FSQmfE2qNMnFAmkz1l3hLbF4mbqYAY7g%2BmK3xYu6%2FR%2FqlwVexhfBCsZW9IhsR7%2BLduj4R2bJglbnAsK5oxPqILy0BGpRALU3sgmqx1rh%2B9C3fYwYskd9Fe7LvXc03eFuKEJN%2BFYrbuvCvpeyyW9JkC9IG4%2BnWzNMf1n78R3MheEfT6UTMrAw1bz5vQY6pgHYy%2FGgDkVqSZMcq%2BDgghZXn0XfhHEfaxfhvHlRRa55ULnal1Wa%2F4pQVxVVKqOwxv3aI8sIjUPRvJaVsn0J4l6tLwwM7BsVggde2kVCyYosUQWXDjLQhjHjy%2BplUlwZxovm6UtcixGOUYqrSR7rj1rtl%2FmK4PWhwD%2BWzNLKDC6INTqvqyssCP1jT%2BXE7jnTBJLmXZvN3yh7u6l5LY3e9OF8ECzjdKwy&X-Amz-Signature=fdc22cb18a50a006206d1571e8d630622e7c912d532404bfa8a15997b3d265cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDV6GLQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCpQ3h5WwBpKqyCmQY3Ew3yc7UaQ6lcma4EXYQlS4CKpgIhAMW20V1ToHKL07uaFHmTegBoUVnAHchRYBJg9ThT7GtCKv8DCFEQABoMNjM3NDIzMTgzODA1IgyiHVcdETlJqA%2FxYr8q3AM6R7IYJUeyR7t%2BRmCdEwvoA6Aea%2FCPLFAy%2Fn%2FptI93fKWMn55hyqmGSJJXVW8o%2Bdq45So%2F2TYGfn8nJXsz31b0tGd87eVJ246HcfDd2l43HJQC2WfXDGFGftX9pe4GmF%2FyI3yi8tFtqk0nyH%2FQJqc8FK4PWPTeN3IjpFw16qOFOSoOTU00vLcm9MgvltIb%2FmXgmlcN1WzBnhYkqGKhWqcC1w%2BNuON65JdwIt29702a%2FGTz59%2BGdWQrAQDWM5AWeQenKy0GwlvEiCCh1M4zY2JY7pi9YkwvOullfsv43gd5VtNCQhFvE4DVlwVgBik8mrSUQNWvIr%2FastI3LH2XYGW2FUzwjG0vajNA%2FKsF%2FDIsJ528y3uAnaxkSW4bujoeGxdCXxzo4jj9bBy4v9H6kwK4OAVNC5AVeZwWP8N06zN9nFYt0vJ18E0%2F8RY8JIXoeS4Nn3gO30ikjJvpLKyF9QhFB06cx60DNBLk9ENMe4kko8YdPc5X%2BNWOpKMY2I9aDsAnSKGZbWWvi8oJ9aurh3rxSqKH3rL93QrXL%2F7nlGfKBrBkdSuLTxioWFoMn7NJv4%2FVmN75UD0%2FC%2BMJkNAJhIlCPj%2BVMQxx2R2uBRTW9cbfUSAmYwzGgdcByG6nMzC0vfm9BjqkAalvdig1%2BtEkDybD6FApfIM4FeviKTTnDiJM14mDcV%2FnRKCQiW7FkR16Weo%2BvXQkQvRIbzy8tQjlUwNN3B7%2F4X%2FsUSEUMBIJUwRIqrlHajM%2F80iJh4cYN4LH5ZLZvZEcJ6o5pVKEXToAzsqeJymuT9ZiQxDYzWei8hxZ1KpRbv36J3dgM3S2MxFaX2MP1WsRPmjllBYniZlcUsqwKq56TBSaZEXl&X-Amz-Signature=eeb922bd23d49b0b88f8c72d7b6a015a74fb25fc74d153abe38b7ab00d0ad9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
