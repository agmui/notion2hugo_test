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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOABT363%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkh6qND7BCFnzqrBCCIYyFKd2%2BFtF7%2BnjLyoqucnnokwIhAIuNUUBIF5LJh%2FFSDQKfEW%2BeTkQsVOJGc1icXQ9SDg51KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDYWDkGu6S3yU91V4q3ANBWEYfWGY2wdHdLbu6tRA%2Bdwg9gjDXR8AiGQbahlsV0ekWEz6QJfQyZNVbFrandRFl47EDjrxulUHkpduEP4fSXDyogoBEzbimnNvPCtqXYthrIP6jhfHUDUpevl6EsMeOp6lrgdD%2FbWwKVBxSz4lDqzZcMGgZTus2Ra0zFJIJn3t0UcmiixIf%2BMMhPX09FsQMMxlpnNTSYEdDnrQlcxC7f8%2F0aRK%2BXg%2Fwrm%2FXseOXLgyJus9zetHo%2FjDctunKjgpUYpjhmWDPHC8pBxxDBSre6piJw2MMRg61Nev5Lb8LlGueKgQJaWxEJTazJRzxfegk80VaW8IaWtGec3vDA6h8B2SlTV%2BYpUHz4a9prafP%2F%2FBh1cw4cRQu3h7tO2ZfaVTzV25WUwMpK9R%2Bq92SZeYc%2BcXHRhl6FtjfRcUgkoAIIZelEAnnItiDakai5KlrGClelX%2B9%2BttaU9vonk0P7KFCId8lB4HJaaGRgf7%2FdKhZ%2FR0p4aRqTuBsPf5aTQ8%2FDRTIaxltVZ4u5zq%2BV6pXYGBF3O22P1FGVXqHU0eusfzxAvnUghX%2FhUowIdBDpBvrcJ1ktCjS4hCvSwNL4gWP42%2BOcdgbUqhvwLKf0sYFYE1WLUzF6mAm7OHrWqfg0jD%2B3dzCBjqkASt1S3VdqjzEWLL%2Br%2FGZ8IGDRO%2B1qIRkENw8mEWeKDWoKt%2FYYVCPBI1H1A1gYkJswEqcyNxJkKTZbY%2Bx5uziNyo9MnJ9yxZuN6EaZTNQP5oxs6EZpRGKiC%2F1%2BRgwMzUyN79hwXIxogZzkx7gXlWvUXijC%2BqZJoID2Ts4L9ezvE%2Bpt9z%2BTH1bjop%2FTlnaF8IDGNbqXHWjK5J5zkrdHadNTsJU6jDo&X-Amz-Signature=24959aaa0f9c14178e2d5be7aa09ed9b664342face257d6722af75d88dee51e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOABT363%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkh6qND7BCFnzqrBCCIYyFKd2%2BFtF7%2BnjLyoqucnnokwIhAIuNUUBIF5LJh%2FFSDQKfEW%2BeTkQsVOJGc1icXQ9SDg51KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDYWDkGu6S3yU91V4q3ANBWEYfWGY2wdHdLbu6tRA%2Bdwg9gjDXR8AiGQbahlsV0ekWEz6QJfQyZNVbFrandRFl47EDjrxulUHkpduEP4fSXDyogoBEzbimnNvPCtqXYthrIP6jhfHUDUpevl6EsMeOp6lrgdD%2FbWwKVBxSz4lDqzZcMGgZTus2Ra0zFJIJn3t0UcmiixIf%2BMMhPX09FsQMMxlpnNTSYEdDnrQlcxC7f8%2F0aRK%2BXg%2Fwrm%2FXseOXLgyJus9zetHo%2FjDctunKjgpUYpjhmWDPHC8pBxxDBSre6piJw2MMRg61Nev5Lb8LlGueKgQJaWxEJTazJRzxfegk80VaW8IaWtGec3vDA6h8B2SlTV%2BYpUHz4a9prafP%2F%2FBh1cw4cRQu3h7tO2ZfaVTzV25WUwMpK9R%2Bq92SZeYc%2BcXHRhl6FtjfRcUgkoAIIZelEAnnItiDakai5KlrGClelX%2B9%2BttaU9vonk0P7KFCId8lB4HJaaGRgf7%2FdKhZ%2FR0p4aRqTuBsPf5aTQ8%2FDRTIaxltVZ4u5zq%2BV6pXYGBF3O22P1FGVXqHU0eusfzxAvnUghX%2FhUowIdBDpBvrcJ1ktCjS4hCvSwNL4gWP42%2BOcdgbUqhvwLKf0sYFYE1WLUzF6mAm7OHrWqfg0jD%2B3dzCBjqkASt1S3VdqjzEWLL%2Br%2FGZ8IGDRO%2B1qIRkENw8mEWeKDWoKt%2FYYVCPBI1H1A1gYkJswEqcyNxJkKTZbY%2Bx5uziNyo9MnJ9yxZuN6EaZTNQP5oxs6EZpRGKiC%2F1%2BRgwMzUyN79hwXIxogZzkx7gXlWvUXijC%2BqZJoID2Ts4L9ezvE%2Bpt9z%2BTH1bjop%2FTlnaF8IDGNbqXHWjK5J5zkrdHadNTsJU6jDo&X-Amz-Signature=60ab8e5cfdaede290f6bb25a06a85a01c10c3b86399eaa2f1bf50a5eba202bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOABT363%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkh6qND7BCFnzqrBCCIYyFKd2%2BFtF7%2BnjLyoqucnnokwIhAIuNUUBIF5LJh%2FFSDQKfEW%2BeTkQsVOJGc1icXQ9SDg51KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDYWDkGu6S3yU91V4q3ANBWEYfWGY2wdHdLbu6tRA%2Bdwg9gjDXR8AiGQbahlsV0ekWEz6QJfQyZNVbFrandRFl47EDjrxulUHkpduEP4fSXDyogoBEzbimnNvPCtqXYthrIP6jhfHUDUpevl6EsMeOp6lrgdD%2FbWwKVBxSz4lDqzZcMGgZTus2Ra0zFJIJn3t0UcmiixIf%2BMMhPX09FsQMMxlpnNTSYEdDnrQlcxC7f8%2F0aRK%2BXg%2Fwrm%2FXseOXLgyJus9zetHo%2FjDctunKjgpUYpjhmWDPHC8pBxxDBSre6piJw2MMRg61Nev5Lb8LlGueKgQJaWxEJTazJRzxfegk80VaW8IaWtGec3vDA6h8B2SlTV%2BYpUHz4a9prafP%2F%2FBh1cw4cRQu3h7tO2ZfaVTzV25WUwMpK9R%2Bq92SZeYc%2BcXHRhl6FtjfRcUgkoAIIZelEAnnItiDakai5KlrGClelX%2B9%2BttaU9vonk0P7KFCId8lB4HJaaGRgf7%2FdKhZ%2FR0p4aRqTuBsPf5aTQ8%2FDRTIaxltVZ4u5zq%2BV6pXYGBF3O22P1FGVXqHU0eusfzxAvnUghX%2FhUowIdBDpBvrcJ1ktCjS4hCvSwNL4gWP42%2BOcdgbUqhvwLKf0sYFYE1WLUzF6mAm7OHrWqfg0jD%2B3dzCBjqkASt1S3VdqjzEWLL%2Br%2FGZ8IGDRO%2B1qIRkENw8mEWeKDWoKt%2FYYVCPBI1H1A1gYkJswEqcyNxJkKTZbY%2Bx5uziNyo9MnJ9yxZuN6EaZTNQP5oxs6EZpRGKiC%2F1%2BRgwMzUyN79hwXIxogZzkx7gXlWvUXijC%2BqZJoID2Ts4L9ezvE%2Bpt9z%2BTH1bjop%2FTlnaF8IDGNbqXHWjK5J5zkrdHadNTsJU6jDo&X-Amz-Signature=abf37d8a6456a3a2690ed6abec1b231c6ab7585ff1ca67d242c4f3af38e6b2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7RWWIH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQNcHMfAyOFU1WlFn889LfQe4IFC%2B5w5hOaYHOb0fSGAIhALqFBB5d0dsHsylLdvKruYsfBYGIgGTeI8ke%2BFilVRayKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxibWLw6AAr3%2BQJUSIq3AOvbPbeV67TyXlxWSoD%2FXGIQO7Q8CW5G5d1zEuuOGepEcVXY5XY2QghVfN5MEFfqrppmfyAiH4d228TbXZ%2BROCmP6SYJwiKSbuYgnPk5bKcBnsT%2Ba%2BiH%2Bz2pxNPYZ2K1gfqbipFDywoBDj9gHrT0msxuheR%2Fk%2B3PvLayA9vIrbuKCDNqeUdljjfoDC7f59ROx9IOjTsYgJS27hGXHfj7asXZNQmmycsxnfz4tbx3Bp4B8f%2Ba98Y0%2FXzhQPFpfxzuB66CjRa3SZzDWJtaxV3xoLs7GekdUGYjz2S%2BgRJVHg72pSLhpAODLkrs2N6LW1DYkRQIkUGFXtmMQz9j%2BUaBs%2FKmnYvqOonLAXqbZuPykEEt4uSvqIA99JJ1KIdzhbKrIVm3D5wvUIdPTD%2B39yZhWuTqawlQ0x0yVg7moPh2V1V4iBel%2FzvwKwybQN9S8nW0aaubhqWQHOMuK7LsvtKVZ6ScPZ%2Be4y2MSGx%2BnebZqv%2Fmgl7qM%2B9dcpemwFBQ2%2F2kYXD4wVWVI%2FYq%2FQBQCiXg9uCU4VhHnXP1QTc8Mbm17p48CAqbgkxACFYWm0p0NIn%2FU742RzyYzLDtRZ1P6%2B3cITdiVFWh9KLcAUf818HcAy9kPKFxYutpS4pnYbB2zDT3dzCBjqkASHQEIQXKtRD5vT3E2u5wdFlLtCIkQT%2FCMKO2EowBc0%2FBsgp9RkJlJdCcbcjHG1f5bOEdp0WWdN90ph%2FHSIqDz1OlHE%2FMGTN0MkWXlUwJVHnGnFAWJWdhtOGxQfuECG801%2Bqh57zbfJSrlBrAyRNAoICKa3Xf6vlE5sPQ%2BaCxrfhwooBLJLcfh5LQzx182jAPhEaI1FU6M2D91ImrOHKugSmEUYl&X-Amz-Signature=a5b3537fd0455c9c6f7bdb5e2bc517b97762f203b78ed20fc950dfa8cf1f9974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIG52SC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEke9Gz8z9xnmD%2BtxRzQQ0o%2BWBVhteIo27M0pKA%2BSE9qAiEAknlxf5Wipxlkuq2qjUlHNI%2BztRaDl35DLo64HL%2BMwNIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsYY%2B35KrKTz2cusCrcA0a2NtJkdXItmOsyueXCRL6rsXSeiA5z8cmapCjChTxufU%2FXlqz33nWE4vGCrg0mpzlp9Te08P%2FSbH3vTM5xjVMMilBLV1FAPA3q6SyumqTJ639Uui46RlxpDbzL%2B8ugC9k4aWHvmJ%2BabM3qBDwodmpMVu1rsoosg5FoamKzk%2BRSib%2BX7whGL9BqXPfbFYGcqhA7tmNKIMiSPVIHxHdYXPcYmRUw16O5Cvc0Pf7n%2BAj7LjqoVv%2BHN4phzXnGIf4WUVNcQPF2TO2ii81T5NVlp4dl4lSXyy784A0lZ6GdIC2AGv8%2F5in9R%2FEzkYFOc3Ml70uF38wrvM%2F0k5fFeTNSgF58crwbP2tzXnXQKKwugzuDIcuyfx%2B6wqIx3KQepeZiFAHn8Xl2QqCy66TvRh5h1wvNvOSs9GT6qjgQc57m4yRHxJtV4UIKCxcFqC1E6egFDsxeS025foB5YKwmW35EHcJD5vOq52jasgYosBYS%2Bt178JfpYCEDRzknpepEkMudqbTYYOEEPlJfym%2BWgc440Bsubiq%2FFOdl9VcxO1f0LXCrBhL7TSFv8lWDbiTZiYJBKzkry%2FfjQeeoYbK9R4KypgX8raKPV5cQzAUo9tYhIw3acCFq%2BVx0Ba4mLfKyMKvd3MIGOqUBBNNm9K0SaCQ852XEGoEFT1apyIHmyAE6DRTUbXJSux%2FeF3Dc3RSTtfizVsVy61tDEbfSzy78KAVcbyF7npTH5XyOm0WKKuJBZ3a3Kq7mFRaxzeq399kn8meiVBbGth%2Ft6sLV1o7%2Br3cpGqAIsRDQ0gTCqOsjoWfqtyfmUjaghzLfqQurkk2P1dPWPF5sTcobE5%2F8iG3%2FAs9ybzf04AIgO9aXVtks&X-Amz-Signature=e4ddf65864ef9157f23546ef20dbd71f752368a238e77c5092c57016edc37c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOABT363%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkh6qND7BCFnzqrBCCIYyFKd2%2BFtF7%2BnjLyoqucnnokwIhAIuNUUBIF5LJh%2FFSDQKfEW%2BeTkQsVOJGc1icXQ9SDg51KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDYWDkGu6S3yU91V4q3ANBWEYfWGY2wdHdLbu6tRA%2Bdwg9gjDXR8AiGQbahlsV0ekWEz6QJfQyZNVbFrandRFl47EDjrxulUHkpduEP4fSXDyogoBEzbimnNvPCtqXYthrIP6jhfHUDUpevl6EsMeOp6lrgdD%2FbWwKVBxSz4lDqzZcMGgZTus2Ra0zFJIJn3t0UcmiixIf%2BMMhPX09FsQMMxlpnNTSYEdDnrQlcxC7f8%2F0aRK%2BXg%2Fwrm%2FXseOXLgyJus9zetHo%2FjDctunKjgpUYpjhmWDPHC8pBxxDBSre6piJw2MMRg61Nev5Lb8LlGueKgQJaWxEJTazJRzxfegk80VaW8IaWtGec3vDA6h8B2SlTV%2BYpUHz4a9prafP%2F%2FBh1cw4cRQu3h7tO2ZfaVTzV25WUwMpK9R%2Bq92SZeYc%2BcXHRhl6FtjfRcUgkoAIIZelEAnnItiDakai5KlrGClelX%2B9%2BttaU9vonk0P7KFCId8lB4HJaaGRgf7%2FdKhZ%2FR0p4aRqTuBsPf5aTQ8%2FDRTIaxltVZ4u5zq%2BV6pXYGBF3O22P1FGVXqHU0eusfzxAvnUghX%2FhUowIdBDpBvrcJ1ktCjS4hCvSwNL4gWP42%2BOcdgbUqhvwLKf0sYFYE1WLUzF6mAm7OHrWqfg0jD%2B3dzCBjqkASt1S3VdqjzEWLL%2Br%2FGZ8IGDRO%2B1qIRkENw8mEWeKDWoKt%2FYYVCPBI1H1A1gYkJswEqcyNxJkKTZbY%2Bx5uziNyo9MnJ9yxZuN6EaZTNQP5oxs6EZpRGKiC%2F1%2BRgwMzUyN79hwXIxogZzkx7gXlWvUXijC%2BqZJoID2Ts4L9ezvE%2Bpt9z%2BTH1bjop%2FTlnaF8IDGNbqXHWjK5J5zkrdHadNTsJU6jDo&X-Amz-Signature=194e43bf53a2deb0a4cc5a33b7465992db0587e8a56a3cae2ec85a1c712e4e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
