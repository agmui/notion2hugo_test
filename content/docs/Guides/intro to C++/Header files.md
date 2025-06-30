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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPSVRKOP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC170GXbh2Y1vQ9huFneK9tESso5f1LM6CGrQuvWOovTAIgGprwn3aq21naFi%2FBCegMFvWcyWZKNETr7mzb0CLM%2FrgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtek%2FehfUViU5qAsyrcAx1RnZHQA36klvO5YEUr87NVaqIRRhzZgHIbzn9TXMTfwP%2BzgvarkENO71wH9snXGuzrPW4QkKA76%2Bkt3jnPj0oWQ81ZqVn7iM1tQwuCv49SYR7TIRU9ZWilwqTiyGBkW0TyJnsjJWVOIzu4eEz%2FZ%2BMJ20kgRajsXEcopOA2UhRUe16KTcGBE10wnQSmdeO16dfYhmFXm89TSvPoytEpv13Rm0uVF%2BJjXg0DVvweIjcvysm66vO6nDQl5z2BX%2B0aXrqQ0RG%2BTH4Xnraey3MLd2phQsEJSU9Vkgj7AECxPpOvMm26C5ADuE0DULQHN4ZLMHvvkLTj2vPWziASCnE3%2BXr7whlC%2F5%2BTfJIEQi5hoK9nntVdFI78UdTaWW3Z5fWa3DglV6sPZyfGKrN%2Ffk%2FjURGSwcHIgZzu3RskMK5b7zs30zvTAX5HpRV0WXeIc6buJNGOvoyrLKgt5mSx%2FSQ%2FhE7fPmcuhs43RX9I7BGmPhMG0Hf337n%2FWvMgd4X1CfTt9NNX9VME0nnpyVi2gUSdReZcXYRtkijOUs0gNHn1RbreTifLBiXWdYKkoWFkzEw3lxNRz5UC7mZa5vpWCxcNileWL4Xss8sCa05nuq%2B9myVfcdGKEXbudWlmOSvhMNmiicMGOqUBxKGJxuj0Kk1lwtTtBQABEgV5K0k4Xs2aU0gO38xC7QcKLHODCEODl6ODVF9%2BBmkDwg8E2SLwSJ2VLYaJCzfzakjU6gxUBv6HBxEX1HH2RuymSwfVyL69fhvuNb6DYogVM8Jg%2BC83FTc0sXp799agxlMKXGaTToXE2det9rz%2F9MphvRFvMmsnL5brmFIIa300sdAtiGX7pHCElRPqmQogHW6jp44z&X-Amz-Signature=d7c7eaeabec2dd2e60a5207b55493aefae33b12ed3c6f50c2fc7071cc7dd9393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
