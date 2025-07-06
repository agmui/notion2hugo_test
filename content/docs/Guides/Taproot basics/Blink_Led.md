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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667KFN3RY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICqykvWTj9V8MJlkCu9EbNsFoyEUyoLqN73jl64VOCtbAiB4Efu0fA7oq2GCuMDSOQWqK7q24blWA323nK4DHSt6JSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMW0RzT%2BZ4xzHrrx4GKtwDb1sakpG8HFTcbRaa3QKDQ3y5ikRYbTJ5Dt44OFg05yjSJZtTq9Z5rDgqR8Aa5T%2BPNlOI9Z0Ae50Pxp%2B3L5iv%2BqWBWuNyWn3GcegZb5xsowX1oIomzTWx9BzD3rv9ZhZqMH1WAyRD4I328ttXbhd7Nt8pfHnEpM%2FmgXmAOEmwIgFg6CyeEIMO%2FIJA4kQF33HZirPEbna%2FoOvVpAKz%2ByoeEJsIfWurPJlKJXeifX79HBWWiRo3JqQiPTHvxGOE3ip9ngkof5bY9Xxhon%2BMQOeelN%2FanT0OY%2FqZaBt8GVuHXeOmnl5IBSk58ermBJjru5PsdEW7g8XLMHpAQIomHZTzf2Gnjp4Bedcwy45jieJJ2fMTSSw2XQLQq1fJkrqWLAaXnEcto3wqRPHgyk5gZqQ5cp8TYerp3w9smYPlP3J5LAqBfQLJf7CnYrZ03HYbZu6E8LNgi7vGb%2BxmN86EHyUhtU2QGN4IjE%2ByJkZtgs%2FfUewi9TLv2vH7wUwtz5hFldQph1BBXs1itnInNhSGhRVMmadbOc3DiZF%2BrS24WUP8XeiG7QyyeYHwfqAVyHKw5rofQMphNsTxiVumPM1LbqbjRS985vhBHICWkmEHWQ%2F9XN5wrrNY7dE6D5sYlREwmICnwwY6pgEINLwkww8ejL9V4DdXQ0gVNefJGqTKHVoFwBP69DlrA3pKqGLYQOk%2BOU4AxFcLO%2FhXpYYmYfDUO%2FL70rIJoFQCptcKXJZXXENOadSstMdJyjIOdZ1v7EvBZw1W%2BxS0AwaQL2y2gKBgL%2BGGIbTshA%2F62oEYAr8cly9v5cbHUt%2BlJtuAn2tQlplxrnlD5f7C5KV9qNCJm6bOLvvDIIxxk%2FADHQphKIsS&X-Amz-Signature=fd5218c6766221348800adbaf7dc0c1e26bd82f851f1209db10c534992773368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T7VBTPJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBcxT7TorWABohjEv9RXwlyR6544PL0caf2Xxfv%2Fwm15AiBSjOK%2FOraXws%2Fc%2BzBbSl%2Fk4yDFiy7E%2Fq7kG25djW%2BE2Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMh%2FDNQak7VOZhhMG2KtwD4ojUcXowNQBXICz6cZbsuVzAfE0qQXhKMS8Ti6sCGejbzrE9JVT7uH1mqT2B2a%2BslXEcKsdhhGBzqnX0%2BHzWe%2BmMF4FkMkCUkX3h80mEutVCPilfSeTihK0OrC4osq9nDvc9PXxQy25cyISyBvO1%2Fseb5ktsCS9pQoA89xwZyeG5uCIldDyB9JZoSmzeY7hLPnxy2%2FZD7e%2BrjFLhGJ0Qbawleh1BYHZiCMn0PKbSSALqn2fLcw1vIzRdZGJHBfG%2BoTrGJ0Rscl6a7ta5WyqGC5aY3o%2BxPnRib%2BOJZgaQSCY3ltbI4rnIw8wEb%2Fs2xAc%2BsIpTtoWjyQibUHhBIz%2B77hTV4ME0nD7fLqJINuAYpaNTfteq3%2FLLuStEkLdHuNQf5N55n8DTxBGkk5ny0TCL%2ByZjWrhWI8wWLMP%2BvRaKCt3GnVElCBpajNGx9eDej3%2FNzMUiw5P8cM1KTDrp%2B6DER31NIWVRgtX006eLfsvBO3DUuAz2bcrEwvPWlUeC7PFp5nZFC3idtwMN4FkTyfPBjYW%2Ba0VMpu%2FKrcuXjCgpnw9T8HSaRanNtGn4dfiAZXRfQempTe2ujXIgrayDiXadvS2qGmRdL9RO7Wfmat7R9yG45dlfgnqtueA%2BwPAwxOGnwwY6pgFI0qNUCf6AnNJEZaIV3EfXpGcx7vH45q8utrQLpQ4wpWczkv7MhgbRKhRE%2BbhF%2FRBjPnfJWGr%2F5ojhA5VWIteYvclowKFGlC1cn4zrL8sKDvfDwHhipxx%2F6U9G4V4kjn3G37WloO3uOG8jor%2Bgz1SzkJYEveOf7Tl6D5ETuZFjX2ACTFMY8TOpCucYwe%2FPcYi4QkusbKDlMrZeCYsvsXbZDQDinAzQ&X-Amz-Signature=621bf3f3136dc5a0d392097a2dccb7e0fd6637706dbfc507f97238e4d0fadad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
