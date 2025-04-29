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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAEJ2WXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4%2FyH33TFam83vVfaWkD3TN2Uchao58Y4GctyTW87%2FYAiAsxzdb2Eg3Qhr9jH092zrKUTMvMLJChueJwmUaY7ujTiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXrBhi04dTxY0c6eXKtwDj0%2BU9nfnyZjX3DRcSgTuIa4iP7%2FxEaKXAIl0QtzAzBNlNQ5MRsoEtf8aCRn18KRlAz5TuOlsdavqvUi0tWkx37F5ZdAG5BDEFP9shIX%2Bqi4lAAIQONlY4shyyyvpRzOCdFdTuHXYfjFNx2Q4N4QLUljEyfW%2BnV%2FSWUshiF3cTr9V1pzEbS4d5Pg%2FO24PBwEdSU9iscG%2F188qznpr6Hoza4s8%2FpG14Fx6D3n%2FqHeBSdjJjoYLZ1qO7XCyiLIb4VeM0QIood27pe7PJjLw6czA1s0%2BnC5atDQ4kvImqfg1JI3Cj5owJMX6Tp5Tft1C76lb01oDXLp9vdNzZfv1eFIyAlLaNIHARmVXc%2BtI0yOESwiiSPh2cNoAZSIUeX4p56nzjT3yOtMNWDaW2g0vf7L%2F6WcDUmcyrHkW%2FSx%2FbPxdf%2BX3KiETPOD%2BEpWWdRyRba6O1dz1svtRFJHW8%2BEsrz%2FKlAPKwh7Xu9PtdoU5CnfILbw0zkjsPCBJ6qfBhxZtXZAQrFSRjjOniWpRUFOAuUo5vk8wlQahUdg%2BmvF%2BZ6j0co7bvNoPkOqduzouDqtHKVhZvQCrb0P2xWNL4l98R4B5sWX%2BC8LFhSTHHlFu15LSQ9eHwe6Pw%2FH32ELrLa4wrvzCwAY6pgFZJT3MPacntXq4stidbxEbKRv5lZyaPcg8YdZwtFO9B5ruvQ%2BWmXI%2FNIymK8YW3yKqHFjcejxJ1jYUmjfkm%2Bq6S4hXYi2WLFipYMSLwCiRMDHyHrm7anm0S9SF9jdVeFQDRWXC8cut328p2vtlS612XvUF8i7%2B9lJevKzJ6coU%2B98qjLCVLLBohY2TTYBhN5%2FQ4dE5f5j4xFS7UjWuyDsMZqy60XLx&X-Amz-Signature=57a3a501fadd2013b279d6bc44826b484a6e6693d4d90beb9a5942e0d0e1a507&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
