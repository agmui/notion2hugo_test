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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QALRDWBN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6EpZcf3fqst49HFE3qu9FHWhPGwyhFQf%2BQyL0PX00QIgHDPuKWCUyUJoAqCq9bUeoP5ZrSWDLiNdEMEW%2FEpQV9oq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIIX861bPt2moK9cdyrcA1ofEwqc4fXwoNGUfSKC7xaMdYQf7ur4AcHyAd2uCbs8G78YZcR1OgEA0w338mY09h%2FwlQ0JUo0DeMRdvqDmHHp8hcnRyoK6APAKvu75Yl9aIhVTGnrbv%2BmZwaAwEbyqKB79V738jMTKZHesihZ0Qr8yd1tZjziqozlG7BShTTxj2AEgCEmQQPhYmFBgfj4ntCVppJbvV%2BrUnqznEFjiBaZgDcJ%2B9qZytN7oa0WPIXTaCQ19H1p64iMLEqjxeZvVimM0VU7op%2Fh0qkKZOU7kDWQPjEUT1NaFsuyEqgznAFPStVtCqgWhmGE3tRIX0tYNSGlSbXqyxS1ZadBIlj0%2BZQSgnVile%2F7FFa7iZAJ%2FUqpgzwAAqWfD8KcCHK2ZGA%2FSXbnI2yPaE5hsiFCOa3Q%2B9MGFnWrSpWWzQ462QauEjmv6%2FFG6gnISuVVhoDixPbm0diJGeHEONFVK2YdFqRamv8VRs9Dt2sViIlH3zleQIaSDGjPgq0jAoluuQEZTpeo%2BmEtYQv1SUXpE0nIuIJKUMsApfCFwXJ3PDqSEat%2BX7hviyl8zXgw2iri%2BWGbTyEpTWXDsIpDDdCPWa8hOx%2BQXYF1Gto4G2cLuNZGto7NoAQAhOg4ybR6ZW1HJOd%2F3MKSegMIGOqUBV2M21HmLqk2ZipFJ8kVOXIB1W%2FxPJh%2F2LQrTFR2cXkMyKVbyllwsHtDYopcUmsTLh8pewiL9yK1E7MhqfP7WyImcYmeG5of0oFmmMR1vxF%2FaBTBmuwkbXUioDuexvuOmKHwTk%2BHoMevMGgvMjrY%2FYp3DLQfqjChJ3ov7FThJYLqFgFyYSnOuKVNhr7QpEji7m5UpyeONYc%2BMmgrdkUgSWvaUuoNo&X-Amz-Signature=bcdabf8f652a3d8a9854ec7b4c105eafdb988f40800dd6cb87354cb9b9fe0348&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QALRDWBN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6EpZcf3fqst49HFE3qu9FHWhPGwyhFQf%2BQyL0PX00QIgHDPuKWCUyUJoAqCq9bUeoP5ZrSWDLiNdEMEW%2FEpQV9oq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIIX861bPt2moK9cdyrcA1ofEwqc4fXwoNGUfSKC7xaMdYQf7ur4AcHyAd2uCbs8G78YZcR1OgEA0w338mY09h%2FwlQ0JUo0DeMRdvqDmHHp8hcnRyoK6APAKvu75Yl9aIhVTGnrbv%2BmZwaAwEbyqKB79V738jMTKZHesihZ0Qr8yd1tZjziqozlG7BShTTxj2AEgCEmQQPhYmFBgfj4ntCVppJbvV%2BrUnqznEFjiBaZgDcJ%2B9qZytN7oa0WPIXTaCQ19H1p64iMLEqjxeZvVimM0VU7op%2Fh0qkKZOU7kDWQPjEUT1NaFsuyEqgznAFPStVtCqgWhmGE3tRIX0tYNSGlSbXqyxS1ZadBIlj0%2BZQSgnVile%2F7FFa7iZAJ%2FUqpgzwAAqWfD8KcCHK2ZGA%2FSXbnI2yPaE5hsiFCOa3Q%2B9MGFnWrSpWWzQ462QauEjmv6%2FFG6gnISuVVhoDixPbm0diJGeHEONFVK2YdFqRamv8VRs9Dt2sViIlH3zleQIaSDGjPgq0jAoluuQEZTpeo%2BmEtYQv1SUXpE0nIuIJKUMsApfCFwXJ3PDqSEat%2BX7hviyl8zXgw2iri%2BWGbTyEpTWXDsIpDDdCPWa8hOx%2BQXYF1Gto4G2cLuNZGto7NoAQAhOg4ybR6ZW1HJOd%2F3MKSegMIGOqUBV2M21HmLqk2ZipFJ8kVOXIB1W%2FxPJh%2F2LQrTFR2cXkMyKVbyllwsHtDYopcUmsTLh8pewiL9yK1E7MhqfP7WyImcYmeG5of0oFmmMR1vxF%2FaBTBmuwkbXUioDuexvuOmKHwTk%2BHoMevMGgvMjrY%2FYp3DLQfqjChJ3ov7FThJYLqFgFyYSnOuKVNhr7QpEji7m5UpyeONYc%2BMmgrdkUgSWvaUuoNo&X-Amz-Signature=8c76c7b8c4234ccd8673b13683cd477459e7289395f542f752b89ced6467ebac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QALRDWBN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6EpZcf3fqst49HFE3qu9FHWhPGwyhFQf%2BQyL0PX00QIgHDPuKWCUyUJoAqCq9bUeoP5ZrSWDLiNdEMEW%2FEpQV9oq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIIX861bPt2moK9cdyrcA1ofEwqc4fXwoNGUfSKC7xaMdYQf7ur4AcHyAd2uCbs8G78YZcR1OgEA0w338mY09h%2FwlQ0JUo0DeMRdvqDmHHp8hcnRyoK6APAKvu75Yl9aIhVTGnrbv%2BmZwaAwEbyqKB79V738jMTKZHesihZ0Qr8yd1tZjziqozlG7BShTTxj2AEgCEmQQPhYmFBgfj4ntCVppJbvV%2BrUnqznEFjiBaZgDcJ%2B9qZytN7oa0WPIXTaCQ19H1p64iMLEqjxeZvVimM0VU7op%2Fh0qkKZOU7kDWQPjEUT1NaFsuyEqgznAFPStVtCqgWhmGE3tRIX0tYNSGlSbXqyxS1ZadBIlj0%2BZQSgnVile%2F7FFa7iZAJ%2FUqpgzwAAqWfD8KcCHK2ZGA%2FSXbnI2yPaE5hsiFCOa3Q%2B9MGFnWrSpWWzQ462QauEjmv6%2FFG6gnISuVVhoDixPbm0diJGeHEONFVK2YdFqRamv8VRs9Dt2sViIlH3zleQIaSDGjPgq0jAoluuQEZTpeo%2BmEtYQv1SUXpE0nIuIJKUMsApfCFwXJ3PDqSEat%2BX7hviyl8zXgw2iri%2BWGbTyEpTWXDsIpDDdCPWa8hOx%2BQXYF1Gto4G2cLuNZGto7NoAQAhOg4ybR6ZW1HJOd%2F3MKSegMIGOqUBV2M21HmLqk2ZipFJ8kVOXIB1W%2FxPJh%2F2LQrTFR2cXkMyKVbyllwsHtDYopcUmsTLh8pewiL9yK1E7MhqfP7WyImcYmeG5of0oFmmMR1vxF%2FaBTBmuwkbXUioDuexvuOmKHwTk%2BHoMevMGgvMjrY%2FYp3DLQfqjChJ3ov7FThJYLqFgFyYSnOuKVNhr7QpEji7m5UpyeONYc%2BMmgrdkUgSWvaUuoNo&X-Amz-Signature=f5769eccffc26e30a832d6bff8c76a13a414628eecad8bb6cf59a1b166c9fcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQOLGPS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD9qJQfjokfnH6uLEBXJKN1vfeyciqjLg%2FwbEn%2FERFUzwIhAI671fB%2BAyLzjFpHFjtSjoUOxfqYKJooTZA1EpvFjbBWKv8DCCoQABoMNjM3NDIzMTgzODA1Igyqd2kcQMtPxtpVjUcq3APzFQrJQpOjj0VjiIpeIC3%2BTjD9kB%2FSqzN2gqOClKvLYKhNn5oLY8yDq8iWLyrzpFujQpRXGHRR9nmtmUGo8DgJ4HMnrdRRQzBsifoDjgvpSlNh%2Bh4vqpg8pwZmWBZyoMPwKieixmMD%2Fb9FgVkuamtxzpQd6bG%2FbNAlQ2QxwYzjAg5VQxEIB1kJNSw0UFn7dNaHIF8NmofmEQKL1iYdQXL4b924mNEHIRpxXFuYL%2Fq7Uy97mk5OJuikxl8LDGLwDuxZ%2ByrZnjs7WhBCO2IRcxkK8HecnLOjc4O%2BatfMSj%2BsxOVr6osRbEI488rdm8YTlBwIRtTwgOqqBpyRRwSIwG2YP0GXknCvGeYuIBo7wXjMYPj4VDm%2FH2V3TJMJxxYF6v0GKuUVq8VMya8Xup%2Fi71cbsrokPlIRpYDf0XD0OJITqEK5OnqrepLqscr8uGiUcmOIi65AhVVW6f76OKxxnAE1i1%2FHa4eJf3gxyDzkPhNKwpZ1iVt5q366qFf2EHJRU1UXYxgXbhetVWppry07%2BI3RFX0VSp2jVBy8C4JUw8G6ISewP%2FKSHnZjNIXDqOhaa1JKl4H9qDu1DJGKq6OLiBsZVQCWiLNEqO%2BxyWVChVIzrDL%2Fpe3dsXU5ypIhLTC3n4DCBjqkAZk3RRFvV86rT1Jx5BJnUk39L8KQfoZ9rbUqyfbwUeU3FLRVHK2rrz%2BWy3yqFdC8P9YjzSv79GBkPboISSOiF7qmaXcUJwkve9C6bHlj%2B3TQ6d53TTKUx1zM%2BtRaQtziEwnI0FpnlQF%2Fhv3ZKXjNFv92aUNzHc7DX3qxKAyoSILo3nJZ50MLhbB7AE2UQ3eGrJXBbRrEdflXPHSnxVVfI3XTGmsi&X-Amz-Signature=87b0923281b41038ad78fb5340cb5926d4fcf94337176981be58cb195161bb89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCQA6XY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAe8lrsp9TAju5Kpv01HIlZJj3uOiJWAcgWX4RETZgBMAiAombA6x%2B4EIK8Z68Ov6I09cUlwNXYQxGQ27q2c0RyWIyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMFQZNzv7K1xfufo03KtwDdWALPrPqQnYxUetjm66Na0HJVietDNpLwZKi6AbJ0oLeej2svi6fKpyom4Up4VHhg7tCW%2FIodjtox7KXVy1TGo3A5EiyuBBu9mjEAeo7Srv0GZ6AUC52RsVj1OfB%2FSIX1XqQ78zON%2BvuwOqEDG4kOOf7gvCpEK5ckfvc9iUTM0PbVIA7OtjEFT%2F%2F8KgK7wJtMbgJcZZOw8eCIuehTx2myYNzBt6sWFBPG0ucQLPP3h4HOQlxy6wkgv27z5zm4VNWEl%2BhkmqRUKETiwRnlQx2yExajGK8ePxJTY1lZtcFJjrXNZpVTxIVGk05DHD9cnnDKqFGHfLaX0v3XBCyG0sO%2BwEKEDc5EY78Rd6QMidCC%2FovUSBDoOXwcyfeEhuCTZrjzBz76ItpND2MrXEAcZRL%2BdnQhTw2WaxIxz1UZz6ndVxyjOy5rs8Kl%2BzEBcBa%2FVHJqK%2B9OamrIpG%2BurG%2BhdR2OJw1yVAzqijeYPszUOeQ8fWbjvAKaa5w6uMelXI3ojCbZf0rzKXa0jxB%2BHt1jtcf5yyQCPLEToiZv8dDqNXylImJExDanmxfHsVFCvriTqMsqQOaEdk7eypFtprBOPsjdhrayY3ZmWkcTYmufE1NPm2wMruBQitdPVrzYu8wzp6AwgY6pgFIRaPXjSJ94yT84TQgZ5%2FKXX4XsIMXba463gfcstdMa5aNVJgjm4UdHbC43m9oxjeCLsQP7EhGJg2BMvsWAfHGdHIHfSCYBdOQKpbkvb6uExjn3vN3rqsNlHL9axZvKsgxCh2WVUfM49Su6SE4nR5iIDWLXK1hdo%2FCrrBH5O9uRAyBLSHTx22FKv5JcJakc5VZoT%2FjeuI8MSKvLZfQHwRTcHKdtU5K&X-Amz-Signature=3754275bfae4d3b6396b28ead5431652c0c4b68de49b372a37170334333781dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QALRDWBN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6EpZcf3fqst49HFE3qu9FHWhPGwyhFQf%2BQyL0PX00QIgHDPuKWCUyUJoAqCq9bUeoP5ZrSWDLiNdEMEW%2FEpQV9oq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIIX861bPt2moK9cdyrcA1ofEwqc4fXwoNGUfSKC7xaMdYQf7ur4AcHyAd2uCbs8G78YZcR1OgEA0w338mY09h%2FwlQ0JUo0DeMRdvqDmHHp8hcnRyoK6APAKvu75Yl9aIhVTGnrbv%2BmZwaAwEbyqKB79V738jMTKZHesihZ0Qr8yd1tZjziqozlG7BShTTxj2AEgCEmQQPhYmFBgfj4ntCVppJbvV%2BrUnqznEFjiBaZgDcJ%2B9qZytN7oa0WPIXTaCQ19H1p64iMLEqjxeZvVimM0VU7op%2Fh0qkKZOU7kDWQPjEUT1NaFsuyEqgznAFPStVtCqgWhmGE3tRIX0tYNSGlSbXqyxS1ZadBIlj0%2BZQSgnVile%2F7FFa7iZAJ%2FUqpgzwAAqWfD8KcCHK2ZGA%2FSXbnI2yPaE5hsiFCOa3Q%2B9MGFnWrSpWWzQ462QauEjmv6%2FFG6gnISuVVhoDixPbm0diJGeHEONFVK2YdFqRamv8VRs9Dt2sViIlH3zleQIaSDGjPgq0jAoluuQEZTpeo%2BmEtYQv1SUXpE0nIuIJKUMsApfCFwXJ3PDqSEat%2BX7hviyl8zXgw2iri%2BWGbTyEpTWXDsIpDDdCPWa8hOx%2BQXYF1Gto4G2cLuNZGto7NoAQAhOg4ybR6ZW1HJOd%2F3MKSegMIGOqUBV2M21HmLqk2ZipFJ8kVOXIB1W%2FxPJh%2F2LQrTFR2cXkMyKVbyllwsHtDYopcUmsTLh8pewiL9yK1E7MhqfP7WyImcYmeG5of0oFmmMR1vxF%2FaBTBmuwkbXUioDuexvuOmKHwTk%2BHoMevMGgvMjrY%2FYp3DLQfqjChJ3ov7FThJYLqFgFyYSnOuKVNhr7QpEji7m5UpyeONYc%2BMmgrdkUgSWvaUuoNo&X-Amz-Signature=d8f57b6c5ca966ae19fca9046ba9b5b87723da77e50a6add269a0af08de4333b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
