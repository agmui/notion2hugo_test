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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHYTEUBA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTAUJdUCwEnCW%2BHdjHt6Zie0x%2FwTEvJDzyFh1w3247dwIgVm521g9A380614Nl%2FxEXKbz6UKKluD0rhW5QNlBL6P4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiiIYOZRuSVxSNvaCrcA8uHbDITrX%2F%2F5wJsbqmNQ%2F85acOR57ewBFNZ9WsMfIfnZMfaczHqVJkVLan1DwkRAMJEO%2BlHoP3EflGgxkzw%2FpGmpCIfV1vGKE0H4AW8DsX09%2Fil7hkGEN5hk3yjHW9lB710oEPlLM548Jh9SGhW7f7RU%2FOFCid6QGaHID%2B8V7N%2B5EnL7fWmW%2FollLFw8WqQmoTd2%2F1pw3cFDzmEgXip6%2BTZUR1eGaXz%2FYr86sDEuxM3uCPpTSv%2FRyKdvSLHiWh5wZBEewyUhUFyZG1RL%2BrYwmFJoUhgMpO%2F6Y8e74up04bDtUqlGspqx898WtRcnEtpYWF8o0cSGDQxb0YNBO0psTHxF7NVaTUBAXlqz4zfUw%2BFHRRyipltRlXn2GlvTasBgdUDTH0bedoh%2FOVPIh6mBdm2AGMU23DyTiyUzZasFt8Bxe9Imzd3et8guaXRdrmhsj6l22SMtLLO%2FF4cjcFJzsC%2Fo4cFTd0%2Bfr4ur9KhCbGytX0Z5FuaATNi2O%2Fe2hB6OleI84Q5BfEMkRb5UUVUTYzxvfkD%2B4lx%2FUnV2YGTZ7SnsUrNeufHaW%2BOWzLBGCE87mo9somJ93f%2BZ9MPX6IktsB%2FvS8P858GDOKhRSVJXZRRAT3ZsHgxkv3oFODzMP3DkMMGOqUBd%2FTj2Bf23rmI8qrE3ok4rfiX7X4BClJA%2BsoKF%2FZrYX683I9JgVpbi1dReD7BcN8Dgmuulnn3uqQAJOuxBTf304g73rT2RscQRJxPLI%2BrDR0k7t4XBSN2xHJWKWpm6dB%2FW18O2zs%2BDRysGBC4wsz0zRMGctIDGbqyvdqdn8zwDcWOF%2BHwhg%2Bl6zRZy925010TywEu1DA8tX2Py%2BOTVL7ySerwj1Rx&X-Amz-Signature=1f78aaf773a7c05016dc739d0e0b4e42eb6860ff518b942a4a7e60533746d10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D4W3K5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhE741UOtk%2FGTm%2FMl7SzQkcmzdURZ9D8rFnhLjUc%2BstQIhAMFIovDy6glNByKACg9wxgBP9ASXsJIhKOyoBrncnszHKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh9qwgB8GBkREFOFkq3ANMYITvobJ7UFBd%2FonXDjRJulIeORD62Lx2JoEpkKHGXeNoXh11qWq%2FaCrl5I3ghSN3OO5DBVgTIH8nDdeqAGLKhlBSbKV3gsSJEhBxa9oCFThPlGkpsuiBFB2NYHAaFyE0YUUv%2BcD39mGW63eCYczwIKa4KqCpNLo2cdgJ3RcB%2B2sNIj%2F9kW6nba2pajxE48Ij%2F8djUsx9IdjDwqrhmlYQWnTpQQlOHs7%2BPCDL%2FWzSaftZahhpbdsrmu6VSnnlmbacBTrwsQq8%2BaFh2YeFaBZo9t21O6GvN7H5aclyMJh%2B1XSK1sGa%2BazsDmzfqBpQFo2IMiNI5HYUUNS86AnCkibbXxL%2Fe2lD8kbVD9rbZ8DthRmQBE9Rc%2FeGsJc3QsCQPzfo1TVwCl3SG9IrE9CbppQO%2B1CrTfg9aazwXueB6zeTCRdqJBQcZ3t9jXwtEczDD22CglEB8HC4xTx%2FHE3fUbihU75TEhvigrtWydZjh4JlyLjQtuNTxskobOkiQi4IXx1dXEoq5ed8sf2QZoTxr2KksHdzVFLF5%2BGUx5E76FCjqY9z21Kah5mwkZbYoZ7FgAPbV%2BflXkdadDakd1eroUwbb3mwyCM3CkdnV9RCKbhyLQMWE4CtHhPnuj3VLzD7w5DDBjqkAbnZ7lnZG22rzd9ixbhT%2FX5YhTDkMPyAf9GGj8KCQBEISSsVcBFc9lfesqDhSQV%2F%2F1SNOsqh8v%2ByJUhc02t4Xt7WSSJsTLWH9NdHeXUTEnzEYUv9qEQ6Sl%2B%2Bu%2FDPQFtfbOPBNnwkxK1j9r%2FxfpQd%2FfPHRP9fTdqKEVefHyQy3nu%2FuBqfn4IEt9m0GPX4fZtMBwGFb4l3Nm4xHrk5c7sz1r95PoId&X-Amz-Signature=2098f27036e757765cb175b9e925915f80767bc8dc2b94b82b3b0137181cb674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
