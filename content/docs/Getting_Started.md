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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSFLM3VV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCHfgCNBamWOXUHXFjJtKwcfqMj2d2QXvY4ikCVYYIdXwIgfd%2FOMnTiPAiU6mqgHGBXLeEgxJ7jedWc6VH2M9zOAosqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrAoALdM%2BPKH9WbSyrcA8tGk7zfAHJ9f9Ah3qrMhSYa6OuCb13CA8VgCx7aiunaGXfLNEpC77BLYbLGfCADxtE3Wzvqpzk5QOpRDHcJbdklsP9mNwkbVIf1zpyGzRtpwjvdDFUd0LgL1AgbA1YzGyg1hFS0kl%2ByAmOAib3QcIRPN6ZGuKFjskO7w%2F3hl1He4W%2F2QDamaPEMUjnd7MFIM%2FnxINIcVApXd6GbpoWZ4O8QSjkRa1fPdBtiztMVrq89UDcR2Bt83J9aKB9DCK1iFTQITrcjddumao2B%2Bh1TOkIo6gpQB18MKy8luxrmizJ5pB7jS4bs%2FSkb4ehDepUntUs0UYPzrYXW184H6lkuFeEV549BmDmTQL24SQ36%2FCqTZR9fCu76XGYAX7vJ9LaKgddqVBjPoNReO8JUTGnzltTahTGZrnEegdwv1ifAL79VIDf9h19vdf9Y5eteRyNtdQIMNAN2SkqpvJtOYJlrVtVsh0Xyi9nkX87egnCAMM%2BkfYSvyyN0JYENgsyZViXzyDaBpcZxWdriBn77yAYxXdIye5RKt4ysMy1UCHW33dy8z7q4FXv4GWzPLxEG5IcoBif0LDVVE7li91tdl89GEcRQ5GOfTEvCeqm0XTelhojAGywMBdOcLANeLHQSMMWYu8EGOqUBBNfdGI9aHoxUWBuy4stzU5LCQucekeowngF1cY6r03or2n7kx93KBeeKY4Ca75youTAWTOQzWhBWaGOpWdYSXYQFVo%2BLOvTyb6L5arcHbrn%2BOnBkpCIIKRWV%2FinJmp78i%2BLtCQ5NvlpbWaaDszXpFjCt6n57apooUrrWsojMLSM8pUnyjL8iXh2jN0Ck9LBj1svtsOtW0BcW7SKqvyDUXq3QAKde&X-Amz-Signature=0b7196f589e1ab213d6ca4e5351d078cf1f585f7171dc8a386c1c5f98f0ea129&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSFLM3VV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCHfgCNBamWOXUHXFjJtKwcfqMj2d2QXvY4ikCVYYIdXwIgfd%2FOMnTiPAiU6mqgHGBXLeEgxJ7jedWc6VH2M9zOAosqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrAoALdM%2BPKH9WbSyrcA8tGk7zfAHJ9f9Ah3qrMhSYa6OuCb13CA8VgCx7aiunaGXfLNEpC77BLYbLGfCADxtE3Wzvqpzk5QOpRDHcJbdklsP9mNwkbVIf1zpyGzRtpwjvdDFUd0LgL1AgbA1YzGyg1hFS0kl%2ByAmOAib3QcIRPN6ZGuKFjskO7w%2F3hl1He4W%2F2QDamaPEMUjnd7MFIM%2FnxINIcVApXd6GbpoWZ4O8QSjkRa1fPdBtiztMVrq89UDcR2Bt83J9aKB9DCK1iFTQITrcjddumao2B%2Bh1TOkIo6gpQB18MKy8luxrmizJ5pB7jS4bs%2FSkb4ehDepUntUs0UYPzrYXW184H6lkuFeEV549BmDmTQL24SQ36%2FCqTZR9fCu76XGYAX7vJ9LaKgddqVBjPoNReO8JUTGnzltTahTGZrnEegdwv1ifAL79VIDf9h19vdf9Y5eteRyNtdQIMNAN2SkqpvJtOYJlrVtVsh0Xyi9nkX87egnCAMM%2BkfYSvyyN0JYENgsyZViXzyDaBpcZxWdriBn77yAYxXdIye5RKt4ysMy1UCHW33dy8z7q4FXv4GWzPLxEG5IcoBif0LDVVE7li91tdl89GEcRQ5GOfTEvCeqm0XTelhojAGywMBdOcLANeLHQSMMWYu8EGOqUBBNfdGI9aHoxUWBuy4stzU5LCQucekeowngF1cY6r03or2n7kx93KBeeKY4Ca75youTAWTOQzWhBWaGOpWdYSXYQFVo%2BLOvTyb6L5arcHbrn%2BOnBkpCIIKRWV%2FinJmp78i%2BLtCQ5NvlpbWaaDszXpFjCt6n57apooUrrWsojMLSM8pUnyjL8iXh2jN0Ck9LBj1svtsOtW0BcW7SKqvyDUXq3QAKde&X-Amz-Signature=3df38e57d2b0ff95157e127578863ba468ef6ef2157ab550d3bba30be21a7f18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSFLM3VV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCHfgCNBamWOXUHXFjJtKwcfqMj2d2QXvY4ikCVYYIdXwIgfd%2FOMnTiPAiU6mqgHGBXLeEgxJ7jedWc6VH2M9zOAosqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrAoALdM%2BPKH9WbSyrcA8tGk7zfAHJ9f9Ah3qrMhSYa6OuCb13CA8VgCx7aiunaGXfLNEpC77BLYbLGfCADxtE3Wzvqpzk5QOpRDHcJbdklsP9mNwkbVIf1zpyGzRtpwjvdDFUd0LgL1AgbA1YzGyg1hFS0kl%2ByAmOAib3QcIRPN6ZGuKFjskO7w%2F3hl1He4W%2F2QDamaPEMUjnd7MFIM%2FnxINIcVApXd6GbpoWZ4O8QSjkRa1fPdBtiztMVrq89UDcR2Bt83J9aKB9DCK1iFTQITrcjddumao2B%2Bh1TOkIo6gpQB18MKy8luxrmizJ5pB7jS4bs%2FSkb4ehDepUntUs0UYPzrYXW184H6lkuFeEV549BmDmTQL24SQ36%2FCqTZR9fCu76XGYAX7vJ9LaKgddqVBjPoNReO8JUTGnzltTahTGZrnEegdwv1ifAL79VIDf9h19vdf9Y5eteRyNtdQIMNAN2SkqpvJtOYJlrVtVsh0Xyi9nkX87egnCAMM%2BkfYSvyyN0JYENgsyZViXzyDaBpcZxWdriBn77yAYxXdIye5RKt4ysMy1UCHW33dy8z7q4FXv4GWzPLxEG5IcoBif0LDVVE7li91tdl89GEcRQ5GOfTEvCeqm0XTelhojAGywMBdOcLANeLHQSMMWYu8EGOqUBBNfdGI9aHoxUWBuy4stzU5LCQucekeowngF1cY6r03or2n7kx93KBeeKY4Ca75youTAWTOQzWhBWaGOpWdYSXYQFVo%2BLOvTyb6L5arcHbrn%2BOnBkpCIIKRWV%2FinJmp78i%2BLtCQ5NvlpbWaaDszXpFjCt6n57apooUrrWsojMLSM8pUnyjL8iXh2jN0Ck9LBj1svtsOtW0BcW7SKqvyDUXq3QAKde&X-Amz-Signature=c896e28d15cc6d7780a413c4947302c4f4277eea496df15d8f4b7551c83b3aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5RW2SY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAdv%2FAz0m3HnhWuKcHuEjY09HpQOeH5n7athMHCAabg4AiEArC0RiZPZBOpkOCIhAeVxkbtq%2FPnxQIZ32GrEOj%2B1aacqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIBdFk0nywr%2FqFDbCrcA75fybUv8p1ZU4TEAsYsS3mGyM2fvGa9DOyS7qnYf4Y9E1ITzfRBgDGKrtE6iHxlijMDQpBB1uOLfUVKG5%2BmXt%2Ft636rruBU9GnOptHELbcFzjKjtM%2F9syr%2B%2FNHHt368Sn4nlpMGzdiP1sgq0aLkCYKAOM4e%2BJDzxpWMNPlS%2BvWRfQetY4DHvxvd2u1PWetSZe7VAO7l%2BhNIaG3OVv1QleYUwJIXYccN1iuVeapW1Ow5sOzKSyWqC%2FkSOqZfv%2B6ZxRFBCXJM%2Bt2vb9I4hyap9bBq26zwo804dnw2fcP1Z01nkuPaPMb%2B%2B3G%2B%2BlybkIWu3%2BntaZYXI8M70xcDmPsLbgZU%2BEzNMprvPInmlXo7qicyNm1vNIgSEZWBkmh1N0UFCCnsOyA5%2FjEcOvz1djOKBpVuI69q22sw6X7daAppUDA6FzDc%2F0yqXap2HxH1QhWn3cgRWT0DqUVP42qym%2FouaXP7qrmwJbAb3255o7JgNeyprT5oc7gCvOgHWH6tD7xmgJAfkPJ3jIU7oQBjF%2BWUaiYxfVLduiQga2xxKzgc8fjaPvSTVsF29hDDRshlNnIUKVV580ehi0pvvnJobsL8fgzlbHnfVGm13eoGK4zTERp7LPC4j1iWZhfMeRFNMO32usEGOqUBGVE4Xb1B2lLz67Hx7XPgoZVHITIK1EqXxgpT8lmAOG9vnSSVk65ZCj1tOclGpa%2B4JlcPpmvUp0rg%2Bw9AWV%2BMPyM%2FMpUtoUnePwiBly0KbKpQS0JipI%2Fn4fcQvfTsRKpMsYcBMAI5PoX%2B6p3ntHnOS69MxFvgZIWvCxqZDbji6UaVxvzJ6CZx7JF0CWF4UDsW3u2q4P4h%2FXhL2Tnbj3aWZUxnkKjq&X-Amz-Signature=a05d4d80363aeca568245578adaad2c2d598000d13866fce5c8925898cc661be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFK5YIPX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIBB%2F6WCF8jq5PUFTH7LXZ5YBaAjCbMVHDmFudhXSxINmAiEAwoilyl4DR%2FCttO1hBBM9IkAndrvTEWGDCo%2FH8fK2js0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt%2FdgxppkDXQSGAeyrcA2j%2BP5KI9v2EPj2LVNevi%2B7eSY7Kz74TM8Qiwgjsbu2ARfqw7VDGDlonCc8C7fke1nhNHs6RkPcOXLUae1SZphXgW4Oa3jBZvH%2FrYaQZVAwZy1sQDw4VVXxqiLFDGfe6xDGkB05v3YaD%2BsbwdKrbFQswtUwWxAH3qiWGu2eACecobtaW3J9%2B9LcApzAfmBxZb%2FgA9ssU4aXI6iq8%2F58sc0Palk7V6byXo7g2viZ%2BZN2nXkeTmQUazbDG6fhWs5t5y4wUb8j7yFqsnvHsWIuvo7nTLJrHbHIRBzkKqAF81xAfs80VOdvNf5AXjWu%2F6tMR42xin%2FX2L%2B3%2FQ4j6PFa0%2BLEq4M4F%2FvnQnNl72VjfIfYXdrPF8t0RHKSHJCQ0zmUPUymWn%2FrZyxzPvYgjv%2B2NBt49RdDoZsq1vfvXzQOkEvSLKJL6lE7nyYR%2BQhkXgwDZGxP4e5I3uMT%2F%2BtY9jo7qZwN839iuxlTWNCwwQjl1K8NUiLGo0JIExbpG9HuJonSKpK2fs1Y1RlSVrTODZYxeVLTlRjzQbf2gEDV0iFAJx35Heqbio93XUFGTGMohkV2GH4MbmUuHdH9p2rhwZ7VqXyzDVzyY6kfNdMLv3dFS6zoyPUqz%2Bkxtj8Cr%2FqbyMO33usEGOqUBe%2BJpIYFCfpgBu6u06M8FFxXaPXO%2BQhVs3dvLfVWVSIgFhwEaTUb3rmEe7WVk52oBYNIQV%2FeXI1nUJWU5I3N9iQ6c%2BawpsiHe1w2ifr%2FsapZg8yexXo5j7OIhApdRpHC9DCGRuaPFpUaC0GbwvLmSNbFgHSEd3FfCD0AlnahTwx3PlkFbAKUEgD9cINfxzD5e0LMwxL6pZzsdsFxkjnA6HHG6myEL&X-Amz-Signature=d0a1c07bde76bcf7aed6dd300e939cf9f4aa851591dec012022b7146d872fd72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSFLM3VV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCHfgCNBamWOXUHXFjJtKwcfqMj2d2QXvY4ikCVYYIdXwIgfd%2FOMnTiPAiU6mqgHGBXLeEgxJ7jedWc6VH2M9zOAosqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrAoALdM%2BPKH9WbSyrcA8tGk7zfAHJ9f9Ah3qrMhSYa6OuCb13CA8VgCx7aiunaGXfLNEpC77BLYbLGfCADxtE3Wzvqpzk5QOpRDHcJbdklsP9mNwkbVIf1zpyGzRtpwjvdDFUd0LgL1AgbA1YzGyg1hFS0kl%2ByAmOAib3QcIRPN6ZGuKFjskO7w%2F3hl1He4W%2F2QDamaPEMUjnd7MFIM%2FnxINIcVApXd6GbpoWZ4O8QSjkRa1fPdBtiztMVrq89UDcR2Bt83J9aKB9DCK1iFTQITrcjddumao2B%2Bh1TOkIo6gpQB18MKy8luxrmizJ5pB7jS4bs%2FSkb4ehDepUntUs0UYPzrYXW184H6lkuFeEV549BmDmTQL24SQ36%2FCqTZR9fCu76XGYAX7vJ9LaKgddqVBjPoNReO8JUTGnzltTahTGZrnEegdwv1ifAL79VIDf9h19vdf9Y5eteRyNtdQIMNAN2SkqpvJtOYJlrVtVsh0Xyi9nkX87egnCAMM%2BkfYSvyyN0JYENgsyZViXzyDaBpcZxWdriBn77yAYxXdIye5RKt4ysMy1UCHW33dy8z7q4FXv4GWzPLxEG5IcoBif0LDVVE7li91tdl89GEcRQ5GOfTEvCeqm0XTelhojAGywMBdOcLANeLHQSMMWYu8EGOqUBBNfdGI9aHoxUWBuy4stzU5LCQucekeowngF1cY6r03or2n7kx93KBeeKY4Ca75youTAWTOQzWhBWaGOpWdYSXYQFVo%2BLOvTyb6L5arcHbrn%2BOnBkpCIIKRWV%2FinJmp78i%2BLtCQ5NvlpbWaaDszXpFjCt6n57apooUrrWsojMLSM8pUnyjL8iXh2jN0Ck9LBj1svtsOtW0BcW7SKqvyDUXq3QAKde&X-Amz-Signature=08d928a5a3dd741cc344c8a3e5ed0b5bc127ce72bc694acdd49b505936c8ac4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
