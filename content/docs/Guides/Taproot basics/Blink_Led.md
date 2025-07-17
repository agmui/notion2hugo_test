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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGFYK6M%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCy8qYAFdrVHvGUKXhyR%2FQ5zSUrMjfbZygrO3BZUaeIAAIgeyGOatRyDGbZ9w1q8Nd0FJHYEfFZJIJRvGDvCRKDxKIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOh5x3NdyHWtpwi1OyrcA2K5px941XNIUxhQefuWAm1aUR%2BDTFVloDYpPB5WWzdvSdWiYaNVN3G%2FoEwZZEUXgF6oooZIUpLsFEFppLgQqIJWe3TDyyp%2FwMl7my6GwtYfKvkCajEZtkC14HBwRyCEPKW5MmJP4iM1Q8VMAzWOd3J0x23BLYUEVHNkiG2MWZJarfbCEb0QyiZvZ6YiVeIU74vedw5OBesMlOPaksMaPJAcHjqHlCJhWG1F7Wnadqx%2FWlg1F9B2JIgBc%2BGoP4gAnDAjkE4sU3IN7e3u3WhF0%2BICCRIAtI7TupVcFFx725uBwICyNqZwK0XnMsnujNFLfPdJxDjOJ3uOmG1N1t6jKJ7bRXAWH1G04dktxaYQZKeWuMgtuHuFpoZOhuVFmaslI4i6POYnK0ejDC9mAQxSs4bRZHcWyBcHIc%2FCj%2BFGT6pdvfjfEmIXviz3ONn8UQtmLiKFnvIjQyhomvohmEf3unWeoPawbL87xcRsYbFD306ON0EtYVVge5DtbxoD99%2F0TJtc9WW8NQzy1FiyY9X83%2BPcuj8zBgN%2FtDCF2c4EyWLTW5lvA7Am%2FZskTjGxw2fFIpdq%2FO6vQONX3Fq3zhM67xoEW%2F3O1xgQh567L6csP3zughTVx9oE6%2FbrTLhcML6%2F5MMGOqUBDok1T8%2FC3%2FEKGc7DLcJY4Ll1xaw%2BE3jEbmbTWDMl5sRtvR5Z%2BV6HPrkrKMbj4%2FoxBxizKYd4oKqbis9YC2B%2BxNZBxQEU5TTXGsvwL3yr5fYGZ0f5siBIw4D6%2BFE7rn14h0TU95oNVgkyPlvXIyzfEWtPBN%2FLDZCJzoSAJKCFcMvt403Sg7p5JgJKsZ0R%2BWmAxgFLF%2Fi6Gt4%2BW6BEiTUcl%2BleAgqL&X-Amz-Signature=7768a699b18f20adcacb7e5a807d9d9198572bd9920c77a8a37c03e5306ae052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEZE4NO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIC75QegE7VJDyC34cQeVPa%2FXhbhVFd1DJm%2FXbl09EKyoAiEAzT34PtiB%2FDOxqq5EckfTwHDgoXrqp6H%2BPHaMiolkgckq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDObPOn%2BAE4GbJJjKTCrcA7kBP1AYddplS88N9ljkWg%2Fv3e4LMP1jUMFt6RFlaFBq6RFE7xwou8f2xykb2pOQKsB9mXZN5t0qgw%2FTGCNElVUMocCEJ%2BLU1drI5IffBNs6F9wHs8PpoEGUfS0zOC6EFFR52fygUX4k93qDoD0Ye2FKlx6b9DH0j8KLCZQLgZvlCcpo253yndB6slolU8lmtT6tTMfhv26uWs4CNJmS%2FYTxNg%2Fgh9MdDg6xdO1xPjo0kiFsaAE%2BZdGiMv2osOfpcU5Q7fSW50SNrlwDm0F6lHjL9mUryFIfRRQw8uG9Aybph%2BEE3UK0kG%2F21yYJcwGqAMsz4k1XPAFStuIgvz%2FaSw6yuApgj8OCNbmBWKdHVmzwLhUHL8nhGIl1Dlgatr7tZIdnfqB3WERXPc0%2FaZg3Yo9WGoAX7a5SssTH0VYVmEfDbHI97EjyWFf3%2Ff5uhuW36AAw3K4hW65r9GtGPAWHyCxj0MJYyBztQdqgqttFKsdrDfYT8cS%2FCAYWpWS7K7WYCzkf7B0xkTleyUVXX5jRWT78Tp2zMxtMC963F9fdVLrvWAGNpLTm%2BwrrMJIbyrZqKGRUUK%2FAyfbJyoYToP86EvhzzVLZuqRv8476tXRbyqTnNxgK4fHJSxtB3CJWMLi%2F5MMGOqUB5GGCWTEErRbTuajmNxD%2BqSUtVwvzKA%2F7kKhmD2%2B2wgCQShdk2%2FbWsQFMVFG%2B7Uwd3B28O6PF%2BUBgyCKK6uNsXYFS5g%2FrQ3TnNoozoQFOp4uOf88V2%2F0CJIZJ1O7XXA1dVZnFlPn%2BwSbPxWhADDkuZiklhaK2SzudqgVF5Pggh%2FwtIzW%2BsjQrzvpV2sVVVjuitcfG%2Fv5hdR9E6sBiWlRr57%2Fc0XXB&X-Amz-Signature=1c5187fa6e5e07fe649af4ccef4d3ef67ac0912f68cd8d6e11adb63c2473f9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
