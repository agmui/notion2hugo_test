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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPC5SI5T%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeLfPsouuj%2B2VoWBP6nje0aX8l1XRS2eHX9AN7ahc3cAiEA66FqdWQ0oeh28S9WnKgEfRcZc9jf7AYhd8mYwzNKZRwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKedl44ezI2CzHMb1SrcA4qBeuSirwQJgARbIqUzse9A9dNUDFg8peEf%2FRITNwWD%2Bc4djN7uBA%2B%2Fh9fvL0NvTiJ2jNg7bJFHaaHUys3uLXXLEBRUm7DU0e1a08b3U%2F9BaVtFwZWEy2dpIxdwpMpMS8xhDxmUEZSYuoYrlLFKwIOmYOHUGKxjYSbuYbPXC6Tg%2FoL%2BNEvfsTx67ERui0kRNI7l8CpykC027pxJ5%2F6SKF8KsYgDgcucrt6qs5XIiHz4G8l5TdUUQd4hj0K%2BpC9DTJA06Gj%2BGLRzPK42qrMzXNzTY8fIuRtP%2FDeaJ3Snky5aW8TLH6%2FCN7xGvr2up7uereccQqW9JdbSB3JvMzZPNB%2B1EIminIfIaPNmGX7gz0d9cAA3AQEo2%2FLIcOsPWewLmVjzyqhlkrpKPWoA2lJP2YeMyRxd9ljvWrLbmdLYhfQkcf89ejgNJr0%2FSlKtMQ6k%2Bf6qCJWkjn7W69aG%2BRp5hIEuoTBLHJWfNQBmzWpEtz0tuuETOMWXee2SLs01ms3Eq6oYwJRh0GaDHP6W86AlFM2RtCJUw6W98kJSByvI6fTQ888JIE0fMRJY%2FNUpYyAR4mRA5vQJLH3LOaYqLF1c9oOdnOQur2BVPsmgWDxhTc0jYPNs59kJ0YNJLJSeMIKB88AGOqUBsdYG8jqUj%2F1NhmpHcymXq%2B4LmzL4iLabjUJXCR2th6sIWoVsme6sbF2cIOhAu8eVmCws2D%2BOnVWPS7wYy17Wv5fg%2FO%2Bs9QWBrIwII%2FDL0KYM7v6M3bBYMslY2X5DyNfpMoq23Q9rnDUORQh1PVLOldbceDvoqQ6kiTNtv8LKFOVMXkmJg754kVJkLz3X0VKQ2mPF6oZXBQ6Ebfyu46jBds3gdzu9&X-Amz-Signature=b4e47f7c314ae4c053db7789bbb99735684211fbcdd07659f0e083d0af3467cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDCOWCT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCftir64pSmv2Bc4c1Lu7UFncsjxlJUMa5Bh77JmlrJOQIgGvM93Y4Fdq4visG6wXwuBw0g%2BFkcODEc1lfITBD3MGAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAwf9uPBPm8GOW5OgyrcAx4cI%2BK5zE4LkXUkSj1NZ2zjQgOqT8VIdMoRHgyZqYcShdoCTr3%2Bf7B%2Fy3MSsyDCyuFNh2h%2FoMd4fY1Vou325IZkdSJL8A9qBX5X93UgJu3kgk5HiG3AYeqYnAHAJrhEfO78ajosVUs5hDRzFbJx6CeytWAExSk0kNKLquPTBVy%2FhJ6Phq8XBSC6vLAOgMSMO6DDsO5YneDs1ETk38jmTiW6kBlY9IQfmfEJybzxwFSmFdBSsulQvYw2n1ny1QIZwmCkPtGsSHu%2BRIXhtgKjQoyQjyqRToVGvDHmdusa8RcaOZgusUhIVTkIsoqPotj9ilOVzt%2FSY%2BEoR6nfz7%2FOheIRlLc5695J9uCjl6k50rnuKqTcrXQLhGsOfSQ4obvQ4Yob2uN5ohnLYNp4AdaKz5swGKHk3dYL51NZp6BO%2F6eBzR7ALpbAlqahgEITDEjZoFDZOW1fV0um6jUKvIEtNnp1ROUnaxz58zpkI6xhPM0lV4ECf3SZVjoc1vpu1ASMpu84U0UGyMiVjjccNw%2F1mG%2BfksMXeI2CnrmBWr8r4gRFIzObICPPBzs8ojn2UFJMpnn69LUoBSg9CO4hztHTX0k1H4760qbmalyz%2FRKafhAH1UEALSwDwz8AcNMqMMWB88AGOqUBEYlc0qFiI3eneoWL87wVMraEol67KSLucQ1YksCsD0OBZvlIOzIXZoa3jLyBF5F9YQbG0GQBd60QehL7lL4%2BKmLDJWYYNSTftQYNQJN7rpkD9zAgL2XzP%2Fde5j9EM%2FsYbCUumdJ4DCb6%2BYZdyB8a0G%2BdIHIndoeWVdlAIhBH7yyaNuMzPhQDYY0nltFTLghCPpX3%2BG%2F9Av07gDnAkz6VuSH7AZ%2B0&X-Amz-Signature=90584ff4be8e049bce6e751bf629ce42eaea611fccb1bad5ebff58b9db862df4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
