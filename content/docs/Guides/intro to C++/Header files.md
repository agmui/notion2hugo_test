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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZ6EUQJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwttV4tFQUBlw8J3L7fd1Vhmf1hmuYicuQyETImCKnJAiEAxWjHHqnEjs0tbkfRTfsYqLpUC%2FBSMwHP%2FKLHSTsNzEMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLlQJtlLbStXYFtW3yrcA5pTdP98JrVcUH0SsAtgjFIjuuHqvl%2FE2waVNKTxDy1ZTMncXoQgR1HDR53zs%2B%2FhNvWp81rqVQvXla1wRUrv66HBUiASdVShY2TNKuksMm2QCuZk6HJkGTkfS56DkpILyioomuzMz7tb794Rmnghd4ZmyL0bex4v8fTQSLU1QJEda9vUoGj6K5e%2BMw6z1I9wcfjvoOgzJ1bB7ARLm108TdchcjsJfFA2XmfO2X2n%2FzggA8TfhuSodnPFLohNC6hgHw0kdB9BsRkJMhnwPhL1MfOkynKMfezBApMsvU4bksg6RJSXAmbLx9evMFpkRWHvKKUXP14z0h7ap%2BZ5s7TiiEj5i%2FZZ6fd7wznmY0jOVJ%2B1w%2Fl3Cs95b1Dzm05NMdj%2BJn6sb1ZeffGu6%2FGCkB1OlmzsVPgxblILJPl3OzAw8g1X%2BQo1EcWLvRzTk8uRaEcWMeLwWhYGOelWhZDn4XeYG0KhZrGjVsfzNNm4CKgXgbwVQMxxo9f%2BemyvMk7SC2KboHKlP60mnwRg6ScshIKo3VR04wGCczZd5niGAPVWaztCbRDHYZPDkgU1ABKCNDOaC2lYI8yiRMaYP%2BQng6vYTaKCOLb%2FHRD1mxDxd1tHCWM66XDc0aZZX9ZMyKmNMMr3pcEGOqUBdPTlyuf0l8xXhLcObPk%2FU7A4VvrIRlOgE3PHcRdjy%2BAVijCXiZfjVjdnh7XyeBWlWCVyhe4RV70ogIZ2EZbspbSr0PENyse8voTAkNowcp50bSwLjUqdxzfY9p83cUR10BLxUqwMViMomMZ6eDidU7bUQGQilrRm0u1qkfBqB5MfdrGmQD2rYixKjCs8GXWdQQY9WlOco%2B4IVl%2BqV2XnW0OykpYO&X-Amz-Signature=5b611073e0933d58db8fa76b326cbe51cc97b85ead7d9045588b873cf8380622&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
