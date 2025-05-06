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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWJNM5Q%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4fc1HR4TT18c5DY4M646118hmUYpoCPA1ugkH9WUDuAIhAJ9KtXFZCRVlJhcE1dFEwWdoyEMvPrMrFTHEwYCO7hMYKv8DCEUQABoMNjM3NDIzMTgzODA1Igy2g6o6blt5vaaZnn4q3ANowSUI6EvQCsuRFjLCAu7cSpoCfpK2WpRsWSSQ2vTr9ivuWi4cXQmw0z%2FfZnzX5%2FrDROqebPnflD8aSPCRvBDo3ZaFXH6%2BeXx1AF1h9X5eUWsn7FKDblvT5S7m3p3BSiFV%2FJu3FdcLBnZWZxmSFyizt16ayh7%2FCSbubVl1hG7d%2F%2BIcsD5rMZC3wFe5mNWIJ3GYO6mmAvWwUyq2GCKD6%2F6n9Xbp0NoQV5dpvYWKDs0Hp0zCxK7Qx4tpIxN6Vpf3mg26zaaiVjTVFbIZNyn53tT6kjKJ6pLDwpQ8soY%2F%2FtarPuwwzO%2FpM88rjewpc1PsqERWnFT%2BzhZcSwm6WucCpaXPirTfs961HShB87zb2F1WmXucVqMKs67mW0o4KVWVAZd38n5Qc%2B1Gr1ePpuIXKXxdPKcMSZXhzXtkHb5tbXQmxDYkGpav0J88qFMyscqT3sNyOxltcnWxZYRTi%2FXHsRg%2BmiREc7qC6JSXCNjQHgZiiJlszXbB%2BBUgHzFvn%2FWbQoNPhAZASM5jRqNO8ZnG2dJ45i%2FdW%2FAzlNzVe0IkDbRluUtkk6xmLaVOs07uJB9%2F4drIVJYUYgPMUVIMF52U4HRtB%2F7%2FoztH%2Fcnizbnt%2ByW%2FzVSvebe4nzXftA7oIzC49ufABjqkAcUWFm5fIs7bRq1aK%2BoMTjJs0aLgi6zZZ%2B8ABUM9jkwJsyJXSq3se1Jh9Mnt1gIMUN%2BTjgpAbqSKrebZB9iv3ekqx0WWIRr73ufaeYVQPTJF60Zgn12wyEWRQPsW%2FGdvxsPyamIhPY5lGRdNg2p4DEtypfgiQUf%2BMA3CMxgZ1CBM9wzGBXJJyU3oIX10T0G58sq2wNtDZScWrOKCX4J7GgMX3Isn&X-Amz-Signature=954ca0cc58ae82df7adc5d5668c3a0270c4ef587674794dc388ccc6322b11962&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
