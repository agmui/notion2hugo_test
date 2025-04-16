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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ND2QEGI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEFpKviIlo%2B2bcFcnjCiAhrAZO4trE1%2FWYNz08W0p1FAiEA6aF3jDDm8JtaI1P1ftvKljJ7XMsspugio5%2FoGZlJTT8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDM3J48y3nlyLu7BqUCrcA%2BMx8h%2B%2Fnws6vNFBR4nzkn1aVHKRfBfWY1sA5tQp%2BZy6bQX1J2as%2BiszPs1TOgheiFjfliPNFSDDHnsjrAWd6xivvsAsoBmmGRbL1WBIumkoVhGy6naho%2FrpwDeeE7A3gGzV7bnpHcwfaJFLe1VMArPUovnDXdhCU53kIwmAoaWWPs82qJlrmtdr2%2FO2Jg6ovjkKMLjkHPVfHiZdZDP6yVetMj8x1xmcjgZeVR6rQa15yPDDAcUIUb2i7nX%2FOFx7MT4fgeepRwGJKuZQv%2BiEE5pwSxg6GO%2FuvVpClkvQzvWgpLTeLrz8ptgTnN%2B1QDzLwGpTTWqEoJaQMBeTE7ijkDd3UX32zRCk2TKZ6%2BT0SJiSBH9zYxe5QtEmgHNFdBDvmOwaxZ01kKP65d7fsT%2BMhJmJVwLc9Fnvi7vzaFrwUz1g8Xy9E581yfBxksxyCxGcEms%2FTq4ZqCahviL8roQUGFxmAhX%2B5zOlK%2ByLTLTyV3t4rIh9QSlnVw%2BWCCEAS0IsEZMg7NmhVEsSrXwOMqi8rfW9Evloh6KUpWS5waoO4RmnC84iFGOWRkUstuhIDT6SQCTrP2fj3JzRBu1p5XpIdUVj0LjEetPCxpjgUmn6Kpep9rYr03RLfJlWl%2F%2FhMMuK%2Fb8GOqUBLJxJchXDeH5WHUAtiTKhg4LQQDw8P48foMB09qbIMC3Y9HgLVPPBwXhzs%2FsPzMF0u4Mo0Aczzxau%2Bx%2BQTXAOavxvTuTDO4AgYLno6XnjBq2T9h%2BQ4zBHbsUNUl894SG9b8%2FZk8PQff9qJWABzx1pDKRFkMJ1VICyBAN1CZQ4ozPeoPAXwuuGyFD51j8vjJdo8niaOi30LPR%2BiNqBkRkvuTHr1Iz4&X-Amz-Signature=1844683677c7e4b3163634f8612f9fcd84e49915316a1fe6325436dd79e2af7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ND2QEGI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEFpKviIlo%2B2bcFcnjCiAhrAZO4trE1%2FWYNz08W0p1FAiEA6aF3jDDm8JtaI1P1ftvKljJ7XMsspugio5%2FoGZlJTT8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDM3J48y3nlyLu7BqUCrcA%2BMx8h%2B%2Fnws6vNFBR4nzkn1aVHKRfBfWY1sA5tQp%2BZy6bQX1J2as%2BiszPs1TOgheiFjfliPNFSDDHnsjrAWd6xivvsAsoBmmGRbL1WBIumkoVhGy6naho%2FrpwDeeE7A3gGzV7bnpHcwfaJFLe1VMArPUovnDXdhCU53kIwmAoaWWPs82qJlrmtdr2%2FO2Jg6ovjkKMLjkHPVfHiZdZDP6yVetMj8x1xmcjgZeVR6rQa15yPDDAcUIUb2i7nX%2FOFx7MT4fgeepRwGJKuZQv%2BiEE5pwSxg6GO%2FuvVpClkvQzvWgpLTeLrz8ptgTnN%2B1QDzLwGpTTWqEoJaQMBeTE7ijkDd3UX32zRCk2TKZ6%2BT0SJiSBH9zYxe5QtEmgHNFdBDvmOwaxZ01kKP65d7fsT%2BMhJmJVwLc9Fnvi7vzaFrwUz1g8Xy9E581yfBxksxyCxGcEms%2FTq4ZqCahviL8roQUGFxmAhX%2B5zOlK%2ByLTLTyV3t4rIh9QSlnVw%2BWCCEAS0IsEZMg7NmhVEsSrXwOMqi8rfW9Evloh6KUpWS5waoO4RmnC84iFGOWRkUstuhIDT6SQCTrP2fj3JzRBu1p5XpIdUVj0LjEetPCxpjgUmn6Kpep9rYr03RLfJlWl%2F%2FhMMuK%2Fb8GOqUBLJxJchXDeH5WHUAtiTKhg4LQQDw8P48foMB09qbIMC3Y9HgLVPPBwXhzs%2FsPzMF0u4Mo0Aczzxau%2Bx%2BQTXAOavxvTuTDO4AgYLno6XnjBq2T9h%2BQ4zBHbsUNUl894SG9b8%2FZk8PQff9qJWABzx1pDKRFkMJ1VICyBAN1CZQ4ozPeoPAXwuuGyFD51j8vjJdo8niaOi30LPR%2BiNqBkRkvuTHr1Iz4&X-Amz-Signature=a6bd459ba3087a57a0c62afd8a820acad4df68de95fbfdff441dfcfb93a6e767&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFWLAWM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQhPYqbF0sgpyvwfnSXEQi0gYd435XyBzz4yZR0IqOtAiAOaQ9EW5TPlx%2Bdzz0%2BfH79fza3cY37zR14TtZ05Xv7Iyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMarhXMa2iN3HYKB5MKtwD%2Bb3oCEOsMmJUmpvZvZLODk6KWnVtE%2BCpjKf8lHqhzJWXnLveeCaDyp2PMzjEUErR5xifcsPzsMJ2exbeCMODuA3925%2BUAtZVACjKT2zyNN0Akw0SVUCDEXrTDrGWfSOQm6jVfsSSjFYOSNjIvEbiLRbc7%2BUY2Th%2B%2B8H2eYhab9oHwY9cI4UotuEBcWGFuRUbpC8xt7wVl2yNBNaMeaUWXJ8UV83lHtIpgxMDuCXUhDhR1uUa43SGfv%2B0zeZlMNdBwDwMYvttKNofwg9hT7GdPNId1h%2F4GXI45vM94EFaYLafHfhulTTfRULWOYKc6EsYw2i65QACI5%2Fkn2Nq9kARzs3b3ut440pKCOosb5Jei5pzs4h%2FZw2lsrwDe9w8suWprGTMPCyhCrdyy%2BdGUhMjYzGWxnhUD5uYgYLclnXjvpT82HSxAzPqoV2jMS1TnFjeeMdsv2vvvAoyX96f4gyxscFXsbImTM206ViQP9537f7GGpgzRZZ48DyqfKaBRqzoxGa5a5vuBe3SNDqd9V%2Feg6s4%2FSTlLvDcsUxqYhQW86oV2Q6bIK46W4HPoF3W0%2FcN%2Bc60SalTLOb%2FNu9iuXSKm7jx8xUHNjOtcxNpD4NAu3rKlkHVvzFL01aQKJMw5Yr9vwY6pgHqYyhFQWcz1TgpX%2FmsMwGP4EEJn3X9NdqVmkdKvjlygzPmR%2BO4fMaWjJHYxgnEPQKLMNZx5%2FaS%2FRBksk3qH5k4g1S5ApDkiT9zvZLRBGHcLXMQCMQUlsCL6y%2BQ7VdHacq%2BgGtEPldIRJnP%2Ff%2BIYpEO14qMJHu3%2FsUgyrVNr62KsB8DJudxPoo%2FLmOqeDFXfVKx%2BWPwxDkGJ6I16%2FY36%2FOohX5nBDWW&X-Amz-Signature=cefafa2e709be7afb920bc86e7fcb0945d28117b77ed6b4989080b03f7d48169&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLNZFDL5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp0Lr2VP6%2FgzzOEfqidske%2BlSIMXPk4AzBNkaUWxXN6AiAwWKv3onb2LAHqCRcV1NshX30UWr17pijZ0%2FE3T5UIzir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM7e35p3aV3BNnrjutKtwD6tvcIil1k3uzFJ6x%2B0U3OaEvAo7L5bZTqZdZ884seTDqnFAe9AonO7FepZ3ZcxFPqeh0M5DCo%2FuiakbyQFKW1igSpSViUgO5MaU166lS2getChDpauMNj9C2D%2FbOO5xBvgXv9MlKdZvI9qareFlO%2BYwamUd0vIuPljofkQQKDuZAL6htFypvo1KjTsOcCBM%2BGUGGWvG0Sv65PwN%2B5hTglgQtnlPY0c5t%2FU6N%2BnmaEVNdOsR4fAtXesJzdDFiXERiNv7vFojSRE%2BCkm9TS515t%2Fq%2F%2Fp%2FRtDw07GcIe%2BVfRtbqSHjiN6n%2FhjPRnIw3KegXrSyTt7Sa5StNFZkHRMopFmxKsMehIT%2BkISJWPtcBTIH3tFLOpJFfWkOVE%2FHxwqwxWIAFTgu7lg6ty6m9ujctYakZmrGtWMX6HILlwSBJgEte5ekQjAipwmqxyyHWm1zS4ieUhMMTdfsFQgxwPMx%2B37OUaIOk9%2BD4g8V1uPRqUzuAvD%2B4PlI3o2P09xLDr4LW2ioIlzBt5wS9gJMuajV%2FR0bF%2Ba8CCfZjPjXVv3ky6mHKSS6ubhixlt0Zby6AVNNVgHl03%2F8dV271odxnGrl1wq0GfwxWTZERJcEKydlVNEo%2FAWpDPkC4VFpjMeMw6Yv9vwY6pgFdEUiD%2BOqq153xBtVifg782LaStoIuw%2BBawcOnVkTuF%2BqiwOBbV1LwVymcjzAOELsVsHBWFCkEj3zyYL62wLKeSTTLw7J7WwlOOCS5mXDZxYCxsQKSvJh2vqmcVHlo6chH9GQJxtWAenOXwox1rPGqSyz%2FlO46VAwBNLnmWu3C6I6WBavguG%2BHLoGFMMQihKwomdhziMl%2Fsa7mhk9LvPnyBFH5sJBb&X-Amz-Signature=2e86ad92852805cd4d38f256b0808ba9a3f5d59d04276bd22dda75eda043dcbc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ND2QEGI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEFpKviIlo%2B2bcFcnjCiAhrAZO4trE1%2FWYNz08W0p1FAiEA6aF3jDDm8JtaI1P1ftvKljJ7XMsspugio5%2FoGZlJTT8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDM3J48y3nlyLu7BqUCrcA%2BMx8h%2B%2Fnws6vNFBR4nzkn1aVHKRfBfWY1sA5tQp%2BZy6bQX1J2as%2BiszPs1TOgheiFjfliPNFSDDHnsjrAWd6xivvsAsoBmmGRbL1WBIumkoVhGy6naho%2FrpwDeeE7A3gGzV7bnpHcwfaJFLe1VMArPUovnDXdhCU53kIwmAoaWWPs82qJlrmtdr2%2FO2Jg6ovjkKMLjkHPVfHiZdZDP6yVetMj8x1xmcjgZeVR6rQa15yPDDAcUIUb2i7nX%2FOFx7MT4fgeepRwGJKuZQv%2BiEE5pwSxg6GO%2FuvVpClkvQzvWgpLTeLrz8ptgTnN%2B1QDzLwGpTTWqEoJaQMBeTE7ijkDd3UX32zRCk2TKZ6%2BT0SJiSBH9zYxe5QtEmgHNFdBDvmOwaxZ01kKP65d7fsT%2BMhJmJVwLc9Fnvi7vzaFrwUz1g8Xy9E581yfBxksxyCxGcEms%2FTq4ZqCahviL8roQUGFxmAhX%2B5zOlK%2ByLTLTyV3t4rIh9QSlnVw%2BWCCEAS0IsEZMg7NmhVEsSrXwOMqi8rfW9Evloh6KUpWS5waoO4RmnC84iFGOWRkUstuhIDT6SQCTrP2fj3JzRBu1p5XpIdUVj0LjEetPCxpjgUmn6Kpep9rYr03RLfJlWl%2F%2FhMMuK%2Fb8GOqUBLJxJchXDeH5WHUAtiTKhg4LQQDw8P48foMB09qbIMC3Y9HgLVPPBwXhzs%2FsPzMF0u4Mo0Aczzxau%2Bx%2BQTXAOavxvTuTDO4AgYLno6XnjBq2T9h%2BQ4zBHbsUNUl894SG9b8%2FZk8PQff9qJWABzx1pDKRFkMJ1VICyBAN1CZQ4ozPeoPAXwuuGyFD51j8vjJdo8niaOi30LPR%2BiNqBkRkvuTHr1Iz4&X-Amz-Signature=41989668d38e9b7f1c9cfed2a92b77304d89bcdd743325d8817e6f99950eeb02&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
