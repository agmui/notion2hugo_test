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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5DLUWXP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFCd%2F1VZ9%2Bd9znPpv3sYZSe1%2BvTodCZWA1V6Wej4TWPdAiBOxHXhPwkYRaXbIFmfZyhQXNN9%2FGACS%2BMiDTjIpJfzyCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6sfu9RPzdrR5LtJnKtwDGh2109%2BBkIicwPC9qbHIjahzWZhkr%2BzaIwxu2s7be7417%2FnhQCI8lHJTWV8owgHOSwMIzHjM%2BtivWLC51xQgZsSblY0YdUFNA9Pymb%2F2DSZefbn42e%2BgFpuHnfGhoEVxi5Egvcm2JyyrrDQsLrIzWN2gQQ%2FXoFttIgUZ7qzpcPPzMfDmtosvvdUsVM38OzMjYXsxc9OQ5AU7oemBBfl3J2HteOrOpecHOrUWKDdoluk7a9b%2FDObmBHcubie1kTbaNj2Mv1U4h5%2FvUbWsJZNET21opS6Gkk3un5J27rNc2LmZk%2FJjaCQMAeZLNgM8zOwhbQS9GwHwuLd24ZnEAI4Jyt4k%2Fd%2BieyMBzRwxxDZnB3b5eno6%2Bn440Jtf%2BTVMuU0Y4e42xWR32vB0GUWdUx7Rm9Y3bJrUJkHj1XbGeln2qJ%2B8PTLZY8Hg%2FGRMmEvuJyvgQHqy05wuDayJpjHrlnCdgcl21ClpMdKI%2BovDor%2FZ2OK2gtiOBKdIqXjriKWQRu88ub7VYcTN1lcPxx9RPogiRPFEyQn70MefbVYnCG5%2B9VjdR37s%2FGW6MMgIUhmSP4UWxXs5zOkbx0jv02tPSXZ6dHq%2BDVRXyABQdl%2FrxOK7CVCu1lIxyDIuDfiBhfMwlKqOwAY6pgEGnbywqYgB86WhyKRIX%2BVx23t3FdyH5VzkxzfKTLuyw%2FKU4INeOrPIAkROmrxPGXLH0X%2Fk8zFum%2Fazt57jDxSYPjQhuC5I8RORW4Yhi5ynRaJM0Rs93BFr5iaclLal%2Be5XLDDKHYRZLyNkiIgYZP9X9wy3BU%2F9Q6Dd0T%2BTlWLhcuk%2BhXtcgtADEipjSmXZZ3NuFUjJTEhBaUcVuTRCr9NafYclulCe&X-Amz-Signature=26ad5ef343db7cc74eb952d95d21f2a5ad3e6f1f5bdd8df9a453b2e2a8bfd33a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
