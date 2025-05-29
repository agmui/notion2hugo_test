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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KN5MVS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANs5mEDeTu9iQ7PGGOY5w047LdHWPNG29W26BMKH2YAAiEAmu6sRgWk9CS2O2hysvzJu3Tb9tIvKs4g1Q%2FJiXYSHF4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOG9M8gmYYF41W2OHSrcA7yGHZ2M%2BLPAvW9RSND3eMUaSGiXtN%2FmJ5Po9PKgfK7UqQTk6X%2BxeTAbYdCY46YVyt46HFz75b2BdgO7T%2BP%2FnVhubITGJtE8MWJ37oOrqJP1inKhZ%2B8wCnv1QuDrFqRzKmXKiu01ZMAzBQlMan9KlzNJeu7aN8w9r4TicaacO%2FisfeIUCGRAmW6ZmBnWMVrrASVxdFHNgW%2FuUnXoVBBjEIKgJ0sRXeDqoADjEqprd2pehZO4UjA6chs57v6%2Fpwa%2FJeOQ%2Br4scNClSoDxGNp9I5msiPQqAV8VxaJsBQzyCfLF54rsA9uuOlVohS6nctycIcjzVF4CJQmc8mR5nvJKX1uVGIZZY8iQyNrrSawzTzSp5HWnv4mzk3FL97pDcjKpqR7xshB7uSBKBOPmJDGdtBiQdjLA7ad67FnXbSEt7dh7hdouamqnAKCnvgu1JkP4DFO%2BqICtP%2FYHGFkv2%2BTEmEoAch2yu%2Bojnb1kzXZZhY%2BBcoqY8UYrfCvru%2BT%2FhHu6ZGm8REZCBdl%2FyBxeyLiFZRV7XvqL3PTKUg%2F8quVEyesIdsW299fOLL%2BkhGaxE4cFf7iKWfFVCb%2Fv4WbnQxkf7h8e3iw40M%2F3aZhRcTHtwH8pcYWzcL2ZVx9%2BaVRwMP6v38EGOqUBMDqx3p1F774sECcb%2B2mJSZ6Mw%2BEbxh4itkNfQXtCYL4n8dh81OfGglFBjARp0xCtyQtuHxfTc8PBnTb%2BtJF%2FDS6i7n608%2FB7Ts0zExdjmt7ndRPpPvbURbVNNMjHJNTaYCz431UbMseHBD1pE87sbUcYP338sp6s%2Fwc1CUmA75dfdhMAEds4gHpcF8KKLtcF%2FiaQcc0%2BCRkKnBDEb71DFGgd2ind&X-Amz-Signature=4e7e56ef9de880a607a140e129916fd341ac85d9377a3b43d31ca2315c2170e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAXFNLZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzXfTKJdeT8FfJmlDB5lMlYlxrExKWur4foHEHm6gejAiEAvLju4C6g4SYK0AYNNsIU2FWo8fQEV4YxZzvBlr8U7swqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqnVx1DxCbGLaAumSrcA2lZMeteOQlwN04Eho1K%2FeOyg1k5LoEgLr%2F8wr7OPr7FIG7eG77b90qsxPoEQ9M2%2BS%2FT5yXBg5PEcntL1QvLUfxpAzIZ4EhDcsnznthGPdVSvdR7BmeYAew3fLg66PscYch6twumSXFiU3Q4tCzS5n3O3NiZNInbh3OdXWtmcZ5F9xsF2IG5j72oGGz98YBXjF6U5aS1wxqugw4scupSHDJ2%2BtTpBaphBviTdXJodeeK9R7kdxcRDmTOG%2Fb7V6tMuu707gTipxvgY0ntiKfft06O8WyzSO5WGKgTrdYmbxDhTdRDXbCNhWwcpbIuin%2BQVabEvjMxtEtZ%2BPQs2kU7jx9dG7aJXaNNpFuPolK7ufmc79iSbNPxtRexK%2Br%2Ba5T2feOOzqym4f%2BNJV5CPseDDYQpmfarZahzXYYEqEoVlpzWrlMCZVwcu0zuLGRsFeE59EZSRCJYa8rxQnGkorrVaC8Gshoph8f4%2BngTEPtX%2FdQruY6xknFxMEhmDsfEzVSlLNDu0vi8uQD11jmRVOCe3fgWQ2yB02nuf3%2BMfdneIEVVuOgu7kiz30zyMKW2DuKlb8o752zKJgLEWuCY00xXnWqtFqafbCcvsvJepD4DtgXh82ofOiDcqPCyGtQzMNGv38EGOqUBE9FYPIAQBvy2bE4vNDRLTMRgF64rKfEu6YkfmOxRxj9YZ62EC3TnengmLm8pplVUF5cyGPkNM6iZcd2%2BTcy8D%2Bn1D5gv1EsiXJYtSJz7QW8v%2Be0HWJB%2BIlIV4CWwmoCWCp8ctwML3fyKnHsh0wEwqjbIkbFbZJjCyB0HTMxA2nB0zNP1o2H7pMN6HUiVsV%2Bn7CMRY5W1x0h3WKbHh%2FY9a8BuMJlH&X-Amz-Signature=3542425d368ca227ac6e1c743a671b4dc608cb658582615370fff0cf40560b64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
