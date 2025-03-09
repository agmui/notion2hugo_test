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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEVPEDBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAR3bl37PLgiTcblRXRbVHWgkuw3AGSGZrwvyox6XcryAiBogJG0KAMJskkxaIT459DfyLBjddowNptVNLzDyHc8eir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM%2BO4kzA5LCfVOUZvOKtwDjyATK9qjftn1zBoXge386f04gS8BU6Lv0fNbHRR9LdlHyDE1YlzcqAmFyGB8LNCMSQl6SBnwY3PE5O2%2FJ6s9ycsAIP3T94LQ%2BUx3bUUw3AJmyg0VsNUv5BXz4GdDz7ToR897T3aPbAasWYOrJVWVPOUsicx3cWyvhnbHbMiXsUNAlHR%2BlnftupXBXOlTpQwJmtS1LCnGMqaO%2BSdIlY7IBYORNqDbizjGxR%2FBovpNo1u%2FFN9CYRciQlxU3cYG9P9nLuJCLtRBoXky5wF0uxB9CsbfW%2FbJlFcexXMhLQ%2BygckbirfS4te6sNt9FYZx1kBMpFXY4En6Kd5eMAxRtv%2B%2Fg%2BW%2FsOKWsRVvC6vyVyQebvbN7NLBfigrAkhPnQQnYH2944clH0leaQ6ATnXP%2FpTEKQd%2Fp6PZzVMIy1FSqFFh8ElubyBmqc3hNWY9BEmMsZnFgcLyIg7WF%2BEBySi5qoGT43yu8324s863r8z7%2BRndjsWh5AtX0o%2FlfSsgEkWyeWGVT7lUy52JUxLB7CyQTaHsCW8xEAf9Lo07Cym9DrRwCcoupSoV4nwZPMQnZso5kAOnRNjBNd0GK8JvVSGd8bT6gf1UOBEWk8Re3U0XDxbqYdlnG%2FJpNq0falGtIFww8%2BC3vgY6pgEn0wnBTB6QNpcITgPpcUQ3uc18ZniT0ib1SElitNCtcbQe5%2B%2BKPAlS4PKYUfdylEloAHurn%2BBPz%2BdTMrSpX2nY3skaqsQHDyuK%2FIjW2L0sh6%2B3jHZLk%2BHtcxSnJpzTwhdv2d8w8s5i1OEUwPaMYncwCHIU0rjtJE8gU2K6xXnyqp7EznnO0jWTloxYj40iFhv3uByLPtO3lmw847sSWJiudnYdcerf&X-Amz-Signature=4d7d752e4670405ef69811fcb8346e223c3ce9797abf2f40fab4fd8da5c3b3be&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEVPEDBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAR3bl37PLgiTcblRXRbVHWgkuw3AGSGZrwvyox6XcryAiBogJG0KAMJskkxaIT459DfyLBjddowNptVNLzDyHc8eir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM%2BO4kzA5LCfVOUZvOKtwDjyATK9qjftn1zBoXge386f04gS8BU6Lv0fNbHRR9LdlHyDE1YlzcqAmFyGB8LNCMSQl6SBnwY3PE5O2%2FJ6s9ycsAIP3T94LQ%2BUx3bUUw3AJmyg0VsNUv5BXz4GdDz7ToR897T3aPbAasWYOrJVWVPOUsicx3cWyvhnbHbMiXsUNAlHR%2BlnftupXBXOlTpQwJmtS1LCnGMqaO%2BSdIlY7IBYORNqDbizjGxR%2FBovpNo1u%2FFN9CYRciQlxU3cYG9P9nLuJCLtRBoXky5wF0uxB9CsbfW%2FbJlFcexXMhLQ%2BygckbirfS4te6sNt9FYZx1kBMpFXY4En6Kd5eMAxRtv%2B%2Fg%2BW%2FsOKWsRVvC6vyVyQebvbN7NLBfigrAkhPnQQnYH2944clH0leaQ6ATnXP%2FpTEKQd%2Fp6PZzVMIy1FSqFFh8ElubyBmqc3hNWY9BEmMsZnFgcLyIg7WF%2BEBySi5qoGT43yu8324s863r8z7%2BRndjsWh5AtX0o%2FlfSsgEkWyeWGVT7lUy52JUxLB7CyQTaHsCW8xEAf9Lo07Cym9DrRwCcoupSoV4nwZPMQnZso5kAOnRNjBNd0GK8JvVSGd8bT6gf1UOBEWk8Re3U0XDxbqYdlnG%2FJpNq0falGtIFww8%2BC3vgY6pgEn0wnBTB6QNpcITgPpcUQ3uc18ZniT0ib1SElitNCtcbQe5%2B%2BKPAlS4PKYUfdylEloAHurn%2BBPz%2BdTMrSpX2nY3skaqsQHDyuK%2FIjW2L0sh6%2B3jHZLk%2BHtcxSnJpzTwhdv2d8w8s5i1OEUwPaMYncwCHIU0rjtJE8gU2K6xXnyqp7EznnO0jWTloxYj40iFhv3uByLPtO3lmw847sSWJiudnYdcerf&X-Amz-Signature=81823b08c15bd33d1a7416ccba2b4af1f9c38cc19f9f2edb974c690f07d6fdbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP34SRPV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDMjLT4nw7TeUzEg09vxM5CgA7WIBdiwDMTwgTYQP3hJQIhAOTFzmMwuFp0y9h5tS0y6wo49L0Rznl%2BZY08lhEVyiDiKv8DCH0QABoMNjM3NDIzMTgzODA1IgznW8U2yGWzIU5aeFAq3ANcmObLE2n4BZ%2BsoXIVEX26e4nzjO37IuU4qZZaDAZuB1rdOk1m33%2BAYeGLaoGv1i3Buah5pxSJ0nkzejAemQ%2F9nFlRZGlWNUDYS3gukhIyynIXvHLhnvyvYZ6%2F%2B4lpHCfSHGJJ6MyyN2HoDcRcGrtOy2HlWdwWnZtVJiEcYLZ1HRNjOP7uQrplplvj7xCTBuehvkquL7iG5SUdpCsbbA82RphYv0z8Cpx%2Bq31H9qtp6bcZr4braMGdcNjV54uZDhSLe%2FvynFDzshkMF0Gtg1gnix9gIST4MyOLNbdESzQBzxJrsoYeu%2F92zG%2BrVy7QBuQ8fdG8S5yiVdoGnZMjJ8ilC4IpXCwoF9gLMMi8O66dV0obrQ1lardNUSeEncg4AWLtzqhmjZjNRRljrAr5DFiqV0v6wEOhNucMjsAdd4gH%2BH0Kac%2Bn4YratCBcz87Z2cs9y4%2FTgsN8lqSV8snYZ%2FBtrSYH3NTSnrYK71WbfAY%2FQZoH8ayq8JnqD35HFjZxN8InAE7rqXVTFt5%2BB0HufLfAJ%2BBwTNBb7cAETaT15T9yTp%2BH%2FDaDFRvSt7dTnuYYYoMc%2F4U5A%2FkI0Hn5TjJPxud09KngA3bL8FdGDxTaOtxyKAX1NszINdYoJa1WOjDj4Le%2BBjqkAeVC%2BH20ypy%2Bep82uqZ9l%2FIkuaJ7e4Tzb4xjRKdq85ipsnljNee7byQS%2BR2xeQ%2FdXG4YRn0Uesv4Lyzm9286vjgeSLVwNUVGPSYGU3hX7CHq%2Bxdtsk49yytrIAbwiZpjhScB362aBIPenTfumGzcccdsRIrlbLTykaT65u4thBKy55o2%2BubyEW401f0bi4hbcJVVuN1TWuGYnfTL7EtlUD4WwJyo&X-Amz-Signature=1512068d724b98d748b5e881c786401caecad81017f576d447c3285383a435f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHNK4X5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv3qaB%2Bg%2BDMlFtk0jppZc61VP2Tz1bXCexi%2FPFGsAmLAiB1UwYW4%2BwJ5ouFRr9OK6RDXvR9epcQWb5f9emsBM3sISr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM325r5BEgN%2FNV1Rw4KtwDKTNcPxTbjgO8f4EOGLQwzXmzlo%2BntMMtBx%2BSsqvtvj2KQGOMTme%2Fuy0aLDVqlDggrDi4CdMaZSPthb3wu8mZroPdvDDHw%2FpXkCG%2FS8WJuM9lh%2BYDLMRSuEuREpq8FXZM4f%2BV0LSRICFIjXP94jI%2BHyBG4s4q%2Bnrs4w2Y%2FNM2kFv92cYN22oLCjX0P2Ec%2FSlPKZ9rPDdSvwYUJ%2BQyx7YHAPd3II2PZ3d6Jq%2BBhkrGaE6UcPvJ%2FxBo1O5tbLVfFfD03N8LqDQ6Mskea6UvZveZ6n9RC88aUzrfBZpir2D%2FKQ%2B06Xy5wg3tF8vOOcurCWwwq7UkRjNVkY6uTyRFJ5Q0mHKANhmVEPNZuHwMQwpvBRwRAkVuUIc%2FgLtNHQ6qTXVFIl7NWUMgd0pDD88TNugO3jV4vFQpeQT27jqDTxjPodu6UPPIDXL8lY%2FlrOG9Ks3MwFHQKxbjwu15xtfXD%2FJp3qQk4evqdHvGU4RVxIkyLUrTd3q4dcWqniEwuwwVO0R2uiAq%2FhnRD0J0%2Fj3PWh1FDzo%2BkJZSiQkUHX%2BdoOoK0N8t6gRFFL95MgXj3nhwRqetquPvvP2d2Dj%2Fi1TvabbCNGTlalaewbhWMfP2DJLBUOfhYhLdAf%2FO3ud7Hucwv%2BC3vgY6pgGpnKBwvIvNGKL11Qs7kKk2QfHvyyUnMcpO92%2F3JMdqRg3dYGZ1UOSqYsMf070VlbiGibVjy2QLWcDl8yPuQzz1oi6oC%2FEerPhQNRf9TtAJTuDYWeEZGRMOpGWpsV%2FE%2FkCwx6J9GnccgLSdHwHZICLEXBQDpiLvi3qGU2T1%2FaJ202kL6I%2BTAngYGhXxMnn0PcNsfNpQQslEIx1FHR8bUX3%2B2a8izkum&X-Amz-Signature=678aa532985de5b7a8ff7731eb4a20e70ba3b44db664d16bdc23b4178a91d00a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEVPEDBY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAR3bl37PLgiTcblRXRbVHWgkuw3AGSGZrwvyox6XcryAiBogJG0KAMJskkxaIT459DfyLBjddowNptVNLzDyHc8eir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM%2BO4kzA5LCfVOUZvOKtwDjyATK9qjftn1zBoXge386f04gS8BU6Lv0fNbHRR9LdlHyDE1YlzcqAmFyGB8LNCMSQl6SBnwY3PE5O2%2FJ6s9ycsAIP3T94LQ%2BUx3bUUw3AJmyg0VsNUv5BXz4GdDz7ToR897T3aPbAasWYOrJVWVPOUsicx3cWyvhnbHbMiXsUNAlHR%2BlnftupXBXOlTpQwJmtS1LCnGMqaO%2BSdIlY7IBYORNqDbizjGxR%2FBovpNo1u%2FFN9CYRciQlxU3cYG9P9nLuJCLtRBoXky5wF0uxB9CsbfW%2FbJlFcexXMhLQ%2BygckbirfS4te6sNt9FYZx1kBMpFXY4En6Kd5eMAxRtv%2B%2Fg%2BW%2FsOKWsRVvC6vyVyQebvbN7NLBfigrAkhPnQQnYH2944clH0leaQ6ATnXP%2FpTEKQd%2Fp6PZzVMIy1FSqFFh8ElubyBmqc3hNWY9BEmMsZnFgcLyIg7WF%2BEBySi5qoGT43yu8324s863r8z7%2BRndjsWh5AtX0o%2FlfSsgEkWyeWGVT7lUy52JUxLB7CyQTaHsCW8xEAf9Lo07Cym9DrRwCcoupSoV4nwZPMQnZso5kAOnRNjBNd0GK8JvVSGd8bT6gf1UOBEWk8Re3U0XDxbqYdlnG%2FJpNq0falGtIFww8%2BC3vgY6pgEn0wnBTB6QNpcITgPpcUQ3uc18ZniT0ib1SElitNCtcbQe5%2B%2BKPAlS4PKYUfdylEloAHurn%2BBPz%2BdTMrSpX2nY3skaqsQHDyuK%2FIjW2L0sh6%2B3jHZLk%2BHtcxSnJpzTwhdv2d8w8s5i1OEUwPaMYncwCHIU0rjtJE8gU2K6xXnyqp7EznnO0jWTloxYj40iFhv3uByLPtO3lmw847sSWJiudnYdcerf&X-Amz-Signature=2575fffddbf23e4f9f15c5bdbc7b772f3e17235d7cf0411ff86b966753e49d19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
