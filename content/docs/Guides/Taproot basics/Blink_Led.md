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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7EIXWHH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDn4tdyCAolCQH6sBl9I7Zf%2BviERumR33Aoq7K8QMRKfAiEAqVtM59nu%2Fm3FbJmRtNcWNDxJcVraA9Y3i5b9NtEpsEIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B2NOIvZGMvwg5ylyrcA3zib7I1qdRB5s0fEHwVbLGLo%2FTxZf4ltrE%2Fxsy384XTfCOt5TcgJUOrMz1j5nVGjQPOtgYxkAHo9cWO0wpKKGd1H0zXhoPQCaiMUOP3e57AS5y53QLpF8re9zrfSZ65HGsJn9w%2Fbj7MANd7ZQTRtnLiQsdvS%2BJGuAH%2B7En1AyFHkXxeS8rt3YCKUvXr%2FXsrLThLJBAI96bxDquf4w%2FUgzS8Claf9xPEDAdkRBn9AzaqBsxNAQe5y87XGiPswDofu7%2FTwZlfZYZcZF0VF77Rcww2WuLA5YlhhRi%2BL7SqMTzysmuaERL6sWP49q8t89MXDEEcMTpO38GcaxvS5rAndEtPJH0dL8FdcqBQ1Sc7KfOUTUzqGh%2FWONFRqVVH8Q0hl3rGy6%2BaAUkFkrptv9Z67jTl6R6emSapTiq8iGxPsN%2FFfIfqxWJzfKOwdaOp1AVG3FvSjdR%2B9RjoDZCDXgQgTC08myx5fEQ%2F0dhLBCo28jvKtQ%2FF3W3EPL3hwBzXtkzMq%2Fl%2BEXpviMER5R0tezAa%2FsOZ1lZrxOdx20VQOaDvtKjDP1Sg2vUkxg5arBGMQmxgh%2FCjSFdpQniLjFAZ83%2BoXaMTmFcZwLlG1fxVW1pMwF7GmabUj29O6VWkOYqHMJS0ocQGOqUB5%2FeiCtogrdAdFhKrAfqxz2459PqouyOLiomCiyYb209Hd7qzRX24M2T2mS%2BW%2BfiqhudmX4XYQ8TuN8XIHexV2BxbcVTDUJl95M8IDhVp3J1cLayZw7f4Yp%2FsMYOPD351JY24gO69a6gO%2FHeXYHFLf%2BH1ak%2BL7aM0uggRV8%2Bw7HsSrtZi5SJyrBwvQwXIiwPS6NKJSEOnBTMOnukoAMeLwX6bpCaK&X-Amz-Signature=a07deae2283a9ddf25cad0bed10b0e75dc567d8499a67cb06ca5b680134b46c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665264DZ6O%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICRQ1lo7ioch0QN5GdBan6sK0lzbmXmTFN57ScLeqaQuAiEAtwljpOdVN6eJgVN%2BF%2F%2F9AQ%2FsUgoa%2Bm6%2BasL5fIUiAr0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsJgGFO8o5UH0U1jircA4WAoTGVrlF%2B5eaj2A%2BnGE48%2BghFnHwXYiCMS156P8WyRDxcRoSqc0ZN%2FaxQP%2Fj3xNnYsdyvDHBR22nA2CAR7RvDhrW4Zll4T4sbdB4CpWaJjJS%2Fx%2BEqv6ZAtH7Na9JJNKyEil6wvOM3HBAXp4yfrlB5OmqAkHwk2jxQxwI08QDAAdFw8lGPbkrmo7CSp6NRyBqKg5gK3FGM1laNiK8GrIRYnce185kokYsMJNLvUGRSI1RnMG53oZVMiJiBYUfZ4Bsnw%2BF3Pzdx7ZNQ9YuM8%2F%2FEv9abtEP%2BLTatPRQONgSqhBm8qYQ%2FFVUfsyc%2Ba5SbdGogib9PyTx2mfZT28Tb%2BK%2FWqE%2Bsi0RlcjIDJt1vHBk4flmj%2F2DjRsiadFVVW3SPHYy6%2FjC8speKVGlaBfvtU%2BWvMOxZz%2BtEqqYTg%2BWGevdzC%2Fb1rwLvSt6FxV32RR87M%2FVG4k6ro2v2tqOFqCzEIo0WBORhhWPvPpJibjdBVVLd9lVU7yur7UOS4DIXwJmoTnJP%2FROGZhf2%2Bn4ydA%2BlLez7jksI8y%2FY4o3ZdnAR5MGawk4r%2FG5312TVZ7892p0J7P76f9V2SmlDEC3io0Dzto3Dgabkxn9knfhoT46TnPtbScfsbdJLOaQJxM43MOa0ocQGOqUBsCCRlDqdOijkD2M0aM1UAJuh9j7AbAwXnbbqKTBvlre1a3y87eOuT392itGO%2BC6l5T3ksAJ%2BsikQ0xmSsN%2Fly%2Fhmvp0BfXM9Qbej1Wr%2BR212kKcazIZu4EaqU56gNtbwmlBMzqkuwT6C0Atw6SaPFMcSrhXAk5R2O0984UVNo%2Bj2prF78jt7wocpIfH6xbWRB0r9P%2Btv4Sfnu49JNAUpqnvrW7mw&X-Amz-Signature=f04cccafd81c21e03a6d9d9fb6d847176510196ff0bea4bd33be67c639cd667c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
