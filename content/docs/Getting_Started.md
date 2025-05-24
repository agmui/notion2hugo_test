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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGMD7OQ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDBg0yAutqjx1pSohI6qPey%2BbWAbLAwja6QkjEIfruqLAIgW0MiqqV8gC8TU89bhFg3A47BtwVCAIHf%2FJkNpTqFb6kq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGt5QzJnAaLTEVoqAircA4cZ%2BxGDKqwt7n3qA3W4UaW5T5nIOGpa7ByaT5R2ijV3bdA2yYU1GKE2CbUHxMv9drTo0LHjYStOFhEbuKIlXSkpD1LEBqrfTf3RBw0DquRv6w3Uv9w%2Bn8JJ89A7O63OCVk7lRCpAa42bepQ%2FGsXt2ZwJdnQcrAxHrXcRHd%2BqF9%2F%2BHSLVWEyhtcZh%2FPgu12M%2FFPFK%2FEtWOD%2B4C48o2zkFhaUhMn%2BKyLzUMmRhdVx4BFVAgWA6D0OAdtvRjkbZpKUz7q5hG8sWgZ5p3qGv9qjalOcbN1b6C9lXnTgKzBm5EDlXn2cAAGHq9WI5XJW4oF7qsgsIhx%2Br3QKxzxqGkAD3S7eSZVvketIKnVrnts7Y%2FxkqcZO0FDsq1q3gg0UwZU9b8flKMU0X%2BmWbTt68DJk8euapuk%2BmqXttHYz1SJjdTgG6AnanbumL4zlhF906TdDW3jLochXkwVYOKrlD5lbi0Gy7fTQUpN1BblpDYhlye9bHpg5wE8kTNHjfhEw%2BBZhEbF6UM%2FFmU3tCVo0E3pnionZs179jALm5O0Zk2rfSDbdm5PqcYQDc1W6vShXxNjZBJJuaqAMLJoGIjvpreNR8%2FwDBpd%2F1GMNYg0gAjEc52cZVK2NejlNI9trX%2B%2BWMOTMx8EGOqUBOaDFfKMPo0%2BqErQZ%2BRnhgZs%2Fw4r%2F3PreRs2T9ywgJpgKSBNAVx5kX%2BJ7o9SYXQc3M4PQUXdx85kDo8bGE%2BDVXR3XmrN2XXQqBpCrkDMSLO56VkJEsMyRb7mrzNl11S1lbFsrXwaDt5fup7AL38CHd%2BHbAxEFg7to3hraLdxgxAz6u2hxfltF0hATHTv%2BgY16rO%2BE5tu1g4g0Jg3SyYDPhBdZZYRd&X-Amz-Signature=5537ac80334393bdcb48a130387dd377ecaa8fb78e187a9e78f79b73c57906a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGMD7OQ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDBg0yAutqjx1pSohI6qPey%2BbWAbLAwja6QkjEIfruqLAIgW0MiqqV8gC8TU89bhFg3A47BtwVCAIHf%2FJkNpTqFb6kq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGt5QzJnAaLTEVoqAircA4cZ%2BxGDKqwt7n3qA3W4UaW5T5nIOGpa7ByaT5R2ijV3bdA2yYU1GKE2CbUHxMv9drTo0LHjYStOFhEbuKIlXSkpD1LEBqrfTf3RBw0DquRv6w3Uv9w%2Bn8JJ89A7O63OCVk7lRCpAa42bepQ%2FGsXt2ZwJdnQcrAxHrXcRHd%2BqF9%2F%2BHSLVWEyhtcZh%2FPgu12M%2FFPFK%2FEtWOD%2B4C48o2zkFhaUhMn%2BKyLzUMmRhdVx4BFVAgWA6D0OAdtvRjkbZpKUz7q5hG8sWgZ5p3qGv9qjalOcbN1b6C9lXnTgKzBm5EDlXn2cAAGHq9WI5XJW4oF7qsgsIhx%2Br3QKxzxqGkAD3S7eSZVvketIKnVrnts7Y%2FxkqcZO0FDsq1q3gg0UwZU9b8flKMU0X%2BmWbTt68DJk8euapuk%2BmqXttHYz1SJjdTgG6AnanbumL4zlhF906TdDW3jLochXkwVYOKrlD5lbi0Gy7fTQUpN1BblpDYhlye9bHpg5wE8kTNHjfhEw%2BBZhEbF6UM%2FFmU3tCVo0E3pnionZs179jALm5O0Zk2rfSDbdm5PqcYQDc1W6vShXxNjZBJJuaqAMLJoGIjvpreNR8%2FwDBpd%2F1GMNYg0gAjEc52cZVK2NejlNI9trX%2B%2BWMOTMx8EGOqUBOaDFfKMPo0%2BqErQZ%2BRnhgZs%2Fw4r%2F3PreRs2T9ywgJpgKSBNAVx5kX%2BJ7o9SYXQc3M4PQUXdx85kDo8bGE%2BDVXR3XmrN2XXQqBpCrkDMSLO56VkJEsMyRb7mrzNl11S1lbFsrXwaDt5fup7AL38CHd%2BHbAxEFg7to3hraLdxgxAz6u2hxfltF0hATHTv%2BgY16rO%2BE5tu1g4g0Jg3SyYDPhBdZZYRd&X-Amz-Signature=907fc04bdb1b918148b8c7da3cdc2355d512a904d00f69c3cbd52e582998db6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGMD7OQ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDBg0yAutqjx1pSohI6qPey%2BbWAbLAwja6QkjEIfruqLAIgW0MiqqV8gC8TU89bhFg3A47BtwVCAIHf%2FJkNpTqFb6kq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGt5QzJnAaLTEVoqAircA4cZ%2BxGDKqwt7n3qA3W4UaW5T5nIOGpa7ByaT5R2ijV3bdA2yYU1GKE2CbUHxMv9drTo0LHjYStOFhEbuKIlXSkpD1LEBqrfTf3RBw0DquRv6w3Uv9w%2Bn8JJ89A7O63OCVk7lRCpAa42bepQ%2FGsXt2ZwJdnQcrAxHrXcRHd%2BqF9%2F%2BHSLVWEyhtcZh%2FPgu12M%2FFPFK%2FEtWOD%2B4C48o2zkFhaUhMn%2BKyLzUMmRhdVx4BFVAgWA6D0OAdtvRjkbZpKUz7q5hG8sWgZ5p3qGv9qjalOcbN1b6C9lXnTgKzBm5EDlXn2cAAGHq9WI5XJW4oF7qsgsIhx%2Br3QKxzxqGkAD3S7eSZVvketIKnVrnts7Y%2FxkqcZO0FDsq1q3gg0UwZU9b8flKMU0X%2BmWbTt68DJk8euapuk%2BmqXttHYz1SJjdTgG6AnanbumL4zlhF906TdDW3jLochXkwVYOKrlD5lbi0Gy7fTQUpN1BblpDYhlye9bHpg5wE8kTNHjfhEw%2BBZhEbF6UM%2FFmU3tCVo0E3pnionZs179jALm5O0Zk2rfSDbdm5PqcYQDc1W6vShXxNjZBJJuaqAMLJoGIjvpreNR8%2FwDBpd%2F1GMNYg0gAjEc52cZVK2NejlNI9trX%2B%2BWMOTMx8EGOqUBOaDFfKMPo0%2BqErQZ%2BRnhgZs%2Fw4r%2F3PreRs2T9ywgJpgKSBNAVx5kX%2BJ7o9SYXQc3M4PQUXdx85kDo8bGE%2BDVXR3XmrN2XXQqBpCrkDMSLO56VkJEsMyRb7mrzNl11S1lbFsrXwaDt5fup7AL38CHd%2BHbAxEFg7to3hraLdxgxAz6u2hxfltF0hATHTv%2BgY16rO%2BE5tu1g4g0Jg3SyYDPhBdZZYRd&X-Amz-Signature=59fbb20ccc1c74f52cf7ea46e4340a061e091cfb5816b7fd82adc4494987163d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYHDSKI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCID%2FK9orQoRZkcG9VA%2F9kNI%2BMit1TWdMwHtjAgs2kNSDBAiEAl90AkUOVY1KRqWDuNRXBC5qybzxluaQy1bFQhdAn%2FjAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDL5q3nb73B8MPVvw7SrcA58HOSz9X6MFBsPcDlgvcQZI7EwCcBHy%2Fmu6hZwTTu22Qk0AQmOuwmaUNxuqx4N7MoCKEgowdL38yDacSt3%2B8OGVi361NmxDZgaGgT%2B8hrcOIthWcG5pCqnbMN1JIU%2BQIei6ENg7YsdftOwQgCk2EQDcfDNDzKWQCLk1t9CfBKMuC1QcFojQNc5DhpHa4NiaaxOUmd0ANW7ULGVlvs7OVRz6B2qi7jTUofgkKKf66Vzf6HDz1JPRFXhmptXgWFephYkxGf6pScsd42XG7rKVF%2FdqdRl3zwHGXRd9rZCkJSzM6A8iabY96IjWNTeXuaJ%2BO9dwFzj2YxLOwAPEWpmurdeE%2FUWATqhHJSo29qNwkxXb8IE4LEYuG3qckKOMN3CeOUaVuXrCbZpm%2BNA7%2FmBlsj8RN3U%2BfWwoK0A7ttDS5%2B6z0M7lTbU3NIwRw1vDVX%2FwNClaFcxQb0ksYP7JVrtvHsfLiieL3Ix7vy2h5E33lgshD8df076TpU5MCESifMmqqLcY6FtInetxT%2BWeSeF4LMZcPVgW52d7A3WnPwnHsNW3NV%2B3rXfeEZa0KsTBJq713amvEphuormAeeFntk0EkQ%2BrI7DrgNP4Ll7b8IFjsAqB7HIWGTfPw0wyGecSMPnMx8EGOqUBnj9bCqJ%2BkixPgzf34ZQ7owiLy1Sx86uZbYs6FIgYdZwc5ZbZlyAZeBCtO3s8A%2F3IDnfcr1OyLV%2Bc0%2BfR%2BkThkHXtE%2B5%2BQ6OKQJkRgIwEQsR%2BUlMx4qSy%2BOhGXv2zcgiQ7oNntEPzPeMY0%2FjRb0AWzUt5jpu%2B9XcYgMTXzIKM4ncw492poN9C96r1nRevbSi0GfbspTAGmhqgAfz7SyyQvJZtVtAd&X-Amz-Signature=43d15b5d95f85b4433ddb74c2a65ed9608ca6111907f5615598f6e7c07459041&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOUCYBJK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoj9u5qbldGCtSkjoudUZ6nh%2FQ%2BmGJCWDT6XnmY8PinAIhAOBl4Ki%2FuIdbP%2Bi4m4MIBi3giu19v%2FDAcOZWboCcT8x3Kv8DCBkQABoMNjM3NDIzMTgzODA1IgzJIRdwPplL6VBpPD4q3AP4yVACpH5Is2UrzOX1QfK%2Fd2Cto60LYi9eMddKJFZIebi8G3dqhMPX%2BZ2SnSAHO%2Ba8ED0TiWgPSDCe2gegaN2kyi63%2Bbci4UieLUUh2uForXE%2FNL%2FpCLCrQVG1ykfmZTWa%2B%2BnrZaBycyk3g5uFrjLBJG95Sk31qMalkG7apWoQ685JfzTQlAlBm1nY%2B7WuUMMsJgDOvmJ83gwsraCEKHQi0KS%2BWMr8LKU2OdwOzU0v8L%2FwoQ9ql2j536EYvvjSaebBrOmvEt40lBGpcDUCfeBZs8h9ZCqibXHwQEJv%2FLuFw9Ei2PveSIkGlK%2BVFr0vMZfP3%2Fb1MI%2F%2F3%2FXVVgZZlrWkZNwEN1CH0HS0FPUZZPLDTzYfeYTthiRLw7PtCA%2FWU8rvoHwjgwSAfeYPggfWFdYJgACBkQzd%2F%2FauEw2McPaNlgGCj7G1Q5D4fLhM68biH0PpCFeEtKKYgmWmVUxYV7dOLFRBnxwOKG7xZrL9bBpAaoc7cCQuUa5kayccQwT53V9AQ7t%2FQpoDqcsIDaYosUL3YwaZHUky22L5hbKOxxe2GPajxxi2MScCMSQQjMFlB%2F2AvNy9HCG57Bw8MqckKHpTqW64KsocYGa7pj3Zuk7RD0C89MEXrQEe0TZjZDDgzMfBBjqkAYCUlw5PU2WSBFrSiM28PjodmSYTn6gfgE3%2FljLoPivVFat1w6ZQFC4%2F2%2FJxS23Ka%2BSOXjPZ10yzC1XbDnfr4Hap%2F3on3aLhKgww16XkZXN4s6BWGfVWDnYSm2Mwfgsu%2FdsQ9qleajcNPNPMdUDpjOhbFMXnSHk6TKit6tAk2Qe%2BD5DCw5fgj6RnCe3xFbgZzrfKd3aM4WH3cPIn04GaTC5F%2FHSh&X-Amz-Signature=9395078a5181a67a818815afec4e37c95c7abfe69ceccf20ec2408fc71047733&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGMD7OQ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDBg0yAutqjx1pSohI6qPey%2BbWAbLAwja6QkjEIfruqLAIgW0MiqqV8gC8TU89bhFg3A47BtwVCAIHf%2FJkNpTqFb6kq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGt5QzJnAaLTEVoqAircA4cZ%2BxGDKqwt7n3qA3W4UaW5T5nIOGpa7ByaT5R2ijV3bdA2yYU1GKE2CbUHxMv9drTo0LHjYStOFhEbuKIlXSkpD1LEBqrfTf3RBw0DquRv6w3Uv9w%2Bn8JJ89A7O63OCVk7lRCpAa42bepQ%2FGsXt2ZwJdnQcrAxHrXcRHd%2BqF9%2F%2BHSLVWEyhtcZh%2FPgu12M%2FFPFK%2FEtWOD%2B4C48o2zkFhaUhMn%2BKyLzUMmRhdVx4BFVAgWA6D0OAdtvRjkbZpKUz7q5hG8sWgZ5p3qGv9qjalOcbN1b6C9lXnTgKzBm5EDlXn2cAAGHq9WI5XJW4oF7qsgsIhx%2Br3QKxzxqGkAD3S7eSZVvketIKnVrnts7Y%2FxkqcZO0FDsq1q3gg0UwZU9b8flKMU0X%2BmWbTt68DJk8euapuk%2BmqXttHYz1SJjdTgG6AnanbumL4zlhF906TdDW3jLochXkwVYOKrlD5lbi0Gy7fTQUpN1BblpDYhlye9bHpg5wE8kTNHjfhEw%2BBZhEbF6UM%2FFmU3tCVo0E3pnionZs179jALm5O0Zk2rfSDbdm5PqcYQDc1W6vShXxNjZBJJuaqAMLJoGIjvpreNR8%2FwDBpd%2F1GMNYg0gAjEc52cZVK2NejlNI9trX%2B%2BWMOTMx8EGOqUBOaDFfKMPo0%2BqErQZ%2BRnhgZs%2Fw4r%2F3PreRs2T9ywgJpgKSBNAVx5kX%2BJ7o9SYXQc3M4PQUXdx85kDo8bGE%2BDVXR3XmrN2XXQqBpCrkDMSLO56VkJEsMyRb7mrzNl11S1lbFsrXwaDt5fup7AL38CHd%2BHbAxEFg7to3hraLdxgxAz6u2hxfltF0hATHTv%2BgY16rO%2BE5tu1g4g0Jg3SyYDPhBdZZYRd&X-Amz-Signature=9188bff51196458fe07127be8e8afc34ce3f952e8320a02d5b368bfe90d90478&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
