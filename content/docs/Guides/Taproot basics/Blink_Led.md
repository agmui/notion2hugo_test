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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWYLXZV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCn7CuMCPr15JOX03kgWxFubVri%2BNF3X47mGWiEvOJkLAIhAMjXh%2FDEi1R4cpDakce2DFT%2FtI6SdnVHmDRrt2sY38H4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQr3P2blqsBYquHB0q3ANQ%2BraoZE3RfSI236oSDIulmm3Eief4INg1btzr2SkaBX36m%2BNpudnFQ%2FDn%2FrsLNP7AM%2BG64Im38DxMoTXoz6LLCThY85stY2SQ%2FQU3Geiqub%2F%2F2mORspn%2BGtNWfcduULl0NcZA%2BfHAF%2B7eOnEIPFOASvW%2Ft8rLYsqSy3ghm4bjDi071yNUCYZ44gHUE1UNZ6lekqyUQ0LgPBsSMdTw1ijuBj3DJIuePXrZQDBHGiKJPZ8cMY0G4bb0Br3zAkyvlCknS2Vrsy0S5UGEvYEg89r1lAQjI2BJinOlqTDcTDOP%2Fymzk%2BTOc6tIWb2KI4VMt%2B7T6Z8BLznlsLF5Wc%2FdGw6oICURdVnfeKhqPPDBP6bl%2BNhflkMVN3fFBZj9wxzZyNFj25X2ymlYnLcfoADY2zFYoAdteHSHeicL3dhLxCEjjlIRg%2BY8IKap9tH52ClEWIjeuwJrSikWA3TO%2BsHCkfl2FcGtwnKulgbL5Te5ziCVh7y1wycDzhklSBQ6rzRr5GJRM2XA76GSCAIZOcdc%2F5Iy7h76hegGuDQ11GtdEl%2BZ5qJDYJK8AZPzhZdcLFNlCCNKL7bMkX70AX4Qia1o9K3uxtPORJW6GXNXRfVT%2BhAKC41iDzS%2F3JtgGGVmPzCkos7ABjqkAQ6jEco4MdlBbbLAdZCFjG3Z6SOzXjAShbc51B%2BlX2WnLCtrCrVYKZ4BPCAlFSa%2BHI3skHFNRgUsXS1Ofh5wJ9drlkUu60ZNEhwnSHziW858DH1QrrJ%2FgPjhE329IcGyJu%2Bp2XR5YSiTZ4OXLWVyIet%2Fv7XuxkSz9H8WKfAkLNmzUO9%2BBek5j6wWt%2F7mRKxSn4HnZjQRW4LOHUtqRYlUwa3NSVdw&X-Amz-Signature=052eb915a4fbed58d058d89b67d6c0bfe9aa592716699aa93ba89e768449af79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3CEOLR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC6IBb9RbzV9E1kzGxj%2BLwvJIklXCI2LYdKFGfQqVDFhAiEAl%2B5esbX%2FvHz3COXw6YCe7CXcKOjy91PAycGknMdK3%2BkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLekoNetLlK2QshRVCrcAwS0rGODTYayDHRlUd1%2F6UY1vYt4ZManbVIHnzTvlxcrGQY77J5tNXoMXq7ei%2FuMcc%2FvXfzSXBmTd14uMuVKGThz9DZ%2BekfS5SA%2F2GUf%2BUZfYBuiTigChTQn%2BQAdFKYaRi1%2BWTlImPhN1HLw7oJ8sAhtcEe2NrmVpt8O13iPXtk2WDqW7bE%2FV81w3zccnyvLjCpHjWOmOXCcLWCNsgSO16f37SSyXNbzVBi%2F7lwIG8ME2o5W4VDxj9AvrHuWvjJ1b8ik3Mq%2FubWhtljwejWaoVkHeNHehfmW82afXd6tH8GMDoKOlptvdQlibtjkEat7CQpj%2FymzMoxuMFPqYM3BIimnFxebHy0T%2B5xuSuPEUFb0467KUXw6mv5t%2FomQO64UAxijQULRc1XhTQbMYPqPoj2GmpuL4dcrB%2FFRjWOZPR2nuh50Za5t19KO%2FhfPobxp%2B95oWGWF1rkKw2KiGNSfP3o4ozrVGAFz5IuN9RFu0julAbKea%2F2hwGM5YU6Mwazc7g7y0%2BrRNk5rCwsPDEUk1IpRt3w4YY3Ynj%2ByLBr4ZrfBGSCPEOAFQwMcM%2B02SkO0UMPSvkDZeKLMFBjdZyKFGuJVn%2FJEP50%2BiuKSTtMQ%2B7THt7i1yJpyAE%2FZ9ethMKSizsAGOqUBPJdaYr18EpNb1CqbAFHul2egxNRnpe6xmeHJl%2BSYG9hBaDTJn5eHolHVoocpbM8i%2BAHsdf4WFeDyP%2Bik8fxUs34GpdrAsqwnEsSowCtixr2JKd92RR6r3eZ%2Bw6HK4tohJ5SVH0GJTxYwoDZfFg34ggFD6mNkRBH1J8O3JkIO0rZLktOyWiWMO8c2H37DCAUGXb8G%2FccLawezXz%2BZxVr%2FMHL%2FSud0&X-Amz-Signature=bc016664fc8a446f4bfa5884c38ccbd2fe460526aa213cbaf6a98f53447595d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
