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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737OEYTY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEkYwvrTg%2FFxSRvKgVWDTQna2aAFgcyga5CvFEs06ox%2BAiAiWlKkp4vLf04Cs48xIkVARCMXG%2BGvzrHpVTIzQKywZyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMZIZmAsNJKUqQ58JGKtwDNDu%2B2z%2BU%2FA3Ik%2BeiKF4SbZfANBOhiXIsIK74yFQX%2F5%2Flc6W7hV%2BGdanwFAkjrtGxB58lFIGBy%2BZRs%2FTYDePS7xroaU5M83zOjytqnomPZL9vRkpVNsQFZcryDmVlMF%2B7Ba%2FOc00SsBmquluoAX6j%2B12FWCsAtkWAfH0NK1qgVhnPdJFniyG4ZYdsbBUnOgZw0qDNGjNJI4%2BdlQI2HbghVF7SrNj45gKHpgsrYVwO6UKdVaR0C8FUbRrnog%2FE39O14VxfD3HBWEwesvbO12U6zcKEfOzmklulbnjUy6wstvmAqb2UlExhkkIJ78tlnI%2BWjOrgWmWaOoDI1Qg3vCogaFw517uyt0H1lIkEXcvxx5%2FBT6inqdwrvQS495nmSumtVPfUdK%2F%2BlS0HXRrFmwES5WoTwGgcZkw3Glf5PqQtmhbp2Yk1K2RkgeT6EQ86uQwBuON%2Bu1tf0qIzwmCeVjEnO5IzDLrtZiUiSte8nEnLgvWBV13yZBmfuL53P%2BqtsvlHGQYyKFZE0Rn9OGLrlEqE4CmB32VmSJesoRU1k2Zkam7uoZhR9rXK7jE7xEwllo%2B3K7yxgAcXXZ4HnSZ%2BJSwCHKKKF%2FdI1eqDNjwPfxSWVPlyqIcONR5JevvHP88wp4WZwQY6pgFAZLbR%2BK%2FJ63fnO1kIw7KoifCLHEnv0BZkrkbGakBkcrUi%2FMzpD%2Fc8RTX%2BQSTU0gFeAESdN7dh7I3JuU1azJlWgcVScxIvYQMBthhWvyM5DviMXUglvmOjQ1nY54xi1GVGGIDb0XcJ9AnzIis%2FveLsutbQHVlfupG%2BSL5h3f1kUXfj%2BzYsHVIdMSXXrslj%2BrIlZW4BW52Hrg%2Fvx8K30iRwRZpBwUHa&X-Amz-Signature=43c02078dfa3bf88b1352c919b4a3b517bf78fc25dd870c2b551c9164009bdbf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
