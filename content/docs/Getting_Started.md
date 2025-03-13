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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S63KQJO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNPol%2BJgt33Va1FpiZ4n9%2FUvqxNNesy0YBLTNWnWwMaAiAn6NqQh2lN3zyvM%2BeA%2FPVRIFZ%2FHvH3CYZjRCqIXAH%2FTiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FbybpaW1eaHNgZjnKtwD9790aZaBeklpsaOk3EPWq4ZXaGTPUsPhUX%2BUpe6nRHBTdcS7EdtQTHhDIh6pKUpGrw7%2FiUC4TmZKcy23JgJdYjnqNgXFVBr1Tr63vyghDnbsGZkqE2wbsfH%2B9WD9i894aDS0NUQipTYN0wuH%2BVZJ68eLGLQEZCwCDtL2f9ufX5DyECECZBGSN7rtIDpzcudYE4WInyGEnNGlRPZAqPfLUfwdoi5Ft2DpM7sIDm6ZvGkkqOqd7gSFsctDY044pumqtSSjkrNAY9BJo7JKERDbWen%2FWLW6vErpBbEo11O7LKXAiROo4dnnMukhMAfyQ375D7AmsDX%2Bc1AChWNEuIiZep3BaG4OxNB0tKw5fsu88gYqsoOAERgMr5oeL5veQYjO8HVhMYzQe%2BLO5YTsBWOOP5nDR4pefe%2Femi9jP5k3RcA9wFPzxUA5L39mXxErR71lDvise%2F7nt%2FdjKy52Dp8qBREJ3Q9PCNfFX%2FC1mf4BvgYXRWaRS1WRNBTQz8tmAdn1SPAzeOI5SokNNEu9caBA0uEDlEi%2Fs0r1nCOGjYRBJZi%2FzPKAVWNXYFKM8qRY4aEsTLn5m6KPpAJ%2Bs4XO4tcgV6D0d6VeRhT07gTRJXvdKns73Csbl8j1inrB5%2BMwzqPKvgY6pgHoz%2BDREsNNj1YV8L0fab98uInaORUfMuUzaMj4guGczaiHeVbVSXm%2F19%2BqaC%2F3GJd%2Fqfy74bOh%2BTfmwpRO8TNgl%2BREtf3SpZNdh7GIqCOQKqpwZ%2BDfwdB2MrPhTuE0ro3brNa6bfSbdxJZNDvnAVIZ3m0yRAvEQyIXLL%2FjlsshWRWjvSrxYzIG9Kuyb%2BaYjestSlmx7fYFsvcPs2zEDVARVr52BMN9&X-Amz-Signature=3ed34a7fa587126d6b1daab9c1a419a326c931a4180b8750fae77c5e5ac3dc44&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S63KQJO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNPol%2BJgt33Va1FpiZ4n9%2FUvqxNNesy0YBLTNWnWwMaAiAn6NqQh2lN3zyvM%2BeA%2FPVRIFZ%2FHvH3CYZjRCqIXAH%2FTiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FbybpaW1eaHNgZjnKtwD9790aZaBeklpsaOk3EPWq4ZXaGTPUsPhUX%2BUpe6nRHBTdcS7EdtQTHhDIh6pKUpGrw7%2FiUC4TmZKcy23JgJdYjnqNgXFVBr1Tr63vyghDnbsGZkqE2wbsfH%2B9WD9i894aDS0NUQipTYN0wuH%2BVZJ68eLGLQEZCwCDtL2f9ufX5DyECECZBGSN7rtIDpzcudYE4WInyGEnNGlRPZAqPfLUfwdoi5Ft2DpM7sIDm6ZvGkkqOqd7gSFsctDY044pumqtSSjkrNAY9BJo7JKERDbWen%2FWLW6vErpBbEo11O7LKXAiROo4dnnMukhMAfyQ375D7AmsDX%2Bc1AChWNEuIiZep3BaG4OxNB0tKw5fsu88gYqsoOAERgMr5oeL5veQYjO8HVhMYzQe%2BLO5YTsBWOOP5nDR4pefe%2Femi9jP5k3RcA9wFPzxUA5L39mXxErR71lDvise%2F7nt%2FdjKy52Dp8qBREJ3Q9PCNfFX%2FC1mf4BvgYXRWaRS1WRNBTQz8tmAdn1SPAzeOI5SokNNEu9caBA0uEDlEi%2Fs0r1nCOGjYRBJZi%2FzPKAVWNXYFKM8qRY4aEsTLn5m6KPpAJ%2Bs4XO4tcgV6D0d6VeRhT07gTRJXvdKns73Csbl8j1inrB5%2BMwzqPKvgY6pgHoz%2BDREsNNj1YV8L0fab98uInaORUfMuUzaMj4guGczaiHeVbVSXm%2F19%2BqaC%2F3GJd%2Fqfy74bOh%2BTfmwpRO8TNgl%2BREtf3SpZNdh7GIqCOQKqpwZ%2BDfwdB2MrPhTuE0ro3brNa6bfSbdxJZNDvnAVIZ3m0yRAvEQyIXLL%2FjlsshWRWjvSrxYzIG9Kuyb%2BaYjestSlmx7fYFsvcPs2zEDVARVr52BMN9&X-Amz-Signature=19ef0aca3e392910d14e65a9d6921254aba9ffa09fe4d8959ce34f74799691cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYRZ52M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuruVm%2BILMRhnemzhDumT7Tu%2Fs3jGH3G7KAUA%2BK8L51wIhAOSYZg1HKwdb64nauy9CfKpwqqOhKFbNykil1en9XwgrKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy%2BZ4vDPDmlCakMvwq3AM4Wy5QsqhiXIrumrkqRi8X7afZgbzCyoS01mI6mVUBxg0DQkbRzl4DBtHbz7Y9RMkEFFtpKTRdBt7Rf0AUAl9yc6K8W%2BwF5xiUv%2BC4YegtVPl5l%2BwZgLSpcKVMIgYmxEAT1Lb%2BvMsef0zC6HWAS4kUL4EyeognJx6HG%2FgTog2iHRzr0s4WZ0L%2Bij%2B4pZMGyRYvL0X5m12b6T7ZnWngMPaYcQxU19p3h6ChSpay251jfII%2BcLFmprFYZXNK02lzYqwEWYq0hu4My%2B96XkOgBkhk252PR%2BaCc5D6UX%2Ft91%2FWkOet6B51TaU%2BTVyvOyL%2FcREFXP3rcyNzQtcQRTAG0zK%2BbAren5jwWL4zw8gjrgXsdjAL0YHAu9pyGq7IRf0en%2B9%2By0G%2FZR8wNHV7%2FdSEWrqFvYulEI2y0L5S%2FpQp8czbFvH%2Fh5tH13LN4OO5y4SdHlAVo3akr9HRy9avFCG2XM2hy%2BR1992aw5%2Bs%2Be%2FhQy1EgsrzqLLgPYZmYM31cIT8fApUJ8pn64qewststebIY7xOQsAKxXVbc2d8tiZOJgFfer5hPgZ2BDqZKpKaG2lBLdRf3PGJGOvEPSiX58Ha6BMPDJHp1rrQ5oQ%2BdeAZMWzQRglweyGZOaojpsWQlTDIo8q%2BBjqkAdCgNPYmxQlq5kbYZ6abDqRyFglje4Egjn578Kt%2FQbWL3N2c9B2UAWnDi24cjeHTykJpsXdr9BaZPnVqzWPvij1oxruY0SqL5Kzg5xcZ%2FE2Sjlc504acDkc%2FKHkG59jqA%2FpfdsIo%2FbclI2H0e3kKTcGyJKAg6SB5O15pFdcsxDBdIqD3UifhrAiuTfwCo1qKpngUJbW9WntZ2mNf5NGoBRFAtuuP&X-Amz-Signature=d4caa41c748c66b0a62f5522b2316ddd81e1e0f9b01310c5d0b2fb3764eb9d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW6RAIF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpjs%2BCh7PFBOOB6zO7vkdqnm2%2B9Io0lIXAFSru%2FoZgSAiApeqcJB%2BvoTgJOUNz7SdMz%2FQ%2FxNIntw7Zt%2BRDuS6%2Bh8iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlUamvyslp1ZjvFoKKtwDqRQIs9ZgtV8aYB2Klf1E7NUR0wiKuFHTWKJlzze1is8VgHzS5QIa%2BzI7MzPAk5ZBbeCraDdXNJPVlY0fRdWdeCpzjrZ7VY2fM8MIRybM3gOeqDfiqCXaiGZ6ARz0OVsQ%2BEn%2BuIm4S6ikAhGdetO3A5QCvEsXQBJHK6Lntz%2FY7Lfz%2F6opjKArCEYLLF3tdlxCgjamZa4EQPc7dJw2jKSq9ae6mKdiIQHVC5krjXI9MEJogWnx3%2Ba0G9F5YHKkrRyROMzJQ%2BDEfhOejwNH%2FS%2B7rQC303f6CN9KSY5bSzebD5mKuMiZCsuc5vEBi0Yqs93cYRQ7gyCzWgHJaiW5rx6rqh4T6MpdZoEhPxIUb4fxUuxa2AllkgekIO9XYC5cP%2Fm3O5jfrG5dNoGMll2BsKmGkr3smMy%2Fag86gOD%2Ff3z9GZgOGgTiwhAPEL%2BlZofSEtMglXxhzoa7AoRMG%2BpqjJAvDrFK3HoLnKWD%2BoXWfgviaKvQh5Uo9f5cI3HrmSbFWa8glJGCeTHVD6d03qII8Xvquw%2FhkLSOBKIDjtUHMlUAn0lfR4tuI%2FgYRfNF64f%2BHMaASN%2FRAQMWiOofcJT%2F1qTwMBORr8AsC9ICyMx6aYzgQF8AIHMwpxT7s%2FC3ZI4wxaPKvgY6pgGfE9Tm5Qd2JZNhoNoEId%2FaednquZM86%2FpnAQIACQXb4buuqQm4f3cxzRhR%2BEHqkq9pl3i145etBw2WB1rgIvLH923OTvJ5h4ZU%2FFV%2Fr9iq84%2FkVxExJT1QPu%2BlM22uGmjGZzoOsHMMbaSL4f7nz6gx9YZCpYxPBUf3KVhHTjHjLuN47REA%2FhoBJ6tGpGSuM1StWzBcfyqY6RT5a%2Bakm0HlqO4ZFJtD&X-Amz-Signature=5ddef77074ea3e05d4701fbb60eb5eee7dce59f6589d5157347dad7247714570&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S63KQJO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNPol%2BJgt33Va1FpiZ4n9%2FUvqxNNesy0YBLTNWnWwMaAiAn6NqQh2lN3zyvM%2BeA%2FPVRIFZ%2FHvH3CYZjRCqIXAH%2FTiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FbybpaW1eaHNgZjnKtwD9790aZaBeklpsaOk3EPWq4ZXaGTPUsPhUX%2BUpe6nRHBTdcS7EdtQTHhDIh6pKUpGrw7%2FiUC4TmZKcy23JgJdYjnqNgXFVBr1Tr63vyghDnbsGZkqE2wbsfH%2B9WD9i894aDS0NUQipTYN0wuH%2BVZJ68eLGLQEZCwCDtL2f9ufX5DyECECZBGSN7rtIDpzcudYE4WInyGEnNGlRPZAqPfLUfwdoi5Ft2DpM7sIDm6ZvGkkqOqd7gSFsctDY044pumqtSSjkrNAY9BJo7JKERDbWen%2FWLW6vErpBbEo11O7LKXAiROo4dnnMukhMAfyQ375D7AmsDX%2Bc1AChWNEuIiZep3BaG4OxNB0tKw5fsu88gYqsoOAERgMr5oeL5veQYjO8HVhMYzQe%2BLO5YTsBWOOP5nDR4pefe%2Femi9jP5k3RcA9wFPzxUA5L39mXxErR71lDvise%2F7nt%2FdjKy52Dp8qBREJ3Q9PCNfFX%2FC1mf4BvgYXRWaRS1WRNBTQz8tmAdn1SPAzeOI5SokNNEu9caBA0uEDlEi%2Fs0r1nCOGjYRBJZi%2FzPKAVWNXYFKM8qRY4aEsTLn5m6KPpAJ%2Bs4XO4tcgV6D0d6VeRhT07gTRJXvdKns73Csbl8j1inrB5%2BMwzqPKvgY6pgHoz%2BDREsNNj1YV8L0fab98uInaORUfMuUzaMj4guGczaiHeVbVSXm%2F19%2BqaC%2F3GJd%2Fqfy74bOh%2BTfmwpRO8TNgl%2BREtf3SpZNdh7GIqCOQKqpwZ%2BDfwdB2MrPhTuE0ro3brNa6bfSbdxJZNDvnAVIZ3m0yRAvEQyIXLL%2FjlsshWRWjvSrxYzIG9Kuyb%2BaYjestSlmx7fYFsvcPs2zEDVARVr52BMN9&X-Amz-Signature=fe7ac27338dd1d77d0dbd0721e522de29a1da249d01239321a9dca84db398c03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
