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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUD2BZL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHSS8InTvzDl7Nt1HI4hhnLRkOManFMztUdBSkT0hQ7gIgWWc1yzHIdYm1tesMUFSoedJ8h0kDdbulj2GhjFKGS2cq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIyGX1iLtC3UXckKmSrcA8Z4KXdXoBZYw3%2BCqCJYBkwHa5kDJMoxOZ49Lidz5Jt4bg4yUnDfh5m9SwlUuS9L%2FbztoUvaCNTBuqeYUVdvV%2F4oegZ206vcTUbFuhjXSDYGaim8ZcbfGbIb8M6KohQlnNdnBqcB5fvgd14tDeoIlxyzKNRmq0%2B54xpaDJzt37CeCfr8tff12RHT4lnnIdwQUv%2FxMxHZaA673qnaOaL49O9KqGuiC%2FRT6%2FXDtQCXhOMa%2FmuYsNWSr6JdQprmnwtYwhNZR42N8sIbKw%2BPVv4dBDJWvNJZ0qn0E8CK6%2BbJnN%2B5V11uuGdJvkug0uP76fyu2FmGSVtbMo%2BXk89cQHUWD%2FUkIsQp%2BeG6J26o2WFlVu26DTvx%2FgGCS5wae%2BAKRv4P%2BxN3QiB815eHc66iF0Y8jrFtmcW7nHoZF5tFgB5RE0wvnwqIaB19wlrwf6V380BTm8OvltXnv8IJHPi2V%2FTsFXkOXiLw83HEk8CxYg0cRat%2B%2FSKN1ho9nfO%2BOAeo0Pyne2s%2Fa7ahcjKTi2R4VBzUqDh5%2FP5VlQp%2F1i1Y8iBYdHHOcAXE9ljZrAOg6%2FbJ3GNunOXdujzcKIEqC%2B3GF9FduR9SUCJip%2BARXaHBnx3pPIQo%2BGJC%2Ffib4va0SSWBMK6SuMQGOqUBDFv4XKs%2BIDpKv%2BUlSKFnneG0GIWdIywi6jESbmcOWWE6vPd2Jw5oROXqvUiGVSVOYaFV9esGXxH34y7H6yQucpmKUpP4k%2FEpksVXHEhTvbLRO7RNaycRI%2FuN4U9XbYYETxDvFHwfpy2Eb2JYFGYUleK79e1Oqy7Ikpp3CQ6X1%2Bmio1qb1NK%2Fnx0df1RvMBvG9VfkbBo93VmCm02SGZSq3zU8IxrX&X-Amz-Signature=c06e6ac618d98108f0428a644debcf57f7c1b52400daf1ba90ca61ae441d42fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
