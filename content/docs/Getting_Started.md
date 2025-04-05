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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSB5KLW6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3jDbjjdAdtGCAEpK%2FXGKnYZIc164aI4yERJdvBbMeagIgPI8oOmwpCvoGqCKRVERX%2B%2FBybaIx98W4bgUmYnQ%2F5rwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOt62N8I87MN9oAYVyrcA1GINUdEH49WtOqKkHw0HkvIwidHdvZPeUK9PilsVEkgJzaQ0RUPVwQZSM9AbvToQyb0FoPIWdBcf17oB5O7NvjAXGX%2B7Ucc%2FUf4tbHwBi2xJw180cG5x45EVN%2BrlcaBLaWnJsv%2B%2Bcy%2B%2By6WK2RtAc8Kl0gEQ8dLGwQ8xWuZf5ljDNohplB5%2FE%2Fg3w4m87nKhuA%2FYBvdWFulQbpZEijcOUo84aRBsMY0rFKh5H4dYsxTkHfmNR6mtjOxmWyPUg9Q1efjMKqLTMCQaRnAZbcPSTrIa09zpbAuub5WKL9HTwgU9DRRvClTMLuIEITEQHsXPMVTf%2FXL4rEp8Wy0DmLZZ%2Bfi4sUD6iojDtsvfspbYsOuIbar5jeaeok9m5aRUEixQjsfNGLo0Pe%2Fchi3MidJmnKoebqGtn8Iu3snANmn4g3o7gDIcXW78ES9k%2FZTNSPHUHMJQhEwKBnfMqBEwAdHUrz64iDU5R%2FCWDoaOcurCQPqtpsbXBWxNmVsD6qy9i0uh3IT8oSnNpdnwmBUxiKrquKVer6AiXsodNYKVG%2FFByfNKvKGLiRIGh2FdQn0COrjLAxb4n34I0HuANBF0W0lavfvv1Xq%2F38coqN3e1NYtTJHkl3li7YZaqIZkPG%2BMOTHxb8GOqUBJrWRA9WSHl%2F3CPqq%2B%2FPbWIOz1462VdqTGW5s3b1YyCAKM3YIOOY6slAmal7cf3CyIW9Vsa4q3gnddjqLAx17BoXV7UmzsFdKEMOTqaMPJ%2BgWhFrRx0nXHoN2lm1YazTwD1f1VkBCqX%2F30N1DPRhRkjdLx2%2BruqgD56QmqsXq2SsZTPz94AVWOoAXOpMCTV3KZCmgqxAEFNqkLp%2B9rH2%2BxM42hfk4&X-Amz-Signature=20344fc298c91a7397382ef56d69cc57503b72b4bab06045ac521118cf49846e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSB5KLW6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3jDbjjdAdtGCAEpK%2FXGKnYZIc164aI4yERJdvBbMeagIgPI8oOmwpCvoGqCKRVERX%2B%2FBybaIx98W4bgUmYnQ%2F5rwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOt62N8I87MN9oAYVyrcA1GINUdEH49WtOqKkHw0HkvIwidHdvZPeUK9PilsVEkgJzaQ0RUPVwQZSM9AbvToQyb0FoPIWdBcf17oB5O7NvjAXGX%2B7Ucc%2FUf4tbHwBi2xJw180cG5x45EVN%2BrlcaBLaWnJsv%2B%2Bcy%2B%2By6WK2RtAc8Kl0gEQ8dLGwQ8xWuZf5ljDNohplB5%2FE%2Fg3w4m87nKhuA%2FYBvdWFulQbpZEijcOUo84aRBsMY0rFKh5H4dYsxTkHfmNR6mtjOxmWyPUg9Q1efjMKqLTMCQaRnAZbcPSTrIa09zpbAuub5WKL9HTwgU9DRRvClTMLuIEITEQHsXPMVTf%2FXL4rEp8Wy0DmLZZ%2Bfi4sUD6iojDtsvfspbYsOuIbar5jeaeok9m5aRUEixQjsfNGLo0Pe%2Fchi3MidJmnKoebqGtn8Iu3snANmn4g3o7gDIcXW78ES9k%2FZTNSPHUHMJQhEwKBnfMqBEwAdHUrz64iDU5R%2FCWDoaOcurCQPqtpsbXBWxNmVsD6qy9i0uh3IT8oSnNpdnwmBUxiKrquKVer6AiXsodNYKVG%2FFByfNKvKGLiRIGh2FdQn0COrjLAxb4n34I0HuANBF0W0lavfvv1Xq%2F38coqN3e1NYtTJHkl3li7YZaqIZkPG%2BMOTHxb8GOqUBJrWRA9WSHl%2F3CPqq%2B%2FPbWIOz1462VdqTGW5s3b1YyCAKM3YIOOY6slAmal7cf3CyIW9Vsa4q3gnddjqLAx17BoXV7UmzsFdKEMOTqaMPJ%2BgWhFrRx0nXHoN2lm1YazTwD1f1VkBCqX%2F30N1DPRhRkjdLx2%2BruqgD56QmqsXq2SsZTPz94AVWOoAXOpMCTV3KZCmgqxAEFNqkLp%2B9rH2%2BxM42hfk4&X-Amz-Signature=3aa7c29ee605babcd2241814ce9240ab3639413ae860304f1c80ff9aa6912778&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QIKPFL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDckaISmC%2FEK6giRcs3ZSHg99dBZiejvhi1M%2BxqfBQI4AiEAhcRIz%2B2Gb1GNOI4LjvbaSkhj%2BHlKVAo6kdQ6glNSt18q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFbUMJVIL4koIf2yJyrcA6HpjGflwYEdRsbzFmuoBdOI42MjrsPIslhb0aBIppCFHx3282q7grrDAOi%2Bx76PgQE7icBYxFSVwBob91j%2BpLgMKMJPeoVXdpTj4ZXS%2BoFUJpmKs%2BZegm9wqUjDXalLztoP8H%2BiEUoA0jWF4NR%2BvCFO%2Fylb042RziaQvyZ95v7HFYOFfZvvu%2FjSF1LZpvsfVOHldx4KW0Od7D6vwpXOSZVFFayZFrT0IsOrI6XT6ozpP7GESvs1SswsuG8r0TOKbkBRsdQ5DPgfHfb1f%2FLJjWLtAulZegOF%2Fd4iBzPqHKUDDvCan%2Fc8lbOX2XV8kCOz157ZNQoBNgg8RtVZ49kKThWv6Vv8CRSUz6jltL8YzLg8%2FRp0kRKcEZn3RbJZMRLmeMfftkO4GElesN5fSTURD1WHu0UWQLJejEzx1L%2Fzx6Piqpvl3xCd99bjMYEQgkWlqJkejcDlU2l15HqZe0j4jriM%2FlAvMR6D0l1czmnACHdsRxDux2q%2FbX1t1NLR4MZt3xbIAzpn6V1Ku%2BVY8pKxEfm6wTbqVPD8q8rEtY5peSWi%2BqxuXMm63tUctWeev4P3DjkQraB%2FDO7WKIUhd20rZIjv125Yo9MER8TJX6wrrvUQHdJ4kRAny%2FNScCaLMNvHxb8GOqUBBfVqshUHyu4VOyvoQno2uHgAKW9UJp1txQx9FJAytLnp3nWGwfLUwud6ZQZPcxl4JC4M%2F%2BWerzFvZI9Voh%2F13RJ22nMkrbhknRmxSMH%2FcFnQqcTfmWBE71yOpzkNevFgXSWOkHkaK0vs3gpB%2BWOpj2hmabe%2FLMCr7%2F2fy0Wmy67RM6LPXG6bHwSu4uKP%2Fw6JF%2BvCjJfFQhlTVdUvkfXQRHn6DHak&X-Amz-Signature=734a3d0fccd4c39bba47fe6a6b6d2e14ab58fd9cb57672d7570360ac2af9c0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646P2KXZS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2suLhKhTyCbe9mt%2F4NUQlleoa33sTen%2FB8JgdMQOx7AiBrPD%2B6hX8TikAzNPs6DCJthhEX%2FvP32gGcvAjYHoVE3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMBhZL92E%2FxRvZ1lCrKtwD5ziHU4%2BmKTmnM3G7AQTICYwnk1zRloaCcm2xIxFIcEbtpQFBJhHsNNDIZyqvps7TQU1kItOztyVPlMGsSDoqgjC8Ls11K4jf%2B%2FOkG2yGvwR6T1oo4klLqoBg94kENlVAwbXEgOwY%2FflCqrGRsyAKnifyvypfsR4Wpw66W6XyUfLllBPMPGS9t5rXPF4xbuEXO%2FPA2hnI0qhZbaifdS%2FypmEgq1l8hnnkRScpEhqW3vwkBQtP%2FkJqs3esI4zbJFwAAndJDpaK8KIONobUzUBCZMj9L9Pv3p8WjMDkityRk6qwelzGqdNDb11MEih%2BBzXRchE7LniVUk5ycfO2aNDFFgJLGtttZjcj4ZHr8CReCHCMXXUhqvT%2FYlmNi6MiSFtKnv3hkJgeL8d0QNAbSBFDdMxcpQ%2BWEBADQh%2Fa7Rn46GKtTP4P4NDbzR7k58sENcosNBtloRK100rM0jdctf87hCJFhrTydU3eKxspOqnEYoG%2FlhstKLDQz2b55vorF3hdUqVxfJW7OpY1yM8%2BOUkrWMKCClxBwdvf%2Fs3qPl6wcjpi5DATVqTw97DfIEzY7yTiRFv5h8vo%2FqhJpCj%2FVfS3VMGuSVOO0eh0treNyGIDUshwoFsmuiga89znb%2F8w%2B8fFvwY6pgHg4eBXWadCLkhhS1QoDC5g7BPZrmktLfbzr8mJJnJUjYyluryVHSay2jclpXoZNZWuS4SKsmvFagFs7cc1j2GoX19gX2zlfRUsXJr2FJbofL0dbnlt%2FNgrE0G3QBH%2BLD7EGClL5EzkjzzbKeOZo1oH8u8X4YtCjlbphnYqEAt%2BKjLgyDqR9IgOYuZIqRxNQTrek9jSsphf7dzcMBxiD3RUBJlQQCKB&X-Amz-Signature=f2c9be02106cc38bb238e5e08b999c443dce3f40d749bc88bc17944d2cd72e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSB5KLW6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3jDbjjdAdtGCAEpK%2FXGKnYZIc164aI4yERJdvBbMeagIgPI8oOmwpCvoGqCKRVERX%2B%2FBybaIx98W4bgUmYnQ%2F5rwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOt62N8I87MN9oAYVyrcA1GINUdEH49WtOqKkHw0HkvIwidHdvZPeUK9PilsVEkgJzaQ0RUPVwQZSM9AbvToQyb0FoPIWdBcf17oB5O7NvjAXGX%2B7Ucc%2FUf4tbHwBi2xJw180cG5x45EVN%2BrlcaBLaWnJsv%2B%2Bcy%2B%2By6WK2RtAc8Kl0gEQ8dLGwQ8xWuZf5ljDNohplB5%2FE%2Fg3w4m87nKhuA%2FYBvdWFulQbpZEijcOUo84aRBsMY0rFKh5H4dYsxTkHfmNR6mtjOxmWyPUg9Q1efjMKqLTMCQaRnAZbcPSTrIa09zpbAuub5WKL9HTwgU9DRRvClTMLuIEITEQHsXPMVTf%2FXL4rEp8Wy0DmLZZ%2Bfi4sUD6iojDtsvfspbYsOuIbar5jeaeok9m5aRUEixQjsfNGLo0Pe%2Fchi3MidJmnKoebqGtn8Iu3snANmn4g3o7gDIcXW78ES9k%2FZTNSPHUHMJQhEwKBnfMqBEwAdHUrz64iDU5R%2FCWDoaOcurCQPqtpsbXBWxNmVsD6qy9i0uh3IT8oSnNpdnwmBUxiKrquKVer6AiXsodNYKVG%2FFByfNKvKGLiRIGh2FdQn0COrjLAxb4n34I0HuANBF0W0lavfvv1Xq%2F38coqN3e1NYtTJHkl3li7YZaqIZkPG%2BMOTHxb8GOqUBJrWRA9WSHl%2F3CPqq%2B%2FPbWIOz1462VdqTGW5s3b1YyCAKM3YIOOY6slAmal7cf3CyIW9Vsa4q3gnddjqLAx17BoXV7UmzsFdKEMOTqaMPJ%2BgWhFrRx0nXHoN2lm1YazTwD1f1VkBCqX%2F30N1DPRhRkjdLx2%2BruqgD56QmqsXq2SsZTPz94AVWOoAXOpMCTV3KZCmgqxAEFNqkLp%2B9rH2%2BxM42hfk4&X-Amz-Signature=f741156e83725b26e465b924711d94a888cb26326a2590ae558f37198d005978&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
