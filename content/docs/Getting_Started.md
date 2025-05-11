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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZG7OSBY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDnOioVPDmHIg0URyAjebRfFYzusSRoPC4DLRdq7MOmKQIgQpjzLLpyd6GaVVUBJJiFjinVs9Cz6v1wuFvKmMWpOHwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKphpkrUMlzL13NEcyrcA4WmjRP%2BbyRt7D4Wt%2BB%2F8DHwKsB1X40tsb5wnDe6HtL0%2BCMVGnQiUOud15UgrelidMpbokxPt8%2Bh%2BM%2BYB316cigOpIDgnsmByLMNhjMkEW5E7Bnk3yelSilZuxvgjwK8yM90PUR0zQfc0IZkBJ6SwZgbSYQUbVC%2F08JcZplXoruE3x0yxH6H5IbVD0VldWgiJWVKPNexM2s%2FoHvqFDUCybkXcRtIZ3Exjj5OrLTiVqE36WBaACuCR3zfq%2BuOF4YHYUbB7aMzKAdE4hAw5ZxhRm0T2h1lcgLd3zWl9XgApSvhx1lujb9cC4WdHIs6sPVJp%2B%2FPlqg23sEURpnxzOjPkPN3EYNuTOoXBraPXt5SclYX2zFoPDg2h7IAAf2EPbiWVMGptSv43FzZZ%2BqcYpPPA7Pjj2qLmVnyf%2FyI6FzW1g3BTG9yYljo8AAi1owywr2fYHArkGjyCvtu7qUKB6sdd0SQvD4hTGgzi%2FLciaqUK5eHMLpXqbBcH9ovTpveYT0cjY1R935R5ibyZWYYDZ2yzaKOh9oVAIBLhylOsiMx1DMMGQtMxPWo%2BvJmaWtFrCVtgQqjj1YbN3DZMh%2FIwZ8S8gzxwgZIFhScYSPtEJrFn6zmUFLwmvLbXDU%2BcRa2MKfegsEGOqUB8%2FcnoYe8ivwghs9LHxo0Lt9Uz%2FxqOXzJBGpHGn7VzcGsU%2F4LhTjwcnYlaHogGBfFlrle%2BUNPPu5S%2BGAK2uMh7xV3ckfbZxUPtK%2Fs7tP8snw%2BU6R3xLSkEChbsMTj0nGiugCKdjDpzHP12ns1kB3b87k2KrklREBfVwpliMaF2sZOCElYL0hHOQiXRShfbmaF2PNHVAsQpRBgWK34b7HA0Y8sYL2L&X-Amz-Signature=1359bb8bc6a735c8d6e7230a5372d9bf5778870abbfbc4c7fcde9d973de6df88&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZG7OSBY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDnOioVPDmHIg0URyAjebRfFYzusSRoPC4DLRdq7MOmKQIgQpjzLLpyd6GaVVUBJJiFjinVs9Cz6v1wuFvKmMWpOHwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKphpkrUMlzL13NEcyrcA4WmjRP%2BbyRt7D4Wt%2BB%2F8DHwKsB1X40tsb5wnDe6HtL0%2BCMVGnQiUOud15UgrelidMpbokxPt8%2Bh%2BM%2BYB316cigOpIDgnsmByLMNhjMkEW5E7Bnk3yelSilZuxvgjwK8yM90PUR0zQfc0IZkBJ6SwZgbSYQUbVC%2F08JcZplXoruE3x0yxH6H5IbVD0VldWgiJWVKPNexM2s%2FoHvqFDUCybkXcRtIZ3Exjj5OrLTiVqE36WBaACuCR3zfq%2BuOF4YHYUbB7aMzKAdE4hAw5ZxhRm0T2h1lcgLd3zWl9XgApSvhx1lujb9cC4WdHIs6sPVJp%2B%2FPlqg23sEURpnxzOjPkPN3EYNuTOoXBraPXt5SclYX2zFoPDg2h7IAAf2EPbiWVMGptSv43FzZZ%2BqcYpPPA7Pjj2qLmVnyf%2FyI6FzW1g3BTG9yYljo8AAi1owywr2fYHArkGjyCvtu7qUKB6sdd0SQvD4hTGgzi%2FLciaqUK5eHMLpXqbBcH9ovTpveYT0cjY1R935R5ibyZWYYDZ2yzaKOh9oVAIBLhylOsiMx1DMMGQtMxPWo%2BvJmaWtFrCVtgQqjj1YbN3DZMh%2FIwZ8S8gzxwgZIFhScYSPtEJrFn6zmUFLwmvLbXDU%2BcRa2MKfegsEGOqUB8%2FcnoYe8ivwghs9LHxo0Lt9Uz%2FxqOXzJBGpHGn7VzcGsU%2F4LhTjwcnYlaHogGBfFlrle%2BUNPPu5S%2BGAK2uMh7xV3ckfbZxUPtK%2Fs7tP8snw%2BU6R3xLSkEChbsMTj0nGiugCKdjDpzHP12ns1kB3b87k2KrklREBfVwpliMaF2sZOCElYL0hHOQiXRShfbmaF2PNHVAsQpRBgWK34b7HA0Y8sYL2L&X-Amz-Signature=098d493ad78002b398bb478962db292708c44fab60e01ceb377e696e6ee80bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZG7OSBY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDnOioVPDmHIg0URyAjebRfFYzusSRoPC4DLRdq7MOmKQIgQpjzLLpyd6GaVVUBJJiFjinVs9Cz6v1wuFvKmMWpOHwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKphpkrUMlzL13NEcyrcA4WmjRP%2BbyRt7D4Wt%2BB%2F8DHwKsB1X40tsb5wnDe6HtL0%2BCMVGnQiUOud15UgrelidMpbokxPt8%2Bh%2BM%2BYB316cigOpIDgnsmByLMNhjMkEW5E7Bnk3yelSilZuxvgjwK8yM90PUR0zQfc0IZkBJ6SwZgbSYQUbVC%2F08JcZplXoruE3x0yxH6H5IbVD0VldWgiJWVKPNexM2s%2FoHvqFDUCybkXcRtIZ3Exjj5OrLTiVqE36WBaACuCR3zfq%2BuOF4YHYUbB7aMzKAdE4hAw5ZxhRm0T2h1lcgLd3zWl9XgApSvhx1lujb9cC4WdHIs6sPVJp%2B%2FPlqg23sEURpnxzOjPkPN3EYNuTOoXBraPXt5SclYX2zFoPDg2h7IAAf2EPbiWVMGptSv43FzZZ%2BqcYpPPA7Pjj2qLmVnyf%2FyI6FzW1g3BTG9yYljo8AAi1owywr2fYHArkGjyCvtu7qUKB6sdd0SQvD4hTGgzi%2FLciaqUK5eHMLpXqbBcH9ovTpveYT0cjY1R935R5ibyZWYYDZ2yzaKOh9oVAIBLhylOsiMx1DMMGQtMxPWo%2BvJmaWtFrCVtgQqjj1YbN3DZMh%2FIwZ8S8gzxwgZIFhScYSPtEJrFn6zmUFLwmvLbXDU%2BcRa2MKfegsEGOqUB8%2FcnoYe8ivwghs9LHxo0Lt9Uz%2FxqOXzJBGpHGn7VzcGsU%2F4LhTjwcnYlaHogGBfFlrle%2BUNPPu5S%2BGAK2uMh7xV3ckfbZxUPtK%2Fs7tP8snw%2BU6R3xLSkEChbsMTj0nGiugCKdjDpzHP12ns1kB3b87k2KrklREBfVwpliMaF2sZOCElYL0hHOQiXRShfbmaF2PNHVAsQpRBgWK34b7HA0Y8sYL2L&X-Amz-Signature=bf4b9377a1b6b13fcbebe973c67e2b9115479cc3b4589ab5a57844ce07da31ed&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUFMMMCI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCI73CixXT%2Fll1xtjTT%2Br9FJGJ8mqnkNFlD1%2F7OftZMCwIhAKBP9xr7FSu7FFxJvDcdUIMn1LyLZFzKIhcNTTxfFC0HKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGQgA%2Fg9q9Sx5QrpIq3AMs3VtiXb7IKSAmW4efbCh5s1u%2BWD6ubjaEJyNpEyIGp0GOrRZoC4eePJvMahaQotR69auEgfdU7gXFpBaiKTIVCqTZvgkGbCEqQlnvRb9xb4UpzwWwrfLqsW9yG6UiRqC9w5BvjcuSd7J6rdhVAAyrkUxBEFIHpWGv5MBb6BnItalFGoJLXu46PHqIUNdCvOh6edGJmVgizjNtDPVb%2FJJagUpimRZHi5xTdw3p%2BL7wbOL6qIjaRME1H1vrXV%2BO7dY1X7FherOrZltGSuZvyNkixumrJCsxtrNNr0%2BjuaaiYwgsVy9clQ9dEfvbhrmmwjwPMTBCrkk1liIJ1qLdoE1EAmG9AX7wKS5Iy%2FUYp2%2Bku9aA%2FZ%2FEVzJ2iLWi3K0t5HhzmORTCVga%2FJf%2FDQBc27wI7X6fASWN%2BKcfGnmXP6f95LlycTIrzL0m3S6RxGfy6JC1BkBKrTQHHOSMasDNnwhu9CQ3D%2Fky90AHnvVVrevNklSs2nm%2FeXcveulFP0AvBh6xqae8zsbiw%2BQn4gjOO0X6qeTt3pQ7T1Vt%2FMRuD78Df5L5qvFLhVqbbs2Yu6GgurftP0bLjyN57OLj2CsSnJmQzZ%2FEG4etS%2BLqUV1LXHLZUkRkfrHpJMNts9SrbjDy14LBBjqkAZ0WiXGv5dciNARcIMcTYG6dCAGOonmxQUEmswlblpYv0zHwWW4TkUAlhOogX2U%2FAg6hFSbu8XrJeaEAZCOH0DTKKU2wUzHv87DnD%2BCXETSNXBOe3Frpwm2jit4gpPr5IjfsfyEvpmBuAe%2BCEaiiVaE1QT6Ad1%2BdvqFZEhmiZ746lOxkvYroKIYvkL3APF9mvYAw2vjklQpFDpsVntRzqZXx63aA&X-Amz-Signature=4bd12303f53c8686e09dc5208df7e60e98f74180304ce175d173fd59880e9498&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIN2BWJX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAqQWAEFjCt9Yfi2tEYy%2BEOeA9AvzQr%2FhH7w50FFb316AiEAo0DUE%2BhZ%2B58fX9lDK92dK6rvLI7F8ZEpbsCE%2FNbJz2IqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc0rJeWQHikEavjfircAxqnfOEEuvwHD4n9IWnMWjR6PfUucp34Cett1luLlutK0haH96YU9gFznDYy1bJ9gW5Wgu2WtKkeq9SWyy7mySb12L4x8%2FwMV7Ho3t%2B8NA%2FFKuGV0vod2OUc%2BDdP3To4REfUZv4MyL49lAGunfrdqpiEF8Hk8m0Agk%2F9CkoZCAtdMGPz0%2Bu%2BINc7OIXDBka4D9mGyqywjfE9Vn65cNFEC2tDcrx2BaldtvWS7g551ws5HZjohh9hzHDvE1vKf%2FhSKKMzQ%2BDMYVTg%2FP5Fk8mNJweJ%2FLawSs6hDoJ5nkyTCKTBe3lqzGujfpANqVBSO67J4IzDXFqMs6qVXr141P6lAp%2FV%2FoOODqNWe41G34mWMABJgFVxSA1Nw81myzaHb5zkjclNyLuxZkEtujzWvisYSOiNxd%2BGMZFrR2Q9HQuYAiQwubBLk61%2FRTlvAF%2BIffALpSC6OmSIcqxatrze65TXvPXtB7Dkl1rn%2FCedBBW%2FjgTjrS5gaKDqRP%2BHwbtbeHwRV7HwQmWFNQkV2blpRFhUtOBeaMzTxJJKYEhGDIaWkVwyEyMfTimM3TJN8RBWaO7nluKkt80Q0lsyuwMbo4SmKMgPUGrSf1OCMjGcNjEnKoqcSYKm%2By1Zi6Khky2BMPDUgsEGOqUBquhxBuipbeXTdQcP1TbqvS7K10vcTqjcM8FDqFJ0dpojx3VV9ubixmEzVoto4VRMYcknTQoREpCNKLINOsyitW14bBsdWL3xJO3KzaO85RktSrNQFwNb%2B8caCYQpNJ2T8he627%2FJy3e491v76LTAkbS%2FL74a%2F7bdYZ70T3j5moI4uHjDzMsVBjh6tNCfVOvQpAeCihDV1H7gQB%2BdVIS%2FBtRLSzSj&X-Amz-Signature=fbe3e955100108745bbd95dbd706e91886c02465d2fa7f66f90a87967adfd9e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZG7OSBY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDnOioVPDmHIg0URyAjebRfFYzusSRoPC4DLRdq7MOmKQIgQpjzLLpyd6GaVVUBJJiFjinVs9Cz6v1wuFvKmMWpOHwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKphpkrUMlzL13NEcyrcA4WmjRP%2BbyRt7D4Wt%2BB%2F8DHwKsB1X40tsb5wnDe6HtL0%2BCMVGnQiUOud15UgrelidMpbokxPt8%2Bh%2BM%2BYB316cigOpIDgnsmByLMNhjMkEW5E7Bnk3yelSilZuxvgjwK8yM90PUR0zQfc0IZkBJ6SwZgbSYQUbVC%2F08JcZplXoruE3x0yxH6H5IbVD0VldWgiJWVKPNexM2s%2FoHvqFDUCybkXcRtIZ3Exjj5OrLTiVqE36WBaACuCR3zfq%2BuOF4YHYUbB7aMzKAdE4hAw5ZxhRm0T2h1lcgLd3zWl9XgApSvhx1lujb9cC4WdHIs6sPVJp%2B%2FPlqg23sEURpnxzOjPkPN3EYNuTOoXBraPXt5SclYX2zFoPDg2h7IAAf2EPbiWVMGptSv43FzZZ%2BqcYpPPA7Pjj2qLmVnyf%2FyI6FzW1g3BTG9yYljo8AAi1owywr2fYHArkGjyCvtu7qUKB6sdd0SQvD4hTGgzi%2FLciaqUK5eHMLpXqbBcH9ovTpveYT0cjY1R935R5ibyZWYYDZ2yzaKOh9oVAIBLhylOsiMx1DMMGQtMxPWo%2BvJmaWtFrCVtgQqjj1YbN3DZMh%2FIwZ8S8gzxwgZIFhScYSPtEJrFn6zmUFLwmvLbXDU%2BcRa2MKfegsEGOqUB8%2FcnoYe8ivwghs9LHxo0Lt9Uz%2FxqOXzJBGpHGn7VzcGsU%2F4LhTjwcnYlaHogGBfFlrle%2BUNPPu5S%2BGAK2uMh7xV3ckfbZxUPtK%2Fs7tP8snw%2BU6R3xLSkEChbsMTj0nGiugCKdjDpzHP12ns1kB3b87k2KrklREBfVwpliMaF2sZOCElYL0hHOQiXRShfbmaF2PNHVAsQpRBgWK34b7HA0Y8sYL2L&X-Amz-Signature=a35398a3d2fd15d4f10f7a79a9a4f48630a19351c7eca30faa638e8b8e149c02&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
