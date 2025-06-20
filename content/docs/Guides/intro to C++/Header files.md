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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDA7VGQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd3cs0iuar0JQFTPxaYST5moKiGTRmhwJ5VngJU25Z%2FwIhAKoTEMvTQHgjh0hC7kBO%2BipuzzxzeS9GD%2FhyFqSEoUVTKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgwEQVRMVHa7nWaF8q3APuGroriOR4bppOe1aX%2BxfkL2G6wuZ4X24Auch%2FmKoFG0DPglgwNyQCcBcYhVmZr2ztSULPbcyRwJ2CK87eg6Coa%2BeazCzUfusCtCDoiNPLghG1GhOf5c21oqusu2gKVfcH6YO5W7GbYLlKoxdWpJdyYHiBVo%2Fe3eocCAVEhuIEn%2FoaJu5RCG%2BnIaalqJtnW4RksrE3yW322%2BkvsTzmGO24af7YNP%2BBzWNDcz1f%2BsoddcwnMVn6vMgbQm6102p4lX90ztd4xkXZ4U445C9oDU4RPPI8D1BbgvBhNO6JMQH4K0Qj4ozYSEY2Pwve%2Fy5tU%2BT8%2FXxpfZA72PzbX7Gzk58ZJ7fBi0FBdCWEAnQlvg3jH2ZJCPFoPAmz%2BfSSt%2FZH2UtezTBy%2BUojZolbxDXlZtYc7nQc7Qe6FbjLKmH5cYPqn37V88QpIszEmnNmk4MqoruRgdpSlE6wHaR0ZoM7uyHcG%2BuKgpks2Ty9I2%2FvMEj%2B97Bx4zfi9493LdyuBD1VeNBrsMhuadF7HYYk5ou9lgnfEUniluKV0W5u%2BpfzCiU%2BnYlMUcruCTSZr5UxqO0fNPgRHlaqt0GuBTRqOmvuwy1eeJmH3RkD2QemAiEKsTsnbz%2FQJFfzL2zbSq2r7zDm1dLCBjqkAdrH%2F92B731yDLS6s5%2FrTFGYl3sZtjILk%2FelGHRRaV0dkM6QtuFDMkZmpzjCTezL7VfXBBnhRbg%2F5BXg5k0uj4eTOdq6fqHxshAL3WV4Cs9IAmmEY7NcgKyDKlBbtFRTgnW7%2F%2Bh5WxtQTLYCah1xcxwadroMHFUwgLcCWfMWLeM4G4mSWEDNZ%2FjzNLF5W6AExOitDOcKrACwz4YiZxSY%2FDHKHYse&X-Amz-Signature=198ca5eab11e19ddfc4100fcec0238c11af9843c2b3974dd7e6ac131fd3ff12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
