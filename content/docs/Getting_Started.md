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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAA36T6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbu7lJI9e8YhDwuVGrwZPYQPb%2F9rXSXzSWCEf628u7qQIhAP98vSADOiSrLcRnS45c3qMpMiJU0RrfRLqbn1ok6XyBKv8DCEYQABoMNjM3NDIzMTgzODA1IgzOs63%2FVMmrRgZ8KKYq3AOTnxDS46BGi2tTuGOUM%2FgaNYSC%2B9eVDVNVE7ZGj2k4egIbDa82eKKsvRqcZezqEND2FWe1tMWRW9xPdvvzbZhVc9LGdZqrXk%2Fy%2BElwRcDSwxzmN%2FZNyKsr7%2Bp0Jl5DPrJVqlPUykVVnZpI4m%2FQfNBJnEPganKzbi1s06xEazG%2Bb0Eirzh2wzVeH2uNEtL1Orap98LT5oy%2FfAC7UkS9uv2AXr5HYvHGk%2BOYLe%2Fq3Cnf%2BNsIYvpSaotmb2cybFjMCnFUxNxyc6A9rWzf%2B6IDTjo30jpi5UiapHGyv97LFqrhcxUusjgbheI8FjDIxmza9h%2BibU9w52MRupRuQNickc%2FKLBwJ9R%2BnRoLXwfrRyKM55okKcq8v%2BrgfZc%2BsULe92hOaZI5NIIwzU2Ny04KRi8BG%2BiDelNZDBJHJ%2BadZqwiYUSXFn%2BtH9QlCMSgC7oyDoRm%2B2qO25%2BXrhWWUxFTOHtaC6JtCMxULRhp7rcFVaqH2pbeLkuBn%2FZrdwQgLosE5ngrr2KvevYa4IACeaLI8VoFSfFVvTe34xtk5AsFXtDn1bGjyKpPafRRo8DgxtlqOJd76lnFeJQTZSLjAP4m%2B6UkR7i8Ijes%2Bmfli6z%2FblVBXConeChZpbXrvaBWuCTDOl%2BjABjqkAVhH3c8YhSGhGkF39Mr0a4w%2BGCgoepwWyyMichjkpn404DJhXw0tFm3HMOr6awpDAqRKikG6d87cKwBCX4fFw2L7Gtvfq5QqcsjV9E%2FevWs7OWtYYQ2gzlOCf3AhbY9H3FaGLQmvEtAGk8pzZxeFW4WjriIEC8937RCfOFXnKFTQ5pjjhb5qU5wOfVteoGeERxkdusbVfWGskNieejvhEaIjb9kx&X-Amz-Signature=36afe151f494e9306b72082e141d23a648171b58a05eff22c3b5b18f443d1bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAA36T6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbu7lJI9e8YhDwuVGrwZPYQPb%2F9rXSXzSWCEf628u7qQIhAP98vSADOiSrLcRnS45c3qMpMiJU0RrfRLqbn1ok6XyBKv8DCEYQABoMNjM3NDIzMTgzODA1IgzOs63%2FVMmrRgZ8KKYq3AOTnxDS46BGi2tTuGOUM%2FgaNYSC%2B9eVDVNVE7ZGj2k4egIbDa82eKKsvRqcZezqEND2FWe1tMWRW9xPdvvzbZhVc9LGdZqrXk%2Fy%2BElwRcDSwxzmN%2FZNyKsr7%2Bp0Jl5DPrJVqlPUykVVnZpI4m%2FQfNBJnEPganKzbi1s06xEazG%2Bb0Eirzh2wzVeH2uNEtL1Orap98LT5oy%2FfAC7UkS9uv2AXr5HYvHGk%2BOYLe%2Fq3Cnf%2BNsIYvpSaotmb2cybFjMCnFUxNxyc6A9rWzf%2B6IDTjo30jpi5UiapHGyv97LFqrhcxUusjgbheI8FjDIxmza9h%2BibU9w52MRupRuQNickc%2FKLBwJ9R%2BnRoLXwfrRyKM55okKcq8v%2BrgfZc%2BsULe92hOaZI5NIIwzU2Ny04KRi8BG%2BiDelNZDBJHJ%2BadZqwiYUSXFn%2BtH9QlCMSgC7oyDoRm%2B2qO25%2BXrhWWUxFTOHtaC6JtCMxULRhp7rcFVaqH2pbeLkuBn%2FZrdwQgLosE5ngrr2KvevYa4IACeaLI8VoFSfFVvTe34xtk5AsFXtDn1bGjyKpPafRRo8DgxtlqOJd76lnFeJQTZSLjAP4m%2B6UkR7i8Ijes%2Bmfli6z%2FblVBXConeChZpbXrvaBWuCTDOl%2BjABjqkAVhH3c8YhSGhGkF39Mr0a4w%2BGCgoepwWyyMichjkpn404DJhXw0tFm3HMOr6awpDAqRKikG6d87cKwBCX4fFw2L7Gtvfq5QqcsjV9E%2FevWs7OWtYYQ2gzlOCf3AhbY9H3FaGLQmvEtAGk8pzZxeFW4WjriIEC8937RCfOFXnKFTQ5pjjhb5qU5wOfVteoGeERxkdusbVfWGskNieejvhEaIjb9kx&X-Amz-Signature=317da7c6820472914fa2d2944e91567fb4b48e18f5f395fd18e0239052ddf0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAA36T6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbu7lJI9e8YhDwuVGrwZPYQPb%2F9rXSXzSWCEf628u7qQIhAP98vSADOiSrLcRnS45c3qMpMiJU0RrfRLqbn1ok6XyBKv8DCEYQABoMNjM3NDIzMTgzODA1IgzOs63%2FVMmrRgZ8KKYq3AOTnxDS46BGi2tTuGOUM%2FgaNYSC%2B9eVDVNVE7ZGj2k4egIbDa82eKKsvRqcZezqEND2FWe1tMWRW9xPdvvzbZhVc9LGdZqrXk%2Fy%2BElwRcDSwxzmN%2FZNyKsr7%2Bp0Jl5DPrJVqlPUykVVnZpI4m%2FQfNBJnEPganKzbi1s06xEazG%2Bb0Eirzh2wzVeH2uNEtL1Orap98LT5oy%2FfAC7UkS9uv2AXr5HYvHGk%2BOYLe%2Fq3Cnf%2BNsIYvpSaotmb2cybFjMCnFUxNxyc6A9rWzf%2B6IDTjo30jpi5UiapHGyv97LFqrhcxUusjgbheI8FjDIxmza9h%2BibU9w52MRupRuQNickc%2FKLBwJ9R%2BnRoLXwfrRyKM55okKcq8v%2BrgfZc%2BsULe92hOaZI5NIIwzU2Ny04KRi8BG%2BiDelNZDBJHJ%2BadZqwiYUSXFn%2BtH9QlCMSgC7oyDoRm%2B2qO25%2BXrhWWUxFTOHtaC6JtCMxULRhp7rcFVaqH2pbeLkuBn%2FZrdwQgLosE5ngrr2KvevYa4IACeaLI8VoFSfFVvTe34xtk5AsFXtDn1bGjyKpPafRRo8DgxtlqOJd76lnFeJQTZSLjAP4m%2B6UkR7i8Ijes%2Bmfli6z%2FblVBXConeChZpbXrvaBWuCTDOl%2BjABjqkAVhH3c8YhSGhGkF39Mr0a4w%2BGCgoepwWyyMichjkpn404DJhXw0tFm3HMOr6awpDAqRKikG6d87cKwBCX4fFw2L7Gtvfq5QqcsjV9E%2FevWs7OWtYYQ2gzlOCf3AhbY9H3FaGLQmvEtAGk8pzZxeFW4WjriIEC8937RCfOFXnKFTQ5pjjhb5qU5wOfVteoGeERxkdusbVfWGskNieejvhEaIjb9kx&X-Amz-Signature=2f4b8f957f5096a9ba3e14e190405adb80b8ebd0242235a5ceca4236e7bd5707&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOW7MIN5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVpWa1X2oPFZ0jfGsWzjMxSP3u9RnC9FCqQvE%2FcbAzIAiA%2FREbL8bIz3knCqt6FdjuvtUGguNV6GwhhwpV3RnXmoyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMhqSI%2FGUJo8BXosd5KtwDBqwLZnC3UTmRRBIUV0zIyjCBui9SMaqwFGXZeDu4SpQg0yJLwEuOg%2BaNKso5eGaNDI0NtMcBqavwjt7RxKxGrBbmCLisfkL5UlWeiNtZ%2BQkWV1KNisewKHb2FapM0ALuRRx8f%2B%2B%2FZ80SEGzejxnyA%2Fkb%2FvMHXgmktgwfc1KkvMZbLg8Z28VDkWf3EZQ8aZKmU0DcFiBLL6CI4vGLDD%2FkHP8lXrWYNepJDS7KGT26eTBYK%2FZXBRTs%2FpdUvom37fWbUZJ%2FrCYatZ0%2BszUguYpLq2uA7IXtudMDKX3K%2B%2BHPZLD2AWkplTnErCsZL885O0HSKy6xy0tzPYxaSOb5qaEYqde6gUTh5fUwfj1sQp1mbacveqipoKPSLZUY8Qj5zcgqU8CuSFAdjSUW9ClQwwS9cWtlGcp7u5bYT8S9GFD3Vo29gWJc45ScXKxubG3HZFOb4iIWYVW8%2B%2FSnOTrc3n2w%2Bg%2FhtFdq5fTtp9nmHyQTOOHW2RU4wykVSe5PSp5R5aFjA7KR8rfgenQCPz2GSvNdBX86c5FeuzxRFHbBtjOpR08me3NOQa06ehejCohFNddQjlKDHAV0dDhWIp9WQOcc3oGa7xGzgo9ClhlJAUjE%2F%2FD0EPy1OZzHeH831Bgw2pfowAY6pgErmT1U9EGoytD4yZgpsy222qrPvoxzjgfjgWX3DDOrtd%2BcsKYs1gJ8JY0DmUXRYNiekDo8qUCelMjk451p14CbqUEHRf4eWBGFANRRfe8%2BOJ0YbFTMf9UbQanKQDQRLz5Vr6Wqdn%2FcurepHs659F9dk7JCWqpihK8TfHR0sP%2BPz2OSldxwv3jvHO6gZ766HCSNnQF8CjoI7jdHS5eVFAW%2B%2FWQqmvoG&X-Amz-Signature=4b2ddb054ae68a028279320c319ab2557562df9d265c2ff6fc934a13a6349969&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKQ2AAY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS6FV%2FcY6s3Go8NsLuWL4Eb%2BFuKhriBiPEIdNb%2FNBeaAiBF8KLLAR2ESQTAjyo2XublCRt%2Fnrt8CAjZbk%2BHC%2FUv3yr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEtVRQ3qk%2Fn0PYGTrKtwD1Ttx0Jt61%2FryD4ftvl6dL2liwvj03C9iEo7L6IXwOiSFIQq0enJa%2BCkdab72NC2uP0ffMkvvE4lVAC2vEj9%2Fd2%2Bg2Sm%2BLzdRcMsuOqBYnS5ulSLCSoexY%2FKfpUYE4nqqGCTD50ZUGd6tl%2Bui%2BXolsTQLlk9KoKt%2B8v%2BGcaP3y7TxkO8SzylobIBpWD3vElXowbmxcIfV1bRtVD4RqSl3d65g%2FPnNXixNOxVkwQ6Ianuco11RFNN8XAT6LAEWR5lMKO6iEarT3qNcp05C%2FHAAExdpwvhXjcWuHAB9EjhAjesgfO%2BOdVjSkUDyRu0M2lYTeERStzubhbprYvvAPKO0AtFoUuZ32jUow0HQbDwevWV3yNHYKmw26oyM8apV%2Fia%2BDZnmgzyza%2FUw5tpX3Vp%2F38KgkRFYPaSPBO1cYILEtyoLK3M18ST3SIkvzKoWR4554%2FyTN36LLRKPgiIbcgVnH%2F6B0qyvGUTZjURVQ4c7O3VRbZ9hMbAhGSVnFzEoniupr4vruD8dzbHFLCf0wloDLsVw0mRhkoq4vjHQW51R84wO764Toas0J1RHti99H4b9yHPW8q1qiYlDR%2BvW8yxGmiIf9iIaC4XgRt7zDhpNfGQR1Q%2BZP6uogHi5x%2BEwz5fowAY6pgHF8oY4csNfNo%2FQMIJE6BvdWMoPbna7scvaOA%2BwP5S%2BpXDv4HPgXPNZawZbm5yM2EfNRdp9rndpGhU05uuVvMGhULgbxmZcvzKnBrwXOPfodF3ZuY%2FXY8DRc0k8T%2F3q6HFS9X1gLQonR%2BoyYpdhNlquCjeBvTf7ejF%2F5yE5zhxBf3DZitpJiineY16cokNNRPysiri8RNf4qbkFtrVmYaJL5nYQeqdE&X-Amz-Signature=26455d3d392daff3615487b2899dd844ce65818a4516aba30d98296bcc8c14a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAA36T6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbu7lJI9e8YhDwuVGrwZPYQPb%2F9rXSXzSWCEf628u7qQIhAP98vSADOiSrLcRnS45c3qMpMiJU0RrfRLqbn1ok6XyBKv8DCEYQABoMNjM3NDIzMTgzODA1IgzOs63%2FVMmrRgZ8KKYq3AOTnxDS46BGi2tTuGOUM%2FgaNYSC%2B9eVDVNVE7ZGj2k4egIbDa82eKKsvRqcZezqEND2FWe1tMWRW9xPdvvzbZhVc9LGdZqrXk%2Fy%2BElwRcDSwxzmN%2FZNyKsr7%2Bp0Jl5DPrJVqlPUykVVnZpI4m%2FQfNBJnEPganKzbi1s06xEazG%2Bb0Eirzh2wzVeH2uNEtL1Orap98LT5oy%2FfAC7UkS9uv2AXr5HYvHGk%2BOYLe%2Fq3Cnf%2BNsIYvpSaotmb2cybFjMCnFUxNxyc6A9rWzf%2B6IDTjo30jpi5UiapHGyv97LFqrhcxUusjgbheI8FjDIxmza9h%2BibU9w52MRupRuQNickc%2FKLBwJ9R%2BnRoLXwfrRyKM55okKcq8v%2BrgfZc%2BsULe92hOaZI5NIIwzU2Ny04KRi8BG%2BiDelNZDBJHJ%2BadZqwiYUSXFn%2BtH9QlCMSgC7oyDoRm%2B2qO25%2BXrhWWUxFTOHtaC6JtCMxULRhp7rcFVaqH2pbeLkuBn%2FZrdwQgLosE5ngrr2KvevYa4IACeaLI8VoFSfFVvTe34xtk5AsFXtDn1bGjyKpPafRRo8DgxtlqOJd76lnFeJQTZSLjAP4m%2B6UkR7i8Ijes%2Bmfli6z%2FblVBXConeChZpbXrvaBWuCTDOl%2BjABjqkAVhH3c8YhSGhGkF39Mr0a4w%2BGCgoepwWyyMichjkpn404DJhXw0tFm3HMOr6awpDAqRKikG6d87cKwBCX4fFw2L7Gtvfq5QqcsjV9E%2FevWs7OWtYYQ2gzlOCf3AhbY9H3FaGLQmvEtAGk8pzZxeFW4WjriIEC8937RCfOFXnKFTQ5pjjhb5qU5wOfVteoGeERxkdusbVfWGskNieejvhEaIjb9kx&X-Amz-Signature=42abd0b0c2433ab676e4823676f9d0b55deb51c7ed0807534441315910fea85e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
