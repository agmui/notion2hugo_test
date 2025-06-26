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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJYGO2R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGqgTsYbMDhqtJ1cczvoNHF%2BvP%2F7gfO32LTwvlYntbjsAiAj2K48g9ZLA3FOsbbF5%2B4%2FIom%2BACjKDAEWIv6j01w5XSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxgmU7Ig8Ja%2BuTe7bKtwDVZVzVMzGAguIJvfVNm3ULa8s8418A4d7BCr%2FtdOb7yy5uWM0Xl6R24DCezSq35iznk%2BoTHl6L6l15YPW6Icaf9BYJt2buKd9c%2FOqvcuUJnnT7NVz5a8%2BtMvLMQFsGZ0Am1aVJ%2Bo1YdJAL4JdeVxRruLYptegmRSau2YcVgPM7HSPnALvbaOUJxdo9jfI13sboMmoDb2g3GIB1JOCPtHEJrEpk0UvPaIQoesRArCy0srYHzJEzYQ%2B6sX4qK3ll9rZO12Fk2lSEV%2FjroOxCYiVEwsvGyg9zW2lWjM0jbJT%2F9gTmOzkQAKXJTI3h2XIQpAvmuops8qhZcSu92u1sCmWZOBap3NiotngXXaE%2FijOEPMwcjIU5losoY%2BLoSBlItGnwdfYZ9FFmKnWe3s2NtxMfz3OTyxZk7v0jYQRHObIGfwykyCWHmacjV0C%2FYwN2qFFDw5CY4AZdrBlhhkoL9zdoqSbRuWruDmRla9pn%2B5F7y9ewb8cBhJpHwAKVrwpzKdwIepzQm7yqduKSb%2BX24ZIjI%2FzxJLd6jFt58qCN8vQ5zoXlGsIevbnwNRgya0CjybvOMcHmyPT3R8NOHsLruXxTpgjKdabLR87P79nBAdvJ3bwAeohGLsbPLiStvAwzKH3wgY6pgFhraTVWIa6Du%2BP5Ee4ZpnBMXBUC3JHb8KvllnVSf5b3Ex3YqwhVOQFrHRrIHrWgeo30PObomO8lc0ITh4jEZjwfYmBfYmQMEmGgTzK8XZ59rmG5yXqGo220VfHOUsxwh7Xondas0%2BAtooHNqQ%2B4bvg4uRR1%2BjZZ7y0yZYrKhWnisICJdFSOWKYrrCUpcYaLcUB2t9sN0UCvEKRJ4cM4iIb7ZI1v0tR&X-Amz-Signature=7c91ddce83b40f072d79b0ed78e178453904006adc32c1ae0eb39e365ab60d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
