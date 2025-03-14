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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GXBOK5R%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGjLejC%2F1gDRojiqsQNA15L9Nyr3AMZ9G0BXot3uwPuAiAQoA0WLprQqzYNkbKZO6qwUjr4Dl9cfT%2Bl1TyyCv%2FkriqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNLFKBEQlFomJTzsDKtwDx3I%2BIkuv7EU8bPrgyJFu2viOpaH0vCD6L2f1GZC0AqODO0odEzmlucaRvC9sQ5W%2BfAvEC6NAcy%2BsCHs8vQ2t18B9n7%2Fkuj%2FhpcmwX4PEnlbfw1nTF0gFYUGQSwfOZib%2FTGZr50Lm8P05v7o4r02htvFEXyNNJzqE764hlipCXwBq%2Fjw6cifpsC%2FeVSlsguH5jQX%2Bdvv62%2F8P%2Fw2OlOnqJRUNIxE2ALHysbIT0hhCcoT5vz2jw3J%2FuccXOG%2Fk5%2FFD8O1jmCASnLOcmyBDy%2BEJBJ0r0VeK8nxZd6XTjW%2FRaMo3nbZqoHd7Uwm50Kt%2BS984aKHUlJKQiUZG%2FWzrxuA4nywJPo0vAuCLfzkIRchnPm95NVRVMgekbgv4WpBFc88%2B6bI56Z%2BF56XOrhTUMUNnVrxuXPbDYBsjIhnxeDtjJ2lWtbFGXrApd%2FxeR16OblbDZoe%2Balbc4jTV0DQdMCZPcdh1sUL07eFt21MGwEKQopkgUuMTdWEZMn4uOytIqb%2Bky8deYyn8cfw%2FND1PY68eKdPvKczaIXbUHa4yU90ACrYyddx1blSeX9nBMjVs9%2FYRoDJY6Cu%2FykFYadGFFYVHfrEpkZrR6Bq6Wkzd5PL2aCTZVZR3p14dlTieZQ4whZPSvgY6pgG3gI9I3i0j2LF43tV%2Bv%2F5ERzQtB2hoLwKX%2BlEqEc1f8h4rwTj2fwt3RAEH%2BEgEDtecLS3LGveQjPeoQIeHYpirakxYICgXT6bTjbmIi%2BVr9EXd5EFKEVlwp3firbelyjZJlJ41eOAxZJWbxM%2Fm5D2Km3jkX9Z6j3u70TO%2FcDHzmG5kLYchwbcWVPTWpUgCcVm3OIWEXBU%2B%2FHT9V5lhw5SpWsa5Ygbx&X-Amz-Signature=483526d865ddc48c3d5398363585720ae3797fb3e60f98efa21707a0a42c6550&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
