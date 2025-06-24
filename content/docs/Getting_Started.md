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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWN5TJT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVecL0oE%2F6PyAdIz2lZLFf5qKnacOD3dbXCUTr%2BUM8wwIhAKAYdEwbA8cQz2tLFmK66JgFyDH8YZO5BYreHFFTd2ldKv8DCCoQABoMNjM3NDIzMTgzODA1IgxtagqqRUbxLtrEkigq3ANfDlJbLkLIUBqZOFUefEMY40LDBBXEDpBoTDbeFBmxl%2FUTzJ6Nmr4yzeKulq4ZBXLqDvFducNcZBQ5DsRlUyDw8izoSfAf0K6uDB6Jv%2Fcu50pziqSAavw0dckm14k%2BX6ZT7647wxyZNA8W%2FKEXwORqYZCXhyAvdSKM%2BYFwRzv%2FXkwGGrFEsHRHaq4Xol726RhPQ5LsydaImhB%2BIOM4lQDTMRv0s0hjAw9FqkIPSm%2Bui%2Bi8vQ%2Fq%2FiBkurqsg69aIdo90QWHFOXX0s4xbfHMnC0hnen66OxftSsZeFDcsT3iwYnyjeSJkEr2VqxbWM7%2BQB%2FkDkWuk3JEkeHD6ZhyTr3uYqVBMgjB9VnwQQokpcCLei1vifrvMNZBw%2BYkwJm2GlO4Bh9bTxGpLy%2BUCg9zZYcz0OaqxkeibEnJLLRQnaHe7C6cogzKreztJ7pUg%2FwJl3hqt6hBnjan1PUhjPFWimvYPy7%2B%2BDGtxIOkK%2BdVPsS%2FPFDmmQWVND9kyAcA77ZKtqifIQtaepWduvLXp614gmIqX9uy0rCa%2BhZomiAd9dqVxxWCR%2F49BFslRbiJ9vutnD1gybH6mvnFLSvZ24qJ22PMR0DThmGfIyaJkK1rs9ovH6QnbPvFDQ%2FSLX4A5DC11OnCBjqkASZYTSS8kUhH7paz8BN02IJ8nOMi9XyqMYVlU39RCAeVgV5XsVbyKjr92BFGy1XwBGDMEv8YYRUrvAuUvgGsIAghnZXQjDS%2BKGzYU8i9SojOKI8h1C8bYGB0%2BwBQU%2BFA%2FbTQjDumaag7pcXdl8DYXbGUJF7rEl30rlwjiNkMy9XWLZ1%2BFV0ibdWnwNHm4YLt1NU1DFUecea%2FeLjUDXhzxmc6%2F%2F81&X-Amz-Signature=a855e3435bb1d65255803ba27a030b5239d8ec63b548031100343d6c7ed87adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWN5TJT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVecL0oE%2F6PyAdIz2lZLFf5qKnacOD3dbXCUTr%2BUM8wwIhAKAYdEwbA8cQz2tLFmK66JgFyDH8YZO5BYreHFFTd2ldKv8DCCoQABoMNjM3NDIzMTgzODA1IgxtagqqRUbxLtrEkigq3ANfDlJbLkLIUBqZOFUefEMY40LDBBXEDpBoTDbeFBmxl%2FUTzJ6Nmr4yzeKulq4ZBXLqDvFducNcZBQ5DsRlUyDw8izoSfAf0K6uDB6Jv%2Fcu50pziqSAavw0dckm14k%2BX6ZT7647wxyZNA8W%2FKEXwORqYZCXhyAvdSKM%2BYFwRzv%2FXkwGGrFEsHRHaq4Xol726RhPQ5LsydaImhB%2BIOM4lQDTMRv0s0hjAw9FqkIPSm%2Bui%2Bi8vQ%2Fq%2FiBkurqsg69aIdo90QWHFOXX0s4xbfHMnC0hnen66OxftSsZeFDcsT3iwYnyjeSJkEr2VqxbWM7%2BQB%2FkDkWuk3JEkeHD6ZhyTr3uYqVBMgjB9VnwQQokpcCLei1vifrvMNZBw%2BYkwJm2GlO4Bh9bTxGpLy%2BUCg9zZYcz0OaqxkeibEnJLLRQnaHe7C6cogzKreztJ7pUg%2FwJl3hqt6hBnjan1PUhjPFWimvYPy7%2B%2BDGtxIOkK%2BdVPsS%2FPFDmmQWVND9kyAcA77ZKtqifIQtaepWduvLXp614gmIqX9uy0rCa%2BhZomiAd9dqVxxWCR%2F49BFslRbiJ9vutnD1gybH6mvnFLSvZ24qJ22PMR0DThmGfIyaJkK1rs9ovH6QnbPvFDQ%2FSLX4A5DC11OnCBjqkASZYTSS8kUhH7paz8BN02IJ8nOMi9XyqMYVlU39RCAeVgV5XsVbyKjr92BFGy1XwBGDMEv8YYRUrvAuUvgGsIAghnZXQjDS%2BKGzYU8i9SojOKI8h1C8bYGB0%2BwBQU%2BFA%2FbTQjDumaag7pcXdl8DYXbGUJF7rEl30rlwjiNkMy9XWLZ1%2BFV0ibdWnwNHm4YLt1NU1DFUecea%2FeLjUDXhzxmc6%2F%2F81&X-Amz-Signature=794581dc1c4a9ba8e68a35d8ccd1e9f9dcc94f539d1bc1b071d590177596c669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWN5TJT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVecL0oE%2F6PyAdIz2lZLFf5qKnacOD3dbXCUTr%2BUM8wwIhAKAYdEwbA8cQz2tLFmK66JgFyDH8YZO5BYreHFFTd2ldKv8DCCoQABoMNjM3NDIzMTgzODA1IgxtagqqRUbxLtrEkigq3ANfDlJbLkLIUBqZOFUefEMY40LDBBXEDpBoTDbeFBmxl%2FUTzJ6Nmr4yzeKulq4ZBXLqDvFducNcZBQ5DsRlUyDw8izoSfAf0K6uDB6Jv%2Fcu50pziqSAavw0dckm14k%2BX6ZT7647wxyZNA8W%2FKEXwORqYZCXhyAvdSKM%2BYFwRzv%2FXkwGGrFEsHRHaq4Xol726RhPQ5LsydaImhB%2BIOM4lQDTMRv0s0hjAw9FqkIPSm%2Bui%2Bi8vQ%2Fq%2FiBkurqsg69aIdo90QWHFOXX0s4xbfHMnC0hnen66OxftSsZeFDcsT3iwYnyjeSJkEr2VqxbWM7%2BQB%2FkDkWuk3JEkeHD6ZhyTr3uYqVBMgjB9VnwQQokpcCLei1vifrvMNZBw%2BYkwJm2GlO4Bh9bTxGpLy%2BUCg9zZYcz0OaqxkeibEnJLLRQnaHe7C6cogzKreztJ7pUg%2FwJl3hqt6hBnjan1PUhjPFWimvYPy7%2B%2BDGtxIOkK%2BdVPsS%2FPFDmmQWVND9kyAcA77ZKtqifIQtaepWduvLXp614gmIqX9uy0rCa%2BhZomiAd9dqVxxWCR%2F49BFslRbiJ9vutnD1gybH6mvnFLSvZ24qJ22PMR0DThmGfIyaJkK1rs9ovH6QnbPvFDQ%2FSLX4A5DC11OnCBjqkASZYTSS8kUhH7paz8BN02IJ8nOMi9XyqMYVlU39RCAeVgV5XsVbyKjr92BFGy1XwBGDMEv8YYRUrvAuUvgGsIAghnZXQjDS%2BKGzYU8i9SojOKI8h1C8bYGB0%2BwBQU%2BFA%2FbTQjDumaag7pcXdl8DYXbGUJF7rEl30rlwjiNkMy9XWLZ1%2BFV0ibdWnwNHm4YLt1NU1DFUecea%2FeLjUDXhzxmc6%2F%2F81&X-Amz-Signature=4ecbe4b7528f553bd382f303089ee39b636f3c76713889c8be0fb76f638bac40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CEA67S2%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCA1VgRQNfOoUD4Bq5qITAhL2%2FqwqDeQBO0DxGRgIoKygIhAILwhBUyqAGaQJhcpAjkBinZuJrTAcIXzGiJlmbvGr8gKv8DCCkQABoMNjM3NDIzMTgzODA1IgzvBM1EDpZK%2FepIC2Aq3APyoDAmOzFs1%2BaM2yjcrXfTl9%2BVb3gA8AIhO5NUWv31n5lPqmOgDMjw285xi50oybhl4Rn8mk7H%2Bq9TeG2VOteV6UescyJ2IwQzvQCkOOunKejPCVbZpJ4oNUs06EaMeEI4YJ3TwOYANgwRhSr%2BspBt4oh%2FzA5lfjmxPs%2BPNVyRkwp0Yx44XpIm%2FUkQ%2FfGttMP66atgVp9hvS7XNtHmlMpYz1KSNVe6i%2BI6ohLDqitoPZ1lJOXXXSb%2BJh8AFYQps7eYxUMzPqlz%2F13fG4xKOEmp6EdGOXOBLd%2FgbX5l%2B1A5KzVGc2z7RvHumoHR21%2B7yHKZzubFFp453qryF1LJxVe5IbYGby08DUpur6NRiHeTqrvIfoVhnEAci6H%2Fcan%2BD6aMNE4rWT3JD85ZM5DUsMLCs4a7EbLiiz9TI0lSZYNC1br%2FNuVRNseUz2tXl4PGKThzTCM7%2BJhwrnM6GSGsWu8864MFbmeq1Jd%2Ff7fQtS8rAJrWtzQzPpKD37d9BWdH5iIeBPxF7llvtUU3o7C236DpIg0UW%2BuAonSIAuYVCWJLbc%2B6GJYJUW58kALIJ3X%2FufbmG1a1hsHGjdf8qNqRbIQ6CX2uSCnzYyUgtebRU%2FIWdSSy3ZbQToaMqf57VTDYsunCBjqkAfjcNgfgDYUg611kerfhTq5YszPTNZ6FkXmpqm62mpvj9eGfhWHQrCTC7xp7iO%2FZxL0846p8ESlZM%2FY1eNfP0y3qjzJOV4fCSl0v8D7809CL29lo%2FShNlaHNFIfMjj2r8bZR27RmWao79fD43F%2BlGA7SwpXFHzc7xaV7Y0BDFoGJ%2BRXHt%2FFOicNsaBTv%2BLIazIlfgj%2FHOOTOaKtOialodSLNh7A8&X-Amz-Signature=b89d011e0c9e5b6fef56bf4237d6054a60bcc4c5706febf10705b9417315f22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYWZDHB%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCi6gDkXRZS0tZiIKtbG%2F1uGaBNwmcaBhSVahjPwuY%2FjwIhANBrh62f7C%2B%2BfvrPSb2rgygfZf9X5G8wdGNdNiRumwTFKv8DCCoQABoMNjM3NDIzMTgzODA1Igyo4Bdc5p4uIo9leNcq3AM4aJf7K13w4eAeXzlcYPYW7faWLSBBn%2BgZYd7rN8rU5J1YVCAu6WnkLOKSUdicQfVAd1RNxJnEbyyWLsDmV6eJRKMjOLEYX8pUIuNTCoV%2FwvOn0I7DFiRPm12zNkpL8r%2FYzLSMVGq0urq%2Fb4TrKlxC%2BMDQZCYs8454Z5nQkDZ9Xy6qc6DMiawoG%2B3I863dnFCnNz0Ra6a4gIHTM8zVMsGQWfXcs4zKxtBeJDf0c6AjfoiyOn8ET9Jc%2F2C%2Fuv%2ByMYdJPFaW%2Fxa2TZLWpY6P%2B5gW37%2FnOs7APQ0YKUES94UUD46gFpDhbyf0WoQpGdVM5%2FPAaYKJH8XerfWKaDFOKOrYdGrCdjpSzaTg4gO52aU5YKx2NSVt7o%2FN%2BafJWsPfFlk8UvvXSQYVSxZtbPwlom%2FGf%2F66wIpwby2AN4TP1QqJYzrg7KtaEyJ5gUn8%2FaN3dH2PYnRrpoEDL5RikubJ%2BxIBJ1B0neOJP1SmqwoQ3U4QQL6YetFIDAh7zGQ6T8RBkb9DniNUc3smT2ME3FURVPhQuTX0hEgL9WJsDMVldP3Ejnyv%2FeixKZGcQV1D%2BMoUUmQd6QE3jLLEOgRHe6bXGisAUYGC9%2FTZZsaHObt4G7LGvSnnxwmGhmjgF5te0zDs2%2BnCBjqkARmiCkeUIXBT1wmz8hdHCIaqjd%2BIlPY3BWHnjvoIY%2BO8XjEG1W%2FsSxKgeb6k7B6DYAzzY%2ByEXJkuo1ud3PnVlN%2BKLZJd5EvO56Js%2FDbZMXXS6RUJlyWl8rBCmQQpE4YUo7yntU7iw%2BFtgZ%2BCjcbR99vVZ0YB5%2Bpe1mV%2B%2FOYOcgx89JYg8RlrjkuzvcrDqezuLzAsUyUdydLcyegVO6b6EtwkVa6W&X-Amz-Signature=691054f1eac15ed8a9d8c06fff51b3d6e11fa8366c748e50bb5c924f60702885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWN5TJT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVecL0oE%2F6PyAdIz2lZLFf5qKnacOD3dbXCUTr%2BUM8wwIhAKAYdEwbA8cQz2tLFmK66JgFyDH8YZO5BYreHFFTd2ldKv8DCCoQABoMNjM3NDIzMTgzODA1IgxtagqqRUbxLtrEkigq3ANfDlJbLkLIUBqZOFUefEMY40LDBBXEDpBoTDbeFBmxl%2FUTzJ6Nmr4yzeKulq4ZBXLqDvFducNcZBQ5DsRlUyDw8izoSfAf0K6uDB6Jv%2Fcu50pziqSAavw0dckm14k%2BX6ZT7647wxyZNA8W%2FKEXwORqYZCXhyAvdSKM%2BYFwRzv%2FXkwGGrFEsHRHaq4Xol726RhPQ5LsydaImhB%2BIOM4lQDTMRv0s0hjAw9FqkIPSm%2Bui%2Bi8vQ%2Fq%2FiBkurqsg69aIdo90QWHFOXX0s4xbfHMnC0hnen66OxftSsZeFDcsT3iwYnyjeSJkEr2VqxbWM7%2BQB%2FkDkWuk3JEkeHD6ZhyTr3uYqVBMgjB9VnwQQokpcCLei1vifrvMNZBw%2BYkwJm2GlO4Bh9bTxGpLy%2BUCg9zZYcz0OaqxkeibEnJLLRQnaHe7C6cogzKreztJ7pUg%2FwJl3hqt6hBnjan1PUhjPFWimvYPy7%2B%2BDGtxIOkK%2BdVPsS%2FPFDmmQWVND9kyAcA77ZKtqifIQtaepWduvLXp614gmIqX9uy0rCa%2BhZomiAd9dqVxxWCR%2F49BFslRbiJ9vutnD1gybH6mvnFLSvZ24qJ22PMR0DThmGfIyaJkK1rs9ovH6QnbPvFDQ%2FSLX4A5DC11OnCBjqkASZYTSS8kUhH7paz8BN02IJ8nOMi9XyqMYVlU39RCAeVgV5XsVbyKjr92BFGy1XwBGDMEv8YYRUrvAuUvgGsIAghnZXQjDS%2BKGzYU8i9SojOKI8h1C8bYGB0%2BwBQU%2BFA%2FbTQjDumaag7pcXdl8DYXbGUJF7rEl30rlwjiNkMy9XWLZ1%2BFV0ibdWnwNHm4YLt1NU1DFUecea%2FeLjUDXhzxmc6%2F%2F81&X-Amz-Signature=d98824177ed36850bec009f6d6eb73ea0c6e8094c76dec6a5b888bbeae01970b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
