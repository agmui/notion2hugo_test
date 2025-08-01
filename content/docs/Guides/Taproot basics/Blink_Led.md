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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRZXXTZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgK0y2y5D%2BO3kHoIL42WsnniMjihUts5vye9UCCOVCAIgPPOt9acoZkbH1DKmzJ2b1aFaJAI0Lk8T9xDPT0nVsAYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFREmGFvYsKQxAyiCrcAzqdAbpaRIzh38LFD8QDj5ecdQLdOPyAiKNU%2Fonawu%2FH%2BOQgN%2F%2B33Eug01srtytoUjeG7LuECrfpkboxV8JL7xeZmVje8%2FKvjx8U4N7Th4WT6npF70N3eWxsCfJkekN1mzoA4OQ761sRaUD%2FkqxuOYp7AIYJ4pLmJ4qEnR5nylJ22UkisdPL%2BsZ4aLNU56Ql1C5%2BksVd0RCDPyTFZ4rYZfqDLngpk1Aruz4W9IGLS6Kg%2BgQOm2DOZE2hxKFY9MIpbsK9GG%2FPVa9L%2FHdIzI6Ksx1MurZvrbDH3b%2F%2Fn9GCzw1aFZ0Rcvtt73T0cnXLYRlqdu7io%2Bf6x13GFBXi4go%2F%2BkUNjCYZ%2FyqRtTgfO1KZTkSukXv5gc2JODMOGaSm0eK0j9sGjBcLPKEJRfNv4L98ok4FTmjRNpuUpOJih%2FJAebWFIEbOIMz3Dc%2BoOKjXj4W%2FywlGYHA7zEXh6ybWq%2Bq2z6zsKD5r9NcMA9LksNUh5Fmg3wMZskYkkZy3GadpVxk%2FA9ZBV%2BCsVKj5rVimDtqXOG6QqQbdD0vxW49g8J%2BnJbBOgerUtzPvQ%2FWlsDGB9bHN%2FOUG%2BMGA0cEzmWFELkt%2BcTcKeQXo3hgrYTcbtITKhJeQ4QYTQVVcqGjJFf%2F6MOqJs8QGOqUBFKXBt8e34QfYdlnI1UftrolcAmJvZ%2FLPq3X4z95781TyBEkNwHfrZYTfU7FVo2BPT26f6BlIHZfD204BY8fUhdqLx3s0zmopeBb7MBndDkA7EHgU%2B%2FJ%2BFGVetHG5pmFxG3GMpdydj2OPc3i%2BANC%2BL%2F02bOX6S0iW4SJw20Xmu%2BK5zpnKzpHUVCivkneu0Qq%2Bglp358SaMS5xBL2PlKTz62yKhJ%2Fi&X-Amz-Signature=5d37e11e260b69e737e1f5478f2780352ceef1b53b6b26a18055492ab008fb4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWVKY4N%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzXzeZ8c0Df5jPdiho6B3P091BUC4S7DyuPoWUsqX9fAiBAT2miX9rL1a1NNcuJAkzLKILz%2BAzMuRX22S1IqWx6FiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGSbiJekSFvCWt1zKtwDvLcDylsQTg9QBAMH3adGQL5Qk4P5lvYS1V33cDrIIZicywBGfYFP6GNYiX7sEgnAQi5F%2B4GljMbvU9AOvc88%2F9Sjm9dBi2tyw8Ebu0fz%2FZOsKc%2Ffmo2MQ4xeFbIMxG4Neiyli2YtiT%2B%2B%2F0RWqA0g7oxx9DIso%2BJIU9m46EQqJaRuCHicmPrKNVYwqPqUw6E7TixKgOaSb97Pxlpm30CQaR6neGf7cIoXE3Qahqi5eQOD1vvKahyAOIVNueVyeoUfTprmo4OMBqL4YgWf5r3L2Adfx2rNbSlfJ7OMF75Ez%2FSoNQnRFsZd9gh4%2BeR81nM21eDU%2FjvGnaLPb3%2BEnIifyNDIKf%2BPdciePoKmVjk5r%2F%2Feh0s%2FK4jHU9F0TYQBAnMc%2B8pZPvC05seo1KBqtl3T1t8p81qBvIntXJYAZ8qTSl1G0tNdamwzNscBTyEQWXcKD4g6KXF8luIIRJh1NX%2FzhL9eC%2FCY7Zx76LIVDIRZVrLTo48%2FKEo0gX7kjsqibKnXgDp%2BMeY7WrNb6zBOFQdpaKILE69JLVdrZiuH1PWqA17zoCtS3QJPXxDFMPx8tQ4CcPZyRDyNliR925KLNKmM0BQkGVS1ZJ2LucUXeLaoVxVaGN5hslOL%2B4Hb8P4whYqzxAY6pgFoCnSZdoKGhJMSR7%2FeSqiUMyX5In1b5LU2SjEYIu0ahwYoCk4a0QsRPMCKEZJj3mRh011qoYEyjTA2rQXIgDbnJkH6eTz8xMHxLOhnekFdq3EFgWhsAQpoYw2xnDsLMlZLcnZ2lI2%2BAGphKJYyZ7qHks40m0XAHZh4sD7ELSL7cQYzSpO0T8HCR7sZfj0d3HoFkqOvr9aqk6ZE5M7y%2FYrgqpe1GMaq&X-Amz-Signature=21e520972fc2f1faa89636f0ad6a5a59179e3a876f6280e6511560b70f48e512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
