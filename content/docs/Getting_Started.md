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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPAZIML%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD6yY2UstGUL4t2IAlNkaJki1JrfKs%2B60zvGw1wOAAT9AIhAK92dvo2SFZUbMrcvbDkhGYr8MWkGd0VsrpnoBNugrAgKv8DCHMQABoMNjM3NDIzMTgzODA1Igw7TEt7bq6WKyHwW9gq3AOBfZRKH8szSKKJULa2hRr9NK0almqCwP1NbP51KEMP0yeJluEPqZMGoSGxXmEAc2BMW4zTvUWfYUq9vAeFs4%2BjlzWFsiGjU0a7oOH%2B0bNSo9SJME0RhvqTLBuQBaG%2FGrGDJMiYveCd0hfzdQANIQn%2F%2FSxTIQfNVzfoAXXX7weWXxl0y51mnMuRAE397osDgKB7LK8TGpBuQQCBK7PnFQiONL9bFasnVZzjoxbhntRwWyMIPOH6%2Bh5%2FcyDbhmOnqaDT6GyRnXJMPKp9bDoKYoWJDcgKy58rxf1lHvfnqh4%2BcwO05cV3D3nvOHPwGJgdmzYBuHlLwBVE6XfDsU6NPlvBdZjIUHHKr8bD37qM66nd5mcZPreuD%2BAjBotw7En%2BH1L7cK%2FD%2BmanDxLm5XA77IAjdftVsUYJ3vcYZy7uaURNBGcgR0FReJyHGDi2n2JxcY0Rg%2FWm9s2yHRVd9f%2FrW7%2FQfAZUg8eorbEdo4MIwi1ZIvZSMWK60EpZnGWPMbbc1cUu7HQAPDhR7y7XXnzbG0o10mxpcpVXf6dDxP0JE1EhpL86kgzOVjvzAdMF0BwUqo6qcZ1FoamjYXij4G1a8OQUVFtN9awcAUK8nK%2BewVylJXziK5YScc0pk8fPIjCwi5%2B%2FBjqkAVfhxW2yQa1cWik0RXKP15BBtn8nJLt0DHLPEFdipCKpRTulOlRAY7yio5e9mQlRrxZq6Tdw2dDVP0j3vkwn3uBnik4ib%2Fx6Iz2T9bgJ3z6Gy6EqTj7drkykMTNE5YNnZeFksyxTJKUEDH75p0xIv4AX7mfBiv2ycHTUZ7tM0LynAOSQ%2Bdb6dnLvdad3La%2FStaN2ba6IIKSECSKL4SjPJXM1TbPb&X-Amz-Signature=ed05c3af5ff2241bccbbe7afaa30ddb8f933bbf1b7e6ed7c85e9f3b445220aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPAZIML%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD6yY2UstGUL4t2IAlNkaJki1JrfKs%2B60zvGw1wOAAT9AIhAK92dvo2SFZUbMrcvbDkhGYr8MWkGd0VsrpnoBNugrAgKv8DCHMQABoMNjM3NDIzMTgzODA1Igw7TEt7bq6WKyHwW9gq3AOBfZRKH8szSKKJULa2hRr9NK0almqCwP1NbP51KEMP0yeJluEPqZMGoSGxXmEAc2BMW4zTvUWfYUq9vAeFs4%2BjlzWFsiGjU0a7oOH%2B0bNSo9SJME0RhvqTLBuQBaG%2FGrGDJMiYveCd0hfzdQANIQn%2F%2FSxTIQfNVzfoAXXX7weWXxl0y51mnMuRAE397osDgKB7LK8TGpBuQQCBK7PnFQiONL9bFasnVZzjoxbhntRwWyMIPOH6%2Bh5%2FcyDbhmOnqaDT6GyRnXJMPKp9bDoKYoWJDcgKy58rxf1lHvfnqh4%2BcwO05cV3D3nvOHPwGJgdmzYBuHlLwBVE6XfDsU6NPlvBdZjIUHHKr8bD37qM66nd5mcZPreuD%2BAjBotw7En%2BH1L7cK%2FD%2BmanDxLm5XA77IAjdftVsUYJ3vcYZy7uaURNBGcgR0FReJyHGDi2n2JxcY0Rg%2FWm9s2yHRVd9f%2FrW7%2FQfAZUg8eorbEdo4MIwi1ZIvZSMWK60EpZnGWPMbbc1cUu7HQAPDhR7y7XXnzbG0o10mxpcpVXf6dDxP0JE1EhpL86kgzOVjvzAdMF0BwUqo6qcZ1FoamjYXij4G1a8OQUVFtN9awcAUK8nK%2BewVylJXziK5YScc0pk8fPIjCwi5%2B%2FBjqkAVfhxW2yQa1cWik0RXKP15BBtn8nJLt0DHLPEFdipCKpRTulOlRAY7yio5e9mQlRrxZq6Tdw2dDVP0j3vkwn3uBnik4ib%2Fx6Iz2T9bgJ3z6Gy6EqTj7drkykMTNE5YNnZeFksyxTJKUEDH75p0xIv4AX7mfBiv2ycHTUZ7tM0LynAOSQ%2Bdb6dnLvdad3La%2FStaN2ba6IIKSECSKL4SjPJXM1TbPb&X-Amz-Signature=12b49af48598265f5a93c655c2315812a9be064e4a9de61992f4c8d6d7548363&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE6QGYM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGmIu7bUnB2UFlSolg0o0hZRTS2LUMDpnrCkRGzQrE9oAiEAvVi%2BZjf%2FI%2B3WcMc6CFwCj%2FodnNqtXfw5V2DKnATxGeMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJuF3PqRG5EYgmz5KSrcA71kofeVo3X5qNOE7roEmruiYfbhzttuyq1%2BDKW6ce%2BiH7zoDcYwHvjmMoyj%2FxHlsbX7GoSyx5%2BP89VrWypzLX9piJgkbd84NZO63U55RXG55ZoDV3UksDWcTEejnO826b36mYYfuDUQX6M15zNTFakj8IbdJdVn%2BTnGNCluOpLCCcLGyRGDNJUdMnW3X1LuhQuki41IBnGEj0rZnPrhbngkr7MnCRuZOSIu1dfMAZfSrdZp0M%2FjefOhLYar3gP38nfygXrAHYulC9g74lW%2FjFgA%2BHt%2BMmbizlxbxWEPPsEfB5YoeGab2v9fDgFgmCblslCUs%2FHORBUVCtKwdl8c7JBAjy%2BShgpltdL0tjBrQ%2B6cFHsTrJtyrSgLlasLKNX1o0CR1OKafkzrCc0AQ%2FhlCokHWoFBR73Wfisx3YITjNfC9odvFzF3BGZ6ZOygx%2BBTejJ7Fd31HuD66HhippLyaOjPmMChaoLaivS4d%2BSal63TyNaJ90%2BvPU9eiEtfGt5k1RZJJ0TBoPY6JwTiEmmYtISDs%2B76yblNhWBn12YOnKkNolJuUjC57I9PFqvqMzymlODrzTXVqCX4z9JXg03UO63RqOYguZMrGhLbHj4w1%2FceYuokNMf%2FqekzvLX8MLqLn78GOqUBnw3ZglUlkIOqsbtfiNY9p1o5HmBPOcjeycYOfVhrcmsOmbkcHoUT%2F1uNzn2N7yodMcrqlDFkQ%2F8sfZMWo0rzHCVoKLvx8eDTm950armG8pHqVKGi8h%2BnJ8RZuXu60Xuw95lYDk8Nqq8xMcLOa16LpZ6PwvpMGCCILDHkkB7OXh1MF%2Bsg7NNqDz%2BCVkaP0933ogFs6IJjzvxaI8kZxU6Sto0On2To&X-Amz-Signature=fc42777b8c1316cd9d47b67ce685ef89c7d8e9d7ce02acaf2ad16becf5b0cfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPAZIML%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD6yY2UstGUL4t2IAlNkaJki1JrfKs%2B60zvGw1wOAAT9AIhAK92dvo2SFZUbMrcvbDkhGYr8MWkGd0VsrpnoBNugrAgKv8DCHMQABoMNjM3NDIzMTgzODA1Igw7TEt7bq6WKyHwW9gq3AOBfZRKH8szSKKJULa2hRr9NK0almqCwP1NbP51KEMP0yeJluEPqZMGoSGxXmEAc2BMW4zTvUWfYUq9vAeFs4%2BjlzWFsiGjU0a7oOH%2B0bNSo9SJME0RhvqTLBuQBaG%2FGrGDJMiYveCd0hfzdQANIQn%2F%2FSxTIQfNVzfoAXXX7weWXxl0y51mnMuRAE397osDgKB7LK8TGpBuQQCBK7PnFQiONL9bFasnVZzjoxbhntRwWyMIPOH6%2Bh5%2FcyDbhmOnqaDT6GyRnXJMPKp9bDoKYoWJDcgKy58rxf1lHvfnqh4%2BcwO05cV3D3nvOHPwGJgdmzYBuHlLwBVE6XfDsU6NPlvBdZjIUHHKr8bD37qM66nd5mcZPreuD%2BAjBotw7En%2BH1L7cK%2FD%2BmanDxLm5XA77IAjdftVsUYJ3vcYZy7uaURNBGcgR0FReJyHGDi2n2JxcY0Rg%2FWm9s2yHRVd9f%2FrW7%2FQfAZUg8eorbEdo4MIwi1ZIvZSMWK60EpZnGWPMbbc1cUu7HQAPDhR7y7XXnzbG0o10mxpcpVXf6dDxP0JE1EhpL86kgzOVjvzAdMF0BwUqo6qcZ1FoamjYXij4G1a8OQUVFtN9awcAUK8nK%2BewVylJXziK5YScc0pk8fPIjCwi5%2B%2FBjqkAVfhxW2yQa1cWik0RXKP15BBtn8nJLt0DHLPEFdipCKpRTulOlRAY7yio5e9mQlRrxZq6Tdw2dDVP0j3vkwn3uBnik4ib%2Fx6Iz2T9bgJ3z6Gy6EqTj7drkykMTNE5YNnZeFksyxTJKUEDH75p0xIv4AX7mfBiv2ycHTUZ7tM0LynAOSQ%2Bdb6dnLvdad3La%2FStaN2ba6IIKSECSKL4SjPJXM1TbPb&X-Amz-Signature=c7fff01f7e030682b73d82b8f29ac9123286e9025bab264e7a2b848278920afa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPAZIML%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD6yY2UstGUL4t2IAlNkaJki1JrfKs%2B60zvGw1wOAAT9AIhAK92dvo2SFZUbMrcvbDkhGYr8MWkGd0VsrpnoBNugrAgKv8DCHMQABoMNjM3NDIzMTgzODA1Igw7TEt7bq6WKyHwW9gq3AOBfZRKH8szSKKJULa2hRr9NK0almqCwP1NbP51KEMP0yeJluEPqZMGoSGxXmEAc2BMW4zTvUWfYUq9vAeFs4%2BjlzWFsiGjU0a7oOH%2B0bNSo9SJME0RhvqTLBuQBaG%2FGrGDJMiYveCd0hfzdQANIQn%2F%2FSxTIQfNVzfoAXXX7weWXxl0y51mnMuRAE397osDgKB7LK8TGpBuQQCBK7PnFQiONL9bFasnVZzjoxbhntRwWyMIPOH6%2Bh5%2FcyDbhmOnqaDT6GyRnXJMPKp9bDoKYoWJDcgKy58rxf1lHvfnqh4%2BcwO05cV3D3nvOHPwGJgdmzYBuHlLwBVE6XfDsU6NPlvBdZjIUHHKr8bD37qM66nd5mcZPreuD%2BAjBotw7En%2BH1L7cK%2FD%2BmanDxLm5XA77IAjdftVsUYJ3vcYZy7uaURNBGcgR0FReJyHGDi2n2JxcY0Rg%2FWm9s2yHRVd9f%2FrW7%2FQfAZUg8eorbEdo4MIwi1ZIvZSMWK60EpZnGWPMbbc1cUu7HQAPDhR7y7XXnzbG0o10mxpcpVXf6dDxP0JE1EhpL86kgzOVjvzAdMF0BwUqo6qcZ1FoamjYXij4G1a8OQUVFtN9awcAUK8nK%2BewVylJXziK5YScc0pk8fPIjCwi5%2B%2FBjqkAVfhxW2yQa1cWik0RXKP15BBtn8nJLt0DHLPEFdipCKpRTulOlRAY7yio5e9mQlRrxZq6Tdw2dDVP0j3vkwn3uBnik4ib%2Fx6Iz2T9bgJ3z6Gy6EqTj7drkykMTNE5YNnZeFksyxTJKUEDH75p0xIv4AX7mfBiv2ycHTUZ7tM0LynAOSQ%2Bdb6dnLvdad3La%2FStaN2ba6IIKSECSKL4SjPJXM1TbPb&X-Amz-Signature=7db1ef53df3f47e5d505447795ced641929cd852428777ad59c48cc01f3faaa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
