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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LK4RN53%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNosfA1YMzdCp5XxV0DY2AajOSyH1hvf6OhMqhbv9LrAiAv1%2FUlsyXCXMoTO%2FLSt8aC6OYzoIcrkmJcYhlje1x1rir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMIhEo4YGs93kIGsxQKtwDnLBdU9ZYdWQHq%2Fv2WAQ%2BwlwJXsWhP957OxK7U7b3DRnlHyW8JkY6EposjFix3XXLiidBL4zImM8uWgyj6rYgPDyACDX%2FZTqiyKUiFOiXHGia01NS8Nd5jWLo83eTWN7A6GFvATu%2Fdln%2FbflHgzYexH%2BStKqyww2E%2FMLtTZjti3bmKgyUBake3Kw0qgdKBnwYoRdSCwLgAjKG%2Fr0yNJG2kkxCvszSPZhtRFUSXj1cPcrzpoQDm0BkTkSHIQBcoKWnhms%2FCgpUmRLwmruChfHEqbecO%2BJ4QW7U2wmCybmnBkiwNhvZnNu5NdmaJ5JeYQVAOrQl0M62KcsK7ZFi%2Fjl%2F0FyjLZgDzHn0i5EPdvyz3cbwQ5sIvJ6tfPW87if9EEOi4AZKvR2MGVISXC0Cb3i%2B42cqkMncX89CP0GaUxbVYdemTzNxVbju7Vm7TSW0LCozkRQuQoAo2SrMQOGYnRsaUkM5FJzSgx0QJ%2FotP51pM4%2BYVjco%2BfEWsJ8F2MNlA3dYCicwgSV3BzopTnzokfpXrCN3zgF6m3pYxsDrE4XHtsZhikZfLWb8KGOk39hS29tZqgnh8u8DM2kMxr62uOdFS6uLv4sLzT0NwySEh%2FBBLtdObbkp%2FFrvKC%2BIbHUw7%2BeuwAY6pgEBIwPihXRNO8oNs5lKiPyDUduubrfmBSp9vAeDXoVkNFss9HBnZ4DZBvXu1JlnbNjcb1SPMwgw5Y6D2a%2FAE9Ybr2nQWxZPXqHnWMlgitS7YyNKcRInp8yWEMnnbUmln%2FaxmWWojVa8beJet9R8I1O3tx4fM1fveWOnwWkHC0dS%2F1dOpg%2Fpxna1OodTXCPkN54JusmErrd1t8pqfA3ONP2LNtT2lhso&X-Amz-Signature=122c18cd18afc9b155f3ab4538785fa5bf49fd92b735355fc5dcb4d534a03c41&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
