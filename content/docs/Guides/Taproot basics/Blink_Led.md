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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOIX2IR2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClxYVjdzNW3giZVF8c00vAGHckcJ3TtFIV3iKRDvwiaAIgGPAYSZKGfn7eGWO3%2BTyRZ1QTezapNmHKysibOqIkfe8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHH1x4G0XUWXFKeoxCrcA63ABSnPo7m3uKC%2B1YVvtPsUp2kBCOo55RE6%2B%2BkvdDjCEwLbJ5DqR1rBfmyKdHzeT%2FJrXFKCQPvzTbdzd5P8cz0Kx1dRlfyWUy%2BLnVFVS1YjbCMW27QnTtJo53wTM15wUzMzjNP5gcRi9M9wVD9FBPoHw4gXjHFjSzLiTeaRWpVnVuo%2FcAP6F3JVET8ver0MvVtGO4F1tTwb9MOtDB8TACqTVXtpWGYyyq4iNGpOJAEzuVsoNh5c2NKLCVyS3i3L81iL2nUto9pu6U%2Bk%2F8vgBdef2XqZdMmGw2W3FifEZlCgKqloiafll%2BzmNPmpTOmpc8gkWsfMRf7d9D1TaZcOGEoNLtC7S8PgywbjiGtFe62m2A6owanXcK0IiRCMlLULCEqNP5r8%2F1z3zYrJ4lrlMM71q5LjTG5bzfIzdo5ugSaASn%2BcnYIorwasqe4tqZYH9n1taqht1t3jquddsKM4ew7k6NcO2X99Y5G%2Bfp1aoihGDz2FexzB9S2mShPncV6nPo84VqZHQtNxgVGnqMFszsnqk6n%2FQWL4AZ56oPZOm7xoY6MlkJfHmS%2F29rjlWaz0%2FgfhTruh1T7j1KiaYvaECCc5iygrL%2FKpwBCApe%2F7pNPXCJWoInZFkXF53W%2BzML%2Fj%2B7wGOqUBDWlpj7zFK%2BSgQpUIdvFi%2B51nHfrQ11wG4GJgSrKsLQOe3h84jZF%2FBriJBDpNSJY5I4iUXEJqEkoa5%2B673TN9ai9j7ZL4819lO5sBuuqXNtAVJFsIR2r05spw5iZEl75Qi65QnLtvRtW3oovPoVjTJJM8sHL6pKj7%2BDQQk7leouS1FtTbLjjaFPx%2BWkDc2VsuPcrjy2F9NsEHGsnQtTQK%2FG840e0m&X-Amz-Signature=62b39071dae1fdd4d1436689615e74cdf3ac42b124442f48ead8b46e53239e98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOB46PWP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK68bAkBb6RiEEYTGw3wM7QXzwH6keMlQlLTQTO8jxiAIhAKIriI6OFAQfAV1AwSXNdcw9tQ6mnLvJCUF83rpLRQCKKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm9I%2FgqdnpG5MjduEq3AO5RBMeaOcifWm5n594HbDb%2FrwTU5DYSBdOmiKLx%2BTPMcpMMQZ7TrEWdiGk1iMKiVj3l5IjLEs5TAugfxl684DfeIX%2BRfEJ3YMInwRkEtuVyUsqf9m1tzntx%2BGuodJy9rc9h3qni%2FYolVwrObvXbi7GluEQ5dEcfDLpKjaNd49GDvatGJX0qpkYZ7NGdwHr5HjTmeTEJxSnTKUfxL2qYEzgJE5zJvOTm6DB5nn8n1h4IdqzS2Y576k0M7IHpqQiT9aiKKId3H3Tz10Qd4QHR%2FGfVAzsk2QtkKtEPZT1UMIMRaPLemhIcwxpMWgXhWRvV07BQ7nlmiY3ptfHOr9Drpoa%2F4t7KAA%2FCW%2FYY3qw5%2FoxPXacouu8%2B0x6y7rZgfEqmOjiQo4AFmJgxoCqFAztIkLHFLAvWvK%2Fc1uEEfVK1dVFBjfEHnpTzeihXgr33dh8KPVC83arW3AiP92LMk%2F6ihVZFu09hpwewK0f%2B3r%2FEukmGX9Tsw3ZGnNRryEbvdSAaJXHdnv8xN32zUWHRCfGf9Z6Xf1fAVTyumzEV5IBvuc6%2BhZ4%2BcK4dJHR6GVnhZTpeChTmKnTfAvXlms2Mgf98%2FSLnZLy5bkQOJbDo3AbnumxawMpP%2BWjCd72AKwmvjCg4%2Fu8BjqkASJi47UDv1T1bbKgD%2BzRT9vg2LTq5IuerJIfPEHf2PmumkuYy2HaIIrri6UfvzC%2FECmgt60lTCU%2FXw6rDnZj1roOpuBLAPTrsz7ibCTUl0wtaTiGz1%2F36y1LSvp9aNamqi%2FBkob5tn8xODhorXXJPDSISl8NguEa8ZSBfOIT%2FyKm7pNa8teAMRtJ5rW5o0J68hD2AqC2%2BsPFrdukdNbMhL7WSn6j&X-Amz-Signature=18a034a5a6181cb5f3b421345c2b485dfba1ca94f72483a6a34abfade14a78e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
