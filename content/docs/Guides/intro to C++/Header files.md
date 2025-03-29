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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGZAPZA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCiJRpJ4Ia5YwvnVK%2FzG72tFZ%2FMKHbq4Tum1ogbsRjSwwIgXOmkgLKyqGOvvn0cA6%2BIpbIdNlH7iUuaF3H2nbxX3poq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEO%2BjjgboZiYavhgMSrcAwPneXNI13Tc6Zt%2BCreFm5pBWyQTK%2Bu4z2pXw2%2Bxglj1islx1ZbvojYc30qX6a0%2F3tLjpNH8rnEV3gUXb4iI%2BJ%2Bs3xYP7jbghTaMMkHm03cSw0bSaBBEHFbexszX4OaskJ138VzbV8BD1YLaeXdV5Q%2B3YQHoNARzOjd2HqJqYB2DXBh5SNwtse%2BQvzFkZb2rTzgFS2Pt%2BactF%2F1bPAg4JSyePNN0pQcqhqOEsjDkMQ5qPLkWsnLIzjwa1H8uZXEPJoXCQoWnIoVnaQth%2BumJxGHoMVy%2FbOmcmNho0BSGwJ34A%2FWXynhe1t79pME4ZY1x07UP8%2BcfF7H0%2F46aGnWKAPuWHLM2l%2Fj9BdHLKYSq1Dg7Ml5AxwiTIVkIKQz4W%2FZMgGjTwJYP1%2BYuTMj%2BTRRHIZ%2BE6ZwZBOCJvCplg0N%2BvaSZuRXfWbr%2BcjEq0utw6oB0dAeE5jeSKqaDK0QPHqbznXqzI0UPFuHarWys36WZPWj%2FEYQdJkrH9pnwVAP3pgFeNiAp%2BiOADXm9hwrbrbVvkRa1ckgxRSfTdvpZOyYC9a1Uf7Yn756tn5DSmPerLwSWPZQDNNiEbwbdRZvmH24xRHWxMtvPgRrCbPPVNDWlfvwgZ62NchULE7Pm7f42MPzbob8GOqUBSTcVYImL87fF3XBDcxfJbrfmMRKnOzuIdAdAyWOQboma%2F%2BihsiJYzmNrTpMbEC0myXr9pSwsU5X8eLCldqRvQZDPYQNtD%2B7JryTrLFJ4lAbGUx97BRbARgxTuCpUlivnru%2BdbCs0AluBGaBegotF9qXzctdhsy%2FXilyXWbrBhvXloI2iKHbdbhj%2B1n3n5OJi2qzmBiccXqdRLHXQ%2FTFv2RMdXS%2Fy&X-Amz-Signature=a8bbeea74393c8c90a184fd5b3afc6cc1a4575101057edc753fe5357a573f5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
