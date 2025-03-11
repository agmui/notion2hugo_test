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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATV66BD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDEmT0P8WRoQcu0%2FFS6HlAVh0wVbMBqlC8GGsyG6iC%2FNAiEAzq6mFsE6DUyvKw3YtCBSN3Nru3S96elvTrSmGZykbtwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1YsyOGBZD%2FQeidFyrcA8GXwV9zzEo2SiAqzP4G9JzZ45Crhy16IWA3b9Qc1ktOqZ7h9DoEKSMDJje7gqiTa1DiukwTnRuAXOLDI4HOQSxNxs8tzJCSs1qeCIaLD8m4AQIy9uuME8dON1rnSV2PFadKN7WkS82Kp1TZhwrIxHIg0vSfeyr9%2FtoJfGgH%2BH2Br7pH%2FLztnOyS2qOblmgzaQ9fDdayquyflds4lVei532ht8kBLPFLkiHWkU0d4A4ZA5cLemBXTJaqHfmdV9ByrTz%2Frv7kCcUKiKExccp9W1UzyK%2BO79btqziVQlA%2BK5YUcBFiU9pRvW5lFXi96Fk4wZ5lUZmku0zKXQJ3B%2BJkHWJf5YEQNNRdsRGlADRi7jbjpL8Jyh5naMw%2FriHm9Ue8UF7CrrrRtEO9F4i08GZIQkBwYI7OEFDycLYIEmxvaO5ssc9WUv77sEDNXLzIj49bWUbUiNIIm0cs4xlzT25XJDT5J7jZoTrziMHb5xsJf%2BEv69hw7e3kG%2FL2duSnqXmESOJDzK39UYdbeg6BYPocrYWUEFRMKaSwjhFFKKfM%2FSxLst%2BBfLPujS6XGYJoM%2FEzUmZOBtgn4GFUFgIKn1j41nOOjnTfLMP%2BpBtmNCa%2FFpxu32kSqpF6R7RQtrOMMMnKwL4GOqUBRO3mDWJAbRsnVIvdJJZz0Cd2hS5HEoAL7s1bXC1FcQolGGTWNXJw8C1%2B4qubXb5rmBEFvEUPBKlLkHUNhURBi1CZu26H1EQ3wXg2eOXrYwtdAl8YX9vZ9pKGO36C3TscKR5ASwniZE0o7ByRPaP16rqU%2BPsgXD%2BJ0NSVAWlb8Ieifvyzxas3FutdFi3o1LBke1V%2Bp%2FtVhgGLTNpd%2Blea6Qam2liz&X-Amz-Signature=062ca13e200bd43a9fc35471000b75e167fdf88fc73fe0e9d645cfbe3834f24a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWEPMRTJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDYh%2FSpkq1BQZHTuRtieoiVUvpiwHgbtZag9C28%2B%2BdeLAIhALKFac8IkwXwHNvK%2FViEaWd0HgXg606fd9WTZj%2BBwQvVKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfXx740ML1bEZRT94q3APChMNp%2BnFM3wiOugP5B2bK0C16LcwfjnbXhphrK2hedRGeHbq%2Br14g29VkeYzV3wUStrXNlNmbapWVsMml%2B1J14YuCXpG4Vg10f6jIXtNxqZNaTUgUeOgluNFvIwFCMJLNTwxWDTwqL7%2FVQyKqp4R0b5jGi81mF7PI%2BVFLdQJuVbXk2nuiXW4gulOt67n5Pgm0XHpSkWn%2BU2baNfG0k5Se5A5gJKyrU7IbAYdBqFTsY4PTfYTIdXS89UdxCNjKC0O6WYaxHNjSUsz0CMLa7xHyU38D0Urj078Bmv03ezclBN8aBbdNneZ%2BKRYWdIT4JjJl9ODx8Jcc%2FctyhVT9%2FQOdGBGQXRdS93%2FCLb5kuBpMxWUuU6N8U%2FuEhtBj7AwUO3e61B3Yx2vVd1w2oJaTlYZTo77G1QALF%2Bx1ZDXpvt9L9sG%2BAG%2Be9onszSxKos42GW1DWG0iXJgh6ToCB54kuUdxQdK6ZGn3zg1w93Q3KH4ENeMoo2HFdyku4NEE5uLeZ2klHWLYmeSwHRp1zF9CSGzWsoPwpKVpvNBfRV34G1NILY4KPD6mOhZYTS3Qda1%2FXsPl3Fha9szGHTaOxn2WYn%2BSYbK8iQVBsrOUAc4qKT1wv0DdKCzUoS%2FNvImLTDCXysC%2BBjqkAfFm9yeo6bo2L0uNz2F6gV%2FH1oe4WbxM8Vk5uAVbOJLLE1hm%2B2ZY%2F%2BUmVdtxN%2Fsj0c9wtsMBzVDogucIvZ9%2Fp%2FDDjEKYkgWrZ6jad9PbYKcaZ%2FMPZhkKlhOiZA1VKatfA4%2BfddJXJHsr2vtKWo73wfVXqJC9LMJiGUzzDfziShawGOj5k0w4Gh%2BEDpYAVcOGJ9an21%2B0OXVG3MNavRtTvG9M6nio&X-Amz-Signature=0e6b47ce4fc6ca93dd9567b0abbf30ef000cae3326373f4f210e3be49213d197&X-Amz-SignedHeaders=host&x-id=GetObject)

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
