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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZJBM55%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJ9uy9vhxhs64HlaBQPW%2B5oXaHbUyoM8%2Bo2wIlwy3lwAiBUHFKcVMDgZWrcokHn%2Ft67f08dW7PuV9VqaLx4%2BtjYJSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCtt2DZVgN%2F0aiGGKtwDPtb%2FV%2BfYnkueERZngW0%2FQaeYKdiy7Fy7VJ22VUYjrgQetfmv3DheqOd3N63xeazKO1%2BP26VDFiH3kGQd0huCj2eL%2FxyTNPzvIpPTgMS9yFk3zs0Fn2iAzIj%2BxRTo2ozy3f4ZKuwrT9%2FD5gDMsNC%2FDz7kNjTDRRdH%2FRPxLbYJCbENDjvtoYEHANgnlFeYRO63ngtuGsJqvUeNjo7H2MECNgPtGhEREymVjfYOuzXIHLAhIHb%2BRQJZHTvineAl8oqLXX3Z9hI8lWP7PNbG9L6zVxEJfjqOG4PwkfBzSb%2B3StsgUud0%2Fxk%2BB2%2Fj5rQY%2BFMM15FnKBiBqYHB6EDGj9Q%2Bcvg%2Fx%2FW8tgwQ7U3YwoE5DWhSPUKcF%2BCz8%2FqQYTdgOiYtv5tP0DyFTZeBe7ak0nVJJHYbzNwyd%2BrrbC0PICt6ZtEL3J6dtJ2sseiBNzkapgm%2FKiQ8EPiwWjESqvThM3PyEZmbUCuNMr9e2uxc9ToGVkBrMNXk8fGRpNCepyLn12c%2B2xm2gfqzI15oCk71pEfAxuv8Z%2B2yrf4u%2BYOX6i77XB9w5Wz6JPVLFhexERwMqmWxsD9V%2BdIetOV7Skh0rXJHjNoZwWiaAXKL5%2FHhCTyHZ04L2eEma%2F1HocMlymcwiNrLvgY6pgGXmeTf%2BRv5PHA1FMrH7x0pXHQlhbvZBt9qy%2BuzBR6hy3v7Z6CnGy9qixgFQjPeBWzHkkY1whXDijO4M68oSHf%2FOyCEGKsw5t%2BmL6pG2JowCWJTFPd5ZwslArSOsN2G0cUXqKps54jcuvoAetWeCNidJYTa4OjszOkZGwfPCfpHGVXvrCgzHcZzTjowEXgRV0GEYh2ziheuyEF2TVKVUUFc9Y7h8BxH&X-Amz-Signature=25950deba64f4e6160fc5701c364b3b7f970a1bec8481fbe6b1f5764be12145f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
