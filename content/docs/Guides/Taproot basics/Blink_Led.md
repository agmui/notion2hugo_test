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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WSX7KHL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIB7iGeKSsis%2FzfWZkOjxYa7LZvbCdXWy2S8h%2Fte%2FtZ4aAiBN0a%2F3u%2BeG56tLZII%2BIe7ZhyXyM6C%2FPh7muuQCXLrcXCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7rzzp3aYq1%2BXTlKvKtwDQZxrqR2yzOgSwRaAR%2BDBnGvK0mO1XbCFWYNpI%2FmHYapVehHnOivsiiI4ODdWveMafYSudhAN2TCrKMip1nvFYMgz3hPcijI%2FEvlzCpnOlpvQO0UWug8DUo%2FAinLIT5Ix67tmuyvqm0jKVjOyOKqt%2By2LCdSZ3q9czVWXmK4oIDwV8l8Ff1EAQd%2FfUO9m8Qp9AnjX2LfrbdbnD%2BJf5S5blrNWcEKEqvdna2uahP636tntZnhb%2FdhL5Aj6j6fKZ4xIIV3%2FPJYTrjMQ1Bwxj%2BdLRVspNLc8OuseQdDSKFwfONjc2XlahrJSoe0vtu%2F%2F52Balo5bL8mJWNX8GT1Q0CZKEiP%2BTKLNtflJJ0WEUBrc8%2BcmmTy%2F%2BA0WpkTFxXbfoNmXhG6SxwuSNaAYhBGi1X%2B7oKEbIXCM1piE%2BEyETEDrFASpg9PV9CRsyWHHT41WoS%2F0gf%2FwRA01bzejPBHLGFtwPzafXoVp27xnDvjQGo5%2Fpx6AbHrJEcteOCAaSpWXGiFenh0AaX%2FmpMqHDMpAd9RVxXPI2L3zVjc4mtRq7nWFaGhn6udu%2FhFXO8A5YUN9bohUufSWUKFIpBLLex5lTfeTJkU6FL%2FryCaXqy3wmOht6YcBKfWbBnftnEupOHAwwqrZwAY6pgGWaD%2FtwS8WH7%2BmQE3eAUdf4P6McpAVwkH13qnGNr23JyfD0a1DkAtjtBNgds6%2FM2rUiEZA7FTDgmtBnZtgh%2FjjeB6p4uVv7NZDZJ7fiXSHfo8rGQoytq%2FaBAglbw6C8MQmDwHz3l7P%2F5l4ADh71zudgl2zqNXutARyw8D21KTOd5k8kSbtdVKfBGXH6WfxmFvYPteHuqHhhg1Aiv2qwTU8Qxrq0k0Q&X-Amz-Signature=e4d0dc9307d387777b8d8b8b587dc026a7e06070516ff8e01c229c7893b96b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKHXQYF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIF%2F5%2BkT827FyLJ%2FlY0usq2hTOpRYtbxNjyzXdzLv1kaIAiEA6wnyiq8T7hgZ4fFiNuXChSx3DC%2BOFh%2FPEtXLChJMi5YqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BVscUgLDUrGoPhQSrcA27zaRjFCNuoJVN3SMhddSi5%2BQ2YBdehPKd9thNswYA7qflz8hjGYfdzAwDsyDukNr1TXlkPkLQefAY0uxcTAXlScy3ohqfbo%2Fggc3XWUNlp8zml8yLYh8HRIylb89U1Rncczla27IwXgbQY3Y1cmKH4I3XDor9o79%2FJOZvzJ11WtxRzAGIApxN5pSGZZ2IaA%2FVbuzxsxgIc5sNv1RGdfR%2BzCQ7G3EgHZnS0qRRJ%2FnfXPNkvSaOv1ROT5wFDYd0hv%2FyjIHrtdtC0LBLwBtV161Fn9b%2B1ZqzGEYPrjc8dnT%2F4IsLqKRs8g6v1PlYoLyGL4gdUIvd4KAl8d6LNUTZj17UdGbjBjFqjNh93zql3s3xNsBjwQn%2BpBq4WKCjUOI%2BMH3pphVakFJhPtlkskq32Bip3vFdn5Ar8nn2lgEXH9clLQH%2FWGrGeT6U%2Fa3gAA1k7RMykA19bDMG71EPiyW6JXPCy%2FFGrttu8eXEtBrcmq9HQ675DllpVpgt0ilWhS%2BAp5U5BrJhs6hzbeg4rcn%2BblfXbc96k0PdxDJObAsssSmCqLm%2FLA5kosdoZqYQ6a1jmc43sbknC7WtF75fY7k3kTZQff8f96j99KSxEySM1pDsiGAmf9j4aP679NfRCMLep2cAGOqUB081Lf3LhWqu%2BxgWH4veFSUMNOPv1GGDKJaVfAFZZcyB2YMPy%2Fir9wnKucaFU2W5lieq%2BbVlooDYGV5AnyLwFMs9y5L4KCDyS23zK%2B6Wp0zfzljh5opfExWM1NeqNBum5wFQqW%2FUiUcsNKLZLWpOeE4%2BeUVQjN06sTyRTdkn5BW95gwYzTgOTsXQMfRo9V%2BzH%2FMo1ewGDJ%2FhlgVXcmAb4rnohRQCl&X-Amz-Signature=1d6fd30692c6343f7418a02063b6e207110347350ebf0fdae4215ed6c2fa17e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
