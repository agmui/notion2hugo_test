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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7MK4AF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGah%2BOqRfTGexGHW5aCa%2B84zY0KrYyml%2Fb6d73ePD65xAiA%2Bvk%2BaNikU9RgIA4o73MGh6jecazy9Gse%2BrRmhFqUQECqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxCP8JM%2BN%2F1hItOtKtwDtQBDH5aYoAum1xTym%2F%2F1h7ZDyiCEiHZPEYfETwd%2FnGnOquTYyPS5whHczn%2FUls7tzArVtdQjjynxPZnuPRCbsXq%2BLIDF8be7TrBDMloc81kUsnQWqNJqswNponAHM7b2qJB%2BiPSTWz2vsNRYwVRQXQT%2BZcH1rjP7AlIsb4i8I4tjER%2F19Fjq1tVHfquWlfSvmKQPzv8MLcdXrg5%2BwYTuUVO7JSU8vFGFaAnnQsmepwcZIzCgD43MOD4Tngl0ExDzB%2BbjPJK9vZ5R5SM3f7RWbhqTR%2FtUqkdFTX7hcE8SozEmoBz%2BDlg8VxymdMg5BsQlbKdmwQU5PVrSzAp2iD2bLgOBp%2F816cA8zxJeNNEbfxGV8%2Fo830vwgraD1bbiIrcY1Jt%2Fr0FJ1ti7OX7zgTsqAxHdJmdU6MpkUChQIGchfzGIkB5Yq4jMxcxnwca3%2F4rlqNKvpp7Rn%2FOCXRDrfNAclupOEGYvIlOtJvasqa6I4FiGFdFwRGd%2BBHb4KNtSTqhfsR1uDZR3ZRzQq3GCYdQlyPA6irvTKxJ0rNA6mFU15QWt7hiH9ORiyxtIcKPoNBoe1FdmEmfiHlRS0vznWe%2Bpmn4IA%2Fm%2FYCTZ7GDh%2B7a5xoOQUd4ZRAQy%2Bp1eZqEw0MeNvgY6pgEAbwuZ7DFPHrxzkEYczNyL5iZhwBOTynErTcpFMiF0Rze9Fsic20HFtEiaaMK6%2F93xxgSTtFxSSZITmKOJGm0T%2BvSlvIvn4uDEILrQznF5CzjSJKQwJcuKglTmMzCze%2FLNYun1iAOAfKBfGk44C72yrYHQx6Q35MHVRoCG6%2FV3vG7oPUmzvFEPoJp1rvCTrjOAbh5N%2FuEv71ubPLs2%2FvZ4Kqq0op5D&X-Amz-Signature=34fbf4b7ea072be810d67e117e6707fa785f01cb40ec60d708cfe1bb5d9324f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZYP2D5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFui9G3As28QzkJId29yO4TIf6IekI9B8yVWGzawbGAJAiASU4v%2B4DNec96rTYTPVAU4u95tZh%2F5C2FLB6OzGToqiyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM64s0MpA3TsuUYfXuKtwD0%2FiH86Fi8tgMSt7an8dPVTXsCQjXjjk9HlrOZrVO8DcLQmZrsYm1CnPy7tcCIu8wUMc2cHQwuTU8W1VtFYLCYlj0kbg%2F7F%2BRDfIFBGvAY4dnnjYXCSjpEAtrkDnf0sPsgHgJkzHCKeBD7qaGYKn%2FQS5hkW230HW%2FzhPlfs7mCoJfnvwwF%2FFsd7w92boFusiy0WRBLvZqLiS3nPLBigrv0zqgqyQ1sZr7S04BIhJplluHfMsWK9Dda%2FWYy4UfT63LN4t0O44PFvojeckD%2BxUKQRvYu3C4ClcRtFNfEixgN225N8Lz2nUcPmxrhWB4nVAUJKPdb9nhm2cS%2FukZ%2BtSIoiOSroiuhEh4DQiw8isluWGL0nnReF%2BlTHlcKMXbDqA2rrVG3nFkoqucgqGQ5slZ%2BND1hVzxJkiE45lQvRuSn5X8Uf0qOQNcITENsaAx6dUxnEwk0XBaXABR5d3X%2F%2FXkw5tZcIAn%2BDZE%2FDdG8ponNIBnuldHw0aQqM1gFSKwQTNbM40V2MWrncMFcH4NSTZCcVMPlMSOnvRZW8xhasXArpZFin5po4Flsn6H6EKYDXypWmUCvoUIEBOXtLdJ6gW8%2B1Kd21GYan%2BCXdQUX%2FmyNKJdCK1EeIqCb%2F8%2Fy9YwwseNvgY6pgEF6gNBf6KIazWOAKQRfuBcurMBrjg6bgYyzOTLRj2tR2U4Wd6WGGQXJCa%2BLu1CKGqIoxmhYhJ6fhlZButN0MmozvCnxJuuQ8CVNrf4DBLISHAeQL72oiwU3kQOLz15VF2frBPLKi7de2FaRcgWyhicql2UOQArDdxhlaVf1HYmTDfiu3MxUJnWCsie3noUM5ynxWsbMv7yTMNcgqW5zQ4d9QL61XAY&X-Amz-Signature=9e83910d02803068a96786a65fa4bacf428143140b6c3aa1e27d39b948682554&X-Amz-SignedHeaders=host&x-id=GetObject)

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
