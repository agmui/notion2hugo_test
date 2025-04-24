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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLIPM67%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDsr%2FrnSAI2963i7ZY7dVM1TxtSxbbCAxQzJid3q5u28QIhAJ4chhz8vd5r%2Byd0fghXHcgCdRZIschgGiX2yrGekrMLKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0%2Fcs9OQ9WiCzXZH4q3AN%2FY7HRf%2FYYw2hBdJkkx5dAdXZLPwNf4WrXjStxykxRR7XlO1w0jN9SbCFvfq%2FQRk7uSmKsqmEhZsfLhgVsjBNfS%2FKHe%2F3W54pF82SAzW2%2F8j9PbebuaQC2qFZE5mbgE%2B7KMDLsELmebsHoNjMD9eHu28MOpv4SAhyuQQnMBOVTbS8mnqnVBVdn41K8vzC4ktOqCKtrE3UMNRaL%2BqfVndwqb%2BhbUwOVhfJn0kOgFeBXKujW7tONsCdFdb2BHtX5W6AIPRdLOgJVUFL2M%2FcVU3tRDJ9Aw5AuUHqdciAF4jXRyfqkMvIRWo1ZNiFfm8piJA%2BILdhN3t%2BTADP3oRiGuTJPZulFLwZSORcJmAYUzy%2FG4c005Juxs9Iqj17tEt7qxZ8EGAVwPx%2B1vNV316Yawp1tC%2BR0geI%2FKdXJZYSdvKO1EwQn8DMr%2BwHVdSKZRmhNREJKW6t2NH98JNk5cokxOUdt1%2BeKTJdJPjnx6EO%2FbCNak6YKKudxvKyYXvxP6xjiEa2tvSm%2FB2hm34IpJDVCC0aHHfDu%2BsnKyGlw0AT0MAIbgQPd7US5rLPZkjtFZpL8qkdkmQsnLegZyklsiOg9f2WJ6bP7gDWY0peFdIIdPp2UKa%2BIVGs8mTeMtjFwdjC%2B5abABjqkAeCz%2BTNivQHe1AaXJsPmZ%2FLq%2BgpElWrmz4PT18RtT3ubwJ8b8yt2L1YpJOOvl7eAyjaNBAVZjI%2BpxuX%2FSCM%2BvxefyG%2Fh7a64Nu%2B30CGeRZPqKBzyAjE1oesFv%2FFC8HdhP0X7nmxaE603uyFPFNYaPSb5JQTd7jWlK3mwdcOpg13SSuowbVVcN%2FG%2BrHbg8CDiC0%2B5BCt4SNoyfN3NMoI12TAMesrK&X-Amz-Signature=81bd43ef51998e8ef42494565fdce72e0e8763052404b7dda9e53e4ed9ba7254&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TVMEJG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDX9TDu4WzqAJIpTHEATV0arY8zdmKAO4BgNy8JcTLhLgIhAJp4xHb7frKdAAjwfl1TUrDy1r73I1idcCPZ%2BL%2BeLRmwKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwgV%2BQV4Ki1O0wDNUq3APIDoEFy0K0nz23bONpH6N28W6S%2BWA%2F7sa3XcL%2BLzlWa6JwxNB2PkxJ46HxusYj6SUy0K0zhsYCwcMtcqZE9IfygbbkKCbgqM%2BeYKVwmwrw0irZ3pArHrBUcSD4x9I%2BxEuXzZJo3lbqBc%2FNJyv1EY6crkxTQD%2BsU%2BrUlEoJ%2F57jfZp6qlTJuy9WfwMamEXP0sRj7TReqCbfX77ozaslE%2Fd2AnCmgvdx4E3W1kIdbZwIgY%2FAluIAfT9fcKDhLi8RqUfwjrtKRii1msJBRI7%2FIVScMzl%2FVzQOlI3b9yPt7aHGXNCT7zcvM5ZYPwmHLjiMOw3CuCDHL307Dx8hgbFYj9980%2Bh3heOAV2tLIFZiSrjLydR8y5MwyCKql1TBR6koT5DimxVjSP9Wl9eRonUFywLt2DXBubdCAn1xfqYLyjXkuXNQq1A%2Bl0kqNp5gnK%2BChtpluNRZw86J9gR44CLkyrhUCnB%2BMDn7izkx%2BzqRpF1SE%2FgPbI9Ush1FhMGiC977zIPFsqtZlEoVQr9BS5M88IYgfpKipzkknszpG%2BzG6f8r0qQrjXhGz755oLoPg3wwQRuZCFZHAeNcGiOieswX2edBzzZ36cYIX%2Fm7TZyVV8hDpQXdYn%2BDDNWNmcN5GDC%2B5abABjqkARD%2BPKyr%2Bcmv%2FFAqH%2BEaF9evE0y9w49349Wy5Eiug%2FOqOGfWwsxnl6nxvmtZLhXfqCZaOhfIfLaUFu34XjA6QrO36%2FY6BxvUwEeeYNyECuBD39pvX1ujr7zZlN0HTqkPsPE32ZkcHaBwgmg%2BMiKIksXTrg5Ze2GuGXP21WF2Cf5YPr4rNyXgMWvBtVKoVioSOAJ%2F1VIccbl0AOIfY4Ny3XI%2FZvY%2B&X-Amz-Signature=f103b2e868ae10e873de4d7564b54aee00d7c1e258ee3b39d54e44e227433e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
