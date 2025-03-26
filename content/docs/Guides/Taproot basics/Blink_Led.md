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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNMCVWN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtP1h8IxXY7FqBM1XmHRg9ZtOBE33aWPIexHAne2gbmAiEAiT5XY1LGtFNKRIHen%2Fzak6jpB17TvLpS6yC0C2vEZy0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLJbwwJaNhEOnGsjsCrcA7Z7jEc8n5NS2NjiNz6MkrmAsTEIQlCwyeTFG57zX%2Bn0c7IWmfeWsi9VWRbw5qMF69PxTvHYv%2FvuQfX56sDZMaIDZEQNqfxKH70a9WP0b3FBytdkFFVaBs2W6cwUPwXNVYo0GuZOYUJGHab4C0hqEc4zptFLT3IvR31MVmPKlqhQk6WXj8xaUNYRTW1yyUVIAZeU6gGJ72mMJ5%2BDJE99Ow9VrzC3u8WDcu7EWnUNX%2FtnQf3HU2eLl8mZJXhS6oEmpziCvx0%2FmMnCBDVZ7JnXRB519A7OgcKsYBLJAMpJdETIM9ZfgfrtANJAOdnVHs4KzimI3l0pHumLXmx8tAZ0v%2BURuuAdFf3wz%2Fd1A6o%2FC3KW2X6pAyDmfbf05mY3opA1UHFciIyoOUajRCYlo2MBsXTYciIoSCFxX5qr9MXaOLzZw%2BygscOUAvhPwsHINrDDO0WLK%2B4WJAPdZ80NnAcESea9IB%2BBRhloHyLmSaJhy6%2FWFrZHYd8UB0zbLw%2B8aHyHzlFqsPDPmwWBNoysiWmQJdDlYihOEnFMvr%2FrwKcCOjrm3PVM2I1LM%2ByUCWhQG%2FKZVMXMIvMant79VoZEyA1I9EZ8j%2FppIyR2ppym%2BnLhadRB0biDSS302rhSsq3oMNmmj78GOqUBqNrQgvWVd2vpWh5N7lNE69blRCNYWNnH4iXMFxjsfIpeec4VanUgq%2BhKLRRdxwDY7jFJYpBhkyvQX6j5Ey%2FxKV9Ld2VGvcmKUmRv9W0X%2F7emubSmb5U%2B%2ByN1po0WCje%2B5MYldKi7vKSD8ROmCH55WEDvcYgSlWZomLxoL1vSVlu9OoZbljP5Iy9982wvsPZlJ5F3aIcT8YRS2aP7VjkQZdD9L%2BPh&X-Amz-Signature=8dc3235f989873355cb6b3a8a2cf7e8e784ca28fa1ef3521df3c3a5a9fc2ec3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LFBLQ5R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8kc2E3HFfB0C2Da1Ep5jjMCTT2Sw%2BTGBbUQ%2BRLa0GVAiEA9llHnr72vSEJsg0%2BnTCQfC7Okxwp8Q9EMjMyKAXBHGIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKy%2BD84TWIwp0CYqYCrcAyKSut2oyG2dcHSMqFzCtadQezsWGZJT6paqJi4i%2FgzIzdBTtt3L18O3IzCmWif7OaJvef8MnfS2OVTAw%2BUwc0S5PvuIImTRr25GPqMHDbAxKNsBfs5h8%2BCZs5w3q2mQEOokwmqsR3T32ZiTn%2Fjg8RrhLre%2Ft9fLMkT1rDDmUbKCQSmRZ7upBlTdAi0IloluO9PX57BmFRJ2PQLPw1VQnBiBdwfczp3io63UNPWDtGyX4h9190ZJAswJbf8Mz%2Bu88sROC80jOnAGOcBMpB9bO5qhfXuLR8uhrXv8%2BEqUH0kcBO%2F92cqmcvjTCvUkJYL48bLxQ1nNNI0gF%2FElyjsLlYzCiYhCMsXOLS7P7%2BwqYfAtSoyoPanDBKiVEbOOfpf0MNb%2Bq8Z018lpFILymcck%2BAV5xb1eW7jOU1OY5SiQokCJYjZICiop%2BVsiEtuyR8fSDVNr0JIcpW7b72di2eqCxiZT1Tbti7%2FowCkr634Q3A46Eef8w%2BO20ndz2mtXM7yp5cv%2BDRvyePXjRfa4krxZupZkklzzEqXMwTImpD9shYJnQ%2FlH5HRRrZ2hWjs7vAGbgDfq1DmPhHxuOFpwvAS5XMoNC3Z5ic7LqfgijuqI%2F6PDfXwQ918pQpc%2FRZrcMMemj78GOqUB3OrEPSJDaKEdPR5VqgX%2FU85lfkYPJ4Lae78JYXq%2B%2F5kDlo56m1B9GE6K4mzpa5rlALs18dmLo9LoDfvPRW056UFuVjEPw1kKraaMIpM%2BV0f4UFIK9vwjuQJ81xmOkzk8uCt76VZ%2Bs6uc8XRclOeYO92eygXJmQztwBOyZdp71Xkus9aGcjegXdd4bd63WHJ%2FWbFLoPCeLvRuKMhOlB1onQjfKh0I&X-Amz-Signature=5bd82c0573a62a207db133bfbee25693789a414077b9528a8ec19ad44c041db2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
