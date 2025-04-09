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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666APJO3XD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC4dc0CESWVL8wQYre8XgsOigwS3T1IOpqkt3lP0fD2xQIgBHr0qj2sHBblBkUg7XCvqU9OqfWsFPclXm%2FMqfzCBHIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQtZwbZzrQPZnfK%2FSrcA1oFgeO8x1y22YbaKZkJp6Czqb8pCs1VbQXxv4RaQ%2FcgRyTkhbaJ1s%2BHo4nTOQ%2B0rDNCD9CnpaQySW5VVwZUv9YkiB%2B2FpEw16ewyIy8GzhQiUpqGiPifUEGpIwrJnTC%2FawPKXM%2FFXRZrgVQNx46AOnzLRmuhg5KIlryN23m9bDTez3vhDD%2FL%2F4w44JpjcYmgt%2BVXVh6IChqIWQceIe6MjOIDAj5iBYJNCXpulTwfotjv1Qqfs1ufkpxc5MjumSNrbrPkbm4IFZtMPisjsGTiCuldKflcztCsRd4Qy4UEPzEAOsaHwM6itAQoPwHnOK9uhqW7CbJ%2Fj%2BKkJiO87mkH9gMUJIIOInVBjHVVEE5I3Aheg7Xdg4u4sjO6leCmdb%2BncIyJiF4oJCDeZYrbfrE10Dj8xN2Oxzkxyj4tnATUOZK%2BJ83p9cq6om7rGb27PYCpRbot0rZeeNMPA6xD%2F1k8DNNvk%2BJv08maepxnFP8a9Fn5zGORSodoQFBRFnHH2OWOVK3GyalDajH%2BYj1jhvBfoIvU6svWNKF87WY%2Bk%2FXNLRKM6xznX7Yj%2BMkn1TC6%2Bf%2Fsdo70YieN8cXmbiLeoQxPpcqYb2eyn3d8joYiAsBC%2FHb%2BmP%2F4M6QPEjQiljxMLCX2b8GOqUB%2B3d%2F0nTwtqnzhwkRdgmykb2m1GcX6XFT48cjHGuSjLZ7M%2BNA5MovolUkxZpIu7svP8Lnemt%2Fzhq%2BHGICWDQmeda3M5Ept4IbNyAggHdxWRsMmL%2B4ckz29TMmvUjr0sOv%2Ft4yGpV494QF7OWYmjIySyjOOUgGE3pmAX9%2Bxkyu%2BY8HhU%2B%2Ff8x%2FFEZZt3n4T3zh8mRZ1oMeFDw07FWfGDZA7SbteQdi&X-Amz-Signature=959643a53fdf6142299af2ff94cbcba3085256e1e929c00872787828a146edc1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666APJO3XD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC4dc0CESWVL8wQYre8XgsOigwS3T1IOpqkt3lP0fD2xQIgBHr0qj2sHBblBkUg7XCvqU9OqfWsFPclXm%2FMqfzCBHIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQtZwbZzrQPZnfK%2FSrcA1oFgeO8x1y22YbaKZkJp6Czqb8pCs1VbQXxv4RaQ%2FcgRyTkhbaJ1s%2BHo4nTOQ%2B0rDNCD9CnpaQySW5VVwZUv9YkiB%2B2FpEw16ewyIy8GzhQiUpqGiPifUEGpIwrJnTC%2FawPKXM%2FFXRZrgVQNx46AOnzLRmuhg5KIlryN23m9bDTez3vhDD%2FL%2F4w44JpjcYmgt%2BVXVh6IChqIWQceIe6MjOIDAj5iBYJNCXpulTwfotjv1Qqfs1ufkpxc5MjumSNrbrPkbm4IFZtMPisjsGTiCuldKflcztCsRd4Qy4UEPzEAOsaHwM6itAQoPwHnOK9uhqW7CbJ%2Fj%2BKkJiO87mkH9gMUJIIOInVBjHVVEE5I3Aheg7Xdg4u4sjO6leCmdb%2BncIyJiF4oJCDeZYrbfrE10Dj8xN2Oxzkxyj4tnATUOZK%2BJ83p9cq6om7rGb27PYCpRbot0rZeeNMPA6xD%2F1k8DNNvk%2BJv08maepxnFP8a9Fn5zGORSodoQFBRFnHH2OWOVK3GyalDajH%2BYj1jhvBfoIvU6svWNKF87WY%2Bk%2FXNLRKM6xznX7Yj%2BMkn1TC6%2Bf%2Fsdo70YieN8cXmbiLeoQxPpcqYb2eyn3d8joYiAsBC%2FHb%2BmP%2F4M6QPEjQiljxMLCX2b8GOqUB%2B3d%2F0nTwtqnzhwkRdgmykb2m1GcX6XFT48cjHGuSjLZ7M%2BNA5MovolUkxZpIu7svP8Lnemt%2Fzhq%2BHGICWDQmeda3M5Ept4IbNyAggHdxWRsMmL%2B4ckz29TMmvUjr0sOv%2Ft4yGpV494QF7OWYmjIySyjOOUgGE3pmAX9%2Bxkyu%2BY8HhU%2B%2Ff8x%2FFEZZt3n4T3zh8mRZ1oMeFDw07FWfGDZA7SbteQdi&X-Amz-Signature=1e2f1af54719975c924caffc5f305bea7aad53003d988705de9009e9dee7a38a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTWULYA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIH8DLfOxxQqb8%2BrW%2BSi4doPo1%2F%2FeFqFbFit5fbjChFdkAiAkTK4ignrlQuz8hLseAMOudU%2F3ZK4WCFBPmhlI148bvCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS6USIUTT3Rc%2BtjkpKtwDhMeOrs6rxHX0CqHHS8JROHoB5ImlgTgu0egwtlC1MNlSnhsa2C2zN3RvO3EBAG0g5kBlHITllMJFlzC2JF5A5yIcxi7%2Fv6uZCX3%2BGNMAqLKUYSMRI%2Bh28h9Z3H9cKBm5n34XWot9XaCUCkdiJ%2FGe451P6L79Pc9ozV%2BUzzRV5wUNt8HM4kfbeW%2BzvtiFXlJ2na3lpPa8E3P12Y4%2FW6mIFny9aZE%2BY%2BukCvhHwDP6e30uy24V924phTXGppSf5SVGzRn4IEGnkgJ%2B3N7BVklzojSBHAb39pXsB3XyScdjsnHnkLHY8udE1WIaICNUqnXMT45R3DgYtvdO2QFhebTIjvYvAXbgsHeD%2F9QMOq4wF%2BqsPP35MI001U5MH6c97k%2BBdZKENNZKKnPKfONasJGk%2BUDM%2B9KEaU4oMsbY4ttU3vXaJWWJW2VpAkuz3IxmB1TO1n3HeYGYVbdmyToZjD5pACOm35GZGnK%2BXmjDhbddiS8Nf%2BgjX55WBqDuVitDyIhlYTIdGWvTlsP7oOPi3AcOfK0xNZriITq0AKMPPzr1dCQnISbwpL8oc2cU74PYxeAShQG057B9%2Fh80tmmUtRJvKPzncQaq5rTI1cxHuoJELeEkLcxGXIhVYP7LJAIwrpfZvwY6pgHve8cfBfz7lxVyzq9kxxaZASBO7tOWNmAji01UALw7RJu41H8jaAwmhJFB5OSIgA1wp0ntS73xOynpTGf%2BjN4HXAW6bJgeaUUuQ%2FXtGYRnX%2BsAPPZIyMdHiaS2iy01n4n9Inddm7DRC2ZnsB6slt1mYWFg1GLO7BJDCIW1DxzYgtHVeMw1Su63bbMBf8LvDCDmRgFFBKVP92yJauHrD9zv2gAn1P05&X-Amz-Signature=a7d114e85a2a8bdb2631eee803b2ed758d8db7664d8110698b4a4fd257a4fd0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBJ7RSX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHvVqCazzHnyG6MYfWkthQcg4stNnZTXaZcM1VKnOWAhAiEAr2PiLN5c8HTEIWYl%2B6BZJl1typ47DCJDW%2Frjr255HNoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3b67VQiJE3QhyxrCrcA%2B4Gihlnk3ex7VSHq99g9j1gKY7QOfatRj7OUU0%2BCwP3w6wXQoftu1dBzd6ytkQI%2BQ0Y0gPc8TP3IDXXaGR39tJay5zE9AFUN%2BVu3s%2FgPhe5mLRdnBTY7PiNEsGwiywbZzuqMNi%2FVqBKbQCkHqASqhjZ27Xg58TugaCgSvRW6CnELind0jgon07gQ6CA8xx5Q52rMGH%2FG%2BYwQjhqKB5oMhGg8A3xsEyGvHr%2Fr6n5NlD6LPF0TdcN%2B%2BRRiuEmpJM1TdOnCV63W1rBRUeHKQ179rbrRpYlMHkrz2iNW5j07p6bGLLBJ9uQQqSs%2FXrdikBuILR5cw3Lq3xb0WmUypbCKTE1tcxhx2lyDmHUMQUg9%2Fe8r1Il%2BPp7xsCKcWqYGlkBJ47uck01Pz1aYE8nc0G3P8tA%2BoLWzXADKUdp%2FeW2U9Kb3fMM5VAb9IYHh2Uegr7KKESTwlYhdSyx78dNEIQNZj6qrBLahomqZVA6Zux8iGdWOWxx9MpSZ4VAi3%2B0ghu7QAKyLmG3dJqPkiYPWBBX9KS9CqXrQRdCdeyrGTiEpelQgez5TKp7HPgUCmZuJanEEpJOPJutvq7YiiHHEcvGJpfosBk0IsaRNfRQWA%2FpHjL59kPSz6R7%2FwCCyy6lMMyX2b8GOqUB16wnrfJV5YwuMFJM7vxb8J46Uu9N8%2BMQScDZB2YDmO9FW5KqIQk32q4iMlC1xRA3iRSKGfmp404E1ozlIxu%2B3qteCTxpT4WLgF6GuYZbCTiE13oSdU%2FReyOtTLNup5dUlZU4Ew3a2cZAqWqV31Dtf3%2BE9aJgrQDQP3JFHn4AlHg73xmvFO%2FjDNMTz5QF2dU6LsWS2IaEU7bIrwAP9V9AEPWNvjQK&X-Amz-Signature=d96fcc19e9311d56780fff68a116bd450fe5be20953e619d0a856bddf0c2c089&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666APJO3XD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC4dc0CESWVL8wQYre8XgsOigwS3T1IOpqkt3lP0fD2xQIgBHr0qj2sHBblBkUg7XCvqU9OqfWsFPclXm%2FMqfzCBHIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQtZwbZzrQPZnfK%2FSrcA1oFgeO8x1y22YbaKZkJp6Czqb8pCs1VbQXxv4RaQ%2FcgRyTkhbaJ1s%2BHo4nTOQ%2B0rDNCD9CnpaQySW5VVwZUv9YkiB%2B2FpEw16ewyIy8GzhQiUpqGiPifUEGpIwrJnTC%2FawPKXM%2FFXRZrgVQNx46AOnzLRmuhg5KIlryN23m9bDTez3vhDD%2FL%2F4w44JpjcYmgt%2BVXVh6IChqIWQceIe6MjOIDAj5iBYJNCXpulTwfotjv1Qqfs1ufkpxc5MjumSNrbrPkbm4IFZtMPisjsGTiCuldKflcztCsRd4Qy4UEPzEAOsaHwM6itAQoPwHnOK9uhqW7CbJ%2Fj%2BKkJiO87mkH9gMUJIIOInVBjHVVEE5I3Aheg7Xdg4u4sjO6leCmdb%2BncIyJiF4oJCDeZYrbfrE10Dj8xN2Oxzkxyj4tnATUOZK%2BJ83p9cq6om7rGb27PYCpRbot0rZeeNMPA6xD%2F1k8DNNvk%2BJv08maepxnFP8a9Fn5zGORSodoQFBRFnHH2OWOVK3GyalDajH%2BYj1jhvBfoIvU6svWNKF87WY%2Bk%2FXNLRKM6xznX7Yj%2BMkn1TC6%2Bf%2Fsdo70YieN8cXmbiLeoQxPpcqYb2eyn3d8joYiAsBC%2FHb%2BmP%2F4M6QPEjQiljxMLCX2b8GOqUB%2B3d%2F0nTwtqnzhwkRdgmykb2m1GcX6XFT48cjHGuSjLZ7M%2BNA5MovolUkxZpIu7svP8Lnemt%2Fzhq%2BHGICWDQmeda3M5Ept4IbNyAggHdxWRsMmL%2B4ckz29TMmvUjr0sOv%2Ft4yGpV494QF7OWYmjIySyjOOUgGE3pmAX9%2Bxkyu%2BY8HhU%2B%2Ff8x%2FFEZZt3n4T3zh8mRZ1oMeFDw07FWfGDZA7SbteQdi&X-Amz-Signature=f6d212b9b4ef4df11359ea8e14feebfcfcbace9843425cd938a551d75e3505df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
