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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFS7SYN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDOlMC0%2BlWgzXlrjci%2Fm%2BK4MFGdmqbSArClHzpvq3Iv2AiEA%2BytZz8S0oRwoxFNZN43pONU%2BSaw46J8So5cVUmVX9lAqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2LrSEzlzaGy5SjbCrcA0DmYeMZrsmbaBr%2Bct4oTbLfC%2BemaMfpENqJgq8Dw5rUIVIwqrisOendJ9pl8BwVJc8E8g1aHv2AYZXOGMw7q1ALwlOES0KbxxIM5YScDjcvtZJheOmFaqVE3l1QXBVHbavgBSAotvAM6fPD3KRFUZ8Ar389caR%2Fx3L3auhqo6o%2FW3ASM73E1GAQskUGkMgN1lBxw4djZdOuKpsQUgIEPDlxzXjNwkyf0%2FCiiGTgPmqPo23QH7wbKsKkXbfeJC8qRJJTTDlHrwRLJ7lYPeOwrYS1u%2Bjy8%2FHzKSpS4AtKP8jBVflLGiu7C9YallE2AMHrxb1SSyypKyG1EUwhHRb%2BntvhV9ZFSISceyCG2DxEk8OkZgS2GHrN4cVXkLoh9Qg05JYf74SBhJTI1AKPGkVX4mFFTy%2FR%2BLaWks72OYh4XaDkvwtn7EQY1nKYnyhhMULhvDa%2Bc5LS2ulUp2DKYo8pd2Y%2Fc3JoqSduR9cIIMpxE7gwKXPGNwj6wi5L1CDLVd3x1hFjFCIigekfTVuMtzPQ%2B1C%2BNufq8WeNjSZTZF5RWMjkbK%2BXpDX%2BVrxaLrk%2B5JZnVlQOw6hfUr59zuDCjVwXRzJrPryUuJgQNWddof0jmmPjKiVmheJY%2BxxnFqrNMKbMkMAGOqUBfxw2nmmXgfwt5I%2FgRf4svlmWfE41%2FJKB6R9WTUPorQwK1bdOyYlSiKMSNfM%2BSfDof43fXG0rAKv8ly%2F8EdY9nFePMK7DjPu6QhBCUbcQzNDSed5%2F6c%2BQdlb7hRFzgq2%2BS6WZfVyrHopa1q%2BLCvDBM4TJ50jbTmv%2FKBun4ooxUF0INj3G1rvmSsJDDweHX%2BzU73EhGYL3F0FGuFgXlW%2Br3B6oAPqy&X-Amz-Signature=9253b24ba12e84b71d6ce4af25e3bbcd3b2c3a40c9596062262cc63cacede541&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
