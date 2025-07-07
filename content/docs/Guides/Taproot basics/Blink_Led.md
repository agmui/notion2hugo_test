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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6KZXBU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDhPga5gLTJHyFgQ6eVKL%2BQXOk9gV9BmZd2lhFU6hFzMQIgZQlCP%2BlHclREPJih6gsHQL9hgHifx%2FOUgbryS4tD1kgq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEdt6hSzAwMKktaAZircA8OdR3fr%2FmVCSdo67XHIt3uBi%2FmTUCCKTJtbuIA2sIdvWI%2BXC5BJ2vk46kZ3Qzls%2BRe4aLUAYoWGkLUtoci1LKd%2FELEyLJkY%2FBpKFMUFUuTSlsscWXoz2m2UHbZaCzu0f6Cz4OoF8sKVUK%2F5fgOXikrSONB6fN6Fpoa9mjQL0uVD10qXluWGLkU6RrWwJKI7xrEOURO6gLLz%2BAS5v2Muz9VgvNueIyfRUHYzanxTT0bgGcumunLTGP7Ee58xymgQyaMZclAiKAtXKWLHmfBo%2BN8%2BtUUVohTXL6ppV88RcsoMa%2F%2FS1K%2FbBSMrqST5xa79rZSSEpaI55bV%2FNr0ZlQ7sDXrlrD%2B26dxdwjQsgvCn40DhKy%2BknXdWOoAn3NHRAteMJEwrq4SfB4QwuwHHW%2FXNHF303AhY%2FlBwHW8iAnvowqoSbWB%2F4XNFtHF9nbk9tUal6WEM%2F6d17XD9XUvvqM%2BHe1wEjpnAnGZA4bHPVQDaGRYgAm5IPWH8pfSy3EjXziIseUZHSMpTq3q6mAIfo7peXMmRYUgCTW7RaD8DJ3dBxGHXrA79Vr0jH1BCxYaTy5go1Y4DZowTUcTORGUbSscYcsTLrGABW5SkbaDgmFObUrhxzkRaFjzKL6OwTEyMIHFrcMGOqUBCTebRJxqO8s4LAJlxQwEa8PkIsarl1D9xpwdaLlbhRBDazN%2FfMQ%2FEgOT6d0PM1MkF1fn5UhnUsEvf%2BFi%2F0098hsCSmCKpH5NcRvp5JDprSjZv0kzX7eyUdos9q2seUdGGTDu3KgkoYqHIn%2FV9xDUFqcLWma3PCutaFHpCBMLdklsPetyjSAjP4S%2BrW1W8XiFsIQvwjBFOGdlAoZOrTnX0xDvikiH&X-Amz-Signature=9616a43328fac87721228e5222e527c62eded7d96f9f41a7404b041da6c508c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNREODA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCxNalpDil4OXa7WSMYQCPrQGTiNy%2FLzrIND0sKHhYYgAIhANWgjXomCD06Li6LlxPInxMXSgvdLoRQo8kl74F5zRMcKv8DCG4QABoMNjM3NDIzMTgzODA1IgwyRUkXtqrkIRGeQloq3AMbXPPEwLfJrIfQGUe%2ByzXWeG4qIrCAqPUjh0ONTZNOvOrpuvEhp6OhoIaiWh6fP%2B8ZSYonL4%2B9T5qpvnVaO6eGbhjKBNKq1vyOr2p3%2F78No6HmWJHPKyY9Zm%2FHHNX%2BqG5FQrf7JBrH4u3c4L0OwSqpjMi0NHNy67Ofx67y0eRhTXslTfDXJ%2FxdzVo0BcofV7vX0VVz25Pa2d89ZKlUX5sZMe6z7%2BtUiIytNWI%2B9TiJ5uG6V3yzDLINHtFUKoTWR4HesSFSpKjdKRWNpLIcRG2Y97AvOQyA3ZKY5t0IBEVXIRk7daRHr9Ts2VMFjwj3BGK03hnqptKigdQUWdifKte6D0aSiC72cD7VosGVWLLwraFb6O7QVgcMV9ub8Om5dz0RnSrT%2Ff3GJcLYHcrmnnfBIYCd75SjPB9j6idi0bceIWS3duM0djPL%2B4AFK5Duap2sKg0tpGIOkVrojm3nw1VPVaDDO%2Fr%2F9eF49Uvy3HQgv900CmYXiaA3fcWTuoAGDbO3vQgqeiqajC9XyvyiRxcguh13U2vTFbLWWD4E0omMNy5x8%2BbRtdWJJvQdKX2jxLE2%2BLI%2BbgwY%2BXlpMdVfj7cHFe5210EsKJtbCy41de2CQE6LXRssGCGsU70wwDDysa3DBjqkAS3WwquufxXPl4exkP1CWuYwoHtxdZgODOhSaCQiIAVGPs%2BQyxLBvKJ2G%2BzO4xacq7wbMGwbA0tV6h55tCU3VrXqouW6bS92dvTwaiKcwAWJj5UM%2B%2BVKb2rGtknOWriw9d32rfvl3WghGpOBqolNYF7qjOSwWGhVpSPPROE6N%2F%2F3NL1rBD3ZcCjFSflM1JVyhPuY3M93%2BINcyCcT99ueyT4wS5yX&X-Amz-Signature=4c80df5f4b45abe3912ff8d0e4f987934855692fae72ce2550b482d320d8c4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
