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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CULJ56V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFsvXkgmMINHVc4MbTJDkd1wL3nAywYblAqbxeCzfJrvAiBRj%2BjdThm%2FM9wUSHSgiafgsHAAzNVZZ1NVG8hK0u9cEiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZtJcQahZyiTtU%2BbKtwD%2B2fKgsu2mDKYPDmC4OfAcNwb1b5FbC%2Bk6BGEOiCe0wfj5Z6MnXEbLLRDoP%2BGrQJNDsYens1cY0337rSc372eT9looIY0uPulcEpfED%2BbD4SWOFKguvznsxkL6c440pvfgI9cNzwWdeMQZ8xPlODF0xa9E%2BOjWPdJre3vP3dusJNO3DXVyPWsdCeezeF986Ua2v7R6ayPONK1sju7iUTIBbE8crdX%2FUfVJUmwW3saT4jTbxGYSFynPimPEyTnEa6woKQZY4TnN%2B0mHr%2BNhMIobxzeE6%2FHl6S0Fn1IDhtLDXv9vfY6vY9cfUJM9txR6uJNqaFXGDL9n8F8fgs%2BRxfBb7SsvNNHfR96Ujpw6LB5Zy%2F9x7488PCl5LcUbw3W4%2BwuP2wrfLWJQcDm%2FMHXftFL8RPFM6mDt9puyAixvkf%2FEZ9LwQeKJBscHp71RlTMJWI2pHyq2KwYyttIJZfd%2FoW7aunJDfJzkgKauwIPntmm%2FZ%2FJKKJ4pw7Qa%2BTIooAg0nI3cjMNPOdihCdVnzKOJ2ao1VKIikOiwuLaz2wGhcU5tmfA327HVRjU9qDI5E0cHj0MIalKqU9BX5NMyxDLS8GfveA4PPO7ozYJdk12xCzluTM5Qw%2BZrP9fPILqu1MwvZLZxAY6pgGBwDipj3TgKFV17vJ7cJzlZiUdXKp67HkogvqDGX2gZ%2B04b8MmcIqoCqSG18m1piY6a%2BiSTU9MS4SGxFZkgoc%2BXGvBkcEMSAvitgn4lqorlWodEoZ%2FydW25P07G3C%2F0DDHacx7UYg1h6D0EKEQXS4EX3lgYbn2iLk8R7N9MPaSHhfPcY5fgJwV%2B6zoQ2rZwi9Rt1UH0dpNUQoCBOoZGxoHYhvOvEN5&X-Amz-Signature=4d37ba967aa1710d6b3e0108f9a2024e8f49753c387e56eebaabbf68bd9184e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
