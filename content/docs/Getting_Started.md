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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFQDPL6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPhbkkvCXbeUOmHSOGITPImrJDEClwBPCCOjsYusH2SAiEAgbo45E0Anon%2BtbqBIPjBH5v%2FR6Mh119SYRCqUsoWVR8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2Yf%2FunKx9yldvWryrcA%2BnXqh2xqv1hjsNPb4dWf9yhbNos2xoTLdHIJ%2BSw6a%2FsgRgxa7rq2b1Qju%2BinegOO95OAANkDheq4lPZt25gDIaqBE9XujvGNKGJo2587KjaPaenWrXvbFgIVAwPyZ7D0pR%2FDLnk7VrsX27glif96uwzgMPA5x%2Btn%2F3AUojANcNL94nbVvxDqYJ1YvFtDXjpJYSMD5GqUWDHppQVNvydiAAh2x%2FSLn2Rhy4bvy8TYoGi4rH%2FAmtbYrbPYZdQ983%2BhSU4mqB89pLo7D5R2lUiuPC1rp49hQxJxMLallnV14C1Nsu4DtNdoSEWcwf7zHvAN%2ByxzksW8m4D2TItpjxgW021JojRhIG4KzZipBcMEq%2FohAYejQVhNXFNjIpzgn5tYoi53v4ydAUTMhTsKKM9PN3lFVEtlb8%2BgWmvT22Dk8UKPsHgDf%2B5y%2FJDhFtQKGg5Od94%2F6ndccUrX0rtz4rxHDH9cORMonrt31he7lY0hCNHvGMCUc20xgNl0ciglGxn6p5ngoP6HNYzzsZnBObwyNNHgEfbSOHqWu4qX780u2LTCIaNhWEDaLsXtuMnYN%2BDURdDTuFwofkvux5N4J7n4%2BtifpMFF9tgJPompWOUeyFzgD03RisNnzLuixPbMKKnw8MGOqUBcl2svpgEUo2gT7QmXfWAu%2B8cWy8R49gxtMkkUGc7Xfepd8%2BOm3rcJKrxsW1OpsfJaSgUR4wZFVHku3i57L5vVR4A%2BGXE6RKN8ADTqEoXhFiHHMREinBzHzA9v1H0F6KnY4q5uYIHsiOupboAZaaeELeKHnduvS2kJrR8tm1vPhr1F%2FV1M%2Bxw6bUG3iy9PjV255tkRJduNUwwLRZrRVhvFvxbf5as&X-Amz-Signature=af1d88c2551a1b2c746045ef231a7c257692f7700d40e3a9ce146d5e61303711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFQDPL6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPhbkkvCXbeUOmHSOGITPImrJDEClwBPCCOjsYusH2SAiEAgbo45E0Anon%2BtbqBIPjBH5v%2FR6Mh119SYRCqUsoWVR8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2Yf%2FunKx9yldvWryrcA%2BnXqh2xqv1hjsNPb4dWf9yhbNos2xoTLdHIJ%2BSw6a%2FsgRgxa7rq2b1Qju%2BinegOO95OAANkDheq4lPZt25gDIaqBE9XujvGNKGJo2587KjaPaenWrXvbFgIVAwPyZ7D0pR%2FDLnk7VrsX27glif96uwzgMPA5x%2Btn%2F3AUojANcNL94nbVvxDqYJ1YvFtDXjpJYSMD5GqUWDHppQVNvydiAAh2x%2FSLn2Rhy4bvy8TYoGi4rH%2FAmtbYrbPYZdQ983%2BhSU4mqB89pLo7D5R2lUiuPC1rp49hQxJxMLallnV14C1Nsu4DtNdoSEWcwf7zHvAN%2ByxzksW8m4D2TItpjxgW021JojRhIG4KzZipBcMEq%2FohAYejQVhNXFNjIpzgn5tYoi53v4ydAUTMhTsKKM9PN3lFVEtlb8%2BgWmvT22Dk8UKPsHgDf%2B5y%2FJDhFtQKGg5Od94%2F6ndccUrX0rtz4rxHDH9cORMonrt31he7lY0hCNHvGMCUc20xgNl0ciglGxn6p5ngoP6HNYzzsZnBObwyNNHgEfbSOHqWu4qX780u2LTCIaNhWEDaLsXtuMnYN%2BDURdDTuFwofkvux5N4J7n4%2BtifpMFF9tgJPompWOUeyFzgD03RisNnzLuixPbMKKnw8MGOqUBcl2svpgEUo2gT7QmXfWAu%2B8cWy8R49gxtMkkUGc7Xfepd8%2BOm3rcJKrxsW1OpsfJaSgUR4wZFVHku3i57L5vVR4A%2BGXE6RKN8ADTqEoXhFiHHMREinBzHzA9v1H0F6KnY4q5uYIHsiOupboAZaaeELeKHnduvS2kJrR8tm1vPhr1F%2FV1M%2Bxw6bUG3iy9PjV255tkRJduNUwwLRZrRVhvFvxbf5as&X-Amz-Signature=a64a0b9344d0c87c3acc5b3f5232a3e00c13ee06fc9ff1ed631801a860449a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFQDPL6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPhbkkvCXbeUOmHSOGITPImrJDEClwBPCCOjsYusH2SAiEAgbo45E0Anon%2BtbqBIPjBH5v%2FR6Mh119SYRCqUsoWVR8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2Yf%2FunKx9yldvWryrcA%2BnXqh2xqv1hjsNPb4dWf9yhbNos2xoTLdHIJ%2BSw6a%2FsgRgxa7rq2b1Qju%2BinegOO95OAANkDheq4lPZt25gDIaqBE9XujvGNKGJo2587KjaPaenWrXvbFgIVAwPyZ7D0pR%2FDLnk7VrsX27glif96uwzgMPA5x%2Btn%2F3AUojANcNL94nbVvxDqYJ1YvFtDXjpJYSMD5GqUWDHppQVNvydiAAh2x%2FSLn2Rhy4bvy8TYoGi4rH%2FAmtbYrbPYZdQ983%2BhSU4mqB89pLo7D5R2lUiuPC1rp49hQxJxMLallnV14C1Nsu4DtNdoSEWcwf7zHvAN%2ByxzksW8m4D2TItpjxgW021JojRhIG4KzZipBcMEq%2FohAYejQVhNXFNjIpzgn5tYoi53v4ydAUTMhTsKKM9PN3lFVEtlb8%2BgWmvT22Dk8UKPsHgDf%2B5y%2FJDhFtQKGg5Od94%2F6ndccUrX0rtz4rxHDH9cORMonrt31he7lY0hCNHvGMCUc20xgNl0ciglGxn6p5ngoP6HNYzzsZnBObwyNNHgEfbSOHqWu4qX780u2LTCIaNhWEDaLsXtuMnYN%2BDURdDTuFwofkvux5N4J7n4%2BtifpMFF9tgJPompWOUeyFzgD03RisNnzLuixPbMKKnw8MGOqUBcl2svpgEUo2gT7QmXfWAu%2B8cWy8R49gxtMkkUGc7Xfepd8%2BOm3rcJKrxsW1OpsfJaSgUR4wZFVHku3i57L5vVR4A%2BGXE6RKN8ADTqEoXhFiHHMREinBzHzA9v1H0F6KnY4q5uYIHsiOupboAZaaeELeKHnduvS2kJrR8tm1vPhr1F%2FV1M%2Bxw6bUG3iy9PjV255tkRJduNUwwLRZrRVhvFvxbf5as&X-Amz-Signature=9a88c5152c8e8a0cf6fca52a329163421d9e60e17338e9fdd5e7e4cfd5514ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F27BSLV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCMzuH75XdBO05GyqQZDCrLpKlk0le8wzg%2FJLcxqJtZAiBnOkKHPvhXIhm%2BuRG5ilS09Tf8TAJ27YEUYQH1N%2FaamyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO9X5ZneLiEOo%2F7eHKtwDGhMzK88Ik9gKPkEjMrMrWFpLPDBfdHrEO22kfOe1OwrhEn%2BLMROnOCSiDAH9%2B0ZCuqv4sgFiAbawdRDHM56uCL5kIO94ea%2FnqZ5VxxoccDgygEM8g0UF25ul5ob92isqTXw9fkl2deY%2FiUQTw9NNorJHEE4Q35IyVbwGa7jvpNErNoK619qiCQEB%2FgcU39pJrFEBR04R%2FU7Xz3SBUDUqkf8kRBGv2N%2Bcl9Yhg5qf6WVw9aeFHsYZOyrY4Wk9WKS%2F2f5YTtXTsEZNyTsS74d2y6%2Fpig7IK9MRvE6sEGctynscJUfzDa32vtzzbmLUSYMd3028xF8EfgjJI95QwTGKNV4r3kJi42%2BOM4JWnVV9a4Ed%2B1iHXAfS3FIq1JrbdzacHTATZg5R6uX%2BixtfbDZqsCGhxriLgkdWhYgZT2cJbADAjp7qXTBBk%2BWptXEgzTuhGxGPdpelCwDBit1Oo0uPN50kSql35ugoSvjnrFGktAJPj4K5XPKhqE%2FFfLrFgKoPTSKGKuTw%2FxnUXLYLz6robF9QIAoDx4ZEMKlblo5G0dSH%2FM5KO6hk3idz%2F15NxuSiT%2FTs0bAXz0cddSHev03uWsnKSLUWQ1ZTdvtzCHKXkD2KlUk%2Brvh80SGyaSEwqKfDwwY6pgHsB4d8Y6%2BfMYwD5WA2gABA3oEDs%2FkF5mZ%2BN4sGyQcM6ZDoXGBSxYRi5%2BteKUPtxowE79WEaESbb4OJ1XDhYaGA%2FwRJsrIsLE2OYwEmOdMzvrb6o0JU96LJ2KSrKtPkQy63kAjsPEiHSQDB4YKITgPg7KcjvD9%2F7vPrvO98xG6vbfq6rj7xDUAKNYdnvj0yrGhoBgSk0HGpqH2uMOI4hrH5qClCbY%2Bt&X-Amz-Signature=727eb7c31a72c70d0dc941da5a712ff160a2e9aa45a930a79b56b4ed26e9eeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJE3G4LH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK1kusxrBjjUtXeSUeqqScKGqByZDCHesmcwcqANZdAAIhAOT4viumLrpeeaFwdyr7QvU90WfZosAMHh9nj1MpO4BWKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpREyDr%2BN51ISdzxgq3AMhIxAipcBPOpBwM3KNSpIm0GP0Go8WeH3D1KyzmHCcANObHUUonLo8sLffX72Bq7KiceEbWztyzIji0xUuYjJYEI%2B3iESSnM3Kt57VBrkyfySyQwsCIluh2sKWOAsskOuMYKEra2Vq36o3AzY3buHABO8ObqIPuhKerNHg%2B50zzXS9TJqntblOHU6jSAcj1Hagg4dcLuAT64V5yI8cKXYaY0q9eavupuhB25RDjycNGAzQ2A350z%2BOTaL2q1ZEqO%2BUS%2BqceN%2Fo8eVP5wjhDI4Av5wVgChf3s09b8Gl%2BB%2F6VTsUcdIvy6CLkElkA7drwy9a5LCU%2F%2BVhgbxSSspgyRGywf%2FtYDj3Tg6S8jFylP8w0%2Bz3qOIp%2ByLPWVIlqbuaNMxP1za%2F50xi3%2BnZ0OlAdpPw1thiiEldEoSv9HKjIuHeQ4NQXPDAVBhy8AASTXr2gRobEO5gp%2BV5nghJsyj%2FINMMI0BR%2FsvDyPAbNHhLqrappg0mhPslw5JdeIwWFKMjRs%2BO5U098lCPMiVi8bUQ1SU4H3XaqBX1Vx8qOAwzbQtZ1ENIU6r%2BBOm4dC%2BsjOb4fFE4neof1%2FsWC%2Bz6D%2BcQRI%2BtyQLSp2%2BQqVSCO4FlWk90UtJkTJ3FEU9SitiAJTCUqcPDBjqkAZAH7KkY11hLkS0XmDc2FtWgLitGgGFHrhzpPItxvWJG40tRkbSSZjI1rAIkPlBZp4cWaKhJanFX0vHPkoMaLTBLOWRBsDUPgYOEakHmRtbxkQxT3Y1QhHQALpY1WpSQZMB1UMaxZxoh2b6Q7Sk6fq0fyaF3XMgGlCmOgHtijClkegMY%2BK0YtSArb4VAAvPyWXiyIUBxIXHr%2BOIh0zlwEuZ%2F1PdP&X-Amz-Signature=61d960f062f8dd2ac3ba9eb5d80f7acdc4bdd1e951c39a7c006926914e5ef3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFQDPL6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPhbkkvCXbeUOmHSOGITPImrJDEClwBPCCOjsYusH2SAiEAgbo45E0Anon%2BtbqBIPjBH5v%2FR6Mh119SYRCqUsoWVR8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2Yf%2FunKx9yldvWryrcA%2BnXqh2xqv1hjsNPb4dWf9yhbNos2xoTLdHIJ%2BSw6a%2FsgRgxa7rq2b1Qju%2BinegOO95OAANkDheq4lPZt25gDIaqBE9XujvGNKGJo2587KjaPaenWrXvbFgIVAwPyZ7D0pR%2FDLnk7VrsX27glif96uwzgMPA5x%2Btn%2F3AUojANcNL94nbVvxDqYJ1YvFtDXjpJYSMD5GqUWDHppQVNvydiAAh2x%2FSLn2Rhy4bvy8TYoGi4rH%2FAmtbYrbPYZdQ983%2BhSU4mqB89pLo7D5R2lUiuPC1rp49hQxJxMLallnV14C1Nsu4DtNdoSEWcwf7zHvAN%2ByxzksW8m4D2TItpjxgW021JojRhIG4KzZipBcMEq%2FohAYejQVhNXFNjIpzgn5tYoi53v4ydAUTMhTsKKM9PN3lFVEtlb8%2BgWmvT22Dk8UKPsHgDf%2B5y%2FJDhFtQKGg5Od94%2F6ndccUrX0rtz4rxHDH9cORMonrt31he7lY0hCNHvGMCUc20xgNl0ciglGxn6p5ngoP6HNYzzsZnBObwyNNHgEfbSOHqWu4qX780u2LTCIaNhWEDaLsXtuMnYN%2BDURdDTuFwofkvux5N4J7n4%2BtifpMFF9tgJPompWOUeyFzgD03RisNnzLuixPbMKKnw8MGOqUBcl2svpgEUo2gT7QmXfWAu%2B8cWy8R49gxtMkkUGc7Xfepd8%2BOm3rcJKrxsW1OpsfJaSgUR4wZFVHku3i57L5vVR4A%2BGXE6RKN8ADTqEoXhFiHHMREinBzHzA9v1H0F6KnY4q5uYIHsiOupboAZaaeELeKHnduvS2kJrR8tm1vPhr1F%2FV1M%2Bxw6bUG3iy9PjV255tkRJduNUwwLRZrRVhvFvxbf5as&X-Amz-Signature=eb5df69d2444b1d3de1c85f62f0222cd865c9336c5841f59c67fed6e3e281f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
