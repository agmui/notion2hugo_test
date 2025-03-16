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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT3KATI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYgNow1bUIP4vIV1OnMkSqRtZAethqynymdBD13wbBFgIhAJv3dww%2FRKD3KIFOSSwhWBSKIK3DgmZUILGONfFU4sBUKv8DCDQQABoMNjM3NDIzMTgzODA1Igz9G83OUOpLxeIvGVAq3AP4ECQALygQj%2FHG7leORD%2FiJAZZdlOvBAdgQNg4P0vci5GvkbBmrJfOLxzcaWWvGwP%2FkqRAiIGfedsAdA06YiXsjyAMcuV6sylkiCYibeVwf44Dh1Wu1pRVx4ZSmLGnhIkQ7gfjHpeaGTMRiCMViMbaDnD6dt0IQjz1c%2BoIh8X9azPZ%2B0EKeTn99QHIuO%2FfTMRGLjDgFQU8clHVVFsVYIvz498NyHehc19HMof3LoZTnZ3Q2%2FKNHek%2FhnuAcH74gXZ9NOY5k24KtM5PvV1KRChve7H7MWU6M1k%2FTGS70UWkv41LDscb8HzejK8i3z%2FQKZn3ORQQ8i7t5arUnuysVu2XQ6M8fgXOxHYjMaDgAzMVjkxjtgByCq6EzGygf8GKoATNhh6Mt0RwoFmACc4BZ%2FYC1sAfsUtanM5q3BOfRHfY7M%2FBsP6QdO6RxtatBFxOiYYasI5l3pUHAap4QLi30%2F2yZfJ7mcAcZaC1XcZ677naNAqFWmyR%2B%2FpGTfhfFJpC0wFgoGdXJg%2FUd2iimTdi%2BdIE74%2FIQknuYMtFZv9l4mk7zH%2BYFerS0WtFrn4qo%2Bk%2BjQ9WL4w0ZZ3ev4fRbgr%2FndGsT3jTP4waZCsgTXFmwqtHljsdH13zN3qzaoTKuTDwvdy%2BBjqkAbC1o8zaIUvYIkW61VCTacGHpnc9ynfLbc9cKswvPjXRdEeZEZSAiFUKxC0RqEWWX9bqKmA8fZiwq%2FsH4Ev%2BDH%2BVwKq4SiR5vI7U%2FScfSRuP0qf%2BsyNUdeLY7%2BAkecptvI%2FTieRruLWUIvcnHRjKfeeUNZJreLxwcCvKAiZx0Dh63jry5LK%2B9hspzbHoxG3xrFMXGOYKlEyxy610NC3B6XiIS1rP&X-Amz-Signature=4a59792ab78043542cea9f931208646b7906f167182fe6a6f5f8d06bf23965b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
