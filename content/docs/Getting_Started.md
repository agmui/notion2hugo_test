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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XU2OALU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAFbWv4LjgyN2V82%2F7zEGP08XM1EaVh3ziZ6haZzbeZCAiB7oaX%2F4hgcXk0fESxZSrPBdgwk6bBp3oN896pnGdk%2B3Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMuwFRqKs74dyLSlXPKtwDX3XXvDPfN%2F%2BPSf1VtUKLd72L366uLAcwh6%2Fm7YpFUrMFQcVSHjgpgzaz5z0quCfO5B8Sgrc30zu6IYi8KW5S1YVyRRRbx1xP9FGtFrB45g5kCX8uAaBheqdenDh%2BBJ1HeMmBjHGHnxqh4YWWal9Kwv1zTLLA%2FRUEjct%2F1yGKQUTtl4UmdoG2SSTICCBQdw2dCcClUL1MVmvbmH6Qfnwly4ll%2BYD22JDaP2IrCl91QD%2F7VJJJ%2F%2FEQSO%2F4qJ%2BhZF396HUyNf3wJzk1VHo2aCcrpWNd65Rr80a%2Fubw6UmdzmLIf1giTN5t8LmyGkpCFjZNO9cb6MSwqcf2jfeiIQP6MfzhWI0fFiiOHRc9I9E4Ob1h53uUo%2FzgiTyTLnKaYf1LZaI%2FSIAk3yWTQRW8vrpL7nYGPC0Ym3y8WjbHeBV1mnTDDuXcJJrFkp16AVGQ8oikEEV6IwJfUDQSr7TkPTjs2VZQ7fTephK0sYD996o9SF79T4vSG209zv3yqorMWx0TJd37PhZYCTkdGfkEFUOmx33LtEAFiDz2DrviBYH5DpXomwq0RTqZJ5%2Fkd18l9TIjuql3Wrqkc%2F%2BIE4c23XwLNZ3Yr%2FB7zTg2caPUE1KDmiqAAch5L1AD6a8dxHFAw5%2F6DwgY6pgFc1moX1jnnc%2FH9sr8SnQ5McWFtejStHFsFolEiObPszbb4oJaWc%2BJ%2BJ7lF1q4DAS3h1Gu3llUbLBqFHu7%2FkllOo2S03nqZIUFVAByVTsvu7CgtP0xktW51f%2BDkrS7BSjzSJCtZF38WdEZJZtbl7vKd%2BoAfqENMDddagZoYTqOL0oj5jLZFhG4TF252lTp41GxAVBvsDDWVDD2rUejoocjLs2XXqnwu&X-Amz-Signature=793ca2213224e33ab7157d483e87afb63c924d5420b83cb47871303472d414b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XU2OALU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAFbWv4LjgyN2V82%2F7zEGP08XM1EaVh3ziZ6haZzbeZCAiB7oaX%2F4hgcXk0fESxZSrPBdgwk6bBp3oN896pnGdk%2B3Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMuwFRqKs74dyLSlXPKtwDX3XXvDPfN%2F%2BPSf1VtUKLd72L366uLAcwh6%2Fm7YpFUrMFQcVSHjgpgzaz5z0quCfO5B8Sgrc30zu6IYi8KW5S1YVyRRRbx1xP9FGtFrB45g5kCX8uAaBheqdenDh%2BBJ1HeMmBjHGHnxqh4YWWal9Kwv1zTLLA%2FRUEjct%2F1yGKQUTtl4UmdoG2SSTICCBQdw2dCcClUL1MVmvbmH6Qfnwly4ll%2BYD22JDaP2IrCl91QD%2F7VJJJ%2F%2FEQSO%2F4qJ%2BhZF396HUyNf3wJzk1VHo2aCcrpWNd65Rr80a%2Fubw6UmdzmLIf1giTN5t8LmyGkpCFjZNO9cb6MSwqcf2jfeiIQP6MfzhWI0fFiiOHRc9I9E4Ob1h53uUo%2FzgiTyTLnKaYf1LZaI%2FSIAk3yWTQRW8vrpL7nYGPC0Ym3y8WjbHeBV1mnTDDuXcJJrFkp16AVGQ8oikEEV6IwJfUDQSr7TkPTjs2VZQ7fTephK0sYD996o9SF79T4vSG209zv3yqorMWx0TJd37PhZYCTkdGfkEFUOmx33LtEAFiDz2DrviBYH5DpXomwq0RTqZJ5%2Fkd18l9TIjuql3Wrqkc%2F%2BIE4c23XwLNZ3Yr%2FB7zTg2caPUE1KDmiqAAch5L1AD6a8dxHFAw5%2F6DwgY6pgFc1moX1jnnc%2FH9sr8SnQ5McWFtejStHFsFolEiObPszbb4oJaWc%2BJ%2BJ7lF1q4DAS3h1Gu3llUbLBqFHu7%2FkllOo2S03nqZIUFVAByVTsvu7CgtP0xktW51f%2BDkrS7BSjzSJCtZF38WdEZJZtbl7vKd%2BoAfqENMDddagZoYTqOL0oj5jLZFhG4TF252lTp41GxAVBvsDDWVDD2rUejoocjLs2XXqnwu&X-Amz-Signature=8e04b9340804a56034950d48826b4a9dfee0c20ffeb1341a19e68d0270708a41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XU2OALU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAFbWv4LjgyN2V82%2F7zEGP08XM1EaVh3ziZ6haZzbeZCAiB7oaX%2F4hgcXk0fESxZSrPBdgwk6bBp3oN896pnGdk%2B3Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMuwFRqKs74dyLSlXPKtwDX3XXvDPfN%2F%2BPSf1VtUKLd72L366uLAcwh6%2Fm7YpFUrMFQcVSHjgpgzaz5z0quCfO5B8Sgrc30zu6IYi8KW5S1YVyRRRbx1xP9FGtFrB45g5kCX8uAaBheqdenDh%2BBJ1HeMmBjHGHnxqh4YWWal9Kwv1zTLLA%2FRUEjct%2F1yGKQUTtl4UmdoG2SSTICCBQdw2dCcClUL1MVmvbmH6Qfnwly4ll%2BYD22JDaP2IrCl91QD%2F7VJJJ%2F%2FEQSO%2F4qJ%2BhZF396HUyNf3wJzk1VHo2aCcrpWNd65Rr80a%2Fubw6UmdzmLIf1giTN5t8LmyGkpCFjZNO9cb6MSwqcf2jfeiIQP6MfzhWI0fFiiOHRc9I9E4Ob1h53uUo%2FzgiTyTLnKaYf1LZaI%2FSIAk3yWTQRW8vrpL7nYGPC0Ym3y8WjbHeBV1mnTDDuXcJJrFkp16AVGQ8oikEEV6IwJfUDQSr7TkPTjs2VZQ7fTephK0sYD996o9SF79T4vSG209zv3yqorMWx0TJd37PhZYCTkdGfkEFUOmx33LtEAFiDz2DrviBYH5DpXomwq0RTqZJ5%2Fkd18l9TIjuql3Wrqkc%2F%2BIE4c23XwLNZ3Yr%2FB7zTg2caPUE1KDmiqAAch5L1AD6a8dxHFAw5%2F6DwgY6pgFc1moX1jnnc%2FH9sr8SnQ5McWFtejStHFsFolEiObPszbb4oJaWc%2BJ%2BJ7lF1q4DAS3h1Gu3llUbLBqFHu7%2FkllOo2S03nqZIUFVAByVTsvu7CgtP0xktW51f%2BDkrS7BSjzSJCtZF38WdEZJZtbl7vKd%2BoAfqENMDddagZoYTqOL0oj5jLZFhG4TF252lTp41GxAVBvsDDWVDD2rUejoocjLs2XXqnwu&X-Amz-Signature=75c6e59d869a376c5e77dee03edbc806eec921ccab09c215f4d5f864a654477c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCAIP43%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIH4vrR82nIvUomk9Z5uz1H%2BiH3vm1S5k8p4aKUtOuFt6AiEAnWFXUPrMubhdBB%2F862czJP%2BJhE9pSWHTXIZmgP3Ju%2FUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJkvSt42klO2esrRsSrcA63r1ezoFWmrZ1MtGkvCX87RkZxl1tRpsfIYlsa6Fp0pA8FaNUyfWPe3loS%2FLa1JSiRNovobqj%2F3RSLkC%2Bs6ICn2z459FKv00%2Fh0CvbGIZKVVB8HD0Ee4XWc%2FP%2F2C8w%2FOP6TCh64CiL3h1ntryW3G10TbQAazAQCmDeVRmE0CYHMb6PcsAbkk52sMc0nNT5Ds88HXJ%2BhNo93fEGDUgz%2BDYAxi4HFPVAAWZXQHc4siWmu%2BA3ZfyAbx9FhwcR%2BUDLdUo%2FagHDDNBZCR5NOI%2F0JA13FDUT8tveMIf16BLwsFCFslfNen3WMQqTGqwcrvxu8GjAkourFE47mplMtnH9DopZUOqNKIg6butwEADljmkJL5Ejc58i%2BKzVbMsfW9L4Ostqvskfl6x4q7DE0t2uTRd162ISf5AfBm0wgYTmoqBWc1Cd1v2txN9DFZ9m924KrkzhPC1YwyxILuYLh5%2FagVidYlPKLQibpm9oFIq9Q8yXnaWJYC%2BxNH462xgNGYH2yFrhIf7W8Vh8pmnVLH82gvK8ebpZWeWwDKiYuNv%2ByW7ds8v8uS1BOc7sIvNdrnaG%2BuTai6quYZl%2BAVjOWrxeBGNnROjcjrkz4wBPFZyuQSSkZIsJkfmytmCWwXlYqMOPpg8IGOqUBMOXdHDMwIPFwm%2Fzh5e%2FNRBJ1iYUielWUj%2B%2B8vq%2FpdxVbAylwl49CwVA%2BzSNFuFXR5PxJ0I9PLfWpqc288874VIAPdwT8jFI%2BeU2VGpPAhT2DXQvs56ckDyNvTZPNPwYDHLXTKWMESqjkuMX%2BvShiMfwS3RjA7b7yW1VzrVebIxwb95vNXx%2B9YNFu%2Fea7MPgU5MABLXEy4%2BSrPGS8%2FYp337i3qe0g&X-Amz-Signature=1ece3bb2485e704feb78ef86aed9cdb27db891cf77a17e24d592272f4e84ad8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URP4ZR5A%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCgCU8MvU3vDT2iXxflrspQcYDS6mUEbZCpvp2g8dOgjQIhAP1Vr7%2BxowNzst5Bwp7uKxGTOyMkS3Cai84sD%2B0WOdJZKv8DCDsQABoMNjM3NDIzMTgzODA1Igz%2BMF%2BT6e5s7IsL1Ysq3APhpnmzROUfyb51DJMMgh%2FtV7gQ50cXuazVVrEOQUsqrBtBCphxKQHsZg1C%2FdLQfZOwkC6mZM%2FDhzwB3bc82433qYNbhG3UwkWDwEErXNUlNBDnrZhVwfFcVONkUs8gyvLU8bc3SwyozUJeuZw%2BYpRTsHUH%2F0umeTwY0%2FLTJ4F544efmQ6u7kjC3tfJJrWatwmRTAkRPYWLq9tuoVt%2B0aFbMhkOVVia4JlJ15RjvFl3Srj6u3ttCx4LR9J8jy0ejqlIundOf24rrpCbwTLU%2Fy1aS9jJ1vWnFc4nowmbp9vzmKF7WblVI36aN%2BwfmqZuXMit3x6v8dRl%2BwYqPZyRuBKRcteYwpVgLQGM8jqNsCYApn6LYgjWoPVIkB%2FHLvSzcF4YLhgntFuJkB8lK0QDdJkc6SeO%2FGn8r2i5GHM1AV4DAzttpZ5nSkV798tSYG4MZKBo9eUa6dQ72XlGESUJoTaxHCQ8CPNLecgdR2b2JSdDNwlD63ExBnkvxhk5NrMGnGtUVeNdET4iVCD5sZ76kAJFU%2B8kZCOplX0U5ZKwEZAJEALtaetRt2ZgZSrvxKN2nQd7px5l1E5%2FNjdZcJLWvGfcgBdsqQLEAimrYb3ufZluoREAp4DpxoB2G1ciZjCM6oPCBjqkARG7b0ENOzW5K3xRxFOWbLq6itXqx7nqmFVlMa%2BAVQXLyoEfUgUDNlItbYYpSIOIPKI1nGmHV8YtsPnMj9Q%2BxT259Nf59dZHi%2BPK%2F0f177gEQodtwRcfHgZIwLT3zn6tSu0eiTxDlKa8VZ8nzzJqt8F602xrx1dhNPhJhZxNSFC2Qop9BTGvLEgY7OVc0pToxue8qnWs8ase6dqJ3CBSFadYIDg9&X-Amz-Signature=f9fab22df33b2be9cacea983f425ac89bfdf6a25be11402f2772e6e9d4a89e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XU2OALU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAFbWv4LjgyN2V82%2F7zEGP08XM1EaVh3ziZ6haZzbeZCAiB7oaX%2F4hgcXk0fESxZSrPBdgwk6bBp3oN896pnGdk%2B3Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMuwFRqKs74dyLSlXPKtwDX3XXvDPfN%2F%2BPSf1VtUKLd72L366uLAcwh6%2Fm7YpFUrMFQcVSHjgpgzaz5z0quCfO5B8Sgrc30zu6IYi8KW5S1YVyRRRbx1xP9FGtFrB45g5kCX8uAaBheqdenDh%2BBJ1HeMmBjHGHnxqh4YWWal9Kwv1zTLLA%2FRUEjct%2F1yGKQUTtl4UmdoG2SSTICCBQdw2dCcClUL1MVmvbmH6Qfnwly4ll%2BYD22JDaP2IrCl91QD%2F7VJJJ%2F%2FEQSO%2F4qJ%2BhZF396HUyNf3wJzk1VHo2aCcrpWNd65Rr80a%2Fubw6UmdzmLIf1giTN5t8LmyGkpCFjZNO9cb6MSwqcf2jfeiIQP6MfzhWI0fFiiOHRc9I9E4Ob1h53uUo%2FzgiTyTLnKaYf1LZaI%2FSIAk3yWTQRW8vrpL7nYGPC0Ym3y8WjbHeBV1mnTDDuXcJJrFkp16AVGQ8oikEEV6IwJfUDQSr7TkPTjs2VZQ7fTephK0sYD996o9SF79T4vSG209zv3yqorMWx0TJd37PhZYCTkdGfkEFUOmx33LtEAFiDz2DrviBYH5DpXomwq0RTqZJ5%2Fkd18l9TIjuql3Wrqkc%2F%2BIE4c23XwLNZ3Yr%2FB7zTg2caPUE1KDmiqAAch5L1AD6a8dxHFAw5%2F6DwgY6pgFc1moX1jnnc%2FH9sr8SnQ5McWFtejStHFsFolEiObPszbb4oJaWc%2BJ%2BJ7lF1q4DAS3h1Gu3llUbLBqFHu7%2FkllOo2S03nqZIUFVAByVTsvu7CgtP0xktW51f%2BDkrS7BSjzSJCtZF38WdEZJZtbl7vKd%2BoAfqENMDddagZoYTqOL0oj5jLZFhG4TF252lTp41GxAVBvsDDWVDD2rUejoocjLs2XXqnwu&X-Amz-Signature=9fb399cf81dc5626010882c0e774469d3aebafac4d6ec6bc72b481b81aa8c529&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
