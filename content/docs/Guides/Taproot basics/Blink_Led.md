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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCR2YTI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCnyoRWVFM%2BcMYPWTqzw6l%2F%2BpeFy1%2BNU5RBmMRUf1Ij1gIhAJJd2jAGoCdVH0VuI2%2B12g%2FzJaQR2wX%2BORUx8Pm81N1iKv8DCEsQABoMNjM3NDIzMTgzODA1IgyOaW0OoQX7AygIHw4q3AMsBvy3umWd6%2FkQlHfh%2BEQB0aHv3hHPqHSOMgnpXtX%2Fp24SFoivXkkQPIlzApVbI0nL4VQGV7OdprzJ5ywvRfT0oFS%2FcZW%2FUKPw%2BchhlWAfa9qTHF6Mu3UWDc4wTD%2F60KqiSaIwMq9NTptGsE%2FhzjvzN0UxJ6JIHtLJgi9b3LrA5rpIVM4BExxz6KHNU2KiHAODuIoPp1SQD3xgvOnvtvNALcmDYbsfd1%2BP9aBboc1E8SUdM7mMaRjUnQO1HzrCxqG6sTMeZOwJ5TWbWncErh4BNBV1e3%2Fj3reTNwvgxa2rCrMKpXFeR8dtUqndG1uowoCx3nt%2Bzd%2BmZDdY7JnzbJV7rPKyhjSolPLm%2BNh8C%2BLI1KZ9i7RQApATudElF%2BkyjkdMzdxEvjeJlw2vAiShtquTkCi0lRDsPzgzlru1GysGhCwlHfI%2FnoNxaktMhJQgdexQf%2FUXyFZgzvbjZLJeXuY4XuYscg%2Bl5dowQqQYqmtwst67f6rkwDv%2FLEqWwi3BXsssbMhwrx8lXm%2BlomXZpJjHyc29gXjCFCWGF4I7C6WLIyk%2BSF5OGHIK%2BmHavpHkv6vB2peMaelJOyYESwCXJt2vpe05ER1P%2BqyUAB0asuQwy618vBjq054mUxPioTD2wvjEBjqkAdbc3CJ%2Bp0mmQJ97OUpbedslPZo%2F14MzeuHOuA7jAm29grLb5ZLJZlpO92%2BwNng4ubKHZRSdG%2FcH9uWDW5rFQFD4gbwOH0nGidjLAZOFvmY2sGOT1ogktCko8%2BKlOCoytDiXIEJSifAp%2FuHdwhUKIZvSyZH5%2FjVW1k0JUapNaECJ97oh7Ap1jYWYYafGmDVHmVH5oEf1aRxriJXLkQT1a3r8Pnxl&X-Amz-Signature=9bf3b9da3918029fe04a185954d49235c5df101f5da53c88f8d1339f96d6890a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL6QWCIM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAp4h5pm6Xbz4IqTkZq1LzuBRy3%2BnjpVqvmkgOi3JDi8AiBUJi0%2FflErqMY9L085v1ESfp7VreyfdzwQNlp3cK51Cir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMEPHzDxPIvNsc9MdvKtwD1bhqvx%2F3zl5aLU1vASL9BDCN03gj6w%2BIKpfY5Mm3XGgLhTsmB0KAc4BrPdfoW2A1i%2B7je%2BLgOr20ff5qtuq7h5P6epr%2BkxVVOOv4ZqpmreY6m5IpHF%2FSxsplboMAfyxD0qwAlVSClXK37h6fiQFu6ABPRoXpbXrFQGBv%2Bbi2HrGyFeT8WZ5xRJ%2B3eE1EyqkAGDn3Yw%2BK4ntxopFUVJlzxAqLS1gfoTNtU0EIO%2F%2Ftfia%2FkIjHJVQC6D8rzIu8Uc%2B8%2BERSgD8oQMAcUi2sNHFmfOIXyHkLxhxZ1BpwUqzG03%2FO%2FbOmRKp49np8LLJMPUYIFcQ%2B2Sw2Hl4Xkw6mRH64951X9QWjPowz0p5cFErSTQfLYzXDSiSmeNqYgNY6XCxA6U3h6ffD3Njham%2FOYUztS0ctDJs94URhc4xCxos95%2FFX47l0xvAUpF%2FkfkebgOB6co%2B5XS7Ray0SUNOCdNN8d%2B66duNskGohAirvau2OXz6n8frGxfaXIYwsPiHcCDJs2GIGzFWQL6KTKG0tEo4uGzzedq%2FOAR6AlwasvXwnYup%2FkQB1W3%2B4F8cas%2BtgMyUw1X4ipiMrpf9PS6Tv4F9IUpr2gZeOXWxypxE8CyerrElkzc1oIyYL7PZIsD8wlsL4xAY6pgFVQ7qjh3xyG%2Fb15RxH6mo2TFcAz8BS23CPfDzf5Oeu9NiVBaPogik8XAgqgg6TUqfdqAoldOp5spi2%2BPM%2BFgMuN9CRwDhS%2FiY1ojxTASpPdY2yJVA4SKqSDCQMc%2F38lwLPPgKpFDXUp4soRYl4UVIHLmovyIkEMNzpLjvSgS40IL48abU6DKEUC4%2FxtuiG57%2BrdqZXdMIr%2F42lZ28kcGdOaOZhcLJW&X-Amz-Signature=e29a465cbc0ec120f1115d9fbea3e865b44d1a4dfae224d03cba83bdcd1e3dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
