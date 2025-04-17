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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BQ7KOG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrRyVLNvGNiQtteQVcZkR47E55f%2B1TRgQABCUxSaCJKgIhAKmEvCgoni6CCMaedjgRjlozRcYZu6Jtrz5ylvEnPaLfKv8DCFsQABoMNjM3NDIzMTgzODA1IgwopkfjfqZhdw3WcG0q3AM2zy%2BvGK%2BSl7j0RlHUq%2FJ6HQrUv28FSulXdnnfZdE6BiYjCvKEOIWbp9%2FuRZe2v1Vt8oX6LcMdpR6aNUPyQmXJOyXxQmSSo8RK77XVMaF5uSHXwdGOr4s7C1BJ3H4VUYAP%2FyBxjiCoL5h5KvXa4iIg5bWlauf7RDkC6bGZGDtnnVtXbMrYhviG9dhwrhQIrDuNqHrf05s4wGBn1QzCvU%2Bq0l9IvHfProBhi7eu0%2BuEfKGBUqp%2FKuwTQYIBG8V4%2FdBNjAg%2B3K%2FATsty0s3bo9tltGgwsNCc49H27Y1uCEa5VhRXpWVx0lspFD4xcfBQRIe7lYmbTwp4S6QbS9egxTBoOFdpr6S%2F7MWLGJ1uvLjf%2BfhNYa96t%2FeVSPiKSIpSEMcAbdpXNnCLEJo4%2FeNHHd96%2FRwiJkXJlRCS6REClq2Er7wsKJlVmz3SULRJxV2%2Bwure%2FSWXT6C0QDd5XxrGaDTO07BJ%2BuFHPv%2BgAQjLUfaSN5hfouIsN10lj9hh%2BQCw6%2FRHc6N7YdLEZGNNiqxIFpkcT02cl0HmSPTCYkczUbOPyq36gk39zbGdZWqn0bX9KsRXUOKR%2BqYpYYIZoxiXjsTLt1zlfuNkMQVdYTBTOjGDjLDQr8hE7T0hY9SXUDCElYPABjqkAdIzBRpVwzToWivXH3I7Xp%2BdCczVb53h3jbQqCipiU4Ieq8afFyBbBs5LQNT3yi%2FoS8yeQYeCQ7QkmN%2B0XmPaFUeRKJlAvwOmla7uf8oJwBXLQqJ574XHWMIWPzYr6lD9Ueam%2BmY%2BeuU5b91bnsKEnztgZXdHCjEZFQC4QtPNXJpW1crwogVTPowv2RZ9UOggsE3CvMMXVo00WEmHJE4fcK8VLid&X-Amz-Signature=f4aa37e178b7a5b6e39d78b08a31e164c9e08ccdb5f296b1793accc73eca0229&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UAXB7X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9WHuLKQnvHRPeNlU739NMzL5KfpZv9Oee%2Fkvu8iTTSwIgEwJEqqmfd644NEzRJaqdGg6OLYEbpkozVJWkFGI04pQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFRwVsa9CU0TaLUyjircA1%2BzCiOHecGYivQbkZSz749PYaAJbTf%2FwYwxJC7b1%2FsZOhp0tMWLub8AJ9V1T5xMaceecpxEi%2FBexjDtSBxZcIW7SbOKvSoyWuurvD8nqFw2cJ5KUVD%2FV9b5yw7OlM7D0myqUmJHu4hdCF9MQjdgkyMoVblL9DC6QoE%2FFafbF2rqnvx9aa%2Fmvlgwthj8sssN3XkEEkQyK%2F99o4yx7PK%2FlySUEi%2Fd0AOZjNfAj7qX1kgCaEskhLkaCGQA6bTd5B4G5OjluSzjxtsLzPpjtsUwMjEa0hHf7j9p3zNXzzT0sWNdxUtu5qLHJzjuK7As2k2fkWoTakh5655jSyt8tm8W%2BGv04BmNEwSJx7GWyL4wVHRAVk05Ch6EwXurjd3Utq%2BmNdYf%2FBP1i5yLUEYPURhfa%2FdiikVCyWzIGzvRc81JHtl%2FedfdMBYPK6bhWd8KwyGNXikIhN4yD1HqpLCbD7z8zQP3wXd%2FJoFRgovfd7p4Thf6qV8rCBk%2BMJBziztkio6RPlnWUJiEJMz%2F18%2F4Pcy8BXmj1j24jun%2FCNVG0fhiC1khwlEW1JdrMYHKjTWeoOF0niQgWmegl5EG77HxGE9uT6K85psbZqkIE%2B7mqHBD591L%2B%2FzDIhDYLVrKsKxGMOaUg8AGOqUBfXOwFkb7NryD3Jbqh9ZEHEnIDjvDqlfeVRcdUQtmsr9s4uOJ6GiFAx%2FjAhrJoxMTOxSffX3o6LyO33IcHBeoUv7Ye%2FFYVqo2kW0Rzi%2FGHf%2BQmXcAV%2BnBEkUb031%2B69TRsrWklzB0U9%2BIrLsqoKhqkzrEVUW1YV7qcF5kqaWVHCTiSRYOFpSIRa%2BJ6DRJ1xWWvkDN86EGRIgDNsBbxHn5h1xX%2BMVK&X-Amz-Signature=70a4e77035ba892d2af06813a622cdb28428acb611d06e83c8629b0f0ee730f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
