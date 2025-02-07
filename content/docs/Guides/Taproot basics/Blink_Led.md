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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHQAHZT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBSZUizfUGCs6qCP0PYc8k%2BuqFXg3vCJ%2B3%2BNSzH7jgq4AiBlZulKW1idHiJxz2vyV67hw1dLgRY%2FK3IT2h0eNqFdZCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfn4m%2Bk4hJNuYWpvEKtwD8OkMJTC15axrikS4hgU4Da8eiA3pRZLqcmeX0HNRCtgitcR0ZQHFYIyvSbptOUKgKNiuvalz%2BTBh6oO9XL7zuTAuEsKjvemjj96q%2FW79KW08AFY%2BRHgrGaNeu59BBfifNmt9ocEPr3uLMgNaf%2Be0%2Bem22149huWmfIV%2Bwtc%2FdaXOTYOgQjkewRXlx%2FeUXOzL08pibBBNMUziH2KL2bDCPtnGizswmNe4iGI2PyF3oajYLX%2Bc7y%2FT%2BUsGMD4bKFkJItALklCDfaK7QRsSnBUWaILIQdQ2tiZ%2BFo9pCA8YxEdX4U%2ByCt7XanvdswXGgkJGu%2BdsksY9GIfxOB1UH%2B7uLwRT76yPypFXgltvTuW8zCs3GH4eXOefamS%2B78NHYZNIZo2D%2FwXIPlhfHDJMV%2FEskJ5GqwoBG9iumZIySXqFP6vbZ7Jsq7VYNVCmNV7Xtk16bMLbcV6wz9GUwOsMPHAChe1GZc3zH7UhBD%2FKCEHfzfTqKIXdjRIYSzF2ERKtjUh1L8uLhDNmwWXuIMWJH2Ea2XYCVaqvalVd3E0EkzVum1ua8mJIfPhYwPqTgPhLACcc%2Bb9seeOYj7iKZGlGKGfeCoa7Wry8sQPKPt2y9oFLlrgAQIVWD1SiXPu8yWAw2PqWvQY6pgEu85RF%2FAhfisGlPv2W0Ra2kYX2KUGTGToUp9r%2Fbem2VYBbw6%2Bz2NtPievsZ1v4Lf57bLdVjHgjHaX4khxrk76JAVL%2BGriDp2qQbwoLSkVKKIGI1eDbCw7PbX1x%2BsSwlFVAYvsNTRorveSrh5SY%2BmUzwPCGNfY%2BWSCdy88xZIrafxlFkhGVVSBe0F29KglnTHbTqNSbysgCXh5COEu0lE9Zcp%2FvPwYZ&X-Amz-Signature=fc97cf46e542777a48ab52e589245f7ac376f3aa0a78cb4cb41a1fd5b9357392&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47WXJAU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC6F3K5C6Upj0eIi0vvd%2F5cnF%2FPkwS3EgxKIeRY8mzWiAiA1r0%2BTATccU5hUt41BP%2FOa4MFLst6JxcrILZz3vZqFWSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMd1scGRgh2DF2ZnkFKtwDt4yTNlRq8J9UUNwNqDokJeQ2V6%2FVdPuBNzfOYAgi1wZA3J3unFW23I3IbDrJhwBaV5bcTpkgruh0qZ1%2FBzYg8H6tth4lVVJT7wRZtvOUsQqN65Bdid5iMo8w7NIQvVqcHloE4r%2Bfo%2BBTOwG70ExQG90R3KGA%2BbbKRMSCr1kMot%2FFLEp9fnFfjg5QzK%2FdnvycAXin9mP44Ptgth0WVipbn5KjXWkBIOuTeQ%2FAIjLBPs9PtH6XWG9Mct3eLWE1aQrBoCQKDlUsC3dQFdAVnBTCFN6zn5LLG45ICv38SzIttVYMO%2FyCKXNsau2y8HpVktR9V6P%2F%2BpNUMpuCCMkwWotAY7Lcwhm%2Bw62QLUIGvn3nrd0rGhySccssTPIGoEaREO34bYxS07Ybt4xW%2BNjUyELatJ3BTON3gyOlnm9PoELr5LXCKDgIm2ey77i29cxzDQZeHNP0%2F1LtpxK0lZqT8YvMOPExv6vVimK2Pp5z4raQ5yNC3TGpUQettkLii5njUhc6fJDYg5GCPwcKOmCqHmMUD5eh8ALxLcwAQ4CFJJBBmY5YrsvRu4nQU4tPlT3k2xdYBMj6Z%2BtUCIuGZ%2B2m%2B7KiigqfFTXVmIpZDHBwVhWFKl7trahc8V2tqSCojZEw8%2FuWvQY6pgH7p9bVrq9ohfAIRTeGYTI%2Bckb8srSmZi8s5vb6JqSBHkOd%2F%2FcZUe2HQN%2Bz2FQpkgVmGHlJeYXrtVY6jHnpXQ4PqCpzGKfHpfIrX8uSVIN2s8gggajb%2Bi%2FKbBFmvKgDRrBCl58ooL%2FfIxPWQjQ1AVVKqWZJBLE%2Bhfk%2FgJIPZiQPmmu4%2Bwkc8MmHdGOou5zDjDY6Gx5VovmWxsu4TzoZiOdQ2gAo7e9i&X-Amz-Signature=bb047f0e353da7c5638cd72fe66eff6bf25b25457f60f69283abec24a637eaaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
