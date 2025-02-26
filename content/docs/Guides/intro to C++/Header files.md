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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWAORNWC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA0Cxh7fqgf%2BAPcTAF9QtvUwJqPBNlQJYp%2BMDgTEMFN%2FAiEAtj9endsENN5Bs9niUkw1vtb5VyvRABX3JdovZjnNf3Uq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPVW9auZhVwmqAMDRyrcAw2uw3IGxYOlgJe%2Fmr5yh4ITlA2NPyT%2BrQyAy%2Fi6PFgAzkFThgN8xzjk1nPp2jBnRXe2IURdb6KeJ0q0ya9%2Bb2I1e8pr%2BEeV%2BFM9qMJ613EqDjYe5uThCqFhOE3mWAIXNRM%2BGbcsL797p6nxKI0SFe89SCEPEfo8bZ18iCFSzcUV6ASLk%2FQLBl9coI7v2Hm6CK%2B7f4%2B2J9XZucI%2FKrHSWJZtoOQOH%2F1%2FIcLb%2BVTjFah2jbqAw63j4zihAEvu4SZxP%2Ft%2BvQR%2BZsN1Behdwq%2BuY0z22uF3OVDzyfrrCqkGhX5N4orCv3OtpBPNDddadrSZfTUT5bDI6EivhzISfam2dsXqoOqFzZ6ZSmuEGqiwgyrEJn4ToAXgUV%2BOba9mRlblNryb45MmYcjcuhhSGxbEJUO5U4K6zxYB0hFqcd5UPjELL9ECgYd7XCmoQPW95QEK%2B846ewRrZ%2BYdrjX1egi%2BHbaqdYBqXC%2BXCozf5dVUvxhKDfj7TxSXiiUBM73R8%2BbbldPfuVlotv6rQ8OeJXG67dBLTTK0yq2UqRXa%2Byo6GxQKMEPh6s8TCyZKPVp8Ivg79qZIN%2B%2BZgHilI7LPb1V3GX9GTAlLMJGVPXucATAKWblLmMDumHKqkNa%2BFNqbMLSf%2Fr0GOqUB4MSFXKb%2FiOUBiIHF8BHAp%2BwxDV45DnA558NxtaCc%2Btw8T2hRrnFhD6GlcpBiq%2FQ0Ty0aY5M4HEoO1tfDLg3uAd6YgHIg6E8EYFnKHEhz%2FUTTZYJgqdpvXMVoxQckCljyxFrTrvkraI7PwBkmMbOIL6blujHLyRN0FqHinA0XKqdqCEyl31sr6dNemCCuh30iWpN5ll5KMbgrwphmOT6jgPtpxCwe&X-Amz-Signature=4418f60b9722a544a7e7ac9a6813d0838d1f821f297467a41cc5ec4a470f758d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
