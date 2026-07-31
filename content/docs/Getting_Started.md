---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7KY45N%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BG3724h6w38%2Bn3bN6U6hAJuxzElh01qie7tsPprE%2BsAiEAtMjYfM82XmOpnJ5K2N4XpFQOjDYlKIxVFi6XJeRDh9cqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPK9NRwDQ%2B96jjOESrcA486xk%2FNGhHpA0OD2DS9j7iTBeCi0VEqPTeKIwD1lHvlvzynX95VsioIzvMFEq3eBXUve4eO6J4wX5uvGzi2ffS9iCAOQEcY8Vx%2F3XUcqD3QsEYmx5ZvHlUp%2F%2B%2BdGmXdXzdzxtJVSUCd1HmqJvommND%2BWCLGtju8k1o6vXUucLs%2F6ZhY1wwtmnjPD6ZdmXU%2FPfilgTgu7ISzSoAG8MgqtMpd4g1naQxofbeKkK%2F0nfQNROMGls4JD1zuHANUXro%2FiRC0Bdbc63BhLqWlB%2FjzD%2FtCS4T1wnUa8XBwG0k8JZlflzFTlo%2B1HxoEf799DgacuaQBKnLXhWyQngZv9Qr580IzOC7qWydKvxOzh0VYChdgjasQUe7DjvUF70BtbOFiBWN5C7L4ZpIgM1mhb9rEEQMR0I70Jq2OwKZgG8HPakIhCAAxZQ%2F%2BxGiAOLpef4beYKmn5VMAvqwujx3FujcXkFqsyCOXy8Uwv1Bh9R4sSucpjS11GGFc0bzFzCVBFKU6ow%2BjN2Jffdx0l36WTACnf3iKMGjibMxvAYcUh0fnLhyR6jjtdjVJ3V3rn3%2B%2Bju2Yu57VI8XP4mRHXbZyeosSddS6eWIBd7%2FHr%2B5h%2FFypqxV%2BbPWncrGF66rcDb92MPOUsNMGOqUB2WgsgYrenSVSLo31RlOAcrKl2vokLmAKtVQYc9bsxQJFCi5iFMmt79us5ZrwDZ0f%2B7iazNePoit39awxy%2BrbNNvodPu%2FMrmG4WimyXXDNOaUNyR85%2BIsXr3fwnGIdLIg694Wy9xVQMZmNtOWHnSTojrhSVDHgq4qq7LkR%2FXJoB7ORlV9TVlYzxWUfs1evIGgX6Epx6ywLgAX4rWGnu824Gf910OX&X-Amz-Signature=43f47a04bc95a641807dca6fc4fdc3752a8c2f6fc8ecabe02098bbb8475c80d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7KY45N%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BG3724h6w38%2Bn3bN6U6hAJuxzElh01qie7tsPprE%2BsAiEAtMjYfM82XmOpnJ5K2N4XpFQOjDYlKIxVFi6XJeRDh9cqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPK9NRwDQ%2B96jjOESrcA486xk%2FNGhHpA0OD2DS9j7iTBeCi0VEqPTeKIwD1lHvlvzynX95VsioIzvMFEq3eBXUve4eO6J4wX5uvGzi2ffS9iCAOQEcY8Vx%2F3XUcqD3QsEYmx5ZvHlUp%2F%2B%2BdGmXdXzdzxtJVSUCd1HmqJvommND%2BWCLGtju8k1o6vXUucLs%2F6ZhY1wwtmnjPD6ZdmXU%2FPfilgTgu7ISzSoAG8MgqtMpd4g1naQxofbeKkK%2F0nfQNROMGls4JD1zuHANUXro%2FiRC0Bdbc63BhLqWlB%2FjzD%2FtCS4T1wnUa8XBwG0k8JZlflzFTlo%2B1HxoEf799DgacuaQBKnLXhWyQngZv9Qr580IzOC7qWydKvxOzh0VYChdgjasQUe7DjvUF70BtbOFiBWN5C7L4ZpIgM1mhb9rEEQMR0I70Jq2OwKZgG8HPakIhCAAxZQ%2F%2BxGiAOLpef4beYKmn5VMAvqwujx3FujcXkFqsyCOXy8Uwv1Bh9R4sSucpjS11GGFc0bzFzCVBFKU6ow%2BjN2Jffdx0l36WTACnf3iKMGjibMxvAYcUh0fnLhyR6jjtdjVJ3V3rn3%2B%2Bju2Yu57VI8XP4mRHXbZyeosSddS6eWIBd7%2FHr%2B5h%2FFypqxV%2BbPWncrGF66rcDb92MPOUsNMGOqUB2WgsgYrenSVSLo31RlOAcrKl2vokLmAKtVQYc9bsxQJFCi5iFMmt79us5ZrwDZ0f%2B7iazNePoit39awxy%2BrbNNvodPu%2FMrmG4WimyXXDNOaUNyR85%2BIsXr3fwnGIdLIg694Wy9xVQMZmNtOWHnSTojrhSVDHgq4qq7LkR%2FXJoB7ORlV9TVlYzxWUfs1evIGgX6Epx6ywLgAX4rWGnu824Gf910OX&X-Amz-Signature=0a410afbd3582d684165a8fe2d0c45b84d8e4e9580de4867d9ea5d019a5588a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7KY45N%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BG3724h6w38%2Bn3bN6U6hAJuxzElh01qie7tsPprE%2BsAiEAtMjYfM82XmOpnJ5K2N4XpFQOjDYlKIxVFi6XJeRDh9cqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPK9NRwDQ%2B96jjOESrcA486xk%2FNGhHpA0OD2DS9j7iTBeCi0VEqPTeKIwD1lHvlvzynX95VsioIzvMFEq3eBXUve4eO6J4wX5uvGzi2ffS9iCAOQEcY8Vx%2F3XUcqD3QsEYmx5ZvHlUp%2F%2B%2BdGmXdXzdzxtJVSUCd1HmqJvommND%2BWCLGtju8k1o6vXUucLs%2F6ZhY1wwtmnjPD6ZdmXU%2FPfilgTgu7ISzSoAG8MgqtMpd4g1naQxofbeKkK%2F0nfQNROMGls4JD1zuHANUXro%2FiRC0Bdbc63BhLqWlB%2FjzD%2FtCS4T1wnUa8XBwG0k8JZlflzFTlo%2B1HxoEf799DgacuaQBKnLXhWyQngZv9Qr580IzOC7qWydKvxOzh0VYChdgjasQUe7DjvUF70BtbOFiBWN5C7L4ZpIgM1mhb9rEEQMR0I70Jq2OwKZgG8HPakIhCAAxZQ%2F%2BxGiAOLpef4beYKmn5VMAvqwujx3FujcXkFqsyCOXy8Uwv1Bh9R4sSucpjS11GGFc0bzFzCVBFKU6ow%2BjN2Jffdx0l36WTACnf3iKMGjibMxvAYcUh0fnLhyR6jjtdjVJ3V3rn3%2B%2Bju2Yu57VI8XP4mRHXbZyeosSddS6eWIBd7%2FHr%2B5h%2FFypqxV%2BbPWncrGF66rcDb92MPOUsNMGOqUB2WgsgYrenSVSLo31RlOAcrKl2vokLmAKtVQYc9bsxQJFCi5iFMmt79us5ZrwDZ0f%2B7iazNePoit39awxy%2BrbNNvodPu%2FMrmG4WimyXXDNOaUNyR85%2BIsXr3fwnGIdLIg694Wy9xVQMZmNtOWHnSTojrhSVDHgq4qq7LkR%2FXJoB7ORlV9TVlYzxWUfs1evIGgX6Epx6ywLgAX4rWGnu824Gf910OX&X-Amz-Signature=4a80435413ae996abb126eea29cd98670e149a85aa92fa4c231225c0ba89186a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRWQ4QH%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0hzZA4C%2FBZfhhsAyqf6jUwgs1g%2B4ZYctBPeiFA%2B%2BhAAiBpKSvaT9HjJRn5nlf%2FbAdomc7piAK4m3lKEQizMdamPCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCdV0ysLxmIWREOGyKtwDlpc09ZtbFdDxdRRsLmmVpwynbvvzBLJA9RXTn8aD4H4T2JlJkQhPhsOw0id%2FwAmZ%2FRedMkBWvubmx%2B27ik%2FfgXfZVBZe1%2Bx2bWb7mvrDwJazlxH629uEn%2B7sVkl%2BNckBwgPZt8D3O8%2FVV3PD5o5s6NuH%2FSPbjQXVGevI%2FijeIDwNgacRAmK%2By0kgQ05BAVE9U%2BrzyQIt%2BUOS72VFDpEc3H68ZsPTusr6IFojqUZqOkIa%2Bp0z7lWVwOVxCyaumfC2kxaqSCkRWvAuiqp%2B8115F0EaB4qzMPPVPNlruyajZn466rRYKjFH8yYGfueygD%2Bq8xKTM%2BxiHJPJlsJFQFmmPPDV%2BjSxXblwNxmgjYkdFlZzACHLidGmA21Rng4%2BGB1JlVH5jHjR9973w7NzrKtRq4WNsUmpH6lqgMhTDI4Loh0rVzYzDjka%2FCrRuueabmf%2FDhtUJbFRfg4RskdAbJKq8QKEXZ3wzCtRGPqLKhee8thk47nUFqntOcAYGW4MlGSdi40%2B6awQXT9J3YO8dhOy%2Bp9buVpXIO67ZUI9AR4N%2BclNBhFo7DC3EzK6lcFptW%2BkQ6CR5gyW4zpm30wfOxgT79VSXtzGL6vWP7Np1vT5OSf5LPEHTtrOeHqDUsswwJSw0wY6pgGX%2Fmo4JyF%2BwjqRY1Qc%2BIc4MeHomA9csL2I%2BcyEm5Eoi9USOV76PJD1oEPE805%2BmRxEqAiqQcsCf7Twk9SHi0TM3WAvoN19ycXBedvib6tzBgezled9%2BLQye%2FFkpZp%2FzN6GXF9cnr%2BfO3kbHE8bqjJBVYPfkQzyqgV%2BPZ4Sv76reNBqtRYyE%2B2N3RidBPcvxg11JooS8fQsgOGsavh8MQIGsxNImBMk&X-Amz-Signature=09fccbc7c0eb516dd5f754424840f5355151e512946c47fabd4dd0468feae716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAOWUPUO%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLoiCxwVLcUMYT5DUZLgmSXWgGIa92chuqmPJ%2BuUgg4AiEA%2B%2F8QljY9plaPUw%2BKT9a691Xjcw5uVdPWkiIMBFgRLB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9tCl9ZqQgdu7vhtyrcA%2BSmTylp3vaEom7PuXZned0%2FgmvhANaKa1JCxpTFJbwNYl6tvJhqHJ12b3IHNHfCTYtb5ckCTWDNqrtSv1Eg%2Fch0b97k3zoFYay%2FJve7cA0UaJ0yxGsXcsEGLXSgsaYMXrXc8EFB%2BYo9DLx8jwfdv3MFrbEdOyv5LLV02xcgtLlRkbovQwHZE6eS37vH%2Fi2U6ONB3h%2BtDVZpIX1DuYiDSxHLjDO%2BkaAVDvH72sSEE8rfEnapqHMWcNsIalzViO0rIl4084iR3iI73r%2BLCkUbToYtVbzldX8xbPGNbqzFoOQSe6NEnHxBpH9Pyy727rSIWa1JY8n7bu70LLHZir%2BA9uslc11R4nHL%2F9mUOJ8XaqCRG6gXEY1F29p%2BpBF9kG29VYo2%2F4U1YZGh4nHO0jA5Zh%2BST%2BwBEOEt8kKmi8MINecxUlzFvzDBpXFNvlZsJDCGWSwI9usAraYMu7O09SmKneAFhq5OlYRAWfX4vlxkm8CxbJrAtSgRwu7BMUZUD0KDQWpzJlMwy7%2BUg9y7nGKpK25%2Bc8599%2BSzk6WF8KV%2FsChvCVfXYd4iCeLCGvZZIu%2FoyLnhzHEHcFDeWr7a67ivNtU34Obd%2F8YJhSIod4RMwH%2FNuCvGeRtVl28SgvluMMmUsNMGOqUBF%2F9%2BvEBJIAtOfD9no0rgkmSbNBOMir2UkUhIBN%2BEYLgZJjmFfHEAz%2Bxq03%2FAnuRjO6FiUs3sNoOnQtIrZLtwB6Xl1A%2F4eQNk4XN8LyOXA9Hb%2FK76PMXbiAo9Mli4V4F0MiHsB1y9MFgO4CWUhMbMzd3rCUc%2FSjGXDuTbVVGkIEDqKiWTSqYU6ofMBIseV07iRPEckrFSNzbrrjtYDIr0%2FN4l%2Fd4J&X-Amz-Signature=e7843509a307416a0b9de7738d7d8432f1fcf7763a0c3dd2ff7138a8e17bc021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7KY45N%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BG3724h6w38%2Bn3bN6U6hAJuxzElh01qie7tsPprE%2BsAiEAtMjYfM82XmOpnJ5K2N4XpFQOjDYlKIxVFi6XJeRDh9cqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPK9NRwDQ%2B96jjOESrcA486xk%2FNGhHpA0OD2DS9j7iTBeCi0VEqPTeKIwD1lHvlvzynX95VsioIzvMFEq3eBXUve4eO6J4wX5uvGzi2ffS9iCAOQEcY8Vx%2F3XUcqD3QsEYmx5ZvHlUp%2F%2B%2BdGmXdXzdzxtJVSUCd1HmqJvommND%2BWCLGtju8k1o6vXUucLs%2F6ZhY1wwtmnjPD6ZdmXU%2FPfilgTgu7ISzSoAG8MgqtMpd4g1naQxofbeKkK%2F0nfQNROMGls4JD1zuHANUXro%2FiRC0Bdbc63BhLqWlB%2FjzD%2FtCS4T1wnUa8XBwG0k8JZlflzFTlo%2B1HxoEf799DgacuaQBKnLXhWyQngZv9Qr580IzOC7qWydKvxOzh0VYChdgjasQUe7DjvUF70BtbOFiBWN5C7L4ZpIgM1mhb9rEEQMR0I70Jq2OwKZgG8HPakIhCAAxZQ%2F%2BxGiAOLpef4beYKmn5VMAvqwujx3FujcXkFqsyCOXy8Uwv1Bh9R4sSucpjS11GGFc0bzFzCVBFKU6ow%2BjN2Jffdx0l36WTACnf3iKMGjibMxvAYcUh0fnLhyR6jjtdjVJ3V3rn3%2B%2Bju2Yu57VI8XP4mRHXbZyeosSddS6eWIBd7%2FHr%2B5h%2FFypqxV%2BbPWncrGF66rcDb92MPOUsNMGOqUB2WgsgYrenSVSLo31RlOAcrKl2vokLmAKtVQYc9bsxQJFCi5iFMmt79us5ZrwDZ0f%2B7iazNePoit39awxy%2BrbNNvodPu%2FMrmG4WimyXXDNOaUNyR85%2BIsXr3fwnGIdLIg694Wy9xVQMZmNtOWHnSTojrhSVDHgq4qq7LkR%2FXJoB7ORlV9TVlYzxWUfs1evIGgX6Epx6ywLgAX4rWGnu824Gf910OX&X-Amz-Signature=299651f3a1770333322fbac6ac094e2a7dc34147c6b66bc28dc0143474847c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
