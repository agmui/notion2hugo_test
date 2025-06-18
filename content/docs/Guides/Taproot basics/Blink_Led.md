---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFKQJBWC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHL%2B0SoCxHOsJbOb8L%2B3AnWhe%2FaBX1YYYFvmIpomhmaAiEAruviOVhw4K3VBd8yfSb%2BCnKpbJn87XO6SpXJTOP23U4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUD%2BgwW0T7WFhVm4ircA7p2Rh1Qc%2Bem6bk7uLYqJqc8dElprcPQ3SGcW0TGVKKyQYnhG7mO0r6%2F5hRYD5r3bjqGPpyOqLqlkPdMcOeRjay2yDMO%2B%2BFrQQz46YtreJEe54BeOAAs5C%2FcB2Vv251H8wt4x27auh2Hc%2FlY9y4bpf4FQMCJ95RLyNAvLqCCH8pyULqk2g0d7Pja9C6vOIlCi4uVinXTZrOrRHdLgh%2BZeGO1EMRAcCBYLrkBta9tAe6h2p6aLawhDaCOdVfJf3SszTESn%2BnSU8LZ7GVDei9rbnRi3tvsdHLwloSjHQmPNlsE80zWslHL289%2BVBTjFLR9aTO2cKLtcVG0NO94lunziqBw48owRYk15P7whSUM8d10gCsSceNWoP6G8e7lMwyAUVgKoLuYZT5xck%2B7cmM1SIocAcWcNR3oWRaCNUvM4UNyUOtoyKp5GN4Ry8zrj94uSiVUiRgkb%2FKQK3fLlOOs0jk7rZRWfQHtuzlz3i6o4Ntzh2x98%2BKWxtLnby%2B5LEe%2Bs%2BmJ2YiTZl0lD%2BzrnaScspw%2Bbo3wFyeKAmd4cFCggtNl3b6XYwSYqfPEP4TKf6j%2FeZYQWoGpPREdYDXyDvAiTldmMBIlxtrL3wX7KfVj1koC%2Brj5aoiFyde6UZfHMImzzMIGOqUBpiBeGo9Kgmh9R4oUuA6gZDVtRzODJI42a9JTFMhyN6QR8vT97oznggxHkqerJEx3sPOJ6UOdNOZ6rrxLg89eufDX3D5p4qaXtgEPZ%2BOla80hvMJBXdog19wAQck3jFj5LImlEDdx%2Fd%2BlmTV9QxkzEKIZJMO%2Fp5z98NNxhOqK%2BFoVYZdO%2FUah%2BYt9V5v0WrskXiGZgaXVH%2BQQ21GVezvfpOsFBXaf&X-Amz-Signature=4baa0ff57d3d99a1225627564eac174dff45cee43f8650a28d7ae0c5f89d10d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE7MNM2C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7jfVGXzEvVPryJ%2BvFQnlOwngIZxpuCtGM81Z6UJi6YAIhAKjTiVT0BzMgqEK6NP1LA1p3aneqxgmXEaanxBYMD1NLKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNC9eyCtvLAH6Ac8Uq3AMmvbdBynxl%2Fdpep%2Bt3BuOFpJdBo5LO%2FOXYr9%2FrADRX6b2nl7PE1FDJq1s7uAypINlwTwpUhP%2FnXE78bCqJVA4mxO3h6vrYjgRd2n6jIS8edQcMwSto8Y2SHy653N1ydtQLqt5wEDg1Yp59pc2mg0CeyZwkHUUDL2pgpnb6IdgY1SSiH0JkDYvMQG38Ardre2zzH9PBB2FrQfie%2FQFc9uhGq4Fj4S3UqGsB2AvDFk6ATZ6OO1MUl7aT5BOQlqhZjYH4pkcnkroUrLuUYqCNiltUczB7o8t%2BQzo4%2BridgHUZkrRTarSR28ZGULOusjVXy6KXfO8zVPBh4L2g0SKtY4UhWHN%2F0gqlvt%2FlqLSnH4tur7p8B12kxjFYkpLZlcSxgV8NbFaLwqaPnPbxC1vDC7KIfD8RoQTFehxHRGxxjbolppOT8xv1sWqqcn8ea6GyUbW8HwdU6kC8xIrk%2Fukia%2BdgUAvWMS11kgwBsPG1heM4X%2FNpeZB74F%2F92LdfcTCbCJwCw%2B0zzvV9jdSCLst6v8RX%2BUz9AiRX4phuIJDoG%2FICwO9l%2B2Or3qc5YW5w5lf0R6%2BXrnsRBdk%2BG%2FLMFXUMcjKG3YY3ogQCw5j6JbXBAefZi1FKWhmmLzjky79neDCu%2B8vCBjqkAa6cSaJAB%2F7ETZlmeujTuqW4rtK9k7uk3mXnRgLSyr5ihAbEYDXRpUAJGKOmrPYSQAXaL9bQp81b7f%2FoGstabJdzWzHA02rb95Vbnsih2pVm4rBeUiILopltktHN0S56c6X4ln8lXryTOes2V6Zh%2BRP94lE%2Fdon7dXhqA52oEfut9KUqiMvoLBxpwzbviUc%2F3taMoGHLMKIfNTHcFtNZCc%2Btc7E0&X-Amz-Signature=128375333512d825183bf4cd59d2c5dab219f232cd25ea961288216cded49b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
