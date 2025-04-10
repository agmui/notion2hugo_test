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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJAISYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIClk5E%2FqDXzIDftTDdjO9mWhvyAcRYdvex8OwarAOSgYAiEA2%2Fba1PNDssADT9xqXwC8GrkVTg4S0LguOAi2ruq35i8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn5K7y9zppVxUxp2SrcA2z8UGS8%2FTC7g9nsJQD9YQincAB%2FZcKCS3r2%2FjaZfUeB5PrrqPHXog23mwnEQq1se%2Br%2FvSkH%2F231e8Zm4f3tgiYUNd%2F0%2BO4dmF1LBLv7I1IGxbNmFTuiVWfUKb3VPCfDH2n1paGpcEJMdw7KTw3r0ap7dWXKoxW%2Fm4yb%2FDS1J7zvkWeEhznkyZ49JeAUlE9JgfM3UHNds%2BTloHKoZl83Z3s1JPzfrVN7sb%2B2sd4bAOJN8o4Uw1Kw%2B8DPIJni9nWBXa3DJgJxnvnlzvfK6mM01O10LOFgRI4zQGCVsAkP699Rb88Eul8Rgz%2Ba5G7nDw2HwrXCvFr4qiVLw0cRoH6amOiJHibicjTW%2FRQs4JN%2B%2FCVsETQUtiNX3uyThsKgkR4%2FeqjEZM5WaWCw%2FzUNhJKw%2FI%2FELjEKKELgt5xSZut3gp9JCFTd6QVS1%2FH7o6PRQgUxznukzlgpSgCS9XINpVeD6BOTYqhUjdnxhlaqsFthYtefl9M3RJ%2Bev36YncZneAi8mhHoWpm021v3GgL9pKWUvKNbWEhQDEriQEcVpVjMkdsmfD76lXM2jpDFQWhjVFjRxgy6GVzNthBSqqzt8ENeYZ9G69ka9xfrBwHQfwDdIniqeuBhfs0FtOdTz4yNMK2K378GOqUBjLNlXVD0tMfrsolZyDpJ3KeybR0NChSdQwWYiz%2BDGTf1n1VEWV%2Bp4RIK8QSCvpu3GfoOwBuIjXSPG5P%2BWbgP6ndhzrcE%2FItPFOtd0wArlOHMsEH%2B7JPUWlkaT1jg2gQkV7DYRHf0B4tmfX4Mx5MeZbfrY2%2F2Ib9AbBRXxT76tkyZUZPijcli%2FvDBffUKKwAl4tAsFfhiwh%2BBvwjHl88ipb%2FXv8Vd&X-Amz-Signature=4cb837531eca8b86745512bba9deccfdd4b085751b11a3067b5bf737dffda48a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJAISYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIClk5E%2FqDXzIDftTDdjO9mWhvyAcRYdvex8OwarAOSgYAiEA2%2Fba1PNDssADT9xqXwC8GrkVTg4S0LguOAi2ruq35i8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn5K7y9zppVxUxp2SrcA2z8UGS8%2FTC7g9nsJQD9YQincAB%2FZcKCS3r2%2FjaZfUeB5PrrqPHXog23mwnEQq1se%2Br%2FvSkH%2F231e8Zm4f3tgiYUNd%2F0%2BO4dmF1LBLv7I1IGxbNmFTuiVWfUKb3VPCfDH2n1paGpcEJMdw7KTw3r0ap7dWXKoxW%2Fm4yb%2FDS1J7zvkWeEhznkyZ49JeAUlE9JgfM3UHNds%2BTloHKoZl83Z3s1JPzfrVN7sb%2B2sd4bAOJN8o4Uw1Kw%2B8DPIJni9nWBXa3DJgJxnvnlzvfK6mM01O10LOFgRI4zQGCVsAkP699Rb88Eul8Rgz%2Ba5G7nDw2HwrXCvFr4qiVLw0cRoH6amOiJHibicjTW%2FRQs4JN%2B%2FCVsETQUtiNX3uyThsKgkR4%2FeqjEZM5WaWCw%2FzUNhJKw%2FI%2FELjEKKELgt5xSZut3gp9JCFTd6QVS1%2FH7o6PRQgUxznukzlgpSgCS9XINpVeD6BOTYqhUjdnxhlaqsFthYtefl9M3RJ%2Bev36YncZneAi8mhHoWpm021v3GgL9pKWUvKNbWEhQDEriQEcVpVjMkdsmfD76lXM2jpDFQWhjVFjRxgy6GVzNthBSqqzt8ENeYZ9G69ka9xfrBwHQfwDdIniqeuBhfs0FtOdTz4yNMK2K378GOqUBjLNlXVD0tMfrsolZyDpJ3KeybR0NChSdQwWYiz%2BDGTf1n1VEWV%2Bp4RIK8QSCvpu3GfoOwBuIjXSPG5P%2BWbgP6ndhzrcE%2FItPFOtd0wArlOHMsEH%2B7JPUWlkaT1jg2gQkV7DYRHf0B4tmfX4Mx5MeZbfrY2%2F2Ib9AbBRXxT76tkyZUZPijcli%2FvDBffUKKwAl4tAsFfhiwh%2BBvwjHl88ipb%2FXv8Vd&X-Amz-Signature=da1fef6531d0dde7aef84c94ffa3a81d5d61b9a6dc6a641de13c2d345490a99d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELZ3AMY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCiljx7Rn13B0SGC5AKy3HSbFL3aP0y2rliaEkP%2F4xc4wIhAK4koYqtHRZIDsbxQSBuRMZIMbQoH%2Bs6BbVJbgHJNb53KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwceTFunX6qpty%2BJD0q3AMj0D4vx3SdLI3rDmWxZn%2BZK%2B4yHrllUxw414RJ9COwt7UF2%2FS05BZevgP68avTwoaZziL7SNeCG%2FdupQnQNXRsdW%2FGcfKk5hxkIl3sQ2OAG%2Fn4p9Xrh%2B0rLnNidsAzi80%2BdzVSNAmOP2ZJgIczgqE1K%2FFz77IRjHjEQwPlRtutHAqnK3W2Q8BjtloUBOzrZiQiU3GK%2BV40WSWCabscC3aTEHalMArHkw3y4OJCrilY025ZF%2FoQWadS7i9JfQosXjiIn0cuHr%2FNYYtWjfkibKL1YsyW25oFp8yRv9Sb%2FwxzkOUXuc0fnoLEcTbPr5TCSE3OMaZwr86gKYj%2FbopwxErNKbYODU1r83CvhaXiN4%2B1j3GfiEuXRPgjsw4H9nCGi1HJoqR6jZh6DmtgRyg5VCoJJvkz6Xw8sa3WBtffHu8sNSV3c3agPLRp13Txivq7BDTaJE9gkWgVUlv%2F3Qh7W%2BAvU9gOChegPHBBh0FCUGNu1TlpbJC%2B%2Fy666Tq4%2FaZnwXUAUiVFk1pKgq8oH5mGfA8%2B6%2FDUz2mNr%2FehxkpZwPcL0CnoRkzFssYDNSzOltAw50YNx%2BYDG7WyESA5r5WjG6YW5Ko7lTN1IKrMRmSfOuVDoFqlinFM0g%2BfNN76XDCFit%2B%2FBjqkAfqgNAaSWt9cbbMiUutsv7P0F450rvDcmuPZoISazvfvxxmRB7MBFfPFRX7OStYwfcUgcmTmgTftDprVkv%2Bzns6VMG2UHiszJ112P8zadd1TjkNAthX%2Fb%2BJyjYJmhZCG%2BO3oW4L%2BsFer%2F9hgh9z91fWkR0NPQmzCqpxe3NjnsZxaWU48%2BCoMdxSwsGzUF2ctv7MbQ57dF9zI%2F1bcyPcxhqofrKFD&X-Amz-Signature=58d1c765ccf83e0ca3fb68d484d364c3e3501c6e02f8cadbb6b357a3016827aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGL5FH6%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEHvhLmf5mPOOKBdkLfec8j%2BQN9UxqruJQWtQY3efiUjAiBUZkmE8f66aCBLYHW3R%2FF9QpUvTemJOBKEaGrrOY6tXCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5wfJlDCX5PPquLVKtwDGpSS1GcAp1ek349JcvXtVfmKVNj8w%2BpYIhPMv8TBDRikPId6JaEaP9SW36phsiBU6JBMjA94kp4TawGMLUUpG3X9wujEauje7niAxN8poQaF0y428Mi43HY3GA2QQA9ObsRuD9FZLaS7SMwwak9PHQeGARpkKgD%2BbvZA%2FWfIQpqBziQv6pWInXpOd%2FXKr3ZcnlxVVIKIImDvUypEtpIpK143MFaAcb2kyEVWerA7EFF1HNV%2B67YRTSy0Q%2F8WLWgWHMYsZ7myfj0%2BlyS2MyzQn4Pwsm4P6stGkyVM6PqhnIPpcneW9H8dwTQ%2FBH4m2UeAExNu7WGqT2aW3WU5CATVRcJj9TeF0mqPhlP0dHNmnoexUtKzkgtqFRMoJ69286O%2B7hsmo3v5SaGQ%2FNV4DeLzzT08ENY5D0WLKpEfAHuEf3HJ%2B5nFsCBKiRxm6sqJWbSs9ryYcQVpIxw0%2FrwnqYxtFwM%2BgqgmdoiodmUoRGvbjwkxRJ8xHUJgdphRDJg%2Bwp5cstcqXjiNOPmsjFpYvSVaIu81jOKmXStFjj3CVyObsqXNhLQDyzU31dTl6ccGUNfhOA4ttHrKr9OcDOpvTWJIwHVLzMCcLLSIVUHe18cDX6MyBp7XxwZ%2Buhy5Ln8w8uvevwY6pgGW%2BAL4gS%2F0VNVEeZkxHJZVb0A%2FJad4fC12JuSV1sLf4mp%2FzjO9OlH%2Bw3uairt7rg%2BekML9ZWdoiTA80x4ch6NObHMZs6evgtdNGym%2Fuu2x%2FMBmhZFyTxQd6WTsQlppE%2Bh9mX2fLLLtonjugegj4oi7WMkJpzVj2PZ1%2BMg9QkNZegw54PNQNBM9CgiXQOTdr%2FaA5VuIRt%2Fqv9kucE02xUcYx4Yl4LZI&X-Amz-Signature=e3646ee4b0f767f538cd110f6cfe4c7542fda09443d370745e20696c9c28df38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJAISYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIClk5E%2FqDXzIDftTDdjO9mWhvyAcRYdvex8OwarAOSgYAiEA2%2Fba1PNDssADT9xqXwC8GrkVTg4S0LguOAi2ruq35i8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn5K7y9zppVxUxp2SrcA2z8UGS8%2FTC7g9nsJQD9YQincAB%2FZcKCS3r2%2FjaZfUeB5PrrqPHXog23mwnEQq1se%2Br%2FvSkH%2F231e8Zm4f3tgiYUNd%2F0%2BO4dmF1LBLv7I1IGxbNmFTuiVWfUKb3VPCfDH2n1paGpcEJMdw7KTw3r0ap7dWXKoxW%2Fm4yb%2FDS1J7zvkWeEhznkyZ49JeAUlE9JgfM3UHNds%2BTloHKoZl83Z3s1JPzfrVN7sb%2B2sd4bAOJN8o4Uw1Kw%2B8DPIJni9nWBXa3DJgJxnvnlzvfK6mM01O10LOFgRI4zQGCVsAkP699Rb88Eul8Rgz%2Ba5G7nDw2HwrXCvFr4qiVLw0cRoH6amOiJHibicjTW%2FRQs4JN%2B%2FCVsETQUtiNX3uyThsKgkR4%2FeqjEZM5WaWCw%2FzUNhJKw%2FI%2FELjEKKELgt5xSZut3gp9JCFTd6QVS1%2FH7o6PRQgUxznukzlgpSgCS9XINpVeD6BOTYqhUjdnxhlaqsFthYtefl9M3RJ%2Bev36YncZneAi8mhHoWpm021v3GgL9pKWUvKNbWEhQDEriQEcVpVjMkdsmfD76lXM2jpDFQWhjVFjRxgy6GVzNthBSqqzt8ENeYZ9G69ka9xfrBwHQfwDdIniqeuBhfs0FtOdTz4yNMK2K378GOqUBjLNlXVD0tMfrsolZyDpJ3KeybR0NChSdQwWYiz%2BDGTf1n1VEWV%2Bp4RIK8QSCvpu3GfoOwBuIjXSPG5P%2BWbgP6ndhzrcE%2FItPFOtd0wArlOHMsEH%2B7JPUWlkaT1jg2gQkV7DYRHf0B4tmfX4Mx5MeZbfrY2%2F2Ib9AbBRXxT76tkyZUZPijcli%2FvDBffUKKwAl4tAsFfhiwh%2BBvwjHl88ipb%2FXv8Vd&X-Amz-Signature=bafce3dc9c493fe253082b4828bb130314103c2928d3b824f0310b2acc479978&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
