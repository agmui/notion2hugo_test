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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPYQPLGM%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIB929BoCc8LImWX%2FkN74hkUHA4%2BpIP18sXUTHuPh%2ByftAiEArYg3CFwRd%2BzHGNJAhk6xqJRi%2FjQ7JL%2FH7wu8HE6%2Fq2gq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJQbwUBEoCrfFbfzHCrcA7quxN1wGf0tmmXIUoehterR48ygHaOKvaTt4xnsSMLEMNEwpWOZ9%2BidSOgKcO5h2hwCOlkaplZA4J91xbsOexVc1VmCFSzGsjWbYIGO%2Fz3m6MmVC63Tty0eNTxTPxgei1p8So%2BEhLhT3RjOe%2BaPrY589Kh%2FefqmUSPZkjYvW%2BNtrVd%2B8d95xxFi4yS84IosNj7u6VVV2oMGggfZ7%2BCuOkZzBHTZbLgv7Rv6UbX6hz0MqPOgpIumVQDYzUYwzSZ9FTM9UlHsIQq8z0DU5a4E0WEu6zbJbgYjDmWrCHXQ22dUXeX8bDLGi3ANrVy04el3HSxXl7wNDmgg7G5DeRJ9e%2FEvx7nCID%2BC9snyo1xTP6a0KsiXWrUUuxaooF5YRAowfzymMNAogOt6jZ%2BEM07nGAMhEngmBKbiA%2BuwGXCwCvQBs0fKNrBgGDfOd6QZMHC8gsk82LBe3vaJp1JD1wA2pUOOQ%2FRxotafzqVygE2fJUbkg3dBEI8En5tktzwichgZkAaQQnjcobwExNclG7Wje6ihQjbkuUqoWmWCjE1%2FqibGq5ELOMnq5dL6ZfFAk6um8S9mfFb7VX8fAVNl5xkipg68%2FTBWtFLFRLVqVe%2BWFiHDD7XMu6TqUWQY1VwUMKPM4MoGOqUBNuEwqGM0kMRGl%2FbVPl7nQfjokVKS0Qe466oToBxuI9M68PVS7FGJDZipU94rusOezyuboYFn0ySoMeljxGQwKE7lW%2BKA3s7Dn16LvUwqWO4ZaXCMPYVlY4WHJFZ7xx5yTnOqxCCUG%2Bhk63PweunLbrzGHQU19qWjca1rqUann5ZKSv%2B8kv6NGdeVi%2Bfqiis5UDN0wtpuepw7ssJAJDMwdSlaN5yp&X-Amz-Signature=2ebf62017c780d836a82f3b5e01ce95f85c59268dee2a3cd8a5f0ec504dda9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QF65ICN%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCID%2BfI%2FuXpgcD0OBsCKljMlcL7%2Bda72hEv0u83fINxD8dAiEAgQadeEMmc8UbRRX0D5YQeRjsO3wAnEL6%2FM%2BQRHg1kJ8q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDKWB4XEfc6iYvoY5fyrcA7Qm3gI7VvQl8GOTKk3fvXJd%2BObyfADKFNQxlw1Asns3FpMscrxBfq%2F%2F0sZ%2BVJUbzfJHdxpIpImoKXTZfmXlRPAWJAFnAUqhyha%2B3Hu4Z36GJyyEiQkdboNZ4aQhwhZjxhpiMLrEHgQ%2FqtCQ26n20CFj8eb92uc01QCZz1tC92i%2FN0ePMAtXDcwKgVxMHEQV2kuXVH%2F5sg0GTmcYp%2F3DaxOdCSIXIk4IYZVd%2BSkcBVOlZWwnkywsDaM%2B%2BgkuRpp1uqabizv28FUmr0GMHheC8qbSJQX1p4jm7g%2BzdXA6f%2Bf0pRZAhJ0mbwUum4hjI7tatm2LvhLMeTM62%2B9cwn23BrVhlMvmG4FaIAeF%2B538Ccg1wH7%2BvuGCZ3xUFJXT9bnTrL2lkpovqOSDI3X1EFoIOtjG0WipMulOheWJA8xKGPCu4WFimG6IE8srVauKTb9hAvrV3dtnbxJQhWj4TfGdzFKNZnV1Jz1JikkT9e8ANxGZXMbZ1HGXjehbA7tmtgLb82QAJ49h9RZ59nrRVAq5SRFo%2BAqWYiNQsRd8ocQHTNpy%2FG3oCZUxToECPl2kPFGSQJ3bPV%2BnBJyUH1GGFCSh%2FtNMGd2qgXZaSGiTLXpv5Xfayh3DNNV2XTLEyYiGMJvL4MoGOqUBzfYcFIEqIlV8TYjT0XRlZQCGOnjH4mT4303nZ5Q2KIfhtaPd0Q2ZgHw93d6IOU%2Bg0oHiB8ao%2Fjg%2BwXMLxuUcVO9GPoDSVoqvdWbJ0uuW9VMVbeoOoaq5XPzOqQeGRtg8hoVk%2F6k3cJkYq%2B3MrHsFqBwVb9706AWw7l%2FnOO3bz4aO%2Bv4Afqc%2FIUxMIjOpqSoKm7lkbIaBKWTDQwSCSTZi%2FeCIBlVD&X-Amz-Signature=a7acc245a6bbf481682a422c9826424bc4c415f94b31319b435aae66cc543dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
