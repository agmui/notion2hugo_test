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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPOTTOU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArbHLG0SCSgnTxQ5RIGA0JjTQSd0%2B%2F%2Bb3iHffS6SIQHAiEAyrrNT2tbtyze4tO7c3fAzUjpv27nCVFGj472Mntr%2BwUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHUo85Gtefi4Ri7hsSrcA4MCGoycgITg8aXcw8v5yBteTvh33KXS8qd8fpk9QLUG8uxhKz%2FfNZJnjppeHcQwSOaBH24CXp5M4J15Y1nFCMCNmClU0x6t%2Fh6KCvJRxk%2FmopUBpDO2GhpVVViCkGxujzpWRB3rZAtIGskDzwwCEXb%2Bzd1HhglT6GoKkwnhIA%2BmJjSlSpnKLyIBffg5a0caLQ4v%2FIlKzfyJZJb0wXcLfUdfFTFgMc0InbFMIwTc%2FfdYJCmtlCfdNTFXF2xWGBYcSTt%2F%2FAD2tn88RsOuNpnvdj7Dq8qCpPTYEhKJfe9fqBiy%2Bv%2BxT8VeUtHCQ9sAd6rGAVvbZ5DuM%2Bu6RTRw0F%2BTG1jfQz%2B8cjQeCmkWxpVtaRlqBXStlLXqt9kcl1R8qKO497ynk1W9Z9%2FAuvUXOtFcPfIiI5BIztp41u3rG7W3UFq38h%2FdIUPi6vNPsiZs%2BOLGM8ZypT2CCrLncYGMgk7uVU6RS42QOElZWHdSShXHTnbK6YtAbCD9Oa%2F5fp%2Fwg%2BG%2BuTdRO58Ee4yTARBGuoMtrBe%2BI%2FrJgPRB8yEPqN5dre1p7y9GMt7kx5DUaSHDFZ6a637l%2BQyF7PT32dkbIgeDkPcybIS6jH6b1rDx0cJhTDmiqcl5hrDuyspq1UvbMPfV%2Br8GOqUBdD0zzp1%2BHbyddHZVFicSvaDfgtN%2BlikVpUuJE8MTCa65yvs8%2FqLDXaKwVEFk3dlZE8I6UjZN8XfCezdKwb4NtdEdWrXfcI99JgVRVc1BIErv5H1WWnHCZe1XCaBVgnHgoWbQvvlQgSFTgSBkZXMoVGWSB1h7oN4Qxb7Ay1VHhieKDDENh7HR0Q73YDd4%2Bjz0mL5bTP9CwDRQM0bblxa%2Fb1YCT4d%2F&X-Amz-Signature=18e92b019c7a5defc65291ab71a28472cb1b678668d018c65e451cb2ebe44b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J2Y5HFU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMwP30EfDR6Az%2BFKYwaOyTuD6Qh96xyvCCVmYd5s62AQIhAJD%2F1vTjABau6LPHDygb3i9xt7yaaDFfRyLkvsG7CzPgKv8DCDYQABoMNjM3NDIzMTgzODA1Igwzl5mUo2g2baH7KcYq3ANTfNf%2BiGf%2Fe5Sn5688QZOKnpSMNvMPRzCfAtMtkxH%2FqOQfWY4q5utff%2BXYb%2BQuLNjjLKLzQ5MrBHa1IE48qayksHMV2DiQMuZOqeZXPRs%2FKKQ16hZtdzfySpgVwrCbNY4frbtnV%2BjLfdd6hAFbTWTQq7QFls6ZNOuAjcDKIsroVHCW5alt1jyFErK89K8LaRGcdFtASn0J9EyeSRkt3ssLJ%2FJDxWdGg8MWspaFy9nM9o1RCTz%2Bcevzr5Y%2FYOwkF7JQH0kLQ52p0rZ2E4R8GPZbnXSdawHOMqixQGWb%2BjMKCUiBH6FneCxFT4XLbU1CavZDtw7wA0fHktAE1u%2FRO9PqDEapqF5QGqxa5JKPifRjWkjk8Mkha83Isvw8VYzda3KzJj8UQc6n3ht8zFV91tcQvOx0OR9ipabyecmA7YivH7KOyNU7HXT5gUO%2BRfSiaTIWC7N%2FLvPDqOBgr4D2kKO0QWevSqm4TfabWpw4FninrZA4Wp3U9%2Fi4aykURTFJzJ1iX%2FFhNOyAz3oaAZbLoGeMO5z5g5WQ0%2FbZvJ9xIyhogLcdIwwzt50HSR8XblRVBHe5D9jx7Z6xUtmyb8Ub%2B6Db22zPynJvtBT9t4G3vrya9hHsVyhsN6E3usnZpDDbifu%2FBjqkAaVSvz%2FVrf7nXtVEo4wuGmXQ8cQUDEHwJOVSnYVtnrBxXvNptZ2PHNuW6Rkid9XwYk%2F%2FiH9%2FrV09EdHqnEW6JZeXiWlPl9%2BRlNpZzVMy63WsPxWCZCUuWLo5FH5r%2FMWLDijv%2BBIQfx5I3oN%2FEOwUsBgxHQJqZp0TfGLTrFB58GaCtg%2Fu3BqXwt6OaxSD9O5lNlopNP7e1ziOvI4RnVvecUv%2B7w%2BQ&X-Amz-Signature=90b8f02cf25e56cc8163368e752e938fa2a97b95b3e1d767367acc41909cbb93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
