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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVATJVIP%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDqlq6xE2uAkPBuIi2cSKVqHE3G0uIgpZlJ6KJmy%2FNYBwIgfDZHMZXIIaGMuHpCoQWZiUeOBQiZVQYtlVsmP6CkrN0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrXqYNr620bn9JqnSrcAx1V3bBLdAsQqFGpCQKzSR260jIf%2BZzjgyTGoCYVt1UrRIRraNvN18xDTneGwP6rkgjK17dgs818zq3FcSi7tjZtvVQ0HWKksbuMDnGrI8c2CR7e3btzfhnlkLVw5IVafRpV%2BqgbKaLeuUxyBJZjuOwcsNs%2FDTWupILfS1A2xwX80n6gVInUd2wmtTuLH%2BJe30r88ll7cpaGpY2nsbgcpsUKwt6J0fjtBVKbThzJIZdF3Kmj0CpaF6zAU%2FNEYFtmA2DZZEZemkrqkMHB%2FvsUsSVfIPFn0m%2B9xKN6WsgJTnab4XVNlOtoKrRb6haRgsgIISo67xxtkTrmKkb197mEwYL42ZChR4R46VmOAcS7uxtyLTihM9Nmp%2F%2BRln1GuJV0Rvz3aOm63ah8JdESSVwzlH9bldZwdCJGocjR%2Fx0krqSxMu5uVqt8MJzmsdIbIB2sSfjGxqoVfJZxeRib4nz29EWalIHx4FVJYIwRZN3svMeLe8R8N%2FPhnAQTWPCVeFeG7M286weRFp8P4AI3Vh%2FwiVMbOROSSwnzTW%2BDq8SZI6SvGqw4eNFJ0wOSVv9HhCF9hLsf9MB3gx4zlSAI9e7jFqiH6uu8xSkVhTKFNqwvPY1yHknDGI33H%2BO9EfVQMPvbuL4GOqUBPyBJs1H%2FATPc0DJDQO0cciFEinnPPGOskqFmN8Fdiy5d72p5FIMmsAChBThkXgeEvVIG2GJoa0s4nSQYLJLW7oXQMI1y0%2F8elRlj5HdkrrUb8noD%2BlctMkC%2FXidEQnzH0qIN79M%2FBMjvQV6%2FmU5JgXKeOWDO7FvaufkDmhbu5v2rOYNrYGlxYOfF2znexn3gotc8w3%2BRaIsuSNTWi88JJc393XN2&X-Amz-Signature=682d16aaa4085fcf1a3bb5145a321f02f9c3e51dd2e6991c7ac7363d7d650b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVATJVIP%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDqlq6xE2uAkPBuIi2cSKVqHE3G0uIgpZlJ6KJmy%2FNYBwIgfDZHMZXIIaGMuHpCoQWZiUeOBQiZVQYtlVsmP6CkrN0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrXqYNr620bn9JqnSrcAx1V3bBLdAsQqFGpCQKzSR260jIf%2BZzjgyTGoCYVt1UrRIRraNvN18xDTneGwP6rkgjK17dgs818zq3FcSi7tjZtvVQ0HWKksbuMDnGrI8c2CR7e3btzfhnlkLVw5IVafRpV%2BqgbKaLeuUxyBJZjuOwcsNs%2FDTWupILfS1A2xwX80n6gVInUd2wmtTuLH%2BJe30r88ll7cpaGpY2nsbgcpsUKwt6J0fjtBVKbThzJIZdF3Kmj0CpaF6zAU%2FNEYFtmA2DZZEZemkrqkMHB%2FvsUsSVfIPFn0m%2B9xKN6WsgJTnab4XVNlOtoKrRb6haRgsgIISo67xxtkTrmKkb197mEwYL42ZChR4R46VmOAcS7uxtyLTihM9Nmp%2F%2BRln1GuJV0Rvz3aOm63ah8JdESSVwzlH9bldZwdCJGocjR%2Fx0krqSxMu5uVqt8MJzmsdIbIB2sSfjGxqoVfJZxeRib4nz29EWalIHx4FVJYIwRZN3svMeLe8R8N%2FPhnAQTWPCVeFeG7M286weRFp8P4AI3Vh%2FwiVMbOROSSwnzTW%2BDq8SZI6SvGqw4eNFJ0wOSVv9HhCF9hLsf9MB3gx4zlSAI9e7jFqiH6uu8xSkVhTKFNqwvPY1yHknDGI33H%2BO9EfVQMPvbuL4GOqUBPyBJs1H%2FATPc0DJDQO0cciFEinnPPGOskqFmN8Fdiy5d72p5FIMmsAChBThkXgeEvVIG2GJoa0s4nSQYLJLW7oXQMI1y0%2F8elRlj5HdkrrUb8noD%2BlctMkC%2FXidEQnzH0qIN79M%2FBMjvQV6%2FmU5JgXKeOWDO7FvaufkDmhbu5v2rOYNrYGlxYOfF2znexn3gotc8w3%2BRaIsuSNTWi88JJc393XN2&X-Amz-Signature=a0b55b2cb96c55dec78a5d7c030613e6a712062dfedf81da4ddcc03fcc964ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVIZI46X%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCfTFQ2yVyukk15YzvbKL3CMAPseywco38aANwlqy6vwAIhANN4eh8iPVKS2sgjBvK%2FgQPVhbHsx%2B5P%2B%2FSTUC50QDtqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQzjyCLL%2BrZoD7zYsq3AMvfihi8AIpj68aQgHVWUFQi9CnWvxlBl40JoHLppc462dY6iJU0rA8RYsGFgwovKP8n3Z%2F28nRePkgT9wfFN5OQHjhOa%2FMNZd2eHZUvJ%2ByBplqtS1hs9ogOzH5%2Bavb072zDdeuhM9VIoq3YWDOU4WOt0UElf9oqFNsxLlszlH0XvtJXWYxe8bmQWrLwTwp9EQf8ZIkBCYWYLWZQl2RKzUeE94ba%2Bmb4k8z7KFlv4VGItplougDUhbzN4zpyzkny3mzLIfK6%2BFlod42I1eYXGXiUZECYMSWcz2DK2xDY12mGv0Jm2l002DU%2FRnZe0ij%2BacjLxzSGWWl1yW%2F%2B5qTzCFgDWQZUxnd3RAQpItNDbw5h86H7uHHyuxLguz3%2BLrPZquoDZxmAc2GhQHPqOyk0FfDBtleVLQicpAWgNV3Qd5TRF0lGchyuQ3feD0VeCLSlJXxag7NSVzgqiaovyAJBLilFtR6O1Pr%2FKICHpTaTyswtTR5e3JF%2FyzUV%2FJqpS7%2BiPLjZGJvTFK8A5WNxLStLv5K%2F%2BirnPL7W1eL0SeRt7hVF8uznjijImQcAqSfTACT3UYoDJK4VrAz2eDjbVhZZgJXFTyAzJL7lWW7iMYfQsWg8ao6QU939JcKWUM2ezC%2B3Li%2BBjqkAaDMUAJM7sbXFuvWWRYu0ZU5uin8z%2Fg6L08pLjULG40w1VuCMelQ3PfOCT9uJDsG9KSxP5m7ItkJU8f0hjuIeyKw7t0ZAuKPxCcCcfxkjUwIlXFr1RPayRB5ipp6eXPfQWiIHj0EzMtZAkHQ2o4IldTiW0gJpddA9Np%2BWI16ZmYJecefloiAtUkqv3YsLxDpAGr0eLPY80kYCNISaf9kDO9H4Gfh&X-Amz-Signature=0f821d1beecb315f127bf992306e17a17e85fcd23991bdcbcc8611c9b5fca2b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OASE7SB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCiC%2BIc1JrBTZ8HNKU5%2F%2BxIj98hl5sN%2FFHK6IlDCO2aRAIgKdXe%2BsEviB2Lfygwt7N%2FmStKMm7JaieCZk86qrmcx5gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6jATeqwC%2FP5rTYGircA2DHbtw5%2FhRd4fc621mbvqz3flDXxDcIkJWf9k6aqgBWJV1v2Pn35sNJd20GXsEZKs9xPf8SmNMDLBKjcNjYSe3XUCZCkHTgFQMkvP7TDujsItrqgggT0RcbW6TV5XwIrbwiySyeH4q7fcKkVT%2F0jXoXQH%2B2GKHYOWCfw%2F1MgrWxaIm21SGNzHPBfhKSaDKWuXuEaOMw3%2BC%2BhbdNK6N34YtlB%2FOJuCjCOur2gWnFPTuCal7CzG%2BGk1cDn0dyjXRt3tiawC%2Bs7YrqDjvRzyOpZeOVXl45PLmiGmJTVZIePDgxVpPiCWZgiPrKvPe0JQqcnjTAztmi0UuQxGXbjl2i7IAG5sXymUJKnGJuEvPA%2FaPmN4tYpVxq7k6NDqUt7zDphgxYwx4phAri6m5Df8l3YVd4bePmSh5JFTGquqI%2FenF7%2FTbkSiBdTILQ8b7GuMFil1ZLXjIqWYcDba4pf1v8t5K0SKLQh9P6JGtcd0J0KFCGvvtK%2F%2BJsvJCdkDv8dkLgpknwMUnGpazbTQE%2FhKenb%2FJ0MNGnt2mUoAAaoH0nTwFVL81xxDsBpbIlmGKnnkzsYbo3sVLP8RnIbVQzq1H3O0XLwCpNSjvifwnL1rOz5eX6TUCbJOHQyefPJxeHMKbcuL4GOqUBHjvarTcxAMYJknUlvf4ImhyRf54W%2Bp0JJ6RUPKVKpTtmdHIQrEth5lUrDq2BPjUkNAQjX2whPKNPEpMqxhhUfBGbXZflpvC9Qe7ur4azFZrxJlr97N%2Fuw6asFeSVcqfL7uRPNcRd1PKqZLlwS1Ri6z33pQm2gmgLcXEWjXJeobhgL0q58dk%2FcRwSla2mY2JqfFE5mf%2FtBkJRw81QLnEtmRYO2Dps&X-Amz-Signature=abeb4411894f6bc004a9863279410525449bfc521c63654ba6329c905e443d84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVATJVIP%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDqlq6xE2uAkPBuIi2cSKVqHE3G0uIgpZlJ6KJmy%2FNYBwIgfDZHMZXIIaGMuHpCoQWZiUeOBQiZVQYtlVsmP6CkrN0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrXqYNr620bn9JqnSrcAx1V3bBLdAsQqFGpCQKzSR260jIf%2BZzjgyTGoCYVt1UrRIRraNvN18xDTneGwP6rkgjK17dgs818zq3FcSi7tjZtvVQ0HWKksbuMDnGrI8c2CR7e3btzfhnlkLVw5IVafRpV%2BqgbKaLeuUxyBJZjuOwcsNs%2FDTWupILfS1A2xwX80n6gVInUd2wmtTuLH%2BJe30r88ll7cpaGpY2nsbgcpsUKwt6J0fjtBVKbThzJIZdF3Kmj0CpaF6zAU%2FNEYFtmA2DZZEZemkrqkMHB%2FvsUsSVfIPFn0m%2B9xKN6WsgJTnab4XVNlOtoKrRb6haRgsgIISo67xxtkTrmKkb197mEwYL42ZChR4R46VmOAcS7uxtyLTihM9Nmp%2F%2BRln1GuJV0Rvz3aOm63ah8JdESSVwzlH9bldZwdCJGocjR%2Fx0krqSxMu5uVqt8MJzmsdIbIB2sSfjGxqoVfJZxeRib4nz29EWalIHx4FVJYIwRZN3svMeLe8R8N%2FPhnAQTWPCVeFeG7M286weRFp8P4AI3Vh%2FwiVMbOROSSwnzTW%2BDq8SZI6SvGqw4eNFJ0wOSVv9HhCF9hLsf9MB3gx4zlSAI9e7jFqiH6uu8xSkVhTKFNqwvPY1yHknDGI33H%2BO9EfVQMPvbuL4GOqUBPyBJs1H%2FATPc0DJDQO0cciFEinnPPGOskqFmN8Fdiy5d72p5FIMmsAChBThkXgeEvVIG2GJoa0s4nSQYLJLW7oXQMI1y0%2F8elRlj5HdkrrUb8noD%2BlctMkC%2FXidEQnzH0qIN79M%2FBMjvQV6%2FmU5JgXKeOWDO7FvaufkDmhbu5v2rOYNrYGlxYOfF2znexn3gotc8w3%2BRaIsuSNTWi88JJc393XN2&X-Amz-Signature=7c1d087ba5edce779c67421012e541e20abe65a8d8b30fd8e22e2e14a40710b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
