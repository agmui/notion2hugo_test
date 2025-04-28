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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2OEFHX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5ouQlujkvYOmps7hg4KxB6cmBljhjIfPTEj4Ks8UuIwIgfZsEujV7v3dtF8lTtV7jXUZ7%2Bvr0z5BaY4DhsA%2BhzOMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOXPF8UUC7JhK5S4OyrcA9zugipz9moch5kZ3G1cXzzymXs4VdH275T0EYZSmtv87YngOTJQBzMYmukSNE8iJ4H3mz%2F5%2BNa0ArcsII1Nz7j%2BuKUSzNu1wXOkFiviTjIC%2Fttp0t6IiGZAnIJtMCjOAInU0TCX0kjqBp%2FhaFMNYaVYc%2FU24OPWSheCfJs7FqkbacPwG5kkc0aptRrduhiqU7Ph%2BSxDG2h1WBudhxjR8nzPGKP%2Bls6uXdv%2Bnw86at%2FyuOkgCvmDe%2BoR0dZT1v8EwVDcHsoKigvY8nS89KLSc7xSXpc0knUKVelRMqAYtlUiNGlhf6QqgQVF7TFRzNWRBSP8st0nezN0%2FPzLpsDhj85qSqHOICs%2FtyoteYRmg6rMlMU97ampnza48dhtFL8vhLEWvB%2BBqZKz0NFyDU0A6hy2r9CXbFNEYnPDa3DPSil5eKPMBWW1STXkJfFmRaSqAy%2FF4hkHe1rhEoh2n01go3ywW8mxIBGf9NgdB73NMAxR6OYsNIH%2FuUbgqfkFjIX5Jkj8Ci3%2B8Jvo0wKs7Rqqwx1KJ5cw1wArIS7T7qvaWNfLUTX6PKFQ%2BrHpDztbxKMraca24xb%2FrrKIqZl%2FfzJY4uUk6E4PKrfeyS3xB6RvRZrbZe0hQ3nsO1iISCXtMMfWusAGOqUB0DnuO65YG8QXOkyBL0bDXdWKc%2BYEyC%2Fj485QqXEv0szoVAIz58JHEKQZ4UvK1hjpdxROuZuYlzUC62j2OnKGeaDT3gJBQOsbz8fMal5AlwHxC4eKItoSbfqTrTeE3ZdpX5opwL%2Fp%2BgzhxJdb%2BFbYtxjOxplqaPa%2F%2FX%2Fji%2BLhHt8Hld4w2c%2FUqMkR9c9kIbK1BZp4R4qPhHUDOBEU0bgfBHto8Zoq&X-Amz-Signature=c2f396684f1d4906c8b773f0fc00c2f7081432516559af76c231021eb17e3190&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDTYFT6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvDp7pBR5iHdSdj%2Bn0IwJI1Gc9aDSOqAuANX7BN%2FMDQAiEA8cgdS%2F%2F6skeoA%2Bs1h8Zy5CPwd%2BW6UQdSlmZsinOW7icq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDELnTaF4I8JGFN320yrcAyqqp18FxEJdCS1kwzs2AsS83mpYJzy3XQD2i4gIWO1iD1wGCmfZvbJ6Gwfm2rVyhwpcEXOF4VulyUaY%2FUV2%2FWT%2BkOIumsjd5GqPJA66uPtd0TEQYVkCP4kH4NDJcwMjNk35GP6VoOSSV2xEzyuX8o5NZbqI6bVBn8Ql8oD%2F4fazupe2zemCAfwJIIfAoGefpD8fb7o3yTj2Ms%2FvVbz7Mkcb5w6a9fpGc%2FZ3R51AxS%2F5IrshAjab4jBdhGmqUnRCLGhheOOhyoy8ioGEGSvIpw57sODazF5EifXF2PTjqH4J1BblsJ59FKpRLVL6raHVCfkNf1mpB%2FUNKeR9aPqV11HLbQYoKi1iV%2FnpvUmS1qOy1UFIUuP9YfswvoaMHwM1v1ZTwO%2Baa47080jNivZ%2FOQ0hKTIamITv%2Bd1DSt4HSYnNUkuzzJOL%2BFpsIr8by2vPeTAJUlRM3F4z%2FjFpeDu1md%2F4o0wRxM%2BozM9w%2FxczR4TIAE7PVDt4odvn7lNoPGcb4e0Y84rDu5HkOmXafPnVnDa4jIJCIsWnlUQBjTqP%2B0EUnhFDhCtemt1bVl0dZ9ypjalY8%2B%2BGpVNVTkrxuno2bgSFDWXlh8LKGfegA6ad7bVCNxn2vQm41%2FTcg1vqMOnFusAGOqUBStYLU%2FFyvQxmabgZ518sufU47xeJP6VVPgEsrgorv3PUJMErI2bx04XVSx1oPWLKbEwiasEzHZ%2FwRFoOSjnH5qxM83IALrnCfGjPQ9ISMvTZd9Rp7KQaxoIJbPpMkWCHz8agFYaegxWm1HkuuwvSUkAerMPMzkk2YFhmu3Lv0n%2FNwo3%2FF8cklYpvTF%2BYowZTdT12nk0Fb8Vg40vicmFtG%2Bw4fzp2&X-Amz-Signature=f9429024812859aec12a092e0c88f281cc408b4b8f51fbb6554687e3e5178f64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
