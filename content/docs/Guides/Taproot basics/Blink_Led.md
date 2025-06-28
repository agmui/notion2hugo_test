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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVMQJ5W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNXk7oCa%2FdlW4Ru2eQZ%2Bl3j9R8cxntjGzPzU0cbSVj3AiEAv89TpFK6P9di%2FCgkrRWjNSbUtaMyVJfb5Vk%2F7MeLPpYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPPEMpe%2Fjs6VsRJ5yrcAyZiF4uQg6%2BrfMnNsqsmaz%2F%2B5v7ELw5FsV3wvok6BLuCFLEE2i2eSMgxi4fy%2FdPIBhnDXpVI7T%2F17M39OslftoQKMyad9bvquBM1ecrnngFd5Z5zgSrDz9bU4nRz%2BNoQk2tWMhRtAyF2%2BY%2B%2FlrDh83Wz8O1t4X1042Ih8NEtgpEjl7ZZkgawgHNnoJi5jZWYuSR%2Fipq%2Fv3ykFmtiUxRi3wSPsJ%2Bv1OB4EM8qgQtQ2khoJE1WjjO3ssM%2FKQ2Ot5iqJGXLhezk8NSdcwingJTJohz9HckXRJ9e0k1XAblMeQmmbwrjyY0pxP6%2BeeObzCjJfmAVsli1ccW0cdMsyvt1MNdIFn1FIyAnVALfVyWrNn3yPp0MLc%2B5sCpFVBWZrKnaC2Vb7H%2Fr83vZzKplFBl5Fj55G1XmBEgSSsZNfgSaF%2Bv3vjAFNN%2Bcy0%2F%2FjdhHzNR%2BUrHUf5QROGdPVPiOZruiTP6XCOK7cCVJxX%2FbM%2FSv5szEmbZS1cPpwpQB%2BRLHncfYs7j5dkgrztQdu%2FJwNBvbve4AHQNfmzqXcB9FvFpFCwi7BXbgwSNODU8Dv8w0Npv04dvQvSJAjEanonvmjkTegZOCAykHjI5Og%2B%2FGBd4WE9pURgrGf8XLJdas8WIQMNDK%2FsIGOqUBjjZXDzfImTLuEnnudt0FI%2FWCjAT1qJePFlEMnFajcI11f7lvwV%2F2vBGwjmQ87ywf%2FBQbpbgHXHZ0emQCPOHvepLiJFpO0MijolLPZ9hQ2NupHPALfuLlURudf4JYPG9XwLqK%2BHBHHicLtyxEuc2ZWEgEg5T5Kc4NCi0zqU6rNe6iU5zvwr2jMAa3DdY2jOjvB3aHhV3g2CMio%2FEIkDszU%2BlX8PtV&X-Amz-Signature=797b459a9682816c3cdcf0b3d680640b8f16f5e664c5d340057f2861bde266e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTU7WE4C%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaOYpDStY2VSWlDGScp4QYOes%2F9nxbaV%2Bc0cUUdmPZWQIhAK6D88K1DVA71HTJ8nOZaYnSHGhgk63cqv3upj2IV5etKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysVC0OqVFlwg0vbmYq3APqB1yX97ntphihxOOV4zcz0hdXBiLTSuF9%2F7kkD5xUIDUqU%2F3sLpI8bK33alykzLSApLOZL3CCxb3trkEUwRP%2BKJfmhf%2FHEvam7Tut%2BPmKY27cV1okitRhQSMgfPkmIgq0NmTNOqBeRzKF9tVgAIMpDA427JVEX7ShkYGyUn5%2FgLo42Gbt%2B0xW3b5MqMKHd59s%2BAB3TjQ90Hn6iM9BH1YV%2F8iT1VEbWp%2B3fP4FZ4jFr6g0Hrcsal5bgI5QSOnTOqFJKHzRZNe2BBVwrtjxGjQLoZ2wHSibdtdKiZo8K%2F9EnQD%2FN9%2BS26R2jce%2Br3JlvJsh4CgmgBsWc%2F7X%2Fkj1aWFFqFFDxtMYN93hOgTreUMSOe7Fhww3yy2ub%2B0buckDzPRLGVUXQo%2F7Zx9wKyW1vMitd563oDHQDgLw4ktt3ByJ0lHEOBQTNK5NJ85%2B8jRLtFvpAlfPnI4JS6N4w%2BF0Q0t7ZPGdVbvFxLFLl1LGxeUjAJDsUE8FA9XvPRmKiBEQA1dQftCTuzPngjsq8FvAeJgQfVAH3hPiRULGWmBx1I66OPT2I8FaMvpEUh1dYSJwOkYYI5aG95uOgTFIqBqhCPOsZx9%2BDgEHruhiqV%2B971VyqK0OLg2YFWHWXX6BxTCIy%2F7CBjqkAR0xwbgzlv68WC8ML8qBVOt9KP7eCCEcY05XG8P9IXZjWvlWx9dZYhRG3Lmf6i%2FNd%2Fm8H73WXLmvc6Ni0iOym4hyXC1CS8mORSQSAWYFjrOv8EnmXCezG6lkF3mkokSKozZrKvWE7hhTNprBKwXma73JXvdWcBB3NjdjCRa0rSoN%2BLF3LF9fNuzj1BGBvePKMKMpj%2BXW0YbCzQBwTJ0DWVLYiqew&X-Amz-Signature=7d4926d251168ff4e70862697574bf5cbdf74a93bb2f1310741d55a80aceab47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
