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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGS74IY%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbxQInUN%2BfCYJFNjO%2Bvf0yV%2BOUiaaZOAJSrAifU2xe9QIhAP%2Bqr1StU1gRKRdNADckLO99GeH0fRywn6HjOn02iXWgKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyajeQktXRm0pKtRNQq3AMMqKkaq6f4I%2BAlRMSOtC1dRKHawUTIpOG9TFmhmUXV629J1yQbuXId5lMmL51X3kVh7sTGnyH9%2Fy%2Bz0KJmDCiDow7xGU6iaAF7O%2B1tqL96U4asp%2FfAeXXcPR5Y74dy7%2ByWzHvD0S4nfcx9Oml9fwdTEPtU40bQTxVvz%2FVPeKm1FlohG7x6%2FFq3l1fPDhyVXCzsf6W1sAvGlf5bj3%2FZ3%2Fa0I4AaYVpGS647KzOT7TwWuwoB2ZcLAeBEXBUQpFKpBdZxsPsshP27TLPIatypEkr0F%2FG9mRoSKxVAcj%2Fvb4Dr22OGNjBr56xM0TQYmk1TdP5X4yMHMmQZmGljAaNZrV2vQO0JxyQNBYbon1jwN8raWzixCn3aQPIPGciXtmxn7MvMceKHvk6AybtyJlG%2B5t4SiZ9tbVscBTUrrP%2Buvdyccki44RMkFWY9QGConL%2FDxWzhTKHZYAM0HKlaGZ7sl4PSHqZDmVjPY%2FJuiBvepK1GEojdFRe4f0UCrHmSrctDeGMGKKFdbaty3tz4Qy4BOe0FVzQdKI%2Fj9sQQTMKVATyHhEd%2F5g%2FnwQDWskiWg%2FXSdo1Zl8HMb78PnXX%2B90Oiy4DJQJegLJLJulQy27pDjVeUmrUSomvfaRVsq1B0gzC0rcTABjqkAUCgu7j4R99lpkOoWqFhNAwKyfThcfgQ5HswXzwSRw%2Fa21iT7ZU0ZA7XuPA9ArkMIIxAPAPq9%2FxGHx7Bc45IkahL0qdNzq9eA%2F%2FZ%2BKWxjF8LWCxq%2BP1%2BoCWMrL02kClySBeUmGrATTBKBQ8XHNmp6gykAwpCCYPxqpX3YY49QzRu9szzUYWcDFyjVoVie3Wf0eKY2nuc%2FQvlvmk6IebLJnpRVlOl&X-Amz-Signature=d04d337024c9c202b81271b4c864d349f1e00c23fc13da07242b483a64485b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3RAASQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoOv2jzteGcoCwrMZlUN3Hv4P%2FfHfZMBoBcJwhR7GDqAiEAu8FjcEA3S%2FQ4Rr5gtafQiztmUVgqmosFawt%2BFl6LtUEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2ZJj%2BDgHUXdNnA1ircA5OXEoII8b57JXvDQkJ2FlFGA2EqfiSjmy1oXEHi9ULQAxqXGFUpyCFntqEaRhThJQuERNKfXQpgUIWgTQ7IeEAzUKvRwMj0NMN%2FsVy666NHOR0PtFQvKb3asb6dm%2BvxU3h8wzl9CV9LhlwxYd6csM%2Fn7U8abiBQZdYOxJA%2FW%2Bgghm5gW5tgkfEIU94P1BuKJHbhpGd%2FMzVh1iBjUcBlg%2F3JbTCE4IzYM3bvd%2FyLYz%2FceIRkkl%2FQPA9vsGg2AHlM6EL7cS8meeuHHcw3PQD%2B5%2FBiKduw%2FER7BbA6C9q%2FJQu%2FLmR1NPaZuzc962mNxjvpe07zEzw4ura8DLynANJX3veg8OXF2D2RXUcBbWDuixD8zbY37GW43rRZ140tHT8sfIcYff8%2FQEebMMNM4LWutWONhX4kZJiao8%2BbZrZdrLioXWKYPOrnlM44PJj%2FdpUHFLC1KkYCNVkgB51wVuMiJYkdB2VNU1pV5RwlyQRxOyNL%2BJNryS5Vd2mwCkKMDzNFArzLor01oCHcULu%2FJHtXDrCcIWiLGXJGuqgxEDgrPDRwkXY3rdNg4V%2FvKNIoWX%2BA1%2BCi4Wk3WFyeIYgxZQRKm6jIkUHXCoA0jfQ2LDiZKAKodrc529R5vPrV2mOnMNutxMAGOqUBZerNOKfGXgr%2BeL4ICHXIWNnO28RNrJalu5UC5AJG6tjo8R3vsZoHy4G7sgtAs9RFSfGnXP2jMR5g2i%2B6nTo5jMuzx3A1yWiD6%2FyJp4UgWdZZsYIo%2F3A39HQ4yIv%2BEtxXjcv1W5Ai3ttRkPnXKjK6NXOEYyolHmq8n6T%2FPv41Yni%2FdC6g47v0lYnb7dfsjL1ep62nZH%2BsB7SSDXXLSS9AAgBYwUiu&X-Amz-Signature=1ed22917113792f60a2c15fa02653e85fc56f7b33aa8a41d354fbdfb3cdb5c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
