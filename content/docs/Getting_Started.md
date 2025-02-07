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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7WXIFV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCmSkEkVyrkOhd8M0cOJ4n9W6G%2BwaWyJmpKlw42d5curAIgAZxCAoM9HxjvWNd%2Bplcmd3eP5R9JjqmnsqeAxagFzbkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDC4gPE3LPsQpQOYP%2ByrcAy%2FbgQFnkoQ78ZUNHAfuVuu6ThkSW0%2F4s9CXqdtjs50DPI6GCuzcDGpwFXjELNqmy6hwL4L7tMel5bTlQ6huL8JuAAUrZrW7o0M8sj9CZVAMuQ%2BAfBkppv%2B7L4vXnoDtkNF4cgnUJBGjJmES%2FQV%2BJd4fHBb2pF11CvA5nxCtCMm1b10NWwCi9duvEsor56yiF11koaIAWiJZvY0BwW3%2Bv%2B7aPaKEHiS6fmftdaJyyMofPD2aKsAAsflPpZBv%2Fhbv4MO%2B9h188GhvYQGlRfdE09pvpVkMCBX8YfdmnbmSk6sh%2B4NBgs%2BwnRSNN3j9oPd5VYlS0CxXatNf3m3B8TCe4kVL6fChcPoj0YF0ycaTDJ5ZfchgyxfrL8D6pcMh7j9w%2BjhHD1TB9CCNRP%2FXh5TjbkKjLSkLxn1wXBwGniEqWJWDGBYdXcfH9%2BKf1e3%2B3hmy%2FsSvWw%2BFjGHSyjqjoDyupij4%2FHcisjWuOntqIXDsti%2FqdZuHZ8kBg%2BzDqfHhCSoMooFkU5jQ5BD3Jt2d2kF1qlpxus2AhgRAOmCpDr6yve6GaL%2Fhm0I4X5tMebuEi1sLfjKXAkoCS%2F2BQB22jqrDZWgEMpoZD6LoiUEEulbYyJB%2FIjpbNQVjlQX4Y8a5MIyAmr0GOqUB%2BPB%2F93acE%2BqINW7JaoFi4G0kBN6USJ1xXa2Pq5rwaACE53gUT%2BpCXo4kCLNLC67CM%2FGahQEuDoPJgyrcwe86dBiFdMojs8ZssLbaO9koljVuZ7eHcGbZBtZeT2yn2E0oIEaHkFbCSp4AKcAjKYZOYLf6%2F%2FwLGIA0ysFRKAnj84QLnfhTJ0AOMsgu2iaPw9HA%2BQUV4wJ0V1v9g8hV%2BK9cjMqL%2FBCm&X-Amz-Signature=c950375ae51ed89ae38ca35a2c6e09c706ee798e40cf33c316c62628a5f8ba66&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7WXIFV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCmSkEkVyrkOhd8M0cOJ4n9W6G%2BwaWyJmpKlw42d5curAIgAZxCAoM9HxjvWNd%2Bplcmd3eP5R9JjqmnsqeAxagFzbkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDC4gPE3LPsQpQOYP%2ByrcAy%2FbgQFnkoQ78ZUNHAfuVuu6ThkSW0%2F4s9CXqdtjs50DPI6GCuzcDGpwFXjELNqmy6hwL4L7tMel5bTlQ6huL8JuAAUrZrW7o0M8sj9CZVAMuQ%2BAfBkppv%2B7L4vXnoDtkNF4cgnUJBGjJmES%2FQV%2BJd4fHBb2pF11CvA5nxCtCMm1b10NWwCi9duvEsor56yiF11koaIAWiJZvY0BwW3%2Bv%2B7aPaKEHiS6fmftdaJyyMofPD2aKsAAsflPpZBv%2Fhbv4MO%2B9h188GhvYQGlRfdE09pvpVkMCBX8YfdmnbmSk6sh%2B4NBgs%2BwnRSNN3j9oPd5VYlS0CxXatNf3m3B8TCe4kVL6fChcPoj0YF0ycaTDJ5ZfchgyxfrL8D6pcMh7j9w%2BjhHD1TB9CCNRP%2FXh5TjbkKjLSkLxn1wXBwGniEqWJWDGBYdXcfH9%2BKf1e3%2B3hmy%2FsSvWw%2BFjGHSyjqjoDyupij4%2FHcisjWuOntqIXDsti%2FqdZuHZ8kBg%2BzDqfHhCSoMooFkU5jQ5BD3Jt2d2kF1qlpxus2AhgRAOmCpDr6yve6GaL%2Fhm0I4X5tMebuEi1sLfjKXAkoCS%2F2BQB22jqrDZWgEMpoZD6LoiUEEulbYyJB%2FIjpbNQVjlQX4Y8a5MIyAmr0GOqUB%2BPB%2F93acE%2BqINW7JaoFi4G0kBN6USJ1xXa2Pq5rwaACE53gUT%2BpCXo4kCLNLC67CM%2FGahQEuDoPJgyrcwe86dBiFdMojs8ZssLbaO9koljVuZ7eHcGbZBtZeT2yn2E0oIEaHkFbCSp4AKcAjKYZOYLf6%2F%2FwLGIA0ysFRKAnj84QLnfhTJ0AOMsgu2iaPw9HA%2BQUV4wJ0V1v9g8hV%2BK9cjMqL%2FBCm&X-Amz-Signature=e09b5b9758b5a24ff25845612f437327b28eae593ca27fbaae82571bf119c111&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJMY5G5%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC9dyLRc4Ey7AGLHZ5X7E6GBbb%2BPnQAjeFWYJvKewcETAIhAKEpttZskMp%2FV562KE0Qk3lRGphEVO8r54iBf63teA95Kv8DCH8QABoMNjM3NDIzMTgzODA1IgzSSz71qBoxj8XloDcq3AOveXEsBliH2e1ArqKQ2DIRuh2dS5ZKmVMbbvPBcXkWzX%2F4Jly1eHR6XXXAfTVTjVz65eviy1d6yoaL%2FGX9860GDdbOi%2FOF2r6GhBqHeNINvLxyfe6RmnOed2WQXPmY%2FXSxIg2v6zXpkl27zaHSbBWmGBuNoebHvv9lJecUnduBd05Tfe5DKX1LpEVNg%2FNGvrT%2BsTEVZofyag8XkDWQ5JO1jsDX4m1a%2BVEt7hZIQhesGqs693NJDuDfnBA%2F81fSMrbVO6YafBltPl%2B8Tbg9cviPASAGxke9O8u4Nmrkv2d%2FeWx8RBZKnvIlgehqC0uZLQPCVWPjrA86pEPtAibyhABpaDdKjaR4s6fkkC7GiTEbPd6wRvIqWYB5EBdZA5028EGgt%2FhLA7JnS100Lkb1WD4d2JGB0lPEVj%2F4otBgtfmDScloBE%2F2cQMHjcEr2RFSJfICxjx9UIGreGiw6obzIxxrgK2kp99iCXQcYnVA6jRGEDh3Ktz3RXq8zbM4ChGd4eu0waoLBo58nM63mVoiXkUAGg23sPwhqz3KeLqcvTR1G1ufAA42sf0toXs7D9O1CoGlM8lnS9%2Fi4R%2BEwzhyAVZBTv31S9IS9v8JEVlHAghGYBbOBYzapibPC9SXDDCv%2F5m9BjqkAVHSn2zDRr9s4mC81wgAeZy27NE51Ya054kA8HPCtVYanllCYzOWrYNT1rwc2mfexDjn64VB1XmCX1SZdakKdrw%2F47cs9%2FoTWLVzUJQKFI4aJGDUznv4Fc3pBQmWeilOQ0C2CwGZ%2BwdnvVwr1HxbtAeBMXj4McSvMdPEqGWa%2FUqPjEHbuaJfd%2F8fOFZyhxhZTmi3V1mcbQA%2FYSrYg1Y5Nrrfgl%2BO&X-Amz-Signature=cc968ebb28db50f54ca20b91beb6386462cde12567cfc1e9b235c0b0bad32978&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DRUB6JZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEpk%2BeAcIIcm8Dd01TkMGdiz%2B7iTQwz8LUn1aM13AHBeAiAcAhygLkxlvOnIK3Rzj4x3eC2G%2B9MlhVlWi1hAVVyqeCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMgtzOxzyLG5vxLDnpKtwDqGUv5KtiNKOwivR05%2BjppUR8EEMhUqxZ9%2F4pgN%2F4LPypkhEpdbW%2BMiHDvSADLXfh9qz9mqllZLKoDQsPX5kjYaWHdUz6u9eX2LdK%2FcBMTyBpNkxDpof7rJkAghr3HVJ1qh5kzBWA9BGVHsv%2B1ruczo%2FQ5Mler076bJClLGVGxN%2BqIIn1WFBSmMnLdKjwG5hjoa8tItBsnxeMn3O1B2SfcAAM2CV1S%2FFp9R%2Bj5UBH8JC%2BjwgY9I3fRuDkstEy6bf8KOBLq9tulot%2Fm%2FlufhewUBBCoN%2BNaVV4rDoper1f01geXbaioQMCW43xx3mnPkriY%2B7%2BtpNlMHKTFL%2F4HZJQXjbpdv0hvPI98%2Fr%2B8YF69aQ6EBPBke%2BX4zwmAMLd6GpZekSCI7J7HfvbYY2dofnYGVz0pOPoYyenaMbmOomACp5Gw1H35oS27JwncardQA2ZidEY84J9LMnhEvh9XMO4rlTg%2FwooVU41a4gj2B2O2xTpWgoaGtCusxeUzan44Wkrn43KrkgbAVhlczFU7cOXqD4spvVOLUFsH44tZcb8MEEDECF31eEa%2BsPDEcSrML5eF%2BCUt60L4dFGkzJyJAtitbYGVh6crsVYbKJpuIMoQ2FZDAzRFhueSq%2F1lYkw3v%2BZvQY6pgE1hHZoqzg1i2NNxuiMCXTubEn4rPUdRnbi9RljZoYOYQhXEXNR0ARow41noF7WpAx6wOxDnouX0k0jkMeJsJYN21Y63WfBBYoel6Y%2BWPV1e4XOOc4oY2LFJvNemdCVM8d%2F9o%2BvYRuSMzvlC1mmLeI%2FllC7QEX%2BZlWD1X059TKHVNcXxbq5N5zWGK0cFmHXXv73NYiwmiW1MN7vEWIAOGmV5uHC%2FDqe&X-Amz-Signature=26c4a3f24163fdd7182b6c873101893b7a00595ea371c0f5a0a16b2a5f07d783&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7WXIFV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCmSkEkVyrkOhd8M0cOJ4n9W6G%2BwaWyJmpKlw42d5curAIgAZxCAoM9HxjvWNd%2Bplcmd3eP5R9JjqmnsqeAxagFzbkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDC4gPE3LPsQpQOYP%2ByrcAy%2FbgQFnkoQ78ZUNHAfuVuu6ThkSW0%2F4s9CXqdtjs50DPI6GCuzcDGpwFXjELNqmy6hwL4L7tMel5bTlQ6huL8JuAAUrZrW7o0M8sj9CZVAMuQ%2BAfBkppv%2B7L4vXnoDtkNF4cgnUJBGjJmES%2FQV%2BJd4fHBb2pF11CvA5nxCtCMm1b10NWwCi9duvEsor56yiF11koaIAWiJZvY0BwW3%2Bv%2B7aPaKEHiS6fmftdaJyyMofPD2aKsAAsflPpZBv%2Fhbv4MO%2B9h188GhvYQGlRfdE09pvpVkMCBX8YfdmnbmSk6sh%2B4NBgs%2BwnRSNN3j9oPd5VYlS0CxXatNf3m3B8TCe4kVL6fChcPoj0YF0ycaTDJ5ZfchgyxfrL8D6pcMh7j9w%2BjhHD1TB9CCNRP%2FXh5TjbkKjLSkLxn1wXBwGniEqWJWDGBYdXcfH9%2BKf1e3%2B3hmy%2FsSvWw%2BFjGHSyjqjoDyupij4%2FHcisjWuOntqIXDsti%2FqdZuHZ8kBg%2BzDqfHhCSoMooFkU5jQ5BD3Jt2d2kF1qlpxus2AhgRAOmCpDr6yve6GaL%2Fhm0I4X5tMebuEi1sLfjKXAkoCS%2F2BQB22jqrDZWgEMpoZD6LoiUEEulbYyJB%2FIjpbNQVjlQX4Y8a5MIyAmr0GOqUB%2BPB%2F93acE%2BqINW7JaoFi4G0kBN6USJ1xXa2Pq5rwaACE53gUT%2BpCXo4kCLNLC67CM%2FGahQEuDoPJgyrcwe86dBiFdMojs8ZssLbaO9koljVuZ7eHcGbZBtZeT2yn2E0oIEaHkFbCSp4AKcAjKYZOYLf6%2F%2FwLGIA0ysFRKAnj84QLnfhTJ0AOMsgu2iaPw9HA%2BQUV4wJ0V1v9g8hV%2BK9cjMqL%2FBCm&X-Amz-Signature=f7f49e9dbe2407d279aa1d935eed6c36df243a5d3a79692fa2c15fc45e06e341&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
