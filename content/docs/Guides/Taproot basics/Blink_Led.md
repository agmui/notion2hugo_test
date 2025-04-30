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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ET55D7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDZkRqu1SNXOqph5m7iQG78dT9ZSS%2BkbnqagQF2Us1r%2FgIhAPLFB3z6r5zlJB2jsEzgk5dnhGSGnh%2FwZ%2FSYUMOckFLuKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEHshj%2BNLFbzSPeUYq3AMAqZt%2FuyE26VKFZgUrNWrqkVDnqcGgjyERagwOBC%2FmUgpYWgJ0tmZn%2BNzP%2BSm%2BrIjlmHGWB17Coc5yapa%2FsTLApnBy0Ou89fq1wPjLUXnPbB6f2A7o4IKu4pkJY7eGKyDi3OABnY62RzC0v%2FmJF%2BhuSiNaeaYDXN1t6fZd9ck2wUZYSN7yJvPHlcZ4si1it4zCIqW3UHlQgJklePK0Nk7yFGmQ3zF1pX42hm14M9lPGNn0NyWHEWP9DsCYceiZ%2BSsbJE8Z7f6TPmSuu6tlRtmjlU19mC%2F01MRzilyF%2FlOnvL2moIp4K2OVqVw2j18LPJkCy%2FKzPowN1NcJoK2OR%2FVsYHD%2ByF2QUjemmu%2FtqAv0P9Cup61GosIFrmHTrnQ8rqumkoRzNTJrzWE4M1amztC1Kja%2BeLZ3EbFVG2eVYkQHtWftTtcDfIQmgL1IpbBRPmAiNg9GxcjO3JyraSNFUhD60EpZDnyi6uiiwEXeni121oth5ZTK6RXnPOuyTIyDB9sR9GdHu3Q147wNs2tsE6a7VwoQmtsB26Vk4jV%2FMZhmyZ8PQ6TDmnmr4NVawXgCRPyatx9sE5UviE7eS9zrK9dQx24EwGKWRK7jatgYi9x3NyKmoAZGKWzS5SMS6zCWncnABjqkARfQKhTF0cRmXfztCkkooaGN%2B6a8z7m%2FG%2FUJ24t9Mt4nSTlTs%2F%2Fs2RUj4NGK088MqglI3xqsy0bIb5ahdbWabnIiU%2FX4YYNJg4e4GMcFPmp2Qo7gzEwTMHxaA79OEdPMqJ%2Bt4jRlryrJjxKESLQW48xbjDEBhEHPSdd8NFovluCCRJIfEtE6U9njll6nS%2FqWoFYp%2B9uJEabB1wF73QyntHS0NtAS&X-Amz-Signature=83b448a5a5d915251c90ab231cb555f9d6821fa8028abed0657921a08898f37a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6L7KSOS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEybLOp0MEQDLCf1xAZWamUKZHE5V3qcm6b7WHsMF8zwAiEAyPerkn7p7OyTgRDwjQ4rwaiSZnSyCAfUApltrjqCtoYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEI1fEPVQwWIdqURVyrcA8TlU%2FOmrKLMekkVM9vsOA%2FsVUupnrR2f0OI5lXeHbaTK9pOdBBqmRXRq5WqYi1cwpkHGRf5QZOmej6AW06PH2%2BjN77Hvlik1d4BJJoLtRuqayGN9l62ZQ%2F8%2B14Lo1XO2xISwMg1gb%2BRG0HZPUuweymJbIAX7iw5SsTAjvCyqptniO%2Bl%2B%2FzQXvlkqRU4VOcZvbzyMAMVf90BzTZ65Mzn%2FL9x3Ph%2Bi6%2FksyCzfyBngrwxF9JrPPg2DxUd%2Fy0B1ZW678I8GqvaoNE5S5TnhFq6k3d1EHIms8GazGlExwh35roGMcmSn61yGuvsnqtZAOwTbISOG%2FctpEx4o%2FJ9IXkm4JmaiIfn88db%2F%2BnapWSDQfOwcudmiRdNcu0eVUOH%2BdBuY4n9Bcw4B%2F2tfS%2FvE6HJLS%2FOtN7%2BASAFwe8NNT1x06spiym3gGi9VFHOrUfbAK6Eo94ScNGde%2B0nzNbv1ac0wl0YiLi2bFt46r%2FOUZ8H5r3T1wbkMhlp2Flv3D3k%2BPkylhEJThd7jDMSNkMWQ2fk2uzyja8IdlCD66bs99RxZ%2Bi4lLE0d3J6Ikd9NHd7YCCE7ATtCSQ3aG6Ugg%2B4rnLpmsS5W3R7bopypOb7K6oGpxxw%2Fyxiv0Ov6sIqaA%2BcMO6dycAGOqUBnOS1hcYiiU87qbvt0lQDOll7GrM9a6zSCAfjPfnwH4wsQLSmR6ARfcUyMGcrVJyeUXjtuXyuhw5Ad%2FYSLj4R62VCvJRJYcR03r%2B7vHpspJz2nRB5JQytKoHFV24IxOlICB9eMMHvSsAAGEZCziqeA24iNi7qUPxnZHfzTijHjG3LmfDFLsdNJBIIAnezIp3A1VHOEzQ2ffmXJ6y5ZK5fmMOk8rq%2F&X-Amz-Signature=00f0f631fd9de2f8a174ddca76584810cf9e8ac5ce71dca373a8071dbd1dafee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
