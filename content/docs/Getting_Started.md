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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5LIZPU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDfHaBfGwsj8VKxrHu8H7kAaVfo8QhMqjOy38zk0IETcAIhAN2C%2Be3gY3HPnEU6jgtegJtfZgmiMwAsTeNKdc%2BZrNiMKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjgtYtC%2BWTGSq9GeMq3AMKWJrVmsv9czI2AZCzFHSLSkyh4wv3QSp%2FQ9wGV3D7ZcEXAuT%2BIgVS0g4f1be6579mD1FUmTq7v7IYgnWRwPpfnH%2FDQFEcbsdpqPKgzTt%2FSd5m3DuCg2utKTaDeQXK3Evag69B8EdH%2FUXUf8IaW7bSDmwGTt9iFdiwJVX7sDCu09hka7RCiNLS3cHG%2FM3qFvC1XgvSLBzzsvTSGVcLt4lZiiVt284P2kmR3%2BQSrKHDMKzZyiQR%2Bnhx0X3ZnLcS73AGo20lSdTgvqIQ1qpS2dvRfMHXgROmXGWBAJGdbNhiWcxrdUFJzxcq9I6ex8Y9GMw3blCWKBtcIT5GOm6UT03gLd5ZBemWih%2BOrwXmh7iNU74z6vzRbaFID7hbn4Zz1S7ISMG9b3XtKZxbIWqEL83ngaJR%2FEEAS4iTNC1Nx5diysmZl%2BEyAj5oJhWZ0aMleObl5OipCd6hl1A2N%2BPOlVe%2FJiWdym94azVQm9lOtKKwKqsmwMWQUXh4rXCzNHVbvAs7XJBisVMXqgSBJ6GT2MQR9WQdh8G28j9PhVfFDexuOzuBZ4Nj89biXMQl3hlUhU71EgtoH1KIt8vLhB3kThDo9InPVPvyCef9ZXY8RT5MlPZXmfHThGi69i%2BdIzDFlNu%2FBjqkAZA5HSWfpmI7fJH4wZO58wKLm32TLf1REP8n6gmi5V9F1%2BYj5RlLbX69R%2FK59D9JSZQN%2B3UVWlwuW5XCWuk0VXcHgC%2B9BNki7iwGcwWx57kv4eQXeCjEtHm5y3La7nh%2Bkwgj7lVbKXt7qDleJr%2FqQPzb0NJ4ZJYwtdPIXZ2DCby8CpsUM5WxrzpH%2BXXRLf%2Fyv7bapeVNJ3jqhUUP707NutjLHI1u&X-Amz-Signature=d72bf1cbb416c48623359831f8932f8ed8f342d8841fba15d3f1dfd88d905b86&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5LIZPU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDfHaBfGwsj8VKxrHu8H7kAaVfo8QhMqjOy38zk0IETcAIhAN2C%2Be3gY3HPnEU6jgtegJtfZgmiMwAsTeNKdc%2BZrNiMKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjgtYtC%2BWTGSq9GeMq3AMKWJrVmsv9czI2AZCzFHSLSkyh4wv3QSp%2FQ9wGV3D7ZcEXAuT%2BIgVS0g4f1be6579mD1FUmTq7v7IYgnWRwPpfnH%2FDQFEcbsdpqPKgzTt%2FSd5m3DuCg2utKTaDeQXK3Evag69B8EdH%2FUXUf8IaW7bSDmwGTt9iFdiwJVX7sDCu09hka7RCiNLS3cHG%2FM3qFvC1XgvSLBzzsvTSGVcLt4lZiiVt284P2kmR3%2BQSrKHDMKzZyiQR%2Bnhx0X3ZnLcS73AGo20lSdTgvqIQ1qpS2dvRfMHXgROmXGWBAJGdbNhiWcxrdUFJzxcq9I6ex8Y9GMw3blCWKBtcIT5GOm6UT03gLd5ZBemWih%2BOrwXmh7iNU74z6vzRbaFID7hbn4Zz1S7ISMG9b3XtKZxbIWqEL83ngaJR%2FEEAS4iTNC1Nx5diysmZl%2BEyAj5oJhWZ0aMleObl5OipCd6hl1A2N%2BPOlVe%2FJiWdym94azVQm9lOtKKwKqsmwMWQUXh4rXCzNHVbvAs7XJBisVMXqgSBJ6GT2MQR9WQdh8G28j9PhVfFDexuOzuBZ4Nj89biXMQl3hlUhU71EgtoH1KIt8vLhB3kThDo9InPVPvyCef9ZXY8RT5MlPZXmfHThGi69i%2BdIzDFlNu%2FBjqkAZA5HSWfpmI7fJH4wZO58wKLm32TLf1REP8n6gmi5V9F1%2BYj5RlLbX69R%2FK59D9JSZQN%2B3UVWlwuW5XCWuk0VXcHgC%2B9BNki7iwGcwWx57kv4eQXeCjEtHm5y3La7nh%2Bkwgj7lVbKXt7qDleJr%2FqQPzb0NJ4ZJYwtdPIXZ2DCby8CpsUM5WxrzpH%2BXXRLf%2Fyv7bapeVNJ3jqhUUP707NutjLHI1u&X-Amz-Signature=417530c7b727acadf5b2886f283c7a90756037005d9ad61968ec5c027d297397&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7QZJKJ3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAgfMqJs8ZEPZofsWYvarLU%2BMWYp%2Bc51lJVOxR55oYqiAiAOSVxYqCxUi9ftMks4WOMxX73q66e7R2mMihgYWVDz9CqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZHkKcn6%2BCqCj3SxcKtwDWIjMxHzD%2FrK0wJrs0LE75EH9xvMX1UkKJFjLITzATz3bjT%2FosNq3Ng%2BAPW3Pj6etNErzzTZlSp7pT2oRV%2B%2F9IkS42E9UPh6rK7%2BYsrkbsS29z%2FIz7wXirS01bz3rW9Eev8BbZJRKVPZ0lI81yj6lNn6rYRPgTX7rLJeI5MW2DLw9ePaL1gD3ph1FU9ea2qjYkbT4wP87mjwSXnkxT0rLbcMrAiIOpCzb%2FBz7pj6VWrpa3%2FuETwsjZMTCVE9R6Xu47v5dooyTl3%2F1acuaAEWOQhqcoo9eteMGaQRw5f99f72t730%2FvLRKaC2HX2hboC4ZVbpppUx16kamtptAMeacB41rGQ6eATj5Wq4xnYpBinkaXM8bWmlvuZ1DShJWcIrmMWtT6rORNZ7hna9OTHuGwRyWZKqoUZhOGQa4MrdtiMaOat9eYNn4bcRvlsGbMIEz7LB%2FCEz5iirnPbHWJlUu0cyhQUS9AchQ9oJ5MISM0YkcuJQr%2BUhBez9tf6p5MOEYByMW%2BVM4xvTc5NIZF0YRj0PQFere9vYuIzelGWNrYeAHcQc%2BT0EgLKuOmSBGMaefQzBKLddq7WVy6kxPtX2ukPFj1cTub%2FKZBhUcHXNqtH58V%2B2Anj7O9BCF2FIwypXbvwY6pgGN6MNwOHlZxPefLYwrqIttyYRLgFXjhQ0sRqn%2BwP9YrzIeiHHVTIk9EJuHrDWU4wxpX5wKiJofAjCrStxOg36vQ0BQWhMqXuXvaQFuEHblovCBL5wTMSHsseAm3FPbylvvHX8WBkTyFivdYZFuEiW%2FsF9nvd2OBh7xxJ%2FlmaVdqVkOORI0YI%2Fhj7w%2FbpPW7yhFDG53wZYPNkmyWyCuu9t20VR%2BNeMZ&X-Amz-Signature=72b35f55b3d52631a737e0935dac092dc277f5f11acf97bf32b48005aebfc79f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICMNV42%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFhlzHIwHtIthEra1RSrykNpXXcrVJjh%2Bikgvm8ztKz6AiEAoQRLOaGB5RWegTun3mdvVLrba4YEXqXCJBJP16CPyacqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjimqavP6wQPjCJayrcA3W5F8bulHcF0tuHOvGNOVMz%2Brn7LKX%2FlLTnwbUZvyeckLcWbhyoIHLG0eumOE8GSPR9UnfFKVUjZSevlkzu9w%2F%2BV9iTIhdtbrw7R8vvdItV1PIzX0FlxN4bacYT9kKYHdsiLc3H6K5YyOEzjIEqAdeqE5Z0GrFj4ZJRpdbCvwu84E18HRGM1n0PI72lHNxtyyiQHthEjb4Pgaw%2FeIx4jYD04haB5aEQTOOpXArveVS%2FP348WJUeom%2FqI5%2Fj%2Bt0GK3pRpNjPz0m9AKcSW05Jh%2BOelITezRzq4sADtZqfbhtfbeOteK6mgot2DG69Df4HI9p7z4Vb8dOjVgLNr%2BF1MCtee8fO3xRo0wDSfWkxm7S4i8ShCKmWF006usBSPLZ2NemhQyf3bpRQpwlo23SM%2BBUCqjVn3YDIOtAl5h0pPrghfuAstOcrm6hE8JiptyouCO0hUk%2BwYYVvhlMpySozRAmlY0QTlPROzLbTe4bmt1A1%2FbgfyvdiZdQFYMu0jS4Wfa5rhw1myX89UmarR%2BH3t5QHR1RypyRcWACJ4IqzzGbCqCa%2BNFghkgziCXj%2Bm%2FVDmphJbVIT%2B7HGjdwJ5CZGmv2Z7I861l1ENvMVIeZT3KQljqHuYZiY0RZyJ0TmMIyV278GOqUB1dfMjm0GGuhcUHxoPULs1sIrEhQeLduhIZvfZv81pmXlPbVMQoVZ%2F1yiUK%2BES20k9CcP95G3ufyX9JvfkmD1MmP%2B5qocJRQ9hBXErNDnsqDMcL73LNhNB2e9iuNVPQlk27zUf1A3z%2BKlhsFWA4TE5ZmlQ4YAZQmRCEQkwdvBRYHRDsO8jmThbNB%2BWxsS6ISRqVL%2Fk6Ndh1nchaE7coeN5cXLHgUp&X-Amz-Signature=471a34da44ec9da37acccb6e5c153b44ab70bf98d16fd88901bec29b8fb2e368&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5LIZPU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDfHaBfGwsj8VKxrHu8H7kAaVfo8QhMqjOy38zk0IETcAIhAN2C%2Be3gY3HPnEU6jgtegJtfZgmiMwAsTeNKdc%2BZrNiMKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjgtYtC%2BWTGSq9GeMq3AMKWJrVmsv9czI2AZCzFHSLSkyh4wv3QSp%2FQ9wGV3D7ZcEXAuT%2BIgVS0g4f1be6579mD1FUmTq7v7IYgnWRwPpfnH%2FDQFEcbsdpqPKgzTt%2FSd5m3DuCg2utKTaDeQXK3Evag69B8EdH%2FUXUf8IaW7bSDmwGTt9iFdiwJVX7sDCu09hka7RCiNLS3cHG%2FM3qFvC1XgvSLBzzsvTSGVcLt4lZiiVt284P2kmR3%2BQSrKHDMKzZyiQR%2Bnhx0X3ZnLcS73AGo20lSdTgvqIQ1qpS2dvRfMHXgROmXGWBAJGdbNhiWcxrdUFJzxcq9I6ex8Y9GMw3blCWKBtcIT5GOm6UT03gLd5ZBemWih%2BOrwXmh7iNU74z6vzRbaFID7hbn4Zz1S7ISMG9b3XtKZxbIWqEL83ngaJR%2FEEAS4iTNC1Nx5diysmZl%2BEyAj5oJhWZ0aMleObl5OipCd6hl1A2N%2BPOlVe%2FJiWdym94azVQm9lOtKKwKqsmwMWQUXh4rXCzNHVbvAs7XJBisVMXqgSBJ6GT2MQR9WQdh8G28j9PhVfFDexuOzuBZ4Nj89biXMQl3hlUhU71EgtoH1KIt8vLhB3kThDo9InPVPvyCef9ZXY8RT5MlPZXmfHThGi69i%2BdIzDFlNu%2FBjqkAZA5HSWfpmI7fJH4wZO58wKLm32TLf1REP8n6gmi5V9F1%2BYj5RlLbX69R%2FK59D9JSZQN%2B3UVWlwuW5XCWuk0VXcHgC%2B9BNki7iwGcwWx57kv4eQXeCjEtHm5y3La7nh%2Bkwgj7lVbKXt7qDleJr%2FqQPzb0NJ4ZJYwtdPIXZ2DCby8CpsUM5WxrzpH%2BXXRLf%2Fyv7bapeVNJ3jqhUUP707NutjLHI1u&X-Amz-Signature=3d74639b33fd06c1093b9e88cc5f399e05382737f092205ce3db74c2115279ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
