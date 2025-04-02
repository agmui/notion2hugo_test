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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROFZUYWC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDHpXsronO8gPGnhI8HW8JQr%2BDWZVH6BKOO4mbh74Y4fAiApaV6AHzDiRItZDHxvkCoIEkRXXQsxHHvqdnkwNhJ68iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpX7iy5hGeKOHv2TzKtwD1ZDc1gt97xXba%2BNcODJwN7SE39O7cbXNIZT%2FbP6y7V9Vy%2F%2FkbmSDeLx%2FMpfeFb2XfnM%2BffOm0n9cE3te%2FqkRU71recovuMTkeaNRcLMQjeBvhp1wSe6uVqZHmG2lHVqWuJ3QuU1a7KDBuo%2BXWuCE3EjwRk%2BXD99Ku29PmgT4Ou1SS%2BqL00%2B4ftyXD9p3I3M3vU4y2xfA8qkzDy3osvHt5VUh1XjwZKdx1aXI9h0KPpMrdaG1lIA4hsZfRXkXXw6Ex3UaNvJpVc9GiRhaK6U2ZcXy%2FZp2WLAk%2Bk%2FgIpGQvONZQNkTz8XS3e3isdcESuBdBCeTmFt28OSpCSbOwbttB%2BIaRVZZj2Kt%2BjnICDfePbM38hevU03EFL8AX9mDAJDOr0ItXA3hLc%2FXhg7eHEYQcq5s6Nnqk84uED%2Fk21AVflmnKTCfyD6whYcS0c7m3h8GMBtrtYGT1VQvCC1wPjV8lCqJJdQQ6vQlSF%2BKq0h5A%2FpTqRkOQiUzKxAPy8dBEgT%2FpGGJZCvH%2BEjpMlVkMgt3XTnVMTxn1OhD%2BNnTy7JeazPDFFREtD6k15sDe%2B16IbGnGs91Q%2B%2BvDF%2FxZs9plbzo%2FpaNb7V2PJO7f%2FY9c1JdVUrd4%2BHxqAYNfUptpWQwxem1vwY6pgGmncXePRxHw8EqcHCH2oqI4Ma4InNvfLegtTxIkYjQEV7pyMniy7DC0fPGmetvSwkJF1O%2FoVmslCAcjRKMtCIShH1QxgzG%2BKt%2BzRtv0WgFtiQCU19TXJ1GXh5t1shagqUJ%2BCFErPT7sJSS%2ByekcNQ6odc009JAkKmDf4TQKSZRyzJFrHAQkCfpcWaVkGMdW4eOybMU1BChe7QR2SMOebdbsJFvWLCg&X-Amz-Signature=25abf6b3d7439a5f95de1ad31fda4c855ec746f2db775e11b1f4915d0237d422&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROFZUYWC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDHpXsronO8gPGnhI8HW8JQr%2BDWZVH6BKOO4mbh74Y4fAiApaV6AHzDiRItZDHxvkCoIEkRXXQsxHHvqdnkwNhJ68iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpX7iy5hGeKOHv2TzKtwD1ZDc1gt97xXba%2BNcODJwN7SE39O7cbXNIZT%2FbP6y7V9Vy%2F%2FkbmSDeLx%2FMpfeFb2XfnM%2BffOm0n9cE3te%2FqkRU71recovuMTkeaNRcLMQjeBvhp1wSe6uVqZHmG2lHVqWuJ3QuU1a7KDBuo%2BXWuCE3EjwRk%2BXD99Ku29PmgT4Ou1SS%2BqL00%2B4ftyXD9p3I3M3vU4y2xfA8qkzDy3osvHt5VUh1XjwZKdx1aXI9h0KPpMrdaG1lIA4hsZfRXkXXw6Ex3UaNvJpVc9GiRhaK6U2ZcXy%2FZp2WLAk%2Bk%2FgIpGQvONZQNkTz8XS3e3isdcESuBdBCeTmFt28OSpCSbOwbttB%2BIaRVZZj2Kt%2BjnICDfePbM38hevU03EFL8AX9mDAJDOr0ItXA3hLc%2FXhg7eHEYQcq5s6Nnqk84uED%2Fk21AVflmnKTCfyD6whYcS0c7m3h8GMBtrtYGT1VQvCC1wPjV8lCqJJdQQ6vQlSF%2BKq0h5A%2FpTqRkOQiUzKxAPy8dBEgT%2FpGGJZCvH%2BEjpMlVkMgt3XTnVMTxn1OhD%2BNnTy7JeazPDFFREtD6k15sDe%2B16IbGnGs91Q%2B%2BvDF%2FxZs9plbzo%2FpaNb7V2PJO7f%2FY9c1JdVUrd4%2BHxqAYNfUptpWQwxem1vwY6pgGmncXePRxHw8EqcHCH2oqI4Ma4InNvfLegtTxIkYjQEV7pyMniy7DC0fPGmetvSwkJF1O%2FoVmslCAcjRKMtCIShH1QxgzG%2BKt%2BzRtv0WgFtiQCU19TXJ1GXh5t1shagqUJ%2BCFErPT7sJSS%2ByekcNQ6odc009JAkKmDf4TQKSZRyzJFrHAQkCfpcWaVkGMdW4eOybMU1BChe7QR2SMOebdbsJFvWLCg&X-Amz-Signature=d7ab2f602afe88b4872dde791186d6f610d4a0976784ece14f392daad303c852&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSORW5A6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGjDkHOy3V%2FCBrBtiuMVjCg9lCmFZjxvkTXIzP5ANIOUAiEA6s8WLqmV4Y%2B7O%2FWoJMXzvv%2F96vmVr%2F3pmjert3Eeda0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxmcp%2BzEZXSkyvqjircA3o5LZ4AOSQVEq918TqNZ58kRRRU8WNM3M5WwnDUdyzA5Fhc7wFReOgTLoMIhRkri072RmP4dLrSezqQRcc0g5%2FB%2F0d8RXY69lyLE8OBF7OVHbKpQrTzYX%2FGQf8vTp6OWNaYZ4vT7L5dowYU%2FFMxh3UOxAtWNuLitpAtu%2Fjl%2B5%2BCWqGHL3ESRulfX6KexIodWNhgGC4C5spaD1%2FwtRC9ML7AVOM1dfbzNadkmkKfEye0CZpP21qzwXdFAqDX7H1VQtv1iBziFDt9tV%2BSiCONi2jymnYQ142x53a8HdHF2es5cl0J72hpZXDrXftuyyr7QXgwISOyZIsAMteLVeW7ew6IwoPPbkxsjitHdW6bvELVuTAQIg1YEyyT5LoFYMWg8rTiItuNnYLcFmfJOos%2Bh8UhB114PulMp8DZHqF4l4thr%2B%2B%2FY4rN8Rwz29LzM096CuxKe3T%2FxQLYqoU1BVC%2FsxTz5TiiaJcnVIAdNyY8dtIfGumuD6vBitSCe3qecNM5W9Xn4jsXLIXz%2FnRSHQ3BN%2FEZt3UGeccpAuSIzG1Kpnq3OS4mJsil%2FxEpamPDAXzqyTwOTyRHdK76RH8k3CNNsKF%2B1VwbKVhDK8JQGPzEVtl%2Bc0Zxt4J2r8NMYj4tMJLptb8GOqUBtirxQNL8h6CLu7gmARJBY5X4iNmR0FHjrX%2BpyB2Gwbb4qNhhJ%2BuR6dv%2BdZCEBpggqKu9RgGfTm7VnHVVEuIrbvCIwK3nC2EmsoL%2FEaW9Xz4j0eYDya3JJTU1brI89CYeiLEaYi7meNCA58frMag6PXXO0dS32zZ8NP2lIz3bWIZy7zq3kKLesUS%2Fe0cgGWORuyIeH8TrKwE3vROnlEsnKhRzHAPx&X-Amz-Signature=87f98e8e3cba2ebbff90fa22c101018d9385d08c386433feb1ab005c8a593db7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUG6VRBV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIA3gZmna%2FxxEtb9yzgT3chmF0Iwo%2BCUYhbT2W3pqOua1AiEAkxYjwqLIHN%2FcR%2FlsDU2bJXRPnNT7cyLpSXmjBSD%2FCa4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxZo0HXD7jxJSbRaCrcA9JnXG1Kq1nzXO5fiEMNWirkulaGDZG%2Fkt19U30rbH9dYR4fCi8Xk9bpqCNd7NleXK6jlCO2dbhv1GpKpAn%2Fm2F%2FaJip1ho32e%2B2JrUOgWhZKoOoreedNgY%2Fr%2FwRcym%2FSqmiYMtmnJ%2BSAn9L9yr02T%2BfdOYOv5CmfJxme0geit97siE%2BmK3uKWkU6eaP1K8bGmR5KwQNotVrezWcVoFcPmxE7gXFkLdnuTisOTq%2BhWMJEDxd34RgndFgvABpaIL19NAl4%2FtMiD%2FNhGXaoN74u6vv7pZhoVI0pQ6ntRYdp6iNXHPrV%2BSgBP%2FN6JmMxavamBSuuSf5VP%2BgZNgsNt0kTfeCFfcvuYp8qVrQ4t8fr4lA6BM99TFxD1BgDiUNqtmcPDsEawED4boae74TNX8auJ6aC1QlY7ixSbvmd%2BLWz1nq9aAG%2BX6Ix0fMc6E4zUYsAGs53W0M%2Bob6BDvH126pArK6Kz5Lvfir%2FBa%2B9JhgLhvgh43d5Nv8LAHBuWjuNBYMiiOJAAV5eaYoOO5ETsDaOl0JKw%2FW9j4TafWVv9IfgLdIlm3tLGp7vvD%2FpxsgMsXzSWW0Wg2yB7qYenGn8IdLmXFVz36tbRHG1aKnpkXEBLsT%2BkVPJQB9WrGNaduDMPnotb8GOqUBUSqHPBfuNBwXLoHpaPrLTMWda7N1oLltyUt94jQNOzVHzt8DbTRXnHz6okNWAgaq5kchkhqn9NXlF%2BhiXetwtxzddt33XreJeKQ3kdJazSA1iQNOHKT4I0F8nb7MD0erFnUf2hREio3reXQ0nMo7cYpZYdXWIYEF3qeOWYtMUZRnHO83mUYMJROJJ3W%2Bs6%2FSLiCpPy3E%2Fvvl%2Bl9j9ft13wNeUfqN&X-Amz-Signature=812ccd965ec50835865614e463abfaf179d936c9e1469362d7b8cdc41b50073a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROFZUYWC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDHpXsronO8gPGnhI8HW8JQr%2BDWZVH6BKOO4mbh74Y4fAiApaV6AHzDiRItZDHxvkCoIEkRXXQsxHHvqdnkwNhJ68iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpX7iy5hGeKOHv2TzKtwD1ZDc1gt97xXba%2BNcODJwN7SE39O7cbXNIZT%2FbP6y7V9Vy%2F%2FkbmSDeLx%2FMpfeFb2XfnM%2BffOm0n9cE3te%2FqkRU71recovuMTkeaNRcLMQjeBvhp1wSe6uVqZHmG2lHVqWuJ3QuU1a7KDBuo%2BXWuCE3EjwRk%2BXD99Ku29PmgT4Ou1SS%2BqL00%2B4ftyXD9p3I3M3vU4y2xfA8qkzDy3osvHt5VUh1XjwZKdx1aXI9h0KPpMrdaG1lIA4hsZfRXkXXw6Ex3UaNvJpVc9GiRhaK6U2ZcXy%2FZp2WLAk%2Bk%2FgIpGQvONZQNkTz8XS3e3isdcESuBdBCeTmFt28OSpCSbOwbttB%2BIaRVZZj2Kt%2BjnICDfePbM38hevU03EFL8AX9mDAJDOr0ItXA3hLc%2FXhg7eHEYQcq5s6Nnqk84uED%2Fk21AVflmnKTCfyD6whYcS0c7m3h8GMBtrtYGT1VQvCC1wPjV8lCqJJdQQ6vQlSF%2BKq0h5A%2FpTqRkOQiUzKxAPy8dBEgT%2FpGGJZCvH%2BEjpMlVkMgt3XTnVMTxn1OhD%2BNnTy7JeazPDFFREtD6k15sDe%2B16IbGnGs91Q%2B%2BvDF%2FxZs9plbzo%2FpaNb7V2PJO7f%2FY9c1JdVUrd4%2BHxqAYNfUptpWQwxem1vwY6pgGmncXePRxHw8EqcHCH2oqI4Ma4InNvfLegtTxIkYjQEV7pyMniy7DC0fPGmetvSwkJF1O%2FoVmslCAcjRKMtCIShH1QxgzG%2BKt%2BzRtv0WgFtiQCU19TXJ1GXh5t1shagqUJ%2BCFErPT7sJSS%2ByekcNQ6odc009JAkKmDf4TQKSZRyzJFrHAQkCfpcWaVkGMdW4eOybMU1BChe7QR2SMOebdbsJFvWLCg&X-Amz-Signature=1fcb5230c2bf5a5bcdfdc3bc62db3319f8becf00b13cc1491e726a86b31464b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
