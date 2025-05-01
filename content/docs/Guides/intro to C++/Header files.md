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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4SHWIE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIEAkPq8UMgVrATnl0TtcOv%2FrFyka6uohRQOZ%2BVgV0f%2B2AiEAukl6orJEqdruFUXEtP%2F3rNKDV6BwA%2FKGEGPurSPgoowqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7tjO%2BTI%2BMxu1%2BBTyrcA5wChI577qGVU%2BvWI8MsSfEuLcdJ7fXgnffPvzXko6bAM6MFCQpk92iKVdiUj4UNuigNaPR9nIIHe2%2FV4OqXIMtQU8BrbtciiaK%2Fyo%2BOWjsFztnQUSIu%2FlJXMZJbv0u52XCG5iqRe%2Bes%2Bp6X3LECPTy%2FBveZYcVpPsHkFPcwc3go4JchMRUgVCedcI16uN0GlMLLAvnbFvI340%2FS6mwNBaiQ20YiuJwvXurr6tsGYY4Poz9ZVtY2okp2OY8hglx6n9b00iFXCYZj5d09EFzvfp%2FEeQVG9twfnZQLq%2FZRwirzEFNu1%2BjUsrYdjOugycUNEQWGq8IsKbu%2FfnKx1edM8EICLlYEb330wSNNrf2dqQHmf4m7fhmC%2BXzjIHlxp7uBBarid0oOEHBbzhIvFOX%2FVJmdrWxmX6ojbsXInnlCeLv%2B9pk0Oi59NQSHipcoCZRxuJ64poXKmOD1peabAl8%2Fbc7qzmOhDOmZn3WustPhnFxhGZVoH42Rtull6SPcnQqpBtD2NczSLvZWM%2FePrlVfEWKG9hwPlDlwmdTyq1u5PIs1CpAEX8jjizLSFMOJKH7YaQUrmzU956mJXoaYwsT%2FpQBdEfNwwdi49xEIndjQVc6WcWhqd2T4CuI%2BG8hBMNnpzMAGOqUBI%2BYBnAX%2BC5pM47%2B%2FZLRFA3NVMvpNj2uiUk6Q56vn7%2FYNzNPJLZnhvo0Q11H4BhxAuyH0YzWzpShjTt%2B5Q9ZFbsDWPO79uh3VKYnaY9WpGkEA4We6qHp6d7rB3BkcWIYCImboi0XDbERmR7SifMcXLY%2BC%2FnvQ6ZHefaM98UimL8BT3O5172y6p5a6e6LIxvPWf3N3%2FyIfQZ95vS6FKCyriIua4fpB&X-Amz-Signature=13ba914cb117938fab8b752c9b1783616c7241b6ec8cbb7d6591e60f274aa7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
