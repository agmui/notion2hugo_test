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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BZGEAF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFdn%2Bu0bxvHmcYfVKu0D%2Ff1mLlJ4YGX2YuRn2z8dYY%2BAiAFiJdBZHM%2F677Lq1%2BdzGf%2FkKuq9r1PQymzXQwukfdS5SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgw7F7Ab7IH2BbXtfKtwDksb3tio5Mj%2BVEseWC9P8wX3fsoGqZL1Ozz3yALFSzOQ%2Bk8ZVh7H6TX1hPbsLGfMYMzJIjeMUipzxjeWAwNXTK3SuR2J4afcEQDWIdkGzzBT2lsFQl0%2Fn01EHczdYos90Cph0zU404s6q8Gp8Y0Q8ZXivd2W%2BK0LEm%2BHz8toD7p7110NSgPa2UphTdMfugUYVQucUmV5g4HCBwJG%2FBd5v04Ie7zHvLiJcwa5DWT2qY%2FLAJ0zmXi7qKRnfB5WgQ6T%2FBmfY7N%2FrmlW7eg5uDeGZaUqYuil5jWBoQgwaXTFfP45zOTJgfthBt%2BAhGZd2s17tLbMglQGV%2Fh9c7g9jD2som9vAr10169utoMwoj%2B8JCGrv3ByrGGqUMjsERfHQ68mvfxu7iZu06JsKr2v%2FktpPaM2uxJvfB7uZMMLmdccESPh83TXcUILPyHip%2FRfw7LPxsWR2s%2FPc0GVaDTSVRKn94irGPKAlamEPkb6fzK07p3596bhLn7aR8wo3DRny9Z392hspT7j4cC5tKIS725cYg0ag6tUmd%2FQLvwScehEJrcLz5GZXIidDwTQdsPhAAiR7z0dief4FpopQSAQ73QSpHcM%2BZdIflj%2FnL915%2FUGGtvTBP6ZzvfxiFGUiXr8wqKG0xAY6pgHVhDUGqFI934wIqpzpuhcD39XTntapIy8UAblDOCOKgPCN4ue2UsGFyGCBcnqL%2BKtckmvoXVAhGpCxEdEvCoui%2FSQ9zNMzoLa7DdIoSQQLKy%2Fd0aa4hkiPVZ%2B4h9FFNdCrU9ck5Suy60zHVsgUSvcaUrOoiujSDsD9dVPtpQP3dqigVIi71VP3ByBoX4XdvlGN%2FaIssA6xI63nx75Y8BaO7Q7CWHqx&X-Amz-Signature=10969edee63a3cf5789664f3f47151d7c7bda86742ec1fc46a83d4d6631eec2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2UVRSF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUoUK5tr6Q0FXdtVPvnXXDRdUlCS%2BtsY%2BFUMxVB2%2BiZAIhAP2ESDsVujyfmGYqXT7OgPLT%2B0N4ZQuMUa8F4pZ%2Ba4okKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5aHTab%2F95oeZ7%2FiEq3APf3UPYKgelYqPFkl60C%2Fb3Ghv3d3wSS5dya9wdcj7VB%2FCKtsB0FjHxcF67EycV5FMfske3NA34AC2%2BJCzxW4%2BOgDWQ8KtgsjvIrRgEjxID%2FmNkqdjseQs6NRRBIYgz6a%2F4edzK8TVzeRxC21BmMhGeTkRsxdyKJ4KP25V%2Fk42vKJ3p0Hsbrl1frk1JFy8UWV%2BwKImp8eMDCTyQSClx7fepodePqpNoo4IrsHAi18xnikckBc9vFqWFPWYUVVHQi5gzPCSNKV%2BU%2FaRZ5xgNpj0QvSwCSANYNiwRd3tf8D3pxOdeuwpUF9LebLjQwClI%2BNyV68aIGIa4OD%2FHl0FDNHO43fxmjk8HkP1WuinyYMVti9qbv1SRv%2BHU4JKRgtXAF41MwPP54TZasEyYTpR%2FLpcbM7UGil%2BFHxmuFU60V%2FmQ9XcHnoaDICSxtGNsv8Uh0mQN%2F4L7OPvTVpN5nIievVBvgFKrCfjBvDSSONHFcUTZE1PxPAxNL1H48bsZH%2BqoT%2Ff01UDAru%2Ba6xfEjaq1MkhwtB%2FKbk4sBsZgXNotQ0VztdWRrbbHMETOqWgXLRVE76CevTHFzFn%2Bqd3AbqpSwnJykoxLhfmi00cNkwMgLvmCOnhg6suoeQQyOGIK9TCd%2BrPEBjqkAVrKvOLmaho4u8G8rRQVIass2IAV02sogl68KNy02elITqRkpkD9RWzGxXlIkcaosIZIQ5y9bBXk%2BDlfjOJrMcJotMuwR%2BueAIdOmmxk7%2FTXwfRFcWixNiGPLX4xoD8sFJPNLL2cTsiYMUglBLgf6z7LRgmvi%2BPVyC4eQufrH0Zmkh8m0tpRzboTPiq0QRXFSJASLkVB0nO2OZXbeqmL8e%2FR%2FoEP&X-Amz-Signature=62209cd77f875a6b7a7bc30b7b292615b8b5d1828477b5b261ada71497282c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
