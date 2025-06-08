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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6KGXI2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDirvGd%2FGV0DwDE6IgkcaPXmGd%2FuosLkA5f3rIsAe%2F2FgIgfaKlaW5Pig6d7U2tjhd%2FL8mR6BZOwsVjMqrykd2SaEQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJuJGE50RGIryeYKircA0ZTXyOnVP6tUNZZQ3Qb4bfJrLErIZwgfBT2I1SHpAzPDmBE550Epf1q%2F7jOO4ZNbIf4Ko7mKo8uZlxQ0DMcNcm5vYrah4q5znEPlP1GfdJSK9tNL4T2OK4xNwmGbkALGiW7TMwNZQ5K7X7ccVuPenl%2F%2BsYMi3BZHXbAHSv8A2NX1mlh%2BAZrqybF2B4S0Ap9Ci2r9Em1yyrZ2OiDeCKT40mkShfuhfTaLyJTUchzpWoOsD4HaBmdNgaNy9Pdk%2BlkybmBk%2FQwIf7q75a%2Fot%2BKgMXavNdtnCm9%2BSkqyNfqwHVsenc%2FcDEyW4AcNrHBcnY8Oue5hvhMt7Xj0hJhWEjY%2B%2BfDyxQpih%2BmvBkYcGKSX86hpixS9YEVOcayjV3GyRWt3vkRzyyLncHchXQZH1EKcZeQ1Pd38EWzwbJpGR9vkg7L9im421kiKw%2FPnGed4W8klES080w0YFt1%2FrEivVmsth0FHGjS7d5Eh4N18ch6i1Feqr%2BjYgrZtQMv7zaC7Jy7QYmMMJJq3uWUjkzmIgfXaSBDBToYBpsQKaC0SE3f6mnyj9mbaIlg4X6GokHvjwTLmMFHXE8CEd8Z0fUQMVJlYbmDdYyEROQN63uY1m%2FfGn488fwEFR%2FOVd7Gcl0oMK2ylsIGOqUBpgh9oCDaZdInQY8Hk3tsRPsXXS0m8t8kY%2BEqckSLHP4mkdCH%2Fzv5BLdAyppKSlTCSoTPmSu0dPFlGIm8el8EPf9YdbWyRyACCgWt92vZqJ2sOJamR%2BdkgInVyC9IpXL9oAMZuWDxMv1WSWj2cFb8vrwfUwz%2Fcv8VJ5rCqFZiFV3dCQFAikHsNvOB%2FVU3AprHMCHOZMXtbn5x68aNC2SD71hmkWK%2B&X-Amz-Signature=43ce4da7a61b468d47914b55c2f86bffa792334f1675faa21a3b5a8df3fca029&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6KGXI2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDirvGd%2FGV0DwDE6IgkcaPXmGd%2FuosLkA5f3rIsAe%2F2FgIgfaKlaW5Pig6d7U2tjhd%2FL8mR6BZOwsVjMqrykd2SaEQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJuJGE50RGIryeYKircA0ZTXyOnVP6tUNZZQ3Qb4bfJrLErIZwgfBT2I1SHpAzPDmBE550Epf1q%2F7jOO4ZNbIf4Ko7mKo8uZlxQ0DMcNcm5vYrah4q5znEPlP1GfdJSK9tNL4T2OK4xNwmGbkALGiW7TMwNZQ5K7X7ccVuPenl%2F%2BsYMi3BZHXbAHSv8A2NX1mlh%2BAZrqybF2B4S0Ap9Ci2r9Em1yyrZ2OiDeCKT40mkShfuhfTaLyJTUchzpWoOsD4HaBmdNgaNy9Pdk%2BlkybmBk%2FQwIf7q75a%2Fot%2BKgMXavNdtnCm9%2BSkqyNfqwHVsenc%2FcDEyW4AcNrHBcnY8Oue5hvhMt7Xj0hJhWEjY%2B%2BfDyxQpih%2BmvBkYcGKSX86hpixS9YEVOcayjV3GyRWt3vkRzyyLncHchXQZH1EKcZeQ1Pd38EWzwbJpGR9vkg7L9im421kiKw%2FPnGed4W8klES080w0YFt1%2FrEivVmsth0FHGjS7d5Eh4N18ch6i1Feqr%2BjYgrZtQMv7zaC7Jy7QYmMMJJq3uWUjkzmIgfXaSBDBToYBpsQKaC0SE3f6mnyj9mbaIlg4X6GokHvjwTLmMFHXE8CEd8Z0fUQMVJlYbmDdYyEROQN63uY1m%2FfGn488fwEFR%2FOVd7Gcl0oMK2ylsIGOqUBpgh9oCDaZdInQY8Hk3tsRPsXXS0m8t8kY%2BEqckSLHP4mkdCH%2Fzv5BLdAyppKSlTCSoTPmSu0dPFlGIm8el8EPf9YdbWyRyACCgWt92vZqJ2sOJamR%2BdkgInVyC9IpXL9oAMZuWDxMv1WSWj2cFb8vrwfUwz%2Fcv8VJ5rCqFZiFV3dCQFAikHsNvOB%2FVU3AprHMCHOZMXtbn5x68aNC2SD71hmkWK%2B&X-Amz-Signature=81e1d52e158c52da4057bc9d16bcd03b6d986db7fd92cf6cb2a82077d5c308dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6KGXI2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDirvGd%2FGV0DwDE6IgkcaPXmGd%2FuosLkA5f3rIsAe%2F2FgIgfaKlaW5Pig6d7U2tjhd%2FL8mR6BZOwsVjMqrykd2SaEQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJuJGE50RGIryeYKircA0ZTXyOnVP6tUNZZQ3Qb4bfJrLErIZwgfBT2I1SHpAzPDmBE550Epf1q%2F7jOO4ZNbIf4Ko7mKo8uZlxQ0DMcNcm5vYrah4q5znEPlP1GfdJSK9tNL4T2OK4xNwmGbkALGiW7TMwNZQ5K7X7ccVuPenl%2F%2BsYMi3BZHXbAHSv8A2NX1mlh%2BAZrqybF2B4S0Ap9Ci2r9Em1yyrZ2OiDeCKT40mkShfuhfTaLyJTUchzpWoOsD4HaBmdNgaNy9Pdk%2BlkybmBk%2FQwIf7q75a%2Fot%2BKgMXavNdtnCm9%2BSkqyNfqwHVsenc%2FcDEyW4AcNrHBcnY8Oue5hvhMt7Xj0hJhWEjY%2B%2BfDyxQpih%2BmvBkYcGKSX86hpixS9YEVOcayjV3GyRWt3vkRzyyLncHchXQZH1EKcZeQ1Pd38EWzwbJpGR9vkg7L9im421kiKw%2FPnGed4W8klES080w0YFt1%2FrEivVmsth0FHGjS7d5Eh4N18ch6i1Feqr%2BjYgrZtQMv7zaC7Jy7QYmMMJJq3uWUjkzmIgfXaSBDBToYBpsQKaC0SE3f6mnyj9mbaIlg4X6GokHvjwTLmMFHXE8CEd8Z0fUQMVJlYbmDdYyEROQN63uY1m%2FfGn488fwEFR%2FOVd7Gcl0oMK2ylsIGOqUBpgh9oCDaZdInQY8Hk3tsRPsXXS0m8t8kY%2BEqckSLHP4mkdCH%2Fzv5BLdAyppKSlTCSoTPmSu0dPFlGIm8el8EPf9YdbWyRyACCgWt92vZqJ2sOJamR%2BdkgInVyC9IpXL9oAMZuWDxMv1WSWj2cFb8vrwfUwz%2Fcv8VJ5rCqFZiFV3dCQFAikHsNvOB%2FVU3AprHMCHOZMXtbn5x68aNC2SD71hmkWK%2B&X-Amz-Signature=36f37dab7f129e8df39d5594ff39a77f45ee5156ada06a8b66a2e9712485a370&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JFBJ5E%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWIwVJDWzY6JCHqSgGWqLB7sHIhqdE4cYLmt2CHQHPTAiEA8PIIdLk2m4nTF1VjPkt18jpiv2inJTDmbn85pMr%2BM9EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLDiXEuGCz6bthhkyrcAybwAWdHY8HCWfmnliKNWsXhuFzQTiuE8oTfTiyorlhsjY03fYvJM6oy5SdiInnvtBtlaniBuLG8z9cvdAW65OmsXi4K9uyKag05GggNSz1XAspi%2FbQlNtPDSyG5o9twtTmHUDRKf1%2B%2B%2FyI%2BXw%2B0xd3aE3lpH5J8wtPmwbEkOw0gDkHBBK%2BrZtW85jSCkAD8XXVp00%2Bq9MUvdpADiP4w8JNwmrnGC6xLbyz%2B7DKSCI4abI08lBp1m4%2FDV7PgMIR01t%2FZxiLxaptk38DwQ1TZ4a6yh7HyM%2BbP58QTOdtq3HO59vvc%2FktbnmUfH17Au6guB3OyNrwoKmjRzXt6hj2mDfz%2Fao%2Fvnj58XvMgD9SQVwSgp7DE5sp46WbJfLDf99MLtbtOheh3JmKym3zQXZH4mjAIYihUvALeVsq%2FK1s24rg7RC3n4eoR7%2FIFXMmRdMizFiXYpxiLFXTHFCr5bADy%2BBzmvPLL4RJYWOAk5wmQJPgf4dGNNW1xLdXohr8j3MyK02sRusp2rDyqb%2BheiHaWbM49BvBSrg10SYXLTPPJCxUm7bYH8LyZnbq3VGBmMScPX2tXFYO6qTjaeEKW4MrzM83ri4bm%2FLyZ6T79nnLaizQQquHrvumsjSWmdS4QMJSzlsIGOqUBOz7ehUh%2BLu7axuAfc1NW1UOp9EXzan%2B8ObePtZFl3j1duwrEeoMEJ2R4ND5sI6%2FCBQch0zcIdC3rIpKd9A5UulW2g1WiJz4uuQr7CU4Um1aZUU%2BcHdo6jANXRt6MnWLi0mYXwWlluQ9TfuK6d%2BS7gviUcvP6b6fKrOxgGFMt2yOGeZKSkwGZRm3ra%2FBloJm3%2F7ALJlIa%2FVJfnYCLfdMpioaRPhJR&X-Amz-Signature=e31ce58c2b93bd18cdb1c459f607d88d75ff37f1813110daa2edede735f6ea3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ4NKWYJ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtoWYDnulYzduB%2Ba8CCj1iUD1JByzmKVP%2FkHqVWRfV8AiEAkvtQb7kCZCQLz5IZ5DR05UHF82UQKY8nhH%2F32mgJIJwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKZqmILZzgj1LyVZyrcAwjXPaylliW%2F8xEak2mcwOJ41y61Tx%2FXEjw4ZlIvAgssl8P%2BOUKLEvPA89WVZjgibOanKKyJ2Rq9diSbkvlLcP4p2nMFTXD%2FsHdvQqzkWBm4J55l8phbUR7iX0M4%2B2GmRvrnKsxPjPuEkOKS0L4CXAkSl3gwYx75F8ZRIIFWimuZVzIKpKSsOlqQhMk90OmdLxrByzXgIuCyrOiw7hfPHeRyF%2FQIZoUuzQak6%2FOwvw6ULum%2Bk8cqkT0yfvTZgldLG8HrdEd9ox4tx2kqpSB9hpjrrlEvDGYJMxNbQ5jKJ8Hez3O3oZDQkMmpjKifOuK035SaUZVcR21yKnAGvOTVmgqcBOixqRqFzyiQvDZ1rE7RxV20Mt%2BgATPTt%2FhrOyzF8PT4%2BX0IvfaFiTgtimLdqMyVC0QWUH58jGoOUR6Oftmcfj4juWChsdhXdW0iGTsJxQ7HfHrXNSpoMg5W3iAahw858ikzcdqxcHef14DvWW71uP%2BccStEy3kVz6xgbGrWcunskxjDvU4Qt5PmLfH4v93TIP5YuwfpdP7hq4UwV4hoWNr5e4gXqdG8qxF4Q%2FZYTxJ451o5piCSJtJZmu5s0nFntdy0Pitd5DCMWGKc5%2B4rnxQ59d4STnHyj82VMK3MlsIGOqUB7takrz6mIZCesmZPP9KgOTYJWQn8FEvWmwrQcw2JmoTCbpAK8sMRcLFUcj6gK4sTgMwmgYtg4odn0uOUzqdBzQxMN67fbGJwtREvOdWtfgwsRKaYepftUX44g55p%2BrhEGq1S%2FG6NFpAa9FMm8CtCfqWsHjIzZzRxrFMGBIdod3AIgr5Yax5JbTjR03qwwBfuOm2uznFzwczWCohWex6Pz8B28RiS&X-Amz-Signature=cafb05991e33559129b41d0ad5d1c1f3e568ddc652a9a9f1173322659c35c3a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6KGXI2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDirvGd%2FGV0DwDE6IgkcaPXmGd%2FuosLkA5f3rIsAe%2F2FgIgfaKlaW5Pig6d7U2tjhd%2FL8mR6BZOwsVjMqrykd2SaEQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJuJGE50RGIryeYKircA0ZTXyOnVP6tUNZZQ3Qb4bfJrLErIZwgfBT2I1SHpAzPDmBE550Epf1q%2F7jOO4ZNbIf4Ko7mKo8uZlxQ0DMcNcm5vYrah4q5znEPlP1GfdJSK9tNL4T2OK4xNwmGbkALGiW7TMwNZQ5K7X7ccVuPenl%2F%2BsYMi3BZHXbAHSv8A2NX1mlh%2BAZrqybF2B4S0Ap9Ci2r9Em1yyrZ2OiDeCKT40mkShfuhfTaLyJTUchzpWoOsD4HaBmdNgaNy9Pdk%2BlkybmBk%2FQwIf7q75a%2Fot%2BKgMXavNdtnCm9%2BSkqyNfqwHVsenc%2FcDEyW4AcNrHBcnY8Oue5hvhMt7Xj0hJhWEjY%2B%2BfDyxQpih%2BmvBkYcGKSX86hpixS9YEVOcayjV3GyRWt3vkRzyyLncHchXQZH1EKcZeQ1Pd38EWzwbJpGR9vkg7L9im421kiKw%2FPnGed4W8klES080w0YFt1%2FrEivVmsth0FHGjS7d5Eh4N18ch6i1Feqr%2BjYgrZtQMv7zaC7Jy7QYmMMJJq3uWUjkzmIgfXaSBDBToYBpsQKaC0SE3f6mnyj9mbaIlg4X6GokHvjwTLmMFHXE8CEd8Z0fUQMVJlYbmDdYyEROQN63uY1m%2FfGn488fwEFR%2FOVd7Gcl0oMK2ylsIGOqUBpgh9oCDaZdInQY8Hk3tsRPsXXS0m8t8kY%2BEqckSLHP4mkdCH%2Fzv5BLdAyppKSlTCSoTPmSu0dPFlGIm8el8EPf9YdbWyRyACCgWt92vZqJ2sOJamR%2BdkgInVyC9IpXL9oAMZuWDxMv1WSWj2cFb8vrwfUwz%2Fcv8VJ5rCqFZiFV3dCQFAikHsNvOB%2FVU3AprHMCHOZMXtbn5x68aNC2SD71hmkWK%2B&X-Amz-Signature=cf134e918a94d3ecb8db208046072681792ac4d8061766ca759b4d63fa365600&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
