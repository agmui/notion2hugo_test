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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC22AFL4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEpk%2BnKjtZoBBMiF6u3vFXr5j5a2EOyfQlZuWEOvl3pcAiBmT%2F9tj9c1JdwlrQdnNXgnRqDPB%2B4FpWkO7ruoF1NfPir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMYJmwIM15LX4jgnUNKtwDPWhqLf6xSNyRYVdu85BPnu2um%2FNICBMm%2F0P5XmvUvGhrC8H2F4dK3amIhu4VPCFsA195xx58cHyxQS1rrLqROtyVUT4JpJ%2B7dCgfyDuQ6EEWvrNGXjj9jWroJNCJNt%2BkSoRzuD40xnYnXjz5ZbbcD%2FWJR8jVBDtdSw6w0dwGkMB8tHmKG1sCmxxRr%2BCtxhj4UDYWtXETT4FjGhcHC4eMuj%2F6KfmbZMWn0uDkhV39jSH9LwYVK%2FPUNI8G1813pfi6%2BL0wCltjCmDmbg6%2Byckj%2BNggF4puxktuJe8sbjmCBG8xVaXV9AcHh6GvHq9oBoZR9DIVYIceNa2RXWmNLuat5w7xXMOnkK5wPfhTHp91dQVfxtS%2B%2FQk6dPcDXWon0UNhJKc%2B184F3%2FKoIeH1c5Yts%2FehX78e%2FBHsycxDrAZ5AAftwiJBALuSCTSaZFulHwIgF18gOkWCCrPZk%2BDmhumGWBs1CQ2qeKtYvTHkt45PxF7yEf0xVWKbWVZJGTn8oIbSyZyijM9A4vh8%2BSjnWSc6Ocpzpvy6Perxk5iAKfUPfndosGrsJ%2F6J%2FormPwo7Rn0nVGBb%2BPd5BIriJah3Ry9xBY5qLv7a5OvYG7pLqtTnWriSsSRvR%2Bw7FJFKZ%2FYw2uCswwY6pgEtiBgWDM0ry3sJ%2BX7BYKZNLVkhuSCC7ljyBebU6oCHG0jBkHgYV425vtpWjc2O4qGK%2B6TmL9bzK2AwRTVsE%2FcaopqzZLeKgERdMPZVFoLLQMg03K7zPMPcq8QLKbqqLy5nrMr0rS2cP0XwWZCD52BOwB0ieCHk1MgU%2BXfMWmnV0tuzLaCCWuDJMnqpfILLXnBHYxeMHJv2HosG0dBMYPaHlR82odXt&X-Amz-Signature=06594328b1660253094764928722aaaa8bfe764068478159529127da92cbdd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5IKDW6I%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCID2Z5gRbjS2Gqt6FAkBNj%2FvV3DVBM0oxuNeKCul77R66AiA5k8mlFihXbHAN8y1yaA2y8z8we2XP2ZQokyF0iV2lJSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMi16s4Cw1gfe889G0KtwDW4QjrhySXsQzptkH2%2F9eRHdKHHD6gmuGaPLwRNa%2Bd1Kqnp558nH2SK3Tzoe65gNTlDZoeJ7C4UyIC9LHMi%2F%2Fn72AzBn2uKCs4kK0O67dQuFp2%2BBaKaWpMLCge3keLtdYhjb1dxST9gZVsrobVBJLz6TVRHw16r4gG9oVPRvx9zHqOJTMHKYWb4HKEiPP6arKxenEHCZld2E6xlq6EsXCQ9APX375uMrIuWS1yzKr4Uvxo49mQZn%2BvOzhhLOJBQRkGzztDoDdT8Lt7oyI4D2DkjrjGx8M7fnQWg962yWkfZaxIexBVf8Nq%2FF3wp8w6EiJWGg11PUSGgYk6Nmww8ABf3xYgdGfXu55sHtGfNUGg7VnoxKB1gpNQbYAq9MlQZmWVC4cDN5yS5nRKeuvFhHVhSj08wttVuN4cEhOmExGMwTKiUDvOrnkuaf0hs5dFabb1Xc4AR2cWCVKtFbBEzHRxYNBtRRrk4qPO9j6NFJc9L4TCxj%2Bv%2Fbpo3k3BoSRaafKw%2Be5JqbHibyIrX9hXUN1uQSAFhBmFOBQSVikDTqkzisnpUigoX%2BvLAo1uKBOoUhd1uGgTBy1scGn3cve9l2EfQDvWs6euEgvaPbWIczT1H43sukAjWTBfrZFMgYwnqitwwY6pgEMyNGE6uukC1JA%2BMlHlP35IqYnqajkFQOVJDAZNrlUNmDJqs0zPw3LGMkP%2BqpHvR4OWZ5l4PN%2F%2F4eh4dipRit2ApxebmdY59rP4RjU5rJD2b9XKPbQA97gHISqwKkC0xZJuHtiVpsXvrBTeN5n6Kgyk0cNujCRVYwIAGVK8xVCW9RC6CfjFqElcrs5yWdCmlgxo22nrurFFBUqAkenTGZk9jY5bksL&X-Amz-Signature=e485de985f42e17ad0df224642b916657462c35f251f3bfa58c10f1154e2566a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
