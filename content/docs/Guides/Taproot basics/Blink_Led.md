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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNGC5YKW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC0LE88Wo5WFWjNrk1DF3Zpsl0fDta4%2FyE%2B4YqK17dAtAIhALsgNZuO3SvCnUSNS8jOcJYBV%2Bvo92P%2BBwWSuGvcgdmQKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzITY5EisHOqczkxOcq3APAv45nwwmpJV%2Fb52cZockligLgIj0DV7tAWAE7hr514CEOrC8XcySP%2F63CYl77QhrOFmoxU8NlB2J0rLVXuKcwT7jeaxpfLYx29Fq%2BNtlLfgid3vV0n3qoZYV0o3rCOVJDu1ygjoKdEU60wP7S6Emg80wUl4RE0u00GIoCXOIkZiyRNV4%2FzNc1V8oBKNllZ99%2FkVniMVOc7WBU3%2Be2UucTlLIViSLPLV4LzgtQvwCyBnzNkWWAz%2F0qpsykAhK%2F34q%2BWXdw2TdcSaXnIi5NcOgsO%2BsQ6uwHoBF30vaKZo8%2F6kclUrfX1M782w2WvsHq4CP5M2it0OlgEvucr%2BHvZsp%2BXanARD%2B78adNjHjL7Qmx8%2Bj4U4pmDw61Ee7FkF6L3GfTO0H1Q7j1UcCfFfMmYwsUsLCW5v0BsyBIRleYv2FxZMCSJq5ZJ0XXXNOGXfDv6x%2BlKx3aL2Nxu4XAJb5T14fPMnEVXH5brk%2BCPt%2Bqzygl18JtotAn3oWyyDv4n8iySsLUgFetUkVkJxPLXmSUUscqg2u%2FLHbOSXoblbuVsxe3qfNnhIGZsfqlQ%2BI51Xe7EW%2BLYfn7Igs4atoqH3QwdMk6tQ3kxFcr%2FvN7f4AcxZZSnH%2FNcRd4yW9IGdNqLDD%2B%2BuXDBjqkAaFnEtQg7idmH7UaGLA%2FoPwW8k3Lkm47b%2FZ%2FRwXzdewj0CmGoDOx1cDMLqsskSRrNohgOGIOJgxEH5NBXG8OymTmcVG4bXHU2SEpl6fN9rGhuSrfRQ5RVu0f3sZJueeCKUVh4YT4deDs1rIw4MI%2FBXnlNE3PXApU1ut1t3b%2BhVlwhUahpftltbP8SaTZs0HEPPc3YDuYtf3ke%2BMtlcWGOZ3rJxod&X-Amz-Signature=1a14cb07797c156142f04c6c1683481c6a2717efdaad667faf7d18cd90c0c73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIX2ZMIL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCPwQ3G6Gd7N3tKi%2FqvbbkXV0PEtDuDA11sdnBgf1fJjQIgemeOVV4da6SSjLyfWgervIooBtszveZmXdrcwZyhog0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BmUejhu0uZWXQI9SrcA0E0Pw%2FSaxQXSrbN6XGWGZylrr3vciw7Vy2%2BPsckzOPCPcFN9jSYtSWKSY%2FUXdvsE3S3Nyc2rjg50GDTwSqpPEW6zOfb86h2xnIuHtjaTg8%2FbOTO8dLOJGHvR3f%2Fxr%2BIkr00lDGUsIEfWu9%2Fc0AclSD8ZqlM00%2F8o5iCy1Pl2LExOrE88fTUoB%2FHsKE1FEpiB9v12benfuegydftakf9BJBXXqm4DQsbe3ahgPgDfBACweP86lmhJvIkoTeVCOv7mCBUby9AClYTgtbECjRwPzj0HiiFDnTzoomV4kEoOsvDizRqsEtTBN9dPN0%2FebPh56eOboylTL1NzMgP1dN9YwMonGUY8HC46TMy5A8OKqfYBWbKKKsidRxowFCbM4yJG33gpcl%2BKhOwxOW9WxpXAKSJ0yAE4%2BBivVOFmX4i%2BfctN9M7BF48QuuHfaBrUJtuH3IiTm7Ie%2BbSedMVE6BsqKWEc3yXoZDwCx%2Fszi0DMMjyC4jGfqd68ffhlRBh2L5idahJCe%2BPRBXYj5MLZDOw3fK%2FCl5jZccbFnwAhXGFpnGsIFdKQwVWz%2FuAHQ4u4hjH3jl6cxGmyQDH%2B%2BogoS8UpKeYI97gzBAP1bO6oxTvcY41HEIF5JZaFqZ0rmZuMKr75cMGOqUBwdmNizs0MEk6xunXsJh4D1LHOkeN6FqBHAof3pdH8cGKQeRFSmB3l6razPH8TaJbyB9cP36qRwx1vesHVIwIHhjzJC7V52DVNXLugpcG6cJLYHVer97dZsjt0mo169qiBBBOvr8Zf2uupRfy3tEwzdHrZQD2qhGfCdJAbDcbVxYHp0o11fs94uPmzz0U75x4MXsMJATbql1287hcvWniDihNsdQS&X-Amz-Signature=45c2266ee451d25a5243bfbf54cb88067b847794682357e43efb9e5fcf2a8198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
