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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S544BFZV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx7FxxaB5OWGE%2FQ%2FYhVhbX9FaEPiUgQQ3zjOulPnU95AiBrDx%2F2J05EiWgye1HnZ3yFuujHFyX0TzBYHuNoz9PHPCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvaQ54oMcKCsKvrYKKtwDy3CLnZo90lI0EQhGcEtZs5pjN7qOoRowY%2FOtFr93tiWsmKcIcZELPPRMPL2PKIzTDP3KtIj7TV3PoFTO9oCVXGCFBzF2hTSgWKddKdmrv%2B3CtqnVmdfNbC%2BD5LfuO39SVKuHlJsbwlbDZd05KFCJwjIZHftjOENTJoYqet1DQ0Wecsrb9Wp7OzJo5nQkwcAOcUU4hS1%2Buj2rAhOkC4OPb8mLXfxcVNfJPncwk6%2B53xaxckmJkaoL7T8X%2FhDscQlxQeMxs74eeXE3GyWCtz%2BJm6G7oUd%2B%2F1E2ixadZ2U3jBDtiRAM0e2D%2B6C1TFmjtROaFj6bwEK59aVEqg1vERdcGIvamL2rNsSZ6QzIvDI2VuZiYnKdctyu%2BmOtUK%2Bs7mlebOg6AVm7ewcfWrPEq8QYyAc%2FJizDlXHf%2BJP7U8VDGQ81dDGsPL%2FjxQydLM%2BBojg8ph6p7if9lPb9qoxdMGxKZJh6zTyFWy2DQZQTLKvjOEidVCIjpF3fORXokjob5zbm1qopPHTnkXE4fuVQ6qfQDAC0Hibc3ypgQqpwXo131rFhr%2BHrwGa%2FY%2FyeM9tjr4d%2BD96%2BdfoSnA74j2TYjfUeR6g266uT%2BfiXcmHNhdJPCKswlUlb3janfFXvyJsw1ZD2wwY6pgETzjgRwauLYWwTlKLPBMiKOwhzuOOKTjHV8qkWtwn1CzOs1OmN7Qi7wjzOYPUSPi8Nl3%2Bw6TQX681N8Qfq3E2gXXr3Va%2Foskox8%2Fzal%2F%2B8TWp3ruCZZ6MwDXl%2BBFuc4eW%2FxeghiTt%2BhwJEkqi2hNF0hk0UyblgDBAgO%2F2XC%2BW41%2F79cFVz0yan4bypf9UhF2ZfAx7zYEw%2Fp665x9fhe1PR3hMKWpia&X-Amz-Signature=f3172c05ad545e9d9591fb77c3381c79b959304c250a2e8f952765d8e42d2d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
