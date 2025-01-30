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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5Y4ZIOB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVtdPAMhHgDIO9%2B5eEwfCqFb2CTFw04pOm8eKXdRjBOAIhALSuFsMfPv17h%2BjDj2Gz9X1a4AptuZ5NkIy3GK3glTS1KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi9EHhw88Cj7Zs9hkq3AOgMdl3Hg6y0gMD7GhQ4yKl0Bd%2FozgA3k4KGl9JStQKyY029PIyDE8jlzjFavF9%2BLkVMpa1JYIWRfEeGZuXpmCJ6Z5OEPG3RPXd5ge886eQJFXYwDjhnPU%2B%2B2rsWYyGhJOWLx1EyhV%2BNpRzEV2UmPv7u5NQZUrugUvYwhJWz49CHmd19LwzLJ1iammpHffD2tyd%2BTm7cxr96F0qtBaKYDacUf2XIuAtzl3iTPTvzXdHc7OWcSfuzUWMZhvlb9vARBdwCZMMEUDn9mLdxNMgmxp5hvfOSbo5i31Yt23YJitN58ZDp9ondhOoqSFQCpHPlSUJPfiiIxXv7viCTcGlKEz%2FriAFxt4vCthzKQylv3bgmXZi2T1PIh6ObBtXuiEYUYmZgrO3iHHZWy3uCZiZtEZq4Bkrhro5Tda4Jv3IpbGyqUqcguDWQJn%2FVimjajkGfYez9G2uGB9fuLyBjQKYKEQIYwEJXD7%2FvSv2sNv86Ry%2B%2FXRfWfULFYbvSb1gHS6jfFO5H3sBuIdcr0Svjml%2FqddHtRGUG6ql4u6iXClk99YJhyBQglemxElbSc9rvhnOjPDHNLRA6CSpkKcS5Lkt4RR6zMotmYdx71HbIG%2BN6JKYqr9v6JpQxrjvJXCsdjCXz%2Bu8BjqkAbH9dSAqnbAC22TEyHPb67LrxsNoo1argYQu%2FDN3I38AUhq97GbMRzYSJj0wHvIRzTeZzipiKqJgvqJhtNXyy4PcfMxbfCTNzwLoi744yKDiPlOc%2F7LaF73GpdwLRZuKIhzIqWOsknf7NMRSzfaYCivZNYCye%2Bwybg5PUI%2FmS1M7tUMwxnLb6EoG9j9DmDfs1JX7Js4kkg8DBfjUm1Y10%2By4M2Pn&X-Amz-Signature=57a0b51327f7edd9d506f7aa0021b6f4023dc3af29d64558afa1457cdd874f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5Y4ZIOB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVtdPAMhHgDIO9%2B5eEwfCqFb2CTFw04pOm8eKXdRjBOAIhALSuFsMfPv17h%2BjDj2Gz9X1a4AptuZ5NkIy3GK3glTS1KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi9EHhw88Cj7Zs9hkq3AOgMdl3Hg6y0gMD7GhQ4yKl0Bd%2FozgA3k4KGl9JStQKyY029PIyDE8jlzjFavF9%2BLkVMpa1JYIWRfEeGZuXpmCJ6Z5OEPG3RPXd5ge886eQJFXYwDjhnPU%2B%2B2rsWYyGhJOWLx1EyhV%2BNpRzEV2UmPv7u5NQZUrugUvYwhJWz49CHmd19LwzLJ1iammpHffD2tyd%2BTm7cxr96F0qtBaKYDacUf2XIuAtzl3iTPTvzXdHc7OWcSfuzUWMZhvlb9vARBdwCZMMEUDn9mLdxNMgmxp5hvfOSbo5i31Yt23YJitN58ZDp9ondhOoqSFQCpHPlSUJPfiiIxXv7viCTcGlKEz%2FriAFxt4vCthzKQylv3bgmXZi2T1PIh6ObBtXuiEYUYmZgrO3iHHZWy3uCZiZtEZq4Bkrhro5Tda4Jv3IpbGyqUqcguDWQJn%2FVimjajkGfYez9G2uGB9fuLyBjQKYKEQIYwEJXD7%2FvSv2sNv86Ry%2B%2FXRfWfULFYbvSb1gHS6jfFO5H3sBuIdcr0Svjml%2FqddHtRGUG6ql4u6iXClk99YJhyBQglemxElbSc9rvhnOjPDHNLRA6CSpkKcS5Lkt4RR6zMotmYdx71HbIG%2BN6JKYqr9v6JpQxrjvJXCsdjCXz%2Bu8BjqkAbH9dSAqnbAC22TEyHPb67LrxsNoo1argYQu%2FDN3I38AUhq97GbMRzYSJj0wHvIRzTeZzipiKqJgvqJhtNXyy4PcfMxbfCTNzwLoi744yKDiPlOc%2F7LaF73GpdwLRZuKIhzIqWOsknf7NMRSzfaYCivZNYCye%2Bwybg5PUI%2FmS1M7tUMwxnLb6EoG9j9DmDfs1JX7Js4kkg8DBfjUm1Y10%2By4M2Pn&X-Amz-Signature=857b0758390bca990ee91f4a39b5c52a5262a545ccb08faa2c82830c44363b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBEZX4A2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQoVSsnZyeXMhH9%2F4wwmyFvl9VH4xEb%2FDTvKgJYp6BEAiAj4%2Fcj2lWLSJCCLwp9mgSJRDHMTv46pNw7aYQF3dvU%2BSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8W35WwndXKzx5c4sKtwDOHiEfYzkBQXrFleV%2FtbV8BtCcJkHxZm1ZbB9xlArxMn5oMQ7C3Aeik9GN4y9%2BDd93bAQQUq9HqPS8xf40ghxwuBa1f0kb0Qa0%2FaLvpj4S5zg13%2BOq%2BlN%2F%2FIbNpplKvwGBOJRYFYTT1IgZB%2BSwDpG3YvwN6eesxu82cLMTvhhvoG9beAQlr4TY8OdVZGKe7zDZEF3M4zUztekgJLVKaD4EW5Pi02dqo5D5n25uy%2B%2FMkdagLHucO5M2xifkxO1AkAg2qmplDbAGR9zQ%2BqbzAVEAcW1htgAf%2B2auZWkApqIy0OC8uCLoF2GyG6PhD%2F0zLKADjkWIe%2FMXLnF%2FSBmlULFzTQRWvPqdEAXzmv5%2FpHonKTTATli5FmE0IRm9JSLVkFKj0KfTOYSyexkhA7%2BTm4LmPCdEAhrkbrinwz25Q2qrnENgZyXlQ42oWJ5%2BkdZs0GpRsh5weivR2jNyC2u%2FcsHga43n7Hu8cXybNaMeDi%2BAFfzt2ME5oJIyubpqKI8BW6EQoQyFxdIL2rZqGgGldK31UaWKcvhIsIcDgba82yZlgJldn%2FnnfejeoYdnKOVVLOdR4HuM0YX3XMrKMzMWZFvIo0JWUm7eNV0Z1yc7ZL4TsvvmkQhT%2Bwv85%2Bvtkkwqs%2FrvAY6pgF1USRaVh5ZWSY%2BnD9ir6S222O3pxnmqXxJvRv2%2BLe%2BKAs2JYPbjKZESb%2FTSsNUhkvxzjNDoOab5n%2FhozBahSH2mt2tew6rkk75o%2BX3rzSiG6Dpf1WEPLi5Zjut6wIfscmQUl80mtJZR3n%2BP3UqJmR4O2ZP5ZjSMUKPuthxMhk3S2IyGpe4Q07Di4raalgqPXF28p04Zjw3HQ5l6PlGbrAbLht%2Fcjna&X-Amz-Signature=18d44ceec65812aadb340dc87352fe9dd27fd6e7730667612f312aa666141c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5W3AZI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpplBDdbKvF1ywb%2BXBsCxPb7AQvqs5CtIGCChFL3GU0AiAYuk7eo6XpGBuInTNVLihFqX%2FrZNwOLuBQlYv2g4XwtyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrOJ4wKuY6MXPtOT3KtwDxFnVz1gd7mKWNFrlrTAOTs8En49z9r8vHS726lhAM%2FhbZ0oKw8HU2%2BzBplwJzZAhsL%2BWfoGhc%2B5vATgBp8fUOXM9jt3f7arqhrqVr0hcuBS3YN709oC20%2Fd4vqRlnwhkSM2ywz61EgkZq86jBjRASq2MpURcrddD%2ByPFqTCFnIuEQdcKF0HU%2BTjnhhIxzlkdeqrUd664fh9mwaOsP%2Fn1CbzDg9aH%2Fiwb5c7KymPj55hpTA62eIUKkA7TciYbgsTYckAv2ATYLEgyoi5XY4A2mfMZhvVv5y0iNjnUx%2FIsKHIlLUiaTGwZ%2BNy8loBMO9nGP8M1Ds0JTihgaMtGE6J54nel4CSuT1b%2FFKUT85DnDEV9z%2FI1TDRZQw3nqLJf04ySotwLpzM0FXn%2BtGMCrgyGbHKhhyK6ZZuWWCV5ML1Km2nZK%2F7CBZLZ00owzAqsPod7mBYw1dHzmKDWPEa7S9JcYIOlO7yMa%2Bv1N1SWPz%2Bt3ZtrFtgSFAyhcdaJqlqNc0bM2b7DVSNarI0G9%2BNE2IsDgYJpLiKQYMYT0GtRqELK2TW2SnYB4m6zbo6nn25Rm%2F7QY6vo0dGcu7EElDSJ%2BdDttxt8Fjfi69t8ZRP9RfJ8iyIxkG5%2Bsm6HKu6Ppg8wvNDrvAY6pgGQtrMhMputr6ckUxdOTkfq8fLpaXm6JOOYG%2BoK6l0ywuJuxiXs5gKWVoWv20ggQV%2FdK0MUZrpxuWZwp9em9eYiekrZbwvs5dh60GFCCQbdSbLs%2BF6lPPpsrXUI8qBKiR9sPCGmqKb7kwqBI5rgAUo8tUfF%2FBIxg89uYzvdfTmuho6TsGAwiudX%2BPKCjDVMh5G5a3bz2hJfeCBpX1GQDQgWTSAoDwkf&X-Amz-Signature=cf37f28e4543c2a3658b4e96589b895668bd085d74dd61544718feb618709489&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5Y4ZIOB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVtdPAMhHgDIO9%2B5eEwfCqFb2CTFw04pOm8eKXdRjBOAIhALSuFsMfPv17h%2BjDj2Gz9X1a4AptuZ5NkIy3GK3glTS1KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi9EHhw88Cj7Zs9hkq3AOgMdl3Hg6y0gMD7GhQ4yKl0Bd%2FozgA3k4KGl9JStQKyY029PIyDE8jlzjFavF9%2BLkVMpa1JYIWRfEeGZuXpmCJ6Z5OEPG3RPXd5ge886eQJFXYwDjhnPU%2B%2B2rsWYyGhJOWLx1EyhV%2BNpRzEV2UmPv7u5NQZUrugUvYwhJWz49CHmd19LwzLJ1iammpHffD2tyd%2BTm7cxr96F0qtBaKYDacUf2XIuAtzl3iTPTvzXdHc7OWcSfuzUWMZhvlb9vARBdwCZMMEUDn9mLdxNMgmxp5hvfOSbo5i31Yt23YJitN58ZDp9ondhOoqSFQCpHPlSUJPfiiIxXv7viCTcGlKEz%2FriAFxt4vCthzKQylv3bgmXZi2T1PIh6ObBtXuiEYUYmZgrO3iHHZWy3uCZiZtEZq4Bkrhro5Tda4Jv3IpbGyqUqcguDWQJn%2FVimjajkGfYez9G2uGB9fuLyBjQKYKEQIYwEJXD7%2FvSv2sNv86Ry%2B%2FXRfWfULFYbvSb1gHS6jfFO5H3sBuIdcr0Svjml%2FqddHtRGUG6ql4u6iXClk99YJhyBQglemxElbSc9rvhnOjPDHNLRA6CSpkKcS5Lkt4RR6zMotmYdx71HbIG%2BN6JKYqr9v6JpQxrjvJXCsdjCXz%2Bu8BjqkAbH9dSAqnbAC22TEyHPb67LrxsNoo1argYQu%2FDN3I38AUhq97GbMRzYSJj0wHvIRzTeZzipiKqJgvqJhtNXyy4PcfMxbfCTNzwLoi744yKDiPlOc%2F7LaF73GpdwLRZuKIhzIqWOsknf7NMRSzfaYCivZNYCye%2Bwybg5PUI%2FmS1M7tUMwxnLb6EoG9j9DmDfs1JX7Js4kkg8DBfjUm1Y10%2By4M2Pn&X-Amz-Signature=4e5478b80dd123be28f6b3021d148d58fd45b889010b3e15afe37b30b919cdfe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
