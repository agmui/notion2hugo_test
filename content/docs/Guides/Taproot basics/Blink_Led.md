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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FXDGINQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAe5A6EeeAKyyp6%2B%2FhD33mAUInsMrl4%2BDuOUXaWc7mI8AiAn1o1XdlsyHd6ADhoSHHSEPTovxKU8D1FSUmeO1lmZMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXCKuwkKyPpAQaPa%2BKtwDYm3mI5ZhyiNiEer7j4OjQOxZhMHtF%2BhCvpMOL1VzDTtzKFCTuThdBwLMO6qqnE7uodcOTZwQRdSb9GYj0T61hgFhgjpEJXd0xaEknnBWqMu6NPBb68pYGq86HGmOfZXyaAOwjJa3%2BkUxQW8ox5jzqtw793HeFp3e4DRpjvNDK7Ag4Ukaim13Mh4EQZTuOQvz81bSSsH0tjKap%2Bx%2FH3FENQra43HRs0zO24Mp%2FmyQ8fMfSUdoiNm7JsKJs3thA3%2FSB2kUo%2BIrXsUPMrJk0vZPsB9ZixRGVH8IpPMrKSOkZUWMumuix%2FMvZ78MyZn11OUOE4QNazNCpQFLb7W2vT%2BFZFCeBO5jdhwRoVyfHsM1SpRUoJNyvgCxzkD4NeRzd4qjZeF09GOL%2FCthDN7re1NZUqaxg5SU6GzUge5BMR%2BTLVEN7XWypiiayu4cpfcALAOAXPyk80F14cCBCDQmQBM2YvlsYfwLBWthHNen4TaWr%2B9R0PAzek52g4V%2FqxHuXrkOBcUJRixdyX0t0rPJ%2FM9G%2BRsyXtJK%2B%2FIKmX2kYBj5uzmXMg1cnGBmdkwsrHECmY%2Fn2QicBYxYqThMeHBbBnuEs5l7qbCbhkrT1hcEiiEMCaHE%2BYVci0ts6Y8NCzEwlf3nwwY6pgHd%2Fqdvoqv5veN8XzF74jvGn6qgyi8RUJPbvxWvmjN2luzrXbry9kqkcqF7YIHnapVH8eNXjkNjBHUsGOVg9%2BcZVRPaAn8mj5MSSI82u2UUE7lJQMRvvXdQL6ee9rAxOHJ2i9ncRO5KxVXzWmVxJwF2wD5oXyENKOmrO0Uca87l4Uhv0ZX7awyX6lHfncHXC3jQXQPCkCqdK7160KKZ2cobWV%2BxrY4h&X-Amz-Signature=bf3095e2add3a90a5546908983fdfad1e4a1a5861aa39eae7078348d94cd55bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRY4AJF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDEJZWdpDa3mSmYTbqQ0bQEdJ2oRCNsWmH3fNqEnlT05AIgNJl4%2FdfhmfaiBDMVT9MkSSGNDcDyLfQf0Ht%2BFKE9FfUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoRNa5NVPDhm3SfMyrcA7oJ%2FcTQ4kFmsRNWjilY%2By4q6%2F2W2rjIM%2F69A7xCNxLn9ZozSqaQm%2BVDQeLyJibYJhXZcySVUpt0BmRnaRuTni3sGED%2F5PBoC7p8E3OTJBa1%2FuT%2FqlkjLaFgTo1nv%2B5rv%2Fyy83CzNYPRrwADdgQ%2FjAVLO5deYgSu7D3bD7Sf%2BXgvxbT1XmuxYz89PgEkjkwoEmqLdiz%2Bef8yCWqxXa51sLLdkgT2S1CkLy4njWIZeq2g%2B63lFFgu%2BXXrl4FC4qD2dX%2FEYJcSTeECjYU6WcZFsAajBGRpyDFG53NaNw35iJMDEEf%2BkF0Kj9q8ZRg69sN5YUNsJ2qCmdabrmOvL%2BjMgODHpeIZeD6p9ZPKD%2FMbbXT4C9H3RithQ2VrPULAQG9jzPBPAwLkQf3MIBMH4V8gk7l6zZ6X29u9jw0RL09IOHLnagrZLP3HxtoFHJd2HXcEOJZS0IqeytK%2B2VqGtz%2FTTebu0kOuOg3TI8nj85FYi%2FeGxM6psQapH09lBLkbu2Zk8Zxw8h61eE4rDPN3VRnmAUumsKZfaAe9GEYL5UngcHgODK1mngVIXHhY8i%2BsDneJk9gsQ5g0a2WvHs4eaUM7rePb0PZNHi5OcSeXZiN5lqqwmLEVB%2FPPOzOL%2BzrPML%2F958MGOqUB9IDeCDt5W1sX9K2jTS4cwYrm6DcTU8kl4bk0iw%2Fx230bz4miJ7NbfIkKb7VyrJ%2FQoFIK2wIgD0mqDvU2ifBjyMXLpIf6ETrfjY6uACzQdxlwaJuY9SgVAuBc9TnshyzdfcjmLFRDaWak5DcmUF%2BpvJQLdluz0s%2FqpAyGLo8YZssuwTT2l6avLzFlLZSyZJll3Nu%2Bg6fHY9JWMfeaWtxMxL11h2vZ&X-Amz-Signature=c1411116a93c027a645e61db026d42304979e6e8273bb1f49325ac2e8a232727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
