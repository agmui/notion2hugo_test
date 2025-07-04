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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSWIKUJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFVqLYGVFAqzc3xbe50UB1%2Bl25mWFSvFOSJTBXi3fH%2BrAiEAyUXRnhH%2FpoY0Bqpf7tSrCj0n0b761XOt%2BA4E9knrqnkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKeRQ3F%2F%2F1ou2T2bDyrcA5UJlYVTGp%2Fqkq7PwAR8HY7h0Q%2FzkspQxiJ6bBUZdra75aay9ITRBWrHu3QaKcly21dH%2B8MYKcrL4%2FlQMqct5T%2Bv4DDQKZQ2deyBBGERYPGis91er33sn6hUU3M794D1nUEo8tiyv%2BUIk3iB3DUvGe7JsMAtxK0lgVb8B2k6MfDJZNFY3JrpbpEpvW0%2BpIwiijKEBVuSEpqyNlTCKsSjWbTK2gpfVpq9%2FWpqiNXVgPheoI1zFtxV2F5B%2FIgOwWZ7A7VePOt6XsJQdX%2Fe1zJ3gtdAF8HZ500oOi%2FIjnhvrgrk9fXCOnaSam5VBg1OXIpN4rJzSxtoQspmyyCOOvuef2dj%2FTX8n9OViEYdDbhmMtEqTlclJUJr1RHpCQm3PiMmTVOb6%2F9e0miYcXm7ggt4tBLbBvtTIz9Z1TH6T%2BjhTC21W3NZaYzQ%2FpAv0MKBXPzi%2Bl4waof3AaPt%2F1VFN5G6clqBJ%2FCYhgAVkD5IKmwPoflsWyX2IeB0wcZpEGie3q4gxOLqrXZbmaEsd3ZvULPgpCmxPS4dlzTXY3%2B05fdlcM8BOXJjT%2BePflyiKbnPVkCaJ2M%2FQQW0bUgwp3Sd6nkX7AE8OBzi9o4y7Zxkip%2BVmXUD8gscJhVA3CCbt9AGMJ%2FooMMGOqUBO9VsG3lMofPHauPgG%2FxSfnElZPbfdKdgd0N2HA6XgZ4AduPa2rl8ljrmKplgHhNtQjIyhfwAKrr4yfQre2q9imN6kpjWNreVG%2Bg75NzBHOKR5KKlMw7l9TqLQ81a76hqZd%2FCaNJFrYc%2Foo8tI4Ke7vQofV7HaZEvY1Bsp7MxXeKRNxFrWs02PYXev%2BjFdshEhQgaKrnQ8OI4xIX4SKLJSvRka9EN&X-Amz-Signature=6614265712f201d467366195a984f8ba64ceda37862286f806cb7d9b2e51d9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPBRKMR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAN0NaqgX6%2Bg0agiMzwoHEPdhSHt04iFM8yIJ7AENolNAiB8Ddmof4jrfx9D%2Biq93daBuaylIiggKLvDjdCCbzhOLyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJmrvY2FrFg4M6EzPKtwDPCObed8KAIgMX6pYNFrTMzjzJvml7ZGkVLw0Lc4a7At8Ui4LoX9ryBeEOGH38jB%2FmZ1ytFC8XLJd3WKE1LswIsa1KE9nQxzW1lqbyzVW0bz0dhiFy6xS1J7vl%2FkXWvO1472BEOfCU2zrZ%2F2InUibbbxYkwk%2Bxy%2BL%2FDguxf8zWYUL53ATOnfk2Lry21RLmyRbSENraJcqsaOyv0%2FMATgTe70ojKzVXBbmz8lPsmD5%2FySG%2FZbjiH5wnLFVr%2BOZGn8siC4pai2xfBj2tgnG2gJ7b30vaEO%2Fmo2e8xV%2FpvwDynInQM1HUULGpnEsVP98eJz5eta0gRtFcWDMA1L8%2BqEaocMDqxkvWHCwdEbpSdLun71URzoLRNEyslULVQ1SFsVm41fXhiVGPf9V4rd25wVj7CWWPdKWp4LhIxtwQWltDWul5wWM%2FYNmBHOjDTjtRa3BONQqWlYh5NDWeslfRHxMuwHpX8BXsO1poqN%2FwMuKD02f936keydMhxo1CRUUSgqrk8MUIz%2FuN3VeSs2css1kDW8n3gd00mJdr%2FDebipc%2BX4oORYfhqF1IANSCNa3%2FRzja4ebx0UroXOECCnnA7zh5LHApeUX7XbZs1m9f%2FSkW3t520sOWeQFx%2FFBN2Mw7%2BegwwY6pgFuct1x9AKDo55Y513IiTPjKHGgyAkGcMrus7PCsZ8a67waz0EL0XTe%2Baz1FvRHKJ8YYclFYWLT1TOSUjybWq9ht%2BaCSPEkKHbgc0sEvldhsC0Xy%2FPBqd4PKdpj2z4xnjqdP91%2FTKbXhVrU0dSeQSFnKCtmHr4Z4pHfLBKK0IlT%2FAmXRXN4RlM2eqev9HHdt6uwE1aXD3GABYZeWYaPNdVy5%2BjNzrky&X-Amz-Signature=f0f1f9548d5b6d0a40b2af18a32624c9ce85ffd187d450f84743d70dbb750f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
