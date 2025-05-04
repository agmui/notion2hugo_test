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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Q5JFK2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIE8nlWZTBQ6%2F6mYrIlyFFHDcYBjOmaU5VCJKTFSY2S0sAiEAwTGr3UbzDQ9Swp4UtfdUcwk9p%2BntecGFFf6My0cOHCoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITkcz6cpiREqr%2FWYircA1AWOeX5OyFxl8pT5xEfunDz3pKEFzMIY8Pmc27TM0Tkf0dpXxYeQvMroJG6UnfJGEFN%2BxOiHLrA3IUKvzozAYKUUfB8dutiTpWzpjMwLxA%2BBoQwKLedSpMdfwOtochK96DomRucVckLqAIg95XlOfkTiINklaTJjX%2FrzetVNhps2jZfDgHVqCKUa7mKJQQSoQ34FdlKkyYv5Oyoj0WAnM%2FA8AS1SC4ZJlj5%2BEEmvh2fLJvP9g%2BxuTEkNU5d5xcGiZ0F0X5HJnKq6jDgr1CVGGafN3ioOJcLnoCSu%2B55%2BTWn04CfQfppPxonFMD6jQRKzDnidheJ7Mt00eQSRt7kd9y7MnkdIsJl8HyZmProYMMf0UG9Uo3M%2FCzj7v4tb%2B6r6bgPNN5mYpPN97RmMaK%2F%2BrY0HSN6eyPrHpzJMzmkcqXiQxXP9PxnVgh8vzdOHAbKYVdo%2B4mfqe96Q1UAQvVz8edP40NGopJP5ZU31hBGezFy8t%2F%2FhaRVWzv8U%2FvKeOVnafZrotj3sMrfEAULBdnfj0t0B0JBZg6CK9E%2FvB8oj1cB0b57mCOXAQEB6NoU9mJA9r59x0z12eKEQjBO%2FYxac9Qj75bAghjzHHu2tndWDl6kQw8MV0g3kcaVPSA9MIXr28AGOqUB8hW1nFokXF1dqj%2FlgHRP02tjx7Q86QubVqj1wdWjwJE%2FIoEs14e2pNn%2BmHD9rvGYjNX7BpAbRaVjlGzMTPWe%2B%2FerFbiJ96otJWZLoRjB89q5O3bvHsyabZmZqqKUHXUakOTp3Fo18gYeGr6uOaoGOdyyu3JxXw99v2GQnN%2BZ9U4NDTeqfwTQXlSm3Aj84p7YkM7jviDj7wtaVlNld%2B3o3OXpI0pv&X-Amz-Signature=4ef5a3e5c562590b85af49ffaeeeb5c198972cf5d44735b2841eb32b8d88df40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YI2WSAC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDxbxAB2iDDYBlrRp3q2bYIW9ySp0MXznWvhMhe%2FsfWAAiEA858qJcyj7gPgSDwUYL8ZzAatZFJ%2B9R9O27KPdSMTERYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOW6wIA%2B4qtWPlul9ircAxseHDqv4vkclV5nz8Y1W0Jmp10mFiMuqXBeta7jrtHoL0cupck1WCZEbUjTeZIyotiGwKZnZN9%2Brv6TpUGfVPr1TV3tQQlDVDvuIiaW84ygVTZLAZbqY3qEEeSxDWhhe2GCuMJF5q83ORNXMzPdMzc8LEibHgmhJgEEhu2qHtMOvuZRIAGYeCq5N8FJG4khuHE3%2FHVmYTpPezKEBoZNSFA%2BXwR14M9MpUPXLhFh3iFXu7tctl6HpBCWufDcfFrKCgTDjkurgH%2FPXFEUQFBaf3JxA%2FcxzA%2B7zcyxQZAZITZURna2eCyFF%2F0%2F3ZZ%2BSh8CPWs%2B%2Fbq87pCEbldxsnS22YqgA16A%2BHtW75mDM17LAre3JhK3jfMEeBCTOHfU6Fa0IfcfOP2PYjceNLfU%2FeMZYhHobQrPqNxVSWKTEbdVes%2Fwajkn96h4sf9jbcKGEsVbVVzwVY7qv7FuF%2BtSeAioePm6ZcY4yzyOf96zvJPSeKuIdGXVJCHhTkGoc%2F7Zj%2BAMGvXdMOTElLTnS2XUWExZPwWmtyr9HxkdY3XKhHhug2EglKQ6OZunbMiwMNelNMERNlDetSSIMPt29YQzRge3BnsVxq97Y9tP7idVH98y2kRd%2BwKGUxSl7LI1aY8MMLDr28AGOqUBVoBZHUbOO18NbaU2aT75HrA8sudWxpRjVgWDopssCL5tSRL5OoP33UTrNTW9jU4Dc6NQfjbeAfpZBJKoOk1o9mSMJnDITrMzkLhESGdq7FnluCD8ntEcMa%2Fw7qcYAyiRzp3hWujDTuw4g3BtWXt8AySbXT6OtCqtIpqnGH%2FgzgrfellS41po8Qv1h%2BwmcNfxBi6Uq3fldOgl0hFbdFosTwbr9ilx&X-Amz-Signature=fcdb4425246ad5d575ffed648a1b3056c945118f4abae6b8f7b1fc06ac2d445d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
