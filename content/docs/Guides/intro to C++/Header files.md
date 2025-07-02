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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVP4JIV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBubqeFraZVZu0oouZP7dcrikORhgAk1AGcER0duZUQAiBIkLjstIXI0yJvU2kG7bdmx%2BT0I9ospcmz4frRdPyX2CqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4p0Wr8DghrfqRdZlKtwDkfeXhXf77QOcxX6pvFFEK%2FDB0ircPSUV9nAthGeLZCv8Hqh4C1dTn4kmM7gSzonQCXXVZ5PnWn2AccyTebm75ZzE%2BzmVN6So0inui76rGQBq3ycDIa2kkgzsPLa30XboJQYhpd4r8mg52r2bnDzjjYox9aTciw2QSfmKLUHUBvuQl4ItZLJl7UlOK3%2FaziM8%2B5fDl%2Ba3QUqJF4ppsDCttxGw3vyWtwjVxd%2BoKz6%2Bq5YMFKZ%2BJlFM4jJ3zrhRfKXAnsY2v3KKhUtvEMPwV4qPCxojQYMi4wcm0yFOBr5v5sycu8HBy8qaHoRfpp9GfiRVFAyLiYljTN%2BY4cGq0ku0xAMZHgUHkHju71Z4UwIUY29khkgAxOAM0EVkSbZs5uf8nJKIhezkw6J5guJYiAPyaHYagui2y03i%2Fva6hs50fPR2FQR8BUye9LXCohRexKXnQ%2BayWM8d2Znmgn2kt1PHORzlo6pGBVkj402a32L9pgd3lABSZ0kOm4uBNRKAn2MRKR5r1NEgWOvTSULXCej7ztply8%2BzonTD4jD2tuhRUNjs0zstgr8h8iT1S9sSkjhZ6YwR9ftQDpcpQg8CVhdZ0%2B5x26bRiYJqtM4O63aFwwnteodBiVuyUH%2BlHhMwm7STwwY6pgGnhzJ4c9ArrxhKWEYvnVxYP8jLWfBCed%2FslH1m5IYqOCUTtAvTohqMx2ii636kuPew77eC%2FzOiIx6xjuJPE9X5xJx%2BcpMHgC1gl3K1D%2BQSnsFtM%2FEiLQ0lggD8EBdILZKICkCRrn2G8BIS34k8wl74Yic%2FUYlvkLX5N1sI2iWEmvKIUVDE7zPCIOzbN%2ByTb8O1fx3Ul9hWdioO7FQifygU5TG5rQJS&X-Amz-Signature=cbde291b3e101b67063a7d0617c6ad7a334eca5eb3beac39fbb42dbe782941c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
