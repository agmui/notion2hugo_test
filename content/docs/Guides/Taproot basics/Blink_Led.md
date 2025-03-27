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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIVHSDO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgyJRtWw5QlUAFb6Gx2FkLsPQmLV6qIBQtmkErVXefIAiEA%2FBOvyQb%2FY5AigfffuUPiQp%2B3gng2TC8jOvoRayrcqcMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEi6H93wNm2za9TJPSrcAwZRcZnO%2BXsPF3uA0J62rKmcFRcgghKOgyQd2C77c2s1rgQatc8iBHltbfi9i02GRbMqYwRB%2BprkM7n1gTYV%2Fz9%2By3%2BpfKNrr5wI1cULaoxlOq4Ch6eXnInYTHq7t2SAsV0aiJ3mehrCcf0ZU4JsWQgxs%2Bd%2FWNPA7nilEgc48956xEnYkop%2BPLCzi1V7z%2Fez6NIQsgs2yB0WdCZLFjJYefKwlqxRJzxmPSJ5MBGEnCPBH6UVolE%2BXVSppBDvcqKvp0bpzVE4dIYYK2EXUVHVWBbzwme4iOsp%2Fr1JKVdxOSocG2ITYB1emIuvGRO8JkUAhNNEOwWYdyRCvRu%2Bq%2Fyh29I9AL3b8cE%2Bpt9BOFNxWZNDy6IBETApo46Mmcsnm9fHmDZ7kLkt%2BzpL%2FD1Hd3pAbqKdgodK3H9B%2BvHssDmfAuxEn0ac9mOk9U8SrzgbWxPug8giGG2PKiYzo4%2BNAYffMZlZGWkUI76ysaP88BZLfanI5S3hfc7fUs3ry0DTLmn%2BXz5seBNzGqTxwIGa0Egm%2BNIrNu3IBAefF0GMOdF4IVf2CAYeEpL2KL1H89qg5y4BxuUvORfA5UJvbTOylcUYZiA29SGu90hdMJPfXhtKz1AcS4jFSXm1ASPYe7TVMPelk78GOqUBMQ6x%2FzOICKJJFwljeBhUuROYjJ%2Fd32MPSewAouGodrE2c35f6wDHjRixnyJbxiImr%2BG85mqMN%2FVkZtvPU%2FoAo9bMal6zx6gbe8DCG7zbyyFETk9fYVBGNzqTQEX7tgscgzQxV0cc%2F6p4honJJ6YDIO9HpJ6wSt3%2B8RpnTA093IK7qS8IgiQIutPWqsD%2BN7t5Hl5wiIfFUPNg56BBKngpM6xzvpPr&X-Amz-Signature=1fb18f385e70b8adb356189c294792eaf51f87242f70121ff3cf05d682bbcf5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKC3WSG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrPGp84BdlJLOmMM5qepgWmcnCuZenNxTxw5%2FeNKEIgQIgHinm0l%2BdXFgij1OWnUg2DXYiQfSAw0iXQNL3Nn2I5kUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJaJLbsxxAjA4eDV7SrcA3uNce1xNzZiwL7jQnO1%2FPouTtLpdJN9E0tsRzRwQ2dgvQGGbptcxCI5lRrDEoI5ygXDdmCUeHyZ7JpSV5Ya37Cq062jg%2Fvjll3cJsempyO2jg%2FSRIpa659cHjaXr04EQGPI6bccO%2FQps6q8XA%2BKL%2FO%2FiFUXSKIkkBT32cZDT2S9YbdMeRW3z9Nq8bQsCz8Z5P4LHJdBwxtVrJ1gk2wRQWutI7Al64tK9csKsT8AyAWrs9erx2tQAWPFgJ4vfpU59oxJsNYetlVL93c6bO10A0hGWfLXSwCwcAtqeLVZMC65i46uNlfQKcP4%2B7qOLiCXhuYqtRQLoHA09zCTRV92jfGTXleOyBrlioHmazS28xFbJFOg9MfLXpkULIbnFjjICQXlolvgadrVH3vSqg9I0fuAEalD4kmPvRo0qeWeGdxw8D1%2FFoilkGmYvna71AvMphSRAy9wbdScal3sjk7AH6QKcXY3c0mKUZQJGBx8XzCwjGvjRJixxgYYHU7YUn6fmNjiDWu%2FnmJagL8vC8iJLv1ogMINtgnSry8kKU7kCOaGAvGaJkU0EbBQuIHKvQCYSiycpXhiV8zrntlxJb2n2N9W74rmC1p1v0ShRgmzCzLe8Y7b7Po55IBTOXIsMPilk78GOqUBeU4Y5rrWj4DiZs4adGjI9%2FBxImCP51zfxMvkA%2B6%2BYKwJRc6EaB7MWXXXJxHUnz%2BnplVWWIYp5CB695dbhjUIVL8%2BB%2B4zuFW5fhYhBWeavwfpsvwZTj5%2FqV0P%2Bk57DyfT%2BTO4HpNutovjmxdeT%2FEhvd%2FQgPZJ1RX2NoSQGwAHuGZC5XyHbvpOw1AT75wH7VW35tZI0ULTWuyovpzocETdD%2BGi2U3E&X-Amz-Signature=75aa86c64b387146a003489262ed47b84c7b2bcfddfbbb860b3d2ada34e0f40f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
