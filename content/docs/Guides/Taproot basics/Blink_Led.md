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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV7JXMTC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDhxtGYd9mxhAbd4Uem0PTiudPVoGp6A8Ibqd1GGwrV0AIgM%2BPez3oR6Dl2xnpvlP3uNpPAjJDb8DeQMQSj7FbSZdkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDjiRhdW8ZBXWkSZDCrcA6iNfKogZyhTzyIRa6GCp6H904r9oK8K8vS%2BzZWvjvWEcrcrVIftoXGeIEPeUNGbT9YHfNgqhvTWUQ0oi4qyXIqeBCgXLMeFBi3cePKVr8pL2eCiRNhwpvWq%2FUMP3T6uEvuYELx3oY0bjPjhFHbc0bIdhuiMKl5xhcmLiij2AJtqxCDr8fm%2B2A1XoyEVUcWBi%2Bbq0XLEUNkVzGZROL9wUS0nqHHx%2BdD5lleGMuvKaDsSC9pwesMw%2Fm%2FmgHuKvJc%2B1wpzP7PW99TSKkNkZPLDlmChS64%2Byav2OtFYv3Txx2aaba38wpsoe2cY1YZ3jxO8jnueWzlAlE34nJVfj%2F4kiX8lOqXe%2BXQ2FWM8KxHurHKs0GvJ5%2B8UwbAPdHSMCXvyfBaGFKW%2FLJik%2BAYcLRx4vBWQmSJ48d7J3UpYTo9Rp9sxSwVKY2EkEny3LCEcxuhckgbpAHt3YK1wXIW0w3J%2BcqyehOzLgZNs%2F6abzN9V%2Bbq6I7YCt7ZcniorefUK8v7shw8Kd%2BJrsSIxQyOI4B%2BwSLkA46ZlBv1BL3I1e60eaSyHv3UR%2FMZxqifOI13syLl%2BWrS48ebu9prigLBSlHLQuqaX3x9hoK2DhlTsuntiyDVgUdcvewu99un0p8ItMLmXzMQGOqUBByJCRaYepj78BHx23q4abn6LAkyhDL0bBsGCuf1uQ2ghY99mek2%2BZzyL%2Fq0JCerd6BEKDWzQn3fUo8W0X7pLiuu%2FX%2FUgGpbeE%2Bzdg4wswC0hv%2Fu3Behh2DU6xNvxLo03uDfk5eCVMAdMcsvEu2CB04Wd0OmCXTNbtkU50oFzMMKfRHFoVHXc5gjvbv8kJN4jP3RPDUMbUEePHXNnqmjk7HLU8S7h&X-Amz-Signature=a17d9419da480d2c03eda10e082387be403fe83ff3c97759507111fe9e192dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWDTJAB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAoYGABfh3hsVZY0vjehVygUNIrjGqojsHt6iWTMyfwuAiArwIPjJXm3CuaZAyG9lxzeKdbc3bP6A4wPcsiYZlIvxir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMlSG3AK4sgGIWk%2BdNKtwDAz9QB2Dn1sdEPeksIi9S6kJzUHSSm8ukhv8dSOKp9Jk%2BLvpJDjeTRHatYKC1%2FSASzmyhmJ%2F712n5DMIXjQtggk8rW3eB025qtT8rhQXxJN5ZdxRtaP%2FRGV5gt0w81eY6wMT2XNN%2FwpVVX1y%2BTmfWqmdVwdhSk0ZMfSGkMSvsKiJUv5sC%2FvlRHUWoGZRjj8aZP46%2BvCnQwP22VsI9Jl8eFY4vQRrUXpOKDCvSd%2B0gyRcaoE8p2KaiTN948azVnT6ng9PExMlDa64l0gk1DtiaA66xhRaa53xMsmwL%2BbygE1UaC0VJArxmYtIY%2FPnm6zw2IeM1SVbV%2B0%2BW6mrjnxEW0nYbtPythUxlXc596Fofz%2BSTcGl1RvXRiKd1fDjos7FsSInMnVV0ppjwTZAt9YJvr%2FMSjbisNJVOCYQlbt5JI6e02g6p6qsTn04znefbM0R8%2FT6q3IMBn3nywHXN9DGQC%2BgSVs2v%2FGPaixCv4cqyA2IbUL9cAI%2BNsY0LPyml%2FXB8yGTJNaiIcPMm57LNCPFr9gbnCJHfgLvVEJ5QjdtbOMAwF9MMT5DeP1RfvUotg94L9OTGdYO1jaAoMhfWqnmjTtD6%2Flne3WZe%2BL22sMaGwPmSVrgFZAfrgPgaS1kwtpnMxAY6pgHHvSMuWR0ZYNPRL%2FUnaAvUv%2B%2FiAJ%2BPFOBpEcsFM0pyItc6t8pGc%2Bcc1MN%2FJVgCVB62LjzUQnByUw50F8Rzkfd%2BcLlpXNPSnGyziYHMEjfuWqcNnkI%2BmQZcJ%2BejCojsJNkwoFu%2BlgemO%2BCRQ3K0qaW05W1NFnqgS9BF7EPo2CoxNeN4lvJllHS1%2F1C%2FNLRYo71EA29tKbeXBDi3RfjLezu%2FzdtEJckz&X-Amz-Signature=0c6e4491c39ad1192fb20b3d949825f3847551e1ac7a08d4ead83307a14f4084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
