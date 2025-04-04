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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQIPYZZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgzzkP7nQtF6yxTJWMmRNRflrJX6Ml%2BMNdKEe4cQzaXAiEA3kXp9A9iC%2FUN1XyI5%2F5KD81M46PWym%2BOHvPFZb%2BUw1Iq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJaOOaV8n7%2F0FGnclyrcA6gTaf9I9tIUKGPed1QaEY%2BDL1eamv43BAODWxGCS587ffp258HwPNHYVVv4q%2BhoB2jhhNMLpt%2Frce9JIol%2B1eUuo43YQh9uWQZVuEF42OhcJHp7RYeXR%2FV9aRsWi0H35GjlZQ7cCRwZWWF44tOMT%2F3tPGtsVi%2FpEsFl5f8Jr3qOKWwtpJfxpfkzJOzYSJU9Sl9gw9%2BYYGTHSOMxTySE8wkHnKUI%2BTM1hEgXdvR4l2m0mZaSMeC7GITROSSqpi7Es7Y9U5lWbQmLwPc9KwjjYjg7rtHT9enzb0%2BdBPlYKd%2BwzDeqAZeICySoEO8h2AglYRVeON472bwAraVyRZyq%2BHu9PoWMe3z97suZGLfMAe2JnxZ7DLHv5o1JOrePVsIRLDlPkjeUuIiRkGKNqi0H%2FeTy2DkyUGpDoIqv4aozsBZW5oaZfGsPARFlD03rr880TC1J35GjYdMLeaATzqyk5FLHzbemJyl0Lx1KHFwtk6tuxVa9PjjwckG5K3azS0%2Fox2ewUrWd2S2SKrJ%2B4iuxSyz0ROxA%2FC7yTQrs5jeZi58tTqREmM28unsxTUPrxruPWqLRS3xlIAoWpP%2Fjnqlk9ItOpqe8qTH38U7ifrzIdIc5w8tqSg5DqrQvF5cwMO7SwL8GOqUBOZQlHiAXuZe1o9jATywVr5rz7CUseJfNcHQNOxoY5%2BwRVkn7BxCHMCIGudMyM0geinp2JgAS3LiqpRBm%2BcDVedXYJ3nKyzuENwRbFB8Hmmsz3l4R2YFPcSSBIRCExpE7Abq5eNHzsGLKa%2FEeyya9UjVXAj1TylPiO5cp2MZnKVSjk4Iabe0kEQMjdxbvKXjLdiEiG6gAnjoAxXnYsRzTCULKgPlK&X-Amz-Signature=fbc43dbc501a1c0e17f3598fdffa05318b0923d2fde537e543aff1db74500206&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
