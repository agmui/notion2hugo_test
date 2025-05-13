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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2J5UVB6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIB8YzXs8DskSuEUuU1nqspyDXCARJ0HpYSnMFxfZ0H98AiA%2B5aKQ4RhpdNKtWfE8oI9fgmn%2FGT5eIdkAYSMDRn4QOCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm6%2F8%2Fe3jZjYANGloKtwDwJs3BvwKgahhHHR%2Fd8Cl451CQ21OBPTfoTEhgGkfgL22gQgomB52JujnlnnlcVKYk1ehy6ab1OU3RIZl9m6UNtd7g7RZY%2BA2Qx7i1%2FUJDyxz7FoCPVj3oUOCTIER7exHojv5MFciCZ9CuTK28orfa0hPF2MRgBn5GTGxsDTSOUS6%2FohPHgw%2FJPYK3GUTSWCb%2B5I7%2FPyWcjbW%2B0H3QNhqjG%2BfjYfaM6plaGqoi00oSVCWIW%2FDyAHX60WJrJOZ%2Fccv9QZ5Qp9SNfodZqnfj06Qt37FC%2FPljGVRdHzB8AT9AD76C%2FybEUlW1xMksoUXtdiUShm5kl7d8yt9zEp0fFsUKy6Z80aZKlEPxaPK2aBdcIL4Hczw6TkOFJwHtuZEG9MHBKzCHll7h7Vqtm1YEoqsofI0VTYOrgnR5xKmcVA3A3XS5VjxgB5rQ6Pvpvom8oXcKJYdeXiCHeuhVQDNwkLyxd3WFO%2Bfm%2F11DJcylGOhw8c9gsb1YiENC1Ll8lD%2BRlcdH04unX%2BYYU%2BHaBw6UuuBLJhYmxBcDNk6MT0VT1J0g%2B%2BEsm12%2FnzKpnX%2B4onH%2FM3HRpb1PKTlzOcw3K9Aq1zcJQvD%2Bkd809K5PIJNAqq9CdKrJFP0NYY6mijDUswwiI2NwQY6pgE9095V6dcK6KKPdH6ZdZ%2BsQo1TnWELUq5XJm9hq%2B%2BwBef6AUIuBKI83lo8Rqk0%2FXeCp40eHPF%2BwdbgHfqWrOcT4GiCzVIy%2Bma9Z9f17gUqeunTHIfwJhZdWKVlJMJb%2FKeyemC9SB4CDagRWl0pGI4Xz2TWiiP4CGz5pB1tYLNE4ayXF0Te8TRhp0gAHx95%2F8RqUT%2B28vQtPhyyuhAxJY%2FU2p0Io%2FTp&X-Amz-Signature=6ff5671fe4725d49c0f877adb108bde8500b2cc934031a875b87747bd79d5063&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFI2AGU%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCZo%2FtSj3Eaodu07Hpi9f5coM1hFPhtwHzmI9DnLbd9%2BwIhAIhswYextRGFksVdkfueHIPaSw%2BNCtxr9sED%2BBY8kfkoKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzS1tbLX40JIvbeqkEq3AMgj1dsdKNZTux0dKt35MdVNOIP9Rq%2BMjvnelgv45YK2kQlv5Bsy%2BMQe3mYn5Bz5P%2F5Jyn572Z4lTnJGkZyAhhk17IesX02W%2BMzDmwCGQYy2i6Aj0%2FBfbw52ZVfn7xV%2FkfsnttQvQH62VPq1B37%2FO6Gn1lJHm0L4bcZfV7ZfxR2Z%2FSC9ROLMuQc13CcSKvUwslMKm1oGmz8g6QeqW%2BYgbhhBJp5y8%2BFxcPafrQ6l2ektFlSo%2FUCul%2BLR60TlA%2B8pV0%2BAwGDUcDQ7HbOU4v2nYYQc%2BSTBYLWPFMsx30vyGXg3w0Rpu8gSpWdJJ8Hddn5Ho8%2FfbOjdiHvGACuasyNFdQ4CAOGwKmUpLdaRdDMeLGAk8g7eQsSNCBBVuCYFuBMTQ%2FOsNt9BZ%2B1oPWCAJ%2FvURsHy4Bt9ssNe4g6GZC6FUQmEvPiA2M1hIHL%2Br6Ib4d5z4xHL2L92JJx1UtC%2Bh9dRBzjLx0FXHuGVOLWcKNwbglYu8TpS7r7uKfHkInS8tKZmLpmjBJJjiQ332FVaYZgIoPwIyVzwwcZJ6LY49MQMsQLvM50QSGkDfjPuxyIYrlkas1bJZgghBjiLiINFDKD61FtRNHKN%2FDXZlmas5FzIs74KNiTHHy2YZtjZ%2BDQ5DDCjY3BBjqkATgs5%2FFbQNtgX%2BLb7Zk9DufYIuO1WmyzDGgsieSiTRkNgXqqJ6wrNNRB7tlklcrSpUTBW49FPB%2FK1M5QaaLRVKeGlsk4VM9nBF0zG4o0NRSQKSFyOuxdIfOqvZAckRRLpA1Nj%2FszTKgXqlAEVlBerAylBZHdRr7Pv4hU8OSM0KIWI44Bj%2B9g%2FmV5%2B3By21rf5u5lp6udHhKs94QW%2B%2BqpQJ%2Bc9g6I&X-Amz-Signature=79e4c5ef5f8c951e968aec11c366e89227edc20b1ec1c6260274607c70b052f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
