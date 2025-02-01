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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XSNWBW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXS3iCsMEtjE4AYTjGyvOmM%2FhMTS1bCRuBvckEh5rwcgIgDjtxbxb2ft9Xq8F%2B2YMPBjEQ%2FtU4qT68GU4xCrF62owqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6Fgxu9eE6Rup8hDCrcA0bmRMINLMnH9V1%2B0%2BpmXomsgVPGkWlvtTadVZsi98Pp8PhXAdiUyGHwbxcHjoTk1MEn%2FAMiQhuGrTdmkMSuW48P%2Ffoo7gishJ5q018e631bu8UUSDT6lrH7yy%2FGQ%2FmINItWotxjPNujqT4QPtH1mZ2tjDqo1tf76AnDMNt4enCwcAFWOr5GJR6AJ3Ucg6eEqX5QJeiBZ0KE5vATQHUqNiUJ2H8PHAkrgOABXYoeia%2Bn5s%2Bv60yPaJSorjlNbU56WhPTyJUe%2Fu%2BVtIjlUi8eYCe5w15KyrpH8fsiUPfUBM1%2FjYGkKZMR54bgHiHppMSjxrJcIizPzhpsqaaEL0vQ%2F4qcndE8Eduq5q3laarGd2G9anpfrOMMIjm3PDcWt5Mb2HIg5sE5Z3kiXr5FOan2YoTj1AbvtXy0mNYQb6GFKko8C3vaB3z2RopRrgk%2BTOTog8mVvkrTLOPzeeX%2FG8EyFkjr8QM5K5RwBM5GWt5QUGeTpIHW1hlDHUOEtCMD71nNHADz%2FHM%2BgiMH92KbsFO4s5732qHF2%2B0dspltjLfr3Ls9s6sgqaA73VORAcFBNDghNwcxrvOXtq%2FcuOES8TBy4fEzg0wCgkY%2FHfl6iKBQ5wRLdYGl3yFgEtraXYkhMMzE%2BLwGOqUB3fqcUTV1ncn7lSjZKI5yVeCnuSR%2FG9blMJ6dVvf22uAYXVdcYhT%2BSi%2Fx277TmOzJKvIDLqk8%2FhBLG9t79FflHmQNMUpWfMEy0iFSiIcJYATvsfxeWuyVv0Bzf4hHGlKIOg3YNnYRkBzmELY9Y6QhILkUo2kUS5zBqBperqtqc8b%2F1qHf7soI85bQogwdX9P13gUREAE2CS7JSgrj8CGpJgGU0Yol&X-Amz-Signature=0ea114ff06130921d06e0a45a59a08ae82f104d764c8e11d82ce57e3e3f2e5be&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XSNWBW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXS3iCsMEtjE4AYTjGyvOmM%2FhMTS1bCRuBvckEh5rwcgIgDjtxbxb2ft9Xq8F%2B2YMPBjEQ%2FtU4qT68GU4xCrF62owqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6Fgxu9eE6Rup8hDCrcA0bmRMINLMnH9V1%2B0%2BpmXomsgVPGkWlvtTadVZsi98Pp8PhXAdiUyGHwbxcHjoTk1MEn%2FAMiQhuGrTdmkMSuW48P%2Ffoo7gishJ5q018e631bu8UUSDT6lrH7yy%2FGQ%2FmINItWotxjPNujqT4QPtH1mZ2tjDqo1tf76AnDMNt4enCwcAFWOr5GJR6AJ3Ucg6eEqX5QJeiBZ0KE5vATQHUqNiUJ2H8PHAkrgOABXYoeia%2Bn5s%2Bv60yPaJSorjlNbU56WhPTyJUe%2Fu%2BVtIjlUi8eYCe5w15KyrpH8fsiUPfUBM1%2FjYGkKZMR54bgHiHppMSjxrJcIizPzhpsqaaEL0vQ%2F4qcndE8Eduq5q3laarGd2G9anpfrOMMIjm3PDcWt5Mb2HIg5sE5Z3kiXr5FOan2YoTj1AbvtXy0mNYQb6GFKko8C3vaB3z2RopRrgk%2BTOTog8mVvkrTLOPzeeX%2FG8EyFkjr8QM5K5RwBM5GWt5QUGeTpIHW1hlDHUOEtCMD71nNHADz%2FHM%2BgiMH92KbsFO4s5732qHF2%2B0dspltjLfr3Ls9s6sgqaA73VORAcFBNDghNwcxrvOXtq%2FcuOES8TBy4fEzg0wCgkY%2FHfl6iKBQ5wRLdYGl3yFgEtraXYkhMMzE%2BLwGOqUB3fqcUTV1ncn7lSjZKI5yVeCnuSR%2FG9blMJ6dVvf22uAYXVdcYhT%2BSi%2Fx277TmOzJKvIDLqk8%2FhBLG9t79FflHmQNMUpWfMEy0iFSiIcJYATvsfxeWuyVv0Bzf4hHGlKIOg3YNnYRkBzmELY9Y6QhILkUo2kUS5zBqBperqtqc8b%2F1qHf7soI85bQogwdX9P13gUREAE2CS7JSgrj8CGpJgGU0Yol&X-Amz-Signature=e93d2307c1042be6611eed8876718ee5695b5fdb22f0a55a7aa2910794384ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LPR3BWD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjX%2B180XVtMgbewJrk%2BtL6t1aBjVdPi6eAmHZPrraVawIgX1MXmm92Vd%2FCuZjDroAsVZ092Wand4cSA6QkIaeEgOUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZgKDKzhiLnHwuZxSrcA0kcrF%2FIjvlGsa1FdT7CGTXsz4e%2B3Z3U6qTcKVDaw57%2FFL%2FyEmtkBcVYOSbCRnx8Fnv1GlUOqwWI1modojVxzBuQpR8TcePHa%2FM1nPFl10FFE9asdSDU8OZKGEr1JhuMNJyltpaUn31PUw%2BgwT8IblYTXcydi7H4BBc7om%2FjVI7kNPgvY1kahi3ksewggWaEee4t1r6%2FhNADDKZ%2F0l1S9xXU5rakA7OR0Pydo47Y8905bhe5pwlp60OYcHQji5WdpDqDGFQqJw0hXQxMYF21%2BnGrvfoCEosPlP%2BDe9sLLzzFrkuCsI%2FrmJ%2FmCgNtnwNQHXczrjdxlQw%2FDOxs%2BMw5lqtxQ0kAFbDcM2geZRwgxZIM%2Ba6HHKkYMsONz%2B67ERewL8IbdPU%2B7cB4T8loJrQ26hqjSfftKkEUC8DVYYWBNqeW6NuAfvvXXoJOWXCM5HNvUeP8YQtMoKfn8G7cqV8lx6G1OevFjYCpPagVrxaqZhhkgd50Kq0CBx5jhjQJvxS9sUQkSKZVdu4FvJcJYrE%2FnlbhsFLcTxo5UEGy%2BSj8VK0KsiopwGiubtY9xtL%2F%2FPsDAhBP79zFeAKjT4eIq%2FbZTefWygIbnAnGCgx8Kg5UBv67bCGGdw7Nr%2Bmzj3L6MJHK%2BLwGOqUBJiIIGZjmjSyPjGNm745IG6rERmwPCQqNwqUGKnRwRMbiPtDfqVkzjQwi92%2BrzMePA9GZtTW8HG78nJMQ6xZHk9Ik%2FAk2hi6WE%2B9YvJlPA9vgTDi9YqpJY28rusIPNuucYqD1s%2FD3G5r5Pvb9rQqkfGtVCajr1oMTGsVPdrynPgiIxB7fA1PmpJPNeZjsQbAI7hHvopj3SrNobG3zLL3cAc45uOR%2F&X-Amz-Signature=9451464a20f2fc5c297afb8cf09dd461df0e92bd4ac7b633ec8caf01e824b907&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJKAIXH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd6%2BY9RXKXuk8ghk0Azo7J%2BuEy8l5RRmSQ6wK0mpFhoAIgY66gvIR0RKz6KsGTAxO1YxkmzE5AtVMGrLriOGfkC%2BUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDitwxWRhwkCgg87CrcAzf1IrwHfTqyCqWwdSj3z7lbPqArExBEZnlI0ugk0d2mH8IbDPInKarOQQ%2Fb8Rs5Zdmmre%2F1oaBi49Gw4XPdhsDa9hx4aysEiVryPob1cQhF3wfUWcrijW5UO99mRxk3J%2F80WxRYRnbhzvXU3NsoP033LVawCNudVmdMCR0Nh4ieUg%2BAtMnzgkNKBF5B8SmykAcsvLZnIcUggJyprggtcvBO8%2Flj6UE7hTosYIc%2F07o14mRr56PF5UX6HV3FCUJJBfjDgZazq6wveTxuRuC18K4%2F0XMHEH4NKzdcGZYDIf6ZA4sBV4F0gh7UXlZDLfDLfYJ8mmKsU8guM0jVp0bjqu4mj7FoAwpe5zkJVYB44NYQu03mYQOxb9BLwVjzKdjfn7hJ59ZSW2uixFBCkaFwli1m5QbNzNUlIoWsRiXfotf6y95L0YvKe0gMYo6c9WLuAtKaJJU%2BzXDzbO1b9VSWWXMez9J%2FNAd%2F0OEp3R%2FyGL1V4hpIC0nrunXHpfsnuwxs81v7xA9nQWONSt4Wxq6cELphumW5Ch2UuTqtuN3uJa9NDSUsBSYOojEIPBOzgAIyksxDjShhDrE1vP06%2BBFVf3eu%2FRvKyYxWC6ddm7Jgs%2BZCGdkATamv7cSGdQYvMMbE%2BLwGOqUBbfO1Bscsi5VQcjpEJQ5B0SMcFIvRkuXLBoewUHRnsa0aB1dnYK5dI9m8hdDo6Nftu83Rs5dRwhzDUtGqiEYRuTqYxUYD5aQy87zXc0jjdUGvPCHtMNpQsV3RWg5ADosJyoTNKvn2uVcL4egTNNXQT33ntRZpzzsmG92yLwuE1YUlIPeRsNFPwzLLqE8uLnyeJW1Ymi7Ic%2BFdniR2OYRgTJxavwQQ&X-Amz-Signature=21476657b96c6100adfe42332e55cf547f91adf9fd2bced6c29a523bfbe2c1d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XSNWBW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXS3iCsMEtjE4AYTjGyvOmM%2FhMTS1bCRuBvckEh5rwcgIgDjtxbxb2ft9Xq8F%2B2YMPBjEQ%2FtU4qT68GU4xCrF62owqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6Fgxu9eE6Rup8hDCrcA0bmRMINLMnH9V1%2B0%2BpmXomsgVPGkWlvtTadVZsi98Pp8PhXAdiUyGHwbxcHjoTk1MEn%2FAMiQhuGrTdmkMSuW48P%2Ffoo7gishJ5q018e631bu8UUSDT6lrH7yy%2FGQ%2FmINItWotxjPNujqT4QPtH1mZ2tjDqo1tf76AnDMNt4enCwcAFWOr5GJR6AJ3Ucg6eEqX5QJeiBZ0KE5vATQHUqNiUJ2H8PHAkrgOABXYoeia%2Bn5s%2Bv60yPaJSorjlNbU56WhPTyJUe%2Fu%2BVtIjlUi8eYCe5w15KyrpH8fsiUPfUBM1%2FjYGkKZMR54bgHiHppMSjxrJcIizPzhpsqaaEL0vQ%2F4qcndE8Eduq5q3laarGd2G9anpfrOMMIjm3PDcWt5Mb2HIg5sE5Z3kiXr5FOan2YoTj1AbvtXy0mNYQb6GFKko8C3vaB3z2RopRrgk%2BTOTog8mVvkrTLOPzeeX%2FG8EyFkjr8QM5K5RwBM5GWt5QUGeTpIHW1hlDHUOEtCMD71nNHADz%2FHM%2BgiMH92KbsFO4s5732qHF2%2B0dspltjLfr3Ls9s6sgqaA73VORAcFBNDghNwcxrvOXtq%2FcuOES8TBy4fEzg0wCgkY%2FHfl6iKBQ5wRLdYGl3yFgEtraXYkhMMzE%2BLwGOqUB3fqcUTV1ncn7lSjZKI5yVeCnuSR%2FG9blMJ6dVvf22uAYXVdcYhT%2BSi%2Fx277TmOzJKvIDLqk8%2FhBLG9t79FflHmQNMUpWfMEy0iFSiIcJYATvsfxeWuyVv0Bzf4hHGlKIOg3YNnYRkBzmELY9Y6QhILkUo2kUS5zBqBperqtqc8b%2F1qHf7soI85bQogwdX9P13gUREAE2CS7JSgrj8CGpJgGU0Yol&X-Amz-Signature=c08f75ad491b478f10f411187e9dc26576af2cb7f64aeefa744ca7b5c26a2587&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
