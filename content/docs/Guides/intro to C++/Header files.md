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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V55JOGCH%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFywFUp4SffXzpKlrwaPPC%2FLiaCxA82pDKqrOt0NwvEKAiEAo2eGYHopVBzs%2BaaIkDViZ2W7B%2BEUV0Z3ecoZLDttTpsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDId1cu11jkCbvgwSkSrcA9S6tQokGSxYKcNXeeSc9fGO4B1qXj7ecKS4AhwH9hPsw7V09hEKI2tmEuU4yvapTq3OmObVfzS9ihC1AKzhZf%2FldqSmgV0QEh8rV0b9wmBdrpAJDzC2C%2BG86IhZCIf6%2BHj7qy6yHPJ4pjFogBf4eicv0MhXdZU3LBYN%2B3DgX5Xkwk%2Ff4Uk%2Bn6HbIQ9jNPj3LMrsaxSMtRQ%2FHuHjJ7%2Bi%2F6x1db5eyoJhBDkLYe42tsa8bvJJbKAntqirkhotrCrqAgtx2nDp8wKYWuSc5cHi9TlFPQ0bf6QEZGVfdKlJOU%2B0jh0NYozrrKHdmaT%2BEzT5jrccraXnlrfufpkF71rWuwm4We0qaz7qZamn%2B84dPtv69g%2FJOOklk0d2QyEBzwrA6oR%2FaFjPFGy796beXJtBHrX4JV8QbA2BLZHxEju39tiMFk432vWEHxc%2BP44IxQpWiZQ7l4c2IOvRFcl7pAyC9BZP8OR5Nx4yKGOgmuY1eSXzPC3GihazLxMpWDqT%2BS7p7V6iG0aAEiXL%2BF5cECE9Dh9CPGFxoEYi8%2FEjLjpHUGD%2F3c7Hxe9dRRnBg6iR9FgC8cxJKpeT2DiJ4slmksvP8fxk8%2BQJ%2FCOr2xZCfE2IIgscJnKozIt7DNb6uQIEMNON8cIGOqUBaz6tNZtppff0kP9Fe3gDEa1ykcDHDTChvoi2wZ1r7iAysPpuVECbDQ7P5mvt6MYwRTmqZ6XqfIf%2FrAy3fUzEyYCFDmElO3I6aGg1Uf2Vlixit1BCSovTb%2FjOQXG%2BYOzVklapHr%2Bv2HXDaV8UAKb5QDevN49OWmXTQwD5vffnsS%2FLNnu4FBGw8fEc7y5jeU3Clg%2Fjd2ZvTF2xGP75C7PMfi2L6ZqL&X-Amz-Signature=244b7331cbade233d0d03e662cd71febce3bcbdc505c57dfab2dcd2c78990f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
