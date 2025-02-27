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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H7WQYCU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCE51crPGeAeB4nVrRInK4yoNw3gPGDdkf%2BZIv7NGExnQIhANZc69x5D9dRxMgOZotJ%2BL8LY1j6w2sY86L2VLFn0HaHKv8DCHkQABoMNjM3NDIzMTgzODA1IgyP6V%2Bg5FWqOwZSbtgq3ANryV4DvnJ%2FRYrAfhqSz23Uu8U6OvViRkz28skiIIMNKbJBYdY0jbMQDNAWF9gvbfSnJsamsph8ihs289Oia5HaFBDSYk6GRGrMstmUQSA3n%2FLbMf2ZObSAOZENqspjlFsRFdnONdISrRLkU95vQNu6B%2FJ94vUWgIl71lRxvx%2FZDeu8PFxj9FVxkY%2FLR%2BMr02z%2BWO9QoP9TOitnYcDFOwhWeA25RkH1MHFlrypcBvPdXtn%2FO1RIun2f2vD2FZs%2BrJMq8pwQi8%2Bov%2BWB%2BQdlQmWHckhbHVrsuh7MXPNhpcefEXSZjtW56IuOg40r4zJN9vkDFd8AQ%2BNbYAkO9pz3k0%2FrJ3rfPVqSdSjlGGtqepoymQmsE%2Fgy8uIuMoBxPXlt7zjQ87O243GnLzdxhsNJnBHCa7hhSjEJ%2FwIi6MQB7RbDWGzExPzn%2B3yKn70qMTg9t9Lo5Gj0SnKahoDPiFUrhU6wL7%2Fhbp1M4uABFEjwlHK6qUkOj8Uygya%2FuqkuPs5WxIYkAakRIwSaGsnikihmV3TwEIk0kFrN6D2zDrZ4VVG5%2FbASNZ3ONpIxDIMEBXPP7PGhr6mFQFyOeO7htKldK%2BzvLZsAAo6jGmMSknsDz1k45B3MUtplwI4cxU9HDTCjjYK%2BBjqkAbFbyWbTQnMsCSlj0lML1fzu7dQil15xBPe8AbEoX5LUe55JhLDDksaidWsoo8uDtTwf9yQGwZ4jc%2Fa0%2BKs%2BW3qBp3NXh6g%2FOCmGBiMyI%2FG3yda39w2K7%2FPQJPQMjJdotK1uKZBHMNYCxOuiN%2B8%2BldRLgLwyiQfDGr8vM75qMzbrZNChtPjgCrlIXZBTzVK8CoAqtgHOBpBfFGh%2BL0Ig1WQl83Or&X-Amz-Signature=f0bdc65ddf30d0c9e667269831ba61488c96c5758a9ecdf72616963ac528709d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H7WQYCU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCE51crPGeAeB4nVrRInK4yoNw3gPGDdkf%2BZIv7NGExnQIhANZc69x5D9dRxMgOZotJ%2BL8LY1j6w2sY86L2VLFn0HaHKv8DCHkQABoMNjM3NDIzMTgzODA1IgyP6V%2Bg5FWqOwZSbtgq3ANryV4DvnJ%2FRYrAfhqSz23Uu8U6OvViRkz28skiIIMNKbJBYdY0jbMQDNAWF9gvbfSnJsamsph8ihs289Oia5HaFBDSYk6GRGrMstmUQSA3n%2FLbMf2ZObSAOZENqspjlFsRFdnONdISrRLkU95vQNu6B%2FJ94vUWgIl71lRxvx%2FZDeu8PFxj9FVxkY%2FLR%2BMr02z%2BWO9QoP9TOitnYcDFOwhWeA25RkH1MHFlrypcBvPdXtn%2FO1RIun2f2vD2FZs%2BrJMq8pwQi8%2Bov%2BWB%2BQdlQmWHckhbHVrsuh7MXPNhpcefEXSZjtW56IuOg40r4zJN9vkDFd8AQ%2BNbYAkO9pz3k0%2FrJ3rfPVqSdSjlGGtqepoymQmsE%2Fgy8uIuMoBxPXlt7zjQ87O243GnLzdxhsNJnBHCa7hhSjEJ%2FwIi6MQB7RbDWGzExPzn%2B3yKn70qMTg9t9Lo5Gj0SnKahoDPiFUrhU6wL7%2Fhbp1M4uABFEjwlHK6qUkOj8Uygya%2FuqkuPs5WxIYkAakRIwSaGsnikihmV3TwEIk0kFrN6D2zDrZ4VVG5%2FbASNZ3ONpIxDIMEBXPP7PGhr6mFQFyOeO7htKldK%2BzvLZsAAo6jGmMSknsDz1k45B3MUtplwI4cxU9HDTCjjYK%2BBjqkAbFbyWbTQnMsCSlj0lML1fzu7dQil15xBPe8AbEoX5LUe55JhLDDksaidWsoo8uDtTwf9yQGwZ4jc%2Fa0%2BKs%2BW3qBp3NXh6g%2FOCmGBiMyI%2FG3yda39w2K7%2FPQJPQMjJdotK1uKZBHMNYCxOuiN%2B8%2BldRLgLwyiQfDGr8vM75qMzbrZNChtPjgCrlIXZBTzVK8CoAqtgHOBpBfFGh%2BL0Ig1WQl83Or&X-Amz-Signature=97b62188a441ac4d356327d23c6c68479b1326cc671894fb5cd7076ca8b75547&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5HAVGNB%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDDxOpBPoW1K5cFyChmft%2FmXrnMqFKpCoSYfKqFXGY0YgIhAO2YuIxOw0vxKXrQNJu%2BRfhPkiCqN3b1cwHaLJCVw4XWKv8DCHkQABoMNjM3NDIzMTgzODA1IgzPoVr9cskSAddKk3oq3AOQD9fqHyY%2BN90YGAUwehtd0E0icf9TWN72YyogP9xgOroqheDuQ3SpTzhO1oLAXxLzdpL271xiVpbFdT%2Bdj1bc%2BG5R3AFYHymRIy1zg%2F5RhOws%2BURXXpxDbTewcKBIdDMp4jq5PqOOKMXg%2F%2BwefRkF2fM8c2Ak92G%2FOmQZzww%2FVBM8UFIu0WiiRzIH1AJRZyPSJFyM8sG5Fne0Do9LIek0ih8SOs6SPQ6yzhYAf%2B8BJgXh92UGBQh7jCobKBSWbuv0sbkskJRkmEdAlgk%2FqViFlhYDRV9Z2yKxeR%2BhwU2shH2Ri3PcPCeGY%2F%2BAKfFy4gVlgT3embEeuu9RS3%2BQMbwIll%2B7vK7wvhUGXFG2UY14XSZSLk5kl%2FzLIHY094cdU6SoRhRd36ko1EakIG60Hk3OWnrbw6lIThRaWW2VlcJBUSTtPTtf8IJJegFprfu4itKs3tACkn9%2FmOnRmx%2F19f08lG1AM%2BLcvSsnfP8fiFNlb1JjnLKG%2FSCo4z42fEcOo%2FYdIhhH1wfOGT0PuGZpVdJD7bhf2up4oMpXUX%2BBjjg4WEpegKr3hIRSjmNQ7fvPj4MQyLJ6fCTtSMoF2mi%2F%2F7Geayq0kJwTc06LQbwBoBEplVj1eE6485%2BdWZgNDDCGjYK%2BBjqkAS6PgGSID3VijGls8OZYRsoqkZdxEov%2FtqomhfmjwViVqroKMTmN%2FgQUDQ7%2FzobcwES7UBBDBIxoEq4vdDpC9FsdZpzr3tUIal%2FShprirWJoFRNVqtFktXW6kELldMzvMYACTOfC%2Fr4%2BxMSDQCh2G4eU8dNDN7x7KjbnB8CZudA5GBYWOoazjaberKIH94VavbyZgR8G50Cj55L9CMPxaIuD3Jw4&X-Amz-Signature=cb1acbcc4c069b306b99d989224c74033ba78d133b6a2361f596dd9f7fc1265a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUNUM6T%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIFQlgUtcOS0tPlmi7kX60tyb3gY7c1aND6Th%2Fh1lFRtAAiAtlC2N13a09GHEXsuhjNXWLkzHf8R%2BQu9Re9fpxPAVzyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMtewyj0dpKrrbKxT%2BKtwDXmnCxq3douwYdcf%2BYZy1aYjn78KpR3hqC9QArwOqQn%2BbynBCjlgOizm3HlcjKhM4%2FKdHTVF8OMuxlkriNrn3%2BAoCpA0HAi0GD4y46JoezUSb98bdz5aKjk%2FRbz%2Bf%2BiRi1QUYa6I7lr7OQr%2BFBIHYlIBX2bzTbXyGgHzFWkkCNG2ZAV%2FhM608CJrruYYc8kPFNNVFe5ZUCv9IAIAumIPU1YiFlvm%2F3r6HrHL7OzavraTEl2cu6vORQEVEaLYDuwI3mjsWwp42R87u9ZEbhF6JCO9H8nyor8gyyMpbqrEptRnlRTHkIKd%2FEKK6vOcUMhzFXHRD9zB6KNsMM0zeCryptcdYs7vxFzknbuUtPpZQZScQ%2Bfiory3ESfqxmraHYfhWLQ%2FFzyhCIChl8ovyyOgn55WQnAlocix2N%2FOLzBFziF5IOrUkLS7LOgVpch4R18C%2BgEtVWM%2B5IruF0X2JH4K39QBNmWJltWhwRH46pnZND8p3mSoNMwr%2BjEqrERTSe9jTj1fX3FsAbhezmz2lzjsDFxPq59mVHpXi9YutUu1HAEF8w7CtX%2Bb15jAniKYo16CsG2S7LsGSBFRT6WG36yN79UgybFqJLJs8X%2BsRW5lGHFMUTZfu8FwglbTunfUwi42CvgY6pgEhN3wZKTjeNjpUy7ubpSk0jYNa2aEh0HQz0XowuoXYqv2Flxjvxtkkm3x33OVyMJXW6HzaDzIUh0lGGhPK%2FfZxdBNY3ioiuB%2FMRTEaL4hxKkdZJwXriuqYHP3%2FHPIlhgEFv%2FUYsABydqYyONZHPi1c79U0kVfJALPLDUJyKKihxWAyMYmE60jlDxZoGMKDm3v22z84bA3YqdmvSuQh78KFJOODDDF2&X-Amz-Signature=365f352c9bfc50b30258a18527d56af36044b37226a935237c37d985545ca1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H7WQYCU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCE51crPGeAeB4nVrRInK4yoNw3gPGDdkf%2BZIv7NGExnQIhANZc69x5D9dRxMgOZotJ%2BL8LY1j6w2sY86L2VLFn0HaHKv8DCHkQABoMNjM3NDIzMTgzODA1IgyP6V%2Bg5FWqOwZSbtgq3ANryV4DvnJ%2FRYrAfhqSz23Uu8U6OvViRkz28skiIIMNKbJBYdY0jbMQDNAWF9gvbfSnJsamsph8ihs289Oia5HaFBDSYk6GRGrMstmUQSA3n%2FLbMf2ZObSAOZENqspjlFsRFdnONdISrRLkU95vQNu6B%2FJ94vUWgIl71lRxvx%2FZDeu8PFxj9FVxkY%2FLR%2BMr02z%2BWO9QoP9TOitnYcDFOwhWeA25RkH1MHFlrypcBvPdXtn%2FO1RIun2f2vD2FZs%2BrJMq8pwQi8%2Bov%2BWB%2BQdlQmWHckhbHVrsuh7MXPNhpcefEXSZjtW56IuOg40r4zJN9vkDFd8AQ%2BNbYAkO9pz3k0%2FrJ3rfPVqSdSjlGGtqepoymQmsE%2Fgy8uIuMoBxPXlt7zjQ87O243GnLzdxhsNJnBHCa7hhSjEJ%2FwIi6MQB7RbDWGzExPzn%2B3yKn70qMTg9t9Lo5Gj0SnKahoDPiFUrhU6wL7%2Fhbp1M4uABFEjwlHK6qUkOj8Uygya%2FuqkuPs5WxIYkAakRIwSaGsnikihmV3TwEIk0kFrN6D2zDrZ4VVG5%2FbASNZ3ONpIxDIMEBXPP7PGhr6mFQFyOeO7htKldK%2BzvLZsAAo6jGmMSknsDz1k45B3MUtplwI4cxU9HDTCjjYK%2BBjqkAbFbyWbTQnMsCSlj0lML1fzu7dQil15xBPe8AbEoX5LUe55JhLDDksaidWsoo8uDtTwf9yQGwZ4jc%2Fa0%2BKs%2BW3qBp3NXh6g%2FOCmGBiMyI%2FG3yda39w2K7%2FPQJPQMjJdotK1uKZBHMNYCxOuiN%2B8%2BldRLgLwyiQfDGr8vM75qMzbrZNChtPjgCrlIXZBTzVK8CoAqtgHOBpBfFGh%2BL0Ig1WQl83Or&X-Amz-Signature=820c911e5b1fa88d73266f782401dcce1940b62a30643c0ee3f96972f64e3384&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
