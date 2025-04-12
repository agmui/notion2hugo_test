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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T5OZN5J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIH5D6v6lY8O1cOL4OdubG1IvsrdcJmzouVBW4TlEOwBiAiAjnPmDtaQo6G5wUiFnRkmHAGnXcmQVe6VYCixlUSp1ACqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzJQexR73kJJKfWDKtwD%2F2mhZq1t571yKYnmmd%2B6GnxGZD9sGI%2BmIBkYwIPoIJaTdFuICtU81EvkSI1FHNgjUfrCVe3YM%2FfEFexFkn%2BwvDlhp5haBYk4nhqT28PR0yvv0%2BYKhcruHoPd85zKeneA5XhjjRGUicwdOOm9WfViX9LLuY6rR5L%2BxNGi2wVXblMzWHlC3mGDdRAtI0oeIq%2BC1piDB5hvPJHDH4Kne2q6bFfjcyyE7mkgRY%2Fo24N83Mc0j%2BbID%2BdHInv0QzwvQdT4koAhnv%2BRBPGY5a805d5U84hTMbZEYf4VZ4bvUvRwt4gMhnCwj7ZAAGyCzBBkV1GoEm9MPdr2Zu%2FPEkyqPlMumSSZcof%2BvtPt1ROcUT5dCREQjIG%2Fe%2FCi48NBGUT1CN7f2BopUEjCVzh6vJsFTQ9R9pU2DPgICoQpAG898Ox2L39ikuu35MXualBBIP0C%2BRpB4SKYOAEccgeNsfYV4tqfb0wtShBvAO4iBbbfkwfN%2B3Irpw9lYRctz0BoUUdPOv6s8FvysahtX0QhWdwuBKcenG9caRCLMGLkjvcgXegmhkgpAD9OP3RHbMNont8%2FMM5%2FsfpZVOJPi2eBFfmeGdU7BDaLg68oeS61GWzK%2FwNyWwu6RDec6J%2F2ulI6LeMwl9TnvwY6pgE3FYF%2Bf0yJvPkFHIDvJdAHx3V12mOJLnxUad2A4DLB6Y2EuFmXtVSkAmrMaxvLDfQ671vswsrFSrCklhcm0rOxZus2UqL0TtWmY7%2BCewuHa784EcvlyLblWf%2BIyhvNO42HMAhke6U19N4WzBpwqyqrNKLHGj4jB%2BOS1ngs1xF4MtLDIBb2Zj%2BBQ7yESlrvKg96x8IoVDV3rxHuVYGmI7MgWpc2J0Ba&X-Amz-Signature=2bb9eaf21b56bb4144b0306c812e3e0a3a3f8481f31739ee92dfa19a608e2ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T5OZN5J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIH5D6v6lY8O1cOL4OdubG1IvsrdcJmzouVBW4TlEOwBiAiAjnPmDtaQo6G5wUiFnRkmHAGnXcmQVe6VYCixlUSp1ACqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzJQexR73kJJKfWDKtwD%2F2mhZq1t571yKYnmmd%2B6GnxGZD9sGI%2BmIBkYwIPoIJaTdFuICtU81EvkSI1FHNgjUfrCVe3YM%2FfEFexFkn%2BwvDlhp5haBYk4nhqT28PR0yvv0%2BYKhcruHoPd85zKeneA5XhjjRGUicwdOOm9WfViX9LLuY6rR5L%2BxNGi2wVXblMzWHlC3mGDdRAtI0oeIq%2BC1piDB5hvPJHDH4Kne2q6bFfjcyyE7mkgRY%2Fo24N83Mc0j%2BbID%2BdHInv0QzwvQdT4koAhnv%2BRBPGY5a805d5U84hTMbZEYf4VZ4bvUvRwt4gMhnCwj7ZAAGyCzBBkV1GoEm9MPdr2Zu%2FPEkyqPlMumSSZcof%2BvtPt1ROcUT5dCREQjIG%2Fe%2FCi48NBGUT1CN7f2BopUEjCVzh6vJsFTQ9R9pU2DPgICoQpAG898Ox2L39ikuu35MXualBBIP0C%2BRpB4SKYOAEccgeNsfYV4tqfb0wtShBvAO4iBbbfkwfN%2B3Irpw9lYRctz0BoUUdPOv6s8FvysahtX0QhWdwuBKcenG9caRCLMGLkjvcgXegmhkgpAD9OP3RHbMNont8%2FMM5%2FsfpZVOJPi2eBFfmeGdU7BDaLg68oeS61GWzK%2FwNyWwu6RDec6J%2F2ulI6LeMwl9TnvwY6pgE3FYF%2Bf0yJvPkFHIDvJdAHx3V12mOJLnxUad2A4DLB6Y2EuFmXtVSkAmrMaxvLDfQ671vswsrFSrCklhcm0rOxZus2UqL0TtWmY7%2BCewuHa784EcvlyLblWf%2BIyhvNO42HMAhke6U19N4WzBpwqyqrNKLHGj4jB%2BOS1ngs1xF4MtLDIBb2Zj%2BBQ7yESlrvKg96x8IoVDV3rxHuVYGmI7MgWpc2J0Ba&X-Amz-Signature=6e25348e0954a4d21bac7f6a8e4c47b1ff5a8a45e276d7ab30ec599101776737&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CSG3I5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCdtAjt%2FTVm%2FDv04ATm01%2B5VqzfLZp1d7sXEOwyp9cbUAIgEXyFKpjUfuopcGCU9SbRNNWuc13TCK%2FUNbMAlHvJQ2QqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYPwKRAAi%2FYYh6QYircA00WNdN8HJ4zjhLGxJIes%2Bk51LzfDeP6EUBT%2FAzKe0dygNrEY21SOv3mxebKtKUuWDXPCdr14M1lQ3IqwcvljLh4rgEycBD3K3I%2BIpep%2FiKaS1kWc%2F%2B63AZZAYsyJewwLX72JKif%2FQkdxEgu8Sn1nn%2F6TzJ9JOyyEkqPkiFoIspB8VYiN3ZVsN1p8vQMqAgbQZjAqBivz8KT%2BGWja%2FN4YxeqoW%2FuxRhNovhCdLiaeqbz187jt4tIhwOnV5K2LtbkUF9Lhi4tfIlp9onfX1P15pXi4USYt2qSlhVQMIwW6uWSymRyZrGItY%2BOdsye%2Bxr2MCe0lk9IMLDnQ7Npe4gmesBoM3aUWB36hMh2H2O9s%2FOyB36IYBIo1PhmYCSEMraPcBf85EpO9VwOg8Cyrf7HcyYUVGbmAX2kVSb%2BuFP%2B7tzDofTAzKhmqctFqmh9jLelI%2BnUpa2rOh8tBBkpfjzTLCk%2FGzofejqFMtC4eqymnbpwSHucrJtkoHOeSduiU2DH2RbGfmEgxeKqIEYa%2FoPDPLXGaU7pITr30eHYUlUT%2FPXnsj8AlUuuR%2FpVjpJq3s13fFOHMJ6dfFqF9Qiq9I6BUtUISk6YPs2aqwUCcgzDkitlPgvuBp2JtXzk%2BoNVMPbT578GOqUBmf3ilwmPMSaA5Sa10gJWFjwrSb2jma1WAl2OsApfuDOO28Tr0QBIhgFD3%2BAr6%2FztvXAclyFhFF2lClaSQcdjqv4ep6FakYv4Qwlls9UJUYF2BFJTXoMf1T689R4h8apvZ726Ce%2FpUn7CcIVz0cvLEE5KtYNSCwmnstCsTaMqnxKMlK8K0Wb0MHJ97Eg92Mv8hJicULMkmQS6v9ZBKXdlywHQEoa2&X-Amz-Signature=cf8cf258b6f7bcadee5f2bae22004f68ba1eae2e7aecf0a444c1ca1cea8be350&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NBR7V7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCb9mmTMKVxCT2YFvJzOqpx5K%2FzZI1ltOCd41oZDTKj3wIhAJBHvireT3oqkVXulNqIYftnV%2BkR513WDWi%2FBxNFW1g%2FKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhbsh4G3rW9po26ooq3AMDlwdPtX%2F8L26rjadXHhMLZr%2BzIVeE32vGjL%2Bl1dmb1TDd2JfvgyDNBMt4%2Fo8FmL34DdV6VtMbJAE9fvz8zPdZxOr02fCDiYwmVojyyUzIptgkaOJgHE4KOAdrQm5IzuHsWzx1Q87z4udx0jqoxhjYuoGMjVfTcmfxD25gVsolef52r%2BmVrDiTJiLtam70jNQ1fx%2Bq33BX%2FjXFDPcwDPRwbF%2BgGV0KMMD1TiIS0xGJX0zxlsm5gjzGRvzQsIKOooIx7Yo94Kg%2F%2BRFJrcIeXssZJmF3lTZtQ%2Bzxzkvkw0c8L2vj5iW%2BVmpxRu4Iw0Uzu2ELGkyDNIb3nlxx%2FePFNZ4W%2FHM4pVZ3YQ8uQ1SqOKmP3okgIOxuhYAm1WHeGiiB5drTmmXyl5KsSmDJloAoiENJpwVDHaqMBlwEG1cxvwacZ1VOqwsYpdUYZ0VUevuCVt9Z8BX0YVl6BmT6MDCHcpD7WeIe%2B4o3skQZOoWjCt1dlc6%2BBmD6L8Sq4UreEUx72g8B0mwRWx1XLrrftN7lhcCn5wX9xeAV2bPJN%2FoBwo9yYvrJFYQ9Z99uDh33lvvedwatO1Wg6dk60NFltShdheL7ecxLBx8%2BNpB39hwZLKFpGyKdBbaRJoNQffFs6TCV1Oe%2FBjqkAeZyxn107OBdUtmtSWSvPtdg3dJFYsS77yfp8nfeA4aD1ZoArid2%2FEFeOaMW6amL2pmlObUGBk9vlfVjAgY7bf1mS7ALZdw6RBIORpstYm%2BcngH676GYtj6Xk4f%2FA%2FiFvQxh3VThCTjNEHvjVSAnNl3mUlOeNWOje3Di8vj%2FMFPXgQWhBp3ks5uhuz05C3tL1Ru4%2Fn4B4SfGwjkfZa8DpsRk6oGs&X-Amz-Signature=0ebaa018a7ecca25be2f7d66c4fd657e0ec9c2dca87a1210bcf17d8f316b453c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T5OZN5J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIH5D6v6lY8O1cOL4OdubG1IvsrdcJmzouVBW4TlEOwBiAiAjnPmDtaQo6G5wUiFnRkmHAGnXcmQVe6VYCixlUSp1ACqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzJQexR73kJJKfWDKtwD%2F2mhZq1t571yKYnmmd%2B6GnxGZD9sGI%2BmIBkYwIPoIJaTdFuICtU81EvkSI1FHNgjUfrCVe3YM%2FfEFexFkn%2BwvDlhp5haBYk4nhqT28PR0yvv0%2BYKhcruHoPd85zKeneA5XhjjRGUicwdOOm9WfViX9LLuY6rR5L%2BxNGi2wVXblMzWHlC3mGDdRAtI0oeIq%2BC1piDB5hvPJHDH4Kne2q6bFfjcyyE7mkgRY%2Fo24N83Mc0j%2BbID%2BdHInv0QzwvQdT4koAhnv%2BRBPGY5a805d5U84hTMbZEYf4VZ4bvUvRwt4gMhnCwj7ZAAGyCzBBkV1GoEm9MPdr2Zu%2FPEkyqPlMumSSZcof%2BvtPt1ROcUT5dCREQjIG%2Fe%2FCi48NBGUT1CN7f2BopUEjCVzh6vJsFTQ9R9pU2DPgICoQpAG898Ox2L39ikuu35MXualBBIP0C%2BRpB4SKYOAEccgeNsfYV4tqfb0wtShBvAO4iBbbfkwfN%2B3Irpw9lYRctz0BoUUdPOv6s8FvysahtX0QhWdwuBKcenG9caRCLMGLkjvcgXegmhkgpAD9OP3RHbMNont8%2FMM5%2FsfpZVOJPi2eBFfmeGdU7BDaLg68oeS61GWzK%2FwNyWwu6RDec6J%2F2ulI6LeMwl9TnvwY6pgE3FYF%2Bf0yJvPkFHIDvJdAHx3V12mOJLnxUad2A4DLB6Y2EuFmXtVSkAmrMaxvLDfQ671vswsrFSrCklhcm0rOxZus2UqL0TtWmY7%2BCewuHa784EcvlyLblWf%2BIyhvNO42HMAhke6U19N4WzBpwqyqrNKLHGj4jB%2BOS1ngs1xF4MtLDIBb2Zj%2BBQ7yESlrvKg96x8IoVDV3rxHuVYGmI7MgWpc2J0Ba&X-Amz-Signature=acabce7d3f103a0887f0b1dbb420e208a71d71a5b9019497974da1df82d6cd27&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
