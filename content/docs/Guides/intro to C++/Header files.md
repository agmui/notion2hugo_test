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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MAJGQQN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChhy3u4zlP%2B6trt%2FGPWd3%2BMdiHrrEgGzUwPSvUuthUOAIgBb%2Bc7d9goEWHYCfJrhhXltxLHUSmLZ5IMcFpm9S6thcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrw0QbTjtkvX0SL2ircA73CsoxSpVZaoLJTLjvW4%2FiGffLI%2FUzTN0AsJG9KsLhrLNu0qhA7dS2WDFdgoFEE9AHVz9ckvnSfVllqtJ9eyLtZm%2BGolpCCOKLzrW5kds2gxkwWwSkf6nP2aL3Kub%2BoiGU7g2O2qjHv4%2BWDzTLM4sxfBG0pVLlFSGo1jUY%2BHg%2FDnRC%2FR7u9qyd34PzTJ5cXbQrPXXKfwySCtUEuTSMWuxB6yv7cnBk8HxV8vr37T45Y9yvsuEusLWflE2FGT0UD7lh1HSaGEfEdkuBATfHyngH3H%2BfE7%2FuNJPEFFy48N7ffhUDsmf4vJu81Pc3cxgXNEABRNduo5ELduFSTTFtgXfe1ujE1MdDkfBzN63%2FBEYsLSxzdyQPWBOnLfLIrxBuG0G23BNTnLnsqKdC4wJSOj%2FyRtq0LZ3cCQkQQ%2FXNibW4AD7DYFzWgTiApZ79gaFrRWnrenIKYjI5r23lu5CZ0LzQjl3Z3RmDpcquSJxjrckdbiyD1Ap4BGGzhQ%2B3EgLNim%2FHcUskhsHliUyupIkZ5fdvG%2Bb96ko7RYE5uzodMxNuAS3WKq9%2BgRmzw4z3OBdpsnxaLvs7tBmyOP3NIk0PhKJutb7w8SUIWHSz8LpStLg0NZnW2hyQAqZZ%2F615ZMLT6hcMGOqUB4dGfdr%2Fg4s%2FS1TXh7UrpHMbtqIIka87XS9JYUALpOZ3xrYze8S9o%2B2RLqhn%2Bgm47HqVKun6r7%2BTulloKhgGH9RKS3KRHdgu0IHqUlPM5ORWy%2BxgGXIFooWhiTiFLp0x1cqsEcv2Z0HvrHFr8rKM9ILh%2F961bl%2F1d35OjonAzDjGtaAetWlqsPcmwP2SV6Y3vcd2h752OWWrlQ28b%2BZhzM21Yswsl&X-Amz-Signature=714aac8a6d93a670d337742ba9bc45549848ddcfb6ab8c8f5f0c3b39663d3bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
