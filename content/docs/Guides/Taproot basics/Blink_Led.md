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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRU7DID%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIC8usVJL%2FeQE7EwJWSMg2%2Fv4w6m8OxaJat2v5IJTW0aPAiBDKScC8T8WsBMrnRiJPSUOSLh0%2FrREs3BZjsmuCwd5TSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSinl4%2FVVoPhEeIAAKtwD4CFsRAsYbyKswSZwFby9I0qM1WkSBBHt6RKyXZyaY5ZO3ysxA5ARmrxCW%2Feffd3GEzYn4auX2aJHMB3YjtA3gQvWLO7dAh9qBR9C2Bm5bKRTXyhnPvw2%2FqdeQwPzUVbYgM%2BULN1IW8qvWkPUwrYT0bNzsiBtI8tJyQ4bsadnqC4IqL1lYZ9XdGPECfoktKQF7dYw3fYMksDecSKStDDqSskDIgqDaXR%2FkurVFrdVEMYmExzCpgdHSp7ip8fRlU916TNIEsi9KjSLC4yafvg8RrDCo%2Bu3P4WQpjq2NMt%2FaduW9vNjlAwBe%2BuhOud8dlUpmEioJ1qY06A1QKJWiYwX2CvzbfoZZV%2FatwHQ1oUUMZ5wRPyQUrA04%2BxG85Dz%2B47eoI74%2FpfOrljuW3JEtaG0A1aiMEWzjxY6WNJWus%2FIy8tu0mhdqOPRDpGr63RQDHBAiwhaMRnRhoNaDICX3rtI%2BzhFA9%2BYAY35QSsnO4vtKdxz8odJ8JTXKTbyYyi6RUMBBEYe%2BEzTqyJT5m33D6Tdr6YFvy47otVv8I6AgcdDcmsRfO7wHhnZxeaCd%2BltnFwBxVDu8OKEiiMPa%2ByKrMACDjUJ4RHc70cLvH8IYRgOg0Kgol0rBVogRYVLNWcwgvC%2BvgY6pgFhvrGfGkiVZVf71uzdjspz%2F8A%2BSnoorhNHQqPPaW22Hf8dDfd6xbXOKy49wXX1djcj6NDZyv%2BSaPl%2F8BMYyAiM8BcxccPayd%2FiZJiCbgLl8qz4zOnR8iX4b%2FzQR4u%2F%2Bl6POtQytd3LeTB8RusVpqQMXioaaLDKKHSAU9V1KrwBus6iVCV5PcF%2FO1I0diHn7DrTHuFK7K1AvdLV3ag8%2ByAXjVZ3Irdz&X-Amz-Signature=b68931a77159ee6a4edbdc9e2e9ca2691012978093fc6f25b6bc7e5e45977806&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWWHIXR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDhMNvIkm01D19meKOpWNu%2FQHeP%2FP553SHHdulZ0KjVuAiBJRBVYlwLKx4bBUkh0PrqhFqDeURBSwZzJeB0w%2BGv68yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKNI0GgzmrNtEpGUxKtwDMNgYG9P%2BLY44bXtCpOP3qiJLXgTyZk3FoO0eQzCgipoN2V4YvR%2Bxg9Y0kYQAolYP3Cqx42HimFNOCcrwnYs6RiOpKGBwPbZv3%2FS%2FPG%2FVi26h9v7qKujvkts21%2BN2Yspfq2k0AI%2Bq6aHrviHsQkbTO8S4kL0z4Zzei1JRxutltS58QMOpOtSz60nSMgjQSSY%2FUICb0Jyh3d6wxY1N9SGYuy%2BlMvyRS%2Fr82dWll0078TTyg0cOJqdcLPe9iS5cGXoGf2fFf4ncg6vmHjeD%2FnXFhiBW%2Butz2qB%2F8mZmfFlufs6Wo1yjKFY5iJ4MAMp73Zwxx%2BanVLuSmIC5u3wP2bhvVlF8mYIZoK5M2Pcb6MUTRCpmg%2BAvQNah1HA8gnAx60ew8uXBs017zb6FII3cDUfw%2F34WpLiPzOQf458FusBZoM2Vs10ipaWLRZEJ1EpUVHQUJXKzOBjBgWPq8RSx11ax2bsv0zaw1OuR4jY2S09I1HcrFWQStMgAjmWk8ahnOw59bjKTqoA7eGp6EkhmvZx2qK8mPmccerFmXoZ1h5%2BNiy56Tdbj%2F5JGKtz7gbaa1Rx84g3VieEP6mREkZNlpFqJkHNO1Czs4sd4UZuatTHHh7MVW6iX9z61zKd98yAwxvC%2BvgY6pgFMT8DKJ1nasWZvHT6JnMNgZMktjlbB%2F20k2ZEvrL%2FPwUJSW8Yym0hXucabTBR%2BG1NwwU2i%2FuEvRzHboM0DZ3XD%2FtLEjFrrPCqqw8%2Fg9aDQYSa1g2FnTr46EZ2FDl8Dh7%2Fxf8EghitZlqIe96BeoL3TKGqXcRaqzhPTOCu3ASiaqFcXbXpN5tzvv7brLs%2BtNwZ7Ep16cb7Xwpvwtsh%2B6G5diHUc3%2FRP&X-Amz-Signature=d5563ade64fd17cb2b91e9d3cfc3605a20deb8f25ed62e15d6f933b65cf0af74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
