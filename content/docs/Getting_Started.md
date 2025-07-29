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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDOK7H74%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBtFdEi3c7jDMS0Aeb%2FoOeNkKmEgg7uxFNnghYTzZcEpAiAYPw%2FWGii78FgDmOGKqlElR5L58JcbcXg4604vRLLmtiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAd3gloZ1d0PGQjBKtwD7tus4GzqP12nAi4Csb9yk%2BH0LVkewSdIirt4KrlBFAaiAVMcaQxrELE6byDVRovxnshfeU%2B%2FOU82OEgabWOw6cWmw2z5InkRbUBsoLwR79uHrzV6WQpZJ7OB4wOPW9SvFhi12WQQ3XmUubwNyFYEIpnSzpAgZHxgvFu8oqU3438Jz64ojwbx39KxDkfHQ1EHuMPM6rgzUS06ROuO0BbirkheL9WK1sCAmhqgTRiao%2BYKp2hcl3%2BnQr0vRIG%2F3J3LmWEJZpzawDddr9pyCN6VfKFI433yz9MH0tUe0iphHiRbs8vGd1gnqRuUJiC7Twyqd7t2pkWYOb%2FDOWBQm0APaE%2BrKJd2H0Nqmklz4RY18EQtJqTtRH38Lb8nxgu0mcJxewiK6oHxFs3dEehNi60aaeGqsMVhPfWqRps64HqUda9C45OKG4mG%2B5KYsrg8LtZkLq8uDLXD3hN5QSMoCdJV41xIUsuHG8miMvKqRnKcvI6%2FwrN%2B7oYQfWIngeVwdWR6e9xLCOJND2ZeTN2l6j%2FPDtfXVn%2FRtIB4b5wNPaHA3FDD4OsqAhnbkIMlecG%2FzeGg0B16zhCNTLtCf6EeZ2WU1xqkdQ27m2P7ez57NSEHV1EAcN%2B8fHOoPvAGFhIwybShxAY6pgFET2aHGJsCRduquiwqkB11DazzDkT6g9%2BiXR9dbdcA4zM9%2BwvakcSA7tCy2LB0OZOwJGP8syplmyOrbchRDqzghFwVMtYY37adUaBrjVgoRoaE%2FBIoMpD5G67eBLTDMpG5W0YoGI5fPYPtJogmPnU8dZoWVSKfL6NAlfmAWKxPJq4yKpnFAjF5vnfqE6Rmz6FgwT515N19YfI1iv9X1TEdbUt4c%2B%2Bu&X-Amz-Signature=8cfcf386a6416e852f4783ca3c72075586fe74405dccce87eab2eff90fb22386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDOK7H74%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBtFdEi3c7jDMS0Aeb%2FoOeNkKmEgg7uxFNnghYTzZcEpAiAYPw%2FWGii78FgDmOGKqlElR5L58JcbcXg4604vRLLmtiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAd3gloZ1d0PGQjBKtwD7tus4GzqP12nAi4Csb9yk%2BH0LVkewSdIirt4KrlBFAaiAVMcaQxrELE6byDVRovxnshfeU%2B%2FOU82OEgabWOw6cWmw2z5InkRbUBsoLwR79uHrzV6WQpZJ7OB4wOPW9SvFhi12WQQ3XmUubwNyFYEIpnSzpAgZHxgvFu8oqU3438Jz64ojwbx39KxDkfHQ1EHuMPM6rgzUS06ROuO0BbirkheL9WK1sCAmhqgTRiao%2BYKp2hcl3%2BnQr0vRIG%2F3J3LmWEJZpzawDddr9pyCN6VfKFI433yz9MH0tUe0iphHiRbs8vGd1gnqRuUJiC7Twyqd7t2pkWYOb%2FDOWBQm0APaE%2BrKJd2H0Nqmklz4RY18EQtJqTtRH38Lb8nxgu0mcJxewiK6oHxFs3dEehNi60aaeGqsMVhPfWqRps64HqUda9C45OKG4mG%2B5KYsrg8LtZkLq8uDLXD3hN5QSMoCdJV41xIUsuHG8miMvKqRnKcvI6%2FwrN%2B7oYQfWIngeVwdWR6e9xLCOJND2ZeTN2l6j%2FPDtfXVn%2FRtIB4b5wNPaHA3FDD4OsqAhnbkIMlecG%2FzeGg0B16zhCNTLtCf6EeZ2WU1xqkdQ27m2P7ez57NSEHV1EAcN%2B8fHOoPvAGFhIwybShxAY6pgFET2aHGJsCRduquiwqkB11DazzDkT6g9%2BiXR9dbdcA4zM9%2BwvakcSA7tCy2LB0OZOwJGP8syplmyOrbchRDqzghFwVMtYY37adUaBrjVgoRoaE%2FBIoMpD5G67eBLTDMpG5W0YoGI5fPYPtJogmPnU8dZoWVSKfL6NAlfmAWKxPJq4yKpnFAjF5vnfqE6Rmz6FgwT515N19YfI1iv9X1TEdbUt4c%2B%2Bu&X-Amz-Signature=860a9a1f6bea8b42245b8c8d8928f539d0c1ba5d11094895f94488d376b2f4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDOK7H74%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBtFdEi3c7jDMS0Aeb%2FoOeNkKmEgg7uxFNnghYTzZcEpAiAYPw%2FWGii78FgDmOGKqlElR5L58JcbcXg4604vRLLmtiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAd3gloZ1d0PGQjBKtwD7tus4GzqP12nAi4Csb9yk%2BH0LVkewSdIirt4KrlBFAaiAVMcaQxrELE6byDVRovxnshfeU%2B%2FOU82OEgabWOw6cWmw2z5InkRbUBsoLwR79uHrzV6WQpZJ7OB4wOPW9SvFhi12WQQ3XmUubwNyFYEIpnSzpAgZHxgvFu8oqU3438Jz64ojwbx39KxDkfHQ1EHuMPM6rgzUS06ROuO0BbirkheL9WK1sCAmhqgTRiao%2BYKp2hcl3%2BnQr0vRIG%2F3J3LmWEJZpzawDddr9pyCN6VfKFI433yz9MH0tUe0iphHiRbs8vGd1gnqRuUJiC7Twyqd7t2pkWYOb%2FDOWBQm0APaE%2BrKJd2H0Nqmklz4RY18EQtJqTtRH38Lb8nxgu0mcJxewiK6oHxFs3dEehNi60aaeGqsMVhPfWqRps64HqUda9C45OKG4mG%2B5KYsrg8LtZkLq8uDLXD3hN5QSMoCdJV41xIUsuHG8miMvKqRnKcvI6%2FwrN%2B7oYQfWIngeVwdWR6e9xLCOJND2ZeTN2l6j%2FPDtfXVn%2FRtIB4b5wNPaHA3FDD4OsqAhnbkIMlecG%2FzeGg0B16zhCNTLtCf6EeZ2WU1xqkdQ27m2P7ez57NSEHV1EAcN%2B8fHOoPvAGFhIwybShxAY6pgFET2aHGJsCRduquiwqkB11DazzDkT6g9%2BiXR9dbdcA4zM9%2BwvakcSA7tCy2LB0OZOwJGP8syplmyOrbchRDqzghFwVMtYY37adUaBrjVgoRoaE%2FBIoMpD5G67eBLTDMpG5W0YoGI5fPYPtJogmPnU8dZoWVSKfL6NAlfmAWKxPJq4yKpnFAjF5vnfqE6Rmz6FgwT515N19YfI1iv9X1TEdbUt4c%2B%2Bu&X-Amz-Signature=4191ee8380efb42d9cc56688e0e6ebb5147e2e009eba65554ea62e8acac360a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQMZ64QO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDfRee%2FevUyu%2FWYSxT13f%2BHvqTwJ39XTUaLylbK8vq6zAiEAzqn682sdk1Qb81%2FhK7tN5sF41FX2roDSbNUPq9X9%2FeYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIohoIjWpIWs8Ro0dyrcA3GrcPCfJiKvg0KwTiNdW2rhoKAoe9fAump2X1Fh1VI4dU1gvuZpusTCMQ616wrgoDGpIvMyzqzJQuTERdcOu6B3c%2BqqIawnWtPRPKLX2yfnAk7EUsXoVli0zSNbpCxBHYo7DAVHZSceIo4Hv3RD21MOZxIChTfF2RQQw7GDBTlv0pA2n9qg9oOH57DCpCD%2Fu5MZWOdiOvYF3BGrwZ6R%2FDYljMrsdlQTXY84qX1IBjJkPSypkUPCGfDE5zj8uphOC%2FvdUCEhMwIOH86LHWyHQrpzSX%2B84F9WHtd66GgAtbt2fg5TBGRH4RHFRpjkvznyl3HR%2FqbZl1tQuJoIumf%2Bx51uoEnMhN2heVGXCK%2BgcQWvErWW0TSCi6gjuLZ0nwre%2B8SJ5QdXPghob8v%2BQQDXC9EgQVl148TnU83De%2BWjTFoicHbTX0zl9BaTBZo2XqTVwk7GkHze%2F0uXMjMQt%2BpRTJwqgDQ5ut9PqEWo2fD363o5QkVzXXNnDCvEXxbxshS4z9Ow7WaZ%2FcsOIVBZ9Ufu92dne%2FPlnu8LUhyKw5V7R%2B%2FQbHQAgwhX14cJLpt%2BojVn4wpQ4nkabE1j%2FucQMSFlQ%2F3n6G6HoIbJk%2BSYpRrW%2Blyfr41sUJKK%2B3XWNwFvMM60ocQGOqUBTotjS%2BOCAGqq%2B9k6Yz7FfHydWM0%2FJQrys5S08vc21aZWuaByZhzYlVTP8xS4EO1smlmaDxTuZ87fv7%2Ff00DO3cnYFfV95gdvsC%2B5RTzPEmMvcxAjy3OE6SWg%2Fr9Li7rM4zpo7LaIilsH0F%2BIbrUJ7D%2B1449ScyxWdUlT2OqAbnCC%2FcrHNjpQYvKu7Twvh49%2Bh33X5M2WFHcD758aQF%2BjO%2FYMJrQ0&X-Amz-Signature=09039603b6716eb8c6672c15d98242515acb027fb1421c5dbb4f38170627f065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLDFYZVX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDXnulwBPh4eh6UdjcTifjfmnbTSDS%2F5MG07w1Zo3sc6AiB6XmdAno7l0toRCbAI6XZwG%2Fr93SqRaEWJIFmcYnuI3iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHyROj4F%2BAaNrK4XoKtwD%2BjD7Ol1JVnfqWS5zXz7xT8MkuegHDD3uRv%2FzdhzZDhGaB5D86o%2Fn3T3eBtCjHUNYqNLUtK4Ax2oQSUex3r%2FsPISj1rQMLQZ6sn%2Bm%2BpNo2e9umqNjRLhEZzr6pSlVHjqsJ%2BVEmfwlbDjWjAGxRBgzdjBxj7KRkTmojAJEatMi3YtdQdagQW%2Fc8nXorMvVV3Pdqn4x1VPUH5jUrfioHgSB%2BUpGbQAaMR%2BQO%2BEEG73X3JRce2rEVRKySfl37vA9PRH%2BhUMNm765g0tsVtpdQQxcvxKkwQHN1jWAcmbLj0ha7M%2BMOKofbRBz8YGXwN%2BhG%2BgjDTEEkgC30xWYGCMAaS7odxRhdjpTaPUp%2Fj7%2ByUN2On8aTxjklQ6ibnKDCXFr%2BfuVklNwLso%2FCXCm1PSmuZAphPQF1SjPtrMKRUqnLv6qO80ZbJt7vugOgpzKidRqt7mGL9dMxjgL0Y6mxT8EhXkKQzlHhRXF6r6IxxmDmXIsPBGpHsGSPHrdgi%2Bt2YANbiYm1bESW9WhRbSIKEj3TVi40obojDsWk1rloxAuxZqEybIbAGpshOeafyi%2BnJo8iAzXw4273hC54rQmFHcNf3WG3ksoxyxqOv8wvXpScB77ThD2EgvrippsyaYcwy8wvLShxAY6pgHGiiMXUKx5SrWXAudDqD%2BtnEIeTNCVBpuUBNAjNACH%2BzpdQVJkSumDpxMlduXuVtLjsFPkHINts1Dt7ypnFnHAiTskHz%2Blh5ZR2iAzzG7xX19lagDKrzal9yKspE4PWhSQMuKNBkvHVFi6Spo3IL199lFvLu%2BTXciFpJb7AWSuZdh3yBMWInXvCKf2IA1YmVE%2Bue99tqJZiYnamFNGJKTDpU8DYF1t&X-Amz-Signature=884795d1c70516ad6fe92757ef06a41debb4b1bc442ccb80d29311c9cca8d348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDOK7H74%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBtFdEi3c7jDMS0Aeb%2FoOeNkKmEgg7uxFNnghYTzZcEpAiAYPw%2FWGii78FgDmOGKqlElR5L58JcbcXg4604vRLLmtiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAd3gloZ1d0PGQjBKtwD7tus4GzqP12nAi4Csb9yk%2BH0LVkewSdIirt4KrlBFAaiAVMcaQxrELE6byDVRovxnshfeU%2B%2FOU82OEgabWOw6cWmw2z5InkRbUBsoLwR79uHrzV6WQpZJ7OB4wOPW9SvFhi12WQQ3XmUubwNyFYEIpnSzpAgZHxgvFu8oqU3438Jz64ojwbx39KxDkfHQ1EHuMPM6rgzUS06ROuO0BbirkheL9WK1sCAmhqgTRiao%2BYKp2hcl3%2BnQr0vRIG%2F3J3LmWEJZpzawDddr9pyCN6VfKFI433yz9MH0tUe0iphHiRbs8vGd1gnqRuUJiC7Twyqd7t2pkWYOb%2FDOWBQm0APaE%2BrKJd2H0Nqmklz4RY18EQtJqTtRH38Lb8nxgu0mcJxewiK6oHxFs3dEehNi60aaeGqsMVhPfWqRps64HqUda9C45OKG4mG%2B5KYsrg8LtZkLq8uDLXD3hN5QSMoCdJV41xIUsuHG8miMvKqRnKcvI6%2FwrN%2B7oYQfWIngeVwdWR6e9xLCOJND2ZeTN2l6j%2FPDtfXVn%2FRtIB4b5wNPaHA3FDD4OsqAhnbkIMlecG%2FzeGg0B16zhCNTLtCf6EeZ2WU1xqkdQ27m2P7ez57NSEHV1EAcN%2B8fHOoPvAGFhIwybShxAY6pgFET2aHGJsCRduquiwqkB11DazzDkT6g9%2BiXR9dbdcA4zM9%2BwvakcSA7tCy2LB0OZOwJGP8syplmyOrbchRDqzghFwVMtYY37adUaBrjVgoRoaE%2FBIoMpD5G67eBLTDMpG5W0YoGI5fPYPtJogmPnU8dZoWVSKfL6NAlfmAWKxPJq4yKpnFAjF5vnfqE6Rmz6FgwT515N19YfI1iv9X1TEdbUt4c%2B%2Bu&X-Amz-Signature=a6e2cc03f95d1d997ed21998a67e98d98c18aedd227166c32fdb769b5f9b1c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
