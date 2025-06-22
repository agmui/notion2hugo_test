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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q3OXYIE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO8EGKyIKVJfKmhvfeW9rRxjD5bpiiezCo5FI96wicnQIhAIUL%2BmizX1rBwrYYFwBIH2Xt9CM8%2FcGATvf3F77CA3sQKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl7zEYmBjKdTEE9rUq3AP5CCatMLMyyHb7kTDlk4tAbfHXVb85ejCKo0BR5fLqtrjbKJmt4r%2BRhlWrntmetOudsSvBojpSuDncML3ZsKUiNFleZ6sYQe%2FIuBAe9OtnlAR77UgZTzrLwDsPnOJoa856TSjlx4afCJmv%2BzHHiEOuApg9Jtca0MFo4LuQx2%2FWemm7cy09TUk06pyMMDHRN71QBQSn%2FCsaFTps2a%2FbEo9y1YvgQFwY7kAPZ4xj%2FcH8vCNZv8VGDOm22DFJO9eil9QTjNjqNOIAms3SBmUG%2BCo6botPDAMTp4L8XOcDMVrFnHjAEEdNuFMVVz0p9MAKR1zQN3Oc0S4MdlrFCAMuJiQdVXvO2MX3v11uSZxIaeNnB8BZrOcNN1dCTPq1eivjfwnF%2B36lPu0Nkja8eVgq9Br%2Fdzn1Wlr2axLMYgZvaiHRA1U2gfrXR7lZvR9%2BP%2BxaycBr3clMYLFDaIqJqI8fKY3uq2J%2Fxf6Yjuif4QNrFLB9VUHnHEQxsRMnZaPNM9J5RtM21jsv%2BjC4lbGnh61fmdpg%2BcxC9jRScOgUtxLL8bA%2Fy%2FByighbN0%2BKyQP%2BPDd1CP7Zy4jme0L1Xn9XB%2FP8dEr8rRcXKv%2FeeTlCHF6s%2Fz5GDSO50vb7MDEU%2FZw3pzC0y97CBjqkAckrOP%2FxA7DxiPG5VWzPs%2BoRL85TnrCCoUgEKe3gfq0rkwDNgadUdLDYTvD1Ev1VyC80svyY0zN7RO07kGO8UN5JmzRV2mBwkjTgNpHFi7occHfnuz2BBW37d%2BYLxlnBJbLz73CTkYPxamXLZ8vxL3wDAOZbqliygEPuhHVSJSZ26THHkIJwk71T67fMiwjsspHvX%2BS3GH18AnF2JFgfU3qzZIp9&X-Amz-Signature=ded983af20a8506e4c50efe11ac25e2c5fd8c77b4859b7fa0468e132dff7a26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3P4ZAM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC0rgE47JKfuODdxF4usBrJ0RUWc5NUJH5ekYyczh9wUgIhALnjecH%2FwAt1ZloDuyNNAwEQcbIFLfavmxlr%2FuzhlDUwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYR5eDkZ8BVfRU4GIq3AO1z0KlLNeQPDMY7wFZ%2FzkCnmXWGIAIxdxw8EhE4FKwk%2FOdStSqFzeXjYKBtc1Sye7ffncg%2BEm%2Fx2xraJtTxJZxbyQB84hhxZy5Qj6276LGVd4ZFETDDX%2FsKrk86m6HaGhkf0ZKLKrfzDvMRgY46qegZI5qNSFHnSiqmSo89584YNG%2FkqF%2F78CSi%2BJlMflifAXNObT3mdXcD4AVjeEmCprhKXMtqJMlibNTk8VFElxoNkMnNcFFgeWH1zK2XpF0Nbd90dMgoNK9aBFe7qDVvFgdmCCGpYPt2X%2FCNtubvfqS5sulruXMaV8WucERwI05dyTamL7AAIaNMYJPjQvoZrsa3337igvLOGSkARdJ5WJBufDQ0ENkEoFVZU8PyzW8wAyZLpZzv92LTi%2FycMfYo86PvqmSuBXb17zT90U4MovbtpMaLjc4oIHVnqeux63BmY8FtVTijuN0eWdjbLMzJj2HVf6wG92ZARYQ7JWdnLr%2BU4hWhiItzAgzqE0a%2BYQU1Fysu71YQ3G%2FK%2FFbP7h3IXxWZVqCcSf2Vt%2BcQdXb8v47kNBPqd8XDTe0AwaaaEz1vGPnRUSlRbNuRKlYqW4jgWWEgF2LcP3InUTdUHHjBG5I2I4dZSfAbgM3Zc1OKzDFjN%2FCBjqkAYpT5FS5qJycE9QUP7qYGCoV3IC2qQ%2FipNZF3iLZFlAH4Baj%2BQSo5EtKpqvxx3c51E5TaXNLaj29pNpoVipMeTKLJaOeaw73Yc9I0%2Fz9a7WoIpaFN5fiaEmWsCpmOKdVU5xJe6Slv2FDXfIGpR5wCkuiB7MfzycVMRsh4lbb2ub0DwPt9bsI%2FImPq8Vb%2BYXEH5gGr1wrgAGWlBTbjwwVhqiCSAuN&X-Amz-Signature=944c69f3391b5e3a082247ca742e9edac5f3b37583c370f3da10fa9c8ec5a9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
