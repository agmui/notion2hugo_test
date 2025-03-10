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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XHLWM7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC8WL1wWWbv%2BOHjJLOOoRY%2FW3HmGv5CRFF0ONwK4aSlFwIgLPAl3%2BxSmhsbsfWweaGLMz35bQ4LDzUajt6Wq%2FYQMfkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJWYrTE4R8DIqJ0wCrcAx4iOb78NHMuTVnqd3pqoefPSspSBgnbK68hitCo3VD3svhjoPkKy2uWUNd%2BWmrGL7DHMNdVqufNC2r18kplAS%2F%2BybsiJIJl7BEx1j%2Bn6h00Gso0fN2NuhSg9bMjEKUMbJxEA7LUs7dJ2cY0jN05h5MIyj6V4xTVv0H6fn6Zi6QP%2BRq96nI55TJ3VGZglhPk7MI7XY9vhJ8L4k230Zn%2FwZ5%2Fky2zHlp7wIm%2FrnsO8%2FWSG3Qd9Nd7asJkgddivaZq73P2%2BMPw9xhlHgapBPGt4rAvwQbONy3VwLpSIyT8vk6jvphUjUzVu1hDXGrkuOvUp5NKB%2BoIpksg8HgosnWBl2797J3fG7%2BugOsg12prf4EjX37P7km4E2VDDNuabeWFIg%2BH77EeavIjiBYTt%2FRfQmXX%2FFw6p9Xgcjmix7vVsiPhzXgQGl2Y4zAWW3CDvinHnSqfcEJafRHCN085j2%2B0MmjJOpbjs60lFxOT3ak%2BIIrdlH27eM%2FRyF7pa9hQbtKQehAtst7vvzNScEUAW5ghg5837V7yKXRrPNjLQeJ%2BTb0nSYyp%2FtHhQ03M1Pn%2BKEIep%2F0cpoH7JGT8%2Fwq4dYduUl4k%2Ftxor1%2FasEEzf17FIr0JoX%2BYp1pNC8lxl9twMOSCur4GOqUB32BodiOFWb9prCbAAzAKTSqVmFrIqPwDhhCLetd0DvxIYmu7LLPPdmTbKTN%2FbBb6sb1ELHi3s8EZpXkBLinyuVib9CdSXVyfl3E0yhGaob7%2B09POOYyJvpbXdb7pqcVW7Cyq1r%2Bk%2F13PHc9f60x3%2FnCRVGEWQpWebiPBL2w0212GAH7Cq81lTAE0AgjzPHgAqC3AZNCGCifvUcWF%2BZ4GkBQ%2B8WOp&X-Amz-Signature=76ee46bc6e1e69ce96049ef8ae42d37d2f07d3c4616ee088606f57a70dee1987&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPK7CF7B%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBe%2BT%2B1WXSxCpMIoUimxeqNGQrtXIY0zOaSBHFjCb%2B7hAiB82iST0Hwcqd24dTO%2FYewqIVe9HRVUMSFr%2BUVUjH0fkSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7nwY%2B1ZbbAPqvIySKtwDQga0dbuA8Zu%2Fr8MeLLeV3aCwhocIK6XGAxqR0syrMiEf1vOuVcod%2B%2BCtbCrqypdiMmePAWtrUauvIDhT7ocLc2fU4T5M%2B4U%2FOpboNKW688Muw1Gtqio%2FiyBe7ynxNODrvLZAiFjSV2DqipYaGxvEe8MXFN3E0ydkGggDB31xcvz9bYtOuyuM5CSjmuBpwJg4R%2FzvE7ZzuiFpCBqGSqzQlB6lGHKXlcRipWiSKEzDCsuB%2B6FjHBqDyzM7ba02618SFVFM0SG4fT4QOCkW%2BvUShmCuou%2B940hPGiHT8ETWYv1BnQbq%2Bvimo%2F%2BMHSp2SNz3%2Be5Hw7U3CQSjdfBVoyplvFY9t%2BMZX0AtVA1fo4y%2B9%2F3kXJRK9auH7F%2FI8GsDkH8RBb1kdpe189Fp9fmD8kfWmBzcuUMgqX%2BCFFyPAsm3Lt%2BFM6K9qwKK9qI6cgmrkPgvmMMeja%2FEG45vO2pF%2BoxJm4q34gtRKCOIcG99nxHeOgzcskCP%2BzHjjPEvLK%2BOy75buOefu1cy7mu93YvRn1hUONg2ztpybY8nooQGxQ5%2FnAqgNWLBMlzdj06wxfaDyhHf1vscEJQG%2BzQrP9uCvNh7h8T93Lch1PBa3lvV9ti55oL8xjMVGryQEUcS9Cww4em5vgY6pgHHXxjIPI9g5jv5tsywRTFsd6DwQLmzzSKGBEn%2B12KpwepJzpGL58rtj2q3ThggNWk5K%2BD0SN82x6uPsBE3%2BYPyPkgJYnejiB3oaBqYUZaSiGubNHHqnK8EVr%2B7rIQMoG9rJ23tZ0cUfSc%2BgAvLPJnOR8cYwCNzt4HS58yLpoLul5C7y858znUE2w0ms3JtkXLhSdpe8SfkEtSQWGUSsv1aacR23q0j&X-Amz-Signature=f938112959fea0676c6c50ea1a0081271af438432ee200ddc8eca958c41413e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
