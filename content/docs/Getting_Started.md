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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZHN75F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmVBfBB9ybggD9wvljJDkgQK3w1hQR7Nr9yOiqqZIh1AiEAtPA0gXgwxhSrU6l6xLFk%2FjuOfwc7DeII4bjgTF3VYkQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAFGA8h9mrZviVZmPircA9IGG8lJOVSHM48Igf6X4Cn5iUyp1JfNajiMZ%2FrrnsfXGSWCVOPGclLdizNhoDQrJK6Fzn8tc49SWt31R8Xgi4i0kujKuk1G3acgl1dkelv%2BFcE%2FPC6Wj%2BVjP4puxHA4gumjETjqbF5ABXdMl44C8LD9zDYVgWWrYjEPxEuErwv3LsCCu9M6kZdXnIR%2FEAST5D5XTR1jnk4M%2FlpGgcauX1GkuD7qbzHoT%2BiNzfQ6t%2FtCqcmknQ8TfJ%2FnatmjCiROSdq3%2FwVvNm97mR1kSPoiM8njRkCChPlBIsDmTaVdqTS1mZx%2Bu%2F6Aerf6SNtcU3%2BeZkv6d59iNuDsPVPArX4T9sXOpRlgdszkO9l30bNQrYzBD6eqEjhrCPXugTPFgtSeBQBVqOX7b9RdQD2BhvefLFW6%2FwGSTeTROMDlz49H%2BSCL9o6jaLnSxgk%2BluwEGRGBLHFdx%2BoU4NkGL%2BTmpsyGb%2BDlJ%2BM2WaMY%2FDQo8Fhe%2BenR2O6fZN60uY%2Blf%2BiOojjVALUbHQPQ08MNjAQUB2qupbotRwXpXnxEpLH1JqTYCqeNOnPaN7lcIJ7Kh1g9GnWyFfQyYvGciZ0d%2BvK4OUYV5QgymWAVEPvYVHJYq1ugG91nvgw6VO7Aw%2BpOKz%2FlMOmr08EGOqUB6SAf%2FSx8prwhtPPyRGR52JsB1ok0yeM0yxyDVp6kWvSS35GwHYTVrHFnooC1ee4LSDvgy0fUElU16HOnH3pvz5qA%2F6vEnuCVcuhqArU9bfAHAEqlBwokgZqUMCfaXVY4ylWdlEAZDeUhp0D0l1naT1nbDAI%2FCtI%2BviXxraWe%2FaM7qqM7UiOYflM0AI9sAC2cQNjWa%2B8j%2FrGWOf0m2tcuA5W16%2FSe&X-Amz-Signature=840b5e4134bd6d724b056ba4d64bec932175d18e705849142571dfc3f85c6e34&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZHN75F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmVBfBB9ybggD9wvljJDkgQK3w1hQR7Nr9yOiqqZIh1AiEAtPA0gXgwxhSrU6l6xLFk%2FjuOfwc7DeII4bjgTF3VYkQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAFGA8h9mrZviVZmPircA9IGG8lJOVSHM48Igf6X4Cn5iUyp1JfNajiMZ%2FrrnsfXGSWCVOPGclLdizNhoDQrJK6Fzn8tc49SWt31R8Xgi4i0kujKuk1G3acgl1dkelv%2BFcE%2FPC6Wj%2BVjP4puxHA4gumjETjqbF5ABXdMl44C8LD9zDYVgWWrYjEPxEuErwv3LsCCu9M6kZdXnIR%2FEAST5D5XTR1jnk4M%2FlpGgcauX1GkuD7qbzHoT%2BiNzfQ6t%2FtCqcmknQ8TfJ%2FnatmjCiROSdq3%2FwVvNm97mR1kSPoiM8njRkCChPlBIsDmTaVdqTS1mZx%2Bu%2F6Aerf6SNtcU3%2BeZkv6d59iNuDsPVPArX4T9sXOpRlgdszkO9l30bNQrYzBD6eqEjhrCPXugTPFgtSeBQBVqOX7b9RdQD2BhvefLFW6%2FwGSTeTROMDlz49H%2BSCL9o6jaLnSxgk%2BluwEGRGBLHFdx%2BoU4NkGL%2BTmpsyGb%2BDlJ%2BM2WaMY%2FDQo8Fhe%2BenR2O6fZN60uY%2Blf%2BiOojjVALUbHQPQ08MNjAQUB2qupbotRwXpXnxEpLH1JqTYCqeNOnPaN7lcIJ7Kh1g9GnWyFfQyYvGciZ0d%2BvK4OUYV5QgymWAVEPvYVHJYq1ugG91nvgw6VO7Aw%2BpOKz%2FlMOmr08EGOqUB6SAf%2FSx8prwhtPPyRGR52JsB1ok0yeM0yxyDVp6kWvSS35GwHYTVrHFnooC1ee4LSDvgy0fUElU16HOnH3pvz5qA%2F6vEnuCVcuhqArU9bfAHAEqlBwokgZqUMCfaXVY4ylWdlEAZDeUhp0D0l1naT1nbDAI%2FCtI%2BviXxraWe%2FaM7qqM7UiOYflM0AI9sAC2cQNjWa%2B8j%2FrGWOf0m2tcuA5W16%2FSe&X-Amz-Signature=1cbd78544a478ddfba6da1cfa170b980cc56b2c0a05ca5c1d71490039d771319&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZHN75F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmVBfBB9ybggD9wvljJDkgQK3w1hQR7Nr9yOiqqZIh1AiEAtPA0gXgwxhSrU6l6xLFk%2FjuOfwc7DeII4bjgTF3VYkQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAFGA8h9mrZviVZmPircA9IGG8lJOVSHM48Igf6X4Cn5iUyp1JfNajiMZ%2FrrnsfXGSWCVOPGclLdizNhoDQrJK6Fzn8tc49SWt31R8Xgi4i0kujKuk1G3acgl1dkelv%2BFcE%2FPC6Wj%2BVjP4puxHA4gumjETjqbF5ABXdMl44C8LD9zDYVgWWrYjEPxEuErwv3LsCCu9M6kZdXnIR%2FEAST5D5XTR1jnk4M%2FlpGgcauX1GkuD7qbzHoT%2BiNzfQ6t%2FtCqcmknQ8TfJ%2FnatmjCiROSdq3%2FwVvNm97mR1kSPoiM8njRkCChPlBIsDmTaVdqTS1mZx%2Bu%2F6Aerf6SNtcU3%2BeZkv6d59iNuDsPVPArX4T9sXOpRlgdszkO9l30bNQrYzBD6eqEjhrCPXugTPFgtSeBQBVqOX7b9RdQD2BhvefLFW6%2FwGSTeTROMDlz49H%2BSCL9o6jaLnSxgk%2BluwEGRGBLHFdx%2BoU4NkGL%2BTmpsyGb%2BDlJ%2BM2WaMY%2FDQo8Fhe%2BenR2O6fZN60uY%2Blf%2BiOojjVALUbHQPQ08MNjAQUB2qupbotRwXpXnxEpLH1JqTYCqeNOnPaN7lcIJ7Kh1g9GnWyFfQyYvGciZ0d%2BvK4OUYV5QgymWAVEPvYVHJYq1ugG91nvgw6VO7Aw%2BpOKz%2FlMOmr08EGOqUB6SAf%2FSx8prwhtPPyRGR52JsB1ok0yeM0yxyDVp6kWvSS35GwHYTVrHFnooC1ee4LSDvgy0fUElU16HOnH3pvz5qA%2F6vEnuCVcuhqArU9bfAHAEqlBwokgZqUMCfaXVY4ylWdlEAZDeUhp0D0l1naT1nbDAI%2FCtI%2BviXxraWe%2FaM7qqM7UiOYflM0AI9sAC2cQNjWa%2B8j%2FrGWOf0m2tcuA5W16%2FSe&X-Amz-Signature=33862c2176eb0dfab16881f575f54538c80e7aa3b2823eb248aa4d7a6565588e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4AROOY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7PiVtq81qaxWPbk5KSftycIVI0LkMF2sOb1kVeUHoxwIgOU4ocODwOy4rgaM8giAohR1WQT6HY76mxkZgwyPSIY0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIsCGNy4qjrTEL2EmCrcA5Cj5Uk7tVpcg38CU2Gfmq48WmMMV9%2B9ah3OlkxeAYXXZWGkTZ4%2Fu2n%2BiNPzSbE8YzKj55RNNl9pXhdjI%2FarbWGlPlY6nJjG9OVciV143Npf0hsa%2F5kqAbCbSvrIXraxXt8Kmuf8xqzW2wMKCEvwPdsGllQCLKJq88aHrS%2BJhzYTdDR%2F9UOuG42gLdlEsK6%2BIQzvSvnNqFkvabVQ6sH3mD3gq9cQ%2FYEFGSvQf4WElQuEnqd0rIfI4G6i8th%2F8dcmhDaD6%2BBkpJED5hiINw1ukFp1KUhAIV2sWTmz1W1IOXp5Y9xBe3oYk%2BPp9Rx9MR4xDMN3FOzQNLXSZOpSauVApsBSMLajilXQFq7h3YRqmkjHbOWljrSJv%2BfeREmPUqqIKsAtYfmxJxtjpHrxKcOT5whDsWbm19ym6hWcpDsAOTvYz3KN5Y1Vvp5wP9k3ANpr9BvUqG1ZITa9S6vZddsiS15ggT2tE70P%2BoePUuMS255xtTL6KEJNi2vVvUI2n4aseCG0DVO9VPXPb4hD9hbqDtnRk%2Fh7BZmE%2F7SQ5xBZpCtgvMkeBuUGYERYolP%2Bedgr5Xka1gJVLQYz2RHqvF%2BdwiNVYx4S5P0kGbPcV%2BD5HLbSAED99h3AEn10VehfMPqr08EGOqUBUpeJ3I%2BbttSm0Y%2B6ZU%2BIC4%2BmfuoegLJ43JpVEx0VxMEk0YbQkep9TO5g4IgSLejJgu94QUasYUL2wrEHhOlBsiTLA8ienz8oMhXesZF36I5ID%2FuoIXSVZCZhRwrToK5gdsu08hzQX6P9HSo4qv4K52geCeqZ9EeoIi%2Fu7dktG1QkLRQclLGqwypA1LaVRSPHDoqILJxkKFhtU4ZSWRFrHr%2FRSQWs&X-Amz-Signature=a9e297e08b620517bcad7efab328d4c1d9154a7ff2151f7f2db612e8dc024879&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26WYSYA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHRtNb5eqGxE%2BrVo8RxYROb0lLaH3e2R79%2FdpvuMRAnwIhANxYjjXXLRibWq%2BFJnvOnloLoVL55XLeLNDoBXw1dkKnKv8DCE4QABoMNjM3NDIzMTgzODA1IgzOw2gCk4%2BuHs41V6Mq3ANWtuaLvtbpKetqZJyOpgKdWwxjio7NQel9ubgkEP02n0XG%2BEzOWuUOGZxnALuUZmgtEW1HCk6UQapdevERKDDv4bICWHWPUrA3aLrKKQ1VzRF8kirrmHGyp%2BH%2BYIcIxF6MylPt2pPKlKy3qJ2zPEdrIAewMDTBuJ%2FfzymiE%2FFYhnxFik7WlVySOdOMqPPvQQ3zA3MEjLfWAy6KhVU7q0egZJQeKwgpCzYNYxHUSec7rIhpf9nGwverXG16azGO2WC5%2BMtBmjAKO8rc6XRTpuPAfO40qYB01AEAE0KfuGsVKU20qBpyMAIiVqKhk6u4FmJ3aAs%2FOucLisSIUU1c9YeIH5EKMrtJT4CkaXn%2FTlBHDnmDh%2BeBjjPMLsH4Scs4dDwt0nQvTxDNNAmRIJ6%2B%2B8ncR9cJd4lFtM%2BXfe%2BfAW%2FbbOlcBnSbjE%2FSyj7Fhh9q%2BvjZPBDTbC7APtsY9BA74wIDf6Z7ItZEARIrq0w7oSYtvzDAN4qnCcQUTVr0qh4cExOG0GjQRzcQe3Vc3TWBfkp2Yf8jYfypDD2QKBLpfD7Ch4yC8uYs8%2Fs31Fi5Xmhua4EnmgjVFcZHBFPr1h5%2BOAoJKOBGWeorm5Az%2FKXxfvkNOXIBuONexqEEMg2mjjCxq9PBBjqkASbgs1mAvG5YdXGdiWFpvlVNAnlqMbFi5mkzLdftMi9AmkJzlz%2BdgCXNauVIzkDiVKmcl37LGl1GGIe4Ph45fmAj1NXT9gg2JapvcjsHE12prztjoaUpfjfIPKFA0FsoYaE8bd59wak0c7BZ8v6aLE1drXT5ZzPBqkFibwOZT0Rt5l1m%2BLA67bqAWyeuxh9f0wpVCztJMPYOb01G2noxgebu%2Bmji&X-Amz-Signature=ef899810b4bf6f3885442c9628b38bc630c08bd4380324cd5426a9da8edd98f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZHN75F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmVBfBB9ybggD9wvljJDkgQK3w1hQR7Nr9yOiqqZIh1AiEAtPA0gXgwxhSrU6l6xLFk%2FjuOfwc7DeII4bjgTF3VYkQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAFGA8h9mrZviVZmPircA9IGG8lJOVSHM48Igf6X4Cn5iUyp1JfNajiMZ%2FrrnsfXGSWCVOPGclLdizNhoDQrJK6Fzn8tc49SWt31R8Xgi4i0kujKuk1G3acgl1dkelv%2BFcE%2FPC6Wj%2BVjP4puxHA4gumjETjqbF5ABXdMl44C8LD9zDYVgWWrYjEPxEuErwv3LsCCu9M6kZdXnIR%2FEAST5D5XTR1jnk4M%2FlpGgcauX1GkuD7qbzHoT%2BiNzfQ6t%2FtCqcmknQ8TfJ%2FnatmjCiROSdq3%2FwVvNm97mR1kSPoiM8njRkCChPlBIsDmTaVdqTS1mZx%2Bu%2F6Aerf6SNtcU3%2BeZkv6d59iNuDsPVPArX4T9sXOpRlgdszkO9l30bNQrYzBD6eqEjhrCPXugTPFgtSeBQBVqOX7b9RdQD2BhvefLFW6%2FwGSTeTROMDlz49H%2BSCL9o6jaLnSxgk%2BluwEGRGBLHFdx%2BoU4NkGL%2BTmpsyGb%2BDlJ%2BM2WaMY%2FDQo8Fhe%2BenR2O6fZN60uY%2Blf%2BiOojjVALUbHQPQ08MNjAQUB2qupbotRwXpXnxEpLH1JqTYCqeNOnPaN7lcIJ7Kh1g9GnWyFfQyYvGciZ0d%2BvK4OUYV5QgymWAVEPvYVHJYq1ugG91nvgw6VO7Aw%2BpOKz%2FlMOmr08EGOqUB6SAf%2FSx8prwhtPPyRGR52JsB1ok0yeM0yxyDVp6kWvSS35GwHYTVrHFnooC1ee4LSDvgy0fUElU16HOnH3pvz5qA%2F6vEnuCVcuhqArU9bfAHAEqlBwokgZqUMCfaXVY4ylWdlEAZDeUhp0D0l1naT1nbDAI%2FCtI%2BviXxraWe%2FaM7qqM7UiOYflM0AI9sAC2cQNjWa%2B8j%2FrGWOf0m2tcuA5W16%2FSe&X-Amz-Signature=c390294ff5ccbb5c91ef41fa7e3d2488e7ee032e2a8a0a60bbca1cfcd777e556&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
