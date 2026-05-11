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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKF6ZYNS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDYZ0btNikdEVLWM2Xl9AOKx%2B741ok%2BJ9YzZpNr%2FLmGsgIgHwKmz9U5Jh2QWJOOoo7yKwDrscc%2FIwDxxodKEBdyPkcq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDJ%2FZh4Hq07f9Wp%2FGgSrcAxsUOunaCO%2B3Dz2zg7vKaZRE1HjuPKlIKkUWKkH86KXx32A6nqyq4tZw%2FUtZEhJSQedkU9SBclL0tOOCV%2Fs2xDDaTbre7cwxTuxLwiHx6GW4BAFZT9SmFgsAdr%2BkIQtpvuqxZ%2BTAyfziaIKtRK6gf4dPwC6f3X4dvPqgck0P90GxG%2FqFPZCgHSWgZTILVK6BqUD%2BTWV1ZaChNUgF0U%2BulDMYqINQHRRlvv8dwMm8hDBAsZW9TpaaJCJcPUZ8ciCaDAm2mq%2BC%2Bdoh7f2IUNqzMr6kl9ZJFSyV7sMdY50ss2UwXAx2Ajeg1xqhnL27BInCD5A1YivkNUqI8WoT34njY9O2UAHYrOPIj3gthSWW%2Bj0x%2BXfAkXc8gGzQMrxf3SAkkrOrAJXQoglD467pm%2Fz9WQF0%2BtououjDPoXIo5J78mVxWgq5TWtv1QiOhk3rXbUEZv1pGFF5v9sHCb5VBCb4QnD2Ow3GNb0aKlLY8TUDfhZrdhe8KuWtU%2Fv685MYAfcOdGm4gVm%2BABnNUcP2Gl%2FNDGoNHYC5d1d3WEbGskMIlVmjjRIxqFwUNWy3f1%2BHMzL%2FAEdhieW0GjrK2NiFxJprfeLzpNh0ax%2FqP%2BXRZJ87550DLX4Q05QMZLAXvihBMPCChdAGOqUBXyp7Jp9Qt9Qj9DkpcxGsJaRXjYlujyTzn52MBviDxdFxb%2Bu0N0fCm5FLvi9ezLRyfy4Bcu8Y0TaeBqbu6fawdeCJfomSd3gE6Nw%2BTyWbmd8iXBAm%2FyfpWMqzwdLWLG%2BlgCaUG6MJi3aGWZJ%2FwJYXPyI4B75eqv0ia8BKP29QDdliv%2Br%2BZjNAacPN9FnmzCPt8GqL%2Bcmb85FZAdryfEsEqnxfe3gZ&X-Amz-Signature=0cba6e4e12a6a1c05e49c5e02c163a8b4cd8792fbc32e0bb721ffc51a1bf5f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSYJEXN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC1U1bNBPCAeYycqIwAMLbPK4qL3KFXRfSXnLAU2TPvbAiEA%2BK%2F98WvVYmzIbli5MUDFhYwOZipwFKq4LbhUyfOOyrsq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDO5fFmVIduFceXhfNSrcAwYlwMQeRGULSvj11JsbvKkjiozm6ciKs20KjZYjf8FAm8sXC%2BTbAUz8w5Sb6N5KKIPtkYUIKRgEvCxunMFDP47kgaaXieF9pLMrCdVuIIOSxoYhhSmJuci2c70StIBXiDyHq1qlH%2BtYB%2FA%2FQ%2B2e4GYDGKqThEqq6qEN7dfyKg6JvV0kZ4yEX4bZONIpkPCid140juKYa%2FiElTma3O2qaZB%2F7emp3pX4uNQ848ldVsthzzB4UHS3edrGZG4lGYPUvgw%2BFcNQ87XGTtvhF%2BJMtQj6RpARsESHkUmvdOZ76wEZZmwXneuRrehWo8PBKsFLe%2FT3FPaYUShHGmCAT1uiJYPw5gXQcyKSpaXQ5ZcKiIoceMN1uz%2BLZxnt%2F%2F4Wq%2Bt5Lk6rdkjPlyLhMKXsGE5aeoPOH6hHhF4ODWCNypPIWQZTq0eqLjusqFXpXXhR%2BnNP%2BT%2F5RyNxUJ0d9k2ErIoRSfuC%2B9S2Vankagj3cIFZe2MPne2gXZqQg8iq8r%2BOPy0DPdIVeiZInJj7htOPDA7IlWAxawwKYDlFqrjyYaKTL12Y0fhVkdS8NbXLuaDOxgze91ax632BiH%2FdfjsyJWPLZjkxv9Rc%2F7gWtXwQbsz5%2FJL9IG5vxc0Ijc4WtPoKMI2EhdAGOqUBUUiMcShyHrFp1Zi5jAy%2BETWt11TcnugMcIe51IBqPWxlQ6apjg0vypZzV22GK%2Fe%2FBfFTMR7l0ssrMXH2tS2Oott1CppXuynBH6Oxvb3sok%2ByR7RVtfkAy1zkbtdDj3lbiCc0joDbXhO3adojFNeq172yQCo6crofADO%2FjJoCqKO4dosw%2FOI05Q2wXSw%2FifCyCdTAsE%2F6NAzQvpx2tnVF3TcEZseU&X-Amz-Signature=612d720cb90807d4e80d10589db0b074e3824ce4205aaf51a48fa497b125c3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
