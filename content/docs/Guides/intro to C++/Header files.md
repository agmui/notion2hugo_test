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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPFS4QZM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLO0ejXNEhnfnTNi3EYhJchrlxzUt5j6WKJ3bTrLVOvAiBN55di%2BZkuZtYsf0toJcIjywC3NBU8Z951hoOwpdZ8OSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMuCZX7H%2Fe39wyj3xLKtwDI3Sy0AvO0yqqvIHMxWxmGtWv3WL8OlpOtv%2B%2FOUyWhKhqICocwuMk%2Fuby10czJTuwiIrk6bvSXyzcPmeHg5%2FQoNESslEGBAtkJEe%2B5lskTueY1iBPMIIfeTPaJq75c1bYvDU5VCfKm4lFoHz4TLrABBBBMwz1yuf6s4I2QcUk2YhtxxOtkbupl7D9SWnb5rcxiCcaceg0X%2FZ1v8rWU5tlrgbxFWne1zk807TfrRel718w%2Fb%2FZeCmZ29P2KMic6Iw%2FWTtkp8FWuMl5XKJAonyOSb01DD%2B6ACUuJx3TOGzX%2FaB4O2cybkBApd02AcOPZ%2F36%2B0cNbKqhpFGza2dHiNaQ7CP854u%2B9Mzty8xdHjZJYzntZUdbgVzkw%2BnEmPQdprfqJwKnNEjDSVE9bwyam0TtzGDvHsZAb30aUNcy7DJTAVjNvhLANJ7tGcsHWsGm9Rg2nVznbjg%2Bq34jLZzvlHT%2FDIwjVlwSNRGSaKSrj0%2FwD4MeIPuwNQ9o%2BQxSIK5zPzeyETrU0mK0ql2zVzIw%2FtLdn1fjUB4tbqpITjjXpWuh88rDMY4WxQqjrWIJcu6clE5%2BwBTJuyvyJ2HNWUBLoi574KCtjhVfMqeJtocLGUcSIdPy8bIzKzGbRkmABKQw2JqdwQY6pgEFlyqz0nW0njz6fpeY48ZR50b5to0k1cdiJcoKHgnaE7oFrspCucDPa3hvunumZ39yHbDD2UnFqL8gj%2Fj2Um30gLeKNtZNXDjXU%2ByD2XcTkS9%2Bruq7T7PLMdUKSTDKz8NkG8UlryMkV5zRnbmXTOLsapZ54YR2f8f8OBK1axZXH4y4wnobd8Sdwxu6VsnjzFB5mtlGVZRfXfqti5xB9%2F14ZHbvl6tu&X-Amz-Signature=c4bb85171cfffe3f0cb462541699ea44bc473093650bcb0af60cae4961a103d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
