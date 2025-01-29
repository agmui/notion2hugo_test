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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOJGMLI%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEA56EMzWlx%2BeM3gDQPIb422D8xhS1Myt%2F0OKq6UWstjAiBAqN4laajmHsdnxhzqVd4wtbyqAIJXKMe2JxJiecPL%2BiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzYTqzg2EWIfSqMJKtwDZBUxuaaf8co3lXkoWsuK1ekFN3unakSoO4etXPiLbUfEkb7v1LJVV9NAg14%2FUH%2Bias%2Bt%2FN38Ft%2FsdnFdiqc6jXJHF2qlxRXS4a4Q7R%2B6xgLAOe3pNEBT1c38wvjgvuGFDIXivG%2Fjh1q7BnSHHmvAnk0fEhQT0hCcph45AOEOQ6QELazgim0E4YmVEIwH6jJLp9uHaiCCSB50JyNZeiOzbWj7MLA7%2FoM6Ecwc6LlrvbVRgoaRtyHylnh%2BeUZcQOqmdct3p4ouwX4uxH0TldWmCcFykxUowJBh6YYJdRpX7o%2FR0ibDSi%2Fj%2Bg7%2FpijhBtc95lOMk4bsXMl2eT00fBALPS06Z%2FxPNxqlRx1Ar7aDiyXQvilVTfA1EnQTx9w2Plw%2Bn1xDY1o5JYKJn6o1ed2ZLDpILcnGAUwfYY2ayX6WWuEW8YGQqTbcbq1KYOLCV6Rz2sSm%2FF7r7iXAoN1GperQuXRdpTGt8PkDYmRn8tZYy1P%2BXes5FK80H%2B%2B7t4Gfa8HPx17mQLLwLd5FohtCq6v8tdgrjZWwnOyDa6fKbNNLfOxcENO%2Fq6sSeLMOWI1terbGgICIuMTn2nwHcLah3uyBCgdCJrJeXBQkvf2sKrU57TIKTgodmfHUhB4O1XwwyrzmvAY6pgEf0VGsX2ClQIUeU4aZUzgvjidvdZ2AsxHs4lO3xhpUIg0Buro%2BXi9Tc24cyuPCjtXzDn2o%2B2psrlXnoI8MWEBAHCRdZM51WsVVNbZo5R7EdsMccR1uergqvXnhKk6A5INkm74SmCWM14RxY3x3XeYlcXtvdz0kovi316kpegzURWbfkPkqg6VbsBs1nLtGpS%2F2KDDCO8MVpQVcyR3ZNXXTAKoUrbyT&X-Amz-Signature=17a2d32afa3005b555b25ceb81812ed91f0a440ba95120d315603b6ce464b593&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOJGMLI%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEA56EMzWlx%2BeM3gDQPIb422D8xhS1Myt%2F0OKq6UWstjAiBAqN4laajmHsdnxhzqVd4wtbyqAIJXKMe2JxJiecPL%2BiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzYTqzg2EWIfSqMJKtwDZBUxuaaf8co3lXkoWsuK1ekFN3unakSoO4etXPiLbUfEkb7v1LJVV9NAg14%2FUH%2Bias%2Bt%2FN38Ft%2FsdnFdiqc6jXJHF2qlxRXS4a4Q7R%2B6xgLAOe3pNEBT1c38wvjgvuGFDIXivG%2Fjh1q7BnSHHmvAnk0fEhQT0hCcph45AOEOQ6QELazgim0E4YmVEIwH6jJLp9uHaiCCSB50JyNZeiOzbWj7MLA7%2FoM6Ecwc6LlrvbVRgoaRtyHylnh%2BeUZcQOqmdct3p4ouwX4uxH0TldWmCcFykxUowJBh6YYJdRpX7o%2FR0ibDSi%2Fj%2Bg7%2FpijhBtc95lOMk4bsXMl2eT00fBALPS06Z%2FxPNxqlRx1Ar7aDiyXQvilVTfA1EnQTx9w2Plw%2Bn1xDY1o5JYKJn6o1ed2ZLDpILcnGAUwfYY2ayX6WWuEW8YGQqTbcbq1KYOLCV6Rz2sSm%2FF7r7iXAoN1GperQuXRdpTGt8PkDYmRn8tZYy1P%2BXes5FK80H%2B%2B7t4Gfa8HPx17mQLLwLd5FohtCq6v8tdgrjZWwnOyDa6fKbNNLfOxcENO%2Fq6sSeLMOWI1terbGgICIuMTn2nwHcLah3uyBCgdCJrJeXBQkvf2sKrU57TIKTgodmfHUhB4O1XwwyrzmvAY6pgEf0VGsX2ClQIUeU4aZUzgvjidvdZ2AsxHs4lO3xhpUIg0Buro%2BXi9Tc24cyuPCjtXzDn2o%2B2psrlXnoI8MWEBAHCRdZM51WsVVNbZo5R7EdsMccR1uergqvXnhKk6A5INkm74SmCWM14RxY3x3XeYlcXtvdz0kovi316kpegzURWbfkPkqg6VbsBs1nLtGpS%2F2KDDCO8MVpQVcyR3ZNXXTAKoUrbyT&X-Amz-Signature=7587ce2219e81e18eacc212f30339abe2955e1dd77ab3f4958c473eef3345f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IP55T57%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCqQqAEvi29qbRstpJNpsXns3RviyyD0xSEu1qSRguRKQIgBQ5nYZhu1i04MRXuqQWbU%2FsLCt6f%2BBqXtIF2Xr%2F7168qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIprsPAzkmuwGo%2BmvyrcA9iupMnIvfHper8Mx%2FZmRGpNxRE%2BR7nMloFvnM1jrw7sGme1qYTefDQSx%2B9NKJV5FnG1eJelDaO2HBtbYURtSav%2F3XlFfg7Rj8xG0kRL8BroGgyhGa2CTj815g2qqekdpC5FV4jhr2%2BSywhpPPfAYDr8Z%2FHbglq8V%2B3fcpe8mXWhs8AoCug%2FNffuU9x%2FlqWCpkvbRtN%2BjG0PwdqL3EBlPplXP4isx0AErAnwk7SFDRAsH7KKI3Svgef%2FfUNNtV7vFP63dVtaJxmntukvYqwRYG1wWNBWIH6CUNJKdeRNGHBCAK1llPkxATTzoS%2FB9J%2FM0bWobdKGnUAXOfhyHUv%2Bh73TEdup8u%2BvrW1I6lWvZVXA1zN4KrLe5o0h94sBqFMgdwueb%2Byb980qe9a33KnD8pjBF%2BebWKXHqyhnoqOMmMNr%2FF%2FFLc3gT%2Bpl83WxuUckfz8cP6iE0QCwPwKu6EcUx4pvusIzV679ZISbNSfh41ULeg%2BtLnywI3mtZAyriQuffZ1C5el6bRURz0tVQlvMNY2bKNaShKvDvnnumTy6m1TP1gXKFZe2gEGvE0dBnMILtzeEmoyS5nYpEiUuVwKklTXj%2FuX0FfB%2B6c3bc3Nt8MmmsK7dUBoP89vUaHVnMLO95rwGOqUBKWFxwKJKbfq%2FFLAmLlnqFu7Q6baFkv%2FxUmWSX6pDri33bR3ilDrRMhMMki0Oj1rbRPSo%2Bmgg1dSSPOLYwfyr7dvr5%2FInfZ%2FCEvhfEXPyhNC%2FlnJ28E9HscPD%2Fo4M6mlqUHG7uNtPM0FKQbzh%2BRcrbPePXLPqH%2FCbdMU8%2FMTrzR%2Bfp%2Bv8w3cX1Wed8KysBuIojbkaG9uRvY6bJdyjGNrlKihvxR3H&X-Amz-Signature=ed0e0bff48142e1e5f0dccea0aa32d9efeeca875c46c0d1d72a1aa50027b99ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU56FMC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCNDw9bOnHIEkVY%2FCQBHzYCB5wKN%2BZbJcVC%2FMXlNp1%2FOgIgOZC6%2F2TNBN8VvIop3HJdVwx3hoaPm2lmyOKfB4cigygqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcckm95P9QiSsLDdCrcAwbcxrKMhwnpDQKEYdUehRH%2Fw%2BZ7849v%2Fa0nLe1YEEoudiHa1ycurngKVcFaNd%2F%2F%2FLqgFPFmMdFoFwRmhv%2BEwFSkxN20tUN3vRPAdF0N5TFdSYAHeI2d84LJZvUwL2wGT%2FevbfxPS%2FRW%2BZEZsuKtLi253xoMVyuebCBGtoz%2Fo1csSmZkrDikB5%2F5XdScMjBqSPMr0L6WWHKSLxj74OzlsEmh7ucipD%2FauED7FR3JXTHPADq2TJjAVNv5tBfQaGdoFsEO1QJ%2BE%2Bzw%2Fa1jCVUKcARd0uHTGeEYXYxhUw8Gs4jIBeI6HOYCb%2F3gfnebELQGH7KjYjCWFyOyEbtfZSBMCupz7veppd204vrkwh%2FWf%2FmBxbmp2v64JcwlZDpxRVn3FsSsfL0Cnk2f8aVrs8rPis5yZ%2BUt9d4irkLpuylKCfLh7%2FpFJCizvu6zGI%2BngwLnrjHdLQOTRqb5xE01nwdIk0LJYKWCZRNE91ZJE5Za3DXW%2FYWmbXz3BcKmv7GPR3GTaSdfAuxgecM9JnQqHEvCAJ%2FoCaX0vS8GrXpF7FewDqPaIq5Ajki%2BGGdBk6le3JJwPUM5sM3D0KR9bxuGDDICXveRRjTc4zlqJx6GwRzlYNNCGPrEmRx%2BGTrwSSVsMLO95rwGOqUBGoMGdZrtqbKmK3IJVPgMutHfHJ%2BzMv868eJb2QWlZZi%2B%2FzOj5TLUCI51Qa8%2F202GkS%2B8bQNCYG%2FSHQgCLSc66fClwfEAOx6RLwWqFALBqeTNzrMRGSYtEFmagaAmCF7dCNrvrE1EPG1sapsGRw1RCbG%2B233skPpwsNeGLdfaweT4v14%2BlsmryFPqg3jOftEWfMPbAqNgJSlnM6hPfrkte0NWI49G&X-Amz-Signature=ed969afaa15d6a13110fdcc5100424e6405fb7818d8680824601adc74fcb4d01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOJGMLI%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEA56EMzWlx%2BeM3gDQPIb422D8xhS1Myt%2F0OKq6UWstjAiBAqN4laajmHsdnxhzqVd4wtbyqAIJXKMe2JxJiecPL%2BiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzYTqzg2EWIfSqMJKtwDZBUxuaaf8co3lXkoWsuK1ekFN3unakSoO4etXPiLbUfEkb7v1LJVV9NAg14%2FUH%2Bias%2Bt%2FN38Ft%2FsdnFdiqc6jXJHF2qlxRXS4a4Q7R%2B6xgLAOe3pNEBT1c38wvjgvuGFDIXivG%2Fjh1q7BnSHHmvAnk0fEhQT0hCcph45AOEOQ6QELazgim0E4YmVEIwH6jJLp9uHaiCCSB50JyNZeiOzbWj7MLA7%2FoM6Ecwc6LlrvbVRgoaRtyHylnh%2BeUZcQOqmdct3p4ouwX4uxH0TldWmCcFykxUowJBh6YYJdRpX7o%2FR0ibDSi%2Fj%2Bg7%2FpijhBtc95lOMk4bsXMl2eT00fBALPS06Z%2FxPNxqlRx1Ar7aDiyXQvilVTfA1EnQTx9w2Plw%2Bn1xDY1o5JYKJn6o1ed2ZLDpILcnGAUwfYY2ayX6WWuEW8YGQqTbcbq1KYOLCV6Rz2sSm%2FF7r7iXAoN1GperQuXRdpTGt8PkDYmRn8tZYy1P%2BXes5FK80H%2B%2B7t4Gfa8HPx17mQLLwLd5FohtCq6v8tdgrjZWwnOyDa6fKbNNLfOxcENO%2Fq6sSeLMOWI1terbGgICIuMTn2nwHcLah3uyBCgdCJrJeXBQkvf2sKrU57TIKTgodmfHUhB4O1XwwyrzmvAY6pgEf0VGsX2ClQIUeU4aZUzgvjidvdZ2AsxHs4lO3xhpUIg0Buro%2BXi9Tc24cyuPCjtXzDn2o%2B2psrlXnoI8MWEBAHCRdZM51WsVVNbZo5R7EdsMccR1uergqvXnhKk6A5INkm74SmCWM14RxY3x3XeYlcXtvdz0kovi316kpegzURWbfkPkqg6VbsBs1nLtGpS%2F2KDDCO8MVpQVcyR3ZNXXTAKoUrbyT&X-Amz-Signature=c91c072218799de53bf1f2314b172112e5423aa2fd04644da3135b3ef6dffecf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
