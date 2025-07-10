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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3CI7BBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL5NwPJlBRtdGXSLmGvCWwPhFLOfrpaYX3HLI%2BoNybbQIgLbZViWKZnZSbvu%2BdMGcUROXIK4M7bV9iaBZRpv5gUMoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSW4x0UDX5vuuVtircA%2B3CPvUDo%2BEVSQ5AgvKugMjl7umA%2Bh8JSHLKtvVu%2Bjk2UrFtuyFlozoQqxVIdQqcA08WYG3akTqDTFvW4uh5Xyi3LyjK%2FMWIJnJJMwFRQw%2BXVAv4LeA34I13S3JRYsSpoqEPIeJKUj01YktNa6aQGhsYvK%2BFCDHLCEeWDZr2gyRyHN%2F3uqmd%2BqifP6rbzY8SPJK%2FoK6DGqXh0%2FZc%2FSAeCPU2WKA2t2Iln6%2BFpZBPW0U78I0SFvAy98y8Dvj18oSCd6ublEv7ln4sflEJdRzDxMD9sv%2FopUC5Np1CB4U6Xv99ZOjKy3HSyDemd7AxTi6YKtwHlz0AAE0DW%2Fpdb%2FCA1KPI9Vj6pGsSQnMEEK8UTjWukdWfs1suit14isSMeX8nmo7W%2BOIfYuANUytuCTENhLB94XosjpK4zJ55dULJreWcL17ZBSff70F8hQi4sZGbE9AYnVpoUMMjGsPPmtk3mdb95xgiMuR1Fqo1Jl%2FlUdEZhC2U1wP%2Fi68V6Wg5HRWr0MRcGLtaNdX42EUXpmLj7eJeAD4CdmL5Iy%2F4719HBYGjAJAUWVRm3yb6uYjl0DwtTgWKi3rmPZZytW8mIpcSpbKG8YeqVtqTkPNYymGknBPIF3seAMGZJlvXRPZMMMiBvsMGOqUBHm0vWK6k8lqY%2F4%2BLep6VcM%2BWXlFklDeUKELkCt7gxwzCx%2FfaiaDFf1E40ZBOEt%2BVijGl9nNjOvISTH1NTsEWlbCdtHYzVAsrOVvqu5qqQct4574BCaASZmanEUFVBwIamUbSUQuoLkjB8rEWKiul1kRy%2Bt%2Bqf3gC8491XmoKvtq96670cpTenTbAa8Te0eJTmxfQWU8aNGoyjKIRRyk1k4%2BmYg8N&X-Amz-Signature=b378cdb198262423de8e4a96eac14a03a617ed48aeab2e2ad2dce608fd67e922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3CI7BBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL5NwPJlBRtdGXSLmGvCWwPhFLOfrpaYX3HLI%2BoNybbQIgLbZViWKZnZSbvu%2BdMGcUROXIK4M7bV9iaBZRpv5gUMoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSW4x0UDX5vuuVtircA%2B3CPvUDo%2BEVSQ5AgvKugMjl7umA%2Bh8JSHLKtvVu%2Bjk2UrFtuyFlozoQqxVIdQqcA08WYG3akTqDTFvW4uh5Xyi3LyjK%2FMWIJnJJMwFRQw%2BXVAv4LeA34I13S3JRYsSpoqEPIeJKUj01YktNa6aQGhsYvK%2BFCDHLCEeWDZr2gyRyHN%2F3uqmd%2BqifP6rbzY8SPJK%2FoK6DGqXh0%2FZc%2FSAeCPU2WKA2t2Iln6%2BFpZBPW0U78I0SFvAy98y8Dvj18oSCd6ublEv7ln4sflEJdRzDxMD9sv%2FopUC5Np1CB4U6Xv99ZOjKy3HSyDemd7AxTi6YKtwHlz0AAE0DW%2Fpdb%2FCA1KPI9Vj6pGsSQnMEEK8UTjWukdWfs1suit14isSMeX8nmo7W%2BOIfYuANUytuCTENhLB94XosjpK4zJ55dULJreWcL17ZBSff70F8hQi4sZGbE9AYnVpoUMMjGsPPmtk3mdb95xgiMuR1Fqo1Jl%2FlUdEZhC2U1wP%2Fi68V6Wg5HRWr0MRcGLtaNdX42EUXpmLj7eJeAD4CdmL5Iy%2F4719HBYGjAJAUWVRm3yb6uYjl0DwtTgWKi3rmPZZytW8mIpcSpbKG8YeqVtqTkPNYymGknBPIF3seAMGZJlvXRPZMMMiBvsMGOqUBHm0vWK6k8lqY%2F4%2BLep6VcM%2BWXlFklDeUKELkCt7gxwzCx%2FfaiaDFf1E40ZBOEt%2BVijGl9nNjOvISTH1NTsEWlbCdtHYzVAsrOVvqu5qqQct4574BCaASZmanEUFVBwIamUbSUQuoLkjB8rEWKiul1kRy%2Bt%2Bqf3gC8491XmoKvtq96670cpTenTbAa8Te0eJTmxfQWU8aNGoyjKIRRyk1k4%2BmYg8N&X-Amz-Signature=f48f2694e7a6470ba9e09375473c1c839fd435ae36a1b89563f8e3404fe47238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3CI7BBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL5NwPJlBRtdGXSLmGvCWwPhFLOfrpaYX3HLI%2BoNybbQIgLbZViWKZnZSbvu%2BdMGcUROXIK4M7bV9iaBZRpv5gUMoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSW4x0UDX5vuuVtircA%2B3CPvUDo%2BEVSQ5AgvKugMjl7umA%2Bh8JSHLKtvVu%2Bjk2UrFtuyFlozoQqxVIdQqcA08WYG3akTqDTFvW4uh5Xyi3LyjK%2FMWIJnJJMwFRQw%2BXVAv4LeA34I13S3JRYsSpoqEPIeJKUj01YktNa6aQGhsYvK%2BFCDHLCEeWDZr2gyRyHN%2F3uqmd%2BqifP6rbzY8SPJK%2FoK6DGqXh0%2FZc%2FSAeCPU2WKA2t2Iln6%2BFpZBPW0U78I0SFvAy98y8Dvj18oSCd6ublEv7ln4sflEJdRzDxMD9sv%2FopUC5Np1CB4U6Xv99ZOjKy3HSyDemd7AxTi6YKtwHlz0AAE0DW%2Fpdb%2FCA1KPI9Vj6pGsSQnMEEK8UTjWukdWfs1suit14isSMeX8nmo7W%2BOIfYuANUytuCTENhLB94XosjpK4zJ55dULJreWcL17ZBSff70F8hQi4sZGbE9AYnVpoUMMjGsPPmtk3mdb95xgiMuR1Fqo1Jl%2FlUdEZhC2U1wP%2Fi68V6Wg5HRWr0MRcGLtaNdX42EUXpmLj7eJeAD4CdmL5Iy%2F4719HBYGjAJAUWVRm3yb6uYjl0DwtTgWKi3rmPZZytW8mIpcSpbKG8YeqVtqTkPNYymGknBPIF3seAMGZJlvXRPZMMMiBvsMGOqUBHm0vWK6k8lqY%2F4%2BLep6VcM%2BWXlFklDeUKELkCt7gxwzCx%2FfaiaDFf1E40ZBOEt%2BVijGl9nNjOvISTH1NTsEWlbCdtHYzVAsrOVvqu5qqQct4574BCaASZmanEUFVBwIamUbSUQuoLkjB8rEWKiul1kRy%2Bt%2Bqf3gC8491XmoKvtq96670cpTenTbAa8Te0eJTmxfQWU8aNGoyjKIRRyk1k4%2BmYg8N&X-Amz-Signature=c9e2c4e4b50e7207bc519358e54b33a9355c03d81a6a3a849049bf5adeffd2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYTOO4Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwh6h5ORWk%2BYOghV%2FvGPg1nQtd%2B1WSpRZM%2B02rYwu8cgIgBFqKf0WmxCJkWNcuDtedli7FCJwtjDJ7DRJg5vkM2GsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ%2FDk6Ta9LDn0MZDSrcA9e4G%2BM6bbkVUpHFFsTpYf%2FNqxzwry9GGYmCJa4NCzzjtIj79lY1qx6Mg5xiP05aI4agFS%2F43dYy4f6k6FrlwmlBp6UugZy0L0fMmfnPgTJOU5sy%2Fo7n8N%2Fp9DU41z93se2hI0iggp%2BaAaTYPiGdjW%2FNklGN412xycwSmE%2B%2B3%2F5nJOCeHkziD%2FkghKaSYqto9UvHBsnJqRGVHLUzLhHBX8zz5LZlEGN875HsR506oNsy83kNRHr5LI7lKkuti4gsnREZAG0utyxOcHeeXmdCHeQEZcaIehohTczhE1Zknt0YoC%2B8SqmU8XdOKJlpK5yuMQvr09LUch%2FhZQ1e0nJkm1Y8kedv18jz7JHuOQmkjc%2F1mYtLX%2Fg2KI4jJoEeBPG%2BIJ6i1GKjf69NrnMGWNdaPD%2BQYKlNdacXrRBim7GiCkKZFgnOmc3Kqc031rBUU6Ctj2ZrMdLaSH65zJ7izp6v340wYATJcPWEaP8XViZERAh4X0jmooljLwKOcFYom3mVOukXqmzBavmsYQOxH4hayeqK62ZWGGblNBXl3QEt4oq1e%2FBy2ImciimYatXLsSjqNGLND%2FMP4LEZySJkstMBvBp0H98fVrrpc5TLgFK0RJut2pT629Qy%2Ff6eavZuMOaBvsMGOqUBAZfFTnWEXgw9pXQkeGdVkIU4k7GPVwUjevANJaDFKF5v8yac9SAVm37JubAZT3seaG%2BBISajDXHMUpPhQdw5pVueNrU3VXdG7OAUyxWg50IFUwGEiyYOZ1p%2BbKZonGqtBjoFRVWp5lzdDgZOqRV1Nv51FMWOfO5EVdLU%2FsHZnCJMJj3kD1JAILtijqvLj1td9V47GKcYfRi0EZ49UpBfMUwcUYbf&X-Amz-Signature=9bc9b821ccadb493f0e625da7c69d2db0cd059c5e0cc7df8962d7182d8d4e183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7MIVJH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaud63eqmHElBhhB7SvTfOYMzsmheVbGhA49fUPr9E9QIhAJENvZ%2FEV71gSaKzjl7HC6dhpS%2BJceUn6eeODWC7rL7xKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfwBNwADkxAr84Zq0q3ANEqPJSB691qqJUBreqoWfLtk45p%2FTj%2Bz3Y%2FzcElxhuH1Qa69OghQy3DRYV6fqZ5vGKOPGocJkSYkkJKJwP4dYk8%2Fz9VuTxMFdO4uBh8acbRRsxY80JX4vcsVQ8ZWBzzNFW1NgpsNg%2B0Szr%2BpC6lT3EqTo8vZ66r7fZ8YdJPjkBNks%2F9rM38lhoWbizmaxcuOsli%2Bn6kTMz0HZQMMkn56f0rMdmpvLMP%2Fg%2B9Uci8jdoMKGtjbZTTa1LPykQRDb%2F4ArFb4mfExyoXPV60c7IIm9gd4nhOx%2Fgtx5a8YMuk%2BnfRvPZ1RCFqlXszDCWuGSJeaPe%2FKNcSA1vW8r277vXQKtLOW2c0g48Emhm7iTDbCj3RRA4gomhH9bRvzYlVVRi8GbeGs%2Br8VxnpVXc%2B7tG04l9CBmVh64aVTjeiXjPkBONm%2BCV2ZY3UbK66RWhYJxiek5Goc60sXzzFTnNjpQPRdukm5BX6DPwz7g1BoirhKon77uFyALqt8tEXN1fC9OAhtvMTzLJoRdlDkCvsJsB6p4jYO9vDBJw62%2Fw7YL7u9Rc39Ddx1m0deXsaAItFrjkhLfGtR%2BGircyG%2B4kY97AcOQWzK4BarS1TqjRElnaf%2FQ3SNJ011%2Fwk2cUt13C5zDmgb7DBjqkAbPCKpem8qEA2pAwqVIGHg7eAE8q36RRfEJfOnqR8E8%2Fc0RWT6BxG5ZRPDTuf3VH8e1j9tRJeVRyX6%2FRsE10c8M8t8R8qoF9YYH%2FWowAnoEWtZgrLKZ4ELAgR91kcj0CviVFXt%2Fi7OzrcFTrEKjYnb3jwOmrvVtVIiPNoEH1CKyPrtZzDgPt8I84gN%2F%2FCPD9sbI%2F%2BzHAHMGI8wYv7KABTwQO07jM&X-Amz-Signature=f982a78c9746f729b02b21f7af1befe9c6c45a6dcbe795ff87351f4b420e105b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3CI7BBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL5NwPJlBRtdGXSLmGvCWwPhFLOfrpaYX3HLI%2BoNybbQIgLbZViWKZnZSbvu%2BdMGcUROXIK4M7bV9iaBZRpv5gUMoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSW4x0UDX5vuuVtircA%2B3CPvUDo%2BEVSQ5AgvKugMjl7umA%2Bh8JSHLKtvVu%2Bjk2UrFtuyFlozoQqxVIdQqcA08WYG3akTqDTFvW4uh5Xyi3LyjK%2FMWIJnJJMwFRQw%2BXVAv4LeA34I13S3JRYsSpoqEPIeJKUj01YktNa6aQGhsYvK%2BFCDHLCEeWDZr2gyRyHN%2F3uqmd%2BqifP6rbzY8SPJK%2FoK6DGqXh0%2FZc%2FSAeCPU2WKA2t2Iln6%2BFpZBPW0U78I0SFvAy98y8Dvj18oSCd6ublEv7ln4sflEJdRzDxMD9sv%2FopUC5Np1CB4U6Xv99ZOjKy3HSyDemd7AxTi6YKtwHlz0AAE0DW%2Fpdb%2FCA1KPI9Vj6pGsSQnMEEK8UTjWukdWfs1suit14isSMeX8nmo7W%2BOIfYuANUytuCTENhLB94XosjpK4zJ55dULJreWcL17ZBSff70F8hQi4sZGbE9AYnVpoUMMjGsPPmtk3mdb95xgiMuR1Fqo1Jl%2FlUdEZhC2U1wP%2Fi68V6Wg5HRWr0MRcGLtaNdX42EUXpmLj7eJeAD4CdmL5Iy%2F4719HBYGjAJAUWVRm3yb6uYjl0DwtTgWKi3rmPZZytW8mIpcSpbKG8YeqVtqTkPNYymGknBPIF3seAMGZJlvXRPZMMMiBvsMGOqUBHm0vWK6k8lqY%2F4%2BLep6VcM%2BWXlFklDeUKELkCt7gxwzCx%2FfaiaDFf1E40ZBOEt%2BVijGl9nNjOvISTH1NTsEWlbCdtHYzVAsrOVvqu5qqQct4574BCaASZmanEUFVBwIamUbSUQuoLkjB8rEWKiul1kRy%2Bt%2Bqf3gC8491XmoKvtq96670cpTenTbAa8Te0eJTmxfQWU8aNGoyjKIRRyk1k4%2BmYg8N&X-Amz-Signature=ac4bed7a9594f1b9734d08f02588b2e3a36188deafc6cc2d357f528b78c920e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
