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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZNHWM2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1RtoWzqwemI%2FdLF2xdSPtDHPAK2e7DNg0S%2BszLhTCiAIgBDSI%2FFTn3B1IzFERAHgT74R9osfwiKgQs4gY0BXV5GYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4SyTzAjP8We6kgAyrcA%2BYMtiDpjNiRhJZvRHUU6ZKRPQK6zPFWupHQ4KMDz%2BSWayavRUCIEpA8Il128zyOEMX74kZGj6pqfH2DspEKixcT6En9HxhAQMvFHGRwNAEaTnJIVEzM8ySfWC%2F0%2B7WI3ZWbuw0BLsP6Y%2FZwhyLhNNIaHpJ1d5j6qwXtBOLIJx06E%2FheicJPydoEWeMT%2BYYY%2ByaaHO68Vd4Hf0P8F%2BgtAkgAFCTeNkBW7dyB1E3FjBGdcgll35mUuH%2F9%2Bn%2BxEKS3wyduaoie0haokB9oi5pK3Zaiw4HuUB2X1tcjpH1siu%2FYZUTHn3osIsPdY99oujwQh8TkiW4%2ByNcpfceQbb11olDPz2LffpccBW4zR8J7xnAZCEYAitNV4xxm9hRZ%2B%2FUFYvvEczvjGngXF%2FAXDlDYlPx%2FFiMiPJe7ZlDM%2FMi623BlPK6DUByBop9U2OMgKTzQsHoPxDFIEyqs1%2FUU4iAIFb5X9IKg%2FiFLgjRRQtiTP%2BQKHLF4WqpC88FDhuwrGu5qkbJVW%2BhV47%2FGDWbQoOnY1uYb3EtHKQErciWaowB5poFgrxlTvFEPlAAONw8%2FhYfYWTSB3I5XrXGbw8Z07tXQHI6wfB958hdWv4EBKiIdHy01twyzE8SlwULDVFt0MNWlrb0GOqUBsGN%2B5yvOPnofpF6x02zFKgsmUPRrhEZu8adkIDJhhj45U7qU2lgs7QLVfh4aGw4y8Vg6GZ%2BbWs3x%2FxoRHoLBiDrSlOMrpu7TJxOwk7mQ1BgllGOmwZ4izmM4hR1%2Fhgw7xzQmIA8M57z9vfKEaHN4Dv%2B0xfUK5oLpVY4sZx5ZQF2lL8UD6es36NEoAeYBDrjnUpNIWrvgihIXJ9vhZHk1hPPghnv1&X-Amz-Signature=56accd7a07e9cdd646a30eed4744e390eb935f99d55bfe624515b5f65547dc27&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZNHWM2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1RtoWzqwemI%2FdLF2xdSPtDHPAK2e7DNg0S%2BszLhTCiAIgBDSI%2FFTn3B1IzFERAHgT74R9osfwiKgQs4gY0BXV5GYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4SyTzAjP8We6kgAyrcA%2BYMtiDpjNiRhJZvRHUU6ZKRPQK6zPFWupHQ4KMDz%2BSWayavRUCIEpA8Il128zyOEMX74kZGj6pqfH2DspEKixcT6En9HxhAQMvFHGRwNAEaTnJIVEzM8ySfWC%2F0%2B7WI3ZWbuw0BLsP6Y%2FZwhyLhNNIaHpJ1d5j6qwXtBOLIJx06E%2FheicJPydoEWeMT%2BYYY%2ByaaHO68Vd4Hf0P8F%2BgtAkgAFCTeNkBW7dyB1E3FjBGdcgll35mUuH%2F9%2Bn%2BxEKS3wyduaoie0haokB9oi5pK3Zaiw4HuUB2X1tcjpH1siu%2FYZUTHn3osIsPdY99oujwQh8TkiW4%2ByNcpfceQbb11olDPz2LffpccBW4zR8J7xnAZCEYAitNV4xxm9hRZ%2B%2FUFYvvEczvjGngXF%2FAXDlDYlPx%2FFiMiPJe7ZlDM%2FMi623BlPK6DUByBop9U2OMgKTzQsHoPxDFIEyqs1%2FUU4iAIFb5X9IKg%2FiFLgjRRQtiTP%2BQKHLF4WqpC88FDhuwrGu5qkbJVW%2BhV47%2FGDWbQoOnY1uYb3EtHKQErciWaowB5poFgrxlTvFEPlAAONw8%2FhYfYWTSB3I5XrXGbw8Z07tXQHI6wfB958hdWv4EBKiIdHy01twyzE8SlwULDVFt0MNWlrb0GOqUBsGN%2B5yvOPnofpF6x02zFKgsmUPRrhEZu8adkIDJhhj45U7qU2lgs7QLVfh4aGw4y8Vg6GZ%2BbWs3x%2FxoRHoLBiDrSlOMrpu7TJxOwk7mQ1BgllGOmwZ4izmM4hR1%2Fhgw7xzQmIA8M57z9vfKEaHN4Dv%2B0xfUK5oLpVY4sZx5ZQF2lL8UD6es36NEoAeYBDrjnUpNIWrvgihIXJ9vhZHk1hPPghnv1&X-Amz-Signature=187eab7c0fa754deea9c7c20fe3cdd8374ad774d02409f9c3a888e2f83abeff8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ARXCIA3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAduOSmvoBwQIG5ARZEMOGxDuzZVHotFp3pXYWL%2B31NhAiB0xHzXfVgI6r2Oh%2BrOA99QkjnDxhFISCI00amXk7D2%2FiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bn%2BzG4ZQxlVPAdzfKtwDleboqY82d%2F1hjrnEfMeKg7qeNjMJ25VCbcaLFd%2FB0j9Dg0ePvefGgga%2FLxvv10aYTsL%2Bdd2iJiXO9cmHIVNE9ggQ8MiF2jFj9WZ%2FYSAeRhG%2FxdESxavhMp30aE6pHntiPbJaolLEnctSeASzPrKMMvoIqe%2BQKf7x5KWnAO2DTkb4oWV4rtLUfAMF%2FxCZJRi0EXd2Hx4qPA2iAD6JMyxnLi%2FXoN8lPZedLSemHYfrKwi7Ng3NlENTtXl9vE%2FoHaxnHl1Kob7migp33o1Q875te994wX7xoDTE3y9YRDkk%2ByuGyynVpTHag7KI%2FhmuANahC09Iyo668ugl0NOGirnF7zW%2Bw4ZF5IKn0hjCm8fR6kVUENSsqe00aJzlFzy5Ny0Sra7iTy%2B4OBQvvQRWF7B338EhY32eZLPCmWM3w6murhn4wSloBQ7V67mvOdB1uWxIiqBf9IFlUaSGxgiFHDfiB6EWu6ZUUDIfSADPnVBAHYzKjHJ7juXUpku4%2BRG5%2FsEW3SlxC7JRqMyoXjH6ayM%2FL7SP%2FNRX3Ld8VLAs4Ayxr%2FlE6LZifmum6pasTwwfks7HkyFJ5SPto0ah1Q7GlRKCFRdruZg18z9qE4IDJ7Qf4njTRnmnKTGxMMkGxmYw2qWtvQY6pgFy490bOONOk%2F3Umid7l8NwbiDcky3hTI9G8HBFeLXmL0cdldmwO4mrf2wrbbhsnZD3arwUKuFrdkKgkrWQc7oakezRl2slmhfOPneFNfJ%2F0X65FkpfYFWOrd1y7s4v1s1DcF7%2BgLkS7P9ED61BE1Wi8ZSiz9QzaKlYFVOWoJ68ye2vFjRHasg6BuIXhUySEpXaC%2FkFwZxCcoG7sRebu9DZ4VwOEN8A&X-Amz-Signature=cb811b5ea3e35f2d4deaa92f8ccad93a0b42316c5dc22c9e40b42e135f293506&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPWQNQA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBXhwLAwaSGyj5%2F%2BvM%2Fdo9xz1O30ti8ceIlE7UfjUkcAiBY0xEjTXXSqThY9%2BkiRzz%2BFTDnvFM37jMXfd%2FUykZ0%2ByqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0QcPIrqYadBE1zSKtwDD%2FI2PynKw1UVfBo6sy3XSmUWAxb35yh4w%2BuI5QVsiXgpoo9v8RA4%2FoJZz8c1Ppb3Vu6akM0Bb0KuhnZwoWecvSYpUh76j45Edm%2BnjMXYOE27eozARQKRZmIcxjQN0AUWrmbLbpZqsXNhf0M5kjWlGmqr3HwoSSQKwKwHh07jOHmhb1IGW5mGKpoSUuFsPgvKWsxBRGbqs6IXbjhWstR6x3elcfnIO9VVuvbZg5b6N4t7prch4ut0QMxKRrTitMuH9aYEatkwug17eJa%2BWhICbCOLn7Ww%2BfyvBw5jVr0zMYuIFpfRQl9ERhtEon0kv0UWwSjq1G2A0gBQFwBwMbrwuQ2tAhkRnYkZBqKaQXKXTL3NKZRKAYlZGceNh6eJbZTTlUP1Sr3hVchnDG6uowUGd%2Fy8RseIjS29rHFx2EkFymffDmjPpXUei4WtvdE1vrmpjuFRkd7nHvIjAg3ocu6dYoMl0EaRIO%2FF2LAP5TWBwxLIrf0Ue0P2QMaGjYf8t5iA6kxQnMFkTh3kbJSCb7B9QuChs7IF3r%2FyPn%2FFXFDX1FfB%2FZEWm48uJcK%2BENQ6SETwjxfVof%2FlJfrI01BuwbHPCBqBk52ZGK1MnkYHmo77aQl4NaCLrMNFeVfb%2BOsw9KWtvQY6pgHC9CbMq8bZ%2FMniV6aP%2BqxfpATDmFKV54pwsNZ3a%2FNYMp8wD6CG8Y43AgVEGGeUq88DRMr2bzzfCBa2LL5mMpEkLpJ1ReMNh2FTUBgaQ8hMT1CnF5J6g3G58XX44M5g1x6r9dXJhKuK%2FQeUG%2BUUVEM0iWOapgyrUksO60V10nL%2FPZP%2Bid7dlwAgvfZLtIlTfJ2j2d4QgWQmBm5ejLIHgkOCPtx3R%2FDZ&X-Amz-Signature=fee0f91d5411464b83eb3b8ccdcfefa99503feb0e975457cf94145922ddad32c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZNHWM2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1RtoWzqwemI%2FdLF2xdSPtDHPAK2e7DNg0S%2BszLhTCiAIgBDSI%2FFTn3B1IzFERAHgT74R9osfwiKgQs4gY0BXV5GYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4SyTzAjP8We6kgAyrcA%2BYMtiDpjNiRhJZvRHUU6ZKRPQK6zPFWupHQ4KMDz%2BSWayavRUCIEpA8Il128zyOEMX74kZGj6pqfH2DspEKixcT6En9HxhAQMvFHGRwNAEaTnJIVEzM8ySfWC%2F0%2B7WI3ZWbuw0BLsP6Y%2FZwhyLhNNIaHpJ1d5j6qwXtBOLIJx06E%2FheicJPydoEWeMT%2BYYY%2ByaaHO68Vd4Hf0P8F%2BgtAkgAFCTeNkBW7dyB1E3FjBGdcgll35mUuH%2F9%2Bn%2BxEKS3wyduaoie0haokB9oi5pK3Zaiw4HuUB2X1tcjpH1siu%2FYZUTHn3osIsPdY99oujwQh8TkiW4%2ByNcpfceQbb11olDPz2LffpccBW4zR8J7xnAZCEYAitNV4xxm9hRZ%2B%2FUFYvvEczvjGngXF%2FAXDlDYlPx%2FFiMiPJe7ZlDM%2FMi623BlPK6DUByBop9U2OMgKTzQsHoPxDFIEyqs1%2FUU4iAIFb5X9IKg%2FiFLgjRRQtiTP%2BQKHLF4WqpC88FDhuwrGu5qkbJVW%2BhV47%2FGDWbQoOnY1uYb3EtHKQErciWaowB5poFgrxlTvFEPlAAONw8%2FhYfYWTSB3I5XrXGbw8Z07tXQHI6wfB958hdWv4EBKiIdHy01twyzE8SlwULDVFt0MNWlrb0GOqUBsGN%2B5yvOPnofpF6x02zFKgsmUPRrhEZu8adkIDJhhj45U7qU2lgs7QLVfh4aGw4y8Vg6GZ%2BbWs3x%2FxoRHoLBiDrSlOMrpu7TJxOwk7mQ1BgllGOmwZ4izmM4hR1%2Fhgw7xzQmIA8M57z9vfKEaHN4Dv%2B0xfUK5oLpVY4sZx5ZQF2lL8UD6es36NEoAeYBDrjnUpNIWrvgihIXJ9vhZHk1hPPghnv1&X-Amz-Signature=4acd2f84057515bee3b68354f6579c84a12de50792932176725212215e698ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
