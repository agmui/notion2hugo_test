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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PADI5LV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmsmrL37a35aVwHZ%2F14p56OICdk2cdVL7rwgiljPbqQIgUVkQD%2F8FsAA2SuDDU7zq2i0xHPOSoZ%2FS89NV64nklKYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHU5DoN3grrOLGgxFSrcA%2B9YDULqx4OCXEunXGA9I%2FkVU6H45T8o0iG27W9v6XJmLvwWpOmilq03OIza3qmUwvEtUQSqDyVweOiffp84UmCAvgvZHQxREXF4zd6MNjOWHSkdyp8ZFk4OJ4%2F6gJ%2BAZIYzfNjKE7Lm%2FBgAAECPN3wvkOF11ivE50B91zBTd2hjJGwBUAgXSSg1YYjbEvv11oGibJ%2FYOnMAdoT9qKvt7T8Wmvn1ejCVkOUjG2euvRzoR8kzE42a6JVC1DTkh86Q%2FfxPmPDhdg31M3tlhXNQs8a0o8Z39NikoxH02uaEeCfoGqhiiy8VKkCjnrSDnog%2Fo2lidFBczhjP4FZ79YaVTzc39b9y5qgA3lhir2gfWy375dJD%2BS8wi%2FeHUX%2FNV%2FsPqPagGx%2B3o6bhJTzs%2FJoUIF1p1%2BLVsJUOU%2BqCU9bGz3%2FLQR2ncgETTjNkGug4qmWaX%2FTQpygVDp%2B4MQ5LVxtj6v2SEMZvvZt6Xu76%2B845Q1K312UQDH0Nju99MUePGGoWvC%2BRfFOKmea3e2gG9Ka3%2Fn%2B9ke9dwv11X5djL3DJrVtxovZAa5vi3dI5O%2FBSQfcKTiQjUQDzSR1JyXE4dLUmLLk4djlRgVdPssRmUARaTIFztdKL2wzEBumhmM5yMITfuL0GOqUBQLlS8npIre36%2B0xqXGUPdNXIie7%2FgJw9wuO19z89mnzLx2LVKAUfbHPFYwtV8JWGbxde37Fu6Q2Z4zYk0%2BqthkhyvOcWOxYGAr9BBQ1jaDINMi%2BBuLwdK9assdim%2Btqt5h0STOK1T1FvDqrpIrGqs5QxsRC6INfE%2FBUYpgkKLK9khQcFuk3lsO10TLICdHucICvOo%2BprBKIFRpoWL3ZdLGDASRwi&X-Amz-Signature=586c333130bb8a36818c9c62000e6f89e082e91bb3054bd72586011463466b04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ2G4L4H%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0Mx1sFKKezSXrLeYASqG6VRx7YBdBWQ1D6QczS4JOwIhAJSGZ8kKYSWs3iHArqXzPa93zM3%2FhAdg2AoApNUAmsU7Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyeLARIrZZtpsRxvUcq3AMMkaODryCaacyt1cm85cOjbgKIexloKaG%2BsxKSCX9Nu3WZL6KlxByqYsVceYuHv2QplvCx%2BLEkwq9IF%2F5U7aCuXixKjYTo%2Bq6F%2BtoGUDaq8zL0GOWarK1AZB7xhm8LkyW%2B4BJQiLbASoafshlMnYE%2BPA2SvNNkGAynaDRCAYiwac5umcjyccgzdBG7blhU8L4KlUgNGfQZPKEAVi474idWlbXRv6PmoxGqOpkNlOs85cx7Y7UzfgWUuUOlIlR1XI8o34EU8s42nr1AybvrEAf7sWX6GanpUrR%2BuK6hpXHr8v7r7QmFs4bNmkThfMw0VIcZUSI1z5iDjdV696Eb%2BSyGmI2AWOsmmLm8h7AhjWNAO%2Bcdh5IwvbA0SxpOzx9Btd%2FNYOVdoB3Fy5SFFTRbcxewJYy1ia%2FrdmRf%2BgExGTZC6FqXdjpOpkKH5QIL%2BXbzHtSwxO6uM0%2FDCA2mHOGsrj6xlr4YNJoI%2FsrWh5wolc7tQccQPDtlydbA0N7KLWdg5RfwV86zjeaOTE8qXUK72Sjyu7is%2FI%2F0ll%2FuQ3kMgeaATyXa9E03BRi4W7H7F1miJh7bsl%2BWu9lmPuYZIk%2BznGt9PPkkFW9DXiBtCNmjGQi3b7duCCqUe2wHL1vKLjD73ri9BjqkAfT9FVCEEdy2f9F5W2W5s162JNrrA%2FND2xBCJR%2BMhqVxmVB0idRWN8wxXHB%2Fu%2FsGfBOxqXsp4k3ZWIZvaAMwPg0RMYMH4MBSfSOug%2BJjH9KQqE7AsfpDskaZV4OVsw04eJ0efE7wwYSgJg%2FioHF7gEmXxgMu%2BSA1AIDL%2BX%2FL3b7PNRkisRK005MtBB02uO%2FcSKGabFZGEFcenFDqqTy3%2FmyhEvNw&X-Amz-Signature=7add19da425ebd6529539f517d70aca1698cbbd59bc577b5bc9ff70870119ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
