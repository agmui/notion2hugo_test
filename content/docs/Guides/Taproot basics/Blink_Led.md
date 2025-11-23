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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFK72U22%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIE1bK6zS4W7Os%2BP72Q2xjpWh1asPrWdYpp7dOQo2zH5gAiEApUpN5vasELgBlmuxJOvCEL686jHtRHIDMl8dzDe6p4oq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFMJ7%2FtMINds8uf6iCrcA0uw344yFQ6di6zS%2FSHI%2FWLJd5a9FYJnNygJqgHvJBsoUu4PUSlTVBW5Qz5abl1DXIbp8j24NqUAGEDfF10YM4%2FwJd0WvVm4G7uMzkQOYQxt4k2O0c8gYRjZ%2F0Z5s5wpe6p%2BmqsMyfLpWG%2F4q6%2B2Z2zyKoyTpGwYvNLgwSaaAcDcsCnqpkiyRKMLBTK4O1xz%2BTMfZ%2FHL0DHar0VhxL%2BU5xkvcDfm5yot%2F4bIRW5ASmhlPtwOx6fIRlxIF0YPb4AQ3n0LFgMeMed9nhzDpfX3F%2Fd7RhIe9mrER3iN1w4D5GCEsPqklRPie4hu1ErDmbDgZ641447aGTAaMIf3L4LL06LtN8nCRJ1CMvNb051PuijBmbRGU5LG6D5jKmXj51BdMTbe4d1aYn4G%2BPtVu9vGH60eHZe3wqse876t%2BPccYlsX3G4%2Fa9jdZxPzg%2BAwjKbNmZPOnHKMHGSC26lfHY4e9WC%2FoaEDCGcYXYkwholedLTx4DmCZpiwERL%2Bx3EuDTmY2Mwlo3Ycp38Kr%2B9pdhve7VjsUrL2LsbjhmWNFXiN7UN68xqxVD9JSgmaZ84j%2BuBXk%2FGLDw1cOGbJ8fIgMuPdzhaGMYbOZM4hrrtnt%2BNEO6gTI6IJ62zkQYcu7NHUMLSwickGOqUBN5%2FoYfnZ3mGV%2F9R0q4D3XlaD71llGUMkuP9hHOGYHVzD5wrQZowCnvww%2Bae3yLhrtAteQxv%2Bv1Qh%2ByIg3g1GFCWXmOMFuQpLl4C0iYvtbkp6gylEQV%2BEIOzmy7Jou%2BOHcU7r9sRILUDRW6hbvwRkbrRkz%2FUGy84C4DmWlzgvcI7IFT6SxgH1YWFsrJAHE5PgjZGdWgf2w0HdqEHN1jcRJf4agItG&X-Amz-Signature=81d93cc0144f19b7275ff938c4b814498de797a4f910479425724cb408bb488d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOB53V2J%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIECmMWz5GGQRQBehlpBUNjtqFwAoc8yuRBhX4c%2FYCePXAiA659snhJzlBNuMbRURWQ4OyK0HgbtfR0qJeG2VVbw%2BvCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMj4c2RcOAEjd74XYgKtwDfFCr%2FPalYrDflAAtZ2F062kKkiaSa45fxNrFsZ5dJgwW9kXpDx%2FjhmZ5L0HBTNzItrNd%2B2MPn6LoPBgAjy9oRMEnq0BjQD3bOlgIQePkCs1%2Bc7jW3oKQ7WjSZVEAQ2MsG129ZCNgQYtMFnwWWNPse%2BxDKyxR9OinKexLrEDQmD1hR%2BuaGPnc0f%2FohRY32fcn%2FcqCXp420AViD%2FGPDLAwXuupACh27xrO%2BNHJ1zye1WdVsBA%2FwDd7zyM59VPnxHV2CQA%2Fw2CZ2xNr6sb7p%2FzsBW4MTyOsWm9Fb76GgR0zsy1z81wNrj3mJNv%2F0nbFeWpasgnWH6zmGK1tyeDJ7wKAJEQIhcFJEnWEpT2rP5m7CTjNtI4QDf97iEYbv6wHrovfg6O%2Bldl1yaGSkv7dY19ArWiByiLDMPc26UNZtq2WEpRx7J1rJKTAVxUe3%2BsCkR%2BboaP2GkFui68vmKizGtzy9HE65u95WV%2Fq1NKRjpqvPQOlX2dfj5bSikrbzX6r%2F%2Byh7p7qOHU7G9UtpMdKp8pb2MIvhxykCKcneCvqjLjQvo5xwk2oJpMO9hIqK0v%2BZMnUSknf9w1AS0vxdw9eD9q5PdA5uuYCcMiuRd6H2otN9I2%2Bgb8yL0eCIvViCE0wwbCJyQY6pgFeR5%2FujbC3Jezv053wYMnJgmItlIzCPxrblndruKtT13OgOPHCIHSdnApv0JOlN14%2Fbr9%2FM73DcVeWQLuedgosQdBgMuzl%2FyJWi%2B7eAoZRWA6YH5qybOSVF2ltVFk6Fx3r94Hf%2BKZZSj37TLw9Up5Yb%2Bsd2l%2BvEZvBPLfTnQXvx5oNQB2VByWVRfWoz4tYwAgPNbO8c2Ch5ESZhU83SaD9jd3mm7EB&X-Amz-Signature=36ae5ab7414d3c6caca3cc5b4b7a7a6c1a7aa07100d0aaa5651c752ae0445f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
