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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOI3DGV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGCI%2FfDFqoaK2%2FKdIwj47TSFr4e1A3YI%2BQ3XPr3G4dQIgJTJymQsoVIWp%2Bo2T9QQ9FGRIE%2B8%2BS38eWNsA%2BmEIlVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEYze5XM%2FaeJERmbFCrcA3vSSKiCfcw3vYuiKvhW%2BMHA%2BEw4ZGF7f27K0tHs3W1LOOoeFRrATeatR5i%2Be42exSytaqv8BD1Dd7NjcYKOcrxyMuFOOelQPlC6C9F8csGCCE0oRkWK17jXyp9xgLTQpAdw0NMaPVs5LvubUDgyV4v%2FWWcZo5HFLhYUepj908Tu0J7%2FX2C1YGLd91YfgbACSzm0QGhkGAtZ1i9TUGn4uXqB%2FuhW5fuXmVM%2BgFQORxXp2eDP4jGWvGH6fjC20UOEQLbkby60E138e9a23JBeTcfqq6victuQR3K12a393VDsNcqk2lugKa9zdaotpUh4nWUyzl095P2RN92tnQKXDN%2Fa14LAEo%2FulxzqVLi%2B9nRT0x9LmxyE77ZYUOl%2BD%2FWK2YbwqgsZFp7OcDRE4TPZJuujoay2fIZjbU4egIpeRAr54XuUD4cqb90aDhMxzLpzig4tzv5%2Fgfjigy8TqEqQX1NxMjNz9%2Bl9djPJh56ehtz%2FhPNqj7Tv2buPex4nb419%2BQmp%2FISy3piMofeTikFsbzoK8U%2BRSEv%2FYkf2QXDmEjcYdyM4rqW0%2F%2FBXcR1HORrB2IrJgW%2Bx73bsagK4B9hs%2F8BnFbTHibB%2FiitS%2FeMDydvF11ro0z3RykamMOZUMOnZvsQGOqUBTFBdIaTgS2jLVO4oNF25q2vkrHyhbJh5RMbJio94zrkKcCOwCYw3WzTNbp%2BYhyxiJcv6ZEo5fuQQdRHkDZlLLUECeKf0xnwOsYSU2uE2sLDB5kTFPV0800GT4nVJdztki2v%2B%2Fuu5J73ucAb%2FZB9Hgvs3ljkJEpvQl9sZ1BMsQ4q9U%2BRDDG70obVcyATDXs5s1PXb2emPj%2BB%2Fx%2BYP1qGYCfUOOS7R&X-Amz-Signature=fdfa8c5556b1f81e94eec8a57db57d91c61e31a5bad0a2aaa973ef3b1fe8c6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCFPEQ7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmlDSxzfkXd9dGtW5NojtQLCIV3XgoaAfI7X47Mr%2FLBAiB603nTSKdFmmCYp%2Bov3hKZE3tosvol4r3EBEJ7rXPvcyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMI9P1nJ6acAjzI2cgKtwDZi%2FmOARJJnevpRJyMY9FmjHf89xSNaOof5p9SqCYI5%2FGt8Wf4T3Pzr%2B9kwuuklWJN%2Fp%2B1jF2F%2BF9Ord0XzktScqPAWCLKdlS5kEWlYcbKY4V50pLxHc6xjWYfR6YilqSDbA%2FawdzPyulnOtotVydmrKGi497per02f2hRDsM8GfVMdAh83PIth5Khvbo9GiXH%2Fw%2FsvY3YCPrusE1fAzKUDhFyQlRBZvetkMCbdk5OX0GjhEsgV7e15PXlFUhtbiEj25oYK%2BQWJxKSXu7%2FfzU90FsGxTsdYVtQZNuRxR%2BiJuSmbdfmJ2Yy91wVqiGNlsy92Nb1nTMAKtOsEUtgfjzbK%2Bp6ZofZDZJcATx3opBWscns70Q%2FiisasUC5NkC84dYrQ7PjKesFIz5Lu8SRkwGM4iWM2CXmicFahfqrDgkgpcNHimmohDmplfzy%2FLLzr%2Fe%2FLKmX1wqvqxWYEx5%2FkaAecmeTxb1MxRdB9CKExxzMg8BghTScrfO37ilos0iTpr2rY0wXc0W3Jsu1tD9tiWgeyG8X6sxCh2n8VkjEqoQLfFJ2%2BnrKWDXCZmm%2BvYvHNjI6dbekS1qUzx1mjLlsQO2Z8YW%2F4IOSNXpoA5pdWQfCNcyrKoEZqxkCtGR7W8wpNm%2BxAY6pgFEW2dktAn3IyodzXgwMTEUWuN3qS2j5xVFFQJ4Td9xHr3wWccFzppU9592TQes6LolS0yhSrXai%2FwXzvVeV6hr6G3EFy3u7R18ue%2FSZJrS6CJMbavM%2Bgn6ZqFE4sDntyys1iHiwRI7Urf77xcH0BhIhVFHBbQXDK4aBgZJzbIndwVrKdtdHFh8JjW%2B02cFTKpBG86m%2F5p9vb7yhmqj%2B7k0olrfqRVZ&X-Amz-Signature=c4798945aa9405f30aa096ebad2f390f73d23f0610feb65fef9467d250e2e024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
