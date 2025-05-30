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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AII3IMW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGij347ahZ5Mkeejo1kfKLhhMv7iCee1YeQi808wRXFAiB%2FRYyLscKaeTkGozhVAuKZbG9f9ETQ8EJGapsmXWCpaSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSAsHMukth5o2zi%2BKtwD4KDIl86urVV9AQZLpTUSmH3LF1Vn2TvZh4Dukzd6T%2BtiCXdGDGpBIEOLA2TFQRr3FxDkFfRCTFSxGjz90a5ScZZUE8SI9qxwqgCUGIslsE%2FNbuiNdak9YxOFouOfU%2FpeKY8Cm3g%2By9c5ByRfe65OYGUer%2FPMbfgokQOOED8j2CXMxSYK4oDhdSqMWB9rpKk0ij7sWHA3PwiO3qZ32V8dxsjQZcXWp%2Bbqxr1Yf232bOu08V6hRyMtL5gcI3X4mGzKZ6YK2BXp99Y8K%2B3V1gNGKk6tCL%2BY19OtgoVhWGVP1%2FPOQX8gvFNNOKOE9%2BodektGmO3EDHVubqZZ26zIDjJM87jd7%2FBGtW6pvzFMGcqwhjgz2arBRtfZQmrdnULL66iCoM4GYqttFO%2Fd6%2FsyELIUoXEs43sdEVH0q3faPl%2Fx8ih3mYz3cf7dtTsb3W%2F54Dcw%2BHz3v5yBoR2VTpCwhwaERRrifHz3h68hPMBTBb0JNaNYLlUKBXQ%2FTw0EbnSvbkt5r2p0ZEoMOewv6IVAMkMEgFvJ6DH0dKUnjw3VayHxnWRnsppoRnzYxjzDlfbsmAVc9U9%2BFdEHyAyf9ayFlh%2BMdJo3bE1XdEsNlcKxoHt%2FBRGOpSGorAcumJZTatswz7vnwQY6pgHRlSilpf3DpvPCXhaAYh1ziVwojpLhbK9MvLFZvM85SVX2F9KqjfFV5INUhaPxul1XdE6vFpJeZ%2Bd%2B3cpzXNYP%2FzboyaOfYVk2HUm8WqyzSJ4e%2FFY3sq2tIJ2JF3MtuhY4dEKnW4tw4QvIViyxlC2YrCGwIZSL2D8JjCXrygck7cu3i4bpUDTts1BmbghN%2BviaOBqP5aDFaOEEyXkNeT3S5b598KPd&X-Amz-Signature=b6d47b41dffdf67ab8bcfbfabd3228d21d0aa97a60ff9719d3725a92ef41669e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AII3IMW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGij347ahZ5Mkeejo1kfKLhhMv7iCee1YeQi808wRXFAiB%2FRYyLscKaeTkGozhVAuKZbG9f9ETQ8EJGapsmXWCpaSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSAsHMukth5o2zi%2BKtwD4KDIl86urVV9AQZLpTUSmH3LF1Vn2TvZh4Dukzd6T%2BtiCXdGDGpBIEOLA2TFQRr3FxDkFfRCTFSxGjz90a5ScZZUE8SI9qxwqgCUGIslsE%2FNbuiNdak9YxOFouOfU%2FpeKY8Cm3g%2By9c5ByRfe65OYGUer%2FPMbfgokQOOED8j2CXMxSYK4oDhdSqMWB9rpKk0ij7sWHA3PwiO3qZ32V8dxsjQZcXWp%2Bbqxr1Yf232bOu08V6hRyMtL5gcI3X4mGzKZ6YK2BXp99Y8K%2B3V1gNGKk6tCL%2BY19OtgoVhWGVP1%2FPOQX8gvFNNOKOE9%2BodektGmO3EDHVubqZZ26zIDjJM87jd7%2FBGtW6pvzFMGcqwhjgz2arBRtfZQmrdnULL66iCoM4GYqttFO%2Fd6%2FsyELIUoXEs43sdEVH0q3faPl%2Fx8ih3mYz3cf7dtTsb3W%2F54Dcw%2BHz3v5yBoR2VTpCwhwaERRrifHz3h68hPMBTBb0JNaNYLlUKBXQ%2FTw0EbnSvbkt5r2p0ZEoMOewv6IVAMkMEgFvJ6DH0dKUnjw3VayHxnWRnsppoRnzYxjzDlfbsmAVc9U9%2BFdEHyAyf9ayFlh%2BMdJo3bE1XdEsNlcKxoHt%2FBRGOpSGorAcumJZTatswz7vnwQY6pgHRlSilpf3DpvPCXhaAYh1ziVwojpLhbK9MvLFZvM85SVX2F9KqjfFV5INUhaPxul1XdE6vFpJeZ%2Bd%2B3cpzXNYP%2FzboyaOfYVk2HUm8WqyzSJ4e%2FFY3sq2tIJ2JF3MtuhY4dEKnW4tw4QvIViyxlC2YrCGwIZSL2D8JjCXrygck7cu3i4bpUDTts1BmbghN%2BviaOBqP5aDFaOEEyXkNeT3S5b598KPd&X-Amz-Signature=af1432840f9b3e191608328cfee3c719968bcb083f02ee0d10d727b16431ab03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AII3IMW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGij347ahZ5Mkeejo1kfKLhhMv7iCee1YeQi808wRXFAiB%2FRYyLscKaeTkGozhVAuKZbG9f9ETQ8EJGapsmXWCpaSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSAsHMukth5o2zi%2BKtwD4KDIl86urVV9AQZLpTUSmH3LF1Vn2TvZh4Dukzd6T%2BtiCXdGDGpBIEOLA2TFQRr3FxDkFfRCTFSxGjz90a5ScZZUE8SI9qxwqgCUGIslsE%2FNbuiNdak9YxOFouOfU%2FpeKY8Cm3g%2By9c5ByRfe65OYGUer%2FPMbfgokQOOED8j2CXMxSYK4oDhdSqMWB9rpKk0ij7sWHA3PwiO3qZ32V8dxsjQZcXWp%2Bbqxr1Yf232bOu08V6hRyMtL5gcI3X4mGzKZ6YK2BXp99Y8K%2B3V1gNGKk6tCL%2BY19OtgoVhWGVP1%2FPOQX8gvFNNOKOE9%2BodektGmO3EDHVubqZZ26zIDjJM87jd7%2FBGtW6pvzFMGcqwhjgz2arBRtfZQmrdnULL66iCoM4GYqttFO%2Fd6%2FsyELIUoXEs43sdEVH0q3faPl%2Fx8ih3mYz3cf7dtTsb3W%2F54Dcw%2BHz3v5yBoR2VTpCwhwaERRrifHz3h68hPMBTBb0JNaNYLlUKBXQ%2FTw0EbnSvbkt5r2p0ZEoMOewv6IVAMkMEgFvJ6DH0dKUnjw3VayHxnWRnsppoRnzYxjzDlfbsmAVc9U9%2BFdEHyAyf9ayFlh%2BMdJo3bE1XdEsNlcKxoHt%2FBRGOpSGorAcumJZTatswz7vnwQY6pgHRlSilpf3DpvPCXhaAYh1ziVwojpLhbK9MvLFZvM85SVX2F9KqjfFV5INUhaPxul1XdE6vFpJeZ%2Bd%2B3cpzXNYP%2FzboyaOfYVk2HUm8WqyzSJ4e%2FFY3sq2tIJ2JF3MtuhY4dEKnW4tw4QvIViyxlC2YrCGwIZSL2D8JjCXrygck7cu3i4bpUDTts1BmbghN%2BviaOBqP5aDFaOEEyXkNeT3S5b598KPd&X-Amz-Signature=50e4790ad9e8faf5129c5a38c28e9d510b2fc1cd6e0fd3556b2d093681d7b68d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CWTC2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEH2qs6ND8TJob%2FvoD78GBGs0sMWvIX%2FQa6IExbCSBOmAiEAi%2FAMZHX%2F1upFb6VnDH3VS2s2%2BI13w4%2F08eHaAxPBlU4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq7kOgcrDuUmgKCzCrcAyop4TaPg9dM%2F0lSL7qTfWPpolmrLgliunI7c6cXa94PLG1DrLR9pRw3tRAyjjclzGmcJgB87yqXGtpftSAjERe2QYypevo9z2IErFlCkshZDZzAo90XMGStwaNhLEuUKOpr5MUg0Kk8uE%2FI9GRHJtJ29YxgfgPF67iJZeY4jr3BPdy72Lo4EvqOekmicb4vG6RvgY1eTfZRYhoUTLJOQlIs8tL9h1AdfymYoNcgRu%2B15IOevIgZK0KtTnMfDevaTSSC6HcyYRMtKBhOYvmbyE1Wz4xTRRSGY6atjPcxIe9Y8OEh%2FR9fbmEMU3NZJ1OCv3KnY4%2FXN%2B4A%2FdK8eFqqOWhA7q8%2BD4mpDqxRrlxIaEBe4%2F3XlelgXi%2BjWAZ%2BTfS6y5F0pKeb8hFfJ8mn3XsU2yv0NF9yCuJKLdOb8tar46%2FwNgxycccybNnCwsfyq89FiW1KGklm%2BM962sjkSK%2Fir3uimadYs6HFKlQyDiwZnJ0nOdwi4Zd7GKAE3UP7fkJO2OkrjWfzctoy3%2F9Ql5KpYH3EqXk3wMYFt79pqftk5c72GW0RgCUqMFtkYayv7dSFhus5xZR9Y0OfgPKXmoYktAkyQcfSiIzz1kJkdEJ0ydx9ScKfvTrIbm%2BeYb%2BtMKC758EGOqUB%2Fn2NmDtmBxzZJpUV%2B4bTGwDNtL%2FfRM4xirdQY3kL3y4v3fV37d0TxPFp390eMdh5tIPYeKX3UVOvZJAbnkAVcZf6mnso%2FzwRweLY5mpQBPjgsIJQzPOMQ58XQ5VVoOBdGSdDvJJ4QZLpsdJWvA7s5gUaHHgam%2FZCiz6D55vN3tvIYzPJOtrircxRoLHiOlds9uloAZ0YdEELfmVAUgKGN1uxYJqk&X-Amz-Signature=82a0ed50aed69a026d3c6fb9dd3e05d792135916af693aaed21bdd405734a94c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USF6IYHA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyh7LXifjdRHAkdLZtJW502kIprPVdTFtJ0kGjTsIn5gIhALevVqt%2BKoV22nx7jvm9H9vL3xNhtozd9MzH4PwfSNFaKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzwoBtDNhfZyNOWqQq3AMveQsweerQum2%2B51XS%2F11%2BmW7lZ1Z%2BYa5a0tA2mRkpertBRmKVyrtlAmRu4LR%2B5sWfD4kQeTojEkqUjo97jHBu2nK2s17zMPQfmfTjt1E9LUe2jDsGbnEbwa5EkPuXxf06psjZJ8SDSbhNxA8FYEdCy9RezHSfZU847KisqyDb%2BpS2oRExeD9Nx73e3M9%2FTFBE8ijwaeAUb%2FNt62ETFTbADlY8MnT19mPnrFOf0TY4VGRCzS4DpcJ%2FjixymG%2Bxkfgy1KY%2Fty5yxo6pmEgTuV1dNU1qG%2FGRfrNc9%2F1V%2BTVisxbrPfInt2JfFJGx%2FITbgzZ8UXAbrbIn1sRTRoQ6gjzsWVP6DAJTdZLtyAcm4WyyO5YcDxRGrpeJOlOsT8QO3TO%2BBDXx9wI9TXE7qHnmAOSxuF%2BeDsndKVNE3C8F31OFz8e4mrZVSLKv8efFy1k2BxVvS%2BSZ1IZ7hMoPPQ1wmUXBJNRb%2Fj3PzH0ZrJKADExb4PVxpBKmXYJaonjXN2IC%2B2xyJaNuXeHYkXoQXJNOgNRWXB6FRMY1Z3Pg6bFQ2NI%2BS3vT%2B1YDr4bppVJ2Leybo8I7tTkpOlW9zQg8bYNV0YajrhXfgKtNw45MjobtwYKXprkwJ8Noenbxtcg2YzCou%2BfBBjqkAVLx8HrISJ6cvPAhOvmKM2wRbn%2BC%2F8zTRymueuYVYlAQI0pqnrRBaZ2J7P%2FM7eI3gxWMJqEX%2FnlKaUJ8AJddCaA72pEXJNJAy4FaqWxuaOsy7vy4v05kjNTtAk%2FsRyfg6Jpe%2FaCkeCFKNpnhT34rhDvgELqOFIoNer1Zk%2BT5MSKnPGA4qC91e2MFKLunkSCSia7SRwCQ97DxL6uIUw5mQTR0nZlB&X-Amz-Signature=62ba9b84d40be19d0676fd3d30f0832f716fc6f4e871ba99c55fb8c1ea7464c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AII3IMW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGij347ahZ5Mkeejo1kfKLhhMv7iCee1YeQi808wRXFAiB%2FRYyLscKaeTkGozhVAuKZbG9f9ETQ8EJGapsmXWCpaSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSAsHMukth5o2zi%2BKtwD4KDIl86urVV9AQZLpTUSmH3LF1Vn2TvZh4Dukzd6T%2BtiCXdGDGpBIEOLA2TFQRr3FxDkFfRCTFSxGjz90a5ScZZUE8SI9qxwqgCUGIslsE%2FNbuiNdak9YxOFouOfU%2FpeKY8Cm3g%2By9c5ByRfe65OYGUer%2FPMbfgokQOOED8j2CXMxSYK4oDhdSqMWB9rpKk0ij7sWHA3PwiO3qZ32V8dxsjQZcXWp%2Bbqxr1Yf232bOu08V6hRyMtL5gcI3X4mGzKZ6YK2BXp99Y8K%2B3V1gNGKk6tCL%2BY19OtgoVhWGVP1%2FPOQX8gvFNNOKOE9%2BodektGmO3EDHVubqZZ26zIDjJM87jd7%2FBGtW6pvzFMGcqwhjgz2arBRtfZQmrdnULL66iCoM4GYqttFO%2Fd6%2FsyELIUoXEs43sdEVH0q3faPl%2Fx8ih3mYz3cf7dtTsb3W%2F54Dcw%2BHz3v5yBoR2VTpCwhwaERRrifHz3h68hPMBTBb0JNaNYLlUKBXQ%2FTw0EbnSvbkt5r2p0ZEoMOewv6IVAMkMEgFvJ6DH0dKUnjw3VayHxnWRnsppoRnzYxjzDlfbsmAVc9U9%2BFdEHyAyf9ayFlh%2BMdJo3bE1XdEsNlcKxoHt%2FBRGOpSGorAcumJZTatswz7vnwQY6pgHRlSilpf3DpvPCXhaAYh1ziVwojpLhbK9MvLFZvM85SVX2F9KqjfFV5INUhaPxul1XdE6vFpJeZ%2Bd%2B3cpzXNYP%2FzboyaOfYVk2HUm8WqyzSJ4e%2FFY3sq2tIJ2JF3MtuhY4dEKnW4tw4QvIViyxlC2YrCGwIZSL2D8JjCXrygck7cu3i4bpUDTts1BmbghN%2BviaOBqP5aDFaOEEyXkNeT3S5b598KPd&X-Amz-Signature=60250a9999cec42c1ee8b9447bc09832747bb907ba87d52b1d96e4155a145224&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
