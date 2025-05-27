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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZRMD7M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqASUx6GsAmknXDqlfMl0E3IfUEtYo%2FLQd0LBfmzU7oAiEAoIw1QCyN4MgmIRz0tzI0tsxZta8Rt%2FbYlesxBa6rjSIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDA6%2B6uF32OwQ9V0%2FrircA4qtpovGyXrI%2B1y7U3%2Fg5npF9WWGXFCgppKZHbg2zD6x804y9BymaLSp1jcbYYSJ%2BJ2%2FyAWAesDUA1VHEOCfrBYaW2GEIXSEQxRu3lZWGsFKsovWdjEpAsIUzy28dlSJDdheCaOu2ICaAc3GH5T8CY2MJtt6Oe2qGkqlV9LNmNT1FrwSm1%2FZFN9AVaVJXGHvJD%2BxtklltSte9HaMT0Pd%2Bxr%2BDJBDraCP%2B2zCFo8OYlgu3qBB4TU2JhVvoij%2BLInQ9%2F8JMNkzOFJTR6cnZFXDuVO5J8UrqP%2BY1sL2s%2FjLql%2B6icuRvmOsfuNrdv1n%2F08MMYH5wkBagHYqJ5K2p2VM8r41rvK9w2uI18JG9dvairTCLxHD52l%2BPUfE1k5e57rqy3gPEMIlCOOd%2FGT4C4ifgNTH6quLD6j2nLfK2%2BJdSMobFaDFX%2FPFU8%2FUeHGi6RRYMZg%2Fk08phNziPsJrT8VDefKRxwr5mzKUrdhE2G3YEVBjc9nuj9MICcPfkNshNS6eM6ExV8StvpzwxBrStPcXWe9f%2FSea8sQx0QTsd7lewZS4eXpILoDJ9oKQ%2BKRl%2FR1pLVLsecqETTmpD7MFX8mFe7z1Zi1AJrDDs4%2BU%2FK%2Fjs%2BI4hO6dZYbt49fh3hCRMPmW1MEGOqUBMpLttcmOfqkq%2FS%2FG6rE1tX9n63RrczH7ujIxit89Kw%2FV2F8QHlKrfnpTdeStwAJo0Fb6RBjhlrl5bHDYPHeWb7R2tAtKTjt6oQyxZyBo%2BScETjMckSrUj9y3Nobiug6RZ6jQCsPYyJW2hRUlKyOTbv5qzk6f4dPeJBma2munbYvRVOyu84L5oPdr0rKWfzRfgu3xYQ3U3alUBlVBBw3CYjZjiJd8&X-Amz-Signature=2be0a52a949fee0c9135330752897223707ffff4c907d4046da6222a24561776&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZRMD7M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqASUx6GsAmknXDqlfMl0E3IfUEtYo%2FLQd0LBfmzU7oAiEAoIw1QCyN4MgmIRz0tzI0tsxZta8Rt%2FbYlesxBa6rjSIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDA6%2B6uF32OwQ9V0%2FrircA4qtpovGyXrI%2B1y7U3%2Fg5npF9WWGXFCgppKZHbg2zD6x804y9BymaLSp1jcbYYSJ%2BJ2%2FyAWAesDUA1VHEOCfrBYaW2GEIXSEQxRu3lZWGsFKsovWdjEpAsIUzy28dlSJDdheCaOu2ICaAc3GH5T8CY2MJtt6Oe2qGkqlV9LNmNT1FrwSm1%2FZFN9AVaVJXGHvJD%2BxtklltSte9HaMT0Pd%2Bxr%2BDJBDraCP%2B2zCFo8OYlgu3qBB4TU2JhVvoij%2BLInQ9%2F8JMNkzOFJTR6cnZFXDuVO5J8UrqP%2BY1sL2s%2FjLql%2B6icuRvmOsfuNrdv1n%2F08MMYH5wkBagHYqJ5K2p2VM8r41rvK9w2uI18JG9dvairTCLxHD52l%2BPUfE1k5e57rqy3gPEMIlCOOd%2FGT4C4ifgNTH6quLD6j2nLfK2%2BJdSMobFaDFX%2FPFU8%2FUeHGi6RRYMZg%2Fk08phNziPsJrT8VDefKRxwr5mzKUrdhE2G3YEVBjc9nuj9MICcPfkNshNS6eM6ExV8StvpzwxBrStPcXWe9f%2FSea8sQx0QTsd7lewZS4eXpILoDJ9oKQ%2BKRl%2FR1pLVLsecqETTmpD7MFX8mFe7z1Zi1AJrDDs4%2BU%2FK%2Fjs%2BI4hO6dZYbt49fh3hCRMPmW1MEGOqUBMpLttcmOfqkq%2FS%2FG6rE1tX9n63RrczH7ujIxit89Kw%2FV2F8QHlKrfnpTdeStwAJo0Fb6RBjhlrl5bHDYPHeWb7R2tAtKTjt6oQyxZyBo%2BScETjMckSrUj9y3Nobiug6RZ6jQCsPYyJW2hRUlKyOTbv5qzk6f4dPeJBma2munbYvRVOyu84L5oPdr0rKWfzRfgu3xYQ3U3alUBlVBBw3CYjZjiJd8&X-Amz-Signature=79395791cf84c511300b075390931e115b7bf0066c28a304c38d8dc5e922a932&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZRMD7M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqASUx6GsAmknXDqlfMl0E3IfUEtYo%2FLQd0LBfmzU7oAiEAoIw1QCyN4MgmIRz0tzI0tsxZta8Rt%2FbYlesxBa6rjSIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDA6%2B6uF32OwQ9V0%2FrircA4qtpovGyXrI%2B1y7U3%2Fg5npF9WWGXFCgppKZHbg2zD6x804y9BymaLSp1jcbYYSJ%2BJ2%2FyAWAesDUA1VHEOCfrBYaW2GEIXSEQxRu3lZWGsFKsovWdjEpAsIUzy28dlSJDdheCaOu2ICaAc3GH5T8CY2MJtt6Oe2qGkqlV9LNmNT1FrwSm1%2FZFN9AVaVJXGHvJD%2BxtklltSte9HaMT0Pd%2Bxr%2BDJBDraCP%2B2zCFo8OYlgu3qBB4TU2JhVvoij%2BLInQ9%2F8JMNkzOFJTR6cnZFXDuVO5J8UrqP%2BY1sL2s%2FjLql%2B6icuRvmOsfuNrdv1n%2F08MMYH5wkBagHYqJ5K2p2VM8r41rvK9w2uI18JG9dvairTCLxHD52l%2BPUfE1k5e57rqy3gPEMIlCOOd%2FGT4C4ifgNTH6quLD6j2nLfK2%2BJdSMobFaDFX%2FPFU8%2FUeHGi6RRYMZg%2Fk08phNziPsJrT8VDefKRxwr5mzKUrdhE2G3YEVBjc9nuj9MICcPfkNshNS6eM6ExV8StvpzwxBrStPcXWe9f%2FSea8sQx0QTsd7lewZS4eXpILoDJ9oKQ%2BKRl%2FR1pLVLsecqETTmpD7MFX8mFe7z1Zi1AJrDDs4%2BU%2FK%2Fjs%2BI4hO6dZYbt49fh3hCRMPmW1MEGOqUBMpLttcmOfqkq%2FS%2FG6rE1tX9n63RrczH7ujIxit89Kw%2FV2F8QHlKrfnpTdeStwAJo0Fb6RBjhlrl5bHDYPHeWb7R2tAtKTjt6oQyxZyBo%2BScETjMckSrUj9y3Nobiug6RZ6jQCsPYyJW2hRUlKyOTbv5qzk6f4dPeJBma2munbYvRVOyu84L5oPdr0rKWfzRfgu3xYQ3U3alUBlVBBw3CYjZjiJd8&X-Amz-Signature=0646a8aaf0a363a374204999c91fe43a939ef5ff95886f26b3c0e9edcb6a8620&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2BELAX6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwsjDDxufQ0bXIQNMFEWCVt9DZF6Iu4hQ2uXiccD0%2F6QIhAPZfJvG4DA6xoKWAAcnL4R3h6SWCkWv40SUsCf7dKbiPKv8DCFIQABoMNjM3NDIzMTgzODA1Igw%2FYyWIRX0hbSNJVw8q3AP2VpsDegVcynz6mglR9VzhgSRJcLk5WCIZCuU00YS9Yn3PpumRJ4YpXiMuFJBgz6LyDLwQi8QQEijGncHubsLvwmP8SoV%2BS0v31SQaA%2FyN35o2%2FUhO2ePFsr7do5LGfr9Ir5cafBVy6cUQWGDRBvunisRAZCiswSQudwW%2BSrtY2Ja3NpQ%2BE8uMh68LNQqRms17aF0c2TcY3eTFItYoyVbYi8BotE2g0DNCfFr4XJBbp6BWDQ%2BsLqdZkoS1AmfZtvb5q0hOA74xOObDOebQwcCVWExPx%2BZHtoYE6LecU2tn9v55Uy84vKki2CYmVgG4VjDbzviOchpAaK6aFmCxb7qBEwxYGQnbaF76APXCFW9tFPT534ch5kjGCaJzkPvY5KQnYxNYEZ7s7i8w4ZbjrM6VJE1TT7wvlHhPdN5V7lZsDNPc0XbVKm3Fj0a%2BOqfhiROpEHIfsrKDxvs32nR%2B%2FvIrSzR46yIpzRLGtR3iWliADa64OYEdj06WtEXtuxQJ%2Fx52yaPSDDhUjuzxgOfruJtas1S2rFMigTFdyQ8QuOfCCumiqWyK3RdRkG78KsdwsUXPzi60wksPrqC6WiTPxTn6htKRssrbz7gyEdbCaBUlV1AZ%2BFPxByOCK%2FFUQzD3ltTBBjqkAbUCpO3YW8oP23KDXcoIkpUrus8kFo8y1DrvxANRdQ5x%2BaGp8rnz7sLr6JYJvCRvsR3Xb5VWIp6%2BvuMkHXAdUeLnuM9kG%2Fc2iNGTdzrZGDBTSiVIDIHeGwqYVwVpqhIGMHYZMNmnQo%2B7VhVMNd97gscUhk0xL6oDHQ0SQUrU7QOrxgVNnCt5e7gitzIJsYmo7RCg5HZm1OKLiTUaF5IoQcWwd%2BSs&X-Amz-Signature=e0e85bf34abef100955cbdc134521629f8a6575b93ed37120e7f73a94094495b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVTBVSN6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzDbFth7k2kKKoZgLJDem2U6XZCT5YOwiYdhjW7OXGkQIgLLbo3NPUwOc%2Frpbmra%2FaVZCE8FH72DIbfA668UnyIEkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDYsF%2B%2BrDoNEiwMRxircA9Gt3swyQNQy6%2F0h42gxXOkv1ITqMSc%2BdCWHJyQupYWXI0wnpkJc7LtcjeBhpSnfAu2rCFxQHQMn79BLlkFZgwT5zM0HRhsUMWfBthFNt5bbIuwa0tIC5keA2MiHE8xpxIwEKH331UnprHNJVAdhAn61HQ8yXr%2BYTJ5vdxIDVuBXbesd3aPWo19iNBPp%2FD81%2Fp%2BAmxXnwmcus0wm9F8ZgBbqUz6ho7hO9%2BWOJQTEjJo8%2FoSbk0k8J0b89dkAh66S8MCw%2BtV96peMO0IwJw6e0x8FX%2BsGlnMsdjcdYDoRJXzUYUOn3rjI5PhhqyOXPaATUIngkZr%2FUeN2D4nOz1eBsW8kpb%2FT8DN52WiBpJYvjdeIM5ZJ1o6f4cWYIJX5cabvtlzQvk5mQsSEB9WnGpqDAjNYmdK9l868akqSvzrd0svmk5PKvOx2PmpUbMRwox8PZiJbgw0skva0q%2FmziBD7CPZGVhOOCXIKQZwup1QHV1hojvVV7Leh88BiixPKGguhEBqRk%2F1hXCgoBsu0%2F6cXsd30h5r2PGgts2U%2B2xvJG350tr0l4R88vjBG%2B6Xvxvnb9GOCEfRtGlcWOFWxE%2B0y0vBfF0FH0J16gxMkytXURk456TKAHRnzeHoa1h0sMNGX1MEGOqUBlJstYD%2Fr72PgdPTVpg4iTL54%2F%2BnJKRINEpBILyWQ6cLaIgzLLzwoiZDwH4KSh4PGW0hHjuyjm7tJcgx5wSkDu3HBw6%2FF3LIwjm9UFRRtdU%2FM6VFbLKhlrCw%2BUcm7PfZAkzSD59CHcf%2FpzBKugy88%2FbmW0qynSLDYOPUDzHXrMu1Mu%2F1U9aI14eRhUGk0liBQZcQmGzh7evcwgLinI3g%2BKEKWK1n6&X-Amz-Signature=8ac7affb2f74848057469887d5795d4dcad5421694fd69663080647746380850&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZRMD7M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqASUx6GsAmknXDqlfMl0E3IfUEtYo%2FLQd0LBfmzU7oAiEAoIw1QCyN4MgmIRz0tzI0tsxZta8Rt%2FbYlesxBa6rjSIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDA6%2B6uF32OwQ9V0%2FrircA4qtpovGyXrI%2B1y7U3%2Fg5npF9WWGXFCgppKZHbg2zD6x804y9BymaLSp1jcbYYSJ%2BJ2%2FyAWAesDUA1VHEOCfrBYaW2GEIXSEQxRu3lZWGsFKsovWdjEpAsIUzy28dlSJDdheCaOu2ICaAc3GH5T8CY2MJtt6Oe2qGkqlV9LNmNT1FrwSm1%2FZFN9AVaVJXGHvJD%2BxtklltSte9HaMT0Pd%2Bxr%2BDJBDraCP%2B2zCFo8OYlgu3qBB4TU2JhVvoij%2BLInQ9%2F8JMNkzOFJTR6cnZFXDuVO5J8UrqP%2BY1sL2s%2FjLql%2B6icuRvmOsfuNrdv1n%2F08MMYH5wkBagHYqJ5K2p2VM8r41rvK9w2uI18JG9dvairTCLxHD52l%2BPUfE1k5e57rqy3gPEMIlCOOd%2FGT4C4ifgNTH6quLD6j2nLfK2%2BJdSMobFaDFX%2FPFU8%2FUeHGi6RRYMZg%2Fk08phNziPsJrT8VDefKRxwr5mzKUrdhE2G3YEVBjc9nuj9MICcPfkNshNS6eM6ExV8StvpzwxBrStPcXWe9f%2FSea8sQx0QTsd7lewZS4eXpILoDJ9oKQ%2BKRl%2FR1pLVLsecqETTmpD7MFX8mFe7z1Zi1AJrDDs4%2BU%2FK%2Fjs%2BI4hO6dZYbt49fh3hCRMPmW1MEGOqUBMpLttcmOfqkq%2FS%2FG6rE1tX9n63RrczH7ujIxit89Kw%2FV2F8QHlKrfnpTdeStwAJo0Fb6RBjhlrl5bHDYPHeWb7R2tAtKTjt6oQyxZyBo%2BScETjMckSrUj9y3Nobiug6RZ6jQCsPYyJW2hRUlKyOTbv5qzk6f4dPeJBma2munbYvRVOyu84L5oPdr0rKWfzRfgu3xYQ3U3alUBlVBBw3CYjZjiJd8&X-Amz-Signature=40850e101efe78475c706409630b54a1fe37084bf5a3c3e9fc232dd275786fab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
