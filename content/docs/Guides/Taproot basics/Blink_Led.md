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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2C4DGFY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApgK7afesHC2NusnToTDpA1olQakslOGSBBemhcq%2FY4AiEA7grToq3X1QVi65bJC2DwivEtN8CwGA1HFwVjwtGVJ%2FUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBQ58PDIjtnttECcgircA60p%2FT8bHLgfomZm%2FkQeMZFdW0TFV45mfCTNnvDxUtAWBEVh9FyyhCmtX8knarJm5nXNMQrDaQw9u0m%2BnbzPRkigJkhlQGHEZJpZjmCjwKRSGvkfN81xAw%2F9tVAi%2BwdPqaSX%2B8gldlm4yNAqHLwGMWU3tkuiaDEU9%2BgaUbD7wls3HvuJ1%2FZEq9hFSrpTroMRwYI5fipdGhPVfhOfIWaIBdo5XlXj9fazv%2BkC82gGqvFxdDx7Zv5xAU%2FPkuv0rA1zewuiJsXPKo%2BfxHcu31wlZ8BjKtyOB30Tohrd5Lc4yM5Vf8EV40wCXY5zuimK9K4i1rtpkJcjPXJyWUKzFVsA9wFPok89FgTiQ2aOZW%2FZJ5l5RfMn6mhHlT965Ju1K6KGdReZkME4JhCDl5soi1HeTjyu7uovlacKbOTvlh%2BtSbHzkOX908rog1Q4oMcDdSorpE%2FbqKSSU84KNy43RJHd3fGGhAoEG80eXeeAl5tqwCQaU2huyO4qnKtpaxO15Iwhbtg59WKD%2FNVQxvjZ%2FpliAx4%2FelR63c9NZ4CCuimiQ2YaD%2FFzjOYmA7Q5iz%2FbOi6LYbaJfKJmc%2F8k80axyNhaQUaBPlRTdAWoWIrgkmim71spRS0mnl%2BRQvWuhMGFMMSK%2Fb8GOqUBhovFrhnLjKq%2BHAeoLLLAcEnu1bkjG6nEvrgFFhwSkf1D%2BKsOu2u%2FJ1K2M5cSbTUB%2FXeQCa6%2B36qMv7NgPzsfhvsR50ttogQSMmvqq1cg5pQ7UXEOmDtwGwEO37PriDXgH8yTK2VVQTGYkcuj6qb2jvoRG9M6Z9VP7zLmH0P1bU7yKahw%2FmakHhQuRwX%2FY4BYFmj4NSp5jjc3pdmSCPN%2BzBgWtrnm&X-Amz-Signature=b198443dc8027087d577cde7378023c5b31e50976c7bcf56befe864929a2eb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TQYSUS6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwGXrzXMN4ECEQCOLGSHS%2FXdyY6qTipXk7tcyD%2Fo%2FNAiBD%2FAEwjxZr2G1z84f0Q5HuJG9o7%2BtljFOyYrxV4vslvyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMOEBRNdz1D%2BR0RbU%2BKtwDOezM4GgNh52uLykjDCrsaTiaJVRuglWfRlvf%2Bjn5CKJhcqGQpMwz52IEiXiTk6Z%2FloWUL4OK4JEVh9nMqoVh37pL1jfzJrCEMW%2FKOiJyzSCijps2%2BYQOVHfD3wvDiCdpouL0lo8ET6HHK9N7%2BqLZkbf3ExMqARpTXSPUNgk3kTS241ffF8IOosM10itJm9n%2FIamRuuE1tf8lUOmZfxJbZaBvy5mmcBuPR%2B%2B24tSRmTJYC24IIlz%2FRSeiKlu02RN8C4PRB0J1s6Xh0Hg%2By6bLgQcNFhW3C787cFE6KOFp4%2B1%2F3ypACa8NG2i%2B1WMKiP9CGDMOmkEEs1LxdzB3TcFgEbbPUyo7ZwwqmqXe7V3z4ES38KC%2FbEMUYRup4%2FzdQ8SoitbxtmnzSVo9CZalEHEAVTtQgce8s3bq6CaDOF0yGfYXiXSW3aCOJ%2FfKwSQk%2BY%2FW9OX1gtxk8HenG%2BXJZNy09QEsYEvd%2FRtDykzs2BaRfOJ%2BqDxJY0rys9F7ruFzCLzc8aUqBdfjnXPTEeXj2W1JKSXpM8t7qmvoy98lqj4qJ9YQoMhfXZaEHivBHjgOFij46U%2B8q14ADAzZBZKNjhXi1%2BVYA806mIGWkeXzkvD4gauBTHygsKFHTP0Ckdowx4v9vwY6pgFNDGM93TjkUrYjZtO6HCLtQa1yQLKm5C0%2BA1X9YORo4AVh3Altr%2B8jFMIJY5hsvHbGWG8IfQYkKLxomtNW%2BUp%2FiXOGHN8%2FvbHkl1UISzMTOGWIDqztYQZRIQAegyyrOu0t1CWOG%2Fm178Gmm66UFvJMuXxCJ1p3wVpsreC74EGHXvifDSsWdK9%2FsViIcrQ%2FWD6BGkdNU4MpOQyIA95QAZ2X1PvwVaB5&X-Amz-Signature=2936fa8ab9633b6712d759a3ca38a362178c070f9878e168d449fa13d234d125&X-Amz-SignedHeaders=host&x-id=GetObject)

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
