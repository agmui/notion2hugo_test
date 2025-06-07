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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XNVBD3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bs6xeOvAv9FsxEkRhz61lUy59Cp4oaSDwIzixJO0BuAIgYYvKlbisxz9ZzaN3prky3CiPa1MoAWKePnuuyYEzShoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCEdAW5NymmaOpLbrCrcA7PYna5Vhv7MrwMziFlO5Nbc3RyoLQw%2BVp386sUj%2FyxzoN7zVaNB03J53KBptHFBmsFfrSJyZTvfMmmTCxT%2Bh%2BMB4JzX4Pks7%2Bg4zo%2FH%2FZgkwauqGtSaxo2%2Fe3hsgpBLtFFd8O790s9bl%2F%2BsHsBVrwi5lf7imfiPxZMXYnICBJsFSWWxM8tbipVpWzsYcuvwSs48gQoH%2BTs6WBKVblqQo%2BtRa20NYdFscS2WNXipBA7A0G5F80YPpu2t%2FNqfPaIy%2FCkbUZ5dHoEIkt47uyIzj%2Bg5I5bRIr6qcgJSkJuzIcYN4xxCRlZKEyMCeKtqNtriUjqlXX9QkF%2FhC8S92rJ9hF25%2FwxaU75rUyzfxipEuxc8we8DNKMymfddoljSGcRVYEy%2BJXe8x94dqHJ%2B%2BZ5XmVpcnSnSdABLjZAIbkWYqWfv%2B3vCcdbBsfMo%2F8olWZCX2axszrsEt%2BuF1p6oqvK8hvUshSq5ed%2B5sEbV08glo3u5e8BXbbt%2FAwQeZDHxnZSyV4BH2%2F%2B04Dk0WJKDtT%2BtJ%2FLZqDVEc6IsbeqBsgbnP2entZQRHOPhNGIvcW8MUBBqNwBQL7kIkPGIrGdLQ1xI%2Fu%2Fon2pdVOqC6GQrjV2hEbD45OisKC3qa83MoQlgMO%2B3j8IGOqUB0Q%2B7IE75X0c%2BF2ikqPvxVApr1ITz%2FXLwbQT29PpaokpjxfgbmodQj6Djdz3N7zhJJ%2BEIA2UcXE%2F%2BblaKeQM9%2Bpz69hk%2FiCbvD7wR6dhz%2BIXgPtyzDjdJYU4KPyOyTAtyTS34DKALkU9R%2B%2FHMuKhA7oFJrSn8bBvQtsDfOorBL3u5TWrJjBv2vYr3Nss18EpPZMzjDePHv1CZul3P5ENQjBo59V6F&X-Amz-Signature=eb6549a3405f097c3b946015b482d3999f4a7de14f0cea046943b2bb9cac8db6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
