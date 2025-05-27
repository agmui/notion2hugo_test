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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PY5YFGM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa380DFnTUFh2ilyHEGj7bt%2FQnWrQ70T1RsD%2FK95gjMgIgHvS0HTzPOwZRhVlwS5tYKNjR9fSsuWNfzPPv9px6Sboq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDH4GlZosvEZX7ppEGCrcA53UORmxmQ0GfL933s%2FqHzMuZM15ynDeq16OXGti0M551SZ%2Fw3SFSfsQLvw%2BZrPJ%2Bslu1Fky8YlKnZ47ifos2SHDw1DTilkQUBJA6xIzkg1hml9caCHiubn0w4qWDKa%2Fypd1zsQfyM2HHnGUZcdDgQd9XHMY3f4czrfioaT14T%2Bm4IYhxwuduSH%2BIjcrgLrEHJmuLMDWb33bLyHhdze%2F%2FiD%2Bt1nyTEmUB0TpiLx%2BxMFU4ioeXN87R9gjeCzaNZujuFCe8xXQ3CgU86UJS4Ta3p%2BcLKVUeThGqhE9VBWpxeoeyuGXSXA5pdXF57693G2oqFMM08v3rLdqcyHcxo6rmy77yf4LbgaUdbyTUd3eAZP5nKAYdYORxIUR%2FlSQjNu2NXzUrSHy3CmDsGggFxaWbthXLF0FySP%2BZuSf9kqCttw2%2FO1GaJ%2FWH5GFQUu2drI1aweqEMLn4qreVbtC%2FRYJ8ylz0GuR%2BxV1LgXq1PsXk%2BUOPw6sbo6PHsrEg05NnZvVVHfQwPQ3zwxJ0O7eF3TmHlAb2T1lgiBGEHk4HywgXqOi8b6SNhB14PvUBmnzZZIyLFiUFr%2FwOpaKwJVPZTKwhyNS1l%2FOCv4lm5b0y7Cz9hOnw2JXpat%2BYhk9OH%2FoMMTU1sEGOqUBfyUuVzHIyqHPCXoJKRVPjMkn8%2B8BHL7M4BrNvCUSXzcGOFzkFlxnbdiLNJ0RqE%2FrflPsbS%2B3ZRzdFATdymrv1qM4nEGAJUOWnccyWtU78CjC5%2BlS8VA9nEe45n%2B24AlLRK2WRTPy70EX4t1unMnjF3Btkj%2B1tjohhLjom6BAJ4uxOuFg5m5eOY9%2FmeeEn%2FEkKfJkD%2BdgySdO6NlFXBwMKOiQrNPr&X-Amz-Signature=32e786ae339a96f9090e1b2f78de3ccd712aa7e1953b19ff091e344fe8aceaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PY5YFGM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa380DFnTUFh2ilyHEGj7bt%2FQnWrQ70T1RsD%2FK95gjMgIgHvS0HTzPOwZRhVlwS5tYKNjR9fSsuWNfzPPv9px6Sboq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDH4GlZosvEZX7ppEGCrcA53UORmxmQ0GfL933s%2FqHzMuZM15ynDeq16OXGti0M551SZ%2Fw3SFSfsQLvw%2BZrPJ%2Bslu1Fky8YlKnZ47ifos2SHDw1DTilkQUBJA6xIzkg1hml9caCHiubn0w4qWDKa%2Fypd1zsQfyM2HHnGUZcdDgQd9XHMY3f4czrfioaT14T%2Bm4IYhxwuduSH%2BIjcrgLrEHJmuLMDWb33bLyHhdze%2F%2FiD%2Bt1nyTEmUB0TpiLx%2BxMFU4ioeXN87R9gjeCzaNZujuFCe8xXQ3CgU86UJS4Ta3p%2BcLKVUeThGqhE9VBWpxeoeyuGXSXA5pdXF57693G2oqFMM08v3rLdqcyHcxo6rmy77yf4LbgaUdbyTUd3eAZP5nKAYdYORxIUR%2FlSQjNu2NXzUrSHy3CmDsGggFxaWbthXLF0FySP%2BZuSf9kqCttw2%2FO1GaJ%2FWH5GFQUu2drI1aweqEMLn4qreVbtC%2FRYJ8ylz0GuR%2BxV1LgXq1PsXk%2BUOPw6sbo6PHsrEg05NnZvVVHfQwPQ3zwxJ0O7eF3TmHlAb2T1lgiBGEHk4HywgXqOi8b6SNhB14PvUBmnzZZIyLFiUFr%2FwOpaKwJVPZTKwhyNS1l%2FOCv4lm5b0y7Cz9hOnw2JXpat%2BYhk9OH%2FoMMTU1sEGOqUBfyUuVzHIyqHPCXoJKRVPjMkn8%2B8BHL7M4BrNvCUSXzcGOFzkFlxnbdiLNJ0RqE%2FrflPsbS%2B3ZRzdFATdymrv1qM4nEGAJUOWnccyWtU78CjC5%2BlS8VA9nEe45n%2B24AlLRK2WRTPy70EX4t1unMnjF3Btkj%2B1tjohhLjom6BAJ4uxOuFg5m5eOY9%2FmeeEn%2FEkKfJkD%2BdgySdO6NlFXBwMKOiQrNPr&X-Amz-Signature=e68884c6dda8d5b8bb9367c3964834634cf522b9cb292c4252cbd40fce096f58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PY5YFGM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa380DFnTUFh2ilyHEGj7bt%2FQnWrQ70T1RsD%2FK95gjMgIgHvS0HTzPOwZRhVlwS5tYKNjR9fSsuWNfzPPv9px6Sboq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDH4GlZosvEZX7ppEGCrcA53UORmxmQ0GfL933s%2FqHzMuZM15ynDeq16OXGti0M551SZ%2Fw3SFSfsQLvw%2BZrPJ%2Bslu1Fky8YlKnZ47ifos2SHDw1DTilkQUBJA6xIzkg1hml9caCHiubn0w4qWDKa%2Fypd1zsQfyM2HHnGUZcdDgQd9XHMY3f4czrfioaT14T%2Bm4IYhxwuduSH%2BIjcrgLrEHJmuLMDWb33bLyHhdze%2F%2FiD%2Bt1nyTEmUB0TpiLx%2BxMFU4ioeXN87R9gjeCzaNZujuFCe8xXQ3CgU86UJS4Ta3p%2BcLKVUeThGqhE9VBWpxeoeyuGXSXA5pdXF57693G2oqFMM08v3rLdqcyHcxo6rmy77yf4LbgaUdbyTUd3eAZP5nKAYdYORxIUR%2FlSQjNu2NXzUrSHy3CmDsGggFxaWbthXLF0FySP%2BZuSf9kqCttw2%2FO1GaJ%2FWH5GFQUu2drI1aweqEMLn4qreVbtC%2FRYJ8ylz0GuR%2BxV1LgXq1PsXk%2BUOPw6sbo6PHsrEg05NnZvVVHfQwPQ3zwxJ0O7eF3TmHlAb2T1lgiBGEHk4HywgXqOi8b6SNhB14PvUBmnzZZIyLFiUFr%2FwOpaKwJVPZTKwhyNS1l%2FOCv4lm5b0y7Cz9hOnw2JXpat%2BYhk9OH%2FoMMTU1sEGOqUBfyUuVzHIyqHPCXoJKRVPjMkn8%2B8BHL7M4BrNvCUSXzcGOFzkFlxnbdiLNJ0RqE%2FrflPsbS%2B3ZRzdFATdymrv1qM4nEGAJUOWnccyWtU78CjC5%2BlS8VA9nEe45n%2B24AlLRK2WRTPy70EX4t1unMnjF3Btkj%2B1tjohhLjom6BAJ4uxOuFg5m5eOY9%2FmeeEn%2FEkKfJkD%2BdgySdO6NlFXBwMKOiQrNPr&X-Amz-Signature=5cadc0dd8e82256e227009584ec455d6779f25cf099d520d5a90d2f6b31286bf&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGZOFIC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1ymFjpuCSRb7DQzVD6gmEeJPy0KvKpxCSicYsuElWHAiEAo5IpniaiVpFPaPNbf9wbcMJxig2JdzOAQCsFshiVa0Yq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAf2ZwgWUPQcR%2BImayrcA7Vo8rwxUWtzCbtsIW5MSvmSb2kQcJYBQ%2FuQsrLXHQjaOrtL0o49wnrWXBstmsyCqlSN1E4wbif%2BxIi2M3NIVMzJajKwzH4kDtWKdPW8z6YPFSzr8i7OnCRrKpcrHMklsIF%2BbVeqPXbwOW0FVXbndNj6i8%2BGUmMgMbRrlQEdZ0NgKX8rA2ory2tIIYS5FZx23wdObng%2FgVStOGnYn%2BloyF54Jv5yf0GK5TonxsgsM1jR4f0zPDwuMbbiYNnf5723gBUozrafCG49v7xc45QP%2FV4JX7S77nuNICibxj3XqHNnt0C%2Fx1P9%2BXKfrHKcVZTVqA9ezmmoG2I1O4MhNZipbxq3iN24bz%2Bp7bslz7Hv2%2BhxYH2ySBuY9zJ6pPlqDuEl5Cju%2FxFMkU%2B1s2fry1yt3YBkRXJxPMRVWVtvL8HBUbb%2FeCusyxbPd3av1VO2uxvX8suwIgA65E%2FRo%2FO0JaRDob5IfElX%2FBIPeXS%2BXUf6xGlp88U4QN7%2FSAzOWxQshptE3Io7vrNVLZcufZ8W%2B8E5arHoBdFBaRxpVD6Q53mEB3IIcQcZgQrU%2BJAaCHHr2lYZIxbo95ae7fYiBopb0cIsI2mNEmVbnXLLSZSazpuYEgqihopswb7mTgQBtVhVMKDU1sEGOqUBjrm5HfNBl5gNcl6XaAh7BN6NwH4PVyZCcVpn9xj%2Fv%2BtPd6lW%2BhbFtaoDfTdpmN7lg6cZpzdBofVmrAG9p03lgPQlM9u%2BCpczgLHDKmbTasch5Eucstrj061%2B%2FBVo2f3yPM91XcUQgP107IckSBI%2BkKS%2FJuValmYoMjGee8vIPxsb8KHycw%2Bbg5g3aONP3OeXW%2BCESrglK4wKg7yFpgC%2Fks02R2kv&X-Amz-Signature=e36979cb8ceb0150f2ce94609d8f7130e8534b453df8448f77f8e50e42022c99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI5IQX66%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmL2wCWc3MbRc1BOg2X8bjOUDv3OcqBXxq3vsyOb%2Fz0gIgd6i6y31lghmY8iGaZ1CSxFEd5mCIC3o4p66rUatbEZgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAlnnSP%2BGTmaykIguircA9eVcP%2Fs4R6NUMTRiWPbXGrTEN4q1hTAvkSbwOFWRwSJQ86%2FZmFGuBilhOniJ6%2Fo1bbYjoENO29GZODCHLKJTkHY5imeY6hYB6HUFYEGtshkAUiipBWMYq5LpKyTSk9nUb5UxaEOqkbDSu3BCmrzWXyubATeTsltDWa7N8koUusxGDDWca5QLofjJ7EJdPzIStTAXv9j3HcHSHjK%2FE2IDKKlLGPIhdq1XVkGf1B0S%2FrPgsdZ34vcCM8d0E5U%2BYIRwiLLDD9XosbrFfNXFUUJK9mHhjWRrHp3MYYZQZ%2F94aMCbMrtPfAzpNJQSlNbykPlbBsTv%2FdKgrGhOWmmjTbDhkTAirKEoU%2BcHI6gs7wofXSFrBlZJjeqmeFldtCCNHzzb%2FVAnHl1I3zZk%2FzJWgvnEeM%2BZSduQ11dko29dooh%2BZ079aUl31EzSHtn1wZlXuQrxeIntzu%2FIVI%2Fz4qO2PdLGwLRITOaRxPPgG1SSxwISohRKJpOWLkUL8AuzHIRdopN1tHbDh4vMc5d81d4%2FzbgwA9aJQ%2Fel0xiCXQ2V%2Fk2oJlFivr7%2BNcbHo2W9qsN89%2Bo%2FpvCREvuOf2JHV2rRUwST%2BvAHfkDn%2BA7ucoZaMzeWmKmh7oYXlEaoAQFCeU2MJ7U1sEGOqUBZsRTIgkyQCR%2Ft6lGQDaO%2Fisod7gS2x5B1A4HiHCgpKfC2fOF7i30tpRkRBRiFnuNy7EXcvkbdbi2ZViAfCTZbkDw%2FTANG3qO0JiIseQdaxlMgWwR5wLABTtrjALpQA5eg%2Fl%2BGhduJ1qVm1gvdG8ZSxZwJU0iFokrJTkeFxxmbcoWEoTS4iM%2FhdqXfSfxaLHO8W%2FD%2FRZS%2FN4clGr7wb7j4a91y0xi&X-Amz-Signature=08d6991d7bcbc933ecbd9121eb5e46697398890ba4e66884caa55ff766d07c07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PY5YFGM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa380DFnTUFh2ilyHEGj7bt%2FQnWrQ70T1RsD%2FK95gjMgIgHvS0HTzPOwZRhVlwS5tYKNjR9fSsuWNfzPPv9px6Sboq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDH4GlZosvEZX7ppEGCrcA53UORmxmQ0GfL933s%2FqHzMuZM15ynDeq16OXGti0M551SZ%2Fw3SFSfsQLvw%2BZrPJ%2Bslu1Fky8YlKnZ47ifos2SHDw1DTilkQUBJA6xIzkg1hml9caCHiubn0w4qWDKa%2Fypd1zsQfyM2HHnGUZcdDgQd9XHMY3f4czrfioaT14T%2Bm4IYhxwuduSH%2BIjcrgLrEHJmuLMDWb33bLyHhdze%2F%2FiD%2Bt1nyTEmUB0TpiLx%2BxMFU4ioeXN87R9gjeCzaNZujuFCe8xXQ3CgU86UJS4Ta3p%2BcLKVUeThGqhE9VBWpxeoeyuGXSXA5pdXF57693G2oqFMM08v3rLdqcyHcxo6rmy77yf4LbgaUdbyTUd3eAZP5nKAYdYORxIUR%2FlSQjNu2NXzUrSHy3CmDsGggFxaWbthXLF0FySP%2BZuSf9kqCttw2%2FO1GaJ%2FWH5GFQUu2drI1aweqEMLn4qreVbtC%2FRYJ8ylz0GuR%2BxV1LgXq1PsXk%2BUOPw6sbo6PHsrEg05NnZvVVHfQwPQ3zwxJ0O7eF3TmHlAb2T1lgiBGEHk4HywgXqOi8b6SNhB14PvUBmnzZZIyLFiUFr%2FwOpaKwJVPZTKwhyNS1l%2FOCv4lm5b0y7Cz9hOnw2JXpat%2BYhk9OH%2FoMMTU1sEGOqUBfyUuVzHIyqHPCXoJKRVPjMkn8%2B8BHL7M4BrNvCUSXzcGOFzkFlxnbdiLNJ0RqE%2FrflPsbS%2B3ZRzdFATdymrv1qM4nEGAJUOWnccyWtU78CjC5%2BlS8VA9nEe45n%2B24AlLRK2WRTPy70EX4t1unMnjF3Btkj%2B1tjohhLjom6BAJ4uxOuFg5m5eOY9%2FmeeEn%2FEkKfJkD%2BdgySdO6NlFXBwMKOiQrNPr&X-Amz-Signature=17d452bc65a412975f1030f98fd8e53cfdb2a2997466eb68eb22e69cbfe3bbf4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
