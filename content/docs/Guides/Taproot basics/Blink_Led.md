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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B3P6Y7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCQk9yKs00NEMOlhnsEDrRqFaXOksnLOJkuLCJSorvqfQIhAOeB8d7aFokSJPPfKnAHQUlfGv54p%2BktQo8D0%2Bhs7aGhKv8DCGwQABoMNjM3NDIzMTgzODA1IgzsnPRWiOuBDQxTDfYq3AML2wYvz9IekvDNVK2LLTHHVU2ROJ7kPh89M4bznYuzi1VusrNaQ7yD8QAP7vQyQDqoi4XLD5TOEOe9sh8tHtq0uNpVZug%2BWlGSs6AIz1RZdMCCu5G1KgisIYcs3w7Z2eQfSozSILywVHTkoC2MkqprssDlYxr%2FCZfExU4HBzEKpC5vhCqVcNEYPv5jZGX3rBYjXbIMZkSZl2ljpvKuR8h5H1PR75wn44teq55LQlIpCTDXF0o8qadb14VDGRQqhUS6BWWMcQB3hFNutpYR6OLBM%2BO2b5W1qbV%2Fo6Lg9fI6RMrie84g3LB0hz5BMIzPbX7YhfXaS3jtRe5C7V3J%2BWKEjAUMkMN%2FPsSjoxKCNnYQMCpBksW3fJq%2Bs8UqbKze6mSKgw56hnvFVDPDwGSpB3OQxI2W2EpSmC7rPCL29tzYJK9AkdaZ5mciX0Q0vCpDq9%2B6LhNkFAMx9N99R%2BZeFGhgLCYxZi2sG21udoEV4mI%2BEuHKOQdofIHrU9nnOdqHepk%2FieFMqT2wJ3%2F4xz1OLqaJkAQvgf%2Bk%2Fd0LqWPwE2y2UxRvIbgUW7w4%2BuOrb09WqQVAH0m6N8DGjoYTlosn8JUBLZjhJcL%2BjB2NFs0KB9Hnp1wjqQniwhfnCzJP2jCHsv%2B9BjqkAZ392H8iiFh00Rgn9QWQyTult1WAINxdC7olTCl%2FoItaEjiIat5CUyFn33CfiMHRP5BuPLNBRrlGZ3pYDJeQv0Zd0c6Gd3w1y3asT6oq%2F4z%2BSimk6%2F3GLefH3873D3NdQc5Qd9khT2OznFvlzqcoKRotU%2BlPTAEYsJX6P%2BzTJdH8b2ON29cKLfo1OtC55GqSG33EDBK81zF32lo6tP5HGGTW%2BRqO&X-Amz-Signature=24c896d1a02285df9193f14cd543f853aa94bdf3a9c2ec3f39cafd5589e1327c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUS5GWP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCICE4eiPE%2BMVQrG%2BJYvgkE1OdBVRpOn2xTwIkyCO8Enk7AiBL%2Ba%2B7bHVHTG5nBQT7FwJrbBA8xjdG1R7SCUeHIJev5Sr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMMgCLWRkuzKcILLE%2BKtwDZSz5uthpvRZTmGybpmKzll3nXxARV0dWhYXjojjumX9WvnPSwEQM0t74UzYZpvy0TVAeXsRvSy0IKZz7VVmPp%2B8Bg855tAH42bIWDCBwMiVXOfxWPfKcIZaywbfqd95pzBB5tKPOTHMslCg7A9eTNvpCaiI7ctGnQcUudreqHBiNdfOYTKfhpQ%2BrplJJH5LcwIWQHKyRCHj8u9N5qOQDBMiLFbNd99S5AsWmKzr9AAH38bKX6uyuvyeisFsfoaVfJYT06dcTeEfsc5vxPzWa%2FbiH6yRRXc3UGxtylQV8MW4cmsWrM%2BGjyDSzyxjA5FE%2BA4IQafI5LRw2hCtEYmEP6A4Mo3toqTOQRrnZZbMBDVymRN088gHyPkj8xzWFW82A5rysQ3pMwGujNgl0b3JEqJm9qru8W%2F358%2BC7notUp7FPT%2Bl5mWBpRrptp%2B6P6HlIEZPOEUXJQFuRRsBgmrHpu2lB9P2c6Ap9yNUIZ4WZvT8QZXt9SNaM7Q0VDES%2FLN0UJCiMGmZHNjjnEaIEzt6t%2BgJG5%2FbKmNwglGidbqOQvfnv%2BPDZOItWMy%2BnkuCGP3gPz7tMSwEeGS5YG%2BPO9Y0nPrG0qT0edIwA7iEGh7tbNcMlBZQdGpKFfUGvgZEwhLL%2FvQY6pgE6YKP1Ey%2F0gWgtvpQ4vBBM0W8qR7GBaafPO1G2oKN0MVOUeoBB6YcLN1%2FycUn8QRW7UUy7waDykiDL4KQYn7YMvqVT%2Fju8hJuGgQYQbjsDWLAJwXRFpHjWoxYFFXDbv6ueH9G93fwXI6fRXL22idJRitkyH4Pn5d0%2Bx25vAVtiCjCPS2NuMPWVVITrvNFwLqFyNxq21ioA%2FSrjcnAI7h63Wrcf16r8&X-Amz-Signature=e313b97abf1d7496c79928296eb13606907d004db4741facffbbaa239b0834a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
