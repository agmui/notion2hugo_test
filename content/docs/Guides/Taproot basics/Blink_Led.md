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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY735UUQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClcA%2BY4eTMv8KfqfBPNg370xTQMDV9ZEB%2BZgNYl647ygIgLSEp2OgHYVcR20otkiE7sBWfV00qH8QOv%2BMAHL6%2FExIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN91DV2JI4KSBZakAircA2MGX6UtewvKrfefasWGYw2dCnd2AlUC%2B21bQDOKqs%2BkUAd74epbggMaOPqv%2FRcDRBNI1nP6MtfJfAkSeMEessj9s3yXNsX5k%2BH447F%2FsK2dmVm9PxpnxDihf3Ss%2BrH684f4BVyNwNCGuNZww8A4VkdhmSpltbVCEEDEsORc2AWim6erMG9CESK1YEIE%2BifNwdyfzizN%2BmCFTXBfnJ6rujYksoMqncBRwcuLeBnfGSY5k2FHCJfvlLCs2szqJMNQnEFWzpxsMeT%2F6EDcuNcHmj2ho5eZSV%2FsMLE7GJ5zbx9cwislEHSONU32KmJyoXzpRp%2BT5hjxxoJLgnHcMcp6MHd87UW%2FjBzu10CGQXCDoGFAQGRVsi7EdF45hsFkOn%2BMgYs%2FmBK7fZz5EXeSSp2m%2BPfWIJ0Jj8repUtXP23hzB8fsNACUnra5JFfZVmW8k8FcBlflZ4UQU0ayet6NrdiGFlvHXt%2Bp5Gf9w6KXj8fUkHMbVmkDKRI%2FcJKPnNzkq3zXmgeEhkLXoJ%2Bphdkx5fOycy6ytMGCA7JDi2d7%2BdefdHXU5kxo%2FdWg%2Brw4bbcI41jvwn4DJhgU%2FCXEgbKg%2FAwckHRWeGGAQqsHuzuDBmijZHYKTdjKKw4PuwTeZs6MOSylsIGOqUB315dE32PLhoql2P6ajIu36HGVVE3HCd%2FgX2zsRA7sJPYEM34qHN%2FAPmoZFNo0FR5Ld%2F0O6ajy9S0aa%2Fa1Vcyb%2FLWgdxAPJEQCC1khnT7L922kdR9hlhRle63USryvC7gQQ0biC%2FLLKsq5oy6dv65HW%2FC7HiK6HNpKg1%2F7cxFQFxa%2FzCSLxXS4YzYTL87l%2BGAW7WCBHxXS53ZIxFqXOkCXAKLXDFi&X-Amz-Signature=bed14bcc03df83cf93f5e7262ee42f6c7d8e27311aac12a9a0deec85386369d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZENXKWPJ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9qinIkCRe17z%2FgXd1ehASD3NkL%2BR1RgcrK54x9gKHxAIhAP%2BO6Wyktedaczcgl8q5eV8aUf2tmFCrkUUiqfc5Z1CzKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqZ6FPCXk8dTBnrp0q3ANfoZMviJo81CCw0CQWa1GY43MsmJQ3Z59WrlLzMGHEW6ApOh9%2B49d8UneYXkqkrOWAt93IL%2BXLyXoU9ttGCD%2FRj6XvybEVh12tXyzf%2BMcBqWzMQn6hWixlI0PA9LvQ31FqPL3VLnGymT9FcksSoAc1QlEOFrgpByrJ%2BElu4MYjTJ83F3wTimEmxejRr%2Fc%2Bvxfr7ojYRiukSprW2F0wHSFZcUHyeBXsrJ%2BRG%2Fick7Ba9TtfRiodrWHHYnkd4l%2B7nRlRj89AHLB5ujLmYUpZRiHYsPY0b3PI4wSugUUWNdCR%2FuARz%2FYP5AEgKl2qsNoumIlaeZkPmMIfRSmiaeILUSMeR4xQDa2HnAvsAj4HruV68SN3Kush%2F4NhWexxpnZAsPrSSE12tLIR5qXem57uLHnQNK0C8kZqOFCiDkuovZpE2U94auTfSjuQ8tlcd085lmf%2FEGIVgnVFn1nTb24yNw5a9ZsODDZIIsLbIKF%2FZu6LcRYrnuyc8X8dywsvaIa8txPox3C%2FyNaWUvywEvd5WXtemfL4iyUaJGHQPFNTlRZlu7XUhPXKVoCTOa1n%2BAG8MmsJO%2F9XDflaW46v1JrKelnnitRzZtSocccTeDSDz%2FVQd%2FSNbpoXIww1X2%2B3%2BDDGs5bCBjqkAUBB8X6PwmPw2%2BdaImJ3zwlKzFGerqVBwKIe%2BB5%2FGHY67TOaPrdCo2kJKy3OXwg1xeu8cNyo%2BXvcTDK%2BqgbPnToxz7Omnloq6ZL%2F4L3zQT94nN3QUO1gWXPK3JYlJwxtoTa65mYXvp3LtwB0bKoYMwmfkhwY9TXeWp7Q%2FIJkaSB%2BIpqH1NXGvkoXB0cZjLdRuxqBgzftAi0jvHZWa5byY%2FHdBw02&X-Amz-Signature=67be6cfc8fa5a0293c221e44a82db343e6dccc61d987cb8462a3f288d191f801&X-Amz-SignedHeaders=host&x-id=GetObject)

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
