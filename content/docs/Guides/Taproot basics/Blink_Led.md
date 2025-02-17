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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIEQAPL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGtRbH1PE75eoOVtd1QEUp2QA461oRC9U3liL8VmwZEEAiEA0CmQ1u8nvelczq5ATDL1zlQYLcn4jLwJASAiWZ4fdVsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHYkyf%2BNSACEHXKSoSrcA7D5itvtHJmH4TLOEayf8Z0czYkUck%2Btwna2AHxSfx3XYwKz5Lgtt3BRoA9dWsWa01w1amL2%2Fz62Ymv4SC%2FpSGnj3JGH7i8Y7NqRQPLOAQ3MiJb%2FYNZwzEUVwF9hMgb7iZAMqMVEzLESBsnquMEXs7kJQiV6w2ujSBM3uTuPKgh3bnmwy5x4nss%2Fp89Ww36OvVeilixadENIA7uI%2BkbeGzYEsmB%2FYLqaZe6%2FTLuxwUqk8DIFhpoLs%2BJwamOmSkckHcZxTTOiJO4I8vDJwG2zeiCSUK8e4ZcCLW4knBvkGGsPDsMl7pLpx5tu6kIvRUfgduL93GrM%2FmqqqIBbZdLtfbbb4%2BIK8U1Y%2FfKDSxy5omT3AGDSpSMuGi8Aigb2%2B%2FY7lJC8hjEiVBDDszprJOweaEpIseYv7wxKpWG%2BPGz%2F9gIOfswNZv8GrdgmhPMFk8gbj%2BxtxsHLohTF2vAK9aqp32CMSVkjmBokQw09UHsTp5mSghMm%2FcyRwLcDUpsUTRLAgxxBJ3GX3VTYjqCwyjecuzbSS1J5i1yxs45Ei7Sso5IT7i0hxw3AUPADEWW3Nvira1jA6JVcIVCIYUawtIO%2F6RvCOo4QhsEUCtTksy7TJHISUoCSOlUyX074bCuFMOn1zb0GOqUBukWKDgnSxkkkMh01UN%2FGpK8snUERoM6WX5ns4fPBIkHipf4kFnkdFRFehoWnd9p0WiMd39S6XRzoAXUYcFYfyZtUYrrzo6QOYpNbhjxDg4P0f68tCJ1SMRcu4%2BNP95XLe%2BcKY9rAN5XUm4mmg6%2F1xGWVyc%2Fv5Xh004OLlnYajMmSD8YT3Z436I%2BNAxyh0CZCjopPVWZc%2BNQuvRtDQjCXdMxTUnF%2B&X-Amz-Signature=4f348c6c9c7c0b9d87d97400957a792a41c4cbed506084df846c08e2b35d5464&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU67VRZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIAcLQ1ZdcvSEjV3cOmq%2FilxzD64my45AKvmiheiMxJlAAiEAzznygISF9WSx8KNNBuFoyxFFO%2FxwuzQcYDZuwDKVK0Eq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBKPoib3nayKO9VYWCrcA2fEeung6yRoO6Q7s8C2NJs%2FbFkqfANV6WWJSyfj2pFhcwp8nJCObPF4WCi73%2FyR46VFE5%2FSs9BvzIcuREahtj3xScWwAKxfMWijnIJTReYsNkDXGZlZXlg9bcEQZ3Et9dG6vcwg9eaAqPq0JSKJbX84MpN%2FNVoHXuQVdNGNXuwoYCxaGkp8Ts%2BzKSgxfEPXSQlMreI%2FUkwwDr%2BbIUWeZrq%2FXtbiCvDvFZsk%2BKs5YmSOOyriCMvCNEqCAWqIDDLXadm0I%2BImXutNnt46Ew%2BP%2BbncjamZ2VRhewGJrd3%2B6ploZC2szCZ8haqIdsrb%2BIERQTZgYBS8WLda%2FCnjOG9iOrn3ZrLuoEliJh%2FGtB54fdyAkxFT%2Bono6pl%2FvGe5u9SjaoXQjz4Es4aASa5qnH5WIOJ7C%2FfD4LMYBxSsr05SnSildiPKdCQ7YOwKmBZyMkl%2BFMRl6T2hXtYluxlKm%2B45UMSuJiejAzrCQlKP6yHiW1OuBuyu4ll9LVEqe4913Qi9xu4qbAzSnme7dby9Xczg5aOqyf3ZV82YZPFxIJRUGj8a%2BsrME2Kd%2BMYWWi%2Byogifzz0c3%2FZwuDgQZF6915g8BFkhS%2BibpY3riya%2F66wgjPgAEd%2BeSevcaa3I%2FnBDMP31zb0GOqUBC%2BjZBwDrjjKSWUl5uI8i4OFSvsyvq0dQVRO1GA744UI686bH4PvDCmK82NPPG%2Bd0PqnSwsGsPEyCP2hIaYjMAGM7A9bIuFgczLcQwQ%2BEg4pHTkMfstBotrJxDsCd%2FrxNQJo%2Fm0TFJH5AXMbbirmRgO%2BLZVcoC4vvApJ4Lw94iT3iQzIoTpnKQSZsXDkrTahUWLVoMwv%2FtMjNf27IhvJ8CfVnbPMt&X-Amz-Signature=70fafaf4c5414bd17964f11358dac0c98fd4a7a6defe9b01caede834e24c445f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
