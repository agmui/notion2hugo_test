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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZODODZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDzSaAD07fS%2BEH%2BiUrJM6TQRorXeBMJJslaP%2Fu2iVLDrAIhANJsggjZ5Rjm3loE549DXTfL7H9KkzqgdE%2BvMMyArxmjKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC7O0fw1wzGGchdJQq3AOImv4Hrk8J69clU%2FHVjGUTCo8t%2FgVVw34R0U%2BIV0SDyISmxL32bTzjI4T2%2B6bMjkycSCKy5Nx2ugQaLb7JBq%2F%2B%2Fo5iacAJOLrtAoMvUKCdujbaHMIxkldWLFRgka8xgkwOBNOWwk1cr1%2FAt%2FplewP%2FFdZAo1Z3KJdjz1iaqCEyFtj9XgoTbZYpohF6FatuX1HFBvNBLElAUC962SgavW58ZPgkAzV%2Fn3F21Q7%2BewOk8gn%2BwvdcM7IY4WHQ%2FIxdM4Eu5OSasFpsfWtDZ8RJlFOy81qFgxRM9ptcb88Nq7mWj%2Fpg1OkIUQljCOwwBS%2F7owpu1g%2Bd5AszOIp3pF13ywEBgJvl8B7WqSUHHHD4xrEdLJ3tBU3W5935lvE1dKpW6QblfxOxw22v3q6dC3F4ZnRY11gU5SxGp49TY0U8rJgzZ96n5Xb1v3sqkQ3yEDbxm5wr4GIX5zyUggHV2KBSMrolv12dGBgH39wLih95tki%2Bv46uuN0m2gQlYqBwAG2jQApKidvgcsg9FY2mLkDqGzrcqLmGPYh2Mku%2FRYrnmY3pY91UJx5BXU2AEUfyDt61eXsMT%2Bo3bc3ID6Rl7p%2F4uNva00TOyc3TwkH6TgH%2BqwPSBYKgHJK5cviQgcqLNDDU06W%2FBjqkAY2OdHHESatANM%2FWPNimOrkqWFYJMJL0XePEB3M2Y6hKhFd639beGomFeDfE74NKcW%2FuLRe9375l9XqWGJI101Q0wxvnpJjEU4SESykUnEeW5TYKGFVSK%2FFmdpdAcytiFbZTkuPPA5CI93pxgE%2Bfgli%2BlrD55jCJx%2F29%2FFhBI61OXO2l84EVf4leD%2FncwpDD96NXVKqRx0hrkXYTQS2iH4fWQdXY&X-Amz-Signature=a0eea5f78d6f66a7ad094372e058620340102527c2f284a0d05c8e728ce4ae5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMOESYE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC1FKxCOuTVNvHShpg%2FodJ9%2F8cl42MnJzHnxpmtm7EQnAIgQWJRgZjU95Y7UN89CjiNdeXXzGiPkLjTdNbu4oB%2BczMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAstsv3TyXqJT6rYeyrcAwuGeadhG3jVkGOcfbyso%2Fn3SobFGyuuh1EYATFYHEKcc%2BgEqmWAM87EOoNAmaOiqjnhRqdVuvNgKfnFnUlp44qkJkySylPKvlToXaWRJFDleKw%2BYV4HmxaDgiQENFZFCFgyUJyRVpKVdD%2BmsMQUseuYCrrx0D82z9U6LSMTFnYpq1HjzG2mtCpfLDJh0%2FU0Fi4gPeITdtnzgnVJdKwsRQzQyAQioJUUl7qbNWJ9dUX4wK6NvCDScIpBxzCwW%2Bea4wb90NQOq7i0vpEv92JO0PbuxVmtlKaWfzjHi2Y8s4e5mH%2BwUS20Wnx7Ri6Eon2%2Fwx9qrBufeDFaNlxnRUSQGC%2BmtO9TEqAvBWe54I%2FNM1i1XKw9ZJYZIVZNRn1iD2icuYEqeY6p2rcq8L7SIoX3E0mMPPvdSRQUFoMwbZI2DkgXAUIQNVQdZPFWuxphJH30%2BRF290fMK5VwGC8jmRY72uDPrD5S3qyKUrSeZON5PjiRp53vhQsZrTEdyA9GQaCulj5zOq99z34watmui7aJ3o962NxmTn9gfQ6pXA%2BNueWxjImDvbpKaz12f488wswVQ%2BN4FJ7ajjJI1NA8VNujXjtQFWW%2Fdgb1FJ1WtLjvSAKZPQ2dEc61PLinEQR8MKzTpb8GOqUBC7xw%2FltvNG8qSU%2BI9L7zUlhd7iV4VQLxtm%2B2WtyXJ2WjKYgYbjWSFqQpsX%2F8y%2BULSlCGf%2B3uw6N9tIPtmM6lqQcFiNN1j%2BCgX4gkdjQ9Rz6N6WwKdls7Dy8CMv%2F%2ButnyeCavsB5n3380GvHeG6mEgzXI4PEk3bMQhC4IoA2fT13VPl9WoWqvhufeddkI2c63gF4mJKToAqJvvvm9l91KhZKuxDjh&X-Amz-Signature=21d66a719a0267174aa5f294f6b5f450c602516397e7e0b33fb683a64b256a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
