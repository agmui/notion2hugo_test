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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKAQAKA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuxYu6ipSoznl71UzhSmThQSq4TdIk%2B7wzyWxkMDVHrAIgUJc46X97Vu6xNGYzDuPAXTCW0Ysmrq4mWmHAkgB5qZ4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPndbTzf3WvKSMTqDyrcAzE2z0IycGA4n5%2FDDv4j6IMe5v%2FzPvVNrCcFehSuzJ8jjwQhlKmutJJfDY798ZW7QjfjzHreIQFdtEwfhITHYtB38UHFX6fXrM3fKOpOMDNVvVTr6In%2FbH%2Fqtn8TLgt828IaaUPYgxsGwfpktHcT5VDeHARgIaHE0L7FGPuumRPBGRBzV3hOK2D7Ku1iQaot2QZdqs6LodVjZl3uiMrfY5t48pz5%2FQNXhZL32TJU%2BtKWoKxu13mSyz2enoHWfk3%2FLsWcP0pjdXpy2iGeGDZ9XMDa4JMYW5es1TwuF5XWR2T5s06CM%2BQapGI0I329TzU0gysc1DH3EqX5wbUxBBi3kQVf1l4fsd5IV1w58sV8aBJygnlcdAZ67%2BsCl1FrjNcnrKqJ7Je3%2FLo1%2BM0iYGCJxURsgxQptbFBSbV3BfhTyMdjZUukAcitOeG1bO1seUfBcq4GfduTg4zWxD5rt%2F0yGYatTv6m4z40bvgYI6f50qwIFDX%2BqC%2FG%2FlfLhtmaOeUifLhbgfTuTzoUiMZ0MWbpqAUzsZ95i3am5wFDMEc0XVtb9hORR3hhJpA6jGmPgqRnssgnx%2FoB%2B0qAf8dgVtRCJfbIQhhl%2F9CgXcYyRcRslc3119mzVFklDccx7dM4MKea8LwGOqUBuHr%2BhU%2BHCEPd12fo2gYmxAs1tEoffWowVe%2BHoPFYpbWtfMkUyfDbAnJEHYmL3sCB0W1PzJC0U8q6OiGVrLJZt%2B2%2BAEUtHMxodfC2xjyuNIEG9NQ7iEjiFLJX6eIHcZW9znb%2FHrfk7C69DS3%2B7rfRwJm39DFYB2N%2FOe57OdQoRfwWEpB%2BEHxZUwFRdEuJ%2BAOObB4CMiPMizpz3FbThXUVXKURCRCQ&X-Amz-Signature=55f07b206aaa2563ad185e306fb0b580e7ae125f125afb10da48a9001dd110a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNH2YGL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6QjM6m7AN%2BIzyZhE8IeRQQsW9mByUYk%2B6PGnW6D1ZiAiBrDCeEnKMUS1JAK6911bYYXFu5tkzGn6CrnRpmVAT%2B7SqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTSo%2F%2BDNGp0j5h%2FPKtwDYogBXJeH6xIjYRI%2Bs7HPkFi2g1omgHrvFtr32O1%2B9gnnRqfw2s3Yg1QPJdroyrxUxxRhhGD5nFG1eJzu5%2FrqdfUbta0y3H%2FClwaGJShKNH9snkyzbNi0wxDXr6%2BPJo1RXRlq0dt0shJK2g03m9i20b2AvC6t6t%2F0GuJlHpH2dhVPyFmO1hl1NZ%2BR6VqyOBwNQcWEv4xrsI%2B%2Be6zqm0dicF%2BOhZemBg%2F%2BovGE4nBTEnj3lP6zVuHKApmd7iNQndrWNqLwsBkdsHAQCZOZCTgexBOMABm4amOUi3ippe6wbSGLM4os950RFkiTgzMelWZVNwVhTPz3%2BarEwIjqoq5WKrYEbLfIVH%2BiEGZKRS%2BHfvDQe4TatNlbxklHSwfm%2F8AkihxxszIW8MPRVtNQvoaogdq5OCZqLX1Fk3yIZ7%2FDPPjJjdWm2217j86HixoEAEB6Nod4HkfqNljDS6j2aFUMPkwzXelt2gozoyqxt8ZFtPSHE5VhDKS9Ftu%2FYCJWoxaGaz7MnuXtqgrkdrJjIbLQgEdaY3lSh5%2FZgo5owIwFxhkblcWWKRAnizq4QCDkQyoMZDsXjuy5qJTC9fjmA7Nab0cganmat1flH1sZyQAliiYztNfeMv0fxZ2vmUsw8pnwvAY6pgG8UV0ghkMNQ9fH9cklcnvc9icA91f0zTDS2e6eUrPPrLV0H7p9jd1xxwQ60%2FHIdLaH%2By5dBpqcD05ZF4nT8N%2BEvt%2BCjdeiLJJhXGknzuaIn5IlCrx%2FLGMfIynKWzwhtCg7Au4sretJSeihuYRkySX9SlxDSq6aS%2BzxevVoiDH0F0eYvHGSZM7JZnSDcPRqxVA%2FR96krztQ%2BoFex3%2FrjMm6Q8BuAMNu&X-Amz-Signature=2d550f5b1cddf2c3c40d44cfe84bdeec00e1473b0cc44e9bd2e853cab435baea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
