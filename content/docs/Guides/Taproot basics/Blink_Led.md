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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZYDFGJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC4poLHE%2FLcKAGiOwsIUPydKGzAGaUfAEiryjAtDsZZUgIhAKbsPMgyRrZar5p67q0OwoR4zt9fX68gu44uvE4yAOOVKv8DCEsQABoMNjM3NDIzMTgzODA1IgwZc%2FzLUkBkuGO51Xwq3AP%2FPHL0nO2nhOXNTe6v8d5B1PJyblDf%2FpqdTZWZQrHosKKzDpRuYO0%2BKW%2FvL%2F7shDs5i%2FjOzW4eFooza1fwkDYBWm7vQeVtUw9FDCW2v%2BqCoz%2F0Gc1zkWZoOVNomfWLYqvgB9b%2FI63mhDQ0VcwZvw7bXnTtyL6LQfjZaAXsuJQuDGa4YE1T2%2FUstyzif6aujDVLm8dA9sLk38YCU%2F7XYKN1x1CgbaAH8aoBW9jf6gVGNyoUEKG9ksKhS1AoRlPn3JzqJ7vgGRe9RBW9f7A7tIOhCCz%2FsoW6VSWD25DjkmJtb5vzMfR8pUhcWTA2cYp2MLR2i2aW8keHA56ZTN3rREHwZU2aSXqBS8RrfX6TWgZ0Bdw0IyaH1U%2FGZvBUUSmhCqGwNVWAJ9Qd9Beucc45qFd5K3XV5USgIQuGD7RaEeOZC4ogF0jkHusgEOSL7ozaCau14EEHbbJKPmAKXIvmfyjYAMjZ6q5OnVzux0F070w8WVnj%2FNN8e5N8uwHaHgHZuUmhvJdkxxcL5IX%2FAjX2CCLow7VXGF5pY2g4XiqWvoQxF0FdRDV99OZ%2B34XGgL9assVfF%2BsFUq%2Bh33uVDWFZhEXwrUY3QjhDkNKhbUljgzUTyoS5aLHs4fMseL%2Fr8zCRho%2FEBjqkAcsYq0vnuG9antMBp2IGVb3A%2B7o8pt7rYSAR6LNfmXRrP6wTkX1w5ZYSDLwAcDpo1uxAg1sdaBYwt5PR8nOSuZN1Qjm5WF9cLFWlpRaXKXR%2FJa1VKRuq8%2FoJgZABcbyR31YggEIvy9fbp2yKu1mQzoQg0qWS71eNUdR9gco5PPzc247KMT71dHkugyLKX1hENiUXe8eZByhH0gptwJvGX25WkotJ&X-Amz-Signature=445ad18c7416b338525089d1c36ea63ade4ffe69ce38ee74f45f3f7c4f8ca66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJBVAK4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC5BCfBomE%2Fsk5TRdslc%2FWoJpqBWpJCGoUH%2FBUPAhFdJAiBv32AhDwgBQBcsuqJIkr41nBZfOcXz9hPI70HiA2w39Cr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMrBZ7HSZ4Z36%2FyglLKtwDMjawiDHfZCCgUKp0sVpPaPzjmwVhx6B3wDUds0BZ4bWCjCALhxH83dpcbS5qqe4FDqcnlkP%2FIkKZTsr4h90XVgA4UAZHhLpkEbSfGOmcdD6p0BWlAuKjuP%2FyzYH7nLX%2Fwe1DwSGUx2OuDjfLIjPhcktGUfapAMB4WANBx1k5i%2BGDoEG8SFdHTd8ITwl%2FpLP9D4jEhNP98f3qCAKjtnk9nLDVYtE1JjWS0atawu9rozXL5WjshEFhKKYIWNnVtg002p38POpVhUU2JDjYgAEE6GoCPE4wA45aErdpgzVzcEOtpok27c7uMH52N5HV7R5xHhDjnZ%2BH4MdDonQHfTOsahsNfB4UGc0K1MkSPD821DcSzYAOKl2B%2BkXKKszVZopRahI0dR%2B34U5JqPguyJuoiZZgGIgn3clIHA%2FhE0KuLECGn2qOMFMXZj4p9nqlly7cp8ttr8BcIaKexuKNr02rSMuzikHCKzWlGfLVrFX%2BLARk%2BcdCEaYzOX6N1bRGTcfX4jlHgyQbVZy7BOgFCAJMydFnOtr8MF5qU%2FelevAhiPwe2WrpYowU34a6yFWR4exDxgNz6WE%2FD%2BWJTVVZtxOTonmuLpn%2BG2Qe%2B2%2B2Ovkvys%2B2sCqhB9vSh%2Ff9RP0wq4aPxAY6pgFk7tJFuIQI%2FrpXusvoNPURAuC2QzZYcmU0gaIKXKIiDthFj1nNV4K9GblmdOdr1DVR6J8qHCLg7TJX4%2BrBEN%2B1HGgjRpSmqNMMmzgyKEf5JInl4XKKheIukKySu2hkVkJPL3lVH%2F6KSNH%2BITmfA1OcxTfYCe25gsb0i1bEv690SG9loqYHkrrvIs5f1KpxWQuksw14%2Fn47l3RTJ0WChf21%2FaNs9hr%2F&X-Amz-Signature=aad73c403c605440f69947f74f3e3fb56b6be45d618635460da2c02fbe5ad212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
