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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKOFAHL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxGo2zyDORO45pIEu3gHeE0fudjKIOCbqQ2fZkrllMAAIhAN5WFmM6RDv5zjXicK2fE8H0pyF69WkFC3LiNdhxbzm2KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyb%2BX7L8ujDMdp0nsEq3APk0GKhYEyJF5N%2BwkHZlUd7zoxpnOAPRpyrIxfKFvPg0rVgekUPn6HnKxabF%2BoWdh7OVdHHVj5je8H5ohDX1LJoBxzxN%2BzISLbmacWPyHFrbKebBjOYtem5WDDfk82FMYE40oDX45aUsJFeYzgvCpze%2B%2B7EU6Iac3HSug3lQDfrM8wPlWXbvBDmLljOtQTe7DusyU%2Fm%2BRPy94LvSwXpwYlelWVYyQ54N2NUBFJ88egHUltLoftDqkqVJopdS2NNqwQMqY9QJbiI%2ByPBjRH%2FZiDtO1aDan8oZaFoiH4QXnIwUzQSCLC%2BLhuYxboAmNIC0lSeEIem2cWgWQ%2Fu3VYyxyTCixk%2FnzBV1n%2BSNdD8LUe9W1OnBSrq02CM3XJ1utVrFfw6D0lEwX%2Bq3cws%2Fc6QCv%2FjwJh2IBAn0oUeiGM76kryRIxO3lOJwId8vYGRCJo8wk5qwjtB4vdY6VZUtaHgQe3SowekTjgxrSRAnF8fr8p%2FKFA4bO8pagCbfAMo2i3suSUQkKg8bEGY6t0bnS8WWbYBeSWfgzgRe1MDgFwq58WOzknnUcQebrTMCngYVuOwind1oVCdY11IXY5uKGXIy9U4UEb72dKF6wIekY2QrHjMUmb8M00YrNHxFAQ4czDwibG9BjqkAZ7G19Qh6DeMJl%2FXdxlH072P7GJ5n6se%2FAPFqHB%2BEvtpk6vIXDObheIlXkV5gH%2BZWXhPfg%2Bx8hmhgYeDv0%2FivAfw8sueKGnwpSy8%2FBFR30buGYov4gBETwfuilSITe3aoxc05W2%2FeVok3QXBXCJOnswy1O30LVSSc10Hp8QZzmVK7Ix5gbPCfa7ErePCuSPYAIxS1OCbXol3%2BUe64hbWGwgAmVqA&X-Amz-Signature=c930059ecc3f3909d871798fe2411d9636fac9472bc226bd9f6682d109fc46c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTID5OE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWyhtGmKezAjDd7OwOq1uqEnKrk6OuqmCv%2BtnfwFa72wIhAOCpV5y1WKpxdJ2zxma5TeMLqxirK%2BidLezwdZEtLzOuKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznTDbIjurbBialF7kq3AMuf7PgO3aQaVUroIlsn1ocpOvo1Zi7gtPNbYfbJsNz7Su28doyOXaOKR%2FLc%2BGmJ5sj1Tw6zCpp9l7JjpdIbvK17iaUW3HYtjAJJH7gh9M86cIdsnsyyZYpOmH%2BKRpdQBh%2Bi0sX5weQgvBwr7vERSqHD4Fae1%2FI%2F0yUH%2FnLKgiuwKJTI7J3eiXN2yUeEKckh%2BvudBqTfDopeouWpl6Y6c2pExLafQzhO8ejtVxWgqhfINvUXQHRkMXBh7Okd9Thk3pJzeFjgpU91RzmppH7%2F0MPBQesCxIBcGpS%2FmmVZuaynX6QUzGC2GQNF5TDRErrGOwRv6ML%2B8oo2%2FIHwYhHgE2lMN41fJTjYbj4WTneI0aTgRfJSf0bBiVTtWyek7ewfV4LlKtjeLS%2B1TIFb9K2%2BUYzV5SgXIxHWKeed94V5XJYRynApod5ldL%2B0wQD4x2RhxgNzXLkxowQxq7MFFvfR8M06pXDXHNtwc36E0EJbDtxuPiGUidrLxLrMPIk8XylzAiUfDZK7yHmDkr%2BaI7zsF%2B2mb1ij59N3oJA%2B6a79ffOxEWyqUHled7bvVzeAh0S5DLpgngtnRo%2Fki%2Bn%2BMvkCKKddJG3LERRw5Jlzf37Tm72g9S%2FqRcgECJmv1VavzDdirG9BjqkAfLnY12ZmpdPpcsBnpivp4S5Rmwc4unyePhpADsWCoqZJnn%2BmRIOokm26vmIhRrVFT%2BtIRkByYzxwnlK%2BUaddhtjWImsxzBVJhMHk9Ddsrn9VLmsmAiYCY9sTnwkIQyJm%2Fz9H7EFJleG%2BNari43QVW8pY4e5ZxXsrMzWXIa7WBTHDLhDMgIzg8LcrnNL4QVyn4vNaAYrf3JQJprI0mONk3zKl8wm&X-Amz-Signature=6e928bec16e6c8c272a357c412e39226e6596dbb8828ece1ee36ddb8034f554b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
