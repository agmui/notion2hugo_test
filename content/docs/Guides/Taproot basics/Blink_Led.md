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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4XRMAZT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BIkBjCd3TdaYlPg9pE%2Bt70iHiRYeifrNFipblWTnsVAiEAy%2F795hHi5jTJD%2FiYM8T5mng8aTkolzkTGnCMwatVkNAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5nDdUvgPIUJhkKPircA30C1fqllhykZbDM1fRSTDti2o%2Fiv2PvA3NqVd%2BnerafgnNS9ddiOywkIto%2BiAvqiEn5Tf%2B95%2BMcxjoeQoozDG%2BqXZra0BJwhx9J7icTa8BZ1zQRAnUxgttOBLpR22CEQ64N7RBzD9iExUf28xZZMCsTYuFKzZRFezp%2FjQ7M0ZLVyfRbpU5%2BYdjBQG37SM03a7oZSfwlF2lsflhPRN5CjeKtaudVmHv6%2BdplF1%2BScoas%2F4Yr7YvCP07gEQOlzSS6Kki%2FOd0L0rUW4jJjEqcS4vyl86yt3zdlBmcSG5L3vnMBZzV7yPVyLa7PX%2FwLcJCh3Wt%2F7ToC1%2FpdWpxCim4ijJcUNMqmkXL7A8g1CR8pU7rJDC%2BhprgVsp5HAj9I%2BKrZhZEcZArB4rh6O0xnScgrAfOEeHUyuWvo81XHbKT%2BC7Po7gxnLFxM27EyBOgRe705bC%2BCGp3JzNHBSpbcfJl1T3hBKyQByELadhs9RSSqwOJV%2Bt7CQ2sSt0r%2FaXfoi01VATvhlGVfL6cy6DoYYfScvjV%2F9X%2F%2FOYf6NeMKTrOOCz1GrX%2Bf1wtjIyP6vx6nEmL2FrWHID7Lj9HmmguSFcCdJNZCNQO%2B7lcFPpZaGHPHVKHv%2BjQyB8s6DmHY5GRXMKK7lMMGOqUBl0jjDeuaLuwet6cI5Ke8%2FOK6SBriDKjZBmkdI6n0llnhsgWoYprgtqgLxX7X%2BsShKhEgUGzPzju9fwf8OsxDn62TmHoykYCiCPSZOkM1XmnaKDMPb8yHO9DHyfaWacuEpcVw%2FxN5M1KvUvd6hGculC8uzqYJ%2Bb1Ak0gZgwFOTjdl8XyREfuLNXqroqCiODg3CK0tnTMljuGIXWf%2ByTAhzIWLw9Q9&X-Amz-Signature=9a81f422b3e7ca0180f77d06309f95dfd7a5aa1199444c1bf8f95d3911fbeb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBGH5JZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BIEeClRUfhl3u%2F50pcnj4NnAnWR8kzfweM0QFJbdyIwIhANC%2B6ALKkyHGTNXu9qqxdLgmmfV0QwlghSqvqBlQPDiXKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDeVPIbqreIp%2Brvjoq3APbsRyZWZG5EN6BH0T7KFR0ROvbaRetF%2FreMBmqMW%2FoitSOjD%2BJda5A%2FiS8WPf6sASy%2BGKM%2F1geaShN3%2F27jQXATFoKSWSGLqJY3iZN9zrFxMvTCZzZr8K%2FZxuhhydFfrxF9ZOlnaxMRJVwWDy7O6dUS1cZ%2BcpH%2FNBEYj9WT0XdWTZfVkCGV1fYT%2BO7UPcao4j96amAXDCosSfrANCnV8SH4DBl51k%2Bf8%2Fua2FKCssFbpXBiUZgVYnncXCjrmd1yMTzgakpNRFxDulmuyyo5Vw7%2FHQwcu89JwDpppxae5Pwh%2ByIpd2p5DMkJopq5hUM6wO%2FC6140c0bZn7hsBAWK%2FBI%2BdTGYju5oDAOfkApouG9zDlj%2B6eL%2ByZdJ9MNgKKXS40K7oNCb%2FuRzEv2JZmKH6eKdfiTeCGauUoCxcpNxIOOKqLWje7tIhvoQdEPuuFAIKWmaEJh9kRTzQ3bTe0HAGTvjWTKyYpxf9smN6yfQ7Isl%2BHwUK%2B%2BWaquLG2AEtesrzli6yUu10bsGDsYsl0yXc1ZHM1hCAMm9NSWzc3OdxKnBl%2FoZXcNAosZm%2B41VGjmbUAwGNqTGpWZsEfGeZXU6qvsUhzESdNngP7V%2BVH9F9V5LiaKyTUEUrdvTna95jDtupTDBjqkAQwEcNpy3EnA4Of6B7VSMxcVr1wNQq1W2Vfp%2FBp3Vkl4cVbfeIcVjYA4aoyyZD8kmRsVAf554oplkqfUdgj7q3Z1xluPsCwIfa9CQdCsZraAC4ku%2FwBV4SDORFgG1xnVxv%2FXKhU3E1EMiouifoKifEZ1LYfJHXfFLFaXqvC5sLmitp0JwUK10mY99KdYrAdPNvMm1f%2FM4KlyxsB6LP3ljxMgL6ha&X-Amz-Signature=e4585118e73daeff128e18fe618d06b5f68e5ebb426438028f66262e1ea2e2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
