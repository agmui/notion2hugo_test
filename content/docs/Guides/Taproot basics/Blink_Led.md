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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATNGF3Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDkmwK7MG45GufGwV1lDyC5P3A%2FmvlfqQEWwUiHnpzhHAiEA%2FJIS3AztKTnuvvSicR3dBERPTk7yH2%2B4J4HtwmUG44IqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPumlUZpYhwczZgUFSrcA5Qn%2FrdEoa7R%2Bq7uY3I7fkrfr3nW%2Foo8Wybgjm66cAFgwc%2ByZrv%2FHwxSNrtwsNSUQDyBVlyy3hlEAFnEwCXiKgYa%2F7t4D6SP0cE2XQmltWQ9l%2BjCFS3%2BNXmQTHYI5DVDpbHUtEdmN4tfbhimqLER9i2MinEdla7lYj2Y6ipyh%2BEQn5hhS%2BZ%2FlcFlb6WB8LyqayeOSX4Ss9DLbfyUcAdbmW4JVutVGez3HkQdPbHmJpTI5CjDUuvZ3O0e0krvz1ZyoOOVq9mOrip2wQIpyF2m3ViHqT5CkRNhvtTmXhYfBQgv19Mbct4CfWLTydIpVSW0sJN%2FiaORSlWeJo61HI1tUOM08VzbfPBl%2FPqZA99bDfcE0EISduK63l47JSKzMbH8zQjV6wfhSASoPtcL1Vol4lc%2FZYS1ClMKLNVZP%2FSFOSA01zFHPHD9QgTxE5iO91ZDYu1zmtb3u7xb9Nnc8Ge2hdbSKO0rRWUbGSw%2Bj1r%2FvvrsqgwmZMadaWWFXgqM%2FTBXII9jvOerRLwOKTGteB182hiV7sVBJ%2FBDAsHAjk5TlKmHc1vOJTrhCgti3G6eWLuQzPaJ01a%2B2kJZ4dd2sUX3LMS6GGMTFwTt2ekkyUUQdlgAirmbdQds2oaGgdaQMLrjz8AGOqUB%2BiByw7U50bxW4CjDWnEBB8%2BX%2Fjlom6sVIQkv%2BYpRJC4JCuCW2X5i9oAgOfvZ8SUL9zhDvrfhgdJeTm0qH6C3d%2BZOZQr4t1nE3zP%2BALsGWW%2BeegIaOGVk2x5212mYninkcSpeXuw3QWqJOmZ2LbDRb0uX%2BkL%2FLJC05GPup8o5ZwMa8Dmr%2FoSk9tCxRNpp0HkgcRbzTSWLKJP8UN8aePmPSl9qgdWM&X-Amz-Signature=b481f75930f9b2312e151bdaa113c3a38607a7c7d03ca50764e6995d349aecb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FTOY2U%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDrzm%2Bbui70BMpRN3mWYHGeDxu%2BFh4VGXRfXPCubrFVaAiEA8Y7BTcVMNZ8rz%2BJEgAiGGZhY5FvKNwG8sHNE9jN3k5AqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3qmNCVPUT5F6Hm3ircA4S7%2BQPzTCljn58XG6NlBgWg6XC%2FrZPdsCCEIAYnN6Y%2FgzsASkVfLVjToL819c4%2FBxSa07c7mMtRAMMj0cvKaJvKQA%2B4Lf1mAsKxT38Yy0FKkW3ckszlQnl2SPxO4aU1%2FZjZ0T5N7pvFGBiyHnIdca2hQBfEJDtxEIviMfY1%2BnuTtpxkQY5j2ReSoIkh1klzq8NyNZrA9gzF0j%2BSVqvVfDTU%2BHiUO%2FiHZqH2RFuOfuc8cV%2FMAyAUR%2FxlKReQoVV%2FlZTL%2BLHweXjEuVAQo79e0rfOg26H3Ejf2rqMJgDzdaDMOqwhXt7zRrCTr%2FtgWbIYGs6DYcM9R5PoEENHkZWwnfqxvz7wUfQoeihVwCbFF1WWMo8Bk8gcMRoEk18n84twehVw3mTMpNE37yjDdfaBFTQOeVmNWtJpucW0Zjp3t%2FU1hFWG6OSdO08CwNNigdfKiIlwdJNXCxhsE4ZbLt1TdD0xGXRB6nbeNgbJqFf8iW2YpoQdcewVdDNkU96XspbYOIGgFZmHKOUqmA1VxReLjNImAzchjNX%2Bq9%2FZIfHC4%2B1IeUL6511SyCDqymhYhmmvYnYF63y3rf4sUFLpn6lUtbwSlV1Wm5IQW0mE%2BZgKo4F6cNNMeSVLKlbqSGnFMLjjz8AGOqUBhCTS7ElzuHiiUBjiLFZ7pL2O81sOduWq%2Fkwfcndalds2WXLTgJkDyT0aF8u3GfOZpztQ0VWMtZ69Y%2B8xfkEuSpGlvYkjhKecxZDezkRGBprIAaaxbPC0KGL%2B6DIPrB8NoJl7uc6BC4Gl9nx%2F3KMFUrLyjin4zc4JS2rMACN1vxJIWnuWGzSDUY0SdDG1vDhbHxvs2%2BoCUQE2PEzqFGPfkWZxZS3Q&X-Amz-Signature=d2da84320423eba8ff8361e9e26fc3425da1b118d088ed80837f30a808d02e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
