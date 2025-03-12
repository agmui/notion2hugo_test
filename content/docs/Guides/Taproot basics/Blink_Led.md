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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM72VGTO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG%2BvBbrddcUFpifGppGJJMBQdev4kg8JnhA6OItgQoXYAiEAt%2FUucN5vwtpnhdMrqBJaSFBqoglxlhfsq29lS4NRR%2FkqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK2eGLD6jntxX2GYSrcA1UdinOb9kzkrHXl9RAzUy8ACm3JLD4FcbpUAQ0X1BTzZCN4%2B5eGNdgHd4LgYABbAtv0%2Fku%2B2QvESG427CYise98LAgpecY1cQfJWbyahHkvvRuVCXZTlSwWlbe0%2BrraOwwWIQ1Lp0PA3HVfjXVHnxThcibLO2vl4VsF2ny6HZeBbs%2B1rNTQGATL2GmhWJJdOQQQk0WJLykBvX6Ysxpc4RsYo%2FwiaoW7wAu1WCLcJmXf5J3IXmIeIIux4qx69qzAWYU0KcGK1IXjumWWwPtWmI7V8TMN2qG083k7S51K1D0w61%2FmGAlfAcQ8NaF5MqX8kDWyMdGHg8BOnfzX%2BgxEIuC2SEoW8gwikZzz5nz6w6wD1TthC2zceCAJmD4nBZ1w1N%2FWG06ThnDniPPrWjkfkbNVwvztjKAG%2BA1M11kC7VQ0pVG5BWWkFvSsCeWK5H5EIJXdD8qKFrzI%2B8wEAZYA5V1neQZEOX368V3HMFtVlrn3IFdYFBlo6dPv0fuM0SGV%2F9PYcJ30reNGWvB2TaUF7T1dGQn7nUEuyow9dgSqL%2FzJcvLTdB7%2FdQlqkWKK00w7B9NuMSmo2s%2FFEB8od3fLLQ8hL8LCJeOiRBNRgNuzXey7h4d%2F9uG5sFLDL0CSMMC9xb4GOqUBBEbN3sFwROS7W5DZvdxtNtlamMj%2FnTaKlwaeYPWzqLAZw%2BvLPOg5CSjSyC2eZHeweXmidUYAonxFa72NgAbLEnwGP4vNmpiMKavcEokrsk0gOlivHygr88rv4TS%2BeS5%2Fes4uB2AguFQsR%2BvDfoTIGirw88fSYO%2BTn292rCkOmrrIq1ypqoCobSOOObSXqSB%2Bk5Q8f9YVpbspghMSPGhuPfzPnpvX&X-Amz-Signature=5ae2efd2b083347711080fa9f71fab8fd4c4d3f771a90e1ec74deb772de08581&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKPJ7ZL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCT%2BxTsxMng0egJn9yybAyLPqFtZ1dYdyHXrvuOgaB3kQIgDCti1EaqZGPRqBc4HVsJ5GGRRy7zfkmoAQHg08%2FDBVcqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BySeHS%2BuZzbTa%2BEyrcA4KmstllEbDRWR6JsvuPsvXNQVtcLIIHXP85Yzv8yOSorOVz7hlFMgi0XYPZg4xx6SeDFP4sQuySqyVJXw4%2F9i61XqbY9kCUslq1xLMDInD7LvkoDV6FivsXvYnkuhf7ecfYQXTvDnnfthNsHrlspy%2FTIUbo0jcKmIVBQQPZsDtjoxSIvRbMy5UmNAiGa48MKeD2uehXiqQYYbU%2Bho%2B%2BuoLfRsM4aEpqcIIA8d7mEyShsHlkG28mVqT%2F%2FU22GEUplPdvZ5y%2FZ1WwtPdQhPi20mPTtv8IRYYWVGZDXmUFEr2NGGl2aL2oEsZF%2FDHrr6eaMjSq7kbS1Ki6RQo0KfT6j8n3C9zAcSNuNZ3Bhf25A5PKDjsRfYS2%2B4FgTAw8a4xGuK9LLtGllrKjKQHI0x8OeypqsnqpSoHTG17mQdWV3cjsZnzlP5mZcWs6GWXcaONPPPwiOc8iYLsr9jtKKmO0pyGFjaQrD8%2F2bhHRzWluSJx%2FM119x6DbL2LhPfA8uvpBDHq%2BqLYpT%2FhmzsXOTEsk6ethNv3xyAbbmk06c0BSlbig%2FPZobUPPtZy0YpZFhYyRTw0bJZ8hrEhDbpQgWWZDbDQpKS8XMTdK8vXP%2BM4kTDdqwxFx3wQYR%2FmncUcNMKO%2Bxb4GOqUBCRSUa4plRl%2BGlMos5faVURu6nCAb32EfNI0to%2F3GD4CNMRoWNuGbQssy0yzIy8q6zyYkiHY4GhKJV4zUPbO8aE%2BlcObhK1btnc5CNUj4WgVNT3JCAbMysjliM%2F3wLgVDtZ1EYPvnDZ2trzgGoMvK3dARpr%2BxpOkaUivcyBYD7%2F8a459bkwprnawgijKvPP4ZeUolMzlS9d4pSKq0IM2KOZlArrLm&X-Amz-Signature=68c39dddb6eb15e36d53b4bc05b67bfd34b731c1079747bd446bfca2f9705449&X-Amz-SignedHeaders=host&x-id=GetObject)

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
