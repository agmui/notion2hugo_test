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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN6ZMS3G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICU6dhuKXOnbc8iXQuGroJRKIyOAzyu0kY8TYGcjCC79AiAgFpav9aNqPOFCK8TnKCh2rZr0FE2vCEp4gs1xJp1pESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNsoYq7cmvDZhpFcKtwDKJOFN4Ddu4QxwAbwtek5ts0sdo1I0MicZ7aC3Bz1awnLB5BRZHs%2FKimsFLXwGQsTeSaBwiTV9a2XQ5p1DyhWBj7nnwvpS10aWTedDxHBoFqme513%2Ff9384ZxyvFxL6ZH%2BMaPgOWSH6YftT4tZf%2BFgtZyElvLBUKYlMhWlNsPAnRgZXmSiCET2arkdmtyvawR58hgpzj8tMOTcD8E0hE3p068b76zCI8FsmkNbLo9vGO93fm%2BHqj55DtlXcuC%2BcSoRNs1zzwGkX7HCobsk2NCnA1eZZqfXTKGl3dbZBClUxohFQv3a%2BWuF67fxgPB8P4PzdO0jbsIZPx8Ua7Ot3GiuDDX4%2BAjPqdSHMDcHF7Ovf%2FscrnaNdL6fMb8HcBG4nHX%2Fxv6dbXAO93oeMBLBClDmVhrhTY7MgiYudYn557vAzce4mf3ppdjtKj2tTMnpLOndyQoNVzaNGhPAePoFMdMM%2FVd9WNiOifF5NCiqHzQy8gLh%2FDg6418F62fOceDG75ijztX6bzw8m%2FOvPUCyiXSktZbpP1ZDDxuMD4Zu%2B1NE2%2BB6jqshEOt0o8n9SHjdGovFFF9z3AqnAM%2B4g1vjNGVFVbrg3jp8hqbqpbdpoBP4tp8KJ2JzaY2%2BGEAzGMwg%2BzAwQY6pgG2%2BknTbSF5aIt4DoNOsa%2BP6S9SyaMijSRehUnxTaYwURqK0iNSJNCeNAcMcVh0X51fXFT9VV9ZaEGdmCmjXHKKqlF3gDjcoaIC66P4ncq10Of2mikq8TmTsn9OJHayaoic9ck1e5ANYXwIFrrRDm9y5%2Fw9aesnqEs5Ug3r5lNJ586DIHeMJJlZ3hYxGfQIj94fjeSvYHNDWKe62ZR%2F0qdgGmFaw%2BYu&X-Amz-Signature=4201f80b84ebba190b704932b7e61f0dd7a3367f8f491f6f3a00ed5846bca59c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IPTPGGO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICFJmzed6egcQzDIcA3wrKmG4PRqjzr5bSXPK%2F3Zjpz7AiEA0Jz2tdf7Wmojl%2BwKK6oeGEI46r%2Fny3Sjaza0zEgrWs4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Bo3z2Z6%2FBeXYjwoCrcA6UQ2ZnNqUda0GR9GvXW635ktN8%2FRy%2Fs462zgqPvqyt0n9Bpi1C1aXFhCIMUf4q%2B7xRpZZrPff%2BCI6sqDv4W0MUoytAdk2yxrKfPtdxDei6BkYNykrOVXVTWbjQe%2BBGubGZJ7kGxFRsiyeJSBu0MDwDgYYMh8KKPP%2BTvik4R9RxQ1VLbpdshPyhuZ8B0VTEOz2JMUVbdvAgWzUSL3urusCezsB2%2FmALLKEBs%2FFuKGuu%2Bko3M5igLNVlXZwQ8jQ4paFygb2fzKll55Che9GqhMM%2BHExpoum5XKRhFvKgXyhWprzdkKXzXEPn%2BsoH48gAjfuWX5l16GQg6DNwOinz%2FpD1drUlU11hA%2BlAkVDBKxTbThpj0618O7AdTf6X9bwt7F40a%2BK5xvjQCBm6tEq126yRoF0F3Sjb7aKI7wppgufob8UUlJvA2Pqyhc4YweNqw8Xg%2B7WmezYuFjGTyj%2BAxXyxRe%2BDeL0N7d4l6OEUY15T5dpjHbs%2FpUaLCdqvIWz5VAgdBiPs4u8vZfmp57q0SOfW4NhNy%2FvqFwIFjygQZJ6XEMlV9yfY%2BmxeU%2B79wTLtfjMKRoRttem%2FG0lWlp8xpGKSS3GBhYAqZggHsGJ%2FDWgVg6UU%2FOmwUyINivebiMJ7swMEGOqUBQeAClmhF0S%2F1wLbtjf%2BXexMMKb%2BvEIjeR5BlL1b2Mocj9KJTLNaEaf11D%2BKoAqRUx25Ytt46%2FIDcwsqlUZyXxX9JnYXqzPwGG7CI15IfCzUuokFjdQWqXYc4MEtphD26o2lwgE2IPLg4HcGFtaz8l%2BiQkbPf7aElZ4Dm5%2BBIuinVUsMs6knX96A%2FJY1nXsXjcOGbIKE%2FJdl3H4Uxlj6R5xQwYKx7&X-Amz-Signature=07f28cdbad27425e7ab70e491fce8c45876b95a0358706d2b7d440a9ae338140&X-Amz-SignedHeaders=host&x-id=GetObject)

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
