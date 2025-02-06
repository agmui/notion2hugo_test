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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORO5D5C%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDFhNKBB0fcNUi9VkLOez75ixly53dw42zGFxNZmVp0sAiB0UpkzneYmroNbYWdo7gyXyJGj1MbL6f0Sd%2FcoIOJUJSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM%2FmvlMJnOCi8yqhMxKtwDBJvf3T78xzLEdL0GxuxT%2BzHutTCHjATXxZTNaIsmb5reHxMmhObOMpO3HUFdDAyjxJoOejxh2u6y8mp%2BDqAyfncx36rJzjDtKs7SHlTWZyMOwSIdWAAwrQMMj5%2Fl%2FcrtVwverMzSGfJdYIU0a4HTsTF%2BgU7daAUoz9%2F3%2Fuo2yS0BOM0jT754X7viPjMbw8NQVu%2FxSdoldn74I%2BVb3d9WQaX0juUB7d9ncmZwhnb%2BySQMwRgQdmGn0pPOIxnvlWM6I1vBboAhZ6Vw3%2Fphf9ps%2Fmi0H2e9bM%2BgpRqo8BwUgOBZXFWkKlsAubRq0sYVnhChq03APdB4IY%2B4xVBVh7tO%2FIa2vwci99qZFfyn5YbGhJs5S6W8ma3mAqq7ew7YMoWvBDYB%2FssCsQfKfla%2FYo4hJQ7zN6roE11RbctvJpspwM4FeP%2FKZ87R55LlSXq3sIflZVDhvCzWxsgJngVHeqcXgtTtGhfUZDU%2BFpD6zCBRbEAt6z5k4o6tat8NFunBDtUSQCib3Q0OdwvSYB%2BT6QWJYTz3APs29mtKiExozLOGym3%2FLP0UJ8PPaPyIFERjup6P8uSHaNT9keMjbr0taj08z76JsmgofC1h8QEERvEab3Z8rwx%2FSY9okFr6BHUwr9KTvQY6pgEgCsW8YCz8lz5UjV%2F5QslmbZcoWJBjLCaZmAJdOOTGzcsnRuNp%2BjDAbGOSkhQ%2F9EW%2Bz5tgDMgFA9Zx7rBtNnF09Vdsmiujvqccx2243MhobUsEBZjPWuGiqR%2FGFAewc3%2FmHdcFF0gQ1A20W2b176CswwHtDRcNcsJlawMjVncOi9gjiSSAwJOCZzmj%2Fb19gr66Co1WHgagLI7hOvd7RijiIPQukCoH&X-Amz-Signature=9fdd31c336a248ed2aa4e8c16f92a7004c927230881efd25d0150532d3a59d40&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORO5D5C%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDFhNKBB0fcNUi9VkLOez75ixly53dw42zGFxNZmVp0sAiB0UpkzneYmroNbYWdo7gyXyJGj1MbL6f0Sd%2FcoIOJUJSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM%2FmvlMJnOCi8yqhMxKtwDBJvf3T78xzLEdL0GxuxT%2BzHutTCHjATXxZTNaIsmb5reHxMmhObOMpO3HUFdDAyjxJoOejxh2u6y8mp%2BDqAyfncx36rJzjDtKs7SHlTWZyMOwSIdWAAwrQMMj5%2Fl%2FcrtVwverMzSGfJdYIU0a4HTsTF%2BgU7daAUoz9%2F3%2Fuo2yS0BOM0jT754X7viPjMbw8NQVu%2FxSdoldn74I%2BVb3d9WQaX0juUB7d9ncmZwhnb%2BySQMwRgQdmGn0pPOIxnvlWM6I1vBboAhZ6Vw3%2Fphf9ps%2Fmi0H2e9bM%2BgpRqo8BwUgOBZXFWkKlsAubRq0sYVnhChq03APdB4IY%2B4xVBVh7tO%2FIa2vwci99qZFfyn5YbGhJs5S6W8ma3mAqq7ew7YMoWvBDYB%2FssCsQfKfla%2FYo4hJQ7zN6roE11RbctvJpspwM4FeP%2FKZ87R55LlSXq3sIflZVDhvCzWxsgJngVHeqcXgtTtGhfUZDU%2BFpD6zCBRbEAt6z5k4o6tat8NFunBDtUSQCib3Q0OdwvSYB%2BT6QWJYTz3APs29mtKiExozLOGym3%2FLP0UJ8PPaPyIFERjup6P8uSHaNT9keMjbr0taj08z76JsmgofC1h8QEERvEab3Z8rwx%2FSY9okFr6BHUwr9KTvQY6pgEgCsW8YCz8lz5UjV%2F5QslmbZcoWJBjLCaZmAJdOOTGzcsnRuNp%2BjDAbGOSkhQ%2F9EW%2Bz5tgDMgFA9Zx7rBtNnF09Vdsmiujvqccx2243MhobUsEBZjPWuGiqR%2FGFAewc3%2FmHdcFF0gQ1A20W2b176CswwHtDRcNcsJlawMjVncOi9gjiSSAwJOCZzmj%2Fb19gr66Co1WHgagLI7hOvd7RijiIPQukCoH&X-Amz-Signature=72e68e8fa443d8b5091a2f63f8935d2c302fd590a92e2248f60d2db4d0a21ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJCDG3U5%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC6W%2FXScbt4bn%2BzGvIe8y02toDCEcbTwdJheXf7sU8O0QIgQ6WSncHrbWAEgRdQHHf3hyjM4KGY0Vfhvf7dNVkrIZUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJuwFDQsIf1OyXaGwircA%2F%2B9qivoYUQMG52xc0X9ENC26FXMp5Ss22hiOQru8iXvxQPRvujr69zpq2T1BTN1ctIUSe5OYxh%2FaC1eQwx65y6BGk68N%2Bu%2FgIMQgJwYgZwsdYpw1x5tcmKn%2Bfup13NNXz7iAVNHbmiwQXxHyXwKS%2FdDgQ0OZHo2GU2K657qeEelW6WpTB7fEfzrC5ZnYswZ26Oo3k%2BWKaoB%2FNEj9H%2BgJsbQXxSfMhCu9sBEPPswBQ6Uj8zEOLGVjSY0M0oQiyBsUlUsYdJb0Lo04BXrME3m08iyTHaAvxlqsdtZS15gKKFidLZ0oARFBHAPlhQgqF0BtliL1CX60OLivKV8JAuAGbCG27pfSLlT9i4lpSRypS6NkVqBdBTNhVIIHk6Iovs%2Bxyrw2ueIEds7O%2FKJof6qO99KtzXRqxey2PeCJp0tHcA9%2BLys%2BzWvHCx%2BQ4ihM5o%2BQaMdG%2B49OPm%2F0QmBj5%2FSYgPRiq9u1%2BdBy8VQIkdR0VGi288qXfE1FxZO49Xy8klPI85Pz3kDZ5yYEEO6A6cZHZIoNsIIaOeoxlePyYF1kBJylzMjIsWQcmtEvxuPC7Wt4F3WTLS5ZehfG6sxneGPk%2BQ3r4NumMqdzgSKAh6PG2MvzQ4ZdkMsN6v9fs3tMMPSk70GOqUBxx11Igk9RG%2FEsJaqd9XA80p5%2F%2BFjO4CCnyt0c8F3IC%2BSQyums7J%2BksPcLoacJ3c4C1mavOKh%2BBP%2B0u9Cshqw5TI9ZWZBdWC0IOXa5VAEHg7%2FvvPcEFmDKOIMcyUKN5vQPHD1UNjcexM4PyKtZdajlbx8qNlmbKxFN1OqMW7NhiPa5SQNpOtsYOmlp0hmzGFFYZ8YjBf2uPsXalGgHdk85dAWHkDV&X-Amz-Signature=c1c7cf72dd86225496b0f3274e340ea03f540801e22e123b9bf1af7b97508436&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLG5DHZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDEroSoZ5Y6wAtmYNymh1TI6iaEz9EM4PT8kGLYFG0Z8AIgdgZUm1XjlYbgGhDJHemyKwqZbGJkNBlBwA0V6kid8LAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMQbnloIz3133XZY6SrcA20ibG3ojAEyWz%2BqfrxGT%2FMDtNJhjAeP4Vvh5OwxoyWlYH6kKMynUKwOnKKc4juaQ%2Bk3wJhwQq%2BkcwbpwbeijV%2Fm3Z5lR7yo86s%2FZOKtX1y4GxlxXfrg95llT2iKXg576tYpGM443G5TSDLv5rL7cQWldPGi0NR2zsnWuezizAdevTvXh9D0c8pWIG7BB6eiHlyvtQlQYKfyNrX5o0OdxV%2Bl2PcbNw%2BmQMGi3Dc4m%2BovNMd%2B%2FsrbocdHNePOWaFV%2F9JPM7NmjQ9qBXaVituvyt96sQUSNCCyfE35nwgYsahyes%2FIhhLR9dxXr0dDYjAEDjpzgBHPx%2FB0b94SGuvpeLJkWMAeiXg%2B2tzUWAgRE84wW8GTyJ7QZ1WE8g%2FXhrdW8C5M2nJc8YcmE8assFtbfqbH4Mc%2FoJVA68GJa39EwuCWHWMFuQmO8dgVV0WBs3g6cdvKcEp9yTZo6YXkAGZ8DcZJv7S4HezpkCGUUowIdKRfAlGFLsUPtJ4Z5ZmMWSwl%2FlPJQwCsMLfaiAAn4dsQ4XkQLKEMvt2YnwG%2B%2FZes9%2BKQVk%2F%2FxZkfNicaGShgdxKxR0JoSN2Sx4j2AliNQio8hE6YagUe9Uzxe%2FHyAa%2F%2FCvoSnhnC0piVwBdW0OOKMLPTk70GOqUB7zVqKGzyFuo%2Bi99hUU742LgZP%2FWYu7ZC1Ojmz6b1YucEabbgkT1bl7rzEcrIK8MR66QIKEd38wXEt3%2FJw5KGeVMcMui4HyPRrtUILu84HCx2Y3sCFOUQcxByvYZeoAPlH%2BlD0PxJ2A%2F9WuJjyvoGG%2FZ%2FBr8TsieOERxmo6ccqRV11AVxyWAEjda5zpz52jtzw9BHlkDmziIK1zTosG5HX76x6onK&X-Amz-Signature=5b89b4f2e9cff3aa4a1fd5d926f5a2f92147624138e40aac54ace746606ac9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORO5D5C%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDFhNKBB0fcNUi9VkLOez75ixly53dw42zGFxNZmVp0sAiB0UpkzneYmroNbYWdo7gyXyJGj1MbL6f0Sd%2FcoIOJUJSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM%2FmvlMJnOCi8yqhMxKtwDBJvf3T78xzLEdL0GxuxT%2BzHutTCHjATXxZTNaIsmb5reHxMmhObOMpO3HUFdDAyjxJoOejxh2u6y8mp%2BDqAyfncx36rJzjDtKs7SHlTWZyMOwSIdWAAwrQMMj5%2Fl%2FcrtVwverMzSGfJdYIU0a4HTsTF%2BgU7daAUoz9%2F3%2Fuo2yS0BOM0jT754X7viPjMbw8NQVu%2FxSdoldn74I%2BVb3d9WQaX0juUB7d9ncmZwhnb%2BySQMwRgQdmGn0pPOIxnvlWM6I1vBboAhZ6Vw3%2Fphf9ps%2Fmi0H2e9bM%2BgpRqo8BwUgOBZXFWkKlsAubRq0sYVnhChq03APdB4IY%2B4xVBVh7tO%2FIa2vwci99qZFfyn5YbGhJs5S6W8ma3mAqq7ew7YMoWvBDYB%2FssCsQfKfla%2FYo4hJQ7zN6roE11RbctvJpspwM4FeP%2FKZ87R55LlSXq3sIflZVDhvCzWxsgJngVHeqcXgtTtGhfUZDU%2BFpD6zCBRbEAt6z5k4o6tat8NFunBDtUSQCib3Q0OdwvSYB%2BT6QWJYTz3APs29mtKiExozLOGym3%2FLP0UJ8PPaPyIFERjup6P8uSHaNT9keMjbr0taj08z76JsmgofC1h8QEERvEab3Z8rwx%2FSY9okFr6BHUwr9KTvQY6pgEgCsW8YCz8lz5UjV%2F5QslmbZcoWJBjLCaZmAJdOOTGzcsnRuNp%2BjDAbGOSkhQ%2F9EW%2Bz5tgDMgFA9Zx7rBtNnF09Vdsmiujvqccx2243MhobUsEBZjPWuGiqR%2FGFAewc3%2FmHdcFF0gQ1A20W2b176CswwHtDRcNcsJlawMjVncOi9gjiSSAwJOCZzmj%2Fb19gr66Co1WHgagLI7hOvd7RijiIPQukCoH&X-Amz-Signature=7eea463179f2e8c3f832433a312fbe985a37b405efee95774afa26d3b2ff3776&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
