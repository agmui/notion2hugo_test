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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRPHV4CU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH8oMdlbIX%2Bi4Rz0HDuULRFh7p1rxoShYVNLEIAoLOW0AiEApbqF869JGj8hLzYGtCaS%2FH6MpdUnTt0Opitb1HVG06Yq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMx8Jk3Kg%2BVGMJLkKircAywE2v%2FLqW55Zh4NHv2lUJ7i30%2BIfZsczdrQkwNnLiO5xMG5u2nRVrJ0GTSd9C1Dt5kPRbUBH%2BKKyv%2Bd%2BeLHNj2plUQ6xq1tA%2BGAw33FxtkdxeonLESgOk1Yz5QqwmONaZlwFDn8V5o7xV1zPeBjXcGE6Q%2BsORTos1q2cmSMZfh1NirAhXptDEK%2Bfokjc4L4KeptQB9WpjFqgvjp0XfkrCG3V2yrPKAqUCZUN1hP1fKOtj1FodVsL0gbm%2BEXWIz0uI7kDAAlvyAyHSXY9JXk%2FlOWoEqQVkG%2BU5YY5pFs%2F4suDdqRjvy2H%2B0D2H2RbFWkbSOFgExmANtNRBWAFRNK2VUqkh%2BZMROPJeUUXBWl5Q1B%2Bz8Zp8qQ20V6SYrb7U9MdxRpdYH7bG1vkBqhFlbsPTAafeHAfAINGcYuHCZNtB%2FjejyrEZsDX9MxiHfnpUoRJL%2B3k5tTTecBnFBJ9fbmvuBeuyA4r1nxKwIonw43qVWtgRY6Ipc315O7EXvezsT%2B5kR7FJqmMwz47wQvmAhlkeoZl%2FVCb4Yvfbdv59zY89P9i6gTNlf9DdcpF0fvSaVGeouP0x9oBOSzhr3Adv8y4F6Q0M1iPbapHTTsI4SlcKY0N%2F%2Fu4bxD2JNJqJ%2FeMNe7jr0GOqUBRVRDSuAjJaKRlRzLXcsHKjntHv%2BxaRpmyJ%2B%2FG2KHPkn3rYDNXNWSCJyOCgLiVQ7zqsXkv6FuIL4C5cO2bLjw22H7JTU696rniGUNo6LfIaaWab%2FPA3rrrs2TMrU2Gdl9%2Bs2FIxhvDRniuKp12q21%2BS0zTng8PJaqGAExPdXeovdLN3CTtk5iCBuSfQ16juYZq9RhKzL%2F%2Bvr2Kki%2Btg7XVeKyoHIL&X-Amz-Signature=80183d4fc3c2d2cea3ec1818047e2fb2e8b2f971b78da0bd6effcf11c7dd9102&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
