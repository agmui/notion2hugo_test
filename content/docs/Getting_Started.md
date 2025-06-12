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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPQB7I7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDpscbB4aILbPUuT5C2KAW77psnJamOed4XdV%2BL7oxsqgIgOB9f2HJmuE2HQp6p%2Bp8CqAgk%2F7Oynu7hmcRa%2B3xxijsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEk8OJ9vMAsaUsJnSrcA0PD5CBkD7JMNHn7PIFcUNQ9yiAu852Ng8CgcqRYbO69tkFjSt5fT9%2BntFR5vYjoSPk1UFZqFT1TydWyDkHICkPrzI%2BjqkCud3MF%2FC6t34%2BoYUKdgZto6jD8iznilX1LpOB%2BTZVq8%2BnXdeaGjzAiKULlW%2FdcX5%2BPXcV1QRiY1PF9zs2jBnrLoM39Tr8yRa2iLw2NqaxPqcMXCDpslc6kBHaS4Vn0hbTcEZfYUurXHwJPmP8gZdB4ZvWAdHUPiDVa5UQDCX%2BeDqZJr4eqtYEhiVxQKp%2FXb8CdE%2BVlocZdQuyo5XF1N8DrIKNUK5iL7PBj2vldYHwBLl7diEWQ2fnwtXyIy41mJ7%2BTx4GHcT0fBMWsTyWlROv7xGl41qyTva%2BVnzMfWYuhEcBSwl6SlDfaCQrtM%2BdFDuuKr4QXmzM6UkC14LqzfaOjllj3gWC7%2BatI7l3RrpsuQpe9thCsu2VWa8JE%2FzAgrydJruEt6%2BzxXjz10Kg7wvDGZvtBB0zaPtkerMPbpSo0%2BctPhY13jRdhtHhhgbpvgSdjkvMIU6sdjxk%2BO9cBo3D0PCbxCeNepbAHHF4fiUSvSo5LQU8MWxytDYvaYwgFMJF3YQkGXAuoy9HWU90LnqsmfZ7RJSpnML2JqsIGOqUBdOHbFxVEqUaV6%2BEyS%2BhUwN2vQ0byS%2B9MKvjwsbTbUQgU9Ra3qf1mz3gA2jeVLuAYmUUiKzNhdCHSryMaulWwsKWmXYfQRitZ%2BHqmTajFJOq5YvxZrEQsuJZW16h4efVbwJV%2BZf4il78hLyln2o69Qd1Qz5vTbkQ167cMVSj9SFFky5IqpMWcm%2BNc0MTH8EcldCKPgY5Zt5Onewn7%2FEui5IfCjNkx&X-Amz-Signature=dcdef2a2228c504fce3f741b80572617a5eea1624a1b46a4843b335257170477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPQB7I7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDpscbB4aILbPUuT5C2KAW77psnJamOed4XdV%2BL7oxsqgIgOB9f2HJmuE2HQp6p%2Bp8CqAgk%2F7Oynu7hmcRa%2B3xxijsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEk8OJ9vMAsaUsJnSrcA0PD5CBkD7JMNHn7PIFcUNQ9yiAu852Ng8CgcqRYbO69tkFjSt5fT9%2BntFR5vYjoSPk1UFZqFT1TydWyDkHICkPrzI%2BjqkCud3MF%2FC6t34%2BoYUKdgZto6jD8iznilX1LpOB%2BTZVq8%2BnXdeaGjzAiKULlW%2FdcX5%2BPXcV1QRiY1PF9zs2jBnrLoM39Tr8yRa2iLw2NqaxPqcMXCDpslc6kBHaS4Vn0hbTcEZfYUurXHwJPmP8gZdB4ZvWAdHUPiDVa5UQDCX%2BeDqZJr4eqtYEhiVxQKp%2FXb8CdE%2BVlocZdQuyo5XF1N8DrIKNUK5iL7PBj2vldYHwBLl7diEWQ2fnwtXyIy41mJ7%2BTx4GHcT0fBMWsTyWlROv7xGl41qyTva%2BVnzMfWYuhEcBSwl6SlDfaCQrtM%2BdFDuuKr4QXmzM6UkC14LqzfaOjllj3gWC7%2BatI7l3RrpsuQpe9thCsu2VWa8JE%2FzAgrydJruEt6%2BzxXjz10Kg7wvDGZvtBB0zaPtkerMPbpSo0%2BctPhY13jRdhtHhhgbpvgSdjkvMIU6sdjxk%2BO9cBo3D0PCbxCeNepbAHHF4fiUSvSo5LQU8MWxytDYvaYwgFMJF3YQkGXAuoy9HWU90LnqsmfZ7RJSpnML2JqsIGOqUBdOHbFxVEqUaV6%2BEyS%2BhUwN2vQ0byS%2B9MKvjwsbTbUQgU9Ra3qf1mz3gA2jeVLuAYmUUiKzNhdCHSryMaulWwsKWmXYfQRitZ%2BHqmTajFJOq5YvxZrEQsuJZW16h4efVbwJV%2BZf4il78hLyln2o69Qd1Qz5vTbkQ167cMVSj9SFFky5IqpMWcm%2BNc0MTH8EcldCKPgY5Zt5Onewn7%2FEui5IfCjNkx&X-Amz-Signature=4a5cf437a076632a8893ce5dc121cfcdc312e4310b482068d78fb6f2cc601bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPQB7I7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDpscbB4aILbPUuT5C2KAW77psnJamOed4XdV%2BL7oxsqgIgOB9f2HJmuE2HQp6p%2Bp8CqAgk%2F7Oynu7hmcRa%2B3xxijsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEk8OJ9vMAsaUsJnSrcA0PD5CBkD7JMNHn7PIFcUNQ9yiAu852Ng8CgcqRYbO69tkFjSt5fT9%2BntFR5vYjoSPk1UFZqFT1TydWyDkHICkPrzI%2BjqkCud3MF%2FC6t34%2BoYUKdgZto6jD8iznilX1LpOB%2BTZVq8%2BnXdeaGjzAiKULlW%2FdcX5%2BPXcV1QRiY1PF9zs2jBnrLoM39Tr8yRa2iLw2NqaxPqcMXCDpslc6kBHaS4Vn0hbTcEZfYUurXHwJPmP8gZdB4ZvWAdHUPiDVa5UQDCX%2BeDqZJr4eqtYEhiVxQKp%2FXb8CdE%2BVlocZdQuyo5XF1N8DrIKNUK5iL7PBj2vldYHwBLl7diEWQ2fnwtXyIy41mJ7%2BTx4GHcT0fBMWsTyWlROv7xGl41qyTva%2BVnzMfWYuhEcBSwl6SlDfaCQrtM%2BdFDuuKr4QXmzM6UkC14LqzfaOjllj3gWC7%2BatI7l3RrpsuQpe9thCsu2VWa8JE%2FzAgrydJruEt6%2BzxXjz10Kg7wvDGZvtBB0zaPtkerMPbpSo0%2BctPhY13jRdhtHhhgbpvgSdjkvMIU6sdjxk%2BO9cBo3D0PCbxCeNepbAHHF4fiUSvSo5LQU8MWxytDYvaYwgFMJF3YQkGXAuoy9HWU90LnqsmfZ7RJSpnML2JqsIGOqUBdOHbFxVEqUaV6%2BEyS%2BhUwN2vQ0byS%2B9MKvjwsbTbUQgU9Ra3qf1mz3gA2jeVLuAYmUUiKzNhdCHSryMaulWwsKWmXYfQRitZ%2BHqmTajFJOq5YvxZrEQsuJZW16h4efVbwJV%2BZf4il78hLyln2o69Qd1Qz5vTbkQ167cMVSj9SFFky5IqpMWcm%2BNc0MTH8EcldCKPgY5Zt5Onewn7%2FEui5IfCjNkx&X-Amz-Signature=d2b18c70c65f093172696faaf1e0d9ff439a56d9375ff452941e8470f4acdb72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNT3ASY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCHzbrcfhAFv0PdHIRxTQ0bwf2%2BFlRAIo2wFkfCjZ8t4wIgFGdThNvYO0O0fcVwGnSHAUfcf5pc8F2eMAmkFXoDneIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG4hfpmjrjhQBvKMyrcA25g7z1GQXB92Dr23j%2BzWIbuD4iwwI0r9fKz%2BXKKmsDsr71l0GeIpIYdqUoZeczNbBF0YuPgRiO5x78gt3K%2FjJRsSksqrP86njc88g5zFgDAz2xuoJPnz6LsoZY1vu%2F9rJrcvze0Icui2FDdT%2BjhqBdEmIQwv9VWwVJZ7GeCHQ9WfpWTaMvxEgkuxQtdCPxB8NhPBWMFILq893lZgR8hEy0PRth3MSsSktDUuF5szAVojS4L3gECHvvceL9sXxavrlKcEMrpi4oeOTmw9qDJBeHIYC5%2FuyErHYOZABj28FWSPKMTI8ejthNRX1ttURVcT8pX1PqGG1WxVsgX080GnIJVw0MduR%2BHnOIxeubzorfTZ4Gzjn30Pzb%2FYscJupj%2FEzK%2FsP58%2BQo9nx0geQmN74MnsQBYx0paE79svlCPM4Mc5%2BvCzgWHmjX7n%2FXHpdTKXJEXQPCRT2AqhSYAG3lLAp9o4%2FRkhxvnsBdaJjX9ddOoXKuFowNrfBig9m9mShJ39faVdS4VpvyubK4%2B4GxIltiR8anjUapygMgQd9VZI%2F%2F5mCq2OXCvx1ATZokGaqlSNn4mb%2BokJA0gwLQqCrrUOkZ%2BAFEEaAVxZ39Z1CVudyOqyJKd14AV4heTIU%2BfMMaIqsIGOqUBkzWAZDDx%2BE9y1I%2Bqk6PUACfl%2BAjbYGvNbzCO%2B9DtoP43nSquEerdm7hZ1F1JHkWP7heSIanJn8ECLi8oEfcYNU5XFYOkfyCX6lhzEFJDq%2FY3A1%2BbofLh5PWoIVs1CW%2F6t%2BDwHFujMKbvyAMxes9QEMAsg3qkkBXGujWz9pJK21mac5piQbO%2BEAFSdZmse2s9Y5qMOY8Pg%2FuvrPpcPmffBkffqBl2&X-Amz-Signature=c67a191446594acef046b7ba29a9149441de48cd4276e89730b83e5d7fbc40a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTWO5V6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCVlbZWGhdvTs2Sa4BuhEuominKBS1sGlUX1ZgYpX6omgIgFVw3SRMeo%2BB9RDaTYi3TsNaOJofi6r9mZi8fNVv364gqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMhka8GVKsbE%2F%2BJ%2ByrcAyd0QkUikgKPSE51W5JqrNSqdNAr%2B6bPLNdR5osD4isVc9ZeGwJlFYSch%2BgQVg7clvT%2BZ%2F47JvaUTqDifBU7if60rn13oJ7j0xxDAJ8Sfg%2FOisLbUmC1cJELjYcrVTR5uEAv9TaRmm3kCI6KisL4cliBweTUaLg71ugEUrY3r7XvDX5KnkbJR0dVeJ1hYZvJ4YpgbkfK%2FHf4XlbeZCbLvcavq%2BhRPqLyOQ%2BIDvCzcFVphaTYKScBpj4x1A%2BdG01VCWtT1KHIKf%2B9QDNl7rDShvS30DaxuANG0y5ILeAJVUBtCxJ1o5a%2Fl6ttI%2BJ%2FDdMk6BbOJ2yEa85ZPIrzM5d2Onb4YaSJEZEJSdLd%2Fv5jAldVrfnrfEe3gtwTRaxCAFbT43hAc8DtZbrWDLwmBZywFcEsNthYOMe9lv1NQajwBxEx7b6OhD4vsDUNCEAm0aqyMy2bOHvURwZfJKXjaKtAOAZV114bTOsvrlkD8RCBffSq67iSb9sZgINEBDRbMzk1RUZWACwZZ9C9sYrwQqWpT%2B6%2BJqEeq7S8yGn%2FZp9hxwxMah9%2B5stUwm%2BnW2FFFabdUQTBGXp7vRJx9NkQPGR9a66GPKpTx0itTL6RWeiLpB%2F03wCGksXOOUVnzy%2BMMKyJqsIGOqUBQPJJsjMLzV0K7g3yqJQpnn165bFpieDx15tXOHB23YhOalZhImIv75uG7ozUdhqnhp7Y1ntrEFpPysXpECxVXuNAdA3k6FHITDMUFAp2Ak5DWUQCTzGGxl6RwidLZ0Z9I96MuwjrCLgGSkNBacDoJn3ul%2BAsUq3wDR8ZlbKY0EhY7rT9%2BcCKOhDj0i2hCMdFlkat0SqQAbAmEfQP0pY37NJMD%2F7U&X-Amz-Signature=e69e571ffd22ce7c898765e4c1c702f7033b7194b86db6a5e042baf72be24288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPQB7I7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDpscbB4aILbPUuT5C2KAW77psnJamOed4XdV%2BL7oxsqgIgOB9f2HJmuE2HQp6p%2Bp8CqAgk%2F7Oynu7hmcRa%2B3xxijsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEk8OJ9vMAsaUsJnSrcA0PD5CBkD7JMNHn7PIFcUNQ9yiAu852Ng8CgcqRYbO69tkFjSt5fT9%2BntFR5vYjoSPk1UFZqFT1TydWyDkHICkPrzI%2BjqkCud3MF%2FC6t34%2BoYUKdgZto6jD8iznilX1LpOB%2BTZVq8%2BnXdeaGjzAiKULlW%2FdcX5%2BPXcV1QRiY1PF9zs2jBnrLoM39Tr8yRa2iLw2NqaxPqcMXCDpslc6kBHaS4Vn0hbTcEZfYUurXHwJPmP8gZdB4ZvWAdHUPiDVa5UQDCX%2BeDqZJr4eqtYEhiVxQKp%2FXb8CdE%2BVlocZdQuyo5XF1N8DrIKNUK5iL7PBj2vldYHwBLl7diEWQ2fnwtXyIy41mJ7%2BTx4GHcT0fBMWsTyWlROv7xGl41qyTva%2BVnzMfWYuhEcBSwl6SlDfaCQrtM%2BdFDuuKr4QXmzM6UkC14LqzfaOjllj3gWC7%2BatI7l3RrpsuQpe9thCsu2VWa8JE%2FzAgrydJruEt6%2BzxXjz10Kg7wvDGZvtBB0zaPtkerMPbpSo0%2BctPhY13jRdhtHhhgbpvgSdjkvMIU6sdjxk%2BO9cBo3D0PCbxCeNepbAHHF4fiUSvSo5LQU8MWxytDYvaYwgFMJF3YQkGXAuoy9HWU90LnqsmfZ7RJSpnML2JqsIGOqUBdOHbFxVEqUaV6%2BEyS%2BhUwN2vQ0byS%2B9MKvjwsbTbUQgU9Ra3qf1mz3gA2jeVLuAYmUUiKzNhdCHSryMaulWwsKWmXYfQRitZ%2BHqmTajFJOq5YvxZrEQsuJZW16h4efVbwJV%2BZf4il78hLyln2o69Qd1Qz5vTbkQ167cMVSj9SFFky5IqpMWcm%2BNc0MTH8EcldCKPgY5Zt5Onewn7%2FEui5IfCjNkx&X-Amz-Signature=51713bcdcc58bbfc779f27d49685212325f5d0e250d1ad61e44304bd62cc395a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
