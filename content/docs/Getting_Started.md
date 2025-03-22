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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M2C3XRG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCsyVe75%2BZ6nZA1beX1od0FqppmhGMJR9iJIFtSFVB5RQIhAJ6fFZ31b58z6A6rPfKisexnq01yjMEYoA4Yw0VSoMFfKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiY3busCWyuqb%2FZBcq3AOSxgoruTrFaH6WoWkRB6JwD2MxHp6c3Ds8XTMJ8ex8EXz%2Bc3WhZWHM6gWxCvhZkkHGsU30KKjj1%2BoShlPASv5W%2Bf0UPcL6rHyrU5FQZr5Cy%2BuPUs3gFoGdpTVtdP1xb9MnGPpqiFOpoYjSBsdQ5hQITJDKaq44xB5bXDcRg8O4kVEDTn9Qcdgs1wHS3i0F%2FVWySR1ww8RwD7GkJe5%2BeW0o1z6VHOMkQ4hbCwr81KW45D7hC7%2BJYuzsA9%2BYB6XnpVgTa79ZdXWB5WLrVTDnk7m3ay8OWP5%2Bb5ChQjvsHW%2BVlF9TNI9pYBNihn5mJlWcjKAx5WE0JbJ7VLl3FksQFJsCaVavtl%2FwFCfv9v1pvqmpwVTLCWB5d0ivQvjhwoPtFWaKXhwX09d%2B%2FEWVUeoZpTk6VPqVkxaQjkrcIPaqj5JbICSXKXj0hCce0fugQkB49%2BZwRSq0GYqHOe4gGRGQ7YpfYHkz3hpsWOPyvGi9bDojc%2FAnZMNfLmuXYvwVZoKkqSF%2F0VW%2BvJbL5WNHHkt%2Fxylsq%2FobswZCLpbEul4k1kQqw86e%2F9LCpen7IFVpjo7Bh46x64kBDRbnHoIcaMDTCjwaMHqtCdBX8js3gxVyGWiVmUClKiclG7g6UpvUuDClu%2Fi%2BBjqkAcY5%2BWqiXlUh4yiCj1CU5GYp%2F9sPu65j9B04OjY37%2BRXlcYAYA9wSsrIXmpSTVGAvVkagNgOrPWuhwHBJwpKZ1hlCF5Ehat1u%2BPkG1Xr1avi6DDSr3bzFKj8LXWzI7tVrLf%2FTYalSiX21rpQdDAZKHPue0Awptm4gRRYwXtroA9LYg0Bj1hd7TpffjrodbYw0118YX6OElPzLloA%2FTyZecFf6%2BDn&X-Amz-Signature=eed84fdefeb2fc07bb351f83da63458e3e952fa2a152081ead56b76521b9e2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M2C3XRG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCsyVe75%2BZ6nZA1beX1od0FqppmhGMJR9iJIFtSFVB5RQIhAJ6fFZ31b58z6A6rPfKisexnq01yjMEYoA4Yw0VSoMFfKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiY3busCWyuqb%2FZBcq3AOSxgoruTrFaH6WoWkRB6JwD2MxHp6c3Ds8XTMJ8ex8EXz%2Bc3WhZWHM6gWxCvhZkkHGsU30KKjj1%2BoShlPASv5W%2Bf0UPcL6rHyrU5FQZr5Cy%2BuPUs3gFoGdpTVtdP1xb9MnGPpqiFOpoYjSBsdQ5hQITJDKaq44xB5bXDcRg8O4kVEDTn9Qcdgs1wHS3i0F%2FVWySR1ww8RwD7GkJe5%2BeW0o1z6VHOMkQ4hbCwr81KW45D7hC7%2BJYuzsA9%2BYB6XnpVgTa79ZdXWB5WLrVTDnk7m3ay8OWP5%2Bb5ChQjvsHW%2BVlF9TNI9pYBNihn5mJlWcjKAx5WE0JbJ7VLl3FksQFJsCaVavtl%2FwFCfv9v1pvqmpwVTLCWB5d0ivQvjhwoPtFWaKXhwX09d%2B%2FEWVUeoZpTk6VPqVkxaQjkrcIPaqj5JbICSXKXj0hCce0fugQkB49%2BZwRSq0GYqHOe4gGRGQ7YpfYHkz3hpsWOPyvGi9bDojc%2FAnZMNfLmuXYvwVZoKkqSF%2F0VW%2BvJbL5WNHHkt%2Fxylsq%2FobswZCLpbEul4k1kQqw86e%2F9LCpen7IFVpjo7Bh46x64kBDRbnHoIcaMDTCjwaMHqtCdBX8js3gxVyGWiVmUClKiclG7g6UpvUuDClu%2Fi%2BBjqkAcY5%2BWqiXlUh4yiCj1CU5GYp%2F9sPu65j9B04OjY37%2BRXlcYAYA9wSsrIXmpSTVGAvVkagNgOrPWuhwHBJwpKZ1hlCF5Ehat1u%2BPkG1Xr1avi6DDSr3bzFKj8LXWzI7tVrLf%2FTYalSiX21rpQdDAZKHPue0Awptm4gRRYwXtroA9LYg0Bj1hd7TpffjrodbYw0118YX6OElPzLloA%2FTyZecFf6%2BDn&X-Amz-Signature=7d0e4f4969aab8db7d3ec6ffeffe4f3181cc6c8b12f71cddb968ea4d4016cc10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2AFD753%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCRFpWl3QTlAvgNwybxmVSsj%2BpkfWcL0K6YzCzNUNDlRAIhAIrfOtNT5TAnwptAlDoOjB7ccVE5AbXQgLUeKrsPO%2FhmKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3B3dLDLNUivKopsYq3AMoLqDyr02TiwBehfvQqh6Ounmuz9DsQqbVUjydkmbOrZlNsAxZ1Ot%2Fkam5ZTTrKVA98kNBJnuVIUBauDpXqiuWCkSKjhAGYRIrGn09IxD%2BslqAWEtBQAsjP4FjVQCCLcGnb%2BLm%2BpHvxzDlyI4xa5B%2BZ88P7Vf%2FPycd7phmFlWbVINJE6o7e9bh7xrOZD1gSmg3osWPIgDdSJfMFmJ2iUluz1PtGE1t5IXQRK94F%2BhVFCjcnd9IQ6Jm7xWsDtT2IydRqTSTAIMlE3k62%2B5nGFZgQFJqq0wlkuGpquPSkK1U7C1JK%2FxBtwzq4RBIsA%2B75Tncc0fn4VGxhiGF1JzNkruFSRABgtAUp9pktqxc%2FtgRYJJ8tE0K50n834r2m7VCcXKMXDcqqPtDEtWWgj32%2Bobc%2BYtHRtbH%2FHfw%2BJ6WFPCh8qkb%2Fd0ZM5kWZbDKae4pGb3HYL52EIKXGSKnngugnj8ntGqU0TMYfjHDI1vwb8rIVr40GVnYV6cVDKmRnP8jojAU6nKSUgT509rgoo845eNs7KuWfS%2BViiOVh7yhkFRk8abeuXTU4hBvgD6ExogIcONM6sWaT6fIHMtaG0G7oe9BQkai8nbnfo7TF0wX%2B%2B1HUokir9kQxiOlCou0mzCnu%2Fi%2BBjqkARON6739dn96G3bSOHGU%2FbNc0%2Bn3b25ozYO2WzYmKjA7JZXBdAngDGe8gFkyI%2FVbaPCM0RQ%2F00EQZa2MrGDFg9iY52pIfLMeHdchijnIdQE4PFlvcuza1MDPtAKcQvr%2FxxeuTRz4%2B5PAEymKVxroCVXjL021MczrdMwUjc1OAICxpLfmhrHeM%2FKgAdE12dyRFxFCeGfYuXs1pQKbWJwxi0nVuyj2&X-Amz-Signature=b69ae5393ae87b2c1a1c77ec38df744ca730f8b16e2dcb72bda87ba602e0909d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DJ6WR5%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCrrcmbsJxs7Zs4jJa6K%2BiDAC%2FIgBysC%2Fi1v3rMOr%2BbPAIgKX%2FYWWr7qllYZkh0%2FLsOGEcB%2BdCS2LgNJL%2F9ChtyJpwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4vOXg3Z1TDyEplpCrcA4N3Tu1H2cQCxqotREF4lKCvvguErjkArqMWeOuHiV%2BFePLm15wJMM2fT%2BjpttZtvRc9MUAPXC%2FXiHd%2Fd4ngrXkfm8FiTzHue%2FLeQTLME%2FkZQCO%2FWMLsjPMwrwywIPulm04KxxLcxYXkzbeD9vHUgww40XHQnB%2FsC5mfvDPdiniB8kpNiptH%2BcrdYCJhV31H6yeRvj%2FCgZZf%2F0Tx6rHMt5xeHcCKEoYKi2KanNSGry5rF3LKgLIMBlYz0tOjq9%2FmHxnqx8%2FcyaFzXF%2BAA7y%2BmwUGFe76TgvUsrWrvvU2XGtrs%2FLvo%2F5MZhqu6ZRmfi44LTqa2ySy02WATatwql9uprluxl1XGmCmdbSVPXMwRQy%2BIVrzwDG4GePDqOHEV0ZCdgCIcfcc4l%2Fv0BZcVA0MXU5SVEqvFzvvzXIZH5Z%2FGtHgW1nr4HM%2BUa8ami%2FDjKEMq5uPrrFq%2F3%2F2J%2BhJSEvXrUB5O2zCMtKbLUDwLFqbB8S0F6Bz8WX5n19HvEhiCEyfrc1L0nU6ucdS9xScbV3r55GYqIZaZX2xJ%2B8LkBFQLTM3jnkJVK6Ekm7Y7Ln263V7Y1THQuhnU46T24djbNp%2Fb05Xj8%2BoSHYTSQbk3b2E1iW1rKmDNQysQmitUzXcMI%2B7%2BL4GOqUBU%2Bv9zgLfStwZl9Y2kKXUBBregA6xKaL3YkB8rWCHLK3LD9iLZoqlsu8SQBDf3FLUitXYZonRSAEMUkVeRWoZeZgl3MelYAtlOiUfsSMJcpAMObWuVTJ7C4Oug9dbigj9YXFIVzBe3LQcMqP9w9GXF6Z5orkeMe8fX7I4m3QhcjpT0UiHSj4Xjq7cE%2BNrEtvfDI5%2F7dWUEv%2BjUu9Cys6FH7VWiT36&X-Amz-Signature=98a8aefb31f8f4e6fa17288adf197dd221d8469589a6abded5b3889811a91e84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M2C3XRG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCsyVe75%2BZ6nZA1beX1od0FqppmhGMJR9iJIFtSFVB5RQIhAJ6fFZ31b58z6A6rPfKisexnq01yjMEYoA4Yw0VSoMFfKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiY3busCWyuqb%2FZBcq3AOSxgoruTrFaH6WoWkRB6JwD2MxHp6c3Ds8XTMJ8ex8EXz%2Bc3WhZWHM6gWxCvhZkkHGsU30KKjj1%2BoShlPASv5W%2Bf0UPcL6rHyrU5FQZr5Cy%2BuPUs3gFoGdpTVtdP1xb9MnGPpqiFOpoYjSBsdQ5hQITJDKaq44xB5bXDcRg8O4kVEDTn9Qcdgs1wHS3i0F%2FVWySR1ww8RwD7GkJe5%2BeW0o1z6VHOMkQ4hbCwr81KW45D7hC7%2BJYuzsA9%2BYB6XnpVgTa79ZdXWB5WLrVTDnk7m3ay8OWP5%2Bb5ChQjvsHW%2BVlF9TNI9pYBNihn5mJlWcjKAx5WE0JbJ7VLl3FksQFJsCaVavtl%2FwFCfv9v1pvqmpwVTLCWB5d0ivQvjhwoPtFWaKXhwX09d%2B%2FEWVUeoZpTk6VPqVkxaQjkrcIPaqj5JbICSXKXj0hCce0fugQkB49%2BZwRSq0GYqHOe4gGRGQ7YpfYHkz3hpsWOPyvGi9bDojc%2FAnZMNfLmuXYvwVZoKkqSF%2F0VW%2BvJbL5WNHHkt%2Fxylsq%2FobswZCLpbEul4k1kQqw86e%2F9LCpen7IFVpjo7Bh46x64kBDRbnHoIcaMDTCjwaMHqtCdBX8js3gxVyGWiVmUClKiclG7g6UpvUuDClu%2Fi%2BBjqkAcY5%2BWqiXlUh4yiCj1CU5GYp%2F9sPu65j9B04OjY37%2BRXlcYAYA9wSsrIXmpSTVGAvVkagNgOrPWuhwHBJwpKZ1hlCF5Ehat1u%2BPkG1Xr1avi6DDSr3bzFKj8LXWzI7tVrLf%2FTYalSiX21rpQdDAZKHPue0Awptm4gRRYwXtroA9LYg0Bj1hd7TpffjrodbYw0118YX6OElPzLloA%2FTyZecFf6%2BDn&X-Amz-Signature=13d44411ccd19ab3cdd7a925103ea053dd692fae6ac07c46d4f001de21ae9d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
