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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2OTSGE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDk9CmDEP15pETB8D3XhTVMeH%2Bk8Va4ot0GRzOyUM5gBgIgPY4r%2B%2FdWg0PCSVQhlFaggv7izg5FstpScLmbmNXVynUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc66YxGjDYv8eoG0ircAxoHroekN%2FP%2F1x616li3lbd3lFusenxU%2FmwMgvH49jYBe%2FT30rVA8OevSFPHGiIc1fbOk0LMFZBxb%2FMiJpwo97bH585khaEdvciVT7Ja69OViHj3p%2FK8fapCcpzUXjDumsr9J%2BaA5iPnWr3sRoE%2Fb93Q6JLGgy%2Flqcwz%2BIYv3AaZ85GhC242IXyr6S7X760wSByyRTot4qNRxdy0uN3dVixQaOQRen1%2B21LDbU6Vvqw8YlLpeb6oWGa4UugN9Axz60rMzaOnlHZzZEFz9wb%2BnCKC5jAt7FotFBEWZNgh4rUXpGb2Mg1xwn0%2BoVcJoRnza8JPOyVTj5mzIdVX9UMLggCxIqkzUN15ccWiwFeMoofHNYwyqiKmJM9%2B6HSWCdxCQkDbS8kzWuGflBtLbQbHlIvzP3%2B7iBlwiYYp%2FhlivWZ0sgbn4kkHLwpJ%2FBKZak8zAbsSJfxSOxkgQJZ0f9Q0znhjR2W7KXfjDcyJtZmxdyYjm0mhfYPku5pE2n7oW0uVVooAz80xW49MPKy1sN84nQpBEk3M5zkvJu1T8Y6Wrk8d5a9QWBxuhAiYWAhic9zqJ5TmXLMeQg4zxQKqeRKOo2vtoXz%2BSQgzYcx5OjyZIGN7Mv8VAPWQO9AGnO7LMOr1y8AGOqUBOcYYfKWB4GBd27jeDOq15fpvGVH03vvnckfKka6Of778jN1dD4t1DAAun9dflFz7iFNFIsk0J3CTFOycoJ9O46ZlV7cE%2F3jcBVfImLt4qFK0BSVdJLWK6AkEk%2FqV2D%2BG6Ok07nB3MdORLIZP4HvAc9YLK5TAIjjQJLTqM2r4FK8%2BflL%2FsOC%2Fq26g%2BggLepRc%2FD9PnwFAB82j5%2F%2B3VQJ4RUBRadTv&X-Amz-Signature=fefa102db006f60778678490ccd29339e6139abf58448e055e4443d258ef51e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2OTSGE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDk9CmDEP15pETB8D3XhTVMeH%2Bk8Va4ot0GRzOyUM5gBgIgPY4r%2B%2FdWg0PCSVQhlFaggv7izg5FstpScLmbmNXVynUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc66YxGjDYv8eoG0ircAxoHroekN%2FP%2F1x616li3lbd3lFusenxU%2FmwMgvH49jYBe%2FT30rVA8OevSFPHGiIc1fbOk0LMFZBxb%2FMiJpwo97bH585khaEdvciVT7Ja69OViHj3p%2FK8fapCcpzUXjDumsr9J%2BaA5iPnWr3sRoE%2Fb93Q6JLGgy%2Flqcwz%2BIYv3AaZ85GhC242IXyr6S7X760wSByyRTot4qNRxdy0uN3dVixQaOQRen1%2B21LDbU6Vvqw8YlLpeb6oWGa4UugN9Axz60rMzaOnlHZzZEFz9wb%2BnCKC5jAt7FotFBEWZNgh4rUXpGb2Mg1xwn0%2BoVcJoRnza8JPOyVTj5mzIdVX9UMLggCxIqkzUN15ccWiwFeMoofHNYwyqiKmJM9%2B6HSWCdxCQkDbS8kzWuGflBtLbQbHlIvzP3%2B7iBlwiYYp%2FhlivWZ0sgbn4kkHLwpJ%2FBKZak8zAbsSJfxSOxkgQJZ0f9Q0znhjR2W7KXfjDcyJtZmxdyYjm0mhfYPku5pE2n7oW0uVVooAz80xW49MPKy1sN84nQpBEk3M5zkvJu1T8Y6Wrk8d5a9QWBxuhAiYWAhic9zqJ5TmXLMeQg4zxQKqeRKOo2vtoXz%2BSQgzYcx5OjyZIGN7Mv8VAPWQO9AGnO7LMOr1y8AGOqUBOcYYfKWB4GBd27jeDOq15fpvGVH03vvnckfKka6Of778jN1dD4t1DAAun9dflFz7iFNFIsk0J3CTFOycoJ9O46ZlV7cE%2F3jcBVfImLt4qFK0BSVdJLWK6AkEk%2FqV2D%2BG6Ok07nB3MdORLIZP4HvAc9YLK5TAIjjQJLTqM2r4FK8%2BflL%2FsOC%2Fq26g%2BggLepRc%2FD9PnwFAB82j5%2F%2B3VQJ4RUBRadTv&X-Amz-Signature=241412c03bbaa64d612cbede5ad3eefffdfa46c8c5b28eecfd66729acf0581ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2OTSGE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDk9CmDEP15pETB8D3XhTVMeH%2Bk8Va4ot0GRzOyUM5gBgIgPY4r%2B%2FdWg0PCSVQhlFaggv7izg5FstpScLmbmNXVynUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc66YxGjDYv8eoG0ircAxoHroekN%2FP%2F1x616li3lbd3lFusenxU%2FmwMgvH49jYBe%2FT30rVA8OevSFPHGiIc1fbOk0LMFZBxb%2FMiJpwo97bH585khaEdvciVT7Ja69OViHj3p%2FK8fapCcpzUXjDumsr9J%2BaA5iPnWr3sRoE%2Fb93Q6JLGgy%2Flqcwz%2BIYv3AaZ85GhC242IXyr6S7X760wSByyRTot4qNRxdy0uN3dVixQaOQRen1%2B21LDbU6Vvqw8YlLpeb6oWGa4UugN9Axz60rMzaOnlHZzZEFz9wb%2BnCKC5jAt7FotFBEWZNgh4rUXpGb2Mg1xwn0%2BoVcJoRnza8JPOyVTj5mzIdVX9UMLggCxIqkzUN15ccWiwFeMoofHNYwyqiKmJM9%2B6HSWCdxCQkDbS8kzWuGflBtLbQbHlIvzP3%2B7iBlwiYYp%2FhlivWZ0sgbn4kkHLwpJ%2FBKZak8zAbsSJfxSOxkgQJZ0f9Q0znhjR2W7KXfjDcyJtZmxdyYjm0mhfYPku5pE2n7oW0uVVooAz80xW49MPKy1sN84nQpBEk3M5zkvJu1T8Y6Wrk8d5a9QWBxuhAiYWAhic9zqJ5TmXLMeQg4zxQKqeRKOo2vtoXz%2BSQgzYcx5OjyZIGN7Mv8VAPWQO9AGnO7LMOr1y8AGOqUBOcYYfKWB4GBd27jeDOq15fpvGVH03vvnckfKka6Of778jN1dD4t1DAAun9dflFz7iFNFIsk0J3CTFOycoJ9O46ZlV7cE%2F3jcBVfImLt4qFK0BSVdJLWK6AkEk%2FqV2D%2BG6Ok07nB3MdORLIZP4HvAc9YLK5TAIjjQJLTqM2r4FK8%2BflL%2FsOC%2Fq26g%2BggLepRc%2FD9PnwFAB82j5%2F%2B3VQJ4RUBRadTv&X-Amz-Signature=134155cfab77e271cd2d1ae89ad080ea9223991e62cff093c840ab787d1c5814&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DJGSKS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCICMdrSxu1itzQ0%2FWKqbvhrLBz2DGEZq%2BbGLAsHq8JubNAiEA4YsXM2nWnnsTpmN%2FpItzphZOoC84GhItqSJbfnAuQmsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B%2Fs6TVmzH2eF2yUircA52hChClNU9mPxSU3SDc7sLkBmUUPvWDKvPZ5n38Dv1PwVNR97aMH0cNp%2BPw4UasvWi9KMYLFdYvTkBYUGX9Gg9fHmQnjKRp5LvpURZFkJieFUqb4mO%2BHMifLye0rVxFl%2FOM7d%2FHQiCCJqZbKF0mW5FUinl4KVYyjJivGKWxtCLaOixBfPB9UE7lDgI34XVfoTqq9cImJPNuWJnYhmDIhRpaGS9EzWW1QDNjuuZ2q%2BiIX%2Br43Tt2bIC18tB1qRHV8iiaDvnejFxxv%2BQ8Z50rN3stlITzJ0zs3EJoRpvtJfT2b66TpK7CxaoTgCWJTFfC5yZtmjFcf7pmDIC8L04FFEiyrZCa5eGhl9eFn6P9zYp6MZoCFnvKnCBlHikOV5BJQ%2B38DSpb67ezXr6bHbzNTiA9MI9wwlOhu9CFcDpz4jrbhYyBhH%2FhBxn7y1nU25yEmpcuE5sSB7iGZzXJw3D%2Fph4tbzPeLzxDucSDqFDA%2F7pZXHje6y7FHRjhGlXWyD0lZWvGcRmQof6l%2BARv6228ASU8hBMhRtlROo2ANlRl7zecGqMoAOyDjmMRf71owYvAqrBpcwJ%2BtuYD7KA%2FBObdrgBdZ19u0nWgFJ0ar%2F0ai2x9TUPp2t0rDUfOmKcUMPT1y8AGOqUBlgeT1VuXenLvKfGWsHhERKMbEx%2BNwZsTczYC36DhOJLDuWXKTvPETwzlZkzmIe00Vg%2BY5g0jPugYvMBN%2F5E1wdWx3jannujAqpSbciRONFQnIzWZULOGOSLCNv60AhUgSLXIYJ80zn4MH88f2HWY%2FWh5Llnz4kuEKwtdcTrPg381quFsxPp1SqAye%2Bj7vHbge1u%2Fp7L62VNBW0kcMQabNWWi7zf%2F&X-Amz-Signature=b2c4b0b5093236ff54747aadac9100002b8d492556fdacce622ba1151aa29144&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5NMRUE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCIcIR3CB98%2FN7OJmVDJkm0CRdQYI0BlE%2Fv0TWGhu879wIgUEMYcJ%2B5a%2FU56w%2BFnfrFyQpViIt7k9%2BIMsiVRLVGM40qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGFIlcHztzo4nRlvCrcA3EZqQfIxWdEksvVW%2BD8v6uzdwD7uZ8GHbHtt5PmcaIKm9sprMBkuWsSoVza1rqkJdXDS6rhSYQtYZXl7QgA37UMwdvBhjcAe%2FZvOdRnGTqudc53%2FmT8SIVbUqazz%2FnqvdyH93hWplkxypK2mSle5w0%2B3LppMRTUX46m81FSX%2FmqeSaFw7GYHHSozyin8lRU07trmikqJii%2FsN56dz0DcqgnpcEeNy4d8RRkCDLXABJDKnqIaCPRDllJe2INOK8XLtSOl1vLk3Ygnt0%2FQxEzfnFXxByrfnYegTa8z68LqTv6SpKJEdWxKbY0sPuGN35%2FRBSLuF0zjgrfhpYUnQLkwZD2o0nqkl3UR3Dd898ZQ7nTa0Ba%2FEX5%2BUgtiHxjpArEAgib2ZPSE0YAsS%2Fg8rq1v9X6QEj1CDlJAwumk3y%2F8SJFAwbIypn%2FifN3dq0oMNXBDrBzap8RndNPcfI%2B9FPPD7PQ2DP6cAeljsfF5%2FMYo1IX25s4A2jbW0dYsXGzS3DMN8f1tkFGvrdCi%2FK3W4QjYJy9EuXgzsm%2BS3Cgv92U5V5Fux3GRmL8yaT96xcwY%2B2DYNHg22vLVkTu9rvrt0Azf8vlWynEc6PwZrqeXZfzfLo%2F0eDFNvKwvZz1ilkjMNP1y8AGOqUBEvZDe0SX83yX5pJmdv%2FAndiOMeR4zYEsyHqAA24cvh4m5BR7hoFwr4MLUMsjBTKC9fEZshf2%2BZX9zSAM1X3TFmaMX%2FcrYA5LCFoNG2%2B3v28Kx6uJy4jgssiADKiwHH7YCtW9rgRxxbqcknYRtxFWMSpa6UJ8PDCHuLlVtEI308nDKT4bCBKi8JCZiV8a0uq8rm6PBr1%2BZdO2z8CLncfzWdOnRCCF&X-Amz-Signature=32abeae9da52e8fa2b9c287f6170eb9783fe5fa9cda805bdad8808d0e34a74a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2OTSGE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDk9CmDEP15pETB8D3XhTVMeH%2Bk8Va4ot0GRzOyUM5gBgIgPY4r%2B%2FdWg0PCSVQhlFaggv7izg5FstpScLmbmNXVynUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc66YxGjDYv8eoG0ircAxoHroekN%2FP%2F1x616li3lbd3lFusenxU%2FmwMgvH49jYBe%2FT30rVA8OevSFPHGiIc1fbOk0LMFZBxb%2FMiJpwo97bH585khaEdvciVT7Ja69OViHj3p%2FK8fapCcpzUXjDumsr9J%2BaA5iPnWr3sRoE%2Fb93Q6JLGgy%2Flqcwz%2BIYv3AaZ85GhC242IXyr6S7X760wSByyRTot4qNRxdy0uN3dVixQaOQRen1%2B21LDbU6Vvqw8YlLpeb6oWGa4UugN9Axz60rMzaOnlHZzZEFz9wb%2BnCKC5jAt7FotFBEWZNgh4rUXpGb2Mg1xwn0%2BoVcJoRnza8JPOyVTj5mzIdVX9UMLggCxIqkzUN15ccWiwFeMoofHNYwyqiKmJM9%2B6HSWCdxCQkDbS8kzWuGflBtLbQbHlIvzP3%2B7iBlwiYYp%2FhlivWZ0sgbn4kkHLwpJ%2FBKZak8zAbsSJfxSOxkgQJZ0f9Q0znhjR2W7KXfjDcyJtZmxdyYjm0mhfYPku5pE2n7oW0uVVooAz80xW49MPKy1sN84nQpBEk3M5zkvJu1T8Y6Wrk8d5a9QWBxuhAiYWAhic9zqJ5TmXLMeQg4zxQKqeRKOo2vtoXz%2BSQgzYcx5OjyZIGN7Mv8VAPWQO9AGnO7LMOr1y8AGOqUBOcYYfKWB4GBd27jeDOq15fpvGVH03vvnckfKka6Of778jN1dD4t1DAAun9dflFz7iFNFIsk0J3CTFOycoJ9O46ZlV7cE%2F3jcBVfImLt4qFK0BSVdJLWK6AkEk%2FqV2D%2BG6Ok07nB3MdORLIZP4HvAc9YLK5TAIjjQJLTqM2r4FK8%2BflL%2FsOC%2Fq26g%2BggLepRc%2FD9PnwFAB82j5%2F%2B3VQJ4RUBRadTv&X-Amz-Signature=228ff3baed91f4396d8eeba3935a56982538f1846ecf693cf8340a2c73c68e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
