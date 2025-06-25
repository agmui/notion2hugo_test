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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PNIEEK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCHkrxRJXNIMVxAwwo%2FecZkfdGbSNcy5pIv%2FX1XYeel7QIhANW8idV35ZVpOtikOJjIoviXSrqC96bktIOQ%2BVLn8mtHKv8DCEYQABoMNjM3NDIzMTgzODA1Igz%2FOIsQyYopidyvizYq3AOmG7JbOowMtm4kmSl6ZkmMt25rGlcLwufXt63BJbJBo5jd36HU9TmdDbq%2FuMJyo4DrsrcEFjmgYUSGWP6iv2onuK%2BtmqBk%2F1gpNc2WLqb3iAPFX3DVUT77FJwoSvQgZ5PzYQOgaEjBqvWwuq1Pt1m1oVNZ2IsKJUYrjFBPWADPF7Y2ctAk1McN397ktd%2BdjUmZDZ9djrGQQqU42XfrJs9V4EblSasIh4WMVhTuNUqu3OQ2rUUnoReSM6Ajv9O7zWk2%2BTzILM62GNEGKoLH5u%2Ff7DvOmxYoat3qHp6yZY2lhAHctb9lVsps7GcDxFw9ibMktmrqN9C2j19rSPccIqE%2FS3RrHlh68p9WB4eCqDqZOWLPXD2aygRls%2Ff9DfgpvoBqonFzGLwxkWTwAvEjxeIN9%2Fo8dUkzhT8rvrVOdEt%2BSxBOCHnwXEq8rjgBELiaIebTo3fpXAsvD9WzqoxS%2Binb6Sb83gELiehyDF3B%2FaLEITXjDZSuS1%2BzCZC4l8F0OeQkp1dR1Voa%2BrNOLtNG0xOVl8LCW6LGqP3RFAjnv6VJrffpmDVn%2BsWG9mOJxU86b3kG4u14oXoU9FASEs0nsGFXbC26vrdhvFlLqnrd6kuObX%2FoRNj6qiOVlwKIljD07u%2FCBjqkASSt67ctC6qqnk%2FiKeZEY%2FhxuTnYaoTS4UYj6wpflPJsFSlDOK7Z%2FXK6MdCCLGDJGzTQu0xxded%2BhQzYE27Z9pHFxiV3h3al4ZWwUGNcGJXUkoftJE5jqL9X2FGLQhpC%2F48ki%2Bb%2BuRxBJnmI%2F%2FdA%2BUJPSKphe4BQNi6eOX6F%2FsGr0s85mgiv8YB7Iu4ILlGqZzZpZXDbOuJH2Z8UJ4G2nyt7hhOQ&X-Amz-Signature=e1afa25bc311271d1a2671b9b9ecdab2245bd06a947779778ebe121335d30454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PNIEEK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCHkrxRJXNIMVxAwwo%2FecZkfdGbSNcy5pIv%2FX1XYeel7QIhANW8idV35ZVpOtikOJjIoviXSrqC96bktIOQ%2BVLn8mtHKv8DCEYQABoMNjM3NDIzMTgzODA1Igz%2FOIsQyYopidyvizYq3AOmG7JbOowMtm4kmSl6ZkmMt25rGlcLwufXt63BJbJBo5jd36HU9TmdDbq%2FuMJyo4DrsrcEFjmgYUSGWP6iv2onuK%2BtmqBk%2F1gpNc2WLqb3iAPFX3DVUT77FJwoSvQgZ5PzYQOgaEjBqvWwuq1Pt1m1oVNZ2IsKJUYrjFBPWADPF7Y2ctAk1McN397ktd%2BdjUmZDZ9djrGQQqU42XfrJs9V4EblSasIh4WMVhTuNUqu3OQ2rUUnoReSM6Ajv9O7zWk2%2BTzILM62GNEGKoLH5u%2Ff7DvOmxYoat3qHp6yZY2lhAHctb9lVsps7GcDxFw9ibMktmrqN9C2j19rSPccIqE%2FS3RrHlh68p9WB4eCqDqZOWLPXD2aygRls%2Ff9DfgpvoBqonFzGLwxkWTwAvEjxeIN9%2Fo8dUkzhT8rvrVOdEt%2BSxBOCHnwXEq8rjgBELiaIebTo3fpXAsvD9WzqoxS%2Binb6Sb83gELiehyDF3B%2FaLEITXjDZSuS1%2BzCZC4l8F0OeQkp1dR1Voa%2BrNOLtNG0xOVl8LCW6LGqP3RFAjnv6VJrffpmDVn%2BsWG9mOJxU86b3kG4u14oXoU9FASEs0nsGFXbC26vrdhvFlLqnrd6kuObX%2FoRNj6qiOVlwKIljD07u%2FCBjqkASSt67ctC6qqnk%2FiKeZEY%2FhxuTnYaoTS4UYj6wpflPJsFSlDOK7Z%2FXK6MdCCLGDJGzTQu0xxded%2BhQzYE27Z9pHFxiV3h3al4ZWwUGNcGJXUkoftJE5jqL9X2FGLQhpC%2F48ki%2Bb%2BuRxBJnmI%2F%2FdA%2BUJPSKphe4BQNi6eOX6F%2FsGr0s85mgiv8YB7Iu4ILlGqZzZpZXDbOuJH2Z8UJ4G2nyt7hhOQ&X-Amz-Signature=a35c7c2666fcbaaee6e317de7a926873d5f58d5d0e664d90f324ebe62da2e86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PNIEEK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCHkrxRJXNIMVxAwwo%2FecZkfdGbSNcy5pIv%2FX1XYeel7QIhANW8idV35ZVpOtikOJjIoviXSrqC96bktIOQ%2BVLn8mtHKv8DCEYQABoMNjM3NDIzMTgzODA1Igz%2FOIsQyYopidyvizYq3AOmG7JbOowMtm4kmSl6ZkmMt25rGlcLwufXt63BJbJBo5jd36HU9TmdDbq%2FuMJyo4DrsrcEFjmgYUSGWP6iv2onuK%2BtmqBk%2F1gpNc2WLqb3iAPFX3DVUT77FJwoSvQgZ5PzYQOgaEjBqvWwuq1Pt1m1oVNZ2IsKJUYrjFBPWADPF7Y2ctAk1McN397ktd%2BdjUmZDZ9djrGQQqU42XfrJs9V4EblSasIh4WMVhTuNUqu3OQ2rUUnoReSM6Ajv9O7zWk2%2BTzILM62GNEGKoLH5u%2Ff7DvOmxYoat3qHp6yZY2lhAHctb9lVsps7GcDxFw9ibMktmrqN9C2j19rSPccIqE%2FS3RrHlh68p9WB4eCqDqZOWLPXD2aygRls%2Ff9DfgpvoBqonFzGLwxkWTwAvEjxeIN9%2Fo8dUkzhT8rvrVOdEt%2BSxBOCHnwXEq8rjgBELiaIebTo3fpXAsvD9WzqoxS%2Binb6Sb83gELiehyDF3B%2FaLEITXjDZSuS1%2BzCZC4l8F0OeQkp1dR1Voa%2BrNOLtNG0xOVl8LCW6LGqP3RFAjnv6VJrffpmDVn%2BsWG9mOJxU86b3kG4u14oXoU9FASEs0nsGFXbC26vrdhvFlLqnrd6kuObX%2FoRNj6qiOVlwKIljD07u%2FCBjqkASSt67ctC6qqnk%2FiKeZEY%2FhxuTnYaoTS4UYj6wpflPJsFSlDOK7Z%2FXK6MdCCLGDJGzTQu0xxded%2BhQzYE27Z9pHFxiV3h3al4ZWwUGNcGJXUkoftJE5jqL9X2FGLQhpC%2F48ki%2Bb%2BuRxBJnmI%2F%2FdA%2BUJPSKphe4BQNi6eOX6F%2FsGr0s85mgiv8YB7Iu4ILlGqZzZpZXDbOuJH2Z8UJ4G2nyt7hhOQ&X-Amz-Signature=0d7f0c6a62b25a9be248740be60bfbe3c28bc850e92eced0628dd38681556378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YVET6C%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIA4QV0yG7E947oGlP90L%2Bvvp4RE%2BMR%2BqnRsxiKO26LCdAiBiymOb%2BwB6wYJ%2FzkQnmHg3hsYWN1KcqTPIGplmAWXzTCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMDRcg9hfmLKv8ygo6KtwDDyWDbRd7Eobs6Pa26oEGOcMDo2SvpT8OOmcvawQ28Jz31jUYw7oMQaWIG9jGLgK074zt3z0QYH4BQ%2BYrXUYJEg6zE1jMA6NEn0lyQ0XvUDT5T5xHXfEVrLutvkvg6xRZfbzyOKoFbWCx9Rg1YysbArHVNX7Yw4xLDoRCZHM6yByIJFBC7tH7m4u40YPPcRCZeTwEMSCrLrWArvLM6d%2BETJLbP7kEWA9NJyl6Ykcxy4K1iTXB7wX%2BocZYiwulhK862%2Fr3LkydQduOP2jyl5Vs5MoXi9pn%2FTAYeSPYR1ipxKgYqHxbImTCEgAHf7z9fKGNOTS7UzxHFiy1HB1QtB5fiH2GXc1CWqjC6YbWn1x%2Bzt9BWS%2FofLNU0Mc8rrV2amT48LDgzhA%2FbpQMvKcDlh3FBj8aFWBVHqHcZjf7K98wirqv34m2RQADh%2FAA76yC9%2BuAvmsAE2Hlh%2BbHxmMTCmzuA1SrziH0ImvDB7rO4u6c6aDOE9x%2FizQWoCZKugdbi6dRHOc9IQKS1sMf44a5msuh35RRRgzHygcEJlB8C%2F8qlKvo17cdno%2Bg5323hF1LkeGqopO5uF0CL%2FRe74LefXYhbY%2FdKeC1wUYAk12Uidh4qPCnvoB9iVNES8YsTkwwsO7vwgY6pgFS2N4sbw9mxfc4jMWQHdB8lmH%2FhnSrsG%2BIukpHOy%2BiGVBQS%2BFGcy63Edei6sN%2B64wG8C%2Bwu2T%2B6uVu6b0E8Hlzm2ezVy354N82ny3LgotjQlOV1%2Ff20S8blaJCRi%2BD7G26TlYky%2BqAK%2FYC0lZcJ8R4A3gidxI4PYUku7ZkUacyN0pQWaUhwqUGiaYP%2F3Seka1TtSHxy6YU5a%2BcekmSIyq2s27pHXET&X-Amz-Signature=2f673a0b63cb9aefa35d7b6f18fee995545c978aa85ef67aacae2073f3a8f069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIMVS5J%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQC8hJDPHFBS3oISIFNPoZRO4IPzDzbHFSrWtqyMYfj0%2FgIgMMBFILp4SjTMbRewQ8GcYqHzGjLcBUWkN%2Bm7G1VfNf0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHf3u3QKRQmv8K4TmircAyUOiYWe5Z%2BuZ2Dd%2F%2BPvvY8UUKMTE1u5S4DEjjr5rNKYXQ%2Bn0OvOJ%2ByNL5%2F7rFPyJ%2BLZXEH0GrLEcL76KBytsa3YHHqKxx1Zhs4fBSBbi%2F3RvZZMy5PgMHay%2Bl82r5ihiLrwcZe3o7qvQ5oKR3Tv5ckxPp14PEtCq54qc0DJmhiZZ1Qdngc5dmo1VrpJsFDDouexIMDVhD8cvtv0seQLRnwcILqfnfE8nk%2FkTRuGVRVDPRCB9UDpslN9qYo20uJlMVVNsCN%2BpFvYbWfIyZ%2B78p6euXQkx%2FT8PMY1c%2F%2BIeP39d0uLuQ0wv0CF%2FLhuQbMvSX1o3OOQWVwSjMDKVv7STHmg8pKVRWgsljHLXtFRDb9NF8C8MVRmsWvMr7iLl9HabnH5M0BScoqMi%2Bh7bc5sed2f0lVLDCW3okf5tmtfaS5oMuxjN9a54OAUqAqMYMyp%2BRM1rBoHWKldqbsfDkblMQ32KhldYKkxWoGH5qzewYmHnbMtjdGSWwmADLFF04PPEj4c5%2B2ksSYUlDrWHIj%2BfVeE213Rg%2FdGZkV%2BXxrnOVnNaYkHfFIycIE80w6FvQd7h5jVJDA%2B7oyYdIuXJe48YHuUjNdhblRuKq8b0651fJGtjya6Z0NAS%2F61pgH4MMvu78IGOqUBvnmyXOvzmih94ks%2FJoVrU3bw%2FIF4GxQ3V3CAnlt2iIv%2Fr2zqvq4SkUS2Ax1BU1Qq84mrCOgIu68GJZ3dLtvGAlMGsP%2B8FgbGD9%2FNPfFPCiptzNoccEz1Cu6hR1WWqQN3Nmnnf%2F7UE0I24JrHpz%2BXsnhHG5qexevn7f25kuezagDwbUnSKCU3zy%2F2yudk%2FtuI7DiSxWUYZGRK5InG48L9y8R%2BHHx0&X-Amz-Signature=8df7e7c8fb3cf39ce0a5d6988a9843a97683ee62a97487689de70538211eb380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PNIEEK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCHkrxRJXNIMVxAwwo%2FecZkfdGbSNcy5pIv%2FX1XYeel7QIhANW8idV35ZVpOtikOJjIoviXSrqC96bktIOQ%2BVLn8mtHKv8DCEYQABoMNjM3NDIzMTgzODA1Igz%2FOIsQyYopidyvizYq3AOmG7JbOowMtm4kmSl6ZkmMt25rGlcLwufXt63BJbJBo5jd36HU9TmdDbq%2FuMJyo4DrsrcEFjmgYUSGWP6iv2onuK%2BtmqBk%2F1gpNc2WLqb3iAPFX3DVUT77FJwoSvQgZ5PzYQOgaEjBqvWwuq1Pt1m1oVNZ2IsKJUYrjFBPWADPF7Y2ctAk1McN397ktd%2BdjUmZDZ9djrGQQqU42XfrJs9V4EblSasIh4WMVhTuNUqu3OQ2rUUnoReSM6Ajv9O7zWk2%2BTzILM62GNEGKoLH5u%2Ff7DvOmxYoat3qHp6yZY2lhAHctb9lVsps7GcDxFw9ibMktmrqN9C2j19rSPccIqE%2FS3RrHlh68p9WB4eCqDqZOWLPXD2aygRls%2Ff9DfgpvoBqonFzGLwxkWTwAvEjxeIN9%2Fo8dUkzhT8rvrVOdEt%2BSxBOCHnwXEq8rjgBELiaIebTo3fpXAsvD9WzqoxS%2Binb6Sb83gELiehyDF3B%2FaLEITXjDZSuS1%2BzCZC4l8F0OeQkp1dR1Voa%2BrNOLtNG0xOVl8LCW6LGqP3RFAjnv6VJrffpmDVn%2BsWG9mOJxU86b3kG4u14oXoU9FASEs0nsGFXbC26vrdhvFlLqnrd6kuObX%2FoRNj6qiOVlwKIljD07u%2FCBjqkASSt67ctC6qqnk%2FiKeZEY%2FhxuTnYaoTS4UYj6wpflPJsFSlDOK7Z%2FXK6MdCCLGDJGzTQu0xxded%2BhQzYE27Z9pHFxiV3h3al4ZWwUGNcGJXUkoftJE5jqL9X2FGLQhpC%2F48ki%2Bb%2BuRxBJnmI%2F%2FdA%2BUJPSKphe4BQNi6eOX6F%2FsGr0s85mgiv8YB7Iu4ILlGqZzZpZXDbOuJH2Z8UJ4G2nyt7hhOQ&X-Amz-Signature=1c494abd77341c99773644cca7d42fcf62f0cb9f0af92a3e29bd989afdf05297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
