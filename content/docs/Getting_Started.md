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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QLWH7G%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCWHx8bObLlqO%2FpQlP5l1oBgpi1SdpaEP4r1kYFyhkRIwIgc%2FJ1JyRLeEXNSrMDdyvPv59C7GWRAVeF3htqPtsYH7Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFUHdDuCmnzS55GxlSrcA707Ez8k3j5aqdYkXmGWUt5%2F7Kyrj0llBCqW5OVFIlH%2BZ2FuRBHjOfaYn4FqPqGSn40VZtMMjRAsqOOzeW%2BM3fwkg0MAY0RFpje7CKVxfbiyr15mPf22aMTR1q4t68nL5Bconbi3mjBrqnZa9R543YXAz%2FpeAQC%2Bc5RrbmLtsiUs%2BJBN7BQWInNUxX%2BQUsaut%2B0LXr8hPG8wMLNSY6W5TKJwiaUC2g2cr5dGwCx3xNnPvv0hikikCcQybR92kc%2F2jv%2FfgzWKslvH0brXbFdF3VKKSgrL4z3QqzlKWup897QECdMfJDr4z7xsPPPq%2FTsTo6W9ZZTDLUpysZ6rC8w5GsAJ%2BK0Dz2cMmuXTpiQmDajzdcX515mr7UUvxs%2F4fDSCZfHIBseUCcfAnLbqmOIvCnD4Grc71jOHlfbg5V8NLgWjngyLw%2Fu%2FismpOtdjB%2FwjRXS7pQkHIX8eBBV0k1QOzJjoirzYDtSKAroCdD%2F6WHCY5JZrpDp2V9TDwdRmDS5snLX8q3CmP22TwsmKRys7tP9hHws8H0FsvwFO2exfpbFD1Qd4fBY23v5roz%2FMbT1HNFajZyT6%2FbPUqE9J2EO9DoSiaDgp97UzSbVOF7jpSkNzqVvHKJ2uJIhuxO5BML3Zl8QGOqUBGbpQ6YlkHSsY%2BcX1RbKrSBFuolpUaT7QxGM1DnhRQyBilXtqwaRdpZPPbi1zmOtBr1INGwdDRqcDdiWyvjrQJPOkdRZDtjcEty6Pe5cxzVa62dfrWVooU46KF%2B7qF2Vd8Fz1TeqiEnDsMQLoPYvBFPTixBiWAYFTkS8j1LBLc2g1zqObSksxVfXSScuA74J5nxLMO%2BmnxCvAyw90N%2BOzhjGjNPis&X-Amz-Signature=2ab3e79d67a904197c8c15358a00ff8e395753770d86e692e8dc4828a95fcd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QLWH7G%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCWHx8bObLlqO%2FpQlP5l1oBgpi1SdpaEP4r1kYFyhkRIwIgc%2FJ1JyRLeEXNSrMDdyvPv59C7GWRAVeF3htqPtsYH7Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFUHdDuCmnzS55GxlSrcA707Ez8k3j5aqdYkXmGWUt5%2F7Kyrj0llBCqW5OVFIlH%2BZ2FuRBHjOfaYn4FqPqGSn40VZtMMjRAsqOOzeW%2BM3fwkg0MAY0RFpje7CKVxfbiyr15mPf22aMTR1q4t68nL5Bconbi3mjBrqnZa9R543YXAz%2FpeAQC%2Bc5RrbmLtsiUs%2BJBN7BQWInNUxX%2BQUsaut%2B0LXr8hPG8wMLNSY6W5TKJwiaUC2g2cr5dGwCx3xNnPvv0hikikCcQybR92kc%2F2jv%2FfgzWKslvH0brXbFdF3VKKSgrL4z3QqzlKWup897QECdMfJDr4z7xsPPPq%2FTsTo6W9ZZTDLUpysZ6rC8w5GsAJ%2BK0Dz2cMmuXTpiQmDajzdcX515mr7UUvxs%2F4fDSCZfHIBseUCcfAnLbqmOIvCnD4Grc71jOHlfbg5V8NLgWjngyLw%2Fu%2FismpOtdjB%2FwjRXS7pQkHIX8eBBV0k1QOzJjoirzYDtSKAroCdD%2F6WHCY5JZrpDp2V9TDwdRmDS5snLX8q3CmP22TwsmKRys7tP9hHws8H0FsvwFO2exfpbFD1Qd4fBY23v5roz%2FMbT1HNFajZyT6%2FbPUqE9J2EO9DoSiaDgp97UzSbVOF7jpSkNzqVvHKJ2uJIhuxO5BML3Zl8QGOqUBGbpQ6YlkHSsY%2BcX1RbKrSBFuolpUaT7QxGM1DnhRQyBilXtqwaRdpZPPbi1zmOtBr1INGwdDRqcDdiWyvjrQJPOkdRZDtjcEty6Pe5cxzVa62dfrWVooU46KF%2B7qF2Vd8Fz1TeqiEnDsMQLoPYvBFPTixBiWAYFTkS8j1LBLc2g1zqObSksxVfXSScuA74J5nxLMO%2BmnxCvAyw90N%2BOzhjGjNPis&X-Amz-Signature=043c371cf0222abcd604635d859716d49485c0a6c524c62984d9a5e9e2391db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QLWH7G%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCWHx8bObLlqO%2FpQlP5l1oBgpi1SdpaEP4r1kYFyhkRIwIgc%2FJ1JyRLeEXNSrMDdyvPv59C7GWRAVeF3htqPtsYH7Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFUHdDuCmnzS55GxlSrcA707Ez8k3j5aqdYkXmGWUt5%2F7Kyrj0llBCqW5OVFIlH%2BZ2FuRBHjOfaYn4FqPqGSn40VZtMMjRAsqOOzeW%2BM3fwkg0MAY0RFpje7CKVxfbiyr15mPf22aMTR1q4t68nL5Bconbi3mjBrqnZa9R543YXAz%2FpeAQC%2Bc5RrbmLtsiUs%2BJBN7BQWInNUxX%2BQUsaut%2B0LXr8hPG8wMLNSY6W5TKJwiaUC2g2cr5dGwCx3xNnPvv0hikikCcQybR92kc%2F2jv%2FfgzWKslvH0brXbFdF3VKKSgrL4z3QqzlKWup897QECdMfJDr4z7xsPPPq%2FTsTo6W9ZZTDLUpysZ6rC8w5GsAJ%2BK0Dz2cMmuXTpiQmDajzdcX515mr7UUvxs%2F4fDSCZfHIBseUCcfAnLbqmOIvCnD4Grc71jOHlfbg5V8NLgWjngyLw%2Fu%2FismpOtdjB%2FwjRXS7pQkHIX8eBBV0k1QOzJjoirzYDtSKAroCdD%2F6WHCY5JZrpDp2V9TDwdRmDS5snLX8q3CmP22TwsmKRys7tP9hHws8H0FsvwFO2exfpbFD1Qd4fBY23v5roz%2FMbT1HNFajZyT6%2FbPUqE9J2EO9DoSiaDgp97UzSbVOF7jpSkNzqVvHKJ2uJIhuxO5BML3Zl8QGOqUBGbpQ6YlkHSsY%2BcX1RbKrSBFuolpUaT7QxGM1DnhRQyBilXtqwaRdpZPPbi1zmOtBr1INGwdDRqcDdiWyvjrQJPOkdRZDtjcEty6Pe5cxzVa62dfrWVooU46KF%2B7qF2Vd8Fz1TeqiEnDsMQLoPYvBFPTixBiWAYFTkS8j1LBLc2g1zqObSksxVfXSScuA74J5nxLMO%2BmnxCvAyw90N%2BOzhjGjNPis&X-Amz-Signature=504c81145ec653060682c3d8263abe3d1223ae50bc67d39a3ef69a4d55633b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJV3SN6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICDmWrN5%2FgcP4gEN%2BIyuqKVPsuBx1YYiUUwi8Q6CvdMjAiEAoejInurkOjTiLlYfvDrHc%2BdOtj3gAJPG%2FG81pgp1jE4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGVXaTzRSWqx4qEvzCrcA7iGsr72fOVL42WaVPp3H1r%2BEiyZq%2FWMzgET3xf75%2BftjqOQWwtz0n6Q8nMNXjQy8f0WnnJ%2B25sZOyGY5NNq8BnopqnhVT8XAe3E8RXoiYxWg1lEbu4w0iUZODgdzGgBx%2FxTWOs4G%2B6TyUneyMFexNZP1brcAJvHuBXvnArVQ9cSmWv9kBRwot3N21%2BvHcRJDCO0GVtwRTiSwYDjeKdAjAzWJsfEYXGXK37heGMu8ylhBWa8Ye3UP%2BiM6pWCXy4slFn6ihZzHRSw3K4gmbTtsx02FHYmqCL3VN%2BQx3AFrrfRCiBvxo7s4Z%2BfITJ07YrpDP51Bsh2%2BBfAfvcQV3yznt3MojNGQ3hsfm%2FNnnHE37rJCy5Mik0hq0uiUG4LDU6SmuHOAmJzUc2bPZlhbA0PLAaL%2Foslhf3INLOFT2Woyx4r3GNfKGinQcHS6wUkv%2FF9SU9V8MNbA6eSS7K02XUaD3y4O0aZQ0rJQCFBD7lGGpmvjCLBHG626JrW%2BISXBCAPnk2DcPOc9FqL6dvb5tZIatvSRYCYzOxr65%2Fca3hrAF7XC8iXZtWeAH9rajgNx76mV0kBPEXhUROKEnJaTQZnrETvBKtKGnWggYzcjgikQAILn8NqfY17beT3rAZZMInhl8QGOqUBSCSrJd%2BJ1p63bWJ5BeKl7JI4mfR2ACRi%2FZpHYoh2I%2Bu1lGEg2aP3O0CYbN%2FkdLijkTnAe7ytnMOKNba3zibPMH21G21qCqyK%2FrmLR7qISj7X8H2svtSpWlx8rvsqwdo75EcO5UHAE5F7tcSd%2BNkvlLYcAUN89%2FSw9hZ5k11mRLjYNcPFDpv%2BZtpiGkqkIvHunx0GEJR8ENdlu2dLyMYX4f3EfV1K&X-Amz-Signature=19842d58c580c34f2182cab9a645fce3a09fc5db425126ffbbabda00fcad284c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3VBZ3X%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDEO3Fy9hP%2BLc0wSNUrv39XRqJ8Qvoov%2FUSXMXmpmg6SAiAanm4yRfZTtodA1KE62Mk0YAyvzciIBqt75mTc2WL0hir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxn%2FsC9cpypCBe5PlKtwDPvZCkfeOD%2FNlnQGpya48pARpz7C5Ssjlcjljcj6NdGj86%2BA2oAnXjGzdmCt94xuqE6GmTG2g2cfYv%2FYEMzYSBqI79B2ko8izDL%2FOOvINT4rUacYHJoqenpky%2BUq2k2mQVamhJ5CdRzUK48wC1uyzLzx91jWHGBtNS2ikD3KmuzC9IvJH7TJlHbuDQurOXTHZ8VYPAU7S3MaajVzt006Iepk9A8rtBF09NrlARSLAVjtHqvWNrq7AVnkAyVkeyvCcJKishV8YH%2B7Fdfuv1UtlWIzGE6xK7EzQw5a%2FUxgxF1Z7HwzR6ftht4I3IHgiV7P8DrjyyBs3D8PLh00wkU8fs8U1Aueg2YfUznwYv8no6oSqmOjOINiUiB51bvTGT9JT2AaZoqVgk19crRQp9ijTvcOJJ1d0U5D3vEFfWOjrT6wrUxsKsWTQ5V9eFhiTmMZYJM9ZpIYeAS%2Bpq3M3H%2BWwFzsqiMZH35zke%2Bv0EfsjosrD7%2FCu5C98ulAkYKlWZXOQdJEgXWIHIZYYxjl%2Fp8SjPVbKuyZ7hbeLAj9qgUrfZDD4zMVfpIzUiscG54XZM%2FNlULIJkN942zwCKrEvkmzOg1Z28y%2Fq5W7opNvorZavFpcOcD89TjoeoY%2FG8CYwqNWXxAY6pgFRgjmQWixeLm4kMbe%2FM2gAJynleijwELZPcve6cv8Ph8Uw2lfJHup24h6Z6sZ5gWsAXCMXeMVffKCRUqv%2F1UvAmedie6uKivYgPYW%2BfUHP2hyQ6AWMTlvvW2cQ7MisdHpGGCOY26XcU1jUBslq60DnNh7mgPKXpNGW%2BcOYZSqBh%2Bqq8HJZAoe8zxIV4I05qsLZnzNi2YcfKgSGs6Bk%2BaDI8CFe8jGe&X-Amz-Signature=24d1f10e4c6e7bbece60e2911f0677ed8561b6e7176e2e0f5031bd2f1985f764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QLWH7G%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCWHx8bObLlqO%2FpQlP5l1oBgpi1SdpaEP4r1kYFyhkRIwIgc%2FJ1JyRLeEXNSrMDdyvPv59C7GWRAVeF3htqPtsYH7Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFUHdDuCmnzS55GxlSrcA707Ez8k3j5aqdYkXmGWUt5%2F7Kyrj0llBCqW5OVFIlH%2BZ2FuRBHjOfaYn4FqPqGSn40VZtMMjRAsqOOzeW%2BM3fwkg0MAY0RFpje7CKVxfbiyr15mPf22aMTR1q4t68nL5Bconbi3mjBrqnZa9R543YXAz%2FpeAQC%2Bc5RrbmLtsiUs%2BJBN7BQWInNUxX%2BQUsaut%2B0LXr8hPG8wMLNSY6W5TKJwiaUC2g2cr5dGwCx3xNnPvv0hikikCcQybR92kc%2F2jv%2FfgzWKslvH0brXbFdF3VKKSgrL4z3QqzlKWup897QECdMfJDr4z7xsPPPq%2FTsTo6W9ZZTDLUpysZ6rC8w5GsAJ%2BK0Dz2cMmuXTpiQmDajzdcX515mr7UUvxs%2F4fDSCZfHIBseUCcfAnLbqmOIvCnD4Grc71jOHlfbg5V8NLgWjngyLw%2Fu%2FismpOtdjB%2FwjRXS7pQkHIX8eBBV0k1QOzJjoirzYDtSKAroCdD%2F6WHCY5JZrpDp2V9TDwdRmDS5snLX8q3CmP22TwsmKRys7tP9hHws8H0FsvwFO2exfpbFD1Qd4fBY23v5roz%2FMbT1HNFajZyT6%2FbPUqE9J2EO9DoSiaDgp97UzSbVOF7jpSkNzqVvHKJ2uJIhuxO5BML3Zl8QGOqUBGbpQ6YlkHSsY%2BcX1RbKrSBFuolpUaT7QxGM1DnhRQyBilXtqwaRdpZPPbi1zmOtBr1INGwdDRqcDdiWyvjrQJPOkdRZDtjcEty6Pe5cxzVa62dfrWVooU46KF%2B7qF2Vd8Fz1TeqiEnDsMQLoPYvBFPTixBiWAYFTkS8j1LBLc2g1zqObSksxVfXSScuA74J5nxLMO%2BmnxCvAyw90N%2BOzhjGjNPis&X-Amz-Signature=312502042b05acb9fadde67d598f00c871324d5693a7ade4b83165af06cd5527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
