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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJHQATI2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6oxIHcaz9Gh6Z324e0OULvLUtPglpEi1zf8ipB0LrugIhALzpvAQw03njU1l%2F%2FqKTqnzq7cfUJF32k8NChpR%2Br06vKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUJMLJoXkeo9K2SLsq3AObN7qBO1%2BiT6yYPKFIf8y0vOvCbF744kyoUrfSvmxliKTKJZtAcMQaGo2AMFfRHjq4RKvKvYg9Ahb8Y6jrh4M%2BOllbbkp360JViTErb6Kyiq9CFl%2FVW7FmstVVjs2nikGhR9X%2Bqd4wjpbth56T7NbPBOYD1d6gZ9zxxKlGmTo11c%2Bw27l7XVsMLad%2BQkmCAEnYSQ35Xne5eIODWEgR3pJB84vJVr%2BKQElOAHESf46WAUff1Ah9SH1byRkh5sFZSqbnaOhpEiLCEbXLeGafueaKhDN6p9UOLSA5hIJRSCMtaF87GVX95sV1NA03AWlDd7zVf%2FauJ%2FMPrQ1GrEVz5%2Fdt91NEuJak1Gm8SMtv4A%2FfU6Hou3GS3sf7lSta05y%2B3XzpqZYqeXXa0l0dFoav9qN2MP%2Fy0tgnXoX7318EeZCTbusIhK3IUZs2Xzx%2BIgx5gi6Uk3foNya%2Fpz%2BFICxsUh6i3jVjCs9n9aJMsDGkCCf9RzGBWSCmQpqvSmEfbmHJoPITWAADhKRvJNbgvA88JrxX2MwVlvlSYeqU83ZlYIpp9EHAgoNTFfsmqJ8r9KATLHpdOpJZ32rD8zavLNxwKYCXq6h5TxO%2BO6ke2acwluLzqqyAusHLIgBnOXK5dDDZhvvABjqkAQcBgDdVrAud4AWfPZsBaZvdEgQG7CPmFuhKxHS3uesClTcV1k%2B%2Fso%2Fl%2Bqf570x%2BBFHup7sMT4ZB1jNfMqX6dTnf6k6LyQtU%2BCyyr5VdVYZwneNX30%2FkAvyKwda32dgUUdwuMK4GJS8FVk9VCPeusMdpaSYeglwvOxw4B78%2BKrg2gEtjVe0E8Fu2D6%2Fqis3R%2BtQZB4cWC0q5L98xoov1nnsy8YSe&X-Amz-Signature=f3773a9ee495c9c36634adc9b4700521c5f383ae35ba2306bddf282507ba99eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRU3R74%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa8gNDLdF%2BO4CbsIDAT4QWea3lVbOyWsEW%2BOpst9NXrAiA%2FqclbnI7NgJ69dLn9SNu09st%2BdX29SuHhWpntCGLiViqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHvigKV5m8XTTkCLeKtwDwskevpXGbo8YY9jkKZMzp9JjalK1nm5uV6HYHtEP1aEeWKGMMpLND2T2C8WXpskgKIPozb4RyGWDZMJ0jAaYumg9zRbPqzII%2FsZw7YuJOE7aY6t7okKj85fKHFVNPu1r5Qz%2BCP4K26Nqto0P6KROD5wFMop6uuqN2LoCz%2FA9uLYSbpxI1Wf%2FmVBR79lfn5%2FthgdpD0Y8Ck7Y0Ve7bVpKCI1gUiR6W6xOgkhsZnRB%2BHSME0EEN3dWfGy%2B8cKN0ld7n0XSLQGP1QuofpPl5wSYtXGaP7ACJNT4nLVjz3eAq5yVBIe6kjwZi%2FsX54iOlSk2WVmxjLWSqrEvLdt6i7cbtPXHGabPF%2B9tBdywFdj22FzodZjD3uskj8%2BfHdpv5R0kOpXr%2FDG64Qvbe0yw0cChJ9UQzE04WFcvr79rupqrXwsOrIDv%2Blszfu5lFqhu%2FBwwTVJpoKSy0XjU7lDs0sJxMLKuzcIjCV%2BlgvVtMS36Nb5%2Fp7n%2FcANKplrLV5LoDye2vfzjMk1oKFM3bAhLDQCQ9g4ujJXRhwckJGX9%2FcHNRAMBE2ekqfS%2BKKX11JxK4OHrRdUHnP%2B2Ww5SB7a%2FH6GT6y9PP8PrbXk3CumMK9AIpJWaOQSzaM7JlhsRU9Iwz4b7wAY6pgHkKeLydsg%2FwDBbb1AxkGCEj1zaFRMbZQLJ5nZlDrQo6Lsc50uCO8WHIy45Mds6GfWa006QmdEuB1hxvNtyuDY52FFtaYVckwF8X4HmPAo%2BatC1TrcYF1Xvt7io5jJP90hWvNMbWWpINFMVT4MfXKxcP8rq%2FVU5IzkyxQkPSWPPF%2BoIN5U5hLn0Xc6qsRycIPzVq4gAVx3x2ylhn0FfsafpywRlzAjs&X-Amz-Signature=9cca769b890922b8cc508d7284cb816b530bb61ca8733a41bacf72a80d0fd004&X-Amz-SignedHeaders=host&x-id=GetObject)

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
