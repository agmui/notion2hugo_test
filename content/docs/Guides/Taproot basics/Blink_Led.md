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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDRE6IDT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDJMYpM%2BNo8ij%2Bq%2FA%2F%2B71VJrUxXQ8E1RH8BVV%2F1PT2cTgIgXaJGB6Jqdowo3Kk6qsXOHBZ5XbQzN52XbNO3S9%2F4RJ8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3GGenpQfiW23a5dyrcA9czIEbiqIl2REeKM3zLnL31k7HPNW4ghvSPQzc1FH7Tt7wR9JhF%2BEqZtwWq05iVfjNi%2FAmDg4S8YNWWmM2bIZV7ZTqZ5QqYi%2FbeIi%2FF2r%2FcQCd7fvr5UqL0SnXopsGMudAgNkS%2FD1ubgseBl0bnbjHPgHaC%2F1UNIoQFkX40m91RGKoM3%2F4G2Kj3D%2BENq6F%2BGIV7k0pKED7i%2FL4EczBmRV4ZReGm4bnQhQaFgIpH0UILDHdRmT1VQVrdHXhADy77HZe97UiPCzZ0Yq2pR%2FijHDRIAWU%2F29Xn7xQF%2FJhjRYoVCgj1bjDCg2hEEvQtkiJATkj89%2FeXZxeNCvuXYGJBpl27yCmlW6%2F2BJrTPZDrLDBgNQ4U%2B4j0YvnrNWvHuHDexms57rMPrgC4YXmc9B110I3PzYHN2QaZXlZJGAe%2FtdNiUH7njDElmGhA1ZJsG12dNsKd%2Be27MGKHq7yik6FhmXpX1717jhoVWEdEJWxxGd06T6gMhsgBgO0W6DmWhXpV0jyg3CkjXGD2DE5TuOaTtn%2BlbETWtlsvx6W%2FdcZ3eJgfOhEQBTJZCrwNSV0vyDzcgFa1gCx4Yjw4H3hjETy0ujp69xSS2iqx8VP7NCHaOgXte7UroXw2PsdiLFuBMNiQrMIGOqUBmurEc3MuS%2B8dk%2BdAlZmwGZSU9d4IgNmJcL5MMTZFTmvm0e0W5yffkLn4ko5EeFkgL4xvYjycU9Qczjq0WrUzpn2g8CCRl%2BR%2F8r%2B0uYfixDEZWR5wmq%2BNBs4ekvF8KQQONbQMWAJy%2Bn0ZNzlKGlEqWuD0ohhE7udxT0CRacl3nJX35pgoPO2Dqg%2BjWMcj6fjQAqk8VBjqyiGgs4O2daO5kzj2vJlZ&X-Amz-Signature=06f5a0b4a649fbd7f188210f29bddac117e9376082da336f504f6490554816ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPHMSC7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEdUWPhHq48dkndsPQVWYzCgVw1ryurhdObREMR7VfRcAiAgLS1zXlfRUkcWecv7hUXI%2BjAg7lf9yPOXiZ1s6EAPhCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM34BzAhcHKKDLQENzKtwD3LwlsQ7dVMi4vpPI2g512AW6Kjsx5BTRimN5jhVUi0XDyBAhaXKnOXlPUztv39dMpUeXk8C%2F0H79dIb77LLyYdRsHEAGkcPkoci2d%2Fm7CGtuAFm%2Bf8sqBzrmkseVtgrUbHdfTwrrAOHXzftZpAteVv6dCpcE1Y6G6IwPy7tZfaZlQzOSs%2BNVFqR8OumeUZxdslAVrShY%2FCIAlJ8nkepLBpeYXMoOFpTBnQZXZFs4568yhi2NW5frHsEmMIQ4hOUqER08Tm0XMnWnVG%2BU9aW7O1YijdfalZ%2Blr6md9AnsGRJtd8rU8tJtkkihOZX1bNWLzxVwhyvWZlWSbRz0x7T7U9xK4XA3zu5t3yVhitRsE5iWkXlwk6INV7vXd%2FORNtDQHNjHXOqMtiYw9wZNK5yL%2B6KxRlPmx00Exwh66l8Wj%2B44wIGUw%2Ba%2FVkDncfXfl6OmhGq9MAWer7I%2BwDnLYfvD9mljo97KqezSwO9mWDywRkd6p5cvgoEj3U4rHxzxeM8Eg4lEHgB1RcAa7dHSgSoCebqs26julIsp%2Fe1JkDsMzIJnkCEaVzC%2BHeKZR%2BaeGeRPucDW6J9rlxs2gKOAyF410soLk2N0A%2B7Z17%2FwQzvG%2FBRQMbD5Oy0%2FttUzJbwwq5CswgY6pgGxYe7L7Atx2yhTWcEL2FDl%2BLg%2BX7rLR%2B7PC0v91jXEAJAkwqW51oerniRPzXQzohQntCCBvj6PZAuwyJX7PcdQ5Qt8MKDB3R81qIDL04LdRD23O%2BBGoYsHDpPDzMfCI0jkQLeC9odNDguedbt43YtHA7J%2F9RVgWTo8DxRhGS912LODiuuPx%2F6uWcolq%2B3KaEaZ4PQVMhoEMY%2BHYoL3fVZmgh09677p&X-Amz-Signature=384741474326e65c349b7f041885210e008cd9a3a376adb047dcb5193b5ed348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
