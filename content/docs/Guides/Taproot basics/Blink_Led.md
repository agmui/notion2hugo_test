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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QL5Z25W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWS2EF5px1wQ6VXkV7sGTmXF3JB6rNPVrEqLFSt%2BiVyAiBu%2Btl61ROJBeQ4raEHV%2Bxm3LJeNun1NB9OcGCHjXr84iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfItNlP1bxEPEsuQLKtwDNPgMjqECjFjyXyfcM%2Fv4k0slCgarMG4aiA5YJ2NceWmxgTJ2SFSiA2Fe2yXbgVjiyUJ60gpuwVE9JuKYLCH6UED6Ou78k0CLglZWj1y5jIekabLGu46eeZX00TKyFxXUI8c18zSYGA5iyQFN5w77bPj0ggrGBV7Kd6E7CHPtVxvFAr2SC4q6ffugbnj8hJDl0FPsT%2B9lWxBYbZRMcjiZ1ZRF8JYA1sLRvpSNdq2276GxmDvA8m8hW3VWR00Exaxx%2BGT3dE6kjBLUyhHuv89Q8hTqxFJP22Nw4ei9p04C8LQCtKyAbRnxNHdNJMkUmhPgXOYN8HC65zKmsErwHA6ijwK2WnDRyWeYtBd07jPOwzSwYpdepeDpoKW2qvvvSLZxvv2j8sBnLYFyUQoYJx0xCq0UFUKJpT5Lg4CCF1q2RLUx%2F6P6y2RvXv7EMd%2FlTaKEy9hZEGG4sud6HNXF4opJlkDvtuhXN5i0V1l2kmvGg6rps9O5QZ9PhxXnKsPQa87uyF0M1QtEHlP2b%2Fb3KLknX35BfR0KITXe4gIuI2j1kcYVYCqS80rwzRbmtlbqhCqNhIBgftlvu5dyW7q6VkiLh8ZH83Wgjrj548ijPy8htUDLrSVT9I%2FmHrJBnwAw9IG9vwY6pgH3LZ9uNpWjNU0yBIgNrSd7KR6B18lpl0Gv%2BbJxjEghDo5xF2M7yOLNenBOF1oP1xTULLnc0JM0Fy6usY3GyWk8JoYsiyvif73sM0W0jpESdVeIrs6kJ3%2FXJwiZAcLk6o8UcPoGrvDGVDai95M9BN%2F%2Bb4FyTI8oSoBtz89VR1y0V9WvMZtdF3WSz07dR2w%2FsodqZlyc0x1ZZNv1EjjGS3Qfanl7mP%2BS&X-Amz-Signature=e433157dbd74ab877fc5ea5c67998106f509d30a3eaa51db5362847c13604562&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYFYLUZ4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuiRr5C3VmviiilVlFy8zK1K0T9oNv3b9L4rbKD9EA7QIhAMRSK4IgU8qzHD3RVxMhtKKB3gtcZ1tgh6YiPe7CWd5YKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNnk1etY62pC%2F%2BI6Uq3APfPRXaB0hzWk8aIcawrxW6%2F3wmwNTPU6blcuhT4ePeV%2FxLKxJJqKhwyn%2FfJiz%2BBymB7GHrNDm4lueGb33VdO4k6s7ZZOs2O1EOu8MSHzPGVUh5DDyFJzP5J3OhUlHEclF9Zi6lfz8iYquernWadqVmNFqm2RHF%2Bd%2FsGZwRx%2Fwb4dLA2HJK5KsViPyOyItdVV8EcxIxHY79ENLZLyoDKZafFRvUaEBknH5SVH%2BpOwltUVFlmNWf%2FiUUsV9OK2LDc8irdcSxydN0NA1T2yDsMaVav5e7wKE8hcUsdVUFGtS9pyH37qyPSIxEZFXgKFAXH9wTuOJm46cpbWFpx%2BBLWGV1wI%2Fv4LqGfdyStH4A7AI00nxTnu3RSaAgzFTW%2Bg1cCGmuXtU1e0WCClciV4IRcptoLZrvdLMfPn6OLhs3gfPbUOduQavu8zX83oU7yBqty8Rqtn58oZVS9%2F7KM137KaxJ24ro%2FHwCfblCAx5b6GeDfLgvJfVPK%2FcfOi%2By1EWtXWhCgqcFwpC7FSxWSWNVoeyy%2Fea%2FhIsU22lq94pW7mkj35vWVYQvYV5rUxyLVW5OxCTypZHCCXj5aJl%2BwLXrZhksPdwHHKqTv%2BnYfGCyAYw6euuj%2FtZQslrSqL7HYDDdgb2%2FBjqkARsOq7VuqnyXMvr61P%2B1ToxgNJTCOtkPT1bqshrnGiiExOogdI%2B5d8ni8mG3%2B0UM4SFAgQzuLecma3VL4H3dwqbJEvdom5tnQU6l8TMKOdQsz%2F2rX9kZXbEe0arV5VLTS97CP601zcvbqOhBHiWwU38R1%2FxGHXfpYyxhY1QBueLoS0GFGkUvp50M32rv6HlFHiL3rwPFTcLD106hupC2%2Byp1H3Eq&X-Amz-Signature=0b5f14938de6f9a9be67c3cb96bde38d106672161073b65eee5007517037dc91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
