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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5LMOUH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvROUTvsCf5%2FrLHzRj7hIXb4CYMBtJeOf7hHQ5X0SnhAiEA3%2BDQXWAq39O5C0KsEs2l3lQPVr0Kpv1xyem4AXK6uOwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnl56CUUPRICA37TSrcA2%2Bg%2Buqc9bxaqHM4CTyWHdPXuoAiDVkIvZg5OwDjaXpYstq3WrSzlBjOz%2BGiuwt0xfUJ6ec%2FWN7nwmrjjTTkrSpFIus1inel5QyeGhY2T3%2FxgjcQd6e7agUTU1wsmLyBbN%2BFL6fJTqFpaHMYVTJxhQhUYvgD1gqZJSJxJct59Nw%2B%2FkhcgWDTss231m5YcTVnpJz84Xs341SptgZmyRl3uRUiNf6O3hCQ%2B%2FBERwKIpTZb2eqWkiYL6KdZ7OWlVkiK4R895rk9pI%2B7KD8FkPUoX4h4TCZU5kJlX7OQr7MB3BjK96jE9k9lITTt46xZbCe3cWJ5abKoqacRZrR4RYNijpAgNVwclba%2B8u1EU3umWupBkjs7hAu7JmF8%2BQ72qNK%2Bb8RHr5o0xuHRGlQcCEZInRBdNkAVaZL9JMuwr82rU6nP8nVzcPD%2BFf53qMQmBIwXR06LCVoUawOhAUhPppuy6fMugddCGgdBh%2BsaB%2F2zsmc4uAqOIOqYWZh9oz2gpYsRFgpPnjqjXpfEPllq0JUdebkiDkqO0ryzHRoR5pO864UeA%2FuXeci7EBU04aA3o2NxTdXDGzzonuoETgkyDitCdvG5nh3z%2Fq61USgsg%2Fq1XYLr2UYaS63V5OzGjB1UMMnX1L8GOqUB13sGrAMd4BmqVm2l0OiyvCnKYP7%2Be1GF4wR95rPogVVA1i0xu36YLJkrL7JZUfPKIv0OT8tbSqc8oGHDcJGfBbNM6whP%2FTqkCGjELT8K1UjxYsTMbzGXdc8Vv%2FNYGLkMIYVU1Gzyaz93gw7vPF69UvG74t%2BIycbASRQb8TnGuHmrp%2F%2B9iCnCwi%2BuWW%2FEjo9u66s2T1BmGER9BKkYCbOqsk0XaTps&X-Amz-Signature=cbe5a5df55da01c6cadef9fbcf66c1425c40aabb41a167f1c900e3d285fa0e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5LMOUH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvROUTvsCf5%2FrLHzRj7hIXb4CYMBtJeOf7hHQ5X0SnhAiEA3%2BDQXWAq39O5C0KsEs2l3lQPVr0Kpv1xyem4AXK6uOwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnl56CUUPRICA37TSrcA2%2Bg%2Buqc9bxaqHM4CTyWHdPXuoAiDVkIvZg5OwDjaXpYstq3WrSzlBjOz%2BGiuwt0xfUJ6ec%2FWN7nwmrjjTTkrSpFIus1inel5QyeGhY2T3%2FxgjcQd6e7agUTU1wsmLyBbN%2BFL6fJTqFpaHMYVTJxhQhUYvgD1gqZJSJxJct59Nw%2B%2FkhcgWDTss231m5YcTVnpJz84Xs341SptgZmyRl3uRUiNf6O3hCQ%2B%2FBERwKIpTZb2eqWkiYL6KdZ7OWlVkiK4R895rk9pI%2B7KD8FkPUoX4h4TCZU5kJlX7OQr7MB3BjK96jE9k9lITTt46xZbCe3cWJ5abKoqacRZrR4RYNijpAgNVwclba%2B8u1EU3umWupBkjs7hAu7JmF8%2BQ72qNK%2Bb8RHr5o0xuHRGlQcCEZInRBdNkAVaZL9JMuwr82rU6nP8nVzcPD%2BFf53qMQmBIwXR06LCVoUawOhAUhPppuy6fMugddCGgdBh%2BsaB%2F2zsmc4uAqOIOqYWZh9oz2gpYsRFgpPnjqjXpfEPllq0JUdebkiDkqO0ryzHRoR5pO864UeA%2FuXeci7EBU04aA3o2NxTdXDGzzonuoETgkyDitCdvG5nh3z%2Fq61USgsg%2Fq1XYLr2UYaS63V5OzGjB1UMMnX1L8GOqUB13sGrAMd4BmqVm2l0OiyvCnKYP7%2Be1GF4wR95rPogVVA1i0xu36YLJkrL7JZUfPKIv0OT8tbSqc8oGHDcJGfBbNM6whP%2FTqkCGjELT8K1UjxYsTMbzGXdc8Vv%2FNYGLkMIYVU1Gzyaz93gw7vPF69UvG74t%2BIycbASRQb8TnGuHmrp%2F%2B9iCnCwi%2BuWW%2FEjo9u66s2T1BmGER9BKkYCbOqsk0XaTps&X-Amz-Signature=47b2d17456500a62c45291fc887a753654d657a99b79e143a230d03b84030ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBQLDHA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzdgo%2FxRFp8Tb3IguEsh4pN%2F79GPdXTyEQOm74XzJUbAIhAIuO0YLRKkCFER2%2FqvBi0NJE52lIibC2gM%2FYhM4oNaboKv8DCHcQABoMNjM3NDIzMTgzODA1IgxW159z9vz1xhhPlPgq3AMIwKH2CzQtzbLKTfwwb8SlVN1%2FrwlpNEibKKYeu97yjK8EhTsTnh%2B0I5tK609NcgPULHXVQHpLmT08OVWI5TwgphoBVp35v4qEYZoo5jESnk1yimFNeBOI5uzFQN3EJNTD72wQqk1lVlKl1anCtnrwoATXdURTZFYjAFuIzDjCkuIryuOx5bfHxG1TO5z5%2B%2B41TvIZdjz6YxeRCvi9jDgebhNoXYBnZi7qX8fqiJ%2FB0SGva5bA3lDe67cjVmTXSS00eAusHI267scQXsyxMitfboWoh47E%2Bgkwsx%2FEqnvbsnpLY2mUuKl3%2BnCVt7wuJsOumShrk4%2FjRc1bUWCU2NMN64BKAMBIZH13U0IJSguprtKQglKWVEw8paYs%2BQblg%2BNwMlEM5SzwtxNe%2FIpH4j0SKONR7cDcVhuz8QgTzOrHZ7rJHvCULvcKV6zFvVbTNHckFMM9yv86BMbS4qrIibA5KQ6Okn3ye2ws56kxuQrVymr0FHTd4%2BT3lDQJI545INXMYApuXl7zZYDbDjCGUeAn%2FB27NcFrVCH7VgBFvFlrNHBlK6qnhVS%2BodiArvcCbDPA4LV3EO30focVjSR%2FfGK8lYZGXaO19vJWqkZyTSirv11k4wUxgCOeXDlo5zDJ19S%2FBjqkAS0I%2FnqNA78bk%2B9Z56WEeXD1wPhNyyumJoTDULtnnEEZanvit2Bg9UjEugXRBe%2FRlGKfEj7cc1oU%2BLY6mSy%2Fae8PLhJYBk9FV%2BqLxNh5X2DXQ5T7KSnfkdmw5k7yRxx1icP%2BYQkqpJoKAg8ogmTWOlawf6DYjCYEMJ2XzrfCGtUb3Cq9MKL4mCx2HKzm%2FubCWhtB0vCOQmwZmPe%2BF4%2FqrZhQ%2B4ot&X-Amz-Signature=b8ff1bc65beeeb1d6df4b6d0743b23ec4097f9c4d12c898b318a58aceb559d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD4QWJXI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxqV3KL%2FJ0fnIMHVcScbQ6joPuM712r%2FB9Gw2c3LrKOAiAebrLZ6auVXv7tjSxNrIcJEBXZq4ZGyV3GKcdXAQoHiSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzQP5KrhjCFWDIDmzKtwDqWuDULQsldZuFFPjlvxhiJopcuC8D0Ep8huxSL9bmUhlrtYSi7zd9HX961khM6wwtY%2FLs4ozFDFxSx1b%2Bt7UJSeZ6h9Det1%2F8WL0TqY8ECMuEStJmZ%2BnuSN5uSK1%2FdI0suu0s1bNSYtiS6333S%2B%2B2PvYG1955MQ2WY7VyV63p%2BSqVrOmuM2WoafKRjuTTWHxWUaw8GIb7Sr22JMO2f%2BGewsSNAgvBXi0h5Tl9bSIQhAb%2FkrRig5JnT0ac5vOXuarwX826qdnocDKC7bYAer9X8rRLvHAdfcaswNLTmRg2VRYBF8HnnUvm2C0zeJAHKqjbvUeBWwR1o9arBzTG6dtuW0hWiYaGdhFZ2%2Bq7wgttTQfJtsHWLfrb97Tq1pEM0c255RKS7X9OZ%2BKmE8h4XlBajanLXNv%2FrWTTTAEdiE0g0AZROz9nuI0Y81KCeSy%2FuBASk%2Fc4TzulEU2PGhpc4jQAI5RbbITLjoQgrdVyiIPYvl12y9xuLlXbH20i6ZCUtXTc8mUFHFvuds0sgMaHa%2BmxQN2I0vNjiZDJs59FGAcW50OAyQdd0dgATq8HaFR4VMqVcTvKlGYFQWLkgyfZqSw0y7FyC%2Bd8V7MuXeEhRzwEPyUju2IjOq4wIL3bYsw9djUvwY6pgFhrDyDAieqB9sGZz%2BVtv2e1C3C72aKGWpyIioBsrvmVdJIcjh8lZjoStbeUNOjkmXZx0K%2BBY040QJ%2FjH9BsDnVyu1kuiTgB6rN4LwLOw%2BKiFb3eTRRuqde8ReD04%2FJLLra%2F6uqdbeppiwiuQzJoY90Z%2Bvv7WKs11uq%2B%2FpgTDndcKKg7Pmuzo7oZip0qfC%2BzjN6DpsSFJ3lYywJUTp4nnq4lL7r2sgQ&X-Amz-Signature=105c50ba575e273a5221421a3896383692239eef4daa6ab0ee3c13afaf2a3eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5LMOUH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvROUTvsCf5%2FrLHzRj7hIXb4CYMBtJeOf7hHQ5X0SnhAiEA3%2BDQXWAq39O5C0KsEs2l3lQPVr0Kpv1xyem4AXK6uOwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnl56CUUPRICA37TSrcA2%2Bg%2Buqc9bxaqHM4CTyWHdPXuoAiDVkIvZg5OwDjaXpYstq3WrSzlBjOz%2BGiuwt0xfUJ6ec%2FWN7nwmrjjTTkrSpFIus1inel5QyeGhY2T3%2FxgjcQd6e7agUTU1wsmLyBbN%2BFL6fJTqFpaHMYVTJxhQhUYvgD1gqZJSJxJct59Nw%2B%2FkhcgWDTss231m5YcTVnpJz84Xs341SptgZmyRl3uRUiNf6O3hCQ%2B%2FBERwKIpTZb2eqWkiYL6KdZ7OWlVkiK4R895rk9pI%2B7KD8FkPUoX4h4TCZU5kJlX7OQr7MB3BjK96jE9k9lITTt46xZbCe3cWJ5abKoqacRZrR4RYNijpAgNVwclba%2B8u1EU3umWupBkjs7hAu7JmF8%2BQ72qNK%2Bb8RHr5o0xuHRGlQcCEZInRBdNkAVaZL9JMuwr82rU6nP8nVzcPD%2BFf53qMQmBIwXR06LCVoUawOhAUhPppuy6fMugddCGgdBh%2BsaB%2F2zsmc4uAqOIOqYWZh9oz2gpYsRFgpPnjqjXpfEPllq0JUdebkiDkqO0ryzHRoR5pO864UeA%2FuXeci7EBU04aA3o2NxTdXDGzzonuoETgkyDitCdvG5nh3z%2Fq61USgsg%2Fq1XYLr2UYaS63V5OzGjB1UMMnX1L8GOqUB13sGrAMd4BmqVm2l0OiyvCnKYP7%2Be1GF4wR95rPogVVA1i0xu36YLJkrL7JZUfPKIv0OT8tbSqc8oGHDcJGfBbNM6whP%2FTqkCGjELT8K1UjxYsTMbzGXdc8Vv%2FNYGLkMIYVU1Gzyaz93gw7vPF69UvG74t%2BIycbASRQb8TnGuHmrp%2F%2B9iCnCwi%2BuWW%2FEjo9u66s2T1BmGER9BKkYCbOqsk0XaTps&X-Amz-Signature=86780517a7e8eef25f3575200fe769e261375dc0ae41c4c6fcdaa799d52d2dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
