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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V7P5B6T%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCp3tEcCGKKV2nrhNBd1v2JkZYAFXOWgrctIiqXy8ahzQIgF7Jz%2Bz3e4%2BN6KROi9NBoArKxg5F%2FX6ERmmqG3ClUXZMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC049Ovd93l%2BqWJ3MSrcA8bu%2B5%2FthCd%2FxSITtBN2ihBDEGAWAZn9FFj7O3hbSFkvOwvb9UhyL6BPyyt31Kt6w6SJFtyr2wGi%2BhnvjM%2Fekgo6BLdB%2BXLtPQnVt1EsYdEcOFO4ArdWCkgNOUwcjlKWXdECNAa9zY3N2HdANvM5nHlWgiAdDDQ1nxCFlMYlrg7TiPX7EBDVSkvWrciEae2EG6C5KKZxADXeXizTaCI7ptiqAVRmmjggVynqaqql10biG1faBZNCiVnzHyfgpSScompUPi2fKUbW0f1oTM8eXiJL5h6tILOUWysziEDDkBK1mUogBaX5QSb2uExG%2BKtxIZaj%2FmrfNFMXcR0R5rOQtt3rmXnVyaC280iMMVNF8xRlx5y1bHXqzg8i%2BFsJcMYcZLHsLlr%2B%2F4WPsDs9IH1JcG1dv6%2FvTOHBRODoCmGmP66KrDZs6UyxWPkWyvfnjRX8sUf6aYlhIdqQM1zF6ZxYS9ZFyJHzf%2Bxrnx3r4OXn%2F8TDob4PaXxFGNuH%2F27OxNo%2FqpKBdowAI3U9P13eJpliGsBWbGn23wUvk8iCzqTFLMJGVZW4hqCSaVhikA9cU5P3IW0tEmUhP4PvCQsSnOj%2Fco8sTmfU%2F9H025uronLogsNOLskxXbXgdqDukykfMKWNjsEGOqUBAjsIub%2F2zfeE8IypuT9oLSKnqde04LdyXG0HV5VhRNLWsovG9zKl2cWEwqorTsb5Jpk81QBXWGng5XfOpMVwJRvEcAgohTcjUUncBY0jKho%2FOv8cbPD0pipG3Bu6g3YD5SOu2YaiQhUJnnM9aE0PHDaud0Q%2BmrjWpU%2B03dq4qj%2FHFsVd6GwCcjHCLlN9PttJPoQfbuE7jCldr8i7Dtv6xSa3Fv0K&X-Amz-Signature=123ac234363bb1288eb3dc19d759ce6d2c8799b782a3557d873a491e1b2b8cca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V7P5B6T%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCp3tEcCGKKV2nrhNBd1v2JkZYAFXOWgrctIiqXy8ahzQIgF7Jz%2Bz3e4%2BN6KROi9NBoArKxg5F%2FX6ERmmqG3ClUXZMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC049Ovd93l%2BqWJ3MSrcA8bu%2B5%2FthCd%2FxSITtBN2ihBDEGAWAZn9FFj7O3hbSFkvOwvb9UhyL6BPyyt31Kt6w6SJFtyr2wGi%2BhnvjM%2Fekgo6BLdB%2BXLtPQnVt1EsYdEcOFO4ArdWCkgNOUwcjlKWXdECNAa9zY3N2HdANvM5nHlWgiAdDDQ1nxCFlMYlrg7TiPX7EBDVSkvWrciEae2EG6C5KKZxADXeXizTaCI7ptiqAVRmmjggVynqaqql10biG1faBZNCiVnzHyfgpSScompUPi2fKUbW0f1oTM8eXiJL5h6tILOUWysziEDDkBK1mUogBaX5QSb2uExG%2BKtxIZaj%2FmrfNFMXcR0R5rOQtt3rmXnVyaC280iMMVNF8xRlx5y1bHXqzg8i%2BFsJcMYcZLHsLlr%2B%2F4WPsDs9IH1JcG1dv6%2FvTOHBRODoCmGmP66KrDZs6UyxWPkWyvfnjRX8sUf6aYlhIdqQM1zF6ZxYS9ZFyJHzf%2Bxrnx3r4OXn%2F8TDob4PaXxFGNuH%2F27OxNo%2FqpKBdowAI3U9P13eJpliGsBWbGn23wUvk8iCzqTFLMJGVZW4hqCSaVhikA9cU5P3IW0tEmUhP4PvCQsSnOj%2Fco8sTmfU%2F9H025uronLogsNOLskxXbXgdqDukykfMKWNjsEGOqUBAjsIub%2F2zfeE8IypuT9oLSKnqde04LdyXG0HV5VhRNLWsovG9zKl2cWEwqorTsb5Jpk81QBXWGng5XfOpMVwJRvEcAgohTcjUUncBY0jKho%2FOv8cbPD0pipG3Bu6g3YD5SOu2YaiQhUJnnM9aE0PHDaud0Q%2BmrjWpU%2B03dq4qj%2FHFsVd6GwCcjHCLlN9PttJPoQfbuE7jCldr8i7Dtv6xSa3Fv0K&X-Amz-Signature=8e73d4db2f93ae632be9f11eecb49eb8a36f27516506169e3130a28e4362a643&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V7P5B6T%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCp3tEcCGKKV2nrhNBd1v2JkZYAFXOWgrctIiqXy8ahzQIgF7Jz%2Bz3e4%2BN6KROi9NBoArKxg5F%2FX6ERmmqG3ClUXZMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC049Ovd93l%2BqWJ3MSrcA8bu%2B5%2FthCd%2FxSITtBN2ihBDEGAWAZn9FFj7O3hbSFkvOwvb9UhyL6BPyyt31Kt6w6SJFtyr2wGi%2BhnvjM%2Fekgo6BLdB%2BXLtPQnVt1EsYdEcOFO4ArdWCkgNOUwcjlKWXdECNAa9zY3N2HdANvM5nHlWgiAdDDQ1nxCFlMYlrg7TiPX7EBDVSkvWrciEae2EG6C5KKZxADXeXizTaCI7ptiqAVRmmjggVynqaqql10biG1faBZNCiVnzHyfgpSScompUPi2fKUbW0f1oTM8eXiJL5h6tILOUWysziEDDkBK1mUogBaX5QSb2uExG%2BKtxIZaj%2FmrfNFMXcR0R5rOQtt3rmXnVyaC280iMMVNF8xRlx5y1bHXqzg8i%2BFsJcMYcZLHsLlr%2B%2F4WPsDs9IH1JcG1dv6%2FvTOHBRODoCmGmP66KrDZs6UyxWPkWyvfnjRX8sUf6aYlhIdqQM1zF6ZxYS9ZFyJHzf%2Bxrnx3r4OXn%2F8TDob4PaXxFGNuH%2F27OxNo%2FqpKBdowAI3U9P13eJpliGsBWbGn23wUvk8iCzqTFLMJGVZW4hqCSaVhikA9cU5P3IW0tEmUhP4PvCQsSnOj%2Fco8sTmfU%2F9H025uronLogsNOLskxXbXgdqDukykfMKWNjsEGOqUBAjsIub%2F2zfeE8IypuT9oLSKnqde04LdyXG0HV5VhRNLWsovG9zKl2cWEwqorTsb5Jpk81QBXWGng5XfOpMVwJRvEcAgohTcjUUncBY0jKho%2FOv8cbPD0pipG3Bu6g3YD5SOu2YaiQhUJnnM9aE0PHDaud0Q%2BmrjWpU%2B03dq4qj%2FHFsVd6GwCcjHCLlN9PttJPoQfbuE7jCldr8i7Dtv6xSa3Fv0K&X-Amz-Signature=a3af259fff8594a401e32aee2839e9be6ad2d8393a840b8d2f3b98e8dec59f76&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47CKGS3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIESTPHrngBjrqMjoZFzsqDAYxtotZDYHoF63Fzc9rzHwAiEAt7qlk6IiJ5d%2BAKtjZ3vAKpSf4FzvodPmmA1PVZtod%2BYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4TJWJOS3qY1R6sxircA73ETWn7k8P20Jyi1TUZ4bKhAl8rJ%2FPduyFu7Sc25IwxLfhFDU%2BLyDOVSci%2BLEsSHpj6tW9YW5lYtg2tvi8m0WnDiMSUWG6527XM2%2BG29aGDFUWJbLBz%2B%2BAClr1RLUM5khm%2FsxL%2FPhtveRFVR1BURFsKyDP05IuQEzaU4CVL4suPpKoy8xY%2Bp41Z4ez6WIEn%2F1bguSqJJjeePjzQw%2Fgjk5zflfyvtUoFQqzTkmmwXo1iGOWSTGuHx6ujll8lsR0x7CfcGJZ2A0LwyzDLzUuDraf8JSI0HxW5zwXVWSxYP2gbVJ2gLjk18RENw%2BMy9xEv6dCfhvN66wieeir6zViywTWT62%2BCMBWbUIwI7vGu10%2FLtIT3zJP1%2B7y0PFtgPpjrbdeh%2BT7kXmTyD4mkDl6ukpNFV2lSFXT1q288czz82kFJPyNO3ivqz%2BF1YWkmKt9U1vE9IfbCcjMosbzwkfpWMTVSgOOu6MX8aYUIqoNJ5ocrCrU0HmAvkk2dJjHEkfHdHTW7FqTr1XP4xlvbWc1PAJXdnlcsrT%2FyQ3wU%2F5pb9Z%2BrkYzv0O%2BxmwDmNqBIHy9YKM5QuYwxpZF2hH0EqL%2BOo3SEjkl%2BcZjUvFeY5l0%2FppNowjccHDSrGnVayPwdMMWNjsEGOqUB7fi3Rf4HvxvEHTNpRLYELD1gGvOXdzoBuWdETVo3UNQlh2md0O0NqSgcHJ8FTkUmLDlIpPGnNJtcvljrHESN8emYhjUBTyWocIiojuk4YThxVn6M57hvXJ8NlKUK4Ro%2BkpIT8zQOmhf22%2FfldLpOSBOUHjtdLsD5rCtureOvjkflksaTs3NPeNAZuOoX5aSxaY8xoc%2B7xIWJkIdM%2BIGM2xO5sjUP&X-Amz-Signature=d7402952177d38c4a802acce20cf39babfc03f406ca2fb82f1e63d9394d553ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KF3K7Z%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDTohfRSsShcxu%2BhTe%2FyltXxlbJBcyUDU%2FvlMn2T0qrOwIgDdKCj5OQoFGJXm4Bp%2B1uBCiPaFiSPSRToGwffze3DQoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWpOExMRun8uKHxcCrcA4M%2B8Kpl37nbFY4xTAUyNNv0RSX4GEAUfmKFOF1YPyt7v8D2sxbPHJ%2B5Vqk%2FUwHR%2FBwjPCi31xW6YfisQrF9p1mrP5LydI%2B2PfUnmWKAVVF5RAI6olBZhqIp3K0fabtCkK3f%2BFkO1ztnmBhvxSrhKFJUwYidLXqk6F0lDAFPxb8rEZAJCJQfev5UJmGZIeViwKU39%2FsMiqRlMtmtcRbo8K6ychn%2Bd4QVU4ubu3Zf%2BOBXw2nv33h5HbEj9a2QEfBFEO14x29Wgln%2B6IfkxFnlr4LtE2ODWkD4G%2BvXSTJpRa6SoTnT7drYJLc1%2FLXIEB39sUAQYKVwrt30qB5jQV57TA0iV91ZvDya%2FHL7WsmHtnLdijQST94z%2FZ8kh17%2FuSRMiyRnI2VxwwgKyrMvB9Pb6AusZKlxsWxTbnB%2BU%2BPQ%2B9L7PnKkBxD7puEGRH46pchtxLHLZf1jOR7db2yyNlrHGqVhjj8e%2F1KTXpysLj72EpqSzfnQbhUKaM256gGoGHv6022ubcDTIb6CY%2FLDioQbzRDtl5ujDLvpG2o72oz43TUvf%2Fsukrk%2F4YEY6Kd3Mmw8S6h6JWa%2FEFmnJalY0YyNiPCs6iv24G%2F%2BQbu7%2FOIzsdkhMed%2Fa%2FYxxxRc8fB4ML2NjsEGOqUBR8oNQBA5VWexfH9YZP2YdZ45inulY6tfcL%2Blk%2BjDrV2WtUIzZyK1%2BQVuBtaGyWuyhrTTfoT%2FVtVMXJJoBzUkTLttj7786TcgSv%2B%2Bm8NIthBLoT7d%2Bt4cU%2FDwwCoeaLfA5otW5V6vcH0Tv1y%2B0DM82uEiJYXkPFV81jpxPGeP5YTK%2BgcBFB39xetbxbc%2Bv6KzzU3JvviOlqN5cr4aUYc%2FUyzoskN3&X-Amz-Signature=e1e0e7776a18ea8a29b37ec2fb134d33897d29ad0f70f42960a15fe3fe8cb570&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V7P5B6T%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCp3tEcCGKKV2nrhNBd1v2JkZYAFXOWgrctIiqXy8ahzQIgF7Jz%2Bz3e4%2BN6KROi9NBoArKxg5F%2FX6ERmmqG3ClUXZMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC049Ovd93l%2BqWJ3MSrcA8bu%2B5%2FthCd%2FxSITtBN2ihBDEGAWAZn9FFj7O3hbSFkvOwvb9UhyL6BPyyt31Kt6w6SJFtyr2wGi%2BhnvjM%2Fekgo6BLdB%2BXLtPQnVt1EsYdEcOFO4ArdWCkgNOUwcjlKWXdECNAa9zY3N2HdANvM5nHlWgiAdDDQ1nxCFlMYlrg7TiPX7EBDVSkvWrciEae2EG6C5KKZxADXeXizTaCI7ptiqAVRmmjggVynqaqql10biG1faBZNCiVnzHyfgpSScompUPi2fKUbW0f1oTM8eXiJL5h6tILOUWysziEDDkBK1mUogBaX5QSb2uExG%2BKtxIZaj%2FmrfNFMXcR0R5rOQtt3rmXnVyaC280iMMVNF8xRlx5y1bHXqzg8i%2BFsJcMYcZLHsLlr%2B%2F4WPsDs9IH1JcG1dv6%2FvTOHBRODoCmGmP66KrDZs6UyxWPkWyvfnjRX8sUf6aYlhIdqQM1zF6ZxYS9ZFyJHzf%2Bxrnx3r4OXn%2F8TDob4PaXxFGNuH%2F27OxNo%2FqpKBdowAI3U9P13eJpliGsBWbGn23wUvk8iCzqTFLMJGVZW4hqCSaVhikA9cU5P3IW0tEmUhP4PvCQsSnOj%2Fco8sTmfU%2F9H025uronLogsNOLskxXbXgdqDukykfMKWNjsEGOqUBAjsIub%2F2zfeE8IypuT9oLSKnqde04LdyXG0HV5VhRNLWsovG9zKl2cWEwqorTsb5Jpk81QBXWGng5XfOpMVwJRvEcAgohTcjUUncBY0jKho%2FOv8cbPD0pipG3Bu6g3YD5SOu2YaiQhUJnnM9aE0PHDaud0Q%2BmrjWpU%2B03dq4qj%2FHFsVd6GwCcjHCLlN9PttJPoQfbuE7jCldr8i7Dtv6xSa3Fv0K&X-Amz-Signature=138c06dafa81eeebea79656c00f1b174206095471d0f35f07feab666977bcbe9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
