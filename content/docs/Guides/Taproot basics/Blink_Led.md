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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RPJ2XSK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ogMFTFyqJ4%2BLsZotigQMkX%2FmGan2nsiQABd4PDYelQIhAP4Yh6Xb%2FWnmKfysC1CymdulOcq5RewEcBFRvEZ2WCFoKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEir6LKSNrLuzDZOMq3AOQv0PGV5Wx9H6hj2%2FuzoqAFkoA%2Fn5AB7flVe8A0Or2VCkoJK59o%2F141NYNIdRtsr24PY5Kf%2BVucX5xt4gGwYRiAnh%2BYVsscqaI0ixlISY6C8g8KcAjCzZo0d5mlYxMh20CuuVcpQ6Kd0Z6avylS1rz8fQhxOKJRiZiux4RLt0w1lJet92qhBpKfu6X%2BeYMDBuz%2FTUl5WYStGvtAidEGcLUYwaJXHFLqczt5%2FtfBPT%2FxuF%2BGh5M9bgX9y6y9B%2BKIpiLnZbd6rpxck75xMlZwQHm4rA5WHnS97lNESCGyrOdi6XwIkbqd5uWUCxeJNRWx0Ko4WWBMh1MA0NCp5SKlpkUxTDgaEUjjVYnDAHYiN7LHT0BCn4oMRxqWm%2FgOfMLYR%2FctTbdXZ8ri%2FjZvdiBIUQtibDpSFSBYFvZhsaC6Z1FtQpcz4QC6tWL8H1eHQuBch9SDtFUIrJBXtcl36OW8Ae0MxikmtcXLzjpg10kVVxfTAihcpjvTrsa%2FLr52Dbq4uIBoezX74A0kFSgXGRp1VOR1wFyL%2BGQseRWRgTVJCt3AM1npes0i9CBbVqEs2jv4had7SUzjbLtyWaRk1asaA9Y468X8VNrj5vKXwUNcmFw3HpuzuQks91XAY9y6zCYzam9BjqkAceyLtgu9cX4erpnh18M2JHK42kaaez6eDRCFVdPnwfVh%2BYYHO8ivStecgWdQP7H3nehNPPSgceTp9IdWuEhsxQvZOmV%2B1guca4fQXiABqG%2F9cupXRN11FcWaTL%2FqcUXlPgaV9wZsODNtljNxheiexaRKyZdeSe3qQ6vGiTXuQ73O97Fk74jq4hsgvtLN52oH19G8L4BiHiG59WugBf8%2FpHCrSMk&X-Amz-Signature=234ed2d185ff3a6c3d744fa4fe4378ec3849a3d283941f5cd001fe8ae3816df3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEBVD2UB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs4isoaqfSenGlulV2hYVkbAL1dAzzjHPo535yC%2F4XkAiBWGPHJE3wmd%2BYIsSX0x9Quan24XaNpJDXEtD2G6DwniiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymmHBA%2BDgRGh9oAuKtwDJa0N0KMANyywALSmREf2jI98R6FwXp3dPlt4Pnp0AkHwxksuKKJ%2BKg1rs2oQTXGEyyqwE7MAc2wGL05g8EXbwHip5nQfg8fqcYWSDs9ZltqLzbvYtSH21Gm7%2FCvsVCxaszLHB52TK0dqExDvav8GEB2VGwxCyEUSMKVQ4ZVFVa1xANVuYRfNoiNZMKFehrmGHzO6K12byPGmNaUmcxTMbhPR62pDHmeRfR6qJSvXguztIaWs2TincdlmjTE6M9hhFwl6%2FhPxPyraFCUknLuqIbPCTUq36JpzIavUS4kjjKrmsDck845GuZVNpJAFPgauW3%2F86uG9pZ0t8BSIQxkKNZyoJN2OB6ARCAuOQIpaQFH6xEMiha%2BvyYe%2BlqHGTPn3sk%2BzBzwJgoGaJ4ui9coaTrBlzjuNBhSDn20hyuHEqQIh3bwY8caX3P%2BSyEmfocKDwwMZt8FlMQDacZibRQPuYDiOvxHMhF2pXIiyez33j%2Bcn3DQXVS7I%2F1id5N2t8vwQyeO%2B823K872JWc2Zi%2BO4CUrANGDn%2FTq5lhc%2FYG3XLkZnF72RxA9I%2FBk36TNvW4Tr7Gg1OLmNwR3haFTvkrf7NQ6GjGA%2F3PutqsnyvXW%2FkJPKQRUmu5eYo77tlOkw%2BcypvQY6pgGchh4lS90zGCUWLg6YmEo%2B0rT4NywdHoT1pvfbClWVBTEufyE0Cr6IbJVEfUeEtBRh2BgqwuoS73M7iGeSJmEKTHHtQUyt49o%2BgEA%2Ft3QxZZDTNG%2Fv8iuf1oSKSm9nS%2FdzX1AtJs2szJpZMRtxxrU07PpfY1MS9vm8kN%2FofIkDIygJcG%2FwErAy0ikl8qpcF4g9U3pkNnnozDWfyTfvtsBb2hB3dTbk&X-Amz-Signature=06dcffcf42c96acda3e4d4ca7b410832dc20b2eb5a18141176f5a686e38841e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
