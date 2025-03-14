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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMWPCOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9I5d5eYPzbYPkJ7yc102Ui4WwoukA46HhqusUzUXpMAiEA8XH7RdCDj0v9a3UrgINQ1vaiTVH4cqShvcjYGe5KcYUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh5fX4DoAMFAJwOSyrcA0b2FO0aFHczYwyziaU%2FevzDPLEYF5KPxxFK9GBnRRgTQetlWfrYds3rMuXtRpTHGuTsenHoTs3NGXOMQTh6DLbh4jfEc6%2FX%2FylTbNJHR0HvnbR9JKan0sLZR0ySL2nzXk%2B22SRcyoqH46xayTfgSW8894ROR9PH5qvQHV3cybJbBhsd3rboMy0WjBVf6iTRwOQepmdPM6uiw3YpW4XaSDNqR2mnIYKIt3hab%2Be%2B34RszRbDlplXwj2rbNhu89nh8D1lLo9JdcCZFWR0lhwbeAHwjiS0UYzpocAL%2B%2Fuo7AFP8l6Eah0NJBedeXBmNA8DqiJrFCE5mhtmgwhDa1UGU554fCbOUw3q72G%2BSYIkwJsRSowDAZ2HohmBKHZynGUlBBGDEiH%2Fq9Kredy7CPRW9z6zbnTRI9hUdTpYexQpGzUsIdtUMyBseXnUmQ9Bw6q%2B5PusHpWXzh0KEJln5ExDmpCmjJrK3rsVjhq85bVFkcHnldA7Emih39Hcf2PiiZpmYFmUN05%2FNbBDCVf%2F7FD%2BhYvxVseLAVOulXMPxr2SU1q9ySZpV%2FD2mMwYShlGr%2B%2FtB9qeUvTBAmcqeftlgtPHtPD9JH3FG5lz7HyfksTME592rPySgeJDWqB9r4%2FVMJW50L4GOqUBQv8Ea3Xyy47vz5Yk1KfK172bb0qHKEjeqhzQnq4iZTAcLZkcLTETVZ%2BsmiWY1R97BrQH5b60NM5zOD8ac9c7Rk%2FApH3zaJFiHR6%2BJXBFS5J3OyVe17Or5eGxwuQLRKmp8OlzJQminf1EB6RqY8h6nFq%2FMHT1LQTNELt4ZrR83lRNSc5qjZnuiVxIPQr3IW5UqZpHrJKoIpCfH52P6BYWDxyB8YMW&X-Amz-Signature=b205f9b2f9c67797b88ee7c24e7013ac1c271c7411b8b699c7b28c279590c663&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMWPCOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9I5d5eYPzbYPkJ7yc102Ui4WwoukA46HhqusUzUXpMAiEA8XH7RdCDj0v9a3UrgINQ1vaiTVH4cqShvcjYGe5KcYUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh5fX4DoAMFAJwOSyrcA0b2FO0aFHczYwyziaU%2FevzDPLEYF5KPxxFK9GBnRRgTQetlWfrYds3rMuXtRpTHGuTsenHoTs3NGXOMQTh6DLbh4jfEc6%2FX%2FylTbNJHR0HvnbR9JKan0sLZR0ySL2nzXk%2B22SRcyoqH46xayTfgSW8894ROR9PH5qvQHV3cybJbBhsd3rboMy0WjBVf6iTRwOQepmdPM6uiw3YpW4XaSDNqR2mnIYKIt3hab%2Be%2B34RszRbDlplXwj2rbNhu89nh8D1lLo9JdcCZFWR0lhwbeAHwjiS0UYzpocAL%2B%2Fuo7AFP8l6Eah0NJBedeXBmNA8DqiJrFCE5mhtmgwhDa1UGU554fCbOUw3q72G%2BSYIkwJsRSowDAZ2HohmBKHZynGUlBBGDEiH%2Fq9Kredy7CPRW9z6zbnTRI9hUdTpYexQpGzUsIdtUMyBseXnUmQ9Bw6q%2B5PusHpWXzh0KEJln5ExDmpCmjJrK3rsVjhq85bVFkcHnldA7Emih39Hcf2PiiZpmYFmUN05%2FNbBDCVf%2F7FD%2BhYvxVseLAVOulXMPxr2SU1q9ySZpV%2FD2mMwYShlGr%2B%2FtB9qeUvTBAmcqeftlgtPHtPD9JH3FG5lz7HyfksTME592rPySgeJDWqB9r4%2FVMJW50L4GOqUBQv8Ea3Xyy47vz5Yk1KfK172bb0qHKEjeqhzQnq4iZTAcLZkcLTETVZ%2BsmiWY1R97BrQH5b60NM5zOD8ac9c7Rk%2FApH3zaJFiHR6%2BJXBFS5J3OyVe17Or5eGxwuQLRKmp8OlzJQminf1EB6RqY8h6nFq%2FMHT1LQTNELt4ZrR83lRNSc5qjZnuiVxIPQr3IW5UqZpHrJKoIpCfH52P6BYWDxyB8YMW&X-Amz-Signature=7708bdc7c2e8e964ca1b2f13d52288f78f93730bd837c743d9b5567c71bf492d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXIM3Y7V%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1IqxmCs4EAz9Te46CTLVRZYhpJaRzT90Rx%2FRdVoXFowIhANGcWHFWDE3S%2F7YMRCmOJvBrkM2laYO%2B74np4MKwsPDIKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BAYshKe6geP0Dimgq3AN0dCecZoC8%2BwGNeXj0SXNrL%2BlUrIcVSCsF%2BGgyjx4zcaiFcxY73N610N8pOYyIH2rYerYAvw4YSCVDg0o1hz9JKpoWv0wM%2BpwKTsNql%2BFT7PAPXY0SKpQjy0OeuHo76XTq2TCWz6vsJ8whpIw2WxpYVl3DCQW1KOgdcXmnJIAw4s%2FTbSGA2taZw33CTjPN61wdrxW6tUa8r4huSbS6lFZ6WuH40jW98QFX47upsEl6ZSV%2FVqsa1b97Sa6KydJZkuQGKMtPRL1CnzumlBkoU08vdpWd2L2xQNrWU4b1II6KvFynrwIM1%2Bl%2FA%2FC6EHKGjsiTxzYi6V%2FqLHZviImx494ta5Zwazp7fsIGfXAvX6CKhdkszMpobyqelhO6PUEhkPFM%2BnE4gBVUtk2p84JVq2LESxmpjnCYUJsOVMBLYRPvzdVUG4TGaw90w5y6GxSz75F7EnFoFZxH4zB9RBG7VUajRONcgpyymGLtJnolqqZZPJ%2F8uYM52yZMPj83MGFJJYEYiA6tviAFkDaF483t20To2sPUUSx8c649T9C4ovhKUYZ98QTw6PGri3mhJYcJdjUUDXJLfO7kHN0tiUAAhz9MSk3FG3jPV%2B60bvMAbDUiDRS93eD1nmG06IhVJjDXudC%2BBjqkAelJDFhvp%2B4SgDurnenHBe%2BMqv%2Fv91IOLcwGKn8NBPeffigfs6ibz6AN27YY0hfeDtcOfgiSg0YISYb8qKzhPDsnu41TxPEDxoT4LV4208mU7Z6mxh%2F0KLcdb4DmTBcSRefva39GC%2BUsQVwlf5F%2B%2F%2FYyhFdaTL8oDuiiEbNvvbkvdbH5BJzSbntDq9v1o1zgRxq63GZWr5RA%2BMia8Lej9EoJtvCy&X-Amz-Signature=19c498101a029e4fae41cd670a8ff63856d414cfcecd4bc19a855bef4bc40b70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7N2Q3SW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9QnFkB6UUGhOqIm8t74mmGhJDtTYtByUmrqmvwnvJAgIhAJ0soRK8pvIaFDMDWqFl6Mkz0um%2BEA7AZVq5ilK1VszTKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYMjFm14kKBUscP4q3ANK8aIEztpSDsSB%2B6ezeH%2BGzYvBbrmHLno%2FRBx4PTZuS6RnS9uxtVNAVYvHvsx41QAtImNNOC48NsxQ0mrUy5JmMCHKuo%2FrOKNHmm1CGTQMfnRQFSSkcFUOKWJSgEVGU99XiyvkP2YnGYQhbQ0jvk5LPNoZ6kl4nAl2SToSPEXfPW2yAZMFk%2ByeS14oi%2BN4dXe8Z%2FuVCDTf%2F7WMl8iJKFm9zNqMHKSqn9GwkJMfdrVMHViZoeOmrWQn9RswZSPwot5DdNdd2w8OKJXqJR9Dt5R40sjxqX0Ys3WrekKnYJ5DDkUm3p6Vqjy9WZw3vMlReYK9zhojjsBx8D3cLtGBOaqgWbs%2BssIVoF1Iz2%2BR9PieOVZyCxq3AmAn0ITr2VYWQrgxm%2FS9fbwsoJjItAlKwlRw2Mwy0AiqFio4JUgeWLjjNvPuRrEjW5zs8QjIE78Q9VKDYySHc1yZ9VcRCAkc6ygVC2N5o9DKLu6s5o%2Fcfk8ojU8k%2BnDVLyYNf3VrLOS7lwPCfecdYuZdvCYFivmCDYyDS9sGZv0%2FiDoXAAZpb3hCOhNtffGPREVzPUVNd8u5fcVfOSQpJEkiu41J3Ycv5td61vF9lS1ji2tlZD%2BsQ8D1ICNytNsexK0z1mtcaDCfudC%2BBjqkAXHeK8eXwf8oLl%2B8z98rm46TBoiIDctZDw45CoQ0Hk%2BdhaZHRxvfHJqA4FILNUBdQdkCL2fkO0OoLBdf23r9uHMth%2B6Unz2F5m2WXEq5IK407LstgV%2Fw4CVo%2FVDECChY5TuVen1Wq0nmiZKtYXqPaGQFCiurRhNuvT4%2F%2F7BhuUXQifl1XiSRZnKwQ6Bf94r5qgIX2VG4OmOytEK9wy5A0DdKUyqv&X-Amz-Signature=0bfc803f1b2b8728b1859fb0d9cf502cde37ead0c2e2716feda9568061cad585&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMWPCOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9I5d5eYPzbYPkJ7yc102Ui4WwoukA46HhqusUzUXpMAiEA8XH7RdCDj0v9a3UrgINQ1vaiTVH4cqShvcjYGe5KcYUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh5fX4DoAMFAJwOSyrcA0b2FO0aFHczYwyziaU%2FevzDPLEYF5KPxxFK9GBnRRgTQetlWfrYds3rMuXtRpTHGuTsenHoTs3NGXOMQTh6DLbh4jfEc6%2FX%2FylTbNJHR0HvnbR9JKan0sLZR0ySL2nzXk%2B22SRcyoqH46xayTfgSW8894ROR9PH5qvQHV3cybJbBhsd3rboMy0WjBVf6iTRwOQepmdPM6uiw3YpW4XaSDNqR2mnIYKIt3hab%2Be%2B34RszRbDlplXwj2rbNhu89nh8D1lLo9JdcCZFWR0lhwbeAHwjiS0UYzpocAL%2B%2Fuo7AFP8l6Eah0NJBedeXBmNA8DqiJrFCE5mhtmgwhDa1UGU554fCbOUw3q72G%2BSYIkwJsRSowDAZ2HohmBKHZynGUlBBGDEiH%2Fq9Kredy7CPRW9z6zbnTRI9hUdTpYexQpGzUsIdtUMyBseXnUmQ9Bw6q%2B5PusHpWXzh0KEJln5ExDmpCmjJrK3rsVjhq85bVFkcHnldA7Emih39Hcf2PiiZpmYFmUN05%2FNbBDCVf%2F7FD%2BhYvxVseLAVOulXMPxr2SU1q9ySZpV%2FD2mMwYShlGr%2B%2FtB9qeUvTBAmcqeftlgtPHtPD9JH3FG5lz7HyfksTME592rPySgeJDWqB9r4%2FVMJW50L4GOqUBQv8Ea3Xyy47vz5Yk1KfK172bb0qHKEjeqhzQnq4iZTAcLZkcLTETVZ%2BsmiWY1R97BrQH5b60NM5zOD8ac9c7Rk%2FApH3zaJFiHR6%2BJXBFS5J3OyVe17Or5eGxwuQLRKmp8OlzJQminf1EB6RqY8h6nFq%2FMHT1LQTNELt4ZrR83lRNSc5qjZnuiVxIPQr3IW5UqZpHrJKoIpCfH52P6BYWDxyB8YMW&X-Amz-Signature=fd11e88b5f30a34fd88eded5c4ca15c736eebac9948f402749459368219741e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
