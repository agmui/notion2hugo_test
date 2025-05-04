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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHRAOD6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDEyCEU3M8FzyZIGZh1zc4LUTBg36MdfkcMnxxNhXAWZAIhAKqWMoBU1dlb%2BuWBWJpvz%2FBjQX5ufIHEZoUlSX0EuYZJKv8DCB4QABoMNjM3NDIzMTgzODA1IgxO6d7aZiw9t2RHwxUq3AOVGznv6243D9mrZUo5ywD6rVw9Mgo%2FqXSu4wR6a1YSh8SOEAmKyANo7hAyWWu6w8sltMFqoGMEqM05Qein%2B9A1ojUis3dBlVdNAfysbdLkM4MS0CoIYnXtyEfBdMrLVkAZZWpEjzuQjuVCZ0RjTBd44iVZxBmm7TXOrEfStiC%2Fso2GKCP%2FvrHBgOqG0Div%2FFIOglDa%2BqIpWgemiCDTrh4%2FLMowOFsBw0ZmgBqo7IEIZIKiSkvnucf%2FkuwUIDfLNPFXlZaL6b80JoNasI4%2BCp0ezwhjQCO41g7xn3YEheAywuSWQHe6oS7Ayz7quVJrXLQpvTzjK06qNvZsVNEScxA%2FzDbnj7owAFoXjhDoR83SpyvHPgM8Lkuh72qQVxYozvcyRBoMVmiEwAmOSRPGQM5UcwA62adyve17TK1jHtXwsjAI3vlAMK%2B7AOUWhgEvdzW7HShLMptvnKSewDRt7Ny1ZiGDidZvevV%2Bq1NKJ%2BQMEiO3uvPGufrAm4WixiyT49oBVPUD8lLlJm9wRs6cJj4G4ebX1JqcBwAp2B73iXt%2B0cPildIaesEIelKRsYBZII2AizocRDcI81fNZlONfVW8omS88azxyZ%2B%2BQKGWoPMKzAR7eVgZ9pgAmVifcTDorN%2FABjqkAaF5YLVZuSXBGkBCJ7lJeD39vEpOE253%2B010XHBF0E7Kujxci%2FylXtnm%2B%2FmX2Dfg6pyHBym3wsS9A6Hrd3yiPSot4S3mVj8o2v7xdx5Ld6XwTAaFjkZuGWKoAxvysuQl3qV7OUCznHdizfXXWzEBXrJdkl9VOz9wNVP4iSQfRF9lteTjcvZA66YLnaH6F%2F2PPdS8YYQ80oiWDQWFX4tRIR5D0kKw&X-Amz-Signature=4d3564d0c1a1f039659ec7554fa83a6d3e99bf27dc9d0d854fcf90935c4aebbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJLU67J%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIED0bUByKHbDEhuk7X%2BBot8IgoGvYF%2FIWsWCEWjR53ZzAiBHX68IyvncLiV%2BIlVLHfZdkflDimc0F2aKTj3N8L%2FfPyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM4jAg%2FWbvtQEpqWeqKtwD3u%2BZPGWjxgzKg%2BJ9IidA9tH48sxZ2PVRhFefUTlNMeI1OBNYgKTIlKytcDNlFQrIm0PFSb%2FDArnt5bXAUpa%2F0mR4sDrmlcnsdms4iXhayxlL0L8F5ATQvUNNln3jvqtbEgHqhszigLGajeL6WMfYvtTvwT%2BUtFlVkzGHSdTIdfshswYML6ea9asYxPrajxFqHql5%2Bu1jjvDIx2qQ5jShgl9zhVGZ9E935DFqYLdWiV%2BQGpFlRxX5WfbdeGmV5A5s0nkKW66zhtCV9oTEb24thaqInPB6fN3g1ftUVOtr7xMQTR6UAlzJc8Rt0%2Bjg4lJmBBBWOT1YWZcEnSeMW%2BLq9qLd26Yybrptz%2BW1AjID%2BZEPibsgP0ndwdLbwf%2FMwMQF7F%2FwMkOSb%2BqS9zYuHSu23pAMmwHstGBaKfUUYb%2BWkq4k4aeCDhgw5BrSQyEurm3dBAbU%2FRiWUjCyXiAhE8h4QYeBqDYB25g4Mir9oKaGulRk37GBCFl0u4C%2B2UsF0b6uYHhqY93xKf2UT3iYmpekf5v4GCB%2BhKXs2pEBAJ4Ed%2Bkneuh7LbzrN0pdKj2i6KPOVb1PwEumzuvIgCNHJRTxUoRAOFZ1v9aUr%2ByRdJpTDK6rO0SGmihXl%2BW4kkowwazfwAY6pgGP%2F50XuR5EyG92Q02BbPfX9uqf3P0VPY%2BAssiTaoS3Lm4APRtb56Yh%2BZNp8%2F9zOL4JR1615%2BZ9iacgmRAYKTAJmlCSWY9IYD6EjJ4nWQNcQEVacVxCHf5yqr1S0SUvByVy%2F03uAxJ13yaR%2Ffig9%2B7KrFjSDBpRRTiDmN0gRtvgj5f5xUiI8FJ4LEhFSZHXY8XpO%2FJ0Kw%2FI%2FLmp0d1tcd9s6RYIXyY3&X-Amz-Signature=ee3100d12963eb8ebd65ef010d5b98d73b579d1e06982eb630978c3c6648b769&X-Amz-SignedHeaders=host&x-id=GetObject)

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
