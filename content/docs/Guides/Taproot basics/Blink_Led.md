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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPQT6AA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDyYTW8H%2FS%2FlQicDXIouWJHZVTpN74l101yo1uVdIvf7wIhAJ%2B9SSyxB4oNWaeR9v8dL%2BRxzFdTOumbeFWL5LTxoT72Kv8DCDEQABoMNjM3NDIzMTgzODA1IgwCyCoh2L4Nivtd49Aq3AN0B%2BoBLouIMxeTpWa8ubAWdQi8j4pnxTa2NZKZ7TFabd%2Bo4kQCZli%2Bz2uTQWz8OYiPxUcEO4lhi6D7vnpKFhKRFIZ%2BZWsuvRrjfKseOnx%2Bc%2Bm9KRoB0VEX6%2BUlAgmw8a%2BTW299xdiaEjbHX5MGRFDJcfLkGU6YjqKblZygD%2FyPrD84Qogk0TY3SMOAHX1PiOStAd25vGFJVx7Sh5qUPqaK0jaZv4PXKXCmIVj289LT87nX4SrRDzx%2B%2B0yfgXBlEgu5C%2F%2FeqpXXvWmdYa3r76sTNikAPaQ1OgCZY8eDFRGFQJ8%2Fesj%2BoeD0Ct6e1MMacgr5o%2Bbg51W7BapSeFdQPEmfoqIa0ZytV%2BK6TWdkpHEUGJ7PLWg3c3LX30oPbFt4SGixxjwvvxDmUG6tfkS3S3XTUa%2FGSK9QablxbjTZgwRFNfjEnnvuSZuBGSpIZP5kvG1A9ZX2xB78Mud%2FdG3q6CjHgfZPU03R1XVwIejiRRbpTMSkaJHMbLbGvbdTiCv2aT6IyCCDqYFYwoGmCuQFmN1feqiqyUpXVTf69pRtG0vEYbiqT3SXPZQ9vPlleJj5BXyIcdHNrSRjY8fBG1CAUwNFyDF1yk%2BIKf4Doi%2Fj89IWJvzTOki4YXDL9klY7zCwu7bCBjqkAQNmPXUJCd1Rdrdq26b8F8fF8lTk6qOXw1l1Jaha24Y3Rzj1rJm1h62Ftc5IDwrPvPCELj7XP1sATlOsLbuPyff%2BTjxNP3vWzAVb2yCATgvb2%2FKtwQmmgKb%2B3Pl7ojMnZryUrs38YeJvNVixe7U71K4A%2BwD6%2BsUJ40YHAF0Fb0J8FANRS5UlwbpEL4%2FZKAD9%2BTgbrjkIF%2BRnDo0mFgbgIMfhFziK&X-Amz-Signature=dd4cd0e7a81ae6827dcd0c74fa08328eb197455825e0e19674080722f24be9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KJTCF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC8aLZwsQR7ZLkcjoTkV648I6Kpon%2B6DnAnr3LQA%2Fg6ZgIgDHjCFvd9qgkbOmA4eRaDApdPF9D5Z0tECEzjbJAMVPgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKu5%2FAM3aypZYGuSBCrcA78a8yFijWXCuNJXfsjQYybw%2Fup%2BOe4SSQFRtksJQUCfDd7Y5s2U3wtMgXjowegzGv5j18oM7BeaAwWvAvUqdvLDF6XPzmFau5EofIfs6C7vTgxHpy%2F0AAUI3RqldHd2L9MX7ico7upMtAYUMhbmRoVTWsTk%2BoIVtPwlcHsO2v9jeRN1%2BSqvZAVm1CKsvCE6yIb0PFrAjQWBI4rqKQEoidO%2BhIRW7LRJTeNIEc8yfdEHfknVbl7tf4bwDZAMMVvez4GmbFsLWg1DtAJktUqcZmAnqiTbBRm1wlAbOCrF7OxzTzPrFyIMQ2WAjdlG8Va8MD41G8MBbtOTp1xvjzPHUTdMY9TxeJgM9tBiITNqncuNviIx2pJ6B24YWa3Sjc4gA7RY5uljM%2B6KrkHOkRSZBecBdIx3jjBQvOoZXx0onytylfJAt0u4fLlGEEXkoPSj9kAakarCu28SIiJ5bzc8R8gwA9tLACnD3AdZ9dlXFfYBQ5NoUvF9N9sptOt4wcjabOu8d1v6juXbPVVPbBKmyLTlDzZVNJzNMiMOHjHyW%2BfiSClkgf7tH3yQ29dQ9OIN2CawJc9CHPAb7NJOklZqlZjuz5qXzzWbVnwS4e4Sp6nOu1VWQYw0AMjU8uKCMJW7tsIGOqUB6DxuYV%2BMwKIAIoxi2g0IBBqQFi4nVR3%2FhWYoa%2FvpIXo%2BYSIJ4hej6fkvtHfXYDA5VyLD8q4eoCacuyTNq043Gm%2BCZl36R%2FMmqSglZQbgLHqEOFtbynnpKkMBGEbMKk4C6f6lvQHjbV9HPUyp0d46%2Fp9KPn97YV0mi2PK2ze2piyT9gPjm3tep97mfuSU2ND2w0GCPEeMSaHpNf0qyK49RQN8sFLI&X-Amz-Signature=e9e7f43d2c6aeba1eced1fc8d53b92323168b4e9f288316da3912aaeee8ef335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
