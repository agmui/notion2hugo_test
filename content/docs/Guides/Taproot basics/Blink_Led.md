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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRJOHE2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCwb%2BKwiLPVJaM4dqWLCZ%2BlT5xQXPLu48Lofa07mBAYJwIgWnlQJj1fn9kYYlegmXzoBgmwMH9UbSh%2FQX2e6jfScxUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3arS3SIkXBTDLCXCrcA60GNSwK25kUa9Fsjr4mH0fG%2B5tpeWS6LbqLMud60AJ0vkAyVd47AV9aVBpbGvW7Db8xIUZ1OeQzdMkTiBIH17VD84up2Rv9z7yPIfkXVPfFa7x7I4kIGH7VjlgYqJ1%2BjJZvtAwP4JyeXHHWuziv%2B%2FVteXRRLRoREhPs14eggGbBQBLYvgqdpqfDqFMzy7vYWKW%2FRMGVMxa%2FK8pK%2FEL%2BlkVD7KNaoWFejtWl1bnD8wRoGJi2D%2Bb%2FngcgcfTi%2FXF6WohPEbCllE%2FLvEjK9vxoTIYgGhz5%2Fau%2FxuZBqbo4Fuvw80MbjVpJC14BrpIRnn81NDKNduF%2FNRqMkM8ZgNMaLpvUK5NUUhJSOkML1t870nCrjEASuICwpUE6v%2FZ9a%2F%2F3GIimcH1bhdUq%2F74R7jPKwHreLH5kpdrZG%2B3j2gpblKh73rGCzMZwj%2FMnMUvEuuob49cRy21xrzJKb8L%2F5iXGPIVWRCf4TM0JAVMiIoCvPTEmJdjsAHzJ0vzVPmeucT8scl66b5gaDbSXTCxGr8%2Fxr8%2FM1Ai5R%2FcNGTPH04giniPFkHtvX6nJLzR4oOz0zBI2IdeddSC8SAW1StzKRvuVNTcMED0DS%2BIz3ae58ZuQwZmVQmNCAguRTEw7Jg9pMJHyib4GOqUBHxKsLhJV9Q8c5foOnKNk%2B7AexEPAWR%2BWsed5yAZ5pkyJu32r%2B0rgkJrZQ4hC1ztdfAv1XM7JU563iiQYDlnsHNAzwoT2pfEXkcwgXGC0UYX6VP3%2F8JkuwDt9Faxt2BKAwEGh%2BEawVUYHMMbYMJ99TDtdto8n4b3uNKSLAj59TMkJjMmIGhx1Yjv0%2Fh6xHGG8De%2F0V9IS6oVSsIrWHOhbpLAr1Uif&X-Amz-Signature=f0c7ddb824aa662d9557f041e7a449bd07bc59d5a7aea281f226f0c4292de27a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUY5REZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDtRT27rWzZnrkYQpkZ05aaJPVEKzf9C5AE%2F9w92AjaFwIhAMgxvl%2BMWUpo5NQDlZDxCdbgwNo2Mj65gOlexr3jkmFLKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOOYgAoa8mGQ2%2B1vsq3AMEC8zQatapUeVj8oud03YdkC35Qphl5FD9nkiuOOs1fhnYItPo%2Bxi%2Fu9vsZarEyocuVeIHhwpF2yFE2mNwq3CVUynH06EdHXwsZEo8TqBqNB6GnUgLGxzI2raJueQGKv8rgzExkfjAK9KMyF%2BNrzzN4q3qjIvb16kmoaJRtGSTjNkh0I%2BJ29L5PKllBXDD5TQMddcjgUCt8u2JJvcY6dhpfgr74hieCU2fBDOSJy%2F6isVmULRxKt87qdNnH45oCLA31PwIRx%2FyYwKV8Tv%2B3IK9370Qx%2BlKtP8HkjqHzs1IGdCNLcwprwg7tQEPj40vI7KkhuM8x0i3p%2FquaDKVww8vmeRGCKC6THSRYs%2FC83d%2BZK23b%2FeUTmTxWciZJgj2zRLEY2h61EEIPo1sO%2FcEM1uaHerdmPNQQvocwmp05JfxMqNBBPuxZ1UEM7PPVOjI9mff2KPvyZBtTKEdQfbxqNqMshJzF0PXHVqXAReAcEnSnLd1UJLXU2Qy01sjAuwqXAykejKrmtRprNtNEhlC4gphOhPWamy1nUSMjaAhkoAZVtBkAmuSXNgbDw1q378DJdTi%2BSa5e%2Bn1fx3GFUlrth7Sx5r8A5EgLbMDCp7I1HpYBtwjMU2R4F%2BOHawO2DD58Ym%2BBjqkAXxPVIl5d%2BR%2FUOTjsaOhEG9RhwikEC8FpVkcAXKONcTZPVG9l6wreW41Lruv03HLcpLO9pOd%2BZ3urGsfFx%2BJqP7eVTRDyv3%2FMrgrksDjb6hng1KzSTQ%2F2%2FTTVo9AHKhBJQ4IpLmx%2BgBtqgapphss7UmQWTGH7lZshmfSm4dbWY%2FXU5jqQcoweBssNgH91R7u2pK0FRN70Ot75C7JOJif8b%2FIRtlF&X-Amz-Signature=55f9ea9573bec5ab33a81aab16a52949f0da56abe1383fe59a8bc9fbcc34910e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
