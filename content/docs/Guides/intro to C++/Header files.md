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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XD5SUK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD4HZp%2F3Bp2JhpL8HsE%2Bn5zc8sbaN%2F9wSnGqTX18C7ZIwIhAIvbxhC3FAJi2ZWUsabkGOocHfLpGBec3IaP8MdsWGSvKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJvJY6frbhtI6ZKU0q3ANS42h2MDtcmdggp%2B48i8YBb5EvkStVFQKJiggBhnoevQ36XEBbnGQ88YuzaAoGekI5UxxHuy7oABLSL98T7%2BvzgbjD7aY7Ee7GQ9HN3O4CPfrswa%2BR%2BKsNVYECVyeoHELFMnHVGDr7gEjGiAoCnJdajMEYdEN0VrBufBVV0zjCTxz5k4DpbrgvgaMVE%2B%2Fv4VEWaRLMfW9q8TFlGLBKLfhpP1F62jhgF9TiP%2FRWZgUfmULagnsj6l84r1HOD7%2BvoSJ20KsZwKG3NlpN825LlhznrQ0wv5LcEJmg3e%2FlNrDLl4UpOW0HTYgOKTHcaI4bXW3clvNNFmULRE2qJqZvnEswQYbvIwaAE23boTKHOoFIB0xqTpbdf0pfdWIAYiqqDSEw75jm7WZbqAQOkXmDhiURjuLRA1aptlcZmbioEf%2BPhLzLkEkZmAoy8IBx4fLryt93DkOS7BNpKQcOggosh7MPLx2ItZjlnC9KQOccmHIe0bngejjx9OPQALXHknMiEm8dkw%2B3GASkHOF%2BEEWylpaGTfarg2rotf8Q%2BcQPvmcDhafTnEYji0sMxBUK8IjAgtrYf1qs4xSM4oV8YH9YpKOgxOuI49RsN79kN8NEdYhazgEeibquHt%2BcB9is8zCAxfC%2BBjqkAf7PI7oG%2FUfp6dl8vgiuSHHwBj4n34Hrd27bI%2BagdHlbFFFVgljUbkJ3Jg5LRitFDZNptMBWev6zyMY08C1STuNxwf9WkKH6Lgs3Z1tldDHeNPzTeas1JojzJwrcS4sxD1zHOWZNnEPJlltb8wvWaaoT5kUzrOp49gD0FQRoIpJcEXKjMYRznAEDfmBwwxR9VRxQ8CS3D6QzX0qhdEOPD84%2B4HPl&X-Amz-Signature=433687b7389347815d13f22f257724c3f6cacceff843e3966a06db2fc1bbff60&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
