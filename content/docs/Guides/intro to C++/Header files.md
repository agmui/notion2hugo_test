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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSPVPQS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICur26%2FH7amtn7ZJ5xyfhNQVVmI6ztgv6Nzdb3gu5ILLAiBGsCElQDvZ0jIdvxghEMggsoTWGmukYOG%2BH6hSM5StGCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5mXkY7JLoIaTK%2BKKtwDVvq7qZiL7f7X1QxiRdWnrTpWa10J9bkWWnDXF5DYMZlChW0QM40ZFaaRrSRW6gD3GUmsMk63I%2Bt2tmPUxxVrMAe%2Fdor%2F5qItDa4WYEQAzOAGcYbXK7bLw0Ij4Ju9zmXTk0Ee3AMFL55nmKGUOpNteqolFMTTqCV80hEBDg%2B%2B4QFueuuDPjT1J5Prh1G9HH0seNGkBYrD7pReLrXd9CHmPm3OFtOyUBEau1tlZVRJnOoEvEu4XG0OCAThKt5UI3%2BOCTR4mBQZT25ZjJvd7gIMj4gUoSGmTqNpI4FJnkq%2FbAsz8ehSjAHMy8jCbgu1uB4R5yFhJyXG86qUgX%2Fp6AaBX8wJBCvkwebvlaV8e25k1eb9MgPjrDBILJ4C9eZVY3YSjqHUNB74XY2ysk%2FMi7Gprs2ZsgS2jcKPST80xGKuILKM%2BAiJRK9%2BpItN%2BKQStpmVrh6kRzVCbYzEUs4xBG9PTBqW2lqKJsDRsXTZtsTg3yIeYWHveycWCoyXn3sN0QNhKz2jJKaDvTNr1acy0Vow8vxodQPhTIzbHOCjkkY9eV%2BP46sPne3zqIZbDER1lxOHTu3Iw18CothYDA%2FOu99kE5Jd61wgtZ33nVHVuXvbUqqZ61WEuQuh2sRx8mAw1c2LwwY6pgHJhyR4%2BZXcep1e0dmw7s7or3xzgNH7jWxSk%2F6aXgTmndrHM%2FeDzLthifMSa9Va6V0w7AWaPrcRv1egxS2LzjeZ1Ht%2F7LFfnnGbnujThfKPO1a7FLztDP7DNHjkBn%2B%2BfnIakDNy3ZzPvxt91CLV0eP%2BEd0uXKPDwGvs7%2BW79XJHSMiudY26MTG0Nf2TAlIoiK9ZvG%2FHuiab%2BwQitCtGUsT28v1VIm42&X-Amz-Signature=23924c8485c57168229dd86fbf2c71204a5589c83ea1e733a87d5e0dbbe25af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
