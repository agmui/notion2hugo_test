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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BPAVPL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2lTt5M5Ea6bnyYkQ74Sv6Op2WppB8BhZ1efXIr5nKuAiAmfosQImcODlIK0W3PEeLw7CBC1iOhmDAuXZ0F9GwgDyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaozwI0q8psv0WnSKtwDtbgyQRHk3JZFo%2BwFhhGzBZjQ6%2B5yInbYsbhXmVL7j20IQaaHYuLv8cTH5dpfUnuaNxJzxV2mZvf3yFOvZQomgQNVoMyqdKVj%2F3ABN9SMStIj%2B8Chz5Q0OIe3WciSUAZIbaHbiXkVQNj8k%2B0k127xKPzADxK%2FYilNPEebJaXyHWDKBMzXHQur1a3qUdTOHjXw2%2FeqdqWbcfzUQ5lXKRH5fc9ttBRo%2FTDX19QS927dZW%2FuJGsjqJ5sndyHT%2BgFd75XOttmy3HpTwN%2BEPl7Ss1gh8l6OgH4gXeU6YHK%2Fr1%2BO4VHkoWDZE3OSDxX51L8IyewIWeQbfev%2FbzAM%2FM%2FozcS9PiueUPte%2BB245ni%2BRZKJhJ3%2FhY4pUh92zFtzgIZzTSplo2gBVugpBLGMX8MnQQ%2B9IOkt%2BZzfATqIvIl%2F7%2BFWKzm8NCN4BGRV1vmsqC6MEMyHxX7WSLJaOjtI4iZe3DNjTpAH%2FnHktFd5n9qqsK2r2ohIjGc0PHTJmelh0rbsMahJZdWl8PZDSfOILdgV13Y5CuZN5BIGKupIMMEZ5CINEEMU3Gn%2BdOqnobZeIEEFlQTYn%2BzXHfkt95g0%2BAntjkVIZ629%2Bx3UcY3DjV%2BFSacUR3Lswi%2Fu9E4eppwqhEwodf8wgY6pgF6w2VeiFNUAykqemYfiuz9G%2Fd3%2F9xHE7sXXT%2FXtTIb%2BEi%2B%2BzcZ0uXalq98ABNotFzx6VG2wAIEjXSTEpPr4ra0wBt8Wf226DpiVygblAvB%2Fzrf5CMWDz%2BXhshg75AeeevG7em5NM77JT4dOSyJFnAk6IPlJwrnofn2y6snN%2FARNjogpv2r%2FnHnq1Bw4FMBFFGsUPYmaNb1%2BjhbI218nBkFb8VLs%2Ft2&X-Amz-Signature=925a0147eb1bf45e290bc8af08359736f5a1c068b521166237b9fdee37f8f4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEZT3SZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FkSaNhE3bMUCJheLCJ2SIed8qsxslJ%2Fp7XSFZs0Hv8AiAcuKEATQaU1ozBBffsYRMB2SJH87dAPvHgB%2BtU%2F3Q9wCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXztnL7gMfCu2VaNuKtwDSFgPEEzXKO%2Fm2V4NAPb%2BfRWXc6FkjoL%2B5xD1oshDYGj%2BuQ4FuB8n5caak1MfsG5yBMa%2FHVlQnaqOeqHt09D2fjno2h4RRw%2FQAFXZ%2BlgJu%2FiRz3tRuWg7bh4KYqdNgBZPwyFNTSFIbx6YOhx73UNOdpl00pW8XJnwDfclZyiczpedO6g%2FxpWDCKSGYNghYdLLvijm6roPcfSDV8FUZLJrFWMi%2B%2B%2FK1oOzCiytOLd%2BTbZ1u46Avz0EuiTBaXx0fCW7xD%2B%2B2Se40dxjdvv7xzxlbfbKhWauldMZvdN1GFRNcNtC8CWgaE%2Bzh4%2B875oJXRp2flJdyIiZf2VSaNeEewyKTRv6tR%2B2KoC6dY7NHuAqJNxXkNTGiKAVMrIoTOG3GDOxWKQa3SUkyKVR%2Fo0zbXhWgz3Ov3xdPpurTan7kBN6hm77HglonxfkopNUUrZC6b9twT0JXsB9Ya3W8BUymDHBDV6vaSuodGgGltlC8KOa9Dohs1W0Xa2Z1PslBpRQNEZA%2BGIQr2YarRJRpZQUsm%2BMzr38mupLVRPnCxqvtDsWQVmw0I6o3hfGflUkhNFLibKk4VU1oh%2F1U0YezPSpdFg7SF2vTybHARbb4V3%2B2GiYnhnmis4mbPQU7iMT8QEwzdb8wgY6pgEXXSfaQm%2FFvXsL6a7hefr55TLku4Yf9UhBo9no%2BrkgFY0uM%2BkiLPV5NjS4jK1IxOvlSISkk9aIe3ZjEvULkDmPxq3OL0PvOHw7PXg31SjA%2Bk8ioVLTRhJtdwi3uCmAtciOkGyMdmX9qCb0ydKxnN8TTrmhDmomXUYU3TcH2bEpm3ZRu3imY%2B7c3wUkLHQZrIZtpMtNclho62DHV8HiAlyxrc0TvRWN&X-Amz-Signature=a378ca6b2dfefd0bddd72aebf228e856da07cc4c83edeb914b407c50a64446ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
