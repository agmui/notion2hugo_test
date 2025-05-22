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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QEZKI5R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCJx7qx2y2odWw%2FIfCBUABNuwNxhotXJ5ORayeAfncM9QIhANXL4zA5%2BZdxmyK8VJqw2MpbiufP1420eqqmKWASEs%2BUKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMtwHD7QKttPvbdNEq3ANdIL8h83GjCjNLPo2xpn5Jhm01FfT3ToVsRAemB2yqcGHfpvJ0nFB%2FMEH6JcDJZbXlH%2FKFzyTVHXPlTwCrleOKZkY95CGAagtaU4DzdUyIhQCV8pQSTSO9MbTed2wIbvTIXEW%2BjGQBULIpAk8thk0y1O%2BakLlgeOXCxzfVciYuhn4eLV4S2r7o8gZfmBWQzz%2FlwXBlBwN4Xmcjfg4BqV6o11spOn0itvVLmUK2vOoBD%2FRujF7j9TxTSCua9NOiyn2lKnoBwUGVvvtjN5%2BHZvmiNE0pWzzECslmAaaq4JpuAUicHARnWQD0PJqfk7NK4dQvjE5FJr22RqEkAFKnRWeBPdYABAtAMZv1eldl%2FRhhINGqYzdVSyH7YJh%2BEwERd%2FMjcIZn7%2Fhf5BskhvuAvr3FRu%2BLumOCKfienlr3B0GnTsTRPndIBNGhGa%2BvJx9Wrbe3anEhY%2FFWAaFZjx2NXBI2%2BJoViTkm2KHlxu0Gjf4yeHbjdxU4m3ZZUCRlo5Zjq%2FeLiFPM6clK736wVIUrno7F1ZjdKyRKaZIM7e4wjuibzCl4%2F%2Bs5tecQiNpL1iPdQKqgr%2ByQn4tTiYXfLQgSCpWbZq6pFBJtC%2F%2F%2FIuJZjPoIpe0HfZ1CxLo4WBR1cTCZlL3BBjqkATBPqrQKSbWnQzPIg9g5QEIWy8b3m28aPQtMTtqi%2B6S5boGaRom9wug79rCmNVTamZAAHp1W2i4mx59lkg7JrD%2FL%2FGKuDIX9iKAttBhCmaggtVtUwr2j1TQZOpqFVinEfweWKTcZN3Fl45KqvBKb7KjOUeVzELQOr5NqLrOMEUTDfrJ9npLi0OuAlHrlFJSfQ0sWKMVFQVAqTEApbK3HSFzkwcHq&X-Amz-Signature=310a7f620863a17966ca4a97f6e1490e75a6d3aeeea19bd7a20f961db50f8f99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4RXPKF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDABlGi4gY37eY3NKFg40TEJk6L6oBazNj2my1s60%2BoQgIhAOpf4n4EWoNxA7n7gnZ2YXvcSt9fA7%2Bhe%2FE31bxPP86CKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv9nPuCqMRbkA5xAcq3AMshk7AaneNyeKyoZKkS3ynS7ge3ZuQ%2F%2F5IV3XCAQvsjRKXXxqhv8lVlSCq2a1ht9Qb61x%2BvqiNZXU4tV%2FCqwRbuh4cDutMaOaVzLNyJsiRzi7bJRSqRqi7O8LbHoYdHeGd4FBxuJ89mTQzB83iar9v8tzfNVt7drdvV7T2Smv1JtoKgZU5mQ74YIs5lraCl7LG65nwuDSBPa8cLwfib5AwNlZeZeG8UpYm4PDRRewLUERP%2BYaXlkMPWzJ26VL5j%2BUUaBYsgs%2BeToQTCwYs1rGmTMMFoG%2F5VLm4YopQSuURKeCG%2FpXvmiqOjJ1d3EcbkSr8D4yO0WYnI0poWFa45VupBsgmfrIx5svzZS%2BCX1X9LYYGUkkDUOjDnD9CEAr480Vtp8804qvw6cW%2F1AdWiCZRHGAJ6nPxJS97QSgFX%2Fhag8D4llO%2F92ObnOWvAJ25S%2Bq5Rp4ruqKd9iweINnLDeK8vpKY8jm0jmNh%2FcKcBJ%2BTl%2BM3tfJNk%2FY%2F7EJphnkPB9b7JSaQYNPk84%2B2Nj8KwbcHHRpjeT2xyfU6RuQ36ft4yZz3Pj5msPJhlOb21H3Rlr1gsofq2SrC0PHlqPe6I7qJwaIlUpPoX9zr2ALoLV3IEuIIbEUphtht9yQRqzDn4rzBBjqkAR29t4pkvfxftxYoQbTsj97FlhcVCluLgiEnaZG8pT3VVMbewqGtpXNdxDTAYg0If92jjJ%2BsOid%2ByPsubiPwWPwEnQ0nbjH8jfq419GH5YVn9eMFfWtNOmnvYQ%2BA3SPGfhRD26cBJurLsmL31114aXGTOkpnWTczsUnNwuyKZ39Jm75CepKrxtLV9aE0%2FQhnP9dqLnfPD%2B8qylMQ6ARxTEWIo69c&X-Amz-Signature=8222f40d35909a05b3e08c1e84157301c73c820a31bb57447eadca7895b931ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
