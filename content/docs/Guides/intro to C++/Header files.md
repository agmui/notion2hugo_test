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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJCE64D%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHyd4tG9OY2guCbGEx3iin10M1NnGE9gbp7sOmJJR2EvAiEA02fFxrbVZ90%2Fan0rgn4hUexjv0henc5Pa0CauPGQNeYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDJA1ilvbf8k2oJe0MCrcAwtFKsAj0t9mBv0%2BwePu9EoRUhQMOWUc6pG8sGuL7wUu7JzNLheCeCNW1N40ed0UR3d23bY96%2FQxfnj2AlNiKHlrqERnHbVzhrwaypkwOdr0caoqeozMvCycLHVV%2FJ%2BBy07%2FQYT8MfMDFw%2FTNxs%2F7QjnIKNrMpNYIA0wYEJH7Di%2Fub95AHlnw%2B6pB2hIrACXVApa3q0V8BxEjVopBkHwyyjB5xAFBS0RbWtt2FOobnxaquvlw%2FE6WM40LSocy5TyNaCEO7cdq7lZGUaVWwwfhOAK8%2BjRDPf4prrztRqDYXt7mSb4BcnhHBISnh99sm%2Fq5UJKAd6evMdDpu%2FrtcnHmOIseW5N80%2BIfo5X5uBhqcWCl%2Bu4ZJzCEeCuUbpgKQgKZYEJLrm%2FlEfSLkjooBCBPrbI32qisM%2BQemYRkfMpkrQoQR2%2BWsTqmUQgwHFxrGhKbccik5BWx0Ruqkc%2BHNHaIPSDs%2FPq%2BPJ2rW%2FGwE20XoAouL0LQ%2F9zpGdMAgr2TKVCrKnhibBlYAlpNJZLl3Z3ca1DNAvY%2Bjj4DAIQj7UyO6Nb%2FAg27YZ1EeEsPn3x%2F6OcfU42XZy5ZDIgVhPKe8wEMZbrYJXJjABC%2FbrQ1xqXnmDdkXrCxq2u15BoO%2FcbMK%2F%2Brb4GOqUB0Dvn1zmv9RoVs1Mh8wTXarPLeWcggxKpp7a%2F9u8CGd05xAGr0UxSxipjFJeI%2FFsiCyqXrCFl2vC%2B3sYHlPxiY1zZ7Ji1sSujCeDfL0X490XpMwFYZ9Ogg%2BloUJ6hIEZUIQNNwOLard1tjsYSYx5YSGwG9ppMSFQna4pgkX3Cg2zvlQS5BUF44MzYz64Ta1i6oOqRTClxkYf2VixDcJnpBNB1Cpa7&X-Amz-Signature=b7a0c5a53b03518e655e2a7a950f4e7015fc6d89389077aee76bbdbc543982f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
