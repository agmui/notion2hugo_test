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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POO4NN7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmUB0vOo9RKh7DNbVzfCn9EPkTnvNLSH04NLRdMy%2B2uAiEAnJ%2FViPGuTZlYCVT01By5R6boue07rKaRpXwW4AB8rqgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg80NPB1s6mcMBLfircA7qT9yOwaMtQqmYvmbCkALO9OE36KTyWbH1njlGZn4Qj9aBIfjfE%2FLIeVKButKlmh3it0IDF5WBtpAyJzCilWxDHM2L7v76G3Nyato05hknRpuFtzrNhiCP8t540N%2BoYmMYQH8KH%2Bk7xDPBhSGhDG%2Bm%2FrB767lRCYuUjPmheJAaCNgKYaKv78TGqacferDpeT8Zen06bV2PXzg77zobxBn%2BlOtkDYa8%2FD9zPb7bCz0Z%2BKrUxOgGcLQv2UYKa%2FoIdbrUcHWhFSbMoKvG9hglDKZgSHHvLi97o7FsfLma66ZsM20o3ItcckOrsEUG%2B0lGHPOXMO%2BKwHl2PUBNqFLLnT8dQDs85RGxCN8PEMotuJHu6wrjyF7FHQHY%2BKi2YrsO5dD7cMRcNBUBrxnBV9ngaKIJzIhWyqm5Kdg18YPLkHPgtHQfUUQvFAcMjM%2FD6aM43jchcoIKe66ZePswDCWhBx7wdf%2BygsGElX071J6udJhCm3qPfvwA4C6DUb%2F5POZCpmAHSzO2QKEfQp5ws3l22NAxf0zcHrBvO6hDGRRJQEQNd42nUrLHaMi9OgK2zg%2Bk2IAyH%2FVS5fTSBvVKgCa%2BIQATmk1QLCRrsZ5BYuW4h1kMKc8hyEM8FXNkSUIkDMKaov8MGOqUBkTk8FjNjgySH1566U3FwT0%2B3dpq8QE1nv1XgvXTWzua3mgbv6C2JRcKdRfF727Y%2BZN145032TajRyt79TAJXuEMjk0dQ2ZqgeGHVtPux13svjoSZk0GCrwROSj4GCEAm7eKEvMs8g1fVbvmdJnj8f4fARR72ZC0BFzVCsdSLpcmA9DB9IO%2BYYCmtdbGkgdCEyhQY9xjecpF895ynwouPvfGWwJV0&X-Amz-Signature=78b161b6a4404fb8caf7f5ef53b2e1d3d798fd1f397c1b1a26fa5664da0637e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
