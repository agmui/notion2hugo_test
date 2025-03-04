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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFTWNH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJRuGk6V9SKCfU64O0UrTtV0Kh06Qo6t55TKjnVRu9lAiEA4EIWf%2BlSdD6NMH8bG%2FNvLsoKG1vvaZCgzCb1kkcRuvoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2FfQwlgZ8CZF1aVyrcAwqV%2BoI5vln3i9yoxIYnnxjBqrkwwZRRKOQNkvu4Yr0WIrb%2FT%2Ftn7dj4GFQ1kJC5RP5R3tSsl2iEgLAlVvt8ly3tTo8OZ58sePzmcYbI%2FV6QHIIr1gM9%2Bvm9vVYdytuCbYj1Yp4N9b5WFld2MBC7ZQ9Yu0u9YOOIl91DYjnoCn1CcVzySuQRmwjtoMznmUq713G83IctTetlHmQS%2FlBlBnlReI2r2UmF5CIPewXBRKpOuMmgs2IimJyXPDx0Gnxned24XcEi0w%2F3ElmL3bFdtlFxLmzzy9xNSY0jT7y1%2FlCQ7OZ%2FTtqHv2P7PH3HAVu2Irgmy4eKvOnd0a6sGnCWgZZmMgJZ7kAZKlrTuuzbtr4yIEmsLBojJ6HiysCFi0DIxq8IpHJPM7sOP0cS7OyxkBMJKW0PMiObP2B8v1QtJLvOhH0ll7dQeiZ8t4YiAX7LVT95l0PtncnJt0e5CAT7aj%2Frhrc8s5AFvJ82ISxVPKTVmHpHP8bnQvh41IGbrXZR6qd8EQDcj4g%2Bx8PMnVkpZyQkCaraE8nCVNGNzXcpBSV1hL9wBVonKToEQ1z1EAu9cC8IwbOAxxaqMerkfHGgvDvCxpGdYfPmvqmx9vAEnAeyuK5fOEg4P22gnE%2BDMK%2F5mL4GOqUBPMpRLWi5v%2BvQ%2BHysNLdj3haTPdUG1mVabwG0rWLMkb6H1Hzpl%2FI6dcUrmlDSceF6SfBD6DqzUphfkn%2FbvAxddf6EEf0mchFwZjtJo9vHSPyrN2asXfYQqwagDWIkSemBtr0GKCYDSqtC5SAMLjfnRZJhsJB2dOSRdPDGS2MoVkbZC3iYlwZ5%2FFeQJQZQ9TdevcQPG6Mezh8H%2B20YS%2FxQtPOkLJ2%2B&X-Amz-Signature=a639fc53ab12cbb6d2e299d1f41826179b2ec2f7f96d34be5f74ef0e98419050&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
