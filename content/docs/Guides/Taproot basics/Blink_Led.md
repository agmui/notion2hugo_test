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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ7JYPH6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2ItcuXm7a9wXLZ4vIzarOIc0nsVS%2B4QShpCFYoAXMRgIgeJCN9ieN6311XZ8vVb0NnNLwB4OeHarNRjpHV7Qv0DQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqmKd9UgRgeDW1nVSrcA5PLyITcN9D7LtFcP%2FWJSiZQKaJhJT92zrBlIjR5nRYj27QMdC1BJqPn5tQnzc4n%2Bj3E8S9R9yhT8UZ2%2BUQXFTYSQF2cpDkvPlBOYn5GwIAt1%2BSLFWoMkdfFE49SUlCb7LbjsMrItKIdjhXY3LE4xvWBT8pDEfvXCDgOtq1NC9rNynKwoHtV0adlzeDcxKndtsdUjDiagIMGOE1%2BLuExbcEJEwdjL6ij7ozrdz10ZOjWrsnttHJqmdBiRMp8uSUPmnrnVxlx6Zv7jd%2FBMxaAjt%2B7MXnpp2r7MH1ov4veuFCqxFc5v3cHVAf7VFRQt1CBcI1ugzH2AvpjN6g8YnIBsdlA%2B%2BRtzGyyFgtzOSASodZcitXDafPFeqEvBEo8Kg4qTmAF2JcUrMzMi2zUSdr%2Bt8tjI1s5fNtPUsKPoOGyXpJ55X9l7NBhfCuQ%2B8Q3NXl60hTtvw5lQQ34OI1%2BWB5Nx2haxqwUQRVPYlenL6mMMLS%2B5WUylgTGA3CColyizjwX8cTy4gWBQ4SmyjaGxeqM7RCfsqSgAv1H5xgQoGPv7wAxGwcEh7DJCuKjWRLOVb2Ch9s4WjL6q3SyQmepql0TZQkCEtQdJunJJmJyFQyOkoK%2FawdLvO2DbNW5eVrDMNz9hb8GOqUBE0Mhk9mp4usN35UIw3Bu55aVnNTUa3hpEslBJiK%2FmHl%2Bpy8Uw1O9huVMMQ%2F%2BPh%2BJoAuZxNlMzJY1q6hkUFaK9RB2FURnxwg%2BKGRJ0h9896ekVDPONiUdQhhj9Egahq4tW3xqVxkKWMi%2FfUH1ZQH6tzHblg83f2x0a9DJUaesXrauF2pyXjKpCsD2EDFGsY5L86qLzh3LM8RX%2FmVDCLOK1pxGAoCH&X-Amz-Signature=55bf0ef5e7dc678278654eb76e1fbbd9831c8db207fbe858fb8c4e75d20a230c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGWHBWN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr53gO7%2FtRdWx3GHdhf5%2BL6RnU3iVmzCkwIX%2F9SFs0fAIgLfQW5shoZZ2rgEcDU0K5Vj7ulW1ZZpzPkd%2FyOGrpAncqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4XD1GiNP00g8FyaSrcAyct3vm%2Fmut%2FrpBQiKHI9AFc91UtO3%2BPbGSF79mMPqKCs1mPruF2V1t0boOoUluOEUWW6g7%2F%2FuTLTPDBKAW16WPTYXg1Z7XyNk%2F4IZWSkJ9RBgpyFMxlaVCR%2Fq0pwfoVIw6nOERk5hkCyVYMZhRNhlhK4xHMHItCDWmS4LlZ07sxuW%2BngjQHXDTt%2FrLmo0M8wDosLDd%2FZq2g8dVaoGxAZw1y%2FUQ3M9jBUqH38EIEayk2%2F7nmwNQvI9%2BY3KafCqRmghTVmMKphTyh70OzY3R1%2BmtMmt0Cw0DedCtysUK0SW%2BsBVziWnu6XW88LW5thoBNK7MicV8tceZfQTH%2F9PJ0Kph8pv8lsqWQOsfBw%2BurolzmLPU2vdxiDmGggY9%2FL7vw%2BnzCBBD4Ia7%2Bkq2IEWQxOppejy3lqWFYZXgXw0KlM%2FjVrzV3Vgu6wawE2s9g4ioF8F%2FB3cmiVCEurmxjjP1gv6I62DlNmXLNPUr48WwX3FgMHcpSskA%2BycG2Ld17e8m6tVpAvR2dD0SMiTgeRMgf2XSQhEx3GwZ6lrHTp%2BN8eLdmSY6TMuFunn%2BwHhLtMPzP%2BxHGaLWGvTj5C0NsdVCGgxi14hOV%2FAJJTjdz7yQPHeKFc5crIeMverTxQRGXMMr9hb8GOqUBL7OED9qlzuuYqGzAzwEAl7jO0ATxJjKPf9oscmN2AaQvZIwRXDx4nDUl9E8HStHOsuMn%2F2%2BEjrD3z6PH9uXdgfN%2BlpaB8Kmqzgfq98dxJ63Y%2BvjqiGPfd0GdYkguY878dsib2pGKEXl%2BDZe68XrMkaxrVua0xHzX3wPUms8du33oTJ1LtwNnYo0YRW%2BMw5otjAnm3qH2gzt5yNFnx1rKwS1kTS2j&X-Amz-Signature=f77da1e0cf832af16cca91b8719824310cdda102938509325d9b918f2a81de5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
