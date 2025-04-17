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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHVDH3E%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FUf%2BH1O52J9Bb2aUtvOmjU7lCy%2BamsyiRITCJ2FkzUQIhAPSizmNy4xa%2BmSiTtLVEehZsU09Uhacg%2F73hneBGtyx5Kv8DCFoQABoMNjM3NDIzMTgzODA1Igyu%2B%2FOFQw%2FPvob3S3cq3AOJhSQqdz%2BLeTCpu5FfZCqjHqbagnYvAXV4vq7ZQUaH8BCTkQ7y0cpEv5GXNouXySWJCcg0UqITYGDZSt7fRzUMui2Z8%2FNl9JNfvmCCTRsEcjZ%2FJZNNRQ3PIQ5aAbAZv%2F0oBeQzcAuQaKvngVucJRAlcDymS8J918k%2FPWSwJPsoaQrtdmk4RgfIrxwV3n3E%2Fa4QmWx4Fmtrre1XYKP9gnfX%2FKENRGBktoqX7vmA%2BEpfOkpzHhsZU%2Fh10gYlj%2FcPOrHLYYHGV%2BzsYX2Q%2BSwVTIhbMGvH1LnojsTVxbpaFyLTSS8%2BliMZrC5Yi8kin2PZUxc1oS6MQp%2BGvcIMlNee90ktf3mayBd6yaBpLgnBr1JohFehyOkMVJi3piwr6b5uby1URqWuRlb2zONCC0MU%2FQotnsuRixuDXe3c1kdJ0V%2FKUoSDujSvckSyGpTlKYf0Sv4K3i4rlT8pTehtKDfpS07x0BDYvuOfF25vE8VDQRVRh7etvdB%2Ba1i08AdguE%2Fk9RC%2FmsrEeoIYHj%2F4XPzLoOzOIbA40nk%2BzO%2BtWDpyDKpFpOWe6s2dj9GZ%2FDaR2AvUuUsPEMFQTK3Udt81xQGoZFQKfuhNijpMkAqW5KNg5MFaAFAkqsyIcIN9VHm4zTC8%2B4LABjqkAaPh3UlYcu07aP%2FZbSNM9XRjTMVRu1tEMBz63QvTvekI5hpNr8hz%2Bwz85voOC3liwtTPa3q5LDQJgnLcxihstN5VOrYd50O7ddiOxX51QdGFgeRhWyieH%2FEO9E91kCaAor5IiE5Kusec7Vc2ECv3lARwohHOyPwwfm1Ouvq6VP6%2BBFFwm3gG6DhmBsEqadhIvfUbq5VD%2F03ULgFDwJv4qNrrA5e9&X-Amz-Signature=bc6bb75ab43db2ba30680c8aa4cc22568fd1c7adcdc7479ed03f732a80981017&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHVDH3E%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FUf%2BH1O52J9Bb2aUtvOmjU7lCy%2BamsyiRITCJ2FkzUQIhAPSizmNy4xa%2BmSiTtLVEehZsU09Uhacg%2F73hneBGtyx5Kv8DCFoQABoMNjM3NDIzMTgzODA1Igyu%2B%2FOFQw%2FPvob3S3cq3AOJhSQqdz%2BLeTCpu5FfZCqjHqbagnYvAXV4vq7ZQUaH8BCTkQ7y0cpEv5GXNouXySWJCcg0UqITYGDZSt7fRzUMui2Z8%2FNl9JNfvmCCTRsEcjZ%2FJZNNRQ3PIQ5aAbAZv%2F0oBeQzcAuQaKvngVucJRAlcDymS8J918k%2FPWSwJPsoaQrtdmk4RgfIrxwV3n3E%2Fa4QmWx4Fmtrre1XYKP9gnfX%2FKENRGBktoqX7vmA%2BEpfOkpzHhsZU%2Fh10gYlj%2FcPOrHLYYHGV%2BzsYX2Q%2BSwVTIhbMGvH1LnojsTVxbpaFyLTSS8%2BliMZrC5Yi8kin2PZUxc1oS6MQp%2BGvcIMlNee90ktf3mayBd6yaBpLgnBr1JohFehyOkMVJi3piwr6b5uby1URqWuRlb2zONCC0MU%2FQotnsuRixuDXe3c1kdJ0V%2FKUoSDujSvckSyGpTlKYf0Sv4K3i4rlT8pTehtKDfpS07x0BDYvuOfF25vE8VDQRVRh7etvdB%2Ba1i08AdguE%2Fk9RC%2FmsrEeoIYHj%2F4XPzLoOzOIbA40nk%2BzO%2BtWDpyDKpFpOWe6s2dj9GZ%2FDaR2AvUuUsPEMFQTK3Udt81xQGoZFQKfuhNijpMkAqW5KNg5MFaAFAkqsyIcIN9VHm4zTC8%2B4LABjqkAaPh3UlYcu07aP%2FZbSNM9XRjTMVRu1tEMBz63QvTvekI5hpNr8hz%2Bwz85voOC3liwtTPa3q5LDQJgnLcxihstN5VOrYd50O7ddiOxX51QdGFgeRhWyieH%2FEO9E91kCaAor5IiE5Kusec7Vc2ECv3lARwohHOyPwwfm1Ouvq6VP6%2BBFFwm3gG6DhmBsEqadhIvfUbq5VD%2F03ULgFDwJv4qNrrA5e9&X-Amz-Signature=81bdc530182c1798cd4240ae9a6da9fd6f1338a80dc279563054a1ab050d038a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OXCGBVJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSLU0Ryvy8No1vMk2EX1aZmy62M7Dlz3n6I9d6TqzhOwIgEN9X%2FZQr055RGgtgYcT%2F9m3gmWovo%2FkYjCjcDUJdSacq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAb6aKQJ6QixWV6txyrcAyQ8RoPD1aY8haOvYOAvgKdelw47Oi5qZAVD%2FGoom8d0fB6zjrOimHriQRhwVepGjUtKDhKDgo%2FGVLO84Qa%2FVlF0h3nDecxiEhnzoKs90L7D%2Ba6%2FWVigdgX8gsIXAEtk%2FtaT6JVLQ6YCJ6v3hqH8liq0u2HsCASaIXMV9z79at%2BHQZWJQip5dZDHjO2i5CfGkXu0DwnMgqaARHaHF9cIH1vyykI7Lx0JYuhmP5gYA0iETvhh%2BILP8KT4QU3FHDWxPg%2BpWWoJzlrzUDbM3qTVCpRrZl1tdP4MlxGzeWLesJLwZ3ANn6f%2FCKfOPxZNzSif%2BHiDoeNRjO3yshepdfF6hYBcnKqOf8gW3d4WvWVrKNnqaihG3UwoVodnKcnABf2yT8griubrhdMrnzWPC%2BgLq6H%2FZ3ngGj9OSn68%2F0zd25z7GRGJPwdUoibTpvvT2Qn5rJQdoyQ5PpKOkf%2FATpwg62NJaDZXG6Xn4S98GpNAPf1VOkwkKKzpVNE9tPyPFMNOkBXgcYjzfd33RMGQNSX1O2Nhl35t7w%2FKrLHHJlEhvzWChHy67%2BqAAeUe%2FVXml0%2F9D7vUFOx9l1jpmiYFSJ9d2HHMHrAMRp0YoHH3i%2Fhk0DWuLPhtGuPkShfQDIFBMNr6gsAGOqUB51nWQ%2FIaZnpY620VLoz5DmacdGOXpur4GVnFzeS512ss%2Fmx148070UyZxwy5J%2BQTqkW5dsk32oLhMKWLedAr1GpiG6TLjOuWj%2Baf4%2BSmgLekM%2FEQvsV3TjFmO%2Fcc55z03vA%2FEyynDtdne5NZVoWoKWYZy8fnyrrJOmRW2ffi74fVCUnAIBAeRZvym%2BzVoO3sI%2Fis%2Flrjp7fN687GfXD8Gah2%2B97v&X-Amz-Signature=00dc96f1a78b98e207212f77519510adce91b15010dafe4ba25fef33d93e1a81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYR6SCG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVtAg80vVvumDJZv7evK0ERqX1nM6NFUf9u%2F87eXRz3wIgEuvtTWnBcykci9zm%2BG2DvdY68bJPMbuUmHqQiwcq2AYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFZY7V9RZj1QF3CCrSrcA1UyQU7pv5TWuNuXKu8JnQq4H169LtzVDAjSbL6BffN1JW0eafkOjCHCTJKTl9DLPNNJtUo%2FvsLkmBl3HJjL3jpf5WO9enKYmA4DYxrPgjsIy2L9wpcijm6FakPO11MLNFYpDX1dpxwb2uEnFR55U0NPm6RCgjGk7HryoPPPzwcO93Qfcq6iVAUHSgyQeOXcYUiVMedsnlW0CgDQ%2BWUY8GSOIDRar8QEOF1vIkInnKvbn40phDUd27mdoockdCQyaawS3o95EHKbvC3L6NvpONsA1OjXamVz%2BY6lc56rSibNrHFe5%2B5CXfw7eizSfRYP42phb6GvPffhIWymbDEmQ6q9A0%2FyG71Po3Rpt8%2FB%2FfSQ%2FBuQ7kjvr%2B1plPpqzRxMaFmiO7mi5FN9JYjaWEU5uwDlao98aCa%2B0DsMc%2BnwUgB8HZ74BdG4jx1OrnnR5Xzg6jOQjxNHkbQ0VsCSkHfUws%2FQmPKG8qTTsgSbm6z17DePAopgut3KGzxcvoLIBTWpf9wJv%2Ftl2qTcuywSufMzTtbSJyhW1QgnQl6QrEWkwcfn16ZUWBMFWBNdu35oS1K23OFmBNdblI1jfSzvDC7QD8PjL6h76HhDZb2DyQZATnU0yaycNYFFNURii0n%2BMJv6gsAGOqUBLftaC9wEdXWMNM1lELgo9BZmpsQFMKhE6SRSwwJet1UpIYE5ioUao6IQGPK8KB56FeFwYNqDQFsVi8dnmyhHT%2BZ6PgnQbS%2B3SJghItkmq%2FRJZi42ot6SBNHsYQ1LKb7E3SBMQSwL6GdXYBhqvrp%2FUUfd8p2U%2FApeaFbDCp%2Br%2FzFPnCLgoK3p6%2BYYZldr2SxLPBTvUme3bP%2F3quNWSn2O4DhlOQEC&X-Amz-Signature=b34f6899b31ab2813c3edec074cd4be1438e1d71aa1e7a3e0334e9a91c00af9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHVDH3E%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FUf%2BH1O52J9Bb2aUtvOmjU7lCy%2BamsyiRITCJ2FkzUQIhAPSizmNy4xa%2BmSiTtLVEehZsU09Uhacg%2F73hneBGtyx5Kv8DCFoQABoMNjM3NDIzMTgzODA1Igyu%2B%2FOFQw%2FPvob3S3cq3AOJhSQqdz%2BLeTCpu5FfZCqjHqbagnYvAXV4vq7ZQUaH8BCTkQ7y0cpEv5GXNouXySWJCcg0UqITYGDZSt7fRzUMui2Z8%2FNl9JNfvmCCTRsEcjZ%2FJZNNRQ3PIQ5aAbAZv%2F0oBeQzcAuQaKvngVucJRAlcDymS8J918k%2FPWSwJPsoaQrtdmk4RgfIrxwV3n3E%2Fa4QmWx4Fmtrre1XYKP9gnfX%2FKENRGBktoqX7vmA%2BEpfOkpzHhsZU%2Fh10gYlj%2FcPOrHLYYHGV%2BzsYX2Q%2BSwVTIhbMGvH1LnojsTVxbpaFyLTSS8%2BliMZrC5Yi8kin2PZUxc1oS6MQp%2BGvcIMlNee90ktf3mayBd6yaBpLgnBr1JohFehyOkMVJi3piwr6b5uby1URqWuRlb2zONCC0MU%2FQotnsuRixuDXe3c1kdJ0V%2FKUoSDujSvckSyGpTlKYf0Sv4K3i4rlT8pTehtKDfpS07x0BDYvuOfF25vE8VDQRVRh7etvdB%2Ba1i08AdguE%2Fk9RC%2FmsrEeoIYHj%2F4XPzLoOzOIbA40nk%2BzO%2BtWDpyDKpFpOWe6s2dj9GZ%2FDaR2AvUuUsPEMFQTK3Udt81xQGoZFQKfuhNijpMkAqW5KNg5MFaAFAkqsyIcIN9VHm4zTC8%2B4LABjqkAaPh3UlYcu07aP%2FZbSNM9XRjTMVRu1tEMBz63QvTvekI5hpNr8hz%2Bwz85voOC3liwtTPa3q5LDQJgnLcxihstN5VOrYd50O7ddiOxX51QdGFgeRhWyieH%2FEO9E91kCaAor5IiE5Kusec7Vc2ECv3lARwohHOyPwwfm1Ouvq6VP6%2BBFFwm3gG6DhmBsEqadhIvfUbq5VD%2F03ULgFDwJv4qNrrA5e9&X-Amz-Signature=15401776a67fd261493cff51061dcd0bf3fdff47e586b1c3d376363669f9349e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
