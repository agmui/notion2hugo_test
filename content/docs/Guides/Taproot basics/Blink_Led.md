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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWIKXSB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSLAmiSlSl0mhF3j6Z6mGGi5ujUssx81cg%2B4%2B8MWMHjAiEA%2Fg%2Bby6r81XbLbvR1fgQp2MEb3z7UxasTby%2FiogAa56sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0rcozSynwCysGYoyrcA3DT%2Busim3nfMwXLMRoUrUWhNaFHk6lOlm0B5NB1GFOOWQI7OKWkVrxyj6Y0FgR3NcO0Twg7xCnMkvSjlFFnwrO6OcPSrzrE2XlOuq%2FrimUSI7n23YBvEA9l2ZdkPz%2F3NaYIwKoh5g%2BsJ1NfnlArRWX0YJUa6V3d69LyugYTD%2FTen3IdCPzhtMFtHoo0XATPOed9KsT2TrknneCPs2U2e18rFj3oSM%2FL%2F1lclwn0dE5AeclvgZEB0nPmnJfoC2zG2I9IQOfaIsRthzE7Z0uLVFYT0GeljUxvuaFJXnzl%2Fdwm9Zv7Yf%2FVF%2BSPPxi3mdELBydJvpbQSim2bx7WpP3FJZJcHp%2BEZqgGnCJJPpZ03gYhBAVx5vQIRLvbGCdTZ0%2BBkXX%2FNywS7nAMUg4SdlS8eSuAAPa%2BGwMW%2Bg2ADh4U8b6s9phXuRBTFOt7MHVzsY%2FbqHyLHurfd1riJgSgtxfPuclqB2m4lxzctfjY6nrgkO5I5bglAqrSZRa7RRdKwxZ02PMDswKe3xQpJW4coUrzIyWPS%2Bzzhv1uMV4S4PQS787wiRz46MtTHDr%2FkM1zPRx5fmujR0SXk%2FlRfUMyIHdOuRxc%2Fanza4IsmJKGXD1x4vX2rFjXEcxpiimN6%2FMWMLyglL4GOqUBf812xSqJWjcCbkbx9vQTzB5zYS0Z9I3sl0VBetjrOeruY3fy4Ws1QmX%2FQbgsW3qwp9wqxJ1rnvl1dLjlLIRhePfOsefVD9RAXz%2FzgrQ%2BoU14UrlTpSdC61m74P2gGV%2B6KGXX%2Fg5RgdXY7%2BR3c3tkWwjptGzA9bpiC459hWfsjF1%2BjhsYvSZvlk94CjOX%2Blw7HfGcLFo87TTlev2bdsJVkZWqN9%2FA&X-Amz-Signature=cae06c3bdeed316515bc468133942a8a03c101a17493b7abf70763884b3b4dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHIJZK7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsn9fhkTF4qNmMYLH3W7fjwNRaGsy14ULiwgrVgH2vPwIhAMjqrfOXPodHl9Mg1syxu4e%2BOIrAMQAxtlSXeX0%2BUNFRKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Bh%2BdQ09i%2FDhDO3Vsq3APRZDo6SXeqthXdG7RC2vl%2FTDdsumanZniaiCbUI7EmcGkrzdj%2BDWzcxK8dn1MjoaDVT5eop2mDUIJ26mg4KNYwYrIocmIPKsHUAAYlInF6J5sTFJ%2F7sTi7DT6%2B2dZxtFMsxtqVY5ykjKL4%2F3PA0VAJVQRhsODV3ktGm67QdRvX12FwEMNvjFlrJck7gQHePqZcGo44f4XRVVvd7rLBKp9X9ySpOo9I7%2F2jIfX34BlUdy60vpfwzNB8MrP%2BKPuQ2N9OtxFxDkSpbw5NVxnM4qGLP4ZaSD4ryIbjMH3ew6mwQE2PPLgAPOVTfxUQU%2BT5v79D66IZw8DZaDA3yoxHkzc%2FJeyK1q54g%2BERQkBuNG1l6V49GgT%2ByuvaGEZx18jq47%2BKvL9%2BI4X6m4P%2FkglSBcFp3O6dVggeswlfqOSBitJUT%2BrBIwvCx6Pg54cwKTasC%2FRH5j9YQiT%2BvLTL9txkWI40zPb2j%2FNkv%2FaIcmqX4Mvb50L2pZFz%2F13HpB9torJXFH1w%2FaMnM87hnO0QTWH497MKII4%2Fq0NplTsBjsUR9bcNT6hckqdTRjW0Fcj58PTd9nM1rCHHIsbMv%2F9c69HzmzY7l0%2FFFomLq0F3SDLf9oromDDM0ETNmEf6Wce2GDDSn5S%2BBjqkAcPMq%2Fbnei2UGTXK2pWxOdKeWRmg3BKIawb1jA9rfsAXRq%2B9MrYv7dhwzgwbgXKxOEFGaFF1yozXmdzyeg7AS0mIqhKpcv0exQhl5%2FYzqKrXc%2F4KeHgj%2BvfF5xKhfWd7XBG4f4S4YtFO4NtzGJyVZvyn5cNjZfHf4IYLxiQVMKDCps4QGYfgeEOgEcW1GPBPTG3ScPjoih4%2BWWWRVDbgLQ4Wuf04&X-Amz-Signature=8e6a07c8a9ea13a39606326964fe6708a22cee931bc7d0d45772baa0ce0db61c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
