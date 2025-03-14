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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NPKBCVJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJmsnGQhKVGqf9FrZI2lKXnvMj%2Bpu62EoFAYNwWpFbYQIhAOyMrm9kNjCLuYg5eUtuckPV56xB7brUNWBzzxLu7d2RKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFnnZzVHQbuhrVKNgq3AOdReakHDpCwP%2FQ74wv86GMx5wmn4xi52CMuXV4M%2FlKCwZo8x5lFDL2ddFFTTwEFOod5bcMeO2POaZvSiCQuCezN751QwaSIKwAQQuKZbl3KsJcSrEQKgOJ423jIC9xaiyHjD%2Fujf80MWVId5eD47I1okAvYn9B6PGLT%2BiLLbyr%2B8mHUzF5mnaJfO3OtACclAHOOfjJ9tjjqVj2CajF55Pttk2NQ1tzWCOaV1Ssl9dfORKE1h0qeFGTixiYleBggmwec8XY1wT0S5xVWSe%2FVQZKBsoKijbruZ0Our0p53DWaW4PrX3paEfBrFWyM3QUDYISgKTu9jxkcwEkJ5bn0w4A8vxmmluytBB%2FEQj4TGdw24NfvnQjwQnp61YMixF1Aea5TxC9j7Dd3dYQJFK3sRtySIMpzxKWrUFMWjuSKPRD2%2BAB9T9CPCyFsGzAVf2pJgKySINu5TM3O%2FdJ9BAmQUBJlv9NZnE70ciWLsy6aTMjRBVqfWcGzXNf2xZFGeSDztZcgdWn4gd2GtnhQBzkaef98jpYg9xBNcrBGls%2BOnNd0FSjYe8sPn4%2BfQFHVvh0eMADEcOu1LyEwSf1p5Ktk%2BEv8ldY56kvKbVd3RMoWsP0nrT0cQFnVsAO32541jCHxs%2B%2BBjqkAexFMo30S%2F7CcsJSKibHUKJhBXG7l0gfTtp7SP1z%2FFVg3KcB48%2BEWA86Q5G1fKvrIwooCuVr%2FaJiaKkyWvHtYuKB%2B7zKIMh6YQ85bBiC43uJGnaJvf8RPnbhyVtneO0gxoo9WFlnG%2FlVZ6T%2Fitj74oC%2B9GZ2vkbm8COQIQcOmVBvjISsyk5ckl63gj%2FQ4fP1y%2Bh37510xFwTuKQBXBt%2F79p5WW%2Bg&X-Amz-Signature=5d001dd47bf26e168d20098fa675e1ec361c160a6df5d2c7daa25df0e584e825&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLPCFVO4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHbpfrE3yHtSi5oblEVCZHN1mjoenZJLdHf8N%2BKT73AQIhAK%2F4eNUNqtHHjvRgAv7DA5G9PKw0MxUCt7ssez%2BpY34BKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FnmdCt3b%2F5Gb0z8Eq3APJ1GFQT5GyjMXskHo070J7go1d3OoymOJiZKs2pnvuVTC5Jsx9w11p1fEpZafO%2BKmrFE3VXCpQbty4v3M8BwasGr4AoAKliynaJNrFKkKxiHlJwzhpMZEb82h6onFWExULH3X8f1WVCZ9Xi5SpVCagsvcY2%2BVoJJwPyWGXq2tdf3izPQN6XIj1uphhDY0i9tEhv91KHhFD8B1j7Dmb7G6g%2F2Vu2u60ao9%2BUXItLfEOunUwIWOBwCQ4j7PccbkfXP%2B0Mq7GXHGCNGX%2FOG0x7vA21MMY97RR4VdgwKK4b1lJPFJgXzkeiIb5P6KTNvKA5Uqu5DKUsV5oPpMbGMYnnCplmW8GiF3uVhhB%2BglR2B1RpwXgxOMilyLGa%2BsJfNiRblrG5ad78EJ0lYLtJb%2FJajFFY5q1lmUg5r%2B3M8Z1CiaLYt9rsxUVeCWQRFr9eEpV3KhC9RoQUkTg4dgywgPiohouyi%2FQxxyeE0IVA%2BefderUh4nsvwNUnRTnqiN%2Fl%2FIoJ098WhkK1EE8b5bkiRLsKmJFr0OMEGJshpu%2BsetlYKf2yetDvqh79Q0zexjycFfc0Ix%2FrK4x1ybSAjW4Mj4%2Bf597XUfqoXAbrO8JnvdVDZTWXjafDXymgb%2FpJG%2FeZTDTxc%2B%2BBjqkATgQGHU9GWO23qPUmwU3I6AEEasVKUZ2Pz041PU5%2F06EbyJFODEY9Hf9s7YPIFb5G4booLyXZwTUqwY3plMT%2F9X8l%2FB3flc2nl82L7MLGCZkVFDCil6FDfXr24BFYIx7dO8hI%2FG0KzRYBCx8LtdRWCVUDn4YCNtU87RFSCc8GhVFcYSu2o1H8K752esMhR5lEn7WrDgwCLu65mkpfONjK%2FNwqJhn&X-Amz-Signature=f9a5cb2330b81d8e7cc63087cb223912750a4bba7d1f0970a0f81483bdb1b2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
