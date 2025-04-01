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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU22AVTG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAzqr%2Bi6PUW2No1e3TISftJojQgi4bokksPUyHd8sORXAiBMDJDu6Q%2Fl9iRd8gi%2FR0sE17PjXdzItlbQ3Rl%2F3EcmiCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8y%2BuSiJdHhIyVpCKtwDgt8zOctKI2N3ZaRjxsn%2FNulo4Tiasejg6nbJAY9MkQsDovHlvotKyAjcpvrHCey%2FdWf6O2QBTM0A59zUfMsAKWduZz6ZK1fdLpQDbFQ2yuAMXHeReb60UXVJUsUOxRIUjF%2BPyutcKvL%2FE5gfvkvyeTQ61pVM6Bz%2FroZNPQE6B9wixcijxcpuGjCFJ2XT3NRjxIYiEzKeefhoS9ys9NqdZ31KpLONxJH3%2FXaCic%2Btc6kTrklhAVaelMb5qiC2byeu517dTFaTcxEOgEvv6nVFVhqOwI38abcdu5lGhsD6iSJS9uFp%2Fmf%2FLFgSHCIijIlcyaLZBTXyXsGmReIDSTU6SdQ%2BworDzsUpR0AKzHc%2BZ96p1ykGdFKKw6zv5xwzftw6Wmhj0BM1wMuAAFye5IHB7UoBf8H%2BR2d%2B6EJlqwObnO6p2ADQuafUCoBDuqGJUe01%2BoLPALgJ7Zr0tZ%2B40RQ3N%2BKQfWALi1sDB03QXc3EJAosOfyZh5kkltEQ8ws9BzFLLFyg27rsmE6A0zgLsNZMIzYftpiqjWVqHWeoQzD%2BRJaSe%2BLrrkcwuYM2e97FAtwfp6KbxqCvAB2cEtn9Z6rObTM36%2BvZJMMVwAyWcJd0APjvSg2LudhjOYzs3IAwxaStvwY6pgGHNxTuxFUWC%2FZCt6Z0RKm9p5%2FrBtiyNyycY33wR5FTA5wUyDhdmvQc1ApAqPEmkpGGvcs7VNh7hL9vUlmSOGezl8kdKRKP0UkEXiEEkpRrN1Njc3MU2ExffGs0HC3pxVDNnKnjkIt1Onum%2BkVc3qjt%2BbmYwUnEqXGUjNJf%2FVdv6LxhlesJ1r7rvljVtD%2Bk5dYQ%2FK%2FdAnDUdMI1VzHdC0Kodb6urnkX&X-Amz-Signature=3c4bd429723595febb207b6401ef95704138a8fc9ae29ab5f8da4e20f9196c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
