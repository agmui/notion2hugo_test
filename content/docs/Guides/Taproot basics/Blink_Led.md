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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRBZUUY5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnlfEtYlHjpRoDFegqygGIF0DxGQLp13NivH%2F8%2BuLJlwIhAOIdH9TLCsYWGeiGnFnskTtPh3OOkBQVlE5kCoKw3Kp%2FKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3XRF%2FTBBzD2fjc9Eq3ANFrJSowm5QvrrnwnxSein0W6XJ3hH%2BMzlWUzA7WPj7stm%2FFg8IXa7sSihxson%2Fr3wgsnP9tpfQmyfp8LODBRvVxkdEdracw9WHlO6e1ZG3AyYbNSvOqoEGL4%2Bw5FhkLDxTOwSTNA%2B0iFZh%2Fb%2BM0OyrerhkAEJgdTz00SUQhQIrxwLA73yO70wx5k7RqcodpYytfnastuPUJ5P5mUoBc0O1nnuimslkmIlUAuZFf54VgkdfF%2BqmEzak%2B%2F07mh0kaJF87q83UkwxT6PFDHEBCkIfqHCtEkUEf9ik53XMeqYRZehsEIP8OaSIaTvVquAHWCQt3669P82OXO%2FsyBlmVIza47Aj5CGCeyAcfvdTsROMHojlKbGIqppHNSNCJbAMKVVz%2BniSWDhKnq4nLWQAmShyGzfkukyAkYd5fLHZVaLCTD3SX1p3Ttrz86IDB2J2X%2BjgomcWTEKruKq%2BKYFNFZlqerjUipqjLZhcvdKPx0GPGLrPtnUVy9qzJQOmIP8ru8DA5fi2pCx7Ji6ybHyX4zfykdeF40RhbBTjrHdM2JiO%2B87JLDsRhvOxHbhO1yu3Z9MGkOzHyCnyfbBmCoxLOX6KzHcNuM%2FQtJtEIMEwbBrtHiNCsl6KXqmxdtwMqDD57KnBBjqkAbhPqwoDH6ZAJwUUGMpPo%2BoiMofZqIpETl2jjlCB0%2BdvcJ1F%2BE5n42Y8WV6bOXPJD%2B9%2Fe8zMlOWhyO5mM17lNe26a99zKCXjvbQxfA59gslRbNgObqyfVC3uGREHsNueKXgs%2BErr64gHihunJN3OpHPNNyWthMenBggBaYnvSSoXy%2BAgf9X%2FBFs31MDMOmSMmawQ8nOqwYG9VGFoshLPO84vfw%2FA&X-Amz-Signature=a2f487a939c2390075e86eade92d7114ec90f95ab9c99ef89da51480e36255c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OTIBDF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGy9E8X%2Btzv0IjiTAKTa50aYTPm12OiqDRkqSCwHBTOuAiAjCF9oa5FZIqDqKasxzRIQz41NOXZL635cYZkAkuS%2FeiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj2xr6jBxmHbDO39KtwD66XDm7RJXruovXSRsMbrEFkxQKkDUiProDTwYV9MiDnm1EQyFzXeu5v0EzT14%2BW%2F2ssn9gJlGAcusr5x3wWZ%2ByJOpBEou2aHvcXGBENmBdx7kpk9dPpoD8upHUtpBYcn3pA%2BGxmXZhOQKJFMJtBDMMlSOBcILjcUleRh3cr%2BKvPKAxGfnhqavLIPe9Ld%2BWV%2BITXB9UhDEFnMjpwS64GjBkL8hhbprhpj3Cd9iK8XF%2BvfHHu4yrqp8zUyTkIxVYDL7uxMIfCuefTLtxH3Unw9xNeM%2F929qWzAjUVVAJJzi%2BVQ7d6O%2FJM0Aqk8ko68qvEXP0BIZVmpFGZ3LA9ocL2%2BCoVUemYpgfu7eI1W1LtVcqePFGJoI571gTIDnaIUjgHQ3SmFcSNAT0fuSm5F8YXVDHCJIcUD0Gc4DJwOBrePA5VBII0VHexWBZfd50O0sGTM0Zpwgt1rMxTtbWMr6pNadndYg5AR6RcZh639nGht0yWmtU7f1w3MhFMKzw8M%2FD4UkQ4g2buakwqyhLccApY76%2FfpHDimNhsNhGKRp9KYuawLI%2F5e8%2Fys3GFnd3fqzJ%2BAUm1mWEvuU9az9IQB%2FYmkvsafjFMmLSHkP7mwKf%2FGl3jp4zaF2WR4U3LWMVkw1%2BypwQY6pgFzdjhIGgxcNxshwTc5spjW%2F5qH2jsB0ddZrQ3XKTKjyoZELcynSyXxWKEy%2FeZHenfOKhDQ%2FKKDzR%2BYEyMaT9NUxIHuqZ7OxGfz6%2BzYRJoDNxuoJB2jHmBVu5cQhRaYtJYUH%2BM70nMoFDgSkKqMTOWl4HBBbu0j1tmy%2FCzAxG3tTTwYG6P02rzZsIRv8YZk5OVW8uSCIoUaFrJAB1FjnSp7MuoCp00W&X-Amz-Signature=16a0dc1523b72946fccd88f9608c7fffef999dfeb84c0915dac0f64b7c09edd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
