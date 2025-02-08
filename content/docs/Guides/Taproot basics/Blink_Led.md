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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JA5K3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCHm8y5iU5UCtwP%2Fvp5deHqKNOsHwelqer5RNgFjZErFgIgCQPLMs5Mnp3SVuLDuAGYjdSCCbYdItipwfQpKQAdgqMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4asYWeLwvvdFMXkircA2m4SOkF0Glme3pAyFeq%2FKHSljpVh8XWLBScp6EhB7Tes%2FW%2BhXeTZMra4R1oWKmF%2B1igcL6%2BL317dudTRCDuCq0ZMWLExjdC67iy6zrBf9iBT39uaCCm%2BlSfBl9gT6W9DROxYQWyx7wIx3gKchopJJ%2B0G4tD3PubabBvqEp2l9WKbKyevtY9H3uDvXZF8p5%2BYrbQt5H9fXbyn9OfjPpWg3GauNJBFynqi1rezPd4u2fS8zzce%2BnO9KFcY3uUEtF%2FMje6PCtAKRiTUb%2F28DMB8C7mCewELOb%2FBfzcGCc2CHcmp1%2B3CGwZXhFZ8oEJXwODOIv4FEXLT%2Br8fWWB5nEPlDAgpWgbo62lLM%2FkwfbLjq1tkWrK%2BQSbi2dA2E5Z%2BXM%2BP6L6w80wlxPgPxWHUTe3bX40rR8ff2ChVCVSkcSfFyW7fSHSqX9SNWblH7zDUcD%2BAEW5i%2BWDMQGirm3xY3ssZHy9wEis02x%2BdDxyDV90IjnHxzKAtu7CPlL6gJBRLDQ2v63NKXpHxGB4RgtoegigjNnGz%2BCDkH7smDQbg4TvHrcJZq2C2tdVPRftngasnaG1YDhfFVqy5BM517SOkFiwjE0OqF4Q6Bi0b1aripSr5GYpxdQ6ifi50id6Od5qMJzAmr0GOqUB%2BRdx7Y6ERb1MDN88sKS04XI161uGLZvWQE5GFw87HBYf4nQOTsgisvcB8gtyo8fhekYgX5R9nQmI0ntPqnxeTvGLUIJ0XrVU8o5iTAjQXzuRp3n89Ye1NNdwUNiuzC0IljDGToy5oIjKvY5OJEvx%2ByBthFEsXPuHV9DHJVWf3biUb917qKahfNGL7m0ev5oQwAVxDgXX8JdBzT7VDJe0etLHmT5e&X-Amz-Signature=2cd8e8454a9b8bf44f7191d2ba6e3e1fef3a86c42fe4a786672e14e5c2502aac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633JSFQXF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCfcZSLnfU7g4D8WhqoEzg5JlbvAOqrKVD5aZwgaOuVSAIgU4IBinAkf9D%2FqIGJDROdI%2BpfMgMjmn4Jsf9rApUPV2QqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3B0Cf%2FMoSlHLgP1ircA62T7G0QsKjUNNT0sQvkWtHxCmD2ODg%2FztNWQNMWeKEMln0ELQjzNDTSMsVTPSDLRgbo5UI4Soxg3f8BrFOKJeYXHJ8g3Ba8n8IwJNq%2BbK%2BudUe2ew1Y%2BHBUIiad0FM7GvShypX2B2Wu1d1FLwlZ5ZICsY%2BLCEDe%2F%2F5N90ljl7bf6gN00LGjRN1duM%2BJX%2FoS76fFy%2Bp8eVnNCitrnyOQ5YY%2BhIZ8RajOKO5abBE%2BKktUoWo96iFXt6Xls9UxE3XOmg3c9Q3UTptrmcPrL9gwkUoisXp0N1psEEy%2FaL8BvDrC1XqxaeAh7g%2FJEZGW08Xr9uLNJbvDhHUbnKgAGVPLzSIYWKMvgx%2BEh1tCRJJMJL9xJK0Ay3STs0%2BI%2BThpx%2B0Ys1wWK3YleFWY2PowJpv7F9j2AtShu4nOKPHwtO%2BC0HdHd%2FP8s%2B2juftJDdviZbOkq0J6mwFuOwl2%2BnGl2n27ICj2NUOt8TQjSEV%2FPde5Fstue7O9Ca2VvZ6U1gJZn1b5jqla1fzHpLikrY3xBvfVndGjoryNZifLOQKk%2FTKIrqc8EVU4y3GV0JBaiEspZ0e6VnxyR65N1ruTkh4XzLX%2FuAmarh%2FkaSpdwuoelaO1HM7%2FGjKtTaI3802Y2ceFMLTAmr0GOqUBRYxNfHKxXxLqXv3%2FpEAGBzXBkbBeP8ldcJ0Dl7PdYi4rvBKXa5hS5WxDT2CYPeUvLuSBypArumOekGxqrgpqEB%2BfXL4oKJyzAbggVsAexCH1j5HNsyYEA6uuVEjMmsW%2FuKdvRtcYTTg%2Fe%2FhLl%2FjWxyt9GS%2FaA8tAbfdHuu37TnBAfHM3WQcF8EQJPhUmGpy4Sz3m7mqg9dUWzfkIlrkUXrfoepTG&X-Amz-Signature=f17296b908a8de522be990349c188da0334f6100128f2ce3b524cdaa1e23f825&X-Amz-SignedHeaders=host&x-id=GetObject)

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
