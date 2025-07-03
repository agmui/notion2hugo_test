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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ODB5S3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCla9%2FZ5w4bQQ3WfKEUCPui8%2FFPvL3vgBDrnRzw1%2FDm6QIgMeifYsI6eX96uHImBbKjzb8IZUdjT5MrTisd0EyaF04q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNrc0X08GsnWSQG%2BdyrcAwFg2GBPr%2FSKhJjkhSOWW9LCIEQZ6xm1F%2Bf7ND8dH%2BCHlz6infZQiYJr%2FqzsqIs5hQbt2g8fqGzRZVuzSGtc6CB24MXkxTbq85tzsghgIeMN91arAVoDBvDnCE5wx%2Fv5vDqJODEuGeLLml4fJQCSvCknB8EfVzH7dH1b19Vg%2Bss4adDC451kOlqXCWcNDIFP%2ForoDJMgj9ZyCWPLNkbt21tQX%2Bdy05fZn%2BaMUscqoes%2FVccTzJBuOgVOGpw846gOF0BuojD8Z0risSbSDYU9pxrJQNh%2F2u9HYlrKdpCG44Xq%2BLonVnHFJefQMSIMMDPwZP%2BuX0HgDPgi12svH8PDs6LUYKWO9DRFX8IIhfMBgqk4aeqYW7Y0KUf2GA6fhe1a%2BFuAWbqgn9%2FBEqWo5%2BsxYGSh%2FuNaq5t7%2F3qmzwnr%2Bt1ozi8Ni7cseXp2%2Bl8GD3ZmLgyzakkA7%2BPc%2F%2FkStdQySxqz2iCt%2FLlAfEIiBedaxDUPMzXFyx55jR3%2FBjK6WwrSrA4SuTDQVDUg9iPvzASlaqCKLFhB1B8lGfB0nUY%2BL0sqUvyCOF9huFiUvFK0ULz9rUy9CYjzjjKPVmevSOIwaYqSULNOg2LHfCa4lFNyah3tSLQPyll8ecUZLB63MMCOmsMGOqUBU3mhAckUMJQegV7en8iU4mKp%2BNoDkrlMZHMeWlLDVE7bc1rvhHw8%2Fa804ZCQth9N3bGvZNRa9xXOKdHNwBcL4BQU2hCrS1xzyKoITxW6AitZULskfXcJvika65w89iXD7TOhefuqmipS%2BH8N0NTlv7SaV3a6IWUYBMDC3uIsdJx%2BsaG9bRG6vEbz%2F%2BVWWiVqyOOqrc1p1UytIeDoQhoTXZiiVr2O&X-Amz-Signature=d7555c9b1e8e595e5d5cc648b0a771374611adc3d56de61a4fbb3956a6547c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZMHW6B%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCyTBCeEsNP3qdFV1AEi08%2F6UCkA9fdTAAITDTNJPRkEwIgDsVGowkKAPMG7uvDX%2Bj9GiGuvr%2B7M8IO6Q0aLML0rgcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFrNaxh1M%2FMTwSt4TSrcA25W494A3DknZ3mZRrKlsXsR2tZt%2BhykfxxSGRnn98IJSWvWeKMzbASN3qpi7SGj4Mk1Oq7sZtNePJmX01OJ4Da8JEqJUDvb4CaWSHh87Mw%2BEcdJcHEA%2FnAz4yiY37ApgXDbBn66kqCh6ES7GvFKO%2FJF3pRg4kx8XUPKusPm68y5fU8vewTucaFbxLO6mUh3Mof7q9DvMCMJTh%2BaXjqmvKKq4cEf72tn15Q7jjDile3oHHiBHXBsk00vj%2FvCrQm4gAnQ9NI73GB4NuenXemWl3p4%2BXnzB0Z7L0Mfrt9urN%2FVNn8Rj8NqX9hGMCwPcGbFfLT%2Bl5fqHb2SfRIadNBAwZMBdMwLV03yaWmQhlelhth0%2FVG9cZOIinvxO%2BHqXU4W3OHYL4zUk1LzCWV%2BWwTA2OuE%2BDlGOu9MLbBPkZaqLRRovf6AQKxsajNMNFzdmbd2C3NwHj3IQxOS7CQpeSl%2FCRxPCckBFLkFmxbcmPUMZ%2BvEz8GbfItTh5bvyaS0rtxCey%2F5CrEabFu3elJ3hh6PEUtlbRD%2Fzi1ll2VWtBI1%2Bp26DM1%2FiAhdylRsfhv1havM%2F9an3bGOCZWbYM8Hqpo6SbUI9wXlmmX0tlPuGpzrSK6BrVZuCZtsLZj6iq9MMKCOmsMGOqUBkQ%2FHZ9OLtAoNmWnjvgn8aKd3a%2BAmJzJaknQG9WU1GIA3zvXuZXwOIso9%2BFD9OCXLsvwNERBGaJcqREIEWSdZtmzq4%2BTdyBCU%2B59OamtKdk5n%2FIl1nxPpG51gEwSkI%2FuJteDMrPOApPXDBje0TpH%2BGPhPouUKXqGqTPC%2BruwmBuRAWyN6sjXh8POq8G7xBh8yUTYDUuL3Ece6mU5Tk71IQg3L%2FxtJ&X-Amz-Signature=92d7c9af012fb73be3aa5bb34e1612865a72e9aedb92c6d30b900f1e89cd3908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
