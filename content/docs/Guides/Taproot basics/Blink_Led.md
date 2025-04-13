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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5S4FQR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDoDRLKSq%2BQcMGu4cOD5UinZwNRwKRamutl94SbtN8VpQIhAJn3%2FTny%2FuSFrZnAFGVGTBdIShGtBAzWpq6BXNPYPtrZKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvKfAhZzDod%2BfWYw4q3APKJp12zp8ZFG6SL27WDHpsgiLLhxx%2FsBCSbjLGqmHTcLJroUuFCzpt4YzwcCmCzFP2fJ0kYCI18qtLnhQdanBq1LRWa4PvyV9q9EnBt7vDNCmi8mGP6PY%2Bh5%2BUySoU2SFrZ20Fm00JTWtPbYM4HMrezgpWLhWpGESwL31rxHOTMsbbBwH%2FG5qEbXLw55Zcvia4vCbd18NfNXUXsEUFvSVSZg0WO2jognVFt0nQUVKLnNYgGKC3mlydGnS82zjb%2BFsxBXvQHGR5M%2BwSaTLBALkutZPmcuXMzIWhXo4xe%2FfqGmVfiaLxFRNliik%2BfnStfXKu%2BItAE%2FhcCT%2BoxdD6Z%2FEcGCr5PokdnAI3HoePA3mCgMSJP%2Fc%2FHyq7xHpRpzgkoFuS%2F88G6p2I%2F%2BL82YH%2FxYl4u0dFs45ySJlps33HDqRkf1%2FNDU8qNsQDwteREc2swmBpL%2B4IgnZMvXvT7BxU8bKhDqVDsAlZ5fESflSz3t2Mbhw%2FhJ6zBWdsRKBbcNufBJYaBJ4fLSxNPdWXH6vuiyaZdmrKjCgnmGRjlirP7MjU43%2Fb7RlF8mH90hD%2BfiyWVLmW0l%2Bk3FQhJVvoWh4hExX5uy6PsUFbXYHHSeT8OsR6kqgB%2FTr2he3ydvBmtDCKseu%2FBjqkAQ48B6dWBC22eLBoSTxUWq9%2BRaRg3IOXjQam0KvHAUWr6aulc8u8CqLPyB9mRiMSHdqlLzEQlSXNHXMMB9GgNzRbAW%2FXKbxIsIWKWiRPFCDlj3mPhQIYh9iAkul2tAARAC6QzzkzRM4thABB2V0dJL%2BR%2Bn21BChQUz7quysDbxUyrWqvorR2rmD26DN3Wq6DpLfjf8AStY3xvwMNOz8w9jugXJsk&X-Amz-Signature=e77fdbd6747040ee366dbaab9890d9b099a34ecc595c373a760bcaaf5780a853&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG25GUCY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDsnZV4i4%2B%2F3mNF9AGABlaa%2Bkyv656LdHvxDbRB9AI5oQIgcgbx4dNHB8ekZc5HOAK8LgYrrnHp7ZG6eyL7eedrhywqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT4b3at8HCmvOAURyrcA%2Fk0J%2B72agrIQIFcp%2F9zKmN4T1rm3crmltZ6rEAeA3sV12WIK8WoX%2BjnkMX%2FYV7YxunlLkWnboXwNpEn%2BdInFcJucgaaELWQ1BcbZlZHErVlSKEqkBHFNae9yw%2Bb6XG12%2FM0b19%2BNgoEXVGQ2nkNnCk%2BsS3GGG9sSYcEHGUYPWSQGHjuLSQupFl5p70YD3kFhQw3gs9ve5vKj5bFirglQhLTP4awsKPAgS26luzGVRK90bCjPVr9MNchSfwDehoMBDArKPG9nJWpQFFnY3dJsTRq6j%2FMcXysmRXMHmuNqkqUHdQByFH89uxDx8OxcvpN2v%2F1ocZ78SLrBRGLCASR6EOzZVBU%2Bpkwsjj1hkLZlrfGfIrTz9QBkMAubVTExFexoPl1vdLn5odMeC6lKq3%2Bng2%2FSP9s8i%2B2hsAfh6pMAI%2B7CCM8p4jJmZCTR9tw7pPyMkiVad%2BLxXn4%2FAkj3zuokG64uXdGo%2B0oTsdGtuDJ63TMrTcH%2B5bYfKLOBHV5elCJJKBPiF2aQ199z9onEo4kiRTxfVawoV0eL2BHZIFhIo%2BSLIENrqK6YJxuuT3De8f4cuktQp7B5%2FIiureYAzfUbV31OcJnUcCLu84%2FEw6BlMif32yDC%2FsRautICj%2BPMJ6x678GOqUBkECR%2FLv3DWGBUthOcAO7PG7vi8Q2sBwaJD3YthYeWONTyGw4o2fqXw6P4pYUv2OBgjw61NT3nel%2BsGIhTrFHfRiv3NU2yhB3oHGgSqD6DyQr09cq9dxSUJoBD1YUSUjt9YGJyR8n704wZcTy%2FBrM1p1mHQRmFIQ7tHtV%2BAkbDMzUsMOaM1B%2F8ENk%2FguiUdBROBnuLMAtQCM7nVxb7OKF7yp%2FJQh6&X-Amz-Signature=ddab5ed5d03ab02488cc2b893d34528d27b2afb547c40f28913ada4daadf1d95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
