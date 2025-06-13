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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPRPO2D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBxmeyw3O7RUyy%2F8uinF6gAQX4%2BVGauiMwOS5Fo4%2FYnvAiEAn1mOLJGCHM9QIEFRsGu8p5OAxw6MWXrTscrn0Gtf2Zgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDcsDbpgYJe6UhPbkSrcA9scUGT%2BFa2W%2FDf2qtyP2oToZ98SxyOCGvJeZZiBnPZ3qgAaX5HWOMG%2F5D4TKC%2BnF1x2DqUunNTBIvyfW%2FllOdOxK8bKnbKuBguUUA%2FoTKCY4MlznaVRoHeEJ3eoE%2BwYSFWuXq%2Bvq1CauvN7pJLh1JPm544fYntww%2FTOf1g9OtJ6r8n5o7nKWH2rTiK8CngeoNxtD%2Fy4uJbE7YYgQb78w4G4wkTbFSchN%2FNBarCykiSXDFWr%2FlDmcwJERq9L3dpe5vny3WMGIdU7KjGi50sMaBO3z5roZgZzDHzM7S8pr0GqNuE6UhauxtaUfUSKkRTgsKemsZSFxSD9El5PqsBVSTFtxQJw2ewR7QvqUv0JbzRhZYPLMeuD1jko%2F6bL5ogo4M93hAipJrKrr3fZQ7q7g6SJiw5Dh2f%2BH6eICH7fvgMuAuJ%2BoGNow5XG2QFBmiZFsuvtJ8bLvrkk9L4%2FLEp5egx3Lk7qZioEYNs3uUJn9pmAqDkcRd54CRfcwZzj59SLj5wffJClyYiimp0yazjXiKjNGIqQkMYMfGNr7PTFnhdQK8T0Zmvo9nGGKmayFy65sTr%2BhI4n1S%2FfPPBLtf2Td5upoeV2a9eqsoFgWXm4NHEArNJ5n8KpuIpo9JtPMOiSssIGOqUBUkVCv9R89d6OJMlhzZ3kGYhg2TPEvxLqh%2B%2BfWQCft%2F0tBT6AXkcHajfbSi49zO4CwCjuoOML%2Ba7cVsVFGYoXKohkk2xOeSIzgWNEFwp3zKTblU6xum6zvpAMw64aF3vNB2NCQnzs%2B4g42MDzmXzFN6%2BNBt0ZEjCGNmOmxFqBAxWO9q8lkbLBXdmWyLOUqZYWPbFDwKq2riXBVxXQ7B1GRZ67VXN6&X-Amz-Signature=1045aea50b65d4cd2b95f339fa9fe2d36ee9f701fd92ad1ab754afa2cd442371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPRPO2D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBxmeyw3O7RUyy%2F8uinF6gAQX4%2BVGauiMwOS5Fo4%2FYnvAiEAn1mOLJGCHM9QIEFRsGu8p5OAxw6MWXrTscrn0Gtf2Zgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDcsDbpgYJe6UhPbkSrcA9scUGT%2BFa2W%2FDf2qtyP2oToZ98SxyOCGvJeZZiBnPZ3qgAaX5HWOMG%2F5D4TKC%2BnF1x2DqUunNTBIvyfW%2FllOdOxK8bKnbKuBguUUA%2FoTKCY4MlznaVRoHeEJ3eoE%2BwYSFWuXq%2Bvq1CauvN7pJLh1JPm544fYntww%2FTOf1g9OtJ6r8n5o7nKWH2rTiK8CngeoNxtD%2Fy4uJbE7YYgQb78w4G4wkTbFSchN%2FNBarCykiSXDFWr%2FlDmcwJERq9L3dpe5vny3WMGIdU7KjGi50sMaBO3z5roZgZzDHzM7S8pr0GqNuE6UhauxtaUfUSKkRTgsKemsZSFxSD9El5PqsBVSTFtxQJw2ewR7QvqUv0JbzRhZYPLMeuD1jko%2F6bL5ogo4M93hAipJrKrr3fZQ7q7g6SJiw5Dh2f%2BH6eICH7fvgMuAuJ%2BoGNow5XG2QFBmiZFsuvtJ8bLvrkk9L4%2FLEp5egx3Lk7qZioEYNs3uUJn9pmAqDkcRd54CRfcwZzj59SLj5wffJClyYiimp0yazjXiKjNGIqQkMYMfGNr7PTFnhdQK8T0Zmvo9nGGKmayFy65sTr%2BhI4n1S%2FfPPBLtf2Td5upoeV2a9eqsoFgWXm4NHEArNJ5n8KpuIpo9JtPMOiSssIGOqUBUkVCv9R89d6OJMlhzZ3kGYhg2TPEvxLqh%2B%2BfWQCft%2F0tBT6AXkcHajfbSi49zO4CwCjuoOML%2Ba7cVsVFGYoXKohkk2xOeSIzgWNEFwp3zKTblU6xum6zvpAMw64aF3vNB2NCQnzs%2B4g42MDzmXzFN6%2BNBt0ZEjCGNmOmxFqBAxWO9q8lkbLBXdmWyLOUqZYWPbFDwKq2riXBVxXQ7B1GRZ67VXN6&X-Amz-Signature=80cd8b6017499bf7daf8428422a02b79d724e75faac84d8f8da6652b92477f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPRPO2D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBxmeyw3O7RUyy%2F8uinF6gAQX4%2BVGauiMwOS5Fo4%2FYnvAiEAn1mOLJGCHM9QIEFRsGu8p5OAxw6MWXrTscrn0Gtf2Zgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDcsDbpgYJe6UhPbkSrcA9scUGT%2BFa2W%2FDf2qtyP2oToZ98SxyOCGvJeZZiBnPZ3qgAaX5HWOMG%2F5D4TKC%2BnF1x2DqUunNTBIvyfW%2FllOdOxK8bKnbKuBguUUA%2FoTKCY4MlznaVRoHeEJ3eoE%2BwYSFWuXq%2Bvq1CauvN7pJLh1JPm544fYntww%2FTOf1g9OtJ6r8n5o7nKWH2rTiK8CngeoNxtD%2Fy4uJbE7YYgQb78w4G4wkTbFSchN%2FNBarCykiSXDFWr%2FlDmcwJERq9L3dpe5vny3WMGIdU7KjGi50sMaBO3z5roZgZzDHzM7S8pr0GqNuE6UhauxtaUfUSKkRTgsKemsZSFxSD9El5PqsBVSTFtxQJw2ewR7QvqUv0JbzRhZYPLMeuD1jko%2F6bL5ogo4M93hAipJrKrr3fZQ7q7g6SJiw5Dh2f%2BH6eICH7fvgMuAuJ%2BoGNow5XG2QFBmiZFsuvtJ8bLvrkk9L4%2FLEp5egx3Lk7qZioEYNs3uUJn9pmAqDkcRd54CRfcwZzj59SLj5wffJClyYiimp0yazjXiKjNGIqQkMYMfGNr7PTFnhdQK8T0Zmvo9nGGKmayFy65sTr%2BhI4n1S%2FfPPBLtf2Td5upoeV2a9eqsoFgWXm4NHEArNJ5n8KpuIpo9JtPMOiSssIGOqUBUkVCv9R89d6OJMlhzZ3kGYhg2TPEvxLqh%2B%2BfWQCft%2F0tBT6AXkcHajfbSi49zO4CwCjuoOML%2Ba7cVsVFGYoXKohkk2xOeSIzgWNEFwp3zKTblU6xum6zvpAMw64aF3vNB2NCQnzs%2B4g42MDzmXzFN6%2BNBt0ZEjCGNmOmxFqBAxWO9q8lkbLBXdmWyLOUqZYWPbFDwKq2riXBVxXQ7B1GRZ67VXN6&X-Amz-Signature=606581ce29aeab063384354f2f93a0ce29f1a7371267bfacbd4c87f34fe0ce38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWVLU2S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCKFEF9KxQENs9NO1%2FnOyaom79O7xB7gvrcCBSow%2F8PHgIhAJ3OrGemeOzKASK0BIDQvlbQPveAyjIo0X7SdbRi9GFtKv8DCB4QABoMNjM3NDIzMTgzODA1IgyZHaEL97yxX4c4fGwq3AOo6l4yvjsDgjrc1f0Dw9nXkYdCMB8u0nr%2FWIdj%2Bib%2BxrVM6qTUtobICgBnK2b%2FiqN1nGQFCAiQ62C3iPj%2BblqsrBbnUgxh7gqOPSOn%2BOnFQaX3vo2xglQk%2BLSg9YavpTm29HhL7tvyLxacaTluwC7W6fqjOsbE3guHClemy3oup5Q3iwGCs2lyrxowTNiKjdl95NAIRtBCGHijWJ1phkCOSqExjVzOUzBoOoRtNAvY7d0u6gbM402s48qzS6HJhaUOgiaC7kZ2v8n4SIzIje4Km2gpwFn%2BkUfuTJNplZOwrtMa8P1oO%2FUFaE7DPwiPRw22ifz3AjHlApgsGsNFqU7xSk44mcgtq1m5mY4auYcY%2F%2BlREZ%2FjJeB%2F3Bt5aBccaksDktxR0YukPWiaaoJHBGFqua6LvDzZUWRtqVgGLxoknpBnkxsbGDNy08zhMdm%2BEGZUdaSnAdQTmoZZTiBU0VYU5B9pW%2FS%2BAaN7J8JTErgtvgv12VdHCJE2ejBa%2FShbN5tGIuWNOnYkXvs%2B56i3iUW7ESG%2FNt2vVVKppiiU4AjQO1Kz2wZowqM9I3ndaASw1hivhpn8HPZVV9jHv0Fkro80DG%2B0d6NfvYcfSY24Vg0lHcO3NK5CLVbUf7wEczDwkrLCBjqkAWtAEm3hFJuBH6xK6%2FXUVGNWuTflyys5d%2BhDu%2BSAGidWO0yzNu9ORLr1hIkPzEHE1JZqoDnwhx8Vtb3IhPeGJiPtvaQmKpMgKd2OZB1thVTRBSBYkn7YUpDHxudZ4iLNG1dz3BRh0rwKZH5XmZI7YyX0eWX%2Ffbw%2FQmDU2C3nlIcI0CBsn6%2F7NSNxl%2BKw%2F9t0Dspel0FcwII1Ak7W8xsDQEIaYpXV&X-Amz-Signature=780b92c974f6419c34a43924611117d95ad801e167178e511d2e91f3d394135d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVWBQCC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGlx6O8EifyFAD2ovGPQhYnVkuF1I9wmLCRQjreF2YimAiBj2BNKjpQ1BbtFlwcHjh6r4Pun9Ypgh1VhJvpA%2BxDueSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMUF2y7oF8ASR4PIGtKtwDiva3qp%2FgWuPpZ9gj%2BILEFNAkY%2F9vuLsmNKLSHn9HrsVby%2FUA8DCUo3z3Navx8Q5Y9ih7eVXS1fWqXraDN2MEKA3VnI3eMg85rVM3v06VDXzuVng%2Bd823JvUNgZ07aAcusr55c%2FmjozkUvd2DDt36YG128mb7m0ndPopufTLMCkjyHkR9LmOMp%2BSU5os3GI2UvP1t281c4Y831H51n%2FarMA6kpyG1X3lkYQyiNQHAWFJDj3u0QOqSifvXMf4zm%2BBk6pixMQbTmgA%2Fe2Uvwgc%2B5zlvbMRcCfFmBjPMVwmVVH6q3Et1lMUnTqart8QVSIkQS3pbuISYT3of5XEvHNXqXxiMzMMfbzDbhgHl%2Bka%2BPsn%2BSbt%2FaKoGfDuZYSUIwFF0K6fwe8287RsvjNRUAx3Izfl7%2BdywOa17XERv78ybppsybTf0NvzKISQCVZqcKMokk0Ly%2F5BIBAEDS6s7PuQ6iKoQTnL%2BULLPsQrXnow0zJlpl3CNywGCH580lysMEwFS9ugrMS6rlmydb1cIJq2EIeSXP2a8NGY5vwe0TnIAO8L6N9wKCyRFz2EnLuszhYPSQQKPgvegmpNPwzyqmYYTsmlFHo0trRPr%2FHPkJdj08w68jFAAifHfY8W0faEwt5KywgY6pgFSKa%2FkZvJw%2F1QyjARdUv0yJTgB9QeKwb7mWtxgY3MtSr5fInObmNlywOs74DC2m6rX2b%2F5JElHn9YPLKNQhXoxMFVLvYP0Ss%2B%2BJnfv4e0DBiSrIPRSgRQZssePWyg%2FG0aus%2FB6iQ66gCbgk%2FFtFuR86vcFDe50XkMEB6jfBIo33xJW1WxhReTG5yaxSJ7BcHZv1IGfnu0VJ2dGb5oujJiv7NUqptLM&X-Amz-Signature=bc5d5ede7ccc53cf5cf139c121634ceb5adec9fee4300e03e3959f4f33e785f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPRPO2D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBxmeyw3O7RUyy%2F8uinF6gAQX4%2BVGauiMwOS5Fo4%2FYnvAiEAn1mOLJGCHM9QIEFRsGu8p5OAxw6MWXrTscrn0Gtf2Zgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDcsDbpgYJe6UhPbkSrcA9scUGT%2BFa2W%2FDf2qtyP2oToZ98SxyOCGvJeZZiBnPZ3qgAaX5HWOMG%2F5D4TKC%2BnF1x2DqUunNTBIvyfW%2FllOdOxK8bKnbKuBguUUA%2FoTKCY4MlznaVRoHeEJ3eoE%2BwYSFWuXq%2Bvq1CauvN7pJLh1JPm544fYntww%2FTOf1g9OtJ6r8n5o7nKWH2rTiK8CngeoNxtD%2Fy4uJbE7YYgQb78w4G4wkTbFSchN%2FNBarCykiSXDFWr%2FlDmcwJERq9L3dpe5vny3WMGIdU7KjGi50sMaBO3z5roZgZzDHzM7S8pr0GqNuE6UhauxtaUfUSKkRTgsKemsZSFxSD9El5PqsBVSTFtxQJw2ewR7QvqUv0JbzRhZYPLMeuD1jko%2F6bL5ogo4M93hAipJrKrr3fZQ7q7g6SJiw5Dh2f%2BH6eICH7fvgMuAuJ%2BoGNow5XG2QFBmiZFsuvtJ8bLvrkk9L4%2FLEp5egx3Lk7qZioEYNs3uUJn9pmAqDkcRd54CRfcwZzj59SLj5wffJClyYiimp0yazjXiKjNGIqQkMYMfGNr7PTFnhdQK8T0Zmvo9nGGKmayFy65sTr%2BhI4n1S%2FfPPBLtf2Td5upoeV2a9eqsoFgWXm4NHEArNJ5n8KpuIpo9JtPMOiSssIGOqUBUkVCv9R89d6OJMlhzZ3kGYhg2TPEvxLqh%2B%2BfWQCft%2F0tBT6AXkcHajfbSi49zO4CwCjuoOML%2Ba7cVsVFGYoXKohkk2xOeSIzgWNEFwp3zKTblU6xum6zvpAMw64aF3vNB2NCQnzs%2B4g42MDzmXzFN6%2BNBt0ZEjCGNmOmxFqBAxWO9q8lkbLBXdmWyLOUqZYWPbFDwKq2riXBVxXQ7B1GRZ67VXN6&X-Amz-Signature=a682ee33808d812e6273f6ada80fbf3119bc6e9e24bb5f1fe51250b2ce5c1d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
