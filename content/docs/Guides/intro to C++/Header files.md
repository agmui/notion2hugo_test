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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSW66ZXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFceKTwTDk1hWFc80Y0G21RpQtRGrWGAnBoeCi3I4MPoAiAZWgdeBIxmpYpXmC2HYgyu6BS6P7CqrgY8674lZTkfJSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhpY00Ngwo08KJYAkKtwDVfVadNCVj7Vnk99NgklQyHq8exR2BvaIykjx18bmlCXlk1AcwqjZPMuH9z732xV6nrD4HBxKO8vtkypSGYqKkXZEuK%2F3mrz0wWW80e1GJ%2BpdqWMCddfvAwSwM0oaw%2BLxBvq4sJMxb35523YIbTZORa1piS7sObktdsh39K%2BPVkSaSajK2iutUvQWz21IF%2FjWVCo8%2B5T439OozOZlln4g%2FUT42wWREVYXfSurD5TpVOUP6OIHhZMdtxGsGX%2BCCPHgRQF2j4CO8dyn5USKNiJTTVQX6dg8pMs56VDze3mp7rXfypu0xUyHAF%2B2zGpUb%2FJcgWUSCTUhBasVcQOE20FMVFWV9%2FWIs6qRDan8q%2B8N5zObOtpyY%2FyHXiv3%2BqSv8dI4FwbJg%2BiaSEl8H2DmIP8dO0rKzfL81onlAdMgIUbSrGupFgwMnklavQlFVavl7vABNaRKDaAtr5SscBn1lOWmw6rwiaxwiUFie%2BsiLTwjeC0VZ70Wg8MO%2FLlNJFt6WYSa1jS8CfbVzjYmxjG71S6LjHf4HRFqQFRWlIf8UB04HOgAxHT9cwvbK%2B%2F81%2FZQ3EPFEWeoHQZUz%2B7M1ZYHRmXpjX9B2sexoUBmlPb36lTwjVqxiIS0vBJDu1y0tV4w6dHmxAY6pgHolFdChQLG7IEh82Rh3jglM6m75DSDz80BvtIzZkEz7WM7nQ1kHW51XLTn%2BaMU4m4TGkchNw0m3NZtV1rV9SagpOorxvNOwTcRwGyuPfByQaFm%2FHL1fNk%2FAZ9NHUwNG%2BwZh4D9SN7tabVLN1%2BeiQnhgv87mkeh3N2iHI6y230quWkZYDIaWMtknZxBF3ixMGEZseRAoIQvhi0ROLleBQUoQBwSEfmm&X-Amz-Signature=81bd955143fed863046e97711b8759b64f6b0ea8c65813731d62e2f46a01a916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
