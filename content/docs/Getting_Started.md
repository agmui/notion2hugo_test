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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4AEPTK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnN8af35bpSWoMlcqK83cdcp6O38KAgiNaCqOLVH2yQwIgbNUcJeRNdpAQOQIBrKFt8Ll%2BR4FZ%2FcLQF1VPyoeF8agqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQf6FDmQjkGYzilYSrcA5gJ0oP2dLFFRUFDS0YQoToCFDl8NBksDSsM4wC71AonI3A%2FKJwwWOd5vD%2BUbfpacfXwqq%2FCUZ1NTWpH2enkJZ8eb%2Fgww9ZPO2dZTgIf5es5PigUByAWX%2Fd%2BliMihus76O6xNSV0kL878CkbDjTQNnwAr1b3L%2FQiSMfIeaJUwsn1KdjDb5tLE%2Bsyr7cN%2FxNBkoB2dGsXtXOfxjMKpztv2ZbMfqpABa1WScSw3nYCd6UStrwXhbQwrk7acyVkv3cZtm6M3C4uPhSk3AMFWZNHZgsRaObvYdPKLyoMlgTvBYVNK0ZyUgrZuhxmM9oOUePk2KJKi0Zs1VlT%2F2BHqcfwDMN4l2nXtBTSMnyNiOYQav7SnUPbzWovefA0%2FxEKnilYhqD8U9Wti2dCsJi53H0RDfmgUJTIenY6OsV2%2BYBpNz%2BxZ32wj8xOeCoJL3KotN%2FJVaxNHGtc%2FBwVODZK1pfAd0RchIE3gYhG2botr0H8739HMpmsjaaFpdIuIeWktJtRcGcPB1iab8SjEjNBlYHWSrjErypcWEs1b%2BzwBFdl6JUY2d2TcEs4j11rBkd%2Bxrqzrksc%2Fa1qGLWt%2F7%2BIq5nh4dtLaIB5WEpWz2gIhulU65yHO%2FMC8T05ptQYAqDjMNbLs8EGOqUBoEdApxeAl%2FwiTHJCIat3kyUInJMUDZm3VX%2FqeVCJ73QpRrxiGdM8oV7%2FZ91E%2Fyr8ROCrMTDLGoHcjYe6u5sbABDV%2FCulUOwIBOLNAfU9lAHueyQZFaq8wKyHNF1h%2FZonr8r1dDtue1stjDDlv5XLzcnnzH5Ku0yFZYn1UxBMik1%2BANHQQ0qCXl3YkoJy7uH3ik%2F5mYRM4IrkOAb3Rvm0xZwh5HMA&X-Amz-Signature=2b596b3fd98e9fff40dc79f12f738fe85a743f6412ff0abfe5a92c9fc1021436&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4AEPTK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnN8af35bpSWoMlcqK83cdcp6O38KAgiNaCqOLVH2yQwIgbNUcJeRNdpAQOQIBrKFt8Ll%2BR4FZ%2FcLQF1VPyoeF8agqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQf6FDmQjkGYzilYSrcA5gJ0oP2dLFFRUFDS0YQoToCFDl8NBksDSsM4wC71AonI3A%2FKJwwWOd5vD%2BUbfpacfXwqq%2FCUZ1NTWpH2enkJZ8eb%2Fgww9ZPO2dZTgIf5es5PigUByAWX%2Fd%2BliMihus76O6xNSV0kL878CkbDjTQNnwAr1b3L%2FQiSMfIeaJUwsn1KdjDb5tLE%2Bsyr7cN%2FxNBkoB2dGsXtXOfxjMKpztv2ZbMfqpABa1WScSw3nYCd6UStrwXhbQwrk7acyVkv3cZtm6M3C4uPhSk3AMFWZNHZgsRaObvYdPKLyoMlgTvBYVNK0ZyUgrZuhxmM9oOUePk2KJKi0Zs1VlT%2F2BHqcfwDMN4l2nXtBTSMnyNiOYQav7SnUPbzWovefA0%2FxEKnilYhqD8U9Wti2dCsJi53H0RDfmgUJTIenY6OsV2%2BYBpNz%2BxZ32wj8xOeCoJL3KotN%2FJVaxNHGtc%2FBwVODZK1pfAd0RchIE3gYhG2botr0H8739HMpmsjaaFpdIuIeWktJtRcGcPB1iab8SjEjNBlYHWSrjErypcWEs1b%2BzwBFdl6JUY2d2TcEs4j11rBkd%2Bxrqzrksc%2Fa1qGLWt%2F7%2BIq5nh4dtLaIB5WEpWz2gIhulU65yHO%2FMC8T05ptQYAqDjMNbLs8EGOqUBoEdApxeAl%2FwiTHJCIat3kyUInJMUDZm3VX%2FqeVCJ73QpRrxiGdM8oV7%2FZ91E%2Fyr8ROCrMTDLGoHcjYe6u5sbABDV%2FCulUOwIBOLNAfU9lAHueyQZFaq8wKyHNF1h%2FZonr8r1dDtue1stjDDlv5XLzcnnzH5Ku0yFZYn1UxBMik1%2BANHQQ0qCXl3YkoJy7uH3ik%2F5mYRM4IrkOAb3Rvm0xZwh5HMA&X-Amz-Signature=5e910d998c0e06ab209ff7dc730b1cba7f5831d1ce68246e1b4174b6e9dfdc75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4AEPTK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnN8af35bpSWoMlcqK83cdcp6O38KAgiNaCqOLVH2yQwIgbNUcJeRNdpAQOQIBrKFt8Ll%2BR4FZ%2FcLQF1VPyoeF8agqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQf6FDmQjkGYzilYSrcA5gJ0oP2dLFFRUFDS0YQoToCFDl8NBksDSsM4wC71AonI3A%2FKJwwWOd5vD%2BUbfpacfXwqq%2FCUZ1NTWpH2enkJZ8eb%2Fgww9ZPO2dZTgIf5es5PigUByAWX%2Fd%2BliMihus76O6xNSV0kL878CkbDjTQNnwAr1b3L%2FQiSMfIeaJUwsn1KdjDb5tLE%2Bsyr7cN%2FxNBkoB2dGsXtXOfxjMKpztv2ZbMfqpABa1WScSw3nYCd6UStrwXhbQwrk7acyVkv3cZtm6M3C4uPhSk3AMFWZNHZgsRaObvYdPKLyoMlgTvBYVNK0ZyUgrZuhxmM9oOUePk2KJKi0Zs1VlT%2F2BHqcfwDMN4l2nXtBTSMnyNiOYQav7SnUPbzWovefA0%2FxEKnilYhqD8U9Wti2dCsJi53H0RDfmgUJTIenY6OsV2%2BYBpNz%2BxZ32wj8xOeCoJL3KotN%2FJVaxNHGtc%2FBwVODZK1pfAd0RchIE3gYhG2botr0H8739HMpmsjaaFpdIuIeWktJtRcGcPB1iab8SjEjNBlYHWSrjErypcWEs1b%2BzwBFdl6JUY2d2TcEs4j11rBkd%2Bxrqzrksc%2Fa1qGLWt%2F7%2BIq5nh4dtLaIB5WEpWz2gIhulU65yHO%2FMC8T05ptQYAqDjMNbLs8EGOqUBoEdApxeAl%2FwiTHJCIat3kyUInJMUDZm3VX%2FqeVCJ73QpRrxiGdM8oV7%2FZ91E%2Fyr8ROCrMTDLGoHcjYe6u5sbABDV%2FCulUOwIBOLNAfU9lAHueyQZFaq8wKyHNF1h%2FZonr8r1dDtue1stjDDlv5XLzcnnzH5Ku0yFZYn1UxBMik1%2BANHQQ0qCXl3YkoJy7uH3ik%2F5mYRM4IrkOAb3Rvm0xZwh5HMA&X-Amz-Signature=15958ccf5ff927edf5d042f8cea2232d1bc24d1c4b610bd0c77752c88040d2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ3UTMH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOX9bywlxSeJyCZ19pab4MfzgFZndzqFFzxV0ckApRcAiEA3AuQDgreaPJ6ipdWZIlVTxXE8zCLIzQ2TBT2HfdAwuIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXQ0wf%2F7EfX%2B5X45SrcA%2FqUIq3lfdTN2PFavgTQNphMI%2F%2B06hplBUR3upsC7Hz%2FZ8P2Gb2%2BN00J8md%2B1HmRT7uYYOIeHJ5uCMkJTdD8P8aBcsy7Pv5x3LlihWIFky0R%2BsJ6UQIBLYjI89qvom1cJpZsqL3QabbvnvEvYIyKSoljl2wb4RfHh9iVWDuUq%2BcMab%2B4WFo0sELRHUzcgEv%2BdhlrekMS3gz4sXaBbxr3bxq5%2F9gFFZNoYDTOUoNcKZzvKxDwWXHG4GIWfHJT4vUiemISJ4jftTWN%2BYxNL%2Fh5q%2Fo%2F%2FPZqcpX8H2AzXT9AGT1RuxppYUatXOb9peozPVCKYr2qzxtWAZkeoKsBGq5qgjLY%2FIvOJSCxX63snwWEYM8Mpo7gqvNukis5CMW0EXxkxk0IKmWJcPGUUUcxSEZuoDNrsUvIK%2FkqNzaB%2BsbeWT%2BUhGPfVyhW8J5nnmXlCrNOKMKwaUwlGkxYC00Ohr6k1gQtCNj59ClVoXqO0Fa3QU6bOQomn1BcBmeISK%2FyXDOz4hjsUw45xSi%2FfegXVwMrFZJ%2FgEIBp754ANmZeRvtAuB7AjQJen3HpeEC4CPCdIVY8cLnmbh0wuHL6d7tqV%2FwPrhq7MzEB2VtdzmqDPfUTZZ0Ypxncu2dGqz5DQ02MKjLs8EGOqUBkOTMtzRPbc6Ar%2FvuDyIKu5rrisKybRpkdpiQkduEcTGfEBAtHy5b9OfFkiGeXXCQ3tEa0ZbR8legn5DWiw4ybk8xCK81T0yg9vk1bWmN0%2FmK2%2BlbYYWzWikAKsVkhHDKrhSNIlFmF2%2BMiIny9qVT3R20%2FiH0e%2F9pf%2FOLXy4TSrVSAWTWXIjUn4hOIAXE%2FjiuoNicESNXB25k7cCWUVRU0oK%2BQIjS&X-Amz-Signature=866cf5005c5793a6a71cad0c7c46edfc442543efc5c6e4210b48ad362e78379e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z677IKY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOMZj8ZGTp8EVJxOfCjMXQ8UFHAUbTlqBDxPvzbETmAAiEAp%2BEFCzw2IdMLA1KzPM1GAf6nj5FyJuog10acJsioapUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaiYBKHfhb2KxKB%2BircA4c7ds%2B0xjmiYG5zgKoOpS9CcCxiDU0Hv2%2BWs%2Fsh3%2Feclp%2F0cRC72lm85TOx56jwNVv%2FibL1JN9cjt93NvemD0mSyea69nfI%2BxGUUbIZr8ZgOjWre1dEtSsEWXBLEb6e8syL2myx6u63a8HG9OF75tUt8or2ktQcttfQV51o2OgFWMJ4973XjywKLiD%2B8lbsOaGi11g5J%2FstxiMtEWoRFwyDmtEbMWMZYzxkwvhVHh%2FghytXpSr%2BWtTPBlJryVaoVsVUpQu7PHizzK2XCSpeTRk94cCsV4PpjEDGBV0R60V%2FBVeaDAG4ASQYav%2FCWgvkmKhumt5AA%2B2eAqm8q39PSrR4cBKlGlZ6HQZnNbHMOwf2FtwSh8ir1TeoHy2zAeg4xSo2Hm%2Bz5I4mSa1Srb0hkhe0oj7cwnSP6E64XfF%2Bo%2B6WJw%2F%2BWkkwUiXzGzHIcvXKmioS01t3PnoZLRwMwtESzeiw79WH75qoEGs4DSi1KfLI9hXp1VoZ1tWZqv93MMF3cgF3JwrWIU8rWSt4ykZJQAndEVhXf45Qk6FTXoaxknVlRxjuD%2FcPjYWFbPD2vnZGYaxbZcpX%2FoUkHQMZf1k9hXwd0lOVbeNW6dpx2pT9Erykb6hTbF8k3KM7vM2QMJ%2FLs8EGOqUBkgP2QXO3jOOPCYyOyHwChOm1FXlnjsrW012FHoGgTXqBl7P4h6L4%2BiEmt%2B2fy4pCktzvaYK1o2XnHyQuLBjVl5vOUMAxDQvNXzcJ1l9Hylu5q9RJHod66E%2FZtFxWAtfd%2BqDV86ziab187BzxZaugWJgBc6yRot4mE5FpK1vLL7hm4tRk54sGwFZMaOY%2F2GL6tzT14r65Z3kbhGN3fBaOXKwmijVy&X-Amz-Signature=7392a7671c2e23e67c7ada7fbfe71debb6fd4d9745517679c50d3f1a803a8689&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4AEPTK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnN8af35bpSWoMlcqK83cdcp6O38KAgiNaCqOLVH2yQwIgbNUcJeRNdpAQOQIBrKFt8Ll%2BR4FZ%2FcLQF1VPyoeF8agqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQf6FDmQjkGYzilYSrcA5gJ0oP2dLFFRUFDS0YQoToCFDl8NBksDSsM4wC71AonI3A%2FKJwwWOd5vD%2BUbfpacfXwqq%2FCUZ1NTWpH2enkJZ8eb%2Fgww9ZPO2dZTgIf5es5PigUByAWX%2Fd%2BliMihus76O6xNSV0kL878CkbDjTQNnwAr1b3L%2FQiSMfIeaJUwsn1KdjDb5tLE%2Bsyr7cN%2FxNBkoB2dGsXtXOfxjMKpztv2ZbMfqpABa1WScSw3nYCd6UStrwXhbQwrk7acyVkv3cZtm6M3C4uPhSk3AMFWZNHZgsRaObvYdPKLyoMlgTvBYVNK0ZyUgrZuhxmM9oOUePk2KJKi0Zs1VlT%2F2BHqcfwDMN4l2nXtBTSMnyNiOYQav7SnUPbzWovefA0%2FxEKnilYhqD8U9Wti2dCsJi53H0RDfmgUJTIenY6OsV2%2BYBpNz%2BxZ32wj8xOeCoJL3KotN%2FJVaxNHGtc%2FBwVODZK1pfAd0RchIE3gYhG2botr0H8739HMpmsjaaFpdIuIeWktJtRcGcPB1iab8SjEjNBlYHWSrjErypcWEs1b%2BzwBFdl6JUY2d2TcEs4j11rBkd%2Bxrqzrksc%2Fa1qGLWt%2F7%2BIq5nh4dtLaIB5WEpWz2gIhulU65yHO%2FMC8T05ptQYAqDjMNbLs8EGOqUBoEdApxeAl%2FwiTHJCIat3kyUInJMUDZm3VX%2FqeVCJ73QpRrxiGdM8oV7%2FZ91E%2Fyr8ROCrMTDLGoHcjYe6u5sbABDV%2FCulUOwIBOLNAfU9lAHueyQZFaq8wKyHNF1h%2FZonr8r1dDtue1stjDDlv5XLzcnnzH5Ku0yFZYn1UxBMik1%2BANHQQ0qCXl3YkoJy7uH3ik%2F5mYRM4IrkOAb3Rvm0xZwh5HMA&X-Amz-Signature=5355a410eba4d172e2dd51fa7eef25409f3a4a3241255497845dfbb9a803d247&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
