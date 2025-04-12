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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4S6BW2F%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC0pCpViEn8%2FYbDWYmZ7aTDQYkNdZ1lVOTPBZIrebTwwgIhANrHDYtwsTgpLOKpY7KkveVWRgRd3FyZUfZYELSIvYpxKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7achoDD9LpCdryBAq3AN56lbpgnBeks2VrZuwUMc7wSM0jRAZsqQVcRhPkSvrHdbL%2BUlXwLxDE91Kd4hCQgu6jkd57uKu6kUCy34kn%2FjZREAK6WCzZXcZuoSQHv3zg2N6ujn1gpXutd5ARR34sejv1ExPEu1GzpQ1XNGKNpqlJCo4trRGJ591dKQZ0O2s%2FtPJkZbS8%2FlujbZ6qc2uliyPIQgJuHz7O%2Fk6CGJf3rDRpIMrXqq%2FsBLBwc27GDJhPmy3WJyrybLbXt9OiBt31JKQl%2Fh3ODthGap5DeIqCiPlLMdiJ6xgA81DI%2FswpQsTki6Jo1vQXMBkysg0HDdwzMIAsGOk79qmrBHMmruTxYIzV9vVJCzZ%2BXJoPRuK66kLCL1MCyKbDWmcJsoNOoCVL%2BE2WIAMXKISJPemukn8E3oXn3P6BDCfCqBTu%2BNR5lCLL00y38S%2FCNe7dk1q%2Btf7zKDExccUt%2Buz18Zlxzh%2BA4zPJBPBruxQdslyiqp0NKi3xL0H7yOM4c11b2qWzqmmYFsFA%2FRbJzSnm0aZnH%2FdKHzWAha%2Ba40emIJNaPod2%2Fvjsj%2FVFv%2FbNUCey8ciScksb0u58Qb%2FXawrylu%2FMKDbAzWqj%2B%2FdtXMQ1AOTMA%2FgyB9FuqUCbSDxkk7VMg0vLzC%2B7Oe%2FBjqkAccGfAqWO09zX5kh2OYNXlBFcX7FPC9OreWAqehPCTvRPVQvlkWb4dmCbYU8y27JieRdLGohq8wSSoR8Q3LfaUkSuoM7o%2F%2BeD2obHhOMX5a7QnGnTIovbx3ZB7flLJsV7dCW6opmydgCzs8FHvyg%2BU7wysFnwKodiP5sFQGiimJvHkB8f72yb4wkrctbIRIbFUFe2eFHGRufXpcgHWkt0VXrLXNi&X-Amz-Signature=0b73370caa7454fb601475a1701e252894d2801de7b7c38b2a4274a25e4d6302&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
