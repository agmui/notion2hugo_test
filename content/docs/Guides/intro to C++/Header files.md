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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQMWDUS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX3MRuY5jBiz88xS2Livv2esYEMCUYJitg0WDAnFwWUAiBshISLKz59%2BKuhGPF2WG8QxklV%2B33LhCOnEcMiyFtExiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo63OGsF85BeB7I92KtwDRpdE3popmSNMipAq0nOB%2BKpR4hWlrcHqUafpX1QvSUjDhpf8ZN2LSCNO%2B%2F0fUx%2FCNHKwnHNYndarwOnnz81z1NaU6TY72rJx89YXMMgF8XxUBeCv5t7FC%2BWyJ2XT17SeYB0g7GKGR6o2FNWjQnYCVwjUMOC9MaEDTuTczi%2BiJOQu9s8n8TNc8KIZv3oMb%2FVMNr2A53nx%2BJobCB4Y9%2FYs8klByIVXy%2B0BsydNejJSjErlapOgsem8CTKAi2dxgxa%2BfB1DUPbv3ucCamuPzFedb0Bh%2BIklVn6JZZxdF9F5dvUoo2DQaUjOsE3zJifRdT%2FTC%2Fx3P0ZVOeOc4sTVSVVyxGOpLNTS3EHhAvuMXc9vUytO%2F8yROsrJI%2FPf7rU%2FzSBQLs0vWvOnfAv4f8Gf4IV7sTAuyWAv4C%2F4pvUG2b8zBywmo%2FrP9e1wrM7ZaIRXTzTeuS9hdzqaxtzjqTJxDhIi%2BRNl1sikZPMzOzGPviPgOoAagJdgx6LVDRR0GWr4Nudnjvy0XlBhjABhF2%2FL5uXfoj2iJtu1uTf0CIDXJa7IKGrapGXhisN2coC%2Fpp9tPurA0UIeIXIyXylf9AZimmvY9hLynjgj9IWz7%2B4iHWEpkObG76853i2DAiQ9bRMwkdLwvAY6pgEaPPeSdDNH3vWkjpe4Z1NuZddm4PcVX9wmJ4xFpMYv8XsZbNghMfK6bevP2d4%2BosNIZPwWHnqi1XA7Rrtra4lfaqpBIUm81KUFRrIfVa6%2B8Z3bvugGztIepumDrwQOsko4i7%2FxLwsvIslKSloMmoUeF2fmz8cnWPPmfYwtk%2Fo5pqe%2Fc9cXXjcwzuy%2FUpYJlRa0AksY7ea%2BYVWj5ydmRpYXLv5KJcYT&X-Amz-Signature=3837422c2d83341226f3fc5531ced993f153e060428de0dd114bced48878fcc0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
