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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DWFIQX5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCrPYbkeB3Jyd7WYi5mXRKOj5PI%2F8Iss0%2F9fjYiJAE%2B7gIgW9UEdhiAkgb8%2FCDDoYs27N1dovMODilND4%2FB5NprxJIq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCLBqQCSIrur%2FtB5JCrcAzOVFWodFivElIpj4u0F0W3jeaFfXpsRzFCq1iFeOE3zN3lg2oeeXXze49%2BHo1E%2FHlqFifuBePozoKwZxSfAu4cABd%2FRBQIzuLas3PUgvSMUdsvTQpWlsovqFE7%2F5MW387EGvG0C13puMTjv%2F2YGfQBy6orvN99LkEKJFU1G4h4EF4Z%2By1AtMk7SFeTuBams9VLCkwiI9uJEv5CxSlT%2FaL4ICPdUQUA613bYtbPL8c%2B3vlFiw3N%2FqKKvCXfRACrLn6SvgEDQffJIT25PXwXLhbdiy75I4KsFLFqRK0BKHwByvnCIFVBgkPZKe1Cs%2Fn56PO5PQsh5wKYMinP3uCf%2FYX4%2FG%2FJmC9InAbw2IurU9HUbVgEMH3pB7v17ePH%2FewnLtVtAd5g1KmbeIBkk1p4CumQJ5xvnexh31xG%2BkQV8qiJLZIWB4v3TmSmOXZAWYUQFS67OXFH8JFdV%2ByQatcxa9bmTik4dZVQrf3XPZCRRHZn725tzkOUrtR8LGe2o1Wx9GICmTmiVRpp5emBL6glZlgn7RhINI%2FH826KOs3iq12pHM8jC%2FwrGKNUjmT3zOlJOQISaq53Z8B6xX6U369eKj3Ebd%2BX893CzQp9EK1TbgZb8LviBuFQBjx%2BCBT6nMKPipsMGOqUBLuwyl46JXkEtwExoVNhrOoK2D9tPvLnpQqaH%2B6AT1i0%2FBZTMZDPdhiwjJ014vLc%2BTwPoI%2FscVFHTeYyJo1E37RpFHyx9goZ4Je9z3u4ZwWE1iK4wFxmEYmzpGCVO%2FVKBweVCMNsSE2DKkgZEh1Wmwnl1J5AiFXjQh09OiNqfEzmnu5ggtn%2BnfOlGMCqa%2FdoH8fTVshFXNIYOr6AvKeAqzPtk2cCu&X-Amz-Signature=c2c3964363ce2acb67f5db76ce62d0a4177faf8da4873d185d14837b4009d917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK34NSS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCCofj0fHfn5Vy%2FwqRl19KJYILAD5AKEVJja9%2FGWG0ziQIhANbBrX4vW%2BKIPo5b4hS4r2Ezu5S1gheRwwG3IjHm4lbfKv8DCEwQABoMNjM3NDIzMTgzODA1Igxxw07VK0aDwKN5iLsq3AMAxFKU7VC9RRvemIeHsRMzXsezZCKSOsEynx2Yps%2BLYoi6lxCawUu0VtcvqIg6rYpIUh%2BHrOOSQZrwd4fQKbXV4Y9%2B4PFcTyVVG80rt1izAGjfmbWAugc5jnojIM%2FdgNYppX5TTj7f3QUhDG2Wqs3D9QuaIa0PQgi2FUumUjwD8efwp86H15KxRAi5ii%2F4EpMIOznFGyGMDrhsnceieTzEPVxzHsUzNqMejPDyPNTjq8s9Fdq3Bzs9WVTENxcrG4huLesyqWnPOci0G%2FCnm3wjnMb0%2BS5kRvcJR9dBDQv3Hlwp15tDTOt87yS9pUj2LYT7TwFhYl9cel1jOZntOlqMYjJ0zL5HTtTV19vYNwHFvugSD%2BDAAht5MoeAAHE9KMr4B13nRx%2FG98uwbeZuXSi40U6wdwnrMPgIZ1kI15j3BbYClKyEb%2FdQ3bQnv36bQKVqekJuPZTvi5WSFLQk87lIcFxMthxCILMpTzzQGCD9hBkD%2BC2NhWH7kBimvooEHSnBkyDbTBiqIWjb0QWDwOsH0moPzZHOosdJnA9R9TeruKEKWltgQJTIAfjmAvBsHVmqBAUlLByeZi9O1Me05HwOaQkl%2Fy5q0WfYmxQT7f21IvebIYiH7m5D61gCBDD28aXDBjqkAYi7QWTtAY8xH4J7U1dD59Qxwj4bSzbZMHF9AIRn1Nr89jj0HiDStuqZNszT2PhjhsSSLfP09T%2B6OvgzNVoYuACOhrjvhDp0U3Z5eg18aS6%2F2UltZBhigIfuP3Srq8Z0zpMQcf4T%2BA7WH6sompxYvqm5IISypVZ%2BLYexJfh49%2BlU8oHdaPbVBnLWk9jtHfPytUN4Br2Lu5uutYy6zym0x%2BCp0WEQ&X-Amz-Signature=f45b344db8a16fe2d066d73464740dccb18817f20af518b4be10f5b4e048858f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
