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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPT3U25N%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7zWfzuy3%2F%2FGajKCrhOx9adKLdqG9WPjSgNyCCYfAgFAiA2bC%2FyjiPve1hBJ7n4tX5ooq1OkTdCEO%2FcE1a4lvyQeCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Xo5LY2h3wZTIyuVKtwDVHoObUgUospFofEbxodUUuWgAy0uEcIGDwl%2Bj520scw6REi7msKtZJcx1y%2ByYr7mOVpkhv9oL1qFz7S%2FlTLeheRvG2HbAgo0%2BGbZOSXllzM0YCHtf5TD3hkolJqCLy25%2FzFRcWfzTV9bJN7yKM4a2juxQn4Ovev59Hons%2BBtj9dQXQWykTXyE5dyAbwMz0JBY%2FxY0MAISWM21KIBwow0J0IFRoKgrCgRkq753b7XzGP3piQdyBEphG2hJbOorJWSxtUuOPAIltenbVKjf5aOIiKb8x7gqYQ6uK%2FfuRG67PGtoNGhLoRKSYGkDNdMbkBwr6JGWkj0JFmzZaUIoSHWQvt8fwk1JetnjRKDe61A8AXtvBBoIkQOpSM2d%2F0xqBOj3Y6diwnDy4Yn9cx6o%2Bt4XBIe8deVBSvuC7%2FENRgDm%2F0R3s8MEUXDZNxvGYfUcKWJ7yLwp8UQ3TcyFMYYwFOVTGQRvX863oOtukfJ87hOLn%2Fip%2BDmUhDrXkVRSGrE%2FwywaUBnymiQH7syJkhpwgvz87QnVWHkZBo3Pjtn5d1n7LMBuKKWHQMpyvSyKDNx0Jz%2Bk%2FZlOJRBHWZPWBjKe%2BAuHE1QJRJQYbelhlYzFyzDsmNL8PiKlplWrbYsBtswvdnzwwY6pgGS5cWQL6FPft0frrLMRUA9vGpxfgqHd6TqTNEEKRacmNR8u%2Bo2pKgbpQg%2BqmgIFnXh5DOGm%2FnytEKnsdnq6xFCxTydsw8%2FKZ9RD6mP8mvYUIUb9LYPTPSOLm1r434F0xak1gi1o3twYxqiU9XkWlBRbmNvadvteWokcG4J1HfBdXpC96QFg5OKrHIvxVFsIyOBMqQs5YQSBe%2Fmi1AoOeb11YMKJB1Y&X-Amz-Signature=0d8f8fe1a9c031e993d46380c92859541c1c22474f7fea79442a6888f150f91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4N5X6L%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRjgpJd9GmPnJ3vKBe8dBnFsRiFT%2FDRWCOC3Rt3dSM9AiB%2FYSVJVAvCbjy%2FlvB8AgXV1kk6JbwS8YhOs7QQ9mFxaiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvvClUjMQAPO5qEoIKtwDNcDBoFTkqhXlp7H6df9da%2F1chJyZMaNXE3GnMKUvQAsAvuw0HkuT5QghxVpNj55qonfDupoFQQgAJhgGGJYAo7LBqnUI%2Bte0BdApaK1bYGdTEEFA3CBMD9hXHY29JQCN8eV08ZUXwq%2FBTNQv%2FQynC7FxUw86AF2hKRuMuXzO827nMWeznuUDMXrcajdS1yU0U5%2BS%2Fu4bq%2FvY7C48wghvVCoGLj0Bkw8zJCLSmuN4neoaUrC%2B3Hgtz9FmOiqsFbIVXKlJLzEzeRqpLWBE67wD5WTcRxpAea5WtP3sATpufYgXc5nqpzRhncWuX2siu2bH527koIebR6pR85wMrKq0KmrEImqpyq%2BArIWv7RDioGobhO%2B7TzRr9n%2F5yluyICuvJNY0qNgdshl7aFT4oFwWMf%2BLaZ0AS4TeY8W9YdUs%2BmjZfK9dMbUhrZrBsMG%2BnzZ2OrGtpJdDqytKEqqFT9zbOMl%2Bzx%2BOPfn5v3v7qCxEMsUdZcFb1y7DkKJREaupv9nlnGAZCwUTZs7qRhEfKDsZcjg0bBUQ0jXnu%2BiBzTFm2pdIq%2FJXIDRRGwNVcSKFaZgAIq6NtC%2BhpesbJPI5mqIoaKetvUrj4NOIiGUnmsPGGVKTiLu3e9Qv%2BO9qa5UwnNrzwwY6pgFt5n2vhYDFC5mYIuWW03h2HQvD0tLh%2BkgN8%2Fd85jOYL27bCahiPGuxSTy%2BPjlBA%2BR89cclOmjOkNM88o65rS2OQ3lg5xGIcbokWhUscUAYknVIEVYxi5boqVGxhnZOa4IurrFyeO%2FvZjjNmdWwF6P11B%2BWn%2B7lpTdW6PXJRecF1bO81LbT7fqAdN1%2BoPLO7GupQ5IxczZLmQFHecnjyBztDDaZqkWJ&X-Amz-Signature=24e178bda1afa50c87333c582f41624b4fb6292effebb6dd75d47ec12b7e9187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
