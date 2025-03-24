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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC7R5WKU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7HYuycyEGYhvg%2BK%2B2BpE%2BxLdfKsJkk7Iz%2BheRBVNBOwIhAKycVa5RtqH0JytPw5l2UZpEVFIGUfUaOl5PN4w3Aj%2BoKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaqkXZvSo7CuQ3Vswq3ANRGCLZt%2FEL%2FhKwaStCsRG4IisR7hIribrrVuUSBHgHLldbyAEsua6Mx6LCUJHzWHtIH83pks52FKUMzkjWeKzu2qPf5rcZtHl%2FlB5O2det2aQ%2BegGiUkW97GTB6CMv%2Betr4%2FuIFmsGWT1F3nPAazYyo%2BpO6Jzc1NLrtqECOYKcJwWtGN%2FQdfLC%2BL8RbSKrM7hFgcBHSClIfdajBIRHKpBwdN%2B%2ByqLqd0MR5wRNSRngT8kVI38AsKoQIgxBfMNVxvvi4MBZSXYovQrlF%2FhdVnTkaLbj7%2FBUqHrQ0Et5voTjA7aoeAL2I14WLkOEZgvGM07mIa2rJwZ0IEmq67qlVu5Df17zlyQtPofX8fdIb64dEO4vhjSEZMo5Kbaqt%2BTFiLKa1lp7pJiRf77a1s5voa5udgDnxByAW7kHaCdUtg1umhPKQQsZsvHYLwfRwHRpE540gSkdsqpPLDfBG0MNgo0TMyXZvLD8jDTvLTM581qWS0n3yH1uH1VKTIHFtNLpYT1EaC0TcJ4EjoUTtUOxa20CRlRi%2FaL6pzpSFEFI6meNEprwqhgl6vfFJPDIr6zGjNSJshKn5f4LVGO28S389mdX0Ox0ItE%2BS8vH99QruyAMbNXs9DnRpIrMhmP64zCI%2FoW%2FBjqkAblOoSpyS7rl%2BKDOIvdbIQegLGY8r3Jck8VSUq1vknWo2Im%2FBmZkbrSdYZTK7D1ub7xJCNF1Ng1BEMZdxRVyjo6X6gQHoKhBhNSnbGJAEeBUT9uy%2Bepjx7hod2A57ELvMBStbatbm0NNYlPsqdwa96TzzBxJrbSDy%2FhXJV3CdcnE36hPkaL2clcF3nn24pFk9Msnwe8otXaqfCRxOjWJT3eOhNAn&X-Amz-Signature=587d426a905cbc632f8602e026a4f725d229210d5ccf88cb99bf81d3ce440d79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365QEEQY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLM6LhAOn%2FljV00GNclPp98%2F61nNC1FZ77shxX%2BzmBPgIgR6AwcNSXwxQuLIOlEZu2010WNPqziQQJKH1hFf%2FnNvgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiFx20MPps9BeXNuSrcAwk6O8TryRk28Rm3jOPrlcfhluMboycs4WIU4MrYim%2F9ftTImp%2FHBJpVY%2BS282VvTpeFpQdITuNJDFCoIvs5FZQx%2B%2FWuQziBTaJf8nNroRg8Iu9wi5URgq%2FMFNVNMae3pVAqbxPHsKWBFllm77PLn9ZrTmcxffAHbft2dMqIfoE0q6q7TOl%2BFfx3t5xS%2FsLPOR0J%2F5rbDUMaeMnsXcxsM1QY8895QfFNrSwH4R1LXnzj0AyFD4N5KTu8dQ93aLE%2BnsyPRXdijSgSM5HWJftuMaqvMoHhwYwuXtq%2FZ6%2F%2F3QH1YUH%2BXy4vg2EObkAGd%2FGjke1okVbVIfkwZcB%2F4qDBjdAlXPHLiOoh2xbg0%2Byik9VZFHYWiJwm3UlLkar8TxJbvas3z4gMEkIhc4KoX6lCsJ0T13EG9YTlabUWn2R%2BXRCimevvsVmxtXjiGZ2Q8rq8gwOI6xE3qMG%2BNeFOBMpPKpd6TRlJVEKA72wi7yt0ycSHTSWc6kFyC9PVT6TF%2B0oVRWqIf1ME1taUyj9uh22KX1eHC%2BZXvJh11wgs0lYCJoJhZGGPmuTmlW71xVNawTm4%2FPEKa97hhHkY0YMlDqIhiKy6%2BA%2Bttg8RT1wnH1Tihhbh7s1%2Fhits5xk29ZITMKD%2Bhb8GOqUBXApi5rcC113leNVvay8tDsGIZKXkFc9NVoXq7CmTniA3kfkqTxdK8dy6JsZkuJWjhQLMK%2BAeEk9CDW7albB68jAU1PI4yEmgpwCzqsnv47G0pdc3fF2gnjeKahXO4UW0lmg1GIhCchfxQMMY%2FFe2bJEoUwAJQ1js2ey8doaWgN8O31gKf%2BTkTd2VZz0XinBtzLZKknkiEOLr74ncFm91uokrovkq&X-Amz-Signature=71cd9e08d423a070439d4aa2ce944379161489778ac5a7e77f27458620aaa49c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
