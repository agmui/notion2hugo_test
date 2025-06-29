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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRMH3K7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO4fVi2LuwAFAqqn6yLocvMSLdcCrxBKB65hH1R2ny7AIgaUGnak9qaZO2SW2KGo4xJnv0CyPfwPM1fN4cttOthAMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMk5yfQzYwBLA5w91CrcAwMhYIrsQ3wL17W%2BFf%2BZieprOgFPhKLScrcUn3HW0Cg7rRgXqmXgRODHHe6EbLCnM%2BfHqXpNe5%2BWBEIYS8%2FXxOMfSg0XG4ObrGDlG2nDLBPzPmaISUi2Xs%2Fi9hB61BNdy%2B2XUJK0%2FtKAaeDdNz7cf%2Frwz9Blur6YgLfaqExAnD%2FNY4UsHJx2Ny12i3nJ5cAj2zNfu19dFpwvV8cXumGLJy%2FJAqTL4d3DRYiDTNdCMZXqPlgCDZRLSycnnOGb%2FTD8F8ly%2B0P83CW1NiwJfI%2B9HbdLQPYiH2rJA8%2BINBJs10AbmsSG18YZxFvUHIt%2FKXTzzi2e8fZn%2BrHh3X4V0o%2FDbyxJHDXdg%2FkHYi1HG8eHZdhfCM5twXh5TcA73TY0oOs3Tgid0b1TnAVXY32v1QI8z99NqDd9g4DXlFdrlh42woAcg0xA1Sysv%2FRAR1HDY%2BbttPydYy%2FQhgO%2B3trpHatBcpYYl9r0UzDI8vxAcg%2BTDvlQFqR5yA%2BW6zeu0LE15rO3XK0%2F%2BpCXVk03VdiurnTf5nBEO6xQabzIbsxlh48oIu46Qt%2FQ6g56Sj88ig9nvRIyx%2BeTOy%2FUcb3ZoQPTjS3HgyNirpcQHYrbqGquilB6O4R7IEaGpxvXLWdNvr6CMKmvgsMGOqUBRXXSr6mOGGHE35RGJ0jtZj0Ytmqcfe2XEH3avG3ataO6GXkkHSL%2FHLF1lta2hQ4l0hwBLSO6zzt%2Boh%2BiUJsqnYOfFr7Jt%2B1ezURdcT1oatxdaJzWGFov2idoVl5tTsMYQFirqyUuVMnXMTTDGtKS84y%2FBxhTNMYhJYwnrWpUWKT4Cckz%2Fqeh4mSSDwKx5lWBgkVZVzKa7bQvJL5NyzCphlGhSqQE&X-Amz-Signature=4703823972eec2f8b0774582263a34d7f424dd7aa2ba1ef62c5833c7f85f350a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRYSXEA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl3qTwSld%2BbYcaYUzrcshbzsgW9D9681JsKxB7uABDCAiEA1vc3JTk03fL4CACZqfX%2FLDzH6LjTnUWEea%2BvuX%2FL5FYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2Bm3TM7IeGVMqLcDircA91s56cfO3WecbESCOGQO3B2gwKMgMarL7QjAhYkPjE6QEvaQgF80IxJt%2FVn50VV4nCxP25EYsm2%2BqvE4t9xHwbgGfKoXjjC3nubPDovr7J%2BJM%2Buznjt%2BNzjWo67hRci9vtDmxE%2FRur%2Fc7bVRcdGjXGly%2BCsBcyskSunogKq2F8FIHr6XVweGhAMue4YUECTOTkAwqPKkjL%2F5vVucXr9EljGKMyuAiegGEpnrJ4sZxnyQuvpSJG5DxV9ztYv0f6DU80miSYzNCQEFmJ1Kz42sWbPpNwyoQ3%2FUApt6tFjAxPMX8C6%2BLpR716bbdzCJcbIlhtUxUZ3DvUvzuK4XipZceNMRr10h%2FuKDT3C4bRXTamYXtRWkOt8dO6m8ywcm%2BFSq2tNOxCF5dcN8RFJPc%2BK7bPFahYm5Ba01k0EsRZ1nrRGQlf4T8ivjnIvu%2Bnb%2F6%2BsIDxJD4lvbrQB%2BPSeNmiB2xQYI7oZBlO2IoA4UHCpSD%2B9C6PMmZpHwh%2BgE7CpIO1pYO8foI5fQ8sbTnzMnbNB%2BigT0QaUWb7AX0i8a0tTXCRVSXJLVwWasBSx8FLfvq%2FUsDPwzSkuF%2Bf8esNNvjqnyk5wBSTj2LblwxLAOmidZWzj8rECHYIuSTsbDfdHMMqXgsMGOqUBQKnLLAsCJyl9FKx5ptUCHEcpIln%2B2U%2BU5ugykEBZcgXXXnVnstKjBh3PzM67devcixfDNU2PEgfWJWScC28%2Ba4hF63D7xjIEe5et94su2i55yIh9wq0Z1%2F1%2Bp9aaJQuB5Gk%2F6bWOry6wapZfIUB4PYsLiOUtVYyaKSWWiiB%2BB4aHlmW6hG3CxnnEQnwRuLoF1vrTB3cheNUMSFTe%2FgMm0%2Fqyi15G&X-Amz-Signature=ae3cdb8d863b89df94b4e0e106b5c8744979a1a1027ce63a51956a172f013d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
