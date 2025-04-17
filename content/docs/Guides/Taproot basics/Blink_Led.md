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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662DSQK3H%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvFR2VVB2iUrGiolshZD1ieCiCzNQsW%2FIrwGRKfDXnWAiEA2%2BfHB6XkTLhf8ikVFXX%2Bv11I2QpVz4AO21hfdX4wxhgq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDF5ZhoDgzvlSA9DeaCrcA9Ptgh7GCvhV1gjZXKl9%2FEDdL3X88bGVhU1J8XT%2B9Eg8cZ2ZcyFjw3eaW3DuK1FmMxlP5NAcyzbjDRoXBFdME7QIFJSTSI68tZpmAVsOsnYVT271sU2ZCESceOPaHJrH3pkD5KviqteuZFDjTCNGX1kAaPJcwQOmdkLaV0v1WSjOHF6YJRnSSehABkHQrGjZoLSzg%2FFh9HQV9mYohj9tcC5IugdErKcTu%2FvKCPh0mc5sUVBr4qn%2F2gkL0ENlbU4pnemX%2FY2C9b8YGTlnXSQR2%2FcHcJ5aOeWfNVhoIof7YIN5NgLMiSuHXeppKkg81lOEThu0D3T0HECQtFUejBBZs2MYGuFiAujm4mLMwU%2BtOfak7%2BVH%2BpoJG4salBb2JLJboNuGkja1u3IxmykZdgN50fqB7%2Fo%2FYDcVkb9zb522psU1WzW0ZjaK2rxC9naNo3mBhTH47zlONnSXLhKZ2S7WWgrzv2G6Ev44TOF6yu9lnhPnifJ0MTVfcD8ibgBzfyHEscMSPo%2BXtjJ1420mmZu6gytx7W%2FoGMR0zMs%2BVfJZm0r22Uy%2FYG%2FumkasYbDJDx5OurvZGhq9CfxGV4gJi5bpvYsLfgrs7zSUTcS1eW5TydNvfFcB0MxYFUVPG%2B%2F8MJmHhsAGOqUBrejsQw5wauvujs4EEoAC8rrWdg1a52NREpKq2YoLd%2FmSb%2FkLIGvb7sQSeEnwv3dSeztc%2FVmbZKKD58R95o93lUXjB7OFY6DTOmFyuA%2BkMZfymr%2B3Z3wZjEeMYQTwBcf0ovwgB4Na%2FwZVYMXmZgVThAHCGuHj8MKe3a71FM9x8yqo0Vso6W6LfeYglHXK67l9fc6rRw7jDGvqh%2F%2B6SJ0sjGATcJGR&X-Amz-Signature=b591859cb7d69a1982352078427a19cda87c755f87c80ec5e6b74cf8bfd93bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663GUSXLO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUbpiP4IIMTjKg0oTnow3ZVA%2Bh5XTW%2BWyewWepoAx4UgIgL6rCDb%2FfDZVaXA5GBFs%2FUc79l2%2F0M3Pvs109%2FBZWgKYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBFnwub1IAxTYYAObircA3bgGpZesboLtnIeI7tYhTIOMrgxesfRiUIfDuoM5Nokn4qsmIl1ibopXeRdsqKAwLD4V4hdMUXeGChsBKZR%2BR2Gv2lxwMdX8tSdzKqVd%2FrP%2ByUgEZdMZ6OQiJ%2B3NUW5FlpcsR8sOb5Et19Rs2c4MGPKYUJIMlpR3bZ264r47r0%2B07yybwX%2BnB4Lkv5tzyLrOEpZJ%2FKMi%2FGhvo8DlFkhT6A5ByNdyQfEME8QuZUl9e29G6i9zMufQRw%2B2%2BugVf7ysC8Vt%2BPq1vLWkXLaSfjbFo5TntXBCjIbilUWasERspo3KotGht2qF2mhArpct38%2Be48afX2jixw79oZoJl2gS2kj24x8ZkeqzXXZzpwPhV%2FCm8v4yZFkqQH7XKJsLEHc1MgyLA2AWXEXhGUHbCsEAk1pAkl6LMcDpJJcqpZa6KdVz8A5EI4VxpyHnIPUqTROE%2BZYCoh2D5SgdqEM%2FTnN1yH8sVQ5sN9yRtuqleO0C48BFjeD8SZ9wLrtjfRT%2FzM94Kw19WVfZh6fKK4PD9iggU9yP%2BBxLGAA00%2FEwJD%2BOFQgJ7tAErmllmAHWYV6jC4o7FqTRYyc0LIZIRCN7hL4ReAQOhVRmCCjwImAJVvdPi2OxjDUBGbJjwkL0HBjMKmHhsAGOqUB0DHQuWT528ymcl6eQvS%2BThy%2BFFPyw5Ztus0W2LS5BhFywj3OFUTfsOnjHRTSDlaX1jnlWzD2k9g3Wb7CR%2BA7EHna3hX8dXzG1hFoJHFi%2B1lYPmwO%2B5JCdtZKaSBw0nA%2Bn8jcQ%2BO0eelSkof9QyYuh7r61r%2FRojpmsdalwKZDRgNvat5QYyBja0ldOJRdBajroSVqBUe4TaoUWJ34haB2gPq36QvE&X-Amz-Signature=1b0b408bff25ba6a7bc9f9c80c793cb0698f5e4c74da5a9e31dfd4eab698a06c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
