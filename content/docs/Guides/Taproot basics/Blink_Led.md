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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECSRQ3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ALMLR%2Fal%2Bw8LAt%2B0ka28L8itotDCe1g8v8e5neG2BAiEAmMe8jpz%2BBNNj1viZgkckuvzGeeWu%2BglRwUPbTQMCoAEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLEokuhJY39WRuMTXCrcA6AlSfCQPj7oOImPvsM9x%2Byy53EF9rCW1xemC2zghzElqW5v00PWO5ITjEc82YN6eXU0MxJ9K11F9NfnY5HjSPqvNE%2BZ4pKpOZA%2F3rPndUjW5m3uzTwcrTg0GoaLIayYmsMh8DphSGJmyQNbvPuvIxhUYmb9iD0uiag0EfKyPHLC50SHBEbjHwwUh219W0PMcw1ye1eKLs7Y4lHFzlJUmeags%2B%2FBxcU33z7Z%2F0avSiIvSH%2BEizh6AnxCnoZGmvvMTS3KR6W4OWfNa%2Fpq3BOv4IBceWUGPabk%2FJrcM4qTaEjOlV0TBKBIyomcuiv8vtPDVm1k6JnhN7Q3bMHyJUmyC2pt3hUAw7Unm3lD7LVN3nbG9abfnuENID8cL%2F00sezC4C2qcQKTzc0UScIbB98msZrYLLISvQ4n%2FPHTY11Pc%2F%2FaA37FQWfEWpAOVkCIOp8gmKHLJXfVLkerMmSSv1HUoL%2BMHFQ4BBAJ5ZnizGI118gJ4g4Jp%2Fm7gO%2B%2F88O%2BdLGe1JtEFbKvWbdfB2NDvzmvrP3lrsunukejt5XsS2NzuRqPFTSidxICI3ZIDn58Wj77pyv5m2AzAZ%2FD%2FdBVtUMnnck0INzZu5S8PcOwTSgmKtvmg0kQXGDRxVzz8NgnMMv%2Fx78GOqUBSCqYAe0QRchEvZP8K5l29ziHtp0JpL6J5jG5IUskSD3cTD7FGCbNDQ%2FfCJo%2B49iXaDSwYIkvShFknYE7W9TlnY5isWll%2B4HixH9Zzd1WJP3kJ0dzq%2FAg1W2EXxeTPfcmndnOhaUDDLdW%2FQh8%2FxfP31XvvH%2B3nO%2B7Uiamh%2BEh2wD%2FPEtLbZmkvRzvcyZcfc8eOn0tgi0h5%2BevD2ZUkADyDV4ccc%2FH&X-Amz-Signature=656427849522b5e11cae43204108cbc6b9bd54c5ae449560abc1d67271571313&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTIHSHBV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSzR5D9OIeajMDUNStXNpNStBnB%2BGLvsq%2B0j0PBMDCmQIgX3llPBlFj9VrkKMSVstrZDHEQ%2BP5XEs6Qe4vQrIKeY0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDJeNPZSyGIUZDTTwSrcA%2B0byOhCgr5f8Yg3itnesf2cq2H23RaHp6fGW8hcjOSWQJtuOU6LG%2FMianQy7w5TdJypfsjCsUJ5%2FjaGCp07MuX45NxhkMPffRMdue%2FIhyJHteIrNYfXLuBIr%2Blaydmo37JxFaFpjSZ7QCS6SYN5G%2FMQ1t8%2BDzlYa2CkbF6jfbCU01A6QA40UFVHjYTshhgjJbdK9uHUcTvQCk%2FtDN5hslBrz3oitEiu0XX0PBIlMSn5dZwEiYc2plESAsPscGUWFslZGMXC%2F6Hxvvi670%2FRpj6OOqE%2BE56R8PrfB6VbavQaeaK5ruHHNx5YtUDXp95hY568M%2BG8c4XoZymRpLv%2Bqps%2Bo63SaiDhVB1Ew%2Br%2Fd6M00sCv62UPC3EGcRafT5cLQP9Ig7ztETubmkd2ByyakyEooUqAI51oW76H1TQCGgO1eY%2FuBBv5od2YRK7gksYhc3%2B1ZQ%2B6OkGyrUcCTEoRVf%2FDEQWr9qz9qmyeAc7TFFDN%2BMAzfmhzPdPTTWCvBcX1O%2FCNMde6iJ1%2FZsSqyVVYlVKFNucivGanPjtz14SJYBI43u5vouddjhq3zerGEvJolfrNbpotzQOGhfrACwu4%2FzI97sjy8n0AITn5mJf31RYvOCDspiAsDk6yzFtlMN6AyL8GOqUBvShOevsdPBm1SmCGlLE1ioi0nco9xuGp5bMSEsVBkeBl%2FvSxbCXHW%2BrVd4A3fgpDRsnGeUMD8XfFZdNY75uy20FoH3YY%2FtVPqSx1owfjhiPpRxbGsESc003YbnQGPBHacVCcLEfmiYobmvVuhThpTLn0ZR03GqBIWt%2F7OyJT8SlwbqHgun8PyBKGca1cAsCRFkiAzjbCL9OiZb2ZwA1lCI4ZFu3Z&X-Amz-Signature=b7718bfd49e8bbfbe91eef6f090659775fc2c36f827a35cead2cdf513be992e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
