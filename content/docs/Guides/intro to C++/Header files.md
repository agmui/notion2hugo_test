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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJG4RPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCqHl07Vhcy2LJ2o0a3C96NXSRyYiTRKnM16fgMRB%2B82wIhAJF88cGkBD%2BuXozf4F9F5ESK7risVFSe0HgdHhAiyaoyKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvxxKyd4K6zwUih6Mq3AN0fClIjzwvxML%2FuLATAH8gzIVWTcH5puSyxOhQsuO4eQys4q0zO4vRMuuiPcIAcmBlIcysKz5FQLA%2F61uS0xKMoEoUjmg%2BS0LIu6ziu%2BZeQmBtbPvm92FFK4538OLjI92I44IYPQGVaDHN%2FKwDPQmluJ%2FZ7DKMuzI0fYxIAUijr9Frxei3KutcybXUMY6O9Gkj1R%2Fl0JuKl4Bn6TJGM20zZsKv2qBqJFoLiQChiaTrDJhGKbbBxjVZ1We3d0rl%2F17n394a5v%2Bau0KbjUtqBmmdnvj%2BGWu0zVMzskDUFs1fS2O2mgAtnf3LIh3dVyc599mzCRypL55YwIMwvCLs0kEylW%2FV%2BacKg5IAY0vyBZ%2FCUb23YhE25fIKIrxBMeerg3qEg0Gjj4OXDRjyaTe2%2FOQBgPFlT6XCQneW1UDNlyyaW089yO25qH765dSt5Ms1arxN5KKEnPGkyYa%2F6D0p2atWa4e1FpulEQNpR%2BSiMkWeAkVVN8Pz32lV17e8Oq37Q7JZ%2B0usBFpmznjpeKapwzFEJHqALhNBdtJXzz6nmSokYHUlJ%2FPYEUD6oNq%2FWYcn6tNRHjik8bBKF3ejIRprJbdOfdMLkVOEpJrNb1W15vZ%2Bqt4%2BDo1vJiOqM0vZVTCDxIDTBjqkAXIDe7av6KE5PvpvgNWh45Dyjt4Rnk76LrLqoUoL2y6j5ClE2AhwbdDNUuhrUBbuuyfuaqUHmxqnSypjEOHXLNYskU88%2BAJvn4vRjD%2FX3XV2aFbaDauIPWOsAXyB5QkBl1z6b9fl4h4EWxOStlulOvKAljgGbzflXiLCDwzHrlr4c%2BnZ06xlUJ78tiIBixxB6qzJTWoSzNb6RBAb5CRow24Vi%2FNN&X-Amz-Signature=21060d6d5e1a267ba93de4b2edc74159fa8ccf3017eb9a4533dd2c69d5b43c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
