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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNLWEJZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKl8UvZ4nrnnneBmED0RDi86GKl%2FbFE1iNXPmInmdCuQIgS2UR9L5xKTe72gnP%2FjlmOxT6qk3TWzxw4Mws5dm94ugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC6woeTmO1J%2FGMs%2BMyrcA8nrBDLWvkqu3v37EWD%2BYz4QpTX2t1RMnD3flfPVOphiVv0CQIGxmnxGABH%2BvlkT2XgI7oW%2Bzr4VHpxa3IfNMbhg8RzDZXuSSYGK4aAmWbH5dnHQ6rKDE7yTRU3J%2Bf23MjP7z7vvwC7Umgi3CRcdbjzYr6X68ChyTRN6FEugJTJQrtHNbi3AloGaIXeZ%2FNOWyemOfcFtxg28QeZEudK5%2F13QuleWlpgoUlr%2FLjUH7%2B5bfouezIZX%2BaPUr0oTCmpeCgZ%2FGeP7fy%2F73vu7Qu1TVmnj5JMrFd9bm70uEiwvoemz6yazMhMFTTvqthES%2BBYO423IpCYsytKzX0M%2FOFK7wZveSIlOao%2BhxpDoQwOqA3D4F3RFEidxrdeeQNUP3n%2FRhi80nIHHh9x5fS3MdilOzA3fJTWuXnako8T9h%2Fc1eY%2B8GGfgCbE3dWmKGmk2LsGlChhkaTdJTjR3n0G90i9OMlp2PAwGcVyYv52S6gKUP4Vhbks34Bou0VCslM%2F9jHzty50Nlju4ap%2FjTE9D7iYMRro%2Fazff%2FNg84g23Qc7cvm5rQZdAxAhJe46k%2BAkL7YxdPNqgys%2BeGQo%2BzbRkmQXQRrQEalrACy4NbfQSFeKM4IMfw%2F0YWJRwbQGDY9P0MKbP%2BL8GOqUBgKWEooKXoEFD5dq%2FQ8bxKJzjj%2FZ5VMXDtV1GcJNaCs3GRlutB9cX8cf9WvWRrCaoUfdnVTUEbcZHiWj8%2FEf5VWMP61aPpkUYviR5rwhF0vWmt1%2BV0BK%2BqV3SkMsTnXTUrY%2FON%2FBkqqREtg6r%2B3ELIutkFkjZ%2BAZfOH%2BQT1r7rOswohjtdzf%2B5Q2y1iYutZO9FZTg6Ihg16TWpi2Wuy2ltDneztVG&X-Amz-Signature=496fb890d62dd566771a9ae706e543e73475fec5844a1b96610ea31c3c9c6d42&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNLWEJZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKl8UvZ4nrnnneBmED0RDi86GKl%2FbFE1iNXPmInmdCuQIgS2UR9L5xKTe72gnP%2FjlmOxT6qk3TWzxw4Mws5dm94ugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC6woeTmO1J%2FGMs%2BMyrcA8nrBDLWvkqu3v37EWD%2BYz4QpTX2t1RMnD3flfPVOphiVv0CQIGxmnxGABH%2BvlkT2XgI7oW%2Bzr4VHpxa3IfNMbhg8RzDZXuSSYGK4aAmWbH5dnHQ6rKDE7yTRU3J%2Bf23MjP7z7vvwC7Umgi3CRcdbjzYr6X68ChyTRN6FEugJTJQrtHNbi3AloGaIXeZ%2FNOWyemOfcFtxg28QeZEudK5%2F13QuleWlpgoUlr%2FLjUH7%2B5bfouezIZX%2BaPUr0oTCmpeCgZ%2FGeP7fy%2F73vu7Qu1TVmnj5JMrFd9bm70uEiwvoemz6yazMhMFTTvqthES%2BBYO423IpCYsytKzX0M%2FOFK7wZveSIlOao%2BhxpDoQwOqA3D4F3RFEidxrdeeQNUP3n%2FRhi80nIHHh9x5fS3MdilOzA3fJTWuXnako8T9h%2Fc1eY%2B8GGfgCbE3dWmKGmk2LsGlChhkaTdJTjR3n0G90i9OMlp2PAwGcVyYv52S6gKUP4Vhbks34Bou0VCslM%2F9jHzty50Nlju4ap%2FjTE9D7iYMRro%2Fazff%2FNg84g23Qc7cvm5rQZdAxAhJe46k%2BAkL7YxdPNqgys%2BeGQo%2BzbRkmQXQRrQEalrACy4NbfQSFeKM4IMfw%2F0YWJRwbQGDY9P0MKbP%2BL8GOqUBgKWEooKXoEFD5dq%2FQ8bxKJzjj%2FZ5VMXDtV1GcJNaCs3GRlutB9cX8cf9WvWRrCaoUfdnVTUEbcZHiWj8%2FEf5VWMP61aPpkUYviR5rwhF0vWmt1%2BV0BK%2BqV3SkMsTnXTUrY%2FON%2FBkqqREtg6r%2B3ELIutkFkjZ%2BAZfOH%2BQT1r7rOswohjtdzf%2B5Q2y1iYutZO9FZTg6Ihg16TWpi2Wuy2ltDneztVG&X-Amz-Signature=fed587c1b1f800f14e2f6e08a2858482b93d11c4c13de59d2e008a21ce58e63b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN5QJ723%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4eBY36L1G8sZCUI3kJEoYHFMUJdiIJid%2BGyHvOJZTgIgVTruKbcGtCLgklCYoyfU8gR7G%2FEgcmGAWt9TeZUKfOAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNnAGRj2NjYmLu7EuircA9G%2FMCrVkuENIToyb6NUODHtmjLkLQWaPw8YlLh8mPWefmQWyuAuldoh6SwCuN%2FV%2FFdrgIrlC8zcwgOztrYd%2BDrmP09EomGZYlpRJnU%2BBxKN9mpc1aU%2BvsA4ddyqNqu3jNo7tEIUmgLWv3rSP1PV%2BkyetAVmr9uuxQ0%2B%2FrjfyVUag4O44QfBs7nGsqVfX%2BmEm%2B05gssIoSp73EselN4JV22yW7lZ2h7feaWjVGy7kmDgp7Bnlr49Oe%2F58%2FqullVn618ymvTrmF%2BychVOqFsWhxAsN%2FdDlE9776M05faxjOg3PJrCQADAL0eV3pxVH9sD9L%2BT%2BYOgMnL1OOdAd10%2FyqL0P4Y5nTVdX20sUOd3LuajZSacQGfCflGv1gkQ2ZlFHaxCnUV%2Fh3DD9KMqCsyPohtY%2FWdgwPr%2FDewJz%2F3HLYWU4Nifzh36vnBtV0HtT3hRdgG1Z9mYy1xnj07dZ%2BvReazH4%2B06Q4uCwXJE8X4oeBRCO53HKASoqxZuQJOqiJF2%2FDhhk98oGne0BFgtgo5h6wVqwQDepmxP%2F7XHo5IZLygeff01ccBjM5oSmbCU46jJ3iVTpidAhbw0OXINRzey27LywvbLfzxXm%2FLcq9mdfxSVqADrkxNke5teCPhYMKPO%2BL8GOqUBbWcg2duakCeoNQkleTB5mLzoilcyl76nVgjz7Hkiwc8uacoOu2Oug1TZfaYCt9T9Y5hAfYVhSuuwNrbZL1RbD%2Fj2yKGmB8y7k1vkbRput%2BzLvWkVqKoJPwefAkapzqOE0LOPrp7guIRpjk4Tw9QP4du5buMHWN3q2qEDvKyB844uF4ThxwXGhqSPHuVDAv%2F%2FDMCntRAACPUpfDpAN7J5LSyXhWT0&X-Amz-Signature=12f2b63e5f167592ffb5dca01729ccde928e2facdcbe688c59803ad24a911548&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AYD4RB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKWy5arEmmCahUMdXOVxxCz2ZI8gXcrrpQb5TdlErCmgIgTcJgDBFRMw6Z4Dnmzqgqo5VH0ZuhmlQLEFiTSH2T7KMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH613iWFaFdnbFgpNircAzutian2Ght%2FdCLa1wJO3YXVKtCoR5BoGQxFddEtLdxdDFhb26Js3bQhCZ%2FygT%2Bp%2BNC1nGjEK4GmazCLLgJm42aWutp2%2BYi3LUxDqIENiUhTV251Er62xEw79mvZBJApr1jEJdYYtQiA%2BEQJUkVJxoIdXw%2Fhv9MuSpGb3UU0Rx5Hiq2Ap4oHFIyaE1JwMeyiOvfhlxAEoBu2%2FAeoe611aXi33HmPKyJoPoM4wr9LjnYR4tQkF%2FyV9E3mVKoJvla6P%2FJ%2F9nsneJ%2F3LFfnGoY7XK0NNtF4CH8DglE1RH8ruT2bpETObBGww0wjI4A5SgDw1vTNmvcofwQ0ui6N%2Fbxi85ZMyiv1sw6UHAV%2BYDCPtV3FoHEU1oJ4GOIji53v3Yg0K7HDzh9%2B%2BBCAhVWcaYBG9IlD%2BO0FTc9DtIfjB9XeJCdXFqLvlcvXKYvqfTKYvue4NwKlX69eXwuTRRcFnkoFfN0ijd6tFkg2kXyTzoRAS%2Fj05qQ%2FxkFEn26TLv6vagPYlZw%2FOGBd%2F0wvZLcVJ14ZAIvpAyLAPu7n%2FrQN7bdDsPeJBczYxZpyhbKx39oJxWiR4l3i%2BHNiNBVhiwVaySHQtkaTaO1mb3piARETgDZuQ5%2B8hGUebHQ%2Fhnz3BktpMJnO%2BL8GOqUBvIPbNHRhr0SIQNbcmJIbXzQUavD024I5MTv9s2rY3q6dBJ%2Bel8eDDV8RYIlXw7j%2F%2FLkGiWir6nGaSmOTJkxbEKlalQwC5Xqj12%2Fc02%2FBVxs0t%2BUVHdfo8bsQ9%2Fglvh27acbrG%2F0ktobHBJ%2FrJJsG98b8SC%2FsXp%2BckO9GsMiq0hxWij99fWvzWE4g1rhkEK%2BkPeaDJIceJcGKaDXAiXBNjfRJEWEA&X-Amz-Signature=5f7824e58f0c3b70ca572c9d50bb40a70fbedbd6800f29a4bd78f48094d63acb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNLWEJZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKl8UvZ4nrnnneBmED0RDi86GKl%2FbFE1iNXPmInmdCuQIgS2UR9L5xKTe72gnP%2FjlmOxT6qk3TWzxw4Mws5dm94ugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC6woeTmO1J%2FGMs%2BMyrcA8nrBDLWvkqu3v37EWD%2BYz4QpTX2t1RMnD3flfPVOphiVv0CQIGxmnxGABH%2BvlkT2XgI7oW%2Bzr4VHpxa3IfNMbhg8RzDZXuSSYGK4aAmWbH5dnHQ6rKDE7yTRU3J%2Bf23MjP7z7vvwC7Umgi3CRcdbjzYr6X68ChyTRN6FEugJTJQrtHNbi3AloGaIXeZ%2FNOWyemOfcFtxg28QeZEudK5%2F13QuleWlpgoUlr%2FLjUH7%2B5bfouezIZX%2BaPUr0oTCmpeCgZ%2FGeP7fy%2F73vu7Qu1TVmnj5JMrFd9bm70uEiwvoemz6yazMhMFTTvqthES%2BBYO423IpCYsytKzX0M%2FOFK7wZveSIlOao%2BhxpDoQwOqA3D4F3RFEidxrdeeQNUP3n%2FRhi80nIHHh9x5fS3MdilOzA3fJTWuXnako8T9h%2Fc1eY%2B8GGfgCbE3dWmKGmk2LsGlChhkaTdJTjR3n0G90i9OMlp2PAwGcVyYv52S6gKUP4Vhbks34Bou0VCslM%2F9jHzty50Nlju4ap%2FjTE9D7iYMRro%2Fazff%2FNg84g23Qc7cvm5rQZdAxAhJe46k%2BAkL7YxdPNqgys%2BeGQo%2BzbRkmQXQRrQEalrACy4NbfQSFeKM4IMfw%2F0YWJRwbQGDY9P0MKbP%2BL8GOqUBgKWEooKXoEFD5dq%2FQ8bxKJzjj%2FZ5VMXDtV1GcJNaCs3GRlutB9cX8cf9WvWRrCaoUfdnVTUEbcZHiWj8%2FEf5VWMP61aPpkUYviR5rwhF0vWmt1%2BV0BK%2BqV3SkMsTnXTUrY%2FON%2FBkqqREtg6r%2B3ELIutkFkjZ%2BAZfOH%2BQT1r7rOswohjtdzf%2B5Q2y1iYutZO9FZTg6Ihg16TWpi2Wuy2ltDneztVG&X-Amz-Signature=8ea50959f4c4bd0c5a4669dff1d409e71dd380a0c56b0ef1c35feced1a4723fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
