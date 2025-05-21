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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLNQOGN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELClvD06AWVVlRqKp7C805Km4IsnixVA%2BKk7M%2F%2F5anKAiAyEdnoASCM88QCWFBjD0PvqVJ6wG%2Bu42XzCl8WxZ87MyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh6%2BXOXOQ1Ymy27JqKtwD5XJbDG2fJWfuHVdRyY2qTyChO16ne%2Bh9vZPHjptv4fxB%2BSM54p5sVIuZpWz4mcAe22WHT6enAkSOEracPT7k0THbG4oyjl%2BRjh4NfdeXf0nUX%2BJxmxZTNJKwvBt5ASF9OUDRA%2B7RP2LB6aPbnqxOGqufuV8oqQrIdW6tQNOjEebT8ZN%2FFgFxmI4uMS4wACPFiK10Yy9GxcH%2BgjSY0fS57QGG6mrKRyxrk7xYpNcuuk4yzSQZUCMxs2P7DOR9KLVhRcwmcoDVEW%2BGokEBvAiEGWY5P8I1EnQIiT5VZ%2B3UG1MDO%2FqItO%2FxpYQeJw6aRxzkmVraSLy1qOChYDmqqy5q84d%2BBrTwlYmNaXuZp4lYwdWNoASE6JGNjzV6kyUci5MPz3P6R4yP2iV0fllzjyL11E5knIzgY9jEl21Wz5JyINcThNkhwYszgpjSi%2F9UgZjkQdy5GrytNtSVQ%2F72uiaf08XfnjEl15X7HJfkwH7iGnECh6EqRDjVRztTKdf4o8xHnjIHiNOeu1ZCFZj7C%2FYC5V9soaZgj4NWHWD67j6yYP%2BZCu99z1xhBBBZXE1auGWvwwCj1nt6ITBFczGRibYgVY5SZgNq3p4XtLB%2BT%2FgdBE3Ms%2FhXzXepFIG8fpMw0%2B21wQY6pgF4bDorxZFxOYLVGE6%2FY17f6kEeGAzBYJe%2FEPxBnDQVkTnV72oTJIWaBpy%2FSDTZXKilkreVy5bzmtmUdrofAlbMOUiljb%2FmrdEkM4TLQjAMHx2BUXs%2FnCcdit42UiABRNKL%2F74KPp8qVr0DndJl5YunDCA0PeLIj%2BlxtYGKh59asbv4WyVV4rF1lh%2FiUx1iUrKEi4BpEvImobcOIBTTJtJBcgh4RltH&X-Amz-Signature=5fb3532db24aeb1b798c6c9a0d7e276d621b84bd204b24d8094e53410a4f9c98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BHPJUZ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRgEGRfYpLm9ObN2XhQ7NnyQgsj8zvL99DeKl54RzyBQIhAJ4ZeQWx%2BfQ6r4CMBBWMFf3mjw6XUO9xGevClIrFfAjoKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyooYX0rPfrE7nIRwwq3AP0wKuPs57XKm5X9YxJTvcIM7GGQpqwLdMuvmFWIDvo6ANmcdbhLtxsKJp7Gy%2FowHutVWgySi99Uw8aK4UZ9GPKTHJsAni9Qk%2FB1yAMC2XweS7B6AqtTDJxbH1ceqUumokk1rWh14FOjBgYO1v619jdI%2BBPiLLMDcNbflCloWq28lW4M8Odx0E63ycMHNMJ7II1vE%2B1iSb4ffTancrA4CdqOgCBUctZHpjuourmTdkplaZLQk16Fe7pBkrJLXszpb0lpioNuDpAe7pamb6a%2FBm0D0VrfkOXJOPwUlMzhI4UeU4QkQdP9B6DsV1lfPWK97FpbbKKfjtbt7Uph9%2Fot1HgrVnzF4DIPQF81CNZqmPPi%2F827pXPono1g7YCkdYUsyB%2F0DCUi%2BM6qDDKRgTJmZZwfNm605D61kilFtKvPDvO0dYQxWKpjMcNMh9F%2BaIoNHUujfgSjRsLX2%2FqAJA4AlZd62VeN%2FoIMWe9CrMPXJPTeB1hQozTGg96pDfiSpnvAscZjO5iLXba6dxrj%2FDQa5P8mGLY8svAFqX%2FpfmcF0lZ4OPpcCKTfbM2%2BTgU%2F7YQ0CoCAoKUQaLlhQFv4QJ0RZXUmOrpA4uwwyO2Duo8%2FfMda8WfnLUda8vZ%2B7Wr4DDj7LXBBjqkAd1ipb5LkM6W7bczZbSkZC9e9bYy2xAFCEohGDdj0PRDMODZR5oNlkAg2haziGWLb6IW97haiAbOwG9vUxo34iEl376ok9L7vo%2FsENiKMyS%2FTUmtpp2eiK7n2PxO6ZDPH1ArKaLlgfcwSweDiDHuyHCT000KGapFWG2YYIJSQF%2BCFvu2Ek1X7FsFrsqSKvznyyfj6zynhozJaAAQUiTzLFwyWtJt&X-Amz-Signature=467c73e90a7f16062c70a5b1432c1e0d6880e3db5014d950386651996b06265a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
