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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2JUKID%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDL2CuFr%2B%2BnlbvYWxD8PxRO79UFjCsYSey3NLSpdsTtzAiEAjsFciwYVXbG5hUqbxfzfh2vtUK%2BmMoq9uzo2aW54EDkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGVdhznoJyGA%2Fpv%2BySrcAyfM%2FF%2BlpOy%2BHD3SoCTZ1ozTMMpwiZ%2F9fYvNGxtY04gfzC2ZKwulVk4r0v4NaHPvVYoaMKvIZQDIU9tG1FNk4O9JkG9mJj2U7Jzka%2BlKQpXDraf4drQgxm%2Bw0druL%2BLPzlfPZIo8%2B5BDggzU8FTloReghRuuVpBCw8Vkv%2Bd5aWtRIcprOlQwzm5ywNs7M8JmgPEmHhnuewGcu1VTqbHJ0y8z%2FhbtTHXsd8dRlGVAfRoZvABmEUgaaqEWvI7qvttlYPzvTSJUJjWYdB84drzgI%2Boj2oH%2BCJcn9JOi5Lb9wIFL8%2BS%2BIThSvYjf1QDiSdp9eIenjK%2FY8rqbvJgL6zyNFEAbASwriH6Nh0gozxyQzPPCpppKv%2B5m6PbVN6nXVwOqeWMGvLhUCk4hTYVbrihjp3XC%2FrZEght34Zi5uUUqtRO6a6l1HUIDYCtIPb027Gwgb727DaFNCfft3g%2BmoM4vkn9H8edn51MzpkInOdu16HUyH4a%2FxaCD66ypDzRRD%2Fdmic8pWwxMM8nZfXt1L7jzafLpjU%2FRgN4kahOrN9L6k2rLnXBO93h5LSG4YEPsDOzQ9gYGBlsZIXECGYNLepxD5tcdBtfBZl%2Bl%2FVm9RUTNF8B6GnESU%2BtX0JNrvNqFMIi7lMEGOqUBORUA0cJdY23jnarlMGQKmlRtAsQhMDlssdCl2SbqS4SChq7G1cjTUr3NBK6NhjYwOsU4YStzpanAQuROdZkhn3AybmlsZhIw6er4p61iiWuAZVPliqt3xYfc3blW5ixWqVs8KsJrL%2BH4Z2Vlh0kpeZG%2Fiv0MzJhNWQ8kLVWoUPCVv75R7H7pt2rFbmS%2FSre%2FZdQzEauyL5jlRRypo6GDfiaq3G2%2F&X-Amz-Signature=7882fbc070e5cbb407be18b5cc85197634a62275b14c1e7759637d7f5595d517&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2JUKID%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDL2CuFr%2B%2BnlbvYWxD8PxRO79UFjCsYSey3NLSpdsTtzAiEAjsFciwYVXbG5hUqbxfzfh2vtUK%2BmMoq9uzo2aW54EDkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGVdhznoJyGA%2Fpv%2BySrcAyfM%2FF%2BlpOy%2BHD3SoCTZ1ozTMMpwiZ%2F9fYvNGxtY04gfzC2ZKwulVk4r0v4NaHPvVYoaMKvIZQDIU9tG1FNk4O9JkG9mJj2U7Jzka%2BlKQpXDraf4drQgxm%2Bw0druL%2BLPzlfPZIo8%2B5BDggzU8FTloReghRuuVpBCw8Vkv%2Bd5aWtRIcprOlQwzm5ywNs7M8JmgPEmHhnuewGcu1VTqbHJ0y8z%2FhbtTHXsd8dRlGVAfRoZvABmEUgaaqEWvI7qvttlYPzvTSJUJjWYdB84drzgI%2Boj2oH%2BCJcn9JOi5Lb9wIFL8%2BS%2BIThSvYjf1QDiSdp9eIenjK%2FY8rqbvJgL6zyNFEAbASwriH6Nh0gozxyQzPPCpppKv%2B5m6PbVN6nXVwOqeWMGvLhUCk4hTYVbrihjp3XC%2FrZEght34Zi5uUUqtRO6a6l1HUIDYCtIPb027Gwgb727DaFNCfft3g%2BmoM4vkn9H8edn51MzpkInOdu16HUyH4a%2FxaCD66ypDzRRD%2Fdmic8pWwxMM8nZfXt1L7jzafLpjU%2FRgN4kahOrN9L6k2rLnXBO93h5LSG4YEPsDOzQ9gYGBlsZIXECGYNLepxD5tcdBtfBZl%2Bl%2FVm9RUTNF8B6GnESU%2BtX0JNrvNqFMIi7lMEGOqUBORUA0cJdY23jnarlMGQKmlRtAsQhMDlssdCl2SbqS4SChq7G1cjTUr3NBK6NhjYwOsU4YStzpanAQuROdZkhn3AybmlsZhIw6er4p61iiWuAZVPliqt3xYfc3blW5ixWqVs8KsJrL%2BH4Z2Vlh0kpeZG%2Fiv0MzJhNWQ8kLVWoUPCVv75R7H7pt2rFbmS%2FSre%2FZdQzEauyL5jlRRypo6GDfiaq3G2%2F&X-Amz-Signature=c31b50acdddd8fa71efaee411e97490dbb0d6783a781f3b3c940148ecedb899f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2JUKID%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDL2CuFr%2B%2BnlbvYWxD8PxRO79UFjCsYSey3NLSpdsTtzAiEAjsFciwYVXbG5hUqbxfzfh2vtUK%2BmMoq9uzo2aW54EDkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGVdhznoJyGA%2Fpv%2BySrcAyfM%2FF%2BlpOy%2BHD3SoCTZ1ozTMMpwiZ%2F9fYvNGxtY04gfzC2ZKwulVk4r0v4NaHPvVYoaMKvIZQDIU9tG1FNk4O9JkG9mJj2U7Jzka%2BlKQpXDraf4drQgxm%2Bw0druL%2BLPzlfPZIo8%2B5BDggzU8FTloReghRuuVpBCw8Vkv%2Bd5aWtRIcprOlQwzm5ywNs7M8JmgPEmHhnuewGcu1VTqbHJ0y8z%2FhbtTHXsd8dRlGVAfRoZvABmEUgaaqEWvI7qvttlYPzvTSJUJjWYdB84drzgI%2Boj2oH%2BCJcn9JOi5Lb9wIFL8%2BS%2BIThSvYjf1QDiSdp9eIenjK%2FY8rqbvJgL6zyNFEAbASwriH6Nh0gozxyQzPPCpppKv%2B5m6PbVN6nXVwOqeWMGvLhUCk4hTYVbrihjp3XC%2FrZEght34Zi5uUUqtRO6a6l1HUIDYCtIPb027Gwgb727DaFNCfft3g%2BmoM4vkn9H8edn51MzpkInOdu16HUyH4a%2FxaCD66ypDzRRD%2Fdmic8pWwxMM8nZfXt1L7jzafLpjU%2FRgN4kahOrN9L6k2rLnXBO93h5LSG4YEPsDOzQ9gYGBlsZIXECGYNLepxD5tcdBtfBZl%2Bl%2FVm9RUTNF8B6GnESU%2BtX0JNrvNqFMIi7lMEGOqUBORUA0cJdY23jnarlMGQKmlRtAsQhMDlssdCl2SbqS4SChq7G1cjTUr3NBK6NhjYwOsU4YStzpanAQuROdZkhn3AybmlsZhIw6er4p61iiWuAZVPliqt3xYfc3blW5ixWqVs8KsJrL%2BH4Z2Vlh0kpeZG%2Fiv0MzJhNWQ8kLVWoUPCVv75R7H7pt2rFbmS%2FSre%2FZdQzEauyL5jlRRypo6GDfiaq3G2%2F&X-Amz-Signature=730af19eca758ae8a966af6c733777f41eb0ace38cf24942bc99a3702fcf3ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCL6KII%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCsRbnJhM3vknX84HYkmvzkzdMLK7zLG1sSVdTS%2FS0IVQIgTEXF4Fa25ji288vnQbJ6wVcMdzLffSvG4s%2Fz1rL%2FcZMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOc%2BZtIvdiqOi7pTyCrcAzZjG8ycPYC8PWAYfamjUa6GICuKO6Vmdl8VF%2FvClPqGM7UsX7Mf01heWWb57PFh1gCz8BIJf9YhpdajSFbeSUxwte9Xrnnk8XtZYvOFMxekSeyCbxZ821%2FYqaH9WXznrRSHIg7m2x2h3RGg5PM1qqqym7Y%2FLJNALEbNBYKKtHzPCPbilcYiYB%2BAI69%2FyfJx09Qzf2g3q6SAwIhirW8HQjjU7x4WfKUHHQFtFLLor%2BG4l1XUPpeMsIFfoHfa9JUd2FbZ4CLiEYPHMB%2BkAomUkLvA%2BwF3sbLXw8wKM5z4QK7LfP7Nl8r90EZtlPJI8WKmPmgvbyGo1v%2BSrGu78Sdky1vp8KHYTCO4RRarEwbYIJW63Zo%2FgRH7IQ1LAgU63Q9lv6%2B5KkBVHVX9pK3K1dj9LnmXlXzjqQeG4sNMdnWJgkIehCWTkhem%2FXmwLBPFWVBxe%2B9YvieNBxMz%2B4q6xw%2FsJRpokQ9Jg3hes77ZtZXFXLjHAAEaaVNo%2BMIl0X4%2BmKycYW7E8gP1eowJOD%2BKL5F8rqoRr3ogMjzoZp6MUTM11cTLoWT%2Fo6JLVi9oA4jt3peDYzDxXbaydj9ysazCwSUALGGJ3R%2FwZMi5TpVeoOXbiGCsYB7BKWIVmOL%2BMiDPMJ%2FAlMEGOqUBATvwoKXm3PSKWFNbRe4bMDwsVTOs3QgfGXzFA%2FcsEZ0y%2B4U2DZZsieQ03FL9AglhRY%2Bj%2FgmzhVaDAv9iYcaEINYnQGHEFRUfIRqqNqmdjZnpAOM18KqZ%2Bd%2FlncSHB6rvMZjyKLHgxGCRJ%2FhaAwfkeEcCffUN4IKEukg%2FGomIXY54p9lLwzDoBsXYiPdh2oemwzjScVHfGGCEdnrV%2B50vg16J6Cmb&X-Amz-Signature=5aefd650e1275c8c93e2cfd356294ebbf72cf4b64e8a4ee3764ef4a394ac28d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPQ3RNU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCuAwo1YM71Q58VpZ%2Fnml3qR4rIWt%2BBR%2B8LtwLZptyMygIhAI6JUE1yyYJtsIZL6xCaoRqIUTyNIvTGRIi8Om4cyyUUKv8DCCAQABoMNjM3NDIzMTgzODA1IgzENR4S9XXjfWP9hjsq3AN0cyaNdhB3Z4KTxDYSO4pahOnp39r9XfGjZSUfi62TX0by5xnltzbLut7I0sNuss3NLPku6AQl94ALaHlwt3d9JNSFyC%2FTrzquKJl2QKXRFcEbMIsYL0zgsXbzRyu9u0kgN38brxLeiGYzisuu%2F2hEi%2FhIg4JQ7SzZ8fTRdp6%2Bl6VyVhLI72NzxypA0E3qwRZvclpDX0rsd8KgDfE5uUiw9OTmdFgBW7gI%2Bpl12Ewi3jnh9F1f1lECd7MAmLr2qagGktPF5G%2F0Okk6nmka%2BGwGbUC9DdJAwA%2BxOW8PamjKKqICLKY8RB7UHmor2XXtdngJ%2BqK%2Fxsw%2BIW3QcJj4SpU%2Bl0S41OYK09yczHfAbYOptwy5Icl8ZtpBhvVC5gdhMKf0%2Fc7cYioVzGZm2%2FjxuK4Vg27M7rJlzm74vvvWaG3T8qxd7W6KBbKjy4LIUS1MAB%2FVZV5HtKwz3nJmBp%2BJ7XqYc2CwDweoavE5QIDgJaeeTPgcEwHXbLMXoRK3jzqjzDuP4ep8Vq5bzdIfw9urwMWE2%2BC5m4lQzrWiXCdWFFABWP%2FEOqi%2B0GgGDkKPewQGvpEVqXRwCzYDOjhxADPwT%2F5rRAgbwq8CRfkrJzY3%2BRPty%2Fy1cEGhzjSr91blwzCVupTBBjqkAQSGJm7osO%2FL124p5oh2BqS%2Bzm0kYieN7dO65%2Bj38pfvDjoA0iHkgTCt7GnvM2G0KpgOSDMtYVQpC46%2BhBNtm%2FjN1IK82UYp3sffvqXq7MAoG2eVyVJKujrlWFTYVRwJirEcwb7CZ5Oj0vAQolI3ZgTK6trOEXrmvug9t1USM9XVyJK0XgiV%2FF0macuSz8Fc9UUEx2Puog7Oc%2BlOLzKpR%2BUdcZzI&X-Amz-Signature=201e203d0d2fc9c29320eeda6849b17615293d55aac70b8e5d0e2bdc7ebfebe7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2JUKID%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDL2CuFr%2B%2BnlbvYWxD8PxRO79UFjCsYSey3NLSpdsTtzAiEAjsFciwYVXbG5hUqbxfzfh2vtUK%2BmMoq9uzo2aW54EDkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGVdhznoJyGA%2Fpv%2BySrcAyfM%2FF%2BlpOy%2BHD3SoCTZ1ozTMMpwiZ%2F9fYvNGxtY04gfzC2ZKwulVk4r0v4NaHPvVYoaMKvIZQDIU9tG1FNk4O9JkG9mJj2U7Jzka%2BlKQpXDraf4drQgxm%2Bw0druL%2BLPzlfPZIo8%2B5BDggzU8FTloReghRuuVpBCw8Vkv%2Bd5aWtRIcprOlQwzm5ywNs7M8JmgPEmHhnuewGcu1VTqbHJ0y8z%2FhbtTHXsd8dRlGVAfRoZvABmEUgaaqEWvI7qvttlYPzvTSJUJjWYdB84drzgI%2Boj2oH%2BCJcn9JOi5Lb9wIFL8%2BS%2BIThSvYjf1QDiSdp9eIenjK%2FY8rqbvJgL6zyNFEAbASwriH6Nh0gozxyQzPPCpppKv%2B5m6PbVN6nXVwOqeWMGvLhUCk4hTYVbrihjp3XC%2FrZEght34Zi5uUUqtRO6a6l1HUIDYCtIPb027Gwgb727DaFNCfft3g%2BmoM4vkn9H8edn51MzpkInOdu16HUyH4a%2FxaCD66ypDzRRD%2Fdmic8pWwxMM8nZfXt1L7jzafLpjU%2FRgN4kahOrN9L6k2rLnXBO93h5LSG4YEPsDOzQ9gYGBlsZIXECGYNLepxD5tcdBtfBZl%2Bl%2FVm9RUTNF8B6GnESU%2BtX0JNrvNqFMIi7lMEGOqUBORUA0cJdY23jnarlMGQKmlRtAsQhMDlssdCl2SbqS4SChq7G1cjTUr3NBK6NhjYwOsU4YStzpanAQuROdZkhn3AybmlsZhIw6er4p61iiWuAZVPliqt3xYfc3blW5ixWqVs8KsJrL%2BH4Z2Vlh0kpeZG%2Fiv0MzJhNWQ8kLVWoUPCVv75R7H7pt2rFbmS%2FSre%2FZdQzEauyL5jlRRypo6GDfiaq3G2%2F&X-Amz-Signature=c8d6eb707e6a255fbbd3df2f03954f5e9146ad0c6fdfbb34fb8bc9bf9059cef5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
