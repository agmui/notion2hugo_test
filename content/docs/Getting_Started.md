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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFPACUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuung7VjEmmQc1HboBjImd4Y%2FigEH7NhI0uPlAl0vwBAiEAlggTd2eaUh4uuQ4giwm0AIUK%2ByaDpV%2FWVNhygzOjkCwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36YAmMxFJG0EjqByrcA2%2FSncznW3Ow45fK99eC1D4RwWN7roPDbKeg4rt%2BkWKmlOnwBbbRiFUDYtJ4Bjujb4vCSRM5Z%2B29nizU9DvK%2FRnbBxPDGw2AISRVjtA9gXgFwjOuSYDdNrd3nxpartyX23gLD%2FRs0%2BBd32Tw%2F827My7aZCqjsEK3SPbsT%2FQtRUSYTS4LTLMB5Kh5ThdvSX6z9tMQ6k1rz0DN1XN1mzM%2BoKYiJeFM%2FpDK9Ez2mUJksVqA5aMO%2BTLNbpIcdZ7g8I5HjUtYLACg22qe5qa%2BpVL6F4ljmjERknm5b24ICeNDm02E9PxwdO4IkopF%2F5betsdxbel2s5UNQeG0zfvL4K8B2HEv%2FnOWQ36lG2h%2FlOKaa8HjKluR5M5pcT7GWGdUedkcVXOR76kqgNybubIM9bqR8rson%2F2FtJlNlfYOjD1jYn6T%2BOLGk1k6xWvj4jfPofIqymWKRZ4KeuAHDUmViRXZtvn8SxIK4xRsIlMNFjvkHyP70qtf%2FQVan0ShAm2jvDykNnd7C%2FqcV%2BVuaG0iTITe5ubo9Rsc5ApJ7VW%2FZPxkJgjjh3b7rgCY3%2FlmMVonN0RHxsT5k2qdn7O2y7I2JBcbdjx%2FeMbD8%2Fbwj%2FjRFmsiOo%2FyzzYKp8w118Nj1sATMKSVsb0GOqUB1Tz3gCkmjiAfadEBg8BU4%2FquB95VRp7Knty%2BODdLsfrDjJEQAjF2CJqEiuLXRObbFlxnTvdMZfOtJwYBVXNXL3xZGxe7ccY6bQCr8TQASyN8K6Z5DaCskFST0V5bELBZQS2JlLaJARwSPqERUrNslbioyo72dUFkQ4FBJ4cGdGGL5pfw3dq0bzIkILIS4b7a0UcsjZxMc5ruBzCWsw5dJp47rlDp&X-Amz-Signature=94cbc7ec96630cc389552c2353d5a1e85ed9fa4b2dd52998c8eb8647461774ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFPACUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuung7VjEmmQc1HboBjImd4Y%2FigEH7NhI0uPlAl0vwBAiEAlggTd2eaUh4uuQ4giwm0AIUK%2ByaDpV%2FWVNhygzOjkCwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36YAmMxFJG0EjqByrcA2%2FSncznW3Ow45fK99eC1D4RwWN7roPDbKeg4rt%2BkWKmlOnwBbbRiFUDYtJ4Bjujb4vCSRM5Z%2B29nizU9DvK%2FRnbBxPDGw2AISRVjtA9gXgFwjOuSYDdNrd3nxpartyX23gLD%2FRs0%2BBd32Tw%2F827My7aZCqjsEK3SPbsT%2FQtRUSYTS4LTLMB5Kh5ThdvSX6z9tMQ6k1rz0DN1XN1mzM%2BoKYiJeFM%2FpDK9Ez2mUJksVqA5aMO%2BTLNbpIcdZ7g8I5HjUtYLACg22qe5qa%2BpVL6F4ljmjERknm5b24ICeNDm02E9PxwdO4IkopF%2F5betsdxbel2s5UNQeG0zfvL4K8B2HEv%2FnOWQ36lG2h%2FlOKaa8HjKluR5M5pcT7GWGdUedkcVXOR76kqgNybubIM9bqR8rson%2F2FtJlNlfYOjD1jYn6T%2BOLGk1k6xWvj4jfPofIqymWKRZ4KeuAHDUmViRXZtvn8SxIK4xRsIlMNFjvkHyP70qtf%2FQVan0ShAm2jvDykNnd7C%2FqcV%2BVuaG0iTITe5ubo9Rsc5ApJ7VW%2FZPxkJgjjh3b7rgCY3%2FlmMVonN0RHxsT5k2qdn7O2y7I2JBcbdjx%2FeMbD8%2Fbwj%2FjRFmsiOo%2FyzzYKp8w118Nj1sATMKSVsb0GOqUB1Tz3gCkmjiAfadEBg8BU4%2FquB95VRp7Knty%2BODdLsfrDjJEQAjF2CJqEiuLXRObbFlxnTvdMZfOtJwYBVXNXL3xZGxe7ccY6bQCr8TQASyN8K6Z5DaCskFST0V5bELBZQS2JlLaJARwSPqERUrNslbioyo72dUFkQ4FBJ4cGdGGL5pfw3dq0bzIkILIS4b7a0UcsjZxMc5ruBzCWsw5dJp47rlDp&X-Amz-Signature=8ec875aacd0ca71e7e92095414d786e795c4cf3a6e272da9c6bde061b662b596&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTGYOVR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXJvMyvvEVNkvf7%2B0aSEyPuOcnF5Oob%2F5GW4KnPXIT0AiEAzoqmnkYlfxnayUakAgTrq5JpoBfv%2B4N3lIiag3SHnuMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD2nGMaglOg%2FIBXWCrcA7T3oB%2F%2Fqph2XHTbAvka%2BiKu5kXtp5PGuCc7yo5bJiBFw5wbxr2%2F8ODWQPXAFg7%2F8Srg8%2FVEum%2FYIjOqPmkoKVUdG1pOxm1Vjtc%2F5hb5PrvPP6%2FjQZILaMg3KYsMwEimy%2FJQU7P9AIGMwFAeK7dqtvbxyIXXPVbzrB8tpPT9QBd%2B02mukhFt0yJWgDI%2FvIM0vfApDUKaoBR%2FVwglVVh%2BB8iONSGel8e0PPszVtwqHfpZb2dx%2FDxCUDaNFovkh22VEGuAd59thlmy%2BVSlGQ%2BZ2Ip%2FA%2BtsTsVDZMqLnMqOz0ei99ea9%2Bns%2BO%2BszDpJpU%2FB3jvQXhyETorb%2BL8wTW5v29If%2BPkM%2BG5M%2B6%2FKoB8PiPVJR78ZUoF%2BgizUrxHNxI4KEtO5j8hbZBohyPppNMteZ%2B1ztKqQYitJTeWw50dxXoK%2FRrAGkS9HdpqZuXXKSw6hOCLiZ%2FTL8gBfbCevlr9GCNkEwzQWyzokgVthPdXhN5fMKjxHClvebrKj36%2FQktEjUSEH9vKpttwJuJ6m88xH%2BCD4U9%2FBGUrqwsEvy3nAHxj%2Btv60fT6XSRwefvpQBN%2BfCNBuJQ4Ni%2BP7udFxg4KRKahxGjdF9%2BUO6JgwN0REx1GD1ST%2BZjAIaAJGG9NaMJ6Rsb0GOqUBfEQq7M8x%2F%2F8giNeRimNxtS0cJJZ6nqSDzqLbtitNHMRUd9aRUV5F77HqHXj5NUlTWLbQQ3K4fwT1O0f70%2FpJ4uY4JxyMDQEDxJ%2BY1uqyBU%2Bit0bS1vaOUZ5KIjSj4pk1hUqP9eyTnvyPGrVjz7jMdSHMJCTsq8UOyNQVFMJSqYh1uSQeJSylpKz167MqabxTuUzaVnkJp%2Br%2FzdNXMoxsFUUD68yV&X-Amz-Signature=6414443dae52072b2bddbd896403b86064bfb03364201c5a1acf3e453a07390e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JZUVGLJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTHLwDgvuFfnX5vAD4xrZtTEOndHGM0FhuNeecTRqfZQIgNjmUzPBd2ILvynHuEhG93KHgUFg1vcgLk5Xd4rS2fDEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1mP6buT4J8MLL7nircAzziup9PmFriEtBYqMjTStoBkHfk8tQwe%2B19sV8%2BzsE6NGgYptbMcyiPN0fVYNrBn32vInHoL%2FG8Ls5VtUf6%2Be4HjohIFA0r8dsjVGAIV0g3WpN5PUnjnQWs2yrEM307CeR5cE2d8177FWFGTCX06NQwtsn7yHk6PvfQhV8fWVVmLHqw0b9qQE%2BM2jRJ4NrVOuf47XSRA3K%2F5CLbrApSaU8FmDE0Ho510Cfrq4bjGZ%2B05fnmo1GJZKIlZtPfq1JV7YcJ2ZN3SMlI1djKdDbq29aIDcN1aqZKJDlqsmdmkmVlNBo0OqIgPXRNddktB9yKCsWRU11O%2Fi0LJCEMOMtQ56Ci5%2FBrneH62VXKij7UxZ%2B%2FjEVctjRU2DhKeVTo6EYE%2BjbZoJQB%2B1Fda7izeIiCBWslPdbf9rupAjW0FraNTsN%2B7Driu56kTVMRVxCe6kesyrdid5GaGYFh6j6vDhA6n5%2FT0MxcxgwDRlER9RYdKXqW14xrAC1yVUfZUJVHfFIF1mScq6CL%2FGead6mdv6HuD9IZJrb2wbOohN4EsNzPLhR3DM2MOETxqqfDvGA%2BHLaAeaNccZKNBhl9RIJ3P9CFrnPGTRVrpOJNJwbGrxglfDphD2Sj1UCyA5jp377wMKaSsb0GOqUBsA2Ydz519mB%2FzTQGzyxCvmEJ0%2FRjeVLpTIgsAL6l7mOJ9lNP%2BGBNk9wX3uqcQ%2BKeQTdqtFsVR%2BwJ4q7r5w65GARTtwL77RO6Yjydh6jFDW57KmRw%2FNfq7b7UjY6WrTN7kGNrx7%2F5I%2BpfWZUmtqy1x6T6qrrHli4%2BjiVB2dlaCfeCTc31Z8NBqYco33ngG1NRFdV2I%2BB2ucOmZ3vfifYkBADyAscm&X-Amz-Signature=bcb4f395be63e6bf19099005b56ea30b356067b245b685ce54cd4b26739acd3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFPACUK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuung7VjEmmQc1HboBjImd4Y%2FigEH7NhI0uPlAl0vwBAiEAlggTd2eaUh4uuQ4giwm0AIUK%2ByaDpV%2FWVNhygzOjkCwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36YAmMxFJG0EjqByrcA2%2FSncznW3Ow45fK99eC1D4RwWN7roPDbKeg4rt%2BkWKmlOnwBbbRiFUDYtJ4Bjujb4vCSRM5Z%2B29nizU9DvK%2FRnbBxPDGw2AISRVjtA9gXgFwjOuSYDdNrd3nxpartyX23gLD%2FRs0%2BBd32Tw%2F827My7aZCqjsEK3SPbsT%2FQtRUSYTS4LTLMB5Kh5ThdvSX6z9tMQ6k1rz0DN1XN1mzM%2BoKYiJeFM%2FpDK9Ez2mUJksVqA5aMO%2BTLNbpIcdZ7g8I5HjUtYLACg22qe5qa%2BpVL6F4ljmjERknm5b24ICeNDm02E9PxwdO4IkopF%2F5betsdxbel2s5UNQeG0zfvL4K8B2HEv%2FnOWQ36lG2h%2FlOKaa8HjKluR5M5pcT7GWGdUedkcVXOR76kqgNybubIM9bqR8rson%2F2FtJlNlfYOjD1jYn6T%2BOLGk1k6xWvj4jfPofIqymWKRZ4KeuAHDUmViRXZtvn8SxIK4xRsIlMNFjvkHyP70qtf%2FQVan0ShAm2jvDykNnd7C%2FqcV%2BVuaG0iTITe5ubo9Rsc5ApJ7VW%2FZPxkJgjjh3b7rgCY3%2FlmMVonN0RHxsT5k2qdn7O2y7I2JBcbdjx%2FeMbD8%2Fbwj%2FjRFmsiOo%2FyzzYKp8w118Nj1sATMKSVsb0GOqUB1Tz3gCkmjiAfadEBg8BU4%2FquB95VRp7Knty%2BODdLsfrDjJEQAjF2CJqEiuLXRObbFlxnTvdMZfOtJwYBVXNXL3xZGxe7ccY6bQCr8TQASyN8K6Z5DaCskFST0V5bELBZQS2JlLaJARwSPqERUrNslbioyo72dUFkQ4FBJ4cGdGGL5pfw3dq0bzIkILIS4b7a0UcsjZxMc5ruBzCWsw5dJp47rlDp&X-Amz-Signature=33e8aafc424f367c4367378871e57f33b4149ce82ec4b562290745c41de5ef95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
