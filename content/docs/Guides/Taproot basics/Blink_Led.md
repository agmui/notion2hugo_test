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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7NGVEP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICemjy1MyJr7ldsfjsq%2ByXh5xDdwnYqeoOmIyhKvwQXHAiBrZ4rpaVPeD9u85vw5S1fT9Dme%2Fny4cUYjNs7DcqciFyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM66xikH1XpRUvXaWuKtwDTP0SOO7aaBcbuWWvaImHdspiWljBS4vFjtHR3TKFsHXI4sjZoreDZ21UHMBb3OBl8F1YwDflUHYlimEhlWVt2o1RTJArxr%2FRey3gEXGYSpfWSmacM50ojHLxtM%2B%2BfxorF93wtw7mWUt1%2Fw08%2BJDysypYRjZfjxpsefzEZbX7zWkCXWn3J%2FVOdxFIAfQfCVp82AMb7BNJsUODrHNaSvF2EqCaZjm%2BLmrffHQEIwQyVwWYJruhTsVk6pyBm0kZi%2F1sQ5fBkv4YAEGruUa%2Fh%2Btb1hnvyLMSOlDPj4h6BaDBS5a0SAogeZazFz6kVil%2BxgffOcvRCrmv19SJlhoy91YsuTy766PV3mOI5PoH1PhN%2Fqdctu05dOqPO9rNc%2F1yIsbFlnrbNr0HTSlnvQq4rQg%2F5kPJtAR%2F0IN0hTpEPknLqG8e%2BxrBTaeLMqKhxoC9JllmaRgVXMl3Y%2BOgu%2FwZn4wiB8%2FmxkXobDWr5DwvoilatJ9HFGJCMCJeAPze70GfpRJo06tT46ejMPCgqJrUM3d12mnSOINXkZ4guY6QN9fsE6OITHo91RRmL5NtLMk%2FBb1T44JShOkRwGUPQ66G%2BqWhZWiaBIAojbddv%2BkpSzpuq8E9PJlLqu3cnu7OFzMwj9OcvgY6pgGOK55pudW6NQjsPQPx7y8P19%2B35nL6K0haeiq4vYQH%2F0V3%2FC5g7vz6QaVhU9Fc8F2esHcOHT8uoN483D7Y0CT38vJHFeT%2FqaGZ9tOQ6X2clO6sO7SFlyT7WlxB%2BRz3vP%2BXA2bALvpxtuL278CM4ezckoZ5xvx%2F%2BB8uFewoZ%2BVlkILHUO%2BOGdmqX8WmIUTbijLIFgCfWc0ERRypYg6ABmK4lxROmUvM&X-Amz-Signature=59e747e23a34b3eca90a1df1b2ec220c126f106846823f20d1d381db88526041&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBK6HIX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbA8fisRo76LOqk4uNNes4%2BUsNa4vyVaWgPxO2a7V6HAiEA07TgQcPho50oOjk4tcI7OZYmyrIdxsODJyM2i5nURWgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnteFd1%2FdcxkmBfVCrcA41UB5yHSd%2BgHsoJtSeuJAK8kY0UmenBbzs5kjPAKo8ZCYMOCcp%2FoaJR3wRMYo7Eb8nk10oa1dClD2UtMrhED74Vl0AwwSYuGIMTVZ6zFoPu00exY64G%2FOjs2RJNAgmRKVvtnii6uATVBRx5Fn2Pt%2BKmEZGA%2FZGcYEHH9fkf9usSo7XGRw%2BTl2OH%2Ba%2B3Ij6gSzu%2BRfoZ6MM2rcX0FFFq6oJ%2Bp7ji0QSQiTDex7JZhzAD41A1xHuBFxA9gzb8%2BvzQercB2dEImVAc2yeK2UxzYUe6J6k26W8rQo8x1F3WKwISaM75w4MVSxSaoIf97f3IwoeJtQwV%2FahKUozQ9r6QOjUNEQJxyywoKNPiDzU35SF3Jr8C1DXbOkI%2BIXLs01wd9jCtzySEX4uYx8QEZJofOLQdZtSh0EAJz1EmHDH%2BYSyE18OaC9b%2Fjjf1eyIPsSWUr2PfXN%2B15A3PiMMy%2FUzAeKo4kcXAgQhSEIPGL56Ggbm%2Bni5496iHbfBwEQaZgDCuiCTTvACBqpjv%2BeE5B1CgX63%2BDIVy1ONX%2FuE8dCurPRrm3O4BSwm0TYRSFPQ0EBREwweaFHX8DK4rHGYebRBbdGYdxJ3hsavx6lzrQ%2F8Nl2UDh0I9yfsH5amEX4y%2BMM3SnL4GOqUBqi%2F6eH5jITkGThaZS5zB%2BgnOBciOxNWAXatTbCzMnZdcz37nLe9FIJ17CEUQLyEDfxK0%2BsOXF5zE5tWX83SC2zRRC6wkYNumUuEPnUIaKZKhdCZiPrUVBEMMx%2B%2BukC5h2qDJMtVFwE14vp9LU7KQpNY0uKhMwjMTaPASEPYOWO6Y0MAOKVOSeDtSUyn9ojUltZPOsPRAhD7bGjwv92RFh5as9rmM&X-Amz-Signature=0fe9adb84e72ee50b8c7ba04c89a69709d1bbca2a20b25a556cbea12bf7b883c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
