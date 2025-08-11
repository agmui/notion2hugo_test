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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L73ZJ7W%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmof2OHxTrG125SaAh2RpL0uu%2BLde8Zvj3rXw%2FDBXyOAiEAx00g%2BoIRwLTFEiVjw6iAs9oObH33n%2FOOaM%2FNjI7t4bkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWn%2BLnxiMx9wCXSMCrcA8oW6qgPfoxkdrKzn0V4kldMNxw6y1i8q5Ypd6nVJK9AHY9JzHAjWANeMEEwk0Wl9H%2Bs1W7%2BRaKFjPNvyhqToPFZ98yikj8vjLj95NxpWFtu8ji4p9G9Wmxpf2f084nLLrPf8JZs%2F74zISFJQOOIl3BcZ%2FGbdXqC%2FtM8xmOFyXo9zH%2BYd%2B0YIKMi%2B6hWlo6yryOnUxglO%2F16KGfAv7uMGnj8ZBMU%2BaacJpNXWFhB6jyKw6XOK6Dcc1ja2M5pq4l1xjuWBuKx9bIrO3BSb0HKIWbmb5woe9hSh5DFUcPjjDEtFcN3bSLxwR2g0Km%2BYWrrhiB8z2Zc1He0kaRmLYdpDhNR%2FOKhE1ti8%2FyL1QNJsZ%2BEbBOYzhjuy98FsQ3v9EHUBEZdTB4mATvMPkh7kAdTQ1mbSggvQKVRG%2BmmsSTDooXd%2FlEdFPDBwuZjnxtJbsFx3oP1f4SY4gtkZVjzw%2F5Zef0g%2BcposqeXQ4quNm2GaZ97ToLa947AWDR3YncgKWJzHWTz4V8YKk%2B8Ovs%2BbtS9zX1K8rsxMigfX%2BS6dU9XlRpNUijrular9ZLt71ZMvewXw8bslOCuTru4mgKuXhit0VYLG6f9yYzHpswlCWkMoJAgprIEi3IxUIegAlQrMMvS5sQGOqUBqif0FaZf550HZz1SVWEKbFNeyace2nxz5n0kxq2qmjInpuj%2F9bgfSD2hvl%2B%2BXtBYBH9kDW%2FAMlc5SXljlndKdzRCQbXZe6vOF%2BRfxTw05DDjrPYLhapJ2hWM41rMNqNigzOcb4NWqo8X1bjtYuOGTJU%2FrTgi8oMN%2BBAtBruj%2BzF7vXmPvrO92fBIk6n3ca0Rtho7yG6QW5GrBIawqKMfcgb4aZcI&X-Amz-Signature=1e67a2b96db3a69362c27b934c8e0c887f768acbb19c1cc98b7442c7edfbf94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L73ZJ7W%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmof2OHxTrG125SaAh2RpL0uu%2BLde8Zvj3rXw%2FDBXyOAiEAx00g%2BoIRwLTFEiVjw6iAs9oObH33n%2FOOaM%2FNjI7t4bkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWn%2BLnxiMx9wCXSMCrcA8oW6qgPfoxkdrKzn0V4kldMNxw6y1i8q5Ypd6nVJK9AHY9JzHAjWANeMEEwk0Wl9H%2Bs1W7%2BRaKFjPNvyhqToPFZ98yikj8vjLj95NxpWFtu8ji4p9G9Wmxpf2f084nLLrPf8JZs%2F74zISFJQOOIl3BcZ%2FGbdXqC%2FtM8xmOFyXo9zH%2BYd%2B0YIKMi%2B6hWlo6yryOnUxglO%2F16KGfAv7uMGnj8ZBMU%2BaacJpNXWFhB6jyKw6XOK6Dcc1ja2M5pq4l1xjuWBuKx9bIrO3BSb0HKIWbmb5woe9hSh5DFUcPjjDEtFcN3bSLxwR2g0Km%2BYWrrhiB8z2Zc1He0kaRmLYdpDhNR%2FOKhE1ti8%2FyL1QNJsZ%2BEbBOYzhjuy98FsQ3v9EHUBEZdTB4mATvMPkh7kAdTQ1mbSggvQKVRG%2BmmsSTDooXd%2FlEdFPDBwuZjnxtJbsFx3oP1f4SY4gtkZVjzw%2F5Zef0g%2BcposqeXQ4quNm2GaZ97ToLa947AWDR3YncgKWJzHWTz4V8YKk%2B8Ovs%2BbtS9zX1K8rsxMigfX%2BS6dU9XlRpNUijrular9ZLt71ZMvewXw8bslOCuTru4mgKuXhit0VYLG6f9yYzHpswlCWkMoJAgprIEi3IxUIegAlQrMMvS5sQGOqUBqif0FaZf550HZz1SVWEKbFNeyace2nxz5n0kxq2qmjInpuj%2F9bgfSD2hvl%2B%2BXtBYBH9kDW%2FAMlc5SXljlndKdzRCQbXZe6vOF%2BRfxTw05DDjrPYLhapJ2hWM41rMNqNigzOcb4NWqo8X1bjtYuOGTJU%2FrTgi8oMN%2BBAtBruj%2BzF7vXmPvrO92fBIk6n3ca0Rtho7yG6QW5GrBIawqKMfcgb4aZcI&X-Amz-Signature=98f47a790d60dcb804a4fd4e0c72e25220bc4a4e2e90f6dd69597e827ac6b4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L73ZJ7W%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmof2OHxTrG125SaAh2RpL0uu%2BLde8Zvj3rXw%2FDBXyOAiEAx00g%2BoIRwLTFEiVjw6iAs9oObH33n%2FOOaM%2FNjI7t4bkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWn%2BLnxiMx9wCXSMCrcA8oW6qgPfoxkdrKzn0V4kldMNxw6y1i8q5Ypd6nVJK9AHY9JzHAjWANeMEEwk0Wl9H%2Bs1W7%2BRaKFjPNvyhqToPFZ98yikj8vjLj95NxpWFtu8ji4p9G9Wmxpf2f084nLLrPf8JZs%2F74zISFJQOOIl3BcZ%2FGbdXqC%2FtM8xmOFyXo9zH%2BYd%2B0YIKMi%2B6hWlo6yryOnUxglO%2F16KGfAv7uMGnj8ZBMU%2BaacJpNXWFhB6jyKw6XOK6Dcc1ja2M5pq4l1xjuWBuKx9bIrO3BSb0HKIWbmb5woe9hSh5DFUcPjjDEtFcN3bSLxwR2g0Km%2BYWrrhiB8z2Zc1He0kaRmLYdpDhNR%2FOKhE1ti8%2FyL1QNJsZ%2BEbBOYzhjuy98FsQ3v9EHUBEZdTB4mATvMPkh7kAdTQ1mbSggvQKVRG%2BmmsSTDooXd%2FlEdFPDBwuZjnxtJbsFx3oP1f4SY4gtkZVjzw%2F5Zef0g%2BcposqeXQ4quNm2GaZ97ToLa947AWDR3YncgKWJzHWTz4V8YKk%2B8Ovs%2BbtS9zX1K8rsxMigfX%2BS6dU9XlRpNUijrular9ZLt71ZMvewXw8bslOCuTru4mgKuXhit0VYLG6f9yYzHpswlCWkMoJAgprIEi3IxUIegAlQrMMvS5sQGOqUBqif0FaZf550HZz1SVWEKbFNeyace2nxz5n0kxq2qmjInpuj%2F9bgfSD2hvl%2B%2BXtBYBH9kDW%2FAMlc5SXljlndKdzRCQbXZe6vOF%2BRfxTw05DDjrPYLhapJ2hWM41rMNqNigzOcb4NWqo8X1bjtYuOGTJU%2FrTgi8oMN%2BBAtBruj%2BzF7vXmPvrO92fBIk6n3ca0Rtho7yG6QW5GrBIawqKMfcgb4aZcI&X-Amz-Signature=c0a067e9fb23b34cf6d3188a1bb84c6af0395588457c88d2ce0550a0e26f7c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOW4CHD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7MXKr9OTd92iDR1ZeRiAVYLa%2BbQ7asTCrviAEarYfAAIgG60xqfB6LsE%2FiMNllAEg%2BIl%2BG6XeY9OQk3NKtDC5QSwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPERTia5x13gM4qsuircA4RICtO8pb6HiEzJkn8VblFAr%2FMUMQGL3fn8MEN%2FJXiBnvvexdKcCY0dUQ%2FVUKsPY7%2BptF9lmI%2FZcZfn4kju8%2FviSj6XFOj2fr2yLs3KhTPiqd4CODkCSPHRRQjPq7V5JZPb%2FPgliQJHM%2FSNwzCCKtzJezVw0xII2WEnv3i04kJF%2BFPIgliSBQSNtBjDgCxi50j1A47NEPZ2pfJR4HKgwgKX9vCvqq5AGfUkflxhffxDgXFH%2BEcrKW4C4iZU%2FvVasee4a1w2IguN2Nhxuqp9M%2BYHnX%2Fw72BhZIl%2FSXQdnwBUiMN0LO7MKs0rcNywWNbkDVssGWN2zYkrqmQYkHsSLL%2BglIDr6lXrRpV9q8rqAsVcTTf4H%2Bp6YEvvFwSUS0CU6WoXIqb%2FzGtqFZED7gEayg2Et6ywkrwFMZAWfgEcS%2BKXB3EzBJilI%2B2AZez%2F2vJO9OjhuxZ0p8SipEDEQkZPqALLNhFll5Z%2FYnyw6N381JzxMCZPYLv0CYgZaU39MdfppYkLt3J5iEFG%2BFpeu4%2FiDh6Pvt%2FAao9bWEypL1SFIET4Ee94CTlSo%2FxX7X%2FDp4N2WmdlGm%2BphHMF84ggtOcFBRwqQPoKjl4l93gPHQLsmodNihdCmd%2BDtUxIptSRMJfT5sQGOqUBgWVytRxvoThvRMJbIn56ER8ZEKHh0kM3PsYtStBIiV1WseIlpmC7GSlcc%2F052Z9tCx42NYGoszyyVoykUMmg5901THAmPLozW9gwSRIgOk2XtIJFhYT94aruCVeJ9j%2B7ze5smT4zX4GxiAB3%2FwvAqlWX%2BJaDTvQTr8gv1sde1wtRspG%2FjScFS3dNXOLC%2BEDuCnVK9QJ1ZOc2MyiKwLWc%2BCuWXs1k&X-Amz-Signature=1afedae6f2a0952712b41014085b57edf7d6c0adbdce6a70600e038fb003c3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMULTRTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHnTN8qmC%2Ff3MwaVadStler4jshtzUpml3UwNGvPO7CgIgRnMVEF3wen39LRNViM6efpvDKlqGhSANfgbJme3qia8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJbXSQmhCEXqX05GSrcA55ByNBBAddBPxACkXQPYMOFQ4N8LUnCjrOAfQpkUWCF5DHI%2BXGZtnBYwvVPpqMgDsabhqXRv9BWlpOYC34gXiymLkRqB%2BFm3GAtZ1gGginTln3A%2FPTsHjmf7%2BbpQFnOvJMQQTl%2FOlpnQdKn0mZZgfQs2QCV2QTYWQprvxUa8nTbu3ZhlD5%2BjrIshjwyRdvJ%2Be2yZ2IwqIghq3xiI0D2qqINCofXRhSnRTc67jTPNmSqsrWjSpC9a8Ar67qUJlo8R1oAgE4BQHUjDj9k9qkXlaB%2FO1EKrupfw%2BppfrE8ryEZLn%2BI7%2FmGlaAxPf7w7OQxBEB46KtuAQfvJy6Tytf%2FwvHZMCImDzEUbv%2FNqGiXMz9s40hGXwu8vFru3VdC1nFOa%2BRHsmOSN6Ms1fmKIZXnHqK%2BwcR5VZ6s9mkTlsUfojIQZGXtSVyTzQErL2KkoD7qsxe8hKi8577m6QGcEVnv%2FuMpenlrlowsiFsi%2B9mmcrtVRr3lbjxFTmEBNNMXmN6t8jYds6vdy1O3GV9OCcvLYgy3u3fvceVuCWB%2FumQmBvgGD1iFjuNMGRiw%2B7Htxp8JK9wiM8BEtJYO0QWLzWw28pRZRemEkMO4ESSnQZkKsFksggUxWNOEiD1IZyCqMO3R5sQGOqUBly%2FlXv50%2BTT6Vy58ttj6krQDX9es5MCBGh2ObNjz8dDahEs16%2BuP%2BtEMdmhdzZsPerlejgnABqfeEa98%2BqiA20AYaU9kwUPpRNsvozdyGda%2FYs4RGMA9LwTtwWskZHYknJS62LwNb2z0pa77FIEPdrCQ97loOOaFp%2FVR5ICZylEC%2FhH5mO6dSX46nNPKvqn%2B7kyK68bCJvFElAJLj378ErKdnWFi&X-Amz-Signature=1344b2da5ed7df2fe1fed2579d89b83bfe05061afc2b57820ee0e288537a9ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L73ZJ7W%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmof2OHxTrG125SaAh2RpL0uu%2BLde8Zvj3rXw%2FDBXyOAiEAx00g%2BoIRwLTFEiVjw6iAs9oObH33n%2FOOaM%2FNjI7t4bkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWn%2BLnxiMx9wCXSMCrcA8oW6qgPfoxkdrKzn0V4kldMNxw6y1i8q5Ypd6nVJK9AHY9JzHAjWANeMEEwk0Wl9H%2Bs1W7%2BRaKFjPNvyhqToPFZ98yikj8vjLj95NxpWFtu8ji4p9G9Wmxpf2f084nLLrPf8JZs%2F74zISFJQOOIl3BcZ%2FGbdXqC%2FtM8xmOFyXo9zH%2BYd%2B0YIKMi%2B6hWlo6yryOnUxglO%2F16KGfAv7uMGnj8ZBMU%2BaacJpNXWFhB6jyKw6XOK6Dcc1ja2M5pq4l1xjuWBuKx9bIrO3BSb0HKIWbmb5woe9hSh5DFUcPjjDEtFcN3bSLxwR2g0Km%2BYWrrhiB8z2Zc1He0kaRmLYdpDhNR%2FOKhE1ti8%2FyL1QNJsZ%2BEbBOYzhjuy98FsQ3v9EHUBEZdTB4mATvMPkh7kAdTQ1mbSggvQKVRG%2BmmsSTDooXd%2FlEdFPDBwuZjnxtJbsFx3oP1f4SY4gtkZVjzw%2F5Zef0g%2BcposqeXQ4quNm2GaZ97ToLa947AWDR3YncgKWJzHWTz4V8YKk%2B8Ovs%2BbtS9zX1K8rsxMigfX%2BS6dU9XlRpNUijrular9ZLt71ZMvewXw8bslOCuTru4mgKuXhit0VYLG6f9yYzHpswlCWkMoJAgprIEi3IxUIegAlQrMMvS5sQGOqUBqif0FaZf550HZz1SVWEKbFNeyace2nxz5n0kxq2qmjInpuj%2F9bgfSD2hvl%2B%2BXtBYBH9kDW%2FAMlc5SXljlndKdzRCQbXZe6vOF%2BRfxTw05DDjrPYLhapJ2hWM41rMNqNigzOcb4NWqo8X1bjtYuOGTJU%2FrTgi8oMN%2BBAtBruj%2BzF7vXmPvrO92fBIk6n3ca0Rtho7yG6QW5GrBIawqKMfcgb4aZcI&X-Amz-Signature=e19e25b89559dcb61f3510c3bb040cc8d3d7cd9b20d39e5d1d6336756e6019b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
