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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJ54JRX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAeG9mO82D2mxW9vALbUO7CR2%2BGYKxyRJZOLxGGhHdsYAiEA4nyrzoSJ6JFZhhoKe0IdcYjmlyyxW7JaqGRaY0PCmhoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg5tp6oSO0c8fn2cyrcAz2SmgHTrBRxxvWkIEfR8KAcATOq%2FjFp4qRP1xGA4eK%2FZdu3BCkkuatbgF%2FV%2BHya6RqvrFml3UWydtbfgNcUY2hd7gKFCkN157kmlPnNdiuMl5IrcnlFGKr2NCpxHCi1Yr0Reig55QlXQ7mdSFwG9Dpbks%2FUcSvisi%2B18vawGGvEHWjkkbmOjOk3mGfHC9eg3FPDRREs%2FL2r22iVURFTlV1APuumBlauG1eSt4Kv5z2tYEtq7dV92u3ZOwrCEp4cER4QdWfeThT66jEi%2FeenlY2QDDyduU5DlQm6DTZYpX2NE5Wn1KGxAl086ChoxPXTb2PztEI0TCpR9mCDvBnltl3oRK9eHZ7RBSa5WcImmFGNf2VOjryR4DBmshKVcP%2FhEQffUsbFIIxUeUgIsp%2Bn2dR2wzG8P2i2F4AZKI8qTKQIuRTTfJHg%2F9OWyFcydQgC2EcUp%2BsadGTPW4MwI2yEdMNM5s0JZtFwXoPe58p%2Bjo0CoZTESn8aVkPEoD41dOyQlJk20p191UBIT%2FFDI5sUTBpCUVSObW2mT7MARFFue0NEbd3umiRBgix8d%2FUZv%2FXoJEYMmnuUq7FA1lBpsSzyG3eNwiYUODJ7EhzMJH4CbEaRY%2BSnq2o%2BU3Qz5xX%2FMODfnsAGOqUBawiAcOPI95OOHqQdu4nEvor%2FrO9coJVjEsE9JtJj4oGOhL4%2BlTovWJ%2FGzw%2BDZFhXLxp0yudH6msKwJBJiEtBonxnIg1%2FIT26KBOdzi0s6Lk84n4zfQpqAkR34j9xQK%2BL1Qi12knZZIhkPZZGKjQtTnN7uPu7sO1ZXmsBcgVQc2FKWnIEmQI3oAslbsbW3ceLIEqVR9RUbjN%2B%2BMGGqlbqUysYMgYF&X-Amz-Signature=ea5ab93bf925963423837336b88c8d022e459b5a0516add26f1a7c930973ce7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPKEF23%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBTjhgvkOUhum5%2Bh1FkZFeZi9EaqHiD2K7Xw%2Fu15jNF3AiEA%2BT4xHmSqWeSGPiwOwgZeQtHN6WxJINqQE4o3UDjkmmwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwCQ1w9PFwqU%2FRl%2BSrcA59%2FJnMd5KW97ecNbeuaqvWKx7VCvzUM279kPV9abN%2BPChG7j6Pxl5oUVP0GNIb4hFwx%2BGtWZenAEI1Lia0rktOctQa5s8iiKAYsTRxzIzyO9ROl7PtsKmYwJXdLPK6NyNuokfDBP4bxOKOg7Ykuj1tMyuAgZ5T%2Buz6HvSak5Df66TML6%2B38dhKrcyBH3fKZCwg3hluyV3hCeLr%2BcFpe1KYZDdAR0WIohFVuXeRImp%2FOSGitIfuEMVwO7mc3ZhhTPAe1DGBWJMSdlpSUIACHzMYrHhWWgn5mwPZA1CuUgBHyKFLViDEHvWGdydAB0EKVzVHFprK%2Fl3M2kT1%2FoIHHM1mrJ7f%2ByNDbuIUvNHQXPh7kCbWX2AK4TZUfdMmdWtw1Gp1TsBVHOPuVFl9QCHwP4SnWgdJMaAUHbdDGYafUnAfCG45jrsyGHfhA31JYt3lbIDmXukBnn81pPmwpXo1iF76uxKdXNlO3fWY3dZwewZbOBndnAmqXBMWgnWNxyl8yqK2dxs3wXjwlI9TFF2EnS7l3FTblkSQDhFN2B6MGwUU1TpQkSF%2BwrJ7e3icbaVx51pNGthxt9vwtXJHGipn0LXlxUMOC5dGjU2YYgLWLk4h%2FZvaE9hkChNGESg5KMPbfnsAGOqUBlhnR9QnKprx72SKpUIUq1Y9EgQ5qsQ2yTgChnqDxDlVZL%2FjJ55UWdfLuF9npPpbGxGlHwzFBk%2FlMwyPJS3cS%2BNjUMPWRZeTn7H%2FDIg%2FUJ5ef9A3LMsQ%2B0oNHKqlP7EKKrv71ZsVXeOggS3q5EoAYgekHm96VTgdPqUAOsM28YJwxCZTWxtSzCWjDAz%2Bph2kGyvcN9TIKKkFHb%2FJf7PFlt4ozU7oC&X-Amz-Signature=923f3f02ef6c22054e7393f6ae4fcbe475994f81524357889707450edfb84aca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
