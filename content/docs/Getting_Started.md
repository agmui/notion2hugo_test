---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQ5CIA%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDBed99wybYdZ%2FKTwX2AIXt0a%2F6T%2Bl5WI2eOAoWhJEvqQIhANPE6ekgNUNKsVHPxHaEdom8GKAyesouVlkrPvrrY9Z5Kv8DCD4QABoMNjM3NDIzMTgzODA1IgziwWPL7CyVxdnJo5sq3APL%2B4%2BTZ2WFTCnaf%2FHuc8wwIoPBkBmlc4tM8T99lznJMT3Hxx%2BmOsfsJI3rXuNXkZkzQvVuFLfKtj80vgzXx2XmCEpMKWgofBz61TNLm1HN818X%2FSVr13Q91Xw6mnAlTKq80Qypp0CYeviCo3uXjD9yqi49i5Bbnt8nX8zJsJJSlJrwaLffl0JnRwLmuIh%2Feob%2BphOfqvYlmjDDmjVicI1JmNO3A1oC1Z3uoZIuZSrQVmUFQSnLV2OIH3hnAPJ6VPRE6hfiLD0SX8%2FM80zK23VzdQLXTNt2Y4rboNDxElb9tGFG8JW8vDXZXaOlX8zmGS7095%2B1z%2FLHM8v%2BGbSTVTsSySIQaAnO7oA5cKg0oZMnmSq73Zua%2F%2FItcc5KrowrbTVkUgbEvXOWZAeFkEWF99EvDgCZ8v%2BWPR48yLqHNqRjPP4YoNXftssWqBF9pXVKYqVc8X6fr%2FvOBy%2B1E%2BTSuQctjZJkQAGHAIJHXpdNB9Dqu3noF512mEw4Mvw0vxVod5F1SWFiVzYdv7sTeCBrTU9QKQ9lcwqUpqEV1Ywy4jfQ0%2BLkwhddVsxf%2FHtIM96UaKkcN6nwYPCYjb%2FWduRW75oTIJIlffpAtaRIFweruh5io1%2FCYabWDphtkNWadjD%2B3PbNBjqkAfgjPU4JpGu2Il4qQREazob1a9Q7fo4IgcPv8SaEWOEOXi2hO26avDp1LYP66QauwuldZP%2BP5d0mdAdtcNYbCU0eKDkmKDOD%2B2fpiTZb56xfUBIQ3saMTbNuFlpC%2Fux8bz1k77KgQZkR6GywUSxPvXwZrD6avx9swi8Zf9qKs3Um1Xnbh%2BIEOalUaRZDzy0%2FhOpdfm4iEOeyfS8h9LcP0eJW9HtJ&X-Amz-Signature=8a925c9a80002a97a1d7aeda450849d73a9d12f20e8bbae52a2c491852b3d79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQ5CIA%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDBed99wybYdZ%2FKTwX2AIXt0a%2F6T%2Bl5WI2eOAoWhJEvqQIhANPE6ekgNUNKsVHPxHaEdom8GKAyesouVlkrPvrrY9Z5Kv8DCD4QABoMNjM3NDIzMTgzODA1IgziwWPL7CyVxdnJo5sq3APL%2B4%2BTZ2WFTCnaf%2FHuc8wwIoPBkBmlc4tM8T99lznJMT3Hxx%2BmOsfsJI3rXuNXkZkzQvVuFLfKtj80vgzXx2XmCEpMKWgofBz61TNLm1HN818X%2FSVr13Q91Xw6mnAlTKq80Qypp0CYeviCo3uXjD9yqi49i5Bbnt8nX8zJsJJSlJrwaLffl0JnRwLmuIh%2Feob%2BphOfqvYlmjDDmjVicI1JmNO3A1oC1Z3uoZIuZSrQVmUFQSnLV2OIH3hnAPJ6VPRE6hfiLD0SX8%2FM80zK23VzdQLXTNt2Y4rboNDxElb9tGFG8JW8vDXZXaOlX8zmGS7095%2B1z%2FLHM8v%2BGbSTVTsSySIQaAnO7oA5cKg0oZMnmSq73Zua%2F%2FItcc5KrowrbTVkUgbEvXOWZAeFkEWF99EvDgCZ8v%2BWPR48yLqHNqRjPP4YoNXftssWqBF9pXVKYqVc8X6fr%2FvOBy%2B1E%2BTSuQctjZJkQAGHAIJHXpdNB9Dqu3noF512mEw4Mvw0vxVod5F1SWFiVzYdv7sTeCBrTU9QKQ9lcwqUpqEV1Ywy4jfQ0%2BLkwhddVsxf%2FHtIM96UaKkcN6nwYPCYjb%2FWduRW75oTIJIlffpAtaRIFweruh5io1%2FCYabWDphtkNWadjD%2B3PbNBjqkAfgjPU4JpGu2Il4qQREazob1a9Q7fo4IgcPv8SaEWOEOXi2hO26avDp1LYP66QauwuldZP%2BP5d0mdAdtcNYbCU0eKDkmKDOD%2B2fpiTZb56xfUBIQ3saMTbNuFlpC%2Fux8bz1k77KgQZkR6GywUSxPvXwZrD6avx9swi8Zf9qKs3Um1Xnbh%2BIEOalUaRZDzy0%2FhOpdfm4iEOeyfS8h9LcP0eJW9HtJ&X-Amz-Signature=48472b753fea4fe1c66336d201b441447728517d56c40c3a58da5b849f233490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQ5CIA%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDBed99wybYdZ%2FKTwX2AIXt0a%2F6T%2Bl5WI2eOAoWhJEvqQIhANPE6ekgNUNKsVHPxHaEdom8GKAyesouVlkrPvrrY9Z5Kv8DCD4QABoMNjM3NDIzMTgzODA1IgziwWPL7CyVxdnJo5sq3APL%2B4%2BTZ2WFTCnaf%2FHuc8wwIoPBkBmlc4tM8T99lznJMT3Hxx%2BmOsfsJI3rXuNXkZkzQvVuFLfKtj80vgzXx2XmCEpMKWgofBz61TNLm1HN818X%2FSVr13Q91Xw6mnAlTKq80Qypp0CYeviCo3uXjD9yqi49i5Bbnt8nX8zJsJJSlJrwaLffl0JnRwLmuIh%2Feob%2BphOfqvYlmjDDmjVicI1JmNO3A1oC1Z3uoZIuZSrQVmUFQSnLV2OIH3hnAPJ6VPRE6hfiLD0SX8%2FM80zK23VzdQLXTNt2Y4rboNDxElb9tGFG8JW8vDXZXaOlX8zmGS7095%2B1z%2FLHM8v%2BGbSTVTsSySIQaAnO7oA5cKg0oZMnmSq73Zua%2F%2FItcc5KrowrbTVkUgbEvXOWZAeFkEWF99EvDgCZ8v%2BWPR48yLqHNqRjPP4YoNXftssWqBF9pXVKYqVc8X6fr%2FvOBy%2B1E%2BTSuQctjZJkQAGHAIJHXpdNB9Dqu3noF512mEw4Mvw0vxVod5F1SWFiVzYdv7sTeCBrTU9QKQ9lcwqUpqEV1Ywy4jfQ0%2BLkwhddVsxf%2FHtIM96UaKkcN6nwYPCYjb%2FWduRW75oTIJIlffpAtaRIFweruh5io1%2FCYabWDphtkNWadjD%2B3PbNBjqkAfgjPU4JpGu2Il4qQREazob1a9Q7fo4IgcPv8SaEWOEOXi2hO26avDp1LYP66QauwuldZP%2BP5d0mdAdtcNYbCU0eKDkmKDOD%2B2fpiTZb56xfUBIQ3saMTbNuFlpC%2Fux8bz1k77KgQZkR6GywUSxPvXwZrD6avx9swi8Zf9qKs3Um1Xnbh%2BIEOalUaRZDzy0%2FhOpdfm4iEOeyfS8h9LcP0eJW9HtJ&X-Amz-Signature=fe52b6827813ddbae27e6de3b90b1a61811918dc2c7b048b43f75d14ecf51373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFL5LU3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDdmugddCoqEYpq%2FQcMmw%2BGAEB6XAbiLw3UolqhuKHhkgIgFhDnQeKRoEeT3nPBkciAWG08cFMgOC148v3Ty1JYG00q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDI8DNm5Hch5TCtUKqircAy6Oqmn9UrlDeIG5aTWHOZ7JDeWCCgOZs41xcRKdmP7H4ZhYfFWVe9B5S%2BqcvKr0yJLWiErpE7g8QHWamPpwBt7PkySMWYC3yXJ73ONENyo9IbthceA%2BpNzloTm58hqPdao7l7lQEb99tduTICcqTnPxTupHa%2FG0aMhIWPknDQJ%2Fr1LMgo1Guw1rZGkfwR5JfN32WzP6e4zUOqTcPsRxltO4fl3td%2F48B8c1EaCT3Sfz0fJciwo%2FbaNjXH5KeYRCluGbrgR%2FHe%2BhscO%2BdsqSxMxQe7CS8uSnI29CkItQjOF2JkG3fT27IfA4iHqD7V1Kb%2FFW8Y3%2Bkkkyj1XlIX7UsLuQ%2BSERYpZT68BW0SyWFtbR8lj6upJAUyHowOH8dIakS7Cts30qFHHndPfHhL6NZVgbGlqhuGy8o8n3AbsefS7c6h2v5Ea6gaFzeD9arXW6muZS54we2J59VLPKOBrej16IrliUUcl0UaKbmqGg8AwS2IUguiIgkFF%2BXgcNDaMTLjewzHNsp5vFuimp7UJCBBMck09bwyprZbi4Rz%2FrYQdVOQBBUTLYMqefpe39O3Tz%2BM3X0R2dZ1NUejYwX6jqgM3Rn8hQlZIfVs4B5p1D56OZmfOuf47ge608%2BlA8MLeZ980GOqUBYt0lu7plcMQmI%2BJKq3rjOpo2yDLqX7TrOBIwvC3RvMX2UDm7W%2FxgPIQTk546%2BThRSqKuUeJWTb5O4Z10k4xTkW5f46o93q9KbC4htwSwOrG62IdpzWWpS3WsyRsyUQbuGuh3ZAivRgJMdCpydNR61YQrRy1qIRkA0Bi0hG7BCyRZmSKKlsdNI6HR5rEIVoYOOOblFdrZ84o2J79fviMdVL%2FYhukQ&X-Amz-Signature=f31a2ed77dce3d81c71b3229cde352acad0fd0847c4b9c6c627e4ace44c85895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UP5UHR%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBgg%2BM%2B3aMIrUk21GH3CmJf08AlOs9TtVUFXCQvo8F%2BxAiBh%2FphVrzc1xL8AjGNS3kTcwCO6H9Na8GH7iKEvWcvwsCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMknAzqETCrARFm8veKtwDqCkPCX44D2Tu%2Bymgl3ugsFRMdUVGfoTE%2B9XpJCbHy%2BX0hOIKFg4rdNOY73JwuVsiO3OG0ssTf27E4W5gnzTl892pfqMtJt4%2F4dBx6Vf%2FFzJuaBuSxuB3i6KNzjynCFbfJoIR5ZPPa34JGw0QoiVO596GUo9Xn%2FEkDL1A0KbJSbiSQZOSuUk4WpUindnR1q2yaKz9EhTSYE1%2FN6fib26Pbj6hO9aPoDc3Cnov8JV1YrD6bNIo4KAv3ah%2FDw22BLfQ%2BYMW3DgwrqqKGNt4EqLQmEZWW9dvmopcvifSCrGwAVFSAaOf6VXOQL%2B1fXIl0Bw4q%2FOV9GZhfRAn3KotrqEptfIOpVtxfx9Mg9vAbggTAVy7sPSzHi3LUDxIG6buhrMeqmTRdIq4IrqIGZQv54W%2BfNl2QqS3QOPDCwW9JVsVQdrzspiWs6IYc3FO1wqiT00t64qWLUF%2Fq8MK9qHhuD%2B59ILtgdi7F%2BPawQLwHo1XCU4j7nIPZCWwbtmcvAG0l5XbK11ZD0Dt3tYfHNHe0o4cskxjlrB2n3uidP%2F%2Fj70VN4akVn9mUS%2Fcxlotn3WatIqFXVBSWaHOg0DahqtMylXsejNNqYYc2fmMql4FQB6vRjyRIHB934zOb5V6CI0wy972zQY6pgGC9vTnJuvtlShcrYjY8wUcFEDNSkyLMCWrJEqAihjr4dB9xuiP1ukNnR4czMVASKRTmZMLBeKTQqNhEEZO%2BzMFj1LtvIXQXO4r%2BdEcnn9HnQHMVvyRZIaPbocFJ%2BASdMW4xIwn1ZC9s1l2%2FImL3wxBrgVVMIdtvvx05KLcXFoUePMje7hiteIiOlazl%2F5Mrjtnm5hHcOkkqhdBWf46movW33kTCScl&X-Amz-Signature=48ecaf17e92186deb96a2d0e49a342f00d311a18cd48927e5fd4bb05766e0ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQ5CIA%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDBed99wybYdZ%2FKTwX2AIXt0a%2F6T%2Bl5WI2eOAoWhJEvqQIhANPE6ekgNUNKsVHPxHaEdom8GKAyesouVlkrPvrrY9Z5Kv8DCD4QABoMNjM3NDIzMTgzODA1IgziwWPL7CyVxdnJo5sq3APL%2B4%2BTZ2WFTCnaf%2FHuc8wwIoPBkBmlc4tM8T99lznJMT3Hxx%2BmOsfsJI3rXuNXkZkzQvVuFLfKtj80vgzXx2XmCEpMKWgofBz61TNLm1HN818X%2FSVr13Q91Xw6mnAlTKq80Qypp0CYeviCo3uXjD9yqi49i5Bbnt8nX8zJsJJSlJrwaLffl0JnRwLmuIh%2Feob%2BphOfqvYlmjDDmjVicI1JmNO3A1oC1Z3uoZIuZSrQVmUFQSnLV2OIH3hnAPJ6VPRE6hfiLD0SX8%2FM80zK23VzdQLXTNt2Y4rboNDxElb9tGFG8JW8vDXZXaOlX8zmGS7095%2B1z%2FLHM8v%2BGbSTVTsSySIQaAnO7oA5cKg0oZMnmSq73Zua%2F%2FItcc5KrowrbTVkUgbEvXOWZAeFkEWF99EvDgCZ8v%2BWPR48yLqHNqRjPP4YoNXftssWqBF9pXVKYqVc8X6fr%2FvOBy%2B1E%2BTSuQctjZJkQAGHAIJHXpdNB9Dqu3noF512mEw4Mvw0vxVod5F1SWFiVzYdv7sTeCBrTU9QKQ9lcwqUpqEV1Ywy4jfQ0%2BLkwhddVsxf%2FHtIM96UaKkcN6nwYPCYjb%2FWduRW75oTIJIlffpAtaRIFweruh5io1%2FCYabWDphtkNWadjD%2B3PbNBjqkAfgjPU4JpGu2Il4qQREazob1a9Q7fo4IgcPv8SaEWOEOXi2hO26avDp1LYP66QauwuldZP%2BP5d0mdAdtcNYbCU0eKDkmKDOD%2B2fpiTZb56xfUBIQ3saMTbNuFlpC%2Fux8bz1k77KgQZkR6GywUSxPvXwZrD6avx9swi8Zf9qKs3Um1Xnbh%2BIEOalUaRZDzy0%2FhOpdfm4iEOeyfS8h9LcP0eJW9HtJ&X-Amz-Signature=bdd65abc6b1a27e40eb570d6895b9086e1cb996952118a0874c3e830bbc354fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
