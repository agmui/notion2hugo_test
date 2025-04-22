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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS5WKCIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCisAjPwpLwJFJexENnMy8BoVRGdL5wUoQfMaMw4bBhpwIgbh0AKXvfMDK0gKu10SHD1kUq4hpzkNeA%2FS9I0PzhIG4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpUes%2FVHX6oq8wOMircA52k5bB5g7iX8OCbFdj3Mo95rnqaaTKHUfkcs6a0GYZVQeyPVDmaYuZ31SnxgkTbP6cP%2B1%2BE2Xx4hKRhV5ijbzSu6ixYPuguGxYpcAw26%2Brmq6cUJiOyEL1k2mVjT1yRsXrfyKE6Rhx8yp0Ynye7Rhx00uLpyiAEXziEatBUEoxHxQBN7j9giG%2BBFH5qls9Lpsb4cShzBX4MZ8gvw9T1t3g373KlXTwCzz%2Bg74R5bdgQE7Wtxehlt9Xl2Khc%2B6sbxcyxfSOU0NOa6wsTmUN1SRwDQTZauR98XdmOqfh9KUExolFONKs7vFnoGhCxgTGdFcpeuo15%2BSmj8UMuztKfhLRgrB%2B9PJ9yCZm1HQnXu%2BsYEanbTtST1xDsrbuxlC3ZMFVP8LRRNf5wIgIwN8PaqdUI5We%2FmhqvGzL7tDTtjcYV7JG%2BJLJ3DyaglsJVfSUOebcQRngmAuhDwA9jpMi7r5zQ%2B0ZC2kSWDBgS2f2uUJlrpdSC9ozyIOycqiHnfv91CMLSvlxAzVswe%2F7m7OAWlNXjtol0HsmSaEd60SipxL2L8X3pIbNyILfXRMKmPF8Bo3AqumMy1eH7ciMp8LT86%2BZ0av0UYGaeMYNWaFTTn5zE5UtWm5i%2F2iOGNGKmMPKqnsAGOqUB007mpDyYLkNUCv92A7wbv4qxkuRuHvP81p2Mf89oPPdXpTZCHyRNv9edWdhDhU%2FfZj6Y7y0yGvnP97DTXgbVz%2FIiZo1j%2Bl1ZZ19MkkCF5jzLNAzLzMzcSQ9Kl3Riuz6%2FDd9LKWgaPinQklRH2VC3tBcLqpIm4uMCt8LTHl6yoIfkeS%2FZ06cJrZrcjljSl%2Bo3rKTwb3b1%2FBvUb96hNb9dMZg3wd0F&X-Amz-Signature=b32795bbf9a903300a803d8f6aa5fc75a6e44ab752c98cb955bc7e79fb2235b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
