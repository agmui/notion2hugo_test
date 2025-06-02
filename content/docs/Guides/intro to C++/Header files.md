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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX574PJF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDwtwvP8N2mQYWIAxcsytWFqxQfr6QsTAyQwqIFPZpoiwIgOj2mxjrm%2F4vtvHptIVJDar4Ih9doe%2BCLSgAgBUA1CKUqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFb%2BpsqIfflRsjBQmCrcA91vEinFiC2iQXyN4%2BKDhVfYG2l1TMtHa1T7kRsouEgO2mTOjmMY0C68xPaQFcyaX8QD%2F5gaNAGkkfy86YE%2BiovoeGlmEe0JcI6lYbp6uAmECi97cVgQXyI2%2BqucRRm9GuMRlZqdngI6paKCVVjwwvSHPXo5ftmuySPhl8LJv9cfVhPO%2BhP5%2FJX589RFn6MrDmIVDzM495KDOKt46O68hgUQqpt%2FqkwV23NoY%2BHIhWy%2BbxaKr6uQPBRmYaNJmZK1BOJe5jgl8mBSeB9ZrM6qBV2f7JlAY8ZuXzbMO5Bpzun5ABbMGLZUqhIfvhTKeViuufkrLpAT7iVzrsnHc%2Fus1giM5KXhbIMcVvPnJJQnZnaaT1Mv%2F5EDdXaUAdy0LW52RAajwSMllpyZNbP%2FJZ5cPoRSx5BNDUQVwt05ywCo3vyhowWKUDS1jVND9wt5eoRsPJefCNG3oHPkZkK9lH2ZRD0RZj2aa4rGTj7qgqzIsVwUzTjqlaspZp22gRl%2FDOcAvUPgSZqGAHT6QMkZh5GfiQNsVxsaEFu1f0IICi3XncqZQfoyMWBZKPeVdpiuNplJx8Qe3bJXq3ZDxOBCIzWeOCECtpsH5oDL7dEB6gx9a1loIvUa8HjEPlm7QZ3TMLa09sEGOqUBWZgnLpI4ruX4N6U1flKx4eBuwsNfSqbEhsEwQDj7epFf3uV%2BY9cOwOmEHLy9UpGmyqzpa2eGks6aLjMa%2F%2F46TXFJHqHqHZnqYPlI11kA%2BrZ8n6hBjcPmjernr3VBT8A1K%2B6VVqRUjtV0kNgGRAoWWzuOtxu34ZWHBUgoZeGJgzBSNDJZd%2FthWc0omeq2q%2FjNj08p8MebNxi5agOpvdan%2Bk9k2OE7&X-Amz-Signature=5a21d7f8c2a13860e52a4f77759d7398e875369a9ab6f8c218689557d07409da&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
