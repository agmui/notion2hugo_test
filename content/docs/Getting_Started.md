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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDE6M2I%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD183WRsTsnF7weI4J7OWlCjQpPrk5pHo6tOaGQd9L%2FiQIhAKaCXePJKyuDMlfHoKzNiTAHQIChZs7OSaDTp0T7d77NKv8DCGsQABoMNjM3NDIzMTgzODA1Igx1Of%2FwqemnvNM24b0q3AOGK2KfMC56mZS5EOzYn1wnvDMwD3gdnnIQtg%2FoNqYFD%2Fix9gs0eSjevvpsDN6XV2eNY4LEzgQirTOoyF6YxMaRCvRE3cPyFe7Ar%2BqsyP5eGbogUYH9nd62NJD2cQwCgqPt4Bmx484kmBmoLFUoIeXP1X41DJPoQf%2FGOGxAsJF2SL9KjrbnBp8Wv7Q81lPcWz33nTN3731s%2BDCsh36bQw2NxVYqO9K6WiwnP0Vg6xO6gFrzIyre4y4CWKnHy0hfNhkovbFyOMkPyJzxk%2BDd6%2FcPICvCv%2BNhzvBvC2yTY7J0WbflevnTQmJXDBmnHqPZvRrrigdzN9vfmDnquskbz%2BDe8rMih6DgHQ23bR0Nfee8uTPeAE1qH5yZP%2BP0C%2By9eHPHKsIGgsy%2Ba678KHVdev2OfurdZMxUYYEcmJPfvJJYCTtJOe0%2F2057PcOzST6RwiKxfqd9rTWVODf6b7eUIfjUmL14h9MD2FWY3TRa1py4QrcdL7b5zr2TLr3z2vS17vtkQ%2B1tLu%2FAX9KusOqufrJOXdmYuZIGoau7YUl6Y%2BcO%2FyAwiJQEwlqK%2Fo7u5PNH5Xpf9iKiUoPCQn8tiR7oEOC8FHx5IY5Sxgr5GwKT%2B%2Fbvo2JuQ76iczqOG38OkDDPi8PCBjqkAcwNFZ%2FEMjX5NaZxPsCdZ9GRR7qyt35KFByFlNE78bDfouYNE16deMJsQOzFpBh0EwcP4%2FpBIAyXb%2FB%2F0xtUOmzR41BKZqs40mNVw%2F1ZFcY4Mw9W3%2Baj2qhkZkT4Ysz0LR6KIIlJoTaKgD6EUVL1saUz6lf%2BMY4oMRmjAm0E5LudGGVyzfXzlRoAGxYvDvWZ7i03zzu%2FwQ8S3d9A7ByIecSXl3PV&X-Amz-Signature=315d2148c16c901d3523584f2030bd3ec4e4e52a9b1941da807417c865aeaf4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDE6M2I%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD183WRsTsnF7weI4J7OWlCjQpPrk5pHo6tOaGQd9L%2FiQIhAKaCXePJKyuDMlfHoKzNiTAHQIChZs7OSaDTp0T7d77NKv8DCGsQABoMNjM3NDIzMTgzODA1Igx1Of%2FwqemnvNM24b0q3AOGK2KfMC56mZS5EOzYn1wnvDMwD3gdnnIQtg%2FoNqYFD%2Fix9gs0eSjevvpsDN6XV2eNY4LEzgQirTOoyF6YxMaRCvRE3cPyFe7Ar%2BqsyP5eGbogUYH9nd62NJD2cQwCgqPt4Bmx484kmBmoLFUoIeXP1X41DJPoQf%2FGOGxAsJF2SL9KjrbnBp8Wv7Q81lPcWz33nTN3731s%2BDCsh36bQw2NxVYqO9K6WiwnP0Vg6xO6gFrzIyre4y4CWKnHy0hfNhkovbFyOMkPyJzxk%2BDd6%2FcPICvCv%2BNhzvBvC2yTY7J0WbflevnTQmJXDBmnHqPZvRrrigdzN9vfmDnquskbz%2BDe8rMih6DgHQ23bR0Nfee8uTPeAE1qH5yZP%2BP0C%2By9eHPHKsIGgsy%2Ba678KHVdev2OfurdZMxUYYEcmJPfvJJYCTtJOe0%2F2057PcOzST6RwiKxfqd9rTWVODf6b7eUIfjUmL14h9MD2FWY3TRa1py4QrcdL7b5zr2TLr3z2vS17vtkQ%2B1tLu%2FAX9KusOqufrJOXdmYuZIGoau7YUl6Y%2BcO%2FyAwiJQEwlqK%2Fo7u5PNH5Xpf9iKiUoPCQn8tiR7oEOC8FHx5IY5Sxgr5GwKT%2B%2Fbvo2JuQ76iczqOG38OkDDPi8PCBjqkAcwNFZ%2FEMjX5NaZxPsCdZ9GRR7qyt35KFByFlNE78bDfouYNE16deMJsQOzFpBh0EwcP4%2FpBIAyXb%2FB%2F0xtUOmzR41BKZqs40mNVw%2F1ZFcY4Mw9W3%2Baj2qhkZkT4Ysz0LR6KIIlJoTaKgD6EUVL1saUz6lf%2BMY4oMRmjAm0E5LudGGVyzfXzlRoAGxYvDvWZ7i03zzu%2FwQ8S3d9A7ByIecSXl3PV&X-Amz-Signature=7b34c5ab3f33638b3057e1e0176b18cf641a3b3807c8021885e22d7b20b7d641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDE6M2I%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD183WRsTsnF7weI4J7OWlCjQpPrk5pHo6tOaGQd9L%2FiQIhAKaCXePJKyuDMlfHoKzNiTAHQIChZs7OSaDTp0T7d77NKv8DCGsQABoMNjM3NDIzMTgzODA1Igx1Of%2FwqemnvNM24b0q3AOGK2KfMC56mZS5EOzYn1wnvDMwD3gdnnIQtg%2FoNqYFD%2Fix9gs0eSjevvpsDN6XV2eNY4LEzgQirTOoyF6YxMaRCvRE3cPyFe7Ar%2BqsyP5eGbogUYH9nd62NJD2cQwCgqPt4Bmx484kmBmoLFUoIeXP1X41DJPoQf%2FGOGxAsJF2SL9KjrbnBp8Wv7Q81lPcWz33nTN3731s%2BDCsh36bQw2NxVYqO9K6WiwnP0Vg6xO6gFrzIyre4y4CWKnHy0hfNhkovbFyOMkPyJzxk%2BDd6%2FcPICvCv%2BNhzvBvC2yTY7J0WbflevnTQmJXDBmnHqPZvRrrigdzN9vfmDnquskbz%2BDe8rMih6DgHQ23bR0Nfee8uTPeAE1qH5yZP%2BP0C%2By9eHPHKsIGgsy%2Ba678KHVdev2OfurdZMxUYYEcmJPfvJJYCTtJOe0%2F2057PcOzST6RwiKxfqd9rTWVODf6b7eUIfjUmL14h9MD2FWY3TRa1py4QrcdL7b5zr2TLr3z2vS17vtkQ%2B1tLu%2FAX9KusOqufrJOXdmYuZIGoau7YUl6Y%2BcO%2FyAwiJQEwlqK%2Fo7u5PNH5Xpf9iKiUoPCQn8tiR7oEOC8FHx5IY5Sxgr5GwKT%2B%2Fbvo2JuQ76iczqOG38OkDDPi8PCBjqkAcwNFZ%2FEMjX5NaZxPsCdZ9GRR7qyt35KFByFlNE78bDfouYNE16deMJsQOzFpBh0EwcP4%2FpBIAyXb%2FB%2F0xtUOmzR41BKZqs40mNVw%2F1ZFcY4Mw9W3%2Baj2qhkZkT4Ysz0LR6KIIlJoTaKgD6EUVL1saUz6lf%2BMY4oMRmjAm0E5LudGGVyzfXzlRoAGxYvDvWZ7i03zzu%2FwQ8S3d9A7ByIecSXl3PV&X-Amz-Signature=f97fce87f9018f37401da3c112ae9c705dd8423229637fe4bcc4bfa2816a770e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6EGAFHW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCQNn3mCEAHm7dSNKKDN8uBYLcRHNZXn1oTZs1y0PExAiAYXW%2BXVa4r%2BPSPnWK7ONvcU%2BmwW7ZzgB7Ncv1zFf7pWCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMfwLtwLgJxpYE2OfEKtwDeyiaNoPb%2BS0w3Ehj0vbt%2FhYRVDprywpFiO%2BAcu6TUtrGmCa7g92NqMkHYl3X3hlvoFf0EnpC1IO2CAX9xFvdEl%2FySV2HSymI708%2BXfysR%2FI8X%2Fiu0Y%2BlqNcemOrD9zc3HKaYLNyBU2cDdTj4SuLWkT3hntIAJdPUeqTJoxpC5wFIJqdmCqzpH0%2FRfXWj432%2Bf7n%2F3SgeDIkpLOAqPULEupzPyCiu3kVh4jRZG5R6%2F9VuheSgOMHmyHsXbGiDtClPlA55JVnL6nWH0NAXjoRvA5qqkg2VUFl2vzyQdY35kyqx7GooZlGX7LbkeIIADk1rNgEZKcudunHTbmXUgXnQBiuLRww0PsW6U7jRRPYTOm7AcdHTIVFrDeyVjwYeH15c110FhdTEUev5WFOhrQQNOfL5oEcGrYDqKZvMbG0VSfqoeDHso1SKj4%2F1TInjnbOZtVtW8CU1wEGAYtaV4FjwyMjdX1u3cKlRh4m1uL5hWAFaCIphc%2B%2F0p7rfNrud9mPNXTNDMLD0cJGcQ08YNBH6o%2BrGIhxwGjN2iuIPX20VMZtg7MendblqN3VZuA9YN5YLOWPv54PkynZ059zb0Lw3GcKNLI85BCa768C8CqO9qir0HvLEWq3WypVXYMAw34vDwgY6pgHQv8MySTq2spC2LZ6LH79V2jHz3DU0jCThPaBThLykVSFEz5KCqbm4BF861zIixYDp5%2BZAsMee73D%2BSoeZqSlLymZcFDugo8GuHnavNPUfeM%2Bg%2BprW02ENSfXZyFthzJGC%2FZnJLNPYXwVcVKmC5BVyy3wJzCBk7bIhfWlHRGIGr4sqND2PXeq5jxObMHKXuaxhZdUh%2B6jNHIToNZ81lQfAMokkPvhM&X-Amz-Signature=21394eb6ccaffd34027c55d5371e7cdb5e5a6cb857367ef306b162d679156718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQSTWZH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8Tlx40RGTLlqFfNzbZx9WhtA6%2B%2BoYb6GwKch7t3kJGAiBIO5AYZFckNIxdft26krAM51Y408zoiCmYa9Rnx%2BfaQyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMhuO9ZXDOlSnYTNo6KtwDTK9YcBl%2BRzqkzW2dWsbt8YQvfjTAX75mw%2F5wpfd3MJS7j%2Bj01iy9BJpfC1ZlGmd4REBbZEvoSKAEQMf%2F1Bce9%2FqZQiVP5KCtxXDAXk%2F21vTDd3NWXm66EM%2Bb1Izbj1DmGj0ylH83Wjy02z2aPIMQYXj2m5koccH2HVr4piPIR6BG%2BTlIKhQsF85XncweHnz9UxKFbczy%2BuW%2BBXbQZCGEaqDfPQWgFcFEFROUHL7idxJU%2Ff87LBDIdgnQcbUbd%2Bm%2FM%2F9cciEWgkyogrObKYqDQxybt9KkZDwUwJrvxRzWZsCK7FGSoOIMwcNkrVwfprBCnDdRaZsH%2BPVE97QENC02iHn7dOp7RrVHBy5NjDWOBz3RiYtbEyDwfipzq20Qzn5bZRRgwsRDlvHrFxrRlx3feQIdRTWIRPw2mBIjaiWG7HrR2rlRe5YWJgMJEvSWFWkJtZxYtvidgCKycG4hgV%2Fo%2FS36%2Bsfudi%2F76xsV0VWd0N3s9Bg%2B2ANXieHE7HVXFjgVa6z3kdfyHpn1IC52bx%2FXxUUUYPcQEEYK%2BHGQy6rorMWM0j77Ui4sRNjnZPzQUOjb%2Ba8u03VSrxaM%2FAk9oquoHJUl7N5e36%2F3iYbQEeNwu5gCAGiE3mr%2F%2BEeIQQ0w%2BJ7DwgY6pgFE5pq%2BFvtyFDZsiZZQvyANMXi2d4Uubo9Hpe9%2B5w5KDHVz6BKh4CDfv%2BAIp4vHLwSy1zMpPzOKn9PW7E8Rl6OAxqdtnOqrlprTti7zBVILfakrxOn5fDGK2WW%2BJZvsEMiz2hYoYGM3sLk%2BLHC1SLXxXJp40yt%2BHRIO5R90nh5OBGbEOKDa2wtyXcuFssKUG4VfDN7Exw%2FGhHn0umqR51qJKwaQtm8o&X-Amz-Signature=7518cd8a8b8e07062e8841f52df64fb8f6fd267199d889b71adcfa4715e19557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDE6M2I%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD183WRsTsnF7weI4J7OWlCjQpPrk5pHo6tOaGQd9L%2FiQIhAKaCXePJKyuDMlfHoKzNiTAHQIChZs7OSaDTp0T7d77NKv8DCGsQABoMNjM3NDIzMTgzODA1Igx1Of%2FwqemnvNM24b0q3AOGK2KfMC56mZS5EOzYn1wnvDMwD3gdnnIQtg%2FoNqYFD%2Fix9gs0eSjevvpsDN6XV2eNY4LEzgQirTOoyF6YxMaRCvRE3cPyFe7Ar%2BqsyP5eGbogUYH9nd62NJD2cQwCgqPt4Bmx484kmBmoLFUoIeXP1X41DJPoQf%2FGOGxAsJF2SL9KjrbnBp8Wv7Q81lPcWz33nTN3731s%2BDCsh36bQw2NxVYqO9K6WiwnP0Vg6xO6gFrzIyre4y4CWKnHy0hfNhkovbFyOMkPyJzxk%2BDd6%2FcPICvCv%2BNhzvBvC2yTY7J0WbflevnTQmJXDBmnHqPZvRrrigdzN9vfmDnquskbz%2BDe8rMih6DgHQ23bR0Nfee8uTPeAE1qH5yZP%2BP0C%2By9eHPHKsIGgsy%2Ba678KHVdev2OfurdZMxUYYEcmJPfvJJYCTtJOe0%2F2057PcOzST6RwiKxfqd9rTWVODf6b7eUIfjUmL14h9MD2FWY3TRa1py4QrcdL7b5zr2TLr3z2vS17vtkQ%2B1tLu%2FAX9KusOqufrJOXdmYuZIGoau7YUl6Y%2BcO%2FyAwiJQEwlqK%2Fo7u5PNH5Xpf9iKiUoPCQn8tiR7oEOC8FHx5IY5Sxgr5GwKT%2B%2Fbvo2JuQ76iczqOG38OkDDPi8PCBjqkAcwNFZ%2FEMjX5NaZxPsCdZ9GRR7qyt35KFByFlNE78bDfouYNE16deMJsQOzFpBh0EwcP4%2FpBIAyXb%2FB%2F0xtUOmzR41BKZqs40mNVw%2F1ZFcY4Mw9W3%2Baj2qhkZkT4Ysz0LR6KIIlJoTaKgD6EUVL1saUz6lf%2BMY4oMRmjAm0E5LudGGVyzfXzlRoAGxYvDvWZ7i03zzu%2FwQ8S3d9A7ByIecSXl3PV&X-Amz-Signature=5fc17bcf76393a9198b4cf69713ba6aad943065bb405a424fc832da91246b153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
