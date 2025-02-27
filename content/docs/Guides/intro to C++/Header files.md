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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MUY7JN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCL01pnRUQe15DDFFqayIO2Ud5%2FO4D31QoSSMvD%2F0Ox3gIga4NmOC96RKh%2FJKRPsuhhZPCwI6BAAW7KBv8vfEMY17YqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTp2yY1SCgpJ5AHOyrcA2Dh4ufrVE79iOXJiLPU6FljQY8izj%2FQ6h4KTjv26tsA2IbROOynCCuaVyC%2BMvi%2BUy3TOkcQFP%2B19eVMqOOoNYjyK975YXcsCCu5jUEDtp8dCAUxGrVvvwjVSj5lkJf76qeXW8SJ7vupPuW%2F21hO1glgK2EDLONY4mKsmniZBdXmKuOzEQXKv5mJSyZax2G%2BEjLVY6N0Or1Kf1RI4kuAjyMYZ9h0ypQsbWOIGqvbkYIqMqiIzU7N2dZvr8zqng5EAAqI8KEVd28uS6aocZzlXBgsefaAFZw4MfcTqA9AaD3aynjVm%2BJkZLwxI7fcdRm2j9yW7Lr5mmgLD1I%2BCKMmBwNk6EHFnj41airrOcCOoYU4V%2FPHwN3GeURJQ0OvGCv44%2BPAHdjfR72J%2FYbsnVuR2kzR913OAzlyGI5WYIDB%2FXZJSOLazimjdy%2FQsvzQ8i1jl5e%2BoCZzvzUyzkay2qG8xRRV9AcHfsYqU6Ok8Tu7ydVQoXGx%2By%2FMEISVFvifyfj7hJNujPG%2BKas8PaQuiSs0m0%2FVdwnQs25x25lW4cmCBpsm0YSiUs%2FQxnabImQd%2BwZ%2BJmSED3ToIfn6ZGMwjFlk9pyYfZZOtoYO2d%2FL7EoYpeP1DOyRuw6CyMqMOBI%2BMNrZg74GOqUB6KCOQgpdDbfBXQ%2B5mISKKsLXv1fnyGtGjEEyBSSLBT9KbSMH8OLA1R8zm3FIhy7RCqUv3tTagfM6m625VzziTB9HqbIoVphxIEWvpzBTwnZMEn9Of2R%2BhSHR7qcFXU40TajWhxaFUTILY22hFbi2V9UdBr8L9UaCfWP7PLvj538NQwKI4%2F6xx0UstNZ3OQOCmnxvGCyVBShRqslWAgB%2BYNzcBWXE&X-Amz-Signature=ca12381ff495e16aaa48d78a5fa382dacc33a8475f25f26922bd15a20b88b071&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
