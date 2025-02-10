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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDVHH2U%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM75OOSEoBkLcDFOSJ3IEjm2tVioVdhS5pXh%2FN2TTMPAiB7FUU44hDvJZAjnBPKuH5rSL64eVszw3kr4KTJKXRpPyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvc1tZPGQMP9hd3BTKtwDwlP2A5EJd7vSrsS5cuh8tySnGZZaa6UULJb7vbW0rXfVlbkwdpuuP4MZ5jOB%2BHq9g%2FXzMDa3wVsp71phmkE7Sub9OLT9pFDeOtPy%2B1PL8npTNLi8knOtfBa%2BqwuCuN2kOVf%2F0H4cGjRoRNvAVaDsAKfc03ee9imSbCelvd39ebyJGWomVb%2FtIZ4JGPit5EZXM7ejkM6uSkJWqn1zvpJNpL5VUTDmxcQUOo1VZFceWbJKqa4yDCVHLNx7MVSMNWM%2Fla9XUPjqu0JWuU3huuY%2FAlAJxLCwxQxqRRJerhxzLz8E0O68D1c14%2BcQZKToJYyTSQyc8190ltdqIoF1pBw%2F2VxuxLzqEMQUuDfq8g5QFeSuJNXhSvoqxUwGuOvRghou%2FwdD9v4wbsqRKU%2FLuM8QZwH16gcMXcXIGixSoEbDjHaoWAZVT0io9%2B4ZN7rHjXG%2BqKd8%2BdFwPaftljPcHfbDJPatu3BMVmSXjlRFsYTQLKHNCjtjeUUfoHLFg1H1DO7t9HLKzFK1i5j1cPdNB%2FWSPjDNRwkXf2fQWwp6UAeT8esVwBlhjvigGjwpZO2bqjvMkYUKcIHU4idMQHTX1wCOL%2FJx5%2B8VQIeEQa4HnERnxgh85Uy2svxHw1pwbZMwgL2ovQY6pgGC70sGL5b5V5VmyrPYswfd%2B5Pk4Ldzg0Wk9dyCgXdu3f%2BugKC7RtkLJgU38dl1gbLlQK37HIG50m%2FacYFj3uBSoiPkTKXMIKdPKVEm%2BWNZ1sLPIr6S7qp428JMecQR69nyHr%2F1wppLRk3EB%2Bdi8SGm5qjQTd%2BzV%2FLLEN8yjEIaBURT9mg0UFd5W8r%2FhREeMp1l4ysXrBxY08bS3rdFDOtdFGn6F8zG&X-Amz-Signature=1365ebbd4be87840adbe0d466e570014d6613a5ac18501d80c1eb318e9d94ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQE2KZ3U%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9KyFhOUDf8S1SXC%2FBR2IotTF9uiTwJHwBVKbYaqX%2FPwIgd%2BuS2DMjJ%2FzOFqK9ldnQkuhzk%2BGMCVywLX5Spfs08HoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgqxMP1SCqLWAxoMyrcA8d5IQvQ7Shley6Gcn%2F8%2Fr3A8fnrrSvsu34TMg9%2BjFzISkbPrf2rrkh01rldy10RfEARjXMvsH51pkbqPb%2FDCW8%2FRjEUw94Qg0bBuHAEBFntC5W1Ez5NBLNhTcA6phk8ae9g54YMYgWk7GwhaWLt%2FUCtTBGfnJoML9uB9wYvgpZsRcIT6HbUZbqAxcgDtQwV6Y7unJ2drq7q%2Fx0a49uP00%2FtA0AQADIy9GYDq8d1METCRjHVBk68tiJOrC2desfidgH0XC3sqoKuj5PqYcQ6QcXxuVHaXSKvtG58xe74vivEwa%2B7WwQzsu36Hj5kIQ%2FhsmIKMU8e6kQwXxVO7jN8iudJXvMrPXWYQrmrn2rFZQCi0jQWMwfnjUgFWZOexULtLntCxPWreV8XdlFUhPKfuYvURakRGzeHLKZC2xQFSeQwgNYQR57HgIgfXsHOniNu69ZwHlCzonlMpFz%2FRy6LXBbxaHEaVKzhgjnTOVYrCQ7wYtAJVrj2TsZd1OHXO%2FHvHOpoiS7Y9Wm4TpiQA6cLMdW5UNVeoIBVWYGtmd%2BasLhIdnOFuLwa2ec1f4%2BBtkPEjhYZzKnEtBPLVArtk%2BaWxxEPug4BHaxujL3wUKn%2FYbq%2FlYmC%2FxQzAzMN5r3oMOy8qL0GOqUBBTyIZ%2FTtsmpMXxdQvOD9Bc%2FTByW7Oa%2BioWml%2BZUCXFGt0ozV%2B3fHOTQSkVD6iCWIcgD2LYORJ%2F6x0WkQMdGyJYNFyIMdIyS7bl%2F1w31jM7E%2BoogsiqZmPIEzz8EiX%2FQqYdgpQEk99mYx96grmJtu7C7l0vwiNxGpbiffXVBj8P52cqniJav%2BQsjLM4FUgvfwyZf%2F9LdC9aZC7wBRZs0juxezywrU&X-Amz-Signature=ed10c577fe1f2e8a6a1d3b482b8163aabff4467c1a58c19761a0d8730b3ce46b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
