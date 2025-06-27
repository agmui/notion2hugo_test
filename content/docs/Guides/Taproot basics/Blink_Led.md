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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Z6CCYD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFLnSrX8FGFrVEsRDlP62J1x6GpyLVESGK6YXHyTBMcdAiEA%2BBG%2B3ExyAD2ZH9N5U%2BiW1mEi7C%2BHgD40xisXEFhn4U4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDIdfUyhLHJ%2FhhltSircA1nz7U82kZhML7BRC%2B2m2LkHDuxpZ5MUXy5TlSq9WFtKs%2BZ8gTxAP7ltj5hN36UXW%2B7ZGHSHclfYkLKJ9sS%2BDzftlLfLy2MSOntq9ASPwQfp9fCFNYcnm6akfnqINSyer8L4oxK4VmsjLDs54UXeqquNMbvZLSaorSV3%2BPvKIcSHIDmqOq3aZViPlVBYD32yzzP6qtkSjanMPx936rbw57x3fVDQipRFEVmG6poAsz462rwRwYeGeEmbrrRYPx7WDXJVVrfHvNpCWfHFcDbyqzcGXo168onNNHmDLljFwx7l%2FLVzW2KcH04hWxuITDcn%2BkEs2C3fp%2B34OKUtCINhQvrN%2FXliTg5Qj5Uh5b%2BpzLeBDMxGJKUF%2BE4vRXUcsTOzYUWkacUHfdMXK4HsK6Lv4i1g0N%2FJzl4RnTer3t3Sw904BVTFa%2FyZmrELTJ0P%2FwRaHicDwLtzVAnxs9g4oOWumRw7b2PtRNGaFyLGAWnIPj5FS2Lw4xCmbPsOPUXQOv5xi%2BYLG%2Fuy3KGXLwYCvUcyVkc2ELBNcud%2FdIbPo47MZWziUK%2BMH4tnE3%2BvAsEKGFkHZFnHl%2FofoO9zB6TBTcr0CaMLvLECw3X1HWrqWKSJGGGIfdDmxHdvbC6k701JMJjN%2BsIGOqUBzPoAqnAF65bkxAJwzfDonLnu4e5LzhFwaAtRSxKISsTDiSmo3VXsXNjcHqjLiEwfbS%2FglARQMJsP3SR0o6CwMuZ%2FwQi0NyPuBksj7qQnPVuNRK6vqqS0KtKveBmnUvZLRzYWInDCu6J7DuDF0LdHQWGDYSCG%2BEQI%2FxhLjJq1Ss59RY06E2n%2BlvGGnoUmpMVT6fhF%2F3SpnDpAvhrN%2B2yvAlx8tNWb&X-Amz-Signature=a07f76d041bf31a603d132df5005aca2ad570d9cfeb314409e034a69a6656917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KN5IKKW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHFR%2F5JNXLnsyZlC5V4V7fX8piq3OPMJmVqqqZLJoLq5AiAuT6OEnI2XR%2FDZOhIFQRnhSd83dL8cmJ2ZZpvQcH%2BnDir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKE02ncF3dDTZpo45KtwD%2BErGo5Ae1c7EnCK6uJDdiP%2F10kYJ6w0rj7SsQZsSyvWfHCnNahpvEiX3fBqYMt%2F4JPSwnq8c8e6M60riOeoQXewPlOXhdZRtOh%2FStALV2cqWkyJNympv4Nqyn4YcI7fMbyKYk4kruOv5wFnYXbKzWNpbxuI5vUbCpX4MH85R%2FCj8h8UpQvhUuwSd2QPfT5xtof96lQ6rKKfSfwrKgDPVvxSikKPOLOw%2BZDU0PgBzVGjI%2FddbmtIJQqPsdLlzs%2Fa%2F1UsNGT40Nd6zz8EzAron%2FvSOMVjiWqouza7it8%2BATTUumU50acZoh%2BEhKlCe6OawkyENb6xYBFEfFF%2FXWRoLQMPpsEBhVrlZoeVbXb9WlbRFgTMDgVKLAhVV7LEEMAht0TadloJ%2FILZkqUAD4bfafcFBMUW9HRDCD3l%2BChlFwjaReetBnAHVDoAd%2BKi9Oytw3twKwOqM8rSft%2B2czvKALgMBH9KwwMnPdsDLZfSAMPqK1nGBnOJOmiUhUjg4u0jN2jsFxJmfJVQ7RWDzhs50BYwgx2G7doXRZxvo%2BtigmvquMhKAMQn8FOX%2BM3ohgaDHeXAMegcVYn0BnxmgcnR7a8%2FvD%2B4sedYKvmG94ZYlsbo6AwK2VtdRuyij37gw3Mz6wgY6pgGqKFOIjq%2BzfaaRrVnEPwZTIkEffqFNqLuqIibaHjl9lx75viQ5ZAFfli0VweNNvEZv3eCbq9%2FLTb4F9QnViLWyN%2BtCt%2BchDVJrSe7MXK5KAzFDDz4zmBEMaCsl3wYapudh%2BpwDNljaA7CwdstPbDkZidjNYL2Ns5CACyJhLq0%2F71q9aUXttRvZ8fK1JXipTZ2zeg8lpNozw8v2WKNWMzc5o4SD%2BlHT&X-Amz-Signature=f6c4edda5b6532d09a3f993fc60af2f8e6c8ed0a3754221bbe3f6d5caea7154d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
