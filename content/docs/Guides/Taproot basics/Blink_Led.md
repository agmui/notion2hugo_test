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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODKILCG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDLKysqJEUBMH0yCRC95V8pXg67xjskagUg7X%2FfI9SlrAIhAMQQUMeK1WjaMVATCofnjsRkwikd2jNtlzZvBONiVDkNKv8DCFEQABoMNjM3NDIzMTgzODA1Igx06XIhZyAVjwpYzP4q3APcJGrO2F0NrplUv48mDWNzrDHRdioJ1kNOTmTwnSRAqaHFmI3oTdina9tHIwjCHf2wWFrAAkAHOXpzxoAs1TGPzx8xz%2BUjk8%2Fm5aOifgRYjH%2FXzoCBfh%2FPnqX3ioIC1KDYnRa%2FiWgScawETQog2zuVkFb6ylb1Yc0%2BqeyfiYNzWBEckBZx98K%2Fk6q6OmnrthJDsvcHZ1SMCwPzhw5pDPm7QsDGraQbBZz6QzqvVQFebAUTos0VDZVVN0p9XA0pHFOQx38l7UFvZ44%2FLHaU424kn0AzOPIQfHPkRzCF07cdFFZbanCJ8EwHUGPNSkzcL353GrfxAPT5wfj5u9Qbf9ZspfhK35pOvKiwYGg9B7jYTT%2BbZqfEMHdcvAop3GSgMbB%2BBo9VwsNaxzTLJOm%2BpvoJbvMxiSMYNGX%2FW7ngjSW1vXtw8Ff6CtVBYWAUfas42%2BU77IXtCjos2dMgMOO%2BTch5Byx2T%2FqhuxySi8e19jetP0VI%2Bdlp7dGQZX3Ry5MdFDOj0ttFaNJO%2FoxiYIgrck70Yax4NNOkO178EopwHFG0HSkb8cSRBdXUenX2lg3UqlD3kS%2ByslRWW9y83fx74y4HzO96LpFIYp0lnKOjck2taw%2FcH3hBwF3wE6eVZDDrysS9BjqkAc2yUwo31q4wQ058fxalqtZ3mNAOC7WsMnEzJlfDtuxH6xJS%2BuEl%2Fdz3Uqrc12BGZ7%2Fj2IIG%2FxzCnkYFZpKryHspKJXil6V%2FP%2BCYy6fR1pZpdVKvJ48Gw5oNLpxtypWfStZTzyg7oF8vLQuBGZfO1zLxX0z9Ub%2FWClHahbIF7Dd5RXG19NRGfn3%2BoRCrMJPxnNGmAzt0VRJh9mWDBmm1ZS3Mj4ja&X-Amz-Signature=4ef541b1000d8d1e7881df2b493d020868f8184ba155a09f2479fa5a218c8400&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HMACDP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCrEoiB%2B7cmjtKWf5ohUmGKULt23fST973OR9R%2FUw4uhAIhAJKGPeI4h5SoIhb9c6jmcLIAHh6iNzgk24R0rBevF0nnKv8DCFEQABoMNjM3NDIzMTgzODA1Igx6i%2ByJW%2ByJdVw4WwYq3AOQRNU4HQ%2BBXyxDZitmm%2FZlSfdGJ7IwzStwtodIdvoMMgwFQSrzO%2FS9mtLPfGkfVr3cukH7cDzwtHpu599TYLjKClFCxmA9RRMM428NtC7HaudXd0VrYysELHpXcErs5yIEsQ1Vwe0odhtrLGIsQOAuL0xRTKopYWdfGDoEs87gUNxGKHb72yUMbtOpVVdWmQPQJwvXLUYRkIlpfL36h426aCP8N8VZ6NjSZ4gg2%2B19nw9RaeTscf6iRb3E6mvQEACz2sXFncChN8uiXGXHy35E%2BkZcYH1BIpCJLSwXep2qlV%2F5KFl23OyHG9eCgQ5Joa%2FqeDf%2BBulyk6qAaQiEgrBKqOlTfwnMG8sZ33LXccBbutJzmqsIfVqZBjj6PRE3GF5qzBR663KVpm5acwvFGV6ST0SOSJMuXdBmAgg%2F65bt0xfxmjMvLFSo%2Fm3mLsUNla%2BAMaD9byjDZSKCV85PzmW4zXjFKnmu60hGa8WDcUae6UVrK7v79bT7cFhlbmeEDNS3Li7X1zbkXB23nHrmnlSGQ8kGEintnKdFwhFT0Ka3pJTQUFOieh5fkdHBXVmwteIlGCJrmcAG5LdWqp2JR3Ktf2cHVVvjV%2BpymhZUj01B8zWOZ8u78fxoi7XW4DDuysS9BjqkAakRG4JiWH%2BReXaMQ0GC7eHxN%2Fftpj6%2BJHCB%2FHkCzqBSXjqnIfeEiJVXw1vPrGmZ0dFUI8Ui32ZeCjKWA1UbK48QJ%2BbH928GEj17JOyn0Dp2SeSW41dsMWJtL38abvyaYChzsIrkYUbtfy0ZrcHX1o8Vn2RRUpIQFfMTfvMvm%2FcIYogIIv9ksH2QRxp8Mi2R%2BR8ttLZAjrFWeg8h%2BPyMJEuIgM3O&X-Amz-Signature=4884f79e0ad50d05728fd630e30cc5cda3d7898af3c62a0a14dac54a652fe5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
