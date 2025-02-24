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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUM3KS6P%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMhtV9KNnBeK7JwjZtLaO%2F3jIZdC%2Fw2bCdmmZ9yThpigIhAL%2Fv6T5iaFBWGG5xUyDFttfuDTse3Tmn3F016XWww%2FBDKv8DCCEQABoMNjM3NDIzMTgzODA1IgxIKfVZlDTQDPSDLYkq3AM3XJ1POVr5ZB4ivqnJQMUXR9M2uT4Ar7pP30zqyng8KiST7oJmG1%2FM5DpLVUjwiS20YgiWl2pxfyDsiXUDMMy2%2F716HeRq3GiNF%2BiKSx01N4Skli0Fid9%2FcYMeZ5b8yo8TGcgV2Hb36KfKBZpG1M7dxjzudtC6qrmNRUyPlLaTfSDrv%2BNHsYFQ5npTUlgBZXsWjUTHg%2FvRpr5ukfD31%2BlPOviPn8mkoSqV8MciNygLyyqTIzRXYYHqPc3FkM%2BECJWvjs%2F%2B5YLTY1vxdnkRlUHqzcDdIRiiCwkWL0h0Ecz6UcBVxk4X0GmB6B291%2FQ77yU4GXo2cg8Vw5FLOu08PiHermeK2rGtzFZHUiNpUQJR1AQU38k2xfbOOMeZ1pX8jHqkO5KpH0sTJiN1BcgVtQB36dfaw9xxilHTfnE8vay4BEF%2B8%2BOhAOcEjrL6ZRysNsnI%2FSWWhCfR7StrURNCgCPQRyTBZam7MCqzT8gtvBD9r8eIFE5nradI3jb6nfxjiJIptNGGCtkztMnlddSs2rH9xrogL6iBn4T4xOvm0ZQUMsugsYbzSQ6Zpx7xzdHvrIiJ%2Bl7qmkPApnjgM8OytLgY9opliethUgwJYy31Htg80NTo0cvFlWVu%2FnmtlDDh8e69BjqkAaKZ83uxti8btHljDz%2Fe0%2B3Nlp4JzRYf58NfkOAwwC%2BstZ37xIf7iOidPJteUSVt2Ni0fRN5kREXw04VJPMlwVWvdVCufsEddK9BQ%2FNaKLrzFrMBz2WiMiI8dC9c5Ol9xcKFgFCnv6tgtpkfU4gCUgXGFNSfKEEsC%2BOKyXtrtSd4QFtbjs1Aj4CmdkAu3rSdl5ubF4mlc48U%2BWKh3%2BbwMzPBHylo&X-Amz-Signature=3fd7ced04a77696a2df0a86c19b65460c8371c3b0e6e8087ccbe6d256fd6f96c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUM3KS6P%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMhtV9KNnBeK7JwjZtLaO%2F3jIZdC%2Fw2bCdmmZ9yThpigIhAL%2Fv6T5iaFBWGG5xUyDFttfuDTse3Tmn3F016XWww%2FBDKv8DCCEQABoMNjM3NDIzMTgzODA1IgxIKfVZlDTQDPSDLYkq3AM3XJ1POVr5ZB4ivqnJQMUXR9M2uT4Ar7pP30zqyng8KiST7oJmG1%2FM5DpLVUjwiS20YgiWl2pxfyDsiXUDMMy2%2F716HeRq3GiNF%2BiKSx01N4Skli0Fid9%2FcYMeZ5b8yo8TGcgV2Hb36KfKBZpG1M7dxjzudtC6qrmNRUyPlLaTfSDrv%2BNHsYFQ5npTUlgBZXsWjUTHg%2FvRpr5ukfD31%2BlPOviPn8mkoSqV8MciNygLyyqTIzRXYYHqPc3FkM%2BECJWvjs%2F%2B5YLTY1vxdnkRlUHqzcDdIRiiCwkWL0h0Ecz6UcBVxk4X0GmB6B291%2FQ77yU4GXo2cg8Vw5FLOu08PiHermeK2rGtzFZHUiNpUQJR1AQU38k2xfbOOMeZ1pX8jHqkO5KpH0sTJiN1BcgVtQB36dfaw9xxilHTfnE8vay4BEF%2B8%2BOhAOcEjrL6ZRysNsnI%2FSWWhCfR7StrURNCgCPQRyTBZam7MCqzT8gtvBD9r8eIFE5nradI3jb6nfxjiJIptNGGCtkztMnlddSs2rH9xrogL6iBn4T4xOvm0ZQUMsugsYbzSQ6Zpx7xzdHvrIiJ%2Bl7qmkPApnjgM8OytLgY9opliethUgwJYy31Htg80NTo0cvFlWVu%2FnmtlDDh8e69BjqkAaKZ83uxti8btHljDz%2Fe0%2B3Nlp4JzRYf58NfkOAwwC%2BstZ37xIf7iOidPJteUSVt2Ni0fRN5kREXw04VJPMlwVWvdVCufsEddK9BQ%2FNaKLrzFrMBz2WiMiI8dC9c5Ol9xcKFgFCnv6tgtpkfU4gCUgXGFNSfKEEsC%2BOKyXtrtSd4QFtbjs1Aj4CmdkAu3rSdl5ubF4mlc48U%2BWKh3%2BbwMzPBHylo&X-Amz-Signature=881a815fb9717ec083693cb9bfa206efcbfb8b984b0469b21eceee4f30f0ca86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCTSVCL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpn%2FVtRh%2BoKo01qx%2FoV4mTF3dA6Cw91ulvD3qkoquk9AiBer%2B%2BL0YgXBkA6Zg5BOWK3UbmoeeQKIaEq%2FOeYswF8YSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM4j6k%2FZCmU1bAtxbRKtwDqg%2Fr746tvhsoLTW9LC7M6Wa79ZQE7EMC4QxKSC6bm2v19zSuCp%2FAjYdfYmHUIl9Gr5bQxuNG4eAMYffpS1JGo%2F0wvhM8SdaJF%2Fgk4Tw8hdKyssSMuX2Evsd3Hw%2FCqsOjGp7mnUrc3FI%2FAvVre5IQEqZlPD2CtxyiQnVkhKjc%2FYidmEPKryEMqSv8VAgt%2ByWNzVM%2FSWOFvZW6RRZP0Ny%2B3CSnvQJBO8JfpHlhBEYHf30cMa%2Bm%2BqB9iC0bnkljZ8afa0KI87UPaW4EFHpICD8XT%2BPaxOittCOm14K1CV%2BKYyhpGCCs%2FJu7qZJUBjQN90HGdnQF3NT1Krt1cRxFkBO8ZnnpSPqMNhszjXvXeWT902j09QmB69ZNLyHeRpXsZfVRVmiqoOFVKysU%2BtUzjNoV5vmUyMeCjumOpQgzk9d4mNcOhkJ5SxLtzm9QF14mDh855If%2FmfjKxD%2B0anTVaRYmQTJ10O%2B77aVjFi2syffORgEC9hL%2BbWMq4iyC3OzFYVrJWKoQdmWD38AWCWzhMTgQfkxEDmei3qfsu3sOKaSQkCQuiUo8XOG%2BfVgMliJMeQ2YKW6WoNZttCZq%2FyNbjs%2ByJBIHCMB%2Fa9uaR%2Brmg00%2FESt6qgZpuNC02gm1%2FoUw5vDuvQY6pgEgmY6thVVGZpd61VO2fRA%2FHG7XMlesaQW9rbavcHETeLY5ecZzKgujxZZA4TrGhqufSIeRrFDOFCzsMewC%2F6U7RaRMvP1esfp3vrsUevle4yvpxm8IuVnzeO8Q39xgIZfbVCO3Q6j%2F7%2FYUc3MK%2B6%2BOhTDZWskoOMgKCePwAl0%2FnMxvoHCBllZ1ZyPqobU03af2PlKdJdXdenrWzyV95%2F4PoDSX2s2D&X-Amz-Signature=1e118c46990bce847c8811fa98bac20a2a4094911ab9389ba4ebd311927065dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFPQWVZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmrKJdfmn3pO0d8nZnhmLOz95XTC8j4jet54DaT47%2BZgIhANWBa%2Fv86DZj5hlnsR9EkdqYsmH6TT9e5Ossi1%2BkdUfYKv8DCCEQABoMNjM3NDIzMTgzODA1Igw3lP6FGF5XnvpoWUEq3AOJvcZQCltxVZLrqez7Suf1VawBIt5Etmviu5oFa2V3gGNPdgEjPyVxmBdtFKSI%2F1lCwD7FiuUpemec1n1uGUzzDAV1Ha1GZ58PpI0mNCoZUjy5JgdC9W27FWUdOflYyCVPKtTkXekgG550acXq1hmTmmxAklhib4EsOjIpQn3JfcJTWSp5XKA8xeE2t%2BJ2TzG3PPWzQUVtszQSWV6dHNyITdgeB7YaIlazhpRt8dDUEkIsDqrCW47pJv2ZIr1%2BGklK0krRnmHQu8ZhBh840Yx8rYvtlNHJ8CG6lK9VKa4BrktD1%2F9IvmBTESfAMLUzLsNTFUIWHZfHyj8XrNXlWtrY5j3n3dTpAonB2mSOSrI7NMyoQvX4RpAlTS6l0Hv2nAfH%2FyBhMLDwbY%2B1o6jcnvCAyWa05Vms2g96rNdP7Dv2UT1XlxYTVKB6pb%2B69v6OxJs4QsYPx8nPXZdbJn89SJI%2Bp4Elzt%2FuVhNWt0wsZ2bsWLLsUJ4vADiFrXpnCL57g2hUmgJYysaBv2pex5%2F3q2yjzxxnu00c%2Fd65kffm1bPh7qiR0YFzY0eZ%2BZohrBBdJbCMa146Z8lja9tQ0FNh%2FyMuxujtKrJhG6Yk2C9jL7EHnFLxDZMLP68yabGJXzD38e69BjqkAWe%2F26iGPqgIkPYeh1uj6rWKfTTAsF1CLiyOJ4mLP84kJzCtRwp9NNumi7rQtlzYPUw1G3MG%2BDobQeq1qZhfszVxQ46WHebSMLdRRAUzHBeOVvuI5d0vRtodI17CZXguglxKuNoS%2FIGdWy8GMkJ0fQmp86O4CYnXm7YZPO0QpR%2FV1jnR5JIMEywLNnCULOD7VkJT7LCz26jPPgODHl9JgZhFIp33&X-Amz-Signature=35dbb2bca1a7ad1e049f223304888e120962743db8e8fd0e458af3c261480eef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUM3KS6P%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMhtV9KNnBeK7JwjZtLaO%2F3jIZdC%2Fw2bCdmmZ9yThpigIhAL%2Fv6T5iaFBWGG5xUyDFttfuDTse3Tmn3F016XWww%2FBDKv8DCCEQABoMNjM3NDIzMTgzODA1IgxIKfVZlDTQDPSDLYkq3AM3XJ1POVr5ZB4ivqnJQMUXR9M2uT4Ar7pP30zqyng8KiST7oJmG1%2FM5DpLVUjwiS20YgiWl2pxfyDsiXUDMMy2%2F716HeRq3GiNF%2BiKSx01N4Skli0Fid9%2FcYMeZ5b8yo8TGcgV2Hb36KfKBZpG1M7dxjzudtC6qrmNRUyPlLaTfSDrv%2BNHsYFQ5npTUlgBZXsWjUTHg%2FvRpr5ukfD31%2BlPOviPn8mkoSqV8MciNygLyyqTIzRXYYHqPc3FkM%2BECJWvjs%2F%2B5YLTY1vxdnkRlUHqzcDdIRiiCwkWL0h0Ecz6UcBVxk4X0GmB6B291%2FQ77yU4GXo2cg8Vw5FLOu08PiHermeK2rGtzFZHUiNpUQJR1AQU38k2xfbOOMeZ1pX8jHqkO5KpH0sTJiN1BcgVtQB36dfaw9xxilHTfnE8vay4BEF%2B8%2BOhAOcEjrL6ZRysNsnI%2FSWWhCfR7StrURNCgCPQRyTBZam7MCqzT8gtvBD9r8eIFE5nradI3jb6nfxjiJIptNGGCtkztMnlddSs2rH9xrogL6iBn4T4xOvm0ZQUMsugsYbzSQ6Zpx7xzdHvrIiJ%2Bl7qmkPApnjgM8OytLgY9opliethUgwJYy31Htg80NTo0cvFlWVu%2FnmtlDDh8e69BjqkAaKZ83uxti8btHljDz%2Fe0%2B3Nlp4JzRYf58NfkOAwwC%2BstZ37xIf7iOidPJteUSVt2Ni0fRN5kREXw04VJPMlwVWvdVCufsEddK9BQ%2FNaKLrzFrMBz2WiMiI8dC9c5Ol9xcKFgFCnv6tgtpkfU4gCUgXGFNSfKEEsC%2BOKyXtrtSd4QFtbjs1Aj4CmdkAu3rSdl5ubF4mlc48U%2BWKh3%2BbwMzPBHylo&X-Amz-Signature=62fbd745ba646832180f7822e1bb689602d7e9d0f3fe7c85f7fcef2544552c75&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
