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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OLP6ER%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHpkp9X%2BZME%2FVAZ3ihOq1JVh7sFaiEmin9KB34eI%2F5Y2AiEA%2Bfu7mYz8nn9SYUK53GO3EuKIv2%2FJBdhVEe4yNRi6FcUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtx9NJ5Sz4H6mVomircA5I9p1luQmvGctdRe8u4fLXZImm2zh%2BXttW2l4pHXF7%2F1eXkRqUDD%2FmwLvmVMOFnTkhqtFDwMRfwAvZpHjQR78ZMCEaVVq%2Bdd4miHCMN2TkJBdvfvHjA%2BmbbUz%2BMmOb7GEdp%2BVqH0gff45AbE5O14G6kXhiW7mHF2e3f6QkYGSXOeGxp3vBrKBHoss5FlNfAvqlgmBDpx3MOOI3IicCRdPs9SNDuQYEmbSjtLw1vV%2FsQ4stFKr8XREDBsmjQBzb9R3xujiiaExfc0lmoUOZU3dpb19rXZAkN%2FGL2Q%2FLCAl%2Bkv0EfBdWqU0nPIrSqXYCyfAcn19V68ap3buTYMWELwutx3ZHmQnPNq460MA7%2ByWaaOZJDkxIF1MhVLfN65vRqNUjiOkRCvsReL66DGBxeELB8R0rZUWbtEKUJCKxOp0%2FyoUrE7inkvJbnn%2Bp7MQs4w%2BltAoyoSHUTT6XBcaYlAkEciWFTOFjYdvjpy67Bmh3kvYhsSpcDy%2FnjOuTA1Jsd3DHtkQKW%2FMtxives%2BMsw%2F0TdudAbs0xlGVfGFY70F43Eck66COfpF9B4aKNyoQqKjCeFnhNG2yBfLM8odk%2FpRYQBfl%2BlNWw%2FRa4I%2B7S5vOUc6WAN1jaRiLzHtaThMLSpsb8GOqUBdaOyMrDVHTwhFLeP0QiR%2BR4QcACzctDI%2BUiir9INguAWB6m8IdxLU%2FSuKm%2FgsGl1Zj6hTh5q5X5nF1wpT2G8bb%2B9Z49gTm3wzXlN%2B%2B0%2BSQYJzU2BcYr%2Bwe2XEh1ec%2FU%2BcJ75VWVZRwFiKiycDgRCMbWqpcMEygj0sI9Jnaa5A8HOxDFKmRaP6CWYmFGAfkmMnW4TIacvFNcg2jhHIKH4ZoDOE5sU&X-Amz-Signature=b7cbfcc0c9804091fab2cc6fb07d70e71d159212a03581d78982c1cfba283f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OLP6ER%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHpkp9X%2BZME%2FVAZ3ihOq1JVh7sFaiEmin9KB34eI%2F5Y2AiEA%2Bfu7mYz8nn9SYUK53GO3EuKIv2%2FJBdhVEe4yNRi6FcUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtx9NJ5Sz4H6mVomircA5I9p1luQmvGctdRe8u4fLXZImm2zh%2BXttW2l4pHXF7%2F1eXkRqUDD%2FmwLvmVMOFnTkhqtFDwMRfwAvZpHjQR78ZMCEaVVq%2Bdd4miHCMN2TkJBdvfvHjA%2BmbbUz%2BMmOb7GEdp%2BVqH0gff45AbE5O14G6kXhiW7mHF2e3f6QkYGSXOeGxp3vBrKBHoss5FlNfAvqlgmBDpx3MOOI3IicCRdPs9SNDuQYEmbSjtLw1vV%2FsQ4stFKr8XREDBsmjQBzb9R3xujiiaExfc0lmoUOZU3dpb19rXZAkN%2FGL2Q%2FLCAl%2Bkv0EfBdWqU0nPIrSqXYCyfAcn19V68ap3buTYMWELwutx3ZHmQnPNq460MA7%2ByWaaOZJDkxIF1MhVLfN65vRqNUjiOkRCvsReL66DGBxeELB8R0rZUWbtEKUJCKxOp0%2FyoUrE7inkvJbnn%2Bp7MQs4w%2BltAoyoSHUTT6XBcaYlAkEciWFTOFjYdvjpy67Bmh3kvYhsSpcDy%2FnjOuTA1Jsd3DHtkQKW%2FMtxives%2BMsw%2F0TdudAbs0xlGVfGFY70F43Eck66COfpF9B4aKNyoQqKjCeFnhNG2yBfLM8odk%2FpRYQBfl%2BlNWw%2FRa4I%2B7S5vOUc6WAN1jaRiLzHtaThMLSpsb8GOqUBdaOyMrDVHTwhFLeP0QiR%2BR4QcACzctDI%2BUiir9INguAWB6m8IdxLU%2FSuKm%2FgsGl1Zj6hTh5q5X5nF1wpT2G8bb%2B9Z49gTm3wzXlN%2B%2B0%2BSQYJzU2BcYr%2Bwe2XEh1ec%2FU%2BcJ75VWVZRwFiKiycDgRCMbWqpcMEygj0sI9Jnaa5A8HOxDFKmRaP6CWYmFGAfkmMnW4TIacvFNcg2jhHIKH4ZoDOE5sU&X-Amz-Signature=b9694105ec5236f529ecb16478156d3457a35e8cc7a67be3c7434dc28e7badc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJOIHKE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIC1eWop7mj7dFWoadJKrfUd2sXVPizGIroeKTBv36yvpAiACsqLTbMWp8KQnNwL2KfFD36OG9qj9P2GuMuH679dEjSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfJ0Y5dzZOiSttPTKtwDqntw7dKgmfZG%2BCCS4gqRr9xFMY6hpeBjTDVOb27ncUkAMYcr8E8rCOR4RzrmMeI0Xg9yTgbSX4yHS91feFAubG%2BeF%2BCdIGmmYI%2F3wYUt%2FLpckQHRvRMf4DbwFe2BY6dEdJuWFak64i0aRoVP6F07nlls%2FiTZC2FRDLGYt92EfS%2FSSVgwPxTaCeY24wAqclsRrwqerz5hi4BSpKSaIt0sAk8sTTZ7qP28JdWWwrSK7tpaClTUaV5REe8j00MfPGHF%2FMoN1qjhNrj%2B7aeWJNw1SyTKSyWlo3Glk%2BRmlWHN07cOfEzb4OVX3pw00lhn5wYI49xV4a3OR%2BQFyCmoE9XO7w0mRgH9dHx5DY6Uy8mWrjDfK3NXlC3xZkSTWKACaUmOq%2FzTqWLVJpeYsfevgpWHfkvsuJwEywAPejze0uZfXWYP%2BwGX9OHWCXk%2F4l%2FGNnvK4%2FH4Dl4LvwkDD4jqpCum3EFJNdEiOwHerfUys8iViVbqX3hx%2B3f3pN2USiBV7Altl7TOuw4M7AdFlDKmBi1MYRJ0%2F5b%2F1RqqrYHl6yuIN5xpcU4adpcX5X5NgcbAxMGmJl%2FEdzM7Tmot75hXHv0XZtoIIzr8iOgdFJgbRewhF0LBF3rZ6XyeOkqfXvEwpKmxvwY6pgFXiRUoC9r3plRsAHWxRj5f17d5V0pt5yvh33eAF7XwgnwGLwL1ShGIx9xu7wsl6P5Ue1LD8s4aeLzynNrB4MNKGypm6SjnopbXxvUz6ujErTXrAADbU5eqD6E5fRosh8L5GKKR6G2sEGt1i7145ySDGk35E6%2F%2FVjo6Qlz5bNOrq2f%2FbK4HXpzorCKfWsOjblZYISfxYA%2FWqcB3cZj7%2FFwxuPEYF%2Bwr&X-Amz-Signature=5767c2efa0e416de23c85965438372a9977f213f0f97bde03a42835a322b1ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIFAGKXR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDgrzGJGkycit%2Bsw1GPc1EqfPhkcVbjirzb5nra5GIvpgIhAN2I3Ddkguq67s%2FG3hJMxiBlaknWuIPbx97u66Cikj6TKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKedqcIM5aRpwOo20q3APpeCBaIR%2BakApJr%2BYNF9YqT%2BxISDAJ2%2FKQtilIdcpnp9Y4bnEFd3VrIZBShc7lzvOTWntmjlBfm90APHmFglp49wuMRh2Jws6%2Bu%2F62d6onrzPd6wwxvTM9cwxvwbPL5Yzj0C8UFe9kk5lI2H%2Bu9i1G1y1OpCDn10cxeLcQcWRiVmixPXpbcM2rrCZCVQJm%2FMtp%2BtFDj21RAdrSsBKHVVhIMxvX5jivMUIpZduTFzCh2ZCQmTJMmhGWc%2FAQ4074ryOPP95rCQkOxt9SkcQNy%2BOAzFb%2BRJWYZFvTwlIrZE6XJ1O4ZZl9CxlDuNUhuopbxG5tWd9EGK3wIPcgQUjbn0bYJyU8jvTy4Shov2d5IDGyTUYhrCZK3PWspWqkUBugIjgZGAgeSdow9irwrUC4ST43fEQf2XSA6zrpLWol91N5VUx70%2FB6F1QoidZ9YCtSWdfC5bVrWXWX0BeziEg%2FN2UHMadHhnelb5n0Ap46FatsFMa6MdBsYLGq8FbuwcLPenxGIfriNmtQpAT%2BqodHWgJIjunKTTUMebopOQbFzZwAX%2Ff78%2Bp19X0jAO9xgQSvwV1NfGbL5dhPyTXTqrWHBCjyDEg1wxzHFnesu%2Fe7g57xxHrURnzzu8bAyxIP7zC0qbG%2FBjqkAcgOjPXd%2Fgw4qN5LCYYPHqa90INWu6rOoTHqz4R%2FRIBvBQ6Y6ygjswTWxO85XdvGJ%2B2K0lfeOqIpOySw9eO5w80%2BbCkJIxLZnlrbviSrVnzYZtzM%2B%2BhuQ0ZUf8AxzZ2%2BIbrsBmd0LG0zgaS80lqt3opqqNmtuMkml1KCgI6U%2FgIC9vab3j99XG8exwZR3uLDigmmTfmKb2EPjEfX2RyK4x9Bn06f&X-Amz-Signature=ef1e9563a7c6014cea9fa1fc4b3d218455c9fb5063e54fbae3f4805b0456d252&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OLP6ER%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHpkp9X%2BZME%2FVAZ3ihOq1JVh7sFaiEmin9KB34eI%2F5Y2AiEA%2Bfu7mYz8nn9SYUK53GO3EuKIv2%2FJBdhVEe4yNRi6FcUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtx9NJ5Sz4H6mVomircA5I9p1luQmvGctdRe8u4fLXZImm2zh%2BXttW2l4pHXF7%2F1eXkRqUDD%2FmwLvmVMOFnTkhqtFDwMRfwAvZpHjQR78ZMCEaVVq%2Bdd4miHCMN2TkJBdvfvHjA%2BmbbUz%2BMmOb7GEdp%2BVqH0gff45AbE5O14G6kXhiW7mHF2e3f6QkYGSXOeGxp3vBrKBHoss5FlNfAvqlgmBDpx3MOOI3IicCRdPs9SNDuQYEmbSjtLw1vV%2FsQ4stFKr8XREDBsmjQBzb9R3xujiiaExfc0lmoUOZU3dpb19rXZAkN%2FGL2Q%2FLCAl%2Bkv0EfBdWqU0nPIrSqXYCyfAcn19V68ap3buTYMWELwutx3ZHmQnPNq460MA7%2ByWaaOZJDkxIF1MhVLfN65vRqNUjiOkRCvsReL66DGBxeELB8R0rZUWbtEKUJCKxOp0%2FyoUrE7inkvJbnn%2Bp7MQs4w%2BltAoyoSHUTT6XBcaYlAkEciWFTOFjYdvjpy67Bmh3kvYhsSpcDy%2FnjOuTA1Jsd3DHtkQKW%2FMtxives%2BMsw%2F0TdudAbs0xlGVfGFY70F43Eck66COfpF9B4aKNyoQqKjCeFnhNG2yBfLM8odk%2FpRYQBfl%2BlNWw%2FRa4I%2B7S5vOUc6WAN1jaRiLzHtaThMLSpsb8GOqUBdaOyMrDVHTwhFLeP0QiR%2BR4QcACzctDI%2BUiir9INguAWB6m8IdxLU%2FSuKm%2FgsGl1Zj6hTh5q5X5nF1wpT2G8bb%2B9Z49gTm3wzXlN%2B%2B0%2BSQYJzU2BcYr%2Bwe2XEh1ec%2FU%2BcJ75VWVZRwFiKiycDgRCMbWqpcMEygj0sI9Jnaa5A8HOxDFKmRaP6CWYmFGAfkmMnW4TIacvFNcg2jhHIKH4ZoDOE5sU&X-Amz-Signature=362683e76d4f1f5375e2ef14d7f95f45d7b0021c33a6248343c047fa7742851b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
