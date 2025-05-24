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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLWTSHPH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2BeYMeWCBmGu%2FFsAUbWc988H0WljC8O984J4Z%2BE9tJPwIhALfojOIKGGhWvfjiwlTAGTFTaOTTgSKDG4f%2BD%2FsgltSbKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfHLrJA4Vi2pSiNBMq3ANMdsvFJUHbJczLPc9VQuj1LTvvrT0CnBE2ggUXqSQfZtS02pe7KogzbmkxXELHHcB7MS3olRK7cXKMKiZI0OL1mZJtgtTLQWsmyO5PgeqtTic2PeFGDjtjfG0MHOmOtAcgAHNNDMVd37HazOdOfF7oX12bMOqP0rJUJINL%2BL8T40c0wY5Zzrdfh2tH8Fge%2FUJNPBfDJs7nc6MSstAeZkmxjcPe4jBPVwSShWngeYerTf4i%2BGce4VwOPtMRKOih%2F1izhC0wJhwTsxlRI%2Fpjz8uwyDrhJ1bj7a2DYqTETV35Ou7%2F3OT4uXjitDbqHZvGvn5k1x3vqaB5Z4nUTKfWtAAX%2Fmrk4wHptGEWtPp%2FiawQAsTFTi45mOJphUy0gLn1d%2F28lsQTFuLBvDPQz9s2UjWPBD0Bbdy19Sq1GSA2SZfEkHdamG2OBx9edQKHbG3kjeuzd3gsa8JCX5fGlYyL%2BmKO6dCLsrro0hDwIAJKU%2BNV1T6LABQLMvjg7l3ekTyFgOtOD2bgrIo4R4K4kuKlC9YNL3eEmWhSS50rBieMJNSQ1iF1ff8rpj2PR53nhcISWkQwL1ALkCQb7uVASQPmjZhGQyMdDnMUjZYPyoPVqaOCFyBELLKaBq8fbuQjvDDr%2BMTBBjqkAfDKbXyK1MyiT4AX0qX3WI9SD6vvGkKl7b1sVgK07J42WcpnBUu4ZMMTn6yL6XMSkbS9IWNWWra%2Fg%2BiQkYvITYU20zLgIxaTXKZR1eIqxz%2BlJZ%2BOcimrPZZH8ViA66yr84WpodRywhaAMxqIxOQNM%2BQLJOO8guN9m29Ms%2BQrn0wS7UtjPSCT8vkAAywLCMUsw%2FW2mcOgmyaTYtc9WljmFMjiCumx&X-Amz-Signature=890b8cad302385cf5c47da9b0452b43800ea9c7a2785fd7677de7fc38e05b650&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
