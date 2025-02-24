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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BRVPBGE%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ93E63CWbdJklQv9GFYJ8DL%2FzM5MWgA2ry7MUxMmPUAIhAIIFSf16XefoWFn9yLwam%2B3m6rW525Gqsr%2B9VBYVmvX8Kv8DCCoQABoMNjM3NDIzMTgzODA1Igx8%2BdRlp9253rOgS%2FUq3AOdhtdEa54ssD1BGs4yE9t%2BamfTxjU7VM4qVXhntkb5%2FxL79YU%2F1ouzLsPqwB52pNLFaxhXqcDYdJgG6l9Ml41k%2FxLs9W%2FKzSeTm8tbQk9%2Bk%2FFAFkuMzMbb2p4ngO9dTypOYOek%2FygbhqEhkV4XLYmkENkjyhqtzG6HJeMUCuQoVVaqhWWjQWoKY2KArP5bQ8t2KilucO0Wps%2FkgFtDrvrru6Z7wpP%2FhxIU3WHnVIt5D6lxmyi8o3F%2BMjbi13K4YEJf2WK4wcd06Amw7R0bam4rmPCdxB5f0Exl9IllKC88bpx5EiSs0yMCxji8VtZdqVvQf1tClgwSro8eujffrPks%2BlDlvxrjzG%2BKbiJEj3J4njc8LNPTMG17vWS6YWodZBPbzOL3CKtJ8qRSALuuIIACxLX0Crc8TNQJCIJEIc4Rm3cQb2JsLMfg1q1R%2Fz3FNL8to44pVh2l%2F1Hspjur%2FL6rz1zEIzplUBAFxTtShrcfzZQkXJeYLZkFZ9w70DG56fYakb9OpLbMfvi4bSo6sa%2FNZ3Ym%2Bdd15CjrqTMdu2SBLNuacnZk6ebgkTczxY3MkgZzls%2FUTUpvkSM%2BQnnTnmWyuSv5RBgGICwV8dwYOLDN67orKu9Mk1OlciFPOzCK7PC9BjqkAWZXxcMBHYlD38u2mqX%2BqiHJmRXI7pdZ2ZPFEvq%2Be9c18o06viMZfAYagAPrymCVFlFpeZbmnmpvCPY6KmH0ijfvCFoB0iBKfHiBPhApWqEPTjiuLXUjenISeWz49vp74%2FX1ANzfb66fDH0zswEZ7OjEW%2BeDH6hzjNV5f%2FbOYMt%2BoOZzGWtkhQpAZXkip3a9ohn4aurkZsBL0XVbv9Ub1d0f%2BFAU&X-Amz-Signature=3c7cede348677a061cf371f2e890c0ed92d5a785fc551d005c5b53c2439eaa3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKWHJFS2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvxjCwPhwuJI3PltGqBLvXcKteTxNob6b7jMm0qGxzgIhALui4So6epybhZD4VUUlmDnqPf8BntkcP99rr6oHGNMDKv8DCCoQABoMNjM3NDIzMTgzODA1IgyvtcoHQicYuRdkT0Eq3AMh%2BbaVNy4wBFzWGB8N0DlzxL6grZ6tDHa%2FawGxe3mk8U13CvlEFzuxqfmd1NytkUeJ5x7JhlFjWixC%2F8tB2EFK%2B2ZomoxBW0%2BvPOoWU%2Bh3%2BmX9KKfDfAfFG5otpKAw%2FauStamCPqSGRdGXRDrDlu8T9wXzTC8GkKhMXeurSGPSSkcMhBOkaEFPJSXz2lsZcUOtYz3TfHcdXVlgnYWu7J4Hr3cpkAMYIg3C4nlAVvRpjnDf6HgcZ5zCkI89DVjebrWlVh3Q214PxBMT0BzfPIRO262XNh9fuHT4jGPBQMolcd7SDjzidBqhvdnUqRRsWhfkj%2FaY3EHsPGkvW1yh3zMGu2e3PBLFHvxOflYI3PGCMwa45IXtbuoJjlvGk4Wx1gUu3gd7%2BTEwKVAlfkapHSpIit3vPtAPlmxq8PFWsrp4I4PtBGetaG%2BkWpIGlVatO9Tmw8cEVHBHJNBLNvkY6XPsg6ilzTWI%2B0RWY%2FyjaA4AH7Rk1C64p6CTZP1hJdqEg6kXBeV%2B1NiptlrcHUqhIx7Zi0vv0j5Nqb414LqtI4KQOvIaxDavLatTx3hwAGUWcpGxtq7JYeQMuuO5SFqAHKMjgHhrNfFRbROwXwaIQQr4Wc5qt1OxJ6or9JSkPTC16%2FC9BjqkAeHfQE0tjsuTd00n83%2BcErIpRMf%2FVU3dF%2BdbfXfCSApJdy5iN26YkRXH%2FakKOC1d6%2FskUiKQwpa%2BQvPfg%2FEcp3ob38h0adYmVAoFdhpPvMze%2F7QzCuRAcRp1OTZhBIy7cP0GdQANq6jBo%2FMe7aw4oFFQ1uqE5vw1I8twQS24ddFGXjNJTE5njqs0jBYNHorbfFhxtdXj1bhkS6KtiPuDuDq398XZ&X-Amz-Signature=6d4bac580556d11a743a8f4375e2404301dcb37c68ca81e1e0ba11efaf65bc18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
