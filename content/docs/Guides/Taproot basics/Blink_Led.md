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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVE7XOJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvT8oNuAeXO50MhelDgu3j%2BjVYEkTjUhp1QFldlcJ8MAiEAjC2X4%2B%2B8UtjB5xKfQaDMLivGw45Rd2dmKAFJGMTnv40q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMOM08kgwu6CMDwf0CrcA6rBXSKxzsDxggWAO9MsJWOQ9WwveSUSHytjNRhoRuyiXe3O0EIGuqeqSmWxUWEAomMa0si5kI1NxFEtBjj5SykhSREjmCIX%2B87HXB4ScWlX5j7lwm%2BN2K%2FxCZzL5f6eINKaYEi2aumIvC1DreW79Ix0vbSXOWiqCJxdRKoS0ag7oMfPDBEkOlsvNliqzkozgaFqshPPUo1ByqXrpuA285OrUb5HervSAflt0WzHlRxW2SYWTH1KW2%2F0naiYOO%2F6w%2FRVP92ZhpNkvqa9I%2F5xf7i1EHCqQV%2FtHwtcHMFcYuaZCophEJD5iJogF2%2BIX0L98qw3HqOOPMJaKMCfINBvAXoMS2Xkz1i17gcKpozGNVzqOPefCZBIQgtgNcBWdkErxmGjaN0WUQ4H6v2952d%2FgmDRjEXqZBvSB4tTTa52NjcZoJFkfrtrmtkCO0CWl7NH%2FEVuAOitJ%2FajskBcHYvwDz1ZyrS2LPp7JywphB341TmaWPVOIlPaly2FMkaBFGk5m%2FqxuzeCz2FJ4kxweU%2FhKQDzDgyB41C9k9FaZhNVWesA6vuD8hKhlwENrqaEIsgL2vLKDV35AfviB4xa0NeKEutBRnKm%2FUP0exGftA3XrtewKY9LVlgzBSdk2OkLMKiCwL8GOqUBCdf1gAJq6i2O6%2BQkDpkR74feQN9Ro8Zno7Sj6wt1RNVrniFvBhhSYfqG4Ftvm5Wa%2Ft%2BueaR4Io2fPT%2F4I6Z7Njz8%2B4MfHCgVaWtQjamyjsys2fgSDj0CvqG%2F8bm49BXnENs9r87BHLukNoWWJ9onVq3%2FVawwarnixkCo%2BmbqJvDbS0eEswZkZl%2BiTzqDTZ4HOxCHHoNPd1T5K3NAGGdLrUK4%2FCJ%2F&X-Amz-Signature=1fd8f2353edd9b617a5ef5916b57af778e4bdbcdf3dbbef5b2fd70f607e68f97&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZT5MEVF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjtSUVImD%2B2socDKcvdbNsKb6uenrs%2Bu2kWlnKX45mtAiBO1hamD9%2FeJWvbqlI07qGdXykmGIFEZnPZZtqEypCMXyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM%2BYTp3fqjk2s%2B4VY1KtwDpIDi%2FB8Dtjc%2Fe%2BxkyUmX9KZHXngaWzfwP5whIStSZ9V674MqJESZ41ttDJtJGUTDiM5aswgoVqIYgturiWi0qagZX5h4%2BqFvPrCQhxfPiF%2B%2BgOluJX4%2BLTsmRTwVJUR1OJs2NHUgpnlXVJ91IZ%2B3yUQnsDYtgn9CmQqcDGurxGQVphrVqVs2qiQB6nu2Fjbs1fPdwCHtcp2SIJdiF8DdoOU9J7QhvOlKcHDemvypyCe3D8jsgl26B%2BG%2FQGU%2BuRco07f8lVvKUcaHg9znsnnnWV0zypOwlVP5RFPq0lOvz7cFKqPRSzYVVpZETM7GHIOIbSE%2BNinShNEmb%2BuVHn3ZOPM1SCpDcVzcSOzWxmsm5ronvL3DTgkdJ7qOF%2BO4lKvNNDWXdIbnxTS64N9vN57Fmep98MeOe%2Bw7mzd0i6fjoGlyVHaRVP7WHdBy5eyr%2BnzvHyW2DIyaTIFp0g5ZB4aLA%2BRRUDEX4tIj95fy739NhPHu9QIP6ERrQJ0TNjj0qIR7XXyn71q5Xm%2BAeoC0a032KVSHgiyrc2bk6sw%2B2M%2BzSt62rFTWjAez7%2FYDeiDTJ9DluwGsnWtfIs9vRMFP9PgCFQv3wMc%2BEpxu%2BkT8%2Bk0aHSGcVGPR%2BgUkI8f5i%2Bswk4LAvwY6pgH1vDpuqOLHwhIIOI7DVhDo9B9uC3NWjzIUMZ8en6t4bHzS60XbLpIvmzqgv4UBsbyj8VEywiFa24ma0LsUVD3vRGBfai%2FdxtJQNxr3sGDqaFqbnR5T5Of1ypCPLvsiKC2ALvwlpyBJH07Wqdkz3%2BZNrNwon0gmY6iBbysUb3bRARQBzfsIq4BpVubaSNFDkJfsHTLv0WBmI4JVV7wgXXk%2BUEhOdsRf&X-Amz-Signature=91462fbfb4cb442951ef7abe1bf21a7feda59c4993178703d56ae79a69d74c54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
