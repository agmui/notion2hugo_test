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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDO3HW4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdoKPw1yeVJez32Uq7licuHbwb5vbsBZulIfeuynDmpAiACMcR8p3%2F%2Blj340ooxYjv2wUZGAf6MMEi6529eURHP%2Fyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMkVuAYPbzVcTwOdL%2BKtwDC5KxCAMwumpiTXab7xk%2FhfV47JY69hDvb1lWVdABYchFGlnMQb8%2FwfwhBWdxswQg3l0U1DryOZhvOxA2F3q4lRr1qt24bzFgZ7ThGWekM8E1Jo1buWnMFiVxDfrEWRpd2mOf%2BhnWiuwHEgx3ogi%2BWjsYabg0RVS2LRfX%2BBhkKYynIXoEbNhMNa4kr6WdjCZmCoEcDHeqRPJkcUA82Bd0oaaw41aLky7KrGKwVr99d0Nztim83NtOmSEkNL3PskmnE0q1Tvl0LexeI2lQzTBUFK7JHSzuoFq%2B8aAIhgDrTRkl8JJcjRHAVzH6LH2QUs7UWO7bzv7rYz9FmbTBu0XIWDMlm5%2BK3rGlbhoh7iI9RmEYpPWsFkrMwWnLON%2BF6oTDMPQXBr463pbNjaWvYBTopqK8%2Bb3wJf0bGSVAWXaJ0kIHZZTMKrUh4NxraQdKrWfTfWtUZUH%2B4pj3ZSqfxMwNMwH006d%2Bgp0Yq9YxPhnwKqQHNQsoCUqITrFsB5WDKyCLtSyRpqcaau219j2bz2iBZCQ02FRefsMt%2FxvYU7yCe6i92Q0rs3KI8529gnd0JCZeBKIvVxh472YuurvPvlFGDXhgjLwk0aGiFNW55RaaiUtYkQzU2E25odZCL1Uw2umYvwY6pgHisyXxqVbE9iTk0jwyb5Q8ZTojM4MA1K4HTlyeU%2FtnBnCz0zKoy6aUuEPczpHkDz8JabdWd2nUSSnFb3SmvPGg%2BkMJpkhRmOKVwfF%2BwIacscfgGvCU3UJAMJsRzFSPAkkx%2FP%2FM1dKUgfnd83aXDgzegWLJJuYjiVljJ3zoy5hXAHU4Jd5LcRNeDnPo6kgm2wZqYwbVM0VqLs7poxZYVfFq79L%2BCFVU&X-Amz-Signature=acdbe04838a1168a2a21e77a1bfdeb954c786e2eadd25d5b1dfbaa0e9eb6530c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDO3HW4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdoKPw1yeVJez32Uq7licuHbwb5vbsBZulIfeuynDmpAiACMcR8p3%2F%2Blj340ooxYjv2wUZGAf6MMEi6529eURHP%2Fyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMkVuAYPbzVcTwOdL%2BKtwDC5KxCAMwumpiTXab7xk%2FhfV47JY69hDvb1lWVdABYchFGlnMQb8%2FwfwhBWdxswQg3l0U1DryOZhvOxA2F3q4lRr1qt24bzFgZ7ThGWekM8E1Jo1buWnMFiVxDfrEWRpd2mOf%2BhnWiuwHEgx3ogi%2BWjsYabg0RVS2LRfX%2BBhkKYynIXoEbNhMNa4kr6WdjCZmCoEcDHeqRPJkcUA82Bd0oaaw41aLky7KrGKwVr99d0Nztim83NtOmSEkNL3PskmnE0q1Tvl0LexeI2lQzTBUFK7JHSzuoFq%2B8aAIhgDrTRkl8JJcjRHAVzH6LH2QUs7UWO7bzv7rYz9FmbTBu0XIWDMlm5%2BK3rGlbhoh7iI9RmEYpPWsFkrMwWnLON%2BF6oTDMPQXBr463pbNjaWvYBTopqK8%2Bb3wJf0bGSVAWXaJ0kIHZZTMKrUh4NxraQdKrWfTfWtUZUH%2B4pj3ZSqfxMwNMwH006d%2Bgp0Yq9YxPhnwKqQHNQsoCUqITrFsB5WDKyCLtSyRpqcaau219j2bz2iBZCQ02FRefsMt%2FxvYU7yCe6i92Q0rs3KI8529gnd0JCZeBKIvVxh472YuurvPvlFGDXhgjLwk0aGiFNW55RaaiUtYkQzU2E25odZCL1Uw2umYvwY6pgHisyXxqVbE9iTk0jwyb5Q8ZTojM4MA1K4HTlyeU%2FtnBnCz0zKoy6aUuEPczpHkDz8JabdWd2nUSSnFb3SmvPGg%2BkMJpkhRmOKVwfF%2BwIacscfgGvCU3UJAMJsRzFSPAkkx%2FP%2FM1dKUgfnd83aXDgzegWLJJuYjiVljJ3zoy5hXAHU4Jd5LcRNeDnPo6kgm2wZqYwbVM0VqLs7poxZYVfFq79L%2BCFVU&X-Amz-Signature=3ee19c7135c1f7f0765d8d83c475e26e502fb3dca9ec7ea040c0e6b190a33c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPOQTFHZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbEwVhlpHI%2FlvovX32EQl1Ju8UPVCWWaL9qGKUCIj94AiA4worlOADqilZtPdIzkHqF7o5JxFOQ0EydqTwnA2CBySr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMgRgLhtEhTVZV9MmMKtwDz761A1bn7If%2FSmxflPVWeI1nYiTgMyLKZOdw5cq5bi7Ws%2BWxsX%2Fbhvvnl28qREfI6IZACW7GQMQhOwp6vdUZTq9%2FvexrtItdV2KSn9R%2FFmoZYFi%2F06JEHN0t6x7ZDOwWSDXLU44JTS%2BBHY%2F9SsanAsoLxCtJ3a98Zr1Veyx199JakrO9xypgNYRc%2FTGG1mR%2F%2BA4SHw1D%2FcIRnxlt8ZZ7MgCUCJBRnYqcWgbS59FCPPFXjVYPWctsrjslHvXq1QE6nZXaRAHYxLc%2FM2fPKMWQ%2FCmMUwcw7FQ6joApZPHB9AX6NAWfwE7g8CIDy9LOqQ%2FH%2BBPeuWwP16DI%2FPYY29qAz0V8jDWGb29FSuVJ4YS%2F8p2Wpe4nh07%2F2LZFXhkBSd2ajFMo%2FVfBhR9FuIgS8jyy3jB%2Fzp6Z%2BpINkUySVUpA9iY406jT5x6kTQQPA%2BMk8PFXT9IwQOXdjUvpiWOfAT59JGySsmnkdoY8c5UuLRNNDIntW7Xr%2BGHa%2Fd%2FKP5AG9DaQ7skkqbXczqs6LvDBE7qOuHaKypLHm%2F7K7ucKMa2p9RqN6hQO4F27sHst9JeSkfcxE4ABXsYFc49MHZzQtWU1IsUn5r5W%2Fy60ZHVEGot6yvNGuvrLI6dInemCPLAw2umYvwY6pgHOMrKIdXu%2Bh6Q6C1B3JfeXoWrz3Njcfj71vEL1CzieP0U9jM8lJ08e6NLu9Uv23mmW78Z8d9n%2B0wPPS7NIu1uuU%2Be2M2rDLKvqekX2IGQPf49TF4%2FOYb2oPa0KBVMXLjM71JvnzJ5EpHC3bQ2UnuW67IZ5KPe131hNMONWSIB26HVOfrqeZlw94x1K5GufjmOvbBkVO8qJfRIsYOGAG1AbnEpSxbEo&X-Amz-Signature=51f4eb30d920586478fb1bf1658580887d26365e8e4cc4da25271d9269119761&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONI2QQK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC63f7rxrz23loqDTRp%2Fh8jNvX7NX6YG%2FZvXgt%2FkgyPAwIhAJ9uRS7DEJcz4grJvI2%2BgP5WzOa%2BsOa1GZ450ynJLQH4Kv8DCFcQABoMNjM3NDIzMTgzODA1IgySKrZjTIZYSPff4Dkq3AO8AuTxj1KXtYbsFpMC3DfkD8Zu1EwLYwQZwKerlio0t7r2hbRi%2Bnab6A2T5tDcRiCiaFgYgdCKLC6vuttBZo6AsIuc1MteYqe9Oso2pPNv3CMM%2F501CJPrsg5O%2FYxHugBQBZ2o4GdnGdmpu8xRHkTiss3BHAKemo1B4Mbp5EIAXy1Dqx%2F9WJOqXueERd88M6WWMN1Ke4m1y5MV6NZleXU6DLrV%2BoeOgTHlHoQnqlPacFN9WlDq0WuLPqRy2G%2B5g5CMIIwfSCcKiaCi6kqz6MuMaU7B3mxcj5YdqLueDsk%2BPrdPGSxihUjZG1506EZCFmzQF2LpEH2D6lrwmlmf9snORz0duGm4gIr4XADPoFSOKWvc0nQdnMPPU%2FLq%2F0WpdnH5LKQqLnMi1qdq7CHGSpZBYCKc2MVbFsG7BxhbgnLu5NXLqHZmExM6mXcb1aQuSmbmgBgsCHNnTEQOJtq55ng0dwTZdP%2FwRy8x1IV7UOCXkRiRWvc7xG2YSF8Ac8S3Vx9UZRJYUfnu3%2FSjtQTQaIjdkzfD3W4UcfOuiw2KQmhKdNm7DYjXGyU90VGT5%2FFjBfUjpxGTfaRNQSUNCiPKafrKhqQt%2BnJPYt%2BzCEnleJ5eI43%2BLW5oXFcPt2H%2FPDC56Ji%2FBjqkASXE%2BYvw1xE7r6CzayZPcmW7M8yvBgKWTNbiIF6IEX5ihhZeIADJ9nH6watzGa2Lfu3nxk1hy0OmyE1LXZyq6zMGD%2FcsJsSixWHDm8espTbaubRzlMPt13C0UxHgV5xFr0PmdhDeooQVctMabBtbOc71HpZ3DwZLF0h7m2VO5ZLNxMwUjMUQj2FBlztwVuEmj4%2BRxkV%2FWOkaQn46atTvsTZPPvtk&X-Amz-Signature=93f1e1ab180a3cc4f9f39371dad1993be4936d4c248508bee2ac79aa1f5a4a44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDO3HW4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdoKPw1yeVJez32Uq7licuHbwb5vbsBZulIfeuynDmpAiACMcR8p3%2F%2Blj340ooxYjv2wUZGAf6MMEi6529eURHP%2Fyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMkVuAYPbzVcTwOdL%2BKtwDC5KxCAMwumpiTXab7xk%2FhfV47JY69hDvb1lWVdABYchFGlnMQb8%2FwfwhBWdxswQg3l0U1DryOZhvOxA2F3q4lRr1qt24bzFgZ7ThGWekM8E1Jo1buWnMFiVxDfrEWRpd2mOf%2BhnWiuwHEgx3ogi%2BWjsYabg0RVS2LRfX%2BBhkKYynIXoEbNhMNa4kr6WdjCZmCoEcDHeqRPJkcUA82Bd0oaaw41aLky7KrGKwVr99d0Nztim83NtOmSEkNL3PskmnE0q1Tvl0LexeI2lQzTBUFK7JHSzuoFq%2B8aAIhgDrTRkl8JJcjRHAVzH6LH2QUs7UWO7bzv7rYz9FmbTBu0XIWDMlm5%2BK3rGlbhoh7iI9RmEYpPWsFkrMwWnLON%2BF6oTDMPQXBr463pbNjaWvYBTopqK8%2Bb3wJf0bGSVAWXaJ0kIHZZTMKrUh4NxraQdKrWfTfWtUZUH%2B4pj3ZSqfxMwNMwH006d%2Bgp0Yq9YxPhnwKqQHNQsoCUqITrFsB5WDKyCLtSyRpqcaau219j2bz2iBZCQ02FRefsMt%2FxvYU7yCe6i92Q0rs3KI8529gnd0JCZeBKIvVxh472YuurvPvlFGDXhgjLwk0aGiFNW55RaaiUtYkQzU2E25odZCL1Uw2umYvwY6pgHisyXxqVbE9iTk0jwyb5Q8ZTojM4MA1K4HTlyeU%2FtnBnCz0zKoy6aUuEPczpHkDz8JabdWd2nUSSnFb3SmvPGg%2BkMJpkhRmOKVwfF%2BwIacscfgGvCU3UJAMJsRzFSPAkkx%2FP%2FM1dKUgfnd83aXDgzegWLJJuYjiVljJ3zoy5hXAHU4Jd5LcRNeDnPo6kgm2wZqYwbVM0VqLs7poxZYVfFq79L%2BCFVU&X-Amz-Signature=92f8cda65b6650e15fcb1467c4227725eb5b4bf74631433d0ca1926729dcc011&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
