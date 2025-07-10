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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXTIQ5BB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEy762vKU13ApA8Tzk%2BpTBooXBq1n4nljGiDZhVOlyhAiEAzlkksdffeR%2FK6p8c7ewWyMC%2BC8s%2Bf7IYCSihMw1zu2oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhRv8ef7V%2BjzOjqPyrcA6wUxPR9IK5rI3oHHiu8OLOQTb8VpcVqzA6bXYyLMBeJ41stI8u2KpRNWMfIBqkwUyehGGV2h2tUlGaj9fEzHlhbkSYOVgupg1K%2FbczBZCGkqjLPXtY9BKQ8AMFCRAZXbKC%2BC5DWAOJL24T7Wdixhw2mdcjoCp4hT0OSjD%2BJcR7cXHE0TVNNXUVjFcpta3tAmb0OBtMhzBPEWEbK9xaR%2FbTw6LfOi%2Bayr2HJ7ipNdlbpNU4CgfxGB9KxhJFywNwIpxodkhZ050hUX3NAJppnVCuqX1EaUbtHHrIVz1SPLtJdPv6o2jqsCWOFUKKuro9tPypxN%2FAjd2SC7DrhLxUeoh30lMBSndXdlx2%2F3nT81U5XyIWAZth44v2YzNNUxSheY3PuJ2nhdLxqziTUr3LKcuuvuFQ4QnJpqIKzCWNcGnoddBfDUmVGruReCSR7F33vKkGDizu1J9nTeAt9cAMgmqLh%2BnGXQwGgZS2DDdVeyDOkWJ0PGiS4eX9PjPksMODBIl5nFXdxTYVdjyn9Lh%2BRNQmJUqv9%2F8eSXjcHfEIf8DLNykf0ygCzp%2BUWGOOsUR9WMRn9SnskWRXwGs3IyZhzchmCdY8XgghbSftc3Mmbi5JdZxMvQOil2a89rKkAMM2pvcMGOqUBXVy8MZGqRVXYNBFocyGjX1I0RuzRSlpa8mKXCNMx3SeT%2F1tekvOPq8%2BqnbU4eQRXv4fgDwJhTLVT7AE7LX4O414bx921zOrslZ4n5%2B0gNnRo9cSEankkg0YN4nqFGSeBJWIxXnHUycfWPoaYuXhFi3%2BhrPgxWb0GPXFeCl66OtQUCzCHLOSLssDtzbQWL9UmhXy5E21Mr4dS98D1iu7suCUBCd%2BR&X-Amz-Signature=2f557f3f157aca907ca5bc3a7ee3063351c37743dd2219800a21e0491f604b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKLUB36%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa0JZ2Yeac4QtCjJ8EtYa4llraquwBlor1q8nnfRGH4AiBN2M6ZssSgnNCMjG5VsGR7PzTiqzlrs6lnoagXo9q9ZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdDYi5ID%2FdYq3w06KtwDNDztuWDV%2BJJTfkiMHR8Y3Ej6xqJZ%2Fmcqwi8B9JVVUrhoEhe94eD0rbshWgq1FfmivgHhdlpSf3a4nDqgx%2BYb1eUz%2Fxzr7I4HhW1wd9SGFIcE3aQd5j00lDCiaYszyfamT5ZKFDvpqJGk8NTbyXoZZflKSpKgNVJugG5EaS1K5JKx7%2F1wJBZUM3BYdggCiXJj2Lqct3aFBekY0fJai5ZnrmaLKI9NqwcbWWQCstNnb4alv2mfkTzOiC7f%2BN1OGtCN1vxsDMdH%2F5mNgP02gVcjh6QGhKIH28hpdqGPsnHJHV%2FsqRxC2GhfzIiXQDlPsQrPzEuZXQS%2Fh5GnKW9jj8ib4Vh%2FsvEjlZ5xWXxb4bl3hLNd%2Ff5KDfLg1Kp%2FXArVscTencs9GZRcSBkovjIoZS0vDWwi9yd3mQFTAqn5Tfmc5qBl9X0O6hADwDt7voft1o901TvxQlvA%2BJlIifIjz56JlV64kU2f0dpVcdzVf5voGfjlDrtOH4OOwjECUnyoZt%2BMnFvppdtMrzsQAJo8HF274YW6TBS%2B3Gqto%2B13OZqngi2DTlPwN4ZseZO1AVWDyRdG0QvB9dK9Nu12WlLqG%2FQ%2BH7CWb6kXOfNigKHaMLypvA53lrR%2BAFtHcVvDQZwwtam9wwY6pgHQtnZM8jiUn1dCnjz5eJ5%2F2BEOhWO0hQRYmGgXhT1APEFWPw9qewaFyxRFwi2nLxHtgOwCz5Q%2BTiFacJi6k%2BTem%2B7CoH31Avb%2BiNrwvkVOYk61Pj60EuSCgFjxATqf4zL48R4ppTazG%2BvdE2Sk9MqGlgroWtKcdTkphZA1sP6yvplwANmVuj5apQs6b9VyPGP3S5sWPMb%2F3GJlZk%2BKgBJkCyAAx78i&X-Amz-Signature=e1c0d6a2cf0a55a7d26375696b3c6f0cb86360c9b7752d53eb53c99c70f1ce98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
