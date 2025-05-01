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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2H4KEJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIA7HTCzRKiH46%2Bs7TvGuFRVXYKGmem%2FIPAMZNsyBF6CHAiBrKKUInGOLKtvN4q36mQ%2BW8VvSF5M3kTPV8A6tcx%2B1%2FiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3xXeXBRHlT4Olwn8KtwDO2o3Y60h26%2BPNbqZvrESwXPWa%2F0bAR6bG6q7VZYGBkVJWCRdeu6hQkjQ1zlZY2aB5LMoWtwjGw5J5pWh90X8%2FGDzcsPnWjFxSkd6p37mqDwIXO6d%2Bh5RCFv4sVosLD%2FpQIoMrNiiEmedrBGBo3TfJdxoR%2Fj8njNtC%2BxPachQpCo7zNlNCsebO1RW7oAA8%2BO8CQLhlu6lY387JsOlja1kPy1fHKzpoqpQtzORsYSwypSVkmt4A1tV%2Fm39WjrrN85JW5t6gUj8IBuXTlnSo23Ka6IQbvA0h9wmUnr4dzcPXCVILFsopJHZZgXJPw4doC6nqu6cLfWmMVMJOpuu6X20yudTT%2FQLbevcdeGHTFvVuq9G%2BRLUbEpXsdiLYaOdTVhoXozZW2xt9l5brysAwAeupzfUiP1mRNMSEi91WelTItUaOBklHM5Ck8QgYAGLYS%2B8%2BsC%2B5267ZoBZxcB2PiEWrjOQCPV6TPCviv5uuz050Sq65J83E5VeGO2iPs1fj2PjlmIBU%2BxCr0nae8EDONaU%2BQHb6pSs3jPJl%2BhNqVZ3LezfQEU5atziw9wGxMg4ulGrQvhnbak%2FptLU5oBuh9l9p0HNEaQaCEb%2BHqIFMY1h8MiirJQ2b0vEY7rs6kEw3tnLwAY6pgHj3EC992CnltibgMYRbCsdUbpFilsNi6lRIGjQPw%2FmDMHpIbm%2BzaNMc4XCWDV%2BoeDVBDscIcHsgyola6VK6dWV673kBi8GrEwS9b08qY73vDGfX%2FYT0zF9A0hEC8D0SLcYo64NbtFIb2Q5%2FSTwNadmdIuPvR8UkPZ0WZnDVulLaOpgAFirdHZSHTkSwumwXkyO9uG3eGAerC8itkfs5r8UkcspLsDM&X-Amz-Signature=90dfc12cdc5aac26e5d53f9b13cfd865c379859897f78340809946f371be27ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPBKHKS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC%2Fm20ek2BK2QATFc013BmNo6%2B2pOBtDRt%2FwyYaRV9IawIgdILH2XcA3KwXxEBzA8DzOBj35S9XV1zFkha4azkyw1UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNh7wr7th1eeEG5SiSrcA7aDfP%2F7eV3huNgrr9zv5prRGWkgt8OmRM%2BDYSEpkZF1YoNt%2FL1zxjDkDDHoZNlAJMnHUTq1WQBBOTf8Vvkru48sFkJG4Vr6U2bLxTupgbymBjYoqEumHMUkn82JlDT1XF1N4yrHEGvag4sZSp%2FHg9uoZDGh5daxRZghzI4u1los7kAGTi6fW9Ie1ay7tInTz3YaYL3Ja1e1sMoJJLtl64mrV95EfaSZIz9Y%2BMT2OldPHrFY1WVge02iFksGj7fHVv%2F%2FWcjWvTNrqdZRx4Va7UkGcbXQRDf6Ls%2B0sRpK7j3rvmY3KsIdaIDDY0afGKHar2v3ZideSkm2YkirROlTAK4UaEEMLBaL1rxujYUycbyVTa3kxPhjcogqeLTur613tRpn1Ta6DGdOpLjswIt7Zv4alCSzE5fYW%2FNLj0iqG7ApYbxzuQcQ4WdJbu9uqoDoZpkuTzxp5e9c0OnDqqJ3PvUQw4VDey3ZdYXGgY4Sgaxs5R%2FOxPoGHrq%2FSYxpwh375TwMxBllg8G8W%2BPDU7SZRE0kqSkpB%2FhemPIQXjJtMEwCMBpLqeHyc0j9jnvfQNDm80BBJBiT29EI80vG5IcFy9ECM7SeGrXrv8RL9RJUGodixvFigTqkRAxIix92MN7Zy8AGOqUB7HOqgTLDTrAp8WyLeCL8V0kuy0crzyZhXKFjZeGgfAElNbU1aadCdCz0MaG9uW7%2FZ0HTlI9jXve41oTBOjtmdk5q1Pw1CsM1%2FF4sIAzV7UWjALHVINHYjRSOU%2FaQmeGHMCq5S559LQ2seBEWr3%2FS%2FT7CleMzUIBE5ScbW5nGdbpTs4bTy06%2ByswWZApjSBxD0VnJDJ%2BMxi7w9cxhk5QMHEXcju9t&X-Amz-Signature=3b10014c9a87197b9c9407f19b8b184264ea08b383b6be3dccf82897a1267cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
