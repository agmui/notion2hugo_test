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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHQCQFF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwAkUpYqyceR9vo9a9vjqMk10OaxTpbKL0Hj5sfH3kOgIgIuzRN2bh%2Byo2wEUAzKg%2BJSAuRllyCG%2FHTo2UFMoeJlQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCjVnBRuXXtLxiCeRircAzronctRCp8YUPhEWagQowRlbHQUI1ew8oG%2FiKcBKF9UXPC1ui5vEQ2P%2FRaxXN6kikkOvgaRKLkc6jMuylCr%2F9EUe0UyTRHkcF12cU9zcQFz8AQdHz565RY1N1bR1x264SkuDntlD4SSwUnlX%2FSv%2BLBKs2VKh9zgyIenTfDC572iVV09fp%2F1%2B8Im7jVpj5esDFGZlB8M9pj2iitiCQKI4n063sf%2FqgTcvQgpWUM1sxpI0lT4BmJZA9iFYdaXtJx9sn%2FfIAwsrnwzJQ3drh0qHYfl2aEKyxFzh4cb284D1byzeZ6oXeXIR7UYlRmbCFbWB0gAh88Fj5kvskxtZJgROewR2mfL7wJAXU%2F7TOsxMYHO2llBSTyC6%2Fc58X9Zp3Az%2BOGaV8tb%2FW1s8kCS62xP8qwCuzdyMa8GCan8V13pRcyKwn7A1kZN30xum%2BGKVlEEEQIeninnyUONn5V20oq4LFiBkawKfbtzwUO5X2TEbudLdnAjfp%2F2LZxX%2FEPKbA1PkI5bbYiHR5pi2cfYAvTnFUdVkyv%2B%2Fi%2FJ%2FhR7QM%2BprMctDA6qeDJkRzDfQnzxKJylzFXkELFcYMzidG34mk8XSl41eQA5foVeZlf8hgR6VwkZ1z4sQwTfCVwNpAHBMJajyr8GOqUBSvs7MfnWow41Hg%2BbQSbo5%2FkpFPBBZixw45GhE8K02db%2BzNXBfwoKK1%2F7XPApm4G8OMW7GdLyfdFRZo6Ut7k%2FDKEvEqZgabusWUBotpGPEuBwt%2FZu3JDyfTSNUlfIsnJ4YGH%2B3Sdjv%2B%2FuGATz6ZqWrC73eOom1i%2FKsykpmpvis%2BEhjjgIFqwLFzU4Q8oRbIdx%2Fdme8qf71%2FgQvOu%2BSNFVt%2FkWlvlP&X-Amz-Signature=ac1b9722eb3910a394ed4ef93fe050081fbafb3c8c87d7ae753a973a08aaf89a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IRSYHW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKaQTmBV8%2BX38niAkTTyz9PQNOXNwNnciocoQtv48gIwIgM0JgFB29LXY%2FFdeSGc71EeGM6ai20fEKqglaKuBZhkgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEUJz9Sbc72vWpuyPCrcAz2o5NROblVCc8PTEjzCI27Tf90b7QvM01T9DROy%2F%2BEbVIrf8%2B9L4uIBgJFpgVTSl0YfpVVqRzVHAtXNrEmfjnYNeszbpWlSsNs0RmtCuTEEV%2FJAGFzNs%2BAl48gJEcNhnIwXisGnFEjBekFhUUrw4bGbkme8LIXMffvFsVnyW6dIUlAT%2B5CC0pvWF4sqQgy3WVetT4BBZT6ih8mPn6%2F7FBr8zRJkZSXNwfqcd2N61CIonO6BRGIWM%2Bvd5e8pLYhlaCWVWVYSXujq3WNM36KYZWRi8DeMmn5khzIxu3l%2FnP6YWlFp3h0A2Fnr8GOireCTHk7EX8V6WLyMsgtNtABL9mQYcViUDA1vu7vo6ZOuL0e2YAfGzpp7C62IZ6nOwUJVp9JDiMeN7qvJ2g%2BCdVWKrftJsfvjtl%2BywYHAhq8wu8zEpro9%2FEXtFNS6eTjCkZ3qwDYMZ3YFmgtSAFnZ1sRUMwk0VtRaWT8nCHBPz8h4VK16Wv0u%2BV5y1nE61Ful0z9TuSJDQFRsgrxrH%2B5hGffrGLgHy6%2BvmOGUUKLhM14pMZPIzjjNOLIgoggr816AM6dWdHJPwGJfy2K6yEHrCwTPAkJYZTmQcnzTzT8fw9EuFndkffc0Op3W2DuUlTL9MPfyyr8GOqUB1P6ol4cmpKObiYC9vgJnZ4H%2B6jtC8qE%2BJC7FeckNn%2FrLr9zLBR3kZW%2BwNKBuzm2G9yU1qMuTbNekLWJGAHtPkSNYbLvAoAo3gsTv98XYGWvV%2Fi0mlUX%2BPCzZL0oHUoXHPUe%2FHwbTR2ydB42qFpDZPOsEh8h%2FS%2BiwcOp8R26K4paJTJEvhpU9VQv31Ajm2zHGISqEjOrStYK5Lu3vxLBYyVZj6oW8&X-Amz-Signature=c418fd0db92e62a3f1e04b97b5674e0e2a953050f03231bd9ec5123a43cd1fff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
