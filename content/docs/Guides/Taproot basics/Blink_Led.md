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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URM7WAP7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDwcKAV0Ze6BH7fAOLAAoa4ERUZHCtsuQw974WlIVmyRAIhAK1Ew82ZW%2FSKolG8afO7naIhAVwnZrd01ua637zp5h8aKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOOWMFR1ZaOCZ77iEq3APin2ZEbrdjFgHrw5zwoybttFDVn%2BsJAT1PIVDrYIFdi10uFsaUijTt7quCuQxEe3ecZMxUl670VSdCm8tTazlsK2ua2CDpwE4hWdFn2l6FDxx2ozU5ZOaQVSze%2BcMBqNaEcr%2Bc2ZMH3%2BpMnstWOfEfCZoUScTk5eutX11FOEjYAvJc6%2BNFBddBJhGUC%2ByPDCo0p%2Be7wpKIMsCXX%2BZIVuZLVDQTW%2B1jyMyTol%2B5VovODUUi62sNEtjlUIj%2FlNq37yQkmNA9pRh5mpCYGLppINAX%2B%2B8xvk5r7e1WVzfp0QJq9AF1Wq5NqhemBzGhZgVyZoPRvDBj6JsYsDlRLBbjdZ4OrKLqqkVrmaYr3scr1ODzauhUYzFUIriOao18Zt2hPJdURUG3MIK7T67iTFiywK8XmM7FbwRQySiXWVthZukAktTVsopFEOa9QGjMnTz186EeIxYhTdPWj%2B%2BDLKocqVSbxNw7FK7pDoqiabpR3%2BRMyd%2FQCpUegfgI0wMigR9z1uSBxDASIL0i1kjNjraCNrLX9QYfTXhPBvB4nax3KjBOjx7DMAWEht6mNlYkgqHvDkX4zJKJUS%2F4SyEOI3duTvkO78z9F7w0YUIyNEbAnPTG8ZWnb9hQO7SxKS%2FNmzCY07TMBjqkAQawC14%2BVWq8MXajV595tmRbJpl2UTekUwukM2tc24xwtseBrKFKjURo4%2Fo1MP915zgcfxkWDA6%2F3FZfJVj%2BZehfdOF1%2B8nzsIG%2FTXtVGlQybSXunEXUnyZYt8rmIYtyZ9nPtmTD0u6seJJAFZsRe1kwHC1KyMvSR9tcPDvNsB2mNowresUiurPLqVtVvYlQjBXGEdbpcPg0KNx19d%2BrMcqdD0Cj&X-Amz-Signature=abc265116b8142cc3efb0cf6c35c51b8955eb42971ecfd9c4802b053d5480685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSL4Y57%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIDRJb44asq5zj%2B1vFjF3ck6t%2FnWp0WR%2F%2Bneunfflnt98AiEAwnP7WmtqqQyPBxLxC3ESuGQRojQu3skaWV2nxzEl%2Bd4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGgTYQUTEdeUVsniSrcA7cr8mYNicuGRyfBzVi7txrfl5naYCY4w4AAfJrdZkT3bT534m6ucV91ksj5n35ykDQgEPduddavcduO0SmRdMhBNeE4lSJ%2FAONX7E2N01Cj0MFGnBsBOcdgxlpJE7jaalEc2W0a7C3zoqIOyylq499V%2Bsn4y8fhlRbr83Vm3VAkN77ettXwHUsk%2BXSw0RXTpOPSMYAvmWg3%2FJcUWnSRfCD5Aea0negzFMJFNlWpneVdnsB7e93YWNVhaU6gE90i%2BDIDyeDo1EwuhAxOsRu08%2FrwT6NNFDZmZH2edFzOJE%2BfnGd1uKHfSUELqgM5fZPf5jBuVqs43e9gq18JOYMqhQmu9FX5YrV1vZ%2FR5WMORYHRGk7JeTuDoMWwCKzcPVa59O93kKOG%2Fvaz%2Bdm%2BexvRj6yYW5VfCVDx6COp8bEK3LN3yKtn%2Fo%2BVZOmfrV%2Bklg2bYYO%2BKFpYNTOkc45tTI%2B94lIxml5QEDLVePsqTn%2B6hmlpohZX2UbwTxVANEWrIJm5UXbQdLQzcNGoYb6YuU9lSugDv5mkv1nQSJZqPEBwMhAHKvIN%2B2FC66gRvFn7OyaUYeX%2FYGIKqaH9Ug8%2Bjn0Lm8CVTj2hHExlUOW4SBqA%2FbjxFP%2BmgZjncpMFQuV2MP3RtMwGOqUBmesJBOY%2FATTxUWrRYLKkjzpQ5PW9Ck1%2BiY9aWlyhXmGiex8yOTwn7ePMv45XBc5czN3v7o%2BCdNixfe29t1XS7cMz0mxUH48cJs0OJemy3af81Z%2F%2BR4mq5DEEN1ziqYKaCMEZvwOFX%2Fdp2hOr9wb4Y4fsVixauZ7vVOrFQ2iSJ7cf9rmC63IukgRsVtTDet%2Fpx9CUUl4imOx3Heq43l3MD1oWTgBw&X-Amz-Signature=707b33b733d44928d8e154b0d9638daf9486f8150baaed37e1e380c7964f0d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
