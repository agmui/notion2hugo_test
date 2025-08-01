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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWCWDW5C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdX8KXmbSGo9DPEc4Gv1EXhbCfJX6%2BqJxy%2Fe88%2BKWwwAiADa8qNNpcOOudLvz%2BciTOFGZOCJYRN7Y8hPQ3bXa3eJSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOdnV1WRrqlpXmDkOKtwDVRAzDBgeUl9romi4pHBnhUPBTsXQ59MgHCV6crRqNwdv3feNq%2FwsZHziLCmkU6P2Ene5zB8tfCXESUCbjegEI7Atw2RxE1lWvLLf8NBcCKc8jWl3Tnaa%2Bt7VfkZqxAtRLZqDe%2F%2Bqa3idCtnJHpFwDtdIJGB9%2BxctEa2PmGNCkByl8nL%2FyiArmC4sqXWyuY2PMyE2e78e4K9aLupNToQ5d4S7lLnEHdzSI7WIQuusWFcRUDtVEeGAojOPTNvxKNPyTVq6t1ASDgal1X5wVWY%2F5C1U5QAYuOy0LjS11qAkLuBiUj6yR9WXaOnpWVPhwhjUdiS7QjGML2FXQu%2B2Dx33lSzvgDXRHeqmI3uslc1ia1PUIPb0g1GB7sC9napQj1n%2FaLhRKd6ai%2B9inZVruO1PYMGOINcBwBFZfpVUHfC46l53E%2BfmWVZFjp9PXzO2vsjKvVIjCt3F4vlzfQzGuG7oJ14zZUaoB27JN1JHBTVSOHeb%2FyZd5iXYADMbMVdo%2FT6KzYSznjiXWY18V5GZ0MV3wnP%2B%2BHJSWnYNTObcspxi8ddw55PKzjYSx6WUlhX4Ku3dZS3Ieli%2FeTPa%2Fm%2FzrWe9idP%2FwY40WPb9tD1vSZHerWq2oCCHxskmRcYC5DMwv%2B6vxAY6pgEWEiCIfKFYQd%2BNu%2BX4qBMMNAu%2BSDCHNjrx0NVtMveHs295S0uUPRy80Mo758iVHIpELJxxn3QjnX5ZsIYCQdVsvRVHal9hOMtaVehiqx8%2Fcc%2BRz%2Bf2T79WSp5vgS9DWDaX3df%2FoEW5tLV7ul%2BnQMjKLxi2nWg49QjbVhE%2B%2BXPBm8mf9TuFYLfx55S97zfDN3sztcv3U19zyI%2FlDYbsrhIGo8ctkSsB&X-Amz-Signature=9deae4eb448b6ed62e405f2b8e0fab164b19a84524f84ce6a745e6a7a5f60cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V52ROAG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcpcpeK0r7FzYf2n18JqOKhGHkVzxVR9YxpoMZy9OgVwIhAOk3XJfXAASZwRH6sdQwgNFf2Hh6VVGcGX60aAJcW4%2BqKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUXkmA9NIMkry9fwQq3AOKLqOn8pUMTUS074Hc%2FYvn6Oj82BhUFmKMCieEfuSALXleYeMbp9IFzv4TO2ia8vaDhJtfGvK5xteW1d0lDsK1Yd6lsgFqUuk5VGwr63SE5ysajPYE5E87s8jdMnSS46kg4ixQo8eRK8rHjmkibXYC60UGNU1Gr9dMcoc58sPZIlLr3a3ozdksGH9aRWk95OSy8PLztkXDfeH8i7Z0z%2FS%2F6eFulqTgeNrw6iXoLsB%2B%2FU017TZ4jdEqqtmc%2B9P8AphENmK%2FdFwq6NANDuzYH%2F0upc7tM5DZCnCHZA5QBitmr65FKXKTGICNrzB%2BDuHyJA6UnoiswMtVpQ0y%2BuBjIwiGBIgoV7AfWoTBJCnucRBAUFfDB1c4NpYvkp4kU0qT7Lf1Hh8EjzMXNjIfJBPMnSh2TPfoR%2FgmO984uFQLhPmIYKala1wSbMfAgdxkShzmLcoQFdL0hr4pTzsQpF2FouifD21cPz8%2FIFSjq2O59xALzaeybuR9zxiA%2BJDoOIcCJV6do89oQ76HQh1nJ63CI1ksWCqiG9Dml6MYM5rJL82GB38oV%2FNg0Xy8kICQyI2i1jFcZ6vxft24BjsvlBw%2FN%2FTDGtgRgxcP6ZZDDZnK2UFfVO1lTdb7b%2Bvv3OIvyzD57q%2FEBjqkAXv3zorPDiFborEqsxvEdqMCDDxiYrGvJArRRZI6zELtQhVmehFHmd03iZ2CAu3nU7zSyB2DvNGh1prGem2E1sAGQbvnDECaouwZAFy74YuCNz1rwrkBQNEQAfPcg1ejIWiiC2CpRf19lvgDJTPgstJZ%2BEBOafGiyH%2FFbix2fuJOC0dB3lj7ViU7Qwg8p1dK%2BOxniHb8%2B3qL6rRb6qbtkNe57bAV&X-Amz-Signature=dce3d2ba3494e96a81727931c434ec80768197e4d4da324462ddadb677dd6d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
