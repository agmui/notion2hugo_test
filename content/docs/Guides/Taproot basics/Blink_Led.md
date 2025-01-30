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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCPOFCF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKl%2F7ZFftl7Au13Nqsh%2BS0CVLAQX0MQR5nXf14J1IGsAIhAPy%2F3QIhtwgNaSUuHWpH3As9AP2s2SuopVAsG50ob1WvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgT9oXq6H5wk2rfmYq3AO%2BtUe%2Fwn%2BsK33XCr6iHW%2FEE5TGTa5nnvswimzGueDC4XsDpiYKVychxzQ2WtcosdmT3WRsAZujHaQyfsSwt8mtO8TAHoALfKpspkBRMEEtR3LFn%2FggVeVOeTYMZlIAUOdROMwpDN1oMtJlqOY%2BMTy3L8LbVhrHVKrhho3BsPCrCZwAmNvXgcmI0RiU9ed0heBFRJEYuufiq05rxQ6dDw9xuA6k5cQ1T%2B%2B%2BM4A4keyvqeD1DYoxui9Wnlt25DAejRseSPeFb8vHzJ8ykcF5CJ0sfAM5dZJlz5sDTGm%2FTj8PQ7nHiCYWB7b7cDpfJPVZE8S4yTGpVu%2FLGE%2B9afkT5vbvy2L0s6fMS04%2BMaoCpr0enPwcQIvBhohlnybnLfzcuhwR5VYHjAyC5YBfYFnEkAre0B5eNM8l5dWyUisIY1H27LJ8I0tm5L7b%2F65KFCktmdAC%2Bj3cMPbaQHGu8jMDmF1ji4jMMuSjBTDv3Trj5s7d5%2Bx%2BH9024yoCPdyUovJTMhxe7T6bsU8iPly1%2BmJxTIVN2NGvyCv96bCqq70Sr1TRd2TD6WGTKlSZjVDQ3SuM%2FpmhMvCSIyuW4Md%2FiToD8i3k%2Byhn0%2FLVSwIt4k%2B18GWPM4eMGm0lMP0fUIhqcDDls%2Bu8BjqkARig2hJXPeGIwSpCGSvb2ua6b4AyjinPGuaEww9XDC8vDJCk6i%2BVvZA4mMAeUyCACS6soczGyBGK%2Bj6Rky2CdPBczuZqqXzHeYFbAb1Cya0%2FhU9AFGML4YFjHgCdDCh47ehds6rOWVI%2Fpb2CuwqosnkqZ9ElIO79Z920HeaI0iGSo6n1S8E4QxRyvsZW1XLT4swYznUKfIDosmzk42TuMcxdmCwe&X-Amz-Signature=d99f992b04c29bc5e4b616c7dcfa4c66add9349e86b159d331dd6d7a5c508546&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNKG5XA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1nc%2BtR9ZPjugrCrJReFPyYHugzYfLeh7gol%2F11NL8ZQIhAOGSwnF1KkStPXCHIx38W90zD3YMmqTxCC%2Be%2FrBflMdhKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfXS85HhdrCuRcyWYq3AMZfqL8qcvBNU3JZHJ07cKkcg3hXAsgoi%2FKydFPbGhRhvwgNYU2pwasf0grfw%2FKkeFBW9rrpXFWu7%2FNr43vlR9cFne7tDbGiOqGY7EQTjT%2F%2FsrTujR6ocv1CWqkLc%2FkVYU6nODlXa65bXarlFuJ0VoTWQ0%2BJ5RivZQ605CJ6raoxjeUfetJu32R4OPLF5a28llQ559IqJZnp4YDLCjL6sJMwAvXZt9DtpDLqLLwHOtxDqete7fPiitpMpmLn2Qxf2HdF5e%2BSkEVFdnTqt0XHkpY29iF2hAObCX5%2FOu57yg2jgLJeERcrf%2Bt6ehyaIq3dgxRKPb8eSkvbr28mLwTmuflbox39AXZo03sPQ3A%2BKIJeEOv9Me8x5hTRpDsw0oSfIQNYvK069LQLrH06bh9X0HSnr%2BBI24%2FkVaJoa0f76vTyBp8WEUfG14cSoGjuLwFQUOKq4F3glt6%2Bi5G91TwyFUEHqfCv0%2BlcQ7MzsdaXyHYbV3oKTz9YDDELq9u0eXat2eXtrGk6U38Z1Y3QqJza5ePx2WJVsjOFb8puHdTkBY2CmYA0HdSmIA332yiz%2Baq%2F9kE4JXDiatA9LmW0VeS7yik5AEmikeX5rLBfwAXhjmXquR37wVe1XyQ1wrMIjC%2FtOu8BjqkAVZ%2BNqWd1RKDvQsfBCwoLC22nUv%2BLHvuv%2BOwonDcXu1nbSK4eBIV4v1bX1uzvLYe%2FELDwYQTrAWx9RNpES2FlA6zoeKCJ1bSvDKWj72EPy35ic5BWk2F%2BWnvLYQ3IGs9auYWAYtzfc4m4PwDYMGq8ny8k0SWlRGegjnQWCcych007Tnq%2FDP2lFBQnBz109aOLs13VijghYFpAb4d40eeuSE4f0ON&X-Amz-Signature=eb9e613ebfe675405e9fb3d54c6b56b5e61ed6ec9af863c9852eb18ecc5ca580&X-Amz-SignedHeaders=host&x-id=GetObject)

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
