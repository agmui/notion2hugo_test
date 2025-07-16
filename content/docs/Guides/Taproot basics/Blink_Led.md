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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WTREBR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDB3Vs0NF5R%2Bjgu5%2BJK8F%2B8BK8WHJKFehof6A8NRGoeRAIhAJV%2F9rhBBjQpmNbEybI4BezXqceJGsrD%2FarY2hX9wY3mKv8DCGQQABoMNjM3NDIzMTgzODA1Igx%2BH7Atv7AKnHtkbBUq3AP9oWNWy9oqSNq1mqfFarD4z%2BpMhSuV3DUUgBnqsKWQALm9GzTzpJZN8yps5Qyva5uLQtq90wUd5NnR4eOlKZ8cqp%2BzKvEkz4bHfxrhWsUQawwVk1LleyzH00kfBWfgtl2gqtjKlwA%2BklE4tvtrZzlBTZgP4zxEDrqbVlGo4%2F1VWY6oDsdOeplbgKf4HJTOmCV5oANqE5ASMJzKulj7KIR9tR4Re4w1yyIyeAHnh%2FPo29GOuJTVu6mK4a0JEa%2BMAzWuwO8nYzR4KXT36QN7hPN0aLqN2nvu3yg6woRNtNrX6zIws9iMa6LlZhAdCzKmwctWDdr633RbZP8asP5xWGXNIp%2FM0GaS7iIGrPkEKDdWe7yjvSqocUw%2BY0i4tQcHENfM4DWnm7JnGnIZBRd%2FYsWi0feeDZqxmWD9ADa6v21VTaAaAhfk%2FxjkDGiFRrB88mYpe%2FhaCX8kQ8a%2FpmQIuoL0HQvgphNoL8mcxVxbJRkvYaA3O9DshjukrQbsLH7DkqlVZy7GeQw%2FtEWYfl1%2F1g%2FXFin70pg6%2B6%2FMw8M7uwSE84jdPL5KJ%2FzLh8YfXtrurTjFKBUq0lmecjx%2Bpa%2FnEZ5zHrgTTyh15gq%2BoTjsIl6UOLh%2BVqEYwHumZEd9gzDG4N%2FDBjqkAVfzLcCUjpKEDOmFRgUF3jcV42E0IGPmhqMc3nPbgser7ZrkYnPtxssMgViHyjqFKuLMhZ5kyFZ0IlzSE%2BNGlSJFW8edT8N%2FtU%2FQIm43LUJh3nhFS2xMYnBSkY8SxzcjYTbkQwvJQPaW6X%2FchgOAgq25xGE%2Bm36Zfb%2BBfL58OG9D0P963FtFzU03m4OsxKU7GZLkUIYCh0iMCUgGVbF6TSn7SqnS&X-Amz-Signature=b1fd2d63829f8caece1322037ab1317c579921cd10ab8835b9e412faa5c09f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EYR2AZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCie8%2BP9o3YZsXo21cBGYFRFI4bfWxQ2%2Br8dUzke4raiAIgRQ3OuPUWit8Dpjwdc7l32TyAWbwYN0S6zA9ikRIWljMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDDlRFWN0UbZnZfPglircAyOejnNrNDoEd7jxs4PDVLWogq4Uy0fZlK74U%2BNp1UKkg6msxe3u38%2FJ%2BWaGVHsDy%2BZARkEcMmCq%2FB4NhDuuYDL9593mVteZxAkEY7cMaW1l%2FevCKcci45hMLISagSwQPqUBtdXXlcnEeTENRV26cc5kEBh8Z0vKdCgifQZA9FdkFh02mro8vYLyQRAzkNHonp8sXVJHh7SlirYYFvcTzuMjBE8xCs9gdrF6DKxxuiAH9W5uqn0JWszCYwLHwd92h8fISI9u%2Bplf4DOh2%2FB0OG6jDXcHnN2EkacKIftnMuS1WcrEl5u5Cj2EoEAeIp0lizGoMZadnkVuDE71IUY9VR3Y0b5g64aEVftTQ4AhfOynMFjGnH2dWlbzZ4F%2FtqB6p5lJbpVQuCqUaEtfgL0vn7HxoCWuyckAlBS5JisepNYxJWzNXSAfEIPXX6%2FvX2s5OlHOy7YlR4eOxZvnwExVuvDXwXAnzdhiw7IB%2FmC%2BmN1PjF632TeIRsouUaLamRonDwzyg3yDKi2l44FZS04J4HFPmBRwCNq1kY8oDn9aPPlt1%2FZ7RoByaJCCQx7YBhpX%2BVM0FNELrBf8bjdthCgSwf5%2B%2FU5kADE4b2OqOjRnNLP3eZGH2gSicdRp0zUqMKrg38MGOqUBA2aV9d%2FZRVbEynx%2Fd9Je7WZNd6Aj8lhw5vKrFprx7T83sLrK3TdwNKWR%2Bpfvf6X0zgMvWNvy4fnXk7ROsAcalB03HSsAMEYVwU5eNxJY5aRDUOhToXlikIv1aOPgK8w4R61VOPc2oz6t0BHfAGgR40e1GqJuRHcm0q6mZrjVT1pZwXThyoY%2Bp7U72nEtnZCT%2BvL0t1UfdX4pWsx7WG2F%2B5uN68%2Fh&X-Amz-Signature=18175a7e015101e5649c7a7ea3723956e67c4d2dcb828136e4c5e406ef8fbe94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
