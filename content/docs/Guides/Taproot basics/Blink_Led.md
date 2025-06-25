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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZG5TK3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF86A6iXEmXwZhfBTb8cORR5A9DL0bjTOHCfsicnC1U0AiEAvz9xLX6mQ87CSBM4visujVMBv5F4yjSfv15fmpaGSqEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDB4cVQU2vrUuNCaTlyrcA7vURLi4E4QeGM%2B6QHHB5ToukaTCZTAAhFBKkCpx3lGSCLAPdr%2BQjvrPjtytEZtQAWb7HeV8258nqwfCpC4F5ZOVJAV9rkO8uXI%2F7O%2BJrOSQDnz59loRms1ovrI3M%2FOOPs3diAjtphh8PtsZGrH1xpowe8dLwgizoRAC2hRRLbg1AqXJ7uCvyuC2OxdKP7Ahq6RRyw6A8lUZ0sTPuDH9lsDilJf65GKdKN5PgE00h5S3ytTjmSB5F9IrkF382ki7jwOen%2BdRwJqd74ev0GL%2BhZueRTvvYJqAc1KrmOsbsqQqYQjy%2FsWNNLBtHZ5%2FCtcP7FCo5cpmPV%2BRRRq5x0XMKHJoSn17Ysk%2F6cQHpCRD7Vmc%2Fq5MwutxMXxJuRIsFTtRzTtCGvPnAOzrE5ZCDEiY7B%2FGx5QSpwE%2B3g9FIlHSF0Pnb%2F7YEAjy%2B8%2FIao6uEXltZxDx%2ByV6NHeyTK%2BXnK1MC1QYdF2AHPKK0AonGxoHL5bwowBXAvr5n%2BnCAbQTA8XERCZF7NtnIEFH3bE3gQCM4dJ7lYJchXF%2BtBlsWUr5X4ya3hR89BmtTA9zyV0cNqOqHD%2FxFTfsfe5O%2Fa6HeYvnnMdvFeGGLScfAxVnYdtokKnh2JALXZ31EmTruknuMJvC7cIGOqUB%2BfFP3IlRKWY6ZAMVoBDcSXPXO4RQYsLNL2PR1V%2FJN88KMoPuW7UOvxUq%2BWFqlhKv%2BAYEoE0iPxuNb4HKFnMpbaqYXY29InYLw8CCkxHpL%2Bz5W04cDVZoYK4jgl6qRDmAhd2L3GId500kQ4iGe29AaUiBQCdYUfaRAMGaVI%2FMEBvWi6FaW7aVsDvngn%2B6ME9PSTAQFq0CQKQWC0JJV6kSUPLUZ3VV&X-Amz-Signature=1c458f7a39b5bc6386d14d0d6c211063dc5df5cc64bfdba94a983b45f0681cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KEKGZF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCKRpJtSNCeeWEQn3Zw%2Bm3qbQYl4ossE%2BvUONcl4DY%2FEgIgAWwqQpK6EmjL2hjpuS3gSl3BywYb04Ymet8j7JQSOnEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKO0CvEgc6mOroHBnCrcA9QbnIwj5AGkJkYO8Zik%2BzCss1w8EI92ERT29MPa3nKT9ptz%2BMpxWgzZrLUdIG8hLxHDVBTObUpWLDkITELpEhpX7CCMI6r9Cm%2FzlUxqdiGM7ilNLWFD%2FKgxO82HBul%2FGKLms00WdXSpT%2BiMS6Z7OaP8HE9%2FRUTyhUsw%2Fh6eVD7pzNeWy7zhb7%2Bkdw%2Bi1F9Wcw6UN8V%2FVRzhYL7LCNrKMXQA%2B%2F5pUvG3fs0LnKLQt5uYPcvcPLs8PzkLeXmOIkLsxNyAS9GEuUSjBml%2BzKMp9aOAyElsLfai58IpHgAHVpE7xhU%2B3mwCpxi4ZoYTd1baJ33uYPc5Du6ulkv4IYdQ8lNcDvls1UcIDP%2BKnzBncgyJsoNf9xqHTTPx6k0LBnlFg6m1e6tmJ5fo1lxS5UnUzVboDdQpgPlPOw1%2B%2BOlmZXhVCE1cCaZvtXjJl9XNfm0iYsEv8l1iDmxgGzHOppa4RI27kcGs2pNJL5xTf9CIb5%2F2FsZuxnHFYHgIorq3yo7ohubIJAIVSthjwGQrhpjqQv5gg0VNIoysJjzJTxC2crnRh3Sm%2B8AgxNkhsgq0ErHIbEL%2FqdQiajOxGzlF5V29GQMLJtE8045GSNGvuqyZU9IilP0Cz%2B4jcFb3fMW0MKeW7cIGOqUBxxngAR3WyKXDmeYJnXM%2Fh9xfNhP%2F0Gis0YQ4GmDlla6CgZw75QLmozvpy47R10rZSVjTt6RHOCKS%2FaUDwSaoRx4ximLRvAzJb%2FvjqgCOgP1Cs1a1ov9PpYhXpsqpfgm0M2d98rpyumjOE7Ps7eXKGRsKiSLrTi6x5YR%2FBSo5J8u4BYgxK4aVe3cbF4zhow%2BcuNUdt1nTNa8lV7IWvG9uTTvDo0Vw&X-Amz-Signature=8abedf601f67a67f6abd65aa8598a356375774ff414decf0157625fbf6ca339c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
