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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UJEK36%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCNCLzf77oVRZ%2ByvswhUV0ULP9v15YUQsdHtSp0pZzdNgIhAMhFXHQ4oSKLy2tUMiyLivGSC5tTuVfMkdpfQPqYqnipKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy61HMqGxnZoIFlnFoq3AN76RGa9DnpKgKBbtOhjIFvcplhfb9K3dAI5eSJM%2FZT74tWq3Jlp6Hpy4ItUQ1rXM6neZxYY95srJkdfmdhw8t6yImCQm3AzoYtHcR1%2BpkT%2BeSlTt7MrCTuJ1ihBKY3At5qz%2Fk9mM1QVLNXaBYRf1etvn4QxV1b4VdNxiV7XTuZkd1TplE7EAJNHlwuptRT3E3VJaWCD9PlMDnioM1eNYz4VVU8Lo9qiy56BtjagsLYkJDHbeiTMpAOddnFkrqOLW57ERPiPYIFckQlHLsaBykUhQHbiPi02aVKzNPryAsRSBFtx7gwrP0LbWhvGK48yS798aWY52hVlcHvIjj%2BAPQzFZYX%2FrV9mmgpeld1EyaESmFFTN24AjHNksD8ar5Qc1Nb1FU%2BhoIe%2FkNn6QU4zChTmaoMeld1ljBV8wZ0LirIxkG7iCno%2Bl1SlTQ%2F2TF47YdRXH3Nv1gtEu0Ew66QJtTp05%2BxWm8ixt6oTGKeYgJzQPClSfkoXwbl7eljcyWgzWbqovcs8TQbj4l4reJKL5RKoFNbezV3RpUvhgaaRO9Al163jl1dicfvQD8Zg%2FxD72CFCN5ZSzLMmXrhkqOObI8gHKKeApBILLNLfV%2FCM81IUx6To3Necgrw%2Bbdo%2BDCqpJLABjqkAVJ3aVolu8vZUFZiJYAOP5GslBFJOYAWpkWrR39ALiZTqkDisofDGmNAiNwt7GwkCrK11EIxxldzjUQjUa18nYUaq21MZeIVyG2E4jrHMTLU0FexMDATcOjpZ6%2BjslsGaTXbU1EqPOHVJSOsrRtUgaFAN8os08e2Vzcys4PoIbvCArBoVuEMOKXJBFUknXUkbKqlTKy2OSNHGio7v70PUxPKHmC%2F&X-Amz-Signature=0810efe935597612fdba49abc173129328cf63d1e6ca9457ee2880e794aecc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMTCQ2K%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCvZPKKV5bGXL5%2FhORslReS8dmkiXt9yF1A0rACpLI9mAIgPbAMTBydCBQ6l67ncKaKp0ezP8JevJ2iZPC4BOcGw30qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYLIyZ1OJ34S4DehCrcAzNI3nE11NHvvKiKZStWdn9ophhghfsHpQDkEJGZGs%2FcljVndAdztOUT%2Bt7vAjhS1hevmkKWmjZ2mFRidwaFYPaOFeMsTMRevD01WR5WkqLjmwby7UT2byyj6XaFBMU8TBgzqubp75SGAxT2oL%2FKEIevlp44aeElgi7LV2BApjo29T0v%2Fsw9nNtQuAoe42LdR4MT9gLBvrPb%2FhBDx5JVUupf%2BHr8RXOoUg%2BQsPep6ZmjKMOBpXkPsahSN0l7NMhNKPK5sGWMgmQe3QvWkWVk8Xjbccko4%2Fh3LAjezfuZviyJ0WafKqh0hdbxgQw5J5Sds0G5HgcYNT%2FmQCMtAl8db9L%2BwhFl%2BS%2FPT7c1ujH90W2Nv90NvBMfJ1Pj2sP1IqFIwF7lEm4bY%2BcRR%2FRhD7po67o9kcX1rHkR2J5ytjYW4sYYWEtMGv5L9Jz3zyjfEyZsAeMz3gYm9bxyAiorBomAJEQsFSXGfdqd8Crt0lgSR1iCwZZXYO7d6n3rSph5KzTbwX%2B64Sww%2FkACg%2FSmPy4UumXyBJmFpZ%2Fuf%2BAtv1xfGHMi81AL8ngeRvYL3GtMW4r%2FaPuKrPCZEbqpPkhprv%2BDk4SBYGB%2Fm1VVyrsGZVR3F1gz05kUsx4Hxn%2FG2qlbMNmjksAGOqUB6NpFVzPOENfHkXbhS32KcrOQdxG%2FKdMXnSnEMOdNtbxsTlFgucj0oMrIpeEaibpIXbJq64HD2tR66cnXeCs44x8Uc%2BVaXd9hKnaQLXlQeyDlPV5UIc4lMg4zWQnXHGhdx%2Fgvex%2Bq5LcrU9fbpRRkvqJgguHkb%2FuQKG6TL1jM39qoJmVCgxC4Ko1IPlRwoyxnHM%2BMYNWjy3jCeAJ6SXkVUbhiMn5m&X-Amz-Signature=1003a7f19ae2af6c6ecbe09abee22370c99918be62942f012978de6b53e78ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
