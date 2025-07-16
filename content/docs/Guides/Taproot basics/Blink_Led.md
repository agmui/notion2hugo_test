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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666YOUZVD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCXuB3z0Kq7CaXxFQ99ru0j6HqeIpngwL7EW1liS8ypaQIgQ7P5Ew8K%2BBZ%2F0dZGLhABWYSRP4b%2BVMP%2BtEC3C%2FUhoXEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCc%2FNRmtZM4TGzG%2BVyrcAz65cRSgsqHtVuUxXqxg7lq3S6lL3lD1MSf3RKRrrpmaeJiobrSF%2B2fmtNlqplm7DU%2FqNeKytcksn18j%2BC5IPK8o6mchyPFaBoDdd%2FPt52Bmt40aDUkcrlOSmNk4t5bi4CzUgjB8RQjB1Lru4PzgjvOMSIfoCgcU7gEwQC13p5ceDhtYbXzFbi7QUyCvI2IP%2FXJDqDfKkz1HltRs%2FDdomUIUD86nzVeEi%2FXkvx1UIuyC93iJaJ29iIWPZAsP%2FRsZTK%2BFWWhypRtP2fu9zWLwZLXRfgSeGnPKU2CbaSZOq6appckW7tRbngxb248K8XZIqJnw%2BR9nN2DxpoPJQKztny8XtUsky69z8sT6RlyhMbX%2B7GEi6Eomyo3aF5RIxlPdCJzyVIH%2B61rJP%2B8NKdz07mCqcF8s2E3eGH1gdBsP0m55xvDhUUnz7zq%2B%2Brs15JNspCKuY0EQpWguFU5B2hII3HD4AjAKOuACuYcz4O3fZ1yGA0XQgQ5g0omxgIQn1RXI%2FmcMtck0ndm2R9N9zyNFi%2FHlreOZFztntd3l%2BgOteZrRDIS4laMkXro9YaVMBXVZfVxehbae4fDfXuWAniyv6a7%2FV0HAcyLUMtHub%2BOyBK2nP3htlkDUsEEzcj2%2FMKjR4MMGOqUBGDCDm0tpqcqeCHluDXfErDUDk7nBdbYXPa0GUcJsiyQgv1F1d5Y%2BJY603RDifLH4G5Hoi7hfwHRQs55Y5azkSwnjOOLp8sA66aTjRdzUe5WQybnIwkBzKQuB9l6o96VqLDe6aJeKJ5N9uPi9NlDwiJhctFrkF2rt5U%2BLti3FOqy6%2BpissMAQGr0FxYhutRjzUMg3aSws5a63Kz9HZsVjdKmX4Y78&X-Amz-Signature=111b177273ba27eccad5309b8768d28cfac4bec8b3f53bd7abcc6ebd79f01283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYTRSZT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIERQTG4AmhcOPB%2BhJRM2r2s1F4H4upesnsVqO7LS7h0cAiB9x%2BumP0F6KAd1pssyeTwO6EM9Xarj06kvSnL1AjaJvyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMzplRQlGYYgxiXaUSKtwDCNhVY5ns1na9D08usQXec479ysW8QpKK2ajq6mBxJh3eVcgyGE2Fd0GZvPitvxNKNgzuPJTWg6%2BaPAj%2Ff0gVr4yOm65TdTroX3ICK01Z1dBomQgZY2GY7Squm50Fm2nMrx29F53nGDsYsVddYKtLtClGytkQu7b%2F01AoT8YqtUaG3vHn22yJd1mu69%2FtPMTTeSrJCQeBoN7nYqcrk%2BdtFY9hqIjNlUvy2BEg%2F4h9RkLzzT304MHVUj6ztAQmq%2BYaCChsFyv7VHpf5fZVhA0pjwRNocABbh4WtdNUgpa8K1fPKKTzoYdI0vr3mm1MrU%2FEqviI5zQ5rHUsqQl3ZpXoCyH2fXkjuZysN7WZWzzBRJPsKVD1sr96KHuggRYAQeZx%2BN8dm0TflT8N%2FRJXaGnKw4TjYbztx6H5uj1A0rtWFAwDQwBYiYe4ky0brv0dc%2Fn8zCapPXwVxsFwtjzAn2aAq3RMZIaHfv3fxTXw1Xopb5qMuvoK2M5Kp2mD44xT0M8Et2DSIqcO6Ws%2FeQpx4X0XCa17wI97mykMnNmTK9qkMp1rGdeI1%2BhoAbnE5BfAlvCP%2BdUmh0ju%2Blt5LiwZUm1HT%2FGeQ9frH3d0hr%2BAiYBX8qYK7ITV5fZKhi8xXKEw5NHgwwY6pgGogiu8V87AaveFzoK%2FUdcKWM12k24S3zKv5lhpiK%2Bf3RxlQQdJpcoQRwJEbQ1wSU5HUtaJn3PBZE5p7r%2FUOPb%2F5Gg9oD5yjvTiE3xH1CxHHIHQEpq30cHe8iLPTCr6gE%2BASDGPrnhDespV1mdfMKCoIIDkkM%2BwYZe1NJOWwxCQnpk3EbRTq9BsSX7THuX0YzL6QiKHkCEQkg6w%2BJcepPTw4ZojXfLE&X-Amz-Signature=42c79dbcf14b62ae247ffaa9bfd055b4d6589e6891d99a603726614facb6ab8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
