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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SFDF7W4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGyWDC4v7IHxVQQtvMLN7n3%2BIeRJMfic0d%2FgXRkHXrNAiA7pUPCJrSIEXo8q%2FxuBa9p2%2FXMFddOtQbbFLfQOkI5XSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMKjmtGiAM6S%2Bon81gKtwDIGSSImRzuOjW6UP8EWijSyaGyvTHGv3uZu74o8pUzRoK0U5KndIy0X3kyaiWpPCDTn3d8UQlXAtzy1bQKrCbK2v0blG1rVfPVtZPb1QWTK2qN2umauKVOwt7%2BVJsZ4y8TMu0UCRAs6LQZ3m%2BbsrdIP5hGOjw9xzYbE723954I9DO3rt04RlFpNOp5osGLaD8fAiZ8f1HqVtIuTOdy5vGXVGiN%2FPb6%2BoHTXizfv8642dNp1QbEQM11NoYTZZu0gqKVvn5rzLKFB6zHW7Z9vJ%2BW4X5uL%2BImYH4u4d2u39E%2Bl6G6qzzbXqwqwPBZR27S7rgLANmznvh9jACcMZNyQ%2BTwlpXotXuDWiHVViOXAUac%2BBA%2FA99F2DQB%2FNKprYAFuu672zCYhTlVj8W6Ik%2BheP%2Fz6gLjWtcDMFed0lHv1Pt0wzeIuPb8niFB2rUZDvnw%2BGTaZErV2NKNOEByTKEZ%2FCRhE%2BY9QzHjWMjerh5YXJmssTqANHqryNlThH1YXFFwAetnsLkUub4IWuF85jfWHLMANX1KZHxDyWaSW2Rzq7zjh%2BJOabs1T%2B6a6pDc5OAX3x9z2vfc6%2FUC%2FArSW%2F%2Bvj9EwSlbSj6f1gvyXuEZPZRzkZwn5v5pedtMG%2FL4E6Uw6LCmvgY6pgHB5d6e3zkayjFS7MsJyVMs4BA56wlWPDfBK7BiL1k%2Fsw1RG8vKOtkWeIgGaXSbauWJKtaLuIkqAVP8TOI4sFYLUtPVhUC8GPFM0kpPE5Wf8Kv1RyQS5IZ0QbeMl%2F5sn17BiXpEKbPJoWwxq8pP5aHiQ%2BrpyoDCv0uIpy1%2FOXZoPBLKbbpOODHUtcHL2V%2BJcxCHLbvwQgZOXdG0qEZQ6kP5ZYkhaRGV&X-Amz-Signature=e13839eb763b28472e362c64ef95423eaf3a11fc634928d048f88bbfeedaeaaf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC4EYHY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1GamE6eC%2BShauT407CwI0diB8wP3GO82V5i%2B6CGx8fwIhALteW93xdhIKw9dGEo5LR2uSw0uPb4%2FrrN%2BTPqX9eGYyKv8DCC4QABoMNjM3NDIzMTgzODA1Igx9iONj%2Fm3pA7kQ00cq3ANaE7n0Z0nRsXeN8xMkq2b4xbghQIbwtMXGLaEWrH%2BGzBg9FkScbnACFzXPQvBfkEQvih0QQmWvFhnpJYsKh%2BnFcjtDwWFofw42gd8KPIG%2BKmm%2FYoTS2zUyb5meNJStsGZWd7aaDpSh0AGvlv6eqBu1q3QuU9WolEPlXU0CAfJt1o%2FTOtiim9dLdvPMwPUlOm6L3d22URvqsKeX2fpcvlMwkxzXB2s2s5775s5Nv0ZMR%2FpUfctkyH7ENr%2B15upIbfbu7L4ot5fX8bij%2Blxod8lObYYRAd7%2BSXtthTAw3%2FE9%2Bv4QDoQTsETLP8l12H%2F4Fgf9Rif4HZd4YiWqxkic1tZ1Ic6jQ1FlQt0g01J0ghYOe3AXmM%2FpRyYoueOkrJ7NZBoeI5Hma5Y3Lw5CAofKYqdF8%2BCYbAv6oUW46tdqdz%2BxNgFPJQ0g5L3bUNUMNbqLNpXJZX8z7sLug%2FAr%2BGe2FRVbdmruFwSvZX6KuYwQlwAR9lv7X%2Fye9IFp%2BEZBeYHFuBqlwsMTR2WnUqie0fk4fDpF%2BNDY1fTgRzd3uY496QNfV%2BVyJ%2F1hym9ytg6IiQnNDpT3Wwe7uu8ws7p8izunaHV3yNaULQBvwlpfk1X9%2FXUN5RPjRTSJODStxADABjCrsaa%2BBjqkAajzifPO6XdtjVTmI0fr3XfhO9G2Zpqvrr%2FMVRWa7QtBP9M2DXjz2We3kPB9noo4q%2FqBEby1wFNS9nNINriBIGVV1SXfYKlhJXuejwU19dEg4wQzvKkQdLC0DwPiMf1cIMYHCaSxv4YLcEGhlz0bJjEZOX3%2B%2BjdtX0uHiLsclH2tybiVDZSPvfCSQgHlhVZLftD4NCRs0RrvLWsUP0cuW4KOjawR&X-Amz-Signature=acc22e6b11be393002c4b15a295b46c65e6b6df7a6b2623b076b29e8237fc343&X-Amz-SignedHeaders=host&x-id=GetObject)

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
