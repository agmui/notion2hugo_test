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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAPJRIKP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDik8j6syjlR3RtEM3AhDRDj2keMbqtsFpnQEXxJdvjOQIhALC7XwvLwVlS1QGzC5dOoxD%2FVAU8Ox2sk%2F8SJeC45scvKv8DCBYQABoMNjM3NDIzMTgzODA1IgyQh%2BG0K1M52tX1T48q3ANP9Uf5XHhDJCtAbBa99xaLFGKBvyTGEmH1DpjBDf4f2EBjAYThuXVRaAoVkBfAPcyr7ny4RlwCgPGrUmLZZrshU1gKbT1SqYcAQxl1L7VRADYaB7IA2lrY0BySs9FGaoTB058RqDmevr5OGZ95MVj%2BE5Z71ffOMUcP5BRblaSdiTVn74%2FqXxLebJM8BYBhf%2F9JlOLosKex0IEYfPi7SDryf9XeBCyv50F82dHsHzDXHvj7hQuH9HPDlEjLKiwImXydoViAm3K6qT7fqjG0wB7r22l%2Fi6xN73JCGvvJ9BjzOVgbHAx4VKGZKVMJNrdG0jrv9THWrgQTjDS5BLUx2s%2FttqZdd6EYpzQMoTc%2FrzEJkMF02B0A2DfDpqFlWXK4rvG2A5kxvimEkW5btzkqxfgatDw4LOBMR%2FUSoekWDXk4%2B%2BLEZjdo5hVNWQikynfAqK64lTwwNmg0%2FCtUoAGsbZNfDv6NZFQapS6kVUcvHowKLNDLwz7VUOIpbYVDiM29RogNnUryU%2BYU%2BWUY3uAN78EwIuKzpvZRcn8b1j%2FIzT%2FvNdZDH7LxPDwkdoEYAWRnwTHFkWF5vzOhxqdByAdGy29lfWYMCXzX2Y5nYGsu4iOPnYeumnWX0tHYL3lVFTDx7tW%2BBjqkAausfjRCini2QRHFfZFv3z9HY5BqUGFqlJiOxjC0pJekoTdHlMIk7q1DgVv75QY62Rdjrgh3bR8habTtCHndatMwHXgeoOyyTRbmmedErnb6sUT7xu%2FMm9eTKdyyiAKp1wzKjJ6E3vflineUVv1pNzhZyM75NbUdbkesYK%2Fwt%2BJB9SlB5az4TEbtQXxMOA9gRW0ykgOjQX5V90LTWhO%2FwjFYXYbn&X-Amz-Signature=b3615c4ed969e8fab1dcb70c1ff151152500a01884c260984729bfab2f419174&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJIVSZOT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPNTO%2FyjYsJzUxj%2BhI%2Fu9K2zf%2FUNiaEgrnyrVfwM8GVwIhAK69wL3pfLvRRHqDFjqBvCirM%2Bwgw%2BgaG4Es2DfXd9W2Kv8DCBYQABoMNjM3NDIzMTgzODA1IgzoiYvXPc66uZ5mu%2Fsq3ANeRXuBIUe7jDBZ6K0KQkeHaOBSdMw4%2FCVNYgz%2BWAXzWnHJP3wInD%2Fr7L4XjDGCpAHQJgOrwoDEIliTVdByBzwpyA1MLqYHBgH%2BU32QdVd%2F%2BCGo%2FLcyZdniYeg00nFakfZy3PzGO2IA%2FmKJAa3zb3peUYjKGLsmDOEX0O%2B%2F14tbJ%2BaR3y07JPZ4jUJKigX2Vq8CgIP%2BSACeiJQINkKBu9aB%2FISjrHkd6xT9TU8RZnS3cPU%2BHJtvwCfV2uJAgAE5ZgEgSNUp%2Fms%2BXP6gZNgeB0xl8%2ByUTnCWZjbjiDoXXZfxJHwo7txVlDR8akU8k%2BxfKt%2BWjd0UAyqxTTiUhlYEm8QAWYadYcoGrQytGyKrN%2FiXxR02j%2FJaYextAiRUcwPfRqDNOeD0QZGCKD9LqBFy1kqN9mKf9cD3qZrIb9HFEOHyc%2F1HZXsnwT8XaBE%2FCHwqcadCtklrrw9LKX5KgmhRowza6QE8UCaHZnKOfpEzNWHeWjUBYb4JthmWFxXNNbiqXwMMlgdhRcc6tu%2Fjh7mt%2BsGuDx5269QSsuw32xQNgCJzpj5M93jrOwOug2sWmJeLFwH8x1B0GRxh7gpLnHQPjAoAbbsubys8fUKKxvQooz9xGWXx5VJNlwDVReRSmDDn7tW%2BBjqkARmNnbreuLhCXB0VSK3S8EuBR9nY%2BHWiQqJuRMtuj49BhpfVQWGlJCNHoip4LwqVz8eCXWhaxeQ0sni1q7%2Bxw1TSaY%2BIPJJ2JBxzzIPvDg2J9VQfxNQ0o8v1vAt5nToxjhEhb%2F0ERrCrRfr%2B%2Bm65HfV%2BuF5QM9Ae7qQ2eYNjdVCeFHudE0NhdOPUjbXOmQ%2BDcITc90QivRLBoMh83a4TFgDfpjPi&X-Amz-Signature=2edbdb06bc5cf55dbe393a7c432cf068507e9e20c36aba67e43b5209d6a91f43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
