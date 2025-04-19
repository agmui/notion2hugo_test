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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N57BPSU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFcb6Dos8Xzcx2r5nn474slWWwq5umGWgBC4Fawe3aXwAiEAjfoTNyVw8DRJzhZ9775MnJUKs%2Fqu1jyXMpAsE9TYH8cqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjoT%2BM7XPu6a4werSrcA4pb0hhafkoaC0%2BeycFJ23YEQvOye2bbB0i%2F%2FS0gewuUuH9UbLI5n%2FeeOyh%2FpZjk3qbh2ABaVstYnNRPpFiSXdvMgzv84ponqKuSfw2P%2Bu8XPxQIn%2Fx%2B2e5jDCwS2ieP%2BFG1ocgd7BQ4yh5Oe2hgm%2F76VkRpfx8ogIz0UJjgkKsWthViukm1OPj8jBKTn6GI5NG71EQXmBC%2FqFbYI0QszyTUOjE9hsxO73%2F%2FRcSngC8nTDBrANi3UFnxVwDZ0nldm5oS0E1U%2BY%2Ff71bbXlDCxemtFh6ygQs5uCRE%2FMbc%2B%2FftD%2B1eSAVRYmR1bNEqgAs4SNxV%2FQtWmDx3n8jR56KEVEZVhImmcq01GGUGg%2BgO%2F1XnyjfjbHHHz4koyLfWL7VaX7az5%2Fss5YDvqiBKXpQZc3qxXct6FqAV3mHbp%2F3ExCvF2WpPjfr%2BCIE6pkcBqf1pAs7z5CXTVEHJTCplfZ25w8vbXjcbLOJGxJ7llK6%2BSTKCuTHAizl9EUSZHUlSehbKxPsNASYeq5rWRRPbcxNE%2FjGWW88pRJQJeyP%2Fq8%2BKKBa9TSDLHfhuBo%2BYQOl4eKAgyn5Zq82MutejDzuYnVhP0EFQA3CeuBD6ubMKW3vwosMjfIMqoVo2Z%2F1tgbInMKT%2FjcAGOqUBgNaXNOu%2BNVnf1PNdmnHfHOehNjx0Uk21%2F5Q3gmBG5SYwacfzP6TKODJZXQjVfv6HyfbHngueszUUCMjxI1c3XpKSlUmg5%2Bk6389squ9PrU0tvX9L4w9SKkhNx3WvWPZgjumbzprgoPSdYCYFpA4Ay5UbUwaLoFb4KcsO9V75iM8H6nGQZAGjyY2eFdlL%2BxZShAUkecjigsbLJniOv8jqdpagBPe%2B&X-Amz-Signature=9a5b31cf13f6d3d51ff6c978d88398636d6c325a6c644c0f71f0bc75869ec487&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X734MEXT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCrBogy0gKj3cSH1%2BIxWE9lCUsOHWJDOuDRMuTx2VblQQIgHwlMOvQxD2PO0i%2FyAicYCVW6x%2B5UWCaW13652CuavRMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn1Pzk9tYO%2BTNfRqSrcAwg%2FFx%2F0es%2FVEwtl9MfDfyCSFVkZMNKlrBWeOnxow9%2FWH68FihGBzwybV7SXKv7dirTra8wAp%2B6%2F2E7oe0MckzqZJ5U4oAiFWfpMi%2BtTDeMJWu1YL%2BHGac2AuZg9968k7o3a%2BxxnXxng9hFxDd%2FLYpI7IPEsQCBmQJsV4%2BBhMT%2BU7sZynrjFm4I1iVX%2FHCltNVJo9OanTzSEtiZ%2B2LEPC5PfXqhWv6PL1DIUqd1pWopw2DnRvxsHToMm9%2FO02wAlCjpDxkczbEy84BMGNX0tBZYvuH8L7CYARwRGArr2n2CZXJcFBdhnXqb7expaZ4PjvGLqfbcFT1VPjd7afQrBk6TDRr%2BLRGLrPR%2Fj7DZzn9hxVjAM2OH5jXnOnKE0otRhfUFPQQNbZocJbET3PUY2WPym518PbL0zbWsvn%2BBwm5xlZ7mJw7u3WRz7woHKRiUVjoFwEGR3GryJI%2BdQzneGqOFOexPjgqSMUT326V3U3vTPl07RQ1GBqsKj7%2BEHPF3rFoUw39PyFE7YxHjMyuDYrm1Y4Bu7%2B3Xq3fMnUigaZcNOuE0x5GI9e8y%2BMsVe2ER3Zlp6%2FCVQaJylrIauFYAqmtxtPH5ArNmko72JUDHSHm%2Bri87VtbNxPLBbDFowMMKdjsAGOqUB3EDtzHS2Wwb5oSIi5%2FA2YH%2Bl3s1aNLj1TBl%2FFTBcmF3KqGeSLiMGQOGqhEM%2Fum%2FPi5jChjW0lACevMHUyyPuuEJP%2BhRdwI%2FnmUZNeBZTVnGLZdMkIAimVONCBYxfTI15u4ZJHQFC5oid9XzU5gam6TALfT70hhX8elNPVBWuTr6APSTLdt6zeCd4bFe%2Bp9Ek1mtWIE19gkqOVtyWixLSAdgwggJm&X-Amz-Signature=7a86ff3bdb9538d45a5d39eb9f1a12c20d1d07911adfcccb698b22c157c050b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
