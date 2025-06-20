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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633T7DEMW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhqmYOomJGIN5oa%2BUwcBpTrTXNq%2BZF2bcxwA7W58y%2FkAiEAut1p3DAb%2Bm6WQkSiXp19MEY2EX5lxL%2B1Ude1DGwXY8EqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMju5KCIntqllQ4pIyrcAyJVhh3nRoLcHR8T%2FuEc73APgTRJ26Z62TI4mNFgQPLaBtnQLCg7agwZJaUyaqglRXA3YAVbwHqjgtpEa5mBgHDWTwb6%2FmMK3IRpgYBYF2st6FzCTQVwknX%2BtZEsgyaku72Bb%2Bu1dpfrtxzdi%2BMc42zImJuvfqvMkiLuOIaBVhRqT9PmTwB2BFtJq%2B5UmsxlFw88XQn9E5Oq6Zo%2BoIsMoBCfuH7fPvJXn65Byi8SiXFkEGkwqRsGF49%2FHHumDFWNFoTSdfIoc3toPj6ReMH4IE%2B8ogGXdFBxjbChB24a7bWAeexAVTOR45FBmlrjZQLDn16nJv99HiMsRBhaOCSfOTBg5feihyuy3ogUDFXgw9DQT90hxyMHGLuXKY%2FHxb84Ux7e5xCURMkG8i3DhGe%2BuvIVCv9O4Hm481shmnv6pAj6yTGgQ3g0R7ZXFy2UWlFp4Jr%2FG8lqPLUxG6kecIqGQI9B7Q6pXihVVQtMIJAfWlfAPEGTsr0o0Cfb679uIygL3AxsFWs5LNXjpexyGvImTwfiKCehBH6r7%2FNvCQ1tU019QGsdXSmA%2BIxweCjyE0lTEFYfCg%2FdC7m%2Fg%2FpvEUp6pjr5BZmoltRmTlNWThFfD0xfRCrJG6yL7mUF0BOcMOy908IGOqUBEQIAhVjIDvKW%2BQCyovxa4is3VEIF5bW1ghdMwKEg%2FikmTf6APfPzusTpyHSoI7AfOFK0ZZDLz5wjAvy1QZJWrxx7v7qV7Xp1RPHz7bi84cRYqTQirmhWK12xwRPCZdTPkW6TNMkgSFtj2SXx6%2FqySXNhr2pK70fr6OpjQl5rgg1gq3LQSsEyedHT%2FldM5v4PML%2FlG9hfPjAYscEM%2FvrbEKZiTcav&X-Amz-Signature=155ab1c2a10fd8d66cd4237dbe43e110b2a578d6fb2386066cd522ff2d83c548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK56623%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNj5h%2Bgjquwu4TgHDH1yw4%2FuwPkT%2Fy9pvSrYulB8GWPQIgcA%2BrNKCxUemOzvMsc%2Bt7XfGAW4r5ux5obcp1fDBHJ4gqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTD9TbpS6uGcwDyfircA5QisC5YncURjy5Obwu9sLr7TNZPU2kOHxFLEhbqfNWMKr3puZFms82gG%2BTRJ%2FQEDvHpcEoEjSXlYA7%2F4iEPzRV0ADQo9F9NG7HAU%2Btf9GqFmlRmn65CHpWgl3fOm1%2BiTskWkhkWzf9Ihr33Mbhou8zZqaSqP3GhjiuOHnQ0wjV5tjly0l5cZjKwvYpXnWQq7oBFnIE%2BvtB7%2FKB8FsqXuVyIy0b8xqjKNdiCyLvSut4FEFkIxbzC8oCsz1NUxVt0e7deNzJHmBAOMUPwa1jbRk0iO3qqZGRDV3AXp5%2FXSgOoWEmCfO7Ean0y6njKaAndT8tgqGk%2BmgncNdhCGe%2F0zShYzMMh8BgMFxugrPgU55kcEiht6PvpYS8VSvOl%2FhlMeswMz5NQSPkW3C50K3rtS27drzRPcHZVcJj%2FVTaUGj0nBDP6Y9cIw5qUd12vSAjCtg3Jo7WubxtmaciR3QctULlahJQXQfL3%2F1F8fy8ya8rWLR9%2B%2B3m%2FUxF0H%2B3Uzd9xEHTZaACUZuynff6BPLOmRHHAIObE5%2B%2FibqqS5qkU9jE%2FaRM0BLSijp%2BrA9KDdhvxruSaz4o6rKUe9mlUuIFLX25ToSahsklcyMVBUMocrWJdAzvbbLpdIxI%2BtG6%2BMMq908IGOqUBcEhzB4s9262nj3mw5dv67ifYcf9JNqxEkGWJnt8PEUTYA3FRMII%2BixgeHT%2B0ANrePHGmZP6sMnDP5FsjNV8DbvIyXN18wBikrQLbNXRQi0C869KwI9LFe7BcLMaHTtsxc7n1%2FuX0nC10JjERRAa7KvjaAeBKLRPG5qdOWDYlCRiFE3nOpfqC4l4JFjxWCOhvRGs%2F%2BRbGNDbSNIWUWIOkJ0pGoKm4&X-Amz-Signature=530f336a9a682462ee63f9746c9a602bdea9523c9e0ef1ff7ea8492fb9a74cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
