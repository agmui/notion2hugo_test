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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WNDV2BS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKIQn%2BEdcQDSNOTygfWp2Wpz%2BTB0dvfEcVcsQ%2BI6HJmAiBuSr8Mu8HFQRjv4swj0kuwfZ2k7RjLxNPzJs8Q5XGcpCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfCKRRXyBigzQHO%2FjKtwDXlFl9zUg27LeH4qceOHC%2FVVR5XJ%2BhTwXp7XTF3fFgSqqeF4lzV%2BfoUjUnzST%2B%2Fol1HnfyulwDk0x2f9r6XBnICcWOXD%2FtlsgfdT6DP1RP45jCv2TQZvMb5F1GwVZKcMo6kKSdmivKomEklPXC5zVk%2FC1%2Fk08Fbl5pQtjjd7Kd%2B7C6q31SHlUpTuIQEYLfdPNiUOHw98eni%2Ftn5mPFkPMnQ60YvoQmmiamf%2FHTZIr3jGoMCT628JELSTbGzFKtVtAx0vjXI08wo6mLgwlEINAngP34C3BB6hVCmfq4bvKjRwgBfHgSXCI%2FZssiO0PXIdUorKKi%2FG0hAnOzF6H88dVBSJAy1E1EmfaLOqDpudukR9YZ%2B%2F7F0I5MDr72vOFzwdRhEepUz%2FAaoWfev1tueqLg%2BHfmo%2BKozX2HGJ3wOnAECdMCXB7RFVLU4RRwBCNXu7nS9TBd%2Ff0a91LR6Csx%2B9Uv98CGzcZ70Wcbex7RgNQIdVLoIkPdtkJa8FPaHYnMyi%2BujIOsBqiS%2FwpLiJ38wCrDxGnW2WotzyUqcPCCo7ddzSrWRMB46YwvHrauCbGqqggVapear4S%2BQLnSZie2jMJqPP7KNxrZljWTOVvbIHLeSAMRNGK9rb4axOJV6Uw8tHwvAY6pgHcQOysIYZ35TpsbPmauELTVuCywZHcN%2FVpOWmm%2FzqOGIv1wsy9jBt4QZo0ugJNHlU0c8Sl1VieNt%2FmFi%2FrbPE1hUHUaasbbzFlYPyq6Y6gHiUz4evJKBLFmsrodHVJVWS04X1lYot1nmGE9X3jsiixglI0FIglxsLAzmj5Vj95RQl%2FT%2Fibkv16%2BOlg9cXBaFu9CmitEFNFMSbDAvDjhHB9%2B2cC2xuS&X-Amz-Signature=4d1d75c73d9e59c541e04ab7d53fe4903c7110cf06970b16ad0605ca7f935c83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EIEBUQK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtl8UO27AiiftQOENoUstKFTyjVxw2a14s5P2L2a5JMAiEA47tqzjADmfbD6T5UWoluYURWhlCjhTMvT%2Bqm5m097XQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcznuNqt2mqncVo4ircA9s4c4xWhSH8%2FCpJZEGyxvS3Laju1EkUQ%2F7D%2BAUQCi87k51%2B%2FOyTwIgOjMsJ5FFD9vG8JAX0nm5i6Vp0vUr1yvr%2B%2F3LvVFqhbfx2KpGKGDps1oVlvRcSN55SFxMrNgAk8RC1lB44wuz33JQyIzAsrVlCv%2BZS%2BqUoTw8Mw581snt2Gki4p4kvXil2fXdbQmdUZPGL1neMdFa%2F2FqHNReTOWY5HMnLzvZpprGtbIiCWY03E9XmRgJmylZOWGBdzLpx1dDuiUCSiwt4eys7ZTNLVHY4fT8yMm8bmMnUDoPMLRiD7ridWxeTMHW%2B3W2K1jS5XBgE0WHU0zXrJ%2FxdqINRvIDUa5NYVicivUdheZgKSAfurAqTxLHcf1%2BX6%2BJ4Djki7TMxwyEM4uyeHAzcz%2BMZPE65NG%2FQngK19n%2FHH4LPupeBole9a9hZAygD5J6yfWOOjPRpn4ArAx1YFtgWUSB5zcZnbbvKx8tSJMssJLnqQQ3EXHcn5yyN2Jp8PfFLiYHmHUIzM6Sy6ee3DOUUy249HJRKa5M5TGk426YXxApM2qI3vOnKPoz4ATo2TTwtDpCvZ8uDPBRKfRcFF1jL42YXswP%2FSIOArWD726JVdxN2kKWpoJkw4yo0gGu0YUUbMOvR8LwGOqUBbM3zIjj3Z5IwiMkA5FxiNhNlpYiyEmknGpEUwB%2FRL7UeWDh%2FHc%2BLnoVBlAl2I8CzmPurlfG3z44T5uHevqWAuh8GIk5jpNdZH2m%2FknRuHRq57SPRZHLS5AktE2H%2BFy4tNSa5hakN%2BTwxFYpFO7CpS0gtSEVUDxc9qdgLW74i5kWGIeVHEMYJDOyNucYSrnc%2Fb5OHvz8Izsh5x3185XQwNfXWLieO&X-Amz-Signature=6983cb76ecd400c74995c4a11fbbd96532ef46df7cf2e2329d56bd8717328d49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
