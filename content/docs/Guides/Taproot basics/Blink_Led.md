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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIZ5PSJY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIGlccm6mYL%2Br0LdMhYZV%2B06Pl8nWVKM8zRRkE7NwJKOoAiEA7HEZXcZuWLY1K6ASOs%2FwKEZP8eMK7F0xL7aihIthq%2BUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVsOh8z3tEhDAmkPircAzJN9HFEoHf3XurABTgS3MXFbo5xsZ96lK94cf9oCNwyn5hN4LZ1hZjtV0Q70Gvem0fgg2I3tzZv%2BPp7nG747Xuq6gjEFsnowHX7GsuESJ29gh3S7XwditEv%2FynWOZrUM95OcTDhqFOI89Xao6om7gGDEdbl1J4NZL1K059Pjbvov9k5fHxHtkr3CtO5C7F%2FFQj1gEOorAAGZp1Tkdj8Gya4nuMvTqpLbT1ytYZGkFUxPPP4GOvdqBIvf0CoohiIjEN8SzLciUUZVm%2BJFT%2FoSDusnIdDJKdYS6ok2Je0t97O8UgTjpZpkQvaOrbNfwnGehj69wUY04lRYym64IA9iKIKu3OVX9gPwE2f8TEHeq5TVf7G6wXKU8OBO%2FLIvMqU6NsHurHHOKjbTsz%2FZAJ8RkkQXvBjLr%2BJpUymW0l9TfxcnZq5b9hbN%2FS6GCCZyR0I988gW74eu8OVWfSQo%2FxJUUBltL7E1%2FQRvpz08%2B7pEgTxElJt1ub2orpTAzmJ5lxIwfAD%2BTN7CDnfNWwPJ7hVDmpzixUCZI9PDGPr%2BsmazDXeT4mDq%2FEXO7PiOGCqlMVhTv82cXOR8fzT9kJq6ay0pZ5%2FAN9DsCUdcI4CYamBtalu4pZXvQ5nrTGafFhyMKLQr78GOqUBcWemzTN%2F7QeGwlN8pJlBczIyT7XEtvmvGND3SbFPbpY7YImNLnWbSqB0PCMUtG%2FAZdaOz8mNZSyLLGY70y7VHmvijTfOnUi6qMJKyWsDEP8X9M2%2Fbh%2B7JhjW3J%2F6HZrz5b5KHaJ%2FkZqQn%2B1wRsgVdDA3ZeSymTM2SIsJZuFwVTa0%2BINUPD8Syx62JXVqQ0YPqmaNS2EpDiyQcbv7JGo32KdR3Aov&X-Amz-Signature=c857f8da7678ab912493950770fd852cddc50d963ba256d3b483a3b9d3f93675&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647PYXHRT%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICnwCh7QmmM342LGWbTgY7Lt1o%2B7JXTUH8IeR8Fqhqv4AiBkNtn1e5OzcEg%2BFtaiNGcBE4CpJTQYZ%2BArdIdCc1FOsyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzMoj0QIhO8w0aO7jKtwDTe5b%2FlSkPtBjNn%2BFnAurciDsmVK2RS5PfW5iZLcWjyd4kZHEgZYpNYE7s6OisSI7%2FpVmqE4%2FeTaTo2zdFUci3Jmom2QLGlcN5ADUYyyIaST%2Fl5ItUld54UB2GD0Gr9Gwsfb%2BMWslzvK9ZdBiJetDgULyeDPiq0tKGxYRnIAe%2BoY9GGHEUVD%2FNZcy%2BkykyAYIOP03csbiKDPCrRARpsJtxTvu%2B5yjsPDMBYaodNBkaDYFZQFyOtWQIFkG67W%2FHD6%2FrqGZmUwDKrNcNaKWFnzbNrcXqX%2FXIlCTHiiKO2sJTrdFpnT60rGIhjcv8QhpxChyZvKIV4AJ2%2BtouNlnn0szRfRZWigrYSq4RdZW011a%2BSbJcxh3mUEA7ziDr920vOgLu3%2FuyUamCSSpwgO9EcWuNyBlQ0dY%2Baa1cvQ1P1bc204G4KTjToZI681Wt3ij6929NIKBulV3VwNtZcUIoVS%2FvP080lJJdS0PVwH1PDQeKQaOaHdGV5UiuN2lAK%2FFv%2BmWdPgThS1DOBOQ8uvyj1F4x8JAU%2BAvro6cOCj4UjpOVCQ6KHlSdMQlNJFQacknAEBjcbBCo2hJz9H1c7m85EQ%2FTK9BRLS%2Bv0FLuB7DxDlHmr6nLgerwtRcJGcHpFUwvdGvvwY6pgE2BvW%2BuWWoy2lmnziVCTSEOjW1xvtDsqDikmVUviG8VLkvJnDwWQViSKgzyi9MLSzcPyGdJY1wrVNSN83%2BdesbAyC3Xpv1t8KAMlLGFgK8XBU%2B%2Fb5WMppYZrPbBYwjHsHxvZIBdl9lNIUD3Wz54Vs8zwBE3A6D7ei1M%2FN1t%2Fc3JSlrFpfz8tLeOA6wQOsWoJJWe6c3TwGAOFv%2F2QwqtD1gV%2BSDyFnB&X-Amz-Signature=f82cf3cde7c01b8c0943b3f5866171f9a5455804bd70d420d39ae1ea93fdd475&X-Amz-SignedHeaders=host&x-id=GetObject)

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
