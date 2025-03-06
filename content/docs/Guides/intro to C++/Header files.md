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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDRJVDB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVr2IreQtUid8%2FyrRQWh8J1Cmqok5oCg4ebvltQIZ3MAiBkrC8X%2Fc2VTZonFcbkvI21yQ76ms0gvzP%2FVlcW50PAqCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMYRoZRQ%2BM1kyLQryNKtwDnCKNC0RhHgxwVMwckYAP9MXs579wOmcawmWDLAMkdEkkG3I1P%2FsShT3aNP6nEmkOv5%2B3YIVWj6DIuR4Jp23AXSfonETXeOOFD%2FAQ0smJ1llXCuLWsi%2FT1wLkoXA8ssNVJ6E9fMyTh0iIHZ9H73IXuATQh%2BN5%2BAJzeAy6I4Uwa1iK7BN354x3Xp3%2BQqyUL6H7JvyUNYLIYsDjZU%2BpytE5sUGb80NdaC0V9Ww65xEtRLcNk4aZ0bWNI9qe8MEtbKNbwtxVNIA4VYSTrQ9QDE8w%2FjKFX59yW6D7ywZTbShR4Zi2%2Bttqlmk%2BsdhPBVR7kMMo8d%2B1wBoioLULtUXy79S0PwSdHBso2IelTpGpoig3YL12efAlC4tI2RC1YMv2bJp7xCgvYFJNQYLuZKvliFIIlG0jsE5867Dl%2FfmlojVpYjc0W%2Bk0wCFU2gAyaOjTRAkQh4CoV8%2Bl%2Fv%2BMLp6%2F1qLGSkqo3AZvqDScRtNr6aom%2By7SPWB4%2FcvqBZpu1twFUAbsznRDHFGlv5NhCwqSBB5v5zJ9lN0qy4K55Lk2VeY3zPi5GqP8sjA%2B0JJq5dxLhcdBUpHE27xScp2QfLj40I2g0kv3KlKFB%2BwdXDclCLMeLzwREqvGj3wTweV8KRQwgdmkvgY6pgFZ4%2FQfNCHQR%2BoDENtdOPl6%2FQUWh7K65%2BovEp1gHbZfzu5hp2oUagBk2U72%2BjUCEXjfHdcXMKx03jUBPOh9WudeWWCalou%2BwXZNlTC9DRZ0soA8DkutahSeB%2BRlZYkKS8aAjc3Gl577WhVG8FDLwjvx5AMoUAfUQ%2FcQz5ZvqLcEPDXWP7yULCoTni%2F36qY1Xmv77eCR2YcTnZiw0ENPHlqeaIYSuEsQ&X-Amz-Signature=28d9ab594f74ff44a48d068886eaf96aa9d20c7655b24c233bd28ba2678cbcd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
