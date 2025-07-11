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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XBS6ZT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaK6V88nHnpC7yFGsK9l9kRlYktgQ4EP7M4YvnDf9cuAiEA4tbOXBw%2FkkGPBRxRlbjbum8rvOp3PTQ1ghge7O1aa38qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLumjh%2F%2B%2FyqiFeFTQSrcA6kY1%2B%2F5t%2Bb3eUA9yobo%2FrMpIIo8NW%2F01gsD5tm5UtmNXt8NoXPlGYjtKcXZ0zsIT5EeO0VL9tnIkYw45i3AP24y2KeNqfN%2FJmm3sEayz7V8ea7AWs3B5lzLOYeWNIxMz38kuOWEZ857MAd0o0ase%2FtaiWd0JYPBMOjvq3rd71GrgkVME3GqGjkZ1oztPOrt7hCoKQEqo9RTWc7eOKyuHBTUEP3FkesnvG4iJhg0md6QxDhYfL5bWj0Z2HcWtpswI%2FGwJiMhff%2FOWX9hlecxp8MzmUcE5JepFajsXpym8lc4CCpd%2F%2FK3GHKUxZ1opzz9Ea4dzOitpdeq7Y2zEmrwxudutbNISaK7MMbktcDr1IdN1XMsesOx0ImMJq7OovtCG8%2BuKlIXYOPwr4C0mXC0D0qF7JvsrM0OUi56ZZ%2FsMykGoGLJR%2FAFc2Lc5Al4Ix1h9xtz%2FEYxrB6yy48vuJQagyA%2Bvra8yrANDQo9G3eb7TjTIQbclNHrsWkWhCaRVi39hJ5Q3g3bsBBSMP%2Ff%2FUExTdFWowpXqflU%2FHNeJs1iaoRPlFalaJRc1Zs%2Btn%2FNHBh8ZAIvdzVUQpGI%2FbsglqxVUQzndWxXBOGWljA%2BD8fwuvV6KdAq3xPUuoZMntxJMLbSwsMGOqUBzNX%2BPBgh3FcPJOKgoVKMeO5ScsoucqvJEy5ssqH5R5Kx4WL%2FYLzfF9ORdDUbLyjw1k3FAdBQY8SS0YB5LzwGAoLsHecQsk%2B5GbfYQSulhjEXYm0%2BHp97OLEvYi2WphhajxplgLesllX8EJIEcw3smXIY0YWLxviPRNYXM3iNmZEWqF9QGLEDJfrm5kQwt7hNX9cqK6JCdClOFfVuvhFkW1oKyk9A&X-Amz-Signature=ba4e386e5b8ee4a6019a035029239822122784e4a07b0821acff05d2a6f49ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655PSTNSC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClU35WRUBu12%2B4GNUVYiF40DY466BcAHdwhc%2FggAAwQIgNgkj1KCO9YHIbfQl89hoiIVHp6D7j0XwcwDDNFjwvAsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYSccGTDW%2ByRtnmvCrcA%2FG3WR%2FHogI3%2FeQK%2BIERNQ13tR4sXVj%2FunLWqr3%2Bs1ge3o8EkIxez8BtPC%2B7lMEB0ezttB%2B%2BAWbNvPklpcjIp1idLNHYgs9WwEVoWyIg%2Btxja8l8yIjmecEMkDreKpjtSUhylJZPE8HX8f%2FvyQeQAa6zsT4Z6kUMGRMrD3Cn9CZRvJX3qGRaXtYmx6K%2BnUrGkqaTpu%2FM%2BS9vmxVKlrcHgsTMcEjbMPAGoiYwEMrFkNxS%2FwbkoiEHdWuvh7cxdKEUJSoNW%2F1JpT7tNnvQxtGVSzncZhYDQrkIrao3l9ugXU71ri4aB3%2FcU%2FPNOmSEzACN%2FBWSO9BorWZf577T%2Fb1uA6RywNYORBuYFleGWTZZgUDqnNT0BT2BWDCRZi4ylq5bo%2BAytitHsW2U8Gfgp0Yp%2BDm%2BJqAAQpdO17i%2BNEhrHcTGdakvJ6eXECzAeqbxeWR2PIKTAQN7fTpEfjVUcOJL3K3avXVhtXnklLAIp607MMWEU5rKEPw2FKHuodAdVh1LdhXS8I%2FKLpn7wTi6kIBtmbuMgMvNTFkc09JLuhFJeX5lHDkXEMmhZizzdWt1pDkhEkBlSxAA2G4bsMp1LvuAaMQYcfpAbl6gsnGt2YXjvupdXjF%2FmFM3Sff16hbeMLbTwsMGOqUB8qUgv5ICh%2Babdgzd5KXaX7wvJJzT0AvDuXXKVC%2BBw2p518WQukZmKLocvwWqIpEEMghjHKjlmDJFmEEmGFPPXrXCN%2BXs21XYYmV3pWgLxy3h7eQxClVlgLAx02NVeaIZWbjucFDj%2BeEJpTnY8OYummC4PuABRZdNAe9aF5lh8yd1n%2FBSyxCEOc5gnuuun5JktO0MqHsGh5X8evci3%2FsvMHmWIae0&X-Amz-Signature=0fdd1a7a45d54f1db60fa8e9ce481ae2118637f52c0e8f9dd765f423e7d2f87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
