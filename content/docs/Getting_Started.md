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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CK6HVE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIEqsWYV73%2BDIjyABSTt1rxfFzNN%2BPQQcRf712206ohQlAiEAlKANEWZylTbMQO%2Bmy7TiRZZnHNpTahkOA05%2Bt2zjmasq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKZDxFZ%2B9p968EVQfircA5gjF5ThwnbMqiGPQSdw8FWfIYhhZt%2FQ9qJVjQgKWcRH%2FcTOqMiHUI4I6VY6%2FC99loElX7c0VikNde6Qt4EhDvRJoih15otIWI80ZXl1L59ycFqdvmT5MoP7YAGBEgHwUOC0gW0cr%2B7R1Wsilw0jkEvxsTOhvC25MZcOWLjKeL2JYNsuKP1L%2B2v%2FQsEKu4f7AAGWMg9yuX%2FzguKKR3WkzdIpv2BH%2BExM6hYilA6gesSDZDgmXUFkoGPXhQzdgpFv0On2uUHyplUSHlJvCmx0JWNwzIhGonP%2FBwQq8htHHOkjkKQ5L26w6213NerJs1Do%2FTQSTiauCeTmgxngcXfu1EDwzp0BbDxSSMg9je%2BHOobDA%2BJ1zySaVL1RW5pEIH%2BAoPmGx0ZfDwemSQHl9JKBOmuawFJUYxU%2B630GNPzTd%2Bt%2FBRTX%2FcQK%2B7QLJU9TwFgxsKh%2FZxPTQEkPGNakWa2baytZhBB8oGubBinN31SE%2BFRVh0jHWtTf8Eyai5LQ1dV40HlqFHhwb1IfXa8B3Oy9wWinyR0aUkLrEgASa9M3VTB%2FkUrcvvECiy3o39BDf5cFdpYCQQXmzOsGQbpHMdjgAMqE8whzTRDdLY%2F982LCRLnjQK2f5TXsdK7YB1LUMOGE1MMGOqUB1WaxlTSdihA1IMasP7gJN%2BEc%2Foo8opHdY%2F6zr537I9mwtEiJryaHs2vSMScMRhbYKZcaZAsVQnkPjV6PufcShzX5kXz1GSA4Fr7HhJxlLu3ICRImnU4NXROu%2FwEg2ikuSY3zpFLClAE%2BwyqEaAs1BBxCFzyCDNj9SDCxZbhi5IwclLvbGwqG0lfBYwAyidCpkOOEa74UHm23pCb40BSYi%2FOBFnfl&X-Amz-Signature=e46986592a12bf9a490779117807845a05f567d35a7bacf4beacb8ca628ebe68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CK6HVE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIEqsWYV73%2BDIjyABSTt1rxfFzNN%2BPQQcRf712206ohQlAiEAlKANEWZylTbMQO%2Bmy7TiRZZnHNpTahkOA05%2Bt2zjmasq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKZDxFZ%2B9p968EVQfircA5gjF5ThwnbMqiGPQSdw8FWfIYhhZt%2FQ9qJVjQgKWcRH%2FcTOqMiHUI4I6VY6%2FC99loElX7c0VikNde6Qt4EhDvRJoih15otIWI80ZXl1L59ycFqdvmT5MoP7YAGBEgHwUOC0gW0cr%2B7R1Wsilw0jkEvxsTOhvC25MZcOWLjKeL2JYNsuKP1L%2B2v%2FQsEKu4f7AAGWMg9yuX%2FzguKKR3WkzdIpv2BH%2BExM6hYilA6gesSDZDgmXUFkoGPXhQzdgpFv0On2uUHyplUSHlJvCmx0JWNwzIhGonP%2FBwQq8htHHOkjkKQ5L26w6213NerJs1Do%2FTQSTiauCeTmgxngcXfu1EDwzp0BbDxSSMg9je%2BHOobDA%2BJ1zySaVL1RW5pEIH%2BAoPmGx0ZfDwemSQHl9JKBOmuawFJUYxU%2B630GNPzTd%2Bt%2FBRTX%2FcQK%2B7QLJU9TwFgxsKh%2FZxPTQEkPGNakWa2baytZhBB8oGubBinN31SE%2BFRVh0jHWtTf8Eyai5LQ1dV40HlqFHhwb1IfXa8B3Oy9wWinyR0aUkLrEgASa9M3VTB%2FkUrcvvECiy3o39BDf5cFdpYCQQXmzOsGQbpHMdjgAMqE8whzTRDdLY%2F982LCRLnjQK2f5TXsdK7YB1LUMOGE1MMGOqUB1WaxlTSdihA1IMasP7gJN%2BEc%2Foo8opHdY%2F6zr537I9mwtEiJryaHs2vSMScMRhbYKZcaZAsVQnkPjV6PufcShzX5kXz1GSA4Fr7HhJxlLu3ICRImnU4NXROu%2FwEg2ikuSY3zpFLClAE%2BwyqEaAs1BBxCFzyCDNj9SDCxZbhi5IwclLvbGwqG0lfBYwAyidCpkOOEa74UHm23pCb40BSYi%2FOBFnfl&X-Amz-Signature=849fb1ba930f80deec39b67382436ab3cc48b53f616a5a7bd1c8e46d8289aa32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CK6HVE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIEqsWYV73%2BDIjyABSTt1rxfFzNN%2BPQQcRf712206ohQlAiEAlKANEWZylTbMQO%2Bmy7TiRZZnHNpTahkOA05%2Bt2zjmasq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKZDxFZ%2B9p968EVQfircA5gjF5ThwnbMqiGPQSdw8FWfIYhhZt%2FQ9qJVjQgKWcRH%2FcTOqMiHUI4I6VY6%2FC99loElX7c0VikNde6Qt4EhDvRJoih15otIWI80ZXl1L59ycFqdvmT5MoP7YAGBEgHwUOC0gW0cr%2B7R1Wsilw0jkEvxsTOhvC25MZcOWLjKeL2JYNsuKP1L%2B2v%2FQsEKu4f7AAGWMg9yuX%2FzguKKR3WkzdIpv2BH%2BExM6hYilA6gesSDZDgmXUFkoGPXhQzdgpFv0On2uUHyplUSHlJvCmx0JWNwzIhGonP%2FBwQq8htHHOkjkKQ5L26w6213NerJs1Do%2FTQSTiauCeTmgxngcXfu1EDwzp0BbDxSSMg9je%2BHOobDA%2BJ1zySaVL1RW5pEIH%2BAoPmGx0ZfDwemSQHl9JKBOmuawFJUYxU%2B630GNPzTd%2Bt%2FBRTX%2FcQK%2B7QLJU9TwFgxsKh%2FZxPTQEkPGNakWa2baytZhBB8oGubBinN31SE%2BFRVh0jHWtTf8Eyai5LQ1dV40HlqFHhwb1IfXa8B3Oy9wWinyR0aUkLrEgASa9M3VTB%2FkUrcvvECiy3o39BDf5cFdpYCQQXmzOsGQbpHMdjgAMqE8whzTRDdLY%2F982LCRLnjQK2f5TXsdK7YB1LUMOGE1MMGOqUB1WaxlTSdihA1IMasP7gJN%2BEc%2Foo8opHdY%2F6zr537I9mwtEiJryaHs2vSMScMRhbYKZcaZAsVQnkPjV6PufcShzX5kXz1GSA4Fr7HhJxlLu3ICRImnU4NXROu%2FwEg2ikuSY3zpFLClAE%2BwyqEaAs1BBxCFzyCDNj9SDCxZbhi5IwclLvbGwqG0lfBYwAyidCpkOOEa74UHm23pCb40BSYi%2FOBFnfl&X-Amz-Signature=c0e4bb94e0e6012cc93b5f9918b5bc8a4c1aa11cdd2d85f8e6852141e9378923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WAQX7V%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIC4YmbcHHuz0%2BmQhzbrHOxIKFxFxERyzqnRwTXROGGZiAiEA6MwIMKVM8iYtpzqAQLbhruX7wJYkapp%2BTZ0sHNnR2Icq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDGnJvCWVWCPTfAVOCrcA6iZnRoc3alpjRAHCxgIg4bXQ%2FCEhk2wNTFeKWRQ%2FlJDsb1SqSbMG3JLXgBqF6WBqxPml2B5E9eWtEh8cGVgoRywhbaSFHpdTqXZmC5ZUWgtgQuiNonb0iA4a8yeQRLLOE7tEtIWvVzTahxO%2BNt6wpiWo4Dx%2B5XmyURMlYosPctaIzHld7ZqvTZKQlGlMoGBCX1d%2FhjPAxrI4LAwv95G7IjjhDHix4kO2ur%2B1CTsjLkFFbT4WjgxZICSc46NNO%2F2%2FlZID13cXJRteajM31jUTGbLCgsGHT4oDoJNPWeQcH9dLyT%2B6DDVWk7wBuW6ya5jgadHTDO4ttiH6POx2s9pHozeHYVtfq9D613VaysLP1RmVdl%2BdUEdTz%2FXopGlprtv%2FXczzy0CtR%2B0hp29rDpFmZTDjw6a%2FJRyP9FG4PRdyk0mrgX09twMw59Wn7PSkB1O1EL4o5kNSPoYoy6ju1awPzEe0csbv6ALzLMEmhs205CrhfdNsS5dfkAhcxtlHzGTIP9dh41vGP15%2BAcDvx0mikjzaC%2FrDu7g8JRDSiUXRc4r1Vhh6sdUYlpptvTjuOhrTrs32m6mZlcx141Q1jrzlO%2B8RiSfOgMm6bGllLhCja20eouHZMHXeeReyHSnMOyE1MMGOqUB4Ef4atOEd4RMh7O61yxY9dbGszg3Odol6KAoDnGfp3GbBgxFtm2Qy2QnoPwQXPShwMy6iXNhZ%2FVzqv0yi6lmsbNB6m195iJK%2Fpe9%2BQTR8P2o06KqWFL8vYbj6WVdPNzWZuv6uc7VS58pxXvx0sKF5eUgqBSZ9YuLvQ8v5u4OonlmMJdLrmXZ0dXYlnHSPUFvgQNHF6HQ10tEAngmZm2hjIrrFS3s&X-Amz-Signature=8401d5f2fa0762e4ba5ad40c4c530524135930d7ebeef93d75c26ba207118b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUWSOQ5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE35RUTMuTSWP3Q5QnCekHVixytR3%2BPw9xX4aYoAH1NvAiEArF%2BidW6KOJ9q9jQeCptKrm0S6hpPnU4UQtWm%2FyK39A0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLYYBe9oJlqTHuopaSrcA9f6TlHrtOj4YAQfngjFocNcPMhljk6%2BH%2BR6uboMABg48aUVng%2BIqM0ozgeb10EeGi7ODYXTWha99pYsqW8TbxbrfRKPF22ochpyz272Tr8bSgET%2BAkeulM8YkCyGA68ztRPLFA7Y0fufee0oJy5ZctzYBPMzMnlTSK3IF5dV7qux%2Fov2aZCljGSsMhmnPQcWImfgmI1kt9WKIYWyU8WptecapvkJI%2BgkIqJxi1HxvW1Cmxf2nIxzVO9KR7U0hdqRUAq9PBs3A32Qynzq4V%2F81oHhX1RIDR1aFIK4r3gSVczzQ28OvWbBNGWHxAEEZCpDljwVuuGqJiUD20bNT0eYF7I09toPkMpqFwScbu5t8GiPSntAeFHQ2HRJqkdZwlmsoJtypRgntr8BUp%2BbLOTcRE4KBt7VN0ffLw%2B6cGJgYG07VjIEC3piQ%2BXSRmIAmhM5UpvAv5dJqy7jCxy0fvgqGbq9zwKsrVDIi4%2BUX25LTpJlF14Nc%2Ffq53DLcFbm7ZvJQGYgtS81doUgz1e%2BTvczvqZnKa28mOq2YEkzYaDKITLLGBt46cPPYi5nMKRbs7k4KWiOSdckoENvKzW9lkh2RyXIDuHI80bl98ZwUjSZfzmcfiIcXEwP4Mg3G%2BOMJuF1MMGOqUBq3sNdpW8vPjbmeJ%2BNV1hk1W%2FTowiWHvZTuzOgum62O2Vx2BD%2BR28rEd0k8rHKp1J19%2BJoUfxCwi6LrbBaGvEU8Aj6Q9xr7PCSAItXey2sX39hT1TZDRgCxLCnkmlWXFOCwLtyAfoEOPqShpGndplw6L1bxdxuIULH2KNnGKSvBML4j%2BUyWmBUMcOHjJkZVeikHJE0Ai55QT%2BbRNvT6E%2FKCbbwZiI&X-Amz-Signature=76c84dc948679e625afad919cccb36b73b5f5629fe668bc88e2f3e03a2331759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CK6HVE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIEqsWYV73%2BDIjyABSTt1rxfFzNN%2BPQQcRf712206ohQlAiEAlKANEWZylTbMQO%2Bmy7TiRZZnHNpTahkOA05%2Bt2zjmasq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKZDxFZ%2B9p968EVQfircA5gjF5ThwnbMqiGPQSdw8FWfIYhhZt%2FQ9qJVjQgKWcRH%2FcTOqMiHUI4I6VY6%2FC99loElX7c0VikNde6Qt4EhDvRJoih15otIWI80ZXl1L59ycFqdvmT5MoP7YAGBEgHwUOC0gW0cr%2B7R1Wsilw0jkEvxsTOhvC25MZcOWLjKeL2JYNsuKP1L%2B2v%2FQsEKu4f7AAGWMg9yuX%2FzguKKR3WkzdIpv2BH%2BExM6hYilA6gesSDZDgmXUFkoGPXhQzdgpFv0On2uUHyplUSHlJvCmx0JWNwzIhGonP%2FBwQq8htHHOkjkKQ5L26w6213NerJs1Do%2FTQSTiauCeTmgxngcXfu1EDwzp0BbDxSSMg9je%2BHOobDA%2BJ1zySaVL1RW5pEIH%2BAoPmGx0ZfDwemSQHl9JKBOmuawFJUYxU%2B630GNPzTd%2Bt%2FBRTX%2FcQK%2B7QLJU9TwFgxsKh%2FZxPTQEkPGNakWa2baytZhBB8oGubBinN31SE%2BFRVh0jHWtTf8Eyai5LQ1dV40HlqFHhwb1IfXa8B3Oy9wWinyR0aUkLrEgASa9M3VTB%2FkUrcvvECiy3o39BDf5cFdpYCQQXmzOsGQbpHMdjgAMqE8whzTRDdLY%2F982LCRLnjQK2f5TXsdK7YB1LUMOGE1MMGOqUB1WaxlTSdihA1IMasP7gJN%2BEc%2Foo8opHdY%2F6zr537I9mwtEiJryaHs2vSMScMRhbYKZcaZAsVQnkPjV6PufcShzX5kXz1GSA4Fr7HhJxlLu3ICRImnU4NXROu%2FwEg2ikuSY3zpFLClAE%2BwyqEaAs1BBxCFzyCDNj9SDCxZbhi5IwclLvbGwqG0lfBYwAyidCpkOOEa74UHm23pCb40BSYi%2FOBFnfl&X-Amz-Signature=cf1f6e30a253c81d30f8dcecc0b010de6b03b467c71d4fc1841ffd5861247712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
