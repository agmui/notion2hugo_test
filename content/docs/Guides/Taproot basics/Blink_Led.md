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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOIEVBB2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQzuN8UbShe2Q45%2Bq63998OxqRgb60ngmoan%2B%2BeM0T0AiB3Tp5DWkrchkC38RY1Yl%2Fl7Yaua%2FsJ5cUNPyVI2NXd8SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPc83fGtU94kwnD4KtwDEQvuwQsfl3siKaqwPv2rK39JyXAmEtoPNur4%2BJ1V07TUByFPBX5crRp%2BXyBNxsJBS%2Fu5qqxvRtnNlrlBDZuq6TuQoSVjlPFF5uDa3rqY%2BVrt3GTjNAtlTJNIqyCahMSBW7RX%2BpZR5zsAOMR6ehauAIkPFF1Sl1%2BRF25K7qe24aIx80RtV6%2FVddUJ%2FvxX%2BwG1Uwjes3BpgVYfF2Y8YxUv8tk8oJosZt5I1v4P9i7Bv%2FGr0HooXXxI0yfuhKBI%2BULoRppXfmg%2F3KOfiACnWtuEp3vC4M6S6IagAGolbOdaIMlIU04mF27Dy5ZN8Mzdf6QfZfdfAGIUABxYRF%2BP1iD4wuPftaF2yCVIrD69agkNVCP2A4o%2BTOwc0HzRxOCFt8KnF6D5VxbikXbz4s6aTakHbpMzk7tx4mef2kxp%2FaRZ5ubNYxnN93k9PonPP%2F%2FJt%2B82aXpxSorytnWbjxZkt8RYGa2UrwvzW3LC%2BA3j8g8MKwigKgUv%2BujQuVIvnjyQp%2BAjJmvQ4xb2dhhTNSZ8N6i7vI0o2LZ0sQljwnoqzLwOzII5LQDGp0D9%2B0IRagFiRx02rGO0jDQAcpCxoyJaxNtIFhtm9iyP7cHgTu%2B1sDRljD5D%2B8CFVBBadLmtBSQwvqaVwgY6pgFHR4QiQ%2B78yo%2Fjs4EMsZAUA5Uxa%2FZDmrfp0g5XdQnIKqARAkBjCyS%2F7F9btQezhHubxLBbJlkpfPK9%2B9TJhFhWmhDbMof10nb4Wvg85cKBlnn58rrff2DzQpd0Pb3JQ%2BFb28PQ5DS2d4N%2BYV%2FY1kI%2BgHWZngi%2F4%2FB0MwTeU5rx9PX9b9H9r779c7h%2BO0KcmIMwD9Bi7TpfNRL0BkIEMaSsS84hj13y&X-Amz-Signature=eb0719c8ba0b126b0df28d6f10dc52e3917b6826596c0f1693926bb66c70c1df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X7DZVMU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy0L4j4DKF3Co7Y0MlzBXH8TpAkO%2BFgZhY7LZPRidP8QIhALkMuLfx5gC2zhKHCZk6QnEusruHpzSIp786ebKJn6REKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5TiyadutcHmSzwl8q3APUXA9aNys35TiAu7%2FyMVO8L37VqFPzFoCnWsY2DbDEK%2FtnQpK0xps3KvSTItCrKS22OwIC7L5y6NVGv2jYx8pOnaPZST%2FBcrKEhPW2vnGPnPx7e6GXalthblQ2GhSURLvhK1577ChHVE7bvKRBHzs8hYYHYnk04ZbPNKvx6t0iLkrG2kp8E9NI2cVivEj7BxjcOtAoSIcRvySbhXwWojcGccrk%2BMvs%2BhTIZd1GhpzEiP5i413%2FhP88uO8q%2F3Z341WzEkxen51pideb499QeXiuDp36eHZhKkpKs1KWVKtqJBf6NeoDx6QYx3slR%2F%2BQJENBC9injne4MslJNxw5CBpv4VI9DsKJ6gdtXIUVJVl%2FU8Gx2brH40Im2PfJjkJlI%2Fpk0AVGWM%2BVRXXCYOS5v6ImwcEuhQUXxBvA%2FBvKTEYTtHh4TzPCYEc8dObvf8SRxdHcITEmmIHCNqdCn5oQIO0IUA4Z7YGjM5%2Fil8uq%2FHVk91M%2BBfDKi5fcP9vvWY5SHdum1QmQ1EloqHQEhCmK1AgbxBKq6DWc5mVSF%2FKr6bOf2e0P6QHuxJRmtwoDwUG6RnzKYiRnSrNfF4GuXKM10hzLo8C%2BNHaxlIQbE2FkTJJEvLXmUU7rudsJFSXy2jCDp5XCBjqkAdzKs59zGo1mHT%2F0uMnfAJyW%2B19cRuyxXJNkL7k8pVw2oeElp8tbPNZrSo28qa602Y%2FJGoLXvWcnGtEvMl1NcCWjdRSCqNdezg8pnbcwSBbPXfA321aLpuqdAC%2FlXhyukveY4QLX6WXnxUi7zoxPZztmyXoWnlH8AAmw9rH7mpu5bztER%2FL6W7MMh%2Flwvv3Rf5r8%2BokBeBF4b9u%2B10qxrq3Lt05M&X-Amz-Signature=6dfc86e4249b5cad263bfd141a4e59e233463edf7b21822f3f51b801e131786c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
