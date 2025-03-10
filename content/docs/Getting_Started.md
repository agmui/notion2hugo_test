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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6C2UOTH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGVLvksvDemKI%2BI1FjNSYlKG2prS%2FosAbYkgTR8SUF8GAiAbj7wfIKwyxivwFZtDvcUTtV%2Fs%2F4ipVE%2BeezSOvI8v6SqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZANBGVSWwpBUOgLdKtwD01GR1TvDGZ0SkN%2BnZwBGPHmU6Aj%2BZcDgAQGoKWk6DmfytE7077lXetAyO1RvUil%2Bqa14tkdtBFzOXQwEhR9XJW71UukHUxXaFgmeIzvh5NstI%2F7YwexnuWJsPX%2FqjTIGF%2ByyQhFZ56%2F56hViTDj4d66usieG3ctlQ7fZchOwkXOSt3012DbwNlFKf6zdepKiNgYAduCYWrWXPjlLXmRA%2FNt4nWQijoj64hyVfFCETLtvegxfh904J0jQXlr1%2BkwtzYi5dEDps6BGqYfW0l07Qg65wnERDDeEtpWMfGp1ZtCt2k0CnBQshgrLtDy2BpbzdRbZg7UZrKQG3L4FlpnPyOPi6fHjLRMikjqUdNaxMIgEwJ24wcEwC%2F3Z7I6uTJS3PqzriSedaMssUkJtibHhIbeWIeKqSCh8H1tS4lUTuliC5mmw3WAwTSXEtK7OmcE7cLqIg9uHe4ZIz%2B%2BmOrwiUsRYbl9yh4NA9WYIyhePEKaXjZMRjbqUgzIZ1EqZdP6dF2LenLTPHZjKZX%2BRu3f78OCnzR55kQ3KYKtTAmq4dNn0DwoRUbkQy%2F%2F3sC0SRLfkCiXkaz%2FrL1aWpT7HtC%2FIGNqw6b%2FSiGBDjZmS3lSk1ZMpYqnNbanwb%2Bt0Qlswksq7vgY6pgGlyvv5zKyGlI9nx32f9OSr62DsY7UrD7feMHuMVd%2B9aOjaTX0oVTSk6LE%2B5YhucnXiHXDB4opDBYzbAnx16ek4Myu4WmnPcYN6FK8H0auxgN6Cu1GjBybGV0wmB1qbdkBaY30li68%2FG%2FPqgLCfETXJ%2FUK5w7ZRgAJ6wtDCBbGXNvehjQT%2Fw1ElxqCNggMjxsBTFrwtkMi8bZ9up5SjuMehHEispy3m&X-Amz-Signature=9edd1569559701704114ddff5150a35a8cc49663fb1e2a45a72f4ce4c0cdd9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6C2UOTH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGVLvksvDemKI%2BI1FjNSYlKG2prS%2FosAbYkgTR8SUF8GAiAbj7wfIKwyxivwFZtDvcUTtV%2Fs%2F4ipVE%2BeezSOvI8v6SqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZANBGVSWwpBUOgLdKtwD01GR1TvDGZ0SkN%2BnZwBGPHmU6Aj%2BZcDgAQGoKWk6DmfytE7077lXetAyO1RvUil%2Bqa14tkdtBFzOXQwEhR9XJW71UukHUxXaFgmeIzvh5NstI%2F7YwexnuWJsPX%2FqjTIGF%2ByyQhFZ56%2F56hViTDj4d66usieG3ctlQ7fZchOwkXOSt3012DbwNlFKf6zdepKiNgYAduCYWrWXPjlLXmRA%2FNt4nWQijoj64hyVfFCETLtvegxfh904J0jQXlr1%2BkwtzYi5dEDps6BGqYfW0l07Qg65wnERDDeEtpWMfGp1ZtCt2k0CnBQshgrLtDy2BpbzdRbZg7UZrKQG3L4FlpnPyOPi6fHjLRMikjqUdNaxMIgEwJ24wcEwC%2F3Z7I6uTJS3PqzriSedaMssUkJtibHhIbeWIeKqSCh8H1tS4lUTuliC5mmw3WAwTSXEtK7OmcE7cLqIg9uHe4ZIz%2B%2BmOrwiUsRYbl9yh4NA9WYIyhePEKaXjZMRjbqUgzIZ1EqZdP6dF2LenLTPHZjKZX%2BRu3f78OCnzR55kQ3KYKtTAmq4dNn0DwoRUbkQy%2F%2F3sC0SRLfkCiXkaz%2FrL1aWpT7HtC%2FIGNqw6b%2FSiGBDjZmS3lSk1ZMpYqnNbanwb%2Bt0Qlswksq7vgY6pgGlyvv5zKyGlI9nx32f9OSr62DsY7UrD7feMHuMVd%2B9aOjaTX0oVTSk6LE%2B5YhucnXiHXDB4opDBYzbAnx16ek4Myu4WmnPcYN6FK8H0auxgN6Cu1GjBybGV0wmB1qbdkBaY30li68%2FG%2FPqgLCfETXJ%2FUK5w7ZRgAJ6wtDCBbGXNvehjQT%2Fw1ElxqCNggMjxsBTFrwtkMi8bZ9up5SjuMehHEispy3m&X-Amz-Signature=262ce504ba2f26e9b2852c281f18506c1c088cc367e56d43dd9aaf05e84480f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BA2EK22%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQD8wUCk0pFhR5ClJS4NlhEfU7xym8i7jCmqcoloc8Qj%2FwIhAP2O89NcxgtoGDI1KjCWYyp8k2I6jyL544frKm0JmEmkKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy8ONxFKz2CIGYkmcq3AOXtPEKZvFeI4fQ8lfp%2FGiVOabHMk2Jqci1aqq0Z3tEQh%2BdHszVut7HkjMWk7bs7a%2FZDoD0X7BsOKHmIKiVMZMkeh4QHV6vDFTen%2BlmwBAUd3i2N%2B0bFCdealEK84VM8awJSMU6184UTSYpVTevVjjBym1peTL2csqWNFIoi%2Fo%2B6H%2B3QNF0ElXkXYDwQZzNOaJuzG6PbXL9NmHLpTSe6nprB0wIG0r1eVwToSydatJXc%2BsR3OqqWPBnkAblYO%2Bn7wADV2DTnW3aMQxIw5fXeuUeuA4kZKGxlWdDD4CFghCFk8qZyDJeoKeZBSiVYwQaV3cYLk5M2FHXjozK0Kg6oNl32KfJ%2F0OY2GWMLYxKZ%2BjkA4k0jk%2FJ6LolXHmczVerxweysqo3UkO2kg1V7ihKaf%2FGejiusVyRoWbDsZUxPVUs4yg5Z82DJ46vnu%2BW12NZIb%2BEyMIVED6YmaIIlMhsTAfDYmSbn%2FMessEalAzMHK0ElNWt0Vr8Eq5CItwW7hFh%2BJOUVy0kxhZx28TVisrmUwXurO%2BoMI3e95LsTn9U3W2YAbTi3F4vuvLDVgmUiIq%2FfMMOeyIdIKTG%2Fw%2FPs9bJIFp8FHPCrJCssTTdACcX1KkKqrpOrUjtYWj5weTqyDCby7u%2BBjqkAYfMkLXUvEOt8AV80Regyqhfgn0D5vBGeubWHcKGVDaZ9la184wQDgv8MhGULFxXCk5Ia4s5yizamtyVIDw3p4MdjrGd%2FnOjr%2BmRi2C82J0nr1iD1rX2oBpfUYomnTRDV%2B34nXpFxEKoOXvlsFtlrX3EFr5bTNe%2BYrnw8Rrk1oReNUuLH6hO3lorXCRP13vTNnX2jN%2BdXYOCkKu2aWUkrFVcjG8R&X-Amz-Signature=9c7c2ae84d15fb540f9f013207dc2473151a0635b972c7d27b65ff6709f19c80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP5OIC4J%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCT8a8FLehjQBPuEJgjnpPIDOOQV8JOF6N76GxiMabycAIhAOOQgLn68RsX6pBPXu7aeDz5OcR0uPTj4WsLCty4BBM9KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5nt98lvUlnfVv5esq3ANsgoSxCsGvhVChAtfZ3fJJ7EteM82x%2BHuZCeHBNntSilKPyDr9Y3h8PppCuh6h8gRKwQSWwOUZEulTQhnDDlHu0MvHduq7oiL6HkBu8eQAA5H7DyXtwUxAYJ%2F6lvHrnmD6DdID32qXIpvzi3XYwTlp7AzZz62JZzUSa0NF1ZVHDR%2BrmdDF%2Bo3HQU%2BqMtdyTmZUJ%2B7PbA%2FFPDiAcdeEYIDWSNVo%2FeLasyQlT20CmeadMuTLzL7tK8ounLbsZdjLu490HXzJMWleF4YZph3QsbMx5Dj%2BXWuB5rcEmoo070c46d5InNMORA72tHmQo3H1PKW8NHiqlslVTevp3Kq7Rb5j8mA0y91e2NbjoRvNMP6F23SbA37p6BNT9T4cSkZ%2BE0QkN7t%2FKNn%2FsmUQHcW80sTPlfunKmrp6aLC1mupsgiTN2DGMlR%2B6Naoa8K%2FiP%2FMRKeOKa7frTH6hkoCZXcIBVaJC3m7XDTucq%2BiVOhlKjyzvm2Sl7ZyV4D%2FE9wYJqylYRsqAXopDGdDrTTnq5AIel9b9RSFxx2c5UowlSA96FWls6U9wVBDp7qo5CVa%2FP4rwHC7tVYHz%2Foo09HhdglmBsk%2BcbEFOwARkG79akS4%2BFGEH6%2Bgk8Llg3yEXPJTejDfybu%2BBjqkAYGFF%2B8qgZcukKjw6iWekt3QR16c2T8net9FlcKLn1a2%2F4UCLYcwklRvSn3rC7%2Bx6riajQ3duty8egi4BUebanzJzwnxFywrpHsGHcXlYS5fxD5%2FAm2g1YdPBwRrtX2V4X0QnpHLzYjvzVfrfoivchpZgcWg2KCy9tqjnDhNAwoW%2FSlPOYRe0GXF6On%2BnTBjy0XmyN5a3s%2ByZWpuL4C9pGsQC3W3&X-Amz-Signature=cb08bd519a1527d23492c2e29479788f1543cf4f9a109b390a763f957e9bc436&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6C2UOTH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGVLvksvDemKI%2BI1FjNSYlKG2prS%2FosAbYkgTR8SUF8GAiAbj7wfIKwyxivwFZtDvcUTtV%2Fs%2F4ipVE%2BeezSOvI8v6SqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZANBGVSWwpBUOgLdKtwD01GR1TvDGZ0SkN%2BnZwBGPHmU6Aj%2BZcDgAQGoKWk6DmfytE7077lXetAyO1RvUil%2Bqa14tkdtBFzOXQwEhR9XJW71UukHUxXaFgmeIzvh5NstI%2F7YwexnuWJsPX%2FqjTIGF%2ByyQhFZ56%2F56hViTDj4d66usieG3ctlQ7fZchOwkXOSt3012DbwNlFKf6zdepKiNgYAduCYWrWXPjlLXmRA%2FNt4nWQijoj64hyVfFCETLtvegxfh904J0jQXlr1%2BkwtzYi5dEDps6BGqYfW0l07Qg65wnERDDeEtpWMfGp1ZtCt2k0CnBQshgrLtDy2BpbzdRbZg7UZrKQG3L4FlpnPyOPi6fHjLRMikjqUdNaxMIgEwJ24wcEwC%2F3Z7I6uTJS3PqzriSedaMssUkJtibHhIbeWIeKqSCh8H1tS4lUTuliC5mmw3WAwTSXEtK7OmcE7cLqIg9uHe4ZIz%2B%2BmOrwiUsRYbl9yh4NA9WYIyhePEKaXjZMRjbqUgzIZ1EqZdP6dF2LenLTPHZjKZX%2BRu3f78OCnzR55kQ3KYKtTAmq4dNn0DwoRUbkQy%2F%2F3sC0SRLfkCiXkaz%2FrL1aWpT7HtC%2FIGNqw6b%2FSiGBDjZmS3lSk1ZMpYqnNbanwb%2Bt0Qlswksq7vgY6pgGlyvv5zKyGlI9nx32f9OSr62DsY7UrD7feMHuMVd%2B9aOjaTX0oVTSk6LE%2B5YhucnXiHXDB4opDBYzbAnx16ek4Myu4WmnPcYN6FK8H0auxgN6Cu1GjBybGV0wmB1qbdkBaY30li68%2FG%2FPqgLCfETXJ%2FUK5w7ZRgAJ6wtDCBbGXNvehjQT%2Fw1ElxqCNggMjxsBTFrwtkMi8bZ9up5SjuMehHEispy3m&X-Amz-Signature=cd9a3be7f6880cade607d4921a0d890dbb7f4212f02f807b704d42b0b0a5c858&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
