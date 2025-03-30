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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTA2EE6V%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCHL5u6kzhrz8YO945gsqCBnnR%2Fo3TBBjrmPglhQKmDJwIgat6o0eIS5rkqLmv3hrl7K7GiMPkqyJQyMFnMmkhk9VsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH95%2BRkFSHRKQbxWICrcAzBsDqovH7kvWyxkzZD0HJyMU5B%2FiEojw5v3y%2B9E5zZWlXmDDdk7LuOZKzJxD%2BJtHpXqFCAom7%2BskIELq2F9eAVlkLDWnV3mqkle4p3mSTOtmTX3wC08UFoK5pQufAqWg5aHKC5dERcMtuaPk%2FIN7r3k%2BqTCPF7HH9ZJ8vI35sN0pFxRJs1XjHn28gj%2B9uLLBqZvoUfhxKFXt1Er7S2f6nqWw9NUtpyjfXnW%2FpU4vu1tGQbfFAFRDLFuwoIt48oNkvDR9plPg8vXhqpHuzze8vh6000AV8SOPfdp2ej3ZLri8arrNGA6m7uFQoM1m%2BwD0TiuxhX254TQhoyiKDbaNblnBo%2F3QbzpaGD%2FG93VSWPMUFeSPWNqQDsstUfRewNpeWuqzqs%2BzyGYGBgoBy8IZ9dyOZsEH5ejRRNEjIRhlsQruOhgncXWxATXUMN4yuNjYhjA6UzUd2oA8T5JgDqTd7tg9ymN17qPkBP5bl8RSWGiD0n2n2CigBBZtEqQufX9jWC7qkfhUiFcfcW%2FbGaVHG%2FIaQfjzF6CB0FmB%2FZxfc%2FY%2F8dIlB2icahFgSsJGM4vQ2m8GQM93H0AHicZyU%2FL0FRHEaTvUXozxwbFUQtNjyzB6Sxa%2Bp59w%2FWUatMLMJzYpr8GOqUB6Cwi2m5ZgqlwPtR2SGW8DWkaKIr4NFERWGtOtGVzod18%2FRnS28Z%2BMWlLqdfs3FdT8NwhhIWa8cyNLInh%2BqHrhya1am9avjEAdFBFAFEJ4di%2F%2Ft%2F2bmCsl1Agm5zCEk4c2t7KstqGy3QOJqY1Kn9CUvy40HofKw%2FjWsfj%2BRZGD4bnBa2XKaO3nfPMKUSSY%2Fnu14n%2FNBH8a1G9QiPPamIu1G0lR2kz&X-Amz-Signature=2c346c7f61b83b7d76af0420b54c862f18550a6f55bc086a3a3dea118f53727c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
