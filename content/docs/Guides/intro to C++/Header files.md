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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQY2HR6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpnENHMfieNhrcaltd6PoUjpZ2xSA4gvpIE9gjjKvn9AiB7kuAk6plO5topZc33sW%2FdjMgqjoYTcMCix6QT9aGmsir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMvJRBrt3YXOL7ZXd1KtwD1hYmuYIbCR35Avf9kw0nqFTKrC2RD20xbUb4PTkl4HiZdtC9S1iZf2zACL7Q7DkUdIgNg2xt7%2FvtZ3lFofFeooSwKxBsu%2FmUQ%2FF3ejuDaMtm0WsULhDCRI7ueSVJm7EAG8wIiTRDVo8Z1MNGCGrpBY6teG7Tw5EXUbyQUPyp5pG%2FlXB9qrICBsW7%2BogCIm6fkbXg9QkvRrTAO%2Fk3%2BZA%2FAVI5YomihxzBLKk51bcAiawheRt2DfQvw6lFH%2FuV6WLdEBVFoAY93GN51hdlYzL1GpBy9%2BD3D9S8neUQf%2Ftpr8jG5gUTLGMZsLyD%2BRM26rnmgE%2BmitYgSSEdNUxlYvxW2mqItFJ5o1GxU0PxaX3PdhHhb0jypvHpBuPMxrCmAATJ2rvDCMzJXO4%2BIcb8KocoysY87vrI0FTr1H%2ByGjMngL8DCv6B%2B6OCgiXuWKJAZ1wLk7xcU5l6m0X0G%2FgM3CR0tXu%2FiRksuX2wXMUZFCwJf6oOzJze54sFm44nM6tO6pCf%2FUd4SvBWAydkiHlofGMu2hWwuEa0sy%2BXtGnOU0ln9zqfND1z%2Bd847cGs%2FwaPo%2BA1eJm0WPSmiGSBM1Dz%2B6htJbjBcwbDTs0ovG%2FfxhzwO%2FRrKigkS0Lg3Al9ps0wtI7XvgY6pgGnu4fK2wifgu57kxm2%2F%2BQFzH8g1ZG7RShRvDQUv0lWwOB8fWYtrcNyBKXFhtVUnsQ4%2FyvUjUbWvuPKrqrjVXmksm4vMoAhBH7h1ZePj3afYkDwRJfn1Nhsdj1STaq%2FLlCc6JFcsINJSIzd19CjtRieVyc2MpB8Dk54LkrlUYAefJ3%2BT2aLjblOddX4syG9QdinLVLDidloWrNhGMTcvryjGpcHE5nE&X-Amz-Signature=cc8f4f7412117bbbf53cbdbcd5475b33c1d81da04580419b4b20605c301aeb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
