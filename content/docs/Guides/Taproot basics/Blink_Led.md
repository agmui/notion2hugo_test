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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKDPNQEN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpuvQuJlGiJsAt9piDtIy%2B4%2BYAlMgZQjzQS2vGsj9nnAIhAPwMycjjA9hNwi%2BZPl%2F7m0ZnG%2FSnzwfigBcePno%2FkgLVKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9nqPYjZgiDCIP9FIq3APF7LevBqizJMN2%2Be5LwpgmpKiDxVL6FI8Z9xoMYq%2F1g8WqORITrh%2F%2FZIzYNujRv6dBG%2FVwetxfPShNlKh%2BLRlk%2FZdmoNdNv%2F1KTZzQWVBNdBAlH9ksRAzv%2FsH7%2BfII4ORK%2BPN2QOXDLBWZQxnSLV%2FMJ2%2FCLjRwHnT2LRm8vXpnO8I2YxozsdJGFAVP1UCxpWwiDPVi%2BPIkKgEgz%2F0l2CHB%2FETvgH6%2FbMxs8v5JL8pdYKzawALsbB4yLed%2FL3fgXwOfOk101dCTvu4U%2FDYGlcS3GiJ2wndFaDMBBmhT8XpbUahzqqpC43fcf3kdmVRUe32ZjUSaK%2FVghwLLCZyYOM%2FRIHvWp1mymZNCPa3vo9EwOb9Df79O%2BIISWYiz2oBoAQzV7ngfP2619ESbiR614xAEQ4%2Baxfm5WNpA15vidl4RS3gqgzPQ1L3rPWqfjEThrtR6n7nGnKb%2FrcLcfp5uAe78WKG5ZcWMU50pLuWivHsSlgERVjp%2FoZehcFbpd8PxO%2F0mH%2BIbcSOo83%2FAI21FVtaVbIbZiacBZlRT7p9liHbN9L5yWiLSz7saflu0LwffJrHAXT7ILDBOVZrGhmiBQUEGWgYbyASrClE%2BSMxzUFrzmo5%2BBvxCAihDE4MsFDCc8N29BjqkAbrH%2BCjQX9vjGsvA9HhMsG0IqIjHTR0CjBDguD%2BlWwgtUCU4gPcJ3%2FfzXBQaXu%2FW%2BVjweZV7nErVuwORiZSd6dN%2F8T67ft97hmB9m1U22YfIs2c2kUvLySTsM5pFLXHlP320rLDPSHTd7gCfWiLpkDrLpiNl1LNXz46peQr3%2Fh2OOn3nu3QN8NpLgQfHCAQiQszfv82pDKphcqGQPBaYFlD8KHrF&X-Amz-Signature=7005902b2f0d6b7819b64c0fdcd22873da7de956c3e5d5a49e817609fb9f2487&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEQFIBA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4vG5RhJvJXDcHsg2pEazxCX9SYtgIip2KGUapuqBFCAiB8BytOSd5jl4q3LbueL08oaL8IOhayqJh5P8HbIPyoVSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1KLfsH0PQHTNyIXGKtwDkEinTFueOfjWs4TtlNJvW2hKaH8LWoINq1asLTtA8qkAhSvgF8TEsPs6nI%2FhUi6t3ZDNNp1b6tyZzI5klXn7zA9p5642R7nBjXVxQmLvPOrbOVElbGldtvbKn1pTFlAgsyHwapYZ0r4n9avvGCLwt0eF8VpcgkirNP%2FVA9zGNYQ2W9OnS3jfsLyzJxWJBM%2BAfGJWRU2fqdcbzAIedhWqiD0nKVUOAmc5tVSR6Jr%2BnbPBAP%2F7yPvuyzd3T8xAbAyqokMfMQzZSU%2Fd76xx7UMw77%2FaNsQSTA9s6kpADTB3pa3QwC%2FpfyYYwjWlBrZQO%2B6PPISo22PND3W2FDZ7pzF5RHZxkXvhBtel72hb6R%2BxiE4j6vgz7T0UpJky5euswha4eN%2BjaUPftrHKkcfhe1Pg5SPCC2%2FRg%2Bq8NYR1D97GrG9UMfGGV5gMY9I6%2Fe3gS4hKykTUEhoUhdItFpJOGEs9Fveho01YycVs8rCkEB6Odwpfy0k3uDO8HD7tW8%2F%2FULFdw3twZynN2usw5ZZXPsGM3t80MYi7Vw8qXWkW1cDs6Qyn9Y73GJo4%2B7lTCRYFctN88NpSoDYuSRZsn3f1i3hAlqbjMGRDKI8Hzcmecq6zKmLZvkPM6YuMPQ5%2FG3Ewm%2FDdvQY6pgFwJSQrwfevLXIGZyJ2VBPTvouqZ8bE1YcGglD6rWNwkZ47WUhbhBXCgI0blK5NX9V%2F3JvwRpx14b%2FQRa36R5FQOkV70ydsoZTpp2jiWJaUbz8P7MzmZ9MNNDXYRbeQkiGNkzeMnbNww7%2FlLYEWJp4wMNQBvzPuIAU9fABVS1A7JuSmFZD1b%2FPU6jmXrQCKbOTREantH9zrXYLEcqVcu3GhpHJ7fOf%2B&X-Amz-Signature=ea64fae15d8f127cf7dd18aa51e16f8d0f8ba5bfd2aa3dc29bb68b5c905999a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
