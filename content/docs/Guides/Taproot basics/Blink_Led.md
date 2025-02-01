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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIZZYY2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZoT12KJxJ%2BXhX3kIhUtQVm1jK9nqHJSzA%2Fi47TdiJ0QIhALUtg8VcFsaoDNrhKVQb047u66RPzeokM7yLTW7ERqf5KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDay0yqH5ta%2FghJQq3APiaxnSisB8P6eMRfZIqlMNTAXTzWnhBQwaOC1hRLKjJJQxcykUmMAc%2B%2F5ytXtvKwNTcxZplKb%2FAgYqBNMIexiLckHm6EMxXICELD73GyxdURz9AUFIkaK5KI9nsDoZdXiC4RpuzoV0Rhgx6Hq%2BkE1fCCYxoht6xruK1nRxRuQ3F0OypOHOo263dzawCScnNsDTgNe1oc5nSRDPS5v%2FthJTHOmpCUSwEWtIA7NVK1LZMh%2BpOPdaQPEGLzbwGv%2FX4boFei9uE8diCf2Xyc%2BSjiPKVV2EOnZzxWKZ0Ob6tDSbESESVZjUzSt8t7z4Ir77x9nJgt0JtYWc1sfIgUMnLy7jLRkGVSraV922qWvqU1EJBssG6tR7hYbiOruTESoxTAwRZOSZlXCnKPy2X%2FmEClQNvevxlUu5zFq47ockwSEMAxxQrINx1J6RAw9gnuL6umgwdZlN3D9vNjEDLGgx3tYmlxxV8CIwgi5%2BmoPkXm49YF5AXntHTVvID8mTg4KGBk7%2F2xl7LeN3We79OPnrYTQzcYr2Oxuuvnis%2F4aq3QvkPrn%2BNjxQunsqpOj1ApImFhN1pYkLoz2LPrNUfE537%2BsxQXfz7LCoSym%2FfwQxU%2Bvx%2FIqXi1Ed5FezDfDhiTCewfi8BjqkAXIGDwnllxi%2FvS2O7sAbb8FcA80c9TuT2Z69maglYr5EwllBqYz3Z3xrsqqjN8r6u%2Fmymr5BfR%2FDTCICZnlcK1QxJSpnWxvJcHtV1YKnBMvaU7ddORoCaw6OgpkEhZJYTiIDeWwljoafqiL6B%2F2ELk9QBbRiIIfGKWy0jeQKqe2Slhr263GRjqEIk5d7rGQ4py5vjcHoDYiuYXMCeWOFcUwIE7cW&X-Amz-Signature=267ec71b31a7b9ecde75d68e85ed179439d822e8e43a88acf235d512e27b2c29&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PM2XHYR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNbtBsnhaG5QG3cF63ZM6P%2FZVAz%2BHelqAKXNSbUh8c7QIgEYoGHb%2B0M%2BeblZBi8ofLNy99yb%2BN7vl3VMQ%2BEJPjerUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxjCwncTH3N2VoppCrcA1Rv5hjyrLLwjxa%2FE44Hij%2B0FvnOb4u2UkFkHR9DKgUtFoaeuaXAwkf2R%2FN3oEcRBYn1uU%2FY%2BvwewRh7SwQgKZSrWrssDNEMdZjaQTPOWuxvAlNRVfDVpjSLz9J3Mt%2FcDzjg%2FsswIwXNjTg2TU%2BNSDc5cd3anpEXx%2BOMg660OD%2FfiSoXlAOhAmaIqwG7NmK5r%2Fg7GnYHezvukZU2%2BnnXQ7WYufWmch19dbaAVuevSIX%2FWQeLrW1TGxQkoQMEL0ocOLr1aSrU9J2xpWcSK1dAWQptGb6dG00DA%2BtiqrkydMkY17KDd%2FVoYi9YIBuhNfUqjdhLtkwpJxTdarIjgZk2aReof7L6fbGBTTeqpiQRvJDvA49xxqG2YZW0%2FfScNvvOX1wOQ3dbevUqqzkZIBaHVwk5jAU3QxXXE%2FNKYwF5bgu0KotrppRZjJlgApNIDqCch58R%2Fya2IrAhCTqm1mwflEh926VjwkMJTUkhAnkX2F67%2FisgtIg2r6crh1LKhSXTg3yRqGZLdAeGpfP5SoC0hYUugvZ2aRN7i7oDqC1ZKgJQmkR3Bx8fpdYcEmnch0mA6oFzKoKAlr5JJXLYLI8ICh6wIPhV%2BxzB%2FPuVc%2F9x7Sux76RsZ%2Fwta1pS4gOuMJjG%2BLwGOqUBbDnBF8a3GVX1WMrVn3RiH0s8Jdl5Ez%2B3oZcNLKkZOqEFhPclIIpIBPn1grQYs69DTYrWfWOaI2wOnVrC4tKYeNMrtuUbAEo9KT6pG9%2FR7%2BTJ8EkhMlE5H9y6DVbQSTtSuivyead9lWhlh%2Fjf1GxbMQA4rQp6qiseWuOtBby5XZbRvl3AEhc7j9fQH0lMirJH1Bqpv7Ui%2Bktb480Zv1ujoaYNsMmf&X-Amz-Signature=641222e917e35c096bfb5aed817b82ea51a45f2ea07f4e9ea40d03234a399d17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
