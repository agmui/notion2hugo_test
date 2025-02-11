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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIQ65HG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2BdsqJDBfb1wDL8lFO4ZXDOh0NfHBMPsGm%2BkSe0r%2BQwIgTAKyk7Rd%2FBmjCTYNHa9f5p4dqlSzL6TdYMTBsEs9e7EqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcsEjqhHyu48YsAjSrcA73GogGJ48wQGr3MV8V0%2BlDBXxn%2BJiS9SiAjcTb6MZJ7GPEvGC8QWfel%2BCBTJl6HTIEIRqJUkII7dNnL5yPXULrdEguPYDqYKUbITfNEN0reipAwAghgONZkvup3rWfTl6z665QC9B%2B7eY7OQbD1GmNEKC3T2rycAVZYWWCxnKsp22IcY%2BC5qH0yGKq8DnL5MQvL6SRBvBIxwYvugVKKfc5WBIpVX6V%2BwVl1tHVlagbX0h5O2OWBNN25KPLkOIMUVdR%2FUD2sAm0dyLJLayYbzZS0Fy2zLL25lTtJcmFGA%2BE99e7Lm9CyAxi0EQdHkabV8C8HHir1o2yZ90la8XkfLO%2Fv7PsFeY9aP3FdBqCe0f1pzrSUeMhK9dhXZxN8rg7wkpPEZ9Oc9WbZCGcxIhLihPkPP8uhN5kh%2B3QHSHJXbxScYMkm0PSkZdULpKtHh19GtYK%2BZAQb6QhFPAinRvnrNj86ukapB%2F5tGX2zZeXpj9vAfDumxEEWoZvOUydxPMg8zMLgakDSRwC78u2m8lU3Z6BRcTaj9ss%2FN5iOThyXf4txXIIaPx43IUJrS960zcYjuciIB13AHeyXQoSxr8PqPEM8zLyFxkS8I4u5yrVosU0cphWnQM9h1I0tl4ZaMPrkq70GOqUBD9vy%2FnDfuAYJBSMzTktvLDztGUUGBBPJuTJRp0BD6D5env%2FLiz6MCsJcZyk2y8%2BwOZU%2Fce72tDCshLm8H99QIyBtvClM8GAdthLwMXt3DT3E%2FDg%2FUbNu6NDphsYL3rrYninANvBaFBzeNJ8wYZuq7OO0gSl4%2FAdP6AD%2FZCVtfO6q4%2BWJEojI1v5KIDOW20C0MI52V8P0pvC8GW3B2nlP%2BLKDP%2Fsf&X-Amz-Signature=c300fbf6c247f1d3ba0ab6309cd8d7f82e5779b3dfd3401f874ff5322730562c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIQ65HG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2BdsqJDBfb1wDL8lFO4ZXDOh0NfHBMPsGm%2BkSe0r%2BQwIgTAKyk7Rd%2FBmjCTYNHa9f5p4dqlSzL6TdYMTBsEs9e7EqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcsEjqhHyu48YsAjSrcA73GogGJ48wQGr3MV8V0%2BlDBXxn%2BJiS9SiAjcTb6MZJ7GPEvGC8QWfel%2BCBTJl6HTIEIRqJUkII7dNnL5yPXULrdEguPYDqYKUbITfNEN0reipAwAghgONZkvup3rWfTl6z665QC9B%2B7eY7OQbD1GmNEKC3T2rycAVZYWWCxnKsp22IcY%2BC5qH0yGKq8DnL5MQvL6SRBvBIxwYvugVKKfc5WBIpVX6V%2BwVl1tHVlagbX0h5O2OWBNN25KPLkOIMUVdR%2FUD2sAm0dyLJLayYbzZS0Fy2zLL25lTtJcmFGA%2BE99e7Lm9CyAxi0EQdHkabV8C8HHir1o2yZ90la8XkfLO%2Fv7PsFeY9aP3FdBqCe0f1pzrSUeMhK9dhXZxN8rg7wkpPEZ9Oc9WbZCGcxIhLihPkPP8uhN5kh%2B3QHSHJXbxScYMkm0PSkZdULpKtHh19GtYK%2BZAQb6QhFPAinRvnrNj86ukapB%2F5tGX2zZeXpj9vAfDumxEEWoZvOUydxPMg8zMLgakDSRwC78u2m8lU3Z6BRcTaj9ss%2FN5iOThyXf4txXIIaPx43IUJrS960zcYjuciIB13AHeyXQoSxr8PqPEM8zLyFxkS8I4u5yrVosU0cphWnQM9h1I0tl4ZaMPrkq70GOqUBD9vy%2FnDfuAYJBSMzTktvLDztGUUGBBPJuTJRp0BD6D5env%2FLiz6MCsJcZyk2y8%2BwOZU%2Fce72tDCshLm8H99QIyBtvClM8GAdthLwMXt3DT3E%2FDg%2FUbNu6NDphsYL3rrYninANvBaFBzeNJ8wYZuq7OO0gSl4%2FAdP6AD%2FZCVtfO6q4%2BWJEojI1v5KIDOW20C0MI52V8P0pvC8GW3B2nlP%2BLKDP%2Fsf&X-Amz-Signature=4577a63177c96956116fc601ac3c660e06229f7bb3c4723f7aab74163a1d6ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JBL7JMK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2dUfWFeEplolmRzbJrzeYCbxeVyGp5HCu0Ef2V%2BlOVAiAG%2BbzM2pFI5Ti6CtWM7w2q4PA4cMEymWtZ2x2K6HUM0SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgBUewYSOZnnjPFF9KtwDeEs6gA%2FgPAcJafzkq%2BJK7MC1owmLyht%2BUWwCZ%2BsaKV1580lhP7Png8wmMrbD16ElKVqghOSAOJY2zSRIu2AKA%2BP3U%2F7dNXXRo1UiSK5QktY3oNZk3q%2BSnM4NAc3RcHcvI%2BqDnVPbpdvgqpZ1dtbT739ybq8u%2FzHputaZrOdjYl8L0S1jT7uNaZRfpeeB7pJ5zvUEWAseSJn52ksYgT5xadYmq5b1UpmfW7BUj7D0E4qQvuuhGszc%2BDKS5LS52Dup1gvXnoKSlzSZk5TFlU7GFReaVzhy%2F1GEEEG0un1ZBZmMg4dwkR9KelDQjQ1EllZ7L6CinS1s8oacLo9JPXape6HX7vMdqAk6irPd%2FLxkUDMczHQr2lfsFgqRITbLGQcEH1JO4eQHBN2D4aGi2s2nGVf%2BWk%2F7UACnJUy%2F6Vq5y6cp6JmMFTjT8%2FcoEBHjFHCI4VLlL%2FLTNh4Vf9EIj%2BNiISmZ3Ld41ZaOrFOEwBV90Gwg%2BHQnt0ip7X5rX7ToVwHl1WBLwgww0jveKngUcYukLWxUpS1CH2Y8zxD2o9gVuCQSY6Z9vb29Rm9FzxZJCIXm7rRfIsu6Ms%2FWhYlDo2Tx%2BFVvQYRDgB44z4OJ9MpPMKEmYK5R3ZyYgXjmR24w4uOrvQY6pgHSDN4wU%2BNshkV94agoF%2FezbST0UmLJAtZ70QRaPGUXBfSItSwEEyIAPFxpFuDK8Tr7IaZI7W2AoYYPIOnqR9%2FsXQqHZeCJBGCQ4T8xi7OeIbZPRSoFIjW%2BXNdpc8bCI6eqxV8cvDAwyBpptD0I%2FJppRm9%2FswiLADftpxYnUM4jTfOeWbVxNdSUxREOGwDjN540%2B9Nk6QqEfS3xla4p%2FfPINuN8dWux&X-Amz-Signature=c6557f26dee241060008aefc2822152604b971e8c09b05ea5aa4c4163366d6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4PIK45%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6nMZGKOELwGKRQY%2B4uGuy616OFZFfWN321efFe%2F1%2BlQIhAI%2F6Yb5NysYHHF4%2BokOMN6%2B2KKdIImoff28Hnx%2BFg7bPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2LQMFC4qShlH7Dsoq3AMpznX0Lntd3dQsSukMVoULbeL9C04MtAmlKgwfC9Ejq%2BD2HodTr2jhR3z0lmcUN5jR4uiYsXv5%2FT%2Fu5pCHQPrFBTbpfbSJqJXtFdFsV3ADf8yIHsdgx9HlMrG1CqZJHsNBPvLwcOTnsaEseZ4yzPnLfHO74N3zHHWKAGXRsKiCQT6wjYi0S8sM%2F%2FFbWIn2yrzPvreWYcfPHq4rgv7qsDfou8r%2BLiIuO4rHNKCqA222boQBtwgwc5Q19jAbUqJ44ySIkUrb4H7jJGsVFhgBQDfpWNUQMzore0bSjKgnpN28Q2asnNqL1GWP66V9IajhB99cz7HeUN5MzQjDaj3lSVEwzv543TPtKYSv5S3xRnuNYsxdYdKpymUBAJiTbKr44bemFTWT7MKfMq0cwXQXiJl5EM8qMt6%2BW4FWWHBvLC4jZ8z89F15xFiq8KpwmAgqXUT%2B5P6fc8V1Vby39nH1MOaiyIiH%2BxUnWl%2Bb26BgOTHDunZL%2B7p0rmGxj%2F1ox3bdQ%2F62VR1sbqk5PzAEddb5nkvEHEe%2BlIQxBXeg13EDQ6OXvjn30YfowTIvPlKzxH0WzNctkiB%2Fq2dW7LFBj3tI44k6nJHVztcP%2BZxr%2BTW3V08zggZ8hPHBZa83IgQdQzC25Ku9BjqkAYQw1Wra%2Bgo5StNf6Z7QIqvz%2BbWg5vADOz0%2FJC53HN1ysgDWHwegzOtlYIVZE%2F5m5Tl2mt6T1vlHZg1DgFbaYQu01V0KE1%2F5awxhhpxGWlDoMBmDYwyD0owWDhFzG159zWSafYiFsFB%2Bb7C2L%2FUOJOdnl7MNHVZEEIPuKxsR3Z5qbTFkpjCmKpK%2FYpDx58iEloMtNgveChxopzRLGmUcz9UgCex7&X-Amz-Signature=00ec2f1bea98aa58d07fd7a277cb034fa9faabee40ce786f77e0cecc6e9d538e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIQ65HG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2BdsqJDBfb1wDL8lFO4ZXDOh0NfHBMPsGm%2BkSe0r%2BQwIgTAKyk7Rd%2FBmjCTYNHa9f5p4dqlSzL6TdYMTBsEs9e7EqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcsEjqhHyu48YsAjSrcA73GogGJ48wQGr3MV8V0%2BlDBXxn%2BJiS9SiAjcTb6MZJ7GPEvGC8QWfel%2BCBTJl6HTIEIRqJUkII7dNnL5yPXULrdEguPYDqYKUbITfNEN0reipAwAghgONZkvup3rWfTl6z665QC9B%2B7eY7OQbD1GmNEKC3T2rycAVZYWWCxnKsp22IcY%2BC5qH0yGKq8DnL5MQvL6SRBvBIxwYvugVKKfc5WBIpVX6V%2BwVl1tHVlagbX0h5O2OWBNN25KPLkOIMUVdR%2FUD2sAm0dyLJLayYbzZS0Fy2zLL25lTtJcmFGA%2BE99e7Lm9CyAxi0EQdHkabV8C8HHir1o2yZ90la8XkfLO%2Fv7PsFeY9aP3FdBqCe0f1pzrSUeMhK9dhXZxN8rg7wkpPEZ9Oc9WbZCGcxIhLihPkPP8uhN5kh%2B3QHSHJXbxScYMkm0PSkZdULpKtHh19GtYK%2BZAQb6QhFPAinRvnrNj86ukapB%2F5tGX2zZeXpj9vAfDumxEEWoZvOUydxPMg8zMLgakDSRwC78u2m8lU3Z6BRcTaj9ss%2FN5iOThyXf4txXIIaPx43IUJrS960zcYjuciIB13AHeyXQoSxr8PqPEM8zLyFxkS8I4u5yrVosU0cphWnQM9h1I0tl4ZaMPrkq70GOqUBD9vy%2FnDfuAYJBSMzTktvLDztGUUGBBPJuTJRp0BD6D5env%2FLiz6MCsJcZyk2y8%2BwOZU%2Fce72tDCshLm8H99QIyBtvClM8GAdthLwMXt3DT3E%2FDg%2FUbNu6NDphsYL3rrYninANvBaFBzeNJ8wYZuq7OO0gSl4%2FAdP6AD%2FZCVtfO6q4%2BWJEojI1v5KIDOW20C0MI52V8P0pvC8GW3B2nlP%2BLKDP%2Fsf&X-Amz-Signature=04735e3e49e65e9e4c0c5e0effdd3c84f0749a25a434eb87545fef6c324927cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
