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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SP35EL7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKEBmBv7NGWUAHfy6LwlXBg4bx4%2FaZAeNGSCm%2F%2BKl1ugIhAK4y78KBj52HVEE3WwkSYCqyngbmQ%2FIazoFmfIox2gO5Kv8DCBwQABoMNjM3NDIzMTgzODA1IgzpW9CO3mPZODLX3bQq3ANiVeLJmGU3PJU0EugjeA5HiiEoyrr2AmZbakEtjrTC%2Bmx0xYxQnOEJ5FscNtKmnSGf3wuUmLT4OfJpeYmoocDpbbiEmuqXvRqmvejJf8z2AE1MXrqj8pdabk%2Fv7NXmt6Fbm%2BXKTVMPv3XHYFEI04rG2kP8fMcz%2BEDLjPhm%2B6zkCmGVy0jPotCnpECst1S4cy7SFzytpjGPPjbSyRRJuaUb0omXASIDqaAm%2FsORDnEzu4Ge3jkT7BpDOdqAUAdSAYvDGV%2Bffpdb1Y3OO0LglHpSt5TdDoFOxwoRkVoirI9OCKICoBwL2hwHRLlblL5QIJWpqP12zCiCo5QHgAjMLLpEWcbhndz5BzZx%2BS%2B5ZUSw5sD6PA%2BTn5b0y6t2rLMdlkKUId6Jb%2FqMwTGvaLBzD80eeL5GUH3sm6MQNyIBrVKlhOrQveEMJUwq%2FzEI9F8DpGPmFPPNTuCF2mS5Jx0cLMmdiZ0Ihqoog5RE0snJTjgjccW20WVVd8PxLlaZiP3a1A%2FKusxKRIJ%2Bvk%2FiwXQSpPIz68GKmgnqux7yeYxbDvAVUI5OC7YMOYfZwyOO00JYiGCRBwEQj38qWp1baS2b1Z7aufd7MsyyB3uYtXrlwgdJELLSpCMljdF6OFS4PjC32%2B29BjqkAYKK3RoRWl5w2h%2FPBkQ23t9dJNeKQSXf%2FqeTvsenIaNuWwqt3RUkBqEb6YlW6bWRvDuRzd3hrW5PDwnrcGe5bZvLfBgMndFYBHpIKUKXlnxlK0qvrZSHttzwvsUqRG1Gykodmg1Iz7IGyjoW%2FhuVGh34tbWYWu9O2FnTPF%2F4q51r2PVpNQNsL%2FWE4j5YU0UwqP3%2BaRPQDKTlmnvReU6KsiUIcFX7&X-Amz-Signature=f5aa91700ef1b335ffd85c8c65301342c17a545cfbcd8ad754f751107857a079&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
