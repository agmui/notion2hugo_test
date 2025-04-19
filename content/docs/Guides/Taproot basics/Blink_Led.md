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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJNMXQI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGMsEUQS94lQrVVXsTTlEZkmBtXjCK%2BuS56j0kw8u8FCAiBaDXxcnf2XJHt5ztQEQP17vp%2FlcR%2BoeYm0gR7sZ%2FoRMCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGEYAni1FVOq8ivP6KtwDA4Nm4z5QVTJ7qDuSa%2Fj5yPHtfNEAeqaR7y0OqoDG0CEUh6MqlmldT9dGL09iPwCznBCWT%2FlmZ7nMXNujtFU9MYw9HAhbvykpQq22JYR%2Bu%2B02W0VAYZ1nddn%2Fz5rtn73SNealkBELnBGkjLyxT%2FOw0zZFAwy08ov8GfM1PL2%2F0ABYx12s8hOtD6ERIKp%2FOMCdYfJrgI6IVA51MI38D3lOlpIoAZtkNiHhxEBkooaNoHCazkXyYluPxglVayBWbwp7UxWbyV75%2FsAZSVEI9DDjS5IsJek1sN92iC6XJI%2FyqSj0hV0ImfHUMOKbMSecXUbDlvmB%2FH5rvLdtSgRUwMiCHx2hV4X55YSedcoNCGWFdrZ3Vmz0Pdn%2B4YSXD%2BTgb90N8HKY1BxJMn5UqN7AUxDTw6CrJ6dPzgHb7BWyWzeeMsErRXuwFmWLz3GmwaFMBtMS6gkm6QEYS%2Bs2AVmeZ1R9DZ05RgJzYsVh6vhoDsnmPZzb9P%2FUCq67NtJ%2FvoN4i0O%2B14PYZd%2BS25qa45Dsylju7q5vsQPteOE9QyigZLrwl8ZmeIdQuR6ova1F547RCos7B%2F3aXUcLubJEcgDaRepUUPGgVnhqDXx4V%2BROhoumX4rM8tBeACbWswkqBRAwh6CPwAY6pgExEhBT0oaRE1E9FIB2lJXJy%2B73oYvRiQTGETbA0Lja3PqTR3cDFGQjLQY7XYUF8%2FQZu5k77P3u9Bk6VH3TU4z5wemHKgxGjaVje6U8vOB8gaqEZY1A7o55dRNjutPu%2BB2lTy4ZGksTlcQdluQ85V%2BmUatWibfUzBMqKZa%2FmoSJfOcWLWN%2B5aghrfmGBr%2BnQzzMafYOZe%2FIMraab8YMTikMrhZXpPqq&X-Amz-Signature=f68071b86d113b17efd76f78ddf82a7768308495040762256f140b3ab1015a56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMR3DDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDU9El1unkOcnCDxxQdUxgM%2F59N8d3fsjBlvoHnVCBGcwIhAK5OSVTQYDN0N%2FXpVu05HrhfA7mw5Qi%2FFFcA4j9hpJj5KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXMNRCQD9LXYxubO8q3AMb6QaiZrw3uAmweqhfMAxRuBtbNsUdDFZKyG4NHzqaAmjFoHekebprHxQ949d1j5d47wtypMdkJF36toRg0K8FkVi9FLjowG%2BWQEHVkmlF8KW99I%2BR0EeIpUVvocSljcSofnAKbyY8tKzD2Z3QJqGbglHQEbwOW4CXtzeJb3yVA4CYsASAWADazDJZ%2FY9BV7f5xEm4sh1T4qmXEGkUZsSJ8sSlxqettXFfWSRSlJRuls5881z8B1SMC%2BSt%2BCzWPpV47pOk8%2BcZBEkq3sLlre%2FXIC%2FQUf%2B8d2P893kvdZ%2Bk3urxEI0ZGwx4yI9t%2B977ZdBncqDMyBibqs19HEKs5%2FBqAYA%2BIBTbH4hnui6e9Fmgg4XLkaak51VJQX6CrMZZZPTOfda7s2STtLn2L7%2FbFBs5csI6Pr0ZwDm57CnTYtv95jVxefKVyLonX%2FefumbkH17uIEWJyMMKAgPgyPZH9upWBSiqaM5N%2FtgV0jG%2FyzGpV3x0mvD1Noc9CcsPo4mOrLDPZZNYfSug7%2FEpPNSVcYX43YSkffvmUYmirVeBzbsAUv8pzMTsIClX1IGeK7sMeO%2FTLEYpq4R0TEvMwzmy6OKyfx8fGwQYwx8XvNRcSBY3emZs5lC1QH37Dto%2FAjC3oI%2FABjqkAdJTeyaR941KzOwL7zboLhUa%2Fv%2FxdZCj2QF5LSNWN%2F701PrAW76QIrsO5tzSXhPs0pJw3EW1FkhD0k4IOsHPEiRmOrJbDjmMnoTsHCrUJB%2B8Psf4ysyCrvJQkvLUdR8Me9DUx7d3PTNnfcqGUhtHuZCOCUcAGOnz05uXaDewquQwnkH7rqxtf0VDcYsx7F%2BMZdKyfZDU8YWYdE00U8SUCVy329oI&X-Amz-Signature=3165c97d251d7a81b9915e3985a687cd9dfd29e9b5e60a0a01c674e7348f606d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
