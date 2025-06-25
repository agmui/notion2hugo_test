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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRADU5CD%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIB0n7GBNEsigYROelufmz3K%2FOywr5xkXd7%2FxiU%2BkjQNwAiA1XLzbtymG1o%2FJDnL9XII0u200jhuPQ6cVqaSqRBvjlir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMsVJeTRIoBv2gO%2B%2FGKtwDIxdkcxglOr8TSXD1WrW5Ldk7H0cXvIn9VDesyJGm4SALGHmF10qP6mqWjwd%2F8aXySX5I%2F49sWbnnW%2Frtq3rLzbYPZMSTblDQsvY68AssiPmZfH%2FMaxCQscaP1ZteigYZmNJln%2Bdh6tdeLtPKbvunMQI3pF77Ox6Tt6tjx5mh9F2TGpYuLBJdpmmY65%2Bub7EvyUNwNuc1dynW6TlAMfXarwQGLX8H3dFSMGABIeXfMqzyGDGw8fvHr7aTerAxKVpU2PKdLjZJFPvy4yeIflnhKlxctWFqcQVX4tSijjc5T%2BQw%2BaTavmHBEjHN8%2FU31o04k00XVYys3pYv6TugGqFvCiJlR0H1%2BsAkxiRde3Gn3jGWoTH8AGJDvf9AAlMR60%2B0mLFJS2B3jwoXS1tZ3HAa8j%2FUfAZTv7mU10rq%2FgEjD5aGitDSCBBJnLYbgUY%2FwkdvJaWQXNFwrG3pjR4oYyvY%2FwbYjqB4Ou3C61FHJFfZSG3RDWunC5Q4VfvMNMOPP3OS%2FwhygsdX01C3BpQn%2FhaxnF05Iredtf9LBTIw7R6W28BSrFpbW5RMGEwM4pDEfpXDXl9TL011B0ZVnXGQtxQ6BlCR5ImC29ugqR%2FP1upkKgVRYCWSBF4%2BmHJmsZIwvI%2FvwgY6pgEVyS3TCGVeNft38BL6BSuwz2WMY7QoT5Vb3Sp66cUVhZYXiDzB%2FFxFF4o2f3CHOxOv8Mo1wB%2FZGQa2IHjy9Grw2Tgj1PYj3dChgEPbY93SuP%2BrP67%2F3b01rI5DvvvyQtbZDStF3WhmHlV4AfLlzETchVqHOtYLACbCNhsIvWH%2FwhXXvSDqj5OELi2okVYv8szrSsbmkKuDDYkTDHyKRJC2i8lepLTR&X-Amz-Signature=a277a3cb8a562e23be838f7eba358bfeacb402919e4a88cfea85514d800f6e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
