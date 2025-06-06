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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGEPCNG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU5KdES0xsb9ujhDlEEsFyo31Y8ixjmXMsy82VPCR60QIgXWRrC3y7JyR0uhTqj5dhcEJt14dQ3a24XffsDeyGdRoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDM2PiOarSIOm3LGTNSrcA1ex1hxYDTvbvB7emMnKzYWO9SJexm1NdmP5LduK5Fm2NLAO6k3vFuFA5dIbgbT4CizhYFSPjvrR4gvz3xbCZbiQSQkn5E8zSFMPZvf2higq1N1pZ1Mue1Vr2isMkfB2zX4osaub8FciFqxlAJVTrOCnfnK%2F9HS4Frm4HreTkilAk144WTaw2AcOaDOpTk3%2BQviXVacAEoWJ9fC0mfcHxcEhaOWlHzDfZS%2BgaBooCnzNx7acCZaS82S%2Ftwf0T7sWvpMClBy%2FlCEBMLMmP5kEMQPS289W0X8%2B8FNye5o%2B7Hrc5ENznRIcrsxgngwVMmfJTGmTK7Z5mVt%2BMVN4urko%2Bd%2FLxbpUgTm3kuYx8HqlCLT30pC7IDQr8MCT4RVB3h7i5QYeqQ%2F6771dq0qh6p8v0u8Kp0A%2F3m5YYl7w1P8iirEQ%2Bg3MhV3gEEhhcRTRvnZWeurraBR5owTyxnR9Q8bbLCzWKbQAQqTSwHM%2FWbGLvqsJmk%2Byiwkya3LsnmPAB%2FEnHystqfe5BuCfDc0S8lKASL4cb2v5%2BwK4VYeF1dliFm8ifs0GqM1v3wvZJfe9AfbFDc4lduyqAx0xBnThPVUO3PrXxmUfLnKvRgSMZ02pqmWm4taKsuxkoj5J%2BqJ5MLeGi8IGOqUBzizj2IVu8uriFEi9XSfTpbLAFg0T%2B6k3UengQVRv9lVCvUKO3sQ2kW5vjdYzQJxYGZxsmrpK3wSf%2F807o5H24b%2F4eqWM2xEw22EH7yy8KjBs%2FSuXLvwV5OC7ykKmds6Jcs15mkWtM%2BbjMRwuwisZTpfzRulHnKNwNXEksGfoZRxhg0xIKjUDpJSo53CaED4AXotuWA%2BecSUSH7OP7N7zlCsj4KV%2B&X-Amz-Signature=e438fc8e93b2bb7901f02a86d734a47069487903fe59d8f083091e00b7713857&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODNCAM7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH90Iuy7B9IQEJVje%2F%2FvfkcDsn1ziU2BXMRH2oCcvHAgAiEAoSBIlNWeYMrethwkCPHyYHRmKVUzumoLIYRrh%2BRS9Q0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMPRj5%2Fp1LKyQf4NCCrcA6upQDsLv9hUqqUe3itpvUhNzHFwc5Q9Jdgl1quaUAvQ6e6zulGRIuK9k7M92QY8MjnkDOLQfy3m53J15KEVQnGrb%2FQuv5T3cQju6qWpg080%2BRhC9H169mSZO7q9%2BH2cGXTo1Dz9NqlBgHwuf4EhcqVWj5fztbIQ2LfHNThKF7quvFk6i%2F2brTsP62MROfuz52LTELGIqfCtABMrC4sJdbJahr9F%2BBtOdQrgrZ92uUxV1zfQVtURfeVeyGVfoXm9fzLwdImgoC4YTq0H9wH947eg3iH79xeQhP8Pj9xX4sUTsT1DjS8dbsaeGiQTAfcjlMyRgLfKkRHBM6Nht02rrMqElZvI5%2BIUHxCE1TgqtW8vs8rwcGoxa9JgqlKxadL7S9RXjZVhsSirFO4d69khHuMvbQRD6CKeWDbpbERMJVNCUXo2oIVdvHR6goAhN3d%2BOKK4GvnezeaFDxDHmSJnGns7GuzyqzIIu3qmF0w5Sf7ztor8xfJ2QG82QQpVFca8N2Fx2Pn%2BnGs%2FU4YDeB2WA3iS%2FIDkHZJxS2V2g%2B10uWAbIH9EWnOwWuw0vpoOkvZSXI9PodV%2F6VubOOsBKL2W4FFDxQP0c6w8t97CdR6gtMx8mg8%2FChQYsH%2FJGUbTMKGXi8IGOqUBKz4%2B7A5nXQ6TeXB4pwaxrSAWrGplOiOyfJuLpgdoKMiMngmUQU6A4AGw%2BoGTVkXdclbErhpg0zyxl5ovPdoUpYNyvBnELli%2Ffc%2FErlfJgP0SwFdXnBsaCCiSeBUCDC%2Bmap1c5SMnyu%2BKZYFApgHNAHyhdgevfQb8sCYG2S1hxRSjVb4AFcgoNAiGpp3Bf0ehrI3eYuGXsRAPaYhLNQc4YT4g0%2BKl&X-Amz-Signature=f15bc698c24c0e237ef38e82b6cb9f05cf660df2d645a1c2f8b63397f0a7dec3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
