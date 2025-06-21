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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIDJKB4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdVWbxSCyZHfk9qPPNeuvkJDFC12dp67X%2BdVwsV3U1sAIgJcAtfsM%2FiwEAYFohKEin1s9WjfBNPxjdpJuErgVI%2BAAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHQ3L%2F%2Bf4XlN41y2yrcA3MzqdHqtkygD1nqm3Pu8m8qI1ZKGTi9d%2FGOYwSHiY7QjWkebpAEngfDWBZHYm7kQ8PW2EObRTA1T7wOcTB0%2Bs2TrBpjk8SKtXlQ1eCqaOxbJ%2BjYnvF08bN5xedilWENU8xTqQmfDXRMSjDNm6ZtL5ZTBi63KGvUG%2Fw9EYdpQSfQwf9lPs%2BPDa9GFMTt377dUY05O04F967mE5%2Fi47q1Qx9Cr%2BzDulN1ksjGlgwFTWazFE5tgOsFSI4DU7EP3jtdE01pV67QGkZY06bekS%2FZO7ZzKmElUgYZK4jqf0TIf7XqKoi1%2B%2ByKavx%2Bbxi7bX4vviI7qhGGkHQML3c5zxnXVQqGeypbbC8wc1NF4pwc7peMziKssZBWtI2oe9A7tK6kZqDNzE%2BaKiKOeOi1PVRjzhuLHjex9oHl7Sj0PyO8zZLqjXrHrZA1CcBAazMWYRygdnO3krPF5qto4lnvn7Qg%2BTH5b1%2FiFF2WoZumN9jkIrvAZYta6mNbrMzA%2F%2BVjii6658iepHe60XKszGhTHd3nk8WJpL5cloCmrGxxnxo3tzdBPjR4IoJXQQAcoGjilNj6p013NWokLFgd0DuCrh4uT%2FX4R8uSZal1IjXBk81i8oWsboWVUzgYjZ2beM9VMLTe2cIGOqUB0hihntNzt5qQHmYD6%2BWzDXda9IgOltdN4INI%2FSys%2FvjTBA0zSFWyPegy3Y2tV1s5lnGqyhXt8PGayn5bXJPuzNmlsCx1O33Mt75wiYGrL60yzFbwkhQzueJXLCwk9x3yukWb2KNu%2FV33V183zdrvWKu1HbQ7dmksK9beGhZgKRgNrhCDisGE%2B4xszqhEK4TNbjL9aW1I%2FP9dHvvcSdtbaMo6wd9%2B&X-Amz-Signature=0c50d0d81ce5a474704c4871af2133f699a12e06490386a421fa3556fe5f35b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIDJKB4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdVWbxSCyZHfk9qPPNeuvkJDFC12dp67X%2BdVwsV3U1sAIgJcAtfsM%2FiwEAYFohKEin1s9WjfBNPxjdpJuErgVI%2BAAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHQ3L%2F%2Bf4XlN41y2yrcA3MzqdHqtkygD1nqm3Pu8m8qI1ZKGTi9d%2FGOYwSHiY7QjWkebpAEngfDWBZHYm7kQ8PW2EObRTA1T7wOcTB0%2Bs2TrBpjk8SKtXlQ1eCqaOxbJ%2BjYnvF08bN5xedilWENU8xTqQmfDXRMSjDNm6ZtL5ZTBi63KGvUG%2Fw9EYdpQSfQwf9lPs%2BPDa9GFMTt377dUY05O04F967mE5%2Fi47q1Qx9Cr%2BzDulN1ksjGlgwFTWazFE5tgOsFSI4DU7EP3jtdE01pV67QGkZY06bekS%2FZO7ZzKmElUgYZK4jqf0TIf7XqKoi1%2B%2ByKavx%2Bbxi7bX4vviI7qhGGkHQML3c5zxnXVQqGeypbbC8wc1NF4pwc7peMziKssZBWtI2oe9A7tK6kZqDNzE%2BaKiKOeOi1PVRjzhuLHjex9oHl7Sj0PyO8zZLqjXrHrZA1CcBAazMWYRygdnO3krPF5qto4lnvn7Qg%2BTH5b1%2FiFF2WoZumN9jkIrvAZYta6mNbrMzA%2F%2BVjii6658iepHe60XKszGhTHd3nk8WJpL5cloCmrGxxnxo3tzdBPjR4IoJXQQAcoGjilNj6p013NWokLFgd0DuCrh4uT%2FX4R8uSZal1IjXBk81i8oWsboWVUzgYjZ2beM9VMLTe2cIGOqUB0hihntNzt5qQHmYD6%2BWzDXda9IgOltdN4INI%2FSys%2FvjTBA0zSFWyPegy3Y2tV1s5lnGqyhXt8PGayn5bXJPuzNmlsCx1O33Mt75wiYGrL60yzFbwkhQzueJXLCwk9x3yukWb2KNu%2FV33V183zdrvWKu1HbQ7dmksK9beGhZgKRgNrhCDisGE%2B4xszqhEK4TNbjL9aW1I%2FP9dHvvcSdtbaMo6wd9%2B&X-Amz-Signature=9a4244be1981ee9c5ac8ded36959ab3332382fa32379515a2e2400dc57a4415c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIDJKB4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdVWbxSCyZHfk9qPPNeuvkJDFC12dp67X%2BdVwsV3U1sAIgJcAtfsM%2FiwEAYFohKEin1s9WjfBNPxjdpJuErgVI%2BAAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHQ3L%2F%2Bf4XlN41y2yrcA3MzqdHqtkygD1nqm3Pu8m8qI1ZKGTi9d%2FGOYwSHiY7QjWkebpAEngfDWBZHYm7kQ8PW2EObRTA1T7wOcTB0%2Bs2TrBpjk8SKtXlQ1eCqaOxbJ%2BjYnvF08bN5xedilWENU8xTqQmfDXRMSjDNm6ZtL5ZTBi63KGvUG%2Fw9EYdpQSfQwf9lPs%2BPDa9GFMTt377dUY05O04F967mE5%2Fi47q1Qx9Cr%2BzDulN1ksjGlgwFTWazFE5tgOsFSI4DU7EP3jtdE01pV67QGkZY06bekS%2FZO7ZzKmElUgYZK4jqf0TIf7XqKoi1%2B%2ByKavx%2Bbxi7bX4vviI7qhGGkHQML3c5zxnXVQqGeypbbC8wc1NF4pwc7peMziKssZBWtI2oe9A7tK6kZqDNzE%2BaKiKOeOi1PVRjzhuLHjex9oHl7Sj0PyO8zZLqjXrHrZA1CcBAazMWYRygdnO3krPF5qto4lnvn7Qg%2BTH5b1%2FiFF2WoZumN9jkIrvAZYta6mNbrMzA%2F%2BVjii6658iepHe60XKszGhTHd3nk8WJpL5cloCmrGxxnxo3tzdBPjR4IoJXQQAcoGjilNj6p013NWokLFgd0DuCrh4uT%2FX4R8uSZal1IjXBk81i8oWsboWVUzgYjZ2beM9VMLTe2cIGOqUB0hihntNzt5qQHmYD6%2BWzDXda9IgOltdN4INI%2FSys%2FvjTBA0zSFWyPegy3Y2tV1s5lnGqyhXt8PGayn5bXJPuzNmlsCx1O33Mt75wiYGrL60yzFbwkhQzueJXLCwk9x3yukWb2KNu%2FV33V183zdrvWKu1HbQ7dmksK9beGhZgKRgNrhCDisGE%2B4xszqhEK4TNbjL9aW1I%2FP9dHvvcSdtbaMo6wd9%2B&X-Amz-Signature=266394309bf6ec2c391cf4a4f6a4398b1ac33ca38db3d8b941b4b6ec4b383407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFGTGAK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG9zZGdUXK%2BD9fPec5NGVzVZnlfYW4uLGz20J3R5tDGAiEAiDYBJXvE8I3aZTMHiXJIGA4fQyGVDqYlCHhEnVUnOYYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWJ66%2Bvm3yZLPA1oSrcA4pq%2FNvaXc%2BRIoxuAA%2F7C8mxxjOULD5T4Gpy1l03KekkJuz7id9Q0cFF6eh83zQoYAcwoEey18OHuEOVElhHSaIxV0Wf64nEmO4o84ZuAiirXag0VfUY%2FVY1MDCMzpWVPWktu5NxACca3FDrMWVcdo3mM%2Fk4Tb0aryG%2FwbAVE1327x60rGwHcOhromncNrZZ7dEo5Dt32J1RQSSg%2BeaMyUmaIC9LGs9LshkkdT%2FeS5sz8OXWqMwNDp0Q%2BcDhk8OjwWDB2HEWTwSB3Twg9npU2kF2FTxLmcJoVPW%2FIrJw0qRkCdUj4ZvUgkv3W3BjJkWFH5HPha5mdD5LLtPRLkCKwFcuks%2BPOzLlfDf0ZPhOLA2E9tVGq89PeCOiZk1KFsYUzJBH%2BK7ZQL064e4k%2FsoWfKCFbWxbTwOjx%2F%2BYVsp06ppwoBNcp4OBS%2B0bJ7uai%2FReystp5XhlSfL1LYjVigK19NDlruUbKgqIvDDOq6AyuW5qHus7FGNDzZ6PJMYhel8i9Or93K5qU%2BBelVOjZOGsn9yReB%2ByRPYtykvIM17UwC71lLvi9D43AMqmc%2BZpKC0QdD%2FSyWgMA9s7bvLNveTSjdDdlDk1lznA5WSePuKYBD1xZ1wJ7%2BYr%2Bw1W3Th9MJum2sIGOqUBLPKYB5lrJZ0W7BrIhySY2ddI0qnHMsTatQ2EGXj3ZMw8o4qsGUVhsHAao4NY5R00IWBJlDe8vClwu7aW2AFvDKyh9h8Id9xLwN3sYxgTaqgiaFDh6jywuV84UpHSmeOznR2qvUgmsfDtea0cx3MCEGT6Q%2FJoNJCgrUUHqWHdKQ1z7PQhhOQltoUwHv5kg3VAXfnlln0aV3DP8JkJtvsRcjCypXGX&X-Amz-Signature=5a46a7637b826625ee1ca460716ba62b036e2a87084d4ccdbf1ad17b14f78bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZ6IJFX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfOFjkdKy8u1DlnhiyjsLTGD%2BEajPCYa40wQIHhpGc3AiA2z8Wv4l1%2F2J9mQVsv7uapnzTYL9JS%2Bo3YwmVDdgilASqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJN%2BszdTc%2FkkXoOosKtwDRWmc1kYZcHXoIEbD06JwbXFxNssYArWK%2FC0qPdLhdOEa8aXUoChmDoBXz7VaSD9%2FoFhAuXdsZTETW9mVk6iS7ksZtF0DMAQDSpsfh0r%2BjC9zwYTRmK2WU7NQHvLzkHiW8TNubtzQlGEAWyrRzXWWXTBEbY5Ei66A0gL%2Bxj2vuC3XhbexZEaMcDBL5awWlIqRso7v4ystoJTLw8yDSsHNS5UvsF5Wc48wfv3c3qZQL8tvDga1EG47tqXAanGFtGnuKsMErEuxSd1R7Q%2BqpphMtnDAxDuyhC3jws7%2Fev3gpuowpFMMRorC4MX3razAHoYQHw9W9LdAkDrf%2FBRmewm9WuToiBZHbm7hlEDP2Z4bibeuR8QALh2nzCEOfJaQ2IOvDrExkPMtnhYEXcAYno5FN4k%2BSvmQ6yh2vEUfEmjBiTtXi4c17G4uMUH1CHN2dVnYNH9Zpmsn%2FGnydAqkmPpzL5NYvoJ2YUAQIkuzcWVOUEugeOcPbKKztphTlsXowc9JOwMQdjRoieILnpa28hO6cQWiGtaQi86Ef6lJarOg6584r%2B7XU5DWnLliMdQegqPJUs%2F1KEIKCOLkKdrgN1rA%2FvVR7TeqXkVb6Uunu7EBuFmyAmV8VwkWq5%2BZat8wudDZwgY6pgGR5qkX8TQQ8jN0cvAP%2Fv6cRRQdhDJFTuZRQEU%2Fl0z6pNyuFvJZOlNk6CDsM6PL4VAzjD4nDsYeh4BTeuF2pSE%2FpxQrwttcITZ8AYBWvc7N%2FmUPOWc9X9QUrc0eMek7i8moHcwN9LMjv8tVxNpQhFmLLqbtH1OYaVOI2lVBDFhr1SC07M8IxZ3PBgzClFYXh59GOK0mAVv57747KtQbF4e9MrF2JWan&X-Amz-Signature=21f88f2556ea71c0ae89bfe71044716ef51cfff78c758048ef7bd491f31c6ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIDJKB4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdVWbxSCyZHfk9qPPNeuvkJDFC12dp67X%2BdVwsV3U1sAIgJcAtfsM%2FiwEAYFohKEin1s9WjfBNPxjdpJuErgVI%2BAAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHQ3L%2F%2Bf4XlN41y2yrcA3MzqdHqtkygD1nqm3Pu8m8qI1ZKGTi9d%2FGOYwSHiY7QjWkebpAEngfDWBZHYm7kQ8PW2EObRTA1T7wOcTB0%2Bs2TrBpjk8SKtXlQ1eCqaOxbJ%2BjYnvF08bN5xedilWENU8xTqQmfDXRMSjDNm6ZtL5ZTBi63KGvUG%2Fw9EYdpQSfQwf9lPs%2BPDa9GFMTt377dUY05O04F967mE5%2Fi47q1Qx9Cr%2BzDulN1ksjGlgwFTWazFE5tgOsFSI4DU7EP3jtdE01pV67QGkZY06bekS%2FZO7ZzKmElUgYZK4jqf0TIf7XqKoi1%2B%2ByKavx%2Bbxi7bX4vviI7qhGGkHQML3c5zxnXVQqGeypbbC8wc1NF4pwc7peMziKssZBWtI2oe9A7tK6kZqDNzE%2BaKiKOeOi1PVRjzhuLHjex9oHl7Sj0PyO8zZLqjXrHrZA1CcBAazMWYRygdnO3krPF5qto4lnvn7Qg%2BTH5b1%2FiFF2WoZumN9jkIrvAZYta6mNbrMzA%2F%2BVjii6658iepHe60XKszGhTHd3nk8WJpL5cloCmrGxxnxo3tzdBPjR4IoJXQQAcoGjilNj6p013NWokLFgd0DuCrh4uT%2FX4R8uSZal1IjXBk81i8oWsboWVUzgYjZ2beM9VMLTe2cIGOqUB0hihntNzt5qQHmYD6%2BWzDXda9IgOltdN4INI%2FSys%2FvjTBA0zSFWyPegy3Y2tV1s5lnGqyhXt8PGayn5bXJPuzNmlsCx1O33Mt75wiYGrL60yzFbwkhQzueJXLCwk9x3yukWb2KNu%2FV33V183zdrvWKu1HbQ7dmksK9beGhZgKRgNrhCDisGE%2B4xszqhEK4TNbjL9aW1I%2FP9dHvvcSdtbaMo6wd9%2B&X-Amz-Signature=5877ba5f5cf1402fef97dba5cbd6b8ce4fbee901523e195abd65563ab4195931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
