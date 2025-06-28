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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDEXQWH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzf8%2FdYjQ5p01ydsCII9DCvZzpeFXnsmsxT%2FAjhqxzVAiB5at6HmHH2L0EqdYpfyJDzsJOSgqh9Kmd0A1r4Gi24EyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUT8vRo6mCH6Q7oBTKtwDDZKeApOyCNXIE6bmikFUQm%2Fqx01c69eBx0Vf8tDoTZ4nRBeIWiAtyyxyYQcqe9zmaKDPmcMz5iurpiBrOXwWU0ONGzfnrWiKZpNJr8mxg72X8O5EOlykZPRl6rqcQGc0v7TqCapKJ2nH7WuHY5jHyM4BBQLH6W04vDisabb2p9NJ%2BBfuYgGHYabV4wt3jnhuNtHKV3HGMsVAMeJqfCRgUP95V0aN5KDzScClLdFpNj8UwnjCAH3%2FbQEy40i4YOJtwFNw7qX4Xt%2FkQLZ4KGVyZffFQ%2BOLbLj7tPHcSTWcaD%2BrP0ku54hbP0wzFM4whS2Pwd64O7LaDiJBMvPXPufX6P%2BiVXBlkp4U98RlxPz7BvrJngRY%2F7rGhw6yF4bdXgrXlHuQnKq4k%2BOWRF0UhBgapR6TqMXRUQmIHV%2FRVCgQ2MtsF52vxPdv9EnjEBSw7TvfnRnq%2BQuGjIiMZp7C2U3hM4DVNNQAI%2BTciJwdOJJ%2Fvkm1S9C61dpTRQ%2BFu3wxfBuo930Zne5N31v7svmojqTSW%2B5OtaGbZ9HTguZEiPHLCxAsEVGwxV1WTUjQ6RWELDhp04EWb8GpJkobWqqRFGIWe3ZrJ640qyR5Md2b1yjgyGmICuwq91aBaLWJoOww2aD%2BwgY6pgHaOGKbDjhti%2BRuiIu6ARo2DayAHTM6cNIZE0zgd9JyTr2TpgkuhmjesgGf7t4Rbj62j8meqGcMHqhSsth52CvTzP%2BJRPaad6GhsLnGpn4EYRCr3g1Bx5vGPyD18tllwJQx8P09VYS26nN%2FRY5LE2otvd0Sy4Y82OfScLgYNMI1u0krKcD7ehMTwuK4h5OKr3oGtSjPg%2BhTtJHWEcIonFTtFiy3JLHD&X-Amz-Signature=90ee1514a04df138ab389b6564271282bb47230557ab56ff9bd2db8d0855ea16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LNNRVC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2wujN4cB35S80cFTrTTsx5WNtLNsX0C2KA5MHt9fX3gIhAIJZHNcvI15V9NhKWYMAiekBGQyJxounq11jeZyz6ntIKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3%2BNhxzv1SFqq6P5Uq3AP%2Bm17WAU8azqZzEBcWOwE8gST6shWiojlUvDW2HG4I1wr8VvsKEMPdPSyL4nCEnZg99foO4tkIqt9ueyDMl6%2FiNNAFYaFe%2FyvmcHc%2BaX2VOTrGuIUAWxyJLO%2BFg4dTtV72LxV7LqzDcr3eFExQT3xUGStamAjtsWtsM4P58IwPiwHeVHAxw3MAtsJksg00JySRh7cYUGhWwHrbIIpmVhs4x6uubXV%2BuiWp91NGkZFNp%2FmN9CDClLisYTjW7iyNlKtPoBVRg4Q0WqcZT2EXehN0jVd4tidq5Wdqsuw%2Bjt13OkYsmKXIprTV0xZIWubs1Rcz0DSw%2FOgJlotwEeQsNBU0MQuLFueSZu%2FaehaMqYg%2FRhJsTRhPutMPc2gWItuBS0NPfYVkZMza5GTjsK42a3aleX2DweZSXtEVkJAkj8XlF3RYPDjn4gMNTBtRwjSUsv78s0hzgkX2UKBR%2BNMEsN0pAbVEwDbxOmjJmd0CuSKTZl7XOzwhuxd%2FiyuKESk7ZLw5aRxbBGc6YkWll3ztYeEKJg8GCWesiO4eqjntMJjXREZRxxWuuJNmdqtfMH%2Fp26FenAjsoDLx6lwbciCsdlMfmM68dqBiYiMsnrbBn3Hg7ajVOqr3sKPMa817rzDiof7CBjqkAYVDoxuWrpncSINZE52qW%2FJsFgLsYLT2NIj5M3zwja%2FaSRDSpYDpwQ3g9mBB3lXIdw5FR71Tlm7LhqgaaB9oQBl46gwtzYDKLio5lchvOi7HuD41%2BTVsKNR%2B9me8VpiomgKUdYgAUWB8FAiw8gXYl69V1o%2Fm4W%2Fe%2BatjxFbxpBdd%2BYLRs2iRZKTcqnN0umXZawTZxf%2BXsEgNABJtV0xZFMf4%2BUHs&X-Amz-Signature=21f910b0ba29072d0c7299a6565b74b2dfb79db08a9146d0043306f10fd3cb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
