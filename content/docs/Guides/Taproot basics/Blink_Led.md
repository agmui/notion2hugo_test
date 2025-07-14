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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTIPEVF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIH%2BqkPr%2FDGy4oaIxvetyynkGVBkl25FJf%2FpEPSPaPkflAiBVIn8dvKqcf0zKmSkLntVn092efLwkRMAVmzY%2Fi9ptyir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfHr1xHQ2U7ultXtyKtwDJa5hBLoWeoeeBVsoz31x5eKVmKB7ZNxgasBCcwYX5v1ufOfDlPrAKx4x4Z1nIS8SK%2FI0igu5b1keh6g63AI8iQd3Mnj1R3LoVYDlSyT4Y1MGJbXcxpTDjbjETnE7Yj6sJXAuELbQLg2e0t9CWORpuvdr%2FzzUgg3rbtT%2Fr1aOQ5vP9w3ecc2EBoZs7AWwPqlfterHrO2wVOG3Exo%2BwU6dFjS4RVBSUvaKv2SFuYsr2Dd%2BqnSVwYRQJqqr6717LmJ%2BQpFPts3fjVX4eKnejpq4llb9qNf2wFlSYLWOOXgdnxGaywsX5eT54k0pXehBrhqbaFPZ8CtwqhF5QBps22by6gvYxHcn%2FyI4k%2B8hHoLLWNVxc00tApM2wTiEJ%2B%2FFm5XA%2Bb0885g3h4XX9gTLF1l0D2kWpIq0AFAkkW479%2BmGqaUjv6q4Kl0d4W7AxM4sFNZME9QWiEcq7kyGaYlmvdCitXtCHcuVnWdeqnV89j5E7GnD%2FQ1t8%2FL8QRyPOwkxs%2FBNELlrPgJn0hb2pQ8YC6WXyRDJ92oNPQOjw3UiPFnYP2LCszrG4cvzZU41%2Brc8YuXikkF%2BOuNvg6goM1XTbJ1CnRgjZnsK6AzXg6OCac03wGxmfMfWIBTI3FPBNSgw37DSwwY6pgHz%2FR2itfwfGWPGg1KeUzcEI4GL1BOjk33ApeMtNRYqEDaKiFYOQrLXFMtYskEV23f3SIjqRzs08qDSs0ZSNl9oNjbSNVKdNcrnfBIRFSa9ximSoRc9fNgVTdTj4DzkkJzJecQ9DfuHDNWOFN0MfmaqL2fBD4PtNCHkP7LP0ZMjx4QH628gRTSMxWiQt9QhVyN94kDdqmfFjWrHaP2I3s45Abb7JSFA&X-Amz-Signature=8321dcc412469fc17410517ebf291b364936088d6ffcbb9055111884e43cf29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2WFDJ3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICPM8A2ntvKjChhB8Ha%2Bo5Ibs6NOHMma1tSeOuEHY3J1AiEApscbN2gRApCqbTav4jAkbVpF6JxdbSqZKtaNiXoZMt0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFaxrJZBAcrCSOeakircA0js4Bi9d%2BJMyALrgTN4wq6sHUSeAJklKF0s55APKI8TndiJWJ1bK9SJqBTRSDnJ5zib3f74cdOS4qbWDVaevtFhtrYcFJZ55xmkI1gQm8CbUiMt4Gb39pziAcdFoP16JrhttOlPOQ%2Bs2957Kc1lch9W%2BUQEfgBCUMcRgdsj5bXG%2BcTB86n3MtdmQT99C6Wkv1Pr5ZKMPUCJufRUziO0ayQnAI%2BR9MSPX%2BDANQqSSbhf%2BUty%2BU5Irik6NbaWU5dWJzCoA%2FfMRwZAGinOyrrrCOc%2F5HrvyFo2Wpeit4eyZ3on6AEuYF5EsOIZZr5hjEmHIUPa7s7k0B85C7I0Ok6yEbF8pR1ZxAd8FY2RW6UsgQJZOnnK1AUztMrHKWUirXsHyNkplTYseUH9sboz2sQ11b0R7tGZQ5k0YVjNJF3iadwP6jhWeR6Ah1UeqxN%2FdrjpmF%2BgbrUvhV6ud1lea%2BkSHC2jQozo4denGO7I0oSMUpapcz1b4kzG9BaRddUxlRmD7HFbXWH9HQF5zzhBd87Qj%2FzERnFL1MCpQ%2B6thF8DPPPJnzSo%2FOlpqeDeQj6ppi%2FAqLUBoWq3Jbq1IyX4RzAYcdCQlFYVz4UZ86A%2FWqCzt%2Bf%2FK36keHOcRGMxJctWMNuw0sMGOqUBzymY2Lk3aq0vZiXxBYcflrIp0XtB4QGof4%2BRs9qoCquFOQbEamK7LBMGWP8GRZ09wEBb1m9kXoNig%2BKS2ZGESVJr4zt5%2BOXuHASdA6HpMeZnLnn%2BeDy%2BDpyJ0%2FYh7gwH1L7eySHTN5uxD027Z65%2Fkf44uJW8GTtFwmdFwNfig1Rya%2Bs1EcM%2FS%2BvJ85QvLlctdFakKjCLe0cV7sQjABR6DLe4QIo8&X-Amz-Signature=becdb3a34933f69624b343894d61d7b82995cc4250e788e3a70450e0cb17f072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
