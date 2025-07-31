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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J2V5BB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcVKjPkvbaXIEsDPwMUwq0w9qmpNnkIW81MSmi%2FZkMuAiBp1s2UaoENw7AlzudGtyUZg5HBN8ZGdi0cXaaNxpKE%2BiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZjSb52tV8kaXRwzKtwD6zuSFuT6tUNsvJdm55qCDVBUwhUJR%2FXkL48DVTZgvYKJVu4Wh44%2BGTCPVj9HhN8rdMmY4uW8nSOcOSFym%2BC50NHINJOmoNN0HfXEKfhezCdKAR1SuwXpV5o9hW%2FvrSAODMDHkWA0BO3flktiOOHZ%2FgW3vhgkifTSw78o7QeRugmwEvUCf4bdqeQsbGW8uqBIfWzY5TcFDtdA5B5El4VG4yXEv6VJIrnesBezrNdvT107jUVDcRYC0nlXH9zMszkZUn4Dh7P0rt0l0NTfyaCVoy%2FcaGR334OIn12Tuz8%2F8oimQLGVNrXIMtnAqPC8L6Fveat1R2iMSYhK7xgUyoms5h0hGSy8o2%2B%2Bq1GIYJa5zOkq8gvzd%2F%2Fw7qKXzKYjKg1ikjmQkZ2sBK59tytEDK86h2woPGMA%2BfaCliWE6%2F%2F4LYRfEklOvbrR9tWmZ41M8Y3icSTd4zZGkirZvPQfiFX%2FxXx5h6P1oU1mzoZRPmxunX5JC80sR39UNq9trNyON9jXubtOAH3QeUDl5VC5W58TxBi%2BV2IWMD4qIkOM9KDhsgCM2JZN0RrYGoT8Ae8MCe7bA6%2B98Qam07jH7Wr9aSFaOP%2FbDs3KYfPlaX2BPVBO34WHH3NqNqfc3nADsmEw9fWrxAY6pgGghIBhRdQDe5JAZB5Gh8oW2tGhb3j%2BGUncEokpg45EivMlAuX5G8F8fTzolgtmQArDCOuHPr4SKHDs3dl3DZL7jjeep7M%2B%2FwvfOa%2BdY3j7el4m88lvmed0ATHGua2XUbNFI4m6YQZoepEf8zN%2FJTB5hrJCW%2FgxbHM9Of%2FiSSCBa3ABRwc660mHpb%2BWJOfhHoHWIb3%2BkN0Pvz%2BOQJYCoDT0aT5J5l51&X-Amz-Signature=75071f8ae3c2eca469d55f6142d97709e6122dc94ed1ed329d696b1ffd41b2d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFJ7I37B%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9fn45w9Viwdsaay9HcCxwHDiOyEneMzTG0SDmgcFR7AiAgDed2a%2F6sCAGag0MTIqi1p3uTfMXHsApa7Gx527iciSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT915f7rxNXuZlgJcKtwDGEAh%2F076vS0hqwfq3E0ufTEht%2Bb4l04bG7RyaEWRk4GnFZ%2Bxh4dp7iQyIDX6hR9UhB1Qj%2F1VDxxJOJC%2BtkycVdPQCqB1EaTGfgdrlZPk8rfPKxc9uFhlYKh9EKW1Df%2FdAGjxw0WWo4kMa33bJ8X06F%2FyyYdjH8YVqdlry02CUtfGlA376R7XZtlNVEBnBKOJJO%2BhEUTdqXJv6m%2BqcyZukXDrHzpTlo%2BJAiqEUCkmDLDBuzdN9UjXLnh%2FlYZrg%2ByGhlELX4BmT0UZIejU4Pv5VO4H0dwgUZLgd4W9eGj3uq3qXQkJkFa0f2xYPYY1thq1%2FTtyUa8ti%2F3L94OxRG7MMUnr5DNGqGDouuYp980O2pLJ91z%2BDaoLyScwkkdQzCcmwrIMOyks1Dq0fMxai4KLbiq2EJ5YhxxWZTS5XEtW0rFAriPsRfu4AD96CCtgg40tDeIWypoknuMi3oHgNlXbyBDhYOj%2Bbr73%2BywqfLN2aCF2jKjHSut7DjoH3ljDMpEHKXWS9njr4phq0%2BSGTFXmSW7nH4Q9pe0C1HjqkIhUidGgx9d2q6SJtu%2BRktYIhRNTMRdRFl94Yz9Z6vZB0WP1kOVLL%2Bqkp5VjQdZDAQJrg98vAr0N1M%2B0ecBQBCwwgfarxAY6pgFHiahkvRB7heuO1jd0RQT9qpMcjznwjUr%2F%2Bx%2BMe8cuoA3Md32tpjCd5%2Bdt8vk%2FYLKTPKppqpBl%2FWTymD4a3cZc%2BoVRlxIP3i2r3SrKLb87lTouebcJeMbB7rJ0f0znecXQ293JN60Uvr84qnlXaCYTrh5verr4iIE4%2F2m9iVh35s53bjPjBEwKVY7GQJsXWclCxyv3islkGVgfI0vnjkPAsCIIBtq4&X-Amz-Signature=c73b9a89d013ddbce34eef1f56af98cab23ede12c90bacc29813ded0e5dd43db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
