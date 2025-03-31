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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVZ7W5R%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDimUG0cIsrHnfoq%2BL4vLOkntJS2iU%2Bo9dJ4XIQ3FcAcgIhAKn6cIHt4k8Ud3MMZiSQYj4AGf8L9qilk%2BwbjerwpdTQKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1OcFMO1tNac2PIY4q3AObetx1lj0P7m4u2cT6tK4T%2Frah1VxzSIxMyV5CrKcj2%2FC6VSmy%2B46IaygTLoLCqQ8F%2BHkcrALvZXtGlVXFr58vw05nBKypJQoyynmO%2FYGermUp7FsyqvqbpwHt57qhQ%2FIhSlup3rcriLYi%2BvCrKOvHqy%2FDktok2bolhaSzr6VmyeGxJ%2B8FLs2IQuQKH7hzEjwCfqIxvJfORS6rcnfyGU5hUOgiyBu8Vs2fodnVAaRM21dav9l8FoncC0avR9vA%2BfNuWBBZWrAs%2B%2FEuFRq2xDdslqU3jPsMdGrjofdw8Kb%2BXJpPnIug0uPmv6CvoiIRK3KDpTds6p70d34YgwtWiSrrDPKrPDYgk%2FgQNn255x%2Bu8WqaKPXcNgzRFtzyNq6uKfd2YUSPUkgd4eaWwah%2BRioPp2qugiQXV1AbZEKIFjVtSA%2B17ES84pvpB9SJFx5FOQRGzSNPqGM7JTYnSc0%2Bh8ZcW5a%2Bv30HlVYA1h4SPOobJ41Lfb3%2FFJvlRu699bRcKyTsK36j2LIjdvLpKSYlhwQlm%2FF463PQfIFQBWK8SpC4e4Xng9jVkV95AYR737w7rUmugh9K2i3eyV6DBDNBBD7B2sRNMOT%2FKQXI4aT0C82q3EN57m6LEznjH6BPnjCW5ai%2FBjqkAaqL8Njf8kkZrCMRLrnmiyZg%2BAFzbiBT2WMhMH5n%2BTy2LzH8POwvIKoklcitBvYSP6OWMwlOY3ZhznPavX720b187efD2z38WBvcQgsEQBX3flsXipbTcOqWPaQSDlGzgmDC%2Fn5hMlymek2wbNX5uCJJxNmbDfJzGSkaUTAp4iAdFxuG728eaadS69fJ3ggds4Qx9aEDy%2BRlaL%2BGXI8KqG0mdOU5&X-Amz-Signature=7a54c285fb690d58b4b807a569404c6ed6da40f94492fad8e17f5741cdab13ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
