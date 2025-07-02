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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPH2QBU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqFNTkhKKLPGvuN5WOAZGk7wLx0bQpBp6wtrVfGkC7UgIgbKTD31nTAz3IEOfUTxPxeBa8%2Fv2fv4rqPif8Z9wOOdUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqAB%2B2mLfx8qM5EPSrcA7TDYNIWSfDaINXEgpMrurft64NOMws5zVZOIjDNQJ%2FI4MeXQ7YoXzDvo54cH7Q8mkelKdllfk238E2qQMh3lPgymPo09MdXWaq2k%2BT95RmC6ll02XIqoJBOMgYMXI%2FFXrxL6KIj5N2E0GCcFTKKdVXr%2BnrIh5vXapEUoHJgr06G2OKv8Jr%2BD6kxvA0qEplgtZymttneVLJP2QHTV5Az4Tcsku7H4cbWDnDt3lNoGxb2p0C4b5DcaSZfnPo%2FOCcZPYeugNdgW5yrPpkdomc%2BJ%2BAszr9v35KcxePRvYbHrOY1CTPU8L%2Fqf5sUN5ZakIObSizpSOJS5OP85RAsgYjJ2hat3xmM9q3sElkFr2uKiBQQMbxp60tOcYAq2Jt5KVksntsNXI5T7xfO79BpIf2phiHure5hUniWA0DLIpm%2FJcq3jRVaSHcXm17tQOQIJgu46z%2BF71NAP%2BvJOF4mTEsStiELvq2Mx0lfHIROoerKIEvOKCEjJn8c9vSNhtDGQxPeCxLxPVYb2IwDyIU57LDtIh7noYUGCwuwsrlpCd%2BEcRe2031cDvTYDigSAG3C7GTn5Cm6modYRHNcGhG2geLAhdeaVzFyZ0MgB2I%2B8oPklu6y8qcISt9anU8QwzT8MOm8lsMGOqUBEYSNpv7BwlD8%2B0Pl8Bv7yJ73re%2Fslm%2Fp7w2e3OyBzd84wjFXzuzsJXVk2NijZsWLnhwzdTa1uOKZu2FDRGO%2FIbDlZwX7UVoNYTF32hpN9NTt9p024t2xp2z4YkEv7oja5kqcqk5udkxbwZgNfbNHmpTf08tLJDep5jvSqgoNXu0jOimbPWO%2F2TKcBNGFdE6UOxwuWlzeBLi4BGfjEagSfsHhGswo&X-Amz-Signature=d0fc366aef9f38012b7e21c71a8bccb4b3b9cb576ec0ead209fe7352c55e7fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCMT34EP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCXiFIF5O5dDOIUTu9X%2FRWjHYVp19DcpJ%2BLJHa1CwgrAiEA%2FzlY7uCNN6EvZwFNUpQMlcPMj%2FPbCUDPSQbA408zDvEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUATzgct3IiCEkWBSrcA7T6xjaE5NZ6Td15%2B79kGk2ha5keKL%2FnzJLlLrUucPwaIkw%2BpgQTlTGHbzLTlgH9xtREJU9ChDN%2BfmRyZl54Oa2jttwvQGCfgHx5rvgtZB5aGSk0UWp4ZzIrRNIHcL%2FntL%2FC5mNH16Xi77Dgez74EWlFK9Qt26oX2Kmtbiy5p954YjD75byjY5AEhL0Ityr67Y%2FEfRoDaUUnN30CbHiyH%2FfUUqnSZIKMqJaW5ZNeiPx2AvaJrVGEbxIRWP7PYr%2BoOhKbT9%2BB07FjaC8Rl%2FoqcRxzIPEoT9dO3OWa7Pc%2B5oHWeG9ae%2BXW65nv82voooQzgDxRt7MXHni8cFsmQKADOCKnDZP0ViYnwXC6PPvVMhGd3ssJibmVNDlWqtLrRBCQ0qeLhjCEcBBcD8OEHetexskQRQ3E%2BzNGbTbzZwho85qwzST3zPlJzaA0EJPw5rb4yQJAmBFcevOSPnsqDK87sVHU72qpUCPOTknz2oWjXVOAt3AACwSQM65NmP%2BQjBomk1ZCfblB%2BJwwNzPw%2BI6SKgoaPIope5feCPcsPZU%2FSjSlJxF%2Fv4C9GPlYJWzu0dfKOURlDMfTF%2BONXNsFO9%2FBjydbjpYWdPzwT08lN3T3f2nt30%2BKCMRD1Obn1e8yMN68lsMGOqUB8jrSxBJ5stG4sTed69Nipcbf9Esc4rxzqhx%2Bw%2FweKRGW2bwSxfAT%2Biwk9IccLZn5ZIp3KgwOgdWK%2BjbZaF58r4IqrTUR0eLSVjKg%2FPmi2EwQSLGw1oDce2Mf8YhKsEcsDsmXQZujN8ZPwM%2FT1u0t%2B8H5ZGobRwe%2B1bGQlVPdhVFTX%2BlELhCDDJq4eSBm7yNLnAAAgHzdE1HrTJg7Abx4vWtFTGOi&X-Amz-Signature=2d5edbe55c024ebb728c70a99a9a235bd4626049bfff94d41ebe4b0d46c170a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
