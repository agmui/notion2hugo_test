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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W7G3ZAF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDLNRH3Y74y8ZVJyvCErjgB9ATRfO%2FOf7ARTajjDaEvYAIhAO1vHzH%2BvBuksNWoE8SuAZLwpy1iR1uDkt75uOrrO%2BZ%2FKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEkLIeZlYViR3khGQq3ANNTUw4JEMSQ%2BBq9j4ZtuDGFAmImEeqgnUx2fjldoRkFk%2BkS0sN29%2FgiBmGOui%2BDokzjjX5bsaArNnFiot4e25shnp%2BdwdLiLR5ky7%2FUSNAoAartJI3oNuLkpCy9uJ5UEdNDGbX2uCTeuUWye4Jd3A4enIOvZO8Gpiv4Q8sGZ2RWd6J%2FazRnqHkSDdfArjw9tejzwyO71vzwLV4uHKBf7upA76kV1GpmCYLSKxsAyIjjCXxb9X%2FudkR%2FOFFR1Q6XQzjr3caDPZv68FDBXF2I%2BP5IA7UYmHMtS9wvhTEKHpcVaVC%2FPKnWPTCNcKXG9Uw1kO68Gugm8iNy9weJ9lkyyyEf5FA8kB5DGiYrTukm%2B6Os%2F90K9ezF36POzSDnkPxVre7srD1RjL9CELsk3qHAgUxRHelcCIX2u4Ydhs1XfPn1W5nZkJuMO4zJ2nWLxG2hpbPOFqCi2ndIHRcSNgp%2FRAg1a%2BNPkTj4cM2Wge9eFgKJh55k2IwKCbrGoc4WG09WCSm%2FlBR70c%2B0r0y4KlnsxPTDbSF3NNxbdDMfPtVx7cTkvmGT1dQaG3GpVNS7%2BIQ1kTbdZSNelzcN52ypUB77ozd7JcyZZwfOCmIdQW9SDdQgb2jG%2BUG0kAVF4of9zDKueDCBjqkAWNGYWvgZB0WpJSzRZ%2FfmVDpsP1yhRuoUr0V3yhMGkCnJGYP4N2Htdp304guUQk2RK6l7Axn5a91H9LauGxF4h8Aa%2BlCYoAX1sOEvM%2F6kNX971m1K73olpTAGTJVQksuyOmawKWbaFr5y1J1C4SHptMIET0SseI7XAaEcF2CBKqiqTcdBChcJXJekpBnsrjU%2FJfJ9O6LUrb8aCINBevHETpeQ%2Fv9&X-Amz-Signature=f0130eb2563f50743a8717ba697ca415dc88cc0d92716e2adb1e38bcced17e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEYM6K6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBOu1ffBEMKpdJoqqrqvCjmI0yeiquv8Dh3G8JzE%2BY2DAiEAz2iVzk1KMR8h9pwr8TmZRUyQDohMNq2%2FX40FDULLy1cqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHur143W6Y%2BioZiW7ircA9VJ2iSdh5FH6X9UOE2IYVOQfM5wmkrbEqztD%2Bacx1VSzUK5x9WFe%2FG9iD6ddjWC%2BG5m5NVsqsgT6c%2Fzx7R%2FLtCbp0T2T6oz88FRgzAMODxxo%2B1ARc9LaC8UeOOAA0jlDyxoErEF%2FSzoMnr5aNIwIkMizm6WMkZtjDiB1hhINyacPUWp8dxqI%2BH0HSTQQmncgHnjH6hk48kyGE2CUdYb%2BTD7ZpEEEKUSI7bRHHuqMQLC8VQ6wn1eZPw4xxKlGR13wCnwJVMd%2FOziJ2XsclNKhbIwt4aVkBov6zIGSnhcbIdWn4086KLTYCOZBv6nIlvOoVvC1I3pW%2FRGORXQfMrNXrLqj16zxX307OBF1RA4%2Fl3AmyCBDrgkaBHUb3QdLq7mJRbEbN8cNJ44osoL7C%2Fx1kuLgA7G7O4RbC23LERKRr6crXS%2Fqwg3fhpmMC7d%2BGQP%2FeUkokaYPTKNlQnO2uJ5BgaZQFMtTQr%2Fnjli7WQtKQfOn9RS7tQilOyYrwYrh%2B4XPIG9yniozeUeDwafcQeejOB%2FjwKXWamdZmND66ej3YVTTqy%2FMCWahHjpfku6XK%2BIFCHxpYPX1A%2BPfn5%2BXTUi%2FrVzSPp4RLAZMjbDAnDZpfQKvYARTvonsqDIXcZ2MMTp4MIGOqUBcQrYgQJVWdzqwwRmLOtadJ%2F62kvPI4gxo1ryoPhPJPggfk7kajEWSWLZGfHwOu4rOcJfL5GWDTgoHW17erTv2QYpul%2Btn2GZwjgCYv8OYSoSlSPnAM7HO94QR0BCm1V4KHiAAUoVvQziFCVD3oxE8aOc7GnStyxJ%2BAIYVru72QT6V3sCSCnddJ28BJDgL0iWXm00%2BiQwplEocgoFnZitIuFnaU2P&X-Amz-Signature=1063ce319a1a75f05d2e472c77f1ef3159adf96fdcc7038728c23b88c2158b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
