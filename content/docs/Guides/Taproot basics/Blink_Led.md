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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXB4VI7G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVku%2B1utEBMnPOzHkazida0V8VdIeFIzH9HHECcfAwIgZcsChDwi0j1MYycwlH0LEL9%2FqEeSPtFp7%2BVYOBL1FCYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDC%2BEdkUXmfcn%2BdUETSrcAxuhfxDP1NZs2hA0MCC637Vdf4uDY%2BcnA2v83xzZwVT9im5M%2FE06MMgwTUhJHwXbyUJ6P%2B%2F7u7vDsNM%2F5QnFP1hVWYBBVx21xr%2BSEDwms9DyO%2FafXyAkbRunlfb%2Fzpld9R%2FS6fhz0urd9DC8m6DFEtFveFd8C3H2%2BX1sjM53k%2FCkuzF%2FFe58Nfui2QKGxZmAtF8IEcVkdk%2BTzdRoMM69YWpkieHUsMs%2B6hVBtk0yTxVhMTGsypkQQKjXnAvhuD1T9yZZY%2BdQV2ZUiav5BrKwRIp8VbnOuKvHaL6m6C%2B94wkZSRbJgWgXhkZ2KKCvF29Dxvn7DIP%2F0qHQ0RvuI0aaudd2dQz71vmfWraGiCWVoQF6A%2BjQgr7HiCitrniCTkYVUB%2FsJn%2BR6V0zYIFk65gJd5nyyD1zIm9XODipWfZEwPXXMeD%2FXgY%2B2DseCc7IrsQNF8nMM8ae%2B9%2Bzw2tpTxZoZwoiOspTVYjw1xRmTDzvVtfBgaGKVOcl0jyP7TdCTPb2juAFzy92JqB4brxRrbKLy6a6VPgy2i6WRJorJGaGMFSkiRTOVu2C7uEB9GCLA9ZHJHth4iQmuMdcsT%2FLtPrOPJsOLQfgYNEQWHy7Q%2FMJtfTfr2B%2FRwneZ8%2BC7sI%2FMMGz7cAGOqUBezrAYI%2F9ZdZs4K8qR8vqjCsuT91wajJItuTaBNnfvf9IBZiLvK1gS3d7TXk%2FYnWBZzjhy70BO%2BHW6mOOF9caeomIAq3mnRpWTucfSSXOKDHZTJAwQFTeAI3IJdOZyP45UoLzBs0Nvp1795Db8%2Bk631xYhCeH5fV0ZHiAOeTfoh9lUewYVtrc1SzvL%2F0PBPtjLTLPhLN101RX1otcenC5Wi5YwDOH&X-Amz-Signature=b5fdecb19188ca943bdfd3b970b08d179e73916513606a4fe950e44efa2baeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUDWWH4D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdTKvX%2BsylepOF4Jgp2cmB04iYYv%2F9dX31pf6uB2clYAiBeQqRxAs9CDOg%2FvrYLKAqB4KWFtkpMQZQZRgLz5JfCVyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMg9DB4U%2BbikJXfCCXKtwDBWqXJv%2FiPFvR2KUCdMUolBal9rmDXj%2FKsjT4OFaSZCMBvYMJ2vAGrE46QfYeQTMDfuQQ7%2BVgrLVv0UglW9aJ5QwN%2FT%2BAXeFT0VrwDesFQhdsQmeig9%2FcTpKJgQPVy9r9LPTR1DhgZNctYXoTwAnGKZeYvNZ%2F12F1ymDBYc7Jh%2B5%2BmZAH%2FWFrk3yX%2B9Q12MM4NzxBct%2FTcRoF8nfrdntq1Z%2FNjFPR66bhmxBacwot1M9M8hhkfDaawhflgUhkPldPVT3Bnf6KMwCx5fEjYrn7zUwliCafoScBPg8Z2kX70SjpAcMMF3DkKAYvqqZ2%2BW2gbZmml%2Fzfod%2FVhlvCnZ4z8qxN4Ln0HXwVzlChmYINrCBgecczwYCawp%2BleatlwFeZLvyhB7zFaEPZWejOkJrMvvG%2FDEK7FfRmyULc9TiWZUBPsgMbCEpzk6aUJADx%2B3hkbTAbm9pqw6gtHaOaI2%2BYKfv6cAQ2Rc%2BAwFqAhA%2FJPJODAcndxjNuV4cahWbZNile%2FjSqlaNXM2TbDMRLdP8ww0cjTdo4lDnNmv%2BFPasxJjm7a0w%2F5ZosW6%2Fg6q0AOnW57XKQc4GTjcpeX7bN5hIJmaM8omYQFWWF1PU8zR9rZ10iyMZG8TZXYVf7zJYw%2FrLtwAY6pgHJIaIx4VrmejY%2BOye%2Ftoi%2FoHi5RCG2WWPo6dlICVczVgTyTRm0N8lVVRMmdduiPLfE5JObMyzleu2Gh%2Fwvp%2Ba8LpA1ASfdxDNwfO3ft9JhCzoQ%2Be4%2FU4Kjndh9Nfg6ivWXSEShgrXtRGUdrKXRQCi9uKGjAUoMqWHN1pCNa4g5RV6ETfx1Nt20zRA4A0dGovWKkW3UsRfGV%2B81e8gMaLeGykbjlDhk&X-Amz-Signature=162b6c07acf06f8fe0ed9579f52fc995893e955cbaa4eb425a25dbbd55591a29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
