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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRW3IRHP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD38fbB30zmr1fvNyi1ggCM0vEVEuLkFTindcyzNNpprQIgDAMbiw5QylOF1xFj71gJV9hwE0QGIpylaTp3rUoVj8kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHdRrArD1%2Fc3wHmHLircA6LmCmynjaD09jYCE%2FcoXm7UyfqF%2BwG%2Bb4x5LIad%2Be65OCc3rV0IkUH49q077M6EScnbtHpqY4wWFmumYoMuTG40ds4Yw%2Bz9n82MM5rRPIf1VERDBGCksk7nOXodH5IYYJvh3U0zuMQvCffwJ9qfrpRfU3GrKDijXOTAVLqsjNUubHHWonmpRv6w3v9ltQE9e99rKS5grPOaMjwcwBeOPD2Fg5RiycmHx5rxsancypavxkHm3kAnJ3na62U%2FD6yCeHkcQkSL7Gd2aD6pHKlbuCtv8LR1wVWnaT%2BI4n%2F3e1pNfNqBhTXkX3utfi8JkXnVjgJUPc5wTBrEwqc%2BTgtYrjvdsN88c8Pvcdej4qUEJ6%2Fcf7nUiUn9lF%2By%2BGnJfvIx75lH9GqAPkwo%2BEy4PWU%2Fi32pESCgk1agNoSXbJVYgUbD3sarA8M6vzOeyn3yzJTfjI4eie9fcX41drJ8Sfcdgqdm6tUXwylDFVeGx8meWrO7H9HlCz9NbwT4beSzrAP82YrMb83TxdKVMSyLIsRbznOgTXN%2B23%2BHtVlgKtaDmjllOZ89UpXPV5hMFHUpHo127Jb8Wi2iwfbgXzmE1eLTzQqgMnOvOHPgeKg1omJ3mzHlqGuIxRKZR4Plqp3FMNSEosMGOqUBlaOpoH2FhxnnXPrVChKShmXfatMVKgUbp243xPzl0yuzid9gP3fsIYHAmQgU2900766Xz%2FMu%2BDrJH3tIMD2P2k1UzmkTddNR2KyfHTL45wrLgzlr%2BZcAVhZGZMEEzQ9jjUBTZG2AGIkJwvMvbBWwwAA%2Ba1It%2F9V0Th%2BJKtb0zhutfbjNLFeaR5S9hUWHP1DHNAKT2SYlOQC6cKn31sx1cgUVEA8W&X-Amz-Signature=16d3b9fb578b71a679c2bb23093d53e9144249180bf897a55e54cf3648bf59ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRW3IRHP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD38fbB30zmr1fvNyi1ggCM0vEVEuLkFTindcyzNNpprQIgDAMbiw5QylOF1xFj71gJV9hwE0QGIpylaTp3rUoVj8kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHdRrArD1%2Fc3wHmHLircA6LmCmynjaD09jYCE%2FcoXm7UyfqF%2BwG%2Bb4x5LIad%2Be65OCc3rV0IkUH49q077M6EScnbtHpqY4wWFmumYoMuTG40ds4Yw%2Bz9n82MM5rRPIf1VERDBGCksk7nOXodH5IYYJvh3U0zuMQvCffwJ9qfrpRfU3GrKDijXOTAVLqsjNUubHHWonmpRv6w3v9ltQE9e99rKS5grPOaMjwcwBeOPD2Fg5RiycmHx5rxsancypavxkHm3kAnJ3na62U%2FD6yCeHkcQkSL7Gd2aD6pHKlbuCtv8LR1wVWnaT%2BI4n%2F3e1pNfNqBhTXkX3utfi8JkXnVjgJUPc5wTBrEwqc%2BTgtYrjvdsN88c8Pvcdej4qUEJ6%2Fcf7nUiUn9lF%2By%2BGnJfvIx75lH9GqAPkwo%2BEy4PWU%2Fi32pESCgk1agNoSXbJVYgUbD3sarA8M6vzOeyn3yzJTfjI4eie9fcX41drJ8Sfcdgqdm6tUXwylDFVeGx8meWrO7H9HlCz9NbwT4beSzrAP82YrMb83TxdKVMSyLIsRbznOgTXN%2B23%2BHtVlgKtaDmjllOZ89UpXPV5hMFHUpHo127Jb8Wi2iwfbgXzmE1eLTzQqgMnOvOHPgeKg1omJ3mzHlqGuIxRKZR4Plqp3FMNSEosMGOqUBlaOpoH2FhxnnXPrVChKShmXfatMVKgUbp243xPzl0yuzid9gP3fsIYHAmQgU2900766Xz%2FMu%2BDrJH3tIMD2P2k1UzmkTddNR2KyfHTL45wrLgzlr%2BZcAVhZGZMEEzQ9jjUBTZG2AGIkJwvMvbBWwwAA%2Ba1It%2F9V0Th%2BJKtb0zhutfbjNLFeaR5S9hUWHP1DHNAKT2SYlOQC6cKn31sx1cgUVEA8W&X-Amz-Signature=254b592953ddea523ae158425895d642f9b5bb30baad329d4693b8c6ed786329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRW3IRHP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD38fbB30zmr1fvNyi1ggCM0vEVEuLkFTindcyzNNpprQIgDAMbiw5QylOF1xFj71gJV9hwE0QGIpylaTp3rUoVj8kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHdRrArD1%2Fc3wHmHLircA6LmCmynjaD09jYCE%2FcoXm7UyfqF%2BwG%2Bb4x5LIad%2Be65OCc3rV0IkUH49q077M6EScnbtHpqY4wWFmumYoMuTG40ds4Yw%2Bz9n82MM5rRPIf1VERDBGCksk7nOXodH5IYYJvh3U0zuMQvCffwJ9qfrpRfU3GrKDijXOTAVLqsjNUubHHWonmpRv6w3v9ltQE9e99rKS5grPOaMjwcwBeOPD2Fg5RiycmHx5rxsancypavxkHm3kAnJ3na62U%2FD6yCeHkcQkSL7Gd2aD6pHKlbuCtv8LR1wVWnaT%2BI4n%2F3e1pNfNqBhTXkX3utfi8JkXnVjgJUPc5wTBrEwqc%2BTgtYrjvdsN88c8Pvcdej4qUEJ6%2Fcf7nUiUn9lF%2By%2BGnJfvIx75lH9GqAPkwo%2BEy4PWU%2Fi32pESCgk1agNoSXbJVYgUbD3sarA8M6vzOeyn3yzJTfjI4eie9fcX41drJ8Sfcdgqdm6tUXwylDFVeGx8meWrO7H9HlCz9NbwT4beSzrAP82YrMb83TxdKVMSyLIsRbznOgTXN%2B23%2BHtVlgKtaDmjllOZ89UpXPV5hMFHUpHo127Jb8Wi2iwfbgXzmE1eLTzQqgMnOvOHPgeKg1omJ3mzHlqGuIxRKZR4Plqp3FMNSEosMGOqUBlaOpoH2FhxnnXPrVChKShmXfatMVKgUbp243xPzl0yuzid9gP3fsIYHAmQgU2900766Xz%2FMu%2BDrJH3tIMD2P2k1UzmkTddNR2KyfHTL45wrLgzlr%2BZcAVhZGZMEEzQ9jjUBTZG2AGIkJwvMvbBWwwAA%2Ba1It%2F9V0Th%2BJKtb0zhutfbjNLFeaR5S9hUWHP1DHNAKT2SYlOQC6cKn31sx1cgUVEA8W&X-Amz-Signature=e0d7aaa6ec7e3bb6edb2f880b0e2aee7f631e93485ef1fcd2601a2fe1c6110aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHH5ENMB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDkcdJv86hN0tKuwjo1Ik8b3NKYiz%2FWJ9NyvTEJcdDe6gIgbvQvB4htkB%2Fv6odMz8Jjrkot%2BtNOcmh%2BMnNySXF7PEgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHkGWLvndPMJWGhXnircA2u7TcrrVJunC%2F9IvQLhSl3vY8LjtrTIELx%2FGcLgc0LV6vRzvf0wKqahQKZJxQc9M8zL8RdlS%2B%2BxAc%2FEqks%2FHce%2BLWGAwDyui1IW4xHTJ4JrOe19fRtnB1IdHxA2ROjfFsAqnoO1T3mSjDAqnUSRSEsnfS9x%2BxMGDFXfG0MBW0VLXEGnEkAjWOlsg7IPyOGyAoVK0pi3r9LKU6x0LLNm21TcyLtOZth7b8BRwvONY%2B0fJqJ0h2rFTKWNwzBkTpumiRhfi%2FsNQRlRixJGLUVMRGDXHlmSfngGFLOSKxzJXVz6tqmCuGqQ9wkivZ9RuuxVUBL8z%2ByUGZPbWAUCSGVGxVV8XKDAtv8wpceQSqGU8iojWupslT%2FJDLQV3TQhHFhK7gZcTYO4FBmnOW9C2CWZqYE%2B3GsV9QuIHfgGbzsJnhIs3SwY5L6Os2U7hVoKXM4jU2rtkylwHZarWWtQhgyRaHwpfMcEDoJQLvzp8OKHb6LFHOmx9087cmOAR8l8I55cXssV9ZfxYfsuXbV0ke6gJoOdiRVce3BFk7oNvo60CSuabDoGCWh8wBW422t6lgXHShhf35FOP5L0ViCiR%2FhNkdQjFYMFbuD6k1etZLGtoKZhR2nE2b4LFQa%2BOIOAMN6HosMGOqUBcT9yrL%2FZbMu6VeBGHfuxPfm8PlQpubxRKn6Oqmm%2BCk87U3X4xHwZBxBtBrHyYrmFWtA%2FtZhyqaJikLpW2nTjhlacecIZJGc4F0RLtjbvoWmQw31g2zSG7NLCM0ZwFJGVlKJfUGeJ8gTWY7Dvi0Qs6r9nFdIU0nIeXtUbKW0OWksdrU5SatcS7nLeqzCrK5cL60gO8u21GkO8jQLmPIvv%2FzOzmT3R&X-Amz-Signature=f6ac16b5fedd5909757ad1c795d710a23d294659e61ea910e5843ffe13e93e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW34X2J%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCUK6uSeahHoPr1Djd6exkWgbkEi0lcciunjZrrGmFepgIhAN1FXyNxYrZFOXIAG4C%2BeoBtjaKKBNM8uG5pXPupy%2B8qKv8DCDsQABoMNjM3NDIzMTgzODA1IgzZ6eKFKoH%2BgiPA9kMq3AOofs7DZc9T0M6JdVvF6VjptMPEQ93yN8JiphvvCiV5AaTgpKqNzTw6GY6LJoHDZG8pMBn8T33Q62jeSAf0VzoAsp0IT4YimHOoskjDWwPIQyue1IpBHjwtnUJ0E%2F%2BS3ahggyNpvcGHCrUfvBAMCb7ApSWPy04JxuZxnUpD6RTt3WqAcnc3K3rUET8c4IUksOYmuIjme17sPsIHyb4W8TGTk7Ni%2FO1a4%2BHDGe2CDW573ATae%2F29rR149bLT8jVWFQcaJOa4BkeAyghOIUxFed5oolMkFyUfjJcdFnOaoDOqoXGF7rlxvMvc0YAwVy8c%2FX1918%2Bge7CvYWDF15K2HHmmMy%2B79jn7MTI%2Fv3iPEfsWr7c0LrvTeyWCRyhFLe0jjy97%2BIKAXZXEeBnJv%2FNIzyB509%2Bn788UOYQfbSd08Zq%2F61YX8eJ5FZp54RMyR9fA7U4mNx4hOdPIhpqXAXvFTnf%2FeHodTgiZqYlkSwtltTw7fahKqx5JdnAY3Y0Q13JT3%2BrWLuXKD9C1TD7s%2B2q97Kjj8AqdMnPhcmKAvPJJPmmVFEYet257lHitxaHWbbPAo7uTo%2FCDIdK8K72GNGH1ycW943EH%2BpSAieJs6b08hbDRfjXDzkVcppG7SiX9NDCYiqLDBjqkAe9CAr8QXuo6ght8mVPFeo40ADteTtb44Q4FDUxpZEvwI1thFU903UsnroC8%2FWKwZ1dKLNg9IaSM986mxkJm%2FgLv5VPoOmYTrXE0lj5pbenac7VB2JmI%2B3V0Mj321X8ghFwF922PysT0WmPfiesh%2F82jXVmURFjm2AoEfb8GRtJSJLlICdePLh5aYRbM4lM2Cn7c8ZEQQMjSWnMjjWDrRtXHvM0F&X-Amz-Signature=1d08548e47c797d1fdaf9a1a99a80ec77ff70649298934bc0a2d903c3224a5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRW3IRHP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD38fbB30zmr1fvNyi1ggCM0vEVEuLkFTindcyzNNpprQIgDAMbiw5QylOF1xFj71gJV9hwE0QGIpylaTp3rUoVj8kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHdRrArD1%2Fc3wHmHLircA6LmCmynjaD09jYCE%2FcoXm7UyfqF%2BwG%2Bb4x5LIad%2Be65OCc3rV0IkUH49q077M6EScnbtHpqY4wWFmumYoMuTG40ds4Yw%2Bz9n82MM5rRPIf1VERDBGCksk7nOXodH5IYYJvh3U0zuMQvCffwJ9qfrpRfU3GrKDijXOTAVLqsjNUubHHWonmpRv6w3v9ltQE9e99rKS5grPOaMjwcwBeOPD2Fg5RiycmHx5rxsancypavxkHm3kAnJ3na62U%2FD6yCeHkcQkSL7Gd2aD6pHKlbuCtv8LR1wVWnaT%2BI4n%2F3e1pNfNqBhTXkX3utfi8JkXnVjgJUPc5wTBrEwqc%2BTgtYrjvdsN88c8Pvcdej4qUEJ6%2Fcf7nUiUn9lF%2By%2BGnJfvIx75lH9GqAPkwo%2BEy4PWU%2Fi32pESCgk1agNoSXbJVYgUbD3sarA8M6vzOeyn3yzJTfjI4eie9fcX41drJ8Sfcdgqdm6tUXwylDFVeGx8meWrO7H9HlCz9NbwT4beSzrAP82YrMb83TxdKVMSyLIsRbznOgTXN%2B23%2BHtVlgKtaDmjllOZ89UpXPV5hMFHUpHo127Jb8Wi2iwfbgXzmE1eLTzQqgMnOvOHPgeKg1omJ3mzHlqGuIxRKZR4Plqp3FMNSEosMGOqUBlaOpoH2FhxnnXPrVChKShmXfatMVKgUbp243xPzl0yuzid9gP3fsIYHAmQgU2900766Xz%2FMu%2BDrJH3tIMD2P2k1UzmkTddNR2KyfHTL45wrLgzlr%2BZcAVhZGZMEEzQ9jjUBTZG2AGIkJwvMvbBWwwAA%2Ba1It%2F9V0Th%2BJKtb0zhutfbjNLFeaR5S9hUWHP1DHNAKT2SYlOQC6cKn31sx1cgUVEA8W&X-Amz-Signature=e1da48e6d7dd9d61fdabf1ef23c2fce8dc22ac1d4f34793e9615a0d223a0c71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
