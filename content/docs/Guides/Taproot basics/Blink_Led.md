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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSFJTFAY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcKnJ54O6f3%2BJ0i04Sz1CN8iPBxwgqL7Y%2B3tD4o%2FcwsAiB67y1u5p3M%2Fks%2BERlt9o78xCfgKqpLHqPtFttoufLHQSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMfrmv9S9uKXprXC5wKtwDGsZJggJ52wMhZzntWcfhsuUwxW4pMAZN1SU5szcALYuJdBv1lBmYg3WFHYPAQCiTL5FpSM%2BNlbmoFYUFHWcXMgqsVJh0JewJE%2FZqrkO3OJNqu%2B3NYXnlqlcN%2B0j20nnwlhkJPIH1nsUY8QYxhryahOzpQihiv7jaJQXG7QfkSOebnZmHBJHvLLQBJjN%2BhBwcU9v4fNXWtdFvFXgH1Jms5%2FlM5JxpOJw3mLfNWpu9y668dGnon300wfzFP1u1pDUO1KNfv3%2BAa4Udhb%2BN%2FTYRV87WvtaTuSGO200qw0vmk9LAnWOsh1yeiT1yt9VKoa0Z3A8MAwvtbLTWiT1j5DFyCtuxV6sA53kVwGl4Ee9NO24z%2Bzc9tLG%2FVCrs6E8NT6xOvuGNfT7Vt9hMCPV0uIDcBFKfO%2FUgqkEjihyZKEdfvqKye17qzUsErPt3NDIuOvkPvuALuBlsZCaU5BKszYa%2F%2BhAHnIJET2qUFEb%2BL28%2FJGAbo7frbKNvHca3bpFBzQhTbf9abLbsD%2BDrUHFNTDGjtaX3nDaw1B8L5qWqUpOAspMy4kMTxbpWEdmLvtTipOHRaFpEnYA5AkZ5IdWcgPJfxry7NkAV4IWdbHE2OG72VtbxVZ2EusvtJ2S8MkUw3OfHvwY6pgHHqv%2FKVa5pBC5Z%2B0QKjSS1KDTJlRk2MsufuJXtdo5JPul4hG7cacIEHkZdBc06SXwNEd4L22%2B6UBYRaOTgr3UKf7Fe%2F0V9GZbKWKoez1Lg4vIpUsJnhB4Xnag7exTjYgp8DEzcL3xSEIrrIuImDXh5qhjVdxLVV%2FFMdkDAtIeCX%2FmvzNYXHUuOX1edz88RivI9A2HGhIh8J%2BlLnMXN2M0lvdjP%2FhUz&X-Amz-Signature=11e35f24abfdac6eb72a82f01de6d38bcc72947b316b4f18625a146e85c51d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAU3UEVP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQGIJMi1WSILadRAzCxfiAwdvnBX1E3YC0EN%2Bqye%2FXHAiBX9ipdA8Kz%2FFv7oMAaKUP4zNmIdDkJHYg3hUFbyxCcnir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMig0xBvCLy7gHtpjwKtwDvMOkjVC%2FWfdseleUNWyHjYOb2tsUTDjl4VCpIRGLngRUPwAPDpeblo96rLSBLOb%2FdxuQOfcHYsPBJN3Dm1bpguVH4rJvQU5N2XR3J8Nght430DKDV95oCXYlBE%2B5E127MIidwnV%2FREaSDqobziH7egqTlI632pY25CfTd0pddNIaIS6oLKqZ%2BbLgnGzEbtZR3Z71AmfyAdA%2BG661HvQXJno0F0AjOm54I7IP2pmof2rPv2AgXnyqsPpeLJcim9QFbr5lz2R2f3yEWrsEuIOQy7b%2Bftpm3v%2BOrLJHewlEh92WVK%2FdzYdkk7wJO28la2Ps1toInqnopdQSrmfU69uVQrt1Kl0z%2FQdz40VLWlfInll3axPW%2Bkrd6q1qNxXLvmWDeTtxQ2C1piZ771aaI4ZX93TXq0MRvGdZfE4VAHWHjoD6C5nPmJF1HwDmJ6dWfEbRc6Y6qNZGEAgu05zrVJzinW0LKibrQV2eoT1w1UNSEMNypuxxzh9KY2LHpa%2F%2F%2BV9XQ118lntkhMDRvgrVd6OnYS29PL%2BvrlGEeIzwihGr%2B5snflHyn3a5OJCtD2sUCwGZWiDQWZlEHAGELV1gi3tizdi1f6tuN0UWHkyXECneiBoMcZGUXeFVGyKMEW8wluHHvwY6pgEuIt8Qd3RerzxgCTFCd0okk1Iwhb4%2BegnBEKi7YKik9xGKCKpwASSN5P0LRj24C%2B8rWuVoXtAWjxzph4J%2F0E9UxXv0I5sppN5PYGmzAbmiOi84sgIZB5Ax3Y8%2BNrFYqrjCtQNdy%2FeTwtP6SVtkgbp5ZpRWiI7T5YQicPjO8sF3kTvki351wPyYwlyqDlUtwI0r9esi1ZixnGKhyNFX1F0OtcLmDm60&X-Amz-Signature=63780800d4e2b3fc837f7cc5caca24de267e47ab9a79166166abf9aa4a2887dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
