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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUREQM5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtjKXbifiyh9Nkz773nc4Gg3eHrSjwn0ERU%2FBqR42WwAiAjLdiDsL60hJLsf3YihfgA065HSFXxi9eXTcO2Tv%2FHwir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMolELJ5L3dWFR%2F9CZKtwDtisvIb37gpZcV9EOKmeKPG49pdB2K2w3%2BeuKZbcmw1j81xPP9FRucxlvqGfQwzTlFKtOTYxRzDJqPWT%2FlPAYIcuGDqyESnfzxt3nyJ7l9GhQhLXcHQ1BmK8rVZ36b5Fw2XvLFGbWZJLgFUosfv202uGRThzjiylWMLj48fu2ndjsWAd3gCygR1u2GEQh%2FVJmqsJoJkSBB4wIO9Ue8%2BKEzUebFBSRpY6KEhU95AU%2BEs1xEQbLk%2BrakAfxMO4INEqb7fMOCamRUjG2DzhayAjoAzw37OT8Aqxq5Phny0ybHL3bNF%2BZBBMHCFH0AtXw9fYUct5uzBdBkja4YYLWPFgYI1BVRTzDMGCp%2Fyl4vy4Y%2FgUITEHJUDdh5AUBv8I%2B4gONd245apAinGoG5ZZ4doVTZ07fZo9Gn9m%2FoQLrnMPDCLgKOqjZBY%2F462FqCl8V%2FOoDp6XvMnBQTvqnNvKEtuCa5QVyZtG6pK%2BJ0vAfL6erBHV8g8DBsEFgXXPdKFw%2BbLfZorFQ3i7qg9a%2B%2FKeCEDk5xuvzYv0GJRW%2BPzOu%2Bhhkz2oPi9KDGoEHSXg7bWYyCX4NQvNxbXXS2sBNDWFfA%2Bzs2XLWqcKo026YRegSBLLvSPH%2F3WHOR%2BtP%2BcfrcL4wnL%2BUvwY6pgFmMXCuyiwFDx1ly4vXPu1AGOmiBx4zatPKajjgFw3cmWHG57%2F4FYRNCLP2Ko9vYwlGH58EU15Y0ucmfz1ByLjn4QTKqDDOAGklOf5GdKV7ho%2FYnHQ57NEwqOnTSR7d9ztqS1rnIebvHLDrl3BNB%2F%2Bnjjb0zDdGS9C8p7nrtZ6qp%2FuwfqZXVpX9noYsy3%2B9e0fjLOdvD56%2FKPwEAFJuMNdjLe3%2FTUSM&X-Amz-Signature=e8d45a2991e90584b205abdff3c5c5925ecf614560542c186fe6550d65bae63d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKPA7RHS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5n9BWNi0CtfVbn4zK9mKJ6qEOzFLVSdeLMCeXxLB3ggIgPs0%2B6wgysxwqgVapcZ505nnuiP5ffrHce1z7q3GTrHUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN%2BnGvFpQPgex77u4SrcA9qRd68dfNkqB9lKC%2FW0lr02fFBoodrn%2BwKLff5tyLYhQs7ApxNcO4UH12IZLuNrIjA%2FaUnet5blTNUWvDtTvziK4VR5rqsX6hzWIVygw0JGXrBQZn6WFVqcnclwwfRHaBsc64skGUSUQQ63nugQhvO%2Ff18ij6CHmX3TOFm%2FmySwwi7zolQclBZS5ta2LnNuCf2UDMdCVdb%2By2aLOqu5y6EPXEQPCTLPlwtv8nhuAEEfaTFO91piQl21v3YL804zEnHz%2BffzQXXfsQMTltr4Tz%2Fva2c4RRLvyaYy5rLVg5YrufjF0QDOzISvfvgncE64fUZACiaMwcySzYRvgqi5v9qU7CrmDjYnbbdwznFfHo08DMiwvx0dgVJovVOYWy2FXIlIOh5F%2FOfkY3F5nJj9J%2FhYqnlGyrR9ENsbb6ol6npcNAzogjVCWunWj1M9xLcohzO64fR3w4LyktZYdieWIWd0zg%2BIJrYtnq2P8MMNvgxkdAna%2F%2BsP%2F3mf4mK6f24Kzqgzd5tiWM0nJW2EllMKTngJGXE6%2BWA8ij8pVOf5gwnCWyJ3pnPLUFKfX97eUEcBLjPOcq%2FH89R1rl7ib2N9By76I6gzuXPrLpgLNMsNgyI3PVfoEFkGbRIy7DFJMJq%2BlL8GOqUBvVYMPpZolKzg94%2B2mINP9vmxdBDtippUSG8V5hx1MDINXrZP1gyAoAD4JhVU1MZpxjbF706W%2BJ12CbSNOUzCC4mzt2uzLyHi4rxEF0cTj9y4hcaTFjCyD%2F6iHoiMXwwd70%2BhvyoAnZvGtRRfFiifr%2BpV40AsAoMMxjjPHZOeypBteWB9ty0qx3bemFX9Y4sax3pwzmYlw3%2F2BP24yHJ%2FRvoMW9j2&X-Amz-Signature=09e7808c1fac45f7567cb08d2a3ad9ffe69abab1d1b4111ae85a27fecf190c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
