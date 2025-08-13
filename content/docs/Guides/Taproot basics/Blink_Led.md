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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4RUZTWG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb1gQP8IzuakH9b%2BxIfhRA61N02Ohx9W%2FIdfAFu7i52QIgXYNZj7b%2BccwtoGR2pxNem8BfZtUEsScdssINcbgzqFsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCzpVHvOLVouf4VkZyrcAy4KqkjdrTjCphFrdOoRHdKQCzrAgrunjRdJlPOa%2BSj7x7%2BpjB6ro7gygibIYMtTRV4j6C05O9ncqBaKvy6bYoexY3pBqNEOE79sS4oNLs8NFiGp6ZpYtbc8Nl6yyWiKqkEFFzoxH0UiEUEuBdUdgpSUDZYEItyBf9FXon5vf%2BdLZrJFh9UTOnlZNys0GLiue1XTdfn261wtMevG7915TK1i0GY325Y%2BjfidQUDwOUhGD%2FGDcLdniq4cmTr4VEI7kAo0hIntFfgkqWVPWouZRstdReOITzFJ1WXJHaUaBQybmYqltZ%2FyWNcmgfPpfXbUFVapOmz4xkx29yfhynwAVfwwpLLg1VVWdP1sqaFNbm8ojDQ7QO%2FROkAQnCFu37nJ%2FAw2gybIUholl%2FOZ%2FZxu7iyRuKBwoTynCjSiHDHwVXixP%2Bpm43CchH8YhiI6pAkZhyLhjpQ3RYi1tTWeCLWsK5TmtY1D7GEmUpvKZHVl2H09SUyT2ImWrw63l6ErjTuOMdkVIIqzTEgTSxxwXJOQTOZIesSePEtQQ1bEs3rV1bvigylZ4qXXSxyuVApEG%2BGuEVgkuhiuw2w1mlX0FPTlNTWiAOmxvL5fEjdQeip%2FRr5dgEDfvbI%2F%2B8uMIA%2BVMIfG8cQGOqUBMHoDKXsTnR0l3XqGZkcsFp3MDyX752DFfNhsDbjzr%2FPz3xKOOislYZwd5S0C5sF7LYHR95IpIW%2B%2BfQayayOxCMiNaCBQT%2B5V%2BhAghqAr07XI48nUVIil5H2K4YOm46XQrtoPV9pyiXGOjhFnNaDMSz4oAhyHYoZ8ofAvIVG5GqVNMP29RN0xBYsCMybb%2FpYd2kDToI0TgAKN%2BMs9MeuZUzuFS2Kg&X-Amz-Signature=1fc0060783fd1923ccbd1fccb3242cf4fa0df6d08c0d9898f796b50a5d14a8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQY7EVA2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmuGzj2sIuazjmE8m7AyuqN7SU%2FB6%2B7RYmnIYuJehSGAiEA6amkUivMzkX1ZFtm0hPe%2B88z2SbVOB%2F5JfAWxy0jWU8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGTfa6LFWpxPIxb%2BQCrcAycUCV2yG%2ByXdsCbuEb4cJzaYk1USB9NAtXgHhxTzGLk2GziPh%2FYrkvA7SZbTxvOjh5j1Z2fEqMonG4lq5TYc117M1cBuyRYBtvBY2ibanSWH0SWperPx3pqCDWjZ31NA4LCpG4LqniEmPc2mlaT320HJx9K54XezeMu%2FDebuVISJSPnW0Vb134DAyZzP5%2FM2KpL33VAnYyR1GVqQZCytGSu%2B9R2nW9rq6DhEze4Ago5Iz8ff6PzosYX9LLJkdGr8OwabgOu8u5TlQyqc4NQMsFXSPp%2FdbfNC1xbeWpl%2Bmf4Ry9Nr4S41pX%2FgBVqwlsOTWfkXFjc%2BLMb6ZRfZt%2BOzm1rVoORe9GWTQQ60cJaiProhCAzUf2RTObHeENHPCXcWM0%2FBRv6QJnGvWhxm5M94fJxRfPOYYzYguOA97lOLwwtPdAWgUPPpSPQjbTqqpgRRlkE87l73hZmZIfkZSIoMS1NxjljqNd04Tr5sQ%2FALJ%2BH0DEtXuwoPDr02n66sEUU4RKGWltWzpWPAFBtEyhuMNPMTerlJoG9dxX%2Bn4uqkb0bH1EyqQJl8KL6VR%2FL%2BVqG938gvU0AKw93jdil3Hcl4caiClC0ujwkT%2FHbq3HM1%2B1k%2B5XuubnLf1TFbXBsMKDG8cQGOqUBG8sfpVTTSH7D5iQ8R6geyzastWFX23vziBHZWCEYb3SC97zMSniE%2FE44AIZBg8tTNYuGWofnbilqVCxGxLN14E7vjvD9j21uTSr4lKqmom1G5%2BWX8c5LNo32w7hTp%2BE0RkcqY208etGSBsCejk3G%2BxXlplPTDywu1e5DvZIGylPthD57ErpgU5foFFwPmwLU6oM8fPcW5CV3OU5KRZzRoQFdVJXM&X-Amz-Signature=18c32c459950b89fe65a4a5a0e43922e1a50a444dbbfea5ed4b427ecf10cac6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
