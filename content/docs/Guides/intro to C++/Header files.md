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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWO2WUNJ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMdfI7wfMRYWYy%2Bb2vKMnLDTPqryQmHDKfZP1%2FEMg%2BwIhAKh37tKqji5QXiXvHNFjSd8XJtm4eXpwjMBcXJxgwGKLKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP01Qpywb362ALYggq3APsCInyndagJObC1KzAY32QWsCdeWMyHRaMfrryWZJ2ee8H4PNwJKHbILgvdF%2BiI14tfo9FDUqZZxZEqbF2cm7Q%2BPv0NZyF%2FIt0%2FNdgR2jOBSmk%2FUqOYjD2o6dlOqfWsh5Zgg6F5rmSBVMykI0nnGSWhfVkvmgwS74pQzj6Dnsrk%2FgQ7aR8BoT8jfJhzGb4JVFrkyO0DiNf2zG6wVHADpIu0s8we7NgGelHAQBIECSi3lRvYvqcQZLH9J8EIo0YkUuTF4TmEM81teqTQShntzJI%2FCLA9U8mKgugQG3TRsbWsWKJnd0DNQc%2BZibom2%2FDwRjlX9yVNGG2TZgd%2FFscgioQ8RSd4TJNyVauzMY2Vdvc8JwAt3dpSp5nymXmY5t7u%2BGm74T9M1%2F9e9vc8OYFkFKzGdufcUNivU0N4dtCdl1REjV%2Bn2cSzqULe8ybIzA1qtlkYxgFa2bGOtTji6b3ZGkWtMmozpjbRoi2j0meVOW%2B15mCET2ByeSY36nm2NmGQ1otte%2Bot8xIq%2FvHXUPscLL8epRtveeF4Zd3I23jyAyUR06JiGtgndrGXBctc4nr6ZW3s07sv2wUwx2EuVB19ZRD7sF18Muca4K%2F5dYe2Cph9qWz%2BpYnh1w0EeCA8jCyrtm9BjqkATdtqG9yB2VIQQDGInYkYe3zgEf0Pbg%2B1RRka0eH7tKRnZii71U9tRnu4vMd1FyfVbMCaLsd7rOmvI1BsGUkerg5QQrb%2Ftk3Bj%2F%2FMienjCxQJGpF6%2FnCfaMeKL1thJTOcGCmU%2FPa%2FFXXwl7eV4vI0qwVINw%2BSYMzHjKrDrWIulKdDavONYTc%2F9JzpMK9ScDlefR8XQCPn2ZvRZKzjR4v1CjnxB7n&X-Amz-Signature=de28cd32579fb9e5c8d91a93c5fdd64ba52e6f99023a906707b3445350d335ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
