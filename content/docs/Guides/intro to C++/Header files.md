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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57BZQCN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9z6wJ89c7WktEO0uAOtQ%2BBy1QdRSDZCcmRsDzJfrkeAIhANNXEswrjelbUqbfw7e5qbDZOId9frBd2rOwnFriO6ODKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeJzaYmMiCHvFsdKAq3ANWb74MZti08NTW%2Fydcf30QfJaG5KXbAPwOqnY8M4e49az3beyIa9VH62TNg2A%2BALHKf4jFgR1VMR8NJ7dPbFf%2FH%2B7hrK1WSUE7EmMKeSjykVpQ1OXPW4ObEcQbBqKcf8e0Yh6EHqcEwpdunr1u09tw1E043gzBNl%2FyvVjvgTA3xLay%2Bu7IBZcNHXsKP%2F1ymebVADVlCLi%2BZobnEZNuawH0dLSxxnrbui0EJpGDfs98gvwdBpEG2yfXyyNt8h8zaj74v82v3OGEi%2Fvb3L7pSPNlTurBYMfeOtLxjPWRZuaVgWJokH%2BKvoPlcGXYYy0v7WEMBzrZlJDAPpEJBrENmYFauabkxWoLT%2BD0U3G%2FpxCvMkdxx0uig7U2Aryae6Hyw%2B45ok2p7hSEcXa6kKhe7SeG2YZjiz0BPgc02O6qAgjaS%2FMh4lLnaMzKhs7tFsFEG%2Bi8AyjMLUVIwb5%2Fr3MMETAHU7ARsTYEbsCihlTQyf71g6cg9rOJq7wBR5KGVGb%2BAo4jC2RbnKiFFjO%2FyOCP32E1l%2FnBlztXfB4TWBF9PwyqbLe8Qf28UmTchTRj9Lj8UT8MCUvtU%2FW%2FFpNTlzNIGGoLHSpfd9DfYA3sMIcc2isoNHdh7A6h%2BUrKFmKtdjDJ1pvCBjqkAQZ5fjDl9HTbEIbOPfJ4q0wy%2B8A6kM0P%2FhQGpcQ%2FNkGYmYU6gO1Hy%2Bak%2BKLcW36ruqyFa3LF7gQXFOgCIYtA3%2F9WzBq2RFQowmYhhYbmIuKqKKITHAi49PZSech7yB5sYInwzn1D%2BhVxc9r6ZjhVOI0bhX8%2FpDl2UfgH4tzLy8sm%2Fw47VrAUkBbujilxlnC23Z%2FbbdGABCGM3a%2F6H3Y2qOhFQElP&X-Amz-Signature=1e5b3da0d31d6c78e94f90d30e7037219616107822fa397eed03eaae27855ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
