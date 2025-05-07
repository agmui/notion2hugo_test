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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSB7PADE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMFnu16TKfI8PVqkNeXJvVPLaczzhAGQ3vJMk80Zjg4AiB7aeVgUZUiW1n7s6zGITecz63trIs7h1AVDvIwMsPtHSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMF1zD7%2FUw4N5GtsFOKtwD0sjVQC9FpoG8hBWUst7sW8VKC2Be8u3w0%2BA7CXKyAoIKWFTRdUqVPUM9L0YMkkUPq6tkmJCQyjjpifZCK8L5oi%2BzwXMiEEleWm1krctykZ1cPLvQsvmzqp25jh2JRYWqERJFO0lsDgLytdfZOnZ07xCb6YLGwGeTV5I2Ld8egBtSXArFaODYBjoORPrd0ETJeLLn2hhQ0yXw%2FUCkYlBuHns2fH5%2BprqVgCCV6RRDjnUEOL87T7fica71SHUpILLcIbQiLOlIhPzMz%2BIqPldzMow6FarKn%2BpvwTOFVWtmzpDRMaRKRSaxmaRVPFOztKxU65nAlegyrusxPmxFGwQGrI8oVokY%2FTA5%2BZlaFJC%2FYADgyFq%2Bkj4O%2FBgQ82qJSrYy9HYY9LvopvBByzeo%2BL%2Be%2FxVRcF9dHBKu9D2Wl7XSWtE52ZCCVZNjmv48PZkW0KmXKchpfsCt6cEE5R2zRsPOy588OapQKcK15mYnKuYWmshHEFgkJ3zOEpXOsZA33wqUZEZByffllDZmyytnftN6iQzBARSK8M6jujLm6vilRn%2F4UjLoSYmaY1tntCuSheG8SY1Xy5j4yT%2FO%2Fp56kGnsGr7DDcW%2Bc0UB47kaZIM3tAnREnkiCADxlJuFq%2Bgw67HswAY6pgH%2F0rd%2FnvrUeiaeoVlY3kX4orx3BQml2lvA3eGrS55K%2F01d3Yg5RWER033eJmW%2FwC2hSe%2BnvnWvjpSzAQjD2v9FRKPmAr0wgSBFGxxj6HYiOMwUM7Tev9pQkuejyFt6cipQw8trW3VEQNFQyD48IfGV24UVx%2FgwbOO18qprHScZHF1VgB0nnqgklo8sqMkgte9p3hEbz9Ga16fWC1nKERdkxhobX5Sc&X-Amz-Signature=dbccfec52379f951e900a6b4bfa068fad0a6ea20260a984acfed707cf8709fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
