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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPNL4O3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrZr7oN3PfnvwA8DFwOfMgIGWJoS5s6GW5Y%2FfaaykpvAiEAkvBfNWcIbh8XDODlZdfy0c%2F9ymwKTMo7OUf%2BhAyqnhwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmmPh5Zep5PxJjQFyrcA6gw%2FCx7QCO0SqcxXPXwHwpJJjikFBML02iyttasgiq5ZRNB3EaQt1%2FA0oNkRuyKMpLepedHEQBvoD8SIFEeAWYYW0kFHlnnatR1rsd6k%2FNKSQaKd6o1PKdEJi0rGYVQUgfYAahOHV75oMns%2Fsk%2FwctmrWPsNvg%2BWOepBeAk40Eoumq8uhq3n5qFQkZONf%2BRzgCDyH7eLc%2B4asw9nsI%2B%2FJPVmjoootHOsDA%2FeJgVzuCmVRTLmHp6X%2BXej0uymzUWjb4r433UmaG%2BmxoF824eXSB%2F4KXvOSnW7m%2BFFO%2FHq0TyNf67owKApDcMuzkB00UbGZLCylMY6w5Zt12SnhZmVm5Z60FvOXBmuW2kmcyaGbiwYtWId5H6rU3u5rXKHEJtan7zOndDMGVwkqvU1t%2BWtmpQRaMVbcVIMmMCc%2FuVfmgB6S7B6vzm0lUoONfzHsZCT3Qu%2FfrBYrOdC7qAvbwxKB%2Fd1pzNfJzMV01AfFVydu9eWCTfovuWZiZsh158%2B85Z4bWoFTfxoRCNq%2FYg1pk0IwKvSRFeIUKxsiu4FRfc2OeQwwXZkFvFe3GeaulphX%2FU%2Fdr%2BRIAlpOJAudWinAXJM3xz%2FZbBOgX24HghXTlo8pJndhAFu5BoB9aCrHDpMJ%2B4rsQGOqUBCGP02qwyk%2BAy%2Fq1%2FQSIMXIpmBKEs7fHjAYbyHuN233ysq4lmCEV4wa%2B8zZwAtxGj6gaRxj7q5pyzHTJZvTxj%2Fl5MybhNpXKGsaDOdY7nyCx7lEHgv3zz0WKjkR0qNTP45tvx8hisN1X5C90%2By6Ga18Sl9MvfX66FcRcIFS%2Fee6EOFRDlInduF2MhMZ0Y3X3AUv54yoRHQNRuDb1Byb2JlnUgm1fG&X-Amz-Signature=72736c04073eda079e1198a188982e331d001da6ecc66fd9c852adc62e75b5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOIZNBE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr6km61fQfZwiKgVlDs0uLm8je6MxPY8%2FOLf3Dma5JowIhAPZaPYYmkKDNTZLWjd7nEqfY9MLYEjxLkFro6gKU3IamKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNpphOOHBSR0jiiEEq3AOYNfDAiSn5DBmGOpaEchEyjuyJIcFmJob2jTmz0gv%2FjWGBjX1EVZf27GZvyEWNv%2FOT%2Fhx4rSgysOOuNxLdGx%2BRBr0wEmzjlM93VopoqCaxNhTrDbRhA0HWMD3iZY0PbD6iayR9lmv%2Fyvwq%2BGqggRh9VxCyPep9g0x%2FfPeWfWoimZzCHeCvLBPVscl4%2BhUNYuC0erG5S05wv0q7R4%2F71g0Krkynp5PgI84UFCZi4Hs9ZkDdftmcZERnUMdTG80vhHa%2By3YHeLLxd6yqHr7tNyT%2FnoaWOLkma6K21wD%2Fo0PGCOfMjAZK9EI%2Byh%2FyV8GTgb%2BojW5eerDrMBKs8uqn36w10fCrWcl7j2KuFIFbAgqb%2BVJp3hWZFoo5acA6n216zQYHSxrZaaYaHjQEVliWWueeKpIE3L3HoLi6Wg5JOw5K7vacmS0fXpnq2BmPNuupi98JNi%2B2vDhiAg3MV9H3Erfy%2FldWc4CkCJ5yViSW9%2FNbsxJgUThaLiIjYpXzx%2BVICppB%2Frk6CSUW0bW9lrM0e4O3Y4%2BbMrzROFpft6Tnz3FMJ0k1PefUP2IAHJkGEITaA4Rigxmsz0DyFhKtFsGSL6pRCQbi2f3TsnraYBITZflCDPrD8UlaKZY6WG3RqDCouK7EBjqkAU1o0kmlfbG1zswEcnOk0Hz6RS6b%2BkyDC9O%2FfKD2CeOKNQc911K1k%2FczM6TeWoRcFv6Om5WHw0%2FSwBYVjNT0AXME%2B8bR167PtaG0sOihim6kFkrzLLc0ZkAwpfq075uJqUiUr23LoN4I5fwaHmiBy%2Fxa1QeVgF19bRnpQhAtijP9KCJt%2FdKMn5XPJNKqlyYCpT78eH3yNOd%2FPy%2BkddejhadpOw96&X-Amz-Signature=d774e6032abcf8a1270b1beefa7327d12b495d0ee4ee095a22a5a56230402218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
