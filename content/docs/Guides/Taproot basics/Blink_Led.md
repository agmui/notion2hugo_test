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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZZWIN7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWsXk%2FQlDNin0wj9wbCfGH4cijc5e2aaqJkiYkqWEjOAIgdzgU0TLquLJz21JylGakDX7mPbS5b3MQ17g45nnALvgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGX20QWMrzqJBFX8tircAx1FIC9kuDut3S2AmQwWbGNUgGFm58oFQ86wKSorJZWQz3ATjL6RcsuM490B3YZOkhP%2Bj2qx632WOI5szoOx1JeIeYpib81oCvHAmesIsajomL1lNR1sdsfQR1%2FCMW9RmNJsSSKMhkADnAv%2FvpdkCjqjLfH%2B9VuxWGyW8OoSeQF0xgFJhk4sPAuSz9%2FYEQfGSG%2FfVPQ3P5FvRiqB%2BFDJo8spxsKjuBJL0hkkZtK%2BIBl7VVYLLQizmRnsVzMEVr8L0c5G5U1ZdkDAkrE6Zkv2N5AFiMbtqqLAmagM%2FtlpeH1DfXHE5ZzQfBH%2FvmOTsts5X6yHDLMFGqRHt9TDHNBONkZ35q7Oa%2FnUxEcDsRupU8t%2BsMLc8y0ITPtDGCUmcwanwuFnq5D5kQDGxBmE6UPI89ScfZmlsa50dRyBZoLaOSGSeeftdee1A0AXpShmpBF%2BYTVX6QVe7NgiHyTZG6rdd4lr6lBIoIL%2BmcLx2gHyepr1VzSncnksFtsx0uaXWUvWOx5DkNE7Aq5T6MbeuweCDRZixoMk2Z0GeuQhxbmMUa07UQVPId8KkCIUMWvPJqrnv0A1c%2BSMcFpgOm%2F0oa%2FH2kHqTObHF%2BdxHiAbsTd2L%2BaxZeybI2O%2BVbl8%2BCOEMOqwisAGOqUB5Cn%2BQPAtx0rtg%2ByB0e%2FnWJh%2F9DHpWQK1Qd9FAHn3OcoV8XWUmCTRLpoZTSD2v5RUJAlcXuQu9KozZOrdhZ1ZDnsbIFpFdX9pJh1x4MAyilfRcxpVH8aWv7rjFocdxQLUbzqeaeVAH2Tev6Jfh8d3zYasLud9tjOXyEsIcsqiKdEInB%2BRgYzI1i8Vay%2FI8IUZc6AOYYAHe9g%2BxD9a%2FRPeZNMFe8zI&X-Amz-Signature=16d3fa0263a723c54f3b83b4fd2978c4f06460a4329abf6172262c5490a76768&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F53E532%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnn6zFfOzNvNn0sVNZkCPh%2B3WEIiaoV4A75JCRFujadAiEA1DSH5okqQTBFvDeS0piOINpwjH2p7%2F1UL8zcrvlnZaQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOUVLr4h09mg3wDBaircAySbD10e6smpgbNPKhao9%2BfEt7t7SmLJNQ%2F9rr0DZC7vYvSR%2BW%2Bw1LY2NNqyCAZpv8y4SR3h%2FPGYyEHdG8RcDIYdZYGeOaKWcQD12Qt8RoSREu7NCltd7ydhW2cYByISp07ewVwUqTEzLZRCkSzgFNzxdeO92PMf1bf57PHJ7mVbJaYSleTFZFPi%2FkAW3244Fg0YAtq7t0c4%2BqEtho%2BJbrWpdGKyBVvT0tna4cMVL3M8nhNXFhtFWZ1zfgeji%2BETIYBCh7aQgYTw152%2Fp%2Bj9gBOT%2FVWSBn50Yst3epMS2NPD2EeL5vtZg2cIWX5yxCA5T8yzM8ceuM%2B6HTd%2FnD2G1YG4IAX1MRffdVCArtN93CmsZ75uA%2F%2BxCPqJvKJ%2Bi4qum8lhPoOk%2BXPBt4bwdSxcR1EhGVGB8aV8SrCndcp0QZRvDtqtLS83VLZo38HuOadLbWjR8kC03Ct2FXMeHLq77FOI65lUCVgBzuHQ0tPo%2BMzHuLlqQ7ZJ4qdmjbAMrFE2wYKb5IroGTN9j0RpYlfgl82oTmL1hN1kzAXwLREEKsDJcFNWvDKG385MhM08oqYz6xI6JWaHjVDXithmwD3xcART2HnP6HsxnRqOUHlza%2Bsiq0%2F5AYAIVyf1I2FvMJOwisAGOqUBB2Un5%2F9flKbBcdNWQ0Vi81YHouQ6mAjRjz0vH7t6ln%2B%2FBeHA7fXOmfYoc0z%2BYiMutjoh0z8nO352tTiTQbmJ7KD4jzkDW453A76d7cReLiIglMIujjEOO5jhAijzZrt9UvvDGC4byN1odShApCWaq%2BrKHmqLpVRRbjaoS6yRYPB%2FQ1yAO8ZZvIh32vV2eSh%2Ff1%2BbumkcdnvSvrkcgtqVkeKgVYBf&X-Amz-Signature=e8ab20f3dea496b254897660da95712a9b87235f12fc854ab82447df18b2e18b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
