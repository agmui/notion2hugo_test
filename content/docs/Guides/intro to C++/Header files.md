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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYBV6W3Z%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe7mzOciAcuWQGnYLVllSK%2BoHFuiu8L7WhW9S8d6BhfAIhAJNlMy6KHuEVBstRi%2BmkJSll9wOQ8PdldGbMNvGLHUbJKv8DCCYQABoMNjM3NDIzMTgzODA1Igz4FbMtwxberoPvYxYq3AOexMTHZLzeTUxk7%2FpSAp83ME5LoZUELWDJMuTLYownB1hNgBF0FHvibyyi4iJHSnzYJLDP3tyxWNAb4%2Bh9byqzsoohhFyoK9e2xJaUjgV6Afvc5H%2F01gNo68aVrx9BxXz51H%2BYK3wFN%2BeQSjJoZh2Aj7RThaVBXjAzuJMFgGos5Zqh832FfLh3%2BPI0vLWsjZ5Q3sdloNDx1PlJavACbhq4i5Uqs6L6QFBzNjZcKSDI4KT5SIwqI%2F4l9ai%2Bx05JiyymIkuVn3gpFhf5v5SW0RJgYgx9YXBf%2Fo97axOmDGz4FEazoQ3ID4Ve0KaEsWOBsTuAENO3pxd3Gl9Wo5fp3vmVhlTfaFuhEkee90Y8hRRH5QJVIcPH0LsepV73oW7uGOzKu96ZYmsQ5r%2Ft8yEP4Hvb7SKH%2B7QwtCwU3JIuxypGnAe%2FqLfUphHRz%2FXdJ5P65Q0hCfrWbOV%2BFc%2BfuMIDufc7ilA66AAHb5Jjppt0GzXPIfkUt3D6NrfxPhB%2F8nppQc82zyvZoRl4pa2aGMMYMNLOKVrP3sZtuY4DMbllUpzPBm0Cb70hnZY3Jg23S%2FrZ%2Fm43A1sZG%2B%2FdXHDTORzYkr%2BgyIL0Rkwj3orsnzwBC8FQRcCZVXJAWHPLzwJINzDO0Pe%2FBjqkAdTecpHOHSJcn603ZNXAI6frNdMoGp7mC2Ap99FZvE7SHz18CIDQmswjWm9NsJ2C1YtbxN%2BL0KZlPCjJx%2FsR72REQYZQ1pBbgT6gWatklBFgNh5a67KJR7CQYCfV3%2F4WrfYaYlbSaT15UZimNVrtCf55NN5owIWSlrT%2FBQbRXxc%2BNIa2GpqqG0GE%2BQ2INf%2BH6SsrAtEh1dSnBwMX6BcDCGLQjscj&X-Amz-Signature=d1560d84c7a4176934fd6668489da7a9ec1c8109d82bc3d16be95dfcdbe6f68c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
