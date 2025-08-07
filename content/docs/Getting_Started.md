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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ND2BAMP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDkQWadLTf2jEFiImIludDQrP4LxUynKTvFQesP%2F%2BemjAiEArLadnO9HJ1Un6Vy5S%2BkbXIDTlf6CH6GcOT0bEzNN1VoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1nl6qmlWa%2FRD7YOCrcA9S6J3QsLqrNXBv1DIH3lYuFK7UcPTjz3ecQmovqJRvxER0BR4jFEzl%2BC398tq%2BzMqNp86WAzrHWIQf1uJgTMWc3jbT0kvTdrA8jJr%2BPGoupVU59A6IpEHuhSP4lmxejVBijdpmbXeUwIIoK4%2BccXxTsUA4THcF3e7KxK0RaK7gPCLcW%2F4nAvIyITBTImH%2B3COaih4vwVfq3XGi1JEEC5peHxW5MuyJCfKTjsQyLmCtGCEgkgfJWSctZpRbkt1JDcmY%2Ba9xzTMHHdtvf6dP8yw4p4aQIbrjBMY1k7IHDhsvGH80ghvA%2FTolRPvoRKlkkz1dDBJH0XBRxoryWsbN2UfB7v8FHl%2B%2FdvcL6NWGsVKh5c8bPi3KmHQ2K8FXTwT3YW5CFU%2BSJr5Y8z%2F%2FMd1BfyPEwoVgkM1Q5S4skYDzaXseJDTHGfA0DcvObaIjstZlUBGKGmbIVso7StnKQNaY8x63XejCgYLtqBbVHzFPnmSCYYliiyGc%2FuEHwDFIPD18cKDVOTRdoFkU%2BgcUcl3CBpWvLVDNOkGxtlutA8nJN1tmTitmfgppDFh27KgSU7e1WuglXuVxCO5F%2FjwCovvJfLaRkpPbE8sg21unuvEDZ6gTQL8IKQSUxIG3oh7bHMLb60sQGOqUBuuFKD7m9vZRv8DyDUrwb7U89DtlZYaWJ92aCzpnlB3vp0E0OeRLFjRw7b79hHMMvzdl%2F9aqt3xtVMuTXcFUN3lneDOXKRzNhAzFr7pwaMGrSOE%2FHx7WYMCmjwDv4EUM6GSmg5veLQFl%2FHXSnFXzoz0z3ylU7tOq4BFRRixW7ZyQyKp6WW97xaljkBV%2FkQ6Bb2%2BGle2Z1DYVWukSqY66YqkI2jF2V&X-Amz-Signature=14b71c9ac6b033d14a1b548fecb3feb9ae690c932b1e49054f82bb132d123b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ND2BAMP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDkQWadLTf2jEFiImIludDQrP4LxUynKTvFQesP%2F%2BemjAiEArLadnO9HJ1Un6Vy5S%2BkbXIDTlf6CH6GcOT0bEzNN1VoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1nl6qmlWa%2FRD7YOCrcA9S6J3QsLqrNXBv1DIH3lYuFK7UcPTjz3ecQmovqJRvxER0BR4jFEzl%2BC398tq%2BzMqNp86WAzrHWIQf1uJgTMWc3jbT0kvTdrA8jJr%2BPGoupVU59A6IpEHuhSP4lmxejVBijdpmbXeUwIIoK4%2BccXxTsUA4THcF3e7KxK0RaK7gPCLcW%2F4nAvIyITBTImH%2B3COaih4vwVfq3XGi1JEEC5peHxW5MuyJCfKTjsQyLmCtGCEgkgfJWSctZpRbkt1JDcmY%2Ba9xzTMHHdtvf6dP8yw4p4aQIbrjBMY1k7IHDhsvGH80ghvA%2FTolRPvoRKlkkz1dDBJH0XBRxoryWsbN2UfB7v8FHl%2B%2FdvcL6NWGsVKh5c8bPi3KmHQ2K8FXTwT3YW5CFU%2BSJr5Y8z%2F%2FMd1BfyPEwoVgkM1Q5S4skYDzaXseJDTHGfA0DcvObaIjstZlUBGKGmbIVso7StnKQNaY8x63XejCgYLtqBbVHzFPnmSCYYliiyGc%2FuEHwDFIPD18cKDVOTRdoFkU%2BgcUcl3CBpWvLVDNOkGxtlutA8nJN1tmTitmfgppDFh27KgSU7e1WuglXuVxCO5F%2FjwCovvJfLaRkpPbE8sg21unuvEDZ6gTQL8IKQSUxIG3oh7bHMLb60sQGOqUBuuFKD7m9vZRv8DyDUrwb7U89DtlZYaWJ92aCzpnlB3vp0E0OeRLFjRw7b79hHMMvzdl%2F9aqt3xtVMuTXcFUN3lneDOXKRzNhAzFr7pwaMGrSOE%2FHx7WYMCmjwDv4EUM6GSmg5veLQFl%2FHXSnFXzoz0z3ylU7tOq4BFRRixW7ZyQyKp6WW97xaljkBV%2FkQ6Bb2%2BGle2Z1DYVWukSqY66YqkI2jF2V&X-Amz-Signature=4dd01a5fcdb66eeca597e73e5fcea8351c88d442a3613a2b34c27b5503c00608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ND2BAMP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDkQWadLTf2jEFiImIludDQrP4LxUynKTvFQesP%2F%2BemjAiEArLadnO9HJ1Un6Vy5S%2BkbXIDTlf6CH6GcOT0bEzNN1VoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1nl6qmlWa%2FRD7YOCrcA9S6J3QsLqrNXBv1DIH3lYuFK7UcPTjz3ecQmovqJRvxER0BR4jFEzl%2BC398tq%2BzMqNp86WAzrHWIQf1uJgTMWc3jbT0kvTdrA8jJr%2BPGoupVU59A6IpEHuhSP4lmxejVBijdpmbXeUwIIoK4%2BccXxTsUA4THcF3e7KxK0RaK7gPCLcW%2F4nAvIyITBTImH%2B3COaih4vwVfq3XGi1JEEC5peHxW5MuyJCfKTjsQyLmCtGCEgkgfJWSctZpRbkt1JDcmY%2Ba9xzTMHHdtvf6dP8yw4p4aQIbrjBMY1k7IHDhsvGH80ghvA%2FTolRPvoRKlkkz1dDBJH0XBRxoryWsbN2UfB7v8FHl%2B%2FdvcL6NWGsVKh5c8bPi3KmHQ2K8FXTwT3YW5CFU%2BSJr5Y8z%2F%2FMd1BfyPEwoVgkM1Q5S4skYDzaXseJDTHGfA0DcvObaIjstZlUBGKGmbIVso7StnKQNaY8x63XejCgYLtqBbVHzFPnmSCYYliiyGc%2FuEHwDFIPD18cKDVOTRdoFkU%2BgcUcl3CBpWvLVDNOkGxtlutA8nJN1tmTitmfgppDFh27KgSU7e1WuglXuVxCO5F%2FjwCovvJfLaRkpPbE8sg21unuvEDZ6gTQL8IKQSUxIG3oh7bHMLb60sQGOqUBuuFKD7m9vZRv8DyDUrwb7U89DtlZYaWJ92aCzpnlB3vp0E0OeRLFjRw7b79hHMMvzdl%2F9aqt3xtVMuTXcFUN3lneDOXKRzNhAzFr7pwaMGrSOE%2FHx7WYMCmjwDv4EUM6GSmg5veLQFl%2FHXSnFXzoz0z3ylU7tOq4BFRRixW7ZyQyKp6WW97xaljkBV%2FkQ6Bb2%2BGle2Z1DYVWukSqY66YqkI2jF2V&X-Amz-Signature=646c47c06ac437b808c6fb9241c68129f79d436cbbda661d09066fb3e7e53798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726MPL4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAHZrNzUnyeOze5OcPMMZEZD8DZ2TPJjX5ROVPlVwsqPAiEA3UBVWntqTVVJEnqg3hmgVNI8c4VBlWor8R0i3t46kIoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaG88nIwRqrECJf9yrcAz5puO3xZPqfpX9RYr8RM6qn3Y04W9MkgGCDT3suEis35RKLeb7XsNQYTKYDgtyxtiWSu1hUEQFNhk6u7XVs0B5Ief2AQptTxOlZD8lBofbKxIoWQiu1TgCUQexLgR8j3sxsSfzPOjthjwEYS%2FMZC%2BahKqEsfTYYkh5yedd4vwk0cqY2p5K1naHou7m%2BGklERy1T2mD5p2ig7%2Fmqqk0ALzwGWwl%2FNkIklfTwER%2FQojJYj1L860oIXb%2B0g8cuHVcvxK9qfLjW7liMoDbBj0Q6H9N3KXysh8Lv1U%2FfYeIo%2BRoF8Zq0W94gZ1Y6xpugIsg2AUOJrPIYa2CLoot%2FBTVJKfA%2FND%2FpbsZqFMUIC4snfg0u6ZOf9bGsqMy6mbpgyqYo7Ja8leeXAioEmbZRCtqrQSBe90YzxlwgqlTrFd1icybcr0r%2FE%2BbJo5GfSpdpgAlG6GpEXQmdwPHylylSok%2BK%2FeF4JsAGB8qmuGouIH2bA0%2FoujHSIaaaHWY9m9flxORrCVxQx1JIGRRl3rtecIFqwyoxMuLJo2%2FVtbfiIv89CN5zZsrz1f1P5m%2FC%2Bnp4LM16xge2uetjlfjE7q8gWa6EbWTuKfau3FoJsc9QQwuTl6gTQUB76RpK7EGFliZXMNf50sQGOqUBJkdVF3YoQjrv7pT4dMwNPoZbesOjUhyS%2B9ZZTaSP9QOTDEXa7FJz6uu%2FblMAfLI%2BQZokuYNejOpVU0UdRBFUDvmM1q8id9liwXg4gA8d37J7LWeco24BVBFHHdxwxDilF4xKVQUtggp0q%2BDh%2Bhg0BY%2FxXePsvA1LdHT%2BbwPP0qZ%2Fub%2FQxLn4vBge58%2F2WMSahdekvoiNvoZvCebCTjanXLesbTZs&X-Amz-Signature=ccd6208f04d5fbe32b68fd153fbaed48f372062fb93d120874a8f1dce5949059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WTVT4TZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA5FoW67Dl2%2BMUGpAj2TbwV6w0WLEBPYCE1hDqmS3F1gIgM3m%2F3Nf1nja86C2iYRIFMqVi3A1KTPvcG6oMSfaztg0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTsjsVpj1grpLFR1CrcA0PsiUnSrDJhhD6n%2BO9MV6Qtd108%2FzIfnf%2FL7LZgJNfL%2FiDiGRpTscYPAlT7DhDGyKXOInmVAwcaRYsTZULeH9Hdl1W0MWz%2B1V2dEJKS1bRjkwyQVnOkkfJNNj2TRdJhCToJmLS2SxbPw6W9kUqVOdWNxWroqchU7alxhoT%2FrJGggvu33enethIkjfHVthgcLnQtHomWDlrv1yHS6oNyNiiQXDJk1sf84vaDPYR7gkY%2FM%2FFwdaxvaDiWxZNatshES6l%2BJWYW1OhoHABoePSElbr8hVctbZJAv%2BMLkLhwOX1qAMF1LymYqvfEj8vFiJDw6ArB7Q29vy8DvhjMtLJunuZ48Eu6MuUp7ccc3zKLWaJdbeWD2JAIyFgIoC2R06%2FfB9TMu9zVaCA0F7WSNPDVwHtbpt3AqCU8sm3VL6Ht2Hm2w5SgUZofEoKmrqeKBkgLNX4INR%2FmW8us55bqT6ebVBPGMDgcyWFqoPxUKeSQC73bJEHTAwWXi1TYodDGQnHQxE3emjdB6gMzYXXPi%2B20qJKN1%2F%2FCtdSjvTqP%2F%2FQHT8FjfHqxUls%2BkmZffgaoaAW36UYdXOxSdU2LUE%2BQYczZGmKQtvt%2F9Dx0cmqrmyXxppqbL8U8ATZXPjWB2KxuMJD50sQGOqUB9XLe%2BK7CL6EiohwFE7G4fKCz25w1f0tKG04e7m80cjEn9sTgk7LYojeFQeRLG6O%2FRqbwOfrTAesT4RqQxKlRpEx8oUK23xV8C9gRTY1m%2BM1xSrnoN8p36NZUv54NV7DJQhE5fqPm2mbZa%2FtvQlXNJAjzEqMcPNQC0ZiJtRZJAmXMqd51zOLHjCxApfBENe%2FtXvhUELoY6Nhe%2BMmAlBuwoljIlXKa&X-Amz-Signature=e73504581184003a3103ac19d7f1b5977b5d1b6c9f183072c6d44c2ee8561afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ND2BAMP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDkQWadLTf2jEFiImIludDQrP4LxUynKTvFQesP%2F%2BemjAiEArLadnO9HJ1Un6Vy5S%2BkbXIDTlf6CH6GcOT0bEzNN1VoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1nl6qmlWa%2FRD7YOCrcA9S6J3QsLqrNXBv1DIH3lYuFK7UcPTjz3ecQmovqJRvxER0BR4jFEzl%2BC398tq%2BzMqNp86WAzrHWIQf1uJgTMWc3jbT0kvTdrA8jJr%2BPGoupVU59A6IpEHuhSP4lmxejVBijdpmbXeUwIIoK4%2BccXxTsUA4THcF3e7KxK0RaK7gPCLcW%2F4nAvIyITBTImH%2B3COaih4vwVfq3XGi1JEEC5peHxW5MuyJCfKTjsQyLmCtGCEgkgfJWSctZpRbkt1JDcmY%2Ba9xzTMHHdtvf6dP8yw4p4aQIbrjBMY1k7IHDhsvGH80ghvA%2FTolRPvoRKlkkz1dDBJH0XBRxoryWsbN2UfB7v8FHl%2B%2FdvcL6NWGsVKh5c8bPi3KmHQ2K8FXTwT3YW5CFU%2BSJr5Y8z%2F%2FMd1BfyPEwoVgkM1Q5S4skYDzaXseJDTHGfA0DcvObaIjstZlUBGKGmbIVso7StnKQNaY8x63XejCgYLtqBbVHzFPnmSCYYliiyGc%2FuEHwDFIPD18cKDVOTRdoFkU%2BgcUcl3CBpWvLVDNOkGxtlutA8nJN1tmTitmfgppDFh27KgSU7e1WuglXuVxCO5F%2FjwCovvJfLaRkpPbE8sg21unuvEDZ6gTQL8IKQSUxIG3oh7bHMLb60sQGOqUBuuFKD7m9vZRv8DyDUrwb7U89DtlZYaWJ92aCzpnlB3vp0E0OeRLFjRw7b79hHMMvzdl%2F9aqt3xtVMuTXcFUN3lneDOXKRzNhAzFr7pwaMGrSOE%2FHx7WYMCmjwDv4EUM6GSmg5veLQFl%2FHXSnFXzoz0z3ylU7tOq4BFRRixW7ZyQyKp6WW97xaljkBV%2FkQ6Bb2%2BGle2Z1DYVWukSqY66YqkI2jF2V&X-Amz-Signature=583c8e6f3064530ecbfa17bf1b79c332cdcb8f7005ba84817befbad7d90036b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
