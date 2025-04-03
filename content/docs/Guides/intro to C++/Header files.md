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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSM2OUP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC723eUzhfVkXKUKCgIM54R%2FfkZw9LaxHv3E6hAZoGnGwIgEdG%2FQHYam0RSjZtByui1o64XoRiIZsQsiclWqi9Gns4qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArvj82XkNhBsrk5ircAw3tQRGrMgbIE1fDL%2Bec2bp7rtPRh2WqAs2q%2FvDnmDA%2FrdJsxf2uZYV1FDAAWRCGyR1dn35KAOm7XB%2FM4kx%2FKuww7F%2BTq633z8OGo%2Fd1YtMTMUBzqEZ8aQcdTumVtLz%2FBFMxhdjN36gRu9l%2BCNx63QnKCkysAYRUyMRyC53Gh45MYewo%2BCHIs250nuP2sxzqCSnk2uCj55KjKBj3a2Yf1RdV2ozmKGKmZvkmR6%2FZjau9%2FxIHPNEKGjfWzQNpe36TkDBQ5Jm1NJSqkLCm0jdBamClwK0oThJznvv5s7%2FHSgeBTAfQEgdjNbhYJKjKwrVA7Pkn0loWSnIZ%2FTgAvMu3rCj3jxZ582XJcV0b53U6T2KQHgxxv9W3U6CydyFIu1KqLeM3FEoXIvu9%2F21FMhsBbK73Z%2BroMmTazH7tMDAGQBjGKJCl5zXJNuo9GyLtBSOmPqqdLiag5SVcefBhjhMols9pTR1hp8XyVEqrB22ejxJmQ2Pl2LxCUthd3Dn7k9QGDMfBg1pAILQ7T22f6jLjwCBoPQt3heWQjyzuStojq7HdwK1vKXgaXUsebUiFtc9DBcwrRG4HrulPVUtF%2B9mCeMJKeuDLGzxQbr4EUlOJ1A5eEyhfdo7DQYF5f9iqMN7Our8GOqUBRHglliWoXz6XMXhGsh8JCVRQtYoFt6xoO3aqV1cuhWIJGz9o9DTqMra0eEK0Q%2B41%2Bqp5I1rfn4T2LzUBiQlcLW3rmlpEAoBP27RFm66krhkeL%2BnykmFjLjXjiKJNkTzeG7zpkL7E59pGjQc45ojpBJwcAstQZZldAgI4ruvGaUue9NAF9yrZ5Sajp7ci8aQFAbP6xPzU5fBFZOfnShGABCjhOhqA&X-Amz-Signature=751df1629ef24212d059563b9dbd3a7b9dc74aa6e54d24db2001dbf555eabaf1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
