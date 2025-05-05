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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFNDQ5N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3v%2FOU0nhemAxIaLkgPKSg%2BbcCE0CcH0SpgvpVLWVbaAIgUac8FEM4mxDgyeaEx0Frnp93uyenOkMuHYlEWA0Jc2sq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIA0Qb%2F9Nh4k7lZa1SrcA0JJIJZ%2ByK3KAaWSvz2v9Zc7Z3Oeia590Li2ds4mR4mCXsOIxXa1DiJaktw8DwFMlJ0cr9eIye3pTDG%2FuOg8fFR2xr6t1Ola0v0ogy0E6EMMVcXAr1eD38Ha4dXRK9vakJsH5sRlQLB3wPkWf3cYIftfGz%2Bk2W5rutq7FtjcmIlf7eIo31mleth32Y8UIQmbnqAYhzeVs%2FXeIzs5CxrAfZ4a1yftEx89V%2FLa%2BtAMDIZWrLGVdVCM%2B7%2B7OfUCpgLwwwxN16tsLhN1Riea55eJ8bkMp%2BWs3pdO8GA58ZpiOzQZrZyVoQf32udXoUc6S9t4kNjqutT8Z2C3Bd5qsKNhyHQxz%2FO10NgAP0vsK3r4VgEvoEUSXkO%2FUNp912Gg9fvfUfL5Dfw%2Fvd3Iz98cEQBfQlCRwIzWUi1%2BybdvzO5HybjwtPbx3tw9tPgkChrGZu9UVdJSbgsgaLEYXcGo1iAJ%2Bm4CFv%2FiP%2FCQRyG1csgVm4rTwsKM9NISNlQQQL%2FZhJx70XRdJH09QZugeLbqTibSEXui6SHq3mFWCGk%2BAQ2aI%2BL4LFARMgtNTj5CF27Qn9tdVlEl9BQRc0n4OGzxSTAWLr0ndLlRCFaqc78rwJtONqvlOCrXS1ekhl404PjfMKjP4cAGOqUBr6e7ty%2Bs9sj21fdxayKlTnwrFTw0f2gaiO7WzYI9MmnizPBtmGdXUOfNL9pCOB7svXSF0AV%2FRIpzPcOvbu9hiLu9WdDUSYiVt%2F1rlsdCrdHdgBNe7t4wBin7GzkF3H1evJtAegu9TtK8ibgjTv%2FNN2ngra1EUel7JGhhKfL35FVYeeub%2Bu0rxR7UdE3Ttf7vTDPJWVGnqcJrPErkwT%2FyEXqp2jH2&X-Amz-Signature=25f9b599c5e86f0f355301f7a2a1ed0146b9bff8b5faef1eeac6cbffdf9f24e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRIEIHY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDScWK74yfXcMPjF3sSAqGMuCzNCKnZUFfafjHT4jQT3QIhAIidBGAS4PIjszpP6FqFxGivNeACwkFz2XITyieAcnCSKv8DCCkQABoMNjM3NDIzMTgzODA1IgwqXM84X%2F0GZ6xZhfwq3AOeL9rb1km2Gl%2FlbrsBfyEXlm%2FY789%2FEt9G8aFujyB48EPgKvMrGW8DusMScNvX91EeItxOOPivPKGScoO8lIdOyuw6AhPLr%2F6fd3w6Myjqcc%2BOQG6gVG6TMFRrJG5PMXvOowr83zpJ7Bd7S1lJcX9gcwOPakavHBJkXc1FDu6R%2FiF%2BBa5Qbpzwrt53rIRWnLYxdzT%2FJhBgo8wLpYlR5ZVCKaHebOYp7dUKgJh3%2BV%2FsDen8KWZ8JBvg9bgetD7n5Ykd9wGXK4mAqjpKhn%2Fg8wmNn4ve0JRNzfSaalsTY4CChRwwmmUKqmfIxmIWlQFzxbEYR3sxemVdDTHSwyhgLcrtb%2BflrygvLo3vzW0yqLIU590jmNL9Y0m6dOFTlwEsLF6mRqSOfORlsAARjuobQzGkAEkOgNbHQ7btu%2BHC23VytH6aJVbs%2FPvfQfuMTJvOqRJ%2FmrQn%2F1kQs9jb50aCu3SP9tMo8ttQz4cC8L48B3GGvD%2BDsWc7gsBxNwbpYo%2Fnx7ScUqRxHNa25UHkjdny3W4k50ovykH7TFNm6stBdML2u2GLCps2VRK3gGYuk7fumaPavlybsKoo%2FWyn89d1%2FMBkl8SFalVLoA45X5d1jX9CHOIO8VdTCaLjCPvbaTC%2Fz%2BHABjqkAUJ%2F38NCc8AXUfCowskv1GfbUk%2Fm%2BY04xMts%2BE4Oabr8MNEVCWBkqIYI%2FtOWBDs079sCzOGYjj8zBtli1jOOVAlhKcJrUTxRcDXoqvDuWw%2FmTx2YNOCeDISgzcva29cIGAVWb7v430S4yuEenxt%2BNoJIq6mlv%2FB2FCN4qIGvzrBZfa5tt9a68PHuSHqii1kqYzb87ZksHeOH2Mr7G6EaCoV7%2BTXH&X-Amz-Signature=dd027412b682b1e8856f0176b0126412c46c3b0a0910adea8162196c6387ab85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
