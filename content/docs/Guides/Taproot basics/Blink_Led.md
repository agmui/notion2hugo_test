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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RGQB3A%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMycfl1lGTwavR%2FEp2YOYy4SS4JrDeTsyKnCCEOXOvwQIgYi2CnvCLcbceg%2BASnn6r4i%2FSeWo%2FlIAwANRR3NfjAsYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0aD8YDKrKWIwjP%2BCrcA3dMNpDrT62kFrsAtq4itAdFObyQXpe2OQgBPq0rPoMjmRrrEjgK3UR6vvMDpHmwQj0Hp%2FtkSky0reBaw617o7lXmsd%2BYqR%2FcSRgaDW5v%2BzUMpPrDG4AAPw1k04em3rD3m0mKb%2BcY4e0ie2aj8BNAT%2F12dOZvDDPaWe7e5ZlHM5%2B8W1MrCfz5E%2FTxJcRRk3GsxqidEBfDcKCsQAYorzNhjbG7A7xP3WzAFJKivkIknmTD8k%2BbjjaTXvn50AztIa6Y42u43GyIax5sn3SiH%2BMc%2FfHH3xBdoOnyHF%2FB8sbom5pg4zfkVKvUI7dhzP22s%2BUhiEhDIm8A3W6RelD0c2%2BJuqGLSd7c2Az4laXah4RtHGlVyeJm2MLteSZJzVM%2BaiE97N7COxRZdD8yviaM713D4hP15wmcBTlIo12r8BGRL2PDaP303RVWXkzugjv8aebXdQKq5dSdVE86YAfpHNcbCbe9fVS8XnNuK5271%2Fz6qgBOYeBb%2BRMAtq34Bt%2BofGW9gAkjtsltKsfaxJHxnljxiR%2Fu0n%2FUIQ33ywkYYkIOptZ%2FMqmcALyRf2Bi2YrBwj6vkYppNZ25ZFLPiAyG9vYdpULviOTxutDpaxWu2EgALkxz1wjkRlBkwVAeBAEMJP71r0GOqUB69xfJkH9f%2F1i1S9UacOCicLYYMGICjmP2DGt4mHwSg2LTkKe1UAvnjBBt0lM3SzbyPfzARF7dgK4Tuo00QUFmSbD0TWuMuy60MYQ2IRRI4YuIrJ2TZ9P7EMwmWeIkMBtQYtlNNZysXn9fXQLmXrnboyHRms3xrbqWi97xbJ%2BBj7HlOg2P30m9iBNqxVyltKGPEPYj8WA15sDVPGQnAQlQqSbMIkU&X-Amz-Signature=4916d63dfd30ef4e26d2edea366278437e49835a7136ef293442d9a6a1678ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAGJE4XI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEumbe4H1vO0XLag48%2F44koGYv4oi3kPglo57L%2BtO813AiEA80SvGu0q3IdqxIZIzjHoRXgUhuLHvbuSN%2F28T3PdA0UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR1lkaKTIDL%2FsW2QCrcA1ww4EoBB7Q5IkLVWefANwWUI%2FMtTBAFeRFF0y79%2FsUMrxAvOYWlJXFqEK8n5hjOZ9BrcCR0PfQ9Mtxp%2FpSFtRoIlASsElMc%2B%2FZjOaUGET0h%2BFl%2FDgqgc4kdLzL%2BK1QFTZOc50gKOyYhGDK2QFZeLBN1EbJvluURLAENcZONIBjG6elWhyyxx9w4F2OVo6fILmiiqyFnwU8ifUmV4gRZ%2BUNwIBK%2BFutPtzoojg5VWe5Y0XBVkQe9u3%2Bq%2BNbaSR%2BCsAPx0V2x02yKAW6g7Imz1OqtCi%2FFUlKK4%2F0q3GS%2Fn2wvk4Lnln4QpzjeoxvZiSWbqvNmrp4lkGH3FOOmo9%2F3nftwpNYNNhaLjfLHbhebi%2BEmKGHX918TRyxP7CIdfLxYM8tT6A3o5V3oF0Lm3WD%2FOmwZ8kjed45Mg1ICAWwi2ETn60l0XWdlW8OgOSNyXc3wjSc01PIrrEmvP1gwdyNaSuHySpod5oHkS0wAdaPyPrsRnMbssA5PBnWrH7cSecZTque5Xvdz77m22JeNiKwgMzxFvcokLd8p0e0nvhS3Tk4%2BJVHm2bhCr7931bXD%2BnyNN10ev963%2FpP7zHzucNaLJktSHS4LJZVrcPTh4EDyFW15Cp8IfhP6MCWWW%2BOnMIqA170GOqUBXn1oeAzUzKjyfQu4oQOPZSc5yySoUfD0%2Bpzf2HHQDp1w91UC87qXe%2FySxowF8kx2lyfCFEBrPVJJb%2BjTcD%2Bm4pwOBCq%2FJDBk6hZY5UVWaAacie8JsebTvvt9suF97Jtu3IxhyGw2%2Bnzsv712TIe1ROFvQYZd6z%2FES6cqYlb79YYhkRlo0TZDfGU4k4kL0LzFbOnMAa0Cg%2FpSj32cS7nL9GlDQdHK&X-Amz-Signature=34c30dbc26a40f5a119d088209b8a949a687c781fe9fb18ab58e65b53fdfdcec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
