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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5X3Z2S%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDahgMUYfMms7I%2F7m8Wu13eV%2BHACzkdD1gM8DTbBhpgcAIgR4CbD5OLsAVDHx5YB58KsH41zLYm021yq%2FUgOnqh5%2BwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLVHmZ8nkf%2F5UF%2FXCrcA5tzIYrVbexdoYGGwRrll3fNk15CNJGmkvXwIV5aasJ%2Fl4ZB8jc01SVSHYNZNmR9hUT%2BYXIgmTTnp7hUe4SS%2FHQgVvmtXU%2FONQuNDy3vxV5Nbw%2Fk2vP%2Fh%2FJ6QojScRHvQ6NaRZEPkwTs2su8yPbt%2FQ8eCR0E6N2TF6ghtRgfLskEkz%2FkfA479lVhOpm5x9RNuZAkBtyWbzsudnZiC9oMfatSxF0B1GI2fFPPbweUMBoXpSxD36vGvyCvxun%2BbtcjK%2Fz%2FUkPeq5V35%2FRbZ7l5p7k8h2p9grKroqxDMYJH8GCrRHishFTZvABmqcYjX1R9ajJzZhPQYWJPq6oE5Wm%2BHZeuKVB%2FDsRwYR%2Bfr98S8oQTArX6IBpxSephgJ7XKVEn5B6FBduNzfWul0Eb%2B1ut3TmjaV1GY8zruFL5did7FYetPw%2B%2FC1p5paQ3U3BdqDCaUDyzSS8xKHckQlAtMcN5Bobn7JLDt8Vgl9lCROG9yTV5Lu7dInZxacm951yQ3pbMOUNjTk%2B%2BjInuT%2BeCqnVPwUTY2%2FtZ0sDHUN22UlZl6Zvu69OQTjI%2F9nEA4McXPCJeh%2Fi%2BYCPsukxRcl2jBSK8L79mz1GnVJ5A5%2FxdZN%2F1ctHIH1KtTgO7%2Ft59BeqAMM6kgcsGOqUBteYM7fVoUW%2F48Z7aSWtfxXZvVwYdJEU1UrP6bwp%2BxMbDiwpKoJ%2FptpFApOB%2FG9L7nttLknmdCueMeTfYoCwjFd1jHK4H3PE%2Fpwzs5Cdfki4FvPIDvWIWqK60KL6fcTifmbEFnHMVQF%2FaEIpQ3YlakKUNgLUDJ%2FjawW6fXgYnIhSm15aohpIlCF%2FBw%2F96BEEl5bmgW3wAUwrrlqqGHwjajGgiHe6d&X-Amz-Signature=ad650dfe63e4745e1abcd9eabf4935874150f12b5a73db43d4b81dff2a9ac2d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LBXRR6D%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKhnbYh8ey6iu4qbcAuKWqIjXQ0r5OUkx6ZT22kEATugIhANiLbsz5j7vrwN%2B9x3%2F7QQhKIjxjL13D0zCEunytgv5wKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNnxk1inOT%2BhMxbMAq3APhwyilGntoq%2B4A%2FWUY3tz53ZYBvV8y8iUQ6K8X5KuzjdRD3CQDTLLztWAyLnVzqyyjjvmjUPTWqqdDmRSQ7fEIr9vn0XDBztO%2BV4k%2Blnn5%2Fua4OOTgN1gqt%2BauxuIEgFobvbbyCDNvWNvfpVJWb8Z3Cg0yR9JnHdimUx87zHStJTDzLj1X7w5adQiXr8%2BMkBxTgwjC%2FJGGFckYPE9YtBqSCoW6rTEwvjuBF2%2FMr%2FNS103xc5prrAia%2Bg9UNTltINwsHVqrgh%2FwZgkVI0GhfBKVqrgGIej3JHhfRKPQduGwF7EfsMtM%2BQR71p%2FJDCrdWatPJQzbRX1bTCQpC%2Bmz5fB7d7daWdiFWngvGllQRsIDdd%2BcbG6Hv5o7wUN%2FdUYeTeJsNm9ssn5jpwecFV%2FDS46EuUQhp4OQhXcBn%2Bbpk9MzAsU3qwYNjoNigb0ctCBxeB6hb1IZWAR9T%2FrI%2Bk%2B9WenWVHxk%2F5dYwQGCNrhoEdALWOQMqYv9lQZ1OK3WBxK5rYm7CmvZJidJr3QhSEpzFmBinwvHR8DQujxsVMGddHjNzSjPyOws7%2F1WcVRG5GIjLVK7z9nUVsS33lNesMyuHkTldpWi286ftnLCmG9pA7Ez9qNNBs07E4wKhEBjtjCPpIHLBjqkAcs22Btsg2PYgdY7PCkJmZ9oHROdUwwydaFPs7nPSwQUYQKYmBIaR2nggdl%2F7m1pTCwVwvsE4z%2BC6IL8LAld0kvstZHqFY8bavKuFFSxWt8L%2FFxjhCmaamZO5P00n0zeE%2FkOsQWDld1dMm%2BJrVGq%2F%2FZ7%2FM%2BzRCQfU8zUYMOq%2BpSPB5DRi3C%2Fkqe0lJoeA5r2xyWb4amVLsNlSJY6VfKuTLxoHp4Y&X-Amz-Signature=adbc2d396759cf0ebd22e25040a331a46b003c0fd74dc5c1927696791adb1b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
