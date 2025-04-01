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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVI2RMQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCXf%2FFK6jBRoR69saviqaUSJKaOKHqZJ7%2FCfodSiTB40AIgeqsYVK4lRrn2YfGmUHiPRjkc0BOS9xC3wsnFtjzM0p4qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXlvuBCB8eyBFbeNyrcA%2BoX7sRVvFuj29upQ7Uo0rrmgmUzCtVMOpRkssOWOG%2B5LZgGHoYcI3Pk7QmyDThikAyQ9v71gK0o7nw1xWXO2haR3sd8WAoJdN7d%2BJPay3sJkwQMI%2FP33crHbkYj5iKRG6l4x5hzJV5T%2F6BS2nO4RC%2FzIGdsXWruhgKXdfilHJ2A8y9baZHuVk3hK19wUu%2BkCflWfQpaHjMM1KBIjP8UoJiM0Xuk2pFqxSMjJIvzYISusslqMkyk0NyvB3IPcU1bWWoyFVdDb8R3n8nCSppxbPCXyh9UxxV35Rg31DaTkJXiGD0kv8NIRBY4tHWJ%2FszbCVSryJk9Zt7cnTNfRpzSd4BV5xIqA4XC8D8pt79fv%2BgjGJbV9k1NO3awIyqDhPZxF32hq0mjUbcut1%2Fp57eaphy1hyHX44TF4MZ0byEGyI0N8UZbxL9NKDcV8M79X038rHe0Fb8MOw6UfAs4fMhb2uUjFB%2BBAoaPWqYVzKSRKUaTQjZXbISgwgvKA%2FJA%2BFxLUVz%2Byuc8OkbT%2BSk9lIStKc7SMW%2FXQvzDbVQDJoU4wB%2B%2FIUlkiOjZI91qTmddDvOA7iUCdmQ%2FJgpd%2FB%2FzkrR7jt%2BdM7BB8UJt5Yy1%2Fx4CEFx5uvgUsgN0x%2FB5tAlSMO%2Bosb8GOqUBw2YI6AC4d6aDoKfrEHSWMWEbhvoTwcnTdgMAvBOEKA66p61gNHqieiCiKjgiKyaGbV%2FvLoJmjzi2boQROw2qrzPMbJepvdb53%2FXlsV84q43cZHwfAkCmElh222SVvF9wdUYzSR0OYQL1fHbRxjXc2%2F09TEiZ4c73JD0Q%2BcajDcb%2BKALytS2pq2N1r4Fk1P7py8bKxlYKV7aI%2FAd%2F9qzc6YHS3QQL&X-Amz-Signature=87c97c3fa085490a09d78b50523d59e45a00085a0e6ed7b69a8e02cd194a4a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4FTUD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFMRsHxj8AiXkCXZczxxdp4J1%2BQEGSFk4BpYLneY8zdsAiEAlPfd99kbabfyMdnrLQfSYJxdiCmDU9lotEKryEA1zUMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5ERd3p57YrsFRYOyrcA5X1hEm804FCvQqiaqE9c9wi97HBPRkuiRBsc%2B5qyOBbysNXy4KK6AfcK51AirD8jzVovVkxt1B57rFybdJtl%2FW2r8ODM7u1vdGM7vbMATfSjSs%2FoSPanjUXIL3yjOF1SHrFR%2B8U9%2BhekVbYV8Af5JYGdi9%2FDmKzJ9qBk0VjX0efm5jOAyjRyqLG7lilYSS5HWo4te%2FX5CNvRRGfzrvSF1kXGsFliF6qYM6T%2FlUyouoUJaI7bUTxvgkgd9Ci4zl1pJLePYzZKODgih2NLeqktqWEfbqpgSLKyEU%2B9kFbwc62fer6ms9bRz1Px1J1TQlXNkzPSrQ6sZDAqFhtJevxfDv%2BRmNq7blzWCBgq4SQMlue8ynCJRtZjfLOCnAzvK%2FHigVgtitH5wfBjjqtEDtEWJEJ1VsYKrYrtvd%2FZU3xFo0Sdi%2Fsrq62SnX4o1B4%2Fe1TxkxS8BL1FMo5RvP9G8KubRXmH6wp7Rve%2BO012Io%2BOZZaQTC5c61ABkuRYW6Bk8arypmjqSTdKfjmT6n%2BRtFghRmnAn%2Fom9OPWK9ODfVZhfwdu80z0qv1h5qRSq%2BjCQyowHK7nAk3zrMRNACRIPy72E886Sb65CkSJWCeMA37d%2Fu5fH1gM42spII4UCVkMN2osb8GOqUBNorF0Nj9AjRJcd81FPFL62qKn4hWRjkNpMRsPPbAdW1b%2F5r%2FKKTX8n%2BSDPK5NL35c2I04lcGRRodGkjqVRj5l4J0QffHBsXgrwkNz8Y1YoKxdJRzX8rHEk0fl7r7W6WDZZM0J8mJaAuTacaO0maJeL0aHPDjrWMJ4TCUo2XeFtijLNM2qoJ3f8%2FH5MLxH5BEcTYOGT%2F4mRfm2UMkvKmLwWfW7UNt&X-Amz-Signature=5f52df3ead0affc7bec9e22c22a0a40c28eccd608f4eb0eae1d6366b7c89167b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
