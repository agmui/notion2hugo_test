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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NHRYDO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0ofNSaPIKPJCVLe6sq1zr%2Bj%2FczK23Q7p8ZOlPPgTwYAIhAIUdns7NrqEkj7vmTfTnetgk%2F9SFDb8aFnLcTN8AcOkPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDmpKNn7zgk48P%2BtUq3AP19iXo2lJbpswvptki9h7iBrZ87KKeXQ%2Bt07cZPhZuBtm5cNcjnGT8QU4PsuAOHlgjjIlQdN4Z86x9aWx%2Bh9KIprbztGExMoIqO%2BE4t0JDdsfPkoAx2lgYooBf9ukVnPN4jF7LpBsy4ACQ3%2F8GYD3JZFR7xJQOuNACrHST6qzfDOUtg1vWSXDeNDphO4hcIJUwPt9IyF4y4lk0dHE5L1WOp4HQKNbGurFXOINLD%2BZDnDKuJnXinWNhef8y4ZKWwHgpPcLL1IwAVTScX2I89mEYc9ntEZnuaH6UFeFR9LMnbqqAJSZTmY%2FXmkMdG6XyIGetbUgogemOktx2rxUfzaN07rpbLGZws1taQJdGfRYGujVjwDd8W1HDH2uqZhmhyCw9mVdbd0iTnk%2BbW7d8QWnRGHH3DTNyUZ6JIJ8T81cgDQTk4RhAX0PCtaB2nKpf%2FSAEZgxULnq9IbEwGrSL0TDVcSdASaXwgdawYobkHxJHFDTcojV5Rg0FXr5cQ35saAmVie0suo3ww961qb72SEUxvIQTg8f0kaDynI5yf4j8jyj4BsRTgsYq9OwyBKRxaGiIYmxOSsDVHb0KF%2BMnhPEUdva%2BeXiS67vIZ9dKSFoM1KphOiLD4j8T8bNETDD3jdPCBjqkASIqPF6iqiMrVc1MOz278BUIFc74qIsSVMxBaOqeFpsPJptsRIh8iQhR%2Fq3Gkbmnr7wVLpMYYlcQgxM1OndeQFv%2B2%2FdUABnKGV0rhDqBMQSy7OlhaGUTacDkr56kSpNwgkuEoyO9V5vJo%2FylfzModE0FU19JZlt2OMsGYLhnTdP%2BZyS3i%2FxMQ0bmKATmP6FP4Eql2pT2liItW9xmyuzvzA%2BxpO7w&X-Amz-Signature=420d9ef8e3a449890a12d56bc479f2343fe672d0b50b607bebe06f9386d8d122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
