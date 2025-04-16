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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4GV7PC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUa%2FGorZFsKJssNGDhiz1ks1iShVoNmEw2asGQ79NG7AiEAnwn8cS5d2EAA7L9GSfAHlI8AeuvvVcfMc3jQ1cDSre4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLQpULnYdECoF5LMpCrcA3e%2BHbQX1ABH9tgptpFHU7di73ZvQ%2FMBTuqBHp83Bjwv7bnZYP2QIsLp%2BEvWWK0u02tnIR%2FhPAl2Lwb6KQjd7%2FHRLqYiOepwC9SaDxY%2FUxTBjFrYZv4YQ4R8IyacqBa2TlYERyyHPCO%2BnJBzM2xgNE%2BLb4I71drNXJkQh9ffGaAJqHQKHJJl7VtqBt3uEmNvF2dfJPU8ep4gZR%2FKYAnxGaxvkvKA5RKx7YBVHIC02xiwHkgriLRHah0Jn9UHFc9NsejtM6xHnZ0f2p5s%2BysyfRQ0wWcH5zocu0URYKtSsDnMA2z6bjonRTCVQcmZEWiz7GlIYYL67x5WaZzV48gbWMybqcMig9b4hf4QFO5vGBxtMinHLZ3Du36vsASFZQZg6ILraNHXm0eM%2FZ94YN2Jqpp54H%2Ffw4JO5Vw2IsT2C0979yARQAIYxHERXvIVjSO9rFX6OAXpJWs5gQTu5Ru%2F%2Bab8fyW61k%2BRx5n1KLQV5tab1EHW75hx7iIMn3jbId%2Bkcn1pnuCJ5ZMrWAgEE%2BZgbt5Eyzl27qAiqHSovwG7cBzi5e36ZHL%2F4ECBQgSWzi0RaTMWNKn44gTXKL1u3pl8orE62TPt2seVcjT2gEdm8olY5V38busQG9%2F00Bz8MMfGgMAGOqUB4E%2FpfwZJrp3fx9HsIdNNGv1fZOjSBT8wAP%2BDrRowhmpHPVFl8d4QJEwL7pbSnbFhwFGqsZNYJVmjQf3JAFnmswV16Z%2BysBNqeRxkXMA39HLXJyuevl7xpf%2FeUgGV3BSWWIx8uVTe15xy2fHFJQrghybfSEKDorCw2ZBrcauZZUL2qKXIqRg2P00rBkW6jx4RVecvjGomUAh2K4V2U%2FFAuMKV0Z4H&X-Amz-Signature=dd833b06998de88af3962d793c393d86eca29554c4d779224cd8cfdf70c4e794&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7XWZ6J%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC8%2FLW03zzwvEKPEUXKMUc6tQ41xuc0i%2FJqoEWn4dBoAiEAsSlaADsAADh9vLS01eYZN6699MRe3G32jAtJOo8KR%2Fsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKijjBlVA%2FxHFaCjGCrcA8Z5w1%2BdMinYjYHx9F%2F6J9J0vRQYei8aP2ReMcZckD%2B90J5HPxmU8G%2BrsR%2BblfopM0NQzmrCjlAqfa4VgLH6BGaHDs7VXAfQ7basbFLyfIkOiHYPmeWFCGH3XDRVwN%2B8Opjf17MRp2F3EM9T9WJrpGOUEOzPLgL8g2WKCQSaRcH6F252%2BE8to4Oe0gKHC5w6maT51NZIym6icA6Hy7vC7N6HUXlr%2Bq%2BBFdVONfixIWI4Kgjib76mFBzZcleFlH%2FY2ur0anrhoiHEFFarOniZftLqWyzpG4oIZ8io2cnhiNgMqYq9r1N7rfS1xd5XiS%2FfJ43g4YZO23Mg270BjpzSnJTct5uSS73HfnvmEwNaIr08NPvbrb%2Feos0AMQdsFF2GauqZE03LcexAGH1AdGvgnCCuGPyyzxKaFBwV91UzxMLkxMl0Rnpxu%2BMALSQGODEs6xRE21RHWurL2lbZj9qIOiSpDbhEZth5BtS5HJGl1f%2FEew5FPMPbF3aajlXxYAVKxykAKjyHFjIIbYIn6pPmIAhh1SD9O51Kd5VvYqBL15ddYRDPfMmMhydvtlCaQi%2FzKCsAXh%2FfgxEmz7cRLFTLraChjittyqIuCQxjg9fZX5K%2FAxsgtK48N6k4qtW%2BMOjGgMAGOqUB%2Br7n24hH2KeSSy%2B468KeRsfHFZkTQxPfM7eMnlXOHbB2u0HK54GVrhCawDe9OrWCR5ky7Vf7jTMnERbY9jk70I0iu5L5qnm1%2FpAs2UIrjdk48juYkRTnx0vlqe%2BTlqC%2FXUVKImUraQkp8wqxHzqTeUJqcraYUgk%2FLzWQuDihONgBoHGIDvevBqHyxLwPcWiXKbVwicFmtoqxrN9YZUPOlRkO7Zg3&X-Amz-Signature=3986d6bcc9d533b30d805a7b01aa7786d56b01c017293d777ec8cdc6f5a56197&X-Amz-SignedHeaders=host&x-id=GetObject)

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
