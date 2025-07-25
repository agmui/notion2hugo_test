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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKVUMUY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDBA6GbkHkVlvwBv%2BPsLDkuuPDhTj%2B620kTDrG13OSFoAIgJVqaZacKl5%2BFJCj9vGkPummUdTm1%2FFMODGq6fCYtMv0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJyywn5M%2FizIOVMW9yrcAyCqXii6EJIHnA6d%2Bsbz%2B5qZN2x%2BV7vdXbxAs38B1niskqLLmYbcfVTasxSJl6eDJ14QM8LCIAe8ReweKJiPCo0QNWgUusXEQCJ%2Bron9CdQkipFIhXPH4mos8K30xW9Te2ElKNeZj5HWR%2FvUPsjyVPw9iV5FOa28fV6VmCIMnSc%2FE6YFeghM23s4wFYmX8FeLj96x1yfdE1D15gtg7sKkXkMJ5sNgN1LdkkwFtbOkhl2n43vwlFU4VmjH04s9iimzRI37ZyWWDbWdFY4%2F2zMjSfZDNBHCR%2B4p1jPr%2FTfZTl%2FG8PgrXoWoUS3IjzFIIazIoTOIFRPc4xN7rlFI0ucyOvK819ttGBQ4%2F1%2Bp6qvmP1nNcdkK9hJ6YiZixbJSJyP%2Brsd5rH5a%2BUv8eba0hodoUYj1QOpIkPXo4CWn5t4C4zyvvtEiCOBGkGO81Q6yBUqg1WDnleYH6rKn4DARdUJudsIkFlLc63Ap2JWSR15Npcp2A0xLbfi%2Fm9Vp%2FHp8%2FwwuQKwYXT%2FinZXJJShoz64kuCjGdebDDMvJTWOOfWXPpwouc%2FqtS5WocFB7iIBGWMLiyXld7pZ2BuQHf8noz1oZDOAwPLgEhKbXCMahpIvYfQ9SBUBThjkxpritua9ML33i8QGOqUBszzfda5xatVICbZG8m0lmKjGS9Kbo%2B0lprHjv74t0JaPUrL%2BF7hl1yMoK1doKxBa6WtzSxavNIWXvpg9izQWkDcq7a0LCfJcWuyMBh4j9aE3%2FCz9alAwt3vDAJL37F%2BupK1lcqJE67DpEkRn07JkPYk0wh%2FuOHnGPwC6kRmv3K7FOWSvJAnlsQmRfWp2qMqYmWPoBdnhz1eaFj9oklymsaf1GV17&X-Amz-Signature=e1239333e4c4a70ad74516daa41d076b352bba8a65271ae574cb98c2c321ec6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOKMX2P%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCIJKy%2FGhcBwguTj81wEu2do7GXaHoN5Qo36BTcbh7lywIhAJUN6lzo%2BUc%2BgqbnOiCAneHsYf6i4V3g35iuaj2aLXKEKv8DCD0QABoMNjM3NDIzMTgzODA1IgzyQD7UCGnan%2BukPE0q3ANMy799MqjFZITvtSFR0Nc5y2rpBS0NEkEkDyk9aTHa5t4kUSJNkTjpkGyA3Yl6B7fvmBlBKKa39u12dTYmtZP2Mh6Vanl9gPdk1wTanQAzZsaykPvBxGyT0BojDbez5bewGP0TFgaz%2ByFEngdpQucfNUOKR%2BQu0UgqafkYrGcjr6WCYo0Kx9owsbBUzZWT22%2B9d%2FlxGdRppsfU8X8iJZEjO5c39Gx5lHn7jHLrymuZ5zTZJ1tvI%2B0RLAiHBcDvWtcxvO10QuZOz2eSD%2FHCIz0g1iEzuU5c1sjk6t07ruI8yCT11xqCDeh47H%2FdYUmgYC3fPrtC4LbH%2B3S85MVULIuBA8Gr2nN8zRM3CVFAbcaVijl%2Bs6x78NuxHu%2BYOjItQoKTr8HBB849iR5HZK9j5swe7MFbpnf9OpmW25I0YFdvJukqc5e0oJ8daZ7mTU9E9JqzRoXRmJhyNYxp5aVKGVx55JGISj%2B1DeVQZS2ZS242nnCil7KF%2BLxyJIJUFGI2urMql7tEsU8dLaI6yNyaout29RtV8wDgbVfsnWaoFX9DURsnz99pNou6dJXMnNXVDoHPN0JNUtHqA81BZzStrrTexxRgIqAV3GiaY%2FcVWEEXPjEAvjF7Ykr4DYIRQjDP94vEBjqkAQVMoljTKystk5p4x4%2F%2F51b80hEKKmoDDxrzxLeyN9FCLNrRfZ1fNjVs%2ByybDRQEbmtR477LSR8Db4v4cK%2B8wiNl3%2FXH24hY71gv1huI2cQcrurBMX%2Fzps2WlWwJ4cIM0G3HOBu15SJM8g8%2BJefD07Cr1keBhC6uZR4dafPVt52hW9h7hHsxDl3kEHtWVjmt%2B%2Bkq%2BlA1C0Hoof13O80FZpT8Fb%2FP&X-Amz-Signature=a68a2bed6f85a617ec39727da31fc4d4699ca6541c32ac704709e837c2c89711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
