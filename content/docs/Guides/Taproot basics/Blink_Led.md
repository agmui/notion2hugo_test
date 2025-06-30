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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SFROO7G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDT9ryhf659XvWa06gsOJRCFJx4Z78YZix7qPBmTbEMuAiAW%2B38MJruUk3QqHTOdMHUOPbooKSEiFWqftpg966M6qiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHL0u7Q2nyUrz9C%2B1KtwD5h5uxq4Oad1G7yixWJwQpZH%2BoIjUWqfoSS85IzGTeAp6Y5APgCA%2BvY9bmb4si4VRfvRgVVPiG8KIq6cfzWhNWb9thSXYwHEQbfoeSegFKNvYiGxc7OugzLT3HggIDAwfBHI2em4A9omUVFga8F21xtIsPjvC0t4rF5CvEaDO2qV54vMzX3VbNfqWLn3ElnovHy5NkONM%2BNghfjA%2FG2VzvQj8MM%2Bzg%2B9C%2FSajYOtPTt%2BAeKKdTTpbgOYHrCqOTclt37g9V9ZRuKx7yv%2FUENevxGvBCRTNsUJqlMopesjLTcsUTHMr%2F0id6e2yoAohQTCTPaMCAaTNaWaAR%2BkTTi7OUmERCkF7PJFaH1uRB9FnqgBxtJjppJlymEfo7Unc57GtBNJ1qG5uhag3yenL%2BR5eiR7sI%2BqL33j0CzLGwNaui1lu55TBlLleVxqZGJMFggbmhx%2BR49atHsPH0mzLExeAB0qwP873a7spf8dIF1sLd%2FDvbJLNn1SXIpdpYhSS4IZh0Td1rU0e2lersVtZaavnY0dTamIB0xlyWUJvDGEZ%2B%2BRAqmrXs0xaN%2BgGEHT0mwzn6ZVy7m03krkc0ATMHbI%2Br0K%2BS78sQyJtyTwYJ4NDK1ZzjdtWykEJmIh%2BGhUw4LyHwwY6pgGMcvPjSW5RzxgPLm%2B8pVf0EDajMHwACoEmYf2FiJFkaWCbUJjeV%2FsbJzjFxfDPX4LZB%2Br7Oh0mMIDI1AhnTYzv%2Bg96gKA%2B%2FG%2BnNpzcN2hCBvPqnJA12vCaLy9Du6SNFDDEWnL%2F9IbENG0k2bDKXNQuq%2BCQ3wwK0zh0sqYOCOtBarSTtBOhAc6VJLHps9jktUBDweHD0kPjA%2F%2FhV96ycoQGiIElgU7w&X-Amz-Signature=e71a078273120cf6bd8029ad087436b4875d2dfae102942cd3b48a84e85bab36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UR6SFGV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUHgGBT4hDODoaW%2BFMmZSrnfjAk0qYxkRTRDYQad6NJgIhAK%2FLYjK9aZbTEo5dLMWast04hgV31OTm%2ByUYtcWOVJWWKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwrSUWNCcnfJjj68q3ANH8wivoG5ArQsOks%2F9WFneS2SrGxWfmsDsFVb22uLptEi8VIs6Nx1sPys5%2BIoP6hbwfsVfvAdMgEKblnVgkXxRgz25qMy7HqDSQLnvFdBo4kRUCGXtr9gVPidgDaC8tv1ZyNJ0HL7WLMoALKNQMuIlcL8a5KoPDaSYRAvk%2B%2BLLuJ16GXBPbVUEUc06kqqKdgEhpkvGSCS4ih2xD9kvNp0LzAvDV1voXFn38z1KHbyIIPUPnevY6DLpDO446E%2BUSXq7qHUwXOm3%2F1FlWAlFZ6t%2FKHx5P4NdqM%2FvSakORp3sYaGT%2BYCcT56s%2FgeoXCDmKu7VcvVB9Sj%2FU%2FKnvKITW%2FpoAORqpLkuwo2jbK15%2F6yfmx25URaGitmiJp4VgoNA7xa43tlD7R%2BuIp%2FkQxAPN1UGBhkXJlAulkL0vJnKTscSMj702%2BIHB4BuVNSjlU6%2FOQ6XROGPJ%2FcrQk3AErTySXmXpIxyzcGF%2FOYw0EASi2be8RndpdOiJ40u4kMjnf2452DtnDTngRQsXRKvipJAh4IHveC1wnbWkcVqcqNpO2o73eMoosnUZb1UQe56SvYVODXXA73cDdcInN65rquFq2RBqdBUBarr%2FqNp1Oqi9iOAADvlRegZgl3ATm2dvzCe64fDBjqkAZUmFt2SUMw26oFbqJRFODsiKyhtjSn%2B3fAA8Glj%2FHtM8rPbAYZk3qR2MGEIpvG7KAX9pvwWX91kS2AMS8NtmiODEsr2YHUBRWz6WigdLgV3Sy%2BRTnVSeBaoq8%2FaMtM72KYRAlAiayoPs0%2B3CSvv3xPWZsVh1aojM3Bme8XyjpRF3hLq3yYT33W%2F3lVhNrtriIDhmeG%2BTkNPofvnetuOpVrUZjr1&X-Amz-Signature=7523cf898a0e6126f496b0573bed19ac06c3b12d9fdc1c1b679f420a02016e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
