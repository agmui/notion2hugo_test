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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYVAXU3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDWkmDs0p3m4u7twdVnQfu6HDBzR%2BL5UhmlWvAs6xHwawIgV341HK8qmj8tuZxQrDMn2lgxPXdG16PYqTHe%2Fwbh1pwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDafbfUMFBz4XEBGCrcA2tAgC5sB3rjyut5kAsfZZ6EIIJD4werD9gSVR4LZST1V8p55OyN8bCg8%2FaPguH8jiJBisFiFG6JaW4VUP4M6A2lt94MucpGHdehxZX0Nl2tmCHvqS4hIYG4TqYpwq%2BaJVLZWwaDqsxe4I%2BE8Td7ag6SP7ySnfs4yq55piX7zr7HAdLsm7t%2FPNmWLlma8nJp6q%2BRSYEbQzQpq%2BcaZ2JDnzIGKMWIN6iZMDDeZqmPc5BHjOLpKCK50QSN5ic1VI18ezv0tVORqcB6TDeZP1D3u%2BNYO3l4UHGQtcLslES42rK5elOJM5tfAjyrA2ARXvsIEBuq4Y3KOeyx9RH1I6l1jCB6M%2FPDjChmohaEJssY65OlBWiozYp59K7rl5HZd41g9lUomWg%2Fi47xGx9DnmVXOpIp1EV7tRS3yL1zYuqJSEgj%2Fk2Ju3tIArdPojF8aNn6OgD7Mnf9YYQfegZiu9m2hRJHoXLCg6ErULjsywZ7JW%2FK%2F8yq%2BtkzPagefE2pZcWmSr%2FrvyrBZR54ePdIDJ%2FaY1MNFTH%2FJNZFye2JO%2BuXe7huir3wWEfVwhngcILSc19UB6EupBS6JuZCVsZymd2zhIFmvTXHivRzQsF88An4bwP6WZIEu%2FNbuRNusocZMIPrhcEGOqUBIYUYfV%2F3wy3PN4%2FuJWBiuhh5psFEDkG0TZkBc%2B44cEiQgwnbOzd%2BcAviF2cpKiFH0d%2BPVT3LV4PnnJskVs6fsj%2FyHyb%2Fh2f3sHn4ew83PjT0L5oGsDlzvxYm8YfMypC%2Fi000cH2NYhrkxqmQz3WFmUY2Pgk%2FdodEHfEFMHKnaHndq%2BrR%2B%2BFPnOR%2FoLr6xu%2BVvYTmG2UWn7L6Y4TBmRCQg5R4k40c&X-Amz-Signature=ba4b692fed3dff6ee86917505070aac5786ef327871300c251301fb99b50b744&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYVAXU3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDWkmDs0p3m4u7twdVnQfu6HDBzR%2BL5UhmlWvAs6xHwawIgV341HK8qmj8tuZxQrDMn2lgxPXdG16PYqTHe%2Fwbh1pwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDafbfUMFBz4XEBGCrcA2tAgC5sB3rjyut5kAsfZZ6EIIJD4werD9gSVR4LZST1V8p55OyN8bCg8%2FaPguH8jiJBisFiFG6JaW4VUP4M6A2lt94MucpGHdehxZX0Nl2tmCHvqS4hIYG4TqYpwq%2BaJVLZWwaDqsxe4I%2BE8Td7ag6SP7ySnfs4yq55piX7zr7HAdLsm7t%2FPNmWLlma8nJp6q%2BRSYEbQzQpq%2BcaZ2JDnzIGKMWIN6iZMDDeZqmPc5BHjOLpKCK50QSN5ic1VI18ezv0tVORqcB6TDeZP1D3u%2BNYO3l4UHGQtcLslES42rK5elOJM5tfAjyrA2ARXvsIEBuq4Y3KOeyx9RH1I6l1jCB6M%2FPDjChmohaEJssY65OlBWiozYp59K7rl5HZd41g9lUomWg%2Fi47xGx9DnmVXOpIp1EV7tRS3yL1zYuqJSEgj%2Fk2Ju3tIArdPojF8aNn6OgD7Mnf9YYQfegZiu9m2hRJHoXLCg6ErULjsywZ7JW%2FK%2F8yq%2BtkzPagefE2pZcWmSr%2FrvyrBZR54ePdIDJ%2FaY1MNFTH%2FJNZFye2JO%2BuXe7huir3wWEfVwhngcILSc19UB6EupBS6JuZCVsZymd2zhIFmvTXHivRzQsF88An4bwP6WZIEu%2FNbuRNusocZMIPrhcEGOqUBIYUYfV%2F3wy3PN4%2FuJWBiuhh5psFEDkG0TZkBc%2B44cEiQgwnbOzd%2BcAviF2cpKiFH0d%2BPVT3LV4PnnJskVs6fsj%2FyHyb%2Fh2f3sHn4ew83PjT0L5oGsDlzvxYm8YfMypC%2Fi000cH2NYhrkxqmQz3WFmUY2Pgk%2FdodEHfEFMHKnaHndq%2BrR%2B%2BFPnOR%2FoLr6xu%2BVvYTmG2UWn7L6Y4TBmRCQg5R4k40c&X-Amz-Signature=ce773376c896f2b9e489bc62482a17a300ca4102acbb2179e52de5750b278597&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYVAXU3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDWkmDs0p3m4u7twdVnQfu6HDBzR%2BL5UhmlWvAs6xHwawIgV341HK8qmj8tuZxQrDMn2lgxPXdG16PYqTHe%2Fwbh1pwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDafbfUMFBz4XEBGCrcA2tAgC5sB3rjyut5kAsfZZ6EIIJD4werD9gSVR4LZST1V8p55OyN8bCg8%2FaPguH8jiJBisFiFG6JaW4VUP4M6A2lt94MucpGHdehxZX0Nl2tmCHvqS4hIYG4TqYpwq%2BaJVLZWwaDqsxe4I%2BE8Td7ag6SP7ySnfs4yq55piX7zr7HAdLsm7t%2FPNmWLlma8nJp6q%2BRSYEbQzQpq%2BcaZ2JDnzIGKMWIN6iZMDDeZqmPc5BHjOLpKCK50QSN5ic1VI18ezv0tVORqcB6TDeZP1D3u%2BNYO3l4UHGQtcLslES42rK5elOJM5tfAjyrA2ARXvsIEBuq4Y3KOeyx9RH1I6l1jCB6M%2FPDjChmohaEJssY65OlBWiozYp59K7rl5HZd41g9lUomWg%2Fi47xGx9DnmVXOpIp1EV7tRS3yL1zYuqJSEgj%2Fk2Ju3tIArdPojF8aNn6OgD7Mnf9YYQfegZiu9m2hRJHoXLCg6ErULjsywZ7JW%2FK%2F8yq%2BtkzPagefE2pZcWmSr%2FrvyrBZR54ePdIDJ%2FaY1MNFTH%2FJNZFye2JO%2BuXe7huir3wWEfVwhngcILSc19UB6EupBS6JuZCVsZymd2zhIFmvTXHivRzQsF88An4bwP6WZIEu%2FNbuRNusocZMIPrhcEGOqUBIYUYfV%2F3wy3PN4%2FuJWBiuhh5psFEDkG0TZkBc%2B44cEiQgwnbOzd%2BcAviF2cpKiFH0d%2BPVT3LV4PnnJskVs6fsj%2FyHyb%2Fh2f3sHn4ew83PjT0L5oGsDlzvxYm8YfMypC%2Fi000cH2NYhrkxqmQz3WFmUY2Pgk%2FdodEHfEFMHKnaHndq%2BrR%2B%2BFPnOR%2FoLr6xu%2BVvYTmG2UWn7L6Y4TBmRCQg5R4k40c&X-Amz-Signature=7eb10f538b138f76b454019c932dea463cc0242210361b888b04d0ca2e0c4b42&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU4X62M%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDdGy5BrWAMHonhNEjTT36kZJ0XKcok5N%2B6%2Fh80oLXiqAIhANV97CK9BECGpfMuny6%2BMkibuCzvbvz%2Fw6ZUE22Fs3HMKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGzXinY4CV8f3YLMYq3ANBjWXqH3%2Fyk4cjyZHmKBKzodV55ulvEqRawBmWpTfh3DZ7i9mV2djXvBa0AOXY5Tr2Au4X6OD2gGoQ0wno4uRLBZTIBMIZWCT1byrrJo0Hba3LusoaRw%2Bv%2Fay4QFY%2FHlEZQAk9nu8QvsvM4KopCGhuEAPHENaL1VZfdaV5FgMH4y8eINDcsyg%2FwpuLATLgIdycjnRwQCF0JdC9kb5qJvoGa7vhwXdaxMEIVzZZm7idBEoHbXot3li%2BP7KViIXn1D7PKOnOVsYIR27U6sE9hBHqX7Jf9P7pFDRYCZvAykLRixJv5i2nr%2BySnfN%2BOCBd1KCJHb6PQPErwPzhL3AwBFOpYKOzwohUQRna70BG1MlMAKTSUv4ic9bZs023Je%2B0LzGwp9WMUB%2Fq7aqpiblYhrYbIDC%2F%2FHuNn8fZ5%2FmEgolyweroKD%2FSU1%2B%2FbaYixXxtPoyq%2BtVOousk3FGCg9lWCPmPhAxlk0BVLwYaJQHV%2BosfIHJaIQwZdQU%2Fu3GE7wxYISS%2B72bHe8h8myYxfrtCg4CNNtWcR0w1jaXlH7uQ1f9IQX9mmRqYxj6qtjhr8M75naa6RO%2BxG4XyoFQGDUSap1nu9UnbAwbHshXazF25hO9RwcfPaBrYS2DrJMcWNTCshIbBBjqkAbwTca9vuq9Zer8Ag2Wk9ysIq7QyxaL9iGpKQLzzvchhEooDIMLera%2BukKNanFw5Fbxap5pZz4Yk5Go5snOnxZdkE1%2Fb68kUBasFInW0tluiHgby7nSc4mr44KycvWWhGc4LY8w1fwPM%2B6%2BFCuidi3KrywgBpz88%2BHjKRevLCrQ35GDwe2BZbruwQ04Sff8X0TE1sPtdXWsUskVT3Gvg1KaQ0ygB&X-Amz-Signature=40544d2bba71c92309657057f07671f64f55d48a4a93dd90051acc565f9c9c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXNYC5F%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAZ8Gp%2FnJ4RsFHlFtDNE8aAvGmfLVx150691A8T7XiVHAiEAmySs6fQ7KBYGyFfEZNwVYnepZWMNyifKqYHfdFFCN%2B4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FoxWyXB8TmuRtc2yrcA6lgSIuCmO6U5TU2Quhpm4gOmYXSD5i%2FFcw%2F%2F3V8zgoitOqhM5AXTG2HqhRI8c95Oo1bhlmBk2mtSvXdYlMw2BdFkb420U%2FR7hbWpKDb3VlGs1Tq0vu8EF55%2Bv0ke%2F1I4mAVaLhEv3PX1aQOTfNQy5lxGIY05RRamaincrjHqSD7aT5hrXsYO21XiKLDO5X6auqTsPRtv1wLPYnJ558KZNCpVU7Yf7IkxA0qlhxFGyhHFit2UnOzHMGW%2BBDAVjgS5mPiLM8z0qtyPH1cQhqEPw0t5CmESWBeas9lbdxCeNYO7lilKCfdhEjLebfcPtEVhVHZTFzs968yMb60JB9Xa4gYOi0QSHlGsw6flTs83vb9vOOuujsbwISMO1qFfNPecZ8%2FGX8mk2jnISYmhTlnu46FkAETlYZtuoMDO4Jp26I3lNki8149tj4m5DFrHa5OApEpMmSMlZKm%2B2QGCOIhg66lSIDedklJefzohowuho%2Fq7uREZvRNpf0Znz4sCBSBQ9csU4VxdF8HgYdFfv%2FtsVZy6SdnyBLkyN6thdFrLliIoVgEfrsLeBgRG%2Bh6GzrXUKT%2F6BcseRfPWtGSjiKk1VyhRsYTcFoGCJKBe6lh7MZosz5g8i358JPlrMu0MJaEhsEGOqUBazc69MfRYNPT03fypOvXIz8lDhY0ld7xbVI4OgyiwOLge1UHRBZFqKPmL0BtIGV39uZ9RcswSJUleZghtNLAU3u4FzHfw1X59ItrYFsfzS5pvz5y%2BxC%2FSXr4Iqg7yXIa6yBIFRSflosqYbNRcEX1DsILhp5umB%2F0xnJ40lrGQDaXILYKcbTv7vSsU5ByXDa2DUtE0Uz4%2BdyfgB%2Foe%2FWW8rDTeJLy&X-Amz-Signature=c1951f885c4877f4c0765825988659112d3a76feff34382c3878de5720fb32a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYVAXU3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDWkmDs0p3m4u7twdVnQfu6HDBzR%2BL5UhmlWvAs6xHwawIgV341HK8qmj8tuZxQrDMn2lgxPXdG16PYqTHe%2Fwbh1pwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDafbfUMFBz4XEBGCrcA2tAgC5sB3rjyut5kAsfZZ6EIIJD4werD9gSVR4LZST1V8p55OyN8bCg8%2FaPguH8jiJBisFiFG6JaW4VUP4M6A2lt94MucpGHdehxZX0Nl2tmCHvqS4hIYG4TqYpwq%2BaJVLZWwaDqsxe4I%2BE8Td7ag6SP7ySnfs4yq55piX7zr7HAdLsm7t%2FPNmWLlma8nJp6q%2BRSYEbQzQpq%2BcaZ2JDnzIGKMWIN6iZMDDeZqmPc5BHjOLpKCK50QSN5ic1VI18ezv0tVORqcB6TDeZP1D3u%2BNYO3l4UHGQtcLslES42rK5elOJM5tfAjyrA2ARXvsIEBuq4Y3KOeyx9RH1I6l1jCB6M%2FPDjChmohaEJssY65OlBWiozYp59K7rl5HZd41g9lUomWg%2Fi47xGx9DnmVXOpIp1EV7tRS3yL1zYuqJSEgj%2Fk2Ju3tIArdPojF8aNn6OgD7Mnf9YYQfegZiu9m2hRJHoXLCg6ErULjsywZ7JW%2FK%2F8yq%2BtkzPagefE2pZcWmSr%2FrvyrBZR54ePdIDJ%2FaY1MNFTH%2FJNZFye2JO%2BuXe7huir3wWEfVwhngcILSc19UB6EupBS6JuZCVsZymd2zhIFmvTXHivRzQsF88An4bwP6WZIEu%2FNbuRNusocZMIPrhcEGOqUBIYUYfV%2F3wy3PN4%2FuJWBiuhh5psFEDkG0TZkBc%2B44cEiQgwnbOzd%2BcAviF2cpKiFH0d%2BPVT3LV4PnnJskVs6fsj%2FyHyb%2Fh2f3sHn4ew83PjT0L5oGsDlzvxYm8YfMypC%2Fi000cH2NYhrkxqmQz3WFmUY2Pgk%2FdodEHfEFMHKnaHndq%2BrR%2B%2BFPnOR%2FoLr6xu%2BVvYTmG2UWn7L6Y4TBmRCQg5R4k40c&X-Amz-Signature=bc1dabcec3857b6f7cb57c5af18a0d86ad02fa625239edbfc115286996b9531f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
