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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QECVIO5Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEimmzcUXyORrqNM8C1L6qOqOo%2FaLsN6eBQT2XhwZWbrAiBwI4CbCg%2B1f%2FFDgxNSGjwKDpMO%2B%2Bh26JWDK4PFxH%2B08CqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FdW%2FeH8YRCU2sKCnKtwDq16tpf%2F8j1aTgAyJrtKWO2Nr1GF1T1%2FeeYbFz1dkKIfROH1wa4XZH8p2FxURT8oC6OhhS1ExsZ3gaWTSBLHzNRpxvIRfeIZDp8Vk98gz2omQdpiKxxVyjDU1DNGZZjg8R3%2Fy%2FOhOSLRQ8V98Bo6P%2B09rWhqLbgtB6m1DIjODzo8MWRoO%2FeLBsNP4vumDPo3sRe1rFcopCxncIuf6xuu%2FBNFr7rSVq071kuphI78IpPb5rbfg3%2FnGK9PjrLzdfCIqST83Mw%2FgqFHLocVVBkX23nMrSDPIuucZjuOCI4tpfOa1DjU3taaSx%2BnaGs0MlO055mg%2FPKIDytp0c4Yia2uTIgOBBb0Bje10X9TSKLT80uSipZ%2B7VoY2VBT3wQMD%2Fl5qyEssxxwSKbIfIq8x7qkopHybsRtlGI2w5WVbvMBhvQuEPa7sDi7ThQgy3Y6jAYjUxUdaPkYADzJCwQAjcZTg9lp%2B%2FV4pyu6HwuunLjdnnbyY0kR%2FZ0RysPUAY4wgYKSs0LNbH7hNOclnCcyMvlMqVhuILav%2Fpb%2FNn7wLEvDAQL4jRGTxeT9F0dNIdypuxZE%2B28wXUGOGnKzxab2JvPKNKOjdwx8lTJBo5VN%2B3RElFp3%2FFPdXligqgTQlBE0w5OvuwQY6pgGvJ9AfLDvqdLkMN64oifOtzW2pf5PFTX40Qb4TLhN13LAaBLiCXhIb0MwTosHLkQd%2FnnHP%2BW8RbjLPua%2Baw0JSB8QC2hM318gWqbUtsluOvC8GLcv6gBed6r7%2BoC0kvrRmdgNWg%2FS15ZJoY6Vco2NfWG9VfifEq%2BIxzrOVJ6HKt2J7hNDmeK%2FdPnSCQjppJWt70lgCNu6Z5qH6OMjxGb7SxPIVzOiP&X-Amz-Signature=2d6313b26469b87c097f310fa7c27f4a7ad584c5de0c3ca7eef2d7f9a1b23b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGQG253B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHhg%2FgMI29tnW8mSlBUd8LbfmQGC5BOqX5hl3kER4pPeAiEAkv59bL%2F5iaBxDzQQUDuy4yzcSSfzz03uavKqmMV4GREqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJxeS%2BgDjYCrpBYmCrcA4HEsj%2FHdWh%2BegwWYEIe2eRWeHHk1OgEbY6dRii2U8HX2C7n3pFmA4kRglXddQyRXfxG9lqQkIjwEYqnNbL6CHv%2F%2FEgWU0B98PsXmh5d8J9d85V1z8pV4ZHvUscccC2qBFxx6KEUEv5TvM%2F8MkM%2BkRSSP%2B1yBZbGSxsJcAci58ygQJS1MMH8TPSAWR9X2Fl1vh%2FvZLwr3pp%2B6VdV4E0dq577bfj1KoleZTCUe7XEiqaUHRK96OFX36Sc9YpEz0qk1fzMs5j9%2FvDv7FSSwmgyrAuVbw6mEzQgtDhwVjaAyGMnM%2Bipif1d%2FsbvW14R%2BjTI210p9eXVCr8u9AfqPtt9P%2FWGiSYKuRAb8nRVtzGt3Qdo0INNefTXstLZ4%2BRk7W11BoDeZSDVP1%2FtWCub80drMiavnu87uuUFXiGKq5fMJLttnoaC51nRLpsnj90Vr8rc7c%2Byp%2Fk7jqUEDxE9SAElSlZroQTLmV9hZKIf0lMQvr4CGMa09oseuOJdqDQRDkzTwpg6su%2FyThD%2BWL5qUOs%2BFtbnBPJWiwmHgdNHnSXfByMvWBZ4erInc1AKPWU9QkLTFL0tnHQSyJvt7zdyx%2B0sAQyHu6T6ES%2FugC%2BrwbsjdyH28nknPxBKqQtwvMlJMN6T78EGOqUB%2FMU%2FQw1JjjphlrV%2BuDntmng7kzo5JsVdf%2BjWN6wGIlDMTUsVI%2BNCvdS8vRWY85m0A%2FZ403wHgGKBAY8YEuVChiYO0tIfMAgTymQdpD647qUITp3LoTChjCBeIYhWNMOrXfeDzkK65wIun8wG9MQbuuqvLCVqZ5fEW31pnfTNRB4Rbhvz7fXaFNxumI70%2BlI1F1LDkv2eiGPprdtCi2EAsPb%2FYy%2Bl&X-Amz-Signature=f300f8877a03568342dc1a07285bb9748015417f29bfdcb0318602b3e38478ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
