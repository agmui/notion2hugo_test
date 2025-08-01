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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPFTWPMZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7Z92xgHYuRtUXHGEcSYr9qTBAENA4URiE19f%2FOyuRjAiEAzVdvOxEARysdxVWMYO%2Bp2MphiU%2FOb4j8pIf8OQtUS8EqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEXiwW7%2FY11g6FrCrcA53GITL3GsUSHqztVdYWC6rvLEzIvI3p9gGkMtjT7AwhZLX8WqGHO%2FijLHzRGlp8ubaxGwUZKj%2FZCaJ4N%2BaeIouIpb96%2F4PSKR07yWstppv2CfgdSVK9nDqoEyvUd2JeIlnkkOCusenyl70oqWq2VlxbnK51AfKIoQdkJ9OubRMEiqGlmEQ%2BYC2gjrJ24N31bGCzWi%2BI92ftnYAjbJ08e2nfEarvz2L4y1hRoTexVArbOtJuIDfFvrGwsDznSaQ2iGfaOnnAJhoQmSW4U7Sqch3%2FzhR%2F2MTlhXq4L32Ot1xPPLCcLoIcV6hwABPFQbHoExR%2BwGZmPcy0ymZjFLhpHYGg8RnPwfl0KeuZNEmue9CtEX%2F3%2BjI9RKSRJxwSVrsnsJcl%2F11bCV%2BkIBZNLflIbSC%2Fo2bUuHmdopHaFcOW%2FOVPUqcfMXAxlgoa2T4om1ckQOH7z77oQNP1bsTgKagei9%2BRoNlfPcNz8Jf3Z5btVdqVSPWZ29Otrzg%2FjY79UW25D%2Fu5KSnw%2BAJTc9SP%2Flyfc2i7pi0kDrZa3efPEO6eubWMB4riB14ASr3esNVwmOHCiGPeRlj8HcrODcERkRnuzS5F0kZnhPVnYFCHmI8pAwuOGrsL1zXryNnk0ZA%2FMNPttMQGOqUBs43r%2B0eKmhv89IeYnQ%2B6UARYcy9rzSMd66hsN%2F9kyMLqJOSi54MJGuDgpXOlH8D32F0nDcjEeo%2FXuoyrE5p%2FplSxcgW8k2gHl0SsXDfFp1j0O277tshQfvtP48wXglT1zIuaUf7XMhtxW0VfN9D8GOg9VVCT0iaDSoOz3usQhmcur4cIJcFXNJdjZ1JyF5teqWliHTySCSsDeyGTr06D0TpN%2BkWG&X-Amz-Signature=75d8994b1879a3c5bf9665dcb8e3d977769f3ece94579b33b64cc5dd94507ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26E3SZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo3pH5XHOq70Fxxt%2Fd4ifhor8nhF5RWDYJX4krHrAQTAiANYVj6fYqvknAPXgCPrCkAgDVuqmVyXEqA4QBGYp7%2F2iqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTJm1zdNNbCwDX%2FN6KtwD5MUMoxUyhHKDJDe3s8AGbNWxheTXdkD8ZIUTb1PN1IoTYv0Ywk2qk6APRJADr%2B7UYpS02Tj110u44QK5Bi3%2BdstlpBE5yVxtcXJ%2FVD9aV%2BU5%2BX13IYqAJ4gksM6AxIWYxbtt4QQuL6KdsY62Jvib81Grw0nW3DlWLrPMh4ebeHnUQ%2BaRzFmUh7Q07f%2BEZW4GoSfD5ptAYJCGZ81Rx%2Fc8sPiie4dCLyqugkWZcXFe4tyocbfNwsvOgGNfcqFfun6t5axjToZXOTllJWBuDJt5CY0FLKmCEMvRLVCtTFmnsY8h5jER91EosxZm0nqN6C53gVRWH5KBMrikZ1tuXfHpR%2Bv2OJ%2B4UouHCIAxTzvR8zepKonOhUOji44rS%2FNu6IvLYz09O8Q9zD2nRJfE1DRjDV1FMA6dhym58TkhH9T%2Fu%2FQp18FYjYuYo%2FSwUiQlpuSIlnjuN5x648DqriKSgtIgemDMqtCo4Zqhu3f%2FUgvDyvE7jzGwgn8YqoYVyqIYIHgDiEOBLylslWkNwMXHl7worKnep8a8AIaYpEbGwWvZ2EMOtS4A9x%2BqkZ9F%2BA9e11ESFAyQ4I%2BwLB9Ti2%2FaUnQkjUlFckOFVecosGkuaa6uNrZe%2F6xQY2tIeJ9%2FLMYwj%2B60xAY6pgFARV%2BUT4ZjP6FachORvSptT1DUnWbpvWImqOuiXhxDghzSwCzn89jfNadPTrP%2FcADx%2Fmrdql0A4jcmNvXheOhURG2rcB%2FXFfAvgipWkXv%2FXX9zE%2FPAhrxRGG3jo1VP5z1EHCwLOcvaf9foOtobaGPXX7FgLCjbm0lBE27b%2Fn%2BU1OehB%2B6%2FOhlPEDXNHzS3jXmX%2FYANgchJB%2F9%2B%2Bq53inQdDa%2BfjSsk&X-Amz-Signature=f63af1c8ebef875d7c68f970409a9736c2bab450dc837e9f05b50c2c363b4231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
