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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6AFIYB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC62fNabkkiG9%2BewUgkc2EkvN2%2FC35Ay26rK9sx0TmNlQIgVTG%2B9eQOINtL5Woej9Nl33sf81jtgNdiQ290MSl2JIgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9kh0g1jEqC9GikSyrcAwfmc%2B43uZM8vEDJjEjE8Q0ugciy3Rp%2F6ifdqoI94aEdO3DPNKRS4GhktHvt%2FQ0QbZJXu8AS3HTdhbldzXGsLfFtUm32nDo1yOP3gAW3YW%2BIjgfUBpYrV1XmixyMyuxmhSwAEhatFLMhKD416Ho38se%2BgErHV7fj2nAlUZGweK4Dt%2B4sm4l%2FJHBox397vfCaFaaYD9L72gZzL%2BJGlo9TeFUGnao%2FW79sSwwpNCljkBmYQ%2B0tyjQfKEsr41a%2FFijLYyUNCpE4hPmxV%2F8UBNO%2BDRAj610mXo1JA4umjlNmtco%2FeE1Hp2LNn0%2FmNi8UlWSP0M7oTJQkzuQpDukUZvXy6gsmDViBVHIRNo12B3oz87egiOA7VFCq72wHWR4%2FRT1vfT%2BsTUqFLapJsR1Q%2B9Zi81KGUKHY1iPMijRVTQxz1%2Fwz75qh4MiOeD9iUmfDsOECVE9k0kUk0OdBAy9zUnoHjmPooZEXBhAOqB%2Bbu%2BVtqAoUZqLC2oNnWXZw3Ft9yNYq14onnTmQSiOgx1IAEnansRZQU8mcskcHJpK4JRhvnuJFt%2FHuHoFjWj1R5R6eaTDQevXVw0NNekYT8tG99JJqXPQ2kAJgl2%2FS3urA815UJjxnKrQb7J5eGjPIiSqYMLzVrL8GOqUB0i%2Baq0cQ4a9BU5KkiiRrTDSJH36IBfqcdisuNwU11s5MSAnCcZNU7U8vmhOWHyATkV4aOK5%2B9gkE1WSy4hdIsJDwjsJnbzNJXXdX%2FrMHqBNAduccBtrcdQDM38d4wFYeNPLEGKrSzu3ta%2F55%2BJC6qiNR4ZMBOvWKp1mdD0gkU1aVaLNfNlmrENTMwyVzCCcaIpSb1m24F9AxA8gJZTWB%2FEAa1y29&X-Amz-Signature=fc81d6da187ca4b77415dd9bbc3b2616f5542c83fb266e5db699d17b0ec3208a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
