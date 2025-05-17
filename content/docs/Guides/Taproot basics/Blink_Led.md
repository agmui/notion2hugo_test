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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NN4QR6R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FvZNSAV1ZsVzDXhlzG0RJdbEwfijI9bn8s0n%2F83E5QIgJnUtdzu3mjzAqaeBRM8xVAg97vXv3W%2Ft8Vb4HP6KzN0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDC9Bvmfj2N6Cw79OkCrcAwtx1IrNgIBEQ0A0IsJ6s0I4lNhWg8we46Uz8DZ1F%2BZ0RqtmuQ71lK%2BfB5Uw08WqLgb4PcgHLGzy7uam%2Fama3cDFnltYONPlIo5ApMe5f%2BLRs8yAi2GhbKvI9OQ6Lge36j13STJxS3MSgIZZw%2FP9Wz6ZEpJ0zVTktPU8aHxj3WLC3ndb20HPMvqecfuD4VNxH9djvcEVNIgzEx3LUMhYW5NsMYZnNQfZkltIGkNYyw90JuB94ZfMqEuZgpW3ki37Tq4SaSDNctFcK3D2ia0yMWARyxwzLmvOUbl2eU87xRp9hezdowZZAmF5LS8Vzz77V4wjBZ%2FiWF1gnbRNzIscCvxGSzUgBChMJXq7I0gVQej3JNvoAy9V9Smpm2avOnVVC1sKydvqA9TBJVU%2Bk02VRDq4yyPXlUI%2Flt38QNtcVVNXliNcg55QRKGauL0RLpalrNNbQlsgZK2tMc0JE1Sv6%2FnMKW4%2B6Jv0gwjwTUkkyUPNSkJJCFJjmM2K3f%2FANvAsssQ2jHrJ1YLJ4YodqBritr2hzNCfPx78b1%2Bp%2FzZTs0bXlp%2B0CLiYjCSsP6YDV0vGwz3m%2FGXXPxSVeXZ3JgdFAOp1rOwROZJAn5uaqRzX1yKr4K2cIggTsuYurybjMPO6osEGOqUBEO5dEDhdQSVGBzfHgvR5I6TnwUvquTAS1HFrtda4vxOSWMF%2FJGcakGahfz5CsvpQBXeWbx0ilt9kwAFI5Ln4z18LdnmJWwrdEWLQnL8YDwBnhkl9EuHj9yrjsNTlGVRdFO9cAI0S9iaFrls0Mpb8vj9npqIxvWWWc2VY0InNuXZPOLPAgDXiaZ%2FIxoTBSY95BsuALYuxjG1cVuN7tIYrBNklJ%2BBH&X-Amz-Signature=1d6a725dd1c99f15d5b68ce7ef8f83c19ffd003b4f0e54629b9215bafa6b54c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K74OTOI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmR%2FWU1WpaIKgzDIMhiOSmvWpn9J%2FP6e9wGwFCe18WFAiEAhO8lPRP%2FAtLr9iexG5Z%2FRclv4UQlgdbr53gSQLjytXAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFGRSjkRY9%2BFemP8RSrcA9NGOXdmByiP0snpF6FsffV3WPKLORzkOvRAhtYeNQ89xz8cjFGEjldSUGtBNZnIllvGaGUBVCAKZgjW%2FIKC98YLWszjFLkVbDO%2BTyxEVgv3BfKDb2toE%2BcGyd7k9yq%2FGAko9JGz7a2sujEGRC0FhqLkiH1IsFF1N%2BV0eR1HbqIq4VDnKTw6oabXp7tOeW3ZePvnFtuJh%2FeqaZT%2B%2F33wi2010VQu2ZhySRdC%2BTmSyRM0XCDY0YHSeY8mQVvCuaD1ZsAYMropoolhDpqKXF79APjzEw1iwam7pBCQVlPP1x0psQb5DvtEfsp4n0xXb2nsQxyOERuc3HdRMHAcyAVYiPNS97ZXOjeM%2BeGI7fZiClPSWctC%2B40kDh628ryGpBVuGsl3HN5elE69TFCEEMUMNWmsAABlih2zX%2FwSVU1FJz4wTMQ9LResv04%2B89TI6u6RVq2XdJTm3zN%2FEJzV%2FQg3GTADJzk3SuvX47VajzG6csi3waUMp45%2FqhtYmkQc7LekWsl4I4ehBxt1y7nvyUZhX8z2YkHkjAbNRa1J7Bfy7W7UN%2BVkzbwtuRR0g3yBTmKeMGo%2FB9%2BKR01Hb9RXDZGyr5DbDs1GVU8aYhzDg%2BH8uwcQFsUKyW58I0nDQdypMOa1osEGOqUBL3V6Dgez117PXZm5DOst4FTBRP3Fsf7Qv6WT6keUj4CA%2FxcfjtL9Rm0hlHxGkQCtwO8cq%2BzXOR7TLjXJFcpCw%2Fw0Qws2Z8woYTRb84C2YTaZMoj279eR9yGB46CNbCJyZ%2F5ep4BAgFMcUo2tj0LyTDOIxViMwxw%2FNpELYynyCAcM2JbhKVorDdMgf5%2FQp2%2FuhhJv6ooPqnzi8%2FMY19zn2ndMm0c4&X-Amz-Signature=4ae9525650163018a31e7bcce2835f5a102584dc7a751340ff0765f6932f88c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
