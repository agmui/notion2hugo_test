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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOR3MDY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYwhF6ytfmZH%2FtkkzQfAjF%2Bx82TnptCQQl8YRc31VnEAiAFyLfGIs1bFBCby4PKCvj5xN25Kb5LcXXmiFwu3w3IvSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM7gTpLtAI%2B9a3EqB1KtwD0UtNn4OPsfGMupTS6xc%2FNQBnaH80a9uNg4zM9z9w1f7TydHZB0sNmgoevM7WYskw4aqu5tHsvm6uqWuJpmGr96k%2BK4iy3X%2FbFUkMSGohRZ2Z1HJC7wMGZpuT9nQg6YJRAMXCsXG3yCUI16fDwut%2Bi%2F0SYMyEgvmkj5WBq995rrOqT%2F0tV3sI%2BxTboqwIcVTiKRaAlbrySh1KGGS3wgBRa%2B%2FQQhlBax5BSncYJR20EbmO7O%2F9m2OmauLNdcM0zEyI5hnlkU%2FDASnI5dMTzJ8jEGLI%2F%2BMxQtPL0bt1np5ykDa2L0WGItSv7%2BWQvtEK6gTox4NvNrtqDWU8CIykJuhIhoOl1uIpSNFUTB%2FYhFYZd5XfS6lECmt0x6uV1IAikrFWmmi1wXPivbnQ8mocpBxHWnfpoZUJ4xmjZG94lGS21qZo6ytstzEtcrXytsrI%2BA%2BUOYS5QnYeJe0ZLCclkqbqvIa4yJxaaHTZVIKCIgoTj1tjOb3tqG%2BhLNfCEz4p59t%2Fy2bSapJ7ZVrhNR035c2c7jk7hg0UPh9cr9322xR%2Bygvx8Fu8Vxk2utcFY25Z7PzrIjMmbYJTeQF0MbWZB6wzGIwyP3r9sixvjzTKqjBro8gwX2jgYMxxhXtHBtMw05GNwgY6pgE6LHboLdEWQ78wN7lDy4FziFH8p24YgI6U6Q0fFLSAWZ8lxdbMpCyIGktKlUsXeupvEalN2Hc63s4AIsmbD5Y187D6oIkFcVaB%2BKu0u4I4539PWz%2FflzLPH8J7JWpAPVoCMeXpkt8uzoYyCxDo6WU%2BnvI%2FIh5NQwy9YA0vQ0y5ktivcyCfQwqaoBHGy3R%2FP%2FuqlqKbIuR9%2BercefT3VKVxIR2yoZlb&X-Amz-Signature=0925b4370db4036a3d94c0886bc93b0ebe70479e0ff1b385a05c6c36f0b15ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KKJ7OAK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzYv6CCn3AMISU%2BkOR5utH4uWNQOjlUKE9CJwGdAd4JAiAkI91EAXFoYFJyGsqxLfDUMmUi2ycOl7F7JtWTCAs9Syr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMeWTJV36EgVPHC%2BR5KtwD3mdRrWwZFonCMTIL7L8DE3rfiMFd%2FSZ0JWJ2EYY4ej345ITQ3C58h%2FlbcDXbLVh5jo9PEo72%2FNwu6twwirSF1ipNz98HFT69qRqz9wXyvBShpxmwv%2BCuAIx8KIq1NkVLdVw%2FsJU4m6%2F%2BohAzmsPJvFFCPUwQD%2BpVpD2nNxqNuimbxVw7%2BBvPknTANgjFG%2BUOqocVxVxNnU2mkJI36NySppEt6wANYKYTBCezHKPksjWgVCfAHGS8iohz2mIF7V0EFHHwk8za54Ixg%2Bm2G4LHI9eMltVZbSb4ZljOFKg3YL%2BmslJDFEG4yv1IeFHQXV8feLqrj1woi%2BtbZMDcd2av2tSZWUNRdUHvB777LWnZC0NGKG%2Ffd40knyq%2BfqYzgRE1VysPtq0rnVaPopP1S0thiqaSanaGblDy7l1QoDj%2BymtqREEVu4%2BiexvH5%2BT6drlGX03CUXpCzjuhN%2FGTMajrs%2B%2Bgc0y8m8LuMSk6ME8BdJLZuz2Q8gjoce0JIJ9lH7bHO8wVNYav33ykZDk10qM%2BCMl%2BJWIcqZTaFWsB%2F96cbSToS3MY2k1FibBT1A3f0u39W2IaSD%2Fq8oa8mJOSGJOXW2AL7zQMt7Piz2YOHCoHW6h%2Bdrgbet%2FXKIzQVxwwrpGNwgY6pgHOwh3VlG4OYDszfhrUiMUTjYNHPauy7lnIpetz%2BTZzOTJ6fm7DOF1xu3%2BYjlioxpzoRWhJFGjdg3RX2lb2KGot0R%2BKszpHfrn0BKEVvNXQUHvJjuHIXM4acG6IAAwJZWkv47eynGxNy1hzOTNHf3ApeuqoYCTLd9q0FCvhAKPflHqECSwawj%2BJqml4duI322X70uyRkRhQMRBre%2FFlqFjvzlj2sI2p&X-Amz-Signature=dfd1f1c987a30d4ce66df8d5618713040c4210441b4c3303fe5e70c8b3c5d138&X-Amz-SignedHeaders=host&x-id=GetObject)

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
