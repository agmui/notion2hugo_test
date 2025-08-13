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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHNSC3V%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWucFX3SI4uFohKdb7kXLRDMpaBqdAMImrPJ5bX6zNkAiBvi9HJeWsZLb%2BymdywNjyRt6wck5tM8czuTv%2B2Epd4RCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMmJKykv4sp3CKRttfKtwDsoz2QNIcI8CIU7zZhDMAd7jLBQYVxcHqnqWRPNKRDIBKAJaJqAfkjVv6vxdDRQkCZAHnmem0iAD44D%2BoYNrUkJ2KSdrCn6crHaxzyrfToezrplr4o1%2BEZvzTFLdTTrBdecGCMwTUeG%2BFSgdbQT6BZ9ot1tSyDcb38%2BTBXJbGIPUKLENS2wzp70HcfrEmp9VXBvdX9X7uHdVfFF8QWfdwH%2BAQiHoYhtffFGyTYzjn%2FajJwIVCFNZKbVJVDU66BB%2FVKYNSGZ2KII%2FsKuxoginT0tfqPHZuKR9u29QZ0QCVglE7DvO8yCHeWRch9zyQvdCc9LZub0YnjoqhEsisDFDrV4RXSl8hQdZk8wGhisbP4%2F5ydp93l8UTEqWUiC1EWGhFxOb5SJ%2FGxrqnKBshE5NTo4Ir7v8AjMwo7e%2B%2FsyWQbYAVVXx2TD7Lat78yWvR1ovFWkvVUejtZpvmNlVZYaFuK2WbKnLEfsinQMJBXIMvNC%2BLvCPdvo3rvnb%2B0%2FFPpp6ZGWkaBAyCg6qVMHcBG8sWxyC14bH6z%2FuC6SPEFm0Q3DZRaoBSAuWq1qjCPlhzgu457e1wpRUQpJD%2FazIRdmmXy6s3U%2BDR4lQJTgJ89y3AaRTTCQzaatq2Xs7IqYkw7OrzxAY6pgE4YuiX2IQEcF6Cp7zO5YiqSOcEVBa57bzr1VmzO4mSNN24TiQBhWX7MeI3aJH%2FC9TQR7gb88S%2F%2Bi1slcn4AL5FiLDIukEUsC1rvSHW1gb6gdus5O3poSvv22gARvuEh8r6ZlRZqswvtg9pkkytTt8r9%2BeA9w6NrxyKkxctWGBh9TlrSNJFaqtO1f8eHMNbeeqXc3fTXtOrDsr%2F5gkptkT5yTM5c45c&X-Amz-Signature=63cf94c48443a339d0ccdb4aee84e4f451f8611816a6d9cdedfcb66e86bfeeb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
