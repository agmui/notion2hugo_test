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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZOPEZWS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEafzblJO9DmV8E8RLoPwLGjTHjBe14nHQB6NwJP%2Byn%2FAiAPHKHNzFCILdTPbXSMiKSPv7LcR5G3MXaabs8i0oRwJCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxpdUqaI0GsXH1zCKtwDejzYBh9npOcJ1bMpeODIgVpEqGY2UiKZJ758AkOgKP61kdOfBerQ5durq2ba3xS0uoXa02fswGz6UKFKNZuTWZ%2BoUsaoMXDe7yuMj%2BUrAsq39NurDqq8LuaKSNR%2BcIT5n9M6uWID6nq%2F8fkXteG%2Bl0OYpLcoN%2FRsUD1qffjr4%2BEszxxvwGdfw8NO%2FDfSksH2MVX1JOMDxzJySd9Cg1gasYxM1EKo1EicXtC880OUttHj3%2F8w9rUj5kUoNQPkTCJ9fS0DxL0EUflmNvvi%2BN7orCK2YhPsFosNOFJmHmf%2FJ5tMXIXnEVneccWh9GqKnLGQdMZAHevuRS1SWXMlWc%2F2ZttP4YfUWlWAqqLnPoUXwOaw0QA05egwyD1bALZcHSvHfZMN1IglJqNSYFLWyZgbsRn9I7ixmDp9%2FZnPabwxRpSfumFLmd%2BDegJXNZmbS58TqNZJVwjzBch%2BSVcb1halOP2Y0%2FQdQO0o8X0PB%2FtI2bGWtXHDsp54prO1gg6C4vXU22oU0bJe8149BMyzWM81oGkpd3Vr9l7AO8oUFxl0pTuoYTwaZezGm%2Fbf7i0jRw66n38uY3bjazt%2FOgWRau4LPCF97GscgKDQZ9z9ecEhKqCoy%2BpzuFo70smad10wl4rQwgY6pgG9OngCZ3sAJn6otk7oS57nm1np2V2kTx5ShXEbSULQfTzjbQCuhkxs6lxo83B3u98x7ryFWR%2FmX7%2BEpK8k8DQCimdi3M%2BrzGkhj5bDxiIg72x6eHLnfB5%2B%2BvTuxMO%2FthXcF89nJ%2FylCGz22XJJ1ggWnCvqq91MqTbzt6MBdTJLNz9Zo7NDrpTUKHGA%2BFS2tWlBFPdW7Jh86IhX8bNJnaDYREXjRS9q&X-Amz-Signature=0239fa619d163971d2c95cff7c3fd4e56c2ce35e26c9341ede0252ccbcf5f8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZOPEZWS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEafzblJO9DmV8E8RLoPwLGjTHjBe14nHQB6NwJP%2Byn%2FAiAPHKHNzFCILdTPbXSMiKSPv7LcR5G3MXaabs8i0oRwJCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxpdUqaI0GsXH1zCKtwDejzYBh9npOcJ1bMpeODIgVpEqGY2UiKZJ758AkOgKP61kdOfBerQ5durq2ba3xS0uoXa02fswGz6UKFKNZuTWZ%2BoUsaoMXDe7yuMj%2BUrAsq39NurDqq8LuaKSNR%2BcIT5n9M6uWID6nq%2F8fkXteG%2Bl0OYpLcoN%2FRsUD1qffjr4%2BEszxxvwGdfw8NO%2FDfSksH2MVX1JOMDxzJySd9Cg1gasYxM1EKo1EicXtC880OUttHj3%2F8w9rUj5kUoNQPkTCJ9fS0DxL0EUflmNvvi%2BN7orCK2YhPsFosNOFJmHmf%2FJ5tMXIXnEVneccWh9GqKnLGQdMZAHevuRS1SWXMlWc%2F2ZttP4YfUWlWAqqLnPoUXwOaw0QA05egwyD1bALZcHSvHfZMN1IglJqNSYFLWyZgbsRn9I7ixmDp9%2FZnPabwxRpSfumFLmd%2BDegJXNZmbS58TqNZJVwjzBch%2BSVcb1halOP2Y0%2FQdQO0o8X0PB%2FtI2bGWtXHDsp54prO1gg6C4vXU22oU0bJe8149BMyzWM81oGkpd3Vr9l7AO8oUFxl0pTuoYTwaZezGm%2Fbf7i0jRw66n38uY3bjazt%2FOgWRau4LPCF97GscgKDQZ9z9ecEhKqCoy%2BpzuFo70smad10wl4rQwgY6pgG9OngCZ3sAJn6otk7oS57nm1np2V2kTx5ShXEbSULQfTzjbQCuhkxs6lxo83B3u98x7ryFWR%2FmX7%2BEpK8k8DQCimdi3M%2BrzGkhj5bDxiIg72x6eHLnfB5%2B%2BvTuxMO%2FthXcF89nJ%2FylCGz22XJJ1ggWnCvqq91MqTbzt6MBdTJLNz9Zo7NDrpTUKHGA%2BFS2tWlBFPdW7Jh86IhX8bNJnaDYREXjRS9q&X-Amz-Signature=7ba47b61bf89cb64e7f9be7891dca8cfc1575b35ffcd67c69cdc240756a3e953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZOPEZWS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEafzblJO9DmV8E8RLoPwLGjTHjBe14nHQB6NwJP%2Byn%2FAiAPHKHNzFCILdTPbXSMiKSPv7LcR5G3MXaabs8i0oRwJCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxpdUqaI0GsXH1zCKtwDejzYBh9npOcJ1bMpeODIgVpEqGY2UiKZJ758AkOgKP61kdOfBerQ5durq2ba3xS0uoXa02fswGz6UKFKNZuTWZ%2BoUsaoMXDe7yuMj%2BUrAsq39NurDqq8LuaKSNR%2BcIT5n9M6uWID6nq%2F8fkXteG%2Bl0OYpLcoN%2FRsUD1qffjr4%2BEszxxvwGdfw8NO%2FDfSksH2MVX1JOMDxzJySd9Cg1gasYxM1EKo1EicXtC880OUttHj3%2F8w9rUj5kUoNQPkTCJ9fS0DxL0EUflmNvvi%2BN7orCK2YhPsFosNOFJmHmf%2FJ5tMXIXnEVneccWh9GqKnLGQdMZAHevuRS1SWXMlWc%2F2ZttP4YfUWlWAqqLnPoUXwOaw0QA05egwyD1bALZcHSvHfZMN1IglJqNSYFLWyZgbsRn9I7ixmDp9%2FZnPabwxRpSfumFLmd%2BDegJXNZmbS58TqNZJVwjzBch%2BSVcb1halOP2Y0%2FQdQO0o8X0PB%2FtI2bGWtXHDsp54prO1gg6C4vXU22oU0bJe8149BMyzWM81oGkpd3Vr9l7AO8oUFxl0pTuoYTwaZezGm%2Fbf7i0jRw66n38uY3bjazt%2FOgWRau4LPCF97GscgKDQZ9z9ecEhKqCoy%2BpzuFo70smad10wl4rQwgY6pgG9OngCZ3sAJn6otk7oS57nm1np2V2kTx5ShXEbSULQfTzjbQCuhkxs6lxo83B3u98x7ryFWR%2FmX7%2BEpK8k8DQCimdi3M%2BrzGkhj5bDxiIg72x6eHLnfB5%2B%2BvTuxMO%2FthXcF89nJ%2FylCGz22XJJ1ggWnCvqq91MqTbzt6MBdTJLNz9Zo7NDrpTUKHGA%2BFS2tWlBFPdW7Jh86IhX8bNJnaDYREXjRS9q&X-Amz-Signature=fd3a93039b1287155ae104e08a379bb63dab14dfbcd848177337854f7109f0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZLKGZKS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeHRQMme1%2F5BRNJ1phGyU7kmZfDtXtXJ522nXT1LP3uAiAWPm%2Bz9by4jkyb5qFqM8HrYJeacxgmzEQGPoI8bnrISCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m6PhTLbaYkye8zNKtwDavLjORzKNUBbmZsaZbFTayLYal%2BZ%2FCcCEzw9GEUmCppxIi9OIOhZTeckOtsae1ubE%2F4vICgO4LJRygpmppDmR7lJ%2BwH3NaxahXJtXFanvkMxlBHSv45z9UXE22KibQObHEx2ebCSv6aENGYEADprDfx6QRg0kAVtcHixUu%2F7amz0EqpoAzM%2BB8bId79fsgvyowceTGBobzwpjirXyzW2C%2Bwbf8%2B%2FsB%2F01IluZuoGLbTy5ForAHp3%2BNUODj0QnnKQOwFdiqS62pAplxlBPFhZ7UXuW9lVGO72ebaMxPR7wKGtiii1OsOuEGQ4QKLqFwg0EZ39d34UumgYCRPvoode7PqBg%2BzIu4UcjgubrvicoQu1%2Bv7dxFdTm5uymrRhju74sF8ealPNdzUg5nipiXhmfxDNzH2QdwFlBTqmx1EoW5%2Bxn2vk7YhO6AK7352lVeXv0GSxdw%2FhAMmKPtFuSuvsLLMOJDklE9xC8UiKUMsVkLQ%2FtOml7RAsEYRbQAw33%2FNXqT1gRq12UVZOko2BUUDyT%2BEpOaZW%2FT3qVPkB%2BsvdtF27Ud%2FGDnXTErJe%2BQAL8mLx2yR7YYa3fcGxdLRu6P2hQI%2BMBYeahSlpqmTylUYgrvWZjS6PHSY%2BJ3K9%2FxMwjYnQwgY6pgGf%2FzWm398CtZCX7k32wS9Bu%2BIMJgU27aAIboWmjSmGIhPttoUJy2rO4FpBFS4jXh%2Bd8k2PPQaEuV5N5BFgbA5H5q19mULQ0h7ymWYqh1DZQ%2BBw7yt5RftDGHRX7TII1dwe1ONpxLW6u%2FcoD0sa%2BDPD3PxkiMnDts3R%2B2fbxG2VjDGvS4zScGWQyFhdCDXNW27%2BdCxEaQ8xoUV4%2BuXpFxt8MxQ9h8Wt&X-Amz-Signature=009d00f43e722720e9819af5ba79d0d4e3c5283fbe12f8127db2d361603838f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V36QFDBN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIQoECi17rOKzkulp31MGNuegOFTYLZrGWtpb6v53LSAiBOWgp8zhsP8Y5yWPqDzRAbs7PtcfiLHk7FPRpJXI0MFiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZC6DO4Ndex%2BnnXHKtwDmXMGTszrQgbnVoGJPlUntrukCz4Au4r7ZuVuCS4k73S9Y%2FVJAGS5k%2BOOrk3yq5pTk97uCbzoRrINzplpqRkLXuC9CsWUxgaIFMA6l2IYdsObpejm5Kx1BaxrByi%2FtCYuHnOn915oTl6ANVtMHZ2o3a83MLCyFqabpk3Z6qZb1kmKGu5F%2FuIn2UAuv7j3n6lQQpZ0V4Niec5KUQXve8jQjMpYxd5g8ksWMBqB4iPGDEcPkizZhzWBnug1spePvaLzWM2%2BCMhFKFMUyKDI3EqaH%2BHi8jgrQ%2B0RQDHBOTZEt1XXbDNfgBfTErqQnytSs4j1LaIqEe1JGtpw3uoNavALhJmyKXmJjEJHzV0qVkp320pTBkDA3iQbKi61w5jnpOUWTTwOGSdMrgTnGhfAvMkYAG650lbZeB%2B3%2FJnlfQPt0g5Safgs48BqybVMIiqiinvaCMCcJ4WzsOaaYtWcjmenlfpnON3bCkivDXl3kevY%2BuEN0iCpe1ZpNIKJTKQfHGyP3Wlo4bpZCPVdB2KUzZ5mI3q00c8Y1RBsFJnvK6VovoaPjDI7tzpiuVq0x0fSxHxeKcRFt4McnvU2WCJ3rqqCtZADh0Mx7Qbj1%2B4B305OmJqDOrTd2%2F4vPRthqTEwjqbQwgY6pgG1yBgh01FqW1S28wGkUFk7%2F5SlvO7kgG1gRj3vrw656WyhCu6xZK2Mzh%2F%2BN58AEbq%2BLfbE5NjSFL6OVQcywSlM2gR%2FEPe34Z7i%2BrvzS4BCOtMJdT55khRUf7YGOEcpiCDPLrOWkSh7mJFWRLl6DrScaCwWSGjoVZYZWNtH9rJzILfKOu5uXDzPWN6ykosft9LV6ZtX4z84cl7aVDG1IDDQArnpiu1%2F&X-Amz-Signature=dda0c67358694923291d5c65c27fa1a9d8d0831d1f475410d41d8f620fa74897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZOPEZWS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEafzblJO9DmV8E8RLoPwLGjTHjBe14nHQB6NwJP%2Byn%2FAiAPHKHNzFCILdTPbXSMiKSPv7LcR5G3MXaabs8i0oRwJCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxpdUqaI0GsXH1zCKtwDejzYBh9npOcJ1bMpeODIgVpEqGY2UiKZJ758AkOgKP61kdOfBerQ5durq2ba3xS0uoXa02fswGz6UKFKNZuTWZ%2BoUsaoMXDe7yuMj%2BUrAsq39NurDqq8LuaKSNR%2BcIT5n9M6uWID6nq%2F8fkXteG%2Bl0OYpLcoN%2FRsUD1qffjr4%2BEszxxvwGdfw8NO%2FDfSksH2MVX1JOMDxzJySd9Cg1gasYxM1EKo1EicXtC880OUttHj3%2F8w9rUj5kUoNQPkTCJ9fS0DxL0EUflmNvvi%2BN7orCK2YhPsFosNOFJmHmf%2FJ5tMXIXnEVneccWh9GqKnLGQdMZAHevuRS1SWXMlWc%2F2ZttP4YfUWlWAqqLnPoUXwOaw0QA05egwyD1bALZcHSvHfZMN1IglJqNSYFLWyZgbsRn9I7ixmDp9%2FZnPabwxRpSfumFLmd%2BDegJXNZmbS58TqNZJVwjzBch%2BSVcb1halOP2Y0%2FQdQO0o8X0PB%2FtI2bGWtXHDsp54prO1gg6C4vXU22oU0bJe8149BMyzWM81oGkpd3Vr9l7AO8oUFxl0pTuoYTwaZezGm%2Fbf7i0jRw66n38uY3bjazt%2FOgWRau4LPCF97GscgKDQZ9z9ecEhKqCoy%2BpzuFo70smad10wl4rQwgY6pgG9OngCZ3sAJn6otk7oS57nm1np2V2kTx5ShXEbSULQfTzjbQCuhkxs6lxo83B3u98x7ryFWR%2FmX7%2BEpK8k8DQCimdi3M%2BrzGkhj5bDxiIg72x6eHLnfB5%2B%2BvTuxMO%2FthXcF89nJ%2FylCGz22XJJ1ggWnCvqq91MqTbzt6MBdTJLNz9Zo7NDrpTUKHGA%2BFS2tWlBFPdW7Jh86IhX8bNJnaDYREXjRS9q&X-Amz-Signature=24f86fbff3810775d40d02e2c6d59500649d7a96f73ffd5a2b17cacfb431d9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
