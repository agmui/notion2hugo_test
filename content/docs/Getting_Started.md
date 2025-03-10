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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BQGW3R%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAie3p%2BDRfqb6%2FMggojLXMtB8d%2Bga3aWiambx%2FOavbSWAiEAr7mHg25N%2BFkYpVbq3yGFn8sitazSonmDrcB%2Bkbar2cQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJzprG20jPB7fqJNyrcAxMJNJdKZZxwz3Jx4PmNBNHfG0kYewohL10lRUjKDC%2Be17gw1ol8uX6bhQP9q1x5G5uC0uJN1x3yuEtGrGPHLjdrk0QlFxDLGoWyK2RJKvkWhn6kq3FI1clfpmtBa2OuOf6WvKi7TBG%2FVAKmwoiXmnuUDrtWMalsWo5t0sryB2RF0HmhnbDgwXXpcOCSICi0kH1%2FOZD7%2BzUkxzdaFAE8lQqq9N9LfyQZihmGda0w2%2FFASuiUsKbEBocHGrlxcNZ6%2FDLdK6USKSzouXnnCyOt8NpkkmmIWe3HAQRQm6k00DN9h9UNtezVrF820KOK8dsc1Kh5xVQ11t5forHip1n%2BzosZ04v1ns2zDk5gACVUyIzEaOiAnPg4NkSwKDCuzbCtaZeM1HHV%2B%2BFnaCzKYVnu%2FL9m2xCrhb4UeX5MyFHPyPgqyuBzIJUS0FCBureARFGdw0voezK7%2BRAkeChLdTp9QgobjmEl%2FLmteKa6v3m1HqT7DK%2BCQKPaPkBEx22XE1exPVGt%2FvJQx2850yucdMIy8fSz3igs468L2okoAXM6CSKzPdgaF1cCDlAJ1gtHZh0VACmg4kw28eKiL07DB5Z5nIOx3%2FFH6QnUQqele3rvEDxsAUC7vCncN8wZkFcvMM7LvL4GOqUBPxiv3BrdtyYy0ygBMwr%2BgteF%2FXFFx0C%2Be%2B97Ia%2Bt2sX9hvYVfbGRkrWJUENfLEwMiqvQ0TSNXHVNLZf%2FAOpcotOvu%2FN79%2BzLdLeqpjc0uxiDqWuwcrAzT9iqAwCQpcLtTNw8CQN31tiF3JHzfgsnMvkQWA%2Fiy4M5JN3m1itKUTSFZJssKi9zxmtf2xbK9SPb6L3yvFTKNfYPNTMFqUav79%2FPGtAq&X-Amz-Signature=5c133c44e7ac40e0e4fa406ff53d080896d14faebd2f32f31eb400a29eeb01f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BQGW3R%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAie3p%2BDRfqb6%2FMggojLXMtB8d%2Bga3aWiambx%2FOavbSWAiEAr7mHg25N%2BFkYpVbq3yGFn8sitazSonmDrcB%2Bkbar2cQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJzprG20jPB7fqJNyrcAxMJNJdKZZxwz3Jx4PmNBNHfG0kYewohL10lRUjKDC%2Be17gw1ol8uX6bhQP9q1x5G5uC0uJN1x3yuEtGrGPHLjdrk0QlFxDLGoWyK2RJKvkWhn6kq3FI1clfpmtBa2OuOf6WvKi7TBG%2FVAKmwoiXmnuUDrtWMalsWo5t0sryB2RF0HmhnbDgwXXpcOCSICi0kH1%2FOZD7%2BzUkxzdaFAE8lQqq9N9LfyQZihmGda0w2%2FFASuiUsKbEBocHGrlxcNZ6%2FDLdK6USKSzouXnnCyOt8NpkkmmIWe3HAQRQm6k00DN9h9UNtezVrF820KOK8dsc1Kh5xVQ11t5forHip1n%2BzosZ04v1ns2zDk5gACVUyIzEaOiAnPg4NkSwKDCuzbCtaZeM1HHV%2B%2BFnaCzKYVnu%2FL9m2xCrhb4UeX5MyFHPyPgqyuBzIJUS0FCBureARFGdw0voezK7%2BRAkeChLdTp9QgobjmEl%2FLmteKa6v3m1HqT7DK%2BCQKPaPkBEx22XE1exPVGt%2FvJQx2850yucdMIy8fSz3igs468L2okoAXM6CSKzPdgaF1cCDlAJ1gtHZh0VACmg4kw28eKiL07DB5Z5nIOx3%2FFH6QnUQqele3rvEDxsAUC7vCncN8wZkFcvMM7LvL4GOqUBPxiv3BrdtyYy0ygBMwr%2BgteF%2FXFFx0C%2Be%2B97Ia%2Bt2sX9hvYVfbGRkrWJUENfLEwMiqvQ0TSNXHVNLZf%2FAOpcotOvu%2FN79%2BzLdLeqpjc0uxiDqWuwcrAzT9iqAwCQpcLtTNw8CQN31tiF3JHzfgsnMvkQWA%2Fiy4M5JN3m1itKUTSFZJssKi9zxmtf2xbK9SPb6L3yvFTKNfYPNTMFqUav79%2FPGtAq&X-Amz-Signature=ccc13238e3eb6972ec5c6e402f459febd09dd2047e1066d0891101b691efb5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UALVPRFT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDzLjZWuQGAau%2Be7nbRIT9Kq77lmshW4Qd9sqnTOt%2BBOAIgUBARckb4%2BaPZa%2BY0c6v33OT4oavtahH%2B1lw5G1VvhwoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD492pX5ACLtdUC1SrcA1zMz7Jikq%2F7x5Lf9CKMiMFM0b50uziAFzWyx3XL43GKwGuSGH3ovbTb6o9E6t5beM462WK1TlWnY%2BFNWM5XBJnmejSThMQEEbo5E1z5%2F26rUquGY200XZBzRMJWPfsBIwVbsS5PjgSgYPcBj3FDZzppXZNKt7D4jjGhme%2Bvl9zlf2WYIvZ0Vu4xGDVPDTn6jqGAn2CjIa1lMDpQ7Ohxix1ClMr5c9a%2BboaqUKWJcZaKEhBr5RWT2npvO7dT%2FAh5jM5nPnrQPXfzj3tWxl7hD75ONdZ4LUNlbwyIOo2vmkIH8iDx78x8Zr0PjypxMwto13cnDtVzqEtHfnRPsclPRoWievrlmL7Wrsn3EQnXjdc8DK0rCUa%2FVtZeHDM5HDcP36i67fpLxChj3WxIyFJfujV34tx9Gqy748FEh8iJejC%2F0PwAzTh5VxEiwQ21NXy8FLWEcx9xzldY1%2FTsXMAY1SoWmrk2OJpcrK3zLtxVK1T2EErNkQyqZMpr9fOIMRoRl0Wd5aH%2BGeJ81ghH9QvKe5K9ARPoOU6B41eEPQQCMwEZtULiCw28uhXR04CGh%2F3NnTJ%2BOR9FD61%2FiXXFF62JF7x%2Fn9UgNwAd9wXkhtCXRNNG4t68EgdZxYrtUXuHMMHLvL4GOqUB9%2F96RU%2FI7%2BBnGpuuw0w5gxs6UyMmdRDNeSa3FNVp3%2B%2FjqIrOf4g7luEbhlnTVzTWsBywdrA3ily6WOIfbjBRtv1mBIKrSCaRN8z5MpuLpy%2BlkrZAxf0NpbR3OSz8nUfYi22eIwunDbnJU70kguxFz%2BcnNTwqVZKMaayfHWAZqcl9484mkYkaGZfXiCy%2Bz%2F0g%2BZ1YGMlzZAVhgTYO%2BoDKXKcCatVy&X-Amz-Signature=74a97be14efaa9578043c7959cd079e66861629665562da3100513d1b974e1de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL6GAO5Y%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCO31O2%2FnrvApgYBEgUxs11cO%2BJqXD8cr1Dy7ZO9aQriwIgALtThgJ6J6QQg6fZjEv8jfHHT7rOjUqPz3k72RVPhzsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOJUwbdS5UFHeOcIyrcAzrF8u4QEulJHnEqM9%2Bd7oU4ojkqo1unZuZNoTjqpAmJ1Nyxj9CW8aqqnNi91RPUPsk%2BZabOkN54r9rhlWlM%2F8lKZIcJMUvb7SNUM6%2FxsNM2%2FfX%2FlzJIlaSJ3bj%2BGRoyuYDWBbhpdymo%2FjuZVYUuUSvuC2MD3xzRilkZT9iiFE4SWcZa7Dgka0iqFbBfZj06vB4X9jkcaQCfYszdYf%2BVNC5FFT8E3snpqWU3c5OZFAkFhgctqgvstZLhSABSQcCpSvP7qgz5eQGZO59NThh%2B76fqMUTxHLVhAIvykAXldPSUNa9KQarryZDvQcqvbSU9FV44tnLmaHhh062IQYRnvbb9GLRf3Vn%2FRVxJAVT7d29SFpwTS%2BlCBDsZM5APfeSojxvUBnuowGAA9T0hoXknGrftBVlNuIeLLZkokDjIlUEyzypC%2FYPgdqFsv2BzBRr%2FUkzd%2F%2FBaaWy3rP3KyY2XqaEM1r63BCIOGLFqUhMdsQKdpsG6h3O6jcbmNNR5Ygb09vARiDn120ACU9gDeD9%2BHQ46IuDVMrJ1vzMPbygPU94PJVnd00ivFAHVzUiY84fuyb2IfaDBQbIafwaWq%2Fl8CvNx9ph%2BatRSYKVa14%2FS4b3SR%2F7TOSiOJfps6UOgMJvLvL4GOqUB0xcv1Svn6UlItESQ%2BlNUJGfueyzUxBXurjJCp7kw1oD%2BwGq9VqdOq3HVi6HGYWO5%2FzVJ27yr8DH8fCqrZrIT8M1trW9Gd%2BRpAfoxXtgVKbve8Q%2BKraEMuqlCqGpZGAtzVxO72R%2FjbwMKcsdjpD7RnKHwBznhi0IcKnliNAPvDN1PQoeV9UzNkFznZc3qu9X%2FYDO8zATgEQhBo3besNM8fha131SW&X-Amz-Signature=6dfc801049109175181697536a3d93084409ab891acca9c9afc85e610379eed7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BQGW3R%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAie3p%2BDRfqb6%2FMggojLXMtB8d%2Bga3aWiambx%2FOavbSWAiEAr7mHg25N%2BFkYpVbq3yGFn8sitazSonmDrcB%2Bkbar2cQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJzprG20jPB7fqJNyrcAxMJNJdKZZxwz3Jx4PmNBNHfG0kYewohL10lRUjKDC%2Be17gw1ol8uX6bhQP9q1x5G5uC0uJN1x3yuEtGrGPHLjdrk0QlFxDLGoWyK2RJKvkWhn6kq3FI1clfpmtBa2OuOf6WvKi7TBG%2FVAKmwoiXmnuUDrtWMalsWo5t0sryB2RF0HmhnbDgwXXpcOCSICi0kH1%2FOZD7%2BzUkxzdaFAE8lQqq9N9LfyQZihmGda0w2%2FFASuiUsKbEBocHGrlxcNZ6%2FDLdK6USKSzouXnnCyOt8NpkkmmIWe3HAQRQm6k00DN9h9UNtezVrF820KOK8dsc1Kh5xVQ11t5forHip1n%2BzosZ04v1ns2zDk5gACVUyIzEaOiAnPg4NkSwKDCuzbCtaZeM1HHV%2B%2BFnaCzKYVnu%2FL9m2xCrhb4UeX5MyFHPyPgqyuBzIJUS0FCBureARFGdw0voezK7%2BRAkeChLdTp9QgobjmEl%2FLmteKa6v3m1HqT7DK%2BCQKPaPkBEx22XE1exPVGt%2FvJQx2850yucdMIy8fSz3igs468L2okoAXM6CSKzPdgaF1cCDlAJ1gtHZh0VACmg4kw28eKiL07DB5Z5nIOx3%2FFH6QnUQqele3rvEDxsAUC7vCncN8wZkFcvMM7LvL4GOqUBPxiv3BrdtyYy0ygBMwr%2BgteF%2FXFFx0C%2Be%2B97Ia%2Bt2sX9hvYVfbGRkrWJUENfLEwMiqvQ0TSNXHVNLZf%2FAOpcotOvu%2FN79%2BzLdLeqpjc0uxiDqWuwcrAzT9iqAwCQpcLtTNw8CQN31tiF3JHzfgsnMvkQWA%2Fiy4M5JN3m1itKUTSFZJssKi9zxmtf2xbK9SPb6L3yvFTKNfYPNTMFqUav79%2FPGtAq&X-Amz-Signature=74a463e1857d3b871909802de5ee1b7428990d13bd35a595f45056e827451b91&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
