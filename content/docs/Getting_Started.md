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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2WIFXT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDiklRECRj58se9vXNkRCZam0VfGeQH9Y6g0vnL1zLN%2BAIhAOlGI5couCyh%2FksSDhLhwaW2DUqCWGeXBGeglOwCNPvwKv8DCDQQABoMNjM3NDIzMTgzODA1Igw%2FyJtJeJMjl1CID%2Foq3APe5Cn789of76i25IWIWlzBOb8mX4b3Gx%2BwcN7zd35Yib5NDcEklsDkg3p42Wn4l1SN2SG2jgiGnMGT7XgwJFg3jneMf7gZV7yyFHwZTsLEwFjwzWIZavut%2FAyqyVbx1iQw%2BNQ6T5gfglG6vQqJTlBYopftKmj%2BkAQ8ugXtjeMPR6mJiHVvFKSzYBhpqsowIECQyuRAD2B5%2BgCIMq3KWIMVG9lsgHTI0R9neVci08HS25sRyXc8tayI7Rift1KVrd0JeGw%2Bxfbs7X20tvX2QZ2i4v1Ka8iv8BaWuQaF25u3c7aKSx%2FY2m%2B%2FrjN2wKcfdELsWUtYTHTrTggvbmUXIPgo6zsRMFjbJrblNdNpqvpJIqDSxgt53IQ0LVlSOx%2ByZwAo759fCFle2vBKY3fJ8xaj%2F2ew5eJXTIx6tviZY9yE8XChvusUh0MD1XYNQEm2myi5Zo6gFmCw5rfonM3FaIMbyyxNB10kEv12qKwGK9VQoTm8EXj6wCVLUeaDkUy3zDuGUo9xZyMMB%2F9oOsBztSxN2VVUPSyx%2BLTbzClwBJo5rQ7HFVwNqekamh5fuhdjhZX9Sig8PFFtf4Jdw3m6%2F%2B2mOnb%2FACKBXW8z96bsOq8HYAX4Cituwvf%2FYrsTxDCu%2FJjBBjqkASvFy05iZ%2BOR1Dib9TExrYHHIs7TvwMuDSgcqQ5ARP4F3zn0hZJ7MWT%2F%2F90aY%2B%2BnEJrI6np9gfa2vwE46JBwuSAi%2F4TDlm1bWokwRlOng10zYupZf0uMLZckAIrN83aUuGNZ7ofDp49QirSKyB3gxetXglNDBYjG8m17o6deTXK%2Fo6M9bGvMqANghsbywBndNOn%2FAGadiVilSpsOwWbQbQ4CELKC&X-Amz-Signature=72c3e294f04876d85201ff5fd39063da97ff7916615d0bb9ac5d5c8852e8629b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2WIFXT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDiklRECRj58se9vXNkRCZam0VfGeQH9Y6g0vnL1zLN%2BAIhAOlGI5couCyh%2FksSDhLhwaW2DUqCWGeXBGeglOwCNPvwKv8DCDQQABoMNjM3NDIzMTgzODA1Igw%2FyJtJeJMjl1CID%2Foq3APe5Cn789of76i25IWIWlzBOb8mX4b3Gx%2BwcN7zd35Yib5NDcEklsDkg3p42Wn4l1SN2SG2jgiGnMGT7XgwJFg3jneMf7gZV7yyFHwZTsLEwFjwzWIZavut%2FAyqyVbx1iQw%2BNQ6T5gfglG6vQqJTlBYopftKmj%2BkAQ8ugXtjeMPR6mJiHVvFKSzYBhpqsowIECQyuRAD2B5%2BgCIMq3KWIMVG9lsgHTI0R9neVci08HS25sRyXc8tayI7Rift1KVrd0JeGw%2Bxfbs7X20tvX2QZ2i4v1Ka8iv8BaWuQaF25u3c7aKSx%2FY2m%2B%2FrjN2wKcfdELsWUtYTHTrTggvbmUXIPgo6zsRMFjbJrblNdNpqvpJIqDSxgt53IQ0LVlSOx%2ByZwAo759fCFle2vBKY3fJ8xaj%2F2ew5eJXTIx6tviZY9yE8XChvusUh0MD1XYNQEm2myi5Zo6gFmCw5rfonM3FaIMbyyxNB10kEv12qKwGK9VQoTm8EXj6wCVLUeaDkUy3zDuGUo9xZyMMB%2F9oOsBztSxN2VVUPSyx%2BLTbzClwBJo5rQ7HFVwNqekamh5fuhdjhZX9Sig8PFFtf4Jdw3m6%2F%2B2mOnb%2FACKBXW8z96bsOq8HYAX4Cituwvf%2FYrsTxDCu%2FJjBBjqkASvFy05iZ%2BOR1Dib9TExrYHHIs7TvwMuDSgcqQ5ARP4F3zn0hZJ7MWT%2F%2F90aY%2B%2BnEJrI6np9gfa2vwE46JBwuSAi%2F4TDlm1bWokwRlOng10zYupZf0uMLZckAIrN83aUuGNZ7ofDp49QirSKyB3gxetXglNDBYjG8m17o6deTXK%2Fo6M9bGvMqANghsbywBndNOn%2FAGadiVilSpsOwWbQbQ4CELKC&X-Amz-Signature=ae26621d80d7a651713981d2715b4cd5c8b3e0146cef238ebd5a42c7f80a2b28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2WIFXT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDiklRECRj58se9vXNkRCZam0VfGeQH9Y6g0vnL1zLN%2BAIhAOlGI5couCyh%2FksSDhLhwaW2DUqCWGeXBGeglOwCNPvwKv8DCDQQABoMNjM3NDIzMTgzODA1Igw%2FyJtJeJMjl1CID%2Foq3APe5Cn789of76i25IWIWlzBOb8mX4b3Gx%2BwcN7zd35Yib5NDcEklsDkg3p42Wn4l1SN2SG2jgiGnMGT7XgwJFg3jneMf7gZV7yyFHwZTsLEwFjwzWIZavut%2FAyqyVbx1iQw%2BNQ6T5gfglG6vQqJTlBYopftKmj%2BkAQ8ugXtjeMPR6mJiHVvFKSzYBhpqsowIECQyuRAD2B5%2BgCIMq3KWIMVG9lsgHTI0R9neVci08HS25sRyXc8tayI7Rift1KVrd0JeGw%2Bxfbs7X20tvX2QZ2i4v1Ka8iv8BaWuQaF25u3c7aKSx%2FY2m%2B%2FrjN2wKcfdELsWUtYTHTrTggvbmUXIPgo6zsRMFjbJrblNdNpqvpJIqDSxgt53IQ0LVlSOx%2ByZwAo759fCFle2vBKY3fJ8xaj%2F2ew5eJXTIx6tviZY9yE8XChvusUh0MD1XYNQEm2myi5Zo6gFmCw5rfonM3FaIMbyyxNB10kEv12qKwGK9VQoTm8EXj6wCVLUeaDkUy3zDuGUo9xZyMMB%2F9oOsBztSxN2VVUPSyx%2BLTbzClwBJo5rQ7HFVwNqekamh5fuhdjhZX9Sig8PFFtf4Jdw3m6%2F%2B2mOnb%2FACKBXW8z96bsOq8HYAX4Cituwvf%2FYrsTxDCu%2FJjBBjqkASvFy05iZ%2BOR1Dib9TExrYHHIs7TvwMuDSgcqQ5ARP4F3zn0hZJ7MWT%2F%2F90aY%2B%2BnEJrI6np9gfa2vwE46JBwuSAi%2F4TDlm1bWokwRlOng10zYupZf0uMLZckAIrN83aUuGNZ7ofDp49QirSKyB3gxetXglNDBYjG8m17o6deTXK%2Fo6M9bGvMqANghsbywBndNOn%2FAGadiVilSpsOwWbQbQ4CELKC&X-Amz-Signature=bfea70f23ea941a6c55068c510b50ebf0d66bc68b60c22f2bf1db59364fe1979&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZT6XUO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDUKvR3bdVRkLKTODGhvzAGkum1xZf0sOL4HNXjK1IiGAiBxYXcXXzI1s0Q2lNmpP33z1ROx%2BLPL2j5PTncOUv6%2BLSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMq8qsp856TGFZv25wKtwDMAsZCtuoGf6r%2Fl6Yo8q%2BBH2Rhn88%2BeVzHwGS%2FGTYlHMyi%2FekVX7eBslrcYDqYV%2BUyhBvg%2B7RC88RN%2FAjlu8ZkfVrTKKrT7RVObaEu%2BhWaJPc5iYzLO3sAWdW4ptaO2PnosxanOaIIVXHySyGTHygQxPB%2FylB6lSImx%2BhpZl92TCmeKlZ5KUZ7%2Bt9gBrdxgThdSyB3a2UktYY6232i7lTQz7q0B3DCCRLk%2Fg6XTelsuFaUFOJwvCwITm2x8lA7xbP3qXYKDQ2Ll6DZxPm9uh3YKLXB21QFXD3hAqryGsVv97fPLXmdcioIJfeLyTknPWNL65GQ0sBLnf5eafWgCQCMr%2Fwyjb8A9PybcM5kvNIQdS%2FXIiSKj7xWtS60z34fs7HmFOXvOUsixYLEU%2F4wYBkueVWR0%2BI52O%2BTzM%2FhhvaBwdi2rHorv6ZxHeg3nKktlFFlnqYfLEUhndXG2Q1fqKnAl0y8hy3Dydec%2FprIDLDIQPqChwXSQy6fQ4BZzeX0OGboynjspfgMM8MnsKMOdihLvZEuQdhCUb9HBooIfIo%2FJgrGZSpDrisvH2ctR3ImYjkvsuhXGaHlMb6smpruv6%2B30xvSUfPToSrTRKYbNwph3uUQhUbSH9yn52lotswuvuYwQY6pgHAD6KiQa1hPdCxjd4OXDUHXJKDdGXQ1uWPUhuEEkoG1RwqXR%2FwNqTrHSed4jpQNcWlTjgWe%2F6cMIizaJNoHTkZf%2FystDJz7tVzmNI7JFJjs7l6l%2BOGyReuQ1w5OU%2BPmmTrmFXu8OwMXdfIuwQ1Ro1e%2FW8ehWOlnhe%2B8wc9ahjG7uC%2FoBGDePf43TzRxfRRTomWopgpWK2am02kwncxFmraTmjm8NU4&X-Amz-Signature=f3b0c2d2cfd21388e2289fca856a4237fd8d65faf269f36f407a4b486405429a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GW4RVGZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBo%2FcVAEk4jeWraBTNaI85Z2ZyCcdW%2FARg88JGmfxZBiAiBEOa0WYwwPwI9BGO8IHrk9ra7S57Q%2FtmUhg3P3OmESvyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYL8K6AWIakivKTW9KtwDgmI6%2FchhQoa2J7Ur6kBydXEeltY0dHl9xPY9PXJ6dWv%2F00maklrvCxGwW78xEqXuwREDGVHN4b7EON04yOux99QG6f4Vzpr0T%2Bh9hC9oN17S%2Fd1THjfvGYlFES%2FBaCSmGG1Aifrq0HIi2Uzcx6pUAmvdm7ZfgKubArmpHnK%2F2UIdGJGBgQ85Aw5YeoLJujGKDoiODNWVAj2CSiT0woo87Mi%2FQY3C39VQpXQYyIMksxJL%2FFuErr%2FJfpK3o%2FBwOSmwRbw%2Fvu4oLV8czzWbp9A19%2Fb0SFbQj%2FXDjzwrivtFLb3k3Ieg4yG8JNh%2F6YoPJGFjTZsI%2FtOVOM1qlMnM0cKhgCx2TSCQfl3uRIEaiCWhWTJQLvs0zAXLPZ1fBnNk4LNtgaHR6bKszrSOYDKURMeMsbayvDRcsINJW%2F%2BTRBEO3DjEQAXsG%2Fxn10tWhuble1GcDbdDHQ3kwat0sNRRWnT9APQ0YTjpzqd4e8t58lFItkqZTnDu%2BaxoYpwO%2F1BI0WxMgkacI8048Fy1CBofRUtDihpop1p5yUYH1bazoY0M765sTd%2B%2BDHF1eIwOrA4OYuSI2xyUEQM9LVUCqqQ%2BdORt%2F%2BN%2BIYotUjlxYnt6cR6inXmGBo752vEeKjOfWFMwz%2FuYwQY6pgGrp2W%2F76qNIzwxqtCw9xPL0EHG5m7dDysuSyo3TSIi7BTDg0yFnkecQL3GNJYjTQccXgXg0%2BVFkUkweLBVhO1swnro3%2Fx0agYSRMpFaXLMOaryCXKd6ZdzCmgf3CNxyxzHnNF3obpWq6TQGTbwoNBbxN%2FVawAAZoh8aDeExiZmiArPI8g%2F58oe7msgi%2BhfVngdTNpeHrNzSL3v%2BE%2FIShRjYUtVICaV&X-Amz-Signature=cada44acd863d741bb20da5eb719c2dd321d9392584c813c1c050f350e461d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2WIFXT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDiklRECRj58se9vXNkRCZam0VfGeQH9Y6g0vnL1zLN%2BAIhAOlGI5couCyh%2FksSDhLhwaW2DUqCWGeXBGeglOwCNPvwKv8DCDQQABoMNjM3NDIzMTgzODA1Igw%2FyJtJeJMjl1CID%2Foq3APe5Cn789of76i25IWIWlzBOb8mX4b3Gx%2BwcN7zd35Yib5NDcEklsDkg3p42Wn4l1SN2SG2jgiGnMGT7XgwJFg3jneMf7gZV7yyFHwZTsLEwFjwzWIZavut%2FAyqyVbx1iQw%2BNQ6T5gfglG6vQqJTlBYopftKmj%2BkAQ8ugXtjeMPR6mJiHVvFKSzYBhpqsowIECQyuRAD2B5%2BgCIMq3KWIMVG9lsgHTI0R9neVci08HS25sRyXc8tayI7Rift1KVrd0JeGw%2Bxfbs7X20tvX2QZ2i4v1Ka8iv8BaWuQaF25u3c7aKSx%2FY2m%2B%2FrjN2wKcfdELsWUtYTHTrTggvbmUXIPgo6zsRMFjbJrblNdNpqvpJIqDSxgt53IQ0LVlSOx%2ByZwAo759fCFle2vBKY3fJ8xaj%2F2ew5eJXTIx6tviZY9yE8XChvusUh0MD1XYNQEm2myi5Zo6gFmCw5rfonM3FaIMbyyxNB10kEv12qKwGK9VQoTm8EXj6wCVLUeaDkUy3zDuGUo9xZyMMB%2F9oOsBztSxN2VVUPSyx%2BLTbzClwBJo5rQ7HFVwNqekamh5fuhdjhZX9Sig8PFFtf4Jdw3m6%2F%2B2mOnb%2FACKBXW8z96bsOq8HYAX4Cituwvf%2FYrsTxDCu%2FJjBBjqkASvFy05iZ%2BOR1Dib9TExrYHHIs7TvwMuDSgcqQ5ARP4F3zn0hZJ7MWT%2F%2F90aY%2B%2BnEJrI6np9gfa2vwE46JBwuSAi%2F4TDlm1bWokwRlOng10zYupZf0uMLZckAIrN83aUuGNZ7ofDp49QirSKyB3gxetXglNDBYjG8m17o6deTXK%2Fo6M9bGvMqANghsbywBndNOn%2FAGadiVilSpsOwWbQbQ4CELKC&X-Amz-Signature=4e6f0cea633db49762fdf64fd0c8ea8529463b815ab4531a838e08c22318e995&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
