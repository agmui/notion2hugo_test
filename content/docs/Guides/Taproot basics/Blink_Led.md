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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3K7HNIX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHiIYzlw99LTfgXkHnEZ%2FnTCa2kx9ZM9M%2FUt9Y7RVdGjAiAHKlDy07VpJOgW6avEUKFFUj99cAqZkSyuFNwWCeRUDCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMx%2Bcum9Gzggk%2BdsuxKtwDLokhk1CgU5HfaMK5mQhN%2BnibAmuG3pEH69CdEWHA4BLQvgauCYLtcBv6rWm%2F5w4HbvQVS%2Bf1it%2Fs0Y9Zogv3whfSmx1bUJ5f4qeEINBo4a1I0E14kMEAnfhuwMCzV3P5zgItkZqonZabU9CDG0jNzZifyTLnfR0YqPpSh0cxKl7K%2FwH0TQbP3MmHi2wxtq%2BppC7hSNAOswAyxOvgfcj4ja2k6SFWtc%2BXXaoetVYklofU5BS%2Fw0FqzVcNGdJvzfCUZ42bIbwgUPTnRGLbyYKMTbQaMs3TIF1rziBzbVs8xW288Gy0mgb7Pa%2BK2%2BIvqo7%2BmVuk9FYTgVzqk4Zuqqu9XJ24DlutN%2BODQerEFWMRdThM4i8TCDG1DGCXWB8bTpe%2BZUS%2FRUecVgcG98h%2FJ4zGefs8P3HbZRuR7Itv%2B0X7FNMK6htz8OhRdN7cBUcmFtCypWCoJyiWWrKVgRDGA0XMWQPPBKedNHzOLvxr6SFXrxZf6XkcoCcA9Oz3tXhG8G0FhozQysljMmTvjZbRVsXVpy0q9gmRrsLPr2SpnRzun3vTTBOD5VEE7qltvPkFpJVlZSq91Utc%2FKVV%2FcY9qe1ENybm%2FG7Au%2BIjUcCLxiG0FK32tkvzkyTS3ru6Wt0wiqOGvQY6pgEl5%2BSGoDzw5oMt0vhFaYHr%2FkcpT9KGauB0SMbu5Ixlj3niixU6sH4qjnxa7bl%2BT2AO80BxqdFANTJ3hDX0tOwaY33w%2B84lt7yG6ZxTYHChR7BGbrbGB7AVdDLxVmoUIIl7PvTXZZQ6xW4MbYNMxIqhe4oO8NohYiklcf563YgRMZCRJ7Vm%2F3aVmhcUBV9c0Kp%2FV7VE5sxhE122GqPvFAkMX88X5Lcn&X-Amz-Signature=93e060c0e2ab9b64bf4b90936ff7324e980fc0dd2a3f5e00e5fc81a4362b0cad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOU2PDN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC4QtVk9KKkq%2FV2Bu3nFbDxMgY7lroq%2B%2B1JDT%2F1sd5znQIgCrOsGVXdojPai%2BVw4qOiPxnh9Z2HWAUJxiDMfNjyClMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAdkSUTkz48RurlwoCrcA5IMhSFNrVPSorcIJrwHjMdW7CudsLncHC1J0IHggpJDpCaFfbv2l9oXkuCFABrLQIDkWouX1Qva8zzDq1HsvVASbt0UxKU9H3mcdl9Iun7932L%2FlxAjE06UfSfTfH5dqLz%2BWTJ3V4YSh9qHylVHzE5LvZBapdUeaAzJaU7Y2yuTe1BEiVnUZ1uJEV3IFBRm01qFWvTzDFv5cNKW4w52K5GBm8HCsjKY5WLdijPypnltrunQ%2FQbuEOh1ELoT5cjib2zufG85hJr5ye3noes6VsLceAwiuquL3m2ThYWSYJwtvrLJQpxgaZF77APMI7OEVaS5MgpL3A51KZYCgudwIYQr1PE2%2BVqNTIx6RcRDPBbQBiGrPtFKSivhUSjVXquZiVzs3HQsqDNRcxLiotdgJos0UHvc4TiBjyLNGNci8vnqiBa%2FD%2FBS1Wn77NHClGfCudNAFmSrPdDTVJY7rUd03A1sqt5DvVlBwdYqc2M8EJAYRUZGl2alKDHKadvm3%2Fuku9g92jxdMASnrFfwfak5An%2FsGtVYrLc58wuIvGG27eDmoO1uhhEzVvy7GrUZHsCHksLw%2BaS%2FVAl8iVuZbozDDT%2B%2Bpp6GkgbFVPmK6HTR31vqtwqECLYpkjrGLnNWMLmjhr0GOqUBNM1NrrkwWyFJx4LcxBjbgvdImL88gAnJcOmbE2H00ygsVUI4ZJWMKjcICGKu8LUov63NG%2FLomW3BGPIdNKZoFwtEEZVMcYQZRL9RXDmWJU50etwwehJF6psykKo3Np75lS4cHHNnrvV7LLSVi81husn%2FolDLltdRj%2Fbj1EBUJf1e5XRU%2B72Fa%2BJDLJtohrSaPpFWS9rhiDh%2FOyxDIFAV7p%2B%2FHX0g&X-Amz-Signature=ebbd174038db9b9d453b6c51506bda0d4cf5204c971207116cf916af837f57bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
