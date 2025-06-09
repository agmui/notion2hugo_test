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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDKJROE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2AFEcf3ZYhiY2iNWfscDhSQorDH%2BYefOtj963FFBBAgIhAPl%2FbGGRmkLYR%2Fg8M77n9tMNnyZU58QpdsalPYmhBrAyKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFnzJi9srBeezCYvEq3AOuuB4lF5VoxxvzeYZFAc6SRxFAevF9dV6HpUgN%2Fhs1uLQuOf5BAFh6zHuZrCMRoTG39pvkQ1uk2DbiqHNELI1aqTZw2SagLlC10L49YWWUhMrZgavrzGF1fSLI1kCn13rRwAbNRq6%2BW2BMtrbxk6%2B0yWLOC%2FWD5k3l1xXq73cuqfU1uhd%2BMqwnI6SiZXKDml1%2BxwPVrQgRNF%2FebhOSv8pKx36PntxaU31Ch8KquVcHphxE5UkE7AdNOj01ILfJvagoYcgFVmTJwpiR7%2FVgy2mw1sr64lUQY4ZgSWx5UUrV6YR37Y9cdqiTP0iUU7mtxwcpi1TmRKlI%2FC5C%2FqD4z%2BUCgryFQcqWPJ%2BvAiLLyNNaBIpWBq%2FjD57JOBmE0YI3NlCHCWLFWcrAt0k5Wlwmu5zSoF2J%2F7yjnJDicsFksr7VabXOSuLTxMadhWLWA7oZZI7BKVGsrZVmBHqgPuG9HKBiIBHbNOIaPUoTqP7Lxyryh3n3THvifzTeNn0Un2TTkNUl7dxjJP7TIuyOHOCHSECSeqBWBynE2wLrMlCRbMnuMFcey578wdN5ufrpoIql1Z6gP6WI2T1FHinlH2eqEKxsDVyMVVH3GSju6RF%2B42DDZfJTst0iSlt5bQ77GzDMopjCBjqkAbomxdv1M9QjfjRyN8Tt3WBvTHdoeKz9DVAH%2FG%2BPJjwtjSv4U3IV0wPu4S2ke5is%2FhlhUt1LPnk1C6vLl%2BHsKYwYFCkobcAw7jrsnhA0KTo2rOoCcaP3tr1FApt%2Fn9SSATQ60Hjdbf%2FEv3%2BlPuS9qhPnHkwS4RDpExTaSeKHYVb8ZllrbDjFNzBvJI9Is%2BHk%2BJjX%2BSrNpSmeozalT68urULHjFsm&X-Amz-Signature=e4070d28eb12347553449ac7d4547866ab5501ce9442f42e1f372862fefe1a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXXOMDW%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnPQii6N4PKAJTF4Kaa5vTp2m9NXlIdOSzFDrCNnrHAAiBsMjumxKivwVsCfHdFBuQGP24iUkx3kPn%2BE3YL3Xm5%2BCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOhTR6MCeK4ZTe8c1KtwDR3MqGdVbh2iWFvinthg16zfS%2BhIu3v8oSiC4yukPfH23vxNsTnoYNOAsU3FuPvITSMBZFYWVp7KOTXMWoDa6CpkctZuGWirvt%2FEQ8k60WbiTySghrTi5G66FybobUlhn1xm%2FsY1bDBi0W%2F6enlWqJkluPUzsquD8sLxFfh0f1NQPnrlxWHluQGzOtlCPAe9u%2BaEr3mQ0Aq3vM4Xc%2FRu9gl0MBpHgF1ZNjIG59OYp1oalABh%2BVSrd1hcaIotGpXhZtUDTkgFlJH1OHlkjcWaVUswXVijHyUqCkAfnOPgeo86eb2IQ1B0erykgAoq4p8aBA9RKTS5AFmTEoqlzm4OSzKJPfkciEG5fEmX%2B6ZmzmA9ZzU7UvEWb%2Bbt4IKkdEmRxktI8ns5XxqxoRExFxl3Z6zSME7j9LSt3d8OcaHgQPe8G7zADD5R0Sm4TrPY2fU8UbmBuAhi1MGUi5g%2FetkKmnjYaef35IxLQxvgXDezUhpwR2lbkM8NV4G%2BNS7l6jOLMqyQqb3vTx6dJV%2BU6j7yl0GJlNxCugCSjDCAd1HvdUeKu%2BXBFAAg0aV%2BMJqUP2NmBdwLxP5hlQfkdlvax%2F58onaTXQyZhnh52Zx2Ffn%2Bx8fMA2F%2BpBoZrUK6qQr8w1aKYwgY6pgH4VWRRUfijrfZ6%2F7S2ldxD8u0bv%2FGlT2oDlHnAx4wxvmNhEj5zZr0RlT9rKudK4VJzZNGF%2BF7dQeKZsFgMsN1dLHOajqWEcBi2NBZbinLy9VUD84XWWfFSZKpOu0S7vwAKXcWttyVqLsMzz%2BXQFqaDsMH7CDMpqJ7VBye5hIfhyR%2BMpWneWb68YCQvh19Ize7pCIn3DubFzuz7Diz552KPD8lBPJg4&X-Amz-Signature=278d454984d6465f369e822ebc6c00357e0e1aa09e79a9673ce6797785c71395&X-Amz-SignedHeaders=host&x-id=GetObject)

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
