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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE77SBBO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCWCt%2FzNrXm%2BdPIUqYNv77QSGxdBfh18b5MoB%2B18ZbApQIgLu1VaLsBZz8bd0Kj5MwUfpZIvflzdr41ibs8ZOnyNq8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKP41DCmnWeaSS12USrcA2jAQfM9MLDLTizIIw3qIR7QfGp7xeaSK8CWhSAzXH5mDCORdVdhGFCSt5oGl8IZAM6hliDgNrIEfoi3VVzpyiIHm7JEZgetLp9SsUuQJZs6muazJuHQzG610oafsqtUQ1MJLK6H90junsMQVASijeiWnHxnDSsLGp%2FuyFCwvPtKvWa2iIn4UT%2BDfK6Gtqb4FOj8D%2BHqArpDNaIMiYVouLNmCnF8hTMzHPdl73kVsndslpcSXzvaMoFtMtbH%2BBiB1jVszJweCLRrvdzEy9%2F3nfhHrC0MFaBRTikL6m%2ByfMi4K%2FY4tBnOqVE57R0CbVQYL03XwnjbNY95X7qMa0NINnRZAb7Z%2BH7W1rj4AyyNYCp7t62%2FlHHe7kiW%2BDbNxOZy2EkHgc2DcEXgXIyd%2BdduJolw%2FpoJSOTGs8tLaQoSzpqGSROsog4bVq7%2F1K5wwN%2BJBMNyQCMxnzJmhxPmIzosApG1tsfrGWaBR5sAm9b1xaPz6jXbnNfIhKAkUVah3BLDSNBxIwUxgtuSFHdb6j6srx7XpXWaocn8VTrVd52faXuwmNoC7HyCrfIrXPVgpO5GkipesOb9Akip5kbJ8vtLCvFzmBYq0eH1KFIlT0lMWnqQYZzwhr%2B7fMzfXaEZMJqL1r8GOqUBPML6972N4yUmVuBuixWf9P0WQk48FcdYLgLNGfUZ4SGZn9b%2BJ1%2FLvWzueYFJOODVAc6zlzsGGJ7ettv%2Bm%2FCbnmy2uImxiFXWexRY%2FAjeEkNETlgU2zuaMG2U8rD43oLCcfBBwVDXT1je3Kk%2FB7wgjpZC3fOkRs18tbeBpSkf0WXIzGW1trdYlKlPO6eNaLJSx%2B7G9MPjxJK4FFcaUf01e3X4P80o&X-Amz-Signature=9a225fb10f0a3cde093118e4392a9ed35a7bc98bd653a4f7da883f27be06ac8e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE77SBBO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCWCt%2FzNrXm%2BdPIUqYNv77QSGxdBfh18b5MoB%2B18ZbApQIgLu1VaLsBZz8bd0Kj5MwUfpZIvflzdr41ibs8ZOnyNq8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKP41DCmnWeaSS12USrcA2jAQfM9MLDLTizIIw3qIR7QfGp7xeaSK8CWhSAzXH5mDCORdVdhGFCSt5oGl8IZAM6hliDgNrIEfoi3VVzpyiIHm7JEZgetLp9SsUuQJZs6muazJuHQzG610oafsqtUQ1MJLK6H90junsMQVASijeiWnHxnDSsLGp%2FuyFCwvPtKvWa2iIn4UT%2BDfK6Gtqb4FOj8D%2BHqArpDNaIMiYVouLNmCnF8hTMzHPdl73kVsndslpcSXzvaMoFtMtbH%2BBiB1jVszJweCLRrvdzEy9%2F3nfhHrC0MFaBRTikL6m%2ByfMi4K%2FY4tBnOqVE57R0CbVQYL03XwnjbNY95X7qMa0NINnRZAb7Z%2BH7W1rj4AyyNYCp7t62%2FlHHe7kiW%2BDbNxOZy2EkHgc2DcEXgXIyd%2BdduJolw%2FpoJSOTGs8tLaQoSzpqGSROsog4bVq7%2F1K5wwN%2BJBMNyQCMxnzJmhxPmIzosApG1tsfrGWaBR5sAm9b1xaPz6jXbnNfIhKAkUVah3BLDSNBxIwUxgtuSFHdb6j6srx7XpXWaocn8VTrVd52faXuwmNoC7HyCrfIrXPVgpO5GkipesOb9Akip5kbJ8vtLCvFzmBYq0eH1KFIlT0lMWnqQYZzwhr%2B7fMzfXaEZMJqL1r8GOqUBPML6972N4yUmVuBuixWf9P0WQk48FcdYLgLNGfUZ4SGZn9b%2BJ1%2FLvWzueYFJOODVAc6zlzsGGJ7ettv%2Bm%2FCbnmy2uImxiFXWexRY%2FAjeEkNETlgU2zuaMG2U8rD43oLCcfBBwVDXT1je3Kk%2FB7wgjpZC3fOkRs18tbeBpSkf0WXIzGW1trdYlKlPO6eNaLJSx%2B7G9MPjxJK4FFcaUf01e3X4P80o&X-Amz-Signature=8be57359e721f6db1d225b5ce99df43b069bea702a525c1d5c06bbb1a21bc466&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJREVSAT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFcYBw1cm%2B%2FgzhqSP4j2EwpumGr4VfJoUhkF4rm2KyvyAiBA41OE8y%2BQdhkmfRSg9%2FzNvpPQi%2FhffOSXrxdWGN%2FS7ir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMn2hamjB1setwzFiCKtwD%2BCrOU34hJ7wtUcppFKFDTb1%2FYHmYZgoXKLfM%2FvJ%2FFbiyvjGU2EYYohd84UnY5k8AjHS60Zqbzi4Eu%2ByJNHJ994IpgIGgm3oaaYI8IrZHQCb%2BRwoY0nwAsJlhQTU6VFcEiiMUo0xLymLK5wUVwuVEzu1p1s4Zel%2FeBedgj7JPNhuAlwENAlJIEo3njljiRPS3WldhtoA%2B3M2F%2FTMKNs7g9uJMKoQh5%2FSAQHrHJe0s9Jef3jEM2fwUF2kAKih40UP5ytBvkcqpmH6O5YE7Kul6cNgyA%2B6%2FzqI2mWUR5to0Fg0H3jQpsCOdzPHpvI5ReHWxd7Oha6zqvLnG4Y6QI%2FEUn4fA0wWQ6AD8EVD9X5q4OigwXOwcDVyYArW8bsc9hAGh5QJ6158u9FovuVwHsUwMa%2FeaqtL7jRwv%2FYpXDmB3rsihh4Ya%2FnNHIz8SAKVh3VW0NH1l4BhF77HAyldcBbCanfb3bVCx6N%2FIAfOfvKzKP4EQ53MJV37H8jdXG5YQ7F5WGry%2BpeTsOYYoh7s%2B3kcsANj8Tnm%2BZqcUIex0o1jtUymPteZzPub9fAot3Vd0xfGgjHucvIIqVMGMcbWrNPcJBnIkMRKwUSezHatR41rbVYScAiL8ULYx7beCoyowuovWvwY6pgHPJ9mmDfP6j6z8SBoh62Fnd2yZutpTVOth3kaWg6h%2FZB4XRicAB11fIE5ZZJPai7xDsWwvp0lhATo2wk0gRiPxdZW4LKcFfhPcI5XOE44lWau9vbtY05%2FW0mx3djRnuuWvVKmxlPXDJcmwyhtZyV9I%2BSCwVYaCcZFiAkI7oaijjI5oQQibrZqMN36k75obFCEEB6K9ozwjvgHKzj09pZWBHf048BDv&X-Amz-Signature=7e2119874e74c0f7684a69677751211b04e5a9437f7944281ca7091561672d67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESOC76F%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAtKq2QcL2%2BP1kJU%2FBZrCzAcuYCsOrbxDvNZW6XrAQ9VAiBM7hky99xep9ghUSDxLn7HQEXvz6a28d8TFW9k%2FqB4Yyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM8FLEQRKsbf3rpxmmKtwDmj%2Fi1tvnkDVoLDJ2uV1yOCzSmFQ5bPEVOEFk%2F38ioeJgkY01NoXaALrKhGBKN%2BlXxu6gpQRQ%2BzJgfaJJK5w4NlbXEZRM94D3NfyCP1fl58Zv2WX3KRcSNPG4%2BLYklVFLoORI5SdiCXgbfvAd2JT6472vjpN2ygJTJj3mLqlVcNkQ6bGIBFLb3ewxxYEMFCuG1HF6Du7LYw%2Frf1Ygk31zVYWBFiS%2FYl73ELQYJMzAkIB1Hcp8unVGZfoxfxS2BgPaBaxpgbV8arFdYXyXDko%2BDSiPv11aYAgDINr6tSRYEora%2B0dMhr0eRTY%2FQIMsXbwBCwTHCSBVBT2cwa%2BojG0iWwkqQp15uPqbTAoaeSA70lwOSLPfO6ET%2FBUpEs%2F7QQUiGycaJVnpCLrH86X1Nq464wZmSagh8rJjkgaRzCUGiswQhgUC9rndKntIWflhJQ%2FlPu2sP%2BUMz5kTHHzjGDag4%2B75Qo2qTJCDgkBaYuPXDINjhkVvmE5jum1nKgznkA%2B2%2BU03KNqMBJ7S%2BKXW3GVp1IGuVxEtzUtP0LXnTraFmzvv9wdCSqR4iLIfpCQONDazTeQgHIrdHXbp3Vgvb%2FGDJ9HjJtM4zGdOpR%2B5Ko%2F9prMx%2Fqao0grsYDPlmvMwvIvWvwY6pgHs3ryp2IlyKYraJrm9pyxF8gJ09QtJfqSAgWSbW0Dz9%2BPuwJxRUojNw9fqDdaZrZClL%2Fja9lGTt9bNR4d3uPurj4%2BlkyZp86tvoHmWX4DmbuwpEiUF7G%2FuxyD4%2FBJK46ES59sdUoren8fw8broUKmue1YhRCqcaooTX0GIxMqfSBMvSBZLRl4i%2F3QKt%2Bn152mLZ218zT2PAXWNYP9bboZ3BO0R%2FCVU&X-Amz-Signature=165d687124178b831f6b1882f7569462ca8959cfc89b371ab58046ab0ff7eb99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE77SBBO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCWCt%2FzNrXm%2BdPIUqYNv77QSGxdBfh18b5MoB%2B18ZbApQIgLu1VaLsBZz8bd0Kj5MwUfpZIvflzdr41ibs8ZOnyNq8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKP41DCmnWeaSS12USrcA2jAQfM9MLDLTizIIw3qIR7QfGp7xeaSK8CWhSAzXH5mDCORdVdhGFCSt5oGl8IZAM6hliDgNrIEfoi3VVzpyiIHm7JEZgetLp9SsUuQJZs6muazJuHQzG610oafsqtUQ1MJLK6H90junsMQVASijeiWnHxnDSsLGp%2FuyFCwvPtKvWa2iIn4UT%2BDfK6Gtqb4FOj8D%2BHqArpDNaIMiYVouLNmCnF8hTMzHPdl73kVsndslpcSXzvaMoFtMtbH%2BBiB1jVszJweCLRrvdzEy9%2F3nfhHrC0MFaBRTikL6m%2ByfMi4K%2FY4tBnOqVE57R0CbVQYL03XwnjbNY95X7qMa0NINnRZAb7Z%2BH7W1rj4AyyNYCp7t62%2FlHHe7kiW%2BDbNxOZy2EkHgc2DcEXgXIyd%2BdduJolw%2FpoJSOTGs8tLaQoSzpqGSROsog4bVq7%2F1K5wwN%2BJBMNyQCMxnzJmhxPmIzosApG1tsfrGWaBR5sAm9b1xaPz6jXbnNfIhKAkUVah3BLDSNBxIwUxgtuSFHdb6j6srx7XpXWaocn8VTrVd52faXuwmNoC7HyCrfIrXPVgpO5GkipesOb9Akip5kbJ8vtLCvFzmBYq0eH1KFIlT0lMWnqQYZzwhr%2B7fMzfXaEZMJqL1r8GOqUBPML6972N4yUmVuBuixWf9P0WQk48FcdYLgLNGfUZ4SGZn9b%2BJ1%2FLvWzueYFJOODVAc6zlzsGGJ7ettv%2Bm%2FCbnmy2uImxiFXWexRY%2FAjeEkNETlgU2zuaMG2U8rD43oLCcfBBwVDXT1je3Kk%2FB7wgjpZC3fOkRs18tbeBpSkf0WXIzGW1trdYlKlPO6eNaLJSx%2B7G9MPjxJK4FFcaUf01e3X4P80o&X-Amz-Signature=1670d88dafe5882aca2af335b56817948eb6b03703a9a67e6299b22eb638dcc7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
