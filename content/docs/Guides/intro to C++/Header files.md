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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPIL3J2%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ0e%2FDK4ZVuchzxkmPwHbwk17Bb0%2Fm%2BgZtDOdhZldxTAIhAIQv%2BI3EkNIQgfV112qJGsbXev9UhaCVCYpppax%2Ft5MDKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6kjj3P8muk0GjnfMq3APrxOAy8QjFHFbi78aiToXafPjb2d%2Bt6NxcF%2B0KU2nzLffGKxcMJxurMAEGBiqQzDWvNF6vMg%2FkihWO3IszBw4SFkoRfy%2Bmsw7X0pi6wiY9QEVaBvgArD9r35ow%2BweDvW4FlyIsdvYhmIOv6pE0LnDWctdR%2BHZwHA6oTB%2FJCRuEvNfXij%2BNxkyZR3bzVYW3ZakjQijbY5VoX%2BAWctte5ovBfbrNULgN1wGjJ3TTg9sonHKG5KFmo6IQ7xK3e0Zr5dFxU7Kg8%2BtElDdJQPIjfoeZOS1nJeKZuUvaehyH0IwbeH8axegt3pzYsA0UA0XoGSMzEwR8S0%2Byr9NAQt7yF3ZNJ6GPHIekadI4lcHQr03WgbmYGKFgrNsVyIdafEnYfKrRrsHX50%2FqS1q%2FAOWbSMG4zW%2BayH3waJINxwb5IfzpWBQynhOBVp1F4T1oXHyhzuQ%2BkJqJ6DBh%2Ff0H7eLwrVuoVT7E0wKNks%2BelcQ4zSgG9zHCTiQe3QVtsa4IXqPWmrL3KndfQe0ByVhFDokl5fdzfL%2B4PhxK2l3xcL8OCgqZWbc0CqQH2%2FWoTaK2WEqXB%2FzdjydJkGDhiKROmqUzXmagVk6Od7Hor2xkF9SgSD6q35KGWxfbPZSZG6dd9TCb8N29BjqkAchKZ3IR%2FN8t3ChMNluEXdBN%2F2Zjg4taIeVI%2F6RP%2B1wxV8BrihNvu3K41DwaBGF621h4YSfzTpZFPVGWSvAg034oT7nAwjekU6PqOE441Vq7FVkJKhquEu9OvXJ0dUqtPQo8gDS0KiTGqNMGl1BZV8Si2yLCg%2BjYtIIWRwQFdzfsFKHO67Uhy0OluYLVO%2F3z%2BeyhhYDN7fi%2FfpoBMI09wvxBJgEi&X-Amz-Signature=0286b8584e4eca6bafa7c59b2ba8d39446d0a0e0e48c007aed4b84e22163fe3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
