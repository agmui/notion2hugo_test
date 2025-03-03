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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662POZYKNF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNxwtifmUwnv4tqxBNrv2FtsP%2F1Gga4SKssv%2FxAbd%2FQwIhAOywAP21iwCOcs645yTiZsl3XIvgIf4JCP%2FuW1r3cStnKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl0b7jzsWOf0QxUjgq3ANMGE9CdJtSQpT8JIgcqcBkwhmmGDYItUjj74brvmBmv4JoGy3MbxX2DG89ovdGt2LhWn%2BYvHKqY8LQDr%2Bvq369Bbet6N7XlrGrTrD7NQ7P93dYHV4K76%2Fhho1TexCROkstK%2FALagxK%2BfziMd63LRzZmKdflkl44jJa2lphqwsaqE93yuasxVZuUEbiWniJvsmdps5NdIeNP1%2FG4Lpvv5S0y90NII%2F7xAmv%2B0xzGpZSQ7sa7COlcFcZr9%2Bnf4Ax9KsqEk6cce7uSWLtnOnB5K%2BwyafdOrqL0MekvrRQUNNEM0r0bY9EE7jaXHxxhY8jZY1D%2BdJ67WXcI6oU0ZqS2zgnd968zDl%2B7pj2Tncgy8cLBTD55cOUbNYFZGLMnHaCCCfMY4lpCIuIx5i9n0uPdqOXrkHzpEf82GCEgYMwCRz%2FktGlRva4FfqLWYkUVkrSrs5CCaJrJLmWmzHl7cpAMENoVA0yGmS8bXzSlSx59m8ZtW5C016RS5zMzNB%2BdWD7wFlKm041FIJw8zz9%2FfSVDcZE8nuExur1bV6HfhBB8M%2F0tr8KGivdEbio55It55Ko92a%2B6tXC7OZoZlQ0DUSTh0o9wsHQzj1OJYEsE0SHmdAtSfBMD%2F7tRKA8j9PE9TDtnJa%2BBjqkASnj6T7btipndj8zbtEAhgVdbmQDaixgkhuzfg8HvLOIfBnF09HpMV4f9yesB1YgsaaVvH8%2BDuptKEovkxZzmzvkpceY3cWvrs0fwQJ7jnOhv376wAu5jaTom60uC%2BLj19Kv2WD0cngtTqZ2NWT5hO4S8CM%2FwVkXHL01hTh8BemtXiGakLWh4TG5se0yF5knL2gDRVucllz%2B1U5WIH9Je4rEBp85&X-Amz-Signature=66e0a38bb61d1b2f465d1aca99244ece00c76b865d908beab749dd357ff08eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662POZYKNF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNxwtifmUwnv4tqxBNrv2FtsP%2F1Gga4SKssv%2FxAbd%2FQwIhAOywAP21iwCOcs645yTiZsl3XIvgIf4JCP%2FuW1r3cStnKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl0b7jzsWOf0QxUjgq3ANMGE9CdJtSQpT8JIgcqcBkwhmmGDYItUjj74brvmBmv4JoGy3MbxX2DG89ovdGt2LhWn%2BYvHKqY8LQDr%2Bvq369Bbet6N7XlrGrTrD7NQ7P93dYHV4K76%2Fhho1TexCROkstK%2FALagxK%2BfziMd63LRzZmKdflkl44jJa2lphqwsaqE93yuasxVZuUEbiWniJvsmdps5NdIeNP1%2FG4Lpvv5S0y90NII%2F7xAmv%2B0xzGpZSQ7sa7COlcFcZr9%2Bnf4Ax9KsqEk6cce7uSWLtnOnB5K%2BwyafdOrqL0MekvrRQUNNEM0r0bY9EE7jaXHxxhY8jZY1D%2BdJ67WXcI6oU0ZqS2zgnd968zDl%2B7pj2Tncgy8cLBTD55cOUbNYFZGLMnHaCCCfMY4lpCIuIx5i9n0uPdqOXrkHzpEf82GCEgYMwCRz%2FktGlRva4FfqLWYkUVkrSrs5CCaJrJLmWmzHl7cpAMENoVA0yGmS8bXzSlSx59m8ZtW5C016RS5zMzNB%2BdWD7wFlKm041FIJw8zz9%2FfSVDcZE8nuExur1bV6HfhBB8M%2F0tr8KGivdEbio55It55Ko92a%2B6tXC7OZoZlQ0DUSTh0o9wsHQzj1OJYEsE0SHmdAtSfBMD%2F7tRKA8j9PE9TDtnJa%2BBjqkASnj6T7btipndj8zbtEAhgVdbmQDaixgkhuzfg8HvLOIfBnF09HpMV4f9yesB1YgsaaVvH8%2BDuptKEovkxZzmzvkpceY3cWvrs0fwQJ7jnOhv376wAu5jaTom60uC%2BLj19Kv2WD0cngtTqZ2NWT5hO4S8CM%2FwVkXHL01hTh8BemtXiGakLWh4TG5se0yF5knL2gDRVucllz%2B1U5WIH9Je4rEBp85&X-Amz-Signature=c27daceb7b61bee7835bcfe12ec27f7e1e146693a6f5e471bb9f9b38f5e9e328&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHD4UU6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVpRIrj6KnQva3tO4i2YKfjsTYv6R5C9nm0j2t%2FZz2QAIgSrKlac9aXKbn%2BuP2pfbj%2F4IQm1PQyYt0IUEg3RU4C%2BYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBY%2BswyCn6BOhbCZHircA7MJC%2Fhw%2BiE56sDRkw5l4pACSKDXukewCKxGhPjux266DTJduOYNaaBCgl02uOw7GvYFRT9a%2FVfitQuxBq91mGhRIAa9h1fPV%2FRwmcQze%2BaRVr6YMKicTSZa%2BZp2pHdbFd2OOq4umumdH5NHabnghihlWx1%2BKWYrQkHLZ5yRKTcXU%2FLGVk2Rg%2FrGtkDwUbPhp5OtF5Q41iNZXOyUuK9fWWQepKFqmQhI1NKGFWpj%2B19R9%2BjVpziz0S2s3pK0BJ64QkjPfIiFUgvj0691gfCge3Nc8fgG2oREduE3DUzIKCUP8QwSZnHZdMDyYdlJAVwd5zHTaqF0NMALtX%2FX358NUzfRPrLVl8AO%2B7XvWzo2T%2FxehuCgrs5osm6QEnzDc0AwjZ410dhhGorrsaVevVFd6J56PdkqQjuhfNKG7TC0jo86EeP2dmE8pP7JQcU2pFFfaAkc5i%2FeP984QpfXHi9qkxAzvkAiMH6N%2F7T6ZwJ1JZ9JDLttgL04J57wghLfmDfnxf8oRn%2BJMET8c3TMPsSFnPZ2Ss3BepA41j1xr5uaDe%2F4u%2F7y8Yqi5RywWAo5RP8tgMG2rkxiF0N6zL2961sUdXNWXZseDtz4UrTM2KsHYYgNffqSAUKFcDYt9d%2B9MLGclr4GOqUBR1Nt2S%2BqJuh0pCRGZz5Lcl7dQxqZmKLhIkt49hbMUS8955LA6b5k%2BY%2BY77XDIXp9axr7T%2FkwvguVPxU2BZxME%2FmyGu8G4Ow7W6I%2F6B%2FzhrJK8SmBjsZTeQ%2FQz%2FQ%2BR%2FuIC%2BVJsIv3hHJ6luixOif709%2BUKWRzSn3tm4j4y1zHuOtdkQaHM1JNpcBsxa9Kep4vmlfPIrR3kOuqRXYdosHRvo%2BVJgeD&X-Amz-Signature=dfd284b03c5299bc49838647f7f6f358282ec72423e6fc1a812ca53c83987e86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGP5DCN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDWsJCOXEo%2Bo%2BjfXzEwN6c8xNRNf20rzrPMOGw9T4zCgIgeV5V7EnmxZW3BPtj4hEzOOW4ufdiP86nk%2F8xZD5aZM4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF3Zz2GVSkeljcpTCrcAxs480%2F8VVS2JCKF2UtI5zImtdUILCHbxnseGWlbC02Wh4%2FXGXkp1C3BjlK0QHXWO%2FKVdbJK4Q35%2FRjmSu79xHRmf95czYkZ4xeRb2MV5qFyzvF5t4XE16MPo5%2BDMDNckcy3gkcWvQOaZpVYvQ6pRgzveu8Rzl%2B2qRdLQkA2xS4buyXl0el7zA0DQU%2FKh3BPyqettLIkrEN4QUcJla%2FvmOk5LMt2heodfmIaA9%2B0xWxNqBsKrvE7Jx1qix%2B2cVpfjamcssRwtSS0A8%2B95DOyVtagkNPiQiTvVAcj1j3VjaA2U74BaDe0xysq9utjDGD%2Bp%2F9SxFEOBUcmmSHPrWc78VCzZ5OvI5HpSRb8%2Ffk2uMYjt4ZzcGR86HmEhMwl9MgTQszm8DnP4V14%2FsxDA5FGX7pKCzkWkUiue9cXDNW2MDpYFJjPOFH8qyjHrIKpLcbmZChZVSC%2Bzs8NGxjZfcEAok8oRRzmyzEU%2FWRv6k09tii6l8xiY8rADwnoV19dWwxeJcxaSjQwNGn5ND6QSHYYh%2FXkZfhEak1hYkxNAKfToVSflveSoEDc4q%2BZAjqFNxOIW6uH3%2BBBV%2FYvYzl2YUckyzga2w7nBxmtRIK%2BLhfb1mZ1e4HEXW0KztqIQUm0MPmclr4GOqUBZeyd0lQiDqvuAo577TDMS01ktFFnW2z4qfHh9H8fXS0RzspKJBb1iTcLbWvl4Wo5sB0rpvT%2BS2odpusPuVnHlEDZMPVaf7FzT8QFWeKrmwWaxbJmnfXEegzBcMRhl%2B4TFpHQJ7JraxV6%2BQmkczvCFDuL9Kp12QxXyAThSR2pB69yaWe3ywOKEBy%2FQ%2FePKmaOOKK9Ht89hLL1ugvdecMLvqtGDGyi&X-Amz-Signature=d94fbbf61f322babcf2c4d22de318468b6201d76684a9a392d1825ca66c9ccdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662POZYKNF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNxwtifmUwnv4tqxBNrv2FtsP%2F1Gga4SKssv%2FxAbd%2FQwIhAOywAP21iwCOcs645yTiZsl3XIvgIf4JCP%2FuW1r3cStnKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl0b7jzsWOf0QxUjgq3ANMGE9CdJtSQpT8JIgcqcBkwhmmGDYItUjj74brvmBmv4JoGy3MbxX2DG89ovdGt2LhWn%2BYvHKqY8LQDr%2Bvq369Bbet6N7XlrGrTrD7NQ7P93dYHV4K76%2Fhho1TexCROkstK%2FALagxK%2BfziMd63LRzZmKdflkl44jJa2lphqwsaqE93yuasxVZuUEbiWniJvsmdps5NdIeNP1%2FG4Lpvv5S0y90NII%2F7xAmv%2B0xzGpZSQ7sa7COlcFcZr9%2Bnf4Ax9KsqEk6cce7uSWLtnOnB5K%2BwyafdOrqL0MekvrRQUNNEM0r0bY9EE7jaXHxxhY8jZY1D%2BdJ67WXcI6oU0ZqS2zgnd968zDl%2B7pj2Tncgy8cLBTD55cOUbNYFZGLMnHaCCCfMY4lpCIuIx5i9n0uPdqOXrkHzpEf82GCEgYMwCRz%2FktGlRva4FfqLWYkUVkrSrs5CCaJrJLmWmzHl7cpAMENoVA0yGmS8bXzSlSx59m8ZtW5C016RS5zMzNB%2BdWD7wFlKm041FIJw8zz9%2FfSVDcZE8nuExur1bV6HfhBB8M%2F0tr8KGivdEbio55It55Ko92a%2B6tXC7OZoZlQ0DUSTh0o9wsHQzj1OJYEsE0SHmdAtSfBMD%2F7tRKA8j9PE9TDtnJa%2BBjqkASnj6T7btipndj8zbtEAhgVdbmQDaixgkhuzfg8HvLOIfBnF09HpMV4f9yesB1YgsaaVvH8%2BDuptKEovkxZzmzvkpceY3cWvrs0fwQJ7jnOhv376wAu5jaTom60uC%2BLj19Kv2WD0cngtTqZ2NWT5hO4S8CM%2FwVkXHL01hTh8BemtXiGakLWh4TG5se0yF5knL2gDRVucllz%2B1U5WIH9Je4rEBp85&X-Amz-Signature=0a46639465b84a132a1020e6bd30a5e88e2a37bcd7b8de83b93730c322b6866a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
