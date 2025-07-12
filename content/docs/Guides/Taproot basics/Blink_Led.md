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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVI3DAX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvt%2BTgI3bBDYJbICvd%2Bz2ryIp16DP20RN8j%2BOdhRfPCwIgXkaoJ%2Bzzt%2Bvm4CI3boJ4u8%2BIe2c3CYGu9gXG26yJO6QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMauNRGO5vZ5imN5eCrcAwwLkzVgUkKb24iARGb9ygj0QzsZ%2Fde4rah%2BdbRFdvjJ4yT0gGdrw43lrzIFwcHcpawsxomjs7M%2F5rCpHVzotdAVAjipQAfNL6Ts5jDO8IFANG44p%2FCthOCfFPB5MyjYZTypAjhfOWWzrmOJl%2FNtMV5FCyveBcTFZzCqDirFUUU44JAWGrNwWfnR9OkkHGSm08M9FJNhhsrxjHttcfz8jzyG10z0ZHj7ok5hbOprj%2FzizC2UDxOjW4t8oXKXcgTMa9AUsZmXNF2Ak0eMrcO%2BzHt8Sbjuqp4vlWFDk3CFzrJTX35s1A0HheUoEB5Cih6NJ1SMzsevfeFX98fNi3vTrIckttNUnGdkKdx7waffagjWjH7bniol2xd6mKkcrHCpZIkRiTSB0FlUQ%2B4GnspolDvHPhA%2FtKWYMtYkvKw71RDXjpbO70l7GC5D%2F4YOLLKSotXftZalGCIrcB3tns7tjLT3Sdqm7DW9PCx5QipRPDKVSl22XGZYvK2inoB8fY3WEBqET6RD7wH4dzYYhpFBiV6lro%2BwJSk%2FIYe95fCcndL85xO1MOaY6a9b4mot04VrR0s0d9eBuP3Tj8d0cw9dbOlFHzpqmbvcbGl1ZDkveF6yBUUeFBMLDiuJQ5c%2BMNz8yMMGOqUBpzbRICtupOfM0m%2B8tAAuL9zJdsjh9HI0BrJkY9nqV8XRmPCdJpD78rDGbbNreAmrsItTXCFkZlYlQPD%2Fz%2FXC6IVcXWixXJhBSgM8QdtpnmTO32e9lhuDMAAZsvaWVpdn9DEn5LtD4SR89zVF%2BslxhY%2B02Srjlz%2FplqDk0VLFFa%2BhE6gJMA4hKTISofrnqH5Z0499L%2FihP3qpmDGNeC2QB%2FSr5jM4&X-Amz-Signature=351f7c1cc7e691f0cd26eed9603774873efb0488bdaa37ab4349a14fa7a6cab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCOACAO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaq%2FqUQp%2BsMOqCa3zrUOmMZy2%2BZQErr%2BY16vzn8Kx0LAiEAokZkaxE%2BOm15IwtE3lEHEMbPocc%2FNoY%2BTWQ%2FdXsCptUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVsX%2FFg1GQNhmHimSrcA2jfDtKpfN7lCkEl1AwnDbg3eTTnLSmjOSw6lvWxxutJupX6ha0VuxwSDq9HVhKBAcDjno1grLQmH6FvbtDbHXMYt8acgTsAx8lVrAJOg%2FO7kvgFbunCIyUBXusgikXIzy9yLsF3X%2BdMOFGo%2BsmmeRImhmgR6KlXyQ72govgkvbsKb7tFwJmdqyL1ohtGQyJoMPLdziMPplwFJEWSnOIYaCAo73O%2F%2BBoFQ1KErDjsTWWQBN8toh%2FcVeA%2FUGsUXNDix5kAQmuPerklb%2FmBf2R4YBUql4RwcwldhqAZ0pVFZPpVMtNW%2FdHl2JN8W%2F2t8Kw4340eQTRjDUGzITj%2FE3ZY4KVL6JRsKO8dmEsJZOfEiuKLMagzBU32D7fVlxB3LjSTrMt2KR9MsbaYiwGGfGwsxZerCxr8WAcQ%2FXGFRcFTdBryla5W9L%2BFFUMSQD4EqqgnC65uh4K6T289qxx0efKs65sTuqaqc9WtUb5BaP5gbvi9FYc6J9DWoFWTgG0RE0DqEYVIQwycYq7I2KokEYhgoqBF8l4acY3QC5os717ljxpPWDCrO1IQzk1M%2BpawfaMHcBVsbLkw1AkhaTfwt4Gepj8f4ZsGzu8U%2BT3cKzv%2F4S2Y6j%2FmE%2FQhqBo4gnKMPP8yMMGOqUBpBinO1vq451ENQbD5Vv9g8RNcD0bqypF53l9xzJrb9YUvC1R%2B4ZiLHmjk1zo%2BkRPY8df8SHvrYCykAm6pr%2BxLybXagCJhlZ3P1VOIRUcAZs38WITdCvAnSPQA5o3PpiNRAZ%2Fz6WF9m%2BtlytMnVl%2B1CHgiJeKTtZFqkpxQAM2mIKEkf6hS1AbeNBqncNmGuw2Wy%2BsRDNPWcHDPLdJI7OSOHPPu2oz&X-Amz-Signature=6ba8e64994a58c0dc3138727482678aea052d2ce8ad7193335b1da656b055e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
