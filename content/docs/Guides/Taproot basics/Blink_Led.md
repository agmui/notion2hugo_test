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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZPX24J%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjzKPciWNE3sLC4eyqm%2FwHdAvrsptJT1ORiwA6iMiWKAIgHsdgSlWDqfNUGNMrVnlnEVsEBI7lDwJDlLez4Iv7ho8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOsG%2FseYp6wN0xrrBircAy8yGXAhQqzD6HE9%2BbPnxR9iC0NovlVcpKzwzxP%2BTabhcebY%2BxzaBaAwM7lrT0TfyU4MDeJ5geeZLEAj8uI85SkVmptBQs2WXy11UcHwSS%2BeWd%2BIpZ5GCLAjUls78FvxKBg9OMnpwaIfOxk%2FrePWA1%2BCzj61Mo8%2Bg61XVNPJ0KUwfXgtF%2FZsQTt1A173It4693LkOsSaXu2pYh0PrgcjFNVR9BenVqKjHePjvHQCecmfVmnKLLfLZYEqjo1P%2BpfTdr0cen70b%2F7wtAAoF4fcC8%2BGCp0X4khuW%2Bdo%2BnZoR0LQaXECM8jO5kGhwUKaczOV8trFHK7t3PafbgRZT3%2B7zj%2BAjGrIz%2FCSnliaGq7VObeHl%2BJ9MA66dx%2B4GBmBYQYqUEvuURZEkn9LWnLvfVfAVsxNjVfad2HL9fakwM7s%2BId46KuTM0Rztfz%2BHd%2FHFkd1qqRu8%2FQw347uifaVVZqvX69R9gGl1i9reNdeW19u%2F5YScH0Uaz2wmsKfGg4rnEjt06alSOy5VGTaLGWF9Qd1FQF6JorkUq5VGltSVfaHHXNehlYpRi6AWKG%2FGrJPHB1j9C9SCdX5lyGGN2haVSUpWum6eVa5e40qAsdniGWi%2B%2FmaTlDHdbmjLHKUIV7FMJnsz78GOqUBI%2BTbxvnXMmqMtkYwVPFR4PKOahMBl2E3FAVePxR9TeZJXqCmOp4lAw5gHyJl%2FxoYcIk4QKeQ8DpuEgd3EYW1Ezb9k%2Bk0Zx2k9JfF9sP%2FfjsAiiQrObp74kvaaviZFhfbupvTmxe5c73ponWaxrZ81D0g9ttmS%2B0Z%2FMbKlQjRR19n%2F7kJVXIVK69YYhAq7gKzO8ciHXuJeZV2BmZqJiWrN46LaR5l&X-Amz-Signature=0b41c180ecbdaf968ce65f0e37fb3aea6fb3fa545b9d6cbab617e338be9a2fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFN3ZDCZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMHl1U92FsNyhDkrxRTIqaosJnNaNutoPGafI1cHz7WAiEAg1%2BkFeH3VymOPj4ScE1SjLNOffvGvQAX3NkuKLN2034q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2Fyv%2F0G34tdKV9qJSrcA1JIqcRhdYCjWnc7tchUpVmUOYqOmtnhU1Iv26n6xD2fprD6HGQ2wy7xEKgJshp2qWowwqoeWp6qCn8QVzX6BKVCzuhERrgNJQ0NGZ6l09jxxB%2BdxKYMVhgkX1Gb0pLOEmv%2F0roVoeFT7Go5ldV3GTpIEjuiIGa4lcf5nnKHGMRF10ekbg7ku4fBloFvuf%2F2uz%2FJ8mu1tqaxXl6D8%2B4iAuqvrZHWpKdMUTwtgLu925ZWIiS2uQttk%2Fs2IEagr%2FNGjRMNsoyTw3Eqtfg1tjSO6XoBAv4pWKQ%2FjzMB%2FmU%2FAJOUIeYarR6sY3z8O17ICLERfjAahtiCCmDZZij6iRo2U%2BQBRNUCEGjDKbPC5iueFDg4nA2r6RbQXaHmjrApqHFKg4uKxdpkAl0eRFKSExOth0k7ivmbgJEqkW4P4vLcGzReyfJkJ1mqaf8KYBseZFpg01%2FbMIq38S3KuAAt3mm%2BUthYwPqMVwBsnnpuJO%2FL1muofRPeRrIRwl4G46sRp2nletukyp98CW0nZJzSKxtwDmDiycDIAoz5gna%2BEAgu%2FVJgVVHmNzcpCP0FxN8nTd4pTF19SuebVUi%2FcIanelKWscwwT9bcnwv%2BV9NtSpjqZAxamK1YVruBVKih%2F3fpMJLsz78GOqUBOmtVNFwPLoawO7ZkMbc%2Fu31t8iYc56LeucoctyOIjXHwSrIj9heUOI%2FRUUaGHAd%2BZ4nLdVIIutomWgxge2GfITk6m6ZVYwqMZeq5PgzyombVK06HFS3yg7aDT2%2BuTcTP2lPdPhKI169V1%2B0CZIoI3LSJvoythmgUYry2i4JHGPy9ZZmcHONaCgZJePtsyJU73P5Kic3MN51Csz5fjO4upwBC9f6C&X-Amz-Signature=890da8276d0cf812dd9dfd499e0722ad0e1eae1f72ce57ca84256f2cbd252b46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
