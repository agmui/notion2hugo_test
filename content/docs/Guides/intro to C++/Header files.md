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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSEUCUF7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaRDPY8gI4WFyGcEmHbtpQOmXzDPA%2FdC9SgGCcc0qlsAiBERZN9xeZvfpWWwTiPjqWcc2iJYIAv7moksMM0cGoavyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGySHgKHEaaVkuHyoKtwDdo1970ijE1Ay4X6jAGbfF3C9fgno%2FMC8aIUU%2ByQ4N7y0td%2BxZpHiZzEMcZLJ9kqdbu6w4dUb5AdeboQIH4qI85WysayF0FVIDRiBLNcsM2zHYqxUj0blcgldgTzTluRIR0IBoqwEL16aYJt1aCrjF5phpQUFJ6EQ50XE0TkjiRXJ2GiVHX8efQN7es8MEXQyoQt4T61nM3dk3a%2BquIlx8UDz6ImL02P%2FpbO7H95%2Bg00HKSHVnH%2FtndDap7ljA7p8E1Ks%2F7TBDAUkzVHFOqqlG%2BkekZTgu7GxdKRw18iVpbcUdXWK5%2Fbu9vk0%2BKCcWctLMPT7JU0cVj86rKwm4vlZaxJZDEJ16K2PQ2r7YkWZaNSYcg69QW1VFEcTKTGEFSDMgFW5o09SokC9qyaVg0%2FKf1eQjeYm2y%2FOcia8Guyl%2B1hSD1YbpKMHfnvjOW5m0ll17kBvrmNVxm%2FGdDCkcynewoVECiKtxwQt%2BJpPHV83%2BzZKgQOsOdhSWBlHGOnLnjEH3evdhYWo51dwmKmHr5NGN8ZGspqmKRP1J41yeyhP2zy2%2FYqouO17xNNJ6FO3owZadtLEFJhUKtKT1xObM%2BCvIL6SNWyaIyYtxT0R355tDn8Dcz2bohywTpM1OAww%2F%2FXvwwY6pgFCIYHjDQGO9JD9Uj%2BXOY%2BE8aU9%2Fep735iigCWfA8SDIBRc6nvQCUOUkF718Kh7RGgMVeTmcdBJvrFBkeu0AgphPyhbjQKbMvGFnMDgHgujbm%2F1mEQdDvE%2BYk99o%2BO400myAR41LXlHvARqT96bxLab8vAkUCZ7Hzyz0GHfZ1eG9PSvuC099ZxmaFf9ARCbQDl%2BlGghrXh2VdfVcJP3oh%2BilUPOOaQo&X-Amz-Signature=05d25f9b8b81b982b5d070f9fc221fd7eef87cdbad5ed5c77294824651562049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
