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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QS5RSLR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfo%2FL7K8rnz%2BZLIMP7O1Q4Ih08NKYK9K0cNvcM1DSYQAIhAKfZeWrihaUmRhUS6jyRB5e5f%2Blh02TlIY0PP4o2fD4nKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw5Hp%2BqHi6Lk2gDSQq3ANSpOuUZk7xGiJGo4DkRvSwRoqq9rknT%2BRkue3pG1504NSCuX9iK11Le7uSuLEwk2wx%2BPYOWHwhg%2B0tlz4jyAiwJ7QHanyRQhvVnxaeDP02UK3hVLOxC76%2FPKJC4XI%2FsOt8bGhXXnB6oggGCRwpvKYxq%2FENYn%2FrDCpWLl7zR7Gb5yhcv2bImkpzy2uewpkBtdTjRQsPmHLDKS0lQR5VTwv3Y7cETfkWft3S%2FLuNSZ%2FH8wt%2BjpzAOA4OSduZsnxpN5W3xNoKd2fzSKRQcpP23JBzwMGDdVqbgBKQCjzHHm1c17uPdPitNdMhkHVAe4EXSJK3bh%2F7JdxBo4LnvSP%2FKdDKmrsxMCVnCuJt36OSniAjDRNKteZVCQCmtoCk5AsPSkr4jNOWrNix4MV3mpHeeDknk1XgBBAWzOzyNJhhSf%2BQz%2FFM%2BMCilOWjh8RMi1Uq%2Ba4U24P%2BTAeL%2B6DxfLFXRW0QxwHpCom4r2MxOImSrLFW2phlMxZW8atS%2F%2BkPs3%2Bmo5oM54gMtRG5kHgzoIht9QJuB8Nofu70StivgCDn%2FvB9YPOW3JsvuPUhrSHADqbuQMS6bx3l4eKwB1S41mzEGZWhTmSBiCu4CDHBnlNvy5EltpX74jw1xCUOH6y4KzCG2YjBBjqkATeOXKXenk6ypqJ4wUhWMMMx24BdI4y2j4fEH4jXswY%2F4pSLvRqLAL%2FQK0t%2BT4BAl1%2FwFX6tW%2B8KqJXBlkj%2FFqIyViLiR%2FQPPQ7swkAEO2PEiAk9zKjslKkOk4HSOSCf6XWfwIVgXkYlnOKT4eLe7Z%2FO20icf7JnMbx8lPe8ZF3n%2Fz85oAwaqmV6sQcLW%2FuZ1D%2BmlO4Hv5rn%2FOjLEu0uwCvMToYL&X-Amz-Signature=7d16556d002506f69b388e61c82696e0522b8ad938c571261c84f13637a894cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QS5RSLR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfo%2FL7K8rnz%2BZLIMP7O1Q4Ih08NKYK9K0cNvcM1DSYQAIhAKfZeWrihaUmRhUS6jyRB5e5f%2Blh02TlIY0PP4o2fD4nKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw5Hp%2BqHi6Lk2gDSQq3ANSpOuUZk7xGiJGo4DkRvSwRoqq9rknT%2BRkue3pG1504NSCuX9iK11Le7uSuLEwk2wx%2BPYOWHwhg%2B0tlz4jyAiwJ7QHanyRQhvVnxaeDP02UK3hVLOxC76%2FPKJC4XI%2FsOt8bGhXXnB6oggGCRwpvKYxq%2FENYn%2FrDCpWLl7zR7Gb5yhcv2bImkpzy2uewpkBtdTjRQsPmHLDKS0lQR5VTwv3Y7cETfkWft3S%2FLuNSZ%2FH8wt%2BjpzAOA4OSduZsnxpN5W3xNoKd2fzSKRQcpP23JBzwMGDdVqbgBKQCjzHHm1c17uPdPitNdMhkHVAe4EXSJK3bh%2F7JdxBo4LnvSP%2FKdDKmrsxMCVnCuJt36OSniAjDRNKteZVCQCmtoCk5AsPSkr4jNOWrNix4MV3mpHeeDknk1XgBBAWzOzyNJhhSf%2BQz%2FFM%2BMCilOWjh8RMi1Uq%2Ba4U24P%2BTAeL%2B6DxfLFXRW0QxwHpCom4r2MxOImSrLFW2phlMxZW8atS%2F%2BkPs3%2Bmo5oM54gMtRG5kHgzoIht9QJuB8Nofu70StivgCDn%2FvB9YPOW3JsvuPUhrSHADqbuQMS6bx3l4eKwB1S41mzEGZWhTmSBiCu4CDHBnlNvy5EltpX74jw1xCUOH6y4KzCG2YjBBjqkATeOXKXenk6ypqJ4wUhWMMMx24BdI4y2j4fEH4jXswY%2F4pSLvRqLAL%2FQK0t%2BT4BAl1%2FwFX6tW%2B8KqJXBlkj%2FFqIyViLiR%2FQPPQ7swkAEO2PEiAk9zKjslKkOk4HSOSCf6XWfwIVgXkYlnOKT4eLe7Z%2FO20icf7JnMbx8lPe8ZF3n%2Fz85oAwaqmV6sQcLW%2FuZ1D%2BmlO4Hv5rn%2FOjLEu0uwCvMToYL&X-Amz-Signature=66da21667be2487edaf8f60b80d4c90b495dae9654db1b76507822639cd03911&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QS5RSLR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfo%2FL7K8rnz%2BZLIMP7O1Q4Ih08NKYK9K0cNvcM1DSYQAIhAKfZeWrihaUmRhUS6jyRB5e5f%2Blh02TlIY0PP4o2fD4nKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw5Hp%2BqHi6Lk2gDSQq3ANSpOuUZk7xGiJGo4DkRvSwRoqq9rknT%2BRkue3pG1504NSCuX9iK11Le7uSuLEwk2wx%2BPYOWHwhg%2B0tlz4jyAiwJ7QHanyRQhvVnxaeDP02UK3hVLOxC76%2FPKJC4XI%2FsOt8bGhXXnB6oggGCRwpvKYxq%2FENYn%2FrDCpWLl7zR7Gb5yhcv2bImkpzy2uewpkBtdTjRQsPmHLDKS0lQR5VTwv3Y7cETfkWft3S%2FLuNSZ%2FH8wt%2BjpzAOA4OSduZsnxpN5W3xNoKd2fzSKRQcpP23JBzwMGDdVqbgBKQCjzHHm1c17uPdPitNdMhkHVAe4EXSJK3bh%2F7JdxBo4LnvSP%2FKdDKmrsxMCVnCuJt36OSniAjDRNKteZVCQCmtoCk5AsPSkr4jNOWrNix4MV3mpHeeDknk1XgBBAWzOzyNJhhSf%2BQz%2FFM%2BMCilOWjh8RMi1Uq%2Ba4U24P%2BTAeL%2B6DxfLFXRW0QxwHpCom4r2MxOImSrLFW2phlMxZW8atS%2F%2BkPs3%2Bmo5oM54gMtRG5kHgzoIht9QJuB8Nofu70StivgCDn%2FvB9YPOW3JsvuPUhrSHADqbuQMS6bx3l4eKwB1S41mzEGZWhTmSBiCu4CDHBnlNvy5EltpX74jw1xCUOH6y4KzCG2YjBBjqkATeOXKXenk6ypqJ4wUhWMMMx24BdI4y2j4fEH4jXswY%2F4pSLvRqLAL%2FQK0t%2BT4BAl1%2FwFX6tW%2B8KqJXBlkj%2FFqIyViLiR%2FQPPQ7swkAEO2PEiAk9zKjslKkOk4HSOSCf6XWfwIVgXkYlnOKT4eLe7Z%2FO20icf7JnMbx8lPe8ZF3n%2Fz85oAwaqmV6sQcLW%2FuZ1D%2BmlO4Hv5rn%2FOjLEu0uwCvMToYL&X-Amz-Signature=8fd09220ead8da23d635894949701771ddbe2fa7c8e80479cb3dac1ed8e5b120&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LOZYRVX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeOHgstKXxGH%2FgQ%2FWHddF8ajrZicXpXSAggK%2FFg8NwOAIhAKemJ%2F2pGetTeJ%2FU70SqrQbdcMs%2FK90lllM8yvGPy%2FjtKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLsTbJfVTjzb4gHJ0q3AN1Z2PdjhKgLdV6FKJguZTAWKiB6weMtpSrzH7vCLyyZYJ8l%2BWwPQ69%2F9T7DQCIpc%2FCATkk0Vjy3HSAgYy5H%2BxWR3mznv1PcDtxRMxVFySsvaHnV45SqJF1XzA13e1ZgCXbp5rTBgOHWMWKwGdv%2BM1FhUMreEE8qPIBo0oEl1t9lhhJW53pFgLlq4SQlzy9qgPr8DEiRjGHFxxOcJwb4KscODMGFI7J94j5N9FqIkyA83J8muPNfE6MfmU30nTRIAVCgFhJwLNgIBLDX2tL3dd2a843xIDdXYtjZL02k%2BDkdsSBsKrNrT2l6a%2B1PqtP%2Fg0gqZPzucEdbN5wTMx8NqNGI9cjppVxLk0yU81hLQafiXGGjZxgU9WW%2BvslHifWTyA3sSh3jyIlruO3CvZ5fOAnadeU7r%2BS9Tocj0v8%2FjkLDIBaJRrGcCG3Iecb9LJebNKZ20cHIkC%2BIbJVsmXZfp21jmIHbOBHAxXPHhH%2FnNgok8iEPa7oeywm3EtS%2FOIiPUhkfjuZ%2FVECS3Drjera7gvtu7X5JPfpYQNNG04QAqGOyEUWnoICtsDML0j0WRW4K%2FjhtDKB40IsF%2BZ%2FkXZBlzJnClHGS5EGDEof03P%2B%2BzeXujWp2z8A4Ecr2NbkKDCP2YjBBjqkAfiugT%2BV9w7X%2FGRXgBs5GFkUmvxka2%2FRASSN8SM%2FwwBvenbu0nSUG%2F9rotLaVIo1EmPh%2FfwsHYyv4F1zCr9aKGHf%2BCOVflAYg3Hi74AXzf3rT%2FbXb2fM7pxJbSGNeOnoswpkr6iQYN7UVoJuoUo9j7HIZmZ%2FwgdWPsZeQtMj5KGko0NX21kXg03ELvkqSlIct8sfeTasHoNVLoHPu29qOqgQtn3g&X-Amz-Signature=604631b43fa8f4275c2acc876d25f4dfb35c730ec766957d51af5b482359a5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YVBIUR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFCaa3WClmqyKEqqX8pcAyirE%2BsSGQnqEfe%2BuPHa4TuPAiEAoWBaLECxsle%2BhaDln5kkypXrxseXrIMl9XOUMuv9pUsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRylDvhq7FEQKbCAircA5Wesgb4GYafetACzIP1tzn51VwkHPYb3VdIiel6qbkid39mrDIG7GHKvFUWcJk7YaZ7jy6qOxS3SBVFZxOthD0BzJ1WG9psnQ1A%2BGs3j%2FDW2A%2FqoWcnJrsULPUjDCD0lMGWLhK%2FpVId43E%2FxI9v%2FwZ%2FM4aVb5lDa5SQ4rmL02mG62ouIcxsdU6Bh4OBStgQnQVomocBaMXB7ynqkv5OiD%2Bbx5r0nbgC%2BOd4g4wkx7t%2FzeWbd8lj53Rz24rPwH6v%2FchMJhluR9jWC4wyOmwTnMiyzyutQK0boN3wYmS27Ydka67hCWE%2BuOzTR%2B%2FAzFHMX6wu95VTSZlq5qnQyrU5BCMb%2FTyBe3J1dezVz6UdJnQG96R%2BBBdf8psqMVRd8heW%2FmpevU7B4DTRiImMqNyKiCImexl9nhbEelXFZ9OM%2FmvWK7Omwvgt%2FyHh08%2BGmvxymjSB%2Fl8dZ5njTwUDNwy2hglhu0FdQ1Lzr%2BVv2%2BsViUl8kl6V6GHfKL95Nig0Ej5bVH9%2FlLcMnMRspM8OsjWPGNOgy7XI4Myd2NDuTKqmAqpRILG4cAtxmwNt4guTS%2BtGrkmMzd8hA8gENWJDJ1Hx5GPcNO23TDw4C8Wo64Ok7qJbLhuJZR2je2xxLxYzMOXZiMEGOqUBDwIBDaOWW0CpGkhXOxSBV7%2BYJJUZesUzibf0wVDpPCIxxpPSBYQ6rKq9SK1SL1WjQM8sgKU046AW5Z8OEDRFym0x5HBPgzwDjIIXkra%2BWp8I86rKTp3ZuyBLFk84Koly4StTsCC97JZsKI4Wv3TXPgQ3MRBvvFzXXV77Xg82pQ8NodtyxFQKNoGWzPj5kKuo6YnpHtIdhL7T%2BtlQfWRRKw5x8Lp4&X-Amz-Signature=e27918d79a85c453538f979d4a449da6d64573d2b4aad1d2824142331600224b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QS5RSLR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfo%2FL7K8rnz%2BZLIMP7O1Q4Ih08NKYK9K0cNvcM1DSYQAIhAKfZeWrihaUmRhUS6jyRB5e5f%2Blh02TlIY0PP4o2fD4nKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw5Hp%2BqHi6Lk2gDSQq3ANSpOuUZk7xGiJGo4DkRvSwRoqq9rknT%2BRkue3pG1504NSCuX9iK11Le7uSuLEwk2wx%2BPYOWHwhg%2B0tlz4jyAiwJ7QHanyRQhvVnxaeDP02UK3hVLOxC76%2FPKJC4XI%2FsOt8bGhXXnB6oggGCRwpvKYxq%2FENYn%2FrDCpWLl7zR7Gb5yhcv2bImkpzy2uewpkBtdTjRQsPmHLDKS0lQR5VTwv3Y7cETfkWft3S%2FLuNSZ%2FH8wt%2BjpzAOA4OSduZsnxpN5W3xNoKd2fzSKRQcpP23JBzwMGDdVqbgBKQCjzHHm1c17uPdPitNdMhkHVAe4EXSJK3bh%2F7JdxBo4LnvSP%2FKdDKmrsxMCVnCuJt36OSniAjDRNKteZVCQCmtoCk5AsPSkr4jNOWrNix4MV3mpHeeDknk1XgBBAWzOzyNJhhSf%2BQz%2FFM%2BMCilOWjh8RMi1Uq%2Ba4U24P%2BTAeL%2B6DxfLFXRW0QxwHpCom4r2MxOImSrLFW2phlMxZW8atS%2F%2BkPs3%2Bmo5oM54gMtRG5kHgzoIht9QJuB8Nofu70StivgCDn%2FvB9YPOW3JsvuPUhrSHADqbuQMS6bx3l4eKwB1S41mzEGZWhTmSBiCu4CDHBnlNvy5EltpX74jw1xCUOH6y4KzCG2YjBBjqkATeOXKXenk6ypqJ4wUhWMMMx24BdI4y2j4fEH4jXswY%2F4pSLvRqLAL%2FQK0t%2BT4BAl1%2FwFX6tW%2B8KqJXBlkj%2FFqIyViLiR%2FQPPQ7swkAEO2PEiAk9zKjslKkOk4HSOSCf6XWfwIVgXkYlnOKT4eLe7Z%2FO20icf7JnMbx8lPe8ZF3n%2Fz85oAwaqmV6sQcLW%2FuZ1D%2BmlO4Hv5rn%2FOjLEu0uwCvMToYL&X-Amz-Signature=47fcd089366a83678b4f5d238e49c529e1a08f511e8ad6328d24d92646c250ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
