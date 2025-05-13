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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BP4XW4X%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH8Q47e7CdeRnVbHgjLInjVVhtd54iXhqkRCD8eprvyXAiAaoGv7V1gW7qhuie%2Flqcy6GErtV6YL5R2Ejtmzc9XDryqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JGLj%2FH9FTtXsx95KtwDpNtRD3F7%2BrKl446WvS3ZZ6b7POpbsbhmXNEhPDTW%2BXZViLl7nOJP0ee5rCsCMmiTvVTFPDytXyprh%2BiDAOqY3%2BfpAiS9Nd1xCP7nv0VUTUmuhTdN6zGs5g2XcJGCb0efqRYiibW%2FWLpAl1oKLOWAg896mgR0uj%2BS42TslgGBp2zyr%2FZgOQ4F5X1xffv%2Brz6Tw4O2nEOZeH89bgAJAJXIF0FWYuGcV4mXrQ6%2FYOXMpI8iXATwocO%2FbDqu92kJcwCG781ugZiogfpO3efdN34hetz7IkBGvEYQwUd1x4ihCHHzL0cmVwAqHTWkOXI2pYvnZ2l7J29Ll1fyil9OI4NXKul6pqC9poyWyxO5v3%2BtRWhExYIe6tSA7afgR8XXmMTbsWxt3pF0wgVw8Y811fDJTU0uwGz%2FYufhO%2FKuy7wGKEJk7rEfgACCPgugia3LWj9MD%2FBqmeaSg2E9ZHdUoE4zwHIAsPbJ55SVPflQujZRKS8xKz761INtNV7AAd%2BrqLvsvLl6ovqyH%2FtRMAQJ%2Fwv3RBonUnVR90xNFuqUJA005iy6DHFN%2BDZsCZ16pVUwp4EaBS4jE%2FDGkQK702BKW29Winp%2FFMosG0J10GiIuNX7SQFSFWXrTauXKTP35EEwjPiKwQY6pgHYPP%2B7%2BhP28tuQAZV5VXMAAz2kQE%2FukRSHLRjz1fvF1rag4HDU6DSC7w63qMyxdcAHY3AqfDadEjTlPCKyg19k09V8Im8%2FBEb1ZEW3o%2BqkVx%2B2gqYkzGA4ibP4zRvhs8XunnQlN3zSHXQMKkMx7Xl35zKgy4nGLCdrMiBVEhWA3Y7C5d1wnwt8M8UtWhVE3jU9hWZM79k5GvwWI4kxtkPAQ5sLiJ44&X-Amz-Signature=e1b933f82135eb9ee33e3ec1d1d36d8c6e7dc5a8523baed4d34f2af69f0af3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345JQFHK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDZurlhPk5OrYBCetKFSCoXc0VIXjirtW5RhH7%2BA6S7OgIgUWYDOVcwYHq8q4U4y4e7grJdft8KYOBPOtvd6e%2BWaTsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsxDTo2XJRMS3qWoircA04fspdTL1Hd%2BdiFZyDZqnjIbC0BJq7Y6tPCc2CVsdMehNcfYwVCbDJ5Lq97ZIyTprrZHBISZRkZJi4vzwyUelJqmfMrOHimVRfpFfqp%2FmXDhSxMpN433boKFqH90oN8shZDUt1KDD3AXiBYLjN6%2FV6rkFBNrXqSLm34X73%2FyrYOrzAyDr55A4qt8HKuCetCE3qOOj%2FUUkMOWRtsbN5nIEnGs2TrMTDfxnole%2FBxqdicd%2FFv8bE9XWzcDw1KaNt716bdY3oAbe4NiV1O4eOOiG4NpBH2N%2FpHaljHe%2B5id9GQTYSyoDQZS00hi3DFdt%2Bas2aobUhoxRPKwCAJuaUlW%2F%2Byn3hphXoQjiX%2BKQH8mbRPZHlOsaK3ZPtohdjSX6nzjp9C6i%2FWqe1XxRNTOK3lfg6Q2hs4QwO7hi%2FTQ1SUzalwy8ukcL9SbgspCRrVzzwrGeMJfUmDq0E53UY%2FtASpLVv1aEo0%2FcPM7K1kFToRZJgFfx3ScjlMy3YdcsYaOq0CdQFaz6vMsLUWy6c0M%2BDH3itHoh9Kmah6UaUZ5L0qOv4MxytyivbNsOyfaMuz%2BxVWhh8nuzvR00EMUwSr4AMFpr7HJsIiatgShVRad3mukcqERaSAKhIQEVt8aY8WMLf3isEGOqUBvtdPJyCEWl%2B4AmLOERacL6kcalcgZUmmoc1y8rLThEbvyOiA2BCc7q1%2Fr1d%2BXK7Z1UmkN0IwTMbrwc5WDgtvduqyb%2F7IGe6otQp9yQvKRXuwenHorP3ELaxKklcKAvdcRg0xIFm8NOIqXD9LlWMrh8s346Y59u2OpT6cIs71u5%2BYNvWrgDcbu09k796%2FX24vkFu35Dc84%2Bd78gPFMBqpLpApZiQ1&X-Amz-Signature=912b429dcbde0beabd9aa31a4807dfee1e1f3ecde07b4d2f0398af211c58268b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
