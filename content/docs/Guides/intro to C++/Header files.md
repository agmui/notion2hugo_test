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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RG37NR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKByC5XF9DTurecZnwuVS%2B8nyt5hJUFfF8yhhmkWoy8AIhAMej44kijgzcNgQzxfg2XNV9a5sFLLprUmeptptBF%2F9eKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhwPbdt664tay093Uq3ANNiWTyQV3MJi0FAJlpjM9bTStd1cCBX2%2FauhzXi9ca38%2FpZEjSDy1k%2FpS6qNEEflrxss%2FVj%2BUwXQw2KkGYUfo0QTw9RlB4AIyeVUIFp1tS6NacXtQexn0HqKlpVclSv724FatKfSiwcOxqLZTFFWI01JqBNPGFDYCW5RKPzxqzkYu88Y%2BVs8pLMGhcKfILIaPxjtsto7yhUlMko%2BrujhHDHGYiiVDnVOdjSdrlvz%2BdXg%2Ffz2v0Trwn1oobxBgNX58rbfH2IzIzq5KCzYpPqq1rmoBPzUppOy0PDZEvMsYFcuk7ec4U3ujr9%2FRFOT9OBRHOf82r4yWXNxoO1wsNa%2F%2BzPKpFZivr2Q5YKfZ6Tzboh5nSIiuARroAa9atbfTlP5tfnPGwRQyKkRPCpP0KwTq9JTVbmvlRW5VJ3hdjyOT644hLJYnIeBPuTY4Mof%2FlWjCXpKNcVrKfJhbLP%2BEWgm3ZfpFA0%2FW4ehx61bwTldVrLOF59MBniSZtBA313nEpmEbScMOmOc7ei8EXEoGDWQBAB5imWzR5MLyHkHZ4Myeo9oBEAcnFDjAj9sX2oz739hl9FdT24GGnjtZujd8%2F%2BjGCZyw3C8M5OgXzdd%2BWTDYPYU3x4fuG27vLTlXQPDC687O9BjqkAS8Lif9dKqyFN7Ct2FVLtW6VTdSmViMDzu0TW9dNXLXA3nBcS2QAcDtzSKEafXtUD9TGNDbk6Mxqoe6hia4mkkw7qDYoZ8nY%2BeOeqW2kN8g3OPetosCZorb3l8BfvY2bCLqYXraj72onVPz8OQhAr8bZjbdgWvatfgYZCm9erwX6eu7191PwNwLOQ4Pn0Dr12Xuvhq2mjsk7AZmjnvwUxc7tl2%2BN&X-Amz-Signature=108ac74e56989b48f00bb0535d33fc238e0509b4578c09063a6d63966d396529&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
