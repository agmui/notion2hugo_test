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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUCYXTH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACLDR4%2FTQ%2B%2BIYiY7Li7Ga2OKPsZGdGYsHyOR3RYjUL%2BAiEA3zzX5CgXj9N6NwHu2%2FIWGYNxggmzxdyRFO1UbEPK6BoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCByaH%2BTQMLjYXa59SrcA%2F3YO%2B%2F9XXo3lFiKfp9cy3Hmdu8RXRmk1PBW7sdKxU%2FTYqyyizQkyaUpnnARCR5xFmQFNRZNY6CMnEScG2uKzmH6iJ4OYNnn21nbH9nXqfQwZnnRcCIpjAoU6YVcH8rLLBBDFHCbxiuk1Liu67JK4ZwawrAADNrUOAsyhimcAv1RtX953nCFwkFgHrs%2FtBgdLzDGTqZi4tmdyU99TP95NrJIjliqHN8yKYXNQ4K0DTLff8JKKKIu2q%2Bh7D%2FhCUuGBPI%2B1rox7czY8cETchR7JimxO5g8efm7BD60kFg1SudCUHwddE49QXRqy%2FAuxAKghXWQeRmeFW60nKYTv0LORXjq0WLFBbLmWGhBGUDO8VIVOfG7859jJ5MMaMDRhItJSyA2jxZoOY6LsukGIqX6HplBNWDOYS%2BA7P9PI6nUhqrEdLUCosKdsKCC048dTSboUxEJA4ineF%2BcQUlQC47PCeZ3Vi2KUeImXMsqrDENMwci2wm8cGRsYJwc7cJvjoqEDo2oc1VjbFaeGdIm6cRQsSXipaQT32yh43KDaGZug%2F3piYjaEt4TlWG%2BXRrHSND8%2FmlbFIZCrp3lAlzVXMqgHcwMdSnjzagkfivWG0PzCGkTB26zm%2BFcGYwV%2Fq8XMOPTxMMGOqUBiLriA7Mojr5xvs51Q37GOKxuTs18DTZB8MOIH%2BV0OfvxYW%2Ff3WlAzHSmFaLokIDeGXQj6G%2BRv4LNSv%2B4a027V6PUyOoJpWWrJlHqbeAoxQfbj2Y9oiK5OeNV%2FTp5r6hJP1Ojp8p7DYzWR%2FXhH0qIDKkOPXH6zhDp6Q6G1vQXyfGTKbjqhQixxh7HhpblTdNLT6zcPI%2BFJHJN5h33CVtAYbVTdNG7&X-Amz-Signature=41260bcb249fadaf870d775ed7dc5463cc0e22db1843860fd27a97ba9b4d6608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GKJPOAT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVCgqLmBvbIt4W09DfTK9fUtybWvtFxBHKMaAI5M4e3AiBxY9lF6IrHgf%2FqTS8tyvZXvqFZ%2B1%2F2YoIg0T5pQA3aZCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BdU74b0fwQnwIm18KtwD%2BF5pXFShBIc6tujg%2B%2Bdbq%2FvxouD9c1jUsd3a25VMqCCvF%2BkAgGifXVXo3JP6unjjvcA4lQxH2NWWe2LJrKYQCxiDHeaR8pQzpMpSYyAvPHJEXd1QJi9uDBoenXDqc5jOmv5G8UtswwlFyZlR0mTxZ4mjXhfJLt%2BBjKv013aJNs5a6mJpFw8lm2VK5j5%2FbgAdh%2FZFNXul5Jg1BVctv8BBU26E9skkogf3KDpfDn%2Brig%2FbxFvHmCLz%2F3bQLTFESYRBbRbEetZQPijO8J80sXf3Z11oKD6H1jjvISDpKxZ8%2B2GhaH%2B1e9DhH4rlHWeMjZ7ms2bC826Qqzw3n94Y4cyYXBX27kJlnrzrdG9ipPUNRCEE5TVPeXhmZsFxxLUvAL9bet0ZV0i5lPKcmADZ5R87tYPuMeMEqnfRup1FHTBpeMQSnn5ndPgWKkY4b%2Flhr50Oq%2FtD5V8tzVZvFbYkhF6%2FS8b4Hs%2FgMih2grDOu7WThIJbeAU9WlznMi%2BmnuC6jkJ3GanFcD0jgUXOJXGhnLnVLmLKQpXZIeJNSYna%2FdJUnDw3x6024nOvhQ6gKi0E515Yibg%2F2yrdkGj72r8Wh6HiPGvX790bXmP%2BMIt5XPMWAk3rooB%2FXv23ihLNyXww2tPEwwY6pgEc8hyOATkhJjs%2B7sKjn6y2nJPvPcdHGV7S61GRlYLb%2FPAvk5PnDtkVMpG1Bwsm1wGR%2B7zXTfmofZKKlGM%2BJdDVtxa3bKd4SVdETEiRoy%2FnOnGpA%2BSf2s7SybYlwQJ5Q39jfE1gray9ma%2Bd7YTTPS6WwX7BmtAEWavi4c7t%2Bpn6eLEwwosgRqh6FbZf64aAFYnmgf%2FModQI9OiHoqeOdbBT2z1czRPi&X-Amz-Signature=215e9f872cf46e83c335dbd9001cb13efb5bf60317fcb83a337dda4c50542e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
