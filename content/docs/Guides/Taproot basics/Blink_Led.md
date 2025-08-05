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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKI2GYF2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCLJNoNc9x2Ard0zZpHrDxX6IYXAhnw%2B56rjYEI1OwHrwIhANyyRjcIe5SgryeLt6LNc3My1wWxLjagLmo1%2F301PJmtKv8DCFUQABoMNjM3NDIzMTgzODA1IgxSn3GAKj%2BFvE%2F%2BZAwq3APQq4%2FQESJYqPUrscO4%2Fu7yxlO18SSbx%2BJea1%2BJKPRVM0aWoDQJ%2FEzn3gV6QVsv54Mnhpqq0UFA9MiNeHPxrCwaQjgKNpiIUiPNJogIQvA8XwgNIDwisuGrhQCfelPHSwwfrhzdmIdGjOSDBBBox6UhrCaxd5BVgU5ejee9OuRbPgp4qzFMZyVlhJV4fEsBFcYOohAVepdbgrFFZ62SYO4QgfQHP3m1O0e75iqB%2Bt8dB1kTDw8aFNdysVoQa0iLyRVRgQ6oTVCHOliI4w7D%2BCkbNedjdykMM2plS1QQTV59ud7lm4hqjuWRyjyJE%2F%2Big0VF698%2BemLFXNXdBLyKbiTvvGFKi%2FQEdej9LP3dg8KrnWT282TCA83pbul3oKExaRfy4EAfP2bhjZACkPvOVfL%2FXFH05aqlX2lbueGsTgis6Nod1rybM4oSbOmvxqLBsIXuc0ET8izLHwDTuuLTKz57tNv7w%2B7TeGuc2plmENl3qikc2AoIAWfYN4mnFDwR1M260dljrljVYjIQ36fg43%2B7OT2G8JG13l0ijv43qrZilIxkEG0VR1jreWMcqcoNtG7G3JAfTl7FwnqEGItvoYf9%2BOp8QhJGlb4xAn1iiIgyy5%2F1Ud1tbCGxaxrL%2BjC1jMbEBjqkASI6HIJ8uuLrdCTHGBRN3HqkKi8fK%2FfEK2NSZ5Z1cz08hdjcjv0UJ0arhxZ9Tkd41pw3%2B4pd1p2V5jiFYDEYBzyuVMnLHBA6dzADeeyj2AlC1oNzQMx2ZEdpnXu77loCSerKpHiJE7bMWE5C4s5Vk9lD3s2ZM4QWucPVY6ZwbCM9B9klgfOp%2BGmKnuKQ3h3bLfGE%2BCQ4GPDLiAlFTFDw273BozgC&X-Amz-Signature=f89476f069784d7c505b18340ef60064e46bb5bc046b662548435dcf873b3b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWKTQKKN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIBEZn3o138SBpAslWtl9a5wvf00aD8y4UVnNQStRlAePAiBDfD7yKBM4jQcIdOrbYsubpRfe5Q1FIGJebQYR6i1Dayr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOWLdbqTA7d1WbP9qKtwDpSIbm%2BgQ5KP9H7gpJMktYx6i2w7VsCmlvQNPUvye9EbSz74cC9EJBAm34qXiDu0YJxo26r79NRwut4N%2BpduuIcT%2FqokLGfzwfH2sFJGhJL77TZZthgOvReYcENMoxSJf6QaRzsKEsXMe1KNJkFv%2Bs3WGYwsW3E77%2B1DFY2IpwGDI1t1xUz%2FASr2Pk%2FrhBDeMHFX0KvvVfpNv2z7WhGx4jLRCL6Dr%2BNorYnPa0mFW5ICIoyS46vBHEhhtAACYugg%2Bcu8C6N5NSplASeE9lQlT1sE596CzEEBfSLOmOD%2FU9YGuJGofPLaRVID2hP8WqUvfAtKE0ca1QtniDy%2B2meForg1v%2FrC4A3jWc2w0yfAq4jNxCO%2B38X1dPfC%2FtaJQoxWEiLP8ZhVbMAr42zAysa8LS3BYiSxPnyU8w4nLeshPx92A7HZEIWA95B1raqE3BTIkU3mXpZvO0hwgRBHgCCT5JgHUBklP2Pbm8SKZWNBUCP2eqKxqnM7VyM4lUoexcVk4Y4ozzNrBih6AylRKQEbJnGhW7RbEyEODIg59CzI3BZEH53JvXz3cm409IQHTesd4h1ycwBg66vxnqlOoe4vdE8Ya7xh%2BtMb%2BwMTXXKwIdATzcr5Tr1W5RJedNJkw54zGxAY6pgELr76hK2KhfFIxEfpvAor8lI1KdVD%2BQpiQbRzf9%2F%2FecFodErQ%2BeAIbpJ2SOJt6Xy8gkjqZfTK2aA5nPiqJsJszgzG8%2BI36rEig5RghjTDyaHOd7lS%2BHwNp2jK0CH7WW9rjA0JHefDNYuzEMirxz%2FOFxnMxbTYJrQz5WmdCkzQ5qPhg%2Bmu3cQFbwmD%2Bhnnm9PeOaHEndWJzC%2F6WDVgyXbSihrx8rMmH&X-Amz-Signature=d32c097bf68ccbebb6f13aa7a16b58c9555c2af371544f799170b92df6ac03d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
