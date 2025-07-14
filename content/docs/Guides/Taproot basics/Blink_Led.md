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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAY4WOD5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCjWlHQtdQ8ayJmKgXBX87iCj%2B4LgqR2WeGG09oPoK0HwIhAOKugZoMglxGb%2ByKod35tDw%2F3H1ef6i5W85Ht1ULIYgNKv8DCCMQABoMNjM3NDIzMTgzODA1Igz2LmXGeD9H4GR5M2gq3AOWjm5KJpjL7Cm%2FynJ4c7DU5BXfkU8eq4ZVcMDXgYJ%2BxKV%2FtT%2BsFsvPOV2jhWC6sS61%2B6NMc5DK38cMsNe0cYUN4UOx%2BvOaQVjNNv0rk%2Fb2dzuG7%2Bir4Skw4QnkJ1rvkOFSJyY4s16y4YUJmENaKTJic6QD%2F6nFPvOLHWpsyma6hf6jjFokARhFk5z%2F7jiC2tDNAhYP0CQwN%2BhO1Y5K4%2FgvZowkWUwRxmSAizjacfgIU1yFXEuz6nbYHDzn7tPck3AAYavzj4FS29AOyqja25fgAA%2FI9KDkaEDPpHmZ%2B43dGxyXGZ6mQjvMOPehjFGWkcFkKX%2BJhh%2Bfa8lePu0ZAuCFTmpOEK%2BpZJX9c8DMvhunwYWmBTl2V8RP6AOrIeNhaHLEB3dIHCza02XjnzaKiXj5yF92uxP7nlknY2hSR4XJ0Xj8E4cTIk6gp%2Fnto3kpcr7q2BoxM1SRHuRWHSKJWAdwOS190B5O%2BOYCMQv5cVIC9sYAahKChxxqrIZ%2BFfeoVfKVQOwJrz0hk5DF0KhhzWy2cl%2FQTIQqiJ4vaw7UHYbYtfH1G212F5FI5UprSV1vsQFLzcJ%2FDgSiRAAZsyavH0eOcilAydejbRKCj8rZFCmpJZ92lpAQ99gxby6VbDDDy9HDBjqkASSMam6dVwWBQv4s3rtjT2FjR6i%2Fm0cH3kzYPq%2F3uRxjGFDca7XOw9xEMdauZdlvdUcXW6B%2FtgYn%2FMOmUZMznfh6NHroFfx2l5ag4l1F66nb9ao0imRaaV2wcUkCYtKX2cO8TtyfAgd0VZF3ISV7NiLlAW0IrGxzMwRaecUaX5lWeS9Fhjet6%2BeRzMCBQxlbSg1vhLWMYyiEBVA63a6YTs6FbSpe&X-Amz-Signature=b5546ed7494ec3fdbf022cacf3dcbde19908fb6384379d075e2e76bc80d8f129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7UYDMV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICjnZ6NwKZlDD2EbHjloHqEOGCSgrPCykNMWIIBnBtV1AiAbsoJJQYG0BiynBQVuOnafk5DmixtP8wx6u0zlmtrbWSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMOnZXc3QuIzGCD2fGKtwDGLxd9WWoQRDc0rfj9EkpbA7f%2F4NU%2BZEXfmnvJsh2I3RKkiTwwLlAZFgE%2B4IQIOs7humRgnnCk%2FHSX8SqBIoumY914DvlTt3A0LTEVdfwC0mo2ooQBztBBI1%2BDyTMLA%2FuON5UuQozweO%2B8Fcg7O%2Fb0Kx49TEfudXiSyerPlZme3%2FCtvWIXN%2F9FqCp%2FTpA8DWeu%2BU%2Bt%2B7iFjUw89ZspjXC%2B5ILywD9I1108WjWdM2fiTcQoBQQtaOhoBjpqYtM%2BrjJGWVbIP1hk%2BtyHIDrBHbkayi4izsY8Oai1tNIzQFdA57mbj2mM57%2BtR52jG%2BCJhlt63bKA2WkH5f%2F1LejFeFa5g2SrC%2FABZ70cuOF7mfG7DEonjU7B1e617W1LCqtxnDPoMnodhsGeFRSBIvcrhGa2qUJ26RyTPyel5U%2Bknx3sn5wpeYIj9EJ4bAXkv1gn%2FPZqT7%2FA0hyZaIv%2FZnibaTGOszeisv1uq1pnVcHt%2BD6B1KeJvsypI8v6oKGg2SdYJzs1aTCjd0h20DHmQyaZeRDGvVosh6tJnTWot6AGr4uzNjzKTNdb7gQU3pUrZuvWqJi4p48Gu%2BgDaT35SoYu%2FmF62ht%2BpVvjVQSZXq0Jd%2BA%2Bg64zT7NW8TT2urw0kYwqszRwwY6pgGpKJKd0cdIEy6AK9BkibOoaeqVoLz2vBdlZn1vZ5rlDE7bzuXUI0vHUNfBjKqA9qQQZNVgCvnifXgpUxu%2B7ZgFuER12yCQHU3ODoBeO8uexLxEgpBJsH8WHNV8g2WKMbfkA8YP2hpl7shYlmZoeu72tERwzqKEKasuYJSbsqCZcuOBStxKNqUU1pdUN8Glp%2FBALhL0i6AG7W4b5ZbFruoXa8%2BYuXS9&X-Amz-Signature=11fd884decb28bd3ca0ac23cbe60c30e6e74f11143d8201c22b92caed24061e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
