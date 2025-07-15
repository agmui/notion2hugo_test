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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3KFANA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICgJEV%2Bp2yIo4EyPM10rjgEtUxQavoyLGaW95CkHJST7AiEA2uGPviBNGRVMr47JrMEzL%2FuO6GOhDDue%2FpNdGvdgtu4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKYseegv9xLsxSQC4yrcA%2BTHZNltK%2FcdNjYPDrcAR3Q8vMoq5c6QWfxg3UmbTsKHoNKSJt4fAbHtjITdrFe2JMO8a%2B57eEsMG2hU%2BxuTst0%2BIyRD98aMVlbva%2FDTL%2FzRpnNPeln6JgzCC97PcQwWjrD4RQuFQdZTYXmGjzggzjRurruxqnXhvuW%2F3YqioK2efpA2tMhHl71ZZPHsYDo26NNhc0IqruFushanKvUTs3gAywZI83K3qnU5V53rzRTubKZSBG3GX2q9RT22AfKk6eNUhjH23m4KI1gzYt%2F2iNLEf4GJN7eCEqeobHs%2BCd0uaiv20Zgr0USGj1EL39j1I57eHs%2BaGkxAEzGLdPX8XHESi0i1St31NeRIpt2qE%2BxSMpeEUscaMX%2BuomJAUxi1hf38TZwPaSB7qhTm29BMe6HQ55faFwecEXj%2BEci2wbJNsCM6TUq9U412%2FwLJ1viQmgb3QUIU3vSRX%2F7GgEK7WgRd24RxhsSIHh7eDaB7DNF9QByHDSfbcnBUG59c6BVMByzOSIO3%2By7fIgOm71RRhTfW1ZqxFfuZC125dI7iXyX6B2Y0QzxQARRwTHqF3aNSpukLXqeW6ads132XPQyWqGqDCQ%2FympGClIvUDIWFugDEj80taSso9JcMthnHMMSx2MMGOqUB%2B6igoJsFrWo67YVtP0vE2CqLeQj7CX%2BBjeVZDr4NwywbU4X7fxJYNQ7V8lUElnZLwAJMgqAXINBfMAHqdo3uI0NaJXh6fFucyycKn0i7r4dg6CYbK38P7VtFkMhVUX3wqQEdH%2F17gb6vJG8XEUXqjx0GEud%2FL13RW8WWHsW%2BmPrI9d4774oyGuAiSQ%2F0wz0tzgrct9PJfNMBetSmnl6v6jRq9lIf&X-Amz-Signature=0dec78a41501719c41b4023d732f9fd8a6c668e15b4e0a18e495a3071ce4912e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3KFANA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICgJEV%2Bp2yIo4EyPM10rjgEtUxQavoyLGaW95CkHJST7AiEA2uGPviBNGRVMr47JrMEzL%2FuO6GOhDDue%2FpNdGvdgtu4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKYseegv9xLsxSQC4yrcA%2BTHZNltK%2FcdNjYPDrcAR3Q8vMoq5c6QWfxg3UmbTsKHoNKSJt4fAbHtjITdrFe2JMO8a%2B57eEsMG2hU%2BxuTst0%2BIyRD98aMVlbva%2FDTL%2FzRpnNPeln6JgzCC97PcQwWjrD4RQuFQdZTYXmGjzggzjRurruxqnXhvuW%2F3YqioK2efpA2tMhHl71ZZPHsYDo26NNhc0IqruFushanKvUTs3gAywZI83K3qnU5V53rzRTubKZSBG3GX2q9RT22AfKk6eNUhjH23m4KI1gzYt%2F2iNLEf4GJN7eCEqeobHs%2BCd0uaiv20Zgr0USGj1EL39j1I57eHs%2BaGkxAEzGLdPX8XHESi0i1St31NeRIpt2qE%2BxSMpeEUscaMX%2BuomJAUxi1hf38TZwPaSB7qhTm29BMe6HQ55faFwecEXj%2BEci2wbJNsCM6TUq9U412%2FwLJ1viQmgb3QUIU3vSRX%2F7GgEK7WgRd24RxhsSIHh7eDaB7DNF9QByHDSfbcnBUG59c6BVMByzOSIO3%2By7fIgOm71RRhTfW1ZqxFfuZC125dI7iXyX6B2Y0QzxQARRwTHqF3aNSpukLXqeW6ads132XPQyWqGqDCQ%2FympGClIvUDIWFugDEj80taSso9JcMthnHMMSx2MMGOqUB%2B6igoJsFrWo67YVtP0vE2CqLeQj7CX%2BBjeVZDr4NwywbU4X7fxJYNQ7V8lUElnZLwAJMgqAXINBfMAHqdo3uI0NaJXh6fFucyycKn0i7r4dg6CYbK38P7VtFkMhVUX3wqQEdH%2F17gb6vJG8XEUXqjx0GEud%2FL13RW8WWHsW%2BmPrI9d4774oyGuAiSQ%2F0wz0tzgrct9PJfNMBetSmnl6v6jRq9lIf&X-Amz-Signature=c6c9c7a277c5397b9cb56583d97e7deb0fc30925ab9e61925ae8b2af30e39477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3KFANA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICgJEV%2Bp2yIo4EyPM10rjgEtUxQavoyLGaW95CkHJST7AiEA2uGPviBNGRVMr47JrMEzL%2FuO6GOhDDue%2FpNdGvdgtu4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKYseegv9xLsxSQC4yrcA%2BTHZNltK%2FcdNjYPDrcAR3Q8vMoq5c6QWfxg3UmbTsKHoNKSJt4fAbHtjITdrFe2JMO8a%2B57eEsMG2hU%2BxuTst0%2BIyRD98aMVlbva%2FDTL%2FzRpnNPeln6JgzCC97PcQwWjrD4RQuFQdZTYXmGjzggzjRurruxqnXhvuW%2F3YqioK2efpA2tMhHl71ZZPHsYDo26NNhc0IqruFushanKvUTs3gAywZI83K3qnU5V53rzRTubKZSBG3GX2q9RT22AfKk6eNUhjH23m4KI1gzYt%2F2iNLEf4GJN7eCEqeobHs%2BCd0uaiv20Zgr0USGj1EL39j1I57eHs%2BaGkxAEzGLdPX8XHESi0i1St31NeRIpt2qE%2BxSMpeEUscaMX%2BuomJAUxi1hf38TZwPaSB7qhTm29BMe6HQ55faFwecEXj%2BEci2wbJNsCM6TUq9U412%2FwLJ1viQmgb3QUIU3vSRX%2F7GgEK7WgRd24RxhsSIHh7eDaB7DNF9QByHDSfbcnBUG59c6BVMByzOSIO3%2By7fIgOm71RRhTfW1ZqxFfuZC125dI7iXyX6B2Y0QzxQARRwTHqF3aNSpukLXqeW6ads132XPQyWqGqDCQ%2FympGClIvUDIWFugDEj80taSso9JcMthnHMMSx2MMGOqUB%2B6igoJsFrWo67YVtP0vE2CqLeQj7CX%2BBjeVZDr4NwywbU4X7fxJYNQ7V8lUElnZLwAJMgqAXINBfMAHqdo3uI0NaJXh6fFucyycKn0i7r4dg6CYbK38P7VtFkMhVUX3wqQEdH%2F17gb6vJG8XEUXqjx0GEud%2FL13RW8WWHsW%2BmPrI9d4774oyGuAiSQ%2F0wz0tzgrct9PJfNMBetSmnl6v6jRq9lIf&X-Amz-Signature=949231b844dc6a9e25c8844c084a97b7b90158d38cefe133f11bba60a7d7ad1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOVJD2VB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD8mlu7GF34FlawWTJ2mzm6bPK%2Bva1%2BGUInk%2FrfAXkYHgIgGmp4jUErnVUCoNoM0uzGcUeCvMEUNEWDlrV7GflTiNQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPXvZmft2p8nW9%2BMYircAz680D5U6sLtU64DAr1XdfLJxK3Fuy2QctPH9rXw1XIn%2BPSu1InWXjfMHIPpjW2k99ck69Wd0%2BKq%2BhYKpPJ7ZohKGYAN7OKtdZFggfhX9g7XdNDH20C%2BeyerXeuXN%2BLWoW9SvqAl8FQ6CB1zgPSaYBCfluEjXKrE3Bsq8b02HoXub850M%2FwhqiEW2gIlnUPSwtC38un5xzXnzkWYzXrMg1eY7xOGz1du3%2BXXfQU0ZCYW0XpvOnhru7eFvyZMeoooWkCoaJc1z0h5fcArw0UPOaYE8vMETJCYccYuOofNSuUQMogQQiKflvF6Xcupo66WQLmdthqPEJNVFFjBmUJJbXCg22sRgd3FiEGDeqznbXApmJHpe2kRxjAChB0GcROpdE3Sr7hU6x%2BSqkDvLhg%2FrlboxbdeFSrii9PuK%2BHQNKKkdmUxm5wFYGNOQBiKvZhC6WKSXvqokbjU2v8zpZwZsJJLxZOUkAdGh7%2B5Dfb72Ws0NT8SwPJFv%2BQ%2FCfL8p7wxVnaccvzPT8LjjzSTKXL9lSigTpag%2BGa86sgiCmyCNPwTfBNlkxm0Ri5jcfVlHYQBecBl7aVdD6u94J2O4vmYc%2FjQMQm%2FpRf%2FUUIDV4WOhIjubG3bf4a29xI4zNKUMOmw2MMGOqUBFtO%2BmKtEPsPN9inN7tx1RqQdCnTqlEAkg%2FksR96%2BYKXSdq48IrHKxndwUNHxIE%2BA2LsXayNOYKBC5sJeB4ASROfA95nmgy5q4WS10obac9qtODslaVkgvOfLk4y3hqmPx25etqTvE2CJWKXUCWt52gg0XD0oEGeq94YH1U0dXJ%2B9Ws3FIL958jUUfL8N%2BR0v9T2n5qCRC3qq3ffFP8xrJs2N6oBY&X-Amz-Signature=de87d52ce16134995616705385216f3469be2794821838aa48bca6a01e61ab34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WNO7OD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDcSOG8UBbRYNXZrPaaJBxQH5wJL3NoFNudhg40F6LOnAiEAwBRuxjxaV2r5K5afnfmsUTsITHhrUkBm%2FydLnpbpa%2Fkq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFzksTovzGUsTuxnLCrcAzU1OqSIlWefNulcu%2FXP59GTkDUX0GOCYi%2FVWtYpr5Ibdv%2F6uUOUaS9JWY8GvZE0Ia7f%2FbuJpWozRufY8lDg8xCqMFO5pY3klGHa3diIXl%2BkXrgccXg1ip2Ah9VA4JVMxP9JjKZdnAMmyHPTjCDgenmCL2mef2g16gTHhsS2jtVjZA%2FAmhwLIpo8EI42QFxsBnZfy7Ivrbk%2BiGRaPSR0Y%2FM4joggnzlxYStNNw1XcLbfezzVuPnBOvwdISyHEo41o0XABPlPbI2HJFwV2le%2B9Nmv7iwICAAHhWAamIyS%2BBX1jVbGNa3MspKJfc1NgH4B4E9DTtR9qIPmBnt6oYZi1z8G9USrgFjqvT6tzVMRfNyaTEY1oCWkP6HFO3ovBPpd1wePIxc4Ya7%2FDrV4P0HH2wBAWaW9ZY%2F64JLja3YaLalqs7oETSxpWSYjbRCqW4QXG99lGbkftIRfZZDsc2YOna2G5UMWGbKpaqE%2FbGBAtNBV9DAvQkkEjv3n%2B2QQklpcZ9io7fVgMo3QesSqfqZK7xsJfonPiwx5Vg43AU%2F6secGFrPvokvDWOeAfTrpK3uszC66D8%2FWFEU2dAB8da96fIO1%2BXt6j6zibmmEtU%2F5j4fRo%2FalmL9DrzdqioLNMOuw2MMGOqUBhuHyqy%2Ba0pM8XjyEU5%2Bi98E8%2F3JEgKNF%2BOhObYSU441x3xlWRuC6vKZAMAIcHPJwIzzLTmXouPzMk6uvtPdJhAJDP3O%2B44qWYzN38XGJ8BgLvQOdDoPJ7zRtDCxnXOkTqt0NM5ZnpuEVzpCrjbYpLS9bDEF%2B9D9DZazn7SfitrkKmJdQrc9RLkIJECNm1zOwgDYPXOA0W1cmSXeeildFDWxH94%2BS&X-Amz-Signature=4c9b1de76a0021ce08ce8d8b6c6be35aa4b2f8cb72f71a16c44c0aa44c54d119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3KFANA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICgJEV%2Bp2yIo4EyPM10rjgEtUxQavoyLGaW95CkHJST7AiEA2uGPviBNGRVMr47JrMEzL%2FuO6GOhDDue%2FpNdGvdgtu4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKYseegv9xLsxSQC4yrcA%2BTHZNltK%2FcdNjYPDrcAR3Q8vMoq5c6QWfxg3UmbTsKHoNKSJt4fAbHtjITdrFe2JMO8a%2B57eEsMG2hU%2BxuTst0%2BIyRD98aMVlbva%2FDTL%2FzRpnNPeln6JgzCC97PcQwWjrD4RQuFQdZTYXmGjzggzjRurruxqnXhvuW%2F3YqioK2efpA2tMhHl71ZZPHsYDo26NNhc0IqruFushanKvUTs3gAywZI83K3qnU5V53rzRTubKZSBG3GX2q9RT22AfKk6eNUhjH23m4KI1gzYt%2F2iNLEf4GJN7eCEqeobHs%2BCd0uaiv20Zgr0USGj1EL39j1I57eHs%2BaGkxAEzGLdPX8XHESi0i1St31NeRIpt2qE%2BxSMpeEUscaMX%2BuomJAUxi1hf38TZwPaSB7qhTm29BMe6HQ55faFwecEXj%2BEci2wbJNsCM6TUq9U412%2FwLJ1viQmgb3QUIU3vSRX%2F7GgEK7WgRd24RxhsSIHh7eDaB7DNF9QByHDSfbcnBUG59c6BVMByzOSIO3%2By7fIgOm71RRhTfW1ZqxFfuZC125dI7iXyX6B2Y0QzxQARRwTHqF3aNSpukLXqeW6ads132XPQyWqGqDCQ%2FympGClIvUDIWFugDEj80taSso9JcMthnHMMSx2MMGOqUB%2B6igoJsFrWo67YVtP0vE2CqLeQj7CX%2BBjeVZDr4NwywbU4X7fxJYNQ7V8lUElnZLwAJMgqAXINBfMAHqdo3uI0NaJXh6fFucyycKn0i7r4dg6CYbK38P7VtFkMhVUX3wqQEdH%2F17gb6vJG8XEUXqjx0GEud%2FL13RW8WWHsW%2BmPrI9d4774oyGuAiSQ%2F0wz0tzgrct9PJfNMBetSmnl6v6jRq9lIf&X-Amz-Signature=dc66a892718e2d9e772f40badab882f176478f0800c78aaf23f1959b5d28dcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
