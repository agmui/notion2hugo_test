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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O3C3KHY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDj%2BgecyRXZZ0hk3%2BYzok0%2FhUuoYNWuzSd6ITiHDYjtAiB6wHqLanbBy%2FWxUm8XFz%2F5Cn%2F508TrsDhiI4IYcknljyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM6RdfoI4Lh5mlqDIIKtwD%2BNW6W%2BY4zSSdQb10GxjuqQFph2bE%2FmL4I%2F%2BuDlHPzxh0%2FHwK8p%2Bz%2FcuLIyirrSfooHIj%2FoZWuLs2zKh3OBVskmZ0qfvFFB%2FDHXx3FVPtc%2FVFwOQnmZkd0vtLvZ54K3g76PUdXhg189i4NGcBAdiijClOCXSRh%2BA%2Bb8A0PI0xO2jlWiIVGSL%2Bh89kmCMnVPFKWzcpJy6EX%2BYltOKPm9mO9NSP%2BVthrKnDYFNoH72qAFNfPscsvtutdb08%2B%2FyldtrukPJMq9ee8rf9%2BUAkhIonXt%2BuuR8c1HtwErG5zCElFw8LG5V0%2FNXlOjohwv14rygj9pXLJVaR0pYpA%2FSRbwLdDE4EJMZWCi4jWH8N658gibfbzgKzq0dH0V5yAQP%2BDxSkMCvXyZ%2FJlkRC%2B0Lbl91kW56PfxRjfV9ielSzDjB8N2EUIflluAIanE45swvTItJh7HePg1kHkDpiEA53RdNcEefWRjIDXZRXo2QPEynD2oTmrDmgYD%2BqtHt77LO1ha5eIkD%2BTjg%2FSjuZUhvE05ZpGBnLO3DoaqbgKwOFiZpdHKbOowMRoXQonc8QBoCAHe0S2ytPHHK532x2ls8Us8xi81BPxy%2BbR%2FJutv1RrSeG4mrruVZiMiWBVO%2F%2FOVIw94ugvgY6pgE7sQpk6S60fLXwU2QeMEWnctG51sAnz7c%2Fc%2FJI1xe%2BjHyWmnXlsw41DJVI6vIP4%2BTH5peLy7n7gPlvHt7Ngy%2BtVB93pUZkqMqpE%2F7KoC0L%2FyYbSlaX18Mf2K3CApLJhyOqQ31jcii5uZipD8I1Y9KhF7SR8LBieHc5%2BY1S%2FDnkf1bE8AY3CYkozXPvcppT6opIavNHGLLXuTAPFCkyR7rDpHQph8Kv&X-Amz-Signature=d45048eb93b9b1bf21f21a5e15d463dc2f37f9387f529f8327eeb17e74ce946c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
