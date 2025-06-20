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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFPHEK7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbNB01%2B8fgUoedBk79ZTT0promc7e41x1Xvz6vFqVZ3AiEAxzOHE6k4XQs%2FvAmMqUzPM6NdTozqF0bL7pDpL8B3d5wqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYVaENcAku9FacYdircA3tAO56fWwgufvTaGKIOlPVU3IDXHYjKUyEG3Rzujsrn8d7FyMXf9fSQihQIN0MJD6WYwwp5jfVqkTgaqbCjeKd83me8HyyFrFXyISFmNlqJxHWfD1wfpe9fOn5BagAczVjV3Zph2uw94oeCSohJrC%2Fu6Ns1GsyttPbOSLrQQG3eFhwxVXrElcYCh13U7PrI9jgzoLkhBx68Wi4tbdC9Bi4EuN%2Bt8t7NhIwx3eXQgUBmFOg2uwn1BiwomOProLEi9tC88q%2FjFVVOENwZjPn13k9485pcAe2bkBOvasVwpyrEgLmcNN7DyyUoCJk177l3g381uo7YS%2BDsF2VOjSOevcr%2FfIApptZd3sTSxAu3tl0AtSRVQv%2BNTY72bcX2kepExkoyO%2FfbVOAAfHE%2F34u8h11auyoYKEL083%2FNJAGQLk0SKug5fbpADo8fIf99nBGUAOrmMewpjisn5b6coQUBL9em2YhoQccOuvVvevXAwxeZb%2FtsyhORCd9gO%2BKPgxOVuYBwCTDuUJ%2B3uDdTl%2BQxWDfJc78rHXNkGOmMmxnjejCsiYR9ab%2BGh8dzaENOIrkrx2s9MzHYUM3N4njrCY8JGlaTD%2BJImVRrY%2FCaaK7Rn213Bji5Xh7Mg6A2H6psMLuy1sIGOqUBBHSaWNLr3p%2B6T%2Fnw6Lwgm191V5%2FagNnKXT%2Bz%2BWnL%2FuL7tPCcaQvshP4UfZ3Qd0XOyMNvBSSw17Jmp3l55Dv5299SBuvRul9A3DkuP6hFFcRoJQalCwBbaDbfxuoa2qxpleuPohh2fBeKHsKJu2YZuOyxJLnotfXfb8ssSXne8O1KM9A7XP4FZzNfr%2B8DNCqiL%2BCAGrf6cka2HhQK84078paqR8zA&X-Amz-Signature=80aab3a14e3655ec34c802dcaca1ac641973f8b4d59981ca49cb211f04ce5d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
