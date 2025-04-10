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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZUPPFI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGo5%2BZSVA16M3R2kHzJ9tIKo787FEw%2BDzr0%2BRObOboS6AiEA%2FyINqIimgsIo%2BYPYxfK7vRl3cT8i2KygtehwqOV7yF8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw5eMrBS5IVn%2BizeyrcAwKErmHoPnfGsB4p1fAo0SFjpFnsjJUp1qlJ4QlDfVWKc1gK7l8hm%2BWcsTNzZVB17JZxl5WUfJaSHxXhcgDyczbrl018Cw6RMqJsEPlwkXOxrTCi9%2B2kCctzZ4KEYi7fpgXXctRz68vQC8eKrwFI1y15AUqsuBSIuSVstyQnQ6pSKoFvni5qu%2BtfBYwh%2BQr%2BRt%2B%2FjMGun4NfJpzuqnxTAziHO4lBigfGZ5P8%2BctRDN6JViv%2BbPscpgINwrtx4%2Fmuph07bzuax3LhDQv%2F7LqNRq6t9KBDVcmqguXzuNF9xxdR5E0ZITLzqMi9SQNrSXBz4%2B6nNCAxwTn50%2BBtidBiB39y4DbLZw1bX9zhQGZbXLhbcSjQ56xHN6AmGG3L%2FkH0dnQB%2FvuOPnCnVEPYvE73%2F0mOrGukJnsqWUmArBPErfMxNFkkAfUfERejozb4BL6pVX3H0Vn%2FD1amjgUt3zXldlEgsnHSF5mee2yXEnNAw%2BFYBOEKLvEKUCeoSRTCAUBDvXjvJOyEngRP7mFNqaAptxeUmBCo9Kwu2qqwjOssBOBknjMc04sR4ukFIOYuevSGFHDHcmL8Q2E52xAH%2B4Aw7Y6Mb3ddmDREE0%2B%2FVy%2BJK12uZucUc6A8lCP%2F1yfxMOq4378GOqUB9WKD1YXlUlqZ3KWB%2BlDGr1TEpSZ4lYeJch6AAP6MxqKg2wx4V6V8XeEeS7%2B4Cd1ZKMaFh4QfhYpisTr4hUa82dty2ZEPrfrcRY0njIwQARkiDlDyih58zuNqBIDkLY6HCOuOyjn114V1fgWAjKjx0STzgebS8ZTmFbaIQRE55%2F0BvEe1YDsF6n2Pc2d4%2Bqe%2FiUQrkOAhnbqfOTGU5iJLRGz6y9NN&X-Amz-Signature=fc607478d6640cb75ec02f75bdd88fdf8b7d085f79caea9791bd09b75a5c9c47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DYWIFL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDge1RjDAsc1bt9aHZnp%2FQ0KfjRsKTh%2FRzlynY3sx8aNQIhAOEX0cdR48SijHnJEYS1xMa%2FDGxcoO%2FMZ2hV3p4Y28sLKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCUIi8imcMstsx260q3AMbKXVeYKjSKCaLzYgyKaFzj1I50tuBY1jBkfi2udGzNGMgL0CXnTfuEP1KN3UWW9IuWT6XVeLtFVQmAEEUeor35AvSzCQiFWb%2BkZaKdWR%2FTW2geIOh5uyx9Qrgb1IjBcjUHMlVKqiuvyClCGgdcIqb5lMIxx2qsxIIh9tJBrXLiYKQiL4OXQTDR%2Bkru3W%2BD2NCqwrNEeP0Gc3WBhZAjTeVvuQrPMO9o%2FUF6Dn2x77wAgr09Tyy%2FlpLNINIbdOtT547VcubM%2B1jkkIVVbqVk2qc1u1hMk4XUMfS3F7zLBdrjhVPzk93gwKmgAgi%2BgjrGpfcHo9wN4N2TNN%2F7vY6DT3k%2FrT%2FF67YOAvcDDgdyPtf%2BcbnrEpX4VMQtX9qU2SCsTz9LlPiPSV9CFYKaM%2FTRQGF0YQQA90acmmUjoaZaRWr2209FFxsYfLLOac7iqwDnNlkgBptAQlVuyQOE9G24Lk%2BySWKxpuEN0hfh3rsdXI%2FqGXjJigKFoWlZESCUdCXa0fUJnkU6mK07hT6AJd9Oone34wRvWpyjHiI3mKKyX1zWuCfjrDslyf2W99pZt4vhZp6QuvphEVFNOcZWYBmZFXXBhdcVKh7zwOWaJA4FKUn7TTjDrYy0R8%2FU%2F5bjTCGut%2B%2FBjqkAZnEUA7fltwLyJXQB10JzRfOq3G3qjlTkXcPyBFz468jnCkCdbzTCmXhpqXitWO7p8w3Za%2BSScdAurEL39dVhlVa8abD2fnxMXiBjguHD1JyYIpWNA3lZ3rEvc1Fwsu%2FSNkQWyDdl85agloTeXXc1JXOIg8OAObB%2BPOKcKZnohGWaflZI6PPcmlIiuZ0Tzvz9U4urnFwvVd85i8Ori8o3AGG7w31&X-Amz-Signature=32185f89a0779dba159ff1c8dec6a5698490074c1c413d3da8f967a25b2893cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
