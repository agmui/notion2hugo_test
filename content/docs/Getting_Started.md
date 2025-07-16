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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJYYLX6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBUDt70FG9NQDcVohXfYiw4%2F33P5anb%2B2WPlWxtR0qpOAiEAgkfHNLYDcPo0zIq3z6LqpAH99GCZNvKf%2FvEPla74yPUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPpr6lFmZ%2FTLSQGheCrcA4QPsVMdNCPHOL8DstE6%2BN0zwT%2BoUftOFvc%2BmNN95pMofEXoaOe8rMFhWoLuuvmDS16YBCfOKkX9FOJW5GWlKFbrJ7V5lURpNCGYUgr3x7pbhgLAultHu5auCATQAxbjgfCVXwVZmE93oGekkT3GluHBS21rlRy%2F%2B007dnmnsiz7aBtHFSFkBEt8swVhhgWV2tXseqLsGmbabbwAjfuJIB43Kmh9aKlEIIVhLhWat6IwIk1u9yj%2FPsa9ahAw1AnzX9qpMgBDImJJCSrKKfLE6Abtp5TV4i10YdP8YpEvBtt%2Bw181gsZEhxPmCDkGYSCtw%2FQB6cesKYgyHXJ%2F9jtcE5G7xeZQvtYcbbVg6BY0zqa7g3hIIofQFsmkS3Gmd128jUx3WRvjovkwuHE3WIzAtZl29HGS4atkJYJgnitz2eD8nZt5Qa8LF4I9SvRAdr2KP9Qmg6cTt8nwyIEOAsQGu94IWTdocG5VoGenChzsmXT19gj97io3b4PISW9jselnlUqx6%2Beb7YA8Aq4laF40y4G255XXvWXW4EWs%2F%2B9yiodlOT91tbosz5%2FkmmvdYLShO3kfhXH7W4kNZvNwJQeFgfbQByY4LTwtdmy31hN8wizwwYadkHC5npvT3E6wMP%2BW4MMGOqUBAno%2FfhBOUHBLR8GI3p85YUcTjC7i%2BkgoIJAm0Z7n4Ae%2FDLQHgOFNpLgqG5Vu0tqMws%2B3RuL4%2B0hOoxljbCWnI7WNFBPEKpGSXeykcUewyIplPa2OC%2Bm1%2F4v%2B7vZwwPYaCDBXtfn%2FhM7M8S%2Fy05YuXaHo7nqSmjqGRhJD%2BpUJXOCkBgdSwkJPXRZtNxhu7BA3uDTOGSiy6vfrytAsEXqSVcXGpgtb&X-Amz-Signature=32c69668e4b905b7dd0ddb757c6e2e8d32a050b2fac15a74d99ec638c77b5378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJYYLX6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBUDt70FG9NQDcVohXfYiw4%2F33P5anb%2B2WPlWxtR0qpOAiEAgkfHNLYDcPo0zIq3z6LqpAH99GCZNvKf%2FvEPla74yPUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPpr6lFmZ%2FTLSQGheCrcA4QPsVMdNCPHOL8DstE6%2BN0zwT%2BoUftOFvc%2BmNN95pMofEXoaOe8rMFhWoLuuvmDS16YBCfOKkX9FOJW5GWlKFbrJ7V5lURpNCGYUgr3x7pbhgLAultHu5auCATQAxbjgfCVXwVZmE93oGekkT3GluHBS21rlRy%2F%2B007dnmnsiz7aBtHFSFkBEt8swVhhgWV2tXseqLsGmbabbwAjfuJIB43Kmh9aKlEIIVhLhWat6IwIk1u9yj%2FPsa9ahAw1AnzX9qpMgBDImJJCSrKKfLE6Abtp5TV4i10YdP8YpEvBtt%2Bw181gsZEhxPmCDkGYSCtw%2FQB6cesKYgyHXJ%2F9jtcE5G7xeZQvtYcbbVg6BY0zqa7g3hIIofQFsmkS3Gmd128jUx3WRvjovkwuHE3WIzAtZl29HGS4atkJYJgnitz2eD8nZt5Qa8LF4I9SvRAdr2KP9Qmg6cTt8nwyIEOAsQGu94IWTdocG5VoGenChzsmXT19gj97io3b4PISW9jselnlUqx6%2Beb7YA8Aq4laF40y4G255XXvWXW4EWs%2F%2B9yiodlOT91tbosz5%2FkmmvdYLShO3kfhXH7W4kNZvNwJQeFgfbQByY4LTwtdmy31hN8wizwwYadkHC5npvT3E6wMP%2BW4MMGOqUBAno%2FfhBOUHBLR8GI3p85YUcTjC7i%2BkgoIJAm0Z7n4Ae%2FDLQHgOFNpLgqG5Vu0tqMws%2B3RuL4%2B0hOoxljbCWnI7WNFBPEKpGSXeykcUewyIplPa2OC%2Bm1%2F4v%2B7vZwwPYaCDBXtfn%2FhM7M8S%2Fy05YuXaHo7nqSmjqGRhJD%2BpUJXOCkBgdSwkJPXRZtNxhu7BA3uDTOGSiy6vfrytAsEXqSVcXGpgtb&X-Amz-Signature=eb4403f9b745d5945d1243881333740a947573abc4cd8a548bad71364f611992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJYYLX6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBUDt70FG9NQDcVohXfYiw4%2F33P5anb%2B2WPlWxtR0qpOAiEAgkfHNLYDcPo0zIq3z6LqpAH99GCZNvKf%2FvEPla74yPUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPpr6lFmZ%2FTLSQGheCrcA4QPsVMdNCPHOL8DstE6%2BN0zwT%2BoUftOFvc%2BmNN95pMofEXoaOe8rMFhWoLuuvmDS16YBCfOKkX9FOJW5GWlKFbrJ7V5lURpNCGYUgr3x7pbhgLAultHu5auCATQAxbjgfCVXwVZmE93oGekkT3GluHBS21rlRy%2F%2B007dnmnsiz7aBtHFSFkBEt8swVhhgWV2tXseqLsGmbabbwAjfuJIB43Kmh9aKlEIIVhLhWat6IwIk1u9yj%2FPsa9ahAw1AnzX9qpMgBDImJJCSrKKfLE6Abtp5TV4i10YdP8YpEvBtt%2Bw181gsZEhxPmCDkGYSCtw%2FQB6cesKYgyHXJ%2F9jtcE5G7xeZQvtYcbbVg6BY0zqa7g3hIIofQFsmkS3Gmd128jUx3WRvjovkwuHE3WIzAtZl29HGS4atkJYJgnitz2eD8nZt5Qa8LF4I9SvRAdr2KP9Qmg6cTt8nwyIEOAsQGu94IWTdocG5VoGenChzsmXT19gj97io3b4PISW9jselnlUqx6%2Beb7YA8Aq4laF40y4G255XXvWXW4EWs%2F%2B9yiodlOT91tbosz5%2FkmmvdYLShO3kfhXH7W4kNZvNwJQeFgfbQByY4LTwtdmy31hN8wizwwYadkHC5npvT3E6wMP%2BW4MMGOqUBAno%2FfhBOUHBLR8GI3p85YUcTjC7i%2BkgoIJAm0Z7n4Ae%2FDLQHgOFNpLgqG5Vu0tqMws%2B3RuL4%2B0hOoxljbCWnI7WNFBPEKpGSXeykcUewyIplPa2OC%2Bm1%2F4v%2B7vZwwPYaCDBXtfn%2FhM7M8S%2Fy05YuXaHo7nqSmjqGRhJD%2BpUJXOCkBgdSwkJPXRZtNxhu7BA3uDTOGSiy6vfrytAsEXqSVcXGpgtb&X-Amz-Signature=8205836721da4d3f147332b42e83fbe1f9c52dea5ce24597ee6fac4ace60c391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLES6YOS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDzIS5p2H%2BPfRTIh8MEo9vvcMqvSdziLrsxdFtmiNNpaQIgPFMRj2o6gRfsAlzteF2%2Bg3lpOYnYyB%2FPjZ8sbLadfwwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLH%2F%2BVOhRsnZl4o36SrcA7uiP7qtxPKaCRa7ajtm9q8TJqCeMgFkpW6SQ3OijDvGM%2FxsEvKTD6YbHnvFppFP52u5LdHAQpJeNFHCPUWnqdPZMTRsJ51%2BSy%2F9RqWYKRDtE9h0rC83QrxYXtYcRBdi4%2BwLhRfbJtc0N7QI0dXRsBnfc3n95VC1dzrqgi1wrvAEprbZG%2F%2FDrs1YeAS7bAt3ml962p9y8Uwph68dlKZz1sibOSffh5raJvzr58iKLZse5In6ijK4dcgStpW%2B2OB9C%2FZxKxLc8ZeSgl5jI4U4AiaP%2BiNZEXLjyYJ1sj%2Br5%2FxK7MA3kUWHDwbGWJfZEg1%2BPyjAs4bXcBAIeU1hu9Q4OF7IoZpjw8opQrzfYh76sq5ddyaCgbKc8TMGB%2FHA8sojUsfv501MPrdCkwHGt28Lcu78N0xccVaWAlglWlvPyiqwSZc15qHuEBteonjY4oMR2h10usllIGhQDP6nKQfLpoYxm6Y%2FLEJYqd6cbcVENvW%2Bkj6pQBh9d7zrmiligMbcDp4iJ27YtZc1nAvgUiA0Q0nMZa%2BheZPrANGLUSHKIf%2Bnmhp6Mz7P0P8a90N4DmyikCsm4rHTFXrbOM48TtuSEtKS3Km%2FrYfuE%2FLUyy6FhNv%2FcGu3FM4OuHIBuHn6MPGX4MMGOqUBIZtjUJhxrUfbWcbWI5I%2B8preLdr8WI3q3nAGIVIfeT0Te2KTWq1rzRyth1eFZ%2FDO9NflGPGhyfdf9igCwnnSQKllHQHlXz0D65J54SufgAk3wLLZGIxBbMcS6jKnh1yL5YdqeotoEeP60OUyFHK79aSTEvZibHk%2FpeIZpFtCWeNq1ExKl909JY2lwCMkhgA5o1mlzX8IHS9f5QkkrjVxF3N4PgGh&X-Amz-Signature=6fc872429123f1b2c5622d56e8701ab4331d97a5a89e27b0be0f4444339631de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSMGMDW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHvQHDouqwYdoOQWIId5rJxhpU93boxPArhAVcagZeyqAiBPlu%2BzwPzn5Zc4wWIAvXRqQ6gp8QAPcX1iikd7ZBBG%2FSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMe7qpGeonKvRcCnNCKtwDmq5iJfnp0doZ%2BvxyR0JPESJOxZFB04%2BqofGAGxi9J61GGl3bJyoheZB0leWWLwapQE8vOYznZwBRBn1qZT5cfLwmDSPlLrNwJ5V3x7gC8xgNsAHH36GdEibPKz%2FwPSjY3F2A0MAjr4DFqdvQTecBzG26gw5tvlRZwd%2Fn7a9INkgSfvUkfoUkCVxzKVm3IqLYzgkc4UhlXuds8NAbj4B1wjO%2BWB33pz1Oyp64DjYRkN99NWdeKT6Vgb9LtAH5JA%2FRxbVAHWshGpgximtjuryECK%2FoYrNohl%2FQLLDIiaV8iZq5X4Zk%2ByAxIdxu6lOPamWPBCpmSvXCY2FnZWlv7kmq6oNa8TM88QCNJfu3vsz8jl4YMwYBqjIb3VQcwj51YeQnWofNZJX6Um1BYEeHCx79X14txin%2FrFRLTvMCNvwSt5Khjv7cqJgpb4RPAZVmuvijk3SFRFYD5%2FgQnC3soho1%2BWyamX6j%2BZPoMyS0br2UaU48CI1xDlVQTZ%2Fh1pprR5drAvS0ShTNJxTlaec%2BCbMDJDg3yvuZaCaBN8seiodm5n0pI4rETSwIx%2FuabdYt4XHlgG0b1VqO%2FbEujNSyeJUIbsSNv2I%2BZn7BmSrX0d2hG%2Fz3cqal2KYt8TrAcuYw3ZfgwwY6pgHnyvYC%2FGOkwmlwmOhj%2B2ebPBq2MJ6pXsUKHg%2BmPSyEMG4h%2FfCvfuRRb3YzJZNRdtHmo1PjiNxzQkbzbSLBQlEgoIRDsTg9PW07j1tKpi8IFgHEcGWicncD%2B5l128MFMLzmQkAswKO9lZp%2FsKSv5GjmYtYJO3xPcEDM8vwKHjue%2Bp9zfxeaGO5ZtR2r4dxnCHylqZGgz0KGerJ5QYjDUU5tpxwtJueX&X-Amz-Signature=4a8e56d363d0f65ee3174dde75e5beb56d0b4093aeb9fa15d4f07b9d530d0a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJYYLX6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBUDt70FG9NQDcVohXfYiw4%2F33P5anb%2B2WPlWxtR0qpOAiEAgkfHNLYDcPo0zIq3z6LqpAH99GCZNvKf%2FvEPla74yPUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPpr6lFmZ%2FTLSQGheCrcA4QPsVMdNCPHOL8DstE6%2BN0zwT%2BoUftOFvc%2BmNN95pMofEXoaOe8rMFhWoLuuvmDS16YBCfOKkX9FOJW5GWlKFbrJ7V5lURpNCGYUgr3x7pbhgLAultHu5auCATQAxbjgfCVXwVZmE93oGekkT3GluHBS21rlRy%2F%2B007dnmnsiz7aBtHFSFkBEt8swVhhgWV2tXseqLsGmbabbwAjfuJIB43Kmh9aKlEIIVhLhWat6IwIk1u9yj%2FPsa9ahAw1AnzX9qpMgBDImJJCSrKKfLE6Abtp5TV4i10YdP8YpEvBtt%2Bw181gsZEhxPmCDkGYSCtw%2FQB6cesKYgyHXJ%2F9jtcE5G7xeZQvtYcbbVg6BY0zqa7g3hIIofQFsmkS3Gmd128jUx3WRvjovkwuHE3WIzAtZl29HGS4atkJYJgnitz2eD8nZt5Qa8LF4I9SvRAdr2KP9Qmg6cTt8nwyIEOAsQGu94IWTdocG5VoGenChzsmXT19gj97io3b4PISW9jselnlUqx6%2Beb7YA8Aq4laF40y4G255XXvWXW4EWs%2F%2B9yiodlOT91tbosz5%2FkmmvdYLShO3kfhXH7W4kNZvNwJQeFgfbQByY4LTwtdmy31hN8wizwwYadkHC5npvT3E6wMP%2BW4MMGOqUBAno%2FfhBOUHBLR8GI3p85YUcTjC7i%2BkgoIJAm0Z7n4Ae%2FDLQHgOFNpLgqG5Vu0tqMws%2B3RuL4%2B0hOoxljbCWnI7WNFBPEKpGSXeykcUewyIplPa2OC%2Bm1%2F4v%2B7vZwwPYaCDBXtfn%2FhM7M8S%2Fy05YuXaHo7nqSmjqGRhJD%2BpUJXOCkBgdSwkJPXRZtNxhu7BA3uDTOGSiy6vfrytAsEXqSVcXGpgtb&X-Amz-Signature=70d146ddd4a624630951e574d3a725261658b3776aee5d2a34852e7daa38608e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
