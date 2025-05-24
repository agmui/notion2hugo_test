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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNYP6JG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDWB%2BaxHJWjc0kBsAlbMP%2BFoBdi2cEc5f4Jz5nMty2m7wIgdcdR4ffFsofFzoc%2B9Vp5jcya9lkcdrW2dDYlVz2y5xoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLFA2bDIbjfwtDFKoCrcAwt%2Bqw9jUwjAY2ODfd2mzXhYhYxwg1agl95sga31U6Aw1O3vaofvdMM9NKevOIr26bYybYIzJUv3jL7Acy3torD4JrueCh3h%2BZZ4drViY0yLZim9Jl1Iv9alu3Rp2vH0A%2Fuc5i997pBbDDlt9IwCTl89egEBpETWtbUW1sctCmeZj1hnZUXe6LRLQu2%2F6dbjM6KHoxN%2FKo62ESHx2pwDGOZBoMZrZ1VGDh34GCtFi3ruod8ywg7nz50I2H%2FPjUnPMA%2FdpNdq%2BxPWo4ut7swarMAso8puBrcVwfoyVrI17WHk8Ui5C88udiPb4%2BxOs4OwYuqLA7s2baAKiphp9UAOdcW1l2J%2BI%2B0J%2FLDVPrH1cstoCEKX8MRpHxhoWa82DvaxkKG6dg4MqpPseCdjjGrWds0emTQpZLq%2B3Bclrp95yRATy7GZ3VEYxeLdxdhlUrTPFE60H3NgT2%2Bfa8Co3t16jAI%2FPcX2YTGNT8pDBgV6Wqlzs8h0p6Jrfjn6AbXqUxwPgfDB1vTLOZBhOwhR1nPnxIX6J5m7qaVejRbGM4P%2F%2BfFSiuJeLCsICLAABsnX9VjgEV%2F16LZ4%2FIwdYpHv3TySC8iyAYeMJ6wYFk1kPK2a2D1mTB6Vrsxi2O8rjgg7MMTNx8EGOqUBchktq%2FK5tWx5unzWhVJx9M5IHHJ8UGa1atBZBzJpLcGQLhEvmvqLrLtZDtZBCuIwUrzOb8UbIjGeN2h4f4nTl94r7mZEADRaSj5vEQV3q43jVSNXfs6PnGHHAI5NkVkVgzx3VN1akEGijsIJJ1smWBzbh74f2jMK6yAzKQvH6DEkjYWroUuMZ3%2BQ8CTwcbsi8hSfSHtz1w9eHC%2BiUbxa%2Bs8yqCTs&X-Amz-Signature=4168bbd201cd0847df03768b68d27295336505de8026bd49d842f9cbc2d20fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSSBRGXX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCiQ9nxrXJFfmxO%2FYs7LcXn22ygTnsntgCV6z8wUYMnuQIhAO2BYkbClpRE0eXVkBfL5329n%2B11QxqOklLrrA8H1peNKv8DCBsQABoMNjM3NDIzMTgzODA1IgzXGEPBHe5XCQIZIrsq3APLlJTPGdbwCp%2FCZVm0Xc3Icaapp2DG9v8m96j58vgC0leTHePntTgOB5GBXLH65l9fMFhMk1sqGipMTrRX3Bgvu37BpPfs9sk3iDviitlwjGHV99yfXIMfyEqWOclrvwpIMk6w%2FZdqk4OsxXFJCLS30tDwsrxQhzPwf0iHtXsFFMDz1QM22w5JW%2F5tKZ1o5FTWly4ssiUTUbjFmwWWGuw3oWZbvol26h3M9UsgpOMesGn%2BZUpkx86gU5cPYU5PpTzRDUxX9ov3%2FRbwggZe%2BFIs3Rk15Ufce3FlAQ0RrCyKxZGjpzYjvuzsl%2BM9n1WurMb9x922or0yXE%2BfKE6XujM%2Fdlez5tn04djCyX47wu%2F5WJeVN53eSLE%2Bykk7ry18zh78qXoEtyBborRubXq%2BYD%2FRbPcuoGE6Cs5ZkggCm%2FQVxTcinXw2bEIGmf6r8AzZ8b0Fhss0DDi24oPz9OOOB6Zjunfn2EzrBWOQ5kuvm5b%2B%2FB7l7aOnq%2BuyZC1ZRPElqO%2FIrRGCYM%2BnpkxuOEwdrnOzVdIO5SHkk1O25JCt3CiF9BUzc6%2FMM60aXsymGjclNPnZxfj6xJPFi%2B9kbhXYNWenjj8Qhg9BTf74FBt5TdCZSeIqb3PE0U5vGToYRDCAlsjBBjqkARn%2B%2FsxWvIUYOEd23OVyHxmkrjWEdle%2F3lr%2Fbsk1mhcIG8LLjzy6JhCb5hdja%2B7pOHJ54%2FOjS5BJ%2FCGKcrEBL2PQgjvtl5Ils7zJuQC%2BZfZZXT%2FL4wtqQcGCWgvvXiALyEzYn4d%2BV0EBYZNa8DUx5NoDFMUBnChi%2FwY9i6zTReGXtlRnvJWTQsqrfzhJPPD1NIAlZLFZmk3oPU8zwICzrwSJpHqm&X-Amz-Signature=c9daa02018a9d6020ca1e99fca6165ad25d0361e7a54421c250d7cfad0b074e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
