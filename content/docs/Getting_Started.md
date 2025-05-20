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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNE6ITS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57XsLnnoJvfQolM8YS0I76MnRRixLM9g0KHjBpXJ%2BggIhALLl34fKuYqNQvfIYxuECXfkKAOqxnweKDL8qu8Mc4XcKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEcVeDEML6s8eozhwq3APYkBrofB4LAN1jpQoEJJkx0LnG5Eo37hcvS%2BjfqmYbNVEOGktEIq3luVBjt%2B5hr5mVmiRh8mdNaRi2wYQw3MCUKVvGt5jsZuRIscw6hyvAOGHMFXwjCFbpHgeQs8XIzd1qqXWBjpfxfmi9fzXhujyCRO3KHVyf%2FHzHVXE8YXqldfWDpRB1uDtdWj8S%2FTkiGDdCeufb03aB0ZwiNIT5G5QVOu8pdDeIMJUo5vRcui8sW%2FDI%2FaY%2BV7KYRyqxXJwhMVC%2FDKuISfOKc5x4yjGXtCkEVptYKE2n7Upd982lTxQTearnlaNg6%2FgPK%2FoAyb4q13QUOYVCCZYkg4rkc0yhy%2BKZRuSTYMzAY69OUwJ%2BQZ7vmRy2wFyy6RbXXlhOu9boeChSb%2F7nVS4B2S5LiRFv1ngPopdAxJlC7Wm6i7DclSUPzc4nf2uapzCd204zEgOza8Hus1nU2fkKsFJMxoRWxWxPHmXMLYELfPVD%2Bpmu86rnlSeQTm9Bmf1LjWwuplk21rFgRGselvh5HPt4C9HvUA3NIV%2BSdDG31lIUciAL2TYMDe5HN44%2FhzOSa2XxTECJnIcBxAsmG9Xvsn1mdWMHmpE0rH3UT5g0AZcsBVrVMtGxI3rA1A0BFbeAMAO2NTCxy7PBBjqkARAR%2BBc0Jbghega3ozbaKdihLrLeAYn%2B3LC7dIGzYmRnXY5C%2BhjfuMCbg%2F%2Fvozc%2FtCd%2FEUl9uhgSEBShDrwPvGVmrck3e%2F9W%2FE3G9kfon27JWuE0%2Ba5tb1%2B%2BF2ZJgVY%2FuL0ROoQiEpeEUg7CU1UGrA010YAC6p4w75Vs0CfpgkqpwH7Thdsry46VJy6QvG%2BM52PMYe5YgmyGbILx2cUVb2P%2FM6Sj&X-Amz-Signature=fc5c5a4aed16091230e28c2ce74df4f92217f0ebddcaa1251f62157f5fa430f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNE6ITS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57XsLnnoJvfQolM8YS0I76MnRRixLM9g0KHjBpXJ%2BggIhALLl34fKuYqNQvfIYxuECXfkKAOqxnweKDL8qu8Mc4XcKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEcVeDEML6s8eozhwq3APYkBrofB4LAN1jpQoEJJkx0LnG5Eo37hcvS%2BjfqmYbNVEOGktEIq3luVBjt%2B5hr5mVmiRh8mdNaRi2wYQw3MCUKVvGt5jsZuRIscw6hyvAOGHMFXwjCFbpHgeQs8XIzd1qqXWBjpfxfmi9fzXhujyCRO3KHVyf%2FHzHVXE8YXqldfWDpRB1uDtdWj8S%2FTkiGDdCeufb03aB0ZwiNIT5G5QVOu8pdDeIMJUo5vRcui8sW%2FDI%2FaY%2BV7KYRyqxXJwhMVC%2FDKuISfOKc5x4yjGXtCkEVptYKE2n7Upd982lTxQTearnlaNg6%2FgPK%2FoAyb4q13QUOYVCCZYkg4rkc0yhy%2BKZRuSTYMzAY69OUwJ%2BQZ7vmRy2wFyy6RbXXlhOu9boeChSb%2F7nVS4B2S5LiRFv1ngPopdAxJlC7Wm6i7DclSUPzc4nf2uapzCd204zEgOza8Hus1nU2fkKsFJMxoRWxWxPHmXMLYELfPVD%2Bpmu86rnlSeQTm9Bmf1LjWwuplk21rFgRGselvh5HPt4C9HvUA3NIV%2BSdDG31lIUciAL2TYMDe5HN44%2FhzOSa2XxTECJnIcBxAsmG9Xvsn1mdWMHmpE0rH3UT5g0AZcsBVrVMtGxI3rA1A0BFbeAMAO2NTCxy7PBBjqkARAR%2BBc0Jbghega3ozbaKdihLrLeAYn%2B3LC7dIGzYmRnXY5C%2BhjfuMCbg%2F%2Fvozc%2FtCd%2FEUl9uhgSEBShDrwPvGVmrck3e%2F9W%2FE3G9kfon27JWuE0%2Ba5tb1%2B%2BF2ZJgVY%2FuL0ROoQiEpeEUg7CU1UGrA010YAC6p4w75Vs0CfpgkqpwH7Thdsry46VJy6QvG%2BM52PMYe5YgmyGbILx2cUVb2P%2FM6Sj&X-Amz-Signature=c5feddf9cc94c8afc7915f9607fd1c9b8413cc061d3413633344a8b3e8828a31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNE6ITS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57XsLnnoJvfQolM8YS0I76MnRRixLM9g0KHjBpXJ%2BggIhALLl34fKuYqNQvfIYxuECXfkKAOqxnweKDL8qu8Mc4XcKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEcVeDEML6s8eozhwq3APYkBrofB4LAN1jpQoEJJkx0LnG5Eo37hcvS%2BjfqmYbNVEOGktEIq3luVBjt%2B5hr5mVmiRh8mdNaRi2wYQw3MCUKVvGt5jsZuRIscw6hyvAOGHMFXwjCFbpHgeQs8XIzd1qqXWBjpfxfmi9fzXhujyCRO3KHVyf%2FHzHVXE8YXqldfWDpRB1uDtdWj8S%2FTkiGDdCeufb03aB0ZwiNIT5G5QVOu8pdDeIMJUo5vRcui8sW%2FDI%2FaY%2BV7KYRyqxXJwhMVC%2FDKuISfOKc5x4yjGXtCkEVptYKE2n7Upd982lTxQTearnlaNg6%2FgPK%2FoAyb4q13QUOYVCCZYkg4rkc0yhy%2BKZRuSTYMzAY69OUwJ%2BQZ7vmRy2wFyy6RbXXlhOu9boeChSb%2F7nVS4B2S5LiRFv1ngPopdAxJlC7Wm6i7DclSUPzc4nf2uapzCd204zEgOza8Hus1nU2fkKsFJMxoRWxWxPHmXMLYELfPVD%2Bpmu86rnlSeQTm9Bmf1LjWwuplk21rFgRGselvh5HPt4C9HvUA3NIV%2BSdDG31lIUciAL2TYMDe5HN44%2FhzOSa2XxTECJnIcBxAsmG9Xvsn1mdWMHmpE0rH3UT5g0AZcsBVrVMtGxI3rA1A0BFbeAMAO2NTCxy7PBBjqkARAR%2BBc0Jbghega3ozbaKdihLrLeAYn%2B3LC7dIGzYmRnXY5C%2BhjfuMCbg%2F%2Fvozc%2FtCd%2FEUl9uhgSEBShDrwPvGVmrck3e%2F9W%2FE3G9kfon27JWuE0%2Ba5tb1%2B%2BF2ZJgVY%2FuL0ROoQiEpeEUg7CU1UGrA010YAC6p4w75Vs0CfpgkqpwH7Thdsry46VJy6QvG%2BM52PMYe5YgmyGbILx2cUVb2P%2FM6Sj&X-Amz-Signature=2b17b1385e42114eb423a9cbb64078d5d1df25e444a242dccbb693109d13628f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F76O467%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqmsbsdYhTdEw13ZbfyFW5wtE17wpmrjKMe08Cg%2FqFvAiEAkwHg%2Fz%2FaCVKQeesgecZ8KWfBkwYWB0dgT%2BBIvSySRb8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBN1tjO6vu7f3CPeyrcAzlhMKPvbT1mcAWAVFKH0vuyTJachUdCyiof3J%2BY%2BfI2Nm5oAFWH7f74QcQKuZLQbrKuTwCXbY0f8ELYJOwqvcRTz%2BsQsMxL53cbxocqCDqxtbFl55WZ4CzW%2BN7eXUZI%2Bx9h2FmOGaGP4bGFPBVYj8vykUEQRNWKyOcFi0owpDfgowkHkorAPrOOtujLPHwKtCzk1Q6Ho%2B0ST9yQvpNr1aKihBl729y9Agi8ZU%2BWg10RGmplVKY7kh7ZDwdKAlg148aqjbsOrdoANEfVjV6eFmlKDoA2pbl98AhkWGt6B0jP0gwVvwExedu88IplIT1cSVT%2F6yALYXZhx9vruVWml9LtckerKFNmSqSivcWk5jIBW8z64Cta79OUkV2kjXRttUo%2BOt2fpff0i60tHeKLTtTXG%2Br9G%2FsrAxXCsmsAlBYUzc%2BrUgcDfX2DmwjEGgJv3ab6%2BCv1ZrnSQNFtFGZd6Bx9lDq2Ivi8KplnTcecmnrPChLaiHrDyz3d6IJdf9WQTLZQr3NU6zlLV2PZrTY8C%2FuZBXEPuDMl2xcsGx6mdfFH0qGUm%2BfhIT%2BIIc7cLY5CaIMIKN4XxbJSxKgIGQmOAr15EgZl3pKbrg2%2BbFFKYS9hqdArdXHkDbmLiQuAMODLs8EGOqUBHsMlOTI%2BHKDPxmMoRBf4k0p5voa2tC1jqK1azj0RCUzvepAFPsoohxkiumuFINOuhTVVufJKapm2AKseZkBCw4RjWxwqRg5PYdzJ6wlumToRLEBq0%2F9Q8jtK7MSjoV%2BB4T1UPDROr5H62LLG2luEydQ5gqO7zKMM6O5klaqzlruv83r09C2E3bxXrPey%2FwO24GV7U1a8YnoLlo%2FrswJxCU2Ymcuh&X-Amz-Signature=e316bc9f7227fa2a177b2b94ff9642b0582f523af4d4479a814c75133b793e80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3BZGUN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKgq%2BmbhXCyWWMZSWE%2FjPlrpYqCNFWZ5BVJjcbDIqIwIhAOScbjAv6327hG%2BN%2BEhmmKUaTTfO4nZNGrIEIKK5YvJ1KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFgtHnOCvHGLm%2BJVsq3AOcb5BMIPlDiqcL27gxdpDj0NEcgz9xe8l9MrLu3HxV%2BbGL3eod%2FdiS9Y2FNnQKAMUe5hXkHuCtZPXUDEGAcQJVDUpx6OWkHOwEvGs8caM6I8CrB1qVnKrrr%2FAMOBxjsrJmgTvWKKoxv3DP%2FsAGgwkdnCDhc9%2BGLEO2HsQ6WuyTPh8WGq%2FpvMkkkA0MMtyfxUPhXYC19imrEv4ZKjCxf%2ByalkjWmg414mQqnvrLzdARKkyV9XvYOpXxS6BfSgA6yt%2BYFmF1uaaQJRhjOPZBh1PqjTbGHW%2FOFH8GEQacAB%2Bv2dcjDlEAk%2F3xSDyt1QAYwSzg%2FWWAyx31f4AclMIQMmVgJ%2B3Dy90c33AfEr%2B4DMcI1Hx7345S4vuF1fxM17XX1dLAdCD81BO5So2B8mFzAw%2BXrtK4xJnCHPp9gWouYZ2COIV2buS%2F9geQRsQVooxpcKaTUFfYyd6otlpJfzFKPBe4%2FjmQM6%2Bcbahqe6ji%2BQipftFeDa8B%2B6%2BuMgNamVUFPSi7Mdn2Rlr0XsBwPs8Ah1gH8oj9oxKaMOz2BcqZOqboEACeMCA2C5LmTgT19nXmv1LRhopXbhWc9a2dLP45iCndqrs6UVlXlK6JaQs5LlYZx6FNRz3sAMvYDqz7GTDPy7PBBjqkAahdAeYR1rbpqoqQaodz5yGaWEofw1vAIyUss3FJhaHKpW1bkOP%2BHR85%2BV7y2CaGrDuCzrFIU1lekOHFpBiUw9%2BXU4nLKBeE8OVySoxrxlpNhD7bjo6Ez2HYZNKRdkbeq12FK74p%2BB5vSqJqlcpZ%2Bb36RnZqx8cmacIFtCK8Ms5sqIBqZUJnF5wI4q4xrD8necFg1zduT0vaFXzogS5NEkDdxQ5e&X-Amz-Signature=d5aaf8c686d89d8a40ba8daf4021b9e9d95d5d807a6120a59afbb6cc30a8f4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNE6ITS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57XsLnnoJvfQolM8YS0I76MnRRixLM9g0KHjBpXJ%2BggIhALLl34fKuYqNQvfIYxuECXfkKAOqxnweKDL8qu8Mc4XcKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEcVeDEML6s8eozhwq3APYkBrofB4LAN1jpQoEJJkx0LnG5Eo37hcvS%2BjfqmYbNVEOGktEIq3luVBjt%2B5hr5mVmiRh8mdNaRi2wYQw3MCUKVvGt5jsZuRIscw6hyvAOGHMFXwjCFbpHgeQs8XIzd1qqXWBjpfxfmi9fzXhujyCRO3KHVyf%2FHzHVXE8YXqldfWDpRB1uDtdWj8S%2FTkiGDdCeufb03aB0ZwiNIT5G5QVOu8pdDeIMJUo5vRcui8sW%2FDI%2FaY%2BV7KYRyqxXJwhMVC%2FDKuISfOKc5x4yjGXtCkEVptYKE2n7Upd982lTxQTearnlaNg6%2FgPK%2FoAyb4q13QUOYVCCZYkg4rkc0yhy%2BKZRuSTYMzAY69OUwJ%2BQZ7vmRy2wFyy6RbXXlhOu9boeChSb%2F7nVS4B2S5LiRFv1ngPopdAxJlC7Wm6i7DclSUPzc4nf2uapzCd204zEgOza8Hus1nU2fkKsFJMxoRWxWxPHmXMLYELfPVD%2Bpmu86rnlSeQTm9Bmf1LjWwuplk21rFgRGselvh5HPt4C9HvUA3NIV%2BSdDG31lIUciAL2TYMDe5HN44%2FhzOSa2XxTECJnIcBxAsmG9Xvsn1mdWMHmpE0rH3UT5g0AZcsBVrVMtGxI3rA1A0BFbeAMAO2NTCxy7PBBjqkARAR%2BBc0Jbghega3ozbaKdihLrLeAYn%2B3LC7dIGzYmRnXY5C%2BhjfuMCbg%2F%2Fvozc%2FtCd%2FEUl9uhgSEBShDrwPvGVmrck3e%2F9W%2FE3G9kfon27JWuE0%2Ba5tb1%2B%2BF2ZJgVY%2FuL0ROoQiEpeEUg7CU1UGrA010YAC6p4w75Vs0CfpgkqpwH7Thdsry46VJy6QvG%2BM52PMYe5YgmyGbILx2cUVb2P%2FM6Sj&X-Amz-Signature=dcec0aa1a462d328e43f4edb7b35677617f6da7e2f794dea5553a200679f8896&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
