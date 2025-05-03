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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPTM3WX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDv%2Bf%2FtAg%2BN54TueTyXkpRaoRvufGu03HRQMzw0wEU01gIhAJn5g130qf5uPX%2F3WiGeBcgeHbNAw9ysAWVA0pzUPy6qKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BLklV0i4MmahPGl8q3ANPLrczXG79mQ9kAA%2FzNZsP60Z4Q1O83Fj9K81ga2C6iUsJqnDR%2BtNMprD%2F100Xx98Rp4g6aXl7udyyfDYqBHy5jbwVH0xsrQGHZm3jnbSdJCGWk3zW9E6JGUFi4DzXP7ewY7BRJx5mwyUUwBrXoxDgsy%2BsDaBM0XiltECRNq0zhlAL2gLlEYsY7rjvoNzl9hgO7LKBgGhK743UWwCAcWUcbdKAUq3RV%2B0fCP3NKMgF17zUuAK6Itnm9XPgAp%2BRDstCNuugNQoVR3wuVn7x8mOnE3AqyMIF2wBhK4Tq8UGF%2BuFwVcRtZdrfpwCIH6q%2FSXO3RlVhj6Zc72KCOdFhPX8SNCsqCJOPiESugua%2BNsxlpwIm3Lqx6EQ76FXaNHSEVU52Wdf4giAg6tylhOALvWfEy8tglScgFwqDoyMnoTmX8%2F%2BOZn7htZocAkCj368U93Woy4fljpVYCJ7oBVDPkhQS6DgZ10bteMvuVlOHMy2GaGmlE5uv5peSAWriUolF3vuauGmBCUmVxEq6RAriP8tDTuQUGViE3lDUNuL%2BuQ56E9tQcGXhjbiQFozmiOkMvPBJvRZP7R91nCZPK5RouXA4UCw%2BqtQ5aj%2Bz6QPsvxLVKLQsXCp7I5HcbOpnzjDkhtbABjqkAUVx%2Bzn1u6XHK%2FLDr78zZo49Xr%2FQ8bmlvt5VN%2FVeLuOu%2FipKXnHjjaUAiX62dVq3LKqAEECLQvTPc0dKwz0jftZs4Rcme%2BZP5SW%2Fw%2FM05PNa4S5nNCUJZxeqQdtbpVf2novSQ%2BktqkTKeE0WqRihrFVpee6tr3bATC6OT3RA4WBY2XXgrxZz5u%2BpKYbMsFHw8ptzbWzJujfdJeUmFPKGUvU8GiGG&X-Amz-Signature=8d67058c659611c76f99b2e94684c079659a211780c2a0d080a0baa7a3adb460&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPTM3WX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDv%2Bf%2FtAg%2BN54TueTyXkpRaoRvufGu03HRQMzw0wEU01gIhAJn5g130qf5uPX%2F3WiGeBcgeHbNAw9ysAWVA0pzUPy6qKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BLklV0i4MmahPGl8q3ANPLrczXG79mQ9kAA%2FzNZsP60Z4Q1O83Fj9K81ga2C6iUsJqnDR%2BtNMprD%2F100Xx98Rp4g6aXl7udyyfDYqBHy5jbwVH0xsrQGHZm3jnbSdJCGWk3zW9E6JGUFi4DzXP7ewY7BRJx5mwyUUwBrXoxDgsy%2BsDaBM0XiltECRNq0zhlAL2gLlEYsY7rjvoNzl9hgO7LKBgGhK743UWwCAcWUcbdKAUq3RV%2B0fCP3NKMgF17zUuAK6Itnm9XPgAp%2BRDstCNuugNQoVR3wuVn7x8mOnE3AqyMIF2wBhK4Tq8UGF%2BuFwVcRtZdrfpwCIH6q%2FSXO3RlVhj6Zc72KCOdFhPX8SNCsqCJOPiESugua%2BNsxlpwIm3Lqx6EQ76FXaNHSEVU52Wdf4giAg6tylhOALvWfEy8tglScgFwqDoyMnoTmX8%2F%2BOZn7htZocAkCj368U93Woy4fljpVYCJ7oBVDPkhQS6DgZ10bteMvuVlOHMy2GaGmlE5uv5peSAWriUolF3vuauGmBCUmVxEq6RAriP8tDTuQUGViE3lDUNuL%2BuQ56E9tQcGXhjbiQFozmiOkMvPBJvRZP7R91nCZPK5RouXA4UCw%2BqtQ5aj%2Bz6QPsvxLVKLQsXCp7I5HcbOpnzjDkhtbABjqkAUVx%2Bzn1u6XHK%2FLDr78zZo49Xr%2FQ8bmlvt5VN%2FVeLuOu%2FipKXnHjjaUAiX62dVq3LKqAEECLQvTPc0dKwz0jftZs4Rcme%2BZP5SW%2Fw%2FM05PNa4S5nNCUJZxeqQdtbpVf2novSQ%2BktqkTKeE0WqRihrFVpee6tr3bATC6OT3RA4WBY2XXgrxZz5u%2BpKYbMsFHw8ptzbWzJujfdJeUmFPKGUvU8GiGG&X-Amz-Signature=5bccf13430c5322a260072912ec940b7c04a0648b955afab094e5950666e4203&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPTM3WX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDv%2Bf%2FtAg%2BN54TueTyXkpRaoRvufGu03HRQMzw0wEU01gIhAJn5g130qf5uPX%2F3WiGeBcgeHbNAw9ysAWVA0pzUPy6qKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BLklV0i4MmahPGl8q3ANPLrczXG79mQ9kAA%2FzNZsP60Z4Q1O83Fj9K81ga2C6iUsJqnDR%2BtNMprD%2F100Xx98Rp4g6aXl7udyyfDYqBHy5jbwVH0xsrQGHZm3jnbSdJCGWk3zW9E6JGUFi4DzXP7ewY7BRJx5mwyUUwBrXoxDgsy%2BsDaBM0XiltECRNq0zhlAL2gLlEYsY7rjvoNzl9hgO7LKBgGhK743UWwCAcWUcbdKAUq3RV%2B0fCP3NKMgF17zUuAK6Itnm9XPgAp%2BRDstCNuugNQoVR3wuVn7x8mOnE3AqyMIF2wBhK4Tq8UGF%2BuFwVcRtZdrfpwCIH6q%2FSXO3RlVhj6Zc72KCOdFhPX8SNCsqCJOPiESugua%2BNsxlpwIm3Lqx6EQ76FXaNHSEVU52Wdf4giAg6tylhOALvWfEy8tglScgFwqDoyMnoTmX8%2F%2BOZn7htZocAkCj368U93Woy4fljpVYCJ7oBVDPkhQS6DgZ10bteMvuVlOHMy2GaGmlE5uv5peSAWriUolF3vuauGmBCUmVxEq6RAriP8tDTuQUGViE3lDUNuL%2BuQ56E9tQcGXhjbiQFozmiOkMvPBJvRZP7R91nCZPK5RouXA4UCw%2BqtQ5aj%2Bz6QPsvxLVKLQsXCp7I5HcbOpnzjDkhtbABjqkAUVx%2Bzn1u6XHK%2FLDr78zZo49Xr%2FQ8bmlvt5VN%2FVeLuOu%2FipKXnHjjaUAiX62dVq3LKqAEECLQvTPc0dKwz0jftZs4Rcme%2BZP5SW%2Fw%2FM05PNa4S5nNCUJZxeqQdtbpVf2novSQ%2BktqkTKeE0WqRihrFVpee6tr3bATC6OT3RA4WBY2XXgrxZz5u%2BpKYbMsFHw8ptzbWzJujfdJeUmFPKGUvU8GiGG&X-Amz-Signature=03d13c2d2021a171819dd0b8cc140326e20a2d53c2d85814a25007c469de33c0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2KUBWDR%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDNnKMKYFzdsUTTu%2Fq0p5OB7YE%2BiUuPhcNa8jQwkA2auAIhANSvGgpU0fAdNOreWOQHBAj210JRzvniMFKR%2BI3Ij%2BmyKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmIqnsSkDZ%2BHGVpVMq3APjh6%2FxgmuAxQ%2Fe1AqsElpvURizA7zjtEJ0WzN2GSj9HOb14ucuVnD0ppoDMbgFWG43E%2BBOyqUnnixMKOAkuKQx9OTSATc7DwkyvyYBlJgJ0wpjFMJLwexzukg11t0mAt87Wh1BK7cwVLFeA9wiAiUrLPYySD3VLFk6IBPXKg0jBNjtWF5dvQiyBn5lAqWeGh35nNOH6dOJHpIvp7n0FAUWYvLRmX%2FAOVjUETvBfHlt%2BHqqEs8pMHtUfuO6lQCKR7xAk0yIEExDJhulTSaQXzbsymmYk%2FxMHDwKVLwZiZKUOrDoCLDBTLgrbiGOc4Se9VKmTK6fKnZ9ronxtesmWgnIDW4xXELvmW5Lk0mBnhWzQGw6b72orzeaUxgGorfEDK4ixCr2KFe92DKpyxKtHlzUs6wj2Fwsn05gWPV0J3gW0xizJAbTaHPSMAV6KDHn55ICUGyNb69Q%2BS%2FzSII62SFR81E1VHF%2Ben1saMEqLVTggx8g14Qt3DL76k0cdJ%2BYdUazHBxXl9JzxMHhLOY7rSB32vTQE9%2BopUnTm9SBtHy%2FAEFozRRjnA5sZGRTVSA2teLFyDfF03alvq7WZ4j1xQwVnasOPd4rFz%2BAYFLOF6t3NX3FkQXI3ROBLb1FhDCKh9bABjqkAXGar8l5SOlzSwd43BtmP2IZ58VG9NT8bOjBD4V2ZSfL97RFf8UhfBY6jdj8CxbdSBnGd0VxE5iDHlg61V%2FiMCbPpcxYdFt3hmJa5y3wzYgG1%2Bmr%2FS3KjE8uZLxNwoy1%2F5unE4%2BGUrbNy%2FHVJySNmIXqv%2F1wgKfYiORNXjsloKnc3sR22yc9dvT8%2BbFjjFQHQhfOMMqU03tcyvJwf8ZaMFTYy3rt&X-Amz-Signature=3a505ee25c844eb5d51df11144438210f5c58cda85dfacca0634526b5f55e34f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RKYRVE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDzqcHNyOgB2g2aG5WE5TcqOVasaYaqDChBCAk9m8SCdgIgbs0hpKHfkd7JUTe5gK96sVLJdPpB9aY8TIA77y%2FQx%2BkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbhNUCKqNFtob7M6yrcAxzyAoVU4K01jn4m9WmO3a0aVsz1OE1SPS8L5K2MTa4mPVW9NovP0pt%2BUcoUKpDPH3EKR5TwP5rqbQpP3SB0OHuVPIlYjy8rikRa90vrIkrPhCcEAXmepW5R3ilfpkEsrIsEUVrRQ6QkivCT%2BxVrIPoC2idcXOKQY0qsKTFou1DEixO3VSAWS6Jl4e1FTr3ssVQ772bsJqWtVFZwp9F9%2Fitv2rXAZ2tt2tXcz87FXQnjahCHSR3nn%2B2WH7lLeoEywbu5B%2FEnA6lgSHQvOvhfFeUX4qPhWRijFxjpiBZupG3E2iyZBzsqPaKXtalkBPnAtxo3JiBUkCcV5PkGIa2G1YgWwihA6OtGfn%2FESxapQv5zPVjSaxMi8Y5BaqSr%2BAlfVjf9ogYppTBxjYzeiQV0WcEKUFrkOMI07szmavnrNpzMq7VD6BwwQDxF4BtSUsfBcrZlCUKteVw50L8SUSzCjE1S5U2C%2FRNQH1%2B73Lcdm7oulR%2Bi8A3vL1KxLkpoF6uP2UFA0S38CzD1u6VHzrHYjccnutuwY0T96X4I2V6xwOSXUkuWLGgY2DlLWx8kRpfKcx%2BW1jd2jc0KcHDThRqtZLfuTVQr2IerYrGAheqU8BqMtn52wKcPEh9VBTi6MPSG1sAGOqUBR8ox7UlujTzVS47l%2Fh1zCcXiuiOgJurGHS9%2B86XrWRNn1dAjv0I8tO08%2BikfoWPWg4q0%2F%2B2WtFVc%2BaeQlN8M8rTFcYiiyAEwljeV4dkUTfZ%2FBFoBAIYOefZczP%2FSiARYqgIiUlwBnw6GVC6T0Bls%2Bpq9inYW5Um8t5cL8Ho%2F1%2BNlHZsDpQ2Xw7D0wzR5j8WSviPqZLIuG2XhP5c588IPmuqo%2FkVy&X-Amz-Signature=b7ed0e2eabc460622da025408096ecf092951fa820f7a5c96e9bd856ab37718f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPTM3WX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDv%2Bf%2FtAg%2BN54TueTyXkpRaoRvufGu03HRQMzw0wEU01gIhAJn5g130qf5uPX%2F3WiGeBcgeHbNAw9ysAWVA0pzUPy6qKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BLklV0i4MmahPGl8q3ANPLrczXG79mQ9kAA%2FzNZsP60Z4Q1O83Fj9K81ga2C6iUsJqnDR%2BtNMprD%2F100Xx98Rp4g6aXl7udyyfDYqBHy5jbwVH0xsrQGHZm3jnbSdJCGWk3zW9E6JGUFi4DzXP7ewY7BRJx5mwyUUwBrXoxDgsy%2BsDaBM0XiltECRNq0zhlAL2gLlEYsY7rjvoNzl9hgO7LKBgGhK743UWwCAcWUcbdKAUq3RV%2B0fCP3NKMgF17zUuAK6Itnm9XPgAp%2BRDstCNuugNQoVR3wuVn7x8mOnE3AqyMIF2wBhK4Tq8UGF%2BuFwVcRtZdrfpwCIH6q%2FSXO3RlVhj6Zc72KCOdFhPX8SNCsqCJOPiESugua%2BNsxlpwIm3Lqx6EQ76FXaNHSEVU52Wdf4giAg6tylhOALvWfEy8tglScgFwqDoyMnoTmX8%2F%2BOZn7htZocAkCj368U93Woy4fljpVYCJ7oBVDPkhQS6DgZ10bteMvuVlOHMy2GaGmlE5uv5peSAWriUolF3vuauGmBCUmVxEq6RAriP8tDTuQUGViE3lDUNuL%2BuQ56E9tQcGXhjbiQFozmiOkMvPBJvRZP7R91nCZPK5RouXA4UCw%2BqtQ5aj%2Bz6QPsvxLVKLQsXCp7I5HcbOpnzjDkhtbABjqkAUVx%2Bzn1u6XHK%2FLDr78zZo49Xr%2FQ8bmlvt5VN%2FVeLuOu%2FipKXnHjjaUAiX62dVq3LKqAEECLQvTPc0dKwz0jftZs4Rcme%2BZP5SW%2Fw%2FM05PNa4S5nNCUJZxeqQdtbpVf2novSQ%2BktqkTKeE0WqRihrFVpee6tr3bATC6OT3RA4WBY2XXgrxZz5u%2BpKYbMsFHw8ptzbWzJujfdJeUmFPKGUvU8GiGG&X-Amz-Signature=385a550f7d48eb3e625a5a7aacd79fae8a0f15f3f0c2cd6822e9bba8ad539e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
