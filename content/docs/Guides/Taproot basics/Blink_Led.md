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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSNYKDM%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIG70d0Zv56%2BL6BBZNjYT61ouaUpA9921D0FE0q4pauY2AiEAitTRHHgn2geCQeEp98nIc9PcDJaPpZ5MqP7CLzBE7QQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaInic3H5SNCOxnkSrcA9jX04vZG8WzvM8hRIZ3Kyoyym8JyNtKkROFHq6ZSRMP2FJApjV1gulj%2FNb2vni73fG8xyjOahUYL2EMeVY4Cvjnn%2BGpHlb2KHSyeo%2F3QNR%2B6Ft6QSvlPbk%2BLl1K1CCnKdc3phUm5%2BhxK7CqCMucNVVKrTTMIc0VhPE%2B4zQbAjhOrDfFj7FU4XVxrMzzi9YDSeTTyPWfBF6PvFwMowTeUySo6lmDUvrAd0WjZOgIm2NbY%2FzmoNNm9eW0L78pL2nJoIFEDjEFCaOnq83xzDfFaAAbf%2FjGNzDP%2BTAt7lGab0zdr14k6dgMR%2BKNsessAk3clQzN5HUExurfzKTn9I%2F5Y08lH9UTNjVKGiWK4wMA%2BZFS63y52VLTX7uz2vNDVlsypJeI8gP9EZXaSLI2KfcwkAaMoX7ZmjKVew6XDiGzQMiMSkys8vDa8zofaerjgLBZFTQCffgQgvfkl5HL8qqBrosD6Ttjttjug2UW6Akztd2GB9F6xq%2FZzMvoZ1XDyhfSPYGztQdNsYpOymm7C8WwaoYxfyejC9auPJkhL%2Fgb%2FyP14wKtYmW2ZgINZRVBEs%2BLPgkKMU7kR%2BYU2bDGD3O%2FJVqYBOgTl3Y%2BDp7L2h%2Bfw0ON9IwX%2BIwTGVFqWgxrMILo3MYGOqUBH1I94vuBkBJHJgcB0oz993dWy2NSVp9aSnVYzLJgTI6M7WF21E7GX1UQ53O3nk3ehpnBamHdD29xOLE8QPzjabJmfpMPHZCAnuP2c5Z92iaDcHght%2BTayi3M%2Fmf%2BtHHlF1bLiRsq%2Fz6QcT9cG7J0fK%2F3PfY9WVXGmOrGdxEhawBq28gJYSdWooZ2vXZNWa2X8gNJEyOiUaKbzH6%2FMKsFkt8TnklP&X-Amz-Signature=5722fef231f2b517f145020a7a6fd3eb3aac5d596aa70f68c98534e0a0784fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDF22Z7%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIC4DnwsA1NYT648uDI424P9ZuhZkSTAzQXDt8RRlWu1OAiALPVi38ApCEu1A9HOIQ9UzK0zOEMBXE96XAsUvNHRXQyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ7xJe3WZcp9JDfYwKtwDme2Yw1FXI9oRmm9Q0raDSJpy58b47lnvghqJt6CxPP2B9pr5K1I%2FZQHTlOCUDrNy5%2FpEleUptlCsiyGx078zuWAycUE%2FJP%2FsY9bOdMMjLrYaUSoiap3CMLZgs4f2V9BzoWOvVMr6y6Dyh0XogzUrv6frOsSx5RubnVahCG%2BQiqYsZq8NTUZvzLCecgH8aJ0pDNfXmgN3cUX3Tf5M010bL3hoaoewU6BC5lBgnzy7CH0ECTDGK5Wpgy2t01Be%2F%2Fk%2FyAb9LssMavMGVc%2BN5stu%2FLPc0dJluXsyBnF3nqG5HIBmaMugRsOWFPMVUSQc2lCKdRHf%2FTAt9Z3SF7J3AO2nG3x0KkC0lweVrli88%2FBwKgmBlTghz6Tywh%2BQKkdggrFPtJd1jmK1HiS991VoS0fo09vs7E7nj5dWD3cFxwP%2FA3kwp34voRp8DCiPPMCN10YL%2Bfa7OMoYpBZZRai4cVrFgrjSqmhNOoayM8gnZ0C5yi0D%2Bi9iSX9FdHORcNTmiMNGykoAsc3Lu8hAWiINivuvrxV3refZDQ9TkRn44BAq15PU3Umna072XbJWLQsgXy2w8rRTEpaYjbNzbtHns6%2FA93WIPPIfcT8iDNJhvbu89wckFQk4geDDpVveBMkw2%2BfcxgY6pgFCuPHRfLOKMHRK2vMtxnBTkGOdT0YtzD4G5vX0f4xmghSLqUwRC51WBulnCE5qHO12iExgcM35FBnIXwWwdFY9yBAJXznNUXjdamR7q%2BSgtCXZFSO1uZUPsxSFSOykY4Fuy%2FIM6coFEz%2Bq2nGQWNMVOsC3F0%2Ba9XSp9oDio%2BkEjKHFU6MTGjdnst2%2FjG5HLYPmYRDHlPwB3eL7P%2FDwrMK9ANy8y27U&X-Amz-Signature=6d1ca866b66f243674b44ff0a613760d537bb607d2a6599de7d8198db194096c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
