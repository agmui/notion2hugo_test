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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRILN7MM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdFMn1PBc46uTeCyTX0wfcQhlQGUfAYtk6jLOuvXw48AiBNzXZEOSU8JQLsm9sEmUH2whNEiOw9yuqo4arAAoTF%2Byr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BYfnuwRhD05PrJ6%2BKtwDBN2j1Sx%2BUmC1nMVdzcU3T7WQzvI%2F65D8ZoE6e0emWSE6TL9TpzIH1VNk9JL%2B0ZpEqamXSeLmXopnX%2Byt%2BrtdKjLpNW1IPprB6iMJ9e7giqbmjAOC4BhMnsFGivUYyCRgCLqhPeC4KhdpP%2Fjxe3pGjw1dnDUBoZitaMvSmzf%2FjsN9FL%2Bd3AKhkPJblbO%2BWCELx%2BuGTTL7RjWmLENZYf0kOD29szP8Gz%2Bp36yrPp6bS6MLrkDRua7sSj%2FYPZbvG%2FUYFKZ2d8F4kKLR6dyaGSlVn%2FE0IlwYKIAzbDkfdYrNnYJDdQmOzg%2FYPBAkbQiDJOdUI%2Brfc%2BOJ9UqoAEdz4oLFVuHNVwlXfBqW3vDXY3SasPUlj8zdS2gPWvJNes7zi%2BSK%2F0ztXM2glXpl9iKAGUg%2Be3eAqh2ytS%2BCeECwLUcNGX%2BubGOXYVTg9OXxzKeYLVc3gsv3r8bANFI86C1EYT5ZpaNKpMUdkEpVtqbzLTWIRnZGgGnQtOFqVRjxoMZsPu3%2FNc1YJPPI3psMyApiTyxUwaRCSf2z6uQst39ZwASgLbNzFnx7ziykcmq95KVfhWVwrjtfPxwyurRzUBCDDEnFoKVjwbqRQD7AIbdiVgIHTETngAJVRfX0yxy2EWQwhJahvgY6pgHqb9muU9yHf3OjVnzqZEbKXLPGwCVI4dO%2Frld2KpddKvOt3sJq4ixW1iBz302enPT5vs7v3IuXtfSzgo%2BrV6FMAhXN%2FOWSwmKZh3df%2FUYewqXed8erwX2VFP57cY9waIw%2FjdjNoTCzwI8eT%2BYzI0sWHdBoAzqufYEC2fYJ1wQwtHyXqk9q1EcFFbOfu9%2FjrYwKGKmbmV57Iiueqj1WoaPwgKL3a9FZ&X-Amz-Signature=cb0a227704e7455ec7b8531bfd52941edb5b4c7a9cf95a03a856e5a5cd353dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRILN7MM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdFMn1PBc46uTeCyTX0wfcQhlQGUfAYtk6jLOuvXw48AiBNzXZEOSU8JQLsm9sEmUH2whNEiOw9yuqo4arAAoTF%2Byr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BYfnuwRhD05PrJ6%2BKtwDBN2j1Sx%2BUmC1nMVdzcU3T7WQzvI%2F65D8ZoE6e0emWSE6TL9TpzIH1VNk9JL%2B0ZpEqamXSeLmXopnX%2Byt%2BrtdKjLpNW1IPprB6iMJ9e7giqbmjAOC4BhMnsFGivUYyCRgCLqhPeC4KhdpP%2Fjxe3pGjw1dnDUBoZitaMvSmzf%2FjsN9FL%2Bd3AKhkPJblbO%2BWCELx%2BuGTTL7RjWmLENZYf0kOD29szP8Gz%2Bp36yrPp6bS6MLrkDRua7sSj%2FYPZbvG%2FUYFKZ2d8F4kKLR6dyaGSlVn%2FE0IlwYKIAzbDkfdYrNnYJDdQmOzg%2FYPBAkbQiDJOdUI%2Brfc%2BOJ9UqoAEdz4oLFVuHNVwlXfBqW3vDXY3SasPUlj8zdS2gPWvJNes7zi%2BSK%2F0ztXM2glXpl9iKAGUg%2Be3eAqh2ytS%2BCeECwLUcNGX%2BubGOXYVTg9OXxzKeYLVc3gsv3r8bANFI86C1EYT5ZpaNKpMUdkEpVtqbzLTWIRnZGgGnQtOFqVRjxoMZsPu3%2FNc1YJPPI3psMyApiTyxUwaRCSf2z6uQst39ZwASgLbNzFnx7ziykcmq95KVfhWVwrjtfPxwyurRzUBCDDEnFoKVjwbqRQD7AIbdiVgIHTETngAJVRfX0yxy2EWQwhJahvgY6pgHqb9muU9yHf3OjVnzqZEbKXLPGwCVI4dO%2Frld2KpddKvOt3sJq4ixW1iBz302enPT5vs7v3IuXtfSzgo%2BrV6FMAhXN%2FOWSwmKZh3df%2FUYewqXed8erwX2VFP57cY9waIw%2FjdjNoTCzwI8eT%2BYzI0sWHdBoAzqufYEC2fYJ1wQwtHyXqk9q1EcFFbOfu9%2FjrYwKGKmbmV57Iiueqj1WoaPwgKL3a9FZ&X-Amz-Signature=a74579d01e7cd54a4e68a4391cb0e5df3c0b3270583f5eb8f63ed8656b0f4415&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7MNAZI%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdeadOnaQv9p8X6WQtpuc0Euq3En03%2FQ0CErDRxk29RQIgTFHFw6iEslKu6J6uZxHOGMwg4vevodj9c2SwlRFZCyMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJVZyfLu2DKtsf0PzSrcA1ylyyGbZW4WoPz2P9wnTzPBG1RU8%2F4%2Fg5wYWbY1A48Dg%2BPud4julnTp0kH0inC8mvW5n00PkwD90Fc0vsbQFlX24XYgfigEm6n7GS5f%2FEe1EePioVwwqzM9v96GevSVVYPsVQA%2BTL2gVG8kvxkqHUUFM%2Ft4Xh7Ma30uPIns%2FAd%2BkguvHo6X3W8jaunvzybXn3ZHDLPuI905WU%2BUFnBEuDpw%2F7%2BJukFpZ6wYjU87LnN865nrH7pVMIS%2BmVShE23pyRp44xhDAhWlzCLVYwZK5rCv74WtZDrSG0B6MZc0KxAOfZWQUL0Oh1GKfT3cycRxb2qgFBlYBC%2B8SNLvTFstkKNI4Ics6Uog48IZ5W33NmwBbrTCyHvBWNFH%2F4ApESSVRChnA1rTNk2zV2m%2Bz%2FkwIRgTMQl7lvzZtppiifMuc4iDytNBNsN%2BfWARZzahPGuKdV4zF0B7iTosHYkC6lTJVsacCJZr3G%2B3cISjgqJ78FO1GCfq5JYvJ9%2BirJQe3JAlg%2FwuggRVt0ZHE96ZnX5iFcU3HR2YyXatrQIM4pn99Fvg20yzkhZTXTD6FA1J7mMmHj6RkTYA94pIjW8XB9oZnzSI0HJD7D8geG48wAzq8EJzFTqJ5FtTulZ4UvvhMJGWob4GOqUBCHgqZAhWaG2ZCW8OZxq%2BOG2vdh8miUDuIhVN0OiA5DpswnuOSdUT%2FRrzkP47d%2BZJdUVmvFf4mESZAjv9NWrlpPmAbWw6nCIQmhoW8JM%2BeGykpBCPunkZUjyROU%2FZTT37C2iN2EeIqZCfqWLLp2n3oS2kVMlNZ4lDHQQwr4mdwJ%2Bxaz9nOH7Z0ZFM%2BIezB%2B5ARnLg%2Fv%2FAa9EcYQAg3zklhTcS6VX%2B&X-Amz-Signature=7aa37e354c74ba3c0436b7f06678fc3da2e3a99b175050bd285f646b7e7e5f57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646GCIV5P%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqkDIqbDndc2ZGRjmg%2BOgkNLl3UMsXHjhFdte4%2FSX4AAiEAwOLP3R0AZldMSQDhv7rXDil1Rv5uN9EQBDjd%2FICns6Aq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBLGUZrehXpz3eQiMircA0j1NyCEeHQnvjuFTcj%2FxQ%2FlZaIfWtA5Ywp9oKYTroR%2Fi58yIEJYR17DZqxy8gVnO4Ng%2FzhdV9ACHXA8eV60yDd9cQbbSn77tUfv2%2BGJLo4pq0uGEhwYbsY4y%2FJYHXp1Fyy0qp5QxsjFEO0sltDsevnkMAhNIwp6oKGZdhbXrMZFAt562d7WL%2FhUoxl7jw%2FuGBFMHPpD3K5oqWR3lqKxboJqiIoXf%2Bdqp8KSla4YWMRpQo%2BxuDyWAvr9OW%2BcS3uTbCAXc6wZcE0HoNLlI92I0vNabLQvnHkz4vmmmIxiis%2BhBfu43esX4hfsCfuE0YrI6ayGmPysJp4rOA%2F8VmG1wbXaHPkl8lkFnPEjNvo3bowWQT4%2FfuxRT9qiTfUnzMPitDzuN8FeE6QeQQY1qLifvgT6pxXByufwxo8Ly32z4wrcm3toATG2DxUZRBXxdG%2FodI4ut%2FEUuv9mUzMFfkSHYLkj8rD7QsulBJah1KBCaLzi2ktymhKP4IrwCsUZQQC7Y9mzrQuCjODuApofmvZBIf%2BwxFiWSbJAX6PznIvPo%2FCpwK1bIDk4ZqLxugQCIfwQzuqRQ6FEb%2FQcTavzAHyRTy0QXlYfQYCLnhFqZKD8tjOXUNdqWTvN%2F3yYOzVZMICWob4GOqUBCjsI1eEavLn3p%2B8hjsqk5jrATkxmHruutRMWlUpz7%2BX5eJH1V%2BwXULZM%2BMDj1r%2Ba9bt0FLOQEiI%2FFKifv37ne8TYUJ02SwvYweAC70DURgYucTI9ViQvmQaVa9niAmIbO3dfL9q8yVFfPkWr8CVjfjuolLFyLBFif7CERb1%2FSIgh3btyxmAq%2Bnw34WB%2BWbtNDxEHYmGM8yZwYETfFvSXHsTiK6mt&X-Amz-Signature=592f39dc8e168bb38ee79390214a0cbe382ca058d755e7bbb1a5f7582d600fd2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRILN7MM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdFMn1PBc46uTeCyTX0wfcQhlQGUfAYtk6jLOuvXw48AiBNzXZEOSU8JQLsm9sEmUH2whNEiOw9yuqo4arAAoTF%2Byr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BYfnuwRhD05PrJ6%2BKtwDBN2j1Sx%2BUmC1nMVdzcU3T7WQzvI%2F65D8ZoE6e0emWSE6TL9TpzIH1VNk9JL%2B0ZpEqamXSeLmXopnX%2Byt%2BrtdKjLpNW1IPprB6iMJ9e7giqbmjAOC4BhMnsFGivUYyCRgCLqhPeC4KhdpP%2Fjxe3pGjw1dnDUBoZitaMvSmzf%2FjsN9FL%2Bd3AKhkPJblbO%2BWCELx%2BuGTTL7RjWmLENZYf0kOD29szP8Gz%2Bp36yrPp6bS6MLrkDRua7sSj%2FYPZbvG%2FUYFKZ2d8F4kKLR6dyaGSlVn%2FE0IlwYKIAzbDkfdYrNnYJDdQmOzg%2FYPBAkbQiDJOdUI%2Brfc%2BOJ9UqoAEdz4oLFVuHNVwlXfBqW3vDXY3SasPUlj8zdS2gPWvJNes7zi%2BSK%2F0ztXM2glXpl9iKAGUg%2Be3eAqh2ytS%2BCeECwLUcNGX%2BubGOXYVTg9OXxzKeYLVc3gsv3r8bANFI86C1EYT5ZpaNKpMUdkEpVtqbzLTWIRnZGgGnQtOFqVRjxoMZsPu3%2FNc1YJPPI3psMyApiTyxUwaRCSf2z6uQst39ZwASgLbNzFnx7ziykcmq95KVfhWVwrjtfPxwyurRzUBCDDEnFoKVjwbqRQD7AIbdiVgIHTETngAJVRfX0yxy2EWQwhJahvgY6pgHqb9muU9yHf3OjVnzqZEbKXLPGwCVI4dO%2Frld2KpddKvOt3sJq4ixW1iBz302enPT5vs7v3IuXtfSzgo%2BrV6FMAhXN%2FOWSwmKZh3df%2FUYewqXed8erwX2VFP57cY9waIw%2FjdjNoTCzwI8eT%2BYzI0sWHdBoAzqufYEC2fYJ1wQwtHyXqk9q1EcFFbOfu9%2FjrYwKGKmbmV57Iiueqj1WoaPwgKL3a9FZ&X-Amz-Signature=f7657620b1a70dbaad3dde738940e580a56434d273e3d30b66ab7f6da6cdcca1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
