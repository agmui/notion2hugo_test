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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHBH7RX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtwUzFpQXDQI%2BIBRu3qzDPAC6IUkis%2FuShc%2FutClZ5QIhAK6CsuvccrwaWcYkfAj7hBoWp%2FqF6zqbxFxI5bCwJT%2BcKv8DCCAQABoMNjM3NDIzMTgzODA1Igz8BBrGL4iOk9QE74kq3AOEbb%2FWeEMPtHrm%2FIdxXgEY7dNr9T7JpSnr08z7dd5N3CsjJGpjwI1eVfwGwFC%2FouJKKpIYWthTrLu81gpC8vSAvUGWgSRniiO%2BhqCEFDEsS7OBjVSxw88%2FK0gXsKEKTJo0pP6sxQXDJYMXY2XThSsqwhmCzNirW8HDDHyA4m4RqfWRt1xCr5q0OxkG6lL2BaPr4YbXA3n2zV0FjkONCxSTd2gRGoluyA3txn%2Foyh%2FJpVJ4sN2Pa4d0p2GdbHEBYgnR3IG88GHwOp1kE1Tkru8czBl4BTJtH6CRhFmy5vHw%2FIqKR7L6Osg5Kdayxur7508ZUHS%2FKPFHFH2OyXoG8A%2BlHMqbaXDpQJTfMCMM82hC%2FZmY%2BLLorr2dWTj3swn9SMm74yaRmemeL5yO0NSvnKAupGHb7oUGL%2FBcwM93ZHBeoAHK%2BSFfPgZXOLM3eCSqYHJuqMjtFrrXoUIwyc1IQuc9XZ7yMv0KGnj1Aw4g1vAGCORbkLkXD%2Fi47jqIISBqmhE6uzeeQb9%2BrZBLdU8aNP7yy9oBXiiSNyT92t6F%2B1%2FoYBMNutL2JHSZ4NlkrJHcd9s0wJ1ok8F3r1S6pB%2FUftUbze9hbqWnQib94fxThIn5SybOJRCACJFBbQTwHjCS9arABjqkAaOFWGoNeka7%2FE2ciOACWnw%2FCr12dahfA1d076oLWgEZql2Rdx7QTDjFNsu2MhVGGfRrKcV0oedFlP7Drdt3jtsarK5b62SoP0UWUP8zyhuhDvvdeVFwsrYw6HtFCi2oeETByBxKDgArKRlc%2FtJ51%2F%2F%2BkbuTjxXtzcEPDnzbBWm6VJ6ByW9KgFKa6V45Q1q%2B9%2F5z%2BPSNTrhJUpBtXobLjP9lqsLA&X-Amz-Signature=116af79962891a54c9e209a2bfae7233018dac2f9b05b70e0608d58779144d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHBH7RX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtwUzFpQXDQI%2BIBRu3qzDPAC6IUkis%2FuShc%2FutClZ5QIhAK6CsuvccrwaWcYkfAj7hBoWp%2FqF6zqbxFxI5bCwJT%2BcKv8DCCAQABoMNjM3NDIzMTgzODA1Igz8BBrGL4iOk9QE74kq3AOEbb%2FWeEMPtHrm%2FIdxXgEY7dNr9T7JpSnr08z7dd5N3CsjJGpjwI1eVfwGwFC%2FouJKKpIYWthTrLu81gpC8vSAvUGWgSRniiO%2BhqCEFDEsS7OBjVSxw88%2FK0gXsKEKTJo0pP6sxQXDJYMXY2XThSsqwhmCzNirW8HDDHyA4m4RqfWRt1xCr5q0OxkG6lL2BaPr4YbXA3n2zV0FjkONCxSTd2gRGoluyA3txn%2Foyh%2FJpVJ4sN2Pa4d0p2GdbHEBYgnR3IG88GHwOp1kE1Tkru8czBl4BTJtH6CRhFmy5vHw%2FIqKR7L6Osg5Kdayxur7508ZUHS%2FKPFHFH2OyXoG8A%2BlHMqbaXDpQJTfMCMM82hC%2FZmY%2BLLorr2dWTj3swn9SMm74yaRmemeL5yO0NSvnKAupGHb7oUGL%2FBcwM93ZHBeoAHK%2BSFfPgZXOLM3eCSqYHJuqMjtFrrXoUIwyc1IQuc9XZ7yMv0KGnj1Aw4g1vAGCORbkLkXD%2Fi47jqIISBqmhE6uzeeQb9%2BrZBLdU8aNP7yy9oBXiiSNyT92t6F%2B1%2FoYBMNutL2JHSZ4NlkrJHcd9s0wJ1ok8F3r1S6pB%2FUftUbze9hbqWnQib94fxThIn5SybOJRCACJFBbQTwHjCS9arABjqkAaOFWGoNeka7%2FE2ciOACWnw%2FCr12dahfA1d076oLWgEZql2Rdx7QTDjFNsu2MhVGGfRrKcV0oedFlP7Drdt3jtsarK5b62SoP0UWUP8zyhuhDvvdeVFwsrYw6HtFCi2oeETByBxKDgArKRlc%2FtJ51%2F%2F%2BkbuTjxXtzcEPDnzbBWm6VJ6ByW9KgFKa6V45Q1q%2B9%2F5z%2BPSNTrhJUpBtXobLjP9lqsLA&X-Amz-Signature=99c1065480e18d3daf3e301049b99b35845d88ddf5e0f65925a4f197825effa3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SP3RD5U%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuTuOT7b3eou0YJeLc8XFM7qPbhqlWx5f8d5u%2FgZiOpAiEA5QQR5qaX0mNNq1nGbPFRH9wJCbgwhOcGceew%2BVPGX30q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAqEBKR26TTjOIizaircA%2BR0ip5v3UdLwE3mOgYfO45LiJ9Htk6%2Fr93wmgDhNr8bZ%2FUTi19OL%2FPxH0xC2z%2BFOeb2nn%2Fpaxb2kBuRRUD12%2F1gTgIa7jxUGzQoO9XzyvOIRXCA2fV%2FPYAklu1T0bwyVWN49gl0Z8htsX4xsDLkLospfxuynMHjYs3dWnk9Cest23rAqSCEcl9sm2hH1me1rVbz76c7Ldz8uRZqbuG7haAh9cQ7g8tQpYkO7gBf9xGNuR2beXJdEa5NWjfBwD9UOtSZ2Sr8%2BR93z64cWfy1SpOFjEBzFVawVQjvik0Wgnz%2BHfyhyQNYTPqmO6f2V9Pl9Xg8EA3M6rQly9B2FYDwmPqKM4ZzThsQt31m7ZSgZNaPcicslawcH8hQhQtDQLgokOcq4z2DxcT2jTzgDQ2FGG3NR%2FwY4Vynk8KyRKp1yU%2FACnoEpf6SKKh8MvWIxy039Zq7XIkbdy7BZod7sCW2%2By9UL7gnIC2xqII7BXcGUzieKaK9T%2BrONVayKOZ2eObE4uFNBwtL825cJ2vZ3Cw5cH1wjyUDkKPsCwBhqIyJ%2BM0hw1NN5TsN5JdvPTOdkvbQobFf98Q05bV4o4AyVvjdL%2BKX1G6NyVD9PNkjGkornYiq5Ilzi2LzquwiRWM0MPH0qsAGOqUBmENNFC465nYyXYHho8rjWwxBrxQS6gIMtXC%2BxfkRmYJ5bnEOFYAExLrdm8RBMwyVCktmKLIj%2B0WcbiYD7CWPHLTnCnnJIatX9a8b9oB%2BGTwv5y28cm2UF9EFpkvvrxXzBUUHzKG535pDUvwwTJkw5Ty%2FqSgDTlq78ydVdPvJS9Tmg%2FWIjnwFEqZFjRvNkCS3fGTDcpWQLIjxyexi4%2FbvhE9g%2FcG%2F&X-Amz-Signature=a42696aa1cb86805b617d5ec844fa784d50c228ed70b5525cc653060acbf4008&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHUW3WN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ7yXiJTut%2FT874ph2ErkCQ%2BEI7c6xeIwQJDbSlOsUEAiEA9WNLakC2U8JnniA8uNhz8QG4DSRhMmDfbvdwJYGPFS0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKzWd2RAe%2BqRG3LbzircAykym02S0pQeDZ23s3n4fGKAYaG1SQAKrqRX3hTDgTjlP3TMBt5XOGhKiNyYvUSxa1zpf6T7OxcLvutYYkGKVDNUZxmOszfkjR9T2Q21tVcGbEh1khxs8rVgRire8JFEJzCeEHZ2jdBxYC3YJxBsCQQAjPw3TmUgEg8uf4C%2Bm9ds4%2Fq%2FJ%2F%2BRNCB2WoFZlQKvo7H1gyJ8aSSXP7BGNoH24oQaHI7d7fM5vhq2KZ643ZHPHeBg3Yi9zQL5HOdUr5xIfaP04QNQQRqKtohoTzgsbtdU5IVVx6lHUUQgoU1dp86MJyZ43ony5DdBeTU5ux4arQqGPp3hC5hcfXWuTz6KUhzH6kGy89GwN%2FOoaPFf8GOJ1Gps%2Fy6e4Gq313cCBqxRWdJe7Q03FaOPuLf9rRvaWlhnJkISbV2u6XPG%2F%2F6E7SBT7FuqZ%2F%2FhVW%2FN1OEvRAzfWlUPjRyDeAi%2Bk0rWSJ45Ed0pz8Er0l3PDyBiBuH46qejMy5%2BLSiHTUte0XMWkN7mvxyvYSgZsxNUGEilPU%2BsZRf8Po5PqeUqBsyrQUFIwv8jZl3tQ4akVpw5ecwV%2BOeyvka%2FkeulCOcybdtlvyaHTaHOmgUQJ8bNE3TF%2Far3Qs6Fquj2TDE21EXkb%2Bi3MJL1qsAGOqUBHSvFN0K1yQcNB4WiAZ2f%2FU3z9tFXyNLQKd8fKYDeYsItjRJZvFZ4XxMtkW%2FquOa4%2BfRTY3vvGVg%2BXgolTDbAtkFnxTibc%2BFQEMgAfm%2FBFqGG6Lay8lfNWambgNCue%2BQUKhZuThi%2BylTpuiravQJaQIeudd94r7WmBNPviFCmjsDGr0XxfLf9qLKPF2A0GgR9J3nhiw38Ds3iXlosQ1HrCSZJwNBX&X-Amz-Signature=ea930b36387feba737d3c5ccfc67cb3dbd5199e377c0e5d15c61b532a5a3e1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHBH7RX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtwUzFpQXDQI%2BIBRu3qzDPAC6IUkis%2FuShc%2FutClZ5QIhAK6CsuvccrwaWcYkfAj7hBoWp%2FqF6zqbxFxI5bCwJT%2BcKv8DCCAQABoMNjM3NDIzMTgzODA1Igz8BBrGL4iOk9QE74kq3AOEbb%2FWeEMPtHrm%2FIdxXgEY7dNr9T7JpSnr08z7dd5N3CsjJGpjwI1eVfwGwFC%2FouJKKpIYWthTrLu81gpC8vSAvUGWgSRniiO%2BhqCEFDEsS7OBjVSxw88%2FK0gXsKEKTJo0pP6sxQXDJYMXY2XThSsqwhmCzNirW8HDDHyA4m4RqfWRt1xCr5q0OxkG6lL2BaPr4YbXA3n2zV0FjkONCxSTd2gRGoluyA3txn%2Foyh%2FJpVJ4sN2Pa4d0p2GdbHEBYgnR3IG88GHwOp1kE1Tkru8czBl4BTJtH6CRhFmy5vHw%2FIqKR7L6Osg5Kdayxur7508ZUHS%2FKPFHFH2OyXoG8A%2BlHMqbaXDpQJTfMCMM82hC%2FZmY%2BLLorr2dWTj3swn9SMm74yaRmemeL5yO0NSvnKAupGHb7oUGL%2FBcwM93ZHBeoAHK%2BSFfPgZXOLM3eCSqYHJuqMjtFrrXoUIwyc1IQuc9XZ7yMv0KGnj1Aw4g1vAGCORbkLkXD%2Fi47jqIISBqmhE6uzeeQb9%2BrZBLdU8aNP7yy9oBXiiSNyT92t6F%2B1%2FoYBMNutL2JHSZ4NlkrJHcd9s0wJ1ok8F3r1S6pB%2FUftUbze9hbqWnQib94fxThIn5SybOJRCACJFBbQTwHjCS9arABjqkAaOFWGoNeka7%2FE2ciOACWnw%2FCr12dahfA1d076oLWgEZql2Rdx7QTDjFNsu2MhVGGfRrKcV0oedFlP7Drdt3jtsarK5b62SoP0UWUP8zyhuhDvvdeVFwsrYw6HtFCi2oeETByBxKDgArKRlc%2FtJ51%2F%2F%2BkbuTjxXtzcEPDnzbBWm6VJ6ByW9KgFKa6V45Q1q%2B9%2F5z%2BPSNTrhJUpBtXobLjP9lqsLA&X-Amz-Signature=9675f01e6592790c8e2cc53fb479af502ac1c32993259934cfd8052b35bbf71f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
