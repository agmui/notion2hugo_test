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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5RINNJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtsHct8T0TlMq0BAP7IeIFA5N4Uos6jwo6tAQI5hD4qgIhAIsI6iSdPlBM8xvAqw5b00qhf9aKSl6SRGSMRoAgvqSQKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQoYIi6BcMW9He%2B74q3ANaSmi7uZwkDn4DppC%2B3LncJCxfw3dIG439IcVaBFZgaf%2FGYbt%2BoaiSCy92qiBg9jgPS86IQHMiJ%2FzG1kvFRN2VgQfczcWvqF5edQuizfO7i0jiDD2glTzN6T3je6fbtUfVqYOYAbSVJIwfXhhollYGYrMdfUkReZzCOxHCmceOHODCe4%2FfL3XjY%2FFWZOPu7%2BPZe0JAI3t6KnYk7YXN38%2B219TYaRWOFSjEpAJ0mnOJCwpWLlbatHklvifkhe%2FJtxI5nUxWhqV75f6YaX4nZ1sIgxQBLJNapjULEFAuZNFdszLdDAXGhh%2F3MpR62WHRqXtFaTkbaDqHTVYc8m4KhTOqxldyMvCWhUamqLKDp3yGlbdvmQJC91zpbSK5jw6LH1BQh%2BMQVBKe9fiN5iz9LDkJjBHciXXvMUQWnTdWsfCrV83oP37EtdYG28oxtz6b9mf7UhfNbI0FZV0FacKcvXkBxOCmaRQ9MXUsUc4f4vHL3rdKCf54yJu8Tw9POjMqKSaamDDHDsVoHjuARYQG2G0R%2F%2FBPXI40Wn1NCRA7BBXmwJunAnT5rexeqoFdCTYe%2F60FCxCDWpxVDQ8wIv4XUACusTBHAWuTz5D6agONdNzBbG3tY%2BM9NhJP1iLRRDCPm6zEBjqkAbcDzQ26CuAN%2Bvs0KGrmD40UMOTVZwriy4GD4QHyAFdddKrDQ3BNzHt6%2BZmhzPx77MRojN2w65DLa7ppCBAaB2ZplXYWXVPf5kN1wsy7hebt9nT3mPf5VUvLoQm1fZNnNmMnFeWHGc%2B7OQDVtbzQ9ezA59iUjfe7LChk9Gn4PWhdSGylUKn46HLRfWW4I46xCxA2vDu5uwWi%2FWxwovLy%2FwHk0336&X-Amz-Signature=238763188041052ec729aeee6b4873bd0fc214ae2c186eb0ba08ed92931d4f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERDAZXM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1K1lhHR6ubbY2vtOC0LsYiNZUclNib2FYXONPb7cXVAIgRUX5JBk6%2FyY9qnF5wsadehkUq5PLxoANiYdnGkStgpwqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNm%2FDQ8nW1wANK%2FmCrcAzJrWrz0acn0g6yw6BzX0eu1yRzLoth3EtwITSw%2BQPvb2zK0z9ikBOJkog9CSgtXKvVmPvhg7%2F35y%2FSGgnes9KLV4rq47g5hv8%2BFJlxiAQNP7cIOac3bGV8if4wxi9%2Fv0RiKpeuQvGsMfqhRRU0sLZN1BcHDSeV81sEh9I1j0qlfIRoTzxfHKkJzbK2cd%2F5wpyJqu9%2FdF1pRbdqibtM1m%2BkO3CCeHKbaujuXaHFpK8MQa96eMCAhhtejYOlYYH0HmQSv%2BRQvGiFOUWb4h8C2gZPGtKq2ypKh5pwiV8tlGVDfx1LZCxQIsvaY6wJ2MGXzoUlSQCy22s1kHewPd8uKXdxiuwdGqVbgBo8PVmZPvGDeDsFOB9BMm8D37KMCkB%2FEA%2BPWyS8Gkg1ZvRbXNjPFwu4yiGxXK3OsAzTwxCmDczpN6xq54MpTWES3y4%2B8ENE6Mbm0X1EKRnKo5%2FqcWyCD5onGGah4qKn1qM3TLm7%2FKZOEeew5t9OSdImkQ3tgv5oHglA7s9whGdi1iUu17v9egyw1kSsgAOUN3kme3yQxa6U%2F6x7UqKClC%2FReIwmG5LFrzRKXFRWfF2%2Ft%2Br67XSv9gNwP3aBu9PF2ww0FKfPksKyJe9Czu7flldQ8txY6MPaarMQGOqUBkVU2KtQ%2F7HLVIobjN3bWxMGg9b3Khfy9Awq7P%2FXWWvBqP0UaOatMWS7PaRT%2FyRoeTCJNDPwgbcCgNGT22EZ5hdh9ChB%2FHmpTMGCvYtltnzSwTdf%2BBgDE1FUpVScTVWAEVNZIxIdZwbce0yb5T%2BEPIw7mkJ2FjwTmOoLFamvUMkDRBPQa5GW1V5%2FqY08edX1PL3sEcEH%2FovEWR4DGaIHRt%2BvGLeKg&X-Amz-Signature=320a7fa6244b5c61be1959c87b8aaa91fc362cec1d49550f45dc41eccf1cc5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
