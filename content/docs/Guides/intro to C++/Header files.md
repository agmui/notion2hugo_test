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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VRKIJ2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIH71h1y1772LLS4tSLBo0fYC3%2Fe4iRIS68Mzmx5r7dQBAiBWLD%2B8Su0GSh2of04KFRqMjrcNdhjGt9QvEE9lpAoy4CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHni8odsGyFPGyzyFKtwD4la2G9mBFLR3J14LXryv%2BKU9uIXaDe0QFMZswxCx7CjnOvRlT6CDIU5BbgYTs%2Fu4tOoaePcp1fwhDYuht%2B5FdcDCVNRESrO6cpALRERC3k9uyZQN3eECtweMpE%2Fb%2B7AIallbOlMkphrjeuGWD9oVuTJkeLcYMyBD%2FxYLXKSIEUdloJV%2BdGsNqSNqN7n1flwLJyxTzzLMn66SpnEkxEOo9xjZImht7QhaOl1b%2F91afdOp7p4t1paM3L0UbalA1fKdKS4EpIJo0ReTrRvUiiyGjafm7uCyeEmZ%2FcrM2Z37YaorZNJRQxf9NlOwFh%2FaApAxkUvr9HynRErpGB3FJuXVRNLVeagWfuTPO3Mlwz%2FTl%2FzcLOvyFh2MvQxyeeGR4QQusHfM%2F5XOuf2upggX8BtptYB6qGfXdEog4uWRZ3mAWwEf0QYoDf1u2%2F4FltBWmu74F0D66yLW4MNkUkGG%2Bn7%2FqYMELuwOYKsJsRymqG5NFrtm47ysxrC4tmR2xM0VFUoUPtZtdQjqIPnIFs9Z36Wj9tznAH%2FdJHb4hG1I84jYSDRaSmQcNrJ4SnwudDoV0LnZYYiHcK9I1gJkRx7aSzh4RvjJJNJ3rOgKdX0XhFgkScuPX7vDFjd9Y1mx5sAwvuyvvwY6pgEfl%2FfcqPYvLS4kAcqf9iIaLIxYkicGX6FM82SAAy%2Ft0%2B9kGHjrF%2B%2FGPjpy2w4O9b71it%2FLU4rAPvRS%2Fl8Xfc%2BcrjBUp7cuOAPRbLBAArbZCarYqaHJD7MnPNGaz0jbr3rJT8VX%2BxCAgh2NfZOHGLxgsRsq6%2F%2B4mtvICRH9ESR0VTzkUenli%2BH7N%2FB2b9JwFSyeU64btekX2ZMVz4sgGibt6y3IfemB&X-Amz-Signature=271bc0a96e9ee932d68b8e5422b86ee0360de037cbb81a454c2f886360dfdace&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
