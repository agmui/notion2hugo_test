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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ65B3B6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnFC%2B%2BhqpZTCn4x%2FVF3FEWlQc3p4Sdrz5W6b9J%2FgoggIgNiLHv01Fo2f%2BuoMr%2BPro%2Fh%2FY6v27OOhXgaL4afKbZrkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDF27Vr484W544uXhHircA2EMiW%2Fs6zJRSM6RJkNOUprHBXk4SzqcwcfUSNmTAkobbIbCCwskSGlGVECQSVHbuEyupiXlsYmhVSGuSBNzA6cRlZufn0ADFLQSvsFEn0kEdxUxj6HHCQY2CI722%2Fz%2Bo6p%2B68Iv9Pi9GGPVwteTI05pzUsES5PCGpDxgiuddHdAYbS3p86eXk1KTGF7V6YLJeWnvP2nkuAqliUnIA7aobWRR2asdc%2F1Fr5AKTfWiE5%2BLIj%2BXo58c4CIuFvlqZejZX32q3jR0LCsCYRmqlDzwUKRoNtKn89N5AHXsJQLMCEtgLKwuS6H4vIHKJ9NWROmsqw1Xtru%2FteMES99cbZIwehIZKgweX1CMGCG6TGiJ0GHM0GNCDdTEaKsT1CtQAmxtQjFOlSvc6fDHar4jsQ%2BCUWi8xe%2FE%2FKuptjfbVZG05Te1D%2BC8ULYnWsvFIqcNlyxROTv56smvlGIAjEoMNGD2DZALumYr6vaO62gl%2FLLBWgijSEv3M1IJJQlEw58GUyxAX0hF2YDw3yqDvlIkSexbrZ%2BfDokusHIJcCA5qNf0iff%2Bf9DAyalseuU9fsLSff4CKafqiijj93HD1CAi5G5xGG1OvEcztxWaNzzYQxewzBaxuLUqTiXCYrMimN2MPTh770GOqUBvS8iDJC9aX7ADMZoYFFIiNWdnOltzxxxUpIJPQxwUpVv0ZTlijQnzO9nATaUYm6tF3dhyB847PO3EMkvz6fZmS8dq3h9IdelVqAALEN5kb1GGmKyEtqD0KtOo3QKcwNOgfmwWWGgkmqoBjx%2Ble4tql1kK8UZdgR0EcKx3fevgieJZpKN4OXp%2Fafp1w85cq%2F6cNzBSZkU9rgW2Hvjmq52RkIlB67f&X-Amz-Signature=e406a132c9e35e964b58479a69ad0105db4b4a3813f2cfa2a26d2341cddd3b38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCX7GAAB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0cLKMRCHCut9ur5EMucrOck6f4u%2BrI1ht5TGaPI2o1AIgaTxYpiQ2ZxKd6GwUYr1Ifs5blRd0EK3YHFd93G4x3e4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPhXe9IlthtQhrnm5SrcA%2FqfoeNB%2FX8Op%2Bjft5Tprj8H9nwxqR%2BnU5HEDNYXVyoh1cU5UtqZb%2BU%2FZqKTOraklOxfrBo%2F3EStaGdVDn6TwbTTuW4mCENoN9lBv3RsRFNC9jthhH6%2FkeW3jxWuCZtgQcKIehoml3E%2BFqgwEoJi%2BoKU2vkxgeMRJjnk6Rzzbs1CgzvV2yfC1sjnD%2B6sOxHdkhEmJ1hMc%2F78yZwNq2ov8la1sh4vjlfrjhDa3z2JDgH3z4uQ4kjg%2Fjjc9v4qex2QO3EuYNsUu%2BDfSd5%2BXe5cqyRFOhg4xinQvjzBLDumFgWb4hMpJ0DpcoB6H0AzacRKxacdVfNhbDeuQvharQllbukCNW1jeI7bIRCyuYPUgoxFzhT0eR3WsasA3XJV%2B5vssliVjQKYvta84oFzryz5hcwqbmY%2BT%2Be3lzSZLe39YPWEBZpmvJwsNeYlVKT3gYS0MCNFHsaISw3Ns3a6vUEqs5%2Fn5fiC%2FfX7OiBciwHeSPXRi56%2BPxr7v0rGSC4Lqn5MUWofYghV2HkB%2FCpGwIxu8RP%2BfYvlTsCrZx5zdF%2BL98UnO8xcH1yvvOAx8QwlXaYjnNoJtPWIAwBkj7mjwQz33opU35Zi5shXFP8wU5ZFNREOy60r7DrtZ1EmTHPrML%2Fh770GOqUBOlh0monplDhgaFYvd9uzkg43JljPWZQceHLsnvk3AfNeW5XJTj9bjustTqe6oiuRCL2xbkdyOWMp4Hf9iFXMGCh1naiGBeyxmYqgx3cIqE1J%2BJZaOvkEHfEoidXpUKQ3PFilr2fXcbZ41VCToZQYvHtpOw34TE%2BBk3d8TPg3MaeFV%2BPf%2BrgS5czXmLJMTZwVwtJm3W28XfzAus7fBJ3IYfXh7Qj8&X-Amz-Signature=d85c091fdbce3027864dc3317715a7ac56486233c9a2e7c38aa1cf83a7d7b7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
