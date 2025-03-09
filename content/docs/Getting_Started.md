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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BCYIGU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDiQzaOiAui4ihtGWbcDxW9SAPTtfsnzrfds1lA4NZ47gIhAOC8YsqG5Nvnn4F0Uh0J%2Bdpa2eTNsAMokW6TDi0UnO0MKv8DCHAQABoMNjM3NDIzMTgzODA1IgzC3insZCFdotAXT%2B0q3APWiIfQDeGW3vbp5Rtupd5C%2FaNHiMYBHtmBq%2FCa9tTBPlp0qmOnqxsZvuwL%2FMfFABUSJ6NcqbL4vsNaJO6pvhnR120fadd1jvGel56myUzsjkPHMCRfYWrP%2BoODuZXq79tHZBnCrslJC%2F2jdt6kjAB%2BAYeDJAitNYp%2F10zQiKEDfUV7Mt3d8PsKydhZne1gRZ2KyEU09KjQqthaAHgNwCBUlgXXfzudn30DgB78luvS2XbWNxkFmfL6xgyNi%2Fgf3wodb5QZrAOspFgICsGwhgOU8NK6%2BZcb0YPNdteZn1VCnYPTgMnN1T4QZ%2BeOPgqocA0CC3AHIELUxM5mhCMZNU4%2BVAvzpAGjdIr4IFKdbE0VwwaJzwm%2BEVB5JguYtwCRZLE%2BtgHT8bmLxUAbnHnv%2FDpkVObVFQb0wRbJNb4N0kOBBpP%2F8msH%2Fr4%2FhIb7jYPy4Y3NQ7ifTEGAv%2Fc7afYGzZezvlc%2BZY09THWisURxSqtCRNgBA2rQGjN2O0Qbl3a3U196yQfBi4z1UooN3WNHOPYVJPhymXoBh3nJe2xwRz4fMEZvs0vvzOc4RYDa7U2HUG%2BKCbb%2Ft1Q9BQKr%2BgHezgCSrGnxYOoCE6Hhwmi%2FzDjJMpe6P6UTH2M6%2FM3W6zCz67S%2BBjqkAdd7xCE38gfYS%2F%2BMnJUdIVNYK1ZUVXPrDeYiFU7ZF4aXehoxUw3n75QbIplSxwkFpqv0CExAT4SOhV7%2BCboJUjLFtxyK4RmNucxDMOs9izz9K8PRdK1vE3UK5gwiGNwd7uAMvgMGu%2F0z%2Bkf0pbG4uGw0W%2Fd43OZmd3EhGWZudodIi1mQ%2Ff9UDbekhYa8jVTH%2Bslr86nC8MGMBYZOyJkQA6%2BsTqrz&X-Amz-Signature=33530b945a053e767430ebc28dcedc77ef4249d9f64f59470a6c7f4cab3733fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BCYIGU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDiQzaOiAui4ihtGWbcDxW9SAPTtfsnzrfds1lA4NZ47gIhAOC8YsqG5Nvnn4F0Uh0J%2Bdpa2eTNsAMokW6TDi0UnO0MKv8DCHAQABoMNjM3NDIzMTgzODA1IgzC3insZCFdotAXT%2B0q3APWiIfQDeGW3vbp5Rtupd5C%2FaNHiMYBHtmBq%2FCa9tTBPlp0qmOnqxsZvuwL%2FMfFABUSJ6NcqbL4vsNaJO6pvhnR120fadd1jvGel56myUzsjkPHMCRfYWrP%2BoODuZXq79tHZBnCrslJC%2F2jdt6kjAB%2BAYeDJAitNYp%2F10zQiKEDfUV7Mt3d8PsKydhZne1gRZ2KyEU09KjQqthaAHgNwCBUlgXXfzudn30DgB78luvS2XbWNxkFmfL6xgyNi%2Fgf3wodb5QZrAOspFgICsGwhgOU8NK6%2BZcb0YPNdteZn1VCnYPTgMnN1T4QZ%2BeOPgqocA0CC3AHIELUxM5mhCMZNU4%2BVAvzpAGjdIr4IFKdbE0VwwaJzwm%2BEVB5JguYtwCRZLE%2BtgHT8bmLxUAbnHnv%2FDpkVObVFQb0wRbJNb4N0kOBBpP%2F8msH%2Fr4%2FhIb7jYPy4Y3NQ7ifTEGAv%2Fc7afYGzZezvlc%2BZY09THWisURxSqtCRNgBA2rQGjN2O0Qbl3a3U196yQfBi4z1UooN3WNHOPYVJPhymXoBh3nJe2xwRz4fMEZvs0vvzOc4RYDa7U2HUG%2BKCbb%2Ft1Q9BQKr%2BgHezgCSrGnxYOoCE6Hhwmi%2FzDjJMpe6P6UTH2M6%2FM3W6zCz67S%2BBjqkAdd7xCE38gfYS%2F%2BMnJUdIVNYK1ZUVXPrDeYiFU7ZF4aXehoxUw3n75QbIplSxwkFpqv0CExAT4SOhV7%2BCboJUjLFtxyK4RmNucxDMOs9izz9K8PRdK1vE3UK5gwiGNwd7uAMvgMGu%2F0z%2Bkf0pbG4uGw0W%2Fd43OZmd3EhGWZudodIi1mQ%2Ff9UDbekhYa8jVTH%2Bslr86nC8MGMBYZOyJkQA6%2BsTqrz&X-Amz-Signature=760e01db947b9dc7716bfcaaeb673807e9f2532b4db3dce43aeacf08ac2deaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2RTHBO%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDx3nTLnYD5dQ6kt6kjtVdz2%2Bg8uqUGOWhbGQcdo1CtWgIhAIj8WrUx8g5G2MPtG5LBLfqjoZKp%2FF7NNCj76Gyp%2BGO5Kv8DCHAQABoMNjM3NDIzMTgzODA1Igy2jRa8xw5xhurbfRUq3ANvaNnUFDXBadldkvQmAy96XzcFzaNq3FnyyLbIESkgWRL%2FIZVAbzZ2WahcREwP55npFOa9TzwsiEhv1ZURfUSr9dXgze%2BSRt6etl2K%2B8uiOWHyOLcLMBB6AltyPerHZxOFY5OPHFO6OPgZ9Zc6Ed2as9qPTRbQpfhHwrTYIG96kSIptuKzSHF6VsvB90WWuE31%2BdboWWsY3jV7el0y%2FobAP5JKkLPCCMJZxExgMFWfzjDHlBPHWePIUqjyYZl5A4T8Ac6tJLQWCBmiSsdn6vOAP42WjnveBHT0vqPm0wTGBnx5JRXum9Z2XlA9h1U7%2B1OvTUN%2BwEMFDjAhNBx8pzvDDR109nipPlfjn8%2FFC9zek4buWxdd%2FC943YNvk8qXNOa2PVhpT4%2FJARAtczurICUrAWGiuLSk%2Ff%2FugK8JyvUPZ7uDX4Nkx63s7DR%2B5tnoOVdc0%2BG8xpyT8D1h3br6WX%2FIdwuU%2BZ9kDX%2FikWtpi9qbLhTbl2SNVk7ve5eE0naxmyh6x%2BzLQNekXFfluELHAx1OAmxFIdm6txSqd62CsRLPbUUhFLaYuT1pKOMhhNibG1n50P9IjiSpg1%2FqOa0gKE9rl8zYFBGq%2Fi6I3hwZQzcaOKbnQq57ZOgpMNCPOTDr67S%2BBjqkAbhcDSS%2B4J97eLZoiRw9Em6rAV6bQxJolm9%2BX%2F%2Fx7rmdBH7XUj%2F5UwZeFJxIXfUaJOhffND%2Fcy5VNK4mBi6DluWX8TTPNN6rtjEQ509UAhHwBf6Bgw9SprTtZeXpDNty5XqsTI8KBQcGmfoWkj72KN%2BGSxyihFpnY80Xegxr3QUuyZNC2gw6pNxpRF9zuNkKfLgYDDJIM4kf81IkOyLgClUnR1xd&X-Amz-Signature=64c28675ec59addc0948609aa11932652f7f18304b55513c9f695bab48c0ab82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYE6P5V%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAizv6lNxRul8b8k7%2FtA4H1oEpezGo6%2BFy4l74nhSyi2AiEAz6mIiF%2FaBBfrgIxsNmQThX04fLqAUioQoNLAFYQ1KMQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDE4zIJ0yYbKIJRvaCircA5Pt1%2Bx6WfjmMhKKciG4AgG27LXbAoa6uB3SNGBadISTxjiToZJ9mwbGnzHQwH5sLM42h4AGzmWVuBiIBrrNZdDmAinIZ9B%2B9a%2BQBNgHMvXEjPYhZ%2F84ZnvTF2JfhH02HngcHisjLZCmkCG85Ji6HyE0OHtCd7XhrZKIBa0lMOkUnLgtrYacrfVPous3r7tclxvjeB%2FJQ%2Bs76%2B1ClB85Ioez%2B49fqSXt6r%2FTpJphBob0u9xoNchbiWiIwc4gJWc3AdEnToLRLpx0Q6lASweUXWTgjfYxvZZTkF218DWoqtCyHhyvQQuveH48ltBtVw2MxJUkL5u9UizlEVf592hB%2FYA9cl0kagWCQoWpt56eDjArxj1KVeqr%2BXeMbFHPFjwEfyWfWnxqxXruoMrXaVuIoDEdlouJ0m%2BHuX2%2BW93WkTI1BR1BX8LAuJzaYU6SMWhRXea9xOPp05FoedpAccN1EKScVG%2FOnOp3Vg93Ok2Qr%2BGHa71KvkYZdgOvv6Ot%2FL3Q8i24d8rWDqGYmRXI1IZqsQzC7IdsFRbt5FlUdJlOHZ1Pz3L8XBDSn5XOKcQXs6FI%2FEkhCwG%2FzgNwuoq62c4mv1hU5j74hng8QBumZqCfk%2BLl4xZ%2Fwv13jE4EDHQrMIvrtL4GOqUBAzT9du%2ByjWUYNSfC5ieMHPSRfGWT%2BjICbqeWLoMHIekI36nDZYr2xVefgfJRu3ZQLr7sLQzgcqV%2Bz7rl7OrGJwmZc39fKDA8jBA9Sea7whEc%2FfTiaS9gINHL6fSOREBr1goLDDWg2H6S4jiVGqUXwbjL7SSeNNVWkb%2Bt0nklX8gim6zmzHJyLyNmvXizKKwNzU6%2Fm1bv2Isd1kZS5mDnTBzjEf1e&X-Amz-Signature=9060f8fbcae042af569bd0c6cb17b55c16555b763bf2b84a7e3355ddb60a0133&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BCYIGU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDiQzaOiAui4ihtGWbcDxW9SAPTtfsnzrfds1lA4NZ47gIhAOC8YsqG5Nvnn4F0Uh0J%2Bdpa2eTNsAMokW6TDi0UnO0MKv8DCHAQABoMNjM3NDIzMTgzODA1IgzC3insZCFdotAXT%2B0q3APWiIfQDeGW3vbp5Rtupd5C%2FaNHiMYBHtmBq%2FCa9tTBPlp0qmOnqxsZvuwL%2FMfFABUSJ6NcqbL4vsNaJO6pvhnR120fadd1jvGel56myUzsjkPHMCRfYWrP%2BoODuZXq79tHZBnCrslJC%2F2jdt6kjAB%2BAYeDJAitNYp%2F10zQiKEDfUV7Mt3d8PsKydhZne1gRZ2KyEU09KjQqthaAHgNwCBUlgXXfzudn30DgB78luvS2XbWNxkFmfL6xgyNi%2Fgf3wodb5QZrAOspFgICsGwhgOU8NK6%2BZcb0YPNdteZn1VCnYPTgMnN1T4QZ%2BeOPgqocA0CC3AHIELUxM5mhCMZNU4%2BVAvzpAGjdIr4IFKdbE0VwwaJzwm%2BEVB5JguYtwCRZLE%2BtgHT8bmLxUAbnHnv%2FDpkVObVFQb0wRbJNb4N0kOBBpP%2F8msH%2Fr4%2FhIb7jYPy4Y3NQ7ifTEGAv%2Fc7afYGzZezvlc%2BZY09THWisURxSqtCRNgBA2rQGjN2O0Qbl3a3U196yQfBi4z1UooN3WNHOPYVJPhymXoBh3nJe2xwRz4fMEZvs0vvzOc4RYDa7U2HUG%2BKCbb%2Ft1Q9BQKr%2BgHezgCSrGnxYOoCE6Hhwmi%2FzDjJMpe6P6UTH2M6%2FM3W6zCz67S%2BBjqkAdd7xCE38gfYS%2F%2BMnJUdIVNYK1ZUVXPrDeYiFU7ZF4aXehoxUw3n75QbIplSxwkFpqv0CExAT4SOhV7%2BCboJUjLFtxyK4RmNucxDMOs9izz9K8PRdK1vE3UK5gwiGNwd7uAMvgMGu%2F0z%2Bkf0pbG4uGw0W%2Fd43OZmd3EhGWZudodIi1mQ%2Ff9UDbekhYa8jVTH%2Bslr86nC8MGMBYZOyJkQA6%2BsTqrz&X-Amz-Signature=939aade1740cf1801d9ffc0ecd8d52189236bd98eb574b777c0eeea38785dbf1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
