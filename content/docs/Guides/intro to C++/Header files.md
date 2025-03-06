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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HVISD4T%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF42lyBKdgyV%2BROUAv1YOTC9fR12Vy8u4ta9KeDjrBhgAiAcNxf%2Bwy476sD6pG7T%2BueR58Tl1g8cXS%2FzDV2dMy41Tyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM2V0ylNace8yfdIofKtwDcly%2FXIPQSZo%2F7n56tzNUEOb39Fcbv0eztcH5ZMGFDkTITM5mKMqsrdN%2BwoNiq%2F5n06PFzHQnyImnynWoUN8DRIgkuKFxPHLTueu4z6DxaBleWhICCAZcVI76W1utNt%2Ffqza%2FSgg0zk%2FDryFpsVb6%2BqB7OENAje28ZPZxtWYtfRAic29Zk4JnomSKm3TW4JPwj1CmYzkmfLSVLh69ZRLyggxUPaHHizO5%2FVxeshGLSMfvL4OShbgFNsZ63PIZI5x1wvyfnQoIRT6vMoFj50wGvAwMduHreYNFEQSPwOvaDpMhAqvndZI8Yhn8CdwQ0lHDk%2BSehVW3l0VsVUJQRLGxG%2FNptcJQE9eg0gziE8iAE9gOCrrFb0G6Bh6e551Jj3oX1XQy1zedEVHzrKkLCKO7Nxr8a8fIaj6F6hAa57MW0lZQxs1cD7Rf2KOkiYQjEpsLkgsVfR%2FJWlhAx4IAhjz1wgwtO12Cw8Q4PWNQydSfZWr05i4E3QVKDLFtZPi99QlHXjFLIopIx442dFhOv7aXF6a2lj38iUJmwJ24Jx%2Bkj1otSHLR8bjqpg2tSYZ0QbJx6xN29f537egR%2FMnNLHlg3KTd7biOGKYU4nuYrRZeI8N4wgo9s42ZS1WBfx8wqJWkvgY6pgE%2F%2B775uYPqt%2B3pSAouPdufZ7BaN4EQbsA0DWt3k8xBh9zy2uHyzU3yOvqdBY%2B50NONAhLiuw7UpSFTWLbgEof%2FF7OhKkpYa2wZaUFhBYAqKTMbUURd2AwH7pIkO%2BEx5yg3%2F8RSSPVBk6aYtfWoZphOpWxV2vZ0NxCjrcf442%2FnC1wxnedqLWLTFvYpvGJAb6pvX7tqvdN%2FUDyg6VFLuVNKxgf1MF%2FW&X-Amz-Signature=78b3fdc7b2eca03f4bf2cbf2f8335a53c6da74a8dc82de94ad7a0006d76681fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
