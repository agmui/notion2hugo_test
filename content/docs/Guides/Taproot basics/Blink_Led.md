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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAQMARB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDfP%2FgySiMdKz7WJxpVIDRqL28cT05hPa7y%2BggP5RnrogIgEEMRTm25Iw3FyV3kVZf5xYxzBAKl8p7tWMrvN2Luud4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNLM%2BUdyCLIHyeFXqyrcA4qx%2BgUTwMCYAtL%2FQw1f4iLBRdNSZNf%2FwKOH%2FfB1hbOK70AjOpRUoj8xvV4qdQRzodYouQxIiBwwTp05cMCNppIMNhG5xHAverWkvDVTy%2FgY5aLrZ%2BHF9Z92IYUghBMiWm%2Br9R%2FXCmPzJfQfsa6B4x64yPuM9OQk3X5mGKy%2FfJuCfQjkUwHgU3dNcBwkTfpoLVRM60UgJSa1OGfmY7XtXj8ew6GklPu4ZWSBNtYQ%2BC1NTkuVr7aWZZ9oEh0%2FW4BRl2rpcrMwfympOLAbD4HwY%2FmgmAc88FSo60HjXj8vBUCthq6aj4vyUP%2F1lp9%2B56%2B97lC70H%2FGycyr3j8wueFKDINQLz9NciDsU%2BST%2Blf9fuL1KVjlNeBGNWtpPzD4WdvizLRsnqNBNzRJ2yz8iW%2FFNuX3mteECIq8NcnlhG36spW47xbpSjdbySC5%2FWZO2nmRMcELPE4jLlTeEomwRKIwcXaRfV6RSr0jAvGbSQqa9rcD2mNuEG9AerGIKb2qZls%2FYa9AXx8ZRAMdrmmiBgfo3%2FOBcKj4IxwR89ZT0nh%2BI0YhNp9SrGz19cCK3XxK1e4zZeBLJK%2B%2F1Fw3O6UKApre2aiSxRPLvXixhMFwpVgjVYvIs60%2BkZG4irX0ycoyMP3%2Bxb0GOqUBkfuTmZZ7h35QE6DQUL6YZwvS9WL4SJEY2rv6VxVFGkgIfCLNq8%2B%2FUX23MiW49jw3qB5gavrFdEZ%2FjJirzSHGI38QWXmeIUA7yrGQFo%2FsNPfET5nvPbwz8coomaeugXW324U2zQfTPH6wxDqREuAESbCYpi30fkZk3Dki15EFuDeq8T8qJ4STZg%2FdgSmjNyId9%2BW8yTKyJp6Fvpnau41U6fCcbjP6&X-Amz-Signature=119c3b40ee91ab69e69095db80184fe8535db0e24e788cc0f6999cabcd977017&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNHWT2F%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICREq6hDKo0QcWOWC1BsdDR8bV2iR%2BNOEXbUfstepjzWAiEA5UnUPROtxdls20Y6kRC%2F3JfCdtJJStg9j2hcZ6vqSA4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNp%2FpPvLCmATgbOrLSrcAyRjA54chZF6YT9iTd9fJXVJfADu%2FdfSiTgyRvUgDfToxkrzKqdmjF5rcIhQOGQalz%2F6v57sW8Cmu4lCiPdhFcqAZ%2FehfwfctJ2AEB91Tp2WKLBsYXqNS9GX8HgB6Lq%2FrH6YdV2LjLTIbaUvg8aSH15tcC5PuqpcwI6sDPu2ZvyKPtPr8acYFZjC%2Bp8dvf4c1eixEUwRlIGQmEkJ4WCY8BHXkmNQHHbUDLAHLeCMwsSBVzeE58vDw5H3WWcwYE9DvdnGlx67tlTyDX0XG4k3OHKm8L6IAqaDeaY5BhgfigqABRH0Su001pEE2fBDa80SEGNDUHJ761Tka1sU7gslYnItod3PL%2FhVhhbgpMR2i5IIs3PdcB3uan4b6g6o5am3wXVPhIq2Bpw9eE1qKS%2BGzAz215dXIYFSno3t1SjljLAPcZ9AQtII80tF5HyMgKFPZA4kvCZgXPVHIytOdTGsbR6Oduf836WfP%2FJ%2Bld8fdiX0FYXWsVkyWcEjmJIfTanB5rmbeQGaH2BNSyKMY%2FE3eJ2fh6XtwliiXi%2Fvz%2Bn%2B7Y1MjELMe1VmNSULwX8du4CvNIlKSqQ0r6piuDpXnKGKyo8xQm%2Bx7Zaf6OdQy7ZOpW%2FqaLLsjkTPEgsT9bPHMJr%2Bxb0GOqUBk%2FovifqfGQnQamm2yA79Axmb4a3fuU4g10REujoiHXWsSPw3MHZlfjpPT9f%2FmAuHktH6NUMzcn3vqxG%2FHlsMAeFkS2Qy8cFwQ8wp4ZffUTqpoRX819SScXawJ9Az3TdxOXHq5NskOQt%2B7uWqKljuBwkb%2BuuZpwuHI2RE77JCBD%2FGhn1GTZWvw3W5Hf4mWm0GRm1ZLBhvSNDKWZyqBOS%2F9%2BMMj39%2B&X-Amz-Signature=3cad792a9d73594520767e6504a4292cba118e1e72f5d3671d14d8c27f4c0d38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
