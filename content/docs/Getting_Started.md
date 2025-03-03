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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPFF34G%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf6bI7CtYCZFr4%2BHtpquIgjm7vFf6yafteib7wty1qVwIhALYoocHrQXHeRxucOX5nnOu5YggUOpGGg6D7Jzb6rf5BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz47R4ysiumrNkDL%2Bwq3ANTxq09ses4FinB%2BXx9v%2Byt1iEFkKgE05Ngl5xwAYYnAkSBpIxeniQERImxN%2BfbyLa0NFIzwSob%2BaB7LutIiUTb3o7m6i%2Bw3Covz78qIqVRMrmdmAUCs48sclsZW%2FCJ%2BrU4zGVYmxX6amRhm%2BDW4%2FIPG9xQxwlub7PbM2zpRyBYob7QEumWjFKJTHi%2B1vtOr1NocphEA5okCCaXKZJUHTVpA2EPE0%2BqbI3EECIvcU52i%2FfGYQwAoheUgLLuYAWg2t0%2Fja89Y%2FopPwFElZZLdV6J%2BzweplghcKrpg8qOPyoZzxLRSvcEsEYokPb6Wt7Lrb0%2FxjiMHCz5Y%2FKuizRFs7EjAN0zhT6z1LIj8OBohTauONJ7RBafLb3XPFvmUHRozRTslyp5y6WQ2Qnrrg4M3mIzoiYQlLRxwbUgxjpiJZD9qJ%2Fbggwu9TovUFb%2F1r9q5UcJbXvhqtOp28%2B2hFau2nDs1y7wc1fNKT62%2FUsEqakoPRfRx78WIsKot9hW3FACfXt3jRPpTQZQu1McDzikJTG4QqicWUNqSxDh72GrOjO6HtTvtiTbOxVdL0wnZQCU%2FKSS1rVbq3eOLB81T7fjn4vdyO3N9C093F7dvbGqQndB87xIPvcZ7vDlr8rqoDCkoJS%2BBjqkASSR97rHS%2FM6xzi1T%2FYUx3AFg2JWgKDOlr%2FNjgJ7tpCcEHCQKnVV2pXDP4zT1wfp1rv%2F6OLZsh7R5DjPfJMwUSjwfSVpbf6hhJPFuNDBLpA5ZgkRzx32Pg6kj3s7ENbvWYXGJKmjzkyovcWaCAFCzgxxUzmGfOi6iRdYQPR6zw2jUpt6msMEXj%2BDumG5wA4P3p8zRpqC%2FCJX9bwLaBs4a6bSsK2f&X-Amz-Signature=c4a7e7bc12060b50d352dcd51c809fbf7954ea4da75c0b7ab5e72094d0c4746d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPFF34G%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf6bI7CtYCZFr4%2BHtpquIgjm7vFf6yafteib7wty1qVwIhALYoocHrQXHeRxucOX5nnOu5YggUOpGGg6D7Jzb6rf5BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz47R4ysiumrNkDL%2Bwq3ANTxq09ses4FinB%2BXx9v%2Byt1iEFkKgE05Ngl5xwAYYnAkSBpIxeniQERImxN%2BfbyLa0NFIzwSob%2BaB7LutIiUTb3o7m6i%2Bw3Covz78qIqVRMrmdmAUCs48sclsZW%2FCJ%2BrU4zGVYmxX6amRhm%2BDW4%2FIPG9xQxwlub7PbM2zpRyBYob7QEumWjFKJTHi%2B1vtOr1NocphEA5okCCaXKZJUHTVpA2EPE0%2BqbI3EECIvcU52i%2FfGYQwAoheUgLLuYAWg2t0%2Fja89Y%2FopPwFElZZLdV6J%2BzweplghcKrpg8qOPyoZzxLRSvcEsEYokPb6Wt7Lrb0%2FxjiMHCz5Y%2FKuizRFs7EjAN0zhT6z1LIj8OBohTauONJ7RBafLb3XPFvmUHRozRTslyp5y6WQ2Qnrrg4M3mIzoiYQlLRxwbUgxjpiJZD9qJ%2Fbggwu9TovUFb%2F1r9q5UcJbXvhqtOp28%2B2hFau2nDs1y7wc1fNKT62%2FUsEqakoPRfRx78WIsKot9hW3FACfXt3jRPpTQZQu1McDzikJTG4QqicWUNqSxDh72GrOjO6HtTvtiTbOxVdL0wnZQCU%2FKSS1rVbq3eOLB81T7fjn4vdyO3N9C093F7dvbGqQndB87xIPvcZ7vDlr8rqoDCkoJS%2BBjqkASSR97rHS%2FM6xzi1T%2FYUx3AFg2JWgKDOlr%2FNjgJ7tpCcEHCQKnVV2pXDP4zT1wfp1rv%2F6OLZsh7R5DjPfJMwUSjwfSVpbf6hhJPFuNDBLpA5ZgkRzx32Pg6kj3s7ENbvWYXGJKmjzkyovcWaCAFCzgxxUzmGfOi6iRdYQPR6zw2jUpt6msMEXj%2BDumG5wA4P3p8zRpqC%2FCJX9bwLaBs4a6bSsK2f&X-Amz-Signature=169f14740b0aa3f52ad1843db2e26fed6c107db1258943d134d38b3554fab81f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC44J2JP%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbiWJ1QYFXn3DAZJAGLOuJflCSqvDjenRte1z5ZRUNIAiBWGl7TnZtcsGB093F4wUa19UC3I%2FzEGskk5806G9yJCCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BMmJ%2FahXscAZP4uSKtwD5XfkHWB%2FxNMb269YE4LJjwoxJ1gMKTTtAjKjSkCNqverHhoLdMl4eHm14lZzFSkNGMcFKXnlyQZHOsq6EVdsNdUV5JG2TEZjs%2BnTtwBwVLXwpSegADxHW30maJ%2FA5q9%2B8O%2Fs7F909VbQ7%2FjtSt%2BX02UoIr4UPX7STDal%2FrXvD9nEda%2B90ZyuhghsuzhSOVbVeMjjmw1iLRW7k2bOuIn5GTHyrPpi%2B0PpP5JK6obJL5xx1WtoS%2FwpO4X6sCECAM7SB9YWMPB2fXGoV0FHXuMpfd7opOU7T4phb9X83btM7xkklU2soCBXA8OshCO7erax006OupJUwDzMifbEP1suWVJ63GPH7BqeZNY0FEjfx%2B8u8NmlwWGPyXFw71ATCldg%2FCR0vy6FN7CtyY5ptvYgdwh4M1nJ49%2FVp46iCQeUG2qMdwQxJzqFLZntl6XSnAEoxodFlRSVmZJxVD88vMoIkxdUiNO6XvJ1Epm18TqW8kgHFiAsPEmFY%2F2icXL2tUusO%2BiCLSOftayvNQu7dGDkbuwZAB%2F%2FpBTTF6lT7VDg1HiabMJwnXZ3S0ra%2FDc1ERqK9gHnUpx%2F2tYJ8xGXuEE96lvBPQZDCeR%2BB9%2BnInTLRRBWYp56p%2F2fUM%2FBKIIwl6CUvgY6pgGGwuPv%2FSMhzqTZU6E5ncRNlsBSfMJJXSzzoz5%2F%2FARfSWRX6L8JlSKwB%2BT2UOTx2vaV2%2F8ZRmbG%2FOWp72klIhPLo3GK7uN3wfj9GIA9pzebGEziBmDVg0Furp3D9TGOB%2FPGrXSeBrovT4335LGbHDSN0bDHV0X2qsKKxyUdgB%2FYzElcsbWfpieUGujUBFHynPj4XRc5no0Y5wBnLwkFMsXkGTUqegxj&X-Amz-Signature=cd73135be70bbd624cfef46a8a415e45a59384fb0b148b50e01497dfea38addd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPLVSFE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwmw0RBS%2BD7kPyIIXy7n7LZnf4vYXgq%2F1hgx%2BSsgt8awIhAKmQrh185s4UqnJBk3h1Twd2bXSV3O1BJK2L2B9ucUQiKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDAZL5017Ngk5HT8Mq3AMChVtmkly1k7HEO6W%2BdsRJNs8oVqO5pjany%2BMfZfMwZN1cKRwpwxXuuHmZmLc7jwHXURy6v7VlRkRC8xBbHFABsGxXB0gFcHcueJHUzKOP5sz%2BPZp3RsKAAdvYxozk8fBCuy%2FJyKhdZL%2BfkUMUgWJsq7ug%2Fr%2BgqfeepfPRx884zp1m7kCNdjCFLxW2DQC9ErQH6pVLcjdDLeM5PjPHA%2BgtJ85QsF0f6zyQA8ZBxKtUGjyF7H8s%2FciU7teE7WflheK0h1jLiNW8LDTjsUwbVesGHZEuAjWwYscXDjQPI7Jtcal%2FTHq04AA6W2LnqhLKRWg5BuzDlgL5EScoLmtBNHBhEQpKFmjs52ge7Z8rOOhH%2FKdZVfxHxq4ElLd%2FfSpg%2Fbg5d3DTw4NoPX8Es4tKLPKq3%2BxFiCFh3uqhLRIe%2BrnvX3ioqywYSTUJhmdiC8DYxpYz1Q0NpKTYcNrpjpTaZzDoR6VIfoZmBBlZnzCNplkbHvzFVwTm%2BduAAKteCv6DbnBSZ3VY3r3F4fhBocaGnZI4CinCGtEYHVckbkM8WbURUHlfDeIQ1CjUOU3SCZHGRnsDADaylWfwI2DYokPkHmUUvfD%2BxG8SXjDG9xEqL%2BKyarHcAjJ%2B5JmVYeyVBzDnn5S%2BBjqkATxTEw740TttF5YJM99uUJsbk7z9pFAlJzydtdxM4odz%2BbODk%2F7pGmaoiKZPsiCKuT32B%2FSdO4tWZ774DEhekSnWCX1YjKndW9Yu7l3tymprK573cm4K%2FX38uRlIE2vVyCHNuXctW5rCVSfWgJK5SlG06j4QE27pJwPE9%2BjmTl%2BG6XNt3PIiw7V6m%2FPvudSY0%2FCvih3ZeLena0jUhX3yLRSrRgh7&X-Amz-Signature=d1f1604f19c250d00957e1afa2689f4c94866bbdfdb2d0c8c876d3b7ed705822&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPFF34G%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf6bI7CtYCZFr4%2BHtpquIgjm7vFf6yafteib7wty1qVwIhALYoocHrQXHeRxucOX5nnOu5YggUOpGGg6D7Jzb6rf5BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz47R4ysiumrNkDL%2Bwq3ANTxq09ses4FinB%2BXx9v%2Byt1iEFkKgE05Ngl5xwAYYnAkSBpIxeniQERImxN%2BfbyLa0NFIzwSob%2BaB7LutIiUTb3o7m6i%2Bw3Covz78qIqVRMrmdmAUCs48sclsZW%2FCJ%2BrU4zGVYmxX6amRhm%2BDW4%2FIPG9xQxwlub7PbM2zpRyBYob7QEumWjFKJTHi%2B1vtOr1NocphEA5okCCaXKZJUHTVpA2EPE0%2BqbI3EECIvcU52i%2FfGYQwAoheUgLLuYAWg2t0%2Fja89Y%2FopPwFElZZLdV6J%2BzweplghcKrpg8qOPyoZzxLRSvcEsEYokPb6Wt7Lrb0%2FxjiMHCz5Y%2FKuizRFs7EjAN0zhT6z1LIj8OBohTauONJ7RBafLb3XPFvmUHRozRTslyp5y6WQ2Qnrrg4M3mIzoiYQlLRxwbUgxjpiJZD9qJ%2Fbggwu9TovUFb%2F1r9q5UcJbXvhqtOp28%2B2hFau2nDs1y7wc1fNKT62%2FUsEqakoPRfRx78WIsKot9hW3FACfXt3jRPpTQZQu1McDzikJTG4QqicWUNqSxDh72GrOjO6HtTvtiTbOxVdL0wnZQCU%2FKSS1rVbq3eOLB81T7fjn4vdyO3N9C093F7dvbGqQndB87xIPvcZ7vDlr8rqoDCkoJS%2BBjqkASSR97rHS%2FM6xzi1T%2FYUx3AFg2JWgKDOlr%2FNjgJ7tpCcEHCQKnVV2pXDP4zT1wfp1rv%2F6OLZsh7R5DjPfJMwUSjwfSVpbf6hhJPFuNDBLpA5ZgkRzx32Pg6kj3s7ENbvWYXGJKmjzkyovcWaCAFCzgxxUzmGfOi6iRdYQPR6zw2jUpt6msMEXj%2BDumG5wA4P3p8zRpqC%2FCJX9bwLaBs4a6bSsK2f&X-Amz-Signature=f513af3ff84203fb92a5c642231f62affec4f3769c2ec979ae4b255ca35d2e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
