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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHG2AL7B%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICp7D5aU6jIzAXLLzxGXgHayIVgVDiEa0yuKqvmEr3wYAiBsgVWeFYWo8RSbclQl6H0q9z9m49O%2FpDagxp5Q3UoijiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjy4IakpsubJvbhdKtwDBzi8%2BHBFGUnjv2B2BpEf9GKc3%2B7Q2l8mkZWfYU1PtN3lm1J1e%2Bb%2BZV0og7Iuf9UEfn7iT%2BI30OY9go3j1h2IPrO9YVVV2gkFI6w7Ibk2n%2FsIeuuTh%2FUI31o5TgfYGY8%2FSLIJO9hUpb5koQpDk%2BzOF3qGOYsN2K2CXtmCm62acJHpN6SJb6Ln%2FwalxOxNnRRm5u1cC873ncuaP0bxj8kwxSrSIl4Kw06gLqGzm6UKUXn8v%2BzzYR29wC2DbH9WmxszXf2q91WH3r3D0WXFSWMIPxZ8qAZDne%2FLSauZDY6%2BQUCndAeYqYsNQDxj0PpDxWcSbTKXyg%2Fj5iq1nnWbGDQtCrCdJo7Jam74lEGZZjUDGexe7GUZfQ0bqEhyc%2FWamgC9h1p98GpkNkgJUaxwzqVq8doVHkP%2F2Zvj2fVBJuKJvwT9vgUWkLvgvPLb3DLtSey4kWqfCx7QziiscTmlmIoMB4R10Hc3VR9ykN%2FwnGEP526EPhjckdWzi554R2QB%2BNDf9YVrYZLFwCj8PEakH46nz2Ti6svffuRRE7Zkd%2BcJ4wGas5W9tDlWm6V3o%2FgQa0mbMm%2Bn6FlOiflZidCtSgoaTC0N7qEsM4LmVgBftREDEXD8HAiotnEgozwasT8wyprawAY6pgH4qwmrP60ZOrtu1IgX9k41BFVIxLGACARNbqxkLgeuth%2BmIMpkh91vBW8L22sNpw080bELfVPDQt7zyVgXMgIkjx6RUaWqf%2BwDUJzQpJLpKXPi%2FzR93enE7MbVamOUQ9rmQmC65TjLjQ6M6mzq9bpcv716%2BHl9tPhvHs06hPBocMfA78AiKu9YVNMhyRwBF03vg3JcMcCTo8hz8cACX1BLI03c4VcB&X-Amz-Signature=035fd861b0a99e2869a84c4a1919bd82590f0227e09f21a7e2fe16232257117c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
