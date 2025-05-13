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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7EGMSJC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGWjVDTaCO%2Bo4wyi8Fu%2Fj%2B9MXWitCbaMbQmyf8tsdabcAiATR%2BH2RJWJhc5GuoSUjfV0xtb89xOCQ5ElwATzYupeXiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6AVRNYalsHU4NMVEKtwDL8h8JDtyLHv69zAzh%2FMzABqTHa70ClGtdUCyLw0asW50xUM0%2Fy12ox40dimPPrYf7D%2Bp2AsM5DfefLsp9rrPxfmSYlxF79calniGcn%2FgZ83%2BAbXbJXFyNPDvPdatJRGzgL9CW2LToxnMMoPHjAFX%2BODW%2FKXv4ILBnnqYIqp1jqgTtKUC4p4koJj2jrlDF%2BN4FXqrPWlo9lB7a6ZROTV8pAxNLsrJoXZAtl0vN5NeUWNwfDfDnDkhVzUun%2BuptUPSFUePP47VoFB%2F6VvX0znx4Mv9g7EGb21KoYiCc94M5ovCdQmKZtyhS%2BmkrK3PEOu%2FEptBHHO47RWHILp5%2FLRA9ueq9orwDQSvu2uyhCvM68z2yRklbeU5MVZru3N5urC%2F9pEy5zhlIPBMyxLjVAO38rNUHMyBGdAVVEOyeYtz%2Fo0Ox9rmccE5tvR4NamVDsepYQdLXyvSBRHgTSMoOvnd%2BOVRfVheoC3pDQbysZdm6ZnmnCTIdiMzSUrBIYN4EQqSB%2FtfoYRdnuvHq3eMCqPjlT6ftKhVl%2FLcu0mXBUf06wAxlOlQhGxKQSVudMofvuML93QJK5iLQ8WwP5O3746uq%2BvFL%2B5TRqBMMcE11%2FNvdEijMwb4k%2BzPpGhBIGAwy9uNwQY6pgHjvTk3E0g2n2nbyGncmjEhSPLuG8TZyKKWyoRQYGsJqxcIQRwCjDggUOccoP45WL4IT9m1JT5mw9PkaFoyJj9Uqgoo6lCAC10AllU%2Bc5ybQN3RGkNF1tDcG4X1TtLIQS5G2h6Bfayws%2FLtzG6IUtv24vkIIUzrvneJcic3O56uV6H1vS4AtCvSKMxJm0%2BXni6bxUNpWwwuiar0%2B45L0QejIX1C6tHV&X-Amz-Signature=a6dd0e1ba37f9bb79759afd504574cc39de9362122d7093cc5798a353da70c76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
