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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAJHC62%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDY%2BOQS6I2DDfEv6pPa5d0wKXFL8VmKPrqECnY6fImMQAIhAJFIsi%2FL053wCEJLq%2Fceohl4vxVT1%2Beq8Lh7DhgaQ7GqKv8DCEYQABoMNjM3NDIzMTgzODA1IgyF8JaUD92%2B%2F8J2g4Yq3AOdwwFChQ5iOq9rSJ9q5%2BC333IR3omr0PNd%2FfbDbdXs1H1C5tbB4s5g9ysM1jwyhJ1TQEWkIv%2FXRvX7DjOOmN6NSoRsb6lapc37vlbLlsZGGzU57XduA%2ByHwMzXaD2oxs74rR6vfoIyf3ax9nmtZ%2FgV9lF%2BYe9f%2BPTpLs6WD26NnkYo5ze5%2BtknkusgUxW1kboqZFofnHfKesVe9dL2EexGujEZUPx5uPsX9oKO30AYqA0usSua2XQ3ucIKGKihB0Sv3nn42Y5YhfPrz%2FiTzw6MLAIIC7BNGBnK2qmLNKzyzLNJjgoIx5y5Pi19%2FLHY%2FmScAtBXjwL5mC8%2FNEwsVfxwV8VTCnAk1ptF4WlxqDmyNOFz0KOh75ybFHFaunABoJcmuSBXkN7SW08LDSEnjG3%2FGiIjOW%2F7Tl02LVqIUpGXMZ98zV19qwdGxayMpKBf4nzj4t3DlIVm2SLKJRMa4be7QKC6SUwORRgKcR3En3Vg8YoYNkAvzXL2y7FkplhOeaoOZFWuTMw5BDyzkaqMWXIl57p9aZJLGwYaTKsBhYEwupdakesGODUkJ%2BTXf6DRNv4kWY%2BcFS20pag7msK5uX5%2B3z5XVjIB%2FiQw5rroEg86EvA6H4s5NUPVhuof1jCNzKTDBjqkAWRxSa3LnVFymXG65oK6hYMuP1CseX9TOeVfRI1HopGezAAYBmixwX5JlcrGH%2B5dz%2B31JOKMZ8W5U3lYXyv8Rsg9xA4jpEP%2BDH44XgjE2z%2FDg87%2B94QT4INg9i%2FX27GTcyh3xH%2FnaVg0N%2Fik9%2FpAxwVeORh0%2B3Fd96bG2TOpm9XgSPs87Bu769WeOlzkdJ5xo2RNlg5Us9kpabDyryWZTDXtWUmO&X-Amz-Signature=e9333d40e5c55f8aa2856760be212ac389cdbd2661471c2f9d6713d07b1c67df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQA42AI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCu2Aoi7L%2FHkye8bC2BrBPy%2BW8mXJo1zaK8Rs5%2Fv%2FWudgIhAOvZ0A9bom5M5a9LDKQ0M4zsOFO3IRlSVZS6f2F27tTMKv8DCEcQABoMNjM3NDIzMTgzODA1IgxAIoY2rUnPdfNfc%2Boq3AOVAPD6HTSxT6mEK8UZhVr2fEDIdRS4Pu%2BNjVGKShBU9bg9NN%2Bl8k3GNky0mvZKAruucB9E1lPXiyij9a8xmSpuxTkAcyBKSw3MNNsPnShAXE2WPDv66cEeIfxVWeOpCwCe6m4zyrxmpoLwo64hMYQVuUy0VJQVqIgH7Oxyk3HI4xFZUKBEuG7ugFY4GaPhn%2F5GkZLTd9XYrPWPR%2FQoWZc8goACubJJa2pDxwKG3jTvTW8g7N0J5%2Bv4pbuoSyEAVxdXoQIFjQR7RJHIUjluYGo2ha2NENT20ByZcn0VRMaBQWJ%2BLKxJH87eVHN7V1OwWDq3bqBgF2qsUL0GfZSbFVifPGasxGujlKu8tniOu%2BknFsf3cXv%2Bcaw10WyePE5e3s002QJOzizNTlvG1DMHs9c0cHRL4WGwS3N1esGxB7%2F%2F%2BBzsmJ20tNkTuFbbX%2BLccR23I2U7QYYVJvjOFUxO266qrIwylEMlD6d3Q0sMsdbGY6vdJ30XwSUaz1wnYrzYUuJDp5OOoYQPOxk9tcpG12E8BeSdCCtJEy52iDfr%2Fbft3uFfdKRi8IRbgCPWSZQBw3A511ARq5NahcXjFxjU6cBFaXhYc%2BnRWCmTZxyEeBtXeasBJnpmqZZKmLc7KTDI06TDBjqkAaXKEAyVpC9H6vbQov1LOCMtTfBhWvk5KwLmSdIHQNTIk%2FMMRv66zFDxAdgFgAmsvstM5fKiqE98E8qz4Up3jI%2BTE5C7Jmv0tX1GMPrMUBJzcfiKCg1qltfsR4G2xJ8jPh6Gn0b9bpLaE0v2d%2B6k1xLTfDA4FtKsmOKQkSbkIf%2Fu4aVjRBX0usx7uFEyydxjpOyG2UDsYknhbWO8EOa4x90vAvSK&X-Amz-Signature=8683e376a4047169beb75dd9746a53993da875a6025edce1c25ea56430378e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
