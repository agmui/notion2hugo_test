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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOB6DLEH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDAdsBDY%2FC93JHokYY7Qxyx5EEo26Fna9f8GNvVPKaT8gIgJYtkmWXyUcV0SNyubu8SjH8958tIrPAOljtr8anVV0oqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQIjEE1KIiw85AFGircA6pCZF6aDWKL7K7zydl9Ba%2FUJ%2BpW8PMiHMWtrp%2BwfQW9e%2FKSUJeGFKgDDn%2B2hfxoruJjBUcFcxd75pX5wYa86fodT%2FTXoKwSf29%2FVnzo9%2FRP8FmZZVuE0YjL69TP7PXtZ5ayUALQDdebFDFddVbmx1NZNMOQ%2BACMRyue%2FCzmhwOIU0XP3kI5b8S%2FO1Rvaz0KTCFQXsl3C5KN5XVIPSBuNuU17B04u3wLMm7%2B63alWyvps5r6fYeQyBNsMJg%2BHnh83PRfOCI%2F%2BEDLjo%2BSGjdlketxoaQDiELgMNPFBETBPb3IV%2BaukUsIq1GuRi7ijy%2BblGbG6Gz4O0YyysIYNPIGvaB72ZzBypROdALn8h9db5S%2BhiH98gu4V4a37fGcjKhwWVjUpbK8mOEjgyheZzAym%2FrHvuQPPaicUk5Q2UO9t%2FBm3CwZOyiQMVcxNazs14%2F9Q5cTnooNsHeRDnvxRbj7095qO9sg1594woAW5ctRa80vd5G1jVf0QcnOfRvJPJ%2BmbMSsx1xq99aQYUJ%2FJLF2Yb7FmDkP7kjPxhqzHsHCe0fpwK0nDYH%2BBZTsl5OKj2rO2ra9r%2BD2DqJPFwAlS0Ef0xRRnZfasZb%2FQcNatHxdhgbkJi5FwWV5w993DmSwMPiG1sAGOqUBe2DsZCBWEvJXyZxxKiNMRxVuwi%2FO0w7i7jyS9z8Yzxjqu9ukC6xG7RXNXikx%2BQyL%2F%2BDrh0sOwSd3mTNq8l1Sp05nwAgCL3M2DQ%2BbZySBXUoE8wn2ZJdKQIDzvjCWNpUDM2drR7DR6mWw%2F18coqCFHA6IAunfRV602ZSQaJbCiaw%2F3idkVdvgUoOng8vv9628IC61PeB0JrQwPMfCOxLM4osC81TL&X-Amz-Signature=b7aa2b7ca5f61e0ea1f3fadba0f48b645133bebb705d195058c534f0eca2460a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SPZEEV%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCgsDqvlZ0bgayTWmO2pEzVgQJ5V6c2EuvUtCcQIXKERwIhAMrbpBMlF5ceLrOYr2uPZzpipvqdxncZPxKtCo6qd21WKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGmAyGnNilWNFMavgq3AOmBvHT7Hl0X3seB%2F5PmqY2%2FhkexiknWePbt%2FJyYrY%2FnPgdaowNkcpE4EpvidQNa8zEwlyvG7LL6ApjT%2F2D2EFyfVREnfqEehMzzs8bukADfItioUDiBH5gdyv6LWii7T3Y8Ogd%2FPtsQaFMFrY%2FHf%2BFpr%2BtSIfJm0ECUEcVylJJv%2BZHaDUkuJ0zJF6jfLF%2BsdepFhFbuZv%2FRMDKxoxHDV1%2BsnybXHHVGdqb0WzWzb5ERCfKeRR0ktpPNTDyzsejCuwqv0VzXA94CxxM%2BbBJQ3rqwEIL8mpwRbjLH80v2wgUHkCbLCd3%2FLhz5jbYE3Zah9hWhG7H%2FyGpQMX4bbZHuaiorJRbLFq9CxZOQrJfhtdYlvGQx89r7UnT%2FZrIQZOdYJb56ySu77hu%2FwJ8zyFipVkujgrzHVoB%2FtSsbpkVTqhXjZQpAUkbOQNRZncMMmGDs8scwVY2pjZjfWjhbHoivdznel2fcKjSgTuJpDgg%2FujWmITJwCVIse9CwCLhxU790XlvG4H3%2BFknc2YHSb7GL1Vl8jKLNM8wQ6QpC61ZaffuIgn6MP8SXPtGV7F6%2Fr8Ae3MLZZO3G%2BeJdXo1zGsUNMuZRBCxDoP0IQRZMwlCXgUy2kn1sNw7rVLs0hO6ujDGhtbABjqkAbsAJPq3QJxygz%2FcgzzK5H%2FgHSko4gZUz8cA0SWkk6qRjeSIcS4SyruCjrED9eBmVQ18rIfTb40eXz4GBqbEPFeCpkr3ACg7eXeiCXkOiY8yk1vzjE6BBsocv3NpHObCJ9QiGEXtcyhO5kANGD8i9qQT2oUNWjJPduQknOO1ghzw7Rx%2FVv%2B7kYlhMxcBOGJR71ZFKF1Vqq%2BsKgD9PLjryrMAJK%2BI&X-Amz-Signature=04e103211455b98659923b5011c859ed953a4639af0e61a4839f296345b70a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
