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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MYBZJZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIF8y9DKcK8%2F4T%2B2R1XARoCePjfU9I8XQHLmZKsCvu116Ah8CWEKsqyT7U9LT3OgfZ7xo5lR9oZeMgp9RZcWZdB%2B6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfTS3kwrzypO%2FoDFQq3ANrvsPhWVWYFMFmM%2Bx9I5sb0ckEpAnx4J69rlh8YwsB2uNMuhxSS0ra3kmpXzEnu6F7X5rm25LFJGPL4wBarwerjNbOec3Ut9q6rH%2B2ZJ4Yubv%2BOn0GX2PlGPTr5t7lHZh5aDVgOjuFiqaGMWPyLgU5MK2QbbsFaCJsUHDhsF0TEuZJ5XJ%2F%2BXtbB1uiwVsAKmcye5iXQEUl1W67kVhyKoFEoAzYZjfdxpKfAfhCW2Cec%2F5YkGbyKx5Sih1nYbQSIeJEjTbbKNdfqH%2BBMx9iIwl7mRoBykNAQubXRsgZlDh2SplfLfCCog%2Bl0szzXigboLjsMEgBFkqD%2FtYPyRjIr9MXiUNDsfCxHIUOyO%2BWzr8JSrBeFVWO7rO4mZycfb%2FUOw9RrfoGkh9%2BZo3iMhVVcv%2FZIFEFqr0220G4uDfuQAOTQBbumJ0YDY%2Fvlf7cgKsPkGO15nJ5GyRJ%2F6PI0ye2gY64A6saHJ%2B2PsPVxWoLE%2Fl44NMMhad1ksaRtYh%2FcFqTIbrKopnmG6BkJY2stfphmFT8e5bePuEnuy17nV0nprWC9GrAwdn0Agm2cE9HZmHCDfbzzNinO0Z1NYIxJEvV68UzngKObRroIruwwZHCSYO1rU2Y1w1FbytRXYUhSzCanvnDBjqnAZNr8q%2BfR%2BJd6gCOG1%2By55qwg%2F2NkA1iMzp%2BqVR%2BDYoXdSF7GL%2BoHI5tpiBFVSh1YW6Bf6CSbDnOBRY8%2FKTOjh1QBFRsIbN0IKek%2BIX3CiHN7t3CNJPGgkt29D7GaCMkaERxsrEi%2FNnudcovVx1jAMpCYrTeHkvxevAhOPbnt4no0T8cSxWZojPYfoR3aDhVuBnDAdTSfsKDTZpPEVYdd5TPSE6SGm8Q&X-Amz-Signature=2d4cad10c3e425a27b3938893f08f5b58e76a89b099c9d71b08ec0fe2907a5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTC6HZX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWqH%2BBxj9qCwoJg%2FU3Fygd8RVbmLk%2FXdEnazoWqs4V4gIgIpDs7UluqZ9%2B%2FgHtXyYWcRwzBzn8qN7FjwXgvSXeaj8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZcDxYkOPLm1VflKCrcA8ctp%2BXOaj0anBsZgszvdguMZ6L1QAu%2BH8XsZn0S9Ss%2BPigyd9xDunYTUq%2Fvg%2BbC11%2FHe3eCubnkGXYp2nuF2fBwixNrALrdeR9S%2FWmAB0S%2BRvEKvcNa4AFzMc3uyKQOYbmdfhtXF5RnFLkNwVtyX7fzXpMOYtKQ7EONozbGVbxrQsDbkEc8aYVD0vlShqOOfK7r%2BNoM64LTAffuaK5qNQTsU6IkcPpzZRwlWMXWCOO4ZeqnhgIfEzw1C1kaLxFjQHXIE%2FirMGvD6abjHF3WEc3Hz7UXZrkv0J3gWkRevCyn7MmWy%2F6u%2F%2BYrNmedravDmDcTpnGWwO1ITtorLR4gU5%2BYzP7MTLe9e1rMsTOELwx3WRUArFr6v4nPWrEfK%2BlE%2FbzPuybfG5zKpDTvJId0CfjFmAGQY%2F3KblLraZl5K%2Fa4kXPbIFdQaDvyQEdydzEGJ4nMsRF1flU1WGor3DL2dJWn1M%2BD9T9CPa%2B6qCEeFwC6DsZ71EshmZYIzpM4OQ4BZTy4%2BNIpz5gQye9YiMfojIB%2Fc9AwOLBkvykt4CkUb5bFn0w4EQddqTl4BrELAapn3%2B3azg%2Br7KEc7pNHveYTlktKLHC3Mbae5AMcIZAQNjLzE4BDNgofgW3ean%2BZMNOe%2BcMGOqUBAIUyu3p8Nv3dpwFt78ntzPiStXAXQdtOwgEgPVS1wDt76fwqS9GatxwOMlMuEiEteTE3OVpSmlANE%2BQw4DAFQC4%2Fto3B6QAUbqtI6eNlUH7murdUvCSi9rkZwJo8hsRM33Qv0unTK7Xj%2BtCajXLp8AEFBlaMaevZfWG85RILyXrLiW5mxj5Kv8H5A5fDWs%2BV99Ltq%2FpvcfX7USegSFoIiDBsuwIb&X-Amz-Signature=33ce8f5708c78bef7c37d1c97c4871120b42df6fe1887a7f4b907745c1b9e977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
