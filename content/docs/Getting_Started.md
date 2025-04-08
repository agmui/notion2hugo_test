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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SU757W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYfy6%2BntLHTuxuQdkmzrcIP%2Bf1EbPPI%2Bhv99DC%2FZnmIwIhAIHkLpMa25NSKTJj8dzVc780n0qkVrV9eBR87gQmKMMCKv8DCGwQABoMNjM3NDIzMTgzODA1IgxzRvoq%2BJt04aYXfRoq3AO3Vfc%2BWGHFbqv8m5oDEPG3uXkxDqbLaYuBhzvGAVF%2BH1fa9gBp%2BlqZdKqtlbs34SA9sJRYgp1c5cnPs6pyErTrQ6ZZnhbx9Xpg4v2iIGEJrVh6FGxGg9h1jzT8jDgSd4%2BwV1t7rLM%2FwyhlsFFYMy4CQ9gMlz21Io5Gdg7FZotVY%2BaPUQE49RJ1Z32pMLmni39QT2CJ2AJruTi8SwOBrWvXB8xlw0ZgZ44QBFXHSSbNcIe%2B7uJcVubgxQuZ%2FSTCjcBbcUB4D0QPktGiakpLVFOUq9615MRKhTsFxvZiZz41%2BeK8byVwUeC6jNb9RQkn8LKISzfkqC87cCMc0fUMXAcrEPfVuQ1WXziIfgLfy1ZyMRMHwVBQk15mB2vRALqsLEbjd0ja7RHgsqOpg%2FGVbmUtKO8IAZ3U9D3VTizPFRWdgPJBK%2B4jssa0YQgd1N%2Bwij65xVkmdqp%2B7VNoixvbf516e9sySlsC1W28LHULXVZ%2B1AMYFkpmnnIwWocA1fD%2F36tXn3BG99TBemzHj3FyjrhGOoYZEQy%2FZsWvukIT82y6Ha7gIcEDBZA1TmDwPvqeQPLLsMtGhFGmPMEoVdG6isFd%2BERe7lGudSXTSf6EoHhN%2BuHIlCiIERxe9afNgjD6ntK%2FBjqkAUK8iaz7LPmHueRT5tOgjj4jgbMNHdT%2FtK7iD3eSqh%2Fh4mb%2BuMB1JB8KDLtru9noa16cqua%2FCvNkMMP1CJ0bY23NUAMZwqDP%2BP1uXW5Phn%2BBT6pj9IuAqVBVpZTj%2BcyxgQPaz%2Blj8sccT%2FyxrQLPGnC%2FsPfdYEjQ6PFQN2OuIXpzAr8JeY8ERkCd9fvu0q7zOXLjMzxlv9qALzA43sb0N8TnLXbX&X-Amz-Signature=ca4fbefefb48ebdc3d915dfe659e322a5b738ff23e4b3b26c527c1f56f7f6375&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SU757W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYfy6%2BntLHTuxuQdkmzrcIP%2Bf1EbPPI%2Bhv99DC%2FZnmIwIhAIHkLpMa25NSKTJj8dzVc780n0qkVrV9eBR87gQmKMMCKv8DCGwQABoMNjM3NDIzMTgzODA1IgxzRvoq%2BJt04aYXfRoq3AO3Vfc%2BWGHFbqv8m5oDEPG3uXkxDqbLaYuBhzvGAVF%2BH1fa9gBp%2BlqZdKqtlbs34SA9sJRYgp1c5cnPs6pyErTrQ6ZZnhbx9Xpg4v2iIGEJrVh6FGxGg9h1jzT8jDgSd4%2BwV1t7rLM%2FwyhlsFFYMy4CQ9gMlz21Io5Gdg7FZotVY%2BaPUQE49RJ1Z32pMLmni39QT2CJ2AJruTi8SwOBrWvXB8xlw0ZgZ44QBFXHSSbNcIe%2B7uJcVubgxQuZ%2FSTCjcBbcUB4D0QPktGiakpLVFOUq9615MRKhTsFxvZiZz41%2BeK8byVwUeC6jNb9RQkn8LKISzfkqC87cCMc0fUMXAcrEPfVuQ1WXziIfgLfy1ZyMRMHwVBQk15mB2vRALqsLEbjd0ja7RHgsqOpg%2FGVbmUtKO8IAZ3U9D3VTizPFRWdgPJBK%2B4jssa0YQgd1N%2Bwij65xVkmdqp%2B7VNoixvbf516e9sySlsC1W28LHULXVZ%2B1AMYFkpmnnIwWocA1fD%2F36tXn3BG99TBemzHj3FyjrhGOoYZEQy%2FZsWvukIT82y6Ha7gIcEDBZA1TmDwPvqeQPLLsMtGhFGmPMEoVdG6isFd%2BERe7lGudSXTSf6EoHhN%2BuHIlCiIERxe9afNgjD6ntK%2FBjqkAUK8iaz7LPmHueRT5tOgjj4jgbMNHdT%2FtK7iD3eSqh%2Fh4mb%2BuMB1JB8KDLtru9noa16cqua%2FCvNkMMP1CJ0bY23NUAMZwqDP%2BP1uXW5Phn%2BBT6pj9IuAqVBVpZTj%2BcyxgQPaz%2Blj8sccT%2FyxrQLPGnC%2FsPfdYEjQ6PFQN2OuIXpzAr8JeY8ERkCd9fvu0q7zOXLjMzxlv9qALzA43sb0N8TnLXbX&X-Amz-Signature=157bac3160d9a09be5359352a6bb7923786ee6bef0b7a7dd874868471e0c9148&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEAH2GOR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKkqcGho4rjJ92%2BNahbQMYDkBNhGQKrjMVx7WfIZ%2BgLQIhAIL6P7ygK2qmcz1552NakDweXUuK5dMpY96b%2FNfK4NuLKv8DCGwQABoMNjM3NDIzMTgzODA1IgxjgwBPNMr16yOFhNwq3AMNi48E2jOs9MCsruLwB7iFftphPsAnWKRzJLh2m87Wk4daqZ%2FpL4DAnTIda3BXHvt%2BC9qSGcetWu3FD43RpHDHEX6CdutD9qd9%2B32%2BpMTDRIDGYcRz3vCpco%2FTFypcfvCnkpDk91hHtNbWLBJttDHp04iBoEVKlvuHB9Jm9cuWRkyAb14IpBvIT8XOaeYjCl9LILnHCpjvIeHZLQeaYpdbG2v2WZm8Jg%2FMwe%2BaJz1dAldUGGNBQv%2BpSSs9GTp9DqtDeeG8AbvjPb8Mo3rGySpc9uCX5szvwODWw3Q2QDZul66v26tl21XdgZAuly%2FMAG2vbraoFNZ3xTgo3LgBGUz2BzvhjIW3rLIeYjuSg9g5zzyPzhBT%2BrfsYP4YRc39lkFtf%2FPRO1l2jvyfM9xGODmczwYNf9hUKjAS%2B6Uc6FpRItlsIXcRXzPORAfJxC29N9wIMk%2B%2FOPX8yLoRGWYQx6py2tSWUYIEoNYy%2BIWkfTawvjB8h0zfBnq7tLzXxInImMM8vmslXeXctlYecNqg4SjjH%2BT5ZlewhawbhYQ5lroskFUc53z1MWdIVs8rLxbQ6yR0i4IZkpJMuaoONNblPZyNfFKdgCjuKeetyytLHea5RfQIq5AKVepqM1TwTjD2n9K%2FBjqkAfP6nvyRQqpxFgXBkKs7IwwTbVIotK6jhIzqrtjzsx3XuxMIqJySqTE1CgSz0P8jpUzI6J9tczeYPMVNKj4lKMiWzwDIH0g7kP8bTohoxxGsDqUc8WklPQrlsC%2FZhgq1L4BKCKif2ky4dGqfPaLKHARB1WEpB9RY2AEpMcOY7Rlqai%2Fn3Xo8oTwPpgIpiW%2BbMkJOXjN13rf%2BMsx6wmcdQ7AnKDmZ&X-Amz-Signature=5ddf6ceef550fc7f44b863a4220efbe5967dd095c26f6f4effb71146615c862e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKTG2REQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BJ9fQdRe3fsQ%2ByfHwiO%2FeJx0uYhYmWOUReO8QgonjiwIgNoDtP%2FkQLf3gcSO7M8wzuTOy5Sf3Me3jsN0TgH1VcdEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDODurNfcVCBM%2B3zIwCrcAxtfSpRyf3cxrjOjS%2FIJp%2FPB%2FAf2MVRdH9AjVvGXx8eVWEQHR8bhqonZA%2FZD%2F%2B7HAcJVgVRzSNbNWpiWvNHHMCn7d1RcBJ%2Bi%2B27RGMV%2Faqw5rsnNK3ylmCzsDYUoPknc6jB8kKG80nAgBUaAiDVibV0Cr8P6IRmwOTwE3kl9XmYF6SuJJ2NOxldNADZbw5ZXM2wjv966ms97u70%2Bo37Tkm51lGsmqi6YLxhz4NwyZ6ZPGep%2Bd%2FNzFFfQk%2BWm9dwM64YTZvmC%2FTBbBSN4aGzWnhRasaV176B0wILnC9N29S%2FCtcTh2W4mfkbetir%2FjfXwXKc8QZc0OHqFSYicg4uBEBfyd848y2U1mOvieq%2ByZHAUiD7K3MtV6aTgdWDXTCA2CpmGicNiOkOqdO%2BHPKayB1yWKG7f2TjUQQMegp6O8zSJ00ms5TgoVy2DtcEIm0efJS4MzsxRTXZls09ka0xSuyQB7zymvrPgYDQSPwXi5VnnXJz99KtQBwLFfmNZRqDnO5Y3cIt7WxsttLbMUFdrEhpl7rtEUiUd0T%2BfsT54WKjr7tAZ%2Fpc%2BPsKJ%2BkmqITnMvEzA6kBxDC2hANZEsmg5iLgUBAdFGQM9zW2P2fdDwsDzLOIgshR6AsXwhXhqMJCf0r8GOqUBW%2F3x04fRITSTEiMxKIvLL7KI8q7DY77rGIrpYfsQIPChvB5NuhkXJ8ej9PYlTbB99aJL8oN7TXrOwHReRoMJJ1i76xswHLc%2FONXW3b%2BZ9%2FJ70frRT896KFp1inspJvUaKEMBZ%2FNGkt7S2voxA9wQjHM8xg4lk5CEYxyn%2FRWYW54OLnE48bHQ7jQb74kb3UG3jMDl7ot93YIFxWuIopk91S9PmJ3c&X-Amz-Signature=8c1f4abf024e8298b7ef688d06706c9658c31da64039fbc187f20e7af5912a91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SU757W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYfy6%2BntLHTuxuQdkmzrcIP%2Bf1EbPPI%2Bhv99DC%2FZnmIwIhAIHkLpMa25NSKTJj8dzVc780n0qkVrV9eBR87gQmKMMCKv8DCGwQABoMNjM3NDIzMTgzODA1IgxzRvoq%2BJt04aYXfRoq3AO3Vfc%2BWGHFbqv8m5oDEPG3uXkxDqbLaYuBhzvGAVF%2BH1fa9gBp%2BlqZdKqtlbs34SA9sJRYgp1c5cnPs6pyErTrQ6ZZnhbx9Xpg4v2iIGEJrVh6FGxGg9h1jzT8jDgSd4%2BwV1t7rLM%2FwyhlsFFYMy4CQ9gMlz21Io5Gdg7FZotVY%2BaPUQE49RJ1Z32pMLmni39QT2CJ2AJruTi8SwOBrWvXB8xlw0ZgZ44QBFXHSSbNcIe%2B7uJcVubgxQuZ%2FSTCjcBbcUB4D0QPktGiakpLVFOUq9615MRKhTsFxvZiZz41%2BeK8byVwUeC6jNb9RQkn8LKISzfkqC87cCMc0fUMXAcrEPfVuQ1WXziIfgLfy1ZyMRMHwVBQk15mB2vRALqsLEbjd0ja7RHgsqOpg%2FGVbmUtKO8IAZ3U9D3VTizPFRWdgPJBK%2B4jssa0YQgd1N%2Bwij65xVkmdqp%2B7VNoixvbf516e9sySlsC1W28LHULXVZ%2B1AMYFkpmnnIwWocA1fD%2F36tXn3BG99TBemzHj3FyjrhGOoYZEQy%2FZsWvukIT82y6Ha7gIcEDBZA1TmDwPvqeQPLLsMtGhFGmPMEoVdG6isFd%2BERe7lGudSXTSf6EoHhN%2BuHIlCiIERxe9afNgjD6ntK%2FBjqkAUK8iaz7LPmHueRT5tOgjj4jgbMNHdT%2FtK7iD3eSqh%2Fh4mb%2BuMB1JB8KDLtru9noa16cqua%2FCvNkMMP1CJ0bY23NUAMZwqDP%2BP1uXW5Phn%2BBT6pj9IuAqVBVpZTj%2BcyxgQPaz%2Blj8sccT%2FyxrQLPGnC%2FsPfdYEjQ6PFQN2OuIXpzAr8JeY8ERkCd9fvu0q7zOXLjMzxlv9qALzA43sb0N8TnLXbX&X-Amz-Signature=b68068a6d58ab91a0397f7f7052e1142bc978db1d2b0dc91b6bb55af762857e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
