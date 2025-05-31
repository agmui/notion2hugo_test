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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6T6SMX4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0gXiNjrUw9p%2FoXdJvfDBYzymSLEsM%2BfE9sfW%2BGhjSKAiEAsz3bDl7kvtNVhRW3wgF%2Ft4dwZbOPb512Y0jnnYRA%2B%2B0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqMfNuCRjrz%2B%2F1CvyrcA9uNBWYnHYYv2PBog3%2FGAbIRd9JJjLx8bCFvbX3xepk8%2BBHDzzRP%2FEcHCbihJ6wYOVQ63IvYx9xzQkOXj1kOdltT3xHxXCqqa%2FHN4iXXXtmIJOgnS4uBF3vYNF23%2FrMwbs%2BDME5fOF%2FafgTy8YWFgKEtJNihYqGQHOIWAZSgIaKwIOUa4GT57L22saOOq2pIsKROsVqjQQYO%2BoMJjsPh1lYwp6EEZ4H%2BR4eK5Wf7eV3g6WOFfI%2F7XgzQi1m9bbE0bxMuLmsqW%2FKMIFMmum7PzVYbVOxY6EHi6ncjv%2BdN9GKOsKcnI0kMn2ycPjY8Ku25SwL69XpfirohYwkkaD8sSOAj9DgLauY2ybLd7P5iEQgdrdwKjJ2RtIKVL4VLfSnSKonYMVdAntZTWcrZrAFAzyd0UUuc6RPkNDqFLC9vuL9Qxnp0Yp35FWT6D6P8bT9ocfNUFJl6yK7Pm9F1rOi5DjjCTc3Bi3H%2BZnZD8bmFsyN0oGwsqT5p0l77jzZoQ4joH2P%2BhSGZLbMK82WjFpmtRe043dDnM2ggQXpnx6QvCsHG6TNG5k7wSlAsg2gMS38gndBSboeXYsQ5kC7I31az%2Bm2gsOJTiaGTc3BQmDFjCzqwcfXXFOTm63UaUHR0MMGz6sEGOqUBCAc6lLAJULVoZ0QXwfRS9RdgRs2o3B35CS18h2uAZFDKII2HSZe4P0meARbrSZdGrXL%2FEQ8TrjdnQuA4ubkObWTM90K1KtsnGY0HAZHYWOdT%2FQJ2vmLpHm4dijjXu%2Bcw308PNQSCljXLElcEaBh8QHN9HP%2BH0TdqdgelH7JeU%2BbsNfMOLjJqrW9Etgl5TUszfoKVK3xMIk%2FfmHTtYiYxE8oJaSY6&X-Amz-Signature=7b7789a98a833fd3ba1f477dedba94b8feb17f001450e8d748828589920a8bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6T6SMX4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0gXiNjrUw9p%2FoXdJvfDBYzymSLEsM%2BfE9sfW%2BGhjSKAiEAsz3bDl7kvtNVhRW3wgF%2Ft4dwZbOPb512Y0jnnYRA%2B%2B0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqMfNuCRjrz%2B%2F1CvyrcA9uNBWYnHYYv2PBog3%2FGAbIRd9JJjLx8bCFvbX3xepk8%2BBHDzzRP%2FEcHCbihJ6wYOVQ63IvYx9xzQkOXj1kOdltT3xHxXCqqa%2FHN4iXXXtmIJOgnS4uBF3vYNF23%2FrMwbs%2BDME5fOF%2FafgTy8YWFgKEtJNihYqGQHOIWAZSgIaKwIOUa4GT57L22saOOq2pIsKROsVqjQQYO%2BoMJjsPh1lYwp6EEZ4H%2BR4eK5Wf7eV3g6WOFfI%2F7XgzQi1m9bbE0bxMuLmsqW%2FKMIFMmum7PzVYbVOxY6EHi6ncjv%2BdN9GKOsKcnI0kMn2ycPjY8Ku25SwL69XpfirohYwkkaD8sSOAj9DgLauY2ybLd7P5iEQgdrdwKjJ2RtIKVL4VLfSnSKonYMVdAntZTWcrZrAFAzyd0UUuc6RPkNDqFLC9vuL9Qxnp0Yp35FWT6D6P8bT9ocfNUFJl6yK7Pm9F1rOi5DjjCTc3Bi3H%2BZnZD8bmFsyN0oGwsqT5p0l77jzZoQ4joH2P%2BhSGZLbMK82WjFpmtRe043dDnM2ggQXpnx6QvCsHG6TNG5k7wSlAsg2gMS38gndBSboeXYsQ5kC7I31az%2Bm2gsOJTiaGTc3BQmDFjCzqwcfXXFOTm63UaUHR0MMGz6sEGOqUBCAc6lLAJULVoZ0QXwfRS9RdgRs2o3B35CS18h2uAZFDKII2HSZe4P0meARbrSZdGrXL%2FEQ8TrjdnQuA4ubkObWTM90K1KtsnGY0HAZHYWOdT%2FQJ2vmLpHm4dijjXu%2Bcw308PNQSCljXLElcEaBh8QHN9HP%2BH0TdqdgelH7JeU%2BbsNfMOLjJqrW9Etgl5TUszfoKVK3xMIk%2FfmHTtYiYxE8oJaSY6&X-Amz-Signature=4f1332f9c7871aec7130a79cc5e8a801bdfbe1beca8cee77b727148a9aad6c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6T6SMX4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0gXiNjrUw9p%2FoXdJvfDBYzymSLEsM%2BfE9sfW%2BGhjSKAiEAsz3bDl7kvtNVhRW3wgF%2Ft4dwZbOPb512Y0jnnYRA%2B%2B0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqMfNuCRjrz%2B%2F1CvyrcA9uNBWYnHYYv2PBog3%2FGAbIRd9JJjLx8bCFvbX3xepk8%2BBHDzzRP%2FEcHCbihJ6wYOVQ63IvYx9xzQkOXj1kOdltT3xHxXCqqa%2FHN4iXXXtmIJOgnS4uBF3vYNF23%2FrMwbs%2BDME5fOF%2FafgTy8YWFgKEtJNihYqGQHOIWAZSgIaKwIOUa4GT57L22saOOq2pIsKROsVqjQQYO%2BoMJjsPh1lYwp6EEZ4H%2BR4eK5Wf7eV3g6WOFfI%2F7XgzQi1m9bbE0bxMuLmsqW%2FKMIFMmum7PzVYbVOxY6EHi6ncjv%2BdN9GKOsKcnI0kMn2ycPjY8Ku25SwL69XpfirohYwkkaD8sSOAj9DgLauY2ybLd7P5iEQgdrdwKjJ2RtIKVL4VLfSnSKonYMVdAntZTWcrZrAFAzyd0UUuc6RPkNDqFLC9vuL9Qxnp0Yp35FWT6D6P8bT9ocfNUFJl6yK7Pm9F1rOi5DjjCTc3Bi3H%2BZnZD8bmFsyN0oGwsqT5p0l77jzZoQ4joH2P%2BhSGZLbMK82WjFpmtRe043dDnM2ggQXpnx6QvCsHG6TNG5k7wSlAsg2gMS38gndBSboeXYsQ5kC7I31az%2Bm2gsOJTiaGTc3BQmDFjCzqwcfXXFOTm63UaUHR0MMGz6sEGOqUBCAc6lLAJULVoZ0QXwfRS9RdgRs2o3B35CS18h2uAZFDKII2HSZe4P0meARbrSZdGrXL%2FEQ8TrjdnQuA4ubkObWTM90K1KtsnGY0HAZHYWOdT%2FQJ2vmLpHm4dijjXu%2Bcw308PNQSCljXLElcEaBh8QHN9HP%2BH0TdqdgelH7JeU%2BbsNfMOLjJqrW9Etgl5TUszfoKVK3xMIk%2FfmHTtYiYxE8oJaSY6&X-Amz-Signature=3169f10890879a4346d7afe2723202a09775f0f5ac48328d0d5b8dcfbd477233&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LJ3UQT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm8%2F8q53p%2Fr6XVZ9I%2B0lY9jCu3p5B7Ytekw2mEss8oUAiAVoR6cdMb02WCR%2Bk3pjX%2FktnRDHb6mPTJ709qDgwJH1CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMooOtTr6LhP9rkgIUKtwDBWWMyj0Axd9nbAPaqp4Qq8YlqnCZftS069OiwXr%2BRN1ju5O3Wr5NLdlhyvIqurfBm9BfhjNbWf41OK6oMpmI6xqip4y%2Bf38DvRv28ag%2BNOR5bRYu7YGuctCGwaFLSVSgcufE7OiqDst8mFOI8%2FNp8M42a6oNjIUGgtMrY12%2B%2F59DFIPNxqcD%2F4afkZe%2B0o95%2FS3UAYlWmh%2B6xZRSOdyr765kfegFfIBMKscXvhOYEE2q4F2QBTvAjEuFY0pL0GdZAc38vPGnaksQHRS4Y2FDzKSRoOisnhY7wwEm6iLvvGP8fJ41zNyvR7PE8cE0qcRGzq1%2BuqsrQb0BuSlbN2%2B2c%2Bcfuy3IbMbsamgjYHWQlRfmk0uK47KUik%2BTcrLu2iZi9qZik6eSEwS%2Bh3sXdA4YKzpybuRWZYQKFzO3%2FC7wkVTc50gNLAGgWhh5YlEuBsKQc3SEEDVpyAQDzP%2FvB%2FP6bG0MxjLgUBma2nyZzvCFBWhFGAlAMSo9rRJo%2FZpYObN1T4%2FS7ILUxWc7XNWaPWUkV1sqhc9Z7jmNlWnL2y4W0%2BQW8eP0VfLGDgw8IwsaqxhEUDEj%2FGtfjNr3ves8BS6NwLf382c2U1cVpen%2FktuP409khDdF3KjAxWXC%2F4IwqbPqwQY6pgF0uemzrZaQAGihsCOFmOcASCea%2FVzZ9WpfyL0TaKYO0aFIDrds%2BjNQL7TwvWyBN%2BR4yj8z1KlU%2F0RF5YQC0FJEFEvBbvkjgUlgFwVgItJtG55aYdiAkhD2XSYDRe44AcB9lCDWr4kTmsempne7J4vOErLa%2BjK%2By%2F%2Bp09trHFIJnRS89WMRPc9TFzWildN%2FTHd15J8656wTH%2FzKdQG2coRMyaOi7ckK&X-Amz-Signature=4dad73d3381639b17b2bda9f5bc39f3a045b88a3d9bbf1af6e8c8cd9075a4f51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSMJCQW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvLmR7EZ0i01%2BEe9EuyfGKwFCS5PY9j%2FbevQHny695LQIhAOrM9xGeiumxnILRsoJLRJPq5mtEPS3CzB7hQVGBT11jKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8pMkNy9ymSeRQeUcq3AMpMPtkwbLc5BUBcZVnOWEArHbQHqRJCxnT%2BE27Uoe0cR4DrI7LwaPiMw4yu3vbJZiP%2BF5Xso9aeHmVf8c5sel9DhT7MsOk5kDNWo1tzZJqG%2BX4XplA8G3Ty0HecL15y2nXBGuSjZbTknPhmfVAYJLd%2By9yQ9hnCnYl7Sbg96XK1JY5dO6FgG3qfPp3WSIZ8xlxFQuKK7JIxeJC0jeFDOp%2BS8zs35%2BgoPOpb8wnJ4zGJsuU7NFsyYs7sbokB1sYs0LTaTenB4FgOLaf6m0GhpCiYcwn9Pj%2B0kxq7OrdtJGTcWsft299n0H4sEfjUk5xwGmA33W%2BoadYxyKMoM4wSW9AjP%2B%2Bhb8H4JfYZZl9knUdDnn6aO8e%2FoLyL4d2mwjzDD6twP1Dvf28bo0rFcfiNhl%2BUzwAvfsvp0ZVYIjsG3sHmEiehCGXUiOyU0flyX7pOcfTqUSeiCKZPf1zi7mXJQZOPOIfT42%2FgBB9Y%2FEpVZD1%2BVUjrKbK0%2Bd9AgZoX%2BDt3%2Bt21hASvIVLDwpWzSg7SF4XAZCShwrF2GDNYp%2FZetSt2SsU2x8DM5UHgtOKN5XT9OPyXMYsCS94K%2Fvcq%2Bdpcdo7e3FA0Xkp9dQRKe6tKIzFIVG37TjUecn%2BNUJsRjDIs%2BrBBjqkAVwHF3DCBBtnNBmXwjSwq6qWUi1a3ZwPqTg6seDbbVpHqW2wmJf%2F2zM7F7lok02Vcb0mVcygP4NcnP5nDbU2UYU%2BQfgxRgQo6d%2BxngkNX5vyeRp%2FcRLcsjzTOTTByOUAlM96B7ieIBcfkfpxZhauNdiVcjvOMsWZt45zDHckBS8P6xs5rYpPDbZYPzb5dOdS0lAJlT84pE5w38odTItv3o533pCh&X-Amz-Signature=90c98fdbbc1c4d419074da496b14003ad81cc9b234fd79de4212b3ad4b02f3b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6T6SMX4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0gXiNjrUw9p%2FoXdJvfDBYzymSLEsM%2BfE9sfW%2BGhjSKAiEAsz3bDl7kvtNVhRW3wgF%2Ft4dwZbOPb512Y0jnnYRA%2B%2B0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqMfNuCRjrz%2B%2F1CvyrcA9uNBWYnHYYv2PBog3%2FGAbIRd9JJjLx8bCFvbX3xepk8%2BBHDzzRP%2FEcHCbihJ6wYOVQ63IvYx9xzQkOXj1kOdltT3xHxXCqqa%2FHN4iXXXtmIJOgnS4uBF3vYNF23%2FrMwbs%2BDME5fOF%2FafgTy8YWFgKEtJNihYqGQHOIWAZSgIaKwIOUa4GT57L22saOOq2pIsKROsVqjQQYO%2BoMJjsPh1lYwp6EEZ4H%2BR4eK5Wf7eV3g6WOFfI%2F7XgzQi1m9bbE0bxMuLmsqW%2FKMIFMmum7PzVYbVOxY6EHi6ncjv%2BdN9GKOsKcnI0kMn2ycPjY8Ku25SwL69XpfirohYwkkaD8sSOAj9DgLauY2ybLd7P5iEQgdrdwKjJ2RtIKVL4VLfSnSKonYMVdAntZTWcrZrAFAzyd0UUuc6RPkNDqFLC9vuL9Qxnp0Yp35FWT6D6P8bT9ocfNUFJl6yK7Pm9F1rOi5DjjCTc3Bi3H%2BZnZD8bmFsyN0oGwsqT5p0l77jzZoQ4joH2P%2BhSGZLbMK82WjFpmtRe043dDnM2ggQXpnx6QvCsHG6TNG5k7wSlAsg2gMS38gndBSboeXYsQ5kC7I31az%2Bm2gsOJTiaGTc3BQmDFjCzqwcfXXFOTm63UaUHR0MMGz6sEGOqUBCAc6lLAJULVoZ0QXwfRS9RdgRs2o3B35CS18h2uAZFDKII2HSZe4P0meARbrSZdGrXL%2FEQ8TrjdnQuA4ubkObWTM90K1KtsnGY0HAZHYWOdT%2FQJ2vmLpHm4dijjXu%2Bcw308PNQSCljXLElcEaBh8QHN9HP%2BH0TdqdgelH7JeU%2BbsNfMOLjJqrW9Etgl5TUszfoKVK3xMIk%2FfmHTtYiYxE8oJaSY6&X-Amz-Signature=8a2301fe7a4bbb82ed83e70dbbd913151c9df53a3a85d5b763eddd6a590d66fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
