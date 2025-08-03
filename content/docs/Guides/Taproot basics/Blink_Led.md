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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GM5NZNE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCULy4crvBLP2Ebvky1rkrJhjjkzPz8Dz6wDi4GsihCyAIgCkUTBxe1Kr7Ola2G376ZSC1%2BzHiZxqSuNnD4YBa9dzYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE1PFCur0wyi9jgVEircAzdm7PxIqgiwgaHlWeNFSTkWZ72t6T%2Buao9B0HcSbisu9V1dGqc54G1tqCo9MtsNwzdU111RG9ILPSSFKBoAwLeBz3iYpk06PqdJslSgtEMpFrFOWOAqtBJcucx1JAvP7rJEzS1fCCd7wl1xtDUKHdiFSL1OfPWVHPylpYj0NH7e55lRZQ1bnyAni24%2Fi3FYFchvwjFyTafsQdwUuOP7YakYwETf2iTXV8Pdj%2B5MWQ6GZFz0srfiVvxalMy5RtDfigUJAP8ywC6ZVckrRm7X%2BGJ64e%2F2O4d5j9oXm4%2B1rbRGeflSMjsUGAFIA5XhO%2BZ6QIvwIcFR32Cz1Y9l8y62tqWvVn%2BgN8Fh1G3cJAJI4Zhy5Sjps5lZC5npUM0deUu%2BGZ%2BT3o%2FBFQwQEH4g9Ve4cimXCJUiwb%2FggHXedSd6MKnvCIBJsHOFCAdtCgYL%2FmhS7VY6Dp9AmRAD1Yt8V5eHlbMV1mFsSz9qhgP5jcSGwdcYhYW8NzvMCqJCUuibopyHbxDQSskJxkDpIKxN0Nr6E4OrPdxLS3NC0wFAra4%2B%2F1RvOL9HRFfD2TO7GC6HbPz9W7FMEtZsoucb1USj3psFoTvhmAiDTu83BuV8FFtnH0q95gzxg1Uo7L88nbogMPjAvMQGOqUB%2BmE2PSEX7jfWCHVfQQN8k8kGdNcsraP8UgGZ2Ku6mx%2FE3rbpRvBrWDtl1C5ULzMd%2FUXsQekWWYaWPcwxlcYvEByj9w3zAum%2BG7j0jEoLaMwkDc9pFRbANXEgw87ycebYHa%2F0yJywWkY%2BzQ3xs1Eyc1SMhuS1N%2BMtId1AHiUvOgw79SS2UEEVeSJBZt18%2BTAYWl7RZgGg%2BytI%2BLNC7ZHP3d53M%2BiV&X-Amz-Signature=dce7a6e272a12a26098c7f418cc342187c629c218c8cf5da2678a993557a7bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKYQUFP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOxDOLiUUy459%2BVnfR6En1cbOR%2FCerAPdJYWekj4Ym0gIhAMlYkw5JL0TbH%2FilQnrZJ0Vxq6GYE9%2FqFqLHeKcTrHkJKv8DCCoQABoMNjM3NDIzMTgzODA1IgwN8yIQC51CDTO9c7Yq3APNwxWF7hl8ukU7aLtp7gn154zh3Q53q%2FGA4c%2FkGjNZg7Yc%2BDmEWUpbnEMvctncXtJwGxMCMbGiHODNXnoDGSnPeCdPjcD4GNNtjIZz%2BUKEtdHOtqb227gIJ4Plk7Rv7Q03rIScgY6yfmlGEdMyJwrSItz8mJqXcHEZdad35oY0oH4QoT%2F01%2BDjEIn0VsS4cSIN2hvbGlM85R3r6ftlJ7hozmvC2ppczrRUuN%2BTR76VySDzXTkZVmeqVugFyr2aJ5QaPvlWWa4esyoh%2FGkiwLhljP7Ylltm69QHc9oP1TGkUB5Usb8t9nQ00KfDMHAkaZyox9XxQeUiCCd6i6Apu8I%2FH06I1h0xeIhHUZxO6XEyjHUWnng00%2FM41bI%2BbYxruoSu0h5yFSliRYGkfQ7qx%2BbHQehCkv5%2FxuV21tPlVFuB2S1V5LOhfebWVKMXbE%2FQbIfGc8HPWHes%2BBTWWlGxDfgAY%2FkYs2COM1sieaat5WygmJsqbR%2BSLJ0oGoAGZIh%2FMSRNmSVoZwHLEmA%2BJqv1pV4IhJOarCbVWorR8dMOQjywquCgP8Xam9joBJ0Jk1w9WkrrWcav1tTECO4NSVEe5K368qhQhfBrrPeFRj7sDdeXtrhQWO9BgiR5jD02wDCZwLzEBjqkAXIApA5ywhleRhvydn9%2FgtIRpR9kR7A0YG8n06%2F%2FCMjSd77XzuRv2rshEynj79t%2BeKtW2cwvnUBEB77WRR%2BlOgJXR%2FG2I47SxrV6jPmvc3b2zioxpY0fAqClal83lowofTZvIyeM2Cae6nUZ9EnFnGfp5c9wnwuQgxzRZgFjnFamfKsLw5fEHMz4zuKaA8EbhmTQPprLk9lCTF2BDGnwDqLB1du%2F&X-Amz-Signature=962e3ed9c3acbb72a08573d2236236a9f2e3dfa8568cda2e3bad548bb4452181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
