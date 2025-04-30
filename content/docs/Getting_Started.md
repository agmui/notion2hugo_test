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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YQC2WG3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCmUBSEeTCJZ0HHZJR%2Bw%2BvtLbDBMDtoMLIPbpwUoqTiAQIhAPKK9eg80ooFeBX5HgvLd%2BorXDM2PGJjLP6ojBTtUZqKKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdNk%2F8BaTiEj1ce%2BMq3APSOzZeN3%2Fm5Rr9x2LKuqINvJuTZI470gp%2BiJfz7c%2FqUpZMT4LJZs%2FtjWBJdX2haLC43yejuxvcF34%2FUTiH%2FKziD9C3cnQBAx9IvPV2OiQfKaaLdE8tzsAa6DY4BXl2Vm3vDYYhx8A99Bhhtc%2BW2N4%2BaBnnwUZ%2B6y77%2FwxrpFxqJx%2FfFbs0hv28zkI7WYKt4LzhxXNYY%2F9sEz1YkzFp1sRalfDTLlmG4kgMCJ39w4i7ISKlWk9Qorb8UbaOcYnqIm7Gzu6RrfdTOzNCuM%2FJFA4lJAzs8tJ27OUECivQg1BBGu1Q1DW28UF3aBiR9KYxDwoo%2BrwAQxX9qeW3ZfMZKkEVDU3Tn%2Fgkjk2J1KDpuxRooXMvNiZ%2BnFOdDQk%2BEwBBGPrPXdK0vfuAQXxxo64rdLUtnXI%2FZQT99S27xRDQ3Mq1iXRG6sGiwUByvCy0iUVXoHVNc45m%2F%2F%2F6rXd6w%2FTBk4bWCUJKYVs0H9Xa7ih72HgaL1j4cnm7ycsDV8mNgYAEMZBlS7G9NUCl6fBq4ey7ea7bQXxhvMpFXgeEfPsRWyWyKyXIBOQPH3427tnN7xW2vvbPFg03cmCJMfxdcq%2Ff%2FxPt%2BglAKmg50jhmZJj36DKcQY%2Fz1Mqph3z0hxXLUTCrp8jABjqkAYvpsi4EclBzvhnfOo5c0GXgFjr4UFE2eLFj1fCt1JJiP4LKI2A5Wb10RvRV8FAZufnxJihWj7cwaFECjHhTOSI3DZGCTmEPHaN6w459Bk%2B5sOUVpA3sW8m%2Fjg7dm%2BRXzxFObCbF%2BPSYNMNhZnFKWsE10503GALzj17JIv%2FVQECZrJwgEmXA%2FTvCgbu3%2BpHv4CvArJa5gsiG7kZM4LnKfv5aa0l1&X-Amz-Signature=de2bfa5de08942f76f9f8f5e272837059df3feb3b79c50dcc3c0b0172832f52c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YQC2WG3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCmUBSEeTCJZ0HHZJR%2Bw%2BvtLbDBMDtoMLIPbpwUoqTiAQIhAPKK9eg80ooFeBX5HgvLd%2BorXDM2PGJjLP6ojBTtUZqKKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdNk%2F8BaTiEj1ce%2BMq3APSOzZeN3%2Fm5Rr9x2LKuqINvJuTZI470gp%2BiJfz7c%2FqUpZMT4LJZs%2FtjWBJdX2haLC43yejuxvcF34%2FUTiH%2FKziD9C3cnQBAx9IvPV2OiQfKaaLdE8tzsAa6DY4BXl2Vm3vDYYhx8A99Bhhtc%2BW2N4%2BaBnnwUZ%2B6y77%2FwxrpFxqJx%2FfFbs0hv28zkI7WYKt4LzhxXNYY%2F9sEz1YkzFp1sRalfDTLlmG4kgMCJ39w4i7ISKlWk9Qorb8UbaOcYnqIm7Gzu6RrfdTOzNCuM%2FJFA4lJAzs8tJ27OUECivQg1BBGu1Q1DW28UF3aBiR9KYxDwoo%2BrwAQxX9qeW3ZfMZKkEVDU3Tn%2Fgkjk2J1KDpuxRooXMvNiZ%2BnFOdDQk%2BEwBBGPrPXdK0vfuAQXxxo64rdLUtnXI%2FZQT99S27xRDQ3Mq1iXRG6sGiwUByvCy0iUVXoHVNc45m%2F%2F%2F6rXd6w%2FTBk4bWCUJKYVs0H9Xa7ih72HgaL1j4cnm7ycsDV8mNgYAEMZBlS7G9NUCl6fBq4ey7ea7bQXxhvMpFXgeEfPsRWyWyKyXIBOQPH3427tnN7xW2vvbPFg03cmCJMfxdcq%2Ff%2FxPt%2BglAKmg50jhmZJj36DKcQY%2Fz1Mqph3z0hxXLUTCrp8jABjqkAYvpsi4EclBzvhnfOo5c0GXgFjr4UFE2eLFj1fCt1JJiP4LKI2A5Wb10RvRV8FAZufnxJihWj7cwaFECjHhTOSI3DZGCTmEPHaN6w459Bk%2B5sOUVpA3sW8m%2Fjg7dm%2BRXzxFObCbF%2BPSYNMNhZnFKWsE10503GALzj17JIv%2FVQECZrJwgEmXA%2FTvCgbu3%2BpHv4CvArJa5gsiG7kZM4LnKfv5aa0l1&X-Amz-Signature=50c5ee44eb6a72b53f8dcd0e0ddee4edbc5520892826b35bb74ed644b60c717d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YQC2WG3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCmUBSEeTCJZ0HHZJR%2Bw%2BvtLbDBMDtoMLIPbpwUoqTiAQIhAPKK9eg80ooFeBX5HgvLd%2BorXDM2PGJjLP6ojBTtUZqKKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdNk%2F8BaTiEj1ce%2BMq3APSOzZeN3%2Fm5Rr9x2LKuqINvJuTZI470gp%2BiJfz7c%2FqUpZMT4LJZs%2FtjWBJdX2haLC43yejuxvcF34%2FUTiH%2FKziD9C3cnQBAx9IvPV2OiQfKaaLdE8tzsAa6DY4BXl2Vm3vDYYhx8A99Bhhtc%2BW2N4%2BaBnnwUZ%2B6y77%2FwxrpFxqJx%2FfFbs0hv28zkI7WYKt4LzhxXNYY%2F9sEz1YkzFp1sRalfDTLlmG4kgMCJ39w4i7ISKlWk9Qorb8UbaOcYnqIm7Gzu6RrfdTOzNCuM%2FJFA4lJAzs8tJ27OUECivQg1BBGu1Q1DW28UF3aBiR9KYxDwoo%2BrwAQxX9qeW3ZfMZKkEVDU3Tn%2Fgkjk2J1KDpuxRooXMvNiZ%2BnFOdDQk%2BEwBBGPrPXdK0vfuAQXxxo64rdLUtnXI%2FZQT99S27xRDQ3Mq1iXRG6sGiwUByvCy0iUVXoHVNc45m%2F%2F%2F6rXd6w%2FTBk4bWCUJKYVs0H9Xa7ih72HgaL1j4cnm7ycsDV8mNgYAEMZBlS7G9NUCl6fBq4ey7ea7bQXxhvMpFXgeEfPsRWyWyKyXIBOQPH3427tnN7xW2vvbPFg03cmCJMfxdcq%2Ff%2FxPt%2BglAKmg50jhmZJj36DKcQY%2Fz1Mqph3z0hxXLUTCrp8jABjqkAYvpsi4EclBzvhnfOo5c0GXgFjr4UFE2eLFj1fCt1JJiP4LKI2A5Wb10RvRV8FAZufnxJihWj7cwaFECjHhTOSI3DZGCTmEPHaN6w459Bk%2B5sOUVpA3sW8m%2Fjg7dm%2BRXzxFObCbF%2BPSYNMNhZnFKWsE10503GALzj17JIv%2FVQECZrJwgEmXA%2FTvCgbu3%2BpHv4CvArJa5gsiG7kZM4LnKfv5aa0l1&X-Amz-Signature=5e3ebb7fe20ba4c660f59f046305720b6e13cbcd74e9018d1c0d5df62a36866c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4Y32UW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCDr6LMbFz4khJlSl3yCHVlkbTeSRb2oRpkokPNTqQirQIgLrEEkQh9KQDaYMSnnPxvyqLjTXWegjCs22qqyPm1u8gqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhyb0TdoukApVIdlCrcA28CDKIefIss4PkmxR9VyKWD44JVdBp9l8rrbWZgFEr0tiNA4GDRSQaes7raT1GO28UeFe3P0vGrpNV9j9K6v3%2BJU%2F%2Bs6ZIxIqi%2F6ystd68quqtNAl6Gbs1uh%2BA60uC40T7tBWzy0rv%2BsmVjcXjp05npVqqaMvfM1b00ivuhXqM%2BnW6yJ5wwEGV89LP9Mu%2FX%2FBvrhASkfbuU0L3VIfVp1A8sWaBguwFA7qb8zWfPTGuk%2BgG84%2BVmLBhmrICI3FQ1Mb8ZMBLmay08sMMLgd19Ic71QLQxW3Dg8tb1XJsi2xofFIX9TcjIah9cdxfqT46xgXVmwbsw6ilRosO%2F12jC7E21XJ6mmljN5BgoBFM6FI1iTPUtqSY8WVFDvikktY1JaWLKz3jsMAf0dh377voB%2FOkHtcHZ5YlptBdPhmdkLM6l3FoPeezUIw37F3iR5rsGrVKdd8CjOirk00NPKMvt%2Flq80JO2BD39Y%2B930qJGyeFOvh03vcIOXgKKI11I%2F0m%2BgyY6akAux9LpGASh5xBSqPWA30EheJQgEVetqZ4qjgakMKNpfE%2BzLbx0hllB35y0Gk%2B8rp8GMte380MdFcdHNwC4zpnzk0iC8Fx%2FQUWva80p5mHmUfNzB2XzueNrMNGmyMAGOqUBP%2B4B%2BgM7F%2FLxlSOGkW%2FsG4f1wDjFvXKOhpn%2FFAswZJ6cs0d%2FMuw1GjyS1xBlF9moNZtuTYT5tduxVxrKKawb2LofKMXf6lbQUXTJGmGIT8q1fxBmv3j0WYIo7jr42qcOmbNfd4CLxdMljJ9mhnc%2FnCu5LNl8d8RLb%2FPKCke3DACBLOjJVYQAEYJmSWIsbWs2d0GU9kzMrZHj7pKFKT9DHBPWZnX6&X-Amz-Signature=96f0cc972ac59d70df69b776a8113ea11fff04e809073069ab0e977d182ce06d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCWC6NR6%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHOP%2Fqr0s7Vkp2hetrA9a7npHfKjgcV2dyNv1KVu2A%2BQAiEAxjNii%2F32mH4YzrCo4SW%2FG5oVRc9BEI4jaRrDBmhW38AqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2MBa8s172TbGLNjSrcAzcYJoMbRoN4XbCLQ6CRvrPdjCs0LaD7AbgEGtCNQOuLEAEDo0jgxxy2c87HnoF0JZbIJLhAQTTTxZBTcvZ36NRW%2Fdpa%2Bn%2BAtDFaw1WPzeP19zCnIItJLAV2T9XbubA3mj%2B5Fd8%2BY2t5VyloqAO81NzdrYUJbgdTLLtpbEwmWkkN9jUzbSzjZgylNwkkTofeXBPI8V%2FOC1ZO8oxK%2FkFeUwVCxf%2BOGwHHLoSBANBri1oiJcU3ycAOOgMYiadDfNs%2FQzKNvEbTpFzkVFwWd4WeIWTQhj6Lh7f0zjCdQoaYaezV%2B4JW2ljyzanbVBzs3%2BxR550NsD2iBHQTu%2FVqRULeuAddjg4%2F%2FBwlQgXQiCESpza04pR%2FqcKl0i1Q9%2BmcmvGzXSer%2BLu6Vj%2FUMU%2BGo2krTUQeAEmgjbIm16t%2BHdT7JvqWUAY5gW8rWNHbXXEkaS03m5FZb6s%2BwXzs5WdfiZaeKCf3o9GAVAxNANN7o0ctnpV4%2FSsWQRMYyj6mfrsxGmQtGbTKoGzrv0haPGhtXeKg97IMkKIIkYQa1Kj0HqSZw8vt%2FU2uKa8VcMiObXarpYjCXWhTskxpUHi3aKQxqtmNsT0ftlrrKEaDfyxipZYYFjOcDXgFAEV8JV5rBiHEML%2BmyMAGOqUBhpomQFkaZ4RZDTijVg9dXBCJEAbYQnXqnNpzmMlw3zCK5JLzXgny2GEri%2FeYSNtsIodd9wBwSR%2F16T%2FVsKhQ2oqHEupGWx%2FD4xmz4oimTeCqG8iP1NdkKG6GttLgH25BGt8HNQKB0OreiK5OPSxmhkFDqRe8jxT4T0%2BEsQEvkgLwyxKJbjNTcS6M%2BAjt%2FWPrXK59uQeo6JTr4CgBygCG5TVGQUGw&X-Amz-Signature=b7d2f8d411207da39054ec13fb48c0218162d827634460a511e065128953e9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YQC2WG3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCmUBSEeTCJZ0HHZJR%2Bw%2BvtLbDBMDtoMLIPbpwUoqTiAQIhAPKK9eg80ooFeBX5HgvLd%2BorXDM2PGJjLP6ojBTtUZqKKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdNk%2F8BaTiEj1ce%2BMq3APSOzZeN3%2Fm5Rr9x2LKuqINvJuTZI470gp%2BiJfz7c%2FqUpZMT4LJZs%2FtjWBJdX2haLC43yejuxvcF34%2FUTiH%2FKziD9C3cnQBAx9IvPV2OiQfKaaLdE8tzsAa6DY4BXl2Vm3vDYYhx8A99Bhhtc%2BW2N4%2BaBnnwUZ%2B6y77%2FwxrpFxqJx%2FfFbs0hv28zkI7WYKt4LzhxXNYY%2F9sEz1YkzFp1sRalfDTLlmG4kgMCJ39w4i7ISKlWk9Qorb8UbaOcYnqIm7Gzu6RrfdTOzNCuM%2FJFA4lJAzs8tJ27OUECivQg1BBGu1Q1DW28UF3aBiR9KYxDwoo%2BrwAQxX9qeW3ZfMZKkEVDU3Tn%2Fgkjk2J1KDpuxRooXMvNiZ%2BnFOdDQk%2BEwBBGPrPXdK0vfuAQXxxo64rdLUtnXI%2FZQT99S27xRDQ3Mq1iXRG6sGiwUByvCy0iUVXoHVNc45m%2F%2F%2F6rXd6w%2FTBk4bWCUJKYVs0H9Xa7ih72HgaL1j4cnm7ycsDV8mNgYAEMZBlS7G9NUCl6fBq4ey7ea7bQXxhvMpFXgeEfPsRWyWyKyXIBOQPH3427tnN7xW2vvbPFg03cmCJMfxdcq%2Ff%2FxPt%2BglAKmg50jhmZJj36DKcQY%2Fz1Mqph3z0hxXLUTCrp8jABjqkAYvpsi4EclBzvhnfOo5c0GXgFjr4UFE2eLFj1fCt1JJiP4LKI2A5Wb10RvRV8FAZufnxJihWj7cwaFECjHhTOSI3DZGCTmEPHaN6w459Bk%2B5sOUVpA3sW8m%2Fjg7dm%2BRXzxFObCbF%2BPSYNMNhZnFKWsE10503GALzj17JIv%2FVQECZrJwgEmXA%2FTvCgbu3%2BpHv4CvArJa5gsiG7kZM4LnKfv5aa0l1&X-Amz-Signature=550864006eb6e4ee6a06f2f5b7c620191b255384f719f067bc094aafc5a02943&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
