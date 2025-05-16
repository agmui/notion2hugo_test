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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAODTEL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmHvjLpoFr%2FqVJKMWbRnp2cQ802fZ14UnjH3h7hEeJUAiBoUnAgOQo631QUMUXJYPsopI4cA%2FZlk34TcFIhxckKTir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMQscOBBq18cUmAJlpKtwDLh7dONR041VDuxTRK%2BVNRN%2BN2vv9xW0qmqMXI5JB0KVWNJm7PvaWI83%2BELZQ0XeY0srBudqJW2uzOBUIQrpywWpUEjH843leeBd6%2BbQn%2FTKWVfUNjwjM9asQJUMWIqx0vg1yrLCnntPlgh59N2fRnEm9AdJIGCYoJSo%2Fyge4B%2B7cRnA12t3cRBq6Cga10wvNbxzCIDrsXLfdxIlEjCCeaf8E7a0sJmbEsMn8iEJqlBNEEtJ0UkTThyvQ11ybpwctnSbaBNUr9ch8ypiHJ%2BwKWhjV6MnA%2FKemIDMqVIH2OM1uBBKiCdRVjSWAK8AGICejFkMMfb8j%2FbZPpOvz5CImjZrE93juLS8fW5QFNfxAbgZS5bhLd6AH402nM7GpsAXGm%2BZS8k2RkET4zbQqQvz%2FbaihQAPOxpl66C6kjrauHtues1PhvVLc86Jicxta1jRgqxCGFUYyP%2FGkSlZ%2FY73U0fmcM%2B1Q46r0abqmhcGNKOEkFg5Bgn0OgG8szAeOMzSE0Aiwh%2FrJdFgTJBi9X9I6n%2FxdZoVi75nB3TEKvHCkbbPKlxUrCEJJI8fd3LHr84PmKFqv8XuQElCOQu3%2B8xiztCMyRWaMFE9jOhkkGR3SOmZCbjZTzwdnxwlG6Xgw8O2bwQY6pgHlzuI9n0sPMne%2Bp9L7I5qs%2FSvBUrm6vAMrFmdhpGnqRNYvSfu%2Fc78mJep7DCj0%2Fhc0rtSqYvG2vv%2B3y%2B83qKWXfrbaN%2FcIw%2BmnNhi%2BWGEjrOEd4tXlR1m6sSO2aif4T8bh%2FSUpXUI2yyd85W5GtyxAnpvWjiky4NS%2F7CZxyvvKFFi74YtKAAeFfpDngpwePRYxESbjmXJjSeQxRk93ELjXK%2BwJ9fJ4&X-Amz-Signature=098166a0e63d231c813ceb69660429ef6128c62a852c4b78d733c8b2fff01cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
