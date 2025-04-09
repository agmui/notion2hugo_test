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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKP2GFVV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDTsi%2FIUgHhEDBVmSYFWlp3yqwUfgzZMo6X4W2aRePSdAiBQ3%2BSZXPbBAUd7lgcHjT8JNibmVl80RL23APOXJmGLDyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkcMsugix4HFA1hmtKtwDpjCCwf5IC%2FL214GuT4iNOVx4k1VD9e32hZduTb2dWoOLxbEXJcLcWFjUdTXFZWs9uEzk3oBZjP0usl82DGFBf7H6VvlHkKoOmMv9GszW%2Fefz5%2F0qBDmSJFBi4HzIlBz0RbcY%2Bd3URjMLvTXDPCl2nHEQIv8Ovsh8%2BOAXl5tojR0AWFJ6nhzromH0aC%2FJZCGvf6cY9XjYDFNGOhiBmT76cdfJ9ubLaR1cf5eAMDVJr8EKAM5UkQfUqW1h8Wm4bedky%2BttI51SKCmm3wwf36HnTdC%2FFA5XIeBc%2BOeMe3BnZzTkuZBDIcw018u17QT%2F%2F%2FLISDTOVfB95bhZ19iPJLpx08DKiHdAFhmqv1gGLvrRHXlKnQzWtqpt5yA1eMzu9qG9DMtIzGmRtsAc3Sml8IVCgUSyaTgxAAsR9DQ8vw0%2Bj%2Fv7Uy4vUXF6GuCgyz3yC%2B3Ljpaux1EIVAnZZXIiI%2FOAmIaqDWkLUqdudUiUM5iom5Yizr6d0LLrh6VqiwTGQkRwYiru5ZQks5s%2BjP7J%2FfNdh3oDmCYivV%2FrWBZAT31CCv1F4gVmiCTRzkdu%2F0R89JJddA2vCYpnBoLQ4nmO6mCHfuxbVTOtkBKvg42PVG256FuNalWP2I%2BjQHEC73gwv6%2FbvwY6pgFou3OU7xwvkQCZ8hiwzZEBqDmZCJZs0%2FHGO9GV%2FGEKls4bhV4qJNO4bIuw5Gshzn%2BOpZdiW8Ks02K0Q6rf8IaP1VYbKPfn697QGEWpTudY%2Bvgfd36o8qIQRuQ2CiaLws70o0W1ygWkskIhLPCpgKZaNYkG6wGgWuyPei%2B418830jhTWyN%2FKjRyfb%2FFRuhyM1yJxNumtkoU57oslZL7Bpv6ax6dGUaL&X-Amz-Signature=99a49af5ddd8a3ec3ed4c61814abbd9b7144abe687e278e221effc51a646edd3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
