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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTLVEBP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv0tNSPz0ilAw1%2FdLD%2BCApvnC2ucG9p5lZ%2F1F10g7vBAiBbyEYbtRRHaGlE0FDEuOrg2Rh4JcHjDZwMeiWvA%2F6cjSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMueTRpoHdLyIKWbReKtwDoYUQt8OPj8sqLr5%2Bp3fGUcKpENBp8Y%2Fafpwpk1rSUbbalQ03rSgPOvFbprGi%2Fjzz8M1yN1ScR89yaaP2visVHOljpF5Q6V4ftVY4KLbcq19L22TpW0LaqhD2Wvr5SBB4Urgbk8tREVIHFYioSRdMKe5crvTqJv7kNxH2bXqqHg%2F0Kg0bVmQDZ3jKrBItzAclrDDLTGwAYCwvmzgrZw8Pe5vq7na7Nc73eKAliDHHe4ggVkApFQmXIBMdYE8uDfjh%2FLcqGQ7J%2BXTHwW%2FTP5UWta7gmDnk5gcPDSaOsgGrH8z5im3zLY8Q8NjQxNRzZJ4YjpLmgLoFd1vWO1UhvxT7mG5MvGFdMLP%2FU%2FbiTvM8Ot%2BQkZaaExvEW%2Bx12jJUjxbwGQ%2BJSLfTQjQvicsaMLGe77RjXh2wKdSbVnQq3iy7vwZrrWSX%2Fzuj1gHsa3omv5Yv%2B5c3tbi31a8JTUIYTPunbvDGJbhEq0JLxSMjO%2FQB0qWXL%2FIhKVJuAQ%2F9g%2FLSjoKy2pfUXiHnb%2BteSdgGCcnFrJu3d2moqU6jicayVYpDREzNY1glm6UefSFgmF9yiyyFL3JWELfR7e97FRutRBNWhgg57%2F8REUtB4%2B06sY5q%2BjuE14QdHh4t0VPEzc4wxLKWwgY6pgFS%2BGHbrvBNvZVneKwpgN%2B5KrY7e4nDpKbvJ0qRJv%2B705wbGFbST2bxrfbRt7H%2FJXKFf%2BOn1I6zVuXjGJYxZNbm7cLSSWIi9tSOKUYbQfhXfYm2kf%2FcirCcglWlTwVJamzPD5wO0465kued5%2BvHpdGK08mJBq3nSgzZ2OzMQEUNOefE2wt%2F2%2FZv%2Bn5knEytznrQA4GeiBwZjfBtpmaYwL4h7uapOHDX&X-Amz-Signature=1558f6e933e3f1251107d2c2aae7a08e749ef604bf40c6771575d3d8d846da33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQWNHFB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHs7hIA%2B5bXbZSKDaGMDhfZCKC9RTsWDG%2BfqdvZ5Nwj8AiBiQRtL5riGwLsXJo1SgcIdrhhbVBatYe5woKQ9VprGiSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlBepmdESS4vWpxe2KtwDRuVxSNdpfhK0kb55v4UFFMKuRhBhMNpJQhHz15tpDDxaJ%2BIssoFXcBgqZJSq9c6CdO4%2BiMfFj5CMR9tuQNnSa5EcGxrnaqXkKCnBhrb%2FQHg0ls%2Fy%2F6dT4xx%2B3Y3ejWmEjZGG4s%2FsWCHwwXtBnMWV69aWUndANQgfO1%2B46%2B3WrmjjjJhGChO1tFjFMwXC03vXrAm5k8zgH50SmxrXEhMi1VyPHQoUSEWL%2BZbNWzIv0b2eqVqyaqNZzufePHktPzOGkd1vpoFbgLxruUrJtFnQ2RiiWNYDbpeaEjsrwKm5wMauASFqZ5vYufnrZkeP3JLvM4%2FKm%2BVTBrckv634Y6CKXbcz%2F%2FxrrhThnCodfumAvlFWLguDiwLaUo77WhXcl%2BZhw0N5EY5tgGrEtGLg3XinraiO0Tmr8MGMuxExezBoOfJ7uoRuRIY5uSFGPrlLJpqJb4oUGOwjlnC6x820XjZNIUVkjn0baPk4Bz0qkXiBypS3hxa%2F8eblRsDQ1elft%2B5Cc3vaTP%2B1MVtKBHkf7l8jhEo27QC%2BK8tZfLDNZmvxX7nQthH%2FZ7gJ%2F5u6wol1niFFIfP71ty5MdDGXwPrkT%2FwIEu5BL20B0qM593m4PYRs2jCltV1n9E76d04EB0wxbKWwgY6pgGzRsVPyQi1Tw5v2TmxDXh1R3%2BnZF2IoOYVuEK9bp4nFVeBq4F5%2BLB6x3AOVaRp%2FxPDp34UCdIYIbunvM5KKQ0poLa8mJ2cSVGv%2Fhtp%2BDLbe5jAt2UCPb%2BCK5spIsVWgZcjpvHdVukXYtnOvWVLmr2i%2FiVK9bmVTXRCgLZjTo2hdT7Boy%2FmEJ52Kr556vi1u1sh6QnnBGTIep60XIvUDQA%2BOgBCT1CR&X-Amz-Signature=2e23137d84d519afb64e065e917baa7ce906ad1a10e8dbe19610e56c51a88987&X-Amz-SignedHeaders=host&x-id=GetObject)

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
