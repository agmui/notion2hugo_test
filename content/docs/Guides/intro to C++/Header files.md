---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHXRLQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCT2e3rewUZ7FYw3gcfzDNKyUVVOS7FcYydHHZiyUZC4AIhAIdnb4MQmbYm47AdiZKzFkzsm4W65yCgBBuWQ4Sb08odKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGXZkJAPWqIDZHSmAq3AOqV7sWPmIWTA%2BOJRDRhKHObOCCO%2Fqrv04fGU%2BEMlWBugybO5VwPU6CVSgcwMriSckZAFZKrPoVs4jus8X3PnqY31CJ8siEvFzqN6JaO0ak%2F%2B8CK8h9bzhFgTtLdmukVwKTg6POiEb1NkRyPLbIe%2F8Qj2lsGXA6tIMwNggdgRZQZSflUnInF8g31cSKEhIUud4J5VkLHQeCYgT0SNHbEK%2BCxlFURVt6zyUrYUoJ56DqNHYtaHyPlSwd1H7qUx3gF8ZYoDn7eX0%2Fxn%2FJvIRY80u1WHjXewS0AyebSrnwVWnX5D2H1rItnE7n3VBSU%2BrbOiWuNzqAHLEL%2FdeGJkXmHuI42Ix8UDyaKzxtSMDyeI%2FDZJy7wCxhN7IEfiJ8xpKX%2BYPXjQKz0WPOhDQhRvb8GVwfzvwbBUiSNYDbW%2BvWNr7yzHMDUZoSJq9N9ri3GaIql%2BZ3GgnXDvwKLWD21gsRoj64vCibLWimgeTZ2uo%2F7HxuI1D7z9gbqx4N3Tg7xbhR7R45EbJb67AevOr9wXVaBu8o3DrZeu9Yu%2BvjZCIe1epo54fJ%2Fbys6amWNmXdETHGa1WEc3O0z79nqH6NAFBGdm972GC17SqrGXlvnsp6IBUZK6GD1uxyVGKZ42bFVDC1xNvEBjqkASj8S6SIxZMdG7uFJxZp7Ng4cvfVECXzinLh6GsCQa8hZLynD%2FeEGCiaLlbNKvG34fltjCfR%2Fq2JakWjPTKK3C%2BnNznTFufLYosVmUo7hVWnJFTJ45%2Bft6eKAt2ubnUhmFZ0uifEk5HVGD0lnqy%2BB6BupyTZP2%2Bri5Zu%2BfiNV%2FRiqfGQyf70cnKRYIetToEHKwAnFHCyVH5sLAtJiYZWMIZ%2BGE1q&X-Amz-Signature=aa1a2d8154b9aef39c183be0cd5fd3493f932954e212f7476b085d7d56e2c6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
