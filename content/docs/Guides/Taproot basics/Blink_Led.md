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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDKSGWWX%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCssp%2BZy4b0E61vRPJiqp0tAZQk9B%2FYZNTfnJ1DqcXkCQIgaOppDVL1XIdvQaCVRrnEhmaps85YyKT8VljYmjMkmykq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLTN3eSuLEGx60Q5BCrcAxkp85oDeA%2FDy%2FKM0Xx3pheqOPNJqBYkzOE2XPC%2FdHA3uib%2FYSvV7LCBCmAAkS0Effrr3n4d%2BORnyIJ81nkFL6ElDk937EjE5kHDiOuFzinlxZcZDL2sXyT6VpC%2BoZ4jEIr4qQ3DRjYZiUDYxRxnCqOT5dZCLfaT%2Foo94gh0aqrJLdCnxNjJlGAO%2BJuisEeEYil%2Bg4HLMO8tLYyXGRBVcWmzveFpfVJik9IeURWtZWAfvA05U2IT3suFy8OQBB34hQFdX4ekR%2Fr6s2%2Bp5UkFow2b5lyI7D5L0UkDhbuW4TM%2FWfkyYB%2BOpv%2BtMx4U%2Fu6hIzGxtNCpQyX%2BqmBLdeI7duJYf%2BznfN0XY%2BXIA%2FsBK2I5gGVQyQ6vOGM5jFN%2Fnsubock0eR4UAMaPHuQ%2Bur74LK%2Fv0InhyeHtakGcCuY7KeADuMr5jd5hV5T%2FEpNan%2Fg3vkU%2FP3bdNsvctUvjWXDXOAx083jj92A91VRBskyoNtuWVWN2t3Zt03N82Jz%2B4boEYDMd94MedAChQ%2BSd%2F52eRp1Cc6b7a3a9lXs52kqpvaPfkN9inGHPbsn6oQU4ECX9uvLJIZcWKJLJqWedI2Wc67ZYx40YnFFWQDnc0bhVNUkwbgZOxW9abQTm9sufMPCQmMEGOqUBBy6enzv6EOdIP7c4TnzeSQIX9qZ%2FCPGsetPXxNgG%2FW5wqTm3ACvu6sJWevsOgE0Q%2F2emhSTbQsN%2BmAlIgbXcA%2BLA%2Bx1hlqFJVytspkAwHWc9H3uiNuRQzkcWpnmNqjlFLLIuGtGmkYs9HSje9Ov7WJXG0eie7XMcy8S1YbNmrIoEYBVgi6EJ5XxUVToRESEsze%2FtccweypyekDES2vCJc9cYUSsz&X-Amz-Signature=5b0efe58885ebec0bb1363413b20f72c614f9fb97fd942d1d50bcb7926df83d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCX76TBF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICbUCxKJqqztjTQBNESIpSuire7vkAr7W7HtMIx6Ye5MAiEAuPWEZbz91ccdcEtX6ObHB9s55NElWEAv8ayD1kyN8WYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMNGs%2Fd1vthWVPMEOyrcA%2BJIT8qDeHqGknbVgB%2BxfbM2s6srKzIvztL0FXaaU5WLSe4ejyKEk5oT1xJwbJ3gv6nJNiB2VQujzOQlC4YXm3SUqwGl6xobfNUE0GxqY1FzDJ4SddHlJO3QbyVt2pzvVnRb90gCtlcmBYWZcZkWzze2qPNkOSWilUfb%2FlQWZi0iSIfY4WaZRiiz5wPh3sdFeLGfjZCQOKRkuHADynB09dNgiRZZVLo03cKZszYJKWEzlvVhv%2FZbLZy3FeExd1A4n%2BCNOo3P8oZCiP%2B7yXUhEzlqsAkjYTp2enCYIZL%2F3eJp4rza0CPvZKbiA9UJV9GJuUuECXrSV4sFy3imMYwuCJAxSotoETsvpD7cAed%2FRPzfUUr3yESrM0htDOealEn71%2FeHlGSxNc%2B7%2FRrG3dusFpSEc1yHj7L9i0Rh8M3leNyI8z3Ii23%2FVeI3ksYIqHth7K%2BJ7AZ9Dkhnlr%2F7zKpMjkctmMnLi3rCEy1tiXywTBginxo3WV12SNu%2FOzeCida16zPal78Hw%2FWbjENnGNFzMV7ZguL3neT9JrNbMCN6OaLI3ldQwCSY1J2U3Hukd8vtw3sl3uMnmzjnHxH8i6dP6a%2B1792YMV09P4hyOQ6m3aRtXDcYCCnujy%2Fgaw56MICSmMEGOqUB4%2F%2B2Rz%2Fo8mayoCYRADyDqPTkfomCotZR0rcvekBD3d6qEuURRr9yfpYlLh7%2Fw3WaGu4Jp0dmNXo3VDh%2FUFkb6NcNWY2Hh7n%2F3hKCNuX%2FH%2FLFUNd0uVZ5ikw2FGGx2AxVI%2F9JqirJMgk1t7o0kbIfdQfhchv0pk2VhVA%2BvE9nW4dFinC%2BRmK2MMb9x55VYw6NybZ8I%2BsjT4TuUHHa28X3wpw4L7j7&X-Amz-Signature=3182e4798dbbb76303354c450b0977dc16c1e3b4f4f5c467ee410376c73de8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
