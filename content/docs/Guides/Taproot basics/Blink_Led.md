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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQLJQ7HH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGInSwO1LrFdETxFROBMPFAWFkAhJ0TFlh4EyPgPNA72AiAbI%2Fy%2FZC9ooUbEcCn1sslFjZA4sIvH%2BYW6h69WDWOOhSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYWFHLU8oXCdEJlngKtwDp%2B9WLAcXT2BvKdTR%2Fj3ybIHoMpFIroI%2FCq78Qx4TDiLQlUwWcDD%2Bkw1oOUBqF53jwuBqMKo7Jh0SbuXXxF5NJAjirq4AWdO1A%2FzcQ1P05Uxv3JkcYcIprR%2BhVaQZk9Vx0NIFkyuoZ1N5JACjtomBTQeWWKEsLPi2MMxL%2FAK52LGDXYCQTrxDWuIFL2FEoFD5ITGXNBK6h%2FNFDS055UBBd3KxCM%2FcIAhPtUvwcjcZs22lxyoQqZz3SAEbP7sbBbeCg1jVQvCfrJxHICz2PFhf0q0jn1mWv0ViwHGG%2Bg7tYxE85jQYT%2F0PPBLlbjKmGbwq87Y66IYac%2ByC8V9xnkZEdad4h3a6QJE5glBTE23ggFXPh6VksTXvD6%2BZgCubQk8wprHzM7F4b3SwvvhyxCpgMh8SffgIo487fpuIBxDEa9qHKZwT%2FEm57fsBS0DhZciwoPWROJOWCF6FQx5EhKrADmHGDYgzQiIKqd%2BEwwhEf0Rmpc0i9GzzP58GbJFMrB7eY5ttmHFU6m1bdF0Dcg72kbGIiTyRTywxNPvzdYfkLR1t3eDbdU8l7MoASZ6HtTp96Fu3%2FA7eaVqBgMrdDTTkDlTtSjSosuWXJDI3lp58whWhZ4s%2BrMKvLvQTIx4w6JWkvgY6pgHuvPCXMDIB1LbV%2Bk1QP3bXHD3jSfAYdVtAC5VwEQxTX%2F%2BJols0ok3tD%2BiSy%2FZH8XJVmnutHqbcQ8hVfz%2BHEnHcCqHvPzhctecqNB7dvhhPIY%2F8wPNbmz%2Fj2z7WfegUiHtjwM0%2BtXcUJW%2FzBGiovKS43Rq50p5hJNFI2DDgkQMA3q8cig9Gg0sPH%2B%2F9nr9x9R9mrEHoPnVh%2FGkC8UvXEkUG1hZ5UZ5T&X-Amz-Signature=9ad5882a071184c4baabcfef4ecd6e5ef27f22a6b342c0a23bbac6b3531988ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDIC3K2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFGjv3ENbhGeZPGv5rPAFidDcAPFk0bYLA9Zm%2B57xAQgIhAITDkH5z3n2eU1%2BWo7tmhagkHFiLqW8%2Fj1c7TWoEJpexKv8DCCQQABoMNjM3NDIzMTgzODA1Igx9enjRfOmBKX0Nrq8q3AOpI1Z7uJW60bLIIpg3CzPqbuFEdrbDcVoUTLtoKPq898ZJjZPQiyUgLCfHGgXNhISDLSMSOivm2tccZUAqgAvOXwlnCbSS1%2FGiYNhfkSxbWtRe0wqqjIUHN%2FqjsDJDhmiq8Ut4Hk4KykpPzdFiCHagdU46yhk0yJN3tQbhee3Hfi2Q6Lt4uelRa5siW%2FuqqUjpOc2DeVUiSzTqq9507ag%2BKJs2JC%2FSvDveaFpfr7%2BgT1RXFolQ3dJfvW8%2F18aCOULZDxYoDsbWM3AV5YnadKNf%2BIwAFIWr%2FUVAXcmOcdjIsvxpCKAf42g50jSibI7wAXR32GUyP96ca4cuTeSV0jD3BCrs2eKVLpNUYXuBOwPvageZAyoE%2BmyXWBWFkHSBXr3GAPrzAHOftNY7wZBSF1h6v%2Fa%2FePkF59WFN7UQjNx%2Fl1LD%2FhwJSNLquTm6zvrTLgSU15smKuTvEOMy0EvGScOsJe27ql7YzdTQTdjLrmKNem9IGo%2FEzvSuw4SZbkscUTQD%2FTHbsdnui%2F2Hbf0DSkWQoRitLuXRA1sgW5C7B%2Fpn0rYt9YTHmBmrTjxyGhqALP3U9DkWXFZL0hnS7mXb1it2oAnJ4JMcvAjgYuvMmZnp%2BHnilYQTgkU43XvDkDDYlaS%2BBjqkAYDMFvBGSjCNIRUjcqqce%2Fz95mA0E8vv32LAFRQAtJmyggJSVFbIru8g6WSY%2BxQFAuRbk7XNiJgE10YK9VpwdajeekbVWLcGB%2BEjRfn%2FX09hCYd0i6IJVFeiYQ1LX3j3Oa%2FJEPUg9AcxvDdIjzUtHSXmP%2FjkrzBviMhmOV2pJIKrPeHxOVYSzZ%2BI02mujU%2BpNBZIAqZSCXhnnQI69uNBq9Nticm4&X-Amz-Signature=3c8aebf389f9e25e1d1a50c0d0bf7ebe1c37d05fd2ae466d64357d6221635f93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
