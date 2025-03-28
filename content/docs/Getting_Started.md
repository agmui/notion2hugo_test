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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7RDMQL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNXO0oih%2B4Mdv%2FlsKUDR2fO6ZXtfvencaihPBPzveW1AiBCsCxyuQ7sKYa2zk9G9AET8bgiQe7MkjHIy2dKr2b4fir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM1u7befhPvqVkL6ODKtwDGB5rWQjwuSLSfCBhEbex4eUKYN5I%2Be7DgnzajhF3KWZB6vIDPdtUOk%2Bf3JpFr75NtM1ltvSFwo53SikobpfRqQTt6J77Sjun3n%2BAvO7KIaXNLJZpsYOOTn%2B9i8OE%2BET2rnsOjFqau4kudrYyRBggFsm%2FpwHlgW%2BYV0RE5IoQRUskK%2F7u9UYjekhtYcz60ioATV%2B0F31Z4orS9G7Jhh2TLydwrBH%2BoDtAw2QQYjyEbxsy34m4nU%2FLFCJSaRJdwphHL7PrApe%2BmPVtYh5ZZMaXUrk24Pr6Ry%2B8zEJMxHfBORsasthcUYt2I%2FLo9bN%2B2QhTA1AiSB6AF16oizfijvljGU3498CEC46imPZHkLASOc4Qb5jPzCWucAMqGhbkuEl2WgNy8DwT6BOi1afMSpxgfpr6yzfxYsmmTB%2BOEMZwCbgoWI0NJccD9RDfo98OLTky235WDzkdY1%2FVRS%2BwEhkdPAmAQKlrmdjUaeAnoR%2FvkSrzQtr9NTBREeqOvJz7f3fHdPliE1CB4zWU7lytZ3tKmG6tyR%2FrtISOhI%2FL%2BZHaFkkrZ%2FExWhCKv6gWJKqoW%2BXdqpMoUsc3xdH2rCg8g997OxAQ85TeJVaQwz8xbOgrl3vIVMRTmI38j0yMu0Qw5bCavwY6pgGQ1Sl6CciR%2BlxjC7O9RkGBZtvMPUQNHmxUMIz4ij1J5az1H5XRZN9H3VeE40n7iIMSXuOdk%2FwlNJqoo7xPdp5nfCOit%2B77YJfWQkqrk3zAqDgnVDSonoPyTh4y7gfeWAzlgW6IFf58niBLtZX%2FLsgaNwTHBSWu8spIGaxVKqu8fOt9WxTSKPeZfZ%2FKKOtecrjQpdAJGtDI%2FhoDPEhIyZgk1FdTOzw2&X-Amz-Signature=4cd411f4ed661d19d0775882229901504bc020ed7190b00cf5b6861ff12d661c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7RDMQL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNXO0oih%2B4Mdv%2FlsKUDR2fO6ZXtfvencaihPBPzveW1AiBCsCxyuQ7sKYa2zk9G9AET8bgiQe7MkjHIy2dKr2b4fir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM1u7befhPvqVkL6ODKtwDGB5rWQjwuSLSfCBhEbex4eUKYN5I%2Be7DgnzajhF3KWZB6vIDPdtUOk%2Bf3JpFr75NtM1ltvSFwo53SikobpfRqQTt6J77Sjun3n%2BAvO7KIaXNLJZpsYOOTn%2B9i8OE%2BET2rnsOjFqau4kudrYyRBggFsm%2FpwHlgW%2BYV0RE5IoQRUskK%2F7u9UYjekhtYcz60ioATV%2B0F31Z4orS9G7Jhh2TLydwrBH%2BoDtAw2QQYjyEbxsy34m4nU%2FLFCJSaRJdwphHL7PrApe%2BmPVtYh5ZZMaXUrk24Pr6Ry%2B8zEJMxHfBORsasthcUYt2I%2FLo9bN%2B2QhTA1AiSB6AF16oizfijvljGU3498CEC46imPZHkLASOc4Qb5jPzCWucAMqGhbkuEl2WgNy8DwT6BOi1afMSpxgfpr6yzfxYsmmTB%2BOEMZwCbgoWI0NJccD9RDfo98OLTky235WDzkdY1%2FVRS%2BwEhkdPAmAQKlrmdjUaeAnoR%2FvkSrzQtr9NTBREeqOvJz7f3fHdPliE1CB4zWU7lytZ3tKmG6tyR%2FrtISOhI%2FL%2BZHaFkkrZ%2FExWhCKv6gWJKqoW%2BXdqpMoUsc3xdH2rCg8g997OxAQ85TeJVaQwz8xbOgrl3vIVMRTmI38j0yMu0Qw5bCavwY6pgGQ1Sl6CciR%2BlxjC7O9RkGBZtvMPUQNHmxUMIz4ij1J5az1H5XRZN9H3VeE40n7iIMSXuOdk%2FwlNJqoo7xPdp5nfCOit%2B77YJfWQkqrk3zAqDgnVDSonoPyTh4y7gfeWAzlgW6IFf58niBLtZX%2FLsgaNwTHBSWu8spIGaxVKqu8fOt9WxTSKPeZfZ%2FKKOtecrjQpdAJGtDI%2FhoDPEhIyZgk1FdTOzw2&X-Amz-Signature=46ee474cbeeeb70af243ad74b6525d293a260b758c0ff24a1c1f1940c30a1013&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2ZDKDS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3e6tSPsWpyxGfJUmKkypdfi8JW0Jg7eMrLCnVASE3dQIhAKiQ6B4iskV8M42M0TKmS0xj938K4e0PIhif8Olurp1UKv8DCF4QABoMNjM3NDIzMTgzODA1IgwoIC0MO1VY1CFdn5Eq3APdluWbKfbBgqA%2FV179mfQHHI4gCVUYXVMZm1F9FU4vinJ%2F6aSJIDAMgWGUO2S5e986U1c7eGXJmxjEUzA7KnSo9hEIwb66dPdZwzAmhGlG03ZMwiOr43fSsXGFq4JNZcmQ%2BLfhH3E%2FgTMleSgfT7HN9iNY9EUl9LbCvSb2ITxTw34UXDeUalP90bvs0Cae4Qa1999nXdPwzbpglicSGtwjqi1seqo2tsv8su7WEJr622yV%2BDeOLQFFfdvPJro8df4Fi462DFbBnkznGHq0AO6gS0LBl9cb%2Bh1LSp6HWtSmUMIV2pE%2Fe9v0xB2D38PiKjyPIj%2Fu5WqLmuF6OKwGl4RK%2B5cJBtDVm8U0WLSvWBYoRP2FPzB75RlHj2M09tJLawSOA94lFLLsK6QxPmW%2F7%2BopSLxl5PH8GiZ0l1R2u%2FC9K6JxvIMWqoAg0tzFcT8xKyFVnGi552Wq0yVOX4L753wqLcef5rYbbUjL4HfyUCGPQO7USnUxifUrU6mRSSVYrnxNmGH%2B6pjNATmj1nQZeamRQSIuuIqSbe6qaIdbRKP0p7bYWdaLY0YxaRd8HLR5gGnFpsjQ64oKsnHKiNVcOKvZh%2BzDMBgGUv6mI%2Fcd4LCb2UqMMmUCiXivGWRHgDDrsJq%2FBjqkAdQio3BYbVA6FLOcvkv5JJbaGBtsGyqVKjoqdj%2F9Pi1DFBvvnCX62D8NpyBc3dMrojw1UoArg08JS9GboV1ITVqCU6wDsWr66M7PQTE4a72yAW2SWGqc1liBq6taDDmxC0SBPM95eYALTd1RXlCx99QDYqtD%2BQQ%2BUlJRTdOIC2%2Bjx7ocNnWnhXm3mkWfO0RGrNF0k1X8D9G1gQWholGbPc0I4TsD&X-Amz-Signature=d986d0fa9917e652ba4beb84c670736ba9eddde77d2042b15c5896d704515485&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPS3CJ6I%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfe%2FdLMxf8HgpOD%2B5Gph1xSPS6QUsKhk4PPVt9BLbpSAiAhTGYJ07tqvO3dU7h49InE970%2BE974PkuV8G2FYXHjDir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMSCZ8VI4YmNzYjt%2B%2FKtwDd3sebJFj%2FKoHFZfcsQDT3uz6ZI4SP88I8bYy0txsy6d5iNGXjdESDq8tAD94NqVAJViPGItXVFMEuc2CQqnHdiDpFQDHX5kJGr1YF1vxnFbuVzYcy2LH2El847j48hN7c8rMvdyl%2BHTmsY4qgUphxrRpgM2FPe867%2F2q8wjee%2BKFIWtMq6hymTPWGjpeW%2BaiAYpy5Kmc8JpQD51umQRqJNaow0kui87kYVoq3M18qM9VkYes6iNiYFfveFOE1gPXXTZQ1djNLYzDmikq4jc%2FmN1HYFppcrjrMalvnRxf87CVLIUnHltsH2An5BgY8JRFfvrGcjsrB3DACMuOkYbY18TBuPG24tjC1%2Bl1ZHYr%2BfiJ2sJABXMhb2vyhI%2BzLDR%2F6lktVZJNZGp5mAXnaCFVKXk62Z9XS4CvaIIjAYTLIPO5D5hGzK3Sh22sPuP3OfiH2t9DgpQfp57K%2FUtndETy%2FKKl4o9Gk9Uia%2FHOA1Sc7pFyIcBGOXglKfmDtQQB2mK%2FssT%2B9rPyE7j6LMhfzWRmbbbpD4q8EMiNwgwyV%2BnO%2FDSAJJkJa5lyy5Tptr1Kq1gcZGzs3iMOf4ob5kQhkO6F90zAM%2BHdx%2Bn1dCnUwdou5PSC0Daiw7Ue%2Be9YCAowlLGavwY6pgE9pBj%2FpO%2BLxaAZTEhqdcI%2Fi47dUK1WbY3qzXxbSuVRNJs8Unn8yNUhh9FzCWA4WYdy5%2BXoOmbBya65TWS5chZNjgTqNGhmgo%2BqZokSV9V6YnchxPmOCrSDHRi%2Bm4euJDtcX9f1xQRL67KrDiEwk9mqaoZKORknsty5pB5WvmAewKKlmq7HQNfO3UqtDQBz82%2FPexWrZN9fDCHIYiJBNlAlTyydfhp7&X-Amz-Signature=29835c212e808cce8f600618b4a501a7ad6e2200c77dcd2d21e3c0dc4546a0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7RDMQL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNXO0oih%2B4Mdv%2FlsKUDR2fO6ZXtfvencaihPBPzveW1AiBCsCxyuQ7sKYa2zk9G9AET8bgiQe7MkjHIy2dKr2b4fir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM1u7befhPvqVkL6ODKtwDGB5rWQjwuSLSfCBhEbex4eUKYN5I%2Be7DgnzajhF3KWZB6vIDPdtUOk%2Bf3JpFr75NtM1ltvSFwo53SikobpfRqQTt6J77Sjun3n%2BAvO7KIaXNLJZpsYOOTn%2B9i8OE%2BET2rnsOjFqau4kudrYyRBggFsm%2FpwHlgW%2BYV0RE5IoQRUskK%2F7u9UYjekhtYcz60ioATV%2B0F31Z4orS9G7Jhh2TLydwrBH%2BoDtAw2QQYjyEbxsy34m4nU%2FLFCJSaRJdwphHL7PrApe%2BmPVtYh5ZZMaXUrk24Pr6Ry%2B8zEJMxHfBORsasthcUYt2I%2FLo9bN%2B2QhTA1AiSB6AF16oizfijvljGU3498CEC46imPZHkLASOc4Qb5jPzCWucAMqGhbkuEl2WgNy8DwT6BOi1afMSpxgfpr6yzfxYsmmTB%2BOEMZwCbgoWI0NJccD9RDfo98OLTky235WDzkdY1%2FVRS%2BwEhkdPAmAQKlrmdjUaeAnoR%2FvkSrzQtr9NTBREeqOvJz7f3fHdPliE1CB4zWU7lytZ3tKmG6tyR%2FrtISOhI%2FL%2BZHaFkkrZ%2FExWhCKv6gWJKqoW%2BXdqpMoUsc3xdH2rCg8g997OxAQ85TeJVaQwz8xbOgrl3vIVMRTmI38j0yMu0Qw5bCavwY6pgGQ1Sl6CciR%2BlxjC7O9RkGBZtvMPUQNHmxUMIz4ij1J5az1H5XRZN9H3VeE40n7iIMSXuOdk%2FwlNJqoo7xPdp5nfCOit%2B77YJfWQkqrk3zAqDgnVDSonoPyTh4y7gfeWAzlgW6IFf58niBLtZX%2FLsgaNwTHBSWu8spIGaxVKqu8fOt9WxTSKPeZfZ%2FKKOtecrjQpdAJGtDI%2FhoDPEhIyZgk1FdTOzw2&X-Amz-Signature=29352b6b9141b9ed8b60f1c1a2cb53b2cdfbb314d8bed0e246fd202dac155de2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
