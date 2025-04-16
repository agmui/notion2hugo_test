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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYSODRQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBgGVD5xikeNJpyQyXeEOKrATWmaOEarD7QppsyLpCfQIgdxKwmUwAa6O8fECiTcGn6CKv7lypZmX0814lgdnHqJAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMnaaf7DD87yKpo6fCrcA5whTI2kXIZLNywox3H66fcuS8Hj2dYjo6JXat%2FQ86uowfAWLtuDU5CbScVxZuYfGBbfhA3vI6XxxOJjAiFAEG6lnOLXxV6BuqeEZq3sOqGvFnloHUdupzhpTFPrnRo8kd1Fjaxf59dLj888iEb5ecZkp%2F1IcQPf2T1Q73B%2BvVqnsAaitv99LHObIXbYuz2bOsXSLto900yvYMdVy9rzhVuJ%2FySG%2F%2Fo6%2BTrKtwoY8lxGvhziUdu%2FBcJWS2GYk7pZb7TMmsajhDMrvuXYRIWj6K8a7EXPwIogOZCHLy7nHtjLfReO35judncVGrd3mpJEN%2FFYgLYXUsWLTfRfUV8bba5pyrqW89o%2BdO6FdEE7gCwtNpTnEEfnQYr00yvBBEEsWCInY4csUrwEpmdlvtmeVha%2F2TDlvKhNDP7KoBc%2Baws%2BN%2F2Tr6EC%2Bz4givgKhpnK1Z5dbc73RCJ6BQgLfq7WVspCEJyxpqMMC9PBy7D1Zbup3RUkmsQ2kNcGwDi3O2TTRxhtUKe02qsgCNSg4PmKJYw%2FxRn00%2BQ3nO590Xr8LSVX%2FFXrtsnFfYPKjtO6m3abNUF9%2FRvbTcWldI7imqJQRVmLsCJhsbIJrd0nQm9%2FpqfjEwiChXmaRWOYCTg%2FMO7Z%2Fb8GOqUB202oOtzrESeQVm%2FidPEQ%2BNtfgQa%2BvmkYw%2BJ9KM2B0Ny2xvdm5JWuteMIdewI2c2oE4VoEzgLbReiYQdzwCcH9vcdFesRBOh23llZT%2Ft8WtAEmI7l1T1dqAQSa%2BM3XAI4bmzIwbZjWs2LCZXHprZaF4pBQJDZlzmugs63wWZ6GZQH02oXspd0enR0kjAGBOmC8p8CQfOdSGdFrJX4aSU9Dg2U2%2Bce&X-Amz-Signature=1017b00ec811a30ecef97158fc9e2d2a6e93abc70bb5dfbc3b948f389223ce93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EWCVXV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO7pAMD0B8GDHn8763RnZVLVz2uoGU1dT5Odzdcvw1YAiEA%2BarbJMo%2FywbmDDIaa3LlRvvPL58BSDdXSl8Zur8aOckq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDjevzZfTE2NSva3gyrcAx1shfPJi97ahigNKzZMhfik9fhE3k8tujbDcgDNPAEGjGGYg5N%2BzOP78pKm45hnKqxTxex94cGZO1OaZwHzlR9niHaidT7ZL3sJX76ypS8Q9lBuK48oX3DViUqZdOYE36oQ7FrNJ5ZCpMnR3YDkAC56uljrHOjJ%2FSTF1l7JyQr4emg29wi1DG4C6JShd2sa3Mt9hvAh5cRwFF7kivi74%2Bd%2FzMTB8UKvBjrUy5IfxDHNgbJF%2Fc03UdszGySp2VJRnhJHO0ba%2BTbeDo55H%2Fi7OXPpfc6rNadH0mPCG%2Bw7zR4QaHAAdWhJLpjWHWqqUTzbVMa57V4RlmZUmDVYx2r9IFFLsruunyWnAih3MV6bV%2BI7muccg0STZ%2B94n5q1Exqpp8o9CcXdug%2FYN6yo%2B0kYCsv0W645tsxrmI4OIYZhid5dmrtnVQWAnXptGO1q%2ByEMJZ4Eg1S%2FO3L3b1cG6%2FCDioWusbqPLTXcTw4Q51OwVH4C%2FTOwgtiiOWy%2F%2FWhR9jhiKW%2FwKSb0jAku6T0sm4EHTS6sQQ4BpBUtQcLXW%2F4j1%2BLNMKp93d%2BYLpGeJeSGDIbGo%2BRjTdMYsslWDtQGKNlD5g%2FgOt3f9ecmundz5WWHV99p8OJlRjLYrpXKWSbOML%2FZ%2Fb8GOqUBcbPSnoF6Su57vnDu4Ies5mYOC6tuZ9tBs4y%2FRRepHet017G%2Bjr1wcGk44%2F8hL%2BfiO8hIIydQQsL8EQ8SdOI2NzN%2FW%2BNsTe1ZmFylQYKfnmLJiTflgjJViDkv4a27c%2B8EzDu0b5DFQHgjtdcn1M07I5ibM9Nk0qwL7p8Pw0YDVgLehmd2d2luBHfkc7lkmhWxqW%2F15l4FBla6fbLfEkU2kWX84Hgg&X-Amz-Signature=603933232cd2ccec69e168bb4db20d9db23b42390b5ab85482e3ab2f870a3ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
