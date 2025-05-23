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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCPYETFP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHs5mYVdBF3nQREjl2jG%2BKded%2FQjTr7jjRuO35rRA8%2F8AiBYyqZ8wlaAJWdyXyEPsW6mjU%2BX%2BLUpVXuTJHHm9SMm4SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2BHVzaK21r2ylEv1KtwDlI%2FAEfnNf6KQ11YXqjZ9BAG%2BbotF3TSeMjJem7%2FrrTUSLqhaeMOHkZtHXETMVOBJ0QTifNeIGAzT%2BUBPdrIZgpHCatx%2BTe1b5sgwo1ED7a60N07rbmRgCr1wN9B%2F6082fz7EhOcfM8kC%2BT0dsU9nOVU2BJqUMqLkOZ91g0dkKwXUun141j17TbrMcqmqss5s6d04%2F2l9%2FkbczD1%2Bj4jluBIJGSS3QF2WdeZiVmbuJYKpjkT4vXckK87HzAc7fQp%2BYfeM8nlT2qrEB3xuwsOSeU9WBcNDh0g45q2iaRpYjbs%2F7pcapbLqE6IpUvLeMrK1jkt914TxjM%2FKiUqsmB%2BMfmBLecP4IMqY9FVufUk4drfg9cY8Z6biGaoU4h1bycFbyNEE2CPiI3kYmsN2lmAlxffjS7KamtZxNdD1o7pQ%2FDUT1fujr4P97L14dDpHNH2dpg2kTGZ6Y5mJ%2BPoMOrRfS7SfCIRa9UV7GSBjdD2HPrODIF5nCnj7HWV%2B%2FQxl2dMsHBOHMUAP4Xrt2V6uN5mtM8az7LzU8V6VboY0cP19gEOL0H08Gz%2BDyZjAutN3H8LsIYKRBC5T1OlTTxByDK8xjAVsLKQTQDmA%2B6oQFq0UzWnLorIsg%2B132FTzsVUwhOzAwQY6pgGnqULOYb517r5r3ThGi6sAu5GrrPwYrEx41VcuLazo2ZCxtByfJe59EJsrY6a%2Ft1kYGlp5dzb3JzC%2F85Lr2jsJWFJSZCdHoooBIsroxRCQOFELo0RSdDiclse77fU7hKZWhpUXjJkyPWB9FK4FvRNaIWeDGNJPLDh7sKdEB%2BjHcws10V2XRNAOCubXX7hi1xT5hszH0ewTshSP1x2aWAkbi4ERMURQ&X-Amz-Signature=6d2e4db3cff20fdf261bd09e79e1c1812a9f43c31379698867fbc76f9ef264ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
