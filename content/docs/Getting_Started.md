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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTCJCIE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0AcVKN9iUo47y7p18X20Nfv02HQw52a%2FH9kcmrPlChgIgd0rFk7bkxs4eXAzyPghvvbiIGqwnv3Oku8W3Wtl5DOAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJNWmJerzUx3bqsBhircA1ZGKAVM3LNexVWqO5%2B78eCHhg4QIxegsIvaityVNv7oeA0WXGEfnnRU7u%2FO7nmIOQtd%2BvfNzCKiI%2FtXRZy1wPZzcJKCbH8FMROrjSOzTKPAqFOge2LVUikTpTqRwZNG2hE184qHLJqv%2F%2Fa7bM4UFZDrRBkTMXB7Arysnm62EAn7NLhwlbk5%2BCDNjuLlNd4rdOJUXj4wKrYJTUHZxP%2BJJtlTFUbaKm1jiHByadq%2FAFZWRJQnf9sIOPPQFWJgYiBXUUMxyyppVgpJ61634rz%2FVi2BS8QmHufiL9UX%2BHWZLeY6X6IoNGIWs%2F6nNkrLyR3yDC56MDZ48I83PZHVPynb590quw4U3yrsgcrRjoXsutZxL153Y59olKdsJOu2URtPT8DpMGHZy9TsFMBQn5G%2FG4%2FzcFfhlKD0wFcDFOoz0PhBMbRgD0mxLm6ejZbZ41UfQn47BitBhPfYJxLxaqpGDYnh1KwUxA7TUdS5D9KebKHARz2OiTrKD%2BbB1ZQzztMgr%2B5eSwOEErOJgGALiqYZqnRcqek2ONnCLXrvm9vpZk42JjCQm5MRPF3HanGyh%2Bpn8fptlgR7DQojQ28MnBezt6JYoD2qDml7GZPNwysFWUpqjlmnf2QmRdwg1TRAMITZvsQGOqUBPVYR%2B6vB5QFjDqlPLeQq4q5P0JJ7jg4BzmELa7Q9Ev%2BhFCfnisa4seydkrc8VKUL4tA9Qw5vf6oX8IqTnGyf3AWdOe1pBMIDaROU1KFbIZVWangE77Tn%2BUYcAYadLHJatJb3Veh8PF5XcBchH%2F%2FRnKBEba%2BdCHOS2YVu9eJn6AGelw5WEAmFlrDyKoQxloEa3plcAZnCDfFnwupPwVyTjC8JBocQ&X-Amz-Signature=943b50b4b79c90d4f103603d0a3453e8d6f701e39aa67c61d8f2aba4e0ad033f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTCJCIE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0AcVKN9iUo47y7p18X20Nfv02HQw52a%2FH9kcmrPlChgIgd0rFk7bkxs4eXAzyPghvvbiIGqwnv3Oku8W3Wtl5DOAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJNWmJerzUx3bqsBhircA1ZGKAVM3LNexVWqO5%2B78eCHhg4QIxegsIvaityVNv7oeA0WXGEfnnRU7u%2FO7nmIOQtd%2BvfNzCKiI%2FtXRZy1wPZzcJKCbH8FMROrjSOzTKPAqFOge2LVUikTpTqRwZNG2hE184qHLJqv%2F%2Fa7bM4UFZDrRBkTMXB7Arysnm62EAn7NLhwlbk5%2BCDNjuLlNd4rdOJUXj4wKrYJTUHZxP%2BJJtlTFUbaKm1jiHByadq%2FAFZWRJQnf9sIOPPQFWJgYiBXUUMxyyppVgpJ61634rz%2FVi2BS8QmHufiL9UX%2BHWZLeY6X6IoNGIWs%2F6nNkrLyR3yDC56MDZ48I83PZHVPynb590quw4U3yrsgcrRjoXsutZxL153Y59olKdsJOu2URtPT8DpMGHZy9TsFMBQn5G%2FG4%2FzcFfhlKD0wFcDFOoz0PhBMbRgD0mxLm6ejZbZ41UfQn47BitBhPfYJxLxaqpGDYnh1KwUxA7TUdS5D9KebKHARz2OiTrKD%2BbB1ZQzztMgr%2B5eSwOEErOJgGALiqYZqnRcqek2ONnCLXrvm9vpZk42JjCQm5MRPF3HanGyh%2Bpn8fptlgR7DQojQ28MnBezt6JYoD2qDml7GZPNwysFWUpqjlmnf2QmRdwg1TRAMITZvsQGOqUBPVYR%2B6vB5QFjDqlPLeQq4q5P0JJ7jg4BzmELa7Q9Ev%2BhFCfnisa4seydkrc8VKUL4tA9Qw5vf6oX8IqTnGyf3AWdOe1pBMIDaROU1KFbIZVWangE77Tn%2BUYcAYadLHJatJb3Veh8PF5XcBchH%2F%2FRnKBEba%2BdCHOS2YVu9eJn6AGelw5WEAmFlrDyKoQxloEa3plcAZnCDfFnwupPwVyTjC8JBocQ&X-Amz-Signature=ad92b19d36a5660ef0e2cc4fd4b47e34af469dc35f3c7a12162df27874b76119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTCJCIE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0AcVKN9iUo47y7p18X20Nfv02HQw52a%2FH9kcmrPlChgIgd0rFk7bkxs4eXAzyPghvvbiIGqwnv3Oku8W3Wtl5DOAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJNWmJerzUx3bqsBhircA1ZGKAVM3LNexVWqO5%2B78eCHhg4QIxegsIvaityVNv7oeA0WXGEfnnRU7u%2FO7nmIOQtd%2BvfNzCKiI%2FtXRZy1wPZzcJKCbH8FMROrjSOzTKPAqFOge2LVUikTpTqRwZNG2hE184qHLJqv%2F%2Fa7bM4UFZDrRBkTMXB7Arysnm62EAn7NLhwlbk5%2BCDNjuLlNd4rdOJUXj4wKrYJTUHZxP%2BJJtlTFUbaKm1jiHByadq%2FAFZWRJQnf9sIOPPQFWJgYiBXUUMxyyppVgpJ61634rz%2FVi2BS8QmHufiL9UX%2BHWZLeY6X6IoNGIWs%2F6nNkrLyR3yDC56MDZ48I83PZHVPynb590quw4U3yrsgcrRjoXsutZxL153Y59olKdsJOu2URtPT8DpMGHZy9TsFMBQn5G%2FG4%2FzcFfhlKD0wFcDFOoz0PhBMbRgD0mxLm6ejZbZ41UfQn47BitBhPfYJxLxaqpGDYnh1KwUxA7TUdS5D9KebKHARz2OiTrKD%2BbB1ZQzztMgr%2B5eSwOEErOJgGALiqYZqnRcqek2ONnCLXrvm9vpZk42JjCQm5MRPF3HanGyh%2Bpn8fptlgR7DQojQ28MnBezt6JYoD2qDml7GZPNwysFWUpqjlmnf2QmRdwg1TRAMITZvsQGOqUBPVYR%2B6vB5QFjDqlPLeQq4q5P0JJ7jg4BzmELa7Q9Ev%2BhFCfnisa4seydkrc8VKUL4tA9Qw5vf6oX8IqTnGyf3AWdOe1pBMIDaROU1KFbIZVWangE77Tn%2BUYcAYadLHJatJb3Veh8PF5XcBchH%2F%2FRnKBEba%2BdCHOS2YVu9eJn6AGelw5WEAmFlrDyKoQxloEa3plcAZnCDfFnwupPwVyTjC8JBocQ&X-Amz-Signature=ebd2be826f98babba0f4b3445c0cde7235981fa731f683a20483d8be6523ab96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YYVJJQX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUgsRX3p1K70JfPpixVwt3rztOQo0zCRx8koUnRJd%2FCAiAXY9alBC4Xo4JMAZgtGZ%2FaMX9ycFPADg7DobPT9Izl5yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7fK84V816gWwOuHJKtwDzIro1KwI9Vmi94pQ2J7ahyGYY7UDlcp8mHQrMv%2BcvQ8BAdDVquie2CY7YbyRBCPzb9yoOa7evdIV7Q2hlpH6mhkC0kzSprg0cPaLR5cHBA5WVIn4pT7z29%2BOx9CzLogUwffL6KLsXl%2FvaUPWWVldzwWZ6n4WohMQA0qz9696Mvq1RturzpzsC%2FJ83E0UyvrxwUfGl2RCo7Y5vApMX%2F%2BduWC18ZVUmR3gm%2Bm29AzhUSnNv4T17U9D0lrmqLMic1jsC3TqawP1EAo3EWySwbZ723AgkAgJDiodP%2Fm3CG%2BtmnVPv1iL1QRPnfylhU%2BOKTyP92pbGYUY7A%2FwvngU4YALTtq300O%2BBFVyuPRDNdxm5lwGIoYysMhGTJzkZ8Bwu0yiF8j64FQbx4EwUZraKbqN1%2F3Hcnw959DXudbFEs%2BS%2BlTDeW2jDfw9LD1WlGVrHmZyRgWGqx4gC3419KUBCLw4OGShKXlJRH%2FO9%2Bbqp%2BTFsZ19YuWS0I1JptWghrAXrT22N5hLa2oqDIHiWcgviYXPFzhFdgUgmGPbszEYXteeXCD5dJg2qBFTOVwzyH5bDyMEXEMOqIHvBxr%2BmEu180LG1A1srXJUXIjKycFD3R%2FYTNDpF4gzufxfgurL7AQw29m%2BxAY6pgEb0D1tozl6W0DV%2FUH%2BTp3WddlgG4VQknvkcZsUYLAllNHNzJ1UHnn78llsx4r7rIaJP0bhy44L1vxD4fRpGMkd5pXGLwZ0h5IthJJiyKHngDKD%2FZ8ZL6yXnh3xfAd3D8lYt5MVKGhaVujf9K%2Bwy%2Bpzc2f9v1WLbHX7wbtjbyBZ7KRzEoxLCavQ33LhSZi5Y9LmdyYQrT%2Fg7iqTyGvFcznENfZ8Py2o&X-Amz-Signature=fe0a0bfc72a06bfe95aa76a17aa92f6534266edc748472d8bc6487745b224b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KDCILCA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9XX6BLIKyagGTjLcIPUUKS9WPVCl3v412lLFcIQvDsAiAmophvQcVFxdGP%2Fqqoo%2B72bn5D7XYe%2B8%2BcOoJo%2F03QOyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMH0TOG7dB%2F7gvXefTKtwDhmpqvWVcFflhxUmC2LPXUNRUXiOV4nL7pmMp%2BzptCloQQKeUGD75oK7J67RPJ5XC6V%2FTZrinle1NcvI2HLfRXtOMjtLlygFPwfIAOy4N%2FwZT%2BdCRFQoSnV18UfhSMDBuGEoUdfb82pimZpY6brKvPfMD10j0Wl02rliiyzLg9u7wFA7rIGB4ChAan%2Fyfa0xgbGLLaj7zaNc5O6u5jDcHdqZfIIf%2FT%2F2w%2BKuPXkTLnewrXGe2UIdRKSEvJDgSVGo%2FecY3ckxZLERRhzRj%2BiL4dknOkQXCJsHi8NAC9WxrLmffz635Lz6tfXIerN8V1aFHnSYWpmGDm6BOu18HGvhQz9v%2Ft4TgIejrpHJAkiwqUnY1UKddxZoUKUcFKdTgwAebNXRXPIdeIO40KjqDHM9wAGoiW1E5QP6RHxgUscr3DmEq9AM5ft8njbwhFuBfNK92GxwfNm9S%2B196nMkj5ELAB8cTc6PzjsnjcGbo%2BWjKL5FLW6tyB0CUMFGzrjOGW9IFXmV6gOOv0GMppnRDg9bYA3CnnWGE8qyDFOufm2Gpa1DeJiipmriH5dXukvU1WulMRaSiUZ8gmkym%2F%2FtiPixVXeyNA%2B9rIFlCOcWhxha6yhBdNK97h9%2BhUVkFE0gwytm%2BxAY6pgHm6DTl%2BclVh59oivZJKFdtZBZeztq39436mxxcoEoogtarwinBSMkp3PwtrScExlPxuQYTR55iS1OIm4MO3aTUtPMA2S80QbpO5H5sbhlYmLVpm2iyWpPxeHglRegPZbhOTDNsGAvr3YGjU6X0KX1VLvGW1dW2lPzNXEpibLhNLndZFqx7YWMY0QSyINfmkWrxAweez%2F0woGR0%2BzGZS0DRtdbbBscj&X-Amz-Signature=a1ba283def6fa263e9b249781cc74de4e65177975030e97aa27356b0bf5eddd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTCJCIE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0AcVKN9iUo47y7p18X20Nfv02HQw52a%2FH9kcmrPlChgIgd0rFk7bkxs4eXAzyPghvvbiIGqwnv3Oku8W3Wtl5DOAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJNWmJerzUx3bqsBhircA1ZGKAVM3LNexVWqO5%2B78eCHhg4QIxegsIvaityVNv7oeA0WXGEfnnRU7u%2FO7nmIOQtd%2BvfNzCKiI%2FtXRZy1wPZzcJKCbH8FMROrjSOzTKPAqFOge2LVUikTpTqRwZNG2hE184qHLJqv%2F%2Fa7bM4UFZDrRBkTMXB7Arysnm62EAn7NLhwlbk5%2BCDNjuLlNd4rdOJUXj4wKrYJTUHZxP%2BJJtlTFUbaKm1jiHByadq%2FAFZWRJQnf9sIOPPQFWJgYiBXUUMxyyppVgpJ61634rz%2FVi2BS8QmHufiL9UX%2BHWZLeY6X6IoNGIWs%2F6nNkrLyR3yDC56MDZ48I83PZHVPynb590quw4U3yrsgcrRjoXsutZxL153Y59olKdsJOu2URtPT8DpMGHZy9TsFMBQn5G%2FG4%2FzcFfhlKD0wFcDFOoz0PhBMbRgD0mxLm6ejZbZ41UfQn47BitBhPfYJxLxaqpGDYnh1KwUxA7TUdS5D9KebKHARz2OiTrKD%2BbB1ZQzztMgr%2B5eSwOEErOJgGALiqYZqnRcqek2ONnCLXrvm9vpZk42JjCQm5MRPF3HanGyh%2Bpn8fptlgR7DQojQ28MnBezt6JYoD2qDml7GZPNwysFWUpqjlmnf2QmRdwg1TRAMITZvsQGOqUBPVYR%2B6vB5QFjDqlPLeQq4q5P0JJ7jg4BzmELa7Q9Ev%2BhFCfnisa4seydkrc8VKUL4tA9Qw5vf6oX8IqTnGyf3AWdOe1pBMIDaROU1KFbIZVWangE77Tn%2BUYcAYadLHJatJb3Veh8PF5XcBchH%2F%2FRnKBEba%2BdCHOS2YVu9eJn6AGelw5WEAmFlrDyKoQxloEa3plcAZnCDfFnwupPwVyTjC8JBocQ&X-Amz-Signature=430c1fa1e348f221eddee2b664ace2532ac0ea8de87929d6b62e9dd5c9be1ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
