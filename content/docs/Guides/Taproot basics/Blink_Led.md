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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBTZXDZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLr7E6YuRtHqS0wIB38K4HZ6IpmrojeRxlXbaOonAnNQIhAPAGPRPfXQ75pOeZ8EMggx47vk3LMU%2FsDZ8XpaYv%2FmqOKv8DCG0QABoMNjM3NDIzMTgzODA1IgyCH4KkeHWuXQsazFIq3ANr4F0u0X5hFqENyUM%2BS2mIlK55EpOsX%2BmeHo5gzZpvVbGJcmgeKU90kJZ2hk7tW9%2BWn3fzhH4u2qABjisTjlg6%2FVRs7UG%2FRjoVA04AwsCGoeldN4qQfHM1B8X6n2qHKSTbYj2Koct7qlKGMSi%2BAcMDFlvLegZ6A%2F5J6UiLRleYNf5Y8tTAwS0vjWZ6yk3HOBAKhRpqqoFZeNE1aNXTmQ7kdAxlbpKqhuW0l9qm%2Fmdlk6Cs94jeA8kNnB%2Fl8QXwsjlB80ya0EykwrKIurUBXkzXj%2F2z0VaiXao%2FV2bd3jrP2T%2FVGGf3fxH3eSzHVBkxWXjmtbH%2B1tUW8FztyaTfq08WH0vQfZKJGySDNQDXqKuLyDcfxROUXLL9PRgK0c4HbBxTOlu15C7ESvRpbGGzg%2F1Og74T7ruXOQPOrsa43K4Y0kJkh7HdnaJEvcZU0tH%2Bw8n1%2BbSf8yaaelr5EtWPf%2FWlDEzSZzWjt2pqSSL9qAHrqvB%2BW55phJCMpnW93SXFKAxulIuPA836VlnJJwEaZsOUITC5wAIsd8e1Ls0RlFy4sf8Ts67dcZSO8kmU9zrYjwfmKTRwS%2Ffznh8kE1Ofrdt1FFuIOPfkRofnu2pMWH27f5PbMUScQG%2BiAGVjezCXwcPCBjqkAZOvVqhO2%2FgI1G%2FQBKm1%2B2NJ4nyY%2FJokgVCG4c1qKSwEDDfInNeNG2eQjRVNyuVAFbgkR3nNBUZu1vGGE0%2BQfEBkaRkE1TlPhK7igZJH%2BntfRn%2Fvo0shKhF8kCtQ8zzrxOyoXGw61wDK6QSe2DqgyAqn8NCEHy255y%2Bdc6CocOvJrd6jsqmFG352KziGq9m501ePUDiTU1j4Va5tBzAEssqi%2BFuz&X-Amz-Signature=94de5fbd9a13fe970bb799d0b7d7e03b942eac98a94b48d105eb06c0ec27d9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHBOSQO%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN5hN94OvPzoRRjunsy2VIN2gFi3zEokezWv5aSlH7HwIgRrWPV2vtku%2Forh0Zjrg57wnI%2FKhA9x2NX8esxK2aIwsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOvcjFLejg%2BReVNQIyrcA6tDbEy%2F1DAmTRq%2FS%2BNTAXLla4a5vlDCBzzLmEY40OKxpCAEgwXGgE45BONGPJMZ%2BegB5R2R3RklKoxmBNt0zCHegmnDVPW7RT44K0iu8wP7Mfb8elsp4UhBm3wiKrAxGccsHBL7DTfiOScS%2F4yBUyNazsck3vpHInO1Z1IV5jdNvcYtIzmNmBIAK89bwP%2Bg%2BPWC7orGHfyEoW6pvy4UezQEPBgFxnksgV9n2D6wpRsAgu1NsWM6CMKzlNDJA7Wm48EHAdfs4GANkTYGkg1wgAG1g6IPXR59EYpO%2Fp%2FjrmNBthd5cYAxSpqGQJ2vM8ucUWPYq%2BoAZe6UMwSPIDO5iYcyMUTNA8o257PRNIT7hdtiWNi6jO4uFQE8srxJ44kblvt4xH2Id%2Bd5uTGDwzEPQByshnjyNzNPS%2F3A%2BwIryfurhMjbTHqHaIl8B%2FIVgok7qCEN82bACzswvEfroAgqWezF229GQz7ncwWpOYGxbEzzr5urXSdUlXJsjvo8hpkQkRgN5DbBkkS2PTat4C6WoRX38p8RFdhid6qzDqGUdj17s0okr0WlLg1xouUeFyznUabcXUYV5VnRxuhcDXMB7rvzp5vkiXh9ahCfqCHMstmssaekJZVzpye3DoeiMObBw8IGOqUBguwWAzbeJdVfgactSDyAj6rjbWyfjIOFkrPcQGmPWmvDKi2Ahf%2BkiwVijboaGk14yA3sck7FwJH7F0Zid0NPbrucmL9lLeJYrTcCy8sjnGjHfUgAF5LAF8tcRmP4xXAzdX2wTdX4K55sBPXpXkwRePWYbrafCF%2FvRpoz11OyS3U%2FUvHNqiKDdAn5A3n9T6%2B07CyS51cF5aaqqHO30jhYQrK%2B%2BM3O&X-Amz-Signature=5aa920c797824f6d8ce799edc9f9f91feef9e144b5088c0f9952c3f06283fbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
