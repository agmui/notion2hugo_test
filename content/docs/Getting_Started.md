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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSK43WSX%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtrqKF3e6IuoV74AuJjVLyAVFajMoLS%2BkvLuARukWOwIgGLqNnKUDDaKN%2BDqgwIBNHB8K4aO07%2FgXzTDdwwuDhNwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFq5yE9gmzpLSdYs%2BircA8NU6Qj%2Bh0PWJfZxXA3OdUZatVQ%2Fq5kBuj%2BlJXBqJUXiuGUKAsdRp5QrYT2N1k4FDAZXSIObS1bfE5E8mcVwy77KMvpg0Pjbbt3eaeCKooPctjZ5IFCzqmbl5CkQkqQ6yIbycWW89r%2BqF8dNhnJQZKU8EYzQyVGrd7ap%2FraUHbQxbuzvIZQ7AD3EpK%2Fxo964MqBotg6xUaQD6r5uP14WdAquT8rGgz6SxfzXmQw1RE22eVGNB7z4FCmBkJGjRSeVss8cp6tqAZIbuU3QPGbjrwbfUHLNcKCJQuiUGUG0E4BCJ2%2BR19i4yv%2BjOfj5bt4OGBv3AuypV%2Fab5Xn398g1RE3a729Ai2XdIQjOX8nsK2TFoBJs8PnFTsb3DFIknTs7a%2BfUsq2daatA7aStiMM9i15hu7QOtpaTLnjnCIWYpdeGbXdIbUC5UL7i%2BBqdosJpksMGUm%2FvJOhcfbp%2BmoJFpgic3%2FMwQhV5AYgVvOu5HaLwGKawYUvaNx96lA%2F4TF6u6X7hKlV0aTca%2BKAt2V%2Fzqq6VWUUJVEPtOBuONncQm%2BIuIKaDJ9b9oQ314nraik2re1g%2BhkQ%2Bxng4skt6zeFbpfvU%2FK6WQxe9Cs88aAElYwp9WxhXpWMtaodReeKgMI3v2dMGOqUBrvlNGGz8yUeUFwXVc5r4bJWVus9lY7OjSvamFgpowUgUwyGPOeMbIKDmfIvjzjJjoHUBCg5yEUpD00Afwg2cPSwqzKpMoy5zMv%2Fvf1g1ggLItv74YBTDPnVf9%2F3Krvi7y97lpMibN0p1veqgbukRyycsirGY9hAhBbOnR%2BE%2BtTqqHEyczfkv5sMv3tBC5eOW%2FZP58zly47YYxHn7hO%2F%2FgBLpzyhg&X-Amz-Signature=9864304f845e2927fc84aad0f2f8acd146badd8652b7082876968442583787b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSK43WSX%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtrqKF3e6IuoV74AuJjVLyAVFajMoLS%2BkvLuARukWOwIgGLqNnKUDDaKN%2BDqgwIBNHB8K4aO07%2FgXzTDdwwuDhNwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFq5yE9gmzpLSdYs%2BircA8NU6Qj%2Bh0PWJfZxXA3OdUZatVQ%2Fq5kBuj%2BlJXBqJUXiuGUKAsdRp5QrYT2N1k4FDAZXSIObS1bfE5E8mcVwy77KMvpg0Pjbbt3eaeCKooPctjZ5IFCzqmbl5CkQkqQ6yIbycWW89r%2BqF8dNhnJQZKU8EYzQyVGrd7ap%2FraUHbQxbuzvIZQ7AD3EpK%2Fxo964MqBotg6xUaQD6r5uP14WdAquT8rGgz6SxfzXmQw1RE22eVGNB7z4FCmBkJGjRSeVss8cp6tqAZIbuU3QPGbjrwbfUHLNcKCJQuiUGUG0E4BCJ2%2BR19i4yv%2BjOfj5bt4OGBv3AuypV%2Fab5Xn398g1RE3a729Ai2XdIQjOX8nsK2TFoBJs8PnFTsb3DFIknTs7a%2BfUsq2daatA7aStiMM9i15hu7QOtpaTLnjnCIWYpdeGbXdIbUC5UL7i%2BBqdosJpksMGUm%2FvJOhcfbp%2BmoJFpgic3%2FMwQhV5AYgVvOu5HaLwGKawYUvaNx96lA%2F4TF6u6X7hKlV0aTca%2BKAt2V%2Fzqq6VWUUJVEPtOBuONncQm%2BIuIKaDJ9b9oQ314nraik2re1g%2BhkQ%2Bxng4skt6zeFbpfvU%2FK6WQxe9Cs88aAElYwp9WxhXpWMtaodReeKgMI3v2dMGOqUBrvlNGGz8yUeUFwXVc5r4bJWVus9lY7OjSvamFgpowUgUwyGPOeMbIKDmfIvjzjJjoHUBCg5yEUpD00Afwg2cPSwqzKpMoy5zMv%2Fvf1g1ggLItv74YBTDPnVf9%2F3Krvi7y97lpMibN0p1veqgbukRyycsirGY9hAhBbOnR%2BE%2BtTqqHEyczfkv5sMv3tBC5eOW%2FZP58zly47YYxHn7hO%2F%2FgBLpzyhg&X-Amz-Signature=78d54a74c5c94e83c1e1c68ac47043578d07962e658f9f81fd4f46d9211ea0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSK43WSX%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtrqKF3e6IuoV74AuJjVLyAVFajMoLS%2BkvLuARukWOwIgGLqNnKUDDaKN%2BDqgwIBNHB8K4aO07%2FgXzTDdwwuDhNwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFq5yE9gmzpLSdYs%2BircA8NU6Qj%2Bh0PWJfZxXA3OdUZatVQ%2Fq5kBuj%2BlJXBqJUXiuGUKAsdRp5QrYT2N1k4FDAZXSIObS1bfE5E8mcVwy77KMvpg0Pjbbt3eaeCKooPctjZ5IFCzqmbl5CkQkqQ6yIbycWW89r%2BqF8dNhnJQZKU8EYzQyVGrd7ap%2FraUHbQxbuzvIZQ7AD3EpK%2Fxo964MqBotg6xUaQD6r5uP14WdAquT8rGgz6SxfzXmQw1RE22eVGNB7z4FCmBkJGjRSeVss8cp6tqAZIbuU3QPGbjrwbfUHLNcKCJQuiUGUG0E4BCJ2%2BR19i4yv%2BjOfj5bt4OGBv3AuypV%2Fab5Xn398g1RE3a729Ai2XdIQjOX8nsK2TFoBJs8PnFTsb3DFIknTs7a%2BfUsq2daatA7aStiMM9i15hu7QOtpaTLnjnCIWYpdeGbXdIbUC5UL7i%2BBqdosJpksMGUm%2FvJOhcfbp%2BmoJFpgic3%2FMwQhV5AYgVvOu5HaLwGKawYUvaNx96lA%2F4TF6u6X7hKlV0aTca%2BKAt2V%2Fzqq6VWUUJVEPtOBuONncQm%2BIuIKaDJ9b9oQ314nraik2re1g%2BhkQ%2Bxng4skt6zeFbpfvU%2FK6WQxe9Cs88aAElYwp9WxhXpWMtaodReeKgMI3v2dMGOqUBrvlNGGz8yUeUFwXVc5r4bJWVus9lY7OjSvamFgpowUgUwyGPOeMbIKDmfIvjzjJjoHUBCg5yEUpD00Afwg2cPSwqzKpMoy5zMv%2Fvf1g1ggLItv74YBTDPnVf9%2F3Krvi7y97lpMibN0p1veqgbukRyycsirGY9hAhBbOnR%2BE%2BtTqqHEyczfkv5sMv3tBC5eOW%2FZP58zly47YYxHn7hO%2F%2FgBLpzyhg&X-Amz-Signature=9f9b987f700397786250b34c0c208e8f56dc626559315b281c652dc4efc7fed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJVT7FV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FHiYpodW2k%2FUw%2Bvzz0bjc5cFJ6Mo251WF80jWSoqz4gIgROznU9Qk5iXuQFYK%2BQBt9KUkzaS1BQlq9WwkE%2Bzl8LAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDONPRAMl2Sapk22IRSrcA2qWTN43MSxO%2FHNyJ%2FzrFFBqy1CYmOQSlrlHgw1y88kIJ5nl7XlNEh%2B5ZXwjDd0lUQdKtUbmZsecx9AjUf6n4lYqXqiuOWbHfwaXtmj9vSZSkPu10HWoCNMfyZsKA5S%2Fabdad9goQoxGIAvhFO5hnPYKVq95ApsuplXwfaOf%2Fx5AuVHeoqN9veLDr1j5cQqxRWV8WD6jmKmTbwWPFOzhnHqnNPbIRa8XLM65zy%2FXQ8VSiz5hD2g0VmMFr2UQoKVZjSY%2BaJBd5eAc%2BnyrszKo3RztgGHWPyY0JXtdGTT4ORqKbAEkajLPiDDdTA4U1EujrUHxVFLPE62S2JTTaii%2FCA9xk60mm3DIH4wPkLjWc%2FaMVhnt22QlDzQMxa5mu5keV2whjPfjddlvFP%2B9n5atNqn39NQuwv30nXOY7n3ufSZmWLpuUUVg3%2FugvixVqlHVy%2BmUzogdrZoYQec9xqNKcG78S8rUWeRERPCbFDpnRjo%2Ft3fyuX866CbHUlxRIrQJYJtjYioi996T1AB6SEPWxVgt5WEVGx3645TPUxVAHuY2wV%2Fp8pW9e%2FaqO5HVzyBTiv%2FrUY42cwKSxN7gx%2BQ%2Fx3ZTJSHEcSWvHbdWdf%2BQEsA%2F%2BwKv%2FRABYVd%2B6xx2MNzt2dMGOqUBwgi2p%2F7w3dQLF4sEyR00tdlX1FxGkA0i6rUgRrXl%2F1K%2FisYxo5%2BwhQ5qTBScPgEcT2rX3I0WLiakG0j29pANR5DCFOEUycuN%2Fb134mb0jwAnB5oIqBMRvs%2FuQhJTX1IMSNQpfuDceOy7GWE08TsQGAYk1RTuvmSGe%2BtrZGdAnL%2BcXB2gLceoQYWXGiWmhHngS17bdGs7Z%2FIPT2f4y0axAywCkp00&X-Amz-Signature=02c2a0575a6e173ff99ee880246304da7508aa85a1da2c5760d3d0bf60891b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ7SS74%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDotFfTzf9c6hDIeGB4%2B1IuMUzuDpr7ommsjutaH2yJMwIhAJ0i8ct9ZMpkBBhLKlp2BAGmmRiHyE2V6GCPcYjmY1nEKv8DCGEQABoMNjM3NDIzMTgzODA1Igy8UdrzCBvsLqR%2BBvQq3APzWtLqonOUfZ9B9CYMFjPK4PJ7KOLCy0SNp6m5DRYzYeVxthfrDPgKwnreriGcO3N7mwq1AR72Sttte99CTJ9CuNUDwwxh3zsDjLyl4GSU9NktIVWiQbclI2q70oTkcaTiu%2Fena7MlfAAn%2B1g4FDisi5V0L6wOPVtOs00NkUJ7Sop%2BeU1VjCk4BV8jg3AKHlvOmYxxHvIqHcO4Bq9Iy8m0YwlVFOLM3Bp8FNxUUQRANVJbinrH%2B1vVyFJh3nSvuUZVHwfil8%2BUdqO3zeQHJfX1fy8EMtCJ2nSU9G1g4Q%2BCqY7LBu%2Fo6B%2BkbTbJfKUE%2FySa69mVF%2FVZKtgzchIPGNRTWTaOCWSH0oiA9k%2FnFoET56U8ykt2Ura%2B7MkM3HCYvptCCaNAqxZPpoaW3FBdnpGPT9PevHysqjgRIdiDPQkcC4gMhuLpaQRyKYzsK1djtQyHLNIUc246HNH7%2F5%2BJs%2BZt4%2Fir%2BWQwO4qI%2BsUQloidvVFXa8GU%2FVKNYf2%2B5yM8kGCPhpvZEwXCWCXwZ7xmT%2FE6pynk87CLL3kMxPtUJlR3T6bL8iiJchHZMXo8lUG681xH8KIUcL3k62pnAlhy0GCf8Id%2Furl73dhuNVY%2Bmqpg3%2B5ngLYaLP%2Bhr8Qe9jDf7NnTBjqkAXBqC7HHKKxDkANAbAAtas%2FxsPSKVu5r%2Br6643CJ0RpqXPJUTKIDqtkAyaX0oE2rdlkEDe1ynLOFQux5yCKEfmYKFpwTiu9aeLyUz4FtDMXbIDcilyruZOUKpb8CY8pss03wk9Y%2BdNqcgTpSsPluLE2JcrFtS2lsFiXa9zL3c9AiVEuR6fhzg%2BDJU6HoDabsY3Q1xS4roJcGIw3ugPHElWBLBcU0&X-Amz-Signature=74cc3d47d45d901d8a76434217f316b3ddd1e959f3101709bc38e6f5ef3473da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSK43WSX%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtrqKF3e6IuoV74AuJjVLyAVFajMoLS%2BkvLuARukWOwIgGLqNnKUDDaKN%2BDqgwIBNHB8K4aO07%2FgXzTDdwwuDhNwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFq5yE9gmzpLSdYs%2BircA8NU6Qj%2Bh0PWJfZxXA3OdUZatVQ%2Fq5kBuj%2BlJXBqJUXiuGUKAsdRp5QrYT2N1k4FDAZXSIObS1bfE5E8mcVwy77KMvpg0Pjbbt3eaeCKooPctjZ5IFCzqmbl5CkQkqQ6yIbycWW89r%2BqF8dNhnJQZKU8EYzQyVGrd7ap%2FraUHbQxbuzvIZQ7AD3EpK%2Fxo964MqBotg6xUaQD6r5uP14WdAquT8rGgz6SxfzXmQw1RE22eVGNB7z4FCmBkJGjRSeVss8cp6tqAZIbuU3QPGbjrwbfUHLNcKCJQuiUGUG0E4BCJ2%2BR19i4yv%2BjOfj5bt4OGBv3AuypV%2Fab5Xn398g1RE3a729Ai2XdIQjOX8nsK2TFoBJs8PnFTsb3DFIknTs7a%2BfUsq2daatA7aStiMM9i15hu7QOtpaTLnjnCIWYpdeGbXdIbUC5UL7i%2BBqdosJpksMGUm%2FvJOhcfbp%2BmoJFpgic3%2FMwQhV5AYgVvOu5HaLwGKawYUvaNx96lA%2F4TF6u6X7hKlV0aTca%2BKAt2V%2Fzqq6VWUUJVEPtOBuONncQm%2BIuIKaDJ9b9oQ314nraik2re1g%2BhkQ%2Bxng4skt6zeFbpfvU%2FK6WQxe9Cs88aAElYwp9WxhXpWMtaodReeKgMI3v2dMGOqUBrvlNGGz8yUeUFwXVc5r4bJWVus9lY7OjSvamFgpowUgUwyGPOeMbIKDmfIvjzjJjoHUBCg5yEUpD00Afwg2cPSwqzKpMoy5zMv%2Fvf1g1ggLItv74YBTDPnVf9%2F3Krvi7y97lpMibN0p1veqgbukRyycsirGY9hAhBbOnR%2BE%2BtTqqHEyczfkv5sMv3tBC5eOW%2FZP58zly47YYxHn7hO%2F%2FgBLpzyhg&X-Amz-Signature=b39f28a29dc8000cf6cf096739f376380d6d481a90f393df5256c4aeef51ae79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
