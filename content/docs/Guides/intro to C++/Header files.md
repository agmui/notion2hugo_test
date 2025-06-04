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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6OIGYPU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDc3zWLa7dMNnpc4eqVz1BBiu8gB4X11nhLfrgMUv7%2FnQIhAPykowIKUwpO5DErL9V0p1Dl19c%2FSSbYEG8ArQ8ZHjXcKv8DCDcQABoMNjM3NDIzMTgzODA1IgwtchdWYCgpnFep0oQq3ANM9cM0Co%2F9C8P%2F%2FIHmqNQETdKSWTNMnQX3TnFcyTSCV%2B577ZVdQNCZU0iptqNBOwIzmflhNchr6Y6tTO6Twa1rLLk2ywcqEIAmxMN77HHyh3i3Uy9Z3zLsXIOPsVOwWwnmdyzEY7fj3dX4Ok1%2F9rcWxBaQzdSe15vSrE2QXRKmj3%2Bdj%2FiEf22AaJoxjOuhRRSDu3mUHParLrpE9U%2FeCgFg1SdxcvRjWrzGuXUMnx7ai16pnO65zlXS8yfFYqqRCvz2PvXGm3xRmis9nh6nyXtgXfgRlqjfAZtKeEnWIzev6AQpV664Gp7jEKuvWNwR1tKZf325IgQD4k7rD1lAEgu76%2Faqax3cGz%2BjOvUIy4w0q2PIMIThuabSdyOsz2XDbxDoSZMnnvB8S1eGfiQ0he3FdZMQLiqp%2Bkbbd7T%2Be6O%2FhRDlthUkTLrT53Vuk9zliLiXa4I4rvM3bKZjlI3dBKsBu4l1sogCHIWhpX%2BlpfsjE5%2BWhfDb2zSbuhimI4WSSiO1QOPe4vbYfzkghmH1edKrcXZz4ho0BNcLSX0a2QecZzYjfyq67lG3EfpJdhUcPYe7bXBNSkT5v8Mb4VPuiuS6S%2BjmZP954afSzMMrkgHwGEpPgFReySbupHoDmjCPhYPCBjqkAarkEbdp4hB4Jng0V0GBEMXAo%2FCW2B%2Fgl1mKWp0jI%2B1%2FrHTMBJVat1WTHWuTDMsU5EVRZlRF%2FceHAEJEZaBiDUaeHv646M7hLJQqov0DXrlv0Z6eojBhZHPd%2BrqDxqgm13w06X0RhHLZNKAMmC1rKAMcUCR03yLvv3M1XKNQLIswuk3y7tqpVggnxTG1B6VkcbHV%2F7g3V8JMsXU%2FIarM1CdOAGGR&X-Amz-Signature=837e52155a62a13acc4a9a3847eb04f4ae43efdc092e14028bddd5dd6d1e3746&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
