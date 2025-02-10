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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQB7CBF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa8oDIIq2TgQloYdFGBuOlYuuUiWhkmBaVjPhU%2B8fM5wIhALsXUHzK9wRTRMfZNQ%2FdCgZn%2FJ664ak%2FBJ8NmM4vyoRxKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlDhXReVDdZxyCSNYq3AOHiwga0y22slDq%2FRsY5%2B5otDflYm9VfCrts5wKKQos6DtYFJQlmp5iWqkZboKFkU7tfPX3ky8%2FrdeJiuhLYONAY89nQ%2FCWy6MSS5eZHODAfvNf1hffrQeq1Cf8OT0NVeMq74F%2FI%2FlbkhgbC7oKPN3dgoe1xw9SFlpr%2BjVu%2FmMOLpplux%2BZkN886XmcaO4WNSjl0XrubCQIUmxlp4EmbspX1MkkDcmKhFjgWvbcIJlRqj7KFna7mTMIi1o8ArxTUGrAw%2BbmREMM96xsXgJMw%2F7NO0ixZzVBEQYKWne7Fev6MXnTO2qgC1dSXqhHuLfrzld7ERyhLHpvjq5Dt1Yv5QfPITkQHvr7nKXupGZkhwRXQTgpFfzcubKTsSL8%2BP81jTIqlM4KxZ1G5%2BerY5OJB%2FAcwAdBZZLPgyel%2Fty2NGLdMNOL5PocHUqvFfb7CN%2BS0mByUhtvo8eb6TucTHoJvPrBYy0%2B%2BU%2B%2BMJdCBq4YgAKZA3bcEfVgLvpP8P3w76cCRwxRDOBZjLDS3tCy%2FdNSNW%2FazWhmJTvub%2BeVoQRq1VolzjILON3%2BNZ853EKlEefe%2FEC5224EdtVHFmiDQV%2BR%2BE8QqahgsQymL7WBTzCvlgsIFPK14GHR2zflVnqvrTDUnKW9BjqkAVs9fNVpMt5FbRs8Fujd5Yob4n9TGxuDG9r4Xxrq13ftFA4Z51ei50JIMofijRzhxH81mfS8ZHp%2FoqTd3QIrloPHMxGNQ21fuQhd2g2ssuzBnUON8OblRPcflz6rNbFlImmAQY%2BFCOLfBi3LWR3ZScw%2FW9aj%2BoSLrxFzrcwFvkYK78w5sdd89MOTnEQVi0qAq6yvqYEjssuD0Vjfsfnw80l%2BRgT5&X-Amz-Signature=3b7a783350e914f346343d43fc5051259dae1e1aef05867ccb40ce7b1cc0c5c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5FSKTLR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDk9zSs0NHolUU7Pk%2Btfi4BzVuWsnKQVHVcwjNNjSs7QAiEAngsg9YGdVwCf5N%2BON1IbCMoAPw4iyUD9%2B7F1xMxa8H0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4JKyMXzJt0L5hYFyrcA%2FO1HKo1Ra0VMIhLFY9MLRH54KhW8AABVQoKQgr5Rdcp4LM1dAMiPLmF67QTMU%2FBjCeHhHlw6x4gwnLaEcIHg5MjvQNRmU6JOM9PFB0J0qU4SV1XmICZ6Gw6sqnMqxsXy6DcfdGHf5gTOwq%2BllX9Rv%2BLSqH03ytaAJ0MqCW4Jz4g%2F%2BZ3F1IwKMIzLBiimiqDyr0sWPUQIAueWvp0cKTSxsof1tDtuAa3np6z0NVDpujWWg8iJARFmA0S7oVWZEf5ji9CwI1b%2B8ZlIC%2BmcC2iZeeVd5TVKiFcYgUQduERQNmC1yxWpuBCcZ1ft1h%2Bqv0GTOmsUC45XfXO8tMxqUEWWZAkzZsn6XUbkhe4AZMIeYyATvIsCqxEtUNGI6O9%2Bm3iomEl8GE5okoQX%2BKMOC4qyPSrdWt%2FesR2F3PaM4T7OvZq0%2FAXmXVDeWkGHzA%2FtDUVjrdoPR0jcogBg9vyr3uMmcH1FYFmnGkcn7FXKOlnphbf%2BILCHA2iFbIGYl9g%2Bh%2B5xokqGITqg11cDWb1dM%2BuZBLXN47gQ8xyy3cmvrJhCOODl8DXiRkY1w9%2F11XM8k63hq3MY3AJS4TXlTlO3%2FA5kZjokSGmeIMxDf%2B542fXNC7MYPtJ7BUUonwQZLDDMPybpb0GOqUBsHOCQDjqPD6IddwrzJf896xjspizdmTjYcXraMmmIgRaChlFvDyjI7jFaxyyFJ9jglKa2MdFAXvA1BZhO%2F68oEswTTa6FBtp63cjhoHpbhn%2B%2B%2Fn7D907U3HVtRNs2b%2FVAFY7t%2F7OPivSRvqpJ44Hxca3MlKhAEaV80Ostt67DhjJabAWnRSgnDOyZHs0vQEfbisADmpzRCHYI0s5xJ%2BUo44ZTjz2&X-Amz-Signature=ce08642bde1a4b07e7a93447c235b2d6cc2a783fbc90e93185a2958ac50f8ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
