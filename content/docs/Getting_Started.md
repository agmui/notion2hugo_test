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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YI43MO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGUaBAxZm0YuzSLDS5x92348tAQM5ItOCXm%2BmAhQ1LjKAiEAqudQ61Iv%2F3%2BdHI%2FcMzygqEd4v%2FT0o9F0JGTMVPy%2BgwMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDP1K9aKIPErfVlzdXCrcA021yJD98JEzgtx%2B8u1ewK4Ej3xEbP%2F6J5Maq7cRDGDkdylSNg2ajyuJxRvRdrgQldxqCBCRgB%2BsGhgGd5aTJNyahEkdD%2BoeGKq9mwtbvvoN%2FEoxXPAb%2FFOmV8RdXC0xDaFJH%2ByIh2s37BoHk%2FeKwa6G4NI3jPmN85J4E5l5B1qa4RNnGtkn0DF073UEdswAETtRu6NVxbZTxUyxt7R%2F5mteO2r9cyNz1hhaQXyX6LFWZa8nr%2BLk7Pr2TcinmSnZdtXmtH%2FEgyNlZxm4T9n1L2Ss0vqdsw7hN4OSfIlMybEnJgnN8prVyVEz8yYVVf85sHMs%2FXQg9UKoroadhiJ%2BZ7wY2mMYE%2FbBR%2FvrbGnHWwFJ8lvhHLaKol%2BzBUlwwz6fGEaXtfipvnMT1oIOJzPOQwa4BIEe8uVaa7GDHCaCHtv1UmnE6oVPaKyTY5L7OzqMnHvZq2kccv6KdvPLmwFES2bCqM2OGOCm%2BiMiVlQ5bw96qaXSWqSt0pF%2FOsvPnARYchfvwIXZRWRpEGLZ3FQgjdbAcJP%2F6vXkNv1bXdRwrH%2F2Ka5SbU3PDSYpFBhqHAlOpFRshveOFGYWg0jYl497uBOoyAYmHQ0OlZGovL4%2F%2BSfAX%2BNoJecLfnDL05%2BSMMX9k70GOqUBDtb5oD0cApmfZSH%2BgFzwztZANv6vk7Q3o7cpapnc3uclUArIfRF0KxTp6nh5giGyk1940L6HtL0CwBA3S6B8iBfnqSZHapt7Pb4HkAsOUbX1vcS1CQqWAoKAcGH3YTGL6snQVqA36%2BrqoJrkmxFqcIOhgZ2w9vCnXYXQVd8sKWahq6auqGW9LqO4fx2O8lqBvIZcYT%2BS%2Fn6lgMDxaiuss3lIBlyH&X-Amz-Signature=13d719f9c9a171e3e8a9cf43390b1846e5fec2f8ac5ff3be028d47a62cb5956d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YI43MO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGUaBAxZm0YuzSLDS5x92348tAQM5ItOCXm%2BmAhQ1LjKAiEAqudQ61Iv%2F3%2BdHI%2FcMzygqEd4v%2FT0o9F0JGTMVPy%2BgwMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDP1K9aKIPErfVlzdXCrcA021yJD98JEzgtx%2B8u1ewK4Ej3xEbP%2F6J5Maq7cRDGDkdylSNg2ajyuJxRvRdrgQldxqCBCRgB%2BsGhgGd5aTJNyahEkdD%2BoeGKq9mwtbvvoN%2FEoxXPAb%2FFOmV8RdXC0xDaFJH%2ByIh2s37BoHk%2FeKwa6G4NI3jPmN85J4E5l5B1qa4RNnGtkn0DF073UEdswAETtRu6NVxbZTxUyxt7R%2F5mteO2r9cyNz1hhaQXyX6LFWZa8nr%2BLk7Pr2TcinmSnZdtXmtH%2FEgyNlZxm4T9n1L2Ss0vqdsw7hN4OSfIlMybEnJgnN8prVyVEz8yYVVf85sHMs%2FXQg9UKoroadhiJ%2BZ7wY2mMYE%2FbBR%2FvrbGnHWwFJ8lvhHLaKol%2BzBUlwwz6fGEaXtfipvnMT1oIOJzPOQwa4BIEe8uVaa7GDHCaCHtv1UmnE6oVPaKyTY5L7OzqMnHvZq2kccv6KdvPLmwFES2bCqM2OGOCm%2BiMiVlQ5bw96qaXSWqSt0pF%2FOsvPnARYchfvwIXZRWRpEGLZ3FQgjdbAcJP%2F6vXkNv1bXdRwrH%2F2Ka5SbU3PDSYpFBhqHAlOpFRshveOFGYWg0jYl497uBOoyAYmHQ0OlZGovL4%2F%2BSfAX%2BNoJecLfnDL05%2BSMMX9k70GOqUBDtb5oD0cApmfZSH%2BgFzwztZANv6vk7Q3o7cpapnc3uclUArIfRF0KxTp6nh5giGyk1940L6HtL0CwBA3S6B8iBfnqSZHapt7Pb4HkAsOUbX1vcS1CQqWAoKAcGH3YTGL6snQVqA36%2BrqoJrkmxFqcIOhgZ2w9vCnXYXQVd8sKWahq6auqGW9LqO4fx2O8lqBvIZcYT%2BS%2Fn6lgMDxaiuss3lIBlyH&X-Amz-Signature=a3cd5cb183cc55592077de0aec29e36373332699ae2a6377c7a9017fbed8af92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PTX3RZV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIB2ee%2Fu0K8JciQyLipjZogXM3kdo%2FmUZ%2FXxIODU1VDwoAiEArL6W1hilzoppv74sdL1diEV24t5XrcBFCsx0eym4pE4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDF3sF0RNjcxJuZhJtSrcA4EY3TiAFlFC6AnC3wGBYfHbkizojiGmbjwNeug8er8pZWSBoYx%2BKptnwBYiPUZfj8RYxVRjo61%2BQV2nIGOWq8Cw%2FvFYOSAVNXmUkXh7VTAUq1bTtNLviXRGbWQo4lKkLDaOy9f%2FveX2BWcDqW0PsrR%2FBmDVt6bJ6ObYfnwEY7D%2FdYBzVSb0DPvPbb6xhAVl2zKcawbCJbmBcB9%2BAo72GxhrMijuMxdMsKzyjfUaZlldN5yns0BXZzscDbFA5EaRDK1N9vWfk%2FPTkyf4QVQAfWNHI298lSRmTVYi0YQ8IvoyGJBLdolKjTEVtdFsKvrRoVPLD1o61fo70h4tyuJs2crQ%2FFbZO8G%2BkGLEXcI41X6uZQFqnb1yGaCaXKnf7%2BIh4md0Q8ZLUPASjtQkOkX0K%2FylENEWfAg21fXSEW%2FV4XiIUYMkivGRTirSAbwGkH4Hi73pHBylzU8%2FkFIV3%2Bc9A8wUswvN4XCpjmlpEuR2g95vOtZAGF9Kq%2FsiRx0wi0cZpBowDY%2FVpgumA%2BA1VLTqbVJXIqWhVa3mvzFRc1HgztOBjRdnNzoR53gmBrNZskFEGoodWA1HujHhh2wt7GQP3q7SfmCAjonLLdsIfx4WQ6uom%2FfDl8GcSCBvpJ1FMKD9k70GOqUBmvjFQdNQ4youf096IetuAVRLWKajHrWP6i5aPR0SJsoaaoCH3sdQXvXrjJkBbsCdByZEM1WeCcaqMLujbsxjFz6hQ%2BHggy2uEUB0wpD56zxV31y84d2LqJP8YLU1rr29oRvY3kk1%2F8O8h4XORNdy8uuLJs9QLpiXygRyv0%2B7Nd1Pe5TAAHCne5BYn1C%2Bk6f3%2FMv7gp2IpyQN54apNlVo8Y3BCmS1&X-Amz-Signature=057a04ff9e71959547964b45a4036758ab1cd718f5c0e8a96d90890b695ecb7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRZGCVJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDuoNw%2FPuTdF53Lea9Y8k0EClRBkXrY56Rpnit5ZzVa4wIgRAAdI3G%2FlaGeZBIyb%2FZciTZ7Bch4sGE0b0q7DEEGwZEq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDL8GYYYrsofqXCdxTCrcA69MIW0qTIjija9pWIMSDL6LRYZq6X6uOwPsQk7RKVp%2BWhrsc8NlT8VANq19SYyBFoHNW9OCNId9rpnMOFLFwJBSDSOGsGixImh9O3bFA1GyAreMYmWrfu4sgTWtkBNZAxL7rkMML3Ms7YFwVRFb6nDafVRk%2BFHByLzyhO2BA7MjV1oAf%2Bay%2B16pq%2Fq6%2F%2BDWxMOcCpO4ggWjXkrOJ2bfXFtKef10R9leII7Th6CsAXWNUWq0CTsocuI9ULR7wNMmsWKDtFrKta3emzw%2FlCFElMBTGJpHSev4vUlmEQvd8Byy6H25r0VSw7xtUNzep%2BWNNK7UV9Oxe9gIIh1KHnJu2Go4StMic1A355DafXVJdfOGyIGaao003qgvA3Td9Zg5%2BF77QnlolCINtY4sJ1mbsLgYqvYFCjaHII3eeddENDuYOBSsWLpQtYBK1LMk7PIU9ruXmzOQFanMtuN%2FTgbzAPmtC4BMIy%2FyL497GqZE4vf37DilicKfGOYnF6MFKhcvJPJk4glXR0O%2Fk1tIW43DEBZcDYPp1pixufUs4H0rBzkpaX7uyknFnrkXJTzTQHolETCa2hmuTvNo4Icx6dSvQ1%2FO7w3mLIsb5AywgQ%2BoIv2PWBFsDU2ZAIRBNLrsMOqAlL0GOqUBgOyffVA%2Fn5fYew%2F0nBvlXC9llUoMG3tZc2vJUXfMYNZNXwtAmCn1OLEQzheQ%2FOTM%2BsZdhS1B2%2BVH2d9%2BZ%2FgSwAuykWQDWhhW1XF5LhuaUW6wlfv9GiUChvGXCiqGO6hbDZ%2FLzCuv7Na%2FgrbuF0sW17Y%2Fbd2mxlQf92%2FtlPbJwSJBgiCKHHCkfkAQwKWZzALzqRlI%2BPoBBhDiU4Udql1gTTZnvNsC&X-Amz-Signature=9085862ae992017bd8f679d661d24af904a26cc20c1d08ddbb0e648548f78be4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YI43MO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGUaBAxZm0YuzSLDS5x92348tAQM5ItOCXm%2BmAhQ1LjKAiEAqudQ61Iv%2F3%2BdHI%2FcMzygqEd4v%2FT0o9F0JGTMVPy%2BgwMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDP1K9aKIPErfVlzdXCrcA021yJD98JEzgtx%2B8u1ewK4Ej3xEbP%2F6J5Maq7cRDGDkdylSNg2ajyuJxRvRdrgQldxqCBCRgB%2BsGhgGd5aTJNyahEkdD%2BoeGKq9mwtbvvoN%2FEoxXPAb%2FFOmV8RdXC0xDaFJH%2ByIh2s37BoHk%2FeKwa6G4NI3jPmN85J4E5l5B1qa4RNnGtkn0DF073UEdswAETtRu6NVxbZTxUyxt7R%2F5mteO2r9cyNz1hhaQXyX6LFWZa8nr%2BLk7Pr2TcinmSnZdtXmtH%2FEgyNlZxm4T9n1L2Ss0vqdsw7hN4OSfIlMybEnJgnN8prVyVEz8yYVVf85sHMs%2FXQg9UKoroadhiJ%2BZ7wY2mMYE%2FbBR%2FvrbGnHWwFJ8lvhHLaKol%2BzBUlwwz6fGEaXtfipvnMT1oIOJzPOQwa4BIEe8uVaa7GDHCaCHtv1UmnE6oVPaKyTY5L7OzqMnHvZq2kccv6KdvPLmwFES2bCqM2OGOCm%2BiMiVlQ5bw96qaXSWqSt0pF%2FOsvPnARYchfvwIXZRWRpEGLZ3FQgjdbAcJP%2F6vXkNv1bXdRwrH%2F2Ka5SbU3PDSYpFBhqHAlOpFRshveOFGYWg0jYl497uBOoyAYmHQ0OlZGovL4%2F%2BSfAX%2BNoJecLfnDL05%2BSMMX9k70GOqUBDtb5oD0cApmfZSH%2BgFzwztZANv6vk7Q3o7cpapnc3uclUArIfRF0KxTp6nh5giGyk1940L6HtL0CwBA3S6B8iBfnqSZHapt7Pb4HkAsOUbX1vcS1CQqWAoKAcGH3YTGL6snQVqA36%2BrqoJrkmxFqcIOhgZ2w9vCnXYXQVd8sKWahq6auqGW9LqO4fx2O8lqBvIZcYT%2BS%2Fn6lgMDxaiuss3lIBlyH&X-Amz-Signature=54282b7c4943b9a0d34c2a694329b284b10d8b9c6b00797bc31fa3d40ed97648&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
