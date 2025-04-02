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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4Y24IYF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCYpD7%2BOSWZaOPazZjotSBs1IjBiD1ysivq%2Fef1zRE7%2BwIgUS5ACIGDX5C1F2e6WX8s33GCEAC2l6mBeh5qjD92KlgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNxdoETPntpBk8tFyrcA%2FsRIxRi6sxiHPrq2H19SGnwX3hQtTSmTQrUfywTvlUSZDXraULHmU6%2F8gYV9eK%2F0V%2BUAvSREKqlVvUShHOIKyNhWItrwXsEUSVl9MjwowjQS402HG5Aol%2FGnxxQZJU6UR9%2Fs8PonDYJ1l8edGE6xITSotUkcQfNCCdq8NfELsuxsZYoVXvUqsfem1xEG40Cr2tzyMRi0nFwmYjzfAi5UsHkxTa%2FK1%2FKoL6KbT0fzMizoWMzKNUc5nSeP4c7tWwF3mpa%2BecS5lbXaB%2FgnNQfJeLo3XF02P9M4ly61EJf1Wk551PHkCuaKxfWKoxMeONXy6OMOCwRP3y9A%2FiMOPUXyV%2Bs6B6LSRKm2lgEIGHwVu7eIzObxvjdeI78N2B2x%2Fks1lmD16VVUKPBEu66Id0JffiWQ3PuCxuJMWTyYPO9XG4ZlpplcueM1ICIBmI3AcQ%2B%2FwXYlrz9Vmip4FNvJ3RbfLKiWQOa8HvKwfaVqNRDN%2B5Z6n0HFC%2Fl8aREQvAINqluuJ%2FpfwrYFOSzrSxQe6wPAZJDz1fQIQLXRLUpywhqrbT6ZDLCM78pr2guycP02jnPLNSRbOWIk%2F62uVu0jV9PKL9qYmcmBBYcXDC%2FqbFCKXJggS0NV3cRrPjI2zj4MJ7ptb8GOqUBbSNp9BBj52Ea3%2BrzpzCo4WsSg%2FQxOWxlWlzatpzv6X3%2BO7DDJmgLg5IjvO2XoBRNfKRVERZDQ3v8CAfH8e%2BJNIIcg2yv7sUkHd4F%2Bv71ZYKBR8XsyXs0ZQvOVNojXNh7n5VKzu8o1mvYyMaC5ivcLM0DWuEln%2B7rR5GibpzkJ0bH%2F7wADvZnyEEvnqlBIhAQ96Im5XDrfmrOZdT3X110%2Bd%2FEzMIz&X-Amz-Signature=e3399a1bab6aa33bae0cd882976bb1dc48b1c4f010a961b61120de931c6e95cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
