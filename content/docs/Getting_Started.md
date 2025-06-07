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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6CEKGYJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2oi9N%2B%2FuInx60Zk7YgOFctNmWmh3XI4Qk9i9JktAaAIgTSy8QVjE1XPqva9pMTT73piitthIWo6us0vTwLxNNqAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPkAwy%2BpoU3AtV6JZircA2igsxGvs1LS4ziWqGSnHFzG3s%2FAQm0s77RU7B2U4DXZggWrEkxmz5mU7C5Ied2LEund9FvG6ubow%2FlfNJ1Fr0YzH8dtivDFXZhowyMIKz3UWOh0iho3mXaxjFEIDxWjzsjekOevdI94GOiPwhfbx13gzgbURpNz%2BSE5WnSFlaOHUH5e0JSn1e4nXgAaXcNIUcCJUqGNY2lDyByq7VeNtLhvpSRlKlOCP4hmRUMxDPHMPecuMUOWoc72bd4QFQET058YnSHR1hfaV9cV7XQHvEnPfuFCgXRyihJDb%2FpT1ySK%2F7WW%2F2yC7VnCS0vKvxHOV651hqtqqedUxQ0J4w7Mh4FTGoU4NGf%2Fa7PLLrCX4PsBzzmP%2Fbrvw%2Fs7EJfGZulsGIU69Q%2FaCDZHsi%2B6dKWuwf5B68n%2By0%2BurJ20XKf4o4edyIBIEB0oFbFzXlplcA7hVvdLMmfUyaud9HbOpLS0vDOdHoVxgIKmGssoMwDYm4eklp1M5KcYguUlPJqauBDJJWI2G5xC1mm%2BlZxhZ09wVE%2B%2BEfn%2BUTK9Xx08WPOH1zDSbwLDBAiKY0EqhrCfFGTL0TkI38tCIrMCi%2B9QN8AzhaJcL9%2BJCSSU1n8w%2FbMz9gn5md2XYcKVv98zgMyZMIKBkcIGOqUBTyOWl%2Fy%2FaI7UU0%2BUeimqV7eKEuIGte2ePWnjN3Dysm5%2BsjY5QUryJIWfQZVSpJF%2FO5LSwPOmdoRNXgfFg15oaa7gWr%2FyF39qR3zwQA1LOAdcw1TAErKC5xNLtVNtmK4sBhbEIo%2B3fXZ6Xrrv1gWH%2FKNokGKMG5e6Gos%2FLtiwmq5sSl1R6jISuJk3Hf1LFLsHnc6l%2FgUVGQRAbNUl5S%2FxAyw%2BHuT0&X-Amz-Signature=575ed576c7a86a81a281c56289d0690cb6d8ae27dd3a2fe2ffbee70eeae538cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6CEKGYJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2oi9N%2B%2FuInx60Zk7YgOFctNmWmh3XI4Qk9i9JktAaAIgTSy8QVjE1XPqva9pMTT73piitthIWo6us0vTwLxNNqAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPkAwy%2BpoU3AtV6JZircA2igsxGvs1LS4ziWqGSnHFzG3s%2FAQm0s77RU7B2U4DXZggWrEkxmz5mU7C5Ied2LEund9FvG6ubow%2FlfNJ1Fr0YzH8dtivDFXZhowyMIKz3UWOh0iho3mXaxjFEIDxWjzsjekOevdI94GOiPwhfbx13gzgbURpNz%2BSE5WnSFlaOHUH5e0JSn1e4nXgAaXcNIUcCJUqGNY2lDyByq7VeNtLhvpSRlKlOCP4hmRUMxDPHMPecuMUOWoc72bd4QFQET058YnSHR1hfaV9cV7XQHvEnPfuFCgXRyihJDb%2FpT1ySK%2F7WW%2F2yC7VnCS0vKvxHOV651hqtqqedUxQ0J4w7Mh4FTGoU4NGf%2Fa7PLLrCX4PsBzzmP%2Fbrvw%2Fs7EJfGZulsGIU69Q%2FaCDZHsi%2B6dKWuwf5B68n%2By0%2BurJ20XKf4o4edyIBIEB0oFbFzXlplcA7hVvdLMmfUyaud9HbOpLS0vDOdHoVxgIKmGssoMwDYm4eklp1M5KcYguUlPJqauBDJJWI2G5xC1mm%2BlZxhZ09wVE%2B%2BEfn%2BUTK9Xx08WPOH1zDSbwLDBAiKY0EqhrCfFGTL0TkI38tCIrMCi%2B9QN8AzhaJcL9%2BJCSSU1n8w%2FbMz9gn5md2XYcKVv98zgMyZMIKBkcIGOqUBTyOWl%2Fy%2FaI7UU0%2BUeimqV7eKEuIGte2ePWnjN3Dysm5%2BsjY5QUryJIWfQZVSpJF%2FO5LSwPOmdoRNXgfFg15oaa7gWr%2FyF39qR3zwQA1LOAdcw1TAErKC5xNLtVNtmK4sBhbEIo%2B3fXZ6Xrrv1gWH%2FKNokGKMG5e6Gos%2FLtiwmq5sSl1R6jISuJk3Hf1LFLsHnc6l%2FgUVGQRAbNUl5S%2FxAyw%2BHuT0&X-Amz-Signature=a2eb342bc8516fabca4a4bf58d3ae9a84b4a9ec7fa5775d32c5f06550d56f02e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6CEKGYJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2oi9N%2B%2FuInx60Zk7YgOFctNmWmh3XI4Qk9i9JktAaAIgTSy8QVjE1XPqva9pMTT73piitthIWo6us0vTwLxNNqAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPkAwy%2BpoU3AtV6JZircA2igsxGvs1LS4ziWqGSnHFzG3s%2FAQm0s77RU7B2U4DXZggWrEkxmz5mU7C5Ied2LEund9FvG6ubow%2FlfNJ1Fr0YzH8dtivDFXZhowyMIKz3UWOh0iho3mXaxjFEIDxWjzsjekOevdI94GOiPwhfbx13gzgbURpNz%2BSE5WnSFlaOHUH5e0JSn1e4nXgAaXcNIUcCJUqGNY2lDyByq7VeNtLhvpSRlKlOCP4hmRUMxDPHMPecuMUOWoc72bd4QFQET058YnSHR1hfaV9cV7XQHvEnPfuFCgXRyihJDb%2FpT1ySK%2F7WW%2F2yC7VnCS0vKvxHOV651hqtqqedUxQ0J4w7Mh4FTGoU4NGf%2Fa7PLLrCX4PsBzzmP%2Fbrvw%2Fs7EJfGZulsGIU69Q%2FaCDZHsi%2B6dKWuwf5B68n%2By0%2BurJ20XKf4o4edyIBIEB0oFbFzXlplcA7hVvdLMmfUyaud9HbOpLS0vDOdHoVxgIKmGssoMwDYm4eklp1M5KcYguUlPJqauBDJJWI2G5xC1mm%2BlZxhZ09wVE%2B%2BEfn%2BUTK9Xx08WPOH1zDSbwLDBAiKY0EqhrCfFGTL0TkI38tCIrMCi%2B9QN8AzhaJcL9%2BJCSSU1n8w%2FbMz9gn5md2XYcKVv98zgMyZMIKBkcIGOqUBTyOWl%2Fy%2FaI7UU0%2BUeimqV7eKEuIGte2ePWnjN3Dysm5%2BsjY5QUryJIWfQZVSpJF%2FO5LSwPOmdoRNXgfFg15oaa7gWr%2FyF39qR3zwQA1LOAdcw1TAErKC5xNLtVNtmK4sBhbEIo%2B3fXZ6Xrrv1gWH%2FKNokGKMG5e6Gos%2FLtiwmq5sSl1R6jISuJk3Hf1LFLsHnc6l%2FgUVGQRAbNUl5S%2FxAyw%2BHuT0&X-Amz-Signature=5518c04ce4e781b3755ad0fdfa7b7415420d96ab1deb1f9fab9ad9f48a27da31&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDHUEOS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDenz0Rh9ULJsNCGYJArkkP1PL2A7v%2Fs1dEW5u3PR%2FpjwIgPIA0SUOwivJRYKNpENhRhE3BgOQPokcpJWJzZChhdvMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDlfuZJHXvFfWFtfoCrcAwkDyqW6JeF39T2jDa9X5V5kZyy8810vVvIiuf50Qjj6tyyrL9ZOLJVL%2Fe2bsUhZUwKaHKXQzFW8dsewwAVVq1NE8ZZE7oVNPT46vV8HK%2Ft3Hyg9mUdTkmAxW9eLbCtnOmKkCRLbmpsH%2FdBNWfhI98Y0iOy0mPB5il2m1eKC6USnxPZ1BwrvqS72hsR6CV8dSEwGxo0sTHQbUrn6hDLTtZvr8C2k3OShF%2FAmtNwuDGeX7VNV77OI7jJvlV%2FpW5oY7NMn2DDKJa1Xe86wRSczgF%2BFuMxMSgYRBOlvXHPwu4dcMpHpXyEUL%2BQo64ib7qryy1qyJiC56TxXkETgeYYfIh4HY91b4JxFGlZ%2BKgkqiOjQKktN%2FUE%2FR8RmerXPNiMuBsGtl%2FMGgfTz9F1AWee6zdB%2B%2BgDMGarAxfZmvMkKclI%2FeXBmBOUcT85fGmqQqb1BtWW71KupRkhVetelt7SOCR2GcdYMmemwigwob9iSzguDmec63d6d6LL9XMnmBUGKYSezUkzhz%2BGlQS1xI%2Fd3ojTrYGd2SHOQlb3NMitzXEgI1oLTOUGvS4AQXYiVJxMLeF%2B8PEx837zoIz09OQYbIk5V1k19JPKIxYOuibFheCI6OjVV9KBZlr7DFFLRMJ%2BBkcIGOqUBNlcyjs%2FEcJJQx0yasvzhlwUFUnLW90EUMAtgItRVv5DzYi3I%2B4k3%2BcM4lWdqDF2EIW2D5CZQA%2Fu3PMEcVG1tT3Vr8N60%2F80G3TkdD821GNk5RH4roqGOBKKMYDCr2TlZbTP6sISWtB0jHOKLRG4RODXXCvtdggLjOtZJJ%2BRrLtloNRyM1PcQVBVySrNMoJwHHR%2FXMMWa4iUnuCfwvqY5OWCYmEy6&X-Amz-Signature=71c2f3ceec56904f61498061e9a1e92ae8b42ec116c51787a72888afbc3576cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTRK2ZX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYrGM5sJafsc2G%2FOTsnG47aJARoj3Ad%2BjmMPEzkQbs5AiBuiCNFEpMu5T0n%2FxvyDMu8k1wtosdXMiMLL8Y8oj0vHCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCtngxFpNKNJLvJjyKtwDh8NLvofjF7Ybya7rXzJYUIVWGEGUuvRZ5pXR4HFBgVy9RABi%2BnjR8OhNfIkZbUk8HRHtW3TvOx3W391FbupwPRJirp%2BpnRpK%2BPkX5LP1qD85AjUTlzLXy55duB0dYvNkscm9u8ZGBKZPSokL9YMxW0%2FMexihau73ihS%2FVrCDINDEHRyHTO5nZbqBDlkdQhLN0gtrVGOxzudeHo20zxo94Rk7wS7Ins8BEPRQ0aiSqvRh%2B4N2OCYtW%2FmChVXA3HNte7hT7Z2IFxObB0%2BWNnbLfbicHPcMo2RbMlNI5EiUFcDXkHFVEc%2BxZpSPXxfkMxik3Ha9J9OvZfOqri0PiY%2B9ghnYCKcbK18Hkyjr3Khg3EnWnswwwqrtEhkyV1JJ6kXb%2Be45CmaA%2FD2oTmsDonzecfk6BvmlYJlYwrLrKZIhUOEROEnzzg3o6cePdeeIbMKWrONkJfjuNSKBfP37cqvA4oqRoBPzmwzDvEOewrxPXij9W91lHhc3tDuI5QWdzmJRhGLPtswZNcYQBh%2Fy%2B3%2F3SdTog3FroJIH3gaesVIzzLfzASG4fvMLizu5p3JXDBCOmVt8vMogexh%2FOU5%2BCz5hk4339hUzFtQyMqe%2BUqdwiw2311drEiviN1E8oA4w1oGRwgY6pgGP6uIptJPmNYNwoayEEY%2B5sjsN7sp12SP3jp2Uk%2B2Si3GcNy9rZ8f2A1EaRfnrpb3kuDPEOd9umlJDCFTxFvoSywiFyWdWm91SS77RFfuJbuYA2auPZRvAjTb3Gkj%2BCGsez1mokGk4XYV7MQikVCU15e%2BRPe1wh3fNTdCVC5%2Fz6z%2BnAsH1bmzvyMn4SwF%2BWKu08c1bX4QXFXZhulpw160PG%2BbV9N6q&X-Amz-Signature=8b6808518b9f68f0c02df8c9ffe0a80264a84cc1c048cf598951cc2141d34d07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6CEKGYJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2oi9N%2B%2FuInx60Zk7YgOFctNmWmh3XI4Qk9i9JktAaAIgTSy8QVjE1XPqva9pMTT73piitthIWo6us0vTwLxNNqAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPkAwy%2BpoU3AtV6JZircA2igsxGvs1LS4ziWqGSnHFzG3s%2FAQm0s77RU7B2U4DXZggWrEkxmz5mU7C5Ied2LEund9FvG6ubow%2FlfNJ1Fr0YzH8dtivDFXZhowyMIKz3UWOh0iho3mXaxjFEIDxWjzsjekOevdI94GOiPwhfbx13gzgbURpNz%2BSE5WnSFlaOHUH5e0JSn1e4nXgAaXcNIUcCJUqGNY2lDyByq7VeNtLhvpSRlKlOCP4hmRUMxDPHMPecuMUOWoc72bd4QFQET058YnSHR1hfaV9cV7XQHvEnPfuFCgXRyihJDb%2FpT1ySK%2F7WW%2F2yC7VnCS0vKvxHOV651hqtqqedUxQ0J4w7Mh4FTGoU4NGf%2Fa7PLLrCX4PsBzzmP%2Fbrvw%2Fs7EJfGZulsGIU69Q%2FaCDZHsi%2B6dKWuwf5B68n%2By0%2BurJ20XKf4o4edyIBIEB0oFbFzXlplcA7hVvdLMmfUyaud9HbOpLS0vDOdHoVxgIKmGssoMwDYm4eklp1M5KcYguUlPJqauBDJJWI2G5xC1mm%2BlZxhZ09wVE%2B%2BEfn%2BUTK9Xx08WPOH1zDSbwLDBAiKY0EqhrCfFGTL0TkI38tCIrMCi%2B9QN8AzhaJcL9%2BJCSSU1n8w%2FbMz9gn5md2XYcKVv98zgMyZMIKBkcIGOqUBTyOWl%2Fy%2FaI7UU0%2BUeimqV7eKEuIGte2ePWnjN3Dysm5%2BsjY5QUryJIWfQZVSpJF%2FO5LSwPOmdoRNXgfFg15oaa7gWr%2FyF39qR3zwQA1LOAdcw1TAErKC5xNLtVNtmK4sBhbEIo%2B3fXZ6Xrrv1gWH%2FKNokGKMG5e6Gos%2FLtiwmq5sSl1R6jISuJk3Hf1LFLsHnc6l%2FgUVGQRAbNUl5S%2FxAyw%2BHuT0&X-Amz-Signature=789da1961b0a31afd3b81127ec6b20d3faf622f9552c717185c4780014efdc11&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
