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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJINMS4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICH%2BD6P96OpeLVgkHeH9jKxpIBYDmXUhSImwWymMMEruAiBFAF1Q0mpOtKq4G0iZGOKWcwhMc%2BQbxoXjbsmqGgTWDir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1yUsPzoDJPfPuSJWKtwDIpBzexpLGS3Bku9SnTDNkdL3nPSmufLj98xWZsEUBrrX9RsL4cB5cx5Sm4PPX6sB6Ih490q2Yj%2Fyh4EdwnogVsCw8kcMaojnS85LeN4ZzCiUbLpzbLBQmFbwxijIbq6fHi6Z7LWpVDBDl9IJn7smo2bwbNjAMyco9py5JdeM5Y3GRHJn3uH55ieVve5aGyJhe3%2B96Q%2BPsPXfTPi6Yxun2kv16Dw9JD%2BdYJ%2FMuuoupRSaSoRLrIgMsXFVkhCGVAexBwI6AAIPKW2Pb0ada7yaq7fof4%2FLhBjhGC8EOpsDMjYTA0NZVoj8fXeB8JXR1%2Bhi3%2BsNL8q0yDs0LfmldqvT%2FI7IrWCYMMsLkIOMH2Ox6ENdVsdIE7IhFGgvYAKKFLYR9jaoG8G%2F8hSJ9o1p9TtKPPCgUZKI9y7HqUrs1uwpRqrzSN6vUwZ9O7KAobM788j49zwfhkN%2BN8RMP8ouko6zWTYEvvIhne1RJTtb2omKPgX63lF4v7Lj53Uq59k5ojZ81JGzK%2B2ZY6gxbCWziR5esloIRGPhgmnp3GMQFyhiq6HAgPIN4nzHMG1q%2Fo7QVtCVaETBdYyLfNs3KSAN5XED20OUdjNEGy0XQyRGqW3Cey5IEUBJ9KHnedId71owh6mHwgY6pgFDqM8vfweBA8azBmZF6Bn62yK9gv2IoiIgiW4DLHgVcp9zz8bELPBvz1FkbQL6bV%2BrjWwoztI0IzVW1pgwLRs%2FIorN2pELwNhCPIT%2FzFYn031pQ%2Bydmpj30DAshbl0kgl9qug8d%2F288M5dVRRnphZmpKrfB341yrBQd67VUimZSMfmH5EM3cioQN869yYx8sZxpSghMiQYLfyqNGkUPth9EOgtWYdW&X-Amz-Signature=c51aed68ab72f393a0695c904f9a35531d9c56c712a204d6f163945f814b6ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJINMS4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICH%2BD6P96OpeLVgkHeH9jKxpIBYDmXUhSImwWymMMEruAiBFAF1Q0mpOtKq4G0iZGOKWcwhMc%2BQbxoXjbsmqGgTWDir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1yUsPzoDJPfPuSJWKtwDIpBzexpLGS3Bku9SnTDNkdL3nPSmufLj98xWZsEUBrrX9RsL4cB5cx5Sm4PPX6sB6Ih490q2Yj%2Fyh4EdwnogVsCw8kcMaojnS85LeN4ZzCiUbLpzbLBQmFbwxijIbq6fHi6Z7LWpVDBDl9IJn7smo2bwbNjAMyco9py5JdeM5Y3GRHJn3uH55ieVve5aGyJhe3%2B96Q%2BPsPXfTPi6Yxun2kv16Dw9JD%2BdYJ%2FMuuoupRSaSoRLrIgMsXFVkhCGVAexBwI6AAIPKW2Pb0ada7yaq7fof4%2FLhBjhGC8EOpsDMjYTA0NZVoj8fXeB8JXR1%2Bhi3%2BsNL8q0yDs0LfmldqvT%2FI7IrWCYMMsLkIOMH2Ox6ENdVsdIE7IhFGgvYAKKFLYR9jaoG8G%2F8hSJ9o1p9TtKPPCgUZKI9y7HqUrs1uwpRqrzSN6vUwZ9O7KAobM788j49zwfhkN%2BN8RMP8ouko6zWTYEvvIhne1RJTtb2omKPgX63lF4v7Lj53Uq59k5ojZ81JGzK%2B2ZY6gxbCWziR5esloIRGPhgmnp3GMQFyhiq6HAgPIN4nzHMG1q%2Fo7QVtCVaETBdYyLfNs3KSAN5XED20OUdjNEGy0XQyRGqW3Cey5IEUBJ9KHnedId71owh6mHwgY6pgFDqM8vfweBA8azBmZF6Bn62yK9gv2IoiIgiW4DLHgVcp9zz8bELPBvz1FkbQL6bV%2BrjWwoztI0IzVW1pgwLRs%2FIorN2pELwNhCPIT%2FzFYn031pQ%2Bydmpj30DAshbl0kgl9qug8d%2F288M5dVRRnphZmpKrfB341yrBQd67VUimZSMfmH5EM3cioQN869yYx8sZxpSghMiQYLfyqNGkUPth9EOgtWYdW&X-Amz-Signature=05a57af74483b15fc432100e30b79fa7e5b7fbadfef618981a81c10047705b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJINMS4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICH%2BD6P96OpeLVgkHeH9jKxpIBYDmXUhSImwWymMMEruAiBFAF1Q0mpOtKq4G0iZGOKWcwhMc%2BQbxoXjbsmqGgTWDir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1yUsPzoDJPfPuSJWKtwDIpBzexpLGS3Bku9SnTDNkdL3nPSmufLj98xWZsEUBrrX9RsL4cB5cx5Sm4PPX6sB6Ih490q2Yj%2Fyh4EdwnogVsCw8kcMaojnS85LeN4ZzCiUbLpzbLBQmFbwxijIbq6fHi6Z7LWpVDBDl9IJn7smo2bwbNjAMyco9py5JdeM5Y3GRHJn3uH55ieVve5aGyJhe3%2B96Q%2BPsPXfTPi6Yxun2kv16Dw9JD%2BdYJ%2FMuuoupRSaSoRLrIgMsXFVkhCGVAexBwI6AAIPKW2Pb0ada7yaq7fof4%2FLhBjhGC8EOpsDMjYTA0NZVoj8fXeB8JXR1%2Bhi3%2BsNL8q0yDs0LfmldqvT%2FI7IrWCYMMsLkIOMH2Ox6ENdVsdIE7IhFGgvYAKKFLYR9jaoG8G%2F8hSJ9o1p9TtKPPCgUZKI9y7HqUrs1uwpRqrzSN6vUwZ9O7KAobM788j49zwfhkN%2BN8RMP8ouko6zWTYEvvIhne1RJTtb2omKPgX63lF4v7Lj53Uq59k5ojZ81JGzK%2B2ZY6gxbCWziR5esloIRGPhgmnp3GMQFyhiq6HAgPIN4nzHMG1q%2Fo7QVtCVaETBdYyLfNs3KSAN5XED20OUdjNEGy0XQyRGqW3Cey5IEUBJ9KHnedId71owh6mHwgY6pgFDqM8vfweBA8azBmZF6Bn62yK9gv2IoiIgiW4DLHgVcp9zz8bELPBvz1FkbQL6bV%2BrjWwoztI0IzVW1pgwLRs%2FIorN2pELwNhCPIT%2FzFYn031pQ%2Bydmpj30DAshbl0kgl9qug8d%2F288M5dVRRnphZmpKrfB341yrBQd67VUimZSMfmH5EM3cioQN869yYx8sZxpSghMiQYLfyqNGkUPth9EOgtWYdW&X-Amz-Signature=6a100dd1525aade6b2ecc5a00012efef2523c214ebc08a23f51af889cd0536f0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5GZUHP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCgsex5prCMSteug33ULHlXo8%2FeXpxk5zSA1G6LVjRGlAIgdOpv7JVUI2NUgJvBA6%2FCOOxtsfg71mJY%2B0K1LmuSptEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPgl2RfuHDbdsgzPFSrcA3dR6Qk43%2BLfLu1B4kT%2Fvgrjmmt%2B44KLrDxm6n9u%2BVFTn81fojKYVHPeCwdmFnjUkTRYVB%2BwIy5QtcmZY5kQLUpD4RwS7ednONGJ2IWNVcKz4TD7lSj7xb%2BadFGoTvniW5KQ5Yc%2F%2B7AC6ExunNu5DofSw%2FuCTwseD2KtZ9iyWXf%2FnoDOcIE9%2FfNsl%2BbaRdcYe5vjWpocwalmuQcEJjUiQG19bUPWMfTa%2BroUNHltQ0KjoVXCf9qtsmPgjm7yXOAE3F8O5zQUBFmE85QxJILfvZy4As5Cd343xULX5L%2B3HCR4MSWDouEYkz7RxX%2ByCvlCHzYko6NslYvUBlEiLm7FUv9YR%2BK%2BNUtASDcqYAChfHq2JePnzkKx%2FmCCWbTHBbldytM5d%2B2lNzufIEV0Xqw2pF%2BTeDzp4xXJBZOnBihAPjpmcJd4LmErLYGV1uh0Naq8CqZNFBHTdxOKOfHGxkLeorpylYN0JX7yuhcTVW2DWCkIQ13C0wL6MY8KXk5MZIeyISLJkSeP65ChU2bJu9YyhERXOMqBI%2BFGc%2FnRWvnQ7eSRNKf%2FAbg%2F7nbfmyWhJeHg3S8yDSalgn2t58LJ7jErQPEXq2wflPEtYmXF%2FKVT6zn8G8k3VQrN6i1XgrF%2FMMiph8IGOqUBv0V6V9XVSt9nPM8uI4bfN%2B5urHjNpMYaLWIRFzmlNlqf6lvZXQGTYbid9rd%2FBLn%2Fqh5eSlrRLuwZ5MQAGZ0rhQbxAoxCzgZcuaeMPpJ%2BX4La3zUYYGoS8svUT3O1lrr8EdjFw0ct52DBdnb6ytuZ%2BCbakvjo3iG9TneIRoAtBNTlZylYNlrnss%2FBHZpR7R3XLbmezVWAQlnAZBJF2BzkrxHyvQXc&X-Amz-Signature=599061852563432ca748452586866508703507a6aa0e37e41a89a9db8eb94231&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJDD4MT%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC%2FE8RQmvDeMAj11LfskASw7WK9ESyNKTMDGjEJYPjtSgIhANu1iKr%2F2AiESJqxaOv1AvZct7WlyRDOYQSLa1MWeVofKv8DCEsQABoMNjM3NDIzMTgzODA1IgwF%2FjNyIoSUl64DPVQq3APx7VMEiHZqRHauAVmaxhYT2%2BIQZF5M64wlGij9KIyLYe7N1FcxrOUQUvz3K%2BoSqQs%2Fq2ItBfXrf86hWQ8ZmfyBieQuHJGqoAXTKhx38nbbQOAbmyKmH1nZ5G5nF4pR1oECBMYy2knc8f50MrnAJYtgbqrOf8rjgUp6V6KQ3FoX7k8emiqGfH%2Fu08lzSjkdgATOmFg5dXhg4wRQ2iufJBFPyt3xD1DQRklVqF3pNctroJrkYUaF79U1mEI1e%2F%2BW24aV08Q5gdrceWzH7qxCHbOzUNRSMfgiKfKb6ii4BHbCV%2BoLoh57dgKKau7qHHLqx6izQz%2BP0jDCrewSPuI63xtOqM8r%2BKaBsnytCrhQOD4yE6%2BDW%2BEVdLpKvcIanaoQHacJdQp8bWHVBvdncJHkVC5s6rKI5jUKY5V84S%2FPKpUNY6Lx9xkp%2FGEH1fow20NhNBPoN8k4LzUgzC0wGsRFcwA2mIuf6MEBpggVYpKntDKcLHz7mZ5g1geZ54rIO8e8PP8hkp%2FNrd72gLeg68AsiEaVbisjWlGWlk0Avln9CvaA5ulxi20LCOrnPOYeU%2FuVlYOlzGc%2Ftq2NoKB6qcHXDAx4968In%2FY%2F4VLqqeDDjmTh%2FtKYrOOcfWYWF69LIDDdqIfCBjqkAYHDgz%2B%2FoElktQoYohZfHQXVY5YMHnGzImIvKT15350QZ%2BsoBWmoxKdrr9iqS0orgKqREiKEf%2FIU8mPr%2B3Jq5jFu9ILQo1eRogWff3GirXLOELOWiJd5yzDaXefTPZ2wQ%2BR%2BD66liKvqggTMejMfWimcbeISOMoCmj0xXSaPX3IWH7eMSr4kEVgHsH7eO0BTyOkJSKoW2Jro6ouWOykexY5WXcO4&X-Amz-Signature=da433f1e5411a9f6e4cc6d342b1c98c8290e1e4f12cceab6e43de55be0bbe638&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJINMS4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICH%2BD6P96OpeLVgkHeH9jKxpIBYDmXUhSImwWymMMEruAiBFAF1Q0mpOtKq4G0iZGOKWcwhMc%2BQbxoXjbsmqGgTWDir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1yUsPzoDJPfPuSJWKtwDIpBzexpLGS3Bku9SnTDNkdL3nPSmufLj98xWZsEUBrrX9RsL4cB5cx5Sm4PPX6sB6Ih490q2Yj%2Fyh4EdwnogVsCw8kcMaojnS85LeN4ZzCiUbLpzbLBQmFbwxijIbq6fHi6Z7LWpVDBDl9IJn7smo2bwbNjAMyco9py5JdeM5Y3GRHJn3uH55ieVve5aGyJhe3%2B96Q%2BPsPXfTPi6Yxun2kv16Dw9JD%2BdYJ%2FMuuoupRSaSoRLrIgMsXFVkhCGVAexBwI6AAIPKW2Pb0ada7yaq7fof4%2FLhBjhGC8EOpsDMjYTA0NZVoj8fXeB8JXR1%2Bhi3%2BsNL8q0yDs0LfmldqvT%2FI7IrWCYMMsLkIOMH2Ox6ENdVsdIE7IhFGgvYAKKFLYR9jaoG8G%2F8hSJ9o1p9TtKPPCgUZKI9y7HqUrs1uwpRqrzSN6vUwZ9O7KAobM788j49zwfhkN%2BN8RMP8ouko6zWTYEvvIhne1RJTtb2omKPgX63lF4v7Lj53Uq59k5ojZ81JGzK%2B2ZY6gxbCWziR5esloIRGPhgmnp3GMQFyhiq6HAgPIN4nzHMG1q%2Fo7QVtCVaETBdYyLfNs3KSAN5XED20OUdjNEGy0XQyRGqW3Cey5IEUBJ9KHnedId71owh6mHwgY6pgFDqM8vfweBA8azBmZF6Bn62yK9gv2IoiIgiW4DLHgVcp9zz8bELPBvz1FkbQL6bV%2BrjWwoztI0IzVW1pgwLRs%2FIorN2pELwNhCPIT%2FzFYn031pQ%2Bydmpj30DAshbl0kgl9qug8d%2F288M5dVRRnphZmpKrfB341yrBQd67VUimZSMfmH5EM3cioQN869yYx8sZxpSghMiQYLfyqNGkUPth9EOgtWYdW&X-Amz-Signature=1b416559a7a080ba51fd8f374bb3101714aad6be6872706b9c1f001e2f207921&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
