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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D6FYLFW%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3stZrGmb%2BO2zQCTqnAtqxMZOGh1pOYh%2BSkgL4Scm58wIgTfikETMcLmJe5TSBWaKktSejehctTc7j3gFcu8aplnQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSoQ42%2FPrrPEXVz9SrcA0tIGUvd4iplrrlibAE%2Fe1QUjdDjZehQwKO4HLrQFQJ%2BmeM8g5gzbGyFavquV2xJXZNGdKGW14OLYUJK3ECmosK5bzuTzE844ykS83ITxkY%2FGKJTufuDsfBeFTQMDSBqwcEy6dkP5aP1V5YjT6CpAx51xv4mOFTgZ3w6Xz060QyrLu0uXV5L%2BBydWyCjzsxEy4U64DJA8XxyUouBR9QDwNQc%2BcYbuKe%2Bs2uhCujyCXCuY%2FKU0zjqvOW1rY%2B7pnumFio5FPMkQI%2B4q0OCpniiXiwaMSmZjcidTyBe1J6eyzZJJATE0y%2BiVvexNjtUnr0Lu8wX64SpqQOf5ZlBBns2%2B7%2B6BLFpdL%2FryviJ1Z%2Fec8MoGecNhsTIMk9ioGAhAyCnBi3xjaXaIa6gnPjrVzr5FFYS%2BLL7YTAMx2W1D9gxQMGyYrT5fTeb%2BUdA4NTPkqwQNK%2BMPkDGLNbhYTGcFFQucoBeJ4qpIBAwpTsugKSE3eo6KHYgn61CDWt50RftqQj%2BzqTilcwFyrAlp3acOb9RuWb%2FYyjV8Q1AqSuyZWZPfn7u1y%2BErJ0RNQhbDdSDWOYM%2BG6G2ki%2BFRHzpEOU5BZwZZPe7gvMHJjmk4EJvI0XEREbHaAKVlSj1UzDcRYlMPPn3swGOqUBteriOSe0E4GjloN4stJ%2FrKegjs2H5tHrWG2QDiWbVbKZmsTulqX05RwnlFl08hGM6Hqu%2FDKskntxj7eLREevjnHYauo0cEcnNd20zaRPwUGYasifHFRVDPDlfVwviZgQ8XMFFTegu3fJVGqxVgMBy2XRQN%2FQptCaZXeIES%2FwBLz9AmTakLKIkZkdNgPG6GGQTlQGVVFBmFMrmDA7cRsdD1OE4V75&X-Amz-Signature=f9647eccb3c9cabb9cf9ead0d0cb47bf0c6311df6bd5bf568857c582bdfb4f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67JZRIG%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUWLIHLwW1DopqHVwviHAy8UX6lYGbB6%2FOv1iNavNmfAiEA7oq6CJyIcv9%2F89gn9TO41nA5BfFTqVZ8CTsGic5eaKYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbb1ghNzVQBhV9iLSrcA%2FclkePSrsmB1MJCoBXCwPtrwY11SUWBGmbmpCbdZdlsqVp4M90nE5QGfxdQdE%2BsBP432gjg%2BWa8pAQ1hWLSxZHAcFcUq%2F%2B45H3j3p%2BZ7XC4cac4h4cdrRpoJxgqu64NPvuCbmAeN5JADkNHjpUfmUrp5A46xKkisG8OzaUkgw8XDEAAeLBt%2FcAE%2BA0nKFj1jV0lWgWibm9s6qvdCyb41ZoF%2FKSxrVXZKJ%2FCUYbgpxSrBh0r5kQ1YMvECJr8benO4XH4VebnLbguGXeNfYjYZV2Quk2I%2FvMHblkvpkWpagNImS2hzHxF3zBnBIQngNrNdLqHE4Yz5%2FxqtO3jqANDTVljsN0ws5ZxJ%2BgZpfs2nIyRZcTW6eWASwXcZbdcwszDDoeLAKMmy6Uju7nVwHIGDVbyGbi8j8PqDT64aZEU9Xj571jLLGaHuuW6Qd7xzLkX2XMXtif98PDUCAl5LZiQYlaGmtFzYBjiHAzCofqoLAvPzmPVDvMQbV37Aprga0980ro3dImcWbdeMSIbVmAQ0nwEV3syIFtfXmEUIL8wVKXwYztTcJtq7Zp1zQXVBy4YeKI3WwA7aGC9bQObnyQ%2BYv3BPpNonOs0qacnCTXhn1XJy0bwsCS16sSFKlDhMJvo3swGOqUBD6WvPQC0QcrlQ7hNK%2F7FgAFlLf4Twqf8Ln1YK%2BM2oob1GOG%2FVI18a0BDJapcVQiJxI4gr31JarzUQn74rMx8GB2VCHOhJqAv09HoKPSez1FDWWM6%2F67hXC85BhRwAHBskW2M46mUe0ELBzJwQiyyjj5J6pW9xI4tIP48NMRl4keR49FX00GrYdcr6KS%2FXb8gyNuM%2BlaQn8JPive38AyucoKB4W7X&X-Amz-Signature=7498e7d146c967bd2a8400dd988c9d322f29e8031f2bbd6fdc1f14304f96c4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
