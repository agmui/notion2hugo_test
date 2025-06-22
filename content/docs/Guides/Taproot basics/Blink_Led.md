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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BMH6KKH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE5gkKdzPeGhCRXw7pB9tY8zXKNITOq10EEweVX1i%2BjAiBESi72j35LOSeHhSHfgc4vtpCdENgTF4DTQfqtjoZ8viqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSIG5MpNwYQhdNbDCKtwDE8DOgEkggIpQv4rAWKym0TLk%2F4EP8zIi%2Bz6%2BzxMo5apNYw2SE%2BHC8ydKsDYRmCT6mQLVTupRKFk%2Fo6E1ENOIy3CGpUQSilwwIjW3wD8itQXiYsmibDbNROqSkoIDvHQDMgMFKhbUe6qk1V9sIrnh5hR4rB8YF4ZkJDG7NHNSL2ZYhXTBUghCNQoUrYwS8r2S3sEUSwo%2B0SXEXS912pC0qOsPtnM2KqjTKVMsGB5%2BfPp4pzfSZ6BQKwbjA2OKjn0%2FZ6GB4XZrjvez03KwBsWn2XGl7%2B1Ss4eKuNJ6%2FgXm6AV5Ea0%2Bb6O8sWeIyCC%2FdUlo9rsmrOQ7w3M8BiRUFtj%2F67RF4SZoijn%2F%2Fr%2FBDjd9xpxkfX1RN9qhzqNAQaHX%2F6IjpbQbohVbDV%2B1yywW8MHnVa32zTUxtMKcXpVEaEqK%2BnHTfaqbI8u4hzZAgU7m8LqhSyPGIkTNMyCDbxTvJUH781cLZd%2Fz1mI%2BTwYv8IuyhFgdoURWE2yRcTFHcvyXVsgLgEOynPnbNLWN586QU%2FPbiEGZOn4bVcRg9pjdiQWSw4Dva8vtwbhd4kQ0ETahhG8FAphDs8klYECrrnyrt6ECQ%2B%2F9eMkeP0pzJewk5Yz6Un3nNT9eEbA8meh74QYwj%2FPdwgY6pgGNZMCI7vXSnjPFgRvtsPHN7Hl66gSnJIlFEv2%2FwV%2FB9lYOeudyMAe15AvAb4K5F9vbUfkn%2FPu26l2mBPp7Ijv%2FYFqNAULeyIYi7xNDOD1lYxDIaKqr1wy2USF%2F2DG5F5AMQn99T2IxxUHofoW6hO%2BPlfupG2uGnZNBLNMZTiaxRAGz%2FRtn1NQilJJB1rKWHKjehp%2FEJKAlHjuqjqZw588arqd6Lrq1&X-Amz-Signature=9d8646a7fab13b4acf50314f058df893fa3a41455bb1dc63d1fadd629edc47ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NT2V45W%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF950lvPeLF92U39kGE6NdPzsfdXAmiyxngwwCbpriuwAiEAi1CPzfKrTr1%2FvHzATiFac0eAB4ynws74DsLtK7QxFhwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxo0cDScrrPx2eKJircAz%2F%2FUncZTA%2Ftam0MPqUsWWkZspbleVha8lQO6w6yBkA2%2F04R8P7ArdOmhg%2BQ%2BI9BMmToPN7zfiOsGd7x%2BpEVG1cKmlLEAOmJvOk2JvA4idUIDlbG8aHqYHBtEEO89b2wsPimfrZTE7FnOK74RAIjxUqe0VU%2FMDgYPVQbl%2F53rJd9odq61hng34qCN%2FE8HxRy8yl6ZtUmYv1COkKgvVcqgxgbHtQ%2FSgo6Duyo6WsmCrLI9Y6wxUetLZr%2Fzid2lew8YjSAP3LLhblq6PP7CJi8KVGl7GJfBW9GblAKE7v4FrA8vxTyPcOnQLTEIeuL1WPTz7WlHAazshKZto4vOp2I9XW1A46kzbzY5j9FwnW6DjKybb6BzzC0AUacvmfyu0ernv38ULpCoBd4zccklkddBOB2Nrd3igZj0mUJGFOdIEq%2FjHRUpwxNO6Cv%2ByvmFHH7gzkRAd4tNZMGiCk4R%2ByDY34FWM1MW7EAcVSQSKbXHv2kHetzS2vRvY9%2FURWgw0i7kL3I8FkuF50iDyaSZUHMiEIUq4a27HKRjZdfIdjExZUldqOW99HYWNc6XTn8XDpEOB8l0I%2FugMiqWmTLpmey5dfdq%2BNRu2WkYwePczNC%2Fol1tahR22gsTylDodmgMMuH3cIGOqUB0ungyI7vHdCPT0Neh0GWGVFilbcN%2B61JR%2FUXpNcGBv8AW4vVKsn4%2FZZbvOWsqX%2FnIiM7fQ528XFWe7Sn2zTVjCKYtCAkYyeKXwQZXGgJUG8E5KjrgYId7T4Xxvr8K%2BS9cvPBGUjX6%2BXH%2Fqfy4s7EUmIaSaX6dLLWF68L93ueu%2FHOL%2BntT3e75h3Cw06Zh8YoHtcI9FHIigef18HfMzysCxv9awB%2F&X-Amz-Signature=c31734012e65b27b6d59fa54c826b870559e87511adf01ba6bac1782191b2ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
