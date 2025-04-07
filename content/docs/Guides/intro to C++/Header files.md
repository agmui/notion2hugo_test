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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNIYTV3A%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSwK7t4rAbNci%2FIep2wYRxH8w1sSSywhsrpF8VsgU0mAiEA9VAgfXctmvimIIt5I%2F78Vgum4hCt5ImiulhYi4k0s8Mq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHFGhF6WIfrYrEccJircA5u7vvGdQ7BpZnDiacuc6IgNNhuIFMrYmS8UF%2FBOWOVptOyLj4Sar0jFyujsxrenBOrWrnPd7Of%2BP5W2GuGUj9uUP525v83H0FUCUTBFGtxhynr6PPCrH3soXX5%2FQdzyN40hA8MN3T%2BaaOOonnJP%2FZTFHAfqQjeKelWnTsnYUaWqIKn%2FUNy1yUlGLllVtLBc0VkejZP5nQQAujjDBTLp3fR03Zd%2F9bWMq8ts1nFjqWUWMNgvCX8PDbgQz9185dRJbkgmZcu20Lpf819PKI%2FWO3DMggwMjUwbkyzPsQAYgjedkk6ILv5B20c96eiWaUCbapMUvRTMjShjErcQnoetZIeJMFJ8DvdyuWDVtwr66tseW51u7j2zBABRObO1trzyzkNIXGreaPLWsfifUkbndsduOxUhrq20bpll7OtTpHaA1LrSSccVy3vFmsty0HNiGHNXBJRoYyNm2%2BdbyfaZaHhbW0VvFURYzBFFr7rjTRP9MZOWSovSb6S5OsILxNHfu%2FmXjye%2FXhy5T9vQ2C0AJmRKmd6fMBcxflP7loz%2BfFUgM8yvcMmhTtIHjtQCNsRIWPsm0JX2uKx4sggrIIusF0c730Bp8sWlWxohM2FpgJ7jfKkfycXquTyTKNdaMNGezb8GOqUBoz0qOZ%2By3x%2FKlTsh09LW3F64MKIMlKKWM3lqIrTg4IjMtaKSGkNxrIkKhDhfKKbKzSRN8%2B1XmzHod7dWT%2FK0XkdasbTott7z6pRmBqzKBqT9DufCs10uEerkW%2BnRKpYbRc1VPXVORXUH9AHTzGri19%2Fx%2BYNPwPRB81pdMd3dA32OZwQ7ivMvOV1KX8LppdlOMg6Hnih%2FyorSQIBQ%2Bxm9aFjlBJE6&X-Amz-Signature=f77b502af03732308ee21c0c266aa5b379b5557a7a815ac149e60ca9924b91d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
