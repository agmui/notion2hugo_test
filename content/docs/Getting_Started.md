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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B3GDJ6W%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD03OIFed6ufv1IdAEVE9z0DGqnu2j9f2kBcSz2%2BhqCBQIgEEx2iCtIWt5j73smYZfckvUCoc2Ah48ZuRrzE0L7280qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnW%2FM0FR%2FHXNUrDgyrcA0Q1DH%2B35ibvlj9xc5VMgTsHKoUT%2FITLTk9hV4SPYcJGjjHxQOa1%2BtffE%2B1S6lrCtI0MjIT%2F%2F4gxla9cND9IBGX1h2ZHBuRBd%2BFD65Y8uaFHs42vwORRdDeb3IwH8OWzy0fv0jFmqkd%2F71YGp2u86IOMQ0oncY%2F1F312eQ%2BnHcQxT8tRtJ16sBRW441F7NUzPYWvI5L9pDbr%2FFtB4E2AoI837vITj9QAOiiXJk1poXWkHWz7Rdm8%2BdJhNNVBD8MF0i41FisAsnE0m%2FLkcDCtjyPDyyI8mCIYYOTK4C1tpkVuq8qZrRNX9qoZAn%2BXt62zknvajkfXmOIlbidCCMg5ubSw2j3%2BdTnBkC3tzWDmDpTIpIO7Vj0Ea1wfNDPLoBIvqrTxF7g0K7fXB9f2%2FMkUN7vSwqrEb1kHJBbIoVuOD5hgVPiHRFxd0WjpsD7WUxN7PorHI4FtQNncQM9jTnzuf54dtpzGE5Bmc9fx7HzC3ZmIxHVfPwL%2B8BEcwLRsPQUTQ7Ie2pqLReKvH%2FEydT2hUk6rCogpdwvAFFNfg%2BEmedEThoGWDEhpoSC%2FSFAIUCTXSuxSKw51iRXreTSPq4i%2FATc8%2Fvi%2FBUgUQZhBt%2FCttojYGppGz22MWASKancnMIDfzsIGOqUBD8eyV2iKSn3MsckUeLyH6hpjjdgU52JkocLkfpKUad20CqhK7QIgjUwycxKLow36dWd3DMmtutY5j51Q1hDl6N7u6o6VDaezTdSElVxQaO8FO%2BRc4ZE1%2F78r9sjRHagnpSbMrEeuZ6t5%2BcOP2i32JKD%2FrSBVNafkVE6PvspUY5o7hAhd8ok3r3MtixmlWT18xz02tIZoSH7fFf22meFGPRoUhjtY&X-Amz-Signature=4bc7722603cca19572e648fe35d3227e85804b5e1ba77a18ef5c1a41c38dd155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B3GDJ6W%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD03OIFed6ufv1IdAEVE9z0DGqnu2j9f2kBcSz2%2BhqCBQIgEEx2iCtIWt5j73smYZfckvUCoc2Ah48ZuRrzE0L7280qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnW%2FM0FR%2FHXNUrDgyrcA0Q1DH%2B35ibvlj9xc5VMgTsHKoUT%2FITLTk9hV4SPYcJGjjHxQOa1%2BtffE%2B1S6lrCtI0MjIT%2F%2F4gxla9cND9IBGX1h2ZHBuRBd%2BFD65Y8uaFHs42vwORRdDeb3IwH8OWzy0fv0jFmqkd%2F71YGp2u86IOMQ0oncY%2F1F312eQ%2BnHcQxT8tRtJ16sBRW441F7NUzPYWvI5L9pDbr%2FFtB4E2AoI837vITj9QAOiiXJk1poXWkHWz7Rdm8%2BdJhNNVBD8MF0i41FisAsnE0m%2FLkcDCtjyPDyyI8mCIYYOTK4C1tpkVuq8qZrRNX9qoZAn%2BXt62zknvajkfXmOIlbidCCMg5ubSw2j3%2BdTnBkC3tzWDmDpTIpIO7Vj0Ea1wfNDPLoBIvqrTxF7g0K7fXB9f2%2FMkUN7vSwqrEb1kHJBbIoVuOD5hgVPiHRFxd0WjpsD7WUxN7PorHI4FtQNncQM9jTnzuf54dtpzGE5Bmc9fx7HzC3ZmIxHVfPwL%2B8BEcwLRsPQUTQ7Ie2pqLReKvH%2FEydT2hUk6rCogpdwvAFFNfg%2BEmedEThoGWDEhpoSC%2FSFAIUCTXSuxSKw51iRXreTSPq4i%2FATc8%2Fvi%2FBUgUQZhBt%2FCttojYGppGz22MWASKancnMIDfzsIGOqUBD8eyV2iKSn3MsckUeLyH6hpjjdgU52JkocLkfpKUad20CqhK7QIgjUwycxKLow36dWd3DMmtutY5j51Q1hDl6N7u6o6VDaezTdSElVxQaO8FO%2BRc4ZE1%2F78r9sjRHagnpSbMrEeuZ6t5%2BcOP2i32JKD%2FrSBVNafkVE6PvspUY5o7hAhd8ok3r3MtixmlWT18xz02tIZoSH7fFf22meFGPRoUhjtY&X-Amz-Signature=c30ed7679a11d37bf2a4fc89082ad4da123d5a6196cde482affa5e396132aef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B3GDJ6W%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD03OIFed6ufv1IdAEVE9z0DGqnu2j9f2kBcSz2%2BhqCBQIgEEx2iCtIWt5j73smYZfckvUCoc2Ah48ZuRrzE0L7280qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnW%2FM0FR%2FHXNUrDgyrcA0Q1DH%2B35ibvlj9xc5VMgTsHKoUT%2FITLTk9hV4SPYcJGjjHxQOa1%2BtffE%2B1S6lrCtI0MjIT%2F%2F4gxla9cND9IBGX1h2ZHBuRBd%2BFD65Y8uaFHs42vwORRdDeb3IwH8OWzy0fv0jFmqkd%2F71YGp2u86IOMQ0oncY%2F1F312eQ%2BnHcQxT8tRtJ16sBRW441F7NUzPYWvI5L9pDbr%2FFtB4E2AoI837vITj9QAOiiXJk1poXWkHWz7Rdm8%2BdJhNNVBD8MF0i41FisAsnE0m%2FLkcDCtjyPDyyI8mCIYYOTK4C1tpkVuq8qZrRNX9qoZAn%2BXt62zknvajkfXmOIlbidCCMg5ubSw2j3%2BdTnBkC3tzWDmDpTIpIO7Vj0Ea1wfNDPLoBIvqrTxF7g0K7fXB9f2%2FMkUN7vSwqrEb1kHJBbIoVuOD5hgVPiHRFxd0WjpsD7WUxN7PorHI4FtQNncQM9jTnzuf54dtpzGE5Bmc9fx7HzC3ZmIxHVfPwL%2B8BEcwLRsPQUTQ7Ie2pqLReKvH%2FEydT2hUk6rCogpdwvAFFNfg%2BEmedEThoGWDEhpoSC%2FSFAIUCTXSuxSKw51iRXreTSPq4i%2FATc8%2Fvi%2FBUgUQZhBt%2FCttojYGppGz22MWASKancnMIDfzsIGOqUBD8eyV2iKSn3MsckUeLyH6hpjjdgU52JkocLkfpKUad20CqhK7QIgjUwycxKLow36dWd3DMmtutY5j51Q1hDl6N7u6o6VDaezTdSElVxQaO8FO%2BRc4ZE1%2F78r9sjRHagnpSbMrEeuZ6t5%2BcOP2i32JKD%2FrSBVNafkVE6PvspUY5o7hAhd8ok3r3MtixmlWT18xz02tIZoSH7fFf22meFGPRoUhjtY&X-Amz-Signature=d22cdb22d49194be177da76c0388c379b1a324a9dee96bb3d449c9721847f90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PD4HQLS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbvZ1XeH8uIwDN%2B5HQAdOzkSMip%2FEJcw%2FqIVJt6qB1DAiBX4YSVuGOMwDrxuQqCpQCu7VyVebjnL7L4%2FiQMAKcyPyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfUkXX%2FpzEO9yMkwLKtwDaqJDOojvUAlo5bsCYZ0HneXLX6%2BZ7p%2FezwFm%2BjlwHZ6w1%2BOMOUdGJ%2Fjh5H5AmpMG%2BexqFY3uj85pCo15HR5SmnvVSrZ9OKIkskxeic%2B17lhJAOG6Ydy4tWG3RTb70qhJnUDSGR%2Bew%2B4WId9OrjHnIKIk2r%2BiXN3VDT%2B5tmXs%2BVWRUy6AHoK0AGlkTSQGfPWPe7me7T5eDNycFIm9TfGIf8KrRYjqic9%2FpMd5Yu38cZhxDtsoInisCa0NUEP4r9fmAP3FyS2SpqPJC6S5r99eB92S0oAiZBMm%2BI3MWp8t32GWVyt6XJ399xxwPudmraIREtKjLsFYknwWjP7TKnLav8y1YIQjQU%2B0%2FcrRYKkU%2BZWrbqzxBZzfZgk9IDiog9ytrSLpSrgCaKsnZaZExf2he46jfF%2B56piYqr9%2F8gTbGwo7uDmGt%2BlSgZWkYnF92%2B8gIw4e3Xswd5Cu178Um8dD6ap%2F7oVL1lvHJtq3CQWyh4CMeAgy4FM2b7YjMtzB5hiaq1SOOHqVe1xw8KOJtOnTMm6NLUCIuKK4EGgBwKpR9lAqPZdlZpiaXatFAZd3bc9oZdzN5xHf%2BRN%2FRFHlmFVpWvzYr%2B7VEb8DTWVVSNjpENO1Uz4w3QrqR52fIdQwi%2BDOwgY6pgHDDGFAZoJiMCD%2BgsoiXWK0IIYIdUku%2BxO4w0Ss505Zo8DUjxnR58DLPshJW4GW%2F7nCAj%2Bn0WA2V7dHBk8UarEnY8kXRPLa0X0eSDX6WBHPvS8yf687NCXi2yLQEt%2Ba86Ws%2Bhsd0iNj6QamHw%2BzljaZYOMmfIGmevvoIiqrSNE09pgcndU4ZtN80YETXCtF8hzT%2F9tXs1409Z9hATFmxD1ve3wkwX8%2B&X-Amz-Signature=48bf081772074b0ae03b8b237669e7748c5ac87874e7c5f80777f1630198e49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7MN5JCC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCd98tDeYWnXQDe9Vim8uZeobJXZYqzHU7DWY3VSXa5QIhAOkTkETjb8PpY4pdaS2u04kSHZBn6551c3UhmLtKLDiaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE1Lmkc4s3Gut%2B32Aq3AOlmVQenYNSewVktgVboNnVFrzONbOX9RYR%2BbvrgZEqAMxgD0fXJ23PY8%2FqmgMOfjehG20RjMXaw4%2FfKFn1gDBusBG9WD1MCualgE8dM2hV0lbb7Sno%2B3sRz2uZlDpVZvZES1SJu4Zs8ZCaNsb%2F196rCOCj9Zv9FsIGeHvnEL3oe1Jvyl2cM5cP4FKsR2jMNmU%2Fn4HT30poPmqVNVXT6wHREHmksxuOYHjUwNz6KDVfCfMNKYrB%2BUwDz3UzJQ9hfQNAr8gcEOjN6oSvtCgFpONwnZXSwv1%2BBCCtgBIa6u5%2Bp1Pz6XnfWwNrpivRIMMFYeOW0VYCnWwa4RtLkiSp%2Fo%2BdFOPG2yWWIe1bL8jrV4%2BN8EPsvy%2FkxZC4ZoaD%2BU7kIZzIbELxzrJaUUUXRKlm2Z3cQ3n66uL2HgyQCdySWnRCkjCtXjrrqHTNZRa6w0rFZcRUHbXi0%2BnoydGaqUI45kuC%2FNUN%2FCTQoU2eUbtB5TdC2luACj5Di7y%2BI4PtbujXihKw412%2FiMDwHoVfnsrSRXtHD28om7F%2BxJaTYAc2CqQmZ1f5ZuuuCNSWOdpR6vJQ3L5bHlqL43ss9En%2FB9M%2BmbT66EuA8aMW%2BJjpS7mZH%2F2wEymQFoqXTgVAidf0ETCr387CBjqkAQYJoyOrO2P8mmB1BU6kwGm%2BXpR4OVFrcwlj%2BsZIP4he%2BKa%2B3ap%2FqVYDynFDkKCvl4dtCN974xWtYGqCtzMoi9DIvTsZxbOswv2EibQ55M%2Bl%2BmHhouX8u%2BvQhuncu8jQYdYA%2FaoSEl7sM8KmI0sTXl%2B%2BHrylW8LDVdpa5hBiNucOQnWn1Srdyyfs4v2NhHik%2FgcGNnkjmHeSAvh1CqkOZ%2BFNUU%2Fv&X-Amz-Signature=5abe8b73642301dfea034903d6054b134948df939f1cf4b0f6f2e80a63b22039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B3GDJ6W%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD03OIFed6ufv1IdAEVE9z0DGqnu2j9f2kBcSz2%2BhqCBQIgEEx2iCtIWt5j73smYZfckvUCoc2Ah48ZuRrzE0L7280qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnW%2FM0FR%2FHXNUrDgyrcA0Q1DH%2B35ibvlj9xc5VMgTsHKoUT%2FITLTk9hV4SPYcJGjjHxQOa1%2BtffE%2B1S6lrCtI0MjIT%2F%2F4gxla9cND9IBGX1h2ZHBuRBd%2BFD65Y8uaFHs42vwORRdDeb3IwH8OWzy0fv0jFmqkd%2F71YGp2u86IOMQ0oncY%2F1F312eQ%2BnHcQxT8tRtJ16sBRW441F7NUzPYWvI5L9pDbr%2FFtB4E2AoI837vITj9QAOiiXJk1poXWkHWz7Rdm8%2BdJhNNVBD8MF0i41FisAsnE0m%2FLkcDCtjyPDyyI8mCIYYOTK4C1tpkVuq8qZrRNX9qoZAn%2BXt62zknvajkfXmOIlbidCCMg5ubSw2j3%2BdTnBkC3tzWDmDpTIpIO7Vj0Ea1wfNDPLoBIvqrTxF7g0K7fXB9f2%2FMkUN7vSwqrEb1kHJBbIoVuOD5hgVPiHRFxd0WjpsD7WUxN7PorHI4FtQNncQM9jTnzuf54dtpzGE5Bmc9fx7HzC3ZmIxHVfPwL%2B8BEcwLRsPQUTQ7Ie2pqLReKvH%2FEydT2hUk6rCogpdwvAFFNfg%2BEmedEThoGWDEhpoSC%2FSFAIUCTXSuxSKw51iRXreTSPq4i%2FATc8%2Fvi%2FBUgUQZhBt%2FCttojYGppGz22MWASKancnMIDfzsIGOqUBD8eyV2iKSn3MsckUeLyH6hpjjdgU52JkocLkfpKUad20CqhK7QIgjUwycxKLow36dWd3DMmtutY5j51Q1hDl6N7u6o6VDaezTdSElVxQaO8FO%2BRc4ZE1%2F78r9sjRHagnpSbMrEeuZ6t5%2BcOP2i32JKD%2FrSBVNafkVE6PvspUY5o7hAhd8ok3r3MtixmlWT18xz02tIZoSH7fFf22meFGPRoUhjtY&X-Amz-Signature=88f6efb48472bf3fc132a61d98e76f304431ac2b1c6e2c66e9017df4179dec07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
