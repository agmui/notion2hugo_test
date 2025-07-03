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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3ODGBU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEm2T%2Bw8GDGxLyNX9G6%2BI7YoCUOaQa12FczpeUrT1ZNcAiAhKM8RKKwthlw6vuKCAZeuMfdmbrRGJFs%2BsUs5TkmbrCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMy7JCcRApmF0My579KtwDeWTRYPukR2Bc13eiom9eO2JCwSZLUGErA5i2yJIYF34%2BaqJF%2Bt%2BmhxDJQxbj3vjFDbkkrwVDvwZRkzH8ZQWHC29V3AxliA1IOwjpjgrY%2BUj9ZfO8g7TPY0fxsXx9JrhuueVNvU%2FoFZOJy5dBzi84yjZJ8IeaKbwevn4GxdLpkd9EV6hbc5%2F1KE4JTe%2BVrZkPfQoK%2FsAr0kJJ67n4F2zKt8TDbD9dQDYWP3BOENeU4cZF5k80Leih6WRdsUfDSaiQULjS1T%2B%2BEv7wIoB4rvF%2BFtbV%2BzNyZy8SSe85v4uBSTq8Ph7Sau036W4celQn1G8f8UHc%2F3jrbONUzS8LKECm56lVAgGMJTJlo%2FPabuxiobu%2FujPPBhATVcDBlYlQckIbUf25E9h7f%2FAJKYh7eN896psKRd1E3JKOuG%2BnEBqloCgVBsqCHxtA9tgkiS2%2BkvMhfy9RdyQCtiTTlZkbPLbrS6g%2Bu%2Bv6Lkug3rcqpTOm%2BkIkhgBjobYz2YDj7gzkaJKFCK1BmeOCSEwNdI8xglQ0ocWwIidTuPwn8BWKvBZaFVB4Rp4cAM6cJ5JqVxh5oYdLqroe%2F%2FfQBo20EBwFNoHP7e4%2FgHr7vIWHg4kncXAwwqy8bPoZazsQp0nM0Lowj4mZwwY6pgEHouDrRm3gsgVe0AfJ3CXXi8%2Fwx3i43UN69yzjueSsMbGYZI2fk8vHtnNvcSr2%2BaPoIWbBJXEiK2zPiEQJZLaQVp%2BkSQ9ds8PLqLHqE2Ko8rpVrbVcKcnR%2FiWRFfJdPLsmQEb7WpncJpVyyqqFM%2BVdT0bVLYYo2TWRIZBjtQuBmQ%2FxqvcDZ0xnjkz%2F05RLpBCCvdblZABCmOsCIkWV3UvAiHNLMh15&X-Amz-Signature=da577c4ab2e45c6265a744288d2b03d93966fef495106daa9062a8cfb20fdd3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JIY32JE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDsAWGN4lvrdda2C2ZTNYtQVjCAsodIzwVXekMVomy5ogIgViU0mLU5on0kdxxEYkGdemBobKoqDxiR56bPHStHDUUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDL1rFo9Dd9vHcHdYHSrcA9xep3qJwhh8RycjLjB%2BL77fK8EWie5oGuxz3S2ow60DjFg6NVvrrpTdxjlvnA9DEYsZNMxnW637Ahh2%2BfY%2BPGegm0BF7nlaJIqBJvzPTbqcY13re5oVOQAmvdD8paicJLB0OTo3B0LgMzX3Z%2FBv9ydmqHP2vRVYJ6oQfXbfuKjsLM%2BJUV8Z%2BaPwpP67YKWt7B3KvjStMYB0Drezvb2kq3j03vtzaCK%2BvwDkStRROu6goH30nLH0TUp6f0oYbfaeMheTVk7292Zh9LU%2Biq1CtM3SZr1cio7Z5O%2BtgJz5oLTisHu7UsPIP1EGvFkhXhiJXjWVQAoh24EseFvrI3DoZmcFWt77zG5yXxVCvsrSz%2FMPO0SGhSRdVI6yXoNkYO%2FbznLkQAjaNLpQwdmTo4yY%2Fa0%2Fp382ZUe3HCZcjsxTUNGASjmV%2FiT75psBtm%2FTNSGB7Ed5IA2PcVkFpNJwCNCOO8mHgJmsrv13Cb5rzYv3KrzCdynf0g9%2BUTguWQ1yQ7PeGMC61A4BVN1jkBvY16uVfjh%2FteyJBzx0FxANJ9CQRSVSVgm4IgJy%2FORURlu3jEs2Y4pY7R%2BGvoR%2BDYgy5uTVvAY59d4g2H9WD57Hn3ONgW6IlwLxnIQWhUC97nEbMJqJmcMGOqUByzhChMC16%2F8FHHXKOVY2bw4%2BBYMXyqV0IW6pZwm3viLSDnVWgkRBB7nFFxHbGryHuEfAan%2FkFV5hoC%2FrLmtlOMM2JLykIZQZ77OLnzoJL%2BD5gKJ1QqUMaAWZvjkALyuZQaR5sXCbIiRMt7Uvzc8zujQAzdungQ0%2BJDZPMzg0Lg2DMMvW%2BXopEX08kFg1cZpPOeaigwenzuHJfXhsvV8FhMqIpr92&X-Amz-Signature=08d029cc90d7d8ff314f362996998acdb24fdef607b0574b6128431771715976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
