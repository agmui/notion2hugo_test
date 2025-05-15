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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBG6XE3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD8%2BCLO6%2BRTrNWRS2iizsC33wzd1PGk1FxR5ali74SEjQIgcuttk%2B82ISYTDUVLN6VOuaER3g4VjI589nsoMes%2F8I8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNMKqcxQNUwToZqd3CrcA2ELXCVzoyQMderQL%2FlXGmH6b6e9NmuYkGx7rlT1uifuuBEf362WsN%2FHakMehkSFiw7nbvgX%2BaFUXvdC4YldeRfp20fBc57bnzYFqkTCJhxkjb06w9tgGKVRLXv89GpeDfGfqxgHgVpdu4eaTBmwEBPLIbtjNMd6FIWJQCH6FDYDTSd2zIGPSv6m4E7cSWCtbXCXDuSZgkTcNBZxhUTwHh8P4INfWuhv0vd8TjA33yjMNUc3pjz2t840X1%2F6rfOUOslPBofQ6k19tEHPrfvkaTv4nzdjDRzfT9mR68c6e%2Bdwi1a8S%2FPunZ%2FGSlQcwbSy6hwhuFqKJ2%2Bt0VmPHjMh7qQpTlUyDXuptsit8qimc7cT9raMxFc4Qi2%2B%2BcFz6C6lKXBqPrJqgwSWutjPSRfQcLLKsye2Wx7%2FwYkHwae5o11GIrTy5EwjNjCVEG65GAOk5dKUz%2FE6XOr0N53HD1%2BH5w09rhI3k3dyQE92BjXc7F7Fra4gHaWuOBObTBRLbyb25i%2BQIRdxBvQENPLwMbz%2Fz7B62dRI7nrYJoWNEWelaQTEh8TFP75bPkgYR58S70RqMH9W75dWXXv%2BgyHwLpyTmTzEsIZDevsqFEl4G3jL098NC5K%2FfXr65CLzJOEOMI%2FSlcEGOqUB1oacjHgi3nhiX33e%2FFWs8VdllfN9gmMYeEuzU4wSrnafDRmhtQlPpplyR3xogDocByoZ%2Boy9c%2FJuB%2Fs%2BTPoKV0hyTiS4dnE5cnxPvHlVsI4jmYUbZakpnmwNxvRQUg1u%2B75%2B4NKuYuwDovoeQgNx34y16P2O0TU86%2B%2FmoZ6Vw8OXXJwFCkNQcxelIf6HibkN8f2ZcjuuhN7iUt3nWLnsNUTquDTK&X-Amz-Signature=42666b926c9e3bc929bdbbd3fb21622de5773e7795ffd4a33f69565975337290&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYHAOG5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB%2FUFtVarNFj%2BNhx4VC0FszZ7329qBcM0WCMrOgXTamcAiB1HxYD%2FcfUUxnTefLdlhyq44ywQRK78O8XRdcL%2B7G3JSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfBgldRDpKBE0bcHTKtwDBuJ83MCOCdP%2FTsY%2F1iRNmPUGB4ciP%2FXFWCL1bqMUK6JSc%2F%2FNS31F1uUnkSpzytdumD1c5rXS0g8FrqjfH%2BLm3BL7Oo4OJlzN5ZrxKjx%2FMrx%2BE%2Bz%2BxUn%2B1ZC1XgcJpSa%2FsdMUXqZReFoldulG7A%2BaFRkF2d%2F5tDcK78oKuq2v67fHyq3O%2FtRahrXFbQYWlOJtXry5Bs0jRKDDCpytRUgavv2OPnusax9yMIraoVtOWMPBqQD2gm%2BLL0cZhZ4ciP7DA0kvlRWxgs7LlW4Pt12YA%2BcVkAD0xv7d38rvVlqcX1uO%2BPSCUwmz5WlYotj7%2F9mA1pQZOumM5MIXRIWWDTmR1eypjvTTokqY0zuRl2WiScvSifhMC%2BUPhxRKKUVfQMknkWmTaRzUvVpbXRLbHzoy%2BRaiG9Y0o9T4kWqxQpcy5gHYURGSuNV6E%2FCaPf9TkJ3UrfNOVdVdF%2FuUNbjIItH3pYemZB%2BWX%2Fq%2FozeWjt0uUvL%2BY3WC0yPLmdHkdHYcPoI42swP3kNY1zbytxkeXEZHvPRgyjQnk9Ma3MowqG7vkWeSVdn0F7BFiXd%2BkmJ8cNN08yS8fJEaD16laoA2ObyUhCUt0NuNujyyErlMfVWl%2F694VaMKyL4OAVZ%2FLJ4wlraVwQY6pgHRcnwFrwdhNrz73hIV13ckptMOlgznnak2MrycRtTbha6ki5MB0SLWRQO%2BY2nVstcV9X38YWTaD6CL5Q7CdIRa3iTtW7ynKv7Egrj5hkYpEgUcxGcqK6R0Nsjf9qBE%2FmHGRjuGpEs4gkXxC4aMVp%2BgC0FXTYnbTolE1l0GuNhQ8SSEEi7ANX6pkdbud%2BKj%2BfKuOp4FXCg0RXgiOXCNQJ%2BebZXclW3%2B&X-Amz-Signature=7cb107fdd966c4a3caf55f203e74543e806c17f0880abc0a550c511448ae14f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
