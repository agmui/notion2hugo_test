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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMNAALP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEM47ojkn2%2F%2FE%2F9cyiLFiTJ5fqfivQSGg3XiMFOWY1qwAiEAzNUjZzxrDHjdIkjS91rUv1n3im1%2FgFf7nTVBDpBWmTIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnDmoTOwYsg3TiVtircAxGM1AIz1TRt3v6QiIPrYgm31qn0CiEQs6bHULv5NwPH3%2FOTUi4TO6dgwfzFuRoBrM2cFpFGz5uC7%2FotyIOovVPKOj0BG53GjSkM5o%2Ffr%2Feh7JynuQelhOLGvmlEpyRwkWzTppXIFtFdeLEfZy3z876GtjLPc608%2BlTPq9izmh8PWcXraZY5DAUUfOod2Ewlf74gbDCYaJIpaKbMs4rPws0hllsMBNJeDCr1U3F0kZ0mOIiqyzvit3OKGhbZchiclOjdRPtApkTwttaG913LP1iQ5qNa%2BIUHGsGOjnVl4jtTx56fZjLLeByE14eRggJRa6ZHiVS3Yj5Z3BsnAhx1M8OftLXva2vwa7BZ3uReCPo1HlEaz1%2B1srleVoLsSk2mhJ1GVTrXj2BJ6EMS6EzxZI%2FSiRVyWTM1i%2FaXq%2FZRVJqgxSUBhYfe6RAGGBuCw2hYH1oz8QtjYisYhv7WnqmMryjjvluCB6tFsnMU7lH3Y50phZLCpEVCRITja7jpiozPnpxWnszw0o1CUKrrJY%2Bylx0wgIB%2BiInFvaSj4W%2BYdK7EAag6u5xuDw3rOn%2BNYU6yFW3PGTxeN336klCvO4DSibQVgvUpFPDiD70uFw6tHvO9DKMdlBhtFDQ3raeCMNPcrsQGOqUBLf57x48xv7jmlo4uTcNILcT%2FK8G0yJoDPMM%2F7k5SxUeHBOoFdriV2NM7ASYw9d98aPLrrR90QnsfKFzeoAjnck4n%2F4A%2FsA44MWu5Ip0VPiYnBKwIHy%2FwdPfxEFjAWFvMkUuw3Ny%2BEg1z8QLDswloIW%2FTgbGQM7tQBdof4ikhdfTp%2Ff21KNJPt7jbLcoNJTHPEMGkV%2BYD32rlbNtHuIPCT4GOHIN6&X-Amz-Signature=0801a91a8c4483c9ec8202121dd06dd76937b62ac70148d06c5c66c5c05573a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QRLWIV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjZTEvrh1pfmAx5H0E33JEacQ4HJ3MAy2UyAyq7GPWgIhAOZJgY1%2F%2FE1z%2F%2BcRYThHTcT8bvJT9IP3iyWMe0B6W8DCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSnyNwjstpEygOmsq3AO9B05VytFhtWduvPAljVp8dIpXcyw04O31RsUk2wYw47Y48pgalU4ucK1sap27CIwbgjBrVyJPTGUoRXOQuNK%2B7DPp1NDrXWT0rzlo3rrYPbVO0qqexkbmwnIazrwDzls7Y6RE2sq5XEHb8JS%2Fn1%2BnIRPoCQCAzviCfWGvNQ2v1qwFwG3a52Gx4sAZQs9aPBHnblhBkWoWhCCMY66OhYsID%2FcOlAbgqi1pvm9M%2FuQVvjqPRHdVDHhkgSZmxUAhyfshXmXUNsEGttHwwD3vHljlffyYZ0mnTWXI%2BWrhwzcmvJlUj2IcF43L7rtixDDaJcfVJtRCT96fiGttAbvLPwAUjCLjIRW3tfEdg8z34mPwYai0XyL50VvRSQwJ6XE%2FEstsdkiUlf8oJKy0TbdC8sL2NV8jzkWb%2FAfVMMEH%2BZL%2B%2FyexBqbplQuJgFZsvBCq2xGtGgue1GW9mIyCPp6EX1%2Fxp466%2BLK71XejytJufADyLiQ%2BXe9%2FQeDIvRaygU17tGCbdqMTB9ZvNnDQQmOJumbuPz1gr3oeWjLvoho%2Fbo0swLAf0QAXXc5YEFmrypCYChUVeCVQR%2Fn5B2M5Syh6%2Bu2xYWGpXd6k%2BDCjEEZ9S25C0RqbF7a8dMC%2FZ2FBMjDR3K7EBjqkATUieGqnT9ehyMvtNH6PXfoVpqdwAaADCpWbXNoYPTNACKurYATUFYsoA9irgaFZ2bTUL7Ni%2B0X25vHqALOaQT9sYhaALnsJwsM9reeJCmdFDnB6rV5zCX13HJg5W32aDXFhAdEea6Pivuh1pp1RXz0FyQn8721TGUl75n1m3eamO6ci%2Bov7UEGVyD%2BNrR8ABNJw3p8b5gobkHXwhcg27PzCS6WA&X-Amz-Signature=a13a5d017fa38ec580403c78479a57bb8daeacd79b8f8561ed260b2e3757c3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
