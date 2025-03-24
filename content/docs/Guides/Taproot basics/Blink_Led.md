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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2AL6TW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3M1wnhd09pzU3OnY0phlha3LPdS9yUm7vcLrvU76fLAiEAoT39eTLhmyLA90YYW1SE%2F%2FZWx9iL0GItwuaTwwuM8JQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaJYOKB6ZWbQp1WySrcA5FsGQOxOxDi0Ks7jYzgCVqaSOrE5olwrPhES%2BZACcwFHM3s%2ByrN%2FY1HaGVKqFsxlOR2t%2BE7wFF5puOz6YcLNGZpw1hdySArxPtcG9PccZmn2cOBYS1aW9lPZsfumPJ%2FtvbvbB6Dt3ZXO%2F55z5n5%2Feswjkglncr78ow9MSUYUMuRInxZK0HlsvwEYwp7Zn6IgDczdq%2BeF5u0H6pY3BfQlIQk2f4EvwQF9EPRksYZpz1ZP02ghWFmqsCNt3I%2FQI01jAK%2FadImZOWP1ePiBwkKzkvhWc97oWNKcfiRZgHXIzKcEegFFkvnRBDk3ajGpsoaZyELlxt5JeIuM%2Bp1U%2B1FJoeWxmlyPUKh%2BQ0NxpwZaLFeI6ETvw6aJznvSXB4kXyy4soulMGuJPxP%2Fly7UzYjx5sWxGHfBpZXg9gIT8GzyScr897ME06a3gVtZysEJqx%2B4ZfRMCLs6BEinma%2FkCK5RhNz5pqQHBwgV9%2FZp4jkAleQOTDt5gl%2FMI%2FP%2Bj4%2FZetKYAjl2DGjxZcEctla%2FSVcrx9SlgI%2FIY4bMwVUOJ%2BnlReIIEhCDo%2FmdxKoMqmn1tEZFFQ2C64T7C20NAVHDhcGGoif9AqiroLEz7qy2sjOVjZ6iXPL8%2BrlxTGi1ZFQMOf%2Bhb8GOqUB%2Fwe1V5AaGgREWccMvbyLozBnv3HLZte6b3DloOLYpXxjPXpumobeGSNNk3Nh4UtpCJB09s54tMU56%2F%2F6ua5HCDCNtx1Jfjz8yEPOoZ9vTHLlGg1eTY8%2F5pcQHCPTvJpBMkhLoXvq1Zn3xYvvI2iQ%2Bok8ncoQyRP5xXFu8puTaeStkJKp7ZhiHKio6Hdytm2E7BJUpyqHsIj6bibm%2FOAZdG9DMwU6&X-Amz-Signature=ba3cc943c1fb0e240d957c808f47f1080b719a27bbf28ff25f639ce18f43b096&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA3DYROC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrZSgSsG0T9AOTHf6eKcuzatUtfrlcGs16JxuhFCHIFAiEAjaE1xCth693mhIdxL27JWu%2Fq3QAGRagXh34B4VHCH%2FwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2Bdx3US6ql5EWcaMyrcA2Qbvqe7BfjSv7W4YZaSBbXGJKubWkxnX70C%2FHmHQuTtf0%2FFkHuR%2Bx9vl044v8d4IBnmxyd3GQMCF6rU0oVrbEkYtY05D%2FglVZO0oTXMANKBUXhhyK4SyIEkNfLgynafLH9isV6%2B38LZg3fqbFIOm6FTW%2FVF%2FnhvwfYvEK1Rc9BQ4OVJUEu%2B1psKBfxD%2FpTlQqCSb0Mv9yHPBs%2B6RyMB2WtBq1Cxob%2FIsRWCrd%2FpgwqAiN1PWgMsUQAQy9H45mG5DNoJVvmP15E4D10cb163Im%2F0%2FrCBaidP0Hvuuc%2FUDDnqejCK9vIL15GotlrPHD4My4tSCDLtGqRiWUPFp7LG2upwQm92y7n4RkLD1YrT%2BKDxlSKHkeICElWOc65lpWdw4pTJdAqEKFdJTFl2YIDpDFibjdQSL2MCtqcXY0ChZ53IDfz8TOT9pBX52J%2BKzCPajWeSKyBra8ZdIAyhdOszVYsj2tO%2FvivnxMheWjFhVlGsVTCeOJK%2BqJcqOcPRPj4l%2Bby0C%2BAwz8ldESbTJOwHT3%2BIxDqnJ240MnTTKG6qZ9fZHO2B0YXjW3KfWebf%2Fv0gbUxyU1qriula0PuZo6CItQbOeJbxxqeG4raWiOb4fqk%2Bv8rbJsJ7o8WUeHWAMMr%2Bhb8GOqUB6m6JcVk9R%2FE9r2lNHuWXHWwZewaCL5DYG8oq1VTVDTGLUcw%2Fqc%2BHbQXCrT5g2fcyuT7J1rAlXQ27BKFvyvhH5MGtpUZoZoh6ltlO%2FmcXp%2BQ4AFH6fBZMUYzKw94pj8q%2B7L9GBVNKdCVnDRh19nhzWyfv0XfFDlf07WbuaS2wNYHUd87hPRmm9Op6A96auZFNYw7Rh%2Fh9OUD6VDsFWrfnO%2FbtDfKb&X-Amz-Signature=df83ba8c886492da56fa4e0ea0e9668938003e8b6b2d09872e2b3e27187f2a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
