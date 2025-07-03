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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBECWVX6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKO5N4D7a2%2F02HEHJipi7ZI%2BDH6nVwCtVGFFJqU%2FOEhQIgSVpEKG4rX%2BpAlVev5af2LgJ8HA0I4vlWCrIWjf9rQoUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkaq7DkfuOGuZu4tircAz9rABpnkZys8eogA%2FMvnB8ipfVaazF%2FaLaMLm0zC3ir55NZXTqbPCeC57GZVzwxGMqJtY%2BZN9bXcxgU9AEwSvQnPbqBUi7a2llUHkAmIuXGbFe3vNQktOVBIEyHHpz%2Bzp%2F%2FG0ahi8lQd8%2BynUFASjiQcMyQ%2B4nJk3ddMEgdtO2iTbi%2Fu9m8dn66NOZBFS6Ktw78s%2BfewYpfd%2BPcMTOEjdBMkPLgocf3cmh12nsjrIzWUvyYhph6xT5z3sAKCI6%2B%2FNpM%2FQlI9MLgt9SJN8lzKxf6gzQopKBXnCEgdX9oeioqldBAOCnbVO9M0Xu5uECeiXnJBsPPLwemzzAtHAPkFYuKueWT6lLSZJQmYxyUvszu9l9zaF41UN2kh2CxxgYCLdPKh2Mkv%2Ff2yPB7PyHz8SpqWq26kWVoFevjSyzbSJ0DOZRhdG0r34gMIMuXgfrqoD%2BIi15JO3irCiVtDM1E%2FE6sGvhDCu7niCkx4GrbLfRXNO23vOVAWUX1XzeojVg93CLnj3LD8%2FHBCNQ6ztj9hGGv8iTokfb2BhWmaX691IaKDhXr4Q3t2MbLl3cR7YoMr7A83BLlJB46%2BMXZFnapUTWCXyfwct48tW2WYK5jdlSETEZ0m39Dg5xUXdQyMMy9lsMGOqUBwYLjy35HG5dUA5HjfvvzXI9l3p2MJrx8yWj2x9bb0j2v7K%2BdvG%2Bhd2seTcTbsVBANDLEpWBKAusHGxiVWtIR9gOfjgV4dY%2FyukFPlqSC0PuzrJisbZ3mx2H4pbyMsFsivZgvA%2BbSweGT1n5zyxAE%2BPBLN3mr9tAzM7QIeOtZu1F6Zg5Mn9CWsobPWnCmkuYfrE55g4HaRWfvRT9CBPQX60xKfRTk&X-Amz-Signature=87f7fef487a23fba37a9a617cecc4125784593d51d8b93d906c97cea61a79e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBECWVX6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKO5N4D7a2%2F02HEHJipi7ZI%2BDH6nVwCtVGFFJqU%2FOEhQIgSVpEKG4rX%2BpAlVev5af2LgJ8HA0I4vlWCrIWjf9rQoUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkaq7DkfuOGuZu4tircAz9rABpnkZys8eogA%2FMvnB8ipfVaazF%2FaLaMLm0zC3ir55NZXTqbPCeC57GZVzwxGMqJtY%2BZN9bXcxgU9AEwSvQnPbqBUi7a2llUHkAmIuXGbFe3vNQktOVBIEyHHpz%2Bzp%2F%2FG0ahi8lQd8%2BynUFASjiQcMyQ%2B4nJk3ddMEgdtO2iTbi%2Fu9m8dn66NOZBFS6Ktw78s%2BfewYpfd%2BPcMTOEjdBMkPLgocf3cmh12nsjrIzWUvyYhph6xT5z3sAKCI6%2B%2FNpM%2FQlI9MLgt9SJN8lzKxf6gzQopKBXnCEgdX9oeioqldBAOCnbVO9M0Xu5uECeiXnJBsPPLwemzzAtHAPkFYuKueWT6lLSZJQmYxyUvszu9l9zaF41UN2kh2CxxgYCLdPKh2Mkv%2Ff2yPB7PyHz8SpqWq26kWVoFevjSyzbSJ0DOZRhdG0r34gMIMuXgfrqoD%2BIi15JO3irCiVtDM1E%2FE6sGvhDCu7niCkx4GrbLfRXNO23vOVAWUX1XzeojVg93CLnj3LD8%2FHBCNQ6ztj9hGGv8iTokfb2BhWmaX691IaKDhXr4Q3t2MbLl3cR7YoMr7A83BLlJB46%2BMXZFnapUTWCXyfwct48tW2WYK5jdlSETEZ0m39Dg5xUXdQyMMy9lsMGOqUBwYLjy35HG5dUA5HjfvvzXI9l3p2MJrx8yWj2x9bb0j2v7K%2BdvG%2Bhd2seTcTbsVBANDLEpWBKAusHGxiVWtIR9gOfjgV4dY%2FyukFPlqSC0PuzrJisbZ3mx2H4pbyMsFsivZgvA%2BbSweGT1n5zyxAE%2BPBLN3mr9tAzM7QIeOtZu1F6Zg5Mn9CWsobPWnCmkuYfrE55g4HaRWfvRT9CBPQX60xKfRTk&X-Amz-Signature=fb21dc2e9bc0c24eae9ca2f4bf98a3ddfe1ee2eadfdc5b58fb115e64fde33770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBECWVX6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKO5N4D7a2%2F02HEHJipi7ZI%2BDH6nVwCtVGFFJqU%2FOEhQIgSVpEKG4rX%2BpAlVev5af2LgJ8HA0I4vlWCrIWjf9rQoUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkaq7DkfuOGuZu4tircAz9rABpnkZys8eogA%2FMvnB8ipfVaazF%2FaLaMLm0zC3ir55NZXTqbPCeC57GZVzwxGMqJtY%2BZN9bXcxgU9AEwSvQnPbqBUi7a2llUHkAmIuXGbFe3vNQktOVBIEyHHpz%2Bzp%2F%2FG0ahi8lQd8%2BynUFASjiQcMyQ%2B4nJk3ddMEgdtO2iTbi%2Fu9m8dn66NOZBFS6Ktw78s%2BfewYpfd%2BPcMTOEjdBMkPLgocf3cmh12nsjrIzWUvyYhph6xT5z3sAKCI6%2B%2FNpM%2FQlI9MLgt9SJN8lzKxf6gzQopKBXnCEgdX9oeioqldBAOCnbVO9M0Xu5uECeiXnJBsPPLwemzzAtHAPkFYuKueWT6lLSZJQmYxyUvszu9l9zaF41UN2kh2CxxgYCLdPKh2Mkv%2Ff2yPB7PyHz8SpqWq26kWVoFevjSyzbSJ0DOZRhdG0r34gMIMuXgfrqoD%2BIi15JO3irCiVtDM1E%2FE6sGvhDCu7niCkx4GrbLfRXNO23vOVAWUX1XzeojVg93CLnj3LD8%2FHBCNQ6ztj9hGGv8iTokfb2BhWmaX691IaKDhXr4Q3t2MbLl3cR7YoMr7A83BLlJB46%2BMXZFnapUTWCXyfwct48tW2WYK5jdlSETEZ0m39Dg5xUXdQyMMy9lsMGOqUBwYLjy35HG5dUA5HjfvvzXI9l3p2MJrx8yWj2x9bb0j2v7K%2BdvG%2Bhd2seTcTbsVBANDLEpWBKAusHGxiVWtIR9gOfjgV4dY%2FyukFPlqSC0PuzrJisbZ3mx2H4pbyMsFsivZgvA%2BbSweGT1n5zyxAE%2BPBLN3mr9tAzM7QIeOtZu1F6Zg5Mn9CWsobPWnCmkuYfrE55g4HaRWfvRT9CBPQX60xKfRTk&X-Amz-Signature=9a2e594efb8a6181103bc545cf286cdd9e630badc582836bfcc239dc44ec71c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFEP2MF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYWGsxUcbcDvc9mG31M0g8WxFXZFF3c80eqhfQVAfnIAiB2IwNSx0fhvOrk9U%2BcC5Q5C98VVUozM9RBJakm4bFijiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Z6GPD3cZ4FguxHEKtwDkdIpkWrDZyXFlzdusBd0jsQeo24cagYhA2jSITgwXDhZJIzhDMKqgXMAq%2FFWDiSeo8ipu6AqN9SgZFit9GoBilSCEtnNlENhJj2pxNkewx1lubsRSfSPsFoS7Zunw%2BWSNEkS8mWeEoh%2FAHeufWMfyFwUe7SEeLoS5MU%2BAgm2O7yECkf%2FvklTTmw3NfPLUn%2FKW%2Bd5KWWa%2FUierxK%2BdexyGMlogwcD8G0ChziB09EYGYgiQFhcFKZBUS0%2F2J%2BWMNvc2yEzgFn%2FbkaceD942coh2DxomMT7%2Bz6Ot9UNcPtPXbuc0dGEst7FpA9mVuInh7mBXOlGJnN6awy3SbuKseb%2F5YlE%2BnlTpAr4uj2etMgXi9JN4cVqI848f%2FbTvVsY5%2FsewkqJNr4rcGNHFjFt5GTJFoHwOywIjvGsjAcxJpyhn3fuHHiWRHLvRASQu%2B32XUMB%2F7%2Ft3orBxyYGJLmX7aLh7ZPVVWq3XgYX5yDOzG9%2FF2Miyh1rSYSNIezeJSb6Sx1NvRjwn1fI6uhtZvwPCMBQkXDD9O8qVWSIHCvPwJscmfScFE2rTX9y4FH8XAqBgvfAUeLsfhaKbn0dZszz7mG60cIgpyICwGcLj3KbXWLIlEiPwooSkXMd8nXP4%2FMwlr6WwwY6pgGQ7GU9kt5oZCHk7ve41f9%2FC9GlfqREBOyEy1APamxHaTi%2Bi57jTf3YNT14WdmfW3Z%2BVBVIFCnlgCi6xnGQIVQRT5bF10ZxLCxjFuhk3YCk4WOUd3CR3vUoBXWmLXeLfMviExzxKlLYBBx6jifk7pjHUUd7tLUn236Z6r65Mk7OCki5W9clDbNnuUlAfTEX75g5xybMnM7J%2BbalW3goYlfxzG20y709&X-Amz-Signature=3fced0c765fafe362db805681f483edb08ae4d80eefdb1ea106eb519386219bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XV3SGE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb%2B71KUUdyr1OO9BZtDRIIybqC79SStmjoH5pwFfoGrgIgUfbb2E49MqG%2FCf10Ys9U9NbWym2BEw5yu6Vm2D8wlD8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK3DSthMnhKBJLq2ircA8AQnuiNkGu7MLB88Kjx1OsZB0RBdp4wbcaA25k5tmCH09QOoUN4D9Gor97euIq%2FF1gkLOTCJwtE2bS%2Ff5yWAdrQMmSqXOWjSTO7YIhevrliQ0ndrp%2Bo1YMyjP5GLcxrs9IePOxAlWJGAO0buG8SqYfqVNKX3jJ2rbS75HZaA791k9p8IERdRiEWj3cJiSg6wS1IevkscOnpRARpmdElffDvKhX%2FCNpBQTDgbG7iLkUAZGEWxHkLH7WER4tG57lzqQbJyu5uyBAgAYdj82OcVLDW87STSotP%2BYyLCjomXRB1PkUzs1caFsxi407vCIdhYi5RG3EDXsLJY2rTdDJayxpSa2N5iygxK7JcDvN6DaLX49tRDWSpaMWAcU2oGKqUmfizSEH22EVJ8h3gdi9f3FgidZmFyRYjOd5uItZl5aRZ%2FpeKDNgui7JQa0RGKB1S8cVROgIBPR%2BQG9FvXHrVB5xog3zyB9aaYTT9Wx%2Fs%2BsrkJTERtdcchP5Lvi0w%2FghSbYlwKTfwwRy93BZ6bjpPJKmovkcOJlvghnrEolrCBKc6goT%2Fpq0H4D3uZ8%2B3aV2ni2utTFu6a9oztVQnhLChBcgCyRY6PatKi8QV9HIVaoalkNw3tqp0BlfA7Z6%2FMPW8lsMGOqUBbu7Kc%2Fsvt%2BCGhhNIkTxMU1I9LP38q7aKrpTWZyJ0YKMRT6qx79eeaE0ef%2BjIP9eEXFM3mHa7tdmBIQqNfgbrPT96LchTGgeuZ3UxcHMOcrryn%2FJKQYlJvla0Df%2FZCudX7Ibf732Ll63J9DpwaEKzIto4pa%2Fus0D3ZK0bq%2FIK5lyy4GrQTx%2FAg%2FckQOB%2BWrCumuCeBWPV0bSPAspLmEuJOG0h39KI&X-Amz-Signature=d372157fec2dc55a3a67d7cf69ce7d0e15e897a91b69401561ec722f295e5c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBECWVX6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKO5N4D7a2%2F02HEHJipi7ZI%2BDH6nVwCtVGFFJqU%2FOEhQIgSVpEKG4rX%2BpAlVev5af2LgJ8HA0I4vlWCrIWjf9rQoUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkaq7DkfuOGuZu4tircAz9rABpnkZys8eogA%2FMvnB8ipfVaazF%2FaLaMLm0zC3ir55NZXTqbPCeC57GZVzwxGMqJtY%2BZN9bXcxgU9AEwSvQnPbqBUi7a2llUHkAmIuXGbFe3vNQktOVBIEyHHpz%2Bzp%2F%2FG0ahi8lQd8%2BynUFASjiQcMyQ%2B4nJk3ddMEgdtO2iTbi%2Fu9m8dn66NOZBFS6Ktw78s%2BfewYpfd%2BPcMTOEjdBMkPLgocf3cmh12nsjrIzWUvyYhph6xT5z3sAKCI6%2B%2FNpM%2FQlI9MLgt9SJN8lzKxf6gzQopKBXnCEgdX9oeioqldBAOCnbVO9M0Xu5uECeiXnJBsPPLwemzzAtHAPkFYuKueWT6lLSZJQmYxyUvszu9l9zaF41UN2kh2CxxgYCLdPKh2Mkv%2Ff2yPB7PyHz8SpqWq26kWVoFevjSyzbSJ0DOZRhdG0r34gMIMuXgfrqoD%2BIi15JO3irCiVtDM1E%2FE6sGvhDCu7niCkx4GrbLfRXNO23vOVAWUX1XzeojVg93CLnj3LD8%2FHBCNQ6ztj9hGGv8iTokfb2BhWmaX691IaKDhXr4Q3t2MbLl3cR7YoMr7A83BLlJB46%2BMXZFnapUTWCXyfwct48tW2WYK5jdlSETEZ0m39Dg5xUXdQyMMy9lsMGOqUBwYLjy35HG5dUA5HjfvvzXI9l3p2MJrx8yWj2x9bb0j2v7K%2BdvG%2Bhd2seTcTbsVBANDLEpWBKAusHGxiVWtIR9gOfjgV4dY%2FyukFPlqSC0PuzrJisbZ3mx2H4pbyMsFsivZgvA%2BbSweGT1n5zyxAE%2BPBLN3mr9tAzM7QIeOtZu1F6Zg5Mn9CWsobPWnCmkuYfrE55g4HaRWfvRT9CBPQX60xKfRTk&X-Amz-Signature=ae9fa43f7950d2c0f599bd2a9ed61d7693d7c867eb00c2ae9e74d4a42fd988ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
