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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBAEEAUQ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu99CbpVHPlqNMLm%2BcKRNw4NoWZWIkOeUOvV%2BoIq75fAiEAlGD%2BNI7OM4KtD9qqJNXCrCVE7MlmaKCoE4s9XtJuu9kqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElZGByu8Nua%2FEPkiircAxkwWPNvBCseVfSkh1JL8pfmUFi7C%2BPEnPmhFSowRmdHoZwFVNmORarRRVhxSl9%2FvtFjDg%2BRdPPBhDFcqfwK0CNqFJnDj5AIOYJwBgwJ3l9AEOccOx%2BpUtydHQeLyKtUB%2FMV4AJjlTClXR5dujOY6JmkP4MRIfKjjvSBGAGfwvpy6VEXPTBfHOZvBcG7XeUxJsn4kr8Mjessez73n52z9EthND%2BKM2xxkUayI1hIHRw71OrZozAeDEvEJvb4%2BYzpp8XT3nSfYhM6joImLiV23HywCmxh%2BdPvOsenkz5ESa2FmottzJBsRUuTqqRcJpXj2MQuIYJ0qyDm6JhszifYAqERepEVzSOLeMbY5VSdkINjtm841hG65NcH4gZ2pKpKeeVJBj8wiDzTHPJu4Yn3txnRicgscmy9tcZ3tLbz7qFCYxT6ixBd6UDo2SuwKq22ou44DePBrjZlDQ4qszEHcKhCeQIC5B6cdpvGa1u07EnYBsA7uslBUsK%2FJE8EcDizVvKU2leMLxwiOkRw3wxlvYYfFfadV0d2GgmiE%2BRCQY3uGVwOrYTWEHbjlin%2FnjneGnbjkXxaoKe7YS0xsfWKYivGSggHAZ9pl8Krt6WBRwvUYRsxrBiTniuRhGEvMLOy%2BrwGOqUBHsGUbw9ogm0sEh3k%2BMXpjmJSh4pcAi3%2B3SGWlivIxTW9E6sSWPf8xFXsQupxK4rMb79KYMfzc4TbsJqhnzR20PE2OiYDEGRVAj6g5QDn1AnWLzagZgdv2z8CY5oiGF3CNJ4zK6AQIsjXIn1K%2FfeC4mly4CM1ttuGAy9igrDWcN1nZ1cH0okSJTr1%2B3liYoHYDlzXdI82JaEX%2BO9%2F5X1k6B%2FdzJT6&X-Amz-Signature=e9a390f726921ec29890e63c2a885abe3b94254fdcbd8c2e244dc7aeb80275cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLW7JHRM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoVjANP9L15oIdtW4laCJFUuX46Q7qmKsjVLNFNdjFTgIhAIlQZrxJO9eVdkYzrmueBMyWOL6Y7xTwcgpqTyKax9qEKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHwI0AVnsUdJeJ0skq3AOhnJn%2FtXp5VC%2Flm%2BOXi9xldI4mDYfZIeIG7VjFqwkgAIT4XG0R7BpJdsnhKFR%2FogEOBNeuZiocSd6FszuWnFL9rZcvTGkypxGR7sAVU3NqiBI3%2FcQDvkemIwHnDo1Uznb%2BIToQ%2BwD64cMJn%2BDQEmsgH7dR8t6NamRdYTR7vuqpWQC7U3C7apGGBtaOzmhyAg%2BykDYZRKTo4qla%2BcjSfCXn4qdVIMx0bOP8kNZDfo42T5JdSRJJC0z5pNEcJGyoiSVcznxEvePnBMQgERT%2FiNwmwSk8XlZUhpW4f1ukkwBVN9bEUskDJlSXktnyPAuqPE0bKgo6A8SIiekKV2YvBcxpgk6yWI0wMfeGD1xBJUjb18Bp7yjXpXMLHOR6HaiGp5LsRCgpvRJV5ms%2F9aFX%2FwKWQvpHpqlqZaRZODjs3iYb6VNACxME%2BaElikZpZ45eZcpzMXdxHAkI0IaIF0apySkKBnpRmOZNIjU%2FW4Djf0QbZr%2FGF08oGmiFWB3sXpf2efJum708vB9GXodJn6XZZHLSPydFU%2BFo%2BgYp19xNW5fq%2BorfnVcoiHgIeIpXcgNrhmCGXbMwTP3MD7xPJDVEfvs5oeGubfA6iRnyFGdfLb7R83U1nNEPgf5a%2BJinszCXsvq8BjqkAcvkOwz4zISTUOKPBKlb8Gdkmqwh9G0NLeiUL0qW6%2Bi4Vdl3McuvYqSvGKVW%2BLHWhCvQvpdV%2BmInvzOUYCZbF3msUoEi79%2FTha0a7kIxNFP4IzaTRBi5BVdS5Ka5aneGVQ%2FYwSvQIKVRjzKqsyfl6ZSHDro7Xiv7LDMnDHTqWOTOaDTY5w4gSmlfoZCzTZYg1zsHMp7a8%2BsjFALBhv%2BhdQSP8%2BbA&X-Amz-Signature=87d4941b9aba8ad046d00f465f4f80c85ff6163e557cb3136807112d89c7919a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
