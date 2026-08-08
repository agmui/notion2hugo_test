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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324YW7OW%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR%2B9gzvxUxzMsmQ9W90k%2BWoOstWxfPWiB9arrKXndeJAiEAs1zQlRJwUX1uL8rv9PIF%2BUh3Sxcn8OanG3Q2%2BDLo94Iq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNbr51jq8fRk2hS5bircA3AJRmRW1D%2FHgz%2Br8qZ8Xa4z4NVk405zve1LxO54J9TUMEWfz1thFktkgGMEtQ6cfFu9b%2F0x3xv7p%2FVvSM%2BSgSPO9PVQkIjhqC5HkrWjyPtyMR%2F%2FrVUWOFY9gX0g%2FH0W4CPKgmp6mkImqJI7AGF4TzTo9N1Ra%2BuE6JKBs7fmrV6jc5LF275Z4ASGfxvQQysoOvrbocAcnq9KsFmMh1HSzJy1kRtyUQiZXTZfIhISoIWV%2FsSqZz%2FBI5LVC1E8QS4cpZp8FsKGcOwTdV04qdCqpx8DmkQe8GcTQsl5Xx6e16yFaBAteoczf9cNomOpeS7HC%2BpqY6PXNKzhEJm42tufn%2FVhF7VavcD0QNOkElva%2BX%2F8%2F5K6%2BCpqf5xkYm%2B62axXA7r52ecGjjGE4IFa%2Bl%2BJMxafp6PCk4xlY2FXLrsEf8mQKhfs5%2BQwS0jQ2CgVgwOB8hQ%2BM3IasGJBffgMl2ZwbpPaX4%2F2EGTWa2DfVsYaBtD8ybYdbi2z7rlnnU2Rv7flY7%2F4ETjyWJ4F6cZoii6SMeWc4PPVnPZesvcOdGbNdUTneOfra%2F2%2FGgIQ%2Fwlc5vISERVBueFC8EMcQDEzd8q6cnVtNkuK0oxpqhUCgYjQDlm%2BpclIo3TzZdCmgpwmMM3v2dMGOqUB3IZHvPoa54HQthPjwVaGwZfj46Ak65m6f2Plk45fy1abcO3uliEr6V%2FkiwuhkBgxEz8bBnvwyAN5HoRNwzg11nn3h%2FTmciF%2FtSxunDsFIkgW%2BWW2cwC6JBQdw7An2CVYHdQzep6gahaPcw0cHMZIh%2B1kH7YZtmGNyD%2B%2FEyoxiss4GfeOSSbkMNOwnhA1QmgsPWRDO6CXX4gzXyQUK0turVDy4ybR&X-Amz-Signature=2701122e6d16db9d638ad4852b239efe7b85904c5a4091ec639081eebe392cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5VWUIF%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLe0GE1udxHK9%2Fcgl4unch9U6g6wQvB39U5X5kvTcdqQIgN1rqK%2FVyTtfXEEAtjxbhcg4HW85geOuBT4ns1Y8XmVUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL6IsKn9eICCZ0XKDyrcA97Enk5SIDgKMN3sRl%2FWp4eNfMZxps%2F9bmjq0gy8wLTPTeUBcFqguitUTn8OLP3QeVGpnTx4YpdTPw3r70fGeqGbD%2FkcYNSD5t2gr6zshq5tSF9iFzx1Te%2BrLioVsa2B%2Fz%2F0vutWUukUzDzCrUMIA9kX6Fty5XtCED%2BZoie%2BqgYYfuzZN1qt6elUGcaK7v5mTEJ%2BSO2P6EijSqCTbN2FZTsx0fGnsol37xiy4Jddsjwb9%2FZ3JElvijBSkvOCg0zNYj2bO2iRjrjfcgH0i4zi6FrQe6iIldfWTbb8dEqUYJnbNMGSfwj6UJH5yMRJ0sNX2T682SNuUp4URHPb56s5A5LLxmt9VAsXZZCw7ANrWKUWqD52Iv96dtB8Yj5o5sPmBGuwObOPAEfsqByNMolNNfK0bA%2B5apnOBrD0nuq72w4AvJILdFM044ouQHREDgSa8vqvWiwbx4EorrhwzoRpa4M%2BwJDv4FeAnfD2BOQkFrDirX79u9a4E%2B4oUJCpUpd7q0E4LYCd4ibXotjv31mjJpK8tZa%2FUNiSSW1ppV7MkZA9QAHIyplXaiieQkYASDIGn0n9uxUnYwrZIBA6zv%2FplV%2BSpJN3BdNOvslJWQxSLDTJvGI0olMJg30PeClVMIjv2dMGOqUB9rdUtARC%2Bbm6eSIW%2B7qN0HC%2FT8TSRguh1AVXswIbhqZr8VB1Imkiig%2BK7nC2d5DU9AdLwIrt7H3xKjcDaVZApi6LwNRtr4w6xaQR3brVCeWHGIwwMJwS4sXcu5Zc0kAeDuuS%2FHrPPNWu08iAoBTUYQU8WEtlXDDwpbpE%2FvVqqkL07u8BZhDXKhd%2FbOdUS4UqZxiENt9Qqx5ttRfLKrRbBOv%2B8z%2Fr&X-Amz-Signature=9c468055fc71da2a0b22ae0bcf1e9503da2831bc655952b5cadeaa427382a642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
