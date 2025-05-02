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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U54K6YO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAzeGYifKbpYjRBQKAcEyadY9kcsnI8nSCDGbbJTtZvTAiBDFC54vqUnchgLIUEG2jChqQT9cEfVNWuEyrbduTq4hyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQmiaurL18Az1SczKtwD5h2k6aoUl2rvZ6QuWwXP4A269pAAvs0XqMSVuRYxuCp2k8mWSUeLDN09qC0jpyzy6Hdj1EaNmOG%2FyMeTgJmecuygjZyn7tq7yh0igTqWnIVTQ0YT4UFbiOQAahPjAyQDlMDeuNXiYlfzs5e2FWWe3pGDU%2FAQnsQedaqrXYDYCm39tA4KWJT%2FxsvvgtUgikA9n4Qh%2BJvh%2FFrHZS7M5IziZd4syYFV628MhwP3mScdQQvcTiDrSOpWMV2DF2ppN%2Fd5VKA%2F3NDVGcqwn9EUIwXCpPNeGUfz5EGXIhreRMLS00NZjGXmNjpTUMhX4Fb9t7fGqz0o6JlYyrfJ7Gt45IVxAzlmiMZ%2F70xDfE0ACqfTcHodT3J7iqWA8%2F3RCiSGF3Wg7YHe1zBNMOD%2Bc4r%2BPEZH7kiRe09IvBQJzxSkcZtLwsi8Cz6fmEd%2F1TVskDzJbM%2FtqzSEKH1V%2BeSmmCKx6D85Oi%2Fg2dZRXhhv%2Bvti9ho%2BNKGcK7GVDq7DEMSMLhuvz8RXEPlxn%2Be9ukZSpzqQLRFYaapj4FsFiNQzD0BqzySdcSFfhZonXkFhOPBkRyjREHm7kvHMhV47QFxHxUtVODSwAp%2F5Cb8NrBfEUQmJOIGVMrSdNhicUsRDV1o3yOwwnpnQwAY6pgFlr%2FNeB%2F7FJF1rvkQJ1nIVd05MGu65soO4TnEIqsZR1LL%2FlDyLf3hAaxayTHzrzHhjL2YOVv61Eg3h6vaUpnzFbJTdYyB7erh1IkdDoI7icT5r5VdrQkPXZyVRcF6zAyJa0yNu%2ByJkHeYaYECkUkhUzNWxaiBRTH9Hk%2B7BhIXHBcn0NZDQCZ2RRwJAE%2Bm4G8SrdE2d1m%2F5JcdcLENKSsDjRYETnR%2BB&X-Amz-Signature=ddf61b8e4f176e98e63147f926a6ad5363b9151a51c0d358858087636ee133a1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U54K6YO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAzeGYifKbpYjRBQKAcEyadY9kcsnI8nSCDGbbJTtZvTAiBDFC54vqUnchgLIUEG2jChqQT9cEfVNWuEyrbduTq4hyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQmiaurL18Az1SczKtwD5h2k6aoUl2rvZ6QuWwXP4A269pAAvs0XqMSVuRYxuCp2k8mWSUeLDN09qC0jpyzy6Hdj1EaNmOG%2FyMeTgJmecuygjZyn7tq7yh0igTqWnIVTQ0YT4UFbiOQAahPjAyQDlMDeuNXiYlfzs5e2FWWe3pGDU%2FAQnsQedaqrXYDYCm39tA4KWJT%2FxsvvgtUgikA9n4Qh%2BJvh%2FFrHZS7M5IziZd4syYFV628MhwP3mScdQQvcTiDrSOpWMV2DF2ppN%2Fd5VKA%2F3NDVGcqwn9EUIwXCpPNeGUfz5EGXIhreRMLS00NZjGXmNjpTUMhX4Fb9t7fGqz0o6JlYyrfJ7Gt45IVxAzlmiMZ%2F70xDfE0ACqfTcHodT3J7iqWA8%2F3RCiSGF3Wg7YHe1zBNMOD%2Bc4r%2BPEZH7kiRe09IvBQJzxSkcZtLwsi8Cz6fmEd%2F1TVskDzJbM%2FtqzSEKH1V%2BeSmmCKx6D85Oi%2Fg2dZRXhhv%2Bvti9ho%2BNKGcK7GVDq7DEMSMLhuvz8RXEPlxn%2Be9ukZSpzqQLRFYaapj4FsFiNQzD0BqzySdcSFfhZonXkFhOPBkRyjREHm7kvHMhV47QFxHxUtVODSwAp%2F5Cb8NrBfEUQmJOIGVMrSdNhicUsRDV1o3yOwwnpnQwAY6pgFlr%2FNeB%2F7FJF1rvkQJ1nIVd05MGu65soO4TnEIqsZR1LL%2FlDyLf3hAaxayTHzrzHhjL2YOVv61Eg3h6vaUpnzFbJTdYyB7erh1IkdDoI7icT5r5VdrQkPXZyVRcF6zAyJa0yNu%2ByJkHeYaYECkUkhUzNWxaiBRTH9Hk%2B7BhIXHBcn0NZDQCZ2RRwJAE%2Bm4G8SrdE2d1m%2F5JcdcLENKSsDjRYETnR%2BB&X-Amz-Signature=c55694c98834c55225f0515833fb02f1cddc115c17613c7555b51763b87666c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U54K6YO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAzeGYifKbpYjRBQKAcEyadY9kcsnI8nSCDGbbJTtZvTAiBDFC54vqUnchgLIUEG2jChqQT9cEfVNWuEyrbduTq4hyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQmiaurL18Az1SczKtwD5h2k6aoUl2rvZ6QuWwXP4A269pAAvs0XqMSVuRYxuCp2k8mWSUeLDN09qC0jpyzy6Hdj1EaNmOG%2FyMeTgJmecuygjZyn7tq7yh0igTqWnIVTQ0YT4UFbiOQAahPjAyQDlMDeuNXiYlfzs5e2FWWe3pGDU%2FAQnsQedaqrXYDYCm39tA4KWJT%2FxsvvgtUgikA9n4Qh%2BJvh%2FFrHZS7M5IziZd4syYFV628MhwP3mScdQQvcTiDrSOpWMV2DF2ppN%2Fd5VKA%2F3NDVGcqwn9EUIwXCpPNeGUfz5EGXIhreRMLS00NZjGXmNjpTUMhX4Fb9t7fGqz0o6JlYyrfJ7Gt45IVxAzlmiMZ%2F70xDfE0ACqfTcHodT3J7iqWA8%2F3RCiSGF3Wg7YHe1zBNMOD%2Bc4r%2BPEZH7kiRe09IvBQJzxSkcZtLwsi8Cz6fmEd%2F1TVskDzJbM%2FtqzSEKH1V%2BeSmmCKx6D85Oi%2Fg2dZRXhhv%2Bvti9ho%2BNKGcK7GVDq7DEMSMLhuvz8RXEPlxn%2Be9ukZSpzqQLRFYaapj4FsFiNQzD0BqzySdcSFfhZonXkFhOPBkRyjREHm7kvHMhV47QFxHxUtVODSwAp%2F5Cb8NrBfEUQmJOIGVMrSdNhicUsRDV1o3yOwwnpnQwAY6pgFlr%2FNeB%2F7FJF1rvkQJ1nIVd05MGu65soO4TnEIqsZR1LL%2FlDyLf3hAaxayTHzrzHhjL2YOVv61Eg3h6vaUpnzFbJTdYyB7erh1IkdDoI7icT5r5VdrQkPXZyVRcF6zAyJa0yNu%2ByJkHeYaYECkUkhUzNWxaiBRTH9Hk%2B7BhIXHBcn0NZDQCZ2RRwJAE%2Bm4G8SrdE2d1m%2F5JcdcLENKSsDjRYETnR%2BB&X-Amz-Signature=505fb9228d7bbaffab549527ff724f2943f93286f79ecdbc24aa0b008174fc4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQY5YPN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC5sc9wtV7yO2YwWZoHRknYQByZ%2BlhchJViqQ9C4nwh8AIgF4qh7ImRIBa23BICC0o%2FTUwf%2FBN7fYMwQg6HoqH7sFsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1hAD%2BWbJas%2FWeFzyrcAy0OUiaQZ%2F6SQO3lWfmAUPGZizvG0Y09j5u%2B%2BPgp5YuuAbfcaI62feSbkzwNWFT6sFhY5XyCOH9siC2oV6VcoZbBQjjN4Rq40gPzOJzFuF%2FzXtLDprygRrkRcDfupmcXZ8buEyYDg9qbH7X6yqn7zExwSv%2BjhOQHhh8SjfURwbxY1wzn6fdLkD1Oo49SnpCnJ6QpjawgtVzPv3QLVQjLuXIGyjauGuiVkSEs6aCBPQd7MT5%2B4J0gceTINP%2FUkTc3Cknl1fGYCTgUAnc%2FJecgB0fDLuDo36Y8mVIXn96xLLwXhT%2F4fWwmcj7VWltzUQzlzxQI2yEeag9ths3wfIQMOC7B6fQcdVedBa2LsIL1IG72hxeU4LnTNpun4M2xOodmG%2BCuhbZhRGKnWatq63ZmcEiNCluv%2FKeKfsny%2B605gVh0LqGzA00%2FrpjGgshGpg%2FquvogbuNoc8qQp8EvVYy361002%2F6JDtM9xy9NA5krM85Lgy3%2BgmoOUHvSKNUMU2ABSEIlU7V0l%2Bhl%2BiYF%2FUvmFn7t7E9VJAfHiH7qf1fEcidj1AAE7%2B2NDVtka%2Fs7McyTRlzxZMj2fWTqVGVkVzzI1w9C%2FlsC34a3IXRoNmDBJkP2cf92JSDBUuipEiYgMLiZ0MAGOqUB9ek9aF%2B4jJWLsrfPm%2F%2FL%2FPVvuMrQO4Eb%2B%2FhuHhN%2FYejNwM4Z0LEMgmFnUfFIYKt4%2BMIxw%2BTWCwHe1Mgv7b8PDz9xAnGVdEFDVtR5rCP75gfmC1%2B11v733L8XfVlXjy3tx0al%2Bou6W97GQSFJ10l6Ma5jgvuJe%2BIWTdT2QHfw2LXfLa26mX50XHtvzEjdyNln7FfndHBz8BPsdjVJfXOTYoribcny&X-Amz-Signature=45b58ed355880b31b9e17754efb1c835162b554cdad0d17f5b8c90c48f108575&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CLFD6XH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFjW%2BfJBQduvKbIr3yySo2TqwAqnCIs0K0Rf7lny4X5mAiBNnQ7Ct7n6WScqkfbRvjZoY7WgE%2FkgzykBuunZ%2BjZxZCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVRa4P%2B6j%2FJXjRYTKtwD4ZhglZ5VY4kd%2B9ruVUEg6uhOXR67N6mXM4CBcpfa4j3XqFPTCdh9rtqtK35b5CIJbFfVzDyXGKHA%2FicsxJsdyGtky%2FoYs00mmq%2BTTqBx65aMgU3Xaii1jyJUjqXiGhyAnoP5guTqCLoJVPltusyOAZkYzroWMvjGgQtU3Eu7%2BVhj1uHooaZeiCYUIomP9SOXF2v5mz7RTsTR3aA2XjO37FFpLCoLDgFQb2VavlVo0VKdh%2BcYqhpbyvaEUi%2F32RMXhSo5oQ9WSkYL4UPcaGHJRnPo0RaU9Za6gVSI5oVD3Ok8jiF6Vukfn66BvolzespfbvMFqQdYv0jH8WTV0THoedzRE7JGNOLz4db03WSAZBlHJ8DbO36syuuOxKR7g8Kf5XlnRNcJZuKb4leeRgWl5ZSi6mzypS01kWyp0rtEoxMJYXY7qHmdPEHGDuu6F3Lupd0CM%2F8AguYZQpCEku33gLkqWhLRaiPXtewtU%2BpRol3M6CYUBy4lffRYFYk0uJv4zpdfOO3r5XSZkbZJCaDGn9SrodQtSXd2eTX3McMgbt9WBThKJuqAiZKv69IAl2QFRxUzkIy3puqjxa%2F%2Bn8NM%2B%2FwLU7zPo7Q3xrbT%2B2Xe%2FSE%2B34qM7E3UQ%2FXqOHkwqpnQwAY6pgFOoyHAsgwKHecFVJiAVyw%2FtJQKmgBVNMI%2FH9qJW%2FGX9JakTDekZFECsBj3veAZdBkoTnOQRXkHmTGp8%2F9SmUeo9bGv3HLOdhEzpLOjU9XRyMLK2RJR6OMRPFnFfgiJRpfhoqYpeCYjyE5%2B4LoOIekYD1vp1dIZ1EoWF%2BqNMlgBZD%2BxXEYzAN2aqNmD281nAxDkQhh8FB%2FOZiXVfRUvbCEsWX%2BXiVjU&X-Amz-Signature=5efedf04cdb11c771ec6634c79672d0bbfd3f319a8a8d7b6a782fbd4bb9a13d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U54K6YO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAzeGYifKbpYjRBQKAcEyadY9kcsnI8nSCDGbbJTtZvTAiBDFC54vqUnchgLIUEG2jChqQT9cEfVNWuEyrbduTq4hyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQmiaurL18Az1SczKtwD5h2k6aoUl2rvZ6QuWwXP4A269pAAvs0XqMSVuRYxuCp2k8mWSUeLDN09qC0jpyzy6Hdj1EaNmOG%2FyMeTgJmecuygjZyn7tq7yh0igTqWnIVTQ0YT4UFbiOQAahPjAyQDlMDeuNXiYlfzs5e2FWWe3pGDU%2FAQnsQedaqrXYDYCm39tA4KWJT%2FxsvvgtUgikA9n4Qh%2BJvh%2FFrHZS7M5IziZd4syYFV628MhwP3mScdQQvcTiDrSOpWMV2DF2ppN%2Fd5VKA%2F3NDVGcqwn9EUIwXCpPNeGUfz5EGXIhreRMLS00NZjGXmNjpTUMhX4Fb9t7fGqz0o6JlYyrfJ7Gt45IVxAzlmiMZ%2F70xDfE0ACqfTcHodT3J7iqWA8%2F3RCiSGF3Wg7YHe1zBNMOD%2Bc4r%2BPEZH7kiRe09IvBQJzxSkcZtLwsi8Cz6fmEd%2F1TVskDzJbM%2FtqzSEKH1V%2BeSmmCKx6D85Oi%2Fg2dZRXhhv%2Bvti9ho%2BNKGcK7GVDq7DEMSMLhuvz8RXEPlxn%2Be9ukZSpzqQLRFYaapj4FsFiNQzD0BqzySdcSFfhZonXkFhOPBkRyjREHm7kvHMhV47QFxHxUtVODSwAp%2F5Cb8NrBfEUQmJOIGVMrSdNhicUsRDV1o3yOwwnpnQwAY6pgFlr%2FNeB%2F7FJF1rvkQJ1nIVd05MGu65soO4TnEIqsZR1LL%2FlDyLf3hAaxayTHzrzHhjL2YOVv61Eg3h6vaUpnzFbJTdYyB7erh1IkdDoI7icT5r5VdrQkPXZyVRcF6zAyJa0yNu%2ByJkHeYaYECkUkhUzNWxaiBRTH9Hk%2B7BhIXHBcn0NZDQCZ2RRwJAE%2Bm4G8SrdE2d1m%2F5JcdcLENKSsDjRYETnR%2BB&X-Amz-Signature=2062e984f37f1028751681f03c2e1abc6f953df1bc2df61d2013d9e8204aaded&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
