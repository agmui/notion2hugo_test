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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTMYBMX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCCi%2BJSuCk06mbCtu%2BXD3lQOtSUYEDVm1Ho2GJxaj04KAIgRtfTqCve6L5gWwSo7TBcQfStbWECOERDiomlXggn9w8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDfmwkzZndqN%2F5vqLCrcA4YQtDSOWKzUJ85PJdDN4pA85rEqH7AohMN%2Bg%2BbmUEQgtwtzq4ZUoTtDTprMmpM%2FO3voTiIt0sWQjjbCVEk9iT%2BUR8K6FywJlq8qVr5lb5dKVO2SgXUrQmIDv%2BSfJ4oJIAwIk3covWshr9zQt%2Bo9Q1EFcKC9hhaQGNHHKcHH09qTt19C67aIwDezaHD8F%2BM4HFo4qbt%2BCXuKr9%2Fju4Xn8u6%2BkeGVUceDmQs8sOJvKi%2Fpy3llrYwVPoJ3bDW9gLn2mOp%2FRDBvLKy72BKokDCBoyGgfvUef2tkmPx7liZVTiQhfpMH7cCdqxgMoPDA9fJS5YLrW3MLN%2Fw23z8Hn6mVkoAcuebTmoyVaGdxhDknBFJBTz0HYfUauyR8%2FwenxCUPP0roP%2B1hs6GUqYsE4zJbebeCSHe%2FSgG2LSZpXvA6yvI1RiLtmkhpwvH8zSBkbdZNVl9P8NOAQo2nFOpkkDNeM7PmOSTHBj9KVDOsw1MtvNhxMk%2BZFfHO15lG2Xrff7v8rdp209YD9HU0vmn%2FaJzEpsv964F%2FuZP0jM1E1Eo6HHtkU6aGzFWEL2O8yk7Ls0q7IYD7U5Z9MHbc3FBdqcgMU83MOQmRXONfrkRuiNPoU07LOjk5Yh6IQbFXGK8VMKeC2MMGOqUB59SeCLmqByyTpoH%2BEE6pnNItpzoe4EFTZMQMjXfPY7MdN3K5%2FVLdWt%2FAGG%2FlahQHJcV1XS%2FzVyKaELTnAtmd8x7%2BISjvr%2BVkS2tzt5ZH4RXRowo5xZCnnFby%2FMY0FgJ0ACLuSBRKwslT6PSY%2FLQKN2%2Fvw1FiYgZtDe9gVf5d%2F5YSUQpmejVRSfLeX2CCO0a7wPknUryTVgU5wpopi8pXRRJaWVd3&X-Amz-Signature=dedc247f869db8fea51ab9f7d6dd5807b7956a8949c98af1cdcb735502d079b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFKEJ5JX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBNdCsNdCIurjo5GjGsahavRjtVszx5YT6ixB7EAqkrgAiB%2Bej10adwzCKjqeNCcym%2F%2F7Z0SkAuv2xpIcWupPePZbyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMw7S7Qb%2BzwrmBOf5ZKtwDG8GfQBKG%2Fk8jvo7T8Qfmmnnru%2FSmgu%2F5OPYkRaUAinq%2BQKwC1R91c2nSNGhxPutnhLKdC5pTeQBZWX6sXSjDuQKu6gjyG6zCIFsJac3VOFFD8fBo1UY1a90toOVEFkbNH02Us7pF19M2hJfkW5oJZ8sYXiQf9WvnfI340gaWGN%2FX6NEDA%2FPftIkp8aIX%2F8NPfcafFchOgtoGAqCm7flhIA9UB57YH2XfYCZgCpOV81mvDoapaYml%2BLGWZaDavRsDBuJgNMkX5QfPiYBkt72KUIsFJktf%2BwB39REvW%2BmFun%2F6NWMPIkw97ryQbV2UxJtk01HCiiCmOxgCJFO%2F%2Bqqe9z3KwjdX%2BIOBTp6x%2BwPHeJ2%2BxzLFnaXHVE8nTjgD9G2jtGni5bP75OCuiM1Dx8nTv7BRfGR6rwve8y8rfb6VcphqpkHBOSG1pPWpB8PZpjo6ATI8TeSS2eepYrNHwUGnN028jE8B4DBff3IEwvQmY%2F1Ag%2BdXGZX8euhyay586%2FF%2FAsOboJdq5YVuHyTFB%2FqYRB%2FQjkWPy9QBwKjCXQ%2BzQf3e7tQq0tzz0Owz9BM7CwpRjuLWPo1KQjjIydtbAuMvjEbJCJy1sqwPBcneNQJU7BPBUkjAjhAlgxVOd4gw5YHYwwY6pgHHV9fi5z9kaMuYcTI9VXI45HboR2Z0oJx1DGxKAWjsaU7RSwwohL2E8upUUciyzNxFOc7FZ3%2BIYRsW2JnFkVyhOcancsV0LjrG7wBBgFKcY7JmlQYJwzrYylKVlDHUUjpBLX48GNfhvAX01cTXkaqdt6EIAnv0LPpzCZRRDMtlLCl6HsUwByw57HUIekpmyYxOtoTsce4PPErhBzsjyND284c3D4WF&X-Amz-Signature=82744afb385597b9cd78127c28c5549898a2aa8d1b6da78c716dbebfc6012c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
