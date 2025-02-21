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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCSM2OUX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHP9YiRpu1RLFp95n4e4ihhiABYyBDcGxC1w2KQx7PfwIhAJbF5dfoGcVGdaNWLHVpjMZP7lKJNC%2BvGBm2%2BSiYWLUwKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwqfQ3yE5089hCMkkq3AP036tolkcxrJZtGZKqcRsbZO8H7B4JLxdq3k5Q14tklPgLP9KNm4l%2BpP5tckHSyKq%2Ba9Q9WWG2ojafoedpagJSFP%2BnJL4WHbfJK6Rsny78Cl0z3zHj%2F2D3gLY208qV485D0%2Fh8EdZgVEeMpMLmoKU%2BO6OG7PUFFVG42QyYF%2B8Nja5CElyo8Nc%2FwsnHvx%2FnobOzrA%2F4cMg%2BumdSIsr6PUOAoGzAvTrttBE6q793iz40c8k7dkHSt0mmhi8jeaMRL0hUp%2FIRCfZYQ7vW8dbCFO8FgcdY70Rh6rfLH5Vi1hVXinkC1v8SUMXdAiC32pSOaY8S%2B0yj0Ax0LwtPDg%2F6sjjYWQX6FHBm46ZBqIzLdLF9gSXyw2%2BDujS7h9n7%2B%2BTTgXueYToDRid9DzyC9bljh1p9qhqTTWw0hoX%2FZjMAEpsr6rxhjs%2FlGLDGC81jDLbl5g%2F%2FnA%2BlcfoKe6%2B%2BB7PU7XhDeqKzKOkAAGb%2BThDyFGRLCx2d9c1aZdFzEUXGCQLTcrAOewaPV40y1CWHeP9cH6AxWMX3mT0BAwb%2BKEywIFoZMCcQcSOMB80fasqDZaF2yjMo7p2TPNc5vs4x%2BtMuBcGtI39mcf4hHlBma514sCh2Mf%2BMfouvfmEz9vn7UTCNveK9BjqkAfaUszmT7KKbT%2BOA35M8XcygoYhUYjOhbw%2B86XBUxdN2QlAC%2F3jQYmxr8gUXnpg6FeEpYx3criYOU5hA0fG4vMwQ5h6EdhdeaesTFBDovODY4gYfYUaysDuX6ahdBdibvtPr5kJdRls4fyoUfpT9PyBQuxf7591gqGyOigZAYfkdKvp5CpPm1A4trTmd2LGEiTC%2B%2BZGfdbFSHKudqPPpCzUX8JZ2&X-Amz-Signature=ba696abfac1669a7a4ea3059bb7bceeeaefa79d93271360002155c5991460b53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRPYVUJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN9svEBBVvlSbgOrd0UBm0k8phw6%2FUWjvxAxbnNN%2BRuAIhAJOGU1kUUBX4VXrmcwJ8P63gnhNzT1kPN9Y%2B6GgleGYlKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWYUvtt0q5nl5NJWoq3AMvjxQueRzQpY42BWe9U%2Bc0IWJmrrksE7GKO0KGjYMluvvEQOhVIbx9ko1xnXpqNXjbewqrBjAAQwfU1%2Br3Y%2BCDlYQ9Jv9p95tfym%2BBrycc3mxpBH02iL13QXllMqfEkqBfXEUJAbfzOfHH7L89ysJA0%2Fc8phRiynKMbC2yxVebCfvNpYanrWMmuIVX3ipd9McX1am41tFBH%2Fq2SOTSIGMBGnR%2FYtN8d4B21MJRZpclrlMdi2ozaURl9reJjFTCz7%2FXeTLAVzjeRO6x1FEAaPN9YOlF2tn6NJUhGD9ztCvJb%2Bf8Dgbe%2FWcS1nP0P0cMTMOLcu%2BUieVdMiWh6UOG4qEFm9XBBvO74V%2FrG1ieoh2tKCsrZ%2BCH9%2F2wfUclGFmA9C14fL2TXruDNAqE8Yz3dgE0P8JzmWICEpoAyx8EdeK5eDTbxARBKyy8zLn7b6A9bhdruzbV6zVeOQU%2B5qJEGztqbM1tA5nn7tSgJqRQrj3Xi5hEIFO4Af3INjdCKWSpfZ8FbINCTX5NgQ03wBC0vK0YQHLjLiCUIkwb97otwRDPfuAXQoDYWR7tOsriLMQ0sDOtW54FagYahGXltWTYeHB650RiA7wIz9HE8edrONlhVs2U9Yxw2PR4BfxVNTC%2FveK9BjqkAb4RRNPd9N6jmxs9uFzb5itav01AjIbxjsVdjtBr%2BuStBvbQ5fJWAOlAvqnYbza3gFWyJ%2B2Xok%2B2JxKc82rE6otshlQ%2FdnXqH%2FWZIZXnWzGFjwwcp1T3nAZRKn5Ggp9O74v0zZU8r1kSI4olSFQvi7Bk4D0Ve5mHlI0Nt5qqRqj8TXAzmDUeg0bgAXQMZ3jjJEQV2fdjgzuwQpQxj3qD02Tt3F3I&X-Amz-Signature=4757c48815c1628eea38f1860f2c06eda98a7516db3c73ac72f7f7076629b7d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
