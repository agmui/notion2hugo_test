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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3URNBEJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCYpiI8sIl6j6X36aMnqoxxNQIZRSmy1W3BAY6h%2FkNWtwIgYBrYgpqaKoW3T%2F6LQMOs%2BNDIqtEQV57Mj21NHCmot%2BEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOC7AZQEecuBAegIcyrcA7vUXwytYUpHc4jKokbLnvMhPi9sWX4jr8t6CjFPPUPbhECFf1FIXGBOvR3z4r9DmvyJUi4wDW%2FGGtRX1GPpQfuzLwmEu1Vr6K69sJLGioN%2BCaX9QU2mn%2FdCw03E%2F8IhBpOVDPdCGWeIDYURCYiZqnVY%2FGwZ5qYjqJ%2BZmKbhF%2BPlOVX521hocM5er%2BDgaYHHEQr81tWwR0OU6f5uyfnWOxlI9N0zMomh3rPsNydibvnPsOxHQcx86K9g9X1W1fh3Aj8gNmIEVo2MZ1cmxpdkgV6x5dITbrV9qbIH6etQ%2FvCCg%2Bi1L0AD%2F3BKM0rtEHYa0FCmarN%2BnJFL9o6yHt3sZQ%2Fq9Mjy5k2uOdkcxvbNK%2FU1FsbyEq%2Bwc1ndlsQ8dwPWxTYiNFVZUTAkeeVIOGy5%2FHMj0hHrCr0jE93xy%2F%2BJkmrtvzK8macKSRezLCHqYEumQGIlCZ107kl9QA9Afadc%2FziaK3B5t3fs5g62VCGhnCf6wi8wfId%2BZ%2FNm7hL4vzg1NamUZvOQ8AXiBaMORwWTP8FwuJ%2FmQeJkpjP4k1nEZWbVWIQGPx3u3fialTisklNhixtbL%2BERgA5cDgz%2BdWWBLxgR77X%2BbPKlgi30ZDnPjRwURH1lwf0VdSv18y65MPukyb0GOqUB%2FRiC2A%2F%2FjRGbFRV8Ds8e2eVlhkkfTpOy9I2tArw%2FCI567D1tfpY0Y8R1Sb89%2FzgPE26jhbNAhj0Wr8ICGELlDvk%2BUZM8mSKrZ0ZVf8%2FQ6P2%2Fc4nkr7QcmQM24RrPON79dxsxhtqPJtQpGztlLL8uPOf8swvoatyr5cj0vgwz0UG%2BmZeROfg5vni%2FxK0egyutquvcn0Yx%2BXbwq4dOyAKkghfj6V1B&X-Amz-Signature=532630099b58f3064b873cf7862b21bd6f5c80d8eb66dd39ca5fc8b550e97b00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZUBF53%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDT9T6%2ByDU5i1IsfgucdRZiLeaLy6ok9EO48PwBEwRaDAIhAJaM7FF4UJe9n72dKQnehjyLm7IlPKQVXbmJfBokXcd1Kv8DCGYQABoMNjM3NDIzMTgzODA1Igz0xCmen66IDdTG%2FSkq3AOO10Oixy459lQ5i2jf6T02uFHOvGhvhbVZCUAXVE9zsnRSRW4p9%2Fgo6qhKxj4cXNQJoow2NQ%2BiexMxLLaylRZxeYnWUE9sm4%2FbIOX1aw1u%2BEwJPNlceI2KPlOlpbmLaNLvg9eLvcau71yH8JA93y9GZ2oRZNV60Gk5LeailKGrwTjTDU6GO2qBDn5gLRIaaZF1KCiQquGRKbBOHEkU7nMquAw9hwvuWyTDMuADgyhbmX4skfZEp1Z2%2BQ0ZQuCsW8CBW7RAp1ou8fzLsPWocnde1xgUqiK9OdGMM34IiuPU%2F1ZONF91cxnfLnmmqDIZ%2BJybL0HG1xCfwWRJ2i%2Bkff%2BBDh%2BhHy%2Fn%2FUe1Iy2%2Bz%2FsMkPGKoLYrxp5U7TixkZH314%2B7CDten5P7c%2FZDiAy5JWIn3%2BCGtXrewqaK%2Fn57E0mhR9Vv5gNNWKdvobHHFOou%2FQKvqka%2BO%2BcvnxMa6itkflEOsMyV5Z6eJIHqrQe89ewuRCRkopq%2FDATC%2FcOxlbM%2FgebA1AloJMssNaNufdq%2FYvFbGk%2FJOgEa3%2FlF61k%2FM2%2BYkh675DNLWKwPtDyENCOqOxTegmiy7L4JG0qyPySi0pSld%2Bb7SFAM3KpvCMz1DH%2BZRnHwCxSC8G%2BsSKQWRjCBpcm9BjqkAXnz4YBat1%2BpcusFGrgoIUaRO6hLeKWz0yYsyR9tWYAc9OaNGsUJQarI5fvcOyL2Bag1Y9PzdqmetiCuDCb5VZmKY5TR3NTqkV1fxH9bKaoR66oaZSBKYDYOSnTeZj2h0V12zwT5ZsuMvcaQ%2BC%2FYyMt%2BhaOk838I9bmjgPEN%2BpZOZ47C8XoCFFW6pRLHLkb4eZU3Pnwmp2NPD29q5mD%2FopQw4yki&X-Amz-Signature=827e6cbbedbac2e011a0d90539825f4c43dd8ed8279069a8476fbf73469a6b87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
