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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOLGIVC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIET29ttk7QHKgnzjX%2FCQTnCoeodTG01SKpGmZNUVfiGXAiEA8QwKluBlSBN6rynAbzNS77oeC9UCUfMmDP0Mj5%2F4qc8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDB9XjVoUDWA%2F%2FxVxhSrcAzqJTaxgbII8xtQBLnVHCXD%2Fk0SjmW6ury6ER8P3DOkAE59eIbkigWpm22vnPCa58TZ9Vh49MP%2B%2BAyPvXTeckPHs91GDLyMMsw8xbmv09%2Bab7Vf9I4g8GZDJzPvGz5MELnVBveorFdaIEZ6YEWvSTGh35UwslfteAjJ%2FyoG2irBM597EEjMwMOLnOGeJg94%2BI7iXjPbcBL0X5SjWhhEyFG9z15m%2FTfLm3SExcm6ZmlyvhP%2FmJfb9x6y%2BFusCdmcxf1YBPWC7VogZwGtSHWW%2BeJ%2FeTM0f4bx5XGT%2F6pyJPt2qQJse1sJCak3LURlFPPhfiWfCKpPqEJ4dd%2FDkEVeoWO5oTDehDMiR6TjriWUVxs9GnkZowYoiR4xPUgsSGWF3DxTTVE9LAsNJmrjXTalJ70ul0uSwpzyao0tK%2FsipQRWtfltVGmdXCH9Gg8jcmYz1sWHA6emuqqqBjdFmGSpZFNH%2BJQTL9VdXYzBJLv22yDb6lsjYB6Bx%2Fp469I36dLffx%2Ba7RJimLPGvzIRnJ8TQo8EUJkYlQs6tRhjx%2B5bi1ptt8G1mmpj1y9%2FR23I0daIJtI9G4Zuz3ZF17DgLs8XYx4%2BMRKhqgtj5EhbYiWzujmZ5LbehOOLDFdfB5LqeMMnbssIGOqUB%2BMgkaYmfZ622md84hU1jzy%2Fia%2BBWZwJA82YET1%2BGwQK8qI9Ea%2BGAkzlYU%2Fcuqe0JTtp1wQ3JPB1oK9YidwEXDq1zJCPtN5EGQoWEJilf4FIJa84QPjxeSin6xF%2F2N3F9jd%2BYa%2FeJG%2FBIynj9F9Lgv7RJXSLetqYgQyx6kuTob%2Fkhyv1PLVy2zAev3uc1WmEBsz1XQHHwez%2BQXwRw4o6QxJVR0wpc&X-Amz-Signature=16cb8831355cc131878992e3216607ead26cef2c04bbf34636f795355417f6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJVIZLU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCH7x3O7J9qoKUNmFJAxy7koD%2F9ApN99GO8aHud2W5%2BRgIgX0tUz4JifK3W0kefP%2FGxKTlKhdPUcB6joAo0%2FjM5aEoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDA%2B0vIO3pBEdLmspvyrcA2pbmAYM3KiSpTl5frSbKyrRiBjHp0%2Bp4mpq0AkV%2FvKzE%2FR9BunmLTmoWPT6VlJWyF6JJlsb%2F%2Bk40Mnc0cmpjpHzWFafkFTxyuN2CbHPEZpqnk6wtKthAgGyOOHP8BabUVpFj4ygL7P2Blkr%2FuPSl6PePy7dwLREkewvkXGakZl5R94yBaAVndC%2BD%2Be7zdc9Sf%2Fs9IOKuNg4Sw%2FQ%2BNxHV0TVqFmwqCyqjoSOJ1A1EFW3Uhq4mCIHAAbJ90f0GHAu175Pcm3m8GE96OatmORvUzZMAEL5oVB2Z6pZOm1kg4Qo7uNtt%2Bbe2Hq6bOnhZ1VNFC20fWJDRQALT6wBXudq3EkR%2BbKtovD06FUQrJcnLQ7ILev1DYjjP6N05Psz%2FO7DEtgGI5OPlbmFMGwjg8CCb6It4JqjhujGgz5NthTLBBca0EAYs40aC0xyV4X%2BDsIDfSFkOAnfZJTik%2FesD2HYvCycOYyHeQPwqkT7y8d3AkFQBPXeonzalAQwJH8mjDOw6L3r4sDqMPA5mC0ZOF31SrjgD8vjUY0%2FY3BSZQH8bi0YyWDoWuZ8mUeM11BWpvCyIbWR2vCPz5V2ogsKEXcJWlU5qNOOVLd6mGzgFfrbRbpDhqxw62RZfQ7zpHaeMJ3bssIGOqUBOcvCroa42p6%2BIzbAdTJJCF%2BC8suJqZn0q%2FHkcwdllMtx%2F9YjVJC5wdT%2Ffn%2Bh%2By%2Fpmq5dxL2Z%2BXSA8BW4Ktv4fxGOzNSqwT0h6xtV6Kx4woKz7%2FCkECHe7TfSClurOzKcrW2FOG2mRtvyRNTSpYKhoouUgufh42vqY4if4XNxRuN4B9riGe02u4A8jjS1kXABSvqgjbntOaOmdcB7Ma9bXBvUpOpY&X-Amz-Signature=e418529927b5f33911e7a9a6ab3d6ff7660fbadbcc08fef06c28601b4a7309aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
