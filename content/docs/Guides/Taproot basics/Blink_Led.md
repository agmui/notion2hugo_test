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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBVQPJY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbWWYvzxopsBCjcKFZ35ZPshTKyeHYLs%2FfLlLqv54N3AiAKfnaGZGuKTtiHU3fa3jI6KXu%2B7z7%2FPhhk5f6KGbMaOyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNyH7%2Fcm4JcHclVNuKtwDcUPSbp9F0Mgo%2FLfZO24a2lYGqsoe9svaEybm5LQdhsobnlJfCwXTGfIbKGIgDlDq9%2F9Jh%2Bxbc2SboSCJv5D6sG2c5OVrUvCjxNiHdopGN7O0eGU%2FM9HpZBpWy3zPyEh%2B87bmq0Ckgj8rtt69jt25ddozvX0I42pVzm4YqTCYptfGSnGCrrurnrnPMyUOIqktk%2FoqKtIRvGblx%2Fq4zQ%2Fft3KkMAiRZeHCkX7HaJalUcMCnPVSJgBV9Z8j2hU5FZ83e1%2B%2F47d7uQ6bNM6OEZo0ptIun0QEBoRcStuTeSu1zVLu0060MtHZs418QJQAvU4n0xWKBRyaAFPsxS8%2FDNCGVdp1CBVc2EWQhvDkAQxIw0UVawH%2BZimcMn6Q20oOZjABOmvVP2gb7djvHCzLdQxrrhfLBwdivDPYxb8TFX0bZz%2F6nfw%2Fd%2FeUZakhasKgm898EoweUfwiP7c8G71pX4Sq5LoAhuOQvHehy%2B9bFpGMOwgKTO%2Bl9rX%2F5julkc5o2lxgT%2FcSZlpB1MTLZFTew6P3%2FLQbOPOlcx3zPLJA5IM94duffGn94emW2bxP%2Bed3bg4VdUxlFlCJsaW5D7gAtxKd8vpweXWlB2o3pUogrUqc0WXWbygxihR0DrT3YQEwy8q3wwY6pgFTLKu%2FIn4yjYc6zTjPwGcoQTPXr1uvWC25TprnxZKFbR%2BFTC7Q%2BTX1vhyvESESfKu5RNPYzpegyBb1QWqYQImRfiaGM8omSuWTmNwPrbsD1%2BVvjPxExRfKgdJkuw98yGAzIZ6kSv2iXVpE914gquNBCJ42WHbhAdTChkabx3%2BPjWfOR0R6%2BHlVssEbRAod9lRcyXWy73pRIZkKjI4gzWUPH0osbBiT&X-Amz-Signature=a1908fd0a5f7fa54a320acb4a9f2df791a1650101bb79d21532a4a5b3c222526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZX5DM7F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJVgaWTyIA9DoarluE1oJkTugIA3%2FhbeYSKJG9rEJFDwIgOgfuPeWnpC4Z0hWU8OA6v1xolA8En6Ma58WTjkm6wWAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrgriml6ItWoNgeByrcAxpeHhNcxj9h9SNs4ww6MwEmMRgVbidvYd1Xkt%2B6BiaKjUqAW0lFGxF4zqPEK77j62eFrINFvwnUBLWecaospLeR17ozKAnmb2ZxGEBwaDXWcZOH39jhtEOuRfY8Xxcp8jsji85mZ02nPbEZVRanHOLFAJjdhRaulK8JbEWgKjHYEVLhOZp0YcLzIFg5V8iDa0yMMmyfIxKGc9x%2FhS6I6rVAUCFhxNoCp67cm5xUQQUvC5X60UYb9bf8TeOka%2Bi1JMfT218pS4fqXirqNA5awHml5rQeEmL7ANpHm8I4e%2FfsHgkrPlMnmVnDhG7ANYts6wavXukv88fPDcFCCyGchJsEL7fbqmn19bO6MFa5KEEfwnGE8XjOP%2BnuBJulswL2XhhTBpzE9rNunJXuP%2FvpteYJdRa4VhF2lXYshZtmIlHQuO%2BpbqfkV4Ej9qy4EEqDocNv3AQUVAlJ7TdoA9%2BJ8a4z6atbA8S9eRp9UsBnf1dszloPjyUmdNrx0XhpvB4bmB2kTK%2B7z2%2FgDoVJ5NMLDSS8oUUZy5dmrXo5bkvaZTJKp0xsLUcN8TDiHCu8TnIxdURxbw7wWUkWyrZsc5N0HDALHJ1XGwRkmoHSLkUOSUNJM9b56Z%2FXlvbskDJTMK%2FKt8MGOqUBgGD0tB6yMcRX8GEAwV5Knp%2F5wZODj176%2BGO21281oCZtF0Xr7BLQIch9Oh%2FCmIQzqIQlvwJzm12MuGzbamRr080SXLIgZUB7EcuYepKYd0%2BJ5bXlounJcaUq8qEFmqyJIiwWWMM%2BJYx8i1LIO8BfoP7QHhE3e1xuYA64uAVMZAObb1TpP8AaYv1bRMvMIpFgv6fPLVHnmUBiGw%2FtO2SsZiHbVCLw&X-Amz-Signature=2398e86ef10aa9a0723b2cc5e8f5bbcfea4dac83d9a856d66a2083a8b90a5951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
