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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWTZOIGH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCz2%2FodTYHcCAf1HQ6HkYSUZbDVpT57DGJWdOiXYUs3gwIgeCxGIZ%2F0by%2BwdWOq8Z9nLNu4Z2ldpqeLBU8pAK9yj%2B4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc3Wuxmucn5EbrQBCrcA5GwhaLbJaMm54tcNyVF1xvuPMKceoupFJESWw%2BAdG4M%2BeGMynO2lp6zEdiJ6vRNoBT518141ynlugLA1f8xP%2Fj0GRjqEP1aENZ0nQTmbmjE4pDfDhogbOCAqTcdZDm9DGgg%2BOp3pHsHNtANF0wrTuvoYyPbjJeQCTieuFa%2Bvfd4aCKo%2BWsPr%2B1WECYb8nPuFlfb9vEHJYlC5npR7PHxjb%2BlSaWQq1ZdbXvzPlfoMKkYPNom1pO6fOqBPcQYjJ7WlkEGD0baJ6KFKhS1FO6zyyS2mN%2BzHwyNu85E%2BVPLesIQHWeqZDeharDa54mHeKRfBBGAs4HOX8R5QwONLTx5KRhSMEU8DmPaFPbaUglKdG6ZQnUU0OvpIBKtdlPJJunOiZ1JVZEwwxHlLiOLu9TsH8URm8L1emS%2B3tkpHpNdShYDYMUQZqzgEWnEBNUtheLuXFsKn%2BylvajlJjV%2BsodAsUDTu6fpo1ZqaDyP38ACWkjzv3NIqkDNiCk5Z51WZcuft8wpMPU6khB0kqTHnc3beAV2ISgCad3m5EGD3GQr4K81Zo0LsUkIfMJWsC8XDOcwH9qPgOBhGvoP7TIXmO8%2FCa%2B4v4dWyek2sv0WzZFDEJuvwtX2wLDgA6DVaYrIMJ%2BOw74GOqUBeRDhPmdmcs2Yxn%2Fvy%2FEYolXpY6knhRzVID97xOBt%2FHs0S1bgbIGWwSxtj76qmadCxO9nzttTFf46FMzeY%2B440HqfhDn94OZIiCQlf8cOjrGAIYccD9wEP%2B1TNG7pfw3K8PHm16uVBsaoc%2FEdzSnAdGmo2WcLL%2BB7TtVDddrPlFU6qNAvJ6XQamJ9kt99iB6kg%2Bwvq0%2BGJ2Q3MIJbmXU9C7CRk%2BKJ&X-Amz-Signature=bc086e5e4e933ab2b7b4ec909c8e81195e49f4470b75faf4e71ca68a8767bc98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3P36UD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFzmfRMHGUfU3C4I7DT7lCt%2B9u4w37RnsjmQL2thQzJCAiEA4No8nwGNARC2oesVq8ehoiX7wvdgVswLMx%2BYfjbRk30qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCav3MY8eNE2HD%2F8CrcA%2BcAF58pcG%2FdHsmuGYXJ4aOqiRD0GoOl4TpWnPNeo71tpLCkSXf6nCfdZfAs4YJm%2BqZEdeaiVJu0Bg9Ts2K4KZtqnS3Av%2FkRICYdFPFNtteZuyy8ObmcIS%2FVRNsRmjFXkY7PmKhbWZP2lXjLsSyPtrGgH9gweE%2FLpvqq9U2lhQICpXjAo5Eb2D0TqAItgN84M%2BDcqzQZPTh0DedWkKf%2FaqRiHqxFzz%2BGhmZTMlbheWIY%2BFAHdBb%2BI6OaS7bPfGPcZijQgxhjoFhUEQx4af8Ez5ReFfunn71nqbcIbmRTWI1h62NikNcKW4QNThPwM4PebdAFF1zAMhhnOlmc28bcM4xgzOmQ6g8VlmvRDgbqH4EXX1Bo3BeZznQm8zyrAGMwr3tEXbe5LyqEdMposWfNIjjm1led6qETgW5rwdrYmaRA86JDufTaTpRnEle78kVm26mIgswsnju7hpnqNl%2BxKeZf6EZfw6YPLtUUIa17V7UYAoaCbZMl0L2PZ5la9nh8C%2Fd%2B4CXNcY%2BjDifGmmN4yw6GtMhdy2kBCn0xnO00UocEqIBt76ulE0LkMPi7bl2eqxbzYszlbYAk6rLDe%2BCBs%2Bv7axA5IUcn1SQzS7VtlQSB5Tce2Sb%2FAnnLdnYVMK2Nw74GOqUBb%2BT%2BMRMzsptpSHFHV9b60wzp2s2pYbQFS2e%2FQFlElNVHQEWnDwZWY3250SaXcyWxGtOyvwFk5xQXv%2F656PZvabInYyzE4n%2FNZr%2BcgSVd2eHoZ9HLW5aYockRO1aH7%2BXXZCj6aJEFRWe5bBI5l56N8VUVfuehiVr8SuB52nu2%2BwPPbHqlWNpXgj0boRZO1mGHr0sylw0SPolSdtnwZr0l%2F5UC35%2FR&X-Amz-Signature=f47fe6a7f0c1151e7e282aaf095ff6d90e6a71f47d697e2c1c459ad8e2c8c856&X-Amz-SignedHeaders=host&x-id=GetObject)

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
