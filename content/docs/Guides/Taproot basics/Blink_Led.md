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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W52K4RUJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCejV8Z4jv1Ulj0ErGdmfznJVhSGOW5plg5CvnxyDB9%2FQIhANIPQFYw%2Byk8cYr04UdkphokmfI6qpFH74TCmX%2FIbtnAKv8DCGwQABoMNjM3NDIzMTgzODA1IgzDMJs8D3H5s%2BTaANQq3AN%2BqEhES%2FYcoPdenpn9m3i0Tru7ebP%2FU1XiJxjq1R5km8nDs%2B3T8dQdAEuy84sC%2B49%2F%2BIcLMXg%2BylMpSnI1lWXY%2BS0mQuR21YJ%2FqD%2B%2BK1DKeLqv6bqc35XD1wWT5Sm2IsPCF7NSOONBwfGMdcJ9G%2FX8Dxm%2FME9DAP4142dqwJTa9lbF8JJHYGeSTTKo99rgU9CSVzHpzUm533d%2FYvciibbzd5Eh0zMfIy54nKh%2FWDewyU5b5EY%2B824RwyVixywguBDsfqKA9VNoNEjtYVGEr99v9cKHZNJfUW8wTnu%2Fx8m8Kweb1g8OuzomxZHot085TuTkBiuk90jdlbKSiUsRXRdoKXs2sBLoTCcy7QYulmSujhIM%2FPEw2uH5SM7x5pek9WU490UOuSKRqCCvF%2BfPO03sUJFv5%2Fl7%2FRQ9RfwsUERcIX1WMILQfvzBSqRIGCL5hC4PyaxFEQTUo%2BKEqlX4guw2a7vfVUSuE%2BtgMRt6lF1iLSjkT5aYuBcDDMsbt7ncvI9mKKt5DX3BqylN1yUR5lf9irCS1bw6a1Aet1hcJYmfMgPtClo94SjT4WxPM1k%2By3%2FBbwHxL7VfbbgljrFHVKWq5JjRiTCDQSY6g9HX1xVOFEXMVnIa5eknghotKTCQ5P%2FEBjqkARiG5AkyLlLvVaGY3G01JdUTa%2BnXNGPGqrBmjY31KRkjgGpjUFyuh0MNiGEPDqMbBv8gkSkSa1N4TBdrpgIXhV1sVkEnskYihsu29%2Fy7HXfyXeIOh1td3Bo8jhCF4qZJHFBL8s0vcabLg81VbV7c5Kj3XDyR15XTqE2r2ealwOxpQ5NgZlm%2Fp3kJL7iTpw6iSuCZF0CvKhsQ6SfpNK2BpUY5CM46&X-Amz-Signature=09d81939a0e89676fb2000011433fea242d395117b5f7196bfb11288956d1b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMNHP5M%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCBvucll21o21aRNOO00%2FuLQrqMy29NyxeJ4%2F7VNXmczwIgaXahNh4GTw0U%2BuHXGPUan3pqZhYZAGpSt1CM2EcfuJIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIy5me28ycN1em1hWircA5T%2BzYbrHuwG9u1KG0YKNtveblWAebeyFFzEQX6lTu85qL8e0OaiUBcc8Tmv44Ua7x33L6OCj%2FG0%2B5H59o65gEdzQJQozT8BfTTa%2FVQSeM4xlZEU%2FCVjUci2YpvRrvIaL7e9s6%2BIRrNgoEJNqLJ9HvHQha%2FJ0pFA4lbQhyGoUVuffOtKYLXdSru%2BVC%2Fh%2FpatE3fuPpDN0pUXqVdXrLbw92jxVzLu0eAux3vpAn2IvNlDQU6nZ2vx%2B1Vh6CUHZPXJKiz4cOCVPh7ZKYu86O2QgHx40Dz6fFwOC7LCpr0R7KmtvTM4TUxUPvNPRYhsfnJHMpcI6XR9mnhKI320gvje706R%2BWlIMIcSinRBZW3RI9rInMRdkAOoEgwriiNCCoBqUtAVo4NLAJ2VLeHKLwv6dQhiUdDh9wfPRHMcIHI4or7dyylkoCn3sUavQJIR8zeJbJciKsQBgUruHdTiGVDJyyG%2F2lYrOD%2FiOId2WpfRkgBH1USBzq0efgqW1xXVI2%2BZGiey2jIhpFQAhFSymSMjHZl9vGL7ue2xivvZ%2FrQFJVGVtbqv0wNbPvJ3bac2pvyxk0tNNq2voPdIlU9btT0rsjXWghNrimjsbtba%2FjAFzC%2Fn13eyoKmpFyJf7bY4MPzj%2F8QGOqUBx%2FYR2iiPKpo8zXOqNtzJP64QfVpxlgybjjTVSMNMrjDIC3dQ0jqNNfmtSsw%2FRIctkUYhngU3jS8XpKIgsm%2Fk3kVQcwjFWJwSzvFZ42vUDA5NgDvgO5VHGYYhwEAVX0uuMncPvcLDe0L4nZKfbNyuSdaORxVj3Iz8fzMld3qsDufdqJOL26eDHqWz%2BqDNi8ehmK7RXm%2BhcShYbAQ6DRYpO9Xnx84I&X-Amz-Signature=2e6a17fde5e4171927ff9e9587dbc02214d6f4a798c3b69ee4d7d2b608e32e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
