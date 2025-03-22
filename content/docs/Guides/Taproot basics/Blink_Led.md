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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFB4VGJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAo69EcdbC3bldH4NGqGQkpTOF5cbWDGrbbIVQ4CIVmqAiEAoJnwynpjODJ%2BApQ63twY02oq2weZxKV5idnXTUW4W6kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM9jMuJUQ8macSvUSrcAzA4U9D7lgWK7H5WsFDYYnrwl3ckwTrkp6v6ZTsCr4r4XsEsu1kP2%2BG2RmpzvOmhTQdRmtA9UXfrCuTPdqxqmTmyQmrpSEe6Uqz278D42g5YL2VKDNiuN0v9XDPuLZiverdjxuJHG4EYkB%2FPzxWwQz%2FICnUw8r0Cpab6y9x0Z3Ybg8jCwBFEl2oe7geNvZpYvASplsCnxBQhouBzK2zjOVnNkAdQUI3DWqiEi35wN%2BRTKQ6rDnPWULEtzuNUwkOGP%2BCmExTLSrgBhtahKQprt1YrOVfNx6LoXlrK2hQnoQwmjVXgVsBzwXzwc36LhcISKPje33RVjmhtwulYlyJKJL5gTA8T%2BaroLGrThqM10pVeKkDlFoiRf44YBWurOPE9XLnK9ImDUxar6xxSC5JFXRVZdztV5riVcX8QtOX9WiyqCCb6cB0cVBrmJklnLIof%2FkRcW7jHy3zMDMteHH6VrH8XcZ17ZmXLbOKDP%2BvmqbRe9Bt5WY%2FBS7PNz1ITdfrzA%2Bpsee0v4ixtaT9YvJJEPwp4VlxXwJlXbpI7S%2FKAYD5CR46TInXUBEWEC2UKgOBc6hE0xdQeKXffhxacjnxcfvSYQP7F7U7Ntc%2FCrKXvUDueVOS5GPIUu0vxLBGuMPzn%2BL4GOqUBRhx55jFOJmJZctDT%2F2Nu1DQTBLvetXYLJE1%2F7SPiO6uFsjQ7%2B83VpUMugBRHwZRHKRud6YMS8KKMkR8q3evBrQOrfMjW4Edydb3UFpJ6C%2BSBbyKu55t%2BlLX3HFS%2ByzFCnPm3Rsca9bhhC7UYYtJ7mWpTMxiD%2FA0wiACFUqmae8eRQG6I7Enh%2FY39JLb3d7ZRfdIQEvr1jPxf%2FkZRwuR%2Bd2jaSaZV&X-Amz-Signature=305387a30c48c75b3342a96d13a58e1791b47a986a1b3f86efb3fb117ad0853f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNAQRLJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICRnFJQLNvAu%2BYxB2XEZFWID%2BmQVsbOL8B2PiRmhXAGGAiEAmFilYdNDmzuqBarl4EvQrTwOKi2N7Qtc%2Fftz0njPs7kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7Z%2FgdLWkFjj4n6WCrcA4QAlX1x5n1Wc63%2BIAhiQUTwsuMpmik7JmlYA%2FjxeGlTES3iByDgsBrobiOoadThomCf4D7eCm2UPa6SVyrTWoBQZ2PHJ6VqJcJmK6Dx1AeyPIga8AMvCrHkB3JVlO6KeECohCPEnCoS3tA0mpJmEF8ShzxmOTQQzhsfJy1Agh3DzeScCnOu95suxdn2u7L6I5UuuFUv95h9m%2BcW4fABzj0p0purei7NddrVkPddtM%2BTTKFJk2bnDIQR2KBsXNa4irOW4NTfTnUvpZ%2BBz1vAYtUa4NEEuyQxLRIDShNJQxYxzq49azaKSk0oa6jFbYFXjZSNL%2FaL8ykKIzrHFKrfqWmRoeI%2FySZRXiJOFqVC8euU6vDFYvxtViKQ7zQ6WMkxpJajqfi%2FFDA%2FiS%2BAjNZDFIZl0omz8sVkpx2a0xvafOPzQiCNrhhGFbRTqIDFWVKyblCfRT4t%2F42qXREFgnDg%2F8bIiagyu%2FnqHsNOdRyy57qkEYgK26MFr%2BsCDVVlNx%2FVZcliGYIsWwmQif7rLOdc3cW15TRL%2F3UiYb3cxsjqwaonz8djBzfm9KLgF5XkPwzudy1o0v8hXrfqKj1wZAmhrgCv2JtO0Zq9AfYh0A9BiS6EiRWWuQuuofu0HXxRMPbo%2BL4GOqUBO5J8hd%2FEJ9ANEfAKY7zJuWbo3Yx90CYuxRdtGVS3yZ%2Bo17eiH6JcvTmwuMOoTU2kIDYCVvkBnY5RcsRiNat1uhfzTr8q4xOv1io3ZphLONmaQeccQSxgqDgT8%2Bx0WjGr5Qj611LXLCqdQZiD2VbYDduZ32%2Bk4W1APCGCfYNjGx5jnoukHEQGudDRMxqmsLoDAPGcdTibbLHqRzeBQKGqf6PEkf3a&X-Amz-Signature=3e78522272f9fcbc0bf35d8cecf8e18e06c7ca5e159887e3579e83b8d79510c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
