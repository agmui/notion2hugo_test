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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVW5VET%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCGEoI7fX3WvvlqjZhfZCsX1qFGrIG1w1mepRZCJ2HgegIgMAFj%2F7VRY8Y0pCT8TOX1ijAq2ir3rRdrr8rN35DlAhQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSAL%2FGH%2F8iltMbddircA%2BQPhJ1P47%2BHmKEJ7m%2Boysu2WfnSD5q9RR4%2B8i5J%2BKswbCtnLFGMcbYVA2PScQg8ykISCInvO0kFJy5mDjycUD3jLCjKO0g7vfmEJvkc%2FU%2BjqE%2F0s3l1Z55uYS3aqVSIend9XjxWJkH05ux658h2cx4u45dDpcGPLRyiqw43pyIVnkd6u40RgBCzBrfYa863f3S4tcMUyVWrGjeis4%2FEp27CAt322J8X8Sfciq7QPx8p%2FnCpr9og83w%2FXcLGrgWopirg6BUXLdoxlSP%2BA0KVhmCmc%2F%2FP51r24nqDVzyjCp8vvXbwrZuY2R8tTJJc9%2BToyt2GWqJ1%2FH7rsuWPxCEoS7k5Ia9NCoHdJnZNoCn5ucrxtf4DUqlFyD%2FWoXrVyOsStid3Ojk2LC%2F0UH6ZyMTgmdNmPs%2FeE%2BFoOHhsdKr6H6z0ptVRF39DlcilSOrBcGirYinXG0nm3i7iiHX50QqFDmJLqORJFvgnWSimfZ45UnkPjAdexDGvo1Qqnxz5hZA2%2BY9TK6Imzmg6pA98P0l3NVIVDyqr46SDSaaRh9jcpYtfgpTQvYqTD2SLuHlPZTcJSRI7JFDkdQiRii3TO5sRKxgC20imReW3ELIuFJ4Iwi71Tqs6l%2Bmj2%2BPjDX9DMKXHjb4GOqUB660V3t8ME39wTiSlAFagIshQZTrE5BlTbJfef0KXzB8OXYTCx3CDF6Mz1HpmnGfsjn%2BKyTpCiV2ptje6XLVWBfbURfsGpKM3PWdI%2FoRgwxOUtzrBis%2BXAqxxkVWSQfGTQ5FDcuT%2BMmXcA367hWD94T%2BkHlbUs7uUmRw8%2Fbe1Gu4vYUEAmtSlRWd8nxbtX%2BzlRT5XvX%2FB2WPMINkBAt8Ow5YD%2BY0g&X-Amz-Signature=cd38497bbde853ff0afcfe096d553c11031bc8ea48508addd0b823802912dff5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDAPJKZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGUAI1L4kfa8L%2BMt9EtmQuJKcfEOU5Q1ZMOTc8uFDMH7AiEA%2BK7YJD7vzU618tuorPa1s%2BnfzW8DZ3CYlFlgboDQizsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkwqaA1pXL7qlCf8CrcAyWR6NaT%2F38RSrAXBaGlnFGfbKMPdWc3HcsYdU0Bu3jamp2VkbsoQvwS5mF9G05PZcIkt8zrcdvV0moYt3lc0fGIjjjWs0NYjmv3MBZqoVCgyNOh4RmSR7OrbYw2GUE0X%2BLlOVhMCdUnIMnOvQyHTKH59Kh2Nz87e2fQ4CMOD7rq4W6%2FRAUgwyeg73CBkCqTlybCuNzTXbiXqrvOIcGgoOsDOxmHLoQlIQNSUbe2%2FkiVUcP2eIjTdR6qyzGPgMtJqnqIwtrJncFuzSO2PVhVjVbhvu2LjkFJQ1cztCokSNuYWS%2BbU972Xb3mIHHlfXyOt2N5%2FOrgCd7sdjFL22D36U8wxlEJ%2BYl4VPRM0iN6S38NU5jplZyk4SFgM9%2BBI2oU%2BZOPFU%2BjfM88Dw78YirM%2B1Uo5Jp7dRS%2BMVEa3FeJXnfdt1SLYb55B0EQZuDH2gltQK3Y4ZYnAyGSOzSGtSyCSpAfgAfREIP0HKNNJ7Cs8J7%2BSlrIAvSTr4VBFklKIwR%2BBgjXYE5FwDyvascx1zZC9zMvUxundE2a58EgQyqtglRf5xB%2BH64lr8zNCMevzLoU8j%2ByewYw8Xt%2FbLLHhYHZdE%2BBn33i6EO7s0wOSqoRxSBbaX%2FL2P2VqJ1s1IHtMPfGjb4GOqUBX1ieoUeX70%2Bkd5Q4Y4ngWc07DTyozgpqOOQo5%2Bw8%2FBrBtmAUb7JXZk%2BZhGEUzK8%2BOplQ74scAiN6begc6ACSO8S%2BzDvxGYV3L9nG2u7esVFVtkJqlCHajmfHs%2BTismrR%2FhLrGQ8AeG07rvthnX9befLxgldKbvFemv%2BcbRNx%2FRRXlZ19zjr2PQyMNWLjCXrZs6IK%2BYrUzVAopVGefbG4UneD7ky8&X-Amz-Signature=9bbe66f603072f8a6542bfa0c2f41b58b55c446870290b7b4233cc75d9c0ad70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
