---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7XWDYP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJoBeyu88Al2%2FzH6AGj4VB446Y122d9h%2FD30STZsJBYAIhAN6KRIVFfXiMh7UQANxMs7dXkIQzJm1oqO%2BcMjag36osKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1vNGOXDggejEiovkq3AOt6%2BCZf99I6cCjGlNnrAeb9npgwLwRWS83Ft89b0WcJWoP3aa4DabWrzB8IoAvhO9LwOW0pZ0XC3CBU5uBxUlp4%2BDiB5yahSWeGwIbsbiZLdo9GwnIojPHpdnzJyVDKci2R3dqLTs%2BUfzgpbrTYhWKnzWKvt9ixLHmGCU4ferm8XYkU47dC4rSwE0uc%2FMLdtLDmJ%2BvS82fwnZk%2FRsoX%2F7edEZnYDGmwvhHYV%2Flf7WsHp3ptthqa6OiaK2Pm2RvrpyPmfkqTkqRRxYG7NhFgsDl5e74dz%2FZJ%2FO7%2FPFBlx6jY6DHOUd3YEB%2FgCU6xGX8h4t1chtevZKcIdQeNP4YlzvaqSucWPJNMVMbsuBiiuioPTWAgRJkqRR1WVj3%2FjmDjcp1wFDPyVmHpajW%2BXGev7qErIr%2FaVz8qui8dlZUckJlXdbqaz%2BRRX%2FSvNOuS4W8DzwLX7pDpW%2BIGpEvpAEZAAXZq%2FZoPxT%2FPNSJpc35aFaFzJrElaNlPgYtbsFsHVhz4pnr%2BB4kwjUlL%2BHCx9x6l%2B%2FQdxbVdE97Fc0B3IlG6OsfGt9Oa7%2FmWViEaanT%2FXqzZBW%2FPOqoy7G%2FCr9hkKnrvBAQdfgwSwjlnjjefivrFPVc8bIEBMlng%2FnMGPFB9jDt9NHKBjqkAS2lkUfbH5AOsXF%2Fe8MbfcMrgMT9pa8YBcBpvmOGyH9jC8In%2B0ajnIBLKNr%2BYeBy5gN8EDOagA8simDUF0EPAxQbRt4ceO0mQPPB817yAbI7cnxSEfibGhJHxzMdLgYZ5mcfVGs6JRwi%2B4GtAE6DbpNWj1Yvn9LOgntjn9E9Dc9b%2BGB%2BUJG%2FjD%2B0gcktwEN1%2BXbtUCf5uSNEK0qmzbBLdSCN5gSO&X-Amz-Signature=7e487e170e2e7c9432ab2466d31ba3c22bbf5349b2a093aef978555f0eaa8451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7XWDYP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJoBeyu88Al2%2FzH6AGj4VB446Y122d9h%2FD30STZsJBYAIhAN6KRIVFfXiMh7UQANxMs7dXkIQzJm1oqO%2BcMjag36osKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1vNGOXDggejEiovkq3AOt6%2BCZf99I6cCjGlNnrAeb9npgwLwRWS83Ft89b0WcJWoP3aa4DabWrzB8IoAvhO9LwOW0pZ0XC3CBU5uBxUlp4%2BDiB5yahSWeGwIbsbiZLdo9GwnIojPHpdnzJyVDKci2R3dqLTs%2BUfzgpbrTYhWKnzWKvt9ixLHmGCU4ferm8XYkU47dC4rSwE0uc%2FMLdtLDmJ%2BvS82fwnZk%2FRsoX%2F7edEZnYDGmwvhHYV%2Flf7WsHp3ptthqa6OiaK2Pm2RvrpyPmfkqTkqRRxYG7NhFgsDl5e74dz%2FZJ%2FO7%2FPFBlx6jY6DHOUd3YEB%2FgCU6xGX8h4t1chtevZKcIdQeNP4YlzvaqSucWPJNMVMbsuBiiuioPTWAgRJkqRR1WVj3%2FjmDjcp1wFDPyVmHpajW%2BXGev7qErIr%2FaVz8qui8dlZUckJlXdbqaz%2BRRX%2FSvNOuS4W8DzwLX7pDpW%2BIGpEvpAEZAAXZq%2FZoPxT%2FPNSJpc35aFaFzJrElaNlPgYtbsFsHVhz4pnr%2BB4kwjUlL%2BHCx9x6l%2B%2FQdxbVdE97Fc0B3IlG6OsfGt9Oa7%2FmWViEaanT%2FXqzZBW%2FPOqoy7G%2FCr9hkKnrvBAQdfgwSwjlnjjefivrFPVc8bIEBMlng%2FnMGPFB9jDt9NHKBjqkAS2lkUfbH5AOsXF%2Fe8MbfcMrgMT9pa8YBcBpvmOGyH9jC8In%2B0ajnIBLKNr%2BYeBy5gN8EDOagA8simDUF0EPAxQbRt4ceO0mQPPB817yAbI7cnxSEfibGhJHxzMdLgYZ5mcfVGs6JRwi%2B4GtAE6DbpNWj1Yvn9LOgntjn9E9Dc9b%2BGB%2BUJG%2FjD%2B0gcktwEN1%2BXbtUCf5uSNEK0qmzbBLdSCN5gSO&X-Amz-Signature=9917d00b7638150568309e686f431a46ac27db277451903096d2e41a3863b1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7XWDYP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJoBeyu88Al2%2FzH6AGj4VB446Y122d9h%2FD30STZsJBYAIhAN6KRIVFfXiMh7UQANxMs7dXkIQzJm1oqO%2BcMjag36osKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1vNGOXDggejEiovkq3AOt6%2BCZf99I6cCjGlNnrAeb9npgwLwRWS83Ft89b0WcJWoP3aa4DabWrzB8IoAvhO9LwOW0pZ0XC3CBU5uBxUlp4%2BDiB5yahSWeGwIbsbiZLdo9GwnIojPHpdnzJyVDKci2R3dqLTs%2BUfzgpbrTYhWKnzWKvt9ixLHmGCU4ferm8XYkU47dC4rSwE0uc%2FMLdtLDmJ%2BvS82fwnZk%2FRsoX%2F7edEZnYDGmwvhHYV%2Flf7WsHp3ptthqa6OiaK2Pm2RvrpyPmfkqTkqRRxYG7NhFgsDl5e74dz%2FZJ%2FO7%2FPFBlx6jY6DHOUd3YEB%2FgCU6xGX8h4t1chtevZKcIdQeNP4YlzvaqSucWPJNMVMbsuBiiuioPTWAgRJkqRR1WVj3%2FjmDjcp1wFDPyVmHpajW%2BXGev7qErIr%2FaVz8qui8dlZUckJlXdbqaz%2BRRX%2FSvNOuS4W8DzwLX7pDpW%2BIGpEvpAEZAAXZq%2FZoPxT%2FPNSJpc35aFaFzJrElaNlPgYtbsFsHVhz4pnr%2BB4kwjUlL%2BHCx9x6l%2B%2FQdxbVdE97Fc0B3IlG6OsfGt9Oa7%2FmWViEaanT%2FXqzZBW%2FPOqoy7G%2FCr9hkKnrvBAQdfgwSwjlnjjefivrFPVc8bIEBMlng%2FnMGPFB9jDt9NHKBjqkAS2lkUfbH5AOsXF%2Fe8MbfcMrgMT9pa8YBcBpvmOGyH9jC8In%2B0ajnIBLKNr%2BYeBy5gN8EDOagA8simDUF0EPAxQbRt4ceO0mQPPB817yAbI7cnxSEfibGhJHxzMdLgYZ5mcfVGs6JRwi%2B4GtAE6DbpNWj1Yvn9LOgntjn9E9Dc9b%2BGB%2BUJG%2FjD%2B0gcktwEN1%2BXbtUCf5uSNEK0qmzbBLdSCN5gSO&X-Amz-Signature=fd4b115854ac7800a28e0ea4c23fc21a4a04c2e6108a7a49b5552a3516b15354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDVNAIHJ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDXt1%2Fv0cLiKscTzb2abRP4aM%2BgHdNCekcWhzPvNygZAiBxG8%2Bcdick0n07oLVxpkvDaDNR9l5lD%2BgI0F5DC2uyNiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnBxnrzeGd%2Blt9%2B0DKtwD49lEngYIInajUBNEeyvaRbx0t6rF90AygjPoJfUKkBatTP7IUlCc2uwafUVExK%2FypOvklQbkzIjUOSpEP8WQz5jRbIMV3%2BvwMY2JLT1IYQq52%2BWM7sKA0HTgrhc9eur5XBY9x0926N8Z%2FIIKqSvPEYoVmidGUlA3TBCjvVE9OIwRmL7TvZT1o4pomaTtZxSrbpp7r4FeosYmb6QfJIoWYE7HbffFvkTYa6JKNwM6aS4p5YGA36FjsyYkPYMWKCkQYGfDHste%2F5U%2BtbxQpZc6BeaZDRkkot2ojgmXwQu6w6OoGPUMCEHU%2FnKn%2Bav%2FUOd59Gfm6AwiZ4hjltk2OP13o3orf6UXiOMT1iWSMfsiLd%2F7JgS%2FQ4oV6BtzIF6z3eQ7Q3Zm1fADjt9WeevnEgcS41ErHHGLZAGzvhrzk2CQd322bXxtss%2Fc08EL0aUiHZCyI0H2lmP62qO61PjExYYs0Em64XkGyKBff1ioN%2FR8HkWMiCRTmiXZPE4h4mBBuObVXRHWKRxjTtS5HxN7P3EyJG7a8h0XQ2PCQDLfQcIzCDvBXjdtwtpSPR%2B0I4zajnMrniwvWW38ti0U18bIBKCvKSb9xk%2BcF%2F8KQQ6dDqRFtoxfZi4uTNoFAi4oSkYwgPzRygY6pgF3gdn%2FIBJg0dtsQjn5wwWS2PlOh95NIk86Ud7oC%2F8i6newGg93zXo95yfqzjMzSa7%2FZPHTR74Sc3v5UZVnokXFIvryb7YyTLFde%2FClagsUnv3ryILSnn%2FTjjfK8BFcS8eUtC8cKFeNJ8w6rVNOCmyrK6ipi4SKsQcwC3hP%2FgGPAbkJytWocBSJ8OvXXBoE62QPanVmCQuzu3jdZ3TC8Y1kYpXwXXFX&X-Amz-Signature=7f51a0c7495268a7c0d17819a6e1e355b06b74cb9a81116ea112ee2cbd4f822f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGL646YJ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3dv%2BQj5w2hi%2FcHs9tX2KEkaIyovRi7C0dR%2BBVKEXlzgIhAPFvwy9TFrjeiLypKJr2hugGOkJOe%2FZ8ZgFV%2FawyjqH6KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIbCIbgmRfpR1AEecq3APixmKviP3Ba4CNF5K4EPYY3gssQ28Unj4FB2Mvk2oLhjNA5h8moYurA5uytfFf1oHJRmwgAQa47JNLNlT8hvLWyhNhPhKLmNfGDTguhdzUGLRG%2B2HyPltxs92ZCg%2BjWq%2F8uV9z76GEMfc1vMPVGxqlumv7w1iWS0vxqC2oV3im7K9WvV5XtcXnHzYAas3Lhfp24ecN%2Fi7DK7jYWRPNXtDzB0ZxTpUhM7Lwb5Z1p1oiPu7zvy1E4N0gBezbEWwZFQTG9pre7oh87Bdr3dyksfcJrI2WcoFlp5efgOyK8M7i%2FSbrAxCp4Gdhubk9KEUBZEiEBSBrjgFYJ2M7Y0JsyKWIZBXnMONEoNdNchfFLQx9RHWLcnCh6w06S2uGv58ztT65GRz44PZ6NkTsA0vYPentC7RLilyKZxpNR%2BIacycLW4KG2VLgj4wHplFho1XBB81oI9Tsca9A%2FByVfuGvYxBoP9aYk8VapcG9A9bc3dcqqcD7m949ad51boXhButIOHDrHXm1ElVpXzHal8KK00Vh5TQvV7aeyfsRQ6opfUo4E1aFxdQ3IWrfscG%2F9tRj2qANvYULEJAQAUP%2BPgOWfT9YMYupGuUXkH00ViUCcNr5lW1cQwG7lvIu0CNMOTCi%2BdHKBjqkAWUV80Stk5LJg36SSTgBkAvY6lImotz4YknNjugzig2bbRFYTUKEyrEESIDG63IT7IeFDgX588vM6o82GgXfQNs8cNqz%2BSggrYxR1OO%2FS4lujAN%2B3HndyGZ2megNhD1vZ6zrKLFPaazpIjoEqk1N8JWP35iIbgfYLyKqOkItKdBsgBp0NIfYsZRyAIkonWri778PRHEanpB4LtbeHEgbGh3fIgpq&X-Amz-Signature=3cce67f8931abc4e86440d6661c8a69cf7118686150f37a4c3364733f55f6527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7XWDYP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJoBeyu88Al2%2FzH6AGj4VB446Y122d9h%2FD30STZsJBYAIhAN6KRIVFfXiMh7UQANxMs7dXkIQzJm1oqO%2BcMjag36osKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1vNGOXDggejEiovkq3AOt6%2BCZf99I6cCjGlNnrAeb9npgwLwRWS83Ft89b0WcJWoP3aa4DabWrzB8IoAvhO9LwOW0pZ0XC3CBU5uBxUlp4%2BDiB5yahSWeGwIbsbiZLdo9GwnIojPHpdnzJyVDKci2R3dqLTs%2BUfzgpbrTYhWKnzWKvt9ixLHmGCU4ferm8XYkU47dC4rSwE0uc%2FMLdtLDmJ%2BvS82fwnZk%2FRsoX%2F7edEZnYDGmwvhHYV%2Flf7WsHp3ptthqa6OiaK2Pm2RvrpyPmfkqTkqRRxYG7NhFgsDl5e74dz%2FZJ%2FO7%2FPFBlx6jY6DHOUd3YEB%2FgCU6xGX8h4t1chtevZKcIdQeNP4YlzvaqSucWPJNMVMbsuBiiuioPTWAgRJkqRR1WVj3%2FjmDjcp1wFDPyVmHpajW%2BXGev7qErIr%2FaVz8qui8dlZUckJlXdbqaz%2BRRX%2FSvNOuS4W8DzwLX7pDpW%2BIGpEvpAEZAAXZq%2FZoPxT%2FPNSJpc35aFaFzJrElaNlPgYtbsFsHVhz4pnr%2BB4kwjUlL%2BHCx9x6l%2B%2FQdxbVdE97Fc0B3IlG6OsfGt9Oa7%2FmWViEaanT%2FXqzZBW%2FPOqoy7G%2FCr9hkKnrvBAQdfgwSwjlnjjefivrFPVc8bIEBMlng%2FnMGPFB9jDt9NHKBjqkAS2lkUfbH5AOsXF%2Fe8MbfcMrgMT9pa8YBcBpvmOGyH9jC8In%2B0ajnIBLKNr%2BYeBy5gN8EDOagA8simDUF0EPAxQbRt4ceO0mQPPB817yAbI7cnxSEfibGhJHxzMdLgYZ5mcfVGs6JRwi%2B4GtAE6DbpNWj1Yvn9LOgntjn9E9Dc9b%2BGB%2BUJG%2FjD%2B0gcktwEN1%2BXbtUCf5uSNEK0qmzbBLdSCN5gSO&X-Amz-Signature=25ca10b14af3c78146dcc8193d73f825653c940d23dac340742f89c0bd23ce2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
