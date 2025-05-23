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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LSJSM6I%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDHyghUaALj0pcGwZgvVHQm4hjDXdj98oSeojlKhJuduAiEA7MLzurYOyXWNhQ9gJlhRe9BNOvHd3JIbpBCo6Ix2Oc8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrN2aQ7MREMb8WI9SrcA4sUhKh69tEtCFAmfPfp9bCFZ%2Fg1%2BUnrPh3avK1J63RFl%2BbsuuMAdPOhhcGuADnLfLLVc6GazWkxD6ZwvqoyRb1Ays7%2FryP9xkmuKB%2FYwlWLwiyHxLkI3brtiD36xAR7owCTlmxvCzR5fvfRS24HhTjCAasVYbMKvSYCq8eAiZbwTW7fdE3ZNgLdNpkAPXt6APe%2BaltVtyrgHrZ8Z0teXVJ%2FRpTPBfMhoAOocI%2FfLaU%2FLfuYBepy%2FyjowgydmVIj21B7zdc5oRyIzQujZzOgUEqSRK2KTsfBgpDAYj5raWjhWxGFplwSR8FuYtuMKfvAMNY%2F1vSPXcsBI8qaYSOsVY%2FOwYfslAx2narx4et2revE6CDlvbKPfy4fElYnJ5uv6CIDj45VnvNiJhw4JgQV3EsTFN8unFPDBBEtYj7iIsYqQDEpQ4fHvTZa1vscxd0jG4eCMcVCK%2BKFUljk6Ts3J%2BqtlSFaBLU7IjuRKXwv%2FNT27tfEvcDbp5hWA9q8%2F30hZ3JMkm2v9zt%2Fws1el12Z9gh8p4%2B14zV2tz6mmwW0kScrEd5nHPlw1TChudRjvo%2BBLIfHca3VUVrqkxvxwXLj0Duug1YuigqPUAjWFLCf1rnIGcTicTuMcwku0cqYMNHywcEGOqUBkzWPwX%2BoxM3n0P50GHCBCoHZHO7sfK%2BAI%2BUdG38nN8wicce7LL9Jme6OKn32HyQasIUF2d3ibHtdNthPpk8Djme0FOZNFMhQ2IFyv1KT9b3iBy7wUZpIgOFncjUJXy0NhrG%2FZf%2FmiCBrbNRzCiGsi0cK8dGKhGDPMS1IE7PgquEcUPmAS4Dm1DbqPmOPLTDnvLRtreHkowW87Q0HmC8MUuRlDIju&X-Amz-Signature=f66154f8e59501241b4fed2f1029d094a41ded81f4d0f3d4ac1c63fd0d36adde&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHWMRKI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIC49Bebih5wOxt5OasFVuISBXuyhoCgeg3fQSKBd2%2BSMAiBI0%2FyQYiEoA0XkKon12hXo4ZpGgziP4avf6cktdi0RKSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvMgjwqMoJXZ4b0WFKtwDNrKs5fF0qXfhWoPMUqVb%2FqPsSzzGaMgnwMeMI5s83oZxHGR5EMVU5hyNXkMZCLsx0sLUW8cOnzdl%2FwbgBRag1CseWOF2zVlSL5NhRQxk8ZJhA%2BsOq9PKap%2BH83yj0EeuXjYp%2F3hp%2F6lDukSS5cdM2kvbgAYUKjXoJ1iAp2JwPnPprvLDJgHe%2BbwkSFS%2BVNGQ2yw6vzdHUlr5LcsgwQiGy%2F5S%2FF73Fyis0boFMHmI48rt8TtlepKKzPSuPqnF7jmA2Qqq3D0P3iogc5UKxanUSYELmdYt1nm4IxAajryzk4JnhmJNe3tZOaf3izE4Xv0gDE9JDnKtzV4lMwh5IttoCNbh2uzNh42JKGZfDLUCW8oACBZ6lh8Rrh8HqVdhZuUTWpRNGOGewBPz%2FKnGWKV2MyJUxI4gxoRwsZZeLYAwp9tfpK2mTvpmNEyX8NrpuGsHbVxOuB40Ca%2B8tUEAB0PHK5eKTayxK5VJxtbf4MMYGLr2KSO0GvyNhApFdJQn5k7deMvTemPESWPEUk1b11K8HdsY0HwuaqO7By4njV3VrJj8Q%2ByCoQk1Vv9FI6p8aAmvjbXJq5A3TrtM4wGzkWWkYW0teCDVFF9B25%2FUng5MTvLiuzTLr%2FQHomyZ0OEw2PHBwQY6pgEe7v0JZZ40s4cKkdqFNzYcLBHCIAXNZF3hPT%2FmBwPqoGOhjmFeJ9EMN0wqgmc%2BehSlAwuj768bbeA03vecrTqNPmOoE8g7t2O2AOqKar3iKGbSi8ihmjSU%2FTU%2Bx2EyJaEf%2FFLbOVvH9LzqNuk48Q8wqS4ungLcwcpADrgpTVfHY9%2FGADEtkSpm1ILk031gu7srpNUz7OAF9FGBOsWxfkkQTFS2JGu%2B&X-Amz-Signature=3286b337183f38ec87801b2b29c3528b275e651d0a809a2f1972ed194724833f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
