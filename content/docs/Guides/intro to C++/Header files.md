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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARETUPF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F4CFUjXxmTNWMm8cb5Y0DV8fnI2Q%2FK3qyZ%2FYrQbDOyAiEAj6%2BrBR8fII2X874fKflt93VQRrY%2BOj065rKY%2BJlSU34qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJn1niylfdsnAlO2yrcA%2BWnSKmOMz8HIUf%2BG%2B6o2U1hmmX4xKlz8pmblgdZQvmeXhYBdsWmEu0MWcvmn1%2FkiRw9cYfOF5PHxLebWOQS7ypgwwmIKivSJnyvCegc9cdiBfpsFSxgkk08%2FzF78ZOuKIh8ZKRE3q3IfS6u0rpgbfoasTkFEqOm66P%2FAnySjra5BH8M4%2Fxvm8TzIb4iqoOglLn8qkCXgrbk6iectg0dILMwFN7lZAAQRzGyVSXXOZk7RZiau6h5xzg7ubgUcFMOOxE10Gg1%2BOFQg%2BZsd6AAah3u%2FSlF0OlW6z0Usq5yCCTLcdBEnnrq5WsyWtCSDDFT6BSf0%2BmkN3iEZxRfqx7G%2BZRjTMsy6USPFTklAPpCWYcFcVP2Fp6mqKq4m6x1ZMc30O%2B4A7%2F46%2FmJnR%2FDbKfvY9PkpU9e1sbuBMjcL4mOxj98PglCgl6hO%2F46DU5cRfh3ivYbYRktEd3BuGk%2F3aK1B2UEBfs6L2bQ0ZDxFyhRIY%2B%2BBc63%2BOM0BflVMdyGCy7yajXmZ78YMDAILEoi6cy7H5zi%2Bx6FrgvXNq%2Bs%2FLQ4fLx74Z9Qo6qmAOYrLr6hkbu4qveKvM8nvzr67EvptqaxuHeGyd8XXiyqablp%2Frir34koI3kpEBnArGzndaZGMJCk1cIGOqUBvuMqt2IA3hsgANmu%2F7EDz4Ym0SngZj8%2Bl7pGza6OjYnOXH9UZNnxNlwHUAUJtf0ILsmaqiDDTyrruw3DL%2Fmy1r%2BSZZiGrL0JrEiZypk8knKQgcrCE71bqS7P8gd4vgl%2FA03z5mwz3ApI8oVjqtzlYp5oyXNzNYHdChcKwJ76rGBg1%2FiNWBWgEKFTBUEdFRXfoie3xXV2gJWKrzi25ZjEeVFBNibd&X-Amz-Signature=2ddd853362e3c7f82d322af308376d0d5d3648e455df978f22a947efad4e8105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
