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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4NDUGN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCW%2Fe2FcBVAVA5WJ0kgyrVyoOlK%2FP%2FEN7eZHTWW9RL%2F8gIhAMxiVF8VqgH7ASDy144XW%2FkjJ%2Ft%2FcAZiuKLej%2BXClVRZKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybKbQfP%2FCvOg%2BXKykq3AM5rBeG7GNjStO37DSmEZomAfveMs2Qs7bGoRePzH2xWfjf9Au%2Fbw%2Bqn6u%2FZ8X%2BM9KtYJDwEXCDNWNQE9gzK7lgrWfDS6OeKP%2B9qGUM2z2N8V2MDChf4z18SVpQ55e0U2cstgIRSkvxsCCSRNi%2BRVAv1aKtMNTfj0AvdEdESQGriJQSCa9QQcD6gBP86C2GlbYiWKf9oP%2BRia2gBrP3zxpt1EJHmuxmuh4UEh8l2GO88k2tK00PEn2nHqe9Ew6CPtnBCAhOb%2BWvPOWFmV7mQvhz31Wpw6a8pFO2Zt3tDlhSEXbkdqCt7gcgSvKyOvolAvkgy49U9AkscEpSfsZMzZrKFRTv8pEkwD8O2ed5UsspDhdqyGeVoT7A7gztN1JQoJGMdT4ihQGJpHxy5SQbd7UAvXFSFSwBkkMm8WfyGvHpcwkW7q474oYA0sjLLCYJT6HY3W1gKvVaVmCwyMvL5wQZJYzlJx5gF440jeeZhRB927PJRAGQkgpfwXihrPP%2B3PQNms%2F9t9KFwyzWj1Ji%2F4tUs2O3pqqXgVKGO4lIKyiE6%2B9BI6cMtefjBDYvWWW8v7%2F8FMwhZCGnkN%2BL8PPObm6dcOpC3NvLuOn8e2%2B6Gkd4q5sLLeZX0q%2BpKhaKLzDhsOu%2FBjqkATgFeQgcqz9KuwhGF3AEU6LqtuqOHEB8S2D2rAtBBWLdXfEnoJW8k4yFWh1Ex1th7cwwWWJKRuNtYUruMgGbF%2FvuTg%2FYqaEfpSvfEYkEo8eMnDs4PgqKJC6hrZSwxT4npyYVvm2x9UKk46m%2B1LX4AjgpUbbO014zKs8LTSbzpJsDWR3qpqFX2QIGMwBJhNoMfe8jI9LjAxQnbVh4IhOv%2F%2BA8pO40&X-Amz-Signature=748c4332ae9dacb45dbb11495daa9bd8942431d50cca6f3425a7f1ffc5f58714&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4NDUGN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCW%2Fe2FcBVAVA5WJ0kgyrVyoOlK%2FP%2FEN7eZHTWW9RL%2F8gIhAMxiVF8VqgH7ASDy144XW%2FkjJ%2Ft%2FcAZiuKLej%2BXClVRZKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybKbQfP%2FCvOg%2BXKykq3AM5rBeG7GNjStO37DSmEZomAfveMs2Qs7bGoRePzH2xWfjf9Au%2Fbw%2Bqn6u%2FZ8X%2BM9KtYJDwEXCDNWNQE9gzK7lgrWfDS6OeKP%2B9qGUM2z2N8V2MDChf4z18SVpQ55e0U2cstgIRSkvxsCCSRNi%2BRVAv1aKtMNTfj0AvdEdESQGriJQSCa9QQcD6gBP86C2GlbYiWKf9oP%2BRia2gBrP3zxpt1EJHmuxmuh4UEh8l2GO88k2tK00PEn2nHqe9Ew6CPtnBCAhOb%2BWvPOWFmV7mQvhz31Wpw6a8pFO2Zt3tDlhSEXbkdqCt7gcgSvKyOvolAvkgy49U9AkscEpSfsZMzZrKFRTv8pEkwD8O2ed5UsspDhdqyGeVoT7A7gztN1JQoJGMdT4ihQGJpHxy5SQbd7UAvXFSFSwBkkMm8WfyGvHpcwkW7q474oYA0sjLLCYJT6HY3W1gKvVaVmCwyMvL5wQZJYzlJx5gF440jeeZhRB927PJRAGQkgpfwXihrPP%2B3PQNms%2F9t9KFwyzWj1Ji%2F4tUs2O3pqqXgVKGO4lIKyiE6%2B9BI6cMtefjBDYvWWW8v7%2F8FMwhZCGnkN%2BL8PPObm6dcOpC3NvLuOn8e2%2B6Gkd4q5sLLeZX0q%2BpKhaKLzDhsOu%2FBjqkATgFeQgcqz9KuwhGF3AEU6LqtuqOHEB8S2D2rAtBBWLdXfEnoJW8k4yFWh1Ex1th7cwwWWJKRuNtYUruMgGbF%2FvuTg%2FYqaEfpSvfEYkEo8eMnDs4PgqKJC6hrZSwxT4npyYVvm2x9UKk46m%2B1LX4AjgpUbbO014zKs8LTSbzpJsDWR3qpqFX2QIGMwBJhNoMfe8jI9LjAxQnbVh4IhOv%2F%2BA8pO40&X-Amz-Signature=fc9af7bfb2dbf53c5af56f426829962923ba1924d58e04da36cc43df11cbf91a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSS7K5N6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD8cQh1PEuun0azC2kLcopwVX7t1c1WEth7yl7PlLmX3gIhAPEDBPp3ZQz%2BpmdI4S8zsSIa46RR%2BtWbhFjEWxj1Z0bzKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMg8vSbNfEiVFKZ0gq3APcLHU7KjeIV8MxSv7Smx2JfUmK7n5ICYt%2BZs8FpyREH9W9O4o%2BNeNQ%2BjZv8iLv5K8%2B7qny63Fd3yVfswJ8VC3c98taj5ZCTQVEvBaDmyB53SU%2Fjb19Mnj1scUrIsSTqmt4amij59j9D9y6ceuol%2Bi7%2FcC0TvCmMYtsdO9UmXuTKYcMa4bHh20GxythJuZvhNnSsftj4O%2BPYNvWEcVJGSNE6MkIXXetdTprdKnpSG6NTTs3cg3EO%2BRmyOWKEILwQ4QE89Sz8Bvu2%2B0gQD7MjTwrDElSammDtOppSa%2Bh54HRlP8rm%2BjbGooXESNAdyrw8ebZlcpkQgMZCmPdQNtS5i1FnQe5WFxOgtEflUL66FQZjhEdAB%2B%2BaayR99d75roAZdBVEwtCyvH299TYL2tXmF%2Bf%2FNWIox6FsYIC7jYW864ibwZiGbL63iHHJZH8mThUILjhukloYxp%2Bj1yoQ%2FOnE%2FolFlXQNeOy5JoEpXWie7I6QKkzAvSa0YHDY0XdAbu9IjvXIpToVbtIdHNfIVy4kOWYPhOAMK6XoLGXF%2BPmgE%2BFIEQ1npd91Tly4%2BLCPEOk%2BlHIaEovXuT73lzufB59fOM344JdJnUlQADHbH4mujekV8MK8vSSd11VQeIb1zCOseu%2FBjqkAbNKjD0RquhwABSh5vgIgrwb9dJIfRXFQ1d8toihWzcWsVD4toWTqcAGmGbK4Q6UHcdlFyiSErjJotiOMcoco6inqEk1X4s0La3U8BRWqS7Uf7DpmYzXRnowB05xXlK8B%2BOepBjlAy5w81qAEbIx2hyHhV8HwcqoKVFLiAnJRM6paSyl2%2B6G4YmgiYnFqXM%2FS3%2B%2Bcq0%2FEHhO0Kbf2YTyxZVpxGms&X-Amz-Signature=b07d9511930830b705d274d1158450230a4e0db16641ab8ddc0c68d5698cd5d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2KXTTT%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFQdzyArM95vI3hEBsDRvCT73%2Bk42j%2BGoRalXjjoscEBAiA4GPp4T4KY5%2FigoP8TJMHikLpsI5AnFMxhAj%2FB5BHfhiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtWzSF8ick%2Bk0alj2KtwDcjNIhQY3NfrfZUCb1mPUPywBae2ppZlRveD7btJj18S4XLfEygj2CoV6lu6xcReXYuj9COZl%2FhBrCnHakMkzOXZoR5CEQMY91WvENyrrm2v2xZ2%2BVkdJz6hKkWmzv62sbqczm2g9hrKRZPfcN5N6AfYhTJNORBZnz9hmPWqK44QrCY%2BHRwpkTfAS2Uuu1PtEMR2vb0ngn58lV819a8v5K3nKLHeSCdzKf4X3DksicaB4ak0NyYiKB0B%2F1ZQP02JtLbokJSLiyrJny%2BdvqeQxjdFZMKLvPxaAuktdTttlKbZsCuRktd9h2y6NrDuC2BKKn9BeJyPPMrPnqMHfSBWT7G39XiRXjPwMaK4jGmmSKGP308BKzpoBSSkkDnVwB%2FXHIE9jwuToEm8%2B2lcBdE3moDkQ6TjtpJEdtRhDmJkhYGy4Dl1q5jw4aFC8Z2W4ZucqgtLtdE8LrQ3V1Q4etFImQH67765%2FveCyQsf0m7bznW3MKLooPnXZIx%2BCi0BXUMYwYqPN1BnKoCMr0y4H%2FjuTediOc%2BH4HbBiAk%2BMqdTKjRiqbg%2B3ZderpnTDib0vqaKRvl8KoTq1V0%2Bqw9eO8mxwY6vpqh3OguP9YfIQP8jox7SUgrpTMyFrOSNUGIQw4LDrvwY6pgEvzYc3%2BbiBWXxfIVXdbrEPeSd8jLR70JbWfjK%2B0uSdHvYkXsW9pLxNk%2BZna6Sg0uIe%2FDuIZfC7IQjOpY3ZzEGhsXQyBqdV3VSQxmcLpiN3U4Lk8gG3tGl43cmucPDrsZ41ESWG%2FTCLBmGyLRuSRPwO58bvIleBN3KVwI%2BcizMi5RhTch7B98sRhhHX%2BkKfK0Jv9Qe%2FUtr9RR8Sx2GwTMpe2ztIvUi7&X-Amz-Signature=9e8c89196a47efba3ed22ba9bcaefcf3fb611f147bbbc13ef8b7b832c35696aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4NDUGN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCW%2Fe2FcBVAVA5WJ0kgyrVyoOlK%2FP%2FEN7eZHTWW9RL%2F8gIhAMxiVF8VqgH7ASDy144XW%2FkjJ%2Ft%2FcAZiuKLej%2BXClVRZKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybKbQfP%2FCvOg%2BXKykq3AM5rBeG7GNjStO37DSmEZomAfveMs2Qs7bGoRePzH2xWfjf9Au%2Fbw%2Bqn6u%2FZ8X%2BM9KtYJDwEXCDNWNQE9gzK7lgrWfDS6OeKP%2B9qGUM2z2N8V2MDChf4z18SVpQ55e0U2cstgIRSkvxsCCSRNi%2BRVAv1aKtMNTfj0AvdEdESQGriJQSCa9QQcD6gBP86C2GlbYiWKf9oP%2BRia2gBrP3zxpt1EJHmuxmuh4UEh8l2GO88k2tK00PEn2nHqe9Ew6CPtnBCAhOb%2BWvPOWFmV7mQvhz31Wpw6a8pFO2Zt3tDlhSEXbkdqCt7gcgSvKyOvolAvkgy49U9AkscEpSfsZMzZrKFRTv8pEkwD8O2ed5UsspDhdqyGeVoT7A7gztN1JQoJGMdT4ihQGJpHxy5SQbd7UAvXFSFSwBkkMm8WfyGvHpcwkW7q474oYA0sjLLCYJT6HY3W1gKvVaVmCwyMvL5wQZJYzlJx5gF440jeeZhRB927PJRAGQkgpfwXihrPP%2B3PQNms%2F9t9KFwyzWj1Ji%2F4tUs2O3pqqXgVKGO4lIKyiE6%2B9BI6cMtefjBDYvWWW8v7%2F8FMwhZCGnkN%2BL8PPObm6dcOpC3NvLuOn8e2%2B6Gkd4q5sLLeZX0q%2BpKhaKLzDhsOu%2FBjqkATgFeQgcqz9KuwhGF3AEU6LqtuqOHEB8S2D2rAtBBWLdXfEnoJW8k4yFWh1Ex1th7cwwWWJKRuNtYUruMgGbF%2FvuTg%2FYqaEfpSvfEYkEo8eMnDs4PgqKJC6hrZSwxT4npyYVvm2x9UKk46m%2B1LX4AjgpUbbO014zKs8LTSbzpJsDWR3qpqFX2QIGMwBJhNoMfe8jI9LjAxQnbVh4IhOv%2F%2BA8pO40&X-Amz-Signature=043e13e5340833f82bc0e9019e7594a154ca6cc408b008a40b7b7a2257661612&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
