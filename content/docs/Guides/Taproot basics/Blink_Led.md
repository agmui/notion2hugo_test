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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FAZEPR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDQg61Qyqxr80OoQDWCBuxOQ2op%2Bw8jtElfSAT5I%2FEn2gIhAJQ3Jhg0pPEo4XZEcRugzpHEbokLE5ShCAWeOJiK3sS5KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMpF5%2FdSzahNHdubgq3APlqBcFhJ1oz2l63r56dY68ncNwCTY3FsWi29gYJ7iEPREPpgSFKivTmozPEPy2CiziAnmK6gQ1OhdIb3ShC41Zcwm8bRCZDm3Dqmc5AkhssYQlmIIFduVNDqBSQKLOOLHHeLDe6sj8eY8UrKoPpQhWELYtq5d0KD9q6JdbDQkWfXFpGMrJcEfQ2CDaf%2FX%2Bap2wpLj0vMdbnx%2B5TeTD761tvn2zM%2B5uVPrSgprRx93JOZVnEZ5rTAhCHUWvyySGHWk%2FdjMWW2xt1apLqLyW96fKwN4AbYY2TvirhZvRRM2ebNvimEp%2BWlcm5RtsdmDygZrjO0VZaJgIfndWIDcLcQGk%2B5cCSpQpAU15%2FzL%2BYXGEwA%2FGPl89Fue0BAin8%2Fov%2BRrADseZ8mQa%2BqGWxMoexD60NZLcBVVKR7b%2BfHZEB%2BOWV6elHwgGvGsTT6gAY%2FVVdtmsE1zgyZoIWSLC%2Bv8ovLwOdjr27jaV9os9kXKB0OYpy1WoJn1%2BVyttHaCqe3waGiJlsz7qghd%2FS4XQWdMl%2FQ5eL0eiXcibhkYH6x1M9dNhNAnv39NdO6k3Ox17HFN7FjGGYugb9h1SgAF5xGiKAMWCRpiU3r7JImXTLz4bFJ%2B5h6SrNCYIhVWFFVdBbTDnt4fBBjqkAb8o1HkaZhb21tc7ue%2BxnExxOXV2KUbZxVpsZfbQ2tNNsAltly%2FQTMgzglI9ED0C58ox0cbwRE9MonuPyOZl08I3pvtpsL4S5FE1sqaDX7tsexIsUah4%2F7aUxDimEtfKdNmPP4oLAJc%2Fu6Qso6ko4e2XEF0lud50S%2FXupLuVAnJh3gbQXdEIt9epen%2FHvmxXwDftQqXBRykrUb5Pww9c6N6l0O45&X-Amz-Signature=3bd5427aee55764966d96128f1c0b8e6c9a7e8069d68883fc49e92c385d57185&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q67CLFJ3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDJyosmH3cMXCsaD4iE4E%2FkWPJoJGWsEYAg1F33a0ERAgIhAP3zCFEl4KNEW09f0LonmlfiThih30SC2J%2Fa4pwia9jlKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKCGTw9T%2FYzM3sjy4q3ANKZhm%2Bhz6kz6W5CwwqFPrQB4cg8xVS3wqM6cttURe0g0CG8HaXwHl00vQ%2FuhZ%2F7xJX2MUC%2F6J436sfWjR3oKQroBAHie34RxPkpSo7tzrp7%2BscQUSVCslyT%2F17YmPEUw8YDx5EHwRkNzusOkeXNw1lzO7eqPm6B9DY62k7eyUE7urPySBLRF3WUFJbqeMrYRZhOgxmdSgY9g7rQKvLeO4avwA0DrXpcYIXj%2FpZGS%2F58AcLu4mDbbC5z33RwFO8%2BgZ6KBJj6d9zxwYXMsoBBFdmhPVLkYfIbate%2F1td2WfQ3PcXLM3vHxZbasmexOmpg7WEKmJrSelPB9uLulKa1oM5cXd%2BLKdRFHE18Vb6AqK%2B7fXt5Dgg3KuiANJPXQuJRHdpTM%2BtQRJDqZ6cTx3B33EWgP5PQZFK5aOQRvpbUpT5DX6tRZMmCs7jdNpVf%2BYLSMH86kgQ8bSNkXIXCwz2BpAfPn%2BxN6HYJ9EBbJBQl1toBF3mfrvLwHaJ0y853T4t8aM22grqJ2iZMvC%2FQHRnfVwgnHxI11%2B3HnznY%2BIDU4c4%2FN5melFIUkQnSkeoTB9oHJWPY4UWpH7eINDqFFECaaGLdd1yysrdWzZWn0TOix9IYFMFJODd6djwh4RckzD0t4fBBjqkAYeo3kUVgrhIyTG0KTLxfc05CPLPvfcj%2BmCZ7i8I4EmcwNSFWSuqda1UZSWZ9pNpiFhspdBaiOBaedrVgnRhpxeBZgOejFrAs63smVu5zXNSWvtTFE3jBJmtohtwL2o8007GmS5zwH7CpQJoCv6l2o14ZGz3lRXPvqNGQbl6dESos7J9%2FzeHgNza%2FKedv1hNSottolFE33o66MD30n4Uzy%2FA92Ne&X-Amz-Signature=b4ab58ed3830a35b9e32b7419d6abd94bd69590aef64d1bd41516601929a2eca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
