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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWP75PBS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsgnnsoCwfpmyCTBaiLbA9PYwDh1cGkywsHqVAXggClQIgb83Te6dhFrSX7g8Xlpb1KGB%2BbbbAzdNbYL6eIeaZJ2wqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMg%2FKruA3kBNQszR5CrcA5G6%2BCk69X27eL%2F4TxZO2kfBdK9QBDwuYDJ4j9LGTrwDYEVMLCG%2FnBI%2F%2BxIfzkWo3IB9w%2FdE1B64EJss6c5KLqUc3HjXDhBei0ZU2eCtaYhvNtux8m8I3yF1%2BYKbQdOtknQHhMCzl%2Bk43ArPPorRhAtNwtWXfHzeqmW%2BK%2B0E17DsKAxh38qpq4a0zFEWCs2mwnC4ufDtJKrul8qwAghh3QrOa1RS4gC2DfTjFJu%2FERD57ZOQI89Hc5It0Hk6kCupSs8GPJDVHtGjEsupbvzHYSWJcVmPnhDngP9q1Q2uONeAVCP0W3OFhBF3mhjEY4rgDlnJt26t85SxJ7eEm8WENN%2F%2BgsJYGvOcZEGYHtDwyDb3e0OHamDvnj4eEOoGFEZJc5nAocYhyC6bETvqgo9axPdLMbRVhtsVGb5XZ99%2B%2BoHxNU89utzLCWQtSou9uD02h2Pr2Bn4NKxRq7sfWnl4e7QoOxgz5WZtAKlpwQrLt8NEw%2F%2Fe7uQwGZfqIBM2iPk%2FY23EsewHGHQxigmjvUlbddSQ64p3Padsc3Dy%2BJoyBq5Aps09Rv54yhyGvihv4v2eP%2FUE4nx6bG5cc2Od0TVhjQ1VokcVExHOLBycTlBRkIZXAacFBd5PI%2BC3n4AmMOax5L0GOqUBIt83t3uty4UU58w7yWSSrdXld9%2BBIC0Nrbi27W%2F%2FAq%2F58SsBDb0aVEsd0Kzw3MmxqVMG%2FUVKUFjW%2BOO%2BHs8CaVuKfkx8zsy0qAMPM%2BSQggcsV0eR7XTZ3u7Gw2RSokS368lyEqKWWKFdCcR3u48V1MBBunEDTlSsDRru0E1Usf85UX6CGlhXEXTtz1fATzYULr4H4YEYq2fouBDEDRn4CJNaN%2F5g&X-Amz-Signature=e8ceb5c9488324f93e3956e1a780d567fe2d5dff7a2907b26e87c00487ca72bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWP75PBS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsgnnsoCwfpmyCTBaiLbA9PYwDh1cGkywsHqVAXggClQIgb83Te6dhFrSX7g8Xlpb1KGB%2BbbbAzdNbYL6eIeaZJ2wqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMg%2FKruA3kBNQszR5CrcA5G6%2BCk69X27eL%2F4TxZO2kfBdK9QBDwuYDJ4j9LGTrwDYEVMLCG%2FnBI%2F%2BxIfzkWo3IB9w%2FdE1B64EJss6c5KLqUc3HjXDhBei0ZU2eCtaYhvNtux8m8I3yF1%2BYKbQdOtknQHhMCzl%2Bk43ArPPorRhAtNwtWXfHzeqmW%2BK%2B0E17DsKAxh38qpq4a0zFEWCs2mwnC4ufDtJKrul8qwAghh3QrOa1RS4gC2DfTjFJu%2FERD57ZOQI89Hc5It0Hk6kCupSs8GPJDVHtGjEsupbvzHYSWJcVmPnhDngP9q1Q2uONeAVCP0W3OFhBF3mhjEY4rgDlnJt26t85SxJ7eEm8WENN%2F%2BgsJYGvOcZEGYHtDwyDb3e0OHamDvnj4eEOoGFEZJc5nAocYhyC6bETvqgo9axPdLMbRVhtsVGb5XZ99%2B%2BoHxNU89utzLCWQtSou9uD02h2Pr2Bn4NKxRq7sfWnl4e7QoOxgz5WZtAKlpwQrLt8NEw%2F%2Fe7uQwGZfqIBM2iPk%2FY23EsewHGHQxigmjvUlbddSQ64p3Padsc3Dy%2BJoyBq5Aps09Rv54yhyGvihv4v2eP%2FUE4nx6bG5cc2Od0TVhjQ1VokcVExHOLBycTlBRkIZXAacFBd5PI%2BC3n4AmMOax5L0GOqUBIt83t3uty4UU58w7yWSSrdXld9%2BBIC0Nrbi27W%2F%2FAq%2F58SsBDb0aVEsd0Kzw3MmxqVMG%2FUVKUFjW%2BOO%2BHs8CaVuKfkx8zsy0qAMPM%2BSQggcsV0eR7XTZ3u7Gw2RSokS368lyEqKWWKFdCcR3u48V1MBBunEDTlSsDRru0E1Usf85UX6CGlhXEXTtz1fATzYULr4H4YEYq2fouBDEDRn4CJNaN%2F5g&X-Amz-Signature=9ffbaaf9b57aa70208c3319f758c884749abcd14f5cf9f69d322fd8cd80c7c94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HD7KOHV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgS8vn7GfhrPV1GFOA9IWUJecl%2BMzDMJPA1O3itVu7SAiEAlgm0cozsb%2BFfm4%2FoJxmQJtbq35GJFNxNMaB6LUWnFnIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1yXRhJxxnwC67hvCrcA1jR3ABRtTyhE0pLEF2%2BCRn%2BO3e4NZnBJrk9Ff9gg3EnWESvoHKiaawPfxWMWg4pmuh2D1vH%2FPqtscepWsu7FYqLwvVFhqyd%2FaVsgezmyQZgAK8sV1QASZfiM9Yt%2BzsdXazuV7uVrN%2Bm1CHX2h5%2F0XadptFFQezhTSS6awPKT4hLDzDU4DiC5RamzoYvdnjGTO%2FHZ77q0d0AZuKoCUPzQVSDUUvZdDhTTCAUjR22bFUIBPkcGLLr2oAL6MqcToTJ8DJmmTkfEOMk4TcV2OKm4HZ28JE8MMOgfg6bnylkEUgd5oIbaJ9zDHAFxyTWHivlTkmty7Hy0N%2FGBA0DvbIwwKIepjj7wzaT34EhYfbVZqbA5%2B8TGNpXLesqFdTQO2W6MRJqft2Th%2BeAQHiNRE3KLmdiqThB9kN1n2ThZllzRTUzCc8WfJnQxBRBlILLMT32cvhUdDKmEPl08kBBOJuThNAvRxtPYJ4ZgnYv1HB9GF8qkd1mh8hnNmSxZUlbLuQa%2BY8v6is%2BDidRxAqvK6zZhhqC6Ptn99esKSkueqGK4qukzVfRxgUkhk4UQhpWl7haeKCsGA3Esd7E%2FWDO40S6DtVwqwxhzjaDzqsDA8oT2k2ZDWGEbwX37uK2M3nmMJax5L0GOqUBv9C4qa%2BLc50ocAn3MzJpAvmRgliue4eHrZ91PeyLHqlTeDqlkDF3vnu7hyv3v6D5tVKIeQUZ3edUkuai5F0OeA%2By597STBSJ0iKwO2RXTPBfq8M0DJ%2BUY96RECd42Snp1aqinL9nK0OpxYj1oP%2F9ItqDsj3ZPVWOg90Toq1RT3IvkOt%2FCJtFajDqkoHEuUsxstuLEfj91G8khceo1VZK%2F2QjX%2BEF&X-Amz-Signature=30af15bc31e7d6b0493e3cab9f0fdf3cb7948e3a036dc1e8c695784b670cdccd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664546UEC7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHogpZm6mqJ8D7ic5Y20b98Bi%2BundWiI%2FxPWeiZlx45VAiEA2H7InBzR9WcVF3XWbpQ7WHW0Tnci%2FZBSXr4pObX8ec4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrFrpJcRKjUlsznGSrcA26u%2FxrqCm40HUUHBhKRgO7GpcsnUmNsiD4jY9QXja5J5P4Op1i37NeegmG4gwoEzwR41JBFd9OsTQ9WgPm9acnCfE6FbWtHyJv%2BP7wjJQabMIN%2B3BhY9tw5g1FeCSGBvoXcNo0YNMPvSHIU3GJ0F6AwDd%2F76%2FFWBQTcsGZBL4nfgZxAWZlu4i5PFhtSayebz8SyzqGzWMJY24zllC%2Bh1SXgDQOx4gfhOPeg8f1o3TpfpGRTYAsBAJPWbe%2F0xo8DhPCq5%2BYQ67eBV6%2F6ZnsosMmFuj3dFX9jbv2CxSJ%2FCVBgN%2FnWHWynjj36gBikwEgaquSgwaUW8aKXcMPnXJ8Rtxal6IEwa5DSQ4z%2BiSZ8VsaWt0xxWctApVIOVh2X%2BWJ1pMp4J%2FlheaGXgKaw4VTiRxoUqDBU%2BYpoB367gGcrhA1DlAa6Zpza0s%2F9p0g3QB06y%2F221KsjZ1E0xCJInuKHFotSirx1V9Q3nPh1rcycWNH%2FkrYxAeBljTr9ohjXE3YismRpuJH%2Bg%2BGtFq%2BfxEdyPdvjAJFfQJuMrDKxc%2F1nhxgi4JMVayObRo9SphdD%2Fdf4tbHDz4eiH%2FoZxkv4dLLUhxLSKSO2s1RCiQ86brM7bivrtljaDlI9yWg0i5dLMIyx5L0GOqUBR4CD3bVkSuiCVFfoBnth8ynFXc7I387XxAkTjiRY6ROfSx4u0Mr4XtbPs962JW%2FVIJ54kJO%2F81ksRUQJgxyMk57qGEDF67yDAwv8l%2F%2BXDjBjuC%2BOWLz5jgCbSrFr0OhG9F1ubox%2FLbPyBtGcKO8lpij28piXRGWK3cX%2B4ZHAD0UWoIcNOAafdlwfuWrVpN7v5BIXaqV7gt6iiw%2FdbaXpEbcKG%2Fcw&X-Amz-Signature=f8160f2af4d4b3923fab6f76fb9d75805fae358394f723691f662d6765b286a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWP75PBS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsgnnsoCwfpmyCTBaiLbA9PYwDh1cGkywsHqVAXggClQIgb83Te6dhFrSX7g8Xlpb1KGB%2BbbbAzdNbYL6eIeaZJ2wqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMg%2FKruA3kBNQszR5CrcA5G6%2BCk69X27eL%2F4TxZO2kfBdK9QBDwuYDJ4j9LGTrwDYEVMLCG%2FnBI%2F%2BxIfzkWo3IB9w%2FdE1B64EJss6c5KLqUc3HjXDhBei0ZU2eCtaYhvNtux8m8I3yF1%2BYKbQdOtknQHhMCzl%2Bk43ArPPorRhAtNwtWXfHzeqmW%2BK%2B0E17DsKAxh38qpq4a0zFEWCs2mwnC4ufDtJKrul8qwAghh3QrOa1RS4gC2DfTjFJu%2FERD57ZOQI89Hc5It0Hk6kCupSs8GPJDVHtGjEsupbvzHYSWJcVmPnhDngP9q1Q2uONeAVCP0W3OFhBF3mhjEY4rgDlnJt26t85SxJ7eEm8WENN%2F%2BgsJYGvOcZEGYHtDwyDb3e0OHamDvnj4eEOoGFEZJc5nAocYhyC6bETvqgo9axPdLMbRVhtsVGb5XZ99%2B%2BoHxNU89utzLCWQtSou9uD02h2Pr2Bn4NKxRq7sfWnl4e7QoOxgz5WZtAKlpwQrLt8NEw%2F%2Fe7uQwGZfqIBM2iPk%2FY23EsewHGHQxigmjvUlbddSQ64p3Padsc3Dy%2BJoyBq5Aps09Rv54yhyGvihv4v2eP%2FUE4nx6bG5cc2Od0TVhjQ1VokcVExHOLBycTlBRkIZXAacFBd5PI%2BC3n4AmMOax5L0GOqUBIt83t3uty4UU58w7yWSSrdXld9%2BBIC0Nrbi27W%2F%2FAq%2F58SsBDb0aVEsd0Kzw3MmxqVMG%2FUVKUFjW%2BOO%2BHs8CaVuKfkx8zsy0qAMPM%2BSQggcsV0eR7XTZ3u7Gw2RSokS368lyEqKWWKFdCcR3u48V1MBBunEDTlSsDRru0E1Usf85UX6CGlhXEXTtz1fATzYULr4H4YEYq2fouBDEDRn4CJNaN%2F5g&X-Amz-Signature=da3528e24e357944b720cc21aec0e23d9b64e75c0d99796864d7354acb7d974d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
