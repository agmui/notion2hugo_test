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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MTM3VKK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGD%2BvPXG42fyRLOf46udZQ9Ih0JPu%2FTITD5eAPWq0M6gIhAIx7pkjg4j3VY5kg%2BiBYGuCdK%2Bu5m%2B0o%2FdsvF3GJHKjuKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvKAI5apeO7I2XGqMq3AMUraJrFKjn7tq3CTOAd0wl3W0fle%2F3tP0C9dBVPHEW6%2BqGPOecorWMFEX1TACjW9NHF6h03bgELkB2eYtBmV%2FDjxkxRyRrgYqvs8BBCOiLXsA148kHgo7NZ2z2Z8TEczNXZv07rxPpXEe9cubM5B7tVE30RTYA36Ha8QSfacQpuvAyMb88dx9v18xI27%2BsgI01e6swhfLe%2BF0k3ME4LbmEMu%2B3M2BK7WOti%2Bybku%2BX9Wh1eCjMR5oyK36UmQVSTLKqqbmRKrLUtSlvDAS8MRl7VzGOEjrb9WkJW5W%2FHt446MaTcV1lucDXgzNXX5Jbg7mABsAVYHoKCv%2B40q%2BlpeVunZTKiiB9m9uNp3PWPeGC3P3on0PW1j0KRWX4itgB8piVzS%2Fw1lDxEE2eD72at%2FKXSj7%2BjvU3dyQViGIVV1S2yngLFM7fXxj5J%2B898DgSx%2Bi2rswD%2BGcZ23pYO85FmkIbLvJvgn4Q2RAE757ftCbUtmySsUmNokuoCBKIUpPFN8ts8FnSCFB6mxFMcQzSlhBwHaVwt3MtKlk24swWeBZoE5EHi%2BUahm4FuGy93iYzi5ai%2BAcBjGhYaOB5x6eGJNLLWKkgpeKvuZ0mJbAktMqQu8QB5ce75%2BCov%2FNYmDCsks%2FCBjqkAWWJ1CS37TrP1EN438kVRuP6Z8eRSrqK9k9Ytd%2Bg7kRtevqMeEOMksMeKkp3g9ECT%2BUamFlkEweZ0d%2F09GM1gLAH3X12Qwf3AaNtzLAhCSBD1KIE0%2FqycHvIDXIzRpsZ6MUGEHOXJRSGQvsZ4EUP6KNId4u6SKA0GEVkItnUOdjbZtWL7maqLzvkAcPYXB5fG2DcV5myI8CnPWnphBVf90IIgncA&X-Amz-Signature=3fbeb13a61d0b817de883e78f0c9c4284f54c68fbb3924e7a3b98ee49fd14f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CCP3XF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYhEfQVpNkY6zkpGriMVMqZdZBsnIkmPtl1vuwtdP0OAiEA%2Btp1%2FEvZCHIK4TeovOZ%2FpjMzHqBBdcLee3iXi4rd354qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAkAzUV82BEwWSF8CrcAz%2BSNv6R2ywjXr9ipHDi3AG7TrTXSHZHwbub9aLBSE3Lr5G2AuJSN%2B%2BmEz%2B2XId1W%2B2SFubCyIjyc5i3AwJg7%2Bt1bs%2FHYMAPBuT69q7BbYL%2BDyDAGjix3mkJ8y5HWhcfC8i%2Fv6odU9Omy7PLpK661uUQXbwI%2Fz94gS2TxjrOyiB7h%2Bk8C0sfY4b5fQjleBtRntFnNeebrlpanzbzBPKtPuaEqSo0gNxh9itpUiKrmiv8FRMpEOIgjgibDxa3OZ1PMZ960Fts53sIdQ27n2K7QufVKzda1nrOqOcdDEfedRDyG5nGiOgWG%2FSHNUIaDhIa3LNOoq6dZmaD33AZLpf2wHyjqnQ82OZ8pvSw6mQpSNwa28nOyaRq8NrJ0MrbroKxCvtT%2F3n54Z17BnthZtIUedvHE%2BA5CMutRcF3wTTqhTf7q%2BYUwykjuWlyDJ%2FyI50bG%2F9VLHCz6hr078B%2BLTziDpGGdpP69mgF8BLQk1jVsdl5b4r79UNH91kIaXEXdj2UwC4l60gm08zRG9FGfOjWmjmeYt8NUPfO0VcN%2Fuq5qL0G%2BQSJcCN3ycx05kA9p6bLyvFBRli4xtDQMITsRyzR6pjjGBqxAR%2BtbBodgD4rKMEqWK0nikzH%2BKy20R3YMJOSz8IGOqUBVUC7DgUjPbmw48DUpYCjGxSAvZ3h5%2BhPWNlSYNMusuhE1N6e0G6qtnFNswiRxGAnmbAPXNQaLsr5TqzGFpktE%2Ff5zQedr6fKj1Fn5z5kmAgOSMtTL9B4zjsRzbaCyKmEbAyBWSVtIEnyGXF71Z0JIrUFOwsbX1ZPfFeRM8u2YOEDqYdIP6qveBv5AZtthnUmqFXkVGxb0eKIuk%2FCQhKnf%2FMgt49%2F&X-Amz-Signature=d78b7c526d9e5397edd5301e0ebf969f21af4b9bb25fb99243073473ac3908a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
