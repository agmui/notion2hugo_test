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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJDZQYAS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIARV850J2Bre4rKxHqjTG3Obg1Xxtdv6bQ88TFVMQrcrAiA39bYZD5nX7l4uxZISmhLu%2BMmhL8TmLblmzDOa51pTiiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMavkjrEu%2FCQDE6zpOKtwDMiFnPtd%2FMR0pIxwk%2FkTzCf%2BvesLRUhlrpzzzi9SKLR0ALQp5X0%2FOaP34potkLqZSyuINVfa%2Bup7o3nkxC2uqihfYcUvHjEfkb5Ecwv34pNOGAJpg7TQd%2FrTpxHQAbCAluzhwMr2Cq6atW79MSjI62Z0Knn09ZxlfnUo6p8MgCchvJq52Zts5b6UXVDgZKf46FVX63SiYxYzLlFwHSSPEDUoSKWrLj01zlc6l3qgnR3n1kX7EGLe4L4xXk0w2BVGEio5JXBkd4puC2CCXOrPKycyEc2Qss7B0dQdxeaUDcE9iv2pVRM%2FYOV7yhyC8PZHSU%2FP7U4fHqiX4b3UAshMTQaepTi5M%2Fy16OtW6kupWG6f%2F1NgoR4DwcFJDo6VP7cZ%2FOFBTe1NXVxp2W9v4nkqnE8BGmNpIF1ZdYlvsSaPqP1X197k3DuxtGdiOi6XRHCyE318mfwRFTkDIqlHVhD3gOZ7NfpkOEmkiwBnmGnjUxJvifUQUIQffWTRQvYJavbjvciRwlXfZVVrCJoAWJSaMc9sJajpYbIT3LfDjynvtJ%2FVtQzGtvZjz8yTRuoQULRIIBWT3B%2BcgKMnGN2iBVI8ieQU1nm0vBFBVtnQQUE%2B1%2BwpFc5pSqIqER8x2b1IwsYv5vgY6pgH6gAc3zRAv19xIYubwJ8%2BIANeeffGhDcM5rPkca4pRK6PQzu1O8cQBMy0Mp12nzIJz0M888RJOkDUYH1JkAQ3YS5or55mnO5fh7OenEyx1W1b617mOObspdueKJ%2FMGgWMe8PZRawjPWoksBcgm%2BE4M%2BPswlwQWhBmuR6GiyDyOHTHCAGLVQ2nC%2FRwvBDRBW2YgdKRA%2B1EWs112HYHekAGqe0da6F7D&X-Amz-Signature=699dec3707380c81460da2d1954142fcbf3ea3c996b9543c2cc850de88529f47&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
