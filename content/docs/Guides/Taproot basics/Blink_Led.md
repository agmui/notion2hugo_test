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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52K5CTI%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBj%2BBTcfoG0bTiGeSQnU3bQBWBXGeZuufmq1%2BjoXSRKHAiAGUk9Xo7Bd9UxghFmFJQGo0nItOMS2fvUEtOd5c4pTUSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSfZlefTGtigv48ndKtwDU4RNaGOdhMJ7Ktd1jlzQ0mGXmJJAaqLjKwyXn3xP48VMEALAL6OvB47ygbipNPhLaFmv42rYjLH102wW1wsVnXn%2Bce1XIF4TZ5dcGV69BhjmktnVMGsIuiHnMnNMBJXsLvFVDWibw9zPTuj4ejUN1A0AeB5DzDTA0%2BdryW1lKX9Z5YboKpU7XiuzhFH2puXtjmett7DgupKPyZ5R3aJvyE%2F8E7uTEOai88FsTPFtZT2N%2B10huWPbsDD3QURrEgdYrkJ8sQALOoQqzFUaCVef%2FZuXI8y3knsCRY7C6%2F0S%2B6G6zE08cEsCqUlmnyzMxbxw1eu1hsyQL7%2BeYuG8MZlR4ygXGGFh0dm1qMtdf0HzjjYlaCBP%2FtmPxagPeeK7AamZM%2FhBP0SdpiZEXm4sG4dn2J6jYxWoO8cS9UXXBn9rg2sahEfmqmTDE%2F9G3AOXmBZ8pjG592sL3msIp56gzH%2BQ9hQmpJQE4p93OoNtaogw%2BHvIbLz7k2ZPoVrZoa%2B4Gf%2BeqQgV3AjpImGEx2q%2FnR7te9a82rV9xbMC8saue%2BmpAcFqAcjvvUU5uopguoTu1Hq0dxx%2Bhxmbun91vv2yJ9jhmolBhzxfU5Cr4Wao7lT4X6CHAl2%2BbU%2FBIA0wrK8wrofyxgY6pgE3e%2Fda5D8zyUQg6vUynp1rBVK2DeehatrG81xcWiG%2BQAR67YSF8qHqm2wANZbHC5aRc3ACL4HBoX2ZxwkEiRq1XQ9Tpza5lV6LB8Mk4K%2Fk7yN6f02EuYwaPuqgCr%2BBwB%2FckSZvgJzD39akQ8plrrQHusqqtq7wWcU%2FYB9%2B5zIze1x%2BV50lGS510588l8ghODePmC9odoKagnTNaRF%2F2teOXdEksiH8&X-Amz-Signature=ad96f4895c7ce07cccc12451c353d50732c8d33e9a6728c25cf1d8786fdf4d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXMGSUH%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCOg7xY4hW%2BO0E%2FnmkdY%2BFrHA6AXLBrznD62VZSklS4hgIgeLFjkN6dTk8SsnN8yLZ0rkPv4diK%2Bs8qNpF6isF6aSMqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYlVtGlJeUSVk6p7ircAyCnltozEGIm02UADgZKAR2olw6MMUUINyCasDDyIo6qWzDca5qsbnYxKwYOMDBrDbLUCn4k1xQeed4Ay%2F49VXIsMOpfRBQa%2FTZ4UYKC2a9ZWMt8lGjfb8yYEZYt7HZUPXponNZ525A350MhEw4NQ8nbmNTNWl834jO5AJYp9dvY5AWELK4jNTPYnqpxFN%2BCPeUTEbAYh4lKyaopFSnUiNXoaCC%2BC5oqBFjyGfWKmz%2FNPm2iYNq4NHN8H1UlG1W92XBBg95RaiWVrUOUVwjJHsXLiTKZQInjSqktG6%2F7Aoc7RWUhCoIOUI6qEHZkPvz1mUdoWANlDB7Szhoan9vC6Vrc9fMQN9nWOq2rwX5cyhoZj3sw6o%2FS%2FkUZu1BDMwclcXiNPcMsvl6dLJKYBAtSUZSaW%2B1T6HZ2WOxgV1vCMAxzA5TyTYKVSm2OFId%2BNlS3kpQm4%2FSHYgz%2FqlAt2h%2F530WaFpCcc5jooWKkugcaknrM%2FFlrAhZhLJAI4U3qhNEXk%2FyRtkWr4DVjZeZoeZPiSRxFCaspeciKeqaXFD9Lu5F%2FtP4IYeb2%2BhKLjkWOQqSlzOaJeXOpHtvXP%2FRA9kLQGDl3ydrncUahDPSPXWO7%2B0AXbMVsuiq9HvB9WbYTMKOJ8sYGOqUB%2F5M6J48mQNuW6HZepnExQf4cOqpjvw9E8sxaJtUAz901%2FrvKQotbK6O%2BdSJd%2Fhca2rpBpHoirxa4aq8kPpr8v6URNZME9FZV2GsuVz0rG79ZJhb95GI8tFjJ17X7Z2pfwmn18u174wP2%2FxczfI830xTvs93PodWQac%2FVTwu8MkrKyxRRqp0VjnXjLqkWZgKnhrjnmSMaI8aAm8mqfzFX0SdK2RFV&X-Amz-Signature=5446ec60963257c385da412762680c7e09a0df3314f082b1b42e89ff787566bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
