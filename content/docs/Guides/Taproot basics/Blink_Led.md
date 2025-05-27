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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXX3DMVF%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDilmjb8qSVjFWc%2BrD8heq81Zu3086sctzvf2S5Slyc8QIhAK4zGH%2FImRl2Csw%2FRHRavuldyJ4tn0ppa74LZOk1GuOKKv8DCFkQABoMNjM3NDIzMTgzODA1Igz4bekC6FAYfFTTCeMq3ANv%2BjGGK0a6rul7TjL6ifA5ILCQZ9%2BgPFdCna77dWY%2BQKL%2FzHHIXo4UX%2BJRgVeS7o3IM3Y%2Ba%2FDFdB6k0B%2BfgsLsoVzMgB5CAcFN7Pa7yGP6ohF6shdFH5gcfkpLE79g0XlWadXxzXQ0yNvRTDbNbCuouljuHzwUtpOacI305qWseEV3Lm%2BhqZPSdAcrxjWUxPTYHqHB%2BtBIqkLMvNgNrEFkWiCWJlIN6Q33c4%2FH5u%2BQEavMxgO5i%2Fh1JBLaUsMZ0z%2FZvSucl4L7eI8G3%2BHGJ6scd%2FYyjudJoeBT%2B3uDrcqwt7JFh25%2BSfctkAznH6NneUPeRDIIRlZG3S4dZ%2BYITADsorS3vjdM8Od1tzFIjfUbpSCmlj11365vWON5BRrC5cI7bMoSb8qT5MoGkrzZ2TUnutUb81WgKrnV0ixtRJqcJLhJ0M3q6VGpOzfTy1o3%2BlYhzQ0tQ0iwWhe7tf8H03K%2Bw89KPHts5zKZTO9n2TXQA16jhmKrRRNhp7S53OtOhnfiwWm4iELsVt3YDpR1P%2FjIgzH0EDUeQmDiMDsEAq75Kau0tftHJ5uKs3kmU4ZB1TpZszL2KVSxzTFtMexssZs0eDj1kiE%2FZalDJ9UE4O8I%2B2eexkP5JBsa0SXGUDCi29XBBjqkAcwByl6n%2Bh4mqZaddK%2BvfdQs4lAQeBrNbVX%2FJWmR%2FNDaaQ1oIydtx0uq9EBhDvhmPnN1KHWk9IV3ocy0%2Bbt1eKag4Z2wGqw%2BHh0e%2Fl0xMAMNciLQ2MlgulCGQuCEk9bSXu2gSxHoPinQ3W%2F%2B2S%2FrcOGwavdBHanR1F4pLKkzEBZNTCoDxQbRMAUUWqNlVDl5N9%2FQWxtXSbP035%2BhoX2edg4eTKj6&X-Amz-Signature=45c0cdab8e874f3005eda4dfccf74c9496bcfd26e2c519e1e475fb27b38874bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S33OBQNS%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClFIj%2FXSfyGQgrJqCWHxamgLNEk5Zo7AZdeJzihT2NagIhAOHCePxS8BnugrLUNxRZWvXTu2Lvn52mUkAOzOwov%2FBNKv8DCFoQABoMNjM3NDIzMTgzODA1IgzHak%2BVK%2BaELExR9fAq3AMC3A0AaEEr5fHCHQ0BAnQNjiqtd0DHhWMepkBLs7iAJLYc6hoIlVGd925KqLb0pYoS0dJucm4q1EvErGsWPmnzLqWfZ2HKx4hOhnJ4c30BtEXgkhB%2Fn2jwwNz%2FPjgwoxmSRbTP2AjfbNkTLutC1Cs10BJsIgC6JD84UVZcgHlFTgL0wcDjLKdJaIIAmpMpiiEuudUWWwa4BFZy2YjoA2NkIGLAoiHat67ZsLr9cQQB87LZTIexR472LvArp7OBIETzHsSJqJbsI%2FVciSQUi%2BdllVbnZBbIa3d6y63iqJfdVeNafJq12LZKMEXagB385%2FzJBfl7Z894GQ%2FbzkjkrrZIviPs1qFDlk4Gvn%2F3UC%2Bvs2PAyCwzHseqNRH1EgdOTmd7aUVj5T2RPQb0ZpmS3%2B9IRp3dGsKk0Tx3a8IENh6%2FsFLgBNQEeTpdbfrz4%2Fb1x8TLboYc8HS%2BDwgdlGmwea9v56Rkc5CoL9BltEUCFFsv3N679eKw3CEhl5FrLGzszrIr5ezbRy%2FmY03bFs1Mc27wotNJfLnVyFPST0PwwdU1F4dEvWYWzZ6IKaUAwHSHVqzW9SGppQlIK%2FjY8dQfj0UBQ106EXhRsAO8pxQU%2B4c8CLwhuOZHdeZXpC%2B%2F5jDygNbBBjqkAfP7ysRPqZ%2FRYrrpID6yXHuZPwdcTeJciPKHlz0gKGL8uar%2FXxgm2bXlRhFj841aE9xNayhXwwgpfdyGW46zhpBTI7dq5%2FdE%2FVwEtgQG0DltnFRqmt4gr6001pAR3IIwLiId5uzvj1%2BBRC3FFlDDZWAHAUPwCxGbc0RP1YudoNzYT33x188n%2FTd9X%2BkXjZN7LiO3ID82ztWM0%2FmFTw1Op55C5A2g&X-Amz-Signature=afc2858ce20a2e34e5204cab14782097fed2417f20c969d3eb4ad97d2afee6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
