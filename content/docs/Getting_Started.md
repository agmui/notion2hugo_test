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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Q6VEDY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BrC2HyHx%2B0PI14GD9WH2%2FJIVC2zU8UsNKKwjfTYPnpQIhAJ5RQILosWCedyEMeB5X2tAOrUAB%2BYluyUf42eC1E0dXKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgNRqvxNXbynexDk4q3AON0Ue0R0B76Y2IVm7bErgubpSDGivlGs0q8ZoosBP4peXocmKVFOgKI2q2yHdVTUNgvyfehcUYREPcKtl9ls3Mp1B5PspHY7TIw14f0P6G5WpjxvPyF%2BwWakbBND3W48dtL0uNDpLsM6cKA0VeuskD4eL5CYyIQ247Mj2X9d%2BE9x6Xl9dNC93eAcmOOcSCYFet4wyUI2dYYjN%2B6nUInnGUAJG4%2Fzo7Z4nJM3tn4251hDE7EyOFdBFkEzdl1FhJkGWwFMYMGkQJQ%2BTXAejwdSKyN6M2IJDFvIPnMauPdvod7EZC1aKGOb84IkPjEKWlzygEUQeIEKJzdUjWBcfseFq89nabZHx6wt%2FIm5Wlr4biaZ6oEybmm%2BnXMGMhmRqTXqND%2BvGH70Fdeh4PMlkTCkm8dRNPXuzo6MUwy4qZdPZ9%2BpsUCu3l6CW6mPLCG4XkN3Gu2MBp9T%2F5r7%2BRpvlNZxYADNVzFINsT4k7AHUz4tpA07gnAZ28cxf74wDme0dGRmoKm3UfOJfkcRxYRXRAwS3qM4R4%2Fti3jGgDr642rcgH3EfdDVNrm%2BUYlFCWe1C8TNt5pj2sl7%2BRFyQ1aLLCUelK%2FSBnveNHa1%2BB1rxJEWRKJDvmbkBgJvy1Rp7QcTC7kui9BjqkAXeMZagBRNA7Wswm2LzWil5vNROsSAgZrczdfXovcg42VwHTNgtKpL9PNacnnmop5RZGDzGQZSC74%2BRZHkcv5DX%2B%2FRr0NYa8MNCMN%2Bu4F4qEtnOJcj9lle8akwpfi6aGiN13P4lgRZjEXxi%2B66lhKz77NGoaSYdOZVT4GVGar1u5twCMFF5zxRpA5YN9taSlj%2FNmUsdCd77fFulyM5F1xQrkzLhr&X-Amz-Signature=463d882ea1d9dd9a07a0a44a967ffc74740ca823366fc77e1cafe9b1be988e37&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Q6VEDY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BrC2HyHx%2B0PI14GD9WH2%2FJIVC2zU8UsNKKwjfTYPnpQIhAJ5RQILosWCedyEMeB5X2tAOrUAB%2BYluyUf42eC1E0dXKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgNRqvxNXbynexDk4q3AON0Ue0R0B76Y2IVm7bErgubpSDGivlGs0q8ZoosBP4peXocmKVFOgKI2q2yHdVTUNgvyfehcUYREPcKtl9ls3Mp1B5PspHY7TIw14f0P6G5WpjxvPyF%2BwWakbBND3W48dtL0uNDpLsM6cKA0VeuskD4eL5CYyIQ247Mj2X9d%2BE9x6Xl9dNC93eAcmOOcSCYFet4wyUI2dYYjN%2B6nUInnGUAJG4%2Fzo7Z4nJM3tn4251hDE7EyOFdBFkEzdl1FhJkGWwFMYMGkQJQ%2BTXAejwdSKyN6M2IJDFvIPnMauPdvod7EZC1aKGOb84IkPjEKWlzygEUQeIEKJzdUjWBcfseFq89nabZHx6wt%2FIm5Wlr4biaZ6oEybmm%2BnXMGMhmRqTXqND%2BvGH70Fdeh4PMlkTCkm8dRNPXuzo6MUwy4qZdPZ9%2BpsUCu3l6CW6mPLCG4XkN3Gu2MBp9T%2F5r7%2BRpvlNZxYADNVzFINsT4k7AHUz4tpA07gnAZ28cxf74wDme0dGRmoKm3UfOJfkcRxYRXRAwS3qM4R4%2Fti3jGgDr642rcgH3EfdDVNrm%2BUYlFCWe1C8TNt5pj2sl7%2BRFyQ1aLLCUelK%2FSBnveNHa1%2BB1rxJEWRKJDvmbkBgJvy1Rp7QcTC7kui9BjqkAXeMZagBRNA7Wswm2LzWil5vNROsSAgZrczdfXovcg42VwHTNgtKpL9PNacnnmop5RZGDzGQZSC74%2BRZHkcv5DX%2B%2FRr0NYa8MNCMN%2Bu4F4qEtnOJcj9lle8akwpfi6aGiN13P4lgRZjEXxi%2B66lhKz77NGoaSYdOZVT4GVGar1u5twCMFF5zxRpA5YN9taSlj%2FNmUsdCd77fFulyM5F1xQrkzLhr&X-Amz-Signature=3bd6161ac1051a58dd718c639a11cd9149b6502e29c2d219da3ceadc02820e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LGSQLBK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJFMHXUeTWmbpDwleeN65%2B4cyaEl2i%2FQqU7jPl0kg%2FPwIgKQD8xTzEBZpvdtqT6FLDLSBvi10YFfRPVR8zf7xxym0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWGSoWRgrXyvaF4JircAzLejNIJAjXnn%2Bv6QCSlhBJGo0q6g9zZzerrbbJx%2B8o8VKM3O8T8WpBLAZbWXNIH5qFFjcA01vXM8hYSxaB%2BgSVsjUK3dy68%2BX%2FO6Pp2ipECVlEJOEbhFXNm6qRqDFfoKhYkQtIYcPfHmrcWlXMVqg1gE%2FPLoUx3lI%2BD5fnqxUKEpAv4wMy2v6QK74x06PuP7575vpDU%2FTmPTzeoj5D0hNiWhoYPKuTFeZo1Czr7Zm%2BIyDTxL1ORboN9KwOIE6E0fnaHYu9S8IiJ7i%2Biz%2Br88rfH0qPFW8i8vWeaoqC84qNKNhsXobOn5ztyEuZiVw6HXpYNp9Mvt7ZN4%2FTNJHYJBGpfOaOBfpOselHKTVAMp12PognaQ%2BMQl8HJMAerdnpJvlK%2Fzid81x2GiAEBJJpBfqloDe91XB5w1JPqbKaecW8WLfqrwIpfsDHy3KN2vARrbcGXonl3hHouwFZqlKRCx6%2Bg4KRsr1lAFvSLUJXTruzs5abHfs%2F%2BMsvazto03v%2Fi%2B8oIEeh5QV0yzVw17GzENKycf73LZpw2uYKnmjN295gB1yEU3qAfZcqLW%2BC2USluMwvxlTwKIwcSOlRNUe8%2B%2BKrP0iVRJziobOm2lgtsY35%2FnPJhvtkxMUFMDeWoMIb%2B570GOqUBIrVG6Bl7KIgdK6uCpB36W8LTsoqUCoTR8fHZKl7%2Brf9ONaT3eisOsQEqFGmrKgIGTKXlsx0HtQ%2FhXtdNy6V974p4Y3dLIzR%2Fz5n51JIMV67HXoEqADj5KX5S8oXrGMNJY5pz7%2FEIZrYTDf9u6FjsUJAslBcp7mHUXEY1hiLC2tEJK9THF0zNizGeNCp4ZtGkxX5JGj%2BwJeVlHAzvPDOBev9vGKI1&X-Amz-Signature=d8cd058f2c2fb93513a330093d81e56a3930d85353d8890b4c1e80c972365a08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BVICI7Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Dipy5t2QBqBLy2MN4F14i1hhoO6NKDE1ohUrm0Z1swIgFT1JrOiD1vJsNuFNe6mwj1jG1Hbly7jWt5L4HtnXTRsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2BrpsINAlqtw1ndyrcA0c%2BcdiHYkNQou%2FF9S1H4ds5zBBGxwmyYIk8cMTkKQILbwu7qPjDBVuywDOa3EFJGEX2vVZFcf8tK5bywSDR4c78nn6z69ARiwYs7%2FmQZzyCHl5g9QEilCpLV8KxLvBSdCPzYEHOLIdjI0iV7ooOiU2qZd%2F1uSTnW5tj%2Bngzse51hWGtAQAQc41DnNiSGGLEy4rzrgFjhmLE1jLoKL1eAd%2B%2BXqURZ0bCsodydFEinXYo6JMXJCGkmo3EUR%2FWdS14oJjrifSm2L946VDr3mEMMSI9K3jrTSjm1dvOIw1emjPpe6lkhIVhuNNm9KBDilLupWjlxs2iPPjCy1DbQ2nNvFNssjPLkf1uv4sULwSjAeHspAdrg4ozidV0K2ds0k4KzTVg84Q6wWVStagSRdXZgVdoljvHUc4Gc63MgI%2BcC2k7PNZ1GovdLBt4FVCfxBbqWOjpdceNFU2WRgyWxPsp3kTOBSZFjZ0LyAoPn9Ef%2FmizaoDSmL3oXNNMdi1R%2BmJfLVjtOM6JtIIGh9N7x9V0UPsKrukicay26X3m3YdLqLsc%2FSVfnDo2hRyzLTeJseb%2FHN1lVR5mp4s1ZSp3bRShSxR2GDzS4LTx0Mz1opWAN9hSexr4KbaTPOQ7SxENMPWG6L0GOqUBtCGGDsPsgAAmfD6Si9X%2BTsxYSKKH104DG52joTqCPM39VQKwDoxdG70VJwxVEr7GH2xSwYzOEAHNkiMFVkfD%2FJJ9Re4%2FTVIdxhFtrHnzvSnianKKRhKYsrT4c91bYv0Xa8Ma2SBYt7ipki3YaeBvSsNGMCH7EPl6i0p%2B0eGyotxjU7QG0CFixGs%2FRAv373IpkmduBMV468JzABSbj1ztR9G0TL5I&X-Amz-Signature=d06f59a9d6984a15b49a382f2e68eb13302fd460550d2302f7bba5fe31077974&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Q6VEDY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BrC2HyHx%2B0PI14GD9WH2%2FJIVC2zU8UsNKKwjfTYPnpQIhAJ5RQILosWCedyEMeB5X2tAOrUAB%2BYluyUf42eC1E0dXKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgNRqvxNXbynexDk4q3AON0Ue0R0B76Y2IVm7bErgubpSDGivlGs0q8ZoosBP4peXocmKVFOgKI2q2yHdVTUNgvyfehcUYREPcKtl9ls3Mp1B5PspHY7TIw14f0P6G5WpjxvPyF%2BwWakbBND3W48dtL0uNDpLsM6cKA0VeuskD4eL5CYyIQ247Mj2X9d%2BE9x6Xl9dNC93eAcmOOcSCYFet4wyUI2dYYjN%2B6nUInnGUAJG4%2Fzo7Z4nJM3tn4251hDE7EyOFdBFkEzdl1FhJkGWwFMYMGkQJQ%2BTXAejwdSKyN6M2IJDFvIPnMauPdvod7EZC1aKGOb84IkPjEKWlzygEUQeIEKJzdUjWBcfseFq89nabZHx6wt%2FIm5Wlr4biaZ6oEybmm%2BnXMGMhmRqTXqND%2BvGH70Fdeh4PMlkTCkm8dRNPXuzo6MUwy4qZdPZ9%2BpsUCu3l6CW6mPLCG4XkN3Gu2MBp9T%2F5r7%2BRpvlNZxYADNVzFINsT4k7AHUz4tpA07gnAZ28cxf74wDme0dGRmoKm3UfOJfkcRxYRXRAwS3qM4R4%2Fti3jGgDr642rcgH3EfdDVNrm%2BUYlFCWe1C8TNt5pj2sl7%2BRFyQ1aLLCUelK%2FSBnveNHa1%2BB1rxJEWRKJDvmbkBgJvy1Rp7QcTC7kui9BjqkAXeMZagBRNA7Wswm2LzWil5vNROsSAgZrczdfXovcg42VwHTNgtKpL9PNacnnmop5RZGDzGQZSC74%2BRZHkcv5DX%2B%2FRr0NYa8MNCMN%2Bu4F4qEtnOJcj9lle8akwpfi6aGiN13P4lgRZjEXxi%2B66lhKz77NGoaSYdOZVT4GVGar1u5twCMFF5zxRpA5YN9taSlj%2FNmUsdCd77fFulyM5F1xQrkzLhr&X-Amz-Signature=342a32013d72dd077c13c9179e82c6fe2b71a2a51d6b2146a17de90109151cde&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
