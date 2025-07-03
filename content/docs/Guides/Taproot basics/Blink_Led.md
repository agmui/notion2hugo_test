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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3VSXGO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLfZNdXOaAU0Dj5GnSovYCezhfkzk0Ta5oMdrN2%2BL68AIhAOgXJe9F8Yyg0HNTz2A0ee5ort5YekuaGuBdUG1rEDk%2BKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSci3dVuCIK1NP3wsq3AP09S0zLyyU1GpYzYJYxxINTu%2B%2FqpmzsrHMLBH4FDIsywxnReVN2CHbw2NJpLvCIwXUhuG2pRZ%2F7l1yL76b5z8LfQ584w11Qbtw7Kz7Yu4BIEXnAS0d1lbPQasj1x2JvR75qh6Gv2nydIqmTdgqXl67tuxexTD2nkOMWugxGll7vni%2BxrKH7DzJg8aFDC5qKkFfa2AGMDH9CxhaRxiz70yAvZi6MmPsB43NrdhyWNPf032k%2BYrazJ1uwERZDtVLsXR7VGuJEK5sQuLzOrg2wUsa2VTCRoBkYI5fXwqqgxVHwv0NtwZHHM%2FPicDIaKLsXEtkhTVEUn%2FY8ekhcRLMRxcQBsvTc8FhtdZuxxYs2W1tF5A5lRRSV%2FoCQrc6nRvP5974SbSa8DUAHDWS8CI26MSpoN9XnXYeAS2CY854z49h9pQvO6u%2Fr0qCX%2Fej%2FlnNj9ltLoeWAUeF%2BIbCuchCQGwZ8xJSdTGK5xu16xXrPSPmU%2FGK6Y8558fSEkaFmaeYDMByPwXc42n3NQeP15VeT83wRxvdXr5IGWSKLuTCAakuyMfw2dGtxN1G5olTjKbZ4KGxVlYKa%2FIt71MmJc35IDVYcyldca%2BTGRN8XjmZcPP1Q8FsM7BCxUGtCmv5UjC%2FvZbDBjqkAdZkpD5YddYNzGXNGDXFrvi0LWbTax9hjko5f6RAsWfXwAFH7ugMte5PKzm3Raqcvbnh6dYuaCLkfACCj2hIIZlTvN6rlNb5EZfhxz%2B4acUUwAtNLWDt%2F4LrDFAOD6XY23oZyJY4qigdeV3iSsERyBM8lvpJVyspQRULwpcQxRe%2BMtS0uMisxRdrc0nvEaqgVRZU6ksfQ0Pw%2FFkeo5SlcsP3Rldg&X-Amz-Signature=796eab81faa9e17de2cde5d907fa93b3ca8a55e91cb1b221e4b1c3ae3608972f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HARBY4T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqpDqpGFuFwtKoXn%2FX2UGt3KWwo0L5bink%2BRS4t%2BnnuAIhALcV1PNDwom9K4KIZrrljatudoelU8aRGarehgwjsXHBKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjYPWtmt4XpWyt7iYq3ANOlD2nW5p3jwUxdNSMBytyrP9ouhFJ%2BXfEBatqEW6fscAS5rqbU2%2BXKhwGoQJ84tofr7USQTCPURm2rr4trACKkJy3whP1nLze5xmt8WjV8J1fNp%2FA%2BEWu4JbeHVNCPd0OdFZWvgKB6NnKbDVukCowH%2BRcljAWRBL1%2BasqviD6aPym9kqTs2aNvcFqzfmilbDQsmElaFdu9jNqE%2BtipkrBiyq7G%2BhW8UBUbEa%2Bk9eXBG7wVR5XGeFMTudbokOAsRTfBzkNSc36hxo8zczF5GrdcaGPaT3aHKt0zmHRA8iy1wzHRaBnXlRB%2BvOBVk3WM4Q3DzuOQNTKN58YR6BjC6KaKxwYfbSu2MpnIgkUTLOYfqz7yDk4iRdnQ4N4h3oFxR3c0ICn2sGXU%2B2SFQcKlyGLMp1TwkiFYLtI4VoJHyX7Ov%2BsE2jWv8tpw56dCnYFG0lDzKXQp3J%2BCeSdJYuG%2BVhr8jLZK%2BJTYekVlA2rlyHTHWlLPezA2SnAkdW4g%2FPq1jLnmO%2BS%2FqGTtTivU7FkocsYxY9ur3NsaY7YAbns9n0yu61OLAHzHhpCVIzTsty%2FL09AvP4JIabUtaJ8o9PblaeUTaAhvAwsOZw0h5lGBmUyx13ovy%2F%2F02jYfceiuzDgvJbDBjqkAfVmzhHYIf7heHE14C2LKyJwmP8jfGzNCcE9JcmXI0nTdepAsSPEhGb4l8zdivSV3OVfj6avrpmyAPreEEdd4ECGPBFY2ZW9tWY6vrzJ8tqyHfp3CJ82fx9YnndOsRUnQh9AUVHV2Kc3xHT42Pm%2FBmBLhok%2FEvO2wc13OLrKEbSkUZ5gr6iCdXAVUQP2rPxpEi%2FfLT33UjG0j777dYSyyNah9SHZ&X-Amz-Signature=bebd1e751933ac81dcf0fe746703159b229d181cc697fb562c8b853cdc6fa496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
