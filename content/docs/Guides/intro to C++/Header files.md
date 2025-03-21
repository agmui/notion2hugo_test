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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PSPBPTM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDrby3xQA58gCTn0FQjdK6EgPpm1a2U4PwZWy30ltZUigIgOAV80jihQhBzxiK%2F1HgKN5J77OVAuLfeN8C1%2FE76eQoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf21qZQjhzOiLD8bSrcAxek8nEzzeOnILVrKCttAXz%2FBIZz2KuovgGmoUrKL6ix2yMzlyuvbrRuUvfEEJJvNKZT1ZSQV%2Fp%2FEhXeaZ1Fs3sUMyOH1vbhcaxJr3KyPL%2BtcrJYPpYndRN8HiASx6SMYT%2Fz3DkPPFfNYeVKb4XLoMemiDdp95%2Be%2B8GIZqJV2m8HB6BzFoKW33uoR%2B8IkeIrdoQ6M2f37VJI5dUx03CDo757s9pUBY3qybRDsDjPAgugCm8nEluu%2FvYpbh7RfxpPdxQpb4azJgF56hNw6VQxEZvvGjUgGRMiYJ6jkGN1DEkkK2d3KtbmdMyeIcnJjvjpTw4uDWsiwxZ2QycODBNDU%2BZ2y%2FBSpZYMIlKIHkD1fUdXQUXLRnlKrOjx%2FzI9mmRRgUXbwPc0gTSpUtxZ1tRlULTIKYVb2yI1hQtCDuxHh7436eNfeOC0mslJIlkfzz3rEv8Yoh2hdcoNyVyA58jkekpxvrBtvmzNFQfjLbhbbWxGl49wDKbH9URzJ0A4AsUalNryn52IBdvE7cBROKJQG8a1ls%2Fv6grzti4Sfin8zRQzeNhWPPNJ1WSC6smqWoAV8jZlAFAE%2BNaIWMUSnr6yIpatkk6Bf5LK%2Bb9TtH3pNeYoX95%2FpsYwHgXuK6KZMIr79b4GOqUBIKPiOfRzd3ajwhn29Mg95QhffrvtHIVA0bV7W%2FVQsWtpwCatoh1qtx85N9rzdC2hyjEc2ySNq%2FjDpVLbnc6%2FCyVyRX%2BQhMHT%2B5tj7QdOY6pTbNazt5msNmOk0TBF8SO3dGLPS6y%2FaxWe%2BW5God%2BeQjGIyYD0pJtb4CcSwan2PgUCGI2NzOCeelwX7cQH4EZ%2Fb5dFsNpPL8jzsgnrjR2f68UfluXn&X-Amz-Signature=587d056bd40de6ecd18c3828303fdd744f458ff4b54ad426b8ac04440a861914&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
