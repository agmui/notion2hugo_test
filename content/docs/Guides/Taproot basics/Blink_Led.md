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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCXWMBMK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICwgOptB5eldAJEvzCjt1r4QBXxmO5q0XwSnZ7J7GDNTAiEA7WjCh%2FUwcQITll4wKgZtdm2jvA5bBJKPlhkOhyBwQnsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEq9NvLQF%2FBD9q1QSrcA670hPFIVnZg71p8%2FlLrCuv15undiVnpJ1qsEhkujpjTQ6eRuCAxXCHvuhwqjN2os1BMt6KnalqBe1Mrg78TIv6yjQ5Va3gu6bnf%2FnNxf1apFWHXlhvQq5P70p0N4%2BjQGiX161kPiWndEd2NMaQYVlj4XEiQ4Ej95tnobQpf3KJKaVhr%2Bbmklg4VacB1yaoRB6PoTeqOziWhqO7nKhcoEIYF5HXsSWP162OknQn2k3i7LRarDJ%2F%2Fm%2FKg9nS%2BXi0pCUeaHB42f6mPrGTbxXDbJ60ujO7wtc685UDSfxjGn9VskjUNuzgXdqk0d9p6imL2dXk7UlVbyB8ZSRkiNjsmDIaFoRsCMHEV5N36Qjz8Muk5ZLdnvrSedWSGgenDVsCCrVCHDZeBCV2DfFYMJWt4wxtBbvflblVlMOuwEepMBj5%2FHggZiDl1XQALmR080yJ1dySgl4ITOdgA1gSAfwoQkKvcjhSoKly%2FFbncJ%2BL7VqqJYwK13qdslDK11mosZh13iZI1Fqna9LmQRTu5u5Rbej1pGml%2B3xgN10WxGzZMtgtAt4z0tzZp3%2B1Y3aH8JFnq7J817Yx2R%2F0pr1jxHSTMzk1UUeCSa83wzhBLWojXtq79kIBJrHcGzPMK47IWML%2BEgMEGOqUBK9xDUWSJSixMWG1uVGm4txP8CVZ8P1CVY5a54e2Tj50MnQBCYaxq33LekdVVcozrkMhxHqF0de7zmbgZU1IC2f4q0%2BMlwIkKVrscMEAiev%2Brc1DvtYz3vT4aQzAfoa1xz%2FWpJVpx%2FcrWg9n3ouL%2BGAPHz9ABuKswbAwuHDvb3t17sKK0iZazR8TyeLm1c8zF4vLd%2BpxzyqxNqAlT%2BYamaI%2FgoB66&X-Amz-Signature=6aecef75f85ca7d488514a9a9a9cbc1c8644ac122dde3172612a65972c83aa20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAZVDCRS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCp8Ja4N9F6Svo4iK0GOz%2FN8zGOXKqVK5JNH%2BWuwmUFEwIhAIPnmBNwen8zL%2Ba8Ze8F3hQdzb2JkeruH1uQxKbdgFRSKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6IB7tIJGdbVpdoC4q3AMBAou%2FpVz4fslk9nF%2BiLlcBTMNZU%2BOdMg%2BQcBT46EKVfl%2BDC7qQiFebTmpMjaJsX9qPLE7h3PaLmtE0wms2x3NAdlPmsdZoWyG5d4%2BgeQnpVaqKP%2BIROdb8O1BLWooYClL5GLsAwDNacUU5pJmL98fbgDFSEOsEra9sE%2FlQ4fSvxIwr4iZ%2BckwfEkxrtBLVTX8qT8MshTbaea0%2FYJ%2Bc5XjKUA%2FaaXTZarQgSs1xsMpazIVRxda7KmrIPPdmS%2FmVNJmaPZgmvcCvpWiSUjnv1Kdno7Z3Ermo4cMhHZ6ZTidWGt%2B43PWqBzL92sKP4l1n7rVQW%2BGZlnUXEtXv%2F2HFxJOBT5e0eUx%2B4qKV6BImEqUYIclOehhvSICtKZPxg436%2Fn9nmjIyyXgJ6%2BlLNSpuxQOf%2BQxkjRsMixBlYH%2FKOuo2i7DcazSao1gzRkgsoLFcyi8BAltxvfE5PdEYqd0ovV4MRWMn7BphT44FBFC8LjLupfZe7ZxRLD5v2laP6vCka%2FyiuUORanqIF8abImIqQNITmzWDFYpZra4bl1xj5BLyUrOSWJZyPqinoUv3fmVGZnpr9pqmrPFEOC4%2BPJzLagTfSI3BzNpcw1oxl%2F%2Bli3%2Bg6a2RfRuOpRhteqMDDDnhIDBBjqkARogscNkEa48EKLMFjzeCV2eTtWc%2FigxZm1SAxpN4EX7FFLy0qd%2Btf8RrX7kHiHuYEk3%2B2WTfoAXhsfhatVY6e3cC1KUqJa3LPD4AIlWoHhBs5G0dJjjDbZgUKjy32RAiQWQzjfVZcgWAT8ui7X2w7qlsa52VoDNzPl36s5ekb2Uk6qNNdywIEgWrduMUMXFxGVOIO8gPi1TVobQQFSelE1qLmnN&X-Amz-Signature=ec6a044df2434072ee0beb72f2c558d088a2f37e42cb3b5e511cce63c82f4a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
