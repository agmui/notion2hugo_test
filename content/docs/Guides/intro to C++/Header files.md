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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3L5FSK6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2FeYMAjZN3rfZRMD7Sw4RCOVMVpi5KngI5ES4%2F7ziZQIhALysRYiHNdlYqbOJAnlqPEi8W8HTuaTvJD14zbudpI3fKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2hVRxUoJ56SIYWFoq3APROK1RG9Jf0b6lVwt01Gkyx01ChwQ7WK2y3fHLFeZMncjj7hO7VHzUpTqQWZ7ZMOKSQwR36VF6FOoY5pt%2FVLNYPd%2FJbQpUSCHhjFm8vfS2zvex8Ifwv2yQ2lD57lyHe%2FJ6NVaZ1cIF%2BDVq9fwhSjoM0%2BOe2wLH%2FR12WMR7svlYdir5%2FZgNffjJmuR0R4sVdB53Hz5jp2zPuOECLej9vWkerztG3PgXT6KR5M6HGC4%2B0BZd3KftTiRwiqX7t8O5teffrpxYlE1NOqkJDhK0NPKa6t7aBJmFhF1dTpFlyEgxdRzNZWFN%2BFyZQRE2BWe3kSwiRIhO524PocyykpNuH%2FRzwu8FHE8D8I7tjfq1MvDdonL7SJmQSFrsn0%2BGGgpuV5JyBCaK4r81CdP2KwgBg3ZAlbqaL8z3iflgNNo3xCbj8AK09RhivqkJBcb7GzZuaB%2FCaFVr3%2FKCFyAxK7%2BDnvLItq3rP%2B3Xn3uv8n4RtXVLBo57PG0%2F8bVTtvnY8N8tPshR3uVA%2Fq0EY0HSIRIl6OFN2tl%2Fqobar1CjPLaEH2VTi2qig4wEClHI7MnZilsxyc3I2xUbYpTF4z1qQrVGzLfUiE5UXS6aUYURc%2BiBnAEMQUGm35LXVCuDD3QhnzDG3erBBjqkAQ0LCJnDhm%2BmihNivvoMZGftKehnoOE%2BtLzCNLXmW92b0Nr1f6beL3DwTOZIvIAkum9eyfyv70VRzWzU%2FVOcIYHiJWKqLD9G0EJqK6FRmE7VOIdOjlxVAEFUZnh1AVLIKMJMlA4YDEq9%2FQoOxSH0pkjTezd3m9rOGmNpOMXME3EjNQkddcq1P82pUfFst7HVw7zKanio58KwEg93xc%2FKuKkawe9X&X-Amz-Signature=7464e5c236adc68dc54d0a6d5fd37c3891b33dbe875b43eb9f78f6bbbe95fea7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
