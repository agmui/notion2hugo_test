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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIIJ5ZT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDC3yC%2F4FLn3%2B3UaUfRCJ1FOykEDG3842o8fm9Iv4Sg0wIhAKrCpl88SKvXPv7B4DHlycsqUN3zMDhHar9gmO8LBwcwKv8DCBgQABoMNjM3NDIzMTgzODA1IgxLMWAwNZVyCHRbJ0wq3AM%2F1qsvruZggKxr6ilGE97K1gu8ljeTKzT7T9Xmk%2BaN8vIZXAPKSowfUBCjq5NM5uAwP5hoGAATk6Q27DoUioIeLIKFmcwC27XIEmHK6KGhkR5nEBkITxH9R2Bd%2F5avAIdWQFYywSFpcDanEoWOOFg%2FH9XQNCaD8CgS80dTubQF2%2F1Ypgv1g58WejAodFXCD6psEm7%2F6rmIApz4Z3d2jr9zzrjTvsFQ81tHygzTVOo3isCB%2B6CR7C5K7PZWjEHrkYMwDSz6I%2BC6LfcxGRWKArUIrbFmsrBv8HaapDGvX6PoA955IcPDFSmbbqD9GBuDi82p0IxV8gq5I1m6HUhLBk%2BSQ7KjxEpiHMpiI02w2wb21N0EtnZ%2BHRmuHur8wwqBIO%2FRHHVJP0d22MpdVyQB%2FbU2vV2z2IIUSpNTRNwCuKUd7PDVsM%2FJnCug9OJPBBZLK8PaSV7iJqgKnlg%2BZgjbfn0R6rQ2ugsY8KazNzmXCPC7vXSFc1s95beN7dQtu8mlFchdnRu%2BQUX%2FfW0bAUXVDq6rSKBGj6OmQoBIBQkGe8cWeG2t58X8In4VSvjpwmVALbHwQSDkFJjVTiMf%2FTC%2BVS8lmNR8nb0JioRR78g4b4UzPOsdYzsdgXISTeLS%2BTCHiN7ABjqkAXp%2FcA51dHLS34DX%2FeT%2BA8kIRUhYcXJmuqUAlVpDNRUoRldNv7XuxhEBUUnvs7DfdeKz1P%2B%2Bowgy3E55R2CPyCNrhWyIxrIrbUor%2Bt2mSHit%2B5GbUTzMxENqGpBxNhtZoOdt%2F9g7TBG4MGx6gumT%2FlJ5HQMFDZyC7i1AupCjG1vClyP53QJjHfj%2BAKCkGYnVc%2BT41n5tXSklZleciCb7ZD7o0qQu&X-Amz-Signature=71ba3c361b1a9fb97753e4540a8ba0adc0937bcee956b2452daaba498a37a0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRA76XZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCGTeitC2NV8ULGVPaTXWW30Io%2BR0nJV8192S8yVEWNEwIhALTTuW8KdGT4zMZtp4zv8TQvuC03v1Fc1yQbzs%2FwWIDNKv8DCBgQABoMNjM3NDIzMTgzODA1IgwiAvPxtXlKGuhcB3Aq3AOux7WjMTkV5xY4abp%2BK%2Fxu5bnLVuoCOa%2BO6YcezWArdokUxMz2s4KHQE9MXXrMY0X62lNp86aOmkzDQ8F2KV8knl6uIkduP9CPGeoFGQi8FRfWd0xB7e%2BrzQjnzajXOOkBhfEp5BtNR%2BpwIggF3d%2F4K%2BTAMV4hzGKJAXtrVD1CU7Ve8oVQc8cUqkJHXU7sVCDKxx3%2B%2FWy5XQPELJOM%2BsC8YOqgvrixIua7aSuxmpuL0PIm4opH9abjtPLTdj0Dni5XvdMOcvNeiTWcCrzrSV3CnHVOJo%2FqEREs5CG0O6vC9%2B5wE5o4nWgyw5KpzZx484QP1ZxbgzqFOTbY%2B6A%2BNFdg7Meueg%2Bq8v0ntEfTEdzXwE0Zx6C2DzJXqNSw4lOULE5633xeeg28N5zTC72fEsfCaNAozSk5RuB5TReO%2FTHcJtjphhpiiAVSkPczJCZvCDClsopBQl0brIwWVrBLIpNv9lcV0C7UlKpIKp1kNqPt1Dmygc9lVWO8TQt7ws4c2ne2esosCG0E%2FhhKeWxOEZS%2Fn3HvyDJAYa8eOOhSDshvCyjfIoKkKLaOM1%2FJAA2BnrB06OWyTyg4%2B3DkFXNYuRTu%2BWiWgkt7AETsLf%2F8%2BDAnqaW1JomJT7kckAB1bDDOiN7ABjqkASZCu0920GlAOZuomHsrTc7Un0yHf42eOPqVtisRYYtPdLoj1HCMFH39wXF2hPmPnu35TmUcKXfKFEXD9i78tONGgETxQhfP8ltiTMHm%2FkdMX4tt0BURAGkX5PhFYlLI8z7npE%2BUc1q5iVS3qQl9fVeXLKWcZil%2FdY6D%2FMXo3vz35KgEVcWe%2FWKQwFu%2FB25lYNto6F6hkpGB1ytBvYwbXzku30Yf&X-Amz-Signature=1513f0fe40582bd97d846c6c7114b58d24e5099128709f062374c2dbe914982b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
