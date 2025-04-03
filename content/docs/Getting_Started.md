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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZMX2LRQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD54oV%2BMv1RCI6dzvJ%2F2sMDJLjUE4YtyaFVI0DQN4NWhgIhAMqu%2BwWg4s%2BeXBS7ewt4XD80MCSqkQrFl9y%2BPyUSUSuWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B6M9czvETc69kEoIq3AO2%2BlPMb%2FAnPt3Meqd%2BqNliAxj59ESg3EK6%2FEueb89B%2BUOPINi8QMAd0Dos75a7i7SfSL58zZOvawxHshYFT7IUL94sM9sJfBG3Lij2dFx0HZ95JOM0bUiwrCHu3NhqG7DK6bbqC1QeDqk3rDYfHM9FeCKgNKoFre%2BoSnDThZmw2Lp2XsVTdFGM4yYhQGKdIv1tpjI6dyhgiDLcTv3oQseO3%2FTWI%2FWcZCNJvckTSbX8KmfIDbiq5Q7HanmJm%2BYttCqtxn6ENKzAwF2yDOKyTqTyCI2AlsGgq4zWvFVXgq6XfpEvQPb%2BFzjZEFlfQonacRe98PjKIazMLT2NaYe5CTAnvWmcJuHo0yXSSrPJ8sARET%2FAopPgkGfDKo5pmEQoTrFH8OVJ1SJgHnbLqjmjE3e4SkLBbzY8n%2FXOxE56Wj0GTcCX8FGOFBWsDga2FV5krC1fmtSdHWSZ4qZEdSV8ZZoHSAROv7bqCG5Dux8WhoQge%2BX6Y%2FGNclcIfEgtnCTl%2BSU17F%2BzcmGmLDLXMAUR08rr86pN5guFMGjfoBZB9tG0MX2RGkLzJAcGUV77NXGCDC3uQys0Ij9O1zeUgjwrQrMBhAlajZmT75Eb8tlTW1VWB8rM%2FGnb5SYcejoodjDrzrq%2FBjqkAe4%2BbQeKjQ2jTGIPhsqLErklk0QSxxt%2F0Ln8PqCDEacrF5ZQUhZffR2Oc074y5d7qzjfk%2BayiKxNUMyYIBtAFD7Nk7DdOPZwDkQCNr2hl1%2FIB1abb8anUhUNehQ4munrcShiosLWUQZHVNSipL81yB1ZxrvVoulh%2B77JgY4X2Y%2BJQGPDJdFNaGkYpHucwU0oNxOWndzBURkZs3f3p94Yn026gquD&X-Amz-Signature=a865001e15e24b7db2e89633e542e88dbf6773e56a938ec7d2d2169f01a51421&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZMX2LRQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD54oV%2BMv1RCI6dzvJ%2F2sMDJLjUE4YtyaFVI0DQN4NWhgIhAMqu%2BwWg4s%2BeXBS7ewt4XD80MCSqkQrFl9y%2BPyUSUSuWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B6M9czvETc69kEoIq3AO2%2BlPMb%2FAnPt3Meqd%2BqNliAxj59ESg3EK6%2FEueb89B%2BUOPINi8QMAd0Dos75a7i7SfSL58zZOvawxHshYFT7IUL94sM9sJfBG3Lij2dFx0HZ95JOM0bUiwrCHu3NhqG7DK6bbqC1QeDqk3rDYfHM9FeCKgNKoFre%2BoSnDThZmw2Lp2XsVTdFGM4yYhQGKdIv1tpjI6dyhgiDLcTv3oQseO3%2FTWI%2FWcZCNJvckTSbX8KmfIDbiq5Q7HanmJm%2BYttCqtxn6ENKzAwF2yDOKyTqTyCI2AlsGgq4zWvFVXgq6XfpEvQPb%2BFzjZEFlfQonacRe98PjKIazMLT2NaYe5CTAnvWmcJuHo0yXSSrPJ8sARET%2FAopPgkGfDKo5pmEQoTrFH8OVJ1SJgHnbLqjmjE3e4SkLBbzY8n%2FXOxE56Wj0GTcCX8FGOFBWsDga2FV5krC1fmtSdHWSZ4qZEdSV8ZZoHSAROv7bqCG5Dux8WhoQge%2BX6Y%2FGNclcIfEgtnCTl%2BSU17F%2BzcmGmLDLXMAUR08rr86pN5guFMGjfoBZB9tG0MX2RGkLzJAcGUV77NXGCDC3uQys0Ij9O1zeUgjwrQrMBhAlajZmT75Eb8tlTW1VWB8rM%2FGnb5SYcejoodjDrzrq%2FBjqkAe4%2BbQeKjQ2jTGIPhsqLErklk0QSxxt%2F0Ln8PqCDEacrF5ZQUhZffR2Oc074y5d7qzjfk%2BayiKxNUMyYIBtAFD7Nk7DdOPZwDkQCNr2hl1%2FIB1abb8anUhUNehQ4munrcShiosLWUQZHVNSipL81yB1ZxrvVoulh%2B77JgY4X2Y%2BJQGPDJdFNaGkYpHucwU0oNxOWndzBURkZs3f3p94Yn026gquD&X-Amz-Signature=fa128f866b0eb4e6f2fdd67e7e501350940c76668f9719b643443e55a08b2480&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5RIRQH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8nKleaqgsXSvBPHyhrp660iSSPUFdqzn6Jd3lWtE9DgIhAK%2BYWSmxIQ4TYuHz2N0ZZRKoR4tPUjgZ6UYlU7L7tnJcKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS2KWhXwcZQ4LpS28q3AMcuvtAfHUO9s0DejxsFvRoyx4wJjYQ2XrrMcKjaIYYE6HBSHuUYTJ0EzvaiWHoWHRJVGTrdyXl539osIRnZ1rcxMo7APQYRyZA3I8aZwWKT5dhnTC%2FGge27v31wLdikphYdk2lDDXx4F7TFw5WqeaOHGjHtceHj8mzv%2Fy88BkffVQZ2eCYawHvGp6DCcx7Lt1qJMS3ar%2FHkKsN2Xq76urjbk2YLxxVOeqJxr91MIJHI3RVKfr40FrAhByhrdXZy7LRRv8uELdQOOaBmsEjsIVoNba24VfMTahwB9MI8DyRIZ0fIToygwdKn2kFATU7tXUI7frbw4c7F%2BtlO63uXoHuUo4iAXYloV3LEzYVwYHIDTSsTug2adkCd1h00%2Bz4W5XunNTnT0yhWvKvYpkKuG5QPn%2FHCBrTs4RzyEtceemaBrYMvo083F%2FLRf3eYUwBcr4HoXB8SEE0sx5I6d7AAPMoYrPhQfmoZn1aaoX02LdrDxGJPvM%2FGloYMFjmwSnYitxJHUaEXB246NIbEZ9M1E8Fh0UGqpIg6KN%2FjQeBT4BVAeszKAjil%2Be8HFhLr0r5WNVvRcXpUcTktn%2BrlBMGJcalb6M3%2BLiCW0v26%2FDnMHErrUsuM28EqzJPDmgIhDCazrq%2FBjqkASs688ghcK7MCvuuizLvLYz7AtZTAiD%2F1qF5eMuFT0pDU4uefrF8dIvDOluKh1UK06SL%2BrEjDTVer7kjcIqnasVKq80LpbtoUdDf3WFLIz21nFENmzfP6xK8BbIMj3Jbyr63gn4U%2FIZIVJOysAobMf03Ku3bGLgvxdLnxOY8wtACc%2Bp3J0ijhDlE5ezzx5Ik9Ok6jloaMAsex1cl1YbFZ9n2SC2P&X-Amz-Signature=c727e49cfd142bb165629ec99dca5578be546b7ea7a6804ce348e679b9abe051&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAONLNQP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACvcIlrq6gV9%2FInLu8KB9f4KV1gzvBKqAW2LP7yeVaJAiAmqkj%2FFomIa7kVq4lHuDbExQ5CiDiZkHLjNxL8nQ0gfSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnahVMRSGowH2Aj5kKtwDsg4aShjuIAqgHJZmKGEkavyBFUvwHhAJZ3k%2FzUJiq6Amv8j3vOR2Ml92rgc4Q%2BrwZ%2FneYvYETtnSLb9QDyoQqtmLvpBRtPMh0%2BCZ9h4CEdsHrKu6Jc1e1hAMjGzJtD%2Bx%2BzItoWcKY0SzHe9kTHyS1gEx%2FS7z12dmD7M7scsjKLfg8O6aLACR97acacpLZOSFWcvv42Nso73ce1G2QrxEjbaFhVAOGgzYsVmrYV1L%2BRyqpoz4gDdpzoMI2oPvXB9vwoKrTu23TjE6ypnwvd%2BcvsJZjiywiBNCdxIiBVPb%2Fzv1K5ry9loiF1U9qvzH3q3XysE%2FLDJR6O0myelerkNm%2F7KCwURFrTnf%2BIAVrVOLdfUCoqVKCUeHOZ2JJFKXf08r5jizc39zsOsjQHac2mXxm78cHyPd1nRW02NQnB%2B0fI1k7tHPHuPWgfxqKBoK3hQVSezlYUo%2BFiTGm0kNoazjKDrfVXXB5ZVGP1UYUavOUdv7pPmliJTH33LiU%2FEoXmXpCZDGcwD%2BrsRolabHTd5t8EGFSSJdry3ms5bPDofeKcj%2BJiPyzU4qSyyByET0m9Mmr0npJyvg2iv05WlH0mEGVktN%2BTzCQnP7zkXhOllgjPsRyz69uW7qLv5BLCowv866vwY6pgHzhlnD8OQzSi3obqv6dBm1xmkl5%2BT5EbHQKZt%2BJumGQ42VofIzhTaLfkAoIfurs6R2KwconT2gg4Np%2BlNUbKjhh01BQacI68nlA%2BRZpb9d%2FKdhVh68%2FfNBx1lz%2BX2xPCR3cxCaAgQI1sePmehVBguSaHjwf6%2F7sKXgyP4bagr9NVGDqsPttvNTe4O18pkbOjzu8DQlLdCIuTO9bUC8BpWKcDUPiq%2FA&X-Amz-Signature=050d64e1a86e7fefeac2d4e5be0e3252784c94fb2f6893061137fe682ad8e96e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZMX2LRQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD54oV%2BMv1RCI6dzvJ%2F2sMDJLjUE4YtyaFVI0DQN4NWhgIhAMqu%2BwWg4s%2BeXBS7ewt4XD80MCSqkQrFl9y%2BPyUSUSuWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B6M9czvETc69kEoIq3AO2%2BlPMb%2FAnPt3Meqd%2BqNliAxj59ESg3EK6%2FEueb89B%2BUOPINi8QMAd0Dos75a7i7SfSL58zZOvawxHshYFT7IUL94sM9sJfBG3Lij2dFx0HZ95JOM0bUiwrCHu3NhqG7DK6bbqC1QeDqk3rDYfHM9FeCKgNKoFre%2BoSnDThZmw2Lp2XsVTdFGM4yYhQGKdIv1tpjI6dyhgiDLcTv3oQseO3%2FTWI%2FWcZCNJvckTSbX8KmfIDbiq5Q7HanmJm%2BYttCqtxn6ENKzAwF2yDOKyTqTyCI2AlsGgq4zWvFVXgq6XfpEvQPb%2BFzjZEFlfQonacRe98PjKIazMLT2NaYe5CTAnvWmcJuHo0yXSSrPJ8sARET%2FAopPgkGfDKo5pmEQoTrFH8OVJ1SJgHnbLqjmjE3e4SkLBbzY8n%2FXOxE56Wj0GTcCX8FGOFBWsDga2FV5krC1fmtSdHWSZ4qZEdSV8ZZoHSAROv7bqCG5Dux8WhoQge%2BX6Y%2FGNclcIfEgtnCTl%2BSU17F%2BzcmGmLDLXMAUR08rr86pN5guFMGjfoBZB9tG0MX2RGkLzJAcGUV77NXGCDC3uQys0Ij9O1zeUgjwrQrMBhAlajZmT75Eb8tlTW1VWB8rM%2FGnb5SYcejoodjDrzrq%2FBjqkAe4%2BbQeKjQ2jTGIPhsqLErklk0QSxxt%2F0Ln8PqCDEacrF5ZQUhZffR2Oc074y5d7qzjfk%2BayiKxNUMyYIBtAFD7Nk7DdOPZwDkQCNr2hl1%2FIB1abb8anUhUNehQ4munrcShiosLWUQZHVNSipL81yB1ZxrvVoulh%2B77JgY4X2Y%2BJQGPDJdFNaGkYpHucwU0oNxOWndzBURkZs3f3p94Yn026gquD&X-Amz-Signature=2dc159eb4c27e48a999dd09b8e91f7c9f06962142bf5a6bfad946b1f770ba877&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
