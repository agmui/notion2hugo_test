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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONIZFAY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIH9L1b6h9bTICS5tf%2FjDecxD8XhDsBG4uqWklT7sHjmcAiEA9%2B0aMAmAHdpoKiLgbq80bWf4xBdM7s3cPEqbixs5OvwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn5sHxWawN1Z8b0ByrcAwz5q0PlZ9UUpnVZ5QQ63lblYUi3H61S5VitDq%2Bkx6FmtO9YW5ZDadFVDay5elQ1UZpfv0lYIPea%2BmOZFDb2gJZgFg1nfzqwonWrNTIHaOggnm6E5WPrpbd4D5gINdxSOFqrkGA1dDOCixUvKdlt5JUHTFaJ3BUvRrX116QBUxb78Z9XUgJ4HIh9MAtnyTGIOdRl58pGF%2BI2TZknt6bym25oLH7L%2B0c8wZj10hmCwUV7K1pLeK1vUHF4yOZ5cJaDZnb8Tn4%2B24BY3PYqEHmAX8vAoPERER0Z%2FTHTM8uFiarXvBS7lRmzTS5k%2FHKDCzZZeWs3sLOnr0ejKZylNoZyZMli6ajfg5ZOz7gtVwAr0kXH5sC579ZkPc0Xma7Gi%2FR5ji8IdhV2osbOExf%2Fz1zyKSQ3B7u0Qmy3vp8BQ%2Flg6WPbWkHpFQy%2BDLw89Myp7jSk%2Bwaxqpw8PLZEbiisjjcr8%2F30SqpujBULfqH3WIvO5JArkqFRYKklyBpjfhsq%2FSCTPOF87twaShYvLkERDA4AI%2Fr4N%2BlDpiYvgU24FXAzQvTCgOQn%2Fw1XcX%2F6P5l1XPn6iXheT5GEsauINlhccBQOhvQhcAiQbbJ7Egee7%2B08iqOMH%2F3h24dMrLH4hJXeMJbu378GOqUBeulPMPrMkqiGcf4bgYvhmgbKMRvIZ7VhJcfwuxUV0RHJfrAUj1akYURKvqe%2FpOhkR%2Bcxp5TPI8GiGTxboDbaIAP5JV8WhzrJT6vASZ41OgwHY2q4zfEGnfPPxC0O1KixvQzUiJ5QAtzJBpExOgX2YDLQ6zBVhG%2Fsa7H3OUQPhxEWDP%2F68awl%2FbXqCbQhMY%2B9pB218mf5450%2B3Rv3ULfWutOaDMz%2F&X-Amz-Signature=f826d9673dabb294e78bfdc8b4175d158cae38b7ef0b8b60e9db15aef772d337&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNYTXAT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICCObxae0%2BDG107CLnyQhr0L92alB9ZOBrYYuZN2JwtNAiEAv8Hd1%2B%2FQv6xYr9jeUncddwi05uRqOonDXPICWUyVcxUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BD%2BDzlYT4TeqrWJyrcA13kOJZnkJNB58yPmixgiFdmLibzoQmeuetn3J6oYM%2FrcvU4iySfJ%2FdFTJDqrZb8%2F%2BLclShTpvv67mY8xE0hiowHqpPKniWwWX%2FAjO8zkcsgZzZU1gi4BolmV9bE15Mix35sXa02ZWdTb%2FfjZ5nVBXPgF2TmQJQe8%2BX5d7nJFNaCPBKbrN0V8dx%2BiUAEBOPDexqdzBE6sPrKKQ0LetDbudVW3RAhp61KHTG%2FlRNmZ9E8ybRHChQOfqstb9Enhv5IblYm2tKcqbIQ6KI2dhHEXySdaWFLs564OeRoi5coDZKiReIt54FSdKze2fnGay6amTmeoBf%2BBipofEfe4skva2D5tb5%2BtiZhjRquTXeqKAMnnaKs0YStE0E%2FabUL4YiqAzU2BiLNxvANxqaLt7pLsNCtWmYYeNEiTEhGl5DR8hfi1u7AFRz4uLft8DOYSY3jnd%2BBuX%2B4FK2mGGKPZ2Jxo8GVKmq6EEKc3C3wVCi6dxwYEx7fKM0pesgC7SYIA4Nm0o5n1ASmcFcRPD7cBB6OqMyO3xa5yjSpnXq2piA19KrZ0e2XjvgNpqR57mNpuMmKHJJ9V00QTT3Eb1DvBWhRzq4XNY5ou%2B7exJezTsn1eP5iP4SGkKEr57KVTb%2BzMKTu378GOqUBybxqQ0LH9QJSLIoHUtlF2bMeW%2BIDmhTl9WGdiva%2Fa6uJuandgrOyS9%2B45mFWyYIc3PdjWtnJM4lLV6f78pzH3NQFY9UYr%2FRU9gDA620bZ%2BuxOLF5j9BOaVXOAJaLxWAy4FyW7j6vPXIwt3Ibnaa5RaLWnNpFMiw8XV3GKfwt3z6NJjDJ4%2FkwyAK3ybAG8dZYqcliXbMmzTYn5XWtBGiQV7Wvyy5C&X-Amz-Signature=3389c366b27f8f170a1bf074f5b63785f52e412f66c4fcc0df2c53ad0cf47e13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
