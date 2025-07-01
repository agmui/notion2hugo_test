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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOPE5BHZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCK52VA9W%2F%2FnHldKKjnbi8ENb%2BHbFCurDvtPTX3lOV6AiEAk%2F7GrLEYxXQpXUj%2Fua2ulFhsq9Uj67i4GYAldwQGPaUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXCGOAO6t1HLnJTxircA0gRh%2BoGcG05iPQQ2vlyicsaA2GsKMlWVoNtrjNAc2PsexLoIE09I3b65kBaEEqjsKamG86k4pe56SZkTEI9SNUU1S%2FugDFx%2BkCnKt1hzPsnw5VqC6MtzW2GIMNtZhD9%2BCHh4zjmVeHohaRj4hOgVVvFjdHVs5KAGvjkclo9pt2DWxm8IFmUQTCXnoPgAAskt4xVYFukn4x0%2Fdl12hSxV9OtU%2FklHrcPdFreRCcppehfa%2BQ%2FcCEjIPaQGjURgJreJs9JvcaQVb02CKgtciIjhUnB%2BYVGqQfvxYtjUowinDGnzbwBVHxOh3KJQR2tMNAwPuXvq%2FUpGHWmI4YGfOzu3STbJix0uiAbl9YuHaQ8BgfAhcOLADoFaOHwRY%2Fvy6EsBWh6iRLE73FZ7BA2oCvMoyEsK2kJiw%2FNdF7o5QT9DqO27gXSAd0OTsE0eXbBbuIigkRPFhrIJfTIWKoDb4awOOxjEysHzzObKVU0%2FTswBG5nzwqf0h9C6ObH4baqL7%2FwIeFtv2KCu3ydIlm6umXMbKWfg8Nkfbt6zf0iabCC%2BtQ9pZzu5Zx598wP4WKa%2BA3R4YxaffXbLh5awThyesn1sMEzd7mJmhuOYtsdnJhw6trC5ohmCouc3ZNYVUhGMOnLjcMGOqUBBI53XnYhERQhSHNy9FleXjy%2FSFpSa4o5I5ankYMQXeOSPeXqvGRtG7GfdxdLfShO30%2B653Rv9DTBlpwgmyhh5lO56LqmqX%2FoaZWdIiiP6HwQhKG2Epfo89OZgHld6ycKBRFdCGa6KWKVRv4XErYk%2F7bZnVepY7pEm7IJPpCRRjWnOicrzU6i9fQFKMUADuMmQ2O7dqIIY7XIk4JlFPCtTbZVePS1&X-Amz-Signature=69d5c49d0e33e9801a7cd389e8f4d4ebde5ac1f056c11a8cab51c00c9068d59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
