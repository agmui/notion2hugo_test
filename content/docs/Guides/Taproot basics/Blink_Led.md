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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROJE2JH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6E1rEooivNd%2BcAGIhH2JLIrTJvJJEBDabzjU3wTDTIgIhAPBr7oS83yQBkMtO3cJ3G1QwrTBa4NIbJdGxMFcRSJ0uKv8DCFEQABoMNjM3NDIzMTgzODA1IgzRmIUjo3h05oEIn5kq3AO4TK8IKbMMSuzWSuzgBAVwpRPRJkKlG0om4hCnnkKWciWvmv89ZgHgHA%2BM1f6dFxKEx%2FqTpSMc2ek%2BA%2BtIMWzycGrGo%2Fm3ywH1Oah8uWcecdGidIAToXK4Tn76rvWm0eMvwVkrnCfQmUPQYqNPon7DXvsiyVAQHwr41JHkoyKgoo5QTpCNiBZR4wrx5RKIb%2BYDQ6%2FnkyogO8j4LOB7j5KiJjYS90K52%2BsDI6KsP6W7t0V02R7LCgOkCWfu6AwLgFejNtyPyVs35kkBSqZyOPpLvx0WOaPYHTwqlaePzYUgRw9HHiyYmPdGQS1DM00yWH8yK06Qz26fxnv0ybV0npdCbNMB%2FEsmlDWTFeeuHn9N2XqEBqem%2Fx1keajMJ7tGrErJIlpkrO14HnICFV0XvrBv80FDFL9efH%2BzCEZ3%2FUJPvPPfaKOWWX%2FVYqATbdASCeE2vXlVQGXDEVksjPcXnraHrIUydPvdfpNynszyBTpHtcA558Praf6DNxTevIB15PZtDFE4gvegDKl%2BYEHzX1dSdkUyQxd7K1frHjPVsF%2B0ccSHxQjxck7ir7XK0NsEG2M2xFDK3XpL3o209Ninnp43lNhheUsnVniIWKFVgvF34jbwB5d4smfnxjh2dTCnoJ%2FBBjqkAT8mES8IGl0n2ms2FSKimz8sPT8m6XQLzx1J9KRzjn9t5IM32lHHw8ogeeCy7ORBRywWGV0L2cvM3ewNEVTLNhKgXM1OHGuEUDWmQR%2Bnv4gMz2Xw5o%2B1WHVZMAo382hRJlWMdgzvPeoIDKLVSVHdL2u%2F%2FBfRffh2egBwEmxIj%2BBTOIVofwvxwXxkyy0D5cHZORE0RFmDyM0TtKHNmf9KDzV9Uh5K&X-Amz-Signature=c3287c57bd4ca557ec98bf33fdc0ce7030eb7b473bd3db66bfdd3807b8be12b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBDAD3W%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFe53uqoCnYw6IKO%2B3at428Ivtx8qJQY6HyFzqqoL601AiBQ7C6RZA4WcufSW7FnfmQEX1Ki5osUEdkQuD1luY7bGSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMhSw6R2qQTC%2B2BXiWKtwDPNNYuoaJjqUstLF%2F2DC%2BNUlJJAq3oVuPww4FpKBJM7%2F2pLJg5RmtiHSC2rsK5w%2FW2pe7414X%2FQPK3gnOgukLaX9X3rx9wh2q51MsnWBv9BSbzFT6dunv1OF7Knq%2BwH%2F59pmORILdYwssLY7WyXWj6T033YrnmRbAJvZD92a4kcRtqg4wPJx8vazZGD8dBHNXqoaz%2F%2FoaDlCM5qNqghzF6lUk8KxpdbJ52GPbsmGZy1yFNopDyHG0b%2FZIHHqxC6KQnDFnqbdf3md%2FIHwlMBbqlEnY%2BuKAAC%2FkoMZbxzvl2nAVHzA%2BmHFnDxW%2F%2FCbsHkeLzgi5tdCJm5zUy6zFHk%2BDh1oB%2FqGLaLfvqbprjMb1h0NoD8F3AUu7xo%2BnpQJCCKWRWNsgAqUYWB3mOrSk9s%2FWwRFJ8qflENMi9x4UwSEr51uiWgppNeKhbzcV39wMwd9nlF75EQHGAIpJk8RaeGjV4bX4lnpENGbjHDXNRr%2B7cwTZZJEikA3XhBhm7HzKpQoe4lZ5SGkwTRuc4tnLv%2BLzAYi9PfHel7vsDPfFq1moU5ZnwMPyOJKaj6J6YPbEIaMi5uSUex4SV944%2FKdf1YKhkOVoCLeXbvrKkncECOoQmXoT9UOkWQBX8to6eVgwqaCfwQY6pgECdC%2FtncFSvkFq4zm9EQXrIwX1Be84K15QR0WEHunPJVnkvwaGzs079GQ8KFtWVzl8BtI1rZmVGtGIPywhfUQzLiWEgpVELR2QRNGmEdPJM%2BuvSZbtRX81OZYcP4%2BZDfsHo9LUQiDRH5j9SgxdyPHXkHHOHVYD%2FZuyOvaWnXrszyqUvqMFznLZt9mtruVrFUy52u6GbBWwkgQCzYFM7rwLxH%2Ba67Ts&X-Amz-Signature=9e0825c19966ee296c82357a99d9ea08fcec68a39956ddeb2751c13ad4280737&X-Amz-SignedHeaders=host&x-id=GetObject)

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
