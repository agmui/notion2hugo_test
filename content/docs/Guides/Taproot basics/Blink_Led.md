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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4DOSXX%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZOfJIv1VvIxoWwn7lnv9D19NBVnwAF2pNv6qR%2Bln%2BWQIgHOWxyBp6QCBp%2B1CYyTGUABweqfLfsZXg2HvxWII76Ucq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH44CNp5Yd6As5WliCrcA%2BpfrdrS%2B%2FS4jqxxL9RS4ar6spbho7V7uAWK%2BqHvmRmwetNg6Kbj5vKsUyL%2FuEd7f7Ri4RYeAp3CNEYri0lt7RgYY0H3165gZKxuAAggW%2FL7HX%2BBxaS3HSWHKizGLcKtgM%2Fi4u0cmrcFug2DTVqJC8ay%2FPLUOmDGhkgfuTaI56qGpJUux5yb2jq1XPksDP8xkybiHeizxjRM%2F7FiZQvelF9hYEcSxTbUGqLEG7RPv%2Bej%2B5QMIjX%2F9yXac8CFrBwNPyJATFhFH9wzMPmbcELC1EtX%2BeR%2FP2Ws7QskgLL161KSRQzN7JEXlbzscf9SEewt509OqQM1ehGUsWuLGdBwSZ%2BQSqnLYmn%2BykVJBEIAqMVYpo7AfufXzilH2IW43oNHYRFuwazELLKVi39fXXccCAfkY1HyjO5SE4Q1CXO43769JXDvgOUWyZbakgTsy%2FMIXs5H8wjI2FEJNIHW7BgMuD3UGA3yEy3bboMSEuhy1HOZYBYd%2FS4VNQTUkQgE3bwPPSyDZLeW6v4xGWXyXt%2FkqKipQZ%2B%2BAUQqNySP0dMM4gNWXXOOZ0IgDna5XgDGOwIr0rmu7Eyiwhcrf%2BCXGRIJHps%2FR%2FZrlcSORT2LlVxqwehIuJsuXhWIXcyj8tYBMMG1osEGOqUBJWJ66H7zps%2B72W%2FCUkxh9ZopwUOCjgcNndjPsyt1Oi2S4e2mF4wPApqDHu4Gp43GvjPVn8oPLbMg76aE7bBWqTnQ4M93p7GHT%2BLuJ55qydgFYGoYfznZLJUBGYTnCb7E2xXyCW9eeKv6dhqH5tYje0irIuax2qVOg8hmyTvqmjfOBWP4nJDZpj9vFWS74DbuQvDGVfSXgVisFaiPZc9WdfxEwcBy&X-Amz-Signature=bda5c1925312a8f6c072b28ff6d8bbd0696eb3c84250246106263cd9f751cf68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQETFLIG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLl70pU19%2Bd6lP4ljQgQRiCu56j%2FVpGiLS7%2FXDf%2BMrdAiEAytAnP2YG90w8sO3elnMbY0H1ZbBcGkSqFRBG1yEW2P4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAWBedZtVngOUxux6yrcAxW3bsHA4HUGx%2FeBTabTvFrA%2BShZDh4PP3ZQRgKaNwMEJ2SrOwIly5k2hmvxwWSNy5GBqB8PZdxH9HHDj%2F%2FkAGOYKZnxT2sb9VNxPhi5RBwTD019f17GaRaGu4ero5q5fR5FYjR%2BSDj73Kx0EbfJgp2pg3yzQY22MQPPU0YvT1sIvz729AcU%2BWn3j4TO4%2ByRPvIQKGVliy%2FSPigrkVzB3D1cJWSJaIFKJE6czV1zAQKY5hfIczeTVNzdIrURFNPM%2BXViT3uw6fFkssf4kOh4CtMlVTfTRQBn8twEfPYoglop2Zbj1EVObOU6vORjHqQmOjThlmKoZogzev%2F5dQLtrGaq7MaiY1uqpLhmEVbYKsSMDZdSvhrMLYrMlWCp2srAzMslJQ6Fql552DucAB1rgUrMsTkX7bTCtQuq%2Bx7E%2BDQHKfj3QqGJI1rES3t8hP8eM9KCSYbmQfTHhz20pZIg8aRtMX%2FZpI3GUvJ4Z%2BuFfcscho7qwr6Tobj04yyb7dKxfBgDSKToQ7Kvb%2Fy5BhEVE526hmI%2Bju1M78ZyYfwv33yyTLvviBmRGYvLzQDeJbQ6RYJe9M%2F6zSN%2BvEqb0nSoqj1oHbq5fNpdqagLoa0Liejm6HzLz89nuDyg5lznMNS2osEGOqUBNkgQzYVN2KpjqqLAmb%2F6ZPQIItNOwsGN90ch%2FilIADBky4TWkcb60F%2FA9RP6nol8AA8HldCqv7xcEWOb5ys7aFRssJsG1kuy8gAsznXKZyNASwg8Qoou7eufYK6IomR0JiW5UXagNroL%2Bx4zXkFkIwmoYS03YwNtZj8MV2lejYeaOd3Z9OFxDXpwzxKlUhedv1v6wj6Kjrhuw3GFkIC0upv3LM9S&X-Amz-Signature=ac7dea81dcab94fd9a1d2b7cdab2d89a8bcbd7ed63fbdbaa6670e26cfd733535&X-Amz-SignedHeaders=host&x-id=GetObject)

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
