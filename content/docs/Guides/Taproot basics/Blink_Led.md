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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGS5ZMS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIE3qLRopwezPmTVXkxSvKAQhzISbWym6UNZkMl5JWctWAiAHn5ccEOoEL4DxIuAdk3APjBMP6zrEvjXdxJUVdj2eZSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbt%2B7YX5UPX9aQPEjKtwDkRvURWQEub4t%2F5DJQQPQ%2FOt%2FxLoQCVlQpuj0dGGS8fMptSv2HQ6bKbuBs%2Faef6knuL%2BRISrrt7gw2Dv%2FwXm9OrZUtThdcAf%2BQsGkmLIrmKyiZJNBODyksA3HG7MnpY0VDFa%2BZ7J6TW%2Bg1%2FEV%2FsIGG7YRv6iGY%2Bw4Gx2mYfiWHtHDfbzozT8vyZIs5ZOhlB2AsyER1HmeYE7ZkgohHWd7ND8UJdA4er1LCjcVNfcQsy%2FHS9UpMPccmpxmPjX73ln7So9%2FeJXzwBBTJPz4eL61SovCObE%2F%2F6%2BlL0AWM0%2BpnYTpB8r%2BrAZfMpsBR%2BCBkc8gY9xAiMcCWjmWdiwmnai9pdOleaBMrVlvBtdsSSkb9GY0WqM11A81maQTRvWwdJdgCo2FJdkmOFJ3Zk0qyTPvKQDyVBAwrBG7cC6gSl0mpDJrq%2FLTB%2FqrDF%2FINPTDeoKkuMXmzoCideFQa2q3wDH5V%2BMwx38la%2FLUxepS8DCqe%2BjYDoMR4cPsNXZKBRlIM3hCb65Uw4VqWjXFYw2T0q4XMyP%2BDPtwZUrt0P2Suxt6U1JTGzFZQ1X8AaxFtBw%2BBBNRrJdyW9pCPKfysHvJlJeh2zB9ppqxYTN8jeuG8Ne7rLm%2FQkpp1FJ09YAltRQwqIL6wQY6pgEGc5JqSmvItddagTL%2FItseMGrh27XO21TpByUi3Le84yiPe5AUwhUd2pGy8jjFN7AEaSw%2BWbeX2JwyaFvZMEE8349Ythrq0Lw265sE5bBeM26byRo3cuuJnwe5HlgGbRqBcJttoPIICkpzhaplaXkhhzsyrGKj7ZAC55w9apPJzgTLDtFZ%2FGUe4BQJQLMSOdSIC9Y2sbA%2BcFHFTdCIDRQOzTcj13h7&X-Amz-Signature=42b2999dd8b2f445023100228b89630701ac77985c9a1913e607b8b781cf87d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDQZFMI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCo0sCurJsJoCIjijCstuGZR%2FegSAw1eLtG4vGvzfynUwIhAIl88EqySuTjDSMALIiugtnC%2FzFuL8a6mBWN0urGc4XWKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmRycGILN%2F0BZt3ykq3APVC%2BfRs9id8byhXGmMy9EPKcsxU%2FvjunPbAYNWc7bKRIbMRN4U%2Fi0gTFh19op4Z%2BtQNZy%2FjjGoWFj16Qg4QCWVOPCV6nawkDk9WlFIRZ8450SHogoB93Gu9Z%2FDlVLiEzNqX2v6rOlSsLOLr%2Ff5di7dmR66jqMZHCgE4I0y2Sw8VqBpy536PxqvGEznoOzkxZtJZbaZoAJKl3bHFXGyae8xM6G%2BAT8hQpZrjFK8WNDvC7pHZbsPhSflh3duTBV3Oq6lCSaXd4KBtALEUeZHGMwEiHG6H6qt1lq2PEtOPAVPR%2F4aJyE10lksB%2FYQFxLH5ri5fcKwkO4HRUjIxASvugVl6weMGPUC4WYoNreqyyKDIOw2em5BHOQmoRUUgQ2KLWHB0SgHDbjui6yKhgEiogFo4FwYWm380ZjOfdUn6SSSSsqj2CO7mpFJGNDgdC5kUFs2ZOnGR4UUH1AJOKa%2BcejH5%2B%2FHteGIAY8vW8g6EsH32wFbE%2BFhHXHapblspfBFGme8cPUEAfl%2F106YT4uMBZskf6PTBlpxXg%2BKv51%2FQ05VEwtD2TyDBnyIE0ydW0EKfZwby7zbLZxddb0XXw%2FT2HpiC4UUFxA0kiC3NgAMD4SKcqWW0EODsHuehTde7zCcgvrBBjqkAW42Tz8mPFXmHmAPpPNJSzONSM4g37RG%2FQtJ6QVb%2Br3QLHXJh5oara6f96pKUvylgGrvx%2BoyPdbJ%2BtTMgVevlnzImDaXbPv0EkI3rFIKK2tGE57vaZo5Hn%2BryvXkVQQZTDAL3Etlnlcn3NX1r3hRRxqDhn0wh9z7Fe7ratwVEBitVbiZnYhQioU9F%2BMthXe7WJjIFEezkY%2BFiK5f0SbjR9phHePG&X-Amz-Signature=160550c2877401ad3a3a524e9c34eebbcbcd545ed30f52b36cbd610d8baf80e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
