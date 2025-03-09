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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLCZEWU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDFD7p5J3ACWexs8fHt61rFT0JvbFaEUtdHL%2FnJT%2FoHAQIhAK7iF7VTAyeChc5ExgAz9BQRnU2Q59aNajPIAm4ncUQ6Kv8DCGkQABoMNjM3NDIzMTgzODA1IgwJFxNu56WaiZwnDGwq3ANbE37422eMJBE37CGJtp5s53U0UChRo4dWG9UJ%2FN%2BfGpz3Lf6EZMaQXgwhixu87x6YKN3g%2BqkZdjv78joYvNWLVfvTA6%2FYmW05bIBQRf2FUfZ6IpcKFYDEr2iPxMvC1gEHZZFJB67Fw3O%2FOaalY4wRTu2igAQdkMofxbeeFUKYGr76%2BEMRWQIz3HSH9EooYe1IbtdgVtW2LZlxNhualcwHv3o6BZxLF0K2aDpJpv%2BplcrcnYBqO2j29Jc2YFAgXCQO%2FDbO2eTRJmTNoV2tHuyKczr%2B2MOGuQZFrT%2Bit9bNz9tjvFIpoXXIXvV%2Fx0uQnODki8GapL4SwTaXxrs1YNy2Y76Zqooy5g58MncwG2jUZhdHTgPVUROWvxRVtIB%2BhYh4d6ANMjO%2F0OJFpruA%2BLYceYbbAn2s4lUaoCEFQyI82guVwZLDlzbbmcfcICZzsuHfbb3K1Nd77tR4HZj3uqqomlhUUPTg4nUbEh1OszyKEkKGUhLSPo9SVjBw4PGc96HRLOKI%2F1WFdyWlyc1kiztxl2K3hv1L4RmcuIOHBt9EWghtu7sR%2FtMg6R6J1UNz3UILIE7N0syFpvXPg7l4GM4uuIW4CTZMW7nrxKQ1N6UAX0mkq5fNWAk3AFVdNzCvq7O%2BBjqkAXg4NVX8UGtOgVx82s2ozTQrrrIlnEodFsbcfb8OimMQc%2FL170Z52492E2Fe8DX%2B2%2FLd0RzeGSym2qUUF9392viVghj2gNAs2kh1Xca7bbSR2VWVZOXLqAcSMxuXQdaXfQgzs%2FttcutLaICSxUreXFvladhOas2lyYuYsE1n4Rm%2B1%2BAkjiVkkgp%2FtqSRCL%2FF6ItFIpiGhZb0oB%2Farrv2GPWjPrKC&X-Amz-Signature=7f63870e2587a5fc0b30ffa4c4b4dd68671ce45f06abc302c0c3ed39fe680388&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPIVUFK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCazvx0YgYHHP8fLQeKOuvO8d5UTyUElnaH6on6FXFKnQIhAKVwh2kuHVIgpj32CDKEm6zg9RFUrkGX7s5bygEO6ip%2BKv8DCGkQABoMNjM3NDIzMTgzODA1IgwyQEtUlHnMLCu6%2BSEq3AMcOGXR2gSfRZVEwCkV58QGBxgitfQucffYJECOl%2Fav4cKVrF2ssYOYy8eaMLog7MnJ6ecT4khbN%2FV4llh0DtMTBY0GV3G33AgCPN79YHJLbUjRJhtzlsIpcbgf0P2kQlqu1hUrUdTSOaucMXwOQp0Ozv60dDhmRH%2BKYxN7U8s8jsRf7BQijNPT9bxyRkrKbocFAj585H3efeIWjof84f8oG%2Fh19F3sVHGoBgU%2FaKYvtSpIfjt9PAcRiKoc0PPEZyK4Gmxqa7dLxwHrqmS3Mm1dghz0F3WhaHYLvzxjrDYYtSUuIbBiZLNWu4bpaWUOuS%2Bt8eRQPwIM%2BqRsRZgXVFAweIkkYWhANA6U5Q4ASvsn3REIV%2BMdzTYFclElBn9mNLfssAF3An21KSa3frAhjkuxs2VBT2ebvs7cP1Zt%2BW1Flj5qXreKK%2FSy%2Buxu%2Bb%2FOOKwHaFGSqds0ct4IJ70p4Q2%2BMkGXEsDvWW4ndidU7s%2BZRxHfMPjv8LamKqo8B47UmdHodOM2HgRRRec7ZYtcv%2ByvLjKsK%2FCauhLwhHifbwc62cToH9XEAY%2BC1H8zCKyg6IMLFdeSlP%2Bznc%2BY1jOpLkckIa6jA2Tufzesz7GFkFTGZ%2F5ai%2FqAAMhjIziThjD1q7O%2BBjqkAS20r9bJ50%2Fu2dlNBZXKk%2BBQQ1y8FQw8PTo3DgyO0Tcp8Z%2FgqokD5nfIkOC3EwGJyRuGHN6bM5QWxJn4MhOtXveu%2FHLXcHT6aZwfpYKoZrzQO3N5M6zhpozWb4%2Fl%2F9wVt9eGeF%2FYXB55xunvCSx7v6zN3ECDiasQMkaleBrqJ6LgTNAQb5cfRjSDYsOoWdNIo%2BUVPDvdn3jw52kOLAYWQrLfA3W4&X-Amz-Signature=f49563938a60cdae1d4ffbd3eaca4c398442885d612bd6766432ed215a43e4c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
