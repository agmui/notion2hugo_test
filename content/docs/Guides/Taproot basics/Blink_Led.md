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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJUUWZO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFzYXvdRS5alRKZ0FXEZ5MthI8mRL%2BI0c9qMfdYZ7YDAiEAqn5sVPiojwgxbBOg%2FB6BLaZPgdsjr1yO7esLyyevl%2BUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBdl4XP3d4Z8LHNpWSrcA7rGSGABmsyFl5XMF479CuotPspTMR1D8irDeRsGcaxdKp4dK%2BVplfhznoNEAzq8v4l4IDIWHCFJKGfsn74RCsL0eRaq7EL22dhyn1Ert5toAWUdhk35GuAFvjCDRV4PmFjO6QUt39nEie0ddUH7TXvjpytmhEX%2BRtwq9dMuYGo33rdkqImYdmIkp2EUXNH3MtXb1mLQxt2rSXItj7THtg7RkdPKzbcp%2BtmPS4v%2BVqHlj1Yv9W1QL%2FD9fyttconxTFyiB%2Fk1y8VAuTTj3P9D2Gc9ENVOj4MusF382CRCB9yaNFcXUnqIN3n94ZrPUNoKCVIqd6Ef2yiv5mXE0c18WJmUTu8vjuiY2WXB8kv6SodH2aGilRrlCmXNA5fj2LHMW6Tlp1WrFb31RmsTU12bxLdYEGCvfO29iq5Pyyr0tFIunZy39aR5RqONEq%2BdIt8LVKAufIp5Y16lx2pLDTS%2Ftum9%2BH2yacKakZa%2F3mBMu5j0CWWOETHcRFRWwDcvC1hwkyHpnkjqUv8EBjLKq2u2AnM7ky2ChTppUJpXxNZG%2FAhuxlybxywVCmjSkWol8DDDi2rV1zIHvGu9Yg5e0XzngBr8PHGrIuGrIb9a%2F7yDarrCp9%2FBYlFo41K%2BinxFMLy83r4GOqUBUu6gK0uce0dGv1u4fTon6fai2HIMaNv4ygirTUr510sDyWPgeHyr2U1PjhV4UrrQThISo2qrxq6W4C%2F016bKp4pwBZKycfe6tmsROaIddx7m%2BL6oUmxfFxo2lM329fqpk6kPObVd0Z3tNXo1iAwTCgYes6dcA7u0tcRpfRYwKcndIcnQAvsJ%2BmnT3lAEyZ78Y0JJjTjsdadjFWjQkrwC6GIVgzoF&X-Amz-Signature=6e77a918d856ab8c83b4ac20c77ea152b1b93432b2b8c39fd8e1e0156a940156&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XOFINSF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEDuJ2h7l1%2FnD4%2BgVu%2FKafbg3pNbJardnQCeAMIuy4DAiAlMoJFo4ByucdionF5XVj9gWr6Elz%2FDMs41OP9t7ZRHyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BgcR%2BhTzxZsxSKyOKtwDrW6xwEjJA5lYi274Y9Q4B3MEkh4fHSyfk5%2F4btOhx3Ax2PB%2FBlzt1HzsUEPb%2BgyROoOLTaQi9rsvGOQXx7Xf1gN5MEka4ppbwA9l95zhDreDgU%2FFl3uUvQp%2F2ZASGMpy86SYSznL5LgAsxtqGgejp%2BYLg9m%2FW%2FTpLeppvL6VmZ9U1GXZdCZ64Y76mAbmpo2hSHEj%2BMUtTgPjE9m7mTuLTeqjwvAnyYBgAiJFKksteGmoyEbU7KJGyxrsTm7azXTy2Txhpt3Xf8oc4wuV0ufUvBvR3IuEauftsPUTJWk0UbCMQyovJZ0YT4CugWIScSxT8JSi95qVoaInLLcaH7SJhXRxZiK9OCs7rWYwJoh3l6hcypy%2FA4RauNyrhqvP0vcIYjtvxZ9zg8z1RtkFjKEL0UPizPgfVAxSZcRxUy9Svvn%2FFK3jD4qpxynBODfLjvQu5l9neLtL09uYk8LlTcvwUtzAmwyMmNloExyQ8ItrYeGO1mobsEQwbs%2F4inyl3im7gWYNBBhwgAPdIa4s0ptWe6KIeyIABgQUf0Ds3fXigTYWtWFuyLK6rPhDC5OMpsl%2BmZR%2Bm5%2FTDQL6yIoIMv2dScWxPjUEOsWKJ8JcEIMNQoN4GTMgfNUjBdK9KZkwjLzevgY6pgGt6hR38CBBCAPWM%2BW%2FlwU6Ed9fHZLulYOOIjTgTQV%2BtwH2XuzRZ7vy7%2FoyHgHkVcfi8hIlUrjAOdqsa34h9yZpTrwvIntvkwEupgbMgbPB1dOAwI4e39cFJU1R6GSUY7258kW4u3u03p5VA0Pxkf9DonOyezTOR%2FCGIyAlGYJYwUmZmyxqvOdVkXdU1d8udBlvCLNSe9dMuEovr17QBkDSarYrNdWQ&X-Amz-Signature=6593a388cc642b93f4907e8552250a3d682a98f4d144f409b38c304da149537c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
