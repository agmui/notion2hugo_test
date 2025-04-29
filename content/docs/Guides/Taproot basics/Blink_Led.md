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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPB6FIT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVWvazIrjM9JQZDraJG5bgTrAu%2BIUC4nsvDLVzfGa3yAIgAnCAYJYAwUNcGoiiI8DqaqFsUfQ3NGcbN3qbzjDJ8AsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgBG53lDX1GfpqIhyrcA5kRc7LKVSDBwPdTMTZcjakIQRcbIqLQbbGo82u4LF%2BHABNGMOBJDpKldnkwpbdRjGIL4RKpKDnRqKkEoa4XnKvIYUCGd51DaKmGeGa%2F%2F5GAWWlx7EYZyYkpLcChEIZcD%2B%2Fxa%2BT2xm%2FrSzkhm4krkHo56gsqcw1MDHqhju8%2FneLvHuGmuU2BD1VcR9jGEHcaCGyq0yMNhlcD4K78%2B1qxov%2BuTJdCpt%2FYgn6eyaX4P%2F%2BEN0yulf6YZm4yPlEOZHMEyK8AEgPRv3LPMV5cwF6m6%2FKoRB4BdwdaG34pggisyMexoqet2Km1HBS4LSuHVkmAEQvfaWAP%2BhmJToowT1NMc7FoHgDG02iF4p9A8ZM21%2FbRHEhwiCQ%2Frj3tQz4DLxcywIS9fzT%2FKBwKb80f7EQ3Nwip68vUomUZW4JN8D6%2BZX7TLK0v1SKXYxnhAfzSr6X%2BB5WrXlmbCsC63eb0jwN1UbrY7oN3WPNXDhJ9tCgfHQe8SAQcBRWyuwmpfmOyao869l7A5jmDyMNrmhjwbOFXdJJueeS1E3QlBAg9sJ03bfW0EoSqxZQKKZcSe6lecQh%2FnHZRuyXHRQUzdxmlNLnqxa91at011Q4rpkcNRmpAC0cA2mT3rIRIsv8WhPWbMPK%2BwMAGOqUBmq9IlN2qK7Qx%2FvPyeea6Gix38aMVorlxiCiIda5pyHo%2B9YGuR7UNU1FJXun7rJUegps3HHNng96xiIbthGFHGpBzJ3ccCB1%2BYK%2BCW%2FRhFpIV9QZ8DA5kkqWYNhTKjYA4HSi%2FXqUhoOR1eEDZ12Pj5UcSq57LhV0d1IoRTydaHE7SqT%2F%2F2qbSHgGPy8oVOu0T1VpLj6A%2BNgSL7Ck3HQXTuzvbNklr&X-Amz-Signature=d13946ad569c29365636f2731298fe12c2d64bdcdc5a20ec289e67d91c7bde02&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJUBAADL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2B5gGK02l%2FhCt6mGW5UVUy3rAyj9Bdfsq8Z3s57WZWJAiAL9GiBGThQlpmy9w0S%2FGUw%2BbdbEBT90kvwizdc5%2BlfkSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FwUH9QWoa31OUthDKtwDwEbgL2NdsRXC7jstNEBdXYbbMiZB87ssfWLPJ0b28Gb2Xv%2FLuSC3EWg5Oux6Mrjk3bSn4Uc%2F0SoplHLshQgN6EY0PModML292yM%2F8078KVH9uJrHdXDvTtoUhE%2B%2FnpIkGAoh6yXTWfK7tlDYMG36Bbpan8WiIYzEZRQjcVySGnDCu74hEZLGLqLu%2FB%2Fk3gKUL%2BQnLPwqNDY9gsHqMfHCp8iPL8BKPISEyC7bkew6gLIuUjOKyp4kPIMkhiZXRwUtObDqu8QnX1vyr%2FnYa%2FhlwS57F6v177bYewDI2q40vU1gw5ZFa1lVdP1zj7K7CcYY2%2Fqpux9HNw41yQ3RP%2B4zbLlrRjV8LVGGB1UPaVKOmFCx6zshmzOHg%2BCBsW7yqCfbRrTXHtFVIYkFZsJvQP4BhEHexcSLr2zGMg9RD0BU44N3e9XaFtJMJiBDmt%2Bp5lPgzmqUjDff9tQJVPFt0EEKjIejcoSBIwU1yyHXZtNEuS24WH6JENvXBUABQE4vF8ZxkSGc4sMJFFOgqKijvCA%2BaKOkLIbwSsWMWzMUOokedLZE86d%2Ftg7EKQBQ%2FKrE9v5LV8oMzM9%2BVQ2vt417xZ%2BEuFr4f%2BC%2F8eMp10WsbQvKh%2FO0YzInijHPMEEP7E4wgKTAwAY6pgHt3ZW0AmzCfI1F8AQGtY218jv0U%2BEzExQCiQ2vWcGRiuwZNE8GNNRdK%2Fr1LKRobPjlpJFv3nI6JIvXVFkpAE0OvTYDLTFk8TytyrV1WOqWFJnxv73KUjfx9h3ORFH9tnbiWD99xyAAUZeTVFAhCzGUaYFxTdEUexe5%2F6bFJZVDgLle6WRqsqWd0U23kYDm6vc7n7pLRWURbR15ndaCm1wMvnGDjABW&X-Amz-Signature=6522b224ab199a8af5b33e0ebadeae14938e212bcd03cd2c0bdd8796c6b81339&X-Amz-SignedHeaders=host&x-id=GetObject)

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
