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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75RNMN4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6gOHhb2NHHfWmw2OYfCAtNjkxqXXF%2BvRAYTN4M26MwIhALqiqTkx552MflXS6386E%2F4D41AFua4eNXKt1SvTYzQiKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3eNntoSR%2B9jfwAuAq3AO9lfemqK4r6%2BX5L7O5M1YF7K9Bx1TLlsGHSeB6AZKGVr3caHCY6j8R3EmpXKPJq1ArieIuFMAlAvoYclIKegRPq8k8DwnumLO%2F5jAyiPFikDvEVTJrzFPWev%2FgsvA%2BxjTICzaD%2F%2BNKZokXJ9csZJ4GVE5zkgcnbx2ngpo%2Fh%2F%2BsczntxKn%2BHX6u1DDvzNKKmYvvtnm%2BSVNQu7i%2BZMWcGQCbrs6jmQGOeKboAIlZhybQBAUxkasHgnUq5GZ2G8t9FIiVDtjtcBOsOY3NbLO9shtiBAdP8xJ8iz0ppxCbl7TjWZ7nRBA3ayL%2FpMK8C%2FAcn%2BHEI8nIx9zJd0nnQl1ANs4LgsYBH1HOfptrQ4oqLTaMWyQygUjJlwaLkIs1C956gAQ%2Bc2sfp3%2BXJD2RIk0nXO3MAhzzi3odYxXIecCkYPEZQqeybZfWy6Kud8oRpRAbfGU%2FT3pkuiUFalEdZ9hYZRj1Wkr8chOhh564IE9EMe%2BROaFZHmx4Oz7OqYWG%2FW39dhoU%2FIKWfV%2FCCXEM4VrnoRympkuNrIAESTAoFm4TutaOIsjcDsa%2BAuRIVVgZFskmHkeVnCrKgwXMG6It6gqIN6pKo0kOmIpF2ijSoN1jqRbVRX13fSNbcBuCAg2KbTDms7bDBjqkAUxB7MO9s1mwaaQvPjoRy1rtQzDfFoNioGy2e%2F3RXVzhBDsIsfLOWYCUkv6LnRjRo2ydmoObCXnnKdhMrRqagt08kFIPV6x9Q69gMiyCY%2BStdTKj3Hl1GzOIy4omMy%2BnIsTp9S7AYJqPzPe5cXzwpgVYwCqFBKLs%2BD%2F2HVhMj4zdTd7e8pdaFtaGca7uTlZVa4qZHC7p%2BPGTBTkhKHpLZqt2jAp2&X-Amz-Signature=50dd94a13424d49d42058d112f19a31ce4908bc579494d40b9dc0855e70f02ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFWO4KN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk8KZp9XOSyN40lcrki4jWbwz5qOe%2BraOkesXqbhziZAiBiy1aAwvsZkZSW5lZyFa1JKDd6AQSAHj0BfpIDxj6IUiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVjLdiXZKkSyTDxVKtwD3DwwJcwq6UkU45H0ZKoywN11cgXW0v6NTThTEJXTdQz4tAtzJlmOIhb4ifPRTRApkFttyWxkLya2NjBzd77qJBKh6BBzOiEP8rx%2BZcNLdvq15fT2yYlZ%2BN13vAeIUdYQlouHRYCZQFpQrIpeBBAXIrIpOU5tVGx2F5x0V%2BT2VJ%2BEI8D2hDlNRe0azpgNP6Ow0twgLzQxuCUB4zU8ozzuXdNFPoJWbTWMJjldgjrtLGBCx6yDRvdoMBrH%2Fs2Fv5UwlTCqoHu8r2kuqI7vDtl2b03RcqU7lORD8s3v80%2FyXD3GDHx1v1jYJmrpsSNC334tKy%2FJ%2FyW8jLSXesNsphdBTe5CTH7ANsm%2B%2BAXTkAKTXhpVfCtaU%2BdniI5MtcoFpc4zSuyubPw2h8soxCoI5eHaT%2BbvRgKfc4LxKZkJRA8zv2dMaNpsQQi2in1opj8Xc6iz5zuuGQjitNWYNokMrygliLOFXz80r0tAKD1qfxf5G0n7f0Iv%2F8p9xAxz9irT%2Fq7chSBHZblB1BtmqEmfjwlXy4bmgm2qGOdZQsoXu0EGphu1eGq2YvHmbuhv12Yhtlav7r2cekJS9e3lI1%2FJL%2BYYctJMQraY%2FexXKGBnvu1TZgTHFP8L6kVRT0D5zLUwgLS2wwY6pgGeY0XdzE9hxpf6WCb4nxkwWTvjjjx6vga8j4YGEFbKACFmku13V%2Fv9qJjijFk2nIR5NhD9OtEtPigO2FAl123K4%2BrFFLOAPG1WrwpHFElgWMyJ0cpOXR3XMZJB3v%2F4qYMovpL0SvzQFyBv%2FLw5yFR10y6j%2FpRe1iMkkylPbqKRAA0ugr6tXJQ8cDRyXF1dmcTptX0TSUgt%2FCwzPRJlwdFiAnmU44IL&X-Amz-Signature=45dabd1e98b00fd24e6ea10f092da9804362af4d478c2d0799df010346ffbdf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
