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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGGFTSMX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC53HPvevpkOAC6aW7p5jzErAO3geDBimSfiJZlD5%2BwHwIgXZTAVVqa7fv83VMoSIJ1Uni3qcbXRWphGvXCha%2FOAFQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIuuSlvmgH%2B5G5vSQSrcA0OzFlPLzbGVZjZrJOB0vG5vr8%2Ft2J2Xpi%2BKt7XFA0x5T9ZaVGAr3bb6mgBvBoY3aoKqa2GXFEWyyD0GdZvU5SBoGSH44ob%2BS8oNxSMNIKOzkmlOfoDt9VyWIj8ir%2Bs6cd0OTSG1mcQllxhJxRP%2F2mofvxSScf9bPWfjcT4e%2Bc8NGimcRMWF9zinqoDjeB6CnEaok4itmWH0573%2BtiMaw6NzdsQDy5thwPh8eu8PS3Tm5NEvvt0s78ry8sm5hN0kZ0F1QyLd0Gzp52vYCra6FFdKAfJpuj6m68rIlQwuC6Bo%2B8AjUrFuRb821DHUa%2FN7BqkfyQBSiXee3OLIqypuuCXUkjdzPnhNeM0Wbm4L5AWweasmKEp%2F6IpnlMgvHhBHe2cu8xsWBpX7CHSqbRWD9d5GUSu2i7MljS5aNMh%2Bu1j4N7NqVLIpw0zhrcOHzobUtHDbeYZnBIl02s2v4J5UE5VO98kSpbttuFUDMMZH0Ovp4IpxN5VLUjrwwL66vKctM7H45LbEtP77CBCqT3QI3g8W58diakCEfwoCFNuavHK%2BHvikY23umImNBnEzlA7yUqPuJmsrQHrS2lr7UtKhMcXbqFUny9BKYb91RLRSVfEabECxrwip1c5nTESCMKKGksQGOqUBi5niHNTuY3XHLlg8Uo6SMqscxWPrQ1%2FqxD1euDkwtvENmVL9mAGXqe65IUEtLUL4BE8AgShKP7xgQzNs%2FA8RFbyOFSePVhEEWIdS6taW9NQk130nRLPV3ioQmnh0LDJelMs26cELx9Sx4s9eCtnM5NDBode7yTct%2F2tcyVHJ7yajtwZTyjtUYcHgUcM0jC1AzWWpgMi0QiHNe8w90Ido9DQgJUcn&X-Amz-Signature=b8bba446c134ced740d7b1a6f11b1186ed61e5ff7c41f06b9a7e4d2794b8754f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE7OWZOJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDmXE77XLJRjhkdjvrhiJfWNNrDPuEtlFxy481Cz9VcSAiEAsznifVXnyXBE3btcqo6sfp0IjUVjk5p6kyWihA50ajcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOTseGvaIHAd8aZwXyrcA7Q1wBUc3qtjq%2FFglGdWiXga5ilvDTNr3ce6IBAEABoiKH4pVhFerMg8No4ng5NaIk%2FRMeGU9v048ky7ZRt7Qm6%2Bjm7oTnjE6My5FG5x2Rz5ERFw6SW%2Fn2NJA09Oar7IvnfyxGy%2B1zba1NZAg0Gxsa%2FJzUbreQ9PV5NpdP4L32QXhGs2Wkn2YEkjEw8%2Bpy4lLNKBAl2dRMJ%2BeKDpMhrS8RZyyVdhae7o0zNOwQBorQR6DtXiliE%2F6%2B9SkfEyYqKgRIaKI1STKfNpUyRM7cPFa9%2F43T5yJ%2Fs2BZUsD7Na78YDZAoYTkJy4nyS%2F2sIYDjRNNhdOar5QqVH%2BCEdgDAj1ZO75Uj3T%2BIui3AL9ZH714yA7c%2FrdlSB3Slrhmb0h8ztnBsWhHw9V%2Fu1isb3hi%2F23CTCHoLsfkkK6tGbYNaJdoHSfSkwyoxO9DLUa8rekuvxbW5tIHFmbB1QX%2BgNAx8OIkRLtlP3vg3C0jjUJiJ3UCqKOQtvjbkP%2FztJjeBfCTfOPbsZAJiAZEtiZij%2F2sx%2FwFz6CttzZQ7gQEYntJGeewJnwZVDkdmG6VSkurDydENQEPU0aQ6Q%2FUgRpn5hidwg1R%2F0dtIRZ4AISqThXBxxFAkLc1RsGOFGNg%2Fwrn32MOmGksQGOqUB1eQOTo9y4bIFPwuGSdWHR8VagDetQRyUgf6zSFlK090CD6USLuBHYlFYrd6rRq2xXNVPOcYk0mil8j%2BTXQMOGnBdGd8L6ltInpICecMRXlVMGmC19az%2BPsxb0s93qNDYqaTI0z0Q%2BV9b%2FI%2FaM3OYbkE42Rc0WTMNayHWsHroUeCXETewy3StnuDDHAvGjk2C30jXu%2B%2BHz44ZVKtgivGpg44qe71D&X-Amz-Signature=51493b79304bc79217d07e7bd49af38ab9f6ab4e8ebc96f4db37d3b6a6f4d235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
