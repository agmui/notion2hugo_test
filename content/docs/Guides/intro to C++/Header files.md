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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAVXF2X7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8U%2FZHpQyn5YA6Xj%2BW5GnLN6fYtGquC8YEIa%2FIRSXUjAiBTN5cT6uPDEjEYuWbiIJTdO0Bvn3O5CJUk9rSgUTYYeiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh60pb%2B16p5Yq0zRfKtwD0QjAmdDEJFXoZFlkEGPoVYCHez4oIlwCgoMBkThsuRLjhLdFdrs5EoKw6Wj%2FKJPB16Z%2BP7YQ9SkIn5weW8Hjz%2BfA2GWkjlBz4X1dM7viDfOw5o3%2Bx%2B07EganNKyNehTFxmDU%2FC6%2B3lZJ3MqAJr95KOgH9Iek6v5z7cufUfCwSkTobyziEWvd5aJwsyLbT3YGhBqvL9l1F4LVYz9dmw0KEInEM3atWlQ%2BLirF%2BphqkwPR0bituARspcwluyGhqI3DqrekoZpargylhckOhWYGIWnqd2ScnVeD1YI%2F%2BKNYcOEQtutXIvSOnKL%2F1Ry5os9JbgYoy9DR%2BHA0Rj%2Fa8gOKzb93URM1n6f1yqaDjvDsLsYgVZlXfVVHkSar8ySQk2uB4ucQBU65sN7KIfwYd9%2FUqVoSc0BRQ17hfKb25gVvs5LEpODdQNvY4NiN5RTN2izTZnQJAF6%2BblHhsX0m4lGOM%2Bg8vI80%2BbxultWaV91tH7b8BlB%2BecFTYO9FSsBBahnrEqbvsCi2HMqbRgpYSH5GvFP0sQmOEtrN4j2QELJ9tsLyjc9%2F7m%2BDiYc554fqORomrSMXOP1djlcirJ2Gg46aRppwbJ%2FOrL44z2Fo35bmeqeuCp4Ew3wfLe22xRkw86WmwgY6pgERrU2VU5Vob%2FH%2BUZseR%2BAm3BfZ2xhMefy1C9JwI7J7Lrs9jRSBtr4d9kzoZ7Eh2s5rbnbzCYnNBr%2F13kfZc0DGY5qPCmLDHU8iSWiymZBGjD3Na1uc0t4EJO09U2v36eU90fGqc2msU%2BKu0CAMr6O6huXkg6D9NVLsDosxkLaeYEuNT3Xh8DYKrVrGMnjvm%2FFxxgoGxLA6jpLNNman0qMyphDQfAnh&X-Amz-Signature=b443ac664e193e097c7f704bcacd3771ecec94641db2c154a424c668f149910b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
