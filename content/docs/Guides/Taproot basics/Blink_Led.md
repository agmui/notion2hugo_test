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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3N5NM7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDV%2Bw5aWb5fTT8r7nmdiAlW5mdDHspUg%2Fn09MUwZjAPHAiBjopWX2OsroH5FYFKAS%2BWz4JF3SPHcmuKgLvayGY23Tyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMnhbiQ2Eeyw0YILARKtwD8EQoIFlqhj8pSwb3679N3TlB33%2B5lYNkYkMOprVl48uMRV8VZsTA4kEaABSpG3G4ID9rAv%2F4un4Qp%2Bwbzfd5WFEyzkNLRfhXsLA%2FgpG%2B7ZFVwvGO1sDnGUmZFkyp0HQpmQQC3RB%2FeAj4eLohxYksEy%2BD7fbn1fhz6%2Fk6%2FNEXFY%2BJOmeh5JsjqT%2B%2B4y%2FzYeuIRZnEZnMblV6GZySQR2LBC99laJIXJkjacm82%2BYQZ%2F3KsMM0BrOsCkrElMBNne9eNiMBNoM9veKb2zgdZpMYUXTn1J4toKHt50SU6Dk83wUzA9%2B69c2eZRJIm7ozwPyKHq6g1tONpEOYPA%2B2V7ODxICA4wkZ3WFDiXgSv2wK230FDPWS5P7ubfGmi9rSe%2B1fY27%2BwtuTJ1CEUsFg5Xa0ikashOl243PIu2C2UQSxOOk6KISDIh%2ByEYoNKm584AqdUNrzOViDpDdWCfPbP613S3Oo1MHymPN5MQ%2BOlX6jarxBBYUn3Gw07ZOJ%2FFRm2Wzu6zlw50NvPwQX6ksPANcfwOJzkh%2FBkvRQwcRpqRmE0j4kSIu02WKeu3i4e%2BXsvA04Ektp%2FseFEI0%2B7jEM7I%2FyXBc7W0THx45Dy2Vhl2LyKT1uIs3isnunXUW8Lc94wz%2B%2BXwQY6pgFls0n1qqVZEh9GmkBEUWl9yKXX%2FdjqGVmXI1f%2FwkrmK7qYoZJRlPwn%2BN8GxhTcetGayD9Vwdgf%2FHdng2YNC3vPJEjAEOBiWik0aLWIknnYRstC4BeXlUWE1GyAJay4p9JOWi%2FQpn4VeTID8TtK9mU4DNEd4b3WwuMRc6Gzw%2F1vDO0%2FqMdRvioyR06PYSyGd6BB0LqnVafuV7lRmqJzOu45LTPNqvb3&X-Amz-Signature=d0570099926509898d2727553006d33ccbb40dc9a2705ad7009b979a2843598c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIVCLRV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHH0%2B05lKzVUUwGVYgv1ofQO2IhqnQWcJK2s5xTNY%2BXqAiEAlhE%2FcmJ54oA6en76NHvDXOIEW5Mo%2BrU7RcOjj6OGiUsq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIwGpQOwIK2FcGiahircA5Zl5gYtNlzXZ4KdVab01YeDHG20pwT1jaECKpd0b2vcN8qYUyYwcUx9hbkR9F13Zso6aL9RGdShOqr%2FDMZHeFtefGbZGGu1fGQN8V8a41ybLuGIRcOPWbL%2F%2B8i1GV7TppffyasU6QVOWeaAsB6FLCbWnprbJDmmHTVGzq%2Bm%2FMMbvLLH1xpgQvGIagbrqMsPSREt3DpedCnTTHSypEukPVOt8UVGQeZwLEABCUz3T0LJOp4Jd0czjWAO7heqEr1RwvT2ylgj6rXCB94sUqnMBfxawY4GQ92VRjKpNPOgI5MkvlwpvsEJsMkISzbJ0I5sAvABJO%2BHNcWR8UzYq5gWpjNgdTkSxvBOWq47khKxgT0TvxwDqsmiUnM3lhrVIpRTjNEH%2FBZr0B33Dk1s%2BocbbsqnRz8GEfaicVVdnJigCRe%2F%2BkN%2Bl6hNJHODwVc80aEgisdzE3vNy9XsTLenimXXrRplvN9i8NPkmemu6CjrhcZcxykx1ZmgZgqwsNKu10e%2BRMg9P8m%2BEOAkqY7fDpYkZ2LP7OCb1is9K1lx2PIWoI1xwC0d0jNhzEreZDpr9Uiord%2F%2B5QiowzVYyGra8fqD59p%2F%2ByE%2FLW295QOCusnqBi4HO1Ct8MmgjcXwu2HUMI3wl8EGOqUBHpsVY2Su5H1VcZluMXgHI1At5QRw7pfFBN3zYCyOi7F3R%2BnSqN%2Fkc1FyfDqAv%2FLQTs%2FltrMKLO8gzYoyjto6hJo34QTRhdblH1tOBmEaC7C6MiY2DtRqTlfbik9aQnD4M7aIY8likO6A1P7a6jEVZqBZNnkcLdE4zuSK6P7%2FH3%2BjMUyXF0BVEnn75kyoZmvJrU24ufUB8dbTGuUqLuxTlDqhdV9A&X-Amz-Signature=3a0442374da7410456d5e6642a72fdbf6a059742c5b38de2a1caa57bd829a625&X-Amz-SignedHeaders=host&x-id=GetObject)

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
