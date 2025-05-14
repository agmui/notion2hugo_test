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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFIB65CG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDdvJ5H26kzIbPobf24Ps868rRJrzVyofUmbB9APb%2B%2BRAiA5j9NqXo1uC%2FTxPdgvujJWrpx4WO5n77aQI9JmQFpLVSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMJq%2Fl3Xbio7weceP%2FKtwDuJenvqN52L9oPOrDERwErZ1TDDEVmOfZzf3KZZGV%2FfrG1Z7ZC019pSsCQHM1ktxmLEh%2F8yPW8CL9eND7rlaPUP8T4kr4YOAJFCg9RlmYyYnPDUSnqyE55wEgDIbWm63GtkeZv%2BoTcEVQd3NzO9IEsqrUfmszQbGVT22EQak4ANQrItwTZ0g8dZkLQSXspd4ZHlXKeT%2FSYjwFA7cTn9X9iVa8fV0mDoXwlatpZkeOS4YUHzj4mxnyenYG9g8j9Y4qPnbEvFQPAtbEtL8Di5eEJt4fd2C%2F%2FIupTNrTKKIC02TSlKd%2FimeejNn2%2B60pKpf78MiJoNU5yNiFHr%2F493JpekP%2BNF9yBVmUbGgCnQqpPc4xL3fLOaOyG9Af27%2F6Iz%2Bq8ZuiF8A9YAOfsGERs28jWc%2FYZ0aW%2Fls3UjxlxVTUw0%2F2lu3mzh853CIFpXTy92FoOHikBryHpSRSArzSL5bOGF%2Bj8P%2FzIpIij7Az59ylfXcGlpGAFTVLVWwUd8mYX6OPeojjk6CXF7EMKGnQIpkGnEosutSrezjMlZjxGc5mB6SbBEC2pVnAHzx6Fpf3FgdmmmwWJ8k3FpKbIBgMRaUvfvNwJXStJIaR3jnpdquJAajdU9IDxz%2Fe8jGKNkIwp9CTwQY6pgF%2FHJzr9lEZ85RxXBveskQ%2FF1fI8Jld0QnTt7zFNvoSnn4JcTgVS58EagJVWOXEG55m9Bs5Z8DWSnnd6aZ%2Fnlyw95nkpkvahZk%2FcPCbsqzRhCk7M6Hlmti%2F%2BDcJrVOke15Sw81d%2BcirAFDMGX5Dxy9DbeKKuZw%2BhCAoh8S7I7AZ3FiYvgYAC1q6%2FPF%2Bkk9rhpK%2FuRnTNt%2FSytQ0qNglUsCs4Id4FUEx&X-Amz-Signature=7bcb01497ef3c0fede7be44cfd0f4ca9e470c8a5ccff1b1662b79989d6f0bebd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO6R64M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFFuHY%2BWM9V%2F0jacXrC93PbZoPllBNmoSozIK8tbU6ZeAiArIT0vaSQ3164SAfm7D5x%2BjWGf%2Fy6LIjAnKw4HUwJ7Vir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqQONr3%2BTyQCCzzrXKtwDgLfFu6W22oyDg2QB0gWL6UGAQbb8izwMHJ2sIUoYeW2XZnlNh2T2LVYZjl8u3JOh9C21dccHj3Ddl9uP9SaaxK2hMFIuAcWhbbQegXNY5TmKxA7fnTa4XdjGhXbxDAcHeonmbf8HX%2B%2FQ3Gu19GzqdP6ARqsFrssZ1rAQbuC%2B1wPFI6nnKtKorwG9ka9v14awVbzqOjnQaPMfgEaN%2BH5Xa4Gc7gzDfY8C2hLmSNgPFgQj1YY9Rv9Q1yBZoHSdDp%2Fq3Pu%2FbelqabfsURSz5plm3nA2W63VktXjC9LxNKsdXLo%2FDKtf%2BtDg69HJjiq2zuALh6TNB7UzJtlDc5CGrBhN8wdkGuUKO4bB%2BNht8R1SJUYqrekfsMe1qFoTvmJGiCcZ47tv1oOiHl5VN0X7HchxzTxSn0EYmDOsa6r5LDOtQU%2FDf7e3KzWOi%2BAkAW%2BFNFsufQz6%2BoH5Xpd3JZRLS8Av7W7gxvP1cquFItNWuJfbMsr6H3Rpo0eUO8%2BSKW2PXT8kTgmU7vc84g9iDBem9CjnX%2FfzJ5LKFRoMPFJtuQVTolHcXMAB07VTc8nya7cMap6rGQUhCWBITMUI7edAS7n1lDZLzQNIEUumz00N6YoCtDwtngUdBZwd3iGtXsowsM%2BTwQY6pgG%2FcBUHrStWch%2Fh5f2gkez6yZL9bNU%2F72iF3IXgCt5JvWcJxvoIGF1RKHW2IKEegELlANAneT7qHWpdWoce254ufsQN8kGSLPR6pH7WWC5JV71ts4StcFVSH7Ou69KoxrYea3XmEvNU0pYj3fyiNkAMvz7phCd4BIBoW4GA8WYzweoPb3KXhNQoZxj2u4xtr4MO3IV%2BOzard60JGuyj8wBzJvO38SY1&X-Amz-Signature=4539dbddd7fcd61864672d5468f9d277f613c0163be0d63cad7f5a668b4bb8d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
