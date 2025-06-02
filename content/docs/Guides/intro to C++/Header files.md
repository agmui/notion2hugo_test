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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AIV75S3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBJveUvI%2B5BBVw5tL47EMHBt7tC05D6glufNxvWfS0pZAiBNzi1lbePQK4fiQThC0P80f%2FEI5uKLsMGV%2B7LGZQUjiCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkKON1JhcGHZe6O9KtwDOEECPUqnJeE1A3GQk1oVVUXp4MnmWpjarPLjrRSJa7OSWxq4dofReQiFg55YdFkmcF3pG7bKFuZuDp%2FrdEpb98o0u62z1Yaz8zRhAXW2SHx2wj3BAacUKIcjrvEdkwnpTQAxBxqPY3YFoxUeuZBIbOulpJBCQ6W5N94C0DWfGMRqDl8AVj5Lgszbh1V63FkctnmFZSlXPbea%2BLJ1RngDwdmal9WWrlQprjEjj7yZ%2Bk1xhgQ1%2Fkl634IcmprkIera5lYUYe2o1lh8xri7VNaCTGjLpVufLFOr8d1DcQKf%2BafSlX4RVrG6sZogJnhqRju9DGFNwaXdwLM9AlooiR5VdRmRkqstHIsJTkThvHd45cgD64Fo4fjeuk4XDcoHzXwZk1Yja%2BgUto8tl9fPco1kmmZVGkUnWmaYhyc42UzDHb9gE4y5LhP%2BLtzcPWK5z1oEhasTFrOuNxHuiqFyspqFb8I8sn%2Ft%2FH%2FPsiamRLaHyCyV4y4jEnjF6gly0Gc%2Bqp1of4X6sHLQ%2BQrqLLR%2B7r6CrxhhRaUuJAg9rjAK0lFsTkBfSI6mL3tFusRSHnl6fLDbs8NR6SlSrV4SLdMqRGHlngGuvk5oCLSJlQ6cDHd57sqljc91%2BxjqYANQamkw5PT1wQY6pgFywR%2B%2F5pBX%2FsNkppNzV885mWtqXrBgWyBa8MeuVxgnLcMIuaRxiemxbypNqO51ST7v0YV6oevC0VaKYLExtSq24rvT%2Bc5H9hJq9WAPmLe2KyzztgnEZD54PAdY6C8WNoWRj2UM664LIpjD%2Bt5WlzrRcS42sAkwfgXHEuGCAm1PTVeNAMDY1LWLz4Os7n1yzF6L6Eyy7O%2BNcvxZOBhmZG%2Btm71GPY%2FX&X-Amz-Signature=56a02423052c45455dbcf16b3f85c3748356c30523fb4fbcd4ef9e99564fc32c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
