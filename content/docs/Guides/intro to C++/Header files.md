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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53TF4UG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFyT8OA6Ntp6%2BFzCRl9O%2FORg%2FbXlf3PgSmd6fSczkGsNAiEA1b0fpSj9Ni5mqQUfKkmrOMMBYAeZTTti2s1kiuZvgaIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDG6mo8rK15rCTFkFnSrcA64LO2HuU8zMMJGrJ%2B4wOYdet5f57Z1xBVa2wNmNa%2F7yixDif7sZ7CIQQpH8lEYphqDz9c%2BVSvPiH0dmjE3mO8vFz1VzYjnEarieK202N50fTwKu3%2B6zrbNG%2Fuzp%2FIO8n%2Bw4dxuK5zk1ADPKqDFR5q4TM0MKSZkpO%2FoTiYkNsGRL8XmSREnO4Aq0%2FMCMXtoRNqDFZaKe5k15hoJL6l6zZxaa5TPvG3xaopmBkZ%2FeuXyXKCi9qQc7F9eCbGx9lqX8ZsJ5QFdCId4ijeco7aRUhHyJx0Bz4waeuqgmEOMCzfcV9oyRrVb4Trzd%2BYd5LzF9rvuUMygQInKVYLwNVlJ0egWaoBeavjRZ8zEdToFQBJV8RoiGT%2FckqGqcMUgkRju8OU2bOKTURpMwMFUwx%2Fa%2Bh7ka%2BBtlyJHUmg%2BDy%2BV9ZX9nO4B8t7SG2o%2FFy5kAspoNr89%2B%2Fxu8obLsQPcy%2FJyy7jaRlposj1aTP1y8XyM1l6D73muGUlWcdCBeMdoYGEv%2F%2F01HIgeZwZKTe5yaAN5HrWE98HeNK7OOC4ks16THQE18MkYInq239w9co2AUGU8ysPDwHa0z3V%2FlJs52Ys3tDBsZmJCg4A5WQMTrW6SlOGCyrrGiVW2JRUoV5GwEML%2BR3cAGOqUB5FNdOSfZ%2BYeWfhJmWwm2a2LzJcqKK4xQtcGdxry76EP%2FLJrVGIID5HHivS4bhYAgEKEkKQxjWq0iewAKKGlObtCasz2HXR%2BlVvUqTO8mtkBGnQexlMpzENgKXYgPKFIW7fC1H3yNrfKA9K0geLeX%2FPTO%2Bgimkh3cb%2Fd4npRoP60KLADvV8IPLjcSRbu%2BB%2B7MHwoD4q%2Fr6A96ms0SdOp5b%2B7RP5f4&X-Amz-Signature=112440e721a23b51ab23de6fdec993624596463307dafa000e83c2c7da55cac2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
