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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424DD6M7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHp7Wju7S3NkDZVm9V%2BsE04xZEH9yikVmzVN%2BUuMvu6VAiEAioTEUFhoZXRrlwWRH6IfhCxEAoNIGdVFaFuYXb3b7PcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh2rJenfzvA7uF3VircA%2BOtFdTzrk6iiUxD0u3U8sz36kwYvMh%2BVYbNmalkhc0PWZqweuzRmUJmTeX4wXkFyt3ckWVJJEWvqFbW8%2BolhkJbKh0skJ1xWHvtBYP%2BbkJnG%2FSazl95WKIw%2BTohU8xKqv1kcWym5fmC%2BaejayJxooqL1QKyx2M85rvQvLpviDCIClYPzxrtQ%2Bml%2Bzlha5Q3ZWiMqGgkY%2FpdEkbBpCv1oUChc6cS2eVrs5pXbNPK61I0l2YeMy4Zs5R4i7AIVWv43M9Nu4KScVC2lCCvC2%2FGDkmG5RvAbOWa7XAzm3VMQJ5A6hM%2FCp%2BYITB6F%2F7ghMzJd2mR7mld8jbllWzrdsG72x2%2BB7jXQE3WCflm4IrYll5sEC5BCpUyDtAGdx0iEhK8E3IhrZzC0trsa6JWRZTmx9cHXrmj4vACVKCobyJRmyeFWQUcFvSl%2Bf8NWE%2Bp4BjQeEQTUmBsncNy1vuH0tIxPXvN8eEpRBFQEmBCgvfviWek8ebo4faq5chKStoxgOHqrOnlX6F5x%2F0IxqeASvlcjY%2BWZ1EHLewbbVOxqccT5GTUHDqxg6Qf4GuAYv1ErciUKLE6SRcmghcJvCdUNbD5MPwhrSStkg7vh80%2FfEDi6QePzzpNh0R5MKMENF0HMJDSnsQGOqUB1rQHBlxQSVHqzmpeyPgb4AFaXWUOIjlzD3AS%2FXIx9cEZaKOwFg0xXojzGpnx7qfc1%2Bx9%2BH8asjNImgGeswLIiUTL%2BuQ3hgr7Q3urO1z9iJrEHdnM%2Bi6PIWxl9oksmuVAyg1a1t3KDREsZYb88yHQx3I8Sz3RflMvyIaMYZ4elt%2BouFErqDnXS3wlPSUojTvigkauwnBjbmco%2BRuaraygfQE%2FnkwS&X-Amz-Signature=fc21d31e0af0f4e34fa11817fc729b7c392288d3f10bd9583f76abbf69ed8959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424DD6M7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHp7Wju7S3NkDZVm9V%2BsE04xZEH9yikVmzVN%2BUuMvu6VAiEAioTEUFhoZXRrlwWRH6IfhCxEAoNIGdVFaFuYXb3b7PcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh2rJenfzvA7uF3VircA%2BOtFdTzrk6iiUxD0u3U8sz36kwYvMh%2BVYbNmalkhc0PWZqweuzRmUJmTeX4wXkFyt3ckWVJJEWvqFbW8%2BolhkJbKh0skJ1xWHvtBYP%2BbkJnG%2FSazl95WKIw%2BTohU8xKqv1kcWym5fmC%2BaejayJxooqL1QKyx2M85rvQvLpviDCIClYPzxrtQ%2Bml%2Bzlha5Q3ZWiMqGgkY%2FpdEkbBpCv1oUChc6cS2eVrs5pXbNPK61I0l2YeMy4Zs5R4i7AIVWv43M9Nu4KScVC2lCCvC2%2FGDkmG5RvAbOWa7XAzm3VMQJ5A6hM%2FCp%2BYITB6F%2F7ghMzJd2mR7mld8jbllWzrdsG72x2%2BB7jXQE3WCflm4IrYll5sEC5BCpUyDtAGdx0iEhK8E3IhrZzC0trsa6JWRZTmx9cHXrmj4vACVKCobyJRmyeFWQUcFvSl%2Bf8NWE%2Bp4BjQeEQTUmBsncNy1vuH0tIxPXvN8eEpRBFQEmBCgvfviWek8ebo4faq5chKStoxgOHqrOnlX6F5x%2F0IxqeASvlcjY%2BWZ1EHLewbbVOxqccT5GTUHDqxg6Qf4GuAYv1ErciUKLE6SRcmghcJvCdUNbD5MPwhrSStkg7vh80%2FfEDi6QePzzpNh0R5MKMENF0HMJDSnsQGOqUB1rQHBlxQSVHqzmpeyPgb4AFaXWUOIjlzD3AS%2FXIx9cEZaKOwFg0xXojzGpnx7qfc1%2Bx9%2BH8asjNImgGeswLIiUTL%2BuQ3hgr7Q3urO1z9iJrEHdnM%2Bi6PIWxl9oksmuVAyg1a1t3KDREsZYb88yHQx3I8Sz3RflMvyIaMYZ4elt%2BouFErqDnXS3wlPSUojTvigkauwnBjbmco%2BRuaraygfQE%2FnkwS&X-Amz-Signature=65c0ba5bdc0eed7fae227d9ba6f8f5c7aac370e91d2e61ebcb9ebd33bebd3fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424DD6M7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHp7Wju7S3NkDZVm9V%2BsE04xZEH9yikVmzVN%2BUuMvu6VAiEAioTEUFhoZXRrlwWRH6IfhCxEAoNIGdVFaFuYXb3b7PcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh2rJenfzvA7uF3VircA%2BOtFdTzrk6iiUxD0u3U8sz36kwYvMh%2BVYbNmalkhc0PWZqweuzRmUJmTeX4wXkFyt3ckWVJJEWvqFbW8%2BolhkJbKh0skJ1xWHvtBYP%2BbkJnG%2FSazl95WKIw%2BTohU8xKqv1kcWym5fmC%2BaejayJxooqL1QKyx2M85rvQvLpviDCIClYPzxrtQ%2Bml%2Bzlha5Q3ZWiMqGgkY%2FpdEkbBpCv1oUChc6cS2eVrs5pXbNPK61I0l2YeMy4Zs5R4i7AIVWv43M9Nu4KScVC2lCCvC2%2FGDkmG5RvAbOWa7XAzm3VMQJ5A6hM%2FCp%2BYITB6F%2F7ghMzJd2mR7mld8jbllWzrdsG72x2%2BB7jXQE3WCflm4IrYll5sEC5BCpUyDtAGdx0iEhK8E3IhrZzC0trsa6JWRZTmx9cHXrmj4vACVKCobyJRmyeFWQUcFvSl%2Bf8NWE%2Bp4BjQeEQTUmBsncNy1vuH0tIxPXvN8eEpRBFQEmBCgvfviWek8ebo4faq5chKStoxgOHqrOnlX6F5x%2F0IxqeASvlcjY%2BWZ1EHLewbbVOxqccT5GTUHDqxg6Qf4GuAYv1ErciUKLE6SRcmghcJvCdUNbD5MPwhrSStkg7vh80%2FfEDi6QePzzpNh0R5MKMENF0HMJDSnsQGOqUB1rQHBlxQSVHqzmpeyPgb4AFaXWUOIjlzD3AS%2FXIx9cEZaKOwFg0xXojzGpnx7qfc1%2Bx9%2BH8asjNImgGeswLIiUTL%2BuQ3hgr7Q3urO1z9iJrEHdnM%2Bi6PIWxl9oksmuVAyg1a1t3KDREsZYb88yHQx3I8Sz3RflMvyIaMYZ4elt%2BouFErqDnXS3wlPSUojTvigkauwnBjbmco%2BRuaraygfQE%2FnkwS&X-Amz-Signature=c3ca0535068177253f7aba7f0c51c76150574ed8f4da2a3468a6b3d2fbb3c834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7V3YGQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIE7YsoqE2dJbSP%2BOD7poeaPwJy0Qfy1sQlEY9F2idDQbAiEA4%2BgQwqs%2B82a29XMBZo251dcnNz0qzftOXPdcjybt7zAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJAYh%2BR2kZONMo9eircAxG6gRWDnyRjAWnFdp77R0XvM2A32PUEOEl9mqNlLHIVwmZC0eX%2BxVywg%2BQYBk7t%2B9BS24kFsqNSHKPMCL4IIoaQbzpbbkNL%2FxAubyEQ11LO%2F%2FK6cfm0NuQBbquvthD07xc3DP0C6QHt%2FYXf8WFN3XTX%2F%2FMw%2FuGMPVr7ktWHBEKPCAMqJwedastLRyWGft%2FR9yPTpJqAQJ8JhJ8Rf4VxtQJdgDxetuNdEGfqkzXiHMWDYbPEm57kJg5sKRAUlSGhyjj1gldGYNu4d%2FMf%2Fy9%2BAinFBFge6PRvzRF%2Btg8j2GZFJ4SruKQVOaLGEBnS%2FTMM21CL6EoSQcava9v6pft1VdAQGowB182OLvczL5zlfiHqsxHUNUQhUMleFVkl7MwgJrYNeloQdvbRoMQhpJSOz5DwcSv42GDSnXZZBof2ybiw5mJ8cpAHvYmcTF05f3f9mt4HGSIH7G9DcWWRH1Bc2U1uUNdFziXcEmgBPC9Pm5wP41C2SCMnxl%2Fkm5VX8Eiq10wBlbAgI%2FPQm5z4WdUjXboFkw0uMZMe4CA54Ux9GBGZ6jyOt7mGsI0FUENFD3tGn9dGKbiT4wk%2F9GIHsQ3zeGBYC%2F%2B2Y7cuA5YJXkZ10iXh7h1vHAZu8wG0K9WQMJDSnsQGOqUBjXDOB52GVi%2BDFFRwtpRqDIG0frn9OJHn5HhPbclY4atWrA10t5f%2FnD3fXfFlP7Vz2CGsqIkFFzJUjRY3UUShG5fKQsSPb8zEewebVPh%2BYGTXYlM1LWkaSvY21cUqNnKQZv7GmQTsoro%2F7TAm0sQMy%2FK4Zf3FDXGopRjMVH2WI2Ex1JkX%2B10Y1l8B0OXe2WotLmSwFK%2BvTUGJxcxB9UECIRTsGAi%2B&X-Amz-Signature=00ea374e19442af3d0e617537da3cc9288573db5f44876fe5b2fac9d73bfde2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E7U4POC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAcgFQvHi%2BBeCyZA%2B9xKGAGkHtPQ0mHntG03puDqKdZIAiEA62iF98dBlxcjDOXunXC97%2FcHCz%2FCtf%2BhHyTDS%2BURnZkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQsjDflqhUKiJpUSrcAxAuYhmWCn4SuyX1hltan5hyrTgS5BJfCi3Khtay6IS%2FIbhchjJduh6qFsEEFc%2Bw3HaC%2FO0lrSYxzK1rao6w2U7n3T%2BDsGhc6DeDSm2NZlzD2Kkwic2lGWSQ5IVCU86QmIOfjHRxY3ECYSrqlR%2FqYTsfBNt2nZ5TxlFoSowbySc9kvq5okvUZIWarqaREBQoUjs8220zy4zA1yy7zF7lkeLRG9lsNr9ntk1%2BYsOEc0Ig6i5csIfYHA92jDWsVHizPTTQBDbr2WL%2BMAWjR2Jc1nGlIW64oOA42814l9%2FYLcyIT3niN%2F0O6AOWy29N9Er1n9k5YQRDHExi9e3n%2BSbpAFP%2BpgMYhcr%2FVLNqLdLZZAJd8j0va8dT5paUeKnxtcrkPGxyxxdfXR4ek7XVS5bnJlCgLCU4aoYKRv%2BYQpGpMDKnwn3a%2BI4MHWZL11ZM17npR9CiZ8MsTfghofcb7LQTiSIdJGjnse3S7q4KgFiJafEiQ1JArjFRbRQ%2FG8lpb55enfp88ZH85BXlvWMf3NTG7TSqmZnhSE6L5wWPAiWsSYH%2FX21uAXGlEVZiyVCxIRIemrbddtUd5ct%2FGeIRmpfVUB9NGL3HFhlU0sC7yUsg57AfUQnH2Tq0jMwc2M2ZMPvRnsQGOqUBHq4A74JJAjII1cd7iuE%2FWA0xy2qc62Q2cYijPvK8fBfa77YyokAT6kmjkiyfApIWWKbCBRht8KibkDoKftGV6K0SQOU6OsEjuNRRjCEDyap7h94t3pD1w3ZmgIfJngrRXhpTTLqZc4WDYfh4PzTWL%2BRfu%2BqGYAz8LmHrxfEIf0Dgqm0egS5UajiBxJuyqf8kh%2B7euSHiWSIRam7VmPVYbm2k6WGm&X-Amz-Signature=447a1197c0869c030b632c30291ad815b57f84715ec46d9954305f5306f12eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424DD6M7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHp7Wju7S3NkDZVm9V%2BsE04xZEH9yikVmzVN%2BUuMvu6VAiEAioTEUFhoZXRrlwWRH6IfhCxEAoNIGdVFaFuYXb3b7PcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh2rJenfzvA7uF3VircA%2BOtFdTzrk6iiUxD0u3U8sz36kwYvMh%2BVYbNmalkhc0PWZqweuzRmUJmTeX4wXkFyt3ckWVJJEWvqFbW8%2BolhkJbKh0skJ1xWHvtBYP%2BbkJnG%2FSazl95WKIw%2BTohU8xKqv1kcWym5fmC%2BaejayJxooqL1QKyx2M85rvQvLpviDCIClYPzxrtQ%2Bml%2Bzlha5Q3ZWiMqGgkY%2FpdEkbBpCv1oUChc6cS2eVrs5pXbNPK61I0l2YeMy4Zs5R4i7AIVWv43M9Nu4KScVC2lCCvC2%2FGDkmG5RvAbOWa7XAzm3VMQJ5A6hM%2FCp%2BYITB6F%2F7ghMzJd2mR7mld8jbllWzrdsG72x2%2BB7jXQE3WCflm4IrYll5sEC5BCpUyDtAGdx0iEhK8E3IhrZzC0trsa6JWRZTmx9cHXrmj4vACVKCobyJRmyeFWQUcFvSl%2Bf8NWE%2Bp4BjQeEQTUmBsncNy1vuH0tIxPXvN8eEpRBFQEmBCgvfviWek8ebo4faq5chKStoxgOHqrOnlX6F5x%2F0IxqeASvlcjY%2BWZ1EHLewbbVOxqccT5GTUHDqxg6Qf4GuAYv1ErciUKLE6SRcmghcJvCdUNbD5MPwhrSStkg7vh80%2FfEDi6QePzzpNh0R5MKMENF0HMJDSnsQGOqUB1rQHBlxQSVHqzmpeyPgb4AFaXWUOIjlzD3AS%2FXIx9cEZaKOwFg0xXojzGpnx7qfc1%2Bx9%2BH8asjNImgGeswLIiUTL%2BuQ3hgr7Q3urO1z9iJrEHdnM%2Bi6PIWxl9oksmuVAyg1a1t3KDREsZYb88yHQx3I8Sz3RflMvyIaMYZ4elt%2BouFErqDnXS3wlPSUojTvigkauwnBjbmco%2BRuaraygfQE%2FnkwS&X-Amz-Signature=f6dc5c1d4130ed7f85533aecd6b25849aa3bb5ed8c9c2f9ebceec46e751588fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
