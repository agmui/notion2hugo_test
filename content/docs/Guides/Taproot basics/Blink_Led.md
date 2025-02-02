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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2ZT7J5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4sXAv%2BgN3dmY%2FlF9WPD8vCzA6ViG23WStA9S2SagbQwIgRqmrnCzQhg6wuJLlk6Mux1NpxbJb%2Fjs4AQhEIlo289wqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZQqqya%2BqDNnxeXpyrcAz1HCNpVjsCmcTnX5QJKrQUl%2Ft%2B9WvUNWOvKCCeRoTd84e%2BMFwtKa6DBk163XH4YJHEozyk7tPufOcIMTsDV6M8IYPTJs1ZF7%2FIM3qqT7MJBO2rdxQuHZnw%2Bljhv4RjQtOVRDRRtjrb7%2FBhBAY1H7G3DpyfX3C7Om1VRlSsjiVvnul3yMm1bxfdmqCOkhNOWi%2BI%2BKd5DWehrHYvT8%2F1ozDT%2B8ZNHZBtDu4fQR0NRiVfu7rk6DbEJ9u0sjP56%2FPr8oyIDsL70tCLjH2wq1nysovLLajfjalEPGMbckxQfZS93fZpT%2Bz4NfUJjzuIk1w%2Bwwo0FahJ02NXluKYqvin3fNTO4aa1KKrm50c9VQtAiFbV%2BXwfxtJrFlaeyaEVNAlfl9W0pz0itgRwr%2BtT0tzOFe6J%2FsWqwvfhvf3LMyGWCixySE0f1sMpyeGeiNpsZN%2BRZ5g1VErd9XSKG4G3nfccLbsrBfNWhOo8QxbX1sYQaZGqqLl71Rzxp6RmuUuUNiz9IPwe2JmEMdIbN815452gtAAJRQXLQlgHxrdYIg9An%2FXc6l4r%2Bf6YWONFEcwqp%2FuvD7V9EOnmRRB%2BsrqfoTVRHyiLvzzJsp9X9kcsozy9wFEgO9wGIXSI3vhD0tsOMNa8%2B7wGOqUBLtB667JselmpWUwe0aDjM91sIjOkj0dKt%2BcUaFzM8%2BNRyDk0bwn3f1fCVjY1%2FZh%2FYi4FAj68h1svwUN1MdZ%2FopQDDUZBlpsKGy%2Br9nybmmzyvmoRtXe%2FgAQ6hcQ8tGDDfzrUhvHNtXsLJn7TOVpvVFSiDDXH3xm8Q1t6u2wJbqkqgmqcup5N5TMen2xKNvaaEwwmj5LBMQ7vFR5U%2B4ewdseAr1yR&X-Amz-Signature=cc4d30fe71a8c2966d5490177f7844005db60699a5cded8a04913afae13ca867&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW66GVAU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCjdkJ3NSBhDOlQdEWx%2BHLc%2FA7DPKMk%2FpNptNnn5iQegIgcuHxVagaHECEF8x44uF%2FwFlVhdd0vBABwFf17jW4Lo0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK94Gzq%2FyBw7EgL7SrcAyyfMURR5aiK9NwT8rbjqquhULaPYdGd756iiG8M6pf1npRLb2gDlsEc7I8RUarDoeVbMoNMQqU83vwwAVBBAua7Ng%2F%2B9mvab%2FVxgEY%2BPFNAgEIQAEMa17RI8JYn5LBHiTARRC0YoN60P8aabpyuD0kMYJ3G5VQwvEMZznifnM3CrG1nXdzTbJOsSsqRgrbsC1g%2B33%2FhAvASNwbb32yI2rIn1GUPw6QOlt6XIsye77mi%2FEDvU2UBvkwbNh7BtrFsV33%2BWqSZkhyZQPojWFbQ6jLPuZ2P5Xeeo4vNOceWkf3ml9SI3gY3P7pkXLu4UzztEEV4B5EXtWIUgXS9nb09Bi7g231p3C2Vq9R3n%2FY8q4bHO3N4W6pmX1ZQGD3pc%2BOBu4gzV2ItEEJ1H9RJv7ytdgQK4Lk%2B4DWyWJuYNWi9WZF0nRPSE6g6PwGQEB4jhHiYydQMUqvPwZ7GqJILtzBWA8zGF85QqNF6xpjkKMpG9k2C3M7JN1d0HM9r3wxIA3N%2BmNmxxmdhIVnFIK%2B%2BnCNMUpAQFREmg5LRQslMuWAfn12urFeDIfdsMblB2rxPmyGMEyhNS5rvXUeo2eCgAuGNNM7PK4aVThqa3If2jvdONKpFYPkAb7yyhGl4%2BQk4MIO9%2B7wGOqUBpNqAr6anHL5bYVE4mJ3vpg7t9WHJQSlET6mGbYRrXRqODyPxyRsdkC2h%2BjEQ2nnCM7VFK%2B%2FI%2B0aKQwOTe9aOefYGwD2ixrX3mJZPSkPa4wecc3yMDBDBslPsKX7BmOzZ9NOAp%2B3jxXVVQOwBdV%2FJSADHIwU7y4%2FJLVtQcXctVCMVEs%2FMHCIPLuJJmvNCdoqSVglI9Xz1JkVX2u%2FtmX7MSQlUJ95P&X-Amz-Signature=ed92f72a320d476bb606ef6f14ac290191b2080cd834415ec1f06026875037b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
