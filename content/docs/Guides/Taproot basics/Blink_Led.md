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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOBFDJG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC91BSz5R2vEg4n5fbZ4XhwM8VRfOx0WH35Eps43RcnNAIgSCr8dY3cSXJNVF4HjTIVbNvZ0FHLzu5S%2BNnZuKUXOPMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDN4W8kMC3hkmyrubfSrcA7PxzsOBdtSohkFLuAYfHkAXEAd8%2F1bqYD%2FbKbBNxOx4Rqcw8rdh3g04yF1f22BmTzUoyU6M8DEJNKbwyaVsUYtjZUYd3tj%2BSF5CA%2B9offM7FBVT%2BtN0xVRfrW5yy8TODNlz7Pgnt18qUmmu1XgvHTldlJZdCalOJdl6QnosgBuJX00rDzb87uBCzWqCU0GqPGCiBVwt2NqhD5m1UZRRKeaVXwSZfeWUwWO%2FCD09ZYYNCqc%2FhNtuR3TCX31wnjdRovye5ui5nUoNJeFIJOBU5i0EIizJaPCsKrTsjHJtF4yP6dOiglQ%2BuviF9xQTZSlXQLTD%2BlHVkILZ0dAK0QLByhTGGeaQ44GOCK5aojEbSBFQ7bCv9ECqrCNQq2KnR6DaMCu%2BhjhLLGHfe7wbNs1qzKZAEdhQrsB4WnGrtSGuWn8Zh5iJ5sbH%2BrOOGUwkHwZQjfqhsvzfhIS1hegJpY8B2Qh7sFi3%2FaWjTCUI0t81g5HJEPL4JYjk0AnMpkh9%2BolAjTQXFhsDGrZnF8hG0pqk3JwqiwJ50z1p4BVUxNN0f%2FSoWbci%2BKphjqLZI3t8COwFilCKKqeXkdjFQI8fRRfW3SHCsP%2FUNxyZ9q4RvQ3OhJDuWndFe96QnQXHrVixMOuBjr0GOqUB%2FBzQs%2F4DYQ6yD8D3%2FF8cth2LgYLnS78hHoGNh%2F6LWJsQFP9vDy6hPshwbBlNKYJp48XvTqCgbcrlwS3yZ76Dq2PJp%2FkAreZ91DZhP2thuU6emkGWM98okEFNO9Tg0cDfWY2%2BRgBztEtDOe5n2N0YfCAVNV%2FIQznfk2aMombndWMwuowGQJ5V959dWN86vs8oM9bBrTu6QGgtdP2IUh3C9d6D2vt%2B&X-Amz-Signature=1ba25be5007a92775689978d67391b1da77bbccc353e71da5357d8567621ba6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3XA2K7%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBToev56n3n0%2B0B%2BcL%2BOvwJ94oKvOgQh7%2FvAC3sZnGQHAiBa6itKPq8qgQM36JjcaJHAx6vcozSh%2BZ0vISaycQG4oSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMOeoFCmPu2%2BCkzv9qKtwDLWhYkkUQNBYN%2F1inoFtiZ8%2B9CM4AF3irSlEgDcVJfEbPcnoF3uaAE%2FMn4VkB8IsOrQnisdZSnbg4PpPAfUHF3gXPkVKLDdjkNGsLr9CZkiBWo2pi4CYPCIphGOdrknpiPYlEOwIETmuDMW7ECnOTxJjggO%2FW4bhfL4YlOYAoUCwFi1FLI5xd8gRSVO9xleJM9Fyl1oueNSuOyEwytxy0pmo%2FpXLbaUG9qyPJk6mUjbWOzMq%2BCHUWZVS0ujGSVIgubNJWSOuIcxeYQm87tfNjSDtRaQLCaVEa9g%2B59dWa71HNEVdauH684C9AOaZ9DTYEEozamUIC62iht2U1nupNAgUmPFsdBCAzokI25hacWSNklmCmsO90WI1ZntOuSHdg%2BUsm%2FP8O2WX2D4yUeFwEDIT%2F9yGDqSEqir0xPPgU%2FaiD6qGKZyHSf8got92UALE9i0A1dih7RSVntPjQct469V5LtN0L4e5KpMxprmvMev8Vmup9pmcg3QBg7qMU5F3X0%2B%2BeGech4KHdtWfF5gp6Szd047VgxborDkJifXNvrYgMno0cqTi030YOAmHmB2BD6UT0G4GQ28LsDA%2BDDCqYKUK9RQMLE6iaSfwcH%2B5VRA3IFjtVwX0waKujjVowt4KOvQY6pgFf6AH9%2B5y2z6Og54qZQil5GvHdrNal%2BEPgsg%2FzAWwVMljNXVXgog6wkdHwvZnf7veKGsJJzE5yTlM5E8zhBfXHwmmNWdbTEXOSv6ulobK%2BLw5yTQ%2F63Euua4tVfoS0favozGLa6fzrtoWTiWyx3WQ7lQggI%2Fvprst6Cve2IN7ogky1TKWYkrcRJHaTRhwqnz1M7uaRDwti9Bwrbvoh2r7XzHiyOyU0&X-Amz-Signature=50b0654aefb575122fbdba62ce52d45eb6be61234996c91361228bc8357b50a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
