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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDXWVPC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSCJ82Ban2dpHwzUHGLpGaZGVodasQgvPDFuEc11EoAIgHMtJEYLWhfLYHR6kuhNducyffrTio8%2BF2NVycuP2wfgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCWDSsGKTz0J%2FWCdMSrcA%2F1i3CFQhgyta1fbvapOxBr00wMmA2gjiiCqyoKpDOQXZLcNyG3Ne3V37Jazt3L%2Bko85t2C88jF7LzBSDZPusG27wFDAnNA%2FuZCeuRFAucnASIVOhkPdTavJL5ZBkKJrA5mNRiHvOLCTA3mzIj0Xnt16VbuHz3oM5ST1pDYmO0QxkwciTGLZ2mbPYWAnbTzNWVcD5753LSDDY4DYJ0EgLHlv0iz0Br6OLHMpo%2BOF0RyxJgDDlAJP9aEkpIZIETkMJBOazw6HxWLZ1zRJXSZE0PY75C2b401nxzXnmFpKpxv2SIh92lD46dCd%2Feg%2Bu2rbLFLTPNDX9pspq1sKUKGHh6NngzPYSbx%2FWcVDsW8O%2BqcasH0akVq%2Fl1KwR7W17ndd2VzejBYBSfDs7FY%2BcRV1VvctpX2MKPvB0zwqEGQBnFnqgTUoMs9J1eJmmNTEsDAO%2FkIXp%2FcJt3Y%2BrM5CFSwv6toc8TFv4eXLp%2B9UJ6UOIUFYJtikb27MQCfb0TV%2F7o4jTCQpDH7%2BvYIaqW0lpvqidRdAId8hE8PVKLqJdNruA8iCYy0dfDA%2BLz22iUolTNcWBlm0SryMYaUpqw5MJkN4g%2Fkmhgo45fE1zFO37JRsDxk3CSNXRUfOnJNKj23%2FMKaJx8IGOqUB2OHBwe052nLS98dZBkEIH8tLuNbN%2FyNmuwBS8bPnCLmbQZqcJ0spAG7087XaqLj3RP%2FH%2B3zJ3z6r3uhmXoZO1TIo8ztU5JNYmxgMVt3l2tHNj26SB%2Bk%2B2utA8n2nTPkJm8dwIjATvljv%2FlHnD%2FtM3iaNF7pR%2BD9aJRgbErIYUgSONKjwkP8J8Snn0zpzMwu4ZxxXYbDoWXRwgyUoePzchvemRHRV&X-Amz-Signature=947900e773b1637df6f33239d7242fe0420394862f853066ad531e8f152d2350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSO6TFJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfmeSa64yCj%2FeRRilB0EOv5ylEDsvOiwUUUdj%2B1ZbB5wIgetKV4Ftzj42Fw6tRknz1phxyLjQSeeVFqj8dTGQ7ETYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIyJMonjxbfvmvlGVSrcAwpsz9CckqZS5KXomgsJpYUfr%2F9RdD0rSSOZr3PGRwn5dSSoo1NWl85e0yfWzu%2BaUs7w9SyY%2F8jEfiqC9ja0AArcjLVuXPQdxv4r3TCmW4de5LUGseudzHR1HpNdh0nN2gbSNSkaG6cYN9rOi1IUhiHOTh87k31KCIZo7rEAYbgfL5S86P%2FTiizXd4GVpgD0abz1ZAVIR%2Few3fTPdEbmu58RuAx0at3abwFQZhq225eAvFcJtn9KYtrA%2FL3WXd3I6eR7E7epsDjN0mmkLZNysD4B%2F7%2F5CPjGXGWoBa4sOFFdVz11LC6VsO%2Fz9wW2Umu4jXP%2FNNCs0evFhnO44K8U4BtI11DsrLWX2IMaefqJLJI7By8AEK4vGrqd6xJ3C2ZlZP%2FuY8O6DJWSIKE%2BHpQfz%2FFu96S08WC3sKMrCUgmkcN2m6gPwHNKdk8RykMgWqJLo%2FWBGWKvwnjEaMj4EEtzWvNStnvPnrzCa84sbZ%2FrsY%2FzAYUKzVOHF4J7BOMUOMHHLqVT24MRVW5TZd3mmNrAk0Ca4QoTEU3G0hut%2F8jDyrIJCs26Au8ZrA9jnuciTlczcyNqad2Beaz5rFplHuFkrQd01IRvM513ghgAqUj8%2FGXs8yQT0JdB2vQzGRbnMIGjx8IGOqUB%2FFE5amQBhyoS47QNWLkMkHzAMKAJTPPFQMdAcCfUngTalzm0%2BGYnjquNouT9TXGb1Wka%2FEtkZCtgYATFBPbN%2BLToGDg7lMOSm%2FpQwvWFGLKEMT1Ec%2FwiANBslk9zAIjuhGZDbjVDdCzgi9ENv0LpFnbcSm%2B4j4TU%2FFEuKeKaMRP1eFkDG%2F8duKOrp0SkdJBi8ue8nu5tBTcAqpHtaGCoMw34SXnF&X-Amz-Signature=f6713f577c1f29b935f61b08e437243be6037d53ad8e9cb1ed4e6338ce9de2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
