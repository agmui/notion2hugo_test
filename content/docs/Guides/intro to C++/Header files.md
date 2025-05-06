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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAWAKIY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTjrPcKkdF9oq5kzSa3m3fPSGbyBq3ZBSgOmjgOvJ3aQIhAMPgBxEVwx9WidkSov1eknxUoAVksJQydCMe4zfiCv8cKv8DCD4QABoMNjM3NDIzMTgzODA1IgzMJ1SjmrJbVnFGHiIq3AObEh7zULPEQKirV7cWWffC2bq1Pa5P3O9IFhuwuuoKhInn546MEqrpdQnEa8uv5%2FxfvsFUYOaq7YYjSmkTV4sYY3wiyrRd%2BVixJo6sgt6gFXUG4ShySIyqgHCDOWSTxxOeHILwDvT9Xd6PZUboWVn%2FpKjzmvxWDiugn%2FqomDKR40DW9mMc6S1foN2jwP0UhAblszj%2BU%2F45ooxt68Tms2LOh14Wi9n6zUAGLeufr5slhtAYGVriloe3MxSgDqeiayF%2FaOV3HqPbjnNLNYvUBXr%2FLRtGpsBIouF%2FXWGTG9SnxDXAaqL9fDXMgHGEBiroQfd%2FG%2FAcUVcZOrJ2xLJYP5qyAn64k7zfdeTNo01v5KT3LxR2LCeGPxpEkGbjxHXuls0dLJyE3vORSOcB76uqgOvEwbt7tDAL8YKpuuzL8TBL4W2y9EL%2F2x5DcqCPCNwv3s6%2Ft1z%2F4wWGKlNYpklyeDH7CqxlqFSsX5%2FKajAgjvk6n1zgJ4EjSPie5qXKFlWJ%2F44JXGVRL62Z%2FE3hIlrPLf8oGiHMe2kc2wHGRrPTQ2m47TjCBLdAENT8rF3puCSglBtNby1iEUmLLidCq%2BEbNsiGQhT9ybt3xGexckeJDL9c9d6A475zen1J7hZ2fTCmsebABjqkAdy1qoCqAgozT2njmGA9lwjoDCpwVglYpZMV%2FHp2Y6HmhocCFXmb%2BTsNiiJBskFr7rx9eANp2q6ZgsbfLzr9MJ0%2BTl8ETRCKGvIrKbEXM2D2fFIUHPrsqsSBeIY0fGvuQhLU8OZDvv%2Fi5sdQcYnarSEC6IFKZOclHcBBTzHBBgtwGLzPykgLD8eaq5CFDAvJ7k47iu8hnbFyTpz%2BdTqmquTJhgRJ&X-Amz-Signature=4fd1799c458d6ee040eb78c34b4026aebc5159cb8382f31a7559b479295d770d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
