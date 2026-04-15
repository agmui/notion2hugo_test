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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUHQA4NY%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuSBw%2Bzzq7Gh%2BN5N%2FyfaePH4KuLmE7mahy8CbUUBqxWAiBYhIogY4%2BwgEI99cDfibJDYMaVVyReCudzg4dz%2FVh8dyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYySw9h%2BngRO6rQzKtwDTtxKLykdx%2FsosBeTMANLhSRlfmA1paBDnP5k1p0skh0bgxdKfkQtFgFOiWhhLeBN4SNYMH7HfC%2BeMyvFxCewWwT56s3V%2FT9XgpMBiCIxJXtufNlXSQRpZlRgKZINCRXCTWgjNW4%2B%2F78HdFBi5HkdqQaqMOA401gFKhOrIAUCuSd1J8N48tgucAz%2BfD4cyGSXggxzeuF%2BzH7z7PKNJCsKd%2FF636SJbdoQKs%2FhCny7Wt72IW%2FRhnGqVAtg79Kri%2F2SeUHc5tRZetO9tzODUOB7x1tVyfSyJZwl2sOUo7yVtyPgAWYILNjcCyEgKImevtAlqS5zQAtzGj%2Ft7w6AAWLgJaDbGXkgtwyphYdXlpghzV0CjUpvZv50bAAnjPaJW%2BqaT90GMNaov%2Bl789k6JhkJ8Eef9tV%2FZmx%2BhQeLmTV1SklwY0HpUXUwMyhhinRIBnPkBkiTMe3Sx50KQhYoaECev9C0KByYisuzpseFR86X%2BZhutNiX67JCnolpVKqeQzVUkrFuMhT9Pwkdy57oL7FiSV9PuATPqsxr0wEpdTBcIplllGDyGr9OPkpuy%2FT0LYddpHUnIv3EB%2FKFloRFRmqhk9%2ByeKGYx2Mz6Tsg89PlOEsGDnq9GJ6Oz4JVqukw%2FeH7zgY6pgEZKVhb9ttL6UZtjloFX3JGLueftrifa4dcYMd%2BCDiTc0ajCK5lUz3wb3v8I6svXs%2B5Ld%2BHAfehr6Uvl%2FgZeX42qhmNVwHMsJJe9owgfsal73kckssV4RglKBf65p%2F5g8ibBnIgc6XkXJdkv%2FrsYszJibCbdNsqWH%2BUot%2FQ%2Fe4qSZEmsUIfLfE8%2Bis8LHDjxNFwb7KaY34vbxrDB3Z0FCi3cr9q6aE8&X-Amz-Signature=2237c675f3e02f19526d5d091fe2e22fa24ee59a192ccafcef6cd77137b5f305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQBX6VQ7%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHATrjXpiLZDj%2BUukbtnFOGab%2F0q8H9zWWzzz4FVNNO6AiEAwdsNTlP51Icp45Csvci3Js22HsBFJAGR79nZuKOVH78qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkqnDaYe5KIaSiq%2BSrcAxydns9OgpjfGCM7Crcd6XlSlvrbNLT0FnMUuCExZjxkxoQYSQYiRO3DfV2FZjjp46XKqJd84BtT2ba3KffuKYs%2BQY9vepuYE0uorjiOMLVACly91BG%2BQaE9onT%2BSyQq%2BEweNq5cRgA%2FDcpuk5uleJbkKaz%2FtsmBghCqAvBZLFN2Ge0V%2BScC3KfVooUBuHcBzDRNjiKSPcNJNNFdUhQ7eWwcGfeHkYukgqbySGHEgO4S%2BSJ1Ed1zsys7EYACCgN%2FiuUipxWybyX0Hd4fOE%2FjWwZTv5XMnfxv0UEG4n%2B2tnTLqOTVLbyWJS1%2FrOArHqmeghdBXuPS8e4qMnkZJw63Af%2F%2B8%2BZTBvaf8zyj%2BqKonS6GZMnyOZMf8N462TglEo3e3lns1gfCSFhHAB%2FZkL%2FwWBUiBY7Hnpzi2%2F8PvHYLCTj%2FPwL0309Om3O5NC1W3jDh3Gfc1NV7BoIdvLuF%2B3v6EZBc%2F7gQkz0HjvelNq4HkrJjj7Dx%2BBCUmhN7ZdQ9erC8TIRcpDbu6EvWfOIFIdSCkynLS%2F87pdnxnXH1hbLGPhn0Kgyo%2BpOIsx3%2FrOTZhnQ7DHA88Ztso9RyfCS41%2FhWvrtcPVPoeh%2Fy54H5z1JQ1%2FuWUYDEDMI8jSFwk2kqMPPj%2B84GOqUBFj12Op7WrsbqdZAXwwOL4mN7bcWxy39WRT4MMHFl0BH3NDVY6QNqsh1sKP8GMHCeBIx0PiZpNF05x89riX%2FEYmngwiFa7V4kTv7sNqYodotH%2BR311AalcY5DkHA4pSFmrCdZOEqxpxoXznASvNJp2j40bAsMGIEO3oxSDR5L9tleoorFP%2FHf8PUCuHa63kCUlgijd%2FViVO%2Fjem2qanNSbe9ORz71&X-Amz-Signature=ecdb88cafce84902c74154c6e7b39a3a56632e56cbd8f67ef2bb327cb65a7f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
