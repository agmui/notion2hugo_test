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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXOYV2C%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1GWHhpchCNkdCi0NyjgOhzZZrYaKrMd%2BWF%2FrZozhE4AiBrXoQWiqNjHHATP0G34iD2LAIlO3NpGwOU8t7Laq0IBSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMQVvdJWWl1DyClCtaKtwDQ8289YfnI5wZ3hUxXu5V4HKYO%2Fdfeq9aMlrxdGIDo4BD3xFwZDNzXaT9dN1%2B4tLmsEunxlAKKpnCS9CIEcqt%2FRrvywp5dvCLk1uf0PBsd8nFpeazRpFlDstE9DwUA0l7CwlUssVhFtX8EQljhAlyYUm7h%2FzoR9D10qgi7gD0QuBOvSjxLbForqVL9cCprIpm6thio8o6jYnhhWEpHdBS1szrYm87Q4L7KbIwXnpb8Mz9bRWLsSRFNvQIFaa6wiZhxaPlNYXs4gRGgj4pIs3eqmH5F85w3NRHhIKnA3%2BVhBkkhVFCCXn%2Bsc2GJFBTk4jlBS%2B87DYY%2Fa3iJ%2FpVFoRhb8%2FOYytNq%2FDhvweTBmko3e1PXc79IsCT78nXGasTOVX2xx6pAKTPcshbH3D%2Fp0M%2BkbmoR2niczvJmf%2F%2BwX0qYS2xAwdUASDLm37KrktXg1iHJdGasEkqXz7bhcizUNXxJeCKyThXCEXds2par2IKmjGLUNK0MnbIrT%2FIK7PZkrFLfAu7HGs7pJF2UCS7OizuFFUmIxmAh%2FaCX4%2Fr%2B%2BbJ%2FR7y3v8oI2gX%2FdYBbzLcQ%2FGUCRAwXdxZfDQrWg9D%2Be%2BJj2cD8WKLLBy0DZOYjF3YmoAP0o5laPAmhbVTLYswqZSVvwY6pgHOiT5oiDi3Tq%2BBaFJ2ra7Fi5UkdL%2FDrqW7X81PPeCafsa7F%2BHiRE4%2F3KizwBDm5%2FStguBoDgXJkg%2B6rW8c8Qdhg366tNIvrs5NqdT4F4xj3fwX3loBnrhRkvM6Urvk9Wndp%2BmNnR1NcOqB0bOb44SjlJoKtXrh%2BVZiSChXgJFyZF%2BXPKv3m4Vxe9emY6bnmWpL9q5hn4Ep2rp6jgwfv5uqloihTvaL&X-Amz-Signature=4d58b592390edbb19942d920adcc4768da2012cb67e6084af5c64ac8f12ec858&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
