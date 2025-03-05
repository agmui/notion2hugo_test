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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUGNZ6V%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmivYapXW1utRydjBbdripp3KzJLH2TQD9gJC6zbtQJAIgSU5q8pDdWS3WGLin8l5SvLSxPVgkyRkc4PFTxsjTJfEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBptD7gvLrD21sJlRyrcAyRY6OL5%2B3Y3wcPlsOWvOstNEp7UvqNWbaoiPzJUU1SDPvmA16R8WrBTLIKlAhqxdcyiLRwvEk5w1F3wgKm3eXoGLdiiv80fVY7MQsbwv7wuPp5ila%2FlisqpqGi1ba0k%2B3tkRMS8%2BX9VL%2BBKqCw%2B%2F%2B%2B1R62HamVogqixU%2Bi0gzf7x5G55Pb96ElaEVMR7nJUgVElUVGRZ9RoewyQ2m6kS6b62alWNGogU0SN0IbhUnP0RJdEnw5kkyzrwmjvQ%2FYoSz%2FarwXrERNQYr82AGInIr%2Fz6ogL5Ekkep78RqX5bff%2FFfBKv4n1aCTW7loxLH94bFXwmUFOJD7funYF%2BHIv3s0S7mp09R8OSTDnhdYJb0anOu8wKoff806AHKU6W0UNfkdzhI6dzYSiV4FQadJ8OeT2WB%2BWs0oxjJgS9EK78E40s6aBJxKcJ94HHBMmjdK5JbX7lJCQAj1wlJWAs5ClW%2FuwgJuhs2bEMI6eHZw4VTpRKT93NCFeDMInGXFAXX8C2TPu%2FxTRmbQaBeo67TQDrdDleeU9tcKuX%2FR5VTHS3Hil2NM5I2Ty2%2F7FTHH4tf1GatNQgULJ%2FB7sWUMR7DJimMny89iUy5ECSxZ6tIvb0qzrI%2BE%2Fi62DpfjyCZgTMMWDor4GOqUBzLJxMCe303OlujDrGtgDK5sL9dSf8tmyVfVCIrKmakYWP7FKY5CG2MBtPUnPKB5F57aAlR9C5rnuhKT6aB%2FK6xEqyBjq%2FdzdCWDJGiT6vfmVxhKpTllSvuK6fUH1%2BiMlFn5OttP%2F3iVS%2FF1ZvXA%2Fwgb0P8svY8bA8SJJCzvP2VEtvLzVB1KvHRtxAyThPqf2dmbMPMf9WR6G4F1UpQQQMA3F1bBh&X-Amz-Signature=5c6c5746e4d9e59ba1d51c39bad2d19a691e01edd409f1d9856a8fc099d1955b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
