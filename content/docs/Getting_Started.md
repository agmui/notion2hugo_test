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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRYYSK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZFPgxpzUfYTf9phH%2Ftl4X2fFzukH7udVp9qKwXAy4zAiA7%2BKn%2FgVECWf0ZAbj60ZFXGFAuEmW9gPCgdK1UDMwIZyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMTJafAPDsYekrwiLQKtwDa7YJBO74hdPhIYjLPVnS992qHCnesEZsZbsVpONgPDefd4rklnkHcSjnwLdamfCyeYlxVcVsD2VbhokAwWvnIGvQDPtWK2P%2BFU44KCs5NNxvABqySU7xGn44reH7iecjd9O%2BsCuN%2FonTDjKo6cdh2WlCVSvT3QCGxU6q3ExAro1rqsqt0IOTVFAkchvMaRHFqw0U4VuRcWKp%2B4hn7LaPUOBRPVgaR2VvPTH2Oh6agdNEsLZBV6v4feOAB810LzDCGClZxudLLMj2WaDWADONeAl1MnZ7TU7DWZ9ILXbxUfijwdj3C2gjpQsNEKDPumd8hOUuB6A4jlhCFAa4kcZRXsohmiWvTpXjPkZRU9%2FAwLsbeMnOORY6%2F8MQleO1fHnCXyL2LmdE9jlHA4vSQszvZg2bYf1USXPD%2BvdSNlovWP5yIYvy%2FAF7fHR3m44Pjvk%2FHLszt25iK21p6lCrFzUv4OjyrOE4C%2Fylz4ny3ViaETww9vfevK9xu8wotjygM2SqFz3%2F1HS4I20nnuUlaEEN2gTQ3CYjpH66%2Ft8nEB7n2tvEs0AMwavyWEDWbgUpmEUp9RX4CeM42cBo9k3wPm7NJgXT6XEhYDWFy2njRdM5uRrjvXwT1DHPR8XambYwhd63vQY6pgEp%2F2EaKfxInPWzh4bVbOiIOSX9nOCL5ltIY%2FeKy0ZU%2FCrw91XZyGAs%2FNZ8FC5NGNwf9JD4AmMup9b5ktswQOO28MXul9NjHnhU1tb8Pk2d3M3qmu78krVUxC888RD6p6N7FYujdwd2mNnG%2F3H1%2BIxf%2BLE52yiN5%2BDkZgIufCPYYfA2XBt5WeJPZnQCrQM73zyI0edyiSyWJ4IAb12tKYPZPMDiSx3d&X-Amz-Signature=ab3f1304d641fc26602eba7c8d5d90a68f6c8610af99ad211d8961b4532894a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRYYSK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZFPgxpzUfYTf9phH%2Ftl4X2fFzukH7udVp9qKwXAy4zAiA7%2BKn%2FgVECWf0ZAbj60ZFXGFAuEmW9gPCgdK1UDMwIZyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMTJafAPDsYekrwiLQKtwDa7YJBO74hdPhIYjLPVnS992qHCnesEZsZbsVpONgPDefd4rklnkHcSjnwLdamfCyeYlxVcVsD2VbhokAwWvnIGvQDPtWK2P%2BFU44KCs5NNxvABqySU7xGn44reH7iecjd9O%2BsCuN%2FonTDjKo6cdh2WlCVSvT3QCGxU6q3ExAro1rqsqt0IOTVFAkchvMaRHFqw0U4VuRcWKp%2B4hn7LaPUOBRPVgaR2VvPTH2Oh6agdNEsLZBV6v4feOAB810LzDCGClZxudLLMj2WaDWADONeAl1MnZ7TU7DWZ9ILXbxUfijwdj3C2gjpQsNEKDPumd8hOUuB6A4jlhCFAa4kcZRXsohmiWvTpXjPkZRU9%2FAwLsbeMnOORY6%2F8MQleO1fHnCXyL2LmdE9jlHA4vSQszvZg2bYf1USXPD%2BvdSNlovWP5yIYvy%2FAF7fHR3m44Pjvk%2FHLszt25iK21p6lCrFzUv4OjyrOE4C%2Fylz4ny3ViaETww9vfevK9xu8wotjygM2SqFz3%2F1HS4I20nnuUlaEEN2gTQ3CYjpH66%2Ft8nEB7n2tvEs0AMwavyWEDWbgUpmEUp9RX4CeM42cBo9k3wPm7NJgXT6XEhYDWFy2njRdM5uRrjvXwT1DHPR8XambYwhd63vQY6pgEp%2F2EaKfxInPWzh4bVbOiIOSX9nOCL5ltIY%2FeKy0ZU%2FCrw91XZyGAs%2FNZ8FC5NGNwf9JD4AmMup9b5ktswQOO28MXul9NjHnhU1tb8Pk2d3M3qmu78krVUxC888RD6p6N7FYujdwd2mNnG%2F3H1%2BIxf%2BLE52yiN5%2BDkZgIufCPYYfA2XBt5WeJPZnQCrQM73zyI0edyiSyWJ4IAb12tKYPZPMDiSx3d&X-Amz-Signature=726d184dd366c5860078d0d0c7641b1eafa68bbd2b54e9b81b1199354beec4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ66Z7I3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Krh2im%2BrhKchBU7%2BJn4HBfjqLjAoCAbhlrCrOShWJgIhAKHiYLHTQKJPNrpzvIftMRjkr%2F4N0pP5bKNFNrJDyQivKv8DCBYQABoMNjM3NDIzMTgzODA1IgzEnHU1joV%2FAAkrMnQq3AP4RQLttDbaj3GqZZ0eNMWxlBoBs4wzZTneE5C3A1MCZmwJyGjASiyPVXpy2bRESVTYXyXP19v1c0mMwWgkKwa%2F6AF5OMXl2bwWOUM%2Bja%2B6olPfk%2BE2R6L7Ew9rH52ThYWHI4OXvAt2m1KwI5A%2FbdUzWbze%2BKohisy0%2BDo3Cv%2BUdBIwFeKG2iwgGDJJ%2FSO%2F9wF12bY0%2BZrPmnlf%2BkhqLYnxAwtOsguXuj1Cbp9v12Zl817f802ryoJBJDt07XikfQ1cb4K9laXf5ca6%2FVh8mdFGDZy4gLzsYi4x%2FY89vW7i0plFYtN7V5fy6CxUBioOQed9S6fcXgP5eZjdhkLQOKgQnCcI02371y1KB9D9F65%2BH5582GPmitUkMyeISfy1zJo3FsSNtk3bu0m7Q7H5ojOy1TpgfzIvR7gIJXusJgGsKt%2Boun9DEnKmzNNUy1XvIKC8jb2DHp2Qor47N9PE3%2BQjdKPFbVakC1d43DydOZ2tdiuiMNAqRHKtDJ33xeSl9AbNB1tLRexGBivQNDT3QUdigUyQucZAxPNi9eSh7QMKOE0OB6a%2B3SolWv6EXVIA7HM5c6%2B2ABunc81KcBlq%2FYtx8Uwe%2FVXYJSc%2B6nPn%2Bj8vpkVTlGNVQDJgzqDTyzCo3re9BjqkAbistO87h%2B3wuKR4Lryll4zo7rkeAuVyUOMIUsNM7n2XsJBed0Ya%2BP%2FkZauxFucz59LijaKBRx0y7Z%2FixxlNeGnImki7UD8p4v2pam7%2Bec%2BElfZXLKAuUWF12SvDXW1NPKFiMJCkZmAr3UDwFd3tuuWtaejVDXgJ6Iu%2BChzxE6caGRR3P%2BZPmgA4P5cAQ6VMfbvJQVomMZv1rDImyuWL9F4CwdhO&X-Amz-Signature=003aaf994b2b879631278ccef14134d2e81323d9102bfdfcc57346d469e0bee7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDPNC63%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fd3qhHyd1EqR5gkzwNOdRu5N1kLrFRsOOoMhO8tCghgIgEy7Fs5on3Ek4dPw8aIPH9HLYwRp3Hjw0XO7iaQ8Q39Mq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAPMlZXXMg70ZoOAoCrcAwwqSA1UDucPYUD%2BuJVwapKTRXzjAHdkhWrjBTJ34Rm889fJXkcj9uGoUjsL%2BsaCrbrKLOf%2FflRr1vIG5Vz3dHFloqcElilhRI57EXkPc%2FvPbR3f8LApyf4APC3Y37YR%2FBwDjgE%2BbQrkhAlxfTj7FDUKuW7j%2Bbs0Rw9AGb5AYRK8hjx%2Bd%2FzY%2F5x%2BPfPmAwFuQKUr2Zw9Fq6fuuMY%2B9noDYDImBMq%2BKrB%2FOofe2eZUPO2JwqjKDdM06bXp1apAjX10Z5wPFswvsk3i1fwH%2ByN5KmqgDhH8f3R8gt1%2BY%2BulHy365dlBsniasmqAmzJIAWlNeM2kxmt9hCngs60j2IXtJqsXY2PXDk7%2FQZDOag1HmDgkKYlmuK8QPfkf02tuqQvTi4BQwaz8dMcQXygAAa7jzjz%2B7PttrvcmY0u0rgqC7BQ4%2FJnemnteeB3SPl9%2BFbQAwFdqmOeV8EBvsZqu0qZVRP%2FWiqPVHtmsaYBUjCs5Rvjpj7b2VV3AIG1WeCKDX2%2FeP8lm5Kmy65mZHw1J5uV6%2BIKeBls8eM9eiq3oghLiI6ENvyuLy6VTowff%2B8IDqerMwqSpbeQYuvzVH3Ln93r6rObtti24eGqEA2CqgQliHYddhZU10mVqGCXOCfkMM%2Fdt70GOqUBqs0T3pXANVBlC6dKy4vQeeF1eHQgM8UXYa8bo6%2BqUwW9BFQy440JlOMQZAUO1R5hzIxh%2BYK8e1QGMqqi8foGmARVpoQ2ZjZzG5RU8HSut3xVouoy8vFHSgrn6z1v6a4g161A28VP%2BpDeWAtTaCVuSk9iuqW%2Bfc9JGLMxLuh6XBSaverpf0HwLAiioNubpqJ5sZdY847ePNDTuzMm%2FO1dlWH142d2&X-Amz-Signature=f87f83796247d78a21587caaabccc9bbe3060a15306a7860fc5193cbd2a34024&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRYYSK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZFPgxpzUfYTf9phH%2Ftl4X2fFzukH7udVp9qKwXAy4zAiA7%2BKn%2FgVECWf0ZAbj60ZFXGFAuEmW9gPCgdK1UDMwIZyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMTJafAPDsYekrwiLQKtwDa7YJBO74hdPhIYjLPVnS992qHCnesEZsZbsVpONgPDefd4rklnkHcSjnwLdamfCyeYlxVcVsD2VbhokAwWvnIGvQDPtWK2P%2BFU44KCs5NNxvABqySU7xGn44reH7iecjd9O%2BsCuN%2FonTDjKo6cdh2WlCVSvT3QCGxU6q3ExAro1rqsqt0IOTVFAkchvMaRHFqw0U4VuRcWKp%2B4hn7LaPUOBRPVgaR2VvPTH2Oh6agdNEsLZBV6v4feOAB810LzDCGClZxudLLMj2WaDWADONeAl1MnZ7TU7DWZ9ILXbxUfijwdj3C2gjpQsNEKDPumd8hOUuB6A4jlhCFAa4kcZRXsohmiWvTpXjPkZRU9%2FAwLsbeMnOORY6%2F8MQleO1fHnCXyL2LmdE9jlHA4vSQszvZg2bYf1USXPD%2BvdSNlovWP5yIYvy%2FAF7fHR3m44Pjvk%2FHLszt25iK21p6lCrFzUv4OjyrOE4C%2Fylz4ny3ViaETww9vfevK9xu8wotjygM2SqFz3%2F1HS4I20nnuUlaEEN2gTQ3CYjpH66%2Ft8nEB7n2tvEs0AMwavyWEDWbgUpmEUp9RX4CeM42cBo9k3wPm7NJgXT6XEhYDWFy2njRdM5uRrjvXwT1DHPR8XambYwhd63vQY6pgEp%2F2EaKfxInPWzh4bVbOiIOSX9nOCL5ltIY%2FeKy0ZU%2FCrw91XZyGAs%2FNZ8FC5NGNwf9JD4AmMup9b5ktswQOO28MXul9NjHnhU1tb8Pk2d3M3qmu78krVUxC888RD6p6N7FYujdwd2mNnG%2F3H1%2BIxf%2BLE52yiN5%2BDkZgIufCPYYfA2XBt5WeJPZnQCrQM73zyI0edyiSyWJ4IAb12tKYPZPMDiSx3d&X-Amz-Signature=dda5a74eab05adfd857e54bc37753c3d5b78fc31242087e1cfb613f357ae3819&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
