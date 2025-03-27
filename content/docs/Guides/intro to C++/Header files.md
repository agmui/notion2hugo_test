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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPICTKOO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDd0oAnbHefJfsIxthqwZCpjahBzkZv45svXIwEK3qaAIgNfkzjRBVtGEhxaW369M0fZviak026L3NqQ9YFOb4UvUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAzcmDHoq0rf7RXVVyrcA5Ga2G0yEb8iBGaaJ7IvrRxljjXyoOfPSXJMlpT1SsBBH22y2DqbPi1ydHwIdjryhL62z8%2FNq3L4Ie1Jqk8YHUlHzk07r1DLcUREgm4cUSi6%2BNVmseN3C5goPmpcXJkmHytzh%2B%2B7Tq3sYRAj2fg4uQL%2FxtrNPmFBpEm1Et77ZTlZsBTxG1fBwJklB338eLxzqn3Qy4XNY4mAyNDOhCaVog%2BNlazgtTC1X%2FRfOaFlgcFNRNgE10eemudOKpWNcGfkXIIcjLRLK14HunLwfhXrn14VrZd3ceRbIjoOXFyKEytXs%2BrUX80VmKCPbT3Y6I%2BrXoMYARKjThwWtUjEhB%2FaIzvO0MHn0nBH7XfEz1Ax6PULljlTEZpLC%2BO30K3YSN2SaPAUftcvIKNhFA04u3dwz0fM7539559OhVNF7P4XDxX3OYUnSlKJgt%2Fc%2Bb7hQ4NHSLAiAcDdo0nj%2FJ73jaBCeuVuFT9rtv0VMKQEWrEznWgw1xOiE52iXHnPSTufF5nSs2jpCSyHCIDTza8rC9b1%2BHCevVBT3kr4hvMgNrelTRGpfanBIVgSeQ1lrv4eJ4yl4DxntCLrH8yDd5Ob59EadEdL3V2QtRldUbO4MUlgA4p13hXfRhHrHQbbnychMNmxlb8GOqUBdJmk%2BmlwGdIVkFG27c2bcG1pT6pE%2BIuIMu3KAE%2FI5%2Bm%2FuoUnifnAurfAwVYUm%2Bvt7uVZqGdz%2FJKIiuYXN1Rl1JM8yIpm%2BZbT32G2xxffwKIs2%2FjzPCWQ2QfrM9DLQy8AzvFS8bVK24MmkN9Imo8uJwJ8l2h%2Fa0RTQRl6kEYUEcQOVF43wRh%2Fl3ZIQdm80dQReto47ywqQ%2B%2BSYNKaiTf%2FW6d8UGKm&X-Amz-Signature=1e57053938eaf48a0baaa3bb76753af67876a94f1ae2a90f2b274d8ef26b9ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
