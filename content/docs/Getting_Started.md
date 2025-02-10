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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDVBQLX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2Fp8a7JGvLz3OPiYkAUfrwErzDOroq%2Bv3zp9UIcx7IgIhAIlcesBwsOS9RJmA6qmIzoQDUrm749tfkSiLn7YV1fUpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwR%2F4wnZ4C2%2BvDeFUq3APg5mqSBqUzfvprcBAvp8mzc5XDs8zAWafUOb%2Biep2J27%2FGkg1NYxXmcO%2BEXmmX2YYCa5u5KBE8TFU8VJUHYWW9h5drf8QonztWdV89x9ax2L%2B8oDIGnDJZrEtN24eXjD6mh7KytZ1nN33Jzc%2BtR%2BYs2hwFypaKYU%2BFi7TVnH2UUiQ2qRN2ejK7SIf50FAYZ2wW6rT1ovB%2FcTkV4vo67V2JZr%2Fh6gbFKizIR513Y3AW54fUghcSU%2BI1Q2ReOmZJGQq8PoSBEjtQlAXCAXbjnhTbxYzW%2BuMqhv6yldWTmxs8Y59fI4TeBhNNWpMt3FS3f%2Fqc46KkF6qAg7z6eX%2BGQzMB%2Bk3Ljc0JQqPXiFaiYHea2coM1nuD3C22naG5Or0ff1rt7JyJ%2FFet6FnCgLZiHA%2B5f2xR%2FeVkJuWJ4EAM0KY8QyQZ3shBPzh%2F1Bu7M1PHErqJYQqYKl1ZxvhRcM0DsNqswl1XdWVvJuLxmo6nWfpsj5U2QNhS%2B9zx%2FYZu6ds13cgsy390HBYMILEjBjIsR0PHKZitqaXykJXLPZbey5Ns%2B5LkVEbpDMdxqYYVfgRV6VopagPer%2FYNkrACypdjk9M%2B5ffxmsJ%2BHbXFMrAc9PlVQqG%2B4MXXDPBjMD1wBjClrqe9BjqkAT79PitC92XUygQnsKGURKMzXhAPCRRLpGc4F4tzgltwu8dGzcAAt%2BVWnjzVnReZjVht8zDMxEdya1jaLanFRk1XWEBQe%2BInNZ7YPUfd%2FxWogStUsapYib8BcaBLk5rxizKs7Nulb5MQ9AQ8Op2OM%2BnDENHl2tbv5JOTRb8rnEiG6w%2B%2FJ63Owxg%2FLk8yAbKRgTw9nLZbxKEtc5JpO3B9J%2B24fSwj&X-Amz-Signature=8e9c1e5dd4ce05eb44e752016eb53629e574e3e33718cbe0a7aa15809dfeecfd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDVBQLX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2Fp8a7JGvLz3OPiYkAUfrwErzDOroq%2Bv3zp9UIcx7IgIhAIlcesBwsOS9RJmA6qmIzoQDUrm749tfkSiLn7YV1fUpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwR%2F4wnZ4C2%2BvDeFUq3APg5mqSBqUzfvprcBAvp8mzc5XDs8zAWafUOb%2Biep2J27%2FGkg1NYxXmcO%2BEXmmX2YYCa5u5KBE8TFU8VJUHYWW9h5drf8QonztWdV89x9ax2L%2B8oDIGnDJZrEtN24eXjD6mh7KytZ1nN33Jzc%2BtR%2BYs2hwFypaKYU%2BFi7TVnH2UUiQ2qRN2ejK7SIf50FAYZ2wW6rT1ovB%2FcTkV4vo67V2JZr%2Fh6gbFKizIR513Y3AW54fUghcSU%2BI1Q2ReOmZJGQq8PoSBEjtQlAXCAXbjnhTbxYzW%2BuMqhv6yldWTmxs8Y59fI4TeBhNNWpMt3FS3f%2Fqc46KkF6qAg7z6eX%2BGQzMB%2Bk3Ljc0JQqPXiFaiYHea2coM1nuD3C22naG5Or0ff1rt7JyJ%2FFet6FnCgLZiHA%2B5f2xR%2FeVkJuWJ4EAM0KY8QyQZ3shBPzh%2F1Bu7M1PHErqJYQqYKl1ZxvhRcM0DsNqswl1XdWVvJuLxmo6nWfpsj5U2QNhS%2B9zx%2FYZu6ds13cgsy390HBYMILEjBjIsR0PHKZitqaXykJXLPZbey5Ns%2B5LkVEbpDMdxqYYVfgRV6VopagPer%2FYNkrACypdjk9M%2B5ffxmsJ%2BHbXFMrAc9PlVQqG%2B4MXXDPBjMD1wBjClrqe9BjqkAT79PitC92XUygQnsKGURKMzXhAPCRRLpGc4F4tzgltwu8dGzcAAt%2BVWnjzVnReZjVht8zDMxEdya1jaLanFRk1XWEBQe%2BInNZ7YPUfd%2FxWogStUsapYib8BcaBLk5rxizKs7Nulb5MQ9AQ8Op2OM%2BnDENHl2tbv5JOTRb8rnEiG6w%2B%2FJ63Owxg%2FLk8yAbKRgTw9nLZbxKEtc5JpO3B9J%2B24fSwj&X-Amz-Signature=62e9319d1df05389f4f9fe5d2814255217f7e7c454c8c93a720e6fc452929daa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WW4WRE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwWPnSdBb%2BgEkUXOiMmLeoBN5H7UfMzM9leAO4hfbrygIhAMa%2FQrxuPyTwPaI%2BXEShhGYB6xng3ls22QJboJujRn3ZKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFuswQaeopZpyAziEq3AMcbl9DPK5F63beTRldu4cCRbCdyYosnxJ%2F9rv2hO32PuAy94bTl1i4cWbPaiTvCYlredZAFHsa%2BM8DJ9OBp5c%2BL2%2BiS%2FsvDj1N%2BcKemXkxmBnBue23oMY7z%2FSNSASK46D1LpW0%2FDlnpTUi7e%2B0Feok8%2F86jRm1aDh33JouTcUQgJRKuQDtEToxXdSQC4Po%2BIhCiYexNvl0rCQp71r6R%2FhkfKTbokiFzXPsLQg5qE%2B967RBtym2mQ7yW76qBbqHKxu3mVRj0iDRR%2FsHXj9hmFkFEeA7z24a3Ug0%2BaZhyRXTVY9jkmLAciAEwjZlJzabAhGdd3RFQFJ2EwhoN2jQlmjuhve3fnovtYWkmM0huAd2VnPWSdFtu829YUNsOXIDJvCscx5gCHY9mUJ%2FF4hnQ%2BttDs%2Fj4kSHJSJ8vI1VZu%2FPGxzBuRmfFHagDL5gqo51nEkhXjCw1opnJGj5NyEbT4w5aqnyRzsjgNqgl585cauK5taQTHA1Ku7Epdzd9xSt91N1nLrfrJ8AwebIAdGcWhCKn9jv2ECs3MNNunogF7r%2FenhMV4G%2BsyCV57I4lvJD%2BCIQK0rAsMnhFqSBjfJgxFJ5dF99%2BPTx0IIe2rC6LkJiqnB3JwL6zQNtRaHdsjC3rqe9BjqkAeUNRONu%2Bd%2Bn5slZS8IwP4V3Hqetc7Fx9b%2BhH28jrM4dvjUREQUbnNYs9MPe%2FS2SHZfPx9bKv6r0DxA12rkRcDTJ1YJQUA3v%2BLZsGmXSkDSOM81ZOtmBRh7ftp85kr1Mrr3oFcZld%2B89TwDVYbxYgdWNtUvn2j1Zurda%2BlWPB23vB08caEoq78sw2DGM5VgNzNThb8vYQlGdyYf03yheQFKMBStg&X-Amz-Signature=65303108b0319b6c3447761fb0f01542c2aa6770d95535788ea643c69a1e444e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLGAMKE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFU9DiFoxXLQu95idkZvUUNteOAAWRI8%2FbxmMq8rT4PQIgKiFv0xbSquu1iqgGBqgVP4l7nWCMdwxHQVtDaBDCDIoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA9EmQqBrOI1mOQ4CrcAwQwKQ%2B60k6Vq41WKwlMMWA6xfPbE768Aj7CkD2ujuRcF3el6ABskNowRq6Pd43pAkbP4JQe5BjPnRh8DuyDmU6hN%2FNk76KMatW8szeI%2BNRxE41GKE8ywjsv8efTYddi1A9cPS4%2F6Mqsj0WuvuryDFDKZmflEsuysADoPULxEN%2Fu5Spv9j0crxuIV%2FfGxW3QOCSX9o4nAZds8gs9iO%2BT%2BOwkK1UTo0rzd1xwNUQAceqY0%2FNEEd7cJZD%2FXJHqJXN1oFc%2F2sH345GvlJK4LDB4ucPa%2FcX%2FwH7p0aErscq9pEntKQO3RxJ0Raq1diGaL%2FkYlkZnTLGpfTZ5XPPjJNh9Ovx7MB%2FHSUM12NekiMH1Zv5UwovjrB6xh56%2BcUXZHxLjoc8k8oZ1aoIW4%2F6oLQwmWze4HIFIven8tnEqg%2FfoUK0QLkKHPlDYFTDB7hONTmipQiUqeDgGJXWQrRMqHY%2BVnOs4rB2O9ZBBfiAGXRelxkFjUe8PMs7XLHolI%2FdRtMDFdQyI3Mg8VLKh3eyk2hk5AhjeinEj15YYxoxohPtT06nDJcDdi5Phl2bd1OFfrNY50uTCk%2FksHUGG%2BZCMPI%2BSL%2FA6Z8morfcF8qaxCDcGIaGVC%2BEttgA1thNdSvJSMPGtp70GOqUBlXOIc4uG7MOgqq%2Fd6yfNFdke4jRuQ0JAVP1g0ISNiEC2lq50DW4F%2FRT%2BX9mSdURqrAZctO8st58M%2Fx%2F7xxZw%2F5b0SuOAcOsSICv1M0QHxqz53uVBvFVzpXMec6kcFe9Tia5Z5nVnpC4aPDnvHoV7q94xh8hu%2FNBAwCIuEyRB3nzdxcyLYP%2ByC5VQo9AHJXTizuzHDEFGBQTYg0RlvRWYNO6lWn1X&X-Amz-Signature=4b46eed1656096ab2d9cbab3d9793ee92cd6d4fdcf7c7f4d84baf2795620f182&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDVBQLX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2Fp8a7JGvLz3OPiYkAUfrwErzDOroq%2Bv3zp9UIcx7IgIhAIlcesBwsOS9RJmA6qmIzoQDUrm749tfkSiLn7YV1fUpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwR%2F4wnZ4C2%2BvDeFUq3APg5mqSBqUzfvprcBAvp8mzc5XDs8zAWafUOb%2Biep2J27%2FGkg1NYxXmcO%2BEXmmX2YYCa5u5KBE8TFU8VJUHYWW9h5drf8QonztWdV89x9ax2L%2B8oDIGnDJZrEtN24eXjD6mh7KytZ1nN33Jzc%2BtR%2BYs2hwFypaKYU%2BFi7TVnH2UUiQ2qRN2ejK7SIf50FAYZ2wW6rT1ovB%2FcTkV4vo67V2JZr%2Fh6gbFKizIR513Y3AW54fUghcSU%2BI1Q2ReOmZJGQq8PoSBEjtQlAXCAXbjnhTbxYzW%2BuMqhv6yldWTmxs8Y59fI4TeBhNNWpMt3FS3f%2Fqc46KkF6qAg7z6eX%2BGQzMB%2Bk3Ljc0JQqPXiFaiYHea2coM1nuD3C22naG5Or0ff1rt7JyJ%2FFet6FnCgLZiHA%2B5f2xR%2FeVkJuWJ4EAM0KY8QyQZ3shBPzh%2F1Bu7M1PHErqJYQqYKl1ZxvhRcM0DsNqswl1XdWVvJuLxmo6nWfpsj5U2QNhS%2B9zx%2FYZu6ds13cgsy390HBYMILEjBjIsR0PHKZitqaXykJXLPZbey5Ns%2B5LkVEbpDMdxqYYVfgRV6VopagPer%2FYNkrACypdjk9M%2B5ffxmsJ%2BHbXFMrAc9PlVQqG%2B4MXXDPBjMD1wBjClrqe9BjqkAT79PitC92XUygQnsKGURKMzXhAPCRRLpGc4F4tzgltwu8dGzcAAt%2BVWnjzVnReZjVht8zDMxEdya1jaLanFRk1XWEBQe%2BInNZ7YPUfd%2FxWogStUsapYib8BcaBLk5rxizKs7Nulb5MQ9AQ8Op2OM%2BnDENHl2tbv5JOTRb8rnEiG6w%2B%2FJ63Owxg%2FLk8yAbKRgTw9nLZbxKEtc5JpO3B9J%2B24fSwj&X-Amz-Signature=da4863c02e78df9fd32ddbd5869ce7fb0b0903f8c88d64cb329a9f11c396c231&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
