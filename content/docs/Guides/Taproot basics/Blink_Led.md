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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6T7GMRI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDIV5He%2B3Ia65bYlQGXwpzlg2A4v9ZlLLhIG9r0J6FRpwIgL6jb4j5qWQkSpa3%2FUSS5dC8zg7GLJFdsuD4qQhj1K4MqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSCtE6u%2BSwxr%2B25SSrcA00PFjN9ekFB8QjxfgIIV4%2FqKaFkVjWBQYZJsGUQvu4nkpZKpd2iN1jcyCi9ChKl5OfazwqnOt4MZYngbqB7cHPSWdYjpMv9oqQ1zDu6akFSn4p%2BED0tHm%2BZEqWgAysPdNQc829lc%2FaJekM0NLK7sUUMgySuR93Cz5WYonyvRnUBPah73n%2Fhh9MnP6MPErdBbuLhft5R14rIpZhf6afubB%2BFacT8kF4r6uBxJ5G76gtjEMAlAWAEijq6S9dbrHE8gKoP8n5t%2F3tAPpa76rwswEHkxOj1uNTzsYu80v3UWHhK1o9yMNPvogzxwfJF2R%2BhU5hMia9SJEqMHZ3WL7gDeW4kbj0%2Bh5yucjz3By9Cp1R87Un7uUN5E9Q0r0h3NezNJhSYuWqLgPP%2Bc0JaeeBfuA%2FfeKLsaCUU21PNH4AvRPnEQbfNuTLz1FdA5wcenOhgk5HO6TdHEPGhf9ZCDURJc8z7YtTtg3mXa5nvu42ZiKNbxH3OVQpjy8n1S6mw%2BDsgIviiLOhiGHneZTNyPNtGGIVo3PtLKG35Sso%2FnKrCj065uvBTMN8WzuY%2FrKHmZ0fQ7DiDBtgzr5i%2BaiiRdpao7s%2FmuiFhkkSHiWNtfOWntc2bZ7835GwSvFZ%2BSuFSMNfD8sUGOqUBUJS%2FMTfonSC3WpIRw2gBxpXajyt8V%2BAVbzb5dEjTXeAnY7OCUAzf8MA5G08MwMs1kGZFlKtRL6Sya4OMBmGH%2FAofe9GyIqOkJCkX4RTJC%2FPBzX2bpNqJFk6nsdurHOXTD8a%2FuNbBJPT60vcXotzzsjnwh6EYf7DTYI3Ths81k0hco8JsZ%2Fvj%2BOVSvfgo2UBfjCDk3OfF2R5UTvMCfgb8ThNFDSVY&X-Amz-Signature=40165ce2e326d348e1626e90d21099d33c5519c4435631434de85082fb974ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7PX6FOA%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBzuPRiH%2BMvWTzagIpSouKFmDoP95t9BHXn%2FrHiFdQDwAiB1eZntECXyKGwHX2CZaZvLj4Kae5JMM91QeP7M99v7cCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Byxhmcl3sASmZ%2FxxKtwD%2FUY4R6msgIlpMbuVVDFHKA2AOggJxsBdq5INIzvn7NQnOpwUNYwsL7FPdvqXmx%2BfB5vmzKjuwDIqaDILCCqB2JarGyISkjVpA9b%2FKQiujcbPxNoRaEt9M7MyoARQcrLIg2%2FP6ei691blFexv8c39WOE7v6v0AYNSRNtjX2PedlkI5QuuD4%2BEWoLXnbB3csrh2zuiCxcFFlWaBmWzhaXK0rb90kRIviwoCRJr29%2B1IjdHZYWnFkTUm1eQ3GOFjY4KGI9v%2BZtKQSW5p9apwerZr9HbU78FVSiwUL5qU707CZUCaVMF%2FssTrIPP4M6BpwoPRzXmOxLB9T1IymC7Sugz%2FjUu3uh0Xh4h8pf%2Bvkfkd8qE5Kf%2FPyP%2FiQCw1hn%2B%2BhuXOV9Ly2sfD11tlDfCS1GV1Pw1MhSt9c0D3%2B1XCdyTRisRfgBE5ZH6jPSXlRJNYkysZ%2BssrFBbYCCOjzPsFjz6T5XUGiI8c6UMbHWWETJrdhr0sctKx24azxDxGCMCcEaonUOiawjD8gQpYi4R5p%2FmaTS0kJfp8kg1I0ANVm%2FoczcQHzTsirnRFQEkhjHwQnr7xHKDxHolkajP%2FMUbmKep7lnd%2FvGuDiVhEMMbunUc%2Fyz1rvTUqxeCIVy5TFww1MPyxQY6pgHqqIBWALRfOcvR4JGNAoUDICHf5p9baOqDQN7ttHDZFT8W9uVTxZX%2FjDbAtfDJdhzvl%2FXc1Ndsk4QZZnQ7ZThBDnsp03tRN9b5Kh2oG0pfYA%2Bdr5W50WXuKPXyJAglYfY0aSdEFZ%2BbHh0Hd6xWQ%2Bc1iNDdKCSqveNjp7U%2BkG9iwslk6HwougPEBkJdEaYgaePfFtWqHdmlN%2FRQjXScTmk%2BAo%2F3ObFw&X-Amz-Signature=ac31c6928ac347e57208fac5d62ee52ed1e7f2b1c924eba20fa10c8a3cb016b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
