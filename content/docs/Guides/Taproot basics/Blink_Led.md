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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7HX6GE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0KLEkbQMG92%2F6jg914mHdegjbccctA3M1ynN4h34EVwIgMNGna0V57vXOS5hByUtpIz3d35P2QYcz7n68OywvFxoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQcBJZxu8i%2B0aTusyrcA2f1kjbkmpxe%2BMGRj9iB%2F8j73vvLryGzh%2FyXo%2BybxPGoNFuWgz0cQhCwQO4kM8UBgY%2FbBUkiK6kA3ENHNcKusxuzhrZLw0xnLHkvRkLRyNbFaoL%2BF%2FzSH0LRbdq2MO%2BCiiXYyjcqDUXPOZcO7gsVmqYBac7RScZ2SQNf65dXaB%2FQyWYT1On%2FaQILUl98PMCzp2vZNXis6Hd7vT94rkx3ysZs1WwbggMGo0AWufDFE3PH1npbLN0PFHcJF4ZGKCCQoypk23jxb1QNGDi%2BfDg7LkH5GW0jMdnQ8RlGCmFWguD2%2Fhi0RpnIhTrSWpco33KQvaRldHcbmFFUtKLfzfYpPux%2BqZrsLk87PqK06M0vW0rmpvH6oYnb6KUc8JlnWuFTDmylRYGtf5QmlCi5M%2Fpbc%2BgxaqhjKSqS7oXCk4AC6vKkRzzfet%2BA65tn6lysEO6iW%2Bnxk0SClcpPPjzQp%2BfPTTftRT2iaz6XGbdFOWdNc9ql5sF6q01Pxa4mHK%2F3g1bH7fllOtejY9BYQcsBhkDkouaoDZUHGy9mmYTROKUe5Y1cZOBZ255XWDsG0zyCuDTVSY9gmXiz007jOfvzjJ0ZaEyfi2LvvS0365Q1seIzze2D4lT0pNe3xu5oi1%2BtMOrIrr0GOqUBgIIWH6CV8Y864pGLEloqHz195wV1TlD%2FSUBi24yF8kbnYTqIPX6rDQ4AR8Xwy2gd%2BSKW4cDAu%2Fv5s7hQkvcyaoMCh%2Fb%2BXMqTGIyBXKeaLBOvnQLMPdy3Mo3mnnBgqDAQD3a9JrhxHTXrb9S67xhQTU8IoW%2B2HTryORUZIpeK23OekkXp7Xzl4IYt9hgiKdKtG1RgIyXbvaQdV%2BQ0MrLvEaC0jWD%2F&X-Amz-Signature=64424e2af8dc22a613cae619099c2a613d66562ccc10926343f8dc6503675033&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQEYRH2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4jGckxsDyYqurbH0DtgpRkqx6YBYptLsI4QB8E%2BTdnAiEAz%2BlYfA%2F3AHV%2B0FjH9lXliti4gtPg0janc1NMDPi%2BkxkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBdyEalYCFcNmDptyrcA54s334RMZeiV5hOM8%2FLcq4X4mf7lhZfuyg4WI4olhIL85VDMzdRwryopMyFhSD%2Fmp%2F%2FDtpHeN4LpBWrRGvhTVG%2FALDoucz4GDDZ%2FAUn0aHDgaMX1FQR967vO3Mtf8V9Tq5kQU1FkDO2gbp60sSVlxf%2FpJ3Zudkx2AMzywpuqCSPvm59%2Bk2ZIZTjOV9vxgW8SXDij3kBhdhHKsa19z0seTiu89xZRwFw8oIp%2FfxWKletV5AkU79j2PLs%2FMcy5xdRNp0hEkPneRw73QowXe42gCPSL2QZNk9H2zhGwiKs%2Fu8a%2B1xvhoGwz0dCas6gAwvwHZpXhC%2F6xbnSWf5vu51zc1SnOpACOd9%2Ftw0sL%2FK26x2lU8VQ58qTxrJnfOHbOVjOOLubn1mlJY1me0FQnMfZyt4q%2BijB9%2B64YfSWINzrcOn0VCwFS3x7nXnK4RP7Rc%2FEbypRm4j%2Ffgc6z6hqmoXOuq64%2FXy7YqNNatLsh0FtDeCHrRbl7Gr2ZlCG%2Btgaz2iDciYLQBWuKkulLq5NQmcrS7jkM4Lozw4W3KXDk4GsH%2F4%2BM1maY5WgHBdCezSs6UZkhYUtQLaN8fikF2L4D1HQfq%2FEU3OBZIQx74eGC%2FECHJJ3cWYVpSuvdTXdupWgMMvIrr0GOqUBmSA7DxwUy6irbxPGjGG%2BCeoqiAX5F6makz6IsxvtPp1JUNe%2FMbeF2eKyD7hGP6eUJsenp3xUxfoVs5unaxxwn3TCmLhLlfi9e9xozfeX2iepsMVf41y%2B5htabWFWBlBG%2BfifGOoVLbiEX9SQJoNVdMfa3737f9IOGmVWqebxH4tKSNZGDJI23wt9VXAIJFtIwPTByNNDLNEktLNk2gMGaobdNQto&X-Amz-Signature=8061b5886ffde2a99eafaf1cc022fe42722928bb5f3e35519bd6f2c60720cfb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
