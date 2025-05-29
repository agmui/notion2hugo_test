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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422JHUTI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXmo1kV%2FPNuMYU4XJaep7zFLO%2FVgf9zeBqhTs2o3gq%2BAiB3nvxeqPFO2xXUx2Dx6AMxLxuwWxGCnAxnepGQy7TZNyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLplyASsHR7HOiYJ0KtwDdYkuihY5FRBuWU4fuddKhzBXmR1nzdZrn1OWlKniBsb%2BUoMu17aZiQVS1rj7g7Uyx0pTFXb3UfyYPtjW8lTbiTc1EbL8F2SFVemVpbDuPjEo3qjxD2q5XmBAmopbT92OcdS6mQFGvme1NI7zhk8Z0Y%2BSDfUkZk%2Bu3omurMEQ9s7aMrwu6cGHV2LqRrY7OVpJiMrRAqkZ8IbimV5NX3yGCeYuWP7NRW5b%2BUc6g%2BeUwBrLNegu3Ze2YZL124xQE12zS%2Bcl12JKuiZvg4%2F88AjchHcwVCZ0Y1Pz13q5xoXitjpdxJHIrmdl8S3wv6R3JbpHJmChljBtGWla9%2FvNLFNVMPUjhLpwApvAj4yITfg5SQEMmMjNrJU01H07vizKPhy8fCFvBzhEP4fskZEexeYpALZ3Oka9dy9RpMf%2BmBCDislwMB482aVqmMbkXNp%2B3SKJJNfB4pRw%2FUFX%2BFzrAhpp6HWVhpJiAJQvwHambhpULg9SFBq8Nk4VBESt2Q8TRoNgEAcplh8wyW6Fy3usu1cYpxsAGz49uWBmJs1Kc%2BcM0nOtTcRoNcWyDFi1YAlkiVrLBkHfoGYSxCJDUcRTZLtUgt%2B%2FE%2FUZ6TsgierPmHQag1c2ZyNBFdFYIihKvCEwopHjwQY6pgFqiPyaTWhafHcbbiJqf1Snz1LFpTymSev5SZw2frRJzLULlJwhG1ko7LHJsn5fyqrg%2FjBmLiVP0u9CuT8oArtACKqMa9Bs2ldsKZ8RHgI1eFUIdHKnm9VpI3leTqXzy7HjVsvoLcdpCP%2FQ9skbNQPRngKOIoE3V6%2B40gv85CCwRBvabEyGdPZzd2jfqKWYCMNpoDe5%2BGtw76NUI2%2F1rkhBs0dwXzDq&X-Amz-Signature=c374a65f77ea1ab73ffa8f4f81af9daf58be049d7f8e214c575c2c1a9f311d07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4O5YDL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5DLItu%2FX8eW0DYWzhsWdo24uuqtvSewjVSADZE9MoMAiBMu%2BLXFrYAs87APRtk5l%2B9JExRyScB3f882upcrVh2JiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlOmz2eLYxLL2N%2BEwKtwDT9bKkn2sOY4Ui9w9mxXA3crM%2FK3jV5mWdyKrGLI69tBgm6O1zV%2Fca2pECK5cS%2BipTeA4kNaDo3JZ1j5mgMHYxLaB9OU1PvE3Ac%2BiFO9OYBiSdCINqV7pTFUcyFPbHyDWfdDC0k203jdm3z0fCkW9b5DfKLlOGxHFOA7DSH%2FrrYvz%2Bjap%2BdfNcSFuIs7%2FktRAM%2F%2FCCgQZOOdJ92R7Kaiu6C9y9rf3sRksttVoBaepxMVL2dZsXvN1Dk%2BxxgEDzEmpegPeqZkzrVr4hUU0m2LXkW0UDKqeZAm21dWCPX7dVHmEMNRJHm1WDWUtVivqTXKj%2B0jSC4vVnkuOGOmEq3WRx%2FPDmNuhC7I%2B4fMXfc1i%2B4Q0JWgPYcWi3QGdHLocXjQ5KRcJ9sgcTxtrlAmNtMxarrW1nKM0AJyUC0s%2Bsuv%2FeW4OdzQEaAvCbjf8yW8tLYZlb2BDHkNv1fP2Mg0pa3eBPMB84Kv3lqM%2Fh8snegzIKYqQ%2FrRLT%2BL5dKKe3UVjHeYOZBD%2BJAZG4rx%2FuYWL9yviDsbjMbCLsotHY7pW6LhiBwJM5qMaQiEg5mNYyYLW5tkY8cJQ3YzgHDOJNrflB6552tV9u9Gj7b9vzpsm8bQ49Mzr46djZsu0P5%2Fs%2FLYw2ZDjwQY6pgH3ZVv09xJ5xSr7DPJE4ymjzEDE%2FdEGULA32gmRnonUS0sl1a6lRIIQtSYZo6CN2ZNbM8svoFvOvEWQ1Yi6mdj07TkZpfuiIAYJGDlEztjq%2BEBjkxwVHco7FMDCX77utwHoDO1g1vlHc4WucfqQBa5XcVfR6UCpMNcB3wb4UaekEr5mm7kYGiysAieeJfmklrce9iT51xFdSbmJUdlS0mv%2Fn6515nzX&X-Amz-Signature=a65992163d68a20ab9b021cca896bb5ede9e7f82c9b8fec0aee4e1f1c4e9ae20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
