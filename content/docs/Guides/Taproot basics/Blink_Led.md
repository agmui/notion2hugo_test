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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVB32EGW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMDlbj3qO87gEs5c%2FcwMk4Nbg1sSKGf6eKv9xTMvzu7wIhAPmDXacBAIRp2RVOTvUWR8BhiHY%2BefKWH%2BYYcgvJ%2FOA5KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhhhd%2F2TEIe69lMQYq3ANdMZnB4VSpHuxr9bGtzfCcaZZ9qTWh7%2FnnMr5v3jlyo%2Fxm27ToaBHVcyPo4CgZZQwFsjeSwbKmX6IE0wklbL%2FQypiW1XXl0ljPP%2ByG0etsVUxNCAilz4JXEAE9oFjl8YCyH1rSCoDtVnFw9BCH%2BaRs80X2GpWpYx6BR5W0Ssef7v6%2BnOr8Nsu2jWHBmprI14rZyCRUZK6nMqByO0iZf2YeyF4a1wD2z96Dgb%2BPCTFh0L3wLZYc7KtvOJezw4QhLOeM%2BkJKOAPRKnfkQI%2BblUyFbNgJYBClXPt5vuxcoUWv%2FKKNO5B%2F0t%2FD%2FTdEscLtYOU%2Fxx8dubgq5nKyov3zHh2wnZvrlilqEiEJ9pfpo9IfyPR87mtdiRpnUdtmoGPS8ZGWBuDpI8qdpvsBBAHqrhsy1dWJo%2Fqjp2AFpRsFJf6sgXjhISUvUWZwblsEZbHxFUT9oeOo4f4i9EKp59dCfzU6Ro0yrb5QtnGxakSLqV4vyidKMLr9mc%2B4qCMOmeblNap8TqyTOTHe%2FiAO5u5NwKQqJDlVJM%2FizSMDo4LlaMyQ%2Bbq3vP84TkN1VGP%2FGo2IO8xzV2%2BQNLRTp0E3ovoPGtCMjUBJ9TThH8nRhUIkOA00JRn%2FO2pJyyBqGKygijDz9ODEBjqkAUVNG88PPT0Fts38KkVDXl29xpfy%2FyOFeuCX%2F8KPMArvvsnZtlHLUucjcECAq%2BX6HZ6P5aXNEO8GFpIk3tN3wknqEeb6MIBb4fajhyQClsyYCxNTl8lkm44lq2Qu8p1hAePkrwCy66B7%2BYWcUkVUafaPaLZAWlxpQHEWfRUPRtpr4eNU4E5zJCa7%2Bp8A3W1opvG1JkQHSzdNdE1nDZ4xjRUpCQCV&X-Amz-Signature=f98c3b833ea2c0de92bd5a4ddae677a8a01c877035edf28f582a89fdff4675ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXGCPO3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsb53dhuzqtIiXTznTkswQjhc6o0kPl51049yL%2FlNZMAIhAK3ylloBS7bt3EMpkWMmv8yM420npj6IVWqdYKl%2FrbWCKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx22goFtRb4F2Z28A4q3APqyG%2BVeUkBblNIXg9UlKX%2BBcvEpqnpda4rOieSCGGIV9l7D%2F1iFQEqSKim1QWJjXx29eSJ4gmDyHqnuddJvG9hlAZAlghh%2FgRb9eids7pc031VPFxHZE1sVLr3MBe%2FL4lmafctVfGOTWsPDS9BxyjarR4ZcYKK0Aa%2BQ2%2B4VKj0G9xzgxwq%2FIFcba8JOkQZcpIzYjYIGzOmEcdBigbIbT1Y%2F7YYPNGqQB4MVplGY5Ijgfw3Gql%2FvoBb15cbF58ubYajddixg%2Fj1Y%2Ffxr4tvugiy85RojZS0RaYAl9%2FQ9SIokTPpptm6HR6IJDBvLnWYLE%2B9kSuSOjuddG1hLpsI4xQQyUpOL%2FOrgJnDFqQiPvgAT74dOfNy7HeRKjxdIpH2Va4wD5ophGzs0rplNony8tfKsaB%2BC2CntHXqoS6Q0TriqHIfP7Zyp9s05o6EiY2vYyPWweWgsW8ob%2BWh99QJMV%2BLbvMXcWIfGRFUaPV5NZmCIEx0g%2BqWW2NBnRzLjjzZfpL%2B5tbCodAvsUfm5%2BYZMV8JQ9copXmahN9y0YnxuHcxaKOYe0ZGelil4atl%2BqU1akdeT8aWIkT%2ByfvR1dOvXiRHHlxGzejv6ieKutQbGt7Laie5PIDUVE0qzZMVZDDk9eDEBjqkAR0CXL6H2ukL3W%2BgHTDeDNM9sBw90IUw5TLb5JAkJBLTav4XAyUPvPk8JYI7CyS7Z7AkV6XNUkPa7WcPMpNvQK3CO6B4QwNXtCJQR7P%2Fivpwk6%2BVI817UbSUa1rxyBtdtAfVeOYdu13M%2BiP4ZMGAkirJgDlDBa5Nu4qkt8t7xKjur%2FQEHe8bnfFnsRMdIDvI855HQY5BtB0XkvSIVTerbMFDBfWw&X-Amz-Signature=c6b255a240dbbd98a136d7c0696d45577371a8f29c33d14f0f954e75cc5e4360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
