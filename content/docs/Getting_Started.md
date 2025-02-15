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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET5DQMN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA6fRatF8hwaBBNfDHdTpx%2BJ8QyGnUF43%2FZ%2FEwWhxzjeAiEAveN2acEbUBFzR451Ss5VWc408R3CdRMftSOQTCr5Av0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDnVoh4M1TxzRD9jFircAyqVYyp57BxOr6PJe9i%2BESN7l7cllNU4SnHhqwpwFwKJElP4URJtDQdBC8XQ8dj4TBjqIMmPIgF1z3gG9cQXNrahreXQxK6WQkIpxfHWXYT5H8vL871dmDHAzjT0LzHaD%2FcfANVB0FdpNRCdKksA6YOlwGlRUoehCt34GLYdXrodtBldi%2Fj0ABQp9R1xVl8C%2FB%2FZdtutIfcNMQWJEoa%2Fjc4Q8CH%2FezwBYyhvhZFwi2DYa7bSBDZsTO9vQPdgUplT2NvN0rERJM4SayZNCmo17s%2FfGvDmi9521Dz1tGQy18qzF4ZNQ3dDZc6ReBFn%2B4ABZc8RUsN3HdGRKa%2FWTZSZ2wieoCAj5lC3DvJpsGA8Q99%2BXXOY5ztq8OrB3RxaUzDG4k96bpMlM389jy3YMwKEGklOzfCFYGmuSfNQsFu5cgFpM7ULl9Plza2dWuH2wN3QSjvR4nMgk5OJuOuPEysSN0ripViWv98zq8AsEhimJTkTJ37d7PaXzDVq4ah4JkyGXcqXitesQpZOLHv6Pd2bi8LQ97K6UWyKILySq9qLYPHfCfByeulh9b0LTT%2BqxItIZwJA%2F4F6zRRhEq1EBHkuvXQAVHej3lM3a8HjEmdJs1nmzEn2HLPZj%2FwMnoM%2BMOXFwr0GOqUBJNAAfxQMV%2FAv0l6iQHOqZMawvYka6U7Ay1L6FzbwYFAwez65iaFtRUk3gzIyUeQDYq01fL5q43nn6BO%2FwiY%2Bl11hBwZL8WKDegU6BdMTtbIO2FZOK97XIJPlVhTfMXymA1wLzVvo%2FXkEYUQFwKL08o%2BUM7tvsUe63tgNzqt0xKK33z0Tp7WcBLJwWigazWH4Wsbh6CkDojbOzg6wyEcsesS%2FI%2Fll&X-Amz-Signature=92516869347887f34a68bf36e15212ff69314e074cc7f2792e093010e5f60fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET5DQMN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA6fRatF8hwaBBNfDHdTpx%2BJ8QyGnUF43%2FZ%2FEwWhxzjeAiEAveN2acEbUBFzR451Ss5VWc408R3CdRMftSOQTCr5Av0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDnVoh4M1TxzRD9jFircAyqVYyp57BxOr6PJe9i%2BESN7l7cllNU4SnHhqwpwFwKJElP4URJtDQdBC8XQ8dj4TBjqIMmPIgF1z3gG9cQXNrahreXQxK6WQkIpxfHWXYT5H8vL871dmDHAzjT0LzHaD%2FcfANVB0FdpNRCdKksA6YOlwGlRUoehCt34GLYdXrodtBldi%2Fj0ABQp9R1xVl8C%2FB%2FZdtutIfcNMQWJEoa%2Fjc4Q8CH%2FezwBYyhvhZFwi2DYa7bSBDZsTO9vQPdgUplT2NvN0rERJM4SayZNCmo17s%2FfGvDmi9521Dz1tGQy18qzF4ZNQ3dDZc6ReBFn%2B4ABZc8RUsN3HdGRKa%2FWTZSZ2wieoCAj5lC3DvJpsGA8Q99%2BXXOY5ztq8OrB3RxaUzDG4k96bpMlM389jy3YMwKEGklOzfCFYGmuSfNQsFu5cgFpM7ULl9Plza2dWuH2wN3QSjvR4nMgk5OJuOuPEysSN0ripViWv98zq8AsEhimJTkTJ37d7PaXzDVq4ah4JkyGXcqXitesQpZOLHv6Pd2bi8LQ97K6UWyKILySq9qLYPHfCfByeulh9b0LTT%2BqxItIZwJA%2F4F6zRRhEq1EBHkuvXQAVHej3lM3a8HjEmdJs1nmzEn2HLPZj%2FwMnoM%2BMOXFwr0GOqUBJNAAfxQMV%2FAv0l6iQHOqZMawvYka6U7Ay1L6FzbwYFAwez65iaFtRUk3gzIyUeQDYq01fL5q43nn6BO%2FwiY%2Bl11hBwZL8WKDegU6BdMTtbIO2FZOK97XIJPlVhTfMXymA1wLzVvo%2FXkEYUQFwKL08o%2BUM7tvsUe63tgNzqt0xKK33z0Tp7WcBLJwWigazWH4Wsbh6CkDojbOzg6wyEcsesS%2FI%2Fll&X-Amz-Signature=d4ac6aac5d66be20c75011ffcf8b0d3b17998245514e7f1a0297d974e1fc3416&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCOHATB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJEMEICHx9fxMGv1BbxDYe0Ep%2Fr9nW2tu8rFzmaqN6tbh2EImsCH3ho%2BT5Tmz0OROChnWi7yS26PMOX2lqXU4ZmO0mhHBkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDL2VEUg2cRwA1R1WQCrcA0VBXHlgPiCgMH0Qb1XcIEJYmKBbhRcRlBnCvazB7yYhMSSrdCRQZGSTbMdJgke4t3T65TG%2BVsmBaePKgzyXAX24iCY%2F5SS%2B02h9gO4M92SFao9NjFsj1XlHn7odXJXdgMNuMFjg9FP50r1bfj42Lu4ieG0du4ACXSHU1mRPrL756hAoh2OkdlBDD1%2FoWqFw34k5Dxo1w4zoWILrcWIWRMpVNGaLhrqNmhyD6OB%2F0doCmwx1I2lRESvMvnolC8PZa7hsJpRLtFlizxPXuxReG8uh0y%2BewRxZcvBfypdlh%2FX73tJe2G6IEWkUm6epZ72pAu8%2BxZauMwJVV%2F3QGvS9puAWJ0pYTQTYjloMm0Tpjxp2BhXBHEQpspwXGecuggh37EwHoHZkP36GtVntkLAfnub%2BA%2Fdi1oKwKL3gsD1cgZ0OPkol9AkwiPrH8OedzoQ6bG30CCA5WQorhEDCXBi4UTyjHNLf3e1QV67wgP1liY0DxiW6EycEE%2F9u5QfvrFC4kX9gxofY2htkcM27NQ%2B6IawNrgjh5ZFIhVfbUxWLOnot1PZqxR0vV5D9azLxjIkgbPpAZV7mu0fT32jSJ7%2BeW1ATnq0Xxbzfk16e2%2FSjnkOlHvgNplJ%2F5jGqLgF3MJLGwr0GOqgBivGag269GayhwMGTgPRU%2FBhIZ7m2OM15QPLvavAH4eKnC%2FmWQvukXZYdbNOvzus0C4acEN857GVokm4HAl0peCSt7mmEo2MP5bBGNGfNenA9tQOegtZoyWRj4ulBhzg0%2BZCcuBZe7Ap2fPav4MWUHJh%2BTRi%2B3hZWSP4uR1W3dy0uEbqOITQpbwdj1rUArWFT2AzezlQrg6XpehTCki89IwtWnmmPSo7I&X-Amz-Signature=ccc69f6c65ca45b09bfd1574c9a5ae8a7e2a7283731d2d1ec71b65316a7eb94a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MJTAA6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBvua9xxgM94LWHX1TIymWtFJy6cAdzfw8rnqib9qWN3AiAc7QCQa2p39%2FYqxTkFlS5d66WhNcaWQq2AOoG0HBUWJCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM4OTdWJDQKNPAeK33KtwDZrE7R8q7ZJErESzbljUII5ivZMAq4ZQgGHUPJ2SMDDMuVZMu%2F5rs8zFEsLuf4mqaHRyyQfQVBQriHMtbjWzEDGWaH9ABfMzW6GEDmTB156inXnN4wvkBagc1FJgnk2oUVaAR0ENGNXPJDk%2BcMim8f62DvnEEY2UNQkqaCXYKGZN%2F35IPEeuquVVymPYtMeR8Qc2OdS9vdqAGawKLpdMqr22XGj7ttBatTLrbs%2FQ30d1t%2B5RhSv33sudr%2FQOCXiqwMZsb%2FzDQEvQcu3v%2BZHj7JDyzmwFPKT2v7CDoxU%2BkXTwGbImaXFzlubN%2Fl4H6tPYmjPdhpQm0rnGq0NA3oy0p156WOk1lLY28jLXW9hj5Ur%2FbAfowCflUiM18Z4BsAXDYGgHkUCtT6KXgPFRWw9wzVbSeaP%2BEKE3xyC29d1yH9NIU3AtM75aMrK7hLl3oM%2F4o7GDAZ5Hv9QuDy6n4bhauEixRn%2FF0B%2BKz%2FWNFu36AXPx1W03JBbwoNWkq7cvHexU2azensPrubZslaNfRnco0EHne8JkejqVW1UaeCTmr0Bp0AVb%2FwuBhn5SwFVRfpXUlHCBCXhNb2%2FIz%2Bza%2FhmwxAH%2Fk%2FXoC%2FjHIVp%2Bsuwdn2GMQtKzZzWctjF6FW0wwqMbCvQY6pgFTW6Rj4klpH8GTx1%2BItslqJZnuotHtW4oulkiADUy17OUIx6YvJFRbrENszIxATTak3qrunX%2FVOyeWZlE8d5Ajca2uMZaG3ORRwtGdtat8REn9Yt21%2Bjd15ONVgQuDQh%2B3e%2FPuop%2BBbjNoQPW44Kef1bde2vOozjCdn6S1i7JGDjLEobtPw3pzkzlVJiQEBT1DVXZdQ7ih42X4YbQVnmsJIQV8Nr7e&X-Amz-Signature=ceda9ac3bac8619eb754739927e25e1a6ceff7c86832429255ac88c6a9a82d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET5DQMN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA6fRatF8hwaBBNfDHdTpx%2BJ8QyGnUF43%2FZ%2FEwWhxzjeAiEAveN2acEbUBFzR451Ss5VWc408R3CdRMftSOQTCr5Av0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDnVoh4M1TxzRD9jFircAyqVYyp57BxOr6PJe9i%2BESN7l7cllNU4SnHhqwpwFwKJElP4URJtDQdBC8XQ8dj4TBjqIMmPIgF1z3gG9cQXNrahreXQxK6WQkIpxfHWXYT5H8vL871dmDHAzjT0LzHaD%2FcfANVB0FdpNRCdKksA6YOlwGlRUoehCt34GLYdXrodtBldi%2Fj0ABQp9R1xVl8C%2FB%2FZdtutIfcNMQWJEoa%2Fjc4Q8CH%2FezwBYyhvhZFwi2DYa7bSBDZsTO9vQPdgUplT2NvN0rERJM4SayZNCmo17s%2FfGvDmi9521Dz1tGQy18qzF4ZNQ3dDZc6ReBFn%2B4ABZc8RUsN3HdGRKa%2FWTZSZ2wieoCAj5lC3DvJpsGA8Q99%2BXXOY5ztq8OrB3RxaUzDG4k96bpMlM389jy3YMwKEGklOzfCFYGmuSfNQsFu5cgFpM7ULl9Plza2dWuH2wN3QSjvR4nMgk5OJuOuPEysSN0ripViWv98zq8AsEhimJTkTJ37d7PaXzDVq4ah4JkyGXcqXitesQpZOLHv6Pd2bi8LQ97K6UWyKILySq9qLYPHfCfByeulh9b0LTT%2BqxItIZwJA%2F4F6zRRhEq1EBHkuvXQAVHej3lM3a8HjEmdJs1nmzEn2HLPZj%2FwMnoM%2BMOXFwr0GOqUBJNAAfxQMV%2FAv0l6iQHOqZMawvYka6U7Ay1L6FzbwYFAwez65iaFtRUk3gzIyUeQDYq01fL5q43nn6BO%2FwiY%2Bl11hBwZL8WKDegU6BdMTtbIO2FZOK97XIJPlVhTfMXymA1wLzVvo%2FXkEYUQFwKL08o%2BUM7tvsUe63tgNzqt0xKK33z0Tp7WcBLJwWigazWH4Wsbh6CkDojbOzg6wyEcsesS%2FI%2Fll&X-Amz-Signature=09856382bbf8ea469c2175ce2a8a59ad50d0bc469507e035c88f51825334aa65&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
