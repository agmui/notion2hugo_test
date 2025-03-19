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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMBCBHM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICXROiI8Oh9g8h4gZI8eCNBEVcORUj7iPn2Vm58WCPHRAiEAtvfXW%2BtqaEKJkED2pTHeOsPaGIsLj83lHKdSZSuzQ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEYkgO%2FPxEWal9SDjyrcA70A9EDcM2oYIlUV8KM6KAKWwvXaeMrw8TFiCJHqLRFTIm6DNGmB%2FGGZpEP8JQ3%2FX7qzq%2FEmQtmOY8nrJ1xZgKP4qi%2Frf60cbpUTvgzYXGMS%2FGp5qItBG7%2FjY0BxXw71cZznK4nWliZLPzAPgA9SjJx4gvvJZx%2B0qpfkW0ZAcPWJgJjwWH5f3zydciwNT3uTFQb9oTKAlNce%2F1crmUXf58SMZDMYBPzeMShXhnanOe380mg81UdBd21%2F0xSR7ApvGqNs%2B3Rz4reEyBvILB%2Bl3eI33lEO0n73K8KfNFtObtNM5hIwi%2Be%2FMNCRBW9pWuUSkWUGE6Wi6kIFco2eje8nl0%2BRTDutxgL%2Fem118q0ECqQegIWXLBh8eOUnILcQbbSW%2BT%2BZWk8lqZogcxfsat%2BvJCaalJKMo4yVbHfVl9RpARqO2sLdOUUTR8wrznWgeNKeMhwoLbNCtevJUphTOi1%2BjVnCWwi78QExCgR0D5LTjDFzrRxBu5cmFPotbbGUigus9u6NYHEMnSYZPSpZA2cJV8r4ie7atiGaZFttG9XMtgJJQSvBQKrUmpJ927xbnWsq1mS5RwjAHQjZN%2Bc%2BaDAjo6RaS3ufsdWXlINVsF1yv%2BbLpFj7mjt%2FNgWTfkkSMNLY7L4GOqUBb82LXtjlrc8wd3A59GtVydaQGGX%2FIV3EIwQhmRaYVJSmzMglavhk%2FKJg1aAR4aUO%2BiqXLsSJyQCs6XmnbGBAfFPQUuZWp2SjVgHmPmVHSWo0dNHH38Ib%2BcE1kJhPJskCGk7EY4ZYvYYIm28vJ%2Fk4bUMl2N8OSBifjY8Ijw%2Bamyon3xVRn2oGc%2FI8%2FVF%2BR8V19RxNTU%2BU9VJbRnJrLiDNfrQ%2B5F3P&X-Amz-Signature=de2ebe0e8be0a6bcc83e7ee7d70be7b3dbab4cecdf39224b0bb80cefc01f8a43&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMBCBHM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICXROiI8Oh9g8h4gZI8eCNBEVcORUj7iPn2Vm58WCPHRAiEAtvfXW%2BtqaEKJkED2pTHeOsPaGIsLj83lHKdSZSuzQ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEYkgO%2FPxEWal9SDjyrcA70A9EDcM2oYIlUV8KM6KAKWwvXaeMrw8TFiCJHqLRFTIm6DNGmB%2FGGZpEP8JQ3%2FX7qzq%2FEmQtmOY8nrJ1xZgKP4qi%2Frf60cbpUTvgzYXGMS%2FGp5qItBG7%2FjY0BxXw71cZznK4nWliZLPzAPgA9SjJx4gvvJZx%2B0qpfkW0ZAcPWJgJjwWH5f3zydciwNT3uTFQb9oTKAlNce%2F1crmUXf58SMZDMYBPzeMShXhnanOe380mg81UdBd21%2F0xSR7ApvGqNs%2B3Rz4reEyBvILB%2Bl3eI33lEO0n73K8KfNFtObtNM5hIwi%2Be%2FMNCRBW9pWuUSkWUGE6Wi6kIFco2eje8nl0%2BRTDutxgL%2Fem118q0ECqQegIWXLBh8eOUnILcQbbSW%2BT%2BZWk8lqZogcxfsat%2BvJCaalJKMo4yVbHfVl9RpARqO2sLdOUUTR8wrznWgeNKeMhwoLbNCtevJUphTOi1%2BjVnCWwi78QExCgR0D5LTjDFzrRxBu5cmFPotbbGUigus9u6NYHEMnSYZPSpZA2cJV8r4ie7atiGaZFttG9XMtgJJQSvBQKrUmpJ927xbnWsq1mS5RwjAHQjZN%2Bc%2BaDAjo6RaS3ufsdWXlINVsF1yv%2BbLpFj7mjt%2FNgWTfkkSMNLY7L4GOqUBb82LXtjlrc8wd3A59GtVydaQGGX%2FIV3EIwQhmRaYVJSmzMglavhk%2FKJg1aAR4aUO%2BiqXLsSJyQCs6XmnbGBAfFPQUuZWp2SjVgHmPmVHSWo0dNHH38Ib%2BcE1kJhPJskCGk7EY4ZYvYYIm28vJ%2Fk4bUMl2N8OSBifjY8Ijw%2Bamyon3xVRn2oGc%2FI8%2FVF%2BR8V19RxNTU%2BU9VJbRnJrLiDNfrQ%2B5F3P&X-Amz-Signature=5305444716a1391c62137e6d7273de74732af53546faa90b63931b0959c0f5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ67LQGJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD8U4nORoo0%2BAFlqCWN05JV0BG6THzK1e4BTyKxH3TL1QIhAIBSjs6%2F%2BF37ocNWs2O1dr7geTsyKlPe1VhnPivq7x58Kv8DCH4QABoMNjM3NDIzMTgzODA1Igx1mvSt0J9ghBFbf4Uq3ANvumR4dozRQZN6J%2FL09IkvLJC8jVdjrSWt0hAgz2mXDYO9PifasW%2FFnhDcqtutMliSTB2WjftUnjBmQ7FL5BcmSfHsX3yMx1zSGhjgXVzjAP%2FMzaxq9P3NNzsGWIa2JGTSviAT0GnHP2K%2BQmvn6SsodhzfNop06eQhFkHZCDIdANF5qkH55urInVVlStUZL%2B6yGopKqoh7XcPy7hMHRPaqeTJThrXBQ1a4%2FpaBKPfA%2Bu5QdJKLim%2BJUnp%2F7D2YZQ9HJSHbJ1CqXssrAMb9b%2BSASOyzhCLLQBl8Q0T%2FELkavCa2lMCDZHlqhz6jE8SMXDCcOJL%2FHyXN%2FoqFgFm5BRHUckHSAQHCfUA45bDeb6wEgH%2BMSQX1ntZs39VKH4wZHu3UlmUlvEjeI%2F6PI1qMco2ZYa%2BCWjKYUEn08CXMgHqC%2FxLP0oEuUD3zRVIi2yC3boFOdoWGbesotZpLK%2FZYysOtE7FZbvMGgb0imMJRdPqZxZp3qEttH793YDzp4GWTrSbi8apAN72OgVQ0aONmsLUgNzBkGSRGcfm13%2BT0S5%2FWQwtwO%2B4iBKYcMv8DilFf5MfZ20LC7poQvgvGi70RZUQU8%2BGC25U1yx0%2BCgimgEfkHPxldVnqJWNJvWmbajDH2Oy%2BBjqkAbPsCta2jwf%2B5W45Ey1mR%2B%2FGueEx%2FkyBDZCyBMOHP%2BmdPG8irSoPa%2FEk1E3bcr%2FZus2zwUbi5QdzZs7vw9B8RGTkYc0Ith0u8QupxPG7nPAj82GH%2FMvmTMMo5j7r4%2FGjl0db67XCYgOIpK%2F723p5nDAUqWUBGNhoR5FRoRudxN9Upi72GR2V3NQzeycA6gWmWE97GqQR8webkTO7k0leEFGR6Ke2&X-Amz-Signature=d30ee8d36878e15aa50c5df97483dd029e3a202a079eea9530f8c6cd16e020cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWCFNMJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBbb7fD1nvDin6lRXCj%2FM50dOYbWjts0cRnTvBkCF48cAiEAyLh4SB7vJfIDYO6pDxOhaz5wu8UGcM4oaimgXK1XNNEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNLsQTAcVV9Abz712CrcA19fRW04%2B2pS7TYd2svByHcncDI5qJLh%2BMQMyGn9qR%2Fro6PhAPMAu%2FczKGdY4k3OEUNEeKOK3SZNsr49tvWkzcyi6%2FVEKECH%2BqQVefNGUZfoVACnWKYruFVqkTJHOYvhhk7y1YnMOxRrzEQWgXZMYAYA4CvbVqQQkwfFSr66gExbyHSRR0CNie8AUuUa%2FG1OurManF5UoM83g5fjFx5BQutAdOFWYD%2FEm%2BmMmWTqT0pXwuDxObijUNbENcc9vKluSMq%2FA4K8LZr5oir%2BpV1xTDuAYoZQsgznfuInFRPJoha9S2iyEsPldRLCoQD386cMsCShO0JkGMrr4EhgQfGOT0C3Je1h0%2FxwFAqFB8KvyGSSYvyAlsJssLSv7bomjzOWm4MbOBkJD7LZVbjve%2B2%2FQMl0VRboPLikrMvFY1DyfGJro3QLhhedDqpdjcY45%2BoHXHzFtS47YMFaGRkE4YnIIhoOb6%2B6NZFW90kU%2BmiVH8jOWZc%2BWTkMSaLuEmdaKgqeLE52rYEd5niKZLtCA2RZzZwqQiQTW8F8pbuFsPO6PCeDSqZMaQVyY5oID08oIJgCTevAtf%2FXx38wwXKxVpYN%2FCOKy4Z67ibh524xrNZIuU3EoRoUuYL827WZ0P98MPDY7L4GOqUBiVveqEJitgbVd%2FVVClQcCaMg2uaMuiIXOz5NeVrxOsB6B%2F%2BwktcsbzZg1FY6CAsEoSLGI2YQrjtSFn%2BFlarkSgB5rtPWg8H7qfBfzAqiW1E9WekN5RnX7dijnmPaVeVz%2FADeA%2Bqieqz8BFWr%2F4iyqKjAmrhYdFQnYB4CEjNjl4vHgqTb%2FlBPkQtA%2FlkwD%2Batc8y%2BMRQoB%2FwrZ0YhLuRe2mYkNqLg&X-Amz-Signature=275d887e1014c5d196bba76bddc8a8a8bd0b1d10059690a3f9ca61287106c0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMBCBHM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICXROiI8Oh9g8h4gZI8eCNBEVcORUj7iPn2Vm58WCPHRAiEAtvfXW%2BtqaEKJkED2pTHeOsPaGIsLj83lHKdSZSuzQ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEYkgO%2FPxEWal9SDjyrcA70A9EDcM2oYIlUV8KM6KAKWwvXaeMrw8TFiCJHqLRFTIm6DNGmB%2FGGZpEP8JQ3%2FX7qzq%2FEmQtmOY8nrJ1xZgKP4qi%2Frf60cbpUTvgzYXGMS%2FGp5qItBG7%2FjY0BxXw71cZznK4nWliZLPzAPgA9SjJx4gvvJZx%2B0qpfkW0ZAcPWJgJjwWH5f3zydciwNT3uTFQb9oTKAlNce%2F1crmUXf58SMZDMYBPzeMShXhnanOe380mg81UdBd21%2F0xSR7ApvGqNs%2B3Rz4reEyBvILB%2Bl3eI33lEO0n73K8KfNFtObtNM5hIwi%2Be%2FMNCRBW9pWuUSkWUGE6Wi6kIFco2eje8nl0%2BRTDutxgL%2Fem118q0ECqQegIWXLBh8eOUnILcQbbSW%2BT%2BZWk8lqZogcxfsat%2BvJCaalJKMo4yVbHfVl9RpARqO2sLdOUUTR8wrznWgeNKeMhwoLbNCtevJUphTOi1%2BjVnCWwi78QExCgR0D5LTjDFzrRxBu5cmFPotbbGUigus9u6NYHEMnSYZPSpZA2cJV8r4ie7atiGaZFttG9XMtgJJQSvBQKrUmpJ927xbnWsq1mS5RwjAHQjZN%2Bc%2BaDAjo6RaS3ufsdWXlINVsF1yv%2BbLpFj7mjt%2FNgWTfkkSMNLY7L4GOqUBb82LXtjlrc8wd3A59GtVydaQGGX%2FIV3EIwQhmRaYVJSmzMglavhk%2FKJg1aAR4aUO%2BiqXLsSJyQCs6XmnbGBAfFPQUuZWp2SjVgHmPmVHSWo0dNHH38Ib%2BcE1kJhPJskCGk7EY4ZYvYYIm28vJ%2Fk4bUMl2N8OSBifjY8Ijw%2Bamyon3xVRn2oGc%2FI8%2FVF%2BR8V19RxNTU%2BU9VJbRnJrLiDNfrQ%2B5F3P&X-Amz-Signature=57c16cd06c614c1cadd2e96fffd23b47757ed4d9c539f038bdbfdcae909ae72a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
