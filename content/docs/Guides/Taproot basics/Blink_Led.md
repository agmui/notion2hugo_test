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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWUAQNN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEeFO0oOBmM1gqJUqKLha3l%2Fy9%2BG7O1EjYDaSW8mBXHuAiAOHSA%2FHCNv6QpAOqzAou3xICS%2BExt7RpzRXE2VqO4bQCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMuk43wotHxVycnBtLKtwDsof3kMsdHY7gW6D502WvuZTYWJjkgyguU9YkF0OI%2FsuD8TP3m8FRpd2eFkR8WFhpBIVZA5oY7oJCyqD8dag9OXL2d0qOwCe%2BwBhffBM2c59Pqu1LQIzyuo769pHvL9%2FPhfHZhDSN3r8EHcj1ds6LDmix2%2F7V5dbBK63%2Bb3d4ynbhBmSyZJSs0c8XJY8pO6mEaJQeELxb2SitQEGkudXqm5BWzQQVpUkruMl5klpI3hZuuiR7FHEiUaqa3yMnUAyb%2BnwjBdOLdMbKr3e%2FDRzEV2jrbvHHvHCt3f8VnleME%2BnK2X06TaGCb4fKZ5C5oYXXPgeDBTpqlUWfsUI1GJ0i%2B%2F%2FEkirmwX7SZcYWiYcYdqaFBAjw1SGHY8FlZ3UjWjEAn2wGjscK%2Fg3iY%2B5Tx4AyP%2FwiTAdcOXsWL%2BVnkrnbllhcBPppE%2BrU74vwI7NHMDFWQymyt6Sx5yrfitC1D%2ByBVfThIlxHNnxjNoI124LDuB8mre%2B1F%2FAQlfnMKSpgSaySabaqBQlhPPIBbq%2F6MLw3J7wrmJ7%2BnQIv7JXw2TE3RHciyw98C0%2FipWMAFm88kprkkxKfhi%2BkVGuidYbxS9dyDge9yVzGyW2X0GQC3lZlqNyrcuEzHSJZXF7bhW0wo6rXwwY6pgFBYaff2cq9xhxEiswYhhsU7DnA%2F7%2Bx6DFc6Pers7l1Hz4eklObqYieoeS21cGwAagATpsP1Es0%2BnEwDCC0G0XVnbpnX9ePRHqE8Bg60XkpoQnJ%2Fg0KNkLw7aHg0oXoRXI2yKpqPuap%2FbFbTV6QA2SIMWyOGIFg7PLpdYqNU1NG4C9tJAAWKyoYljgmVaXHqU6N2BWiND8WATOsmyEk3OKpF3nwlAE3&X-Amz-Signature=fe02db6ca48e6b807b4dee4cf3ce5b83644f6563d78b5047f12765ca01244ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YWXRR2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCID0%2F9WTLWGbilyr4%2FudsKYAMweBDqCE3IydX2Pe%2BUkkMAiEAgDEC1gyoMA%2BqmEF0norwNF88tVU1jKgJnK402Lm443Uq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAnetCggDoNNslyF%2BircA0HUn2s%2FBM19EmW%2F0jVBaWywZ4jgS%2FIE4xSR2p5uFbXjnyQNMlBhtbQ%2F3m828g4WFR7FKJo%2F27c1IPvaCiNU8apeR%2BKRHW2fM4DRA4iN1m1DeNwK1oh9pQBZcG9G39%2BkC7FwApu7%2F8lyebgmvzne%2B%2FFqyrQQtyiMtwrNYKRVkyZaIZadLEckIplmePjFxGyXUAgjot9u66gjkIwnrTHp3W2TZrQ1IFnV6vbUozOhqrLISp7R%2BblzFsL2sLRZ%2B3Ke3EIRXu3LhzgdfeJ%2Bn7UwWiKZU4Ak8yl256vHp%2FXJy2nA3sv48R05nCZYOHzwkyce3pxeXlSpdZHufvVscr6Yl9R8qBGPuDaMbIuTJdZmTBanCh43JRiLhQ%2BtZ%2BZKYklrUrXG6cec9t0GFKtFvsgq1chLOQCnOqCVupW6ftsLkKlQ7zlcpF%2BWjuzOql33MD3a7N%2BWLVX9VX%2FKknSUi0rMy8atVYBBDqp8PD9RVeUDLvkmrQMJlJuLdHmKSRwEDCJWrzvszSwC0D3SQdCB1KhwcfkoFLSIpNwxyfGONMLv2Oa1Yi237OZFYoUw%2FyKSRUnnL%2F4gC9UAqxbSYFymHON9BXNaqiUg%2FJ6iPgKAA79PN21PhFUNtNY%2FvOPwitCdMIGr18MGOqUBZt38x0puyy%2FSPRawvjMc%2Fs6I7DaOpa6wFcOe4F9JMNoZKCgdpLkfOFmjcvv0fJrgHcpb8CsvHCusd%2F0zxzSxzD3jBAgFHn70mes%2F%2FfYPT7v8mS9W%2B1uYGOLI3AobovMU9dk%2FEnHpTI%2Bx%2FBPrgdpu%2BguBrOPeWmF9sEJ8Q3Uu8m7B4WTHHgbooIXrJzs0AfClcR%2BP%2FGac3x%2FknjWQb6gG6XAgys%2FL&X-Amz-Signature=a7920d7986652d15e4dc06afdb8f14ec8c5907368083cc65c4d7e2e0816d923d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
