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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3BAV66%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGN%2BF6AWBSFrYDmnTToOCSADr%2Ft1pRF%2FOaKjWlPKTVgNAiBEbPdU%2Bzd9Ee3Ki57CwoyNN9Mj4%2B9Sok0vNWnLDzyttiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiw98EhhcUJlfojdyKtwD%2F2Y67I1IrKlrzgEzR9%2FvUSRKfNOuinOEJm%2FC9wFDP%2F6XUuY6zFsnfuN%2F6UwrlbxRT13dNm5BQRKFMQRC14j5ux1YSagt95oMrYj6e5a8kiHOh7uc7efa3Xo9YH8YzmGkgCm2pZcHtbr5nQapCWAnchD5aFpWNoYsZdJyB6q5LlDDosTjUOexb0mTkROaOzIXWj%2B6%2FVx4nN38pFUOAKm0pyfzxC%2FZ1raAkZjNR5BA3HYp0urdRLT2ECnsCTeIgOdgewbXntCZGa0%2BBa%2Fex34dStE7ADex3dO9awp3SKsWTlQLxsuZBEAq7RjzlEX6y2kdJyMvlevW0djmGuV8uNySF%2F1%2BX%2BKu9TtZczMOt72r7VKeAEjb2VefXRJfYUKNA9BwwPzlBupYhrVX0Wx1S726HISGVMu3Ecg5KshS8JaEXW78If92%2FO1hvqmZXo9vb7wSPCtmVKInRo7B%2FwmxHpuAxcNOlcjzUeo69eEAwum0CKDJh1fmZIafOet%2FIudqUfTgjEeRwFjuEnSr9ttQHA6hz5ZBuEzL%2FGpUw%2B6bHdO4KkTgLphKSA2Ic7bp1lClG5X8D8nUiWhCu81dxFtn5dCcKEcbdEBbkCmye3Jv9zSnCZII01kk46D14HZ71GQwsumVwAY6pgHPWJ5KR8Pgv266G6ZWylwoBxluyet85zOv8wPrq5ZwyOMG0g1DTtWyOfSlALNIiIopMHgJG%2BLcVLbw1VTxRSecBGOeTADnS0lLl2r4KOojWPSnqYi5jkKXzUkmo7WWgkfafW5cOyhxHi0jv46n8rDUDJZlk4XPoIEGqdDIRoFtLy418MJfY2osMHvaDWj9ABUhvFzhFB2gzTupGqEjm7jYn0A6O1Lq&X-Amz-Signature=7a35ac8ea90f2b588667946843674dc7a97377c1e86932e5110d01fc8a5a4cee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3BAV66%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGN%2BF6AWBSFrYDmnTToOCSADr%2Ft1pRF%2FOaKjWlPKTVgNAiBEbPdU%2Bzd9Ee3Ki57CwoyNN9Mj4%2B9Sok0vNWnLDzyttiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiw98EhhcUJlfojdyKtwD%2F2Y67I1IrKlrzgEzR9%2FvUSRKfNOuinOEJm%2FC9wFDP%2F6XUuY6zFsnfuN%2F6UwrlbxRT13dNm5BQRKFMQRC14j5ux1YSagt95oMrYj6e5a8kiHOh7uc7efa3Xo9YH8YzmGkgCm2pZcHtbr5nQapCWAnchD5aFpWNoYsZdJyB6q5LlDDosTjUOexb0mTkROaOzIXWj%2B6%2FVx4nN38pFUOAKm0pyfzxC%2FZ1raAkZjNR5BA3HYp0urdRLT2ECnsCTeIgOdgewbXntCZGa0%2BBa%2Fex34dStE7ADex3dO9awp3SKsWTlQLxsuZBEAq7RjzlEX6y2kdJyMvlevW0djmGuV8uNySF%2F1%2BX%2BKu9TtZczMOt72r7VKeAEjb2VefXRJfYUKNA9BwwPzlBupYhrVX0Wx1S726HISGVMu3Ecg5KshS8JaEXW78If92%2FO1hvqmZXo9vb7wSPCtmVKInRo7B%2FwmxHpuAxcNOlcjzUeo69eEAwum0CKDJh1fmZIafOet%2FIudqUfTgjEeRwFjuEnSr9ttQHA6hz5ZBuEzL%2FGpUw%2B6bHdO4KkTgLphKSA2Ic7bp1lClG5X8D8nUiWhCu81dxFtn5dCcKEcbdEBbkCmye3Jv9zSnCZII01kk46D14HZ71GQwsumVwAY6pgHPWJ5KR8Pgv266G6ZWylwoBxluyet85zOv8wPrq5ZwyOMG0g1DTtWyOfSlALNIiIopMHgJG%2BLcVLbw1VTxRSecBGOeTADnS0lLl2r4KOojWPSnqYi5jkKXzUkmo7WWgkfafW5cOyhxHi0jv46n8rDUDJZlk4XPoIEGqdDIRoFtLy418MJfY2osMHvaDWj9ABUhvFzhFB2gzTupGqEjm7jYn0A6O1Lq&X-Amz-Signature=437740bdd9ff0f77ff7b9d96d4c1a6117e1c45b445b489a0849615813d6ac2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IYRHHN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDguiyiS4CWV%2FpXSqETnyJMQUe1%2BFEwBYOS%2F0F79i8mJwIgPaAKElLChenp2d4UnRtyCFzQoqYL%2B%2ByO10NStS7jUskqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyxkg3DHftysJMXTCrcA9kqNOwbW1nIWlTxqCBbWbGb8rB%2FXRXuR%2BOZkI1X560T%2FqmeiV%2BclM99YBfSH%2Fg7RYdjRz2M6mnf%2FwkhI4uj8dgxsAMPaZ%2F7ct%2BpDTLxVeEKzbO6aI0Ssj0kjD5fBZHTGouh5shLfhLkijxCU395CQqq2XDl0cuWaVcTTZ%2BsvEGh2%2F78K4dtSzg1AaBb4DxIXC7w86kneY2BwIjOXbyaBfOhqC3tkfyE%2BaJ%2FzQa7V7%2BjVwhCP7oXWcRDOjPd2SWJSGb9ETS4QZGkUOGQ%2Bi3mkD5%2BpLueHisgfKCsTnO1VPr7sFRrMgBN%2B%2FtCH%2F0Vddh26R%2BXH6CfCxy9KgB8zQIS1u1kCVh%2F2VHcLa0JIP8uJeKPq2PdvJffNwEH1QBNXtYzhtf0pS1HOTaHvheROmwgBduZzo45%2FpAS5qfcXQxiLLYeofnU%2FlwCBVEdWeUMrt8TtglF9k7ktsxPznipGujseQg08TvEMurlw73caN8S1PR0p5YwY6BIv12OEsSsowi4lR2%2FIn4SXpkQyqNS9NDwxI0TSHahzF9h1tIzlRr9sI2fXpsq0jqgodZe9FLC7a3O%2B8QiD5JbzCzJXeoJEe307Ajm0HjKjFHqsWZUnoDATVpz7SdcCgf7ORdw5aqbMLTalcAGOqUBbKCZAnVreXXd8Y6VIXAc%2FApdXBujvmEw3MLxj7MT2EiPwHMuFlF4HzuAdlgEG1Px1lOfn4i2rkjBhYbCfgSH8RzLZn1LojcX6JozYWvgUrnOtPPOm0XUq%2Bt3LuyWRdOHNgl%2BA20WQ8%2F8bNsxBiOe%2Bm8QFh8fruRRlNjKxqV5BSiL63cNOEqlsgn9pEXFX0zd%2FNfa0SJqXg7WKP8ZpjpBqkgRS4ss&X-Amz-Signature=16eeaeb1ed4ff51831bda4edfd60ca907fb97d36a9dec4155e6b5e2396f88566&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHIAXOSV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDF4sIY1J6gtlKivIQwKVUx458Ar2n%2FinfMu1GIfMfkEQIhAJdO8tCfz2GQ%2B3yMLbF9%2Bl%2BhKGtpk9zsK3lWA54Dc4k4KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzPEyEtWURGASLxvIq3AO550V4EUTXbQF7Isnwu0MFsBSDe4jAX6cKaE0ASYf8tJosng44Pwv%2FHiJNP%2FFAcCOAWSoepY%2BuKkTUaaU6OzPkKZOZV%2B0R6IMAVrl0y3bm3O%2FYm6QQzZ0VuPkvGDlLSl55JaASVKFNyoJz1WhtfJ5myFARidshs1RWy1q0vLHQnlUcPaGrmTy8F48QISRW2mbQJUAhVEksTQX%2BGB0WAoVV3GJtwOyDAqh%2FUXCtA969fRut9SNkw7oAopo1AOUpBmSXufq1YFrf6pQ4J5DErbr9bbBp27Jp%2FtXvrtvkfMpBckJ2Z6iB%2FAP0ZQJx%2FOwXIkzPrTYMoYjf5cTTWH%2BOkzemMQf6%2FbTI4d7fvDrq6YHtH%2BZ7umKrWeYc20RuWcUzlcKcM71DZr%2B2crxsbRq8ei6qVPA6zFYqf0kWzrSnp05eWx6tWUoZ0KJP%2FFkV35vBjhCRFYzOBmVdXJx1slY1ZTLLfJVeHc4IIWvPdW9NmkNyTCnG892dytlmT%2BdPLpx8ridzI10NlQ7JQeP%2B5lyuVs6%2FTpILMv6QH%2BXAEYBPFhxiNzqaLROfPI4PfS%2FUndlsX38oSXluxkhpm2KMbAHOi%2F%2Fcs7nizST%2FuOft40k2hBwVqxQ6ENh%2BMJ9mtXGQ%2BzCu2pXABjqkAch2VrGBi1qZI6UkMU%2FXZ6bTnN1au8MBKYWKsvfzfr9xpgiQJrrIX8PeTTBu3m99bHSesdmNXInMNFnzrTBqZ9p40dgeY5nL6rr7fqrJB0B9GQEEdCYT20D%2FokwaHP%2B19OIHLJJYGHfGsikexpQZwI3xnbIg3oyJ8BbmED77RVFFxDMNC2aizQDogJy2vRMa%2BchkEk95tZNepPi%2BpxWYA5myUpow&X-Amz-Signature=6ef0e21e372ee72646d270f9ae5346665451a01565e9784539fb1f00670e07ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3BAV66%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGN%2BF6AWBSFrYDmnTToOCSADr%2Ft1pRF%2FOaKjWlPKTVgNAiBEbPdU%2Bzd9Ee3Ki57CwoyNN9Mj4%2B9Sok0vNWnLDzyttiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiw98EhhcUJlfojdyKtwD%2F2Y67I1IrKlrzgEzR9%2FvUSRKfNOuinOEJm%2FC9wFDP%2F6XUuY6zFsnfuN%2F6UwrlbxRT13dNm5BQRKFMQRC14j5ux1YSagt95oMrYj6e5a8kiHOh7uc7efa3Xo9YH8YzmGkgCm2pZcHtbr5nQapCWAnchD5aFpWNoYsZdJyB6q5LlDDosTjUOexb0mTkROaOzIXWj%2B6%2FVx4nN38pFUOAKm0pyfzxC%2FZ1raAkZjNR5BA3HYp0urdRLT2ECnsCTeIgOdgewbXntCZGa0%2BBa%2Fex34dStE7ADex3dO9awp3SKsWTlQLxsuZBEAq7RjzlEX6y2kdJyMvlevW0djmGuV8uNySF%2F1%2BX%2BKu9TtZczMOt72r7VKeAEjb2VefXRJfYUKNA9BwwPzlBupYhrVX0Wx1S726HISGVMu3Ecg5KshS8JaEXW78If92%2FO1hvqmZXo9vb7wSPCtmVKInRo7B%2FwmxHpuAxcNOlcjzUeo69eEAwum0CKDJh1fmZIafOet%2FIudqUfTgjEeRwFjuEnSr9ttQHA6hz5ZBuEzL%2FGpUw%2B6bHdO4KkTgLphKSA2Ic7bp1lClG5X8D8nUiWhCu81dxFtn5dCcKEcbdEBbkCmye3Jv9zSnCZII01kk46D14HZ71GQwsumVwAY6pgHPWJ5KR8Pgv266G6ZWylwoBxluyet85zOv8wPrq5ZwyOMG0g1DTtWyOfSlALNIiIopMHgJG%2BLcVLbw1VTxRSecBGOeTADnS0lLl2r4KOojWPSnqYi5jkKXzUkmo7WWgkfafW5cOyhxHi0jv46n8rDUDJZlk4XPoIEGqdDIRoFtLy418MJfY2osMHvaDWj9ABUhvFzhFB2gzTupGqEjm7jYn0A6O1Lq&X-Amz-Signature=3cb8f60a0e788a67928570f9b5f89e404ce8ac9c37225f42cbc481ad3976462e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
