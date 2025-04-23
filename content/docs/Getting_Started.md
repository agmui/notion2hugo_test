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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKME34U%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH7lZbhHaS67H0%2Fb3nDpbCu4M14mMmOKbcF%2Fu%2BaFwCoFAiEA1hz7Rt0aqdT1l%2FTWegv3P16cScXEhEPuTAEzd7CsUJYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQNKpK5XMySqJ2XACrcA5iuHaZC1I77On8tS4wmIqEasX7h70BhxdilGkR%2Bci4kuKqF4E5dWHU7y2PQGvA8Og%2BsNhMdZPn4Tc%2FGLQKVBB1cJA5R3U1QKbgOM3%2BtWIdHppjLgbvgEYAFBcH4xL5Wmso6NtP4n3K%2Fy129GjBiTKllmkldIaO3svEGTUkOm2P0m7pMwoM0K3Z4nl0QYkmSL%2BjZXiFJgWJgNTzutm5GZHsIBG21CuAqvfKtCZIkiYayzQwXzwfTlGXqw%2FOeK6YmaBnvRnd%2BJZlWYp%2FI02uTZwHf0g657%2FTuXwONGgnkhwMhygOsKHYuG6RvcYMeFzs6pAKqyAMuiAS1fsdzZPM6Zq06uNn7EaAYlnmI%2BrFpmT7pbqRI6kgdB8752RyPSFLQJd5Hs8suSgzgVs6ehNWbeu3tl69CQmojWWs4M8gMO1bPwmG2l8hmMzo0NGmoej1UHA1znsgUJrThe7QrGX6GSGiu85a4OCa8Y%2BbpmSt1awvc0bUqEO1i0lI74njF5e03dlauliG%2FHydeRU2AnE4YqCZA2Ife6IcC9yNN1radBmUkCSg4LK97iCYehlcVJviSN0lsN%2FyQ8Dagk9S6wNFxCpq22BHlYFidVDRrPIHppGA4Ngk3Pu9E%2FbXPxIChMIPYoMAGOqUBcqRe%2Fxz9%2BlC9ZE%2Fv4WfZxBOJzHCJC%2FfZfq69Ngtxmmesw%2FbuP2DCrtnQGUI%2BUy%2BdQ4IyfD5TtjErR8AiyKEwgXsDg2XwWuldLa5BlSnhBzRpAHh%2FVOEaCLLB5sRLNcHChuArAkUH32MhtTu3%2FKCGaEcLPBrUmx%2FCoOJxch7wgrEo7kuJYCoYmCyLA5%2BAGNtci5CINJjDDgK6g%2BV5Kp8ocVDzfvX%2F&X-Amz-Signature=ddc2b7d50e78fc730f629a0fe49ae640fdc5184655c8789b308b5d21ae6733fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKME34U%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH7lZbhHaS67H0%2Fb3nDpbCu4M14mMmOKbcF%2Fu%2BaFwCoFAiEA1hz7Rt0aqdT1l%2FTWegv3P16cScXEhEPuTAEzd7CsUJYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQNKpK5XMySqJ2XACrcA5iuHaZC1I77On8tS4wmIqEasX7h70BhxdilGkR%2Bci4kuKqF4E5dWHU7y2PQGvA8Og%2BsNhMdZPn4Tc%2FGLQKVBB1cJA5R3U1QKbgOM3%2BtWIdHppjLgbvgEYAFBcH4xL5Wmso6NtP4n3K%2Fy129GjBiTKllmkldIaO3svEGTUkOm2P0m7pMwoM0K3Z4nl0QYkmSL%2BjZXiFJgWJgNTzutm5GZHsIBG21CuAqvfKtCZIkiYayzQwXzwfTlGXqw%2FOeK6YmaBnvRnd%2BJZlWYp%2FI02uTZwHf0g657%2FTuXwONGgnkhwMhygOsKHYuG6RvcYMeFzs6pAKqyAMuiAS1fsdzZPM6Zq06uNn7EaAYlnmI%2BrFpmT7pbqRI6kgdB8752RyPSFLQJd5Hs8suSgzgVs6ehNWbeu3tl69CQmojWWs4M8gMO1bPwmG2l8hmMzo0NGmoej1UHA1znsgUJrThe7QrGX6GSGiu85a4OCa8Y%2BbpmSt1awvc0bUqEO1i0lI74njF5e03dlauliG%2FHydeRU2AnE4YqCZA2Ife6IcC9yNN1radBmUkCSg4LK97iCYehlcVJviSN0lsN%2FyQ8Dagk9S6wNFxCpq22BHlYFidVDRrPIHppGA4Ngk3Pu9E%2FbXPxIChMIPYoMAGOqUBcqRe%2Fxz9%2BlC9ZE%2Fv4WfZxBOJzHCJC%2FfZfq69Ngtxmmesw%2FbuP2DCrtnQGUI%2BUy%2BdQ4IyfD5TtjErR8AiyKEwgXsDg2XwWuldLa5BlSnhBzRpAHh%2FVOEaCLLB5sRLNcHChuArAkUH32MhtTu3%2FKCGaEcLPBrUmx%2FCoOJxch7wgrEo7kuJYCoYmCyLA5%2BAGNtci5CINJjDDgK6g%2BV5Kp8ocVDzfvX%2F&X-Amz-Signature=faad326af89c37153a43701cf9ac9a055207002df7f2223b78a98364b34f3ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZMTR565%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIER3vYacocMuLB%2FmQeWm04tkPilFCFO8wxgdddVZZ1YzAiEAnRm7CLBu1zYF4CCjWLVPYd4l9PQTj%2BhXnCiVp4w7%2BEMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU1oWBL3K0F%2BzsYiSrcA3loPXFnHYlDhkjm1HkfL3Hxc5ndFJxF3h%2BEvdGR21bulEcylDFofxaFLkgeS3CbW%2BT1Trhypyh9YbPj5lQDDPadtASpWG4ReUg5RKNuEy1fiQnyxhoqrhHOpw07dVhSLnzxGJ1iOdL3x0PiakicqP47ZwLEUZOamw%2B0GPqB0qqRv7%2F0P%2BkTzvdKJCEzJtcAhb4h5eQwZbZ4oUyzmny%2F%2FaANby7FjGCG%2BYLSHgIzoTgZazsQEL0mgGCUM7FBtRuLXJ%2F5KsAP%2BId3v6RF4Ew99Rd8HrI19SM0VTve7eOT4xgEcYFywh%2FIN1RGbH85w037MnSVCQdPAbB3neaU6yRNgw8ADWDk5hFwTUJtAXi9UGOfQN428DXV3oRYHK3SUoeaGo%2BtXrOAa2RGD1h7R1jm6gKo%2FM8jSsAlwmFXGmaqwW4j5l2ZTCuKrkEID3WvL3qLUe4lQLnNE7Q%2FZ%2ByawySSGzQeMvORVPYHMP5XvqMLdvtFIoRuhcJWqc8nIVAbwlZgI1H7IeJVG%2F5ux9vIJ1q%2BLOqX0Yzs26wTTGQ8OhG7VUSC8Si%2B0MmcOtVDUYlwBoM9osCbSw7F528u4TnwGNrIa1U14MUGl2b1OhhvRA7yLQhUYmOo8hphRzKioF98MIbYoMAGOqUBatzdrg11grxOpxHdkb6789W%2BWNEQLQIRbBMmpg23UNK5Hz59gFvRX6GKV2Jl4%2B8u3CZ9WkdgdfB9OjKXEz5PENPHRfD4qahQPnFj70CjSJWortjT76xTJG3%2BOBKlzlf9idxQ26LFTTuR0KJkriRvxavPxUZej6weyGBBlLjwdcqnI8BM6bUAW77qQdbuY%2Fn%2Bz0fAQU71TTi5e90Q0uzrFSi1ca%2B1&X-Amz-Signature=4080d6984c19e0b917b3afac47045a8ef3f877600f51e684254a9b7d3869c6d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UNTBWFU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID3%2FIbyTuNF4rQWK1kQzF3J26LhGRp%2FWhP5XG1TFQWCPAiEAwzpPCDejW%2Bpvmx9gppghqe15lLo14sHgF3b4pYvB%2BP4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGSGcaO9nm4KIxtpyrcA839fE%2F4%2Fc5iH8saQJ2kBYW%2B2oJNyIgDYtv5JCXkjljYzeTogqCVMbi5KGu15yQemei1GPBvX5rIbnseujTCOgSMUpf2Kzg%2FTLFQ%2FIjwdC%2BHeUaJwgHLTtJ4iIHQTASp%2Ftahq5D8zTqIZad01hPf7VKQZWD0QiDcYd6T0FVpmfqeh394IDUHi3xFTRy3Rji43fnGwS4oEXnuAj5PW8UtlJvtCD7q75Ct4RD9sJxmFqYRyzvSW7713PXGJk5j%2FrgRtNlNE3%2FCA%2BMeEzGcCJ%2BVQ6FQ653vLXJ%2BGNBjhIPOkYhFAjRjm0rYJpDgdSP%2FzSRf5Zw6sApg99%2Bd6%2Fuj5YTU7iP79LT8NW0ec%2Fk%2FAFhYOg2JcwCK%2Fz9dAC4LHPIOD005lTX0mykefuUD1qJrh0iOGXYehY%2ForrOmzSj3rpOX2%2BiJgF7jkzHAorrmiD0pPHV7eRT9YPDYsDLoRVq9uh5tHFJgzky3mB1BhaRbqFXQVQNtLGpMBF3IdSduPRTNuhwCrPhvkbSMmV63QGnJjR1j%2BMy8o1yLWHir66mFXIh4XlNztLjgqw5wOUmEB58lR6wpe78cSvw4j6jHdQoNOuw7NoDaz9FetjncojIoTva3CL8KhHd%2BRVofbFQA2atnMJDYoMAGOqUBxPxgAtjbCpBgp5Y4VNrV0tFV4d7yyyMNGEyqlJuDkXprhxoGJ19KHqdJjfzzBnjzLu%2BKfZM6%2B79WaEX7N8injb7YayO7zQxV6T%2FKTk5loX1%2FYNeJd6QrYSMLkRvGQIKNQdoi96Bi3zgCN7FXgpGlN%2FwaLYB787ouPMtMvU3os8ciykoR837wYlcV06DapshMv%2FyBMQ4VyyJLeKUcmNAgqYhBirvZ&X-Amz-Signature=7822c16874b252a4e6f544b941701893651e41e666442bfa728c207245f10915&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKME34U%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH7lZbhHaS67H0%2Fb3nDpbCu4M14mMmOKbcF%2Fu%2BaFwCoFAiEA1hz7Rt0aqdT1l%2FTWegv3P16cScXEhEPuTAEzd7CsUJYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQNKpK5XMySqJ2XACrcA5iuHaZC1I77On8tS4wmIqEasX7h70BhxdilGkR%2Bci4kuKqF4E5dWHU7y2PQGvA8Og%2BsNhMdZPn4Tc%2FGLQKVBB1cJA5R3U1QKbgOM3%2BtWIdHppjLgbvgEYAFBcH4xL5Wmso6NtP4n3K%2Fy129GjBiTKllmkldIaO3svEGTUkOm2P0m7pMwoM0K3Z4nl0QYkmSL%2BjZXiFJgWJgNTzutm5GZHsIBG21CuAqvfKtCZIkiYayzQwXzwfTlGXqw%2FOeK6YmaBnvRnd%2BJZlWYp%2FI02uTZwHf0g657%2FTuXwONGgnkhwMhygOsKHYuG6RvcYMeFzs6pAKqyAMuiAS1fsdzZPM6Zq06uNn7EaAYlnmI%2BrFpmT7pbqRI6kgdB8752RyPSFLQJd5Hs8suSgzgVs6ehNWbeu3tl69CQmojWWs4M8gMO1bPwmG2l8hmMzo0NGmoej1UHA1znsgUJrThe7QrGX6GSGiu85a4OCa8Y%2BbpmSt1awvc0bUqEO1i0lI74njF5e03dlauliG%2FHydeRU2AnE4YqCZA2Ife6IcC9yNN1radBmUkCSg4LK97iCYehlcVJviSN0lsN%2FyQ8Dagk9S6wNFxCpq22BHlYFidVDRrPIHppGA4Ngk3Pu9E%2FbXPxIChMIPYoMAGOqUBcqRe%2Fxz9%2BlC9ZE%2Fv4WfZxBOJzHCJC%2FfZfq69Ngtxmmesw%2FbuP2DCrtnQGUI%2BUy%2BdQ4IyfD5TtjErR8AiyKEwgXsDg2XwWuldLa5BlSnhBzRpAHh%2FVOEaCLLB5sRLNcHChuArAkUH32MhtTu3%2FKCGaEcLPBrUmx%2FCoOJxch7wgrEo7kuJYCoYmCyLA5%2BAGNtci5CINJjDDgK6g%2BV5Kp8ocVDzfvX%2F&X-Amz-Signature=279e1ce53ccee8ced4b0b00c7ad5b834f73c3dc3d33db97eb6b0958bcf7040d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
