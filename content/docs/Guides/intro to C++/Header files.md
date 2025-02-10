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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTUND4U%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJy1b945xbhECeQcXjJEq8SBUuDsAvVPcAeq8FyWjehwIgU1i%2FTZonGWNr2leQSLFEMoIcXGRXdfX1QhJFkl0t9hUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2hC6bp1JhtJ2jyCSrcA6pOyUdCLgVgYcMROc2ayDW%2B5OhhHastJodwWD3dTzZI0lv3gMmPIrtqMZSo704lvugOYKmeVgvHcb5XawWmFHbc4pDKDrzJEZgfuey1YfoyUn5%2FAV4bB9O7JRaadLhAnvVR2Us08tL1xdjOXhpIZrJ4PCoiBtsZ2FO5w9dUSlz%2BmnuVlU%2B7Z0SY4Z7Np2xF%2F3QuikMabbfabDA33TaGWcbI2QPiBlFx1SHy71bXVsWRqDD1Kj1kOIPHqNVR3XYH7bo0F91%2B3j5%2BYAejDPXykz3oZZ9BHuGzJEDrSm6h9r9Ya%2FTxqAMBDqsMFat7bY9F6lWtqOy2c43PCjy0Ooh5H0DYE2MhBk1%2FeeKEzi8Dm%2F%2B%2F5I8EqmMVMCpQceSJo6sb4Mol030kBfyx8mx76VfAUmsgMcSbqnwY9oRN4hNnixl%2B%2F8L9cjj445PgKPr%2FSi4OcjTdcgbUEZm%2FYTAA9U3jVuBliYn6sFIknSFKNJjfDwUxdfmYEi3vCMXHMtNSO0VXJKMJ7h4v%2B1C6t9%2Ba5lk%2BjFE5Z4rEd8qlEedtKRfVLdS8cztSPdj1hQhqSi5g89Pm9snOv%2BW3wnZYAUM5%2BKGeMz%2B9uKKMgg3OLM8sz9BAnpynO6Vn%2BhichWp9B4i8MNWtp70GOqUBYBnyn3YxJwRscZgAXIBDZQZwx%2BC00QA2xcPLKaOp0YY8LC2qGA0P3Yuor2XY%2FRxx9FYsTqctMldzi8GZdGKmHgnJ1wt0Ni3lxXav5p2AJ7iGLKdJNCGOPzDD6vuP8uGSTY7%2FNPW4fUrFLFcSSD%2Bw7VzxuNC%2B2IkL02iHfiTmW5ncf45jhRqv2OXv8giXYo0aABTQ4678ZSeCp8NvcMYAgUYpCuM%2F&X-Amz-Signature=fd81da71da41a5ef7f5e89e239674ffa37d39e084b050f512c7784a9a5a087fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
