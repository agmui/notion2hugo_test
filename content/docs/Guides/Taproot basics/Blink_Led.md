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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRLDNVUL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEf41zQssL4FEXvu9AOxoJyoTkSezF6EF1Lc89gaPVLwIgQa%2BcPWcNRseE%2BqmwDujnkEsWzF2cob%2BXez7vU06jY6gqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtwXVydCzWDJLzfjircA6ogbqovXBHFrkMDNVFcg00cMW8e8L%2FKIsQZR0n5JiWX4pWAul7vP6TMZQoBP86mUKquM5Ox3OMw7%2BLcpFWhBzpkZo9a0IlBN1CgCObgS3enUF3pmRzXPuRo23i2a2nTuRLLTph6Jt%2Ba6EP1lqCIeH41VQSfU4u%2FPIbinBMYn9kjPHDb9IdpUKmbOuHzxFxFPvdkaU9nd0hLYtqxRPp4wknucDevQHxEcs8u38olMUsuFLPp9aOyEpzdIyPf9sOzqUGkxagzBeF5AlZmw0TEH66HflgjouSCjp8cLos8qK5mnmOIbyFkLfgvIWKp9kK%2F6Y7KQazoczTwZNTblSt4g8uZC%2BSM07wf%2FBgt2xtMZownJ4FCpNVQEvmoUOt8hphU%2FUL65oU7QJ3OQwEcTo%2FpRa7ggdsIqW%2BIKYiLBsmzzNK44IWkPmcColXhcrHemS2zGaKri7sR9Equ4NeQ9BgR2zP20rZphNdqKz%2FJ7NOsQYh2Mjc5rwT3ADO8R9o%2FysteLCEITxrHJF6v8Qq0Ay563%2FHncEtxJu0xqYNcQ0EhOFp%2FOaX1fVuYgiNaHaKwi%2BuJ9hGBfaZutiM7NA66xvigVC%2B8qPwergofFvJmJx3L1YgxrHq2r74IRlo1kIvvMPfxpcQGOqUBilNUfvNRu14CsVslPueLol0mCXRgrW3CLzTlN80Rp4FNpssWjsT%2FmtopZcrjUKhozxOPTBD88xHgwcWz2LBVyiTdfxl62afHRkXr8ADZKsWLkvrQZWMHQF0rQVDZYKCS%2FqxNfK9qNk1TNeoutJ3gIN4giS2ezik6GsQPoQyzjwtiY4rWMLi3u3Kp7%2F8J4mahwACR%2B8aFbm50mGlb8d8%2FMARLVcjr&X-Amz-Signature=a809d4c061c9d0727756b619026600e0e323a6717980827bada4c380e0bf5e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GU63O3I%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtElXMx2kP28Koq%2Fv6K08W%2FKqdcz3FUoO7F0%2BQGt5fpgIhAO5dAiGXX2cycAx8JUhiUssjnowc3GKRpA5D0HwVcWSkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvvRidUvcE%2FuU7%2Brcq3ANS4S85DVZwJU4HNtNuN5A0UChXwDJKhKUFEM2FASmKRtqk6La1wHD8vJKRIo0gbwDOO2mQfAgcQHN1lqB2DH1j5uX3gUBSym2SbzxYjkf7fj6V%2BveiR9X7oTk53ych7az7SFFQZvx4yPmTM6KXoJWSph1owo6O2x1jgqIGWO41EAbBQcVgPCk9h8kbYo2WbB2FIvuJ2%2FcKljSBMUs%2FmAlwBP5aRaepO8YOJyQlld1WDTXdI5dHmMDg01p77W%2BOI5UBSBsfjpm54eao%2BYJqbObpxvrnvt0eDGrXj3lwxu1rnUmJFO5h1nXDN5s159We5jj9RP%2BCea9QDRemYWSu%2FlqehFZ%2BF%2Bzk5henEYHz7qLMiMDCRRjwsweKb5zbi1xAPuS20r4m2PMv8u8MmSIG3KEEBoiZiYsslf929XmhexBdT7VKP22xBysioIJOaNW9983OOTsfPtikHHt5e7PRoKGlK%2FZqgR77hoCYyWbWIbNvXJcgGKkxww1hsWQQpNxD9JfZofJDk0R9fKQurdoOhu237WS82S3yMmXnEusVg%2Bhg6PEk9eHEAWNjsRCFXCiMheCxb66rMG3yarL%2Flo%2Ft71IS1cRRajtWzfP9Y%2BbhuvA7iTKx5Vj0CKKiJqDGkTDk8aXEBjqkAfQmD03CpXlS3e1JchLZaYy38IFYxtYRuJcgrLuJDDaKKYkuzGMymVF0vkGiNEK8tCNJETHL7RCqNQN2IVq3QcuPD%2B71tqeVJ8D4CzYOL2WY8YBmBiYTW4Jty0GXZt%2FA3PFUZa1bu1f8siCLMi2iw%2B3mxKc2lUFu6AaM01UBT9czaX4LTymNxEnlttRbIisaJsbiUYyaY1HxKv1RDtBoIOM97VOQ&X-Amz-Signature=023acd14a3dad6ed29e11f0cb0052c797898343e149de1ceb6caf80e04b6a04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
