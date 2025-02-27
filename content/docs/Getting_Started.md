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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPA5TVMZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCVbCtzCR8rQCYQ%2BekypzLt6fVL8bOCj54zY7U2hfzKMgIhAMmSw8linVJUPHHg%2BqBlGGgg5T%2FahCuX%2BmLEbE6DhrqhKv8DCHIQABoMNjM3NDIzMTgzODA1IgymWFlYCchUG4vSY78q3AP6WJ9QtkaQ05acd3brXM%2FQCLZPmdvxWfCOncPCZbRiIHevsipkY2o1HQ%2BJ63aH7QXYkmFkzg1cFPOjumllsQeNb69Q4DnOL1qxS41%2FxfPXn%2BOvzLStgh6nRWtQ0NhR5b3V7QHXFl6GrY88kffuVa21ZlbOwszjmfwehk34f7u0EtOdPgLaDp0B8pF6d8BUjGnCTTFUIN8KLgBEB%2BNchpnhFeVCf2tVWqatXrvcUh2NiZPfkiJ8c%2FvZ%2B%2BAeeDPD6ib5XdGMbFzF8hB1ItWaBU6PMFErKdJv51%2BVpD%2FvNwy6HV8Zgjsdf6A3Ya%2FQLDbe7kNAXJ%2BPP2LuN61JVh9Bj2P23LR1GTWGVw%2BcNaazidlFitqWFEbfn%2F1143CKfIgJU%2BNryA5VaqO2Yu9TXpk6Wcz2CZLsQ5eHIje75BrmeZPvDl35dBjf2FkX91hG51ZO3Pcr9LTTk9c3fxgTXh3Q7OajVwigfpnRLzI5p7JatA0IBsx43Eb7Aq0hHc5MVTlqRkDVrCNc3Kb99bQjpAJ6Kq84kGsohZE60jCR3AwKoGbEHMaZqgSHwEBvqbSlA6%2FfC6cSDTfq4qS7BcEh3Mezsrs1DXnKABw10RLQ2TcHAYd2Fhv75BZqcljEgM8x3jCN0oC%2BBjqkAek8O4KaW0HWu1%2F0Mkru1pdhMCDvILKvCckJLNE7rcA2GU1cR%2BQe%2F9Na1hG4NuuVjMB3KZLlzt%2B9cmGrxMTITx6Hj8AP%2F%2BuMVmODn%2BeBb%2Foswf%2B4XRVSzR%2BBR2hEKYvlXQzw5kJM019tku9sfzL7wuJukkkVUVOt9%2FPhE8EHGJPB3uzefevZEgy6NVf4WOpWMcuXv1sv9g6GE5gcFPsPq1QkN3J0&X-Amz-Signature=550afa21573786e0811c6271846df6dce651604f46f567c0c16dd3a79b362d24&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPA5TVMZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCVbCtzCR8rQCYQ%2BekypzLt6fVL8bOCj54zY7U2hfzKMgIhAMmSw8linVJUPHHg%2BqBlGGgg5T%2FahCuX%2BmLEbE6DhrqhKv8DCHIQABoMNjM3NDIzMTgzODA1IgymWFlYCchUG4vSY78q3AP6WJ9QtkaQ05acd3brXM%2FQCLZPmdvxWfCOncPCZbRiIHevsipkY2o1HQ%2BJ63aH7QXYkmFkzg1cFPOjumllsQeNb69Q4DnOL1qxS41%2FxfPXn%2BOvzLStgh6nRWtQ0NhR5b3V7QHXFl6GrY88kffuVa21ZlbOwszjmfwehk34f7u0EtOdPgLaDp0B8pF6d8BUjGnCTTFUIN8KLgBEB%2BNchpnhFeVCf2tVWqatXrvcUh2NiZPfkiJ8c%2FvZ%2B%2BAeeDPD6ib5XdGMbFzF8hB1ItWaBU6PMFErKdJv51%2BVpD%2FvNwy6HV8Zgjsdf6A3Ya%2FQLDbe7kNAXJ%2BPP2LuN61JVh9Bj2P23LR1GTWGVw%2BcNaazidlFitqWFEbfn%2F1143CKfIgJU%2BNryA5VaqO2Yu9TXpk6Wcz2CZLsQ5eHIje75BrmeZPvDl35dBjf2FkX91hG51ZO3Pcr9LTTk9c3fxgTXh3Q7OajVwigfpnRLzI5p7JatA0IBsx43Eb7Aq0hHc5MVTlqRkDVrCNc3Kb99bQjpAJ6Kq84kGsohZE60jCR3AwKoGbEHMaZqgSHwEBvqbSlA6%2FfC6cSDTfq4qS7BcEh3Mezsrs1DXnKABw10RLQ2TcHAYd2Fhv75BZqcljEgM8x3jCN0oC%2BBjqkAek8O4KaW0HWu1%2F0Mkru1pdhMCDvILKvCckJLNE7rcA2GU1cR%2BQe%2F9Na1hG4NuuVjMB3KZLlzt%2B9cmGrxMTITx6Hj8AP%2F%2BuMVmODn%2BeBb%2Foswf%2B4XRVSzR%2BBR2hEKYvlXQzw5kJM019tku9sfzL7wuJukkkVUVOt9%2FPhE8EHGJPB3uzefevZEgy6NVf4WOpWMcuXv1sv9g6GE5gcFPsPq1QkN3J0&X-Amz-Signature=1bbfb00a941a29e7ba4e891ef3e5c472a24c673d12460f3b4057f1df713d70ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EQ6EOQK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBMj1pMs0o4d0MVDa6yL9bSttJURs1RhgidE3SP%2F06rFAiEAqrVVZv7IPdu75OHbxHT10nEWumnes%2FBsBzBn5gVHl90q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDqtsxu7DQg3hoij6ircAxoH0nR0iGMK5hqvx%2BDNLJAQ19uYJ%2F%2Fyjv72A6vsfvD5xeg%2BPURlcHxLuvvFFAfKmmTHQ4B4o37lmdg%2BJxNlzCKbmY2LOWWU64VO3mrGgSwBQFAzBCvIYPq1N8hd61SIA36ZJ8tsLofhkjGjo5X0gFrhUpW2BNJbeU4mCtADHa%2B67FM65iWR3AkhpABZHXeZZiDYB2MOyGKsLvEB31cVj4kGHyzGqWUSyN%2FxF8yxCdeB%2BJYGdUBPga0FVxaSCu5aZ19v77RZ%2F%2BUKImQJKKw4qlp5IPPZak0eSyPvdw2TZuViAZCucBVgLlFzDnl%2BhzfFQdRU0UZ3eSpm2FO0ikErlJ4SLDEDNbgPO6JcbQewaXV46FHMe2mR1WEqY8uUIOW3OxFveFc83JSSPuMrc4ZJUHYle7c4wVM6V3%2BQyQvQQtCwbvay55LU9%2FGAirBZPWU8rrMzC99kYavSLatnc%2FGgsTyNzeXIGp%2B6ZUcldmGl%2BHFinONlj3iTJ55kYWorVYYZkModccgDtl4Cy3rcGCr8pGlOC%2FriYExDz7dslaU8yCTMyw0nRXIEj4ooG4aRR57O%2FIWWIj2qc730qcBjcquH7nJVWcfI%2FZ3YXgmZHrxNm2Zc%2FCfzcSLoeKha9Yy3MJDSgL4GOqUBR8IFnXSLsvYbXHoTdZaRohIgKZZ%2B3j1FJ8q2rvzG5xnIAo8v9rfteYxBout4RPJ769grcstwtj4m18yCgR5NNSZIyhmK9kEN6Zga8IuTndJBk%2BBQCYyqManuIgg5cUQDaE1nfGHrR2%2Biv6t7z41mMmezPh238txi7z7dMeWwn0USg8gb9VWGyl5QC1pB0fNFnvwI43ux6yBdrr19YEVrqC6Rj03R&X-Amz-Signature=f7eac3202f41c71c8b27ba36b038ce97934a4b1827d021ef02f158cf3fd22812&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNYDFG5F%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDVQaBhE7vWiSLeb%2FD9IBGpV9upED5%2BJHfolNIC%2BLUalQIhAPcyNs8Xo7t9yUJJiM1CPEbLcFEXe1nPL4XldE6UBogFKv8DCHIQABoMNjM3NDIzMTgzODA1Igwx4upWwelZvfHWWiEq3AO7beADfUCijX53XnMKFqmc5j709q%2BW9SHij6wNSE0bQniCe7S1ptuLbG%2Fgglqa0fphEudhLaCJUcQSY6JEtIlM8xmvYkT6Kkjf1hdNCgR1YBIgK7GaFVe4J0Hr95AVARDRJ0%2BxFIlr27URgRSxBMvIbEKj6Pa4abQubauOZBdR9%2Fz%2BnEN4HuES3cIT6YvnR9mUm0iIkCAOGkTGSqBXZtiZPVWWNXCUmNnk4uKRfDzRpJJDnAB1A8brH0gL92cwtFzdCWkynqVBiSmsFxGmuWLiBHouu5138Yjxj70nNRJwpGTlbqzUxL%2BNQDZXEO2Cizvkjmvh4dIXxPyCc4x5pi1x%2ByXjHoZ0zEJJzivx4rw6rBKCSQGZOA33eNebeFejDutCbplOXrMraOIx9sv3F9pkAgR%2FMDNPcFig%2B%2B1OXD3YZ%2BQSyXwTmXw%2FDsopM5Z9U%2Fo7IutN5AyMIQc76nnwjslJ2tb%2BzlUYH3dHIyoYzrcy%2Flfvgg8kVJRZ2us%2FBO3Db5UFngTDfkRjrO%2Fi%2BQIcK4NbvpOf6yZh9N8ZIwPGQyMC1XGJo8oqhSCEmfnxCceDmMBxg20AbNxcGF7wInwbCNbOBgoIw8W%2BMhd7s%2B1kMXqDsSv%2BVFByQgMfiSUeSzCM0oC%2BBjqkASIp%2BZluiKBDRvQ8lwfbi%2BkMQS7V7Cq9dOiKAUo9RMw8tu9chdBnvWn%2BmryNuRqMTSsCKkYfx89bBvPkVJLV66jzalmSnGhNjTXA6WSm3tzyOyt0w3kYi7LAryZXk9oWKTwFRrl5eL12O0q3NSMrFl796OqIWmeLiYTmP7Js0OsS9itsmCJjUUzcG3E%2F4XuTnJkZMS%2BGwpsNmxKSYMNRhOqbP1Yo&X-Amz-Signature=400e79da73b3b4fbbec811b497169bd81cd6d11987dc1b2f6033c87498049130&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPA5TVMZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCVbCtzCR8rQCYQ%2BekypzLt6fVL8bOCj54zY7U2hfzKMgIhAMmSw8linVJUPHHg%2BqBlGGgg5T%2FahCuX%2BmLEbE6DhrqhKv8DCHIQABoMNjM3NDIzMTgzODA1IgymWFlYCchUG4vSY78q3AP6WJ9QtkaQ05acd3brXM%2FQCLZPmdvxWfCOncPCZbRiIHevsipkY2o1HQ%2BJ63aH7QXYkmFkzg1cFPOjumllsQeNb69Q4DnOL1qxS41%2FxfPXn%2BOvzLStgh6nRWtQ0NhR5b3V7QHXFl6GrY88kffuVa21ZlbOwszjmfwehk34f7u0EtOdPgLaDp0B8pF6d8BUjGnCTTFUIN8KLgBEB%2BNchpnhFeVCf2tVWqatXrvcUh2NiZPfkiJ8c%2FvZ%2B%2BAeeDPD6ib5XdGMbFzF8hB1ItWaBU6PMFErKdJv51%2BVpD%2FvNwy6HV8Zgjsdf6A3Ya%2FQLDbe7kNAXJ%2BPP2LuN61JVh9Bj2P23LR1GTWGVw%2BcNaazidlFitqWFEbfn%2F1143CKfIgJU%2BNryA5VaqO2Yu9TXpk6Wcz2CZLsQ5eHIje75BrmeZPvDl35dBjf2FkX91hG51ZO3Pcr9LTTk9c3fxgTXh3Q7OajVwigfpnRLzI5p7JatA0IBsx43Eb7Aq0hHc5MVTlqRkDVrCNc3Kb99bQjpAJ6Kq84kGsohZE60jCR3AwKoGbEHMaZqgSHwEBvqbSlA6%2FfC6cSDTfq4qS7BcEh3Mezsrs1DXnKABw10RLQ2TcHAYd2Fhv75BZqcljEgM8x3jCN0oC%2BBjqkAek8O4KaW0HWu1%2F0Mkru1pdhMCDvILKvCckJLNE7rcA2GU1cR%2BQe%2F9Na1hG4NuuVjMB3KZLlzt%2B9cmGrxMTITx6Hj8AP%2F%2BuMVmODn%2BeBb%2Foswf%2B4XRVSzR%2BBR2hEKYvlXQzw5kJM019tku9sfzL7wuJukkkVUVOt9%2FPhE8EHGJPB3uzefevZEgy6NVf4WOpWMcuXv1sv9g6GE5gcFPsPq1QkN3J0&X-Amz-Signature=5caa1af2df2696208d1622ea920f737d45413aa650292730f8fd6bad9e81e506&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
