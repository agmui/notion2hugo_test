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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMYHILO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCmluKWYLiOmZO90oS7yuBX7%2Bq21oVWvX%2FL3PsmJSj%2F0gIhAJDK3Fkzf5jjB7phaSHjP6%2FYZZkSO1zgVllRbQuCnEl1KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7LmM3v8daPZEiu9Qq3APJRYmLYiZX406M7t0mDKkS%2FeQSKfSW96UrGZ5h453pVyxGQ0MqDbho4NyGgjV2oDBIiv6r5JRUIITvOPUhmWe2M0Mj%2FfT3KYIowehf8TNmDAIZdMI68LhmvoLO6FtyUMkRcugXnzT3oI9Ongv2uZCGJGG8lr9N5EnpCNEMRnGOXRPTyBUT%2FIPDQv55c1VU05n0tDb4iHW5vAsAhfjbVZxM%2BHxT7OFbxk%2BB59hhfEQf3on8A2TNjDkkZzJ4TP0vXnb0%2FTxhse8L3LiKJoDfQyuryoqJTBB2m%2B9krG0q0kV987zgOhX6tdZNpwERNAWABxMnRycosQSnIsQUrNx%2FEQDIdKvBPGM3hiazKKQL8YzoCGNhxnmLPCk64M3vOSHOHBHof5zW%2BVzpakMQFsfdTlLwMcmiwloqLzwMIS9AvMaA5c4V%2FUBuUlv4NtRIrsQ6mVV62DDegyRJr%2FcGd%2F1EPWZK84eHackhsofcmxFCb8FSjW74%2FAeiVcQumPpxl4pRdvUePcqMW3QW7Q49LOGLqYnhvy%2BWwlDKxc9jpWEwHMiymDPoxj%2B8a3IuS3tcHiLWNwGiO%2F28EVY784ZaMCEHS475VknwzgIf9vBC6Uto%2B9an3Yb1hxQ8IDbDRe3uyDDApOa%2FBjqkAdAnzJ0K4KsLt%2BEgR6ExhipBQfgGCYnfz9X%2FWS4u0B7vO6KrvSp%2BpgxFvsWh34Jz5S1oQyZi3xju7cQP2KeX9KXzfu5VO1X2Q%2Biy5%2BT7ybArCgueLX6VtRyII4x2vg3LV8jFpAniAvhS36RbzcRntDVoN7jQihPNXf2Slg8KGVPe%2Fsniw30g3vqONLSDs6e4xG4Id5yt7i4cYIveX9ITMxFk3zJ%2F&X-Amz-Signature=e738d86bb3f4a23a21c8f534977301c8d967cec469425b05b0ce87a1a3bd4f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466627PDA2I%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCID4c%2BvRkxyhyODblA4TeTzkrBtrBdqrg%2BoqGFDkLNWqfAiEAmCqXjnYUdAQ6qvMRfjOSmNz0u5KYvUM0svU%2Frzlmsp0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJohnxJIjNY4UPZIZSrcA0dXx8qy5EUEWNCCk5tSW5acxlfOTWJcB1TRacSLZzWyxll7%2FKFHiy%2FUQYtjtWFH4YJ6SbjNrQeyxlq72JdBcLNab9Fpd6i43jllesV7FbGfuCZkYdlwMv7jirmzgok6w5nVEJUa49045RO9cxV3Pj7%2FK98BDD1OqHSc3Jtx%2BgS9zGUBa9ufjXb8IRBYRWVJX4a4GhXCHnG%2F%2B%2FuW32sm2Be3dAL%2BkKE%2B2HvXjHeTTq35VUxP1kcdaO8%2BORsqWI3bceEj0LfRwnhkwcJdZE184SoPZ%2BIi6iSoFy3Uy%2BO333unJmcm7C5PsIWx9SjiXmC2P5fGRJqMEW8o1h5j%2FEGErOs4B0mH8zLjUnTp3B4Cw%2B11njSm8Mst4kl5RYpKf479m1gm1kIQfctNBm3H9eDUT2NjI76QZaIcukJznCt9cn4UHJW86kCMlJygA7Ssh2JA9DNOkfHIOqioypRufHKUUCM%2FQbLtlGmWUEgUIGddkbTxVXoXOZldP63WDPOVfOt8ADYG0WYcBYJ6ZOKFyZpmoiXpXSqDigIABWse83c4PGlhGa%2FsvrFSkR2UIof1%2FoMaI04qAknK2v%2FzAm7Q%2BtfEr1%2BWaS7P%2F1b3uZ25UkEt0GdqazZGokqHn01iBtRwMPvw5b8GOqUBPlWnfHOP4%2F6McKZKQ9D09c8O9qJ4e4f6CSJmYgKQ8fPtbybvBWDyoWIPHKnbkE%2FvPGEjJT5QAjtVz3UlQntRWA0rnhyigy%2FLvGa6keFbfkRubmC6zQb2SW2nP5s7TF%2BEo9cvnZTCX6HSHlBOx4TMqg4ptcbbtt8smSbNGg7Lfs0MqFwe1nswG4JCbOOxVjgOBdbR%2BNYz6bjOyBuAdij3Q%2BB3M5LP&X-Amz-Signature=6e1ef091cae7480ddf6d8c8073ee8ea05a0041006adfeecb4d60b0909a74ea33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
