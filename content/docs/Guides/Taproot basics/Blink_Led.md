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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4UBYME%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIA6jj0%2BHwitcErxHm6sayRWMzT5jiWEqHpqibJxigmbaAiEA%2BwKMmFGONNqmJpOiuFkRR%2B1pEfoU2GpKLe3TovpIz4oq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKKv0RojVs9tTm3aiyrcA4sAfw%2FdCSD756wrJvVLcpg0iM%2ByWKAPC5S5Q73IxnWow3W3N%2BQUq400N%2B3txn5DI3gyQX4MMfimyjIyawIl10I62ua0y9DKqSs9eeaC17QQwBq75chYeWcf1JKVNmzMO6OqRMDqSFLQhs%2FHmF7odaDpTIidXy7gnjUEFfvA6q%2BHQEBXhoRzKf4x30Sn5cVbrvKsurrxGotcsiJ3J3wdlN%2BdHDO%2BL5%2FwzNPRMWU7mr%2BRsnS557hBRFTwxZXa%2F%2BbyLXCWAVjTCyDVHzHAQ4I5kuj6Ozy2fcW1Jss3mwMW5gDj990AAcYm%2F%2BZsC3ZbFXsr3Cedq5ef62McTbuVZIVYYsVSzxZwJiVEMy3VdVlwtcXgrHMJcjHqb%2FDzTbsvK2LmuUnUg8M00JnqbhoCEAN2yex3iHjtmSv4Itl9LyhgHkbc6KcWx5mx3gpmBDQPUc7YeYHpkfOZsrUqwp1Z2U4%2F0DcL8%2FijtKiUgUr1wMn%2Fwe%2Bm4x8ZBTQId%2F%2BzCOBEzi8gHlw93c%2FPB8QyhInb7copRRwCLi0L96cx832o5c9AadpJ2keBhEckQJryrm2cIzCplWlASujodG9sz8niyV5JfzEjeHnKgNKX6gY90N3x8nWwU7c893dSe3S3B4BbMKX%2FzMEGOqUB4F%2BRLCV9o3IyERwNqKljKz7pFaEru2ZaFq%2FP7DoWUGWwLo77ssG6EKQpZaPMLxrSuZW6GeucI4Ss%2FA4meG0BROI6S7qPYAYshsFjT8b3IY1%2F%2FvNC2GSSikdio%2ByIKj5lu4jf3PS%2BhdhcSe1%2BhN2WTsIpMT3xzbqhELrK9gnhUfFDse05mymT%2FROatWpGzgiT2Kq2oZsyW8uvc3171W2WSp0Di3%2FS&X-Amz-Signature=ce9a6213fe6695633e92a232f3ca0f957c4575431490c195d6c6bf5a93c93ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKK6CMT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHUGTvE6p6L53w9XJ2OvGoxlgbTZBen8CwdhmiBlYDJlAiEAsnsf0qWpjbGRQvXNozLcw1NRZ03Ltsrgpek6ynHtZiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOqE9jffd5BpJGOF4CrcA2QW%2BPgoRWYMH7V%2Fa5zzjgv%2F4TFe4%2FWg%2BR6BQd0jPrPpZCIgNJ%2BYuuOwE0t65AZvAWCqtRe1C1Mkyn86X7vjoCkuB%2Fo88bOM0%2FoWcYkLmxrGxtj49IH1GutVPwn6fUxuiqUY%2F7BOjBkXpr72ZxObUdFTOvp%2Br6Bes%2FEGLF6%2BaIJGDRisuWuWpu2PJZ6IU4fUknVQ67idaK2f8%2B8sK%2FOZw5IlSCG09b2BAgt0FBhqinkOPH%2BfN1DzsoTrVFJtrKO6r2ay71tKAHXpIkQKLnD0OwPQQR%2BtVQcExA2IqdMBeK%2FdtYo0yy2RRVbh3VAPhhLmmVEC5mg4gEICo0qKkhWUnRaDFcTunPtgyJIrpyru%2Fe2%2BIw2SHnm9nV8EiUtY7RoX3LapH5VJffKf8mdbnflq0aRk%2FeXHwyx3Ek30I%2F%2B6UIzUJTKPI5n6X0prSdw%2B5PK%2F%2BS8oEHfjY6sFkUThuCMzAb7oq2Pu3%2B4JJu7Ck0zUwLPrqott7Ump2pmT4wK73ZalRMuG43Hk1cxUj936zjfhEUxoTMcl%2FoNXtp4h1jBtD1GS0qiOOsGeGTZOakTckN7qh7vOl5qtheDCTZTtpIl8NFdjO7i4rKR4seVg0WvbPsoc9AlvZW534mSu4PRsMIv%2FzMEGOqUBlBJMiHstqSQJTXI8QsY3J%2FLWJhvmsxGqdetjEs2d8q%2BO3Z8vsw95eLH3DO94vnyiZ4khrc%2BOZCm7%2BuM51Je35LzV6SGmK8nH4OCbQZtHSf%2BvAnO1CcYIrlm6kuLfZmwb5tMDG2A4F65zhXdJYAwl0OmNbLn5oTRNkWa2SpUvxppyxKYBRDpD8E0j8AnR%2Fiq6jvKaELZvAQWqErKbQQBxTnjvkbay&X-Amz-Signature=10935ffd862c55ac26db6d79963802181c74387e30f3b44dde97101410e96a13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
