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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVVUX2BQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPlx8ZhkdRcISv51ZxU7p9HcVMJwk2%2FStOtn6z7Tq%2FBgIgUPYSNft%2BuT2VLs%2F1Y8EcMgCv1dWwiXmSgdbGPNMwRfYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FsWK9xKY%2FCQ1D8%2BCrcA7bo46%2FDDaTYAnkewjYo2LQx6b5DYcWNXrFC8k%2BoexEjJJT%2F27RrW65lG7PdPJpXhtdenI24w81h17XJnS90iTmMs2izSP6OFcl7DSaxA%2FFnmd3mwgevpc80nXksB67az29u7PvF9H3Nyx9daGNQ0qllc71%2BDTS1D7Sswd2%2B8oS28SX8YuRP8lvAAHnjGccjV4USk%2FIgwyJmeGN5sggnEtrIVE1ALKK66Hlb11vSytal6Z2ZCU0Ql6rfZQd%2FTROT6FmLThcz2Cpi2ZE%2B9w9eoHhOK0FzgkEvRzHYBjTtkDL3BXUpZaR9tjKAantTFEqPmQ%2BCVuugTXRWKtDaZeyT%2FBamAhhz%2FCRJne81Y2N9P9amP3641p3%2FNIZ%2FuWC99%2FZVZj4FVGZZOKPGIOOONpcSSnhwTkkPYI9qFCfUbSouCWSK25RDKa8fSlYcM8fe8OzOCBA9N9t1EagXT%2FLSZ5sELUg5Qz3LH%2Fp2qXQ3Q0bpr47%2By%2ByAQI638i100CgQmWfqvI6N3yqLF7CXgEi2rZ2Lok5VK593RV7pnd9xbt%2F%2BxkvU3YgFCR38gB7%2BPIUFq59LVjZ6voOlkL1d8pYpa16034ZIvRx87A%2BQs7mVhD7ui1lr2igfKGvtE9NHR0NAMOrypcQGOqUBf5ZkGagdugfj87AqeUUJH7OSEyKRTOFFZ2wXoO8gqeF18uHFier8PvGq07qetjxMczlxcH9Z4nOY4h%2Fw2A9wEoNM%2BapnlgwmRz7B3t%2Bu2s23%2Bpx7f1J1EhvE4BNxYndscXSRX0nNy5mraGAHqf4ShUJuPGEInHWK4pEqppZ0AiylX8Pr0Xs6frZvp7L6lthBxxLkey9foK0aWxV%2BNB7Gq6qy1cWU&X-Amz-Signature=e1f36229ddb4e4c8732c6c9bf32cba8a07ec89cd745e6192178e293897c66413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UXYHXC4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3MxKe6QCsynD8fjD%2BUuOt80u67GX%2BFLXWCQiN54XLGAiEApeJDTobZdm7qX%2BODuYeAzJ7k4hY0ggNz702alBk0UEMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhgaI25IDQnn5DluCrcA28LtO1nApnYBby5autm5GmEUG%2B%2BhhQSrKFC4JaS%2BMANFeN8A%2FGRYcqV5Y0kfYBNyEweDd9dMMbjTRmPZCp2bTwMJBxDu%2FF4x0pYAw9n93%2Fh2A%2F9CAeSXNs32lcb5fh3pfwLoVL1%2FF2HqXWD3QJ3GTHkbCyAp367UJ%2BNBjTSnckVyZAd3jAxJyCRoABzfpkdYbB%2FSbnZXtONZui1NSpHuStDe2O%2Fjd2P0XSJpJlUTTb4DS2Slp98KrNePhRjjW6Sf%2FVe%2FztHxUNTB9tSWciStwjc%2BmVMR9UR40Tl1OQnbYIjFG0L6vSd5zQ1k4IQyRtgwGDRUAOXMtpIeeRBRvDh9UxB1GB7Ag%2Fhwumf9z36FQD4F31HFvzHVL13OWY%2Bx%2FxCu%2BCJPhlYcw4RxNOcGUdb97C2LbWMmZdSLFwkaQSMW3DjqXXf6qy3Bhoq6i9QbZyeC83x7iuALsvwFitRwiEokWQWoJ5L3fotqjQooCadJidK6RZAUBmA%2Bfi5r96S9Oi6TauRbnqDRDgSA1tK8N4%2F1EegtfW0eP4J179hneH31%2FCwEFtL4%2FLbexl8mK%2FhtVBQW4avMGEG8i9neLnozc4Qcuc8yk6tqcd0zlB2eeGree0wLph3g9AOngtgZ6p%2BMK%2FypcQGOqUBAm%2Bf%2Bu1HeYMF6zGR4isErmPrpaUd9VCvfnR3XeRLoz8P%2FWtpQz8zwZIgB9ASwZZeSqGtibTSKXMs5eJfWTAuyHgZ4F08YBbtEzEXrvGtK%2FuvHrx9YEAddz9ZcVbfiicuI48Ov0fHHUoESgLtV%2BM8AbiLrTFVQMlpNngBhGUi5aOWUo%2FgltYVwKzU5hz4qSp%2ByUyO5mXzMRJTPwbz1RsX5tCrOlvP&X-Amz-Signature=8dc301467c487aab2cc2366f23d42db36996f30e6fb392216a68ef1ac3eadcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
