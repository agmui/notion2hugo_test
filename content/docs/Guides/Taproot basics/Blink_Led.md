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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666667MIOV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJRDi%2BzmxxSOqTYqw%2FkfjgO637ydTXAWtD7YoSv3O%2FsAiEA39eW31xKDjve%2FjFKTMO68i1Rh2HNhXVrhy1GMLLtTUoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B7dnreJvVL9z2EwircA6v6XhzpHijQALhfuU9Y5SQWSpWd8iY886rcw1tLfwLHmXjv5TzMC%2B8nzYEAWX8oisNCW2DxkAxvGgHllWknc%2Bsy6eaS2SXQCPkszWWP4par4NOAAy8AxZ23Ap6axOPJXu8xVgoKC9QhgofNMQvDKrBuPOm4cEH%2B6c5n71NnEKl5ank2lNkKmxQYYtpmsZn1rG64toeEe4zqbq1XN0aymQLMjGgn1cO6d2XU%2BDpA9Nt7W3BEVMX5SrFgJ8x5BJYlLed2%2FJf6BF5U%2BSOgdNZGuQnz%2FFQKbGS%2Bo5eFKkmX3coJs3xWl3qZqGnJWc015usyAZAJ6jY91NDRhMI6QDh7W8v%2F8vzicNSOQsF1t%2B5u860DqtrKV5j%2Bxk15AeNUcEuGxlPjGeQzBYPOXDY8n9jKrp7BGaBtK%2FKjhyb0a6%2Fx4fqObmbBQfzzzm4MifJlcCOcRLDoEFuLHceGPb%2F8S7aMm7uWJlT0p20v%2BdCMgSl6PmrjhPOoE7bvdo7Lkx256NpKCjc8JTKUQFLKKbWfqu%2BiG0kn6ctJC1LIiqwiKraQ4HDneeuZG250HPvN2uJcxOo5ctnKCrNy6XOBI6Y4z8fa7mZZjJcgQzHGUfyJ0t2gdnMuX5BQmLsw4O%2BgqyucMI6P28IGOqUBS4m7Fuvn7Hx628JWEWFukQ3%2FlRihTM8k0b7NjIAyDclePO2WNO9jLD3FmpIkGNH1khj20zGS9DMCs2OkJ%2BwF%2FsIG8Iopkrp9LRQ8BXS07e%2F9lA4ZSNuSgDhwtsyYNwUrSPKo8ktMnt0P8vZ3CHEWYcK1J%2FPrnTo1btgmVEjlzVc9DCCEhVpaT2lxhiUEBCUKdwCzuWCNUrtZxhpNg0cqGoabeJgp&X-Amz-Signature=12f757610ada0f93d43d62bc03a584465832c20ebbf5c4cc691ebe6fdafa3407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKRV4RTC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHUaYbh0383d8qB65jRNAaj3G12sAvZaUoGPIRmz8bEAIgIplzJB2aFVEEoupmxw%2BZY3mqwMKxqctTDOT6ahP6sb0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAIF7KZVLWi0kj0yyrcA6hz0SOpTXe3FjMwcfW7hUXetligNdAGffKmnReox00kqHTKQZUxBJSRwJlE4%2BKIrfzvEVoANSB%2BQj7AGatWd4PYO7ddnbadrPGgMcs%2BYU%2FA6hDxOw%2BJ6fCnB0lJ7358mvYz5uVtQzC95aZi%2BMNFHBe7T9R2%2FEcDFhgJoE%2BV0KV3IjsMcXdn5X%2Fw9mWtxGCqBq%2FGoe5NRB6Pd8fsRoQIop6v6m4H1kAWUi6hYMxbNmPAzS91Kuotg0EnwrAcRdCD0%2BJrK%2FvSTcFdfLDtO8IsURJvWO0lbNT6M5IhQtYnhLdHjbuYJK%2Fso1qrAn2RaIAOtESe%2Brg6ExOB4SKmEvTEGdvANI5nB72CCRync%2Fy7zoMV1qMlkP%2B0wF24DYFVZpEBCtGOCAalZKNGNqogcjeeLNDtN4VxbB80IWqkO5ryAmCCZ6ww%2FfodZCJ4iM7rpZUNo9s0IrXl9E%2F5dGDKv3P8hzbNdAo7rH5Y06SxrX9cwOpo%2Fk2dW%2Fymkwb8WN3e2z48QUlTank7NHhFgSdS0%2BwPexrBACF0L447JwCK2ymYnuBlFGlwKNnzMLhe60zLBtRZbJwJ9gQStw1CBi4bJVfdegKiwFbKnNACDeaFR7BK%2BWYYRRjk06lAZCfNK5zfMNGP28IGOqUBn08HH4%2BjJ86YCZMx3xcauGVCkPbeU8U0CH1WMskPhDo8%2F5%2FHLcTGr%2FjW6rSbdGB6oOCO5TsFeLTacNAAQfRMsWGPbR13FBtF68dU6FVXZb5ZvbxfJ14%2B5Pnc1Id3briGWHwwBb6ijHFfNTXfia%2BwgGmtVQMtbYDlBxxG1rxBSUyCyfCtXgqXfBMipWh4sMcL4QLf1oR7%2FGFp%2B2sXS7BCKUTQjiEu&X-Amz-Signature=2a065cef95b1ed14ca88715a79cd68af47dde3d525d3407b26ddac567762f422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
