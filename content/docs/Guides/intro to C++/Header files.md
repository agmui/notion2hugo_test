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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR364TC7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEi09bsOIGbIS55CO5b7KKyCI%2FuHwqLU1HS2I%2FgiAr3PAiA33jngqWZWLUagVSxfG3cJQhF%2BOAYvJnk2XvmUfZEWVSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtbQmbEolk6ccInEdKtwDdTlY46%2BLs7nmayS61MLJuwlG7C%2Bg%2FZ%2BHQSEbhYNCl28QtUMc%2FC1qQxESFMcV8R2bDznplEEY65W7yS1vMcDAbw4cVIpXix%2FGBC5QdX%2BzrqhD2XzqWXlrPetcf2UqcgSUUlgJtEz4QlmdTfE%2FnnuOwlSjql%2F8qjHIJn4h6FlPRJX67xYWJLXU83XNiLMR8qeXposM5kXdWXuNV%2BYTJb1kEBmcKdfybuGDDz5ivw8ILVP9wHLC4x0uda1e2tbGHy3ZqC%2BHfcx9DbrjnGZ1IFNNlC6DHe5TqclYKvISfHMj2md9CEZrV7J5rmSzlN7Eu20sI6rJrkpgiCt5FQqmhZUnEz%2FZQMc5wNTx76AMzb3AojNs8QocerYJEBO7%2B6amh42tZJB%2FiWmh3phtT7GVP0ux2Sdhc1TmyQ8mHz24ZCgFWiTKBAKZsGCdQnAyDDavscI1rkpsSve%2B9rkJpZ9V4bD4ehwSy2lciCfV7zmSvNOlUsrG8W4G5Y8S7c%2BLD96UGJ%2FtG0uq5wS1zIjkNXoCRbGxUfyK7LQEIwDmvCsCnjgB4JjBBc9tU2dVpHV5JOvq0oFISj86J4u4WWqQpGTb4w%2B7xNFP9DYKGb1XXVOvHQybcq9PQmIX3O6hs1YUN8Ywn6LQxAY6pgH%2FyddE1%2BX%2FXuC4h9aEhwdk22rK4HFlqnNtv38LZlkCNkMMS6Bs0dQFwZMBJa42%2ByhWLChDVZVikEPjw42D9ggjMHHnNfKuRVGKMclaSTaFelDwW5kgKYZcHG5DYrdQ4gO8WewDu946H7ZQVOA%2FIm0Qo1pLVm10gcoQuKDKEslnOxKcX96s1IAFsWbkf5r1xK9lyPeUVQloPb89hibio2Lsrv%2BUlHRv&X-Amz-Signature=2277814ddea44f6f916b93a9e8ff2bbad8eb030bc7c1da81741d2eec73a7fccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
