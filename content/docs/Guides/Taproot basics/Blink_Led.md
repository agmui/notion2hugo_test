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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSER6RRI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCJul%2FVRWjWyhl%2Byaz%2F6hcQEF1cZd2tJ1ldCrj3iwq8IgIgbtTz5a9rOlkVUCimsTxBaT94rKf1pc%2BW3sX2c2VkyVwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4b1ouum7UOnx%2FwhyrcA23Te07RrH9Hjoi501w55WBEH%2F6WeX3reCsHPVQsyxzOB8bG%2FqDBuKz9iJpvGgIJ6ldZo14e1NZjSXgqpbX5SkPhNETRW%2FgV%2BHFHsrVzqQ9%2F0qOqAvATHKq7UvVh7x8RmcQ553wb%2Bu0IoxA5OtXmrLYpXcfaUAqutY8ttUHqV1eTiSW8G%2BD%2F30DkU2cy1uaG%2Bq64%2BiDFZT5NRURv1BP8op8FpzCavHnVeqdSD5brqRWDWZvQkiqfuFf33vTBe3sZLUfpjSoY0bm5oipDyuNHkuXRtSSwNRn4pw6D0n9Hly%2BqshtixeLBofnBqkMC%2FuwV4oRwoj%2FIqrSIXM27dXOX3vGtLoor2dtOWGL%2FeZgOEhd4MQXw2KIYUWEMtM73lWzFfdnldj%2Fu7zxqhNJShFS5tGyXSFAhbl0%2Fc4BLenp2xSCWY2SuRnrQslnEzfnszZ3zZozwRKQA5HnXqJWkcTsYA2G7UqgDZtIpn%2BDuPKAcyl1%2FZR7xtrISgVAo4J7IbKnD7UgHwYRW1L14jtqfDTZrUao04vf4%2BzKTVZKXFzO%2F6qWCvp7yX1eZLyiPfEsiWzFqQk930Rkxddg24yrz5Tmof%2B0vysax0TVsPYsqK5fSBxcx46aG3yqv8peIt02hMPLIzcAGOqUBoPO9YkfLqGtMhZIc0FM9zLwqeVDN4NTvoYVT0PB7AKw3g3NpFznnZe9sYbu0wG%2BU8KwB3%2BFJHD78cNLl2vt4U1mws6Ilar844fWVah%2FzlhZ3aGn%2FLUoZwfy1DcydHjiCrbcfaWG9xdCsRfmBMzg3bnbnfGL%2Fvpql%2FwCIgvwlTqOLOj3gjeRSvTNdFbR4tHEMfhlBr%2BVXL9FDmkY06ZKO66Xe33%2FL&X-Amz-Signature=ba6f9c844d6c93e29bbcbf4576b3855e9ea80e475e42be719672d53af2e42e03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHZSQ5R6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDLTseuN1Xabsz02L11HDTTnKD3OpaW92Wu45ER%2BM6QfAIhAIuCLajvBUG5QXYcKjpSYYHlUXDXGAsStwMTVRxbvHP5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxsR4wxDFdm0qgK5kq3AM8VuXgoHUx8RYee8SP2rl%2BqxFcfPNM%2FvmL3RrXvphMJYLylL6mpXvRBMxBMbLdMgsXQHahuORK5kv8lTYHblllQTHu4Gt1fXlFQ3xAU5dxmISmAIC%2B5y0aZUDl0yq0M0UaafPeRpiFCsOhVDmMHuevyvaA3o3C9taB2h2rBG47%2BUy7BEuw2rUjy6yIghHV%2BMgakafxa41ep5nc%2BdF2fkY7eDtcvAenAEzcKorHY6L0QnM7NshcTbFxAmHINb9dVKRUHrZlOFxQuf455Uz6TfLOZy6V8zrc5GWmnYF5eYxHMW7r0ZpGmRINioOygTb%2FvPZ%2BtYXnipZHA7F%2FpJ7EQtSr9JDOurXyemHuevKulPCemwQJ2m06OB3fu2OypdLHyd07zVhIL2Lt37wy4vWNNciAhZ7265Uh4yD%2BlJUU82FuW0m8Kshd1gy0zT92e1O9WVD5VCrBg4lOTLzwu0Sq42lm5hXfyPPTM535BluzwRqcx9asfvdZ6m9MBxZuuBSTTAUJpUI%2BSHO9rRsqiZn3fScBSqbr1iIPBQn208NijWOhl13KlAUQ1WxGQqUhHdanxXJP%2Bz72O%2FPlYI%2FjUANCYy6NSFS86NXpv3avZG0exU8mXhR1coXeVE1CDqodyTDnyc3ABjqkAQ4Yc%2FUKckqp32EnA83Hs7YHttXqv8PTUYdGic%2BwzZzRkQsG6pNdLxAFTPniDkmzYQ5FAryqbx8N1glwxy3ZNmr2w6fXbTIj%2FCBq1OGqb%2BCMheVXdReDNjLJ5wk7UfSbshqynJk2pj0flZ6s50J%2FV0XzcFVGP4K9h5EH7e5eeqiT7S1AWPC2o2i5ohs%2BWI8SazKfZgCG%2F3pDq9yWs%2F4fVflLACJy&X-Amz-Signature=ce9b8d4815ae0f82df59729923f64df8b426dc06f0b88e2fe733824e78e8de45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
