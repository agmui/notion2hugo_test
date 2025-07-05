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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR6VAOIZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDxGBHjI9%2FmRrBU4qyh7h3a32UGgppauQ640tPX9uAv4wIgeY%2BezyhRGYmQ1qAtDxgdnLae1Fsvkj7%2Bg5JBaDKW00sq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM7ziNOiwtq%2FrjdclyrcA9hZEUg%2BUFW2wKstsGkk7tpiL%2B5bFyACp7D6eDJOFI6cJ%2BOAUzLctnnLSwZHOiXVynvC6JOdEj%2BIQAWEI0ZeLy6VoNM9XjC3c8z7qjVwvXkrsDK3gcpl0apIyWWaahy56JDcpySg8sl1lMxfjDwo7LwwgP2AhF78C0cJ9deVmVuifuO9iOi6M0zNIhOTay27AkwgXx3l7Nw7x8kFU0mNSLQ2eT39xcCfbOpvmA8CYYJTzFUEMlczJwPmI9Il3eLihPzB1vKn%2BFKexIbHLOamnLfR%2BgftSoMJkqeJehVccCFNEK1mdfUlTID%2BFGbygwfYllEpBptS5rHzEZIGj4ywkVbSH0%2FO2da3XwDJbBdx3Yn3E0dijGh17LiBZV0IJ0BmnNTGpyWZlJecRVyXBfYwZ1cgcGsU11VUUi%2BURhDraIeOzNBqjNybtHcuuuS0EeO8rco5%2FcQG7qkbPZDbLu1vr0blIGqNQ53niQ8sxHm0rVSnGr0r7vL%2BKM3mJtsK5dlmurPpkbtT3xA05vNysvjEWSvuVz8lxTyxcLAa8paoQ3H4HMPzd2CwK6Uwm9pRgF4Oy6CpcTTNL4K8xqWCevm8yZWXMJUO9uSpN5xPa45Q5cIZ%2Boc0kd%2BqxL2jyi66MKOqo8MGOqUBo8uDd9KPcLXzbLfJ%2FQM%2Fdiz%2BWlqdFX80d3fOS%2Fqb5Bcjn8ve9vzR4%2Fdnx4mzs7qdsGZRMZNPN57Oru4luo7YRzqsFSy%2B%2BT1AogX%2FkSBXqm2xAPLVpqEMKekSLusXGgLGbrXDR9YYkjyKYElaI91J24oL2aAedCWt5LnOJkOn%2FnLkAloJ%2F688LEpOhZtxQKKZmP%2BDhRHCBemjnpNEq0ns8f7eAk6I&X-Amz-Signature=725e19e17a8ecb93e8af3ab3749535ec3c60459711141e2b9b3464d546eef8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPND4TMR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC2SCcnfjAfVQzSgXi8VjklPPXn5ktiwPF8Wd8Vqb2emAiAKmcS3sJvPbREljRgPZhyqMLtoF091zuzpKYtN9N42%2FSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM6rocmLrCCO4XdCo%2BKtwDH%2BojzVKrYTxXslFUWjgE%2FP4zcbGLOaKCHHF5z%2FQHafHTMl3nI0PL5xNMkKDYrcQukMoYAjMc%2FOJviCvsi1D2b8REjLmsf%2F5T2Onb%2Be1dsXxfLeZqz2DuBPsP%2BOZFlfyLuouu95Orvgm2GPSKrWcnovd9qUS3X2kzeflFb4k2EeKK6j1BM%2BYzUDakzaX3LWZqKH5rnAdJIqq1NTreN%2FjrlyPMlYZGm%2Bb4EZnvsx%2BbarvYfBRulWkHpzhe%2BskNrKsKzJhUtPcIUrrLsg6OF%2FNRgGL3TUB6ekbvluNf9zah3aCHGGD%2BKK00nIuPNxo9OYphR3FP3HFNO6gE6Vq%2FCk6Y3fbb83Fbh1ymvK92KjRlI0zAd5bnYmVoWenXgL9CUrtGI6HpSX%2BNa8WzG8%2BrcPOncgLDPR%2BUFyBmhgRZZG2FEPM0nz0EqaMSny%2Fq1uxi1yKr6Psm%2BC59O%2B%2BX%2FKwFf2GuWI%2FaiCVLgZ%2BVvp%2FOplQIHG1cRp8PScp9%2FAQnp9d9%2Bw28IDJuTCsbXkaTrtTAWtBQUJWMpYyexXofEcTrMWWYMVgdkYMdYTkXr5UKtHU8QX%2FtdVrlz23VOhSsZXoF9SMJr5HzaecDdwdykM%2FhNz9TDs25%2Faz%2Fxf4pTGSWk1Iwka%2BjwwY6pgGS%2Frn3brfcw8pMy%2BWMiqLZNrgD7C0bWBIcFL6cgRvrBPYp4XSRmGX0dU4JjBEGxpQaYdYl%2FLgdVhPU2v2haBUtRqlGyfZNnXCsjY%2FSiQ1%2B5QGTROuSN9u13NeJZNcS8NP0efqvgWjD51eNk1tA7R1reAnl4pP5jdeoLeaqmFiWk1Lv8hRSTAWfzAR0Y1uZQjnh65VWVzx0IdcRY20d1JkfvoyCpk9f&X-Amz-Signature=5471ce4639aafe30a650412ed53b3861522f0a54c92578c41e600f08ebbf99a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
