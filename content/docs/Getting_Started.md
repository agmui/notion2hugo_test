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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDD7BMK2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDu%2BMfGufD9yCkINQQibyJgyHConzxZ8I4Nxp22v7th6AIgGejOh4%2FEmhe%2BMT5eVkmK5Sv0W%2BNXOF3b97rCseYbysgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD7loXneVhFgOE2TkSrcA549%2BwqCEvoOmg5TjSyqy5wfksYCpAx53aEPhwyOLN2%2BcHosOoMUJqDobBKyYnHUjF8eFO48wEQrXSuPjpIz5lM6q0BCAjyKPR2Z3hFoKrIYFpTLN6rahU4xrTuvOrT%2B%2BUqZ8P3R%2FTqai0UopSY9fPnoI3A1A2ZGEaSaRJ1OI7TBCOvUlSTHPWfKIHWcBMytU11clbvgymuwwXd5AUvifNp0Mxjc%2FxugHbupY4hlFfEaE%2FfRf9ANVJ7ZL1%2BHiHLm2d93nGZkgIZMdd7WHGvKiSiv5%2FAenzJPyWPhgp09zAYMWk1LQ7YfAVzcKj9Vcvb86a0sZVBGA8MtBh4k8%2FRu0Kn%2FhfdrkuBnLyM6vm9SKZAwUWfnRch8T23QTySSWC0GaIACS%2BmOMk%2B6YQZKRTPOCcMBPp%2B%2FzFdFKF7GvFqxaZEctPoV%2FMWqq3qVBR75h1bWbV5NbniQILxUpUnrI9WZD3y8MSzbocfC%2BMcCt0Gqp0tqz4DZxr%2BY7ip9dTK2v1tFfk%2F%2BDYx3eB8t9T%2FY%2F%2BNPj%2FaBwgCbrhdoQQqCyDzbjMsftu2NbZ8UNMX3tzJPObtZSw%2BfEpUzruTFk0Ws%2B9h24MwJ3QmikULJpmMfMKS6PaE3HH9IZrsId2mS7zDfMKeRw8QGOqUBt2TzRATOOzpvFTfFl0SYk1nE6daAIFR4dp3zwTPd%2FWyctfyR26BHHw6b8Ja1P4yWoVpSK2bpEZtQu5v7UxNF%2FKd77BS01qEvzqKfOBOz6VKuXiptFg3vrX7mbr0g5PTOhVt696iammQb3puvfLaM5SaAIumdRoeZ4U6BqyNC%2Fr6xjbXdoSqBZHrVnTr5MdualDN7zo%2B0heu2uRvT%2BH3px8Qe4D%2Fm&X-Amz-Signature=fcecbfc7a02b49f0b1c9cb986432204209008a9a0f551f96fe22b97ce99009ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDD7BMK2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDu%2BMfGufD9yCkINQQibyJgyHConzxZ8I4Nxp22v7th6AIgGejOh4%2FEmhe%2BMT5eVkmK5Sv0W%2BNXOF3b97rCseYbysgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD7loXneVhFgOE2TkSrcA549%2BwqCEvoOmg5TjSyqy5wfksYCpAx53aEPhwyOLN2%2BcHosOoMUJqDobBKyYnHUjF8eFO48wEQrXSuPjpIz5lM6q0BCAjyKPR2Z3hFoKrIYFpTLN6rahU4xrTuvOrT%2B%2BUqZ8P3R%2FTqai0UopSY9fPnoI3A1A2ZGEaSaRJ1OI7TBCOvUlSTHPWfKIHWcBMytU11clbvgymuwwXd5AUvifNp0Mxjc%2FxugHbupY4hlFfEaE%2FfRf9ANVJ7ZL1%2BHiHLm2d93nGZkgIZMdd7WHGvKiSiv5%2FAenzJPyWPhgp09zAYMWk1LQ7YfAVzcKj9Vcvb86a0sZVBGA8MtBh4k8%2FRu0Kn%2FhfdrkuBnLyM6vm9SKZAwUWfnRch8T23QTySSWC0GaIACS%2BmOMk%2B6YQZKRTPOCcMBPp%2B%2FzFdFKF7GvFqxaZEctPoV%2FMWqq3qVBR75h1bWbV5NbniQILxUpUnrI9WZD3y8MSzbocfC%2BMcCt0Gqp0tqz4DZxr%2BY7ip9dTK2v1tFfk%2F%2BDYx3eB8t9T%2FY%2F%2BNPj%2FaBwgCbrhdoQQqCyDzbjMsftu2NbZ8UNMX3tzJPObtZSw%2BfEpUzruTFk0Ws%2B9h24MwJ3QmikULJpmMfMKS6PaE3HH9IZrsId2mS7zDfMKeRw8QGOqUBt2TzRATOOzpvFTfFl0SYk1nE6daAIFR4dp3zwTPd%2FWyctfyR26BHHw6b8Ja1P4yWoVpSK2bpEZtQu5v7UxNF%2FKd77BS01qEvzqKfOBOz6VKuXiptFg3vrX7mbr0g5PTOhVt696iammQb3puvfLaM5SaAIumdRoeZ4U6BqyNC%2Fr6xjbXdoSqBZHrVnTr5MdualDN7zo%2B0heu2uRvT%2BH3px8Qe4D%2Fm&X-Amz-Signature=18a8393de6f4515f15c6ba34647e1d7da42ae5f9c70922701d1abcfe3b1ce84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDD7BMK2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDu%2BMfGufD9yCkINQQibyJgyHConzxZ8I4Nxp22v7th6AIgGejOh4%2FEmhe%2BMT5eVkmK5Sv0W%2BNXOF3b97rCseYbysgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD7loXneVhFgOE2TkSrcA549%2BwqCEvoOmg5TjSyqy5wfksYCpAx53aEPhwyOLN2%2BcHosOoMUJqDobBKyYnHUjF8eFO48wEQrXSuPjpIz5lM6q0BCAjyKPR2Z3hFoKrIYFpTLN6rahU4xrTuvOrT%2B%2BUqZ8P3R%2FTqai0UopSY9fPnoI3A1A2ZGEaSaRJ1OI7TBCOvUlSTHPWfKIHWcBMytU11clbvgymuwwXd5AUvifNp0Mxjc%2FxugHbupY4hlFfEaE%2FfRf9ANVJ7ZL1%2BHiHLm2d93nGZkgIZMdd7WHGvKiSiv5%2FAenzJPyWPhgp09zAYMWk1LQ7YfAVzcKj9Vcvb86a0sZVBGA8MtBh4k8%2FRu0Kn%2FhfdrkuBnLyM6vm9SKZAwUWfnRch8T23QTySSWC0GaIACS%2BmOMk%2B6YQZKRTPOCcMBPp%2B%2FzFdFKF7GvFqxaZEctPoV%2FMWqq3qVBR75h1bWbV5NbniQILxUpUnrI9WZD3y8MSzbocfC%2BMcCt0Gqp0tqz4DZxr%2BY7ip9dTK2v1tFfk%2F%2BDYx3eB8t9T%2FY%2F%2BNPj%2FaBwgCbrhdoQQqCyDzbjMsftu2NbZ8UNMX3tzJPObtZSw%2BfEpUzruTFk0Ws%2B9h24MwJ3QmikULJpmMfMKS6PaE3HH9IZrsId2mS7zDfMKeRw8QGOqUBt2TzRATOOzpvFTfFl0SYk1nE6daAIFR4dp3zwTPd%2FWyctfyR26BHHw6b8Ja1P4yWoVpSK2bpEZtQu5v7UxNF%2FKd77BS01qEvzqKfOBOz6VKuXiptFg3vrX7mbr0g5PTOhVt696iammQb3puvfLaM5SaAIumdRoeZ4U6BqyNC%2Fr6xjbXdoSqBZHrVnTr5MdualDN7zo%2B0heu2uRvT%2BH3px8Qe4D%2Fm&X-Amz-Signature=e59b54bd081e81d2cee644f3487a9006903e451ce1143258224d113900388eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYODEREO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQD0K3wMURnfjF%2FU%2B0jD94Km%2BYc8DVlAP2lZgL6WpXysAAIgKYaOBnAoVVkNIbJe6PQizKnfb3616bJH5E%2BiHBhNjkAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLG7tip9OPAeBDLuLyrcA0aizxzlxWoVoylLm00r5r3yg2hTLY76r1zlnbjYT%2FKxfB5wJWBYr6kZExcRdya366DR%2FZt5ca6yeaYDCSiO6bdd7cSKsClsdsKjD99NHapquvqxhITMfZCDOMJGzaLPBJrWhRBoqeI9vyJoyUZcqdQNCITG%2Fxirf0S1FR4g7MtoIZm9Vb24%2B%2BAwLKu%2BjdF8nKErwhs1%2Bg1%2FnwQhXJO72GTS3Uz0aN4Udy17FCmpgBR3t6XAus9lR92K%2BTD5z2u6%2BPTjEAKRLQQm3vmer9YBNkT15Wy4Hzj%2FBB%2BAcVu6dSbSN9Or4JHWrvUCCkI1qAf6ehDoDQi4ToYGyhPcuLotPuMdoDW67PfpZGfMT7XdLgWAsjq%2F%2Flia5RO4obZ8B1RUPpf6U2Fli6fRNyD1ENmO9h7BiH%2BjNUFJsrljJhTlyQ%2FCbBdZPc%2BK33mNV2nS3XylgtfrvCEc6f3NJ3JZn%2F7LN6oGqd8InMyokt351iEtTXBV4XdCRBlGAdYuYHbqkFTKmndiRYaXLJOSuOHgjeuIlQe%2FAxfNEwvxF7ypR0l77gnRDD7oSWYaLJcuVV%2FOmdnc2L3rh%2BWZ5om7z5PajI9y%2FJ6Tbjp6i8ED2UAESAXHRSYq%2FyEydpo5tqvp9jEAMPaQw8QGOqUBgb5GFRoYcN0zUNZ1pOcBDvPC6vMEmPWH%2FVbNSzKPOPBtVphtj%2FS9ZAWWGup46Fs8aYkIhWNpSy3U7s3fjfzpEyAknfYfZNXcubHq0ci2RxJWo9FZp0wZSpy5q5CjSmupdg3E2%2FGieq%2BteGzVjs%2Brm2GJ9vXhZFkj4xR4uLM4y3Fq6Ah8%2FnsQYb8ol93ILftvPRv2andhAgZ8sqZ1E6rbi8aFpMXd&X-Amz-Signature=e781e7ae444e254f08025556e33fcf4c33376fd054d556e1d9e845a80091074f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4H4GHIW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFNlkNtmOaw5dFE6JMQb20AhiCSTkQko8AW8d5eO7L6bAiEAwxNysTWfb5RpPbpkUf6tmLiQ8Mkq%2BFm00w9U2QzFBHoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAn%2FIoiKD%2B0k%2FRSIICrcA0vGHEhPVwCeCyCNA6E2fuTQH%2FPak1jtjig%2FWBbqJyvXfIjcmfftLb6CKPPLhM5slUzilbagVem789C5yMIoDWrsCDLt5DhLXKQJN0sQPuSPgFu1RuX1N2pd8p3T63C34VZdK%2FLXVWMOjQbJc5VoWu5jeqRBgkmu5Uh4c8V5qihIVjar%2FaM7Ja02W8IHPVXNjidDmH%2Fl3K%2BBmjPIa9NDOwdz0bRMWv6c6VldG7NUo8%2FilcyDqZQaW8IzewfLAS2ompfqI%2Bal04ra979DWQotFlsSzLQGESW8FOuLIFjKGJ8jHaFT1dw709uf3tG2d4bJVhYuQy3RXM646RxYKwog1CmABHTL0VFzIztruK75QHTiZGCa8dZpcydcJdAfLmy6z5mFvY1x6JPx%2FrHMxURfBSc5JgkAB9v%2BA865Re1fC8XCkZHPzCRf68UEEc1DAp4bOt%2B6Fnd07uVuis4vUuGpPDRX8gQecwl84mG5jrSstLh2rekqrTv1zyJMOOdu5GUSvsAomWBLzaxzSJlLlqpjhaHeGd6a8VMGr2W0xtZDqg5%2FR48V8mj%2B73fxuqMSrJwPaPSeOmIp0uEBtSQOcpI0m5lCSQMC%2BAW4dYE%2B4Md0XMluTr06EiYT9LLZfmCnMJSRw8QGOqUBWYI%2BfxJLqqU9vKh8Qf96Gl1nDeRl51zwXkTAz9VvoG8ignKVrguMLyMLcpnQBxQ3lfs9UvZE7pbwZTOGKhKlS9OGfuI4scZtSvN8NBP6XS13i80Ofw7rG9sbBLde558NiiIHVmeBknCHVS4KTeERM8rPiuj723JvlqV%2B1Iq9mTWwE4OhpQjjGasmvr2uVRHwsfSzmpjrp2Z3mQjdSir3hBbBO8Nj&X-Amz-Signature=99f60d1a0d4d9448ac164bf66b6ff9dcf77c5403a6a0287690e96ed8144369cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDD7BMK2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDu%2BMfGufD9yCkINQQibyJgyHConzxZ8I4Nxp22v7th6AIgGejOh4%2FEmhe%2BMT5eVkmK5Sv0W%2BNXOF3b97rCseYbysgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD7loXneVhFgOE2TkSrcA549%2BwqCEvoOmg5TjSyqy5wfksYCpAx53aEPhwyOLN2%2BcHosOoMUJqDobBKyYnHUjF8eFO48wEQrXSuPjpIz5lM6q0BCAjyKPR2Z3hFoKrIYFpTLN6rahU4xrTuvOrT%2B%2BUqZ8P3R%2FTqai0UopSY9fPnoI3A1A2ZGEaSaRJ1OI7TBCOvUlSTHPWfKIHWcBMytU11clbvgymuwwXd5AUvifNp0Mxjc%2FxugHbupY4hlFfEaE%2FfRf9ANVJ7ZL1%2BHiHLm2d93nGZkgIZMdd7WHGvKiSiv5%2FAenzJPyWPhgp09zAYMWk1LQ7YfAVzcKj9Vcvb86a0sZVBGA8MtBh4k8%2FRu0Kn%2FhfdrkuBnLyM6vm9SKZAwUWfnRch8T23QTySSWC0GaIACS%2BmOMk%2B6YQZKRTPOCcMBPp%2B%2FzFdFKF7GvFqxaZEctPoV%2FMWqq3qVBR75h1bWbV5NbniQILxUpUnrI9WZD3y8MSzbocfC%2BMcCt0Gqp0tqz4DZxr%2BY7ip9dTK2v1tFfk%2F%2BDYx3eB8t9T%2FY%2F%2BNPj%2FaBwgCbrhdoQQqCyDzbjMsftu2NbZ8UNMX3tzJPObtZSw%2BfEpUzruTFk0Ws%2B9h24MwJ3QmikULJpmMfMKS6PaE3HH9IZrsId2mS7zDfMKeRw8QGOqUBt2TzRATOOzpvFTfFl0SYk1nE6daAIFR4dp3zwTPd%2FWyctfyR26BHHw6b8Ja1P4yWoVpSK2bpEZtQu5v7UxNF%2FKd77BS01qEvzqKfOBOz6VKuXiptFg3vrX7mbr0g5PTOhVt696iammQb3puvfLaM5SaAIumdRoeZ4U6BqyNC%2Fr6xjbXdoSqBZHrVnTr5MdualDN7zo%2B0heu2uRvT%2BH3px8Qe4D%2Fm&X-Amz-Signature=6d48961926e71933fe8e97ec29bd495241dd69fe4f3e1c03d03a1b207ac2c3c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
