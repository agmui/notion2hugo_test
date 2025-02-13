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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AELF77R%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3T23XMe8d7X8e2mZngP0CWsG4WkYpdn06AqyB8eG8nAiEAiD2L654nRxwfkteWOM4dpl1HA5nBp%2Bjmo0JkgJFqd6Yq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKJiZ99pgk9drcmjISrcA5wdHq%2BlWReOzylecsKCJEkBhjxodEzQUWvRw%2FFzjdHJ16hB%2BdqsO4ZbuFaIYsfYAKIyZ%2F%2FiU1ayeVHCq7n%2Buwu222mT%2B0hjjuknlmnfVJs9QkYmaASHpe0uJwjdWvoDEboxWoKzg4x5X3ARsxq0sJCkIxMKhHTVbK%2BaKWze8M8lAHUfz89IFTJ%2FoZsdsVBptQ9E6c0VIgybggNO9gyHMNGHjfel9Hb%2F4vcJj0mbSNKlU6VX8%2FTMF%2FxAvddR4LyrPUyoG%2FtsE9%2B80SCEvIt%2F7UBNiNJyx3kODDCKVG5liovUa7SD2nhIc7jATxsNpjihYRHb933tfYDnqnsDK9OQAtOKH%2B2f%2F7TVx8pTk556WlPXK%2FVJi7n4Tu%2FEDap1%2FIdDdU2inyENe8TRuFgUeiCwxjCehCkbYz96ib4vXIFnPqAXJAuiEUJ1S2anPFPMkcq%2FKN2whbu%2BVhWQniQZjVLE9i5VszuvHOIpivGO1xyT3jHRc%2BnjUDUXEZhNEqOBNvgUdmMu%2FXzwkuk5de3RrXZFZEjFFi06EGRLxuFn1iVQMHX%2FoqOHO%2BmJ6174hJ5hc%2BtkufTYRDdf6xl9TQctFLcq2mebKX2qtl9ViLxG%2Fj%2FGv6v3wBAqkULIkjtKFXQTMOSDub0GOqUBtthjajVDKWklAfIr%2BnY0LpruNIhEjWhstXkGSG5YWYvQ7UBI4jB3WQ9uwgCzmSrv6Z8IxcWjrxxlxe7sJwopYRW9sgWEntlvS5fdpSPiUypOX%2BXyNPhGYHBWgifIC8idYR92ka7JU7SqXS4zMSV3HXqO%2B2b8kWn6EYCSOJyEjQIq8A2AIOHX7N1p5GF4OqoR3Twwfgcia5rBZ9kQB4LwHE6tdMMF&X-Amz-Signature=16ca5ba170bb16865f7171c3efa57183f4be298f6b84729b23d45cef20079863&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
