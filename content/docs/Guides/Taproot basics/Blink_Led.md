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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFUT7WM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC4jHDXrNtneuUgmfyWJ%2BM3sCBk8pJD2dZKs5MwQouZSgIhAKLHAOto7JdmtPCG5fYx8n5R7bkribEcezhstpt8YNBYKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeM4PtpUTktJ8SYwEq3APcwsZgzq2uCVdavsgfCgEpZOfARL%2Bps7eCSNfC7WljicQ%2BrJuAe4qtOseXUp5jeNdmiLJRIubhhWLEf%2FFdJQ%2BN9TtHAcp%2F%2Fsr0UNXk6XUG4Lu4xj6p6rRaXxp0FOK2X3k1ItgYCgf1eJywuOLPkfmoL3c7xkPO%2FdcvYkVPkmVHAhdpvLNR1e7qufFNNOEGeyKv6roIvAmiPF44HFGomSQG7Xf7jFoMBg1iKdoqdSs9c2fm4XvQHj3nXsQMDXsNpnxbJoQpv6OV6yCMVj3NZ1Jg6yZZoz2IC%2B%2Bxi1J4Ic5%2FzpXSTwazZ7uCCZveQkPXIpMfrFvS1hYorcRaVmzdcCi8fWqYV4MIi8dIMXzy8LujwHEVr98g6VrHUSTHyoiqoiPsoKulVM9vvUiZXT8iT832mS7qnXiNN49zMT%2Fvciq%2Bo0ab9ctMvkzFebVgJSclZIVMdvM2d2%2Fjcl%2BPETEr%2FkHPvSaepkzD73cjljPeBE3OHOy%2BXePJ72%2FZc9k54ekLPx5%2B44ulnnbiOJA9kOEm79JLclpdhr7R%2Bmx%2F91mSg6BpIuBhxWi561DOLl3oUJ6KPXyGqNRoSWQqf0Kei0gMTYcpJJXiIu%2BMhHFvWGtG7mMWTAbYAPcl7L7HICuC%2FjCP%2B7vBBjqkAWMdy%2FyU7RvhtYcNt%2Fr4GOLE7XOJKGS94%2BDKRC4Tt0qaqQyrDnBPYaGtLKHFTz%2BN0y%2BPrPjVuEDTdybwSfwAXiMuyU%2BiL6W%2FtgM%2BTFtHoEakmv4g09Mw%2FlQ1MGpZ5vRR1y0tLlsr8jxQhFUpTxsBSnHctFg1VSPZ1%2F3M3Ep4fwTJqQVijncCCcfzu7m%2FHx5NDCdDGFstRkVe%2F%2B%2FOWgWrUTjJP4s8&X-Amz-Signature=d653e61c9494c73a0954501c7c58a3712689a91bb1898203eded01f3d93cb80d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XSWLG7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIEQwyWrckMo2iqJVvUS51hnsiFMfrC3Mw113aXemOx%2FAAiEA%2FXDQskhxsP7LhgOErp52JgnwGBFnLDD6VhuY2PshR8UqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKjQ%2Fr1zrWlXaGp%2BircA3DeEW2DuwWPo50oSqSEwtjlQBpRw%2Fd89a0m1koUxZCCp9yyVXMD%2FLlCgQHt05YIWnKsoDVrdAMdGkFkkbiNGfe5AHY6XLHT8WMTpkRFk73Isp9nNDaHqFmvZ0ZcjDL5Q0H56xegEH7%2FjwaqBXRGfarNapxxSeIDL9PHfAPsZ68I0%2F2FKVAms35R2%2BNHyKQ6PeammkU98Tru4sHE1ZlteCL%2FgFvsD2eeBe6ruy7fgznNpQuJYDrsIPxCaqGHt7KVdumjUz8iUh0XIEZctOWT5fJGRyM318sLl8lv7yOxrubYcJRr5YwdTYyXxUxSVuYiSKxdBYKwh3mnM%2Fto9U6iobEsmlZCzCpLZJDRkUXt4V%2BHYRwR99D6I%2BL8%2FKTfTP7wIbK2K9K9mRfCptSPcl6NoLN9ADFtdSm7yBLjOfAuDJBVxtCeTrkgGsG6F6fFuNlKtfX21FetwnVAeKiC71xHDz4mI0%2Fpr2Xcu%2BoaPVjFDSLchskHp7fCo0mp4If4YZXKtUMd%2FDBREnL%2FvO%2FAvVfy5MUWLciF9il9THf9ZtHdyfQNEX6FXgceNWun%2FrGa1Nt9Rjl%2FygAlLuIcB2gDDoYYFILEiPn%2B%2BBgfetLjsm%2BCWB5akTPXghGTLXPAO6ZrMLP7u8EGOqUB4WklQLdL3oVYmYkvHxrhgGYQaTsatzf0b4ypjY7dLwqbnblg0C0VqbbjrKJaal9Fc9ST0ro5px8XUU3XsfhECQ9Jlf8i6k0PJ9THwWFA3fZSbCRU3t%2Bl3vbiS2Gzu8EaG9gTobb7uT9ioeggifDIkvbVSp8nWBAZuMGvihgnfPdS1eB6Xrq73f7ROK253AylXtR2ZBygvKXuPbQK3zZtrOd%2FWSpp&X-Amz-Signature=5afff5ac0ba8de048983ee1ae8f6d332f8961222725777c104cd0dfa1e46f9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
