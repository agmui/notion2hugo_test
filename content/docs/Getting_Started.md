---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXVH3HL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDgcUV3jIscet1EcSpMkz%2FfRs%2B3T%2FVHqI%2BC41KreQnzKAIgDAxEs476gcODILFQ7ePWMku8tU5s9dODXvXnPk36h1oqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkbarw%2BqO6odPgAzyrcA4kOpdxve2xWt80wwTm71ZbCqCd3n1lH2%2BpvbYzeyOawi0kvxMaemyreZIck5k91V4CM4shncopfLby6RTK4iKEAE9QUgFmb9oqcOv8WDW7F1bMbyXIgfWVAKmHnrNcGWucEFdgv%2BQaxtQjzXSnk93Q9Ak5N9GfBnU2fNCWZ2hw3bv9MV3Mk7ijf0gJCFamf6pMM0Uf1X2rSue2sh1sPjhxVZaknoNgyW0ppwb7HNuU8%2FAfLbsq7k%2FA4tuCG%2F04xVbVv1SUqL2dun4lSAdhPS1ZbnnG8s%2FnvCWLUIZSuC6fXXRcccL%2BbI48wgP%2FiX7fMTpbS4GC8vN6%2BWLvsuaLsajKahGrQZA053VG7VOc12H9IGbpHwO9vcQfI5oiOAf4AhnI1cn9E3BGr8CbrIgBp7JBmyF6YY2zhthi1OozCugoG%2F8RIMQWPqCfMAGYWSvbCN5fd5wt39O7tston3xQ3NzRRbjNqreIuyHSo6AaA%2FYQRvyFkk%2BVn3XMv44kMsVvL2b%2FMgalvusSQjC7hUuCKoHnIFlmkPb8%2BBlgU%2FpWW4X1nYh0VhFXpawnC2afpPR%2Fgm5kPkXAP1JUz36Pc2%2BGxGg3TB5PII%2Bl%2BS41xhKfykPHRu5vDGWQbnvN%2F%2BDDQMI3qor8GOqUBQYn3TWP5YNvNMc7jjS1p7EoYRoeYwqb%2BQY0OYvbA8FYHZCOFax8GvNh27IyVmZURlIHXslVHJW5YymDsWJ5rwvapofmKVNF5TIt8OiJLWZwD%2BuiMm5rz7ri7pk%2BkQavqoZrDUKVhEEQ899rPW7vW3EINitwDmSomp0N0d0QsM%2FGyDvXHmXCeETXIZmYQklr3IGusQoyDCFIeM1CO%2FmlH0WMAxyQj&X-Amz-Signature=447528348b35f93d422c786f5f2a3aa129fb120b9d6ee8f6a34a294385e24541&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXVH3HL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDgcUV3jIscet1EcSpMkz%2FfRs%2B3T%2FVHqI%2BC41KreQnzKAIgDAxEs476gcODILFQ7ePWMku8tU5s9dODXvXnPk36h1oqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkbarw%2BqO6odPgAzyrcA4kOpdxve2xWt80wwTm71ZbCqCd3n1lH2%2BpvbYzeyOawi0kvxMaemyreZIck5k91V4CM4shncopfLby6RTK4iKEAE9QUgFmb9oqcOv8WDW7F1bMbyXIgfWVAKmHnrNcGWucEFdgv%2BQaxtQjzXSnk93Q9Ak5N9GfBnU2fNCWZ2hw3bv9MV3Mk7ijf0gJCFamf6pMM0Uf1X2rSue2sh1sPjhxVZaknoNgyW0ppwb7HNuU8%2FAfLbsq7k%2FA4tuCG%2F04xVbVv1SUqL2dun4lSAdhPS1ZbnnG8s%2FnvCWLUIZSuC6fXXRcccL%2BbI48wgP%2FiX7fMTpbS4GC8vN6%2BWLvsuaLsajKahGrQZA053VG7VOc12H9IGbpHwO9vcQfI5oiOAf4AhnI1cn9E3BGr8CbrIgBp7JBmyF6YY2zhthi1OozCugoG%2F8RIMQWPqCfMAGYWSvbCN5fd5wt39O7tston3xQ3NzRRbjNqreIuyHSo6AaA%2FYQRvyFkk%2BVn3XMv44kMsVvL2b%2FMgalvusSQjC7hUuCKoHnIFlmkPb8%2BBlgU%2FpWW4X1nYh0VhFXpawnC2afpPR%2Fgm5kPkXAP1JUz36Pc2%2BGxGg3TB5PII%2Bl%2BS41xhKfykPHRu5vDGWQbnvN%2F%2BDDQMI3qor8GOqUBQYn3TWP5YNvNMc7jjS1p7EoYRoeYwqb%2BQY0OYvbA8FYHZCOFax8GvNh27IyVmZURlIHXslVHJW5YymDsWJ5rwvapofmKVNF5TIt8OiJLWZwD%2BuiMm5rz7ri7pk%2BkQavqoZrDUKVhEEQ899rPW7vW3EINitwDmSomp0N0d0QsM%2FGyDvXHmXCeETXIZmYQklr3IGusQoyDCFIeM1CO%2FmlH0WMAxyQj&X-Amz-Signature=b8fbbc4c1b34de062af76230c1ce8df9a101464ac38be2b9f80a06814f2c4900&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VAYJACX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCdq6w3SQZneY2EsRKqzzinefROyH0fE0yN%2Ff6lFjpz7QIhAIKFFS6bdzJDpdmYYv90znF%2B82bRgVENbAMkZ2SxPCREKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIX7JnjC8iMdyyDggq3AMYIX7Ik%2FSCe9LkL1%2FDEZ8xSzC%2F4Hp4LdHrCX%2FdmM1MzxteV6gHoiPl1B8eyii9RkiHWecaez03vJ2mnMhki0X%2BcyYxG2eNCvvsfH86LvLwLMR1EZT%2FnbWy5iO2dJ%2BPwqWEzd7pr8xGIJ6o4%2BgaCR%2Fy%2B1CjdHUhykrNC6ZR2Dhoc4rtH6WoJyWsJzVTG9JXDnQ1TpQ0QJ5QpB8AAk7GZgqlkn1H1V1gFqnBMXXqej4Lvv7gLJZJx2K1VlUbEzaMrJ%2F3O4zFfRzDaV4QwMu28esGZS8oer%2BcTY8%2BMqyU0l0fIWfmnlIF9Ns1WswwNOh829jdvTX9HXj8vSxf9JuJuEh4vO7pwVDcMizWBNDOzTaSJNgaPCLl1aI6EZ9pOiBsEwM21iiDGKfOy95LuDdIJpzs16UIxeFAMk29QIVAhnoDSTEhxLXUlZqU0R7Ktvr3ycugsk7P7EKYbkLfEme4%2B0lycxlUNZD92Bua8X5oFOhJ3TD7WyYReo7iv99OVnMLGyhyqgO6CKEwTeiFkym%2BwKF7qe14uKmJhB475u8Tyto3z5PZNTm7FGzDuDs1J0onRoC5r%2BpYOEcftaiS3WN8TFK3amt5qA%2B7PH1ZNcf8GHWbOS4N%2B%2FUfQy8FRvenmzDo6aK%2FBjqkAbNyRjV90Ybz0QpEaUvWk1TKc%2FF%2Fcf7eDAzJItwOZ9vqA3kYYYfPQPo55WipfmpJGxKxBWNrRh5DISXJlJwOTTigAtvS1e%2BxxzSd6TpFF5KlGTtEpU6yIdFRoNqkqTCNt3SnWSqnabtRPdNIsf2ni5VcoOSyvPMDjLKVFVETU62017Y09yjOKPHBA6mVR2lK85pro5HklevzPDcVPNxxwwR5%2ByrA&X-Amz-Signature=e525be1d580e6a621ecec63463b3c18ee47de71a77e221700a14510578925a81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCMO3IYW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCJN5R8hw8jrhfqZQhwr4WjIcN%2B1qRwgLhOLxE1HSMa%2BQIgJtaftzXca7pfgXxnaXP8ZgA0PVfIHFIo262meE3BKkAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVMth4vYKMZRpXXwCrcA8r7SYlgJ%2BCD1hhMSR1gIc3qTCYs2XhjWMqLKbPg3Xl3RFQIWXjuOkb9P%2FmokBBjPMz3765vIF7s7%2FlesbcwxZAsIeyJUBeQUUtUgFnsGWayEoktu1fyXTGyxXU%2BrQLO7eDovqhJX1pSVou9Trg0IdbA7y%2FBVzPRaOIH%2BgK8uZui8QYiYU5PUQjiIr0xTs3yflBIXjr7QFaS5FQZN4H53PZ47FmUmRGVV6%2B4jmtHBX5gdyMNOs21DW4NbDRFXcB6B5JNTACEskhmHrC7GyJ7qPCW0aBnovHsRlvt%2FNVXyQYsOfMmzSfmYMIWdGpI4WPQhTjFlhqWMAOTwM12pO%2FLeKY8aFq3K0MSjuRmkFCf6vgVZzM0copo9pBw3syz6ISAUjBk43dr3B3fXvHebs%2F2%2BI10QWKEpHC%2BZhB9oMQ%2BM6Sm%2BCxBo5DYWtfMSbbR3c%2BrG5z5Dn8AEsfCreCQ40Lr9qiF0xvg1pJ89N2Oy6F1B2PhYXSWczsgiut0keJ1cCt4f0py0bRH%2FkOCYXx11i8I74KR0VnPACdakkGjIA1An%2FmBPEXTE7BOWDabRtpbCDmLeSwkLSPANWQlHVa%2F1DXFKPIREyt%2BtrHhgsPlku18XLlzYOFvi8qf5qU%2BBqorMKTqor8GOqUBZ0%2BnuECDrTloXNC4CK8p67BGhe3QRZNLHVTzpfre1uPU8R2kLnlp4kZpCo15SxcRT5yFuquSUWScYwoh%2FEljlOpLt3wFcLeTjNLHjypO08nEc0FMI203oLicn01kPEWMOhnR8zoRAujSmsbfjFWdwaDTaAXL1ooNbbmJA6zKF1v0%2F0UbUM6iGuQEzgKJRPt%2BuCexRpcUZ%2BH0hFsiUmVtnEpFs0aY&X-Amz-Signature=5b13461fd9543838ce7d189a08cf2de5f7a73ea8a7a1a0559f4206181f3d301f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXVH3HL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDgcUV3jIscet1EcSpMkz%2FfRs%2B3T%2FVHqI%2BC41KreQnzKAIgDAxEs476gcODILFQ7ePWMku8tU5s9dODXvXnPk36h1oqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkbarw%2BqO6odPgAzyrcA4kOpdxve2xWt80wwTm71ZbCqCd3n1lH2%2BpvbYzeyOawi0kvxMaemyreZIck5k91V4CM4shncopfLby6RTK4iKEAE9QUgFmb9oqcOv8WDW7F1bMbyXIgfWVAKmHnrNcGWucEFdgv%2BQaxtQjzXSnk93Q9Ak5N9GfBnU2fNCWZ2hw3bv9MV3Mk7ijf0gJCFamf6pMM0Uf1X2rSue2sh1sPjhxVZaknoNgyW0ppwb7HNuU8%2FAfLbsq7k%2FA4tuCG%2F04xVbVv1SUqL2dun4lSAdhPS1ZbnnG8s%2FnvCWLUIZSuC6fXXRcccL%2BbI48wgP%2FiX7fMTpbS4GC8vN6%2BWLvsuaLsajKahGrQZA053VG7VOc12H9IGbpHwO9vcQfI5oiOAf4AhnI1cn9E3BGr8CbrIgBp7JBmyF6YY2zhthi1OozCugoG%2F8RIMQWPqCfMAGYWSvbCN5fd5wt39O7tston3xQ3NzRRbjNqreIuyHSo6AaA%2FYQRvyFkk%2BVn3XMv44kMsVvL2b%2FMgalvusSQjC7hUuCKoHnIFlmkPb8%2BBlgU%2FpWW4X1nYh0VhFXpawnC2afpPR%2Fgm5kPkXAP1JUz36Pc2%2BGxGg3TB5PII%2Bl%2BS41xhKfykPHRu5vDGWQbnvN%2F%2BDDQMI3qor8GOqUBQYn3TWP5YNvNMc7jjS1p7EoYRoeYwqb%2BQY0OYvbA8FYHZCOFax8GvNh27IyVmZURlIHXslVHJW5YymDsWJ5rwvapofmKVNF5TIt8OiJLWZwD%2BuiMm5rz7ri7pk%2BkQavqoZrDUKVhEEQ899rPW7vW3EINitwDmSomp0N0d0QsM%2FGyDvXHmXCeETXIZmYQklr3IGusQoyDCFIeM1CO%2FmlH0WMAxyQj&X-Amz-Signature=1f4a0872722997b009eace11fb64853f5baf73a558576164711db770d7c83a87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
