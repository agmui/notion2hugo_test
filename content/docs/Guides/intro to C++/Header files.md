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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THSXVWCA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDBHufALdeQfNkFetGqY1PEPpjLYGsqV2TV%2FryEax9RzgIgbY8DdlCrk64HIN5bRGH6N2mtNq9SW0FLEKuz%2BviLf4YqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKqwp7GcxOS0XMDpyrcAzGlMMB76Vk9W7JC32k5XhXuo2SvBScBGsstAU0nyJD8LKSfF7h9u5IQ7Cf2KUTTYS%2BGU6b4nZ8rnd%2FeEj7ir6ZfQvVnDXOZlG9GJmS1J4RCL5KC0EMKlJyPHAhQphb2cb10dwxlHYt1fv6%2BLtCufBGTXaI9k7wS7KBJ%2Fi6laZQEJGpQGDAVq%2BiluqbPvp0mGmX9c%2FReKGYUtsmi8LHaEroYM2IpQFSr6A4zX4H7mynOg7vJcX%2B%2FvkATlefXStwvO1VTRXS0s7gkNq4Cyrlr%2Fsi98uts%2FYSRMNO8B4UvbgFButkiKDMJQj5TI4qohaLGTd2%2BrKcK6%2FkFtF%2FoAS41WEWjlTAu%2FM2cP6vfTRh%2FxMb3mKEQYHuQnFct8FLZqqLSsHtM4kOcXDLgYblrFweHpaOzUVddoTQFFbfhfpSr0mnVgVbZ8UbTNk6uRvU40JiTWbz2q6FdckjkziUSnsiE8f1b%2BKKuWAgaxIAKw4TWe0NvWYbMdGrRCkM3QsBaNxvEBW5cBWiEbf%2B6pkb3fO1l2q53BXbo1UgH4zF2G4TJzvAoa3q7X6CiHBMUMr3KBKOOxQC%2FFoSGkYwW28wzhQ6rf6dkp3fGxT1wz1ZKMh1j8AhY3fJUiLwMuIaFspfvMPyfmsAGOqUBknoKwmx%2BKcFlcqxKToP5LFrkj1NIW0maiEJVIBfQXlVeBFPUr4Z5Lpl5DADLhLk4cE5a5BOL2noFxdlvBmXcoM1cfrG8JF5h9cjPmAS1E8gGxiiED38REBRknfK4fxTVeallP%2Bgg92Bo0qNLQL61ecWZ6YkXKLlbfkfoUYy0KTCGDSxbUPYgtoS6YiuXohkc7tv1Ua2G6mtwYii4K41EIygLUdAG&X-Amz-Signature=ad153a02279a0afdf429aa2396a3515976ea7a6ab4d736123d6181322c2f9467&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
