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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC525SXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdzXe5o310Wtw09J%2FOLk0hCGy5fi5lo%2FNQuNhspBHsRwIhAPECI0smOiNRrobNeyTo8a%2BED9%2FkirXQY6aUUUaGU7T4KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeIsJhTsOCCcF%2FdK0q3ANoWqhNZwN0BW1jO%2F5LF6ebZCWJVjkSnGYVpD0RrKjwYfNjZPxUjjB6NOREZiRHzbJQ1eQaH0pN2nGtutoZ7TtT8YsUpefURaIyc8mT4t9MEmJlZAvkJJbpLMsJyE%2B5nQczHOSg6YbJdM487vFw1GYg%2BR7fNMXFeAdrq3tO%2FoRprK3cYQ5ICkoOKFNkYKoXgoi1R8PyAvoapkoZi0XU0KY5I3yftqPQeGMZmJZNjIxPRKZsZyBkOvQN%2FRWMYJqdH1XM6ZXuEBhsSX7n9iS12tKuOeh5wJyLj5LvGvyKjJuGKp7YOfIHC5U40saKFExWk8qpNDI04yOMyvw9ZjDg%2FoX7W3fhlR87sOU30SRYfuYosbkxbqZJ4V3s%2BHGVrCDGRaKy7HSznTXquApE35eXx1Kn0BC%2Bs5ZXZFTxpYC5clmra77XhdB5Wo1yAAT9wKOi0j25FWZxkQdrlmj9MfD%2FnEVEUaOiS9PCAPQZuGp%2BCow7hM1RgJddmzz9cbSl8I0cxGhExiGBxr3qNpGCn7RZaJJsxMy1aRMoL1QrDVeFHgW%2B9l%2BVLD2pfHV0fR2gcyhRLyajbZ6CFz8UtncP%2Fjo7i4nB8wTWB2KwCYTDosZCzFmCLTv76V7VjTH0upmC0TCYjubBBjqkAT3JZFr2j%2F9yeGZxf9z7lP1lELWEPnJQ1iHzx6nuA9XutV4VhGypOeV4uw8KG2NWBNX82zVcA%2B7lFLOrnIje9m0Y9zO1Jf2V7qbu9PiftuP%2Fb6EWflYieCr278e1mDm4TDUmFXT%2F%2FRKF%2BeYT7uaTiQtoVVauDutGgslxqtrLwwAoZdRZ%2FYYFejEdKpgtfQulTGprktscQQO2suW%2FZQoQpqUEvach&X-Amz-Signature=23fa56f68de87dfa3a2f6f6ea0e1f51fcc85aff3c7d050629d82fed21cdaa800&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC525SXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdzXe5o310Wtw09J%2FOLk0hCGy5fi5lo%2FNQuNhspBHsRwIhAPECI0smOiNRrobNeyTo8a%2BED9%2FkirXQY6aUUUaGU7T4KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeIsJhTsOCCcF%2FdK0q3ANoWqhNZwN0BW1jO%2F5LF6ebZCWJVjkSnGYVpD0RrKjwYfNjZPxUjjB6NOREZiRHzbJQ1eQaH0pN2nGtutoZ7TtT8YsUpefURaIyc8mT4t9MEmJlZAvkJJbpLMsJyE%2B5nQczHOSg6YbJdM487vFw1GYg%2BR7fNMXFeAdrq3tO%2FoRprK3cYQ5ICkoOKFNkYKoXgoi1R8PyAvoapkoZi0XU0KY5I3yftqPQeGMZmJZNjIxPRKZsZyBkOvQN%2FRWMYJqdH1XM6ZXuEBhsSX7n9iS12tKuOeh5wJyLj5LvGvyKjJuGKp7YOfIHC5U40saKFExWk8qpNDI04yOMyvw9ZjDg%2FoX7W3fhlR87sOU30SRYfuYosbkxbqZJ4V3s%2BHGVrCDGRaKy7HSznTXquApE35eXx1Kn0BC%2Bs5ZXZFTxpYC5clmra77XhdB5Wo1yAAT9wKOi0j25FWZxkQdrlmj9MfD%2FnEVEUaOiS9PCAPQZuGp%2BCow7hM1RgJddmzz9cbSl8I0cxGhExiGBxr3qNpGCn7RZaJJsxMy1aRMoL1QrDVeFHgW%2B9l%2BVLD2pfHV0fR2gcyhRLyajbZ6CFz8UtncP%2Fjo7i4nB8wTWB2KwCYTDosZCzFmCLTv76V7VjTH0upmC0TCYjubBBjqkAT3JZFr2j%2F9yeGZxf9z7lP1lELWEPnJQ1iHzx6nuA9XutV4VhGypOeV4uw8KG2NWBNX82zVcA%2B7lFLOrnIje9m0Y9zO1Jf2V7qbu9PiftuP%2Fb6EWflYieCr278e1mDm4TDUmFXT%2F%2FRKF%2BeYT7uaTiQtoVVauDutGgslxqtrLwwAoZdRZ%2FYYFejEdKpgtfQulTGprktscQQO2suW%2FZQoQpqUEvach&X-Amz-Signature=47e399e8fec16d7b757f206689395572b71c86663c04971662daaeceb53ba14b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC525SXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdzXe5o310Wtw09J%2FOLk0hCGy5fi5lo%2FNQuNhspBHsRwIhAPECI0smOiNRrobNeyTo8a%2BED9%2FkirXQY6aUUUaGU7T4KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeIsJhTsOCCcF%2FdK0q3ANoWqhNZwN0BW1jO%2F5LF6ebZCWJVjkSnGYVpD0RrKjwYfNjZPxUjjB6NOREZiRHzbJQ1eQaH0pN2nGtutoZ7TtT8YsUpefURaIyc8mT4t9MEmJlZAvkJJbpLMsJyE%2B5nQczHOSg6YbJdM487vFw1GYg%2BR7fNMXFeAdrq3tO%2FoRprK3cYQ5ICkoOKFNkYKoXgoi1R8PyAvoapkoZi0XU0KY5I3yftqPQeGMZmJZNjIxPRKZsZyBkOvQN%2FRWMYJqdH1XM6ZXuEBhsSX7n9iS12tKuOeh5wJyLj5LvGvyKjJuGKp7YOfIHC5U40saKFExWk8qpNDI04yOMyvw9ZjDg%2FoX7W3fhlR87sOU30SRYfuYosbkxbqZJ4V3s%2BHGVrCDGRaKy7HSznTXquApE35eXx1Kn0BC%2Bs5ZXZFTxpYC5clmra77XhdB5Wo1yAAT9wKOi0j25FWZxkQdrlmj9MfD%2FnEVEUaOiS9PCAPQZuGp%2BCow7hM1RgJddmzz9cbSl8I0cxGhExiGBxr3qNpGCn7RZaJJsxMy1aRMoL1QrDVeFHgW%2B9l%2BVLD2pfHV0fR2gcyhRLyajbZ6CFz8UtncP%2Fjo7i4nB8wTWB2KwCYTDosZCzFmCLTv76V7VjTH0upmC0TCYjubBBjqkAT3JZFr2j%2F9yeGZxf9z7lP1lELWEPnJQ1iHzx6nuA9XutV4VhGypOeV4uw8KG2NWBNX82zVcA%2B7lFLOrnIje9m0Y9zO1Jf2V7qbu9PiftuP%2Fb6EWflYieCr278e1mDm4TDUmFXT%2F%2FRKF%2BeYT7uaTiQtoVVauDutGgslxqtrLwwAoZdRZ%2FYYFejEdKpgtfQulTGprktscQQO2suW%2FZQoQpqUEvach&X-Amz-Signature=74857ccfebad1c0437564f3f97e9a0d30c0015a00536a990fa38c168855e1f42&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEQWPS4%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWlr8auhNlgOtw0QNWB2EqYv4ISnLllIhoUXQB3V%2Bv5AiAalZ%2BA%2Fr%2FCGfAEmGntSt59qidwRDO2efoQF6pliDpS%2BSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZAvR7wl2f6BUqVPiKtwDW9xQGdoO3G4NRDAcdPVOEJbcSTMBtnEg4ZwZ7S3vWwu%2BYfOKREVMQhO09mAA0X1mjAfuPiROmUCK6vcyLmtntGLjjjK4n2MXiFBhWVUgydV43OVyoaCr5WxJO8eAPBDP2YKL7XbAfRgC05PrgEVklPcHDX68BE5hMMonYleRSg508YgEbA7%2Fr30HcslfnLv3ks2z89TqkNkwCeENZbyBATfOv0YTw6zxjpFYKd2iHWzT7yvq84hTTrlEFhqQ7nhxJ9el3yIUuJ71YCUISMb%2BVVjMFTZKSvw%2Fj4eDlbivTIe6W8QAMnVtmKNEpVrDpCUDXg%2FY9AMZBQk2PZyuDpylIxy6llGfiFMdEi2rYd9%2FgFrXvr74sTbdwKSQkVaEAOV5%2F30gWT1U%2FAM1HSZJc4qkw8E2kyx9aNsSssFXjU2hcopSIgGNqefjX6nJ2pLCzzW5JOg0oHV0VA6WPFCdEuPdYWCASXBPToApj97jV%2FnMFrNOz1LU5rof%2FQxR5H1oQSvaCQhIE9YJlSL3cv7prWPTvdFnXYk8qBuiB8NMlqCcGCO2QdeZkK1KHdpt%2FltQVX1WdaMB5g2CrjnhJunpPohF1mq3HciDY9t0OFhOqzmg%2Fj7p8BjUqsUe2zv98cMwiY7mwQY6pgH7G%2FeZX3TgqCePTv%2Bhih4rD0wq9tFowjjVbaJFotO4FGv%2FCHtQAB7QeyVOe8qEpPLYPzZMUGBpRQ6RIRBPjQhymzRLLdWqNW5SEk87Yt07rrcsSaTtLsyY%2BoflvV0d98EnJFNq0AsqXWFuxLAD%2FNpiOfRhM82Iuh2NkLwCrQpjUmsPfGzrGIWM%2FbdfbHReZeuhKRIFFcS%2FIRcFK5gt8bbPYaMatyDl&X-Amz-Signature=606e011b83c177b78aafdf29bf054f1202245ae4efe9a6d74fb30fcaf64dd4a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLSPO5G%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0gg0kIUtKj0WLyRA%2BjMVrvBFJI%2FUSVqhDC1939j1WQIhAJ3UreM4jQ0iIylABcnEHHQdETJbeNteBOEmEVDzQF5RKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx41Sib9r9UnwPfZ6Yq3ANGS4wRfPBtcQUzmWIdOL5t8Tx9k1UrfoCDaHiZ6HFfM1vAtxj9FIs6vPmHHOMELOFiV26tXdM1RjfRV6%2BMq3pipfiEMR13VXsbxGXchJUmcp3FAk1NQC7etONaQ6P%2FF4mhlGGGrYC3v845PUH6WbCpJkGs7413vYxcZMoOFDCEDV%2FOaIT126MPyIMubQkf649wKKCJmBR4FIS09xbJC3Ogi22vKKvkI6tfmgioDI04bepn1IzCOl1S8t7DFavE4tHq7aK0iemOEJrz0ivtsezR9OVzUtfNsjOf3k1MBM3l1VbxaNHBGUlUJGPalOFOy3NqeDtdspPaXyMjq2s%2FwtLGCgZJIk7ZpFcvTHsIOOS8pz5814vrSmeTXuqSHvf3BJeuwQSsmx%2B%2F0kMbP%2Br1M0FawtyQ8HV%2BQTyGBZ9a%2F0NNpvz1AWzSSlCPTyvT9ixx81bZib%2Bgm8OV06Oof41zPNByUpyhTlAoDZFNV61vbZYZXNkAzq4ZPBKJLZn%2B3307UNORQDlr2xjXkfO6BcgWlsDFLxB2RvcBmKdsVEjtn4Ab6063hmxz7NHPd3dgFKlFTi7DekoENVK27LGc6NKnmjEElagH4Cvwqt%2FVYu3pBS2fCtQn2pWYo4p%2BMh%2FBPjDujebBBjqkAZbm%2BIOu2t719jKBPtHkIS8A7fquPGsDk0qCSGNVD61ppqw%2Fp21fnCP9wA4rgIN54stGw2wIpGQ9yPnnS0ILZXoI4CCjIzCo2b4v3%2BTJPekKIHasXTP5CCKffHn4cLUzysRYE9b9ou9U16TKl%2BtBMKsjPbLOoLK%2BT5nK80QKbPU9rzyn9q6Nb9T5HMRO9SrTac1e4ihI71%2Fqcr9vW30KqJDa2MBx&X-Amz-Signature=ad029a5eb0002206797638d20cb876bd20cb2e31496fcce8c1807bde0e1e5f18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC525SXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdzXe5o310Wtw09J%2FOLk0hCGy5fi5lo%2FNQuNhspBHsRwIhAPECI0smOiNRrobNeyTo8a%2BED9%2FkirXQY6aUUUaGU7T4KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeIsJhTsOCCcF%2FdK0q3ANoWqhNZwN0BW1jO%2F5LF6ebZCWJVjkSnGYVpD0RrKjwYfNjZPxUjjB6NOREZiRHzbJQ1eQaH0pN2nGtutoZ7TtT8YsUpefURaIyc8mT4t9MEmJlZAvkJJbpLMsJyE%2B5nQczHOSg6YbJdM487vFw1GYg%2BR7fNMXFeAdrq3tO%2FoRprK3cYQ5ICkoOKFNkYKoXgoi1R8PyAvoapkoZi0XU0KY5I3yftqPQeGMZmJZNjIxPRKZsZyBkOvQN%2FRWMYJqdH1XM6ZXuEBhsSX7n9iS12tKuOeh5wJyLj5LvGvyKjJuGKp7YOfIHC5U40saKFExWk8qpNDI04yOMyvw9ZjDg%2FoX7W3fhlR87sOU30SRYfuYosbkxbqZJ4V3s%2BHGVrCDGRaKy7HSznTXquApE35eXx1Kn0BC%2Bs5ZXZFTxpYC5clmra77XhdB5Wo1yAAT9wKOi0j25FWZxkQdrlmj9MfD%2FnEVEUaOiS9PCAPQZuGp%2BCow7hM1RgJddmzz9cbSl8I0cxGhExiGBxr3qNpGCn7RZaJJsxMy1aRMoL1QrDVeFHgW%2B9l%2BVLD2pfHV0fR2gcyhRLyajbZ6CFz8UtncP%2Fjo7i4nB8wTWB2KwCYTDosZCzFmCLTv76V7VjTH0upmC0TCYjubBBjqkAT3JZFr2j%2F9yeGZxf9z7lP1lELWEPnJQ1iHzx6nuA9XutV4VhGypOeV4uw8KG2NWBNX82zVcA%2B7lFLOrnIje9m0Y9zO1Jf2V7qbu9PiftuP%2Fb6EWflYieCr278e1mDm4TDUmFXT%2F%2FRKF%2BeYT7uaTiQtoVVauDutGgslxqtrLwwAoZdRZ%2FYYFejEdKpgtfQulTGprktscQQO2suW%2FZQoQpqUEvach&X-Amz-Signature=1adf5a0e1d08a2e88e8218089c46c40b69d5dae37512ccb7f8ba97b98fd2c252&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
