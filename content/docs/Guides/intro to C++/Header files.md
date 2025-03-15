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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TRGB5NW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTaZlzNwosqQw7pS6xFNG1dqyYswADLbmL%2BYJnCrd%2BtQIgHznkieSaUaWj8eUrPipQrcNu9Bv1vWmdtp0Uze6ONM4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCiQZXRYbszJf4CejSrcA4qLwfckG%2F2sOdieTUZ6MaCp9u1SZv7E4PYzxev3eS%2BmcrvxrDLud4S2R%2FHn9gtijfejyklBoNKw5WSSVMhPcuGBaVoasLizhjkB3PUdRC2WJPpgj5gbPkNkI0c1LoK1MHeP4xq6QuQQzfs7tO%2FWsvcgzANybwPlkzBQc%2BmIjMNqgZ9xdusswTh%2FmtE8yWmZGtaW8G4lFPp4%2FQCmPxR8i6j9UzaJJzjTE5E4SPdJLtdfYy%2Bu8%2F6puF%2BDMCIW6P60sYGlj8xe9sI2Vyv8zG8f5kJ0iUlSkgFlRhlduXgZREngxt0LoHM4pYtx82WfTfepjqraBV4VN0qTEOEfJ7yMzUAlvTuXK0v6DeheIl4dCf0PsxwDjRqcQCQA5WC9c29WPV%2BNUb595R0S3UcHJNgLB2G2tma9aBobie4PIaPvo2WiwxIGLw8XfEj3T4j7upLYKNXhsDzY0F2ErxmbLJHcAQZIAZDqwWXfuClMRD637VoChISJVPUXsmkxa4CinSh4CQDarVy6Wg9AzPXN9Yiu%2F0A%2BQl85sRDmMkti8OH3WMsamMaklFz7h2KskJD8kFmcNV3tZqJ60QVYPfffymDY793NevNpY8luwjzHM9xCpShzLGfA6g0ig1aNaJDZMLrE1L4GOqUBF9Xulq387s4R0fXxLCB9SQEXRgv8vqhZU3SBUQSMHgcCFKlBd4rh3KK6eoe3boniDyo0W9Wg4thomxDMqhF6%2BrHfMMfdsZcpLw8A4lV7FUOGCHv7GtVqxOvePj0gUEo%2BWqsL0kWaON2MKAsQpiAyYmrIXnk4I5hrUNBILtE2LhqE5r7i0OFZY7J9QyvF77DkDi0FTjT5AdXjAl8EPox4nURNDEYl&X-Amz-Signature=85f651e396a949ba392f98ca55a3d59edee94ad2b4c6646e03b380f4c4d7d948&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
