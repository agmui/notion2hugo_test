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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26QVTQ5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVgkyWDH4W7C8Dhn8e0ZJoQdt6Uh69HQqU%2FRiMrWyl4AiBCwBO5FMx6lY4ZyouJiq7l3Vj2LflMwrvHkwlKcnu7dCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM91JfNfvInaOgexxXKtwDUnb7Ty9JMc04Gkxb0Iymsx%2BJP%2BPy5jkmmGM7hymPDbCsHggyzCaAKnIuXHlqbsPcREs416tTWeRF1r4HnWFGpp2REvEsrajsnjvLA%2BvAINPUp%2FyT366diZ8wECwDxUgGKwP%2Fs1UqF9lWhvAx2dBcUmHB4xYg3crXuGlvFWJpAtCF6CoN9VeYdckNGl4mHCJb4t%2Fx9L4Hg4vQSBjMsGVxTFO9GetpnTI5r6W6a5dnKlFg3DIbumwA8vUEvU9vCi5UtQykjo7v7JyteW4TUob9YKnXgvKTiGpgCn5Dt6hxwpV2QjenoNmIR0WR9Lq2VngoJz9LNqb2OiqSqqtLLYdQYNyezlTkkitHXhth1s8MjaZN%2BVtC5RW4SS39gHxw0I9SETAtJmxXQdjxxSLwc9nBe99QueFxADKmw1sicbPRyu2WNfQzUytP76iJzm%2FX1A1LEvigZPpl2U1zXpWo9%2BN6F6H73QxegvZ%2BLJjsKGNb%2Br9BadJrpLcriVHUZxncIDp%2BFe7bRaWUGYlzrayJTu%2Fa1TS9MQKK2keo1sSevc7Evvf3o0Ry1UbCBV7ysbjc4305fiDkMPfkHAcXPfpcSIuL%2B86SC52NHAdFDqo231xrzgeqoLcDFvClmhBqcIkwsaTNwwY6pgEd8wTOOq%2FH5TeLDPTwncdB2uEx%2FgX0%2F4oGW0r1PlogtB4WpmAlBt0oYaNvF9Dias7FI4tesIanxTsQi1ToGKjLXSv8nRtA0TGeNALay0EUUXdMoyqc9YsfDhHCPAzgX%2FLNMkeOr1ZBqNlX3EwcVtxDvPKEQtpywCcWarGkWQR1F546jZLx7qkEa3BrZ0vAoTGPXZGgKqSjMbwRmlGl%2FvLUXrM6cecO&X-Amz-Signature=8968408b496efe065bad748bbff582c5f1354df6b21ea3c19ef3605258ad3637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLZL2VX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNMSEniG4k3vWcXrDLaNGn6HkmHjR6szkPxm6Qfj4zVwIgSHybOa4UnPLkkTupQgsEjrQYfcpsfvabp0%2BoxiiNWQwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMilF91SbUd66VNjjCrcA6BhkwUHo6nDDT2HXe4r%2BNVJ7X%2BMVa7NAhWJq1GuuVXaWk1J7gW7%2BgzpZ8sfDIq8AyGlRNHUqS90MXeUDc%2F4L3GBWeb0DEsZANCrHpgS5ObkkKpyfpL%2FLCkPz1LCpTZuwX9PZawtH%2BFz8sc9lFztuqXwCNoDqQkuISM1QYjjhQHJVViTkk59fSDKj3XYe08zRXkOXg0MxgFhYphIiK%2FLqqS%2FsANByOkHeSoeD6xqbPgAubce%2FqzgEp%2Bn4GdrEByFPXueO919QkejktfJL7VziTTXrmdCWRYKlV5cLTy%2FtjPsP4Xt%2BS%2BYgMPoiegYx6oWeMP4RlpMnr6XRVOsrSbnbzKgvRRGe%2Bo8XGQ4taeIzOBbA8FQAOFqTPizr8owZc4CwsXJnM2vLjphM%2Fb2t4T1oD%2BfUJtYyo0sSt3%2Fe2UAzX%2FX0fz4rPqeHRpg5LLvo0%2BHLs%2F22gfQdiK45F6rqKAmtDv4Xa%2BM7DwRQlMMoyVxd4XLqJrUBCeyDAdmy%2BBQAUdl1OZ8hBIUtKOyHwBHNQsUyEZsxNTdCVbmWZqzAzaSLOJC%2Bfh4WgN3Fbb7sTtp90XmK0hZnIECEcF08bCU9rTjsF8b8H5KQkUkFjZhD0UOsRIUbFjUEVDkDxLDW1CLMNekzcMGOqUBvcqTK%2BZ2kWEu32%2ByM421DHSV0Doja5X6z3MFgxutOGRdyp6Dr6OCin7lIHyQwHUEPsCds0NYifq1R2TICTQ2rEMQEHLMBu5FAZsyFrgooMxnAjETW%2FRicnuhCHs4okdozevO8Q9%2BqpEdXZuHwvJVFmKggYHzbz%2FNHd2%2FElHmvZnSf1QCRQADTOaAu%2F7j4BeeEmfWjLrto98VHv8aeHVYeUr7XW5%2B&X-Amz-Signature=431aec57d917f5c7335b3ff110e141e9f594629380fb34e277ad6988c6911832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
