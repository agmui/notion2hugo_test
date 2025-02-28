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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPFHXTP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC78hDofuwpqrtEUUpyRV%2FwbOabOFyVLIto5ozGR1rZUwIgEQHsiHtnx5BfBZeJZH6I7hgj0u0GrLeF9YF9hYpxVZ0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG87mr3xGvGs3DL80ircA1as67U25Jr1%2FJAsPtGBoieNOd7Co6sFWNrHz3%2Bp0QuQlooBAxOXg3j%2FBrqqJ9pcCU%2BBYG2djzycmr1OvI%2BgzuHUJKMNq6%2FsM50IPrOY1SCMExoDAJowQKTtgE36Xm8jp%2BX6LGwhp9FfUHkMhgF56z9CEDjYxKkX43icw4XKXsM5TgPjbkCVaAtpEQOa%2BYcyXgIe1Dp7cazFWPSE94HtfBi5JWA41RySG%2Bfa83KNJh5HOEmVcawhqviYt70rkK1zQ4LYNIt1IbaVhgk8jc3OqN9BpJz68p4kybycZYw4MLt5k8ci7TQ564rFCso42DjPPNrAKoh6XcxZRvy0juWpz295dKeRuAg1NlLOtn9jgTd1zICkGsSzb%2BysjEJ%2BqhfhrDZdfux%2BQX75eoXv7TOu95NIt14EFsDXokqi2NYDjOxy2wEdCNCOcRevUqcb3QrPwU7SuuwAFVmeUsvNLyR%2B6khAV4kHq7lxyeqwvcH0yBqzTF5XWpTxMs04WwhXrk7Jf8ei8TsOf%2Bzu%2BxoCc24uQtVGKVOK72%2B7XXeCQZtYXLLh%2FMpTlPxhj64ApkI1Z2KztbpKY6GdD7xzyWVC9bzlzf0svNRm8XMzJpUbEYudSuzKzTuGHDy5hMvBW0feMJL2g74GOqUBZFkWAXpkkmnEiotblGtDseMiqQsIrbARWXBcUaboTzjcMELcMXosOcIvxQAhMpi446oWt2951mvVrs%2F3DoJvFi8N9pzH125LaSwaVDgdFFEAlb%2FpP%2BPFIbpwFLh%2F%2BDZGRB1HLShw2mf0xk6UIjxByvRRvfS412ZEn5zbxaKFu0W46Vja3KOo54b6podvI038LE%2BaYoreK%2ByJ6Ett6WcpOIaajmjW&X-Amz-Signature=1d4fb3da471653fd1bf05e60df351eba5e3a4d3314ddca80ae04abdb9c59e96b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPFHXTP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC78hDofuwpqrtEUUpyRV%2FwbOabOFyVLIto5ozGR1rZUwIgEQHsiHtnx5BfBZeJZH6I7hgj0u0GrLeF9YF9hYpxVZ0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG87mr3xGvGs3DL80ircA1as67U25Jr1%2FJAsPtGBoieNOd7Co6sFWNrHz3%2Bp0QuQlooBAxOXg3j%2FBrqqJ9pcCU%2BBYG2djzycmr1OvI%2BgzuHUJKMNq6%2FsM50IPrOY1SCMExoDAJowQKTtgE36Xm8jp%2BX6LGwhp9FfUHkMhgF56z9CEDjYxKkX43icw4XKXsM5TgPjbkCVaAtpEQOa%2BYcyXgIe1Dp7cazFWPSE94HtfBi5JWA41RySG%2Bfa83KNJh5HOEmVcawhqviYt70rkK1zQ4LYNIt1IbaVhgk8jc3OqN9BpJz68p4kybycZYw4MLt5k8ci7TQ564rFCso42DjPPNrAKoh6XcxZRvy0juWpz295dKeRuAg1NlLOtn9jgTd1zICkGsSzb%2BysjEJ%2BqhfhrDZdfux%2BQX75eoXv7TOu95NIt14EFsDXokqi2NYDjOxy2wEdCNCOcRevUqcb3QrPwU7SuuwAFVmeUsvNLyR%2B6khAV4kHq7lxyeqwvcH0yBqzTF5XWpTxMs04WwhXrk7Jf8ei8TsOf%2Bzu%2BxoCc24uQtVGKVOK72%2B7XXeCQZtYXLLh%2FMpTlPxhj64ApkI1Z2KztbpKY6GdD7xzyWVC9bzlzf0svNRm8XMzJpUbEYudSuzKzTuGHDy5hMvBW0feMJL2g74GOqUBZFkWAXpkkmnEiotblGtDseMiqQsIrbARWXBcUaboTzjcMELcMXosOcIvxQAhMpi446oWt2951mvVrs%2F3DoJvFi8N9pzH125LaSwaVDgdFFEAlb%2FpP%2BPFIbpwFLh%2F%2BDZGRB1HLShw2mf0xk6UIjxByvRRvfS412ZEn5zbxaKFu0W46Vja3KOo54b6podvI038LE%2BaYoreK%2ByJ6Ett6WcpOIaajmjW&X-Amz-Signature=dfc7b41c82070218db7fb4b1a736e4e14c7637d4a48ab906b57abe78255b6066&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CIDN2O%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIH0EUbEWgqbS9Urqmwxb9OJflQQ0SFWtnu0VMwFcagn2AiACtTrDjKXOaU7D0HV7Me1fny66YogkqrBJ91DSLtwLAiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwTuw06GRLZDau3%2FPKtwDKtgxKwYVcAVTnNsct%2BpV8iDXll7Bm7Hjh%2BpBtdlHRxm8G%2F4Aeyx%2B%2FowPPZYdUJcMMXnlfn2YuJsWYEfifL75PXFCmBZdCLQszeJLz2LeGkpsKVohg7EsJjTf%2FdPDOQAdVS9Rs%2BML0pHZz9wrb5FgoFX806hq%2FvxMS9WBUag7pcled66ByUnDOSq6yu7WIQhVSgjBKcgOvXQCWcBpMLc4P4Ba%2Fxmz6tJyX9sp9bu2tbft6FKnJ5%2F2UAs0dD0SS4WdhExyfLQF1BUkwaGu99pbwLDxBnJFb30Bg%2FpRBTp4zZq5y4U6tYX8G3NROdYrj0BGCQOBU6qv4oEvp2u3t7AfLEZXAagVO9Ik06Cag2tX4XijUOqDZ%2BlvDoUBnkznxy6bF0DJT3lcYzWGupl7VZAZz%2FKbSyeY9LBqLmI26ge65HC0koehr9uRMRUixyQgZn4b3M%2FBlaiviQ0dL8BbnVo42pgqzACSmjTBeiNYPABzhNJrRF%2Bb2YIYrxiHTO3x5DbVrUgS0cWn6wpjwOBoqsXE5JNCjz8f52OrjWeMgbRW8cOaNyYvNX6gqi6sidHGFQIkD7PXZjsSiAG%2FCnBcSAjxa0rBfKYe3UAMv42QkSvoIiUiYQqoPTbxH%2F9%2Bhm8wyvaDvgY6pgFt0RnDA3qZeqk4UTTrA9kwmkGCaCwoujb%2Fcm9kV72jIPQDJaDEUByTfRJGzOtTnWLjz%2BqCEj4Ta%2BXIEyRsQKrKJ1KpQkvJpK5%2B3%2B2uesu92sZDfyhB%2Bu6ug6wBsxAW5shQCIobjO9Czt%2FUHZdT5Rp8d4UHlV8RgzhBZEIF5MtGUJeRhP3slgeehL%2B4lKN591GGesjZRsjJDibU3Jd9f7%2Bf3cJTHBui&X-Amz-Signature=7c80ce4f6793aca825fbc3ceefd70648282bd6bb9fc7b634b299ea9b63773319&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UTX4ESD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDBSpqla%2BT74VlEyL7Jta%2Btot%2Feg720SICENsjF2UkGogIhAO4Yu0KQQcaKa17RQuPXgh%2Bwk%2BbhDz7zJp%2FM47lTNnp4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIcX8Bp2wTOt0ASNoq3ANGxG4kPqAn5uZLGu1JxehYpkdbeS34V2r2P6Xcmnc4GALdpki2mSM0g421cjCSQ9%2B6QSOksl6FHSbQh%2Bz6zi32quyrtDcVqhKtzqAt2yz5ziKFifXxeFNd78yVfKhTSI5W%2FOkFC7VqSe0L1%2BFIDNmto%2BOWuJV1G4iKL3%2FmX1iLps0lAahLroEHotyWaMibjE6nQ0sd0eQIjARxIDRm3fB5R0WF%2FQgfncz2%2FMbeqXl5%2FpGgWG%2BbBFa%2FkBjYRAUW8M39IxmMHB1FCbMOO4apErWJUSyJm4fujXJ%2B7xmtJTmvwh3Qz%2B4%2FjK0n7EpAOQKsNSf0Ts8ZHrDmZqmSbamxQSqCg%2FG67zozIUZkObV4nQz2BpY6h5iSdRsdXq66Skm7OQNDwYHIfoWQCxKA4wKuKv%2FCK%2FH%2Bk12MyC91Z0YN20k2hE%2F6T8%2B0G9h6RWMJCDKKYF2mNrHAyBLyr0H6I5iMVr4JP2xDp3VSJ4z4aQOSJARtEQ85QJ5UXXCcJmLFQ5pmC%2FgxfhlLwySwDE62SwXiWvr5BxHzKcV0Th2A6OSLHQFObTCY4XiP5QzVxBxURv1%2FY7KtynUt6K3LAltgoxZ7LTNQAlowmFUE5Ya%2F5DDGDfr8M8L203PK4pIHowgIgTDT9oO%2BBjqkAeqb1ABnpKzX6hEG2smRz%2Fj5pQDL%2BYfFKEb2JZuf8f8CHK58P%2FO%2B4EOWZ6x9BcqzgldOUqe5B9prDErpCWZNRK0gyumBSNaydHuLURyI8amPsfAIgDQEToV0IFNKHx5uW56sXJICmb%2Fix81lpQ99z%2BPKk24Jpo%2BP7KxVQVeOVe1DotWBZ2hvTJKGEeJd1OkDLYygsnD076X2sLn%2FliOpMRYT%2Fdug&X-Amz-Signature=fecf2dbf9c4edbf2cc79a0b658b8625eda57adf9c5385b44ebf70fdbecfcc27e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPFHXTP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC78hDofuwpqrtEUUpyRV%2FwbOabOFyVLIto5ozGR1rZUwIgEQHsiHtnx5BfBZeJZH6I7hgj0u0GrLeF9YF9hYpxVZ0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG87mr3xGvGs3DL80ircA1as67U25Jr1%2FJAsPtGBoieNOd7Co6sFWNrHz3%2Bp0QuQlooBAxOXg3j%2FBrqqJ9pcCU%2BBYG2djzycmr1OvI%2BgzuHUJKMNq6%2FsM50IPrOY1SCMExoDAJowQKTtgE36Xm8jp%2BX6LGwhp9FfUHkMhgF56z9CEDjYxKkX43icw4XKXsM5TgPjbkCVaAtpEQOa%2BYcyXgIe1Dp7cazFWPSE94HtfBi5JWA41RySG%2Bfa83KNJh5HOEmVcawhqviYt70rkK1zQ4LYNIt1IbaVhgk8jc3OqN9BpJz68p4kybycZYw4MLt5k8ci7TQ564rFCso42DjPPNrAKoh6XcxZRvy0juWpz295dKeRuAg1NlLOtn9jgTd1zICkGsSzb%2BysjEJ%2BqhfhrDZdfux%2BQX75eoXv7TOu95NIt14EFsDXokqi2NYDjOxy2wEdCNCOcRevUqcb3QrPwU7SuuwAFVmeUsvNLyR%2B6khAV4kHq7lxyeqwvcH0yBqzTF5XWpTxMs04WwhXrk7Jf8ei8TsOf%2Bzu%2BxoCc24uQtVGKVOK72%2B7XXeCQZtYXLLh%2FMpTlPxhj64ApkI1Z2KztbpKY6GdD7xzyWVC9bzlzf0svNRm8XMzJpUbEYudSuzKzTuGHDy5hMvBW0feMJL2g74GOqUBZFkWAXpkkmnEiotblGtDseMiqQsIrbARWXBcUaboTzjcMELcMXosOcIvxQAhMpi446oWt2951mvVrs%2F3DoJvFi8N9pzH125LaSwaVDgdFFEAlb%2FpP%2BPFIbpwFLh%2F%2BDZGRB1HLShw2mf0xk6UIjxByvRRvfS412ZEn5zbxaKFu0W46Vja3KOo54b6podvI038LE%2BaYoreK%2ByJ6Ett6WcpOIaajmjW&X-Amz-Signature=7c016805b9dbd9dde77150d4488284cf06b50e7d6efa3291491e18b8901ab935&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
