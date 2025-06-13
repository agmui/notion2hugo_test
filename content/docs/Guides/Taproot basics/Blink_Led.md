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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWZZF54%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEiVfUdibC%2FPQzo%2FsDIjlYW%2BLBa90T5YKdm54IOOAqx%2BAiB9IxV7aVgSjvHqr%2FiCYb9RnznaOlObmdqaYJPl7PnleSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMi3Z3%2BTDUKwE3mezvKtwDKhXS5Gzl47msHPlS6QJWQ7yoonTAZcTsVbYE4fFJjbB7Lm4U375TO1dq8XcWB1KJoGoxrw2edmUo3%2FumgMPuuXvIRt85vMHaO4tO1ZpTutXKTnrtzTLnndy8cdWLybRfzrEkxUSVSwdz8E1GdilSPCyRcVeSqNapvrPIkZodJe%2F68hRPViE0LLCF6oDnY1Nov1XLmu0BsPb36cpoUYaKF1dioDQTmUrQdLVtDiCyaNeVMQpjQqaK6WvlHZ1LxVamushsEnNY3C3l6vJUXVeAxsqFJiCytubUeud13HDv2%2FHPAVTRHqoKbx02gujKV%2FZEh6D%2FYJb1sB25JVwZZ6azC9pEA%2BVRFt2aL4q%2BkjydEXOQX%2Bwul9sZL6yzLryehuW0hQevwa%2FPKdPqaykXFwLE0Q30JLI%2B8His8SHsg%2FVf3XSvzi26tf6U1qYxZuAMzD%2B8AuPl6Zu1LdxqDaHt2klL2zqB5ALmsvvNHM9efYBKyRcFbNah6Bcsl7OuLXa1S3DXGuPoeymT0vf8LYscJ8adu4Zpg6vgu7mtdW2ZTXW%2FKSfNZB8BkFbQR9t1A3cphxlcSpc7qTBoezo1ZjZBmqQh6TKXv5ORdLVg2p%2FqTb%2BKgCPEjfmb6sDRg%2BRRzpIwjKqwwgY6pgHhQljNDKZ2CNGoPc1ZwD4ESpjEbT1U5GyKadxHIS8kgD7JT%2BaSrxlosnm75kKr3%2B3fA3X96PoewAtoXqcRqy9mraq8vtvKjglERwx2iXQxbh4QBIP5fAqIrBWuJ6BdSIRv9uB7Mh7noLwo%2B5LLvvKrelXiFjp77d0SU86NSGpXcN%2FdWhj41P4yHyV0YoeGBTj%2BfGtA7SSvaqZzF%2FrcpaDAIs4oroT%2F&X-Amz-Signature=04cb02d0e060970fcb08bfc8770ec5fe0c97cbb14a31717e806087f658662e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSDXJWUO%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEgDHXxi5T%2FSqcP6jJj68YhamGnwcnumGb7THg1%2BU3tQAiEAnk%2BaV4giQVsvfVeFpvAh5m1A6VOQuXy3wyn5emFDQTcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHFKh1EvsXYeF5ERGCrcA4wo11%2FutdVXSU2Xl%2F0FcRpYjHHzJJLE6vcgmjdLgf0b%2B4YCCOQVEZvS1KSeb9BhvUDRkpziGN6Rw4QClrUmDJ62cskUPbROZXEl%2FPRjbye3p7GsHKLI7rWOgjehCymNHzi8cd0SOn9EvP6RuOTHgzSb9SO04VMA6R2k6Fnn%2BMFNM0jI%2FveOkbAder%2F3aCqJwqfjReagRq7A5d7ifsergIcgphk4cZO86ixN%2BL5Bn8pBT1nbXsCv8Ju2tPlYbP6H3URcjk6XaILq5hISusnA0Z1XIC9uFrTAPV8ASszNRT3MkGiNzLbrd%2FI7sgwH2JDlLidGTeYPFddDf3OvjkdMgpt2V9f5wNhNE3s7G%2BBJpn8zBmXysVaWSUPeHaU6Ulgj3gWufrMgmy3kiqGSkckrvHU8gVIDEHVYnoyiEppxbWsRvnclYONenCRHAIdimfcfs5kj7LYWzEtOiNtBd6lkDEZAY2GKsos26lbo6WWGkwnQh82hFuA4bF8v7RGidOvRxc4FH6vr7ZrlLWISvyVrFsPiLck8%2FYFMQxWX6CtrGCf4yZSMuAb%2BqI25KjY2D6w8Q8LZoJeIKFzJg6MOvuqSTfTn6IRT8H8WY2OqSv9oFqvIykbCtM8UaKYcAABFMKTRsMIGOqUBxuIueYcIGY37UEoGAT2lEKhzsGhr2Q7kSmNPDHzP5Q9UGHr8Dje8mjtfROXzcOCHQMyeI6JP%2FhzmP%2BNRGpK7pL03BDTN5GYS9wNwWnw%2Fnj5hsORhkKWELPBrEK9JrW1dWW5qVE8aVx4BrCHODcGok5mmvzG9NHU7hN%2BrlbS%2BdKV1nMy%2FciHJMv54aw0ozuOpFsdPrFHGIbGiKwCxm4TlA7uyul3G&X-Amz-Signature=6497efac0224a41133b6c35f13a0051d01cecd0016da5bc01b56123e52e7cda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
