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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYXIVMV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FoPlj%2Ft4yiGgXMnE9DwmQxyr2s3tWYrt6zbqF%2BW4Y%2FQIhAJ17%2BAl%2BRA72mkdXnXDuxdxstEmoick8q0AcJ24fhbQ0KogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqhXvr3YpfLHvWcHgq3ANunBxKDdcGQdnb%2Bsq%2BdYgC%2F5%2Bdfx4bEHWsfENG29v5ziS3US8oxY91b2YBZUB1BWv0gTzELZSK3FfmdofJW%2FjCK0juL%2Fs5wlLV8xi1RZraQ%2BB4BdcpyhXYOF0X7ZdrRb8Rycp4Jp%2BF5sue2CJmPkWwMYRZjj2SCa62jZSprMStMMXR16MWsix6UaZUqaH6kKt65rrK2zqWcmeeic5yPcecXWrJCI3SlC%2BZbX8vm2nnnoWmYZ8WGnvp%2Bl8j9ZnfyPOv6%2FswghmV4jcO4xAsf4ZMGydLU7RF8yi%2FHpNqDxCk21jSe5OBNZvduKK1pyw1SayZJOkewF1Rk3JfUje6sXn98KhhmONn2DfCUF9A7uV9gkNYHKUrRmY6rY%2FJrOZG%2B4Jau6wSp%2B3oFTSpqpxASwBJQRT5uxslsfxR1y8YCSi7ohPQq%2B1SiTpisfkDRcR%2F5dnaSHkTxT9OUOOPFSkQFKkgeMUgxIDA4cRRw%2B3%2FbBucKuYqpbh%2F4Pz33hIHeFaQwC6oIvufn4peyzsmUiVF5w4tZbaXN%2FM45NLfpzW7LSOwkB21EatluzwclzN3TaOXHbgFkXmkgE6JHbtnKEL0H8Cx%2FJ3T0eUu%2Fe9%2FQMklN4LbRAE2uMdOsXGgmmaiszCRiJDDBjqkAYFlZt943xGqgLeG2aLsGTcHtdoWavZfvESOfmRH6WEPmD7T73%2F8E2xQjgK3Hm6BZOQ9V4u2zFIiX9Yan4mVQOlFg5auZG0EeTVQeQpE88b1oJub8juGHQ0g8Rjxq0fLu5RYTu5XJQDQcUKRQqE%2BRTInGA%2FlCccOUHhjLXtYcLidYbxC%2Fb3ea8jReG9nbIQdFao76TwCoSgIJMUoRYx2qL6TGwc7&X-Amz-Signature=1a82d935306ebbe880cdaf15e327bade6ed28bedf5485ef110e70b7359b12689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
