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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCVVBWXB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIF6VS31v68t6kHzpTLPpn5vfFldEipWH%2BbWJQPIxnLV%2FAiANh0q31ti1QuHWuc84c1X6Ooq0WZFLel7e80p6Eb2Elir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMSJ6kE6ZHeoc1vgQWKtwDDpxayOc58f9QFNXdcuhwQYkS0Ynk2L%2FYFPR8p5DjmSqYu1mCUx03onKKtpD2TOCMxhx8RKtA8wl1gr3xx7VLGIHVnkFnj57TqwcVwEacZ2CAA%2FFQp%2BTdkm0%2BeTJc7F5qKoe0xnbhe1GXYp91y9loi43qbTk2JQaEGbqwQX9r92e0usxP8JbaTiLCOAvxYLPeYIO%2Bb%2FLcUBtsr9eBxVjG9N503Oc%2FLREp8j0AZ4Kw%2FsapLxeVt9q4n1HjTvgdo0DEkxURxaEtYiKx7AHTJiZOXPgTtLOd6Ttjt4LXHAiyBHvWdwMKqAtF58bjUraXClvDEL59rqbuHukkifN9VUMjhJZFyH5LpQEMBbHwJ1H6BzxZ3NDG%2FjtOBr9RqY39kqW0M52dQMqYiLTZrf6rVaQOBzlSaPWJo0hy%2FjUeFksNWpi8Lg4EsmmA%2BfysvdMaw7jgT8Sixr4CeMJ83vr5%2BYsXL%2BGN7pq0tGe5p1YwcC%2B2Y3X76ZkQxBhJ%2FxCRhWZCsaz5XqAA%2FAQVfKp1AYvzN2s7h0AxdAI70ktEKQERmU3DRTFYgtCQ8XQXUPZktmk%2FxCfwr9ZdsGRlRAFz1PSG7YxTJ1vd2uROaRQ47K621a853geEAUob4wJtU6XFxUowgu2PvQY6pgE%2FpkziA53sJ%2Bqmo9QtgVXqlObCP0JS8qvSBwPWBQjnv1F3DvTDzyE%2FFuhKnW1%2BZOnZP5t34ozz%2Btz2HKxZ1nMd1OVJ7F5iV8MgwjkyKZj4Gc6U%2B8VLlZqTsVpQu1OZ%2BfRmSHUj%2FOXkcCFSyPUOFlZ0j8bQ7JpKLHhJs0fA8qx4vJkqMjsSukjbwUMyaqH4YUrhsPUzEAQvQ0f%2BTMOZPvl7awNBlxmy&X-Amz-Signature=14f676557008b0ea7b7e8d6cb258bd746067fda7cd49d696441a7867bf5f91c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFHHETV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDGD23GsEMJNc6q9w%2BbuhUkIstnO%2FcctvJJKQNtNtGHRAiEA8VWcjuA1jRm5J0eHA5MKGM1HIqkqeuKrBUsJ7F0Lwxsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJSfmQr6Va7ehY6QGyrcA5fCcEJnRXOqWOSzR4bPGUpR9gU5%2Bc%2BLIigax09%2FmOt4ObofFjX2EW6YA8TPlZ%2FPsV%2FjQ23YaI9RX6EJwOZ7J9Fk%2Bw43zIwMGWojXfjVFI7o4v%2FQPQkzj0tDYCkKjlZ%2FlHCF03fi0L%2B9yX%2F0xSUGiGeR74Gas0o%2Bu8I%2BQw9mpJy6oXFBwKo1MzkygLokaMKLMALpLVWsm1w%2FDnyxzh4jJOZczbVVuUj9BgtUhFPPMLkdAnsSJp80oO2%2FKpnVJuv62heeXp%2F1BKFDck2kyk4pWexboCLG6SJH02SEoF0nJplrU%2BZMPhaWdljFhgkgWyGak3zKZKz7LopqKrHbRDQozYmQ5lr%2FQuL9bcQpY1GpprGz8Qe4TZOyCiJ%2F54ePH9mA4bVIFIPzcCFPy%2Bftdi49owl2WgSmoGgqQsdYBVtsUb8EjYV%2B7YAuaxOlp68eH66wkBPu0BzbvaipGFm5MLQn3OlBlHiNqa%2FjUaFJN3f%2BYHD6h%2FoSdnSEw0x5HnK%2BmmlOqZKaii%2FZoPgIRFhfKcsFRt6197uvTtCi%2FW66BqRr7GOM9RT7L%2Bwvu9ms085XknRrYVrKspWbF2mnyguQcWezy4Hstppvsp%2FeeBvttF7J10Tn58Ocw3DDo5dvoiBvMLHsj70GOqUBkJLoRJcN4y%2FMky%2FCqC56v16O6%2FFABDW5tPeXQIyuMc9U7ALXxZRlnuMVxRoBjO2MwcsBB%2FXEuGdml2Tin2Pzs54EzgrBm6kkRWUjkXsGlxKr877GI%2B%2BLX9siouLJtGbrna9nYNypDuvLZWzppbHGh7M8QjXnB9l4korm5cidtRKtgzzO82kazT7JAR8vg4S1ec8JwYajHdidXkfp17zc0nko7IAi&X-Amz-Signature=d9db187db9982e94ca35dd741aa2293dac166e26162884d446e2e664b3353eda&X-Amz-SignedHeaders=host&x-id=GetObject)

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
