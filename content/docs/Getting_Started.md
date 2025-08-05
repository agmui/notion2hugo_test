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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RPU6D2S%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIH2%2F%2BlxqIHttXOwe%2FKfXgMidjgdlI6iLf7%2BHDdrIXCeoAiEA5sl0%2FtPzwVcDF0Kxn5fkwH9T5hKRJ4XFmUYNCzRjKTgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDH2HEecAR8Kq66rUNircA5GqPvw2M8bxwsWnXsbwjmDo5Ij%2BOisGwWcdcNfLNnWEekKvAVlWvIjhl3dLcK0x8XPYg5RQd%2BlwYCVYpvLkJS6QedYrLLzqOFT%2BIzxxQEeaTsUuwYqw%2FDFrkLqWga0EGxsDxhr3O83wuXcw5oc70%2B4w5LXPyTCAOy%2FPvZssXyd1YQevF%2FPD6eTQn%2FrEXSsBnwJs4OIXi6bDzvyxt9siIZF7x9H8%2BEP2%2B12sueArlaWMPaCyjA%2FCJFz94W1slX4uamrYfFP5XqgxQaUOCjpq8MujSNnV%2BjftFb1KxvQK%2F79a25ht6jqXTFqAqsRIUUDgsmwGOS2RAQ1K%2FFcK5cr%2BfJXaz5AWL3SmOJwR86gUrism9ZQ5jMI5A6kSsfNN45Hmh%2BeaeUBM5o66IcjcievoPSsv3XjghSZho7lPSPFZ27XPD5obGaAe%2FqcBn114wpHfLZtkp4N9dUJlCdcDs%2BrugeD9QM9Cq91ep97VuhOtd5L3vJYrEcqCcbjElhniLRDE9aiI2iTiwu%2F%2FvXwlplN%2BVLngpi7zAg3ooZi8Vb9LRrYn0%2B6GTtaSduq7h0RfPZex4TROo1LBz7CrA2o6CxQXJqGRWeR%2FnTSnnMcEVRTObO8TWk6pH1xsxxFUqj%2BoMO68ycQGOqUBAeRyZykGP%2Bw464Wel5tctURJHS%2Bj81HpoY5iZzIUcdFTIPPdyf1tum7Q7PDejkNFxb%2FChWoNP5gBx39dBVeEGiP7L25wyH6HCI3fRtF9Udu%2F3jZzE5DvUOp3%2BDywmVZs3h%2BhgmfpYC8k7ssiFa2eNiQpqyPhrpiciEpWlmNHCPwLnriP4lkK2x%2BZ3rCyJlkc60qXrzzYfqCeiuB1MRhHkr0BGbfw&X-Amz-Signature=f59f4badf19881e72115af0bcbf6c7c23a38fe6d323aa2530a491c8c12c22b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RPU6D2S%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIH2%2F%2BlxqIHttXOwe%2FKfXgMidjgdlI6iLf7%2BHDdrIXCeoAiEA5sl0%2FtPzwVcDF0Kxn5fkwH9T5hKRJ4XFmUYNCzRjKTgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDH2HEecAR8Kq66rUNircA5GqPvw2M8bxwsWnXsbwjmDo5Ij%2BOisGwWcdcNfLNnWEekKvAVlWvIjhl3dLcK0x8XPYg5RQd%2BlwYCVYpvLkJS6QedYrLLzqOFT%2BIzxxQEeaTsUuwYqw%2FDFrkLqWga0EGxsDxhr3O83wuXcw5oc70%2B4w5LXPyTCAOy%2FPvZssXyd1YQevF%2FPD6eTQn%2FrEXSsBnwJs4OIXi6bDzvyxt9siIZF7x9H8%2BEP2%2B12sueArlaWMPaCyjA%2FCJFz94W1slX4uamrYfFP5XqgxQaUOCjpq8MujSNnV%2BjftFb1KxvQK%2F79a25ht6jqXTFqAqsRIUUDgsmwGOS2RAQ1K%2FFcK5cr%2BfJXaz5AWL3SmOJwR86gUrism9ZQ5jMI5A6kSsfNN45Hmh%2BeaeUBM5o66IcjcievoPSsv3XjghSZho7lPSPFZ27XPD5obGaAe%2FqcBn114wpHfLZtkp4N9dUJlCdcDs%2BrugeD9QM9Cq91ep97VuhOtd5L3vJYrEcqCcbjElhniLRDE9aiI2iTiwu%2F%2FvXwlplN%2BVLngpi7zAg3ooZi8Vb9LRrYn0%2B6GTtaSduq7h0RfPZex4TROo1LBz7CrA2o6CxQXJqGRWeR%2FnTSnnMcEVRTObO8TWk6pH1xsxxFUqj%2BoMO68ycQGOqUBAeRyZykGP%2Bw464Wel5tctURJHS%2Bj81HpoY5iZzIUcdFTIPPdyf1tum7Q7PDejkNFxb%2FChWoNP5gBx39dBVeEGiP7L25wyH6HCI3fRtF9Udu%2F3jZzE5DvUOp3%2BDywmVZs3h%2BhgmfpYC8k7ssiFa2eNiQpqyPhrpiciEpWlmNHCPwLnriP4lkK2x%2BZ3rCyJlkc60qXrzzYfqCeiuB1MRhHkr0BGbfw&X-Amz-Signature=cf75a0aa0ca2ebaeb2344ed662eb2777cb1b4456c3a02afc4296a9192a7c1785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RPU6D2S%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIH2%2F%2BlxqIHttXOwe%2FKfXgMidjgdlI6iLf7%2BHDdrIXCeoAiEA5sl0%2FtPzwVcDF0Kxn5fkwH9T5hKRJ4XFmUYNCzRjKTgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDH2HEecAR8Kq66rUNircA5GqPvw2M8bxwsWnXsbwjmDo5Ij%2BOisGwWcdcNfLNnWEekKvAVlWvIjhl3dLcK0x8XPYg5RQd%2BlwYCVYpvLkJS6QedYrLLzqOFT%2BIzxxQEeaTsUuwYqw%2FDFrkLqWga0EGxsDxhr3O83wuXcw5oc70%2B4w5LXPyTCAOy%2FPvZssXyd1YQevF%2FPD6eTQn%2FrEXSsBnwJs4OIXi6bDzvyxt9siIZF7x9H8%2BEP2%2B12sueArlaWMPaCyjA%2FCJFz94W1slX4uamrYfFP5XqgxQaUOCjpq8MujSNnV%2BjftFb1KxvQK%2F79a25ht6jqXTFqAqsRIUUDgsmwGOS2RAQ1K%2FFcK5cr%2BfJXaz5AWL3SmOJwR86gUrism9ZQ5jMI5A6kSsfNN45Hmh%2BeaeUBM5o66IcjcievoPSsv3XjghSZho7lPSPFZ27XPD5obGaAe%2FqcBn114wpHfLZtkp4N9dUJlCdcDs%2BrugeD9QM9Cq91ep97VuhOtd5L3vJYrEcqCcbjElhniLRDE9aiI2iTiwu%2F%2FvXwlplN%2BVLngpi7zAg3ooZi8Vb9LRrYn0%2B6GTtaSduq7h0RfPZex4TROo1LBz7CrA2o6CxQXJqGRWeR%2FnTSnnMcEVRTObO8TWk6pH1xsxxFUqj%2BoMO68ycQGOqUBAeRyZykGP%2Bw464Wel5tctURJHS%2Bj81HpoY5iZzIUcdFTIPPdyf1tum7Q7PDejkNFxb%2FChWoNP5gBx39dBVeEGiP7L25wyH6HCI3fRtF9Udu%2F3jZzE5DvUOp3%2BDywmVZs3h%2BhgmfpYC8k7ssiFa2eNiQpqyPhrpiciEpWlmNHCPwLnriP4lkK2x%2BZ3rCyJlkc60qXrzzYfqCeiuB1MRhHkr0BGbfw&X-Amz-Signature=ceb2923154e6d25225f45473e3332ccb285e0144e80dce37bf672d02276252ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ2WXUUK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDheqnc64GxGGBrb7qZqhTypgxtWLS6I3BS%2FyzduDXGTwIgF3TCPt%2FJ6VW5G2jtUT1lO6eCA6oU00hDLmdQjV595NYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFdFgVw9I0%2BSzfKAZCrcA7Xr7Bkq1i0cqWivPpBmY4mapRkgWcud41C3xbZ0RTDrhZmvKz9kLI3AXWYrq%2BAcGHB5j%2FQbmRBkWg9ji%2BuVKCnBB0VOphLrpKiFhH%2Fxlve08ARHNDLW6hWB3h3Qf3TdgsuMjxZvtSkrxoL9A7jaIAFVN0hlJrEAfhc9Gbg1%2FgRFsHveg9T8HrGZwdyMX1Ls6xSVqc7YHlDOIIaWiiMyyIyRKG%2BFGQGtWRUMuk4KrWn1%2BdtSNPLJc8AxPjHqSC6xoNEzR5GttR5c0Nh1Khk%2BrCzSREmMvU4FFVAYi4XVNMC3YfRc1rhOxkg%2Bcokzh4zIBpmrgaTJ6wpbeMF9s%2BHbi7ZpjtsYPqa67CLtmrWfTZAc9cf1jOOqAtjOVKJXHhREVpr5CZugT9RlbqAYCx8anh7fjlcU1s%2B3UCrfbvkeymK2KcmJf9qPUzYhglS%2BlwngIi%2BzdJ5SNn6XuK%2FKiPMJPnOMD9aIfTqEh3LHZxKeOj%2BcjxAKfAAyI2Z6e1l8fGK9y%2FARktraKKtzqUipDcPdoArySaYbF0pSY93faQrVXFqfnUD%2BS%2FMR45SGQVvl7gtMuXH3auVGPdTdkKt8qiVrb3e5oJmQWX2i5dtD16Z%2BV5mQq0%2BSQFhluCH8F6zgMN28ycQGOqUB0l4odJKAtxILvXpCZidaZ4WQpx8vYbU0pblYabcGi7uJ9Y7sFElA4CyrCqBfXDs7q%2FfdzoVB3%2FiekQkEQqWSwLqSQnlDdJI5SxHgshL%2FEHCfRGdq9SPaS%2FLZMM5ZhgKD8RBx0Izzj6BiSxZNpBV9iCfXjzgl5C7Hfh4Y0UAjY4l7%2BmR%2F7fcLnw9BRmts7vMejOppdZGC%2FeGLAHhuGnyPaThhZ%2FSx&X-Amz-Signature=bf5802c32a87da79501443543f215af9b5f65e913bd3bb9d4b2a8215bcd7b56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHCQWQUT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGnSMfwTYyxxcwzHed2Iq%2Fdn0dGtpyMCm05dJeqqzlZMAiEAujWeNKX%2Blcn468SldtImZ2%2B5BLGfTLKb5RGzjl9Ghwcq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMIsGV16mXuDa0FMNyrcA5er1oAChXFlm5fqDWf9BYzgHKY9BgxeiqZ2v5DR2fCoBNsdCIIp1%2BSY3zE71XPcPZPjbn93qmrh%2BoMmqYhaN17tmF%2FosGzBrlzDH0Sk32Prv%2Ftvm45BU87Fx8FKTC4OAxHNTXCzOS2XFSKfT%2B5cgUaqyNvEv3pPFR25TjkQR0D%2FbYeVfmwPGPtAUN4spDAUnsM4u4qvNLOkZIo%2F8kGznngfuk%2BUhUo43RDptxO5XtgcRdYO2aEe%2FwDmawRj%2F9IYbNjWh62w8WSOwXX%2Frgy2m5h7gB78g%2B7EeHBhEteT6J6jeTkDLAIXQGP%2ByUgyKMS7NEf7ZRCDwhP2GTDeXgEdxDdvypb%2BAoToTWhmXLdYaHvqTvJ9e5ixhIc%2FvnB%2B%2B4LYnya6Nmmu5H1hwKCk97TPpiXaTt8UuGyOMzpPX0%2FBQQhoj2W6iF%2Bmz6%2BY2wVpbqei5nJTIEu0vj8OjBmi7aHfym%2FSQ4avM8iERRCkWKzJCZn3fv9LWzILcNAoFlqPKHGPo%2FSedfoBxBM7xs5keTVTW%2FCbyX42A8VlcuS9NRprYRdzCc7uiXXH9roac7ZOTK5PoSxj6RbwFWVcGwCHZc227MmgIZ4rwWMAnNZdsKX2KJbDn81dEfqPGjEO0bzFMNy8ycQGOqUB64lv%2FNGCO4aTCofREPwd0S1H3XWqMzsqGtUjUtwkAJPS3eK5KyTAvy8rJCRaezHdTL%2FIKoocG63QjLRA5MEjpdEm4sdtVGo1hxTEXfVd%2BvnlU7ZHcn%2FhVFhOVz1QCdhc58Nd6WnZvA%2BuRHO0vBfVyxLTq1RgGde9OTPOcNMc06qGtbV%2BWdnJGQ9EZGNJx%2B%2BiBpTsFNOywmlUo0hRiMisLgTMPelN&X-Amz-Signature=291bed1ec07ac2781f5641a67da75f4c8b35a6f1049e7151ad791e3bda1b36ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RPU6D2S%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIH2%2F%2BlxqIHttXOwe%2FKfXgMidjgdlI6iLf7%2BHDdrIXCeoAiEA5sl0%2FtPzwVcDF0Kxn5fkwH9T5hKRJ4XFmUYNCzRjKTgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDH2HEecAR8Kq66rUNircA5GqPvw2M8bxwsWnXsbwjmDo5Ij%2BOisGwWcdcNfLNnWEekKvAVlWvIjhl3dLcK0x8XPYg5RQd%2BlwYCVYpvLkJS6QedYrLLzqOFT%2BIzxxQEeaTsUuwYqw%2FDFrkLqWga0EGxsDxhr3O83wuXcw5oc70%2B4w5LXPyTCAOy%2FPvZssXyd1YQevF%2FPD6eTQn%2FrEXSsBnwJs4OIXi6bDzvyxt9siIZF7x9H8%2BEP2%2B12sueArlaWMPaCyjA%2FCJFz94W1slX4uamrYfFP5XqgxQaUOCjpq8MujSNnV%2BjftFb1KxvQK%2F79a25ht6jqXTFqAqsRIUUDgsmwGOS2RAQ1K%2FFcK5cr%2BfJXaz5AWL3SmOJwR86gUrism9ZQ5jMI5A6kSsfNN45Hmh%2BeaeUBM5o66IcjcievoPSsv3XjghSZho7lPSPFZ27XPD5obGaAe%2FqcBn114wpHfLZtkp4N9dUJlCdcDs%2BrugeD9QM9Cq91ep97VuhOtd5L3vJYrEcqCcbjElhniLRDE9aiI2iTiwu%2F%2FvXwlplN%2BVLngpi7zAg3ooZi8Vb9LRrYn0%2B6GTtaSduq7h0RfPZex4TROo1LBz7CrA2o6CxQXJqGRWeR%2FnTSnnMcEVRTObO8TWk6pH1xsxxFUqj%2BoMO68ycQGOqUBAeRyZykGP%2Bw464Wel5tctURJHS%2Bj81HpoY5iZzIUcdFTIPPdyf1tum7Q7PDejkNFxb%2FChWoNP5gBx39dBVeEGiP7L25wyH6HCI3fRtF9Udu%2F3jZzE5DvUOp3%2BDywmVZs3h%2BhgmfpYC8k7ssiFa2eNiQpqyPhrpiciEpWlmNHCPwLnriP4lkK2x%2BZ3rCyJlkc60qXrzzYfqCeiuB1MRhHkr0BGbfw&X-Amz-Signature=3db30666f4391cd683599c186b750e7859d9a03701d90b6df85691e9ef7fe72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
