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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFFLHEJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGIKv62WnUiD0OwpEGw3CtwEF4DSlBtDBQR3NzxN0ndoAiA2jgGhiXDsaxzCukD1M3oXyYlAAYGRlSggwMRtqJExWCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOIm1hXlwo29zYdvKtwDH%2Fxdz9OxA5pkw3rviz8OsR4ISER3O7HBeptsNa4ziXTRZPykHibRtPlCANLBYVcRiV88FKx9SFcwbVy63tZyV0S5D%2FIJDtKiWCewvYoQMnwU9kfesZbk3g2dof1u%2FD3Fbfe%2FPW6kgdfhziibvCTQXMBrbU%2BRpWXdnWtmQb%2F98ttA9YgMQjfY9z5pXP2PLoAhLSfhMD1DCZ0RUnnm08BUH4q6uq0wCF%2B8nDfwXLTW%2FDdIn%2Ff6KwU4NzxLIJvFhpSGX%2B%2FW0L1nLCq2COKWfB9SSSgD6gVPFqJjNVzCOxwn9YLhrZEecZGfk8a7i2%2Bg40sCmri2biVx%2BYX3vDcRqjFB4KUFiGzdWT97wxoTE6JINLNHiwWYpG%2F1TkwGKLPFFZfDoazDfGfDMk%2F%2BPTiAUg0TESFYGuGMC0A2kSJ8wTospRqNEDMNp9S3sG%2Biu8hugMfCvo4RwFXwewGwQc2cNZUoEdPbOyUmZm5SCSec7ibKGcPbSeW3u0%2FehDGye%2BM66jnsHfBtKP1%2FkkX4T%2BN%2FWhkMII%2Ft2bndV6ZZTUPVdl7jxETUbPwcZwtt%2BTjgPV2m%2BlPsyTc7HP0dAQZZpV2GP99tA0fOwJA%2BkW83amIkJwp4r8g%2FtZzHkV6QtIloBtkw2obWwAY6pgEOpBhDkKPPN1C3Hkqim4UBp6uqdvgwKk3SluICsi65ITkDzpoPIEkdefIjLF4Cch0kFp0uEIP7%2FohvZhDS3jD4XRm9xuGpjaXwS3WH6%2F8rP2joAIWUMngK9GfTdJ3RB7vcoFfGvMa61qyjZsLDwVvNz%2B4ijAAWYJH0ytjuBBWzxpfH8yW4uysnvp2vPoxMmXfOWlS8T%2BSWSTJ2OPnosr9chCON6wM1&X-Amz-Signature=55052e89db754270af762948578ad4fc2a9d9ffb3112c91040d780df45e808c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HFDNST%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCCjgLexUQwV4gZXhn2gwjJSckGQNwZojd75R4W2TuGbQIgSBFl458ODN4%2F3LpkLIDegtMj%2BFUcounXuu7g1dTYed0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuLEOelbXOTpb8e7yrcA2l9gqvPrVV%2BSARWEuFZUj5qx3Gs%2FKEKk9S5J9cIKr2EWD7X8%2BOTQcX9%2FN319TYTSnBYiBjGQmUpCVBLduK%2BSbA%2BqeLiWru%2B7COYpUts%2FFMuLuNAMGvpBURg7BdUc%2Bq2Z6%2BKrBcWwy84D5EI8ymUqUPugzrGuIr%2FGLSJn0NShpOp4lYuZzPf0TyBSQMg6RbbNkthpOxv6wJXaJ9XSgwkte3YHaP09jf8LaEzMSX6KNEXII2XDBSiybJ18WyxrCZYWMTgIB8PfTjvfITGGahIYoP2Kber1BCLIlOjifFUlVEU1Y%2BgPtSycIqb%2F%2FxjKoAuCL3pDLn44M2UcijTXy7g0Pm5MjxRjJixABztUi2KY62i53NOJq%2FfvTEC5JI67nh%2BK0g2sTmlW07a%2BGWbpN2P174tbNzT333Fu39lzsmbpwOLhP2HUqYtvWUV2j3XAlwQlD2WDDA7Pv8aRZ5S9%2BwS3hlswxJjb7bJvelzGubyNGsYu9uSQvH5hDM6%2B8or9u3z1FBoBYa8geQznNYIitoXtpW4fKuOC3Y7QiVApQQooXPNCL0uLTfPGrlBoqVBzpux4hZnVKzkvh2efXZagGn1hob4FGFT%2B5uBo0faeZS5O9UPfWbY60kV33GTewzKMIiH1sAGOqUBsY5qjkKhwSumpLyARrit3PaAEeXDu3ug%2FBAepR%2FmIeS%2Bj4NapV%2F8g7t7zF2QWZ3xAUi411JcinQQ9ZjHTpW8nJj%2FIyWEc14VOIfMkl%2BLZBlkQ6nWJdbdT0BvsIiu67tE4W%2FF8dNT4AEhjpQT5gYYRSoP%2Byu28QvpKCy9xxPdbEI7%2FDi%2BQdf4sUvlfN9gEstwRq1qk1nUE7%2F%2BDesJFkZ2XMyRPESu&X-Amz-Signature=2be655aa2393c5594893daa3d3dfa35b0be2ce9ad47942b0f403dc2861cfa3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
