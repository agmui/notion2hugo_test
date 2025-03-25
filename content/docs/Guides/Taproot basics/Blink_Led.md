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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJ6ZDTN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf0Cg2EzxKon%2FBT9RBgbnGeT8ZMz0ZHLTObasvCgxpcAiEA3P%2BD%2FMceOaSaVT9MCXbCsFOh%2F%2FyvB7qpEDu7xKBQ2%2B4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi%2Bfnpt0rYrYqCrJSrcA4vjeMjVcwveijGqBYPk5uKWJRNRZdlHxr5wzxfFyBjL4HMamkqM6ESoG%2FYGd6iatfkWx10%2BC%2F3OD2uMKXJRRwFdEuYPvr0JXnJNptJqR4ZJi1Rrb1bewxEkxDQBBOmJdy1kEAwjMMDesngnhqESGbpjkJV5vWNyfsOy6daEJv0cokEE8%2FsWtIzJXFYynv7q6r8HVK6bwmLuoYXpXAVssPsqyYijmT2pm1ZxSg%2BxpNSTS9%2FTDs7RrfkqO1NvFtOXMAFQgrI5fv8OOJnnPp4ddbTxGCrSFHxqDGd3pFn69%2BNIXjyI4X1MnYn1TEF7WLS9ADIf1V3WUSZD3I5E0MSdwjkD5zMZVfsAK%2Ba3AqkUG%2BaSPcYU8wBhGrZphLcjmn4rp6Lf9ll0GucFJQE63LDVgYhAFU39i5McgdGUzYXEU1Y5FOgW9UlF2S%2F%2BsVxRVJNPCXtLTv%2F55x9Pl6hC5Q6qyc3110soYzfK4JC%2FaoajdAWDVDu75diR8n1YsyrDrXQuQmEgn20MnaBZhMlKQLDpW%2Fze%2FmK58PNASLKaMVWFrxrr5VkmFQRDKuzop%2F4XKMfHGffKvMOP7MbWqqMTpgbrDJU8i3BR0ObQVMjvUHA3xJXjFJOk15Uztq4tSJ%2F0MLiOib8GOqUB87et9JL189UUO3oox6mkMFM%2F%2B0DWOfbNYp2eZ5FqW37IUxQRtSRnssaM1Ks02lQtKVXfxe%2BqEgoRQDHzpgg7iZZgIkvPJABtgLb%2F%2BdtLhFUO7W0c7JSsREqxnf822bVRJFJUdizWMkHYTF4tlTCzKsuTX8o2eVTkE8SZD%2FvfwV55SxVribtWWqJCMz%2F4vm0Uymzbdbm5h8%2Bs%2BGLn7iLGWKRSxHrp&X-Amz-Signature=61668f95c2a818f3980396cc77fbcb289d29d038bfee37383b49797f88c5a8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNFC72D%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF232F%2BjBoJuTz4SXPrhPq1NslSDMYxKhzypkev3qQeKAiEApqMG2QPqQ5iahsYu1zAkJdnELvgzKXr3iBfx%2FO4J%2BpEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZqDKNNXXEQWH08IircA%2Bvi2HR9eoh34YLmlrCLyjrU%2BqMexmE50TtBwYS%2FdAeGMxnN78aqV7SDy7TQ42NfsLn%2FzGhJaOJUEHF1wqwwDPZ9UMmfI4nQOreiPqWs2FuFk%2BrCXqr2qeARoZCqU3R1YN5OoiKY%2BU4msuFwW0p%2BSa7qEFFocv8KcxAxt8ZRYtdPT2ytd9Fg7UPFaM4lWYrn1cSFWZIcvFNzStsl%2FRdrSLHtUT5J%2F1kSXOy9vkPZoX6w3fCD65PB5yHUUOB00tSM6hCt75NTPHLkdEihYULccx87N%2FlPfBj23wVX9vZcdcMTv78Wmoven4HGxx1n2K4dTq7oma%2FOa9wdagmEzisa%2F8X9%2BFQvfsMp%2FZuJo5fmFKCZ88Ugf9P%2BXG1QjmrCNS1fQ%2BosAnr413PtAJ94S55qY%2BxzHmoi1Gv6SuUgpbN%2FdayjzFp2dO3tJNGYmDPVtwhJ2r%2BgnceCr%2F9%2Fq213OKoEo6bu5Q4CZER3DTF6YbRtSuUuLZEdsYZkwhS%2FCb7ZjtS4lKMR4OGfSOlggFO3VbtFmtbKh4Gc8Grvxi9RRzd90ry%2FMlThsRj9fk5yz0JklsFtLm81eo3k%2FUnKzyoWCJXpvVTgrwkjgNSN0lWUDypcRd%2BewQvAItGIdPdsctIcMMmOib8GOqUBErnj%2FW%2Bo6nHGo1rOR%2BRlycyhWvCStSjlbwmFYoSCwW3bCa7YfGQKf9CMSiKlSSkicv0qq71VNMUHoh4bBpPktABFI85WIYjBvAGnKRRqaj7V2ojUYR4PUmV6NqNcBtbfaKxrqujx%2FxNgyfaAV4lJnXB1Jqh8Fua0%2F0x0ujctxHZEigFxSgJJMukfk5HUSuck8TEtgqUoYFq8X%2BcYsynTgt2u61GJ&X-Amz-Signature=fec1945565aec299434149d386da327b4c677541bb6f96cf6429c01791929f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
