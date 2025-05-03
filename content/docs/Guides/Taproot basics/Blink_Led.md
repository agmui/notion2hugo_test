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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNLWZX4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIG3Pnir28hTePDS%2Bt40c%2Fm0llL2TnGPLHajUJExASO0yAiAIF%2BAk6Kaw1qyfTWCgF3Vg%2FwEl5j6G7VJw1l6o8BNN0CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcH9HAS0xROPQT0%2BIKtwD1YkipGzfkXNOQDeykWCxryq6XMk9FFNrESbZEYtJqX9D1DDu9RK24YGqTqRN4AhfbjyHpjUkcJ1wQhwoJDC01YZt6JnWNHu82WrreaeK9bwyd9cCZSSODhxnNIMfO2OqDYtoZtXMuF6KGROt8NsFEcYkvh7jj%2Ft0FRcZ3AXcrodl0wofdTJCBJlZqy0EFmrNN%2Bw5wqndPLNzMKmjwMRj9z30mLPxo%2BmsCg7zo2ZRGo9kvM9as8fSSd9rxOQwlBVSa8gjNqAf1%2BiZBdvAL1q1%2BdmxB917cArr4De4PqQBz2zMgH%2FgA3OjWVarXqQfO%2BwCLBNwXRbR3YMj0QyvdzLN6tkra7Nwhtn2QB7cI3yilbrTsfpG%2BBKG4%2BPj2DaA5KQaLGYmyDFFGwgvifh77EOt7KfXHGGarObYXXdZ6vdtUFxasLJLQoOPDozsRx8kJ4ZBOqmc56DrA0fJOxT2WNN2T5Fy%2Fk%2BFNvtJ1%2BxobhZPUnUWbec5xfxxxXdPlRmYZ7bOnYxBpxkj5ICMJoBZqZDz%2B06pduRHYHnMerJnTY3U%2BdDu4vxn%2BEFex6Sf0%2B2pYm8CCBsGW7Ccss7fAZJboQHYyiojkLbUOLGMSwqGspO%2FJJXNObuKDuAASZ0QHpgw5t7XwAY6pgGtCR%2FMuX3pkS%2FQ%2BPtiQa6rKJOq9Ln77LpKwFMPID%2FYMHCgvKVJIjJqYs4F3uYHy9GLYSyymHy45WptQT35O5qqLcPAyLJa7xoUB%2Fxmu%2Bep2hdWf4s9yb0krHXq%2BOsZhUHezkMJWlF%2Bd3GP13LW2Kn1WU5rBs5YWLApfqDcLNEer1nM%2BlGJbZgg43Yk%2B2zmAcTODxdd9ao%2F274PMt%2BD6H8qxZUYIGpB&X-Amz-Signature=ef21e64e5a03b4fb16a559a1a738118dd3e1b072e99b673759ced6420a0c3ced&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6W2CP3N%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCvRmqGiWIt7CZJrnMqLXbW11kUCQSy2tmM1fXOXKLKrwIgCwXGI3xuuTfNef%2B81OZP5rhF%2BlnxMJNF05BFEt7ynSYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuhKjRyPWAIhMVYHSrcAx9knIzavrA6FUUrfaxPmCc1llLebgFChrfEm%2BtptnyzyUMGS1M663ZekiC7zgjfdIHNqdxljvhhukH6x3W7YZ26InfpV7aF3n319vY6MgEUEWuM%2FId8v5YocQxkOUymUe4ldfOZMn5V5DYdkaXSJ1a%2F3%2B2InkyXlpXYvNWndI4DENm3YwPSNAApZArM0MW%2BHZ2RrcERpu%2FPzoK59RKnEKBOp6y7lxUeZ%2F%2FlvGHmEM59%2FNVoi2sct7sk0mbDEAYj2IHhRpqyxFhHS5%2F35pRg8Izw%2BjnqZtsbic9PA6hUyE4jodIto3SHKUSEzbBStNkbE8lOnwVAm2zPZ77kPM41cR9PcXAF9seorEkYQDiT4vto41zgjPa2jabTaGBVNViuS%2FlhokJWN41MT%2F%2FIJgIcLDIAB5VhJNlv6LNE0zmd2fuoYA%2FvoqqZyVfzdf%2FKQ9ruCCxF%2Ff9zpmvXcDDJdli1mpwhlkZFC9lpi%2Bm8d1SP0IgraKV2dCX%2BvOyPBRHNR1eTALRRXMNE6yp8jNzJJk4ld8uY2nb9mkvkQSsGtLnSXNqfQaufCtLEFpqHFoE%2F%2BUncDzx5fb0uj6HwGuXPn5b%2BZmNctAxLY0wNZoMZuaYNq1DyZuXKnITa3jKtn4ixMMre18AGOqUBWhnQcZIkpsYWy3CQeejFp%2FIYJ0GsECD04Hiryz4dfbJjiG0zoNxv9b%2F%2FvalBcq7%2BYxdlC55Lg2gKMGCGldaEOdzj4QAPuOEZRNai9as2HaPCUO5XxdhVjFA%2FpkLSThXNyPLg5Ja%2FYsvN6KlDZmYfHSHlf9%2B9jNgNUNQbbfo%2FxA9hVMiarRrLEkbvS4Ln6RlYonkE91%2BZngh3InfHAuQ%2FrbBGVBkr&X-Amz-Signature=a9da8aa934effeb30d5baade176cd38ce533a3882bcce54886127512ed2a2c29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
