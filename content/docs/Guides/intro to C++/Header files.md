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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMIHMCI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjF%2FgXs9ZstW%2BhN30E0KggUj6RH1IkuzL0l4lXZ7j1MAiEAlo655mpzgFl2zj4batkiUJbkEB6cQvP2%2FAu4Q%2B3ud4gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuKsxZ09Vzxr0vsJCrcA9ZAcioDF35FSp6Ds4OxRZ6j%2F38GH73Bv7h32Yw743Q0ISpuIbtNQSXvATB5VwfQ1rKhFS%2BQlrgVJsmaeNFZBl1jwq2zOHH6KQj5lJtuxCmLkdKp847EKdXn5bPPtVHhuOPS1W08BCF3MeL5FFRZ8DNoSMzlo8MSSP1DzwxRzWrvwHR9ZA%2Fc5%2B69bbx5%2Bgxvhv3UU55Tpv97I3Z0RY9JSjmRnajXWmd2ZKEWktnjsiyE5MUG3pF5RHNompD%2BGK4o6q5D8vk6GUaxPFvolUvPgBthwxP7kqWCBjPb5T9XOeZKxAb2yIhdSfb8zQkcuHhRFYWvCfynjKv0GAidE2fr%2FLv3fFcx1RrJ9Rb3XIG0GT6mEojR9yI93Y7KCSRWZjv5Rs%2FZJ2x9e%2BCUrwKTa1RoWpqBTJ8gtVtC0pcSIZZ4RBplLVj845vF06gJPKl7lTQ93GESuQQcNEh%2FXbDNZO08fcgb4E5jZuxq8xB9i8Hd%2FuHHy2icGZQDKlxxeEVeaaUVNK%2FHTRo33mwJmTmnxdI3Eqs%2FwytIAGF1OKF6WoGBlF4GTm70eHk7aJPQmDi50usdAcxkjfHyJVRKTeoD7aQ49D8L3lwh6LwzEjsaVBG%2FT04nNtfNb3odedSyECwZMJqO3r0GOqUB7BtKoAWyAzB%2BYUvLBXS%2Bv88tHovuktEp%2BiC%2B7rLKqfku3epnDSqaicQC1U1aGn9lyzxAeCG7K5et1tbipbrWPTVIyEI0fpLRkW%2F3KBiO5zBdAy9sYewAfIUMpcDHcMKHZoUGsACyIjW9RtPOz8M%2BbaVh0FSoAJChmXj06uAm0jveA3OO41YCON02UWTrRSEfD4A89xOprAedFy%2BMAO%2FoLbRnZb6Y&X-Amz-Signature=2a998bedc3ae425304edd4b523f280d24a6355c26a475fc427ccd20790ec12f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
