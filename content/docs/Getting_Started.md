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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5PRBMG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIBwdjgP33GDuq0xzPSGiNB5r9LWyWHbpro5kM5%2B4NTeGAiEAlc8%2F0l%2BXTvw9Ac33AgQh1iFF94k3IPSXtvZpqVjDz88q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGo8RoqW0Z4Hv%2FrZzSrcA3gocKvnLPUF%2F1rPJd7H6IUeOX72kRX61LpoUddAS%2FcP9BXt4BF7meNhO5VX7V4XW9LAknW8UPYs59A7txXu5Z6hywyKlE4JDEb8cOgrqF%2FlmwXouu69bwrfMIn%2FDTJKVvCo94HVKWzfSMaoaYGtAVU6VtR99o%2FkOhyt7WxvUHnksWBmnQ9E%2BawiGUh9JLPsbbebOFWdytqZSVuX6m4LSZTBsxzHGP5tCP8f5hMdsrFH9z0mwSpPMIuH3b97J4PldVrz6Ufyx3SDBk0Jt9H9nq4DnZfygmhUgB3dqf9Kb4Zsb6aEKxjNfteUnAbdMQMHWi1ZQuJHpynor6tOpa5VeU%2FlehzRqi1ofnzID50BDJw5lV2KXI7XAR2RkIFakKNQ75wtbqjyfRwGgE4VmoeXEBobAXnwGLEs9L%2F10j9ACOeSdY8OxbJeSGd19Vpl0dPdrvesOkFeSnbY862FWXRO5EyW1go7JVqPsx1L%2F3th10C4BpswyI3%2F93dmZPziAeft25KuOLXa%2BSr9YyHAl4LDwkGgSTg%2BR4bRYWHvj2IGr7Ca%2BtG7yw4byyDSZSmswOmokjgrwFyTUCQn4LybFSJoYToHP268pJ0mcWexM2kd5skdr%2FBDNMbU1pWgd34tMIWhwr0GOqUBFc4h7cDUy0LXgtne2jvsyvzptg9%2B%2BSq6aLUSlkJfBjNXMn04%2B3%2BI8IZj6brMJ8inkoaMbV2ENZraVldLbQyQvJwJ667MDUxrvD2pzmevy%2Bt3fU4IyZxLjsbzfYUQLch7OUKUIh8bE9cFsTmMSytC5%2FPY0tH6oFvc8zNIiQFzIqhwm7P6FJ%2FP3bLmh3FXkCFnCNl4JuwRhAmmzuvDszdb00Dcp1hZ&X-Amz-Signature=684740d6833e74e9cc5dd05bb63a4c2ca077e81a75c0e9c4d21c635bf8777287&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5PRBMG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIBwdjgP33GDuq0xzPSGiNB5r9LWyWHbpro5kM5%2B4NTeGAiEAlc8%2F0l%2BXTvw9Ac33AgQh1iFF94k3IPSXtvZpqVjDz88q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGo8RoqW0Z4Hv%2FrZzSrcA3gocKvnLPUF%2F1rPJd7H6IUeOX72kRX61LpoUddAS%2FcP9BXt4BF7meNhO5VX7V4XW9LAknW8UPYs59A7txXu5Z6hywyKlE4JDEb8cOgrqF%2FlmwXouu69bwrfMIn%2FDTJKVvCo94HVKWzfSMaoaYGtAVU6VtR99o%2FkOhyt7WxvUHnksWBmnQ9E%2BawiGUh9JLPsbbebOFWdytqZSVuX6m4LSZTBsxzHGP5tCP8f5hMdsrFH9z0mwSpPMIuH3b97J4PldVrz6Ufyx3SDBk0Jt9H9nq4DnZfygmhUgB3dqf9Kb4Zsb6aEKxjNfteUnAbdMQMHWi1ZQuJHpynor6tOpa5VeU%2FlehzRqi1ofnzID50BDJw5lV2KXI7XAR2RkIFakKNQ75wtbqjyfRwGgE4VmoeXEBobAXnwGLEs9L%2F10j9ACOeSdY8OxbJeSGd19Vpl0dPdrvesOkFeSnbY862FWXRO5EyW1go7JVqPsx1L%2F3th10C4BpswyI3%2F93dmZPziAeft25KuOLXa%2BSr9YyHAl4LDwkGgSTg%2BR4bRYWHvj2IGr7Ca%2BtG7yw4byyDSZSmswOmokjgrwFyTUCQn4LybFSJoYToHP268pJ0mcWexM2kd5skdr%2FBDNMbU1pWgd34tMIWhwr0GOqUBFc4h7cDUy0LXgtne2jvsyvzptg9%2B%2BSq6aLUSlkJfBjNXMn04%2B3%2BI8IZj6brMJ8inkoaMbV2ENZraVldLbQyQvJwJ667MDUxrvD2pzmevy%2Bt3fU4IyZxLjsbzfYUQLch7OUKUIh8bE9cFsTmMSytC5%2FPY0tH6oFvc8zNIiQFzIqhwm7P6FJ%2FP3bLmh3FXkCFnCNl4JuwRhAmmzuvDszdb00Dcp1hZ&X-Amz-Signature=445195aac9c9dad60701951464e840eef1315f8992dc17d6223adc084c8573e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLM2EDAR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICzqbmHmEoERez3ClLHxA5Dle5Wdq8WNRtpCBzzHJaC%2FAiEAr6nlqJ5f0uooPQfpqwIKEQkgtcWYqdSyZvdDcVwGI%2Fcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNbVuEnV8QT5wJUPiyrcA4cqZ9Pw6%2BLprSFv%2FNq6w6l0cgSqSou6Nu16LzLij2qs4eiYKPG1ShzbvzguTrM2C04aglscod%2FL838NJYF7pNJdGKEnk5M6VCAEjRXc%2ByAfC4YfzsAvMUGO0FBjoZUN2%2FDoiD7wfZl6CGVJjmJx%2F7Wll56SrQLMcdgbPeEfc94%2FhS59xaBdtezpuB6XyNg1q%2F3XVpw3PmIyrv2dxAcCazC%2BWE1Rx8zvUpuu4R9YZz3ikbsljP9iP%2BKI0mUUuFgHqxHoMIyI1T0TI%2BfW4rUqwOHk6iN5CqNpnAiXe0Y%2FXWW%2F56JVbme%2B38Hf8P6VFk2fH%2Bhzle2zk6pTfvuxEZJ2LoIxQujB5wb%2BrpikvTMODzleZRuhDXdnpFZQFM09GZ%2F2OvvQ5w3dAD9CgUVh0h%2BhY2USwmJqCZw0J6Q3ZrufaYPtR5r%2FYxns8718vII2FIvZ6MrUm40MMm9FgsCy6r6%2FY3qiu0Y9Oud9cnQayxtTzQu5izxa59MotcbE6laYXy3s4tIkn03LrHhkvniThX2zRBCQZD8fLYcCEHW0nhGaE08mCR%2FDHeijCEunTSCHJS4GR9nOjbOahPEs64LIxPN8PIxOmU0cyLh10R%2FxuJzTaM5X5aDs7GJ%2FnSDPkgWoMN%2Fswb0GOqUB2JKyTXuvAwB3E%2Bl8oPDa9tn6rwYl%2BVpS8humA3f5nNphQUEB3RAlAuGvLX4wbz2%2BMBOMCSCrBn%2FPKFxp%2Ba9D90r4iqidXGiO9vYoYj1x5kunqDprrs%2B6aBP8Ek2e8rL4BLKyfzb8nPpnOHLF88%2FtAvCXFFwNn9whXCwn6lPM8sdlxbaHzRFFUx47YcrLDUQXkvgxkqS5qZX0zRUUxg3tOI5FJAHY&X-Amz-Signature=c4a12392040fe99bf61443fe684295e7c4dc2719b8f78c7664488210818904a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JIT5D5B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBYroeCKMmRWOAK0%2Bvp11Grr5OSWwziy%2BMiAUb%2FNMFSnAiEAq73oIh26y6ZfphV8pmvGj1CXf%2Bg59JlAqpBGCjQarrkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDezThrYcn%2FfXizqPyrcAz9MMyfeTdAjo6E%2FJkl4LwsOEidVxq1zWEB54A3%2BvGTXwTpbjNuV98%2FJYpKdv8O9UpzBQ%2BIHS6ctbXaka7kPiRZxQVpMFV7xkD2A8jQJCc4%2BNIT95lBv93eFf7DLY5hX38YGrW%2BK%2B%2F9DluoP%2B6FhXWG%2F4BfHuei3a1dECiGoHMwVPeim0WbooYL6Zbmmhd3%2Fbip8vpJF9eV%2FU5g7IscdsE6SIYmAYAtkKqwb8rWCLs%2FJtWxaXBAkw%2BN8dPxOGCDLiT3S62Oeid8PP9WQCF3Fa2CwVVJALK29biXGDlyJ36VSecP40YJTHXiVxgl3HmMcAyb5bXKZOJciJyoVQQJK3OTK%2FsDqOqJW2o8UYeG%2Fuz1PDnDz8Gib0pD%2BNTA%2BDCqxwcKZWTT2z5a3yx%2FdYBZ2FHiOpUfpN1s7%2F5gR5P8eJWAfSaxNnFhO0MNCXkj7v1YzlAMTw8jTrkXKWMbNUtU6aqxQBZpxeFl%2FRHysWfVNygpCGJRXURPcZcW79ytOjpPBB12xXy8aLkM9hnYWTFtMNA2CIYaQQ2HV8s5oUED4hrQGajVOJNshUTAH%2FKUAn7%2FrfD2te6nQWzFvJJRUfbdeL36WMj%2B2cZ0o7%2FiYrP0o06BpoS70PHWmFmAmbJ2oMNfswb0GOqUB%2FYqzTiRddZXlQFtQ9icXKcQetzvINVGKSm2KkcW3a4VbOxKqbaVK0SOk3SSDIBFfAzkqevRq4ZKEn51st9%2FoLq7rAAEqsk2fXgKN6X57xU3wxGO5l%2Bvk%2B5iTj%2B0WaUB2ZHW8HmxbR3F6OHc9gWdZOXYF7IyNCZ90x%2FrU3eSZv1F%2BQgNJbU8V2J4ReFZGUBaPcuLM56aXcy7pvO8ZuZ3V2q6HWIol&X-Amz-Signature=27ba317700a041ef73683389083efb60c84370129a1cab9ec37627e72ce7ccaf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5PRBMG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIBwdjgP33GDuq0xzPSGiNB5r9LWyWHbpro5kM5%2B4NTeGAiEAlc8%2F0l%2BXTvw9Ac33AgQh1iFF94k3IPSXtvZpqVjDz88q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGo8RoqW0Z4Hv%2FrZzSrcA3gocKvnLPUF%2F1rPJd7H6IUeOX72kRX61LpoUddAS%2FcP9BXt4BF7meNhO5VX7V4XW9LAknW8UPYs59A7txXu5Z6hywyKlE4JDEb8cOgrqF%2FlmwXouu69bwrfMIn%2FDTJKVvCo94HVKWzfSMaoaYGtAVU6VtR99o%2FkOhyt7WxvUHnksWBmnQ9E%2BawiGUh9JLPsbbebOFWdytqZSVuX6m4LSZTBsxzHGP5tCP8f5hMdsrFH9z0mwSpPMIuH3b97J4PldVrz6Ufyx3SDBk0Jt9H9nq4DnZfygmhUgB3dqf9Kb4Zsb6aEKxjNfteUnAbdMQMHWi1ZQuJHpynor6tOpa5VeU%2FlehzRqi1ofnzID50BDJw5lV2KXI7XAR2RkIFakKNQ75wtbqjyfRwGgE4VmoeXEBobAXnwGLEs9L%2F10j9ACOeSdY8OxbJeSGd19Vpl0dPdrvesOkFeSnbY862FWXRO5EyW1go7JVqPsx1L%2F3th10C4BpswyI3%2F93dmZPziAeft25KuOLXa%2BSr9YyHAl4LDwkGgSTg%2BR4bRYWHvj2IGr7Ca%2BtG7yw4byyDSZSmswOmokjgrwFyTUCQn4LybFSJoYToHP268pJ0mcWexM2kd5skdr%2FBDNMbU1pWgd34tMIWhwr0GOqUBFc4h7cDUy0LXgtne2jvsyvzptg9%2B%2BSq6aLUSlkJfBjNXMn04%2B3%2BI8IZj6brMJ8inkoaMbV2ENZraVldLbQyQvJwJ667MDUxrvD2pzmevy%2Bt3fU4IyZxLjsbzfYUQLch7OUKUIh8bE9cFsTmMSytC5%2FPY0tH6oFvc8zNIiQFzIqhwm7P6FJ%2FP3bLmh3FXkCFnCNl4JuwRhAmmzuvDszdb00Dcp1hZ&X-Amz-Signature=33dbdf6bdc8b4c2fcde5467fedc2da05928ccc6e6f1a137fa859ff22eb871236&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
