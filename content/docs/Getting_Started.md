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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NX7ISY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIjFVOUWdLi%2BCWt2JQabo9TN284MA2UJenIUbDGm8d2AiEA8p9Qz5aL%2FrvbF7wzx7zIkU%2BHAzTb80SKvVch8xXiAUQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFk7Y%2FFPwhw7yUaAqSrcAyOdY1HL4xEsuQRz9UJV6CZPQ4l1gnydXVFMMHoMlkCGa6yd%2B1gTi%2BRxxvAxwCCI1yVbTJsBYhXZ4PXYBsk5VPvwk7tlGZKl0%2FR5z8%2BJZ3o6dp%2BFQOoQPwPqY4B5ww9H3x2pxUQgcDPYYMSu%2BBnLCKURMdVSme0bTSWjEwlIP0aEoMJuT3DnmfKtDOPfE8aEN5qGS%2BmQX9ghqdaLhYrPaxXGkC2DTqq4V6TNYlShKKgTG9xAoxF%2BEvdfBgOYXNWkRTEzTa7TYrjezJLeVWrzPxGi9v6Q8IxIGz1tz0%2FWaTV6R%2BVFHEFvXT4kypyZPCUT6F5ofBrH0ObObLiYelonx8TFYjkCYL82YVGIBCqeGCK6Te6kCx0HEWnjUuyjMjYLOGZZCCMu9EKS1wlPqjfWZchvV%2BHrQZcQOsJ4I3iSkstP5EjrVhcVGVHh0Xn%2Br1OkJ98sJ2pYVKrDTO99va8%2FL7n9qmyxmvfp%2FxjmwVzm0xJ12N5JkW8zCPZZzcWvWNlsv8GkmsGQrl%2BLFjdAuVQp%2F4eKagQFJ0T4jDqukK1r8kITJtDUTt5q%2FFVC%2Fy5pa%2FK5qG7vfHpuzj7MfHLmgYQgCOgdFheTWzEOf%2BjgxG1lXCTaF1vmVqiSwEaNwA94MOiKl78GOqUBAEcmMBo5obYpn3CvmLNbYOXI0nb07ST%2FZSWzhDh3uzQKtyIbfdbgpluAMtKygqTVtXwYyTPIBX3tEwnnrZDUaSlrxcaSHNlRAmCCYpOyh4wTKPHCrjthElc9T%2Bknu5ElXV3KKn0WABQxcrXgOrriPZ97c3g%2BPB1B8WkUh41QDOPJSZy79%2Fg7Ghhow6YwIxKrF2gTez0xR2P3uNThaoVV7eG2FVhh&X-Amz-Signature=c373d263f52dede533f42262cb1fe40a1afb2f563b2421599512f348f706dd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NX7ISY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIjFVOUWdLi%2BCWt2JQabo9TN284MA2UJenIUbDGm8d2AiEA8p9Qz5aL%2FrvbF7wzx7zIkU%2BHAzTb80SKvVch8xXiAUQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFk7Y%2FFPwhw7yUaAqSrcAyOdY1HL4xEsuQRz9UJV6CZPQ4l1gnydXVFMMHoMlkCGa6yd%2B1gTi%2BRxxvAxwCCI1yVbTJsBYhXZ4PXYBsk5VPvwk7tlGZKl0%2FR5z8%2BJZ3o6dp%2BFQOoQPwPqY4B5ww9H3x2pxUQgcDPYYMSu%2BBnLCKURMdVSme0bTSWjEwlIP0aEoMJuT3DnmfKtDOPfE8aEN5qGS%2BmQX9ghqdaLhYrPaxXGkC2DTqq4V6TNYlShKKgTG9xAoxF%2BEvdfBgOYXNWkRTEzTa7TYrjezJLeVWrzPxGi9v6Q8IxIGz1tz0%2FWaTV6R%2BVFHEFvXT4kypyZPCUT6F5ofBrH0ObObLiYelonx8TFYjkCYL82YVGIBCqeGCK6Te6kCx0HEWnjUuyjMjYLOGZZCCMu9EKS1wlPqjfWZchvV%2BHrQZcQOsJ4I3iSkstP5EjrVhcVGVHh0Xn%2Br1OkJ98sJ2pYVKrDTO99va8%2FL7n9qmyxmvfp%2FxjmwVzm0xJ12N5JkW8zCPZZzcWvWNlsv8GkmsGQrl%2BLFjdAuVQp%2F4eKagQFJ0T4jDqukK1r8kITJtDUTt5q%2FFVC%2Fy5pa%2FK5qG7vfHpuzj7MfHLmgYQgCOgdFheTWzEOf%2BjgxG1lXCTaF1vmVqiSwEaNwA94MOiKl78GOqUBAEcmMBo5obYpn3CvmLNbYOXI0nb07ST%2FZSWzhDh3uzQKtyIbfdbgpluAMtKygqTVtXwYyTPIBX3tEwnnrZDUaSlrxcaSHNlRAmCCYpOyh4wTKPHCrjthElc9T%2Bknu5ElXV3KKn0WABQxcrXgOrriPZ97c3g%2BPB1B8WkUh41QDOPJSZy79%2Fg7Ghhow6YwIxKrF2gTez0xR2P3uNThaoVV7eG2FVhh&X-Amz-Signature=9f7f19f505a25b15944a668f8f275507c0f7efbb5a1a6a310e2284728ddd923c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCAZYKC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrbr8VWBrtjMSiFwqq6Os1UyXLVUWw%2FAC9Nv0wmDaTvAiBylmxcMEkSVc7DlIvFrjSeMvxSbr0yk68y%2Fk6CdB%2BL%2Byr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMbPPeeOMQzTaXGNxxKtwDXXYGc4ZoZU6d%2BGXyfSW4NYNaK5rqnmpBJ5IUPuhih0a7mQOo3BehKO%2Bs%2FxQH8adeGAt8ENE2oeWenkJUujSEcRRwXxzRlnJPo4Xa96fb2GezLuRRhZ4NiR4IyQeEcFIlfr8zL69OS8yFdziHipOAwRDo%2BaPxEgiqXgLq5qBsSrbezAvoniSdv6Inq%2FXs54Ne20iwYqq4iQ0vxF2h7JJ5rDRVQh8xCzB14uKW8vqO2a%2FL0D%2Bm7i7v%2FoVAddRhLu1cn4NNRGh9xGA5W45mJPMIUO21ZBsV9NJIdgEWCL4p%2B45Ag0w8viOCCSN22KidjzbCvSodXu4cXak89BfRMfqP8tbGQYtUkgMYgj8fIH5%2BR7BuGLCEHlJJt8kFxxpnmTTE6uLWD1%2BcaTQ3BRMFS5WG1oL%2BFvqtcsE6o2IYmwJ%2BZGiDOkfmk4pX%2FEyxOcnfS2nFoPYVNwU%2FVrMu8dTcInE2SeE84yI6rOJVr09VePrFKL2a3G15fmPuw0nWshmlldnDFeThLqWFjLaY5ZHBNfm69AHEHlo5M0u56KjOaVxZxPWSQykQ72YRdbw7NhT3o6afOV4F9qIlkvkNDm6sJL043rz5PGTr4Qbn0%2BSla7czDHCp864QHhT141RosF8w0dyWvwY6pgEoJzyJjIroKDrzwtJOvPjp2eM%2BZWxW6BJJYFpcVD8Y5pnWm149MwRHATB%2F2Ny2ScDF%2FpfYaUFs7jGiTxcqvvsgtiptobt9A8FI8skqymzaTCFuLmKKpwV4eo4CqtEu4z4pgpvOKyVbisVof02MkpX5zTy4YTofN8VnFJZ6rZQgKPHtdcPwAnb%2B82y%2FSfDEe9QjpeKYTEk5GDzGqzaHBtPQ2z9aIM58&X-Amz-Signature=8cf678b865a7f5c8044fba9e650c9e33f96f7bd6541f04c60fe82d72ef78e203&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RROM2B7M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCs0D0UKEqAo%2Bbcrjwbvl0trgRp15BOdIAzgiA7%2BRpWAiEA%2BPfk7XS%2BALluy6eUeqZ9yFIaodRsHqk%2FGuA9Roohnooq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDO%2FWZTofy4X4Wr63BCrcA5w5dE2Cyp3nt1DkH28Y4FmDlj2r0hFZfT3zrThqeLPUfs2xyE35abNOY02C2sez3VXMUR%2FEtHZNzXiXAjaN06dFUftZx%2FbZH6fmCc9VWMkFiSNJfVIZoGZRq0U%2F53%2BkfNNn16g7229TJ7clZ%2FT9NDN8l4xyfsf%2Be1MOX%2Fz5osVGKM5wf%2FdP2j53zYaZUUTew1CpAd%2BkL6HqaLlM%2BxsHCsbgNzRROWd54QkuTh35uurpTmzIzdz%2B%2Be8Ofb64aWl40GEgPhF0iQxx2YgtNOMuRKtMszJtSSKwgtEHsD9VcgnR58qggPaOZCRdONcgFM4lAQhNft5YSPjB7xnX9%2B57RBjJwCh%2BWyzQ%2Fglv57WIVX2FLEQuz8L9psQDJ6Y7FpMnz4%2FkRWVUVYLVHLvA2EFsndjU8yAmH0E77Oz01kjG2QL0bYQrO5bqY99qbnsoLi5%2BrP1VcKTRvakPE24i6Ql2Z3EtCisJwooMV1xDcWvrjtmRNE8nQNHrrVV3MC0ZVKvf4ZNMLowtvDkdcROmAOFSK%2FYx6D5gSgT1z%2BPzBO%2BGZ3hBSWLdhVgqiXL%2FL%2BEOP%2F7L1JZB%2Fc2m1WkKH%2BXhWAB8XneE9KAYQQ2ybgXYPIrqpPdGK%2FfMKgKaWH90gqSuMMzclr8GOqUB5DUXE4t6SwQlh65Rqw%2BwOIqm98my6FLW0wwyeulWaNCPwsbgLLcWH4vXNn%2F1tLtMTxJxgfOXINvTrRWvJ9lA6jFqDY4n2hBxiDToXH8Slq0ZC5WgHwdma9G2D1zQqyr3OqU9%2FGBMxKzNggSi%2BrbJX%2BUfKACLCstJSo3LlBLyuE%2BeKxCW%2FvFfX%2FjJ8pgG59U%2Fu3dTJT9lOCl1bD%2B8CD2aaV0kND0j&X-Amz-Signature=4d17492a214d442c696fbcc061eb60be66d095fe7b60939078d2bdff30ea4932&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NX7ISY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIjFVOUWdLi%2BCWt2JQabo9TN284MA2UJenIUbDGm8d2AiEA8p9Qz5aL%2FrvbF7wzx7zIkU%2BHAzTb80SKvVch8xXiAUQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFk7Y%2FFPwhw7yUaAqSrcAyOdY1HL4xEsuQRz9UJV6CZPQ4l1gnydXVFMMHoMlkCGa6yd%2B1gTi%2BRxxvAxwCCI1yVbTJsBYhXZ4PXYBsk5VPvwk7tlGZKl0%2FR5z8%2BJZ3o6dp%2BFQOoQPwPqY4B5ww9H3x2pxUQgcDPYYMSu%2BBnLCKURMdVSme0bTSWjEwlIP0aEoMJuT3DnmfKtDOPfE8aEN5qGS%2BmQX9ghqdaLhYrPaxXGkC2DTqq4V6TNYlShKKgTG9xAoxF%2BEvdfBgOYXNWkRTEzTa7TYrjezJLeVWrzPxGi9v6Q8IxIGz1tz0%2FWaTV6R%2BVFHEFvXT4kypyZPCUT6F5ofBrH0ObObLiYelonx8TFYjkCYL82YVGIBCqeGCK6Te6kCx0HEWnjUuyjMjYLOGZZCCMu9EKS1wlPqjfWZchvV%2BHrQZcQOsJ4I3iSkstP5EjrVhcVGVHh0Xn%2Br1OkJ98sJ2pYVKrDTO99va8%2FL7n9qmyxmvfp%2FxjmwVzm0xJ12N5JkW8zCPZZzcWvWNlsv8GkmsGQrl%2BLFjdAuVQp%2F4eKagQFJ0T4jDqukK1r8kITJtDUTt5q%2FFVC%2Fy5pa%2FK5qG7vfHpuzj7MfHLmgYQgCOgdFheTWzEOf%2BjgxG1lXCTaF1vmVqiSwEaNwA94MOiKl78GOqUBAEcmMBo5obYpn3CvmLNbYOXI0nb07ST%2FZSWzhDh3uzQKtyIbfdbgpluAMtKygqTVtXwYyTPIBX3tEwnnrZDUaSlrxcaSHNlRAmCCYpOyh4wTKPHCrjthElc9T%2Bknu5ElXV3KKn0WABQxcrXgOrriPZ97c3g%2BPB1B8WkUh41QDOPJSZy79%2Fg7Ghhow6YwIxKrF2gTez0xR2P3uNThaoVV7eG2FVhh&X-Amz-Signature=d033e75c7a3382a3b0ee95b7316d8f0e680c4438752aa0cf5160281325c00802&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
