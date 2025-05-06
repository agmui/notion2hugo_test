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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6AGA5SN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwo26Mx67B7sC9HbcQChRLo7jI7VWwPorATjioxO8iagIgTq1oiGs%2BJ6LHHyxcZW%2BFYag4qfzQ2vpE%2FcNeUuUmUtkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBHg4MPv1CzjytuQFCrcA9lhcI25pAxiy7ZTYmnaH8UlMD7HFyfg9qwp7xLaxnjDxpgjeM2UotpkHzk9lp3y%2BsVgqrG1P1UgPocNuk3S1Z21i9GBc42%2BHNtKiYnuZxQCs3vh8XMviqSgtkaSm2X4euaBulXKF8Ee3JGsigNoDEU7uUjPDZmR%2FsYbcU5p%2BM5ujyxNPngJEMg86IjKb9%2FoLdodRIpD1srRGrO0U2Et8%2BDGlmaXo4gr2JzwchDRHxH2BQYWMU2U4Y6cfLm73jDm7wPd8ysSwYNwRarkEdcWC66ltOc0TiSGyskymMJfaKTMiK2PE%2BCLptZ5tL%2BS0%2FiPx%2BmCZkatOzCXxQrOssrdR089uR%2FlvAs8IIYUPnjlXXF6ep%2BaRFdf6FboWvdPKFjJGBhloj64QFuePw8%2BUZ59atFfZ0BFhBf6PoTTEvbkGLtMAAoEKTXk%2BxDsisNJDKgfYQGykV9wLM0X0uRePMpdNoQ88c7gQf%2FdpC9X%2B9gPFmcQV7NCRXDbgMw0geJyj9iqNpbF6zYP7h3ntkNK%2BULzw2WaGBbiTXveIMYBSSX3e0iJdK92dK32IGPloCdOgXnz9m93z4eY8Q9DSElPwqsEf2jGtVg8H1oSnbl%2B8I4qowCK0yV6lCr7BNLsb%2FmaMLvm6MAGOqUBVu0DGpi%2FkQ%2Fyfu3MTl6%2FjrjtVm3b71pwLO93nPnGG%2BMRUHKHlHON%2FEsgTs9zNmSJ%2FMK8zBhxCbwdatU6ImWeQ99%2B34hwbbiwv7F5UEhCj%2FF2nyG00sL6A67tprmbmzcr6YEhqZA%2BvhKhrm857gGNJVsZSRglWgH2pQCAliVRKf%2FOtvg%2F5xfBUd3LnfPXEl1Kuvt78qx2plJfBXu9G%2BXeKxyb2v9e&X-Amz-Signature=54a0f8d5f7f0381402536afb1291c76647e8c9c642c71d13a293f8c918145237&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3W5TXXG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU7%2Brgy0w%2BKzMjTmDBU3df48Wq2Ke3ts3QgcN8w0eTRwIgZTuw2v3mMVc%2BR%2Bi%2FW7KxlOaslA6vs5v3PtmaMdjg7Lcq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKQ2IDYKFz7xBnkg7yrcA9sv8D2BwQHlALJfOkHnwS6COCakwobHJVSeeEwL28RzZx68BLxtP4vWykwc4%2FFZUL1CG1xBRegHcZ1TBMoKBxEQnA%2BvrRjodm3YPkS1%2FHYl73gqkD1tGcRp%2BpY6t0RwAzz0odt5%2Bwcn%2BER1yEfkp5qO8vxQhOd2%2BWVzHlwQ4PqGfww5r2DESteiAU7D7o0C5CknfyWw96RUggN0I9Oy3mHZ%2FNNZXgSFs4j%2FGllmICrZ%2BFCRCoY9JVUW7CtM7qvXtg6I%2FwaoAJNjzWxb2xpuWwGmPSdoEkjLeh53EZQSj9S7NF06lK00cXlCXMPnx%2FspHLQDQM%2BpMLf%2FwnWQT%2FECinsK6M8aspvZTME2C8rnPY1YcFlmovNlo7OJuwDFjK5DDMXrAlY8cWF6Fj0HjKPqeWvOZG9qXmW2m5zLkTC2ZXf1dAgn%2F5746azPO2%2FYbu2GhQ9GMwczhUpRjse7WinkCIF4GHly2UB%2Fj8ODC0nu%2BGPzdNiR2Xi03q8Si8N%2BiRsKrGn3Y9geEiiQDX8OrAshCdgUEw0fPzNV7D4pQ2as66kF7B%2FgfNsw%2Fs3kGLwaeW%2FwC5VT2%2Ffbj63bufRFLeqWiljXRA8M%2BNp1iWQn0Vbs3qXg9nm4GdOdkVVLY77HMLrm6MAGOqUBylkjkXYXeWt%2Buv5N4qIdnkEtD7ye7rIsHA5hfoOt8wECDD6P%2FX402%2F12o%2F6n8igTr6U12kj%2Bl8%2BilTnsfMZxyCZzModOollM0ejdSM9aJwTjuXcD4oOjClbzVBianUlo9hGLasz2wq1yghco8cN8R792Y6O6U47aJbyLlSm3hu44LDe9iV1JsiTqdjllfcXi35x272%2FWQRbuvJRNjSMWAubM6oC4&X-Amz-Signature=406b070ca34d1b888acfc252fd98358981b5430c755c9ef5e1ac39a510251bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
