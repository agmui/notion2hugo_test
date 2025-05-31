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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z2AALP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwDAWpRTlMGd%2FLECwPgrgfsvGiFYwumXyGbOlnE7igxQIhAM45Oaxa%2B6Lx8GhtG8p%2F6S%2BOzhRYJT6Yer6MKDnEpNNOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAwb%2B%2FL5bvdNVZlXEq3AMgl2T2lzIimP96FAdI%2Fga3VLSN8mEr6nNzzBrLCXVdVjI3xtrDCLIiCRfOmm%2BoLDpjhb8faSaN7rhoHiI73iFyKz1Uc1IMkW1DcM%2BD%2FgDswd0a1%2BnRbxLE88dTEgKgab9sQviNfRMALBQ3n0Gekr39FqMIR6nEe6LpIMxZ6Mzw8YZXQkoiX1qBoGek0GobJXdLhy4YAhaNHhSg80b1O0FAnnMY%2BGMWs9lC1jZfyjK7Jv5jolDPM9IWK0n3majg%2FijwMD3S9MKRNFjy11cwIDFf%2BoQyBXZ%2F7eNxfvOc3j%2BoWP8rsdlDJ%2BSpAXXHqaZsPoa4ZAT%2FZjZpRHdF%2Bq%2B8hhdy6fqFpyEvy%2BvOWner%2BRT%2F%2FgHR7RT5tktUDQ6I%2B5cJ7nytN4U0ugFdchrobHwIaGV2LhIPYUTw6D87bjA7BxZWO%2FCBQITG9%2FE%2B8O3xFr1lQNNlxHWVbhcTHsKyKCX%2FpIZMm%2BtxPxa1Q41awxQ0J1tKmnK1UYk%2BfjJTHlyB3iEg36szvi%2BM374wO1aSW13DimNQBfI8Q2gLiXwoTiF9wZbP3LxAzy3Tp1vGp%2FEP3KCs1EV4Mg3acaZ1MKdBaSfKmUHQWCEuD0W82rAfT1Fa58Hhe0MF%2F43a2beOVaCLNzD9%2BuvBBjqkAd%2Bz6JuwJnPwBE%2FxiGLHcqOLURjN9WMt0418duDJN3qYavv5uXj8pXgxj73dAeFJaw6ijpIBEWpddgm%2FJJ5sXt70cWHvTub5p0Rz5CxPHyZkWqiFxJg8Xcb1qd7RE8QgFoZg%2BUYV42YWmAsVM9PylggVrQDXx9rOA%2Bk8zRe2UelTn%2B%2FgBfgeqDL5LCWlcUFs49KM%2BgX9a1uLCtgEqQIxi3%2FSK2O1&X-Amz-Signature=4e45821080b06b8c00e015eedc66443f1fee7a9956fa570a0ce9f139330ddb41&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z2AALP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwDAWpRTlMGd%2FLECwPgrgfsvGiFYwumXyGbOlnE7igxQIhAM45Oaxa%2B6Lx8GhtG8p%2F6S%2BOzhRYJT6Yer6MKDnEpNNOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAwb%2B%2FL5bvdNVZlXEq3AMgl2T2lzIimP96FAdI%2Fga3VLSN8mEr6nNzzBrLCXVdVjI3xtrDCLIiCRfOmm%2BoLDpjhb8faSaN7rhoHiI73iFyKz1Uc1IMkW1DcM%2BD%2FgDswd0a1%2BnRbxLE88dTEgKgab9sQviNfRMALBQ3n0Gekr39FqMIR6nEe6LpIMxZ6Mzw8YZXQkoiX1qBoGek0GobJXdLhy4YAhaNHhSg80b1O0FAnnMY%2BGMWs9lC1jZfyjK7Jv5jolDPM9IWK0n3majg%2FijwMD3S9MKRNFjy11cwIDFf%2BoQyBXZ%2F7eNxfvOc3j%2BoWP8rsdlDJ%2BSpAXXHqaZsPoa4ZAT%2FZjZpRHdF%2Bq%2B8hhdy6fqFpyEvy%2BvOWner%2BRT%2F%2FgHR7RT5tktUDQ6I%2B5cJ7nytN4U0ugFdchrobHwIaGV2LhIPYUTw6D87bjA7BxZWO%2FCBQITG9%2FE%2B8O3xFr1lQNNlxHWVbhcTHsKyKCX%2FpIZMm%2BtxPxa1Q41awxQ0J1tKmnK1UYk%2BfjJTHlyB3iEg36szvi%2BM374wO1aSW13DimNQBfI8Q2gLiXwoTiF9wZbP3LxAzy3Tp1vGp%2FEP3KCs1EV4Mg3acaZ1MKdBaSfKmUHQWCEuD0W82rAfT1Fa58Hhe0MF%2F43a2beOVaCLNzD9%2BuvBBjqkAd%2Bz6JuwJnPwBE%2FxiGLHcqOLURjN9WMt0418duDJN3qYavv5uXj8pXgxj73dAeFJaw6ijpIBEWpddgm%2FJJ5sXt70cWHvTub5p0Rz5CxPHyZkWqiFxJg8Xcb1qd7RE8QgFoZg%2BUYV42YWmAsVM9PylggVrQDXx9rOA%2Bk8zRe2UelTn%2B%2FgBfgeqDL5LCWlcUFs49KM%2BgX9a1uLCtgEqQIxi3%2FSK2O1&X-Amz-Signature=caabc02e9d7f1078a4418ca3682bb7268b8565f7f715325b186968d4048b8b99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z2AALP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwDAWpRTlMGd%2FLECwPgrgfsvGiFYwumXyGbOlnE7igxQIhAM45Oaxa%2B6Lx8GhtG8p%2F6S%2BOzhRYJT6Yer6MKDnEpNNOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAwb%2B%2FL5bvdNVZlXEq3AMgl2T2lzIimP96FAdI%2Fga3VLSN8mEr6nNzzBrLCXVdVjI3xtrDCLIiCRfOmm%2BoLDpjhb8faSaN7rhoHiI73iFyKz1Uc1IMkW1DcM%2BD%2FgDswd0a1%2BnRbxLE88dTEgKgab9sQviNfRMALBQ3n0Gekr39FqMIR6nEe6LpIMxZ6Mzw8YZXQkoiX1qBoGek0GobJXdLhy4YAhaNHhSg80b1O0FAnnMY%2BGMWs9lC1jZfyjK7Jv5jolDPM9IWK0n3majg%2FijwMD3S9MKRNFjy11cwIDFf%2BoQyBXZ%2F7eNxfvOc3j%2BoWP8rsdlDJ%2BSpAXXHqaZsPoa4ZAT%2FZjZpRHdF%2Bq%2B8hhdy6fqFpyEvy%2BvOWner%2BRT%2F%2FgHR7RT5tktUDQ6I%2B5cJ7nytN4U0ugFdchrobHwIaGV2LhIPYUTw6D87bjA7BxZWO%2FCBQITG9%2FE%2B8O3xFr1lQNNlxHWVbhcTHsKyKCX%2FpIZMm%2BtxPxa1Q41awxQ0J1tKmnK1UYk%2BfjJTHlyB3iEg36szvi%2BM374wO1aSW13DimNQBfI8Q2gLiXwoTiF9wZbP3LxAzy3Tp1vGp%2FEP3KCs1EV4Mg3acaZ1MKdBaSfKmUHQWCEuD0W82rAfT1Fa58Hhe0MF%2F43a2beOVaCLNzD9%2BuvBBjqkAd%2Bz6JuwJnPwBE%2FxiGLHcqOLURjN9WMt0418duDJN3qYavv5uXj8pXgxj73dAeFJaw6ijpIBEWpddgm%2FJJ5sXt70cWHvTub5p0Rz5CxPHyZkWqiFxJg8Xcb1qd7RE8QgFoZg%2BUYV42YWmAsVM9PylggVrQDXx9rOA%2Bk8zRe2UelTn%2B%2FgBfgeqDL5LCWlcUFs49KM%2BgX9a1uLCtgEqQIxi3%2FSK2O1&X-Amz-Signature=4bbc67975ec056f27981cc198e7e39fab9d0604cf6e431828fda2a510236c575&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKOGOEX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKyJnQc%2FNTTuknbwjtuXn%2F7fPnjnK66fdHr5aablnv8QIhAISIIas%2BnB98vah%2F%2B0UYUyAEvo3ST2LDBjThFdzpdHUqKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyoDy0PrwpZt1A9b4q3ANfC1W1KZu%2BpvN7Fhsq9ax0662PHATK5jKXXFdepB7j9W9EZxbLPgN6%2FB%2BIt%2Bq4%2Bmj3YpF3VwN7Wq%2FRmIZeIKhU65TCmeZiReUbGDhhasY%2FYcyPWPM%2FolIg21kwCIWi9uRQ4J1nHHEfg2R2u%2BykY8UxEd7zASe3Lx4L8KIhIBzHc0VpavauX2DFDAkScKIZ%2BPVUDNcUegMy5pMnoB%2BfLbSR65xj26qoPpXIPG0w4opt0R1UBq7IkYpx586KzRlHL96V3aiNCOvpM9ELJ73BkwNlxtLWizReX%2FGPifhZ7TKK7%2FGd5AhhdaDZhUAxt%2Bb1gS7Fhijc5p8yWRSK40e9we5YHlaWlDVD6f%2Bq6biFlmDzT096NZOiVW6ZIu2iXo0lvBJhvbdOXUK%2B2y4sOF06f%2BuZ9cwT9wRmee2VzTwyEIk3PqnOkYO0EZBcXPjpWSjqfKDiZ75XWZ%2FWjNgG8MUZN9hnQFUn8ABWFv6LeUN5h0NvCOLfI%2BH3cfG2EbuZ6jbLCzTygCDfg23uyrOjr1nFtnIFkt1MGfmbBfpWwqlCd19t%2FjuA4IjeSDij0gvtk76rtJtfVECnhvtyeBrl2hxc93p2VAOOOj1XmWMJG3tvoeE1GYhGn9JYF67D0f6BiTDD3OvBBjqkAWyn3GIXl7ziHPVSa3QJ%2FoB6AFHlfYgfRmb%2BqE3JW09UP%2FRKPvdyiBDHrXjQZAtt1ydo%2FKMItkgKu21k0SulSaa1FHwc09w2yyeJayGf%2FZc1BUxFIoPF%2F4nJ2cGmDpTwvJxp0Htq8QRIAnMMoYQtTtjYSliUnyEUMUlbGteY8YBfzUH0EOB8COF8dgZil5W1cY266N%2B4c%2BYLwBBYshvI2CBS29%2Bx&X-Amz-Signature=691390c555b71f8fc11ff5bd6579d422627b11351bc7016041efdfabe67a5440&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6H7RPE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdcwHltZk1uqzG9eoRtCziA%2Bl7CrO3he1p2oZGDdvoYAiEAzhv5tmWUPphYBLUtLX8bnoFJoMPK1gj80F1UaYuEBXIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMgYWNgxAZDNCyxoircAy3KepyFL1rjlP4PpniEcv7Bn22sowQxhM%2F1r4B7GxZNMkoTkFmRc9NNUEwcCYuYHimMq2SiAgwF4Zqos7ia2QiC9Q16jY2lgnsw8bbJ2FiRQaIVtt6wyXMTlA6Alyeu1G3WciotulnfOUOdN428hroeu7GE6A64FPpdtnkSeOQl8mTVXN7jwT976uAxnG8YVbMgF5DS5o59KnBFbnvEC%2BHYslHs%2B8RlSmwgAvabkkB8P52oiFWjDFSV981FOBWcPVmYgqxVqj%2BsY6%2BPAADM3Al5kkdWr5HodBhrCjBNsLqkTeJkyNboIiKEOuOmstmdWfDM%2BozxVA6LHTPH63%2Fo9zNE%2Fw5vurEqPoe8TsTlDygpQPACWZrOzpBEA1I%2FII9tUT%2FdIEHROAOuRpUNtOyKN2tsNY1IyvMw6TAm%2FOcn1iJx3NaydY5te%2FCLa664aFjAjAgKoJtFRtwE7UTjf%2B7EUrwx3wcQh%2BIdiINi5IijP6WWwp2crFjR0JY14qLFhjGble82HSnaD2RVkswuaONuJAOvSzOsasiUbT2LiH7JUbmiISwcNcngA0uaa0hvQoxE155dPD9SBpyUe5UuB1WjDYUlaFfTWH%2Fyp0VyAgrT2%2BLukyQgqXHKUHWGn%2BeMMJuR7MEGOqUBl7wclXBv0vY3eGsT4VpxW3297NPwsWCUvVN%2FzShuJJxrsIEvLsazmnoQHuuY7VGZXFvWMN4xQwupazIrSJwDDvzRSC8TDwwScWK%2BqDz1hneyJkKOUwX7Hj%2B%2BHuTGkglRUHmbqrfMfOV%2BCmSZvXXHjI5kaSununGn1BwLyFqFxr67CnSNG17wh%2ByvPdtDghcHVZAsPwAF0cSKrTTdUDj4aoYOj05t&X-Amz-Signature=4ce03467670626eca747caf478045e59aeddd617f818297ec2744fa7bc9b333b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z2AALP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwDAWpRTlMGd%2FLECwPgrgfsvGiFYwumXyGbOlnE7igxQIhAM45Oaxa%2B6Lx8GhtG8p%2F6S%2BOzhRYJT6Yer6MKDnEpNNOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAwb%2B%2FL5bvdNVZlXEq3AMgl2T2lzIimP96FAdI%2Fga3VLSN8mEr6nNzzBrLCXVdVjI3xtrDCLIiCRfOmm%2BoLDpjhb8faSaN7rhoHiI73iFyKz1Uc1IMkW1DcM%2BD%2FgDswd0a1%2BnRbxLE88dTEgKgab9sQviNfRMALBQ3n0Gekr39FqMIR6nEe6LpIMxZ6Mzw8YZXQkoiX1qBoGek0GobJXdLhy4YAhaNHhSg80b1O0FAnnMY%2BGMWs9lC1jZfyjK7Jv5jolDPM9IWK0n3majg%2FijwMD3S9MKRNFjy11cwIDFf%2BoQyBXZ%2F7eNxfvOc3j%2BoWP8rsdlDJ%2BSpAXXHqaZsPoa4ZAT%2FZjZpRHdF%2Bq%2B8hhdy6fqFpyEvy%2BvOWner%2BRT%2F%2FgHR7RT5tktUDQ6I%2B5cJ7nytN4U0ugFdchrobHwIaGV2LhIPYUTw6D87bjA7BxZWO%2FCBQITG9%2FE%2B8O3xFr1lQNNlxHWVbhcTHsKyKCX%2FpIZMm%2BtxPxa1Q41awxQ0J1tKmnK1UYk%2BfjJTHlyB3iEg36szvi%2BM374wO1aSW13DimNQBfI8Q2gLiXwoTiF9wZbP3LxAzy3Tp1vGp%2FEP3KCs1EV4Mg3acaZ1MKdBaSfKmUHQWCEuD0W82rAfT1Fa58Hhe0MF%2F43a2beOVaCLNzD9%2BuvBBjqkAd%2Bz6JuwJnPwBE%2FxiGLHcqOLURjN9WMt0418duDJN3qYavv5uXj8pXgxj73dAeFJaw6ijpIBEWpddgm%2FJJ5sXt70cWHvTub5p0Rz5CxPHyZkWqiFxJg8Xcb1qd7RE8QgFoZg%2BUYV42YWmAsVM9PylggVrQDXx9rOA%2Bk8zRe2UelTn%2B%2FgBfgeqDL5LCWlcUFs49KM%2BgX9a1uLCtgEqQIxi3%2FSK2O1&X-Amz-Signature=084a7e7f3f0375bebb2914a600c4d5c7e1ed584f7e666b0a9a47922a3d1eb873&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
