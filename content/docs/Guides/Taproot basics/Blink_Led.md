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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMBSI4C%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDJxm0XFHiuREi6hsVYmR5D%2Bze2tDKlsQ1Igo%2FOTZ%2FkFgIgVNTkcZZKVKKLcHeR4PdgBM4rD5UQNkE5Vcbc43UFdvYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkGqthPuzkiu3ja5ircAz%2Brc2Z0o7tzL1PrjQeNViNy1B%2BTsd22Sha3sQJekbA%2FIKAhVYNLzqTnRcPRc6ODLcBzKtMPPEbVYI3BZ%2BdDzs%2Ff7BI6kZY1hqXnF%2BjILyxQYzIVH3p7QRdFZCldg7DCzwIBmUuq8dcBW9MlaXmeSK%2BfSk1zVBxCMqQ8CKtxiKX74xqTQxtwADZ3DL7DDD5jculcy3X%2BR4cD7uSK2dTNNw2qDNvPjyILNaScwAO8kxmLwhRuYR7CIr97szLVlw2iqnclyKj%2Bxal%2Fh3ObXXtQsmXdcVs6arwl62EhHUsKcCqNraGHdrdg3UMrb%2FnjbupKXFUtkajHlg9XmWcOG%2BUBmtNlhHm%2BRTnXHDqUp5qDw83bVk3YrMwB2AOzXDL1IZD%2FfvAedjSPaUFmVpooCcnp8PT4EC7%2BB9IRjgOYathtJ6j66EJYekEezmPaQ8d2bcjUivI%2FDEGYH4evN65oyEmdFhLkd20GEBXxsN1mQmGiz7HKMrInTT8D9i3dDA3LNpUKlpIgDOv4DH1pyfQFdIKSd0Q9%2BmkqG0iHlnqR0VjJ%2FLGngdimpLspGH0mIzUZ2paZ0ZAfBknABeW2JXuKROvdHmHbBYcXnsGav11uY7HcCqYlOGcYffCaDsLsAfk4MIvcjcEGOqUBc%2FMeGM5GjmRZNJobznXokRLBeI%2FnSQ9ChoElhhDdlAQt7ENaONuifZ2kdNj0AW6xExfh5I39g8b%2FUGYaQ1an9ABVa01F%2BExBXhqxlOluV4DEi8xtwUo6VeoKk7bkuFYSnQTHGTLD30azdupgrEbGjjIpe2NTELIFrtm78MDx6ZXYGU1OT2kGTeN3z5tZpF60n055zh42AYykJA%2FnpkRa8FAHalig&X-Amz-Signature=94dfe7c804f9ff2caaf1f06311d5f40f34f32efcec94c29c4d43c39b4a6346bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX45QI2A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDxEUXTww6rBEOwh48js5oWkv0vidFIFZhG0hLFy6xyywIgZkfhSEGkOxa%2FcaLWXOXGlr9cCbg2oi5uKM5FzrdIL2EqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGpZSk8Vq8I%2BuJ%2BCSrcA6Mwl327eHomviv9PZnnddhxjDIyyarsyJJOy2WphJdcm9goQ0%2FUKnFU7EhXlRvELiDRfF8a4XmlmvA%2FowX4c%2BfKu6KoL60Zkq%2BFCqUW2bH5u29bSSitPUbLu0ADU%2BE%2FaSUcpzVd5uZPMfKydZoB%2BrjVc6MPHnlLizhqqKPMovZbuLy4NoOkoxeHCZ1BNuQi8iPDF%2B5HviGwmVom6VcAwtAaL6nQQR%2FBmGOAbr1Djazpc%2B%2FQnMAPLCyRNixgxvE3XWaLMSuZVzVRY5pf2k3RmWnNGe0HlhYuK2i2Zb3grffdH62X%2BRx77mcPBOYFfD4Y9EhKaiiysXdNK7IXskl7izggp%2Bs8jUNug7v7RCQTpSmPAWpQaHCw1zO6FMhpInNz0abg71Cxj1f4%2FJukgIFrxdGp4vqXVIlf8YnuSEuP1UY0Ua%2F3aQAOe3%2BLRrVRPGMV%2BJ5sijipI%2FLZAKyvU8TftMXwjJYg9jwXpVvtocw%2F6kQRxdUNFjkdN%2F77300SB23wQs0TL0v2hhYa7HOmW6m%2B3UD2SUZ678ulHKzo7nfqBNqUgxA89qzgNEkuorXsZ0oWUyXchbTTHzJ5UG7t52OkM1Ab%2FFrwsT2IO6%2BQDGV60vqPuyH809C6%2Fk2V5NfKMLvbjcEGOqUBgQQkIANNrZ62wPSotmB3VV%2FtSg9un4koD%2F0dfoZfL3pNj70HN5gpvlDVAkBMttIG8sItGRMeP%2B8CiiE9JLSMQcTkCTTfK%2B1bi%2FvGysiRg%2B9QK6SXlyRaPoLLX6SfbRgjVImdOCfLaWFwOVMXasvPc9EITtiZ4NMK97P%2B85shrCicvpHLkIRYwEn2u%2FgiQhmezOrWMpMzYV7murt8E4%2BGV8XlHK72&X-Amz-Signature=bc60cc0d7bfece7f0b866cdf3c4481076bd982d519b3750c7732d3f374c6b477&X-Amz-SignedHeaders=host&x-id=GetObject)

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
