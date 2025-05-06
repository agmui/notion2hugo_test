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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LYJBZ7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0ObNfl2%2FZGwo8rHN7IPcUruJ%2Boa%2FYepGFGcKvbnbY0gIhAKRJhZ18NTy%2FY4J76FdNS9zRfdNNVQEqoF70UVqSlbHmKv8DCEcQABoMNjM3NDIzMTgzODA1IgydCmX2X3B4Y%2BO2pF0q3AM0PlW1Ld%2BpLJhHskvX4OspQDz0oXGeobuPTYIWoMEzhSqFROL4Q9SlcqNCUNrj2gBvAo6KOqZIC5eUQf7aTTmfzqQyRLMBH%2BVbFxNXwvXllyKow2SRfQ3vgQmlI0SDdrfH%2Bbpqe5s%2BCWO%2FgpChhTRqD5qTI8mflw1Lstw3sq8YRusaRCFwpw8w1MiUXE%2FvkgdspPsGOGKI6Rbu20INk3DnT2sPHMEqlQRTkWUWhPyM%2BanIhXhxSOLpH0hS9NqsRrQQPDqk2DrMU%2FiLC3M3BkSrL64dkW39tUTfV%2BjuKFJ00wvyXtBWkNGqQr3mmVPSg1crxPqAYyiv2gCSReXX9U3rswP0sbmrzmAm4VGNjFw7F9Gavuz1VUhUVFuYx6rvxhjgyjQEncw06q0WeBl2SdStoWFSVSxlGhFIBYXCALzOwDJtfUU6uq6aLFNlm1HgoWWIE%2Bzr5NzKlEf%2B%2Bf4JOlvKM9CpeJzAMgrVKJPlGsZSUlZNWLjGXMrDr1iK1iKbbNYvXPVFZiplBjQbO%2F3CcY0mTDcmU%2Fh1a70s6PMqkh5%2BpMwix2kuoBobMwTRCYFXRFFN%2BZXKkPHoL33rgV6DgSGZeDtioc4ynqvoLc292nVwvS01bRJN30f4ee%2FG6jCbs%2BjABjqkAYPzRcaS2TuvI42weDPxgzQwpS1y03S3babFrcEgyxiLpW3bvXMoINEMUXS3Oh8HQIwv8rysXaOcPCC6RaHma68mtXV%2FgYiKqAfMuo2riA6ya8TPE7rL3kUi1vFK2d95laHPN7smbSqJDQAGLMGEhV%2BuT5ABUjm7cOcr%2Bh7M7HJhA9wMOWqzz0zzSVbQOh%2FxU7T56TVfyr%2FWTFMnK0EdaIqE8mI5&X-Amz-Signature=76ddf81555bde3ae711916aaf34b13c8d3b73d2443537be69aa12d1d13164f71&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LYJBZ7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0ObNfl2%2FZGwo8rHN7IPcUruJ%2Boa%2FYepGFGcKvbnbY0gIhAKRJhZ18NTy%2FY4J76FdNS9zRfdNNVQEqoF70UVqSlbHmKv8DCEcQABoMNjM3NDIzMTgzODA1IgydCmX2X3B4Y%2BO2pF0q3AM0PlW1Ld%2BpLJhHskvX4OspQDz0oXGeobuPTYIWoMEzhSqFROL4Q9SlcqNCUNrj2gBvAo6KOqZIC5eUQf7aTTmfzqQyRLMBH%2BVbFxNXwvXllyKow2SRfQ3vgQmlI0SDdrfH%2Bbpqe5s%2BCWO%2FgpChhTRqD5qTI8mflw1Lstw3sq8YRusaRCFwpw8w1MiUXE%2FvkgdspPsGOGKI6Rbu20INk3DnT2sPHMEqlQRTkWUWhPyM%2BanIhXhxSOLpH0hS9NqsRrQQPDqk2DrMU%2FiLC3M3BkSrL64dkW39tUTfV%2BjuKFJ00wvyXtBWkNGqQr3mmVPSg1crxPqAYyiv2gCSReXX9U3rswP0sbmrzmAm4VGNjFw7F9Gavuz1VUhUVFuYx6rvxhjgyjQEncw06q0WeBl2SdStoWFSVSxlGhFIBYXCALzOwDJtfUU6uq6aLFNlm1HgoWWIE%2Bzr5NzKlEf%2B%2Bf4JOlvKM9CpeJzAMgrVKJPlGsZSUlZNWLjGXMrDr1iK1iKbbNYvXPVFZiplBjQbO%2F3CcY0mTDcmU%2Fh1a70s6PMqkh5%2BpMwix2kuoBobMwTRCYFXRFFN%2BZXKkPHoL33rgV6DgSGZeDtioc4ynqvoLc292nVwvS01bRJN30f4ee%2FG6jCbs%2BjABjqkAYPzRcaS2TuvI42weDPxgzQwpS1y03S3babFrcEgyxiLpW3bvXMoINEMUXS3Oh8HQIwv8rysXaOcPCC6RaHma68mtXV%2FgYiKqAfMuo2riA6ya8TPE7rL3kUi1vFK2d95laHPN7smbSqJDQAGLMGEhV%2BuT5ABUjm7cOcr%2Bh7M7HJhA9wMOWqzz0zzSVbQOh%2FxU7T56TVfyr%2FWTFMnK0EdaIqE8mI5&X-Amz-Signature=f81ff48569aecfdc3227e7560080753a01fdb91861388581c096d93a5a088892&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LYJBZ7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0ObNfl2%2FZGwo8rHN7IPcUruJ%2Boa%2FYepGFGcKvbnbY0gIhAKRJhZ18NTy%2FY4J76FdNS9zRfdNNVQEqoF70UVqSlbHmKv8DCEcQABoMNjM3NDIzMTgzODA1IgydCmX2X3B4Y%2BO2pF0q3AM0PlW1Ld%2BpLJhHskvX4OspQDz0oXGeobuPTYIWoMEzhSqFROL4Q9SlcqNCUNrj2gBvAo6KOqZIC5eUQf7aTTmfzqQyRLMBH%2BVbFxNXwvXllyKow2SRfQ3vgQmlI0SDdrfH%2Bbpqe5s%2BCWO%2FgpChhTRqD5qTI8mflw1Lstw3sq8YRusaRCFwpw8w1MiUXE%2FvkgdspPsGOGKI6Rbu20INk3DnT2sPHMEqlQRTkWUWhPyM%2BanIhXhxSOLpH0hS9NqsRrQQPDqk2DrMU%2FiLC3M3BkSrL64dkW39tUTfV%2BjuKFJ00wvyXtBWkNGqQr3mmVPSg1crxPqAYyiv2gCSReXX9U3rswP0sbmrzmAm4VGNjFw7F9Gavuz1VUhUVFuYx6rvxhjgyjQEncw06q0WeBl2SdStoWFSVSxlGhFIBYXCALzOwDJtfUU6uq6aLFNlm1HgoWWIE%2Bzr5NzKlEf%2B%2Bf4JOlvKM9CpeJzAMgrVKJPlGsZSUlZNWLjGXMrDr1iK1iKbbNYvXPVFZiplBjQbO%2F3CcY0mTDcmU%2Fh1a70s6PMqkh5%2BpMwix2kuoBobMwTRCYFXRFFN%2BZXKkPHoL33rgV6DgSGZeDtioc4ynqvoLc292nVwvS01bRJN30f4ee%2FG6jCbs%2BjABjqkAYPzRcaS2TuvI42weDPxgzQwpS1y03S3babFrcEgyxiLpW3bvXMoINEMUXS3Oh8HQIwv8rysXaOcPCC6RaHma68mtXV%2FgYiKqAfMuo2riA6ya8TPE7rL3kUi1vFK2d95laHPN7smbSqJDQAGLMGEhV%2BuT5ABUjm7cOcr%2Bh7M7HJhA9wMOWqzz0zzSVbQOh%2FxU7T56TVfyr%2FWTFMnK0EdaIqE8mI5&X-Amz-Signature=ba62d456efdac8886814577779c4fc05010cff37bcf6c5a699409e61ba3b85b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVVZSBU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcVIAa80RXmGCg1%2Fs%2BAhBCZ%2BFFV4BDRws6zkwvWj8PtAiEAoQRLYsANDUpyzfghBzXl1vFMk4h0aGYLpkyL%2Baq4EkYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHonBZ%2Fq3oMLEdixrCrcA5C5v0TfQsCNrQIpUoWo5VFdutPX6Ag6cUWu59uUFwsuPdruxJIsgGiXC6iTJE9TPVCE%2FqDsDQrGC7NfRXHA3dP3Qo21CfMDwsv%2F8sBj9WBwkDRq4aecTQo5RtJBYgC60clk1Cec%2BiPhOevumWx%2FUesQBbbHIFEDSBm%2F0jIuHmPE27sjqKbC11uooOEK8WFKFSMVjoXoOXdEIuTOMHjUGb2zZSPCR5fF0iwVYv1v2Mdurx3rBUUfGoCuhdMncvyNWH94phX55Wab14olXCh5sWl4iIkLdMDFvNTY5Gv0RQmNCfi7ZbMdzxTF9eZkZGBjVHt2hZtyCNgOlbxe1x07NhWVn2C0AX%2FkW%2FBccO9kF4CB8AICKlFRybYUS6eLXwC2fRGGkjB9OL4BXX9FBDt6csMKRJCkuQi3dtwGVkcLCHWMhcI%2F3wdGKSvMxp76sRIuXoZn6qvi4HCzpBq8mhBhHPaC9M%2Bd7ex9okq%2FImgyU0ZmZins3hT7VZL5WROM%2FvVlJBH5DN5AjALlLWyIcdtvcUH%2F5CAJ1TvJCQmMEvduepgOrNcuj7NEYOAWM1LUVuOrqpq2UO5iQCfkuL%2FvsLCL1ekEnJ1d7wMFelc%2BGH1uehBeKQvASkzhvCh%2FS9ADMP3L6MAGOqUB0KIm51h3S6r0Ofhs%2BFdak6wMFOYz5SXxPn5NmlfCbX0ja3nBgAb4fvofLHh4BE2bezUMe3iJC3BxGGbrCAkZC3UkL6TXgPPvK%2Fwy4EUzeTnbCMjzCPI1aeX7yWU2MZ2GJndJwhCWDvb6jcFcIMEOCBKzxg%2BRTcLQWjVys9NMDBtLgHuV2vL%2FvS3W5rvM4Jb2WG9Y16JQlThnkk169oGq8kj%2FSykl&X-Amz-Signature=f76d3216f09cb3a38ec7e268a4424a6af2b7cf61259b90c204a0c5554492ae3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W262T3Z6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENHWxdAWcm8DU6HrE5VXilHzNFWJWOiXkZCIjE69XsFAiEA0vZJhSdM5tIWAeErIemtGfpgtdrOWmeNjm%2BB0SzqwBIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDH9%2FXB6d8p%2Bx7sUkWircAxgNKGglDtICHA%2BdtqrKS3G9UpP95plMnsEmRt1vg2X5jQ3qdPTxnj1okMcuAIdAe9hS%2FKtTKvUfKgkBTSXKoosTTomAPhtGUYYEGxTP%2FsVSAl24y4LRtkxcAJGZzaqZcyhl77nDOtgMACltVgvX%2FLdfMEoauvFGv%2B6bf8%2FEO9vX9ZQ7pkovnvh0pLx9YRagXZMoAEcXDvQmmOm87MWBGqt40OCfvcnI0WexpGxIiu2faM6obR%2FClL%2Filb4uwMn%2BmgvA23AZOZpvTC7NbodHKszP6T8akT99a6cE0spV195LNi2WbMFZV1ceW9gvCfgY1MVUu%2FAiPQz5KFyNzybjucjzzGAoP8C4ax%2BoJO0GwsvtJhG6YUDtISpPQ13k1as4b1lLR0fShgKeMm3yNeswg5ZJQtu0rDHpe0SmaGVO%2FjbThraB30nBNGAgfh%2BKUBspHBK4xwggKYT9Pfw06ZSTjX9RIUWgBsZE3RKc5zZRz%2Fi8sA2DNUN3fgMrApb3Q68JpRLz9JNoiG%2BfHErOEfie3g541ta6Bt4wNHE04dqZpKlb5hzxCsqC6Z7tfiKP9DlZQbPtxJxzmFGmVSF7%2FF%2Bl8gOKzdi3g9QFxqqwx1eBsEvzC9fYeVpKZRN2MxZ%2BMITM6MAGOqUByowQoyH9ImyRDPrOTr%2FRV%2BPwps4gw4Cl46aE5UKqO4u1kbz9OABxlwd57eWKkqkVUGZ2lZYRgLMoCAEpO0dDJlTrMGuErwXnXbdSeiq4Gpn20ONmhZlDYcYj3eJ9SpFtiApDjAgvFVwl3gn%2B1cLI6c%2BUgz%2Bg3Zl3i59ezdZ3%2Bp5B%2BrlTVgelEVihn%2FjZU6Ob00YKDDbTl1xQI8drUCZrKBDdbS5x&X-Amz-Signature=337e6dde64c746f21aa1d50dc318e4daa90df2e646b477c7421561df82ec2636&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LYJBZ7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0ObNfl2%2FZGwo8rHN7IPcUruJ%2Boa%2FYepGFGcKvbnbY0gIhAKRJhZ18NTy%2FY4J76FdNS9zRfdNNVQEqoF70UVqSlbHmKv8DCEcQABoMNjM3NDIzMTgzODA1IgydCmX2X3B4Y%2BO2pF0q3AM0PlW1Ld%2BpLJhHskvX4OspQDz0oXGeobuPTYIWoMEzhSqFROL4Q9SlcqNCUNrj2gBvAo6KOqZIC5eUQf7aTTmfzqQyRLMBH%2BVbFxNXwvXllyKow2SRfQ3vgQmlI0SDdrfH%2Bbpqe5s%2BCWO%2FgpChhTRqD5qTI8mflw1Lstw3sq8YRusaRCFwpw8w1MiUXE%2FvkgdspPsGOGKI6Rbu20INk3DnT2sPHMEqlQRTkWUWhPyM%2BanIhXhxSOLpH0hS9NqsRrQQPDqk2DrMU%2FiLC3M3BkSrL64dkW39tUTfV%2BjuKFJ00wvyXtBWkNGqQr3mmVPSg1crxPqAYyiv2gCSReXX9U3rswP0sbmrzmAm4VGNjFw7F9Gavuz1VUhUVFuYx6rvxhjgyjQEncw06q0WeBl2SdStoWFSVSxlGhFIBYXCALzOwDJtfUU6uq6aLFNlm1HgoWWIE%2Bzr5NzKlEf%2B%2Bf4JOlvKM9CpeJzAMgrVKJPlGsZSUlZNWLjGXMrDr1iK1iKbbNYvXPVFZiplBjQbO%2F3CcY0mTDcmU%2Fh1a70s6PMqkh5%2BpMwix2kuoBobMwTRCYFXRFFN%2BZXKkPHoL33rgV6DgSGZeDtioc4ynqvoLc292nVwvS01bRJN30f4ee%2FG6jCbs%2BjABjqkAYPzRcaS2TuvI42weDPxgzQwpS1y03S3babFrcEgyxiLpW3bvXMoINEMUXS3Oh8HQIwv8rysXaOcPCC6RaHma68mtXV%2FgYiKqAfMuo2riA6ya8TPE7rL3kUi1vFK2d95laHPN7smbSqJDQAGLMGEhV%2BuT5ABUjm7cOcr%2Bh7M7HJhA9wMOWqzz0zzSVbQOh%2FxU7T56TVfyr%2FWTFMnK0EdaIqE8mI5&X-Amz-Signature=6bdd8c9a7023988ea4b6b93252a0a84da69ca57d2a044a77c1dade8493123706&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
