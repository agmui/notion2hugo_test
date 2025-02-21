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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQX7WXV3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwQJRC84IvlmqfxgAsqEx%2FLt%2BdLTc%2FQ%2FkMoUEPYaB0AiAef%2FXAQYTmNveOxIWNOdu6EXaoNCYbYof7fuDFtklMZiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhEVIeJcQR3Q8B23DKtwD9umwxThHghvEf7DaV9on5j5yHGMVHWpYGmuZZuuu6c%2B5ghlIG1OYrLF%2B7YjuW%2BuWQtW3ZCxcObI0jaelq0Ea4XDni7DvNoMyR1awKMOAwoErHzBoaS7o5YqRJ6TP1epDelKpiPu6d5coJnyGerDZWEMPHQVUrNzyWVlfXS8edq8DCZamSo%2Fjc5z4yaPFcKoOphZ%2Fx4Jxf1XhEa9jq9%2FImvArHAhC96EB1dg6HWM8dnRz1HWnGeLxxjoYOqC%2Fd%2F%2Fqaqc1tVOiRPFIlpr8mAbfG7th5KtCLR8uaaZ84tqjTHhupv%2FYlwsNEC9JBN5a8wsaMbF7oIULrzCmigGR1B%2BnHqOoAiR54hJHkme7PAnpPIqClFfuhgbVhy2Sfb1M7YdH500CcoDmATRIyfE%2FuwBD8SiNpIi7PVjtoD3wlas9SaDItWjbczPqBwYhVCEH4iDE%2F0qC6DYNAb48XBBWXF5SF8u%2BV5%2FamVnhY2r0kPEbhdq%2BFyDkCqO1OLt%2FNU%2B46cfcuVoeK0rL0SGvROVzm%2FaxKuMSoS7z8KEH%2Fx6gDtv9BThzzCWSDRzeehqNJnA8DiPGIViG%2FOPyKWK7y91uHsRvo0dTEIQfs4MkQd990tQQqWytBsPMOSeD87bkTvMwzuPivQY6pgF%2Bl5ifTPbLUcWvNvJolSXRbwcu0vGG%2FgeHZOXafF5DznFisEJp6mhC41Ll4iwj5MCQfeNAZSgct0HBdkbqc4xFuuiw%2F%2BQzWWkwo8NRsBPk3oJNb5jo8cz35nAXo5dk763HgioGmnRTiJjCaGlU67Zl%2FIokpZdjqD2vcf%2BHkU7FPr3GS7N0s53%2BODRLOde9c0WJk4sXt05gFoKWyPuqcxVT9rQwQaEK&X-Amz-Signature=84290c25aee8c7501394ac757fce5e3ab7c7d4192edcb366f62083fd1619f6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
