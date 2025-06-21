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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5BUEBD7%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGgJH%2FX0Dj%2BtBT1iFEiaaugTD3%2B7mcJIoX4uP%2BeKveTQIgdj3onrbUHcSvYek3dHMLuv2KGHPKWd77VmdB5w9O8qkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKsV7h3MgUyBgk5RSrcA5irDNyThXLgWMkXzzB%2BP4KIhNGMhN0BqYCDcW54jlKadpr%2BClx3kh6QHf88YhrSnTHiflt1KP%2BDc%2FmqBcnRi3cMaKes4UrEQB9XkagtUpY1kwR8thxkRFcLQeueszuuAHTQd6cTRb%2FKfAmHvUyWbCXrcOKKw6DLM%2FtqI3iZYsyebDSeTI8YfXN7cCJ17n%2FfBuaLid4sh8CJZ3ETdZFa1zBc6m3Ypx4FYqmRFEwREDB238Jep9dpudgksGmAmRaZlNhtxvVOmyHjF7H0t9jPKRAUgJZ4iRAEU%2B5y0M7ukkug%2BiprI1AtARAkDIqPavDfUw%2BWASjM8uAF1AM3iFcWUxJLh%2BVTCMD6TAIINcGxPR5VYahtgOlIEdiTwFg9ncyDeU4uYKkCKYah01uoXqM6jBCUSpTwAvSUGLSURYpInEx8rVqtRBgvDhJhl9GShyuvLLrmgSZFhO9y86OH8D11oxgwLdDXwfA2GIqku8vFulZ34fejopgAO3VJSzxe2anJm377xU%2F9cGZgBxfLM%2FDLET%2B659iYSf1xAA%2F2qf15aL80z099ULTGuSFcuwWrZVGAzQejtX0BRVKo29TJuhY%2BrHkdTH%2FoR3n%2ByUYxafRPo32bvjL%2BXWlNbPDShVF%2FMM7R18IGOqUBN9YExF00UPfgW9PMBky0OLbM3at6pBq6M0282CN52yC9a%2FKxU6QptGMA5xPuDjQ4Ppe0%2Ffrlt7SZsP6HovHRLSTy%2FEWrsHKBkS8q7nhFTFjsaqN7fZ6rMCvvrYw2JfIpCebSol7cqMq%2BJ5xYgrGfbag5JPhKElAyu1zUEVF9OPNA71drfhueToPtp8z00mioIYOMllmAfKzzfHZSmr6csC4EkN6r&X-Amz-Signature=d3c60dea2738da462d7ead86205b8db5683c7451565d4d9d083f9207c7603678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONWZWAN%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPsKfWA4ydkCMylni2KHtdx7ZRRc6DiP%2F%2BhY6bAW8oiAIgV9bYa7eFTIxw%2FBKKnTGJsWLxov03EzHGnISq1zl3ZvkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjD66hRLMQZbydlxCrcA053WKsREfFh9CfjkSatUNIPrdxgq4qmyFCegYUr572b8yFOnjxyu9fnBio8Jp7o2BONaWvdKs0EH9PWvovK6JP6DUNfa4j%2Be4lIaZ5eFJepAzw2yzdrAhzs0wEmr7p8D%2FLfAHdiYmPnm%2FutMnoVYBX2P5%2BNxznDUgmwqTpr4APVBg4%2FMnqrI%2FelNy2dyuBy3%2FYnxVpTorss9aVBWNFf3hCZ6q%2FQJNNI6ZoVEx%2B8CQtClZvg%2BHOqRg%2FOoMT8fdyF8pBPrMX%2B40Ueadvh7oVa0gSlDZJ%2BvdOFgt8kJI1rZPdeNyvB9VyAzMNp3rr1OlbtIzXAPfj%2BFNQKJek2yJdx9Mam8YsVV7QxscCu7%2FLh%2BycwsHQ7qAAQbCZJsBleNG%2F%2F4yhohh8GrIu8%2FejTYZaRxoLWeWZHv6goP8F8X6sZye4fIja82gwhBR2FDnjvgSizmp%2BwnRMCNIznXciuCP5z%2FmMM6Ct5CXaCW1Z4EORpwzbOAYiVgsez4RTGxizpdAsieWJyJrEhwruhsQcYGW%2Fm3ZntaGpfYsKUOD2wKDe6prw9KFCzJjwHpAxO1bB986c0dbe5shGPE%2FGXR3eRblR0kIWzvHPcQuD2%2B7c%2FaVwN2fyNBsOFgnKIYROWM2b7MNOd18IGOqUBV2rsiz5m%2F2%2FmQ9zgDK00bV3VG0HeJRZ4V52YDp78iMI8v4uUfJCeurEXZWBVoWHvJ8aa%2B4qzQxtjRJGsxT9J9CzikOzZ%2BGrqBxrI4MYIl6eKeaOK6m53AgP2yanW3ZIgQWKP5CeeSmuN4gaKTS9p6hFBUPMX76Zz%2B6VRsmoOLEZn%2B5EeFigS2NSWLZdXj2I4WAs7SYOkZXP1Hp%2BCMhWeXA1XfzK%2B&X-Amz-Signature=d7e6c1853dfa34472906f4baf93940f9dd66b03c84c4696b6a196109e60e6553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
