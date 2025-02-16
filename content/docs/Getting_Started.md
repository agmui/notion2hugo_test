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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVFKUGI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDdy2uei7br72lUaESf30%2FlhAttzrTk5kYg%2Fhc92Eyc8QIgUjpdrcCsTpAU2QtnVSkquRXU0jZQpPcn5uHNcoCQtcIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKulzREwBDZT95AQnSrcA%2BAATBN9wwacFzZ5HMr3ohCgLIv2zLYTmnq%2BNA%2FuTZ7vbYQD57UohSGcL68NoNp5D%2FUt%2Fjl8c3WYIX%2BJKXNnGajNGSYogSyeMTW8HX4NJ34tFR%2FD8xlaLNZ6Rf6K6Kx3qvU6XPwu0sUxZzZAXi9VMby6FGdHtkTVfqh1sZ6%2BhJryBSJj8J9Z6ml07dOaIubVNuvn%2Fy9LDqla5BwtXePT7jidohHnM2844z7L%2FuaVPtCPdPkfi4Z54LoA0rWhAPZreaI3%2BNshq4shTUa2LUzRp5RmjZgSQBbkU4qKLxEXTMRJWnwijp6pIlWWgV4BdY0JPKm84jmhiZDAiDFUzOUf2djWElmWOllN55XlijNs4mqBHvkxc%2B%2F3kP3i4w9yXKOCowJoI4BBbaPsyV%2BuJsBH9%2Fjla4dfrt%2BIjPZZ0BnnzgUcAvZxwGJ9HOBygE3P%2FyNuJGdXTGyQtYC2pV7qTFhHJw2sSx5KwYmN8DqttySSXX3Z%2FM%2FAKI5giZvImFuGUph14VVe2gPTpS4j7KmenKSyfo4lAGWJgNChQfjO0U2JAnqQiFD00L7XNIfJ%2F1VLjS6%2FSyt%2FQpc0rVeaaGWHEuAG3BuRsBt5wGoEqqczzenIBmk1rfovxqYmhzreMLJaMMXIyb0GOqUBv47qkQXXrmbnOI1ImQ26jSQdPJfHvpj2AfY6bDjuFMSN9dxefwUaAJ7Mvt4ZUM%2Bs7Zslhbiz3Oji74a9WPPHKDKfX5umwUKjbfMPcqbwZ7Zj4iFC1b4nyhDHMmDIcZCDQsaVjoJzIDB3Kl4zrZeE4uhj6nFwv3nMdBbAoFlgFXlSivYMyx2RqVtRTxjHhZVfJsOA%2Bmkjf%2FHavpnM%2FJufiynVXgwE&X-Amz-Signature=41c446c6e696709c3f3dcc96b302f5429d859c066651f25acf77d3f29c722180&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVFKUGI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDdy2uei7br72lUaESf30%2FlhAttzrTk5kYg%2Fhc92Eyc8QIgUjpdrcCsTpAU2QtnVSkquRXU0jZQpPcn5uHNcoCQtcIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKulzREwBDZT95AQnSrcA%2BAATBN9wwacFzZ5HMr3ohCgLIv2zLYTmnq%2BNA%2FuTZ7vbYQD57UohSGcL68NoNp5D%2FUt%2Fjl8c3WYIX%2BJKXNnGajNGSYogSyeMTW8HX4NJ34tFR%2FD8xlaLNZ6Rf6K6Kx3qvU6XPwu0sUxZzZAXi9VMby6FGdHtkTVfqh1sZ6%2BhJryBSJj8J9Z6ml07dOaIubVNuvn%2Fy9LDqla5BwtXePT7jidohHnM2844z7L%2FuaVPtCPdPkfi4Z54LoA0rWhAPZreaI3%2BNshq4shTUa2LUzRp5RmjZgSQBbkU4qKLxEXTMRJWnwijp6pIlWWgV4BdY0JPKm84jmhiZDAiDFUzOUf2djWElmWOllN55XlijNs4mqBHvkxc%2B%2F3kP3i4w9yXKOCowJoI4BBbaPsyV%2BuJsBH9%2Fjla4dfrt%2BIjPZZ0BnnzgUcAvZxwGJ9HOBygE3P%2FyNuJGdXTGyQtYC2pV7qTFhHJw2sSx5KwYmN8DqttySSXX3Z%2FM%2FAKI5giZvImFuGUph14VVe2gPTpS4j7KmenKSyfo4lAGWJgNChQfjO0U2JAnqQiFD00L7XNIfJ%2F1VLjS6%2FSyt%2FQpc0rVeaaGWHEuAG3BuRsBt5wGoEqqczzenIBmk1rfovxqYmhzreMLJaMMXIyb0GOqUBv47qkQXXrmbnOI1ImQ26jSQdPJfHvpj2AfY6bDjuFMSN9dxefwUaAJ7Mvt4ZUM%2Bs7Zslhbiz3Oji74a9WPPHKDKfX5umwUKjbfMPcqbwZ7Zj4iFC1b4nyhDHMmDIcZCDQsaVjoJzIDB3Kl4zrZeE4uhj6nFwv3nMdBbAoFlgFXlSivYMyx2RqVtRTxjHhZVfJsOA%2Bmkjf%2FHavpnM%2FJufiynVXgwE&X-Amz-Signature=1d5c26545c110f15afbba1b3b9d8dd0f25fd59b41b0f58c4e3daee29309c30e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWZSFLK%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCDBVJkFMfXRWKzSKddjRbyTUG8ge51vUHuscQ9LD1PqAIgAJBqbUY4HiJrQl5dykhRY9waKY6RdjVXcJLAr95Afnkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCs1UTP%2F%2B8RAbMhB5yrcA58gbXPu4EEAZE2gHCt6EIiDcnXfepXDPAp4n2iUoj95mrkDOYTdn48YzQalSFKx%2BRjzSUD89WZQlmssxj%2FlOciDJ4n77KySAwLOEeiV1D13XHJVNkOwSu6%2F2fbCFzwRjv7YHGAH678sUtGlZEp5PT9a3VifDU%2FRWUtfTBZVIc839ugDxY5SfY2mdHOeQEgyh%2FXvxS%2F%2Fglckkbg7wF4fGqClC0z8URIfVyd2z%2Ftvv%2B6QeffQrLxRaGydalzSjUHujpWzdfh5ynfEyfVFukUeklgKfyxpwQUfqFba1q4toffB3sBxAFRsXjlEzCQcQ24eGkpTtembCwhsNTEG7TSCHsB721uRYheUZPAIoApy0fpQE9p4%2BouCaqcxl8iYGwFYxTzob7Ho1fzOhBxP5FhYhdxOGUVCOfswnMZkw6UhZeBG1vOf10PJTGjxCbTi%2FqSNynpBpZ6ly849JQq9CnBvc0Z3Yfw1PsL2WL90MR3XUWzFur%2FPQY0fBxGbIE4Z5ly4Tn7GCljUGdHCpb72xJohgslgj8J6LxZ4XLPQL7W5h71oExT2uxXTiPy1b%2B2d4N9dmZnRxBGPj7jWA7jHEB%2BgtqKjZEtfU%2B3%2B9VWib970DDPTylRlmniUz%2BCZRNEpMNjIyb0GOqUBpnhBhCldvSYJD1jkbK9zD7zpT8CqO8VHLN%2Bw%2FVjU37m255j0nVd2N7zYZQCoqJqIJ1asweyxNwjdm%2FexLad5oC4bWRll2aUxcOyvEJinOKS%2FTlCrLYy3HztEklJLqlN0wyMurh0xBW4OnXCJ6am6gF%2BNgy8IYsPhUqOsdHEzR0Lz5OPuBYuQHPQt54FD1L2P7AkH8jZIsCtDF8t3agNeJIUSp1l5&X-Amz-Signature=ae6892871c088cb66e3e03c25378974053a239fb7fb41f07a3d5cfbd97ce58bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDBGWN4K%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCDndvrrQPyl7T7fINPvJe3vJi6wd6OYDTgOgQzkWq28QIhAPnst1FDq6%2By1ZS8mRKbqVP4pruY9RmTdAh4IVRML%2BrGKv8DCGgQABoMNjM3NDIzMTgzODA1IgyQi0O8pPkCEILiynIq3AOfOgLCTz%2FgryjAsDpr25QQG%2FB%2FVrBC9HGGio00C1x3TyJxt9Aj6S1w5HW%2Fs942eMkQVm1Itin1oAHbmYj20VNF6uv4lARVCmvpG4alRpg%2F8Uaa717vnrm0ymEkngFEFU6S7XT6YO4pX2YeQ8rlcDIGSvJOCU1t9Xk6G3%2F%2BNx5F0qc0dzEgSL7CD6I46M8P2kW8Qj9%2FpXqeJ%2BupS11BZIlE6KWZo5Pb31jz2qbEIocrLO%2F6YLSBgytiunSYI80wQQHM62VrUDdG%2FI6G0k%2Blf2o7lxyY7PcP7ZrwH3xoomzNpV6BhAr03Z85InhaSxAxBjc8BRSe9RptkyN%2FBzQtbMtAATyw2z%2FyO8KwGTTMMAOs1PQw9H8dzsEWodcsrx%2FoQqmJBy4zrcsrmC4qJMy%2BgSfGkkamZxJQrU6IMb%2BCSmJn6m2GuXQTCopanpYAcyYayq25BPhnICtwf98YqkGTc55p6SJ3BuZxveSTaR6qhLEQ%2Fknjffvi5N%2BLksAgyEBeXxyQuoyJaE4CX2vhaKXMi3HKFpBphtgjt05Xa7oknELcTugPbPOOuap0zPtf55%2BbdkLNunSgVpbm4g6GNYNn%2B7%2BUVd0eqs4eJrkKm%2FYQcad7sOY%2FOi0R4aXUaKt58TDF2sm9BjqkAe%2Bf5yJWBugnivCZypWQgAJGo%2BcGV95JPK%2BWkuBPP65ypASeJppleD1h1kY%2FyJ6GFPeFv6c0xBLHGoZqSrACJFw%2FUMGqkPMG%2FpIXblzVNd1RYhqrkvtA%2F5vHfK%2FQWiJ4IBSxRjgLwRwNZQgfrjn7Anbz7IIeROLBCQ6egGkjHFiibP3CTseB22ezxonhham7lpj2WCPYcJsnT8o3TYZVcRrYgEeG&X-Amz-Signature=78f6ab7eb5fd6e6fefbc3d6f4694fc177ca2edf14cc0d5c1f0755e255de2de31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVFKUGI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDdy2uei7br72lUaESf30%2FlhAttzrTk5kYg%2Fhc92Eyc8QIgUjpdrcCsTpAU2QtnVSkquRXU0jZQpPcn5uHNcoCQtcIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKulzREwBDZT95AQnSrcA%2BAATBN9wwacFzZ5HMr3ohCgLIv2zLYTmnq%2BNA%2FuTZ7vbYQD57UohSGcL68NoNp5D%2FUt%2Fjl8c3WYIX%2BJKXNnGajNGSYogSyeMTW8HX4NJ34tFR%2FD8xlaLNZ6Rf6K6Kx3qvU6XPwu0sUxZzZAXi9VMby6FGdHtkTVfqh1sZ6%2BhJryBSJj8J9Z6ml07dOaIubVNuvn%2Fy9LDqla5BwtXePT7jidohHnM2844z7L%2FuaVPtCPdPkfi4Z54LoA0rWhAPZreaI3%2BNshq4shTUa2LUzRp5RmjZgSQBbkU4qKLxEXTMRJWnwijp6pIlWWgV4BdY0JPKm84jmhiZDAiDFUzOUf2djWElmWOllN55XlijNs4mqBHvkxc%2B%2F3kP3i4w9yXKOCowJoI4BBbaPsyV%2BuJsBH9%2Fjla4dfrt%2BIjPZZ0BnnzgUcAvZxwGJ9HOBygE3P%2FyNuJGdXTGyQtYC2pV7qTFhHJw2sSx5KwYmN8DqttySSXX3Z%2FM%2FAKI5giZvImFuGUph14VVe2gPTpS4j7KmenKSyfo4lAGWJgNChQfjO0U2JAnqQiFD00L7XNIfJ%2F1VLjS6%2FSyt%2FQpc0rVeaaGWHEuAG3BuRsBt5wGoEqqczzenIBmk1rfovxqYmhzreMLJaMMXIyb0GOqUBv47qkQXXrmbnOI1ImQ26jSQdPJfHvpj2AfY6bDjuFMSN9dxefwUaAJ7Mvt4ZUM%2Bs7Zslhbiz3Oji74a9WPPHKDKfX5umwUKjbfMPcqbwZ7Zj4iFC1b4nyhDHMmDIcZCDQsaVjoJzIDB3Kl4zrZeE4uhj6nFwv3nMdBbAoFlgFXlSivYMyx2RqVtRTxjHhZVfJsOA%2Bmkjf%2FHavpnM%2FJufiynVXgwE&X-Amz-Signature=560c29e24f6f26f58e3ee0d58bb1b0c8198d15dc30717fc3d8735e6df69bf0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
