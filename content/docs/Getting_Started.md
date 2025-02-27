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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FJAVMT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDlB3LZz7Xm%2FTU5W0dOZZ%2BTVxOye0NV0kwX17aT0m%2BBVAiBT8ZFhC9n4Rt%2Bhlpxt9S99T1r2cEOYpaQqxjuIQyR65yr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM1YwO27glzwYX5GhXKtwDvXS%2FSdsOv3YJmMcCiUvf6b2VpxYMxfL2TGIRaS6G0wciTq4cBa4%2B%2B28npyN9wcWkS0SgqXZ4Oc4bAPQjD2Ez2%2FGp6kecbJS1lUV46JOqPVUKvv%2BaSLKQ2wBwxzsRzWmeXpWEHFzYZ7fzpsLgAi5uQeuJ0CZdlxoqe9we%2FKx93jyRkdcFn7IA3qLz6bjAH4Zxg8ddqI9k1Oc2YrPYpaawdAlv4Bvmg2Sc9xkoSCz2JaC%2FRscyYGedVEzFXlps%2BO43CMxmdC4EdFunZdkgSMSnugVH90GIHVysZUV%2Be8tlf2x3To5p7fsxXxMNmeJXolvFEw3eIcPAD0KSEMksZ21%2FNbvytBDfamsAqvUVwwdzKjPaPELuZ0QOSMtozI%2B8vja51kB3hy7wF4QmpcYAzyK%2FvALrgnT4%2F3cB7hvQTHYKG3N1FO8T17y9HGqSCfLCR%2FYesXJ88GoOAh8a%2FomL%2FUtdNJzJV1j6SzuqWzOcUFsNU6a1F8Zv%2FAA4ON%2FArgQzMWAzqhP5G8eKiGiQuhKkZrNCIl%2FQ95OqBbJpVOS%2Fhgzj3%2Bq6te3CZzUA0hoASGeEwLbg6xEPyZZSy6ihogjSDe4gCBW31wFiR%2FAfp6ApvpdaQWLqD%2Fl9xULWdbJVY70wj9D%2FvQY6pgFxMbLqI33WVPtFupwgryu96%2FRSJwuMEaCfEA4UYilVU0fSXXQhp3EMYazKNOIgHUmjb5FGd1EpPYu9Y4E8GOQoKLCAbml7%2BmyqvTi435no0jrDVyCfod1U8VTeENwWCIQn2G6w9dYGqar1SjyLF%2BegI2lVPF%2BVE3naRPECNsTi8j3frnbO0B8vi8B2oFyUa2W69UNAojeXAEGzQtvt3HM9KU90Cg9Y&X-Amz-Signature=05b53d21ba300a1cd96927d9e5204e5e1c384bc510b4b4abfc1219d4d939ce75&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FJAVMT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDlB3LZz7Xm%2FTU5W0dOZZ%2BTVxOye0NV0kwX17aT0m%2BBVAiBT8ZFhC9n4Rt%2Bhlpxt9S99T1r2cEOYpaQqxjuIQyR65yr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM1YwO27glzwYX5GhXKtwDvXS%2FSdsOv3YJmMcCiUvf6b2VpxYMxfL2TGIRaS6G0wciTq4cBa4%2B%2B28npyN9wcWkS0SgqXZ4Oc4bAPQjD2Ez2%2FGp6kecbJS1lUV46JOqPVUKvv%2BaSLKQ2wBwxzsRzWmeXpWEHFzYZ7fzpsLgAi5uQeuJ0CZdlxoqe9we%2FKx93jyRkdcFn7IA3qLz6bjAH4Zxg8ddqI9k1Oc2YrPYpaawdAlv4Bvmg2Sc9xkoSCz2JaC%2FRscyYGedVEzFXlps%2BO43CMxmdC4EdFunZdkgSMSnugVH90GIHVysZUV%2Be8tlf2x3To5p7fsxXxMNmeJXolvFEw3eIcPAD0KSEMksZ21%2FNbvytBDfamsAqvUVwwdzKjPaPELuZ0QOSMtozI%2B8vja51kB3hy7wF4QmpcYAzyK%2FvALrgnT4%2F3cB7hvQTHYKG3N1FO8T17y9HGqSCfLCR%2FYesXJ88GoOAh8a%2FomL%2FUtdNJzJV1j6SzuqWzOcUFsNU6a1F8Zv%2FAA4ON%2FArgQzMWAzqhP5G8eKiGiQuhKkZrNCIl%2FQ95OqBbJpVOS%2Fhgzj3%2Bq6te3CZzUA0hoASGeEwLbg6xEPyZZSy6ihogjSDe4gCBW31wFiR%2FAfp6ApvpdaQWLqD%2Fl9xULWdbJVY70wj9D%2FvQY6pgFxMbLqI33WVPtFupwgryu96%2FRSJwuMEaCfEA4UYilVU0fSXXQhp3EMYazKNOIgHUmjb5FGd1EpPYu9Y4E8GOQoKLCAbml7%2BmyqvTi435no0jrDVyCfod1U8VTeENwWCIQn2G6w9dYGqar1SjyLF%2BegI2lVPF%2BVE3naRPECNsTi8j3frnbO0B8vi8B2oFyUa2W69UNAojeXAEGzQtvt3HM9KU90Cg9Y&X-Amz-Signature=078f1b9811df000f64746c05d7dc89d11eca220d8f9df48ada26fa307706e3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOSRTFD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDEWk78UXQ9ApISg9vM9YAhuCREmgzpMNfyjxOHguKr4AIgYnX5xyS7svlomWVGsp04ynlhQpZqSplgLUZ8HFIPzdYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBXliF%2FKNt1EJtAF0CrcA1B8zfccQEAtLOgQsDyfujGncqVf5k1ZhZXfTvBPDXEnmXwOe8%2B%2FRdfc8Bb4pV%2Frq85BzGgeNKfVMv8Iek1lPEjaBHGV0GcfoFJSO9dLsPRvnty97c3RbMTB6N%2FvADWkbiRzRWDGeSDpVX4zYoE7bWFQVWqp%2BlOX28viis9MBVRL7cWt5IqUHJRbi%2FSVEOzAMp%2BvBU6rpEn0XrpCde2jH5RKYsxB9oRebjrSloohySTKYsebzN9vu47Udevq%2BqExF1iTj96ymSevANNzObKJpcegm9w5qEVH6eO9dlPVJkd9hfNViheCsu8eh7ZDPHCWKaDBe3pwIRZ%2B5sJU0C7lTL75%2BMyZSSeaz3TCg%2FIWpjnzkb5jNknoQUjBAeHRBFJVXNUc4AYlyzWDHZE0lRGpEYcn3%2FUUlOViS6rPVAFm2sMGiIVg2WUIb2whCRX50obiQSt7T6shT8UHK2PXKLIFATAqFCGGOkE7nV%2FWvUhUKMh7k%2BMxl5jamDnQXjVtEnAz4LDADTDocQE4mphHwYiju9tSQitqnfPbOMopkxWcHertNpT7UETEyegmOPHV%2BYxJyZYv%2B3MR4%2BLMgjIbTmvrEMLSeF7Twkmnt6w%2F%2F1c8Ff4fKlb0DoD4MD5TEB2SMLrQ%2F70GOqUBVm%2BdxPD4NQE%2By5S8edwGmbs9ZO73odSCOeGJXedmS%2FDhpRxznPDLsGHURwOvq223TilR%2BS8GR27p9laH%2BUIU2kSAMLAO9X%2BFkgJ4HQoq5p6NXkLV3dWBAUlIYHgvvPNuAFd0%2BDLHPTMZuRqtsSF6J45WKuDnpc4k0lyo%2FiF4b4g%2FKExVt5qWvuQqXoIhYdJucsD8BYZK4quJpj3FtLBPBuN2na%2BZ&X-Amz-Signature=ae677a9cdec336b7dbbf6cdee6b9a89b7551cbb0bc5d96d94ca63f62580e9b14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZA5JTX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDCwRujj12y0LAswGF5O0T04%2BI7c2mFOEybYd04ExixOAIgbord8SdYeI59SEoqHRQ1Z%2BGMTtvZpG1SuDDRBfn6P0cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKtRHROKqbfJQOaPPSrcA97Frmp78o%2Ba0PKZtt9mNY1M5yuUKBuGyn1cb2ezO4wJjCWPUee6tP7M8AJCO%2BWkUKk7tqDH8wKzRn2Q4JRg%2BeUh1jwSIU3WUmoYXY6srmGZwq%2F3Ill6GXvGEfsQ9g9y%2F%2Fma%2Fso6unvECCYoFQKOYGHPxM3cscznh1PRcivmOFTx6T%2FQx2p0lBwPTPYJDfU%2BxcB%2BzNEJGekRmcQ95nhhSadq7%2BmRzvDostbeG5CATmE22pjwJc6exJuH1OZYbrzdLDBsPYa7WN3snanJVRzQvQWsaYkY1DmMTe6boqBER6S1ggA6PV0xHS8cbkZj457TVtxUcJthTrA7wpPfB2mc2zb6jR36jBj%2FnorCSyrxvT5LV%2FaB0EGj6GYApgLjg6EFVPeXgGh1pGvp2eDNOAcECvn3j2SmkqDGooRWWLzbgEebHE1uD5rcRLObCcBmrrBlDjP6Se7WencKvY%2BivIH3N43J8JpeIARgGLPbSeryD6Q%2B3l34bsQmnQaNsA9rkIwuNk0Fau6el3WwFzO8%2FUemI2iVNG%2B%2Ff41u0W0mrh7e06rZwiV6ThWrQJJlWzh73NfrTigNDguahB2BnVvacWEKjGnwKzVBi5O0XjluxvxyzpJFwGrtXf04fczbyeuiMLvQ%2F70GOqUBCNrEl39Hp78ppg%2BD2FgndHD0iP9PFusL7m3650vFGFQZ3YaCTD%2BIvXljarMgvDpUiCZ6RM4A16dm2e%2Fg2s%2BKWa7BEMMvchqkMcuULWTuHYi5W4lrrOXQl4zFGRGQsfyJXc%2FsWMVB7E1CbcT2DeGExjQD7FbX%2B08tjD7dCeh6ZpBFMONpr7hXEyUkYdXFmhsqkNkCHm70KHy0209c0osED1291aS7&X-Amz-Signature=bf7ca2e32f7d353bda3800bd2a74f60fed73bdc737881529951071b4af898f33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FJAVMT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDlB3LZz7Xm%2FTU5W0dOZZ%2BTVxOye0NV0kwX17aT0m%2BBVAiBT8ZFhC9n4Rt%2Bhlpxt9S99T1r2cEOYpaQqxjuIQyR65yr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM1YwO27glzwYX5GhXKtwDvXS%2FSdsOv3YJmMcCiUvf6b2VpxYMxfL2TGIRaS6G0wciTq4cBa4%2B%2B28npyN9wcWkS0SgqXZ4Oc4bAPQjD2Ez2%2FGp6kecbJS1lUV46JOqPVUKvv%2BaSLKQ2wBwxzsRzWmeXpWEHFzYZ7fzpsLgAi5uQeuJ0CZdlxoqe9we%2FKx93jyRkdcFn7IA3qLz6bjAH4Zxg8ddqI9k1Oc2YrPYpaawdAlv4Bvmg2Sc9xkoSCz2JaC%2FRscyYGedVEzFXlps%2BO43CMxmdC4EdFunZdkgSMSnugVH90GIHVysZUV%2Be8tlf2x3To5p7fsxXxMNmeJXolvFEw3eIcPAD0KSEMksZ21%2FNbvytBDfamsAqvUVwwdzKjPaPELuZ0QOSMtozI%2B8vja51kB3hy7wF4QmpcYAzyK%2FvALrgnT4%2F3cB7hvQTHYKG3N1FO8T17y9HGqSCfLCR%2FYesXJ88GoOAh8a%2FomL%2FUtdNJzJV1j6SzuqWzOcUFsNU6a1F8Zv%2FAA4ON%2FArgQzMWAzqhP5G8eKiGiQuhKkZrNCIl%2FQ95OqBbJpVOS%2Fhgzj3%2Bq6te3CZzUA0hoASGeEwLbg6xEPyZZSy6ihogjSDe4gCBW31wFiR%2FAfp6ApvpdaQWLqD%2Fl9xULWdbJVY70wj9D%2FvQY6pgFxMbLqI33WVPtFupwgryu96%2FRSJwuMEaCfEA4UYilVU0fSXXQhp3EMYazKNOIgHUmjb5FGd1EpPYu9Y4E8GOQoKLCAbml7%2BmyqvTi435no0jrDVyCfod1U8VTeENwWCIQn2G6w9dYGqar1SjyLF%2BegI2lVPF%2BVE3naRPECNsTi8j3frnbO0B8vi8B2oFyUa2W69UNAojeXAEGzQtvt3HM9KU90Cg9Y&X-Amz-Signature=ab085a50fbaab09a74c845cde7110c86779f337085a6405a522691bdf7d4ded9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
