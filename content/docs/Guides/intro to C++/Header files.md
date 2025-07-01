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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T43C2JJW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkF6am1Fe8%2FjEHkhi8ZJZWdq033Vhpq66uc%2FjrR2xsyQIgYoxsmXNWTDW2LY7xRep1D0X25D4Uel9Nf8Enj9GQVEAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJyNONHRTABwInfEircAzNW2qQZ1TRZB2I3GrFulkj1F04hBhQott8DBkQiwdqcFoqXfRUsukBZxqmH4jj7FRjNkNOJ2ssvlRqNRBxXXByAuUbS94Wl8j4zxDqRCRjX6%2B15hdZaO58INaBpOa8y5fm2h%2Fns9sjofg8Ed65NVLoTqM0lUN6coiulObi8pKBUBGtjNMAuSZJ2XGdA2PAczelizRvd2CYTjFyDLhVJhgsRDUoNPXWZT5O8Y8rxfjmz8AtEaHZlbVP8yXZ5zspkOFHlJEVxuNGRakINi1GdpUlCofNDS45Trk%2FcnwRUxyYakAx5%2FGST%2Bz8%2FTPoddGjnmCeKGvp1VZpYNNA53iXVJkOoC8PrxRUSDOF87HWv%2F2blxc8naRkOFIKSnCjFcf5KqmL4pKXGN%2B%2B357cw3MFyOs%2FaXSdC4bZrckjhZHplKJksNzyFSYHXRCx3tbSvdDhRp2zCKvc8TMpEAedrepm8VeBbWINDcJF8%2FKBcYBPZ2LaReSIx7bQIrQhqvFb7Sg14Dh84rwbMZuaGXSukUFEgpZYHZRNUXGO5Ww9klDqjalgBP49U5BddmFaw79E%2FViX%2BWULHtjzzU9BF35oGyAMHTBy5d1DBIhNMoYXb0PsTZeT8fTC2l3RK595OCDwHMLKrjsMGOqUBqsTCO6f7YXLkRyn9gYB5DdBPa2KK99LGja18hexSzGkBzUSJ34LGiL76SGrMB%2Fj5UMxIXHNNdu6fhNMGwRfmoBV%2BdpDtIyC8lVFFIUlBhdzZdJipii5%2FcZylKAVUN20IddB39vCiregtrHj6hmfKMAECy%2FjRK28kW8%2FWYCL3wK0S2K26iRtIe%2BEenJQ4yIoKEbIJF%2FYw43GwjUZ8OWzDK7LQx%2B26&X-Amz-Signature=64fa70b3f57f3a3fe22632cb686764ed21cf46da71c7036b678df51793ded909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
