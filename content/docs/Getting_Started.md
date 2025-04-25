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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662D74XTT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUFtbu7f8%2Bpf6arA1xdHW1dcvAGkGNv1UEUtK9P%2F%2BviAiEAxomAxP8Cs%2FgnPwHWChTJqjQtAVh3A2VbBNOiiwaZ020q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDL77x%2FUD%2FzhOy6UzGircA0IiyL2FLQ%2F%2F6od6vK9m9toHiACjbgD2ykc%2FBxnWpIKBAGMKWTsEcBVwXuJjb9pTJmEFobxQWqX2hlTcZ8oDyLkREQRXEpouxMTsAXdn8Kon6HVjImkO4zJUjnFb83MoDgUX2HiRDXTYsH8UNExB1RnS19SAmromvi3fFOINCfUyKhWTqCS8LvNk8mEhn7NoxSMnWI4gUIEMSHVXExrKZ%2Fj%2FU%2BMh7cmaG9WOPsxNVuI57YdR1cxWWHoIhxUoMzgIDZIl023zhpWX3WJJRvrbUxa1nWp7bqOMH9xy%2BMPDrTcHRjey1vxf5vKScoMRwcIkLAdziOMv6jDM9RAnu8LSKouA%2BiLUKBbvnQvcjsKFZuJF4qAKV0oobttNgOPV36xdUbMt1iV8gMYiWxDksHw6f4bisT6WQpafoolBVaSoM7KYrW92Svt%2FcFLmqb%2FBno09v8THGaXidRsLZcYgBm7DbtkmznEQydw0bVzodrOUoi646mSycFsVla4YqC10VYbiYwWFul7zCE7rjPIS7NbOYXjxgJls0lCbgOu4eW6YrPiAmfSfGKAsmdF%2FZd%2FtxMizcyWgsVeWKb3uf50DtWeUJCGdZVOixKUziUyq2m7Sp4q84yU0oJR91DFs27tnMLvKrMAGOqUBLXDnquwNgqPo6%2Bjdk0dl%2B%2BGZWxu7dTRPzkaS14zZ7nrZEfY7YwUWV86hs1kpDW%2FaE9FnH0XHKAZCSO%2F0cejEZmFFqkoszJxgPEqW7Ao7jp4sh2PuqD%2B58sNS8HZlHNaS2wEmUdjyslaUtJiSebPVFU%2FxDT49js3QKQ8VbcY3xpe4O3dpbEJQzjeZmNVHK4DGRpb1ESfAJe1vOU95a%2FENNnl44Iwf&X-Amz-Signature=b043fe24d7c3747bbc833d3206cdffd02013dc26fe442e43d2b6077cb732ee10&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662D74XTT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUFtbu7f8%2Bpf6arA1xdHW1dcvAGkGNv1UEUtK9P%2F%2BviAiEAxomAxP8Cs%2FgnPwHWChTJqjQtAVh3A2VbBNOiiwaZ020q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDL77x%2FUD%2FzhOy6UzGircA0IiyL2FLQ%2F%2F6od6vK9m9toHiACjbgD2ykc%2FBxnWpIKBAGMKWTsEcBVwXuJjb9pTJmEFobxQWqX2hlTcZ8oDyLkREQRXEpouxMTsAXdn8Kon6HVjImkO4zJUjnFb83MoDgUX2HiRDXTYsH8UNExB1RnS19SAmromvi3fFOINCfUyKhWTqCS8LvNk8mEhn7NoxSMnWI4gUIEMSHVXExrKZ%2Fj%2FU%2BMh7cmaG9WOPsxNVuI57YdR1cxWWHoIhxUoMzgIDZIl023zhpWX3WJJRvrbUxa1nWp7bqOMH9xy%2BMPDrTcHRjey1vxf5vKScoMRwcIkLAdziOMv6jDM9RAnu8LSKouA%2BiLUKBbvnQvcjsKFZuJF4qAKV0oobttNgOPV36xdUbMt1iV8gMYiWxDksHw6f4bisT6WQpafoolBVaSoM7KYrW92Svt%2FcFLmqb%2FBno09v8THGaXidRsLZcYgBm7DbtkmznEQydw0bVzodrOUoi646mSycFsVla4YqC10VYbiYwWFul7zCE7rjPIS7NbOYXjxgJls0lCbgOu4eW6YrPiAmfSfGKAsmdF%2FZd%2FtxMizcyWgsVeWKb3uf50DtWeUJCGdZVOixKUziUyq2m7Sp4q84yU0oJR91DFs27tnMLvKrMAGOqUBLXDnquwNgqPo6%2Bjdk0dl%2B%2BGZWxu7dTRPzkaS14zZ7nrZEfY7YwUWV86hs1kpDW%2FaE9FnH0XHKAZCSO%2F0cejEZmFFqkoszJxgPEqW7Ao7jp4sh2PuqD%2B58sNS8HZlHNaS2wEmUdjyslaUtJiSebPVFU%2FxDT49js3QKQ8VbcY3xpe4O3dpbEJQzjeZmNVHK4DGRpb1ESfAJe1vOU95a%2FENNnl44Iwf&X-Amz-Signature=0d69f54ecf079544b18419ec6def7fb73d22594be190a51d567dcae1c1195d02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q67XZCM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfCiL2nFbXXZmOEzfgFR%2FC31KXHdijRqyI4yFyBoU1LAiEApNPoZVjfWpo67F2bkvgU6MNV%2Bk%2Brg9RCbRAKpZRMarcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMm9AZDkbM%2B%2BLHODQyrcAzwJ%2F1QqWWRNDkzZH1MTwKXgPLdf71em2IxlcOVpQ17Re%2BTVIEBHeEC5zdm4Ro4a7ZO9w11jQ8JrqAcvSDbzAdTNZ8Tar0LbrKoGYndxhJDZR7pHjraiJm5RP4CCFLtif8TEZOVdkZCVSYH5PgKSzIBDiQw%2BI43oNh4vMr3BuBrBSzEWetad2sIgaurCKG%2BABrmhd0OeGLxnx8jBH0%2FSy9CEqJPmrgu2cGQnsDL1E7lbXGV5JB3CDvXjCTfGYzw0trVhWnldLR1pJPWimDY56cYXnARFXrvs%2F%2FossfNtmYaAWdvpLZmK3wvGUatXbHsuP9uzlfkwsbB7Z3tOCIve7NRLQQ4aela5ZNAd5LzwVSW%2BMbJSUONR6B5WODLaK2KuxnKh6CWAe0xssRodiIqaLfOq0%2BHJL2ntjbIklOIrg5PfxoQUjAYDyQWk%2BMQW4Y0%2F6Sv8LR7kS%2FVWCP9Bfyn8CarhIxLzK3qjBZXf%2B9tKuxfjV%2BD4XjFFEoo8mNfT7LP0DsfCMhfwrZGxcpATRvhQFEgGCJdStxfy7OYsVy68a%2BZ5HgJwuM7qDVFENS0Y%2FiSEs5cYSwxXIdQrlGW2ynektSNESQH1iwIaIxh%2FX%2Bz3q9cBlQvF1Msb1WDDebJDMLjKrMAGOqUBO6tfbWc%2BjTcoq7xAQd8pOjRl%2BGrZoNmVfa2ZpG3nUUADvWYf8UJ%2Ba0xr5MEdQMk%2BijaybqSWxnQyE%2FTcHr7Xq9pqsfW%2ByLkDXXpq5lcLvIKS8tP4BFIYUGFMTMUm2BOu7FUlS7xQl3qk2jZQ19bQnZ4Wkz6FdZfrP2nscBFUDpxcRWKPvD9LHD0GCYxLhz3V6ATZjKA%2FyGeZBryGwBqv8b8m%2FmQQ&X-Amz-Signature=d0efbd9220a48f04c5255673e4137365040cfabefbbd4afde1aab5bf7626b721&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCJME6H%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDG805JvCCNpZpWDtcMEF5OjgwNRv4TiH2zU8%2FT%2B8QCAAiEArAe6ttzXDok3QCcjz6xxDTsOzWhY8O4uCaHY%2FpFnW3kq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCpMVQItEroxAog9cSrcA3KOwAbvQ%2FVCQH8DJvmnfiFUWZEMqm81Rr5TmWWQlHZ5W%2F549HIyvJphu8qzh6QaYMJM2A6N6u9FXoxAVRNS7QEGU2Lje0Nq1ATMhZ0HCgM8xbk9dA8JUZY3eeACK1zk7ED94S4aknwgoqWCzvDUaT53lekI17xzgZvEMPfhePMk%2FmE4hYpUvk4XSGiyg%2FydqEEthGf%2FiJzjO3rVJWuxl3Fc%2F0t1TJArz1UNeN1F9LT3fdbRG8cbsmw7amrl%2F92jeXEFjaMvTHAEDOjT64Wefv5pVS6w1pyHDwkCvl1Nb1PEkISlgS32i%2FGRDTJYfu3qN02hSGODMMUCpSHSTl11AZK%2FrNrMIiX%2FRO2fvOEw6LD5ONmabPsLJYU2cZhv4xwUdMaNFw2t711WK6nEb37XSMv8ltPpppMq0gW7jvQ8k7K10JZvWdT9ud%2BeW%2ByXZwbw9iIFJ95zoT5EwTCjSLfxkmqodZPqfyOlj2kephTYcJBIp8Ii28qrfY2n%2FP6cotmw8FqHnk0%2F7DtPonAfZwmQsXBlyzaX62fpqLy58jkdHrOA4k87b5mnAHHbEbj57h6YEKj3BmJehKo7XB77cSSBnKIx9yf8kDDUUuqTXjV%2FFTTIndSX0PHcLcoG0msiMNHKrMAGOqUBJmUcn26PBLmDgiMd2wk0TEhoOUpx%2BkmxLAkO3mEc5qA%2BoQvQxIzjmwm0AP6PAT8w4tKprUbfrOYUY7ANRGClbN1tXqwHgbkLZvrFLpVdJ%2F4KPAWu%2B7JfigpBg0UG2hWFUnZK4TTfsEvAiTXhaYIdGv5MrluK1BPzZmx7XvT0vOzzeWbaAAak8qd9Qxsu5A4ye2e7PBuyKoWsQ1BWZJl3oSjHBqtn&X-Amz-Signature=b484f2b76121b9a7c76d387325a4ae9aaf8bf006d435e2f1be8ff45a0309de5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662D74XTT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUFtbu7f8%2Bpf6arA1xdHW1dcvAGkGNv1UEUtK9P%2F%2BviAiEAxomAxP8Cs%2FgnPwHWChTJqjQtAVh3A2VbBNOiiwaZ020q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDL77x%2FUD%2FzhOy6UzGircA0IiyL2FLQ%2F%2F6od6vK9m9toHiACjbgD2ykc%2FBxnWpIKBAGMKWTsEcBVwXuJjb9pTJmEFobxQWqX2hlTcZ8oDyLkREQRXEpouxMTsAXdn8Kon6HVjImkO4zJUjnFb83MoDgUX2HiRDXTYsH8UNExB1RnS19SAmromvi3fFOINCfUyKhWTqCS8LvNk8mEhn7NoxSMnWI4gUIEMSHVXExrKZ%2Fj%2FU%2BMh7cmaG9WOPsxNVuI57YdR1cxWWHoIhxUoMzgIDZIl023zhpWX3WJJRvrbUxa1nWp7bqOMH9xy%2BMPDrTcHRjey1vxf5vKScoMRwcIkLAdziOMv6jDM9RAnu8LSKouA%2BiLUKBbvnQvcjsKFZuJF4qAKV0oobttNgOPV36xdUbMt1iV8gMYiWxDksHw6f4bisT6WQpafoolBVaSoM7KYrW92Svt%2FcFLmqb%2FBno09v8THGaXidRsLZcYgBm7DbtkmznEQydw0bVzodrOUoi646mSycFsVla4YqC10VYbiYwWFul7zCE7rjPIS7NbOYXjxgJls0lCbgOu4eW6YrPiAmfSfGKAsmdF%2FZd%2FtxMizcyWgsVeWKb3uf50DtWeUJCGdZVOixKUziUyq2m7Sp4q84yU0oJR91DFs27tnMLvKrMAGOqUBLXDnquwNgqPo6%2Bjdk0dl%2B%2BGZWxu7dTRPzkaS14zZ7nrZEfY7YwUWV86hs1kpDW%2FaE9FnH0XHKAZCSO%2F0cejEZmFFqkoszJxgPEqW7Ao7jp4sh2PuqD%2B58sNS8HZlHNaS2wEmUdjyslaUtJiSebPVFU%2FxDT49js3QKQ8VbcY3xpe4O3dpbEJQzjeZmNVHK4DGRpb1ESfAJe1vOU95a%2FENNnl44Iwf&X-Amz-Signature=12a6ea2a29e47aa9835c735168acf9d7d2ccfbf3b954f511f4db3389e1ec0783&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
