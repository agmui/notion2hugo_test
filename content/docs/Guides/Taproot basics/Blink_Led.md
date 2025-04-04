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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQXVPY3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDglTTgKu92D8kfRlCaaSFv1B8kT4fBYjtHNLFv%2FA0oDQIhANBvB4iyknnJG%2FA3ZxtrOJp9fi2y2SAv4tw0asKG3hUMKv8DCBwQABoMNjM3NDIzMTgzODA1IgzhhoRUhP%2BjwEs5P4Qq3ANZ0fQL54LCNhmZvFqBgIfUlU0C56B%2F3d3hLbGM6uvQOmy5epjcACvm%2FW2Sqw%2BQqF7XAVA9qe%2FQ21Yv7cVCRkzMXeXPlKiiPTfTh0KJiyhEJKidC1f2LU4wOHTobiyhCN4NGHtBfNmwk28V7OOrssgIdRAPjL0bl0lSzNraZlc%2BnsUqIJl3rcaTarATj9r%2BdvkNi3aHApQt40Q4vIAIyuxDF%2BNX9dm0Ubp%2BBjaJuQkObygK%2F5tgpBN0VBgYwCWq9FXWrOdI63mC1jAoJXMmGOHtTXHXnCOR4zy0YLKtayXhszFUY%2Ffm%2F0%2B%2Fd8j0kaMvHjclRELbJniLRzIeb%2FU274vDoVZyJatShmN70b7F4Gar2j40X6ay0r%2BKnq8bgDGQosctzUvmui9VBFgu2cwZ2dr0kEchfl%2BAQIAYYvg11uIBKQkL9xLtc%2BWyDOTwAbG1IGiuzZKqhL1MMnycTDkXYV8t4N5KTwT5KpsHlBixxc%2FAT5IFFYLz6RYBDQZozmkkxbFWH4HFrUpE7cxRrmL3s0FAFRxA18Hr9NjuOhX2Z4CNyJPJugTJ3ETWkqJc2JCBWQNJLV8a5KTAcPTQaC7aC12wpk2wP9LlsrDiU%2BBiVmoFdcwlWDue5W7H9buhxTCD08C%2FBjqkAe3kW%2B8qsQTvP4eYMH%2FuL7tu0ZYeLosRMS51x1Obhv1hG73R%2BSA1YFrMk9CS9am0nbb2bE9FziNXM1bmJHcnAxfmfOLWgLH4y%2B0SMj9iFbz36iL4ozgH5KWY5RfAe0mqguenI02Unw%2BYnsMlKpSxeU9xNa%2B%2FC8stvZD%2FogEGS2r1FTW4dL%2Fl9gOmfvxBhShr1xsZ0FUmRM%2FgFNzHjRZBzzufJqHf&X-Amz-Signature=3ec63276a34be3c607da49b06113699674bde130bff08c1ddc5f2ded4fec381e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHE3J6F%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpliAXC5JpjXeWLOOTdr8JmY8kyRe3iSeLGmoicWay%2FAiBBKKAnW2QxS9JqhbkOt7mCOZ8uDdHmlGF0wom%2BFQerPyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMQpQWg1Ea3Xl3V5ZOKtwDyvMdLCGPiIroeOfmiKn4LGDfEP%2FAbfrqLq%2FecM%2FlwgB0R2rvaBn9qS7GbqHsHbXZz1NODBf6alT7ajlaK9iC01t4Q2NcBI1FWhQOUajzYOZwp0g2FEaRt0%2BpdEJBgtt5dz3j%2FnJody6fPSvAFTSIWSaBSrQB7svjLqVWJH4Rr%2BErVE%2FSOid1pYHuamauLXpkX5synOHVjCpUPecyKe9P5e4d1PV23PjJCu9a7r21XFUDZ81J9RJFhYLESHz%2F9qVDR5hed40HfvgRemJ6w8PvNYklX6F2kFSJLpgeHN0cGAFrxX%2FzoyZb%2Bt5JKk7c75q%2Fm%2FyGctUf85uonmiArp%2BQ1WBsj2%2B7cNekHC7dFcMh54%2BrgiL48N8ylaDMsJ3zQWl85eLVh0fFPQ%2FjWllGy7LCZxLRMNGKS2pNd8DQrTG1lr%2FT59BmWpcGai3xeYDwhI6OCB27SAeP3Ed5n29rZ7MMCyfEsEY4I28e8GqLKQXbQJw5miQFjw%2FobT37BaSzuhFZ%2BRg071sQWrcrg6pja0Ia91FCbF1ZSdVMKk9F4zbIbn7qtvFWwPvygLLFnzbU%2FNtmPyGx%2F25QMIHMEc2rCYQQsUysVZ%2FLXvMhIHLaU4%2Fvm2rNzi6mHejH1TnnHCcw19LAvwY6pgGpDHX22HopyYRQvFqBuTrgzRnVUrM18Gznb6EXzEmB7vhOe74JPAAJTJqlXjXUkinjjfz6Ys5RLEFC5meQiFaFeHALRYuaPy%2FTH%2BTv41igganM%2Botf%2BpeNAHb2jPlutLv%2F4eMvKaujgDsTK%2FeomHQCSmh8U%2FDFfivg7EIR8F72wSUpRTbec%2Fay%2FfoKk02u%2BoIqKTzk5HSTtzuOOiMrCuNR4quhflfK&X-Amz-Signature=1d48ec4723b7c3fe7542d8d522408422c02a0f6bd9ce8bf0feef7bbcff26dd0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
