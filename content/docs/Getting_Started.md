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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTRTYENH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDo9YM%2B0VDm%2BOh39cWTEIgYhbhfChx1yjvCOOvU0vfI7wIhAMRcrPaAkQzhV4rJbmR6ssUYEVaLzd7ZXw7qkk9R92CuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHK4yRmYvx1cQC2Kcq3ANti%2BFuwxbZuqYGjI1rQ4b8us4kB9qKw4THa6B2%2BaWcg2QmXp%2FlqWhlE5EBqiIwhKAa5NfazK00jNlpb2DWYcnfRvqB%2FKAxtLiHdVU5vBsnnJlEA78qXkudzQdqQvx1xRZy%2FxjN5Qe0G6gvkLQVvp4yJJ02tGuT03Oc%2F8hDP6sNm97j6K8BTxLZf%2FY1s4rfo466hTX4fh6%2F55lcJxV6I36unp3BuXkFmqxoNS27bP2ZehvWf9ZZKzL%2B7sKmQSBqIoH77KWd8BVK5ukp4%2Br%2BOYULaoq3p3jC54eT41D588V%2Bpbr48ypOi%2BREBOKTa3yQ54%2F06FMjpP%2BQ99yurspPxod3Zk4Yaugia9y8Yp8W5SroihC2EMdS%2FlTCtdYBuTkw2KQeD6AcKWN3tkirKoxuQU2jkwhKvtZa6fP0e8nzyjCF42N2AWWiAkmHHgfN8W2C06IGvRktFexnDIYUmjxg%2BP689EHNjXhE0BbiN%2FXXs%2F2mGZGfIfeHtvdkhVIbxYJyxBPRrERu3T8ICFqZGIdgolH3dHWOi4Zwim6kT%2BzWMd9v3OlRBIpp1zOdV8Dui5jlxu63twRY47wr9PTBemL2MJwyat1sYGGlIxa%2Bh9IvAzlirtHNAiQjVEyHNbw6STDWzKm%2FBjqkAYlA5Q1PXjX5YqdKhwqG%2BvcFUU0PKFmQHk8HCfQsti1xsTRjK9VwWKBpcZJf44wZG9lHXoF7YQmDo3FJmBBwhn3sC5jX5h1D1iJn%2BeBknEQkYcLZptsdrJAWE2xNUl8Jnbv%2Fi9TDoUq6in01OIRauGYJNhtCWxq7IxTABX3ZIAVUIdmVi0tPo7J9iCxlBgHjdy0gpd4KU1FXH6HF2h50k49NNA%2Bu&X-Amz-Signature=7e0d980e58e2f891d379a7e23b18e398dac1c68cb8bb2d296fa8953f050a35b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTRTYENH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDo9YM%2B0VDm%2BOh39cWTEIgYhbhfChx1yjvCOOvU0vfI7wIhAMRcrPaAkQzhV4rJbmR6ssUYEVaLzd7ZXw7qkk9R92CuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHK4yRmYvx1cQC2Kcq3ANti%2BFuwxbZuqYGjI1rQ4b8us4kB9qKw4THa6B2%2BaWcg2QmXp%2FlqWhlE5EBqiIwhKAa5NfazK00jNlpb2DWYcnfRvqB%2FKAxtLiHdVU5vBsnnJlEA78qXkudzQdqQvx1xRZy%2FxjN5Qe0G6gvkLQVvp4yJJ02tGuT03Oc%2F8hDP6sNm97j6K8BTxLZf%2FY1s4rfo466hTX4fh6%2F55lcJxV6I36unp3BuXkFmqxoNS27bP2ZehvWf9ZZKzL%2B7sKmQSBqIoH77KWd8BVK5ukp4%2Br%2BOYULaoq3p3jC54eT41D588V%2Bpbr48ypOi%2BREBOKTa3yQ54%2F06FMjpP%2BQ99yurspPxod3Zk4Yaugia9y8Yp8W5SroihC2EMdS%2FlTCtdYBuTkw2KQeD6AcKWN3tkirKoxuQU2jkwhKvtZa6fP0e8nzyjCF42N2AWWiAkmHHgfN8W2C06IGvRktFexnDIYUmjxg%2BP689EHNjXhE0BbiN%2FXXs%2F2mGZGfIfeHtvdkhVIbxYJyxBPRrERu3T8ICFqZGIdgolH3dHWOi4Zwim6kT%2BzWMd9v3OlRBIpp1zOdV8Dui5jlxu63twRY47wr9PTBemL2MJwyat1sYGGlIxa%2Bh9IvAzlirtHNAiQjVEyHNbw6STDWzKm%2FBjqkAYlA5Q1PXjX5YqdKhwqG%2BvcFUU0PKFmQHk8HCfQsti1xsTRjK9VwWKBpcZJf44wZG9lHXoF7YQmDo3FJmBBwhn3sC5jX5h1D1iJn%2BeBknEQkYcLZptsdrJAWE2xNUl8Jnbv%2Fi9TDoUq6in01OIRauGYJNhtCWxq7IxTABX3ZIAVUIdmVi0tPo7J9iCxlBgHjdy0gpd4KU1FXH6HF2h50k49NNA%2Bu&X-Amz-Signature=4c790e09756924022947be32ce2f28c547ee86d41109ec2ea13a57b4756e423f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILIZUJU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDfH9vZ0pxVbU1rvgLDgCD%2BMriJEm293Ycs2cnblqzqtAIgfdNRX8RO9C5foKlK7pPJienLLD8eAnBAHdZm8k8bQdMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8EevbL08ZETG%2BaYCrcA%2F5WMSBTV1bXOjETFuvJa%2FNcJuB5aH53Ag8vnPo%2B90QDKM5MmVehAS0mbRZZdDvjwLJLVy6qHR0DIa0KAN0AEfO3oMR%2BsYdxHO4wLaf5fImvyVysHKhmFzRaUifilvTVffUFH5LXv44m0xcUQuQG%2Bzbpp60sujg8GrYbmZUSjaN7%2FqnvJx0ZyIwRRY1DCgGLWB89OpvnHvoDTdfBoqMCKJ%2B6FClES2%2Fj6vxNSpRJB5RzMBfF3lxm6G6Lrs9TfqrwNXkFUL%2BuY6TM3Iwke%2FwnpargNPwJuubf%2FS7YYAoVKBgOkLcBeOwmokJ19jrEgLxfko%2BfjbhgQPs4ZZ7fMz7dasKNraqYMuYGjpr7h7jNlULoYirJzvSqh5DTr6ChTd3BgUKl3xZlF0d4hDvWhCEPlY8o3VGnPAs9LPlepNbSgV5BGaF6xVHurH62o3CCIB2OkwjZ0IjgtiF7RjMPg7gJuDmBwhwRZE9iP4yCtPW2YhpsgISkL8CEBEU3ivcZjrg12o%2F8gIOW9K6Yd38dipMCe2JDj9b3dIzj3rIYQji6WjkoEgsLGXMeHckgsjO1F53ljZuRl8OhZEQiOHUM1GtF0ib%2FUMq7A%2FD2eUwJ7r7J6iru16ccV2ZsyicC%2F4XmMLHOqb8GOqUBwDBjqt5vH5ul6M5ro545sZ9h2uK4BrUT0O6QdEbiDASd5D4c%2B%2FnF1KVGCu9fKZl%2FEhkmTJhNkEC04iO1ljQ7qUrBuYw6EnSl2GywyYjG5b2BViAFTBF3EH6Cv29VgHgCse8k5kwKx8chrldpCHHyEEhlNkV94LXd%2FmuUtPbnzsdfKPHRNxgLR3QDaw2nw7A7dwGq7WjqhdJkwmMx%2B%2F20kiYHmus0&X-Amz-Signature=e37e152e511f478d382f247bff59f98b09cc3c038e39ff382d8dbd3abd2f1206&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RHOSRVU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIH2wc%2BS%2Bunl2p%2B6LMb9aOKVJDnnteJNgzx%2FV%2FbHGPfd5AiAmi71nFeCzP4fGRw9XZDOyqesHJd%2FRNqe7KShVOP04OyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyWhWDOEI7UuXlNL5KtwD2ivFXtY4scRpXGHWJXBBHaJZs59fSt9sivU49%2FaAfMnPkqwjzReNotDgmCROhjUHc%2Fly66vtCljdp8u6n7JjXqeHe4Y%2Bg0WrhgpLFVXFk9m51SAN2r988BYiOEMEF2kJrzyslxPPS%2BVt4s1ZIa4Xk5Th%2BqcrfoohWeFovhS%2B%2Fv81J2E5FmV7ES4V%2Fc%2FJ5qrdCq9AZO%2BNv5JoNl0%2B05xT4W%2Ft9bqeSr3VaCgXkcHapylsm2VO7kiM3tN%2FYIORzWovsx%2Fy0dF5kqt%2Bu%2BKWItBabNZrOrypj%2FBCVMgVUgzyTr3SkQtUXiXl32QDL2K100%2BvdSF3Umy21NB5NkjLde3s%2BWsUtmWapBmvdPLotyDppLhgkGlntf7S93ChdDVDskq%2B968cWRVMELMEuFjoL9Pz20ZurY12ZSWfB2YZ31JOPWIQx9YTe1ynVP3SWg9dxDrM6XvZ0DRPxbpCnMLbUr8AdxGw6RUOkWbHRbbamVO7Dc32v5AnTsHSjaQUyEpjkYvDV7SJl2z%2F7hndyF3B4XvnKRtfHJY%2FsWQk5DsQPl0B8ZMur1q2AQ6y2YymV1dX5khB5axYZfipKeF%2FiuhJXyWXWfc5PQomcEElVP4qG9iLkfSHLG%2BWL0Eoi4JTd%2BcwsM6pvwY6pgF237yRN3Dq6BqDihEFDRLn7VFBYnQI6V4yBdiBCy9%2FWYyfDF5rdbNNcEkhI2eFare%2F%2FZ4gXNLou3Glxji6vckuseR2AQsm0l4lW%2Fp%2FruRoCzqJCNm3%2F0EFBCmuELFAOdsWAY%2Bng8Uf8HIIKOGOCmL2F3U22yX1DImnaMujRAZAQR7Whwxppl9S7DeYEf0L5pUcF50fXJYWUngFgXoFNAYNiw9vFAsD&X-Amz-Signature=0f8bd7dbc150dcccfaefd34a46f70d2d9ee6cade9c6c3bb416f7d24683c5169f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTRTYENH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDo9YM%2B0VDm%2BOh39cWTEIgYhbhfChx1yjvCOOvU0vfI7wIhAMRcrPaAkQzhV4rJbmR6ssUYEVaLzd7ZXw7qkk9R92CuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHK4yRmYvx1cQC2Kcq3ANti%2BFuwxbZuqYGjI1rQ4b8us4kB9qKw4THa6B2%2BaWcg2QmXp%2FlqWhlE5EBqiIwhKAa5NfazK00jNlpb2DWYcnfRvqB%2FKAxtLiHdVU5vBsnnJlEA78qXkudzQdqQvx1xRZy%2FxjN5Qe0G6gvkLQVvp4yJJ02tGuT03Oc%2F8hDP6sNm97j6K8BTxLZf%2FY1s4rfo466hTX4fh6%2F55lcJxV6I36unp3BuXkFmqxoNS27bP2ZehvWf9ZZKzL%2B7sKmQSBqIoH77KWd8BVK5ukp4%2Br%2BOYULaoq3p3jC54eT41D588V%2Bpbr48ypOi%2BREBOKTa3yQ54%2F06FMjpP%2BQ99yurspPxod3Zk4Yaugia9y8Yp8W5SroihC2EMdS%2FlTCtdYBuTkw2KQeD6AcKWN3tkirKoxuQU2jkwhKvtZa6fP0e8nzyjCF42N2AWWiAkmHHgfN8W2C06IGvRktFexnDIYUmjxg%2BP689EHNjXhE0BbiN%2FXXs%2F2mGZGfIfeHtvdkhVIbxYJyxBPRrERu3T8ICFqZGIdgolH3dHWOi4Zwim6kT%2BzWMd9v3OlRBIpp1zOdV8Dui5jlxu63twRY47wr9PTBemL2MJwyat1sYGGlIxa%2Bh9IvAzlirtHNAiQjVEyHNbw6STDWzKm%2FBjqkAYlA5Q1PXjX5YqdKhwqG%2BvcFUU0PKFmQHk8HCfQsti1xsTRjK9VwWKBpcZJf44wZG9lHXoF7YQmDo3FJmBBwhn3sC5jX5h1D1iJn%2BeBknEQkYcLZptsdrJAWE2xNUl8Jnbv%2Fi9TDoUq6in01OIRauGYJNhtCWxq7IxTABX3ZIAVUIdmVi0tPo7J9iCxlBgHjdy0gpd4KU1FXH6HF2h50k49NNA%2Bu&X-Amz-Signature=69def49de123c5e0e62c9ca36b915f399330a749e766001eec8b0587a09da42e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
