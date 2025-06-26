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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARK4ZT3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDdC02sXmpH9TrzDPbRx6bVHZAvHAGwrtk5M7dMkl0vyAiEAm0sN7CoLimfiFvKsQ9spocrMtouYbnUXZ5X7FTQdyAsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKG6kwa5xej%2FFDPYqyrcA32uhswX4gwRI3jFHwyuaF5SqYhPNg%2FQDQ61Be%2BpRPaHO1BSvUFaYR0lcQOe80B0Qs6MwLsx%2BdVoSU4Bb%2FVNxWetPr6ytsYDVD53gxDVthMZJ05nArapfPN9yHXCzWoDGP3xVFP4paJZd7pwGTOeKdVT7Tj8p%2BkJDj2v1ycJLe7PUIzfqHl2qk1in5ouG4vMX%2BEtReZyfaKnqx2CFGWmeDV16MzLvyOB%2Ff4GJkXu3NMCg%2B7WdLrCToe5HDfmncjM98ISCL%2FIKXV0zUm1vMYZInsgxOCFFCZMCCwO9IeME8oblwJEXCoK7NkIP1JAocGYezpLgM44aeaPgFb96yITe7oSfCcsRjR6e80017w%2BBaQhUcqOQTnDYu9V1KAvmcOlZjCaP%2FiU7KaLDXvSQXpmaciANZD1ilnKq%2BWBqRvpAEK%2Fi4J1xNauOfR%2Fk5dQxISG%2FPCzt2jlYvv5Yu1AkWsg9X6Qi7vr%2FuIMV9pjewBs2E%2BTbULxOwKVd0HICH5x%2BBNbuitwp%2FUbbBoJ3DScBzZHUplfj8CHAWNnaWoi%2B%2BPFWeHAoA8ziVUGWb6D4IpevcaQd3DsLekunuYurwNmIgT4d7AF0QVrcBUyW7VN7MEBsdQCW0vgaHzyBGyPwQCJMOeD9sIGOqUBCqC3jG1or07fXnHyoj7NQU9MzyPGN6C2DVy8ANGK7V8Wy%2BLW1tSG0ueUVHvNj52qtD%2FGj9Pj9uLMVt8z%2Bx3EjX8GSufsF%2FHTB03NL6rw5Dtd9LARTcqe6JMdacXyi8DCfde6yrSdrsqxGBnbeeeP5XY2iq0NIfRP%2BHR7xu8PQ9jBEinGt%2BeuDGLMXIy9kfVd5XzSCOEfJL%2BTs7IAVacf3iovsenN&X-Amz-Signature=a1bfa6a5d2b18d48f813911a18d8e490c8f356b565d56d6e33e8383e495dd338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
