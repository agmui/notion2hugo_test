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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKLXTOH%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGegxZVBS69c8erw1hO3Ck6TVp9EwnPI0pSV2%2Baq9oc7AiB9U8QSep0aCfLe%2FG425MSSo93jVCLn2hVhn%2B%2FPkCOb7CqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmm1SZ30%2FUlDejXEsKtwDWecLxZqpvb0Q2aiadS0ndWU3Ud5vDUDeu%2FrMj05bfSWe41jNdlb1rk%2FozAfJdPshH6%2FOEzZ1K8hDZHDj4u6oizjsLir1A6gZvtuYXGwsfqPm86ENiZoVflcghSjsC0451Z0jdDUg8g3PKkl5Vz3r2B8juzRVn9mVc%2BXpVRcovQ0D3mQ4FzbVeByiL5BoeRpTGuH5oq0P2F4kNrVL8acjW%2BKycwgrypiQw1yhkYPGRaw50AWO1BxB8PvXW2PInvs8xar5P5jWIQl0LWpLJFWpSiiHjr1xgM8B6Uri19kAallJbBk%2F1k6NpusTBHtC%2FSYN4Dq6L14kCAScZpXuiUyC804yUjxeS2K0uWVxdzYRr4ymbn%2F89CoxBaBt6Wh1dQdj6fivfW3pWjuV1rCI1dbIzBX%2Fku8xInpvPnp%2BGjKkccsFHddxpNKO%2FEBHDAjC%2FRDwMhnUrEsxyYidPvAL0bXLNg0zsGk8pJLk58e22voYtIgd9Dg%2BMdtf%2F%2BFV5O3roSi215ZTs9L14zGQ4eH6F6NzioMW726cL1fuUVLoq%2BZxFvQdXZjfRWWOq3W%2BYzogrVEAK%2BzaeiTqfOwFH9XsQvyxk6qBgSXUrmBC1Glx9E8fmncyY0aYS3K%2FopexWmsw5t6AwQY6pgFKwEUeZ%2FC%2FOPHIyAk%2FHc2DEJF31W%2FTGojkmcj%2Bb7AXVdA2WhobI4i59Nd9ajq6%2FuR03VrBOolOBov0NLZGcsvC47R4V6%2BBmebE%2BgBgzgnP%2FNeIJQr6i0trj8%2FVflOpD1dj2hkbZWX%2BOw3L%2B6flNfkJGo2tKQO9K%2BgVjP9ajs5xxgce%2BqAXUMHDI2SKSLj2K7vaib8TYyo%2FwSjIy7UJlu8BYdNLwtYl&X-Amz-Signature=cfe0654a2e71b5048a5f5763c05064d89c6b119a5a03862a540ab41a5ab95d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
