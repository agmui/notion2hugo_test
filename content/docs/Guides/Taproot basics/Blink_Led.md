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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QSMFQVH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Ig831TBU3VgLqRp2w4oJaFLBVQ49Tjh9%2Bk0TPOuffgIgMOXrrRgrhRWu63Xh3ML1AI3kkfu7EDDlDZ7R7cxyTN0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9uAsj3xSy5fWTityrcA5iZrzTmco9fpjXA12LQLdTI1SrGVp8TnfxO%2Bzwit9bFBjtkJP%2B9YZzEhCZ%2BaV3SbR%2BWm6B9q1Jv8TO6L03ygifgq%2Fe2b8h%2FlWc0GV4fytkmvWaMh9Wk2kLeNYQTwMNbQq%2BMQStAm5hEWZ7QK5ttVw%2FavSUPNdpfeEHH1ci5iO0o91oxldFVVnmkvWLtAcNn5XsVD4zWABCFQYjl5zcohwXZIkqtxtqj7BhVdui%2FpruEKdIGj1JnOkVBSIefvBN%2BNp2ake3WXkDgyYbKB8JrOvFM3DiZ8cpv3oooDeAzCWVV8BsnNWnr8dgNwHKOCkE3RGmVN5G4kU5Cmpkufaj4KihGCas1y5qJ02pHQEG4ZCQsfH0PqfsXSiVnoyUlnL5TbTpJxoyGgCXzMPCsainEQBkOSpiDcOjV%2B8p2ebAK3EW%2FiO8dWBgyJyOOujHblVTXpdmla0JeBy3VX1jn6euIKvja4muv0p%2Fvx5t3v9XfBJm20jB9TXs6NsnGXXsA52h35HpG6YmG39IPMUjTZd2ev%2FaQ0515Z402im%2BGElMRq6jW%2FLvsigR0knwioicznaT4mp3uC0rFcvdF7vGbpoKWWgYhS4%2Bh2w%2Fuwu9GL7%2F1z7mzswV8WOFVCM6Nj6XJMKKP28IGOqUBwCYBpePNvCF%2FWTZYvA7XfyM7ViBld3kBOwkFxxqwcQNpQw%2Bwmx5eZS4n%2B9X4jVGRg6lTEaLGcxvTdondSbV%2FVKB%2Fbt8lWpS%2BtUIZbg7FbQlRY%2B44oYSHoo90rkE%2FpQWqS8IJavVZolGLvb7Ph65SfmLqMlM2Bngen%2FayK%2BWz%2Br4BO%2Bvoz8eJKaKinvxUUlv52Z3e%2BIoIfYMyW5ccNJ1z7w7BmRs9&X-Amz-Signature=f36cabac2fc76490238b16b70f4c22e87a07598993cc9d769397f6e2132bb062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A44I2CD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsjA%2BuNqgKdqW%2BoS66ly%2Fi0Ct7DDL9fD%2FJknIjNGnswAIhAPBgSERpcnRhlxN%2FI7x2MSNOhpQn%2F5YVuRhmg4m6SXaBKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlms8sp5glRsKd9XMq3AOewXsAqFfb17FRc7JdSnYn4wZsxH8wIv7sQg7W1PW5JsLQQwdPs8w9ZnO18G4wjaTNvaAu3j9DFfOKJl2q3EYZY7EldYlddkgjreLC1OgqC0ZN%2BhhiSOaU8Lbq6LLpgtopmPXhDtZonA6ra5zml6CLycitdRYrHnCgm9y8Np7%2F9VuKk6j2MZi4CjEFZk3t%2F9Hw6ntv4tw4ir%2FFVhjWJKI6d8JOus7mPu%2BVa8cAmMY2Jpl3Yu69%2FsyfmcmEBayo6sut%2BVAhN7EvonamgsLfJVKXk63obAByHf223ms%2FECJC%2B0pzbZ2irzT7JeqgitH7d4NFL%2BUEQ8inGcvVdpsA7cjOuAbKSGzUC3yQNBo%2F6XB4ZFxmPRT7xkChGvKKV6l9%2FYtKDkAZFQvWBSlsn8vprSMreW9pSDQZyyt9PDM8AreIEli0d8Z4fGOQbqo55F%2B8VrZJP7wp4emIVt%2FCgW6xqBlJ3ExztFZyUoIgS8ZGLwjUpp4P%2FHM2c6VHGDYJTILJB%2Fjo7rgB8uhwSfVM59YzpOdpjaHWEMMu4Q76ShdLbBCTVjdNq%2BY0E05qiAh54wl8gsQmhZg98fRnYTyyKlwHhhDsK7BYDWVxaWeebWUMyqaH9iFHyiYcjI238ez68DCCkNvCBjqkAZSu94EfCjoJzPuti4mEX1vcqGC8lz4RdKirkQ4VWxV3GxvdXJtOb9r9SE0frPlntR%2Bzy4RC6OVBZtR8c7B43kqncl00unm%2FYlXZPktNAKAYtK6mW%2BcZhp%2B73OpL9qR%2Fr4zQtBWv7Rwpc%2BqhyBft4nqhvomCGnI26wt3wmsoNUsBL01BSopyWdzurVD6HzF%2BEUYtIQuCnn22rhrFx84yG4UF4m7N&X-Amz-Signature=d3f421cec1f305b7bb0a15cc348602c483b3b2d12f3eb2f26fa06c00e6e2d05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
