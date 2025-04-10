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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS35GH5L%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICNiFR0AbOuvrGLmRMURKRJ3KmXNgAl%2BIpGNfHzPEstdAiB1lV5hefErS%2FfQQ9jGExYEWA0zCb5y0e7RhM9B7zdXLCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdqKWQ2v%2B93ghmRhyKtwDYFoDte1M93XRfNCJQP9tt5qbhEENIlaSbNBo8EnO46kXwWTwKJPfyvNl45Nb3A2rOnjmokgia1ADbsrFf0j6a%2FDTG4MU4PtON8iKiEt1X4yMQfn35hWr0dCWtIYfNTY6r%2B%2FkaM7wm0Fi7bqDmI3laGZQ%2FSjwOiBWLGESuY%2FsXIoUg4Zb%2BfPPve932g4tSftvsADyBi4cz7hct5xops1KYgBbGc0OPXlhG0NbWYeNAn%2Fbh09WX7jQVx3SkDZZU%2F%2FnnNHE8ICCmnSqufWvRIE1W%2BlE%2F7vb6Ci%2F4ahS6Vkc%2Fypfy8YWoDxXZxxEtK2rR8b%2FNnKTq0xLySGK8ClGi1LVsiZMngWilE%2BWvB3okkAqjpJcei52K2WNZP%2BbHizxL%2FS3vRG53xWZnXo0WqziLI4lIa82UDek%2BSJjiwj8xQNlKDNEL2eKZVf2dXU2UnYhHeOqEsHNSFVXvAiptPIjaWmgh86YqPM%2F60UHayxt0m4yAzXdZsbqoJR4c6T%2FXXmhMOO1FnvSAXYazXCK5uIWUMr%2F1%2F3TwzPXEU0XWVbNiaZcFhBQyo4b3CKwb36GZOX5wVrmSUVoScxr%2BLMoUCDhEwra5gDHM5Rc0EDZzOl5P9BclFYR7alnEsPG9NRJFvAwz9rdvwY6pgFONQnKw19I%2FFg898P4%2BG%2BwZaGXCj9J5saoGw7tRJ6cjnlwjNMqjgfQkO2Bbgq3h%2F%2FLsuWKwGI49XUCDoOQxzf7s0ce5Yzv5MRX2x2E88hv8jRk4%2FcbAE4LI8rAdod9KSTZe8yRfxU3o1SJEJjiLCjkLPETOUJ6eOzP17blJ%2FKacB0UvWX0Y0IO3gcXg7X6y8ZEcavjnWdAQZ%2B5kAXjrG%2BR%2BBxtZtKc&X-Amz-Signature=b4fa3c58773defc15f8e6c061ef8b25e851ea3586da7174706d59c7e4a1ccf8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YONPBYZK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC%2FnP8hiDbqS354C%2BQFKOWJGjWXKVp1ijMomUT9ClmBigIhAPN1bnYmTeEzqxAdXFrVAn4IzMR7rVh39NqsWiwbMPi2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTrCVzj3MHKctnOzkq3AMnblJiF%2B184BD4jxI9V2oWjxMrjaeP3%2BSTCn%2FnaWn%2B2iEu3G2JR%2BWTxknGh9D4PEKWVmUie0%2F%2Fy7jX4hjRzGV59YGi%2BGp6X036cx9NjbP4OVa726RrtW32YBcV8McCiBZn6svuKVPRGMLoLrjMHeewibHng3BazyMiL05LoJJgIeGrmPYLlv83SjJVcY3%2Bd8vlGxMr05CfsiTCSnDaun9lLZuwgV4vRD912AePvE296mide5kzUWWgm4N9T65M%2F%2Bu7yyeEwuU7wLVGJVcnpB8W2%2F3dWjCYDhiE5Csd4p3IzbOxVveDUuGmAGp8%2FEV5pVB7l%2FumPv3jm9E%2FmGCLH7KsCCKBJlVjsMEZl1wCNGM%2FJOfXuiXDHzYwehS4%2BkSjvn1b9OxSFI3tZXaW3Iz3X%2Fn70JxwCPdCG9sWAUjaMOYLajaiuiQuIrN1pAnVV%2BHH7PinhRb8MYGUIVgHTdzo9tlrQsLjGc5gmyqJETEyajtzyCLpIez1rw7oMMR2FLvSbpoIlVy9QXP98X0yynrxvY7LB40fftCfTS2EqagUNSP1U6MbZYu8ib1kdilngpkyZpdMBvirxO%2BJecsGROO7K%2FRm2QkTozxEqXGPdYaSD3c9uUZ7pVfe9Z67qrwz4DCI292%2FBjqkAW%2F08FQYxXhbo2VXdgIZaQeNRlnv%2B%2FRfojdvnpybgiXbJNoKkmZfor9xoiKZtQlsJZ8m6Bf7xVOPD8MUI14aDvcznGTqjpK%2F8j0x4mr%2B7YtEOSHdeSt%2Biv5DKBk1aTlg1X7iFZQik5J%2F%2FtRWqigQATly%2BT2Z6IQlYzJyCF%2Bzz74ZqsdOBv%2BH82K84Kjd3msrrNO7cW42PrgpM1wVWe9FM0LF4m6K&X-Amz-Signature=8687cd91400a5c1ab195725fbb242a9c6e297d58961f045c13e032fddb592c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
