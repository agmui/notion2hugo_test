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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466274XO2QK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEp%2B469SwuyXX%2BmVqE4yJC7TGm1bkJ%2F4GXAOSujddbUWAiAVw6yZ4nOkqCCXFNbufcJCignPW%2FH%2FMpdw7yYTM%2Be1tir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMiomS4Z1vZiPfHS2eKtwDyw4Qarb%2FYFtDllJkKPp20C8ssy%2FgIUNjiZOpch2gDNqlag5bWLxNG09%2B7WdUX8TWbYEP402DDb3T1HjeAD%2F%2BQD55BFAN8VSCZNiWlSut6j9%2FF3nh3pXSilnfKPZDdjU%2FDHoZaaCcvp%2BYJuzxbKXajjwNdT2zbce4jbnLaECrcrYv6rtZHbgdeTnCKGQeKD8YofZ8H11bWyrDnDRA7T5m2mwg8Kdc1yT3IqhtsXSw9v76Pv33abNYdMOCef7Vyphq85fY97TpBCNSswgwRPY4RQaW62H32KVw8MxnwFV7zvOqn2Mvc4pVLaONqziBZjlFFKoGqX1TMlMo3GpD2VW7AW8xbA5i6BQ6ohGaEUWBYzvt786AS7cgc9rMc4Qgsbgf1fS8PaB9deXCm4HGTJM9pUsyNrlohuuJzv51qY7QI4SuHUmPF%2B6aWVh4g6xc9FqWkn%2B%2BvP%2BvCG6%2BODSGXppm%2FMhihSpppOBL%2B63U4nhdN55adKehMg63BooHbXVqdoWCFZqweDUaPdq7Ue%2B%2BvqPK%2BiwWbMjonrGxuebscRjjfoAP5NqyoIRUHi7ZvmATS7oeeSP85soDxRosfY2KYX2h1OYVyKR5G0BHzETYMSIrGppBzyPzwqlYAUTMyx4woeGqwwY6pgGfi%2FJqswp3na0j6voGV4W3GB6XC6qTb%2Fcn%2Byt7uW%2Bso%2F8202R%2F9umVNRA5WvObm2G6jBTl7OZGETEIKzQKsQgbCEdaOhjSLW4W1DIrPVn6%2B8g8kNNtdgL%2BWP5p4WBM%2FXBJy9X3h6PLxmRt90XXlxH96T3ZEKiHM3AdUPc1TgqjRVz0AMXCmHb3moA0ZZobWdT04Bj2lEe303bvNT%2FFxemsX6wsOJDR&X-Amz-Signature=2784a8cf443c7876a451caa26567c7cb29aeb5dde90736f3ca5cc54a2512121a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STD4AIUI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIC5yILPThai%2BU8wkz9kKfKMlMEmarCZFCDdj0Ux%2BBwtQAiBq8jnLJrgQrCdvWZ7cYmRn0M3cBuc0taOOoeTq7YbBKCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMFOjVZuQqbyk7mWHLKtwDdDZYCXZmDo%2BqxQN6Ik6zmIjPDbywYKGmBZFxksn10dm4PrGv3Tk9W5apP1P08FnO9cB2nkNXZfM%2FzwsEbxTOaert15cgYjGiON3c7p8CKAT3th4p6APWHywIrhFomtpECKtwEIXCgYIf2NSfF7ZW4eBlJGKE99e958PHZXHntWQfORPG4hUV81maVWfwzfkxlDGM5qOfy%2BfDKUF%2BWbNY62QdiNyEH0a5YYrKvMXAxXF0BVLWCLxVIaoLHEMkKMvu9qXjDJwmB8DxUTTXw%2BYQkxhGCTU%2FU0BTJPN5c4Sg4gErBW%2BMLZyeHU%2BVh7qc68E51o%2FrPWHEo%2F3Wj5oBinMclM1cnEmEQiC5YJMHkEmD8N3NVuzl8dQ5YrtRtOFEP8eL%2BnuVXbUvG3sC1u%2BBn6EqUFyYF26gkbkRYNXLctI16q3l9E6Igf8HlXqtV6giUFOpY6xVgfmpMeJ7Ave%2Bo3zTbsnTSfCMxvJU5rsDsEPGxkwh9aQIaUJrYlP0S4UDqPhcBaoNgY3clM6Wi0JJQWp%2B5rbe5ZDU4ErR%2FX8H3n8cGEdKVPbSc8fwe3y6OjC2%2Biuzrw6MvYQqSvFK8a77ea5%2Fc8%2BymRheGA2CVbjHxSP%2FkTm5Rc8N%2B9nDaNcGlFQw2M2rwwY6pgGjbmu54SCvBDs1f9UzBRCaVUuLj1cZVIbTFOgp072wmxkKgSpqcUvNnFCUEYzS%2BaAVOnN%2BRPkEvVMd4%2BiaPZyzWlrC9%2FAiyxEQszv299HZuVaIeZX38zbWDRP9%2Fe%2F4crGWdoKuqvu%2B2zOeI1IODC6diuOGKNo18Ie2KajjrHbOzq6SHYQLMTUa2N9p4Dyd7unTqG7vh1d8UDXdDXZHMPx7bgXwrIRv&X-Amz-Signature=4913d5ffbac896e09676b5b097c0b639582c9cbd934222dcd6f19346cca8d48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
