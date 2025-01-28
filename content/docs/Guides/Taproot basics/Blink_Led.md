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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEVKAUZ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDd0LDM8QNp3ET4H449lhqMz5A7jAVyt5gQWFMr65IWqAiEAyXxTwi5X1Fwk10j7xhmn2jBrdHWUIbfqFepXjX0spbsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDO75f25R2bZU97wkhSrcA05gwWMysz8VPvxFS0qObXSjb9rqqF2ewAgeh5vDHqGWg%2BXLhvvyIc7eP9IQpeMArCPLh2K4n5V6WvWcEwVNA4gomIlK3%2BvIXzZ1MmKw39LGL%2FmkMaHdacyfoENMUswbYDGZf1vk8yIgXGZ3efbdEpcuJyYfgf1dOx%2FCjUJGOpPjrw2uKZBz62zlGUP0H6VVNdjq2Gt7fJojTHgSMZyXYm9c7hlSq6l%2BRnsb2dG7RYekBjIbbAdDx9T1ihscq15OIINLhFGBW3YmWv1CfWRtExKY%2FOP%2B1RRJOai060MCWqCp%2BQv7DpydDtX8EP%2BpSYS%2BWSyFqCXzF85MF0Ui1wQo0hVT0Dh8q9FCX3hsCDsxPdhqV1vsry%2F4dZzih0W9OoKKa6Ih%2BTFjYxcH%2FnkDxmriSsAyEGzRCg3KSEftNVXx4fPWO2peLfVYvvVC2i4weZKpQIGeFcLkp%2FTd6izoJH90IRiO4vOXHmFEfSH65d%2FQ1bMipOmQzU1%2FtIQsRyC5LtIlUQ6Qn1pu8mQV%2B83e4S10Ks3v9EUmNuZTVrhm%2FQVQl0oTqUxhsTCxITEcAda%2BHBJxopMtgkAYgl%2BtoQyTlo4JFOMc3Ibp8UIzk6qYt6Imml9BBKCmekEhTZme6iDpMN6V5bwGOqUBASch7ddmF2pSKvjesBRoCYx7WV1j6io4NTFoVAv%2Fp5RRVqYnEaqrrnpQbiCrFVhCLeNGYe9Rh118Ko2I96Nw2%2Bm27in%2FQVW628ls5ihjF0z0O%2F%2Bf40%2BBIBff%2BBRr4bdtG6KxeWS7bHd50MyTdnXu%2FOYMAPKrKpNROO%2BXbp00Nhbw537qfZbOWdkyps%2FDtBDEqKr3Ati0ysXqzWCGflP2KERSgKnM&X-Amz-Signature=cf4c1d1661b06aa5a4190267642fa2bf481746ac35a48c5a5f42ab72c6b7f436&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GUAORXM%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDCgNc0wkUbxydxeD%2Fm0yZNYV250LF2addyKPxuSienqwIgc07shPouEbtVyOugob84rAP716eXhujpusqbZ5OBaRcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGkHehDW7LfvqrTxoyrcA%2FjO4TyGd4ucrS4gkYDnYS%2FPENDPByBFqU1DqRIp1AhEAytx3cvhTGXYZWGWYMZWSM991%2FZ607vG5y9ofCRBOM6irumxGCFo62%2BX54VlfF4J0uVVde3CFgxk8PyY3gwDx047X1w3PROVIrGZHN0VFa9H0jfuNwQckuOLrsV5XXA5ue5zZMIfKnt9To5c9dbmmg9RnAUUSLEKoIDhnTj7ea%2BQZkB5jroGoswQla%2B4zMYDV5F%2FqC0NAv6yIS%2F76hIG9EQPIXKKm%2FXn%2BAcga%2FZrr%2BmBPsw18IC1uAq%2Bfqb%2BOyjZyqKxkc0yQFt2H7Ba2kVAqHSf4XuwvAJKEK3wYDabXAJYUK%2FuyeCyuZLzaQCLYI%2Fb0%2BszQsxqs%2Bl4r%2B9Lm8TtKiBMLgyt2RTFk9moF9Nv1iSrMkgNHOF3UaWh3dyuEbaFuB2zMlOoSPK72XTCOryKCsMLUkbEPKDxX0qrff%2Bd%2BLCWyDvySk0VMZehY0ySSvWmCFVWCZnGawpuoKTICke183a4SNmh6dCPm6F%2F%2BdaEYRwF%2BmDAgoy5ERafjUJHbkIJBGa7efjOEfvMmhgTWWdApr%2Ba59OQUG3cwqXdurrLX5XqtNOJpKwKulc798hAiB1DGj2aFNMvnFHxgDh9MLqW5bwGOqUBnlTEARO8HwrKY6jgbTutngVnZKsAOqwXjIzqCGzL1HEX%2Bckp7HCHLdNeI0kqFvBBHQrvasb8qosKeiHbv6DQdXWVVbmrO0x%2F53lewBprwfrKktIYrc94NqOmXHe%2FgQs7Qb3fz0c8XGExpYpfXCYDJc%2FqTM56sSoQ%2BsijtjED4Axut0ItkUGyp%2FMXveUiO0f7FAuxJDpilr8FW67OtkFllGMw5odM&X-Amz-Signature=88fc3c3f3462891d65dc29bf6fd4368cf96aea80d5990a621c6ed501a72e62ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
