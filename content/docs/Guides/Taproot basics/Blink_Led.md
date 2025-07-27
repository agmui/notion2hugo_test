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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCWDDFF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDq%2BbegNI1O526UOdD83uWh%2FnATrxCA1ZZY6uit3Z8hMgIgLhH02zcnvO7P%2BwfjsNcJdNIqWqH7RIyfaLyj5nb55HMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJvxvFnIj2aoKqhZ0SrcA9ZwEcaOgpsyBs0QR5kHhxPLSzQ6Pw7jmxKZZ8sCOD%2F%2B356nenTJmw1QQBxfC8nGEanJqNcQC%2FaIzbn9DSHarQA4Vk8mlCsAchnM61RH5EAhR78Nc9QWSoKjccPG88V5NZGxS%2BfLZYyZfZ%2FvcJ4nyRE%2F%2BODwej8njHK6vTCxYpdDT%2B6naYJMLWVznhZHyckCqZc1f%2FLQxJ5Q7AlPUX8ucv8SxDSK6C86wvP7jr8zvFGAUW1hbXsHjz9%2FQskPlM6JjwIrFf1Yic%2BwCwqCF9Y1l1ecqeCIT4dkmU1ZNLMQCwqluKCZIfBFPPdCF9f5nN%2B5jGJ%2FosbIZ6u1miQKu%2F2wBcdYEBHMfmMs3%2B9YisUWVsQ8TOzuwikFXuatf6jFQ3WrmSEzRAlLNNlIzQU6TO8Ji2pdllOzAwCCdyerKRQX9pkJ%2BhdWjF%2B8bwU12QQC7wUHE4wtUtpNDgrVNZ%2BBHOPawRGOEFg%2BwJ2R%2B7UIJKh%2FF76vdcNuhid2IeQzEzyLMCCWYUzN%2FFo4Ysr3X%2FHCqrkQyXxTbiZYYjPUppBIjDSVlVtHT9CenolBwYbwYuqDosN2%2FtMLndc6ssgPDZXiz9ShOSF%2BPDN0BLY9iIokovTpXnF3IK8jFnhEYHtwc5DPMKrXl8QGOqUBODNxIe1wTRh7MStPHNIi8kygVm8TVhALoHyC%2BgAywtZg6Ezc%2Bt0kA2INYLNFRu4086Z%2FbcqiCz5Lhyv7t12FHKAru%2F6i5oKQphnDqLWloIhb8sQPNRMZDiye1fbqvTKzmRnDKW7xODXomRJG8NejywpwksQjOmQQad7y1zjIDSYM9eKEKRr5acA1RhaGNF6L2bnbD2gjXkdZ0ub8Xi5A2HtNPf64&X-Amz-Signature=08cd5f94de122f74685e013bc6dda19cf234447bfb94bbf7c1969a9768255dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBML3Z57%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIB8YV7z8vtDcmXG9eM5mha27yxEkgldWtavbLZI93FsSAiB1%2F%2BNlh9fjUdcEWYrNBcxV%2FAj527%2BG7xhyN5Em0HPXZyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuHKmzyGU%2BSsyjW%2BhKtwD5Yqp9WRHpB1Wu7ypliqP5lOnnAGzLhlRc7CP%2Bapo1KQPxqj2XPasbDgEb9wVrbVsIpoykcPiiDwzJ3N3VxmBqO1LDDfzOi5qZbITyRtvB9M%2BceNq9gnlv7pJhO536LGm2ap%2BjOGQR%2B8yIhU3utaGlEoUEByKRGdinSflw2kzCZegEjJneUfAhEHTy%2F9zXGIlPkwszJ24CuO%2Fil2P8TC1gWAeFKGN8zV%2FmcXQWCdTRL2SeHX8YuW2uB7LQps9qk%2FNWqQgoMHzIbJv4E%2F82UG1D4gg4ZmbnItB56Nfn29xaX6yjrkcmQ3aTe77lkAEWW6CTvCcc7c04NfQ1TECHtIJxCViL2TCHQ8Pk3Fu5HwQF3JbRuERnhtaq46d3h5%2FEf3Dx%2BcMZcAYwreVyVeDZwoZtKLJp6iScPdfkBZyuplMcLC6KVYmyr5yz%2Bu6u81Z1j3hOBD3KIvCeSD8JHxU7PeBaex%2F0PGVirvdf9Jz6qTSr0coFLHEUXQuQ69LNC%2FzK19LgTIE9z4w%2FxOllji%2BMDJjz1cUKGDfd74NdSvS4%2FBOpjfnUFcNawdRP%2FO49AeI9js9KVgS9XS%2BkgwnDmQXg3KLRgtmWoM6wcaJrnA93JHTLLZGbmZHFArEXG5v5akwieGXxAY6pgG0kxy6gkflFKDdEH%2BLTvzfGzc32kR%2FpI8Vi55qQQsgEfRvIxg6fnpip691llf4Bisp81arGwiJSpWmVbJe35NVosgFSr8DtAlyPWp987Mg2eE7PYcoNwAAu39vI03ClMj%2FNz57I6yTO9AJT2h1k%2FbqDujIyq5UCd0NSR1SrElYC06MDIl3eazMGdoK8e9dEklg3Uxmo5%2B%2FyGZq4aw5L5YJvtav0K2R&X-Amz-Signature=f46270374a8e2a2196f1b58816145bc0fbddd1657900744cfb4ffcadc49c6acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
