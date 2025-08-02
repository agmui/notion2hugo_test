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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWA4M2U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0niuxFg7W78q98CHuKSbU6UiJWBYLmq%2Bx0QrEMuIEkAIgKCZhawGEhNOG8Ae3fqvbatTPIv1adBPYg1Aec7HgQ4Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDE%2F8LUd1UUPPT4CASircA%2F9IBTJsWsOk6vVu1eBGACXD%2F%2BRg%2F6mAj8Qh3q2F66tvStu6T66IQtcBEmxi0dI4kbb%2FuVxA5CT6bE7RgGreCbUYdx1hLixSulIJ1vmjB1a9A3TPdXQCCW1D%2F08fCtjUK810OCZIqqnMfjyysQtjAoDHpZYkSK5LLM1NKvinDDgJwKEjTGBTyYuYfN%2FoypRc2ebQ4wM8VaHIYokjLmXa7ddfHVldeoX28fRax3WaXNl6FVI4li9B%2FM0FLvM6jtMYesw%2BR2%2F%2F9XGU0ri%2FWknVdu42Z%2FVqHdemTAduyoBNlP0Yb5%2FIxOyaePRaQsW7AmkoS80byD%2FVLn8ewKkQJlPnhD%2BCVIkHBfeWewCtcJia9DVE6XVoA5TDENCQd61FsPeuaZ6iHRlsD8ABQcaQV6ojuMMDcJ2OairvAoeLfCfH67GHFmvtMwilm%2FRUUB9z9Qvf1QoPCMauiYi0%2FFTrbvXYbqKpC01LIu0W3X3xa6dnESiVS5xvLym695zJtaqW0QVYyeuSLlf0PFo1wp4hUXPnqEsNqMj7ue6ElALdkU3MGsxczi8Y6%2FWEcDJ8Nvew7KuDGVCQUUDZHYJqSpLQ4u4R4UeXtqqiyraQJBJglrYLLRqq23wjjX4efU0DEXq2MKTwtsQGOqUBVqKKeb4oYomFUMNoMrtcm2oogp0%2Fa%2FRgWGWIJuqe0k9RFZAGUwYFGIaWFmZDIloe0y%2B6kmuO6AAPIga8NgbVrvAX0TY11WAA9fZsA2VAO4G41Zbt8D5Psw916MsgXI%2Fxj7EV3igzmnQ%2BuMvax7R64Y%2BIfHNmG62y56Xjlk%2BipvhvZAmX3oXWq8F2%2B3SLL3ZM2acS9QA%2BnVwTFdIm%2FmPhBV2wCkM7&X-Amz-Signature=f06042d7bcab22792857ae93d9b2c5be8a671f478ec1d8ed20a8e2094c09eb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667354WSP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5HTn0SccX5Ie0866ayL2drCUPMLbfvkwSBgEHhXy6NAiEA%2FIt1mN1flD2q3isyqUS3CW0AKpaUmjIMazj5i9umBeQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBnlFHaw%2Bxe1F5T35CrcA6t6MZ9TFdbcjZAZ%2Fr9Yn9yOQYR2HPxla%2FU4OUZ67cbBfCeTm%2FoM%2Fg7NumRgeOsvmiwwXeBR3O5tA%2Bn63%2BSnQ1KOjmUF2RrcQWMQDtOxpTc60NQlyWEDFUr1HxGVoh87KZCtzS3dc%2FqS0B0k%2BseNA2Hsy0S%2BNTlXw3UWSuaJVK0KElzGLv%2F8aY0fUNR0px3oTGBDRHXUAOj10rH5Hz%2B455PrOjoiPv8HBRrblTfFzyn8lUpD1He1%2BC85vS%2FyFiUuDpFzAtzDmx%2FaPnEl2a6%2FWhvVwsLJvO0tJ%2FD%2FlsVqHKbri8b1FyqpFJHh%2Bl2iiJ1tYNjbNVVxyIEulQu7goH6MDYsUGb%2B%2FlsUFytswceD9gDJK7vxXs%2BxcTIGITULRTE1XFFjs1Te5324p1ecXtBO%2FqqELcPEp7xQj1L%2F41EcYjhk%2BJIqeHH7AaH3EaqCayYQ9haMq1cIw78c6STzOOMu36Rd8FYvLJ5EI7TH4VfIDdaOkK0Xu9275EHf7RI3b65LqwqG16icZ0wMDNpMhspZiq8BM%2BMQXrLRI6CmZV7%2F5rCTB32CwpvkQ61zWMIDYX%2FHObIxQeJ6tBazqEKvnt0D12wEVdKPyuijCx%2BDQI6S4UpHh%2Bexnp1IhmdSSES6MO3vtsQGOqUBGtOE5vm6Tcy3vUxRrbmHP4GpmIztpMnORKGsN2oMli7yT%2Blh8Eu4Xe8lke6vcWiyB03uQNQbuF91g3eeAmt6SCC5zX8YlxOsICqKL%2FU9YHnkoURyOyWbs2XYzPRlfTRatj0vYx5WiXyc4JSUuflqLIvQQOKeGGSIFQKtwYUXskdbifRkXmvJTU99mu9fQ3cKKj7HYTggKoNmNrvc3xnCjB7jkmci&X-Amz-Signature=4c3f949561512048360e56c584a0fb696cd9778039b1751ae01d244e6fc4994a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
