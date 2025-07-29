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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4CMXQM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDxbGhVnSBlH1dHXbTaAdq%2FGP1s2GE8V55u7Zzc4NEF3AIhAK8xshF%2BzlNDjU%2FEhC41k3Z4L%2F%2BCD9s1jcrBMYvfdqlYKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhJjjNhx6bGao6%2BsIq3AOhSF0vNgEu1z%2FkbceTW4V872x5k%2BR0ppEhxdhZne4HYVIlsFUVEstiJexlYAZwLF9YfSKsHhAZRv38mDreyb6CJ4UH2vbaXaH%2FttDH%2FUt19no3ZIKL8qi3h9RqEJqFFq9QGA6IV8h8ph8Xsg16uJd2eEwo82UlE0%2FB%2BPji4LxzjzErg%2BGrdzBlaS2utpXCtdbaL%2FaGfVyrX5mIAvjHX1%2FB7LDv6euxNO02CbhHbcMAhL9pH%2BnTOcIwk8YDH748HD1rZpYb5cHGIRlWBxwftebOOaFFFSEe6CnLg7PlpibR0JE6pUaEic6831FuaQyKYcMPHLkQRHlHYcjtVzhsZnZo6kG8yNvnOJaz2qGZbeF4FIvCvw6MVp%2B5s%2Bz08wKo1a9idYIa3ldeQFhjVUmx%2Bnc2yWNw6aGT6BmFD2Bfq2kvk9SConNiSJZSJmoBTaaB6Jo7j13XUaLUnZ%2BRXcqxaFq%2BuC0m9aUC1c7UZKvc%2BaUufqiEdYOS8ONxGD%2BuqDLhZQVcxr52SqZp50blvH3MqpMoF6yd%2BuP38lxVaVLeaeqswDriQCjBMVRt%2BYStBsloFnvcNxaLQPF8K2hew36WWWjYOa0ko%2F1WCo6pxraAudvUSIXiuWfoyyh21v%2FUyDCRzaDEBjqkAQKynmokRY6wtxqzXzGfHiCs71mlc7kBhL1oVsWlCDYVeY2N8wpVGJtJpUBAWsxRrwd1vm7DGWAaZvEtPqb6fRB0DoQz3b0Wpv5l38Mq15hM96m7%2B%2B9YPP1BmOJuHMOgZ5fOulVZ%2FuQdZomnsKYVNUh32IfyTI6GQ1ZxGsW3ZZ1maYIlDBqP9xQeylfYBcCcIWJdw72yb1fUP%2FvmqFhY5CDF3p5h&X-Amz-Signature=9eeadd04645ca0144ab0e07a564d746593b3776e601df57901568107a5a16754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4CMXQM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDxbGhVnSBlH1dHXbTaAdq%2FGP1s2GE8V55u7Zzc4NEF3AIhAK8xshF%2BzlNDjU%2FEhC41k3Z4L%2F%2BCD9s1jcrBMYvfdqlYKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhJjjNhx6bGao6%2BsIq3AOhSF0vNgEu1z%2FkbceTW4V872x5k%2BR0ppEhxdhZne4HYVIlsFUVEstiJexlYAZwLF9YfSKsHhAZRv38mDreyb6CJ4UH2vbaXaH%2FttDH%2FUt19no3ZIKL8qi3h9RqEJqFFq9QGA6IV8h8ph8Xsg16uJd2eEwo82UlE0%2FB%2BPji4LxzjzErg%2BGrdzBlaS2utpXCtdbaL%2FaGfVyrX5mIAvjHX1%2FB7LDv6euxNO02CbhHbcMAhL9pH%2BnTOcIwk8YDH748HD1rZpYb5cHGIRlWBxwftebOOaFFFSEe6CnLg7PlpibR0JE6pUaEic6831FuaQyKYcMPHLkQRHlHYcjtVzhsZnZo6kG8yNvnOJaz2qGZbeF4FIvCvw6MVp%2B5s%2Bz08wKo1a9idYIa3ldeQFhjVUmx%2Bnc2yWNw6aGT6BmFD2Bfq2kvk9SConNiSJZSJmoBTaaB6Jo7j13XUaLUnZ%2BRXcqxaFq%2BuC0m9aUC1c7UZKvc%2BaUufqiEdYOS8ONxGD%2BuqDLhZQVcxr52SqZp50blvH3MqpMoF6yd%2BuP38lxVaVLeaeqswDriQCjBMVRt%2BYStBsloFnvcNxaLQPF8K2hew36WWWjYOa0ko%2F1WCo6pxraAudvUSIXiuWfoyyh21v%2FUyDCRzaDEBjqkAQKynmokRY6wtxqzXzGfHiCs71mlc7kBhL1oVsWlCDYVeY2N8wpVGJtJpUBAWsxRrwd1vm7DGWAaZvEtPqb6fRB0DoQz3b0Wpv5l38Mq15hM96m7%2B%2B9YPP1BmOJuHMOgZ5fOulVZ%2FuQdZomnsKYVNUh32IfyTI6GQ1ZxGsW3ZZ1maYIlDBqP9xQeylfYBcCcIWJdw72yb1fUP%2FvmqFhY5CDF3p5h&X-Amz-Signature=980e66128a79ad157399760b29c33027d2624979d72f6e2dd5fda5c0ed366207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4CMXQM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDxbGhVnSBlH1dHXbTaAdq%2FGP1s2GE8V55u7Zzc4NEF3AIhAK8xshF%2BzlNDjU%2FEhC41k3Z4L%2F%2BCD9s1jcrBMYvfdqlYKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhJjjNhx6bGao6%2BsIq3AOhSF0vNgEu1z%2FkbceTW4V872x5k%2BR0ppEhxdhZne4HYVIlsFUVEstiJexlYAZwLF9YfSKsHhAZRv38mDreyb6CJ4UH2vbaXaH%2FttDH%2FUt19no3ZIKL8qi3h9RqEJqFFq9QGA6IV8h8ph8Xsg16uJd2eEwo82UlE0%2FB%2BPji4LxzjzErg%2BGrdzBlaS2utpXCtdbaL%2FaGfVyrX5mIAvjHX1%2FB7LDv6euxNO02CbhHbcMAhL9pH%2BnTOcIwk8YDH748HD1rZpYb5cHGIRlWBxwftebOOaFFFSEe6CnLg7PlpibR0JE6pUaEic6831FuaQyKYcMPHLkQRHlHYcjtVzhsZnZo6kG8yNvnOJaz2qGZbeF4FIvCvw6MVp%2B5s%2Bz08wKo1a9idYIa3ldeQFhjVUmx%2Bnc2yWNw6aGT6BmFD2Bfq2kvk9SConNiSJZSJmoBTaaB6Jo7j13XUaLUnZ%2BRXcqxaFq%2BuC0m9aUC1c7UZKvc%2BaUufqiEdYOS8ONxGD%2BuqDLhZQVcxr52SqZp50blvH3MqpMoF6yd%2BuP38lxVaVLeaeqswDriQCjBMVRt%2BYStBsloFnvcNxaLQPF8K2hew36WWWjYOa0ko%2F1WCo6pxraAudvUSIXiuWfoyyh21v%2FUyDCRzaDEBjqkAQKynmokRY6wtxqzXzGfHiCs71mlc7kBhL1oVsWlCDYVeY2N8wpVGJtJpUBAWsxRrwd1vm7DGWAaZvEtPqb6fRB0DoQz3b0Wpv5l38Mq15hM96m7%2B%2B9YPP1BmOJuHMOgZ5fOulVZ%2FuQdZomnsKYVNUh32IfyTI6GQ1ZxGsW3ZZ1maYIlDBqP9xQeylfYBcCcIWJdw72yb1fUP%2FvmqFhY5CDF3p5h&X-Amz-Signature=6a31af492d84dc4adb49fae7669728ea7b93a5585e882958e3a921433f6efa63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4WNQ6K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHEMvfy9AfZ5TlN77IvfuKxyoBj6YP4SbMVfoBRth9%2FfAiEAit24uKb9ebIZbRVJVXAVqa%2By7CjX%2B5vzipoLA7JGA24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP4f%2B0CGFNW56qqmircA%2FwxMLwIMlKoGxr%2BoDVRQH3BHSYwZZ7NwxvDykcp1Br2GL5JZUPd1jeup%2F8%2BEH4Zww%2FmxUMiipWWVzXhFlJPosvzDoGnwZUGh%2Bl9FG13BMS8hhteQuOJm9wrx%2B2fiZPMsekchuSJOAs63dJzHof2Un%2BCsVy0PUo82MqxLpbt1JtKXsQgBvzOIOqsS%2FKIJZ0lVZ028H5qDOi%2BquGT%2BboLpLiCbi0FSWDvPaJFwUeD7DvDSnDSY49FShutOaMg1JV2tyHIMGT%2FyI8DM9ZRMhWknghAvpcMM81iLWl5viN%2FAIPaKr1TrQevZBM%2FOAyz5lKS80yKCIR9yGncv%2FWWZ1biobyozigzenjqYxMX09MpwQ3rrsl4NSpEiR6Y2r3fG3JQG%2FDI8I%2FrwN%2FA00ni95lNwTPBCNki5LYIDcWoaFGopxIV1fuL2Vv8CWLV63Kkrb%2BRFhJb09BFaJDNf11YkOQSsp8U5XVCZmydFTYNbAH%2B05hNT7m2bdQdMIMx6xNGTC%2B2XROrhO9xzD25NoZe9Q%2BxY3jO1UVU7tVnNKuVZFQYzBs7aUgx0Np1aouZSIl9yhK7s9pB1ooGEGzRFiVIz%2BTKbLClh3dXNh6PhsXVKbYcyqq7Ss%2BXnka5n3RBmEHWML7NoMQGOqUBtFuP6yZrr5GuAAD%2BS4UDX%2BhikKI6SaWAlHzzAzhaRFgjPNqB0jdq86YQB6qG1%2F%2FRPwasnibxdGTpL55cgbRbzNv19jmpkGGgSoEFtdZFms62nSR0FubVdhRBuCm2WRRZF20xJaYdnUzIS8rlrfNYWTFXeG39qRA%2BsEleYDF5zcjz7arKMTCBxgqq4ttSB%2BcvO7Bsv0sv4RnjGAGrleuOdzoDL4Za&X-Amz-Signature=5752ca5a1a32b4c43e7e9131eb1bb953097684fb1fbe614bf6174a5b233780a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JKJUCRT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHQzDT4BOt5Wg7l2rU2gh95UIOfgm5EWcGKqKTkAipFNAiEAiCV0rTnp2tGQwzO2djMdAa5UuAxxlGtGBCuXmEHdtiUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZVyWsDD7VVGsTu%2ByrcA2DaALzJxSs75WInM1qexqqj84YY%2BFKjIBKFs81h7l11cUqaBuswHnf6O9CkgRmxgNd8UX0acm22V6E5Gh8oimuBeA0fpDZxdRrbK7tWaiXzGE%2B%2B6oQ5K%2FW6Jpx0fWJuMqRWijQuH7JNBT0n73rI0DvPADfsTqM5M3GGADG25DTMIyPYYw7xG%2FR%2BmBdgzgb3PC9jlINEwJCVfag%2B4fbGz8OXU51C7aW7lnD%2FAuQpAVBtWjxXghN9ntXaAZzaPD418Wbn37v%2FT%2FlV7iSsoiPYbj0P6Ax8H8rsZkcP2ApYmu0QUl3Okgkncs%2B7N%2BGKUT4l92fA9139NzK6Ka5BWU%2Fnbhu5ojR4YB1W4kXP%2Fpv1qyYe8evzcv%2BmsbBcMv4Z%2BXXoDmZUPt63o2UdvHqOjL3rgcKzkiew%2FZZP%2BqXm7ncdn4QuS8gxyeHaR%2B7FzqczBpSoqSCg0DZMRnBgrWm7aCepjS9b3xvwNWsA35Oszlgz2zOdrZrmPyXIqFO%2BxsLfqppBFf72Hic3%2Bb%2BIQMQKtqjQvKnqAUejEg9IU7KqJh0MjVsEAqe6JMrAVjd3B3Ssh7FzrJfDrpeeT2ljP9anuNJQD921cT89YAoi7%2FVcocnHutyUbncuPVedSeY1i3Q9MMDNoMQGOqUBMMgD%2B5NuPllR90dcYXvMJkC4WqMNwR4POfTnNqo0KS2B86gLOOAOj8%2FIlYsmwa5Ih%2F26rP8i0C5EUB4jOtrUYFAuBXodzxZgz6YS%2B7IkdYvbEnc9jo0c2752z62QPMbgIiWbTaQLlG3%2BjJ%2Fwl0FoWEiHHVpKYTjupOJzAQH7N6xiFUr3VJRkPFIL08h3fR2SA%2B80ri9M0EafjwHD9ipnvz%2B%2BLC%2Fj&X-Amz-Signature=c6292d73f065ef3e11c444a23cfb66a84f4dd8dc0a662911bb7bd51965a8b9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4CMXQM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDxbGhVnSBlH1dHXbTaAdq%2FGP1s2GE8V55u7Zzc4NEF3AIhAK8xshF%2BzlNDjU%2FEhC41k3Z4L%2F%2BCD9s1jcrBMYvfdqlYKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhJjjNhx6bGao6%2BsIq3AOhSF0vNgEu1z%2FkbceTW4V872x5k%2BR0ppEhxdhZne4HYVIlsFUVEstiJexlYAZwLF9YfSKsHhAZRv38mDreyb6CJ4UH2vbaXaH%2FttDH%2FUt19no3ZIKL8qi3h9RqEJqFFq9QGA6IV8h8ph8Xsg16uJd2eEwo82UlE0%2FB%2BPji4LxzjzErg%2BGrdzBlaS2utpXCtdbaL%2FaGfVyrX5mIAvjHX1%2FB7LDv6euxNO02CbhHbcMAhL9pH%2BnTOcIwk8YDH748HD1rZpYb5cHGIRlWBxwftebOOaFFFSEe6CnLg7PlpibR0JE6pUaEic6831FuaQyKYcMPHLkQRHlHYcjtVzhsZnZo6kG8yNvnOJaz2qGZbeF4FIvCvw6MVp%2B5s%2Bz08wKo1a9idYIa3ldeQFhjVUmx%2Bnc2yWNw6aGT6BmFD2Bfq2kvk9SConNiSJZSJmoBTaaB6Jo7j13XUaLUnZ%2BRXcqxaFq%2BuC0m9aUC1c7UZKvc%2BaUufqiEdYOS8ONxGD%2BuqDLhZQVcxr52SqZp50blvH3MqpMoF6yd%2BuP38lxVaVLeaeqswDriQCjBMVRt%2BYStBsloFnvcNxaLQPF8K2hew36WWWjYOa0ko%2F1WCo6pxraAudvUSIXiuWfoyyh21v%2FUyDCRzaDEBjqkAQKynmokRY6wtxqzXzGfHiCs71mlc7kBhL1oVsWlCDYVeY2N8wpVGJtJpUBAWsxRrwd1vm7DGWAaZvEtPqb6fRB0DoQz3b0Wpv5l38Mq15hM96m7%2B%2B9YPP1BmOJuHMOgZ5fOulVZ%2FuQdZomnsKYVNUh32IfyTI6GQ1ZxGsW3ZZ1maYIlDBqP9xQeylfYBcCcIWJdw72yb1fUP%2FvmqFhY5CDF3p5h&X-Amz-Signature=f59a625d3cb505a835a999d45fae60f5af3c5ac82b5cafc695ad26fa41f14d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
