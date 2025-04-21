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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTH2BB2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBCv2zn%2FnnO6zSnrhl47ks2k1AyQBFuOTnSlGvzEYs%2B6AiAgSfOt26S%2BNp5GlQQ06bTXYJ8OYbye7mC14MKISi9EoSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lt84q1ouflBhX7VKtwDGgdJw4l7CwIYcW8rZgHVPlJxABjReQhpZugYQ0zOFfog3llMv2uEP0YCFirSVoSz1Idl%2Bohm6sh2I8XW9aCWi8Y%2Bhg67Lsad17NJW4EZ3oI8MtraCsvD5v9n1MkmL8Sa%2F2PVoDMou4qjJFW4qnkoaX9DUUgJBp9DqvjCqufT9hW5VRrQ%2FPTOBv%2BhQXXduZh1KS2rR1Ad9wVyz4lHz70qu9vEex5CLrsJWuT7ZDiARbezASu%2F7D8%2Bad0Ex2kieW0TYOcnpyCCPj4Sg4MS05CPz1ytnnbzwOjV5UIZfX%2BMUwgnnpnLpk4NZmndm7MDBuELaGVRUQI6X47NpU%2F40HzN5bE2PVrmg5XynuIa%2FUNuxcAnIO7jnVmHWp4wYfc1svo1AyIb7D2UAHvFu1ii65xwxkEXyQs%2FQn%2Ftk46bYP%2BTq2kCtHTD9DLjhNTn%2Br%2BertMp%2BytemDyzuTiDyPKfWeYPC6RIeOjoW3dzxLFjOdEyB22u0JnRy%2FTcWfKRbdSBgYY4T9vpBmOS5TjxGYF3zNmjruJgJRN%2Bf3jViHgkYVlZvMK2u2BmN8lx%2BVTw7Aa6BIS9nVTrNoUKvKYjrw3RJH5bL6t5wULO6hykZ623xOJa80duOvqCAAc3LBQiciow3u2awAY6pgH3ZlhQhtShraXYQkVxNBProIgRHW%2BeEgaEo1iErv50fIE8549RbfV8z3xFYLC68xVpw7FWHxcM80gBgbjiR4cAKZOmr3UdecOPjYeD%2BtKEqgq%2BnFlzaN6dGSA1T988b3lsK1o25N5W9I4pe3qdReu1%2Bu298aG29zFbWybeoxMVnBIBAtKYxWNDVr41MJsvAR6pV5Uyz82IqyO43%2F9L%2FFRlgeuiecbb&X-Amz-Signature=570d59f8f48eb872c9083ce0d82470a3ce7cfbc40d56aaee9e61427f454e15df&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTH2BB2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBCv2zn%2FnnO6zSnrhl47ks2k1AyQBFuOTnSlGvzEYs%2B6AiAgSfOt26S%2BNp5GlQQ06bTXYJ8OYbye7mC14MKISi9EoSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lt84q1ouflBhX7VKtwDGgdJw4l7CwIYcW8rZgHVPlJxABjReQhpZugYQ0zOFfog3llMv2uEP0YCFirSVoSz1Idl%2Bohm6sh2I8XW9aCWi8Y%2Bhg67Lsad17NJW4EZ3oI8MtraCsvD5v9n1MkmL8Sa%2F2PVoDMou4qjJFW4qnkoaX9DUUgJBp9DqvjCqufT9hW5VRrQ%2FPTOBv%2BhQXXduZh1KS2rR1Ad9wVyz4lHz70qu9vEex5CLrsJWuT7ZDiARbezASu%2F7D8%2Bad0Ex2kieW0TYOcnpyCCPj4Sg4MS05CPz1ytnnbzwOjV5UIZfX%2BMUwgnnpnLpk4NZmndm7MDBuELaGVRUQI6X47NpU%2F40HzN5bE2PVrmg5XynuIa%2FUNuxcAnIO7jnVmHWp4wYfc1svo1AyIb7D2UAHvFu1ii65xwxkEXyQs%2FQn%2Ftk46bYP%2BTq2kCtHTD9DLjhNTn%2Br%2BertMp%2BytemDyzuTiDyPKfWeYPC6RIeOjoW3dzxLFjOdEyB22u0JnRy%2FTcWfKRbdSBgYY4T9vpBmOS5TjxGYF3zNmjruJgJRN%2Bf3jViHgkYVlZvMK2u2BmN8lx%2BVTw7Aa6BIS9nVTrNoUKvKYjrw3RJH5bL6t5wULO6hykZ623xOJa80duOvqCAAc3LBQiciow3u2awAY6pgH3ZlhQhtShraXYQkVxNBProIgRHW%2BeEgaEo1iErv50fIE8549RbfV8z3xFYLC68xVpw7FWHxcM80gBgbjiR4cAKZOmr3UdecOPjYeD%2BtKEqgq%2BnFlzaN6dGSA1T988b3lsK1o25N5W9I4pe3qdReu1%2Bu298aG29zFbWybeoxMVnBIBAtKYxWNDVr41MJsvAR6pV5Uyz82IqyO43%2F9L%2FFRlgeuiecbb&X-Amz-Signature=cc6bb520f069825022a3f6d642e535611b00cb413b70783d88606e5b54d2ee2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMN6Z6B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFfJs%2BzCp7Vo7kasTFGYQbLYAqhiHsXdr99%2B7Qw5RKhuAiA0zvC9Q%2FTXNE26w4QMlDZaKQEVEzAye374vYP2NFM0MSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZf4okyC58g6Kks%2BzKtwD7icXgVzFuWrag4Uw4lQqp6vzI3SGsZU1Spqb6G70fkuQw3Q1gNF5RsDhH8kUCHGTfOS3sgXh9H3SUixQTHVGs6MlwN%2FbdbW7TpSydZopcmQ3ZqEMTQeBVENYgI4ADE8JnBIJrLSEv%2BpIWZK20pe05Mz4mvGdG5PxhZHStInGPUjyUrdCiN%2BoieILm6aX%2FfeqeA1FEXLWeKzJnVeoD09vLHd67ba%2BeSLmYjYFgeL5SbhwrERaqKwxZOrwEbHOamRsGtwIp8BiiPnKTGtJf551V2cfLDFmom6gz9nzLW5pAmlZqdUmSasuz4w7ERhOQtFvkAk43qGDnTioI2VYN8Q90dIsFwDkzAk4gD7IjNgvf85tgDKMXAEUOh7f1%2BB5sO2flNxc17TGwQsizWi1OMe%2FmF4n6dnUdpOHHCBrfJSr9BCdLmD2J2dEouq7copxdtnZ1r3YFK124Ji0VSTYGaohD%2BPZzC6fsP3wkhIpb%2FupwCL0IFD3exxUoWtsHM1xRBn3Ict9AH7YaR8M9wvUsuoQtE2emAyDIu39pS4dkhUXIqHFSH5bVUQi%2Fku2WpoEtH95FgeGu7i7jdKtCkcEWbI%2FiCNad2II6r54bIAOauach8McqIY3C2Lk4jV0IJgwye2awAY6pgGRdhyAIcRRsDU01qDPJFuMVYJKygwcnz5ZGGKDdQrckz92n8mDFdYFEqvwEODCV5f4X9iA%2FYWbJdi7OgRRe0a8E8byl4Ve36BnuIQBEXmcsi43BmVCIKznv0MALpaAjMA4nLBoZhP2H29PKqWN3D2PUm7S1YCngBzjSNRnZ0o99wD0O4vwhTXMqYBuLH23zrLQnQLhpeQas2uQuZQXkMNhcAFSEc0X&X-Amz-Signature=1a13771cb6120ede5a0228ed4ac0ac4e5a0ac2e7991189c5a022e5e8fbdb20a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEPLEEK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIH5350cmZc1pNXKXJgf44RDJ5r%2FID06mlj3vptlQh5NuAiBWCmlpRA5lHrY2GoiW3iIcsa%2F5HWivGCPStv4MU4SlPiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2RPJNo3JO1fa1d8nKtwDtlbLvSe49QDPndK7vrMlAM%2F0NgkH2L%2BwGilClsgsZ%2B2GXYKEpn5gfPZNgGsl0wxOH66bHR6B%2BBnbrD%2B8VROnn3SRtEG5qeWsj1E3EOgEomXxXC%2BUFwK5xniw%2BcdbFJeFYVk0iZUvRw6Pb2rQIWG4UNph79gbALUGQT3gnjcVZsG%2B2SA0rLnIvwLCydWYsOeksZFwSzBOHoIj%2BMJf59gE45BpOyj07%2FtxKJ5zy6YEmvAKjgMMKATSr2Gm678EorN9DOzcCXCKL4jnxIOfcmabdpVm%2BlwWFLXPhbFjvUbkaeuPn9m4CiCyxGHv5QgRjdXa9IAsV6H5ZZsUtXjbJGcPbtB8B6RJG24mMwW9nCL1KGv%2FbHzXKEf%2BUdTN4WLre%2FUBmBQ3mrDHFbowUafdHVyrbkq%2B5KrXdewzlS0jqi%2BoM2mMCXVlZVsuUWGT52%2BnqR8ayKGoWgncCz3l9PaQd8eTcnA4a14whvPGqB7BmShQbJsJMZ2BhRXEn6Eofq%2BAUZbBNblzOezJ%2FSK8QaqxX1Vq3cnZJCNcYSv04zEiVyzYlM8LicY1NITfDTk8aief3mVGwXtrHRSmlDfw7FyBfkuwVtVDyoMT7bPJ4%2FfiX%2BIvcK7bUB1wwNz65sBvQ2Mwye2awAY6pgF%2BK07A%2BI1c5%2BtuQxLndd1eick6t%2B3wb91YXfwLtvJcvMpHe8nd4pR9nSR8lPqysxchlQfSvhp%2FKylc6bPbBiqCwY071oXDxa6sJFKPkg6%2FBEOroELJ9oZ93Wh3wJqQDNuqu2XFKrUM1xNXW3ogjzpoDa%2BTSPKYgtFqNs%2FJkdRi0ujQlnVEtQlGDpxr9jHXGZB2%2FugpltV7X7qUxNstntzDLbFr8nXN&X-Amz-Signature=616ef98fca9d714108f1b72c0f5b0f290756001d65bcbdbcce446802a28df313&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTH2BB2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBCv2zn%2FnnO6zSnrhl47ks2k1AyQBFuOTnSlGvzEYs%2B6AiAgSfOt26S%2BNp5GlQQ06bTXYJ8OYbye7mC14MKISi9EoSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lt84q1ouflBhX7VKtwDGgdJw4l7CwIYcW8rZgHVPlJxABjReQhpZugYQ0zOFfog3llMv2uEP0YCFirSVoSz1Idl%2Bohm6sh2I8XW9aCWi8Y%2Bhg67Lsad17NJW4EZ3oI8MtraCsvD5v9n1MkmL8Sa%2F2PVoDMou4qjJFW4qnkoaX9DUUgJBp9DqvjCqufT9hW5VRrQ%2FPTOBv%2BhQXXduZh1KS2rR1Ad9wVyz4lHz70qu9vEex5CLrsJWuT7ZDiARbezASu%2F7D8%2Bad0Ex2kieW0TYOcnpyCCPj4Sg4MS05CPz1ytnnbzwOjV5UIZfX%2BMUwgnnpnLpk4NZmndm7MDBuELaGVRUQI6X47NpU%2F40HzN5bE2PVrmg5XynuIa%2FUNuxcAnIO7jnVmHWp4wYfc1svo1AyIb7D2UAHvFu1ii65xwxkEXyQs%2FQn%2Ftk46bYP%2BTq2kCtHTD9DLjhNTn%2Br%2BertMp%2BytemDyzuTiDyPKfWeYPC6RIeOjoW3dzxLFjOdEyB22u0JnRy%2FTcWfKRbdSBgYY4T9vpBmOS5TjxGYF3zNmjruJgJRN%2Bf3jViHgkYVlZvMK2u2BmN8lx%2BVTw7Aa6BIS9nVTrNoUKvKYjrw3RJH5bL6t5wULO6hykZ623xOJa80duOvqCAAc3LBQiciow3u2awAY6pgH3ZlhQhtShraXYQkVxNBProIgRHW%2BeEgaEo1iErv50fIE8549RbfV8z3xFYLC68xVpw7FWHxcM80gBgbjiR4cAKZOmr3UdecOPjYeD%2BtKEqgq%2BnFlzaN6dGSA1T988b3lsK1o25N5W9I4pe3qdReu1%2Bu298aG29zFbWybeoxMVnBIBAtKYxWNDVr41MJsvAR6pV5Uyz82IqyO43%2F9L%2FFRlgeuiecbb&X-Amz-Signature=ffabb3406abe4417d5a6625384a399658a7dcb1698400c517823fa94e5ce2c39&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
