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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHKWZY5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIG9PJdWF%2FSY9N8UyvxgOT6B4rytjgMbBW%2FMTT2Re51N5AiEApmLSF%2FS6rxpuwbGrQzcmSnW19FG9ucUK0jhspOvxrwoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDM3DmAlcQ440zDNzEyrcA5CB7ZdHq%2FZi2jE5Yj0T1GATwgeqymJXajMYgRYnEGsp8%2FVdyHYLqkptkvdpJ9MPcS8UswtzCI2Mr6qsVii1RKhR%2B9gn39dX%2BvQV79HPtIH7BfROOLxscqUkVX0aoCWxM0Q7jriWKLZouuc1FZsyAhd9MmDnsx88GmEhb%2BnigNVzfcIqoOxZ2QiYeWOUn7azbYKysjmlmvcuIPweXFnYP2zsPOulqG%2BA55St9k2wa5O4TRTCI0Ze%2BVWVM9FqB5Zt56OBmA%2FAdZDDlzrfYR92TIJ2veExp4rVuAc%2FvOPr6Dnj4yN42pUkYbAgwTsHhWrzPXohGB0mHXCtDq%2BxGlEsiM7Hxee071%2BqyfDxkbJ3ekOfK%2FU1Ey8DqHpb%2BhD8Z7UmO4xjX4%2FTY5xlSsvHt8%2FMh9yswFgjQoOrwChaoXe0NOVaF83P97Krh0XfjEPo2CEQ7hVotLCqBRIoKNfvjywD%2FmqzzYBWiGlqfdm5rjisROVLz%2FWbg%2FDOEIKmUQuMOXB8Bq3hkPb0xyfXIujghB%2B%2FSAUmBcVAZCt3nbcRmvIucF6CGIBpafCmKFz1k0tTmum4vbn5Mv65gSmd6wqC5sPFmgOUy%2Bj%2BrNdKuO2ceM3Hjx%2Fy1tpzuzDZr53OyeIDMP%2FgosMGOqUBYBIOqQRjvcnTw200suLwL8J%2B5ElUCpLmFoxJBgPFcxIEPzEqQCvq6aSM04hliRDUFF3NEmAzEraxUTZxX98Ipsf1fuP5NBhC9NzJeUlmexA9R0Atz5Rh1YpuYb1vu%2BwPPnEJfmWCSYOZQKVzqaIowioDiZ7IruVzU2D0wkaYWbaRKB4NiOIsrkmHxo0ueqbTMNUziW7crxwuy8DK2F12T0ncbf0w&X-Amz-Signature=0583cf3f0c0a48511ac4508f7167497349bbc75c339ee429b4a55f794cf627f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RX2OXX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICJNgKJE%2FNP77Y0QeX3jRlY04GGFm8KohaoPY6r4fHvjAiEAuWWIhGkrCOS87xMU27uA3q6EXdwALnvG5RUaq0LeRToq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGDMBPe%2BPLSEz%2FyHHyrcA1CJEkLzzBIieOBJ8Xn60WMvUhaDqFOyy7cjxL6y8jJSn8OJOpTETp3U7%2FfOENIJZ9OpUzR0GikmUiu8rKUGUFRFK71qUvj%2F%2FYyxHqDNniygmdRWWA5BdnLbqvljwPPl9xxBxKsLLorZctaueXaw3T4PflfXJQk%2BUlttwmZOJezrko%2BNsnjBWrb3HQrsFSB5dRSZBX%2Fna5BsptpvQ22wEMFXJYhKywQsMK1w4PgvXET6ndLSnLuwInP9JD%2FEZupjmzbNnyz0RDoBFGfcsNJp%2F8RiPpmOggrVMMcXoM9BsjsMj%2F48nNt1GgnTbRB%2FBf6xnwJAXwXKVbCnsfCPb2jB2tf1FUCllTef0Q7xnx0IvRN8%2Bk%2FnNTJUGRQPQEhAr4vVjPFg62fyhWwUo29z3pm3%2BkpP%2FI2tPQw17IHlrRB5wMFheqZl5Yx57veY3Q%2By0ywtcT3loz0F9MkpB6ydhxgicUzO%2BehY7BKggOAQsRjtl0DAaEqu3QkwdRhEYBr%2B5prFB8NzQb7J%2FoefLHtHZz%2B7zE1b8n6msGoBxk9hUsNQRj%2FeBrq%2F4khCznWBjVOADV7sCPHGE3aTaiPTLejikrqjv3mI2q5Lone85v4Kgh%2FAx77%2FhWhio%2FuuczjhAqOBMNmCosMGOqUBYPtioj%2B3k1VyF0Ey8uhvpIyE7bu5xVhnnTp0t9Th3uFZqNNHNF0IVJyY%2F4gOb4mrh1PV4VDDnX5egiK6NWlZJ9qsAQMcuCJqoudjfaMzy%2FZWEsyaFASeqs5AC9nUTlHx%2FrPE69TAFgi%2FzyajdVVbFaT3kpFAv9qpm1pxwp%2FDlG%2Ff3zjdzTLMtoY%2Bfp3T6fPva%2BjKUTiOqo1bU91rIoIVpN28%2Fa%2Bg&X-Amz-Signature=a45723119f240a2f6ba6e712253d2208bad50ab0e608c9758b1b20a59b7cdce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
