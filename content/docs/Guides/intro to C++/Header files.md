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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTOERTO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkhLjwvT3cLT179Hc6GxJ4sAnU3eU33Q7Q%2FE7EhlySQAiEA38oa7ZC%2FkA4KSASTUdOi0aGumFlUAkptq6pEt8eCef0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpl5Dz%2BoTRHL798UCrcA1Oo0SFiEN0TupJCGLt82aLt2pMyo4oM16vtVMxrTXUKIqg0Uh0m%2FD8OvnyR1ECT7BLodOK%2FgqwwfvjxzB%2BGLD6VEIfk7pofDOWanBy%2BfUBfee2SRiIUybVeKdMGOLQFSJb4MhY0vhI5qhF532qAKJaTw%2Bptr4VwgtuIbxhJ54jEJCTXdNUZerlPkyWksDZDaKmqmjF%2FiLcAKLdR8G5KJuIeHA9MsWvlnRvDf%2FtExRSamumeD9oWL2z9LpzuY3%2B2I5aUeBhMD0TNYj%2FHPEYTG3D4QJkkMd3GmEiQTnRq1eSa1VaVuPyW4flleXQ%2FN5L2HZDRs%2BvTBUtTRspRIxtTFtJyAPmyQqL6dMSd0tPow9%2FqxdSmSFKo%2FoP65XiOlG3bxQRkijrsZiL7y155KXCMAkywcqFK%2Fv%2BNKCpBLolTCfMhUJZ0sthKT4zEuMuXFsXPGsYWjl08nWjgGYw0i1NqA6MHnxn204Sw0wruER81WWs4nrAg9HVjUwxL%2BTS6mWwXvBtNhnIsTaG2nkKLGbe%2Fm%2BXD8SqgPezY%2BsrvOT%2Bu98bXMHXPJfVOt6lDb8Uk4cKUGoe7TQKAa%2BWPEuNoGcjGNRlL8fZyXXpzwwnUHgmlc%2FABrWOEZMgcsLf87hX1MILkob0GOqUBlgLRcBlHk6kXRqYRKXtk%2F0Gipl%2BrJo0vlhlE0Ccv8snkR5qhW45fTtCGvT4fH9IyQKtmgXS96i97EY23pKxyrbm7NPD03ugfoGirFalrbNiF8xKg3nBGnRAOB26dagW9abXI9o9nGAATlxKeVphX3%2BwvrkAX464GmnLy3HiK7J%2F6e%2F3thi7c8LcJ%2Fx2G9RPyBY6Bu0CiONKs7jF0GO1EPecXn6YP&X-Amz-Signature=a7c591467f4b42fd1642f68e227158c9da3d4714ae33db894a470f5539255451&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
