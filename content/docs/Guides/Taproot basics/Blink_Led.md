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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFMCCZ2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaHo2PG9KFK48nO7fRAR3kjGzaiIT2TQy6aS6TO6b%2F9wIhANLgbobH3Pw4VMzKiSgzyZnaeP92gJd2PHUAWvHQouVIKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU%2F3TfGj2L6zWU7cwq3AN9rkH0T3WULM6rGYiCEsPFEIOwwBBEfzFvP4%2FUtFUZmJhzJQwbGxpmwZ%2BUxcbnRopHJrRd%2FA8psgAm6lmRWjOwaDNXHSCeapSFoywNmW8Re%2B6H1ZqHa3XIKPyldA5f1YTPzG429xrKHPbRnsG8ctMOyWAIWxdNYPD5V9qOdjvAI%2FjOEO7J4Olg6fN9sdmoGfxR3LKq0fiq25oodTTN0Gtddf6KW3yQKrJcceCXCwzM0zKEJVFv05yWLDhcdI85Pz%2FLHqsmKG0M%2FaAk8DO1MUSZER6Itds862fmoDzLGwoH0hiCa7UOVGVy3JdLoJc8ejcJ5ySSfbizaCzjFAl2QL8Z28fED8civw2hMGRE7nqUYz3qWf168LGn3n3DEDdAO2Ha5W1KEYn2EO235H%2BFC8ixrBn43SrRLt0RHNlivbk4w%2BCSUQWIGm5DE9eig655T%2F%2BATJRZd9J6NrmHpoeB6ph5gWoQyLbzSbBzxJyPdYbCMOiq6vETXUV0uNVTEVI9OFikvaaRXJd9e7QUtDLVKt04tlzm2%2B8WDLMZlMpeRnVmWaH1NVlDNrHPAg%2F3LGMSWE2LI10%2BifK1I%2Bdb%2Fgb1fcuw0Ep6XScXwUqX7HbP57ATXWugFMBQnSxmhcE2GDCR3prCBjqkARCePQcW7TTNArrv8aTfT7jgaruIfiou2C4KCkDcPZXohSz0X280m2Cq%2BYi3P7lDFshgE%2FuvI4WmhNH2mM1pLkf6YfMJj024j9JEU3vvBtAtRQLloT%2B8lGNivNFl%2BnXA0TAnkhnaY9bgs7C1lpfLzFRorgzlH99x%2Ftel1kO0l8P9HMnXTKUswkwRJj%2B%2FBmXgnLVXJC5sCPwcW1QTBTCoTtlmi%2F7F&X-Amz-Signature=ce268899dfd445f335d73b1f15c72e7d2a0d4daeff8337dee4a416f75a7a1fca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBKFIXI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6nX32ZHDsS1ouRzRtaEoCUJRtlpv5G7EycDOkUeUmiAiBci0lfo8F%2BtKetBe98KfxYxEiUXn3WFH2RgyiP4NFRPCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq5MjMUo4HvVXn%2BtKtwDRtwzFFNidquX%2BUwIZoFv6Uq%2FNWU8doAeS1kMVOUWlbuuSXJZlMwCJxjDPAaNZNh9RB1nMY4CDOyI2JMZ20cxPsLX7f70mTop5ivArbVj7hVol7QepR6Lpg6jG8FzBFhyBUIbg%2BOzF44b90ssDB5oPuazR2VAUfSdS2W9oWXTIt0Hoaorv%2F7RmN8IQTVEbT2lqYF45028LsBrxTtnURsb5gcEptrlHYlcGNvBZdsc1RvCEVaMhnvGYqu0IZedwHbA1D8x9PVdlwWHu2SJEYY8xWkV9in3%2FP%2FRKG8%2BO2zdlKRf4z5p%2B8IzUIONc8%2Bk%2BkGbgBZgVnAfR%2F4hbAzHYsDscZxHyqrSzZucJMewiOSfMJAtMmqOtvKB3MFb3l9AuoJdgE9GpYKtubbybSRnJh%2FmOd4fHQsoWUbUhlYQWvGNXAKQbrjXYVXsiuiuNoTL%2FKEOnCbuVwVhSMzaQm9Ig4GRpgb70Y2%2Fppv77wfY%2FuVY6dI3mOzO0MVer%2B9W00J%2Boyps1OpPo%2B53f8bS8MpwjTlpUukUgb%2B4uqaxWwyaUDlENwpVqe1oa5J7ERDBFYc6X7KufCXlnUj%2BNyHAEchjo7qgRCgUAYU38y96UWWSmxVRvZnbJx3IxmmM4UPwLuUwit6awgY6pgF5oB26vJ0ka2asW2Mwrw3wNfsXIjB1QH%2F8fL%2FvxpLvULad4zssiww9g2hBDKrIcE%2FdHJMWL8wZvN40HLw8sDUzHWXLW2fuUCAXFDvwuPYlOYA%2FRoIkQ3aYZoknUq2tVvesVcjUQ8zNy1TLdZMVePGRMTPjH6baSe%2FD5bsjKr55qkxM7cxZUVFIreNRYEdYkKNFsl5gYUyGCTSDCFRONhbRe%2BOoly4b&X-Amz-Signature=a77d5718d37c0f3b132337dcbd0c22ba54edb50743f91aa6b9658dc5491cbb52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
