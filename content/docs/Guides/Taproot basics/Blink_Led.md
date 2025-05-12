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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBDJU4J%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD7iMM%2FvploS3VaTK05pnjTtkJif4bhqyneYSYtKOLZ1wIgF0f4cyeTtAQrkirmzKsm3pguYqDIatgHfB8FlEplqyMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGSWVsUmMIR1tv3NircA2Vs2CPIaRGLQiLlMAqf81dyUibs5DdzY2Y%2B4C6QK4lXoV%2FE1eqyeTeqyVMesq8dJzUj6Hu2JIPoBX1Q4IqMq47EafdkREV8Kmtp8%2BG9vB0RqMZ0o4%2BqsSe52YWCPXuxEHyuMNZ%2BbtRssYYvHRwQ88DGAOeMxvffAlLbefWCrvq0SDx0Ir9uS0aQXMSALFk0xLiMZg5CvF%2FcIpR%2Bid%2FJcQtipefYk4F46SMCe%2Btlltf9kM4%2F573fHrZQG5GpkVXbxgarGVSgyzcnb9D3qcLFDKNbCbHyzY%2FVpEqWyZO7b%2BTuI32NRqLia03lL8bCt60S2NaNuCWW612c0AhAgr2%2F3TlV6BQiq0caepPRE0TuIor4IDV4elPvv02BGmcmFL85gFvSuw4FhOULKyCWZflmxTgXExJOCg9ZqLZ4j6%2B%2BeDu4QLEojOjEm4kx82I4EMsZF%2Bi5MEsfOlx%2FOktnvHyMI%2B9AuBgpZ25Yfayxqmsh92dqkiFRNEzkGnZhHIbgGbKwVCNC2fvF5ZtG0xSM8AWxUfOnEPW0k6tOfrKNJhYX3Kg93FgLeB0k1MpGrfcLPZ4PRcYKLIMqchk9iRgzGWBJL25gkVBHqQSCcoRcgOAjwFFHHuEmwYhO56ooOJ6RMJPPhsEGOqUBNw0PzJ5CujdsF0C6gOLi88h%2F%2B4O8LjweREF9mO9wk%2Ff79xK67xH61eUO%2Friil%2FDJY5Dy%2Fze3CPrXySJNC8zBYEI%2FPvqKzVJxWi3edNNhVUnJQHFAqF7lv6N%2BSeEcA%2BSPhn%2Fx%2BCRHPiDYOGWaBT%2B0b%2BqPztjuQrt0SpDe2e%2BvipjjkyzKdG7e1Tox5eO63rhnBUtt3jkLZ7LbkO1rERLx6zQuOcwP&X-Amz-Signature=29c799d29feb12b1ec047f1f753cb179ca7d92af581bc6ca17ca1d6df9545e60&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL3ZHNSJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCpriIy7Y0AQj4bgY8d7MYoWQZaTgKFfPrTR8ZoWdI5uQIhAKg7zdezkJdFzIu1H4WKb%2FW68Q%2FGNGaAQ3EHHw%2BNXJ1%2BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0iJB6hB54S6ZxZ%2Fgq3ANK%2FRBiOfZFtPiAE9CG1WTfQtSKZbxh0K6pWxIKG%2FvSIAU7Di22EchOLaMRFk8maauky5T%2FTGSUDdxQgllmgi8hww%2B53YtehN43AvEXRxj1PqmwpnouFhHITTCzIvYMWdXATi8n8DHmpUlBbfFM1YYDkhN8O9NC6Mi%2FQvGhdZA2r6itrV6iV%2BCwRSa68CVu5a%2BNbc5jEl0RTyhfSoBRetqkqXO40rKKaKKaIob%2FN3T%2BDeRd9Ydf%2FyE%2BaQLPXx1xOlRVVZNjfiu3EBJ0oZmlOFHbEpTtEwYluwz%2BhNDTKrfeX%2FlDgKDfuCPmET147zH%2BEGJbCw0oq6csWxjS7TM0ON%2BOu%2FQIlug95iKFHXp7MW1CwkFGGblXu6aSYrVX1oRbcmJUidRtZTmN6aHGEp39dJdHeLuyRQNv1Y0QfTet3EMJGsEVqgQVzkJywvRUz9qwkPPRFQ8ZXrR%2FfbtdWouPiVShr%2F9eUirCef2Ja1h7n04Ha1tEPAVitROi8rCVnEBWD1khxaiQmVFiYpey1xB3sk5L2lNA8x2ZoLriKWBhLrIoj%2BbjWEESDo1KUw4vXcFY5XTNPfaZvvZTw%2FlhCMelm8C9Dv6osgN1VZCTwG9bIAdbQO8ipnDVw2drFkN7hTDXz4bBBjqkAcR6vf%2BA5NRI%2BnHRK1ZNhipIjJ4ii%2BIWHPVQlgtxkAWGjhZwYaq5LeQZEQqeM%2Bfp3Hv9C4ccMxi2KoVLERlgHVu6OZzoZF6ydNcL4aR4Aqi4Tb%2FcsNvhe0NWlcXQjoytYN0dswlvvVOiDleESZeNsocXjLyezZ2uWjBk0OXp5Hfl9fnWZxXtf5Fvu9cXYNDAvVN7jsbwEkFuMBdWJ1aQ3uzqWg9e&X-Amz-Signature=491611162836aa2f790d42dea9700d486e80fd356a58d523417766038fdf5d98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
