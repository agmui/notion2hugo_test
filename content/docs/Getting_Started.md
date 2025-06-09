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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJOOQCG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjagJOF8g5i8NreGEqYF4hDnik5WPxKPGoVvVPwiowUAiEApYJm5J3fMETmcmmqeTS15XEbFKdTn3YJ96WhWQeD%2F7AqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlw%2FRdjEfn%2FVOYVwCrcA%2FqXx8WMeB%2F%2BykKabg5scz8G7CaOSy%2FGlfx4%2F1Y%2BsFwmGulnpM2tAN2Y0StwqXxnwYiknTNq2ULuhsOPPr%2FmZSCCtGEvXKQ%2BoZ1Ni65jkOhC5BvPhuXCbG0PfHVHtnv%2Bm9%2BaOHehNszAdEZxHRrh9ZJtJGj0YM6sma6j2rVdrwkEzmNL9FwYMJqyd%2F9omqeyNvDhGlZ5UytjUx%2BI4JG59aFnnVRecUgTsnWZPUlktzRFoQ3JX0YnlnRBXmyzXUHzhdZiUxdNDc%2BTKSAQIAV%2FMrNnIRXVZ9ZrLE735ZNEF2wl6d8DOtknewxeKnliTCBaGPN6G4E5GPeizBHeRC2fFPJ2uvgMDik9D66LyZavfynIsxYJE1Nj2KM3COh3CY2fpze%2BPhmCZj3B4k230a9CY1w%2BZewvtU%2FTpchBjQZeoFgob1k5JXK%2FESju9dPf%2FmX%2BeampqXBbxx66jpwZrQNwnyz77r%2FSZDlbS2dJU5hdRR5h3Ne%2FKJ0mFS7T2j06BYnfEWClZaDCKboxVujG9SxHOw8Him30pGdzRNFL6zr4o1OGGnbrCiS3HPDQcPePk36pE88jR0A5P%2Bg4WChZ5ldk3YxyqU9W1DZoaC5eLv52tHmJoieb71sC5FAnXj0oMO2dm8IGOqUBQR%2Bm%2B2qEB4UyRDJ7ssOTV5Xy2RyWN20n0l12b88IQrPmBSzDgDhUqXfy5NnpLgjzsA1QUeYCQd%2BvK%2BPy482ELAB%2FNDeWaQDIKC%2FxkvYOIZHrSGkK5BOcdipcDaWOEXo%2Fu9%2B32SXVSW9LPuT6oiPddBmGG5%2F3lCDT5m97s5C%2FCoAU4ObakF1adgzg04WinMtNycLJqVij2QkkkupNDY21YxgBXecf&X-Amz-Signature=3650501a08ac10b1c220fdd9a236754cbd37362880871ad2e7468193e518a016&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJOOQCG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjagJOF8g5i8NreGEqYF4hDnik5WPxKPGoVvVPwiowUAiEApYJm5J3fMETmcmmqeTS15XEbFKdTn3YJ96WhWQeD%2F7AqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlw%2FRdjEfn%2FVOYVwCrcA%2FqXx8WMeB%2F%2BykKabg5scz8G7CaOSy%2FGlfx4%2F1Y%2BsFwmGulnpM2tAN2Y0StwqXxnwYiknTNq2ULuhsOPPr%2FmZSCCtGEvXKQ%2BoZ1Ni65jkOhC5BvPhuXCbG0PfHVHtnv%2Bm9%2BaOHehNszAdEZxHRrh9ZJtJGj0YM6sma6j2rVdrwkEzmNL9FwYMJqyd%2F9omqeyNvDhGlZ5UytjUx%2BI4JG59aFnnVRecUgTsnWZPUlktzRFoQ3JX0YnlnRBXmyzXUHzhdZiUxdNDc%2BTKSAQIAV%2FMrNnIRXVZ9ZrLE735ZNEF2wl6d8DOtknewxeKnliTCBaGPN6G4E5GPeizBHeRC2fFPJ2uvgMDik9D66LyZavfynIsxYJE1Nj2KM3COh3CY2fpze%2BPhmCZj3B4k230a9CY1w%2BZewvtU%2FTpchBjQZeoFgob1k5JXK%2FESju9dPf%2FmX%2BeampqXBbxx66jpwZrQNwnyz77r%2FSZDlbS2dJU5hdRR5h3Ne%2FKJ0mFS7T2j06BYnfEWClZaDCKboxVujG9SxHOw8Him30pGdzRNFL6zr4o1OGGnbrCiS3HPDQcPePk36pE88jR0A5P%2Bg4WChZ5ldk3YxyqU9W1DZoaC5eLv52tHmJoieb71sC5FAnXj0oMO2dm8IGOqUBQR%2Bm%2B2qEB4UyRDJ7ssOTV5Xy2RyWN20n0l12b88IQrPmBSzDgDhUqXfy5NnpLgjzsA1QUeYCQd%2BvK%2BPy482ELAB%2FNDeWaQDIKC%2FxkvYOIZHrSGkK5BOcdipcDaWOEXo%2Fu9%2B32SXVSW9LPuT6oiPddBmGG5%2F3lCDT5m97s5C%2FCoAU4ObakF1adgzg04WinMtNycLJqVij2QkkkupNDY21YxgBXecf&X-Amz-Signature=4974d93dc50c7ae709a932124d3c8cac57384843caabdbd2bff0d1dc3c1d007e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJOOQCG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjagJOF8g5i8NreGEqYF4hDnik5WPxKPGoVvVPwiowUAiEApYJm5J3fMETmcmmqeTS15XEbFKdTn3YJ96WhWQeD%2F7AqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlw%2FRdjEfn%2FVOYVwCrcA%2FqXx8WMeB%2F%2BykKabg5scz8G7CaOSy%2FGlfx4%2F1Y%2BsFwmGulnpM2tAN2Y0StwqXxnwYiknTNq2ULuhsOPPr%2FmZSCCtGEvXKQ%2BoZ1Ni65jkOhC5BvPhuXCbG0PfHVHtnv%2Bm9%2BaOHehNszAdEZxHRrh9ZJtJGj0YM6sma6j2rVdrwkEzmNL9FwYMJqyd%2F9omqeyNvDhGlZ5UytjUx%2BI4JG59aFnnVRecUgTsnWZPUlktzRFoQ3JX0YnlnRBXmyzXUHzhdZiUxdNDc%2BTKSAQIAV%2FMrNnIRXVZ9ZrLE735ZNEF2wl6d8DOtknewxeKnliTCBaGPN6G4E5GPeizBHeRC2fFPJ2uvgMDik9D66LyZavfynIsxYJE1Nj2KM3COh3CY2fpze%2BPhmCZj3B4k230a9CY1w%2BZewvtU%2FTpchBjQZeoFgob1k5JXK%2FESju9dPf%2FmX%2BeampqXBbxx66jpwZrQNwnyz77r%2FSZDlbS2dJU5hdRR5h3Ne%2FKJ0mFS7T2j06BYnfEWClZaDCKboxVujG9SxHOw8Him30pGdzRNFL6zr4o1OGGnbrCiS3HPDQcPePk36pE88jR0A5P%2Bg4WChZ5ldk3YxyqU9W1DZoaC5eLv52tHmJoieb71sC5FAnXj0oMO2dm8IGOqUBQR%2Bm%2B2qEB4UyRDJ7ssOTV5Xy2RyWN20n0l12b88IQrPmBSzDgDhUqXfy5NnpLgjzsA1QUeYCQd%2BvK%2BPy482ELAB%2FNDeWaQDIKC%2FxkvYOIZHrSGkK5BOcdipcDaWOEXo%2Fu9%2B32SXVSW9LPuT6oiPddBmGG5%2F3lCDT5m97s5C%2FCoAU4ObakF1adgzg04WinMtNycLJqVij2QkkkupNDY21YxgBXecf&X-Amz-Signature=1a5c4a85bf39798628e357a7c7551a0641e70c5624642cab14350dc50222900e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NEKWGEU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVQx7rEJx0WEw%2BavpDmnpPUZrghtN7NmFlq5ij0R8VdAiBEduKjw6AEWj%2F8NQ38id05u66jaFErQZjv1ahmZdRAoiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyWyzKB3zuTpU9ysDKtwD750WDUPqMRHogexajyhKoMbN1b4ky3Lg%2Bh0C%2F29Bz66U65MbnQ88ILNy1Y3H9UMXpN%2BSsWKgJ5j6fLVE%2FTkNn2eHAUi79zU%2BDlw09azEuOjizr73z7oQuiToWndFyg2fQHb9yRtNc1axeJqzlIZ187bvsLwsz7Q6Nx80TPop0GFZreUaHC%2FD%2FzCxF40UXHAcGECbuV5ErWtoSy44JR16pUchL%2Fnb03wjOYw9gGBZLJ0S%2FEdOxS8%2FDeQm5IXu5Cfc%2FkQMukGGPTKPB9q1uCHOUS4G%2BqpF7DTVumQy0oKtwzfEcGtigUVurFshiSf6%2BYdo2SFpi2ivXWG8HXBHewVSYnvAifdXWoR6ls%2BJqG0JuxhujEVOSGdtyB6LoaACtMgPv48xhVDcwsYaRHGZROD%2FmvwFyJdM2Zoh4hYvAEtrWp%2F2Gv7%2FfLhHYdozO8n%2Bo71kFVwmbHpLDqFOw3iF70hAwAT4hjcty%2FoaNrs0SoxZAYjobecq2Sd%2FrXNoJFrQJWIgs82Z8dT3%2B4eWH8U9NGJxwXG4zyBh5%2F1sEWLZ0mCi9EfQAx2%2FluTodtR7nOwHsf7x7H59roVUcVTRohlwJ66WxuIjRMZ%2Fm5TYBPEfhD9MYmQZEyMeuVc0fx5wDUAw8Z2bwgY6pgHNagTdvm92QoNL71BemSbq94Yxq7W5ztsJiwlDiAOKpIM%2F8Z9a%2BxF05biy0gK58hl8S8IWMjxP%2FsMIecrj7%2BFuNx1QRwGA475FQl%2F6f6z%2Fedly4BcOpIart7cf8UElR7LGoPWNxfpng3Y%2FgMpYZq8JuFYXC%2BqT12VhkXeOxVE%2B7s%2FyY0isvpEmCuCrioVSDyaK2IyjrqsA%2Fgjc6KciaJfLCoCfBlee&X-Amz-Signature=7372a5e2eb7666d67d92fd1212a083630a0a2112d8873d8a8698b7b32d8deb64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUF6HW7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtSsoQfbAmPqBQp4iefvq2AbWdgdrX%2FnQfUZVp2TkaOAiEA1KtLUui6q1mdDMmxBxWfsKsRd%2B5XdCrbTVZrJUwhij8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrqimjscDKHyxYlZyrcA%2FCaD%2F%2B1cakMlhZlqf2oWjssA5%2BlVFYJ%2B8fAYK3yoTJ9NSGSj5IGH5Jxxxc8LCONCR2wBQewCjEmizG2y%2BIkFR9W76b%2B4xm%2BmEuUyae%2BXBHgTD0mHYq%2F%2FLCXTs3wf6WxcCxsoENZNUoMkM7P6iExsQk6iuGhMWt%2FPdYlwyoDonlpyD%2BSLfM4GRnINNPPBh89UQzrovpv8OWnOvSdCq2pxfwARZSJhqBwRqQ%2FzIkNJN8n7PQ5uqPOFV5zhZrt0auL9%2FtdLsxnHAobh5R6n48Ew2SXMleHn0jEfWA9CcGLiIdKUNO3GdbQOSHjIBVpItK17f4RMRez%2BWyEP2MLQz7ZQXqpFzPSB1jAR4YWzGp4%2Bmg%2FFs%2BzAx02sY8eAv68NdiQ0v9zspGJoLThggDFLdYyJ3KoQhr%2F9g6%2B39TPpGgAPits%2FnVSsIKRgitzfYz2RAAXxUpENopT6Ba14THa7cGkETz0MMLNSjikbO9sFuNrgyWiES2%2Bk9Bdoeiw3h%2BzBQRJhnfPziM6lDemVVvnBngIy7goWZufcQINsxzBLKE4Udh987AxQ5hVVHCY391RitrlsOXiXPIHnmP60DqCOT1uw02ZhFyR7fxnowbjR%2BB9IFHa9o%2B2izy4MWV7lndQMJ2em8IGOqUBq2LnsCyIaXYv%2FYV71NCorTTZuFIFESaQG%2BYmZftO5jXet%2FeMVQ2sGrBS3sXwfkADcgadbfE4K5QlUGJDAWdBuY5YKNs9VFKuWslXd%2FTv99d8lyGDS3XPy5hESEfog%2FV9rvU0qLhvWtWxIet7B800UTNidlxU0ZbvECa9LRuFyHBBuKcHb%2FsXr4BI9qvEn2G26s5s%2Bl2xS%2B9TSiTMcuMDSRcU0fTD&X-Amz-Signature=6c0d82de9d4256c184108fb9474ca60133f04670c2da04eb0a539357fda8ee5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJOOQCG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjagJOF8g5i8NreGEqYF4hDnik5WPxKPGoVvVPwiowUAiEApYJm5J3fMETmcmmqeTS15XEbFKdTn3YJ96WhWQeD%2F7AqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlw%2FRdjEfn%2FVOYVwCrcA%2FqXx8WMeB%2F%2BykKabg5scz8G7CaOSy%2FGlfx4%2F1Y%2BsFwmGulnpM2tAN2Y0StwqXxnwYiknTNq2ULuhsOPPr%2FmZSCCtGEvXKQ%2BoZ1Ni65jkOhC5BvPhuXCbG0PfHVHtnv%2Bm9%2BaOHehNszAdEZxHRrh9ZJtJGj0YM6sma6j2rVdrwkEzmNL9FwYMJqyd%2F9omqeyNvDhGlZ5UytjUx%2BI4JG59aFnnVRecUgTsnWZPUlktzRFoQ3JX0YnlnRBXmyzXUHzhdZiUxdNDc%2BTKSAQIAV%2FMrNnIRXVZ9ZrLE735ZNEF2wl6d8DOtknewxeKnliTCBaGPN6G4E5GPeizBHeRC2fFPJ2uvgMDik9D66LyZavfynIsxYJE1Nj2KM3COh3CY2fpze%2BPhmCZj3B4k230a9CY1w%2BZewvtU%2FTpchBjQZeoFgob1k5JXK%2FESju9dPf%2FmX%2BeampqXBbxx66jpwZrQNwnyz77r%2FSZDlbS2dJU5hdRR5h3Ne%2FKJ0mFS7T2j06BYnfEWClZaDCKboxVujG9SxHOw8Him30pGdzRNFL6zr4o1OGGnbrCiS3HPDQcPePk36pE88jR0A5P%2Bg4WChZ5ldk3YxyqU9W1DZoaC5eLv52tHmJoieb71sC5FAnXj0oMO2dm8IGOqUBQR%2Bm%2B2qEB4UyRDJ7ssOTV5Xy2RyWN20n0l12b88IQrPmBSzDgDhUqXfy5NnpLgjzsA1QUeYCQd%2BvK%2BPy482ELAB%2FNDeWaQDIKC%2FxkvYOIZHrSGkK5BOcdipcDaWOEXo%2Fu9%2B32SXVSW9LPuT6oiPddBmGG5%2F3lCDT5m97s5C%2FCoAU4ObakF1adgzg04WinMtNycLJqVij2QkkkupNDY21YxgBXecf&X-Amz-Signature=bfc19ad1b41aa4a43d4dc7546b60fb9a8d0039d511923450ee4ec7b1a9edbe0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
