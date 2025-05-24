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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI52UVZO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHWMvCVLS3B7%2BOKjvm2sm0SlEmEC%2FDVSTZRd9nNdMDbzAiAhhYpeoOE9y2OASaWD8mOO5FFU9nsiOHBAsKQZGyEsXSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMwXkcpN1IToqIc65rKtwDF9vG%2FzRi160ZYFJq199cnyToruQs7AOlo9bxSx1OwudcSc7OAKkeUy8tkc%2FRdzxSln3duU9bPSFLElCQCIqFCQMLAzJGs6gWjN6p51xpsGoYAyF5gKEnsDSlJGncRZLXXqFFnrRIPXCrvOpSgZsv3ip7wvTShbmn%2BynncOnFwNrOuq1GJSfz58NOTYHDm4I229ZsCViTGZc7Ter8MBSM9tfv33No1bg7ZUGpTUnNaEPeWDqpEpW7IAkjNALWUIAfcmA7igcLN9wU0LJoRlPRCuT1UY1j0PbepM%2BYh9bzQc1wufRAahM5aq8IrVj%2FMbHg5JV%2BMZ5HTA4em5o2EjKPjUuQ3h5cjuUzj8GPUXdtBg28HePI%2F4%2BxBdBtHY78PSNA8v%2B9tWaYL5eE3qDyp2o6M7hYGdPujH0hCYOQknkPBd37l5ytZevu6YC6c%2BRK46oGTEg1YVWGXw6tXvYfQBPFA54FIH0%2FuXdsZaibGw8I4tj%2F7lj4FYKmbuktpyHUTOd0irVvg%2FS%2B3J79kocbDRXbzNi%2BELSHlDXckZlItslF39ZC52PTcsljW%2BMhSz4hDQFn%2BB5cU4MoOMvhojA9ul94H%2BZ%2FfQsmTafPgvPgEpOIkQmo0SNR493Yh9MxEFQw9oDGwQY6pgFZmVWiDrJw7NhVDj91HzNuJDaqqRQmw5aFEpPh3wVV8WHvHEkCUuiLAgcXs%2F3fDKrCtBU4%2Babp6NLGnoSUHKz9%2Fsko8kdIahi0MPic3jXV2TcS8dnyuEs8m55k%2B3In3N02rO1MEhOyIpFCJQgfhJg9qRBY3qEVDQ0FwXQErf2AQUxBP9rANUFb4IpmCTam%2FKzVEie1NbWaZyKg4URwKN68hF6re1Qa&X-Amz-Signature=a73fcbaede0725012cb7bd1a8cb214cf5667475787403dff7f4cbdfbc0167ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
