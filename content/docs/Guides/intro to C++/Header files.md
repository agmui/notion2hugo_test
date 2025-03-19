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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSTCV2Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGpWwOf0aUCxvRqo1Y6DBjkNuEIADpRghUe77TS96p2cAiEA6%2FD1IKNqvCXrUPHF5A69xSjGvSH1ndM7OhSlo6HEHjIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDG8IKx7uglbmsR8bZyrcAxzMUZLfnAAGn03mNW4z4lcX%2BX45a%2BD7puRpu1YhmOh9WJhSOZa7zoTN71q%2FTufXzbhjPt5xncnrDMdrHKp1%2FO2ie54QqDX5AB2HgVkYGvD%2FCEoc17zLL9FuvAi6uvzIW6M5Qkm0zG1jqHSZ37HxE%2BFLIVOZNo11ogE0cVfFp9yDBnXDtS1krld8RblY9avdi6OJHyp7uxZc1nubG9t5dgOjlsWFYooB2SBJ3bedXxsMmBvHikP%2Frgqrs3VfBd9YNixd%2FtxL5k7cl14WDgyGtZJ1O%2Fau1DoxdD3qPBzQ6QbcIcXxdUbY47z5Ce9yde9LtFXZpZmkldFKAXFz%2FFmQaxoetokPdtJ0sCff9bGG6Cw%2F2ytn7unAJhbPyL0LsqQjT5%2BVrensYyWnMo0tvGgfv01GO79sMwkGI7IAGrRO7gv5gzGcagE3cGx0dUdgFzXqBzKHC%2BXBA9KPd5Ni2%2FRIQRqWrQLMuwCt2gwUiqsU2w3U3hAxobLA40NBuINxV3GLMOvBjfO2uigPFXTDrVUKRvKlBdFGCEJHshxej549vt99y9JZvyZ4zFhrfw%2FW5gsJ78hmr6C18IaIWfdN%2BkR1zqZjfxL%2BV8SgbNBTm8tBtPGWBbo2kQHYAI2V95tYMMq9674GOqUBIHBzgSOxDJyoLI9sQdb6rj%2B9pf00jTmUX9iFb6NfS0WRMkd%2BLBwWQekgkY3HBmvjeXQJ%2BAcZ0uvbJ0dP%2Bn4psSr0XUoKAT5PjUfVqTWSaX8uRQJIX0iOlxiwNmx41H9vgBbSw%2Bqs94rng4CLpthvRMvLKdapdmY9Pgs1T4SThCs0KkIKF3cX%2FOsErMu3o8gh6U2gOncSaKbYzsy%2FaL7OSynhsvhp&X-Amz-Signature=c53a56fa4ab42c460583f380da89239ec9c7db77e8149f2e55349a2ef19b1f21&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
