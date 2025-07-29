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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4UNFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFL1UR8%2BvUZoxCxGKRSOGnS%2BkhfdYdrWt6IV04eyzxamAiAd%2Flvys%2ByP5Cs%2FGDI2JBe93UEZANwO499pw%2FPT08ZevSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7cR44KcnZw7rHSm%2FKtwDvwFJyAacAuSw3ip7ieKcODfj2Qv0juiTXLeNidnKQMN8qZGDagyEYe3GnL9u1RsFkZXRuGLOCzjz%2Fz5QAR%2BGi6Z9jRLMhFU5nO9YJmRsZXIZwhgKl5d9GhYnAIRHm9r3tPU9LkvZyfZ6KP323mLWcOy9WjPURGLKvtY84Y6B6BIaSxT1O5G6gy6ARCuvVzumO8klMnDR86DtV019IA5GAKeEWnLCnMWMCIb2VHQ3WCmSMWCfxFsJmj8GlU%2B7F8UZH1R9pQmwSke1gAeCw3XX5%2FKnF%2BgQHK03umkj8XIJcm757fzCsUiPzkGfrtikBjGNOYEfrvkBh3a7ztP2cxk3X51MTYRdA8WIaZZZ68Eoidf3rhgh0ZC1KmkDIt3Sd2%2Bv1%2BfaRc8ZCL3is1LrXM63Qqw50Y%2FgNXM1wJHx8KmeN63%2FmECPJy%2FmT0gFR%2Biwv6JTDC1rbapDech4%2FFtUJ1b%2FtUFZ8eMkW8OQfyV1xqbN7AqBsrnjexSnypaFEaHRZj9ATKv3B67sh6FYJMVi1mUP96oL0M3ei4QybI3Hi6wiT3mzeL8O%2FKxSsynHRwdUyDcZ9Xn3Emqf59qE8I04DwLCOpPyr0DwHJfAJm0TgkIYg8d1hEuEkCxUmcObHfkwrbShxAY6pgECv0ktOKCCT7tkv76NoCf%2Bq%2Fry7MMUUHZiKAxggGrzgYZ%2BEK6qACjgiioGC71XcwSQARVqE%2BSR2vFgz19Aitv38TFSIfWSsMGdlbuocuv8Xa8e3pGwHc4lQQi31DN5cH%2FAN1gOj4Qui%2BoWik0%2FdOgLf%2FQg5nMppwVz66Ff8zJrFa9e%2BXDOQK%2F8nWCOKtzyrjarL41Y8TlOVaG9aUf2L8XpeL1hwBwy&X-Amz-Signature=6e490613e89c2d40e41d9ccf798fc03fb37083ac53bab600cdf8b85cb26ccf32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFOWYWP7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDPUFiMVgQVq7au%2Fm255vZpU0cJJDZBreO9yDoZwhgOPAiAqhXw5GgCCRNYEsoMLk5HUHG4NYiWF8mgkj38h%2FRAtdSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8nfvNyU5n2XMnFcKKtwDn2V86wLngJQowT3U93rdVzlrsARSpGLv%2BKBTS66ox%2FJSV%2BOBoNhmC%2BXOvkXwLM4VLPzYIefNu8jFEtI%2BDfxTeLLah8OusLPVNa%2FqPpF998quiiWhYEQ9nBgJYLCmSdHAQv%2FLovxeN8FiS5Q1eC%2BURxT02j1SSUD4MRYPLxhRMAScNKAzTRFJqt7TC4lP%2FMX5gBVF3vMUMqjz3yDQgOkaxadKDKQwTkuM5TKmBIWyf3MQJW%2FIU8W8ZAPtBHHZ5HOpvxTWajBzhagwtmxfGUa6G7vwkJP4ZR1BI8GQASQUU9nyi3tcgXbb8v4yJ9zWFSQdL1GmiY6I%2FCu777LXgFWn2VsE%2By04%2FL%2BsHPgTdh1KJwuJfA5KCoeXSncIAp5gbVIHtmkk%2Fb2jNd%2FAVp8llL7duYtkwJIFf%2BjkxUKcJSEBfAUlmKW6l6crZYd4jeI9EYvNdMwR6f1fq6q3t7JU4fDnBj8DnFHcJSDXSjUgq7uA2JpD9eCN7wnvsmn%2BEnq1gEiO2X%2Boumatyk03jkQ2pQryV3Xn8wpjSt2UrFqyejXpbJLOQG%2F0frcmoWN0HjFUK0CiTj6ZFKrWE0hKEb520z5N3tFzuluN7dwAaw3N9fIqFA5VcyT7KQo%2FH%2Ffk5iIw3bShxAY6pgEschtiB%2FsfxibTNztZPUE7gZ4t07yfsRapo%2BXDwBuIDyYHTS13ZJZKntlbf%2FZE1%2B0h2Q5fAKJjmnGmB%2B7QZrL0kK9A74RPKBRZlfWoZIgSguQxxSvGIg0izu7oPtzOtznSJOXr6ZPlBVGf1aQTZ0yEAXM%2Fsn7LYmHQ8GgHGUrtChH%2B7ULrVpXCFhRNY3nNiN9nhAznXrfA0tsjib21oBx%2FNLjIPP4E&X-Amz-Signature=2638164816fbe10dfa4fece70fbc990858b3f6bf93a134aa82fdebe80d46a6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
