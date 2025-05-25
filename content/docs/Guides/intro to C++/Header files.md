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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLFKPJR%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDvJ67QpRC21r%2Bgpzn8zjf5NUZ3zziLlxCnvylRZhE%2FpAIgQwtVLsRO8uwL%2Bofoj60DRSZ8dUvpQfb0OkQM5h08HwQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDD%2B%2B1cXvxIjQqs%2BP%2ByrcAzvYxx36r70O%2F1b3YXHLNPqRJPVr1aW6Le8IhOQH1kVSlfdMPxEu5qUfnKlqI8HmpKFd7Gc6I%2FhasuWIEXncHUdh%2FTB1vBd8bOMWFoGYi%2BfedfOrnSf4a6HmyvTFcyKojMlQEz53P5gWItQmStvd%2BCHsG5UlzrxY%2B8rUGfiMMiaJbaBJXCQps2kDXaJsFZ1kpN%2Bt%2FUXw%2BfMN8PyGXRfyiT8giOz8HdzIEzmhJzg3ujd6%2FigPgvPw9s1Kr1%2FlSIOZLwYJtJHnzqmI79lryK%2FlAQuJJ78iekM8%2Ftn2z%2BuzBp1dEQHbKr%2FF4MvYbptygkP89HntgynnbmymUkT1VgEVCF2ATmrPz2KwjvGAhfFEq0impScEzvJVzHm1vfS997VpdmyL65QH5LhhNBatj0YE4KCYHa8KmPHsSfAugQRX54lsbWWt4nsVvVIR%2BCYNjVXdyWRvNYxh13%2FaVI0WJGvs89HyZCBldHdEvo8fvXLhmpZ3ztZxI8HgxHrnUSHj7QrgUIoII2l0aOgGV4mYptfJFt3nm9vGzlPzKNetXgqiAkoaRbH2P%2Bt6cthulSVXCwGgXXmkI4KxiSOZSzuwpkXCwIH%2FME7%2BudYd5%2BzPljRORKp4QTjqalrwACG11OCnMLjay8EGOqUBUDx4Mmp%2FsltrXIOcZ1RGp4i77cQgSkagCDqcOyXsmzZU5R1vdh0r7P%2FXq8f77DcohYaXnQtFfEbMJJid6Y49jBbsVi04e8NyQq1q41ly8De6czPx1YhrN7FrVWhXGFeg0tc4HhMQlb8m0SbvGqdEtgcMzR1elJrL8QI6wagJQs0hD87e5gPzdO3DlnnH8%2FNXHvDdHDbCg%2FbF7mOgWlnIRQURen%2B6&X-Amz-Signature=f1d1047ac65fc9a06358709d1f28003094cb2b4ea89d13d63b444b8d9a4e4cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
