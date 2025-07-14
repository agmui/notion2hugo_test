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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPBW2TM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHRflT93CfOATJSe43gxvYxR5z0gF%2BHvL%2BZc0%2FYNcAV6AiB76CPW2ct3r2QtxevKIw3zhvPf5Hca1A4YZI6BPE42ryr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM9%2BmUZBJoUHnw94SsKtwDIUPx%2FtSLOR%2B7lWIvRmdg5Xo7Gvyq0kdErgKgzG7Kern9LttTqTduyEtg7%2FJxY7%2BbQ%2B4FuS93g2fPNSdPdcCVuuGBIAtbIet%2B1pqp20rHghkmP8yaGAuazLvqf7W9%2FdLWmAxunT8X1CqDF5g%2FHPU0VE6A9g5cTvoM%2BHtUwgIOrZ%2FSOVjapf58ae6TLzjYQSXFOkNEBA47yQgmvufnFVKMj%2F1vxVWg1KlZ8hdQsadRp8bYB3pOqLb2hyhK1Z8ah%2FyssCEIScJMmQCXBK0PY5g233aF2l6wsTfVb64kVdWopE%2FmsRY%2Fi9YC84p3Q%2FnGxqMJRUPBXTDPDkIwlPp16BzPXaIh%2B8uZKvsE9NkMF4x0ZqbW1%2ByKmBu4BBuTHZ4dhTgH35zEtlczTjrq%2FPuujJecSeyG78CeU1xcf1IvWN2C4WeLDTy7AUXvj0h9RQziCzpvRUgYiG781233oMSxSPt8P7s8iPe6yF6A5GW1c%2B2SBDFoOWb1YHekLU4SWnqlIYgYUqeeDfJ0c7F3WDS7lZg%2F8EMDcdOEenOPPfB7YXa8y5MuplxrBcxp7N0IfgScU8DsVf6TJNccTng0bVNeoSBCWrJ94Iq1YEAKsgFyOqOitJ7nOV1tVXocPKnJ10kwxITUwwY6pgGItM1n3fR0Mh3%2F9Jyv%2BJtCDA9QcfFFm3H1Q7wmd6mPazmcoN0En8YvOFfn45zlmjtELCPomMXJlzW%2BGtsr563dum9CWjXclfL5rZ9upC2tAN9ayFJO3LMq8sN%2Bt3lG50c6gqKAWx4g84sca70Cs1zXVMikd62lFeWkJTN6M4uwopjoNXG0oqj1nzVFWerRWHI0jOaXjicynzerwePgbMZDzItG4%2BhM&X-Amz-Signature=99f0ef9dc0faad2683cfda26ee0c0d9a6a01a8d75e3f037067ba1d11eb56449a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPBW2TM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHRflT93CfOATJSe43gxvYxR5z0gF%2BHvL%2BZc0%2FYNcAV6AiB76CPW2ct3r2QtxevKIw3zhvPf5Hca1A4YZI6BPE42ryr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM9%2BmUZBJoUHnw94SsKtwDIUPx%2FtSLOR%2B7lWIvRmdg5Xo7Gvyq0kdErgKgzG7Kern9LttTqTduyEtg7%2FJxY7%2BbQ%2B4FuS93g2fPNSdPdcCVuuGBIAtbIet%2B1pqp20rHghkmP8yaGAuazLvqf7W9%2FdLWmAxunT8X1CqDF5g%2FHPU0VE6A9g5cTvoM%2BHtUwgIOrZ%2FSOVjapf58ae6TLzjYQSXFOkNEBA47yQgmvufnFVKMj%2F1vxVWg1KlZ8hdQsadRp8bYB3pOqLb2hyhK1Z8ah%2FyssCEIScJMmQCXBK0PY5g233aF2l6wsTfVb64kVdWopE%2FmsRY%2Fi9YC84p3Q%2FnGxqMJRUPBXTDPDkIwlPp16BzPXaIh%2B8uZKvsE9NkMF4x0ZqbW1%2ByKmBu4BBuTHZ4dhTgH35zEtlczTjrq%2FPuujJecSeyG78CeU1xcf1IvWN2C4WeLDTy7AUXvj0h9RQziCzpvRUgYiG781233oMSxSPt8P7s8iPe6yF6A5GW1c%2B2SBDFoOWb1YHekLU4SWnqlIYgYUqeeDfJ0c7F3WDS7lZg%2F8EMDcdOEenOPPfB7YXa8y5MuplxrBcxp7N0IfgScU8DsVf6TJNccTng0bVNeoSBCWrJ94Iq1YEAKsgFyOqOitJ7nOV1tVXocPKnJ10kwxITUwwY6pgGItM1n3fR0Mh3%2F9Jyv%2BJtCDA9QcfFFm3H1Q7wmd6mPazmcoN0En8YvOFfn45zlmjtELCPomMXJlzW%2BGtsr563dum9CWjXclfL5rZ9upC2tAN9ayFJO3LMq8sN%2Bt3lG50c6gqKAWx4g84sca70Cs1zXVMikd62lFeWkJTN6M4uwopjoNXG0oqj1nzVFWerRWHI0jOaXjicynzerwePgbMZDzItG4%2BhM&X-Amz-Signature=63799c8da52717422ca60385b989ac74da7e31db4d1eb6737c5b11f0bf9b2be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPBW2TM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHRflT93CfOATJSe43gxvYxR5z0gF%2BHvL%2BZc0%2FYNcAV6AiB76CPW2ct3r2QtxevKIw3zhvPf5Hca1A4YZI6BPE42ryr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM9%2BmUZBJoUHnw94SsKtwDIUPx%2FtSLOR%2B7lWIvRmdg5Xo7Gvyq0kdErgKgzG7Kern9LttTqTduyEtg7%2FJxY7%2BbQ%2B4FuS93g2fPNSdPdcCVuuGBIAtbIet%2B1pqp20rHghkmP8yaGAuazLvqf7W9%2FdLWmAxunT8X1CqDF5g%2FHPU0VE6A9g5cTvoM%2BHtUwgIOrZ%2FSOVjapf58ae6TLzjYQSXFOkNEBA47yQgmvufnFVKMj%2F1vxVWg1KlZ8hdQsadRp8bYB3pOqLb2hyhK1Z8ah%2FyssCEIScJMmQCXBK0PY5g233aF2l6wsTfVb64kVdWopE%2FmsRY%2Fi9YC84p3Q%2FnGxqMJRUPBXTDPDkIwlPp16BzPXaIh%2B8uZKvsE9NkMF4x0ZqbW1%2ByKmBu4BBuTHZ4dhTgH35zEtlczTjrq%2FPuujJecSeyG78CeU1xcf1IvWN2C4WeLDTy7AUXvj0h9RQziCzpvRUgYiG781233oMSxSPt8P7s8iPe6yF6A5GW1c%2B2SBDFoOWb1YHekLU4SWnqlIYgYUqeeDfJ0c7F3WDS7lZg%2F8EMDcdOEenOPPfB7YXa8y5MuplxrBcxp7N0IfgScU8DsVf6TJNccTng0bVNeoSBCWrJ94Iq1YEAKsgFyOqOitJ7nOV1tVXocPKnJ10kwxITUwwY6pgGItM1n3fR0Mh3%2F9Jyv%2BJtCDA9QcfFFm3H1Q7wmd6mPazmcoN0En8YvOFfn45zlmjtELCPomMXJlzW%2BGtsr563dum9CWjXclfL5rZ9upC2tAN9ayFJO3LMq8sN%2Bt3lG50c6gqKAWx4g84sca70Cs1zXVMikd62lFeWkJTN6M4uwopjoNXG0oqj1nzVFWerRWHI0jOaXjicynzerwePgbMZDzItG4%2BhM&X-Amz-Signature=82c11230a95975bee4c155baee7ee2ce8ef2c9f18d3999dc268477b156ed105a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMWYDXV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH8jfvC%2BBYN98E3ELyO%2F1vveWWVZFxn3ygvsT9LTfhBUAiEAoyxgtdDsRjH8zH8riiP%2FNrAvzDKxv6wIF%2FDDcYUBGe0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNUOTJGXTbR2QFOsCircA77%2BUpykRioIh0ItgZju0KCnIw5lqphnod8M%2FXFNqOCh6YGF0KfuzxLYESzNhi8%2FNKtOhqeB1rlNiR%2BTj3BsJO7%2FqtIaLHQWU6zOc0Nrn8jdjGJKusfdUlw0xlcCRPkdbYlpxzHsTvaOMXY5fQRsyOgiamA5Ru3IL8e75bqhIR3yQoPgOI3qrdIt7%2Bdi8XeedjfgbXRdRTzBmF7c1PsEehSdioBfKRohS3xSDmWynT1LnjWB%2BDKnx%2BaPzKYFbbX73Zum2M29joGcu0ugtUijEXZxjRb6Upw4WIgEQvlrWhWkPGhL4tgMo5rZUm03J%2Fz09Y1ZaWhRkf3wAG%2BWVSLaHlDnBjW%2BZANuJ59L1XAq%2BQ2NdCl9LS%2BLdHQ2RksBQg2PaAFpA3lCMry4QghtNXnGTlOMhNQTyNYsFaVA7xnKvsrFlZ741RGL01Mj4z3emQp3rXTlpYOUvVmUn6%2Bo2iRvGUKA0Q1TMYgcTk0yaH4kOtmkXF4AOJPX7LYer7xPBPoYDh9h6Q%2BIIJyfkDYc%2FdfQGiccMMv%2BmqXHhVU7UaZ%2BopzFx0BJ4J8lIF0CHG7UBbciUik0nahOjeeVBuOkKDau4ij2rrniAEkgH2FomylJbT60AbsQHMAVet47ytzCMOyE1MMGOqUByIemZRmLHebBnqPnHv9AAcU7Lr%2F7zbjBJN7Q9AI6Aqa3mJU6vDC%2FqDI7TwPQA2Vb06PQ1qTrnQQ5I765EWcXuCBjNpc%2FF7SQHJg699iwwQ24D66L3Gpc1RHn%2F94gwPNcyYrB8AWhf%2BG7v5OYcr%2BXVPDoQ%2FTsDu%2BS3tS0UShlqFapnCxykg0E2nc%2Bh3F3J%2FZDJrPKtt2xf%2FRdIzzTM8d%2FOP%2FJRrHS&X-Amz-Signature=fa3ed1d429fcc37bdb4b14e457b9b4585fa5d043cd6f154aec116f030dbc67db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBPUGJO%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH2pF7kGkEI5dqqMvrqDuUWQPe41AAcnA9syNWemlxWuAiEAngOGyCVWbPVdoloa5l3s0Owy%2FxQMXqisgikz5yhUohEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBwYVy8UT9OsWJBnMSrcA4ksWU8PC0VK09pNEf9zJI4yfr%2FMkHNptbf0Cg9WllskP%2F3wjlbNwouk8GjuCFnrOh8SdqjM1e1MXhMcgyI3Qr779RcoERSlzLWFln0sFLQA2bbYa3bqhiYuQvNEY7IEfRQpn%2Bju0ajbugz5uQjE4EBkRFqMuXASNt2R%2BOjJCbEZgD%2B6j8WeI7VIZpIRASmlNReM83JjD6XD3QZCCR70AjSmcWYaAr6x0nDXClxMRt5TXD0%2BLoSWl8X%2BktfDtx79nlfnzn1bxAxctZUEZybPQem231wuuOJwmHVm%2BMaYadvSEjc3I0Wu1vLba9eaZY0rdla7%2BMq%2BeZiwMsdwCH0rOwiYcqKr2Gsfo%2F9frRFDHoWG%2FnmIQL%2B33Wa%2BGTFHyZFA7yf5sXhqGai6aNNvU453Ikox3o8yygRr7yXi5istf7eaQyiLPEiHFN1%2B8jCZnCjLu3ocQvg9eWUxkRpmpzCYPVX%2BCXrztcj7n2xmmULZifIvdw4aUnXQ08LDRL8eyn4rq5Af46cONQTYF8YYIPiOVk%2Bq7YGK5joCSIp9rj62AZxoV%2FPlFSU7WvVWAsgY9dJNl0VAnY0M%2FzIX8oML8Jh7qcMNKZR1UmTh8iXOrWBNBMcWZBhuufA2gYeLegG9MNGE1MMGOqUBMSfB4kfi35v0kbj%2BuLN0KVkvC7ub%2FZ1vA964Cg7%2FXciwClvbTPsTf96cJjunhp2tlSz%2F60JPE5rGZ9IrEqiJaW1DKRW3uWmVNeVS1ldRdt6768vwlHygMkkma4zWPOzoguidxnqxwDzyHvDHvjJ%2FIwn5MkIT8oCqLntuRRddaYgGQWMSWMf9rJ%2F%2BfxL842%2FJIJn0sZSrBVjGnFdTk5nIKg5oSeZS&X-Amz-Signature=27499247b6b80019f1b1bd62b1d07a5261b8f7e04931afafc05755beaffccd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPBW2TM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHRflT93CfOATJSe43gxvYxR5z0gF%2BHvL%2BZc0%2FYNcAV6AiB76CPW2ct3r2QtxevKIw3zhvPf5Hca1A4YZI6BPE42ryr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM9%2BmUZBJoUHnw94SsKtwDIUPx%2FtSLOR%2B7lWIvRmdg5Xo7Gvyq0kdErgKgzG7Kern9LttTqTduyEtg7%2FJxY7%2BbQ%2B4FuS93g2fPNSdPdcCVuuGBIAtbIet%2B1pqp20rHghkmP8yaGAuazLvqf7W9%2FdLWmAxunT8X1CqDF5g%2FHPU0VE6A9g5cTvoM%2BHtUwgIOrZ%2FSOVjapf58ae6TLzjYQSXFOkNEBA47yQgmvufnFVKMj%2F1vxVWg1KlZ8hdQsadRp8bYB3pOqLb2hyhK1Z8ah%2FyssCEIScJMmQCXBK0PY5g233aF2l6wsTfVb64kVdWopE%2FmsRY%2Fi9YC84p3Q%2FnGxqMJRUPBXTDPDkIwlPp16BzPXaIh%2B8uZKvsE9NkMF4x0ZqbW1%2ByKmBu4BBuTHZ4dhTgH35zEtlczTjrq%2FPuujJecSeyG78CeU1xcf1IvWN2C4WeLDTy7AUXvj0h9RQziCzpvRUgYiG781233oMSxSPt8P7s8iPe6yF6A5GW1c%2B2SBDFoOWb1YHekLU4SWnqlIYgYUqeeDfJ0c7F3WDS7lZg%2F8EMDcdOEenOPPfB7YXa8y5MuplxrBcxp7N0IfgScU8DsVf6TJNccTng0bVNeoSBCWrJ94Iq1YEAKsgFyOqOitJ7nOV1tVXocPKnJ10kwxITUwwY6pgGItM1n3fR0Mh3%2F9Jyv%2BJtCDA9QcfFFm3H1Q7wmd6mPazmcoN0En8YvOFfn45zlmjtELCPomMXJlzW%2BGtsr563dum9CWjXclfL5rZ9upC2tAN9ayFJO3LMq8sN%2Bt3lG50c6gqKAWx4g84sca70Cs1zXVMikd62lFeWkJTN6M4uwopjoNXG0oqj1nzVFWerRWHI0jOaXjicynzerwePgbMZDzItG4%2BhM&X-Amz-Signature=b4fc3773a10afee0e86949b7ff5ebb1afe3a317d790588c28fe04b8eefbc67a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
