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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBHSOWX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2FQ6tF5h3%2Bi%2B7GSKEAhsKLraNlaH09%2FKLr%2FRk%2BSPeKAIgJUwvNnGhl%2FZ6QDroHT%2Beh8VppJ0XwC3JAsATj4CmjwUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDORr6FOMe%2FdgPztcrCrcA39bwMGdGsmwj2j96iO8Dhp5tOp8VFOadyzWKpV64sr6hSkvoEEyAzB4i6857CpY9X1sfQIJV5U94ORKup9QQOocFyfSFzw2u2zs6WWP2i5gPoYsePMcf7c2XpRxJhKw%2BhFtbsjfyNauZptb0nKSVFNCzP3EMmxFksOM%2BwXQM9t4OSIwHm9dUEmolkC%2BQGT9HpIfckDzBuaOR0EYEVynQfpwktK6bQDbXdWlbOFygz%2F67oAf49bdg0Yjfpk0PUKY%2B9pHmW980yXeA629tEkQJObkzbBEXMvbVk%2B4JiTvC%2F4P0e59T8D8M9hrS2Nyh3bXhCM%2FLxCR%2B5HILEHx0akM3drxbSgkcUvWW3deAcRhHmv2XqPrjz3k0O7JqDFiVfyFwx8pDd7xTxbmBUcR7g%2BhtpZcBgaERrgzn%2B%2BpqYU0dH0RTfDacBER%2F84qQoBaPaX%2FURICMP0g%2BZFIdKrY%2BqxJkSTbQy1MO3vK820PGd9Sn18ejpTF%2FmaRgtcCQrJBpVs2gPr8P6EviGE04%2BbTBuDyyF0sEfyR8wR%2BswIemdsb2lrGnlSpCC34TzShXKPfWLyq47pRZfEwTaeVBEhR2f%2BDsxu5ScKE86pMne%2Ft3pG4WUFOnLXb4Oa6%2FIKdazocMMD%2F88AGOqUBirro7z7BqLJ7y%2Bvnq4%2BRAADQnuh046D4JyRRey44kF0wha1wXsmficFNGwKBPbWyHnFs6aXluuyTphnVXj6r3ciS8gVFicAQX7K0bW4EMG2oZLTLPhfq%2FFPunqk2qQw0Pi99Jw8vIJFnzxM%2FWQQM0Gl0etjvm3qK7FyXqTs40s9d%2Bc8H%2BJjgM5saZlDbTqFxM131Emf9Wc40g%2FYX5eczTaAe7Hpl&X-Amz-Signature=6feb249e84f84f06f4884b85079712ab72155afa0e71f79485ffa8113db8e30d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6C5DOF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELAglPEK4hkkeZeFFJsW6GoKcCmnX2%2Fo1LZWT6Cf%2BGdAiA%2FIqDv75ugXvUeZiVPRW1kPtUdl5kluM8R9ow2EaSJkyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMxpEt%2Fj8PZBiLar%2FvKtwDLu7mVbA7qvvqdk6CtPDrKGk%2FuP18oCyXntqRCiWV1WMbdhUuB%2Fk6yd98EsN4Wd7eOQRqFDKbJ543V5RqMY5WaZAALl3uGURdQV1EPE1fpGxeQ55iMvu8Rxkn178nMUHd3hFEYwhvlMxtpwEE8EyW4UNxhpPDpJeGMrCy2lY3KFrGszNRaSYnQsv7pVVMJPlXb6YfgxXZaN3kNBS3%2BMUR6lWtD9sA4dInxcFgduPQoQpsbJIoetJTqzD1H7ibcT%2FFiLYMh38hpxxldsphOzJjoc7l2FksH%2BJn62Y4AIAoFYeeC5R38Dg4kz1M3te1cbKIrtc6z2Z%2BpfTRP2BzqJsGDo1Pj8xZIDrJ97USBOYMiHzbkrPTzycf5GLlhg2TJrUXa0Ziq9suADnWc1%2BmSYKVXtCwfYB12yXOytpknK1CLMyQnx5Dqh8ITe%2FwPeM1mmwOVdbtZh6N7vNQ%2Fl9EXJmfijYjRBG9QSAHq3fjPMyyVeRPVDtCDkeN%2FqNlr7go2bGnxPneLCzPfnkakXzExrfQFXL1rKygSMwcWhMMep11OnTyZqcSpzfay%2FHIftOIF2D5x9x8on7lrSGKZsjICWT8yMEQrS4xaOGXJbQBX2jrdP8lt8kYriGX5VNEaB8wx%2F%2FzwAY6pgGOWIBblJbhVnj8437vCCYS7AXPARPj3DpSWrn4QdIBX6gDAdj7zxjRokjGHNrE2sOggFnkI%2FZkEzZdPRiVq1R8bSjLrSLBYkShl8ts7W8Ykx2axoiREhz%2BwrNpjXxjafSEw%2FyIkoqfzHGviy84q%2FkICNtJsdqQKEBE9mgN03cykxcb26LVhy54latH2wSGdyqPYgqYLLj44TbiCuSsa1UB9BnOhTTQ&X-Amz-Signature=36d4678a01b7352c5520e2c1c6c49e03e399afea2d18d37c6589fe74362309db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
