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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOUSEQ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD8%2FJwIH6nAD4W1TfZfP941q5WMn9uR11CifHfH0i7tOAIgUq1tGnQce3UGeCuH9wixaWufIMNGacwWS512kfElvqwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXuZicnQ319WdOHaSrcAzGsCnzHqmQ%2FSuZGpcO6eDKFPmfvsYQYb0awTleD8%2BMi1wevK3HSyplrjSKardb7C3jQh5wRFF8Y3afsyF5PjCh2fQzyjYL4pV63c8R4PdY%2B1FW%2F45pSPuOgwCItC0rZVlL4Pz3OmzzdSbSvtUK6GgFtQ%2Bfm%2FOuQcq%2Fg1Bbmw8Vx6eHFZG8icqsVKnkEkfPERQReB3oq41ySx99dhQ70ZDYCp8swKy6yi5tLsuYQm3DjPwmohZ1yFQfE6sMc52X%2BAyPN2vkvX8kNkk0082PIEx97a%2BHuoDN%2FQEDMTn16agkmmpGCJfOOGz4CS249sPwCE%2B6AIJVGEZRc6jXgaIPIvCWNMGub05XsZ7EEIrr3bB%2Bc8l%2FpfXhqKl16y9A4tUWmXOeb4VZHU0Eny6roq1hKqGNkj4Y4B6ktQiqD%2B6EsG5p9OFYdmBpKs0OYmnzqoHw%2Fmah86IwT8zZYD54DURfDKKMUq%2BtO66dpzqdCprGhdii4aVmzkRQe7mVyu%2B3HuBn6i0Pd5KZg26dejv18vxWWmEV72ceU7jMzhgo8v2MLHcReikypYVE5T%2BkxDDQ9MQlhEe6qf80zKK8KnIeEmYZNvYdIL%2F5SPtnddGdTuHjkEv2pC7zykHk8pUdevQgDMIGjqr8GOqUB8LMPJk0xfLhqjTNyE%2BAtFbCkJx9ucKe7wnIMfSGp9VvMwpinxWFIlE%2BbS9WaaK9jMTeZCDeQ7fL8hnmRvziE6z%2FL9lTsd3PuqoRvfKN4n84NR%2BiZnp%2FLFdglESoCzRajbaQzQqFfQ4%2Bh%2FhpZmvqoWzJgC12vOWmt1kbYZMj3uF2Ib0qZMgQoLB26bmLJJwzgwtLXeYFA%2F6o%2BmWExof368%2FKyTrAB&X-Amz-Signature=dc1dba16d2ef880b227d065717a39d378f11198717e9c5ae5d3d45fe79898454&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOUSEQ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD8%2FJwIH6nAD4W1TfZfP941q5WMn9uR11CifHfH0i7tOAIgUq1tGnQce3UGeCuH9wixaWufIMNGacwWS512kfElvqwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXuZicnQ319WdOHaSrcAzGsCnzHqmQ%2FSuZGpcO6eDKFPmfvsYQYb0awTleD8%2BMi1wevK3HSyplrjSKardb7C3jQh5wRFF8Y3afsyF5PjCh2fQzyjYL4pV63c8R4PdY%2B1FW%2F45pSPuOgwCItC0rZVlL4Pz3OmzzdSbSvtUK6GgFtQ%2Bfm%2FOuQcq%2Fg1Bbmw8Vx6eHFZG8icqsVKnkEkfPERQReB3oq41ySx99dhQ70ZDYCp8swKy6yi5tLsuYQm3DjPwmohZ1yFQfE6sMc52X%2BAyPN2vkvX8kNkk0082PIEx97a%2BHuoDN%2FQEDMTn16agkmmpGCJfOOGz4CS249sPwCE%2B6AIJVGEZRc6jXgaIPIvCWNMGub05XsZ7EEIrr3bB%2Bc8l%2FpfXhqKl16y9A4tUWmXOeb4VZHU0Eny6roq1hKqGNkj4Y4B6ktQiqD%2B6EsG5p9OFYdmBpKs0OYmnzqoHw%2Fmah86IwT8zZYD54DURfDKKMUq%2BtO66dpzqdCprGhdii4aVmzkRQe7mVyu%2B3HuBn6i0Pd5KZg26dejv18vxWWmEV72ceU7jMzhgo8v2MLHcReikypYVE5T%2BkxDDQ9MQlhEe6qf80zKK8KnIeEmYZNvYdIL%2F5SPtnddGdTuHjkEv2pC7zykHk8pUdevQgDMIGjqr8GOqUB8LMPJk0xfLhqjTNyE%2BAtFbCkJx9ucKe7wnIMfSGp9VvMwpinxWFIlE%2BbS9WaaK9jMTeZCDeQ7fL8hnmRvziE6z%2FL9lTsd3PuqoRvfKN4n84NR%2BiZnp%2FLFdglESoCzRajbaQzQqFfQ4%2Bh%2FhpZmvqoWzJgC12vOWmt1kbYZMj3uF2Ib0qZMgQoLB26bmLJJwzgwtLXeYFA%2F6o%2BmWExof368%2FKyTrAB&X-Amz-Signature=c8d35b05d3175ba7c40c6c58ce49bf956952b5b733aef0c18d06375a8a4c12fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OAVJWX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCE5OWvFO8ZfZIAY%2BIr6JBoJv2wuy9ZXK4Mu68XilP75gIgQep1bP6CCU1Q3YvZYuZmLXMduBXIyr%2B0mmmwqJZpPxAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlreIRFO%2FWcziqHSyrcA2TLlxG3mtFj6kIic%2FlJRCnfa7bT0nLDRHH4tFJdRlPJOONCwu%2BSkOAHil8zHCJNLCTeQcqo0BldABuAvp3w8bDot0RBejFPDZQlJN22NeCN%2Bm93ofzYNumJlBbLGeJwTiJQgt6%2B2OQYjXNYchfhSOWX5Rt8aAEUZ4F%2FdMnd9yYjrFNgMfiy3%2BKY2bG2lS63HLNQu5ytmf6zkcfWZ%2BY4VOBMr%2BBHS3wvhpxg6sZZu876DiywlM8zYBw1VxJ0k05SpxfdOHLQKHjdVlePVnkWAzqNAd3qLpr%2B6C3ACevhwads6qy9ym5Q5903iHS4zdj9UPzDrO1IBLyl1eSugkD4jgmd7XAvLUNWWc5m33gjALd2FwSjDPgS2U2BqA0bnlr34LqWExbDv6afPz6p2oJN3dGWqJGKIiGszeLCu8nJXUL0cvtIaZxOOSMw6uYTQT7YJ3eN9lKPzOudrtL%2B2z%2BjeXMGNx8qCdWPMF%2BQYxn9SezGhSiyEKUUz8h7BR4k9rrRQ%2BbB5g38VmkMX%2FaLWdOjQTp3k33Dawye5gPN2bFP10YOA45Lne7CWBfgSM%2B1VRvcjJKvDHO5UfOcO17E3VtP9pfExH%2FKMZ1JlF7pMG4arnP07ZiTnRiXuthrcauxMLSjqr8GOqUBcQcIJ012PdR%2B2yDlKOVHtjPU04VACE9n6WtNFoJArJi3e8m80W2rVdcc9BKmEKFhy61oTMesb%2FqvvV9SAVcufCdB6895Ez9YX7Fy6SojahdW9yLgd57p5sUQO3YoYCi06N1CQhGyeLCkuAa%2Bjrz7c0LlVOKoaeEai%2BwLoNxsCi0F%2FxVhMVNqXzW%2FCgzmmmvAmI%2FOmmgoz3Mgh7IRTjT6Jtk9%2Bo1S&X-Amz-Signature=714780c3215d2fd352595f9f287ca545a9007ec7762a85d9e342c749031eefc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNQ4SDF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIECePwfSJKvdF2nKTBbymWBRHN38ezz%2FfW1gsCc0dMocAiEAm0ProNjIeqD5hGw%2FMUehXkPuL4jRp1gVcX%2BWlBaMEyMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAy0xXGKS5IoyYFAircA13I0AWpygWvp7dnWKRsv29NhKWkick7CH9UT9m5wOhOatSC%2Fvp6VRqsj0FajreK581fYYBCDV8frsThS81wCV6TwlnhecVxAHS4mAhd69GoDMl%2FswtgG2dVZHnHgcru8MqRRwP9ncTpHWhpStdyq%2FfEV%2BFPOua38LmENw0R253vtaqJyq4n2ypyjYRaWOTq12cz%2FEoiAMryJT1fI%2FDJkNlAKraPLbwj4GMzXvCH91zx2DdQRJyYQ6cAJb0LmS6XuMIHIK2Rkgj1l6QSZAed4Jn5bf743mpiYl3AvV0XbFF6ECl7dA%2BJUIrKjWhslGITPr4Lt7CgeL86JpPNFLgTyzfuxc5tCzBu3q%2BOBvISKiibWalhLoNzlzptjDKpsdIY%2B2ErdZ0eR1wEQ2Jelw%2FubhlMmHzCflFMp%2FflfC82xG2nd6HsrDHFm8c4fcMBPIx9BCBT1PK00KtAWl1Tj9lvDD2RL7RUz0VgfuL%2BxN9BYTXjUQC6OxirsHOKXkmd6SoavIG5NcVRLonbbI20vFBnavtrX7h0e3SdGPzcXt9jVw1dlmWQq6bm41XFzx6%2F3Ur7EZZYPkMR8Q0R3h1yj0VGUv%2FAwvKNFfTGh1il5hmpoEDu1o9xmxXvC6qry9u0MLejqr8GOqUBLj7lWXCl1yFfaDAsHVHKzgorm2OWD3zOXIWIIM%2BgWDbvlZzyzWnfNHkDGnryBTIkbXigAXY%2Fj89hp130roBKG%2FINppeMGkyTbI0IucUruWmmz%2FLX9Eg2bqQcp3LM97Y66B2RzKdQ09PpDni%2BDVJxAYjETqmMCpiCn4JHHkmhLrMU%2FGBvfv2Wzo%2Bnl77VQ1e2z13oHDWUoW04Fq0W%2F52jraU%2Bu62F&X-Amz-Signature=a6fda6d2595a6342dff018d60e4ec274582fdc5a30cd8343c26822fb77268bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOUSEQ6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD8%2FJwIH6nAD4W1TfZfP941q5WMn9uR11CifHfH0i7tOAIgUq1tGnQce3UGeCuH9wixaWufIMNGacwWS512kfElvqwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXuZicnQ319WdOHaSrcAzGsCnzHqmQ%2FSuZGpcO6eDKFPmfvsYQYb0awTleD8%2BMi1wevK3HSyplrjSKardb7C3jQh5wRFF8Y3afsyF5PjCh2fQzyjYL4pV63c8R4PdY%2B1FW%2F45pSPuOgwCItC0rZVlL4Pz3OmzzdSbSvtUK6GgFtQ%2Bfm%2FOuQcq%2Fg1Bbmw8Vx6eHFZG8icqsVKnkEkfPERQReB3oq41ySx99dhQ70ZDYCp8swKy6yi5tLsuYQm3DjPwmohZ1yFQfE6sMc52X%2BAyPN2vkvX8kNkk0082PIEx97a%2BHuoDN%2FQEDMTn16agkmmpGCJfOOGz4CS249sPwCE%2B6AIJVGEZRc6jXgaIPIvCWNMGub05XsZ7EEIrr3bB%2Bc8l%2FpfXhqKl16y9A4tUWmXOeb4VZHU0Eny6roq1hKqGNkj4Y4B6ktQiqD%2B6EsG5p9OFYdmBpKs0OYmnzqoHw%2Fmah86IwT8zZYD54DURfDKKMUq%2BtO66dpzqdCprGhdii4aVmzkRQe7mVyu%2B3HuBn6i0Pd5KZg26dejv18vxWWmEV72ceU7jMzhgo8v2MLHcReikypYVE5T%2BkxDDQ9MQlhEe6qf80zKK8KnIeEmYZNvYdIL%2F5SPtnddGdTuHjkEv2pC7zykHk8pUdevQgDMIGjqr8GOqUB8LMPJk0xfLhqjTNyE%2BAtFbCkJx9ucKe7wnIMfSGp9VvMwpinxWFIlE%2BbS9WaaK9jMTeZCDeQ7fL8hnmRvziE6z%2FL9lTsd3PuqoRvfKN4n84NR%2BiZnp%2FLFdglESoCzRajbaQzQqFfQ4%2Bh%2FhpZmvqoWzJgC12vOWmt1kbYZMj3uF2Ib0qZMgQoLB26bmLJJwzgwtLXeYFA%2F6o%2BmWExof368%2FKyTrAB&X-Amz-Signature=4ec9b8cf23704b07fe506811e9366288804b164a67f18342791d9c8f8c8b3860&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
