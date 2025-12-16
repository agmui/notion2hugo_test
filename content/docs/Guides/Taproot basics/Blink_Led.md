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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJHNF5TB%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYM%2BvoQ3bIAGH9RJF5A9khTEVuhBi1vhoyWcJn36fz3gIhAM0IFIlM%2FscYYuHzO67%2B3BgXrgTLMMlTTMt2fU08jhE0Kv8DCFkQABoMNjM3NDIzMTgzODA1IgyCK%2BmjYlnEIFdGY4Iq3ANACY8vT%2BFfUWJziqhJDxCrJVHWC1HKvIVrrY5SOYs8MzqK7JOhB8wozV8h%2FwllCZL1H7yJFTkfIFaY9TAqi3SVkYO2tb%2Bc2qCMTaNexSCEsxENGd79fGBxOW207UqtM9jNbWD%2Fo6dZzimmV6fa6TW0%2Bgd4ixdrKMWv9FI17yv8wpaLfDQzVIomGQq%2BwkLqhTTK52kNJ7dQrOzlibFTUi9jevbzoW0%2BdFpbFrzIYFdNzFwt5fWCFjHN5ZYg6drRuR%2Ffjm9E65nKzfr%2FUCWq9BDQRv%2BaIl1lc%2F5fwkPsh7aHpOb9%2BWosIXrvMZGy6x5WYZ0F%2BbIttQAgB6mSfW%2FLK6UGKYY8Ok2c%2BEwKbqaw%2FzITz%2BXl1Bepz%2FV8%2F83%2BhAP8S2jKUVSZYYizyRCG2I1kszFPHS2vFWfCNV%2B1H4k13WgGQtiLsCS8G6RNOg4hYqCNnCYlndzvQsBlzf03PEI87ULG9w2i9o8uRVYDOmZh2vyEBhnRRzhE7OrloCB4EaqYylkq26KM2yb639JY4doh93m%2FZC6Gyav9ktOUNz%2F0Ozu7T0MaSITZyyX426bpLytcWgS3tjMWmjUqMUFS5BQwpj235g9cshmR66X9dI8G67mnHZgIwWt076%2F79I8RkjC1yoLKBjqkAcg3NAn%2F8jbSZrsDDTaKHtwPlqhreJHVeGBzkPtEvWSzAzf5UuvJDYRJPR79nId6Wx4hShMMcxwdrjpSZ56CP0tAnbSiET4nuQffdN%2FQBbrVUx%2BD2sExb5CwcjZDuzXScUqFyZwnGMAPAZyBEbQSVMmiGZH32SAUWQ5z4iykaGRrGjwX2o4WVHCWC833cZ2ii6RKytpSdf2X5EFArxYm9DEdTS2d&X-Amz-Signature=2f1b13cd9c0e5c582ae6e2ff2007c40d0cb466795a2278c7160d276e56728f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNX2AOLH%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvnXqbGb7P6DQLrp9TUbAQzXgf%2FwLQkVi1u3FFhfo77gIgY%2FbAqqQgUixP%2BSzeYxwjkzsqw%2FwuwKouRYbBAgxeUb8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNBECzI1oCqBEDhvhircA%2BRGREG9MDXk93gZt9Nc60uMraYiGQqtna%2FOTWoyvOSxCYPUf84o5nso%2FrhmC8RMI1moZsdM%2Frg9cff76NSe3NZX0YJ2AV3LgnYBtnyMz%2B3ZuNKs%2BdrRxVtCKZdPSDdzXYf2Ws3XDacIUM65hGHYy7n8FJweuVXp0JIwpdxIRlBgLR2ztZSSonr5R5zZ6Mbm4YfhHdmRTxA%2Bh0vzu4NvOxS6BwkAOdd25JfT3pIhSgPbXdcopYH7jOPS26dmbsXfa8gz0nOGbrTzbCXnGhPRgrSC%2Fx1f9MTe8pvUX5QhFBBZ14j3y%2BVuLWRjqBvT9PXis%2B0s%2FKw8UgTYPpaKO7UBXISvNDyaPN8oTxgDrONFFEC5AK%2Bc%2BaXTmkx2pnntkshneodTaWFgpcu4Jt7TZp0aX7g0U3tMq6%2FL96kCNW6xFGMptTvnsTZbCMvX1r9LQ%2BuHMe0Ha0AmHVvf6uaVR8JW8tseH1LToeNWxmgcMTeOOkPg5JmI60jlXFH2ccprEJw50%2BB5s8lqU%2FsdvFBkFSBgErPBtFjuUL7kvkQjDtE3XAQf0v4lu4aiArhHOiKkpxFliXTnbJdnMb73d%2FCTglxdvNEOTQWu%2FaLiz22BIZ3xvlW2n1V9lzcM%2FSSHp9tZMIzLgsoGOqUBvljHyM4EXEy%2Fgp2ctvZRpqzNLYG%2BHQWpmC6IQfLx8eTimM%2F%2FjOK7vTYW1EwRg7EjJMZMTxcwbvxZyo%2FU1%2BECuLSbnmLVHnDxm0hTbwNTfIrsjUD0yo8Z%2BxaabzLCN%2Fy6%2BlldscrXdL89Jh0R1k%2BPjEFUwt71dgMtrNq8NfGf2m2Bgd1vuQkyWmdR8vASYyoiea62s9g5ralU9UnKd0webDYnQH8E&X-Amz-Signature=f78f2d3aabe70b2de0a5bb4d7d8a9f8ca68e1e5af5a76a0bd25df0a44bf4d875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
