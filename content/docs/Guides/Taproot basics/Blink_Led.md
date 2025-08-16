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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOAODMI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICHLDbPmBH7rd70z85XmW%2BYD7omhWeugG57zhk%2ByrsqNAiAepPWzAqtUjUwp2WjeaiCvYjMoqc07HMS%2BQfg2aqC7zSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMZVzr4U4arx1oHgRcKtwDqMTBsNe3ZYOsbnE%2FJ4pj7QwP0y4UKeo1qgoimcI1RDBFIJr%2BwBV04j%2F3MgJEN5r28iE4mQKR8IG5m%2Bkc3Ws7FT9TdTC%2F3QygwK7ZykHnSE1N7Bc5o3pujfUgIJjfULMS7U9ULcTPLehSmLLi0dBHDlMKuNkEBpUxAu0ss7tTitFgPmzvbhRfieEnD8zB98i25bFs0fEgPyilghDlGvDN9Yf16SGbphGYTKQ6XqwbXwVgHzixYygTp7X3zNMmzs%2BagSfOGBpFAlS%2Fe6%2FCwJF3NlkFAzByySq2%2BWjruTNlKTQJZAfI5MxuTmo%2FciUfSwuUTCfJNwqXaOQLStS0ejTEiiMtZpFdDCYuH1JVhanxQLKw%2FwM6c%2BTvXTXaiAZEblaXU4XDRUU814UInUj9EuknRuzwPKV%2BcWsO%2FXzwl2fMOJWVYWDt8iqnhWfeC15zCFGhVCVNUbNR0EiV%2Bfk5AsYKTVktsFC%2B2W6OxLQoh4rEyKmVR1JWubfUgRYdrIaTz3UmIAaPpG%2FPlp2XfKGChP6mBZhpzpqypORayFKgQ50nckDUOnL7V0Th0rzMI3ENl7kc7xU7NwqXv%2FinDhmVwer%2B99L5MjmJBSVuCshsXH5Likim%2BLNnSDjxZlouiPkw4ZyCxQY6pgGNspo3cIr2nge6W8vniD9PUZw7yN25zUUjvXV0Whq3%2B0P%2BlbY3PZHlZGGVmDGFcnzMgbnFy0mvlfcOejRzhwDW7Cr9u5DeXKM3oUwozmF77XkteIGh97xtRBHKd3UcUyXkPcqgp8%2B0npCTgiZ3OzGQn9p89%2BhxJFa0sDr%2F12NxUzq89ywp%2FxDyFy3c2gRrmm35l59gbGVfkcopfuqxIzNrsPtRhs52&X-Amz-Signature=ffd445f0b3a823752b593fc72003cbc9a70eb48c9e928605d4b40e6302731b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM2NX33H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDB55feQAN6uoEbwMkDdLGMgdpOxjFuia2BnQ%2FYoS6VpwIgF1EN9cZlDztOmK7ugoL1%2FOxuLOXvhu8nH%2F0K03xX9I0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF%2BtovR7ntnkvZKofyrcA8AXyCc9XCe%2BdhjzQqge%2F9gNVJ0XEwCmuoAlYD6khBWYHty2EqFR27RgRFVrsAPZnelhWxmcVU6L5sAEf2oL%2F1g0TLkmOguAE2gc%2BdvS%2BXsHiYy5xRblXPFBj3NIUwG%2Fwq8xbg7JNCf8ns43PELzifm00cHMP2RIq8CoJmRvRU96VNaoKV6hV2pp7TIx%2Bxutvkw68lfMptQxdPpBi7GBcEbq%2Br5yudNIaabs5Q5mXBgecc%2FoGUPQYZgEO9DwnMW5flCVcy6wG%2B6VpUljGPiqTWMC0MzlWLvfjc0lU2d34vPIFTzQbUmJfdpy2%2B6MJyv6Hv5imnCmZdoJCCllZQ9nLKr0LTekvPG9ap2DbcUyorWUed0p40GYN%2B%2FcgqOCJcRUpnT1aoG2rhv7p%2FoSQsVIxEAEmhDMbdGyt%2FSmn60wI7HMI8T9c9BPDF5LxZoNbslFqrBIXnDLbM5RAGXCw25pXRLQ5xlrmL3SrEP2JIhMo4Pmuaq26T7KkABgy1vC5HkxV4EuuJ1v4%2F3v%2BuhvcrsS2UJbpLuHGWLRDb5TSTg8krfdsLZz%2BkUpqHJOSpXo9YOkkFbC%2FogJGCYvHyg4C8%2BPLzzxAoEhAFDQks2IDLGsWjoyacCqxjBSmjbB4MJsMJ2egsUGOqUBLExrsZ3sEyBB0GRELJ5NyC4btsA3uBhAgEuw35Y82u3y2LpeBNS8fLtw%2BRJeyKybIOEWhSakYdkOsb5L5mhVxHKWNVDvhTx7wdpWMFTST7jjdN4tQMDJRjdxM1gdm4O1%2BqG46TxlUOaztgb2lT5ayDWcoCHgSC6pmIj%2BDn8L4xFk5f5UjfHrtQ3x%2Bl53ciixziLdLQjDGeDlRSs%2B9SjfaAzBcav4&X-Amz-Signature=0dbfc496bb953795ed40423cc19b2717b5e67cfe398ebb9356c2297659adb08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
