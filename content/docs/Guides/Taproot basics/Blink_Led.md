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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTHSOZB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDES7F%2F7S%2B0KzEHMRX1LRwZz63a851%2B1CTmKN%2F8GZIBSAiEAl8vFlILWRc0G923TWTreyibuMMtW6Xodywupr%2FyU7WEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAUqsS336EgM7yMTVircA1mlMuXrPVNBGvXZIKYVtZBLiss96wj4UruEeoCTtoP4Y72eQfXpM3QYRJzY1eZJHvV3KRcPEXyo8OIRAIWBNHVvsG%2By%2FFN15vQiotOgv5SLYaUY%2BntIaOipbjSg%2FqupEDP7wk7bUcbRyZhXoOAQOXCoY9v3FJmXtQjQ9eofqhQT4AosgR90Br1F6biKvJ0JmcWY5aVCqFPqo9iXmbv11uWed1feLVP0V7PcHsQzPBTVME7HW37sOTyjRHMUzIrIzEzb3wmqc94IIVZxdcwhZixH83VeUQqjWJmeHwVPW7NeF%2BJdeBgmgo5rZ6s5ghpDAFx2Y6zOlpfh%2B1F2M3QwbhRHluDF2C1mf9yFDOtXo%2B6uwsC9FNZd5QRkptoaLnc5PoHOV%2Btchxoy17A1UaUTfd2rU4sMJXW3EX1yYH6%2BXDG7BahaFQVFqQehXy0HzyYZmPThWQ3T0w8cI3RrCi0g767aofOfPM7mQYMs0MzSnTig3PapKcv6MIIbxNgiot2wH2XifOwMaoDSo3B09RBjYDiS0zxa%2BgW9sc6KKwgVo1th2RLaso%2Fd6KAxoTfbK9G%2BNLzE%2BfblagJkpHT7HioLPEsKb33M2%2Bb4Lim4uolgaf0HkO4Tf0ZTS1LwqaUwMOa25L4GOqUB3mNpaPlNzNQIr5ElhZcQ%2FqHrRs12VPSuwbfd4aM5nEygw2mR7LfMSudjAOr59bFbFG1kFAJoto30GVm6CLxeSd8AiXTX0emD9wvarSBQrlGaqSeVxox%2B3BXb6BJfPnpp59lM7Eo1jKMlBORTCnphY98IALhfTo%2B9k2TaPL4bois6tbGwdZro1S%2FLbchn6u81IAjzf3FXxH3Mb3eG0t%2Fp5Mga5ket&X-Amz-Signature=c17f0476b625fc7e6ab6a413acb2557f84b3e45bc6411594cbf7930703f58843&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KBNMLVC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4taIOI0c4NMkPU%2FunifiToKaoCO7hmRBKM6GBZSbBvAiAp3E%2B1jbHRxVDhgxx3eROagBgvl5WNooAvZB2mm5%2FeTyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMb45SNuIu36Jh7JbCKtwDpwTGN%2B2iAT%2B2crXiEhJjogn58RSXdXTegCyK8vkMkbDRpE2aX7uU8SEQRyYZKupEmAE6LTKoVYeS3t6sHeTzKsv5EqUMsv58iznXDywTAdhs9B3eRdaZ%2FBVXwnSKnxtLQgOgFOxGzigiWkWP2JGtkGMZkioKGrJx5OUFLqw31ChnOaTthoV%2B9EiYGr9RkJHO6baWSmpMUXKAcCclJhzEikBINmjOwjuas0STo0K5VHa0d4vkfKCVN%2Fqfd27CKzuKqIBbaBW6O%2BVlruMkxsgAsLbp3P7qSAvjRFEj3%2B772pNYE%2B6p4NMPZ3GjWwn2X0r%2BfaRB8vjIsXTAt8E0%2Bk8NDR6vcL01Jrv408fAmkOuysxx8XhAQ8ryyG2q5d3ia8V43MHZbWE3gT6reWliWnZM6dFb0uFKQHNDVrQZrER4djZzr%2B5CZe08UwS4eiBZLHbG6ieojJ636rRO8yvWIfjnxjPPdhgCGwZi7QGpgZ63VDDuV4NJK%2B1qE0bGoK%2BWlpR1NeX0KSuw5SSs%2F4u9LTmvgGAmAMg1mEGA4H%2BSmmoPkHWtiUUeiEBEFJsqAaCxWuj6RNVWolifC9TvZAsKUS09BDLTA7RdPYz1gtvHXJWcvDj1VWwyQ6m1%2B5OU67Uw7bbkvgY6pgGnVkrlACr3ZV%2FkbXsOfWvTK1Yprc7XEEMVSLDOUHBIX3oNBnX22q3O22%2BIFcJNgoQDHEdSEh%2FY1k2cGBIviB3pl1OapMImZ8Fwf8RuXSbK80q2FeTDryJfpuOwCKAcN0hn7hLp6oY5g7KD9yhLDM3LYcT6loUNlXHrf13gL%2FudCoA1M53AEYTPozhcTo1GVqNm6xpFHEgdEDNamEcWRbBwfbhYCSdP&X-Amz-Signature=07ca9a0d7730dfad048a71952259041b594697d6140828d29e78dff7d3cfc5dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
