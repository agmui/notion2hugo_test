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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5JQ6EP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCfcPZF0hcHql9LIeyMivExZC39fIkblTF3uZBzQsCGbgIgHV%2FG%2BgSf4EKQSAMiub%2BZwhA0I5YHG16N%2B9ySDquIAlUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkGJiLeqrEvFwzWeCrcA46cDuVwd%2FTc0uBRsiIzHgZrF%2FlUu82lVXTN4hMBYeqiNZbGIr75hueaalk0QhLStN0tpoUxDPa5rK5NKiTlmXuTzSIv0f6zSBgZUoMRroXmLzbSmThFaR2MPh9uQNuV5WwitU21PQe8PupaFOiwB2nRmA0A3UTmCmwepHoWF5s70qS5FW%2FzNdaXqOZk8d9bX6W6dEl8QGS4FgYt3I%2Fb3fKXs%2Fjt5mwW5XGg5TlmRDD0NKlKAnNYnL6bQd1xOaXoJcl9FlaWJ4FaRpKvL%2BHkBrdDFBMxxz7h%2BrqTokJcfWwXJ7nmI52g%2Ffh5j9eirX5JdQwJNvSDaeZT%2B7gHSCadTpVIKqToUb5WQ0pv27D%2F3gzj7f1BoMRpZFjq0jCryj%2BjgsTRBL%2BTHEj6XFPv4mrQjrJkuP4vdKZl7vWl9lbwL7HkY%2FXlgcDn%2BeKowO8YkEmANPNAus5Ix85c0Dkc1DGqA7h7uE1psqWK6yJS7SE3MprAVN6xmmhwcrtpejltoglGT79Alc%2BgPMnY7GYx50UkzwTK8%2FSXRi5HC42PW91fWCyEqPpAmBFSVP4JjtnMjQ1um8jw2NaQrJZ7rc1u7IufuMhRQXXcImOd7Np1GuNhCG3YHq2CbEV%2F7ijLPvYiMIiQrMIGOqUBXrisAPrxfyJN82nKo3f44kV4yQ0wa21s1WzXnWqA3CFUB1kR9zP48L6lyZ%2FWbCkkNCu%2BiowPR4RyoQtwGDTovbWIx0Zm1UBTjcs7v6f6VrzeiA4CmDkLwjm%2BT%2FdHERgD0D5v7losNXP8KvSvBLPGZxQoLpFmS56ST4eKtKdcNXUfYorabM56zkjqOid9wsqICy1jZxRGOjknNSqH%2BzkPZW2xhmiH&X-Amz-Signature=de13b2d58f24d125b63512518cc99c81633a10123b56d05b698e90adfcf2b004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372FIMHC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIG8DKZKIECVALkFyc8B%2FqSbXhLpY1IPntkcweZkHxUMjAiEAt35h9VE2E%2BGWKEytz6JhexAfN4J5ZQGj0sbGwHfIU%2FMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzO%2FoajfKS%2BQ6EpAyrcA%2BHMO%2FeKO7S2xJ3hKBA5FlzNrZft1yPcBLOqOP22aurXxGELGOTUkYCABSvWLXWgmyWLjR1SBdIVGkPQe%2BonLg5Gs%2Bd2FpUh9gPYXLyXOmHxW9757ivDB2VuMQweBkElF52b2LHqV3KocZTl19rHldt%2FT2MTfadHBMTl5NcsnJtdOkzeAN495bQl1fhds3mCkQ67ZV5wbqQYm9PdhxYlHMt8CfFZZjUhW1ApLCw1EqyHHDId0gLCqX2skofaywTAjxoSPyBj7S0gowazEzEEfO4KhGaZnF25pfpsTO1uJf7w%2F9JMQo92hX3uRNP8gTQ6YmDYxtI6M9K6TSfHErf%2FEPwDlrw3VChK42h2tygfeR96Qw1mFQO6Shz4%2FJ3d8hDD58hMwk9g7n6UQ20h8nOAqY7tcNbdI4kdtvrCBes%2BCzswpeDrsgcqc5TO%2FjLd5WZNAM8JSeC8lQ5CIHC%2FCcrBCB990WTnfoQ6Y0U%2BIM5%2FQTr%2FgxjeR3XG5k3VavRtRQeJBes%2F4D%2FJNdg%2FbFjU%2BOpmW%2F5cYGi7FFT5L4tyk8TK0l9UyWaLRnusJ0sqgVuVkLQVGVg2F5SQWKLf2IGp9gkh6En%2BL3jRUybjJWP73X6nOOFxz%2Bx2fNr1s7mZkZaBMITVrMIGOqUBdyQ7xJu9%2FIoXDQN1ngSjuVawhBwHtvp7vU8%2B64ZYB0mMwUs%2FvYuEq5%2FAzM%2B9aRh7QSeiVpAK2gLKwpBDTFEeErIosFNDwI6dA5qvfg8iMPMrucsEXiNqDlVCgJoMnStCNEW633eZip%2Figbafyv2kaA3aAP9SdyDIHQJf%2BhZydmElzTATlu9vOQa1VT1f5%2FbqASpP0hREKMcip%2FswB1GVROjeu0o6&X-Amz-Signature=4fea3d76d7dfe98aa2515bd611b3ba0cdfd49bb0ce930a80bf478fc3d4367ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
