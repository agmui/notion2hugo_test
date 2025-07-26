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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGCXFOU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDCF2PZmriRFBITmv8pLq7U%2FuNJ%2B5TN0Q1TMfp7lZAAIAIhANwqDg3MDZy%2B1IJNPvUiTvdkEm1sr75AREd87ro5%2BVnCKv8DCFcQABoMNjM3NDIzMTgzODA1IgyajdxBR8EiAvCbVDEq3ANF0GYuo2FlFYGL8GSz2lSoB2QozPG3PdOQqLEoeHUQHjTsEK6816GP4nty2cCAfKWUQ4rF5dhfUtkl128mlVpCy9nFrKwGAmBZCUpMn1w1d0W1pZZyB6guUEL8JhRS8WdTXcIXxzBV9d6Qo3S3FXwhFo%2BXJtS%2BmCzKxt0t3lDDMztR8Ub6Tv1O7qKDIL%2B396zwD6ciPr0ZxT%2BsVJiL9RQZtWabtQYwVRuufBUibrIhOrKybD9IyIP3ngc2kUa5EM9JcB1TEhEhuGrfsZcDwODZbkEjmiQ5dxfqLGHKebBmaZG5kQMHpl7nmNkgFGES3mr2JANsN50HGsdEtum3NHPrguI%2FWE3wNbVkjIgdiQGYVykgS%2FDYdH1bd7%2Fv11RfR4JYHvU4G8gYPguyEwWqYa7aXL%2FzUs%2BrNKIXv1Mfzuv%2FkjA%2FIQ%2BwvalJr4a4FnzotErlxioXFj0%2BYcWDvL%2FbFniVdR9nZhCDvASUNygPOCCUWrAGX1SjhWT8sQD92bx6fpnoh3SCAeZCyn2ydYGCbVB4TobVkcaJSBhBGjqPny6GcfRVv%2B1hEtE%2BL1Ba1hoc2nsw8HWRE5bIjaC0L1goUMEW79HcRQgfzux1079IhyHbCP4Fs7ixYY66zltMGTCH4pHEBjqkAUnRPVIQ9kEShf8WCMaGY0fyNsHqmWWP%2B5BUE1SW6N88D0%2Fzebs3KgUOX9VEnofvYbP%2BJKGz9pTc0nfStWqWaAONMz6dc82KFqUeto24gZIz6ReY8n8Gt%2B1xVI3ReSJTRp8tlRnIwiheXSUpl3XW71%2BVT%2BnHEP%2FTRWjGmk5CKaZNS5Ju9Bc32q54ltNZcSDaXTPjaHf914yltevUtPhJXdZeSv4t&X-Amz-Signature=23caf13af5f25c9b95f0fb58140bc4c102f00b9ac86c0a1d9e03e21e14e4f1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGCXFOU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDCF2PZmriRFBITmv8pLq7U%2FuNJ%2B5TN0Q1TMfp7lZAAIAIhANwqDg3MDZy%2B1IJNPvUiTvdkEm1sr75AREd87ro5%2BVnCKv8DCFcQABoMNjM3NDIzMTgzODA1IgyajdxBR8EiAvCbVDEq3ANF0GYuo2FlFYGL8GSz2lSoB2QozPG3PdOQqLEoeHUQHjTsEK6816GP4nty2cCAfKWUQ4rF5dhfUtkl128mlVpCy9nFrKwGAmBZCUpMn1w1d0W1pZZyB6guUEL8JhRS8WdTXcIXxzBV9d6Qo3S3FXwhFo%2BXJtS%2BmCzKxt0t3lDDMztR8Ub6Tv1O7qKDIL%2B396zwD6ciPr0ZxT%2BsVJiL9RQZtWabtQYwVRuufBUibrIhOrKybD9IyIP3ngc2kUa5EM9JcB1TEhEhuGrfsZcDwODZbkEjmiQ5dxfqLGHKebBmaZG5kQMHpl7nmNkgFGES3mr2JANsN50HGsdEtum3NHPrguI%2FWE3wNbVkjIgdiQGYVykgS%2FDYdH1bd7%2Fv11RfR4JYHvU4G8gYPguyEwWqYa7aXL%2FzUs%2BrNKIXv1Mfzuv%2FkjA%2FIQ%2BwvalJr4a4FnzotErlxioXFj0%2BYcWDvL%2FbFniVdR9nZhCDvASUNygPOCCUWrAGX1SjhWT8sQD92bx6fpnoh3SCAeZCyn2ydYGCbVB4TobVkcaJSBhBGjqPny6GcfRVv%2B1hEtE%2BL1Ba1hoc2nsw8HWRE5bIjaC0L1goUMEW79HcRQgfzux1079IhyHbCP4Fs7ixYY66zltMGTCH4pHEBjqkAUnRPVIQ9kEShf8WCMaGY0fyNsHqmWWP%2B5BUE1SW6N88D0%2Fzebs3KgUOX9VEnofvYbP%2BJKGz9pTc0nfStWqWaAONMz6dc82KFqUeto24gZIz6ReY8n8Gt%2B1xVI3ReSJTRp8tlRnIwiheXSUpl3XW71%2BVT%2BnHEP%2FTRWjGmk5CKaZNS5Ju9Bc32q54ltNZcSDaXTPjaHf914yltevUtPhJXdZeSv4t&X-Amz-Signature=677c9d1f38d83fc9e891c1779c7d5f2a1732467dff58fe06d4bd1ea1df64b140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGCXFOU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDCF2PZmriRFBITmv8pLq7U%2FuNJ%2B5TN0Q1TMfp7lZAAIAIhANwqDg3MDZy%2B1IJNPvUiTvdkEm1sr75AREd87ro5%2BVnCKv8DCFcQABoMNjM3NDIzMTgzODA1IgyajdxBR8EiAvCbVDEq3ANF0GYuo2FlFYGL8GSz2lSoB2QozPG3PdOQqLEoeHUQHjTsEK6816GP4nty2cCAfKWUQ4rF5dhfUtkl128mlVpCy9nFrKwGAmBZCUpMn1w1d0W1pZZyB6guUEL8JhRS8WdTXcIXxzBV9d6Qo3S3FXwhFo%2BXJtS%2BmCzKxt0t3lDDMztR8Ub6Tv1O7qKDIL%2B396zwD6ciPr0ZxT%2BsVJiL9RQZtWabtQYwVRuufBUibrIhOrKybD9IyIP3ngc2kUa5EM9JcB1TEhEhuGrfsZcDwODZbkEjmiQ5dxfqLGHKebBmaZG5kQMHpl7nmNkgFGES3mr2JANsN50HGsdEtum3NHPrguI%2FWE3wNbVkjIgdiQGYVykgS%2FDYdH1bd7%2Fv11RfR4JYHvU4G8gYPguyEwWqYa7aXL%2FzUs%2BrNKIXv1Mfzuv%2FkjA%2FIQ%2BwvalJr4a4FnzotErlxioXFj0%2BYcWDvL%2FbFniVdR9nZhCDvASUNygPOCCUWrAGX1SjhWT8sQD92bx6fpnoh3SCAeZCyn2ydYGCbVB4TobVkcaJSBhBGjqPny6GcfRVv%2B1hEtE%2BL1Ba1hoc2nsw8HWRE5bIjaC0L1goUMEW79HcRQgfzux1079IhyHbCP4Fs7ixYY66zltMGTCH4pHEBjqkAUnRPVIQ9kEShf8WCMaGY0fyNsHqmWWP%2B5BUE1SW6N88D0%2Fzebs3KgUOX9VEnofvYbP%2BJKGz9pTc0nfStWqWaAONMz6dc82KFqUeto24gZIz6ReY8n8Gt%2B1xVI3ReSJTRp8tlRnIwiheXSUpl3XW71%2BVT%2BnHEP%2FTRWjGmk5CKaZNS5Ju9Bc32q54ltNZcSDaXTPjaHf914yltevUtPhJXdZeSv4t&X-Amz-Signature=cbf568ef43efb3a260c8fde2bf5ccd015be16cbb7a29946a9c0d2f9ea03fa5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMSZUNX3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDLauwu2%2BagCEV6MPv1mPO9UKZnUiAbq1Q3SqYWy89dnQIgB%2F8xMWcGVtA0FapcJrDF36Q4AObMq1d%2B3gUF9nSC1YAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDARWWGBLb5HsMN3QySrcA8kJyfLkEPgNjeoIIArG6zzKu5IyEpovv2vKdOOSpdmkkambpWIlBKLdomKnBYh3kVaCQ9YARM9OZxFKYVzjx4mCDm7yjwdiUTC7kh3PpNOA5ZM3ap8ZurwFPs2bAP%2FW5HQjLBYeL947VpT3dnDCugNERsX%2FsD%2F4iwuKCIwo8hc1VRjf3x63M%2FmTPye85DPyLlYXTwxaRWV7FwLcW1cX8rs%2Ba%2Fz3gm6EnQ98OeiSHLTEZRe1fp78sIhjHbRMKCYQilitnBD5fWPtUEelQ7v5Jp7SU0C8xh4q4QHOnqKPSoRmFxLIwC7CP2c1kYK%2FS1CDIHWlUoo4Dd43iGV5RSONTGloYU67%2FJ9mopytqiyohec6CFLBwPqHy%2FI%2FYdUXxVEhwvyd7qGRqO1z0JyePXXWyRt9CPgPqNJsm1pdP6BOsHIZcha5k6U1cx7Vh6qwL55GgWMRx8346N50sbpY2KWldnGWTmSBr%2BtfA1YY%2FOLZNKTWXYlCqEG%2BATDVE6WixhE45JyqSBYt1XKn9loiTfIxhKGQcIOZtxIGAOfM3fNGaAhWJmbs2iXjNyquUb%2FYAkYF4kCTxkIK1bkTlKxv4l2ty%2FDxk32QbI7S4qUYoeUsbSwrkLgBetUsSGL7dQ0pMO%2FikcQGOqUBHgnMBkFcaT1NErM%2Fy0awIHL%2BBFmJxnjUhoMQLgBFfcQ2hlnQb6beyz9YKQbO5eyKeoxEyfwKeTk9d8WFF098JEMT3cvXc%2FR5M4twpIbiLn6k7OyImROgAeSY%2F0941a8PRctsdoXT0QOGC6jZqaJ2wzW6gcTLPW98i4UXx7CFixvpZUwPE%2BdG17lT0qpfFtDHQRLnSpRpFNqbrB9l0NzBfIbXctXs&X-Amz-Signature=a1d74d4ef859432f4f39e4d2c2320de00fc1c2d343f02a0a408114d0c852779c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3XV5UY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEJWfPUuiUlyW6Mvx3Tqggis%2B%2BxE%2BLbLDJqPjbl%2FJEPVAiEAugOSFPcr5yzjPzrsfroO%2Fvcm%2FzL3oTvlh8y%2B%2BA86WJYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIwLPSpjMmMsLittFyrcA0IkBO%2BbT07Idmci5qRqntZSgwPUOnERL%2FLpzqA0UawZsMgV93wmh%2FQEDOUHGprBDezTg2G6MJSiJYRGU2SCBkk9mCuujb%2BQngzUKezD6y0JHnPc7xfOVEZrZnfyhnp9eb7CqyanTitA4mtw97EiIOpweDL5y0uzwOW3516wtAEXJRb%2BLLKuGeyWF0%2FsoOx027apit0rVoQyAhwz3XxYk4pu%2FW%2FKoLRqITlopDnSrrZZ4%2BOnrD8DjzqOpSmZb6kbrOIO9xHqK%2Bt2rmmiDn27fOgWiM7gfgik6SmUAq2Y0xZ%2BDf76BUv1fI4cEtdf4ifscU0%2B2KMvGZYQrWMKonWYmVQgZdckFZ6FUzQJT9uDigDM9BV7yVPBbqdXj6ChqhG1vLN4jc1GflwZEMFzYVMBgGWXFm%2BIaSWg28A3D9ANwKGVklffGOZZolqlYJKIEMDy6GE1FtAaKWT8rB1oXIKMQwZ4OlYN9Rs1%2FQ1KDAIM5E0%2BqyjydeCGbF%2B49Lx16IlA2AYPoWPnUSyHIZq8pd55DxQEZ5Y8cEQxi14isIyEfVmMhUzTk0wyPfnD6nYWeiWwU2KmxHvjTR93oOqhTgWCdNepXyfRfXs7fzgoxgt%2Fl2AfuZ%2BTTazx2qjJ427cMIrikcQGOqUBqHjTTOgMKrPl0%2BZ8QkSkVGdqj069v2Lkxt%2FNJPvK9lR2R5vLZhiC3A0iMFs0MSPN7s44Bvum7DoIYVnbIwUgeR324uWkIm%2BDQHRZao%2Bz7s52DDddyiSH%2Fi4fxtTW7qwHJKPYt3d2OguQMq%2BaKEUxLRdnW%2BHV2jNzh3YsQgCuspD6nF7fxT4jpCUh5vGiMUheQxxfUxG2puH6FAx5Y2CMr8r5T9c8&X-Amz-Signature=e96c65345d4e594b2469cab5b6ec802fdde53ae90afd673ee69f42f3bfb9bb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGCXFOU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDCF2PZmriRFBITmv8pLq7U%2FuNJ%2B5TN0Q1TMfp7lZAAIAIhANwqDg3MDZy%2B1IJNPvUiTvdkEm1sr75AREd87ro5%2BVnCKv8DCFcQABoMNjM3NDIzMTgzODA1IgyajdxBR8EiAvCbVDEq3ANF0GYuo2FlFYGL8GSz2lSoB2QozPG3PdOQqLEoeHUQHjTsEK6816GP4nty2cCAfKWUQ4rF5dhfUtkl128mlVpCy9nFrKwGAmBZCUpMn1w1d0W1pZZyB6guUEL8JhRS8WdTXcIXxzBV9d6Qo3S3FXwhFo%2BXJtS%2BmCzKxt0t3lDDMztR8Ub6Tv1O7qKDIL%2B396zwD6ciPr0ZxT%2BsVJiL9RQZtWabtQYwVRuufBUibrIhOrKybD9IyIP3ngc2kUa5EM9JcB1TEhEhuGrfsZcDwODZbkEjmiQ5dxfqLGHKebBmaZG5kQMHpl7nmNkgFGES3mr2JANsN50HGsdEtum3NHPrguI%2FWE3wNbVkjIgdiQGYVykgS%2FDYdH1bd7%2Fv11RfR4JYHvU4G8gYPguyEwWqYa7aXL%2FzUs%2BrNKIXv1Mfzuv%2FkjA%2FIQ%2BwvalJr4a4FnzotErlxioXFj0%2BYcWDvL%2FbFniVdR9nZhCDvASUNygPOCCUWrAGX1SjhWT8sQD92bx6fpnoh3SCAeZCyn2ydYGCbVB4TobVkcaJSBhBGjqPny6GcfRVv%2B1hEtE%2BL1Ba1hoc2nsw8HWRE5bIjaC0L1goUMEW79HcRQgfzux1079IhyHbCP4Fs7ixYY66zltMGTCH4pHEBjqkAUnRPVIQ9kEShf8WCMaGY0fyNsHqmWWP%2B5BUE1SW6N88D0%2Fzebs3KgUOX9VEnofvYbP%2BJKGz9pTc0nfStWqWaAONMz6dc82KFqUeto24gZIz6ReY8n8Gt%2B1xVI3ReSJTRp8tlRnIwiheXSUpl3XW71%2BVT%2BnHEP%2FTRWjGmk5CKaZNS5Ju9Bc32q54ltNZcSDaXTPjaHf914yltevUtPhJXdZeSv4t&X-Amz-Signature=942827ee31ee4227e74d82ed9aaa94c9cac87b81f618acc4f1f30916145616af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
