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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDRLK65%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFN3IQjhS7lPFdI1J51ilU3E%2BsEfX3WpfBJHWn77r9Z7AiEAynOczWE8gdt6sWnXq1pROW8UWmrUSQw9Tva%2BWZvNT7oqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4B%2B8saNn%2BV%2BxljMyrcA%2BGWyqf07F9LhGf62de5iS4NMluglVzqF8zHNphLEgsWJuu8uS1qOvceI7%2FHB0Mb2h%2B02sWzPZKwJKOoCbBS2Ui2DFxFKoIdFhTxR5GElkMeShoBIaqenHQRzZmgzAQBSqCGTUTLY5xKYpADBB88SV2zs6pW6n0h17KP2rYVNDuAvV0tp%2BrSXkiU9772cQxzmOacxBsm%2FLXukvKoHakUMKuBNWbHfeDIXwIEgC8euc3vPCbHn3S3GkzyO2IzBZEQgwGs8HnJBrjeymm3FuF0MetPn8Nn88nciQQXO6pU8meEojquOXkYHLGRIcGAj8Fu2nVSgRUpR1p8xDFoYPJFnCqbDPXJbxh0IVKqeelySnMhC8erW0jOFg6uiQEwYOmcrRxEh3rBcK6Fa8jRGWnEohAMPQhrW0WPbDq68Hs0bJnglq5NdnB0gzvXkzU19PqcgQJBX4VP7QkXBuLrsGs7mB9sQx26Y3cdfx9Ial3sM4WorW4TFFLysSCWeWp29CdzNxu404lcks%2FZ%2B%2FWStgVSo%2F04XxDwaHPBKCEkEtVh2MLizSqsVbGCdnH98ZcrgzJMvDGuhMR0rxe2vhdxNdOTQ93FzFG%2FtYB6i5hOIyoJFcLkvPlQDG9rBnobaAhLMJSC8b8GOqUBCadJ7dpBnoIoWos4XFME9HLpx26ZfnMS10tTQjbPIZNEQzrxIlnAn6Q%2BUfxi9R%2BP0TKffh6nkgB0B1HLvf3Z9fVMFekeTsnvJbnYc89Bg46zcQCsJaSfdsi2tj3jgOYSZOrarocG%2FTw6Ks7CgwUDHWUEpk%2F%2BArIgrMWGMUYiw5XL2I7bJoJt1q10ro6adRXGNavFDOeJzSse9355Izf3E7HRSAva&X-Amz-Signature=b42ba287f5d13c3524b360539f6404a104cd3c04c4ae9fe7a25326c2808ba6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDRLK65%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFN3IQjhS7lPFdI1J51ilU3E%2BsEfX3WpfBJHWn77r9Z7AiEAynOczWE8gdt6sWnXq1pROW8UWmrUSQw9Tva%2BWZvNT7oqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4B%2B8saNn%2BV%2BxljMyrcA%2BGWyqf07F9LhGf62de5iS4NMluglVzqF8zHNphLEgsWJuu8uS1qOvceI7%2FHB0Mb2h%2B02sWzPZKwJKOoCbBS2Ui2DFxFKoIdFhTxR5GElkMeShoBIaqenHQRzZmgzAQBSqCGTUTLY5xKYpADBB88SV2zs6pW6n0h17KP2rYVNDuAvV0tp%2BrSXkiU9772cQxzmOacxBsm%2FLXukvKoHakUMKuBNWbHfeDIXwIEgC8euc3vPCbHn3S3GkzyO2IzBZEQgwGs8HnJBrjeymm3FuF0MetPn8Nn88nciQQXO6pU8meEojquOXkYHLGRIcGAj8Fu2nVSgRUpR1p8xDFoYPJFnCqbDPXJbxh0IVKqeelySnMhC8erW0jOFg6uiQEwYOmcrRxEh3rBcK6Fa8jRGWnEohAMPQhrW0WPbDq68Hs0bJnglq5NdnB0gzvXkzU19PqcgQJBX4VP7QkXBuLrsGs7mB9sQx26Y3cdfx9Ial3sM4WorW4TFFLysSCWeWp29CdzNxu404lcks%2FZ%2B%2FWStgVSo%2F04XxDwaHPBKCEkEtVh2MLizSqsVbGCdnH98ZcrgzJMvDGuhMR0rxe2vhdxNdOTQ93FzFG%2FtYB6i5hOIyoJFcLkvPlQDG9rBnobaAhLMJSC8b8GOqUBCadJ7dpBnoIoWos4XFME9HLpx26ZfnMS10tTQjbPIZNEQzrxIlnAn6Q%2BUfxi9R%2BP0TKffh6nkgB0B1HLvf3Z9fVMFekeTsnvJbnYc89Bg46zcQCsJaSfdsi2tj3jgOYSZOrarocG%2FTw6Ks7CgwUDHWUEpk%2F%2BArIgrMWGMUYiw5XL2I7bJoJt1q10ro6adRXGNavFDOeJzSse9355Izf3E7HRSAva&X-Amz-Signature=53c33415e7091d91130120c1c7e2e98d6a5363d701bcbb66e38c5ba8c33ddd82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTQGFHM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCICTZJ%2Fs8iK7BLwwlhCwI0Hk1gSe0CXmxlGy3CuZqVQN%2FAiEApBMiSRfvXee70zVWgm2TfpdU%2B%2BZ0R1klIeSt5DxD48YqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIz5qduQ2vYO3CzwqircA1DaqtHVS5jUUJt8nZovb%2F%2Fk0FvajfbuYa%2BW%2Fx3XwIfw0auuKFxd%2BvV0M6cJshIKZOb2Dhe8MgZ3DVOg1UkyLNy6w05163o%2BZLUWdpN9npwqkgYg2GcD2WAzOQnRatWKgouymMOjmsSJl0Sx%2FsRosULJFcLJIgiLHS6VEdUglDulQjwoNm8jW64SkG%2FmybPOZzFAji3YSjOIfhLHHg%2FmjrANfzS75v%2FStytdpImG3lWZo97fimPWGNzFrQJy%2FMtcpWJ9dVNfWwqGWq1gHcqt1jpjVJ1AMKyXasqUgGgTFRCZBVZDGal0fW7fKRvStcdZbgXSt5JegclvhM%2F0m18T3zcdCBz19jI4isNfUO2A%2FpJI7f3WMurYQqvHxk2ZFqSe1SiwfiLrXvh%2FJbYXtJcSh%2F73D8TWcYPchuG859fjknlqp6DxzFpUewRQNgjd5g%2FI009IN8%2FBZyKLI%2BMvuv5Okny2FhXmwG8weIEJ0HooT25B50UQYL7b%2FaymByBEPYEqbed%2BtgpSAvVn51gOlCMW%2F35Yq3XxeucUdxnsbcWQ%2FSqbc6ABDcGOrxd5RGkSm4ksHoAYomXuFloUOPwWYCYlQ2RgoPgx6E5zuTs0ff7PFyUlUm4pBBNpUmIyaCxjMI2C8b8GOqUB1Tfr7J94wlUylu5epDOe1Bgs14VmG%2FRDB2w%2FOqzPNXRfzbsD7CxX7YOZydLkoJrnsv9fEMEcvf6m49fVAeTTZkKlYiybkt4%2B7XEGnXjC%2F49d%2BMprTHTEzQE8szxwogrHMRT5RcvvI3wxV%2BE0CGu5EGa9XDdyM%2BY3FWFH3IBtb9NvgXhl1PtuZSNlRlBpwUF9vF%2B4TJ1OawRS95eXNW0%2BsSwg0wYr&X-Amz-Signature=41398b31cbff01737d974684e5951c26b3f010bf9665fd887904479b629e7367&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKMNWSR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCzrEKOZOkuyVJMnqBMItHfgs0uu8%2FD0f1B9U30UfJBnAIhAIoSb5kmtc7Q7XlUBNAm0LSGXk0qOeimCJUPzvD1CtW9KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztvWhSM0Z70avp9pkq3ANeR1yMb6IieBpE4cZAHE7DA6vQ07QVvU5PMn0%2FxSgyt997WITFSirjzziLhKnLNu9Hj4m1l4titpW8ut2yKRV9Mge2yuBnZmbjXDdaErXvSZz0T0GgZ8KXa6ixyWqDIEw6ccwOKXPCEyWFZxsfy92c9esClCK2yfoWXeQY0oWvO%2BuCGFZGnEOVhyyEhOZTGO2%2BINc2jl9e8%2F%2BiUoz2mPDdCO0Dasz0ND524fbadY8aIRBRMrX3kT3qH%2FNZ5wH2Ce30tTdWIYSgaFxxULod7XLsk8MjxVNZ6ceDVwrBXXG63o3ioQ4a0vttUagk89OhVSbbweLnzXuwWWzWwYUy6Wnv6DKpIuvYq7j%2FX0VxH9Fe3%2Bec9pwL6sCn0tnkUT3OFE8dCb8Xda0PsYfUB9G0F92FDsdV7KEtiTP6jJ29shgIJT6LyMYUllhMeAUJIhTYQ3YZx5XhdzhK05OJ96sY34uHWoEUF3JQESC22VphwyMAtf6nb8dYKaw4GzwDAiEgYeokwkRH9BxbVkHSsHQu9emQ%2B0FkIDT0OQHmoUDL0q1GfW8H24DjDCg65D2pfElAq%2FsOU2wgycE%2BE3CoD0AxTmhitjXi76Be1bWysx9jRCCQXAIoJJPwQtOch8SpiTCpgvG%2FBjqkAZ4QStaSJJgLQmAcC1%2Bo8O7PpqvlMEX0dbq3PBR%2FnHN%2FTd04o5VMvTcdXUkICsfax5Zdki%2FZ5feVKs6gl2EQ6R%2FGWrfHEWeKiEY5s%2BriEv82BQuFkgGyS4w1gpiDJEodtKcpC1cnj1UnMZXwvvfvKXGN1vvrkaLTQJo52pbwU9byz6radkVrUKsr9DI24Gf9o5YMUhC9PXFgyKMS75J0%2BcjlOKeH&X-Amz-Signature=95c17779a65bffd952666851126500ca82d0edc2a2c3f79e6d5548a2731d9422&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDRLK65%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFN3IQjhS7lPFdI1J51ilU3E%2BsEfX3WpfBJHWn77r9Z7AiEAynOczWE8gdt6sWnXq1pROW8UWmrUSQw9Tva%2BWZvNT7oqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4B%2B8saNn%2BV%2BxljMyrcA%2BGWyqf07F9LhGf62de5iS4NMluglVzqF8zHNphLEgsWJuu8uS1qOvceI7%2FHB0Mb2h%2B02sWzPZKwJKOoCbBS2Ui2DFxFKoIdFhTxR5GElkMeShoBIaqenHQRzZmgzAQBSqCGTUTLY5xKYpADBB88SV2zs6pW6n0h17KP2rYVNDuAvV0tp%2BrSXkiU9772cQxzmOacxBsm%2FLXukvKoHakUMKuBNWbHfeDIXwIEgC8euc3vPCbHn3S3GkzyO2IzBZEQgwGs8HnJBrjeymm3FuF0MetPn8Nn88nciQQXO6pU8meEojquOXkYHLGRIcGAj8Fu2nVSgRUpR1p8xDFoYPJFnCqbDPXJbxh0IVKqeelySnMhC8erW0jOFg6uiQEwYOmcrRxEh3rBcK6Fa8jRGWnEohAMPQhrW0WPbDq68Hs0bJnglq5NdnB0gzvXkzU19PqcgQJBX4VP7QkXBuLrsGs7mB9sQx26Y3cdfx9Ial3sM4WorW4TFFLysSCWeWp29CdzNxu404lcks%2FZ%2B%2FWStgVSo%2F04XxDwaHPBKCEkEtVh2MLizSqsVbGCdnH98ZcrgzJMvDGuhMR0rxe2vhdxNdOTQ93FzFG%2FtYB6i5hOIyoJFcLkvPlQDG9rBnobaAhLMJSC8b8GOqUBCadJ7dpBnoIoWos4XFME9HLpx26ZfnMS10tTQjbPIZNEQzrxIlnAn6Q%2BUfxi9R%2BP0TKffh6nkgB0B1HLvf3Z9fVMFekeTsnvJbnYc89Bg46zcQCsJaSfdsi2tj3jgOYSZOrarocG%2FTw6Ks7CgwUDHWUEpk%2F%2BArIgrMWGMUYiw5XL2I7bJoJt1q10ro6adRXGNavFDOeJzSse9355Izf3E7HRSAva&X-Amz-Signature=0b0c69cc6c615da66125b09c47a017175f783d25f2eadf63cc8f1a11913644e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
