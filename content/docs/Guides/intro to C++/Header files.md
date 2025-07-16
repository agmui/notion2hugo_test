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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBDF6G6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGWuzpXo3bml2M%2FnOxuLFBBqWrQ1XyVPQ3oKa3Nm%2FIxXAiBAtUysSxhGkh0D9W4SgTwG5bYh3OtVV4bwH550UgAtNSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMwX2DVwdh8BB4nb67KtwDm15HvmYE%2BZ9IrT%2Fbc1vS73TBlh16xG4IY%2BVZ5iQoBEFcJfm6y3zBjcyBikw71BXFyIjgHOIc44ZCQYzWjnLoQ8FRjTjADvi3V1o4%2FnfSrbnQZTFBHrL5T0nxLGhP4Da7vutqPbEmz3FjQyI1jC56HTfPmZ1D1JeU8xmgQqrgM%2FfJYOosa2p%2FDD1wsOC7vkoNXhzMww3q%2FQQPWZU0Bj0OUMkPaI6xvheg9sAJxZ5xAkDbuyojCUiC3PS9RsovZdU%2BjZVrSV8HdqpV%2FgwAOtqk3ihkAe5EZvLj%2FadrrY0sV7tu6gZGGre3YlZ0EXsX92hgAI721fwte8Q1en9NB2sx3mjWDEicDselVxzv7DhGZTrpJhcuTrlw9qkhiOzgwyiq5VfKKFtTPSQbY%2Bh3htOv3kYUkpsrgcmjhfGpCVHAk4po504vht6Avq84RLqEHhJfKC%2FqBay0KzVNo9%2FPeFOpN2rF0ug8GAVQDvfd0Mm0HSMnjjX4oxaoCOAWv4E7KutHbF1Hu%2Bg1VVFv446CV1tevB6M5MYEOUQtB%2FzvPMS3wjErB%2B%2Bt63JBoiFdAXTijKCMN237T7o8tMzoYjvUL0sXCMrrsoTpa0EfSR%2Bj3Oc4%2BA%2BZFzXmDfFDIvaVL0gwzpfgwwY6pgFeHr82qHr3OFhA4YgOdyHNR4prPYYwj3BH1QWI%2FPW2m11tBOx8ZBfGj7VwsGhc%2FVMDRlKSkps9Obj%2Fz%2FTt6nXysSxWxvN2I8Rais%2FcKedOFz77MlBN%2FMaXPjcUiXZ7MdPi6NnBoRKa29EwPnxuIA63x%2BhmxYUTLBGcoddelbD5p2WBeXZSEfPetZL%2BJ0YjwBhd8V8m8nfRmyOEemQaM5jG%2FslcfEPh&X-Amz-Signature=d97b704ddc51166c741193cbc1a99ad8d587c7f7704f9e44503dfd9f983c4862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
