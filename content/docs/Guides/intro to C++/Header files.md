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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MPECAA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrr9sxfxrDyY84tlhlnTwOBuQDiW2MqhIb7pJTLHA6IgIhAI6R9qYUzPk%2FzDv3QBJdWVUUde0inClct9%2FYuUOMD3ZvKv8DCDYQABoMNjM3NDIzMTgzODA1IgyQt9hyMwVNZAEnMZIq3AOyiIcTnuHYITe7laP80VfO%2FKm%2F4fJEFJhiRHMpc8wpc9bHIOULfVa8W6oCYE8XWpcrZTAas6PUNUP7e69RKErAm5TZwQMekWRVKixd0iZjBzCzcNwlDTT1GSKLkxdvMlWLNwenZHCKohjqW%2BfiRmLCaNjLPldB%2Brwkfl1GdMEmLjaBk5qpr%2Bg3VxxoE5RPd4P6mkBKgbWsqgXLllbi7oVFnMOeTew%2BhQJuiv3er8ZHIZFr21nuY9A0bSmJf9BFKbUkyd7w9RS6fDc2vNjekCaDH%2BU05O1SMn%2Fnw%2FJbQOErr9emL19KWeiz77c86JJJtPGVEUn4Oxvrjg%2FPSKjqpL5tJltGgV%2BcbfWGiSwYHbbdUKplZLc%2F4ZIFuk%2BTczRazSCCVGTK4x6x%2F2O2dlMR8QS8sI4U4DTO1aFSBlcbPKqKZozt%2FIcHqfg9v7tBjQL7d9VoECh2wUwbSqeq%2B%2BJh%2FxoDsof%2BDmdguIIeQfjGFlNYxrY44rJZo9TWF9HOzTtD3EYkSTBMOV3YcPRpXp7dJNBej0EKhxjtOgWiKaG9QEQuIwjvOyI2UsnTfo5XuRmERFJ0WSG5kL9ElAbgB7T5PGK1iDMjcBaYw9KzpEJcrICwAIsHBMy1ZX26OxffDjCdzeTABjqkAXRbeQLT%2BnKYoL66YHckMxR2KqZpPXMFzzTdQGxutIM09Yx7IQxaBsiGoy21xQty3Jox%2FvcGxBkVodJI%2BH0YzlWO0KFQ33PVFEabxzzQNCIlWeacf8zUbXiYcStORkIVlixzf7Zz%2B%2BPMSVhwvckIBGnRc2f99gtTyReINATIU023LEXGuA8M7KApZFjpahith24mQYVXv3V8FnWsoARENv5Lrsgv&X-Amz-Signature=2d390ecbca8c894596cc1118d213c3519789f54c784f035e256c7171d9080386&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
