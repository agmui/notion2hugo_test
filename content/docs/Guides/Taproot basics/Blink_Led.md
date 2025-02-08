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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YZLMUAX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDmRYW0lD9Iv1hQuYbdAi%2BzG%2BVVJLAkQtXOdQTCh4jEEwIhAKe0tjuw4ThCCE6gqZNKV43Fu9xVHANFIq5a8ISv1SzcKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKSQ3ipxV49CyACQgq3APUfQ5EO79ipOrvMLLql%2BHaZ%2FKQ%2FNuC0yZxUeYYWH%2Be5qjPqYDtkfessMOkopOyCu9e6UoE%2FOrUJ9jBRuo%2F8sj9rmwhWJ0nn0hNpMw6cT0pAIooFD%2B8mHwhUBmYkXyi6iFyF81XSM7eNjuW%2FAGh8ne86HWamPfuYatPjx1fFUELVwYTaObdrSpc%2FggNjKKIQLT%2F98XRgUWQep9f9kTIDdlywGjiHikuEiGTMsSRLKm1FDI1aPbRxT3DhG4AYokPHQaDTtWXQvG0csJ0xF7MXPcGfNLAr3AQLkSqwnwyfPZUVLtPvzs3Ncji%2FDYthtEtHTZBmi9wbsLwedJKG9soJlJXhYWXdRJ9k1LFmrIDXHayh2C6KW%2B603BPkiNZBSroc9Y%2B%2BEnuszBVLQOmGFuocjlylOkdFtw2C%2BcVngg2%2BXW%2Bcyp6ogqnw0pdFEiIsEQcNc2dXexLC4e6oDH2F9bedu2urhBa3rETqLdcPZQ%2Bv0y19lWuJ8g0fn3W9qr5ARMBAJ7fmoCYasMyT0FFMZY7Lv%2BmhqzdI5yuzDqnXhU1FvMoH5iVfkZgM64w0iXilw0C%2BAslZdvvbTdy136QIYi4a7aCk1UvlFjqLNmK3qzTu0Ow1DumReO7G2xuiujksjCR35q9BjqkAcFeNmoRg%2BIZj%2F32pj67eIQheBpSj7fN8LOKH3780FVQXu0C7ArUyVp0XmyJ8vQYBYuO2TwA9Lk3p0YDF7he2amHE9knfmzDCN0KsJGSi9UFk0gF84hnWSUqeZlKeGYJ1ljet375kh8BurQ0bBgCFZ5BfC1xhML1wsGE3s005Lc9htbTnyvedRZJjVuh%2FlhVIv5H31N8NSVqtFe7tbR9G9ipazZF&X-Amz-Signature=38163795ba000c3e4478ed24de755193d38d6055fe2afa444f79d501a50ca84d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMJE33O%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD0QayIFVOZIEScSG0Hk39KBYoq8JN2sWKS1glWY21nHwIgewvA6jh1QPWflnWganjiu%2F3Ua7QbYJFVqdrV5swb%2FRoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8exKABg7J55Vf%2FgCrcA5IDI%2F11DvuZtaTg6Gz02S%2Fzy9xehPKQkdbPxVwsb1VQ4qOnzrXFbNtWFwYu4Q9Bn268Cc0FhxSikeaZN1DOp4vNrPADt3cSoOn6aM6ONtC7yRYv8eeddSWHZfrcmvBLV58t3fSJ5ZOm4Cf%2FozpsnzgcdFppsDZWwzwEdFTP%2BN0Mkpx8bYjYtDvpkFw222Vg7DENalfX68byu1oz%2Fyys4TnkKRvZmtt7SAqwCnVCCQPItWdYJtnv5Lgef%2BTttx2HXevRa6J1n52%2BCbJ0eKUjBWc0suBCQZ8F6oclMv8GxkmNDq1%2FOYyLHYZtcMAU4Va5o1FcYyDj0o99kEj62q8IA9GvPQVVjpk1C2twa4AtBf3QPo%2BCGctoY1p1J9JhwLSunDyunMrc7fOXm5GJccP5Bv9AXsgi%2Fl%2FZxCgjs%2FLtdAo0C%2Fwo%2B2VEaSL3Dn5baVayJNdUWGlKx%2BjEbd7eewddX0dSa7kwGS3fcAYNzbNSU8W7lMPVZyg7IuqniAlGq25LbMPF3n08MR4v9lWbSOD5P9Cvo3Vsj3pV%2FeuN2MUqujjIqP5qnX4TR0qvVmU2OJ1yNdtltkaYGtRJOXWDaYc0HDDU2tlOo4K94BtfioXmIz0KudAt9x85tzQbEBq7MNvemr0GOqUBDYGHeNqwnbRHQNEGcKPZlF7FF0OwBAZM%2F37Iks4KOSOhmmEYqAXEbQz%2ByV5UayVF3T7QfDwLbmuwhqWUSvngpzr%2FRbyJN7VdFK6p5Cyv9rbFC%2Ft0fOQFmVfuVrZIDcBvSvjBGDO5%2BubnRpsBWyAFKlyoMfuHCWTExf1kXZBDhwjKpLUhrvbwPaxRO59ini7Cc6M2PWlgYoH%2BlJ%2FZYIH6qeZrNvDs&X-Amz-Signature=577d26cf10453c8de5f350830bdc30a0704e75656b2a2005da86e97030dd23f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
