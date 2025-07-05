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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKPLT2S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHgTB9bBaZAAFPij0SGZjX%2FDcmGYRaWwzcgguJS4OMZGAiEA1tpRR1poWzt9hhPivbsWlDzQ1XUpsZPUazA3xtQtT6sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLTQL6RVV3%2BTmZCsICrcA7bLH4aX4GMCHRBOgdyQ8gX2qp3CrVNReZkQP%2FsFKkpGMhhNyFzAh6jB0nxshD8BkS4pDx1Gmnr0IFk45eoRWMdpIbN%2BeLVT6wIHFMbC7xiQmYWaz6Us2XwqBxGDCbYjJGN7mZolb0C1GVU4be5Cr1RGYZG%2FqZir78IEbqHB%2FNUC%2FoYhOKWVUspIZLC84Y9enEtfKkinx3%2FYNDvhfzC%2FMpopZomtannW3rsa7kUT4581Cg8b6JzDvOWdMBnqnHGi4jfOZJQQyBZ8sZU0u1K%2F%2FO1h%2Bx68X78GczpZErG3%2BVYLaQX9iVVn6IQYi4XYw93QUR22ee6Yvl9stK5dBuEmSNdJRji3ezVpl%2Fe7ky1QsjVILl%2BLR4JV3wVumuzNhv2IgfyEuKognx7FtFaBiOkDeMvsCG8hN%2B%2FWC5%2Bv5joSrhhGewHwNJTriyxBYVithfzJJGAMo1iCTBJ%2Bl7DWbkVUChTPiWGpUdJVTIKf42Aj0767PMbyZugl1wK%2BN9sPlycTJh5mk%2Bw2lLOkqN2ZsK6V1%2BcWX2FBTqeOKCtEkK4Wkw2im%2BfePLQESTBNn0rSD%2FihX53jIBp0DjXFu8XUjvzarWJ9fJ3ToY%2FxatlPsFlexFNseLVcdqHNKn1kmpZXMP3upcMGOqUBvLTN1TOUYwhnbMyGwch64Jc5T6VwTTfO4SjGoja%2Bs5%2FOYjsRhZS1mXw4NsR5ixk7wmSx%2BhAJnuJcGhFCG6yjCwNITpKixyoOPixh79mUqImaLcGRwJM%2FKXMTFAIuYijOTjAjSziNhK56WgdjYX%2BNHzwLxAV%2Fj8%2BZNHUct4tpOnSizyQmNptduRfY9A%2F41UGgxiFErlDMh51G7cNnY8e9BXmOTI1p&X-Amz-Signature=e6baa503fada1226b396acdaf1c1a66c7714db0b4ae77733033bac185037fcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKPLT2S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHgTB9bBaZAAFPij0SGZjX%2FDcmGYRaWwzcgguJS4OMZGAiEA1tpRR1poWzt9hhPivbsWlDzQ1XUpsZPUazA3xtQtT6sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLTQL6RVV3%2BTmZCsICrcA7bLH4aX4GMCHRBOgdyQ8gX2qp3CrVNReZkQP%2FsFKkpGMhhNyFzAh6jB0nxshD8BkS4pDx1Gmnr0IFk45eoRWMdpIbN%2BeLVT6wIHFMbC7xiQmYWaz6Us2XwqBxGDCbYjJGN7mZolb0C1GVU4be5Cr1RGYZG%2FqZir78IEbqHB%2FNUC%2FoYhOKWVUspIZLC84Y9enEtfKkinx3%2FYNDvhfzC%2FMpopZomtannW3rsa7kUT4581Cg8b6JzDvOWdMBnqnHGi4jfOZJQQyBZ8sZU0u1K%2F%2FO1h%2Bx68X78GczpZErG3%2BVYLaQX9iVVn6IQYi4XYw93QUR22ee6Yvl9stK5dBuEmSNdJRji3ezVpl%2Fe7ky1QsjVILl%2BLR4JV3wVumuzNhv2IgfyEuKognx7FtFaBiOkDeMvsCG8hN%2B%2FWC5%2Bv5joSrhhGewHwNJTriyxBYVithfzJJGAMo1iCTBJ%2Bl7DWbkVUChTPiWGpUdJVTIKf42Aj0767PMbyZugl1wK%2BN9sPlycTJh5mk%2Bw2lLOkqN2ZsK6V1%2BcWX2FBTqeOKCtEkK4Wkw2im%2BfePLQESTBNn0rSD%2FihX53jIBp0DjXFu8XUjvzarWJ9fJ3ToY%2FxatlPsFlexFNseLVcdqHNKn1kmpZXMP3upcMGOqUBvLTN1TOUYwhnbMyGwch64Jc5T6VwTTfO4SjGoja%2Bs5%2FOYjsRhZS1mXw4NsR5ixk7wmSx%2BhAJnuJcGhFCG6yjCwNITpKixyoOPixh79mUqImaLcGRwJM%2FKXMTFAIuYijOTjAjSziNhK56WgdjYX%2BNHzwLxAV%2Fj8%2BZNHUct4tpOnSizyQmNptduRfY9A%2F41UGgxiFErlDMh51G7cNnY8e9BXmOTI1p&X-Amz-Signature=7cca08f69188e2881696cb301f8067ce96fa1a6077a6d1fd6839fc0c5d84473d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKPLT2S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHgTB9bBaZAAFPij0SGZjX%2FDcmGYRaWwzcgguJS4OMZGAiEA1tpRR1poWzt9hhPivbsWlDzQ1XUpsZPUazA3xtQtT6sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLTQL6RVV3%2BTmZCsICrcA7bLH4aX4GMCHRBOgdyQ8gX2qp3CrVNReZkQP%2FsFKkpGMhhNyFzAh6jB0nxshD8BkS4pDx1Gmnr0IFk45eoRWMdpIbN%2BeLVT6wIHFMbC7xiQmYWaz6Us2XwqBxGDCbYjJGN7mZolb0C1GVU4be5Cr1RGYZG%2FqZir78IEbqHB%2FNUC%2FoYhOKWVUspIZLC84Y9enEtfKkinx3%2FYNDvhfzC%2FMpopZomtannW3rsa7kUT4581Cg8b6JzDvOWdMBnqnHGi4jfOZJQQyBZ8sZU0u1K%2F%2FO1h%2Bx68X78GczpZErG3%2BVYLaQX9iVVn6IQYi4XYw93QUR22ee6Yvl9stK5dBuEmSNdJRji3ezVpl%2Fe7ky1QsjVILl%2BLR4JV3wVumuzNhv2IgfyEuKognx7FtFaBiOkDeMvsCG8hN%2B%2FWC5%2Bv5joSrhhGewHwNJTriyxBYVithfzJJGAMo1iCTBJ%2Bl7DWbkVUChTPiWGpUdJVTIKf42Aj0767PMbyZugl1wK%2BN9sPlycTJh5mk%2Bw2lLOkqN2ZsK6V1%2BcWX2FBTqeOKCtEkK4Wkw2im%2BfePLQESTBNn0rSD%2FihX53jIBp0DjXFu8XUjvzarWJ9fJ3ToY%2FxatlPsFlexFNseLVcdqHNKn1kmpZXMP3upcMGOqUBvLTN1TOUYwhnbMyGwch64Jc5T6VwTTfO4SjGoja%2Bs5%2FOYjsRhZS1mXw4NsR5ixk7wmSx%2BhAJnuJcGhFCG6yjCwNITpKixyoOPixh79mUqImaLcGRwJM%2FKXMTFAIuYijOTjAjSziNhK56WgdjYX%2BNHzwLxAV%2Fj8%2BZNHUct4tpOnSizyQmNptduRfY9A%2F41UGgxiFErlDMh51G7cNnY8e9BXmOTI1p&X-Amz-Signature=84f334912b383641075fac6642a2286b6b473cf378e11fcf0c43c492cf9cc412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VXLB4YP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDuxjjL%2BNpcW5BVwZVrGF8yvE5hm%2FpLRdBjAMzOpjGkVgIgIz3NkltwY%2BRttbyyweUucuGsvfxFnCHgDTgR511rzjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEZmGubb1Y2ycpxIZSrcAxdRTBHvb2V5reCukeTtB4IjTqntFhzk31B97Y3bSRVb7jN36%2F3zAkQiEUcFRbV2LIn5k2OxGfarQNPhHOijKPUXFjQ9cNeJPztask33xIi5D%2BuOBjwdQOHrgpghLF4XwkanpAd1AV2aRo%2FACvhD2iEG%2FkNJfvtzqa424Jj9%2FomrQwFz%2FpdNama21kDGXzueTByM%2FMDK5duQ%2FrMh7qcIesgfdmaMc6NBY0E878bYnDUw%2Fn0roiVcl7vdvA1H1KjZjESXiePGwDIACkl5B%2Bw4m7L8x8o9re%2BOvOmlJG7m4Kcv7tNUgwhJrWLILPsL%2BJNFbvqb0wU2xFt5Y%2FOUDQdfwvuJnFJstVQlPZW9VvtsjvZJvBcGMv3J%2FBbzvUUhFkMjk3biacq6SWxoXzWBSSF0KZNieeRpQDN%2BaOXi6KNQWdvZ2Ex1EO4CsK10Vkvi6PJr7juBTLgp1g8O1erc76Wsatj0AzCS3zazLiOgPocKnLeyojomKf7OVArN%2BAR5AbPQ8gMS71E2j5xGVhyHL9aDwAH7EcZp2iviEtLM7ihybi0CpAYTc%2Fha%2FiMNiIZplCxlYEewK84951gUz%2BFpoV6Mdh6YaX4luubnZqTeZGKfa%2Fzghcm7SivktOVTydMFMJXrpcMGOqUBmIGen8VqkiEJJSHx6KgeAU01fK1u9pm%2FkALojHv6m0sJZfAC5wO71GGODttro9z5P0GTqDh9%2F4nEuVa8oxW5VvYyzqZMMgmyEHKtjsooH0HJzo%2BviIGl9N5zpiYf865fSjmeeUlOKo8LiOx1DN7kuxGYZwd0hWUv6wkQotbKzPvWNJZHPx4utLtvf9skNNCO6JkB8fQ8wuuGCm%2F0G0jbChHwEgLj&X-Amz-Signature=2fd3b34a1d4db3049915de7b51ab076b68b898100d9be120abd3e4dfba7c57ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFV2NEN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGBKCawySYYH%2Bwwy89kUoX6jiPl83mUmWmhRS6DXHyMYAiEA6V9svhtQKPnAkxHenA7bLAj8JwgMyDq1ClsBTn5tTkkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLiGSuZ%2B17IXyTKqVSrcAxmBHftvi2jNlBJe4n8ziCL%2FaqlhSXg3LdFVyqd5eTWxdQba0PQlGN0hLFJWH%2BzEYofcUF5tqu%2BR8TOSHUYqEe3rbtu6LNyKC2bSk%2BrL3RuIJFA55CmhoOla5p11wXMBmNJiLD%2FS%2FtkAw0lHCSQc6ubWP4n1%2F2WcQWP4L90PGoe0VgFEZBon3nsddV6pkknMwLKxyp2WGimpGNUkCUrDLSmTlqGPqaOEtk0AIMCUDfLKIfXLggAeEd7CpG00zcNUkLDkYwv0nu1P%2B%2F9W3TC%2BG4bVa64h18c4gigUYI8y9NT1%2BRBkHl47%2ByhmiD8I1VIfx0JN5d8yk10ivSoiY8FDidiJ7jO%2BzNaOx2gBF5Uq4SLubfEa4prUqI4r6btVuCG70ZitkMA75PNWnmoDaydn%2BOzB9WisD8Pzyz3r7ybGU8xkSFbtdMtURjBkPaDMjv4WkAoABMOQUYkr3C86PgqqjuOSJqCtUx1sVPSYluK2oxUCja%2FizN9QD8PFwlmQPrO3Y1o5S8aJZqcweIiysdjJ7UlswqILBb%2B9AL9o0CwcsHdXGCNNrwDxiJuXd01NUJKOotSrHaLgTOxFnHzBOOCfMW6u1WxYs9N0uG5oEe8CV3rN1UQmhzeZ34kvUfQ%2FMKj2pcMGOqUB5jRfJlvv25lVWpb6IaUn0bfsXP8BXvnjV39PT9hrEIO4WrxwUa%2FxfRVmvk6866mw2M%2F1LyteV%2BEkQPXogpu7a4sJuXzoDWMp411TXGt0ymbaCJhuJtnUtnytW2TqK6ldafk510j%2F%2FOAlcpCcImt2nfYGYWDwTJEUqQVPtwzJrgKvdyy%2Bp7KQ2NtbPAv8E%2FlL5QrjkiGnqLLfcA5rojtYaGS94GvD&X-Amz-Signature=58473416e733ad3a52f4e901e9a3f82f2b51fed87ec310a14a798a66fcd7a174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKPLT2S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHgTB9bBaZAAFPij0SGZjX%2FDcmGYRaWwzcgguJS4OMZGAiEA1tpRR1poWzt9hhPivbsWlDzQ1XUpsZPUazA3xtQtT6sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLTQL6RVV3%2BTmZCsICrcA7bLH4aX4GMCHRBOgdyQ8gX2qp3CrVNReZkQP%2FsFKkpGMhhNyFzAh6jB0nxshD8BkS4pDx1Gmnr0IFk45eoRWMdpIbN%2BeLVT6wIHFMbC7xiQmYWaz6Us2XwqBxGDCbYjJGN7mZolb0C1GVU4be5Cr1RGYZG%2FqZir78IEbqHB%2FNUC%2FoYhOKWVUspIZLC84Y9enEtfKkinx3%2FYNDvhfzC%2FMpopZomtannW3rsa7kUT4581Cg8b6JzDvOWdMBnqnHGi4jfOZJQQyBZ8sZU0u1K%2F%2FO1h%2Bx68X78GczpZErG3%2BVYLaQX9iVVn6IQYi4XYw93QUR22ee6Yvl9stK5dBuEmSNdJRji3ezVpl%2Fe7ky1QsjVILl%2BLR4JV3wVumuzNhv2IgfyEuKognx7FtFaBiOkDeMvsCG8hN%2B%2FWC5%2Bv5joSrhhGewHwNJTriyxBYVithfzJJGAMo1iCTBJ%2Bl7DWbkVUChTPiWGpUdJVTIKf42Aj0767PMbyZugl1wK%2BN9sPlycTJh5mk%2Bw2lLOkqN2ZsK6V1%2BcWX2FBTqeOKCtEkK4Wkw2im%2BfePLQESTBNn0rSD%2FihX53jIBp0DjXFu8XUjvzarWJ9fJ3ToY%2FxatlPsFlexFNseLVcdqHNKn1kmpZXMP3upcMGOqUBvLTN1TOUYwhnbMyGwch64Jc5T6VwTTfO4SjGoja%2Bs5%2FOYjsRhZS1mXw4NsR5ixk7wmSx%2BhAJnuJcGhFCG6yjCwNITpKixyoOPixh79mUqImaLcGRwJM%2FKXMTFAIuYijOTjAjSziNhK56WgdjYX%2BNHzwLxAV%2Fj8%2BZNHUct4tpOnSizyQmNptduRfY9A%2F41UGgxiFErlDMh51G7cNnY8e9BXmOTI1p&X-Amz-Signature=07d563700cc6ebdc74ee2b28a6044aa6d03336b5767a2ad6ec1e2934e97c6774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
