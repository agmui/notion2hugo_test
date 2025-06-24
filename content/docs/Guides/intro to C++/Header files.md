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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXEY2Z4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJFMEMCHyPnMrHBCIivpI8iEnTadAhmUNWyqw12K%2BMvNJ5y8X4CIAHGXLB3hzmQiswshJPiPFrNOgZAgRGmdam%2F9k0QL5G8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgzChdYXiHrYeSLU%2B0wq3AOaVLQk2nzHAg5kmr9N75YQFe5gqOr2lREYdkamGbZ9b5ZFN7gvzDQXmOPSRDXBGBXO9qzrC3HC4Zua7%2BYURx1sDmLODMiR5%2BBnrpIPAe4wGIXMBmrLjZHa21bKACdce99%2FsnG7PQ88u6E7QVgIZmdfKeAouKxXRXi1WUH%2FjtjOKlk%2BL2LQLmgBjA3ShN%2BZiGVuJd0Hak%2B4oI5DxExnTcqeDFhtme%2Fe7fvP8UQ4eFsU5e4cWRaWh3yuluFnPxMp%2FmVZTlWhI9WOL%2BnZeDDsezMIRbv65S%2BmN0rr%2BY1%2FzOWjjJ29XqJXMnXj3tYaY1by%2Fn3PcoPqKDoCkky7ZVFkbNa%2BiUbmbf2ybniOGr2nerbVinUag58bQZA%2BcSSk%2FGO41QZmIqGAbRTAerSPEId6uq5Xb5e2zP%2BUOFAOFJDVGQ9GOdtLemYPiv4PGjf1%2B6QAtjYl7Jcwfoh7NlTV%2BiTu873vqohotVtghJYv0MrqRlQAonc0gQb4qIVpJr21nlIRQu%2B2TT9xrFGrogbcpjyC%2FDna9CppHYuF8BSP2vk3cLMXbJxecbBXDKq0oCaIaXIisds3ziqX4zLlX6Lg3RZcX60XY3CTysSgK2WNzisOBvkDd8PdRsPWYaQxWlOSpDC5uOzCBjqnAeyFerLNm%2FAKJ2rKgupX3a0J46H1IvpAX1QyAaOa%2FQKulsvPx%2FiK3mVhqpGNNJJ66L%2FrCELdL0VuVyZdySkTIcZiXhnenKBhDXC4tF2CsxI%2FUldXou9SL5YkXyItiTiAZgvlQfaHvnq1L7JBP59HDV7cyR48qUcr%2F2WxMIxy%2BQ9rW7zTEN%2FVWzPHuja1bWJNh4ZF88pM2Zdbd%2BvE2g51RM2DtRIx6gsO&X-Amz-Signature=3998389a4d4bb25d47a6dadc85e0f99f295b9f8b4f4817bc484b845d3f2e63ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
