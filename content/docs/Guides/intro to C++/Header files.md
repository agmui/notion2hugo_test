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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLYTSIND%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIG9mbSeBHYSYNrWXXNox8l9UgiRz1W6en3o3GmW8d9mNAiByHrwFMoYLRmfiQLKdybKEt0B6N49294MPfsn00KVzQSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QeEbUT8py%2FD5avFKtwDpu80hp8EBm6PvPiubF4Qs221n7YgHDahFvMGg6Xz%2BNvNnUNz6wFoGSMtG7zhtXeq6AD5wllMllJmFfn3I6%2FCcbbqhIjNDXSS73ybMzQWCj4W7FCLkEEiMHTLC3HkH3C8St3%2B1Tx5XnryS37gwoKhpnDHGP4uMEqyVtiUAxPcMu9%2BlQ9WkEaoD90DNj1%2Bel%2FvijcQ6Eh8jHVBjDpDXaimb%2FUIlhZblxJHb%2FyRBI%2FDSxfgCd64zSPzjrFjdXDUrPnr6dOgiagv5mTUC3s4y9p0BqLxA7r5cUo2GYLC6J20MTfN5OjDABBzJDkicp1zT9Jqf2fUkXvVvw9HDE49PCzRX6vAoTH4G%2BdvQo%2BV0%2BRmhAtCEvOJDmEv5ZSajj5D0haC%2BD0m86Z7cT%2BOTaFUVUTiO0UaB1Q%2FNGQf7EgM9rSy879yrrVJd%2Fs%2BXqv2acZJ6Qnhr9SRKLpRgDhYd8gtgZBHGdncK2khmzk5LO5xW3KPwSn3JOEVLkG4ks%2BH8eHLZCfirERbHVoUiYexfOHC5n7cj1CvItO2x%2FDmXsDW%2BwdEuYcRbOxR6XTL8nteJvzu2TCRZ5yY1SesMq8CLKXQSvltnZGa85VAEGrmPiDOIbX6XhoMcSY95HxicoM5SIkwhd%2FXwAY6pgEyCEzDctmjmYlDHyX6HgkSi8ui%2F%2Fz5jcPtYyuaUwz4tgbdshLNS68KCODZOFvsqrxgyjhsaj3UFtdsuWB7JZr0dardvoaU7uVhT2yy%2B73l01axn2rfZTRtoAjiNkNkXN%2BeiXsL56LVmVhSFuEkNA8T3llpItZBOtJDTGCTFnCm05osJVtAKPkAGZeJTHsKInaYnBEWD25FFG4zHJASJhmFQmmXAWq3&X-Amz-Signature=86ffa36a46ccc4039cb9bf14d1a090c096e9e2177fe16ac5e26544f60c496953&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
