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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DP2B2JU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIFj5aeoNQdROLgQYcB1Ij%2B73TMrDpw4DFUQ08lrpXYI5AiABOWIJA4ruUUQ3Z1qhy91JIFlxnvOi7r%2BcNbg2mG9TJiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvmhunkcrJ1OlezY5KtwDzc%2FbXO5no9Pdo0d1VIsLud4%2B120B%2BPfy%2FKrQLJb3LDn%2B2SoDfiVbhtt2NIfuYj1KxObsVEiomy1TBC8Aznb4AKPLXyP64E3qbNE12OkIbEk5s23s6H8ePTG2kn45L28h22MnJMQ%2BUbxo4pBJbJd%2Fb6UID0L9Nj5742zudncnQNbceyS%2BxzLtJPSVP48ZABXTlp4x%2BGtQ0QWPU1ZPb3FcNfLcyBP%2FyL1vHcdwX4xw%2FnWzjBdSii%2FikVwJISGRH1%2Bf%2F61KBfMCtpDb2AS3ltD6uPlh%2FfmPvycnyKp4JP8O9JVB1AbAs8s75rnSbkeCIr7nQBjZ1V1Zcii%2BZ02jXHsiBvWgjMdOPktdiQCA4%2BajWnxV5dk09mezfNVxYr7zx%2Bjl5yh0o9dO9v%2B6HkV6MaLloMz4Vj6EREaeZyViD%2FIBiJOqeZxPE7QLUYfI1qrLdeFtn9HfG6%2FLdO%2BcIjSYdjgj100drufNKCM%2BNwrktDoRdP1EdROYtFk%2FyYAf%2B4QpcoxHWvsxqarG2CzOxo9uxfIoigYy5KKdJ1nzKGairQC3AXhZbe1OKEcVBNSCLHnvaF1eDYTiIyAwXcDyAYkOyFZo8dJnNziCEp4i8LGS7i97Renr%2FMTdYqOUeFYanYIwj4iZwAY6pgGcB0BjCm3bQY98kE57vq5GkPkFqDFpGTSeICkhsXNBjgQwtLcpVM%2BQL8EZp00JG4%2FzhMq4piMLMEOojznhEOyR9PTIhvWOy0RB1i4sZF6GEyElZG46a83WsHCMTpDU88uhaO1jtwzm7diRUhC18xhy%2B1I4KtSNDsWfAXtSawqVoijuifwAM6%2BLB7G17D7oBYkmdT%2B3zUg9Ao19W1%2F%2F3H58WLOYAbKC&X-Amz-Signature=3a3f992273787d5d2239f8cc1640d1e0b539149f44c3996efa02326307480848&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
