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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBWBEOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOrxU%2Brd2G0fn3Xd33uaf1g8Pxx1J4KsUsiHz%2Bf%2BRi%2BAiAvXYkqTIQ2p%2F4zGE4yeVPEoSDf%2FlJxvoSFQk0EhHFG7CqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbT97GjO05dPmvsc%2BKtwDVKtFotvMPts3MiQS7szPRT1%2FL6is8%2FZEtuVswrEfkAwb9dSjfOVB4kyShYmUo%2Fkrv%2FkNIFzHntvxeM3tgr8Us3W0sE76E3smQjTSLbHtWaqdAjAqIoYjd%2BgUeNvfH39Y4MzyUff6hIbE%2BKVF4AsMKSC7cXMSlSfZgFMDf0eIFROXVW5O%2Ba1mNSt3TfRlt%2FxbwoduEQa4e8sOtKPkWegWVXtyUxYbbhuCx8QvOKsUGQjaVHacHTr8jIcGypZrCo%2B6zdpaVTL4XT%2BAjhvif7FQNvTIWeMh%2FSd3noxXl8SrH3HFGeF%2FcXAz9HFsLk6E%2BIluJmVwuR5pdH1yM9oh4f%2B%2BMAnz0EV7Tl9GdqlS2EnJ%2FxiJI32Fl%2Bi6n%2BbUFseqJK4TA7sYRzJxcviYEvY2w6Gt7vB5XP78THHdlPKVUSLBBIrw%2Bqtnxmgd%2BmA%2BZEC3L5OwJDUVKN%2B9TEbrHo9NzCi5mGglPytM9ONjNo1c2MMAq5nizFwB1CL35w3dGZ1PiaGQlcmb8LqYq%2B23QSqjdZHAkjFM2jRGztipUGpqhpvLcTJcwlLnLrZeZxJEjjjIZyyaXfl4gSZHqi%2BxZ%2Bz34GhHtFZAhx8uiiToNqwWNWLTZXQsIvAFo1KwGXZ%2B%2F1Mwkq21xAY6pgHN7naMRsg7A1b00szAKiZvDphFJF9hJRV8ca59PC9SzQP2flCQ9BFy%2FRfVUoloKGPz1vj5iNQ7x1vQuLlwGNl5KpcCW3BiyLnRgzq%2BCO0WN4p6TFwb%2FOfni2dait28rUiQvyJ6h3ttdmYBI1FTSy8YBupDyNp3j7CAgYvLlCvIeW9qkaOvRb50grYCg1QyrrXSxLIyXLJSzQ%2BUD0FoR14q1LGkNtPj&X-Amz-Signature=f4f92588a70a6e17b677e3f87848e01521c42133f50c6f95a37007d3c46164b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGQRWFX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrck%2FYJ0FRq4yZgzoPEsGH0agoKG1mJSOrlS3xwuv9PwIgURFSQPVO8%2BvoM3wrayPWW%2BlpXLttBMxVHnyYKOloc7gqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BHDajyR9hBOMVPsSrcAwhZcOyY%2Bq3XTdfJAdhH3wAUrK%2Fiyl%2FP5Z0LBjqhL9QNmcPbt6ZggXuMMBrM%2Fr%2B3jiFkD7tjurD7UgpUWejCUjlwAPvOOxPt8%2Ft0NTA%2BpxWTqM9uDFrPCNpspUl4J%2FjXH7yeZ22mjbojnBjj7nGnugpP0daPBBxB14I2H4jYR1p7P6LEHppLjwYlA1eKBG4RPYneYayzS6ZCbZEB51IVUWDnVsHnRs%2BJho8J%2Fav4MGwOwunCXCZH7khxdyVmX0Ba%2FYQWeMRRAVAQAcPhEs1u6Pn%2B%2F9NIeNmi1I0sFk4d8lw3I%2FMOY%2BCIx3lshg%2BD3UUwRgfMCp52oCvigD%2BnY7XBFiMHTCz0kbJEcl0DwTCfHnaWVpJTifIp9aZwPwcfs1KDjJnf9P79Q7dgzwYIjZWat0sI%2FMNwyiSGf2sbMbP6RZT1BPeuZ%2BtqAdUOY22qSrtvnQshWtejzJXHz%2Bd6Wj8TAJdJZylKjmftqVw3p2OomsocgtyZVIcma7AaaaCVpmWybtxKnORETRM1brxbjGBxdF4%2FF0lqLsTkq%2BH%2B4LpHcCD6xz8giclGkytdOp9sbCeietGw3aA5YRifaqSHwOimGaEBNvPdWcLjtRN32DGTSOdxLHuWnE8c8ni9ZHjPMPSttcQGOqUBLRniVzSZtHxvcKqdY%2FaXJg4dTsbdTHMW4JdIrmFSodRn9QTqoP94r4mLuRdpm5N9BMdPI1xbq3NpMRnPc%2BZnWaypneL80Tt3Sb9OxO8P325FIF0XOoPfs%2B%2BoBd3VzRXRYrFrazMkGAGwld8VLtfIzyUlhUOOdoWdzg%2BC%2BYb6HlJ7tCgk1Nf25o2cPQ%2B%2B8m3NHNmGSncuPVH2HBHPGcdEwGjNidFG&X-Amz-Signature=948ccf9e714d87da9a94ae99dcd81084dd11c2cd2502dbb77dc603181e3223a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
