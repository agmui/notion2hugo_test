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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK24BVJY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrOcQkYIN8GHwMxGLd5KmEGR5lf7TycqhvfzHMyuZ%2BKgIgQKHVcLrAd0iD3GabczkQVqjzKe%2FdveVv0sXiozZdwBUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLRzApGaLLla4CXV3ircA%2Bq9F%2BWhXIJeuUCiBpBUzW%2FbTJguIvJVumaoVpwU2%2Bu9coMx%2FyAyZb9B1iHSDnH6rADcRDBOw90NYGRZe%2FswVF8PquCA%2BsfzJ1RnQJzHTNCSKbQS4zeLupb2De%2FbRHaycJVWI1EdLAzk4qpvEW0nCIU9UCnoCv9rdrn%2FvSgwkbWhZH%2FmO%2F3TLmnviDBNUYlyjQX6stVJearr1ww%2Fo8H%2FN4MQrr2dqr4VqG2l1KNA5PjQtkk%2Bb5ax%2B2Rvny5aFyuTa%2Fy9SyYfxeWOetuQ4TmdUHriWAnl0DwhK0%2BBUBEhOyAgLIZugWpsl%2Ftzaw5WMCIzD0CEh0eS7bygiqUmaEv29vQiSAAcW0ZU1yk9Wg1YdOShiG4wCBQ6Bd1sDhJX3KDm1anFnhCFn5s787KJc3%2B9Lp1t4YPb8YMLI14yLryyHB1dsDsEOfQ6C8NmFpyS1jI%2BKLcVLEzkdfUPc44QF5JVj%2FWmVpEU3wnsmLlXyynqcF1WW7pP0T%2B0qSikMuJNrwducF%2B32%2FThCUMCJigXF0%2FPjBMhzkT0afjZYAXD8wGznPNVlUJJBdUdOcmFXOQGc1OIPyOovpFTVDydd1b81LMbcD66bTJGZbPanR%2FBFjsl7OPHNX9uVXcSDGaI2Mj3MLybn8MGOqUBTQ%2FhPnNuYgeV6Efcy0C1lSql0xp0m1oGkIFa4Z0s2fe6FaSkoh5YzWYN2qdhPyXWdPWdKgHOKyMmZsbLrf6nc9LIvJRbvJvw8%2Bu1S8yYmMIQ3DIrt4tHWMKVUCV3VJprw9mPAdFCXHsYnD0gU2Wuxi%2FWcOHahaAqxlHU1bENMR1NhhfPWUqK6k%2Bwkq6jZbR8mLFPvtmaYFcB4nJ4%2BJz1vFqTpiCg&X-Amz-Signature=2f41d0b65ffe829ed64a6ed7d5148b8eaef8540592f5d8fb099a348cd70d669d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK24BVJY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrOcQkYIN8GHwMxGLd5KmEGR5lf7TycqhvfzHMyuZ%2BKgIgQKHVcLrAd0iD3GabczkQVqjzKe%2FdveVv0sXiozZdwBUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLRzApGaLLla4CXV3ircA%2Bq9F%2BWhXIJeuUCiBpBUzW%2FbTJguIvJVumaoVpwU2%2Bu9coMx%2FyAyZb9B1iHSDnH6rADcRDBOw90NYGRZe%2FswVF8PquCA%2BsfzJ1RnQJzHTNCSKbQS4zeLupb2De%2FbRHaycJVWI1EdLAzk4qpvEW0nCIU9UCnoCv9rdrn%2FvSgwkbWhZH%2FmO%2F3TLmnviDBNUYlyjQX6stVJearr1ww%2Fo8H%2FN4MQrr2dqr4VqG2l1KNA5PjQtkk%2Bb5ax%2B2Rvny5aFyuTa%2Fy9SyYfxeWOetuQ4TmdUHriWAnl0DwhK0%2BBUBEhOyAgLIZugWpsl%2Ftzaw5WMCIzD0CEh0eS7bygiqUmaEv29vQiSAAcW0ZU1yk9Wg1YdOShiG4wCBQ6Bd1sDhJX3KDm1anFnhCFn5s787KJc3%2B9Lp1t4YPb8YMLI14yLryyHB1dsDsEOfQ6C8NmFpyS1jI%2BKLcVLEzkdfUPc44QF5JVj%2FWmVpEU3wnsmLlXyynqcF1WW7pP0T%2B0qSikMuJNrwducF%2B32%2FThCUMCJigXF0%2FPjBMhzkT0afjZYAXD8wGznPNVlUJJBdUdOcmFXOQGc1OIPyOovpFTVDydd1b81LMbcD66bTJGZbPanR%2FBFjsl7OPHNX9uVXcSDGaI2Mj3MLybn8MGOqUBTQ%2FhPnNuYgeV6Efcy0C1lSql0xp0m1oGkIFa4Z0s2fe6FaSkoh5YzWYN2qdhPyXWdPWdKgHOKyMmZsbLrf6nc9LIvJRbvJvw8%2Bu1S8yYmMIQ3DIrt4tHWMKVUCV3VJprw9mPAdFCXHsYnD0gU2Wuxi%2FWcOHahaAqxlHU1bENMR1NhhfPWUqK6k%2Bwkq6jZbR8mLFPvtmaYFcB4nJ4%2BJz1vFqTpiCg&X-Amz-Signature=a1de18ac241652552af5a7695b943ef42a63cc07bf319bfa13df501c3b265a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK24BVJY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrOcQkYIN8GHwMxGLd5KmEGR5lf7TycqhvfzHMyuZ%2BKgIgQKHVcLrAd0iD3GabczkQVqjzKe%2FdveVv0sXiozZdwBUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLRzApGaLLla4CXV3ircA%2Bq9F%2BWhXIJeuUCiBpBUzW%2FbTJguIvJVumaoVpwU2%2Bu9coMx%2FyAyZb9B1iHSDnH6rADcRDBOw90NYGRZe%2FswVF8PquCA%2BsfzJ1RnQJzHTNCSKbQS4zeLupb2De%2FbRHaycJVWI1EdLAzk4qpvEW0nCIU9UCnoCv9rdrn%2FvSgwkbWhZH%2FmO%2F3TLmnviDBNUYlyjQX6stVJearr1ww%2Fo8H%2FN4MQrr2dqr4VqG2l1KNA5PjQtkk%2Bb5ax%2B2Rvny5aFyuTa%2Fy9SyYfxeWOetuQ4TmdUHriWAnl0DwhK0%2BBUBEhOyAgLIZugWpsl%2Ftzaw5WMCIzD0CEh0eS7bygiqUmaEv29vQiSAAcW0ZU1yk9Wg1YdOShiG4wCBQ6Bd1sDhJX3KDm1anFnhCFn5s787KJc3%2B9Lp1t4YPb8YMLI14yLryyHB1dsDsEOfQ6C8NmFpyS1jI%2BKLcVLEzkdfUPc44QF5JVj%2FWmVpEU3wnsmLlXyynqcF1WW7pP0T%2B0qSikMuJNrwducF%2B32%2FThCUMCJigXF0%2FPjBMhzkT0afjZYAXD8wGznPNVlUJJBdUdOcmFXOQGc1OIPyOovpFTVDydd1b81LMbcD66bTJGZbPanR%2FBFjsl7OPHNX9uVXcSDGaI2Mj3MLybn8MGOqUBTQ%2FhPnNuYgeV6Efcy0C1lSql0xp0m1oGkIFa4Z0s2fe6FaSkoh5YzWYN2qdhPyXWdPWdKgHOKyMmZsbLrf6nc9LIvJRbvJvw8%2Bu1S8yYmMIQ3DIrt4tHWMKVUCV3VJprw9mPAdFCXHsYnD0gU2Wuxi%2FWcOHahaAqxlHU1bENMR1NhhfPWUqK6k%2Bwkq6jZbR8mLFPvtmaYFcB4nJ4%2BJz1vFqTpiCg&X-Amz-Signature=2194b6b49a7b8a48d7edb22b8b9b41dd78a1d27621607f4f8b5bf2820dd142c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZFM5JD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCTS7Pmcj01uSLzmCXRwuQEjjeeuB0zSwieFYc3EA%2Bn3AIhAMpBjCFdLA%2B%2FVmgzBG0SIv0wGm5JGv5kIBjsLChZj%2Ba3Kv8DCC4QABoMNjM3NDIzMTgzODA1Igy%2B9JKU%2F7ZW9yqkXpQq3APZ7cs6H3rmNOpIachOqwtNV%2F9NxTMUOAqPtPeF2bclqCLzU0Eh7%2BVfmma2wk6BoJN%2Fw7c%2BUmDzBmKsRI5IJmfg2UwvCahijiaZgAAbRKDp%2FRFo55XVR4Db1Ua9szoODzX09Z9lYUa8bYTbLiZrzKhkL%2BiXDXyAovpRVXvNWkBXMGLHcuXjFSA0Mza0Gk3ZasQwW6XWBlaO5Qje1J83npTyBI2Njw6l0WqTYSOwxNEvHcTGFx6lmXVXHmiOZSe%2Fs%2Bx7CW1BWkJA4ncrat02GRMwnNTuRhOT6ifExWcFJ5gV5AVOK1appD4eSaMesQG%2F2BCBogRmLCLnHk4q2NN66P58WLQbhjVHV4qZOaK7DSSzxyAx02PvWYCy3xJOozr10Wv9zVWhOlJoZ4bP9aNVtZhp5QiPhEikIgnIxwXUiQBbNa7XZgxgMk6R%2Fh1C%2FeKpI%2B34hxhz6BLgahxqYre%2Bvixwcn0Jk3okvMK%2ByjoGhRSzlYflcKB1ljSZxKL6cvUNYLMYGE9vkaXjfsWER2gTAa%2BQRm0gxPqxfL23R%2F3Lt2cmztmN8E3MnVlQZTLv6aE%2FZ1RPMlbQkLwkQvcir5O9URg7qrEjQlMT7sPcFJQzpe2nrnc1%2FdGqJxBPRJEMGTCenJ%2FDBjqkAY03hnRXK7VT8wMTcigtn39E0vqAr0I0KqOd7%2Be5fxlcvaIC4xgQUDqmCToU1VBiuDqZI6E1mCR72z8Dvp3%2F7kvjTuAtPjzQf%2FbrhvSR3GxJdzupEYmIadjTlFszKiv5v27dzSlyCQ7l9OVkKfWEqAUVSVvAXMBzx4TKEEP14CGUT%2F8gS5w9Cu0C1tRlfRLFL8CiRSlizQLIZtWWLG1goyZYIsPO&X-Amz-Signature=bad22c32253f6208990a844683a91093125b2897d4b650b7fb58d0a08bcf794b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZYZ54U%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDbmfnO7CNVKOHeEBzBCB3tpUzFiCMvmsP%2BsVjLu0bc6gIgTx2Mu3kCSNYT1Ddpsc9bYZNfi9m54HNHU%2F3mN6iz3g8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDE7NluussuG1B4IXrircA9WdBZ4lT2Ae1t7P%2FCBD40P%2BqxKboAkfcIdi2a9pZ54VwHkB22COvRxDUHTQXd3uKG8eZBnPrS4m8udtkn20t6bOM142ID7vx6pxKVIVCTHLCCROg64hKBVBJcMDNvzGJa13x%2B0PbydWdEAwhLTY5BI%2BmkfS6%2Bh65AVTcDmkG5JSr7NlhG30G6pHKHXFyV6VWCtCDQMPrgJxVeti0QSQFte%2B42KQf9fSHxrnQjMQ7Yn6TaoB4ZIDzoB9GIY7lv%2BkmvtXHH6PmLg1Blr41h6lHf0irg72HgEjr2%2FsXy1JxjT%2BQFZjjZRsQoN%2FI8kG7Be4FJA6EqZNojvgJ0zsNq0JSZ1I6m0DiYnEiPT7wRB3aZjpoOux8%2F40iH8er6kMExqChq413Kan0IMd93h2SDEBqfWxjRLLlt5jLQUXGh2pNxUVDPxTdgNwFiLrJl%2B2T7JAu1jHbPlQigNXWEDN2dBQxH43T69rO%2FALqjXQlod%2Bbz071LwjqAf88NkVzq3TYwWWooQwylXEF12Jx4gGXz9oOZ9VL3iHnzyMvDme3y3f%2BXqG0C26SlkY7AU80XjsBMQAaT6O73edsY4LWcSMpqmPNcdWAFXlavg1BmviqsGIpCK9DMIFP0vDb3He5mPsMN6bn8MGOqUBp7RWxC%2BHdV3AdJR19dP%2Ff0DLP0PT4rMh%2B1yMna8MmX%2F87OvI6UMTB4tJrSnoxCvso6aKFDMq1%2B9eaxqc%2FUMAmlCm9%2B8lxTrBuwSx7dyV8Zq3TwVp1mhUHt%2B0Fe5Dd8%2FkKCaDxweRobPnuKGTyj4rJQK03oq54h3vAeFJvCSDQkvZaIW20o4HMrFzqkDmBEP1WGY%2FSNQOUJVfXpYRt4TKvHsJlOHe&X-Amz-Signature=6b18622e40b1953cd5cf07cb4bb2ec560e9289db462ef8681e05e2e2b2271f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK24BVJY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrOcQkYIN8GHwMxGLd5KmEGR5lf7TycqhvfzHMyuZ%2BKgIgQKHVcLrAd0iD3GabczkQVqjzKe%2FdveVv0sXiozZdwBUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLRzApGaLLla4CXV3ircA%2Bq9F%2BWhXIJeuUCiBpBUzW%2FbTJguIvJVumaoVpwU2%2Bu9coMx%2FyAyZb9B1iHSDnH6rADcRDBOw90NYGRZe%2FswVF8PquCA%2BsfzJ1RnQJzHTNCSKbQS4zeLupb2De%2FbRHaycJVWI1EdLAzk4qpvEW0nCIU9UCnoCv9rdrn%2FvSgwkbWhZH%2FmO%2F3TLmnviDBNUYlyjQX6stVJearr1ww%2Fo8H%2FN4MQrr2dqr4VqG2l1KNA5PjQtkk%2Bb5ax%2B2Rvny5aFyuTa%2Fy9SyYfxeWOetuQ4TmdUHriWAnl0DwhK0%2BBUBEhOyAgLIZugWpsl%2Ftzaw5WMCIzD0CEh0eS7bygiqUmaEv29vQiSAAcW0ZU1yk9Wg1YdOShiG4wCBQ6Bd1sDhJX3KDm1anFnhCFn5s787KJc3%2B9Lp1t4YPb8YMLI14yLryyHB1dsDsEOfQ6C8NmFpyS1jI%2BKLcVLEzkdfUPc44QF5JVj%2FWmVpEU3wnsmLlXyynqcF1WW7pP0T%2B0qSikMuJNrwducF%2B32%2FThCUMCJigXF0%2FPjBMhzkT0afjZYAXD8wGznPNVlUJJBdUdOcmFXOQGc1OIPyOovpFTVDydd1b81LMbcD66bTJGZbPanR%2FBFjsl7OPHNX9uVXcSDGaI2Mj3MLybn8MGOqUBTQ%2FhPnNuYgeV6Efcy0C1lSql0xp0m1oGkIFa4Z0s2fe6FaSkoh5YzWYN2qdhPyXWdPWdKgHOKyMmZsbLrf6nc9LIvJRbvJvw8%2Bu1S8yYmMIQ3DIrt4tHWMKVUCV3VJprw9mPAdFCXHsYnD0gU2Wuxi%2FWcOHahaAqxlHU1bENMR1NhhfPWUqK6k%2Bwkq6jZbR8mLFPvtmaYFcB4nJ4%2BJz1vFqTpiCg&X-Amz-Signature=d76586adfbc01ec89e662d497f9d3125d4fe29e7cc490af7ac992e7aafcd1533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
