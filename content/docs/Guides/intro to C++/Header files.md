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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUKIQ6R%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD7GNOpy3SMa4t5tAl8EtLgW7SvQyAt%2FB%2FzNT4893YZhwIgLrg0YSOFpvK0QZmXDqa7vi42thGAc0mlKE%2BPcbYnHQEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpAFYd1iy8eCSSmbSrcA8s2Ru5N2V6Lh3UNXprtZmm0Evj2YK9S1sEsz9NUnUMz6RKxruBpOKF89y%2FV6ViqA91tK3LF%2FhEj06L8X3UlZ%2FvhAZmAPvTxPcT3ZcuxHHeoI8D9V5INYrXOdbY%2BD5D4t5nCzd8OwJJUxyyyPcF67YUQth%2BOxt7RvA7rq08JDE3KqCRp8g2DVV9I6B6L4kET%2BlJUHPVENpJSicoUtt90A6Qh4R7VR3rQEfXM%2BpJzRQyPWyS1Oz978AGrmub4VnekErQwiFh86btBGWdtfA7iVueEYS8lBAZsRlBmJJxcMpwUk8rE1JbyJJtqCC5ovlH3PIKIRVVBVvUrDUsvCvxd0XHf6Q0MTRWrWKW6rhoCJZ5xCxGJd%2B7cYklypXEyrQw2mAByI2BdMjmRDndRQRIxwGlxbhuIIW5fSPO%2Fdf7yqzaAEme161pYYas7NWe%2BnRrOLO4SlIDk9lJzXUSbEAdIEqM%2FolPn5H3KzTFypPI9WRnCLbHxbjv4fhIDDtHG%2BJI4H3aIR598RjNQ29kXxDKy1meAOUf2Db67slY8L46xCk0k5HVLQR3ldYjyMokFoX3ZA6gwh5F8jlrO0Dh1ngljUTUzRqAqS0YliYFNRo8ga3C6nPQ8%2B9ZLeZFB%2FXfsML3d7r8GOqUBOPwdygacXvku20X4HWYr%2FHoeF9M8uaVo1kN9DI4w8UKvSSt8c46Ecm5BKwDRJaXLWDcXtGguOtuR5S9Ob4eIcrs1dMGVsVLOfjGyf%2FtGzlKLeIAeAhzE7sWZ46rtUCV76oXqSosGukpY31qIlKviepoQjS9UDwjzQq1wPKD7aqlNemm49fYKj8L8RIV62gJHAd9FykHkeAb0Eizm8XL3LShWyRGX&X-Amz-Signature=7a60770531e73787a7f85b88e63e0d38eb1d3ba4c6c4288327ad891b895d21bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
