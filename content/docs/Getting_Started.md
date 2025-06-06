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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYTI3O6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAiM1UGN3Q1r8gjZTYxEX0C72y2S94HBURRCI9XTxKIQIgLjtYSvVRtsterHUbYbSlU0O%2FQsK36R48R%2B6P3ZHnPnEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI3KFWwk0J1u08KSzyrcAzigc9h7lKRuV5GPtv74Jp23flXxaWwr9CCILGj7hJsH8lnfajDA5rbIpth2CInT%2F2hju8d6E0UmD5dkhIAcfC7j7ScHZnOPl17EhSr3Kd3IMp4%2BgPcdbtYpRBD8wBOuyuTA69dvrv0dHJtR349dLBSrJM2%2B9xot5dSlWtcX691S3c5UdOEvMfbWSWMjXgn58LxXDY0S4SZIIwGonVNiqvYXvdCutlKENiwS%2BAxiinDmKzTHLq4grCq3uzgvv08DMjhdSzQlokDEzUidFeZJVeA%2Fe4L%2FIfOnW2DZq5hfaCl6l32n0boSuxV0e1xjC%2BlEHscg5Kdz0NcfutYQxZmNO6RujKflpfOLvQ5SlCGEaHyxbJbw1M5H%2Fg8663qvdOefikPQytRhTq66oXvjOzJyBM3n0KiPo1%2FO3aqlFyUZ2yPJa9qCB7KhTREcRNcpBibclOTf0tBluVpJnPZMBqbqS8iTi6EYbV6Nw0u%2BNHl3M1vpue%2F4CrB4nm9%2FsjAQybfZFtF9KzVHFF0MQAFnlfyYEBgmu6n9SA82rAb%2Boe5sarHOoOw99lJ%2FyVqrYokB%2BFe3pTRDK%2F4nRP48s%2F7ejLNhvV4KQOGRNqgZJd%2BssdgmOmYID87fsc0XpjJSfanlMOShjMIGOqUB7wYhHHQqYwQv%2Bqh9VSoKgV3ZG9YdKDcoyAn0fWFpLPM16zEKknc0OsAZ9vsyLE85O%2FiQ6F7wwd7FlDeIw5XmKZg78wYfBSaEykzFm%2FQIPanwwZe98Cqvecm79Yjwlw46EyDw8Hi2diYR99trKrgTiyDjH5xEJRy%2Bb4oyi4DE0qdpPnjjbfV0kZU%2FvBuq7fLSpt764ypjbW%2B0d6qf2Sxm4SpYf1fC&X-Amz-Signature=38a81195431169b21aef0469809f0ff356076e4b42de52396b6fbf76e563a2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYTI3O6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAiM1UGN3Q1r8gjZTYxEX0C72y2S94HBURRCI9XTxKIQIgLjtYSvVRtsterHUbYbSlU0O%2FQsK36R48R%2B6P3ZHnPnEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI3KFWwk0J1u08KSzyrcAzigc9h7lKRuV5GPtv74Jp23flXxaWwr9CCILGj7hJsH8lnfajDA5rbIpth2CInT%2F2hju8d6E0UmD5dkhIAcfC7j7ScHZnOPl17EhSr3Kd3IMp4%2BgPcdbtYpRBD8wBOuyuTA69dvrv0dHJtR349dLBSrJM2%2B9xot5dSlWtcX691S3c5UdOEvMfbWSWMjXgn58LxXDY0S4SZIIwGonVNiqvYXvdCutlKENiwS%2BAxiinDmKzTHLq4grCq3uzgvv08DMjhdSzQlokDEzUidFeZJVeA%2Fe4L%2FIfOnW2DZq5hfaCl6l32n0boSuxV0e1xjC%2BlEHscg5Kdz0NcfutYQxZmNO6RujKflpfOLvQ5SlCGEaHyxbJbw1M5H%2Fg8663qvdOefikPQytRhTq66oXvjOzJyBM3n0KiPo1%2FO3aqlFyUZ2yPJa9qCB7KhTREcRNcpBibclOTf0tBluVpJnPZMBqbqS8iTi6EYbV6Nw0u%2BNHl3M1vpue%2F4CrB4nm9%2FsjAQybfZFtF9KzVHFF0MQAFnlfyYEBgmu6n9SA82rAb%2Boe5sarHOoOw99lJ%2FyVqrYokB%2BFe3pTRDK%2F4nRP48s%2F7ejLNhvV4KQOGRNqgZJd%2BssdgmOmYID87fsc0XpjJSfanlMOShjMIGOqUB7wYhHHQqYwQv%2Bqh9VSoKgV3ZG9YdKDcoyAn0fWFpLPM16zEKknc0OsAZ9vsyLE85O%2FiQ6F7wwd7FlDeIw5XmKZg78wYfBSaEykzFm%2FQIPanwwZe98Cqvecm79Yjwlw46EyDw8Hi2diYR99trKrgTiyDjH5xEJRy%2Bb4oyi4DE0qdpPnjjbfV0kZU%2FvBuq7fLSpt764ypjbW%2B0d6qf2Sxm4SpYf1fC&X-Amz-Signature=f214cc3c01686860715dd9cfa574226a4dd73076f543e5e955e38fc16a5c4b83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYTI3O6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAiM1UGN3Q1r8gjZTYxEX0C72y2S94HBURRCI9XTxKIQIgLjtYSvVRtsterHUbYbSlU0O%2FQsK36R48R%2B6P3ZHnPnEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI3KFWwk0J1u08KSzyrcAzigc9h7lKRuV5GPtv74Jp23flXxaWwr9CCILGj7hJsH8lnfajDA5rbIpth2CInT%2F2hju8d6E0UmD5dkhIAcfC7j7ScHZnOPl17EhSr3Kd3IMp4%2BgPcdbtYpRBD8wBOuyuTA69dvrv0dHJtR349dLBSrJM2%2B9xot5dSlWtcX691S3c5UdOEvMfbWSWMjXgn58LxXDY0S4SZIIwGonVNiqvYXvdCutlKENiwS%2BAxiinDmKzTHLq4grCq3uzgvv08DMjhdSzQlokDEzUidFeZJVeA%2Fe4L%2FIfOnW2DZq5hfaCl6l32n0boSuxV0e1xjC%2BlEHscg5Kdz0NcfutYQxZmNO6RujKflpfOLvQ5SlCGEaHyxbJbw1M5H%2Fg8663qvdOefikPQytRhTq66oXvjOzJyBM3n0KiPo1%2FO3aqlFyUZ2yPJa9qCB7KhTREcRNcpBibclOTf0tBluVpJnPZMBqbqS8iTi6EYbV6Nw0u%2BNHl3M1vpue%2F4CrB4nm9%2FsjAQybfZFtF9KzVHFF0MQAFnlfyYEBgmu6n9SA82rAb%2Boe5sarHOoOw99lJ%2FyVqrYokB%2BFe3pTRDK%2F4nRP48s%2F7ejLNhvV4KQOGRNqgZJd%2BssdgmOmYID87fsc0XpjJSfanlMOShjMIGOqUB7wYhHHQqYwQv%2Bqh9VSoKgV3ZG9YdKDcoyAn0fWFpLPM16zEKknc0OsAZ9vsyLE85O%2FiQ6F7wwd7FlDeIw5XmKZg78wYfBSaEykzFm%2FQIPanwwZe98Cqvecm79Yjwlw46EyDw8Hi2diYR99trKrgTiyDjH5xEJRy%2Bb4oyi4DE0qdpPnjjbfV0kZU%2FvBuq7fLSpt764ypjbW%2B0d6qf2Sxm4SpYf1fC&X-Amz-Signature=cebf5a55864019ce1f4f0df1875fe0033bdb10e2b99f6f045c3b45b746481d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIIS5B5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2Zo2tymc8SWGiJqZAMCcmhT4oml2415iwra7HtTPSvAiB9%2BifNkt4hfw%2BHihKP0zUi4ZgCjHZoyjseQqQJ%2B%2BspACr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMDBJugQOBXl4pRwVKKtwD6qVQqH3cYRXA4zi3Nv4DliTgqJXbaXD88xsVVj%2Bl3fmbmBq5mCa%2FTEUk6o3uJ%2FL6BcPeaBzZhFtmIjCp12HJVF%2FQAmdh4rRWaFjfQSeQwohgZbfnYUpzPhg0pIXADj0z1aoleih0vRozva7th%2FVMj54Y9T%2FYNcp0AVL79w9ZpBNPvv8zwwQ%2BFmEEBXbXH0ic4B91KxRJ5IggwaUnMVtmgqYAAXCa9Fg1vNcTR335QKHBG4dtlB7JUvJShxkk84bTQnkuaE3MSE9ho5MjjFyOJprLJuV1hgdgfah0rIXPUp7mzhBfljAikSQHamK8cczmjXFV2j22kOdB8lIoqfpVVih5C2k1QPh3yfwLu%2FDsGlFATAFtxlklyAbsMB2uiYqcIaLTdbfGphJPJdqZERf9YFK5cPrnS4kKpZ48QPjHCh0r0rwy0n3aorZdfb%2BF1yeKthIoyWhMaUzVPHbhNYszaPALVFgWm3ZjJA3IFXLmFQ7UEnAkNa8Twjg7XJiqSirgWOUQpO7agehxnypkhn5JuYy0u5IiC5rXcZWwF5EM4BrVT3v98SN7JS5egBJO%2Fr%2BvxD726UdclnrH7Z98Uv6w57M28y3p23mQbMx%2Fbc%2FrIus2TKS0uYnBX%2B%2FgDacwzaGMwgY6pgH%2F2MlM7bDR36kSIaTB%2BK1SU7wZSUQOLGY%2BKWzUOF5ts4TT6uXlBWDuOqx%2Fpl2hCrJ13PSZiKNLRnHm9BWARcqj2VtJezUkE0Zr5kIyvY%2FUQUFKzEW6cPgHLLxyey%2BW8pGJrUl07grZdBA6Xm07ADyFKOWKvwoQsa0wJW5Wt6ISeNY7w2Vt73FqY%2FpCJ98YufAv4Biv%2F3FrAqLNp9m%2BGlJ29ZCqckhk&X-Amz-Signature=c2a9653ca174fbe39c251cca31848f2f51691fa66cd9aec12b80873b6578678b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVX3MMB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDHO4My4aB6sxAmXeJB8oNs6W1jASlykHeLaa9gNw5VAiEA5Jdfl9kvEtopR5edD5zrbszdEgS9dyuDFNXHpBI%2B2I8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAEtYekjGruq2IvsQyrcA7yEhdLuFd2O4b12tiMt%2BAYo2fC9H0BolzjuUS6%2BznTdxdWrFkqS5Tk%2FRtjPRjKb%2FvYjz%2F1yCmVmC7Vb5tZBUM9%2Fbor3spNk72%2FAIaeAzENJndxjUkmrDf13narQFpHAJicQEkEoeLHKwuaXSuVN10IyFQoT0p71%2BmxzYd9X7ZiKjwELio7oA1ypNeagieeaUj7QDRSbfIMs2qbfl%2BFf29cTah6HxnZsJtsWD7FkUvVrsTPIJIUHIQbvftxGMZcQ944KqWFdA3OKvxrtQfkSFlJIPQNZifdFcnZP1hqyN7XNQSduaftH7oQqIxv77CWEvzdXZfr9TbgBgpfRkMVkaXB%2FqIvtvM65GvX4CEwpU4n8xOSmruXdSxZRfVkTmKCbw09PVIw45MVOrq2tTCimbSU%2BLM8dKZZzCVZyP%2BSk5MBoRmnEoL1%2Fnl%2Bb0LDK1V%2BsVm7JJ%2Fmd3NnNFMTLXu4k5LTCzRbENRoXwjCVn8n6I1fyjeYHuKe1zVaGK4S0HDpc%2FWnKkXV6pBpyzXIWmBZsBWM5icOjQbVxa2o6m4qJZOZiUZfH0JK5mXdtEmfDCjNPr8E4OXyfWmRU8Cg6pyv6DT3KEyg6OVpXU27ciRswokSfakXGhKY8HBeUsGHNMP2hjMIGOqUB3GvGuVbgFyYno2lca%2F0rowacbFG%2BTuzdMGmXwDnANssTanSRaq1PtVk%2Fz0C28oS1Uz6JCviUqkPNMQweVoidt9fqQQZ3TkFbZbLFjT%2B%2FJ4xoQzweYXzsv41s4gGszBg3bCkDTzYgDcFOLbq8oTDqaqw8xADGsNxq0uEMxisX6IJYMmZBIaq9kAvtCIl%2FRuLDXDTK8%2BfByrUdYglPglhBSITcoDYk&X-Amz-Signature=740fc81b8f5511cede509e89f1b56c4d137129256ea840937c9e90b8de5eb464&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYTI3O6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAiM1UGN3Q1r8gjZTYxEX0C72y2S94HBURRCI9XTxKIQIgLjtYSvVRtsterHUbYbSlU0O%2FQsK36R48R%2B6P3ZHnPnEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI3KFWwk0J1u08KSzyrcAzigc9h7lKRuV5GPtv74Jp23flXxaWwr9CCILGj7hJsH8lnfajDA5rbIpth2CInT%2F2hju8d6E0UmD5dkhIAcfC7j7ScHZnOPl17EhSr3Kd3IMp4%2BgPcdbtYpRBD8wBOuyuTA69dvrv0dHJtR349dLBSrJM2%2B9xot5dSlWtcX691S3c5UdOEvMfbWSWMjXgn58LxXDY0S4SZIIwGonVNiqvYXvdCutlKENiwS%2BAxiinDmKzTHLq4grCq3uzgvv08DMjhdSzQlokDEzUidFeZJVeA%2Fe4L%2FIfOnW2DZq5hfaCl6l32n0boSuxV0e1xjC%2BlEHscg5Kdz0NcfutYQxZmNO6RujKflpfOLvQ5SlCGEaHyxbJbw1M5H%2Fg8663qvdOefikPQytRhTq66oXvjOzJyBM3n0KiPo1%2FO3aqlFyUZ2yPJa9qCB7KhTREcRNcpBibclOTf0tBluVpJnPZMBqbqS8iTi6EYbV6Nw0u%2BNHl3M1vpue%2F4CrB4nm9%2FsjAQybfZFtF9KzVHFF0MQAFnlfyYEBgmu6n9SA82rAb%2Boe5sarHOoOw99lJ%2FyVqrYokB%2BFe3pTRDK%2F4nRP48s%2F7ejLNhvV4KQOGRNqgZJd%2BssdgmOmYID87fsc0XpjJSfanlMOShjMIGOqUB7wYhHHQqYwQv%2Bqh9VSoKgV3ZG9YdKDcoyAn0fWFpLPM16zEKknc0OsAZ9vsyLE85O%2FiQ6F7wwd7FlDeIw5XmKZg78wYfBSaEykzFm%2FQIPanwwZe98Cqvecm79Yjwlw46EyDw8Hi2diYR99trKrgTiyDjH5xEJRy%2Bb4oyi4DE0qdpPnjjbfV0kZU%2FvBuq7fLSpt764ypjbW%2B0d6qf2Sxm4SpYf1fC&X-Amz-Signature=95e6885fb7584b094824ac760104ebc4ceeab4454de07e3363bccd9f3ba57d40&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
