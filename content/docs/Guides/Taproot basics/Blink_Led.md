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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT6NO56M%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1VV%2F%2BnL%2F829Kol4ondEiOssu1DnT8kiG%2B90deAf%2BbhQIhALBK4Ecm9Nx1Z%2Bp1zfxbm3zDN8nvTZEu5%2FiJp3HQD6HuKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7xpc%2ByEW3HO%2FOte8q3AMqNMsBKylWG0OiJla8rf4lIdZcSvJrqfvxby5Z8r4yjBe8RuoNVaqTiOooR%2FSIEWjrLvha4ucJdqSaFtuJ%2FZ7fY%2BCBTlPK29YVlauA%2BhywPaPXVD9Tqld%2B9NqKjc7UspwwRiF1pkcEnjFmKjT64CEacC51NjbAD3jYD2yk3D1UZF95Pbq%2Fd0a9Rorwuquuwk3TuXBnAjUvS7WBRo76V1gDFnyFhiy%2BuRvvJcGKnipa8F4iW7AsJRA1SNFPx57hXzabRdlslNah7%2FxtEoS5vBVK35VH3ytBE4gTDF0hFUZ14kAUv5qRrc4YZmWy%2BTjfkriAtfs%2F%2BGkzBX%2FTOLkKNJCyHTw9JrsgiN7ml5HxJn%2F0ru%2BfNvxNteLML8cK7ZlD3mbhztP7FTmj0nSpSVmilzr9rfwfrTPjmAdwdT8JCPqMw%2FXtxlpo%2FpoYT0nIgeUMW6kBWVI1cMDiMzIwAzxgmgLfaMXC2csKqsOmNUFgzl1DasoZ%2BHPftfxzJdEE5TbBTeLWtdIxj7KcMnClUPERzKq30vOvRlXrOS5h49rrXDg%2BmSgmxwqnOBnzRviC5a7y3DrwgOHTSMxvPcUFpx5f4rd0MABSe4erPqOKjQPvLQuugbbGmah5Idb0CnsTSjCtvfjABjqkATHage3HeMTf7LqGD%2BC5ttxRMpdaaw4Bg4x4Ebs4smv8OeG25L2q2BPGFQ4iE0FhNCXKdHOnCrzr20%2Faxib9owfhn6%2BkAjjnYG3HX5SAAGvjrnMR%2BMqxCmKbCy7%2FHDomSRZgeZyJKgBoCW5fy6BPbt%2FG7OSw7Km3UvN%2F%2FT9EUcpDApZxlvKnLESTW9EBVfHk1TrvpUOUR1cjbub53XrRgVSr4bSv&X-Amz-Signature=c7c9fe890f3299e34687b61df6bb20b9066574a8ad780c95c85aed27fc3737ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLXRP5J%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2FTmbp95FM9YlNanoa%2FO%2BPjtu7hGyNMEDMXwh5ggs6AIhAI7RkaqBveD7MNofeaTwH7R7kYa5TPBBA%2Bm1zvmBtkuUKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKIId42RLQDEIQj%2Fkq3AOznIcaYK%2FvK5%2BEGr1Cg7wOG%2Bng9zt5T%2FslGhsh0tBsXiiNP6vgkAH%2FTRUQ0%2BFgcrpKGo9fjm13kexE9Era1X9sLQHTphZG8yjgscHdcUKhR5bPdD0IC7rHpriYPqNn4aFMAO5ZhvdyuvkSui4qtl0YwD29eoVopRntQNwMipHAFVb7jUuKuCh9CkLtqi19gBsemI0GTCckfD3Yfiwcnw1y1wX5puXpG8MQKc%2BeXgpm2lwBF9LpTAJHbtWRTbwGxoByQ7%2Fp6o9JilnCg%2FjRDP9Nti75ZOtFEKUYx1cdLCvpj4kv%2FJD%2BIYu2Lpc%2F%2FFMntA6SqnzoqEpAzaPgBAG8BcivpCUXlxINfvPke0vMGc8R9gDL3MuyOp80HMtGGJJflzyzCiSWc70sc51sSRkmajmMC9VpILr8luyTJnYbbXx4cxu3Cw5mh0fV3%2BKvJG%2BKNJG3z13HTd8%2B8wBcpauI2vjrY1p3l9iJAdJPMorGvRljhnir7Gn4YsSuOb9EG14qotmgM2tgAu2qeLQW00YTUH98jos%2BJrtOzXPneU0SX9ledcDIv5%2B3FC88UIFG2wU90LyLbxH4Evu%2F8dW3JuSsLuiCUelB7%2FaMX3lE4ZALvz1p%2FTh49kvm8LoWJv71FTDfvfjABjqkATgQenajKj%2BnMpDUEicNY2uQCkLeMFBikrb6sUMx0usv5iPcHU%2FteKyDaRQd7SDKQOzQpcvIgwWcJEamzm6CoDc9fdMMNT2etpY85fk1ni5sPfFHEWVBmah8NrfMw0T4T96mI%2BK%2FlCGWJWGjjYRDGB7SsTkLAkQVv6kkXvKuyj0OPDAsSK5JVjqVCzoyNBKHbZswjNesvceFVdcnzaGgT%2Ba1LRNs&X-Amz-Signature=f4134b7ceeea2f579ce9e2e19d5f0ee5d82ec2a81619d6ab726d4a0e197a4741&X-Amz-SignedHeaders=host&x-id=GetObject)

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
