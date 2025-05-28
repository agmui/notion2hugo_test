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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ235NZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcwQ%2BEPNdcYPJT8LIB6ln%2FRFbM%2BYPm1CVM%2BWmJV8VQyAiB65Wo2yDD8kytknN6X3KOjglMfCFTN7sqkaMObmi0IoCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMatsuh3TXgAg6i5BrKtwDbccdvMZSEcxZF1P20VLz6M3dANvXuHnydYLfSMNTkB6zZE3hcR%2BrvIIY7GJTgAuLU4sSeRwnvPHnibOykefaZWZdxHPmsF56bszc9e2Y30yZitAivQci6OKrkJ2v4iqBIzpXpc75VLGuIDnEskvyuPad2GVoq727%2FU%2B7qnMPZ4lo%2Bv38BqDUcNCIB%2Ff7yA7WUpi9tuTQFaB5pFR5yXQrMZJWIMSyzo%2BOvmtYn%2FmwLDcFHj73h3DRO938bynNlYLNqQWrBucaR2BJXsgKnxLcwg0Z%2F2t3cI05u2UMBEDQ3L1fdrGlo%2BRet4TfEWiyP0vP4Pcc0zI5EsB%2BRrTHiGF5U6lEY6pL5%2BZmAHfoaWRAplQnfCZOYKQtn5IcKYWkeOg4S6w8jOIgsTw%2Bqbbkeeq6wCYzvb0ztHNh3VjQ7hSKl3NPbHe4ZNjei2YGbTT1rShSFBl3QHu3lyvNLdPrMn4V1jO2AaDrr0c1rwe7FR%2B10HrrOmvoyCAOuEdmE5INCVjVjwGyDWO5%2FdsxtDHM211Hc%2B0FID8kX8a18SMc%2BZGFiUidg2H6cDOFG4%2BMNCVcGGt4Z9Q9iuq0U9MsW%2Bh4u0H13EYFHAFIisqB2zzGoPMX2fcQKb%2FUuQ8lZS42b7owlpjawQY6pgEq8pAgSZDfRHKpMQlUW%2B1crS3CSKY5GsQHhUF%2B00nU0Jj%2BmmDIEdG1iR%2F%2F8aAfkMGBhryyzi%2BwkDHCbdSS7FJnhBJoqI2bmkse9GH%2BCeARTKLELRCbcRhs%2F0Nt6Z5RtKsW1YxdrCBcoa65iBMhwawu7jLLv8Cx2TGz2BOPv71SWtZaBZRXuZ%2BCHtqUmNtqLEOZnqaNfYOKA6Zllwvz7gZdL56qx342&X-Amz-Signature=551f441e23b914ebb2f080c23fb47bbd13844e09a62272969b099294f5cbf116&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHO72NY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2RxrH9KaIRRpMmGKsxtmm8ORtie6b8nP5tbD%2FABCirAiEAwr2QfgL9YbYm6bQ1McHWfpavFCTo1FsX6QcUtdHw66Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBh%2F8%2FTK8QxNe6EE0SrcA3cz4SeynG6GEprCxTXE0KnEbMV5EohYrWAto%2FYn5Y0dORPQ0U0CpcdOWgdXeQGl%2BlYe9UmB8iuyzDD49OgzXw50ctLyXzXsUJcfV7WuIf%2FsGSKRb3MSfiC8duwqK%2F24nVDZomEgMiJPcmtmSN6KNRXcl0Y0fie8FvJxuHySfBesp5GcrNqGFRB6XYXvxpH75djHJssIvp1tSwpcP4nMwGEqeh%2FZAHAppCjRw8aOu8RFSu%2FPg39tm1zgFqwHmaQVEhfVJDJKJhHn8gL8yeodv3Y7f9cFKXKSLNnct97zXp%2FK%2FUX5hwQ71%2BnNqjpgQ3XLiu81rigUlfThvXCbeVf69ehaKXXLH82kaGgndH%2BCFk3Wo9At%2Bahcr3%2F95n9%2BHJ524l%2FGMjQ3x1ybf0sJm9nXsXZMMsRAfY2KEwRX5RG8eyFRi%2FgUZcLglkKYaknN9O5iz6f%2FX1YvB9DVZyVhcQerXoKgMbecJato%2FP3j2abpEq%2F9ZrMZmNv%2BHcprqx3uXl04DI6IZ3SieYyRgSRRGKDC9SrjQd6Er8sgHdFpfXIKNscMnFdQdB8wN3jPWwQaQ3u8uKMzIjtKXVo%2B6md8tDIQKSIMQYwqtpEa66beyS4EXpjHa9rmLH0Ow5W1CS8BMK6Y2sEGOqUBkQY4J9TCmRX%2BYTBTVYGGcPps1HIog4fJ00yniKZVEpzIw3Rpk1dox9FzhZZOsdI1FoRDn%2FM%2BDMUXu2PAlda7uvLcNRxN1il7yNBhcqTWAVihty65H2rMIeg4oY5MSSk3IVS7N8oCwRK%2FjYI1kn4JgYPBXka6FL%2BhMe%2Fro7z9tZQ3tibE6Lk1EkXhEcD8YezW5UPPPQ2cJEQpjDikXK4lP%2BG%2Br%2F2c&X-Amz-Signature=ff26bd89483aa61fcc3575934a40b9eb60d84fa5322379defc7389866714b2a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
