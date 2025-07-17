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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKNQMQH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCSCzdvYIkterIHhrAKuB1E3yYuOktlTyObRh5qNBB86AIgTq6wgYdMier9pEhN%2FZ6mEmpLOAdofz96EmLOWUxoPOsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBLmy1PT2oL7rn5rkSrcA6zwfUb1%2FwqtFAqCqIimfrFXXW77izJodhYmRQHOO5GmzqhI6VxvxypX9%2BfG8ufj4QGOqLNeV73TNMEBlllguPXxPsVu0UnwYz35SbLPe%2BVkmCN7f%2F7OPN5vwCNHvbG%2BFZGhUcjHcz%2FdQPmuftK%2B2Bt2bSg1RTIqs0ZMs%2FKkal17LYXDOzJtDt4%2Buyb7mGks45PQasNnmDd8HVjW%2Fjn2ISuKBBG4GVaXu7e4fQJsDW6tbMbiD1xCarcrf3pucZ3EaiXhvFlKGNRuN7aUIRlAdctpuWZ3RE4nwM7n9BYrNOaHxMtmXFTmfQjHUHhoeyqrzwdABXNAR9imLqyD7xAIGLZWdbXUKcgz2uZ9lTCdmqC5ky94qgqqQcU6kJR9BIiejwXNm%2B4IbpD%2FUr9HB6Qqr0rLEY5jVndGsn2cOHSJJPD4oZhJ%2FgnnhTOKaKBrvpv7GsnbGxrg2tJ9LBXS14fc0XhqI1eJ%2BL%2Fu3PX5t9KiS8McPZJAfcQ2%2FYgBlpAX5tgW8o%2FrpgboRaIfwhpkAR0zGS9Gu6apA1qgGImT8pMv%2Bn286Y9tOGhCLbUoRGqUBbmQmTs5zOc0dn98jf69YA11nT1wwo9jAmDD92qWERufHHJcoJOOy3S%2BCQ%2FRP23cMMi35cMGOqUBPlyGarFxhVXgzD5kQ7hWqN6%2FJDkjGOmr3B5FJ4j4FxD%2BpJAQ2%2B7gJXTUbnel4Cy4sOAePVhanOrXWwTXad3QZj1zwIWuwL6tpDPdSJh1EapCXe27%2Bta%2FcD7bUxwdxks61SueDdv2NWjRG3oE9Oc%2BZKuR5NFV2knCZ8PdlCfNbV3hSi4P0URf8q0nZIbnqDTyL7p%2F3x5%2BKmwEa2CpqZPCuCCe0lr5&X-Amz-Signature=e1e5e6ba474c4aff8763b94781fb05265448090af78ea4ca6b0bbde0cc7adc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AP75CY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICdrUOaZX%2BihjLfM8t83obsXd1tiRZ4Np4MrIf7o3TtVAiEA5W1q9zb0kNLW%2F%2FoeP3HUeDJR0kBVAflkSHZ171vnLN4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCXpnf2IdNx7mYa8%2ByrcA4t%2Bw3nquUxvgtHl2%2FXFu9JnTCWkDxmY1ZOZA050Q3CQFgk29aIV5ly0zJMaZgHlpySNiMSFexUsstbfctH7v6PPQW7pv3QvDey10Jc0qy8Y36Iq%2FlRvVuv73SUlDc2pByTAwl0m39%2FLWox%2FtxnkVvsJIwYBLKUU2v5f9jMGIhI61Y23sJ2ZRPzKrmK71EY1CHdObhM19vii6c8UT1iJDVIfdWqYTozGPHH%2FZxuKC9Apy3OYMEpY%2By3pQFiPpF6IHo4DtCZf6D4Yvhbk9UtW5a%2BQIvhNFFQ48mzvICU2MRdYErm%2FsDbfFUqMKB%2BPJ9pmpXZSImEjkZG%2B%2FJRNiyEn%2F4etvg%2BZgDBnuF6xPPxzVmUDZdgZoWBYw9idq%2BOtQPrZuT%2BwzOMyTzNPWMYvAJkHV6P6quJrVWeqOSMh3MZiPSUf%2FDmQdi0YydcmQ2%2FBEDXZuMMMXOWmcJWu7XjJmURRj1hc%2BR%2FQR46X4as3yVXE%2FNn5SZDRn%2BpGvwoHWj6th4xDRxJSUP3KYoStOjnDD6Adr2Dco%2FFSHCx4itHuMQcPX513aJX4sXIaO7cieoMxz6dPgExbTA8fyLAfHMVCk8tmxWgjg%2FsPP9pfT8LjaMLf1g0V%2B4KCm8x789%2FDjpg%2BMMW45cMGOqUBZhPpn0fN%2FscICPJC%2BliBGeqyqgHir%2B%2B32VLhIzjPFyYXmpRgcQMekDVAc8o669JnuajVpNwqIXkD5xpdmtNntEE9vgHiQJCoHm8bmhEITfl7ah7wKtyPM2rbkfUbcNSOa%2BMoNVqAEDQADtHPTrogf0QErW3dQnuVSIISroHb8nWiV4R3qLTFEH9Pxx7jRNcVKWR6Ovvi%2FDd4jqxzuQCeeMLwkmaK&X-Amz-Signature=3a7377c72f46e1c7959ae618ecd67711ea43f9336a49c5f23673f46ad135d786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
