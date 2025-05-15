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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CXCK2J5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFv62lE5EYZbdWsjqeeV6%2Bf3RotZ1WOLteTI7HvEIeiTAiEA%2FZG%2B836r%2FWH4J9hMc5mlm2bT4bIHRpNqf2Iy73lmTn0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDDAYPokKMLqeLuMUpyrcA0MLkXUdT8KmRAg2r8KN1rBIHB8D3wgMnEkuHMh2on%2BFfdnTj%2FtPEvdS6b6qMR%2BS5z4aO7TSOWkOAFqWjET1gDEodyrNJPzonQdozVT243jN%2FUjV%2FlAjHnrUMDKmPusuRaDaS3vOAR3Ind0nUXW26pwMRDGVne%2BEPbxnJnqQGFS66YutDjCvjTlLihQ3Rf%2FdN4rJ26DO2au31uFVllO4bsSzGDOAERis8xkcdhcRtfO%2FqQCAZGgy%2BFpm4mxTkcEn3lapiQNBs47c8n4758NU8Nde3C8Fbi2UAoFuQMqbjZaGyhtKsYE6gkzhTo5FIvK5iPAGVOKQ99juiGvQKsovrJQFf7QPgtyGY00h4dqVAWgFqK8TG1wMF22jikskRLYYLjKMvIpvKZJPgJa38%2BnpHjS7bx%2Fd1aloKqi%2FZ8oQ62yqU%2F8sCKyIZnmtQm1ohw1yrdEvXRoh5CyXVmJZWi6B2rwm4CyMT%2FjvPF8h6gjbrGconMGtWrvUNyGdOurNlCh50Kgx%2Fp%2B7qgB8blIYGrXs405%2Fld7IO8jSTfZ6H7duKWe4YBmVH%2BcBkYGsooc1rZQcYv1maphWymg%2FmhvUY0UZGMYzl2ISBcWhZzZmMZdiI99TFLbBHwqQjtOYitFhMP%2FplcEGOqUBz%2BUPZvdoDBJR339G5yBkiX0MDWdZf9Irtx1TgxM1wM%2F9RwOFYjR5PzSYMjqMSbvbLuI0NKDvq75FMVZ1IEZ8LkRJ6fctxToZn%2Bw0aMzoe3q%2FLw1y%2FMLq0HY9WFZbm1%2Bjpkm3fcotxbn3JFx13SZuC7oUV%2Fnz6g25ZPN%2FCgTOHmK9NcI4vBCCJKCKW8ASxbiyx%2BnpfsteBK7tybpCyACjguD6sujU&X-Amz-Signature=1f7d4622d4e2e4756fe3f04b82e72fe87d6955737568562f337cb34d5da1e4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTUZNPR4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCoKvmh7KVQ3sZr7ReVN2Pa16sm2sW5UImdvY2CzSZm1AIgUIgCaHAj44pzcGLc25hnMAHOYSh7I6YhzE9IFc%2BDzL8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPiy2shhugvf0Qo7uSrcA10lGTddovUeWaHs8x0eADARgH18v55p4nCROzvQk3tCLmXVCZ3VhmMuszJSxToYOcuvdUs7ehmDky8JyHxv3AjyQVEY1D613w7MJJE8MumKv79rKmhtBmavVrrK4dFuFqNcir4mg3pjfwhZsTrNnCAjnjG%2FsiIDNbdleqcSogPoxNp%2BffDI3NToFBDvwd2SWtCMIWebQulI0Whxc0iw8DtI9sgsm9fWnSIRPPj8Co7sL42omKlMqOO9N5c86p%2FxShCTYw1nslyrf0sQLl5lLRzLIBIcw85JyculAORI%2BzpjBj3CO0uBqtD4lSZads88r%2FxWe1%2Fd6aiZ15ldQKsMqP5FZkq66rWU8XgMy18fU6UAeJKfd6WgK99xEmrzpAoEbobETQxw7XiZ7Jt3Qzz4SzesoQbX7M93PKNfnFn%2F6kCM3wniIYvmYGV%2FzgJrCtu8LJdFFFc1Ynb57pC%2Fak2p9%2F1CLy22yt554INPynQ0zpa1k9io7kwISxQNArk%2FJQNtmDqg1F7DNtQ8hssnwuEiIs6UKPyjdgJzjhMcgQ0p9fUAliuUnBaM5NvVO2c8uHawhj63%2FaJ6Eex7tugaWLU3YT04nmkEUrWE1u0XXz1iCEQheJDK%2FgmiBhrjpG59MOfqlcEGOqUBKn%2F3ShDGAy1IfFHX0jdIJ72eVM3CAo4mKyh6cwATECMDnay9WtyN7b6OM4a9CFXSYyYsCDTNFICLgnAMrS4viSwmt01ycODw6d%2FZZboOi3A%2Fx6IsIyWOaDhrdwW838PGXlHhkJ%2FX0ZruN6KS3yIUjVqlYHLj3oUEE7kcH0uM9MANP14yuCXh64nKrSNum8lSdbLdee5rBI6Gc8tu3yiutItBtra%2B&X-Amz-Signature=76ff6dee39e1bb310c3a03c833408b3b97d6dd9c758dbd91fe4163bd3538a548&X-Amz-SignedHeaders=host&x-id=GetObject)

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
