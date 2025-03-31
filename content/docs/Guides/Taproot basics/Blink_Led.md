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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGV4VQM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHBMnTaqJQtzSVJDJ8xNMMkGnhBRq%2BenTIN8TA5ybVrIAiA5q1po7Zcvba80OiBJyTJ2RaMdPhjb2AlszgxqD48ogCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYi7ofJqOXOLeEAaKtwDV8puk7ERS4FNrj4dbyAxZYSXJDYraKtJOkX2173AgAJF5FwiYohpYBOGzdSIv1EuiaijNXt6%2FwDVqazPliH5UEvFpROrvlQ2amLf8hATzzILVeNKCjqY7yDLC2B5XK8s5xoGbNOhw7JvchFASQZE3W2f88s8kzzFEbHwV7d50O0yg7E%2FnS2388heSCvf%2FH%2BbBoLtWdQm3VHZAWNHIpNJwsGBs3pEV5Ctz6HboWwAYuihUIyqzylLux4IXHIBsSie89UZuOIcwH17i2T8f06Jz0ZTOTAH4PQ484kUq1WTdYS50awtL0CyWPZxP5WAUeIsZ0D9Gg5OlFmZBYzi5gN364JD3CLOy5Oe1%2B%2B3%2FLf3MlrT%2FVzbp5TNsgbwZ%2F4P4LfCoxFhtwe1Q2DRXiRChp3hHQgD7NH3sfbLFSOqPB98E3UUv%2BBqEbMtpBkKDO4rT02Zohne0MiUBUBL05C4PLgt6h425I2dvtjmU02qerxeaNzkyfH%2FJ5SDkMizIX7BjUIKoPjaG96vvIDQ0yOoh14uWqZFzOstno3G1nvxutCCjltJum3iityOBS4ViUZRmc7REGVW9rB8DTG1b13cxTIA%2BfD%2BRs5g%2Fqxe8yo2hL0QqJRpeJVvmur6TVxVt9MwlMqovwY6pgHph%2FT8SJ6%2B9ULw%2FTlMyBdhkNrjDbVu72sL798QlRsKUCWTWj9T8fJRFBCB%2FC0k2GtdXZR1F0zg0sZ1xY%2BhWfacxcFcJQ2E%2BdPOhp1e9Mb6dWtAetq6ljdm8I%2FQLO37LeTmLWHlSO01YhkADTkDwLhVKc0f9KwQExPWBECEFpyAOaWl7gU8VvGDmAWdrPaTX6Lk1HVQioFqT5iRilfeaqjCQulXvceb&X-Amz-Signature=108d48ede7945e195a020ecc30aa3f6dc3e57de5c3c302315db1f339d23433b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNHUEGU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHmwa%2FGXqim%2Fq82TAq4soKntDzxKLkuGH2eX2e62US%2BMAiEA6DioqFrQ822XSgzCX4LUvbjhqniheFc5J%2FTAFk1kLSgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fv2TPXMtj9Dms2iyrcAwHayudNZ1lN8UYs%2BBnS%2B8Rnu2%2BxQkMBRUvDVPv7RzMDp3FfVOc9GMha7BXj4vS7AsHa%2BvM3dn6eXXBMwcFrwXCKsH2CCRkkEOda5A3e3adBenzrbci78QiDa%2Bd5yGqU5TehigX5N6aY14Yp7rTxJTZsJAk2gNxmSd6%2F5TnQ7XgxK6ZzwW4V2MJAoCUB2iCbdNXCpSmk0vABjgFcbL7sW0CSfD5CMXSuupVG5fOr0jsHde6dGczIaUV%2BlMs%2FLfYkPx0Hmm6npSj5nQuDwQCA5lOn8w6s3hqKu02W1Cij65wtIgeFJmxeJtI6ye1UN%2Bn9h4y0uxn64Bmu1KFw39p3uy4jOqJIPTpCttSPGRiiRiQfD29%2BIKc%2FjWZ8XmA7Mx25T5FBxgGBNBTQRvy3OQUkWP1Rja8A7J4rpyIdqqh1%2Ba%2FTGeKyTqCPTkdgHcy8ZL1go8JQ5X6DGOvunv%2BRb8G2v5sMtVD4TfWbHfcw2%2Fp5qeQP0xgu6svyvcOeJwJaWVLDcq0G45zssXWkwIUE9pphvTApLBRYD%2BgkKxKiDb7hcTcZzukVi2Khr8XbHAk1bLPrCmdX%2FlNXdSiK6zzzCQ5XCAmBt4Ql751bk%2BRUdDilcfgVxKiFIOm4CeCO2G%2B%2BMJzKqL8GOqUBTKG0Arj0S48BMJFcoKy%2Bicmdrg2fWwZTqKtmoA8qTpe9YnYvuDudN0e1M3oPnSp5uWxSI7INTOlI4Dw6Qdl9C%2BvNNJ9Jn%2F%2FVaJkQeqzHi8mUyqxszEnMmTKcgQ9Ck7GjStBiHN0zD5%2FX3bw2XwkmsfsQ8reORcjsH0CFiVyar8aW%2FzOKoGjTlkKbhhznoHXVNsMhUSUP68YcFSaExJ9CP8Xuh4SQ&X-Amz-Signature=6340e0151fcd3969b2ffc0813b49e6693967601d73a7af5e7e2b65288209f529&X-Amz-SignedHeaders=host&x-id=GetObject)

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
