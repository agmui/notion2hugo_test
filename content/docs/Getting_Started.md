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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJRF2B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDlWP0HwdSqFgR5pggoazfW70lb8qBrHVKOJURbZc4OmAIhAPpXCqPePnkubhFk6hNlF15foABWrVRtdG02ccojlKCOKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9101JHI1%2FMk2JxjQq3AOmBu97KMpB5qD5%2FEym6NILmsLjM39CDoZc38D52tUspecFzE6fgin2mXagHOpKNFfl%2BiyJ3RSW6%2BsBbPbtF11gva0KQJ5cBshwO5WCSmw%2FPSfnc2YnJeqVim%2Fg3LDqhfLX2hUu31VWOENpFk7jQlB%2BwyN1%2BJpj7O%2BNeFBAmekKppJ84SPhm5Q0c%2Bixur6BEbwL%2FCjOqg9sNkgvsn5SM2ZIHGJ6v91RHOVRwnG3CiHa5iIzHkwjfzrXBDEeFNZ9rfQuE7SgzPfqgnpEVPt2N4Bub09BPDUjLDXzcI6c1IQBMNjeYGhkMm2NLZjzu%2Frr9k1fCGf6EZ1w8DkgA6%2BSj%2BbI2G6f6SnYnkoK76PLAAG5uSQWy1PnHwrsuyx1dgCfUDPHMYbyy7chLZco5bp3JUHtHAfVrBP7srVEkyjm8v2jHz7MTzBOQZWdej9Qat29FHWoy5mxa9hX%2BTxQ%2BPS05o9gvPFLP3mDGLOyP0nyagKhV5DlqvnpxypSdHpNa1AMviy517MGkUw6Srxlm57C7k1XQ7Kx6A1HgywiVFUVKqQf3h%2FNuOITEKDQ1QGD%2FHM1d4C%2BYUXo2%2FrOE0OOUIXtQrvqGJte%2BQWeFoP70LTpt7yh9DxOWFw1mrBOawAUjTCNhtW9BjqkAaX%2FfdkjdWXCUvbpsX5kJl30GHpYIySjgK4WQHBFg1iP6njG5ZKbn1xLTjeAfFvu0VbRhDSRxlrUkW1ppBR52f5r2f09BV3rHxqXWNTCyR8pvL2aoBHkd%2B7%2Bb5nAwXLSPTTGZscO%2Ff7Er%2BGGpLQ9OdCaeOwd53v1ZmJDpWsi%2BBV2ZD4ZTxnE9owlNJKgtDIrL0Ub3F8Vnw6vB14s0MjpSFVV5w2%2F&X-Amz-Signature=468480915ea86873d9c776d562d9b3ef974922cf50765d38383cede8c521d9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJRF2B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDlWP0HwdSqFgR5pggoazfW70lb8qBrHVKOJURbZc4OmAIhAPpXCqPePnkubhFk6hNlF15foABWrVRtdG02ccojlKCOKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9101JHI1%2FMk2JxjQq3AOmBu97KMpB5qD5%2FEym6NILmsLjM39CDoZc38D52tUspecFzE6fgin2mXagHOpKNFfl%2BiyJ3RSW6%2BsBbPbtF11gva0KQJ5cBshwO5WCSmw%2FPSfnc2YnJeqVim%2Fg3LDqhfLX2hUu31VWOENpFk7jQlB%2BwyN1%2BJpj7O%2BNeFBAmekKppJ84SPhm5Q0c%2Bixur6BEbwL%2FCjOqg9sNkgvsn5SM2ZIHGJ6v91RHOVRwnG3CiHa5iIzHkwjfzrXBDEeFNZ9rfQuE7SgzPfqgnpEVPt2N4Bub09BPDUjLDXzcI6c1IQBMNjeYGhkMm2NLZjzu%2Frr9k1fCGf6EZ1w8DkgA6%2BSj%2BbI2G6f6SnYnkoK76PLAAG5uSQWy1PnHwrsuyx1dgCfUDPHMYbyy7chLZco5bp3JUHtHAfVrBP7srVEkyjm8v2jHz7MTzBOQZWdej9Qat29FHWoy5mxa9hX%2BTxQ%2BPS05o9gvPFLP3mDGLOyP0nyagKhV5DlqvnpxypSdHpNa1AMviy517MGkUw6Srxlm57C7k1XQ7Kx6A1HgywiVFUVKqQf3h%2FNuOITEKDQ1QGD%2FHM1d4C%2BYUXo2%2FrOE0OOUIXtQrvqGJte%2BQWeFoP70LTpt7yh9DxOWFw1mrBOawAUjTCNhtW9BjqkAaX%2FfdkjdWXCUvbpsX5kJl30GHpYIySjgK4WQHBFg1iP6njG5ZKbn1xLTjeAfFvu0VbRhDSRxlrUkW1ppBR52f5r2f09BV3rHxqXWNTCyR8pvL2aoBHkd%2B7%2Bb5nAwXLSPTTGZscO%2Ff7Er%2BGGpLQ9OdCaeOwd53v1ZmJDpWsi%2BBV2ZD4ZTxnE9owlNJKgtDIrL0Ub3F8Vnw6vB14s0MjpSFVV5w2%2F&X-Amz-Signature=f56cb7a1a243583bbeabcac453f7abb7263679646ededdc39975abc9f17972f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7OG7BY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGuY4g6kfMUjz4ImOEUgeR7Ybyu8Y9QsieVwW%2BTOeqlkAiEAja8E%2FfUyKRhwkPKJWF1SzoM3pmVFUGrN1zr7EKj%2F9OAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdxmQZpUMwWiRlZvSrcA6CfHOXQc7I8nlVtzPIjhvr4wkguC69WdNU%2BAkVz%2Bg%2B9cgeFgVN7LzZzcd3u1JNBFzUfgXKD%2FXTYvM6fKXq4S8I%2F6pVQLmkF4Q1nn5q3k73i2UfirQQgAwgFRstclElDmujC%2F7LjjePA3nEZ1D3GUopRU3fPoXmadj5x3%2Blm3CY3EJE5A4edMC%2FzqpuL73pP4fmdahtsbv5srK6pOGC6SYhBs201Y0%2F4yAxSRF3iB15PijEoT4pr%2BdqiONDTO8Pi5XxZ3k7s%2Fxlws2YGsZcLmATH0voIJBVaBBx%2FJ7wrSmoO9XRMuZNrpVoGcreoP%2FjLw16o5u59XgYFwesK3latXxcTSpsv2u5TKix3y6DvmXB8KYtgt3gTJt0lBKtFOm1vA8pJqRNQ%2Fmu24NgvSqmHEmWFR%2B4EIzHZLmB%2FWIOpfsVfT6goiYK39%2BAS3Hbfckrh%2Fkyl7mh5ZLj3iw38%2FyDvCfxms5XvMWnRWeef8dXQfFG%2B%2BMso%2BORUtov2A1Ib9Ekdfl1j7eRbsr%2FhmJOIDujmjbfUgp7vfgrUjBtXusbld%2FUVdtVe%2FwOLve4Zd2nj51ZNjN4TlZHsOx4kpClY6Tx9XR9NWxx9d3vopg2lfMExjcTh6fIyguume4QYLcTzMImG1b0GOqUBv1E9cTwQjiP81Av23BwFcHGrL1wJ2tig%2BAvUXgimdHL7AOI%2BkwTr2h2OPC2%2Bz%2FkS6cmttsdLz57Y7i4MqZ5GlVOEnv3jMiqLCsRjaJUi0rn7UKqUTQPPkByjizXM1r7mRe7oHXkBLUqpQt3g3FzkU4jbcuu%2Fhxkks9zvXLth3J5jYhB%2BuFHTkp4Bz9WuE0B3Kx2gmxeysmcqQDdvkmiXThZ75jG%2B&X-Amz-Signature=aab5373b04157062f33ca3473280f08f3a5a257ecf90ac4e7b0309f1b13865ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XA4ZA3Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDP33FS%2BE%2B64R0lymR2r69FbfnBWQoZl88lF5FqGQyDMQIgeP6UdJOCoUdw8UPg%2Fy4iPA6tc%2Bk4PIlCcVi3RXxZZm8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzd1m7%2FEMGF7Jl5oSrcA5V5DH6Cr2ul%2FZXy3OsxCy6mFO8%2Fa4%2F4VN5owt3n7rlY0nPpaNwXd0a0Y4hYaaqT6ChoJDMdIkMIPfsw2CVJ%2BJCc8GdGDKnFZoG7xUC0JUB98AmxgzCBLohut7yy2xQZj4MpftcD1zIOYbd8zyoEKR21QfHok40Vd6IJB2QUwkEz1c5aTyvK988BGOGcr9nPtak9VYji3ozJObLY91eOV2NMu8itLoTUcWgBqkZgPuOaYd1WMEEwuTE76pL2LL2UscoEj0E0jX5YUDxK24ydWmeW4WeKASg0CkKTYEPkbMKHQxHN%2BzhztdbwD3YcaiyFDTR7H8JARFINdzopPjtZKgPiVs0HekJKMCtN1slqIzxWggv9LjtN%2BRpTUL5%2BnaoCeSgDMdw1FVv7rpS2HXAFnEqnvVV%2F9GgG5aEvTMCYeG8JqY8VdVxtoVp7sgBc08JP2UbsI1e1%2FR%2Bks30I6V8lKHIb3IYiSnHwBoV4HTar9e%2Fkgr7vA4%2BaxKUXepF6O4tZhs7vC9CVokSF5pxVQgzPyJb32C7hDImZQG3btlHqmnyQaacPyfOp12SRELITdYQl0Ez%2BHUgHTAD7hmqP04FDKpOlbAcwlGgGVMBvPG3WSiqT6LB1Pos0pTv%2FaDlDMJGG1b0GOqUBzOcfZZX3lWv%2Fm7tVrNOBgcvbM87inRUkNnq4RM1ONCruddU4LkXKiwP3wnV0KchQS5AzcjdPrrFO0dWVaQxhchAhxwmU9i0sQoX5HIXEqdmDtIb6uLZHEBjhF31SwKxT0Gln%2FvuqLEZHTL4TN7olqigafppQMYlE2jUGiq77E7mPu3rPyjzvUKO82mbLoIxQDjVQ%2BtPAEboGQpHfxz%2B7JccvY094&X-Amz-Signature=527827d95465cdc4d8de8a33f92d755626bcbb70e9280ff9cc2e3b1e69d49366&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJRF2B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDlWP0HwdSqFgR5pggoazfW70lb8qBrHVKOJURbZc4OmAIhAPpXCqPePnkubhFk6hNlF15foABWrVRtdG02ccojlKCOKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9101JHI1%2FMk2JxjQq3AOmBu97KMpB5qD5%2FEym6NILmsLjM39CDoZc38D52tUspecFzE6fgin2mXagHOpKNFfl%2BiyJ3RSW6%2BsBbPbtF11gva0KQJ5cBshwO5WCSmw%2FPSfnc2YnJeqVim%2Fg3LDqhfLX2hUu31VWOENpFk7jQlB%2BwyN1%2BJpj7O%2BNeFBAmekKppJ84SPhm5Q0c%2Bixur6BEbwL%2FCjOqg9sNkgvsn5SM2ZIHGJ6v91RHOVRwnG3CiHa5iIzHkwjfzrXBDEeFNZ9rfQuE7SgzPfqgnpEVPt2N4Bub09BPDUjLDXzcI6c1IQBMNjeYGhkMm2NLZjzu%2Frr9k1fCGf6EZ1w8DkgA6%2BSj%2BbI2G6f6SnYnkoK76PLAAG5uSQWy1PnHwrsuyx1dgCfUDPHMYbyy7chLZco5bp3JUHtHAfVrBP7srVEkyjm8v2jHz7MTzBOQZWdej9Qat29FHWoy5mxa9hX%2BTxQ%2BPS05o9gvPFLP3mDGLOyP0nyagKhV5DlqvnpxypSdHpNa1AMviy517MGkUw6Srxlm57C7k1XQ7Kx6A1HgywiVFUVKqQf3h%2FNuOITEKDQ1QGD%2FHM1d4C%2BYUXo2%2FrOE0OOUIXtQrvqGJte%2BQWeFoP70LTpt7yh9DxOWFw1mrBOawAUjTCNhtW9BjqkAaX%2FfdkjdWXCUvbpsX5kJl30GHpYIySjgK4WQHBFg1iP6njG5ZKbn1xLTjeAfFvu0VbRhDSRxlrUkW1ppBR52f5r2f09BV3rHxqXWNTCyR8pvL2aoBHkd%2B7%2Bb5nAwXLSPTTGZscO%2Ff7Er%2BGGpLQ9OdCaeOwd53v1ZmJDpWsi%2BBV2ZD4ZTxnE9owlNJKgtDIrL0Ub3F8Vnw6vB14s0MjpSFVV5w2%2F&X-Amz-Signature=6c9f98423e34f19a942d5f6bdcde93098775d187acea7fce44c9367838e87e38&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
