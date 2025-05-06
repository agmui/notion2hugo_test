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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLNGFRXT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTltW657Z5uZeSKVb1zzns4xWmsLy3Bqw9zzm879GHyAIgPsOL009afoFyjq0agj9pp9N3WwXtG5IC%2BWnSom5gEYEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPt1971BJ7ahSP5gzCrcA3CffaVxHRbcmaHmHWjWBBeeZMgKB%2B003X1iRK3AXpc2i37iq7zh8hO9ZnVZGQtG84sDkFaCfsSPkEI7W3P8nbe6ONOLp5JNc5J5RG2fdwL0nempJfuixKoAm384ols8LqLyfRdrF0T1oeYICdVJOsLZnu3TbB1VwVUh1jXiBsAOFCJdl%2Bwz8ZzCM0ufeDE%2F3i3wLUOJGSbLOZUHJP4%2FFGGRC7TAt54KaQZqiYzthIrJtvlp%2BvtGf9oDSfwGswTfYCp%2FtRijrUCWJfZuT2dymzrfHGQGlkDNTz8n%2BoHNKLpjtx5U9f1z2O587PTnkSYHynefj%2FefLD1nSs8U37E4lRodVezTr9yt3oU0zIiy0BkmEIngykaymYcb3aSyvKJt5wdutQF3O9t3a6cMAIdw6S8IA44RbcjSpYDtf0uIIe6WKTOuoBIXeuJ%2B9%2BzjMtUOZhg96kPSkC54SkdDhMYv8ENmSNpbPK%2Bg0yk9tqTjiNMeypRv%2BxhI35HnliqSZm51CBC11Rs03CG9ZjTbl%2BF0KprRN%2Bo96tU6x%2Bt%2FjpVWlwqes3XmhBHPlo9dPBNy8qrlI1WlIft9HZ2rUkDRqSaLJRnV4QO%2BtbXBJMfJgMlEuViD5WO5CzPf87KWuP8EMKrM6MAGOqUBGG8yqPUOqbRjIJaduJXHSOcc8dS5%2BpBzzUg1autYbWDG08kpGSyNh2kEH7Iyjd7%2BcBRktBtGN2NeVUOFcgzsM4k%2BCLutjWMzwR1n6RcciV8WIKCS8mlZ4qM2ZSbMa%2Fu9lny%2F%2BaL4ft1a7cYc2G1n1LNxjSpMQdfOTuCHVt0xMvOqnLa0ISkLXxLICey5j8ZeuczZIgVWH5vfnquQCelw%2B9SDA1%2Fe&X-Amz-Signature=b89f4a077d533e3c3438fe01d3b3e8a960657bf2551bd04b8d6c9af0f7864a37&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
