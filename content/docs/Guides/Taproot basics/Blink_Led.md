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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXVTUQF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCWAF2XPRohNCp5vKEY%2Bc6mYIzgAfr2R4fCZROy5ahC9QIgUAcAH8UcxjGDS8dElW7cY2RjeDawNhpr19G3w72gFr8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFmIgi5wOYHTqH7O0yrcA%2FXZgCvdmfb3tOipZ32J3DdsjU3s76tgsikgllXh2tC5hPti5LwTmIByXgYCF7nJW5pFaYiPzo5F73CizmTCQOJow60mdUBGJYqUALK9w9TlvLQz5p52zu7nUkyDcdaMfDpzX2%2FwGqUBIYYH8OSr3dZZw7r7%2FwAO3A%2Foq9i2mLls5ntqkuQhOoYD%2BRWpsxKHZnllCNNn%2BQz8aZUJRtRUuaSEZuiy3yA1CFMJUARi5W%2BppGnvkRuns81atWwpZ2sNP3odTfFcNefq7XJOBlG%2FBo6n3%2FIjnOTZR7ygutYa%2FGeSXVEcd%2FDH7hTMBvUwPMARvTfTb6Zven6YjqiaA9K9i3PRcOeqyhmBzWOx%2BRs2KUCw7xeHyC78wdE1mjWamBXDc3LJcTF%2B9Pt8Lb7NCXFhTvp306mDXSC1Itu8NfQxt96Vo1hgeXt%2B6ZxQzomdZHXOi3qlFV3uiqA4Hb84R8nfy417qEKZLr9MMQlQkmE4UrMt0qZhOR5cQA2b4C2ABc8b%2BDYcBWTwPlIdmxc%2Bs2zaR7Q6CxnLLx6vGDohV7kmodR%2BfgwABS5gn3pbXLAP3RyYowWXRyJBBFudnatko1zBnRM1BYVuD1crHAqNmIWCUSb0pbNFC9kw7CqvyRWWMPTng70GOqUBRbEV3KsFF8oIZfpKS28OawDe%2B6XU5%2Ba0HTjgzvhaBeA7cuoU3EtXymJHs3alkfmBYa9NWoo7dJeuxqwXkol1IOjQcnJcCMVuLsYWp5XmRaCFxmpRJjTdN9Rn0DlAN7uvQf0XLkBrxzLX21QK4TL5uc46HMpAl17%2BWnTvWO15O7FWuS%2FqnZwChqCTJdq8TidRHYhGNH%2BgTxpkUJNkNvZMbmnY8yc%2F&X-Amz-Signature=acce6a734bbebf57213b1d149f332f40ac59ac171999fdf68d5e5b30e0818d69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3HRVLD4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCID%2BESO9bQ27fXfBz9tjuRD96UbZiBUlmuH%2FuOrsF83P7AiBzbhV7AxRGJzmhhwo3tyX2Qde8naZRfjsdqS6zdfyerCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMUW7InyEc9UTaA9zfKtwDTlNQ7ieswMMHukCKKsbcAuTkCwJV7BCSaLMA8QvZf99BcQhIr5hZgAPn96Wca8d%2FIDxMhPvWPYOazBErDNZuBgGNoHM6FZ2uadlTZp7bG%2BfpZ0OW90kfHEYcH6lLWv1EsgUwY8LTIAaKJf4491HmYLDTzs7WHxjrOhkvnmgWgksGtC2nOXQF4XvorLj1w6ryGoe3Td4HZnyNeCtW7AHfG2nmPTxJ2fA8bWNXPA2KPfRjgYDfsPoNC%2BBrtSO3dx9QWa3nSCSp2hW7u9s3qpjZqnVVyPO8O7Rgnlz0%2Frr1U7iMQRUFBIQRmQfRSlJ1fO7XLUow%2FmfCr2qar2IHt%2FzxhAHNqshP6SEywzTtNslGeiT3CXqbun%2FyM3jgrKDcXr9PO5Aaxg6ncyDkvJPkoxv7McZrZgJx1j3mhREIL1cxydPD%2BoiI%2FXmyUKhpbm7X3R5Vxi%2Fyv9%2FG28aU0NKFzAHJm8KwyXzhUfkort0Mk3bYcJdu%2FkP85k6SFmVzeGIvMPChGfoVIGtThNvumEU4kSgwfDtnON2Ra6hfMqBTB4VAmrRVRa7Z%2BUcMw%2BQa5aCwB3vsZcvl10kYgcXYhHrAcCKTKgb30pHmc6fMQatzOSJrsxa%2F%2Fbt6dc5QQGQzujMwv%2BeDvQY6pgEC2kbo6R1lsRrcRZ4kWRwV0U%2FNdiJ1DW2sV2UkTwcfruwxhP6O5GQTRrH%2BMmczjaoBbm8CyzCo3EBnA2lwLTOuVxh83KscT10b84V2QhxSDNht85qJEMsQcdxAGdJobUsz7wdGSVbec16YN5d8HW9oQ1eq7WuzAoALrwJHnflfnFREu6tPLSicv5VcCeDEb7UCh%2Bw7FLKnU6vU4gwfPJ5W1cm6B7Ce&X-Amz-Signature=90a317041f601679873b14f4e59b6df165ca0f9d734a8f288509161c7c013c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
