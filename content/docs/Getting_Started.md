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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MUVAPHK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBi92GIMomlHxM7vHCI1vvz1jytr6mM8HCdJ7yFKlnFMAiEA6pRNWB9aldeeHm1uL5ESN%2FllDNd%2FXG3HHAsye74J4tsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERcoJH51a5WFn%2BmhSrcA8E4KVLJFb4KivWm3GBLS3u3zWhYorwlcuIjtlK8V%2FSCcaYjvJowF6pzO%2BD99bOHQ3bRPOQC44QtGIt2BjiF%2F7JuOu61yvJtOG1nrKjdvAZUptg2Zit4yt7NTLP92lOgnBSH52O4s4D0dMS2gknARa8WYvn3%2Bv26oFxvrhAmVX4pIaVG72798AjqvZur%2B8%2FTpeGlPQ7TiR%2BonPhrYM90dnbn9TYp%2Fo9BiEpHNbeCcgRHpnU%2B%2BTXG93%2Fz7%2FMzTWzNrq9g2j6n8OOI9wwo8uZbn%2Fthqkfz2nUkNYCwfrxqvnmoAtw8einvj5lUs5aLmYv%2BUYFSzeVZWD4MiibXqsyJLZeYk6l2JZFnOPBmPzQtiGQ6ZuFz7tJRiLelDiy8NBoxNbuCZqjkgwpUOgGpH0M6dPq%2F6BnDbpCVF9gtf2ndKmgBbzP7n9h67d4cCchA9KBDXJRVoT6EdvUkcLCZTzuYXmYj3jNmRxYk7hT5BPXrMGr6Z1veVlxOZbM1J%2FSlTk7edX01wi5lRKva7CNWoORUJq6cMjUyfN3jZdBu6l1s8wOQFv63lNGvCB8zAgO6jbxinaG6O%2F%2FroE9GCzPxBFII9ygI6y6cIB5nZmBKTB8%2F4CJMhm9oZ102nKMckNyXMISQxMEGOqUB8DTvr1z719ZWabfnkMi%2BVjJx1pUpIR1AwhujjbLvuKoSarLsYEG9OkN21U3X9zekfpz4ckiiEhRTElM9N%2F1LRx6244DyFr%2BPV2KNjqBAuKoqpQyBTNGpSgUSE7dWLTppBRkx0hkMvT1rjgnG9plEfF%2BNe9DvRwQFCPR7ZIt4DM735x%2FAgrNQehNbbwfJQKg9E1O7C3luLTdfiMSgSmem%2FEhGYlPW&X-Amz-Signature=3d8d99a1934e140f442aebf9a19ccd0c5472a2f7e724eb89bf1784a39bbcc35a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MUVAPHK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBi92GIMomlHxM7vHCI1vvz1jytr6mM8HCdJ7yFKlnFMAiEA6pRNWB9aldeeHm1uL5ESN%2FllDNd%2FXG3HHAsye74J4tsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERcoJH51a5WFn%2BmhSrcA8E4KVLJFb4KivWm3GBLS3u3zWhYorwlcuIjtlK8V%2FSCcaYjvJowF6pzO%2BD99bOHQ3bRPOQC44QtGIt2BjiF%2F7JuOu61yvJtOG1nrKjdvAZUptg2Zit4yt7NTLP92lOgnBSH52O4s4D0dMS2gknARa8WYvn3%2Bv26oFxvrhAmVX4pIaVG72798AjqvZur%2B8%2FTpeGlPQ7TiR%2BonPhrYM90dnbn9TYp%2Fo9BiEpHNbeCcgRHpnU%2B%2BTXG93%2Fz7%2FMzTWzNrq9g2j6n8OOI9wwo8uZbn%2Fthqkfz2nUkNYCwfrxqvnmoAtw8einvj5lUs5aLmYv%2BUYFSzeVZWD4MiibXqsyJLZeYk6l2JZFnOPBmPzQtiGQ6ZuFz7tJRiLelDiy8NBoxNbuCZqjkgwpUOgGpH0M6dPq%2F6BnDbpCVF9gtf2ndKmgBbzP7n9h67d4cCchA9KBDXJRVoT6EdvUkcLCZTzuYXmYj3jNmRxYk7hT5BPXrMGr6Z1veVlxOZbM1J%2FSlTk7edX01wi5lRKva7CNWoORUJq6cMjUyfN3jZdBu6l1s8wOQFv63lNGvCB8zAgO6jbxinaG6O%2F%2FroE9GCzPxBFII9ygI6y6cIB5nZmBKTB8%2F4CJMhm9oZ102nKMckNyXMISQxMEGOqUB8DTvr1z719ZWabfnkMi%2BVjJx1pUpIR1AwhujjbLvuKoSarLsYEG9OkN21U3X9zekfpz4ckiiEhRTElM9N%2F1LRx6244DyFr%2BPV2KNjqBAuKoqpQyBTNGpSgUSE7dWLTppBRkx0hkMvT1rjgnG9plEfF%2BNe9DvRwQFCPR7ZIt4DM735x%2FAgrNQehNbbwfJQKg9E1O7C3luLTdfiMSgSmem%2FEhGYlPW&X-Amz-Signature=1f6d43b402e155f62066b1e66b0b3ba77fa20cd77d2dcae9ffd866cc28e72df8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MUVAPHK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBi92GIMomlHxM7vHCI1vvz1jytr6mM8HCdJ7yFKlnFMAiEA6pRNWB9aldeeHm1uL5ESN%2FllDNd%2FXG3HHAsye74J4tsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERcoJH51a5WFn%2BmhSrcA8E4KVLJFb4KivWm3GBLS3u3zWhYorwlcuIjtlK8V%2FSCcaYjvJowF6pzO%2BD99bOHQ3bRPOQC44QtGIt2BjiF%2F7JuOu61yvJtOG1nrKjdvAZUptg2Zit4yt7NTLP92lOgnBSH52O4s4D0dMS2gknARa8WYvn3%2Bv26oFxvrhAmVX4pIaVG72798AjqvZur%2B8%2FTpeGlPQ7TiR%2BonPhrYM90dnbn9TYp%2Fo9BiEpHNbeCcgRHpnU%2B%2BTXG93%2Fz7%2FMzTWzNrq9g2j6n8OOI9wwo8uZbn%2Fthqkfz2nUkNYCwfrxqvnmoAtw8einvj5lUs5aLmYv%2BUYFSzeVZWD4MiibXqsyJLZeYk6l2JZFnOPBmPzQtiGQ6ZuFz7tJRiLelDiy8NBoxNbuCZqjkgwpUOgGpH0M6dPq%2F6BnDbpCVF9gtf2ndKmgBbzP7n9h67d4cCchA9KBDXJRVoT6EdvUkcLCZTzuYXmYj3jNmRxYk7hT5BPXrMGr6Z1veVlxOZbM1J%2FSlTk7edX01wi5lRKva7CNWoORUJq6cMjUyfN3jZdBu6l1s8wOQFv63lNGvCB8zAgO6jbxinaG6O%2F%2FroE9GCzPxBFII9ygI6y6cIB5nZmBKTB8%2F4CJMhm9oZ102nKMckNyXMISQxMEGOqUB8DTvr1z719ZWabfnkMi%2BVjJx1pUpIR1AwhujjbLvuKoSarLsYEG9OkN21U3X9zekfpz4ckiiEhRTElM9N%2F1LRx6244DyFr%2BPV2KNjqBAuKoqpQyBTNGpSgUSE7dWLTppBRkx0hkMvT1rjgnG9plEfF%2BNe9DvRwQFCPR7ZIt4DM735x%2FAgrNQehNbbwfJQKg9E1O7C3luLTdfiMSgSmem%2FEhGYlPW&X-Amz-Signature=0b33969a39b46aabfe132b2a3de53c239cc8b0fb268c4ffa1bf691c5209e1bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQR2QLI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDh%2BwS2B6YcxBkk8tYDkk71VrxS8zTdAL1BGtGcgMGF6gIhAP553MlceyODrnELUuxR3ZGYL5%2FQ9ekxC%2F5T2f30oHO%2BKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCIcp4Sf8fTCnAtnwq3ANlZgdjZgTuMGh41WYUf9%2FzoeX%2BbDnR2Ebsw6dmjBQYJ0EoJ3%2FuLAu18acmXiuNM7rlGPOqVSOQaagLx3R20z3bx4zM0Xo4L43rFi1ZkLNsUuY2fE2VLJbQJIF1v5gCYskdCsrBJyWy7wcFU6VMdbdf%2FHsv1q%2F3X4wH3PPMjW7sBZczHI%2FsbowE3%2FM692SUg%2BuZvv8WZNGISAT4YQ9BKEEzI8NB342S5k6p4igHmkoNTePFDgtT%2FuGQJYe9l8LczU97%2F2XvSGCwQnxkjRLEzsk5WbUdR97hUL9W4QNT0VtPR2JPQyvixPvwEpL7eYZBLjmR7cUWPLIbpfKO0eoQikCusyUwxo4RHEtfKdbTxiCSkTuvJAhKYYdi6HB9xB3XWQTVWz0%2FiHTc6VyIC9xMWkS3JU9t8STHnuSr4XRCHr0vvtDC6cAtgHVPpKz%2FBoIJcEod6GYuIgOAsTpkes2f2BMhyb%2BLQtfoGwSUvUYfJpv8RB4zXxsSPfmoLdcOAgrrjsH%2Bb1pR6yD7WYX3AdgfexV%2B2grPhqZE9Al862t5awiHKwndiQxJmvPFMlDQrpYB3HDycIVHRAYp%2FgDjbuEjMcHjGnfvwnB9bsBKK5TfBjTRizMvSPot4m%2BXLKe2bDDNj8TBBjqkAcqKofZ%2BrzF66t9SA%2FcIQriC8JQFuSh5%2FIWgj1%2B6xkVKuJlJBuVUj1FLrr8Sx0IgJAVFO1oY%2FnzR3G2yImOhqO1k%2B%2FktGCPGz6wanytAMR2NFu%2BXWrB%2FE0BpjfOIGo1YJvJx0mRS8fnCcOmKYI0%2FdmyQGAV9cSohsF1HUTr88vHSPwe5UhsdEoo3L99n9EQAjfxEravasDpkuaWTUMujpUjFXYGI&X-Amz-Signature=f51043c9670350eefc336ed0b3d0709a1ce99e20fd9ae6774d44449d35ae70cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RAWGNP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDDoGbtmAfT8lsVNd17Nvtxujv3wJiSSaxNINbmDv2oiwIhAOZeDIRa7CKNU%2F6%2F9Y4gdM6jKz8XrEh3K11Hw1fSx7SSKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyth0WQBoXBfAq7efIq3AMKN2CvArqXhURhFcSwiAVRng%2Bk1CcOCU5qvr4PMFimBIIH7otEVdaMJa0zwXM%2FYqfXXUBqDCeybeaxXh5NVev40TU%2FBzZYve5PDLPdv75omf5koH3tTRYsXlm%2FB%2FtgAY9SwdT2vGbiW7YUqG66zZElI2OKnsah3Ww4CBQCRB1XAf0WSkvM3%2Ftn5ReytmCoh%2FLfQXPZnbYfww%2FD6uGIc91nuQHODTfFLWCPkfxKl3CGS%2BMkNQ7GbPfUHO7arLsXSt7Dc26ry5TcyZMuj0G%2FjnJoff8gNnerRjqAVGhA2ukHKycBXNd%2BH82ShT%2FsRKn5CW5D3gBVtA8D6xNqjQZDlSGFzdAZhnmky%2B3J8JkLs54izSqpu7XoTa%2F1wgN8Fq%2BVUIVRjOn5rBbM19z3EKrVfuQh4ul0pB7vYStpE8v%2Bv6q3cfiR6%2BJcNDGUOBujAPOluK9AbC5PlFXkrmj7uWZCzMHGROZosI5L5Ei0zHImFIPXDzM%2B8KMTxkkuL1chSvNKExBq%2BIOhIsn5Mhmgd%2F1sqgyCKNQ3zaTmW%2FM7dJ41TZECBr77JldvYc%2B1dMTpmPfOjfoquqYD4UnOYmU3IdTFa1XhmvWZmQ%2Fm%2Flte1ELP0VvhAaVLOlXD9tjRb9wltDC5kMTBBjqkAQ44%2FGBTSz068Sz1lnn4gMJo%2B7T6hkeK9%2FVBGoefVFuMgMVtPlc4U2BLr%2BdTk%2BMIe16OLToCDzqvJQP8mtYkR0lZshp24wNnq%2BqWYpTL5h1%2FGizjcpdgLfUqFIZprIXWpVkJ6HsfshPoRGTHKAk1lKVLLqtfYUKYto4tC2eirrK5%2BNYbahgHCmDRL8cZuWFN%2BD6WUFWTLr38%2B7TJOoL%2FWa%2Bfpeul&X-Amz-Signature=e20357e857c9094b105732e8fa68b98635c51d9cf67fc138f7cf9c10d285ccf4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MUVAPHK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBi92GIMomlHxM7vHCI1vvz1jytr6mM8HCdJ7yFKlnFMAiEA6pRNWB9aldeeHm1uL5ESN%2FllDNd%2FXG3HHAsye74J4tsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERcoJH51a5WFn%2BmhSrcA8E4KVLJFb4KivWm3GBLS3u3zWhYorwlcuIjtlK8V%2FSCcaYjvJowF6pzO%2BD99bOHQ3bRPOQC44QtGIt2BjiF%2F7JuOu61yvJtOG1nrKjdvAZUptg2Zit4yt7NTLP92lOgnBSH52O4s4D0dMS2gknARa8WYvn3%2Bv26oFxvrhAmVX4pIaVG72798AjqvZur%2B8%2FTpeGlPQ7TiR%2BonPhrYM90dnbn9TYp%2Fo9BiEpHNbeCcgRHpnU%2B%2BTXG93%2Fz7%2FMzTWzNrq9g2j6n8OOI9wwo8uZbn%2Fthqkfz2nUkNYCwfrxqvnmoAtw8einvj5lUs5aLmYv%2BUYFSzeVZWD4MiibXqsyJLZeYk6l2JZFnOPBmPzQtiGQ6ZuFz7tJRiLelDiy8NBoxNbuCZqjkgwpUOgGpH0M6dPq%2F6BnDbpCVF9gtf2ndKmgBbzP7n9h67d4cCchA9KBDXJRVoT6EdvUkcLCZTzuYXmYj3jNmRxYk7hT5BPXrMGr6Z1veVlxOZbM1J%2FSlTk7edX01wi5lRKva7CNWoORUJq6cMjUyfN3jZdBu6l1s8wOQFv63lNGvCB8zAgO6jbxinaG6O%2F%2FroE9GCzPxBFII9ygI6y6cIB5nZmBKTB8%2F4CJMhm9oZ102nKMckNyXMISQxMEGOqUB8DTvr1z719ZWabfnkMi%2BVjJx1pUpIR1AwhujjbLvuKoSarLsYEG9OkN21U3X9zekfpz4ckiiEhRTElM9N%2F1LRx6244DyFr%2BPV2KNjqBAuKoqpQyBTNGpSgUSE7dWLTppBRkx0hkMvT1rjgnG9plEfF%2BNe9DvRwQFCPR7ZIt4DM735x%2FAgrNQehNbbwfJQKg9E1O7C3luLTdfiMSgSmem%2FEhGYlPW&X-Amz-Signature=f71bcea77e395189e81678d7ce13ede927d11eac97ce97026c315e05ef7e2cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
